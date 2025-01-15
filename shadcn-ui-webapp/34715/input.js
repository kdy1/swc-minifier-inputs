"use strict";
exports.id = 34715;
exports.ids = [34715,73249];
exports.modules = {

/***/ 34715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComboboxDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Check_ChevronsUpDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25367);
/* harmony import */ var _barrel_optimize_names_Check_ChevronsUpDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15917);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26910);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60656);
/* harmony import */ var _registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73249);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const frameworks = [
    {
        value: "next.js",
        label: "Next.js"
    },
    {
        value: "sveltekit",
        label: "SvelteKit"
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js"
    },
    {
        value: "remix",
        label: "Remix"
    },
    {
        value: "astro",
        label: "Astro"
    }
];
function ComboboxDemo() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open,
                    className: "w-[200px] justify-between",
                    children: [
                        value ? frameworks.find((framework)=>framework.value === value)?.label : "Select framework...",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronsUpDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: "opacity-50"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {
                className: "w-[200px] p-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.Command, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandInput, {
                            placeholder: "Search framework...",
                            className: "h-9"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandList, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandEmpty, {
                                    children: "No framework found."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandGroup, {
                                    children: frameworks.map((framework)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandItem, {
                                            value: framework.value,
                                            onSelect: (currentValue)=>{
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            },
                                            children: [
                                                framework.label,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronsUpDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")
                                                })
                                            ]
                                        }, framework.value))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 73249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ Popover),
/* harmony export */   PopoverAnchor: () => (/* binding */ PopoverAnchor),
/* harmony export */   PopoverContent: () => (/* binding */ PopoverContent),
/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78688);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent,PopoverAnchor auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const PopoverAnchor = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



/***/ }),

/***/ 25367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronsUpDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronsUpDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronsUpDown", [
    [
        "path",
        {
            d: "m7 15 5 5 5-5",
            key: "1hf1tw"
        }
    ],
    [
        "path",
        {
            d: "m7 9 5-5 5 5",
            key: "sgt6xg"
        }
    ]
]);
 //# sourceMappingURL=chevrons-up-down.js.map


/***/ })

};
;