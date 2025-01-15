"use strict";
exports.id = 4608;
exports.ids = [4608];
exports.modules = {

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ $1b0217ee4a91d156$export$a98f0dcb43a68a25),
/* harmony export */   Rk: () => (/* binding */ $1b0217ee4a91d156$export$371ab307eab489c0),
/* harmony export */   Tr: () => (/* binding */ $1b0217ee4a91d156$export$d7a01e11500dfb6f),
/* harmony export */   Uv: () => (/* binding */ $1b0217ee4a91d156$export$602eac185826482c),
/* harmony export */   VY: () => (/* binding */ $1b0217ee4a91d156$export$7c6e2c02157bb7d2),
/* harmony export */   Z0: () => (/* binding */ $1b0217ee4a91d156$export$1ff3c3f08ae963c0),
/* harmony export */   ZA: () => (/* binding */ $1b0217ee4a91d156$export$eb2fcfdbd7ba97d4),
/* harmony export */   __: () => (/* binding */ $1b0217ee4a91d156$export$b04be29aa201d4f5),
/* harmony export */   ck: () => (/* binding */ $1b0217ee4a91d156$export$6d08773d2e66f8f2),
/* harmony export */   fC: () => (/* binding */ $1b0217ee4a91d156$export$be92b6f5f03c0fe9),
/* harmony export */   fF: () => (/* binding */ $1b0217ee4a91d156$export$2ea8a7a591ac5eac),
/* harmony export */   oC: () => (/* binding */ $1b0217ee4a91d156$export$16ce288f89fa631c),
/* harmony export */   tu: () => (/* binding */ $1b0217ee4a91d156$export$6d4de93b380beddf),
/* harmony export */   wU: () => (/* binding */ $1b0217ee4a91d156$export$c3468e2714d175fa),
/* harmony export */   xz: () => (/* binding */ $1b0217ee4a91d156$export$41fb9f06171c75f4)
/* harmony export */ });
/* unused harmony exports createContextMenuScope, ContextMenu, ContextMenuTrigger, ContextMenuPortal, ContextMenuContent, ContextMenuGroup, ContextMenuLabel, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuItemIndicator, ContextMenuSeparator, ContextMenuArrow, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent, Arrow */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91180);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78438);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50769);


















