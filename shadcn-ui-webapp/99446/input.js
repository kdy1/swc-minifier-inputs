"use strict";
exports.id = 99446;
exports.ids = [99446,76010,96407,90812,20581,68396];
exports.modules = {

/***/ 42472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SinkPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
// EXTERNAL MODULE: ./registry/default/ui/accordion.tsx
var accordion = __webpack_require__(29314);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/accordion-demo.tsx


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
// EXTERNAL MODULE: ./registry/default/ui/alert.tsx
var ui_alert = __webpack_require__(96407);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/alert-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/alert-dialog.tsx
var alert_dialog = __webpack_require__(59596);
// EXTERNAL MODULE: ./registry/default/ui/button.tsx
var ui_button = __webpack_require__(27963);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/alert-dialog-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/app-sidebar.tsx
var app_sidebar = __webpack_require__(11032);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/image.js
var api_image = __webpack_require__(62811);
// EXTERNAL MODULE: ./registry/default/ui/aspect-ratio.tsx
var aspect_ratio = __webpack_require__(93391);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/aspect-ratio-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/avatar.tsx
var avatar = __webpack_require__(67089);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/avatar-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/badge.tsx
var badge = __webpack_require__(90812);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/badge-demo.tsx


function BadgeDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        children: "Badge"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/badge-destructive.tsx


function BadgeDestructive() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "destructive",
        children: "Destructive"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/badge-outline.tsx


function BadgeOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "outline",
        children: "Outline"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/badge-secondary.tsx


function BadgeSecondary() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(badge.Badge, {
        variant: "secondary",
        children: "Secondary"
    });
}

// EXTERNAL MODULE: ./registry/default/ui/breadcrumb.tsx
var breadcrumb = __webpack_require__(97911);
// EXTERNAL MODULE: ./registry/default/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(96580);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/breadcrumb-demo.tsx



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

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-demo.tsx


function ButtonDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        children: "Button"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-destructive.tsx


function ButtonDestructive() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "destructive",
        children: "Destructive"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-ghost.tsx


function ButtonGhost() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "ghost",
        children: "Ghost"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-link.tsx


function ButtonLink() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "link",
        children: "Link"
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(43669);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-loading.tsx



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

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-outline.tsx


function ButtonOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "outline",
        children: "Outline"
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-secondary.tsx


function ButtonSecondary() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_button.Button, {
        variant: "secondary",
        children: "Secondary"
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/mail-open.js
var mail_open = __webpack_require__(31516);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/button-with-icon.tsx



function ButtonWithIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button.Button, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(mail_open/* default */.Z, {}),
            " Login with Email"
        ]
    });
}

// EXTERNAL MODULE: ./registry/default/internal/sink/components/calendar-demo.tsx
var calendar_demo = __webpack_require__(15878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bell-ring.js
var bell_ring = __webpack_require__(7529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(15917);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(26910);
// EXTERNAL MODULE: ./registry/default/ui/card.tsx
var card = __webpack_require__(22648);
// EXTERNAL MODULE: ./registry/default/ui/switch.tsx
var ui_switch = __webpack_require__(85194);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/card-demo.tsx






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
// EXTERNAL MODULE: ./registry/default/ui/carousel.tsx
var carousel = __webpack_require__(24820);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/carousel-demo.tsx




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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/checkbox-demo.tsx
var checkbox_demo = __webpack_require__(95770);
// EXTERNAL MODULE: ./registry/default/internal/sink/components/collapsible-demo.tsx
var collapsible_demo = __webpack_require__(21443);
// EXTERNAL MODULE: ./registry/default/internal/sink/components/combobox-demo.tsx
var combobox_demo = __webpack_require__(54384);
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
// EXTERNAL MODULE: ./registry/default/ui/command.tsx
var command = __webpack_require__(40858);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/command-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/lib/utils.ts
var lib_utils = __webpack_require__(97715);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/component-wrapper.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/context-menu.tsx
var context_menu = __webpack_require__(89412);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/context-menu-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/date-picker-demo.tsx
var date_picker_demo = __webpack_require__(48994);
// EXTERNAL MODULE: ./registry/default/ui/dialog.tsx
var dialog = __webpack_require__(19620);
// EXTERNAL MODULE: ./registry/default/ui/input.tsx
var input = __webpack_require__(51069);
// EXTERNAL MODULE: ./registry/default/ui/label.tsx
var label = __webpack_require__(80203);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/dialog-demo.tsx





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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/drawer-demo.tsx
var drawer_demo = __webpack_require__(73207);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/dropdown-menu-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/hover-card.tsx
var hover_card = __webpack_require__(57053);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/hover-card-demo.tsx





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

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/input-demo.tsx


function InputDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(input.Input, {
        type: "email",
        placeholder: "Email"
    });
}

// EXTERNAL MODULE: ./registry/default/ui/input-otp.tsx
var input_otp = __webpack_require__(43021);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/input-otp-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(32674);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/label-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/menubar.tsx
var menubar = __webpack_require__(97257);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/menubar-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/navigation-menu-demo.tsx
var navigation_menu_demo = __webpack_require__(88602);
// EXTERNAL MODULE: ./registry/default/ui/pagination.tsx
var pagination = __webpack_require__(67986);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/pagination-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/popover.tsx
var popover = __webpack_require__(29015);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/popover-demo.tsx





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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/progress-demo.tsx
var progress_demo = __webpack_require__(42425);
// EXTERNAL MODULE: ./registry/default/ui/radio-group.tsx
var radio_group = __webpack_require__(57168);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/radio-group-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/resizable.tsx
var resizable = __webpack_require__(53036);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/resizable-handle.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/scroll-area.tsx
var scroll_area = __webpack_require__(54410);
// EXTERNAL MODULE: ./registry/default/ui/separator.tsx
var separator = __webpack_require__(81281);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/scroll-area-demo.tsx




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

// EXTERNAL MODULE: ./registry/default/ui/select.tsx
var ui_select = __webpack_require__(90252);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/select-demo.tsx



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

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/separator-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/sheet.tsx
var sheet = __webpack_require__(74393);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/sheet-demo.tsx





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

// EXTERNAL MODULE: ./registry/default/ui/skeleton.tsx
var skeleton = __webpack_require__(12051);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/skeleton-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/slider.tsx
var slider = __webpack_require__(47580);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/slider-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/internal/sink/components/sonner-demo.tsx
var sonner_demo = __webpack_require__(97768);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/switch-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/table.tsx
var table = __webpack_require__(15797);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/table-demo.tsx


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

// EXTERNAL MODULE: ./registry/default/ui/tabs.tsx
var tabs = __webpack_require__(52027);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/tabs-demo.tsx






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

// EXTERNAL MODULE: ./registry/default/ui/textarea.tsx
var ui_textarea = __webpack_require__(83922);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/textarea-demo.tsx


function TextareaDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_textarea.Textarea, {
        placeholder: "Type your message here."
    });
}

