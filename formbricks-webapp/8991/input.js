exports.id = 8991;
exports.ids = [836,8991];
exports.modules = {

/***/ 93584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ AddFilterModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438624);
/* harmony import */ var _modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(383207);
/* harmony import */ var _modules_ui_components_tab_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(874653);
/* harmony import */ var _paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(489415);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(467562);
/* harmony import */ var _barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(236486);
/* harmony import */ var _barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(211119);
/* harmony import */ var _barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42738);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ AddFilterModal auto */ 








const handleAddFilter = ({ type, onAddFilter, setOpen, contactAttributeKey, deviceType, segmentId })=>{
    if (type === "attribute") {
        if (!contactAttributeKey) return;
        const newFilterResource = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            root: {
                type,
                contactAttributeKey
            },
            qualifier: {
                operator: "equals"
            },
            value: ""
        };
        const newFilter = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            connector: "and",
            resource: newFilterResource
        };
        onAddFilter(newFilter);
        setOpen(false);
    }
    if (type === "person") {
        const newResource = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            root: {
                type: "person",
                personIdentifier: "userId"
            },
            qualifier: {
                operator: "equals"
            },
            value: ""
        };
        const newFilter = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            connector: "and",
            resource: newResource
        };
        onAddFilter(newFilter);
        setOpen(false);
    }
    if (type === "segment") {
        if (!segmentId) return;
        const newFilter = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            connector: "and",
            resource: {
                id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
                root: {
                    type,
                    segmentId
                },
                qualifier: {
                    operator: "userIsIn"
                },
                value: segmentId
            }
        };
        onAddFilter(newFilter);
        setOpen(false);
    }
    if (type === "device") {
        if (!deviceType) return;
        const newFilter = {
            id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
            connector: "and",
            resource: {
                id: (0,_paralleldrive_cuid2__WEBPACK_IMPORTED_MODULE_4__/* .createId */ .sX)(),
                root: {
                    type,
                    deviceType
                },
                qualifier: {
                    operator: "equals"
                },
                value: deviceType
            }
        };
        onAddFilter(newFilter);
        setOpen(false);
    }
};
function AttributeTabContent({ contactAttributeKeys, onAddFilter, setOpen }) {
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        className: "text-base font-medium",
                        children: t("common.person")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                            onClick: ()=>{
                                handleAddFilter({
                                    type: "person",
                                    onAddFilter,
                                    setOpen
                                });
                            },
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleAddFilter({
                                        type: "person",
                                        onAddFilter,
                                        setOpen
                                    });
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                    className: "h-4 w-4"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: t("common.user_id")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
                className: "my-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: "text-base font-medium",
                    children: t("common.attributes")
                })
            }),
            contactAttributeKeys.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex w-full items-center justify-center gap-4 rounded-lg px-2 py-1 text-sm",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    children: t("environments.segments.no_attributes_yet")
                })
            }),
            contactAttributeKeys.map((attributeKey)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                    onClick: ()=>{
                        handleAddFilter({
                            type: "attribute",
                            onAddFilter,
                            setOpen,
                            contactAttributeKey: attributeKey.name ?? attributeKey.key
                        });
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                            className: "h-4 w-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            children: attributeKey.name ?? attributeKey.key
                        })
                    ]
                }, attributeKey.id);
            })
        ]
    });
}
function AddFilterModal({ onAddFilter, open, setOpen, contactAttributeKeys, segments }) {
    const [activeTabId, setActiveTabId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("all");
    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .WD)();
    const tabs = [
        {
            id: "all",
            label: t("common.all")
        },
        {
            id: "attributes",
            label: t("environments.segments.person_and_attributes"),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                className: "h-4 w-4"
            })
        },
        {
            id: "segments",
            label: t("common.segments"),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                className: "h-4 w-4"
            })
        },
        {
            id: "devices",
            label: t("environments.segments.devices"),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                className: "h-4 w-4"
            })
        }
    ];
    const devices = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>[
            {
                id: "phone",
                name: t("environments.segments.phone")
            },
            {
                id: "desktop",
                name: t("environments.segments.desktop")
            }
        ], []);
    const contactAttributeKeysFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!contactAttributeKeys) return [];
        if (!searchValue) return contactAttributeKeys;
        return contactAttributeKeys.filter((attributeKey)=>{
            const attributeValueToSeach = attributeKey.name ?? attributeKey.key;
            return attributeValueToSeach.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [
        contactAttributeKeys,
        searchValue
    ]);
    const contactAttributeFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        const contactAttributes = [
            {
                name: "userId"
            }
        ];
        return contactAttributes.filter((ca)=>ca.name.toLowerCase().includes(searchValue.toLowerCase()));
    }, [
        searchValue
    ]);
    const segmentsFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!segments) return [];
        if (!searchValue) return segments.filter((segment)=>!segment.isPrivate);
        return segments.filter((segment)=>!segment.isPrivate).filter((segment)=>segment.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [
        segments,
        searchValue
    ]);
    const deviceTypesFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (!searchValue) return devices;
        return devices.filter((deviceType)=>deviceType.name.toLowerCase().includes(searchValue.toLowerCase()));
    }, [
        devices,
        searchValue
    ]);
    const allFiltersFiltered = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>[
            {
                attributes: contactAttributeKeysFiltered,
                contactAttributeFiltered,
                segments: segmentsFiltered,
                devices: deviceTypesFiltered
            }
        ], [
        contactAttributeKeysFiltered,
        deviceTypesFiltered,
        contactAttributeFiltered,
        segmentsFiltered
    ]);
    const getAllTabContent = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                allFiltersFiltered.every((filterArr)=>{
                    return filterArr.attributes.length === 0 && filterArr.segments.length === 0 && filterArr.devices.length === 0 && filterArr.contactAttributeFiltered.length === 0;
                }) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex w-full items-center justify-center gap-4 rounded-lg px-2 py-1 text-sm",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: t("environments.segments.no_filters_yet")
                    })
                }) : null,
                allFiltersFiltered.map((filters, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            filters.attributes.map((attributeKey)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                                    onClick: ()=>{
                                        handleAddFilter({
                                            type: "attribute",
                                            onAddFilter,
                                            setOpen,
                                            contactAttributeKey: attributeKey.key
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                            className: "h-4 w-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            children: attributeKey.name ?? attributeKey.key
                                        })
                                    ]
                                });
                            }),
                            filters.contactAttributeFiltered.map((personAttribute)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                                    onClick: ()=>{
                                        handleAddFilter({
                                            type: "person",
                                            onAddFilter,
                                            setOpen
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                            className: "h-4 w-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            children: personAttribute.name
                                        })
                                    ]
                                });
                            }),
                            filters.segments.map((segment)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                                    onClick: ()=>{
                                        handleAddFilter({
                                            type: "segment",
                                            onAddFilter,
                                            setOpen,
                                            segmentId: segment.id
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                            className: "h-4 w-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            children: segment.title
                                        })
                                    ]
                                });
                            }),
                            filters.devices.map((deviceType)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                                    onClick: ()=>{
                                        handleAddFilter({
                                            type: "device",
                                            onAddFilter,
                                            setOpen,
                                            deviceType: deviceType.id
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                                            className: "h-4 w-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: deviceType.name
                                        })
                                    ]
                                }, deviceType.id))
                        ]
                    }, index);
                })
            ]
        });
    };
    const getAttributesTabContent = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AttributeTabContent, {
            contactAttributeKeys: contactAttributeKeysFiltered,
            onAddFilter: onAddFilter,
            setOpen: setOpen
        });
    };
    const getSegmentsTabContent = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                segmentsFiltered.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex w-full items-center justify-center gap-4 rounded-lg px-2 py-1 text-sm",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: t("environments.segments.no_segments_yet")
                    })
                }),
                segmentsFiltered.filter((segment)=>!segment.isPrivate).map((segment)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                        onClick: ()=>{
                            handleAddFilter({
                                type: "segment",
                                onAddFilter,
                                setOpen,
                                segmentId: segment.id
                            });
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                children: segment.title
                            })
                        ]
                    });
                })
            ]
        });
    };
    const getDevicesTabContent = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex flex-col",
            children: deviceTypesFiltered.map((deviceType)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex cursor-pointer items-center gap-4 rounded-lg px-2 py-1 text-sm hover:bg-slate-50",
                    onClick: ()=>{
                        handleAddFilter({
                            type: "device",
                            onAddFilter,
                            setOpen,
                            deviceType: deviceType.id
                        });
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FingerprintIcon_MonitorSmartphoneIcon_TagIcon_Users2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                            className: "h-4 w-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            children: deviceType.name
                        })
                    ]
                }, deviceType.id))
        });
    };
    const TabContent = ()=>{
        switch(activeTabId){
            case "all":
                {
                    return getAllTabContent();
                }
            case "attributes":
                {
                    return getAttributesTabContent();
                }
            case "segments":
                {
                    return getSegmentsTabContent();
                }
            case "devices":
                {
                    return getDevicesTabContent();
                }
            default:
                {
                    return getAllTabContent();
                }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .a, {
        className: "sm:w-[650px] sm:max-w-full",
        closeOnOutsideClick: true,
        hideCloseButton: true,
        open: open,
        setOpen: setOpen,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-auto flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_input__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .p, {
                        autoFocus: true,
                        onChange: (e)=>{
                            setSearchValue(e.target.value);
                        },
                        placeholder: "Browse filters..."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_tab_bar__WEBPACK_IMPORTED_MODULE_3__/* .TabBar */ .V, {
                        activeId: activeTabId,
                        className: "bg-white",
                        setActiveId: setActiveTabId,
                        tabs: tabs
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_11__.cn)("mt-2 flex max-h-80 flex-col gap-1 overflow-y-auto"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabContent, {})
            })
        ]
    });
}


/***/ }),

/***/ 781553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ SegmentEditor)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(489415);
;// ./modules/ee/contacts/segments/lib/utils.ts

// type guard to check if a resource is a filter
const isResourceFilter = (resource)=>{
    return resource.root !== undefined;
};
const convertOperatorToText = (operator)=>{
    switch(operator){
        case "equals":
            return "=";
        case "notEquals":
            return "!=";
        case "lessThan":
            return "<";
        case "lessEqual":
            return "<=";
        case "greaterThan":
            return ">";
        case "greaterEqual":
            return ">=";
        case "isSet":
            return "is set";
        case "isNotSet":
            return "is not set";
        case "contains":
            return "contains ";
        case "doesNotContain":
            return "does not contain";
        case "startsWith":
            return "starts with";
        case "endsWith":
            return "ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const convertOperatorToTitle = (operator)=>{
    switch(operator){
        case "equals":
            return "Equals";
        case "notEquals":
            return "Not equals to";
        case "lessThan":
            return "Less than";
        case "lessEqual":
            return "Less than or equal to";
        case "greaterThan":
            return "Greater than";
        case "greaterEqual":
            return "Greater than or equal to";
        case "isSet":
            return "Is set";
        case "isNotSet":
            return "Is not set";
        case "contains":
            return "Contains";
        case "doesNotContain":
            return "Does not contain";
        case "startsWith":
            return "Starts with";
        case "endsWith":
            return "Ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const addFilterBelow = (group, resourceId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            } else {
                addFilterBelow(resource, resourceId, filter);
            }
        }
    }
};
const createGroupFromResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const filters = group[i];
        if (isResourceFilter(filters.resource)) {
            if (filters.resource.id === resourceId) {
                const newGroupToAdd = {
                    id: (0,cuid2/* createId */.sX)(),
                    connector: filters.connector,
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, newGroupToAdd);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                // make an outer group, wrap the current group in it and add a filter below it
                const outerGroup = {
                    connector: filters.connector,
                    id: (0,cuid2/* createId */.sX)(),
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, outerGroup);
                break;
            } else {
                createGroupFromResource(filters.resource, resourceId);
            }
        }
    }
};
const moveResourceUp = (group, i)=>{
    if (i === 0) {
        return;
    }
    const previousTemp = group[i - 1];
    group[i - 1] = group[i];
    group[i] = previousTemp;
    if (i - 1 === 0) {
        const newConnector = group[i - 1].connector;
        group[i - 1].connector = null;
        group[i].connector = newConnector;
    }
};
const moveResourceDown = (group, i)=>{
    if (i === group.length - 1) {
        return;
    }
    const temp = group[i + 1];
    group[i + 1] = group[i];
    group[i] = temp;
    // after the swap, determine if the connector should be null or not
    if (i === 0) {
        const nextConnector = group[i].connector;
        group[i].connector = null;
        group[i + 1].connector = nextConnector;
    }
};
const moveResource = (group, resourceId, direction)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
        } else {
            if (group[i].id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
            moveResource(resource, resourceId, direction);
        }
    }
};
const deleteResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource) && resource.id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource) && group[i].id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource)) {
            deleteResource(resource, resourceId);
        }
    }
    // check and delete all empty groups
    deleteEmptyGroups(group);
};
const deleteEmptyGroups = (group)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource) && resource.length === 0) {
            group.splice(i, 1);
        } else if (!isResourceFilter(resource)) {
            deleteEmptyGroups(resource);
        }
    }
};
const addFilterInGroup = (group, groupId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            continue;
        } else {
            if (group[i].id === groupId) {
                const { resource } = group[i];
                if (!isResourceFilter(resource)) {
                    if (resource.length === 0) {
                        resource.push({
                            ...filter,
                            connector: null
                        });
                    } else {
                        resource.push(filter);
                    }
                }
                break;
            } else {
                addFilterInGroup(resource, groupId, filter);
            }
        }
    }
};
const toggleGroupConnector = (group, groupId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource)) {
            if (group[i].id === groupId) {
                group[i].connector = newConnectorValue;
                break;
            } else {
                toggleGroupConnector(resource, groupId, newConnectorValue);
            }
        }
    }
};
const toggleFilterConnector = (group, filterId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                group[i].connector = newConnectorValue;
            }
        } else {
            toggleFilterConnector(resource, filterId, newConnectorValue);
        }
    }
};
const updateOperatorInFilter = (group, filterId, newOperator)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.qualifier.operator = newOperator;
                break;
            }
        } else {
            updateOperatorInFilter(resource, filterId, newOperator);
        }
    }
};
const updateContactAttributeKeyInFilter = (group, filterId, newContactAttributeKey)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.contactAttributeKey = newContactAttributeKey;
                break;
            }
        } else {
            updateContactAttributeKeyInFilter(resource, filterId, newContactAttributeKey);
        }
    }
};
const updatePersonIdentifierInFilter = (group, filterId, newPersonIdentifier)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.personIdentifier = newPersonIdentifier;
            }
        } else {
            updatePersonIdentifierInFilter(resource, filterId, newPersonIdentifier);
        }
    }
};
const updateSegmentIdInFilter = (group, filterId, newSegmentId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.segmentId = newSegmentId;
                resource.value = newSegmentId;
                break;
            }
        } else {
            updateSegmentIdInFilter(resource, filterId, newSegmentId);
        }
    }
};
const updateFilterValue = (group, filterId, newValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.value = newValue;
                break;
            }
        } else {
            updateFilterValue(resource, filterId, newValue);
        }
    }
};
const updateDeviceTypeInFilter = (group, filterId, newDeviceType)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.deviceType = newDeviceType;
                resource.value = newDeviceType;
                break;
            }
        } else {
            updateDeviceTypeInFilter(resource, filterId, newDeviceType);
        }
    }
};
const formatSegmentDateFields = (segment)=>{
    if (typeof segment.createdAt === "string") {
        segment.createdAt = new Date(segment.createdAt);
    }
    if (typeof segment.updatedAt === "string") {
        segment.updatedAt = new Date(segment.updatedAt);
    }
    return segment;
};
const searchForAttributeKeyInSegment = (filters, attributeKey)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type === "attribute") {
                const { contactAttributeKey: key } = root;
                if (key === attributeKey) {
                    return true;
                }
            }
        } else {
            const found = searchForAttributeKeyInSegment(resource, attributeKey);
            if (found) {
                return true;
            }
        }
    }
    return false;
};
// check if a segment has a filter with "type" other than "attribute" or "person"
// if it does, this is an advanced segment
const isAdvancedSegment = (filters)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type !== "attribute" && type !== "person") {
                return true;
            }
        } else {
            // the resource is a group, so we don't need to recurse, we know that this is an advanced segment
            return true;
        }
    }
    return false;
};

// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(186902);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(438677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-down.js
var arrow_down = __webpack_require__(807920);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(800087);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ../../packages/lib/pollyfills/structuredClone.ts
var structuredClone = __webpack_require__(300189);
// EXTERNAL MODULE: ./modules/ee/contacts/segments/components/add-filter-modal.tsx
var add_filter_modal = __webpack_require__(93584);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ./modules/ui/components/select/index.tsx
var components_select = __webpack_require__(678372);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/tag.js
var tag = __webpack_require__(236486);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/fingerprint.js
var fingerprint = __webpack_require__(467562);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/users-round.js
var users_round = __webpack_require__(211119);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/monitor-smartphone.js
var monitor_smartphone = __webpack_require__(42738);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
// EXTERNAL MODULE: ../../packages/lib/utils/strings.ts
var strings = __webpack_require__(92018);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var types_segment = __webpack_require__(528469);
;// ./modules/ee/contacts/segments/components/segment-filter.tsx
/* __next_internal_client_entry_do_not_use__ SegmentFilter auto */ 














function SegmentFilterItemConnector({ connector, segment, setSegment, filterId, viewOnly }) {
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const updateLocalSurvey = (newConnector)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            toggleFilterConnector(updatedSegment.filters, filterId, newConnector);
        }
        setSegment(updatedSegment);
    };
    const onConnectorChange = ()=>{
        if (!connector) return;
        if (connector === "and") {
            updateLocalSurvey("or");
        } else {
            updateLocalSurvey("and");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-[40px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
            className: (0,cn.cn)(Boolean(connector) && "cursor-pointer underline", viewOnly && "cursor-not-allowed"),
            onClick: ()=>{
                if (viewOnly) return;
                onConnectorChange();
            },
            children: connector ? connector : t("environments.segments.where")
        })
    });
}
function SegmentFilterItemContextMenu({ filterId, onAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, viewOnly }) {
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                        disabled: viewOnly,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ellipsis_vertical/* default */.A, {
                            className: "h-4 w-4"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    onAddFilterBelow();
                                },
                                children: t("environments.segments.add_filter_below")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    onCreateGroup(filterId);
                                },
                                children: t("environments.segments.create_group")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    onMoveFilter(filterId, "up");
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_up/* default */.A, {
                                    className: "h-4 w-4"
                                }),
                                children: t("common.move_up")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                onClick: ()=>{
                                    onMoveFilter(filterId, "down");
                                },
                                icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_down/* default */.A, {
                                    className: "h-4 w-4"
                                }),
                                children: t("common.move_down")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                className: "mr-4 p-0",
                disabled: viewOnly,
                onClick: ()=>{
                    if (viewOnly) return;
                    onDeleteFilter(filterId);
                },
                variant: "ghost",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash_2/* default */.A, {
                    className: (0,cn.cn)("h-4 w-4 cursor-pointer", viewOnly && "cursor-not-allowed")
                })
            })
        ]
    });
}
function AttributeSegmentFilter({ connector, resource, onAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, updateValueInLocalSurvey, segment, setSegment, contactAttributeKeys, viewOnly }) {
    const { contactAttributeKey } = resource.root;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const operatorText = convertOperatorToText(resource.qualifier.operator);
    const [valueError, setValueError] = (0,react.useState)("");
    // when the operator changes, we need to check if the value is valid
    process.env.__NEXT_PRIVATE_MINIMIZE_MACRO_FALSE && (0,react.useEffect)(()=>{
        const { operator } = resource.qualifier;
        if (types_segment/* ARITHMETIC_OPERATORS */.ng.includes(operator)) {
            const isNumber = lib.z.coerce.number().safeParse(resource.value);
            if (isNumber.success) {
                setValueError("");
            } else {
                setValueError(t("environments.segments.value_must_be_a_number"));
            }
        }
    }, [
        resource.qualifier,
        resource.value
    ]);
    const operatorArr = types_segment/* ATTRIBUTE_OPERATORS */.XF.map((operator)=>{
        return {
            id: operator,
            name: convertOperatorToText(operator)
        };
    });
    const attributeKey = contactAttributeKeys.find((attrKey)=>attrKey.key === contactAttributeKey);
    const attrKeyValue = attributeKey?.name ?? attributeKey?.key ?? "";
    const updateOperatorInLocalSurvey = (filterId, newOperator)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateOperatorInFilter(updatedSegment.filters, filterId, newOperator);
        }
        setSegment(updatedSegment);
    };
    const updateAttributeClassNameInLocalSurvey = (filterId, newAttributeClassName)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateContactAttributeKeyInFilter(updatedSegment.filters, filterId, newAttributeClassName);
        }
        setSegment(updatedSegment);
    };
    const checkValueAndUpdate = (e)=>{
        const { value } = e.target;
        updateValueInLocalSurvey(resource.id, value);
        if (!value) {
            setValueError(t("environments.segments.value_cannot_be_empty"));
            return;
        }
        const { operator } = resource.qualifier;
        if (types_segment/* ARITHMETIC_OPERATORS */.ng.includes(operator)) {
            const isNumber = lib.z.coerce.number().safeParse(value);
            if (isNumber.success) {
                setValueError("");
                updateValueInLocalSurvey(resource.id, parseInt(value, 10));
            } else {
                setValueError(t("environments.segments.value_must_be_a_number"));
                updateValueInLocalSurvey(resource.id, value);
            }
            return;
        }
        setValueError("");
        updateValueInLocalSurvey(resource.id, value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2 text-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemConnector, {
                connector: connector,
                filterId: resource.id,
                segment: segment,
                setSegment: setSegment,
                viewOnly: viewOnly
            }, connector),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (value)=>{
                    updateAttributeClassNameInLocalSurvey(resource.id, value);
                },
                value: attrKeyValue,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center whitespace-nowrap bg-white capitalize",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: (0,cn.cn)("flex items-center gap-2", !(0,strings/* isCapitalized */.PH)(attrKeyValue ?? "") && "lowercase"),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tag/* default */.A, {
                                        className: "h-4 w-4 text-sm"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        children: attrKeyValue
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: contactAttributeKeys.map((attrClass)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                value: attrClass.key,
                                children: attrClass.name
                            }, attrClass.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (operator)=>{
                    updateOperatorInLocalSurvey(resource.id, operator);
                },
                value: operatorText,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center bg-white text-center",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                children: operatorText
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: operatorArr.map((operator)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                title: convertOperatorToTitle(operator.id),
                                value: operator.id,
                                children: operator.name
                            }, operator.id))
                    })
                ]
            }),
            ![
                "isSet",
                "isNotSet"
            ].includes(resource.qualifier.operator) && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                        className: (0,cn.cn)("w-auto bg-white", valueError && "border border-red-500 focus:border-red-500"),
                        disabled: viewOnly,
                        onChange: (e)=>{
                            if (viewOnly) return;
                            checkValueAndUpdate(e);
                        },
                        value: resource.value
                    }),
                    valueError ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "absolute right-2 -mt-1 rounded-md bg-white px-2 text-xs text-red-500",
                        children: valueError
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemContextMenu, {
                filterId: resource.id,
                onAddFilterBelow: onAddFilterBelow,
                onCreateGroup: onCreateGroup,
                onDeleteFilter: onDeleteFilter,
                onMoveFilter: onMoveFilter,
                viewOnly: viewOnly
            })
        ]
    });
}
function PersonSegmentFilter({ connector, resource, onAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, updateValueInLocalSurvey, segment, setSegment, viewOnly }) {
    const { personIdentifier } = resource.root;
    const operatorText = convertOperatorToText(resource.qualifier.operator);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [valueError, setValueError] = (0,react.useState)("");
    // when the operator changes, we need to check if the value is valid
    process.env.__NEXT_PRIVATE_MINIMIZE_MACRO_FALSE && (0,react.useEffect)(()=>{
        const { operator } = resource.qualifier;
        if (types_segment/* ARITHMETIC_OPERATORS */.ng.includes(operator)) {
            const isNumber = lib.z.coerce.number().safeParse(resource.value);
            if (isNumber.success) {
                setValueError("");
            } else {
                setValueError(t("environments.segments.value_must_be_a_number"));
            }
        }
    }, [
        resource.qualifier,
        resource.value
    ]);
    const operatorArr = types_segment/* PERSON_OPERATORS */.wW.map((operator)=>{
        return {
            id: operator,
            name: convertOperatorToText(operator)
        };
    });
    const updateOperatorInLocalSurvey = (filterId, newOperator)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateOperatorInFilter(updatedSegment.filters, filterId, newOperator);
        }
        setSegment(updatedSegment);
    };
    const updatePersonIdentifierInLocalSurvey = (filterId, newPersonIdentifier)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updatePersonIdentifierInFilter(updatedSegment.filters, filterId, newPersonIdentifier);
        }
        setSegment(updatedSegment);
    };
    const checkValueAndUpdate = (e)=>{
        const { value } = e.target;
        updateValueInLocalSurvey(resource.id, value);
        if (!value) {
            setValueError(t("environments.segments.value_cannot_be_empty"));
            return;
        }
        const { operator } = resource.qualifier;
        if (types_segment/* ARITHMETIC_OPERATORS */.ng.includes(operator)) {
            const isNumber = lib.z.coerce.number().safeParse(value);
            if (isNumber.success) {
                setValueError("");
                updateValueInLocalSurvey(resource.id, parseInt(value, 10));
            } else {
                setValueError(t("environments.segments.value_must_be_a_number"));
                updateValueInLocalSurvey(resource.id, value);
            }
            return;
        }
        setValueError("");
        updateValueInLocalSurvey(resource.id, value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2 text-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemConnector, {
                connector: connector,
                filterId: resource.id,
                segment: segment,
                setSegment: setSegment,
                viewOnly: viewOnly
            }, connector),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (value)=>{
                    updatePersonIdentifierInLocalSurvey(resource.id, value);
                },
                value: personIdentifier,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center whitespace-nowrap bg-white capitalize",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-1 lowercase",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(fingerprint/* default */.A, {
                                        className: "h-4 w-4 text-sm"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        children: personIdentifier
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                            value: personIdentifier,
                            children: personIdentifier
                        }, personIdentifier)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (operator)=>{
                    updateOperatorInLocalSurvey(resource.id, operator);
                },
                value: operatorText,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center bg-white text-center",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                children: operatorText
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: operatorArr.map((operator)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                title: convertOperatorToTitle(operator.id),
                                value: operator.id,
                                children: operator.name
                            }))
                    })
                ]
            }),
            ![
                "isSet",
                "isNotSet"
            ].includes(resource.qualifier.operator) && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                        className: (0,cn.cn)("w-auto bg-white", valueError && "border border-red-500 focus:border-red-500"),
                        disabled: viewOnly,
                        onChange: (e)=>{
                            if (viewOnly) return;
                            checkValueAndUpdate(e);
                        },
                        value: resource.value
                    }),
                    valueError ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "absolute right-2 -mt-1 rounded-md bg-white px-2 text-xs text-red-500",
                        children: valueError
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemContextMenu, {
                filterId: resource.id,
                onAddFilterBelow: onAddFilterBelow,
                onCreateGroup: onCreateGroup,
                onDeleteFilter: onDeleteFilter,
                onMoveFilter: onMoveFilter,
                viewOnly: viewOnly
            })
        ]
    });
}
function SegmentSegmentFilter({ connector, onAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, resource, segment, segments, setSegment, viewOnly }) {
    const { segmentId } = resource.root;
    const operatorText = convertOperatorToText(resource.qualifier.operator);
    const currentSegment = segments.find((segment)=>segment.id === segmentId);
    const updateOperatorInSegment = (filterId, newOperator)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateOperatorInFilter(updatedSegment.filters, filterId, newOperator);
        }
        setSegment(updatedSegment);
    };
    const updateSegmentIdInSegment = (filterId, newSegmentId)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateSegmentIdInFilter(updatedSegment.filters, filterId, newSegmentId);
        }
        setSegment(updatedSegment);
    };
    const toggleSegmentOperator = ()=>{
        if (!resource.qualifier.operator) return;
        if (resource.qualifier.operator === "userIsIn") {
            updateOperatorInSegment(resource.id, "userIsNotIn");
            return;
        }
        updateOperatorInSegment(resource.id, "userIsIn");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2 text-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemConnector, {
                connector: connector,
                filterId: resource.id,
                segment: segment,
                setSegment: setSegment,
                viewOnly: viewOnly
            }, connector),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                    className: (0,cn.cn)("cursor-pointer underline", viewOnly && "cursor-not-allowed"),
                    onClick: ()=>{
                        if (viewOnly) return;
                        toggleSegmentOperator();
                    },
                    children: operatorText
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (value)=>{
                    updateSegmentIdInSegment(resource.id, value);
                },
                value: currentSegment?.id,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center whitespace-nowrap bg-white capitalize",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(users_round/* default */.A, {
                                    className: "h-4 w-4 text-sm"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: segments.filter((segment)=>!segment.isPrivate).map((segment)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                value: segment.id,
                                children: segment.title
                            }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemContextMenu, {
                filterId: resource.id,
                onAddFilterBelow: onAddFilterBelow,
                onCreateGroup: onCreateGroup,
                onDeleteFilter: onDeleteFilter,
                onMoveFilter: onMoveFilter,
                viewOnly: viewOnly
            })
        ]
    });
}
function DeviceFilter({ connector, onAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, resource, segment, setSegment, viewOnly }) {
    const { value } = resource;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const operatorText = convertOperatorToText(resource.qualifier.operator);
    const operatorArr = types_segment/* DEVICE_OPERATORS */.VG.map((operator)=>({
            id: operator,
            name: convertOperatorToText(operator)
        }));
    const updateOperatorInSegment = (filterId, newOperator)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateOperatorInFilter(updatedSegment.filters, filterId, newOperator);
        }
        setSegment(updatedSegment);
    };
    const updateValueInSegment = (filterId, newValue)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateDeviceTypeInFilter(updatedSegment.filters, filterId, newValue);
        }
        setSegment(updatedSegment);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2 text-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemConnector, {
                connector: connector,
                filterId: resource.id,
                segment: segment,
                setSegment: setSegment,
                viewOnly: viewOnly
            }, connector),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(monitor_smartphone/* default */.A, {
                        className: "h-4 w-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        children: "Device"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (operator)=>{
                    updateOperatorInSegment(resource.id, operator);
                },
                value: operatorText,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto max-w-[40px] items-center justify-center bg-white text-center",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                children: operatorText
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: operatorArr.map((operator)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                value: operator.id,
                                children: operator.name
                            }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_select/* Select */.l6, {
                disabled: viewOnly,
                onValueChange: (value)=>{
                    updateValueInSegment(resource.id, value);
                },
                value: value,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectTrigger */.bq, {
                        className: "flex w-auto items-center justify-center bg-white text-center",
                        hideArrow: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectValue */.yv, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectContent */.gC, {
                        children: [
                            {
                                id: "desktop",
                                name: t("environments.segments.desktop")
                            },
                            {
                                id: "phone",
                                name: t("environments.segments.phone")
                            }
                        ].map((operator)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_select/* SelectItem */.eb, {
                                value: operator.id,
                                children: operator.name
                            }))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilterItemContextMenu, {
                filterId: resource.id,
                onAddFilterBelow: onAddFilterBelow,
                onCreateGroup: onCreateGroup,
                onDeleteFilter: onDeleteFilter,
                onMoveFilter: onMoveFilter,
                viewOnly: viewOnly
            })
        ]
    });
}
function SegmentFilter({ resource, connector, environmentId, segment, segments, contactAttributeKeys, setSegment, handleAddFilterBelow, onCreateGroup, onDeleteFilter, onMoveFilter, viewOnly = false }) {
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [addFilterModalOpen, setAddFilterModalOpen] = (0,react.useState)(false);
    const updateFilterValueInSegment = (filterId, newValue)=>{
        const updatedSegment = (0,structuredClone/* structuredClone */.p)(segment);
        if (updatedSegment.filters) {
            updateFilterValue(updatedSegment.filters, filterId, newValue);
        }
        setSegment(updatedSegment);
    };
    const onAddFilterBelow = ()=>{
        setAddFilterModalOpen(true);
    };
    function RenderFilterModal() {
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(add_filter_modal/* AddFilterModal */.b, {
            contactAttributeKeys: contactAttributeKeys,
            onAddFilter: (filter)=>{
                handleAddFilterBelow(resource.id, filter);
            },
            open: addFilterModalOpen,
            segments: segments,
            setOpen: setAddFilterModalOpen
        });
    }
    switch(resource.root.type){
        case "attribute":
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(AttributeSegmentFilter, {
                        contactAttributeKeys: contactAttributeKeys,
                        connector: connector,
                        environmentId: environmentId,
                        handleAddFilterBelow: handleAddFilterBelow,
                        onAddFilterBelow: onAddFilterBelow,
                        onCreateGroup: onCreateGroup,
                        onDeleteFilter: onDeleteFilter,
                        onMoveFilter: onMoveFilter,
                        resource: resource,
                        segment: segment,
                        segments: segments,
                        setSegment: setSegment,
                        updateValueInLocalSurvey: updateFilterValueInSegment,
                        viewOnly: viewOnly
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderFilterModal, {})
                ]
            });
        case "person":
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PersonSegmentFilter, {
                        contactAttributeKeys: contactAttributeKeys,
                        connector: connector,
                        environmentId: environmentId,
                        handleAddFilterBelow: handleAddFilterBelow,
                        onAddFilterBelow: onAddFilterBelow,
                        onCreateGroup: onCreateGroup,
                        onDeleteFilter: onDeleteFilter,
                        onMoveFilter: onMoveFilter,
                        resource: resource,
                        segment: segment,
                        segments: segments,
                        setSegment: setSegment,
                        updateValueInLocalSurvey: updateFilterValueInSegment,
                        viewOnly: viewOnly
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderFilterModal, {})
                ]
            });
        case "segment":
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentSegmentFilter, {
                        contactAttributeKeys: contactAttributeKeys,
                        connector: connector,
                        environmentId: environmentId,
                        handleAddFilterBelow: handleAddFilterBelow,
                        onAddFilterBelow: onAddFilterBelow,
                        onCreateGroup: onCreateGroup,
                        onDeleteFilter: onDeleteFilter,
                        onMoveFilter: onMoveFilter,
                        resource: resource,
                        segment: segment,
                        segments: segments,
                        setSegment: setSegment,
                        viewOnly: viewOnly
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderFilterModal, {})
                ]
            });
        case "device":
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(DeviceFilter, {
                        contactAttributeKeys: contactAttributeKeys,
                        connector: connector,
                        environmentId: environmentId,
                        handleAddFilterBelow: handleAddFilterBelow,
                        onAddFilterBelow: onAddFilterBelow,
                        onCreateGroup: onCreateGroup,
                        onDeleteFilter: onDeleteFilter,
                        onMoveFilter: onMoveFilter,
                        resource: resource,
                        segment: segment,
                        segments: segments,
                        setSegment: setSegment,
                        viewOnly: viewOnly
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderFilterModal, {})
                ]
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                children: t("environments.segments.unknown_filter_type")
            });
    }
}

