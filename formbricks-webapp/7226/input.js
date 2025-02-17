"use strict";
exports.id = 7226;
exports.ids = [7226];
exports.modules = {

/***/ 449916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ RenderResponse)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/analysis/utils.tsx
var utils = __webpack_require__(930465);
// EXTERNAL MODULE: ./modules/ui/components/array-response/index.tsx
var array_response = __webpack_require__(720489);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(516940);
// EXTERNAL MODULE: ../../packages/lib/storage/utils.ts
var storage_utils = __webpack_require__(904477);
;// ./modules/ui/components/file-upload-response/index.tsx
/* __next_internal_client_entry_do_not_use__ FileUploadResponse auto */ 



const FileUploadResponse = ({ selected })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    if (selected.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "font-semibold text-slate-500",
            children: t("common.skipped")
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "",
        children: selected.map((fileUrl, index)=>{
            const fileName = (0,storage_utils/* getOriginalFileNameFromUrl */.x)(fileUrl);
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("a", {
                href: fileUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group flex max-w-60 items-center justify-center rounded-lg bg-slate-200 px-2 py-1 hover:bg-slate-300",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-slate-700 group-hover:text-slate-800",
                        children: fileName ? fileName : "Download"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(download/* default */.A, {
                        className: "p-0.5",
                        strokeWidth: 1.5
                    })
                ]
            }, index);
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./modules/ui/components/picture-selection-response/index.tsx
/* __next_internal_client_entry_do_not_use__ PictureSelectionResponse auto */ 


const PictureSelectionResponse = ({ choices, selected, isExpanded = true })=>{
    if (typeof selected !== "object") return null;
    const choiceImageMapping = choices.reduce((acc, choice)=>{
        acc[choice.id] = choice.imageUrl;
        return acc;
    }, {});
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)("my-1 flex gap-x-5 gap-y-4", isExpanded ? "flex-wrap" : ""),
        children: selected.map((id)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "relative h-10 w-16",
                children: choiceImageMapping[id] && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                    src: choiceImageMapping[id],
                    alt: choiceImageMapping[id].split("/").pop() || "Image",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    className: "rounded-lg"
                })
            }, id))
    });
};

;// ./modules/ui/components/ranking-response/index.tsx


const RankingRespone = ({ value, isExpanded })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)("my-1 font-semibold text-slate-700", isExpanded ? "" : "flex space-x-2"),
        dir: "auto",
        children: value.map((item, index)=>item && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mb-1 flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                        className: "mr-2 text-slate-400",
                        children: [
                            "#",
                            index + 1
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "rounded bg-slate-100 px-2 py-1",
                        children: item
                    })
                ]
            }, index))
    });
};

// EXTERNAL MODULE: ./modules/ui/components/rating-response/index.tsx + 2 modules
var rating_response = __webpack_require__(438501);
// EXTERNAL MODULE: ./modules/ui/components/response-badges/index.tsx
var response_badges = __webpack_require__(487162);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(321070);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check-check.js
var check_check = __webpack_require__(389779);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js
var mouse_pointer_click = __webpack_require__(277792);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var i18n_utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/lib/responses.ts
var responses = __webpack_require__(296506);
// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(915139);
// EXTERNAL MODULE: ../../packages/lib/utils/strings.ts
var strings = __webpack_require__(92018);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(102379);
;// ./modules/analysis/components/SingleResponseCard/components/RenderResponse.tsx
















const RenderResponse = ({ responseData, question, survey, language, isExpanded = true })=>{
    if (typeof responseData === "string" && responseData === "" || Array.isArray(responseData) && responseData.length === 0 || typeof responseData === "object" && Object.keys(responseData).length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
            className: "ph-no-capture my-1 font-normal text-slate-700",
            children: "-"
        });
    }
    const handleArray = (data)=>{
        if (Array.isArray(data)) {
            return data.join(", ");
        } else {
            return String(data);
        }
    };
    const questionType = question.type;
    switch(questionType){
        case types/* TSurveyQuestionTypeEnum */.wn.Rating:
            if (typeof responseData === "number") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(rating_response/* RatingResponse */.j, {
                    scale: question.scale,
                    answer: responseData,
                    range: question.range,
                    addColors: question.isColorCodingEnabled
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Date:
            if (typeof responseData === "string") {
                const formattedDateString = (0,datetime/* formatDateWithOrdinal */.zM)(new Date(responseData));
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                    className: "ph-no-capture my-1 truncate font-normal text-slate-700",
                    children: formattedDateString
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.PictureSelection:
            if (Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PictureSelectionResponse, {
                    choices: question.choices,
                    selected: responseData,
                    isExpanded: isExpanded
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.FileUpload:
            if (Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(FileUploadResponse, {
                    selected: responseData
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Matrix:
            if (typeof responseData === "object" && !Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
                    children: question.rows.map((row)=>{
                        const languagCode = (0,i18n_utils/* getLanguageCode */.Ul)(survey.languages, language);
                        const rowValueInSelectedLanguage = (0,i18n_utils/* getLocalizedValue */.bT)(row, languagCode);
                        if (!responseData[rowValueInSelectedLanguage]) return null;
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                            className: "ph-no-capture my-1 font-normal capitalize text-slate-700",
                            children: [
                                rowValueInSelectedLanguage,
                                ":",
                                (0,responses/* processResponseData */.fZ)(responseData[rowValueInSelectedLanguage])
                            ]
                        }, rowValueInSelectedLanguage);
                    })
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Address:
        case types/* TSurveyQuestionTypeEnum */.wn.ContactInfo:
            if (Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(array_response/* ArrayResponse */.x, {
                    value: responseData
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Cal:
            if (typeof responseData === "string" || typeof responseData === "number") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: [
                        (0,strings/* capitalizeFirstLetter */.Zr)(responseData.toString())
                    ],
                    isExpanded: isExpanded,
                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(phone/* default */.A, {
                        className: "h-4 w-4 text-slate-500"
                    })
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Consent:
            if (typeof responseData === "string" || typeof responseData === "number") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: [
                        (0,strings/* capitalizeFirstLetter */.Zr)(responseData.toString())
                    ],
                    isExpanded: isExpanded,
                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(check_check/* default */.A, {
                        className: "h-4 w-4 text-slate-500"
                    })
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.CTA:
            if (typeof responseData === "string" || typeof responseData === "number") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: [
                        (0,strings/* capitalizeFirstLetter */.Zr)(responseData.toString())
                    ],
                    isExpanded: isExpanded,
                    icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(mouse_pointer_click/* default */.A, {
                        className: "h-4 w-4 text-slate-500"
                    })
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceMulti:
        case types/* TSurveyQuestionTypeEnum */.wn.MultipleChoiceSingle:
        case types/* TSurveyQuestionTypeEnum */.wn.NPS:
            if (typeof responseData === "string" || typeof responseData === "number") {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: [
                        responseData.toString()
                    ],
                    isExpanded: isExpanded
                });
            } else if (Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(response_badges/* ResponseBadges */.A, {
                    items: responseData,
                    isExpanded: isExpanded
                });
            }
            break;
        case types/* TSurveyQuestionTypeEnum */.wn.Ranking:
            if (Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RankingRespone, {
                    value: responseData,
                    isExpanded: isExpanded
                });
            }
        default:
            if (typeof responseData === "string" || typeof responseData === "number" || Array.isArray(responseData)) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                    className: (0,cn.cn)("ph-no-capture my-1 truncate font-normal text-slate-700", isExpanded ? "whitespace-pre-line" : "whitespace-nowrap"),
                    children: typeof responseData === "string" ? (0,utils/* renderHyperlinkedContent */.N)(responseData) : Array.isArray(responseData) ? handleArray(responseData) : responseData
                });
            }
    }
    return null; // Return null if no case is matched
};


/***/ }),

/***/ 890048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ SingleResponseCard)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/delete-dialog/index.tsx
var delete_dialog = __webpack_require__(982234);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(553626);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(470207);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f03252144c0897e563d505775df4bd58609ab9427&name=deleteResponseAction!
var next_flight_server_reference_proxy_loaderid_7f03252144c0897e563d505775df4bd58609ab9427_name_deleteResponseAction_ = __webpack_require__(26406);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f91e312a52b4503b07101749432dc91d16ea59765&name=getResponseAction!

const getResponseAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f91e312a52b4503b07101749432dc91d16ea59765", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getResponseAction")
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/tooltip/index.tsx
var tooltip = __webpack_require__(163701);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(108996);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/pencil.js
var pencil = __webpack_require__(363557);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(129170);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/maximize-2.js
var maximize_2 = __webpack_require__(694453);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/minimize-2.js
var minimize_2 = __webpack_require__(558451);
// EXTERNAL MODULE: ../../packages/lib/time.ts
var time = __webpack_require__(775453);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff7037006304bf92c8543614d0c64ab97258cda75&name=createResponseNoteAction!

const createResponseNoteAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7ff7037006304bf92c8543614d0c64ab97258cda75", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createResponseNoteAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f0e3250268918c0cea6fb5e8b0ed528cab3a8ef2c&name=resolveResponseNoteAction!

const resolveResponseNoteAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f0e3250268918c0cea6fb5e8b0ed528cab3a8ef2c", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "resolveResponseNoteAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fe6ddb4451a1dc19ea9d9956bbfaea9b65b4daad5&name=updateResponseNoteAction!

const updateResponseNoteAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fe6ddb4451a1dc19ea9d9956bbfaea9b65b4daad5", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "updateResponseNoteAction")
;// ./modules/analysis/components/SingleResponseCard/components/ResponseNote.tsx
/* __next_internal_client_entry_do_not_use__ ResponseNotes auto */ 











