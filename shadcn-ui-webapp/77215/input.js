"use strict";
exports.id = 77215;
exports.ids = [77215,12242,74554,34726,27066,23152,35661,63225,31309,19482,72131,13908,38195,11273,551,7678,27020,6065,14693,22097,41151,47171,58503,50695,47399,50231,12229,18532,81492,59933,15016,35201,82222,50391,83407];
exports.modules = {

/***/ 77215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SinkPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(32379);
// EXTERNAL MODULE: ./registry/new-york/ui/accordion.tsx
var accordion = __webpack_require__(70218);
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
var terminal = __webpack_require__(81542);
// EXTERNAL MODULE: ./registry/new-york/ui/alert.tsx
var ui_alert = __webpack_require__(28720);
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
var alert_dialog = __webpack_require__(74554);
// EXTERNAL MODULE: ./registry/new-york/ui/button.tsx
var ui_button = __webpack_require__(11474);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(62053);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/app-sidebar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/app-sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/app-sidebar.tsx#AppSidebar`);

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/api/image.js
var api_image = __webpack_require__(42290);
// EXTERNAL MODULE: ./registry/new-york/ui/aspect-ratio.tsx
var aspect_ratio = __webpack_require__(34726);
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
var avatar = __webpack_require__(27066);
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
var badge = __webpack_require__(62581);
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
var breadcrumb = __webpack_require__(49474);
// EXTERNAL MODULE: ./registry/new-york/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(13908);
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
var loader_circle = __webpack_require__(44450);
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
var mail_open = __webpack_require__(40517);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/button-with-icon.tsx



function ButtonWithIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button.Button, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(mail_open/* default */.Z, {}),
            " Login with Email"
        ]
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/calendar-demo.tsx

const calendar_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/calendar-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: calendar_demo_esModule, $$typeof: calendar_demo_$$typeof } = calendar_demo_proxy;
const calendar_demo_default_ = calendar_demo_proxy.default;

const calendar_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/calendar-demo.tsx#CalendarDemo`);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bell-ring.js
var bell_ring = __webpack_require__(77085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(92130);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(91740);
// EXTERNAL MODULE: ./registry/new-york/ui/card.tsx
var card = __webpack_require__(23152);
// EXTERNAL MODULE: ./registry/new-york/ui/switch.tsx
var ui_switch = __webpack_require__(18532);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(30589);
// EXTERNAL MODULE: ./registry/new-york/ui/carousel.tsx
var carousel = __webpack_require__(35661);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/checkbox-demo.tsx

const checkbox_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/checkbox-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: checkbox_demo_esModule, $$typeof: checkbox_demo_$$typeof } = checkbox_demo_proxy;
const checkbox_demo_default_ = checkbox_demo_proxy.default;

const checkbox_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/checkbox-demo.tsx#CheckboxDemo`);

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/collapsible-demo.tsx

const collapsible_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/collapsible-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: collapsible_demo_esModule, $$typeof: collapsible_demo_$$typeof } = collapsible_demo_proxy;
const collapsible_demo_default_ = collapsible_demo_proxy.default;

const collapsible_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/collapsible-demo.tsx#CollapsibleDemo`);

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/combobox-demo.tsx

const combobox_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/combobox-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: combobox_demo_esModule, $$typeof: combobox_demo_$$typeof } = combobox_demo_proxy;
const combobox_demo_default_ = combobox_demo_proxy.default;

