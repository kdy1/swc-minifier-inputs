"use strict";
exports.id = 16753;
exports.ids = [16753];
exports.modules = {

/***/ 93390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_smooth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27173);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24934);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4071);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49193);
/* harmony import */ var _shape_Curve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32860);
/* harmony import */ var _shape_Dot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69219);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68874);
/* harmony import */ var _component_LabelList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64605);
/* harmony import */ var _ErrorBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17689);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54491);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29480);
/* harmony import */ var _util_Global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88127);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86837);
var _excluded = [
    "type",
    "layout",
    "connectNulls",
    "ref"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
 * @fileOverview Line
 */ 














var Line = /*#__PURE__*/ function(_PureComponent) {
    _inherits(Line, _PureComponent);
    function Line() {
        var _this;
        _classCallCheck(this, Line);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Line, [].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
            isAnimationFinished: true,
            totalLength: 0
        });
        _defineProperty(_assertThisInitialized(_this), "generateSimpleStrokeDasharray", function(totalLength, length) {
            return "".concat(length, "px ").concat(totalLength - length, "px");
        });
        _defineProperty(_assertThisInitialized(_this), "getStrokeDasharray", function(length, totalLength, lines) {
            var lineLength = lines.reduce(function(pre, next) {
                return pre + next;
            });
            // if lineLength is 0 return the default when no strokeDasharray is provided
            if (!lineLength) {
                return _this.generateSimpleStrokeDasharray(totalLength, length);
            }
            var count = Math.floor(length / lineLength);
            var remainLength = length % lineLength;
            var restLength = totalLength - length;
            var remainLines = [];
            for(var i = 0, sum = 0; i < lines.length; sum += lines[i], ++i){
                if (sum + lines[i] > remainLength) {
                    remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [
                        remainLength - sum
                    ]);
                    break;
                }
            }
            var emptyLines = remainLines.length % 2 === 0 ? [
                0,
                restLength
            ] : [
                restLength
            ];
            return [].concat(_toConsumableArray(Line.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function(line) {
                return "".concat(line, "px");
            }).join(", ");
        });
        _defineProperty(_assertThisInitialized(_this), "id", (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .uniqueId */ .EL)("recharts-line-"));
        _defineProperty(_assertThisInitialized(_this), "pathRef", function(node) {
            _this.mainCurve = node;
        });
        _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function() {
            _this.setState({
                isAnimationFinished: true
            });
            if (_this.props.onAnimationEnd) {
                _this.props.onAnimationEnd();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function() {
            _this.setState({
                isAnimationFinished: false
            });
            if (_this.props.onAnimationStart) {
                _this.props.onAnimationStart();
            }
        });
        return _this;
    }
    _createClass(Line, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!this.props.isAnimationActive) {
                    return;
                }
                var totalLength = this.getTotalLength();
                this.setState({
                    totalLength: totalLength
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!this.props.isAnimationActive) {
                    return;
                }
                var totalLength = this.getTotalLength();
                if (totalLength !== this.state.totalLength) {
                    this.setState({
                        totalLength: totalLength
                    });
                }
            }
        },
        {
            key: "getTotalLength",
            value: function getTotalLength() {
                var curveDom = this.mainCurve;
                try {
                    return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
                } catch (err) {
                    return 0;
                }
            }
        },
        {
            key: "renderErrorBar",
            value: function renderErrorBar(needClip, clipPathId) {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                var _this$props = this.props, points = _this$props.points, xAxis = _this$props.xAxis, yAxis = _this$props.yAxis, layout = _this$props.layout, children = _this$props.children;
                var errorBarItems = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .findAllByType */ .NN)(children, _ErrorBar__WEBPACK_IMPORTED_MODULE_7__/* .ErrorBar */ .W);
                if (!errorBarItems) {
                    return null;
                }
                var dataPointFormatter = function dataPointFormatter(dataPoint, dataKey) {
                    return {
                        x: dataPoint.x,
                        y: dataPoint.y,
                        value: dataPoint.value,
                        errorVal: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getValueByDataKey */ .F$)(dataPoint.payload, dataKey)
                    };
                };
                var errorBarProps = {
                    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
                };
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, errorBarProps, errorBarItems.map(function(item) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(item, {
                        key: "bar-".concat(item.props.dataKey),
                        data: points,
                        xAxis: xAxis,
                        yAxis: yAxis,
                        layout: layout,
                        dataPointFormatter: dataPointFormatter
                    });
                }));
            }
        },
        {
            key: "renderDots",
            value: function renderDots(needClip, clipDot, clipPathId) {
                var isAnimationActive = this.props.isAnimationActive;
                if (isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                var _this$props2 = this.props, dot = _this$props2.dot, points = _this$props2.points, dataKey = _this$props2.dataKey;
                var lineProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .L6)(this.props, false);
                var customDotProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .L6)(dot, true);
                var dots = points.map(function(entry, i) {
                    var dotProps = _objectSpread(_objectSpread(_objectSpread({
                        key: "dot-".concat(i),
                        r: 3
                    }, lineProps), customDotProps), {}, {
                        value: entry.value,
                        dataKey: dataKey,
                        cx: entry.x,
                        cy: entry.y,
                        index: i,
                        payload: entry.payload
                    });
                    return Line.renderDotItem(dot, dotProps);
                });
                var dotsProps = {
                    clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
                };
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, _extends({
                    className: "recharts-line-dots",
                    key: "dots"
                }, dotsProps), dots);
            }
        },
        {
            key: "renderCurveStatically",
            value: function renderCurveStatically(points, needClip, clipPathId, props) {
                var _this$props3 = this.props, type = _this$props3.type, layout = _this$props3.layout, connectNulls = _this$props3.connectNulls, ref = _this$props3.ref, others = _objectWithoutProperties(_this$props3, _excluded);
                var curveProps = _objectSpread(_objectSpread(_objectSpread({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .L6)(others, true)), {}, {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
                    points: points
                }, props), {}, {
                    type: type,
                    layout: layout,
                    connectNulls: connectNulls
                });
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Curve__WEBPACK_IMPORTED_MODULE_10__/* .Curve */ .H, _extends({}, curveProps, {
                    pathRef: this.pathRef
                }));
            }
        },
        {
            key: "renderCurveWithAnimation",
            value: function renderCurveWithAnimation(needClip, clipPathId) {
                var _this2 = this;
                var _this$props4 = this.props, points = _this$props4.points, strokeDasharray = _this$props4.strokeDasharray, isAnimationActive = _this$props4.isAnimationActive, animationBegin = _this$props4.animationBegin, animationDuration = _this$props4.animationDuration, animationEasing = _this$props4.animationEasing, animationId = _this$props4.animationId, animateNewValues = _this$props4.animateNewValues, width = _this$props4.width, height = _this$props4.height;
                var _this$state = this.state, prevPoints = _this$state.prevPoints, totalLength = _this$state.totalLength;
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_smooth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    begin: animationBegin,
                    duration: animationDuration,
                    isActive: isAnimationActive,
                    easing: animationEasing,
                    from: {
                        t: 0
                    },
                    to: {
                        t: 1
                    },
                    key: "line-".concat(animationId),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function(_ref) {
                    var t = _ref.t;
                    if (prevPoints) {
                        var prevPointsDiffFactor = prevPoints.length / points.length;
                        var stepData = points.map(function(entry, index) {
                            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                            if (prevPoints[prevPointIndex]) {
                                var prev = prevPoints[prevPointIndex];
                                var interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .k4)(prev.x, entry.x);
                                var interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .k4)(prev.y, entry.y);
                                return _objectSpread(_objectSpread({}, entry), {}, {
                                    x: interpolatorX(t),
                                    y: interpolatorY(t)
                                });
                            }
                            // magic number of faking previous x and y location
                            if (animateNewValues) {
                                var _interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .k4)(width * 2, entry.x);
                                var _interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .k4)(height / 2, entry.y);
                                return _objectSpread(_objectSpread({}, entry), {}, {
                                    x: _interpolatorX(t),
                                    y: _interpolatorY(t)
                                });
                            }
                            return _objectSpread(_objectSpread({}, entry), {}, {
                                x: entry.x,
                                y: entry.y
                            });
                        });
                        return _this2.renderCurveStatically(stepData, needClip, clipPathId);
                    }
                    var interpolator = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_5__/* .interpolateNumber */ .k4)(0, totalLength);
                    var curLength = interpolator(t);
                    var currentStrokeDasharray;
                    if (strokeDasharray) {
                        var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function(num) {
                            return parseFloat(num);
                        });
                        currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
                    } else {
                        currentStrokeDasharray = _this2.generateSimpleStrokeDasharray(totalLength, curLength);
                    }
                    return _this2.renderCurveStatically(points, needClip, clipPathId, {
                        strokeDasharray: currentStrokeDasharray
                    });
                });
            }
        },
        {
            key: "renderCurve",
            value: function renderCurve(needClip, clipPathId) {
                var _this$props5 = this.props, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
                var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, totalLength = _this$state2.totalLength;
                if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(prevPoints, points))) {
                    return this.renderCurveWithAnimation(needClip, clipPathId);
                }
                return this.renderCurveStatically(points, needClip, clipPathId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _filterProps;
                var _this$props6 = this.props, hide = _this$props6.hide, dot = _this$props6.dot, points = _this$props6.points, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, top = _this$props6.top, left = _this$props6.left, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, id = _this$props6.id;
                if (hide || !points || !points.length) {
                    return null;
                }
                var isAnimationFinished = this.state.isAnimationFinished;
                var hasSinglePoint = points.length === 1;
                var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("recharts-line", className);
                var needClipX = xAxis && xAxis.allowDataOverflow;
                var needClipY = yAxis && yAxis.allowDataOverflow;
                var needClip = needClipX || needClipY;
                var clipPathId = lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(id) ? this.id : id;
                var _ref2 = (_filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .filterProps */ .L6)(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
                    r: 3,
                    strokeWidth: 2
                }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
                var _ref3 = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_6__/* .isDotProps */ .$k)(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
                var dotSize = r * 2 + strokeWidth;
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, {
                    className: layerClass
                }, needClipX || needClipY ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
                    id: "clipPath-".concat(clipPathId)
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
                    x: needClipX ? left : left - width / 2,
                    y: needClipY ? top : top - height / 2,
                    width: needClipX ? width : width * 2,
                    height: needClipY ? height : height * 2
                })), !clipDot && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
                    id: "clipPath-dots-".concat(clipPathId)
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
                    x: left - dotSize / 2,
                    y: top - dotSize / 2,
                    width: width + dotSize,
                    height: height + dotSize
                }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(needClip, clipPathId), (hasSinglePoint || dot) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && _component_LabelList__WEBPACK_IMPORTED_MODULE_12__/* .LabelList */ .e.renderCallByParent(this.props, points));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.animationId !== prevState.prevAnimationId) {
                    return {
                        prevAnimationId: nextProps.animationId,
                        curPoints: nextProps.points,
                        prevPoints: prevState.curPoints
                    };
                }
                if (nextProps.points !== prevState.curPoints) {
                    return {
                        curPoints: nextProps.points
                    };
                }
                return null;
            }
        },
        {
            key: "repeat",
            value: function repeat(lines, count) {
                var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [
                    0
                ]) : lines;
                var result = [];
                for(var i = 0; i < count; ++i){
                    result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
                }
                return result;
            }
        },
        {
            key: "renderDotItem",
            value: function renderDotItem(option, props) {
                var dotItem;
                if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(option)) {
                    dotItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(option, props);
                } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(option)) {
                    dotItem = option(props);
                } else {
                    var className = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("recharts-line-dot", typeof option !== "boolean" ? option.className : "");
                    dotItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Dot__WEBPACK_IMPORTED_MODULE_13__/* .Dot */ .o, _extends({}, props, {
                        className: className
                    }));
                }
                return dotItem;
            }
        }
    ]);
    return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
