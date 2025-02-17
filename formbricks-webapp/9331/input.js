"use strict";
exports.id = 9331;
exports.ids = [9331];
exports.modules = {

/***/ 438583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ CreateNewActionTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_lib_actionClass_actionClass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(466970);
/* harmony import */ var _modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248852);
/* harmony import */ var _modules_ui_components_code_action_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(264131);
/* harmony import */ var _modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(184142);
/* harmony import */ var _modules_ui_components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438624);
/* harmony import */ var _modules_ui_components_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61330);
/* harmony import */ var _modules_ui_components_no_code_action_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(433850);
/* harmony import */ var _modules_ui_components_tab_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(345290);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(311159);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(397674);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(200667);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(986090);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99922);
/* harmony import */ var _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(700137);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(124742);
/* __next_internal_client_entry_do_not_use__ CreateNewActionTab auto */ 
















const CreateNewActionTab = ({ actionClasses, setActionClasses, setOpen, isReadOnly, setLocalSurvey, environmentId })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_10__/* .useTranslate */ .WD)();
    const actionClassNames = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>actionClasses.map((actionClass)=>actionClass.name), [
        actionClasses
    ]);
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .mN)({
        defaultValues: {
            name: "",
            description: "",
            environmentId,
            type: "noCode",
            noCodeConfig: {
                type: "click",
                elementSelector: {
                    cssSelector: undefined,
                    innerHtml: undefined
                },
                urlFilters: []
            }
        },
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_12__/* .zodResolver */ .u)(_formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_13__/* .ZActionClassInput */ .Lu.superRefine((data, ctx)=>{
            if (data.name && actionClassNames.includes(data.name)) {
                ctx.addIssue({
                    code: zod__WEBPACK_IMPORTED_MODULE_14__.z.ZodIssueCode.custom,
                    path: [
                        "name"
                    ],
                    message: t("environments.actions.action_with_name_already_exists", {
                        name: data.name
                    })
                });
            }
        })),
        mode: "onChange"
    });
    const { control, handleSubmit, watch, reset } = form;
    const { isSubmitting } = form.formState;
    const actionClassKeys = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>{
        const codeActionClasses = actionClasses.filter((actionClass)=>actionClass.type === "code");
        return codeActionClasses.map((actionClass)=>actionClass.key);
    }, [
        actionClasses
    ]);
    const submitHandler = async (data)=>{
        const { type } = data;
        try {
            if (isReadOnly) {
                throw new Error(t("common.you_are_not_authorised_to_perform_this_action"));
            }
            if (data.name && actionClassNames.includes(data.name)) {
                throw new Error(t("environments.actions.action_with_name_already_exists", {
                    name: data.name
                }));
            }
            if (type === "code" && data.key && actionClassKeys.includes(data.key)) {
                throw new Error(t("environments.actions.action_with_key_already_exists", {
                    key: data.key
                }));
            }
            if (data.type === "noCode" && data.noCodeConfig?.type === "click" && data.noCodeConfig.elementSelector.cssSelector && !(0,_app_lib_actionClass_actionClass__WEBPACK_IMPORTED_MODULE_15__/* .isValidCssSelector */ .t)(data.noCodeConfig.elementSelector.cssSelector)) {
                throw new Error("Invalid CSS Selector");
            }
            let updatedAction = {};
            if (type === "noCode") {
                updatedAction = {
                    name: data.name.trim(),
                    description: data.description,
                    environmentId,
                    type: "noCode",
                    noCodeConfig: {
                        ...data.noCodeConfig,
                        ...data.type === "noCode" && data.noCodeConfig?.type === "click" && {
                            elementSelector: {
                                cssSelector: data.noCodeConfig.elementSelector.cssSelector,
                                innerHtml: data.noCodeConfig.elementSelector.innerHtml
                            }
                        }
                    }
                };
            } else if (type === "code") {
                updatedAction = {
                    name: data.name.trim(),
                    description: data.description,
                    environmentId,
                    type: "code",
                    key: data.key
                };
            }
            // const newActionClass: TActionClass =
            const createActionClassResposne = await (0,_actions__WEBPACK_IMPORTED_MODULE_16__/* .createActionClassAction */ .T)({
                action: updatedAction
            });
            if (!createActionClassResposne?.data) return;
            const newActionClass = createActionClassResposne.data;
            if (setActionClasses) {
                setActionClasses((prevActionClasses)=>[
                        ...prevActionClasses,
                        newActionClass
                    ]);
            }
            if (setLocalSurvey) {
                setLocalSurvey((prev)=>({
                        ...prev,
                        triggers: prev.triggers.concat({
                            actionClass: newActionClass
                        })
                    }));
            }
            reset();
            resetAllStates();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.success(t("environments.actions.action_created_successfully"));
        } catch (e) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.error(e.message);
        }
    };
    const resetAllStates = ()=>{
        reset();
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .FormProvider */ .Op, {
            ...form,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(submitHandler),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-h-[400px] w-full space-y-4 overflow-y-auto pr-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "w-3/5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormField */ .zB, {
                                    name: `type`,
                                    control: control,
                                    render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_label__WEBPACK_IMPORTED_MODULE_5__/* .Label */ .J, {
                                                    className: "font-semibold",
                                                    children: t("environments.actions.action_type")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_tab_toggle__WEBPACK_IMPORTED_MODULE_7__/* .TabToggle */ .w, {
                                                    id: "type",
                                                    options: [
                                                        {
                                                            value: "noCode",
                                                            label: t("common.no_code")
                                                        },
                                                        {
                                                            value: "code",
                                                            label: t("common.code")
                                                        }
                                                    ],
                                                    ...field,
                                                    defaultSelected: field.value
                                                })
                                            ]
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid w-full grid-cols-2 gap-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "col-span-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormField */ .zB, {
                                            control: control,
                                            name: "name",
                                            render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormItem */ .eI, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormLabel */ .lR, {
                                                            htmlFor: "actionNameInput",
                                                            children: t("environments.actions.what_did_your_user_do")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .MJ, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .p, {
                                                                type: "text",
                                                                id: "actionNameInput",
                                                                ...field,
                                                                placeholder: t("environments.actions.eg_clicked_download"),
                                                                isInvalid: !!error?.message
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormError */ .jQ, {})
                                                    ]
                                                })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "col-span-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormField */ .zB, {
                                            control: control,
                                            name: "description",
                                            render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormItem */ .eI, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormLabel */ .lR, {
                                                            htmlFor: "actionDescriptionInput",
                                                            children: t("common.description")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_form__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .MJ, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .p, {
                                                                type: "text",
                                                                id: "actionDescriptionInput",
                                                                ...field,
                                                                placeholder: t("environments.actions.eg_user_clicked_download_button"),
                                                                value: field.value ?? ""
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
                                className: "border-slate-200"
                            }),
                            watch("type") === "code" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_code_action_form__WEBPACK_IMPORTED_MODULE_2__/* .CodeActionForm */ .O, {
                                form: form,
                                isReadOnly: isReadOnly
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_no_code_action_form__WEBPACK_IMPORTED_MODULE_6__/* .NoCodeActionForm */ .L, {
                                form: form,
                                isReadOnly: isReadOnly
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex justify-end pt-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                                    type: "button",
                                    variant: "ghost",
                                    onClick: resetAllStates,
                                    children: t("common.cancel")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                                    type: "submit",
                                    loading: isSubmitting,
                                    children: t("environments.actions.create_action")
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 466970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ isValidCssSelector)
/* harmony export */ });
const isValidCssSelector = (selector)=>{
    if (!selector || selector.length === 0) {
        return false;
    }
    const element = document.createElement("div");
    try {
        element.querySelector(selector);
    } catch (err) {
        return false;
    }
    return true;
};


