exports.id = 1612;
exports.ids = [1612];
exports.modules = {

/***/ 44946:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 921074));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 862063));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 562028));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 776741));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 319053));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 886022));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 795648));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 846408));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 662050));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300620));


/***/ }),

/***/ 184858:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 276386));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 995471));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 832151));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 104061));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 300677));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 626147));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 589128));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 287632));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 483010));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 961060));


/***/ }),

/***/ 995471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(563896);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const EnvironmentStorageHandler = ({ environmentId })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        localStorage.setItem(_formbricks_lib_localStorage__WEBPACK_IMPORTED_MODULE_1__/* .FORMBRICKS_ENVIRONMENT_ID_LS */ .x9, environmentId);
    }, [
        environmentId
    ]);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnvironmentStorageHandler);


/***/ }),

/***/ 832151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MainNavigation: () => (/* binding */ MainNavigation)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f2431fc3b8c6c124a1868f9a0b34d77983cdb9649&name=getLatestStableFbReleaseAction!

const getLatestStableFbReleaseAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f2431fc3b8c6c124a1868f9a0b34d77983cdb9649", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getLatestStableFbReleaseAction")
// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./app/(app)/environments/[environmentId]/components/NavigationLink.tsx





const NavigationLink = ({ href, isActive, isCollapsed = false, children, linkText, isTextVisible = true })=>{
    const activeClass = "bg-slate-50 border-r-4 border-brand-dark font-semibold text-slate-900";
    const inactiveClass = "hover:bg-slate-50 border-r-4 border-transparent hover:border-slate-300 transition-all duration-150 ease-in-out";
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: isCollapsed ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
            delayDuration: 0,
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
                            className: (0,cn.cn)("mb-1 ml-2 rounded-l-md py-2 pl-2 text-sm text-slate-700 hover:text-slate-900", isActive ? activeClass : inactiveClass),
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                href: href,
                                className: "flex items-center",
                                children: children
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                        side: "right",
                        children: linkText
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("li", {
            className: (0,cn.cn)("mb-1 rounded-l-md py-2 pl-5 text-sm text-slate-600 hover:text-slate-900", isActive ? activeClass : inactiveClass),
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                href: href,
                className: "flex items-center",
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        className: (0,cn.cn)("ml-2 flex transition-opacity duration-100", isTextVisible ? "opacity-0" : "opacity-100"),
                        children: linkText
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./app/lib/formbricks.ts
var formbricks = __webpack_require__(909013);
// EXTERNAL MODULE: ./images/formbricks-wordmark.svg
var formbricks_wordmark = __webpack_require__(775337);
// EXTERNAL MODULE: ./modules/organization/components/CreateOrganizationModal/index.tsx + 1 modules
var CreateOrganizationModal = __webpack_require__(571404);
// EXTERNAL MODULE: ./modules/ui/components/dialog/index.tsx
var dialog = __webpack_require__(728364);
// EXTERNAL MODULE: ./modules/ui/components/upgrade-prompt/index.tsx
var upgrade_prompt = __webpack_require__(530519);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
;// ./modules/projects/components/project-limit-modal/index.tsx
/* __next_internal_client_entry_do_not_use__ ProjectLimitModal auto */ 



const ProjectLimitModal = ({ open, setOpen, projectLimit, buttons })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* Dialog */.lG, {
        open: open,
        onOpenChange: setOpen,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogContent */.Cf, {
            className: "w-full max-w-[564px] bg-white",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dialog/* DialogTitle */.L3, {
                    children: t("common.projects_limit_reached")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(upgrade_prompt/* UpgradePrompt */.d, {
                    title: t("common.unlock_more_projects_with_a_higher_plan"),
                    description: t("common.you_have_reached_your_limit_of_project_limit", {
                        projectLimit
                    }),
                    buttons: buttons
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(103635);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/globe-lock.js
var globe_lock = __webpack_require__(453779);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(415140);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/blend.js
var blend = __webpack_require__(537925);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(115758);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(108996);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../packages/lib/utils/strings.ts
var strings = __webpack_require__(92018);
;// ./modules/projects/components/project-switcher/index.tsx
/* __next_internal_client_entry_do_not_use__ ProjectSwitcher auto */ 








const ProjectSwitcher = ({ isCollapsed, isTextVisible, organization, project, projects, organizationProjectsLimit, isFormbricksCloud, isLicenseActive, environmentId, isOwnerOrManager })=>{
    const [openLimitModal, setOpenLimitModal] = (0,react.useState)(false);
    const router = (0,navigation.useRouter)();
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleEnvironmentChangeByProject = (projectId)=>{
        router.push(`/projects/${projectId}/`);
    };
    const handleAddProject = (organizationId)=>{
        if (projects.length >= organizationProjectsLimit) {
            setOpenLimitModal(true);
            return;
        }
        router.push(`/organizations/${organizationId}/projects/new/mode`);
    };
    const LimitModalButtons = ()=>{
        if (isFormbricksCloud && organization.billing.plan !== "enterprise") {
            return [
                {
                    text: organization.billing.plan === "free" ? t("common.start_free_trial") : t("environments.settings.billing.upgrade"),
                    onClick: ()=>{
                        setOpenLimitModal(false);
                        router.push(`/environments/${environmentId}/settings/billing`);
                    }
                },
                {
                    text: t("common.learn_more"),
                    onClick: ()=>{
                        setOpenLimitModal(false);
                        router.push(`/environments/${environmentId}/settings/billing`);
                    }
                }
            ];
        } else {
            if (isLicenseActive) {
                return [
                    {
                        text: t("environments.settings.billing.get_in_touch"),
                        href: "https://formbricks.com/upgrade-self-hosting-license",
                        onClick: ()=>setOpenLimitModal(false)
                    },
                    {
                        text: t("common.learn_more"),
                        href: "https://formbricks.com/learn-more-self-hosting-license",
                        onClick: ()=>setOpenLimitModal(false)
                    }
                ];
            }
            return [
                {
                    text: organization.billing.plan === "free" ? t("common.start_free_trial") : t("environments.settings.billing.get_in_touch"),
                    href: "https://formbricks.com/upgrade-self-hosting-license",
                    onClick: ()=>setOpenLimitModal(false)
                },
                {
                    text: t("common.learn_more"),
                    href: "https://formbricks.com/learn-more-self-hosting-license",
                    onClick: ()=>setOpenLimitModal(false)
                }
            ];
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        asChild: true,
                        id: "projectDropdownTrigger",
                        className: "w-full rounded-br-xl border-t py-4 transition-colors duration-200 hover:bg-slate-50 focus:outline-none",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            tabIndex: 0,
                            className: (0,cn.cn)("flex cursor-pointer flex-row items-center space-x-3", isCollapsed ? "pl-2" : "pl-4"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "rounded-lg bg-slate-900 p-1.5 text-slate-50",
                                    children: project.config.channel === "website" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(globe/* default */.A, {
                                        strokeWidth: 1.5
                                    }) : project.config.channel === "app" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(globe_lock/* default */.A, {
                                        strokeWidth: 1.5
                                    }) : project.config.channel === "link" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(icons_link/* default */.A, {
                                        strokeWidth: 1.5
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(blend/* default */.A, {
                                        strokeWidth: 1.5
                                    })
                                }),
                                !isCollapsed && !isTextVisible && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    title: project.name,
                                                    className: (0,cn.cn)("ph-no-capture ph-no-capture -mb-0.5 max-w-28 truncate text-sm font-bold text-slate-700 transition-opacity duration-200", isTextVisible ? "opacity-0" : "opacity-100"),
                                                    children: project.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                    className: (0,cn.cn)("text-sm text-slate-500 transition-opacity duration-200", isTextVisible ? "opacity-0" : "opacity-100"),
                                                    children: project.config.channel === "link" ? t("common.link_and_email") : (0,strings/* capitalizeFirstLetter */.Zr)(project.config.channel)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_right/* default */.A, {
                                            className: (0,cn.cn)("h-5 w-5 text-slate-700 transition-opacity duration-200 hover:text-slate-500", isTextVisible ? "opacity-0" : "opacity-100")
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        id: "userDropdownInnerContentWrapper",
                        side: "right",
                        sideOffset: 10,
                        alignOffset: -1,
                        align: "end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuRadioGroup */.Hr, {
                                value: project.id,
                                onValueChange: (v)=>handleEnvironmentChangeByProject(v),
                                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuRadioItem */.Ht, {
                                        value: project.id,
                                        className: "cursor-pointer break-all",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                children: project.config.channel === "website" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(globe/* default */.A, {
                                                    className: "mr-2 h-4 w-4",
                                                    strokeWidth: 1.5
                                                }) : project.config.channel === "app" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(globe_lock/* default */.A, {
                                                    className: "mr-2 h-4 w-4",
                                                    strokeWidth: 1.5
                                                }) : project.config.channel === "link" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(icons_link/* default */.A, {
                                                    className: "mr-2 h-4 w-4",
                                                    strokeWidth: 1.5
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(blend/* default */.A, {
                                                    className: "mr-2 h-4 w-4",
                                                    strokeWidth: 1.5
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                className: "",
                                                children: project?.name
                                            })
                                        ]
                                    }, project.id))
                            }),
                            isOwnerOrManager && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.mB, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                        onClick: ()=>handleAddProject(organization.id),
                                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                            children: t("common.add_project")
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            openLimitModal && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProjectLimitModal, {
                open: openLimitModal,
                setOpen: setOpenLimitModal,
                buttons: LimitModalButtons(),
                projectLimit: organizationProjectsLimit
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/avatars/index.tsx
var avatars = __webpack_require__(939514);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/message-circle.js
var message_circle = __webpack_require__(76446);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/user.js
var icons_user = __webpack_require__(732995);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js
var mouse_pointer_click = __webpack_require__(277792);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/blocks.js
var blocks = __webpack_require__(427434);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/cog.js
var cog = __webpack_require__(638817);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-user.js
var circle_user = __webpack_require__(990082);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(969614);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/credit-card.js
var credit_card = __webpack_require__(695164);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/key.js
var key = __webpack_require__(178741);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var arrow_up_right = __webpack_require__(620394);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/panel-left-open.js
var panel_left_open = __webpack_require__(168185);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/panel-left-close.js
var panel_left_close = __webpack_require__(593517);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/rocket.js
var rocket = __webpack_require__(133328);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/log-out.js
var log_out = __webpack_require__(65433);
// EXTERNAL MODULE: ../../node_modules/next-auth/react/index.js
var next_auth_react = __webpack_require__(902446);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
// EXTERNAL MODULE: ../../packages/lib/membership/utils.ts
var utils = __webpack_require__(100274);
;// ./package.json
const package_namespaceObject = {"rE":"3.1.5"};
;// ./app/(app)/environments/[environmentId]/components/MainNavigation.tsx
/* __next_internal_client_entry_do_not_use__ MainNavigation auto */ 




















const MainNavigation = ({ environment, organizations, organization, user, projects, isMultiOrgEnabled, membershipRole, isFormbricksCloud, organizationProjectsLimit, isLicenseActive })=>{
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [currentOrganizationName, setCurrentOrganizationName] = (0,react.useState)("");
    const [currentOrganizationId, setCurrentOrganizationId] = (0,react.useState)("");
    const [showCreateOrganizationModal, setShowCreateOrganizationModal] = (0,react.useState)(false);
    const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);
    const [isTextVisible, setIsTextVisible] = (0,react.useState)(true);
    const [latestVersion, setLatestVersion] = (0,react.useState)("");
    const project = projects.find((project)=>project.id === environment.projectId);
    const { isManager, isOwner, isMember, isBilling } = (0,utils/* getAccessFlags */.c)(membershipRole);
    const isOwnerOrManager = isManager || isOwner;
    const isPricingDisabled = isMember;
    const toggleSidebar = ()=>{
        setIsCollapsed(!isCollapsed);
        localStorage.setItem("isMainNavCollapsed", isCollapsed ? "false" : "true");
    };
    (0,react.useEffect)(()=>{
        const isCollapsedValueFromLocalStorage = localStorage.getItem("isMainNavCollapsed") === "true";
        setIsCollapsed(isCollapsedValueFromLocalStorage);
    }, []);
    (0,react.useEffect)(()=>{
        const toggleTextOpacity = ()=>{
            setIsTextVisible(isCollapsed ? true : false);
        };
        const timeoutId = setTimeout(toggleTextOpacity, 150);
        return ()=>clearTimeout(timeoutId);
    }, [
        isCollapsed
    ]);
    (0,react.useEffect)(()=>{
        if (organization && organization.name !== "") {
            setCurrentOrganizationName(organization.name);
            setCurrentOrganizationId(organization.id);
        }
    }, [
        organization
    ]);
    const sortedOrganizations = (0,react.useMemo)(()=>{
        return [
            ...organizations
        ].sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        organizations
    ]);
    const sortedProjects = (0,react.useMemo)(()=>{
        const channelOrder = [
            "website",
            "app",
            "link",
            null
        ];
        const groupedProjects = projects.reduce((acc, project)=>{
            const channel = project.config.channel;
            const key = channel !== null ? channel : "null";
            acc[key] = acc[key] || [];
            acc[key].push(project);
            return acc;
        }, {});
        Object.keys(groupedProjects).forEach((channel)=>{
            groupedProjects[channel].sort((a, b)=>a.name.localeCompare(b.name));
        });
        return channelOrder.flatMap((channel)=>groupedProjects[channel !== null ? channel : "null"] || []);
    }, [
        projects
    ]);
    const handleEnvironmentChangeByOrganization = (organizationId)=>{
        router.push(`/organizations/${organizationId}/`);
    };
    const mainNavigation = (0,react.useMemo)(()=>[
            {
                name: t("common.surveys"),
                href: `/environments/${environment.id}/surveys`,
                icon: message_circle/* default */.A,
                isActive: pathname?.includes("/surveys"),
                isHidden: false
            },
            {
                href: `/environments/${environment.id}/contacts`,
                name: t("common.contacts"),
                icon: icons_user/* default */.A,
                isActive: pathname?.includes("/contacts") || pathname?.includes("/segments")
            },
            {
                name: t("common.actions"),
                href: `/environments/${environment.id}/actions`,
                icon: mouse_pointer_click/* default */.A,
                isActive: pathname?.includes("/actions") || pathname?.includes("/actions")
            },
            {
                name: t("common.integrations"),
                href: `/environments/${environment.id}/integrations`,
                icon: blocks/* default */.A,
                isActive: pathname?.includes("/integrations")
            },
            {
                name: t("common.configuration"),
                href: `/environments/${environment.id}/project/general`,
                icon: cog/* default */.A,
                isActive: pathname?.includes("/project")
            }
        ], [
        t,
        environment.id,
        pathname
    ]);
    const dropdownNavigation = [
        {
            label: t("common.account"),
            href: `/environments/${environment.id}/settings/profile`,
            icon: circle_user/* default */.A
        },
        {
            label: t("common.organization"),
            href: `/environments/${environment.id}/settings/general`,
            icon: users/* default */.A
        },
        {
            label: t("common.billing"),
            href: `/environments/${environment.id}/settings/billing`,
            hidden: !isFormbricksCloud,
            icon: credit_card/* default */.A
        },
        {
            label: t("common.license"),
            href: `/environments/${environment.id}/settings/enterprise`,
            hidden: isFormbricksCloud || isPricingDisabled,
            icon: key/* default */.A
        },
        {
            label: t("common.documentation"),
            href: "https://formbricks.com/docs",
            target: "_blank",
            icon: arrow_up_right/* default */.A
        }
    ];
    (0,react.useEffect)(()=>{
        async function loadReleases() {
            const res = await getLatestStableFbReleaseAction();
            if (res?.data) {
                const latestVersionTag = res.data;
                const currentVersionTag = `v${package_namespaceObject.rE}`;
                if (currentVersionTag !== latestVersionTag) {
                    setLatestVersion(latestVersionTag);
                }
            }
        }
        if (isOwnerOrManager) loadReleases();
    }, [
        isOwnerOrManager
    ]);
    const mainNavigationLink = `/environments/${environment.id}/${isBilling ? "settings/billing/" : "surveys/"}`;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            project && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("aside", {
                className: (0,cn.cn)("z-40 flex flex-col justify-between rounded-r-xl border-r border-slate-200 bg-white pt-3 shadow-md transition-all duration-100", !isCollapsed ? "w-sidebar-collapsed" : "w-sidebar-expanded", environment.type === "development" ? `h-[calc(100vh-1.25rem)]` : "h-screen"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between px-3 pb-4",
                                children: [
                                    !isCollapsed && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                        href: mainNavigationLink,
                                        className: (0,cn.cn)("flex items-center justify-center transition-opacity duration-100", isTextVisible ? "opacity-0" : "opacity-100"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                            src: formbricks_wordmark/* default */.A,
                                            width: 160,
                                            height: 30,
                                            alt: t("environments.formbricks_logo")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: toggleSidebar,
                                        className: (0,cn.cn)("rounded-xl bg-slate-50 p-1 text-slate-600 transition-all hover:bg-slate-100 focus:outline-none focus:ring-0 focus:ring-transparent"),
                                        children: isCollapsed ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(panel_left_open/* default */.A, {
                                            strokeWidth: 1.5
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(panel_left_close/* default */.A, {
                                            strokeWidth: 1.5
                                        })
                                    })
                                ]
                            }),
                            !isBilling && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("ul", {
                                children: mainNavigation.map((item)=>!item.isHidden && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NavigationLink, {
                                        href: item.href,
                                        isActive: item.isActive,
                                        isCollapsed: isCollapsed,
                                        isTextVisible: isTextVisible,
                                        linkText: item.name,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(item.icon, {
                                            strokeWidth: 1.5
                                        })
                                    }, item.name))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        children: [
                            !isCollapsed && isOwnerOrManager && latestVersion && !isFormbricksCloud && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                href: "https://github.com/formbricks/formbricks/releases",
                                target: "_blank",
                                className: "m-2 flex items-center space-x-4 rounded-lg border border-slate-200 bg-slate-100 p-2 text-sm text-slate-800 hover:border-slate-300 hover:bg-slate-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                    className: "flex items-center justify-center gap-x-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(rocket/* default */.A, {
                                            strokeWidth: 1.5,
                                            className: "mx-1 h-6 w-6 text-slate-900"
                                        }),
                                        t("common.new_version_available", {
                                            version: latestVersion
                                        })
                                    ]
                                })
                            }),
                            !isBilling && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ProjectSwitcher, {
                                environmentId: environment.id,
                                projects: sortedProjects,
                                project: project,
                                isCollapsed: isCollapsed,
                                isFormbricksCloud: isFormbricksCloud,
                                isLicenseActive: isLicenseActive,
                                isOwnerOrManager: isOwnerOrManager,
                                isTextVisible: isTextVisible,
                                organization: organization,
                                organizationProjectsLimit: organizationProjectsLimit
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                            asChild: true,
                                            id: "userDropdownTrigger",
                                            className: "w-full rounded-br-xl border-t py-4 transition-colors duration-200 hover:bg-slate-50 focus:outline-none",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                tabIndex: 0,
                                                className: (0,cn.cn)("flex cursor-pointer flex-row items-center space-x-3", isCollapsed ? "pl-2" : "pl-4"),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* ProfileAvatar */.T, {
                                                        userId: user.id,
                                                        imageUrl: user.imageUrl
                                                    }),
                                                    !isCollapsed && !isTextVisible && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                className: (0,cn.cn)(isTextVisible ? "opacity-0" : "opacity-100"),
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                        title: user?.email,
                                                                        className: (0,cn.cn)("ph-no-capture ph-no-capture -mb-0.5 max-w-28 truncate text-sm font-bold text-slate-700"),
                                                                        children: user?.name ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                                            children: user?.name
                                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                                            children: user?.email
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                        title: (0,strings/* capitalizeFirstLetter */.Zr)(organization?.name),
                                                                        className: "max-w-28 truncate text-sm text-slate-500",
                                                                        children: (0,strings/* capitalizeFirstLetter */.Zr)(organization?.name)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_right/* default */.A, {
                                                                className: (0,cn.cn)("h-5 w-5 text-slate-700 hover:text-slate-500")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                            id: "userDropdownInnerContentWrapper",
                                            side: "right",
                                            sideOffset: 10,
                                            alignOffset: 5,
                                            align: "end",
                                            children: [
                                                dropdownNavigation.map((link)=>!link.hidden && /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                                        href: link.href,
                                                        target: link.target,
                                                        className: "flex w-full items-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */._2, {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(link.icon, {
                                                                    className: "mr-2 h-4 w-4",
                                                                    strokeWidth: 1.5
                                                                }),
                                                                link.label
                                                            ]
                                                        })
                                                    }, link.label)),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                    onClick: async ()=>{
                                                        const route = await (0,next_auth_react.signOut)({
                                                            redirect: false,
                                                            callbackUrl: "/auth/login"
                                                        });
                                                        router.push(route.url);
                                                        await (0,formbricks/* formbricksLogout */.X)();
                                                    },
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(log_out/* default */.A, {
                                                        className: "mr-2 h-4 w-4",
                                                        strokeWidth: 1.5
                                                    }),
                                                    children: t("common.logout")
                                                }),
                                                (isMultiOrgEnabled || organizations.length > 1) && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuSub */.lv, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSubTrigger */.nV, {
                                                            className: "rounded-lg",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                        children: currentOrganizationName
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                                        className: "block text-xs text-slate-500",
                                                                        children: t("common.switch_organization")
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuPortal */.dc, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuSubContent */.M5, {
                                                                sideOffset: 10,
                                                                alignOffset: 5,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuRadioGroup */.Hr, {
                                                                        value: currentOrganizationId,
                                                                        onValueChange: (organizationId)=>handleEnvironmentChangeByOrganization(organizationId),
                                                                        children: sortedOrganizations.map((organization)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuRadioItem */.Ht, {
                                                                                value: organization.id,
                                                                                className: "cursor-pointer rounded-lg",
                                                                                children: organization.name
                                                                            }, organization.id))
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.mB, {}),
                                                                    isMultiOrgEnabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                                        onClick: ()=>setShowCreateOrganizationModal(true),
                                                                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {
                                                                            className: "mr-2 h-4 w-4"
                                                                        }),
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                                            children: t("common.create_new_organization")
                                                                        })
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
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CreateOrganizationModal/* CreateOrganizationModal */.X, {
                open: showCreateOrganizationModal,
                setOpen: (val)=>setShowCreateOrganizationModal(val)
            })
        ]
    });
};


