"use strict";
exports.id = 90736;
exports.ids = [90736];
exports.modules = {

/***/ 96718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony exports formatDate, absoluteUrl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19936);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79115);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}


/***/ }),

/***/ 90736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationMenu: () => (/* binding */ NavigationMenu),
/* harmony export */   NavigationMenuContent: () => (/* binding */ NavigationMenuContent),
/* harmony export */   NavigationMenuIndicator: () => (/* binding */ NavigationMenuIndicator),
/* harmony export */   NavigationMenuItem: () => (/* binding */ NavigationMenuItem),
/* harmony export */   NavigationMenuLink: () => (/* binding */ NavigationMenuLink),
/* harmony export */   NavigationMenuList: () => (/* binding */ NavigationMenuList),
/* harmony export */   NavigationMenuTrigger: () => (/* binding */ NavigationMenuTrigger),
/* harmony export */   NavigationMenuViewport: () => (/* binding */ NavigationMenuViewport),
/* harmony export */   navigationMenuTriggerStyle: () => (/* binding */ navigationMenuTriggerStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57220);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19582);
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80937);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96718);






const NavigationMenu = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationMenuViewport, {})
        ]
    }));
NavigationMenu.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Root.displayName;
const NavigationMenuList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.List, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("group flex flex-1 list-none items-center justify-center space-x-1", className),
        ...props
    }));
NavigationMenuList.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.List.displayName;
const NavigationMenuItem = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Item;
const navigationMenuTriggerStyle = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__.cva)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
const NavigationMenuTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__.ChevronDown, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            })
        ]
    }));
NavigationMenuTrigger.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Trigger.displayName;
const NavigationMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Content, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className),
        ...props
    }));
NavigationMenuContent.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
const NavigationMenuLink = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Link;
const NavigationMenuViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute left-0 top-full flex justify-center"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Viewport, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref,
            ...props
        })
    }));
NavigationMenuViewport.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Viewport.displayName;
const NavigationMenuIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Indicator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        })
    }));
NavigationMenuIndicator.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Indicator.displayName;



/***/ }),

/***/ 80937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronDown: () => (/* reexport safe */ _icons_chevron_down_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _icons_chevron_down_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49069);



/***/ })

};
;