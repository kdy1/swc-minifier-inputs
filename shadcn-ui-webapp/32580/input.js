"use strict";
exports.id = 32580;
exports.ids = [32580];
exports.modules = {

/***/ 97660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialog: () => (/* binding */ AlertDialog),
/* harmony export */   AlertDialogAction: () => (/* binding */ AlertDialogAction),
/* harmony export */   AlertDialogCancel: () => (/* binding */ AlertDialogCancel),
/* harmony export */   AlertDialogContent: () => (/* binding */ AlertDialogContent),
/* harmony export */   AlertDialogDescription: () => (/* binding */ AlertDialogDescription),
/* harmony export */   AlertDialogFooter: () => (/* binding */ AlertDialogFooter),
/* harmony export */   AlertDialogHeader: () => (/* binding */ AlertDialogHeader),
/* harmony export */   AlertDialogOverlay: () => (/* binding */ AlertDialogOverlay),
/* harmony export */   AlertDialogPortal: () => (/* binding */ AlertDialogPortal),
/* harmony export */   AlertDialogTitle: () => (/* binding */ AlertDialogTitle),
/* harmony export */   AlertDialogTrigger: () => (/* binding */ AlertDialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24634);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26910);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* __next_internal_client_entry_do_not_use__ AlertDialog,AlertDialogPortal,AlertDialogOverlay,AlertDialogTrigger,AlertDialogContent,AlertDialogHeader,AlertDialogFooter,AlertDialogTitle,AlertDialogDescription,AlertDialogAction,AlertDialogCancel auto */ 




const AlertDialog = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC;
const AlertDialogTrigger = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .xz;
const AlertDialogPortal = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .h_;
const AlertDialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Overlay */ .aV, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }));
AlertDialogOverlay.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Overlay */ .aV.displayName;
const AlertDialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlertDialogOverlay, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            })
        ]
    }));
AlertDialogContent.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY.displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-lg font-semibold", className),
        ...props
    }));
AlertDialogTitle.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx.displayName;
const AlertDialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
AlertDialogDescription.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Description */ .dk.displayName;
const AlertDialogAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Action */ .aU, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.buttonVariants)(), className),
        ...props
    }));
AlertDialogAction.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Action */ .aU.displayName;
const AlertDialogCancel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Cancel */ .$j, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.buttonVariants)({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }));
AlertDialogCancel.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__/* .Cancel */ .$j.displayName;



/***/ })

};
;