const ResponseNotes = ({ user, responseId, notes, isOpen, setIsOpen, updateFetchedResponses, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [noteText, setNoteText] = (0,react.useState)("");
    const [isCreatingNote, setIsCreatingNote] = (0,react.useState)(false);
    const [isUpdatingNote, setIsUpdatingNote] = (0,react.useState)(false);
    const [isTextAreaOpen, setIsTextAreaOpen] = (0,react.useState)(true);
    const [noteId, setNoteId] = (0,react.useState)("");
    const divRef = (0,react.useRef)(null);
    const handleNoteSubmission = async (e)=>{
        e.preventDefault();
        setIsCreatingNote(true);
        try {
            await createResponseNoteAction({
                responseId: responseId,
                text: noteText
            });
            updateFetchedResponses();
            setIsCreatingNote(false);
            setNoteText("");
        } catch (e) {
            dist/* default */.Ay.error(t("environments.surveys.responses.an_error_occurred_creating_a_new_note"));
            setIsCreatingNote(false);
        }
    };
    const handleResolveNote = (note)=>{
        try {
            resolveResponseNoteAction({
                responseNoteId: note.id
            });
            // when this was the last note, close the notes panel
            if (unresolvedNotes.length === 1) {
                setIsOpen(false);
            }
            updateFetchedResponses();
        } catch (e) {
            dist/* default */.Ay.error(t("environments.surveys.responses.an_error_occurred_resolving_a_note"));
            setIsUpdatingNote(false);
        }
    };
    const handleEditPencil = (note)=>{
        setIsTextAreaOpen(true);
        setNoteText(note.text);
        setIsUpdatingNote(true);
        setNoteId(note.id);
    };
    const handleNoteUpdate = async (e)=>{
        e.preventDefault();
        setIsUpdatingNote(true);
        try {
            await updateResponseNoteAction({
                responseNoteId: noteId,
                text: noteText
            });
            updateFetchedResponses();
            setIsUpdatingNote(false);
            setNoteText("");
        } catch (e) {
            dist/* default */.Ay.error(t("environments.surveys.responses.an_error_occurred_updating_a_note"));
            setIsUpdatingNote(false);
        }
    };
    (0,react.useEffect)(()=>{
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [
        notes
    ]);
    const unresolvedNotes = (0,react.useMemo)(()=>notes.filter((note)=>!note.isResolved), [
        notes
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)("absolute w-1/4 rounded-lg border border-slate-200 shadow-sm transition-all", !isOpen && unresolvedNotes.length && "group/hint cursor-pointer bg-white hover:-right-3", !isOpen && !unresolvedNotes.length && "cursor-pointer bg-slate-50", isOpen ? "-right-5 top-0 h-5/6 max-h-[600px] w-1/4 bg-white" : unresolvedNotes.length ? "right-0 top-[8.33%] h-5/6 max-h-[600px] w-1/12" : "right-[120px] top-[8.333%] h-5/6 max-h-[600px] w-1/12 group-hover:right-[0]"),
        onClick: ()=>{
            if (!isOpen) setIsOpen(true);
        },
        children: !isOpen ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: (0,clsx/* default */.A)("space-y-2 rounded-t-lg px-2 pb-2 pt-2", unresolvedNotes.length ? "flex h-12 items-center justify-end bg-amber-50" : "bg-slate-200"),
                    children: !unresolvedNotes.length ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "group flex items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                className: "float-left ml-4 pb-1 text-sm text-slate-600",
                                children: t("common.note")
                            })
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "float-left mr-1.5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(maximize_2/* default */.A, {
                            className: "h-4 w-4 text-amber-500 hover:text-amber-600 group-hover/hint:scale-110"
                        })
                    })
                }),
                !unresolvedNotes.length ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex flex-1 items-center justify-end pr-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(plus/* default */.A, {
                            className: "h-5 w-5 text-slate-400"
                        })
                    })
                }) : null
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "relative flex h-full flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "rounded-t-lg bg-amber-50 px-4 pb-3 pt-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "group flex items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                    className: "pb-1 text-sm text-amber-500",
                                    children: t("common.note")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                className: "h-6 w-6 cursor-pointer",
                                onClick: ()=>{
                                    setIsOpen(!isOpen);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(minimize_2/* default */.A, {
                                    className: "h-5 w-5 text-amber-500 hover:text-amber-600"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "flex-1 overflow-auto px-4 pt-2",
                    ref: divRef,
                    children: unresolvedNotes.map((note)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "group/notetext mb-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                    className: "block font-semibold text-slate-700",
                                    children: [
                                        note.user.name,
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("time", {
                                            className: "ml-2 text-xs font-normal text-slate-500",
                                            dateTime: (0,time/* timeSince */._D)(note.updatedAt.toISOString(), locale),
                                            children: (0,time/* timeSince */._D)(note.updatedAt.toISOString(), locale)
                                        }),
                                        note.isEdited && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                            className: "ml-1 text-[12px] font-normal text-slate-500",
                                            children: "(edited)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                            className: "block text-slate-700",
                                            children: note.text
                                        }),
                                        user.id === note.user.id && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                            className: "ml-auto hidden group-hover/notetext:block",
                                            onClick: ()=>{
                                                handleEditPencil(note);
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(pencil/* default */.A, {
                                                className: "h-3 w-3 text-slate-500"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("button", {
                                                            className: "ml-2 hidden group-hover/notetext:block",
                                                            onClick: ()=>{
                                                                handleResolveNote(note);
                                                            },
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(check/* default */.A, {
                                                                className: "h-4 w-4 text-slate-500"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                                        className: "max-w-[45rem] break-all",
                                                        side: "left",
                                                        sideOffset: 5,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                            className: "text-slate-700",
                                                            children: t("environments.surveys.responses.resolve")
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, note.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: (0,cn.cn)("h-[120px] transition-all duration-300", !isTextAreaOpen && "pointer-events-none h-14"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: (0,clsx/* default */.A)("absolute bottom-0 w-full px-3 pb-3", !unresolvedNotes.length && "absolute bottom-0"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                            onSubmit: isUpdatingNote ? handleNoteUpdate : handleNoteSubmission,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("textarea", {
                                        rows: 2,
                                        className: (0,cn.cn)("block w-full resize-none rounded-md border border-slate-100 bg-slate-50 p-2 shadow-sm focus:border-slate-500 focus:ring-0 sm:text-sm", !isTextAreaOpen && "scale-y-0 transition-all duration-1000", !isTextAreaOpen && "translate-y-8 transition-all duration-300", isTextAreaOpen && "scale-y-1 transition-all duration-1000", isTextAreaOpen && "translate-y-0 transition-all duration-300"),
                                        onChange: (e)=>setNoteText(e.target.value),
                                        value: noteText,
                                        autoFocus: true,
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" && noteText) {
                                                e.preventDefault();
                                                {
                                                    isUpdatingNote ? handleNoteUpdate(e) : handleNoteSubmission(e);
                                                }
                                            }
                                        },
                                        required: true
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "pointer-events-auto z-10 mt-2 flex w-full items-center justify-end",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                            variant: "ghost",
                                            type: "button",
                                            size: "sm",
                                            className: (0,cn.cn)("mr-auto duration-300"),
                                            onClick: ()=>{
                                                setIsTextAreaOpen(!isTextAreaOpen);
                                            },
                                            children: isTextAreaOpen ? t("common.hide") : t("common.show")
                                        }),
                                        isTextAreaOpen && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                                            size: "sm",
                                            type: "submit",
                                            loading: isCreatingNote,
                                            children: isUpdatingNote ? t("common.save") : t("common.send")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(856763);
// EXTERNAL MODULE: ./modules/ui/components/tag/index.tsx
var components_tag = __webpack_require__(711940);
// EXTERNAL MODULE: ./modules/ui/components/command/index.tsx
var command = __webpack_require__(454319);
// EXTERNAL MODULE: ./modules/ui/components/popover/index.tsx
var popover = __webpack_require__(10015);
;// ./modules/ui/components/tags-combobox/index.tsx
/* __next_internal_client_entry_do_not_use__ TagsCombobox auto */ 





const TagsCombobox = ({ tags, currentTags, addTag, createTag, searchValue, setSearchValue, open, setOpen })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const tagsToSearch = (0,react.useMemo)(()=>tags.filter((tag)=>{
            const found = currentTags.findIndex((currentTag)=>currentTag.value.toLowerCase() === tag.value.toLowerCase());
            return found === -1;
        }), [
        currentTags,
        tags
    ]);
    (0,react.useEffect)(()=>{
        // reset search value and value when closing the combobox
        if (!open) {
            setSearchValue("");
        }
    }, [
        open,
        setSearchValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(popover/* Popover */.AM, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(popover/* PopoverTrigger */.Wv, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                    size: "sm",
                    "aria-expanded": open,
                    children: t("environments.project.tags.add_tag")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(popover/* PopoverContent */.hl, {
                className: "max-h-60 w-[200px] overflow-y-auto p-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command/* Command */.uB, {
                    filter: (value, search)=>{
                        if (value === "_create") {
                            return 1;
                        }
                        const foundLabel = tagsToSearch.find((tag)=>tag.value.toLowerCase() === value)?.label ?? "";
                        if (foundLabel.toLowerCase().includes(search.toLowerCase())) {
                            return 1;
                        }
                        return 0;
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "p-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandInput */.G7, {
                                placeholder: tagsToSearch?.length === 0 ? t("environments.project.tags.add_tag") : t("environments.project.tags.search_tags"),
                                className: "border-b border-none border-transparent shadow-none outline-0 ring-offset-transparent focus:border-none focus:border-transparent focus:shadow-none focus:outline-0 focus:ring-offset-transparent",
                                value: searchValue,
                                onValueChange: (search)=>setSearchValue(search),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && searchValue !== "") {
                                        if (!tagsToSearch?.find((tag)=>tag?.label?.toLowerCase().includes(searchValue?.toLowerCase()))) {
                                            createTag?.(searchValue);
                                        }
                                    }
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandList */.oI, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(command/* CommandGroup */.L$, {
                                children: [
                                    tagsToSearch?.map((tag)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandItem */.h_, {
                                            value: tag.value,
                                            onSelect: (currentValue)=>{
                                                setOpen(false);
                                                addTag(currentValue);
                                            },
                                            className: "hover:cursor-pointer hover:bg-slate-50",
                                            children: tag.label
                                        }, tag.value);
                                    }),
                                    searchValue !== "" && !currentTags.find((tag)=>tag.label === searchValue) && !tagsToSearch.find((tag)=>tag.label === searchValue) && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(command/* CommandItem */.h_, {
                                        value: "_create",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("button", {
                                            onClick: ()=>createTag?.(searchValue),
                                            className: "h-8 w-full text-left hover:cursor-pointer hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",
                                            disabled: !!currentTags.find((tag)=>tag.label === searchValue),
                                            children: [
                                                "+ ",
                                                t("environments.project.tags.add"),
                                                " ",
                                                searchValue
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(174753);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(88515);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7fcfa3a4acc8abc86d35b99e1399e55793264fa115&name=deleteTagOnResponseAction!

const deleteTagOnResponseAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7fcfa3a4acc8abc86d35b99e1399e55793264fa115", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "deleteTagOnResponseAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f9530d89aab065b88701bf919b9a07f2b28f89d0b&name=createTagAction!

const createTagAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f9530d89aab065b88701bf919b9a07f2b28f89d0b", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createTagAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f1b13b59139645fabed69b6d7f1ea716e9eb14b8f&name=createTagToResponseAction!

const createTagToResponseAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f1b13b59139645fabed69b6d7f1ea716e9eb14b8f", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "createTagToResponseAction")
;// ./modules/analysis/components/SingleResponseCard/components/ResponseTagsWrapper.tsx
/* __next_internal_client_entry_do_not_use__ ResponseTagsWrapper auto */ 










const ResponseTagsWrapper = ({ tags, environmentId, responseId, environmentTags, updateFetchedResponses, isReadOnly })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const router = (0,navigation.useRouter)();
    const [searchValue, setSearchValue] = (0,react.useState)("");
    const [open, setOpen] = react_default().useState(false);
    const [tagsState, setTagsState] = (0,react.useState)(tags);
    const [tagIdToHighlight, setTagIdToHighlight] = (0,react.useState)("");
    const onDelete = async (tagId)=>{
        try {
            await deleteTagOnResponseAction({
                responseId,
                tagId
            });
            updateFetchedResponses();
        } catch (e) {
            dist/* toast */.oR.error(t("environments.surveys.responses.an_error_occurred_deleting_the_tag"));
        }
    };
    (0,react.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            if (tagIdToHighlight) {
                setTagIdToHighlight("");
            }
        }, 2000);
        return ()=>clearTimeout(timeoutId);
    }, [
        tagIdToHighlight
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-3 border-t border-slate-200 px-6 py-4",
        children: [
            !isReadOnly && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                variant: "ghost",
                size: "sm",
                className: "cursor-pointer p-0",
                onClick: ()=>{
                    router.push(`/environments/${environmentId}/project/tags`);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(settings/* default */.A, {
                    className: "h-5 w-5 text-slate-500 hover:text-slate-600"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    tagsState?.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_tag/* Tag */.v, {
                            onDelete: onDelete,
                            tagId: tag.tagId,
                            tagName: tag.tagName,
                            tags: tagsState,
                            setTagsState: setTagsState,
                            highlight: tagIdToHighlight === tag.tagId,
                            allowDelete: !isReadOnly
                        }, tag.tagId)),
                    !isReadOnly && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TagsCombobox, {
                        open: open,
                        setOpen: setOpen,
                        searchValue: searchValue,
                        setSearchValue: setSearchValue,
                        tags: environmentTags?.map((tag)=>({
                                value: tag.id,
                                label: tag.name
                            })) ?? [],
                        currentTags: tagsState.map((tag)=>({
                                value: tag.tagId,
                                label: tag.tagName
                            })),
                        createTag: async (tagName)=>{
                            setOpen(false);
                            const createTagResponse = await createTagAction({
                                environmentId,
                                tagName: tagName?.trim() ?? ""
                            });
                            if (createTagResponse?.data) {
                                setTagsState((prevTags)=>[
                                        ...prevTags,
                                        {
                                            tagId: createTagResponse.data?.id ?? "",
                                            tagName: createTagResponse.data?.name ?? ""
                                        }
                                    ]);
                                const createTagToResponseActionResponse = await createTagToResponseAction({
                                    responseId,
                                    tagId: createTagResponse.data.id
                                });
                                if (createTagToResponseActionResponse?.data) {
                                    updateFetchedResponses();
                                    setSearchValue("");
                                }
                            } else {
                                const errorMessage = (0,helper/* getFormattedErrorMessage */.g3)(createTagResponse);
                                if (errorMessage.includes("Unique constraint failed on the fields")) {
                                    dist/* toast */.oR.error(t("environments.surveys.responses.tag_already_exists"), {
                                        duration: 2000,
                                        icon: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_alert/* default */.A, {
                                            className: "h-5 w-5 text-orange-500"
                                        })
                                    });
                                } else {
                                    dist/* toast */.oR.error(errorMessage ?? t("common.something_went_wrong_please_try_again"), {
                                        duration: 2000
                                    });
                                }
                                setSearchValue("");
                            }
                        },
                        addTag: (tagId)=>{
                            setTagsState((prevTags)=>[
                                    ...prevTags,
                                    {
                                        tagId,
                                        tagName: environmentTags?.find((tag)=>tag.id === tagId)?.name ?? ""
                                    }
                                ]);
                            createTagToResponseAction({
                                responseId,
                                tagId
                            }).then(()=>{
                                updateFetchedResponses();
                                setSearchValue("");
                                setOpen(false);
                            });
                        }
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-check.js
var circle_check = __webpack_require__(794669);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(864698);
// EXTERNAL MODULE: ../../packages/lib/utils/recall.ts
var recall = __webpack_require__(654931);
;// ./modules/analysis/components/SingleResponseCard/util.ts
const isValidValue = (value)=>{
    return typeof value === "string" && value.trim() !== "" || Array.isArray(value) && value.length > 0 || typeof value === "number" || typeof value === "object" && Object.entries(value).length > 0;
};
const isSubmissionTimeMoreThan5Minutes = (submissionTimeISOString)=>{
    const submissionTime = new Date(submissionTimeISOString);
    const currentTime = new Date();
    const timeDifference = (currentTime.getTime() - submissionTime.getTime()) / (1000 * 60); // Convert milliseconds to minutes
    return timeDifference > 5;
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(774619);
;// ./modules/analysis/components/SingleResponseCard/components/HiddenFields.tsx
/* __next_internal_client_entry_do_not_use__ HiddenFields auto */ 



const HiddenFields = ({ hiddenFields, responseData })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const fieldIds = hiddenFields.fieldIds ?? [];
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mt-6 flex flex-col gap-6",
        children: fieldIds.map((field)=>{
            if (!responseData[field]) return;
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex space-x-2 text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                children: field
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex items-center space-x-2 rounded-full bg-slate-100 px-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                    delayDuration: 50,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(eye_off/* default */.A, {
                                                    className: "h-4 w-4"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                                className: "max-w-[300px]",
                                                side: "top",
                                                children: t("common.hidden_field")
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "ph-no-capture mt-2 font-semibold text-slate-700",
                        children: typeof responseData[field] === "string" ? responseData[field] : ""
                    })
                ]
            }, field);
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevrons-down.js
var chevrons_down = __webpack_require__(953985);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/circle-x.js
var circle_x = __webpack_require__(911681);
;// ./modules/analysis/components/SingleResponseCard/components/QuestionSkip.tsx
/* __next_internal_client_entry_do_not_use__ QuestionSkip auto */ 





const QuestionSkip = ({ skippedQuestions, status, questions, isFirstQuestionAnswered, responseData })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        children: skippedQuestions && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "my-2 flex w-full px-2 text-sm text-slate-400",
            children: [
                status === "welcomeCard" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "mb-2 flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: `relative flex ${isFirstQuestionAnswered ? "h-[100%]" : "h-[200%]"} w-0.5 items-center justify-center`,
                            style: {
                                background: "repeating-linear-gradient(rgb(148, 163, 184), rgb(148, 163, 184) 5px, transparent 5px, transparent 8px)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_check/* default */.A, {
                                className: "p-0.25 absolute top-0 w-[1.5rem] min-w-[1.5rem] rounded-full bg-white text-slate-400"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "ml-6 flex flex-col text-slate-700",
                            children: t("common.welcome_card")
                        })
                    ]
                }),
                status === "skipped" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex w-0.5 items-center justify-center",
                            style: {
                                background: "repeating-linear-gradient(to bottom,   rgb(148 163 184),  rgb(148 163 184) 8px, transparent 5px, transparent 15px)"
                            },
                            children: skippedQuestions.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                delayDuration: 50,
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(chevrons_down/* default */.A, {
                                                className: "w-[1.25rem] min-w-[1.25rem] rounded-full bg-slate-400 p-0.5 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                children: t("environments.surveys.responses.respondent_skipped_questions")
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "ml-6 flex flex-col",
                            children: skippedQuestions && skippedQuestions.map((questionId)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "my-2",
                                    children: (0,recall/* parseRecallInfo */.VY)((0,utils/* getLocalizedValue */.bT)(questions.find((question)=>question.id === questionId).headline, "default"), responseData)
                                }, questionId);
                            })
                        })
                    ]
                }),
                status === "aborted" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex w-0.5 flex-grow items-start justify-center",
                            style: {
                                background: "repeating-linear-gradient(to bottom,  rgb(148 163 184),  rgb(148 163 184) 2px, transparent 2px, transparent 10px)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_x/* default */.A, {
                                    className: "min-h-[1.5rem] min-w-[1.5rem] rounded-full bg-white text-slate-400"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "mb-2 ml-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: "mb-2 w-fit rounded-lg bg-slate-100 px-2 font-medium text-slate-700",
                                    children: t("environments.surveys.responses.survey_closed")
                                }),
                                skippedQuestions && skippedQuestions.map((questionId)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "my-2",
                                        children: (0,recall/* parseRecallInfo */.VY)((0,utils/* getLocalizedValue */.bT)(questions.find((question)=>question.id === questionId).headline, "default"), responseData)
                                    }, questionId);
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./modules/analysis/components/SingleResponseCard/components/RenderResponse.tsx + 3 modules
var RenderResponse = __webpack_require__(449916);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file-digit.js
var file_digit = __webpack_require__(412090);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file-type-2.js
var file_type_2 = __webpack_require__(341556);
;// ./modules/analysis/components/SingleResponseCard/components/ResponseVariables.tsx
/* __next_internal_client_entry_do_not_use__ ResponseVariables auto */ 



const ResponseVariables = ({ variables, variablesData })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mt-6 flex flex-col gap-6",
        children: variables.map((variable)=>{
            if (variablesData[variable.id] === undefined || ![
                "string",
                "number"
            ].includes(typeof variablesData[variable.id])) return null;
            return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex space-x-2 text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                children: variable.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex items-center space-x-2 rounded-full bg-slate-100 px-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                                    delayDuration: 50,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                                asChild: true,
                                                children: variable.type === "number" ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file_digit/* default */.A, {
                                                    className: "h-4 w-4"
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file_type_2/* default */.A, {
                                                    className: "h-4 w-4"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                                className: "max-w-[300px]",
                                                side: "top",
                                                children: t("common.variable")
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "ph-no-capture mt-2 font-semibold text-slate-700",
                        children: variablesData[variable.id]
                    })
                ]
            }, variable.id);
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(247503);
;// ./modules/analysis/components/SingleResponseCard/components/VerifiedEmail.tsx
/* __next_internal_client_entry_do_not_use__ VerifiedEmail auto */ 


const VerifiedEmail = ({ responseData })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                className: "flex items-center space-x-2 text-sm text-slate-500",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(mail/* default */.A, {
                        className: "h-4 w-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: t("common.verified_email")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                className: "ph-no-capture my-1 font-semibold text-slate-700",
                children: typeof responseData["verifiedEmail"] === "string" ? responseData["verifiedEmail"] : ""
            })
        ]
    });
};

;// ./modules/analysis/components/SingleResponseCard/components/SingleResponseCardBody.tsx
/* __next_internal_client_entry_do_not_use__ SingleResponseCardBody auto */ 










const SingleResponseCardBody = ({ survey, response, skippedQuestions })=>{
    const isFirstQuestionAnswered = response.data[survey.questions[0].id] ? true : false;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const formatTextWithSlashes = (text)=>{
        // Updated regex to match content between #/ and \#
        const regex = /#\/(.*?)\\#/g;
        const parts = text.split(regex);
        return parts.map((part, index)=>{
            // Check if the part was inside #/ and \#
            if (index % 2 === 1) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                    className: "ml-0.5 mr-0.5 rounded-md border border-slate-200 bg-slate-50 px-1 py-0.5 text-sm first:ml-0",
                    children: [
                        "@",
                        part
                    ]
                }, index);
            } else {
                return part;
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "p-6",
        children: [
            survey.welcomeCard.enabled && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSkip, {
                skippedQuestions: [],
                questions: survey.questions,
                status: "welcomeCard",
                isFirstQuestionAnswered: isFirstQuestionAnswered,
                responseData: response.data
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "space-y-6",
                children: [
                    survey.isVerifyEmailEnabled && response.data["verifiedEmail"] && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(VerifiedEmail, {
                        responseData: response.data
                    }),
                    survey.questions.map((question)=>{
                        const skipped = skippedQuestions.find((skippedQuestionElement)=>skippedQuestionElement.includes(question.id));
                        // If found, remove it from the list
                        if (skipped) {
                            skippedQuestions = skippedQuestions.filter((item)=>item !== skipped);
                        }
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            children: isValidValue(response.data[question.id]) ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                        className: "text-sm text-slate-500",
                                        children: formatTextWithSlashes((0,recall/* parseRecallInfo */.VY)((0,utils/* getLocalizedValue */.bT)(question.headline, "default"), response.data, response.variables, true))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        dir: "auto",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(RenderResponse/* RenderResponse */.k, {
                                            question: question,
                                            survey: survey,
                                            responseData: response.data[question.id],
                                            language: response.language
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(QuestionSkip, {
                                skippedQuestions: skipped,
                                questions: survey.questions,
                                responseData: response.data,
                                status: response.finished || skippedQuestions.length > 0 && !skippedQuestions[skippedQuestions.length - 1].includes(question.id) ? "skipped" : "aborted"
                            })
                        }, `${question.id}`);
                    })
                ]
            }),
            survey.variables.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseVariables, {
                variables: survey.variables,
                variablesData: response.variables
            }),
            survey.hiddenFields.enabled && survey.hiddenFields.fieldIds && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(HiddenFields, {
                hiddenFields: survey.hiddenFields,
                responseData: response.data
            }),
            response.finished && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "mt-4 flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(circle_check/* default */.A, {
                        className: "h-6 w-6 text-slate-400"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "mx-2 rounded-lg bg-slate-100 px-2 text-sm font-medium text-slate-700",
                        children: t("common.completed")
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/avatars/index.tsx
var avatars = __webpack_require__(939514);
// EXTERNAL MODULE: ./modules/ui/components/survey-status-indicator/index.tsx
var survey_status_indicator = __webpack_require__(838861);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/languages.js
var languages = __webpack_require__(185861);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/trash.js
var trash = __webpack_require__(721964);
// EXTERNAL MODULE: ../../node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(36888);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
// EXTERNAL MODULE: ../../packages/lib/utils/contact.ts
var contact = __webpack_require__(669756);
;// ./modules/analysis/components/SingleResponseCard/components/SingleResponseCardHeader.tsx
/* __next_internal_client_entry_do_not_use__ SingleResponseCardHeader auto */ 










const SingleResponseCardHeader = ({ pageType, response, survey, environment, user, isReadOnly, setDeleteDialogOpen, locale })=>{
    const displayIdentifier = response.contact ? (0,contact/* getContactIdentifier */.S)(response.contact, response.contactAttributes) : null;
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const environmentId = survey.environmentId;
    const canResponseBeDeleted = response.finished ? true : isSubmissionTimeMoreThan5Minutes(response.updatedAt);
    const TooltipRenderer = ({ children, shouldRender, tooltipContent })=>{
        return shouldRender ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
            delayDuration: 0,
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                        asChild: true,
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                        avoidCollisions: true,
                        align: "start",
                        side: "bottom",
                        className: "max-w-[75vw]",
                        children: tooltipContent
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
            children: children
        });
    };
    const renderTooltip = Boolean(response.contactAttributes && Object.keys(response.contactAttributes).length > 0 || response.meta.userAgent && Object.keys(response.meta.userAgent).length > 0);
    const tooltipContent = /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            response.singleUseId && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "py-1 font-bold text-slate-700",
                        children: [
                            t("environments.surveys.responses.single_use_id"),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                        children: response.singleUseId
                    })
                ]
            }),
            response.contactAttributes && Object.keys(response.contactAttributes).length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "py-1 font-bold text-slate-700",
                        children: [
                            t("environments.surveys.responses.person_attributes"),
                            ":"
                        ]
                    }),
                    Object.keys(response.contactAttributes).map((key)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                            className: "truncate",
                            title: `${key}: ${response.contactAttributes && response.contactAttributes[key]}`,
                            children: [
                                key,
                                ":",
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                    className: "font-bold",
                                    children: response.contactAttributes && response.contactAttributes[key]
                                })
                            ]
                        }, key))
                ]
            }),
            response.meta.userAgent && Object.keys(response.meta.userAgent).length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "text-slate-600",
                children: [
                    response.contactAttributes && Object.keys(response.contactAttributes).length > 0 && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                        className: "my-2 border-slate-200"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "py-1 font-bold text-slate-700",
                        children: [
                            t("environments.surveys.responses.device_info"),
                            ":"
                        ]
                    }),
                    response.meta.userAgent?.browser && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `Browser: ${response.meta.userAgent.browser}`,
                        children: [
                            t("environments.surveys.responses.browser"),
                            ": ",
                            response.meta.userAgent.browser
                        ]
                    }),
                    response.meta.userAgent?.os && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `OS: ${response.meta.userAgent.os}`,
                        children: [
                            t("environments.surveys.responses.os"),
                            ": ",
                            response.meta.userAgent.os
                        ]
                    }),
                    response.meta.userAgent && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `Device: ${response.meta.userAgent.device ? response.meta.userAgent.device : "PC / Generic device"}`,
                        children: [
                            t("environments.surveys.responses.device"),
                            ":",
                            " ",
                            response.meta.userAgent.device ? response.meta.userAgent.device : "PC / Generic device"
                        ]
                    }),
                    response.meta.url && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `URL: ${response.meta.url}`,
                        children: [
                            t("common.url"),
                            ": ",
                            response.meta.url
                        ]
                    }),
                    response.meta.action && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `Action: ${response.meta.action}`,
                        children: [
                            t("common.action"),
                            ": ",
                            response.meta.action
                        ]
                    }),
                    response.meta.source && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `Source: ${response.meta.source}`,
                        children: [
                            t("environments.surveys.responses.source"),
                            ": ",
                            response.meta.source
                        ]
                    }),
                    response.meta.country && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "truncate",
                        title: `Country: ${response.meta.country}`,
                        children: [
                            t("environments.surveys.responses.country"),
                            ": ",
                            response.meta.country
                        ]
                    })
                ]
            })
        ]
    });
    const deleteSubmissionToolTip = /*#__PURE__*/ (0,react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, {
        children: t("environments.surveys.responses.this_response_is_in_progress")
    });
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "space-y-2 border-b border-slate-200 px-6 pb-4 pt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-center space-x-4",
                    children: [
                        pageType === "response" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(TooltipRenderer, {
                            shouldRender: renderTooltip,
                            tooltipContent: tooltipContent,
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "group",
                                children: response.contact?.id ? user ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)((link_default()), {
                                    className: "flex items-center",
                                    href: `/environments/${environmentId}/contacts/${response.contact.id}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                            personId: response.contact.id
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                            className: "ph-no-capture ml-4 pb-1 font-semibold text-slate-600 hover:underline",
                                            children: displayIdentifier
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                            personId: response.contact.id
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                            className: "ph-no-capture ml-4 pb-1 font-semibold text-slate-600",
                                            children: displayIdentifier
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(avatars/* PersonAvatar */.X, {
                                            personId: "anonymous"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h3", {
                                            className: "ml-4 pb-1 font-semibold text-slate-600",
                                            children: t("common.anonymous")
                                        })
                                    ]
                                })
                            })
                        }),
                        pageType === "people" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-center space-x-2 rounded-full bg-slate-100 p-1 px-2 text-sm text-slate-600",
                            children: [
                                (survey.type === "link" || environment.appSetupCompleted) && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(survey_status_indicator/* SurveyStatusIndicator */.a, {
                                    status: survey.status
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)((link_default()), {
                                    className: "hover:underline",
                                    href: `/environments/${environmentId}/surveys/${survey.id}/summary`,
                                    children: survey.name
                                })
                            ]
                        }),
                        response.language && response.language !== "default" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex space-x-2 rounded-full bg-slate-700 px-2 py-1 text-xs text-white",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    children: (0,utils/* getLanguageLabel */.rJ)(response.language, locale)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(languages/* default */.A, {
                                    className: "h-4 w-4"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("time", {
                            className: "text-slate-500",
                            dateTime: (0,time/* timeSince */._D)(response.createdAt.toISOString(), locale),
                            children: (0,time/* timeSince */._D)(response.createdAt.toISOString(), locale)
                        }),
                        user && !isReadOnly && (canResponseBeDeleted ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash/* default */.A, {
                            onClick: ()=>setDeleteDialogOpen(true),
                            className: "h-4 w-4 cursor-pointer text-slate-500 hover:text-red-700",
                            "aria-label": "Delete response"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipProvider */.Bc, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tooltip/* Tooltip */.m_, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipTrigger */.k$, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(trash/* default */.A, {
                                            className: "h-4 w-4 cursor-not-allowed text-slate-400",
                                            "aria-label": "Cannot delete response in progress"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tooltip/* TooltipContent */.ZI, {
                                        side: "left",
                                        children: deleteSubmissionToolTip
                                    })
                                ]
                            })
                        }))
                    ]
                })
            ]
        })
    });
};

;// ./modules/analysis/components/SingleResponseCard/index.tsx
/* __next_internal_client_entry_do_not_use__ SingleResponseCard auto */ 













const SingleResponseCard = ({ survey, response, user, pageType, environmentTags, environment, updateResponse, deleteResponses, isReadOnly, setSelectedResponseId, locale })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const environmentId = survey.environmentId;
    const router = (0,navigation.useRouter)();
    const [deleteDialogOpen, setDeleteDialogOpen] = (0,react.useState)(false);
    const [isDeleting, setIsDeleting] = (0,react.useState)(false);
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    let skippedQuestions = [];
    let temp = [];
    if (response.finished) {
        survey.questions.forEach((question)=>{
            if (!isValidValue(response.data[question.id])) {
                temp.push(question.id);
            } else {
                if (temp.length > 0) {
                    skippedQuestions.push([
                        ...temp
                    ]);
                    temp = [];
                }
            }
        });
    } else {
        for(let index = survey.questions.length - 1; index >= 0; index--){
            const question = survey.questions[index];
            if (!response.data[question.id]) {
                if (skippedQuestions.length === 0) {
                    temp.push(question.id);
                } else if (skippedQuestions.length > 0 && !isValidValue(response.data[question.id])) {
                    temp.push(question.id);
                }
            } else {
                if (temp.length > 0) {
                    temp.reverse();
                    skippedQuestions.push([
                        ...temp
                    ]);
                    temp = [];
                }
            }
        }
    }
    // Handle the case where the last entries are empty
    if (temp.length > 0) {
        skippedQuestions.push(temp);
    }
    const handleDeleteResponse = async ()=>{
        setIsDeleting(true);
        try {
            if (isReadOnly) {
                throw new Error(t("common.not_authorized"));
            }
            await (0,next_flight_server_reference_proxy_loaderid_7f03252144c0897e563d505775df4bd58609ab9427_name_deleteResponseAction_/* deleteResponseAction */.l)({
                responseId: response.id
            });
            deleteResponses?.([
                response.id
            ]);
            router.refresh();
            if (setSelectedResponseId) setSelectedResponseId(null);
            dist/* default */.Ay.success(t("environments.surveys.responses.response_deleted_successfully"));
            setDeleteDialogOpen(false);
        } catch (error) {
            if (error instanceof Error) dist/* default */.Ay.error(error.message);
        } finally{
            setIsDeleting(false);
        }
    };
    const updateFetchedResponses = async ()=>{
        const updatedResponse = await getResponseAction({
            responseId: response.id
        });
        if (updatedResponse?.data && updatedResponse.data !== null && updateResponse) {
            updateResponse(response.id, updatedResponse.data);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)("group relative", isOpen && "min-h-[300px]"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.A)("relative z-20 my-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all", pageType === "response" && (isOpen ? "w-3/4" : user && response.notes.length ? "w-[96.5%]" : (0,cn.cn)("w-full", user ? "group-hover:w-[96.5%]" : ""))),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SingleResponseCardHeader, {
                        pageType: "response",
                        response: response,
                        survey: survey,
                        environment: environment,
                        user: user,
                        isReadOnly: isReadOnly,
                        setDeleteDialogOpen: setDeleteDialogOpen,
                        locale: locale
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SingleResponseCardBody, {
                        survey: survey,
                        response: response,
                        skippedQuestions: skippedQuestions
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseTagsWrapper, {
                        environmentId: environmentId,
                        responseId: response.id,
                        tags: response.tags.map((tag)=>({
                                tagId: tag.id,
                                tagName: tag.name
                            })),
                        environmentTags: environmentTags,
                        updateFetchedResponses: updateFetchedResponses,
                        isReadOnly: isReadOnly
                    }, response.id),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(delete_dialog/* DeleteDialog */.C, {
                        open: deleteDialogOpen,
                        setOpen: setDeleteDialogOpen,
                        deleteWhat: "response",
                        onDelete: handleDeleteResponse,
                        isDeleting: isDeleting
                    })
                ]
            }),
            user && pageType === "response" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ResponseNotes, {
                user: user,
                responseId: response.id,
                notes: response.notes,
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                updateFetchedResponses: updateFetchedResponses,
                locale: locale
            })
        ]
    });
};


/***/ }),

/***/ 982234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ DeleteDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248852);
/* harmony import */ var _modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(383207);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* __next_internal_client_entry_do_not_use__ DeleteDialog auto */ 



const DeleteDialog = ({ open, setOpen, deleteWhat, onDelete, text, isDeleting, isSaving, useSaveInsteadOfCancel = false, onSave, children, disabled })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .a, {
        open: open,
        setOpen: setOpen,
        title: `${t("common.delete")} ${deleteWhat}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: text || t("common.are_you_sure_this_action_cannot_be_undone")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 space-x-2 text-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        loading: isSaving,
                        variant: "secondary",
                        onClick: ()=>{
                            if (useSaveInsteadOfCancel && onSave) {
                                onSave();
                            }
                            setOpen(false);
                        },
                        children: useSaveInsteadOfCancel ? t("common.save") : t("common.cancel")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        variant: "destructive",
                        onClick: onDelete,
                        loading: isDeleting,
                        disabled: disabled,
                        children: t("common.delete")
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 487162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ResponseBadges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);



const ResponseBadges = ({ items, isExpanded = false, icon })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("my-1 flex gap-2", isExpanded ? "flex-wrap" : ""),
        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "flex items-center rounded-md bg-slate-200 px-2 py-1 font-medium",
                children: [
                    icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "mr-1.5",
                        children: icon
                    }),
                    item
                ]
            }, index))
    });
};


