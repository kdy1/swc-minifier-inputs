"use strict";
exports.id = 20575;
exports.ids = [20575,76010,67089,97911,45198,96580,20581];
exports.modules = {

/***/ 11938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavUser: () => (/* binding */ NavUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25367);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44806);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84970);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33999);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36818);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88583);
/* harmony import */ var _registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67089);
/* harmony import */ var _registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96580);
/* harmony import */ var _registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81007);
/* __next_internal_client_entry_do_not_use__ NavUser auto */ 




function NavUser({ user }) {
    const { isMobile } = (0,_registry_default_ui_sidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebar)();
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                    className: "h-8 w-8 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                            src: user.avatar,
                                            alt: user.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                            className: "rounded-lg",
                                            children: "CN"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid flex-1 text-left text-sm leading-tight",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "truncate font-semibold",
                                            children: user.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "truncate text-xs",
                                            children: user.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "ml-auto size-4"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {
                        className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
                        side: isMobile ? "bottom" : "right",
                        align: "start",
                        sideOffset: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuLabel, {
                                className: "p-0 font-normal",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                            className: "h-8 w-8 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                    src: user.avatar,
                                                    alt: user.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                    className: "rounded-lg",
                                                    children: "CN"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid flex-1 text-left text-sm leading-tight",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "truncate font-semibold",
                                                    children: user.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "truncate text-xs",
                                                    children: user.email
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuGroup, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                        "Upgrade to Pro"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuGroup, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                            "Account"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                            "Billing"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            "Notifications"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_ChevronsUpDown_CreditCard_LogOut_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                    "Log out"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 26714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SidebarLeft: () => (/* binding */ SidebarLeft)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/command.js
var command = __webpack_require__(17469);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/audio-waveform.js
var audio_waveform = __webpack_require__(20854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(55175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(44806);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/home.js
var home = __webpack_require__(40803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/inbox.js
var inbox = __webpack_require__(65909);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(21041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings-2.js
var settings_2 = __webpack_require__(87946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/blocks.js
var blocks = __webpack_require__(33963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(61033);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/message-circle-question.js
var message_circle_question = __webpack_require__(45885);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ellipsis = __webpack_require__(48286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/star-off.js
var star_off = __webpack_require__(22919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(77228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var arrow_up_right = __webpack_require__(22975);
// EXTERNAL MODULE: ./registry/default/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(96580);
// EXTERNAL MODULE: ./registry/default/ui/sidebar.tsx
var sidebar = __webpack_require__(81007);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/nav-favorites.tsx
/* __next_internal_client_entry_do_not_use__ NavFavorites auto */ 



function NavFavorites({ favorites }) {
    const { isMobile } = (0,sidebar.useSidebar)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroup, {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                children: "Favorites"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenu, {
                children: [
                    favorites.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuItem, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuButton, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                                        href: item.url,
                                        title: item.name,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                children: item.emoji
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                children: item.name
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenu, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuTrigger, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuAction, {
                                                showOnHover: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(ellipsis/* default */.Z, {}),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        className: "sr-only",
                                                        children: "More"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuContent, {
                                            className: "w-56 rounded-lg",
                                            side: isMobile ? "bottom" : "right",
                                            align: isMobile ? "end" : "start",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(star_off/* default */.Z, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                            children: "Remove from Favorites"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(icons_link/* default */.Z, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                            children: "Copy Link"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(arrow_up_right/* default */.Z, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                            children: "Open in New Tab"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                            children: "Delete"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, item.name)),
                    /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                            className: "text-sidebar-foreground/70",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(ellipsis/* default */.Z, {}),
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    children: "More"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/nav-main.tsx
/* __next_internal_client_entry_do_not_use__ NavMain auto */ 

function NavMain({ items }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuButton, {
                    asChild: true,
                    isActive: item.isActive,
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                        href: item.url,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(item.icon, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                children: item.title
                            })
                        ]
                    })
                })
            }, item.title))
    });
}

;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/nav-secondary.tsx



function NavSecondary({ items, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroup, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
            children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuItem, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuButton, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                                    href: item.url,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(item.icon, {}),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                            children: item.title
                                        })
                                    ]
                                })
                            }),
                            item.badge && /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuBadge, {
                                children: item.badge
                            })
                        ]
                    }, item.title))
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(2101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(7925);
// EXTERNAL MODULE: ./registry/default/ui/collapsible.tsx
var collapsible = __webpack_require__(45198);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/nav-workspaces.tsx




function NavWorkspaces({ workspaces }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarGroup, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                children: "Workspaces"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenu, {
                    children: [
                        workspaces.map((workspace)=>/*#__PURE__*/ react_jsx_runtime.jsx(collapsible.Collapsible, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuItem, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuButton, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: workspace.emoji
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                        children: workspace.name
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(collapsible.CollapsibleTrigger, {
                                            asChild: true,
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuAction, {
                                                className: "left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90",
                                                showOnHover: true,
                                                children: /*#__PURE__*/ react_jsx_runtime.jsx(chevron_right/* default */.Z, {})
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuAction, {
                                            showOnHover: true,
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(plus/* default */.Z, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(collapsible.CollapsibleContent, {
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuSub, {
                                                children: workspace.pages.map((page)=>/*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuSubItem, {
                                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuSubButton, {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                        children: page.emoji
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                        children: page.name
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, page.name))
                                            })
                                        })
                                    ]
                                })
                            }, workspace.name)),
                        /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                                className: "text-sidebar-foreground/70",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(ellipsis/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "More"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(68840);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/team-switcher.tsx
/* __next_internal_client_entry_do_not_use__ TeamSwitcher auto */ 




function TeamSwitcher({ teams }) {
    const [activeTeam, setActiveTeam] = react.useState(teams[0]);
    return /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                            className: "w-fit px-1.5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(activeTeam.logo, {
                                        className: "size-3"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    className: "truncate font-semibold",
                                    children: activeTeam.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(chevron_down/* default */.Z, {
                                    className: "opacity-50"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuContent, {
                        className: "w-64 rounded-lg",
                        align: "start",
                        side: "bottom",
                        sideOffset: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuLabel, {
                                className: "text-xs text-muted-foreground",
                                children: "Teams"
                            }),
                            teams.map((team, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                    onClick: ()=>setActiveTeam(team),
                                    className: "gap-2 p-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                            className: "flex size-6 items-center justify-center rounded-sm border",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(team.logo, {
                                                className: "size-4 shrink-0"
                                            })
                                        }),
                                        team.name,
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuShortcut, {
                                            children: [
                                                "⌘",
                                                index + 1
                                            ]
                                        })
                                    ]
                                }, team.name)),
                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                className: "gap-2 p-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "flex size-6 items-center justify-center rounded-md border bg-background",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(plus/* default */.Z, {
                                            className: "size-4"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "font-medium text-muted-foreground",
                                        children: "Add team"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/sidebar-left.tsx
/* __next_internal_client_entry_do_not_use__ SidebarLeft auto */ 








// This is sample data.
const data = {
    teams: [
        {
            name: "Acme Inc",
            logo: command/* default */.Z,
            plan: "Enterprise"
        },
        {
            name: "Acme Corp.",
            logo: audio_waveform/* default */.Z,
            plan: "Startup"
        },
        {
            name: "Evil Corp.",
            logo: command/* default */.Z,
            plan: "Free"
        }
    ],
    navMain: [
        {
            title: "Search",
            url: "#",
            icon: search/* default */.Z
        },
        {
            title: "Ask AI",
            url: "#",
            icon: sparkles/* default */.Z
        },
        {
            title: "Home",
            url: "#",
            icon: home/* default */.Z,
            isActive: true
        },
        {
            title: "Inbox",
            url: "#",
            icon: inbox/* default */.Z,
            badge: "10"
        }
    ],
    navSecondary: [
        {
            title: "Calendar",
            url: "#",
            icon: calendar/* default */.Z
        },
        {
            title: "Settings",
            url: "#",
            icon: settings_2/* default */.Z
        },
        {
            title: "Templates",
            url: "#",
            icon: blocks/* default */.Z
        },
        {
            title: "Trash",
            url: "#",
            icon: trash_2/* default */.Z
        },
        {
            title: "Help",
            url: "#",
            icon: message_circle_question/* default */.Z
        }
    ],
    favorites: [
        {
            name: "Project Management & Task Tracking",
            url: "#",
            emoji: "\uD83D\uDCCA"
        },
        {
            name: "Family Recipe Collection & Meal Planning",
            url: "#",
            emoji: "\uD83C\uDF73"
        },
        {
            name: "Fitness Tracker & Workout Routines",
            url: "#",
            emoji: "\uD83D\uDCAA"
        },
        {
            name: "Book Notes & Reading List",
            url: "#",
            emoji: "\uD83D\uDCDA"
        },
        {
            name: "Sustainable Gardening Tips & Plant Care",
            url: "#",
            emoji: "\uD83C\uDF31"
        },
        {
            name: "Language Learning Progress & Resources",
            url: "#",
            emoji: "\uD83D\uDDE3️"
        },
        {
            name: "Home Renovation Ideas & Budget Tracker",
            url: "#",
            emoji: "\uD83C\uDFE0"
        },
        {
            name: "Personal Finance & Investment Portfolio",
            url: "#",
            emoji: "\uD83D\uDCB0"
        },
        {
            name: "Movie & TV Show Watchlist with Reviews",
            url: "#",
            emoji: "\uD83C\uDFAC"
        },
        {
            name: "Daily Habit Tracker & Goal Setting",
            url: "#",
            emoji: "✅"
        }
    ],
    workspaces: [
        {
            name: "Personal Life Management",
            emoji: "\uD83C\uDFE0",
            pages: [
                {
                    name: "Daily Journal & Reflection",
                    url: "#",
                    emoji: "\uD83D\uDCD4"
                },
                {
                    name: "Health & Wellness Tracker",
                    url: "#",
                    emoji: "\uD83C\uDF4F"
                },
                {
                    name: "Personal Growth & Learning Goals",
                    url: "#",
                    emoji: "\uD83C\uDF1F"
                }
            ]
        },
        {
            name: "Professional Development",
            emoji: "\uD83D\uDCBC",
            pages: [
                {
                    name: "Career Objectives & Milestones",
                    url: "#",
                    emoji: "\uD83C\uDFAF"
                },
                {
                    name: "Skill Acquisition & Training Log",
                    url: "#",
                    emoji: "\uD83E\uDDE0"
                },
                {
                    name: "Networking Contacts & Events",
                    url: "#",
                    emoji: "\uD83E\uDD1D"
                }
            ]
        },
        {
            name: "Creative Projects",
            emoji: "\uD83C\uDFA8",
            pages: [
                {
                    name: "Writing Ideas & Story Outlines",
                    url: "#",
                    emoji: "✍️"
                },
                {
                    name: "Art & Design Portfolio",
                    url: "#",
                    emoji: "\uD83D\uDDBC️"
                },
                {
                    name: "Music Composition & Practice Log",
                    url: "#",
                    emoji: "\uD83C\uDFB5"
                }
            ]
        },
        {
            name: "Home Management",
            emoji: "\uD83C\uDFE1",
            pages: [
                {
                    name: "Household Budget & Expense Tracking",
                    url: "#",
                    emoji: "\uD83D\uDCB0"
                },
                {
                    name: "Home Maintenance Schedule & Tasks",
                    url: "#",
                    emoji: "\uD83D\uDD27"
                },
                {
                    name: "Family Calendar & Event Planning",
                    url: "#",
                    emoji: "\uD83D\uDCC5"
                }
            ]
        },
        {
            name: "Travel & Adventure",
            emoji: "\uD83E\uDDF3",
            pages: [
                {
                    name: "Trip Planning & Itineraries",
                    url: "#",
                    emoji: "\uD83D\uDDFA️"
                },
                {
                    name: "Travel Bucket List & Inspiration",
                    url: "#",
                    emoji: "\uD83C\uDF0E"
                },
                {
                    name: "Travel Journal & Photo Gallery",
                    url: "#",
                    emoji: "\uD83D\uDCF8"
                }
            ]
        }
    ]
};
function SidebarLeft({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.Sidebar, {
        className: "border-r-0",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(TeamSwitcher, {
                        teams: data.teams
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(NavMain, {
                        items: data.navMain
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(NavFavorites, {
                        favorites: data.favorites
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(NavWorkspaces, {
                        workspaces: data.workspaces
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(NavSecondary, {
                        items: data.navSecondary,
                        className: "mt-auto"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarRail, {})
        ]
    });
}


/***/ }),

/***/ 4645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ./registry/default/blocks/sidebar-15/components/sidebar-left.tsx + 5 modules
var sidebar_left = __webpack_require__(26714);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(7925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(2101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(15917);
// EXTERNAL MODULE: ./registry/default/ui/collapsible.tsx
var collapsible = __webpack_require__(45198);
// EXTERNAL MODULE: ./registry/default/ui/sidebar.tsx
var sidebar = __webpack_require__(81007);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/calendars.tsx





function Calendars({ calendars }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
        children: calendars.map((calendar, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroup, {
                        className: "py-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(collapsible.Collapsible, {
                            defaultOpen: index === 0,
                            className: "group/collapsible",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupLabel, {
                                    asChild: true,
                                    className: "group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(collapsible.CollapsibleTrigger, {
                                        children: [
                                            calendar.name,
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
                                            children: calendar.items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                "data-active": index < 2,
                                                                className: "group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary",
                                                                children: /*#__PURE__*/ react_jsx_runtime.jsx(check/* default */.Z, {
                                                                    className: "hidden size-3 group-data-[active=true]/calendar-item:block"
                                                                })
                                                            }),
                                                            item
                                                        ]
                                                    })
                                                }, item))
                                        })
                                    })
                                })
                            ]
                        })
                    }, calendar.name),
                    /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarSeparator, {
                        className: "mx-0"
                    })
                ]
            }, calendar.name))
    });
}

