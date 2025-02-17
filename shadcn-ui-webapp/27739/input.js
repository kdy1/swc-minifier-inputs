"use strict";
exports.id = 27739;
exports.ids = [27739];
exports.modules = {

/***/ 27739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bU: () => (/* binding */ $faa2e61a3361514f$export$6521433ed15a34db),
/* harmony export */   e6: () => (/* binding */ $faa2e61a3361514f$export$9a58ef0d7ad3278c),
/* harmony export */   fC: () => (/* binding */ $faa2e61a3361514f$export$be92b6f5f03c0fe9),
/* harmony export */   fQ: () => (/* binding */ $faa2e61a3361514f$export$13921ac0cc260818)
/* harmony export */ });
/* unused harmony exports createSliderScope, Slider, SliderTrack, SliderRange, SliderThumb */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17085);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17587);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31462);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95185);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50769);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36455);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11472);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96111);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54227);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67939);

























const $faa2e61a3361514f$var$PAGE_KEYS = [
    'PageUp',
    'PageDown'
];
const $faa2e61a3361514f$var$ARROW_KEYS = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
];
const $faa2e61a3361514f$var$BACK_KEYS = {
    'from-left': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowLeft'
    ],
    'from-right': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowRight'
    ],
    'from-bottom': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowLeft'
    ],
    'from-top': [
        'Home',
        'PageDown',
        'ArrowUp',
        'ArrowLeft'
    ]
};
/* -------------------------------------------------------------------------------------------------
 * Slider
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SLIDER_NAME = 'Slider';
const [$faa2e61a3361514f$var$Collection, $faa2e61a3361514f$var$useCollection, $faa2e61a3361514f$var$createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_1__/* .createCollection */ .B)($faa2e61a3361514f$var$SLIDER_NAME);
const [$faa2e61a3361514f$var$createSliderContext, $faa2e61a3361514f$export$ef72632d7b901f97] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .b)($faa2e61a3361514f$var$SLIDER_NAME, [
    $faa2e61a3361514f$var$createCollectionScope
]);
const [$faa2e61a3361514f$var$SliderProvider, $faa2e61a3361514f$var$useSliderContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME);
const $faa2e61a3361514f$export$472062a354075cee = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { name: name , min: min = 0 , max: max = 100 , step: step = 1 , orientation: orientation = 'horizontal' , disabled: disabled = false , minStepsBetweenThumbs: minStepsBetweenThumbs = 0 , defaultValue: defaultValue = [
        min
    ] , value: value1 , onValueChange: onValueChange = ()=>{} , onValueCommit: onValueCommit = ()=>{} , inverted: inverted = false , ...sliderProps } = props;
    const [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setSlider(node)
    );
    const thumbRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    const valueIndexToChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const isHorizontal = orientation === 'horizontal'; // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = slider ? Boolean(slider.closest('form')) : true;
    const SliderOrientation = isHorizontal ? $faa2e61a3361514f$var$SliderHorizontal : $faa2e61a3361514f$var$SliderVertical;
    const [values = [], setValues] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__/* .useControllableState */ .T)({
        prop: value1,
        defaultProp: defaultValue,
        onChange: (value)=>{
            var _thumbs$valueIndexToC;
            const thumbs = [
                ...thumbRefs.current
            ];
            (_thumbs$valueIndexToC = thumbs[valueIndexToChangeRef.current]) === null || _thumbs$valueIndexToC === void 0 || _thumbs$valueIndexToC.focus();
            onValueChange(value);
        }
    });
    const valuesBeforeSlideStartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(values);
    function handleSlideStart(value) {
        const closestIndex = $faa2e61a3361514f$var$getClosestValueIndex(values, value);
        updateValues(value, closestIndex);
    }
    function handleSlideMove(value) {
        updateValues(value, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value, atIndex, { commit: commit  } = {
        commit: false
    }) {
        const decimalCount = $faa2e61a3361514f$var$getDecimalCount(step);
        const snapToStep = $faa2e61a3361514f$var$roundValue(Math.round((value - min) / step) * step + min, decimalCount);
        const nextValue = (0,_radix_ui_number__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .u)(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = $faa2e61a3361514f$var$getNextSortedValues(prevValues, nextValue, atIndex);
            if ($faa2e61a3361514f$var$hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else return prevValues;
        });
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderProvider, {
        scope: props.__scopeSlider,
        disabled: disabled,
        min: min,
        max: max,
        valueIndexToChangeRef: valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values: values,
        orientation: orientation
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$Collection.Provider, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$Collection.Slot, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SliderOrientation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        "aria-disabled": disabled,
        "data-disabled": disabled ? '' : undefined
    }, sliderProps, {
        ref: composedRefs,
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(sliderProps.onPointerDown, ()=>{
            if (!disabled) valuesBeforeSlideStartRef.current = values;
        }),
        min: min,
        max: max,
        inverted: inverted,
        onSlideStart: disabled ? undefined : handleSlideStart,
        onSlideMove: disabled ? undefined : handleSlideMove,
        onSlideEnd: disabled ? undefined : handleSlideEnd,
        onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                commit: true
            })
        ,
        onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                commit: true
            })
        ,
        onStepKeyDown: ({ event: event , direction: stepDirection  })=>{
            if (!disabled) {
                const isPageKey = $faa2e61a3361514f$var$PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && $faa2e61a3361514f$var$ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value + stepInDirection, atIndex, {
                    commit: true
                });
            }
        }
    })))), isFormControl && values.map((value, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$BubbleInput, {
            key: index,
            name: name ? name + (values.length > 1 ? '[]' : '') : undefined,
            value: value
        })
    ));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$472062a354075cee, {
    displayName: $faa2e61a3361514f$var$SLIDER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderHorizontal
 * -----------------------------------------------------------------------------------------------*/ const [$faa2e61a3361514f$var$SliderOrientationProvider, $faa2e61a3361514f$var$useSliderOrientationContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME, {
    startEdge: 'left',
    endEdge: 'right',
    size: 'width',
    direction: 1
});
const $faa2e61a3361514f$var$SliderHorizontal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { min: min , max: max , dir: dir , inverted: inverted , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setSlider(node)
    );
    const rectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_8__/* .useDirection */ .gm)(dir);
    const isDirectionLTR = direction === 'ltr';
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = $faa2e61a3361514f$var$linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? 'left' : 'right',
        endEdge: isSlidingFromLeft ? 'right' : 'left',
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width"
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        dir: direction,
        "data-orientation": "horizontal"
    }, sliderProps, {
        ref: composedRefs,
        style: {
            ...sliderProps.style,
            ['--radix-slider-thumb-transform']: 'translateX(-50%)'
        },
        onSlideStart: (event)=>{
            const value = getValueFromPointer(event.clientX);
            onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
        },
        onSlideMove: (event)=>{
            const value = getValueFromPointer(event.clientX);
            onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
        },
        onSlideEnd: ()=>{
            rectRef.current = undefined;
            onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
        },
        onStepKeyDown: (event)=>{
            const slideDirection = isSlidingFromLeft ? 'from-left' : 'from-right';
            const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
            onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
                event: event,
                direction: isBackKey ? -1 : 1
            });
        }
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SliderVertical
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SliderVertical = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { min: min , max: max , inverted: inverted , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, sliderRef);
    const rectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = $faa2e61a3361514f$var$linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? 'bottom' : 'top',
        endEdge: isSlidingFromBottom ? 'top' : 'bottom',
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        "data-orientation": "vertical"
    }, sliderProps, {
        ref: ref,
        style: {
            ...sliderProps.style,
            ['--radix-slider-thumb-transform']: 'translateY(50%)'
        },
        onSlideStart: (event)=>{
            const value = getValueFromPointer(event.clientY);
            onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
        },
        onSlideMove: (event)=>{
            const value = getValueFromPointer(event.clientY);
            onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
        },
        onSlideEnd: ()=>{
            rectRef.current = undefined;
            onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
        },
        onStepKeyDown: (event)=>{
            const slideDirection = isSlidingFromBottom ? 'from-bottom' : 'from-top';
            const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
            onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
                event: event,
                direction: isBackKey ? -1 : 1
            });
        }
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SliderImpl
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SliderImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onHomeKeyDown: onHomeKeyDown , onEndKeyDown: onEndKeyDown , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$SLIDER_NAME, __scopeSlider);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, sliderProps, {
        ref: forwardedRef,
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
            if (event.key === 'Home') {
                onHomeKeyDown(event); // Prevent scrolling to page start
                event.preventDefault();
            } else if (event.key === 'End') {
                onEndKeyDown(event); // Prevent scrolling to page end
                event.preventDefault();
            } else if ($faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event); // Prevent scrolling for directional key presses
                event.preventDefault();
            }
        }),
        onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId); // Prevent browser focus behaviour because we focus a thumb manually when values change.
            event.preventDefault(); // Touch devices have a delay before focusing so won't focus if touch immediately moves
            // away from target (sliding). We want thumb to focus regardless.
            if (context.thumbs.has(target)) target.focus();
            else onSlideStart(event);
        }),
        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SliderTrack
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$TRACK_NAME = 'SliderTrack';
const $faa2e61a3361514f$export$105594979f116971 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , ...trackProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$TRACK_NAME, __scopeSlider);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        "data-disabled": context.disabled ? '' : undefined,
        "data-orientation": context.orientation
    }, trackProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$105594979f116971, {
    displayName: $faa2e61a3361514f$var$TRACK_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderRange
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$RANGE_NAME = 'SliderRange';
const $faa2e61a3361514f$export$a5cf38a7a000fe77 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , ...rangeProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
    const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>$faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? '' : undefined
    }, rangeProps, {
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + '%',
            [orientation.endEdge]: offsetEnd + '%'
        }
    }));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$a5cf38a7a000fe77, {
    displayName: $faa2e61a3361514f$var$RANGE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderThumb
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$THUMB_NAME = 'SliderThumb';
const $faa2e61a3361514f$export$2c1b491743890dec = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const getItems = $faa2e61a3361514f$var$useCollection(props.__scopeSlider);
    const [thumb, setThumb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setThumb(node)
    );
    const index = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb
        ) : -1
    , [
        getItems,
        thumb
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$SliderThumbImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, props, {
        ref: composedRefs,
        index: index
    }));
});
const $faa2e61a3361514f$var$SliderThumbImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , index: index , ...thumbProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
    const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setThumb(node)
    );
    const size = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_10__/* .useSize */ .t)(thumb); // We cast because index could be `-1` which would return undefined
    const value = context.values[index];
    const percent = value === undefined ? 0 : $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max);
    const label = $faa2e61a3361514f$var$getLabel(index, context.values.length);
    const orientationSize = size === null || size === void 0 ? void 0 : size[orientation.size];
    const thumbInBoundsOffset = orientationSize ? $faa2e61a3361514f$var$getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        style: {
            transform: 'var(--radix-slider-thumb-transform)',
            position: 'absolute',
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        }
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($faa2e61a3361514f$var$Collection.ItemSlot, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_9__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        role: "slider",
        "aria-label": props['aria-label'] || label,
        "aria-valuemin": context.min,
        "aria-valuenow": value,
        "aria-valuemax": context.max,
        "aria-orientation": context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? '' : undefined,
        tabIndex: context.disabled ? undefined : 0
    }, thumbProps, {
        ref: composedRefs,
        style: value === undefined ? {
            display: 'none'
        } : props.style,
        onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__/* .composeEventHandlers */ .M)(props.onFocus, ()=>{
            context.valueIndexToChangeRef.current = index;
        })
    }))));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$2c1b491743890dec, {
    displayName: $faa2e61a3361514f$var$THUMB_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$BubbleInput = (props)=>{
    const { value: value , ...inputProps } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevValue = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_11__/* .usePrevious */ .D)(value); // Bubble value change to parents (e.g form change event)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('input', {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully do not use `type="hidden"` here otherwise forms that
   * wrap it will not be able to access its value via the FormData API.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   */ return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        style: {
            display: 'none'
        }
    }, inputProps, {
        ref: ref,
        defaultValue: value
    }));
};
function $faa2e61a3361514f$var$getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b
    );
}
function $faa2e61a3361514f$var$convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return (0,_radix_ui_number__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .u)(percentage, [
        0,
        100
    ]);
}
/**
 * Returns a label for each thumb when there are two or more thumbs
 */ function $faa2e61a3361514f$var$getLabel(index, totalValues) {
    if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
    else if (totalValues === 2) return [
        'Minimum',
        'Maximum'
    ][index];
    else return undefined;
}
/**
 * Given a `values` array and a `nextValue`, determine which value in
 * the array is closest to `nextValue` and return its index.
 *
 * @example
 * // returns 1
 * getClosestValueIndex([10, 30], 25);
 */ function $faa2e61a3361514f$var$getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue)
    );
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
/**
 * Offsets the thumb centre point while sliding to ensure it remains
 * within the bounds of the slider when reaching the edges
 */ function $faa2e61a3361514f$var$getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = $faa2e61a3361514f$var$linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
