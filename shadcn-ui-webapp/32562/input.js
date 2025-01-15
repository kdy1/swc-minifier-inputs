"use strict";
exports.id = 32562;
exports.ids = [32562];
exports.modules = {

/***/ 32562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VY: () => (/* binding */ $322c88a641701f3b$export$7c6e2c02157bb7d2),
/* harmony export */   aV: () => (/* binding */ $322c88a641701f3b$export$54c2e3dc7acea9f5),
/* harmony export */   ck: () => (/* binding */ $322c88a641701f3b$export$6d08773d2e66f8f2),
/* harmony export */   fC: () => (/* binding */ $322c88a641701f3b$export$be92b6f5f03c0fe9),
/* harmony export */   l_: () => (/* binding */ $322c88a641701f3b$export$d5c6c08dc2d3ca7),
/* harmony export */   rU: () => (/* binding */ $322c88a641701f3b$export$a6c7ac8248d6e38a),
/* harmony export */   xz: () => (/* binding */ $322c88a641701f3b$export$41fb9f06171c75f4),
/* harmony export */   z$: () => (/* binding */ $322c88a641701f3b$export$adb584737d712b70)
/* harmony export */ });
/* unused harmony exports createNavigationMenuScope, NavigationMenu, NavigationMenuSub, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuContent, NavigationMenuViewport, Sub */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85544);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36455);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64772);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36261);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67939);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54095);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11472);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88836);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78438);
/* harmony import */ var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87131);



































