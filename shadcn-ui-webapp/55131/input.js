"use strict";
exports.id = 55131;
exports.ids = [55131,21319,97000,74287,67299,73249,90028,57985];
exports.modules = {

/***/ 88216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsActivityGoal: () => (/* binding */ CardsActivityGoal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11132);
/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7925);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42777);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13829);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74287);
/* __next_internal_client_entry_do_not_use__ CardsActivityGoal auto */ 






const data = [
    {
        goal: 400
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 278
    },
    {
        goal: 189
    },
    {
        goal: 239
    },
    {
        goal: 300
    },
    {
        goal: 200
    },
    {
        goal: 278
    },
    {
        goal: 189
    },
    {
        goal: 349
    }
];
const chartConfig = {
    goal: {
        label: "Goal",
        color: "hsl(var(--primary))"
    }
};
function CardsActivityGoal() {
    const [goal, setGoal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(350);
    function onClick(adjustment) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        children: "Move Goal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Set your daily activity goal."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "pb-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 shrink-0 rounded-full",
                                onClick: ()=>onClick(-10),
                                disabled: goal <= 200,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Decrease"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-1 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-5xl font-bold tracking-tighter",
                                        children: goal
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-[0.70rem] uppercase text-muted-foreground",
                                        children: "Calories/day"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 shrink-0 rounded-full",
                                onClick: ()=>onClick(10),
                                disabled: goal >= 400,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Increase"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-3 h-[60px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_4__.ChartContainer, {
                            config: chartConfig,
                            className: "aspect-auto h-full w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_recharts__WEBPACK_IMPORTED_MODULE_7__/* .BarChart */ .v, {
                                data: data,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_recharts__WEBPACK_IMPORTED_MODULE_8__/* .Bar */ .$, {
                                    dataKey: "goal",
                                    radius: 4,
                                    fill: "var(--color-goal)"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    className: "w-full",
                    children: "Set Goal"
                })
            })
        ]
    });
}


/***/ }),

/***/ 15689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsCalendar: () => (/* binding */ CardsCalendar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_addDays_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17386);
/* harmony import */ var _registry_new_york_ui_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21319);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97000);
/* __next_internal_client_entry_do_not_use__ CardsCalendar auto */ 



const start = new Date(2023, 5, 5);
function CardsCalendar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        className: "max-w-[260px]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
            className: "p-1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_calendar__WEBPACK_IMPORTED_MODULE_1__.Calendar, {
                numberOfMonths: 1,
                mode: "range",
                defaultMonth: start,
                selected: {
                    from: start,
                    to: (0,_barrel_optimize_names_addDays_date_fns__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(start, 8)
                }
            })
        })
    });
}


/***/ }),

/***/ 38933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsChat: () => (/* binding */ CardsChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7925);
/* harmony import */ var _barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12246);
/* harmony import */ var _barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15917);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26910);
/* harmony import */ var _registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16672);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60656);
/* harmony import */ var _registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91702);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46266);
/* __next_internal_client_entry_do_not_use__ CardsChat auto */ 










