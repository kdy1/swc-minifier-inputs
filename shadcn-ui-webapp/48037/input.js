"use strict";
exports.id = 48037;
exports.ids = [48037];
exports.modules = {

/***/ 48037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownMenuRadioGroupDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96775);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_1__.useState("bottom");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "outline",
                    children: "Open"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {
                className: "w-56",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuLabel, {
                        children: "Panel Position"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuRadioGroup, {
                        value: position,
                        onValueChange: setPosition,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuRadioItem, {
                                value: "top",
                                children: "Top"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuRadioItem, {
                                value: "bottom",
                                children: "Bottom"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuRadioItem, {
                                value: "right",
                                children: "Right"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;