"use strict";
exports.id = 47358;
exports.ids = [47358,53278,73249,76010,20581];
exports.modules = {

/***/ 25359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppSidebar: () => (/* binding */ AppSidebar)
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
// EXTERNAL MODULE: ./registry/new-york/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(96775);
// EXTERNAL MODULE: ./registry/new-york/ui/sidebar.tsx
var sidebar = __webpack_require__(51459);
;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/nav-favorites.tsx
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

;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/nav-main.tsx
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

;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/nav-secondary.tsx



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
// EXTERNAL MODULE: ./registry/new-york/ui/collapsible.tsx
var collapsible = __webpack_require__(40780);
;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/nav-workspaces.tsx




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
;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/team-switcher.tsx
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

;// CONCATENATED MODULE: ./registry/new-york/blocks/sidebar-10/components/app-sidebar.tsx
/* __next_internal_client_entry_do_not_use__ AppSidebar auto */ 








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
function AppSidebar({ ...props }) {
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

/***/ 31332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavActions: () => (/* binding */ NavActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87946);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44426);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77228);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51269);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31456);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61033);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45865);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10098);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64880);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90789);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36818);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61286);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69493);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56691);
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48286);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73249);
/* harmony import */ var _registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51459);
/* __next_internal_client_entry_do_not_use__ NavActions auto */ 





const data = [
    [
        {
            label: "Customize Page",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
        },
        {
            label: "Turn into wiki",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
        }
    ],
    [
        {
            label: "Copy Link",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
        },
        {
            label: "Duplicate",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
        },
        {
            label: "Move to",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
        },
        {
            label: "Move to Trash",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
        }
    ],
    [
        {
            label: "Undo",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
        },
        {
            label: "View analytics",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
        },
        {
            label: "Version History",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z
        },
        {
            label: "Show delete pages",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
        },
        {
            label: "Notifications",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z
        }
    ],
    [
        {
            label: "Import",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z
        },
        {
            label: "Export",
            icon: _barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z
        }
    ]
];
function NavActions() {
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setIsOpen(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-2 text-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden font-medium text-muted-foreground md:inline-block",
                children: "Edit Oct 08"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "ghost",
                size: "icon",
                className: "h-7 w-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_3__.PopoverTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "ghost",
                            size: "icon",
                            className: "h-7 w-7 data-[state=open]:bg-accent",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowDown_ArrowUp_Bell_Copy_CornerUpLeft_CornerUpRight_FileText_GalleryVerticalEnd_LineChart_Link_MoreHorizontal_Settings2_Star_Trash_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_3__.PopoverContent, {
                        className: "w-56 overflow-hidden rounded-lg p-0",
                        align: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, {
                            collapsible: "none",
                            className: "bg-transparent",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarContent, {
                                children: data.map((group, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarGroup, {
                                        className: "border-b last:border-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarGroupContent, {
                                            className: "gap-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarMenu, {
                                                children: group.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarMenuItem, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarMenuButton, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {}),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: item.label
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    }, index))
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 23385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_blocks_sidebar_10_components_app_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25359);
/* harmony import */ var _registry_new_york_blocks_sidebar_10_components_nav_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31332);
/* harmony import */ var _registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53278);
/* harmony import */ var _registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53180);
/* harmony import */ var _registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51459);






function Page() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_blocks_sidebar_10_components_app_sidebar__WEBPACK_IMPORTED_MODULE_1__.AppSidebar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarInset, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "flex h-14 shrink-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-1 items-center gap-2 px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarTrigger, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_4__.Separator, {
                                        orientation: "vertical",
                                        className: "mr-2 h-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.Breadcrumb, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbList, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbPage, {
                                                    className: "line-clamp-1",
                                                    children: "Project Management & Task Tracking"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-auto px-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_blocks_sidebar_10_components_nav_actions__WEBPACK_IMPORTED_MODULE_2__.NavActions, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-4 px-4 py-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


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

/***/ 73249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ Popover),
/* harmony export */   PopoverAnchor: () => (/* binding */ PopoverAnchor),
/* harmony export */   PopoverContent: () => (/* binding */ PopoverContent),
/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78688);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent,PopoverAnchor auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const PopoverAnchor = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



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

/***/ 69493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ArrowDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ArrowDown", [
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ],
    [
        "path",
        {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }
    ]
]);
 //# sourceMappingURL=arrow-down.js.map


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

/***/ 61286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ArrowUp)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ArrowUp", [
    [
        "path",
        {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }
    ],
    [
        "path",
        {
            d: "M12 19V5",
            key: "x0mq9r"
        }
    ]
]);
 //# sourceMappingURL=arrow-up.js.map


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

/***/ 51269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Copy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Copy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
 //# sourceMappingURL=copy.js.map


/***/ }),

/***/ 45865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CornerUpLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CornerUpLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CornerUpLeft", [
    [
        "polyline",
        {
            points: "9 14 4 9 9 4",
            key: "881910"
        }
    ],
    [
        "path",
        {
            d: "M20 20v-7a4 4 0 0 0-4-4H4",
            key: "1nkjon"
        }
    ]
]);
 //# sourceMappingURL=corner-up-left.js.map


/***/ }),

/***/ 31456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CornerUpRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CornerUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CornerUpRight", [
    [
        "polyline",
        {
            points: "15 14 20 9 15 4",
            key: "1tbx3s"
        }
    ],
    [
        "path",
        {
            d: "M4 20v-7a4 4 0 0 1 4-4h12",
            key: "1lu4f8"
        }
    ]
]);
 //# sourceMappingURL=corner-up-right.js.map


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

/***/ 44426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileText)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const FileText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("FileText", [
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
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
 //# sourceMappingURL=file-text.js.map


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

/***/ 10098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LineChart = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("LineChart", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "m19 9-5 5-4-4-3 3",
            key: "2osh9i"
        }
    ]
]);
 //# sourceMappingURL=line-chart.js.map


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

/***/ 56691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Star)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Star = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Star", [
    [
        "polygon",
        {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6"
        }
    ]
]);
 //# sourceMappingURL=star.js.map


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


/***/ }),

/***/ 90789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Trash)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Trash = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Trash", [
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
    ]
]);
 //# sourceMappingURL=trash.js.map


/***/ })

};
;