const users = [
    {
        name: "Olivia Martin",
        email: "m@example.com",
        avatar: "/avatars/01.png"
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar: "/avatars/03.png"
    },
    {
        name: "Emma Wilson",
        email: "emma@example.com",
        avatar: "/avatars/05.png"
    },
    {
        name: "Jackson Lee",
        email: "lee@example.com",
        avatar: "/avatars/02.png"
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatar: "/avatars/04.png"
    }
];
function CardsChat() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [selectedUsers, setSelectedUsers] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [messages, setMessages] = react__WEBPACK_IMPORTED_MODULE_1__.useState([
        {
            role: "agent",
            content: "Hi, how can I help you today?"
        },
        {
            role: "user",
            content: "Hey, I'm having trouble with my account."
        },
        {
            role: "agent",
            content: "What seems to be the problem?"
        },
        {
            role: "user",
            content: "I can't log in."
        }
    ]);
    const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const inputLength = input.trim().length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                        className: "flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {
                                                src: "/avatars/01.png",
                                                alt: "Image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {
                                                children: "OM"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: "Sofia Davis"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "m@example.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipProvider, {
                                delayDuration: 0,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipTrigger, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                size: "icon",
                                                variant: "outline",
                                                className: "ml-auto rounded-full",
                                                onClick: ()=>setOpen(true),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "New message"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipContent, {
                                            sideOffset: 10,
                                            children: "New message"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "space-y-4",
                            children: messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__.cn)("flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm", message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                                    children: message.content
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardFooter, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: (event)=>{
                                event.preventDefault();
                                if (inputLength === 0) return;
                                setMessages([
                                    ...messages,
                                    {
                                        role: "user",
                                        content: input
                                    }
                                ]);
                                setInput("");
                            },
                            className: "flex w-full items-center space-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {
                                    id: "message",
                                    placeholder: "Type your message...",
                                    className: "flex-1",
                                    autoComplete: "off",
                                    value: input,
                                    onChange: (event)=>setInput(event.target.value)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    type: "submit",
                                    size: "icon",
                                    disabled: inputLength === 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Send"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
                    className: "gap-0 p-0 outline-none",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogHeader, {
                            className: "px-4 pb-4 pt-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
                                    children: "New message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogDescription, {
                                    children: "Invite a user to this thread. This will create a new group message."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.Command, {
                            className: "overflow-hidden rounded-t-none border-t bg-transparent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.CommandInput, {
                                    placeholder: "Search user..."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.CommandList, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.CommandEmpty, {
                                            children: "No users found."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.CommandGroup, {
                                            className: "p-2",
                                            children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_5__.CommandItem, {
                                                    className: "flex items-center px-2",
                                                    onSelect: ()=>{
                                                        if (selectedUsers.includes(user)) {
                                                            return setSelectedUsers(selectedUsers.filter((selectedUser)=>selectedUser !== user));
                                                        }
                                                        return setSelectedUsers([
                                                            ...users
                                                        ].filter((u)=>[
                                                                ...selectedUsers,
                                                                user
                                                            ].includes(u)));
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {
                                                                    src: user.avatar,
                                                                    alt: "Image"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {
                                                                    children: user.name[0]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "ml-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm font-medium leading-none",
                                                                    children: user.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: user.email
                                                                })
                                                            ]
                                                        }),
                                                        selectedUsers.includes(user) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_Plus_Send_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            className: "ml-auto flex h-5 w-5 text-primary"
                                                        }) : null
                                                    ]
                                                }, user.email))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogFooter, {
                            className: "flex items-center border-t p-4 sm:justify-between",
                            children: [
                                selectedUsers.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex -space-x-2 overflow-hidden",
                                    children: selectedUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                            className: "inline-block border-2 border-background",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {
                                                    src: user.avatar
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {
                                                    children: user.name[0]
                                                })
                                            ]
                                        }, user.email))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Select users to add to this thread."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    disabled: selectedUsers.length < 2,
                                    onClick: ()=>{
                                        setOpen(false);
                                    },
                                    children: "Continue"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 81193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsCookieSettings: () => (/* binding */ CardsCookieSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41086);
/* harmony import */ var _registry_new_york_ui_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40560);
/* __next_internal_client_entry_do_not_use__ CardsCookieSettings auto */ 




function CardsCookieSettings() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {
                        children: "Cookie Settings"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {
                        children: "Manage your cookie settings here."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {
                                htmlFor: "necessary",
                                className: "flex flex-col space-y-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Strictly Necessary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-normal leading-snug text-muted-foreground",
                                        children: "These cookies are essential in order to use the website and use its features."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_switch__WEBPACK_IMPORTED_MODULE_4__.Switch, {
                                id: "necessary",
                                defaultChecked: true,
                                "aria-label": "Necessary"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {
                                htmlFor: "functional",
                                className: "flex flex-col space-y-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Functional Cookies"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-normal leading-snug text-muted-foreground",
                                        children: "These cookies allow the website to provide personalized functionality."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_switch__WEBPACK_IMPORTED_MODULE_4__.Switch, {
                                id: "functional",
                                "aria-label": "Functional"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {
                                htmlFor: "performance",
                                className: "flex flex-col space-y-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Performance Cookies"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-normal leading-snug text-muted-foreground",
                                        children: "These cookies help to improve the performance of the website."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_switch__WEBPACK_IMPORTED_MODULE_4__.Switch, {
                                id: "performance",
                                "aria-label": "Performance"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "outline",
                    className: "w-full",
                    children: "Save preferences"
                })
            })
        ]
    });
}


/***/ }),

/***/ 41510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsCreateAccount: () => (/* binding */ CardsCreateAccount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54732);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41086);
/* __next_internal_client_entry_do_not_use__ CardsCreateAccount auto */ 





function CardsCreateAccount() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        className: "text-2xl",
                        children: "Create an account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Enter your email below to create your account"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "grid gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.gitHub, {}),
                                    "GitHub"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.google, {}),
                                    "Google"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 flex items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-full border-t"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative flex justify-center text-xs uppercase",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-card px-2 text-muted-foreground",
                                    children: "Or continue with"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "email",
                                type: "email",
                                placeholder: "m@example.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "password",
                                children: "Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "password",
                                type: "password"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    className: "w-full",
                    children: "Create account"
                })
            })
        ]
    });
}


/***/ }),