/***/ }),

/***/ 264131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ CodeActionForm)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/alert/index.tsx
var components_alert = __webpack_require__(886762);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(58303);
;// ../../node_modules/lucide-react/dist/esm/icons/terminal.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Terminal = (0,createLucideIcon/* default */.A)("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }
    ]
]);
 //# sourceMappingURL=terminal.js.map

;// ./modules/ui/components/code-action-form/index.tsx
/* __next_internal_client_entry_do_not_use__ CodeActionForm auto */ 





const CodeActionForm = ({ form, isReadOnly })=>{
    const { control, watch } = form;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                    control: control,
                    name: "key",
                    render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                    htmlFor: "codeActionKeyInput",
                                    children: t("common.key")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                        id: "codeActionKeyInput",
                                        placeholder: t("environments.actions.eg_download_cta_click_on_home"),
                                        ...field,
                                        className: "mb-2 w-1/2",
                                        value: field.value ?? "",
                                        isInvalid: !!error?.message,
                                        readOnly: isReadOnly,
                                        disabled: isReadOnly
                                    })
                                })
                            ]
                        })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* Alert */.Fc, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Terminal, {
                        className: "h-4 w-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertTitle */.XL, {
                        children: t("environments.actions.how_do_code_actions_work")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* AlertDescription */.TN, {
                        children: [
                            t("environments.actions.you_can_track_code_action_anywhere_in_your_app_using"),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                className: "rounded bg-slate-100 px-2 py-1 text-xs",
                                children: [
                                    'formbricks.track("',
                                    watch("key"),
                                    '")'
                                ]
                            }),
                            " ",
                            t("environments.actions.in_your_code_read_more_in_our"),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                href: "https://formbricks.com/docs/actions/code",
                                target: "_blank",
                                className: "underline",
                                children: t("common.docs")
                            }),
                            "."
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 433850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ NoCodeActionForm)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/alert/index.tsx
var components_alert = __webpack_require__(886762);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ./modules/ui/components/label/index.tsx
var label = __webpack_require__(61330);
// EXTERNAL MODULE: ./modules/ui/components/tab-toggle/index.tsx
var tab_toggle = __webpack_require__(345290);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(133980);
// EXTERNAL MODULE: ./modules/ui/components/advanced-option-toggle/index.tsx
var advanced_option_toggle = __webpack_require__(115713);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
;// ./modules/ui/components/no-code-action-form/components/css-selector.tsx
/* __next_internal_client_entry_do_not_use__ CssSelector auto */ 




