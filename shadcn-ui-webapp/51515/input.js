"use strict";
exports.id = 51515;
exports.ids = [51515];
exports.modules = {

/***/ 34646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Area)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49193);
/* harmony import */ var react_smooth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27173);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9299);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24934);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52490);
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4071);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shape_Curve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32860);
/* harmony import */ var _shape_Dot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69219);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68874);
/* harmony import */ var _component_LabelList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64605);
/* harmony import */ var _util_Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88127);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54491);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86837);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29480);
var _excluded = [
    "layout",
    "type",
    "stroke",
    "connectNulls",
    "isRange",
    "ref"
];
var _Area;
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
 * @fileOverview Area
 */ 















var Area = /*#__PURE__*/ function(_PureComponent) {
    _inherits(Area, _PureComponent);
    function Area() {
        var _this;
        _classCallCheck(this, Area);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Area, [].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
            isAnimationFinished: true
        });
        _defineProperty(_assertThisInitialized(_this), "id", (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .uniqueId */ .EL)("recharts-area-"));
        _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function() {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({
                isAnimationFinished: true
            });
            if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(onAnimationEnd)) {
                onAnimationEnd();
            }
        });
        _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function() {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({
                isAnimationFinished: false
            });
            if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(onAnimationStart)) {
                onAnimationStart();
            }
        });
        return _this;
    }
    _createClass(Area, [
        {
            key: "renderDots",
            value: function renderDots(needClip, clipDot, clipPathId) {
                var isAnimationActive = this.props.isAnimationActive;
                var isAnimationFinished = this.state.isAnimationFinished;
                if (isAnimationActive && !isAnimationFinished) {
                    return null;
                }
                var _this$props = this.props, dot = _this$props.dot, points = _this$props.points, dataKey = _this$props.dataKey;
                var areaProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(this.props, false);
                var customDotProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(dot, true);
                var dots = points.map(function(entry, i) {
                    var dotProps = _objectSpread(_objectSpread(_objectSpread({
                        key: "dot-".concat(i),
                        r: 3
                    }, areaProps), customDotProps), {}, {
                        index: i,
                        cx: entry.x,
                        cy: entry.y,
                        dataKey: dataKey,
                        value: entry.value,
                        payload: entry.payload,
                        points: points
                    });
                    return Area.renderDotItem(dot, dotProps);
                });
                var dotsProps = {
                    clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
                };
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, _extends({
                    className: "recharts-area-dots"
                }, dotsProps), dots);
            }
        },
        {
            key: "renderHorizontalRect",
            value: function renderHorizontalRect(alpha) {
                var _this$props2 = this.props, baseLine = _this$props2.baseLine, points = _this$props2.points, strokeWidth = _this$props2.strokeWidth;
                var startX = points[0].x;
                var endX = points[points.length - 1].x;
                var width = alpha * Math.abs(startX - endX);
                var maxY = lodash_max__WEBPACK_IMPORTED_MODULE_3___default()(points.map(function(entry) {
                    return entry.y || 0;
                }));
                if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(baseLine) && typeof baseLine === "number") {
                    maxY = Math.max(baseLine, maxY);
                } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
                    maxY = Math.max(lodash_max__WEBPACK_IMPORTED_MODULE_3___default()(baseLine.map(function(entry) {
                        return entry.y || 0;
                    })), maxY);
                }
                if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(maxY)) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
                        x: startX < endX ? startX : startX - width,
                        y: 0,
                        width: width,
                        height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
                    });
                }
                return null;
            }
        },
        {
            key: "renderVerticalRect",
            value: function renderVerticalRect(alpha) {
                var _this$props3 = this.props, baseLine = _this$props3.baseLine, points = _this$props3.points, strokeWidth = _this$props3.strokeWidth;
                var startY = points[0].y;
                var endY = points[points.length - 1].y;
                var height = alpha * Math.abs(startY - endY);
                var maxX = lodash_max__WEBPACK_IMPORTED_MODULE_3___default()(points.map(function(entry) {
                    return entry.x || 0;
                }));
                if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(baseLine) && typeof baseLine === "number") {
                    maxX = Math.max(baseLine, maxX);
                } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
                    maxX = Math.max(lodash_max__WEBPACK_IMPORTED_MODULE_3___default()(baseLine.map(function(entry) {
                        return entry.x || 0;
                    })), maxX);
                }
                if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(maxX)) {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
                        x: 0,
                        y: startY < endY ? startY : startY - height,
                        width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
                        height: Math.floor(height)
                    });
                }
                return null;
            }
        },
        {
            key: "renderClipRect",
            value: function renderClipRect(alpha) {
                var layout = this.props.layout;
                if (layout === "vertical") {
                    return this.renderVerticalRect(alpha);
                }
                return this.renderHorizontalRect(alpha);
            }
        },
        {
            key: "renderAreaStatically",
            value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
                var _this$props4 = this.props, layout = _this$props4.layout, type = _this$props4.type, stroke = _this$props4.stroke, connectNulls = _this$props4.connectNulls, isRange = _this$props4.isRange, ref = _this$props4.ref, others = _objectWithoutProperties(_this$props4, _excluded);
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, {
                    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Curve__WEBPACK_IMPORTED_MODULE_10__/* .Curve */ .H, _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(others, true), {
                    points: points,
                    connectNulls: connectNulls,
                    type: type,
                    baseLine: baseLine,
                    layout: layout,
                    stroke: "none",
                    className: "recharts-area-area"
                })), stroke !== "none" && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Curve__WEBPACK_IMPORTED_MODULE_10__/* .Curve */ .H, _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(this.props, false), {
                    className: "recharts-area-curve",
                    layout: layout,
                    type: type,
                    connectNulls: connectNulls,
                    fill: "none",
                    points: points
                })), stroke !== "none" && isRange && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Curve__WEBPACK_IMPORTED_MODULE_10__/* .Curve */ .H, _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(this.props, false), {
                    className: "recharts-area-curve",
                    layout: layout,
                    type: type,
                    connectNulls: connectNulls,
                    fill: "none",
                    points: baseLine
                })));
            }
        },
        {
            key: "renderAreaWithAnimation",
            value: function renderAreaWithAnimation(needClip, clipPathId) {
                var _this2 = this;
                var _this$props5 = this.props, points = _this$props5.points, baseLine = _this$props5.baseLine, isAnimationActive = _this$props5.isAnimationActive, animationBegin = _this$props5.animationBegin, animationDuration = _this$props5.animationDuration, animationEasing = _this$props5.animationEasing, animationId = _this$props5.animationId;
                var _this$state = this.state, prevPoints = _this$state.prevPoints, prevBaseLine = _this$state.prevBaseLine;
                // const clipPathId = isNil(id) ? this.id : id;
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
                    key: "area-".concat(animationId),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function(_ref) {
                    var t = _ref.t;
                    if (prevPoints) {
                        var prevPointsDiffFactor = prevPoints.length / points.length;
                        // update animtaion
                        var stepPoints = points.map(function(entry, index) {
                            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                            if (prevPoints[prevPointIndex]) {
                                var prev = prevPoints[prevPointIndex];
                                var interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prev.x, entry.x);
                                var interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prev.y, entry.y);
                                return _objectSpread(_objectSpread({}, entry), {}, {
                                    x: interpolatorX(t),
                                    y: interpolatorY(t)
                                });
                            }
                            return entry;
                        });
                        var stepBaseLine;
                        if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(baseLine) && typeof baseLine === "number") {
                            var interpolator = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prevBaseLine, baseLine);
                            stepBaseLine = interpolator(t);
                        } else if (lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(baseLine) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_5___default()(baseLine)) {
                            var _interpolator = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prevBaseLine, 0);
                            stepBaseLine = _interpolator(t);
                        } else {
                            stepBaseLine = baseLine.map(function(entry, index) {
                                var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                                if (prevBaseLine[prevPointIndex]) {
                                    var prev = prevBaseLine[prevPointIndex];
                                    var interpolatorX = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prev.x, entry.x);
                                    var interpolatorY = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .interpolateNumber */ .k4)(prev.y, entry.y);
                                    return _objectSpread(_objectSpread({}, entry), {}, {
                                        x: interpolatorX(t),
                                        y: interpolatorY(t)
                                    });
                                }
                                return entry;
                            });
                        }
                        return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
                    }
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", {
                        id: "animationClipPath-".concat(clipPathId)
                    }, _this2.renderClipRect(t))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_9__/* .Layer */ .m, {
                        clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
                    }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
                });
            }
        },
        {
            key: "renderArea",
            value: function renderArea(needClip, clipPathId) {
                var _this$props6 = this.props, points = _this$props6.points, baseLine = _this$props6.baseLine, isAnimationActive = _this$props6.isAnimationActive;
                var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, prevBaseLine = _this$state2.prevBaseLine, totalLength = _this$state2.totalLength;
                if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(prevPoints, points) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(prevBaseLine, baseLine))) {
                    return this.renderAreaWithAnimation(needClip, clipPathId);
                }
                return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _filterProps;
                var _this$props7 = this.props, hide = _this$props7.hide, dot = _this$props7.dot, points = _this$props7.points, className = _this$props7.className, top = _this$props7.top, left = _this$props7.left, xAxis = _this$props7.xAxis, yAxis = _this$props7.yAxis, width = _this$props7.width, height = _this$props7.height, isAnimationActive = _this$props7.isAnimationActive, id = _this$props7.id;
                if (hide || !points || !points.length) {
                    return null;
                }
                var isAnimationFinished = this.state.isAnimationFinished;
                var hasSinglePoint = points.length === 1;
                var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("recharts-area", className);
                var needClipX = xAxis && xAxis.allowDataOverflow;
                var needClipY = yAxis && yAxis.allowDataOverflow;
                var needClip = needClipX || needClipY;
                var clipPathId = lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(id) ? this.id : id;
                var _ref2 = (_filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
                    r: 3,
                    strokeWidth: 2
                }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
                var _ref3 = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .isDotProps */ .$k)(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
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
                }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && _component_LabelList__WEBPACK_IMPORTED_MODULE_12__/* .LabelList */ .e.renderCallByParent(this.props, points));
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
                        curBaseLine: nextProps.baseLine,
                        prevPoints: prevState.curPoints,
                        prevBaseLine: prevState.curBaseLine
                    };
                }
                if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
                    return {
                        curPoints: nextProps.points,
                        curBaseLine: nextProps.baseLine
                    };
                }
                return null;
            }
        }
    ]);
    return Area;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
