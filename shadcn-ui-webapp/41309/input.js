"use strict";
exports.id = 41309;
exports.ids = [41309];
exports.modules = {

/***/ 2501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 28213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeEventHandlers: () => (/* binding */ $e42e1063c40fb3ef$export$b9ecd428b558ff10)
/* harmony export */ });
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 6039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollection: () => (/* binding */ $e02a7d9cb1dc128c$export$c74125a8e3af6bb2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62736);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53464);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47805);









// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.createContextScope)(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
        const itemMap = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new Map()).current;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /*#__PURE__*/ Object.assign(CollectionProvider, {
        displayName: PROVIDER_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionSlot, {
        displayName: COLLECTION_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionItemSlot, {
        displayName: ITEM_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 53464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeRefs: () => (/* binding */ $6ed0406888f73fc4$export$43e446d32b3d21af),
/* harmony export */   useComposedRefs: () => (/* binding */ $6ed0406888f73fc4$export$c7b2cbe3552a0d05)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 62736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContextScope: () => (/* binding */ $c512c27ab02ef895$export$50c7b4e9d9f19c1)
/* harmony export */ });
/* unused harmony export createContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ $3bkAK$createContext(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = $3bkAK$useMemo(()=>context
        , Object.values(context));
        return /*#__PURE__*/ $3bkAK$createElement(Context.Provider, {
            value: value
        }, children);
    }
    function useContext(consumerName) {
        const context = $3bkAK$useContext(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context
            , Object.values(context));
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $c512c27ab02ef895$export$fd42f52fd3ae1109,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 58914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDirection: () => (/* binding */ $f631663db3294ace$export$b39126d51d94e6f3)
/* harmony export */ });
/* unused harmony exports Provider, DirectionProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $7Gjcd$createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = (/* unused pure expression or super */ null && ($f631663db3294ace$export$c760c09fdd558351));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 28024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DismissableLayer: () => (/* binding */ $5cb92bef7577960e$export$177fb62ff3ec1f22)
/* harmony export */ });
/* unused harmony exports DismissableLayerBranch, Root, Branch */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28213);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85142);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53464);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90016);
/* harmony import */ var _radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73877);















/* -------------------------------------------------------------------------------------------------
 * DismissableLayer
 * -----------------------------------------------------------------------------------------------*/ const $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME = 'DismissableLayer';
const $5cb92bef7577960e$var$CONTEXT_UPDATE = 'dismissableLayer.update';
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    var _node$ownerDocument;
    const { disableOutsidePointerEvents: disableOutsidePointerEvents = false , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , ...layerProps } = props;
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.useComposedRefs)(forwardedRef, (node)=>setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1); // prettier-ignore
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
    const index = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    (0,_radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_2__.useEscapeKeydown)((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!node1) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = 'none';
            }
            context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
        };
    }, [
        node1,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    /**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */ (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (!node1) return;
            context.layers.delete(node1);
            context.layersWithOutsidePointerEventsDisabled.delete(node1);
            $5cb92bef7577960e$var$dispatchUpdate();
        };
    }, [
        node1,
        context
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleUpdate = ()=>force({})
        ;
        document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate)
        ;
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
});
/*#__PURE__*/ Object.assign($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    displayName: $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DismissableLayerBranch
 * -----------------------------------------------------------------------------------------------*/ const $5cb92bef7577960e$var$BRANCH_NAME = 'DismissableLayerBranch';
const $5cb92bef7577960e$export$4d5eb2109db14228 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.useComposedRefs)(forwardedRef, ref);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($5cb92bef7577960e$export$4d5eb2109db14228, {
    displayName: $5cb92bef7577960e$var$BRANCH_NAME
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */ function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onPointerDownOutside);
    const isPointerInsideReactTreeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const handleClickRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(()=>{});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                    $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                }
                /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */ if (event.pointerType === 'touch') {
                    ownerDocument.removeEventListener('click', handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                    ownerDocument.addEventListener('click', handleClickRef.current, {
                        once: true
                    });
                } else handleAndDispatchPointerDownOutsideEvent();
            }
            isPointerInsideReactTreeRef.current = false;
        };
        /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */ const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener('pointerdown', handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener('pointerdown', handlePointerDown);
            ownerDocument.removeEventListener('click', handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */ function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onFocusOutside);
    const isFocusInsideReactTreeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener('focusin', handleFocus);
        return ()=>ownerDocument.removeEventListener('focusin', handleFocus)
        ;
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true
        ,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
    const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail: detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.dispatchDiscreteCustomEvent)(target, event);
    else target.dispatchEvent(event);
}
const $5cb92bef7577960e$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($5cb92bef7577960e$export$177fb62ff3ec1f22));
const $5cb92bef7577960e$export$aecb2ddcb55c95be = (/* unused pure expression or super */ null && ($5cb92bef7577960e$export$4d5eb2109db14228));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 50522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ $1746a345f3d73bb7$export$f680877a34711e37)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50305);





