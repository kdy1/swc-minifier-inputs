exports.id = 2171;
exports.ids = [2171];
exports.modules = {

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 862449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ CreateTeamModal)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fcb6302bee020bf7d696519228772c9d19427880f&name=createTeamAction!

const createTeamAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fcb6302bee020bf7d696519228772c9d19427880f", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createTeamAction")
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ./modules/ui/components/label/index.tsx
var label = __webpack_require__(61330);
// EXTERNAL MODULE: ./modules/ui/components/modal/index.tsx
var modal = __webpack_require__(383207);
// EXTERNAL MODULE: ./modules/ui/components/typography/index.tsx
var typography = __webpack_require__(785631);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(969614);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
;// ./modules/ee/teams/team-list/components/create-team-modal.tsx
/* __next_internal_client_entry_do_not_use__ CreateTeamModal auto */ 












const CreateTeamModal = ({ open, setOpen, organizationId, onCreate })=>{
    const [teamName, setTeamName] = (0,react.useState)("");
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const handleTeamCreation = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const name = teamName.trim();
        const createTeamActionResponse = await createTeamAction({
            name,
            organizationId
        });
        if (createTeamActionResponse?.data) {
            dist/* default */.Ay.success(t("environments.settings.teams.team_created_successfully"));
            if (typeof onCreate === "function") {
                onCreate(createTeamActionResponse.data);
            }
            router.refresh();
            setOpen(false);
            setTeamName("");
        } else {
            const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(createTeamActionResponse);
            dist/* default */.Ay.error(errorMessage);
        }
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(modal/* Modal */.a, {
        noPadding: true,
        closeOnOutsideClick: true,
        size: "md",
        open: open,
        setOpen: setOpen,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "rounded-t-lg bg-slate-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex w-full items-center gap-4 p-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(users/* default */.A, {
                                className: "h-5 w-5"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(typography.H4, {
                                children: t("environments.settings.teams.create_new_team")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                onSubmit: handleTeamCreation,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col overflow-auto rounded-lg bg-white p-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                                htmlFor: "team-name",
                                className: "mb-1 text-sm font-medium text-slate-900",
                                children: t("environments.settings.teams.team_name")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                                id: "team-name",
                                name: "team-name",
                                value: teamName,
                                onChange: (e)=>{
                                    setTeamName(e.target.value);
                                },
                                placeholder: t("environments.settings.teams.enter_team_name")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-end justify-end gap-2 p-6 pt-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                variant: "secondary",
                                type: "button",
                                onClick: ()=>{
                                    setOpen(false);
                                    setTeamName("");
                                },
                                children: t("common.cancel")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                disabled: !teamName || isLoading,
                                loading: isLoading,
                                type: "submit",
                                children: t("environments.settings.teams.create")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 184142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MJ: () => (/* binding */ FormControl),
/* harmony export */   Op: () => (/* reexport safe */ react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Op),
/* harmony export */   Rr: () => (/* binding */ FormDescription),
/* harmony export */   eI: () => (/* binding */ FormItem),
/* harmony export */   jQ: () => (/* binding */ FormError),
/* harmony export */   lR: () => (/* binding */ FormLabel),
/* harmony export */   zB: () => (/* binding */ FormField)
/* harmony export */ });
/* unused harmony export useFormField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(200667);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983773);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61330);
/* __next_internal_client_entry_do_not_use__ useFormField,FormProvider,FormItem,FormLabel,FormControl,FormDescription,FormError,FormField auto */ 





const FormFieldContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .xI, {
            ...props
        })
    });
};
const useFormField = ()=>{
    const fieldContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(FormFieldContext);
    const itemContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(FormItemContext);
    const { getFieldState, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormContext */ .xW)();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const FormItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const id = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("space-y-2", className),
            ...props
        })
    });
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_label__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .J, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(error ? "text-red-500" : "text-slate-800", className),
        htmlFor: formItemId,
        ...props
    });
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__/* .Slot */ .DX, {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    });
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const { formItemId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        id: formItemId,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-xs text-slate-500", className),
        ...props
    });
});
FormDescription.displayName = "FormDescription";
const FormError = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const errorMessage = error?.message || error?.root?.message;
    const body = error ? String(errorMessage) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        id: formMessageId,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-error text-sm", className),
        ...props,
        children: body
    });
});
FormError.displayName = "FormError";



/***/ }),

/***/ 608264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ MultiSelect)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/command/index.tsx
var command = __webpack_require__(454319);
// EXTERNAL MODULE: ../../node_modules/class-variance-authority/dist/index.mjs
var dist = __webpack_require__(607918);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./modules/ui/components/multi-select/badge.tsx




