"use strict";
exports.id = 1210;
exports.ids = [1210];
exports.modules = {

/***/ 928483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ResponsePage: () => (/* binding */ ResponsePage)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/components/ResponseFilterContext.tsx
var ResponseFilterContext = __webpack_require__(300677);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fd73d1497a560cbeee5172423313870fb38d2878a&name=getResponsesAction!

const getResponsesAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fd73d1497a560cbeee5172423313870fb38d2878a", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getResponsesAction")
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788&name=getResponseCountAction!
var next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_ = __webpack_require__(475221);
// EXTERNAL MODULE: ./modules/analysis/components/SingleResponseCard/index.tsx + 17 modules
var SingleResponseCard = __webpack_require__(890048);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/modal/index.tsx
var modal = __webpack_require__(383207);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(914879);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(115758);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(673766);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponseCardModal.tsx






const ResponseCardModal = ({ responses, selectedResponseId, setSelectedResponseId, survey, environment, user, environmentTags, updateResponse, deleteResponses, isReadOnly, open, setOpen, locale })=>{
    const [currentIndex, setCurrentIndex] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (selectedResponseId) {
            setOpen(true);
            const index = responses.findIndex((response)=>response.id === selectedResponseId);
            setCurrentIndex(index);
        } else {
            setOpen(false);
        }
    }, [
        selectedResponseId,
        responses,
        setOpen
    ]);
    const handleNext = ()=>{
        if (currentIndex !== null && currentIndex < responses.length - 1) {
            setSelectedResponseId(responses[currentIndex + 1].id);
        }
    };
    const handleBack = ()=>{
        if (currentIndex !== null && currentIndex > 0) {
            setSelectedResponseId(responses[currentIndex - 1].id);
        }
    };
    const handleClose = ()=>{
        setSelectedResponseId(null);
    };
    // If no response is selected or currentIndex is null, do not render the modal
    if (selectedResponseId === null || currentIndex === null) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
        hideCloseButton: true,
        open: open,
        setOpen: setOpen,
        size: "xxl",
        className: "max-h-[80vh] overflow-auto",
        noPadding: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "h-full rounded-lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative h-full w-full overflow-auto p-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "mb-4 flex items-center justify-end space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                onClick: handleBack,
                                disabled: currentIndex === 0,
                                variant: "ghost",
                                className: "border bg-white p-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_left/* default */.A, {
                                    className: "h-5 w-5"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                onClick: handleNext,
                                disabled: currentIndex === responses.length - 1,
                                variant: "ghost",
                                className: "border bg-white p-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevron_right/* default */.A, {
                                    className: "h-5 w-5"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                className: "border bg-white p-2",
                                onClick: handleClose,
                                variant: "ghost",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                    className: "h-5 w-5"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SingleResponseCard/* SingleResponseCard */.o, {
                        survey: survey,
                        response: responses[currentIndex],
                        user: user,
                        pageType: "response",
                        environment: environment,
                        environmentTags: environmentTags,
                        isReadOnly: isReadOnly,
                        updateResponse: updateResponse,
                        deleteResponses: deleteResponses,
                        setSelectedResponseId: setSelectedResponseId,
                        locale: locale
                    })
                ]
            })
        })
    });
};

;// ./modules/ui/components/data-table/lib/utils.ts
const getCommonPinningStyles = (column)=>{
    return {
        left: `${column.getStart("left") - 1}px`,
        position: "sticky",
        width: column.getSize(),
        zIndex: 1
    };
};

// EXTERNAL MODULE: ./modules/ui/components/table/index.tsx
var components_table = __webpack_require__(162000);
// EXTERNAL MODULE: ../../node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(687692);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/maximize-2.js
var maximize_2 = __webpack_require__(694453);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponseTableCell.tsx






const ResponseTableCell = ({ cell, row, isExpanded, setSelectedResponseId, responses })=>{
    // Function to handle cell click
    const handleCellClick = ()=>{
        if (cell.column.id !== "select") {
            const response = responses?.find((response)=>response.id === row.id);
            if (response) setSelectedResponseId(response.id);
        }
    };
    const cellStyles = {
        width: `${cell.column.getSize()}px`,
        ...cell.column.id === "select" ? getCommonPinningStyles(cell.column) : {}
    };
    // Conditional rendering of maximize icon
    const renderMaximizeIcon = cell.column.id === "createdAt" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "hidden flex-shrink-0 cursor-pointer items-center rounded-md border border-slate-200 bg-white p-2 hover:border-slate-300 group-hover:flex",
        onClick: handleCellClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(maximize_2/* default */.A, {
            className: "h-4 w-4"
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableCell */.nA, {
        className: (0,cn.cn)("border-slate-200 bg-white shadow-none group-hover:bg-slate-100", row.getIsSelected() && "bg-slate-100", {
            "border-r": !cell.column.getIsLastColumn(),
            "border-l": !cell.column.getIsFirstColumn()
        }),
        style: cellStyles,
        onClick: handleCellClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: (0,cn.cn)("flex flex-1 items-center truncate", isExpanded ? "h-full" : "h-10"),
                    children: (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                }),
                renderMaximizeIcon
            ]
        })
    }, cell.id);
};

// EXTERNAL MODULE: ./modules/analysis/components/SingleResponseCard/components/RenderResponse.tsx + 3 modules
var RenderResponse = __webpack_require__(449916);
// EXTERNAL MODULE: ../../node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(797388);
// EXTERNAL MODULE: ../../node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(63564);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(149715);
// EXTERNAL MODULE: ./modules/ui/components/dropdown-menu/index.tsx
var dropdown_menu = __webpack_require__(556825);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(186902);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(774619);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(174753);
;// ./modules/ui/components/data-table/components/column-settings-dropdown.tsx
/* __next_internal_client_entry_do_not_use__ ColumnSettingsDropdown auto */ 