/* -------------------------------------------------------------------------------------------------
 * ContextMenu
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CONTEXT_MENU_NAME = 'ContextMenu';
const [$1b0217ee4a91d156$var$createContextMenuContext, $1b0217ee4a91d156$export$1059331f43ddcc82] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($1b0217ee4a91d156$var$CONTEXT_MENU_NAME, [
    _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .createMenuScope */ .Wf
]);
const $1b0217ee4a91d156$var$useMenuScope = (0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .createMenuScope */ .Wf)();
const [$1b0217ee4a91d156$var$ContextMenuProvider, $1b0217ee4a91d156$var$useContextMenuContext] = $1b0217ee4a91d156$var$createContextMenuContext($1b0217ee4a91d156$var$CONTEXT_MENU_NAME);
const $1b0217ee4a91d156$export$8dc6765e8be191c7 = (props)=>{
    const { __scopeContextMenu: __scopeContextMenu , children: children , onOpenChange: onOpenChange , dir: dir , modal: modal = true  } = props;
    const [open1, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const handleOpenChangeProp = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__/* .useCallbackRef */ .W)(onOpenChange);
    const handleOpenChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((open)=>{
        setOpen(open);
        handleOpenChangeProp(open);
    }, [
        handleOpenChangeProp
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($1b0217ee4a91d156$var$ContextMenuProvider, {
        scope: __scopeContextMenu,
        open: open1,
        onOpenChange: handleOpenChange,
        modal: modal
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, {
        dir: dir,
        open: open1,
        onOpenChange: handleOpenChange,
        modal: modal
    }), children));
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8dc6765e8be191c7, {
    displayName: $1b0217ee4a91d156$var$CONTEXT_MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$TRIGGER_NAME = 'ContextMenuTrigger';
const $1b0217ee4a91d156$export$be6fc7b1d5b0beb9 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , disabled: disabled = false , ...triggerProps } = props;
    const context = $1b0217ee4a91d156$var$useContextMenuContext($1b0217ee4a91d156$var$TRIGGER_NAME, __scopeContextMenu);
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const pointRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        x: 0,
        y: 0
    });
    const virtualRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        getBoundingClientRect: ()=>DOMRect.fromRect({
                width: 0,
                height: 0,
                ...pointRef.current
            })
    });
    const longPressTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const clearLongPress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>window.clearTimeout(longPressTimerRef.current)
    , []);
    const handleOpen = (event)=>{
        pointRef.current = {
            x: event.clientX,
            y: event.clientY
        };
        context.onOpenChange(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>clearLongPress
    , [
        clearLongPress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>void (disabled && clearLongPress())
    , [
        disabled,
        clearLongPress
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, {
        virtualRef: virtualRef
    })), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        "data-state": context.open ? 'open' : 'closed',
        "data-disabled": disabled ? '' : undefined
    }, triggerProps, {
        ref: forwardedRef // prevent iOS context menu from appearing
        ,
        style: {
            WebkitTouchCallout: 'none',
            ...props.style
        } // if trigger is disabled, enable the native Context Menu
        ,
        onContextMenu: disabled ? props.onContextMenu : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onContextMenu, (event)=>{
            // clearing the long press here because some platforms already support
            // long press to trigger a `contextmenu` event
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
        }),
        onPointerDown: disabled ? props.onPointerDown : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerDown, $1b0217ee4a91d156$var$whenTouchOrPen((event)=>{
            // clear the long press here in case there's multiple touch points
            clearLongPress();
            longPressTimerRef.current = window.setTimeout(()=>handleOpen(event)
            , 700);
        })),
        onPointerMove: disabled ? props.onPointerMove : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerMove, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),
        onPointerCancel: disabled ? props.onPointerCancel : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerCancel, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),
        onPointerUp: disabled ? props.onPointerUp : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onPointerUp, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress))
    })));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$be6fc7b1d5b0beb9, {
    displayName: $1b0217ee4a91d156$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$PORTAL_NAME = 'ContextMenuPortal';
const $1b0217ee4a91d156$export$14afd0be83e45060 = (props)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...portalProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, portalProps));
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$14afd0be83e45060, {
    displayName: $1b0217ee4a91d156$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CONTENT_NAME = 'ContextMenuContent';
const $1b0217ee4a91d156$export$572205900c9369e = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...contentProps } = props;
    const context = $1b0217ee4a91d156$var$useContextMenuContext($1b0217ee4a91d156$var$CONTENT_NAME, __scopeContextMenu);
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, contentProps, {
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented && hasInteractedOutsideRef.current) event.preventDefault();
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
            ...props.style,
            '--radix-context-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-context-menu-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-context-menu-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-context-menu-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$572205900c9369e, {
    displayName: $1b0217ee4a91d156$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$GROUP_NAME = 'ContextMenuGroup';
