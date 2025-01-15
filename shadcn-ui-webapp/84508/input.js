"use strict";
exports.id = 84508;
exports.ids = [84508,16672,50378];
exports.modules = {

/***/ 84508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HoverCardDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_CalendarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21041);
/* harmony import */ var _registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16672);
/* harmony import */ var _registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37709);
/* harmony import */ var _registry_new_york_ui_hover_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50378);





function HoverCardDemo() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_hover_card__WEBPACK_IMPORTED_MODULE_3__.HoverCard, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_hover_card__WEBPACK_IMPORTED_MODULE_3__.HoverCardTrigger, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "link",
                    children: "@nextjs"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_hover_card__WEBPACK_IMPORTED_MODULE_3__.HoverCardContent, {
                className: "w-80",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {
                                    src: "https://github.com/vercel.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarFallback, {
                                    children: "VC"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-sm font-semibold",
                                    children: "@nextjs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm",
                                    children: "The React Framework – created and maintained by @vercel."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center pt-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CalendarIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            className: "mr-2 h-4 w-4 opacity-70"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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

/***/ 50378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoverCard: () => (/* binding */ HoverCard),
/* harmony export */   HoverCardContent: () => (/* binding */ HoverCardContent),
/* harmony export */   HoverCardTrigger: () => (/* binding */ HoverCardTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78365);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ HoverCard,HoverCardTrigger,HoverCardContent auto */ 



const HoverCard = _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const HoverCardTrigger = _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const HoverCardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
        ref: ref,
        align: align,
        sideOffset: sideOffset,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
HoverCardContent.displayName = _radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



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


/***/ })

};
;