/***/ }),

/***/ 626147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TopControlButtons: () => (/* binding */ TopControlButtons)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/label/index.tsx
var label = __webpack_require__(61330);
// EXTERNAL MODULE: ./modules/ui/components/switch/index.tsx
var components_switch = __webpack_require__(493204);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./app/(app)/environments/[environmentId]/components/EnvironmentSwitch.tsx
/* __next_internal_client_entry_do_not_use__ EnvironmentSwitch auto */ 






const EnvironmentSwitch = ({ environment, environments })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const [isEnvSwitchChecked, setIsEnvSwitchChecked] = (0,react.useState)(environment?.type === "development");
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const handleEnvironmentChange = (environmentType)=>{
        const newEnvironmentId = environments.find((e)=>e.type === environmentType)?.id;
        if (newEnvironmentId) {
            router.push(`/environments/${newEnvironmentId}/`);
        }
    };
    const toggleEnvSwitch = ()=>{
        const newEnvironmentType = isEnvSwitchChecked ? "production" : "development";
        setIsLoading(true);
        setIsEnvSwitchChecked(!isEnvSwitchChecked);
        handleEnvironmentChange(newEnvironmentType);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: (0,cn.cn)("flex items-center space-x-2 rounded-lg p-2", isEnvSwitchChecked ? "bg-slate-100 text-orange-800" : "hover:bg-slate-100"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                htmlFor: "development-mode",
                className: (0,cn.cn)("hover:cursor-pointer", isEnvSwitchChecked && "text-orange-800"),
                children: t("common.dev_env")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_switch/* Switch */.d, {
                className: "focus:ring-orange-800 data-[state=checked]:bg-orange-800",
                id: "development-mode",
                disabled: isLoading,
                checked: isEnvSwitchChecked,
                onCheckedChange: toggleEnvSwitch
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ee/teams/utils/teams.ts
var teams = __webpack_require__(708171);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/message-circle-question.js
var message_circle_question = __webpack_require__(117059);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-user.js
var circle_user = __webpack_require__(990082);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(108996);
// EXTERNAL MODULE: ../../packages/lib/membership/utils.ts
var utils = __webpack_require__(100274);
;// ./app/(app)/environments/[environmentId]/components/TopControlButtons.tsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* __next_internal_client_entry_do_not_use__ TopControlButtons auto */ 









const TopControlButtons = ({ environment, environments, isFormbricksCloud, membershipRole, projectPermission })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const { isMember, isBilling } = (0,utils/* getAccessFlags */.c)(membershipRole);
    const { hasReadAccess } = (0,teams/* getTeamPermissionFlags */.od)(projectPermission);
    const isReadOnly = isMember && hasReadAccess;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "z-50 flex items-center space-x-2",
        children: [
            !isBilling && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EnvironmentSwitch, {
                environment: environment,
                environments: environments
            }),
            isFormbricksCloud && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                tooltipContent: t("common.share_feedback"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-fit w-fit bg-slate-50 p-1",
                    onClick: ()=>{
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formbricks/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Top Menu: Product Feedback");
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(message_circle_question/* default */.A, {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                tooltipContent: t("common.account"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-fit w-fit bg-slate-50 p-1",
                    onClick: ()=>{
                        router.push(`/environments/${environment.id}/settings/profile`);
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_user/* default */.A, {})
                })
            }),
            isBilling || isReadOnly ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                tooltipContent: t("common.new_survey"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    variant: "secondary",
                    size: "icon",
                    className: "h-fit w-fit p-1",
                    onClick: ()=>{
                        router.push(`/environments/${environment.id}/surveys/templates`);
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {})
                })
            })
        ]
    });
};