;// ./modules/ee/contacts/segments/components/segment-editor.tsx
/* __next_internal_client_entry_do_not_use__ SegmentEditor auto */ 










function SegmentEditor({ group, environmentId, setSegment, segment, contactAttributeKeys, segments, viewOnly = false }) {
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [addFilterModalOpen, setAddFilterModalOpen] = (0,react.useState)(false);
    const [addFilterModalOpenedFromBelow, setAddFilterModalOpenedFromBelow] = (0,react.useState)(false);
    const handleAddFilterBelow = (resourceId, filter)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            addFilterBelow(localSegmentCopy.filters, resourceId, filter);
        }
        setSegment(localSegmentCopy);
    };
    const handleCreateGroup = (resourceId)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            createGroupFromResource(localSegmentCopy.filters, resourceId);
        }
        setSegment(localSegmentCopy);
    };
    const handleMoveResource = (resourceId, direction)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            moveResource(localSegmentCopy.filters, resourceId, direction);
        }
        setSegment(localSegmentCopy);
    };
    const handleDeleteResource = (resourceId)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            deleteResource(localSegmentCopy.filters, resourceId);
        }
        setSegment(localSegmentCopy);
    };
    const handleToggleGroupConnector = (groupId, newConnectorValue)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            toggleGroupConnector(localSegmentCopy.filters, groupId, newConnectorValue);
        }
        setSegment(localSegmentCopy);
    };
    const onConnectorChange = (groupId, connector)=>{
        if (!connector) return;
        if (connector === "and") {
            handleToggleGroupConnector(groupId, "or");
        } else {
            handleToggleGroupConnector(groupId, "and");
        }
    };
    const handleAddFilterInGroup = (groupId, filter)=>{
        const localSegmentCopy = (0,structuredClone/* structuredClone */.p)(segment);
        if (localSegmentCopy.filters) {
            addFilterInGroup(localSegmentCopy.filters, groupId, filter);
        }
        setSegment(localSegmentCopy);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "flex flex-col gap-4 rounded-lg",
        children: group.map((groupItem)=>{
            const { connector, resource, id: groupId } = groupItem;
            if (isResourceFilter(resource)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentFilter, {
                    contactAttributeKeys: contactAttributeKeys,
                    connector: connector,
                    environmentId: environmentId,
                    handleAddFilterBelow: handleAddFilterBelow,
                    onCreateGroup: (filterId)=>{
                        handleCreateGroup(filterId);
                    },
                    onDeleteFilter: (filterId)=>{
                        handleDeleteResource(filterId);
                    },
                    onMoveFilter: (filterId, direction)=>{
                        handleMoveResource(filterId, direction);
                    },
                    resource: resource,
                    segment: segment,
                    segments: segments,
                    setSegment: setSegment,
                    viewOnly: viewOnly
                }, groupId);
            }
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "w-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                className: (0,cn.cn)(Boolean(connector) && "cursor-pointer underline", "text-sm", viewOnly && "cursor-not-allowed"),
                                onClick: ()=>{
                                    if (viewOnly) return;
                                    onConnectorChange(groupId, connector);
                                },
                                children: connector ? connector : t("environments.segments.where")
                            })
                        }, connector),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "rounded-lg border-2 border-slate-300 bg-white p-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SegmentEditor, {
                                    contactAttributeKeys: contactAttributeKeys,
                                    environmentId: environmentId,
                                    group: resource,
                                    segment: segment,
                                    segments: segments,
                                    setSegment: setSegment,
                                    viewOnly: viewOnly
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                        disabled: viewOnly,
                                        onClick: ()=>{
                                            if (viewOnly) return;
                                            setAddFilterModalOpen(true);
                                        },
                                        size: "sm",
                                        variant: "secondary",
                                        children: t("common.add_filter")
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(add_filter_modal/* AddFilterModal */.b, {
                                    contactAttributeKeys: contactAttributeKeys,
                                    onAddFilter: (filter)=>{
                                        if (addFilterModalOpenedFromBelow) {
                                            handleAddFilterBelow(groupId, filter);
                                            setAddFilterModalOpenedFromBelow(false);
                                        } else {
                                            handleAddFilterInGroup(groupId, filter);
                                        }
                                    },
                                    open: addFilterModalOpen,
                                    segments: segments,
                                    setOpen: setAddFilterModalOpen
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2 p-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                                            disabled: viewOnly,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ellipsis_vertical/* default */.A, {
                                                className: "h-4 w-4"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                    onClick: ()=>{
                                                        setAddFilterModalOpenedFromBelow(true);
                                                        setAddFilterModalOpen(true);
                                                    },
                                                    children: t("environments.segments.add_filter_below")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                    onClick: ()=>{
                                                        handleCreateGroup(groupId);
                                                    },
                                                    children: t("environments.segments.create_group")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                    onClick: ()=>{
                                                        handleMoveResource(groupId, "up");
                                                    },
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_up/* default */.A, {
                                                        className: "h-4 w-4"
                                                    }),
                                                    children: t("common.move_up")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                                                    onClick: ()=>{
                                                        if (viewOnly) return;
                                                        handleMoveResource(groupId, "down");
                                                    },
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(arrow_down/* default */.A, {
                                                        className: "h-4 w-4"
                                                    }),
                                                    children: t("common.move_down")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                    className: "p-0",
                                    disabled: viewOnly,
                                    onClick: ()=>{
                                        if (viewOnly) return;
                                        handleDeleteResource(groupId);
                                    },
                                    variant: "ghost",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash_2/* default */.A, {
                                        className: (0,cn.cn)("h-4 w-4 cursor-pointer", viewOnly && "cursor-not-allowed")
                                    })
                                })
                            ]
                        })
                    ]
                })
            }, groupId);
        })
    });
}


/***/ }),

/***/ 980933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ModalWithTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(383207);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ModalWithTabs = ({ open, setOpen, tabs, icon, label, description, closeOnOutsideClick, size = "lg", restrictOverflow = false })=>{
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleTabClick = (index)=>{
        setActiveTab(index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!open) {
            setActiveTab(0);
        }
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .a, {
        open: open,
        setOpen: setOpen,
        noPadding: true,
        closeOnOutsideClick: closeOnOutsideClick,
        size: size,
        restrictOverflow: restrictOverflow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full flex-col rounded-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "rounded-t-lg bg-slate-100",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "mr-20 flex items-center justify-between truncate p-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "mr-1.5 h-6 w-6 text-slate-500",
                                    children: icon
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-xl font-medium text-slate-700",
                                            children: label
                                        }),
                                        description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-sm text-slate-500",
                                            children: description
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center space-x-2 border-b border-slate-200 px-6",
                    children: tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                            className: `mr-4 px-1 pb-3 pt-6 focus:outline-none ${activeTab === index ? "border-brand-dark border-b-2 font-semibold text-slate-900" : "text-slate-500 hover:text-slate-700"}`,
                            onClick: ()=>handleTabClick(index),
                            children: tab.title
                        }, index))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex-1 p-6",
                    children: tabs[activeTab].children
                })
            ]
        })
    });
};


/***/ }),

/***/ 678372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bq: () => (/* binding */ SelectTrigger),
/* harmony export */   eb: () => (/* binding */ SelectItem),
/* harmony export */   gC: () => (/* binding */ SelectContent),
/* harmony export */   l6: () => (/* binding */ Select),
/* harmony export */   s3: () => (/* binding */ SelectGroup),
/* harmony export */   yv: () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectLabel, SelectSeparator */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750408);
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(668382);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectSeparator,SelectTrigger,SelectValue auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .YJ;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Value */ .WT;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, hideArrow, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-slate-400", className),
        ...props,
        children: [
            children,
            !hideArrow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "h-4 w-4 opacity-50"
            }) : null
        ]
    }));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .l9.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .ZL, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md dark:bg-slate-700 dark:text-slate-300", className),
            ...props,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .LM, {
                className: "p-1",
                children: children
            })
        })
    }));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-200", className),
        ...props
    }));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .JU.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-2 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemText */ .p4, {
            children: children
        })
    }));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-slate-100", className),
        ...props
    }));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .wv.displayName;



/***/ }),

/***/ 874653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ TabBar auto */ 

const TabBar = ({ tabs, activeId, setActiveId, className = "", activeTabClassName, tabStyle = "bar", disabled = false })=>{
    const Nav = ()=>{
        if (tabStyle === "bar") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                className: "flex h-full items-center space-x-4",
                "aria-label": "Tabs",
                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>setActiveId(tab.id),
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(tab.id === activeId ? `border-brand-dark border-b-2 font-semibold text-slate-900 ${activeTabClassName}` : "text-slate-500 hover:text-slate-700", "flex h-full items-center px-3 text-sm font-medium"),
                        "aria-current": tab.id === activeId ? "page" : undefined,
                        children: [
                            tab.icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex h-5 w-5 items-center",
                                children: tab.icon
                            }),
                            tab.label
                        ]
                    }, tab.id))
            });
        }
        if (tabStyle === "button") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-full w-full flex-1 items-center space-x-4", disabled ? "cursor-not-allowed opacity-50" : ""),
                "aria-label": "Tabs",
                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex h-full flex-1 justify-center px-3 py-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                            onClick: ()=>!disabled && setActiveId(tab.id),
                            type: "button",
                            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(tab.id === activeId ? `bg-white font-semibold text-slate-900 ${activeTabClassName}` : "text-slate-500", "h-full w-full items-center rounded-lg text-center text-sm font-medium", disabled ? "cursor-not-allowed" : "hover:text-slate-700"),
                            "aria-current": tab.id === activeId ? "page" : undefined,
                            children: tab.label
                        })
                    }, tab.id))
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-14 w-full items-center justify-center rounded-t-md bg-slate-100", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Nav, {})
    });
};