// EXTERNAL MODULE: ./registry/default/internal/sink/components/toast-demo.tsx
var toast_demo = __webpack_require__(51008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bold.js
var bold = __webpack_require__(77174);
// EXTERNAL MODULE: ./registry/default/ui/toggle.tsx
var toggle = __webpack_require__(25831);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/toggle-demo.tsx



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
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/toggle-disabled.tsx



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
// EXTERNAL MODULE: ./registry/default/ui/toggle-group.tsx
var toggle_group = __webpack_require__(62014);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/toggle-group-demo.tsx



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

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/toggle-outline.tsx



function ToggleOutline() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(toggle.Toggle, {
        variant: "outline",
        "aria-label": "Toggle italic",
        children: /*#__PURE__*/ react_jsx_runtime.jsx(italic/* default */.Z, {})
    });
}

;// CONCATENATED MODULE: ./registry/default/internal/sink/components/toggle-with-text.tsx



function ToggleWithText() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(toggle.Toggle, {
        "aria-label": "Toggle italic",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(italic/* default */.Z, {}),
            "Italic"
        ]
    });
}

// EXTERNAL MODULE: ./registry/default/ui/tooltip.tsx
var tooltip = __webpack_require__(39714);
;// CONCATENATED MODULE: ./registry/default/internal/sink/components/tooltip-demo.tsx



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

// EXTERNAL MODULE: ./registry/default/ui/sidebar.tsx
var sidebar = __webpack_require__(81007);
;// CONCATENATED MODULE: ./registry/default/internal/sink/page.tsx

































































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

/***/ 96407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   AlertDescription: () => (/* binding */ AlertDescription),
/* harmony export */   AlertTitle: () => (/* binding */ AlertTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37207);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        role: "alert",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";



/***/ }),

/***/ 90812:
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




const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
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

/***/ 67986:
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
/* harmony import */ var _registry_default_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27963);





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
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_registry_default_ui_button__WEBPACK_IMPORTED_MODULE_2__.buttonVariants)({
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

/***/ 78365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VY: () => (/* binding */ $cef8881cdc69808e$export$7c6e2c02157bb7d2),
/* harmony export */   fC: () => (/* binding */ $cef8881cdc69808e$export$be92b6f5f03c0fe9),
/* harmony export */   xz: () => (/* binding */ $cef8881cdc69808e$export$41fb9f06171c75f4)
/* harmony export */ });
/* unused harmony exports createHoverCardScope, HoverCard, HoverCardTrigger, HoverCardPortal, HoverCardContent, HoverCardArrow, Portal, Arrow */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55197);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21975);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64772);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54095);
























/* -------------------------------------------------------------------------------------------------
 * HoverCard
 * -----------------------------------------------------------------------------------------------*/ let $cef8881cdc69808e$var$originalBodyUserSelect;
const $cef8881cdc69808e$var$HOVERCARD_NAME = 'HoverCard';
const [$cef8881cdc69808e$var$createHoverCardContext, $cef8881cdc69808e$export$47b6998a836b7260] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($cef8881cdc69808e$var$HOVERCARD_NAME, [
    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .createPopperScope */ .D7
]);
const $cef8881cdc69808e$var$usePopperScope = (0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .createPopperScope */ .D7)();
const [$cef8881cdc69808e$var$HoverCardProvider, $cef8881cdc69808e$var$useHoverCardContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$HOVERCARD_NAME);
const $cef8881cdc69808e$export$57a077cc9fbe653e = (props)=>{
    const { __scopeHoverCard: __scopeHoverCard , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , openDelay: openDelay = 700 , closeDelay: closeDelay = 300  } = props;
    const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
    const openTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const closeTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const hasSelectionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const isPointerDownOnContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__/* .useControllableState */ .T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        clearTimeout(closeTimerRef.current);
        openTimerRef.current = window.setTimeout(()=>setOpen(true)
        , openDelay);
    }, [
        openDelay,
        setOpen
    ]);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        clearTimeout(openTimerRef.current);
        if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) closeTimerRef.current = window.setTimeout(()=>setOpen(false)
        , closeDelay);
    }, [
        closeDelay,
        setOpen
    ]);
    const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setOpen(false)
    , [
        setOpen
    ]); // cleanup any queued state updates on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            clearTimeout(openTimerRef.current);
            clearTimeout(closeTimerRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cef8881cdc69808e$var$HoverCardProvider, {
        scope: __scopeHoverCard,
        open: open,
        onOpenChange: setOpen,
        onOpen: handleOpen,
        onClose: handleClose,
        onDismiss: handleDismiss,
        hasSelectionRef: hasSelectionRef,
        isPointerDownOnContentRef: isPointerDownOnContentRef
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, popperScope, children));
};
/*#__PURE__*/ Object.assign($cef8881cdc69808e$export$57a077cc9fbe653e, {
    displayName: $cef8881cdc69808e$var$HOVERCARD_NAME
});
/* -------------------------------------------------------------------------------------------------
 * HoverCardTrigger
 * -----------------------------------------------------------------------------------------------*/ const $cef8881cdc69808e$var$TRIGGER_NAME = 'HoverCardTrigger';
