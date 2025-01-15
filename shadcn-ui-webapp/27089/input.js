"use strict";
exports.id = 27089;
exports.ids = [27089];
exports.modules = {

/***/ 27089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ $0520064cdfc1bd2d$export$a98f0dcb43a68a25),
/* harmony export */   Rk: () => (/* binding */ $0520064cdfc1bd2d$export$371ab307eab489c0),
/* harmony export */   Tr: () => (/* binding */ $0520064cdfc1bd2d$export$d7a01e11500dfb6f),
/* harmony export */   VY: () => (/* binding */ $0520064cdfc1bd2d$export$7c6e2c02157bb7d2),
/* harmony export */   Z0: () => (/* binding */ $0520064cdfc1bd2d$export$1ff3c3f08ae963c0),
/* harmony export */   ZA: () => (/* binding */ $0520064cdfc1bd2d$export$eb2fcfdbd7ba97d4),
/* harmony export */   __: () => (/* binding */ $0520064cdfc1bd2d$export$b04be29aa201d4f5),
/* harmony export */   ck: () => (/* binding */ $0520064cdfc1bd2d$export$6d08773d2e66f8f2),
/* harmony export */   fC: () => (/* binding */ $0520064cdfc1bd2d$export$be92b6f5f03c0fe9),
/* harmony export */   fF: () => (/* binding */ $0520064cdfc1bd2d$export$2ea8a7a591ac5eac),
/* harmony export */   h_: () => (/* binding */ $0520064cdfc1bd2d$export$602eac185826482c),
/* harmony export */   oC: () => (/* binding */ $0520064cdfc1bd2d$export$16ce288f89fa631c),
/* harmony export */   tu: () => (/* binding */ $0520064cdfc1bd2d$export$6d4de93b380beddf),
/* harmony export */   v2: () => (/* binding */ $0520064cdfc1bd2d$export$d9b273488cd8ce6f),
/* harmony export */   wU: () => (/* binding */ $0520064cdfc1bd2d$export$c3468e2714d175fa),
/* harmony export */   xz: () => (/* binding */ $0520064cdfc1bd2d$export$41fb9f06171c75f4)
/* harmony export */ });
/* unused harmony exports createMenubarScope, Menubar, MenubarMenu, MenubarTrigger, MenubarPortal, MenubarContent, MenubarGroup, MenubarLabel, MenubarItem, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarItemIndicator, MenubarSeparator, MenubarArrow, MenubarSub, MenubarSubTrigger, MenubarSubContent, Arrow */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67939);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36455);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36261);
/* harmony import */ var _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91180);
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40902);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50769);



