const CssSelector = ({ form, disabled })=>{
    const { watch, control } = form;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
        control: control,
        name: "noCodeConfig.elementSelector.cssSelector",
        render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(advanced_option_toggle/* AdvancedOptionToggle */.S, {
                        disabled: disabled,
                        htmlId: "CssSelector",
                        isChecked: watch("noCodeConfig.elementSelector.cssSelector") !== undefined,
                        onToggle: (checked)=>{
                            field.onChange(checked ? "" : undefined);
                        },
                        title: t("environments.actions.css_selector"),
                        description: t("environments.actions.if_a_user_clicks_a_button_with_a_specific_css_class_or_id"),
                        childBorder: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "w-full rounded-lg border border-slate-100 p-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                type: "text",
                                className: "bg-white",
                                disabled: disabled,
                                placeholder: t("environments.actions.add_css_class_or_id"),
                                ...field,
                                isInvalid: !!error
                            })
                        })
                    })
                })
            })
    });
};

;// ./modules/ui/components/no-code-action-form/components/inner-html-selector.tsx
/* __next_internal_client_entry_do_not_use__ InnerHtmlSelector auto */ 




const InnerHtmlSelector = ({ form, disabled })=>{
    const { watch, control } = form;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
        control: control,
        name: "noCodeConfig.elementSelector.innerHtml",
        render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(advanced_option_toggle/* AdvancedOptionToggle */.S, {
                        disabled: disabled,
                        htmlId: "InnerText",
                        isChecked: watch("noCodeConfig.elementSelector.innerHtml") !== undefined,
                        onToggle: (checked)=>{
                            field.onChange(checked ? "" : undefined);
                        },
                        title: t("environments.actions.inner_text"),
                        description: t("environments.actions.if_a_user_clicks_a_button_with_a_specific_text"),
                        childBorder: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "w-full rounded-lg border border-slate-100 p-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-3 gap-x-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "col-span-3 flex items-end",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                        type: "text",
                                        disabled: disabled,
                                        className: "bg-white",
                                        placeholder: t("environments.actions.eg_install_app"),
                                        ...field,
                                        isInvalid: !!error
                                    })
                                })
                            })
                        })
                    })
                })
            })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/select/index.tsx