const $1746a345f3d73bb7$var$useReactId = react__WEBPACK_IMPORTED_MODULE_0__['useId'.toString()] || (()=>undefined
);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
    const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId()); // React versions older than 18 will have client-side ids only.
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!deterministicId) setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
        );
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : '');
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 57220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ $322c88a641701f3b$export$7c6e2c02157bb7d2),
/* harmony export */   Indicator: () => (/* binding */ $322c88a641701f3b$export$adb584737d712b70),
/* harmony export */   Item: () => (/* binding */ $322c88a641701f3b$export$6d08773d2e66f8f2),
/* harmony export */   Link: () => (/* binding */ $322c88a641701f3b$export$a6c7ac8248d6e38a),
/* harmony export */   List: () => (/* binding */ $322c88a641701f3b$export$54c2e3dc7acea9f5),
/* harmony export */   Root: () => (/* binding */ $322c88a641701f3b$export$be92b6f5f03c0fe9),
/* harmony export */   Trigger: () => (/* binding */ $322c88a641701f3b$export$41fb9f06171c75f4),
/* harmony export */   Viewport: () => (/* binding */ $322c88a641701f3b$export$d5c6c08dc2d3ca7)
/* harmony export */ });
/* unused harmony exports createNavigationMenuScope, NavigationMenu, NavigationMenuSub, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuContent, NavigationMenuViewport, Sub */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34656);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62736);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28213);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85142);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96220);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53464);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58914);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32345);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50522);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6039);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28024);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4508);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50305);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90016);
/* harmony import */ var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75211);



































/* -------------------------------------------------------------------------------------------------
 * NavigationMenu
 * -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$NAVIGATION_MENU_NAME = 'NavigationMenu';
const [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.createCollection)($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.createCollection)($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.createContextScope)($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
    $322c88a641701f3b$var$createCollectionScope,
    $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
const [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
const $322c88a641701f3b$export$5b2278cf1e8bcae2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , value: valueProp , onValueChange: onValueChange , defaultValue: defaultValue , delayDuration: delayDuration = 200 , skipDelayDuration: skipDelayDuration = 300 , orientation: orientation = 'horizontal' , dir: dir , ...NavigationMenuProps } = props;
    const [navigationMenu, setNavigationMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(forwardedRef, (node)=>setNavigationMenu(node)
    );
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.useDirection)(dir);
    const openTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const closeTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const skipDelayTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const [isOpenDelayed, setIsOpenDelayed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [value1 = '', setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.useControllableState)({
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.nav, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
    const [value = '', setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.useControllableState)({
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
        previousValue: (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__.usePrevious)(value),
        baseId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.useId)(),
        dir: dir,
        orientation: orientation,
        viewport: viewport,
        onViewportChange: setViewport,
        indicatorTrack: indicatorTrack,
        onIndicatorTrackChange: setIndicatorTrack,
        onTriggerEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onTriggerEnter),
        onTriggerLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onTriggerLeave),
        onContentEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onContentEnter),
        onContentLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onContentLeave),
        onItemSelect: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onItemSelect),
        onItemDismiss: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onItemDismiss),
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
    const list = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.ul, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
        "data-orientation": context.orientation
    }, listProps, {
        ref: forwardedRef
    }));
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, {
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
    const autoValue = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.useId)(); // We need to provide an initial deterministic value as `useId` will return
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.li, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, itemProps, {
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
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(ref, itemContext.triggerRef, forwardedRef);
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
        id: triggerId,
        disabled: disabled,
        "data-disabled": disabled ? '' : undefined,
        "data-state": $322c88a641701f3b$var$getOpenState(open),
        "aria-expanded": open,
        "aria-controls": contentId
    }, triggerProps, {
        ref: composedRefs,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerEnter, ()=>{
            wasClickCloseRef.current = false;
            itemContext.wasEscapeCloseRef.current = false;
        }),
        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, $322c88a641701f3b$var$whenMouse(()=>{
            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
            context.onTriggerEnter(itemContext.value);
            hasPointerMoveOpenedRef.current = true;
        })),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(()=>{
            if (disabled) return;
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
        })),
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, ()=>{
            context.onItemSelect(itemContext.value);
            wasClickCloseRef.current = open;
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
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
    })))), open && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__.Root, {
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.a, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
        "data-active": active ? '' : undefined,
        "aria-current": active ? 'page' : undefined
    }, linkProps, {
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, (event1)=>{
            const target = event1.target;
            const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
                bubbles: true,
                cancelable: true
            });
            target.addEventListener($322c88a641701f3b$var$LINK_SELECT, (event)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event)
            , {
                once: true
            });
            (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.dispatchDiscreteCustomEvent)(target, linkSelectEvent);
            if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
                const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
                    bubbles: true,
                    cancelable: true
                });
                (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.dispatchDiscreteCustomEvent)(target, rootContentDismissEvent);
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
    return context.indicatorTrack ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || isVisible
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, indicatorProps, {
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
    return position ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(itemContext.contentRef, forwardedRef);
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
    return !context.viewport ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
        "data-state": $322c88a641701f3b$var$getOpenState(open)
    }, commonProps, {
        ref: composedRefs,
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? 'none' : undefined,
            ...commonProps.style
        }
    }))) : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$ViewportContentMounter, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
        onViewportContentChange(props.value, {
            ref: forwardedRef,
            ...props
        });
    }, [
        props,
        forwardedRef,
        onViewportContentChange
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
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
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(ref, forwardedRef);
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__.DismissableLayer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onFocusOutside, (event)=>{
            var _context$rootNavigati;
            onContentFocusOutside();
            const target = event.target; // Only dismiss content when focus moves outside of the menu
            if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target)) event.preventDefault();
        }),
        onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerDownOutside, (event)=>{
            var _context$viewport;
            const target = event.target;
            const isTrigger = getItems().some((item)=>{
                var _item$ref$current;
                return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
            });
            const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
            if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
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
        onEscapeKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onEscapeKeyDown, (event)=>{
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
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, viewportProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($322c88a641701f3b$export$ee880b97cc6d44a5, {
    displayName: $322c88a641701f3b$var$VIEWPORT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $322c88a641701f3b$var$NavigationMenuViewportImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props1, forwardedRef)=>{
    const { __scopeNavigationMenu: __scopeNavigationMenu , children: children , ...viewportImplProps } = props1;
    const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(forwardedRef, context.onViewportChange);
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
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props1.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
    }), Array.from(viewportContentContext.items).map(([value, { ref: ref , forceMount: forceMount , ...props }])=>{
        const isActive = activeContentValue === value;
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
            key: value,
            present: forceMount || isActive
        }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, props, {
            ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.composeRefs)(ref, (node)=>{
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
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
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, groupProps, {
        ref: forwardedRef,
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
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
    const handleResize = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onResize);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
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


/***/ }),