const combobox_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/combobox-demo.tsx#ComboboxDemo`);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(57731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/smile.js
var smile = __webpack_require__(82070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/calculator.js
var calculator = __webpack_require__(37162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(86504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/credit-card.js
var credit_card = __webpack_require__(9184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(92810);
// EXTERNAL MODULE: ./registry/new-york/ui/command.tsx
var command = __webpack_require__(31309);
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
var lib_utils = __webpack_require__(83407);
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
var context_menu = __webpack_require__(19482);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/date-picker-demo.tsx

const date_picker_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/date-picker-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: date_picker_demo_esModule, $$typeof: date_picker_demo_$$typeof } = date_picker_demo_proxy;
const date_picker_demo_default_ = date_picker_demo_proxy.default;

const date_picker_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/date-picker-demo.tsx#DatePickerDemo`);

// EXTERNAL MODULE: ./registry/new-york/ui/dialog.tsx
var dialog = __webpack_require__(72131);
// EXTERNAL MODULE: ./registry/new-york/ui/input.tsx
var input = __webpack_require__(11273);
// EXTERNAL MODULE: ./registry/new-york/ui/label.tsx
var label = __webpack_require__(7678);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/drawer-demo.tsx

const drawer_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/drawer-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: drawer_demo_esModule, $$typeof: drawer_demo_$$typeof } = drawer_demo_proxy;
const drawer_demo_default_ = drawer_demo_proxy.default;

const drawer_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/drawer-demo.tsx#DrawerDemo`);

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
var hover_card = __webpack_require__(38195);
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
var input_otp = __webpack_require__(551);
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
var ui_checkbox = __webpack_require__(63225);
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
var menubar = __webpack_require__(27020);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/navigation-menu-demo.tsx

const navigation_menu_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/navigation-menu-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navigation_menu_demo_esModule, $$typeof: navigation_menu_demo_$$typeof } = navigation_menu_demo_proxy;
const navigation_menu_demo_default_ = navigation_menu_demo_proxy.default;

const navigation_menu_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/navigation-menu-demo.tsx#NavigationMenuDemo`);

// EXTERNAL MODULE: ./registry/new-york/ui/pagination.tsx
var pagination = __webpack_require__(54936);
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
var popover = __webpack_require__(6065);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/progress-demo.tsx

const progress_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/progress-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: progress_demo_esModule, $$typeof: progress_demo_$$typeof } = progress_demo_proxy;
const progress_demo_default_ = progress_demo_proxy.default;

const progress_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/progress-demo.tsx#ProgressDemo`);

// EXTERNAL MODULE: ./registry/new-york/ui/radio-group.tsx
var radio_group = __webpack_require__(14693);
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
var resizable = __webpack_require__(22097);
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
var scroll_area = __webpack_require__(41151);
// EXTERNAL MODULE: ./registry/new-york/ui/separator.tsx
var separator = __webpack_require__(58503);
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
var ui_select = __webpack_require__(47171);
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
var sheet = __webpack_require__(50695);
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
var skeleton = __webpack_require__(50231);
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
var slider = __webpack_require__(12229);
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

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/sonner-demo.tsx

const sonner_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/sonner-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: sonner_demo_esModule, $$typeof: sonner_demo_$$typeof } = sonner_demo_proxy;
const sonner_demo_default_ = sonner_demo_proxy.default;

const sonner_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/sonner-demo.tsx#SonnerDemo`);

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
var table = __webpack_require__(81492);
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
var tabs = __webpack_require__(59933);
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
var ui_textarea = __webpack_require__(15016);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/textarea-demo.tsx


function TextareaDemo() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(ui_textarea.Textarea, {
        placeholder: "Type your message here."
    });
}

;// CONCATENATED MODULE: ./registry/new-york/internal/sink/components/toast-demo.tsx

const toast_demo_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/toast-demo.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: toast_demo_esModule, $$typeof: toast_demo_$$typeof } = toast_demo_proxy;
const toast_demo_default_ = toast_demo_proxy.default;

const toast_demo_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/internal/sink/components/toast-demo.tsx#ToastDemo`);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lucide-react@0.359.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/bold.js
var bold = __webpack_require__(52582);
// EXTERNAL MODULE: ./registry/new-york/ui/toggle.tsx
var toggle = __webpack_require__(35201);
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
var underline = __webpack_require__(87070);
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
var italic = __webpack_require__(98964);
// EXTERNAL MODULE: ./registry/new-york/ui/toggle-group.tsx
var toggle_group = __webpack_require__(82222);
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
var tooltip = __webpack_require__(50391);
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
var sidebar = __webpack_require__(47399);
;// CONCATENATED MODULE: ./registry/new-york/internal/sink/page.tsx

































































function SinkPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(sidebar.SidebarProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(e0, {}),
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(calendar_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(checkbox_demo_e0, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Collapsible",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(collapsible_demo_e0, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Combobox",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(combobox_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(date_picker_demo_e0, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Dialog",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(DialogDemo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ComponentWrapper, {
                                    name: "Drawer",
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(drawer_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(navigation_menu_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(progress_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(sonner_demo_e0, {})
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
                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(toast_demo_e0, {})
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

/***/ 83407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31616);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68336);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 70218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ e0),
/* harmony export */   AccordionContent: () => (/* binding */ e3),
/* harmony export */   AccordionItem: () => (/* binding */ e1),
/* harmony export */   AccordionTrigger: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/accordion.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/accordion.tsx#Accordion`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/accordion.tsx#AccordionItem`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/accordion.tsx#AccordionTrigger`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/accordion.tsx#AccordionContent`);


/***/ }),

/***/ 74554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialog: () => (/* binding */ e0),
/* harmony export */   AlertDialogAction: () => (/* binding */ e9),
/* harmony export */   AlertDialogCancel: () => (/* binding */ e10),
/* harmony export */   AlertDialogContent: () => (/* binding */ e4),
/* harmony export */   AlertDialogDescription: () => (/* binding */ e8),
/* harmony export */   AlertDialogFooter: () => (/* binding */ e6),
/* harmony export */   AlertDialogHeader: () => (/* binding */ e5),
/* harmony export */   AlertDialogOverlay: () => (/* binding */ e2),
/* harmony export */   AlertDialogPortal: () => (/* binding */ e1),
/* harmony export */   AlertDialogTitle: () => (/* binding */ e7),
/* harmony export */   AlertDialogTrigger: () => (/* binding */ e3)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialog`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogPortal`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogOverlay`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogTrigger`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogContent`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogHeader`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogFooter`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogTitle`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogDescription`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogAction`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/alert-dialog.tsx#AlertDialogCancel`);


/***/ }),

/***/ 28720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   AlertDescription: () => (/* binding */ AlertDescription),
/* harmony export */   AlertTitle: () => (/* binding */ AlertTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3996);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91740);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
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

/***/ 34726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AspectRatio: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/aspect-ratio.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/aspect-ratio.tsx#AspectRatio`);


/***/ }),

/***/ 27066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ e0),
/* harmony export */   AvatarFallback: () => (/* binding */ e2),
/* harmony export */   AvatarImage: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/avatar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/avatar.tsx#Avatar`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/avatar.tsx#AvatarImage`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/avatar.tsx#AvatarFallback`);


/***/ }),

/***/ 62581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3996);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91740);




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

/***/ 49474:
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

/***/ 11474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9210);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3996);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91740);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 23152:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);



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

/***/ 35661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ e0),
/* harmony export */   CarouselContent: () => (/* binding */ e1),
/* harmony export */   CarouselItem: () => (/* binding */ e2),
/* harmony export */   CarouselNext: () => (/* binding */ e4),
/* harmony export */   CarouselPrevious: () => (/* binding */ e3)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#Carousel`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselContent`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselItem`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselPrevious`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselNext`);


/***/ }),

/***/ 63225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/checkbox.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/checkbox.tsx#Checkbox`);


/***/ }),

