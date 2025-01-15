"use strict";
exports.id = 96821;
exports.ids = [96821];
exports.modules = {

/***/ 64969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ CartesianAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57074);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49193);
/* harmony import */ var _util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71183);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68874);
/* harmony import */ var _component_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6222);
/* harmony import */ var _component_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29043);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54491);
/* harmony import */ var _util_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33306);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29480);
/* harmony import */ var _getTicks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67601);
var _excluded = [
    "viewBox"
], _excluded2 = [
    "viewBox"
], _excluded3 = [
    "ticks"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Cartesian Axis
 */ 











/** The orientation of the axis in correspondence to the chart */ /** A unit to be appended to a value */ /** The formatter function of tick */ var CartesianAxis = /*#__PURE__*/ function(_Component) {
    _inherits(CartesianAxis, _Component);
    function CartesianAxis(props) {
        var _this;
        _classCallCheck(this, CartesianAxis);
        _this = _callSuper(this, CartesianAxis, [
            props
        ]);
        _this.state = {
            fontSize: "",
            letterSpacing: ""
        };
        return _this;
    }
    _createClass(CartesianAxis, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(_ref, nextState) {
                var viewBox = _ref.viewBox, restProps = _objectWithoutProperties(_ref, _excluded);
                // props.viewBox is sometimes generated every time -
                // check that specially as object equality is likely to fail
                var _this$props = this.props, viewBoxOld = _this$props.viewBox, restPropsOld = _objectWithoutProperties(_this$props, _excluded2);
                return !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .w)(viewBox, viewBoxOld) || !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .w)(restProps, restPropsOld) || !(0,_util_ShallowEqual__WEBPACK_IMPORTED_MODULE_3__/* .shallowEqual */ .w)(nextState, this.state);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var htmlLayer = this.layerReference;
                if (!htmlLayer) return;
                var tick = htmlLayer.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                if (tick) {
                    this.setState({
                        fontSize: window.getComputedStyle(tick).fontSize,
                        letterSpacing: window.getComputedStyle(tick).letterSpacing
                    });
                }
            }
        },
        {
            key: "getTickLineCoord",
            value: function getTickLineCoord(data) {
                var _this$props2 = this.props, x = _this$props2.x, y = _this$props2.y, width = _this$props2.width, height = _this$props2.height, orientation = _this$props2.orientation, tickSize = _this$props2.tickSize, mirror = _this$props2.mirror, tickMargin = _this$props2.tickMargin;
                var x1, x2, y1, y2, tx, ty;
                var sign = mirror ? -1 : 1;
                var finalTickSize = data.tickSize || tickSize;
                var tickCoord = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(data.tickCoord) ? data.tickCoord : data.coordinate;
                switch(orientation){
                    case "top":
                        x1 = x2 = data.coordinate;
                        y2 = y + +!mirror * height;
                        y1 = y2 - sign * finalTickSize;
                        ty = y1 - sign * tickMargin;
                        tx = tickCoord;
                        break;
                    case "left":
                        y1 = y2 = data.coordinate;
                        x2 = x + +!mirror * width;
                        x1 = x2 - sign * finalTickSize;
                        tx = x1 - sign * tickMargin;
                        ty = tickCoord;
                        break;
                    case "right":
                        y1 = y2 = data.coordinate;
                        x2 = x + +mirror * width;
                        x1 = x2 + sign * finalTickSize;
                        tx = x1 + sign * tickMargin;
                        ty = tickCoord;
                        break;
                    default:
                        x1 = x2 = data.coordinate;
                        y2 = y + +mirror * height;
                        y1 = y2 + sign * finalTickSize;
                        ty = y1 + sign * tickMargin;
                        tx = tickCoord;
                        break;
                }
                return {
                    line: {
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2
                    },
                    tick: {
                        x: tx,
                        y: ty
                    }
                };
            }
        },
        {
            key: "getTickTextAnchor",
            value: function getTickTextAnchor() {
                var _this$props3 = this.props, orientation = _this$props3.orientation, mirror = _this$props3.mirror;
                var textAnchor;
                switch(orientation){
                    case "left":
                        textAnchor = mirror ? "start" : "end";
                        break;
                    case "right":
                        textAnchor = mirror ? "end" : "start";
                        break;
                    default:
                        textAnchor = "middle";
                        break;
                }
                return textAnchor;
            }
        },
        {
            key: "getTickVerticalAnchor",
            value: function getTickVerticalAnchor() {
                var _this$props4 = this.props, orientation = _this$props4.orientation, mirror = _this$props4.mirror;
                var verticalAnchor = "end";
                switch(orientation){
                    case "left":
                    case "right":
                        verticalAnchor = "middle";
                        break;
                    case "top":
                        verticalAnchor = mirror ? "start" : "end";
                        break;
                    default:
                        verticalAnchor = mirror ? "end" : "start";
                        break;
                }
                return verticalAnchor;
            }
        },
        {
            key: "renderAxisLine",
            value: function renderAxisLine() {
                var _this$props5 = this.props, x = _this$props5.x, y = _this$props5.y, width = _this$props5.width, height = _this$props5.height, orientation = _this$props5.orientation, mirror = _this$props5.mirror, axisLine = _this$props5.axisLine;
                var props = _objectSpread(_objectSpread(_objectSpread({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .L6)(this.props, false)), (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .L6)(axisLine, false)), {}, {
                    fill: "none"
                });
                if (orientation === "top" || orientation === "bottom") {
                    var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
                    props = _objectSpread(_objectSpread({}, props), {}, {
                        x1: x,
                        y1: y + needHeight * height,
                        x2: x + width,
                        y2: y + needHeight * height
                    });
                } else {
                    var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
                    props = _objectSpread(_objectSpread({}, props), {}, {
                        x1: x + needWidth * width,
                        y1: y,
                        x2: x + needWidth * width,
                        y2: y + height
                    });
                }
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({}, props, {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("recharts-cartesian-axis-line", lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(axisLine, "className"))
                }));
            }
        },
        {
            key: "renderTicks",
            value: /**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @param {string} fontSize Fontsize to consider for tick spacing
     * @param {string} letterSpacing Letterspacing to consider for tick spacing
     * @return {ReactComponent} renderedTicks
     */ function renderTicks(ticks, fontSize, letterSpacing) {
                var _this2 = this;
                var _this$props6 = this.props, tickLine = _this$props6.tickLine, stroke = _this$props6.stroke, tick = _this$props6.tick, tickFormatter = _this$props6.tickFormatter, unit = _this$props6.unit;
                var finalTicks = (0,_getTicks__WEBPACK_IMPORTED_MODULE_7__/* .getTicks */ .f)(_objectSpread(_objectSpread({}, this.props), {}, {
                    ticks: ticks
                }), fontSize, letterSpacing);
                var textAnchor = this.getTickTextAnchor();
                var verticalAnchor = this.getTickVerticalAnchor();
                var axisProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .L6)(this.props, false);
                var customTickProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .L6)(tick, false);
                var tickLineProps = _objectSpread(_objectSpread({}, axisProps), {}, {
                    fill: "none"
                }, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_5__/* .filterProps */ .L6)(tickLine, false));
                var items = finalTicks.map(function(entry, i) {
                    var _this2$getTickLineCoo = _this2.getTickLineCoord(entry), lineCoord = _this2$getTickLineCoo.line, tickCoord = _this2$getTickLineCoo.tick;
                    var tickProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
                        textAnchor: textAnchor,
                        verticalAnchor: verticalAnchor
                    }, axisProps), {}, {
                        stroke: "none",
                        fill: stroke
                    }, customTickProps), tickCoord), {}, {
                        index: i,
                        payload: entry,
                        visibleTicksCount: finalTicks.length,
                        tickFormatter: tickFormatter
                    });
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_8__/* .Layer */ .m, _extends({
                        className: "recharts-cartesian-axis-tick",
                        key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
                    }, (0,_util_types__WEBPACK_IMPORTED_MODULE_9__/* .adaptEventsOfChild */ .bw)(_this2.props, entry, i)), tickLine && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({}, tickLineProps, lineCoord, {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("recharts-cartesian-axis-tick-line", lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(tickLine, "className"))
                    })), tick && CartesianAxis.renderTickItem(tick, tickProps, "".concat(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit || "")));
                });
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
                    className: "recharts-cartesian-axis-ticks"
                }, items);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$props7 = this.props, axisLine = _this$props7.axisLine, width = _this$props7.width, height = _this$props7.height, ticksGenerator = _this$props7.ticksGenerator, className = _this$props7.className, hide = _this$props7.hide;
                if (hide) {
                    return null;
                }
                var _this$props8 = this.props, ticks = _this$props8.ticks, noTicksProps = _objectWithoutProperties(_this$props8, _excluded3);
                var finalTicks = ticks;
                if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(ticksGenerator)) {
                    finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
                }
                if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
                    return null;
                }
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_8__/* .Layer */ .m, {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("recharts-cartesian-axis", className),
                    ref: function ref(_ref2) {
                        _this3.layerReference = _ref2;
                    }
                }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), _component_Label__WEBPACK_IMPORTED_MODULE_10__/* .Label */ ._.renderCallByParent(this.props));
            }
        }
    ], [
        {
            key: "renderTickItem",
            value: function renderTickItem(option, props, value) {
                var tickItem;
                if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(option)) {
                    tickItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(option, props);
                } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(option)) {
                    tickItem = option(props);
                } else {
                    tickItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .x, _extends({}, props, {
                        className: "recharts-cartesian-axis-tick-value"
                    }), value);
                }
                return tickItem;
            }
        }
    ]);
    return CartesianAxis;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