/***/ }),

/***/ 838861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ SurveyStatusIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163701);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(707548);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21984);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(129170);
/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(363557);
/* __next_internal_client_entry_do_not_use__ SurveyStatusIndicator auto */ 



const SurveyStatusIndicator = ({ status, tooltip })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .WD)();
    if (tooltip) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .TooltipProvider */ .Bc, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .m_, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .TooltipTrigger */ .k$, {
                        children: [
                            status === "inProgress" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "relative flex h-3 w-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "relative inline-flex h-3 w-3 rounded-full bg-green-500"
                                    })
                                ]
                            }),
                            status === "scheduled" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "rounded-full bg-slate-300 p-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                                    className: "h-3 w-3 text-slate-600"
                                })
                            }),
                            status === "paused" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "rounded-full bg-slate-300 p-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                    className: "h-3 w-3 text-slate-600"
                                })
                            }),
                            status === "completed" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "rounded-full bg-slate-200 p-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                    className: "h-3 w-3 text-slate-600"
                                })
                            }),
                            status === "draft" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "rounded-full bg-slate-200 p-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                    className: "h-3 w-3 text-slate-600"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_tooltip__WEBPACK_IMPORTED_MODULE_1__/* .TooltipContent */ .ZI, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "flex items-center space-x-2",
                            children: status === "inProgress" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: t("common.gathering_responses")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "relative flex h-3 w-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "relative inline-flex h-3 w-3 rounded-full bg-green-500"
                                            })
                                        ]
                                    })
                                ]
                            }) : status === "scheduled" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-slate-800",
                                        children: t("common.survey_scheduled")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "rounded-full bg-slate-300 p-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                                            className: "h-3 w-3 text-slate-600"
                                        })
                                    })
                                ]
                            }) : status === "paused" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-slate-800",
                                        children: t("common.survey_paused")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "rounded-full bg-slate-300 p-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                            className: "h-3 w-3 text-slate-600"
                                        })
                                    })
                                ]
                            }) : status === "completed" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: t("common.survey_completed")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "rounded-full bg-slate-200 p-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                                            className: "h-3 w-3 text-slate-600"
                                        })
                                    })
                                ]
                            }) : null
                        })
                    })
                ]
            })
        });
    } else return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        children: [
            status === "inProgress" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "relative flex h-3 w-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "relative inline-flex h-3 w-3 rounded-full bg-green-500"
                    })
                ]
            }),
            status === "scheduled" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-full bg-slate-300 p-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    className: "h-3 w-3 text-slate-600"
                })
            }),
            status === "paused" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-full bg-slate-300 p-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                    className: "h-3 w-3 text-slate-600"
                })
            }),
            status === "completed" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-full bg-slate-200 p-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    className: "h-3 w-3 text-slate-600"
                })
            }),
            status === "draft" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "rounded-full bg-slate-300 p-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckIcon_ClockIcon_PauseIcon_PencilIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                    className: "h-3 w-3 text-slate-600"
                })
            })
        ]
    });
};