const $cef8881cdc69808e$export$ef9f7fd8e4ba882f = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeHoverCard: __scopeHoverCard , ...triggerProps } = props;
    const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$TRIGGER_NAME, __scopeHoverCard);
    const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        asChild: true
    }, popperScope), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .WV.a, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        "data-state": context.open ? 'open' : 'closed'
    }, triggerProps, {
        ref: forwardedRef,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
        onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onFocus, context.onOpen),
        onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onBlur, context.onClose) // prevent focus event on touch devices
        ,
        onTouchStart: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onTouchStart, (event)=>event.preventDefault()
        )
    })));
});
/*#__PURE__*/ Object.assign($cef8881cdc69808e$export$ef9f7fd8e4ba882f, {
    displayName: $cef8881cdc69808e$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * HoverCardPortal
 * -----------------------------------------------------------------------------------------------*/ const $cef8881cdc69808e$var$PORTAL_NAME = 'HoverCardPortal';
const [$cef8881cdc69808e$var$PortalProvider, $cef8881cdc69808e$var$usePortalContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, {
    forceMount: undefined
});
const $cef8881cdc69808e$export$b384c6e0a789f88b = (props)=>{
    const { __scopeHoverCard: __scopeHoverCard , forceMount: forceMount , children: children , container: container  } = props;
    const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, __scopeHoverCard);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cef8881cdc69808e$var$PortalProvider, {
        scope: __scopeHoverCard,
        forceMount: forceMount
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__/* .Presence */ .z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_8__/* .Portal */ .h, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($cef8881cdc69808e$export$b384c6e0a789f88b, {
    displayName: $cef8881cdc69808e$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * HoverCardContent
 * -----------------------------------------------------------------------------------------------*/ const $cef8881cdc69808e$var$CONTENT_NAME = 'HoverCardContent';
const $cef8881cdc69808e$export$aa4724a5938c586 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const portalContext = $cef8881cdc69808e$var$usePortalContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__/* .Presence */ .z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cef8881cdc69808e$var$HoverCardContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        "data-state": context.open ? 'open' : 'closed'
    }, contentProps, {
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($cef8881cdc69808e$export$aa4724a5938c586, {
    displayName: $cef8881cdc69808e$var$CONTENT_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $cef8881cdc69808e$var$HoverCardContentImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeHoverCard: __scopeHoverCard , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , ...contentProps } = props;
    const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, __scopeHoverCard);
    const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_9__/* .useComposedRefs */ .e)(forwardedRef, ref);
    const [containSelection, setContainSelection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (containSelection) {
            const body = document.body; // Safari requires prefix
            $cef8881cdc69808e$var$originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
            body.style.userSelect = 'none';
            body.style.webkitUserSelect = 'none';
            return ()=>{
                body.style.userSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
                body.style.webkitUserSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
            };
        }
    }, [
        containSelection
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (ref.current) {
            const handlePointerUp = ()=>{
                setContainSelection(false);
                context.isPointerDownOnContentRef.current = false; // Delay a frame to ensure we always access the latest selection
                setTimeout(()=>{
                    var _document$getSelectio;
                    const hasSelection = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.toString()) !== '';
                    if (hasSelection) context.hasSelectionRef.current = true;
                });
            };
            document.addEventListener('pointerup', handlePointerUp);
            return ()=>{
                document.removeEventListener('pointerup', handlePointerUp);
                context.hasSelectionRef.current = false;
                context.isPointerDownOnContentRef.current = false;
            };
        }
    }, [
        context.isPointerDownOnContentRef,
        context.hasSelectionRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (ref.current) {
            const tabbables = $cef8881cdc69808e$var$getTabbableNodes(ref.current);
            tabbables.forEach((tabbable)=>tabbable.setAttribute('tabindex', '-1')
            );
        }
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_10__/* .DismissableLayer */ .XB, {
        asChild: true,
        disableOutsidePointerEvents: false,
        onInteractOutside: onInteractOutside,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(onFocusOutside, (event)=>{
            event.preventDefault();
        }),
        onDismiss: context.onDismiss
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, popperScope, contentProps, {
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(contentProps.onPointerDown, (event)=>{
            // Contain selection to current layer
            if (event.currentTarget.contains(event.target)) setContainSelection(true);
            context.hasSelectionRef.current = false;
            context.isPointerDownOnContentRef.current = true;
        }),
        ref: composedRefs,
        style: {
            ...contentProps.style,
            userSelect: containSelection ? 'text' : undefined,
            // Safari requires prefix
            WebkitUserSelect: containSelection ? 'text' : undefined,
            '--radix-hover-card-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-hover-card-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-hover-card-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-hover-card-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-hover-card-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    })));
});
/* -------------------------------------------------------------------------------------------------
 * HoverCardArrow
 * -----------------------------------------------------------------------------------------------*/ const $cef8881cdc69808e$var$ARROW_NAME = 'HoverCardArrow';
const $cef8881cdc69808e$export$b9744d3e7456d806 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeHoverCard: __scopeHoverCard , ...arrowProps } = props;
    const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Arrow */ .Eh, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cef8881cdc69808e$export$b9744d3e7456d806, {
    displayName: $cef8881cdc69808e$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
    return (event)=>event.pointerType === 'touch' ? undefined : eventHandler()
    ;
}
/**
 * Returns a list of nodes that can be in the tab sequence.
 * @see: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 */ function $cef8881cdc69808e$var$getTabbableNodes(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
const $cef8881cdc69808e$export$be92b6f5f03c0fe9 = $cef8881cdc69808e$export$57a077cc9fbe653e;
const $cef8881cdc69808e$export$41fb9f06171c75f4 = $cef8881cdc69808e$export$ef9f7fd8e4ba882f;
const $cef8881cdc69808e$export$602eac185826482c = (/* unused pure expression or super */ null && ($cef8881cdc69808e$export$b384c6e0a789f88b));
const $cef8881cdc69808e$export$7c6e2c02157bb7d2 = $cef8881cdc69808e$export$aa4724a5938c586;
const $cef8881cdc69808e$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($cef8881cdc69808e$export$b9744d3e7456d806));





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

/***/ 41506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fC: () => (/* binding */ $67824d98245208a0$export$be92b6f5f03c0fe9),
/* harmony export */   z$: () => (/* binding */ $67824d98245208a0$export$adb584737d712b70)
/* harmony export */ });
/* unused harmony exports createProgressScope, Progress, ProgressIndicator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54227);









/* -------------------------------------------------------------------------------------------------
 * Progress
 * -----------------------------------------------------------------------------------------------*/ const $67824d98245208a0$var$PROGRESS_NAME = 'Progress';
const $67824d98245208a0$var$DEFAULT_MAX = 100;
const [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($67824d98245208a0$var$PROGRESS_NAME);
const [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
const $67824d98245208a0$export$b25a304ec7d746bb = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeProgress: __scopeProgress , value: valueProp , max: maxProp , getValueLabel: getValueLabel = $67824d98245208a0$var$defaultGetValueLabel , ...progressProps } = props;
    const max = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
    const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max) : undefined;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($67824d98245208a0$var$ProgressProvider, {
        scope: __scopeProgress,
        value: value,
        max: max
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : undefined,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": $67824d98245208a0$var$getProgressState(value, max),
        "data-value": value !== null && value !== void 0 ? value : undefined,
        "data-max": max
    }, progressProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($67824d98245208a0$export$b25a304ec7d746bb, {
    displayName: $67824d98245208a0$var$PROGRESS_NAME
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
    max (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue)) return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
        return null;
    },
    value (props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
        if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max)) return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
        return null;
    }
};
/* -------------------------------------------------------------------------------------------------
 * ProgressIndicator
 * -----------------------------------------------------------------------------------------------*/ const $67824d98245208a0$var$INDICATOR_NAME = 'ProgressIndicator';