/***/ }),

/***/ 708171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JJ: () => (/* binding */ TeamPermissionMapping),
/* harmony export */   V$: () => (/* binding */ getTeamAccessFlags),
/* harmony export */   od: () => (/* binding */ getTeamPermissionFlags)
/* harmony export */ });
/* unused harmony export TeamRoleMapping */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const TeamPermissionMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read]: "Read",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite]: "Read & write",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage]: "Manage"
};
const TeamRoleMapping = {
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.admin]: "Team Admin",
    [_prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.contributor]: "Contributor"
};
const getTeamAccessFlags = (role)=>{
    const isAdmin = role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.admin;
    const isContributor = role === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.TeamUserRole.contributor;
    return {
        isAdmin,
        isContributor
    };
};
const getTeamPermissionFlags = (permissionLevel)=>{
    const hasReadAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.read;
    const hasReadWriteAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.readWrite;
    const hasManageAccess = permissionLevel === _prisma_client__WEBPACK_IMPORTED_MODULE_0__.ProjectTeamPermission.manage;
    return {
        hasReadAccess,
        hasReadWriteAccess,
        hasManageAccess
    };
};


/***/ }),

/***/ 589128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevEnvironmentBanner: () => (/* binding */ DevEnvironmentBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397674);
/* __next_internal_client_entry_do_not_use__ DevEnvironmentBanner auto */ 