// EXTERNAL MODULE: ./registry/default/ui/calendar.tsx
var calendar = __webpack_require__(93364);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/date-picker.tsx



function DatePicker() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroup, {
        className: "px-0",
        children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarGroupContent, {
            children: /*#__PURE__*/ react_jsx_runtime.jsx(calendar.Calendar, {
                className: "[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
            })
        })
    });
}

// EXTERNAL MODULE: ./registry/default/blocks/sidebar-15/components/nav-user.tsx
var nav_user = __webpack_require__(11938);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/components/sidebar-right.tsx







// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg"
    },
    calendars: [
        {
            name: "My Calendars",
            items: [
                "Personal",
                "Work",
                "Family"
            ]
        },
        {
            name: "Favorites",
            items: [
                "Holidays",
                "Birthdays"
            ]
        },
        {
            name: "Other",
            items: [
                "Travel",
                "Reminders",
                "Deadlines"
            ]
        }
    ]
};
function SidebarRight({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.Sidebar, {
        collapsible: "none",
        className: "sticky hidden lg:flex top-0 h-svh border-l",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarHeader, {
                className: "h-16 border-b border-sidebar-border",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(nav_user.NavUser, {
                    user: data.user
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(DatePicker, {}),
                    /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarSeparator, {
                        className: "mx-0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(Calendars, {
                        calendars: data.calendars
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarFooter, {
                children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenu, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarMenuItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarMenuButton, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(plus/* default */.Z, {}),
                                /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                    children: "New Calendar"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/default/ui/breadcrumb.tsx
var breadcrumb = __webpack_require__(97911);
// EXTERNAL MODULE: ./registry/default/ui/separator.tsx
var separator = __webpack_require__(81281);
;// CONCATENATED MODULE: ./registry/default/blocks/sidebar-15/page.tsx






function Page() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(sidebar_left.SidebarLeft, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarInset, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("header", {
                        className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex flex-1 items-center gap-2 px-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(sidebar.SidebarTrigger, {}),
                                /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                                    orientation: "vertical",
                                    className: "mr-2 h-4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.Breadcrumb, {
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbList, {
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbPage, {
                                                className: "line-clamp-1",
                                                children: "Project Management & Task Tracking"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-4 p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(SidebarRight, {})
        ]
    });
}


/***/ }),

/***/ 67089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   AvatarFallback: () => (/* binding */ AvatarFallback),
/* harmony export */   AvatarImage: () => (/* binding */ AvatarImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20419);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Avatar,AvatarImage,AvatarFallback auto */ 



const Avatar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }));
Avatar.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const AvatarImage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("aspect-square h-full w-full", className),
        ...props
    }));
AvatarImage.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee.displayName;
const AvatarFallback = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }));
AvatarFallback.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY.displayName;



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

