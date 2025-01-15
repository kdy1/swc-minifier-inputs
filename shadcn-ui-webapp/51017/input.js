"use strict";
exports.id = 51017;
exports.ids = [51017];
exports.modules = {

/***/ 17085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ $ae6933e535247d3d$export$7d15b64cf5a3a4c4)
/* harmony export */ });
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 29111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ composeRefs),
/* harmony export */   e: () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// packages/react/compose-refs/src/composeRefs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 53614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x8: () => (/* binding */ Close),
  VY: () => (/* binding */ Content),
  dk: () => (/* binding */ Description),
  Vq: () => (/* binding */ Dialog),
  aV: () => (/* binding */ Overlay),
  h_: () => (/* binding */ dist_Portal),
  fC: () => (/* binding */ react_dialog_dist_Root),
  Dx: () => (/* binding */ Title),
  xz: () => (/* binding */ Trigger)
});

// UNUSED EXPORTS: DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, WarningProvider, createDialogScope

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+primitive@1.1.0/node_modules/@radix-ui/primitive/dist/index.mjs
// packages/core/primitive/src/primitive.tsx
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var dist = __webpack_require__(29111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(78553);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs
// packages/react/context/src/createContext.tsx


function createContext2(rootComponentName, defaultContext) {
  const Context = react.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = react.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Context.Provider, { value, children });
  }
  function useContext2(consumerName) {
    const context = react.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = react.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index] || BaseContext;
      const value = react.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName][index] || BaseContext;
      const context = react.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return react.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
// packages/react/use-layout-effect/src/useLayoutEffect.tsx

var useLayoutEffect2 = Boolean(globalThis?.document) ? react.useLayoutEffect : () => {
};

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs
// packages/react/id/src/id.tsx


var useReactId = react["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = react.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
// packages/react/use-callback-ref/src/useCallbackRef.tsx

function useCallbackRef(callback) {
  const callbackRef = react.useRef(callback);
  react.useEffect(() => {
    callbackRef.current = callback;
  });
  return react.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
// packages/react/use-controllable-state/src/useControllableState.tsx


function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = react.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = react.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = react.useRef(value);
  const handleChange = useCallbackRef(onChange);
  react.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js
var react_dom = __webpack_require__(85544);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(80464);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2._7wq6j6ld57igb4jnwui6bzv5sa/node_modules/@radix-ui/react-primitive/dist/index.mjs
// packages/react/primitive/src/Primitive.tsx




var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = react.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? react_slot_dist/* Slot */.g7 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) react_dom.flushSync(() => target.dispatchEvent(event));
}
var Root = (/* unused pure expression or super */ null && (Primitive));

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx


function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  react.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-d_hioluaxam475i6eyi2hu2hf3jm/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Branch,DismissableLayer,DismissableLayerBranch,Root auto */ // packages/react/dismissable-layer/src/DismissableLayer.tsx