const badgeVariants = (0,dist/* cva */.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ../../node_modules/cmdk/dist/index.mjs + 1 modules
var cmdk_dist = __webpack_require__(153779);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(673766);
;// ./modules/ui/components/multi-select/index.tsx
/* __next_internal_client_entry_do_not_use__ MultiSelect auto */ 





function MultiSelect(props) {
    const { options, value, onChange, disabled = false, placeholder = "Select options..." } = props;
    const inputRef = react.useRef(null);
    const [selected, setSelected] = react.useState(()=>{
        if (value) {
            return value.map((val)=>options.find((o)=>o.value === val)).filter((o)=>!!o);
        }
        return [];
    });
    const [open, setOpen] = react.useState(false);
    const [inputValue, setInputValue] = react.useState("");
    react.useEffect(()=>{
        if (value) {
            setSelected(value.map((val)=>options.find((o)=>o.value === val)).filter((o)=>!!o));
        }
    }, [
        value,
        options
    ]);
    const handleUnselect = react.useCallback((option)=>{
        if (disabled) return;
        setSelected((prev)=>{
            const newSelected = prev.filter((s)=>s.value !== option.value);
            onChange?.(newSelected.map((s)=>s.value));
            return newSelected;
        });
    }, [
        onChange,
        disabled
    ]);
    const handleKeyDown = react.useCallback((e)=>{
        const input = inputRef.current;
        if (!input || disabled) return;
        if ((e.key === "Delete" || e.key === "Backspace") && input.value === "") {
            setSelected((prev)=>{
                const newSelected = [
                    ...prev
                ];
                newSelected.pop();
                onChange?.(newSelected.map((s)=>s.value));
                return newSelected;
            });
        }
        if (e.key === "Escape") {
            input.blur();
        }
    }, [
        onChange,
        disabled
    ]);
    const selectableOptions = react.useMemo(()=>{
        return options.filter((o)=>!selected.some((s)=>s.value === o.value)).filter((o)=>{
            if (!inputValue) return true;
            return o.label.toLowerCase().includes(inputValue.toLowerCase());
        });
    }, [
        options,
        selected,
        inputValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command/* Command */.uB, {
        onKeyDown: handleKeyDown,
        className: `overflow-visible bg-white ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: `border-input ring-offset-background group rounded-md border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2 ${disabled ? "pointer-events-none" : "focus-within:ring-ring"}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex flex-wrap gap-1",
                    children: [
                        selected.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(Badge, {
                                className: "rounded-md",
                                children: [
                                    option.label,
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                        className: "ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2",
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter") {
                                                handleUnselect(option);
                                            }
                                        },
                                        onMouseDown: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                        },
                                        onClick: ()=>handleUnselect(option),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                            className: "text-muted-foreground hover:text-foreground h-3 w-3"
                                        })
                                    })
                                ]
                            }, option.value)),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(cmdk_dist/* Command */.uB.Input, {
                            ref: inputRef,
                            value: inputValue,
                            onValueChange: setInputValue,
                            onBlur: ()=>setOpen(false),
                            onFocus: ()=>setOpen(true),
                            placeholder: placeholder,
                            disabled: disabled,
                            className: "placeholder:text-muted-foreground h-5 flex-1 border-0 bg-transparent pl-2 text-sm outline-none"
                        })
                    ]
                })
            }),
            open && selectableOptions.length > 0 && !disabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "relative mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandList */.oI, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "text-popover-foreground animate-in absolute top-0 z-10 max-h-32 w-full rounded-md border bg-white shadow-md outline-none",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandGroup */.L$, {
                            className: "h-full overflow-auto",
                            children: selectableOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandItem */.h_, {
                                    onMouseDown: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                    },
                                    onSelect: ()=>{
                                        if (disabled) return;
                                        const newSelected = [
                                            ...selected,
                                            option
                                        ];
                                        setSelected(newSelected);
                                        onChange?.(newSelected.map((o)=>o.value));
                                        setInputValue("");
                                    },
                                    className: "cursor-pointer",
                                    children: option.label
                                }, option.value))
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 785631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H4: () => (/* binding */ H4),
/* harmony export */   Oc: () => (/* binding */ Small),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   QX: () => (/* binding */ Muted)
/* harmony export */ });
/* unused harmony exports H1, H2, H3, Lead, Large, InlineCode, List, Quote */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const H1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("scroll-m-20 text-4xl font-bold tracking-tight text-slate-800 lg:text-4xl", props.className),
        children: props.children
    });
});
H1.displayName = "H1";

const H2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-slate-800 first:mt-0", props.className),
        children: props.children
    });
});
H2.displayName = "H2";

const H3 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("scroll-m-20 text-2xl font-semibold tracking-tight text-slate-800", props.className),
        children: props.children
    });
});
H3.displayName = "H3";

const H4 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("scroll-m-20 text-xl font-semibold tracking-tight text-slate-800", props.className),
        children: props.children
    });
});
H4.displayName = "H4";

