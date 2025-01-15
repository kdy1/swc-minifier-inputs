"use strict";
exports.id = 20581;
exports.ids = [20581,76010];
exports.modules = {

/***/ 5939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $89eedd556c436f6a$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony export Separator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54227);







/* -------------------------------------------------------------------------------------------------
 *  Separator
 * -----------------------------------------------------------------------------------------------*/ const $89eedd556c436f6a$var$NAME = 'Separator';
const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = 'horizontal';
const $89eedd556c436f6a$var$ORIENTATIONS = [
    'horizontal',
    'vertical'
];
const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { decorative: decorative , orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION , ...domProps } = props;
    const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION; // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative ? {
        role: 'none'
    } : {
        'aria-orientation': ariaOrientation,
        role: 'separator'
    };
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        "data-orientation": orientation
    }, semanticProps, domProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($89eedd556c436f6a$export$1ff3c3f08ae963c0, {
    displayName: $89eedd556c436f6a$var$NAME
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
    orientation (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue)) return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ // Split this out for clearer readability of the error message.
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
    return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
    return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 67539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PanelLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PanelLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("PanelLeft", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ]
]);
 //# sourceMappingURL=panel-left.js.map


/***/ })

};
;