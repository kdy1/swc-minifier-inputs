"use strict";
exports.id = 71106;
exports.ids = [71106,23152,35661];
exports.modules = {

/***/ 71106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselPlugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var embla_carousel_autoplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89018);
/* harmony import */ var _registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23152);
/* harmony import */ var _registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35661);





function CarouselPlugin() {
    const plugin = react__WEBPACK_IMPORTED_MODULE_1__.useRef((0,embla_carousel_autoplay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        delay: 2000,
        stopOnInteraction: true
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
        plugins: [
            plugin.current
        ],
        className: "w-full max-w-xs",
        onMouseEnter: plugin.current.stop,
        onMouseLeave: plugin.current.reset,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselContent, {
                children: Array.from({
                    length: 5
                }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                                    className: "flex aspect-square items-center justify-center p-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-4xl font-semibold",
                                        children: index + 1
                                    })
                                })
                            })
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselPrevious, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.CarouselNext, {})
        ]
    });
}


/***/ }),

/***/ 23152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   CardDescription: () => (/* binding */ CardDescription),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardHeader: () => (/* binding */ CardHeader),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91740);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 35661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ e0),
/* harmony export */   CarouselContent: () => (/* binding */ e1),
/* harmony export */   CarouselItem: () => (/* binding */ e2),
/* harmony export */   CarouselNext: () => (/* binding */ e4),
/* harmony export */   CarouselPrevious: () => (/* binding */ e3)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62053);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#Carousel`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselContent`);

const e2 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselItem`);

const e3 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselPrevious`);

const e4 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kdy1/projects/shadcn-ui/apps/www/registry/new-york/ui/carousel.tsx#CarouselNext`);


/***/ }),

/***/ 89018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Autoplay)
/* harmony export */ });
const defaultOptions = {
  active: true,
  breakpoints: {},
  delay: 4000,
  jump: false,
  playOnInit: true,
  stopOnFocusIn: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
  rootNode: null
};

function Autoplay(userOptions = {}) {
  let options;
  let emblaApi;
  let destroyed;
  let playing = false;
  let wasPlaying = false;
  let jump = false;
  let animationFrame = 0;
  let timer = 0;
  function init(emblaApiInstance, optionsHandler) {
    emblaApi = emblaApiInstance;
    if (emblaApi.scrollSnapList().length <= 1) return;
    const {
      mergeOptions,
      optionsAtMedia
    } = optionsHandler;
    const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);
    const allOptions = mergeOptions(optionsBase, userOptions);
    options = optionsAtMedia(allOptions);
    jump = options.jump;
    destroyed = false;
    const {
      eventStore,
      ownerDocument
    } = emblaApi.internalEngine();
    const emblaRoot = emblaApi.rootNode();
    const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;
    emblaApi.on('pointerDown', clearTimer);
    if (!options.stopOnInteraction) emblaApi.on('pointerUp', startTimer);
    if (options.stopOnMouseEnter) {
      eventStore.add(root, 'mouseenter', clearTimer);
      if (!options.stopOnInteraction) {
        eventStore.add(root, 'mouseleave', startTimer);
      }
    }
    if (options.stopOnFocusIn) {
      eventStore.add(root, 'focusin', clearTimer);
      if (!options.stopOnInteraction) {
        eventStore.add(root, 'focusout', startTimer);
      }
    }
    eventStore.add(ownerDocument, 'visibilitychange', () => {
      if (ownerDocument.visibilityState === 'hidden') {
        wasPlaying = playing;
        return clearTimer();
      }
      if (wasPlaying) startTimer();
    });
    if (options.playOnInit) {
      emblaApi.on('init', startTimer).on('reInit', startTimer);
    }
  }
  function destroy() {
    destroyed = true;
    playing = false;
    emblaApi.off('init', startTimer).off('reInit', startTimer);
    emblaApi.off('pointerDown', clearTimer);
    if (!options.stopOnInteraction) emblaApi.off('pointerUp', startTimer);
    clearTimer();
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }
  function startTimer() {
    if (destroyed) return;
    if (!playing) emblaApi.emit('autoplay:play');
    const {
      ownerWindow
    } = emblaApi.internalEngine();
    ownerWindow.clearInterval(timer);
    timer = ownerWindow.setInterval(next, options.delay);
    playing = true;
  }
  function clearTimer() {
    if (destroyed) return;
    if (playing) emblaApi.emit('autoplay:stop');
    const {
      ownerWindow
    } = emblaApi.internalEngine();
    ownerWindow.clearInterval(timer);
    timer = 0;
    playing = false;
  }
  function play(jumpOverride) {
    if (typeof jumpOverride !== 'undefined') jump = jumpOverride;
    startTimer();
  }
  function stop() {
    if (playing) clearTimer();
  }
  function reset() {
    if (playing) play();
  }
  function isPlaying() {
    return playing;
  }
  function next() {
    animationFrame = requestAnimationFrame(() => {
      const {
        index
      } = emblaApi.internalEngine();
      const nextIndex = index.clone().add(1).get();
      const lastIndex = emblaApi.scrollSnapList().length - 1;
      const kill = options.stopOnLastSnap && nextIndex === lastIndex;
      if (kill) clearTimer();
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext(jump);
      } else {
        emblaApi.scrollTo(0, jump);
      }
    });
  }
  const self = {
    name: 'autoplay',
    options: userOptions,
    init,
    destroy,
    play,
    stop,
    reset,
    isPlaying
  };
  return self;
}
Autoplay.globalOptions = undefined;


//# sourceMappingURL=embla-carousel-autoplay.esm.js.map


/***/ })

};
;