const ColumnSettingsDropdown = ({ column, setIsTableSettingsModalOpen })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.rI, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.ty, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("button", {
                    className: "py-2 focus:outline-none",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ellipsis_vertical/* default */.A, {
                            name: "three-dots",
                            className: "h-4 w-4"
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.SQ, {
                align: "end",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                        className: "capitalize",
                        onClick: ()=>{
                            column.toggleVisibility(false);
                        },
                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(eye_off/* default */.A, {
                            className: "h-4 w-4"
                        }),
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                children: t("common.hide_column")
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dropdown_menu/* DropdownMenuItem */._2, {
                        className: "capitalize",
                        onClick: ()=>setIsTableSettingsModalOpen(true),
                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(settings/* default */.A, {
                            className: "h-4 w-4"
                        }),
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                children: t("common.table_settings")
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// ./modules/ui/components/data-table/components/data-table-header.tsx









const DataTableHeader = ({ header, setIsTableSettingsModalOpen })=>{
    const { attributes, isDragging, listeners, setNodeRef, transform } = (0,sortable_esm/* useSortable */.gl)({
        id: header.column.id
    });
    const style = {
        opacity: isDragging ? 0.8 : 1,
        position: "relative",
        transform: utilities_esm/* CSS */.Ks.Translate.toString(transform),
        transition: "width transform 0.2s ease-in-out",
        whiteSpace: "nowrap",
        width: header.column.getSize(),
        zIndex: isDragging ? 1 : 0,
        ...header.column.id === "select" ? getCommonPinningStyles(header.column) : {}
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableHead */.nd, {
        colSpan: header.colSpan,
        ref: setNodeRef,
        style: style,
        className: (0,cn.cn)("group relative h-10 border-b border-slate-200 bg-white px-4 text-center", {
            "border-r": !header.column.getIsLastColumn(),
            "border-l": !header.column.getIsFirstColumn()
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "w-full truncate text-left font-semibold",
                    children: header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())
                }),
                header.column.id !== "select" && header.column.id !== "createdAt" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ColumnSettingsDropdown, {
                                column: header.column,
                                setIsTableSettingsModalOpen: setIsTableSettingsModalOpen
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                            ...attributes,
                            ...listeners,
                            className: "cursor-move",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(grip_vertical/* default */.A, {
                                className: "h-4 w-4"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    onDoubleClick: ()=>header.column.resetSize(),
                    onMouseDown: header.getResizeHandler(),
                    onTouchStart: header.getResizeHandler(),
                    className: (0,cn.cn)("absolute right-0 top-0 hidden h-full w-1 cursor-col-resize bg-slate-500", header.column.getIsResizing() ? "bg-black" : "bg-slate-500", !header.column.getCanResize() ? "hidden" : "group-hover:block")
                })
            ]
        })
    }, header.id);
};

// EXTERNAL MODULE: ../../node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(288187);
// EXTERNAL MODULE: ./modules/ui/components/switch/index.tsx
var components_switch = __webpack_require__(493204);
// EXTERNAL MODULE: ../../node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(292075);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/lib/utils/questions.tsx
var questions = __webpack_require__(4659);
;// ./modules/ui/components/data-table/components/data-table-settings-modal-item.tsx
/* __next_internal_client_entry_do_not_use__ DataTableSettingsModalItem auto */ 








const DataTableSettingsModalItem = ({ column, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const QUESTIONS_ICON_MAP = (0,questions/* getQuestionIconMap */.Ax)(t);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({
        id: column.id
    });
    const getLabelFromColumnId = ()=>{
        switch(column.id){
            case "createdAt":
                return t("common.date");
            case "addressLine1":
                return t("environments.surveys.edit.address_line_1");
            case "addressLine2":
                return t("environments.surveys.edit.address_line_2");
            case "city":
                return t("environments.surveys.edit.city");
            case "state":
                return t("environments.surveys.edit.state");
            case "zip":
                return t("environments.surveys.edit.zip");
            case "verifiedEmail":
                return t("common.verified_email");
            case "userId":
                return t("common.user_id");
            case "contactsTableUser":
                return "ID";
            case "firstName":
                return t("environments.contacts.first_name");
            case "lastName":
                return t("environments.contacts.last_name");
            default:
                return capitalize_default()(column.id);
        }
    };
    const question = survey?.questions.find((question)=>question.id === column.id);
    const style = {
        transition: transition ?? "transform 100ms ease",
        transform: utilities_esm/* CSS */.Ks.Translate.toString(transform),
        zIndex: isDragging ? 10 : 1
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        ref: setNodeRef,
        style: style,
        id: column.id,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            ...listeners,
            ...attributes,
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex w-full items-center justify-between rounded-md p-1.5 hover:cursor-move hover:bg-slate-100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                onClick: (e)=>e.preventDefault(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(grip_vertical/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            }),
                            question ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "h-4 w-4",
                                        children: QUESTIONS_ICON_MAP[question.type]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "max-w-xs truncate",
                                        children: (0,utils/* getLocalizedValue */.bT)(question.headline, "default")
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                className: "max-w-xs truncate",
                                children: getLabelFromColumnId()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_switch/* Switch */.d, {
                        id: column.id,
                        checked: column.getIsVisible(),
                        onCheckedChange: (value)=>column.toggleVisibility(!!value),
                        disabled: false
                    })
                ]
            }, column.id)
        })
    });
};

;// ./modules/ui/components/data-table/components/data-table-settings-modal.tsx
/* __next_internal_client_entry_do_not_use__ DataTableSettingsModal auto */ 