/***/ 50871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsDataTable: () => (/* binding */ CardsDataTable)
/* harmony export */ });
/* unused harmony export columns */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52024);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32323);
/* harmony import */ var _barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95556);
/* harmony import */ var _barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48286);
/* harmony import */ var _barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68840);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17626);
/* harmony import */ var _registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96775);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90028);
/* __next_internal_client_entry_do_not_use__ columns,CardsDataTable auto */ 









const data = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com"
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com"
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com"
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com"
    }
];
const columns = [
    {
        id: "select",
        header: ({ table })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_checkbox__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
                onCheckedChange: (value)=>table.toggleAllPageRowsSelected(!!value),
                "aria-label": "Select all"
            }),
        cell: ({ row })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_checkbox__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                checked: row.getIsSelected(),
                onCheckedChange: (value)=>row.toggleSelected(!!value),
                "aria-label": "Select row"
            }),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "capitalize",
                children: row.getValue("status")
            })
    },
    {
        accessorKey: "email",
        header: ({ column })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "ghost",
                onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                children: [
                    "Email",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            });
        },
        cell: ({ row })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lowercase",
                children: row.getValue("email")
            })
    },
    {
        accessorKey: "amount",
        header: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-right",
                children: "Amount"
            }),
        cell: ({ row })=>{
            const amount = parseFloat(row.getValue("amount"));
            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(amount);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-right font-medium",
                children: formatted
            });
        }
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row })=>{
            const payment = row.original;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "ghost",
                            className: "h-8 w-8 p-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: "Open menu"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuContent, {
                        align: "end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuLabel, {
                                children: "Actions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuItem, {
                                onClick: ()=>navigator.clipboard.writeText(payment.id),
                                children: "Copy payment ID"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuSeparator, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuItem, {
                                children: "View customer"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuItem, {
                                children: "View payment details"
                            })
                        ]
                    })
                ]
            });
        }
    }
];
function CardsDataTable() {
    const [sorting, setSorting] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [columnFilters, setColumnFilters] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [columnVisibility, setColumnVisibility] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
    const [rowSelection, setRowSelection] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
    const table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__/* .useReactTable */ .b7)({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__/* .getCoreRowModel */ .sC)(),
        getPaginationRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__/* .getPaginationRowModel */ .G_)(),
        getSortedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__/* .getSortedRowModel */ .tj)(),
        getFilteredRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__/* .getFilteredRowModel */ .vL)(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        className: "text-xl",
                        children: "Payments"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Manage your payments."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                placeholder: "Filter emails...",
                                value: table.getColumn("email")?.getFilterValue() ?? "",
                                onChange: (event)=>table.getColumn("email")?.setFilterValue(event.target.value),
                                className: "max-w-sm"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenu, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            className: "ml-auto",
                                            children: [
                                                "Columns ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowUpDown_ChevronDown_MoreHorizontal_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuContent, {
                                        align: "end",
                                        children: table.getAllColumns().filter((column)=>column.getCanHide()).map((column)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuCheckboxItem, {
                                                className: "capitalize",
                                                checked: column.getIsVisible(),
                                                onCheckedChange: (value)=>column.toggleVisibility(!!value),
                                                children: column.id
                                            }, column.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-md border",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.Table, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableHeader, {
                                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, {
                                            children: headerGroup.headers.map((header)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableHead, {
                                                    className: "[&:has([role=checkbox])]:pl-3",
                                                    children: header.isPlaceholder ? null : (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__/* .flexRender */ .ie)(header.column.columnDef.header, header.getContext())
                                                }, header.id);
                                            })
                                        }, headerGroup.id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableBody, {
                                    children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, {
                                            "data-state": row.getIsSelected() && "selected",
                                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableCell, {
                                                    className: "[&:has([role=checkbox])]:pl-3",
                                                    children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__/* .flexRender */ .ie)(cell.column.columnDef.cell, cell.getContext())
                                                }, cell.id))
                                        }, row.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableCell, {
                                            colSpan: columns.length,
                                            className: "h-24 text-center",
                                            children: "No results."
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-end space-x-2 pt-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-1 text-sm text-muted-foreground",
                                children: [
                                    table.getFilteredSelectedRowModel().rows.length,
                                    " of",
                                    " ",
                                    table.getFilteredRowModel().rows.length,
                                    " row(s) selected."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>table.previousPage(),
                                        disabled: !table.getCanPreviousPage(),
                                        children: "Previous"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>table.nextPage(),
                                        disabled: !table.getCanNextPage(),
                                        children: "Next"
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


/***/ }),

/***/ 28120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsMetric: () => (/* binding */ CardsMetric)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16753);
/* harmony import */ var _barrel_optimize_names_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93390);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74287);
/* __next_internal_client_entry_do_not_use__ CardsMetric auto */ 



