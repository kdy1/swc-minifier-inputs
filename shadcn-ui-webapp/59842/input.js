"use strict";
exports.id = 59842;
exports.ids = [59842,90064];
exports.modules = {

/***/ 59842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleGroupDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Bold_Italic_Underline_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);
/* harmony import */ var _registry_new_york_ui_toggle_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90064);



function ToggleGroupDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_toggle_group__WEBPACK_IMPORTED_MODULE_1__.ToggleGroup, {
        type: "multiple",
        disabled: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toggle_group__WEBPACK_IMPORTED_MODULE_1__.ToggleGroupItem, {
                value: "bold",
                "aria-label": "Toggle bold",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bold_Italic_Underline_lucide_react__WEBPACK_IMPORTED_MODULE_2__.Bold, {
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toggle_group__WEBPACK_IMPORTED_MODULE_1__.ToggleGroupItem, {
                value: "italic",
                "aria-label": "Toggle italic",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bold_Italic_Underline_lucide_react__WEBPACK_IMPORTED_MODULE_2__.Italic, {
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toggle_group__WEBPACK_IMPORTED_MODULE_1__.ToggleGroupItem, {
                value: "strikethrough",
                "aria-label": "Toggle strikethrough",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bold_Italic_Underline_lucide_react__WEBPACK_IMPORTED_MODULE_2__.Underline, {
                    className: "h-4 w-4"
                })
            })
        ]
    });
}


/***/ }),

/***/ 90064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleGroup: () => (/* binding */ e0),
/* harmony export */   ToggleGroupItem: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx#ToggleGroup`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx#ToggleGroupItem`);


/***/ }),

/***/ 46114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64309);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32159);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref)=>{
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
            ref,
            ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(iconName)}`,
                className
            ].join(" "),
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]);
    });
    Component.displayName = `${iconName}`;
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 64309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ 64114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bold)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46114);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bold = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Bold", [
    [
        "path",
        {
            d: "M14 12a4 4 0 0 0 0-8H6v8",
            key: "v2sylx"
        }
    ],
    [
        "path",
        {
            d: "M15 20a4 4 0 0 0 0-8H6v8Z",
            key: "1ef5ya"
        }
    ]
]);
 //# sourceMappingURL=bold.js.map


/***/ }),

/***/ 20527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Italic)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46114);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Italic = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Italic", [
    [
        "line",
        {
            x1: "19",
            x2: "10",
            y1: "4",
            y2: "4",
            key: "15jd3p"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "5",
            y1: "20",
            y2: "20",
            key: "bu0au3"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "4",
            y2: "20",
            key: "uljnxc"
        }
    ]
]);
 //# sourceMappingURL=italic.js.map


/***/ }),

/***/ 34733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Underline)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46114);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Underline = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Underline", [
    [
        "path",
        {
            d: "M6 4v6a6 6 0 0 0 12 0V4",
            key: "9kb039"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "20",
            y2: "20",
            key: "nun2al"
        }
    ]
]);
 //# sourceMappingURL=underline.js.map


/***/ }),

/***/ 32159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)
/* harmony export */ });
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
 //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 41580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bold: () => (/* reexport safe */ _icons_bold_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Italic: () => (/* reexport safe */ _icons_italic_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Underline: () => (/* reexport safe */ _icons_underline_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _icons_bold_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64114);
/* harmony import */ var _icons_italic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20527);
/* harmony import */ var _icons_underline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34733);





/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(40547);
const createProxy = _serveredge.createClientModuleProxy;

//# sourceMappingURL=module-proxy.js.map

/***/ }),

/***/ 34229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(89174).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ })

};
;