/***/ }),

/***/ 807920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowDown", [
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

/***/ 438677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowUp)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowUp", [
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

/***/ 217626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Filter = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
 //# sourceMappingURL=filter.js.map


/***/ }),

/***/ 467562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Fingerprint)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Fingerprint = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Fingerprint", [
    [
        "path",
        {
            d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
            key: "1nerag"
        }
    ],
    [
        "path",
        {
            d: "M14 13.12c0 2.38 0 6.38-1 8.88",
            key: "o46ks0"
        }
    ],
    [
        "path",
        {
            d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
            key: "ptglia"
        }
    ],
    [
        "path",
        {
            d: "M2 12a10 10 0 0 1 18-6",
            key: "ydlgp0"
        }
    ],
    [
        "path",
        {
            d: "M2 16h.01",
            key: "1gqxmh"
        }
    ],
    [
        "path",
        {
            d: "M21.8 16c.2-2 .131-5.354 0-6",
            key: "drycrb"
        }
    ],
    [
        "path",
        {
            d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
            key: "1tidbn"
        }
    ],
    [
        "path",
        {
            d: "M8.65 22c.21-.66.45-1.32.57-2",
            key: "13wd9y"
        }
    ],
    [
        "path",
        {
            d: "M9 6.8a6 6 0 0 1 9 5.2v2",
            key: "1fr1j5"
        }
    ]
]);
 //# sourceMappingURL=fingerprint.js.map


/***/ }),

/***/ 42738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MonitorSmartphone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MonitorSmartphone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MonitorSmartphone", [
    [
        "path",
        {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
            key: "10dyio"
        }
    ],
    [
        "path",
        {
            d: "M10 19v-3.96 3.15",
            key: "1irgej"
        }
    ],
    [
        "path",
        {
            d: "M7 19h5",
            key: "qswx4l"
        }
    ],
    [
        "rect",
        {
            width: "6",
            height: "10",
            x: "16",
            y: "12",
            rx: "2",
            key: "1egngj"
        }
    ]
]);
 //# sourceMappingURL=monitor-smartphone.js.map


/***/ }),

/***/ 211119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UsersRound)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UsersRound = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("UsersRound", [
    [
        "path",
        {
            d: "M18 21a8 8 0 0 0-16 0",
            key: "3ypg7q"
        }
    ],
    [
        "circle",
        {
            cx: "10",
            cy: "8",
            r: "5",
            key: "o932ke"
        }
    ],
    [
        "path",
        {
            d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
            key: "10s06x"
        }
    ]
]);
 //# sourceMappingURL=users-round.js.map


/***/ }),

/***/ 775453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ convertDateString),
/* harmony export */   Yq: () => (/* binding */ formatDate),
/* harmony export */   _D: () => (/* binding */ timeSince),
/* harmony export */   oS: () => (/* binding */ timeSinceDate),
/* harmony export */   qb: () => (/* binding */ convertDateTimeStringShort)
/* harmony export */ });
/* unused harmony exports convertDateTimeString, convertTimeString, getTodaysDateFormatted, getTodaysDateTimeFormatted, convertDatesInObject */
/* harmony import */ var _barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527348);
/* harmony import */ var _barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15056);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154445);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119472);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(907374);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144208);


const convertDateString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }, {
        locale: "en"
    });
};
const convertDateTimeString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return intlFormat(date, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertDateTimeStringShort = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertTimeString = (dateString)=>{
    const date = new Date(dateString);
    return intlFormat(date, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }, {
        locale: "en"
    });
};
const getLocaleForTimeSince = (locale)=>{
    switch(locale){
        case "de-DE":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_1__.de;
        case "en-US":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ .c;
        case "pt-BR":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_3__/* .ptBR */ .F;
        case "fr-FR":
            return date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.fr;
    }
};
const timeSince = (dateString, locale)=>{
    const date = new Date(dateString);
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__/* .formatDistance */ .B)(date, new Date(), {
        addSuffix: true,
        locale: getLocaleForTimeSince(locale)
    });
};
const timeSinceDate = (date)=>{
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_5__/* .formatDistance */ .B)(date, new Date(), {
        addSuffix: true
    });
};
const formatDate = (date)=>{
    return (0,_barrel_optimize_names_formatDistance_intlFormat_date_fns__WEBPACK_IMPORTED_MODULE_0__/* .intlFormat */ .b)(date, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
const getTodaysDateFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    return formattedDate;
};
const getTodaysDateTimeFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    const formattedTime = date.toTimeString().split(" ")[0].split(":").join(seperator);
    return [
        formattedDate,
        formattedTime
    ].join(seperator);
};
const convertDatesInObject = (obj)=>{
    if (obj === null || typeof obj !== "object") {
        return obj; // Return if obj is not an object
    }
    if (Array.isArray(obj)) {
        // Handle arrays by mapping each element through the function
        return obj.map((item)=>convertDatesInObject(item));
    }
    const newObj = {};
    for(const key in obj){
        if ((key === "createdAt" || key === "updatedAt") && typeof obj[key] === "string" && !isNaN(Date.parse(obj[key]))) {
            newObj[key] = new Date(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = convertDatesInObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};


/***/ }),

/***/ 495235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ contactAttributeKeyCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeKeyCache = {
    tag: {
        byId (id) {
            return `contactAttributeKey-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contactAttributeKeys`;
        },
        byEnvironmentIdAndKey (environmentId, key) {
            return `contactAttributeKey-environment-${environmentId}-key-${key}`;
        }
    },
    revalidate: ({ id, environmentId, key })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeKeyCache.tag.byEnvironmentIdAndKey(environmentId, key));
        }
    }
};


/***/ }),

/***/ 892865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ contactAttributeCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactAttributeCache = {
    tag: {
        byContactId (contactId) {
            return `contact-${contactId}-contactAttributes`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contact-userId-${userId}-contactAttributes`;
        },
        byKeyAndContactId (key, contactId) {
            return `contact-${contactId}-contactAttribute-${key}`;
        },
        byEnvironmentId (environmentId) {
            return `contactAttributes-${environmentId}`;
        }
    },
    revalidate: ({ contactId, environmentId, userId, key })=>{
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byContactId(contactId));
        }
        if (contactId && key) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactAttributeCache.tag.byKeyAndContactId(key, contactId));
        }
    }
};


/***/ }),

/***/ 180868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ contactCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const contactCache = {
    tag: {
        byId (id) {
            return `contacts-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-contacts`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-contactByUserId-${userId}`;
        }
    },
    revalidate: ({ id, environmentId, userId })=>{
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentId(environmentId));
        }
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(contactCache.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
    }
};


/***/ }),

/***/ 465412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bl: () => (/* binding */ getContact),
  fo: () => (/* binding */ getContactAttributeKeys),
  qe: () => (/* binding */ getContactAttributes),
  kK: () => (/* binding */ getContacts)
});

// UNUSED EXPORTS: createContactsFromCSV, deleteContact

// EXTERNAL MODULE: ./lib/cache/contact.ts
var contact = __webpack_require__(180868);
// EXTERNAL MODULE: ./lib/cache/contact-attribute.ts
var contact_attribute = __webpack_require__(892865);
// EXTERNAL MODULE: ./lib/cache/contact-attribute-key.ts
var contact_attribute_key = __webpack_require__(495235);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ./modules/ee/contacts/types/contact.ts

const ZContact = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: lib.z.string().cuid2()
});
const ZContactTableAttributeData = lib.z.object({
    key: lib.z.string(),
    name: lib.z.string().nullable(),
    value: lib.z.string().nullable()
});
const ZContactTableData = lib.z.object({
    id: lib.z.string(),
    userId: lib.z.string(),
    email: lib.z.string(),
    firstName: lib.z.string(),
    lastName: lib.z.string(),
    attributes: lib.z.array(ZContactTableAttributeData)
});
const ZContactWithAttributes = ZContact.extend({
    attributes: lib.z.record(lib.z.string())
});
// types related to the csv upload:
const contact_ZContactCSVDuplicateAction = lib.z.enum([
    "skip",
    "update",
    "overwrite"
]);
const contact_ZContactCSVUploadResponse = lib.z.array(lib.z.record(lib.z.string())).max(10000, {
    message: "Maximum 10000 records allowed at a time."
}).superRefine((data, ctx)=>{
    for (const record of data){
        if (!Object.keys(record).includes("email")) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Missing email field for one or more records"
            });
        }
        if (!record.email) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Email field is empty for one or more records"
            });
        }
    }
    // check for duplicate emails
    const emails = data.map((record)=>record.email);
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Duplicate emails found in the records"
        });
    }
    // check for duplicate userIds if present
    const userIds = data.map((record)=>record.userId).filter(Boolean);
    if (userIds?.length > 0) {
        const userIdSet = new Set(userIds);
        if (userIds.length !== userIdSet.size) {
            return ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Duplicate userIds found in the records"
            });
        }
    }
});
const contact_ZContactCSVAttributeMap = lib.z.record(lib.z.string(), lib.z.string()).superRefine((attributeMap, ctx)=>{
    const values = Object.values(attributeMap);
    if (new Set(values).size !== values.length) {
        return ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Attribute map contains duplicate values"
        });
    }
});

// EXTERNAL MODULE: ./modules/ee/contacts/lib/utils.ts
var utils = __webpack_require__(414435);
;// ./modules/ee/contacts/lib/contacts.ts














const selectContact = {
    id: true,
    createdAt: true,
    updatedAt: true,
    environmentId: true,
    attributes: {
        select: {
            value: true,
            attributeKey: {
                select: {
                    key: true,
                    name: true
                }
            }
        }
    }
};
const selectContactAttribute = {
    value: true,
    attributeKey: {
        select: {
            key: true,
            name: true
        }
    }
};
const buildContactWhereClause = (environmentId, search)=>{
    const whereClause = {
        environmentId
    };
    if (search) {
        whereClause.OR = [
            {
                attributes: {
                    some: {
                        value: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                }
            },
            {
                id: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        ];
    }
    return whereClause;
};
const getContacts = (0,react.cache)((environmentId, offset, searchValue)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            searchValue,
            common/* ZOptionalString */.Ww
        ]);
        try {
            const contacts = await src/* prisma */.z.contact.findMany({
                where: buildContactWhereClause(environmentId, searchValue),
                select: selectContact,
                take: constants/* ITEMS_PER_PAGE */.re,
                skip: offset,
                orderBy: {
                    createdAt: "desc"
                }
            });
            return contacts.map((contact)=>(0,utils/* transformPrismaContact */.HZ)(contact));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContacts-${environmentId}-${offset}-${searchValue ?? ""}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byEnvironmentId(environmentId)
        ]
    })());
const getContact = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            return await src/* prisma */.z.contact.findUnique({
                where: {
                    id: contactId
                },
                select: selectContact
            });
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContact-${contactId}`
    ], {
        tags: [
            contact/* contactCache */.f.tag.byId(contactId)
        ]
    })());
const deleteContact = async (contactId)=>{
    validateInputs([
        contactId,
        ZId
    ]);
    try {
        const contact = await prisma.contact.delete({
            where: {
                id: contactId
            },
            select: selectContact
        });
        const contactUserId = contact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
        contactCache.revalidate({
            id: contact.id,
            environmentId: contact.environmentId,
            userId: contactUserId
        });
        return contact;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getContactAttributes = (0,react.cache)((contactId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ]);
        try {
            const prismaAttributes = await src/* prisma */.z.contactAttribute.findMany({
                where: {
                    contactId
                },
                select: selectContactAttribute
            });
            // return convertPrismaContactAttributes(prismaAttributes);
            return prismaAttributes.reduce((acc, attr)=>{
                acc[attr.attributeKey.key] = attr.value;
                return acc;
            }, {});
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getContactAttributes-${contactId}`
    ], {
        tags: [
            contact_attribute/* contactAttributeCache */.r.tag.byContactId(contactId)
        ]
    })());
const getContactAttributeKeys = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        return await src/* prisma */.z.contactAttributeKey.findMany({
            where: {
                environmentId
            }
        });
    }, [
        `getContactAttributeKeys-${environmentId}`
    ], {
        tags: [
            contact_attribute_key/* contactAttributeKeyCache */.E.tag.byEnvironmentId(environmentId)
        ]
    })());
