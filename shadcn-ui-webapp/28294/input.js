"use strict";
exports.id = 28294;
exports.ids = [28294];
exports.modules = {

/***/ 28294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComboboxDropdownMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48286);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60656);
/* harmony import */ var _registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96775);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance"
];
function ComboboxDropdownMenu() {
    const [label, setLabel] = react__WEBPACK_IMPORTED_MODULE_1__.useState("feature");
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-sm font-medium leading-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground",
                        children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Create a new project"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "ghost",
                            size: "sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {
                        align: "end",
                        className: "w-[200px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuLabel, {
                                children: "Actions"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuGroup, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {
                                        children: "Assign to..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {
                                        children: "Set due date..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSeparator, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSub, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSubTrigger, {
                                                children: "Apply label"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSubContent, {
                                                className: "p-0",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.Command, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandInput, {
                                                            placeholder: "Filter label...",
                                                            autoFocus: true,
                                                            className: "h-9"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandList, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandEmpty, {
                                                                    children: "No label found."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandGroup, {
                                                                    children: labels.map((label)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandItem, {
                                                                            value: label,
                                                                            onSelect: (value)=>{
                                                                                setLabel(value);
                                                                                setOpen(false);
                                                                            },
                                                                            children: label
                                                                        }, label))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSeparator, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {
                                        className: "text-red-600",
                                        children: [
                                            "Delete",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuShortcut, {
                                                children: "⌘⌫"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 48286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Ellipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
 //# sourceMappingURL=ellipsis.js.map


/***/ })

};
;