const Lead = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-xl text-slate-800", props.className),
        children: props.children
    });
});
Lead.displayName = "Lead";

const P = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("leading-7 [&:not(:first-child)]:mt-6", props.className),
        children: props.children
    });
});
P.displayName = "P";

const Large = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold", props.className),
        children: props.children
    });
});
Large.displayName = "Large";

const Small = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm font-medium leading-none", props.className),
        children: props.children
    });
});
Small.displayName = "Small";

const Muted = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-sm", props.className),
        children: props.children
    });
});
Muted.displayName = "Muted";

const InlineCode = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", props.className),
        children: props.children
    });
});
InlineCode.displayName = "InlineCode";

const List = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("my-6 ml-6 list-disc [&>li]:mt-2", props.className),
        children: props.children
    });
});
List.displayName = "List";

const Quote = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
        ...props,
        ref: ref,
        className: (0,_modules_ui_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-6 border-l-2 pl-6 italic", props.className),
        children: props.children
    });
});
Quote.displayName = "Quote";



/***/ }),

/***/ 742851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ membershipCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
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
    revalidate: ({ organizationId, userId })=>{
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(membershipCache.tag.byOrganizationId(organizationId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(membershipCache.tag.byUserId(userId));
        }
    }
};


/***/ }),

/***/ 757706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ organizationCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const organizationCache = {
    tag: {
        byId (id) {
            return `organizations-${id}`;
        },
        byUserId (userId) {
            return `users-${userId}-organizations`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-organizations`;
        },
        byCount () {
            return "organizations-count";
        }
    },
    revalidate: ({ id, userId, environmentId, count })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(organizationCache.tag.byId(id));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(organizationCache.tag.byUserId(userId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(organizationCache.tag.byEnvironmentId(environmentId));
        }
        if (count) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(organizationCache.tag.byCount());
        }
    }
};


/***/ }),

/***/ 320280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ti: () => (/* binding */ checkRoleManagementPermission),
  XU: () => (/* binding */ updateInviteAction),
  Iu: () => (/* binding */ updateMembershipAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(725322);
// EXTERNAL MODULE: ./lib/cache/invite.ts
var cache_invite = __webpack_require__(896484);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/ee/role-management/lib/invite.ts




const updateInvite = async (inviteId, data)=>{
    try {
        const invite = await src/* prisma */.z.invite.update({
            where: {
                id: inviteId
            },
            data
        });
        if (invite === null) {
            throw new errors/* ResourceNotFoundError */.CE("Invite", inviteId);
        }
        cache_invite/* inviteCache */.i.revalidate({
            id: invite.id,
            organizationId: invite.organizationId
        });
        return true;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new errors/* ResourceNotFoundError */.CE("Invite", inviteId);
        } else {
            throw error; // Re-throw any other errors
        }
    }
};

// EXTERNAL MODULE: ./lib/cache/membership.ts
var cache_membership = __webpack_require__(742851);
// EXTERNAL MODULE: ./lib/cache/team.ts
var team = __webpack_require__(753304);
// EXTERNAL MODULE: ../../packages/lib/organization/cache.ts
var cache = __webpack_require__(189147);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(595111);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/memberships.ts
var memberships = __webpack_require__(76614);
;// ./modules/ee/role-management/lib/membership.ts











const updateMembership = async (userId, organizationId, data)=>{
    (0,validate/* validateInputs */.C)([
        userId,
        common/* ZString */.eI
    ], [
        organizationId,
        common/* ZString */.eI
    ], [
        data,
        memberships/* ZMembershipUpdateInput */.io
    ]);
    try {
        const membership = await src/* prisma */.z.membership.update({
            where: {
                userId_organizationId: {
                    userId,
                    organizationId
                }
            },
            data
        });
        const teamMemberships = await src/* prisma */.z.teamUser.findMany({
            where: {
                userId,
                team: {
                    organizationId
                }
            },
            select: {
                teamId: true
            }
        });
        if (data.role === "owner" || data.role === "manager") {
            await src/* prisma */.z.teamUser.updateMany({
                where: {
                    userId,
                    team: {
                        organizationId
                    }
                },
                data: {
                    role: "admin"
                }
            });
        }
        const organizationMembers = await src/* prisma */.z.membership.findMany({
            where: {
                organizationId
            },
            select: {
                userId: true
            }
        });
        team/* teamCache */.g.revalidate({
            userId,
            organizationId
        });
        teamMemberships.forEach((teamMembership)=>{
            team/* teamCache */.g.revalidate({
                id: teamMembership.teamId
            });
        });
        organizationMembers.forEach((member)=>{
            cache/* organizationCache */.S.revalidate({
                userId: member.userId
            });
        });
        cache_membership/* membershipCache */.r.revalidate({
            userId,
            organizationId
        });
        project_cache/* projectCache */.E.revalidate({
            userId
        });
        return membership;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new errors/* ResourceNotFoundError */.CE("Membership", `userId: ${userId}, organizationId: ${organizationId}`);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
;// ../../packages/database/zod/invites.ts

const ZInvite = lib.z.object({
    id: lib.z.string(),
    email: lib.z.string().email(),
    name: lib.z.string().nullable(),
    organizationId: lib.z.string(),
    creatorId: lib.z.string(),
    acceptorId: lib.z.string().nullable(),
    createdAt: lib.z.date(),
    expiresAt: lib.z.date(),
    role: lib.z.enum([
        "owner",
        "manager",
        "member",
        "billing"
    ]),
    teamIds: lib.z.array(lib.z.string())
});

;// ./modules/ee/role-management/types/invites.ts

const ZInviteUpdateInput = ZInvite.pick({
    role: true
});

// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/role-management/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f3a48084fae0d461868aa819e5b7b93bec73b1b60":"updateMembershipAction","7f6c465cadae01e2069341389046c2986069fbd010":"updateInviteAction","7fc1aadc038b6a86ba3265bdb8830b8f2e2d597611":"checkRoleManagementPermission"} */ 













const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkRoleManagementPermission = async (organizationId)=>{
    const organization = await (0,service/* getOrganization */.SA)(organizationId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const isRoleManagementAllowed = await (0,utils/* getRoleManagementPermission */.rQ)(organization);
    if (!isRoleManagementAllowed) {
        throw new errors/* OperationNotAllowedError */.J4("Role management is not allowed for this organization");
    }
};
const ZUpdateInviteAction = lib.z.object({
    inviteId: common/* ZUuid */.C7,
    organizationId: common/* ZId */.i4,
    data: ZInviteUpdateInput
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateInviteAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateInviteAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: parsedInput.organizationId,
        access: [
            {
                data: parsedInput.data,
                schema: ZInviteUpdateInput,
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            }
        ]
    });
    if (!constants/* IS_FORMBRICKS_CLOUD */.Si && parsedInput.data.role === "billing") {
        throw new errors/* ValidationError */.yI("Billing role is not allowed");
    }
    await checkRoleManagementPermission(parsedInput.organizationId);
    return await updateInvite(parsedInput.inviteId, parsedInput.data);
});
const ZUpdateMembershipAction = lib.z.object({
    userId: common/* ZId */.i4,
    organizationId: common/* ZId */.i4,
    data: memberships/* ZMembershipUpdateInput */.io
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateMembershipAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateMembershipAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: parsedInput.organizationId,
        access: [
            {
                data: parsedInput.data,
                schema: memberships/* ZMembershipUpdateInput */.io,
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            }
        ]
    });
    if (!constants/* IS_FORMBRICKS_CLOUD */.Si && parsedInput.data.role === "billing") {
        throw new errors/* ValidationError */.yI("Billing role is not allowed");
    }
    await checkRoleManagementPermission(parsedInput.organizationId);
    return await updateMembership(parsedInput.userId, parsedInput.organizationId, parsedInput.data);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    checkRoleManagementPermission,
    updateInviteAction,
    updateMembershipAction
]);
(0,server_reference/* registerServerReference */.A)(checkRoleManagementPermission, "7fc1aadc038b6a86ba3265bdb8830b8f2e2d597611", null);
(0,server_reference/* registerServerReference */.A)(updateInviteAction, "7f6c465cadae01e2069341389046c2986069fbd010", null);
(0,server_reference/* registerServerReference */.A)(updateMembershipAction, "7f3a48084fae0d461868aa819e5b7b93bec73b1b60", null);


/***/ }),

/***/ 304175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w6: () => (/* binding */ createTeamAction),
  de: () => (/* binding */ deleteTeamAction),
  qF: () => (/* binding */ getTeamDetailsAction),
  YV: () => (/* binding */ getTeamRoleAction),
  $K: () => (/* binding */ updateTeamDetailsAction)
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
// EXTERNAL MODULE: ./modules/ee/role-management/actions.ts + 4 modules
var actions = __webpack_require__(320280);
// EXTERNAL MODULE: ./modules/ee/teams/lib/roles.ts
var roles = __webpack_require__(562147);
// EXTERNAL MODULE: ./lib/cache/organization.ts
var organization = __webpack_require__(757706);
// EXTERNAL MODULE: ./lib/cache/team.ts
var cache_team = __webpack_require__(753304);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
;// ./modules/ee/teams/project-teams/types/team.ts


const ZTeamPermission = lib.z.enum([
    "read",
    "readWrite",
    "manage"
]);
const ZProjectTeam = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string(),
    memberCount: lib.z.number(),
    permission: ZTeamPermission
});
const TOrganizationTeam = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string()
});

// EXTERNAL MODULE: ../../packages/types/memberships.ts
var memberships = __webpack_require__(76614);
;// ./modules/ee/teams/team-list/types/team.ts




const ZTeamRole = lib.z.enum([
    "admin",
    "contributor"
]);
const ZUserTeam = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string(),
    userRole: ZTeamRole,
    memberCount: lib.z.number()
});
const ZOtherTeam = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string(),
    memberCount: lib.z.number()
});
const ZOrganizationTeam = lib.z.object({
    id: lib.z.string().cuid2(),
    name: lib.z.string()
});
const ZTeamDetails = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string(),
    organizationId: common/* ZId */.i4,
    members: lib.z.array(lib.z.object({
        userId: common/* ZId */.i4,
        name: lib.z.string(),
        role: ZTeamRole
    })),
    projects: lib.z.array(lib.z.object({
        projectId: common/* ZId */.i4,
        projectName: lib.z.string(),
        permission: ZTeamPermission
    }))
});
const ZOrganizationMember = lib.z.object({
    id: common/* ZId */.i4,
    name: lib.z.string(),
    role: memberships/* ZOrganizationRole */.mp
});
const ZTeamSettingsFormSchema = lib.z.object({
    name: lib.z.string().trim().min(1, "Team name is required"),
    members: lib.z.array(lib.z.object({
        userId: lib.z.string().trim().min(1, "Please select a member"),
        role: ZTeamRole
    })).min(1, {
        message: "Please add at least one member"
    }),
    projects: lib.z.array(lib.z.object({
        projectId: lib.z.string().trim().min(1, "Please select a project"),
        permission: ZTeamPermission
    })).min(1, {
        message: "Please add at least one project"
    })
});
const ZTeamMember = lib.z.object({
    role: ZTeamRole,
    id: lib.z.string(),
    name: lib.z.string(),
    email: lib.z.string(),
    isRoleEditable: lib.z.boolean()
});
const ZTeam = lib.z.object({
    id: lib.z.string(),
    name: lib.z.string({
        message: "Team name is required"
    }).trim().min(1, {
        message: "Team name must be at least 1 character long"
    }),
    teamUsers: lib.z.array(ZTeamMember)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var project_cache = __webpack_require__(595111);
// EXTERNAL MODULE: ../../packages/lib/user/cache.ts
var user_cache = __webpack_require__(981347);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
;// ./modules/ee/teams/team-list/lib/team.ts














const getTeamsByOrganizationId = (0,react.cache)(async (organizationId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            organizationId,
            common/* ZId */.i4
        ]);
        try {
            const teams = await src/* prisma */.z.team.findMany({
                where: {
                    organizationId
                },
                select: {
                    id: true,
                    name: true
                }
            });
            const projectTeams = teams.map((team)=>({
                    id: team.id,
                    name: team.name
                }));
            return projectTeams;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getTeamsByOrganizationId-${organizationId}`
    ], {
        tags: [
            cache_team/* teamCache */.g.tag.byOrganizationId(organizationId)
        ]
    })());