var components_select = __webpack_require__(678372);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(108996);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/trash.js
var trash = __webpack_require__(721964);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(200667);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ../../packages/lib/utils/url.ts
const testURLmatch = (testUrl, pageUrlValue, pageUrlRule)=>{
    switch(pageUrlRule){
        case "exactMatch":
            return testUrl === pageUrlValue ? "yes" : "no";
        case "contains":
            return testUrl.includes(pageUrlValue) ? "yes" : "no";
        case "startsWith":
            return testUrl.startsWith(pageUrlValue) ? "yes" : "no";
        case "endsWith":
            return testUrl.endsWith(pageUrlValue) ? "yes" : "no";
        case "notMatch":
            return testUrl !== pageUrlValue ? "yes" : "no";
        case "notContains":
            return !testUrl.includes(pageUrlValue) ? "yes" : "no";
        default:
            throw new Error("Invalid match type");
    }
};
// Helper function to validate callback URLs
const isValidCallbackUrl = (url, WEBAPP_URL)=>{
    try {
        const parsedUrl = new URL(url);
        const allowedSchemes = [
            "https:",
            "http:"
        ];
        // Extract the domain from WEBAPP_URL
        const parsedWebAppUrl = new URL(WEBAPP_URL);
        const allowedDomains = [
            parsedWebAppUrl.hostname
        ];
        return allowedSchemes.includes(parsedUrl.protocol) && allowedDomains.includes(parsedUrl.hostname);
    } catch (err) {
        return false;
    }
};

;// ./modules/ui/components/no-code-action-form/components/page-url-selector.tsx
/* __next_internal_client_entry_do_not_use__ PageUrlSelector auto */ 













