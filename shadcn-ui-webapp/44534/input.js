"use strict";
exports.id = 44534;
exports.ids = [44534,17879,53278,97000,90028,57985];
exports.modules = {

/***/ 18218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SinkPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ./registry/new-york/ui/accordion.tsx
var accordion = __webpack_require__(8834);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/accordion-demo.tsx


function AccordionDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(accordion.Accordion, {
        type: "single",
        collapsible: true,
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(accordion.AccordionItem, {
                value: "item-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionTrigger, {
                        children: "Is it accessible?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionContent, {
                        children: "Yes. It adheres to the WAI-ARIA design pattern."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(accordion.AccordionItem, {
                value: "item-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionTrigger, {
                        children: "Is it styled?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionContent, {
                        children: "Yes. It comes with default styles that matches the other components' aesthetic."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(accordion.AccordionItem, {
                value: "item-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionTrigger, {
                        children: "Is it animated?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion.AccordionContent, {
                        children: "Yes. It's animated by default, but you can disable it if you prefer."
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/terminal.js
var terminal = __webpack_require__(18415);
// EXTERNAL MODULE: ./registry/new-york/ui/alert.tsx
var ui_alert = __webpack_require__(4807);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/alert-demo.tsx



function AlertDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_alert.Alert, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(terminal/* default */.Z, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(ui_alert.AlertTitle, {
                children: "Heads up!"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(ui_alert.AlertDescription, {
                children: "You can add components to your app using the cli."
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/alert-dialog.tsx
var alert_dialog = __webpack_require__(97660);
// EXTERNAL MODULE: ./registry/new-york/ui/button.tsx
var ui_button = __webpack_require__(37709);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/alert-dialog-demo.tsx



function AlertDialogDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(alert_dialog.AlertDialog, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(alert_dialog.AlertDialogTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "outline",
                    children: "Show Dialog"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(alert_dialog.AlertDialogContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(alert_dialog.AlertDialogHeader, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(alert_dialog.AlertDialogTitle, {
                                children: "Are you absolutely sure?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(alert_dialog.AlertDialogDescription, {
                                children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(alert_dialog.AlertDialogFooter, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(alert_dialog.AlertDialogCancel, {
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(alert_dialog.AlertDialogAction, {
                                children: "Continue"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/app-sidebar.tsx
var app_sidebar = __webpack_require__(46920);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/image.js
var api_image = __webpack_require__(62811);
// EXTERNAL MODULE: ./registry/new-york/ui/aspect-ratio.tsx
var aspect_ratio = __webpack_require__(25900);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/aspect-ratio-demo.tsx



function AspectRatioDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(aspect_ratio.AspectRatio, {
        ratio: 16 / 9,
        className: "bg-muted",
        children: /*#__PURE__*/ react_jsx_runtime.jsx(api_image["default"], {
            src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
            alt: "Photo by Drew Beamer",
            fill: true,
            className: "h-full w-full rounded-md object-cover"
        })
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/avatar.tsx
var avatar = __webpack_require__(16672);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/avatar-demo.tsx


function AvatarDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(avatar.Avatar, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(avatar.AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(avatar.AvatarFallback, {
                children: "CN"
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/badge.tsx
var badge = __webpack_require__(17879);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/badge-demo.tsx


function BadgeDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        children: "Badge"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/badge-destructive.tsx


function BadgeDestructive() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "destructive",
        children: "Destructive"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/badge-outline.tsx


function BadgeOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "outline",
        children: "Outline"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/badge-secondary.tsx


function BadgeSecondary() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "secondary",
        children: "Secondary"
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/breadcrumb.tsx
var breadcrumb = __webpack_require__(53278);
// EXTERNAL MODULE: ./registry/new-york/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(96775);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/breadcrumb-demo.tsx



function BreadcrumbDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.Breadcrumb, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(breadcrumb.BreadcrumbList, {
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbLink, {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {}),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenu, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuTrigger, {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbEllipsis, {
                                        className: "h-4 w-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuContent, {
                                align: "start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                        children: "Documentation"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                        children: "Themes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                        children: "GitHub"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {}),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbLink, {
                        href: "/docs/components",
                        children: "Components"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbSeparator, {}),
                /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(breadcrumb.BreadcrumbPage, {
                        children: "Breadcrumb"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-demo.tsx


function ButtonDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        children: "Button"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-destructive.tsx


function ButtonDestructive() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "destructive",
        children: "Destructive"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-ghost.tsx


function ButtonGhost() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "ghost",
        children: "Ghost"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-link.tsx


function ButtonLink() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "link",
        children: "Link"
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(43669);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-loading.tsx



function ButtonLoading() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button.Button, {
        disabled: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(loader_circle/* default */.Z, {
                className: "animate-spin"
            }),
            "Please wait"
        ]
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-outline.tsx


function ButtonOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "outline",
        children: "Outline"
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-secondary.tsx


function ButtonSecondary() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "secondary",
        children: "Secondary"
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/mail-open.js
var mail_open = __webpack_require__(31516);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-with-icon.tsx



function ButtonWithIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button.Button, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(mail_open/* default */.Z, {}),
            " Login with Email"
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/calendar-demo.tsx
var calendar_demo = __webpack_require__(46161);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bell-ring.js
var bell_ring = __webpack_require__(7529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(15917);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(26910);
// EXTERNAL MODULE: ./registry/new-york/ui/card.tsx
var card = __webpack_require__(97000);
// EXTERNAL MODULE: ./registry/new-york/ui/switch.tsx
var ui_switch = __webpack_require__(40560);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/card-demo.tsx






const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago"
    },
    {
        title: "You have a new message!",
        description: "1 hour ago"
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago"
    }
];
function CardDemo({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.Card, {
        className: (0,utils.cn)("w-[380px]", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(card.CardTitle, {
                        children: "Notifications"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(card.CardDescription, {
                        children: "You have 3 unread messages."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardContent, {
                className: "grid gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: " flex items-center space-x-4 rounded-md border p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(bell_ring/* default */.Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex-1 space-y-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                        className: "text-sm font-medium leading-none",
                                        children: "Push Notifications"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Send notifications to device."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch.Switch, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        children: notifications.map((notification, index)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        className: "flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: notification.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: notification.description
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(card.CardFooter, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button.Button, {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(check/* default */.Z, {}),
                        " Mark all as read"
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ./registry/new-york/ui/carousel.tsx
var carousel = __webpack_require__(40053);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/carousel-demo.tsx




function CarouselDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(carousel.Carousel, {
        className: "w-full max-w-xs",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(carousel.CarouselContent, {
                children: Array.from({
                    length: 5
                }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime.jsx(carousel.CarouselItem, {
                        children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "p-1",
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(card.Card, {
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(card.CardContent, {
                                    className: "flex aspect-square items-center justify-center p-6",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        className: "text-4xl font-semibold",
                                        children: index + 1
                                    })
                                })
                            })
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(carousel.CarouselPrevious, {}),
            /*#__PURE__*/ react_jsx_runtime.jsx(carousel.CarouselNext, {})
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/checkbox-demo.tsx
var checkbox_demo = __webpack_require__(91616);
// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/collapsible-demo.tsx
var collapsible_demo = __webpack_require__(40305);
// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/combobox-demo.tsx
var combobox_demo = __webpack_require__(79996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(21041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/smile.js
var smile = __webpack_require__(89861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/calculator.js
var calculator = __webpack_require__(66862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(81862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/credit-card.js
var credit_card = __webpack_require__(33999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(22099);
// EXTERNAL MODULE: ./registry/new-york/ui/command.tsx
var command = __webpack_require__(60656);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/command-demo.tsx



function CommandDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.Command, {
        className: "rounded-lg border shadow-md md:min-w-[450px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandInput, {
                placeholder: "Type a command or search..."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandList, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandEmpty, {
                        children: "No results found."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandGroup, {
                        heading: "Suggestions",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(calendar/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Calendar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(smile/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Search Emoji"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                disabled: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(calculator/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Calculator"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandGroup, {
                        heading: "Settings",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(user/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandShortcut, {
                                        children: "⌘P"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(credit_card/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Billing"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandShortcut, {
                                        children: "⌘B"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command.CommandItem, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(settings/* default */.Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                        children: "Settings"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(command.CommandShortcut, {
                                        children: "⌘S"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/lib/utils.ts
var lib_utils = __webpack_require__(27162);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/component-wrapper.tsx


function ComponentWrapper({ className, name, children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: (0,lib_utils.cn)("flex w-full flex-col rounded-lg border", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "border-b px-4 py-3",
                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "text-sm font-medium",
                    children: name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "flex flex-1 flex-col items-center justify-center gap-2 p-4 [&>div]:max-w-full",
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/context-menu.tsx
var context_menu = __webpack_require__(97386);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/context-menu-demo.tsx


function ContextMenuDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenu, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuTrigger, {
                className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",
                children: "Right click here"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuContent, {
                className: "w-64",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuItem, {
                        inset: true,
                        children: [
                            "Back",
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuShortcut, {
                                children: "⌘["
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuItem, {
                        inset: true,
                        disabled: true,
                        children: [
                            "Forward",
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuShortcut, {
                                children: "⌘]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuItem, {
                        inset: true,
                        children: [
                            "Reload",
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuShortcut, {
                                children: "⌘R"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuSub, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuSubTrigger, {
                                inset: true,
                                children: "More Tools"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuSubContent, {
                                className: "w-48",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuItem, {
                                        children: [
                                            "Save Page As...",
                                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuShortcut, {
                                                children: "⇧⌘S"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuItem, {
                                        children: "Create Shortcut..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuItem, {
                                        children: "Name Window..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuSeparator, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuItem, {
                                        children: "Developer Tools"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuCheckboxItem, {
                        checked: true,
                        children: [
                            "Show Bookmarks Bar",
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuShortcut, {
                                children: "⌘⇧B"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuCheckboxItem, {
                        children: "Show Full URLs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(context_menu.ContextMenuRadioGroup, {
                        value: "pedro",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuLabel, {
                                inset: true,
                                children: "People"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuRadioItem, {
                                value: "pedro",
                                children: "Pedro Duarte"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(context_menu.ContextMenuRadioItem, {
                                value: "colm",
                                children: "Colm Tuite"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/date-picker-demo.tsx
var date_picker_demo = __webpack_require__(60667);
// EXTERNAL MODULE: ./registry/new-york/ui/dialog.tsx
var dialog = __webpack_require__(91702);
// EXTERNAL MODULE: ./registry/new-york/ui/input.tsx
var input = __webpack_require__(67299);
// EXTERNAL MODULE: ./registry/new-york/ui/label.tsx
var label = __webpack_require__(41086);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/dialog-demo.tsx





function DialogDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog.Dialog, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(dialog.DialogTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "outline",
                    children: "Edit Profile"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog.DialogContent, {
                className: "sm:max-w-[425px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog.DialogHeader, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(dialog.DialogTitle, {
                                children: "Edit profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(dialog.DialogDescription, {
                                children: "Make changes to your profile here. Click save when you're done."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                        htmlFor: "name",
                                        className: "text-right",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                        id: "name",
                                        value: "Pedro Duarte",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                        htmlFor: "username",
                                        className: "text-right",
                                        children: "Username"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                        id: "username",
                                        value: "@peduarte",
                                        className: "col-span-3"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dialog.DialogFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                            type: "submit",
                            children: "Save changes"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/drawer-demo.tsx
var drawer_demo = __webpack_require__(16484);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/dropdown-menu-demo.tsx



function DropdownMenuDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenu, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "outline",
                    children: "Open"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuContent, {
                className: "w-56",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuLabel, {
                        children: "My Account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuGroup, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                children: [
                                    "Profile",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                        children: "⇧⌘P"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                children: [
                                    "Billing",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                        children: "⌘B"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                children: [
                                    "Settings",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                        children: "⌘S"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                children: [
                                    "Keyboard shortcuts",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                        children: "⌘K"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                children: "Team"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuSub, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSubTrigger, {
                                        children: "Invite users"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuPortal, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuSubContent, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                                    children: "Message"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                                                    children: "More..."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                                children: [
                                    "New Team",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                        children: "⌘+T"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                        children: "Support"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuItem, {
                        disabled: true,
                        children: "API"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuSeparator, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu.DropdownMenuItem, {
                        children: [
                            "Log out",
                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu.DropdownMenuShortcut, {
                                children: "⇧⌘Q"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/hover-card.tsx
var hover_card = __webpack_require__(50378);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/hover-card-demo.tsx





function HoverCardDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(hover_card.HoverCard, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(hover_card.HoverCardTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "link",
                    children: "@nextjs"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(hover_card.HoverCardContent, {
                className: "w-80",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex justify-between space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(avatar.Avatar, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(avatar.AvatarImage, {
                                    src: "https://github.com/vercel.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(avatar.AvatarFallback, {
                                    children: "VC"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                                    className: "text-sm font-semibold",
                                    children: "@nextjs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                    className: "text-sm",
                                    children: "The React Framework – created and maintained by @vercel."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center pt-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(calendar/* default */.Z, {
                                            className: "mr-2 h-4 w-4 opacity-70"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Joined December 2021"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/input-demo.tsx


function InputDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
        type: "email",
        placeholder: "Email"
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/input-otp.tsx
var input_otp = __webpack_require__(81900);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/input-otp-demo.tsx


function InputOTPDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(input_otp.InputOTP, {
        maxLength: 6,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(input_otp.InputOTPGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 0
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 2
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSeparator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(input_otp.InputOTPGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 3
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 4
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(input_otp.InputOTPSlot, {
                        index: 5
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(17626);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/label-demo.tsx



function LabelDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(ui_checkbox.Checkbox, {
                    id: "terms"
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                    htmlFor: "terms",
                    children: "Accept terms and conditions"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/menubar.tsx
var menubar = __webpack_require__(70700);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/menubar-demo.tsx


function MenubarDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.Menubar, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarTrigger, {
                        children: "File"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarContent, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                children: [
                                    "New Tab ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⌘T"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                children: [
                                    "New Window ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⌘N"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                disabled: true,
                                children: "New Incognito Window"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarSub, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSubTrigger, {
                                        children: "Share"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarSubContent, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Email link"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Messages"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Notes"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                children: [
                                    "Print... ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⌘P"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarTrigger, {
                        children: "Edit"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarContent, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                children: [
                                    "Undo ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⌘Z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                children: [
                                    "Redo ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⇧⌘Z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarSub, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSubTrigger, {
                                        children: "Find"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarSubContent, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Search the web"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Find..."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Find Next"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                                children: "Find Previous"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                children: "Cut"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                children: "Copy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                children: "Paste"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarTrigger, {
                        children: "View"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarCheckboxItem, {
                                children: "Always Show Bookmarks Bar"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarCheckboxItem, {
                                checked: true,
                                children: "Always Show Full URLs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                inset: true,
                                children: [
                                    "Reload ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⌘R"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarItem, {
                                disabled: true,
                                inset: true,
                                children: [
                                    "Force Reload ",
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarShortcut, {
                                        children: "⇧⌘R"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                inset: true,
                                children: "Toggle Fullscreen"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                inset: true,
                                children: "Hide Sidebar"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarTrigger, {
                        children: "Profiles"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarContent, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(menubar.MenubarRadioGroup, {
                                value: "benoit",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarRadioItem, {
                                        value: "andy",
                                        children: "Andy"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarRadioItem, {
                                        value: "benoit",
                                        children: "Benoit"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarRadioItem, {
                                        value: "Luis",
                                        children: "Luis"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                inset: true,
                                children: "Edit..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(menubar.MenubarItem, {
                                inset: true,
                                children: "Add Profile..."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/navigation-menu-demo.tsx
var navigation_menu_demo = __webpack_require__(49989);
// EXTERNAL MODULE: ./registry/new-york/ui/pagination.tsx
var pagination = __webpack_require__(30125);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/pagination-demo.tsx


function PaginationDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(pagination.Pagination, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(pagination.PaginationContent, {
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationPrevious, {
                        href: "#"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationLink, {
                        href: "#",
                        children: "1"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationLink, {
                        href: "#",
                        isActive: true,
                        children: "2"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationLink, {
                        href: "#",
                        children: "3"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationEllipsis, {})
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationItem, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(pagination.PaginationNext, {
                        href: "#"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/popover.tsx
var popover = __webpack_require__(73249);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/popover-demo.tsx





function PopoverDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(popover.Popover, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(popover.PopoverTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "outline",
                    children: "Open popover"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(popover.PopoverContent, {
                className: "w-80",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "grid gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                                    className: "font-medium leading-none",
                                    children: "Dimensions"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Set the dimensions for the layer."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "width",
                                            children: "Width"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "width",
                                            defaultValue: "100%",
                                            className: "col-span-2 h-8"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "maxWidth",
                                            children: "Max. width"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "maxWidth",
                                            defaultValue: "300px",
                                            className: "col-span-2 h-8"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "height",
                                            children: "Height"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "height",
                                            defaultValue: "25px",
                                            className: "col-span-2 h-8"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "maxHeight",
                                            children: "Max. height"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "maxHeight",
                                            defaultValue: "none",
                                            className: "col-span-2 h-8"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/progress-demo.tsx
var progress_demo = __webpack_require__(32471);
// EXTERNAL MODULE: ./registry/new-york/ui/radio-group.tsx
var radio_group = __webpack_require__(30660);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/radio-group-demo.tsx



function RadioGroupDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(radio_group.RadioGroup, {
        defaultValue: "comfortable",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(radio_group.RadioGroupItem, {
                        value: "default",
                        id: "r1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                        htmlFor: "r1",
                        children: "Default"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(radio_group.RadioGroupItem, {
                        value: "comfortable",
                        id: "r2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                        htmlFor: "r2",
                        children: "Comfortable"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(radio_group.RadioGroupItem, {
                        value: "compact",
                        id: "r3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                        htmlFor: "r3",
                        children: "Compact"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/resizable.tsx
var resizable = __webpack_require__(26293);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/resizable-handle.tsx


function ResizableHandleDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(resizable.ResizablePanelGroup, {
        direction: "horizontal",
        className: "min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(resizable.ResizablePanel, {
                defaultSize: 25,
                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "flex h-full items-center justify-center p-6",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                        className: "font-semibold",
                        children: "Sidebar"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(resizable.ResizableHandle, {
                withHandle: true
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(resizable.ResizablePanel, {
                defaultSize: 75,
                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "flex h-full items-center justify-center p-6",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                        className: "font-semibold",
                        children: "Content"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/scroll-area.tsx
var scroll_area = __webpack_require__(23254);
// EXTERNAL MODULE: ./registry/new-york/ui/separator.tsx
var separator = __webpack_require__(53180);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/scroll-area-demo.tsx




const tags = Array.from({
    length: 50
}).map((_, i, a)=>`v1.2.0-beta.${a.length - i}`);
function ScrollAreaDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(scroll_area.ScrollArea, {
        className: "h-72 w-48 rounded-md border",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                    className: "mb-4 text-sm font-medium leading-none",
                    children: "Tags"
                }),
                tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "text-sm",
                                children: tag
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                                className: "my-2"
                            })
                        ]
                    }, tag))
            ]
        })
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/select.tsx
var ui_select = __webpack_require__(80941);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/select-demo.tsx



function SelectDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_select.Select, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectTrigger, {
                className: "w-[180px]",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectValue, {
                    placeholder: "Select a fruit"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_select.SelectGroup, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectLabel, {
                            children: "Fruits"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectItem, {
                            value: "apple",
                            children: "Apple"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectItem, {
                            value: "banana",
                            children: "Banana"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectItem, {
                            value: "blueberry",
                            children: "Blueberry"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectItem, {
                            value: "grapes",
                            children: "Grapes"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select.SelectItem, {
                            value: "pineapple",
                            children: "Pineapple"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/separator-demo.tsx


function SeparatorDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("h4", {
                        className: "text-sm font-medium leading-none",
                        children: "Radix Primitives"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "An open-source UI component library."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                className: "my-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex h-5 items-center space-x-4 text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        children: "Blog"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                        orientation: "vertical"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        children: "Docs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(separator.Separator, {
                        orientation: "vertical"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        children: "Source"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/sheet.tsx
var sheet = __webpack_require__(29270);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/sheet-demo.tsx





function SheetDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sheet.Sheet, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(sheet.SheetTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                    variant: "outline",
                    children: "Open"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sheet.SheetContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sheet.SheetHeader, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(sheet.SheetTitle, {
                                children: "Edit profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(sheet.SheetDescription, {
                                children: "Make changes to your profile here. Click save when you're done."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                        htmlFor: "name",
                                        className: "text-right",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                        id: "name",
                                        value: "Pedro Duarte",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                        htmlFor: "username",
                                        className: "text-right",
                                        children: "Username"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                        id: "username",
                                        value: "@peduarte",
                                        className: "col-span-3"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(sheet.SheetFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime.jsx(sheet.SheetClose, {
                            asChild: true,
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                                type: "submit",
                                children: "Save changes"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/skeleton.tsx
var skeleton = __webpack_require__(92675);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/skeleton-demo.tsx


function SkeletonDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(skeleton.Skeleton, {
                className: "h-12 w-12 rounded-full"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(skeleton.Skeleton, {
                        className: "h-4 w-[250px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(skeleton.Skeleton, {
                        className: "h-4 w-[200px]"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/slider.tsx
var slider = __webpack_require__(94032);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/slider-demo.tsx



function SliderDemo({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(slider.Slider, {
        defaultValue: [
            50
        ],
        max: 100,
        step: 1,
        className: (0,utils.cn)("w-[60%]", className),
        ...props
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/sonner-demo.tsx
var sonner_demo = __webpack_require__(80651);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/switch-demo.tsx



function SwitchDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch.Switch, {
                id: "airplane-mode"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                htmlFor: "airplane-mode",
                children: "Airplane Mode"
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/table.tsx
var table = __webpack_require__(90028);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/table-demo.tsx


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal"
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer"
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card"
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal"
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer"
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card"
    }
];
function TableDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table.Table, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCaption, {
                children: "A list of your recent invoices."
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableHeader, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table.TableRow, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableHead, {
                            className: "w-[100px]",
                            children: "Invoice"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableHead, {
                            children: "Status"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableHead, {
                            children: "Method"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableHead, {
                            className: "text-right",
                            children: "Amount"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableBody, {
                children: invoices.map((invoice)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table.TableRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                                className: "font-medium",
                                children: invoice.invoice
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                                children: invoice.paymentStatus
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                                children: invoice.paymentMethod
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                                className: "text-right",
                                children: invoice.totalAmount
                            })
                        ]
                    }, invoice.invoice))
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(table.TableFooter, {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table.TableRow, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                            colSpan: 3,
                            children: "Total"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(table.TableCell, {
                            className: "text-right",
                            children: "$2,500.00"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/tabs.tsx
var tabs = __webpack_require__(98264);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/tabs-demo.tsx






function TabsDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs.Tabs, {
        defaultValue: "account",
        className: "w-[400px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs.TabsList, {
                className: "grid w-full grid-cols-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(tabs.TabsTrigger, {
                        value: "account",
                        children: "Account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(tabs.TabsTrigger, {
                        value: "password",
                        children: "Password"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(tabs.TabsContent, {
                value: "account",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.Card, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardHeader, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(card.CardTitle, {
                                    children: "Account"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card.CardDescription, {
                                    children: "Make changes to your account here. Click save when you're done."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardContent, {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "name",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "name",
                                            defaultValue: "Pedro Duarte"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "username",
                                            children: "Username"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "username",
                                            defaultValue: "@peduarte"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(card.CardFooter, {
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                                children: "Save changes"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(tabs.TabsContent, {
                value: "password",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.Card, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardHeader, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(card.CardTitle, {
                                    children: "Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card.CardDescription, {
                                    children: "Change your password here. After saving, you'll be logged out."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card.CardContent, {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "current",
                                            children: "Current password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "current",
                                            type: "password"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label.Label, {
                                            htmlFor: "new",
                                            children: "New password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
                                            id: "new",
                                            type: "password"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(card.CardFooter, {
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                                children: "Save password"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/textarea.tsx
var ui_textarea = __webpack_require__(57985);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/textarea-demo.tsx


function TextareaDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_textarea.Textarea, {
        placeholder: "Type your message here."
    });
}

// EXTERNAL MODULE: ./registry/new-york/internal/sink/components/toast-demo.tsx
var toast_demo = __webpack_require__(77931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bold.js
var bold = __webpack_require__(77174);
// EXTERNAL MODULE: ./registry/new-york/ui/toggle.tsx
var toggle = __webpack_require__(25609);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toggle-demo.tsx



function ToggleDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(toggle.Toggle, {
        "aria-label": "Toggle italic",
        children: /*#__PURE__*/ react_jsx_runtime.jsx(bold/* default */.Z, {
            className: "h-4 w-4"
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/underline.js
var underline = __webpack_require__(91512);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toggle-disabled.tsx



function ToggleDisabled() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(toggle.Toggle, {
        "aria-label": "Toggle italic",
        disabled: true,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(underline/* default */.Z, {
            className: "h-4 w-4"
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/italic.js
var italic = __webpack_require__(10355);
// EXTERNAL MODULE: ./registry/new-york/ui/toggle-group.tsx
var toggle_group = __webpack_require__(49382);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toggle-group-demo.tsx



function ToggleGroupDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(toggle_group.ToggleGroup, {
        type: "multiple",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(toggle_group.ToggleGroupItem, {
                value: "bold",
                "aria-label": "Toggle bold",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(bold/* default */.Z, {
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(toggle_group.ToggleGroupItem, {
                value: "italic",
                "aria-label": "Toggle italic",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(italic/* default */.Z, {
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(toggle_group.ToggleGroupItem, {
                value: "strikethrough",
                "aria-label": "Toggle strikethrough",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(underline/* default */.Z, {
                    className: "h-4 w-4"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toggle-outline.tsx



function ToggleOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(toggle.Toggle, {
        variant: "outline",
        "aria-label": "Toggle italic",
        children: /*#__PURE__*/ react_jsx_runtime.jsx(italic/* default */.Z, {})
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toggle-with-text.tsx



function ToggleWithText() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(toggle.Toggle, {
        "aria-label": "Toggle italic",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(italic/* default */.Z, {}),
            "Italic"
        ]
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/tooltip.tsx
var tooltip = __webpack_require__(46266);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/tooltip-demo.tsx



function TooltipDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(tooltip.TooltipProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip.Tooltip, {
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(tooltip.TooltipTrigger, {
                    asChild: true,
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
                        variant: "outline",
                        children: "Hover"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(tooltip.TooltipContent, {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                        children: "Add to library"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./registry/new-york/ui/sidebar.tsx
var sidebar = __webpack_require__(51459);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/page.tsx

































































function SinkPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(app_sidebar.AppSidebar, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarInset, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("header", {
                        className: "flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2 px-4",
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
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "flex flex-1 flex-col gap-4 p-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Accordion",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(AccordionDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Alert",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(AlertDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "AlertDialog",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(AlertDialogDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "AspectRatio",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(AspectRatioDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Avatar",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(AvatarDemo, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ComponentWrapper, {
                                    name: "Badge",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(BadgeDemo, {}),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(BadgeDestructive, {}),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(BadgeOutline, {}),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(BadgeSecondary, {})
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Breadcrumb",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(BreadcrumbDemo, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ComponentWrapper, {
                                    name: "Button",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonDemo, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonDestructive, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonGhost, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonLink, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonLoading, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonOutline, {}),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ButtonSecondary, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(ButtonWithIcon, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Calendar",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(calendar_demo.CalendarDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Card",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(CardDemo, {
                                        className: "w-full"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Carousel",
                                    className: "[&_.max-w-xs]:max-w-[70%]",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(CarouselDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Checkbox",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(checkbox_demo.CheckboxDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Collapsible",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(collapsible_demo.CollapsibleDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Combobox",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(combobox_demo.ComboboxDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Command",
                                    className: "[&_[cmdk-root]]:md:min-w-max",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(CommandDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "ContextMenu",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ContextMenuDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "DatePicker",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(date_picker_demo.DatePickerDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Dialog",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(DialogDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Drawer",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(drawer_demo.DrawerDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "DropdownMenu",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(DropdownMenuDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "HoverCard",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(HoverCardDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Input",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(InputDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "InputOTP",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(InputOTPDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Label",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(LabelDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Menubar",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(MenubarDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "NavigationMenu",
                                    className: "col-span-2",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(navigation_menu_demo.NavigationMenuDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Pagination",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(PaginationDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Popover",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(PopoverDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Progress",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(progress_demo.ProgressDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "RadioGroup",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(RadioGroupDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Resizable",
                                    className: "col-span-2",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ResizableHandleDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "ScrollArea",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ScrollAreaDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Select",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SelectDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Separator",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SeparatorDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Sheet",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SheetDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Skeleton",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SkeletonDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Slider",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SliderDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Sonner",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sonner_demo.SonnerDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Switch",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(SwitchDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Table",
                                    className: "col-span-2",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(TableDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Tabs",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(TabsDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Textarea",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(TextareaDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Toast",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(toast_demo.ToastDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Toggle",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ToggleDemo, {}),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ToggleDisabled, {}),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ToggleOutline, {}),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ToggleWithText, {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "ToggleGroup",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ToggleGroupDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Tooltip",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(TooltipDemo, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 17879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37207);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);




const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(badgeVariants({
            variant
        }), className),
        ...props
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

/***/ 30125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pagination: () => (/* binding */ Pagination),
/* harmony export */   PaginationContent: () => (/* binding */ PaginationContent),
/* harmony export */   PaginationEllipsis: () => (/* binding */ PaginationEllipsis),
/* harmony export */   PaginationItem: () => (/* binding */ PaginationItem),
/* harmony export */   PaginationLink: () => (/* binding */ PaginationLink),
/* harmony export */   PaginationNext: () => (/* binding */ PaginationNext),
/* harmony export */   PaginationPrevious: () => (/* binding */ PaginationPrevious)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55637);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2101);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48286);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);





const Pagination = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        role: "navigation",
        "aria-label": "pagination",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mx-auto flex w-full justify-center", className),
        ...props
    });
Pagination.displayName = "Pagination";
const PaginationContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-row items-center gap-1", className),
        ...props
    }));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("", className),
        ...props
    }));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, size = "icon", ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        "aria-current": isActive ? "page" : undefined,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.buttonVariants)({
            variant: isActive ? "outline" : "ghost",
            size
        }), className),
        ...props
    });
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PaginationLink, {
        "aria-label": "Go to previous page",
        size: "default",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("gap-1 pl-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Previous"
            })
        ]
    });
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PaginationLink, {
        "aria-label": "Go to next page",
        size: "default",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("gap-1 pr-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Next"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "h-4 w-4"
            })
        ]
    });
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        "aria-hidden": true,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "More pages"
            })
        ]
    });
PaginationEllipsis.displayName = "PaginationEllipsis";



/***/ }),

/***/ 90028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableBody: () => (/* binding */ TableBody),
/* harmony export */   TableCaption: () => (/* binding */ TableCaption),
/* harmony export */   TableCell: () => (/* binding */ TableCell),
/* harmony export */   TableFooter: () => (/* binding */ TableFooter),
/* harmony export */   TableHead: () => (/* binding */ TableHead),
/* harmony export */   TableHeader: () => (/* binding */ TableHeader),
/* harmony export */   TableRow: () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";



/***/ }),

/***/ 57985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textarea: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";



/***/ }),

/***/ 39956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fC: () => (/* binding */ $e698a72e93240346$export$be92b6f5f03c0fe9),
/* harmony export */   z$: () => (/* binding */ $e698a72e93240346$export$adb584737d712b70)
/* harmony export */ });
/* unused harmony exports createCheckboxScope, Checkbox, CheckboxIndicator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11472);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96111);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64772);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54227);





















/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/ const $e698a72e93240346$var$CHECKBOX_NAME = 'Checkbox';
const [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($e698a72e93240346$var$CHECKBOX_NAME);
const [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
const $e698a72e93240346$export$48513f6b9f8ce62d = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...checkboxProps } = props;
    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    const [checked = false, setChecked] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__/* .useControllableState */ .T)({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    const initialCheckedStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(checked);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const form = button === null || button === void 0 ? void 0 : button.form;
        if (form) {
            const reset = ()=>setChecked(initialCheckedStateRef.current)
            ;
            form.addEventListener('reset', reset);
            return ()=>form.removeEventListener('reset', reset)
            ;
        }
    }, [
        button,
        setChecked
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$CheckboxProvider, {
        scope: __scopeCheckbox,
        state: checked,
        disabled: disabled
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "button",
        role: "checkbox",
        "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? 'mixed' : checked,
        "aria-required": required,
        "data-state": $e698a72e93240346$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, checkboxProps, {
        ref: composedRefs,
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            // According to WAI ARIA, Checkboxes don't activate on enter keypress
            if (event.key === 'Enter') event.preventDefault();
        }),
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onClick, (event)=>{
            setChecked((prevChecked)=>$e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
            );
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if checkbox is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect checkbox updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$BubbleInput, {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name: name,
        value: value,
        checked: checked,
        required: required,
        disabled: disabled // We transform because the input is absolutely positioned but we have
        ,
        style: {
            transform: 'translateX(-100%)'
        }
    }));
});
/*#__PURE__*/ Object.assign($e698a72e93240346$export$48513f6b9f8ce62d, {
    displayName: $e698a72e93240346$var$CHECKBOX_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/ const $e698a72e93240346$var$INDICATOR_NAME = 'CheckboxIndicator';
const $e698a72e93240346$export$59aad738f51d1c05 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , forceMount: forceMount , ...indicatorProps } = props;
    const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__/* .Presence */ .z, {
        present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        "data-state": $e698a72e93240346$var$getState(context.state),
        "data-disabled": context.disabled ? '' : undefined
    }, indicatorProps, {
        ref: forwardedRef,
        style: {
            pointerEvents: 'none',
            ...props.style
        }
    })));
});
/*#__PURE__*/ Object.assign($e698a72e93240346$export$59aad738f51d1c05, {
    displayName: $e698a72e93240346$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $e698a72e93240346$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__/* .usePrevious */ .D)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__/* .useSize */ .t)(control); // Bubble checked change to parents (e.g form change event)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
            setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
    }, inputProps, {
        tabIndex: -1,
        ref: ref,
        style: {
            ...props.style,
            ...controlSize,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0
        }
    }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $e698a72e93240346$var$getState(checked) {
    return $e698a72e93240346$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
const $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
const $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;





//# sourceMappingURL=index.mjs.map


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

/***/ 7529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BellRing)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BellRing = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("BellRing", [
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
    ],
    [
        "path",
        {
            d: "M4 2C2.8 3.7 2 5.7 2 8",
            key: "tap9e0"
        }
    ],
    [
        "path",
        {
            d: "M22 8c0-2.3-.8-4.3-2-6",
            key: "5bb3ad"
        }
    ]
]);
 //# sourceMappingURL=bell-ring.js.map


/***/ }),

/***/ 77174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Bold)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bold = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Bold", [
    [
        "path",
        {
            d: "M14 12a4 4 0 0 0 0-8H6v8",
            key: "v2sylx"
        }
    ],
    [
        "path",
        {
            d: "M15 20a4 4 0 0 0 0-8H6v8Z",
            key: "1ef5ya"
        }
    ]
]);
 //# sourceMappingURL=bold.js.map


/***/ }),

/***/ 66862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Calculator)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Calculator = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Calculator", [
    [
        "rect",
        {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            key: "1nb95v"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6",
            key: "x4nwl0"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18",
            key: "wjye3r"
        }
    ],
    [
        "path",
        {
            d: "M16 10h.01",
            key: "1m94wz"
        }
    ],
    [
        "path",
        {
            d: "M12 10h.01",
            key: "1nrarc"
        }
    ],
    [
        "path",
        {
            d: "M8 10h.01",
            key: "19clt8"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ],
    [
        "path",
        {
            d: "M8 14h.01",
            key: "6423bh"
        }
    ],
    [
        "path",
        {
            d: "M12 18h.01",
            key: "mhygvu"
        }
    ],
    [
        "path",
        {
            d: "M8 18h.01",
            key: "lrp35t"
        }
    ]
]);
 //# sourceMappingURL=calculator.js.map


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

/***/ 10355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Italic)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Italic = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Italic", [
    [
        "line",
        {
            x1: "19",
            x2: "10",
            y1: "4",
            y2: "4",
            key: "15jd3p"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "5",
            y1: "20",
            y2: "20",
            key: "bu0au3"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "9",
            y1: "4",
            y2: "20",
            key: "uljnxc"
        }
    ]
]);
 //# sourceMappingURL=italic.js.map


/***/ }),

/***/ 31516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MailOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MailOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("MailOpen", [
    [
        "path",
        {
            d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
            key: "1jhwl8"
        }
    ],
    [
        "path",
        {
            d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
            key: "1qfld7"
        }
    ]
]);
 //# sourceMappingURL=mail-open.js.map


/***/ }),

/***/ 22099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
 //# sourceMappingURL=settings.js.map


/***/ }),

/***/ 89861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Smile)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Smile = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Smile", [
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
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9",
            key: "yxxnd0"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9",
            key: "1p4y9e"
        }
    ]
]);
 //# sourceMappingURL=smile.js.map


/***/ }),

/***/ 18415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Terminal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Terminal = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Terminal", [
    [
        "polyline",
        {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }
    ]
]);
 //# sourceMappingURL=terminal.js.map


/***/ }),

/***/ 91512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Underline)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Underline = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Underline", [
    [
        "path",
        {
            d: "M6 4v6a6 6 0 0 0 12 0V4",
            key: "9kb039"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "20",
            y2: "20",
            key: "nun2al"
        }
    ]
]);
 //# sourceMappingURL=underline.js.map


/***/ }),

/***/ 81862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
 //# sourceMappingURL=user.js.map


/***/ })

};
;