const getUserTeams = (0,react.cache)(async (userId, organizationId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            userId,
            lib.z.string()
        ], [
            organizationId,
            common/* ZId */.i4
        ]);
        try {
            const teams = await src/* prisma */.z.team.findMany({
                where: {
                    organizationId,
                    teamUsers: {
                        some: {
                            userId
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    teamUsers: {
                        where: {
                            userId
                        },
                        select: {
                            role: true
                        }
                    },
                    _count: {
                        select: {
                            teamUsers: true
                        }
                    }
                }
            });
            const userTeams = teams.map((team)=>({
                    id: team.id,
                    name: team.name,
                    userRole: team.teamUsers[0].role,
                    memberCount: team._count.teamUsers
                }));
            return userTeams;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserTeams-${userId}-${organizationId}`
    ], {
        tags: [
            cache_team/* teamCache */.g.tag.byUserId(userId),
            user_cache/* userCache */.g.tag.byId(userId),
            cache_team/* teamCache */.g.tag.byOrganizationId(organizationId)
        ]
    })());
const getOtherTeams = (0,react.cache)(async (userId, organizationId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            userId,
            lib.z.string()
        ], [
            organizationId,
            common/* ZId */.i4
        ]);
        try {
            const teams = await src/* prisma */.z.team.findMany({
                where: {
                    organizationId,
                    teamUsers: {
                        none: {
                            userId
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    _count: {
                        select: {
                            teamUsers: true
                        }
                    }
                }
            });
            const otherTeams = teams.map((team)=>({
                    id: team.id,
                    name: team.name,
                    memberCount: team._count.teamUsers
                }));
            return otherTeams;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getOtherTeams-${userId}-${organizationId}`
    ], {
        tags: [
            cache_team/* teamCache */.g.tag.byUserId(userId),
            user_cache/* userCache */.g.tag.byId(userId),
            cache_team/* teamCache */.g.tag.byOrganizationId(organizationId)
        ]
    })());
