"use strict";
exports.id = 54410;
exports.ids = [54410];
exports.modules = {

/***/ 54410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollArea: () => (/* binding */ ScrollArea),
/* harmony export */   ScrollBar: () => (/* binding */ ScrollBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15364);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ScrollArea,ScrollBar auto */ 



const ScrollArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollBar, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Corner */ .Ns, {})
        ]
    }));
ScrollArea.displayName = _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const ScrollBar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaScrollbar */ .gb, {
        ref: ref,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaThumb */ .q4, {
            className: "relative flex-1 rounded-full bg-border"
        })
    }));
ScrollBar.displayName = _radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__/* .ScrollAreaScrollbar */ .gb.displayName;



/***/ })

};
;