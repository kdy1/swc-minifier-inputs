"use strict";
exports.id = 12608;
exports.ids = [12608];
exports.modules = {

/***/ 12608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToastWithTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60395);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ToastWithTitle() {
    const { toast } = (0,_registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outline",
        onClick: ()=>{
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request."
            });
        },
        children: "Show Toast"
    });
}


/***/ })

};
;