const getTeams = (0,react.cache)(async (userId, organizationId)=>(0,cache/* cache */.P)(async ()=>{
        const membership = await src/* prisma */.z.membership.findUnique({
            where: {
                userId_organizationId: {
                    userId,
                    organizationId
                }
            },
            select: {
                role: true
            }
        });
        if (!membership) {
            throw new errors/* ResourceNotFoundError */.CE("Membership", null);
        }
        const userTeams = await getUserTeams(userId, organizationId);
        let otherTeams = await getOtherTeams(userId, organizationId);
        return {
            userTeams,
            otherTeams
        };
    }, [
        `getTeams-${userId}-${organizationId}`
    ], {
        tags: [
            cache_team/* teamCache */.g.tag.byUserId(userId),
            user_cache/* userCache */.g.tag.byId(userId),
            cache_team/* teamCache */.g.tag.byOrganizationId(organizationId)
        ]
    })());
const createTeam = async (organizationId, name)=>{
    (0,validate/* validateInputs */.C)([
        organizationId,
        common/* ZId */.i4
    ], [
        name,
        lib.z.string()
    ]);
    try {
        const doesTeamExist = await src/* prisma */.z.team.findFirst({
            where: {
                name,
                organizationId
            }
        });
        if (doesTeamExist) {
            throw new errors/* InvalidInputError */.oC("Team name already exists");
        }
        if (name.length < 1) {
            throw new errors/* InvalidInputError */.oC("Team name must be at least 1 character long");
        }
        const team = await src/* prisma */.z.team.create({
            data: {
                name,
                organizationId
            },
            select: {
                id: true
            }
        });
        cache_team/* teamCache */.g.revalidate({
            organizationId
        });
        return team.id;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getTeamDetails = (0,react.cache)(async (teamId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            teamId,
            common/* ZId */.i4
        ]);
        try {
            const team = await src/* prisma */.z.team.findUnique({
                where: {
                    id: teamId
                },
                select: {
                    id: true,
                    name: true,
                    organizationId: true,
                    teamUsers: {
                        select: {
                            userId: true,
                            role: true,
                            user: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    projectTeams: {
                        select: {
                            projectId: true,
                            project: {
                                select: {
                                    name: true
                                }
                            },
                            permission: true
                        }
                    }
                }
            });
            if (!team) {
                return null;
            }
            return {
                id: team.id,
                name: team.name,
                organizationId: team.organizationId,
                members: team.teamUsers.map((teamUser)=>({
                        userId: teamUser.userId,
                        name: teamUser.user.name,
                        role: teamUser.role
                    })),
                projects: team.projectTeams.map((projectTeam)=>({
                        projectId: projectTeam.projectId,
                        projectName: projectTeam.project.name,
                        permission: projectTeam.permission
                    }))
            };
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getTeamDetails-${teamId}`
    ], {
        tags: [
            cache_team/* teamCache */.g.tag.byId(teamId)
        ]
    })());
const deleteTeam = async (teamId)=>{
    (0,validate/* validateInputs */.C)([
        teamId,
        common/* ZId */.i4
    ]);
    try {
        const deletedTeam = await src/* prisma */.z.team.delete({
            where: {
                id: teamId
            },
            select: {
                organizationId: true,
                projectTeams: {
                    select: {
                        projectId: true
                    }
                }
            }
        });
        cache_team/* teamCache */.g.revalidate({
            id: teamId,
            organizationId: deletedTeam.organizationId
        });
        for (const projectTeam of deletedTeam.projectTeams){
            cache_team/* teamCache */.g.revalidate({
                projectId: projectTeam.projectId
            });
        }
        return true;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const updateTeamDetails = async (teamId, data)=>{
    (0,validate/* validateInputs */.C)([
        teamId,
        common/* ZId */.i4
    ], [
        data,
        ZTeamSettingsFormSchema
    ]);
    try {
        const { name, members, projects } = data;
        const team = await src/* prisma */.z.team.findUnique({
            where: {
                id: teamId
            }
        });
        if (!team) {
            throw new errors/* ResourceNotFoundError */.CE("Team", teamId);
        }
        const currentTeamDetails = await getTeamDetails(teamId);
        if (!currentTeamDetails) {
            throw new Error("Team not found");
        }
        // Check that all users exist within the organization's membership.
        const userIds = members.map((m)=>m.userId);
        if (userIds.length > 0) {
            const orgUsersCount = await src/* prisma */.z.membership.count({
                where: {
                    userId: {
                        in: userIds
                    },
                    organizationId: team.organizationId
                }
            });
            if (orgUsersCount !== userIds.length) {
                throw new Error("Some specified users do not belong to the organization's membership.");
            }
        }
        // Check that all specified projects belong to the same organization.
        const projectIds = projects.map((p)=>p.projectId);
        if (projectIds.length > 0) {
            const orgProjectsCount = await src/* prisma */.z.project.count({
                where: {
                    id: {
                        in: projectIds
                    },
                    organizationId: team.organizationId
                }
            });
            if (orgProjectsCount !== projectIds.length) {
                throw new Error("Some specified projects do not belong to the organization.");
            }
        }
        // Arrays for tracking member changes
        const deletedMembers = [];
        // Arrays for tracking project changes
        const deletedProjects = [];
        // Determine deleted members (in current but not in new)
        for (const cm of currentTeamDetails.members){
            if (!members.some((m)=>m.userId === cm.userId)) {
                deletedMembers.push(cm.userId);
            }
        }
        // Determine deleted projects (in current but not in new)
        for (const cp of currentTeamDetails.projects){
            if (!projects.some((p)=>p.projectId === cp.projectId)) {
                deletedProjects.push(cp.projectId);
            }
        }
        // Now build the payload using the arrays computed above
        const payload = {
            name: currentTeamDetails.name !== name ? name : undefined,
            teamUsers: {
                deleteMany: {
                    userId: {
                        in: deletedMembers
                    }
                },
                upsert: members.map((m)=>({
                        where: {
                            teamId_userId: {
                                teamId,
                                userId: m.userId
                            }
                        },
                        update: {
                            role: m.role
                        },
                        create: {
                            userId: m.userId,
                            role: m.role
                        }
                    }))
            },
            projectTeams: {
                deleteMany: {
                    projectId: {
                        in: deletedProjects
                    }
                },
                upsert: projects.map((p)=>({
                        where: {
                            projectId_teamId: {
                                teamId,
                                projectId: p.projectId
                            }
                        },
                        update: {
                            permission: p.permission
                        },
                        create: {
                            projectId: p.projectId,
                            permission: p.permission
                        }
                    }))
            }
        };
        await src/* prisma */.z.team.update({
            where: {
                id: teamId
            },
            data: payload
        });
        const changedUserIds = [
            ...members.map((m)=>m.userId),
            ...deletedMembers
        ];
        const changedProjectIds = [
            ...projects.map((p)=>p.projectId),
            ...deletedProjects
        ];
        for (const userId of changedUserIds){
            cache_team/* teamCache */.g.revalidate({
                userId
            });
            project_cache/* projectCache */.E.revalidate({
                userId
            });
        }
        for (const projectId of changedProjectIds){
            cache_team/* teamCache */.g.revalidate({
                projectId
            });
            project_cache/* projectCache */.E.revalidate({
                id: projectId
            });
        }
        cache_team/* teamCache */.g.revalidate({
            id: teamId,
            organizationId: team.organizationId
        });
        project_cache/* projectCache */.E.revalidate({
            organizationId: team.organizationId
        });
        const changedEnvironmentIds = await src/* prisma */.z.environment.findMany({
            where: {
                projectId: {
                    in: changedProjectIds
                }
            },
            select: {
                id: true
            }
        });
        for (const environment of changedEnvironmentIds){
            organization/* organizationCache */.S.revalidate({
                environmentId: environment.id
            });
        }
        return true;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/teams/team-list/action.ts
/* __next_internal_action_entry_do_not_use__ {"7f275305555b0860bfbae18b2e203c55ee40ddaf1a":"getTeamDetailsAction","7f43cc68cec6dde2548d660aed09d677fb6bf640be":"getTeamRoleAction","7f4abed3c09a69cb9276f46db77a84c84d3cc2434a":"updateTeamDetailsAction","7fcb6302bee020bf7d696519228772c9d19427880f":"createTeamAction","7fdc59fabffb1d3ec063140a781847f4dcbb0bd037":"deleteTeamAction"} */ 










const ZCreateTeamAction = lib.z.object({
    organizationId: lib.z.string().cuid(),
    name: lib.z.string().trim().min(1, "Team name is required")
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createTeamAction = action_client/* authenticatedActionClient */.D.schema(ZCreateTeamAction).action(async ({ ctx, parsedInput })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: parsedInput.organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            }
        ]
    });
    await (0,actions/* checkRoleManagementPermission */.Ti)(parsedInput.organizationId);
    return await createTeam(parsedInput.organizationId, parsedInput.name);
});
const ZGetTeamDetailsAction = lib.z.object({
    teamId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getTeamDetailsAction = action_client/* authenticatedActionClient */.D.schema(ZGetTeamDetailsAction).action(async ({ parsedInput, ctx })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromTeamId */.Zi)(parsedInput.teamId);
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
                teamId: parsedInput.teamId,
                type: "team",
                minPermission: "admin"
            }
        ]
    });
    await (0,actions/* checkRoleManagementPermission */.Ti)(organizationId);
    return await getTeamDetails(parsedInput.teamId);
});
const ZDeleteTeamAction = lib.z.object({
    teamId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteTeamAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteTeamAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromTeamId */.Zi)(parsedInput.teamId);
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
            }
        ]
    });
    await (0,actions/* checkRoleManagementPermission */.Ti)(organizationId);
    return await deleteTeam(parsedInput.teamId);
});
const ZUpdateTeamAction = lib.z.object({
    teamId: common/* ZId */.i4,
    data: ZTeamSettingsFormSchema
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateTeamDetailsAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateTeamAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromTeamId */.Zi)(parsedInput.teamId);
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
                type: "team",
                teamId: parsedInput.teamId,
                minPermission: "admin"
            }
        ]
    });
    await (0,actions/* checkRoleManagementPermission */.Ti)(organizationId);
    return await updateTeamDetails(parsedInput.teamId, parsedInput.data);
});
const ZGetTeamRoleAction = lib.z.object({
    teamId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getTeamRoleAction = action_client/* authenticatedActionClient */.D.schema(ZGetTeamRoleAction).action(async ({ ctx, parsedInput })=>{
    return await (0,roles/* getTeamRoleByTeamIdUserId */.b)(parsedInput.teamId, ctx.user.id);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    createTeamAction,
    getTeamDetailsAction,
    deleteTeamAction,
    updateTeamDetailsAction,
    getTeamRoleAction
]);
(0,server_reference/* registerServerReference */.A)(createTeamAction, "7fcb6302bee020bf7d696519228772c9d19427880f", null);
(0,server_reference/* registerServerReference */.A)(getTeamDetailsAction, "7f275305555b0860bfbae18b2e203c55ee40ddaf1a", null);
(0,server_reference/* registerServerReference */.A)(deleteTeamAction, "7fdc59fabffb1d3ec063140a781847f4dcbb0bd037", null);
(0,server_reference/* registerServerReference */.A)(updateTeamDetailsAction, "7f4abed3c09a69cb9276f46db77a84c84d3cc2434a", null);
(0,server_reference/* registerServerReference */.A)(getTeamRoleAction, "7f43cc68cec6dde2548d660aed09d677fb6bf640be", null);


/***/ }),

/***/ 311159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ t)
});

// EXTERNAL MODULE: ../../node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(200667);
;// ../../node_modules/@hookform/resolvers/dist/resolvers.mjs
const s=(e,s,o)=>{if(e&&"reportValidity"in e){const r=(0,index_esm/* get */.Jt)(o,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},resolvers_o=(t,e)=>{for(const o in e.fields){const r=e.fields[o];r&&r.ref&&"reportValidity"in r.ref?s(r.ref,o,t):r.refs&&r.refs.forEach(e=>s(e,o,t))}},resolvers_r=(s,r)=>{r.shouldUseNativeValidation&&resolvers_o(s,r);const f={};for(const o in s){const n=(0,index_esm/* get */.Jt)(r.fields,o),a=Object.assign(s[o]||{},{ref:n&&n.ref});if(i(r.names||Object.keys(s),o)){const s=Object.assign({},(0,index_esm/* get */.Jt)(f,o));(0,index_esm/* set */.hZ)(s,"root",a),(0,index_esm/* set */.hZ)(f,o,s)}else (0,index_esm/* set */.hZ)(f,o,a)}return f},i=(t,e)=>t.some(t=>t.startsWith(e+"."));
//# sourceMappingURL=resolvers.mjs.map

;// ../../node_modules/@hookform/resolvers/zod/dist/zod.mjs
var n=function(r,e){for(var n={};r.length;){var t=r[0],s=t.code,i=t.message,a=t.path.join(".");if(!n[a])if("unionErrors"in t){var u=t.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:s};if("unionErrors"in t&&t.unionErrors.forEach(function(e){return e.errors.forEach(function(e){return r.push(e)})}),e){var c=n[a].types,f=c&&c[t.code];n[a]=(0,index_esm/* appendErrors */.Gb)(a,e,n,s,f?[].concat(f,t.message):t.message)}r.shift()}return n},t=function(o,t,s){return void 0===s&&(s={}),function(i,a,u){try{return Promise.resolve(function(e,n){try{var a=Promise.resolve(o["sync"===s.mode?"parse":"parseAsync"](i,t)).then(function(e){return u.shouldUseNativeValidation&&resolvers_o({},u),{errors:{},values:s.raw?i:e}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){if(function(r){return Array.isArray(null==r?void 0:r.errors)}(r))return{values:{},errors:resolvers_r(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)};throw r}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ })

};
;