const DevEnvironmentBanner = ({ environment })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_1__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: environment.type === "development" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "z-40 flex h-5 items-center justify-center bg-orange-800 text-center text-xs text-white",
            children: t("common.development_environment_banner")
        })
    });
};


/***/ }),

/***/ 287632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LimitsReachedBanner: () => (/* binding */ LimitsReachedBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467935);
/* harmony import */ var _barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(673766);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ LimitsReachedBanner auto */ 




const LimitsReachedBanner = ({ organization, peopleCount, responseCount, environmentId })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    const orgBillingPeopleLimit = organization.billing?.limits?.monthly?.miu;
    const orgBillingResponseLimit = organization.billing?.limits?.monthly?.responses;
    const isPeopleLimitReached = orgBillingPeopleLimit !== null && peopleCount >= orgBillingPeopleLimit;
    const isResponseLimitReached = orgBillingResponseLimit !== null && responseCount >= orgBillingResponseLimit;
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    if (show && (isPeopleLimitReached || isResponseLimitReached)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            "aria-live": "assertive",
            className: "pointer-events-none fixed inset-0 z-[100] flex min-w-80 items-end px-4 py-6 sm:items-start sm:p-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex w-full flex-col items-center space-y-4 sm:items-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                                className: "text-error h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "ml-3 w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                    className: "text-base font-medium text-slate-900",
                                                    children: t("common.limits_reached")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "mt-1 text-sm text-slate-500",
                                                    children: [
                                                        isPeopleLimitReached && isResponseLimitReached ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                t("common.you_have_reached_your_monthly_miu_limit_of"),
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    children: orgBillingPeopleLimit
                                                                }),
                                                                " ",
                                                                t("common.and_response_limit_of"),
                                                                " ",
                                                                orgBillingResponseLimit,
                                                                ".",
                                                                " "
                                                            ]
                                                        }) : null,
                                                        isPeopleLimitReached && !isResponseLimitReached ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                t("common.you_have_reached_your_monthly_miu_limit_of"),
                                                                " ",
                                                                orgBillingPeopleLimit,
                                                                ".",
                                                                " "
                                                            ]
                                                        }) : null,
                                                        !isPeopleLimitReached && isResponseLimitReached ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                t("common.you_have_reached_your_monthly_response_limit_of"),
                                                                " ",
                                                                orgBillingResponseLimit,
                                                                ".",
                                                                " "
                                                            ]
                                                        }) : null
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: `/environments/${environmentId}/settings/billing`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-sm text-slate-900",
                                                        children: t("common.learn_more")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "absolute right-0 top-0 ml-4 flex flex-shrink-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        className: "inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                        onClick: ()=>setShow(false),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "sr-only",
                                                children: "Close"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
    return null;
};