const $67824d98245208a0$export$2b776f7e7ee60dbd = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    var _context$value;
    const { __scopeProgress: __scopeProgress , ...indicatorProps } = props;
    const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
        "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : undefined,
        "data-max": context.max
    }, indicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($67824d98245208a0$export$2b776f7e7ee60dbd, {
    displayName: $67824d98245208a0$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ function $67824d98245208a0$var$defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
    return value == null ? 'indeterminate' : value === maxValue ? 'complete' : 'loading';
}
function $67824d98245208a0$var$isNumber(value) {
    return typeof value === 'number';
}
function $67824d98245208a0$var$isValidMaxNumber(max) {
    // prettier-ignore
    return $67824d98245208a0$var$isNumber(max) && !isNaN(max) && max > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max) {
    // prettier-ignore
    return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max && value >= 0;
} // Split this out for clearer readability of the error message.
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
const $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 16827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ck: () => (/* binding */ $f99a8c78507165f7$export$6d08773d2e66f8f2),
/* harmony export */   fC: () => (/* binding */ $f99a8c78507165f7$export$be92b6f5f03c0fe9),
/* harmony export */   z$: () => (/* binding */ $f99a8c78507165f7$export$adb584737d712b70)
/* harmony export */ });
/* unused harmony exports createRadioGroupScope, RadioGroup, RadioGroupItem, RadioGroupIndicator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40902);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36455);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96111);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11472);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64772);
































/* -------------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------*/ const $ce77a8961b41be9e$var$RADIO_NAME = 'Radio';
const [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($ce77a8961b41be9e$var$RADIO_NAME);
const [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
const $ce77a8961b41be9e$export$d7b12c4107be0d61 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadio: __scopeRadio , name: name , checked: checked = false , required: required , disabled: disabled , value: value = 'on' , onCheck: onCheck , ...radioProps } = props;
    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($ce77a8961b41be9e$var$RadioProvider, {
        scope: __scopeRadio,
        checked: checked,
        disabled: disabled
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        type: "button",
        role: "radio",
        "aria-checked": checked,
        "data-state": $ce77a8961b41be9e$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, radioProps, {
        ref: composedRefs,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(props.onClick, (event)=>{
            // radios cannot be unchecked so we only communicate a checked state
            if (!checked) onCheck === null || onCheck === void 0 || onCheck();
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if radio is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect radio updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($ce77a8961b41be9e$var$BubbleInput, {
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
/*#__PURE__*/ Object.assign($ce77a8961b41be9e$export$d7b12c4107be0d61, {
    displayName: $ce77a8961b41be9e$var$RADIO_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioIndicator
 * -----------------------------------------------------------------------------------------------*/ const $ce77a8961b41be9e$var$INDICATOR_NAME = 'RadioIndicator';
const $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadio: __scopeRadio , forceMount: forceMount , ...indicatorProps } = props;
    const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_6__/* .Presence */ .z, {
        present: forceMount || context.checked
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        "data-state": $ce77a8961b41be9e$var$getState(context.checked),
        "data-disabled": context.disabled ? '' : undefined
    }, indicatorProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, {
    displayName: $ce77a8961b41be9e$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $ce77a8961b41be9e$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__/* .usePrevious */ .D)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__/* .useSize */ .t)(control); // Bubble checked change to parents (e.g form change event)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked
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
function $ce77a8961b41be9e$var$getState(checked) {
    return checked ? 'checked' : 'unchecked';
}


const $f99a8c78507165f7$var$ARROW_KEYS = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
];
/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$RADIO_GROUP_NAME = 'RadioGroup';
const [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__/* .createRovingFocusGroupScope */ .Pc,
    $ce77a8961b41be9e$export$67d2296460f1b002
]);
const $f99a8c78507165f7$var$useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__/* .createRovingFocusGroupScope */ .Pc)();
const $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
const [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
const $f99a8c78507165f7$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , name: name , defaultValue: defaultValue , value: valueProp , required: required = false , disabled: disabled = false , orientation: orientation , dir: dir , loop: loop = true , onValueChange: onValueChange , ...groupProps } = props;
    const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_10__/* .useDirection */ .gm)(dir);
    const [value, setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_11__/* .useControllableState */ .T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
        scope: __scopeRadioGroup,
        name: name,
        required: required,
        disabled: disabled,
        value: value,
        onValueChange: setValue
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        orientation: orientation,
        dir: direction,
        loop: loop
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        role: "radiogroup",
        "aria-required": required,
        "aria-orientation": orientation,
        "data-disabled": disabled ? '' : undefined,
        dir: direction
    }, groupProps, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$a98f0dcb43a68a25, {
    displayName: $f99a8c78507165f7$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$ITEM_NAME = 'RadioGroupItem';
const $f99a8c78507165f7$export$9f866c100ef519e4 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , disabled: disabled , ...itemProps } = props;
    const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
        };
        const handleKeyUp = ()=>isArrowKeyPressedRef.current = false
        ;
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_9__/* .Item */ .ck, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !isDisabled,
        active: checked
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        disabled: isDisabled,
        required: context.required,
        checked: checked
    }, radioScope, itemProps, {
        name: context.name,
        ref: composedRefs,
        onCheck: ()=>context.onValueChange(itemProps.value)
        ,
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)((event)=>{
            // According to WAI ARIA, radio groups don't activate items on enter keypress
            if (event.key === 'Enter') event.preventDefault();
        }),
        onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(itemProps.onFocus, ()=>{
            var _ref$current;
            /**
       * Our `RovingFocusGroup` will focus the radio when navigating with arrow keys
       * and we need to "check" it in that case. We click it to "check" it (instead
       * of updating `context.value`) so that the radio change event fires.
       */ if (isArrowKeyPressedRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
        })
    })));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$9f866c100ef519e4, {
    displayName: $f99a8c78507165f7$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioGroupIndicator
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$INDICATOR_NAME = 'RadioGroupIndicator';
const $f99a8c78507165f7$export$5fb54c671a65c88 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , ...indicatorProps } = props;
    const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, radioScope, indicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$5fb54c671a65c88, {
    displayName: $f99a8c78507165f7$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
const $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
const $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;





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

/***/ 56724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bU: () => (/* binding */ $6be4966fd9bbc698$export$6521433ed15a34db),
/* harmony export */   fC: () => (/* binding */ $6be4966fd9bbc698$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony exports createSwitchScope, Switch, SwitchThumb */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11472);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96111);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54227);



















