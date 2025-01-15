"use strict";
exports.id = 41387;
exports.ids = [41387,97000,74287];
exports.modules = {

/***/ 41387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component),
/* harmony export */   description: () => (/* binding */ description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42777);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66845);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13829);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74287);
/* __next_internal_client_entry_do_not_use__ description,default auto */ 



const description = "A stacked bar chart with a legend";
const chartData = [
    {
        date: "2024-07-15",
        running: 450,
        swimming: 300
    },
    {
        date: "2024-07-16",
        running: 380,
        swimming: 420
    },
    {
        date: "2024-07-17",
        running: 520,
        swimming: 120
    },
    {
        date: "2024-07-18",
        running: 140,
        swimming: 550
    },
    {
        date: "2024-07-19",
        running: 600,
        swimming: 350
    },
    {
        date: "2024-07-20",
        running: 480,
        swimming: 400
    }
];
const chartConfig = {
    running: {
        label: "Running",
        color: "hsl(var(--chart-1))"
    },
    swimming: {
        label: "Swimming",
        color: "hsl(var(--chart-2))"
    }
};
function Component() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
                        children: "Tooltip - Formatter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {
                        children: "Tooltip with custom formatter ."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartContainer, {
                    config: chartConfig,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_3__/* .BarChart */ .v, {
                        accessibilityLayer: true,
                        data: chartData,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_4__/* .XAxis */ .K, {
                                dataKey: "date",
                                tickLine: false,
                                tickMargin: 10,
                                axisLine: false,
                                tickFormatter: (value)=>{
                                    return new Date(value).toLocaleDateString("en-US", {
                                        weekday: "short"
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__/* .Bar */ .$, {
                                dataKey: "running",
                                stackId: "a",
                                fill: "var(--color-running)",
                                radius: [
                                    0,
                                    0,
                                    4,
                                    4
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__/* .Bar */ .$, {
                                dataKey: "swimming",
                                stackId: "a",
                                fill: "var(--color-swimming)",
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartTooltip, {
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartTooltipContent, {
                                    hideLabel: true,
                                    formatter: (value, name)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex min-w-[130px] items-center text-xs text-muted-foreground",
                                            children: [
                                                chartConfig[name]?.label || name,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground",
                                                    children: [
                                                        value,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-normal text-muted-foreground",
                                                            children: "kcal"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                }),
                                cursor: false,
                                defaultIndex: 1
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 97000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   CardDescription: () => (/* binding */ CardDescription),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardHeader: () => (/* binding */ CardHeader),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 74287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartContainer: () => (/* binding */ ChartContainer),
/* harmony export */   ChartLegend: () => (/* binding */ ChartLegend),
/* harmony export */   ChartLegendContent: () => (/* binding */ ChartLegendContent),
/* harmony export */   ChartStyle: () => (/* binding */ ChartStyle),
/* harmony export */   ChartTooltip: () => (/* binding */ ChartTooltip),
/* harmony export */   ChartTooltipContent: () => (/* binding */ ChartTooltipContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71516);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4549);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77029);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent,ChartStyle auto */ 



// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
function useChart() {
    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
const ChartContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ id, className, children, config, ...props }, ref)=>{
    const uniqueId = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChartContext.Provider, {
        value: {
            config
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-chart": chartId,
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChartStyle, {
                    id: chartId,
                    config: config
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__/* .ResponsiveContainer */ .h, {
                    children: children
                })
            ]
        })
    });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config })=>{
    const colorConfig = Object.entries(config).filter(([, config])=>config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
        dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES).map(([theme, prefix])=>`
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig])=>{
                    const color = itemConfig.theme?.[theme] || itemConfig.color;
                    return color ? `  --color-${key}: ${color};` : null;
                }).join("\n")}
}
`).join("\n")
        }
    });
};
const ChartTooltip = recharts__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u;
const ChartTooltipContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref)=>{
    const { config } = useChart();
    const tooltipLabel = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || item.dataKey || item.name || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
        if (labelFormatter) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-medium", labelClassName),
                children: labelFormatter(value, payload)
            });
        }
        if (!value) {
            return null;
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-medium", labelClassName),
            children: value
        });
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            !nestLabel ? tooltipLabel : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid gap-1.5",
                children: payload.map((item, index)=>{
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                itemConfig?.icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(itemConfig.icon, {}) : !hideIndicator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: itemConfig?.label || item.name
                                                })
                                            ]
                                        }),
                                        item.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: item.value.toLocaleString()
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item.dataKey);
                })
            })
        ]
    });
});
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = recharts__WEBPACK_IMPORTED_MODULE_5__/* .Legend */ .D;
const ChartLegendContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref)=>{
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
        children: payload.map((item)=>{
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                children: [
                    itemConfig?.icon && !hideIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(itemConfig.icon, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-2 w-2 shrink-0 rounded-[2px]",
                        style: {
                            backgroundColor: item.color
                        }
                    }),
                    itemConfig?.label
                ]
            }, item.value);
        })
    });
});
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}



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