/***/ 31309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ e0),
/* harmony export */   CommandDialog: () => (/* binding */ e1),
/* harmony export */   CommandEmpty: () => (/* binding */ e4),
/* harmony export */   CommandGroup: () => (/* binding */ e5),
/* harmony export */   CommandInput: () => (/* binding */ e2),
/* harmony export */   CommandItem: () => (/* binding */ e6),
/* harmony export */   CommandList: () => (/* binding */ e3),
/* harmony export */   CommandSeparator: () => (/* binding */ e8),
/* harmony export */   CommandShortcut: () => (/* binding */ e7)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#Command`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandDialog`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandInput`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandList`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandEmpty`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandGroup`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandItem`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandShortcut`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/command.tsx#CommandSeparator`);


/***/ }),

/***/ 19482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ e0),
/* harmony export */   ContextMenuCheckboxItem: () => (/* binding */ e4),
/* harmony export */   ContextMenuContent: () => (/* binding */ e2),
/* harmony export */   ContextMenuGroup: () => (/* binding */ e9),
/* harmony export */   ContextMenuItem: () => (/* binding */ e3),
/* harmony export */   ContextMenuLabel: () => (/* binding */ e6),
/* harmony export */   ContextMenuPortal: () => (/* binding */ e10),
/* harmony export */   ContextMenuRadioGroup: () => (/* binding */ e14),
/* harmony export */   ContextMenuRadioItem: () => (/* binding */ e5),
/* harmony export */   ContextMenuSeparator: () => (/* binding */ e7),
/* harmony export */   ContextMenuShortcut: () => (/* binding */ e8),
/* harmony export */   ContextMenuSub: () => (/* binding */ e11),
/* harmony export */   ContextMenuSubContent: () => (/* binding */ e12),
/* harmony export */   ContextMenuSubTrigger: () => (/* binding */ e13),
/* harmony export */   ContextMenuTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenu`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuContent`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuItem`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuCheckboxItem`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuRadioItem`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuLabel`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuSeparator`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuShortcut`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuGroup`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuPortal`);

const e11 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuSub`);

const e12 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuSubContent`);

const e13 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuSubTrigger`);

const e14 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/context-menu.tsx#ContextMenuRadioGroup`);


/***/ }),

/***/ 72131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ e0),
/* harmony export */   DialogClose: () => (/* binding */ e4),
/* harmony export */   DialogContent: () => (/* binding */ e5),
/* harmony export */   DialogDescription: () => (/* binding */ e9),
/* harmony export */   DialogFooter: () => (/* binding */ e7),
/* harmony export */   DialogHeader: () => (/* binding */ e6),
/* harmony export */   DialogOverlay: () => (/* binding */ e2),
/* harmony export */   DialogPortal: () => (/* binding */ e1),
/* harmony export */   DialogTitle: () => (/* binding */ e8),
/* harmony export */   DialogTrigger: () => (/* binding */ e3)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#Dialog`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogPortal`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogOverlay`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogTrigger`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogClose`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogContent`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogHeader`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogFooter`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogTitle`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dialog.tsx#DialogDescription`);


/***/ }),

/***/ 13908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenu: () => (/* binding */ e0),
/* harmony export */   DropdownMenuCheckboxItem: () => (/* binding */ e4),
/* harmony export */   DropdownMenuContent: () => (/* binding */ e2),
/* harmony export */   DropdownMenuGroup: () => (/* binding */ e9),
/* harmony export */   DropdownMenuItem: () => (/* binding */ e3),
/* harmony export */   DropdownMenuLabel: () => (/* binding */ e6),
/* harmony export */   DropdownMenuPortal: () => (/* binding */ e10),
/* harmony export */   DropdownMenuRadioGroup: () => (/* binding */ e14),
/* harmony export */   DropdownMenuRadioItem: () => (/* binding */ e5),
/* harmony export */   DropdownMenuSeparator: () => (/* binding */ e7),
/* harmony export */   DropdownMenuShortcut: () => (/* binding */ e8),
/* harmony export */   DropdownMenuSub: () => (/* binding */ e11),
/* harmony export */   DropdownMenuSubContent: () => (/* binding */ e12),
/* harmony export */   DropdownMenuSubTrigger: () => (/* binding */ e13),
/* harmony export */   DropdownMenuTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenu`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuContent`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuItem`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuCheckboxItem`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuRadioItem`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuLabel`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuSeparator`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuShortcut`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuGroup`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuPortal`);