const data = [
    {
        average: 400,
        today: 240
    },
    {
        average: 300,
        today: 139
    },
    {
        average: 200,
        today: 980
    },
    {
        average: 278,
        today: 390
    },
    {
        average: 189,
        today: 480
    },
    {
        average: 239,
        today: 380
    },
    {
        average: 349,
        today: 430
    }
];
const chartConfig = {
    today: {
        label: "Today",
        color: "hsl(var(--primary))"
    },
    average: {
        label: "Average",
        color: "hsl(var(--primary))"
    }
};
function CardsMetric() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
                        children: "Exercise Minutes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {
                        children: "Your exercise minutes are ahead of where you normally are."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                className: "pb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartContainer, {
                    config: chartConfig,
                    className: "w-full md:h-[200px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_3__/* .LineChart */ .w, {
                        data: data,
                        margin: {
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_4__/* .Line */ .x, {
                                type: "monotone",
                                strokeWidth: 2,
                                dataKey: "average",
                                stroke: "var(--color-average)",
                                strokeOpacity: 0.5,
                                activeDot: {
                                    r: 6,
                                    fill: "var(--color-average)"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_4__/* .Line */ .x, {
                                type: "monotone",
                                dataKey: "today",
                                strokeWidth: 2,
                                stroke: "var(--color-today)",
                                activeDot: {
                                    r: 8,
                                    style: {
                                        fill: "var(--color-today)"
                                    }
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartTooltip, {
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartTooltipContent, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 39696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsPaymentMethod: () => (/* binding */ CardsPaymentMethod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54732);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41086);
/* harmony import */ var _registry_new_york_ui_radio_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30660);
/* harmony import */ var _registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80941);
/* __next_internal_client_entry_do_not_use__ CardsPaymentMethod auto */ 







function CardsPaymentMethod() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        children: "Payment Method"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Add a new payment method to your account."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_radio_group__WEBPACK_IMPORTED_MODULE_6__.RadioGroup, {
                        defaultValue: "card",
                        className: "grid grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_radio_group__WEBPACK_IMPORTED_MODULE_6__.RadioGroupItem, {
                                        value: "card",
                                        id: "card",
                                        className: "peer sr-only",
                                        "aria-label": "Card"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "card",
                                        className: "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                className: "mb-3 h-6 w-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                        width: "20",
                                                        height: "14",
                                                        x: "2",
                                                        y: "5",
                                                        rx: "2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M2 10h20"
                                                    })
                                                ]
                                            }),
                                            "Card"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_radio_group__WEBPACK_IMPORTED_MODULE_6__.RadioGroupItem, {
                                        value: "paypal",
                                        id: "paypal",
                                        className: "peer sr-only",
                                        "aria-label": "Paypal"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "paypal",
                                        className: "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.paypal, {
                                                className: "mb-3 h-6 w-6"
                                            }),
                                            "Paypal"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_radio_group__WEBPACK_IMPORTED_MODULE_6__.RadioGroupItem, {
                                        value: "apple",
                                        id: "apple",
                                        className: "peer sr-only",
                                        "aria-label": "Apple"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "apple",
                                        className: "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.apple, {
                                                className: "mb-3 h-6 w-6"
                                            }),
                                            "Apple"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "name",
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "name",
                                placeholder: "First Last"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "city",
                                children: "City"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "city",
                                placeholder: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "number",
                                children: "Card number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "number",
                                placeholder: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "month",
                                        children: "Expires"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.Select, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectTrigger, {
                                                id: "month",
                                                "aria-label": "Month",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectValue, {
                                                    placeholder: "Month"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectContent, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "1",
                                                        children: "January"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "2",
                                                        children: "February"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "3",
                                                        children: "March"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "4",
                                                        children: "April"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "5",
                                                        children: "May"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "6",
                                                        children: "June"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "7",
                                                        children: "July"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "8",
                                                        children: "August"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "9",
                                                        children: "September"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "10",
                                                        children: "October"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "11",
                                                        children: "November"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: "12",
                                                        children: "December"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "year",
                                        children: "Year"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.Select, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectTrigger, {
                                                id: "year",
                                                "aria-label": "Year",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectValue, {
                                                    placeholder: "Year"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectContent, {
                                                children: Array.from({
                                                    length: 10
                                                }, (_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_7__.SelectItem, {
                                                        value: `${new Date().getFullYear() + i}`,
                                                        children: new Date().getFullYear() + i
                                                    }, i))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: "cvc",
                                        children: "CVC"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                        id: "cvc",
                                        placeholder: "CVC"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    className: "w-full",
                    children: "Continue"
                })
            })
        ]
    });
}


/***/ }),

/***/ 37921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsReportIssue: () => (/* binding */ CardsReportIssue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41086);
/* harmony import */ var _registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80941);
/* harmony import */ var _registry_new_york_ui_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57985);
/* __next_internal_client_entry_do_not_use__ CardsReportIssue auto */ 







