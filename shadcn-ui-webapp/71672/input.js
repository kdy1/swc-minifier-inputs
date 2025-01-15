"use strict";
exports.id = 71672;
exports.ids = [71672];
exports.modules = {

/***/ 71672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToastDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60395);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88983);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ToastDemo() {
    const { toast } = (0,_registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outline",
        onClick: ()=>{
            toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_3__.ToastAction, {
                    altText: "Goto schedule to undo",
                    children: "Undo"
                })
            });
        },
        children: "Add to calendar"
    });
}


/***/ })

};
;