const PageUrlSelector = ({ form, isReadOnly })=>{
    const [testUrl, setTestUrl] = (0,react.useState)("");
    const [isMatch, setIsMatch] = (0,react.useState)("");
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const filterType = form.watch("noCodeConfig.urlFilters")?.length ? "specific" : "all";
    const setFilterType = (value)=>{
        form.setValue("noCodeConfig.urlFilters", value === "all" ? [] : [
            {
                rule: "exactMatch",
                value: ""
            }
        ]);
    };
    const handleMatchClick = ()=>{
        const match = form.watch("noCodeConfig.urlFilters")?.some((urlFilter)=>{
            const res = testURLmatch(testUrl, urlFilter.value, urlFilter.rule) === "yes";
            return res;
        }) || false;
        const isMatch = match ? "yes" : "no";
        setIsMatch(isMatch);
        if (isMatch === "yes") dist/* default */.Ay.success("Your survey would be shown on this URL.");
        if (isMatch === "no") dist/* default */.Ay.error("Your survey would not be shown.");
    };
    const { fields, append: appendUrlRule, remove: removeUrlRule } = (0,index_esm/* useFieldArray */.jz)({
        control: form.control,
        name: "noCodeConfig.urlFilters"
    });
    const handleAddMore = ()=>{
        appendUrlRule({
            rule: "exactMatch",
            value: ""
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "mt-4 w-4/5",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                    control: form.control,
                    name: "noCodeConfig.urlFilters",
                    render: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                                    className: "font-semibold",
                                    children: t("environments.actions.page_filter")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "text-sm font-normal text-slate-500",
                                    children: t("environments.actions.limit_the_pages_on_which_this_action_gets_captured")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tab_toggle/* TabToggle */.w, {
                                    disabled: isReadOnly,
                                    id: "filter",
                                    onChange: (value)=>{
                                        setFilterType(value);
                                    },
                                    options: [
                                        {
                                            value: "all",
                                            label: t("environments.actions.on_all_pages")
                                        },
                                        {
                                            value: "specific",
                                            label: t("environments.actions.limit_to_specific_pages")
                                        }
                                    ],
                                    defaultSelected: filterType
                                })
                            ]
                        })
                })
            }),
            filterType === "specific" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-2 mt-4 w-full space-y-3 pe-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                        children: t("environments.actions.url")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(UrlInput, {
                        control: form.control,
                        fields: fields,
                        removeUrlRule: removeUrlRule,
                        disabled: isReadOnly
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                        variant: "secondary",
                        size: "sm",
                        type: "button",
                        onClick: handleAddMore,
                        disabled: isReadOnly,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {
                                className: "mr-2 h-4 w-4"
                            }),
                            t("environments.actions.add_url")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "text-sm text-slate-900",
                                children: t("environments.actions.test_your_url")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "text-xs text-slate-400",
                                children: t("environments.actions.enter_a_url_to_see_if_a_user_visiting_it_would_be_tracked")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "rounded bg-slate-50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "mt-1 flex items-end",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                            type: "text",
                                            value: testUrl,
                                            name: "noCodeConfig.urlFilters.testUrl",
                                            onChange: (e)=>{
                                                setTestUrl(e.target.value);
                                                setIsMatch("default");
                                            },
                                            className: (0,cn.cn)(isMatch === "yes" ? "border-green-500 bg-green-50" : isMatch === "no" ? "border-red-200 bg-red-50" : isMatch === "default" ? "border-slate-200" : "bg-white"),
                                            placeholder: "e.g. https://app.com/dashboard"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                            type: "button",
                                            variant: "secondary",
                                            className: "ml-2 whitespace-nowrap",
                                            onClick: ()=>{
                                                handleMatchClick();
                                            },
                                            children: t("environments.actions.test_match")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const UrlInput = ({ control, fields, removeUrlRule, disabled })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "flex w-full flex-col gap-2",
        children: fields.map((field, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    index !== 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "ml-1 text-sm font-bold text-slate-700",
                        children: "or"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                        name: `noCodeConfig.urlFilters.${index}.rule`,
                        control: control,
                        render: ({ field: { onChange, value, name } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                                        onValueChange: onChange,
                                        value: value,
                                        name: name,
                                        disabled: disabled,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                                                className: "w-[250px] bg-white",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                                                    placeholder: t("environments.actions.select_match_type")
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* SelectContent */.gC, {
                                                className: "bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "exactMatch",
                                                        children: t("environments.actions.exactly_matches")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "contains",
                                                        children: t("environments.actions.contains")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "startsWith",
                                                        children: t("environments.actions.starts_with")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "endsWith",
                                                        children: t("environments.actions.ends_with")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "notMatch",
                                                        children: t("environments.actions.does_not_exactly_match")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                                        value: "notContains",
                                                        children: t("environments.actions.does_not_contain")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                        control: control,
                        name: `noCodeConfig.urlFilters.${index}.value`,
                        render: ({ field, fieldState: { error } })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                        type: "text",
                                        className: "bg-white",
                                        disabled: disabled,
                                        ...field,
                                        placeholder: "e.g. https://app.com/dashboard",
                                        autoComplete: "off",
                                        isInvalid: !!error?.message
                                    })
                                })
                            })
                    }),
                    fields.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        variant: "secondary",
                        size: "sm",
                        type: "button",
                        onClick: ()=>{
                            removeUrlRule(index);
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash/* default */.A, {
                            className: "h-4 w-4"
                        })
                    })
                ]
            }, field.id))
    });
};

;// ./modules/ui/components/no-code-action-form/index.tsx
/* __next_internal_client_entry_do_not_use__ NoCodeActionForm auto */ 