/* -------------------------------------------------------------------------------------------------
 * NavigationMenu
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$NAVIGATION_MENU_NAME = 'NavigationMenu';
const [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__/* .createCollection */ .B)($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__/* .createCollection */ .B)($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__/* .createContextScope */ .b)($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
    $322c88a641701f3b$var$createCollectionScope,
    $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
const [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const $322c88a641701f3b$export$5b2278cf1e8bcae2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , value: valueProp , onValueChange: onValueChange , defaultValue: defaultValue , delayDuration: delayDuration = 200 , skipDelayDuration: skipDelayDuration = 300 , orientation: orientation = 'horizontal' , dir: dir , ...NavigationMenuProps } = props;
    const [navigationMenu, setNavigationMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setNavigationMenu(node)
    );
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__/* .useDirection */ .gm)(dir);
    const openTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const closeTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const skipDelayTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const [isOpenDelayed, setIsOpenDelayed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [value1 = '', setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__/* .useControllableState */ .T)({
        prop: valueProp,
        onChange: (value)=>{
            const isOpen = value !== '';
            const hasSkipDelayDuration = skipDelayDuration > 0;
            if (isOpen) {
                window.clearTimeout(skipDelayTimerRef.current);
                if (hasSkipDelayDuration) setIsOpenDelayed(false);
            } else {
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true)
                , skipDelayDuration);
            }
            onValueChange === null || onValueChange === void 0 || onValueChange(value);
        },
        defaultProp: defaultValue
    });
    const startCloseTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(()=>setValue('')
        , 150);
    }, [
        setValue
    ]);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((itemValue)=>{
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
    }, [
        setValue
    ]);
    const handleDelayedOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((itemValue)=>{
        const isOpenItem = value1 === itemValue;
        if (isOpenItem) // If the item is already open (e.g. we're transitioning from the content to the trigger)
        // then we want to clear the close timer immediately.
        window.clearTimeout(closeTimerRef.current);
        else openTimerRef.current = window.setTimeout(()=>{
            window.clearTimeout(closeTimerRef.current);
            setValue(itemValue);
        }, delayDuration);
    }, [
        value1,
        setValue,
        delayDuration
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            window.clearTimeout(openTimerRef.current);
            window.clearTimeout(closeTimerRef.current);
            window.clearTimeout(skipDelayTimerRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value: value1,
        dir: direction,
        orientation: orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue)=>{
            window.clearTimeout(openTimerRef.current);
            if (isOpenDelayed) handleDelayedOpen(itemValue);
            else handleOpen(itemValue);
        },
        onTriggerLeave: ()=>{
            window.clearTimeout(openTimerRef.current);
            startCloseTimer();
        },
        onContentEnter: ()=>window.clearTimeout(closeTimerRef.current)
        ,
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue)=>{
            setValue((prevValue)=>prevValue === itemValue ? '' : itemValue
            );
        },
        onItemDismiss: ()=>setValue('')
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.nav, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "aria-label": "Main",
        "data-orientation": orientation,
        dir: direction
    }, NavigationMenuProps, {
        ref: composedRef
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$5b2278cf1e8bcae2, {
    displayName: $322c88a641701f3b$var$NAVIGATION_MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$SUB_NAME = 'NavigationMenuSub';
const $322c88a641701f3b$export$5958edd6c4ee7c79 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , value: valueProp , onValueChange: onValueChange , defaultValue: defaultValue , orientation: orientation = 'horizontal' , ...subProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$SUB_NAME, __scopeNavigationMenu);
    const [value = '', setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__/* .useControllableState */ .T)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value: value,
        dir: context.dir,
        orientation: orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue)=>setValue(itemValue)
        ,
        onItemSelect: (itemValue)=>setValue(itemValue)
        ,
        onItemDismiss: ()=>setValue('')
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "data-orientation": orientation
    }, subProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$5958edd6c4ee7c79, {
    displayName: $322c88a641701f3b$var$SUB_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$NavigationMenuProvider = (props)=>{
    const { scope: scope , isRootMenu: isRootMenu , rootNavigationMenu: rootNavigationMenu , dir: dir , orientation: orientation , children: children , value: value , onItemSelect: onItemSelect , onItemDismiss: onItemDismiss , onTriggerEnter: onTriggerEnter , onTriggerLeave: onTriggerLeave , onContentEnter: onContentEnter , onContentLeave: onContentLeave  } = props;
    const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [viewportContent, setViewportContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map());
    const [indicatorTrack, setIndicatorTrack] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
        scope: scope,
        isRootMenu: isRootMenu,
        rootNavigationMenu: rootNavigationMenu,
        value: value,
        previousValue: (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__/* .usePrevious */ .D)(value),
        baseId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .M)(),
        dir: dir,
        orientation: orientation,
        viewport: viewport,
        onViewportChange: setViewport,
        indicatorTrack: indicatorTrack,
        onIndicatorTrackChange: setIndicatorTrack,
        onTriggerEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onTriggerEnter),
        onTriggerLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onTriggerLeave),
        onContentEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onContentEnter),
        onContentLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onContentLeave),
        onItemSelect: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onItemSelect),
        onItemDismiss: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onItemDismiss),
        onViewportContentChange: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((contentValue, contentData)=>{
            setViewportContent((prevContent)=>{
                prevContent.set(contentValue, contentData);
                return new Map(prevContent);
            });
        }, []),
        onViewportContentRemove: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((contentValue)=>{
            setViewportContent((prevContent)=>{
                if (!prevContent.has(contentValue)) return prevContent;
                prevContent.delete(contentValue);
                return new Map(prevContent);
            });
        }, [])
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.Provider, {
        scope: scope
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
        scope: scope,
        items: viewportContent
    }, children)));
};
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuList
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$LIST_NAME = 'NavigationMenuList';
const $322c88a641701f3b$export$c361068a95fd2286 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , ...listProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
    const list = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.ul, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "data-orientation": context.orientation
    }, listProps, {
        ref: forwardedRef
    }));
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, {
        style: {
            position: 'relative'
        },
        ref: context.onIndicatorTrackChange
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.Slot, {
        scope: __scopeNavigationMenu
    }, context.isRootMenu ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroup, {
        asChild: true
    }, list) : list));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$c361068a95fd2286, {
    displayName: $322c88a641701f3b$var$LIST_NAME
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$ITEM_NAME = 'NavigationMenuItem';
const [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
const $322c88a641701f3b$export$ffdbb83a2de845c2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , value: valueProp , ...itemProps } = props;
    const autoValue = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .M)(); // We need to provide an initial deterministic value as `useId` will return
    // empty string on the first render and we don't want to match our internal "closed" value.
    const value = valueProp || autoValue || 'LEGACY_REACT_AUTO_VALUE';
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const focusProxyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const restoreContentTabOrderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(()=>{});
    const wasEscapeCloseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const handleContentEntry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((side = 'start')=>{
        if (contentRef.current) {
            restoreContentTabOrderRef.current();
            const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
            if (candidates.length) $322c88a641701f3b$var$focusFirst(side === 'start' ? candidates : candidates.reverse());
        }
    }, []);
    const handleContentExit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (contentRef.current) {
            const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
            if (candidates.length) restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
        }
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
        scope: __scopeNavigationMenu,
        value: value,
        triggerRef: triggerRef,
        contentRef: contentRef,
        focusProxyRef: focusProxyRef,
        wasEscapeCloseRef: wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.li, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, itemProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$ffdbb83a2de845c2, {
    displayName: $322c88a641701f3b$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$TRIGGER_NAME = 'NavigationMenuTrigger';
const $322c88a641701f3b$export$37fe8002734d8f2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , disabled: disabled , ...triggerProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
    const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(ref, itemContext.triggerRef, forwardedRef);
    const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
    const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
    const hasPointerMoveOpenedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const wasClickCloseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const open = itemContext.value === context.value;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
        scope: __scopeNavigationMenu,
        value: itemContext.value
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupItem, {
        asChild: true
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        id: triggerId,
        disabled: disabled,
        "data-disabled": disabled ? '' : undefined,
        "data-state": $322c88a641701f3b$var$getOpenState(open),
        "aria-expanded": open,
        "aria-controls": contentId
    }, triggerProps, {
        ref: composedRefs,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerEnter, ()=>{
            wasClickCloseRef.current = false;
            itemContext.wasEscapeCloseRef.current = false;
        }),
        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerMove, $322c88a641701f3b$var$whenMouse(()=>{
            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
            context.onTriggerEnter(itemContext.value);
            hasPointerMoveOpenedRef.current = true;
        })),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(()=>{
            if (disabled) return;
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
        })),
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onClick, ()=>{
            context.onItemSelect(itemContext.value);
            wasClickCloseRef.current = open;
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            const verticalEntryKey = context.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
            const entryKey = {
                horizontal: 'ArrowDown',
                vertical: verticalEntryKey
            }[context.orientation];
            if (open && event.key === entryKey) {
                itemContext.onEntryKeyDown(); // Prevent FocusGroupItem from handling the event
                event.preventDefault();
            }
        })
    })))), open && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__/* .Root */ .f, {
        "aria-hidden": true,
        tabIndex: 0,
        ref: itemContext.focusProxyRef,
        onFocus: (event)=>{
            const content = itemContext.contentRef.current;
            const prevFocusedElement = event.relatedTarget;
            const wasTriggerFocused = prevFocusedElement === ref.current;
            const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
            if (wasTriggerFocused || !wasFocusFromContent) itemContext.onFocusProxyEnter(wasTriggerFocused ? 'start' : 'end');
        }
    }), context.viewport && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-owns": contentId
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$37fe8002734d8f2, {
    displayName: $322c88a641701f3b$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuLink
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$LINK_NAME = 'NavigationMenuLink';
const $322c88a641701f3b$var$LINK_SELECT = 'navigationMenu.linkSelect';
const $322c88a641701f3b$export$6893bf21536567da = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , active: active , onSelect: onSelect , ...linkProps } = props;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupItem, {
        asChild: true
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.a, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "data-active": active ? '' : undefined,
        "aria-current": active ? 'page' : undefined
    }, linkProps, {
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onClick, (event1)=>{
            const target = event1.target;
            const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
                bubbles: true,
                cancelable: true
            });
            target.addEventListener($322c88a641701f3b$var$LINK_SELECT, (event)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event)
            , {
                once: true
            });
            (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .dispatchDiscreteCustomEvent */ .jH)(target, linkSelectEvent);
            if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
                const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
                    bubbles: true,
                    cancelable: true
                });
                (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .dispatchDiscreteCustomEvent */ .jH)(target, rootContentDismissEvent);
            }
        }, {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$6893bf21536567da, {
    displayName: $322c88a641701f3b$var$LINK_NAME
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuIndicator
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$INDICATOR_NAME = 'NavigationMenuIndicator';
const $322c88a641701f3b$export$8ddb526647c0d8fb = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...indicatorProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
    const isVisible = Boolean(context.value);
    return context.indicatorTrack ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__/* .Presence */ .z, {
        present: forceMount || isVisible
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, indicatorProps, {
        ref: forwardedRef
    }))), context.indicatorTrack) : null;
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$8ddb526647c0d8fb, {
    displayName: $322c88a641701f3b$var$INDICATOR_NAME
});
const $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , ...indicatorProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
    const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
    const [activeTrigger, setActiveTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const isHorizontal = context.orientation === 'horizontal';
    const isVisible = Boolean(context.value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _items$find;
        const items = getItems();
        const triggerNode = (_items$find = items.find((item)=>item.value === context.value
        )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
        if (triggerNode) setActiveTrigger(triggerNode);
    }, [
        getItems,
        context.value
    ]);
    /**
   * Update position when the indicator or parent track size changes
   */ const handlePositionChange = ()=>{
        if (activeTrigger) setPosition({
            size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
            offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
        });
    };
    $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
    $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange); // We need to wait for the indicator position to be available before rendering to
    // snap immediately into position rather than transitioning from initial
    return position ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "aria-hidden": true,
        "data-state": isVisible ? 'visible' : 'hidden',
        "data-orientation": context.orientation
    }, indicatorProps, {
        ref: forwardedRef,
        style: {
            position: 'absolute',
            ...isHorizontal ? {
                left: 0,
                width: position.size + 'px',
                transform: `translateX(${position.offset}px)`
            } : {
                top: 0,
                height: position.size + 'px',
                transform: `translateY(${position.offset}px)`
            },
            ...indicatorProps.style
        }
    })) : null;
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$CONTENT_NAME = 'NavigationMenuContent';
const $322c88a641701f3b$export$38e00e996c2f93f7 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...contentProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
    const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(itemContext.contentRef, forwardedRef);
    const open = itemContext.value === context.value;
    const commonProps = {
        value: itemContext.value,
        triggerRef: itemContext.triggerRef,
        focusProxyRef: itemContext.focusProxyRef,
        wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
        onContentFocusOutside: itemContext.onContentFocusOutside,
        onRootContentClose: itemContext.onRootContentClose,
        ...contentProps
    };
    return !context.viewport ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__/* .Presence */ .z, {
        present: forceMount || open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "data-state": $322c88a641701f3b$var$getOpenState(open)
    }, commonProps, {
        ref: composedRefs,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? 'none' : undefined,
            ...commonProps.style
        }
    }))) : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$ViewportContentMounter, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        forceMount: forceMount
    }, commonProps, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$38e00e996c2f93f7, {
    displayName: $322c88a641701f3b$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$ViewportContentMounter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
    const { onViewportContentChange: onViewportContentChange , onViewportContentRemove: onViewportContentRemove  } = context;
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__/* .useLayoutEffect */ .b)(()=>{
        onViewportContentChange(props.value, {
            ref: forwardedRef,
            ...props
        });
    }, [
        props,
        forwardedRef,
        onViewportContentChange
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__/* .useLayoutEffect */ .b)(()=>{
        return ()=>onViewportContentRemove(props.value)
        ;
    }, [
        props.value,
        onViewportContentRemove
    ]); // Content is proxied into the viewport
    return null;
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = 'navigationMenu.rootContentDismiss';
const $322c88a641701f3b$var$NavigationMenuContentImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , value: value , triggerRef: triggerRef , focusProxyRef: focusProxyRef , wasEscapeCloseRef: wasEscapeCloseRef , onRootContentClose: onRootContentClose , onContentFocusOutside: onContentFocusOutside , ...contentProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(ref, forwardedRef);
    const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
    const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
    const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
    const prevMotionAttributeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { onItemDismiss: onItemDismiss  } = context;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const content = ref.current; // Bubble dismiss to the root content node and focus its trigger
        if (context.isRootMenu && content) {
            const handleClose = ()=>{
                var _triggerRef$current;
                onItemDismiss();
                onRootContentClose();
                if (content.contains(document.activeElement)) (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
            };
            content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
            return ()=>content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose)
            ;
        }
    }, [
        context.isRootMenu,
        props.value,
        triggerRef,
        onItemDismiss,
        onRootContentClose
    ]);
    const motionAttribute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const items = getItems();
        const values = items.map((item)=>item.value
        );
        if (context.dir === 'rtl') values.reverse();
        const index = values.indexOf(context.value);
        const prevIndex = values.indexOf(context.previousValue);
        const isSelected = value === context.value;
        const wasSelected = prevIndex === values.indexOf(value); // We only want to update selected and the last selected content
        // this avoids animations being interrupted outside of that range
        if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
        const attribute = (()=>{
            // Don't provide a direction on the initial open
            if (index !== prevIndex) {
                // If we're moving to this item from another
                if (isSelected && prevIndex !== -1) return index > prevIndex ? 'from-end' : 'from-start'; // If we're leaving this item for another
                if (wasSelected && index !== -1) return index > prevIndex ? 'to-start' : 'to-end';
            } // Otherwise we're entering from closed or leaving the list
            // entirely and should not animate in any direction
            return null;
        })();
        prevMotionAttributeRef.current = attribute;
        return attribute;
    }, [
        context.previousValue,
        context.value,
        context.dir,
        getItems,
        value
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroup, {
        asChild: true
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__/* .DismissableLayer */ .XB, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        id: contentId,
        "aria-labelledby": triggerId,
        "data-motion": motionAttribute,
        "data-orientation": context.orientation
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>{
            var _ref$current;
            const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
                bubbles: true,
                cancelable: true
            });
            (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
        },
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onFocusOutside, (event)=>{
            var _context$rootNavigati;
            onContentFocusOutside();
            const target = event.target; // Only dismiss content when focus moves outside of the menu
            if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target)) event.preventDefault();
        }),
        onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onPointerDownOutside, (event)=>{
            var _context$viewport;
            const target = event.target;
            const isTrigger = getItems().some((item)=>{
                var _item$ref$current;
                return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
            });
            const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
            if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
            const isTabKey = event.key === 'Tab' && !isMetaKey;
            if (isTabKey) {
                const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
                const focusedElement = document.activeElement;
                const index = candidates.findIndex((candidate)=>candidate === focusedElement
                );
                const isMovingBackwards = event.shiftKey;
                const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
                if ($322c88a641701f3b$var$focusFirst(nextCandidates)) // prevent browser tab keydown because we've handled focus
                event.preventDefault();
                else {
                    var _focusProxyRef$curren;
                    // If we can't focus that means we're at the edges
                    // so focus the proxy and let browser handle
                    // tab/shift+tab keypress on the proxy instead
                    (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
                }
            }
        }),
        onEscapeKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onEscapeKeyDown, (event)=>{
            // prevent the dropdown from reopening
            // after the escape key has been pressed
            wasEscapeCloseRef.current = true;
        })
    })));
});
/* -------------------------------------------------------------------------------------------------
 * NavigationMenuViewport
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$VIEWPORT_NAME = 'NavigationMenuViewport';
const $322c88a641701f3b$export$ee880b97cc6d44a5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { forceMount: forceMount , ...viewportProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
    const open = Boolean(context.value);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__/* .Presence */ .z, {
        present: forceMount || open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, viewportProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$ee880b97cc6d44a5, {
    displayName: $322c88a641701f3b$var$VIEWPORT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$NavigationMenuViewportImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props1, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , children: children , ...viewportImplProps } = props1;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .useComposedRefs */ .e)(forwardedRef, context.onViewportChange);
    const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + 'px' : undefined;
    const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + 'px' : undefined;
    const open = Boolean(context.value); // We persist the last active content value as the viewport may be animating out
    // and we want the content to remain mounted for the lifecycle of the viewport.
    const activeContentValue = open ? context.value : context.previousValue;
    /**
   * Update viewport size to match the active content node.
   * We prefer offset dimensions over `getBoundingClientRect` as the latter respects CSS transform.
   * For example, if content animates in from `scale(0.5)` the dimensions would be anything
   * from `0.5` to `1` of the intended size.
   */ const handleSizeChange = ()=>{
        if (content) setSize({
            width: content.offsetWidth,
            height: content.offsetHeight
        });
    };
    $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        "data-state": $322c88a641701f3b$var$getOpenState(open),
        "data-orientation": context.orientation
    }, viewportImplProps, {
        ref: composedRefs,
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? 'none' : undefined,
            ['--radix-navigation-menu-viewport-width']: viewportWidth,
            ['--radix-navigation-menu-viewport-height']: viewportHeight,
            ...viewportImplProps.style
        },
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props1.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
    }), Array.from(viewportContentContext.items).map(([value, { ref: ref , forceMount: forceMount , ...props }])=>{
        const isActive = activeContentValue === value;
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__/* .Presence */ .z, {
            key: value,
            present: forceMount || isActive
        }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, props, {
            ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__/* .composeRefs */ .F)(ref, (node)=>{
                // We only want to update the stored node when another is available
                // as we need to smoothly transition between them.
                if (isActive && node) setContent(node);
            })
        })));
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$FOCUS_GROUP_NAME = 'FocusGroup';
const $322c88a641701f3b$var$FocusGroup = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , ...groupProps } = props;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
        scope: __scopeNavigationMenu
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
        scope: __scopeNavigationMenu
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
        dir: context.dir
    }, groupProps, {
        ref: forwardedRef
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$ARROW_KEYS = [
    'ArrowRight',
    'ArrowLeft',
    'ArrowUp',
    'ArrowDown'
];
const $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = 'FocusGroupItem';
const $322c88a641701f3b$var$FocusGroupItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , ...groupProps } = props;
    const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
        scope: __scopeNavigationMenu
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, groupProps, {
        ref: forwardedRef,
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            const isFocusNavigationKey = [
                'Home',
                'End',
                ...$322c88a641701f3b$var$ARROW_KEYS
            ].includes(event.key);
            if (isFocusNavigationKey) {
                let candidateNodes = getItems().map((item)=>item.ref.current
                );
                const prevItemKey = context.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
                const prevKeys = [
                    prevItemKey,
                    'ArrowUp',
                    'End'
                ];
                if (prevKeys.includes(event.key)) candidateNodes.reverse();
                if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>$322c88a641701f3b$var$focusFirst(candidateNodes)
                ); // Prevent page scroll while navigating
                event.preventDefault();
            }
        })
    })));
});
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $322c88a641701f3b$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
    candidates.forEach((candidate)=>{
        candidate.dataset.tabindex = candidate.getAttribute('tabindex') || '';
        candidate.setAttribute('tabindex', '-1');
    });
    return ()=>{
        candidates.forEach((candidate)=>{
            const prevTabIndex = candidate.dataset.tabindex;
            candidate.setAttribute('tabindex', prevTabIndex);
        });
    };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
    const handleResize = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__/* .useCallbackRef */ .W)(onResize);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__/* .useLayoutEffect */ .b)(()=>{
        let rAF = 0;
        if (element) {
            /**
       * Resize Observer will throw an often benign error that says `ResizeObserver loop
       * completed with undelivered notifications`. This means that ResizeObserver was not
       * able to deliver all observations within a single animation frame, so we use
       * `requestAnimationFrame` to ensure we don't deliver unnecessary observations.
       * Further reading: https://github.com/WICG/resize-observer/issues/38
       */ const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
    return open ? 'open' : 'closed';
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
    return (event)=>event.pointerType === 'mouse' ? handler(event) : undefined
    ;
}
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
const $322c88a641701f3b$export$d7a01e11500dfb6f = (/* unused pure expression or super */ null && ($322c88a641701f3b$export$5958edd6c4ee7c79));
const $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
const $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
const $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
const $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
const $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
const $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
const $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;