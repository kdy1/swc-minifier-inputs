"use strict";
exports.id = 87790;
exports.ids = [87790,15277];
exports.modules = {

/***/ 87790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationMenuDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42869);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26910);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54732);
/* harmony import */ var _registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15277);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link."
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content."
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    }
];
function NavigationMenuDemo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenu, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuList, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuItem, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuTrigger, {
                            children: "Getting started"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuContent, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "row-span-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuLink, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
                                                href: "/",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Icons */ .P.logo, {
                                                        className: "h-6 w-6"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-2 mt-4 text-lg font-medium",
                                                        children: "shadcn/ui"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-sm leading-tight text-muted-foreground",
                                                        children: "Beautifully designed components built with Radix UI and Tailwind CSS."
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                        href: "/docs",
                                        title: "Introduction",
                                        children: "Re-usable components built using Radix UI and Tailwind CSS."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                        href: "/docs/installation",
                                        title: "Installation",
                                        children: "How to install dependencies and structure your app."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                        href: "/docs/primitives/typography",
                                        title: "Typography",
                                        children: "Styles for headings, paragraphs, lists...etc"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuItem, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuTrigger, {
                            children: "Components"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuContent, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",
                                children: components.map((component)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                                        title: component.title,
                                        href: component.href,
                                        children: component.description
                                    }, component.title))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuItem, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/docs",
                        legacyBehavior: true,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuLink, {
                            className: (0,_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.navigationMenuTriggerStyle)(),
                            children: "Documentation"
                        })
                    })
                })
            ]
        })
    });
}
const ListItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, title, children, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_4__.NavigationMenuLink, {
            asChild: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className),
                ...props,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-sm font-medium leading-none",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "line-clamp-2 text-sm leading-snug text-muted-foreground",
                        children: children
                    })
                ]
            })
        })
    });
});
ListItem.displayName = "ListItem";


/***/ }),

/***/ 15277:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32562);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37207);
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68840);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);






const NavigationMenu = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationMenuViewport, {})
        ]
    }));
NavigationMenu.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const NavigationMenuList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("group flex flex-1 list-none items-center justify-center space-x-1", className),
        ...props
    }));
NavigationMenuList.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV.displayName;
const NavigationMenuItem = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck;
const navigationMenuTriggerStyle = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__/* .cva */ .j)("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
const NavigationMenuTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            })
        ]
    }));
NavigationMenuTrigger.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const NavigationMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className),
        ...props
    }));
NavigationMenuContent.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const NavigationMenuLink = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU;
const NavigationMenuViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute left-0 top-full flex justify-center"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref,
            ...props
        })
    }));
NavigationMenuViewport.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_.displayName;
const NavigationMenuIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .z$, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        })
    }));
NavigationMenuIndicator.displayName = _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .z$.displayName;



/***/ })

};
;