/***/ }),

/***/ 711940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_XCircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(911681);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);



const Tag = ({ tagId, tagName, onDelete, tags, setTagsState, highlight, allowDelete = true })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("relative flex items-center justify-between gap-2 rounded-full bg-slate-600 px-2 py-1 text-slate-100", highlight && "animate-shake"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex items-center gap-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "text-sm",
                    children: tagName
                })
            }),
            allowDelete && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "cursor-pointer text-sm",
                onClick: ()=>{
                    if (tags && setTagsState) setTagsState(tags.filter((tag)=>tag.tagId !== tagId));
                    onDelete(tagId);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_XCircleIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    fontSize: 24,
                    className: "h-4 w-4 text-slate-100 hover:text-slate-200"
                })
            })
        ]
    }, tagId);
};


/***/ }),

/***/ 296506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fZ: () => (/* binding */ processResponseData)
/* harmony export */ });
/* unused harmony exports convertResponseValue, getQuestionResponseMapping */


// function to convert response value of type string | number | string[] or Record<string, string> to string | string[]
const convertResponseValue = (answer, question)=>{
    switch(question.type){
        case "ranking":
        case "fileUpload":
            if (typeof answer === "string") {
                return [
                    answer
                ];
            } else return answer;
        case "pictureSelection":
            if (typeof answer === "string") {
                const imageUrl = question.choices.find((choice)=>choice.id === answer)?.imageUrl;
                return imageUrl ? [
                    imageUrl
                ] : [];
            } else if (Array.isArray(answer)) {
                return answer.map((answerId)=>question.choices.find((choice)=>choice.id === answerId)?.imageUrl).filter((url)=>url !== undefined);
            } else return [];
        default:
            return processResponseData(answer);
    }
};
const getQuestionResponseMapping = (survey, response)=>{
    const questionResponseMapping = [];
    for (const question of survey.questions){
        const answer = response.data[question.id];
        questionResponseMapping.push({
            question: parseRecallInfo(getLocalizedValue(question.headline, "default"), response.data),
            response: convertResponseValue(answer, question),
            type: question.type
        });
    }
    return questionResponseMapping;
};
const processResponseData = (responseData)=>{
    switch(typeof responseData){
        case "string":
            return responseData;
        case "number":
            return responseData.toString();
        case "object":
            if (Array.isArray(responseData)) {
                responseData = responseData.filter((item)=>item !== null && item !== undefined && item !== "").join(", ");
                return responseData;
            } else {
                const formattedString = Object.entries(responseData).filter(([_, value])=>value !== "").map(([key, value])=>`${key}: ${value}`).join("\n");
                return formattedString;
            }
        default:
            return "";
    }
};


