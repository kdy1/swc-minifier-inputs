"use strict";
exports.id = 25739;
exports.ids = [25739,47399];
exports.modules = {

/***/ 25739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68207);
/* harmony import */ var _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9041);
/* harmony import */ var _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7445);
/* harmony import */ var _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9941);
/* harmony import */ var _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79967);
/* harmony import */ var _registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47399);




const projects = [
    {
        name: "Design Engineering",
        url: "#",
        icon: _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        badge: "24"
    },
    {
        name: "Sales & Marketing",
        url: "#",
        icon: _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        badge: "12"
    },
    {
        name: "Travel",
        url: "#",
        icon: _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        badge: "3"
    },
    {
        name: "Support",
        url: "#",
        icon: _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        badge: "21"
    },
    {
        name: "Feedback",
        url: "#",
        icon: _barrel_optimize_names_Frame_LifeBuoy_Map_PieChart_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        badge: "8"
    }
];
// Dummy fetch function
async function fetchProjects() {
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    return projects;
}
function AppSidebar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarGroup, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarGroupLabel, {
                            children: "Projects"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarGroupContent, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavProjectsSkeleton, {}),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavProjects, {})
                            })
                        })
                    ]
                })
            })
        })
    });
}
function NavProjectsSkeleton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenu, {
        children: Array.from({
            length: 5
        }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenuItem, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenuSkeleton, {
                    showIcon: true
                })
            }, index))
    });
}
async function NavProjects() {
    const projects = await fetchProjects();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenu, {
        children: projects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenuItem, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarMenuButton, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: project.url,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(project.icon, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: project.name
                            })
                        ]
                    })
                })
            }, project.name))
    });
}


/***/ }),

/***/ 47399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ e0),
/* harmony export */   SidebarContent: () => (/* binding */ e1),
/* harmony export */   SidebarFooter: () => (/* binding */ e2),
/* harmony export */   SidebarGroup: () => (/* binding */ e3),
/* harmony export */   SidebarGroupAction: () => (/* binding */ e4),
/* harmony export */   SidebarGroupContent: () => (/* binding */ e5),
/* harmony export */   SidebarGroupLabel: () => (/* binding */ e6),
/* harmony export */   SidebarHeader: () => (/* binding */ e7),
/* harmony export */   SidebarInput: () => (/* binding */ e8),
/* harmony export */   SidebarInset: () => (/* binding */ e9),
/* harmony export */   SidebarMenu: () => (/* binding */ e10),
/* harmony export */   SidebarMenuAction: () => (/* binding */ e11),
/* harmony export */   SidebarMenuBadge: () => (/* binding */ e12),
/* harmony export */   SidebarMenuButton: () => (/* binding */ e13),
/* harmony export */   SidebarMenuItem: () => (/* binding */ e14),
/* harmony export */   SidebarMenuSkeleton: () => (/* binding */ e15),
/* harmony export */   SidebarMenuSub: () => (/* binding */ e16),
/* harmony export */   SidebarMenuSubButton: () => (/* binding */ e17),
/* harmony export */   SidebarMenuSubItem: () => (/* binding */ e18),
/* harmony export */   SidebarProvider: () => (/* binding */ e19),
/* harmony export */   SidebarRail: () => (/* binding */ e20),
/* harmony export */   SidebarSeparator: () => (/* binding */ e21),
/* harmony export */   SidebarTrigger: () => (/* binding */ e22),
/* harmony export */   useSidebar: () => (/* binding */ e23)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#Sidebar`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarContent`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarFooter`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarGroup`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarGroupAction`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarGroupContent`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarGroupLabel`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarHeader`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarInput`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarInset`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenu`);

const e11 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuAction`);

const e12 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuBadge`);

const e13 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuButton`);

const e14 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuItem`);

const e15 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuSkeleton`);

const e16 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuSub`);

const e17 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuSubButton`);

const e18 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarMenuSubItem`);

const e19 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarProvider`);

const e20 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarRail`);

const e21 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarSeparator`);

const e22 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#SidebarTrigger`);

const e23 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sidebar.tsx#useSidebar`);


/***/ }),

/***/ 97632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(30589);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js
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

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref)=>{
        return /*#__PURE__*/ (0,react.createElement)("svg", {
            ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                `lucide-${toKebabCase(iconName)}`,
                className
            ].join(" "),
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react.createElement)(tag, attrs)),
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

/***/ 68207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Frame)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Frame = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Frame", [
    [
        "line",
        {
            x1: "22",
            x2: "2",
            y1: "6",
            y2: "6",
            key: "15w7dq"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "2",
            y1: "18",
            y2: "18",
            key: "1ip48p"
        }
    ],
    [
        "line",
        {
            x1: "6",
            x2: "6",
            y1: "2",
            y2: "22",
            key: "a2lnyx"
        }
    ],
    [
        "line",
        {
            x1: "18",
            x2: "18",
            y1: "2",
            y2: "22",
            key: "8vb6jd"
        }
    ]
]);
 //# sourceMappingURL=frame.js.map


/***/ }),

/***/ 9941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LifeBuoy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LifeBuoy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("LifeBuoy", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 4.24 4.24",
            key: "1ymg45"
        }
    ],
    [
        "path",
        {
            d: "m14.83 9.17 4.24-4.24",
            key: "1cb5xl"
        }
    ],
    [
        "path",
        {
            d: "m14.83 14.83 4.24 4.24",
            key: "q42g0n"
        }
    ],
    [
        "path",
        {
            d: "m9.17 14.83-4.24 4.24",
            key: "bqpfvv"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ]
]);
 //# sourceMappingURL=life-buoy.js.map


/***/ }),

/***/ 7445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Map = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Map", [
    [
        "polygon",
        {
            points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",
            key: "ok2ie8"
        }
    ],
    [
        "line",
        {
            x1: "9",
            x2: "9",
            y1: "3",
            y2: "18",
            key: "w34qz5"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "15",
            y1: "6",
            y2: "21",
            key: "volv9a"
        }
    ]
]);
 //# sourceMappingURL=map.js.map


/***/ }),

/***/ 9041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PieChart = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("PieChart", [
    [
        "path",
        {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
            key: "k2fpak"
        }
    ],
    [
        "path",
        {
            d: "M22 12A10 10 0 0 0 12 2v10z",
            key: "1rfc4y"
        }
    ]
]);
 //# sourceMappingURL=pie-chart.js.map


/***/ }),

/***/ 79967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Send)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Send = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Send", [
    [
        "path",
        {
            d: "m22 2-7 20-4-9-9-4Z",
            key: "1q3vgg"
        }
    ],
    [
        "path",
        {
            d: "M22 2 11 13",
            key: "nzbqef"
        }
    ]
]);
 //# sourceMappingURL=send.js.map


/***/ })

};
;