/* -------------------------------------------------------------------------------------------------
 * Menubar
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$MENUBAR_NAME = 'Menubar';
const [$0520064cdfc1bd2d$var$Collection, $0520064cdfc1bd2d$var$useCollection, $0520064cdfc1bd2d$var$createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__/* .createCollection */ .B)($0520064cdfc1bd2d$var$MENUBAR_NAME);
const [$0520064cdfc1bd2d$var$createMenubarContext, $0520064cdfc1bd2d$export$7a4049d5555b545c] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .b)($0520064cdfc1bd2d$var$MENUBAR_NAME, [
    $0520064cdfc1bd2d$var$createCollectionScope,
    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .createRovingFocusGroupScope */ .Pc
]);
const $0520064cdfc1bd2d$var$useMenuScope = (0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .createMenuScope */ .Wf)();
const $0520064cdfc1bd2d$var$useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .createRovingFocusGroupScope */ .Pc)();
const [$0520064cdfc1bd2d$var$MenubarContextProvider, $0520064cdfc1bd2d$var$useMenubarContext] = $0520064cdfc1bd2d$var$createMenubarContext($0520064cdfc1bd2d$var$MENUBAR_NAME);
const $0520064cdfc1bd2d$export$7d4583da7581e674 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , value: valueProp , onValueChange: onValueChange , defaultValue: defaultValue , loop: loop = true , dir: dir , ...menubarProps } = props;
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__/* .useDirection */ .gm)(dir);
    const rovingFocusGroupScope = $0520064cdfc1bd2d$var$useRovingFocusGroupScope(__scopeMenubar);
    const [value1 = '', setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__/* .useControllableState */ .T)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    }); // We need to manage tab stop id manually as `RovingFocusGroup` updates the stop
    // based on focus, and in some situations our triggers won't ever be given focus
    // (e.g. click to open and then outside to close)
    const [currentTabStopId, setCurrentTabStopId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($0520064cdfc1bd2d$var$MenubarContextProvider, {
        scope: __scopeMenubar,
        value: value1,
        onMenuOpen: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value)=>{
            setValue(value);
            setCurrentTabStopId(value);
        }, [
            setValue
        ]),
        onMenuClose: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setValue('')
        , [
            setValue
        ]),
        onMenuToggle: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value)=>{
            setValue((prevValue)=>Boolean(prevValue) ? '' : value
            ); // `openMenuOpen` and `onMenuToggle` are called exclusively so we
            // need to update the id in either case.
            setCurrentTabStopId(value);
        }, [
            setValue
        ]),
        dir: direction,
        loop: loop
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($0520064cdfc1bd2d$var$Collection.Provider, {
        scope: __scopeMenubar
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($0520064cdfc1bd2d$var$Collection.Slot, {
        scope: __scopeMenubar
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        orientation: "horizontal",
        loop: loop,
        dir: direction,
        currentTabStopId: currentTabStopId,
        onCurrentTabStopIdChange: setCurrentTabStopId
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        role: "menubar"
    }, menubarProps, {
        ref: forwardedRef
    }))))));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$7d4583da7581e674, {
    displayName: $0520064cdfc1bd2d$var$MENUBAR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarMenu
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$MENU_NAME = 'MenubarMenu';
const [$0520064cdfc1bd2d$var$MenubarMenuProvider, $0520064cdfc1bd2d$var$useMenubarMenuContext] = $0520064cdfc1bd2d$var$createMenubarContext($0520064cdfc1bd2d$var$MENU_NAME);
const $0520064cdfc1bd2d$export$c777b394d551050b = (props)=>{
    const { __scopeMenubar: __scopeMenubar , value: valueProp , ...menuProps } = props;
    const autoValue = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .M)(); // We need to provide an initial deterministic value as `useId` will return
    // empty string on the first render and we don't want to match our internal "closed" value.
    const value = valueProp || autoValue || 'LEGACY_REACT_AUTO_VALUE';
    const context = $0520064cdfc1bd2d$var$useMenubarContext($0520064cdfc1bd2d$var$MENU_NAME, __scopeMenubar);
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const wasKeyboardTriggerOpenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const open1 = context.value === value;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!open1) wasKeyboardTriggerOpenRef.current = false;
    }, [
        open1
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($0520064cdfc1bd2d$var$MenubarMenuProvider, {
        scope: __scopeMenubar,
        value: value,
        triggerId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .M)(),
        triggerRef: triggerRef,
        contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .M)(),
        wasKeyboardTriggerOpenRef: wasKeyboardTriggerOpenRef
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, {
        open: open1,
        onOpenChange: (open)=>{
            // Menu only calls `onOpenChange` when dismissing so we
            // want to close our MenuBar based on the same events.
            if (!open) context.onMenuClose();
        },
        modal: false,
        dir: context.dir
    }, menuProps)));
};
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$c777b394d551050b, {
    displayName: $0520064cdfc1bd2d$var$MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarTrigger
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$TRIGGER_NAME = 'MenubarTrigger';
const $0520064cdfc1bd2d$export$df05cd234081ebd5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , disabled: disabled = false , ...triggerProps } = props;
    const rovingFocusGroupScope = $0520064cdfc1bd2d$var$useRovingFocusGroupScope(__scopeMenubar);
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    const context = $0520064cdfc1bd2d$var$useMenubarContext($0520064cdfc1bd2d$var$TRIGGER_NAME, __scopeMenubar);
    const menuContext = $0520064cdfc1bd2d$var$useMenubarMenuContext($0520064cdfc1bd2d$var$TRIGGER_NAME, __scopeMenubar);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__/* .useComposedRefs */ .e)(forwardedRef, ref, menuContext.triggerRef);
    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const open = context.value === menuContext.value;
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($0520064cdfc1bd2d$var$Collection.ItemSlot, {
        scope: __scopeMenubar,
        value: menuContext.value,
        disabled: disabled
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !disabled,
        tabStopId: menuContext.value
    }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Anchor */ .ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        asChild: true
    }, menuScope), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        type: "button",
        role: "menuitem",
        id: menuContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": open ? menuContext.contentId : undefined,
        "data-highlighted": isFocused ? '' : undefined,
        "data-state": open ? 'open' : 'closed',
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled
    }, triggerProps, {
        ref: composedRefs,
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onPointerDown, (event)=>{
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onMenuOpen(menuContext.value); // prevent trigger focusing when opening
                // this allows the content to be given focus without competition
                if (!open) event.preventDefault();
            }
        }),
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onPointerEnter, ()=>{
            const menubarOpen = Boolean(context.value);
            if (menubarOpen && !open) {
                var _ref$current;
                context.onMenuOpen(menuContext.value);
                (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
            }
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            if (disabled) return;
            if ([
                'Enter',
                ' '
            ].includes(event.key)) context.onMenuToggle(menuContext.value);
            if (event.key === 'ArrowDown') context.onMenuOpen(menuContext.value); // prevent keydown from scrolling window / first focused item to execute
            // that keydown (inadvertently closing the menu)
            if ([
                'Enter',
                ' ',
                'ArrowDown'
            ].includes(event.key)) {
                menuContext.wasKeyboardTriggerOpenRef.current = true;
                event.preventDefault();
            }
        }),
        onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onBlur, ()=>setIsFocused(false)
        )
    })))));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$df05cd234081ebd5, {
    displayName: $0520064cdfc1bd2d$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarPortal
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$PORTAL_NAME = 'MenubarPortal';
const $0520064cdfc1bd2d$export$a98ed304d621e164 = (props)=>{
    const { __scopeMenubar: __scopeMenubar , ...portalProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Portal */ .h_, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, portalProps));
};
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$a98ed304d621e164, {
    displayName: $0520064cdfc1bd2d$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarContent
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$CONTENT_NAME = 'MenubarContent';
const $0520064cdfc1bd2d$export$f42a00bc8a46c161 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , align: align = 'start' , ...contentProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    const context = $0520064cdfc1bd2d$var$useMenubarContext($0520064cdfc1bd2d$var$CONTENT_NAME, __scopeMenubar);
    const menuContext = $0520064cdfc1bd2d$var$useMenubarMenuContext($0520064cdfc1bd2d$var$CONTENT_NAME, __scopeMenubar);
    const getItems = $0520064cdfc1bd2d$var$useCollection(__scopeMenubar);
    const hasInteractedOutsideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .VY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        id: menuContext.contentId,
        "aria-labelledby": menuContext.triggerId,
        "data-radix-menubar-content": ""
    }, menuScope, contentProps, {
        ref: forwardedRef,
        align: align,
        onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onCloseAutoFocus, (event)=>{
            const menubarOpen = Boolean(context.value);
            if (!menubarOpen && !hasInteractedOutsideRef.current) {
                var _menuContext$triggerR;
                (_menuContext$triggerR = menuContext.triggerRef.current) === null || _menuContext$triggerR === void 0 || _menuContext$triggerR.focus();
            }
            hasInteractedOutsideRef.current = false; // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
        }),
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onFocusOutside, (event)=>{
            const target = event.target;
            const isMenubarTrigger = getItems().some((item)=>{
                var _item$ref$current;
                return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
            });
            if (isMenubarTrigger) event.preventDefault();
        }),
        onInteractOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onInteractOutside, ()=>{
            hasInteractedOutsideRef.current = true;
        }),
        onEntryFocus: (event)=>{
            if (!menuContext.wasKeyboardTriggerOpenRef.current) event.preventDefault();
        },
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            if ([
                'ArrowRight',
                'ArrowLeft'
            ].includes(event.key)) {
                const target = event.target;
                const targetIsSubTrigger = target.hasAttribute('data-radix-menubar-subtrigger');
                const isKeyDownInsideSubMenu = target.closest('[data-radix-menubar-content]') !== event.currentTarget;
                const prevMenuKey = context.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
                const isPrevKey = prevMenuKey === event.key;
                const isNextKey = !isPrevKey; // Prevent navigation when we're opening a submenu
                if (isNextKey && targetIsSubTrigger) return; // or we're inside a submenu and are moving backwards to close it
                if (isKeyDownInsideSubMenu && isPrevKey) return;
                const items = getItems().filter((item)=>!item.disabled
                );
                let candidateValues = items.map((item)=>item.value
                );
                if (isPrevKey) candidateValues.reverse();
                const currentIndex = candidateValues.indexOf(menuContext.value);
                candidateValues = context.loop ? $0520064cdfc1bd2d$var$wrapArray(candidateValues, currentIndex + 1) : candidateValues.slice(currentIndex + 1);
                const [nextValue] = candidateValues;
                if (nextValue) context.onMenuOpen(nextValue);
            }
        }, {
            checkForDefaultPrevented: false
        }),
        style: {
            ...props.style,
            '--radix-menubar-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-menubar-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-menubar-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-menubar-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-menubar-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$f42a00bc8a46c161, {
    displayName: $0520064cdfc1bd2d$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarGroup
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$GROUP_NAME = 'MenubarGroup';
const $0520064cdfc1bd2d$export$7669e79198e0f2eb = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...groupProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Group */ .ZA, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$7669e79198e0f2eb, {
    displayName: $0520064cdfc1bd2d$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarLabel
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$LABEL_NAME = 'MenubarLabel';
const $0520064cdfc1bd2d$export$39935c5b19a4b4e = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...labelProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Label */ .__, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$39935c5b19a4b4e, {
    displayName: $0520064cdfc1bd2d$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarItem
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$ITEM_NAME = 'MenubarItem';
const $0520064cdfc1bd2d$export$92f903c8c91c291c = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...itemProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Item */ .ck, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, itemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$92f903c8c91c291c, {
    displayName: $0520064cdfc1bd2d$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$CHECKBOX_ITEM_NAME = 'MenubarCheckboxItem';
const $0520064cdfc1bd2d$export$372384eccd27af53 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...checkboxItemProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxItem */ .oC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, checkboxItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$372384eccd27af53, {
    displayName: $0520064cdfc1bd2d$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$RADIO_GROUP_NAME = 'MenubarRadioGroup';
const $0520064cdfc1bd2d$export$94dfa2322f330fdb = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...radioGroupProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .RadioGroup */ .Ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, radioGroupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$94dfa2322f330fdb, {
    displayName: $0520064cdfc1bd2d$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$RADIO_ITEM_NAME = 'MenubarRadioItem';
const $0520064cdfc1bd2d$export$7d2f467b4a7f68d8 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...radioItemProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .RadioItem */ .Rk, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, radioItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$7d2f467b4a7f68d8, {
    displayName: $0520064cdfc1bd2d$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$INDICATOR_NAME = 'MenubarItemIndicator';
const $0520064cdfc1bd2d$export$63e15a0e2af5a57 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...itemIndicatorProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .ItemIndicator */ .wU, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$63e15a0e2af5a57, {
    displayName: $0520064cdfc1bd2d$var$INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarSeparator
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$SEPARATOR_NAME = 'MenubarSeparator';
const $0520064cdfc1bd2d$export$588aef9e7b5183b5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...separatorProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z0, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$588aef9e7b5183b5, {
    displayName: $0520064cdfc1bd2d$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarArrow
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$ARROW_NAME = 'MenubarArrow';
const $0520064cdfc1bd2d$export$474b9891f5b9e633 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...arrowProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Arrow */ .Eh, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$474b9891f5b9e633, {
    displayName: $0520064cdfc1bd2d$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarSub
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$SUB_NAME = 'MenubarSub';
const $0520064cdfc1bd2d$export$ed0be551778c493a = (props)=>{
    const { __scopeMenubar: __scopeMenubar , children: children , open: openProp , onOpenChange: onOpenChange , defaultOpen: defaultOpen  } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__/* .useControllableState */ .T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .Sub */ .Tr, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, {
        open: open,
        onOpenChange: setOpen
    }), children);
};
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$ed0be551778c493a, {
    displayName: $0520064cdfc1bd2d$var$SUB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$SUB_TRIGGER_NAME = 'MenubarSubTrigger';
const $0520064cdfc1bd2d$export$1820ea18a1dfed3c = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...subTriggerProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .SubTrigger */ .fF, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        "data-radix-menubar-subtrigger": ""
    }, menuScope, subTriggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$1820ea18a1dfed3c, {
    displayName: $0520064cdfc1bd2d$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenubarSubContent
 * -----------------------------------------------------------------------------------------------*/ const $0520064cdfc1bd2d$var$SUB_CONTENT_NAME = 'MenubarSubContent';
const $0520064cdfc1bd2d$export$1b21e255bb3e4f7f = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenubar: __scopeMenubar , ...subContentProps } = props;
    const menuScope = $0520064cdfc1bd2d$var$useMenuScope(__scopeMenubar);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_4__/* .SubContent */ .tu, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, menuScope, {
        "data-radix-menubar-content": ""
    }, subContentProps, {
        ref: forwardedRef,
        style: {
            ...props.style,
            '--radix-menubar-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-menubar-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-menubar-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-menubar-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-menubar-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($0520064cdfc1bd2d$export$1b21e255bb3e4f7f, {
    displayName: $0520064cdfc1bd2d$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $0520064cdfc1bd2d$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $0520064cdfc1bd2d$export$be92b6f5f03c0fe9 = $0520064cdfc1bd2d$export$7d4583da7581e674;
const $0520064cdfc1bd2d$export$d9b273488cd8ce6f = $0520064cdfc1bd2d$export$c777b394d551050b;
const $0520064cdfc1bd2d$export$41fb9f06171c75f4 = $0520064cdfc1bd2d$export$df05cd234081ebd5;
const $0520064cdfc1bd2d$export$602eac185826482c = $0520064cdfc1bd2d$export$a98ed304d621e164;
const $0520064cdfc1bd2d$export$7c6e2c02157bb7d2 = $0520064cdfc1bd2d$export$f42a00bc8a46c161;
const $0520064cdfc1bd2d$export$eb2fcfdbd7ba97d4 = $0520064cdfc1bd2d$export$7669e79198e0f2eb;
const $0520064cdfc1bd2d$export$b04be29aa201d4f5 = $0520064cdfc1bd2d$export$39935c5b19a4b4e;
const $0520064cdfc1bd2d$export$6d08773d2e66f8f2 = $0520064cdfc1bd2d$export$92f903c8c91c291c;
const $0520064cdfc1bd2d$export$16ce288f89fa631c = $0520064cdfc1bd2d$export$372384eccd27af53;
const $0520064cdfc1bd2d$export$a98f0dcb43a68a25 = $0520064cdfc1bd2d$export$94dfa2322f330fdb;
const $0520064cdfc1bd2d$export$371ab307eab489c0 = $0520064cdfc1bd2d$export$7d2f467b4a7f68d8;
const $0520064cdfc1bd2d$export$c3468e2714d175fa = $0520064cdfc1bd2d$export$63e15a0e2af5a57;
const $0520064cdfc1bd2d$export$1ff3c3f08ae963c0 = $0520064cdfc1bd2d$export$588aef9e7b5183b5;
const $0520064cdfc1bd2d$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($0520064cdfc1bd2d$export$474b9891f5b9e633));
const $0520064cdfc1bd2d$export$d7a01e11500dfb6f = $0520064cdfc1bd2d$export$ed0be551778c493a;
const $0520064cdfc1bd2d$export$2ea8a7a591ac5eac = $0520064cdfc1bd2d$export$1820ea18a1dfed3c;
const $0520064cdfc1bd2d$export$6d4de93b380beddf = $0520064cdfc1bd2d$export$1b21e255bb3e4f7f;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;