/***/ }),

/***/ 483010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingDowngradeBanner: () => (/* binding */ PendingDowngradeBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467935);
/* harmony import */ var _barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(673766);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ PendingDowngradeBanner auto */ 




const PendingDowngradeBanner = ({ lastChecked, active, isPendingDowngrade, environmentId })=>{
    const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000;
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    const isLastCheckedWithin72Hours = lastChecked ? new Date().getTime() - lastChecked.getTime() < threeDaysInMillis : false;
    const scheduledDowngradeDate = new Date(lastChecked.getTime() + threeDaysInMillis);
    const formattedDate = `${scheduledDowngradeDate.getMonth() + 1}/${scheduledDowngradeDate.getDate()}/${scheduledDowngradeDate.getFullYear()}`;
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    if (show && active && isPendingDowngrade) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            "aria-live": "assertive",
            className: "pointer-events-none fixed inset-0 z-[100] flex min-w-80 items-end px-4 py-6 sm:items-start sm:p-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex w-full flex-col items-center space-y-4 sm:items-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "p-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                                className: "text-error h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "ml-3 w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                    className: "text-base font-medium text-slate-900",
                                                    children: t("common.pending_downgrade")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "mt-1 text-sm text-slate-500",
                                                    children: [
                                                        t("common.we_were_unable_to_verify_your_license_because_the_license_server_is_unreachable"),
                                                        ".",
                                                        " ",
                                                        isLastCheckedWithin72Hours ? t("common.you_will_be_downgraded_to_the_community_edition_on_date", {
                                                            date: formattedDate
                                                        }) : t("common.you_are_downgraded_to_the_community_edition")
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: `/environments/${environmentId}/settings/enterprise`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-sm text-slate-900",
                                                        children: t("common.learn_more")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "absolute right-0 top-0 ml-4 flex flex-shrink-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        className: "inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                        onClick: ()=>setShow(false),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "sr-only",
                                                children: t("common.close")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_TriangleAlertIcon_XIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
    return null;
};


/***/ }),