/***/ }),

/***/ 670146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Wq: () => (/* binding */ createResponseNoteAction),
  Fc: () => (/* binding */ createTagAction),
  pJ: () => (/* binding */ createTagToResponseAction),
  l$: () => (/* binding */ deleteResponseAction),
  AA: () => (/* binding */ deleteTagOnResponseAction),
  aZ: () => (/* binding */ getResponseAction),
  it: () => (/* binding */ resolveResponseNoteAction),
  h6: () => (/* binding */ updateResponseNoteAction)
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
// EXTERNAL MODULE: ./lib/utils/services.ts
var services = __webpack_require__(883212);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/lib/response/service.ts + 1 modules
var service = __webpack_require__(535874);
// EXTERNAL MODULE: ../../packages/lib/responseNote/service.ts
var responseNote_service = __webpack_require__(250560);
// EXTERNAL MODULE: ../../packages/lib/tag/service.ts
var tag_service = __webpack_require__(189687);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../node_modules/next/cache.js
var next_cache = __webpack_require__(310256);
;// ../../packages/lib/tagOnResponse/cache.ts

const tagOnResponseCache = {
    tag: {
        byResponseIdAndTagId (responseId, tagId) {
            return `responses-${responseId}-tagOnResponses-${tagId}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-tagOnResponses`;
        }
    },
    revalidate ({ tagId, responseId, environmentId }) {
        if (responseId && tagId) {
            (0,next_cache.revalidateTag)(this.tag.byResponseIdAndTagId(responseId, tagId));
        }
        if (environmentId) {
            (0,next_cache.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
    }
};

;// ../../packages/lib/tagOnResponse/service.ts











const selectTagsOnResponse = {
    tag: {
        select: {
            environmentId: true
        }
    }
};
const addTagToRespone = async (responseId, tagId)=>{
    try {
        const response = await (0,service/* getResponse */.mi)(responseId);
        const tagOnResponse = await src/* prisma */.z.tagsOnResponses.create({
            data: {
                responseId,
                tagId
            },
            select: selectTagsOnResponse
        });
        response_cache/* responseCache */.Q.revalidate({
            id: responseId,
            surveyId: response?.surveyId,
            contactId: response?.contact?.id
        });
        tagOnResponseCache.revalidate({
            tagId,
            responseId,
            environmentId: tagOnResponse.tag.environmentId
        });
        return {
            responseId,
            tagId
        };
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const deleteTagOnResponse = async (responseId, tagId)=>{
    try {
        const response = await (0,service/* getResponse */.mi)(responseId);
        const deletedTag = await src/* prisma */.z.tagsOnResponses.delete({
            where: {
                responseId_tagId: {
                    responseId,
                    tagId
                }
            },
            select: selectTagsOnResponse
        });
        response_cache/* responseCache */.Q.revalidate({
            id: responseId,
            surveyId: response?.surveyId,
            contactId: response?.contact?.id
        });
        tagOnResponseCache.revalidate({
            tagId,
            responseId,
            environmentId: deletedTag.tag.environmentId
        });
        return {
            tagId,
            responseId
        };
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getTagsOnResponsesCount = (0,react.cache)(async (environmentId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ]);
        try {
            const tagsCount = await src/* prisma */.z.tagsOnResponses.groupBy({
                by: [
                    "tagId"
                ],
                where: {
                    response: {
                        survey: {
                            environment: {
                                id: environmentId
                            }
                        }
                    }
                },
                _count: {
                    _all: true
                }
            });
            return tagsCount.map((tagCount)=>({
                    tagId: tagCount.tagId,
                    count: tagCount._count._all
                }));
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getTagsOnResponsesCount-${environmentId}`
    ], {
        tags: [
            tagOnResponseCache.tag.byEnvironmentId(environmentId)
        ]
    })());

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/analysis/components/SingleResponseCard/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f03252144c0897e563d505775df4bd58609ab9427":"deleteResponseAction","7f0e3250268918c0cea6fb5e8b0ed528cab3a8ef2c":"resolveResponseNoteAction","7f1b13b59139645fabed69b6d7f1ea716e9eb14b8f":"createTagToResponseAction","7f91e312a52b4503b07101749432dc91d16ea59765":"getResponseAction","7f9530d89aab065b88701bf919b9a07f2b28f89d0b":"createTagAction","7fcfa3a4acc8abc86d35b99e1399e55793264fa115":"deleteTagOnResponseAction","7fe6ddb4451a1dc19ea9d9956bbfaea9b65b4daad5":"updateResponseNoteAction","7ff7037006304bf92c8543614d0c64ab97258cda75":"createResponseNoteAction"} */ 











const ZCreateTagAction = lib.z.object({
    environmentId: common/* ZId */.i4,
    tagName: lib.z.string()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createTagAction = action_client/* authenticatedActionClient */.D.schema(ZCreateTagAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromEnvironmentId */.X_)(parsedInput.environmentId),
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(parsedInput.environmentId),
                minPermission: "readWrite"
            }
        ]
    });
    return await (0,tag_service/* createTag */.VZ)(parsedInput.environmentId, parsedInput.tagName);
});
const ZCreateTagToResponseAction = lib.z.object({
    responseId: common/* ZId */.i4,
    tagId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createTagToResponseAction = action_client/* authenticatedActionClient */.D.schema(ZCreateTagToResponseAction).action(async ({ parsedInput, ctx })=>{
    const responseEnvironmentId = await (0,helper/* getEnvironmentIdFromResponseId */.t1)(parsedInput.responseId);
    const tagEnvironment = await (0,services/* getTag */.bH)(parsedInput.tagId);
    if (!responseEnvironmentId || !tagEnvironment) {
        throw new Error("Environment not found");
    }
    if (responseEnvironmentId !== tagEnvironment.environmentId) {
        throw new Error("Response and tag are not in the same environment");
    }
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseId */.vE)(parsedInput.responseId),
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(responseEnvironmentId),
                minPermission: "readWrite"
            }
        ]
    });
    return await addTagToRespone(parsedInput.responseId, parsedInput.tagId);
});
const ZDeleteTagOnResponseAction = lib.z.object({
    responseId: common/* ZId */.i4,
    tagId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteTagOnResponseAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteTagOnResponseAction).action(async ({ parsedInput, ctx })=>{
    const responseEnvironmentId = await (0,helper/* getEnvironmentIdFromResponseId */.t1)(parsedInput.responseId);
    const tagEnvironment = await (0,services/* getTag */.bH)(parsedInput.tagId);
    if (!responseEnvironmentId || !tagEnvironment) {
        throw new Error("Environment not found");
    }
    if (responseEnvironmentId !== tagEnvironment.environmentId) {
        throw new Error("Response and tag are not in the same environment");
    }
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseId */.vE)(parsedInput.responseId),
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
                projectId: await (0,helper/* getProjectIdFromEnvironmentId */.DU)(responseEnvironmentId),
                minPermission: "readWrite"
            }
        ]
    });
    return await deleteTagOnResponse(parsedInput.responseId, parsedInput.tagId);
});
const ZDeleteResponseAction = lib.z.object({
    responseId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteResponseAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteResponseAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseId */.vE)(parsedInput.responseId),
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
                projectId: await (0,helper/* getProjectIdFromResponseId */.l$)(parsedInput.responseId),
                minPermission: "readWrite"
            }
        ]
    });
    return await (0,service/* deleteResponse */.Pv)(parsedInput.responseId);
});
const ZUpdateResponseNoteAction = lib.z.object({
    responseNoteId: common/* ZId */.i4,
    text: lib.z.string()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateResponseNoteAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateResponseNoteAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseNoteId */.ND)(parsedInput.responseNoteId),
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
                projectId: await (0,helper/* getProjectIdFromResponseNoteId */.tL)(parsedInput.responseNoteId),
                minPermission: "readWrite"
            }
        ]
    });
    return await (0,responseNote_service/* updateResponseNote */.db)(parsedInput.responseNoteId, parsedInput.text);
});
const ZResolveResponseNoteAction = lib.z.object({
    responseNoteId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ resolveResponseNoteAction = action_client/* authenticatedActionClient */.D.schema(ZResolveResponseNoteAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseNoteId */.ND)(parsedInput.responseNoteId),
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
                projectId: await (0,helper/* getProjectIdFromResponseNoteId */.tL)(parsedInput.responseNoteId),
                minPermission: "readWrite"
            }
        ]
    });
    await (0,responseNote_service/* resolveResponseNote */.yk)(parsedInput.responseNoteId);
});
const ZCreateResponseNoteAction = lib.z.object({
    responseId: common/* ZId */.i4,
    text: lib.z.string()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createResponseNoteAction = action_client/* authenticatedActionClient */.D.schema(ZCreateResponseNoteAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseId */.vE)(parsedInput.responseId),
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
                projectId: await (0,helper/* getProjectIdFromResponseId */.l$)(parsedInput.responseId),
                minPermission: "readWrite"
            }
        ]
    });
    return await (0,responseNote_service/* createResponseNote */.o0)(parsedInput.responseId, ctx.user.id, parsedInput.text);
});
const ZGetResponseAction = lib.z.object({
    responseId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getResponseAction = action_client/* authenticatedActionClient */.D.schema(ZGetResponseAction).action(async ({ parsedInput, ctx })=>{
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId: await (0,helper/* getOrganizationIdFromResponseId */.vE)(parsedInput.responseId),
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
                projectId: await (0,helper/* getProjectIdFromResponseId */.l$)(parsedInput.responseId)
            }
        ]
    });
    return await (0,service/* getResponse */.mi)(parsedInput.responseId);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    createTagAction,
    createTagToResponseAction,
    deleteTagOnResponseAction,
    deleteResponseAction,
    updateResponseNoteAction,
    resolveResponseNoteAction,
    createResponseNoteAction,
    getResponseAction
]);
(0,server_reference/* registerServerReference */.A)(createTagAction, "7f9530d89aab065b88701bf919b9a07f2b28f89d0b", null);
(0,server_reference/* registerServerReference */.A)(createTagToResponseAction, "7f1b13b59139645fabed69b6d7f1ea716e9eb14b8f", null);
(0,server_reference/* registerServerReference */.A)(deleteTagOnResponseAction, "7fcfa3a4acc8abc86d35b99e1399e55793264fa115", null);
(0,server_reference/* registerServerReference */.A)(deleteResponseAction, "7f03252144c0897e563d505775df4bd58609ab9427", null);
(0,server_reference/* registerServerReference */.A)(updateResponseNoteAction, "7fe6ddb4451a1dc19ea9d9956bbfaea9b65b4daad5", null);
(0,server_reference/* registerServerReference */.A)(resolveResponseNoteAction, "7f0e3250268918c0cea6fb5e8b0ed528cab3a8ef2c", null);
(0,server_reference/* registerServerReference */.A)(createResponseNoteAction, "7ff7037006304bf92c8543614d0c64ab97258cda75", null);
(0,server_reference/* registerServerReference */.A)(getResponseAction, "7f91e312a52b4503b07101749432dc91d16ea59765", null);


/***/ }),

/***/ 649195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ tagCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const tagCache = {
    tag: {
        byId (id) {
            return `tags-${id}`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-tags`;
        }
    },
    revalidate ({ id, environmentId }) {
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
    }
};


/***/ }),

/***/ 584266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dj: () => (/* binding */ getTagsByEnvironmentId)
/* harmony export */ });
/* unused harmony exports getTag, createTag */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733735);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794356);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(836919);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860988);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(649195);