const NoCodeActionForm = ({ form, isReadOnly })=>{
    const { control, watch } = form;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                name: `noCodeConfig.type`,
                control: control,
                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormItem */.eI, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                                        className: "font-semibold",
                                        children: t("environments.actions.what_is_the_user_doing")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tab_toggle/* TabToggle */.w, {
                                        disabled: isReadOnly,
                                        id: "userAction",
                                        ...field,
                                        defaultSelected: field.value,
                                        options: [
                                            {
                                                value: "click",
                                                label: t("environments.actions.click")
                                            },
                                            {
                                                value: "pageView",
                                                label: t("environments.actions.page_view")
                                            },
                                            {
                                                value: "exitIntent",
                                                label: t("environments.actions.exit_intent")
                                            },
                                            {
                                                value: "fiftyPercentScroll",
                                                label: t("environments.actions.fifty_percent_scroll")
                                            }
                                        ]
                                    })
                                ]
                            })
                        })
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-2",
                children: [
                    watch("noCodeConfig.type") === "click" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                        control: control,
                        name: "noCodeConfig.elementSelector",
                        render: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CssSelector, {
                                                    form: form,
                                                    disabled: isReadOnly
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(InnerHtmlSelector, {
                                                    form: form,
                                                    disabled: isReadOnly
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormError */.jQ, {})
                                ]
                            })
                    }),
                    watch("noCodeConfig.type") === "pageView" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* Alert */.Fc, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(info/* default */.A, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertTitle */.XL, {
                                children: t("environments.actions.page_view")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertDescription */.TN, {
                                children: t("environments.actions.this_action_will_be_triggered_when_the_page_is_loaded")
                            })
                        ]
                    }),
                    watch("noCodeConfig.type") === "exitIntent" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* Alert */.Fc, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(info/* default */.A, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertTitle */.XL, {
                                children: t("environments.actions.exit_intent")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertDescription */.TN, {
                                children: t("environments.actions.this_action_will_be_triggered_when_the_user_tries_to_leave_the_page")
                            })
                        ]
                    }),
                    watch("noCodeConfig.type") === "fiftyPercentScroll" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_alert/* Alert */.Fc, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(info/* default */.A, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertTitle */.XL, {
                                children: t("environments.actions.fifty_percent_scroll")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_alert/* AlertDescription */.TN, {
                                children: t("environments.actions.this_action_will_be_triggered_when_the_user_scrolls_50_percent_of_the_page")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PageUrlSelector, {
                        form: form,
                        isReadOnly: isReadOnly
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 345290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TabToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const TabToggle = ({ id, options, defaultSelected, onChange, disabled })=>{
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSelected);
    const handleChange = (event)=>{
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        role: "radiogroup",
        "aria-labelledby": `${id}-toggle-label`,
        className: "flex flex-col",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "mt-1 flex overflow-hidden rounded-md bg-slate-100 p-1",
            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    htmlFor: option.value.toString(),
                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex-1 cursor-pointer rounded-md py-2 text-center text-sm text-slate-800", selectedOption === option.value && "bg-white", "focus:ring-brand-dark focus:outline-none focus:ring-2 focus:ring-opacity-50", disabled && "cursor-not-allowed opacity-50"),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                            type: "radio",
                            name: id,
                            disabled: disabled,
                            id: option.value.toString(),
                            value: option.value.toString(),
                            checked: selectedOption === option.value,
                            onChange: handleChange,
                            className: "sr-only"
                        }),
                        option.label
                    ]
                }, option.value))
        })
    });
};


/***/ }),

/***/ 217537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 133980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Info", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
]);
 //# sourceMappingURL=info.js.map


/***/ }),

/***/ 721964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Trash)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Trash = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Trash", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ]
]);
 //# sourceMappingURL=trash.js.map


/***/ }),

/***/ 910330:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* eslint-disable import/no-extraneous-dependencies */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "A", ({
    enumerable: true,
    get: function() {
        return _serveredge.registerServerReference;
    }
}));
const _serveredge = __webpack_require__(672771);

//# sourceMappingURL=server-reference.js.map

/***/ }),

/***/ 438658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestForRsc: function() {
        return getClientReferenceManifestForRsc;
    },
    getServerModuleMap: function() {
        return getServerModuleMap;
    },
    setReferenceManifestsSingleton: function() {
        return setReferenceManifestsSingleton;
    },
    stringToUint8Array: function() {
        return stringToUint8Array;
    }
});
const _invarianterror = __webpack_require__(260233);
const _apppaths = __webpack_require__(789322);
const _workasyncstorageexternal = __webpack_require__(529294);
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, _apppaths.normalizeAppPath)(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw new _invarianterror.InvariantError(`Missing Client Reference Manifest for ${workStore.route}.`);
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new _invarianterror.InvariantError('Missing encryption key for Server Actions');
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map


/***/ }),