const e11 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuSub`);

const e12 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuSubContent`);

const e13 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuSubTrigger`);

const e14 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/dropdown-menu.tsx#DropdownMenuRadioGroup`);


/***/ }),

/***/ 38195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoverCard: () => (/* binding */ e0),
/* harmony export */   HoverCardContent: () => (/* binding */ e2),
/* harmony export */   HoverCardTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/hover-card.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/hover-card.tsx#HoverCard`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/hover-card.tsx#HoverCardTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/hover-card.tsx#HoverCardContent`);


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputOTP: () => (/* binding */ e0),
/* harmony export */   InputOTPGroup: () => (/* binding */ e1),
/* harmony export */   InputOTPSeparator: () => (/* binding */ e3),
/* harmony export */   InputOTPSlot: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/input-otp.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/input-otp.tsx#InputOTP`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/input-otp.tsx#InputOTPGroup`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/input-otp.tsx#InputOTPSlot`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/input-otp.tsx#InputOTPSeparator`);


/***/ }),

/***/ 11273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/label.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/label.tsx#Label`);


/***/ }),

/***/ 27020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menubar: () => (/* binding */ e0),
/* harmony export */   MenubarCheckboxItem: () => (/* binding */ e7),
/* harmony export */   MenubarContent: () => (/* binding */ e3),
/* harmony export */   MenubarGroup: () => (/* binding */ e13),
/* harmony export */   MenubarItem: () => (/* binding */ e4),
/* harmony export */   MenubarLabel: () => (/* binding */ e6),
/* harmony export */   MenubarMenu: () => (/* binding */ e1),
/* harmony export */   MenubarPortal: () => (/* binding */ e10),
/* harmony export */   MenubarRadioGroup: () => (/* binding */ e8),
/* harmony export */   MenubarRadioItem: () => (/* binding */ e9),
/* harmony export */   MenubarSeparator: () => (/* binding */ e5),
/* harmony export */   MenubarShortcut: () => (/* binding */ e15),
/* harmony export */   MenubarSub: () => (/* binding */ e14),
/* harmony export */   MenubarSubContent: () => (/* binding */ e11),
/* harmony export */   MenubarSubTrigger: () => (/* binding */ e12),
/* harmony export */   MenubarTrigger: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#Menubar`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarMenu`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarTrigger`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarContent`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarItem`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarSeparator`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarLabel`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarCheckboxItem`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarRadioGroup`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarRadioItem`);

const e10 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarPortal`);

const e11 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarSubContent`);

const e12 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarSubTrigger`);

const e13 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarGroup`);

const e14 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarSub`);

const e15 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/menubar.tsx#MenubarShortcut`);


/***/ }),

/***/ 54936:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73175);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54209);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23888);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91740);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11474);





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

/***/ 6065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ e0),
/* harmony export */   PopoverAnchor: () => (/* binding */ e3),
/* harmony export */   PopoverContent: () => (/* binding */ e2),
/* harmony export */   PopoverTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/popover.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/popover.tsx#Popover`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/popover.tsx#PopoverTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/popover.tsx#PopoverContent`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/popover.tsx#PopoverAnchor`);


/***/ }),

/***/ 14693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroup: () => (/* binding */ e0),
/* harmony export */   RadioGroupItem: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/radio-group.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/radio-group.tsx#RadioGroup`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/radio-group.tsx#RadioGroupItem`);


/***/ }),

/***/ 22097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizableHandle: () => (/* binding */ e2),
/* harmony export */   ResizablePanel: () => (/* binding */ e1),
/* harmony export */   ResizablePanelGroup: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/resizable.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/resizable.tsx#ResizablePanelGroup`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/resizable.tsx#ResizablePanel`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/resizable.tsx#ResizableHandle`);


