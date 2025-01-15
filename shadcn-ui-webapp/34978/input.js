"use strict";
exports.id = 34978;
exports.ids = [34978,22648,85549];
exports.modules = {

/***/ 34978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component),
/* harmony export */   description: () => (/* binding */ description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42777);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73860);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66845);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13829);
/* harmony import */ var _registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22648);
/* harmony import */ var _registry_default_ui_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85549);
/* __next_internal_client_entry_do_not_use__ description,default auto */ 




const description = "An interactive bar chart";
const chartData = [
    {
        date: "2024-04-01",
        desktop: 222,
        mobile: 150
    },
    {
        date: "2024-04-02",
        desktop: 97,
        mobile: 180
    },
    {
        date: "2024-04-03",
        desktop: 167,
        mobile: 120
    },
    {
        date: "2024-04-04",
        desktop: 242,
        mobile: 260
    },
    {
        date: "2024-04-05",
        desktop: 373,
        mobile: 290
    },
    {
        date: "2024-04-06",
        desktop: 301,
        mobile: 340
    },
    {
        date: "2024-04-07",
        desktop: 245,
        mobile: 180
    },
    {
        date: "2024-04-08",
        desktop: 409,
        mobile: 320
    },
    {
        date: "2024-04-09",
        desktop: 59,
        mobile: 110
    },
    {
        date: "2024-04-10",
        desktop: 261,
        mobile: 190
    },
    {
        date: "2024-04-11",
        desktop: 327,
        mobile: 350
    },
    {
        date: "2024-04-12",
        desktop: 292,
        mobile: 210
    },
    {
        date: "2024-04-13",
        desktop: 342,
        mobile: 380
    },
    {
        date: "2024-04-14",
        desktop: 137,
        mobile: 220
    },
    {
        date: "2024-04-15",
        desktop: 120,
        mobile: 170
    },
    {
        date: "2024-04-16",
        desktop: 138,
        mobile: 190
    },
    {
        date: "2024-04-17",
        desktop: 446,
        mobile: 360
    },
    {
        date: "2024-04-18",
        desktop: 364,
        mobile: 410
    },
    {
        date: "2024-04-19",
        desktop: 243,
        mobile: 180
    },
    {
        date: "2024-04-20",
        desktop: 89,
        mobile: 150
    },
    {
        date: "2024-04-21",
        desktop: 137,
        mobile: 200
    },
    {
        date: "2024-04-22",
        desktop: 224,
        mobile: 170
    },
    {
        date: "2024-04-23",
        desktop: 138,
        mobile: 230
    },
    {
        date: "2024-04-24",
        desktop: 387,
        mobile: 290
    },
    {
        date: "2024-04-25",
        desktop: 215,
        mobile: 250
    },
    {
        date: "2024-04-26",
        desktop: 75,
        mobile: 130
    },
    {
        date: "2024-04-27",
        desktop: 383,
        mobile: 420
    },
    {
        date: "2024-04-28",
        desktop: 122,
        mobile: 180
    },
    {
        date: "2024-04-29",
        desktop: 315,
        mobile: 240
    },
    {
        date: "2024-04-30",
        desktop: 454,
        mobile: 380
    },
    {
        date: "2024-05-01",
        desktop: 165,
        mobile: 220
    },
    {
        date: "2024-05-02",
        desktop: 293,
        mobile: 310
    },
    {
        date: "2024-05-03",
        desktop: 247,
        mobile: 190
    },
    {
        date: "2024-05-04",
        desktop: 385,
        mobile: 420
    },
    {
        date: "2024-05-05",
        desktop: 481,
        mobile: 390
    },
    {
        date: "2024-05-06",
        desktop: 498,
        mobile: 520
    },
    {
        date: "2024-05-07",
        desktop: 388,
        mobile: 300
    },
    {
        date: "2024-05-08",
        desktop: 149,
        mobile: 210
    },
    {
        date: "2024-05-09",
        desktop: 227,
        mobile: 180
    },
    {
        date: "2024-05-10",
        desktop: 293,
        mobile: 330
    },
    {
        date: "2024-05-11",
        desktop: 335,
        mobile: 270
    },
    {
        date: "2024-05-12",
        desktop: 197,
        mobile: 240
    },
    {
        date: "2024-05-13",
        desktop: 197,
        mobile: 160
    },
    {
        date: "2024-05-14",
        desktop: 448,
        mobile: 490
    },
    {
        date: "2024-05-15",
        desktop: 473,
        mobile: 380
    },
    {
        date: "2024-05-16",
        desktop: 338,
        mobile: 400
    },
    {
        date: "2024-05-17",
        desktop: 499,
        mobile: 420
    },
    {
        date: "2024-05-18",
        desktop: 315,
        mobile: 350
    },
    {
        date: "2024-05-19",
        desktop: 235,
        mobile: 180
    },
    {
        date: "2024-05-20",
        desktop: 177,
        mobile: 230
    },
    {
        date: "2024-05-21",
        desktop: 82,
        mobile: 140
    },
    {
        date: "2024-05-22",
        desktop: 81,
        mobile: 120
    },
    {
        date: "2024-05-23",
        desktop: 252,
        mobile: 290
    },
    {
        date: "2024-05-24",
        desktop: 294,
        mobile: 220
    },
    {
        date: "2024-05-25",
        desktop: 201,
        mobile: 250
    },
    {
        date: "2024-05-26",
        desktop: 213,
        mobile: 170
    },
    {
        date: "2024-05-27",
        desktop: 420,
        mobile: 460
    },
    {
        date: "2024-05-28",
        desktop: 233,
        mobile: 190
    },
    {
        date: "2024-05-29",
        desktop: 78,
        mobile: 130
    },
    {
        date: "2024-05-30",
        desktop: 340,
        mobile: 280
    },
    {
        date: "2024-05-31",
        desktop: 178,
        mobile: 230
    },
    {
        date: "2024-06-01",
        desktop: 178,
        mobile: 200
    },
    {
        date: "2024-06-02",
        desktop: 470,
        mobile: 410
    },
    {
        date: "2024-06-03",
        desktop: 103,
        mobile: 160
    },
    {
        date: "2024-06-04",
        desktop: 439,
        mobile: 380
    },
    {
        date: "2024-06-05",
        desktop: 88,
        mobile: 140
    },
    {
        date: "2024-06-06",
        desktop: 294,
        mobile: 250
    },
    {
        date: "2024-06-07",
        desktop: 323,
        mobile: 370
    },
    {
        date: "2024-06-08",
        desktop: 385,
        mobile: 320
    },
    {
        date: "2024-06-09",
        desktop: 438,
        mobile: 480
    },
    {
        date: "2024-06-10",
        desktop: 155,
        mobile: 200
    },
    {
        date: "2024-06-11",
        desktop: 92,
        mobile: 150
    },
    {
        date: "2024-06-12",
        desktop: 492,
        mobile: 420
    },
    {
        date: "2024-06-13",
        desktop: 81,
        mobile: 130
    },
    {
        date: "2024-06-14",
        desktop: 426,
        mobile: 380
    },
    {
        date: "2024-06-15",
        desktop: 307,
        mobile: 350
    },
    {
        date: "2024-06-16",
        desktop: 371,
        mobile: 310
    },
    {
        date: "2024-06-17",
        desktop: 475,
        mobile: 520
    },
    {
        date: "2024-06-18",
        desktop: 107,
        mobile: 170
    },
    {
        date: "2024-06-19",
        desktop: 341,
        mobile: 290
    },
    {
        date: "2024-06-20",
        desktop: 408,
        mobile: 450
    },
    {
        date: "2024-06-21",
        desktop: 169,
        mobile: 210
    },
    {
        date: "2024-06-22",
        desktop: 317,
        mobile: 270
    },
    {
        date: "2024-06-23",
        desktop: 480,
        mobile: 530
    },
    {
        date: "2024-06-24",
        desktop: 132,
        mobile: 180
    },
    {
        date: "2024-06-25",
        desktop: 141,
        mobile: 190
    },
    {
        date: "2024-06-26",
        desktop: 434,
        mobile: 380
    },
    {
        date: "2024-06-27",
        desktop: 448,
        mobile: 490
    },
    {
        date: "2024-06-28",
        desktop: 149,
        mobile: 200
    },
    {
        date: "2024-06-29",
        desktop: 103,
        mobile: 160
    },
    {
        date: "2024-06-30",
        desktop: 446,
        mobile: 400
    }
];
const chartConfig = {
    views: {
        label: "Page Views"
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))"
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))"
    }
};
function Component() {
    const [activeChart, setActiveChart] = react__WEBPACK_IMPORTED_MODULE_1__.useState("desktop");
    const total = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>({
            desktop: chartData.reduce((acc, curr)=>acc + curr.desktop, 0),
            mobile: chartData.reduce((acc, curr)=>acc + curr.mobile, 0)
        }), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
                className: "flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {
                                children: "Bar Chart - Interactive"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {
                                children: "Showing total visitors for the last 3 months"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex",
                        children: [
                            "desktop",
                            "mobile"
                        ].map((key)=>{
                            const chart = key;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                "data-active": activeChart === chart,
                                className: "relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6",
                                onClick: ()=>setActiveChart(chart),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: chartConfig[chart].label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-lg font-bold leading-none sm:text-3xl",
                                        children: total[key].toLocaleString()
                                    })
                                ]
                            }, chart);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                className: "px-2 sm:p-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_chart__WEBPACK_IMPORTED_MODULE_3__.ChartContainer, {
                    config: chartConfig,
                    className: "aspect-auto h-[250px] w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_4__/* .BarChart */ .v, {
                        accessibilityLayer: true,
                        data: chartData,
                        margin: {
                            left: 12,
                            right: 12
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_5__/* .CartesianGrid */ .q, {
                                vertical: false
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_6__/* .XAxis */ .K, {
                                dataKey: "date",
                                tickLine: false,
                                axisLine: false,
                                tickMargin: 8,
                                minTickGap: 32,
                                tickFormatter: (value)=>{
                                    const date = new Date(value);
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric"
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_chart__WEBPACK_IMPORTED_MODULE_3__.ChartTooltip, {
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_chart__WEBPACK_IMPORTED_MODULE_3__.ChartTooltipContent, {
                                    className: "w-[150px]",
                                    nameKey: "views",
                                    labelFormatter: (value)=>{
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        });
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_CartesianGrid_XAxis_recharts__WEBPACK_IMPORTED_MODULE_7__/* .Bar */ .$, {
                                dataKey: activeChart,
                                fill: `var(--color-${activeChart})`
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 22648:
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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
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

/***/ 85549:
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

/***/ 73860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CartesianGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_LogUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31640);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54491);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29480);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86837);
/* harmony import */ var _getTicks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67601);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64969);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38306);
var _excluded = [
    "x1",
    "y1",
    "x2",
    "y2",
    "key"
], _excluded2 = [
    "offset"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
/**
 * @fileOverview Cartesian Grid
 */ 








/**
 * The <CartesianGrid horizontal
 */ var Background = function Background(props) {
    var fill = props.fill;
    if (!fill || fill === "none") {
        return null;
    }
    var fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "none",
        fill: fill,
        fillOpacity: fillOpacity,
        className: "recharts-cartesian-grid-bg"
    });
};
function renderLineItem(option, props) {
    var lineItem;
    if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(option)) {
        // @ts-expect-error typescript does not see the props type when cloning an element
        lineItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(option, props);
    } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(option)) {
        lineItem = option(props);
    } else {
        var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, others = _objectWithoutProperties(props, _excluded);
        var _filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .L6)(others, false), __ = _filterProps.offset, restOfFilteredProps = _objectWithoutProperties(_filterProps, _excluded2);
        lineItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({}, restOfFilteredProps, {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            fill: "none",
            key: key
        }));
    }
    return lineItem;
}
function HorizontalGridLines(props) {
    var x = props.x, width = props.width, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? true : _props$horizontal, horizontalPoints = props.horizontalPoints;
    if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
        return null;
    }
    var items = horizontalPoints.map(function(entry, i) {
        var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
            x1: x,
            y1: entry,
            x2: x + width,
            y2: entry,
            key: "line-".concat(i),
            index: i
        });
        return renderLineItem(horizontal, lineItemProps);
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
    }, items);
}
function VerticalGridLines(props) {
    var y = props.y, height = props.height, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, verticalPoints = props.verticalPoints;
    if (!vertical || !verticalPoints || !verticalPoints.length) {
        return null;
    }
    var items = verticalPoints.map(function(entry, i) {
        var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
            x1: entry,
            y1: y,
            x2: entry,
            y2: y + height,
            key: "line-".concat(i),
            index: i
        });
        return renderLineItem(vertical, lineItemProps);
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid-vertical"
    }, items);
}
function HorizontalStripes(props) {
    var horizontalFill = props.horizontalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, horizontalPoints = props.horizontalPoints, _props$horizontal2 = props.horizontal, horizontal = _props$horizontal2 === void 0 ? true : _props$horizontal2;
    if (!horizontal || !horizontalFill || !horizontalFill.length) {
        return null;
    }
    // Why =y -y? I was trying to find any difference that this makes, with floating point numbers and edge cases but ... nothing.
    var roundedSortedHorizontalPoints = horizontalPoints.map(function(e) {
        return Math.round(e + y - y);
    }).sort(function(a, b) {
        return a - b;
    });
    // Why is this condition `!==` instead of `<=` ?
    if (y !== roundedSortedHorizontalPoints[0]) {
        roundedSortedHorizontalPoints.unshift(0);
    }
    var items = roundedSortedHorizontalPoints.map(function(entry, i) {
        // Why do we strip only the last stripe if it is invisible, and not all invisible stripes?
        var lastStripe = !roundedSortedHorizontalPoints[i + 1];
        var lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
        if (lineHeight <= 0) {
            return null;
        }
        var colorIndex = i % horizontalFill.length;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
            key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
            ,
            y: entry,
            x: x,
            height: lineHeight,
            width: width,
            stroke: "none",
            fill: horizontalFill[colorIndex],
            fillOpacity: fillOpacity,
            className: "recharts-cartesian-grid-bg"
        });
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
    }, items);
}
function VerticalStripes(props) {
    var _props$vertical2 = props.vertical, vertical = _props$vertical2 === void 0 ? true : _props$vertical2, verticalFill = props.verticalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, verticalPoints = props.verticalPoints;
    if (!vertical || !verticalFill || !verticalFill.length) {
        return null;
    }
    var roundedSortedVerticalPoints = verticalPoints.map(function(e) {
        return Math.round(e + x - x);
    }).sort(function(a, b) {
        return a - b;
    });
    if (x !== roundedSortedVerticalPoints[0]) {
        roundedSortedVerticalPoints.unshift(0);
    }
    var items = roundedSortedVerticalPoints.map(function(entry, i) {
        var lastStripe = !roundedSortedVerticalPoints[i + 1];
        var lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
        if (lineWidth <= 0) {
            return null;
        }
        var colorIndex = i % verticalFill.length;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
            key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
            ,
            x: entry,
            y: y,
            width: lineWidth,
            height: height,
            stroke: "none",
            fill: verticalFill[colorIndex],
            fillOpacity: fillOpacity,
            className: "recharts-cartesian-grid-bg"
        });
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
    }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator(_ref, syncWithTicks) {
    var xAxis = _ref.xAxis, width = _ref.width, height = _ref.height, offset = _ref.offset;
    return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .Rf)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .O.defaultProps), xAxis), {}, {
        ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .uY)(xAxis, true),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        }
    })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator(_ref2, syncWithTicks) {
    var yAxis = _ref2.yAxis, width = _ref2.width, height = _ref2.height, offset = _ref2.offset;
    return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .Rf)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .O.defaultProps), yAxis), {}, {
        ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .uY)(yAxis, true),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        }
    })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [],
    // The abscissas of vertical grid lines
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    // The fill of colors of grid lines
    verticalFill: [],
    horizontalFill: []
};
function CartesianGrid(props) {
    var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
    var chartWidth = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartWidth */ .zn)();
    var chartHeight = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartHeight */ .Mw)();
    var offset = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useOffset */ .qD)();
    var propsIncludingDefaults = _objectSpread(_objectSpread({}, props), {}, {
        stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
        fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
        horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
        horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
        vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
        verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
        x: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.x) ? props.x : offset.left,
        y: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.y) ? props.y : offset.top,
        width: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.width) ? props.width : offset.width,
        height: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.height) ? props.height : offset.height
    });
    var x = propsIncludingDefaults.x, y = propsIncludingDefaults.y, width = propsIncludingDefaults.width, height = propsIncludingDefaults.height, syncWithTicks = propsIncludingDefaults.syncWithTicks, horizontalValues = propsIncludingDefaults.horizontalValues, verticalValues = propsIncludingDefaults.verticalValues;
    // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
    var xAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useArbitraryXAxis */ .CW)();
    // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
    var yAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useYAxisWithFiniteDomainOrRandom */ .Nf)();
    if (!(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(width) || width <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(height) || height <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(x) || x !== +x || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(y) || y !== +y) {
        return null;
    }
    /*
   * verticalCoordinatesGenerator and horizontalCoordinatesGenerator are defined
   * outside of the propsIncludingDefaults because they were never part of the original props
   * and they were never passed as a prop down to horizontal/vertical custom elements.
   * If we add these two to propsIncludingDefaults then we are changing public API.
   * Not a bad thing per se but also not necessary.
   */ var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
    var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
    var horizontalPoints = propsIncludingDefaults.horizontalPoints, verticalPoints = propsIncludingDefaults.verticalPoints;
    // No horizontal points are specified
    if ((!horizontalPoints || !horizontalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(horizontalCoordinatesGenerator)) {
        var isHorizontalValues = horizontalValues && horizontalValues.length;
        var generatorResult = horizontalCoordinatesGenerator({
            yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, {
                ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
            }) : undefined,
            width: chartWidth,
            height: chartHeight,
            offset: offset
        }, isHorizontalValues ? true : syncWithTicks);
        (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .Z)(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(generatorResult), "]"));
        if (Array.isArray(generatorResult)) {
            horizontalPoints = generatorResult;
        }
    }
    // No vertical points are specified
    if ((!verticalPoints || !verticalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(verticalCoordinatesGenerator)) {
        var isVerticalValues = verticalValues && verticalValues.length;
        var _generatorResult = verticalCoordinatesGenerator({
            xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, {
                ticks: isVerticalValues ? verticalValues : xAxis.ticks
            }) : undefined,
            width: chartWidth,
            height: chartHeight,
            offset: offset
        }, isVerticalValues ? true : syncWithTicks);
        (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .Z)(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(_generatorResult), "]"));
        if (Array.isArray(_generatorResult)) {
            verticalPoints = _generatorResult;
        }
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Background, {
        fill: propsIncludingDefaults.fill,
        fillOpacity: propsIncludingDefaults.fillOpacity,
        x: propsIncludingDefaults.x,
        y: propsIncludingDefaults.y,
        width: propsIncludingDefaults.width,
        height: propsIncludingDefaults.height
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
        offset: offset,
        horizontalPoints: horizontalPoints,
        xAxis: xAxis,
        yAxis: yAxis
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
        offset: offset,
        verticalPoints: verticalPoints,
        xAxis: xAxis,
        yAxis: yAxis
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, {
        horizontalPoints: horizontalPoints
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VerticalStripes, _extends({}, propsIncludingDefaults, {
        verticalPoints: verticalPoints
    })));
}
CartesianGrid.displayName = "CartesianGrid";


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