/***/ 208706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decryptActionBoundArgs: function() {
        return decryptActionBoundArgs;
    },
    encryptActionBoundArgs: function() {
        return encryptActionBoundArgs;
    }
});
__webpack_require__(47598);
const _serveredge = __webpack_require__(672771);
const _clientedge = __webpack_require__(979625);
const _nodewebstreamshelper = __webpack_require__(886023);
const _encryptionutils = __webpack_require__(438658);
const _workunitasyncstorageexternal = __webpack_require__(663033);
const isEdgeRuntime = "nodejs" === 'edge';
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
async function decodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (typeof key === 'undefined') {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get the iv (16 bytes) and the payload from the arg.
    const originalPayload = atob(arg);
    const ivValue = originalPayload.slice(0, 16);
    const payload = originalPayload.slice(16);
    const decrypted = textDecoder.decode(await (0, _encryptionutils.decrypt)(key, (0, _encryptionutils.stringToUint8Array)(ivValue), (0, _encryptionutils.stringToUint8Array)(payload)));
    if (!decrypted.startsWith(actionId)) {
        throw new Error('Invalid Server Action payload: failed to decrypt.');
    }
    return decrypted.slice(actionId.length);
}
/**
 * Encrypt the serialized string with the action id as the salt. Add a prefix to
 * later ensure that the payload is correctly decrypted, similar to a checksum.
 */ async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    _workunitasyncstorageexternal.workUnitAsyncStorage.exit(()=>crypto.getRandomValues(randomBytes));
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
async function encryptActionBoundArgs(actionId, args) {
    const { clientModules } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Create an error before any asynchrounous calls, to capture the original
    // call stack in case we need it when the serialization errors.
    const error = new Error();
    Error.captureStackTrace(error, encryptActionBoundArgs);
    let didCatchError = false;
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientModules, {
        onError (err) {
            // We're only reporting one error at a time, starting with the first.
            if (didCatchError) {
                return;
            }
            didCatchError = true;
            // Use the original error message together with the previously created
            // stack, because err.stack is a useless Flight Server call stack.
            error.message = err instanceof Error ? err.message : String(err);
        }
    }));
    if (didCatchError) {
        if (false) {}
        throw error;
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return encodeActionBoundArg(actionId, serialized);
    }
    const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
    const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
    const cacheKey = actionId + serialized;
    const cachedEncrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.get(cacheKey)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.encryptedBoundArgs.get(cacheKey));
    if (cachedEncrypted) {
        return cachedEncrypted;
    }
    const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
    cacheSignal == null ? void 0 : cacheSignal.beginRead();
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    cacheSignal == null ? void 0 : cacheSignal.endRead();
    prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.set(cacheKey, encrypted);
    return encrypted;
}
async function decryptActionBoundArgs(actionId, encrypted) {
    const { edgeRscModuleMapping, rscModuleMapping } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Decrypt the serialized string with the action id as the salt.
    const decrypted = await decodeActionBoundArg(actionId, await encrypted);
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decrypted));
            controller.close();
        }
    }), {
        serverConsumerManifest: {
            // moduleLoading must be null because we don't want to trigger preloads of ClientReferences
            // to be added to the current execution. Instead, we'll wait for any ClientReference
            // to be emitted which themselves will handle the preloading.
            moduleLoading: null,
            moduleMap: isEdgeRuntime ? edgeRscModuleMapping : rscModuleMapping,
            serverModuleMap: (0, _encryptionutils.getServerModuleMap)()
        }
    });
    return deserialized;
}

//# sourceMappingURL=encryption.js.map

/***/ }),

/***/ 124742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ createActionClassAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const createActionClassAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f95a9cd2fc43decbbdb316b4c466f98fbb1fc7292", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "createActionClassAction")

/***/ })

};
;