function CardsReportIssue() {
    const id = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        children: "Report an issue"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "What area are you having problems with?"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: `area-${id}`,
                                        children: "Area"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                        defaultValue: "billing",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectTrigger, {
                                                id: `area-${id}`,
                                                "aria-label": "Area",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectValue, {
                                                    placeholder: "Select"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectContent, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "team",
                                                        children: "Team"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "billing",
                                                        children: "Billing"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "account",
                                                        children: "Account"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "deployments",
                                                        children: "Deployments"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "support",
                                                        children: "Support"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                        htmlFor: `security-level-${id}`,
                                        children: "Security Level"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                        defaultValue: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectTrigger, {
                                                id: `security-level-${id}`,
                                                className: "line-clamp-1 w-full truncate",
                                                "aria-label": "Security Level",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectValue, {
                                                    placeholder: "Select level"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectContent, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "1",
                                                        children: "Severity 1 (Highest)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "2",
                                                        children: "Severity 2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "3",
                                                        children: "Severity 3"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                        value: "4",
                                                        children: "Severity 4 (Lowest)"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: `subject-${id}`,
                                children: "Subject"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: `subject-${id}`,
                                placeholder: "I need help with..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: `description-${id}`,
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_textarea__WEBPACK_IMPORTED_MODULE_7__.Textarea, {
                                id: `description-${id}`,
                                placeholder: "Please include all information relevant to your issue."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {
                className: "justify-between space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "ghost",
                        size: "sm",
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        size: "sm",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsShare: () => (/* binding */ CardsShare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16672);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67299);
/* harmony import */ var _registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41086);
/* harmony import */ var _registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80941);
/* harmony import */ var _registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53180);
/* __next_internal_client_entry_do_not_use__ CardsShare auto */ 







function CardsShare() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        children: "Share this document"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Anyone with the link can view this document."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {
                                htmlFor: "link",
                                className: "sr-only",
                                children: "Link"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                id: "link",
                                value: "http://example.com/link/to/document",
                                readOnly: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                className: "shrink-0",
                                children: "Copy Link"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_separator__WEBPACK_IMPORTED_MODULE_7__.Separator, {
                        className: "my-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm font-medium",
                                children: "People with access"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                                src: "/avatars/03.png",
                                                                alt: "Image"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                                children: "OM"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm font-medium leading-none",
                                                                children: "Olivia Martin"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "m@example.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                                defaultValue: "edit",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectTrigger, {
                                                        className: "ml-auto w-[110px]",
                                                        "aria-label": "Edit",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectValue, {
                                                            placeholder: "Select"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectContent, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "edit",
                                                                children: "Can edit"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "view",
                                                                children: "Can view"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                                src: "/avatars/05.png",
                                                                alt: "Image"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                                children: "IN"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm font-medium leading-none",
                                                                children: "Isabella Nguyen"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "b@example.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                                defaultValue: "view",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectTrigger, {
                                                        className: "ml-auto w-[110px]",
                                                        "aria-label": "Edit",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectValue, {
                                                            placeholder: "Select"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectContent, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "edit",
                                                                children: "Can edit"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "view",
                                                                children: "Can view"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                                src: "/avatars/01.png",
                                                                alt: "Image"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                                children: "SD"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm font-medium leading-none",
                                                                children: "Sofia Davis"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "p@example.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                                defaultValue: "view",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectTrigger, {
                                                        className: "ml-auto w-[110px]",
                                                        "aria-label": "Edit",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectValue, {
                                                            placeholder: "Select"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectContent, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "edit",
                                                                children: "Can edit"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_select__WEBPACK_IMPORTED_MODULE_6__.SelectItem, {
                                                                value: "view",
                                                                children: "Can view"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
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


/***/ }),

/***/ 62373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsStats: () => (/* binding */ CardsStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16753);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93390);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42777);
/* harmony import */ var _barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13829);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74287);
/* __next_internal_client_entry_do_not_use__ CardsStats auto */ 



const data = [
    {
        revenue: 10400,
        subscription: 240
    },
    {
        revenue: 14405,
        subscription: 300
    },
    {
        revenue: 9400,
        subscription: 200
    },
    {
        revenue: 8200,
        subscription: 278
    },
    {
        revenue: 7000,
        subscription: 189
    },
    {
        revenue: 9600,
        subscription: 239
    },
    {
        revenue: 11244,
        subscription: 278
    },
    {
        revenue: 26475,
        subscription: 189
    }
];
const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "hsl(var(--primary))"
    },
    subscription: {
        label: "Subscriptions",
        color: "hsl(var(--primary))"
    }
};
function CardsStats() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
                            className: "text-sm font-normal",
                            children: "Total Revenue"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                        className: "pb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "$15,231.89"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "+20.1% from last month"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartContainer, {
                                config: chartConfig,
                                className: "h-[80px] w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_3__/* .LineChart */ .w, {
                                    data: data,
                                    margin: {
                                        top: 5,
                                        right: 10,
                                        left: 10,
                                        bottom: 0
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_4__/* .Line */ .x, {
                                        type: "monotone",
                                        strokeWidth: 2,
                                        dataKey: "revenue",
                                        stroke: "var(--color-revenue)",
                                        activeDot: {
                                            r: 6
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
                            className: "text-sm font-normal",
                            children: "Subscriptions"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-2xl font-bold",
                                children: "+2350"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "+180.1% from last month"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_chart__WEBPACK_IMPORTED_MODULE_2__.ChartContainer, {
                                config: chartConfig,
                                className: "mt-2 h-[80px] w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_5__/* .BarChart */ .v, {
                                    data: data,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bar_BarChart_Line_LineChart_recharts__WEBPACK_IMPORTED_MODULE_6__/* .Bar */ .$, {
                                        dataKey: "subscription",
                                        fill: "var(--color-subscription)",
                                        radius: 4
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 96255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsTeamMembers: () => (/* binding */ CardsTeamMembers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68840);
/* harmony import */ var _registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16672);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97000);
/* harmony import */ var _registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60656);
/* harmony import */ var _registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73249);
/* __next_internal_client_entry_do_not_use__ CardsTeamMembers auto */ 






function CardsTeamMembers() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                        children: "Team Members"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                        children: "Invite your team members to collaborate."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                        className: "h-8 w-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                src: "/avatars/01.png",
                                                alt: "Image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                children: "OM"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: "Sofia Davis"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "m@example.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.Popover, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "ml-auto",
                                            children: [
                                                "Owner ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: "text-muted-foreground"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverContent, {
                                        className: "p-0",
                                        align: "end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.Command, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandInput, {
                                                    placeholder: "Select new role..."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandList, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandEmpty, {
                                                            children: "No roles found."
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandGroup, {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Viewer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view and comment."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Developer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and edit."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Billing"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and manage billing."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Owner"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Admin-level access to all resources."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                        className: "h-8 w-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                src: "/avatars/02.png",
                                                alt: "Image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                children: "JL"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: "Jackson Lee"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "p@example.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.Popover, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "ml-auto",
                                            children: [
                                                "Member ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: "text-muted-foreground"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverContent, {
                                        className: "p-0",
                                        align: "end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.Command, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandInput, {
                                                    placeholder: "Select new role..."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandList, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandEmpty, {
                                                            children: "No roles found."
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandGroup, {
                                                            className: "p-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Viewer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view and comment."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Developer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and edit."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Billing"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and manage billing."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Owner"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Admin-level access to all resources."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                        className: "h-8 w-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                                src: "/avatars/03.png",
                                                alt: "Image"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                                children: "IN"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-medium leading-none",
                                                children: "Isabella Nguyen"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "i@example.com"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.Popover, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "ml-auto",
                                            children: [
                                                "Member ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    className: "text-muted-foreground"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_popover__WEBPACK_IMPORTED_MODULE_5__.PopoverContent, {
                                        className: "p-0",
                                        align: "end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.Command, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandInput, {
                                                    placeholder: "Select new role..."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandList, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandEmpty, {
                                                            children: "No roles found."
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandGroup, {
                                                            className: "p-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Viewer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view and comment."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Developer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and edit."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Billing"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Can view, comment and manage billing."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_command__WEBPACK_IMPORTED_MODULE_4__.CommandItem, {
                                                                    className: "teamaspace-y-1 flex flex-col items-start px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Owner"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Admin-level access to all resources."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
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

/***/ 74287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartContainer: () => (/* binding */ ChartContainer),
/* harmony export */   ChartLegend: () => (/* binding */ ChartLegend),
/* harmony export */   ChartLegendContent: () => (/* binding */ ChartLegendContent),
/* harmony export */   ChartStyle: () => (/* binding */ ChartStyle),
/* harmony export */   ChartTooltip: () => (/* binding */ ChartTooltip),
/* harmony export */   ChartTooltipContent: () => (/* binding */ ChartTooltipContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71516);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4549);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77029);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent,ChartStyle auto */ 



// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
function useChart() {
    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
const ChartContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ id, className, children, config, ...props }, ref)=>{
    const uniqueId = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChartContext.Provider, {
        value: {
            config
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-chart": chartId,
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChartStyle, {
                    id: chartId,
                    config: config
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_3__/* .ResponsiveContainer */ .h, {
                    children: children
                })
            ]
        })
    });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config })=>{
    const colorConfig = Object.entries(config).filter(([, config])=>config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
        dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES).map(([theme, prefix])=>`
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig])=>{
                    const color = itemConfig.theme?.[theme] || itemConfig.color;
                    return color ? `  --color-${key}: ${color};` : null;
                }).join("\n")}
}
`).join("\n")
        }
    });
};
const ChartTooltip = recharts__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u;
const ChartTooltipContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref)=>{
    const { config } = useChart();
    const tooltipLabel = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || item.dataKey || item.name || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
        if (labelFormatter) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-medium", labelClassName),
                children: labelFormatter(value, payload)
            });
        }
        if (!value) {
            return null;
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-medium", labelClassName),
            children: value
        });
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            !nestLabel ? tooltipLabel : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid gap-1.5",
                children: payload.map((item, index)=>{
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                itemConfig?.icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(itemConfig.icon, {}) : !hideIndicator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: itemConfig?.label || item.name
                                                })
                                            ]
                                        }),
                                        item.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: item.value.toLocaleString()
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item.dataKey);
                })
            })
        ]
    });
});
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = recharts__WEBPACK_IMPORTED_MODULE_5__/* .Legend */ .D;
const ChartLegendContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref)=>{
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
        children: payload.map((item)=>{
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                children: [
                    itemConfig?.icon && !hideIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(itemConfig.icon, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-2 w-2 shrink-0 rounded-[2px]",
                        style: {
                            backgroundColor: item.color
                        }
                    }),
                    itemConfig?.label
                ]
            }, item.value);
        })
    });
});
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}