const DataTableSettingsModal = ({ open, setOpen, table, columnOrder, handleDragEnd, survey })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 5
        }
    }));
    const tableColumns = (0,react.useMemo)(()=>table.getAllColumns(), [
        table
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(modal/* Modal */.a, {
        open: open,
        setOpen: setOpen,
        noPadding: true,
        closeOnOutsideClick: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex h-full flex-col rounded-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "rounded-t-lg bg-slate-100",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-between p-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "mr-1.5 flex h-10 w-10 items-center justify-center text-slate-500",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(settings/* default */.A, {
                                        className: "h-6 w-6"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "text-xl font-medium text-slate-700",
                                            children: t("common.table_settings")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "text-sm text-slate-500",
                                            children: t("common.reorder_and_hide_columns")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "max-h-[75vh] space-y-2 overflow-auto p-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(core_esm/* DndContext */.Mp, {
                        id: "table-settings",
                        sensors: sensors,
                        onDragEnd: handleDragEnd,
                        collisionDetection: core_esm/* closestCorners */.y$,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB, {
                            items: columnOrder,
                            strategy: sortable_esm/* verticalListSortingStrategy */._G,
                            children: columnOrder.map((columnId)=>{
                                if (columnId === "select" || columnId === "createdAt") return;
                                const column = tableColumns.find((column)=>column.id === columnId);
                                if (!column) return null;
                                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(DataTableSettingsModalItem, {
                                    column: column,
                                    survey: survey
                                }, column.id);
                            })
                        })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/refresh-ccw.js
var refresh_ccw = __webpack_require__(44667);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/move-vertical.js
var move_vertical = __webpack_require__(336584);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ./modules/ui/components/delete-dialog/index.tsx
var delete_dialog = __webpack_require__(982234);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(800087);
// EXTERNAL MODULE: ../../packages/lib/utils/strings.ts
var strings = __webpack_require__(92018);
;// ./modules/ui/components/data-table/components/selected-row-settings.tsx
/* __next_internal_client_entry_do_not_use__ SelectedRowSettings auto */ 






const SelectedRowSettings = ({ table, deleteRows, type, deleteAction })=>{
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0,react.useState)(false);
    const [isDeleting, setIsDeleting] = (0,react.useState)(false);
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const selectedRowCount = table.getFilteredSelectedRowModel().rows.length;
    // Toggle all rows selection
    const handleToggleAllRowsSelection = (0,react.useCallback)((selectAll)=>{
        table.toggleAllPageRowsSelected(selectAll);
    }, [
        table
    ]);
    // Handle deletion
    const handleDelete = async ()=>{
        try {
            setIsDeleting(true);
            const rowsToBeDeleted = table.getFilteredSelectedRowModel().rows.map((row)=>row.id);
            if (type === "response") {
                await Promise.all(rowsToBeDeleted.map((responseId)=>deleteAction(responseId)));
            } else if (type === "contact") {
                await Promise.all(rowsToBeDeleted.map((responseId)=>deleteAction(responseId)));
            }
            deleteRows(rowsToBeDeleted);
            dist/* toast */.oR.success(t("common.table_items_deleted_successfully", {
                type: (0,strings/* capitalizeFirstLetter */.Zr)(type)
            }));
        } catch (error) {
            if (error instanceof Error) {
                dist/* toast */.oR.error(error.message);
            } else {
                dist/* toast */.oR.error(t("common.an_unknown_error_occurred_while_deleting_table_items", {
                    type: (0,strings/* capitalizeFirstLetter */.Zr)(type)
                }));
            }
        } finally{
            setIsDeleting(false);
            setIsDeleteDialogOpen(false);
        }
    };
    // Helper component for the separator
    const Separator = ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            children: "|"
        });
    // Helper component for selectable options
    const SelectableOption = ({ label, onClick })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "cursor-pointer rounded-md p-1 hover:bg-slate-500",
            onClick: onClick,
            children: label
        });
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-x-2 rounded-md bg-slate-900 p-1 px-2 text-xs text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    selectedRowCount,
                    " ",
                    t(`common.${type}`),
                    "s ",
                    t("common.selected")
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Separator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SelectableOption, {
                label: t("common.select_all"),
                onClick: ()=>handleToggleAllRowsSelection(true)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Separator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SelectableOption, {
                label: t("common.clear_selection"),
                onClick: ()=>handleToggleAllRowsSelection(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Separator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "cursor-pointer rounded-md bg-slate-500 p-1 hover:bg-slate-600",
                onClick: ()=>setIsDeleteDialogOpen(true),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash_2/* default */.A, {
                    strokeWidth: 1.5,
                    className: "h-4 w-4"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(delete_dialog/* DeleteDialog */.C, {
                open: isDeleteDialogOpen,
                setOpen: setIsDeleteDialogOpen,
                deleteWhat: t(`common.${type}`),
                onDelete: handleDelete,
                isDeleting: isDeleting
            })
        ]
    });
};

;// ./modules/ui/components/data-table/components/data-table-toolbar.tsx
/* __next_internal_client_entry_do_not_use__ DataTableToolbar auto */ 






const DataTableToolbar = ({ setIsExpanded, setIsTableSettingsModalOpen, isExpanded, table, deleteRows, type, deleteAction, refreshContacts })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "sticky top-12 z-30 my-2 flex w-full items-center justify-between bg-slate-50 py-2",
        children: [
            table.getFilteredSelectedRowModel().rows.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SelectedRowSettings, {
                table: table,
                deleteRows: deleteRows,
                type: type,
                deleteAction: deleteAction
            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {}),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex space-x-2",
                children: [
                    type === "contact" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                        tooltipContent: t("environments.contacts.contacts_table_refresh"),
                        shouldRender: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            onClick: async ()=>{
                                if (refreshContacts) {
                                    try {
                                        await refreshContacts();
                                        dist/* default */.Ay.success(t("environments.contacts.contacts_table_refresh_success"));
                                    } catch (err) {
                                        console.error(err);
                                        dist/* default */.Ay.error(t("environments.contacts.contacts_table_refresh_error"));
                                    }
                                }
                            },
                            className: "cursor-pointer rounded-md border bg-white hover:border-slate-400",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(refresh_ccw/* default */.A, {
                                strokeWidth: 1.5,
                                className: (0,cn.cn)("m-1 h-6 w-6 p-0.5")
                            })
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                        tooltipContent: t("common.table_settings"),
                        shouldRender: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            onClick: ()=>setIsTableSettingsModalOpen(true),
                            className: "cursor-pointer rounded-md border bg-white hover:border-slate-400",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(settings/* default */.A, {
                                strokeWidth: 1.5,
                                className: "m-1 h-6 w-6 p-0.5"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipRenderer */.rE, {
                        tooltipContent: isExpanded ? t("common.collapse_rows") : t("common.expand_rows"),
                        shouldRender: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            onClick: ()=>setIsExpanded(!isExpanded),
                            className: (0,cn.cn)("cursor-pointer rounded-md border bg-white hover:border-slate-400", isExpanded && "bg-black text-white"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(move_vertical/* default */.A, {
                                strokeWidth: 1.5,
                                className: "m-1 h-6 w-6 p-0.5"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/checkbox/index.tsx
var components_checkbox = __webpack_require__(879387);
;// ./modules/ui/components/data-table/components/selection-column.tsx
/* __next_internal_client_entry_do_not_use__ getSelectionColumn auto */ 

const getSelectionColumn = ()=>{
    return {
        id: "select",
        accessorKey: "select",
        size: 60,
        enableResizing: false,
        header: ({ table })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex w-full items-center justify-center pr-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_checkbox/* Checkbox */.S, {
                    checked: table.getIsAllPageRowsSelected(),
                    onCheckedChange: (value)=>table.toggleAllPageRowsSelected(!!value),
                    "aria-label": "Select all"
                })
            }),
        cell: ({ row })=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex w-full items-center justify-center pr-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_checkbox/* Checkbox */.S, {
                    checked: row.getIsSelected(),
                    onCheckedChange: (value)=>row.toggleSelected(!!value),
                    "aria-label": "Select row"
                })
            })
    };
};

;// ./modules/ui/components/data-table/index.tsx






// EXTERNAL MODULE: ./modules/ui/components/response-badges/index.tsx
var response_badges = __webpack_require__(487162);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-help.js
var circle_help = __webpack_require__(41714);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/tag.js
var tag = __webpack_require__(236486);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(247503);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ../../packages/lib/responses.ts
var responses = __webpack_require__(296506);
// EXTERNAL MODULE: ../../packages/lib/utils/contact.ts
var contact = __webpack_require__(669756);
// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(915139);
// EXTERNAL MODULE: ../../packages/lib/utils/recall.ts
var recall = __webpack_require__(654931);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponseTableColumns.tsx
/* __next_internal_client_entry_do_not_use__ generateResponseTableColumns auto */ 












const getAddressFieldLabel = (field, t)=>{
    switch(field){
        case "addressLine1":
            return t("environments.surveys.responses.address_line_1");
        case "addressLine2":
            return t("environments.surveys.responses.address_line_2");
        case "city":
            return t("environments.surveys.responses.city");
        case "state":
            return t("environments.surveys.responses.state_region");
        case "zip":
            return t("environments.surveys.responses.zip_post_code");
        case "country":
            return t("environments.surveys.responses.country");
        default:
            break;
    }
};
const getContactInfoFieldLabel = (field, t)=>{
    switch(field){
        case "firstName":
            return t("environments.surveys.responses.first_name");
        case "lastName":
            return t("environments.surveys.responses.last_name");
        case "email":
            return t("environments.surveys.responses.email");
        case "phone":
            return t("environments.surveys.responses.phone");
        case "company":
            return t("environments.surveys.responses.company");
        default:
            break;
    }
};
const getQuestionColumnsData = (question, survey, isExpanded, t)=>{
    const QUESTIONS_ICON_MAP = (0,questions/* getQuestionIconMap */.Ax)(t);
    switch(question.type){
        case "matrix":
            return question.rows.map((matrixRow)=>{
                return {
                    accessorKey: matrixRow.default,
                    header: ()=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "h-4 w-4",
                                        children: QUESTIONS_ICON_MAP["matrix"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "truncate",
                                        children: (0,utils/* getLocalizedValue */.bT)(matrixRow, "default")
                                    })
                                ]
                            })
                        });
                    },
                    cell: ({ row })=>{
                        const responseValue = row.original.responseData[matrixRow.default];
                        if (typeof responseValue === "string") {
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-slate-900",
                                children: responseValue
                            });
                        }
                    }
                };
            });
        case "address":
            const addressFields = [
                "addressLine1",
                "addressLine2",
                "city",
                "state",
                "zip",
                "country"
            ];
            return addressFields.map((addressField)=>{
                return {
                    accessorKey: addressField,
                    header: ()=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "h-4 w-4",
                                        children: QUESTIONS_ICON_MAP["address"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "truncate",
                                        children: getAddressFieldLabel(addressField, t)
                                    })
                                ]
                            })
                        });
                    },
                    cell: ({ row })=>{
                        const responseValue = row.original.responseData[addressField];
                        if (typeof responseValue === "string") {
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-slate-900",
                                children: responseValue
                            });
                        }
                    }
                };
            });
        case "contactInfo":
            const contactInfoFields = [
                "firstName",
                "lastName",
                "email",
                "phone",
                "company"
            ];
            return contactInfoFields.map((contactInfoField)=>{
                return {
                    accessorKey: contactInfoField,
                    header: ()=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "h-4 w-4",
                                        children: QUESTIONS_ICON_MAP["contactInfo"]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "truncate",
                                        children: getContactInfoFieldLabel(contactInfoField, t)
                                    })
                                ]
                            })
                        });
                    },
                    cell: ({ row })=>{
                        const responseValue = row.original.responseData[contactInfoField];
                        if (typeof responseValue === "string") {
                            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                className: "text-slate-900",
                                children: responseValue
                            });
                        }
                    }
                };
            });
        default:
            return [
                {
                    accessorKey: question.id,
                    header: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-2 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "h-4 w-4",
                                        children: QUESTIONS_ICON_MAP[question.type]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                        className: "truncate",
                                        children: (0,utils/* getLocalizedValue */.bT)((0,recall/* recallToHeadline */.fV)(question.headline, survey, false, "default"), "default")
                                    })
                                ]
                            })
                        }),
                    cell: ({ row })=>{
                        const responseValue = row.original.responseData[question.id];
                        const language = row.original.language;
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderResponse/* RenderResponse */.k, {
                            question: question,
                            survey: survey,
                            responseData: responseValue,
                            language: language,
                            isExpanded: isExpanded
                        });
                    }
                }
            ];
    }
};
const generateResponseTableColumns = (survey, isExpanded, isReadOnly, t)=>{
    const questionColumns = survey.questions.flatMap((question)=>getQuestionColumnsData(question, survey, isExpanded, t));
    const dateColumn = {
        accessorKey: "createdAt",
        header: ()=>t("common.date"),
        size: 200,
        cell: ({ row })=>{
            const date = new Date(row.original.createdAt);
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "text-slate-900",
                children: (0,datetime/* getFormattedDateTimeString */.HJ)(date)
            });
        }
    };
    const personColumn = {
        accessorKey: "personId",
        header: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-x-1.5",
                children: [
                    t("common.person"),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                        delayDuration: 0,
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_help/* default */.A, {
                                        className: "h-3 w-3 text-slate-500",
                                        strokeWidth: 1.5
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* TooltipContent */.ZI, {
                                    side: "bottom",
                                    className: "font-normal",
                                    children: [
                                        t("environments.surveys.responses.how_to_identify_users"),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                            className: "underline underline-offset-2 hover:text-slate-900",
                                            href: "https://formbricks.com/docs/link-surveys/user-identification",
                                            target: "_blank",
                                            children: t("common.link_surveys")
                                        }),
                                        " ",
                                        "or",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                            className: "underline underline-offset-2 hover:text-slate-900",
                                            href: "https://formbricks.com/docs/app-surveys/user-identification",
                                            target: "_blank",
                                            children: t("common.app_survey")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
        size: 275,
        cell: ({ row })=>{
            const personId = row.original.person ? (0,contact/* getContactIdentifier */.S)(row.original.person, row.original.contactAttributes) : t("common.anonymous");
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "truncate text-slate-900",
                children: personId
            });
        }
    };
    const statusColumn = {
        accessorKey: "status",
        size: 200,
        header: t("common.status"),
        cell: ({ row })=>{
            const status = row.original.status;
            return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                items: [
                    status
                ]
            });
        }
    };
    const tagsColumn = {
        accessorKey: "tags",
        header: t("common.tags"),
        cell: ({ row })=>{
            const tags = row.original.tags;
            if (Array.isArray(tags)) {
                const tagsArray = tags.map((tag)=>tag.name);
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: tagsArray,
                    isExpanded: isExpanded,
                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tag/* default */.A, {
                        className: "h-4 w-4 text-slate-500"
                    })
                });
            }
        }
    };
    const notesColumn = {
        accessorKey: "notes",
        header: t("common.notes"),
        cell: ({ row })=>{
            const notes = row.original.notes;
            if (Array.isArray(notes)) {
                const notesArray = notes.map((note)=>note.text);
                return (0,responses/* processResponseData */.fZ)(notesArray);
            }
        }
    };
    const variableColumns = survey.variables.map((variable)=>{
        return {
            accessorKey: variable.id,
            header: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                            className: "h-4 w-4",
                            children: questions/* VARIABLES_ICON_MAP */.T_[variable.type]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                            className: "truncate",
                            children: variable.name
                        })
                    ]
                }),
            cell: ({ row })=>{
                const variableResponse = row.original.variables[variable.id];
                if (typeof variableResponse === "string" || typeof variableResponse === "number") {
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "text-slate-900",
                        children: variableResponse
                    });
                }
            }
        };
    });
    const hiddenFieldColumns = survey.hiddenFields.fieldIds ? survey.hiddenFields.fieldIds.map((hiddenFieldId)=>{
        return {
            accessorKey: hiddenFieldId,
            header: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                            className: "h-4 w-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(eye_off/* default */.A, {
                                className: "h-4 w-4"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                            className: "truncate",
                            children: hiddenFieldId
                        })
                    ]
                }),
            cell: ({ row })=>{
                const hiddenFieldResponse = row.original.responseData[hiddenFieldId];
                if (typeof hiddenFieldResponse === "string") {
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "text-slate-900",
                        children: hiddenFieldResponse
                    });
                }
            }
        };
    }) : [];
    const verifiedEmailColumn = {
        accessorKey: "verifiedEmail",
        header: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        className: "h-4 w-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(mail/* default */.A, {
                            className: "h-4 w-4"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        className: "truncate",
                        children: t("common.verified_email")
                    })
                ]
            })
    };
    // Combine the selection column with the dynamic question columns
    const baseColumns = [
        personColumn,
        dateColumn,
        statusColumn,
        ...survey.isVerifyEmailEnabled ? [
            verifiedEmailColumn
        ] : [],
        ...questionColumns,
        ...variableColumns,
        ...hiddenFieldColumns,
        tagsColumn,
        notesColumn
    ];
    return isReadOnly ? baseColumns : [
        getSelectionColumn(),
        ...baseColumns
    ];
};

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f03252144c0897e563d505775df4bd58609ab9427&name=deleteResponseAction!
var next_flight_server_reference_proxy_loaderid_7f03252144c0897e563d505775df4bd58609ab9427_name_deleteResponseAction_ = __webpack_require__(26406);
// EXTERNAL MODULE: ./modules/ui/components/skeleton/index.tsx
var skeleton = __webpack_require__(290205);
// EXTERNAL MODULE: ../../node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var modifiers_esm = __webpack_require__(474700);
// EXTERNAL MODULE: ../../node_modules/@formkit/auto-animate/react/index.mjs + 1 modules
var auto_animate_react = __webpack_require__(611569);
// EXTERNAL MODULE: ../../node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(510278);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponseTable.tsx
/* __next_internal_client_entry_do_not_use__ ResponseTable auto */ 