/**
 * Gets an array of steps between each value.
 *
 * @example
 * // returns [1, 9]
 * getStepsBetweenValues([10, 11, 20]);
 */ function $faa2e61a3361514f$var$getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value
    );
}
/**
 * Verifies the minimum steps between all values is greater than or equal
 * to the expected minimum steps.
 *
 * @example
 * // returns false
 * hasMinStepsBetweenValues([1,2,3], 2);
 *
 * @example
 * // returns true
 * hasMinStepsBetweenValues([1,2,3], 1);
 */ function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = $faa2e61a3361514f$var$getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
} // https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function $faa2e61a3361514f$var$linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function $faa2e61a3361514f$var$getDecimalCount(value) {
    return (String(value).split('.')[1] || '').length;
}
function $faa2e61a3361514f$var$roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
const $faa2e61a3361514f$export$be92b6f5f03c0fe9 = $faa2e61a3361514f$export$472062a354075cee;
const $faa2e61a3361514f$export$13921ac0cc260818 = $faa2e61a3361514f$export$105594979f116971;
const $faa2e61a3361514f$export$9a58ef0d7ad3278c = $faa2e61a3361514f$export$a5cf38a7a000fe77;
const $faa2e61a3361514f$export$6521433ed15a34db = $faa2e61a3361514f$export$2c1b491743890dec;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;