const getTagsByEnvironmentId = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async (environmentId, page)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            environmentId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ], [
            page,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZOptionalNumber */ .Wo
        ]);
        try {
            const tags = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.tag.findMany({
                where: {
                    environmentId
                },
                take: page ? _constants__WEBPACK_IMPORTED_MODULE_5__/* .ITEMS_PER_PAGE */ .re : undefined,
                skip: page ? _constants__WEBPACK_IMPORTED_MODULE_5__/* .ITEMS_PER_PAGE */ .re * (page - 1) : undefined
            });
            return tags;
        } catch (error) {
            throw error;
        }
    }, [
        `getTagsByEnvironmentId-${environmentId}-${page}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .tagCache */ .J.tag.byEnvironmentId(environmentId)
        ]
    })());
const getTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async (id)=>(0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
            id,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
        ]);
        try {
            const tag = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.tag.findUnique({
                where: {
                    id
                }
            });
            return tag;
        } catch (error) {
            throw error;
        }
    }, [
        `getTag-${id}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .tagCache */ .J.tag.byId(id)
        ]
    })());
const createTag = async (environmentId, name)=>{
    validateInputs([
        environmentId,
        ZId
    ], [
        name,
        ZString
    ]);
    try {
        const tag = await prisma.tag.create({
            data: {
                name,
                environmentId
            }
        });
        tagCache.revalidate({
            id: tag.id,
            environmentId
        });
        return tag;
    } catch (error) {
        throw error;
    }
};


/***/ }),

/***/ 26406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ deleteResponseAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308441);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const deleteResponseAction = /*#__PURE__*/(0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.createServerReference)("7f03252144c0897e563d505775df4bd58609ab9427", private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.callServer, undefined, private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_0__.findSourceMapURL, "deleteResponseAction")

/***/ })

};
;