const ResponseTable = ({ data, survey, responses, user, environment, environmentTags, isReadOnly, fetchNextPage, hasMore, deleteResponses, updateResponse, isFetchingFirstPage, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [columnVisibility, setColumnVisibility] = (0,react.useState)({});
    const [rowSelection, setRowSelection] = (0,react.useState)({});
    const [isTableSettingsModalOpen, setIsTableSettingsModalOpen] = (0,react.useState)(false);
    const [selectedResponseId, setSelectedResponseId] = (0,react.useState)(null);
    const selectedResponse = responses?.find((response)=>response.id === selectedResponseId) ?? null;
    const [isExpanded, setIsExpanded] = (0,react.useState)(null);
    const [columnOrder, setColumnOrder] = (0,react.useState)([]);
    const [parent] = (0,auto_animate_react/* useAutoAnimate */.Q)();
    // Generate columns
    const columns = generateResponseTableColumns(survey, isExpanded ?? false, isReadOnly, t);
    // Save settings to localStorage when they change
    (0,react.useEffect)(()=>{
        if (columnOrder.length > 0) {
            localStorage.setItem(`${survey.id}-columnOrder`, JSON.stringify(columnOrder));
        }
        if (Object.keys(columnVisibility).length > 0) {
            localStorage.setItem(`${survey.id}-columnVisibility`, JSON.stringify(columnVisibility));
        }
        if (isExpanded !== null) {
            localStorage.setItem(`${survey.id}-rowExpand`, JSON.stringify(isExpanded));
        }
    }, [
        columnOrder,
        columnVisibility,
        isExpanded,
        survey.id
    ]);
    // Initialize DnD sensors
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* MouseSensor */.cA, {}), (0,core_esm/* useSensor */.MS)(core_esm/* TouchSensor */.IG, {}), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {}));
    // Memoize table data and columns
    const tableData = (0,react.useMemo)(()=>isFetchingFirstPage ? Array(10).fill({}) : data, [
        data,
        isFetchingFirstPage
    ]);
    const tableColumns = (0,react.useMemo)(()=>isFetchingFirstPage ? columns.map((column)=>({
                ...column,
                cell: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(skeleton/* Skeleton */.E, {
                        className: "w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "h-6"
                        })
                    })
            })) : columns, [
        columns,
        isFetchingFirstPage
    ]);
    // React Table instance
    const table = (0,lib/* useReactTable */.N4)({
        data: tableData,
        columns: tableColumns,
        getRowId: (originalRow)=>originalRow.responseId,
        getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onColumnOrderChange: setColumnOrder,
        columnResizeMode: "onChange",
        columnResizeDirection: "ltr",
        manualPagination: true,
        defaultColumn: {
            size: 300
        },
        state: {
            columnOrder,
            columnVisibility,
            rowSelection,
            columnPinning: {
                left: [
                    "select",
                    "createdAt"
                ]
            }
        }
    });
    const defaultColumnOrder = (0,react.useMemo)(()=>table.getAllLeafColumns().map((d)=>d.id), [
        table
    ]);
    // Modified useEffect
    (0,react.useEffect)(()=>{
        const savedColumnOrder = localStorage.getItem(`${survey.id}-columnOrder`);
        const savedColumnVisibility = localStorage.getItem(`${survey.id}-columnVisibility`);
        const savedExpandedSettings = localStorage.getItem(`${survey.id}-rowExpand`);
        if (savedColumnOrder && JSON.parse(savedColumnOrder).length > 0) {
            setColumnOrder(JSON.parse(savedColumnOrder));
        } else {
            setColumnOrder(defaultColumnOrder);
        }
        if (savedColumnVisibility) {
            setColumnVisibility(JSON.parse(savedColumnVisibility));
        }
        if (savedExpandedSettings !== null) {
            setIsExpanded(JSON.parse(savedExpandedSettings));
        }
    }, [
        survey.id,
        defaultColumnOrder
    ]);
    // Handle column drag end
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setColumnOrder((prevOrder)=>{
                const oldIndex = prevOrder.indexOf(active.id);
                const newIndex = prevOrder.indexOf(over.id);
                return (0,sortable_esm/* arrayMove */.be)(prevOrder, oldIndex, newIndex);
            });
        }
    };
    const deleteResponse = async (responseId)=>{
        await (0,next_flight_server_reference_proxy_loaderid_7f03252144c0897e563d505775df4bd58609ab9427_name_deleteResponseAction_/* deleteResponseAction */.l)({
            responseId
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(core_esm/* DndContext */.Mp, {
            id: "response-table",
            collisionDetection: core_esm/* closestCenter */.fp,
            modifiers: [
                modifiers_esm/* restrictToHorizontalAxis */.dU
            ],
            onDragEnd: handleDragEnd,
            sensors: sensors,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(DataTableToolbar, {
                    setIsExpanded: setIsExpanded,
                    setIsTableSettingsModalOpen: setIsTableSettingsModalOpen,
                    isExpanded: isExpanded ?? false,
                    table: table,
                    deleteRows: deleteResponses,
                    type: "response",
                    deleteAction: deleteResponse
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "w-fit max-w-full overflow-hidden overflow-x-auto rounded-xl border border-slate-200",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "w-full overflow-x-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_table/* Table */.XI, {
                            className: "w-full",
                            style: {
                                tableLayout: "fixed"
                            },
                            id: "response-table",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableHeader */.A0, {
                                    className: "pointer-events-auto",
                                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableRow */.Hj, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB, {
                                                items: columnOrder,
                                                strategy: sortable_esm/* horizontalListSortingStrategy */.m$,
                                                children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(DataTableHeader, {
                                                        header: header,
                                                        setIsTableSettingsModalOpen: setIsTableSettingsModalOpen
                                                    }, header.id))
                                            })
                                        }, headerGroup.id))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_table/* TableBody */.BF, {
                                    ref: parent,
                                    children: [
                                        table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableRow */.Hj, {
                                                "data-state": row.getIsSelected() && "selected",
                                                className: "group cursor-pointer",
                                                children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseTableCell, {
                                                        cell: cell,
                                                        row: row,
                                                        isExpanded: isExpanded ?? false,
                                                        setSelectedResponseId: setSelectedResponseId,
                                                        responses: responses
                                                    }, cell.id))
                                            }, row.id)),
                                        table.getRowModel().rows.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableRow */.Hj, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_table/* TableCell */.nA, {
                                                colSpan: columns.length,
                                                className: "h-24 text-center",
                                                children: t("common.no_results")
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                data && hasMore && data.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        onClick: fetchNextPage,
                        children: t("common.load_more")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(DataTableSettingsModal, {
                    open: isTableSettingsModalOpen,
                    setOpen: setIsTableSettingsModalOpen,
                    survey: survey,
                    table: table,
                    columnOrder: columnOrder,
                    handleDragEnd: handleDragEnd
                }),
                responses && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseCardModal, {
                    survey: survey,
                    responses: responses,
                    user: user,
                    environment: environment,
                    environmentTags: environmentTags,
                    isReadOnly: isReadOnly,
                    updateResponse: updateResponse,
                    deleteResponses: deleteResponses,
                    setSelectedResponseId: setSelectedResponseId,
                    selectedResponseId: selectedResponseId,
                    open: selectedResponse !== null,
                    locale: locale,
                    setOpen: (open)=>{
                        if (!open) {
                            setSelectedResponseId(null);
                        }
                    }
                })
            ]
        })
    });
};