/***/ }),

/***/ 41151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollArea: () => (/* binding */ e0),
/* harmony export */   ScrollBar: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/scroll-area.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/scroll-area.tsx#ScrollArea`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/scroll-area.tsx#ScrollBar`);


/***/ }),

/***/ 47171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ e0),
/* harmony export */   SelectContent: () => (/* binding */ e4),
/* harmony export */   SelectGroup: () => (/* binding */ e1),
/* harmony export */   SelectItem: () => (/* binding */ e6),
/* harmony export */   SelectLabel: () => (/* binding */ e5),
/* harmony export */   SelectScrollDownButton: () => (/* binding */ e9),
/* harmony export */   SelectScrollUpButton: () => (/* binding */ e8),
/* harmony export */   SelectSeparator: () => (/* binding */ e7),
/* harmony export */   SelectTrigger: () => (/* binding */ e3),
/* harmony export */   SelectValue: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#Select`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectGroup`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectValue`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectTrigger`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectContent`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectLabel`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectItem`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectSeparator`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectScrollUpButton`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/select.tsx#SelectScrollDownButton`);


/***/ }),

/***/ 58503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/separator.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/separator.tsx#Separator`);


/***/ }),

/***/ 50695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sheet: () => (/* binding */ e0),
/* harmony export */   SheetClose: () => (/* binding */ e4),
/* harmony export */   SheetContent: () => (/* binding */ e5),
/* harmony export */   SheetDescription: () => (/* binding */ e9),
/* harmony export */   SheetFooter: () => (/* binding */ e7),
/* harmony export */   SheetHeader: () => (/* binding */ e6),
/* harmony export */   SheetOverlay: () => (/* binding */ e2),
/* harmony export */   SheetPortal: () => (/* binding */ e1),
/* harmony export */   SheetTitle: () => (/* binding */ e8),
/* harmony export */   SheetTrigger: () => (/* binding */ e3)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#Sheet`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetPortal`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetOverlay`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetTrigger`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetClose`);

const e5 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetContent`);

const e6 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetHeader`);

const e7 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetFooter`);

const e8 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetTitle`);

const e9 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sheet.tsx#SheetDescription`);


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

/***/ 50231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91740);


function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("animate-pulse rounded-md bg-primary/10", className),
        ...props
    });
}



/***/ }),

/***/ 12229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/slider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/slider.tsx#Slider`);


/***/ }),

/***/ 18532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/switch.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/switch.tsx#Switch`);


/***/ }),

/***/ 81492:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);



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

/***/ 59933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ e0),
/* harmony export */   TabsContent: () => (/* binding */ e3),
/* harmony export */   TabsList: () => (/* binding */ e1),
/* harmony export */   TabsTrigger: () => (/* binding */ e2)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tabs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tabs.tsx#Tabs`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tabs.tsx#TabsList`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tabs.tsx#TabsTrigger`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tabs.tsx#TabsContent`);


/***/ }),

/***/ 15016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textarea: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";



/***/ }),

/***/ 82222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleGroup: () => (/* binding */ e0),
/* harmony export */   ToggleGroupItem: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx#ToggleGroup`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle-group.tsx#ToggleGroupItem`);


/***/ }),

/***/ 35201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toggle: () => (/* binding */ e0),
/* harmony export */   toggleVariants: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle.tsx#Toggle`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toggle.tsx#toggleVariants`);


/***/ }),

/***/ 50391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ e0),
/* harmony export */   TooltipContent: () => (/* binding */ e2),
/* harmony export */   TooltipProvider: () => (/* binding */ e3),
/* harmony export */   TooltipTrigger: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tooltip.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tooltip.tsx#Tooltip`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tooltip.tsx#TooltipTrigger`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tooltip.tsx#TooltipContent`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/tooltip.tsx#TooltipProvider`);


/***/ })

};
;