_defineProperty(CartesianAxis, "displayName", "CartesianAxis");
_defineProperty(CartesianAxis, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    // The orientation of axis
    orientation: "bottom",
    // The ticks
    ticks: [],
    stroke: "#666",
    tickLine: true,
    axisLine: true,
    tick: true,
    mirror: false,
    minTickGap: 5,
    // The width or height of tick
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
});


/***/ }),

/***/ 66845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ XAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49193);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38306);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64969);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86837);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
/**
 * @fileOverview X Axis
 */ 




/** Define of XAxis props */ var XAxis = function XAxis(_ref) {
    var xAxisId = _ref.xAxisId;
    var width = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartWidth */ .zn)();
    var height = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartHeight */ .Mw)();
    var axisOptions = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useXAxisOrThrow */ .bH)(xAxisId);
    if (axisOptions == null) {
        return null;
    }
    return(/*#__PURE__*/ // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CartesianAxis__WEBPACK_IMPORTED_MODULE_2__/* .CartesianAxis */ .O, _extends({}, axisOptions, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        },
        ticksGenerator: function ticksGenerator(axis) {
            return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .getTicksOfAxis */ .uY)(axis, true);
        }
    })));
};
XAxis.displayName = "XAxis";
XAxis.defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: false,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: false,
    scale: "auto",
    reversed: false,
    allowDuplicatedCategory: true
};


