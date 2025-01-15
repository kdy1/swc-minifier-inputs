"use strict";
exports.id = 26293;
exports.ids = [26293];
exports.modules = {

/***/ 26293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizableHandle: () => (/* binding */ ResizableHandle),
/* harmony export */   ResizablePanel: () => (/* binding */ ResizablePanel),
/* harmony export */   ResizablePanelGroup: () => (/* binding */ ResizablePanelGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_GripVertical_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80215);
/* harmony import */ var react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41834);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ResizablePanelGroup,ResizablePanel,ResizableHandle auto */ 



const ResizablePanelGroup = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__/* .PanelGroup */ .eh, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
        ...props
    });
const ResizablePanel = react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__/* .Panel */ .s_;
const ResizableHandle = ({ withHandle, className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_resizable_panels__WEBPACK_IMPORTED_MODULE_1__/* .PanelResizeHandle */ .OT, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
        ...props,
        children: withHandle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_GripVertical_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "h-2.5 w-2.5"
            })
        })
    });



/***/ })

};
;