/***/ 93364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calendar: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55637);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2101);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41770);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26910);
/* harmony import */ var _registry_default_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27963);
/* __next_internal_client_entry_do_not_use__ Calendar auto */ 





function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_2__/* .DayPicker */ ._W, {
        showOutsideDays: showOutsideDays,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("p-3", className),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_default_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_default_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames
        },
        components: {
            IconLeft: ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("h-4 w-4", className),
                    ...props
                }),
            IconRight: ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("h-4 w-4", className),
                    ...props
                })
        },
        ...props
    });
}
Calendar.displayName = "Calendar";



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

/***/ 20419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ $cddcb0b647441e34$export$3e431a229df88919),
/* harmony export */   NY: () => (/* binding */ $cddcb0b647441e34$export$fb8d7f40caaeea67),
/* harmony export */   fC: () => (/* binding */ $cddcb0b647441e34$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony exports createAvatarScope, Avatar, AvatarImage, AvatarFallback */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78438);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88836);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54227);













/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$AVATAR_NAME = 'Avatar';
const [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($cddcb0b647441e34$var$AVATAR_NAME);
const [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
const $cddcb0b647441e34$export$e2255cf6045e8d47 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle');
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cddcb0b647441e34$var$AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus: imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, avatarProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$e2255cf6045e8d47, {
    displayName: $cddcb0b647441e34$var$AVATAR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarImage
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$IMAGE_NAME = 'AvatarImage';
const $cddcb0b647441e34$export$2cd8ae1985206fe8 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , src: src , onLoadingStatusChange: onLoadingStatusChange = ()=>{} , ...imageProps } = props;
    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
    const handleLoadingStatusChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__/* .useCallbackRef */ .W)((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__/* .useLayoutEffect */ .b)(()=>{
        if (imageLoadingStatus !== 'idle') handleLoadingStatusChange(imageLoadingStatus);
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === 'loaded' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.img, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, imageProps, {
        ref: forwardedRef,
        src: src
    })) : null;
});
/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$2cd8ae1985206fe8, {
    displayName: $cddcb0b647441e34$var$IMAGE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarFallback
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$FALLBACK_NAME = 'AvatarFallback';
const $cddcb0b647441e34$export$69fffb6a9571fbfe = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , delayMs: delayMs , ...fallbackProps } = props;
    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(delayMs === undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (delayMs !== undefined) {
            const timerId = window.setTimeout(()=>setCanRender(true)
            , delayMs);
            return ()=>window.clearTimeout(timerId)
            ;
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== 'loaded' ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, fallbackProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($cddcb0b647441e34$export$69fffb6a9571fbfe, {
    displayName: $cddcb0b647441e34$var$FALLBACK_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
    const [loadingStatus, setLoadingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!src) {
            setLoadingStatus('error');
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            }
        ;
        setLoadingStatus('loading');
        image.onload = updateStatus('loaded');
        image.onerror = updateStatus('error');
        image.src = src;
        return ()=>{
            isMounted = false;
        };
    }, [
        src
    ]);
    return loadingStatus;
}
const $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
const $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
const $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;





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

/***/ 22975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ArrowUpRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ArrowUpRight", [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
]);
 //# sourceMappingURL=arrow-up-right.js.map


