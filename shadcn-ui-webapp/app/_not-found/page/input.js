(() => {
var exports = {};
exports.id = 87409;
exports.ids = [87409];
exports.modules = {

/***/ 47849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 72934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 55403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 54580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 94749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 45869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 20399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 7149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_parallel_route_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84174);
/* harmony import */ var next_dist_client_components_parallel_route_default_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_parallel_route_default_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26424);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_kdy1_projects_shadcn_ui_apps_www_app_layout_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1840);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89174);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13153);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85894);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42311);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



'TURBOPACK { transition: next-ssr }';


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
          children: ["/_not-found", {
            children: ['__PAGE__', {}, {
              page: [
                () => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 26424, 23)),
                "next/dist/client/components/not-found-error"
              ]
            }]
          }, {}]
        },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1840)), "/Users/kdy1/projects/shadcn-ui/apps/www/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 26424, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = [];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/_not-found/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/_not-found/page",
        pathname: "/_not-found",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2724:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53262));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97203));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79578));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35306));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93504));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56263));


/***/ }),

/***/ 81785:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 45640, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99781, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4396, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23456, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62769, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98201, 23));


/***/ }),

/***/ 53262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57556);
/* __next_internal_client_entry_do_not_use__ Analytics auto */ 

function Analytics() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__/* .Analytics */ .c, {});
}


/***/ }),

/***/ 97203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87285);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80896);
/* harmony import */ var _registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46266);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 




function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(jotai__WEBPACK_IMPORTED_MODULE_4__/* .Provider */ .zt, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
            ...props,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipProvider, {
                delayDuration: 0,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 79578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitcher: () => (/* binding */ ThemeSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94667);
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91576);
/* __next_internal_client_entry_do_not_use__ ThemeSwitcher auto */ 


function ThemeSwitcher() {
    const [config] = (0,_hooks_use_config__WEBPACK_IMPORTED_MODULE_2__/* .useConfig */ .Z)();
    const segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSelectedLayoutSegment)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        document.body.classList.forEach((className)=>{
            if (className.match(/^theme.*/)) {
                document.body.classList.remove(className);
            }
        });
        const theme = segment === "themes" ? config.theme : null;
        if (theme) {
            return document.body.classList.add(`theme-${theme}`);
        }
    }, [
        segment,
        config
    ]);
    return null;
}


/***/ }),

/***/ 91576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useConfig)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87285);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61978);


const configAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__/* .atomWithStorage */ .O4)("config", {
    style: "new-york",
    theme: "zinc",
    radius: 0.5,
    packageManager: "pnpm"
});
function useConfig() {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_1__/* .useAtom */ .KO)(configAtom);
}


/***/ }),

/***/ 26910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony exports formatDate, absoluteUrl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17110);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35467);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}


/***/ }),

/***/ 94067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   toast: () => (/* binding */ toast),
/* harmony export */   useToast: () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ reducer,useToast,toast auto */ // Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 45293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   ToastAction: () => (/* binding */ ToastAction),
/* harmony export */   ToastClose: () => (/* binding */ ToastClose),
/* harmony export */   ToastDescription: () => (/* binding */ ToastDescription),
/* harmony export */   ToastProvider: () => (/* binding */ ToastProvider),
/* harmony export */   ToastTitle: () => (/* binding */ ToastTitle),
/* harmony export */   ToastViewport: () => (/* binding */ ToastViewport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16518);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37207);
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24293);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastClose,ToastAction auto */ 





const ToastProvider = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .zt;
const ToastViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_.displayName;
const toastVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__/* .cva */ .j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const ToastAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU.displayName;
const ToastClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8.displayName;
const ToastTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx.displayName;
const ToastDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk.displayName;



/***/ }),

/***/ 35306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_default_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94067);
/* harmony import */ var _registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45293);
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = (0,_registry_default_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_default_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 60395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   toast: () => (/* binding */ toast),
/* harmony export */   useToast: () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ reducer,useToast,toast auto */ // Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 93504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80896);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96264);
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .F)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sonner__WEBPACK_IMPORTED_MODULE_2__/* .Toaster */ .x, {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    });
};



/***/ }),

/***/ 88983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   ToastAction: () => (/* binding */ ToastAction),
/* harmony export */   ToastClose: () => (/* binding */ ToastClose),
/* harmony export */   ToastDescription: () => (/* binding */ ToastDescription),
/* harmony export */   ToastProvider: () => (/* binding */ ToastProvider),
/* harmony export */   ToastTitle: () => (/* binding */ ToastTitle),
/* harmony export */   ToastViewport: () => (/* binding */ ToastViewport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16518);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37207);
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24293);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastClose,ToastAction auto */ 