const $1b0217ee4a91d156$export$9860523b0fcdd664 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...groupProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$9860523b0fcdd664, {
    displayName: $1b0217ee4a91d156$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$LABEL_NAME = 'ContextMenuLabel';
const $1b0217ee4a91d156$export$d4b9d3b609a10742 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...labelProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$d4b9d3b609a10742, {
    displayName: $1b0217ee4a91d156$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$ITEM_NAME = 'ContextMenuItem';
const $1b0217ee4a91d156$export$16a26dc176a49100 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...itemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, itemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$16a26dc176a49100, {
    displayName: $1b0217ee4a91d156$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME = 'ContextMenuCheckboxItem';
const $1b0217ee4a91d156$export$b6adbe51d5d8b7ec = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...checkboxItemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .oC, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, checkboxItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$b6adbe51d5d8b7ec, {
    displayName: $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$RADIO_GROUP_NAME = 'ContextMenuRadioGroup';
const $1b0217ee4a91d156$export$db5c89af5ed9aa07 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...radioGroupProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioGroup */ .Ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, radioGroupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$db5c89af5ed9aa07, {
    displayName: $1b0217ee4a91d156$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$RADIO_ITEM_NAME = 'ContextMenuRadioItem';
const $1b0217ee4a91d156$export$8a727d09a7d9bfc2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...radioItemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .Rk, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, radioItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8a727d09a7d9bfc2, {
    displayName: $1b0217ee4a91d156$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$INDICATOR_NAME = 'ContextMenuItemIndicator';
const $1b0217ee4a91d156$export$9ed8194dee42d94b = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...itemIndicatorProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$9ed8194dee42d94b, {
    displayName: $1b0217ee4a91d156$var$INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SEPARATOR_NAME = 'ContextMenuSeparator';
const $1b0217ee4a91d156$export$8d6b009fadfe1207 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...separatorProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$8d6b009fadfe1207, {
    displayName: $1b0217ee4a91d156$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$ARROW_NAME = 'ContextMenuArrow';
const $1b0217ee4a91d156$export$f47d0a58228a61e2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...arrowProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Arrow */ .Eh, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$f47d0a58228a61e2, {
    displayName: $1b0217ee4a91d156$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_NAME = 'ContextMenuSub';
const $1b0217ee4a91d156$export$5bc21d1c00c4b201 = (props)=>{
    const { __scopeContextMenu: __scopeContextMenu , children: children , onOpenChange: onOpenChange , open: openProp , defaultOpen: defaultOpen  } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    const [open, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .Sub */ .Tr, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, {
        open: open,
        onOpenChange: setOpen
    }), children);
};
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$5bc21d1c00c4b201, {
    displayName: $1b0217ee4a91d156$var$SUB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_TRIGGER_NAME = 'ContextMenuSubTrigger';
const $1b0217ee4a91d156$export$30b2b5c64556d316 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...triggerItemProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .fF, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, triggerItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$30b2b5c64556d316, {
    displayName: $1b0217ee4a91d156$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ContextMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $1b0217ee4a91d156$var$SUB_CONTENT_NAME = 'ContextMenuSubContent';
const $1b0217ee4a91d156$export$2c967063bd2dc512 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeContextMenu: __scopeContextMenu , ...subContentProps } = props;
    const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .tu, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, menuScope, subContentProps, {
        ref: forwardedRef,
        style: {
            ...props.style,
            '--radix-context-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-context-menu-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-context-menu-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-context-menu-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($1b0217ee4a91d156$export$2c967063bd2dc512, {
    displayName: $1b0217ee4a91d156$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $1b0217ee4a91d156$var$whenTouchOrPen(handler) {
    return (event)=>event.pointerType !== 'mouse' ? handler(event) : undefined
    ;
}
const $1b0217ee4a91d156$export$be92b6f5f03c0fe9 = $1b0217ee4a91d156$export$8dc6765e8be191c7;
const $1b0217ee4a91d156$export$41fb9f06171c75f4 = $1b0217ee4a91d156$export$be6fc7b1d5b0beb9;
const $1b0217ee4a91d156$export$602eac185826482c = $1b0217ee4a91d156$export$14afd0be83e45060;
const $1b0217ee4a91d156$export$7c6e2c02157bb7d2 = $1b0217ee4a91d156$export$572205900c9369e;
const $1b0217ee4a91d156$export$eb2fcfdbd7ba97d4 = $1b0217ee4a91d156$export$9860523b0fcdd664;
const $1b0217ee4a91d156$export$b04be29aa201d4f5 = $1b0217ee4a91d156$export$d4b9d3b609a10742;
const $1b0217ee4a91d156$export$6d08773d2e66f8f2 = $1b0217ee4a91d156$export$16a26dc176a49100;
const $1b0217ee4a91d156$export$16ce288f89fa631c = $1b0217ee4a91d156$export$b6adbe51d5d8b7ec;
const $1b0217ee4a91d156$export$a98f0dcb43a68a25 = $1b0217ee4a91d156$export$db5c89af5ed9aa07;
const $1b0217ee4a91d156$export$371ab307eab489c0 = $1b0217ee4a91d156$export$8a727d09a7d9bfc2;
const $1b0217ee4a91d156$export$c3468e2714d175fa = $1b0217ee4a91d156$export$9ed8194dee42d94b;
const $1b0217ee4a91d156$export$1ff3c3f08ae963c0 = $1b0217ee4a91d156$export$8d6b009fadfe1207;
const $1b0217ee4a91d156$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($1b0217ee4a91d156$export$f47d0a58228a61e2));
const $1b0217ee4a91d156$export$d7a01e11500dfb6f = $1b0217ee4a91d156$export$5bc21d1c00c4b201;
const $1b0217ee4a91d156$export$2ea8a7a591ac5eac = $1b0217ee4a91d156$export$30b2b5c64556d316;
const $1b0217ee4a91d156$export$6d4de93b380beddf = $1b0217ee4a91d156$export$2c967063bd2dc512;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;