const createContactsFromCSV = async (csvData, environmentId, duplicateContactsAction, attributeMap)=>{
    validateInputs([
        csvData,
        ZContactCSVUploadResponse
    ], [
        environmentId,
        ZId
    ], [
        duplicateContactsAction,
        ZContactCSVDuplicateAction
    ], [
        attributeMap,
        ZContactCSVAttributeMap
    ]);
    try {
        // Extract unique emails and userIds from CSV data
        const csvEmails = Array.from(new Set(csvData.map((r)=>r.email).filter(Boolean)));
        const csvUserIds = Array.from(new Set(csvData.map((r)=>r.userId).filter(Boolean)));
        // Fetch existing contacts by email
        const existingContactsByEmail = await prisma.contact.findMany({
            where: {
                environmentId,
                attributes: {
                    some: {
                        attributeKey: {
                            key: "email"
                        },
                        value: {
                            in: csvEmails
                        }
                    }
                }
            },
            select: {
                id: true,
                attributes: {
                    select: {
                        attributeKey: {
                            select: {
                                key: true,
                                id: true
                            }
                        },
                        value: true
                    }
                }
            }
        });
        // Map emails to existing contacts
        const emailToContactMap = new Map();
        existingContactsByEmail.forEach((contact)=>{
            const emailAttr = contact.attributes.find((attr)=>attr.attributeKey.key === "email");
            if (emailAttr) {
                emailToContactMap.set(emailAttr.value, contact);
            }
        });
        // Check for duplicate userIds
        const existingUserIds = await prisma.contactAttribute.findMany({
            where: {
                attributeKey: {
                    key: "userId",
                    environmentId
                },
                value: {
                    in: csvUserIds
                }
            },
            select: {
                value: true,
                contactId: true
            }
        });
        // Fetch existing attribute keys and cache them
        const existingAttributeKeys = await prisma.contactAttributeKey.findMany({
            where: {
                environmentId
            },
            select: {
                key: true,
                id: true
            }
        });
        const attributeKeyMap = new Map();
        existingAttributeKeys.forEach((attrKey)=>{
            attributeKeyMap.set(attrKey.key, attrKey.id);
        });
        // Identify missing attribute keys
        const csvKeys = new Set();
        csvData.forEach((record)=>{
            Object.keys(record).forEach((key)=>csvKeys.add(key));
        });
        const missingKeys = Array.from(csvKeys).filter((key)=>!attributeKeyMap.has(key));
        // Create missing attribute keys
        if (missingKeys.length > 0) {
            await prisma.contactAttributeKey.createMany({
                data: missingKeys.map((key)=>({
                        key,
                        name: key,
                        environmentId
                    })),
                skipDuplicates: true
            });
            // Fetch and update the attributeKeyMap with new keys
            const newAttributeKeys = await prisma.contactAttributeKey.findMany({
                where: {
                    key: {
                        in: missingKeys
                    },
                    environmentId
                },
                select: {
                    key: true,
                    id: true
                }
            });
            newAttributeKeys.forEach((attrKey)=>{
                attributeKeyMap.set(attrKey.key, attrKey.id);
            });
        }
        const createdContacts = [];
        // Process contacts in parallel
        const contactPromises = csvData.map(async (record)=>{
            // Skip records without email
            if (!record.email) {
                throw new ValidationError("Email is required for all contacts");
            }
            const existingContact = emailToContactMap.get(record.email);
            if (existingContact) {
                // Handle duplicates based on duplicateContactsAction
                switch(duplicateContactsAction){
                    case "skip":
                        return null;
                    case "update":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            const attributesToUpsert = Object.entries(recordToProcess).map(([key, value])=>({
                                    where: {
                                        contactId_attributeKeyId: {
                                            contactId: existingContact.id,
                                            attributeKeyId: attributeKeyMap.get(key)
                                        }
                                    },
                                    update: {
                                        value
                                    },
                                    create: {
                                        attributeKeyId: attributeKeyMap.get(key),
                                        value
                                    }
                                }));
                            // Update contact with upserted attributes
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        // @ts-expect-error
                                        upsert: attributesToUpsert
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                    case "overwrite":
                        {
                            // if the record has a userId, check if it already exists
                            const existingUserId = existingUserIds.find((attr)=>attr.value === record.userId && attr.contactId !== existingContact.id);
                            let recordToProcess = {
                                ...record
                            };
                            if (existingUserId) {
                                const { userId, ...rest } = recordToProcess;
                                const existingContactUserId = existingContact.attributes.find((attr)=>attr.attributeKey.key === "userId")?.value;
                                recordToProcess = {
                                    ...rest,
                                    ...existingContactUserId && {
                                        userId: existingContactUserId
                                    }
                                };
                            }
                            // Overwrite by deleting existing attributes and creating new ones
                            await prisma.contactAttribute.deleteMany({
                                where: {
                                    contactId: existingContact.id
                                }
                            });
                            const newAttributes = Object.entries(recordToProcess).map(([key, value])=>({
                                    attributeKey: {
                                        connect: {
                                            key_environmentId: {
                                                key,
                                                environmentId
                                            }
                                        }
                                    },
                                    value
                                }));
                            const updatedContact = prisma.contact.update({
                                where: {
                                    id: existingContact.id
                                },
                                data: {
                                    attributes: {
                                        create: newAttributes
                                    }
                                },
                                include: {
                                    attributes: {
                                        select: {
                                            attributeKey: {
                                                select: {
                                                    key: true
                                                }
                                            },
                                            value: true
                                        }
                                    }
                                }
                            });
                            return updatedContact;
                        }
                }
            } else {
                // Create new contact
                const newAttributes = Object.entries(record).map(([key, value])=>({
                        attributeKey: {
                            connect: {
                                key_environmentId: {
                                    key,
                                    environmentId
                                }
                            }
                        },
                        value
                    }));
                const newContact = prisma.contact.create({
                    data: {
                        environmentId,
                        attributes: {
                            create: newAttributes
                        }
                    },
                    include: {
                        attributes: {
                            select: {
                                attributeKey: {
                                    select: {
                                        key: true
                                    }
                                },
                                value: true
                            }
                        }
                    }
                });
                return newContact;
            }
        });
        const results = await Promise.all(contactPromises);
        const createdContactsFiltered = results.filter((contact)=>contact !== null);
        createdContacts.push(...createdContactsFiltered);
        contactCache.revalidate({
            environmentId
        });
        for (const contact of createdContactsFiltered){
            contactCache.revalidate({
                id: contact.id
            });
        }
        contactAttributeKeyCache.revalidate({
            environmentId
        });
        return createdContacts;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 414435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HZ: () => (/* binding */ transformPrismaContact),
/* harmony export */   Sl: () => (/* binding */ getContactIdentifier)
/* harmony export */ });
/* unused harmony export convertPrismaContactAttributes */
const getContactIdentifier = (contactAttributes)=>{
    return contactAttributes?.email ?? contactAttributes?.userId ?? "";
};
const convertPrismaContactAttributes = (prismaAttributes)=>{
    return prismaAttributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = {
            name: attr.attributeKey.name,
            value: attr.value
        };
        return acc;
    }, {});
};
const transformPrismaContact = (person)=>{
    const attributes = person.attributes.reduce((acc, attr)=>{
        acc[attr.attributeKey.key] = attr.value;
        return acc;
    }, {});
    return {
        id: person.id,
        attributes,
        environmentId: person.environmentId,
        createdAt: new Date(person.createdAt),
        updatedAt: new Date(person.updatedAt)
    };
};


/***/ }),

/***/ 91903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HZ: () => (/* binding */ cloneSegmentAction),
  Ws: () => (/* binding */ createSegmentAction),
  B: () => (/* binding */ deleteSegmentAction),
  It: () => (/* binding */ loadNewSegmentAction),
  ge: () => (/* binding */ resetSegmentFiltersAction),
  lh: () => (/* binding */ updateSegmentAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(730672);
;// ./modules/ee/contacts/segments/lib/utils.ts

// type guard to check if a resource is a filter
const utils_isResourceFilter = (resource)=>{
    return resource.root !== undefined;
};
const convertOperatorToText = (operator)=>{
    switch(operator){
        case "equals":
            return "=";
        case "notEquals":
            return "!=";
        case "lessThan":
            return "<";
        case "lessEqual":
            return "<=";
        case "greaterThan":
            return ">";
        case "greaterEqual":
            return ">=";
        case "isSet":
            return "is set";
        case "isNotSet":
            return "is not set";
        case "contains":
            return "contains ";
        case "doesNotContain":
            return "does not contain";
        case "startsWith":
            return "starts with";
        case "endsWith":
            return "ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const convertOperatorToTitle = (operator)=>{
    switch(operator){
        case "equals":
            return "Equals";
        case "notEquals":
            return "Not equals to";
        case "lessThan":
            return "Less than";
        case "lessEqual":
            return "Less than or equal to";
        case "greaterThan":
            return "Greater than";
        case "greaterEqual":
            return "Greater than or equal to";
        case "isSet":
            return "Is set";
        case "isNotSet":
            return "Is not set";
        case "contains":
            return "Contains";
        case "doesNotContain":
            return "Does not contain";
        case "startsWith":
            return "Starts with";
        case "endsWith":
            return "Ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const addFilterBelow = (group, resourceId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            } else {
                addFilterBelow(resource, resourceId, filter);
            }
        }
    }
};
const createGroupFromResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const filters = group[i];
        if (utils_isResourceFilter(filters.resource)) {
            if (filters.resource.id === resourceId) {
                const newGroupToAdd = {
                    id: createId(),
                    connector: filters.connector,
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, newGroupToAdd);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                // make an outer group, wrap the current group in it and add a filter below it
                const outerGroup = {
                    connector: filters.connector,
                    id: createId(),
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, outerGroup);
                break;
            } else {
                createGroupFromResource(filters.resource, resourceId);
            }
        }
    }
};
const moveResourceUp = (group, i)=>{
    if (i === 0) {
        return;
    }
    const previousTemp = group[i - 1];
    group[i - 1] = group[i];
    group[i] = previousTemp;
    if (i - 1 === 0) {
        const newConnector = group[i - 1].connector;
        group[i - 1].connector = null;
        group[i].connector = newConnector;
    }
};
const moveResourceDown = (group, i)=>{
    if (i === group.length - 1) {
        return;
    }
    const temp = group[i + 1];
    group[i + 1] = group[i];
    group[i] = temp;
    // after the swap, determine if the connector should be null or not
    if (i === 0) {
        const nextConnector = group[i].connector;
        group[i].connector = null;
        group[i + 1].connector = nextConnector;
    }
};
const moveResource = (group, resourceId, direction)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
        } else {
            if (group[i].id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
            moveResource(resource, resourceId, direction);
        }
    }
};
const deleteResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource) && resource.id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!utils_isResourceFilter(resource) && group[i].id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!utils_isResourceFilter(resource)) {
            deleteResource(resource, resourceId);
        }
    }
    // check and delete all empty groups
    deleteEmptyGroups(group);
};
const deleteEmptyGroups = (group)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!utils_isResourceFilter(resource) && resource.length === 0) {
            group.splice(i, 1);
        } else if (!utils_isResourceFilter(resource)) {
            deleteEmptyGroups(resource);
        }
    }
};
const addFilterInGroup = (group, groupId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            continue;
        } else {
            if (group[i].id === groupId) {
                const { resource } = group[i];
                if (!utils_isResourceFilter(resource)) {
                    if (resource.length === 0) {
                        resource.push({
                            ...filter,
                            connector: null
                        });
                    } else {
                        resource.push(filter);
                    }
                }
                break;
            } else {
                addFilterInGroup(resource, groupId, filter);
            }
        }
    }
};
const toggleGroupConnector = (group, groupId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!utils_isResourceFilter(resource)) {
            if (group[i].id === groupId) {
                group[i].connector = newConnectorValue;
                break;
            } else {
                toggleGroupConnector(resource, groupId, newConnectorValue);
            }
        }
    }
};
const toggleFilterConnector = (group, filterId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                group[i].connector = newConnectorValue;
            }
        } else {
            toggleFilterConnector(resource, filterId, newConnectorValue);
        }
    }
};
const updateOperatorInFilter = (group, filterId, newOperator)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.qualifier.operator = newOperator;
                break;
            }
        } else {
            updateOperatorInFilter(resource, filterId, newOperator);
        }
    }
};
const updateContactAttributeKeyInFilter = (group, filterId, newContactAttributeKey)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.contactAttributeKey = newContactAttributeKey;
                break;
            }
        } else {
            updateContactAttributeKeyInFilter(resource, filterId, newContactAttributeKey);
        }
    }
};
const updatePersonIdentifierInFilter = (group, filterId, newPersonIdentifier)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.personIdentifier = newPersonIdentifier;
            }
        } else {
            updatePersonIdentifierInFilter(resource, filterId, newPersonIdentifier);
        }
    }
};
const updateSegmentIdInFilter = (group, filterId, newSegmentId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.segmentId = newSegmentId;
                resource.value = newSegmentId;
                break;
            }
        } else {
            updateSegmentIdInFilter(resource, filterId, newSegmentId);
        }
    }
};
const updateFilterValue = (group, filterId, newValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.value = newValue;
                break;
            }
        } else {
            updateFilterValue(resource, filterId, newValue);
        }
    }
};
const updateDeviceTypeInFilter = (group, filterId, newDeviceType)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (utils_isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.deviceType = newDeviceType;
                resource.value = newDeviceType;
                break;
            }
        } else {
            updateDeviceTypeInFilter(resource, filterId, newDeviceType);
        }
    }
};
const formatSegmentDateFields = (segment)=>{
    if (typeof segment.createdAt === "string") {
        segment.createdAt = new Date(segment.createdAt);
    }
    if (typeof segment.updatedAt === "string") {
        segment.updatedAt = new Date(segment.updatedAt);
    }
    return segment;
};
const searchForAttributeKeyInSegment = (filters, attributeKey)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (utils_isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type === "attribute") {
                const { contactAttributeKey: key } = root;
                if (key === attributeKey) {
                    return true;
                }
            }
        } else {
            const found = searchForAttributeKeyInSegment(resource, attributeKey);
            if (found) {
                return true;
            }
        }
    }
    return false;
};
// check if a segment has a filter with "type" other than "attribute" or "person"
// if it does, this is an advanced segment
const isAdvancedSegment = (filters)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (utils_isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type !== "attribute" && type !== "person") {
                return true;
            }
        } else {
            // the resource is a group, so we don't need to recurse, we know that this is an advanced segment
            return true;
        }
    }
    return false;
};

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/cache/segment.ts
var cache_segment = __webpack_require__(857431);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts + 2 modules
var service = __webpack_require__(939483);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var types_segment = __webpack_require__(649490);
;// ./modules/ee/contacts/segments/lib/segments.ts












const selectSegment = {
    id: true,
    createdAt: true,
    updatedAt: true,
    title: true,
    description: true,
    environmentId: true,
    filters: true,
    isPrivate: true,
    surveys: {
        select: {
            id: true,
            name: true,
            status: true
        }
    }
};
const transformPrismaSegment = (segment)=>{
    return {
        ...segment,
        surveys: segment.surveys.map((survey)=>survey.id)
    };
};
const getSegment = (0,react.cache)(async (segmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            segmentId,
            common/* ZId */.i4
        ]);
        try {
            const segment = await src/* prisma */.z.segment.findUnique({
                where: {
                    id: segmentId
                },
                select: selectSegment
            });
            if (!segment) {
                throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
            }
            return transformPrismaSegment(segment);
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegment-${segmentId}`
    ], {
        tags: [
            cache_segment/* segmentCache */.C.tag.byId(segmentId)
        ]
    })());
const getSegments = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            if (!segments) {
                return [];
            }
            return segments.map((segment)=>transformPrismaSegment(segment));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegments-${environmentId}`
    ], {
        tags: [
            cache_segment/* segmentCache */.C.tag.byEnvironmentId(environmentId)
        ]
    })());
