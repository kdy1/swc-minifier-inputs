"use strict";
exports.id = 40079;
exports.ids = [40079,76010,97911,45198,96580,80203,20581];
exports.modules = {

/***/ 75103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionSwitcher: () => (/* binding */ VersionSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64880);
/* harmony import */ var _barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25367);
/* harmony import */ var _barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15917);
/* harmony import */ var _registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96580);
/* harmony import */ var _registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81007);
/* __next_internal_client_entry_do_not_use__ VersionSwitcher auto */ 




function VersionSwitcher({ versions, defaultVersion }) {
    const [selectedVersion, setSelectedVersion] = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultVersion);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarMenu, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarMenuItem, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__.SidebarMenuButton, {
                            size: "lg",
                            className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "size-4"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-0.5 leading-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-semibold",
                                            children: "Documentation"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "",
                                            children: [
                                                "v",
                                                selectedVersion
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "ml-auto"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {
                        className: "w-[--radix-dropdown-menu-trigger-width]",
                        align: "start",
                        children: versions.map((version)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                onSelect: ()=>setSelectedVersion(version),
                                children: [
                                    "v",
                                    version,
                                    " ",
                                    version === selectedVersion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronsUpDown_GalleryVerticalEnd_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        className: "ml-auto"
                                    })
                                ]
                            }, version))
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 85063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(2101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(55175);
// EXTERNAL MODULE: ./registry/default/ui/label.tsx
var label = __webpack_require__(80203);
// EXTERNAL MODULE: ./registry/default/ui/sidebar.tsx
var sidebar = __webpack_require__(81007);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-02/components/search-form.tsx




function SearchForm({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx("form", {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroup, {
            className: "py-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroupContent, {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                        htmlFor: "search",
                        className: "sr-only",
                        children: "Search"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarInput, {
                        id: "search",
                        placeholder: "Search the docs...",
                        className: "pl-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(search/* default */.Z, {
                        className: "pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50"
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./registry/default/blocks/sidebar-02/components/version-switcher.tsx
var version_switcher = __webpack_require__(75103);
// EXTERNAL MODULE: ./registry/default/ui/collapsible.tsx
var collapsible = __webpack_require__(45198);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-02/components/app-sidebar.tsx







// This is sample data.
const data = {
    versions: [
        "1.0.1",
        "1.1.0-alpha",
        "2.0.0-beta1"
    ],
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#"
                },
                {
                    title: "Project Structure",
                    url: "#"
                }
            ]
        },
        {
            title: "Building Your Application",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#"
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true
                },
                {
                    title: "Rendering",
                    url: "#"
                },
                {
                    title: "Caching",
                    url: "#"
                },
                {
                    title: "Styling",
                    url: "#"
                },
                {
                    title: "Optimizing",
                    url: "#"
                },
                {
                    title: "Configuring",
                    url: "#"
                },
                {
                    title: "Testing",
                    url: "#"
                },
                {
                    title: "Authentication",
                    url: "#"
                },
                {
                    title: "Deploying",
                    url: "#"
                },
                {
                    title: "Upgrading",
                    url: "#"
                },
                {
                    title: "Examples",
                    url: "#"
                }
            ]
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#"
                },
                {
                    title: "File Conventions",
                    url: "#"
                },
                {
                    title: "Functions",
                    url: "#"
                },
                {
                    title: "next.config.js Options",
                    url: "#"
                },
                {
                    title: "CLI",
                    url: "#"
                },
                {
                    title: "Edge Runtime",
                    url: "#"
                }
            ]
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#"
                },
                {
                    title: "Fast Refresh",
                    url: "#"
                },
                {
                    title: "Next.js Compiler",
                    url: "#"
                },
                {
                    title: "Supported Browsers",
                    url: "#"
                },
                {
                    title: "Turbopack",
                    url: "#"
                }
            ]
        },
        {
            title: "Community",
            url: "#",
            items: [
                {
                    title: "Contribution Guide",
                    url: "#"
                }
            ]
        }
    ]
};
function AppSidebar({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.Sidebar, {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(version_switcher.VersionSwitcher, {
                        versions: data.versions,
                        defaultVersion: data.versions[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(SearchForm, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarContent, {
                className: "gap-0",
                children: data.navMain.map((item)=>/*#__PURE__*/ react_jsx_runtime.jsx(collapsible.Collapsible, {
                        title: item.title,
                        defaultOpen: true,
                        className: "group/collapsible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroup, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                                    asChild: true,
                                    className: "group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(collapsible.CollapsibleTrigger, {
                                        children: [
                                            item.title,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime.jsx(chevron_right/* default */.Z, {
                                                className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(collapsible.CollapsibleContent, {
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
                                            children: item.items.map((item)=>/*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuButton, {
                                                        asChild: true,
                                                        isActive: item.isActive,
                                                        children: /*#__PURE__*/ react_jsx_runtime.jsx("a", {
                                                            href: item.url,
                                                            children: item.title
                                                        })
                                                    })
                                                }, item.title))
                                        })
                                    })
                                })
                            ]
                        })
                    }, item.title))
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarRail, {})
        ]
    });
}