/***/ 493204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Switch auto */ 



const Switch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("peer inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Thumb */ .zi, {
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        })
    }));
Switch.displayName = _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL.displayName;



/***/ }),

/***/ 530519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UpgradePrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248852);
/* harmony import */ var _barrel_optimize_names_KeyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(178741);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const UpgradePrompt = ({ title, description, buttons })=>{
    const [primaryButton, secondaryButton] = buttons;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full flex-col items-center gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-md border border-slate-200 p-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_KeyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    className: "h-6 w-6 text-slate-900"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex max-w-[80%] flex-col items-center gap-2 text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "text-xl font-semibold text-slate-900",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "text-sm text-slate-500",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-3",
                children: [
                    primaryButton.href ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: primaryButton.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: primaryButton.text
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        onClick: primaryButton.onClick,
                        children: primaryButton.text
                    }),
                    secondaryButton.href ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        variant: "secondary",
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: secondaryButton.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: secondaryButton.text
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        variant: "secondary",
                        onClick: secondaryButton.onClick,
                        children: secondaryButton.text
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 100274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getAccessFlags)
/* harmony export */ });
const getAccessFlags = (role)=>{
    const isOwner = role === "owner";
    const isManager = role === "manager";
    const isBilling = role === "billing";
    const isMember = role === "member";
    return {
        isManager,
        isOwner,
        isBilling,
        isMember
    };
};


/***/ }),

/***/ 933166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aX: () => (/* binding */ getLatestStableFbReleaseAction),
/* harmony export */   bN: () => (/* binding */ getActiveInactiveSurveysAction),
/* harmony export */   gn: () => (/* binding */ updateActionClassAction),
/* harmony export */   ir: () => (/* binding */ deleteActionClassAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(972585);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48165);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(939483);
/* harmony import */ var _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(535526);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(207798);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f2431fc3b8c6c124a1868f9a0b34d77983cdb9649":"getLatestStableFbReleaseAction","7f24b3d27813511aef08364975a20983e61a3dde87":"getActiveInactiveSurveysAction","7f607ac975565ce495ac2952cf2bd35183ca9684ec":"updateActionClassAction","7f82763127a11eaaa934ce7fb0ffd1f148bfd60c06":"deleteActionClassAction"} */ 











const ZDeleteActionClassAction = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
    actionClassId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteActionClassAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZDeleteActionClassAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromActionClassId */ .sx)(parsedInput.actionClassId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromActionClassId */ .sD)(parsedInput.actionClassId)
            }
        ]
    });
    await (0,_formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_7__/* .deleteActionClass */ .kz)(parsedInput.actionClassId);
});
const ZUpdateActionClassAction = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
    actionClassId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4,
    updatedAction: _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_8__/* .ZActionClassInput */ .Lu
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateActionClassAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZUpdateActionClassAction).action(async ({ ctx, parsedInput })=>{
    const actionClass = await (0,_formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_7__/* .getActionClass */ .Bx)(parsedInput.actionClassId);
    if (actionClass === null) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_9__/* .ResourceNotFoundError */ .CE("ActionClass", parsedInput.actionClassId);
    }
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromActionClassId */ .sx)(parsedInput.actionClassId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromActionClassId */ .sD)(parsedInput.actionClassId)
            }
        ]
    });
    return await (0,_formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_7__/* .updateActionClass */ .Au)(actionClass.environmentId, parsedInput.actionClassId, parsedInput.updatedAction);
});
const ZGetActiveInactiveSurveysAction = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
    actionClassId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getActiveInactiveSurveysAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZGetActiveInactiveSurveysAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromActionClassId */ .sx)(parsedInput.actionClassId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "read",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromActionClassId */ .sD)(parsedInput.actionClassId)
            }
        ]
    });
    const surveys = await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__/* .getSurveysByActionClassId */ .sW)(parsedInput.actionClassId);
    const response = {
        activeSurveys: surveys.filter((s)=>s.status === "inProgress").map((survey)=>survey.name),
        inactiveSurveys: surveys.filter((s)=>s.status !== "inProgress").map((survey)=>survey.name)
    };
    return response;
});
const getLatestStableFbRelease = async ()=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_11__/* .cache */ .P)(async ()=>{
        try {
            const res = await fetch("https://api.github.com/repos/formbricks/formbricks/releases");
            const releases = await res.json();
            if (Array.isArray(releases)) {
                const latestStableReleaseTag = releases.filter((release)=>!release.prerelease)?.[0]?.tag_name;
                if (latestStableReleaseTag) {
                    return latestStableReleaseTag;
                }
            }
            return null;
        } catch (err) {
            return null;
        }
    }, [
        "latest-fb-release"
    ], {
        revalidate: 60 * 60 * 24
    })();
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getLatestStableFbReleaseAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.action(async ()=>{
    return await getLatestStableFbRelease();
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_12__/* .ensureServerEntryExports */ .D)([
    deleteActionClassAction,
    updateActionClassAction,
    getActiveInactiveSurveysAction,
    getLatestStableFbReleaseAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(deleteActionClassAction, "7f82763127a11eaaa934ce7fb0ffd1f148bfd60c06", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(updateActionClassAction, "7f607ac975565ce495ac2952cf2bd35183ca9684ec", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getActiveInactiveSurveysAction, "7f24b3d27813511aef08364975a20983e61a3dde87", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getLatestStableFbReleaseAction, "7f2431fc3b8c6c124a1868f9a0b34d77983cdb9649", null);


/***/ }),

/***/ 862063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call the default export of \"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/EnvironmentStorageHandler.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/EnvironmentStorageHandler.tsx",
"default",
));


/***/ }),

/***/ 562028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNavigation: () => (/* binding */ MainNavigation)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const MainNavigation = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call MainNavigation() from the server but MainNavigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/MainNavigation.tsx",
"MainNavigation",
);

/***/ }),

/***/ 886022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopControlButtons: () => (/* binding */ TopControlButtons)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const TopControlButtons = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call TopControlButtons() from the server but TopControlButtons is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/components/TopControlButtons.tsx",
"TopControlButtons",
);

/***/ }),

/***/ 830691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(891069);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/MainNavigation.tsx
var MainNavigation = __webpack_require__(562028);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/TopControlButtons.tsx
var TopControlButtons = __webpack_require__(886022);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
;// ./app/(app)/environments/[environmentId]/components/TopControlBar.tsx