;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponseDataView.tsx
/* __next_internal_client_entry_do_not_use__ ResponseDataView auto */ 



const formatAddressData = (responseValue)=>{
    const addressKeys = [
        "addressLine1",
        "addressLine2",
        "city",
        "state",
        "zip",
        "country"
    ];
    return Array.isArray(responseValue) ? responseValue.reduce((acc, curr, index)=>{
        acc[addressKeys[index]] = curr || ""; // Fallback to empty string if undefined
        return acc;
    }, {}) : {};
};
const formatContactInfoData = (responseValue)=>{
    const addressKeys = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "company"
    ];
    return Array.isArray(responseValue) ? responseValue.reduce((acc, curr, index)=>{
        acc[addressKeys[index]] = curr || ""; // Fallback to empty string if undefined
        return acc;
    }, {}) : {};
};
const extractResponseData = (response, survey)=>{
    let responseData = {};
    survey.questions.forEach((question)=>{
        const responseValue = response.data[question.id];
        switch(question.type){
            case "matrix":
                if (typeof responseValue === "object") {
                    responseData = {
                        ...responseData,
                        ...responseValue
                    };
                }
                break;
            case "address":
                responseData = {
                    ...responseData,
                    ...formatAddressData(responseValue)
                };
                break;
            case "contactInfo":
                responseData = {
                    ...responseData,
                    ...formatContactInfoData(responseValue)
                };
                break;
            default:
                responseData[question.id] = responseValue;
        }
    });
    survey.hiddenFields.fieldIds?.forEach((fieldId)=>{
        responseData[fieldId] = response.data[fieldId];
    });
    return responseData;
};
const mapResponsesToTableData = (responses, survey, t)=>{
    return responses.map((response)=>({
            responseData: extractResponseData(response, survey),
            createdAt: response.createdAt,
            status: response.finished ? t("environments.surveys.responses.completed") : t("environments.surveys.responses.not_completed"),
            responseId: response.id,
            tags: response.tags,
            notes: response.notes,
            variables: survey.variables.reduce((acc, curr)=>{
                return Object.assign(acc, {
                    [curr.id]: response.variables[curr.id]
                });
            }, {}),
            verifiedEmail: typeof response.data["verifiedEmail"] === "string" ? response.data["verifiedEmail"] : "",
            language: response.language,
            person: response.contact,
            contactAttributes: response.contactAttributes
        }));
};
const ResponseDataView = ({ survey, responses, user, environment, environmentTags, isReadOnly, fetchNextPage, hasMore, deleteResponses, updateResponse, isFetchingFirstPage, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const data = mapResponsesToTableData(responses, survey, t);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseTable, {
            data: data,
            survey: survey,
            responses: responses,
            user: user,
            environmentTags: environmentTags,
            isReadOnly: isReadOnly,
            environment: environment,
            fetchNextPage: fetchNextPage,
            hasMore: hasMore,
            deleteResponses: deleteResponses,
            updateResponse: updateResponse,
            isFetchingFirstPage: isFetchingFirstPage,
            locale: locale
        })
    });
};

// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/CustomFilter.tsx + 6 modules
var CustomFilter = __webpack_require__(151979);
// EXTERNAL MODULE: ./app/(app)/environments/[environmentId]/surveys/[surveyId]/components/ResultsShareButton.tsx + 4 modules
var ResultsShareButton = __webpack_require__(412643);
// EXTERNAL MODULE: ./app/lib/surveys/surveys.ts
var surveys = __webpack_require__(291786);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f5ceff134805ecbfd64e844b03442fedc085165f8&name=getResponsesBySurveySharingKeyAction!

const getResponsesBySurveySharingKeyAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f5ceff134805ecbfd64e844b03442fedc085165f8", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getResponsesBySurveySharingKeyAction")
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db&name=getResponseCountBySurveySharingKeyAction!
var next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_ = __webpack_require__(788253);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
;// ./app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponsePage.tsx
/* __next_internal_client_entry_do_not_use__ ResponsePage auto */ 










const ResponsePage = ({ environment, survey, surveyId, webAppUrl, user, environmentTags, responsesPerPage, locale, isReadOnly })=>{
    const params = (0,navigation.useParams)();
    const sharingKey = params.sharingKey;
    const isSharingPage = !!sharingKey;
    const [responseCount, setResponseCount] = (0,react.useState)(null);
    const [responses, setResponses] = (0,react.useState)([]);
    const [page, setPage] = (0,react.useState)(1);
    const [hasMore, setHasMore] = (0,react.useState)(true);
    const [isFetchingFirstPage, setFetchingFirstPage] = (0,react.useState)(true);
    const { selectedFilter, dateRange, resetState } = (0,ResponseFilterContext/* useResponseFilter */.S)();
    const filters = (0,react.useMemo)(()=>(0,surveys/* getFormattedFilters */.QR)(survey, selectedFilter, dateRange), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        selectedFilter,
        dateRange
    ]);
    const searchParams = (0,navigation.useSearchParams)();
    const fetchNextPage = (0,react.useCallback)(async ()=>{
        const newPage = page + 1;
        let newResponses = [];
        if (isSharingPage) {
            const getResponsesActionResponse = await getResponsesBySurveySharingKeyAction({
                sharingKey: sharingKey,
                limit: responsesPerPage,
                offset: (newPage - 1) * responsesPerPage,
                filterCriteria: filters
            });
            newResponses = getResponsesActionResponse?.data || [];
        } else {
            const getResponsesActionResponse = await getResponsesAction({
                surveyId,
                limit: responsesPerPage,
                offset: (newPage - 1) * responsesPerPage,
                filterCriteria: filters
            });
            newResponses = getResponsesActionResponse?.data || [];
        }
        if (newResponses.length === 0 || newResponses.length < responsesPerPage) {
            setHasMore(false);
        }
        setResponses([
            ...responses,
            ...newResponses
        ]);
        setPage(newPage);
    }, [
        filters,
        isSharingPage,
        page,
        responses,
        responsesPerPage,
        sharingKey,
        surveyId
    ]);
    const deleteResponses = (responseIds)=>{
        setResponses(responses.filter((response)=>!responseIds.includes(response.id)));
        if (responseCount) {
            setResponseCount(responseCount - responseIds.length);
        }
    };
    const updateResponse = (responseId, updatedResponse)=>{
        if (responses) {
            setResponses(responses.map((response)=>response.id === responseId ? updatedResponse : response));
        }
    };
    const surveyMemoized = (0,react.useMemo)(()=>{
        return (0,recall/* replaceHeadlineRecall */.uD)(survey, "default");
    }, [
        survey
    ]);
    (0,react.useEffect)(()=>{
        if (!searchParams?.get("referer")) {
            resetState();
        }
    }, [
        searchParams,
        resetState
    ]);
    (0,react.useEffect)(()=>{
        const handleResponsesCount = async ()=>{
            let responseCount = 0;
            if (isSharingPage) {
                const responseCountActionResponse = await (0,next_flight_server_reference_proxy_loaderid_7f6b86dfb9f916340e09181cf5b45bed7b1e7c65db_name_getResponseCountBySurveySharingKeyAction_/* getResponseCountBySurveySharingKeyAction */.v)({
                    sharingKey,
                    filterCriteria: filters
                });
                responseCount = responseCountActionResponse?.data || 0;
            } else {
                const responseCountActionResponse = await (0,next_flight_server_reference_proxy_loaderid_7fc40fcf4d8238c50e0ee14725c1e9b7cc636f4788_name_getResponseCountAction_/* getResponseCountAction */.X)({
                    surveyId,
                    filterCriteria: filters
                });
                responseCount = responseCountActionResponse?.data || 0;
            }
            setResponseCount(responseCount);
        };
        handleResponsesCount();
    }, [
        filters,
        isSharingPage,
        sharingKey,
        surveyId
    ]);
    (0,react.useEffect)(()=>{
        const fetchInitialResponses = async ()=>{
            try {
                setFetchingFirstPage(true);
                let responses = [];
                if (isSharingPage) {
                    const getResponsesActionResponse = await getResponsesBySurveySharingKeyAction({
                        sharingKey,
                        limit: responsesPerPage,
                        offset: 0,
                        filterCriteria: filters
                    });
                    responses = getResponsesActionResponse?.data || [];
                } else {
                    const getResponsesActionResponse = await getResponsesAction({
                        surveyId,
                        limit: responsesPerPage,
                        offset: 0,
                        filterCriteria: filters
                    });
                    responses = getResponsesActionResponse?.data || [];
                }
                if (responses.length < responsesPerPage) {
                    setHasMore(false);
                }
                setResponses(responses);
            } finally{
                setFetchingFirstPage(false);
            }
        };
        fetchInitialResponses();
    }, [
        surveyId,
        filters,
        responsesPerPage,
        sharingKey,
        isSharingPage
    ]);
    (0,react.useEffect)(()=>{
        setPage(1);
        setHasMore(true);
        setResponses([]);
    }, [
        filters
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex gap-1.5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CustomFilter/* CustomFilter */.Y, {
                        survey: surveyMemoized
                    }),
                    !isReadOnly && !isSharingPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResultsShareButton/* ResultsShareButton */.k, {
                        survey: survey,
                        webAppUrl: webAppUrl
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseDataView, {
                survey: survey,
                responses: responses,
                user: user,
                environment: environment,
                environmentTags: environmentTags,
                isReadOnly: isReadOnly,
                fetchNextPage: fetchNextPage,
                hasMore: hasMore,
                deleteResponses: deleteResponses,
                updateResponse: updateResponse,
                isFetchingFirstPage: isFetchingFirstPage,
                locale: locale
            })
        ]
    });
};


/***/ }),

/***/ 419240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsePage: () => (/* binding */ ResponsePage)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672771);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__);

const ResponsePage = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call ResponsePage() from the server but ResponsePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"/Users/kdy1/projects/formbricks/apps/web/app/(app)/environments/[environmentId]/surveys/[surveyId]/(analysis)/responses/components/ResponsePage.tsx",
"ResponsePage",
);

/***/ })

};
;