"use strict";
exports.id = 44856;
exports.ids = [44856,16672,53278,21319,76010,20581];
exports.modules = {

/***/ 52020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   description: () => (/* binding */ description),
/* harmony export */   iframeHeight: () => (/* binding */ iframeHeight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7925);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2101);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15917);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25367);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44806);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84970);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33999);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36818);
/* harmony import */ var _barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88583);
/* harmony import */ var _registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16672);
/* harmony import */ var _registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53278);
/* harmony import */ var _registry_new_york_ui_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21319);
/* harmony import */ var _registry_new_york_ui_collapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40780);
/* harmony import */ var _registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96775);
/* harmony import */ var _registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53180);
/* harmony import */ var _registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51459);
/* __next_internal_client_entry_do_not_use__ iframeHeight,description,default auto */ 









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
const iframeHeight = "800px";
const description = "A sidebar with a calendar.";
function Page() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppSidebar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarInset, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarTrigger, {
                                className: "-ml-1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_7__.Separator, {
                                orientation: "vertical",
                                className: "mr-2 h-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.Breadcrumb, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbList, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbPage, {
                                            children: "October 2024"
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-1 flex-col gap-4 p-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid auto-rows-min gap-4 md:grid-cols-5",
                            children: Array.from({
                                length: 20
                            }).map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "aspect-square rounded-xl bg-muted/50"
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
}
function AppSidebar({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.Sidebar, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarHeader, {
                className: "h-16 border-b border-sidebar-border",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavUser, {
                    user: data.user
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DatePicker, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarSeparator, {
                        className: "mx-0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Calendars, {
                        calendars: data.calendars
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarFooter, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenu, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuButton, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "New Calendar"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarRail, {})
        ]
    });
}
function Calendars({ calendars }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: calendars.map((calendar, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarGroup, {
                        className: "py-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_collapsible__WEBPACK_IMPORTED_MODULE_5__.Collapsible, {
                            defaultOpen: index === 0,
                            className: "group/collapsible",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarGroupLabel, {
                                    asChild: true,
                                    className: "group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_collapsible__WEBPACK_IMPORTED_MODULE_5__.CollapsibleTrigger, {
                                        children: [
                                            calendar.name,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_collapsible__WEBPACK_IMPORTED_MODULE_5__.CollapsibleContent, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarGroupContent, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenu, {
                                            children: calendar.items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuItem, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuButton, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                "data-active": index < 2,
                                                                className: "group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarSeparator, {
                        className: "mx-0"
                    })
                ]
            }, calendar.name))
    });
}
function DatePicker() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarGroup, {
        className: "px-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarGroupContent, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_calendar__WEBPACK_IMPORTED_MODULE_4__.Calendar, {
                className: "[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
            })
        })
    });
}
function NavUser({ user }) {
    const { isMobile } = (0,_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.useSidebar)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenu, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuItem, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_8__.SidebarMenuButton, {
                            size: "lg",
                            className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                    className: "h-8 w-8 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {
                                            src: user.avatar,
                                            alt: user.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    className: "ml-auto size-4"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuContent, {
                        className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
                        side: isMobile ? "bottom" : "right",
                        align: "start",
                        sideOffset: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuLabel, {
                                className: "p-0 font-normal",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                            className: "h-8 w-8 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {
                                                    src: user.avatar,
                                                    alt: user.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuGroup, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuItem, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                        "Upgrade to Pro"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuGroup, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                                            "Account"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                            "Billing"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                            "Notifications"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__.DropdownMenuItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_BadgeCheck_Bell_Check_ChevronRight_ChevronsUpDown_CreditCard_LogOut_Plus_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
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

/***/ 16672:
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

/***/ 53278:
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

/***/ 21319:
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
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37709);
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
            nav_button: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md", props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"),
            day: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)((0,_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({
                variant: "ghost"
            }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
            day_range_start: "day-range-start",
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


/***/ })

};
;