const TopControlBar = ({ environment, environments, membershipRole, projectPermission })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "fixed inset-0 top-0 z-30 flex h-14 w-full items-center justify-end bg-slate-50 px-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "shadow-xs z-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex w-fit items-center space-x-2 py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TopControlButtons.TopControlButtons, {
                    environment: environment,
                    environments: environments,
                    isFormbricksCloud: constants/* IS_FORMBRICKS_CLOUD */.Si,
                    membershipRole: membershipRole,
                    projectPermission: projectPermission
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(532077);
// EXTERNAL MODULE: ./modules/ee/teams/lib/roles.ts
var roles = __webpack_require__(389846);
// EXTERNAL MODULE: ./modules/ui/components/dev-environment-banner/index.tsx
var dev_environment_banner = __webpack_require__(795648);
// EXTERNAL MODULE: ./modules/ui/components/limits-reached-banner/index.tsx
var limits_reached_banner = __webpack_require__(846408);
// EXTERNAL MODULE: ./modules/ui/components/pending-downgrade-banner/index.tsx
var pending_downgrade_banner = __webpack_require__(662050);
// EXTERNAL MODULE: ./tolgee/server.tsx + 2 modules
var server = __webpack_require__(186184);
// EXTERNAL MODULE: ../../packages/lib/environment/service.ts
var service = __webpack_require__(32135);
// EXTERNAL MODULE: ../../packages/lib/membership/service.ts
var membership_service = __webpack_require__(377968);
// EXTERNAL MODULE: ../../packages/lib/membership/utils.ts
var membership_utils = __webpack_require__(159570);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var project_service = __webpack_require__(529987);
// EXTERNAL MODULE: ../../packages/lib/user/service.ts
var user_service = __webpack_require__(184511);
;// ./app/(app)/environments/[environmentId]/components/EnvironmentLayout.tsx
















const EnvironmentLayout = async ({ environmentId, session, children })=>{
    const t = await (0,server/* getTranslate */.r)();
    const [user, environment, organizations, organization] = await Promise.all([
        (0,user_service/* getUser */.wz)(session.user.id),
        (0,service/* getEnvironment */.uc)(environmentId),
        (0,organization_service/* getOrganizationsByUserId */.s8)(session.user.id),
        (0,organization_service/* getOrganizationByEnvironmentId */.TK)(environmentId)
    ]);
    if (!user) {
        throw new Error(t("common.user_not_found"));
    }
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    if (!environment) {
        throw new Error(t("common.environment_not_found"));
    }
    const [projects, environments] = await Promise.all([
        (0,project_service/* getUserProjects */._P)(user.id, organization.id),
        (0,service/* getEnvironments */.DL)(environment.projectId)
    ]);
    if (!projects || !environments || !organizations) {
        throw new Error(t("environments.projects_environments_organizations_not_found"));
    }
    const currentUserMembership = await (0,membership_service/* getMembershipByUserIdOrganizationId */.Y)(session?.user.id, organization.id);
    const membershipRole = currentUserMembership?.role;
    const { isMember } = (0,membership_utils/* getAccessFlags */.c)(membershipRole);
    const { features, lastChecked, isPendingDowngrade, active } = await (0,utils/* getEnterpriseLicense */.Zd)();
    const projectPermission = await (0,roles/* getProjectPermissionByUserId */._)(session.user.id, environment.projectId);
    if (isMember && !projectPermission) {
        throw new Error(t("common.project_permission_not_found"));
    }
    const isMultiOrgEnabled = features?.isMultiOrgEnabled ?? false;
    let peopleCount = 0;
    let responseCount = 0;
    if (constants/* IS_FORMBRICKS_CLOUD */.Si) {
        [peopleCount, responseCount] = await Promise.all([
            (0,organization_service/* getMonthlyActiveOrganizationPeopleCount */.P$)(organization.id),
            (0,organization_service/* getMonthlyOrganizationResponseCount */.XU)(organization.id)
        ]);
    }
    const organizationProjectsLimit = await (0,utils/* getOrganizationProjectsLimit */.Df)(organization);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex h-screen min-h-screen flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dev_environment_banner.DevEnvironmentBanner, {
                environment: environment
            }),
            constants/* IS_FORMBRICKS_CLOUD */.Si && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(limits_reached_banner.LimitsReachedBanner, {
                organization: organization,
                environmentId: environment.id,
                peopleCount: peopleCount,
                responseCount: responseCount
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(pending_downgrade_banner.PendingDowngradeBanner, {
                lastChecked: lastChecked,
                isPendingDowngrade: isPendingDowngrade ?? false,
                active: active,
                environmentId: environment.id
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(MainNavigation.MainNavigation, {
                        environment: environment,
                        organization: organization,
                        organizations: organizations,
                        projects: projects,
                        organizationProjectsLimit: organizationProjectsLimit,
                        user: user,
                        isFormbricksCloud: constants/* IS_FORMBRICKS_CLOUD */.Si,
                        membershipRole: membershipRole,
                        isMultiOrgEnabled: isMultiOrgEnabled,
                        isLicenseActive: active
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        id: "mainContent",
                        className: "flex-1 overflow-y-auto bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TopControlBar, {
                                environment: environment,
                                environments: environments,
                                membershipRole: membershipRole,
                                projectPermission: projectPermission
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "mt-14",
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx
var ResponseFilterContext = __webpack_require__(319053);
// EXTERNAL MODULE: ./modules/auth/lib/authOptions.ts + 8 modules
var authOptions = __webpack_require__(136015);
// EXTERNAL MODULE: ./modules/ui/components/toaster-client/index.tsx
var toaster_client = __webpack_require__(300620);
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(963302);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.react-server.js
var navigation_react_server = __webpack_require__(145796);
// EXTERNAL MODULE: ../../packages/lib/environment/auth.ts
var auth = __webpack_require__(266640);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ./app/(app)/components/FormbricksClient.tsx
var FormbricksClient = __webpack_require__(921074);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/EnvironmentStorageHandler.tsx
var EnvironmentStorageHandler = __webpack_require__(862063);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/PosthogIdentify.tsx
var PosthogIdentify = __webpack_require__(776741);
;// ./app/(app)/environments/[environmentId]/layout.tsx

















const EnvLayout = async (props)=>{
    const params = await props.params;
    const { children } = props;
    const t = await (0,server/* getTranslate */.r)();
    const session = await (0,next_auth.getServerSession)(authOptions/* authOptions */.N);
    if (!session || !session.user) {
        return (0,navigation_react_server.redirect)(`/auth/login`);
    }
    const user = await (0,user_service/* getUser */.wz)(session.user.id);
    if (!user) {
        return (0,navigation_react_server.redirect)(`/auth/login`);
    }
    const hasAccess = await (0,auth/* hasUserEnvironmentAccess */.n)(session.user.id, params.environmentId);
    if (!hasAccess) {
        throw new errors/* AuthorizationError */.yi(t("common.not_authorized"));
    }
    const organization = await (0,organization_service/* getOrganizationByEnvironmentId */.TK)(params.environmentId);
    if (!organization) {
        throw new Error(t("common.organization_not_found"));
    }
    const project = await (0,project_service/* getProjectByEnvironmentId */.bq)(params.environmentId);
    if (!project) {
        throw new Error(t("common.project_not_found"));
    }
    const membership = await (0,membership_service/* getMembershipByUserIdOrganizationId */.Y)(session.user.id, organization.id);
    if (!membership) return (0,navigation_react_server.notFound)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ResponseFilterContext.ResponseFilterProvider, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PosthogIdentify.PosthogIdentify, {
                    session: session,
                    user: user,
                    environmentId: params.environmentId,
                    organizationId: organization.id,
                    organizationName: organization.name,
                    organizationBilling: organization.billing
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FormbricksClient.FormbricksClient, {
                    userId: user.id,
                    email: user.email
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(toaster_client.ToasterClient, {}),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EnvironmentStorageHandler["default"], {
                    environmentId: params.environmentId
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EnvironmentLayout, {
                    environmentId: params.environmentId,
                    session: session,
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const layout = (EnvLayout);


/***/ }),

/***/ 441215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ teamCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const teamCache = {
    tag: {
        byId (id) {
            return `team-${id}`;
        },
        byProjectId (projectId) {
            return `project-teams-${projectId}`;
        },
        byUserId (userId) {
            return `user-${userId}-teams`;
        },
        byOrganizationId (organizationId) {
            return `organization-${organizationId}-teams`;
        }
    },
    revalidate: ({ id, projectId, userId, organizationId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byId(id));
        }
        if (projectId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byProjectId(projectId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byUserId(userId));
        }
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(teamCache.tag.byOrganizationId(organizationId));
        }
    }
};


/***/ }),

/***/ 389846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getProjectPermissionByUserId)
/* harmony export */ });
/* unused harmony export getTeamRoleByTeamIdUserId */
/* harmony import */ var _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441215);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(794356);
/* harmony import */ var _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(823609);
/* harmony import */ var _formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860988);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(470641);










const getProjectPermissionByUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (userId, projectId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ], [
            projectId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZString */ .eI
        ]);
        try {
            const projectMemberships = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.projectTeam.findMany({
                where: {
                    projectId,
                    team: {
                        teamUsers: {
                            some: {
                                userId
                            }
                        }
                    }
                }
            });
            if (!projectMemberships) return null;
            let highestPermission = null;
            for (const membership of projectMemberships){
                if (membership.permission === "manage") {
                    highestPermission = "manage";
                } else if (membership.permission === "readWrite" && highestPermission !== "manage") {
                    highestPermission = "readWrite";
                } else if (membership.permission === "read" && highestPermission !== "manage" && highestPermission !== "readWrite") {
                    highestPermission = "read";
                }
            }
            return highestPermission;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .UnknownError */ .Bk("Error while fetching membership");
        }
    }, [
        `getProjectPermissionByUserId-${userId}-${projectId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byUserId(userId),
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byProjectId(projectId)
        ]
    })());
const getTeamRoleByTeamIdUserId = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async (teamId, userId)=>(0,_formbricks_lib_cache__WEBPACK_IMPORTED_MODULE_4__/* .cache */ .P)(async ()=>{
        (0,_formbricks_lib_utils_validate__WEBPACK_IMPORTED_MODULE_5__/* .validateInputs */ .C)([
            teamId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ], [
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_6__/* .ZId */ .i4
        ]);
        try {
            const teamUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ .z.teamUser.findUnique({
                where: {
                    teamId_userId: {
                        teamId,
                        userId
                    }
                }
            });
            if (!teamUser) {
                return null;
            }
            return teamUser.role;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getTeamMembershipByTeamIdUserId-${teamId}-${userId}`
    ], {
        tags: [
            _lib_cache_team__WEBPACK_IMPORTED_MODULE_0__/* .teamCache */ .g.tag.byId(teamId),
            _formbricks_lib_membership_cache__WEBPACK_IMPORTED_MODULE_8__/* .membershipCache */ .r.tag.byUserId(userId)
        ]
    })());


