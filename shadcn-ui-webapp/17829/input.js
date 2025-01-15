"use strict";
exports.id = 17829;
exports.ids = [17829,73249];
exports.modules = {

/***/ 17829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComboboxPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60656);
/* harmony import */ var _registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73249);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const statuses = [
    {
        value: "backlog",
        label: "Backlog"
    },
    {
        value: "todo",
        label: "Todo"
    },
    {
        value: "in progress",
        label: "In Progress"
    },
    {
        value: "done",
        label: "Done"
    },
    {
        value: "canceled",
        label: "Canceled"
    }
];
function ComboboxPopover() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [selectedStatus, setSelectedStatus] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Status"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "outline",
                            className: "w-[150px] justify-start",
                            children: selectedStatus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: selectedStatus.label
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: "+ Set status"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {
                        className: "p-0",
                        side: "right",
                        align: "start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.Command, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandInput, {
                                    placeholder: "Change status..."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandList, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandEmpty, {
                                            children: "No results found."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandGroup, {
                                            children: statuses.map((status)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_3__.CommandItem, {
                                                    value: status.value,
                                                    onSelect: (value)=>{
                                                        setSelectedStatus(statuses.find((priority)=>priority.value === value) || null);
                                                        setOpen(false);
                                                    },
                                                    children: status.label
                                                }, status.value))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
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



/***/ })

};
;