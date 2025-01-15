"use strict";
exports.id = 93792;
exports.ids = [93792,10538,64159,38505,95221];
exports.modules = {

/***/ 93792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(32379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(30589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/file.js
var file = __webpack_require__(34228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(54209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/folder.js
var folder = __webpack_require__(34276);
// EXTERNAL MODULE: ./registry/default/ui/collapsible.tsx
var collapsible = __webpack_require__(64159);
// EXTERNAL MODULE: ./registry/default/ui/sidebar.tsx
var sidebar = __webpack_require__(95221);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-11/components/app-sidebar.tsx





// This is sample data.
const data = {
    changes: [
        {
            file: "README.md",
            state: "M"
        },
        {
            file: "api/hello/route.ts",
            state: "U"
        },
        {
            file: "app/layout.tsx",
            state: "M"
        }
    ],
    tree: [
        [
            "app",
            [
                "api",
                [
                    "hello",
                    [
                        "route.ts"
                    ]
                ],
                "page.tsx",
                "layout.tsx",
                [
                    "blog",
                    [
                        "page.tsx"
                    ]
                ]
            ]
        ],
        [
            "components",
            [
                "ui",
                "button.tsx",
                "card.tsx"
            ],
            "header.tsx",
            "footer.tsx"
        ],
        [
            "lib",
            [
                "util.ts"
            ]
        ],
        [
            "public",
            "favicon.ico",
            "vercel.svg"
        ],
        ".eslintrc.json",
        ".gitignore",
        "next.config.js",
        "tailwind.config.js",
        "package.json",
        "README.md"
    ]
};
function AppSidebar({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.Sidebar, {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                                children: "Changes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
                                    children: data.changes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuItem, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(file/* default */.Z, {}),
                                                        item.file
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuBadge, {
                                                    children: item.state
                                                })
                                            ]
                                        }, index))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                                children: "Files"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
                                    children: data.tree.map((item, index)=>/*#__PURE__*/ react_jsx_runtime.jsx(Tree, {
                                            item: item
                                        }, index))
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarRail, {})
        ]
    });
}
function Tree({ item }) {
    const [name, ...items] = Array.isArray(item) ? item : [
        item
    ];
    if (!items.length) {
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
            isActive: name === "button.tsx",
            className: "data-[active=true]:bg-transparent",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(file/* default */.Z, {}),
                name
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(collapsible.Collapsible, {
            className: "group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90",
            defaultOpen: name === "components" || name === "ui",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(collapsible.CollapsibleTrigger, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(chevron_right/* default */.Z, {
                                className: "transition-transform"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(folder/* default */.Z, {}),
                            name
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(collapsible.CollapsibleContent, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuSub, {
                        children: items.map((subItem, index)=>/*#__PURE__*/ react_jsx_runtime.jsx(Tree, {
                                item: subItem
                            }, index))
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./registry/default/ui/breadcrumb.tsx
var breadcrumb = __webpack_require__(10538);
// EXTERNAL MODULE: ./registry/default/ui/separator.tsx
var separator = __webpack_require__(38505);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-11/page.tsx





function Page() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(AppSidebar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarInset, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("header", {
                        className: "flex h-16 shrink-0 items-center gap-2 border-b px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarTrigger, {
                                className: "-ml-1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                                orientation: "vertical",
                                className: "mr-2 h-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.Breadcrumb, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(breadcrumb.BreadcrumbList, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbLink, {
                                                href: "#",
                                                children: "components"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {
                                            className: "hidden md:block"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbLink, {
                                                href: "#",
                                                children: "ui"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {
                                            className: "hidden md:block"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbPage, {
                                                children: "button.tsx"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-4 p-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid auto-rows-min gap-4 md:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "aspect-video rounded-xl bg-muted/50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "aspect-video rounded-xl bg-muted/50"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "aspect-video rounded-xl bg-muted/50"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 10538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb),
/* harmony export */   BreadcrumbEllipsis: () => (/* binding */ BreadcrumbEllipsis),
/* harmony export */   BreadcrumbItem: () => (/* binding */ BreadcrumbItem),
/* harmony export */   BreadcrumbLink: () => (/* binding */ BreadcrumbLink),
/* harmony export */   BreadcrumbList: () => (/* binding */ BreadcrumbList),
/* harmony export */   BreadcrumbPage: () => (/* binding */ BreadcrumbPage),
/* harmony export */   BreadcrumbSeparator: () => (/* binding */ BreadcrumbSeparator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9210);
/* harmony import */ var _barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54209);
/* harmony import */ var _barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23888);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);





const Breadcrumb = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        ref: ref,
        "aria-label": "breadcrumb",
        ...props
    }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
        ...props
    }));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("inline-flex items-center gap-1.5", className),
        ...props
    }));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ asChild, className, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "a";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("transition-colors hover:text-foreground", className),
        ...props
    });
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        ref: ref,
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-normal text-foreground", className),
        ...props
    }));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        role: "presentation",
        "aria-hidden": "true",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "More"
            })
        ]
    });
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";



/***/ }),

/***/ 64159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ e0),
/* harmony export */   CollapsibleContent: () => (/* binding */ e2),
/* harmony export */   CollapsibleTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/collapsible.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/collapsible.tsx#Collapsible`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/collapsible.tsx#CollapsibleTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/collapsible.tsx#CollapsibleContent`);


/***/ }),

/***/ 38505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/separator.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/separator.tsx#Separator`);


/***/ }),

/***/ 95221:
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

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#Sidebar`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarContent`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarFooter`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarGroup`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarGroupAction`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarGroupContent`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarGroupLabel`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarHeader`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarInput`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarInset`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenu`);

const e11 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuAction`);

const e12 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuBadge`);

const e13 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuButton`);

const e14 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuItem`);

const e15 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuSkeleton`);

const e16 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuSub`);

const e17 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuSubButton`);

const e18 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarMenuSubItem`);

const e19 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarProvider`);

const e20 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarRail`);

const e21 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarSeparator`);

const e22 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#SidebarTrigger`);

const e23 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/sidebar.tsx#useSidebar`);


/***/ }),

/***/ 9210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g7: () => (/* binding */ Slot)
});

// UNUSED EXPORTS: Root, Slottable

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(30589);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
// packages/react/compose-refs/src/composeRefs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(32379);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs
// packages/react/slot/src/Slot.tsx



var Slot = react.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = react.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (react.Children.count(newElement) > 1) return react.Children.only(null);
        return react.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react.isValidElement(newElement) ? react.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = react.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (react.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return react.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return react.Children.count(children) > 1 ? react.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children });
};
function isSlottable(child) {
  return react.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = (/* unused pure expression or super */ null && (Slot));

//# sourceMappingURL=index.mjs.map


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

/***/ 54209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
 //# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 23888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Ellipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
 //# sourceMappingURL=ellipsis.js.map


/***/ }),

/***/ 34228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const File = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("File", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
]);
 //# sourceMappingURL=file.js.map


/***/ }),

/***/ 34276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97632);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Folder = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Folder", [
    [
        "path",
        {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }
    ]
]);
 //# sourceMappingURL=folder.js.map


/***/ })

};
;