/***/ }),

/***/ 795648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevEnvironmentBanner: () => (/* binding */ DevEnvironmentBanner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const DevEnvironmentBanner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call DevEnvironmentBanner() from the server but DevEnvironmentBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/dev-environment-banner/index.tsx",
"DevEnvironmentBanner",
);

/***/ }),

/***/ 846408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LimitsReachedBanner: () => (/* binding */ LimitsReachedBanner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const LimitsReachedBanner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call LimitsReachedBanner() from the server but LimitsReachedBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/limits-reached-banner/index.tsx",
"LimitsReachedBanner",
);

/***/ }),

/***/ 662050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingDowngradeBanner: () => (/* binding */ PendingDowngradeBanner)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const PendingDowngradeBanner = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call PendingDowngradeBanner() from the server but PendingDowngradeBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/modules/ui/components/pending-downgrade-banner/index.tsx",
"PendingDowngradeBanner",
);

/***/ }),

/***/ 266640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ hasUserEnvironmentAccess)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(470641);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794356);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860988);







const hasUserEnvironmentAccess = async (userId, environmentId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ], [
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const orgMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.membership.findFirst({
                where: {
                    userId,
                    organization: {
                        projects: {
                            some: {
                                environments: {
                                    some: {
                                        id: environmentId
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (!orgMembership) return false;
            if (orgMembership.role === "owner" || orgMembership.role === "manager" || orgMembership.role === "billing") return true;
            const teamMembership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.teamUser.findFirst({
                where: {
                    userId,
                    team: {
                        projectTeams: {
                            some: {
                                project: {
                                    environments: {
                                        some: {
                                            id: environmentId
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (teamMembership) return true;
            return false;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_5__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `hasUserEnvironmentAccess-${userId}-${environmentId}`
    ], {
        tags: [
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byEnvironmentId(environmentId),
            _organization_cache__WEBPACK_IMPORTED_MODULE_6__/* .organizationCache */ .S.tag.byUserId(userId)
        ]
    })();


/***/ })

};
;