_Area = Area;
_defineProperty(Area, "displayName", "Area");
_defineProperty(Area, "defaultProps", {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: false,
    // points of area
    points: [],
    dot: false,
    activeDot: true,
    hide: false,
    isAnimationActive: !_util_Global__WEBPACK_IMPORTED_MODULE_13__/* .Global */ .x.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
});
_defineProperty(Area, "getBaseValue", function(props, item, xAxis, yAxis) {
    var layout = props.layout, chartBaseValue = props.baseValue;
    var itemBaseValue = item.props.baseValue;
    // The baseValue can be defined both on the AreaChart as well as on the Area.
    // The value for the item takes precedence.
    var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
    if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(baseValue) && typeof baseValue === "number") {
        return baseValue;
    }
    var numericAxis = layout === "horizontal" ? yAxis : xAxis;
    var domain = numericAxis.scale.domain();
    if (numericAxis.type === "number") {
        var domainMax = Math.max(domain[0], domain[1]);
        var domainMin = Math.min(domain[0], domain[1]);
        if (baseValue === "dataMin") {
            return domainMin;
        }
        if (baseValue === "dataMax") {
            return domainMax;
        }
        return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
    }
    if (baseValue === "dataMin") {
        return domain[0];
    }
    if (baseValue === "dataMax") {
        return domain[1];
    }
    return domain[0];
});
_defineProperty(Area, "getComposedData", function(_ref4) {
    var props = _ref4.props, item = _ref4.item, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, bandSize = _ref4.bandSize, dataKey = _ref4.dataKey, stackedData = _ref4.stackedData, dataStartIndex = _ref4.dataStartIndex, displayedData = _ref4.displayedData, offset = _ref4.offset;
    var layout = props.layout;
    var hasStack = stackedData && stackedData.length;
    var baseValue = _Area.getBaseValue(props, item, xAxis, yAxis);
    var isHorizontalLayout = layout === "horizontal";
    var isRange = false;
    var points = displayedData.map(function(entry, index) {
        var value;
        if (hasStack) {
            value = stackedData[dataStartIndex + index];
        } else {
            value = (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_14__/* .getValueByDataKey */ .F$)(entry, dataKey);
            if (!Array.isArray(value)) {
                value = [
                    baseValue,
                    value
                ];
            } else {
                isRange = true;
            }
        }
        var isBreakPoint = value[1] == null || hasStack && (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_14__/* .getValueByDataKey */ .F$)(entry, dataKey) == null;
        if (isHorizontalLayout) {
            return {
                x: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_14__/* .getCateCoordinateOfLine */ .Hv)({
                    axis: xAxis,
                    ticks: xAxisTicks,
                    bandSize: bandSize,
                    entry: entry,
                    index: index
                }),
                y: isBreakPoint ? null : yAxis.scale(value[1]),
                value: value,
                payload: entry
            };
        }
        return {
            x: isBreakPoint ? null : xAxis.scale(value[1]),
            y: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_14__/* .getCateCoordinateOfLine */ .Hv)({
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
    var baseLine;
    if (hasStack || isRange) {
        baseLine = points.map(function(entry) {
            var x = Array.isArray(entry.value) ? entry.value[0] : null;
            if (isHorizontalLayout) {
                return {
                    x: entry.x,
                    y: x != null && entry.y != null ? yAxis.scale(x) : null
                };
            }
            return {
                x: x != null ? xAxis.scale(x) : null,
                y: entry.y
            };
        });
    } else {
        baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
    }
    return _objectSpread({
        points: points,
        baseLine: baseLine,
        layout: layout,
        isRange: isRange
    }, offset);
});
_defineProperty(Area, "renderDotItem", function(option, props) {
    var dotItem;
    if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(option)) {
        dotItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(option, props);
    } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(option)) {
        dotItem = option(props);
    } else {
        var className = (0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("recharts-area-dot", typeof option !== "boolean" ? option.className : "");
        dotItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shape_Dot__WEBPACK_IMPORTED_MODULE_15__/* .Dot */ .o, _extends({}, props, {
            className: className
        }));
    }
    return dotItem;
});


/***/ }),