const createSegment = async (segmentCreateInput)=>{
    (0,validate/* validateInputs */.C)([
        segmentCreateInput,
        types_segment/* ZSegmentCreateInput */.YS
    ]);
    const { description, environmentId, filters, isPrivate, surveyId, title } = segmentCreateInput;
    let data = {
        environmentId,
        title,
        description,
        isPrivate,
        filters
    };
    if (surveyId) {
        data = {
            ...data,
            surveys: {
                connect: {
                    id: surveyId
                }
            }
        };
    }
    try {
        const segment = await src/* prisma */.z.segment.create({
            data,
            select: selectSegment
        });
        cache_segment/* segmentCache */.C.revalidate({
            id: segment.id,
            environmentId
        });
        survey_cache/* surveyCache */.$.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const cloneSegment = async (segmentId, surveyId)=>{
    (0,validate/* validateInputs */.C)([
        segmentId,
        common/* ZId */.i4
    ], [
        surveyId,
        common/* ZId */.i4
    ]);
    try {
        const segment = await getSegment(segmentId);
        if (!segment) {
            throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
        }
        const allSegments = await getSegments(segment.environmentId);
        // Find the last "Copy of" title and extract the number from it
        const lastCopyTitle = allSegments.map((existingSegment)=>existingSegment.title).filter((title)=>title.startsWith(`Copy of ${segment.title}`)).pop();
        let suffix = 1;
        if (lastCopyTitle) {
            const match = lastCopyTitle.match(/\((\d+)\)$/);
            if (match) {
                suffix = parseInt(match[1], 10) + 1;
            }
        }
        // Construct the title for the cloned segment
        const clonedTitle = `Copy of ${segment.title} (${suffix})`;
        // parse the filters and update the user segment
        const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(segment.filters);
        if (!parsedFilters.success) {
            throw new errors/* ValidationError */.yI("Invalid filters");
        }
        const clonedSegment = await src/* prisma */.z.segment.create({
            data: {
                title: clonedTitle,
                description: segment.description,
                isPrivate: segment.isPrivate,
                environmentId: segment.environmentId,
                filters: segment.filters,
                surveys: {
                    connect: {
                        id: surveyId
                    }
                }
            },
            select: selectSegment
        });
        cache_segment/* segmentCache */.C.revalidate({
            id: clonedSegment.id,
            environmentId: clonedSegment.environmentId
        });
        survey_cache/* surveyCache */.$.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(clonedSegment);
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const deleteSegment = async (segmentId)=>{
    (0,validate/* validateInputs */.C)([
        segmentId,
        common/* ZId */.i4
    ]);
    try {
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
        }
        if (currentSegment.surveys?.length) {
            throw new errors/* OperationNotAllowedError */.J4("Cannot delete a segment that is associated with a survey");
        }
        const segment = await src/* prisma */.z.segment.delete({
            where: {
                id: segmentId
            },
            select: selectSegment
        });
        cache_segment/* segmentCache */.C.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>survey_cache/* surveyCache */.$.revalidate({
                id: survey.id
            }));
        survey_cache/* surveyCache */.$.revalidate({
            environmentId: currentSegment.environmentId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const resetSegmentInSurvey = async (surveyId)=>{
    (0,validate/* validateInputs */.C)([
        surveyId,
        common/* ZId */.i4
    ]);
    const survey = await (0,service/* getSurvey */.Dp)(surveyId);
    if (!survey) {
        throw new errors/* ResourceNotFoundError */.CE("survey", surveyId);
    }
    try {
        return await src/* prisma */.z.$transaction(async (tx)=>{
            // for this survey, does a private segment already exist
            const segment = await tx.segment.findFirst({
                where: {
                    title: `${surveyId}`,
                    isPrivate: true
                },
                select: selectSegment
            });
            // if a private segment already exists, connect it to the survey
            if (segment) {
                await tx.survey.update({
                    where: {
                        id: surveyId
                    },
                    data: {
                        segment: {
                            connect: {
                                id: segment.id
                            }
                        }
                    }
                });
                // reset the filters
                const updatedSegment = await tx.segment.update({
                    where: {
                        id: segment.id
                    },
                    data: {
                        filters: []
                    },
                    select: selectSegment
                });
                survey_cache/* surveyCache */.$.revalidate({
                    id: surveyId
                });
                cache_segment/* segmentCache */.C.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(updatedSegment);
            } else {
                // This case should never happen because a private segment with the title of the surveyId
                // should always exist. But, handling it just in case.
                // if a private segment does not exist, create one
                const newPrivateSegment = await tx.segment.create({
                    data: {
                        title: `${surveyId}`,
                        isPrivate: true,
                        filters: [],
                        surveys: {
                            connect: {
                                id: surveyId
                            }
                        },
                        environment: {
                            connect: {
                                id: survey?.environmentId
                            }
                        }
                    },
                    select: selectSegment
                });
                survey_cache/* surveyCache */.$.revalidate({
                    id: surveyId
                });
                cache_segment/* segmentCache */.C.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(newPrivateSegment);
            }
        });
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const updateSegment = async (segmentId, data)=>{
    (0,validate/* validateInputs */.C)([
        segmentId,
        common/* ZId */.i4
    ], [
        data,
        types_segment/* ZSegmentUpdateInput */.Js
    ]);
    try {
        let updatedInput = {
            ...data,
            surveys: undefined
        };
        if (data.surveys) {
            updatedInput = {
                ...data,
                surveys: {
                    connect: data.surveys.map((surveyId)=>({
                            id: surveyId
                        }))
                }
            };
        }
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
        }
        const segment = await src/* prisma */.z.segment.update({
            where: {
                id: segmentId
            },
            data: updatedInput,
            select: selectSegment
        });
        cache_segment/* segmentCache */.C.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>survey_cache/* surveyCache */.$.revalidate({
                id: survey.id
            }));
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getSegmentsByAttributeKey = (0,react.cache)((environmentId, attributeKey)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            attributeKey,
            common/* ZString */.eI
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            // search for contactAttributeKey in the filters
            const clonedSegments = structuredClone(segments);
            const filteredSegments = clonedSegments.filter((segment)=>{
                return searchForAttributeKeyInSegment(segment.filters, attributeKey);
            });
            return filteredSegments;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegmentsByAttributeKey-${environmentId}-${attributeKey}`
    ], {
        tags: [
            cache_segment/* segmentCache */.C.tag.byEnvironmentId(environmentId),
            cache_segment/* segmentCache */.C.tag.byAttributeKey(attributeKey)
        ]
    })());
const evaluateAttributeFilter = (attributes, filter)=>{
    const { value, qualifier, root } = filter;
    const { contactAttributeKey } = root;
    const attributeValue = attributes[contactAttributeKey];
    if (!attributeValue) {
        return false;
    }
    const attResult = compareValues(attributeValue, value, qualifier.operator);
    return attResult;
};
const evaluatePersonFilter = (userId, filter)=>{
    const { value, qualifier, root } = filter;
    const { personIdentifier } = root;
    if (personIdentifier === "userId") {
        const attResult = compareValues(userId, value, qualifier.operator);
        return attResult;
    }
    return false;
};
const evaluateSegmentFilter = async (userData, filter)=>{
    const { qualifier, root } = filter;
    const { segmentId } = root;
    const { operator } = qualifier;
    const segment = await getSegment(segmentId);
    if (!segment) {
        return false;
    }
    const parsedFilters = ZSegmentFilters.safeParse(segment.filters);
    if (!parsedFilters.success) {
        return false;
    }
    const isInSegment = await evaluateSegment(userData, parsedFilters.data);
    if (operator === "userIsIn") {
        return isInSegment;
    }
    if (operator === "userIsNotIn") {
        return !isInSegment;
    }
    return false;
};
const evaluateDeviceFilter = (device, filter)=>{
    const { value, qualifier } = filter;
    return compareValues(device, value, qualifier.operator);
};
const compareValues = (a, b, operator)=>{
    switch(operator){
        case "equals":
            return a === b;
        case "notEquals":
            return a !== b;
        case "lessThan":
            return a < b;
        case "lessEqual":
            return a <= b;
        case "greaterThan":
            return a > b;
        case "greaterEqual":
            return a >= b;
        case "isSet":
            return a !== undefined;
        case "isNotSet":
            return a === "" || a === null || a === undefined;
        case "contains":
            return a.includes(b);
        case "doesNotContain":
            return !a.includes(b);
        case "startsWith":
            return a.startsWith(b);
        case "endsWith":
            return a.endsWith(b);
        default:
            throw new Error(`Unexpected operator: ${operator}`);
    }
};
const evaluateSegment = async (userData, filters)=>{
    if (!filters.length) {
        // if there are no filters, the segment will be evaluated as true
        return true;
    }
    let resultPairs = [];
    try {
        for (let filterItem of filters){
            const { resource } = filterItem;
            let result;
            if (isResourceFilter(resource)) {
                const { root } = resource;
                const { type } = root;
                if (type === "attribute") {
                    result = evaluateAttributeFilter(userData.attributes, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "person") {
                    result = evaluatePersonFilter(userData.userId, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "segment") {
                    result = await evaluateSegmentFilter(userData, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "device") {
                    result = evaluateDeviceFilter(userData.deviceType, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
            } else {
                result = await evaluateSegment(userData, resource);
                // this is a sub-group and we need to evaluate the sub-group
                resultPairs.push({
                    result,
                    connector: filterItem.connector
                });
            }
        }
        if (!resultPairs.length) {
            return false;
        }
        // We first evaluate all `and` conditions consecutively
        let intermediateResults = [];
        // Given that the first filter in every group/sub-group always has a connector value of "null",
        // we initialize the finalResult with the result of the first filter.
        let currentAndGroupResult = resultPairs[0].result;
        for(let i = 1; i < resultPairs.length; i++){
            const { result, connector } = resultPairs[i];
            if (connector === "and") {
                currentAndGroupResult = currentAndGroupResult && result;
            } else if (connector === "or") {
                intermediateResults.push(currentAndGroupResult);
                currentAndGroupResult = result;
            }
        }
        // Push the final `and` group result
        intermediateResults.push(currentAndGroupResult);
        // Now we can evaluate the `or` conditions
        let finalResult = intermediateResults[0];
        for(let i = 1; i < intermediateResults.length; i++){
            finalResult = finalResult || intermediateResults[i];
        }
        return finalResult;
    } catch (error) {
        throw error;
    }
};

// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(725322);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/contacts/segments/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f401506cbd8cbaf6e69a102af4b34faff51e6821d":"updateSegmentAction","7f5f67ef7357726711b163b717490966a69d2206c9":"createSegmentAction","7fa1455a73fef63c6b670c6d3018b8c0e88c94475c":"loadNewSegmentAction","7fd4a2f68d0f93b333143479d5d3345939d6141f48":"resetSegmentFiltersAction","7fe6bcff2944a454891c847e7a2b35e7fa5424a16a":"cloneSegmentAction","7ff1e10ead6d68ad053d27a59e05e0eefa9923d8da":"deleteSegmentAction"} */ 












const checkAdvancedTargetingPermission = async (organizationId)=>{
    const organization = await (0,organization_service/* getOrganization */.SA)(organizationId);
    if (!organization) {
        throw new Error("Organization not found");
    }
    const isContactsEnabled = await (0,utils/* getIsContactsEnabled */.dZ)();
    if (!isContactsEnabled) {
        throw new errors/* OperationNotAllowedError */.J4("Advanced targeting is not allowed for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createSegmentAction = action_client/* authenticatedActionClient */.D.schema(types_segment/* ZSegmentCreateInput */.YS).action(async ({ ctx, parsedInput })=>{
    if (parsedInput.surveyId) {
        const surveyEnvironmentId = await (0,helper/* getEnvironmentIdFromSurveyId */.cE)(parsedInput.surveyId);
        if (surveyEnvironmentId !== parsedInput.environmentId) {
            throw new Error("Survey and segment are not in the same environment");
        }
    }
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(parsedInput.filters);
    if (!parsedFilters.success) {
        const errMsg = parsedFilters.error.issues.find((issue)=>issue.code === "custom")?.message || "Invalid filters";
        throw new Error(errMsg);
    }
    return await createSegment(parsedInput);
});
const ZUpdateSegmentAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    segmentId: common/* ZId */.i4,
    data: types_segment/* ZSegmentUpdateInput */.Js
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateSegmentAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateSegmentAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromSegmentId */.pH)(parsedInput.segmentId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    const { filters } = parsedInput.data;
    if (filters) {
        const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(filters);
        if (!parsedFilters.success) {
            const errMsg = parsedFilters.error.issues.find((issue)=>issue.code === "custom")?.message || "Invalid filters";
            throw new Error(errMsg);
        }
    }
    return await updateSegment(parsedInput.segmentId, parsedInput.data);
});
const ZLoadNewSegmentAction = lib.z.object({
    surveyId: common/* ZId */.i4,
    segmentId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ loadNewSegmentAction = action_client/* authenticatedActionClient */.D.schema(ZLoadNewSegmentAction).action(async ({ ctx, parsedInput })=>{
    const surveyEnvironmentId = await (0,helper/* getEnvironmentIdFromSurveyId */.cE)(parsedInput.surveyId);
    const segmentEnvironmentId = await (0,helper/* getEnvironmentIdFromSegmentId */.PO)(parsedInput.segmentId);
    if (surveyEnvironmentId !== segmentEnvironmentId) {
        throw new Error("Segment and survey are not in the same environment");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(surveyEnvironmentId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    return await (0,service/* loadNewSegmentInSurvey */.Pq)(parsedInput.surveyId, parsedInput.segmentId);
});
const ZCloneSegmentAction = lib.z.object({
    segmentId: common/* ZId */.i4,
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ cloneSegmentAction = action_client/* authenticatedActionClient */.D.schema(ZCloneSegmentAction).action(async ({ ctx, parsedInput })=>{
    const surveyEnvironmentId = await (0,helper/* getEnvironmentIdFromSurveyId */.cE)(parsedInput.surveyId);
    const segmentEnvironmentId = await (0,helper/* getEnvironmentIdFromSegmentId */.PO)(parsedInput.segmentId);
    if (surveyEnvironmentId !== segmentEnvironmentId) {
        throw new Error("Segment and survey are not in the same environment");
    }
    // const organizationId = await getOrganizationIdFromEnvironmentId(surveyEnvironmentId);
    const organizationId = await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(surveyEnvironmentId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    return await cloneSegment(parsedInput.segmentId, parsedInput.surveyId);
});
const ZDeleteSegmentAction = lib.z.object({
    segmentId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteSegmentAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteSegmentAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromSegmentId */.tT)(parsedInput.segmentId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromSegmentId */.pH)(parsedInput.segmentId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    return await deleteSegment(parsedInput.segmentId);
});
const ZResetSegmentFiltersAction = lib.z.object({
    surveyId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ resetSegmentFiltersAction = action_client/* authenticatedActionClient */.D.schema(ZResetSegmentFiltersAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromSurveyId */.a1)(parsedInput.surveyId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
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
                projectId: await (0,helper/* getProjectIdFromSurveyId */.Y)(parsedInput.surveyId)
            }
        ]
    });
    await checkAdvancedTargetingPermission(organizationId);
    return await resetSegmentInSurvey(parsedInput.surveyId);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    createSegmentAction,
    updateSegmentAction,
    loadNewSegmentAction,
    cloneSegmentAction,
    deleteSegmentAction,
    resetSegmentFiltersAction
]);
(0,server_reference/* registerServerReference */.A)(createSegmentAction, "7f5f67ef7357726711b163b717490966a69d2206c9", null);
(0,server_reference/* registerServerReference */.A)(updateSegmentAction, "7f401506cbd8cbaf6e69a102af4b34faff51e6821d", null);
(0,server_reference/* registerServerReference */.A)(loadNewSegmentAction, "7fa1455a73fef63c6b670c6d3018b8c0e88c94475c", null);
(0,server_reference/* registerServerReference */.A)(cloneSegmentAction, "7fe6bcff2944a454891c847e7a2b35e7fa5424a16a", null);
(0,server_reference/* registerServerReference */.A)(deleteSegmentAction, "7ff1e10ead6d68ad053d27a59e05e0eefa9923d8da", null);
(0,server_reference/* registerServerReference */.A)(resetSegmentFiltersAction, "7fd4a2f68d0f93b333143479d5d3345939d6141f48", null);


/***/ }),

/***/ 927627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xF: () => (/* binding */ evaluateSegment),
  Ln: () => (/* binding */ getSegments)
});

// UNUSED EXPORTS: cloneSegment, compareValues, createSegment, deleteSegment, getSegment, getSegmentsByAttributeKey, resetSegmentInSurvey, selectSegment, transformPrismaSegment, updateSegment

// EXTERNAL MODULE: ../../node_modules/@paralleldrive/cuid2/index.js
var cuid2 = __webpack_require__(311287);
;// ./modules/ee/contacts/segments/lib/utils.ts

// type guard to check if a resource is a filter
const isResourceFilter = (resource)=>{
    return resource.root !== undefined;
};
const convertOperatorToText = (operator)=>{
    switch(operator){
        case "equals":
            return "=";
        case "notEquals":
            return "!=";
        case "lessThan":
            return "<";
        case "lessEqual":
            return "<=";
        case "greaterThan":
            return ">";
        case "greaterEqual":
            return ">=";
        case "isSet":
            return "is set";
        case "isNotSet":
            return "is not set";
        case "contains":
            return "contains ";
        case "doesNotContain":
            return "does not contain";
        case "startsWith":
            return "starts with";
        case "endsWith":
            return "ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const convertOperatorToTitle = (operator)=>{
    switch(operator){
        case "equals":
            return "Equals";
        case "notEquals":
            return "Not equals to";
        case "lessThan":
            return "Less than";
        case "lessEqual":
            return "Less than or equal to";
        case "greaterThan":
            return "Greater than";
        case "greaterEqual":
            return "Greater than or equal to";
        case "isSet":
            return "Is set";
        case "isNotSet":
            return "Is not set";
        case "contains":
            return "Contains";
        case "doesNotContain":
            return "Does not contain";
        case "startsWith":
            return "Starts with";
        case "endsWith":
            return "Ends with";
        case "userIsIn":
            return "User is in";
        case "userIsNotIn":
            return "User is not in";
        default:
            return operator;
    }
};
const addFilterBelow = (group, resourceId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                group.splice(i + 1, 0, filter);
                break;
            } else {
                addFilterBelow(resource, resourceId, filter);
            }
        }
    }
};
const createGroupFromResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const filters = group[i];
        if (isResourceFilter(filters.resource)) {
            if (filters.resource.id === resourceId) {
                const newGroupToAdd = {
                    id: createId(),
                    connector: filters.connector,
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, newGroupToAdd);
                break;
            }
        } else {
            if (group[i].id === resourceId) {
                // make an outer group, wrap the current group in it and add a filter below it
                const outerGroup = {
                    connector: filters.connector,
                    id: createId(),
                    resource: [
                        {
                            ...filters,
                            connector: null
                        }
                    ]
                };
                group.splice(i, 1, outerGroup);
                break;
            } else {
                createGroupFromResource(filters.resource, resourceId);
            }
        }
    }
};
const moveResourceUp = (group, i)=>{
    if (i === 0) {
        return;
    }
    const previousTemp = group[i - 1];
    group[i - 1] = group[i];
    group[i] = previousTemp;
    if (i - 1 === 0) {
        const newConnector = group[i - 1].connector;
        group[i - 1].connector = null;
        group[i].connector = newConnector;
    }
};
const moveResourceDown = (group, i)=>{
    if (i === group.length - 1) {
        return;
    }
    const temp = group[i + 1];
    group[i + 1] = group[i];
    group[i] = temp;
    // after the swap, determine if the connector should be null or not
    if (i === 0) {
        const nextConnector = group[i].connector;
        group[i].connector = null;
        group[i + 1].connector = nextConnector;
    }
};
const moveResource = (group, resourceId, direction)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
        } else {
            if (group[i].id === resourceId) {
                if (direction === "up") {
                    moveResourceUp(group, i);
                    break;
                } else {
                    moveResourceDown(group, i);
                    break;
                }
            }
            moveResource(resource, resourceId, direction);
        }
    }
};
const deleteResource = (group, resourceId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource) && resource.id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource) && group[i].id === resourceId) {
            group.splice(i, 1);
            if (group.length) {
                group[0].connector = null;
            }
            break;
        } else if (!isResourceFilter(resource)) {
            deleteResource(resource, resourceId);
        }
    }
    // check and delete all empty groups
    deleteEmptyGroups(group);
};
const deleteEmptyGroups = (group)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource) && resource.length === 0) {
            group.splice(i, 1);
        } else if (!isResourceFilter(resource)) {
            deleteEmptyGroups(resource);
        }
    }
};
const addFilterInGroup = (group, groupId, filter)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            continue;
        } else {
            if (group[i].id === groupId) {
                const { resource } = group[i];
                if (!isResourceFilter(resource)) {
                    if (resource.length === 0) {
                        resource.push({
                            ...filter,
                            connector: null
                        });
                    } else {
                        resource.push(filter);
                    }
                }
                break;
            } else {
                addFilterInGroup(resource, groupId, filter);
            }
        }
    }
};
const toggleGroupConnector = (group, groupId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (!isResourceFilter(resource)) {
            if (group[i].id === groupId) {
                group[i].connector = newConnectorValue;
                break;
            } else {
                toggleGroupConnector(resource, groupId, newConnectorValue);
            }
        }
    }
};
const toggleFilterConnector = (group, filterId, newConnectorValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                group[i].connector = newConnectorValue;
            }
        } else {
            toggleFilterConnector(resource, filterId, newConnectorValue);
        }
    }
};
const updateOperatorInFilter = (group, filterId, newOperator)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.qualifier.operator = newOperator;
                break;
            }
        } else {
            updateOperatorInFilter(resource, filterId, newOperator);
        }
    }
};
const updateContactAttributeKeyInFilter = (group, filterId, newContactAttributeKey)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.contactAttributeKey = newContactAttributeKey;
                break;
            }
        } else {
            updateContactAttributeKeyInFilter(resource, filterId, newContactAttributeKey);
        }
    }
};
const updatePersonIdentifierInFilter = (group, filterId, newPersonIdentifier)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.personIdentifier = newPersonIdentifier;
            }
        } else {
            updatePersonIdentifierInFilter(resource, filterId, newPersonIdentifier);
        }
    }
};
const updateSegmentIdInFilter = (group, filterId, newSegmentId)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.segmentId = newSegmentId;
                resource.value = newSegmentId;
                break;
            }
        } else {
            updateSegmentIdInFilter(resource, filterId, newSegmentId);
        }
    }
};
const updateFilterValue = (group, filterId, newValue)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.value = newValue;
                break;
            }
        } else {
            updateFilterValue(resource, filterId, newValue);
        }
    }
};
const updateDeviceTypeInFilter = (group, filterId, newDeviceType)=>{
    for(let i = 0; i < group.length; i++){
        const { resource } = group[i];
        if (isResourceFilter(resource)) {
            if (resource.id === filterId) {
                resource.root.deviceType = newDeviceType;
                resource.value = newDeviceType;
                break;
            }
        } else {
            updateDeviceTypeInFilter(resource, filterId, newDeviceType);
        }
    }
};
const formatSegmentDateFields = (segment)=>{
    if (typeof segment.createdAt === "string") {
        segment.createdAt = new Date(segment.createdAt);
    }
    if (typeof segment.updatedAt === "string") {
        segment.updatedAt = new Date(segment.updatedAt);
    }
    return segment;
};
const searchForAttributeKeyInSegment = (filters, attributeKey)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type === "attribute") {
                const { contactAttributeKey: key } = root;
                if (key === attributeKey) {
                    return true;
                }
            }
        } else {
            const found = searchForAttributeKeyInSegment(resource, attributeKey);
            if (found) {
                return true;
            }
        }
    }
    return false;
};
// check if a segment has a filter with "type" other than "attribute" or "person"
// if it does, this is an advanced segment
const isAdvancedSegment = (filters)=>{
    for (let filter of filters){
        const { resource } = filter;
        if (isResourceFilter(resource)) {
            const { root } = resource;
            const { type } = root;
            if (type !== "attribute" && type !== "person") {
                return true;
            }
        } else {
            // the resource is a group, so we don't need to recurse, we know that this is an advanced segment
            return true;
        }
    }
    return false;
};

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/cache/segment.ts
var segment = __webpack_require__(337386);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var types_segment = __webpack_require__(657773);
;// ./modules/ee/contacts/segments/lib/segments.ts












const selectSegment = {
    id: true,
    createdAt: true,
    updatedAt: true,
    title: true,
    description: true,
    environmentId: true,
    filters: true,
    isPrivate: true,
    surveys: {
        select: {
            id: true,
            name: true,
            status: true
        }
    }
};
const transformPrismaSegment = (segment)=>{
    return {
        ...segment,
        surveys: segment.surveys.map((survey)=>survey.id)
    };
};
const getSegment = (0,react.cache)(async (segmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            segmentId,
            common/* ZId */.i4
        ]);
        try {
            const segment = await src/* prisma */.z.segment.findUnique({
                where: {
                    id: segmentId
                },
                select: selectSegment
            });
            if (!segment) {
                throw new errors/* ResourceNotFoundError */.CE("segment", segmentId);
            }
            return transformPrismaSegment(segment);
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegment-${segmentId}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byId(segmentId)
        ]
    })());
const getSegments = (0,react.cache)((environmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            if (!segments) {
                return [];
            }
            return segments.map((segment)=>transformPrismaSegment(segment));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegments-${environmentId}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId)
        ]
    })());
const createSegment = async (segmentCreateInput)=>{
    validateInputs([
        segmentCreateInput,
        ZSegmentCreateInput
    ]);
    const { description, environmentId, filters, isPrivate, surveyId, title } = segmentCreateInput;
    let data = {
        environmentId,
        title,
        description,
        isPrivate,
        filters
    };
    if (surveyId) {
        data = {
            ...data,
            surveys: {
                connect: {
                    id: surveyId
                }
            }
        };
    }
    try {
        const segment = await prisma.segment.create({
            data,
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segment.id,
            environmentId
        });
        surveyCache.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const cloneSegment = async (segmentId, surveyId)=>{
    validateInputs([
        segmentId,
        ZId
    ], [
        surveyId,
        ZId
    ]);
    try {
        const segment = await getSegment(segmentId);
        if (!segment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        const allSegments = await getSegments(segment.environmentId);
        // Find the last "Copy of" title and extract the number from it
        const lastCopyTitle = allSegments.map((existingSegment)=>existingSegment.title).filter((title)=>title.startsWith(`Copy of ${segment.title}`)).pop();
        let suffix = 1;
        if (lastCopyTitle) {
            const match = lastCopyTitle.match(/\((\d+)\)$/);
            if (match) {
                suffix = parseInt(match[1], 10) + 1;
            }
        }
        // Construct the title for the cloned segment
        const clonedTitle = `Copy of ${segment.title} (${suffix})`;
        // parse the filters and update the user segment
        const parsedFilters = ZSegmentFilters.safeParse(segment.filters);
        if (!parsedFilters.success) {
            throw new ValidationError("Invalid filters");
        }
        const clonedSegment = await prisma.segment.create({
            data: {
                title: clonedTitle,
                description: segment.description,
                isPrivate: segment.isPrivate,
                environmentId: segment.environmentId,
                filters: segment.filters,
                surveys: {
                    connect: {
                        id: surveyId
                    }
                }
            },
            select: selectSegment
        });
        segmentCache.revalidate({
            id: clonedSegment.id,
            environmentId: clonedSegment.environmentId
        });
        surveyCache.revalidate({
            id: surveyId
        });
        return transformPrismaSegment(clonedSegment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const deleteSegment = async (segmentId)=>{
    validateInputs([
        segmentId,
        ZId
    ]);
    try {
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        if (currentSegment.surveys?.length) {
            throw new OperationNotAllowedError("Cannot delete a segment that is associated with a survey");
        }
        const segment = await prisma.segment.delete({
            where: {
                id: segmentId
            },
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>surveyCache.revalidate({
                id: survey.id
            }));
        surveyCache.revalidate({
            environmentId: currentSegment.environmentId
        });
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const resetSegmentInSurvey = async (surveyId)=>{
    validateInputs([
        surveyId,
        ZId
    ]);
    const survey = await getSurvey(surveyId);
    if (!survey) {
        throw new ResourceNotFoundError("survey", surveyId);
    }
    try {
        return await prisma.$transaction(async (tx)=>{
            // for this survey, does a private segment already exist
            const segment = await tx.segment.findFirst({
                where: {
                    title: `${surveyId}`,
                    isPrivate: true
                },
                select: selectSegment
            });
            // if a private segment already exists, connect it to the survey
            if (segment) {
                await tx.survey.update({
                    where: {
                        id: surveyId
                    },
                    data: {
                        segment: {
                            connect: {
                                id: segment.id
                            }
                        }
                    }
                });
                // reset the filters
                const updatedSegment = await tx.segment.update({
                    where: {
                        id: segment.id
                    },
                    data: {
                        filters: []
                    },
                    select: selectSegment
                });
                surveyCache.revalidate({
                    id: surveyId
                });
                segmentCache.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(updatedSegment);
            } else {
                // This case should never happen because a private segment with the title of the surveyId
                // should always exist. But, handling it just in case.
                // if a private segment does not exist, create one
                const newPrivateSegment = await tx.segment.create({
                    data: {
                        title: `${surveyId}`,
                        isPrivate: true,
                        filters: [],
                        surveys: {
                            connect: {
                                id: surveyId
                            }
                        },
                        environment: {
                            connect: {
                                id: survey?.environmentId
                            }
                        }
                    },
                    select: selectSegment
                });
                surveyCache.revalidate({
                    id: surveyId
                });
                segmentCache.revalidate({
                    environmentId: survey.environmentId
                });
                return transformPrismaSegment(newPrivateSegment);
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const updateSegment = async (segmentId, data)=>{
    validateInputs([
        segmentId,
        ZId
    ], [
        data,
        ZSegmentUpdateInput
    ]);
    try {
        let updatedInput = {
            ...data,
            surveys: undefined
        };
        if (data.surveys) {
            updatedInput = {
                ...data,
                surveys: {
                    connect: data.surveys.map((surveyId)=>({
                            id: surveyId
                        }))
                }
            };
        }
        const currentSegment = await getSegment(segmentId);
        if (!currentSegment) {
            throw new ResourceNotFoundError("segment", segmentId);
        }
        const segment = await prisma.segment.update({
            where: {
                id: segmentId
            },
            data: updatedInput,
            select: selectSegment
        });
        segmentCache.revalidate({
            id: segmentId,
            environmentId: segment.environmentId
        });
        segment.surveys.map((survey)=>surveyCache.revalidate({
                id: survey.id
            }));
        return transformPrismaSegment(segment);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const getSegmentsByAttributeKey = (0,react.cache)((environmentId, attributeKey)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            attributeKey,
            common/* ZString */.eI
        ]);
        try {
            const segments = await src/* prisma */.z.segment.findMany({
                where: {
                    environmentId
                },
                select: selectSegment
            });
            // search for contactAttributeKey in the filters
            const clonedSegments = structuredClone(segments);
            const filteredSegments = clonedSegments.filter((segment)=>{
                return searchForAttributeKeyInSegment(segment.filters, attributeKey);
            });
            return filteredSegments;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getSegmentsByAttributeKey-${environmentId}-${attributeKey}`
    ], {
        tags: [
            segment/* segmentCache */.C.tag.byEnvironmentId(environmentId),
            segment/* segmentCache */.C.tag.byAttributeKey(attributeKey)
        ]
    })());
const evaluateAttributeFilter = (attributes, filter)=>{
    const { value, qualifier, root } = filter;
    const { contactAttributeKey } = root;
    const attributeValue = attributes[contactAttributeKey];
    if (!attributeValue) {
        return false;
    }
    const attResult = compareValues(attributeValue, value, qualifier.operator);
    return attResult;
};
const evaluatePersonFilter = (userId, filter)=>{
    const { value, qualifier, root } = filter;
    const { personIdentifier } = root;
    if (personIdentifier === "userId") {
        const attResult = compareValues(userId, value, qualifier.operator);
        return attResult;
    }
    return false;
};
const evaluateSegmentFilter = async (userData, filter)=>{
    const { qualifier, root } = filter;
    const { segmentId } = root;
    const { operator } = qualifier;
    const segment = await getSegment(segmentId);
    if (!segment) {
        return false;
    }
    const parsedFilters = types_segment/* ZSegmentFilters */.Ji.safeParse(segment.filters);
    if (!parsedFilters.success) {
        return false;
    }
    const isInSegment = await evaluateSegment(userData, parsedFilters.data);
    if (operator === "userIsIn") {
        return isInSegment;
    }
    if (operator === "userIsNotIn") {
        return !isInSegment;
    }
    return false;
};
const evaluateDeviceFilter = (device, filter)=>{
    const { value, qualifier } = filter;
    return compareValues(device, value, qualifier.operator);
};
const compareValues = (a, b, operator)=>{
    switch(operator){
        case "equals":
            return a === b;
        case "notEquals":
            return a !== b;
        case "lessThan":
            return a < b;
        case "lessEqual":
            return a <= b;
        case "greaterThan":
            return a > b;
        case "greaterEqual":
            return a >= b;
        case "isSet":
            return a !== undefined;
        case "isNotSet":
            return a === "" || a === null || a === undefined;
        case "contains":
            return a.includes(b);
        case "doesNotContain":
            return !a.includes(b);
        case "startsWith":
            return a.startsWith(b);
        case "endsWith":
            return a.endsWith(b);
        default:
            throw new Error(`Unexpected operator: ${operator}`);
    }
};
const evaluateSegment = async (userData, filters)=>{
    if (!filters.length) {
        // if there are no filters, the segment will be evaluated as true
        return true;
    }
    let resultPairs = [];
    try {
        for (let filterItem of filters){
            const { resource } = filterItem;
            let result;
            if (isResourceFilter(resource)) {
                const { root } = resource;
                const { type } = root;
                if (type === "attribute") {
                    result = evaluateAttributeFilter(userData.attributes, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "person") {
                    result = evaluatePersonFilter(userData.userId, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "segment") {
                    result = await evaluateSegmentFilter(userData, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
                if (type === "device") {
                    result = evaluateDeviceFilter(userData.deviceType, resource);
                    resultPairs.push({
                        result,
                        connector: filterItem.connector
                    });
                }
            } else {
                result = await evaluateSegment(userData, resource);
                // this is a sub-group and we need to evaluate the sub-group
                resultPairs.push({
                    result,
                    connector: filterItem.connector
                });
            }
        }
        if (!resultPairs.length) {
            return false;
        }
        // We first evaluate all `and` conditions consecutively
        let intermediateResults = [];
        // Given that the first filter in every group/sub-group always has a connector value of "null",
        // we initialize the finalResult with the result of the first filter.
        let currentAndGroupResult = resultPairs[0].result;
        for(let i = 1; i < resultPairs.length; i++){
            const { result, connector } = resultPairs[i];
            if (connector === "and") {
                currentAndGroupResult = currentAndGroupResult && result;
            } else if (connector === "or") {
                intermediateResults.push(currentAndGroupResult);
                currentAndGroupResult = result;
            }
        }
        // Push the final `and` group result
        intermediateResults.push(currentAndGroupResult);
        // Now we can evaluate the `or` conditions
        let finalResult = intermediateResults[0];
        for(let i = 1; i < intermediateResults.length; i++){
            finalResult = finalResult || intermediateResults[i];
        }
        return finalResult;
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 596379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   od: () => (/* binding */ getTeamPermissionFlags)
/* harmony export */ });
/* unused harmony exports TeamPermissionMapping, TeamRoleMapping, getTeamAccessFlags */
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
    const isAdmin = role === TeamUserRole.admin;
    const isContributor = role === TeamUserRole.contributor;
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

/***/ 63010:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Internal assertion helpers.
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.anumber = anumber;
exports.abytes = abytes;
exports.ahash = ahash;
exports.aexists = aexists;
exports.aoutput = aoutput;
/** Asserts something is positive integer. */
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
//# sourceMappingURL=_assert.js.map

/***/ }),

/***/ 183419:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = void 0;
exports.fromBig = fromBig;
exports.split = split;
exports.add = add;
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
exports.shrSH = shrSH;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
exports.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
exports.rotrSH = rotrSH;
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
exports.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
exports.rotrBH = rotrBH;
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
exports.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
exports.rotr32H = rotr32H;
const rotr32L = (h, _l) => h;
exports.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
exports.rotlSH = rotlSH;
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
exports.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
exports.rotlBH = rotlBH;
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
exports.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
exports.add3L = add3L;
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
exports.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
exports.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
exports.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
exports.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
exports.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
exports["default"] = u64;
//# sourceMappingURL=_u64.js.map

/***/ }),

/***/ 142352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crypto = void 0;
/**
 * Internal webcrypto alias.
 * We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
 * Falls back to Node.js built-in crypto for Node.js <=v14.
 * See utils.ts for details.
 * @module
 */
// @ts-ignore
const nc = __webpack_require__(977598);
exports.crypto = nc && typeof nc === 'object' && 'webcrypto' in nc
    ? nc.webcrypto
    : nc && typeof nc === 'object' && 'randomBytes' in nc
        ? nc
        : undefined;
//# sourceMappingURL=cryptoNode.js.map

/***/ }),

/***/ 250130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
exports.keccakP = keccakP;
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */
const _assert_js_1 = __webpack_require__(63010);
const _u64_js_1 = __webpack_require__(183419);
const utils_js_1 = __webpack_require__(991040);
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s));
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
/** Keccak sponge function. */
class Keccak extends utils_js_1.Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, _assert_js_1.anumber)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
    }
    keccak() {
        if (!utils_js_1.isLE)
            (0, utils_js_1.byteSwap32)(this.state32);
        keccakP(this.state32, this.rounds);
        if (!utils_js_1.isLE)
            (0, utils_js_1.byteSwap32)(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, _assert_js_1.aexists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, _assert_js_1.aexists)(this, false);
        (0, _assert_js_1.abytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, _assert_js_1.anumber)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, _assert_js_1.aoutput)(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
exports.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
/** SHA3-224 hash function. */
exports.sha3_224 = gen(0x06, 144, 224 / 8);
/** SHA3-256 hash function. Different from keccak-256. */
exports.sha3_256 = gen(0x06, 136, 256 / 8);
/** SHA3-384 hash function. */
exports.sha3_384 = gen(0x06, 104, 384 / 8);
/** SHA3-512 hash function. */
exports.sha3_512 = gen(0x06, 72, 512 / 8);
/** keccak-224 hash function. */
exports.keccak_224 = gen(0x01, 144, 224 / 8);
/** keccak-256 hash function. Different from SHA3-256. */
exports.keccak_256 = gen(0x01, 136, 256 / 8);
/** keccak-384 hash function. */
exports.keccak_384 = gen(0x01, 104, 384 / 8);
/** keccak-512 hash function. */
exports.keccak_512 = gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
/** SHAKE128 XOF with 128-bit security. */
exports.shake128 = genShake(0x1f, 168, 128 / 8);
/** SHAKE256 XOF with 256-bit security. */
exports.shake256 = genShake(0x1f, 136, 256 / 8);
//# sourceMappingURL=sha3.js.map

/***/ }),