/***/ }),

/***/ 17626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39956);
/* harmony import */ var _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15917);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Checkbox auto */ 




const Checkbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .z$, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "h-4 w-4"
            })
        })
    }));
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;



/***/ }),

/***/ 96775:
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
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
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

/***/ 67299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26910);



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

/***/ 41086:
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

/***/ 30660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup),
/* harmony export */   RadioGroupItem: () => (/* binding */ RadioGroupItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16827);
/* harmony import */ var _barrel_optimize_names_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76823);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ RadioGroup,RadioGroupItem auto */ 




const RadioGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("grid gap-2", className),
        ...props,
        ref: ref
    });
});
RadioGroup.displayName = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const RadioGroupItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .z$, {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "h-3.5 w-3.5 fill-primary"
            })
        })
    });
});
RadioGroupItem.displayName = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;



/***/ }),

/***/ 80941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   SelectContent: () => (/* binding */ SelectContent),
/* harmony export */   SelectGroup: () => (/* binding */ SelectGroup),
/* harmony export */   SelectItem: () => (/* binding */ SelectItem),
/* harmony export */   SelectLabel: () => (/* binding */ SelectLabel),
/* harmony export */   SelectScrollDownButton: () => (/* binding */ SelectScrollDownButton),
/* harmony export */   SelectScrollUpButton: () => (/* binding */ SelectScrollUpButton),
/* harmony export */   SelectSeparator: () => (/* binding */ SelectSeparator),
/* harmony export */   SelectTrigger: () => (/* binding */ SelectTrigger),
/* harmony export */   SelectValue: () => (/* binding */ SelectValue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59335);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68840);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55995);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15917);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator,SelectScrollUpButton,SelectScrollDownButton auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Value */ .B4;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    }));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const SelectScrollUpButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
SelectScrollUpButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_.displayName;
const SelectScrollDownButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
SelectScrollDownButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollUpButton, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollDownButton, {})
            ]
        })
    }));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemText */ .eT, {
                children: children
            })
        ]
    }));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0.displayName;