/***/ 73860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CartesianGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_LogUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31640);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54491);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29480);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86837);
/* harmony import */ var _getTicks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67601);
/* harmony import */ var _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64969);
/* harmony import */ var _context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38306);
var _excluded = [
    "x1",
    "y1",
    "x2",
    "y2",
    "key"
], _excluded2 = [
    "offset"
];
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
/**
 * @fileOverview Cartesian Grid
 */ 








/**
 * The <CartesianGrid horizontal
 */ var Background = function Background(props) {
    var fill = props.fill;
    if (!fill || fill === "none") {
        return null;
    }
    var fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "none",
        fill: fill,
        fillOpacity: fillOpacity,
        className: "recharts-cartesian-grid-bg"
    });
};
function renderLineItem(option, props) {
    var lineItem;
    if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(option)) {
        // @ts-expect-error typescript does not see the props type when cloning an element
        lineItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(option, props);
    } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(option)) {
        lineItem = option(props);
    } else {
        var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, others = _objectWithoutProperties(props, _excluded);
        var _filterProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .L6)(others, false), __ = _filterProps.offset, restOfFilteredProps = _objectWithoutProperties(_filterProps, _excluded2);
        lineItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({}, restOfFilteredProps, {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            fill: "none",
            key: key
        }));
    }
    return lineItem;
}
function HorizontalGridLines(props) {
    var x = props.x, width = props.width, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? true : _props$horizontal, horizontalPoints = props.horizontalPoints;
    if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
        return null;
    }
    var items = horizontalPoints.map(function(entry, i) {
        var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
            x1: x,
            y1: entry,
            x2: x + width,
            y2: entry,
            key: "line-".concat(i),
            index: i
        });
        return renderLineItem(horizontal, lineItemProps);
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
    }, items);
}
function VerticalGridLines(props) {
    var y = props.y, height = props.height, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, verticalPoints = props.verticalPoints;
    if (!vertical || !verticalPoints || !verticalPoints.length) {
        return null;
    }
    var items = verticalPoints.map(function(entry, i) {
        var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
            x1: entry,
            y1: y,
            x2: entry,
            y2: y + height,
            key: "line-".concat(i),
            index: i
        });
        return renderLineItem(vertical, lineItemProps);
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid-vertical"
    }, items);
}
function HorizontalStripes(props) {
    var horizontalFill = props.horizontalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, horizontalPoints = props.horizontalPoints, _props$horizontal2 = props.horizontal, horizontal = _props$horizontal2 === void 0 ? true : _props$horizontal2;
    if (!horizontal || !horizontalFill || !horizontalFill.length) {
        return null;
    }
    // Why =y -y? I was trying to find any difference that this makes, with floating point numbers and edge cases but ... nothing.
    var roundedSortedHorizontalPoints = horizontalPoints.map(function(e) {
        return Math.round(e + y - y);
    }).sort(function(a, b) {
        return a - b;
    });
    // Why is this condition `!==` instead of `<=` ?
    if (y !== roundedSortedHorizontalPoints[0]) {
        roundedSortedHorizontalPoints.unshift(0);
    }
    var items = roundedSortedHorizontalPoints.map(function(entry, i) {
        // Why do we strip only the last stripe if it is invisible, and not all invisible stripes?
        var lastStripe = !roundedSortedHorizontalPoints[i + 1];
        var lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
        if (lineHeight <= 0) {
            return null;
        }
        var colorIndex = i % horizontalFill.length;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
            key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
            ,
            y: entry,
            x: x,
            height: lineHeight,
            width: width,
            stroke: "none",
            fill: horizontalFill[colorIndex],
            fillOpacity: fillOpacity,
            className: "recharts-cartesian-grid-bg"
        });
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
    }, items);
}
function VerticalStripes(props) {
    var _props$vertical2 = props.vertical, vertical = _props$vertical2 === void 0 ? true : _props$vertical2, verticalFill = props.verticalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, verticalPoints = props.verticalPoints;
    if (!vertical || !verticalFill || !verticalFill.length) {
        return null;
    }
    var roundedSortedVerticalPoints = verticalPoints.map(function(e) {
        return Math.round(e + x - x);
    }).sort(function(a, b) {
        return a - b;
    });
    if (x !== roundedSortedVerticalPoints[0]) {
        roundedSortedVerticalPoints.unshift(0);
    }
    var items = roundedSortedVerticalPoints.map(function(entry, i) {
        var lastStripe = !roundedSortedVerticalPoints[i + 1];
        var lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
        if (lineWidth <= 0) {
            return null;
        }
        var colorIndex = i % verticalFill.length;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
            key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
            ,
            x: entry,
            y: y,
            width: lineWidth,
            height: height,
            stroke: "none",
            fill: verticalFill[colorIndex],
            fillOpacity: fillOpacity,
            className: "recharts-cartesian-grid-bg"
        });
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
    }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator(_ref, syncWithTicks) {
    var xAxis = _ref.xAxis, width = _ref.width, height = _ref.height, offset = _ref.offset;
    return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .Rf)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .O.defaultProps), xAxis), {}, {
        ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .uY)(xAxis, true),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        }
    })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator(_ref2, syncWithTicks) {
    var yAxis = _ref2.yAxis, width = _ref2.width, height = _ref2.height, offset = _ref2.offset;
    return (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getCoordinatesOfGrid */ .Rf)((0,_getTicks__WEBPACK_IMPORTED_MODULE_4__/* .getTicks */ .f)(_objectSpread(_objectSpread(_objectSpread({}, _CartesianAxis__WEBPACK_IMPORTED_MODULE_5__/* .CartesianAxis */ .O.defaultProps), yAxis), {}, {
        ticks: (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_3__/* .getTicksOfAxis */ .uY)(yAxis, true),
        viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
        }
    })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [],
    // The abscissas of vertical grid lines
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    // The fill of colors of grid lines
    verticalFill: [],
    horizontalFill: []
};
function CartesianGrid(props) {
    var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
    var chartWidth = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartWidth */ .zn)();
    var chartHeight = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useChartHeight */ .Mw)();
    var offset = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useOffset */ .qD)();
    var propsIncludingDefaults = _objectSpread(_objectSpread({}, props), {}, {
        stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
        fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
        horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
        horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
        vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
        verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
        x: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.x) ? props.x : offset.left,
        y: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.y) ? props.y : offset.top,
        width: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.width) ? props.width : offset.width,
        height: (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(props.height) ? props.height : offset.height
    });
    var x = propsIncludingDefaults.x, y = propsIncludingDefaults.y, width = propsIncludingDefaults.width, height = propsIncludingDefaults.height, syncWithTicks = propsIncludingDefaults.syncWithTicks, horizontalValues = propsIncludingDefaults.horizontalValues, verticalValues = propsIncludingDefaults.verticalValues;
    // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
    var xAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useArbitraryXAxis */ .CW)();
    // @ts-expect-error the scale prop is mixed up - we need to untagle this at some point
    var yAxis = (0,_context_chartLayoutContext__WEBPACK_IMPORTED_MODULE_6__/* .useYAxisWithFiniteDomainOrRandom */ .Nf)();
    if (!(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(width) || width <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(height) || height <= 0 || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(x) || x !== +x || !(0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_7__/* .isNumber */ .hj)(y) || y !== +y) {
        return null;
    }
    /*
   * verticalCoordinatesGenerator and horizontalCoordinatesGenerator are defined
   * outside of the propsIncludingDefaults because they were never part of the original props
   * and they were never passed as a prop down to horizontal/vertical custom elements.
   * If we add these two to propsIncludingDefaults then we are changing public API.
   * Not a bad thing per se but also not necessary.
   */ var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
    var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
    var horizontalPoints = propsIncludingDefaults.horizontalPoints, verticalPoints = propsIncludingDefaults.verticalPoints;
    // No horizontal points are specified
    if ((!horizontalPoints || !horizontalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(horizontalCoordinatesGenerator)) {
        var isHorizontalValues = horizontalValues && horizontalValues.length;
        var generatorResult = horizontalCoordinatesGenerator({
            yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, {
                ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
            }) : undefined,
            width: chartWidth,
            height: chartHeight,
            offset: offset
        }, isHorizontalValues ? true : syncWithTicks);
        (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .Z)(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(generatorResult), "]"));
        if (Array.isArray(generatorResult)) {
            horizontalPoints = generatorResult;
        }
    }
    // No vertical points are specified
    if ((!verticalPoints || !verticalPoints.length) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(verticalCoordinatesGenerator)) {
        var isVerticalValues = verticalValues && verticalValues.length;
        var _generatorResult = verticalCoordinatesGenerator({
            xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, {
                ticks: isVerticalValues ? verticalValues : xAxis.ticks
            }) : undefined,
            width: chartWidth,
            height: chartHeight,
            offset: offset
        }, isVerticalValues ? true : syncWithTicks);
        (0,_util_LogUtils__WEBPACK_IMPORTED_MODULE_8__/* .warn */ .Z)(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(_generatorResult), "]"));
        if (Array.isArray(_generatorResult)) {
            verticalPoints = _generatorResult;
        }
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        className: "recharts-cartesian-grid"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Background, {
        fill: propsIncludingDefaults.fill,
        fillOpacity: propsIncludingDefaults.fillOpacity,
        x: propsIncludingDefaults.x,
        y: propsIncludingDefaults.y,
        width: propsIncludingDefaults.width,
        height: propsIncludingDefaults.height
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
        offset: offset,
        horizontalPoints: horizontalPoints,
        xAxis: xAxis,
        yAxis: yAxis
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
        offset: offset,
        verticalPoints: verticalPoints,
        xAxis: xAxis,
        yAxis: yAxis
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, {
        horizontalPoints: horizontalPoints
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VerticalStripes, _extends({}, propsIncludingDefaults, {
        verticalPoints: verticalPoints
    })));
}
CartesianGrid.displayName = "CartesianGrid";


/***/ }),

/***/ 59181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ AreaChart)
/* harmony export */ });
/* harmony import */ var _generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91965);
/* harmony import */ var _cartesian_Area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34646);
/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66845);
/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84168);
/* harmony import */ var _util_CartesianUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64239);
/**
 * @fileOverview Area Chart
 */ 




var AreaChart = (0,_generateCategoricalChart__WEBPACK_IMPORTED_MODULE_0__/* .generateCategoricalChart */ .z)({
    chartName: "AreaChart",
    GraphicalChild: _cartesian_Area__WEBPACK_IMPORTED_MODULE_1__/* .Area */ .u,
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