/***/ 991040:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.isLE = void 0;
exports.isBytes = isBytes;
exports.u8 = u8;
exports.u32 = u32;
exports.createView = createView;
exports.rotr = rotr;
exports.rotl = rotl;
exports.byteSwap = byteSwap;
exports.byteSwap32 = byteSwap32;
exports.bytesToHex = bytesToHex;
exports.hexToBytes = hexToBytes;
exports.asyncLoop = asyncLoop;
exports.utf8ToBytes = utf8ToBytes;
exports.toBytes = toBytes;
exports.concatBytes = concatBytes;
exports.checkOpts = checkOpts;
exports.wrapConstructor = wrapConstructor;
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
exports.randomBytes = randomBytes;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = __webpack_require__(142352);
const _assert_js_1 = __webpack_require__(63010);
// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
// Cast array to different type
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
// Cast array to view
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
    return (word << (32 - shift)) | (word >>> shift);
}
/** The rotate left (circular left shift) operation for uint32 */
function rotl(word, shift) {
    return (word << shift) | ((word >>> (32 - shift)) >>> 0);
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
exports.isLE = (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
// The byte swap operation for uint32
function byteSwap(word) {
    return (((word << 24) & 0xff000000) |
        ((word << 8) & 0xff0000) |
        ((word >>> 8) & 0xff00) |
        ((word >>> 24) & 0xff));
}
/** Conditionally byte swap if on a big-endian platform */
exports.byteSwapIfBE = exports.isLE
    ? (n) => n
    : (n) => byteSwap(n);
/** In place byte swap for Uint32Array */
function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    (0, _assert_js_1.abytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * There is no setImmediate in browser and setTimeout is slow.
 * Call of async fn will return Promise, which will be fullfiled only on
 * next scheduler queue processing step and this is exactly what we need.
 */
const nextTick = async () => { };
exports.nextTick = nextTick;
/** Returns control to thread each 'tick' ms to avoid blocking. */
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
/**
 * Convert JS string to byte array.
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    (0, _assert_js_1.abytes)(data);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        (0, _assert_js_1.abytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
/** For runtime check if class implements interface */
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
function checkOpts(defaults, opts) {
    if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
        throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
/** Wraps hash function, creating an interface on top of it */
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
        return crypto_1.crypto.randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 311287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createId, init, getConstants, isCuid } = __webpack_require__(43038);

module.exports.createId = createId;
module.exports.init = init;
module.exports.getConstants = getConstants;
module.exports.isCuid = isCuid;


/***/ }),

/***/ 43038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global global, window, module */
const { sha3_512: sha3 } = __webpack_require__(250130);

const defaultLength = 24;
const bigLength = 32;

const createEntropy = (length = 4, random = Math.random) => {
  let entropy = "";

  while (entropy.length < length) {
    entropy = entropy + Math.floor(random() * 36).toString(36);
  }
  return entropy;
};

/*
 * Adapted from https://github.com/juanelas/bigint-conversion
 * MIT License Copyright (c) 2018 Juan Hernández Serrano
 */
function bufToBigInt(buf) {
  let bits = 8n;

  let value = 0n;
  for (const i of buf.values()) {
    const bi = BigInt(i);
    value = (value << bits) + bi;
  }
  return value;
}

const hash = (input = "") => {
  // Drop the first character because it will bias the histogram
  // to the left.
  return bufToBigInt(sha3(input)).toString(36).slice(1);
};

const alphabet = Array.from({ length: 26 }, (x, i) =>
  String.fromCharCode(i + 97)
);

const randomLetter = (random) =>
  alphabet[Math.floor(random() * alphabet.length)];

/*
This is a fingerprint of the host environment. It is used to help
prevent collisions when generating ids in a distributed system.
If no global object is available, you can pass in your own, or fall back
on a random string.
*/
const createFingerprint = ({
  globalObj = typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : {},
  random = Math.random,
} = {}) => {
  const globals = Object.keys(globalObj).toString();
  const sourceString = globals.length
    ? globals + createEntropy(bigLength, random)
    : createEntropy(bigLength, random);

  return hash(sourceString).substring(0, bigLength);
};

const createCounter = (count) => () => {
  return count++;
};

// ~22k hosts before 50% chance of initial counter collision
// with a remaining counter range of 9.0e+15 in JavaScript.
const initialCountMax = 476782367;

const init = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random = Math.random,
  counter = createCounter(Math.floor(random() * initialCountMax)),
  length = defaultLength,
  fingerprint = createFingerprint({ random }),
} = {}) => {
  return function cuid2() {
    const firstLetter = randomLetter(random);

    // If we're lucky, the `.toString(36)` calls may reduce hashing rounds
    // by shortening the input to the hash function a little.
    const time = Date.now().toString(36);
    const count = counter().toString(36);

    // The salt should be long enough to be globally unique across the full
    // length of the hash. For simplicity, we use the same length as the
    // intended id output.
    const salt = createEntropy(length, random);
    const hashInput = `${time + salt + count + fingerprint}`;

    return `${firstLetter + hash(hashInput).substring(1, length)}`;
  };
};

const createId = init();

const isCuid = (id, { minLength = 2, maxLength = bigLength } = {}) => {
  const length = id.length;
  const regex = /^[0-9a-z]+$/;

  try {
    if (
      typeof id === "string" &&
      length >= minLength &&
      length <= maxLength &&
      regex.test(id)
    )
      return true;
  } finally {
  }

  return false;
};

module.exports.getConstants = () => ({ defaultLength, bigLength });
module.exports.init = init;
module.exports.createId = createId;
module.exports.bufToBigInt = bufToBigInt;
module.exports.createCounter = createCounter;
module.exports.createFingerprint = createFingerprint;
module.exports.isCuid = isCuid;


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "D", ({
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
}));
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`);
        }
    }
} //# sourceMappingURL=action-validate.js.map


/***/ }),

/***/ 386845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ updateSegmentAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const updateSegmentAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f401506cbd8cbaf6e69a102af4b34faff51e6821d", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "updateSegmentAction")

/***/ }),

/***/ 155860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ createSegmentAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const createSegmentAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f5f67ef7357726711b163b717490966a69d2206c9", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "createSegmentAction")

/***/ })

};
;