/***/ }),

/***/ 20854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AudioWaveform)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const AudioWaveform = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("AudioWaveform", [
    [
        "path",
        {
            d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
            key: "57tc96"
        }
    ]
]);
 //# sourceMappingURL=audio-waveform.js.map


/***/ }),

/***/ 84970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BadgeCheck)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BadgeCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("BadgeCheck", [
    [
        "path",
        {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
 //# sourceMappingURL=badge-check.js.map


/***/ }),

/***/ 36818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Bell)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bell = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Bell", [
    [
        "path",
        {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
            key: "1qo2s2"
        }
    ],
    [
        "path",
        {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
            key: "qgo35s"
        }
    ]
]);
 //# sourceMappingURL=bell.js.map


/***/ }),

/***/ 33963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Blocks)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Blocks = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Blocks", [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "path",
        {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
            key: "1fpvtg"
        }
    ]
]);
 //# sourceMappingURL=blocks.js.map


/***/ }),

/***/ 21041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Calendar = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
 //# sourceMappingURL=calendar.js.map


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

/***/ 17469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Command)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Command = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Command", [
    [
        "path",
        {
            d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
            key: "11bfej"
        }
    ]
]);
 //# sourceMappingURL=command.js.map


/***/ }),

/***/ 33999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CreditCard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CreditCard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CreditCard", [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
]);
 //# sourceMappingURL=credit-card.js.map


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