_defineProperty(Line, "displayName", "Line");
_defineProperty(Line, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    fill: "#fff",
    points: [],
    isAnimationActive: !_util_Global__WEBPACK_IMPORTED_MODULE_14__/* .Global */ .x.isSsr,
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    hide: false,
    label: false
});
/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */ _defineProperty(Line, "getComposedData", function(_ref4) {
    var props = _ref4.props, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, dataKey = _ref4.dataKey, bandSize = _ref4.bandSize, displayedData = _ref4.displayedData, offset = _ref4.offset;
    var layout = props.layout;
    var points = displayedData.map(function(entry, index) {
        var value = (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getValueByDataKey */ .F$)(entry, dataKey);
        if (layout === "horizontal") {
            return {
                x: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getCateCoordinateOfLine */ .Hv)({
                    axis: xAxis,
                    ticks: xAxisTicks,
                    bandSize: bandSize,
                    entry: entry,
                    index: index
                }),
                y: lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(value) ? null : yAxis.scale(value),
                value: value,
                payload: entry
            };
        }
        return {
            x: lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(value) ? null : xAxis.scale(value),
            y: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_8__/* .getCateCoordinateOfLine */ .Hv)({
                axis: yAxis,
                ticks: yAxisTicks,
                bandSize: bandSize,
                entry: entry,
                index: index
            }),
            value: value,
            payload: entry
        };
    });
    return _objectSpread({
        points: points,
        layout: layout
    }, offset);
});


/***/ }),

/***/ 16753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var _generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91965);
/* harmony import */ var _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93390);
/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66845);
/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84168);
/* harmony import */ var _util_CartesianUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64239);
/**
 * @fileOverview Line Chart
 */ 




var LineChart = (0,_generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__/* .generateCategoricalChart */ .z)({
    chartName: "LineChart",
    GraphicalChild: _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__/* .Line */ .x,
    axisComponents: [
        {
            axisType: "xAxis",
            AxisComp: _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_2__/* .XAxis */ .K
        },
        {
            axisType: "yAxis",
            AxisComp: _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_3__/* .YAxis */ .B
        }
    ],
    formatAxisMap: _util_CartesianUtils__WEBPACK_IMPORTED_MODULE_4__/* .formatAxisMap */ .t9
});


/***/ })

};
;