/* -------------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$SWITCH_NAME = 'Switch';
const [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($6be4966fd9bbc698$var$SWITCH_NAME);
const [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
const $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSwitch: __scopeSwitch , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...switchProps } = props;
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
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$SwitchProvider, {
        scope: __scopeSwitch,
        checked: checked,
        disabled: disabled
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-required": required,
        "data-state": $6be4966fd9bbc698$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, switchProps, {
        ref: composedRefs,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onClick, (event)=>{
            setChecked((prevChecked)=>!prevChecked
            );
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if switch is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect switch updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$BubbleInput, {
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
/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$b5d5cf8927ab7262, {
    displayName: $6be4966fd9bbc698$var$SWITCH_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SwitchThumb
 * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$THUMB_NAME = 'SwitchThumb';
const $6be4966fd9bbc698$export$4d07bf653ea69106 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSwitch: __scopeSwitch , ...thumbProps } = props;
    const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        "data-state": $6be4966fd9bbc698$var$getState(context.checked),
        "data-disabled": context.disabled ? '' : undefined
    }, thumbProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$4d07bf653ea69106, {
    displayName: $6be4966fd9bbc698$var$THUMB_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $6be4966fd9bbc698$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__/* .usePrevious */ .D)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__/* .useSize */ .t)(control); // Bubble checked change to parents (e.g form change event)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            setChecked.call(input, checked);
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
        defaultChecked: checked
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
function $6be4966fd9bbc698$var$getState(checked) {
    return checked ? 'checked' : 'unchecked';
}
const $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
const $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 77609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ck: () => (/* binding */ $6c1fd9e6a8969628$export$6d08773d2e66f8f2),
/* harmony export */   fC: () => (/* binding */ $6c1fd9e6a8969628$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony exports createToggleGroupScope, ToggleGroup, ToggleGroupItem */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40902);
/* harmony import */ var _radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62583);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36455);


















/* -------------------------------------------------------------------------------------------------
 * ToggleGroup
 * -----------------------------------------------------------------------------------------------*/ const $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME = 'ToggleGroup';