/***/ }),

/***/ 84168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ YAxis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49193);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38306);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64969);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86837);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
/**
 * @fileOverview Y Axis
 */ 




var YAxis = function YAxis(_ref) {
    var yAxisId = _ref.yAxisId;
    var width = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartWidth */ .zn)();
    var height = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useChartHeight */ .Mw)();
    var axisOptions = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_1__/* .useYAxisOrThrow */ .Ud)(yAxisId);
    if (axisOptions == null) {
        return null;
    }
    return(/*#__PURE__*/ // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CartesianAxis__WEBPACK_IMPORTED_MODULE_2__/* .CartesianAxis */ .O, _extends({}, axisOptions, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        },
        ticksGenerator: function ticksGenerator(axis) {
            return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .getTicksOfAxis */ .uY)(axis, true);
        }
    })));
};
YAxis.displayName = "YAxis";
YAxis.defaultProps = {
    allowDuplicatedCategory: true,
    allowDecimals: true,
    hide: false,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: false,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: false,
    scale: "auto",
    reversed: false
};


/***/ }),

/***/ 67601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ getTicks)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(40837);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DOMUtils.js
var DOMUtils = __webpack_require__(64095);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/Global.js
var Global = __webpack_require__(88127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/CartesianUtils.js
var CartesianUtils = __webpack_require__(64239);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/getEveryNthWithCondition.js
/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * If isValid is provided, all candidates must suffice the condition, else undefined is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @param {Function} isValid A function to evaluate a candidate form the array
 * @returns {T[]} The result array of the same type as the input array.
 */ function getEveryNthWithCondition(array, n, isValid) {
    if (n < 1) {
        return [];
    }
    if (n === 1 && isValid === undefined) {
        return array;
    }
    var result = [];
    for(var i = 0; i < array.length; i += n){
        if (isValid === undefined || isValid(array[i]) === true) {
            result.push(array[i]);
        } else {
            return undefined;
        }
    }
    return result;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/TickUtils.js


function getAngledTickWidth(contentSize, unitSize, angle) {
    var size = {
        width: contentSize.width + unitSize.width,
        height: contentSize.height + unitSize.height
    };
    return (0,CartesianUtils/* getAngledRectangleWidth */.xE)(size, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
    var isWidth = sizeKey === "width";
    var x = viewBox.x, y = viewBox.y, width = viewBox.width, height = viewBox.height;
    if (sign === 1) {
        return {
            start: isWidth ? x : y,
            end: isWidth ? x + width : y + height
        };
    }
    return {
        start: isWidth ? x + width : y + height,
        end: isWidth ? x : y
    };
}
function isVisible(sign, tickPosition, getSize, start, end) {
    /* Since getSize() is expensive (it reads the ticks' size from the DOM), we do this check first to avoid calculating
   * the tick's size. */ if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) {
        return false;
    }
    var size = getSize();
    return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
    return getEveryNthWithCondition(ticks, interval + 1);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/getEquidistantTicks.js


function getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
    var result = (ticks || []).slice();
    var initialStart = boundaries.start, end = boundaries.end;
    var index = 0;
    // Premature optimisation idea 1: Estimate a lower bound, and start from there.
    // For now, start from every tick
    var stepsize = 1;
    var start = initialStart;
    var _loop = function _loop() {
        // Given stepsize, evaluate whether every stepsize-th tick can be shown.
        // If it can not, then increase the stepsize by 1, and try again.
        var entry = ticks === null || ticks === void 0 ? void 0 : ticks[index];
        // Break condition - If we have evaluate all the ticks, then we are done.
        if (entry === undefined) {
            return {
                v: getEveryNthWithCondition(ticks, stepsize)
            };
        }
        // Check if the element collides with the next element
        var i = index;
        var size;
        var getSize = function getSize() {
            if (size === undefined) {
                size = getTickSize(entry, i);
            }
            return size;
        };
        var tickCoord = entry.coordinate;
        // We will always show the first tick.
        var isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);
        if (!isShow) {
            // Start all over with a larger stepsize
            index = 0;
            start = initialStart;
            stepsize += 1;
        }
        if (isShow) {
            // If it can be shown, update the start
            start = tickCoord + sign * (getSize() / 2 + minTickGap);
            index += stepsize;
        }
    }, _ret;
    while(stepsize <= result.length){
        _ret = _loop();
        if (_ret) return _ret.v;
    }
    return [];
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/getTicks.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}






function getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap) {
    var result = (ticks || []).slice();
    var len = result.length;
    var start = boundaries.start;
    var end = boundaries.end;
    var _loop = function _loop(i) {
        var entry = result[i];
        var size;
        var getSize = function getSize() {
            if (size === undefined) {
                size = getTickSize(entry, i);
            }
            return size;
        };
        if (i === len - 1) {
            var gap = sign * (entry.coordinate + sign * getSize() / 2 - end);
            result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
                tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
            });
        } else {
            result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
                tickCoord: entry.coordinate
            });
        }
        var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
        if (isShow) {
            end = entry.tickCoord - sign * (getSize() / 2 + minTickGap);
            result[i] = _objectSpread(_objectSpread({}, entry), {}, {
                isShow: true
            });
        }
    };
    for(var i = len - 1; i >= 0; i--){
        _loop(i);
    }
    return result;
}
function getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, preserveEnd) {
    var result = (ticks || []).slice();
    var len = result.length;
    var start = boundaries.start, end = boundaries.end;
    if (preserveEnd) {
        // Try to guarantee the tail to be displayed
        var tail = ticks[len - 1];
        var tailSize = getTickSize(tail, len - 1);
        var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
        result[len - 1] = tail = _objectSpread(_objectSpread({}, tail), {}, {
            tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
        });
        var isTailShow = isVisible(sign, tail.tickCoord, function() {
            return tailSize;
        }, start, end);
        if (isTailShow) {
            end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
            result[len - 1] = _objectSpread(_objectSpread({}, tail), {}, {
                isShow: true
            });
        }
    }
    var count = preserveEnd ? len - 1 : len;
    var _loop2 = function _loop2(i) {
        var entry = result[i];
        var size;
        var getSize = function getSize() {
            if (size === undefined) {
                size = getTickSize(entry, i);
            }
            return size;
        };
        if (i === 0) {
            var gap = sign * (entry.coordinate - sign * getSize() / 2 - start);
            result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
                tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
            });
        } else {
            result[i] = entry = _objectSpread(_objectSpread({}, entry), {}, {
                tickCoord: entry.coordinate
            });
        }
        var isShow = isVisible(sign, entry.tickCoord, getSize, start, end);
        if (isShow) {
            start = entry.tickCoord + sign * (getSize() / 2 + minTickGap);
            result[i] = _objectSpread(_objectSpread({}, entry), {}, {
                isShow: true
            });
        }
    };
    for(var i = 0; i < count; i++){
        _loop2(i);
    }
    return result;
}
function getTicks(props, fontSize, letterSpacing) {
    var tick = props.tick, ticks = props.ticks, viewBox = props.viewBox, minTickGap = props.minTickGap, orientation = props.orientation, interval = props.interval, tickFormatter = props.tickFormatter, unit = props.unit, angle = props.angle;
    if (!ticks || !ticks.length || !tick) {
        return [];
    }
    if ((0,DataUtils/* isNumber */.hj)(interval) || Global/* Global */.x.isSsr) {
        return getNumberIntervalTicks(ticks, typeof interval === "number" && (0,DataUtils/* isNumber */.hj)(interval) ? interval : 0);
    }
    var candidates = [];
    var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
    var unitSize = unit && sizeKey === "width" ? (0,DOMUtils/* getStringSize */.xE)(unit, {
        fontSize: fontSize,
        letterSpacing: letterSpacing
    }) : {
        width: 0,
        height: 0
    };
    var getTickSize = function getTickSize(content, index) {
        var value = isFunction_default()(tickFormatter) ? tickFormatter(content.value, index) : content.value;
        // Recharts only supports angles when sizeKey === 'width'
        return sizeKey === "width" ? getAngledTickWidth((0,DOMUtils/* getStringSize */.xE)(value, {
            fontSize: fontSize,
            letterSpacing: letterSpacing
        }), unitSize, angle) : (0,DOMUtils/* getStringSize */.xE)(value, {
            fontSize: fontSize,
            letterSpacing: letterSpacing
        })[sizeKey];
    };
    var sign = ticks.length >= 2 ? (0,DataUtils/* mathSign */.uY)(ticks[1].coordinate - ticks[0].coordinate) : 1;
    var boundaries = getTickBoundaries(viewBox, sign, sizeKey);
    if (interval === "equidistantPreserveStart") {
        return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
    }
    if (interval === "preserveStart" || interval === "preserveStartEnd") {
        candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === "preserveStartEnd");
    } else {
        candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
    }
    return candidates.filter(function(entry) {
        return entry.isShow;
    });
}


/***/ })

};
;