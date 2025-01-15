"use strict";
exports.id = 25827;
exports.ids = [25827];
exports.modules = {

/***/ 71714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrawerDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11132);
/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7925);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71516);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42777);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13829);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85274);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const data = [
    {
        goal: 400
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 278
    },
    {
        goal: 189
    },
    {
        goal: 239
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 278
    },
    {
        goal: 189
    },
    {
        goal: 349
    }
];
function DrawerDemo() {
    const [goal, setGoal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(350);
    function onClick(adjustment) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "outline",
                    children: "Open Drawer"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto w-full max-w-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerTitle, {
                                    children: "Move Goal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerDescription, {
                                    children: "Set your daily activity goal."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-4 pb-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "icon",
                                            className: "h-8 w-8 shrink-0 rounded-full",
                                            onClick: ()=>onClick(-10),
                                            disabled: goal <= 200,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Decrease"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-7xl font-bold tracking-tighter",
                                                    children: goal
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[0.70rem] uppercase text-muted-foreground",
                                                    children: "Calories/day"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "icon",
                                            className: "h-8 w-8 shrink-0 rounded-full",
                                            onClick: ()=>onClick(10),
                                            disabled: goal >= 400,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Increase"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-3 h-[120px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_6__/* .ResponsiveContainer */ .h, {
                                        width: "100%",
                                        height: "100%",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_7__/* .BarChart */ .v, {
                                            data: data,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_8__/* .Bar */ .$, {
                                                dataKey: "goal",
                                                style: {
                                                    fill: "hsl(var(--foreground))",
                                                    opacity: 0.9
                                                }
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    children: "Submit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerClose, {
                                    asChild: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        variant: "outline",
                                        children: "Cancel"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 11132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Minus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Minus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
]);
 //# sourceMappingURL=minus.js.map


/***/ }),

/***/ 7925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
 //# sourceMappingURL=plus.js.map


/***/ }),

/***/ 42777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var _generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91965);
/* harmony import */ var _cartesian_Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13829);
/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66845);
/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84168);
/* harmony import */ var _util_CartesianUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64239);
/**
 * @fileOverview Bar Chart
 */ 




var BarChart = (0,_generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__/* .generateCategoricalChart */ .z)({
    chartName: "BarChart",
    GraphicalChild: _cartesian_Bar__WEBPACK_IMPORTED_MODULE_1__/* .Bar */ .$,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: [
        "axis",
        "item"
    ],
    axisComponents: [
        {
            axisType: "xAxis",
            AxisComp: _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_2__/* .XAxis */ .K
        },
        {
            axisType: "yAxis",
            AxisComp: _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_3__/* .YAxis */ .B
        }
    ],
    formatAxisMap: _util_CartesianUtils__WEBPACK_IMPORTED_MODULE_4__/* .formatAxisMap */ .t9
});


/***/ })

};
;