/***/ }),

/***/ 53180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5939);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const Separator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .f, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .f.displayName;



/***/ }),

/***/ 40560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56724);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Switch auto */ 



const Switch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Thumb */ .bU, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
        })
    }));
Switch.displayName = _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;



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

/***/ 18808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Announcement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95308);
/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96860);



function Announcement() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/docs/blocks",
        className: "group mb-2 inline-flex items-center px-0.5 text-sm font-medium",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "underline-offset-4 group-hover:underline",
                children: "Blocks are open for contributions"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "ml-1 h-4 w-4"
            })
        ]
    });
}


/***/ }),

/***/ 12210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ CardsDemo)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(32379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(62053);
;// CONCATENATED MODULE: ./components/cards/activity-goal.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/activity-goal.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/activity-goal.tsx#CardsActivityGoal`);

;// CONCATENATED MODULE: ./components/cards/calendar.tsx

const calendar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/calendar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: calendar_esModule, $$typeof: calendar_$$typeof } = calendar_proxy;
const calendar_default_ = calendar_proxy.default;

const calendar_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/calendar.tsx#CardsCalendar`);

;// CONCATENATED MODULE: ./components/cards/chat.tsx

const chat_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/chat.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: chat_esModule, $$typeof: chat_$$typeof } = chat_proxy;
const chat_default_ = chat_proxy.default;