/***/ 32345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Presence: () => (/* binding */ $921a889cee6df7e8$export$99c2b779aa4e8b8b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34656);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53464);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50305);










function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        ref: ref
    }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const stylesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    const prevPresentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present);
    const prevAnimationNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 85142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primitive: () => (/* binding */ $8927f6f2acc4f386$export$250ffa63cdc0d034),
/* harmony export */   dispatchDiscreteCustomEvent: () => (/* binding */ $8927f6f2acc4f386$export$6d1a0317bde7de7f)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34656);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47805);









const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.Slot : node;
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($8927f6f2acc4f386$export$250ffa63cdc0d034));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 47805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slot: () => (/* binding */ $5e63c961fc1ce211$export$8c6ed5c666ac1360)
/* harmony export */ });
/* unused harmony exports Slottable, Root */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53464);







/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)) return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, children.ref) : children.ref
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
const $5e63c961fc1ce211$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($5e63c961fc1ce211$export$8c6ed5c666ac1360));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 90016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallbackRef: () => (/* binding */ $b1b2314f5f9a1d84$export$25bec8c6f54ee79a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 96220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControllableState: () => (/* binding */ $71cd76cc60e0454e$export$6f32135080cb4c3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90016);





function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {
    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp: defaultProp,
        onChange: onChange
    });
    const isControlled = prop !== undefined;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else setUncontrolledProp(nextValue);
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value1,
        setValue
    ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {
    const uncontrolledState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 73877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEscapeKeydown: () => (/* binding */ $addc16e1bbe58fd0$export$3a72a57244d6e765)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90016);





/**
 * Listens for when the escape key is down
 */ function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onEscapeKeyDownProp);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onEscapeKeyDown(event);
        };
        ownerDocument.addEventListener('keydown', handleKeyDown);
        return ()=>ownerDocument.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 50305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLayoutEffect: () => (/* binding */ $9f79659886946c16$export$e5c5a5f917a5871c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : ()=>{};





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 4508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePrevious: () => (/* binding */ $010c2913dbd2fe3d$export$5cae361ad82dce8b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 75211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ $ea1ef594cf570d83$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony export VisuallyHidden */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85142);







/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden
 * -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$var$NAME = 'VisuallyHidden';
const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.Primitive.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($ea1ef594cf570d83$export$439d29a4e110a164, {
    displayName: $ea1ef594cf570d83$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 19582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cva: () => (/* binding */ cva)
/* harmony export */ });
/* unused harmony export cx */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4871);

const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx__WEBPACK_IMPORTED_MODULE_0__.clsx;
const cva = (base, config)=>{
    return (props)=>{
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants , defaultVariants  } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1)=>{
            let { class: cvClass , className: cvClassName , ...compoundVariantOptions } = param1;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};


//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ 4871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (clsx)));

/***/ }),

/***/ 46114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64309);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32159);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref)=>{
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
            ref,
            ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(iconName)}`,
                className
            ].join(" "),
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]);
    });
    Component.displayName = `${iconName}`;
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 64309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ 49069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46114);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
 //# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ 32159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)
/* harmony export */ });
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
 //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 34229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(89174).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ })

};
;