/***/ 40803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Home = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Home", [
    [
        "path",
        {
            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "y5dka4"
        }
    ],
    [
        "polyline",
        {
            points: "9 22 9 12 15 12 15 22",
            key: "e2us08"
        }
    ]
]);
 //# sourceMappingURL=home.js.map


/***/ }),

/***/ 65909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Inbox)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Inbox = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Inbox", [
    [
        "polyline",
        {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }
    ],
    [
        "path",
        {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }
    ]
]);
 //# sourceMappingURL=inbox.js.map


/***/ }),

/***/ 77228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Link = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Link", [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
]);
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 88583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LogOut)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LogOut = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
 //# sourceMappingURL=log-out.js.map


/***/ }),

/***/ 45885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MessageCircleQuestion)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircleQuestion = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("MessageCircleQuestion", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=message-circle-question.js.map


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

/***/ 87946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Settings2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Settings2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Settings2", [
    [
        "path",
        {
            d: "M20 7h-9",
            key: "3s1dr2"
        }
    ],
    [
        "path",
        {
            d: "M14 17H5",
            key: "gfn3mx"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "7",
            r: "3",
            key: "dfmy0x"
        }
    ]
]);
 //# sourceMappingURL=settings-2.js.map


/***/ }),

/***/ 44806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Sparkles)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Sparkles = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Sparkles", [
    [
        "path",
        {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
            key: "17u4zn"
        }
    ],
    [
        "path",
        {
            d: "M5 3v4",
            key: "bklmnn"
        }
    ],
    [
        "path",
        {
            d: "M19 17v4",
            key: "iiml17"
        }
    ],
    [
        "path",
        {
            d: "M3 5h4",
            key: "nem4j1"
        }
    ],
    [
        "path",
        {
            d: "M17 19h4",
            key: "lbex7p"
        }
    ]
]);
 //# sourceMappingURL=sparkles.js.map


/***/ }),

/***/ 22919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StarOff)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const StarOff = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("StarOff", [
    [
        "path",
        {
            d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
            key: "16m0ql"
        }
    ],
    [
        "path",
        {
            d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",
            key: "1vt8nq"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ]
]);
 //# sourceMappingURL=star-off.js.map


/***/ }),

/***/ 61033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Trash2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Trash2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
 //# sourceMappingURL=trash-2.js.map


/***/ })

};
;