const [$6c1fd9e6a8969628$var$createToggleGroupContext, $6c1fd9e6a8969628$export$d1c7c4bcd9f26dd4] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME, [
    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__/* .createRovingFocusGroupScope */ .Pc
]);
const $6c1fd9e6a8969628$var$useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__/* .createRovingFocusGroupScope */ .Pc)();
const $6c1fd9e6a8969628$export$af3ec21f6cfb5e30 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const { type: type , ...toggleGroupProps } = props;
    if (type === 'single') {
        const singleProps = toggleGroupProps;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupImplSingle, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, singleProps, {
            ref: forwardedRef
        }));
    }
    if (type === 'multiple') {
        const multipleProps = toggleGroupProps;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupImplMultiple, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, multipleProps, {
            ref: forwardedRef
        }));
    }
    throw new Error(`Missing prop \`type\` expected on \`${$6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME}\``);
});
/*#__PURE__*/ Object.assign($6c1fd9e6a8969628$export$af3ec21f6cfb5e30, {
    displayName: $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const [$6c1fd9e6a8969628$var$ToggleGroupValueProvider, $6c1fd9e6a8969628$var$useToggleGroupValueContext] = $6c1fd9e6a8969628$var$createToggleGroupContext($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME);
const $6c1fd9e6a8969628$var$ToggleGroupImplSingle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , ...toggleGroupSingleProps } = props;
    const [value, setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__/* .useControllableState */ .T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider, {
        scope: props.__scopeToggleGroup,
        type: "single",
        value: value ? [
            value
        ] : [],
        onItemActivate: setValue,
        onItemDeactivate: react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(()=>setValue('')
        , [
            setValue
        ])
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, toggleGroupSingleProps, {
        ref: forwardedRef
    })));
});
const $6c1fd9e6a8969628$var$ToggleGroupImplMultiple = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , ...toggleGroupMultipleProps } = props;
    const [value1 = [], setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__/* .useControllableState */ .T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleButtonActivate = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((itemValue)=>setValue((prevValue = [])=>[
                ...prevValue,
                itemValue
            ]
        )
    , [
        setValue
    ]);
    const handleButtonDeactivate = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((itemValue)=>setValue((prevValue = [])=>prevValue.filter((value)=>value !== itemValue
            )
        )
    , [
        setValue
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider, {
        scope: props.__scopeToggleGroup,
        type: "multiple",
        value: value1,
        onItemActivate: handleButtonActivate,
        onItemDeactivate: handleButtonDeactivate
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, toggleGroupMultipleProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($6c1fd9e6a8969628$export$af3ec21f6cfb5e30, {
    displayName: $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const [$6c1fd9e6a8969628$var$ToggleGroupContext, $6c1fd9e6a8969628$var$useToggleGroupContext] = $6c1fd9e6a8969628$var$createToggleGroupContext($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME);
const $6c1fd9e6a8969628$var$ToggleGroupImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const { __scopeToggleGroup: __scopeToggleGroup , disabled: disabled = false , rovingFocus: rovingFocus = true , orientation: orientation , dir: dir , loop: loop = true , ...toggleGroupProps } = props;
    const rovingFocusGroupScope = $6c1fd9e6a8969628$var$useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__/* .useDirection */ .gm)(dir);
    const commonProps = {
        role: 'group',
        dir: direction,
        ...toggleGroupProps
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupContext, {
        scope: __scopeToggleGroup,
        rovingFocus: rovingFocus,
        disabled: disabled
    }, rovingFocus ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        orientation: orientation,
        dir: direction,
        loop: loop
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, commonProps, {
        ref: forwardedRef
    }))) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, commonProps, {
        ref: forwardedRef
    })));
});
/* -------------------------------------------------------------------------------------------------
 * ToggleGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $6c1fd9e6a8969628$var$ITEM_NAME = 'ToggleGroupItem';
const $6c1fd9e6a8969628$export$b453109e13abe10b = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const valueContext = $6c1fd9e6a8969628$var$useToggleGroupValueContext($6c1fd9e6a8969628$var$ITEM_NAME, props.__scopeToggleGroup);
    const context = $6c1fd9e6a8969628$var$useToggleGroupContext($6c1fd9e6a8969628$var$ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = $6c1fd9e6a8969628$var$useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = {
        ...props,
        pressed: pressed,
        disabled: disabled
    };
    const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    return context.rovingFocus ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !disabled,
        active: pressed,
        ref: ref
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, commonProps, {
        ref: forwardedRef
    }))) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, commonProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6c1fd9e6a8969628$export$b453109e13abe10b, {
    displayName: $6c1fd9e6a8969628$var$ITEM_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $6c1fd9e6a8969628$var$ToggleGroupItemImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
    const { __scopeToggleGroup: __scopeToggleGroup , value: value , ...itemProps } = props;
    const valueContext = $6c1fd9e6a8969628$var$useToggleGroupValueContext($6c1fd9e6a8969628$var$ITEM_NAME, __scopeToggleGroup);
    const singleProps = {
        role: 'radio',
        'aria-checked': props.pressed,
        'aria-pressed': undefined
    };
    const typeProps = valueContext.type === 'single' ? singleProps : undefined;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_7__/* .Toggle */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, typeProps, itemProps, {
        ref: forwardedRef,
        onPressedChange: (pressed)=>{
            if (pressed) valueContext.onItemActivate(value);
            else valueContext.onItemDeactivate(value);
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $6c1fd9e6a8969628$export$be92b6f5f03c0fe9 = $6c1fd9e6a8969628$export$af3ec21f6cfb5e30;
const $6c1fd9e6a8969628$export$6d08773d2e66f8f2 = $6c1fd9e6a8969628$export$b453109e13abe10b;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 62583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ $b3bbe2732c13b576$export$bea8ebba691c5813),
/* harmony export */   f: () => (/* binding */ $b3bbe2732c13b576$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54227);











/* -------------------------------------------------------------------------------------------------
 * Toggle
 * -----------------------------------------------------------------------------------------------*/ const $b3bbe2732c13b576$var$NAME = 'Toggle';
const $b3bbe2732c13b576$export$bea8ebba691c5813 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { pressed: pressedProp , defaultPressed: defaultPressed = false , onPressedChange: onPressedChange , ...buttonProps } = props;
    const [pressed = false, setPressed] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_1__/* .useControllableState */ .T)({
        prop: pressedProp,
        onChange: onPressedChange,
        defaultProp: defaultPressed
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        type: "button",
        "aria-pressed": pressed,
        "data-state": pressed ? 'on' : 'off',
        "data-disabled": props.disabled ? '' : undefined
    }, buttonProps, {
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__/* .composeEventHandlers */ .M)(props.onClick, ()=>{
            if (!props.disabled) setPressed(!pressed);
        })
    }));
});
/*#__PURE__*/ Object.assign($b3bbe2732c13b576$export$bea8ebba691c5813, {
    displayName: $b3bbe2732c13b576$var$NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $b3bbe2732c13b576$export$be92b6f5f03c0fe9 = $b3bbe2732c13b576$export$bea8ebba691c5813;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 28582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K2: () => (/* binding */ $t),
/* harmony export */   VM: () => (/* binding */ Gt),
/* harmony export */   uZ: () => (/* binding */ xt)
/* harmony export */ });
/* unused harmony exports REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var Wt=Object.defineProperty,Bt=Object.defineProperties;var Ht=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var mt=(r,s,e)=>s in r?Wt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,vt=(r,s)=>{for(var e in s||(s={}))pt.call(s,e)&&mt(r,e,s[e]);if(Y)for(var e of Y(s))Rt.call(s,e)&&mt(r,e,s[e]);return r},Et=(r,s)=>Bt(r,Ht(s));var gt=(r,s)=>{var e={};for(var u in r)pt.call(r,u)&&s.indexOf(u)<0&&(e[u]=r[u]);if(r!=null&&Y)for(var u of Y(r))s.indexOf(u)<0&&Rt.call(r,u)&&(e[u]=r[u]);return e};var St="^\\d+$",Nt="^[a-zA-Z]+$",$t="^[a-zA-Z0-9]+$";function bt(r){let s=setTimeout(r,0),e=setTimeout(r,10),u=setTimeout(r,50);return[s,e,u]}function Pt(r){let s=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{s.current=r}),s.current}var At=18,ht=40,kt=`${ht}px`,Ot=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function _t({containerRef:r,inputRef:s,pushPasswordManagerStrategy:e,isFocused:u}){let P=react__WEBPACK_IMPORTED_MODULE_0__.useRef({done:!1,refocused:!1}),[W,B]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[z,Z]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[j,H]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),V=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>e==="none"?!1:(e==="increase-width"||e==="experimental-no-flickering")&&W&&z,[W,z,e]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{let v=r.current,m=s.current;if(!v||!m||j||e==="none")return;let E=v,A=E.getBoundingClientRect().left+E.offsetWidth,I=E.getBoundingClientRect().top+E.offsetHeight/2,a=A-At,k=I;if(!(document.querySelectorAll(Ot).length===0&&document.elementFromPoint(a,k)===v)&&(B(!0),H(!0),!P.current.refocused&&document.activeElement===m)){let d=[m.selectionStart,m.selectionEnd];m.blur(),m.focus(),m.setSelectionRange(d[0],d[1]),P.current.refocused=!0}},[r,s,j,e]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let v=r.current;if(!v||e==="none")return;function m(){let I=window.innerWidth-v.getBoundingClientRect().right;Z(I>=ht)}m();let E=setInterval(m,1e3);return()=>{clearInterval(E)}},[r,e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let v=u||document.activeElement===s.current;if(e==="none"||!v)return;let m=setTimeout(c,0),E=setTimeout(c,2e3),A=setTimeout(c,5e3),I=setTimeout(()=>{H(!0)},6e3);return()=>{clearTimeout(m),clearTimeout(E),clearTimeout(A),clearTimeout(I)}},[s,u,e,c]),{hasPWMBadge:W,willPushPWMBadge:V,PWM_BADGE_SPACE_WIDTH:kt}}var Gt=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),xt=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((m,v)=>{var E=m,{value:r,onChange:s,maxLength:e,textAlign:u="left",pattern:P=St,inputMode:W="numeric",onComplete:B,pushPasswordManagerStrategy:z="increase-width",containerClassName:Z,noScriptCSSFallback:j=jt,render:H,children:V}=E,c=gt(E,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);var at,it,lt,ut;let[A,I]=react__WEBPACK_IMPORTED_MODULE_0__.useState(typeof c.defaultValue=="string"?c.defaultValue:""),a=r!=null?r:A,k=Pt(a),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{s==null||s(t),I(t)},[s]),d=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>P?typeof P=="string"?new RegExp(P):P:null,[P]),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),q=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),K=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value:a,onChange:O,isIOS:typeof window!="undefined"&&((at=window==null?void 0:window.CSS)==null?void 0:at.supports("-webkit-touch-callout","none"))}),X=react__WEBPACK_IMPORTED_MODULE_0__.useRef({prev:[(it=i.current)==null?void 0:it.selectionStart,(lt=i.current)==null?void 0:lt.selectionEnd,(ut=i.current)==null?void 0:ut.selectionDirection]});react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(v,()=>i.current,[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let t=i.current,o=q.current;if(!t||!o)return;K.current.value!==t.value&&K.current.onChange(t.value),X.current.prev=[t.selectionStart,t.selectionEnd,t.selectionDirection];function f(){if(document.activeElement!==t){N(null),$(null);return}let l=t.selectionStart,S=t.selectionEnd,_=t.selectionDirection,C=t.maxLength,D=t.value,b=X.current.prev,g=-1,w=-1,T;if(D.length!==0&&l!==null&&S!==null){let Ct=l===S,Dt=l===D.length&&D.length<C;if(Ct&&!Dt){let y=l;if(y===0)g=0,w=1,T="forward";else if(y===C)g=y-1,w=y,T="backward";else if(C>2&&D.length>2){let tt=0;if(b[0]!==null&&b[1]!==null){T=y<b[1]?"backward":"forward";let yt=b[0]===b[1]&&b[0]<C;T==="backward"&&!yt&&(tt=-1)}g=tt+y,w=tt+y+1}}g!==-1&&w!==-1&&g!==w&&i.current.setSelectionRange(g,w,T)}let dt=g!==-1?g:l,ft=w!==-1?w:S,Mt=T!=null?T:_;N(dt),$(ft),X.current.prev=[dt,ft,Mt]}if(document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===t&&J(!0),!document.getElementById("input-otp-style")){let l=document.createElement("style");if(l.id="input-otp-style",document.head.appendChild(l),l.sheet){let S="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";F(l.sheet,"[data-input-otp]::selection { background: transparent !important; }"),F(l.sheet,`[data-input-otp]:autofill { ${S} }`),F(l.sheet,`[data-input-otp]:-webkit-autofill { ${S} }`),F(l.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),F(l.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let p=()=>{o&&o.style.setProperty("--root-height",`${t.clientHeight}px`)};p();let h=new ResizeObserver(p);return h.observe(t),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),h.disconnect()}},[]);let[et,nt]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[L,J]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[M,N]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[G,$]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{bt(()=>{var p,h,l,S;(p=i.current)==null||p.dispatchEvent(new Event("input"));let t=(h=i.current)==null?void 0:h.selectionStart,o=(l=i.current)==null?void 0:l.selectionEnd,f=(S=i.current)==null?void 0:S.selectionDirection;t!==null&&o!==null&&(N(t),$(o),X.current.prev=[t,o,f])})},[a,L]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{k!==void 0&&a!==k&&k.length<e&&a.length===e&&(B==null||B(a))},[e,B,k,a]);let x=_t({containerRef:q,inputRef:i,pushPasswordManagerStrategy:z,isFocused:L}),ot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{let o=t.currentTarget.value.slice(0,e);if(o.length>0&&d&&!d.test(o)){t.preventDefault();return}O(o)},[e,O,d]),rt=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{var t;if(i.current){let o=Math.min(i.current.value.length,e-1),f=i.current.value.length;(t=i.current)==null||t.setSelectionRange(o,f),N(o),$(f)}J(!0)},[e]),st=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{var b,g;let o=i.current;if(!K.current.isIOS||!t.clipboardData||!o)return;let f=t.clipboardData.getData("text/plain");t.preventDefault();let p=(b=i.current)==null?void 0:b.selectionStart,h=(g=i.current)==null?void 0:g.selectionEnd,_=(p!==h?a.slice(0,p)+f+a.slice(h):a.slice(0,p)+f+a.slice(p)).slice(0,e);if(_.length>0&&d&&!d.test(_))return;o.value=_,O(_);let C=Math.min(_.length,e-1),D=_.length;o.setSelectionRange(C,D),N(C),$(D)},[e,O,d,a]),wt=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[c.disabled]),ct=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({position:"absolute",inset:0,width:x.willPushPWMBadge?`calc(100% + ${x.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:x.willPushPWMBadge?`inset(0 ${x.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[x.PWM_BADGE_SPACE_WIDTH,x.willPushPWMBadge,u]),Tt=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",Et(vt({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-mss":M,"data-input-otp-mse":G,inputMode:W,pattern:d==null?void 0:d.source,style:ct,maxLength:e,value:a,ref:i,onPaste:t=>{var o;st(t),(o=c.onPaste)==null||o.call(c,t)},onChange:ot,onMouseOver:t=>{var o;nt(!0),(o=c.onMouseOver)==null||o.call(c,t)},onMouseLeave:t=>{var o;nt(!1),(o=c.onMouseLeave)==null||o.call(c,t)},onFocus:t=>{var o;rt(),(o=c.onFocus)==null||o.call(c,t)},onBlur:t=>{var o;J(!1),(o=c.onBlur)==null||o.call(c,t)}})),[ot,rt,st,W,ct,e,G,M,c,d==null?void 0:d.source,a]),Q=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({slots:Array.from({length:e}).map((t,o)=>{let f=L&&M!==null&&G!==null&&(M===G&&o===M||o>=M&&o<G),p=a[o]!==void 0?a[o]:null;return{char:p,isActive:f,hasFakeCaret:f&&p===null}}),isFocused:L,isHovering:!c.disabled&&et}),[L,et,e,G,M,c.disabled,a]),It=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>H?H(Q):react__WEBPACK_IMPORTED_MODULE_0__.createElement(Gt.Provider,{value:Q},V),[V,Q,H]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,j!==null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("style",null,j)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:q,"data-input-otp-container":!0,style:wt,className:Z},It,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Tt)))});xt.displayName="Input";function F(r,s){try{r.insertRule(s)}catch(e){console.error("input-otp could not insert CSS rule:",s)}}var jt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
//# sourceMappingURL=index.mjs.map

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

/***/ 64609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BookOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const BookOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("BookOpen", [
    [
        "path",
        {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
            key: "vv98re"
        }
    ],
    [
        "path",
        {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
            key: "1cyq3y"
        }
    ]
]);
 //# sourceMappingURL=book-open.js.map