const ToastProvider = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .zt;
const ToastViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_.displayName;
const toastVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__/* .cva */ .j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const ToastAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU.displayName;
const ToastClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8.displayName;
const ToastTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-semibold [&+div]:text-xs", className),
        ...props
    }));
ToastTitle.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx.displayName;
const ToastDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk.displayName;



/***/ }),

/***/ 56263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60395);
/* harmony import */ var _registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88983);
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = (0,_registry_new_york_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 46266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipContent: () => (/* binding */ TooltipContent),
/* harmony export */   TooltipProvider: () => (/* binding */ TooltipProvider),
/* harmony export */   TooltipTrigger: () => (/* binding */ TooltipTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3537);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ Tooltip,TooltipTrigger,TooltipContent,TooltipProvider auto */ 



const TooltipProvider = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .zt;
const Tooltip = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const TooltipTrigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const TooltipContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
TooltipContent.displayName = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



/***/ }),

/***/ 1840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata),
  viewport: () => (/* binding */ viewport)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(32379);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(93985);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(64590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/font/local/target.css?{"path":"../../node_modules/.pnpm/geist@1.2.2_next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2._fbbcqkx3yndi65aqb2dq7qqzjq/node_modules/geist/dist/mono.js","import":"","arguments":[{"src":"./fonts/geist-mono/GeistMono-Variable.woff2","variable":"--font-geist-mono","adjustFontFallback":false,"fallback":["ui-monospace","SFMono-Regular","Roboto Mono","Menlo","Monaco","Liberation Mono","DejaVu Sans Mono","Courier New","monospace"],"weight":"100 900"}],"variableName":"GeistMono"}
var GeistMono_Variable_woff2_variable_font_geist_mono_adjustFontFallback_false_fallback_ui_monospace_SFMono_Regular_Roboto_Mono_Menlo_Monaco_Liberation_Mono_DejaVu_Sans_Mono_Courier_New_monospace_weight_100_900_variableName_GeistMono_ = __webpack_require__(21960);
var GeistMono_Variable_woff2_variable_font_geist_mono_adjustFontFallback_false_fallback_ui_monospace_SFMono_Regular_Roboto_Mono_Menlo_Monaco_Liberation_Mono_DejaVu_Sans_Mono_Courier_New_monospace_weight_100_900_variableName_GeistMono_default = /*#__PURE__*/__webpack_require__.n(GeistMono_Variable_woff2_variable_font_geist_mono_adjustFontFallback_false_fallback_ui_monospace_SFMono_Regular_Roboto_Mono_Menlo_Monaco_Liberation_Mono_DejaVu_Sans_Mono_Courier_New_monospace_weight_100_900_variableName_GeistMono_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/font/local/target.css?{"path":"../../node_modules/.pnpm/geist@1.2.2_next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2._fbbcqkx3yndi65aqb2dq7qqzjq/node_modules/geist/dist/sans.js","import":"","arguments":[{"src":"./fonts/geist-sans/Geist-Variable.woff2","variable":"--font-geist-sans","weight":"100 900"}],"variableName":"GeistSans"}
var Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_ = __webpack_require__(2778);
var Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_default = /*#__PURE__*/__webpack_require__.n(Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_);
;// CONCATENATED MODULE: ./lib/fonts.ts


const fontSans = (Geist_Variable_woff2_variable_font_geist_sans_weight_100_900_variableName_GeistSans_default());
const fontMono = (GeistMono_Variable_woff2_variable_font_geist_mono_adjustFontFallback_false_fallback_ui_monospace_SFMono_Regular_Roboto_Mono_Menlo_Monaco_Liberation_Mono_DejaVu_Sans_Mono_Courier_New_monospace_weight_100_900_variableName_GeistMono_default());

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(91740);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(62053);
;// CONCATENATED MODULE: ./components/analytics.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/analytics.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/analytics.tsx#Analytics`);

;// CONCATENATED MODULE: ./components/providers.tsx

const providers_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: providers_esModule, $$typeof: providers_$$typeof } = providers_proxy;
const providers_default_ = providers_proxy.default;

const providers_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/providers.tsx#ThemeProvider`);

;// CONCATENATED MODULE: ./components/tailwind-indicator.tsx

function TailwindIndicator() {
    if (true) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        "data-tailwind-indicator": "",
        className: "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "block sm:hidden",
                children: "xs"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "hidden sm:block md:hidden",
                children: "sm"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "hidden md:block lg:hidden",
                children: "md"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "hidden lg:block xl:hidden",
                children: "lg"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "hidden xl:block 2xl:hidden",
                children: "xl"
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "hidden 2xl:block",
                children: "2xl"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/theme-switcher.tsx

const theme_switcher_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/theme-switcher.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_switcher_esModule, $$typeof: theme_switcher_$$typeof } = theme_switcher_proxy;
const theme_switcher_default_ = theme_switcher_proxy.default;

const theme_switcher_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/components/theme-switcher.tsx#ThemeSwitcher`);

;// CONCATENATED MODULE: ./registry/default/ui/toaster.tsx

const toaster_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/toaster.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: toaster_esModule, $$typeof: toaster_$$typeof } = toaster_proxy;
const toaster_default_ = toaster_proxy.default;