var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = /*#__PURE__*/ react.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = react.useContext(DismissableLayerContext);
    const [node, setNode] = react.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = react.useState({});
    const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    react.useEffect(()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    react.useEffect(()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    react.useEffect(()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = react.useContext(DismissableLayerContext);
    const ref = react.useRef(null);
    const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, ref);
    react.useEffect(()=>{
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
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
    const isPointerInsideReactTreeRef = react.useRef(false);
    const handleClickRef = react.useRef(()=>{});
    react.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
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
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = useCallbackRef(onFocusOutside);
    const isFocusInsideReactTreeRef = react.useRef(false);
    react.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var dist_Root = (/* unused pure expression or super */ null && (DismissableLayer));
var Branch = (/* unused pure expression or super */ null && (DismissableLayerBranch));
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18._vn3zgpizx4xmuormi6ued7euum/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ FocusScope,Root auto */ // packages/react/focus-scope/src/FocusScope.tsx





var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = react.useState(null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = react.useRef(null);
    const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, (node)=>setContainer(node));
    const focusScope = react.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    react.useEffect(()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    dist_focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    dist_focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) dist_focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    react.useEffect(()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        dist_focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        dist_focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = react.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) dist_focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) dist_focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        dist_focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function dist_focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var react_focus_scope_dist_Root = (/* unused pure expression or super */ null && (FocusScope));
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.1_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-portal/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Portal,Root auto */ // packages/react/portal/src/Portal.tsx





var PORTAL_NAME = "Portal";
var Portal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = react.useState(false);
    useLayoutEffect2(()=>setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? /*#__PURE__*/ react_dom_default().createPortal(/* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var react_portal_dist_Root = (/* unused pure expression or super */ null && (Portal));
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx




// packages/react/presence/src/useStateMachine.tsx

function useStateMachine(initialState, machine) {
    return react.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : react.Children.only(children);
    const ref = (0,dist/* useComposedRefs */.e)(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /*#__PURE__*/ react.cloneElement(child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = react.useState();
    const stylesRef = react.useRef({});
    const prevPresentRef = react.useRef(present);
    const prevAnimationNameRef = react.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    react.useEffect(()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    useLayoutEffect2(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    useLayoutEffect2(()=>{
        if (node) {
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node && isCurrentAnimation) {
                    react_dom.flushSync(()=>send("ANIMATION_END"));
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: react.useCallback((node2)=>{
            if (node2) stylesRef.current = getComputedStyle(node2);
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
 //# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.0_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ FocusGuards,Root,useFocusGuards auto */ // packages/react/focus-guards/src/FocusGuards.tsx

var dist_count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    react.useEffect(()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        dist_count++;
        return ()=>{
            if (dist_count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            dist_count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
    return element;
}
var react_focus_guards_dist_Root = (/* unused pure expression or super */ null && (FocusGuards));
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var constants = __webpack_require__(34867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.2.67_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js + 2 modules
var useMergeRef = __webpack_require__(8392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.67_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
var medium = __webpack_require__(8406);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js

var effectCar = (0,medium/* createSidecarMedium */._)();

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js





var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = react.forwardRef(function (props, parentRef) {
    var ref = react.useRef(null);
    var _a = react.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0,tslib_es6/* __rest */._T)(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = (0,useMergeRef/* useMergeRefs */.q)([ref, parentRef]);
    var containerProps = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, rest), callbacks);
    return (react.createElement(react.Fragment, null,
        enabled && (react.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (react.cloneElement(react.Children.only(children), (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, containerProps), { ref: containerRef }))) : (react.createElement(Container, (0,tslib_es6/* __assign */.pi)({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants/* fullWidthClassName */.zi,
    zeroRight: constants/* zeroRightClassName */.pF,
};


// EXTERNAL MODULE: ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.67_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var es2015_exports = __webpack_require__(50039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js + 2 modules
var es2015 = __webpack_require__(71000);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js + 4 modules
var dist_es2015 = __webpack_require__(27390);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        if (target instanceof ShadowRoot) {
            target = target.host;
        }
        else {
            target = target.parentNode;
        }
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScroll) < 1) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScrollTop) < 1) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js






var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react.useRef([]);
    var touchStartRef = react.useRef([0, 0]);
    var activeAxis = react.useRef();
    var id = react.useState(idCounter++)[0];
    var Style = react.useState(dist_es2015/* styleSingleton */.Ws)[0];
    var lastProps = react.useRef(props);
    react.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    react.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0,tslib_es6/* __spreadArray */.ev)([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = react.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react.createElement(react.Fragment, null,
        inert ? react.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react.createElement(es2015/* RemoveScrollBar */.jp, { gapMode: props.gapMode }) : null));
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js



/* harmony default export */ const sidecar = ((0,es2015_exports/* exportSidecar */.L)(effectCar, RemoveScrollSideCar));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js




var ReactRemoveScroll = react.forwardRef(function (props, ref) { return (react.createElement(RemoveScroll, (0,tslib_es6/* __assign */.pi)({}, props, { ref: ref, sideCar: sidecar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;
/* harmony default export */ const Combination = (ReactRemoveScroll);

// EXTERNAL MODULE: ../../node_modules/.pnpm/aria-hidden@1.2.4/node_modules/aria-hidden/dist/es2015/index.js
var aria_hidden_dist_es2015 = __webpack_require__(14763);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.1_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-dialog/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Close,Content,Description,Dialog,DialogClose,DialogContent,DialogDescription,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger,Overlay,Portal,Root,Title,Trigger,WarningProvider,createDialogScope auto */ // packages/react/dialog/src/Dialog.tsx
















var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = react.useRef(null);
    const contentRef = react.useRef(null);
    const [open = false, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: useId(),
        titleId: useId(),
        descriptionId: useId(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: react.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0,dist/* useComposedRefs */.e)(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var dist_PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(dist_PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(dist_PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: react.Children.map(children, (child)=>/* @__PURE__ */ (0,react_jsx_runtime.jsx)(Presence, {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Portal, {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = dist_PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Presence, {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Combination, {
        as: react_slot_dist/* Slot */.g7,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Presence, {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = react.useRef(null);
    const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, context.contentRef, contentRef);
    react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return (0,aria_hidden_dist_es2015/* hideOthers */.Ry)(content);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = react.useRef(false);
    const hasPointerDownOutsideRef = react.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = react.useRef(null);
    const composedRefs = (0,dist/* useComposedRefs */.e)(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime.jsx)(FocusScope, {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DismissableLayer, {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime.jsx)(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime.jsx)(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Primitive.button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    react.useEffect(()=>{
        const describedById = contentRef.current?.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var react_dialog_dist_Root = Dialog;
var Trigger = DialogTrigger;
var dist_Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 36455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gm: () => (/* binding */ $f631663db3294ace$export$b39126d51d94e6f3)
/* harmony export */ });
/* unused harmony exports Provider, DirectionProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
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

/***/ 40638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XB: () => (/* binding */ $5cb92bef7577960e$export$177fb62ff3ec1f22)
/* harmony export */ });
/* unused harmony exports DismissableLayerBranch, Root, Branch */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78438);
/* harmony import */ var _radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87256);















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
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setNode(node)
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
    (0,_radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_2__/* .useEscapeKeydown */ .e)((event)=>{
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
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__/* .composeEventHandlers */ .M)(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
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
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__/* .useComposedRefs */ .e)(forwardedRef, ref);
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
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, props, {
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
    const handlePointerDownOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__/* .useCallbackRef */ .W)(onPointerDownOutside);
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
            } else // We need to remove the event listener in case the outside click has been canceled.
            // See: https://github.com/radix-ui/primitives/issues/2171
            ownerDocument.removeEventListener('click', handleClickRef.current);
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
    const handleFocusOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__/* .useCallbackRef */ .W)(onFocusOutside);
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
    if (discrete) (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .dispatchDiscreteCustomEvent */ .jH)(target, event);
    else target.dispatchEvent(event);
}
const $5cb92bef7577960e$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($5cb92bef7577960e$export$177fb62ff3ec1f22));
const $5cb92bef7577960e$export$aecb2ddcb55c95be = (/* unused pure expression or super */ null && ($5cb92bef7577960e$export$4d5eb2109db14228));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 59062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EW: () => (/* binding */ $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c)
/* harmony export */ });
/* unused harmony exports FocusGuards, Root */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/** Number of components which have requested interest to have focus guards */ let $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$ac5b58043b79449b(props) {
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return props.children;
}
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
        $3db38b7d1fb3fe6a$var$count++;
        return ()=>{
            if ($3db38b7d1fb3fe6a$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $3db38b7d1fb3fe6a$var$count--;
        };
    }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}
const $3db38b7d1fb3fe6a$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($3db38b7d1fb3fe6a$export$ac5b58043b79449b));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 65001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $d3863c46a17e8a28$export$20e40289641fbbb6)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78438);











const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * FocusScope
 * -----------------------------------------------------------------------------------------------*/ const $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME = 'FocusScope';
const $d3863c46a17e8a28$export$20e40289641fbbb6 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const onMountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__/* .useCallbackRef */ .W)(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__/* .useCallbackRef */ .W)(onUnmountAutoFocusProp);
    const lastFocusedElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                const relatedTarget = event.relatedTarget; // A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
                //
                // 1. When the user switches app/tabs/windows/the browser itself loses focus.
                // 2. In Google Chrome, when the focused element is removed from the DOM.
                //
                // We let the browser do its thing here because:
                //
                // 1. The browser already keeps a memory of what's focused for when the page gets refocused.
                // 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
                //    throws the CPU to 100%, so we avoid doing anything for this reason here too.
                if (relatedTarget === null) return; // If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
                // that is outside the container, we move focus to the last valid focused element inside.
                if (!container1.contains(relatedTarget)) $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            } // When the focused element gets removed from the DOM, browsers move focus
            // back to the document.body. In this case, we move focus to the container
            // to keep focus trapped correctly.
            function handleMutations(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations)if (mutation.removedNodes.length > 0) $d3863c46a17e8a28$var$focus(container1);
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            const mutationObserver = new MutationObserver(handleMutations);
            if (container1) mutationObserver.observe(container1, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (container1) {
            $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $d3863c46a17e8a28$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                    container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/*#__PURE__*/ Object.assign($d3863c46a17e8a28$export$20e40289641fbbb6, {
    displayName: $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $d3863c46a17e8a28$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $d3863c46a17e8a28$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $d3863c46a17e8a28$var$getTabbableEdges(container) {
    const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
    const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
    const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
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
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $d3863c46a17e8a28$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$d3863c46a17e8a28$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $d3863c46a17e8a28$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}
const $d3863c46a17e8a28$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($d3863c46a17e8a28$export$20e40289641fbbb6));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 22613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ $f1701beae083dbae$export$602eac185826482c)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85544);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54227);









/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/ const $f1701beae083dbae$var$PORTAL_NAME = 'Portal';
const $f1701beae083dbae$export$602eac185826482c = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    var _globalThis$document;
    const { container: container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body , ...portalProps } = props;
    return container ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, portalProps, {
        ref: forwardedRef
    })), container) : null;
});
/*#__PURE__*/ Object.assign($f1701beae083dbae$export$602eac185826482c, {
    displayName: $f1701beae083dbae$var$PORTAL_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $f1701beae083dbae$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($f1701beae083dbae$export$602eac185826482c));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 80464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g7: () => (/* binding */ Slot)
/* harmony export */ });
/* unused harmony exports Root, Slottable */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29111);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// packages/react/slot/src/Slot.tsx



var Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .composeRefs */ .F)(forwardedRef, childrenRef) : childrenRef
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children });
};
function isSlottable(child) {
  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = (/* unused pure expression or super */ null && (Slot));

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 14763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ry: () => (/* binding */ hideOthers)
/* harmony export */ });
/* unused harmony exports inertOthers, supportsInert, suppressOthers */
var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
/**
 * Marks everything except given node(or nodes) as inert
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var inertOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-inert-ed'; }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
/**
 * @returns if current browser supports inert
 */
var supportsInert = function () {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
/**
 * Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var suppressOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-suppressed'; }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};


/***/ }),

/***/ 69237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mY: () => (/* binding */ He)
});

// UNUSED EXPORTS: CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandLoading, CommandRoot, CommandSeparator, useCommandState

;// CONCATENATED MODULE: ../../node_modules/.pnpm/cmdk@1.0.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U=1,Y=.9,H=.8,J=.17,p=.1,u=.999,$=.9999;var k=.99,m=/[\\\/_+.#"@\[\(\{&]/,B=/[\\\/_+.#"@\[\(\{&]/g,K=/[\s-]/,X=/[\s-]/g;function G(_,C,h,P,A,f,O){if(f===C.length)return A===_.length?U:k;var T=`${A},${f}`;if(O[T]!==void 0)return O[T];for(var L=P.charAt(f),c=h.indexOf(L,A),S=0,E,N,R,M;c>=0;)E=G(_,C,h,P,c+1,f+1,O),E>S&&(c===A?E*=U:m.test(_.charAt(c-1))?(E*=H,R=_.slice(A,c-1).match(B),R&&A>0&&(E*=Math.pow(u,R.length))):K.test(_.charAt(c-1))?(E*=Y,M=_.slice(A,c-1).match(X),M&&A>0&&(E*=Math.pow(u,M.length))):(E*=J,A>0&&(E*=Math.pow(u,c-A))),_.charAt(c)!==C.charAt(f)&&(E*=$)),(E<p&&h.charAt(c-1)===P.charAt(f+1)||P.charAt(f+1)===P.charAt(f)&&h.charAt(c-1)!==P.charAt(f))&&(N=G(_,C,h,P,c+1,f+2,O),N*p>E&&(E=N*p)),E>S&&(S=E),c=h.indexOf(L,c+1);return O[T]=S,S}function D(_){return _.toLowerCase().replace(X," ")}function W(_,C,h){return _=h&&h.length>0?`${_+" "+h.join(" ")}`:_,G(_,C,D(_),D(C),0,0,{})}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(81884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(17587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(31462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(95185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(36261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(50769);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.5_@types+react-dom@18.2.22_@types+react@18.2.67_react-d_eutoambuxax2hyuqgqqitkytki/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var react_dismissable_layer_dist = __webpack_require__(40638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.0.4_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18._w4zudsi4g6vfciwftrylaqpdnm/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var react_focus_scope_dist = __webpack_require__(65001);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-portal@1.0.4_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(22613);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(64772);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2._pcssahmctkg3uinjzyzzxugzuq/node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(54227);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var react_focus_guards_dist = __webpack_require__(59062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js + 6 modules
var Combination = __webpack_require__(65538);
// EXTERNAL MODULE: ../../node_modules/.pnpm/aria-hidden@1.2.4/node_modules/aria-hidden/dist/es2015/index.js
var es2015 = __webpack_require__(14763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.67_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(28743);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@radix-ui+react-dialog@1.0.5_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-dialog/dist/index.mjs

































/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DIALOG_NAME = 'Dialog';
const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = (0,react_context_dist/* createContextScope */.b)($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = (0,react.useRef)(null);
    const contentRef = (0,react.useRef)(null);
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: (0,react_id_dist/* useId */.M)(),
        titleId: (0,react_id_dist/* useId */.M)(),
        descriptionId: (0,react_id_dist/* useId */.M)(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: (0,react.useCallback)(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$3ddf2d174ce01153, {
    displayName: $5d3850c4d0b4e6c7$var$DIALOG_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$TRIGGER_NAME = 'DialogTrigger';
const $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ (0,react.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$2e1e1122cf0cba88, {
    displayName: $5d3850c4d0b4e6c7$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$PORTAL_NAME = 'DialogPortal';
const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
    forceMount: undefined
});
const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, react.Children.map(children, (child)=>/*#__PURE__*/ (0,react.createElement)(react_presence_dist/* Presence */.z, {
            present: forceMount || context.open
        }, /*#__PURE__*/ (0,react.createElement)(react_portal_dist/* Portal */.h, {
            asChild: true,
            container: container
        }, child))
    ));
};
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$dad7c95542bacce0, {
    displayName: $5d3850c4d0b4e6c7$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = 'DialogOverlay';
const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ (0,react.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, (0,esm_extends/* default */.Z)({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$bd1d06c79be19e17, {
    displayName: $5d3850c4d0b4e6c7$var$OVERLAY_NAME
});
const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    (0,react.createElement)(Combination/* default */.Z, {
        as: react_slot_dist/* Slot */.g7,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ (0,react.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CONTENT_NAME = 'DialogContent';
const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ (0,react.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, (0,esm_extends/* default */.Z)({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, (0,esm_extends/* default */.Z)({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
    displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentModal = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = (0,react.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    (0,react.useEffect)(()=>{
        const content = contentRef.current;
        if (content) return (0,es2015/* hideOthers */.Ry)(content);
    }, []);
    return /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0,dist/* composeEventHandlers */.M)(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: (0,dist/* composeEventHandlers */.M)(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: (0,dist/* composeEventHandlers */.M)(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = (0,react.useRef)(false);
    const hasPointerDownOutsideRef = (0,react.useRef)(false);
    return /*#__PURE__*/ (0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === 'pointerdown') hasPointerDownOutsideRef.current = true;
            } // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault(); // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
            // we will get the pointer down outside event on the trigger, but then a subsequent
            // focus outside event on the container, we ignore any focus outside event when we've
            // already had a pointer down outside event.
            if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentImpl = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
    const contentRef = (0,react.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    (0,react_focus_guards_dist/* useFocusGuards */.EW)();
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, null, /*#__PURE__*/ (0,react.createElement)(react_focus_scope_dist/* FocusScope */.M, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ (0,react.createElement)(react_dismissable_layer_dist/* DismissableLayer */.XB, (0,esm_extends/* default */.Z)({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$TITLE_NAME = 'DialogTitle';
const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ (0,react.createElement)(react_primitive_dist/* Primitive */.WV.h2, (0,esm_extends/* default */.Z)({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
    displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = 'DialogDescription';
const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ (0,react.createElement)(react_primitive_dist/* Primitive */.WV.p, (0,esm_extends/* default */.Z)({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
    displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CLOSE_NAME = 'DialogClose';
const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /*#__PURE__*/ (0,react.forwardRef)((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ (0,react.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
    displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $5d3850c4d0b4e6c7$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = (0,react_context_dist/* createContext */.k)($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
    contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
    titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $5d3850c4d0b4e6c7$var$TitleWarning = ({ titleId: titleId  })=>{
    const titleWarningContext = $5d3850c4d0b4e6c7$var$useWarningContext($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    $67UHm$useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) throw new Error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
const $5d3850c4d0b4e6c7$var$DESCRIPTION_WARNING_NAME = 'DialogDescriptionWarning';
const $5d3850c4d0b4e6c7$var$DescriptionWarning = ({ contentRef: contentRef , descriptionId: descriptionId  })=>{
    const descriptionWarningContext = $5d3850c4d0b4e6c7$var$useWarningContext($5d3850c4d0b4e6c7$var$DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    $67UHm$useEffect(()=>{
        var _contentRef$current;
        const describedById = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'); // if we have an id and the user hasn't set aria-describedby={undefined}
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
const $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = (/* unused pure expression or super */ null && ($5d3850c4d0b4e6c7$export$2e1e1122cf0cba88));
const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = (/* unused pure expression or super */ null && ($5d3850c4d0b4e6c7$export$16f7638e4a34b909));
const $5d3850c4d0b4e6c7$export$393edc798c47379d = (/* unused pure expression or super */ null && ($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5));
const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = (/* unused pure expression or super */ null && ($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac));





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/cmdk@1.0.0_@types+react-dom@18.2.22_@types+react@18.2.67_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/cmdk/dist/index.mjs
var V='[cmdk-group=""]',dist_X='[cmdk-group-items=""]',ge='[cmdk-group-heading=""]',dist_Y='[cmdk-item=""]',le=`${dist_Y}:not([aria-disabled="true"])`,Q="cmdk-item-select",M="data-value",Re=(r,o,n)=>W(r,o,n),ue=react.createContext(void 0),dist_G=()=>react.useContext(ue),de=react.createContext(void 0),Z=()=>react.useContext(de),fe=react.createContext(void 0),me=react.forwardRef((r,o)=>{let n=dist_k(()=>{var e,s;return{search:"",value:(s=(e=r.value)!=null?e:r.defaultValue)!=null?s:"",filtered:{count:0,items:new Map,groups:new Set}}}),u=dist_k(()=>new Set),c=dist_k(()=>new Map),d=dist_k(()=>new Map),f=dist_k(()=>new Set),p=pe(r),{label:v,children:b,value:l,onValueChange:y,filter:S,shouldFilter:C,loop:L,disablePointerSelection:ee=!1,vimBindings:j=!0,...H}=r,te=react.useId(),$=react.useId(),K=react.useId(),x=react.useRef(null),g=Me();T(()=>{if(l!==void 0){let e=l.trim();n.current.value=e,h.emit()}},[l]),T(()=>{g(6,re)},[]);let h=react.useMemo(()=>({subscribe:e=>(f.current.add(e),()=>f.current.delete(e)),snapshot:()=>n.current,setState:(e,s,i)=>{var a,m,R;if(!Object.is(n.current[e],s)){if(n.current[e]=s,e==="search")z(),q(),g(1,U);else if(e==="value"&&(i||g(5,re),((a=p.current)==null?void 0:a.value)!==void 0)){let E=s!=null?s:"";(R=(m=p.current).onValueChange)==null||R.call(m,E);return}h.emit()}},emit:()=>{f.current.forEach(e=>e())}}),[]),B=react.useMemo(()=>({value:(e,s,i)=>{var a;s!==((a=d.current.get(e))==null?void 0:a.value)&&(d.current.set(e,{value:s,keywords:i}),n.current.filtered.items.set(e,ne(s,i)),g(2,()=>{q(),h.emit()}))},item:(e,s)=>(u.current.add(e),s&&(c.current.has(s)?c.current.get(s).add(e):c.current.set(s,new Set([e]))),g(3,()=>{z(),q(),n.current.value||U(),h.emit()}),()=>{d.current.delete(e),u.current.delete(e),n.current.filtered.items.delete(e);let i=O();g(4,()=>{z(),(i==null?void 0:i.getAttribute("id"))===e&&U(),h.emit()})}),group:e=>(c.current.has(e)||c.current.set(e,new Set),()=>{d.current.delete(e),c.current.delete(e)}),filter:()=>p.current.shouldFilter,label:v||r["aria-label"],disablePointerSelection:ee,listId:te,inputId:K,labelId:$,listInnerRef:x}),[]);function ne(e,s){var a,m;let i=(m=(a=p.current)==null?void 0:a.filter)!=null?m:Re;return e?i(e,n.current.search,s):0}function q(){if(!n.current.search||p.current.shouldFilter===!1)return;let e=n.current.filtered.items,s=[];n.current.filtered.groups.forEach(a=>{let m=c.current.get(a),R=0;m.forEach(E=>{let P=e.get(E);R=Math.max(P,R)}),s.push([a,R])});let i=x.current;A().sort((a,m)=>{var P,_;let R=a.getAttribute("id"),E=m.getAttribute("id");return((P=e.get(E))!=null?P:0)-((_=e.get(R))!=null?_:0)}).forEach(a=>{let m=a.closest(dist_X);m?m.appendChild(a.parentElement===m?a:a.closest(`${dist_X} > *`)):i.appendChild(a.parentElement===i?a:a.closest(`${dist_X} > *`))}),s.sort((a,m)=>m[1]-a[1]).forEach(a=>{let m=x.current.querySelector(`${V}[${M}="${encodeURIComponent(a[0])}"]`);m==null||m.parentElement.appendChild(m)})}function U(){let e=A().find(i=>i.getAttribute("aria-disabled")!=="true"),s=e==null?void 0:e.getAttribute(M);h.setState("value",s||void 0)}function z(){var s,i,a,m;if(!n.current.search||p.current.shouldFilter===!1){n.current.filtered.count=u.current.size;return}n.current.filtered.groups=new Set;let e=0;for(let R of u.current){let E=(i=(s=d.current.get(R))==null?void 0:s.value)!=null?i:"",P=(m=(a=d.current.get(R))==null?void 0:a.keywords)!=null?m:[],_=ne(E,P);n.current.filtered.items.set(R,_),_>0&&e++}for(let[R,E]of c.current)for(let P of E)if(n.current.filtered.items.get(P)>0){n.current.filtered.groups.add(R);break}n.current.filtered.count=e}function re(){var s,i,a;let e=O();e&&(((s=e.parentElement)==null?void 0:s.firstChild)===e&&((a=(i=e.closest(V))==null?void 0:i.querySelector(ge))==null||a.scrollIntoView({block:"nearest"})),e.scrollIntoView({block:"nearest"}))}function O(){var e;return(e=x.current)==null?void 0:e.querySelector(`${dist_Y}[aria-selected="true"]`)}function A(){var e;return Array.from((e=x.current)==null?void 0:e.querySelectorAll(le))}function W(e){let i=A()[e];i&&h.setState("value",i.getAttribute(M))}function J(e){var R;let s=O(),i=A(),a=i.findIndex(E=>E===s),m=i[a+e];(R=p.current)!=null&&R.loop&&(m=a+e<0?i[i.length-1]:a+e===i.length?i[0]:i[a+e]),m&&h.setState("value",m.getAttribute(M))}function oe(e){let s=O(),i=s==null?void 0:s.closest(V),a;for(;i&&!a;)i=e>0?we(i,V):Ie(i,V),a=i==null?void 0:i.querySelector(le);a?h.setState("value",a.getAttribute(M)):J(e)}let ie=()=>W(A().length-1),ae=e=>{e.preventDefault(),e.metaKey?ie():e.altKey?oe(1):J(1)},se=e=>{e.preventDefault(),e.metaKey?W(0):e.altKey?oe(-1):J(-1)};return react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:o,tabIndex:-1,...H,"cmdk-root":"",onKeyDown:e=>{var s;if((s=H.onKeyDown)==null||s.call(H,e),!e.defaultPrevented)switch(e.key){case"n":case"j":{j&&e.ctrlKey&&ae(e);break}case"ArrowDown":{ae(e);break}case"p":case"k":{j&&e.ctrlKey&&se(e);break}case"ArrowUp":{se(e);break}case"Home":{e.preventDefault(),W(0);break}case"End":{e.preventDefault(),ie();break}case"Enter":if(!e.nativeEvent.isComposing&&e.keyCode!==229){e.preventDefault();let i=O();if(i){let a=new Event(Q);i.dispatchEvent(a)}}}}},react.createElement("label",{"cmdk-label":"",htmlFor:B.inputId,id:B.labelId,style:De},v),F(r,e=>react.createElement(de.Provider,{value:h},react.createElement(ue.Provider,{value:B},e))))}),be=react.forwardRef((r,o)=>{var K,x;let n=react.useId(),u=react.useRef(null),c=react.useContext(fe),d=dist_G(),f=pe(r),p=(x=(K=f.current)==null?void 0:K.forceMount)!=null?x:c==null?void 0:c.forceMount;T(()=>{if(!p)return d.item(n,c==null?void 0:c.id)},[p]);let v=ve(n,u,[r.value,r.children,u],r.keywords),b=Z(),l=dist_D(g=>g.value&&g.value===v.current),y=dist_D(g=>p||d.filter()===!1?!0:g.search?g.filtered.items.get(n)>0:!0);react.useEffect(()=>{let g=u.current;if(!(!g||r.disabled))return g.addEventListener(Q,S),()=>g.removeEventListener(Q,S)},[y,r.onSelect,r.disabled]);function S(){var g,h;C(),(h=(g=f.current).onSelect)==null||h.call(g,v.current)}function C(){b.setState("value",v.current,!0)}if(!y)return null;let{disabled:L,value:ee,onSelect:j,forceMount:H,keywords:te,...$}=r;return react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:N([u,o]),...$,id:n,"cmdk-item":"",role:"option","aria-disabled":!!L,"aria-selected":!!l,"data-disabled":!!L,"data-selected":!!l,onPointerMove:L||d.disablePointerSelection?void 0:C,onClick:L?void 0:S},r.children)}),he=react.forwardRef((r,o)=>{let{heading:n,children:u,forceMount:c,...d}=r,f=react.useId(),p=react.useRef(null),v=react.useRef(null),b=react.useId(),l=dist_G(),y=dist_D(C=>c||l.filter()===!1?!0:C.search?C.filtered.groups.has(f):!0);T(()=>l.group(f),[]),ve(f,p,[r.value,r.heading,v]);let S=react.useMemo(()=>({id:f,forceMount:c}),[c]);return react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:N([p,o]),...d,"cmdk-group":"",role:"presentation",hidden:y?void 0:!0},n&&react.createElement("div",{ref:v,"cmdk-group-heading":"","aria-hidden":!0,id:b},n),F(r,C=>react.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?b:void 0},react.createElement(fe.Provider,{value:S},C))))}),ye=react.forwardRef((r,o)=>{let{alwaysRender:n,...u}=r,c=react.useRef(null),d=dist_D(f=>!f.search);return!n&&!d?null:react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:N([c,o]),...u,"cmdk-separator":"",role:"separator"})}),Ee=react.forwardRef((r,o)=>{let{onValueChange:n,...u}=r,c=r.value!=null,d=Z(),f=dist_D(l=>l.search),p=dist_D(l=>l.value),v=dist_G(),b=react.useMemo(()=>{var y;let l=(y=v.listInnerRef.current)==null?void 0:y.querySelector(`${dist_Y}[${M}="${encodeURIComponent(p)}"]`);return l==null?void 0:l.getAttribute("id")},[]);return react.useEffect(()=>{r.value!=null&&d.setState("search",r.value)},[r.value]),react.createElement(react_primitive_dist/* Primitive */.WV.input,{ref:o,...u,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":v.listId,"aria-labelledby":v.labelId,"aria-activedescendant":b,id:v.inputId,type:"text",value:c?r.value:f,onChange:l=>{c||d.setState("search",l.target.value),n==null||n(l.target.value)}})}),Se=react.forwardRef((r,o)=>{let{children:n,label:u="Suggestions",...c}=r,d=react.useRef(null),f=react.useRef(null),p=dist_G();return react.useEffect(()=>{if(f.current&&d.current){let v=f.current,b=d.current,l,y=new ResizeObserver(()=>{l=requestAnimationFrame(()=>{let S=v.offsetHeight;b.style.setProperty("--cmdk-list-height",S.toFixed(1)+"px")})});return y.observe(v),()=>{cancelAnimationFrame(l),y.unobserve(v)}}},[]),react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:N([d,o]),...c,"cmdk-list":"",role:"listbox","aria-label":u,id:p.listId},F(r,v=>react.createElement("div",{ref:N([f,p.listInnerRef]),"cmdk-list-sizer":""},v)))}),Ce=react.forwardRef((r,o)=>{let{open:n,onOpenChange:u,overlayClassName:c,contentClassName:d,container:f,...p}=r;return react.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,{open:n,onOpenChange:u},react.createElement($5d3850c4d0b4e6c7$export$602eac185826482c,{container:f},react.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,{"cmdk-overlay":"",className:c}),react.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,{"aria-label":r.label,"cmdk-dialog":"",className:d},react.createElement(me,{ref:o,...p}))))}),xe=react.forwardRef((r,o)=>dist_D(u=>u.filtered.count===0)?react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:o,...r,"cmdk-empty":"",role:"presentation"}):null),Pe=react.forwardRef((r,o)=>{let{progress:n,children:u,label:c="Loading...",...d}=r;return react.createElement(react_primitive_dist/* Primitive */.WV.div,{ref:o,...d,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":c},F(r,f=>react.createElement("div",{"aria-hidden":!0},f)))}),He=Object.assign(me,{List:Se,Item:be,Input:Ee,Group:he,Separator:ye,Dialog:Ce,Empty:xe,Loading:Pe});function we(r,o){let n=r.nextElementSibling;for(;n;){if(n.matches(o))return n;n=n.nextElementSibling}}function Ie(r,o){let n=r.previousElementSibling;for(;n;){if(n.matches(o))return n;n=n.previousElementSibling}}function pe(r){let o=react.useRef(r);return T(()=>{o.current=r}),o}var T=typeof window=="undefined"?react.useEffect:react.useLayoutEffect;function dist_k(r){let o=react.useRef();return o.current===void 0&&(o.current=r()),o}function N(r){return o=>{r.forEach(n=>{typeof n=="function"?n(o):n!=null&&(n.current=o)})}}function dist_D(r){let o=Z(),n=()=>r(o.snapshot());return react.useSyncExternalStore(o.subscribe,n,n)}function ve(r,o,n,u=[]){let c=react.useRef(),d=dist_G();return T(()=>{var v;let f=(()=>{var b;for(let l of n){if(typeof l=="string")return l.trim();if(typeof l=="object"&&"current"in l)return l.current?(b=l.current.textContent)==null?void 0:b.trim():c.current}})(),p=u.map(b=>b.trim());d.value(r,f,p),(v=o.current)==null||v.setAttribute(M,f),c.current=f}),c}var Me=()=>{let[r,o]=react.useState(),n=dist_k(()=>new Map);return T(()=>{n.current.forEach(u=>u()),n.current=new Map},[r]),(u,c)=>{n.current.set(u,c),o({})}};function Te(r){let o=r.type;return typeof o=="function"?o(r.props):"render"in o?o.render(r.props):r}function F({asChild:r,children:o},n){return r&&react.isValidElement(o)?react.cloneElement(Te(o),{ref:o.ref},n(o.props.children)):n(o)}var De={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};


/***/ }),

/***/ 76823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Circle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Circle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
]);
 //# sourceMappingURL=circle.js.map


/***/ }),

/***/ 55175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
 //# sourceMappingURL=search.js.map


/***/ }),

/***/ 42869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40450);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

/***/ }),

/***/ 34867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Av: () => (/* binding */ removedBarSizeVariable),
/* harmony export */   pF: () => (/* binding */ zeroRightClassName),
/* harmony export */   xv: () => (/* binding */ noScrollbarsClassName),
/* harmony export */   zi: () => (/* binding */ fullWidthClassName)
/* harmony export */ });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ 71000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jp: () => (/* reexport */ RemoveScrollBar)
});

// UNUSED EXPORTS: fullWidthClassName, getGapWidth, noScrollbarsClassName, removedBarSizeVariable, zeroRightClassName

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js + 4 modules
var es2015 = __webpack_require__(27390);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var constants = __webpack_require__(34867);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js




var Style = (0,es2015/* styleSingleton */.Ws)();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(constants/* noScrollbarsClassName */.xv, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(constants/* zeroRightClassName */.pF, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants/* fullWidthClassName */.zi, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants/* zeroRightClassName */.pF, " .").concat(constants/* zeroRightClassName */.pF, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants/* fullWidthClassName */.zi, " .").concat(constants/* fullWidthClassName */.zi, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(constants/* removedBarSizeVariable */.Av, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    react.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = react.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js






/***/ }),

/***/ 65538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Combination)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var constants = __webpack_require__(34867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.2.67_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js + 2 modules
var useMergeRef = __webpack_require__(8392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.67_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
var medium = __webpack_require__(8406);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js

var effectCar = (0,medium/* createSidecarMedium */._)();

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js





var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = react.forwardRef(function (props, parentRef) {
    var ref = react.useRef(null);
    var _a = react.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = (0,tslib_es6/* __rest */._T)(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0,useMergeRef/* useMergeRefs */.q)([ref, parentRef]);
    var containerProps = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, rest), callbacks);
    return (react.createElement(react.Fragment, null,
        enabled && (react.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react.cloneElement(react.Children.only(children), (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, containerProps), { ref: containerRef }))) : (react.createElement(Container, (0,tslib_es6/* __assign */.pi)({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants/* fullWidthClassName */.zi,
    zeroRight: constants/* zeroRightClassName */.pF,
};


// EXTERNAL MODULE: ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.67_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var es2015_exports = __webpack_require__(50039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js + 2 modules
var es2015 = __webpack_require__(71000);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js + 4 modules
var dist_es2015 = __webpack_require__(27390);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js






var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react.useRef([]);
    var touchStartRef = react.useRef([0, 0]);
    var activeAxis = react.useRef();
    var id = react.useState(idCounter++)[0];
    var Style = react.useState(function () { return (0,dist_es2015/* styleSingleton */.Ws)(); })[0];
    var lastProps = react.useRef(props);
    react.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    react.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0,tslib_es6/* __spreadArray */.ev)([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = react.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react.createElement(react.Fragment, null,
        inert ? react.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react.createElement(es2015/* RemoveScrollBar */.jp, { gapMode: "margin" }) : null));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js



/* harmony default export */ const sidecar = ((0,es2015_exports/* exportSidecar */.L)(effectCar, RemoveScrollSideCar));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.67_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js




var ReactRemoveScroll = react.forwardRef(function (props, ref) { return (react.createElement(RemoveScroll, (0,tslib_es6/* __assign */.pi)({}, props, { ref: ref, sideCar: sidecar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;
/* harmony default export */ const Combination = (ReactRemoveScroll);


/***/ }),

/***/ 27390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ws: () => (/* reexport */ styleSingleton)
});

// UNUSED EXPORTS: styleHookSingleton, stylesheetSingleton

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js


/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        react.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.67_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js





/***/ }),

/***/ 5075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _T: () => (/* binding */ __rest),
/* harmony export */   ev: () => (/* binding */ __spreadArray),
/* harmony export */   pi: () => (/* binding */ __assign)
/* harmony export */ });
/* unused harmony exports __extends, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 8392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ useMergeRefs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.2.67_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.2.67_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = (0,react.useState)(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.2.67_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js



var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}


/***/ }),

/***/ 50039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ exportSidecar)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5075);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__rest */ ._T)(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Target, (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ 8406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createSidecarMedium)
/* harmony export */ });
/* unused harmony export createMedium */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5075);

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .pi)({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ 83529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dy: () => (/* binding */ Drawer)
/* harmony export */ });
/* unused harmony exports Content, Handle, NestedRoot, Overlay, Portal, Root */
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53614);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ Content,Drawer,Handle,NestedRoot,Overlay,Portal,Root auto */ function __insertCSS(code) {
    if (!code || typeof document == "undefined") return;
    let head = document.head || document.getElementsByTagName("head")[0];
    let style = document.createElement("style");
    style.type = "text/css";
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}



const DrawerContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
    drawerRef: {
        current: null
    },
    overlayRef: {
        current: null
    },
    onPress: ()=>{},
    onRelease: ()=>{},
    onDrag: ()=>{},
    onNestedDrag: ()=>{},
    onNestedOpenChange: ()=>{},
    onNestedRelease: ()=>{},
    openProp: undefined,
    dismissible: false,
    isOpen: false,
    isDragging: false,
    keyboardIsOpen: {
        current: false
    },
    snapPointsOffset: null,
    snapPoints: null,
    handleOnly: false,
    modal: false,
    shouldFade: false,
    activeSnapPoint: null,
    onOpenChange: ()=>{},
    setActiveSnapPoint: ()=>{},
    closeDrawer: ()=>{},
    direction: "bottom",
    shouldAnimate: {
        current: true
    },
    shouldScaleBackground: false,
    setBackgroundColorOnScale: true,
    noBodyStyles: false,
    container: null,
    autoFocus: false
});
const useDrawerContext = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(DrawerContext);
    if (!context) {
        throw new Error("useDrawerContext must be used within a Drawer.Root");
    }
    return context;
};
__insertCSS("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function isMobileFirefox() {
    const userAgent = navigator.userAgent;
    return  false && (0 // iOS Firefox
    );
}
function isMac() {
    return testPlatform(/^Mac/);
}
function isIPhone() {
    return testPlatform(/^iPhone/);
}
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function isIPad() {
    return testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
    return isIPhone() || isIPad();
}
function testPlatform(re) {
    return  false ? 0 : undefined;
}
// This code comes from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/overlays/src/usePreventScroll.ts
const KEYBOARD_BUFFER = 24;
const useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function chain$1(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks){
            if (typeof callback === "function") {
                callback(...args);
            }
        }
    };
}
// @ts-ignore
const visualViewport = typeof document !== "undefined" && window.visualViewport;
function isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
    if (isScrollable(node)) {
        node = node.parentElement;
    }
    while(node && !isScrollable(node)){
        node = node.parentElement;
    }
    return node || document.scrollingElement || document.documentElement;
}
// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;
let restore;
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */ function usePreventScroll(options = {}) {
    let { isDisabled } = options;
    useIsomorphicLayoutEffect(()=>{
        if (isDisabled) {
            return;
        }
        preventScrollCount++;
        if (preventScrollCount === 1) {
            if (isIOS()) {
                restore = preventScrollMobileSafari();
            }
        }
        return ()=>{
            preventScrollCount--;
            if (preventScrollCount === 0) {
                restore == null ? void 0 : restore();
            }
        };
    }, [
        isDisabled
    ]);
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = getScrollParent(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) {
            return;
        }
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (bottom === 0) {
            return;
        }
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
            e.preventDefault();
        }
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if (isInput(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = "translateY(-2000px)";
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = "";
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if (isInput(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = "translateY(-2000px)";
            requestAnimationFrame(()=>{
                target.style.transform = "";
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if (visualViewport) {
                    if (visualViewport.height < window.innerHeight) {
                        // If the keyboard is already visible, do this after one additional frame
                        // to wait for the transform to be removed.
                        requestAnimationFrame(()=>{
                            scrollIntoView(target);
                        });
                    } else {
                        // Otherwise, wait for the visual viewport to resize before scrolling so we can
                        // measure the correct position to scroll to.
                        visualViewport.addEventListener("resize", ()=>scrollIntoView(target), {
                            once: true
                        });
                    }
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = chain$1(setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = chain$1(addEvent(document, "touchstart", onTouchStart, {
        passive: false,
        capture: true
    }), addEvent(document, "touchmove", onTouchMove, {
        passive: false,
        capture: true
    }), addEvent(document, "touchend", onTouchEnd, {
        passive: false,
        capture: true
    }), addEvent(document, "focus", onFocus, true), addEvent(window, "scroll", onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function setStyle(element, style, value) {
    // https://github.com/microsoft/TypeScript/issues/17827#issuecomment-391663310
    // @ts-ignore
    let cur = element.style[style];
    // @ts-ignore
    element.style[style] = value;
    return ()=>{
        // @ts-ignore
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function addEvent(target, event, handler, options) {
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = getScrollParent(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            let targetBottom = target.getBoundingClientRect().bottom;
            // Buffer is needed for some edge cases
            const keyboardHeight = scrollable.getBoundingClientRect().bottom + KEYBOARD_BUFFER;
            if (targetBottom > keyboardHeight) {
                scrollable.scrollTop += targetTop - scrollableTop;
            }
        }
        // @ts-ignore
        target = scrollable.parentElement;
    }
}
function isInput(target) {
    return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
// This code comes from https://github.com/radix-ui/primitives/tree/main/packages/react/compose-refs
/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>refs.forEach((ref)=>setRef(ref, node));
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}
const cache = new WeakMap();
function set(el, styles, ignoreCache = false) {
    if (!el || !(el instanceof HTMLElement)) return;
    let originalStyles = {};
    Object.entries(styles).forEach(([key, value])=>{
        if (key.startsWith("--")) {
            el.style.setProperty(key, value);
            return;
        }
        originalStyles[key] = el.style[key];
        el.style[key] = value;
    });
    if (ignoreCache) return;
    cache.set(el, originalStyles);
}
function reset(el, prop) {
    if (!el || !(el instanceof HTMLElement)) return;
    let originalStyles = cache.get(el);
    if (!originalStyles) {
        return;
    }
    {
        el.style[prop] = originalStyles[prop];
    }
}
const isVertical = (direction)=>{
    switch(direction){
        case "top":
        case "bottom":
            return true;
        case "left":
        case "right":
            return false;
        default:
            return direction;
    }
};
function getTranslate(element, direction) {
    if (!element) {
        return null;
    }
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
        return parseFloat(mat[1].split(", ")[isVertical(direction) ? 13 : 12]);
    }
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(", ")[isVertical(direction) ? 5 : 4]) : null;
}
function dampenValue(v) {
    return 8 * (Math.log(v + 1) - 2);
}
function assignStyle(element, style) {
    if (!element) return ()=>{};
    const prevStyle = element.style.cssText;
    Object.assign(element.style, style);
    return ()=>{
        element.style.cssText = prevStyle;
    };
}
/**
 * Receives functions as arguments and returns a new function that calls all.
 */ function chain(...fns) {
    return (...args)=>{
        for (const fn of fns){
            if (typeof fn === "function") {
                // @ts-ignore
                fn(...args);
            }
        }
    };
}
const TRANSITIONS = {
    DURATION: 0.5,
    EASE: [
        0.32,
        0.72,
        0,
        1
    ]
};
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const NESTED_DISPLACEMENT = 16;
const WINDOW_TOP_OFFSET = 26;
const DRAG_CLASS = "vaul-dragging";
// This code comes from https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/useControllableState.tsx
function useCallbackRef(callback) {
    const callbackRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(callback);
    null;
    // https://github.com/facebook/react/issues/19240
    return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>(...args)=>callbackRef.current == null ? void 0 : callbackRef.current.call(callbackRef, ...args), []);
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(value);
    const handleChange = useCallbackRef(onChange);
    null;
    return uncontrolledState;
}
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef(onChange);
    const setValue = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === "function" ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useSnapPoints({ activeSnapPointProp, setActiveSnapPointProp, snapPoints, drawerRef, overlayRef, fadeFromIndex, onSnapPointChange, direction = "bottom", container, snapToSequentialPoint }) {
    const [activeSnapPoint, setActiveSnapPoint] = useControllableState({
        prop: activeSnapPointProp,
        defaultProp: snapPoints == null ? void 0 : snapPoints[0],
        onChange: setActiveSnapPointProp
    });
    const [windowDimensions, setWindowDimensions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState( false ? 0 : undefined);
    null;
    const isLastSnapPoint = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>activeSnapPoint === (snapPoints == null ? void 0 : snapPoints[snapPoints.length - 1]) || null, [
        snapPoints,
        activeSnapPoint
    ]);
    const activeSnapPointIndex = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>{
        var _snapPoints_findIndex;
        return (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex((snapPoint)=>snapPoint === activeSnapPoint)) != null ? _snapPoints_findIndex : null;
    }, [
        snapPoints,
        activeSnapPoint
    ]);
    const shouldFade = snapPoints && snapPoints.length > 0 && (fadeFromIndex || fadeFromIndex === 0) && !Number.isNaN(fadeFromIndex) && snapPoints[fadeFromIndex] === activeSnapPoint || !snapPoints;
    const snapPointsOffset = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>{
        const containerSize = container ? {
            width: container.getBoundingClientRect().width,
            height: container.getBoundingClientRect().height
        } :  false ? 0 : {
            width: 0,
            height: 0
        };
        var _snapPoints_map;
        return (_snapPoints_map = snapPoints == null ? void 0 : snapPoints.map((snapPoint)=>{
            const isPx = typeof snapPoint === "string";
            let snapPointAsNumber = 0;
            if (isPx) {
                snapPointAsNumber = parseInt(snapPoint, 10);
            }
            if (isVertical(direction)) {
                const height = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.height : 0;
                if (windowDimensions) {
                    return direction === "bottom" ? containerSize.height - height : -containerSize.height + height;
                }
                return height;
            }
            const width = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.width : 0;
            if (windowDimensions) {
                return direction === "right" ? containerSize.width - width : -containerSize.width + width;
            }
            return width;
        })) != null ? _snapPoints_map : [];
    }, [
        snapPoints,
        windowDimensions,
        container
    ]);
    const activeSnapPointOffset = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>activeSnapPointIndex !== null ? snapPointsOffset == null ? void 0 : snapPointsOffset[activeSnapPointIndex] : null, [
        snapPointsOffset,
        activeSnapPointIndex
    ]);
    const snapToPoint = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((dimension)=>{
        var _snapPointsOffset_findIndex;
        const newSnapPointIndex = (_snapPointsOffset_findIndex = snapPointsOffset == null ? void 0 : snapPointsOffset.findIndex((snapPointDim)=>snapPointDim === dimension)) != null ? _snapPointsOffset_findIndex : null;
        onSnapPointChange(newSnapPointIndex);
        set(drawerRef.current, {
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
            transform: isVertical(direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`
        });
        if (snapPointsOffset && newSnapPointIndex !== snapPointsOffset.length - 1 && fadeFromIndex !== undefined && newSnapPointIndex !== fadeFromIndex && newSnapPointIndex < fadeFromIndex) {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
                opacity: "0"
            });
        } else {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
                opacity: "1"
            });
        }
        setActiveSnapPoint(snapPoints == null ? void 0 : snapPoints[Math.max(newSnapPointIndex, 0)]);
    }, [
        drawerRef.current,
        snapPoints,
        snapPointsOffset,
        fadeFromIndex,
        overlayRef,
        setActiveSnapPoint
    ]);
    null;
    function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
        if (fadeFromIndex === undefined) return;
        const currentPosition = direction === "bottom" || direction === "right" ? (activeSnapPointOffset != null ? activeSnapPointOffset : 0) - draggedDistance : (activeSnapPointOffset != null ? activeSnapPointOffset : 0) + draggedDistance;
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isFirst = activeSnapPointIndex === 0;
        const hasDraggedUp = draggedDistance > 0;
        if (isOverlaySnapPoint) {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
            });
        }
        if (!snapToSequentialPoint && velocity > 2 && !hasDraggedUp) {
            if (dismissible) closeDrawer();
            else snapToPoint(snapPointsOffset[0]); // snap to initial point
            return;
        }
        if (!snapToSequentialPoint && velocity > 2 && hasDraggedUp && snapPointsOffset && snapPoints) {
            snapToPoint(snapPointsOffset[snapPoints.length - 1]);
            return;
        }
        // Find the closest snap point to the current position
        const closestSnapPoint = snapPointsOffset == null ? void 0 : snapPointsOffset.reduce((prev, curr)=>{
            if (typeof prev !== "number" || typeof curr !== "number") return prev;
            return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
        });
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
            const dragDirection = hasDraggedUp ? 1 : -1; // 1 = up, -1 = down
            // Don't do anything if we swipe upwards while being on the last snap point
            if (dragDirection > 0 && isLastSnapPoint && snapPoints) {
                snapToPoint(snapPointsOffset[snapPoints.length - 1]);
                return;
            }
            if (isFirst && dragDirection < 0 && dismissible) {
                closeDrawer();
            }
            if (activeSnapPointIndex === null) return;
            snapToPoint(snapPointsOffset[activeSnapPointIndex + dragDirection]);
            return;
        }
        snapToPoint(closestSnapPoint);
    }
    function onDrag({ draggedDistance }) {
        if (activeSnapPointOffset === null) return;
        const newValue = direction === "bottom" || direction === "right" ? activeSnapPointOffset - draggedDistance : activeSnapPointOffset + draggedDistance;
        // Don't do anything if we exceed the last(biggest) snap point
        if ((direction === "bottom" || direction === "right") && newValue < snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        if ((direction === "top" || direction === "left") && newValue > snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        set(drawerRef.current, {
            transform: isVertical(direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)`
        });
    }
    function getPercentageDragged(absDraggedDistance, isDraggingDown) {
        if (!snapPoints || typeof activeSnapPointIndex !== "number" || !snapPointsOffset || fadeFromIndex === undefined) return null;
        // If this is true we are dragging to a snap point that is supposed to have an overlay
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isOverlaySnapPointOrHigher = activeSnapPointIndex >= fadeFromIndex;
        if (isOverlaySnapPointOrHigher && isDraggingDown) {
            return 0;
        }
        // Don't animate, but still use this one if we are dragging away from the overlaySnapPoint
        if (isOverlaySnapPoint && !isDraggingDown) return 1;
        if (!shouldFade && !isOverlaySnapPoint) return null;
        // Either fadeFrom index or the one before
        const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex + 1 : activeSnapPointIndex - 1;
        // Get the distance from overlaySnapPoint to the one before or vice-versa to calculate the opacity percentage accordingly
        const snapPointDistance = isOverlaySnapPoint ? snapPointsOffset[targetSnapPointIndex] - snapPointsOffset[targetSnapPointIndex - 1] : snapPointsOffset[targetSnapPointIndex + 1] - snapPointsOffset[targetSnapPointIndex];
        const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);
        if (isOverlaySnapPoint) {
            return 1 - percentageDragged;
        } else {
            return percentageDragged;
        }
    }
    return {
        isLastSnapPoint,
        activeSnapPoint,
        shouldFade,
        getPercentageDragged,
        setActiveSnapPoint,
        activeSnapPointIndex,
        onRelease,
        onDrag,
        snapPointsOffset
    };
}
const noop = ()=>()=>{};
function useScaleBackground() {
    const { direction, isOpen, shouldScaleBackground, setBackgroundColorOnScale, noBodyStyles } = useDrawerContext();
    const timeoutIdRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const initialBackgroundColor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>document.body.style.backgroundColor, []);
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    null;
}
let previousBodyPosition = null;
/**
 * This hook is necessary to prevent buggy behavior on iOS devices (need to test on Android).
 * I won't get into too much detail about what bugs it solves, but so far I've found that setting the body to `position: fixed` is the most reliable way to prevent those bugs.
 * Issues that this hook solves:
 * https://github.com/emilkowalski/vaul/issues/435
 * https://github.com/emilkowalski/vaul/issues/433
 * And more that I discovered, but were just not reported.
 */ function usePositionFixed({ isOpen, modal, nested, hasBeenOpened, preventScrollRestoration, noBodyStyles }) {
    const [activeUrl, setActiveUrl] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(()=> false ? 0 : "");
    const scrollPos = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(0);
    const setPositionFixed = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(()=>{
        // All browsers on iOS will return true here.
        if (!isSafari()) return;
        // If previousBodyPosition is already set, don't set it again.
        if (previousBodyPosition === null && isOpen && !noBodyStyles) {
            previousBodyPosition = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
            };
            // Update the dom inside an animation frame
            const { scrollX, innerHeight } = window;
            document.body.style.setProperty("position", "fixed", "important");
            Object.assign(document.body.style, {
                top: `${-scrollPos.current}px`,
                left: `${-scrollX}px`,
                right: "0px",
                height: "auto"
            });
            window.setTimeout(()=>window.requestAnimationFrame(()=>{
                    // Attempt to check if the bottom bar appeared due to the position change
                    const bottomBarHeight = innerHeight - window.innerHeight;
                    if (bottomBarHeight && scrollPos.current >= innerHeight) {
                        // Move the content further up so that the bottom bar doesn't hide it
                        document.body.style.top = `${-(scrollPos.current + bottomBarHeight)}px`;
                    }
                }), 300);
        }
    }, [
        isOpen
    ]);
    const restorePositionSetting = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(()=>{
        // All browsers on iOS will return true here.
        if (!isSafari()) return;
        if (previousBodyPosition !== null && !noBodyStyles) {
            // Convert the position from "px" to Int
            const y = -parseInt(document.body.style.top, 10);
            const x = -parseInt(document.body.style.left, 10);
            // Restore styles
            Object.assign(document.body.style, previousBodyPosition);
            window.requestAnimationFrame(()=>{
                if (preventScrollRestoration && activeUrl !== window.location.href) {
                    setActiveUrl(window.location.href);
                    return;
                }
                window.scrollTo(x, y);
            });
            previousBodyPosition = null;
        }
    }, [
        activeUrl
    ]);
    null;
    null;
    null;
    return {
        restorePositionSetting
    };
}
function Root({ open: openProp, onOpenChange, children, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, shouldScaleBackground = false, setBackgroundColorOnScale = true, closeThreshold = CLOSE_THRESHOLD, scrollLockTimeout = SCROLL_LOCK_TIMEOUT, dismissible = true, handleOnly = false, fadeFromIndex = snapPoints && snapPoints.length - 1, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal = true, onClose, nested, noBodyStyles = false, direction = "bottom", defaultOpen = false, disablePreventScroll = true, snapToSequentialPoint = false, preventScrollRestoration = false, repositionInputs = true, onAnimationEnd, container, autoFocus = false }) {
    var _drawerRef_current, _drawerRef_current1;
    const [isOpen = false, setIsOpen] = useControllableState({
        defaultProp: defaultOpen,
        prop: openProp,
        onChange: (o)=>{
            onOpenChange == null ? void 0 : onOpenChange(o);
            if (!o && !nested) {
                restorePositionSetting();
            }
            setTimeout(()=>{
                onAnimationEnd == null ? void 0 : onAnimationEnd(o);
            }, TRANSITIONS.DURATION * 1000);
            if (o && !modal) {
                if (false) {}
            }
            if (!o) {
                // This will be removed when the exit animation ends (`500ms`)
                document.body.style.pointerEvents = "auto";
            }
        }
    });
    const [hasBeenOpened, setHasBeenOpened] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const [isDragging, setIsDragging] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const [justReleased, setJustReleased] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const overlayRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const openTime = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const dragStartTime = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const dragEndTime = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const lastTimeDragPrevented = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const isAllowedToDrag = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
    const nestedOpenChangeTimer = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const pointerStart = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(0);
    const keyboardIsOpen = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
    const shouldAnimate = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(!defaultOpen);
    const previousDiffFromInitial = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(0);
    const drawerRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const drawerHeightRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0);
    const drawerWidthRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0);
    const initialDrawerHeight = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(0);
    const onSnapPointChange = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((activeSnapPointIndex)=>{
        // Change openTime ref when we reach the last snap point to prevent dragging for 500ms incase it's scrollable.
        if (snapPoints && activeSnapPointIndex === snapPointsOffset.length - 1) openTime.current = new Date();
    }, []);
    const { activeSnapPoint, activeSnapPointIndex, setActiveSnapPoint, onRelease: onReleaseSnapPoints, snapPointsOffset, onDrag: onDragSnapPoints, shouldFade, getPercentageDragged: getSnapPointsPercentageDragged } = useSnapPoints({
        snapPoints,
        activeSnapPointProp,
        setActiveSnapPointProp,
        drawerRef,
        fadeFromIndex,
        overlayRef,
        onSnapPointChange,
        direction,
        container,
        snapToSequentialPoint
    });
    usePreventScroll({
        isDisabled: !isOpen || isDragging || !modal || justReleased || !hasBeenOpened || !repositionInputs || !disablePreventScroll
    });
    const { restorePositionSetting } = usePositionFixed({
        isOpen,
        modal,
        nested: nested != null ? nested : false,
        hasBeenOpened,
        preventScrollRestoration,
        noBodyStyles
    });
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    function onPress(event) {
        var _drawerRef_current, _drawerRef_current1;
        if (!dismissible && !snapPoints) return;
        if (drawerRef.current && !drawerRef.current.contains(event.target)) return;
        drawerHeightRef.current = ((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0;
        drawerWidthRef.current = ((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0;
        setIsDragging(true);
        dragStartTime.current = new Date();
        // iOS doesn't trigger mouseUp after scrolling so we need to listen to touched in order to disallow dragging
        if (isIOS()) {
            window.addEventListener("touchend", ()=>isAllowedToDrag.current = false, {
                once: true
            });
        }
        // Ensure we maintain correct pointer capture even when going outside of the drawer
        event.target.setPointerCapture(event.pointerId);
        pointerStart.current = isVertical(direction) ? event.pageY : event.pageX;
    }
    function shouldDrag(el, isDraggingInDirection) {
        var _window_getSelection;
        let element = el;
        const highlightedText = (_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString();
        const swipeAmount = drawerRef.current ? getTranslate(drawerRef.current, direction) : null;
        const date = new Date();
        // Fixes https://github.com/emilkowalski/vaul/issues/483
        if (element.tagName === "SELECT") {
            return false;
        }
        if (element.hasAttribute("data-vaul-no-drag") || element.closest("[data-vaul-no-drag]")) {
            return false;
        }
        if (direction === "right" || direction === "left") {
            return true;
        }
        // Allow scrolling when animating
        if (openTime.current && date.getTime() - openTime.current.getTime() < 500) {
            return false;
        }
        if (swipeAmount !== null) {
            if (direction === "bottom" ? swipeAmount > 0 : swipeAmount < 0) {
                return true;
            }
        }
        // Don't drag if there's highlighted text
        if (highlightedText && highlightedText.length > 0) {
            return false;
        }
        // Disallow dragging if drawer was scrolled within `scrollLockTimeout`
        if (lastTimeDragPrevented.current && date.getTime() - lastTimeDragPrevented.current.getTime() < scrollLockTimeout && swipeAmount === 0) {
            lastTimeDragPrevented.current = date;
            return false;
        }
        if (isDraggingInDirection) {
            lastTimeDragPrevented.current = date;
            // We are dragging down so we should allow scrolling
            return false;
        }
        // Keep climbing up the DOM tree as long as there's a parent
        while(element){
            // Check if the element is scrollable
            if (element.scrollHeight > element.clientHeight) {
                if (element.scrollTop !== 0) {
                    lastTimeDragPrevented.current = new Date();
                    // The element is scrollable and not scrolled to the top, so don't drag
                    return false;
                }
                if (element.getAttribute("role") === "dialog") {
                    return true;
                }
            }
            // Move up to the parent element
            element = element.parentNode;
        }
        // No scrollable parents not scrolled to the top found, so drag
        return true;
    }
    function onDrag(event) {
        if (!drawerRef.current) {
            return;
        }
        // We need to know how much of the drawer has been dragged in percentages so that we can transform background accordingly
        if (isDragging) {
            const directionMultiplier = direction === "bottom" || direction === "right" ? 1 : -1;
            const draggedDistance = (pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX)) * directionMultiplier;
            const isDraggingInDirection = draggedDistance > 0;
            // Pre condition for disallowing dragging in the close direction.
            const noCloseSnapPointsPreCondition = snapPoints && !dismissible && !isDraggingInDirection;
            // Disallow dragging down to close when first snap point is the active one and dismissible prop is set to false.
            if (noCloseSnapPointsPreCondition && activeSnapPointIndex === 0) return;
            // We need to capture last time when drag with scroll was triggered and have a timeout between
            const absDraggedDistance = Math.abs(draggedDistance);
            const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
            const drawerDimension = direction === "bottom" || direction === "top" ? drawerHeightRef.current : drawerWidthRef.current;
            // Calculate the percentage dragged, where 1 is the closed position
            let percentageDragged = absDraggedDistance / drawerDimension;
            const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);
            if (snapPointPercentageDragged !== null) {
                percentageDragged = snapPointPercentageDragged;
            }
            // Disallow close dragging beyond the smallest snap point.
            if (noCloseSnapPointsPreCondition && percentageDragged >= 1) {
                return;
            }
            if (!isAllowedToDrag.current && !shouldDrag(event.target, isDraggingInDirection)) return;
            drawerRef.current.classList.add(DRAG_CLASS);
            // If shouldDrag gave true once after pressing down on the drawer, we set isAllowedToDrag to true and it will remain true until we let go, there's no reason to disable dragging mid way, ever, and that's the solution to it
            isAllowedToDrag.current = true;
            set(drawerRef.current, {
                transition: "none"
            });
            set(overlayRef.current, {
                transition: "none"
            });
            if (snapPoints) {
                onDragSnapPoints({
                    draggedDistance
                });
            }
            // Run this only if snapPoints are not defined or if we are at the last snap point (highest one)
            if (isDraggingInDirection && !snapPoints) {
                const dampenedDraggedDistance = dampenValue(draggedDistance);
                const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
                return;
            }
            const opacityValue = 1 - percentageDragged;
            if (shouldFade || fadeFromIndex && activeSnapPointIndex === fadeFromIndex - 1) {
                onDragProp == null ? void 0 : onDragProp(event, percentageDragged);
                set(overlayRef.current, {
                    opacity: `${opacityValue}`,
                    transition: "none"
                }, true);
            }
            if (wrapper && overlayRef.current && shouldScaleBackground) {
                // Calculate percentageDragged as a fraction (0 to 1)
                const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
                const borderRadiusValue = 8 - percentageDragged * 8;
                const translateValue = Math.max(0, 14 - percentageDragged * 14);
                set(wrapper, {
                    borderRadius: `${borderRadiusValue}px`,
                    transform: isVertical(direction) ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)` : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
                    transition: "none"
                }, true);
            }
            if (!snapPoints) {
                const translateValue = absDraggedDistance * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }
        }
    }
    null;
    null;
    function closeDrawer(fromWithin) {
        cancelDrag();
        onClose == null ? void 0 : onClose();
        if (!fromWithin) {
            setIsOpen(false);
        }
        setTimeout(()=>{
            if (snapPoints) {
                setActiveSnapPoint(snapPoints[0]);
            }
        }, TRANSITIONS.DURATION * 1000); // seconds to ms
    }
    function resetDrawer() {
        if (!drawerRef.current) return;
        const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
        const currentSwipeAmount = getTranslate(drawerRef.current, direction);
        set(drawerRef.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
        });
        set(overlayRef.current, {
            transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
            opacity: "1"
        });
        // Don't reset background if swiped upwards
        if (shouldScaleBackground && currentSwipeAmount && currentSwipeAmount > 0 && isOpen) {
            set(wrapper, {
                borderRadius: `${BORDER_RADIUS}px`,
                overflow: "hidden",
                ...isVertical(direction) ? {
                    transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                    transformOrigin: "top"
                } : {
                    transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                    transformOrigin: "left"
                },
                transitionProperty: "transform, border-radius",
                transitionDuration: `${TRANSITIONS.DURATION}s`,
                transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
            }, true);
        }
    }
    function cancelDrag() {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
    }
    function onRelease(event) {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
        const swipeAmount = getTranslate(drawerRef.current, direction);
        if (!event || !shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount)) return;
        if (dragStartTime.current === null) return;
        const timeTaken = dragEndTime.current.getTime() - dragStartTime.current.getTime();
        const distMoved = pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX);
        const velocity = Math.abs(distMoved) / timeTaken;
        if (velocity > 0.05) {
            // `justReleased` is needed to prevent the drawer from focusing on an input when the drag ends, as it's not the intent most of the time.
            setJustReleased(true);
            setTimeout(()=>{
                setJustReleased(false);
            }, 200);
        }
        if (snapPoints) {
            const directionMultiplier = direction === "bottom" || direction === "right" ? 1 : -1;
            onReleaseSnapPoints({
                draggedDistance: distMoved * directionMultiplier,
                closeDrawer,
                velocity,
                dismissible
            });
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        // Moved upwards, don't do anything
        if (direction === "bottom" || direction === "right" ? distMoved > 0 : distMoved < 0) {
            resetDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        if (velocity > VELOCITY_THRESHOLD) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        var _drawerRef_current_getBoundingClientRect_height;
        const visibleDrawerHeight = Math.min((_drawerRef_current_getBoundingClientRect_height = drawerRef.current.getBoundingClientRect().height) != null ? _drawerRef_current_getBoundingClientRect_height : 0, window.innerHeight);
        var _drawerRef_current_getBoundingClientRect_width;
        const visibleDrawerWidth = Math.min((_drawerRef_current_getBoundingClientRect_width = drawerRef.current.getBoundingClientRect().width) != null ? _drawerRef_current_getBoundingClientRect_width : 0, window.innerWidth);
        const isHorizontalSwipe = direction === "left" || direction === "right";
        if (Math.abs(swipeAmount) >= (isHorizontalSwipe ? visibleDrawerWidth : visibleDrawerHeight) * closeThreshold) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        onReleaseProp == null ? void 0 : onReleaseProp(event, true);
        resetDrawer();
    }
    null;
    function onNestedOpenChange(o) {
        const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
        const initialTranslate = o ? -NESTED_DISPLACEMENT : 0;
        if (nestedOpenChangeTimer.current) {
            window.clearTimeout(nestedOpenChangeTimer.current);
        }
        set(drawerRef.current, {
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
            transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${initialTranslate}px, 0)` : `scale(${scale}) translate3d(${initialTranslate}, 0, 0)`
        });
        if (!o && drawerRef.current) {
            nestedOpenChangeTimer.current = setTimeout(()=>{
                const translateValue = getTranslate(drawerRef.current, direction);
                set(drawerRef.current, {
                    transition: "none",
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }, 500);
        }
    }
    function onNestedDrag(_event, percentageDragged) {
        if (percentageDragged < 0) return;
        const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
        const newScale = initialScale + percentageDragged * (1 - initialScale);
        const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;
        set(drawerRef.current, {
            transform: isVertical(direction) ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)` : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
            transition: "none"
        });
    }
    function onNestedRelease(_event, o) {
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
        const translate = o ? -NESTED_DISPLACEMENT : 0;
        if (o) {
            set(drawerRef.current, {
                transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
                transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${translate}px, 0)` : `scale(${scale}) translate3d(${translate}px, 0, 0)`
            });
        }
    }
    null;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Root */ .fC, {
        defaultOpen: defaultOpen,
        onOpenChange: (open)=>{
            if (!dismissible && !open) return;
            if (open) {
                setHasBeenOpened(true);
            } else {
                closeDrawer(true);
            }
            setIsOpen(open);
        },
        open: isOpen
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DrawerContext.Provider, {
        value: {
            activeSnapPoint,
            snapPoints,
            setActiveSnapPoint,
            drawerRef,
            overlayRef,
            onOpenChange,
            onPress,
            onRelease,
            onDrag,
            dismissible,
            shouldAnimate,
            handleOnly,
            isOpen,
            isDragging,
            shouldFade,
            closeDrawer,
            onNestedDrag,
            onNestedOpenChange,
            onNestedRelease,
            keyboardIsOpen,
            modal,
            snapPointsOffset,
            activeSnapPointIndex,
            direction,
            shouldScaleBackground,
            setBackgroundColorOnScale,
            noBodyStyles,
            container,
            autoFocus
        }
    }, children));
}
const Overlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function({ ...rest }, ref) {
    const { overlayRef, snapPoints, onRelease, shouldFade, isOpen, modal, shouldAnimate } = useDrawerContext();
    const composedRef = useComposedRefs(ref, overlayRef);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    // Overlay is the component that is locking scroll, removing it will unlock the scroll without having to dig into Radix's Dialog library
    if (!modal) {
        return null;
    }
    const onMouseUp = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((event)=>onRelease(event), [
        onRelease
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Overlay */ .aV, {
        onMouseUp: onMouseUp,
        ref: composedRef,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": isOpen && hasSnapPoints ? "true" : "false",
        "data-vaul-snap-points-overlay": isOpen && shouldFade ? "true" : "false",
        "data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? "true" : "false",
        ...rest
    });
});
Overlay.displayName = "Drawer.Overlay";
const Content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function({ onPointerDownOutside, style, onOpenAutoFocus, ...rest }, ref) {
    const { drawerRef, onPress, onRelease, onDrag, keyboardIsOpen, snapPointsOffset, activeSnapPointIndex, modal, isOpen, direction, snapPoints, container, handleOnly, shouldAnimate, autoFocus } = useDrawerContext();
    // Needed to use transition instead of animations
    const [delayedSnapPoints, setDelayedSnapPoints] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const composedRef = useComposedRefs(ref, drawerRef);
    const pointerStartRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const lastKnownPointerEventRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const wasBeyondThePointRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    useScaleBackground();
    const isDeltaInDirection = (delta, direction, threshold = 0)=>{
        if (wasBeyondThePointRef.current) return true;
        const deltaY = Math.abs(delta.y);
        const deltaX = Math.abs(delta.x);
        const isDeltaX = deltaX > deltaY;
        const dFactor = [
            "bottom",
            "right"
        ].includes(direction) ? 1 : -1;
        if (direction === "left" || direction === "right") {
            const isReverseDirection = delta.x * dFactor < 0;
            if (!isReverseDirection && deltaX >= 0 && deltaX <= threshold) {
                return isDeltaX;
            }
        } else {
            const isReverseDirection = delta.y * dFactor < 0;
            if (!isReverseDirection && deltaY >= 0 && deltaY <= threshold) {
                return !isDeltaX;
            }
        }
        wasBeyondThePointRef.current = true;
        return true;
    };
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        if (hasSnapPoints) {
            window.requestAnimationFrame(()=>{
                setDelayedSnapPoints(true);
            });
        }
    }, []);
    function handleOnPointerUp(event) {
        pointerStartRef.current = null;
        wasBeyondThePointRef.current = false;
        onRelease(event);
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .VY, {
        "data-vaul-drawer-direction": direction,
        "data-vaul-drawer": "",
        "data-vaul-delayed-snap-points": delayedSnapPoints ? "true" : "false",
        "data-vaul-snap-points": isOpen && hasSnapPoints ? "true" : "false",
        "data-vaul-custom-container": container ? "true" : "false",
        "data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? "true" : "false",
        ...rest,
        ref: composedRef,
        style: snapPointsOffset && snapPointsOffset.length > 0 ? {
            "--snap-point-height": `${snapPointsOffset[activeSnapPointIndex != null ? activeSnapPointIndex : 0]}px`,
            ...style
        } : style,
        onPointerDown: (event)=>{
            if (handleOnly) return;
            rest.onPointerDown == null ? void 0 : rest.onPointerDown.call(rest, event);
            pointerStartRef.current = {
                x: event.pageX,
                y: event.pageY
            };
            onPress(event);
        },
        onOpenAutoFocus: (e)=>{
            onOpenAutoFocus == null ? void 0 : onOpenAutoFocus(e);
            if (!autoFocus) {
                e.preventDefault();
            }
        },
        onPointerDownOutside: (e)=>{
            onPointerDownOutside == null ? void 0 : onPointerDownOutside(e);
            if (!modal || e.defaultPrevented) {
                e.preventDefault();
                return;
            }
            if (keyboardIsOpen.current) {
                keyboardIsOpen.current = false;
            }
        },
        onFocusOutside: (e)=>{
            if (!modal) {
                e.preventDefault();
                return;
            }
        },
        onPointerMove: (event)=>{
            lastKnownPointerEventRef.current = event;
            if (handleOnly) return;
            rest.onPointerMove == null ? void 0 : rest.onPointerMove.call(rest, event);
            if (!pointerStartRef.current) return;
            const yPosition = event.pageY - pointerStartRef.current.y;
            const xPosition = event.pageX - pointerStartRef.current.x;
            const swipeStartThreshold = event.pointerType === "touch" ? 10 : 2;
            const delta = {
                x: xPosition,
                y: yPosition
            };
            const isAllowedToSwipe = isDeltaInDirection(delta, direction, swipeStartThreshold);
            if (isAllowedToSwipe) onDrag(event);
            else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) {
                pointerStartRef.current = null;
            }
        },
        onPointerUp: (event)=>{
            rest.onPointerUp == null ? void 0 : rest.onPointerUp.call(rest, event);
            pointerStartRef.current = null;
            wasBeyondThePointRef.current = false;
            onRelease(event);
        },
        onPointerOut: (event)=>{
            rest.onPointerOut == null ? void 0 : rest.onPointerOut.call(rest, event);
            handleOnPointerUp(lastKnownPointerEventRef.current);
        },
        onContextMenu: (event)=>{
            rest.onContextMenu == null ? void 0 : rest.onContextMenu.call(rest, event);
            if (lastKnownPointerEventRef.current) {
                handleOnPointerUp(lastKnownPointerEventRef.current);
            }
        }
    });
});
Content.displayName = "Drawer.Content";
const LONG_HANDLE_PRESS_TIMEOUT = 250;
const DOUBLE_TAP_TIMEOUT = 120;
const Handle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function({ preventCycle = false, children, ...rest }, ref) {
    const { closeDrawer, isDragging, snapPoints, activeSnapPoint, setActiveSnapPoint, dismissible, handleOnly, isOpen, onPress, onDrag } = useDrawerContext();
    const closeTimeoutIdRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const shouldCancelInteractionRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
    function handleStartCycle() {
        // Stop if this is the second click of a double click
        if (shouldCancelInteractionRef.current) {
            handleCancelInteraction();
            return;
        }
        window.setTimeout(()=>{
            handleCycleSnapPoints();
        }, DOUBLE_TAP_TIMEOUT);
    }
    function handleCycleSnapPoints() {
        // Prevent accidental taps while resizing drawer
        if (isDragging || preventCycle || shouldCancelInteractionRef.current) {
            handleCancelInteraction();
            return;
        }
        // Make sure to clear the timeout id if the user releases the handle before the cancel timeout
        handleCancelInteraction();
        if (!snapPoints || snapPoints.length === 0) {
            if (!dismissible) {
                closeDrawer();
            }
            return;
        }
        const isLastSnapPoint = activeSnapPoint === snapPoints[snapPoints.length - 1];
        if (isLastSnapPoint && dismissible) {
            closeDrawer();
            return;
        }
        const currentSnapIndex = snapPoints.findIndex((point)=>point === activeSnapPoint);
        if (currentSnapIndex === -1) return; // activeSnapPoint not found in snapPoints
        const nextSnapPoint = snapPoints[currentSnapIndex + 1];
        setActiveSnapPoint(nextSnapPoint);
    }
    function handleStartInteraction() {
        closeTimeoutIdRef.current = window.setTimeout(()=>{
            // Cancel click interaction on a long press
            shouldCancelInteractionRef.current = true;
        }, LONG_HANDLE_PRESS_TIMEOUT);
    }
    function handleCancelInteraction() {
        if (closeTimeoutIdRef.current) {
            window.clearTimeout(closeTimeoutIdRef.current);
        }
        shouldCancelInteractionRef.current = false;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        onClick: handleStartCycle,
        onPointerCancel: handleCancelInteraction,
        onPointerDown: (e)=>{
            if (handleOnly) onPress(e);
            handleStartInteraction();
        },
        onPointerMove: (e)=>{
            if (handleOnly) onDrag(e);
        },
        // onPointerUp is already handled by the content component
        ref: ref,
        "data-vaul-drawer-visible": isOpen ? "true" : "false",
        "data-vaul-handle": "",
        "aria-hidden": "true",
        ...rest
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-vaul-handle-hitarea": "",
        "aria-hidden": "true"
    }, children));
});
Handle.displayName = "Drawer.Handle";
function NestedRoot({ onDrag, onOpenChange, ...rest }) {
    const { onNestedDrag, onNestedOpenChange, onNestedRelease } = useDrawerContext();
    if (!onNestedDrag) {
        throw new Error("Drawer.NestedRoot must be placed in another drawer");
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root, {
        nested: true,
        onClose: ()=>{
            onNestedOpenChange(false);
        },
        onDrag: (e, p)=>{
            onNestedDrag(e, p);
            onDrag == null ? void 0 : onDrag(e, p);
        },
        onOpenChange: (o)=>{
            if (o) {
                onNestedOpenChange(o);
            }
        },
        onRelease: onNestedRelease,
        ...rest
    });
}
function Portal(props) {
    const context = useDrawerContext();
    const { container = context.container, ...portalProps } = props;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Portal */ .h_, {
        container: container,
        ...portalProps
    });
}
const Drawer = {
    Root,
    NestedRoot,
    Content,
    Overlay,
    Trigger: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Trigger */ .xz,
    Portal,
    Handle,
    Close: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Close */ .x8,
    Title: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .Dx,
    Description: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__/* .Description */ .dk
};



/***/ })

};
;