/***/ }),

/***/ 56623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bot = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Bot", [
    [
        "path",
        {
            d: "M12 8V4H8",
            key: "hb8ula"
        }
    ],
    [
        "rect",
        {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }
    ],
    [
        "path",
        {
            d: "M2 14h2",
            key: "vft8re"
        }
    ],
    [
        "path",
        {
            d: "M20 14h2",
            key: "4cs60a"
        }
    ],
    [
        "path",
        {
            d: "M15 13v2",
            key: "1xurst"
        }
    ],
    [
        "path",
        {
            d: "M9 13v2",
            key: "rq6x2g"
        }
    ]
]);
 //# sourceMappingURL=bot.js.map


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

/***/ 56421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Dot)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Dot = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Dot", [
    [
        "circle",
        {
            cx: "12.1",
            cy: "12.1",
            r: "1",
            key: "18d7e5"
        }
    ]
]);
 //# sourceMappingURL=dot.js.map


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

/***/ 57377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
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


/***/ }),

/***/ 16802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Forward)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Forward = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Forward", [
    [
        "polyline",
        {
            points: "15 17 20 12 15 7",
            key: "1w3sku"
        }
    ],
    [
        "path",
        {
            d: "M4 18v-2a4 4 0 0 1 4-4h12",
            key: "jmiej9"
        }
    ]
]);
 //# sourceMappingURL=forward.js.map


/***/ }),

/***/ 37478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Frame)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
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

/***/ 48732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
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

/***/ 11132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Minus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Minus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
]);
 //# sourceMappingURL=minus.js.map


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

/***/ 65282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
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

/***/ 2537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SquareTerminal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const SquareTerminal = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("SquareTerminal", [
    [
        "path",
        {
            d: "m7 11 2-2-2-2",
            key: "1lz0vl"
        }
    ],
    [
        "path",
        {
            d: "M11 13h4",
            key: "1p7l4v"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }
    ]
]);
 //# sourceMappingURL=square-terminal.js.map


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