const toaster_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/default/ui/toaster.tsx#Toaster`);

// EXTERNAL MODULE: ./registry/new-york/ui/sonner.tsx
var sonner = __webpack_require__(96448);
;// CONCATENATED MODULE: ./registry/new-york/ui/toaster.tsx

const ui_toaster_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toaster.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ui_toaster_esModule, $$typeof: ui_toaster_$$typeof } = ui_toaster_proxy;
const ui_toaster_default_ = ui_toaster_proxy.default;

const ui_toaster_e0 = (0,module_proxy.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/toaster.tsx#Toaster`);

;// CONCATENATED MODULE: ./app/layout.tsx












const metadata = {
    title: {
        default: site/* siteConfig */.J.name,
        template: ` - ${site/* siteConfig */.J.name}`
    },
    metadataBase: new URL(site/* siteConfig */.J.url),
    description: site/* siteConfig */.J.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI"
    ],
    authors: [
        {
            name: "shadcn",
            url: "https://shadcn.com"
        }
    ],
    creator: "shadcn",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: site/* siteConfig */.J.url,
        title: site/* siteConfig */.J.name,
        description: site/* siteConfig */.J.description,
        siteName: site/* siteConfig */.J.name,
        images: [
            {
                url: site/* siteConfig */.J.ogImage,
                width: 1200,
                height: 630,
                alt: site/* siteConfig */.J.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: site/* siteConfig */.J.name,
        description: site/* siteConfig */.J.description,
        images: [
            site/* siteConfig */.J.ogImage
        ],
        creator: "@shadcn"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    manifest: `${site/* siteConfig */.J.url}/site.webmanifest`
};
const viewport = {
    themeColor: site/* META_THEME_COLORS */.$.light
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime.jsx(react_jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("html", {
            lang: "en",
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx("head", {
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${site/* META_THEME_COLORS */.$.dark}')
                }
              } catch (_) {}
            `
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx("body", {
                    className: (0,utils.cn)("min-h-svh bg-background font-sans antialiased", fontSans.variable, fontMono.variable),
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(providers_e0, {
                        attribute: "class",
                        defaultTheme: "system",
                        enableSystem: true,
                        disableTransitionOnChange: true,
                        enableColorScheme: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                "vaul-drawer-wrapper": "",
                                children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    className: "relative flex min-h-svh flex-col bg-background",
                                    children: children
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(TailwindIndicator, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(theme_switcher_e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_toaster_e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(toaster_e0, {}),
                            /*#__PURE__*/ react_jsx_runtime.jsx(sonner.Toaster, {})
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 64590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ META_THEME_COLORS),
/* harmony export */   J: () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    ogImage: "https://ui.shadcn.com/og.jpg",
    description: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn-ui/ui"
    }
};
const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b"
};


/***/ }),

/***/ 91740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ absoluteUrl),
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony export formatDate */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31616);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68336);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}


/***/ }),

/***/ 96448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sonner.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/sonner.tsx#Toaster`);


/***/ }),

/***/ 23607:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNotFoundError: function() {
        return isNotFoundError;
    },
    notFound: function() {
        return notFound;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error)) {
        return false;
    }
    return error.digest === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 84174:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PARALLEL_ROUTE_DEFAULT_PATH: function() {
        return PARALLEL_ROUTE_DEFAULT_PATH;
    },
    default: function() {
        return ParallelRouteDefault;
    }
});
const _notfound = __webpack_require__(23607);
const PARALLEL_ROUTE_DEFAULT_PATH = "next/dist/client/components/parallel-route-default.js";
function ParallelRouteDefault() {
    (0, _notfound.notFound)();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parallel-route-default.js.map


/***/ }),

/***/ 93985:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [65206], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();