// EXTERNAL MODULE: ./registry/default/ui/breadcrumb.tsx
var breadcrumb = __webpack_require__(97911);
// EXTERNAL MODULE: ./registry/default/ui/separator.tsx
var separator = __webpack_require__(81281);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-02/page.tsx





function Page() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(AppSidebar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarInset, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("header", {
                        className: "flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4",
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
                                                children: "Building Your Application"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {
                                            className: "hidden md:block"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbPage, {
                                                children: "Data Fetching"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "flex flex-1 flex-col gap-4 p-4",
                        children: Array.from({
                            length: 24
                        }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "aspect-video h-12 w-full rounded-lg bg-muted/50"
                            }, index))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 97911:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80464);
/* harmony import */ var _barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2101);
/* harmony import */ var _barrel_optimize_names_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48286);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);





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

/***/ 45198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleContent: () => (/* binding */ CollapsibleContent),
/* harmony export */   CollapsibleTrigger: () => (/* binding */ CollapsibleTrigger)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70077);
/* __next_internal_client_entry_do_not_use__ Collapsible,CollapsibleTrigger,CollapsibleContent auto */ 
const Collapsible = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__/* .Root */ .fC;
const CollapsibleTrigger = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__/* .CollapsibleTrigger */ .wy;
const CollapsibleContent = _radix_ui_react_collapsible__WEBPACK_IMPORTED_MODULE_0__/* .CollapsibleContent */ .Fw;



/***/ }),

/***/ 96580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenu: () => (/* binding */ DropdownMenu),
/* harmony export */   DropdownMenuCheckboxItem: () => (/* binding */ DropdownMenuCheckboxItem),
/* harmony export */   DropdownMenuContent: () => (/* binding */ DropdownMenuContent),
/* harmony export */   DropdownMenuGroup: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   DropdownMenuItem: () => (/* binding */ DropdownMenuItem),
/* harmony export */   DropdownMenuLabel: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   DropdownMenuPortal: () => (/* binding */ DropdownMenuPortal),
/* harmony export */   DropdownMenuRadioGroup: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   DropdownMenuRadioItem: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   DropdownMenuSeparator: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   DropdownMenuShortcut: () => (/* binding */ DropdownMenuShortcut),
/* harmony export */   DropdownMenuSub: () => (/* binding */ DropdownMenuSub),
/* harmony export */   DropdownMenuSubContent: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   DropdownMenuSubTrigger: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   DropdownMenuTrigger: () => (/* binding */ DropdownMenuTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30799);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2101);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15917);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76823);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .Uv;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Sub */ .Tr;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioGroup */ .Ee;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .fF, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "ml-auto"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .fF.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .tu, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .tu.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .Uv, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .oC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .oC.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .Rk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .Rk.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ }),

/***/ 80203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82471);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37207);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f.displayName;



/***/ }),

/***/ 82471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $b73a6c6685e72184$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54227);







/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/ const $b73a6c6685e72184$var$NAME = 'Label';
const $b73a6c6685e72184$export$b04be29aa201d4f5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__/* .Primitive */ .WV.label, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props, {
        ref: forwardedRef,
        onMouseDown: (event)=>{
            var _props$onMouseDown;
            (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event); // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    }));
});
/*#__PURE__*/ Object.assign($b73a6c6685e72184$export$b04be29aa201d4f5, {
    displayName: $b73a6c6685e72184$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;





//# sourceMappingURL=index.mjs.map


/***/ }),

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

/***/ 25367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronsUpDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronsUpDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronsUpDown", [
    [
        "path",
        {
            d: "m7 15 5 5 5-5",
            key: "1hf1tw"
        }
    ],
    [
        "path",
        {
            d: "m7 9 5-5 5 5",
            key: "sgt6xg"
        }
    ]
]);
 //# sourceMappingURL=chevrons-up-down.js.map


/***/ }),

/***/ 48286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
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

/***/ 64880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GalleryVerticalEnd)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const GalleryVerticalEnd = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("GalleryVerticalEnd", [
    [
        "path",
        {
            d: "M7 2h10",
            key: "nczekb"
        }
    ],
    [
        "path",
        {
            d: "M5 6h14",
            key: "u2x4p"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "12",
            x: "3",
            y: "10",
            rx: "2",
            key: "l0tzu3"
        }
    ]
]);
 //# sourceMappingURL=gallery-vertical-end.js.map


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