const chat_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/chat.tsx#CardsChat`);

;// CONCATENATED MODULE: ./components/cards/cookie-settings.tsx

const cookie_settings_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/cookie-settings.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: cookie_settings_esModule, $$typeof: cookie_settings_$$typeof } = cookie_settings_proxy;
const cookie_settings_default_ = cookie_settings_proxy.default;

const cookie_settings_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/cookie-settings.tsx#CardsCookieSettings`);

;// CONCATENATED MODULE: ./components/cards/create-account.tsx

const create_account_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/create-account.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: create_account_esModule, $$typeof: create_account_$$typeof } = create_account_proxy;
const create_account_default_ = create_account_proxy.default;

const create_account_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/create-account.tsx#CardsCreateAccount`);

;// CONCATENATED MODULE: ./components/cards/data-table.tsx

const data_table_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/data-table.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: data_table_esModule, $$typeof: data_table_$$typeof } = data_table_proxy;
const data_table_default_ = data_table_proxy.default;

const data_table_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/data-table.tsx#columns`);

const e1 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/data-table.tsx#CardsDataTable`);

;// CONCATENATED MODULE: ./components/cards/metric.tsx

const metric_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/metric.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: metric_esModule, $$typeof: metric_$$typeof } = metric_proxy;
const metric_default_ = metric_proxy.default;

const metric_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/metric.tsx#CardsMetric`);

;// CONCATENATED MODULE: ./components/cards/payment-method.tsx

const payment_method_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/payment-method.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: payment_method_esModule, $$typeof: payment_method_$$typeof } = payment_method_proxy;
const payment_method_default_ = payment_method_proxy.default;

const payment_method_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/payment-method.tsx#CardsPaymentMethod`);

;// CONCATENATED MODULE: ./components/cards/report-issue.tsx

const report_issue_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/report-issue.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: report_issue_esModule, $$typeof: report_issue_$$typeof } = report_issue_proxy;
const report_issue_default_ = report_issue_proxy.default;

const report_issue_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/report-issue.tsx#CardsReportIssue`);

;// CONCATENATED MODULE: ./components/cards/share.tsx

const share_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/share.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: share_esModule, $$typeof: share_$$typeof } = share_proxy;
const share_default_ = share_proxy.default;

const share_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/share.tsx#CardsShare`);

;// CONCATENATED MODULE: ./components/cards/stats.tsx

const stats_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/stats.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: stats_esModule, $$typeof: stats_$$typeof } = stats_proxy;
const stats_default_ = stats_proxy.default;

const stats_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/stats.tsx#CardsStats`);

;// CONCATENATED MODULE: ./components/cards/team-members.tsx

const team_members_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/team-members.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: team_members_esModule, $$typeof: team_members_$$typeof } = team_members_proxy;
const team_members_default_ = team_members_proxy.default;

const team_members_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/cards/team-members.tsx#CardsTeamMembers`);

;// CONCATENATED MODULE: ./components/cards/index.tsx













function CardsDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(stats_e0, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid gap-1 sm:grid-cols-[260px_1fr] md:hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(calendar_e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "pt-3 sm:pl-2 sm:pt-0 xl:pl-4",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(e0, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "pt-3 sm:col-span-2 xl:pt-4",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(metric_e0, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "space-y-4 xl:space-y-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(team_members_e0, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(cookie_settings_e0, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(payment_method_e0, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "space-y-4 xl:space-y-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(chat_e0, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(create_account_e0, {}),
                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "hidden xl:block",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(report_issue_e0, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "hidden gap-1 sm:grid-cols-[260px_1fr] md:grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(calendar_e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "pt-3 sm:pl-2 sm:pt-0 xl:pl-3",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(e0, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                className: "pt-3 sm:col-span-2 xl:pt-3",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx(metric_e0, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ react_jsx_runtime.jsx(e1, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(share_e0, {}),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        className: "xl:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime.jsx(report_issue_e0, {})
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 18383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QJ: () => (/* binding */ PageActions),
/* harmony export */   mr: () => (/* binding */ PageHeader),
/* harmony export */   uv: () => (/* binding */ PageHeaderDescription),
/* harmony export */   vT: () => (/* binding */ PageHeaderHeading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91740);


function PageHeader({ className, children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("border-grid border-b", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-wrapper",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12",
                children: children
            })
        })
    });
}
function PageHeaderHeading({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]", className),
        ...props
    });
}
function PageHeaderDescription({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("max-w-2xl text-balance text-lg font-light text-foreground", className),
        ...props
    });
}
function PageActions({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex w-full items-center justify-start gap-2 pt-2", className),
        ...props
    });
}



/***/ })

};
;