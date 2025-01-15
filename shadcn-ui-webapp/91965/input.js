exports.id = 91965;
exports.ids = [91965];
exports.modules = {

/***/ 11738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ band),
  x: () => (/* binding */ point)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/range.js
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js
var init = __webpack_require__(78903);
// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js + 1 modules
var ordinal = __webpack_require__(86306);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js




function band() {
  var scale = (0,ordinal/* default */.Z)().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return init/* initRange */.o.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ 78903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ initInterpolator),
/* harmony export */   o: () => (/* binding */ initRange)
/* harmony export */ });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ 86306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ordinal),
  O: () => (/* binding */ implicit)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/internmap@2.0.3/node_modules/internmap/src/index.js
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}

class InternSet extends Set {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}

function intern_get({_intern, _key}, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}

function intern_delete({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js
var init = __webpack_require__(78903);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js



const implicit = Symbol("implicit");

function ordinal() {
  var index = new InternMap(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    let i = index.get(d);
    if (i === undefined) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range[i % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  init/* initRange */.o.apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ 24415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export slice */
var slice = Array.prototype.slice;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 96402:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 41317:
/***/ ((module) => {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),

/***/ 61940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(41522);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 21275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(18903);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ }),

/***/ 96345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33575);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ 20731:
/***/ ((module) => {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),

/***/ 58196:
/***/ ((module) => {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),

/***/ 41185:
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ 57923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(18903);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ 40719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(88221),
    isArrayLike = __webpack_require__(67940),
    keys = __webpack_require__(45630);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 4541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRange = __webpack_require__(41185),
    isIterateeCall = __webpack_require__(36946),
    toFinite = __webpack_require__(63021);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ 83169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(2247);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 28119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEvery = __webpack_require__(41317),
    baseEvery = __webpack_require__(21275),
    baseIteratee = __webpack_require__(88221),
    isArray = __webpack_require__(43186),
    isIterateeCall = __webpack_require__(36946);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),

/***/ 85963:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(40719),
    findIndex = __webpack_require__(45486);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 45486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(15519),
    baseIteratee = __webpack_require__(88221),
    toInteger = __webpack_require__(16736);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 47694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(76284),
    map = __webpack_require__(13993);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),

/***/ 89649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(75602),
    isObjectLike = __webpack_require__(81230);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),

/***/ 4071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(49921);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 74284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(75602),
    getPrototype = __webpack_require__(83169),
    isObjectLike = __webpack_require__(81230);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 47394:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 13993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(42318),
    baseIteratee = __webpack_require__(88221),
    baseMap = __webpack_require__(96855),
    isArray = __webpack_require__(43186);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 90304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(61940),
    baseForOwn = __webpack_require__(66905),
    baseIteratee = __webpack_require__(88221);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ 9299:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(96345),
    baseGt = __webpack_require__(20731),
    identity = __webpack_require__(56188);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),

/***/ 91948:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(96345),
    baseLt = __webpack_require__(58196),
    identity = __webpack_require__(56188);

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ }),

/***/ 14121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createRange = __webpack_require__(4541);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ 38378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySome = __webpack_require__(76014),
    baseIteratee = __webpack_require__(88221),
    baseSome = __webpack_require__(57923),
    isArray = __webpack_require__(43186),
    isIterateeCall = __webpack_require__(36946);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ 63021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(60564);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 16736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(63021);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 40721:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(49738);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 77104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(40721)();
}


/***/ }),

/***/ 49738:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 27173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* binding */ es6)
});

// UNUSED EXPORTS: AnimateGroup, configBezier, configSpring

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(77104);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/dist/esm/index.mjs
var getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var esm_hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Combine two comparators into a single comparators.
 */
function combineComparators(comparatorA, comparatorB) {
    return function isEqual(a, b, state) {
        return comparatorA(a, b, state) && comparatorB(a, b, state);
    };
}
/**
 * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
 * for circular references to be safely included in the comparison without creating
 * stack overflows.
 */
function createIsCircular(areItemsEqual) {
    return function isCircular(a, b, state) {
        if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
            return areItemsEqual(a, b, state);
        }
        var cache = state.cache;
        var cachedA = cache.get(a);
        var cachedB = cache.get(b);
        if (cachedA && cachedB) {
            return cachedA === b && cachedB === a;
        }
        cache.set(a, b);
        cache.set(b, a);
        var result = areItemsEqual(a, b, state);
        cache.delete(a);
        cache.delete(b);
        return result;
    };
}
/**
 * Get the properties to strictly examine, which include both own properties that are
 * not enumerable and symbol properties.
 */
function getStrictProperties(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Whether the object contains the property passed as an own property.
 */
var hasOwn = Object.hasOwn ||
    (function (object, property) {
        return esm_hasOwnProperty.call(object, property);
    });
/**
 * Whether the values passed are strictly equal or both NaN.
 */
function sameValueZeroEqual(a, b) {
    return a || b ? a === b : a === b || (a !== a && b !== b);
}

var OWNER = '_owner';
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, keys = Object.keys;
/**
 * Whether the arrays are equal in value.
 */
function areArraysEqual(a, b, state) {
    var index = a.length;
    if (b.length !== index) {
        return false;
    }
    while (index-- > 0) {
        if (!state.equals(a[index], b[index], index, index, a, b, state)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the dates passed are equal in value.
 */
function areDatesEqual(a, b) {
    return sameValueZeroEqual(a.getTime(), b.getTime());
}
/**
 * Whether the `Map`s are equal in value.
 */
function areMapsEqual(a, b, state) {
    if (a.size !== b.size) {
        return false;
    }
    var matchedIndices = {};
    var aIterable = a.entries();
    var index = 0;
    var aResult;
    var bResult;
    while ((aResult = aIterable.next())) {
        if (aResult.done) {
            break;
        }
        var bIterable = b.entries();
        var hasMatch = false;
        var matchIndex = 0;
        while ((bResult = bIterable.next())) {
            if (bResult.done) {
                break;
            }
            var _a = aResult.value, aKey = _a[0], aValue = _a[1];
            var _b = bResult.value, bKey = _b[0], bValue = _b[1];
            if (!hasMatch &&
                !matchedIndices[matchIndex] &&
                (hasMatch =
                    state.equals(aKey, bKey, index, matchIndex, a, b, state) &&
                        state.equals(aValue, bValue, aKey, bKey, a, b, state))) {
                matchedIndices[matchIndex] = true;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
        index++;
    }
    return true;
}
/**
 * Whether the objects are equal in value.
 */
function areObjectsEqual(a, b, state) {
    var properties = keys(a);
    var index = properties.length;
    if (keys(b).length !== index) {
        return false;
    }
    var property;
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while (index-- > 0) {
        property = properties[index];
        if (property === OWNER &&
            (a.$$typeof || b.$$typeof) &&
            a.$$typeof !== b.$$typeof) {
            return false;
        }
        if (!hasOwn(b, property) ||
            !state.equals(a[property], b[property], property, property, a, b, state)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the objects are equal in value with strict property checking.
 */
function areObjectsEqualStrict(a, b, state) {
    var properties = getStrictProperties(a);
    var index = properties.length;
    if (getStrictProperties(b).length !== index) {
        return false;
    }
    var property;
    var descriptorA;
    var descriptorB;
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while (index-- > 0) {
        property = properties[index];
        if (property === OWNER &&
            (a.$$typeof || b.$$typeof) &&
            a.$$typeof !== b.$$typeof) {
            return false;
        }
        if (!hasOwn(b, property)) {
            return false;
        }
        if (!state.equals(a[property], b[property], property, property, a, b, state)) {
            return false;
        }
        descriptorA = getOwnPropertyDescriptor(a, property);
        descriptorB = getOwnPropertyDescriptor(b, property);
        if ((descriptorA || descriptorB) &&
            (!descriptorA ||
                !descriptorB ||
                descriptorA.configurable !== descriptorB.configurable ||
                descriptorA.enumerable !== descriptorB.enumerable ||
                descriptorA.writable !== descriptorB.writable)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the primitive wrappers passed are equal in value.
 */
function arePrimitiveWrappersEqual(a, b) {
    return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
/**
 * Whether the regexps passed are equal in value.
 */
function areRegExpsEqual(a, b) {
    return a.source === b.source && a.flags === b.flags;
}
/**
 * Whether the `Set`s are equal in value.
 */
function areSetsEqual(a, b, state) {
    if (a.size !== b.size) {
        return false;
    }
    var matchedIndices = {};
    var aIterable = a.values();
    var aResult;
    var bResult;
    while ((aResult = aIterable.next())) {
        if (aResult.done) {
            break;
        }
        var bIterable = b.values();
        var hasMatch = false;
        var matchIndex = 0;
        while ((bResult = bIterable.next())) {
            if (bResult.done) {
                break;
            }
            if (!hasMatch &&
                !matchedIndices[matchIndex] &&
                (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state))) {
                matchedIndices[matchIndex] = true;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the TypedArray instances are equal in value.
 */
function areTypedArraysEqual(a, b) {
    var index = a.length;
    if (b.length !== index) {
        return false;
    }
    while (index-- > 0) {
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}

var ARGUMENTS_TAG = '[object Arguments]';
var BOOLEAN_TAG = '[object Boolean]';
var DATE_TAG = '[object Date]';
var MAP_TAG = '[object Map]';
var NUMBER_TAG = '[object Number]';
var OBJECT_TAG = '[object Object]';
var REG_EXP_TAG = '[object RegExp]';
var SET_TAG = '[object Set]';
var STRING_TAG = '[object String]';
var isArray = Array.isArray;
var isTypedArray = typeof ArrayBuffer === 'function' && ArrayBuffer.isView
    ? ArrayBuffer.isView
    : null;
var esm_assign = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
/**
 * Create a comparator method based on the type-specific equality comparators passed.
 */
function createEqualityComparator(_a) {
    var areArraysEqual = _a.areArraysEqual, areDatesEqual = _a.areDatesEqual, areMapsEqual = _a.areMapsEqual, areObjectsEqual = _a.areObjectsEqual, arePrimitiveWrappersEqual = _a.arePrimitiveWrappersEqual, areRegExpsEqual = _a.areRegExpsEqual, areSetsEqual = _a.areSetsEqual, areTypedArraysEqual = _a.areTypedArraysEqual;
    /**
     * compare the value of the two objects and return true if they are equivalent in values
     */
    return function comparator(a, b, state) {
        // If the items are strictly equal, no need to do a value comparison.
        if (a === b) {
            return true;
        }
        // If the items are not non-nullish objects, then the only possibility
        // of them being equal but not strictly is if they are both `NaN`. Since
        // `NaN` is uniquely not equal to itself, we can use self-comparison of
        // both objects, which is faster than `isNaN()`.
        if (a == null ||
            b == null ||
            typeof a !== 'object' ||
            typeof b !== 'object') {
            return a !== a && b !== b;
        }
        var constructor = a.constructor;
        // Checks are listed in order of commonality of use-case:
        //   1. Common complex object types (plain object, array)
        //   2. Common data values (date, regexp)
        //   3. Less-common complex object types (map, set)
        //   4. Less-common data values (promise, primitive wrappers)
        // Inherently this is both subjective and assumptive, however
        // when reviewing comparable libraries in the wild this order
        // appears to be generally consistent.
        // Constructors should match, otherwise there is potential for false positives
        // between class and subclass or custom object and POJO.
        if (constructor !== b.constructor) {
            return false;
        }
        // `isPlainObject` only checks against the object's own realm. Cross-realm
        // comparisons are rare, and will be handled in the ultimate fallback, so
        // we can avoid capturing the string tag.
        if (constructor === Object) {
            return areObjectsEqual(a, b, state);
        }
        // `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
        // the string tag or doing an `instanceof` check.
        if (isArray(a)) {
            return areArraysEqual(a, b, state);
        }
        // `isTypedArray()` works on all possible TypedArray classes, so we can avoid
        // capturing the string tag or comparing against all possible constructors.
        if (isTypedArray != null && isTypedArray(a)) {
            return areTypedArraysEqual(a, b, state);
        }
        // Try to fast-path equality checks for other complex object types in the
        // same realm to avoid capturing the string tag. Strict equality is used
        // instead of `instanceof` because it is more performant for the common
        // use-case. If someone is subclassing a native class, it will be handled
        // with the string tag comparison.
        if (constructor === Date) {
            return areDatesEqual(a, b, state);
        }
        if (constructor === RegExp) {
            return areRegExpsEqual(a, b, state);
        }
        if (constructor === Map) {
            return areMapsEqual(a, b, state);
        }
        if (constructor === Set) {
            return areSetsEqual(a, b, state);
        }
        // Since this is a custom object, capture the string tag to determing its type.
        // This is reasonably performant in modern environments like v8 and SpiderMonkey.
        var tag = getTag(a);
        if (tag === DATE_TAG) {
            return areDatesEqual(a, b, state);
        }
        if (tag === REG_EXP_TAG) {
            return areRegExpsEqual(a, b, state);
        }
        if (tag === MAP_TAG) {
            return areMapsEqual(a, b, state);
        }
        if (tag === SET_TAG) {
            return areSetsEqual(a, b, state);
        }
        if (tag === OBJECT_TAG) {
            // The exception for value comparison is custom `Promise`-like class instances. These should
            // be treated the same as standard `Promise` objects, which means strict equality, and if
            // it reaches this point then that strict equality comparison has already failed.
            return (typeof a.then !== 'function' &&
                typeof b.then !== 'function' &&
                areObjectsEqual(a, b, state));
        }
        // If an arguments tag, it should be treated as a standard object.
        if (tag === ARGUMENTS_TAG) {
            return areObjectsEqual(a, b, state);
        }
        // As the penultimate fallback, check if the values passed are primitive wrappers. This
        // is very rare in modern JS, which is why it is deprioritized compared to all other object
        // types.
        if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
            return arePrimitiveWrappersEqual(a, b, state);
        }
        // If not matching any tags that require a specific type of comparison, then we hard-code false because
        // the only thing remaining is strict equality, which has already been compared. This is for a few reasons:
        //   - Certain types that cannot be introspected (e.g., `WeakMap`). For these types, this is the only
        //     comparison that can be made.
        //   - For types that can be introspected, but rarely have requirements to be compared
        //     (`ArrayBuffer`, `DataView`, etc.), the cost is avoided to prioritize the common
        //     use-cases (may be included in a future release, if requested enough).
        //   - For types that can be introspected but do not have an objective definition of what
        //     equality is (`Error`, etc.), the subjective decision is to be conservative and strictly compare.
        // In all cases, these decisions should be reevaluated based on changes to the language and
        // common development practices.
        return false;
    };
}
/**
 * Create the configuration object used for building comparators.
 */
function createEqualityComparatorConfig(_a) {
    var circular = _a.circular, createCustomConfig = _a.createCustomConfig, strict = _a.strict;
    var config = {
        areArraysEqual: strict
            ? areObjectsEqualStrict
            : areArraysEqual,
        areDatesEqual: areDatesEqual,
        areMapsEqual: strict
            ? combineComparators(areMapsEqual, areObjectsEqualStrict)
            : areMapsEqual,
        areObjectsEqual: strict
            ? areObjectsEqualStrict
            : areObjectsEqual,
        arePrimitiveWrappersEqual: arePrimitiveWrappersEqual,
        areRegExpsEqual: areRegExpsEqual,
        areSetsEqual: strict
            ? combineComparators(areSetsEqual, areObjectsEqualStrict)
            : areSetsEqual,
        areTypedArraysEqual: strict
            ? areObjectsEqualStrict
            : areTypedArraysEqual,
    };
    if (createCustomConfig) {
        config = esm_assign({}, config, createCustomConfig(config));
    }
    if (circular) {
        var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
        var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
        var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
        var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
        config = esm_assign({}, config, {
            areArraysEqual: areArraysEqual$1,
            areMapsEqual: areMapsEqual$1,
            areObjectsEqual: areObjectsEqual$1,
            areSetsEqual: areSetsEqual$1,
        });
    }
    return config;
}
/**
 * Default equality comparator pass-through, used as the standard `isEqual` creator for
 * use inside the built comparator.
 */
function createInternalEqualityComparator(compare) {
    return function (a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
        return compare(a, b, state);
    };
}
/**
 * Create the `isEqual` function used by the consuming application.
 */
function createIsEqual(_a) {
    var circular = _a.circular, comparator = _a.comparator, createState = _a.createState, equals = _a.equals, strict = _a.strict;
    if (createState) {
        return function isEqual(a, b) {
            var _a = createState(), _b = _a.cache, cache = _b === void 0 ? circular ? new WeakMap() : undefined : _b, meta = _a.meta;
            return comparator(a, b, {
                cache: cache,
                equals: equals,
                meta: meta,
                strict: strict,
            });
        };
    }
    if (circular) {
        return function isEqual(a, b) {
            return comparator(a, b, {
                cache: new WeakMap(),
                equals: equals,
                meta: undefined,
                strict: strict,
            });
        };
    }
    var state = {
        cache: undefined,
        equals: equals,
        meta: undefined,
        strict: strict,
    };
    return function isEqual(a, b) {
        return comparator(a, b, state);
    };
}

/**
 * Whether the items passed are deeply-equal in value.
 */
var deepEqual = createCustomEqual();
/**
 * Whether the items passed are deeply-equal in value based on strict comparison.
 */
var strictDeepEqual = createCustomEqual({ strict: true });
/**
 * Whether the items passed are deeply-equal in value, including circular references.
 */
var circularDeepEqual = createCustomEqual({ circular: true });
/**
 * Whether the items passed are deeply-equal in value, including circular references,
 * based on strict comparison.
 */
var strictCircularDeepEqual = createCustomEqual({
    circular: true,
    strict: true,
});
/**
 * Whether the items passed are shallowly-equal in value.
 */
var shallowEqual = createCustomEqual({
    createInternalComparator: function () { return sameValueZeroEqual; },
});
/**
 * Whether the items passed are shallowly-equal in value based on strict comparison
 */
var strictShallowEqual = createCustomEqual({
    strict: true,
    createInternalComparator: function () { return sameValueZeroEqual; },
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references.
 */
var circularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: function () { return sameValueZeroEqual; },
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references,
 * based on strict comparison.
 */
var strictCircularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: function () { return sameValueZeroEqual; },
    strict: true,
});
/**
 * Create a custom equality comparison method.
 *
 * This can be done to create very targeted comparisons in extreme hot-path scenarios
 * where the standard methods are not performant enough, but can also be used to provide
 * support for legacy environments that do not support expected features like
 * `RegExp.prototype.flags` out of the box.
 */
function createCustomEqual(options) {
    if (options === void 0) { options = {}; }
    var _a = options.circular, circular = _a === void 0 ? false : _a, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
    var config = createEqualityComparatorConfig(options);
    var comparator = createEqualityComparator(config);
    var equals = createCustomInternalComparator
        ? createCustomInternalComparator(comparator)
        : createInternalEqualityComparator(comparator);
    return createIsEqual({ circular: circular, comparator: comparator, createState: createState, equals: equals, strict: strict });
}


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/setRafTimeout.js
function safeRequestAnimationFrame(callback) {
  if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(callback);
}
function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currTime = -1;
  var shouldUpdate = function shouldUpdate(now) {
    if (currTime < 0) {
      currTime = now;
    }
    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      safeRequestAnimationFrame(shouldUpdate);
    }
  };
  requestAnimationFrame(shouldUpdate);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/AnimateManager.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createAnimateManager() {
  var currStyle = {};
  var handleChange = function handleChange() {
    return null;
  };
  var shouldStop = false;
  var setStyle = function setStyle(_style) {
    if (shouldStop) {
      return;
    }
    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }
      var styles = _style;
      var _styles = _toArray(styles),
        curr = _styles[0],
        restStyles = _styles.slice(1);
      if (typeof curr === 'number') {
        setRafTimeout(setStyle.bind(null, restStyles), curr);
        return;
      }
      setStyle(curr);
      setRafTimeout(setStyle.bind(null, restStyles));
      return;
    }
    if (_typeof(_style) === 'object') {
      currStyle = _style;
      handleChange(currStyle);
    }
    if (typeof _style === 'function') {
      _style();
    }
  };
  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function () {
        handleChange = function handleChange() {
          return null;
        };
      };
    }
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/util.js
function util_typeof(o) { "@babel/helpers - typeof"; return util_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, util_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return util_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (util_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (util_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint no-console: 0 */

var getIntersectionKeys = function getIntersectionKeys(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function (a, b) {
    return a.filter(function (c) {
      return b.includes(c);
    });
  });
};
var identity = function identity(param) {
  return param;
};

/*
 * @description: convert camel case to dash case
 * string => string
 */
var getDashCase = function getDashCase(name) {
  return name.replace(/([A-Z])/g, function (v) {
    return "-".concat(v.toLowerCase());
  });
};
var log = function log() {
  var _console;
  (_console = console).log.apply(_console, arguments);
};

/*
 * @description: log the value of a varible
 * string => any => any
 */
var debug = function debug(name) {
  return function (item) {
    log(name, item);
    return item;
  };
};

/*
 * @description: log name, args, return value of a function
 * function => function
 */
var debugf = function debugf(tag, f) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var res = f.apply(void 0, args);
    var name = tag || f.name || 'anonymous function';
    var argNames = "(".concat(args.map(JSON.stringify).join(', '), ")");
    log("".concat(name, ": ").concat(argNames, " => ").concat(JSON.stringify(res)));
    return res;
  };
};

/*
 * @description: map object on every element in this object.
 * (function, object) => object
 */
var mapObject = function mapObject(fn, obj) {
  return Object.keys(obj).reduce(function (res, key) {
    return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, fn(key, obj[key])));
  }, {});
};
var getTransitionVal = function getTransitionVal(props, duration, easing) {
  return props.map(function (prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(',');
};
var isDev = "production" !== 'production';
var warn = function warn(condition, format, a, b, c, d, e, f) {
  if (isDev && typeof console !== 'undefined' && console.warn) {
    if (format === undefined) {
      console.warn('LogUtils requires an error message argument');
    }
    if (!condition) {
      if (format === undefined) {
        console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        console.warn(format.replace(//g, function () {
          return args[argIndex++];
        }));
      }
    }
  }
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/easing.js
function _slicedToArray(arr, i) { return easing_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || easing_unsupportedIterableToArray(arr, i) || easing_nonIterableRest(); }
function easing_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function easing_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || easing_iterableToArray(arr) || easing_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function easing_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return easing_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return easing_arrayLikeToArray(o, minLen); }
function easing_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return easing_arrayLikeToArray(arr); }
function easing_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var ACCURACY = 1e-4;
var cubicBezierFactor = function cubicBezierFactor(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};
var multyTime = function multyTime(params, t) {
  return params.map(function (param, i) {
    return param * Math.pow(t, i);
  }).reduce(function (pre, curr) {
    return pre + curr;
  });
};
var cubicBezier = function cubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};
var derivativeCubicBezier = function derivativeCubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray(params.map(function (param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
};

// calculate cubic-bezier using Newton's method
var configBezier = function configBezier() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var x1 = args[0],
    y1 = args[1],
    x2 = args[2],
    y2 = args[3];
  if (args.length === 1) {
    switch (args[0]) {
      case 'linear':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;
      case 'ease':
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1.0;
        break;
      case 'ease-in':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;
      case 'ease-out':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;
      case 'ease-in-out':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;
      default:
        {
          var easing = args[0].split('(');
          if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
            var _easing$1$split$0$spl = easing[1].split(')')[0].split(',').map(function (x) {
              return parseFloat(x);
            });
            var _easing$1$split$0$spl2 = _slicedToArray(_easing$1$split$0$spl, 4);
            x1 = _easing$1$split$0$spl2[0];
            y1 = _easing$1$split$0$spl2[1];
            x2 = _easing$1$split$0$spl2[2];
            y2 = _easing$1$split$0$spl2[3];
          } else {
            warn(false, '[configBezier]: arguments should be one of ' + "oneOf 'linear', 'ease', 'ease-in', 'ease-out', " + "'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", args);
          }
        }
    }
  }
  warn([x1, x2, y1, y2].every(function (num) {
    return typeof num === 'number' && num >= 0 && num <= 1;
  }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', args);
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);
  var rangeValue = function rangeValue(value) {
    if (value > 1) {
      return 1;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };
  var bezier = function bezier(_t) {
    var t = _t > 1 ? 1 : _t;
    var x = t;
    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x) - t;
      var derVal = derCurveX(x);
      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x);
      }
      x = rangeValue(x - evalT / derVal);
    }
    return curveY(x);
  };
  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$stiff = config.stiff,
    stiff = _config$stiff === void 0 ? 100 : _config$stiff,
    _config$damping = config.damping,
    damping = _config$damping === void 0 ? 8 : _config$damping,
    _config$dt = config.dt,
    dt = _config$dt === void 0 ? 17 : _config$dt;
  var stepper = function stepper(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1000;
    var newX = currV * dt / 1000 + currX;
    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };
  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var easing = args[0];
  if (typeof easing === 'string') {
    switch (easing) {
      case 'ease':
      case 'ease-in-out':
      case 'ease-out':
      case 'ease-in':
      case 'linear':
        return configBezier(easing);
      case 'spring':
        return configSpring();
      default:
        if (easing.split('(')[0] === 'cubic-bezier') {
          return configBezier(easing);
        }
        warn(false, "[configEasing]: first argument should be one of 'ease', 'ease-in', " + "'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", args);
    }
  }
  if (typeof easing === 'function') {
    return easing;
  }
  warn(false, '[configEasing]: first argument type should be function or string, instead received %s', args);
  return null;
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/configUpdate.js
function configUpdate_typeof(o) { "@babel/helpers - typeof"; return configUpdate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, configUpdate_typeof(o); }
function configUpdate_toConsumableArray(arr) { return configUpdate_arrayWithoutHoles(arr) || configUpdate_iterableToArray(arr) || configUpdate_unsupportedIterableToArray(arr) || configUpdate_nonIterableSpread(); }
function configUpdate_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function configUpdate_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function configUpdate_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return configUpdate_arrayLikeToArray(arr); }
function configUpdate_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function configUpdate_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? configUpdate_ownKeys(Object(t), !0).forEach(function (r) { configUpdate_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : configUpdate_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function configUpdate_defineProperty(obj, key, value) { key = configUpdate_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function configUpdate_toPropertyKey(arg) { var key = configUpdate_toPrimitive(arg, "string"); return configUpdate_typeof(key) === "symbol" ? key : String(key); }
function configUpdate_toPrimitive(input, hint) { if (configUpdate_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (configUpdate_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function configUpdate_slicedToArray(arr, i) { return configUpdate_arrayWithHoles(arr) || configUpdate_iterableToArrayLimit(arr, i) || configUpdate_unsupportedIterableToArray(arr, i) || configUpdate_nonIterableRest(); }
function configUpdate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function configUpdate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configUpdate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configUpdate_arrayLikeToArray(o, minLen); }
function configUpdate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function configUpdate_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function configUpdate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var alpha = function alpha(begin, end, k) {
  return begin + (end - begin) * k;
};
var needContinue = function needContinue(_ref) {
  var from = _ref.from,
    to = _ref.to;
  return from !== to;
};

/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */
var calStepperVals = function calStepperVals(easing, preVals, steps) {
  var nextStepVals = mapObject(function (key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity),
        _easing2 = configUpdate_slicedToArray(_easing, 2),
        newX = _easing2[0],
        newV = _easing2[1];
      return configUpdate_objectSpread(configUpdate_objectSpread({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }
    return val;
  }, preVals);
  if (steps < 1) {
    return mapObject(function (key, val) {
      if (needContinue(val)) {
        return configUpdate_objectSpread(configUpdate_objectSpread({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }
      return val;
    }, preVals);
  }
  return calStepperVals(easing, nextStepVals, steps - 1);
};

// configure update function
/* harmony default export */ const configUpdate = (function (from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function (res, key) {
    return configUpdate_objectSpread(configUpdate_objectSpread({}, res), {}, configUpdate_defineProperty({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function (res, key) {
    return configUpdate_objectSpread(configUpdate_objectSpread({}, res), {}, configUpdate_defineProperty({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;
  var update = function update() {
    return null;
  };
  var getCurrStyle = function getCurrStyle() {
    return mapObject(function (key, val) {
      return val.from;
    }, stepperStyle);
  };
  var shouldStopAnimation = function shouldStopAnimation() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  };

  // stepper timing function like spring
  var stepperUpdate = function stepperUpdate(now) {
    if (!preTime) {
      preTime = now;
    }
    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    // get union set and add compatible prefix
    render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), getCurrStyle(stepperStyle)));
    preTime = now;
    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };

  // t => val timing function like cubic-bezier
  var timingUpdate = function timingUpdate(now) {
    if (!beginTime) {
      beginTime = now;
    }
    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function (key, val) {
      return alpha.apply(void 0, configUpdate_toConsumableArray(val).concat([easing(t)]));
    }, timingStyle);

    // get union set and add compatible prefix
    render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), currStyle));
    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function (key, val) {
        return alpha.apply(void 0, configUpdate_toConsumableArray(val).concat([easing(1)]));
      }, timingStyle);
      render(configUpdate_objectSpread(configUpdate_objectSpread(configUpdate_objectSpread({}, from), to), finalStyle));
    }
  };
  update = easing.isStepper ? stepperUpdate : timingUpdate;

  // return start animation method
  return function () {
    requestAnimationFrame(update);

    // return stop animation method
    return function () {
      cancelAnimationFrame(cafId);
    };
  };
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/Animate.js
function Animate_typeof(o) { "@babel/helpers - typeof"; return Animate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Animate_typeof(o); }
var _excluded = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Animate_toConsumableArray(arr) { return Animate_arrayWithoutHoles(arr) || Animate_iterableToArray(arr) || Animate_unsupportedIterableToArray(arr) || Animate_nonIterableSpread(); }
function Animate_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Animate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Animate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Animate_arrayLikeToArray(o, minLen); }
function Animate_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Animate_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Animate_arrayLikeToArray(arr); }
function Animate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Animate_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Animate_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Animate_ownKeys(Object(t), !0).forEach(function (r) { Animate_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Animate_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Animate_defineProperty(obj, key, value) { key = Animate_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Animate_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Animate_toPropertyKey(arg) { var key = Animate_toPrimitive(arg, "string"); return Animate_typeof(key) === "symbol" ? key : String(key); }
function Animate_toPrimitive(input, hint) { if (Animate_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Animate_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Animate_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Animate = /*#__PURE__*/function (_PureComponent) {
  _inherits(Animate, _PureComponent);
  var _super = _createSuper(Animate);
  function Animate(props, context) {
    var _this;
    _classCallCheck(this, Animate);
    _this = _super.call(this, props, context);
    var _this$props = _this.props,
      isActive = _this$props.isActive,
      attributeName = _this$props.attributeName,
      from = _this$props.from,
      to = _this$props.to,
      steps = _this$props.steps,
      children = _this$props.children,
      duration = _this$props.duration;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized(_this));
    if (!isActive || duration <= 0) {
      _this.state = {
        style: {}
      };

      // if children is a function and animation is not active, set style to 'to'
      if (typeof children === 'function') {
        _this.state = {
          style: to
        };
      }
      return _possibleConstructorReturn(_this);
    }
    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === 'function') {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn(_this);
      }
      _this.state = {
        style: attributeName ? Animate_defineProperty({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }
    return _this;
  }
  _createClass(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
        isActive = _this$props2.isActive,
        canBegin = _this$props2.canBegin;
      this.mounted = true;
      if (!isActive || !canBegin) {
        return;
      }
      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
        isActive = _this$props3.isActive,
        canBegin = _this$props3.canBegin,
        attributeName = _this$props3.attributeName,
        shouldReAnimate = _this$props3.shouldReAnimate,
        to = _this$props3.to,
        currentFrom = _this$props3.from;
      var style = this.state.style;
      if (!canBegin) {
        return;
      }
      if (!isActive) {
        var newState = {
          style: attributeName ? Animate_defineProperty({}, attributeName, to) : to
        };
        if (this.state && style) {
          if (attributeName && style[attributeName] !== to || !attributeName && style !== to) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(newState);
          }
        }
        return;
      }
      if (deepEqual(prevProps.to, to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }
      var isTriggered = !prevProps.canBegin || !prevProps.isActive;
      if (this.manager) {
        this.manager.stop();
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      var from = isTriggered || shouldReAnimate ? currentFrom : prevProps.to;
      if (this.state && style) {
        var _newState = {
          style: attributeName ? Animate_defineProperty({}, attributeName, from) : from
        };
        if (attributeName && style[attributeName] !== from || !attributeName && style !== from) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState(_newState);
        }
      }
      this.runAnimation(Animate_objectSpread(Animate_objectSpread({}, this.props), {}, {
        from: from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var onAnimationEnd = this.props.onAnimationEnd;
      if (this.unSubscribe) {
        this.unSubscribe();
      }
      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;
      var from = props.from,
        to = props.to,
        duration = props.duration,
        easing = props.easing,
        begin = props.begin,
        onAnimationEnd = props.onAnimationEnd,
        onAnimationStart = props.onAnimationStart;
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, this.changeStyle);
      var finalStartAnimation = function finalStartAnimation() {
        _this2.stopJSAnimation = startAnimation();
      };
      this.manager.start([onAnimationStart, begin, finalStartAnimation, duration, onAnimationEnd]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;
      var steps = props.steps,
        begin = props.begin,
        onAnimationStart = props.onAnimationStart;
      var _steps$ = steps[0],
        initialStyle = _steps$.style,
        _steps$$duration = _steps$.duration,
        initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;
      var addStyle = function addStyle(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }
        var duration = nextItem.duration,
          _nextItem$easing = nextItem.easing,
          easing = _nextItem$easing === void 0 ? 'ease' : _nextItem$easing,
          style = nextItem.style,
          nextProperties = nextItem.properties,
          onAnimationEnd = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);
        if (typeof easing === 'function' || easing === 'spring') {
          return [].concat(Animate_toConsumableArray(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration: duration,
            easing: easing
          }), duration]);
        }
        var transition = getTransitionVal(properties, duration, easing);
        var newStyle = Animate_objectSpread(Animate_objectSpread(Animate_objectSpread({}, preItem.style), style), {}, {
          transition: transition
        });
        return [].concat(Animate_toConsumableArray(sequence), [newStyle, duration, onAnimationEnd]).filter(identity);
      };
      return this.manager.start([onAnimationStart].concat(Animate_toConsumableArray(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }
      var begin = props.begin,
        duration = props.duration,
        attributeName = props.attributeName,
        propsTo = props.to,
        easing = props.easing,
        onAnimationStart = props.onAnimationStart,
        onAnimationEnd = props.onAnimationEnd,
        steps = props.steps,
        children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);
      if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
        this.runJSAnimation(props);
        return;
      }
      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }
      var to = attributeName ? Animate_defineProperty({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart, begin, Animate_objectSpread(Animate_objectSpread({}, to), {}, {
        transition: transition
      }), duration, onAnimationEnd]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        children = _this$props4.children,
        begin = _this$props4.begin,
        duration = _this$props4.duration,
        attributeName = _this$props4.attributeName,
        easing = _this$props4.easing,
        isActive = _this$props4.isActive,
        steps = _this$props4.steps,
        from = _this$props4.from,
        to = _this$props4.to,
        canBegin = _this$props4.canBegin,
        onAnimationEnd = _this$props4.onAnimationEnd,
        shouldReAnimate = _this$props4.shouldReAnimate,
        onAnimationReStart = _this$props4.onAnimationReStart,
        others = _objectWithoutProperties(_this$props4, _excluded);
      var count = react.Children.count(children);
      // eslint-disable-next-line react/destructuring-assignment
      var stateStyle = this.state.style;
      if (typeof children === 'function') {
        return children(stateStyle);
      }
      if (!isActive || count === 0 || duration <= 0) {
        return children;
      }
      var cloneContainer = function cloneContainer(container) {
        var _container$props = container.props,
          _container$props$styl = _container$props.style,
          style = _container$props$styl === void 0 ? {} : _container$props$styl,
          className = _container$props.className;
        var res = /*#__PURE__*/(0,react.cloneElement)(container, Animate_objectSpread(Animate_objectSpread({}, others), {}, {
          style: Animate_objectSpread(Animate_objectSpread({}, style), stateStyle),
          className: className
        }));
        return res;
      };
      if (count === 1) {
        return cloneContainer(react.Children.only(children));
      }
      return /*#__PURE__*/react_default().createElement("div", null, react.Children.map(children, function (child) {
        return cloneContainer(child);
      }));
    }
  }]);
  return Animate;
}(react.PureComponent);
Animate.displayName = 'Animate';
Animate.defaultProps = {
  begin: 0,
  duration: 1000,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {},
  onAnimationStart: function onAnimationStart() {}
};
Animate.propTypes = {
  from: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  to: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  attributeName: (prop_types_default()).string,
  // animation duration
  duration: (prop_types_default()).number,
  begin: (prop_types_default()).number,
  easing: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
  steps: prop_types_default().arrayOf(prop_types_default().shape({
    duration: (prop_types_default()).number.isRequired,
    style: (prop_types_default()).object.isRequired,
    easing: prop_types_default().oneOfType([prop_types_default().oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), (prop_types_default()).func]),
    // transition css properties(dash case), optional
    properties: prop_types_default().arrayOf('string'),
    onAnimationEnd: (prop_types_default()).func
  })),
  children: prop_types_default().oneOfType([(prop_types_default()).node, (prop_types_default()).func]),
  isActive: (prop_types_default()).bool,
  canBegin: (prop_types_default()).bool,
  onAnimationEnd: (prop_types_default()).func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: (prop_types_default()).bool,
  onAnimationStart: (prop_types_default()).func,
  onAnimationReStart: (prop_types_default()).func
};
/* harmony default export */ const es6_Animate = (Animate);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(81884);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(t, e) {
  return setPrototypeOf_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, setPrototypeOf_setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf_setPrototypeOf(t, o);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (react_default().createContext(null));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(assertThisInitialized_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.Z)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react_default().createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react_default().createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react_default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react_default()).Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js
var react_dom = __webpack_require__(85544);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom_default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom_default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react_default().createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react_default().cloneElement(react_default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react_default()).Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/AnimateGroupChild.js
var AnimateGroupChild_excluded = ["children", "appearOptions", "enterOptions", "leaveOptions"];
function AnimateGroupChild_typeof(o) { "@babel/helpers - typeof"; return AnimateGroupChild_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AnimateGroupChild_typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function AnimateGroupChild_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AnimateGroupChild_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function AnimateGroupChild_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function AnimateGroupChild_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function AnimateGroupChild_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? AnimateGroupChild_ownKeys(Object(t), !0).forEach(function (r) { AnimateGroupChild_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AnimateGroupChild_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function AnimateGroupChild_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function AnimateGroupChild_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, AnimateGroupChild_toPropertyKey(descriptor.key), descriptor); } }
function AnimateGroupChild_createClass(Constructor, protoProps, staticProps) { if (protoProps) AnimateGroupChild_defineProperties(Constructor.prototype, protoProps); if (staticProps) AnimateGroupChild_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function AnimateGroupChild_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) AnimateGroupChild_setPrototypeOf(subClass, superClass); }
function AnimateGroupChild_setPrototypeOf(o, p) { AnimateGroupChild_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AnimateGroupChild_setPrototypeOf(o, p); }
function AnimateGroupChild_createSuper(Derived) { var hasNativeReflectConstruct = AnimateGroupChild_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AnimateGroupChild_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AnimateGroupChild_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AnimateGroupChild_possibleConstructorReturn(this, result); }; }
function AnimateGroupChild_possibleConstructorReturn(self, call) { if (call && (AnimateGroupChild_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return AnimateGroupChild_assertThisInitialized(self); }
function AnimateGroupChild_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function AnimateGroupChild_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function AnimateGroupChild_getPrototypeOf(o) { AnimateGroupChild_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AnimateGroupChild_getPrototypeOf(o); }
function AnimateGroupChild_defineProperty(obj, key, value) { key = AnimateGroupChild_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnimateGroupChild_toPropertyKey(arg) { var key = AnimateGroupChild_toPrimitive(arg, "string"); return AnimateGroupChild_typeof(key) === "symbol" ? key : String(key); }
function AnimateGroupChild_toPrimitive(input, hint) { if (AnimateGroupChild_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnimateGroupChild_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var parseDurationOfSingleTransition = function parseDurationOfSingleTransition() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var steps = options.steps,
    duration = options.duration;
  if (steps && steps.length) {
    return steps.reduce(function (result, entry) {
      return result + (Number.isFinite(entry.duration) && entry.duration > 0 ? entry.duration : 0);
    }, 0);
  }
  if (Number.isFinite(duration)) {
    return duration;
  }
  return 0;
};
var AnimateGroupChild = /*#__PURE__*/function (_Component) {
  AnimateGroupChild_inherits(AnimateGroupChild, _Component);
  var _super = AnimateGroupChild_createSuper(AnimateGroupChild);
  function AnimateGroupChild() {
    var _this;
    AnimateGroupChild_classCallCheck(this, AnimateGroupChild);
    _this = _super.call(this);
    AnimateGroupChild_defineProperty(AnimateGroupChild_assertThisInitialized(_this), "handleEnter", function (node, isAppearing) {
      var _this$props = _this.props,
        appearOptions = _this$props.appearOptions,
        enterOptions = _this$props.enterOptions;
      _this.handleStyleActive(isAppearing ? appearOptions : enterOptions);
    });
    AnimateGroupChild_defineProperty(AnimateGroupChild_assertThisInitialized(_this), "handleExit", function () {
      var leaveOptions = _this.props.leaveOptions;
      _this.handleStyleActive(leaveOptions);
    });
    _this.state = {
      isActive: false
    };
    return _this;
  }
  AnimateGroupChild_createClass(AnimateGroupChild, [{
    key: "handleStyleActive",
    value: function handleStyleActive(style) {
      if (style) {
        var onAnimationEnd = style.onAnimationEnd ? function () {
          style.onAnimationEnd();
        } : null;
        this.setState(AnimateGroupChild_objectSpread(AnimateGroupChild_objectSpread({}, style), {}, {
          onAnimationEnd: onAnimationEnd,
          isActive: true
        }));
      }
    }
  }, {
    key: "parseTimeout",
    value: function parseTimeout() {
      var _this$props2 = this.props,
        appearOptions = _this$props2.appearOptions,
        enterOptions = _this$props2.enterOptions,
        leaveOptions = _this$props2.leaveOptions;
      return parseDurationOfSingleTransition(appearOptions) + parseDurationOfSingleTransition(enterOptions) + parseDurationOfSingleTransition(leaveOptions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        children = _this$props3.children,
        appearOptions = _this$props3.appearOptions,
        enterOptions = _this$props3.enterOptions,
        leaveOptions = _this$props3.leaveOptions,
        props = AnimateGroupChild_objectWithoutProperties(_this$props3, AnimateGroupChild_excluded);
      return /*#__PURE__*/react_default().createElement(esm_Transition, _extends({}, props, {
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        timeout: this.parseTimeout()
      }), function () {
        return /*#__PURE__*/react_default().createElement(es6_Animate, _this2.state, react.Children.only(children));
      });
    }
  }]);
  return AnimateGroupChild;
}(react.Component);
AnimateGroupChild.propTypes = {
  appearOptions: (prop_types_default()).object,
  enterOptions: (prop_types_default()).object,
  leaveOptions: (prop_types_default()).object,
  children: (prop_types_default()).element
};
/* harmony default export */ const es6_AnimateGroupChild = (AnimateGroupChild);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/AnimateGroup.js




function AnimateGroup(props) {
  var component = props.component,
    children = props.children,
    appear = props.appear,
    enter = props.enter,
    leave = props.leave;
  return /*#__PURE__*/react_default().createElement(esm_TransitionGroup, {
    component: component
  }, react.Children.map(children, function (child, index) {
    return /*#__PURE__*/react_default().createElement(es6_AnimateGroupChild, {
      appearOptions: appear,
      enterOptions: enter,
      leaveOptions: leave,
      key: "child-".concat(index) // eslint-disable-line
    }, child);
  }));
}
AnimateGroup.propTypes = {
  appear: (prop_types_default()).object,
  enter: (prop_types_default()).object,
  leave: (prop_types_default()).object,
  children: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).element]),
  component: (prop_types_default()).any
};
AnimateGroup.defaultProps = {
  component: 'span'
};
/* harmony default export */ const es6_AnimateGroup = ((/* unused pure expression or super */ null && (AnimateGroup)));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/index.js




/* harmony default export */ const es6 = (es6_Animate);

/***/ }),

/***/ 13829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Bar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(49193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/index.js + 19 modules
var es6 = __webpack_require__(27173);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(4071);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js
var isNil = __webpack_require__(24934);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/container/Layer.js
var Layer = __webpack_require__(68874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/ErrorBar.js
var ErrorBar = __webpack_require__(17689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Cell.js
var Cell = __webpack_require__(93284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/LabelList.js
var LabelList = __webpack_require__(64605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/Global.js
var Global = __webpack_require__(88127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ChartUtils.js + 87 modules
var ChartUtils = __webpack_require__(86837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/types.js
var types = __webpack_require__(33306);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(30761);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ActiveShapeUtils.js + 1 modules
var ActiveShapeUtils = __webpack_require__(66413);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/BarUtils.js
var _excluded = [
    "x",
    "y"
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



// Rectangle props is expecting x, y, height, width as numbers, name as a string, and radius as a custom type
// When props are being spread in from a user defined component in Bar,
// the prop types of an SVGElement have these typed as something else.
// This function will return the passed in props
// along with x, y, height as numbers, name as a string, and radius as number | [number, number, number, number]
function typeguardBarRectangleProps(_ref, props) {
    var xProp = _ref.x, yProp = _ref.y, option = _objectWithoutProperties(_ref, _excluded);
    var xValue = "".concat(xProp);
    var x = parseInt(xValue, 10);
    var yValue = "".concat(yProp);
    var y = parseInt(yValue, 10);
    var heightValue = "".concat(props.height || option.height);
    var height = parseInt(heightValue, 10);
    var widthValue = "".concat(props.width || option.width);
    var width = parseInt(widthValue, 10);
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, props), option), x ? {
        x: x
    } : {}), y ? {
        y: y
    } : {}), {}, {
        height: height,
        width: width,
        name: props.name,
        radius: props.radius
    });
}
function BarRectangle(props) {
    return /*#__PURE__*/ react_default().createElement(ActiveShapeUtils/* Shape */.bn, _extends({
        shapeType: "rectangle",
        propTransformer: typeguardBarRectangleProps,
        activeClassName: "recharts-active-bar"
    }, props));
}
/**
 * Safely gets minPointSize from from the minPointSize prop if it is a function
 * @param minPointSize minPointSize as passed to the Bar component
 * @param defaultValue default minPointSize
 * @returns minPointSize
 */ var minPointSizeCallback = function minPointSizeCallback(minPointSize) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return function(value, index) {
        if (typeof minPointSize === "number") return minPointSize;
        var isValueNumber = typeof value === "number";
        if (isValueNumber) {
            return minPointSize(value, index);
        }
        !isValueNumber ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
        return defaultValue;
    };
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/Bar.js
var Bar_excluded = [
    "value",
    "background"
];
var _Bar;
function Bar_typeof(o) {
    "@babel/helpers - typeof";
    return Bar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, Bar_typeof(o);
}
function Bar_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = Bar_objectWithoutPropertiesLoose(source, excluded);
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
function Bar_objectWithoutPropertiesLoose(source, excluded) {
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
function Bar_extends() {
    Bar_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return Bar_extends.apply(this, arguments);
}
function Bar_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function Bar_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? Bar_ownKeys(Object(t), !0).forEach(function(r) {
            Bar_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bar_ownKeys(Object(t)).forEach(function(r) {
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
        Object.defineProperty(target, Bar_toPropertyKey(descriptor.key), descriptor);
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
    if (call && (Bar_typeof(call) === "object" || typeof call === "function")) {
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
function Bar_defineProperty(obj, key, value) {
    key = Bar_toPropertyKey(key);
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
function Bar_toPropertyKey(t) {
    var i = Bar_toPrimitive(t, "string");
    return "symbol" == Bar_typeof(i) ? i : String(i);
}
function Bar_toPrimitive(t, r) {
    if ("object" != Bar_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != Bar_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Render a group of bar
 */ 














var Bar = /*#__PURE__*/ function(_PureComponent) {
    _inherits(Bar, _PureComponent);
    function Bar() {
        var _this;
        _classCallCheck(this, Bar);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Bar, [].concat(args));
        Bar_defineProperty(_assertThisInitialized(_this), "state", {
            isAnimationFinished: false
        });
        Bar_defineProperty(_assertThisInitialized(_this), "id", (0,DataUtils/* uniqueId */.EL)("recharts-bar-"));
        Bar_defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function() {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({
                isAnimationFinished: true
            });
            if (onAnimationEnd) {
                onAnimationEnd();
            }
        });
        Bar_defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function() {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({
                isAnimationFinished: false
            });
            if (onAnimationStart) {
                onAnimationStart();
            }
        });
        return _this;
    }
    _createClass(Bar, [
        {
            key: "renderRectanglesStatically",
            value: function renderRectanglesStatically(data) {
                var _this2 = this;
                var _this$props = this.props, shape = _this$props.shape, dataKey = _this$props.dataKey, activeIndex = _this$props.activeIndex, activeBar = _this$props.activeBar;
                var baseProps = (0,ReactUtils/* filterProps */.L6)(this.props, false);
                return data && data.map(function(entry, i) {
                    var isActive = i === activeIndex;
                    var option = isActive ? activeBar : shape;
                    var props = Bar_objectSpread(Bar_objectSpread(Bar_objectSpread({}, baseProps), entry), {}, {
                        isActive: isActive,
                        option: option,
                        index: i,
                        dataKey: dataKey,
                        onAnimationStart: _this2.handleAnimationStart,
                        onAnimationEnd: _this2.handleAnimationEnd
                    });
                    return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, Bar_extends({
                        className: "recharts-bar-rectangle"
                    }, (0,types/* adaptEventsOfChild */.bw)(_this2.props, entry, i), {
                        key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value)
                    }), /*#__PURE__*/ react_default().createElement(BarRectangle, props));
                });
            }
        },
        {
            key: "renderRectanglesWithAnimation",
            value: function renderRectanglesWithAnimation() {
                var _this3 = this;
                var _this$props2 = this.props, data = _this$props2.data, layout = _this$props2.layout, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
                var prevData = this.state.prevData;
                return /*#__PURE__*/ react_default().createElement(es6/* default */.ZP, {
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
                    key: "bar-".concat(animationId),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function(_ref) {
                    var t = _ref.t;
                    var stepData = data.map(function(entry, index) {
                        var prev = prevData && prevData[index];
                        if (prev) {
                            var interpolatorX = (0,DataUtils/* interpolateNumber */.k4)(prev.x, entry.x);
                            var interpolatorY = (0,DataUtils/* interpolateNumber */.k4)(prev.y, entry.y);
                            var interpolatorWidth = (0,DataUtils/* interpolateNumber */.k4)(prev.width, entry.width);
                            var interpolatorHeight = (0,DataUtils/* interpolateNumber */.k4)(prev.height, entry.height);
                            return Bar_objectSpread(Bar_objectSpread({}, entry), {}, {
                                x: interpolatorX(t),
                                y: interpolatorY(t),
                                width: interpolatorWidth(t),
                                height: interpolatorHeight(t)
                            });
                        }
                        if (layout === "horizontal") {
                            var _interpolatorHeight = (0,DataUtils/* interpolateNumber */.k4)(0, entry.height);
                            var h = _interpolatorHeight(t);
                            return Bar_objectSpread(Bar_objectSpread({}, entry), {}, {
                                y: entry.y + entry.height - h,
                                height: h
                            });
                        }
                        var interpolator = (0,DataUtils/* interpolateNumber */.k4)(0, entry.width);
                        var w = interpolator(t);
                        return Bar_objectSpread(Bar_objectSpread({}, entry), {}, {
                            width: w
                        });
                    });
                    return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, null, _this3.renderRectanglesStatically(stepData));
                });
            }
        },
        {
            key: "renderRectangles",
            value: function renderRectangles() {
                var _this$props3 = this.props, data = _this$props3.data, isAnimationActive = _this$props3.isAnimationActive;
                var prevData = this.state.prevData;
                if (isAnimationActive && data && data.length && (!prevData || !isEqual_default()(prevData, data))) {
                    return this.renderRectanglesWithAnimation();
                }
                return this.renderRectanglesStatically(data);
            }
        },
        {
            key: "renderBackground",
            value: function renderBackground() {
                var _this4 = this;
                var _this$props4 = this.props, data = _this$props4.data, dataKey = _this$props4.dataKey, activeIndex = _this$props4.activeIndex;
                var backgroundProps = (0,ReactUtils/* filterProps */.L6)(this.props.background, false);
                return data.map(function(entry, i) {
                    var value = entry.value, background = entry.background, rest = Bar_objectWithoutProperties(entry, Bar_excluded);
                    if (!background) {
                        return null;
                    }
                    var props = Bar_objectSpread(Bar_objectSpread(Bar_objectSpread(Bar_objectSpread(Bar_objectSpread({}, rest), {}, {
                        fill: "#eee"
                    }, background), backgroundProps), (0,types/* adaptEventsOfChild */.bw)(_this4.props, entry, i)), {}, {
                        onAnimationStart: _this4.handleAnimationStart,
                        onAnimationEnd: _this4.handleAnimationEnd,
                        dataKey: dataKey,
                        index: i,
                        key: "background-bar-".concat(i),
                        className: "recharts-bar-background-rectangle"
                    });
                    return /*#__PURE__*/ react_default().createElement(BarRectangle, Bar_extends({
                        option: _this4.props.background,
                        isActive: i === activeIndex
                    }, props));
                });
            }
        },
        {
            key: "renderErrorBar",
            value: function renderErrorBar(needClip, clipPathId) {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                var _this$props5 = this.props, data = _this$props5.data, xAxis = _this$props5.xAxis, yAxis = _this$props5.yAxis, layout = _this$props5.layout, children = _this$props5.children;
                var errorBarItems = (0,ReactUtils/* findAllByType */.NN)(children, ErrorBar/* ErrorBar */.W);
                if (!errorBarItems) {
                    return null;
                }
                var offset = layout === "vertical" ? data[0].height / 2 : data[0].width / 2;
                var dataPointFormatter = function dataPointFormatter(dataPoint, dataKey) {
                    /**
         * if the value coming from `getComposedData` is an array then this is a stacked bar chart.
         * arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
         * */ var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
                    return {
                        x: dataPoint.x,
                        y: dataPoint.y,
                        value: value,
                        errorVal: (0,ChartUtils/* getValueByDataKey */.F$)(dataPoint, dataKey)
                    };
                };
                var errorBarProps = {
                    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
                };
                return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, errorBarProps, errorBarItems.map(function(item) {
                    return /*#__PURE__*/ react_default().cloneElement(item, {
                        key: "error-bar-".concat(clipPathId, "-").concat(item.props.dataKey),
                        data: data,
                        xAxis: xAxis,
                        yAxis: yAxis,
                        layout: layout,
                        offset: offset,
                        dataPointFormatter: dataPointFormatter
                    });
                }));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props6 = this.props, hide = _this$props6.hide, data = _this$props6.data, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, left = _this$props6.left, top = _this$props6.top, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, background = _this$props6.background, id = _this$props6.id;
                if (hide || !data || !data.length) {
                    return null;
                }
                var isAnimationFinished = this.state.isAnimationFinished;
                var layerClass = (0,clsx/* default */.Z)("recharts-bar", className);
                var needClipX = xAxis && xAxis.allowDataOverflow;
                var needClipY = yAxis && yAxis.allowDataOverflow;
                var needClip = needClipX || needClipY;
                var clipPathId = isNil_default()(id) ? this.id : id;
                return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
                    className: layerClass
                }, needClipX || needClipY ? /*#__PURE__*/ react_default().createElement("defs", null, /*#__PURE__*/ react_default().createElement("clipPath", {
                    id: "clipPath-".concat(clipPathId)
                }, /*#__PURE__*/ react_default().createElement("rect", {
                    x: needClipX ? left : left - width / 2,
                    y: needClipY ? top : top - height / 2,
                    width: needClipX ? width : width * 2,
                    height: needClipY ? height : height * 2
                }))) : null, /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
                    className: "recharts-bar-rectangles",
                    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
                }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList/* LabelList */.e.renderCallByParent(this.props, data));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.animationId !== prevState.prevAnimationId) {
                    return {
                        prevAnimationId: nextProps.animationId,
                        curData: nextProps.data,
                        prevData: prevState.curData
                    };
                }
                if (nextProps.data !== prevState.curData) {
                    return {
                        curData: nextProps.data
                    };
                }
                return null;
            }
        }
    ]);
    return Bar;
}(react.PureComponent);
_Bar = Bar;
Bar_defineProperty(Bar, "displayName", "Bar");
Bar_defineProperty(Bar, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: false,
    data: [],
    layout: "vertical",
    activeBar: false,
    isAnimationActive: !Global/* Global */.x.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease"
});
/**
 * Compose the data of each group
 * @param {Object} props Props for the component
 * @param {Object} item        An instance of Bar
 * @param {Array} barPosition  The offset and size of each bar
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {Array} stackedData  The stacked data of a bar item
 * @return{Array} Composed data
 */ Bar_defineProperty(Bar, "getComposedData", function(_ref2) {
    var props = _ref2.props, item = _ref2.item, barPosition = _ref2.barPosition, bandSize = _ref2.bandSize, xAxis = _ref2.xAxis, yAxis = _ref2.yAxis, xAxisTicks = _ref2.xAxisTicks, yAxisTicks = _ref2.yAxisTicks, stackedData = _ref2.stackedData, dataStartIndex = _ref2.dataStartIndex, displayedData = _ref2.displayedData, offset = _ref2.offset;
    var pos = (0,ChartUtils/* findPositionOfBar */.Bu)(barPosition, item);
    if (!pos) {
        return null;
    }
    var layout = props.layout;
    var _item$props = item.props, dataKey = _item$props.dataKey, children = _item$props.children, minPointSizeProp = _item$props.minPointSize;
    var numericAxis = layout === "horizontal" ? yAxis : xAxis;
    var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    var baseValue = (0,ChartUtils/* getBaseValueOfBar */.Yj)({
        numericAxis: numericAxis
    });
    var cells = (0,ReactUtils/* findAllByType */.NN)(children, Cell/* Cell */.b);
    var rects = displayedData.map(function(entry, index) {
        var value, x, y, width, height, background;
        if (stackedData) {
            value = (0,ChartUtils/* truncateByDomain */.Vv)(stackedData[dataStartIndex + index], stackedDomain);
        } else {
            value = (0,ChartUtils/* getValueByDataKey */.F$)(entry, dataKey);
            if (!Array.isArray(value)) {
                value = [
                    baseValue,
                    value
                ];
            }
        }
        var minPointSize = minPointSizeCallback(minPointSizeProp, _Bar.defaultProps.minPointSize)(value[1], index);
        if (layout === "horizontal") {
            var _ref4;
            var _ref3 = [
                yAxis.scale(value[0]),
                yAxis.scale(value[1])
            ], baseValueScale = _ref3[0], currentValueScale = _ref3[1];
            x = (0,ChartUtils/* getCateCoordinateOfBar */.Fy)({
                axis: xAxis,
                ticks: xAxisTicks,
                bandSize: bandSize,
                offset: pos.offset,
                entry: entry,
                index: index
            });
            y = (_ref4 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref4 !== void 0 ? _ref4 : undefined;
            width = pos.size;
            var computedHeight = baseValueScale - currentValueScale;
            height = Number.isNaN(computedHeight) ? 0 : computedHeight;
            background = {
                x: x,
                y: yAxis.y,
                width: width,
                height: yAxis.height
            };
            if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
                var delta = (0,DataUtils/* mathSign */.uY)(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
                y -= delta;
                height += delta;
            }
        } else {
            var _ref5 = [
                xAxis.scale(value[0]),
                xAxis.scale(value[1])
            ], _baseValueScale = _ref5[0], _currentValueScale = _ref5[1];
            x = _baseValueScale;
            y = (0,ChartUtils/* getCateCoordinateOfBar */.Fy)({
                axis: yAxis,
                ticks: yAxisTicks,
                bandSize: bandSize,
                offset: pos.offset,
                entry: entry,
                index: index
            });
            width = _currentValueScale - _baseValueScale;
            height = pos.size;
            background = {
                x: xAxis.x,
                y: y,
                width: xAxis.width,
                height: height
            };
            if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
                var _delta = (0,DataUtils/* mathSign */.uY)(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
                width += _delta;
            }
        }
        return Bar_objectSpread(Bar_objectSpread(Bar_objectSpread({}, entry), {}, {
            x: x,
            y: y,
            width: width,
            height: height,
            value: stackedData ? value : value[1],
            payload: entry,
            background: background
        }, cells && cells[index] && cells[index].props), {}, {
            tooltipPayload: [
                (0,ChartUtils/* getTooltipItem */.Qo)(item, entry)
            ],
            tooltipPosition: {
                x: x + width / 2,
                y: y + height / 2
            }
        });
    });
    return Bar_objectSpread({
        data: rects,
        layout: layout
    }, offset);
});


/***/ }),

/***/ 17689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ErrorBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30761);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68874);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29480);
var _excluded = [
    "offset",
    "layout",
    "width",
    "dataKey",
    "data",
    "dataPointFormatter",
    "xAxis",
    "yAxis"
];
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
 * @fileOverview Render a group of error bar
 */ 



function ErrorBar(props) {
    var offset = props.offset, layout = props.layout, width = props.width, dataKey = props.dataKey, data = props.data, dataPointFormatter = props.dataPointFormatter, xAxis = props.xAxis, yAxis = props.yAxis, others = _objectWithoutProperties(props, _excluded);
    var svgProps = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_1__/* .filterProps */ .L6)(others, false);
    !!(props.direction === "x" && xAxis.type !== "number") ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(false) : void 0;
    var errorBars = data.map(function(entry) {
        var _dataPointFormatter = dataPointFormatter(entry, dataKey), x = _dataPointFormatter.x, y = _dataPointFormatter.y, value = _dataPointFormatter.value, errorVal = _dataPointFormatter.errorVal;
        if (!errorVal) {
            return null;
        }
        var lineCoordinates = [];
        var lowBound, highBound;
        if (Array.isArray(errorVal)) {
            var _errorVal = _slicedToArray(errorVal, 2);
            lowBound = _errorVal[0];
            highBound = _errorVal[1];
        } else {
            lowBound = highBound = errorVal;
        }
        if (layout === "vertical") {
            // error bar for horizontal charts, the y is fixed, x is a range value
            var scale = xAxis.scale;
            var yMid = y + offset;
            var yMin = yMid + width;
            var yMax = yMid - width;
            var xMin = scale(value - lowBound);
            var xMax = scale(value + highBound);
            // the right line of |--|
            lineCoordinates.push({
                x1: xMax,
                y1: yMin,
                x2: xMax,
                y2: yMax
            });
            // the middle line of |--|
            lineCoordinates.push({
                x1: xMin,
                y1: yMid,
                x2: xMax,
                y2: yMid
            });
            // the left line of |--|
            lineCoordinates.push({
                x1: xMin,
                y1: yMin,
                x2: xMin,
                y2: yMax
            });
        } else if (layout === "horizontal") {
            // error bar for horizontal charts, the x is fixed, y is a range value
            var _scale = yAxis.scale;
            var xMid = x + offset;
            var _xMin = xMid - width;
            var _xMax = xMid + width;
            var _yMin = _scale(value - lowBound);
            var _yMax = _scale(value + highBound);
            // the top line
            lineCoordinates.push({
                x1: _xMin,
                y1: _yMax,
                x2: _xMax,
                y2: _yMax
            });
            // the middle line
            lineCoordinates.push({
                x1: xMid,
                y1: _yMin,
                x2: xMid,
                y2: _yMax
            });
            // the bottom line
            lineCoordinates.push({
                x1: _xMin,
                y1: _yMin,
                x2: _xMax,
                y2: _yMin
            });
        }
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_3__/* .Layer */ .m, _extends({
            className: "recharts-errorBar",
            key: "bar-".concat(lineCoordinates.map(function(c) {
                return "".concat(c.x1, "-").concat(c.x2, "-").concat(c.y1, "-").concat(c.y2);
            }))
        }, svgProps), lineCoordinates.map(function(coordinates) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({}, coordinates, {
                key: "line-".concat(coordinates.x1, "-").concat(coordinates.x2, "-").concat(coordinates.y1, "-").concat(coordinates.y2)
            }));
        }));
    });
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_3__/* .Layer */ .m, {
        className: "recharts-errorBars"
    }, errorBars);
}
ErrorBar.defaultProps = {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
};
ErrorBar.displayName = "ErrorBar";


/***/ }),

/***/ 91965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ generateCategoricalChart)
});

// UNUSED EXPORTS: createDefaultState, getAxisMapByAxes

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js
var isNil = __webpack_require__(24934);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(40837);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/range.js
var range = __webpack_require__(14121);
var range_default = /*#__PURE__*/__webpack_require__.n(range);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var get = __webpack_require__(57074);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(50847);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js
var throttle = __webpack_require__(39962);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(49193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(30761);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/container/Surface.js
var Surface = __webpack_require__(61927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/container/Layer.js
var Layer = __webpack_require__(68874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(4549);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Legend.js + 1 modules
var Legend = __webpack_require__(77029);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Dot.js
var Dot = __webpack_require__(69219);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Rectangle.js
var Rectangle = __webpack_require__(12120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js + 1 modules
var band = __webpack_require__(11738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Text.js + 1 modules
var Text = __webpack_require__(6222);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ChartUtils.js + 87 modules
var ChartUtils = __webpack_require__(86837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/CssPrefixUtils.js
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
var PREFIX_LIST = [
    "Webkit",
    "Moz",
    "O",
    "ms"
];
var generatePrefixStyle = function generatePrefixStyle(name, value) {
    if (!name) {
        return null;
    }
    var camelName = name.replace(/(\w)/, function(v) {
        return v.toUpperCase();
    });
    var result = PREFIX_LIST.reduce(function(res, entry) {
        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, entry + camelName, value));
    }, {});
    result[name] = value;
    return result;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/Brush.js
function Brush_typeof(o) {
    "@babel/helpers - typeof";
    return Brush_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, Brush_typeof(o);
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
function Brush_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function Brush_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? Brush_ownKeys(Object(t), !0).forEach(function(r) {
            Brush_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Brush_ownKeys(Object(t)).forEach(function(r) {
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
        Object.defineProperty(target, Brush_toPropertyKey(descriptor.key), descriptor);
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
    if (call && (Brush_typeof(call) === "object" || typeof call === "function")) {
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
function Brush_defineProperty(obj, key, value) {
    key = Brush_toPropertyKey(key);
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
function Brush_toPropertyKey(t) {
    var i = Brush_toPrimitive(t, "string");
    return "symbol" == Brush_typeof(i) ? i : String(i);
}
function Brush_toPrimitive(t, r) {
    if ("object" != Brush_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != Brush_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Brush
 */ 










var createScale = function createScale(_ref) {
    var data = _ref.data, startIndex = _ref.startIndex, endIndex = _ref.endIndex, x = _ref.x, width = _ref.width, travellerWidth = _ref.travellerWidth;
    if (!data || !data.length) {
        return {};
    }
    var len = data.length;
    var scale = (0,band/* point */.x)().domain(range_default()(0, len)).range([
        x,
        x + width - travellerWidth
    ]);
    var scaleValues = scale.domain().map(function(entry) {
        return scale(entry);
    });
    return {
        isTextActive: false,
        isSlideMoving: false,
        isTravellerMoving: false,
        isTravellerFocused: false,
        startX: scale(startIndex),
        endX: scale(endIndex),
        scale: scale,
        scaleValues: scaleValues
    };
};
var isTouch = function isTouch(e) {
    return e.changedTouches && !!e.changedTouches.length;
};
var Brush = /*#__PURE__*/ function(_PureComponent) {
    _inherits(Brush, _PureComponent);
    function Brush(props) {
        var _this;
        _classCallCheck(this, Brush);
        _this = _callSuper(this, Brush, [
            props
        ]);
        Brush_defineProperty(_assertThisInitialized(_this), "handleDrag", function(e) {
            if (_this.leaveTimer) {
                clearTimeout(_this.leaveTimer);
                _this.leaveTimer = null;
            }
            if (_this.state.isTravellerMoving) {
                _this.handleTravellerMove(e);
            } else if (_this.state.isSlideMoving) {
                _this.handleSlideDrag(e);
            }
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleTouchMove", function(e) {
            if (e.changedTouches != null && e.changedTouches.length > 0) {
                _this.handleDrag(e.changedTouches[0]);
            }
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleDragEnd", function() {
            _this.setState({
                isTravellerMoving: false,
                isSlideMoving: false
            }, function() {
                var _this$props = _this.props, endIndex = _this$props.endIndex, onDragEnd = _this$props.onDragEnd, startIndex = _this$props.startIndex;
                onDragEnd === null || onDragEnd === void 0 || onDragEnd({
                    endIndex: endIndex,
                    startIndex: startIndex
                });
            });
            _this.detachDragEndListener();
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleLeaveWrapper", function() {
            if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
                _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
            }
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleEnterSlideOrTraveller", function() {
            _this.setState({
                isTextActive: true
            });
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleLeaveSlideOrTraveller", function() {
            _this.setState({
                isTextActive: false
            });
        });
        Brush_defineProperty(_assertThisInitialized(_this), "handleSlideDragStart", function(e) {
            var event = isTouch(e) ? e.changedTouches[0] : e;
            _this.setState({
                isTravellerMoving: false,
                isSlideMoving: true,
                slideMoveStartX: event.pageX
            });
            _this.attachDragEndListener();
        });
        _this.travellerDragStartHandlers = {
            startX: _this.handleTravellerDragStart.bind(_assertThisInitialized(_this), "startX"),
            endX: _this.handleTravellerDragStart.bind(_assertThisInitialized(_this), "endX")
        };
        _this.state = {};
        return _this;
    }
    _createClass(Brush, [
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.leaveTimer) {
                    clearTimeout(this.leaveTimer);
                    this.leaveTimer = null;
                }
                this.detachDragEndListener();
            }
        },
        {
            key: "getIndex",
            value: function getIndex(_ref2) {
                var startX = _ref2.startX, endX = _ref2.endX;
                var scaleValues = this.state.scaleValues;
                var _this$props2 = this.props, gap = _this$props2.gap, data = _this$props2.data;
                var lastIndex = data.length - 1;
                var min = Math.min(startX, endX);
                var max = Math.max(startX, endX);
                var minIndex = Brush.getIndexInRange(scaleValues, min);
                var maxIndex = Brush.getIndexInRange(scaleValues, max);
                return {
                    startIndex: minIndex - minIndex % gap,
                    endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
                };
            }
        },
        {
            key: "getTextOfTick",
            value: function getTextOfTick(index) {
                var _this$props3 = this.props, data = _this$props3.data, tickFormatter = _this$props3.tickFormatter, dataKey = _this$props3.dataKey;
                var text = (0,ChartUtils/* getValueByDataKey */.F$)(data[index], dataKey, index);
                return isFunction_default()(tickFormatter) ? tickFormatter(text, index) : text;
            }
        },
        {
            key: "attachDragEndListener",
            value: function attachDragEndListener() {
                window.addEventListener("mouseup", this.handleDragEnd, true);
                window.addEventListener("touchend", this.handleDragEnd, true);
                window.addEventListener("mousemove", this.handleDrag, true);
            }
        },
        {
            key: "detachDragEndListener",
            value: function detachDragEndListener() {
                window.removeEventListener("mouseup", this.handleDragEnd, true);
                window.removeEventListener("touchend", this.handleDragEnd, true);
                window.removeEventListener("mousemove", this.handleDrag, true);
            }
        },
        {
            key: "handleSlideDrag",
            value: function handleSlideDrag(e) {
                var _this$state = this.state, slideMoveStartX = _this$state.slideMoveStartX, startX = _this$state.startX, endX = _this$state.endX;
                var _this$props4 = this.props, x = _this$props4.x, width = _this$props4.width, travellerWidth = _this$props4.travellerWidth, startIndex = _this$props4.startIndex, endIndex = _this$props4.endIndex, onChange = _this$props4.onChange;
                var delta = e.pageX - slideMoveStartX;
                if (delta > 0) {
                    delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
                } else if (delta < 0) {
                    delta = Math.max(delta, x - startX, x - endX);
                }
                var newIndex = this.getIndex({
                    startX: startX + delta,
                    endX: endX + delta
                });
                if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
                    onChange(newIndex);
                }
                this.setState({
                    startX: startX + delta,
                    endX: endX + delta,
                    slideMoveStartX: e.pageX
                });
            }
        },
        {
            key: "handleTravellerDragStart",
            value: function handleTravellerDragStart(id, e) {
                var event = isTouch(e) ? e.changedTouches[0] : e;
                this.setState({
                    isSlideMoving: false,
                    isTravellerMoving: true,
                    movingTravellerId: id,
                    brushMoveStartX: event.pageX
                });
                this.attachDragEndListener();
            }
        },
        {
            key: "handleTravellerMove",
            value: function handleTravellerMove(e) {
                var _this$state2 = this.state, brushMoveStartX = _this$state2.brushMoveStartX, movingTravellerId = _this$state2.movingTravellerId, endX = _this$state2.endX, startX = _this$state2.startX;
                var prevValue = this.state[movingTravellerId];
                var _this$props5 = this.props, x = _this$props5.x, width = _this$props5.width, travellerWidth = _this$props5.travellerWidth, onChange = _this$props5.onChange, gap = _this$props5.gap, data = _this$props5.data;
                var params = {
                    startX: this.state.startX,
                    endX: this.state.endX
                };
                var delta = e.pageX - brushMoveStartX;
                if (delta > 0) {
                    delta = Math.min(delta, x + width - travellerWidth - prevValue);
                } else if (delta < 0) {
                    delta = Math.max(delta, x - prevValue);
                }
                params[movingTravellerId] = prevValue + delta;
                var newIndex = this.getIndex(params);
                var startIndex = newIndex.startIndex, endIndex = newIndex.endIndex;
                var isFullGap = function isFullGap() {
                    var lastIndex = data.length - 1;
                    if (movingTravellerId === "startX" && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === "endX" && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
                        return true;
                    }
                    return false;
                };
                this.setState(Brush_defineProperty(Brush_defineProperty({}, movingTravellerId, prevValue + delta), "brushMoveStartX", e.pageX), function() {
                    if (onChange) {
                        if (isFullGap()) {
                            onChange(newIndex);
                        }
                    }
                });
            }
        },
        {
            key: "handleTravellerMoveKeyboard",
            value: function handleTravellerMoveKeyboard(direction, id) {
                var _this2 = this;
                // scaleValues are a list of coordinates. For example: [65, 250, 435, 620, 805, 990].
                var _this$state3 = this.state, scaleValues = _this$state3.scaleValues, startX = _this$state3.startX, endX = _this$state3.endX;
                // currentScaleValue refers to which coordinate the current traveller should be placed at.
                var currentScaleValue = this.state[id];
                var currentIndex = scaleValues.indexOf(currentScaleValue);
                if (currentIndex === -1) {
                    return;
                }
                var newIndex = currentIndex + direction;
                if (newIndex === -1 || newIndex >= scaleValues.length) {
                    return;
                }
                var newScaleValue = scaleValues[newIndex];
                // Prevent travellers from being on top of each other or overlapping
                if (id === "startX" && newScaleValue >= endX || id === "endX" && newScaleValue <= startX) {
                    return;
                }
                this.setState(Brush_defineProperty({}, id, newScaleValue), function() {
                    _this2.props.onChange(_this2.getIndex({
                        startX: _this2.state.startX,
                        endX: _this2.state.endX
                    }));
                });
            }
        },
        {
            key: "renderBackground",
            value: function renderBackground() {
                var _this$props6 = this.props, x = _this$props6.x, y = _this$props6.y, width = _this$props6.width, height = _this$props6.height, fill = _this$props6.fill, stroke = _this$props6.stroke;
                return /*#__PURE__*/ react_default().createElement("rect", {
                    stroke: stroke,
                    fill: fill,
                    x: x,
                    y: y,
                    width: width,
                    height: height
                });
            }
        },
        {
            key: "renderPanorama",
            value: function renderPanorama() {
                var _this$props7 = this.props, x = _this$props7.x, y = _this$props7.y, width = _this$props7.width, height = _this$props7.height, data = _this$props7.data, children = _this$props7.children, padding = _this$props7.padding;
                var chartElement = react.Children.only(children);
                if (!chartElement) {
                    return null;
                }
                return /*#__PURE__*/ react_default().cloneElement(chartElement, {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    margin: padding,
                    compact: true,
                    data: data
                });
            }
        },
        {
            key: "renderTravellerLayer",
            value: function renderTravellerLayer(travellerX, id) {
                var _data$startIndex, _data$endIndex, _this3 = this;
                var _this$props8 = this.props, y = _this$props8.y, travellerWidth = _this$props8.travellerWidth, height = _this$props8.height, traveller = _this$props8.traveller, ariaLabel = _this$props8.ariaLabel, data = _this$props8.data, startIndex = _this$props8.startIndex, endIndex = _this$props8.endIndex;
                var x = Math.max(travellerX, this.props.x);
                var travellerProps = Brush_objectSpread(Brush_objectSpread({}, (0,ReactUtils/* filterProps */.L6)(this.props, false)), {}, {
                    x: x,
                    y: y,
                    width: travellerWidth,
                    height: height
                });
                var ariaLabelBrush = ariaLabel || "Min value: ".concat((_data$startIndex = data[startIndex]) === null || _data$startIndex === void 0 ? void 0 : _data$startIndex.name, ", Max value: ").concat((_data$endIndex = data[endIndex]) === null || _data$endIndex === void 0 ? void 0 : _data$endIndex.name);
                return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": ariaLabelBrush,
                    "aria-valuenow": travellerX,
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[id],
                    onTouchStart: this.travellerDragStartHandlers[id],
                    onKeyDown: function onKeyDown(e) {
                        if (![
                            "ArrowLeft",
                            "ArrowRight"
                        ].includes(e.key)) {
                            return;
                        }
                        e.preventDefault();
                        e.stopPropagation();
                        _this3.handleTravellerMoveKeyboard(e.key === "ArrowRight" ? 1 : -1, id);
                    },
                    onFocus: function onFocus() {
                        _this3.setState({
                            isTravellerFocused: true
                        });
                    },
                    onBlur: function onBlur() {
                        _this3.setState({
                            isTravellerFocused: false
                        });
                    },
                    style: {
                        cursor: "col-resize"
                    }
                }, Brush.renderTraveller(traveller, travellerProps));
            }
        },
        {
            key: "renderSlide",
            value: function renderSlide(startX, endX) {
                var _this$props9 = this.props, y = _this$props9.y, height = _this$props9.height, stroke = _this$props9.stroke, travellerWidth = _this$props9.travellerWidth;
                var x = Math.min(startX, endX) + travellerWidth;
                var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
                return /*#__PURE__*/ react_default().createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: stroke,
                    fillOpacity: 0.2,
                    x: x,
                    y: y,
                    width: width,
                    height: height
                });
            }
        },
        {
            key: "renderText",
            value: function renderText() {
                var _this$props10 = this.props, startIndex = _this$props10.startIndex, endIndex = _this$props10.endIndex, y = _this$props10.y, height = _this$props10.height, travellerWidth = _this$props10.travellerWidth, stroke = _this$props10.stroke;
                var _this$state4 = this.state, startX = _this$state4.startX, endX = _this$state4.endX;
                var offset = 5;
                var attrs = {
                    pointerEvents: "none",
                    fill: stroke
                };
                return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
                    className: "recharts-brush-texts"
                }, /*#__PURE__*/ react_default().createElement(Text/* Text */.x, _extends({
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(startX, endX) - offset,
                    y: y + height / 2
                }, attrs), this.getTextOfTick(startIndex)), /*#__PURE__*/ react_default().createElement(Text/* Text */.x, _extends({
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(startX, endX) + travellerWidth + offset,
                    y: y + height / 2
                }, attrs), this.getTextOfTick(endIndex)));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props11 = this.props, data = _this$props11.data, className = _this$props11.className, children = _this$props11.children, x = _this$props11.x, y = _this$props11.y, width = _this$props11.width, height = _this$props11.height, alwaysShowText = _this$props11.alwaysShowText;
                var _this$state5 = this.state, startX = _this$state5.startX, endX = _this$state5.endX, isTextActive = _this$state5.isTextActive, isSlideMoving = _this$state5.isSlideMoving, isTravellerMoving = _this$state5.isTravellerMoving, isTravellerFocused = _this$state5.isTravellerFocused;
                if (!data || !data.length || !(0,DataUtils/* isNumber */.hj)(x) || !(0,DataUtils/* isNumber */.hj)(y) || !(0,DataUtils/* isNumber */.hj)(width) || !(0,DataUtils/* isNumber */.hj)(height) || width <= 0 || height <= 0) {
                    return null;
                }
                var layerClass = (0,clsx/* default */.Z)("recharts-brush", className);
                var isPanoramic = react_default().Children.count(children) === 1;
                var style = generatePrefixStyle("userSelect", "none");
                return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
                    className: layerClass,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: style
                }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, "startX"), this.renderTravellerLayer(endX, "endX"), (isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) && this.renderText());
            }
        }
    ], [
        {
            key: "renderDefaultTraveller",
            value: function renderDefaultTraveller(props) {
                var x = props.x, y = props.y, width = props.width, height = props.height, stroke = props.stroke;
                var lineY = Math.floor(y + height / 2) - 1;
                return /*#__PURE__*/ react_default().createElement((react_default()).Fragment, null, /*#__PURE__*/ react_default().createElement("rect", {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    fill: stroke,
                    stroke: "none"
                }), /*#__PURE__*/ react_default().createElement("line", {
                    x1: x + 1,
                    y1: lineY,
                    x2: x + width - 1,
                    y2: lineY,
                    fill: "none",
                    stroke: "#fff"
                }), /*#__PURE__*/ react_default().createElement("line", {
                    x1: x + 1,
                    y1: lineY + 2,
                    x2: x + width - 1,
                    y2: lineY + 2,
                    fill: "none",
                    stroke: "#fff"
                }));
            }
        },
        {
            key: "renderTraveller",
            value: function renderTraveller(option, props) {
                var rectangle;
                if (/*#__PURE__*/ react_default().isValidElement(option)) {
                    rectangle = /*#__PURE__*/ react_default().cloneElement(option, props);
                } else if (isFunction_default()(option)) {
                    rectangle = option(props);
                } else {
                    rectangle = Brush.renderDefaultTraveller(props);
                }
                return rectangle;
            }
        },
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                var data = nextProps.data, width = nextProps.width, x = nextProps.x, travellerWidth = nextProps.travellerWidth, updateId = nextProps.updateId, startIndex = nextProps.startIndex, endIndex = nextProps.endIndex;
                if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
                    return Brush_objectSpread({
                        prevData: data,
                        prevTravellerWidth: travellerWidth,
                        prevUpdateId: updateId,
                        prevX: x,
                        prevWidth: width
                    }, data && data.length ? createScale({
                        data: data,
                        width: width,
                        x: x,
                        travellerWidth: travellerWidth,
                        startIndex: startIndex,
                        endIndex: endIndex
                    }) : {
                        scale: null,
                        scaleValues: null
                    });
                }
                if (prevState.scale && (width !== prevState.prevWidth || x !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
                    prevState.scale.range([
                        x,
                        x + width - travellerWidth
                    ]);
                    var scaleValues = prevState.scale.domain().map(function(entry) {
                        return prevState.scale(entry);
                    });
                    return {
                        prevData: data,
                        prevTravellerWidth: travellerWidth,
                        prevUpdateId: updateId,
                        prevX: x,
                        prevWidth: width,
                        startX: prevState.scale(nextProps.startIndex),
                        endX: prevState.scale(nextProps.endIndex),
                        scaleValues: scaleValues
                    };
                }
                return null;
            }
        },
        {
            key: "getIndexInRange",
            value: function getIndexInRange(valueRange, x) {
                var len = valueRange.length;
                var start = 0;
                var end = len - 1;
                while(end - start > 1){
                    var middle = Math.floor((start + end) / 2);
                    if (valueRange[middle] > x) {
                        end = middle;
                    } else {
                        start = middle;
                    }
                }
                return x >= valueRange[end] ? end : start;
            }
        }
    ]);
    return Brush;
}(react.PureComponent);
Brush_defineProperty(Brush, "displayName", "Brush");
Brush_defineProperty(Brush, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1000,
    alwaysShowText: false
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DOMUtils.js
var DOMUtils = __webpack_require__(64095);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/getLegendProps.js
var getLegendProps = __webpack_require__(51665);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Label.js
var Label = __webpack_require__(29043);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/IfOverflowMatches.js
var ifOverflowMatches = function ifOverflowMatches(props, value) {
    var alwaysShow = props.alwaysShow;
    var ifOverflow = props.ifOverflow;
    if (alwaysShow) {
        ifOverflow = "extendDomain";
    }
    return ifOverflow === value;
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/CartesianUtils.js
var CartesianUtils = __webpack_require__(64239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/LogUtils.js
var LogUtils = __webpack_require__(31640);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/ReferenceDot.js
function ReferenceDot_typeof(o) {
    "@babel/helpers - typeof";
    return ReferenceDot_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, ReferenceDot_typeof(o);
}
function ReferenceDot_extends() {
    ReferenceDot_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return ReferenceDot_extends.apply(this, arguments);
}
function ReferenceDot_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function ReferenceDot_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ReferenceDot_ownKeys(Object(t), !0).forEach(function(r) {
            ReferenceDot_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceDot_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function ReferenceDot_defineProperty(obj, key, value) {
    key = ReferenceDot_toPropertyKey(key);
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
function ReferenceDot_toPropertyKey(t) {
    var i = ReferenceDot_toPrimitive(t, "string");
    return "symbol" == ReferenceDot_typeof(i) ? i : String(i);
}
function ReferenceDot_toPrimitive(t, r) {
    if ("object" != ReferenceDot_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != ReferenceDot_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Reference Dot
 */ 










var getCoordinate = function getCoordinate(props) {
    var x = props.x, y = props.y, xAxis = props.xAxis, yAxis = props.yAxis;
    var scales = (0,CartesianUtils/* createLabeledScales */.Ky)({
        x: xAxis.scale,
        y: yAxis.scale
    });
    var result = scales.apply({
        x: x,
        y: y
    }, {
        bandAware: true
    });
    if (ifOverflowMatches(props, "discard") && !scales.isInRange(result)) {
        return null;
    }
    return result;
};
function ReferenceDot(props) {
    var x = props.x, y = props.y, r = props.r, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
    var isX = (0,DataUtils/* isNumOrStr */.P2)(x);
    var isY = (0,DataUtils/* isNumOrStr */.P2)(y);
    (0,LogUtils/* warn */.Z)(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    if (!isX || !isY) {
        return null;
    }
    var coordinate = getCoordinate(props);
    if (!coordinate) {
        return null;
    }
    var cx = coordinate.x, cy = coordinate.y;
    var shape = props.shape, className = props.className;
    var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : undefined;
    var dotProps = ReferenceDot_objectSpread(ReferenceDot_objectSpread({
        clipPath: clipPath
    }, (0,ReactUtils/* filterProps */.L6)(props, true)), {}, {
        cx: cx,
        cy: cy
    });
    return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
        className: (0,clsx/* default */.Z)("recharts-reference-dot", className)
    }, ReferenceDot.renderDot(shape, dotProps), Label/* Label */._.renderCallByParent(props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r
    }));
}
ReferenceDot.displayName = "ReferenceDot";
ReferenceDot.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
};
ReferenceDot.renderDot = function(option, props) {
    var dot;
    if (/*#__PURE__*/ react_default().isValidElement(option)) {
        dot = /*#__PURE__*/ react_default().cloneElement(option, props);
    } else if (isFunction_default()(option)) {
        dot = option(props);
    } else {
        dot = /*#__PURE__*/ react_default().createElement(Dot/* Dot */.o, ReferenceDot_extends({}, props, {
            cx: props.cx,
            cy: props.cy,
            className: "recharts-reference-dot-dot"
        }));
    }
    return dot;
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/some.js
var some = __webpack_require__(38378);
var some_default = /*#__PURE__*/__webpack_require__.n(some);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/context/chartLayoutContext.js + 1 modules
var chartLayoutContext = __webpack_require__(38306);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/ReferenceLine.js
function ReferenceLine_typeof(o) {
    "@babel/helpers - typeof";
    return ReferenceLine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, ReferenceLine_typeof(o);
}
function ReferenceLine_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function ReferenceLine_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ReferenceLine_ownKeys(Object(t), !0).forEach(function(r) {
            ReferenceLine_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceLine_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function ReferenceLine_defineProperty(obj, key, value) {
    key = ReferenceLine_toPropertyKey(key);
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
function ReferenceLine_toPropertyKey(t) {
    var i = ReferenceLine_toPrimitive(t, "string");
    return "symbol" == ReferenceLine_typeof(i) ? i : String(i);
}
function ReferenceLine_toPrimitive(t, r) {
    if ("object" != ReferenceLine_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != ReferenceLine_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function ReferenceLine_extends() {
    ReferenceLine_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return ReferenceLine_extends.apply(this, arguments);
}
/**
 * @fileOverview Reference Line
 */ 











/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `filterProps` which filters the viewBox away anyway
 */ var renderLine = function renderLine(option, props) {
    var line;
    if (/*#__PURE__*/ react_default().isValidElement(option)) {
        line = /*#__PURE__*/ react_default().cloneElement(option, props);
    } else if (isFunction_default()(option)) {
        line = option(props);
    } else {
        line = /*#__PURE__*/ react_default().createElement("line", ReferenceLine_extends({}, props, {
            className: "recharts-reference-line-line"
        }));
    }
    return line;
};
// TODO: ScaleHelper
var getEndPoints = function getEndPoints(scales, isFixedX, isFixedY, isSegment, viewBox, position, xAxisOrientation, yAxisOrientation, props) {
    var x = viewBox.x, y = viewBox.y, width = viewBox.width, height = viewBox.height;
    if (isFixedY) {
        var yCoord = props.y;
        var coord = scales.y.apply(yCoord, {
            position: position
        });
        if (ifOverflowMatches(props, "discard") && !scales.y.isInRange(coord)) {
            return null;
        }
        var points = [
            {
                x: x + width,
                y: coord
            },
            {
                x: x,
                y: coord
            }
        ];
        return yAxisOrientation === "left" ? points.reverse() : points;
    }
    if (isFixedX) {
        var xCoord = props.x;
        var _coord = scales.x.apply(xCoord, {
            position: position
        });
        if (ifOverflowMatches(props, "discard") && !scales.x.isInRange(_coord)) {
            return null;
        }
        var _points = [
            {
                x: _coord,
                y: y + height
            },
            {
                x: _coord,
                y: y
            }
        ];
        return xAxisOrientation === "top" ? _points.reverse() : _points;
    }
    if (isSegment) {
        var segment = props.segment;
        var _points2 = segment.map(function(p) {
            return scales.apply(p, {
                position: position
            });
        });
        if (ifOverflowMatches(props, "discard") && some_default()(_points2, function(p) {
            return !scales.isInRange(p);
        })) {
            return null;
        }
        return _points2;
    }
    return null;
};
function ReferenceLine(props) {
    var fixedX = props.x, fixedY = props.y, segment = props.segment, xAxisId = props.xAxisId, yAxisId = props.yAxisId, shape = props.shape, className = props.className, alwaysShow = props.alwaysShow;
    var clipPathId = (0,chartLayoutContext/* useClipPathId */.sp)();
    var xAxis = (0,chartLayoutContext/* useXAxisOrThrow */.bH)(xAxisId);
    var yAxis = (0,chartLayoutContext/* useYAxisOrThrow */.Ud)(yAxisId);
    var viewBox = (0,chartLayoutContext/* useViewBox */.d2)();
    if (!clipPathId || !viewBox) {
        return null;
    }
    (0,LogUtils/* warn */.Z)(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var scales = (0,CartesianUtils/* createLabeledScales */.Ky)({
        x: xAxis.scale,
        y: yAxis.scale
    });
    var isX = (0,DataUtils/* isNumOrStr */.P2)(fixedX);
    var isY = (0,DataUtils/* isNumOrStr */.P2)(fixedY);
    var isSegment = segment && segment.length === 2;
    var endPoints = getEndPoints(scales, isX, isY, isSegment, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
    if (!endPoints) {
        return null;
    }
    var _endPoints = _slicedToArray(endPoints, 2), _endPoints$ = _endPoints[0], x1 = _endPoints$.x, y1 = _endPoints$.y, _endPoints$2 = _endPoints[1], x2 = _endPoints$2.x, y2 = _endPoints$2.y;
    var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : undefined;
    var lineProps = ReferenceLine_objectSpread(ReferenceLine_objectSpread({
        clipPath: clipPath
    }, (0,ReactUtils/* filterProps */.L6)(props, true)), {}, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    });
    return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
        className: (0,clsx/* default */.Z)("recharts-reference-line", className)
    }, renderLine(shape, lineProps), Label/* Label */._.renderCallByParent(props, (0,CartesianUtils/* rectWithCoords */._b)({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    })));
}
ReferenceLine.displayName = "ReferenceLine";
ReferenceLine.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/ReferenceArea.js
function ReferenceArea_typeof(o) {
    "@babel/helpers - typeof";
    return ReferenceArea_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, ReferenceArea_typeof(o);
}
function ReferenceArea_extends() {
    ReferenceArea_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return ReferenceArea_extends.apply(this, arguments);
}
function ReferenceArea_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function ReferenceArea_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ReferenceArea_ownKeys(Object(t), !0).forEach(function(r) {
            ReferenceArea_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReferenceArea_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function ReferenceArea_defineProperty(obj, key, value) {
    key = ReferenceArea_toPropertyKey(key);
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
function ReferenceArea_toPropertyKey(t) {
    var i = ReferenceArea_toPrimitive(t, "string");
    return "symbol" == ReferenceArea_typeof(i) ? i : String(i);
}
function ReferenceArea_toPrimitive(t, r) {
    if ("object" != ReferenceArea_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != ReferenceArea_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * @fileOverview Reference Line
 */ 










var getRect = function getRect(hasX1, hasX2, hasY1, hasY2, props) {
    var xValue1 = props.x1, xValue2 = props.x2, yValue1 = props.y1, yValue2 = props.y2, xAxis = props.xAxis, yAxis = props.yAxis;
    if (!xAxis || !yAxis) return null;
    var scales = (0,CartesianUtils/* createLabeledScales */.Ky)({
        x: xAxis.scale,
        y: yAxis.scale
    });
    var p1 = {
        x: hasX1 ? scales.x.apply(xValue1, {
            position: "start"
        }) : scales.x.rangeMin,
        y: hasY1 ? scales.y.apply(yValue1, {
            position: "start"
        }) : scales.y.rangeMin
    };
    var p2 = {
        x: hasX2 ? scales.x.apply(xValue2, {
            position: "end"
        }) : scales.x.rangeMax,
        y: hasY2 ? scales.y.apply(yValue2, {
            position: "end"
        }) : scales.y.rangeMax
    };
    if (ifOverflowMatches(props, "discard") && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
        return null;
    }
    return (0,CartesianUtils/* rectWithPoints */.O1)(p1, p2);
};
function ReferenceArea(props) {
    var x1 = props.x1, x2 = props.x2, y1 = props.y1, y2 = props.y2, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
    (0,LogUtils/* warn */.Z)(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var hasX1 = (0,DataUtils/* isNumOrStr */.P2)(x1);
    var hasX2 = (0,DataUtils/* isNumOrStr */.P2)(x2);
    var hasY1 = (0,DataUtils/* isNumOrStr */.P2)(y1);
    var hasY2 = (0,DataUtils/* isNumOrStr */.P2)(y2);
    var shape = props.shape;
    if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
        return null;
    }
    var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);
    if (!rect && !shape) {
        return null;
    }
    var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : undefined;
    return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
        className: (0,clsx/* default */.Z)("recharts-reference-area", className)
    }, ReferenceArea.renderRect(shape, ReferenceArea_objectSpread(ReferenceArea_objectSpread({
        clipPath: clipPath
    }, (0,ReactUtils/* filterProps */.L6)(props, true)), rect)), Label/* Label */._.renderCallByParent(props, rect));
}
ReferenceArea.displayName = "ReferenceArea";
ReferenceArea.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: 0.5,
    stroke: "none",
    strokeWidth: 1
};
ReferenceArea.renderRect = function(option, props) {
    var rect;
    if (/*#__PURE__*/ react_default().isValidElement(option)) {
        rect = /*#__PURE__*/ react_default().cloneElement(option, props);
    } else if (isFunction_default()(option)) {
        rect = option(props);
    } else {
        rect = /*#__PURE__*/ react_default().createElement(Rectangle/* Rectangle */.A, ReferenceArea_extends({}, props, {
            className: "recharts-reference-area-rect"
        }));
    }
    return rect;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DetectReferenceElementsDomain.js
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || DetectReferenceElementsDomain_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DetectReferenceElementsDomain_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return DetectReferenceElementsDomain_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DetectReferenceElementsDomain_arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return DetectReferenceElementsDomain_arrayLikeToArray(arr);
}
function DetectReferenceElementsDomain_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}






var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType, specifiedTicks) {
    var lines = (0,ReactUtils/* findAllByType */.NN)(children, ReferenceLine);
    var dots = (0,ReactUtils/* findAllByType */.NN)(children, ReferenceDot);
    var elements = [].concat(_toConsumableArray(lines), _toConsumableArray(dots));
    var areas = (0,ReactUtils/* findAllByType */.NN)(children, ReferenceArea);
    var idKey = "".concat(axisType, "Id");
    var valueKey = axisType[0];
    var finalDomain = domain;
    if (elements.length) {
        finalDomain = elements.reduce(function(result, el) {
            if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && (0,DataUtils/* isNumber */.hj)(el.props[valueKey])) {
                var value = el.props[valueKey];
                return [
                    Math.min(result[0], value),
                    Math.max(result[1], value)
                ];
            }
            return result;
        }, finalDomain);
    }
    if (areas.length) {
        var key1 = "".concat(valueKey, "1");
        var key2 = "".concat(valueKey, "2");
        finalDomain = areas.reduce(function(result, el) {
            if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && (0,DataUtils/* isNumber */.hj)(el.props[key1]) && (0,DataUtils/* isNumber */.hj)(el.props[key2])) {
                var value1 = el.props[key1];
                var value2 = el.props[key2];
                return [
                    Math.min(result[0], value1, value2),
                    Math.max(result[1], value1, value2)
                ];
            }
            return result;
        }, finalDomain);
    }
    if (specifiedTicks && specifiedTicks.length) {
        finalDomain = specifiedTicks.reduce(function(result, tick) {
            if ((0,DataUtils/* isNumber */.hj)(tick)) {
                return [
                    Math.min(result[0], tick),
                    Math.max(result[1], tick)
                ];
            }
            return result;
        }, finalDomain);
    }
    return finalDomain;
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/PolarUtils.js
var PolarUtils = __webpack_require__(55381);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ShallowEqual.js
var ShallowEqual = __webpack_require__(71183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(96402);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/Events.js

var eventCenter = new (eventemitter3_default())();

var SYNC_EVENT = "recharts.syncMouseEvents";

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/types.js
var types = __webpack_require__(33306);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/chart/AccessibilityManager.js
function AccessibilityManager_typeof(o) {
    "@babel/helpers - typeof";
    return AccessibilityManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, AccessibilityManager_typeof(o);
}
function AccessibilityManager_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function AccessibilityManager_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, AccessibilityManager_toPropertyKey(descriptor.key), descriptor);
    }
}
function AccessibilityManager_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) AccessibilityManager_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) AccessibilityManager_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function AccessibilityManager_defineProperty(obj, key, value) {
    key = AccessibilityManager_toPropertyKey(key);
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
function AccessibilityManager_toPropertyKey(t) {
    var i = AccessibilityManager_toPrimitive(t, "string");
    return "symbol" == AccessibilityManager_typeof(i) ? i : String(i);
}
function AccessibilityManager_toPrimitive(t, r) {
    if ("object" != AccessibilityManager_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != AccessibilityManager_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var AccessibilityManager = /*#__PURE__*/ function() {
    function AccessibilityManager() {
        AccessibilityManager_classCallCheck(this, AccessibilityManager);
        AccessibilityManager_defineProperty(this, "activeIndex", 0);
        AccessibilityManager_defineProperty(this, "coordinateList", []);
        AccessibilityManager_defineProperty(this, "layout", "horizontal");
    }
    AccessibilityManager_createClass(AccessibilityManager, [
        {
            key: "setDetails",
            value: function setDetails(_ref) {
                var _ref2;
                var _ref$coordinateList = _ref.coordinateList, coordinateList = _ref$coordinateList === void 0 ? null : _ref$coordinateList, _ref$container = _ref.container, container = _ref$container === void 0 ? null : _ref$container, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? null : _ref$layout, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? null : _ref$offset, _ref$mouseHandlerCall = _ref.mouseHandlerCallback, mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
                this.coordinateList = (_ref2 = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList) !== null && _ref2 !== void 0 ? _ref2 : [];
                this.container = container !== null && container !== void 0 ? container : this.container;
                this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
                this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
                this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;
                // Keep activeIndex in the bounds between 0 and the last coordinate index
                this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.spoofMouse();
            }
        },
        {
            key: "keyboardEvent",
            value: function keyboardEvent(e) {
                // The AccessibilityManager relies on the Tooltip component. When tooltips suddenly stop existing,
                // it can cause errors. We use this function to check. We don't want arrow keys to be processed
                // if there are no tooltips, since that will cause unexpected behavior of users.
                if (this.coordinateList.length === 0) {
                    return;
                }
                switch(e.key){
                    case "ArrowRight":
                        {
                            if (this.layout !== "horizontal") {
                                return;
                            }
                            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
                            this.spoofMouse();
                            break;
                        }
                    case "ArrowLeft":
                        {
                            if (this.layout !== "horizontal") {
                                return;
                            }
                            this.activeIndex = Math.max(this.activeIndex - 1, 0);
                            this.spoofMouse();
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
        },
        {
            key: "setIndex",
            value: function setIndex(newIndex) {
                this.activeIndex = newIndex;
            }
        },
        {
            key: "spoofMouse",
            value: function spoofMouse() {
                var _window, _window2;
                if (this.layout !== "horizontal") {
                    return;
                }
                // This can happen when the tooltips suddenly stop existing as children of the component
                // That update doesn't otherwise fire events, so we have to double check here.
                if (this.coordinateList.length === 0) {
                    return;
                }
                var _this$container$getBo = this.container.getBoundingClientRect(), x = _this$container$getBo.x, y = _this$container$getBo.y, height = _this$container$getBo.height;
                var coordinate = this.coordinateList[this.activeIndex].coordinate;
                var scrollOffsetX = ((_window = window) === null || _window === void 0 ? void 0 : _window.scrollX) || 0;
                var scrollOffsetY = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.scrollY) || 0;
                var pageX = x + coordinate + scrollOffsetX;
                var pageY = y + this.offset.top + height / 2 + scrollOffsetY;
                this.mouseHandlerCallback({
                    pageX: pageX,
                    pageY: pageY
                });
            }
        }
    ]);
    return AccessibilityManager;
}();

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/isDomainSpecifiedByUser.js

/**
 * Takes a domain and user props to determine whether he provided the domain via props or if we need to calculate it.
 * @param   {AxisDomain}  domain              The potential domain from props
 * @param   {Boolean}     allowDataOverflow   from props
 * @param   {String}      axisType            from props
 * @returns {Boolean}                         `true` if domain is specified by user
 */ function isDomainSpecifiedByUser(domain, allowDataOverflow, axisType) {
    if (axisType === "number" && allowDataOverflow === true && Array.isArray(domain)) {
        var domainStart = domain === null || domain === void 0 ? void 0 : domain[0];
        var domainEnd = domain === null || domain === void 0 ? void 0 : domain[1];
        /*
     * The `isNumber` check is needed because the user could also provide strings like "dataMin" via the domain props.
     * In such case, we have to compute the domain from the data.
     */ if (!!domainStart && !!domainEnd && (0,DataUtils/* isNumber */.hj)(domainStart) && (0,DataUtils/* isNumber */.hj)(domainEnd)) {
            return true;
        }
    }
    return false;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ActiveShapeUtils.js + 1 modules
var ActiveShapeUtils = __webpack_require__(66413);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Curve.js + 13 modules
var Curve = __webpack_require__(32860);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Cross.js
function Cross_typeof(o) {
    "@babel/helpers - typeof";
    return Cross_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, Cross_typeof(o);
}
var _excluded = [
    "x",
    "y",
    "top",
    "left",
    "width",
    "height",
    "className"
];
function Cross_extends() {
    Cross_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return Cross_extends.apply(this, arguments);
}
function Cross_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function Cross_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? Cross_ownKeys(Object(t), !0).forEach(function(r) {
            Cross_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cross_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function Cross_defineProperty(obj, key, value) {
    key = Cross_toPropertyKey(key);
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
function Cross_toPropertyKey(t) {
    var i = Cross_toPrimitive(t, "string");
    return "symbol" == Cross_typeof(i) ? i : String(i);
}
function Cross_toPrimitive(t, r) {
    if ("object" != Cross_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != Cross_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
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
 * @fileOverview Cross
 */ 



var getPath = function getPath(x, y, width, height, top, left) {
    return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = function Cross(_ref) {
    var _ref$x = _ref.x, x = _ref$x === void 0 ? 0 : _ref$x, _ref$y = _ref.y, y = _ref$y === void 0 ? 0 : _ref$y, _ref$top = _ref.top, top = _ref$top === void 0 ? 0 : _ref$top, _ref$left = _ref.left, left = _ref$left === void 0 ? 0 : _ref$left, _ref$width = _ref.width, width = _ref$width === void 0 ? 0 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? 0 : _ref$height, className = _ref.className, rest = _objectWithoutProperties(_ref, _excluded);
    var props = Cross_objectSpread({
        x: x,
        y: y,
        top: top,
        left: left,
        width: width,
        height: height
    }, rest);
    if (!(0,DataUtils/* isNumber */.hj)(x) || !(0,DataUtils/* isNumber */.hj)(y) || !(0,DataUtils/* isNumber */.hj)(width) || !(0,DataUtils/* isNumber */.hj)(height) || !(0,DataUtils/* isNumber */.hj)(top) || !(0,DataUtils/* isNumber */.hj)(left)) {
        return null;
    }
    return /*#__PURE__*/ react_default().createElement("path", Cross_extends({}, (0,ReactUtils/* filterProps */.L6)(props, true), {
        className: (0,clsx/* default */.Z)("recharts-cross", className),
        d: getPath(x, y, width, height, top, left)
    }));
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/cursor/getCursorRectangle.js
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
    var halfSize = tooltipAxisBandSize / 2;
    return {
        stroke: "none",
        fill: "#ccc",
        x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
        y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
        width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
        height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
    };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js

/**
 * Only applicable for radial layouts
 * @param {Object} activeCoordinate ChartCoordinate
 * @returns {Object} RadialCursorPoints
 */ function getRadialCursorPoints(activeCoordinate) {
    var cx = activeCoordinate.cx, cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
    var startPoint = (0,PolarUtils/* polarToCartesian */.op)(cx, cy, radius, startAngle);
    var endPoint = (0,PolarUtils/* polarToCartesian */.op)(cx, cy, radius, endAngle);
    return {
        points: [
            startPoint,
            endPoint
        ],
        cx: cx,
        cy: cy,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Sector.js
var Sector = __webpack_require__(87921);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/cursor/getCursorPoints.js


function getCursorPoints(layout, activeCoordinate, offset) {
    var x1, y1, x2, y2;
    if (layout === "horizontal") {
        x1 = activeCoordinate.x;
        x2 = x1;
        y1 = offset.top;
        y2 = offset.top + offset.height;
    } else if (layout === "vertical") {
        y1 = activeCoordinate.y;
        y2 = y1;
        x1 = offset.left;
        x2 = offset.left + offset.width;
    } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
        if (layout === "centric") {
            var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
            var innerPoint = (0,PolarUtils/* polarToCartesian */.op)(cx, cy, innerRadius, angle);
            var outerPoint = (0,PolarUtils/* polarToCartesian */.op)(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
        } else {
            return getRadialCursorPoints(activeCoordinate);
        }
    }
    return [
        {
            x: x1,
            y: y1
        },
        {
            x: x2,
            y: y2
        }
    ];
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Cursor.js
function Cursor_typeof(o) {
    "@babel/helpers - typeof";
    return Cursor_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, Cursor_typeof(o);
}
function Cursor_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function Cursor_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? Cursor_ownKeys(Object(t), !0).forEach(function(r) {
            Cursor_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cursor_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function Cursor_defineProperty(obj, key, value) {
    key = Cursor_toPropertyKey(key);
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
function Cursor_toPropertyKey(t) {
    var i = Cursor_toPrimitive(t, "string");
    return "symbol" == Cursor_typeof(i) ? i : String(i);
}
function Cursor_toPrimitive(t, r) {
    if ("object" != Cursor_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != Cursor_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}










/*
 * Cursor is the background, or a highlight,
 * that shows when user mouses over or activates
 * an area.
 *
 * It usually shows together with a tooltip
 * to emphasise which part of the chart does the tooltip refer to.
 */ function Cursor(props) {
    var element = props.element, tooltipEventType = props.tooltipEventType, isActive = props.isActive, activeCoordinate = props.activeCoordinate, activePayload = props.activePayload, offset = props.offset, activeTooltipIndex = props.activeTooltipIndex, tooltipAxisBandSize = props.tooltipAxisBandSize, layout = props.layout, chartName = props.chartName;
    if (!element || !element.props.cursor || !isActive || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
        return null;
    }
    var restProps;
    var cursorComp = Curve/* Curve */.H;
    if (chartName === "ScatterChart") {
        restProps = activeCoordinate;
        cursorComp = Cross;
    } else if (chartName === "BarChart") {
        restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
        cursorComp = Rectangle/* Rectangle */.A;
    } else if (layout === "radial") {
        var _getRadialCursorPoint = getRadialCursorPoints(activeCoordinate), cx = _getRadialCursorPoint.cx, cy = _getRadialCursorPoint.cy, radius = _getRadialCursorPoint.radius, startAngle = _getRadialCursorPoint.startAngle, endAngle = _getRadialCursorPoint.endAngle;
        restProps = {
            cx: cx,
            cy: cy,
            startAngle: startAngle,
            endAngle: endAngle,
            innerRadius: radius,
            outerRadius: radius
        };
        cursorComp = Sector/* Sector */.L;
    } else {
        restProps = {
            points: getCursorPoints(layout, activeCoordinate, offset)
        };
        cursorComp = Curve/* Curve */.H;
    }
    var cursorProps = Cursor_objectSpread(Cursor_objectSpread(Cursor_objectSpread(Cursor_objectSpread({
        stroke: "#ccc",
        pointerEvents: "none"
    }, offset), restProps), (0,ReactUtils/* filterProps */.L6)(element.props.cursor, false)), {}, {
        payload: activePayload,
        payloadIndex: activeTooltipIndex,
        className: (0,clsx/* default */.Z)("recharts-tooltip-cursor", element.props.cursor.className)
    });
    return /*#__PURE__*/ (0,react.isValidElement)(element.props.cursor) ? /*#__PURE__*/ (0,react.cloneElement)(element.props.cursor, cursorProps) : /*#__PURE__*/ (0,react.createElement)(cursorComp, cursorProps);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/chart/generateCategoricalChart.js
var generateCategoricalChart_excluded = [
    "item"
], _excluded2 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc"
];
function generateCategoricalChart_typeof(o) {
    "@babel/helpers - typeof";
    return generateCategoricalChart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, generateCategoricalChart_typeof(o);
}
function generateCategoricalChart_extends() {
    generateCategoricalChart_extends = Object.assign ? Object.assign.bind() : function(target) {
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
    return generateCategoricalChart_extends.apply(this, arguments);
}
function generateCategoricalChart_slicedToArray(arr, i) {
    return generateCategoricalChart_arrayWithHoles(arr) || generateCategoricalChart_iterableToArrayLimit(arr, i) || generateCategoricalChart_unsupportedIterableToArray(arr, i) || generateCategoricalChart_nonIterableRest();
}
function generateCategoricalChart_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function generateCategoricalChart_iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function generateCategoricalChart_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function generateCategoricalChart_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = generateCategoricalChart_objectWithoutPropertiesLoose(source, excluded);
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
function generateCategoricalChart_objectWithoutPropertiesLoose(source, excluded) {
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
function generateCategoricalChart_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function generateCategoricalChart_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, generateCategoricalChart_toPropertyKey(descriptor.key), descriptor);
    }
}
function generateCategoricalChart_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) generateCategoricalChart_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) generateCategoricalChart_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function generateCategoricalChart_callSuper(t, o, e) {
    return o = generateCategoricalChart_getPrototypeOf(o), generateCategoricalChart_possibleConstructorReturn(t, generateCategoricalChart_isNativeReflectConstruct() ? Reflect.construct(o, e || [], generateCategoricalChart_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function generateCategoricalChart_possibleConstructorReturn(self, call) {
    if (call && (generateCategoricalChart_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return generateCategoricalChart_assertThisInitialized(self);
}
function generateCategoricalChart_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (generateCategoricalChart_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function generateCategoricalChart_getPrototypeOf(o) {
    generateCategoricalChart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return generateCategoricalChart_getPrototypeOf(o);
}
function generateCategoricalChart_assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function generateCategoricalChart_inherits(subClass, superClass) {
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
    if (superClass) generateCategoricalChart_setPrototypeOf(subClass, superClass);
}
function generateCategoricalChart_setPrototypeOf(o, p) {
    generateCategoricalChart_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return generateCategoricalChart_setPrototypeOf(o, p);
}
function generateCategoricalChart_toConsumableArray(arr) {
    return generateCategoricalChart_arrayWithoutHoles(arr) || generateCategoricalChart_iterableToArray(arr) || generateCategoricalChart_unsupportedIterableToArray(arr) || generateCategoricalChart_nonIterableSpread();
}
function generateCategoricalChart_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function generateCategoricalChart_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return generateCategoricalChart_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateCategoricalChart_arrayLikeToArray(o, minLen);
}
function generateCategoricalChart_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function generateCategoricalChart_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return generateCategoricalChart_arrayLikeToArray(arr);
}
function generateCategoricalChart_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function generateCategoricalChart_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function generateCategoricalChart_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? generateCategoricalChart_ownKeys(Object(t), !0).forEach(function(r) {
            generateCategoricalChart_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : generateCategoricalChart_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function generateCategoricalChart_defineProperty(obj, key, value) {
    key = generateCategoricalChart_toPropertyKey(key);
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
function generateCategoricalChart_toPropertyKey(t) {
    var i = generateCategoricalChart_toPrimitive(t, "string");
    return "symbol" == generateCategoricalChart_typeof(i) ? i : String(i);
}
function generateCategoricalChart_toPrimitive(t, r) {
    if ("object" != generateCategoricalChart_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != generateCategoricalChart_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}








// eslint-disable-next-line no-restricted-imports






















var ORIENT_MAP = {
    xAxis: [
        "bottom",
        "top"
    ],
    yAxis: [
        "left",
        "right"
    ]
};
var FULL_WIDTH_AND_HEIGHT = {
    width: "100%",
    height: "100%"
};
var originCoordinate = {
    x: 0,
    y: 0
};
/**
 * This function exists as a temporary workaround.
 *
 * Why? generateCategoricalChart does not render `{children}` directly;
 * instead it passes them through `renderByOrder` function which reads their handlers.
 *
 * So, this is a handler that does nothing.
 * Once we get rid of `renderByOrder` and switch to JSX only, we can get rid of this handler too.
 *
 * @param {JSX} element as is in JSX
 * @returns {JSX} the same element
 */ function renderAsIs(element) {
    return element;
}
var calculateTooltipPos = function calculateTooltipPos(rangeObj, layout) {
    if (layout === "horizontal") {
        return rangeObj.x;
    }
    if (layout === "vertical") {
        return rangeObj.y;
    }
    if (layout === "centric") {
        return rangeObj.angle;
    }
    return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj) {
    var entry = tooltipTicks.find(function(tick) {
        return tick && tick.index === activeIndex;
    });
    if (entry) {
        if (layout === "horizontal") {
            return {
                x: entry.coordinate,
                y: rangeObj.y
            };
        }
        if (layout === "vertical") {
            return {
                x: rangeObj.x,
                y: entry.coordinate
            };
        }
        if (layout === "centric") {
            var _angle = entry.coordinate;
            var _radius = rangeObj.radius;
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, rangeObj), (0,PolarUtils/* polarToCartesian */.op)(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
                angle: _angle,
                radius: _radius
            });
        }
        var radius = entry.coordinate;
        var angle = rangeObj.angle;
        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, rangeObj), (0,PolarUtils/* polarToCartesian */.op)(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
            angle: angle,
            radius: radius
        });
    }
    return originCoordinate;
};
var getDisplayedData = function getDisplayedData(data, _ref) {
    var graphicalItems = _ref.graphicalItems, dataStartIndex = _ref.dataStartIndex, dataEndIndex = _ref.dataEndIndex;
    var itemsData = (graphicalItems !== null && graphicalItems !== void 0 ? graphicalItems : []).reduce(function(result, child) {
        var itemData = child.props.data;
        if (itemData && itemData.length) {
            return [].concat(generateCategoricalChart_toConsumableArray(result), generateCategoricalChart_toConsumableArray(itemData));
        }
        return result;
    }, []);
    if (itemsData.length > 0) {
        return itemsData;
    }
    if (data && data.length && (0,DataUtils/* isNumber */.hj)(dataStartIndex) && (0,DataUtils/* isNumber */.hj)(dataEndIndex)) {
        return data.slice(dataStartIndex, dataEndIndex + 1);
    }
    return [];
};
function getDefaultDomainByAxisType(axisType) {
    return axisType === "number" ? [
        0,
        "auto"
    ] : undefined;
}
/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */ var getTooltipContent = function getTooltipContent(state, chartData, activeIndex, activeLabel) {
    var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
    var displayedData = getDisplayedData(chartData, state);
    if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
        return null;
    }
    // get data by activeIndex when the axis don't allow duplicated category
    return graphicalItems.reduce(function(result, child) {
        var _child$props$data;
        /**
     * Fixes: https://github.com/recharts/recharts/issues/3669
     * Defaulting to chartData below to fix an edge case where the tooltip does not include data from all charts
     * when a separate dataset is passed to chart prop data and specified on Line/Area/etc prop data
     */ var data = (_child$props$data = child.props.data) !== null && _child$props$data !== void 0 ? _child$props$data : chartData;
        if (data && state.dataStartIndex + state.dataEndIndex !== 0) {
            data = data.slice(state.dataStartIndex, state.dataEndIndex + 1);
        }
        var payload;
        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // graphic child has data props
            var entries = data === undefined ? displayedData : data;
            payload = (0,DataUtils/* findEntryInArray */.Ap)(entries, tooltipAxis.dataKey, activeLabel);
        } else {
            payload = data && data[activeIndex] || displayedData[activeIndex];
        }
        if (!payload) {
            return result;
        }
        return [].concat(generateCategoricalChart_toConsumableArray(result), [
            (0,ChartUtils/* getTooltipItem */.Qo)(child, payload)
        ]);
    }, []);
};
/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */ var getTooltipData = function getTooltipData(state, chartData, layout, rangeObj) {
    var rangeData = rangeObj || {
        x: state.chartX,
        y: state.chartY
    };
    var pos = calculateTooltipPos(rangeData, layout);
    var ticks = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
    var activeIndex = (0,ChartUtils/* calculateActiveTickIndex */.VO)(pos, ticks, tooltipTicks, axis);
    if (activeIndex >= 0 && tooltipTicks) {
        var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
        var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
        var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
        return {
            activeTooltipIndex: activeIndex,
            activeLabel: activeLabel,
            activePayload: activePayload,
            activeCoordinate: activeCoordinate
        };
    }
    return null;
};
/**
 * Get the configuration of axis by the options of axis instance
 * @param  {Object} props         Latest props
 * @param {Array}  axes           The instance of axes
 * @param  {Array} graphicalItems The instances of item
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}      Configuration
 */ var getAxisMapByAxes = function getAxisMapByAxes(props, _ref2) {
    var axes = _ref2.axes, graphicalItems = _ref2.graphicalItems, axisType = _ref2.axisType, axisIdKey = _ref2.axisIdKey, stackGroups = _ref2.stackGroups, dataStartIndex = _ref2.dataStartIndex, dataEndIndex = _ref2.dataEndIndex;
    var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
    var isCategorical = (0,ChartUtils/* isCategoricalAxis */.NA)(layout, axisType);
    // Eliminate duplicated axes
    return axes.reduce(function(result, child) {
        var _child$props$domain2;
        var _child$props = child.props, type = _child$props.type, dataKey = _child$props.dataKey, allowDataOverflow = _child$props.allowDataOverflow, allowDuplicatedCategory = _child$props.allowDuplicatedCategory, scale = _child$props.scale, ticks = _child$props.ticks, includeHidden = _child$props.includeHidden;
        var axisId = child.props[axisIdKey];
        if (result[axisId]) {
            return result;
        }
        var displayedData = getDisplayedData(props.data, {
            graphicalItems: graphicalItems.filter(function(item) {
                return item.props[axisIdKey] === axisId;
            }),
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
        var len = displayedData.length;
        var domain, duplicateDomain, categoricalDomain;
        /*
     * This is a hack to short-circuit the domain creation here to enhance performance.
     * Usually, the data is used to determine the domain, but when the user specifies
     * a domain upfront (via props), there is no need to calculate the domain start and end,
     * which is very expensive for a larger amount of data.
     * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
     * because the axis is supposed to ignore the specified domain that way.
     */ if (isDomainSpecifiedByUser(child.props.domain, allowDataOverflow, type)) {
            domain = (0,ChartUtils/* parseSpecifiedDomain */.LG)(child.props.domain, null, allowDataOverflow);
            /* The chart can be categorical and have the domain specified in numbers
       * we still need to calculate the categorical domain
       * TODO: refactor this more
       */ if (isCategorical && (type === "number" || scale !== "auto")) {
                categoricalDomain = (0,ChartUtils/* getDomainOfDataByKey */.gF)(displayedData, dataKey, "category");
            }
        }
        // if the domain is defaulted we need this for `originalDomain` as well
        var defaultDomain = getDefaultDomainByAxisType(type);
        // we didn't create the domain from user's props above, so we need to calculate it
        if (!domain || domain.length === 0) {
            var _child$props$domain;
            var childDomain = (_child$props$domain = child.props.domain) !== null && _child$props$domain !== void 0 ? _child$props$domain : defaultDomain;
            if (dataKey) {
                // has dataKey in <Axis />
                domain = (0,ChartUtils/* getDomainOfDataByKey */.gF)(displayedData, dataKey, type);
                if (type === "category" && isCategorical) {
                    // the field type is category data and this axis is categorical axis
                    var duplicate = (0,DataUtils/* hasDuplicate */.bv)(domain);
                    if (allowDuplicatedCategory && duplicate) {
                        duplicateDomain = domain;
                        // When category axis has duplicated text, serial numbers are used to generate scale
                        domain = range_default()(0, len);
                    } else if (!allowDuplicatedCategory) {
                        // remove duplicated category
                        domain = (0,ChartUtils/* parseDomainOfCategoryAxis */.ko)(childDomain, domain, child).reduce(function(finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(generateCategoricalChart_toConsumableArray(finalDomain), [
                                entry
                            ]);
                        }, []);
                    }
                } else if (type === "category") {
                    // the field type is category data and this axis is numerical axis
                    if (!allowDuplicatedCategory) {
                        domain = (0,ChartUtils/* parseDomainOfCategoryAxis */.ko)(childDomain, domain, child).reduce(function(finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 || entry === "" || isNil_default()(entry) ? finalDomain : [].concat(generateCategoricalChart_toConsumableArray(finalDomain), [
                                entry
                            ]);
                        }, []);
                    } else {
                        // eliminate undefined or null or empty string
                        domain = domain.filter(function(entry) {
                            return entry !== "" && !isNil_default()(entry);
                        });
                    }
                } else if (type === "number") {
                    // the field type is numerical
                    var errorBarsDomain = (0,ChartUtils/* parseErrorBarsOfAxis */.ZI)(displayedData, graphicalItems.filter(function(item) {
                        return item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide);
                    }), dataKey, axisType, layout);
                    if (errorBarsDomain) {
                        domain = errorBarsDomain;
                    }
                }
                if (isCategorical && (type === "number" || scale !== "auto")) {
                    categoricalDomain = (0,ChartUtils/* getDomainOfDataByKey */.gF)(displayedData, dataKey, "category");
                }
            } else if (isCategorical) {
                // the axis is a categorical axis
                domain = range_default()(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === "number") {
                // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
                domain = stackOffset === "expand" ? [
                    0,
                    1
                ] : (0,ChartUtils/* getDomainOfStackGroups */.EB)(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
            } else {
                domain = (0,ChartUtils/* getDomainOfItemsWithSameAxis */.s6)(displayedData, graphicalItems.filter(function(item) {
                    return item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide);
                }), type, layout, true);
            }
            if (type === "number") {
                // To detect wether there is any reference lines whose props alwaysShow is true
                domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);
                if (childDomain) {
                    domain = (0,ChartUtils/* parseSpecifiedDomain */.LG)(childDomain, domain, allowDataOverflow);
                }
            } else if (type === "category" && childDomain) {
                var axisDomain = childDomain;
                var isDomainValid = domain.every(function(entry) {
                    return axisDomain.indexOf(entry) >= 0;
                });
                if (isDomainValid) {
                    domain = axisDomain;
                }
            }
        }
        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, axisId, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, child.props), {}, {
            axisType: axisType,
            domain: domain,
            categoricalDomain: categoricalDomain,
            duplicateDomain: duplicateDomain,
            originalDomain: (_child$props$domain2 = child.props.domain) !== null && _child$props$domain2 !== void 0 ? _child$props$domain2 : defaultDomain,
            isCategorical: isCategorical,
            layout: layout
        })));
    }, {});
};
/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */ var getAxisMapByItems = function getAxisMapByItems(props, _ref3) {
    var graphicalItems = _ref3.graphicalItems, Axis = _ref3.Axis, axisType = _ref3.axisType, axisIdKey = _ref3.axisIdKey, stackGroups = _ref3.stackGroups, dataStartIndex = _ref3.dataStartIndex, dataEndIndex = _ref3.dataEndIndex;
    var layout = props.layout, children = props.children;
    var displayedData = getDisplayedData(props.data, {
        graphicalItems: graphicalItems,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
    });
    var len = displayedData.length;
    var isCategorical = (0,ChartUtils/* isCategoricalAxis */.NA)(layout, axisType);
    var index = -1;
    // The default type of x-axis is category axis,
    // The default contents of x-axis is the serial numbers of data
    // The default type of y-axis is number axis
    // The default contents of y-axis is the domain of data
    return graphicalItems.reduce(function(result, child) {
        var axisId = child.props[axisIdKey];
        var originalDomain = getDefaultDomainByAxisType("number");
        if (!result[axisId]) {
            index++;
            var domain;
            if (isCategorical) {
                domain = range_default()(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
                domain = (0,ChartUtils/* getDomainOfStackGroups */.EB)(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
                domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
            } else {
                domain = (0,ChartUtils/* parseSpecifiedDomain */.LG)(originalDomain, (0,ChartUtils/* getDomainOfItemsWithSameAxis */.s6)(displayedData, graphicalItems.filter(function(item) {
                    return item.props[axisIdKey] === axisId && !item.props.hide;
                }), "number", layout), Axis.defaultProps.allowDataOverflow);
                domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
            }
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, axisId, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                axisType: axisType
            }, Axis.defaultProps), {}, {
                hide: true,
                orientation: get_default()(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
                domain: domain,
                originalDomain: originalDomain,
                isCategorical: isCategorical,
                layout: layout
            })));
        }
        return result;
    }, {});
};
/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {React.ComponentType}  [AxisComp]      Axis Component
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */ var getAxisMap = function getAxisMap(props, _ref4) {
    var _ref4$axisType = _ref4.axisType, axisType = _ref4$axisType === void 0 ? "xAxis" : _ref4$axisType, AxisComp = _ref4.AxisComp, graphicalItems = _ref4.graphicalItems, stackGroups = _ref4.stackGroups, dataStartIndex = _ref4.dataStartIndex, dataEndIndex = _ref4.dataEndIndex;
    var children = props.children;
    var axisIdKey = "".concat(axisType, "Id");
    // Get all the instance of Axis
    var axes = (0,ReactUtils/* findAllByType */.NN)(children, AxisComp);
    var axisMap = {};
    if (axes && axes.length) {
        axisMap = getAxisMapByAxes(props, {
            axes: axes,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
    } else if (graphicalItems && graphicalItems.length) {
        axisMap = getAxisMapByItems(props, {
            Axis: AxisComp,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
    }
    return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator(axisMap) {
    var axis = (0,DataUtils/* getAnyElementOfObject */.Kt)(axisMap);
    var tooltipTicks = (0,ChartUtils/* getTicksOfAxis */.uY)(axis, false, true);
    return {
        tooltipTicks: tooltipTicks,
        orderedTooltipTicks: sortBy_default()(tooltipTicks, function(o) {
            return o.coordinate;
        }),
        tooltipAxis: axis,
        tooltipAxisBandSize: (0,ChartUtils/* getBandSizeOfAxis */.zT)(axis, tooltipTicks)
    };
};
/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */ var createDefaultState = function createDefaultState(props) {
    var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
    var brushItem = (0,ReactUtils/* findChildByType */.sP)(children, Brush);
    var startIndex = 0;
    var endIndex = 0;
    if (props.data && props.data.length !== 0) {
        endIndex = props.data.length - 1;
    }
    if (brushItem && brushItem.props) {
        if (brushItem.props.startIndex >= 0) {
            startIndex = brushItem.props.startIndex;
        }
        if (brushItem.props.endIndex >= 0) {
            endIndex = brushItem.props.endIndex;
        }
    }
    return {
        chartX: 0,
        chartY: 0,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
        activeTooltipIndex: -1,
        isTooltipActive: Boolean(defaultShowTooltip)
    };
};
var hasGraphicalBarItem = function hasGraphicalBarItem(graphicalItems) {
    if (!graphicalItems || !graphicalItems.length) {
        return false;
    }
    return graphicalItems.some(function(item) {
        var name = (0,ReactUtils/* getDisplayName */.Gf)(item && item.type);
        return name && name.indexOf("Bar") >= 0;
    });
};
var getAxisNameByLayout = function getAxisNameByLayout(layout) {
    if (layout === "horizontal") {
        return {
            numericAxisName: "yAxis",
            cateAxisName: "xAxis"
        };
    }
    if (layout === "vertical") {
        return {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis"
        };
    }
    if (layout === "centric") {
        return {
            numericAxisName: "radiusAxis",
            cateAxisName: "angleAxis"
        };
    }
    return {
        numericAxisName: "angleAxis",
        cateAxisName: "radiusAxis"
    };
};
/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} params.props          Latest props
 * @param  {Array}  params.graphicalItems The instances of item
 * @param  {Object} params.xAxisMap       The configuration of x-axis
 * @param  {Object} params.yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox        The boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */ var calculateOffset = function calculateOffset(_ref5, prevLegendBBox) {
    var props = _ref5.props, graphicalItems = _ref5.graphicalItems, _ref5$xAxisMap = _ref5.xAxisMap, xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap, _ref5$yAxisMap = _ref5.yAxisMap, yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
    var width = props.width, height = props.height, children = props.children;
    var margin = props.margin || {};
    var brushItem = (0,ReactUtils/* findChildByType */.sP)(children, Brush);
    var legendItem = (0,ReactUtils/* findChildByType */.sP)(children, Legend/* Legend */.D);
    var offsetH = Object.keys(yAxisMap).reduce(function(result, id) {
        var entry = yAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, orientation, result[orientation] + entry.width));
        }
        return result;
    }, {
        left: margin.left || 0,
        right: margin.right || 0
    });
    var offsetV = Object.keys(xAxisMap).reduce(function(result, id) {
        var entry = xAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, orientation, get_default()(result, "".concat(orientation)) + entry.height));
        }
        return result;
    }, {
        top: margin.top || 0,
        bottom: margin.bottom || 0
    });
    var offset = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offsetV), offsetH);
    var brushBottom = offset.bottom;
    if (brushItem) {
        offset.bottom += brushItem.props.height || Brush.defaultProps.height;
    }
    if (legendItem && prevLegendBBox) {
        // @ts-expect-error margin is optional in props but required in appendOffsetOfLegend
        offset = (0,ChartUtils/* appendOffsetOfLegend */.By)(offset, graphicalItems, props, prevLegendBBox);
    }
    var offsetWidth = width - offset.left - offset.right;
    var offsetHeight = height - offset.top - offset.bottom;
    return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
        brushBottom: brushBottom
    }, offset), {}, {
        // never return negative values for height and width
        width: Math.max(offsetWidth, 0),
        height: Math.max(offsetHeight, 0)
    });
};
// Determine the size of the axis, used for calculation of relative bar sizes
var getCartesianAxisSize = function getCartesianAxisSize(axisObj, axisName) {
    if (axisName === "xAxis") {
        return axisObj[axisName].width;
    }
    if (axisName === "yAxis") {
        return axisObj[axisName].height;
    }
    // This is only supported for Bar charts (i.e. charts with cartesian axes), so we should never get here
    return undefined;
};
var generateCategoricalChart = function generateCategoricalChart(_ref6) {
    var _CategoricalChartWrapper;
    var chartName = _ref6.chartName, GraphicalChild = _ref6.GraphicalChild, _ref6$defaultTooltipE = _ref6.defaultTooltipEventType, defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? "axis" : _ref6$defaultTooltipE, _ref6$validateTooltip = _ref6.validateTooltipEventTypes, validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? [
        "axis"
    ] : _ref6$validateTooltip, axisComponents = _ref6.axisComponents, legendContent = _ref6.legendContent, formatAxisMap = _ref6.formatAxisMap, defaultProps = _ref6.defaultProps;
    var getFormatItems = function getFormatItems(props, currentState) {
        var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
        var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
        var _getAxisNameByLayout = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout.numericAxisName, cateAxisName = _getAxisNameByLayout.cateAxisName;
        var hasBar = hasGraphicalBarItem(graphicalItems);
        var formattedItems = [];
        graphicalItems.forEach(function(item, index) {
            var displayedData = getDisplayedData(props.data, {
                graphicalItems: [
                    item
                ],
                dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex
            });
            var _item$props = item.props, dataKey = _item$props.dataKey, childMaxBarSize = _item$props.maxBarSize;
            // axisId of the numerical axis
            var numericAxisId = item.props["".concat(numericAxisName, "Id")];
            // axisId of the categorical axis
            var cateAxisId = item.props["".concat(cateAxisName, "Id")];
            var axisObjInitialValue = {};
            var axisObj = axisComponents.reduce(function(result, entry) {
                var _item$type$displayNam, _item$type;
                // map of axisId to axis for a specific axis type
                var axisMap = currentState["".concat(entry.axisType, "Map")];
                // axisId of axis we are currently computing
                var id = item.props["".concat(entry.axisType, "Id")];
                /**
         * tell the user in dev mode that their configuration is incorrect if we cannot find a match between
         * axisId on the chart and axisId on the axis. zAxis does not get passed in the map for ComposedChart,
         * leave it out of the check for now.
         */ !(axisMap && axisMap[id] || entry.axisType === "zAxis") ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
                // the axis we are currently formatting
                var axis = axisMap[id];
                return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty({}, entry.axisType, axis), "".concat(entry.axisType, "Ticks"), (0,ChartUtils/* getTicksOfAxis */.uY)(axis)));
            }, axisObjInitialValue);
            var cateAxis = axisObj[cateAxisName];
            var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
            var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && (0,ChartUtils/* getStackedDataOfItem */.O3)(item, stackGroups[numericAxisId].stackGroups);
            var itemIsBar = (0,ReactUtils/* getDisplayName */.Gf)(item.type).indexOf("Bar") >= 0;
            var bandSize = (0,ChartUtils/* getBandSizeOfAxis */.zT)(cateAxis, cateTicks);
            var barPosition = [];
            var sizeList = hasBar && (0,ChartUtils/* getBarSizeList */.pt)({
                barSize: barSize,
                stackGroups: stackGroups,
                totalSize: getCartesianAxisSize(axisObj, cateAxisName)
            });
            if (itemIsBar) {
                var _ref7, _getBandSizeOfAxis;
                // If it is bar, calculate the position of bar
                var maxBarSize = isNil_default()(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
                var barBandSize = (_ref7 = (_getBandSizeOfAxis = (0,ChartUtils/* getBandSizeOfAxis */.zT)(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
                barPosition = (0,ChartUtils/* getBarPosition */.qz)({
                    barGap: barGap,
                    barCategoryGap: barCategoryGap,
                    bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
                    sizeList: sizeList[cateAxisId],
                    maxBarSize: maxBarSize
                });
                if (barBandSize !== bandSize) {
                    barPosition = barPosition.map(function(pos) {
                        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, pos), {}, {
                            position: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, pos.position), {}, {
                                offset: pos.position.offset - barBandSize / 2
                            })
                        });
                    });
                }
            }
            // @ts-expect-error we should stop reading data from ReactElements
            var composedFn = item && item.type && item.type.getComposedData;
            if (composedFn) {
                formattedItems.push({
                    props: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, composedFn(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
                        displayedData: displayedData,
                        props: props,
                        dataKey: dataKey,
                        item: item,
                        bandSize: bandSize,
                        barPosition: barPosition,
                        offset: offset,
                        stackedData: stackedData,
                        layout: layout,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex
                    }))), {}, generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty(generateCategoricalChart_defineProperty({
                        key: item.key || "item-".concat(index)
                    }, numericAxisName, axisObj[numericAxisName]), cateAxisName, axisObj[cateAxisName]), "animationId", updateId)),
                    childIndex: (0,ReactUtils/* parseChildIndex */.$R)(item, props.children),
                    item: item
                });
            }
        });
        return formattedItems;
    };
    /**
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */ var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups(_ref8, prevState) {
        var props = _ref8.props, dataStartIndex = _ref8.dataStartIndex, dataEndIndex = _ref8.dataEndIndex, updateId = _ref8.updateId;
        if (!(0,ReactUtils/* validateWidthHeight */.TT)({
            props: props
        })) {
            return null;
        }
        var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data = props.data, reverseStackOrder = props.reverseStackOrder;
        var _getAxisNameByLayout2 = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout2.numericAxisName, cateAxisName = _getAxisNameByLayout2.cateAxisName;
        var graphicalItems = (0,ReactUtils/* findAllByType */.NN)(children, GraphicalChild);
        var stackGroups = (0,ChartUtils/* getStackGroupsByAxisId */.wh)(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
        var axisObj = axisComponents.reduce(function(result, entry) {
            var name = "".concat(entry.axisType, "Map");
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, result), {}, generateCategoricalChart_defineProperty({}, name, getAxisMap(props, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, entry), {}, {
                graphicalItems: graphicalItems,
                stackGroups: entry.axisType === numericAxisName && stackGroups,
                dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex
            }))));
        }, {});
        var offset = calculateOffset(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
            props: props,
            graphicalItems: graphicalItems
        }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
        Object.keys(axisObj).forEach(function(key) {
            axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace("Map", ""), chartName);
        });
        var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
        var ticksObj = tooltipTicksGenerator(cateAxisMap);
        var formattedGraphicalItems = getFormatItems(props, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisObj), {}, {
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId,
            graphicalItems: graphicalItems,
            stackGroups: stackGroups,
            offset: offset
        }));
        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
            formattedGraphicalItems: formattedGraphicalItems,
            graphicalItems: graphicalItems,
            offset: offset,
            stackGroups: stackGroups
        }, ticksObj), axisObj);
    };
    return _CategoricalChartWrapper = /*#__PURE__*/ function(_Component) {
        generateCategoricalChart_inherits(CategoricalChartWrapper, _Component);
        function CategoricalChartWrapper(_props) {
            var _props$id, _props$throttleDelay;
            var _this;
            generateCategoricalChart_classCallCheck(this, CategoricalChartWrapper);
            _this = generateCategoricalChart_callSuper(this, CategoricalChartWrapper, [
                _props
            ]);
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "eventEmitterSymbol", Symbol("rechartsEventEmitter"));
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "accessibilityManager", new AccessibilityManager());
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleLegendBBoxUpdate", function(box) {
                if (box) {
                    var _this$state = _this.state, dataStartIndex = _this$state.dataStartIndex, dataEndIndex = _this$state.dataEndIndex, updateId = _this$state.updateId;
                    _this.setState(generateCategoricalChart_objectSpread({
                        legendBBox: box
                    }, updateStateOfAxisMapsOffsetAndStackGroups({
                        props: _this.props,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex,
                        updateId: updateId
                    }, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, _this.state), {}, {
                        legendBBox: box
                    }))));
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleReceiveSyncEvent", function(cId, data, emitter) {
                if (_this.props.syncId === cId) {
                    if (emitter === _this.eventEmitterSymbol && typeof _this.props.syncMethod !== "function") {
                        return;
                    }
                    _this.applySyncEvent(data);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleBrushChange", function(_ref9) {
                var startIndex = _ref9.startIndex, endIndex = _ref9.endIndex;
                // Only trigger changes if the extents of the brush have actually changed
                if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
                    var updateId = _this.state.updateId;
                    _this.setState(function() {
                        return generateCategoricalChart_objectSpread({
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex
                        }, updateStateOfAxisMapsOffsetAndStackGroups({
                            props: _this.props,
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex,
                            updateId: updateId
                        }, _this.state));
                    });
                    _this.triggerSyncEvent({
                        dataStartIndex: startIndex,
                        dataEndIndex: endIndex
                    });
                }
            });
            /**
       * The handler of mouse entering chart
       * @param  {Object} e              Event object
       * @return {Null}                  null
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleMouseEnter", function(e) {
                var mouse = _this.getMouseInfo(e);
                if (mouse) {
                    var _nextState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
                        isTooltipActive: true
                    });
                    _this.setState(_nextState);
                    _this.triggerSyncEvent(_nextState);
                    var onMouseEnter = _this.props.onMouseEnter;
                    if (isFunction_default()(onMouseEnter)) {
                        onMouseEnter(_nextState, e);
                    }
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "triggeredAfterMouseMove", function(e) {
                var mouse = _this.getMouseInfo(e);
                var nextState = mouse ? generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
                    isTooltipActive: true
                }) : {
                    isTooltipActive: false
                };
                _this.setState(nextState);
                _this.triggerSyncEvent(nextState);
                var onMouseMove = _this.props.onMouseMove;
                if (isFunction_default()(onMouseMove)) {
                    onMouseMove(nextState, e);
                }
            });
            /**
       * The handler of mouse entering a scatter
       * @param {Object} el The active scatter
       * @return {Object} no return
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleItemMouseEnter", function(el) {
                _this.setState(function() {
                    return {
                        isTooltipActive: true,
                        activeItem: el,
                        activePayload: el.tooltipPayload,
                        activeCoordinate: el.tooltipPosition || {
                            x: el.cx,
                            y: el.cy
                        }
                    };
                });
            });
            /**
       * The handler of mouse leaving a scatter
       * @return {Object} no return
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleItemMouseLeave", function() {
                _this.setState(function() {
                    return {
                        isTooltipActive: false
                    };
                });
            });
            /**
       * The handler of mouse moving in chart
       * @param  {React.MouseEvent} e        Event object
       * @return {void} no return
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleMouseMove", function(e) {
                e.persist();
                _this.throttleTriggeredAfterMouseMove(e);
            });
            /**
       * The handler if mouse leaving chart
       * @param {Object} e Event object
       * @return {Null} no return
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleMouseLeave", function(e) {
                _this.throttleTriggeredAfterMouseMove.cancel();
                var nextState = {
                    isTooltipActive: false
                };
                _this.setState(nextState);
                _this.triggerSyncEvent(nextState);
                var onMouseLeave = _this.props.onMouseLeave;
                if (isFunction_default()(onMouseLeave)) {
                    onMouseLeave(nextState, e);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleOuterEvent", function(e) {
                var eventName = (0,ReactUtils/* getReactEventByType */.Bh)(e);
                var event = get_default()(_this.props, "".concat(eventName));
                if (eventName && isFunction_default()(event)) {
                    var _mouse;
                    var mouse;
                    if (/.*touch.*/i.test(eventName)) {
                        mouse = _this.getMouseInfo(e.changedTouches[0]);
                    } else {
                        mouse = _this.getMouseInfo(e);
                    }
                    event((_mouse = mouse) !== null && _mouse !== void 0 ? _mouse : {}, e);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleClick", function(e) {
                var mouse = _this.getMouseInfo(e);
                if (mouse) {
                    var _nextState2 = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, mouse), {}, {
                        isTooltipActive: true
                    });
                    _this.setState(_nextState2);
                    _this.triggerSyncEvent(_nextState2);
                    var onClick = _this.props.onClick;
                    if (isFunction_default()(onClick)) {
                        onClick(_nextState2, e);
                    }
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleMouseDown", function(e) {
                var onMouseDown = _this.props.onMouseDown;
                if (isFunction_default()(onMouseDown)) {
                    var _nextState3 = _this.getMouseInfo(e);
                    onMouseDown(_nextState3, e);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleMouseUp", function(e) {
                var onMouseUp = _this.props.onMouseUp;
                if (isFunction_default()(onMouseUp)) {
                    var _nextState4 = _this.getMouseInfo(e);
                    onMouseUp(_nextState4, e);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleTouchMove", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleTouchStart", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.handleMouseDown(e.changedTouches[0]);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "handleTouchEnd", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.handleMouseUp(e.changedTouches[0]);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "triggerSyncEvent", function(data) {
                if (_this.props.syncId !== undefined) {
                    eventCenter.emit(SYNC_EVENT, _this.props.syncId, data, _this.eventEmitterSymbol);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "applySyncEvent", function(data) {
                var _this$props = _this.props, layout = _this$props.layout, syncMethod = _this$props.syncMethod;
                var updateId = _this.state.updateId;
                var dataStartIndex = data.dataStartIndex, dataEndIndex = data.dataEndIndex;
                if (data.dataStartIndex !== undefined || data.dataEndIndex !== undefined) {
                    _this.setState(generateCategoricalChart_objectSpread({
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex
                    }, updateStateOfAxisMapsOffsetAndStackGroups({
                        props: _this.props,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex,
                        updateId: updateId
                    }, _this.state)));
                } else if (data.activeTooltipIndex !== undefined) {
                    var chartX = data.chartX, chartY = data.chartY;
                    var activeTooltipIndex = data.activeTooltipIndex;
                    var _this$state2 = _this.state, offset = _this$state2.offset, tooltipTicks = _this$state2.tooltipTicks;
                    if (!offset) {
                        return;
                    }
                    if (typeof syncMethod === "function") {
                        // Call a callback function. If there is an application specific algorithm
                        activeTooltipIndex = syncMethod(tooltipTicks, data);
                    } else if (syncMethod === "value") {
                        // Set activeTooltipIndex to the index with the same value as data.activeLabel
                        // For loop instead of findIndex because the latter is very slow in some browsers
                        activeTooltipIndex = -1; // in case we cannot find the element
                        for(var i = 0; i < tooltipTicks.length; i++){
                            if (tooltipTicks[i].value === data.activeLabel) {
                                activeTooltipIndex = i;
                                break;
                            }
                        }
                    }
                    var viewBox = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offset), {}, {
                        x: offset.left,
                        y: offset.top
                    });
                    // When a categorical chart is combined with another chart, the value of chartX
                    // and chartY may beyond the boundaries.
                    var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
                    var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
                    var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
                    var activePayload = getTooltipContent(_this.state, _this.props.data, activeTooltipIndex);
                    var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
                        x: layout === "horizontal" ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
                        y: layout === "horizontal" ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
                    } : originCoordinate;
                    _this.setState(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, data), {}, {
                        activeLabel: activeLabel,
                        activeCoordinate: activeCoordinate,
                        activePayload: activePayload,
                        activeTooltipIndex: activeTooltipIndex
                    }));
                } else {
                    _this.setState(data);
                }
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderCursor", function(element) {
                var _element$props$active;
                var _this$state3 = _this.state, isTooltipActive = _this$state3.isTooltipActive, activeCoordinate = _this$state3.activeCoordinate, activePayload = _this$state3.activePayload, offset = _this$state3.offset, activeTooltipIndex = _this$state3.activeTooltipIndex, tooltipAxisBandSize = _this$state3.tooltipAxisBandSize;
                var tooltipEventType = _this.getTooltipEventType();
                // The cursor is a part of the Tooltip, and it should be shown (by default) when the Tooltip is active.
                var isActive = (_element$props$active = element.props.active) !== null && _element$props$active !== void 0 ? _element$props$active : isTooltipActive;
                var layout = _this.props.layout;
                var key = element.key || "_recharts-cursor";
                return /*#__PURE__*/ react_default().createElement(Cursor, {
                    key: key,
                    activeCoordinate: activeCoordinate,
                    activePayload: activePayload,
                    activeTooltipIndex: activeTooltipIndex,
                    chartName: chartName,
                    element: element,
                    isActive: isActive,
                    layout: layout,
                    offset: offset,
                    tooltipAxisBandSize: tooltipAxisBandSize,
                    tooltipEventType: tooltipEventType
                });
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderPolarAxis", function(element, displayName, index) {
                var axisType = get_default()(element, "type.axisType");
                var axisMap = get_default()(_this.state, "".concat(axisType, "Map"));
                var axisOption = axisMap && axisMap[element.props["".concat(axisType, "Id")]];
                return /*#__PURE__*/ (0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, axisOption), {}, {
                    className: (0,clsx/* default */.Z)(axisType, axisOption.className),
                    key: element.key || "".concat(displayName, "-").concat(index),
                    ticks: (0,ChartUtils/* getTicksOfAxis */.uY)(axisOption, true)
                }));
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderPolarGrid", function(element) {
                var _element$props = element.props, radialLines = _element$props.radialLines, polarAngles = _element$props.polarAngles, polarRadius = _element$props.polarRadius;
                var _this$state4 = _this.state, radiusAxisMap = _this$state4.radiusAxisMap, angleAxisMap = _this$state4.angleAxisMap;
                var radiusAxis = (0,DataUtils/* getAnyElementOfObject */.Kt)(radiusAxisMap);
                var angleAxis = (0,DataUtils/* getAnyElementOfObject */.Kt)(angleAxisMap);
                var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
                return /*#__PURE__*/ (0,react.cloneElement)(element, {
                    polarAngles: Array.isArray(polarAngles) ? polarAngles : (0,ChartUtils/* getTicksOfAxis */.uY)(angleAxis, true).map(function(entry) {
                        return entry.coordinate;
                    }),
                    polarRadius: Array.isArray(polarRadius) ? polarRadius : (0,ChartUtils/* getTicksOfAxis */.uY)(radiusAxis, true).map(function(entry) {
                        return entry.coordinate;
                    }),
                    cx: cx,
                    cy: cy,
                    innerRadius: innerRadius,
                    outerRadius: outerRadius,
                    key: element.key || "polar-grid",
                    radialLines: radialLines
                });
            });
            /**
       * Draw legend
       * @return {ReactElement}            The instance of Legend
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderLegend", function() {
                var formattedGraphicalItems = _this.state.formattedGraphicalItems;
                var _this$props2 = _this.props, children = _this$props2.children, width = _this$props2.width, height = _this$props2.height;
                var margin = _this.props.margin || {};
                var legendWidth = width - (margin.left || 0) - (margin.right || 0);
                var props = (0,getLegendProps/* getLegendProps */.z)({
                    children: children,
                    formattedGraphicalItems: formattedGraphicalItems,
                    legendWidth: legendWidth,
                    legendContent: legendContent
                });
                if (!props) {
                    return null;
                }
                var item = props.item, otherProps = generateCategoricalChart_objectWithoutProperties(props, generateCategoricalChart_excluded);
                return /*#__PURE__*/ (0,react.cloneElement)(item, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, otherProps), {}, {
                    chartWidth: width,
                    chartHeight: height,
                    margin: margin,
                    onBBoxUpdate: _this.handleLegendBBoxUpdate
                }));
            });
            /**
       * Draw Tooltip
       * @return {ReactElement}  The instance of Tooltip
       */ generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderTooltip", function() {
                var _tooltipItem$props$ac;
                var _this$props3 = _this.props, children = _this$props3.children, accessibilityLayer = _this$props3.accessibilityLayer;
                var tooltipItem = (0,ReactUtils/* findChildByType */.sP)(children, Tooltip/* Tooltip */.u);
                if (!tooltipItem) {
                    return null;
                }
                var _this$state5 = _this.state, isTooltipActive = _this$state5.isTooltipActive, activeCoordinate = _this$state5.activeCoordinate, activePayload = _this$state5.activePayload, activeLabel = _this$state5.activeLabel, offset = _this$state5.offset;
                // The user can set isActive on the Tooltip,
                // and we respect the user to enable customisation.
                // The Tooltip is active if the user has set isActive, or if the tooltip is active due to a mouse event.
                var isActive = (_tooltipItem$props$ac = tooltipItem.props.active) !== null && _tooltipItem$props$ac !== void 0 ? _tooltipItem$props$ac : isTooltipActive;
                return /*#__PURE__*/ (0,react.cloneElement)(tooltipItem, {
                    viewBox: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, offset), {}, {
                        x: offset.left,
                        y: offset.top
                    }),
                    active: isActive,
                    label: activeLabel,
                    payload: isActive ? activePayload : [],
                    coordinate: activeCoordinate,
                    accessibilityLayer: accessibilityLayer
                });
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderBrush", function(element) {
                var _this$props4 = _this.props, margin = _this$props4.margin, data = _this$props4.data;
                var _this$state6 = _this.state, offset = _this$state6.offset, dataStartIndex = _this$state6.dataStartIndex, dataEndIndex = _this$state6.dataEndIndex, updateId = _this$state6.updateId;
                // TODO: update brush when children update
                return /*#__PURE__*/ (0,react.cloneElement)(element, {
                    key: element.key || "_recharts-brush",
                    onChange: (0,ChartUtils/* combineEventHandlers */.DO)(_this.handleBrushChange, element.props.onChange),
                    data: data,
                    x: (0,DataUtils/* isNumber */.hj)(element.props.x) ? element.props.x : offset.left,
                    y: (0,DataUtils/* isNumber */.hj)(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
                    width: (0,DataUtils/* isNumber */.hj)(element.props.width) ? element.props.width : offset.width,
                    startIndex: dataStartIndex,
                    endIndex: dataEndIndex,
                    updateId: "brush-".concat(updateId)
                });
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderReferenceElement", function(element, displayName, index) {
                if (!element) {
                    return null;
                }
                var _assertThisInitialize = generateCategoricalChart_assertThisInitialized(_this), clipPathId = _assertThisInitialize.clipPathId;
                var _this$state7 = _this.state, xAxisMap = _this$state7.xAxisMap, yAxisMap = _this$state7.yAxisMap, offset = _this$state7.offset;
                var _element$props2 = element.props, xAxisId = _element$props2.xAxisId, yAxisId = _element$props2.yAxisId;
                return /*#__PURE__*/ (0,react.cloneElement)(element, {
                    key: element.key || "".concat(displayName, "-").concat(index),
                    xAxis: xAxisMap[xAxisId],
                    yAxis: yAxisMap[yAxisId],
                    viewBox: {
                        x: offset.left,
                        y: offset.top,
                        width: offset.width,
                        height: offset.height
                    },
                    clipPathId: clipPathId
                });
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderActivePoints", function(_ref10) {
                var item = _ref10.item, activePoint = _ref10.activePoint, basePoint = _ref10.basePoint, childIndex = _ref10.childIndex, isRange = _ref10.isRange;
                var result = [];
                var key = item.props.key;
                var _item$item$props = item.item.props, activeDot = _item$item$props.activeDot, dataKey = _item$item$props.dataKey;
                var dotProps = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                    index: childIndex,
                    dataKey: dataKey,
                    cx: activePoint.x,
                    cy: activePoint.y,
                    r: 4,
                    fill: (0,ChartUtils/* getMainColorOfGraphicItem */.fk)(item.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: activePoint.payload,
                    value: activePoint.value,
                    key: "".concat(key, "-activePoint-").concat(childIndex)
                }, (0,ReactUtils/* filterProps */.L6)(activeDot, false)), (0,types/* adaptEventHandlers */.Ym)(activeDot));
                result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));
                if (basePoint) {
                    result.push(CategoricalChartWrapper.renderActiveDot(activeDot, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, dotProps), {}, {
                        cx: basePoint.x,
                        cy: basePoint.y,
                        key: "".concat(key, "-basePoint-").concat(childIndex)
                    })));
                } else if (isRange) {
                    result.push(null);
                }
                return result;
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderGraphicChild", function(element, displayName, index) {
                var item = _this.filterFormatItem(element, displayName, index);
                if (!item) {
                    return null;
                }
                var tooltipEventType = _this.getTooltipEventType();
                var _this$state8 = _this.state, isTooltipActive = _this$state8.isTooltipActive, tooltipAxis = _this$state8.tooltipAxis, activeTooltipIndex = _this$state8.activeTooltipIndex, activeLabel = _this$state8.activeLabel;
                var children = _this.props.children;
                var tooltipItem = (0,ReactUtils/* findChildByType */.sP)(children, Tooltip/* Tooltip */.u);
                var _item$props2 = item.props, points = _item$props2.points, isRange = _item$props2.isRange, baseLine = _item$props2.baseLine;
                var _item$item$props2 = item.item.props, activeDot = _item$item$props2.activeDot, hide = _item$item$props2.hide, activeBar = _item$item$props2.activeBar, activeShape = _item$item$props2.activeShape;
                var hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
                var itemEvents = {};
                if (tooltipEventType !== "axis" && tooltipItem && tooltipItem.props.trigger === "click") {
                    itemEvents = {
                        onClick: (0,ChartUtils/* combineEventHandlers */.DO)(_this.handleItemMouseEnter, element.props.onClick)
                    };
                } else if (tooltipEventType !== "axis") {
                    itemEvents = {
                        onMouseLeave: (0,ChartUtils/* combineEventHandlers */.DO)(_this.handleItemMouseLeave, element.props.onMouseLeave),
                        onMouseEnter: (0,ChartUtils/* combineEventHandlers */.DO)(_this.handleItemMouseEnter, element.props.onMouseEnter)
                    };
                }
                var graphicalItem = /*#__PURE__*/ (0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents));
                function findWithPayload(entry) {
                    // TODO needs to verify dataKey is Function
                    return typeof tooltipAxis.dataKey === "function" ? tooltipAxis.dataKey(entry.payload) : null;
                }
                if (hasActive) {
                    if (activeTooltipIndex >= 0) {
                        var activePoint, basePoint;
                        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
                            // number transform to string
                            var specifiedKey = typeof tooltipAxis.dataKey === "function" ? findWithPayload : "payload.".concat(tooltipAxis.dataKey.toString());
                            activePoint = (0,DataUtils/* findEntryInArray */.Ap)(points, specifiedKey, activeLabel);
                            basePoint = isRange && baseLine && (0,DataUtils/* findEntryInArray */.Ap)(baseLine, specifiedKey, activeLabel);
                        } else {
                            activePoint = points === null || points === void 0 ? void 0 : points[activeTooltipIndex];
                            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
                        }
                        if (activeShape || activeBar) {
                            var activeIndex = element.props.activeIndex !== undefined ? element.props.activeIndex : activeTooltipIndex;
                            return [
                                /*#__PURE__*/ (0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents), {}, {
                                    activeIndex: activeIndex
                                })),
                                null,
                                null
                            ];
                        }
                        if (!isNil_default()(activePoint)) {
                            return [
                                graphicalItem
                            ].concat(generateCategoricalChart_toConsumableArray(_this.renderActivePoints({
                                item: item,
                                activePoint: activePoint,
                                basePoint: basePoint,
                                childIndex: activeTooltipIndex,
                                isRange: isRange
                            })));
                        }
                    } else {
                        var _this$getItemByXY;
                        /**
             * We hit this block if consumer uses a Tooltip without XAxis and/or YAxis.
             * In which case, this.state.activeTooltipIndex never gets set
             * because the mouse events that trigger that value getting set never get trigged without the axis components.
             *
             * An example usage case is a FunnelChart
             */ var _ref11 = (_this$getItemByXY = _this.getItemByXY(_this.state.activeCoordinate)) !== null && _this$getItemByXY !== void 0 ? _this$getItemByXY : {
                            graphicalItem: graphicalItem
                        }, _ref11$graphicalItem = _ref11.graphicalItem, _ref11$graphicalItem$ = _ref11$graphicalItem.item, xyItem = _ref11$graphicalItem$ === void 0 ? element : _ref11$graphicalItem$, childIndex = _ref11$graphicalItem.childIndex;
                        var elementProps = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, item.props), itemEvents), {}, {
                            activeIndex: childIndex
                        });
                        return [
                            /*#__PURE__*/ (0,react.cloneElement)(xyItem, elementProps),
                            null,
                            null
                        ];
                    }
                }
                if (isRange) {
                    return [
                        graphicalItem,
                        null,
                        null
                    ];
                }
                return [
                    graphicalItem,
                    null
                ];
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderCustomized", function(element, displayName, index) {
                return /*#__PURE__*/ (0,react.cloneElement)(element, generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                    key: "recharts-customized-".concat(index)
                }, _this.props), _this.state));
            });
            generateCategoricalChart_defineProperty(generateCategoricalChart_assertThisInitialized(_this), "renderMap", {
                CartesianGrid: {
                    handler: renderAsIs,
                    once: true
                },
                ReferenceArea: {
                    handler: _this.renderReferenceElement
                },
                ReferenceLine: {
                    handler: renderAsIs
                },
                ReferenceDot: {
                    handler: _this.renderReferenceElement
                },
                XAxis: {
                    handler: renderAsIs
                },
                YAxis: {
                    handler: renderAsIs
                },
                Brush: {
                    handler: _this.renderBrush,
                    once: true
                },
                Bar: {
                    handler: _this.renderGraphicChild
                },
                Line: {
                    handler: _this.renderGraphicChild
                },
                Area: {
                    handler: _this.renderGraphicChild
                },
                Radar: {
                    handler: _this.renderGraphicChild
                },
                RadialBar: {
                    handler: _this.renderGraphicChild
                },
                Scatter: {
                    handler: _this.renderGraphicChild
                },
                Pie: {
                    handler: _this.renderGraphicChild
                },
                Funnel: {
                    handler: _this.renderGraphicChild
                },
                Tooltip: {
                    handler: _this.renderCursor,
                    once: true
                },
                PolarGrid: {
                    handler: _this.renderPolarGrid,
                    once: true
                },
                PolarAngleAxis: {
                    handler: _this.renderPolarAxis
                },
                PolarRadiusAxis: {
                    handler: _this.renderPolarAxis
                },
                Customized: {
                    handler: _this.renderCustomized
                }
            });
            _this.clipPathId = "".concat((_props$id = _props.id) !== null && _props$id !== void 0 ? _props$id : (0,DataUtils/* uniqueId */.EL)("recharts"), "-clip");
            // trigger 60fps
            _this.throttleTriggeredAfterMouseMove = throttle_default()(_this.triggeredAfterMouseMove, (_props$throttleDelay = _props.throttleDelay) !== null && _props$throttleDelay !== void 0 ? _props$throttleDelay : 1000 / 60);
            _this.state = {};
            return _this;
        }
        generateCategoricalChart_createClass(CategoricalChartWrapper, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    var _this$props$margin$le, _this$props$margin$to;
                    this.addListener();
                    this.accessibilityManager.setDetails({
                        container: this.container,
                        offset: {
                            left: (_this$props$margin$le = this.props.margin.left) !== null && _this$props$margin$le !== void 0 ? _this$props$margin$le : 0,
                            top: (_this$props$margin$to = this.props.margin.top) !== null && _this$props$margin$to !== void 0 ? _this$props$margin$to : 0
                        },
                        coordinateList: this.state.tooltipTicks,
                        mouseHandlerCallback: this.triggeredAfterMouseMove,
                        layout: this.props.layout
                    });
                    this.displayDefaultTooltip();
                }
            },
            {
                key: "displayDefaultTooltip",
                value: function displayDefaultTooltip() {
                    var _this$props5 = this.props, children = _this$props5.children, data = _this$props5.data, height = _this$props5.height, layout = _this$props5.layout;
                    var tooltipElem = (0,ReactUtils/* findChildByType */.sP)(children, Tooltip/* Tooltip */.u);
                    // If the chart doesn't include a <Tooltip /> element, there's no tooltip to display
                    if (!tooltipElem) {
                        return;
                    }
                    var defaultIndex = tooltipElem.props.defaultIndex;
                    // Protect against runtime errors
                    if (typeof defaultIndex !== "number" || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length) {
                        return;
                    }
                    var activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
                    var activePayload = getTooltipContent(this.state, data, defaultIndex, activeLabel);
                    var independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
                    var dependentAxisCoord = (this.state.offset.top + height) / 2;
                    var isHorizontal = layout === "horizontal";
                    var activeCoordinate = isHorizontal ? {
                        x: independentAxisCoord,
                        y: dependentAxisCoord
                    } : {
                        y: independentAxisCoord,
                        x: dependentAxisCoord
                    };
                    // Unlike other chart types, scatter plot's tooltip positions rely on both X and Y coordinates. Only the scatter plot
                    // element knows its own Y coordinates.
                    // If there's a scatter plot, we'll want to grab that element for an interrogation.
                    var scatterPlotElement = this.state.formattedGraphicalItems.find(function(_ref12) {
                        var item = _ref12.item;
                        return item.type.name === "Scatter";
                    });
                    if (scatterPlotElement) {
                        activeCoordinate = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, activeCoordinate), scatterPlotElement.props.points[defaultIndex].tooltipPosition);
                        activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
                    }
                    var nextState = {
                        activeTooltipIndex: defaultIndex,
                        isTooltipActive: true,
                        activeLabel: activeLabel,
                        activePayload: activePayload,
                        activeCoordinate: activeCoordinate
                    };
                    this.setState(nextState);
                    this.renderCursor(tooltipElem);
                    // Make sure that anyone who keyboard-only users who tab to the chart will start their
                    // cursors at defaultIndex
                    this.accessibilityManager.setIndex(defaultIndex);
                }
            },
            {
                key: "getSnapshotBeforeUpdate",
                value: function getSnapshotBeforeUpdate(prevProps, prevState) {
                    if (!this.props.accessibilityLayer) {
                        return null;
                    }
                    if (this.state.tooltipTicks !== prevState.tooltipTicks) {
                        this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks
                        });
                    }
                    if (this.props.layout !== prevProps.layout) {
                        this.accessibilityManager.setDetails({
                            layout: this.props.layout
                        });
                    }
                    if (this.props.margin !== prevProps.margin) {
                        var _this$props$margin$le2, _this$props$margin$to2;
                        this.accessibilityManager.setDetails({
                            offset: {
                                left: (_this$props$margin$le2 = this.props.margin.left) !== null && _this$props$margin$le2 !== void 0 ? _this$props$margin$le2 : 0,
                                top: (_this$props$margin$to2 = this.props.margin.top) !== null && _this$props$margin$to2 !== void 0 ? _this$props$margin$to2 : 0
                            }
                        });
                    }
                    // Something has to be returned for getSnapshotBeforeUpdate
                    return null;
                }
            },
            {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps) {
                    // Check to see if the Tooltip updated. If so, re-check default tooltip position
                    if (!(0,ReactUtils/* isChildrenEqual */.rL)([
                        (0,ReactUtils/* findChildByType */.sP)(prevProps.children, Tooltip/* Tooltip */.u)
                    ], [
                        (0,ReactUtils/* findChildByType */.sP)(this.props.children, Tooltip/* Tooltip */.u)
                    ])) {
                        this.displayDefaultTooltip();
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.removeListener();
                    this.throttleTriggeredAfterMouseMove.cancel();
                }
            },
            {
                key: "getTooltipEventType",
                value: function getTooltipEventType() {
                    var tooltipItem = (0,ReactUtils/* findChildByType */.sP)(this.props.children, Tooltip/* Tooltip */.u);
                    if (tooltipItem && typeof tooltipItem.props.shared === "boolean") {
                        var eventType = tooltipItem.props.shared ? "axis" : "item";
                        return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
                    }
                    return defaultTooltipEventType;
                }
            },
            {
                key: "getMouseInfo",
                value: function getMouseInfo(event) {
                    if (!this.container) {
                        return null;
                    }
                    var element = this.container;
                    var boundingRect = element.getBoundingClientRect();
                    var containerOffset = (0,DOMUtils/* getOffset */.os)(boundingRect);
                    var e = {
                        chartX: Math.round(event.pageX - containerOffset.left),
                        chartY: Math.round(event.pageY - containerOffset.top)
                    };
                    var scale = boundingRect.width / element.offsetWidth || 1;
                    var rangeObj = this.inRange(e.chartX, e.chartY, scale);
                    if (!rangeObj) {
                        return null;
                    }
                    var _this$state9 = this.state, xAxisMap = _this$state9.xAxisMap, yAxisMap = _this$state9.yAxisMap;
                    var tooltipEventType = this.getTooltipEventType();
                    if (tooltipEventType !== "axis" && xAxisMap && yAxisMap) {
                        var xScale = (0,DataUtils/* getAnyElementOfObject */.Kt)(xAxisMap).scale;
                        var yScale = (0,DataUtils/* getAnyElementOfObject */.Kt)(yAxisMap).scale;
                        var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
                        var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
                        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, e), {}, {
                            xValue: xValue,
                            yValue: yValue
                        });
                    }
                    var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
                    if (toolTipData) {
                        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, e), toolTipData);
                    }
                    return null;
                }
            },
            {
                key: "inRange",
                value: function inRange(x, y) {
                    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                    var layout = this.props.layout;
                    var scaledX = x / scale, scaledY = y / scale;
                    if (layout === "horizontal" || layout === "vertical") {
                        var offset = this.state.offset;
                        var isInRange = scaledX >= offset.left && scaledX <= offset.left + offset.width && scaledY >= offset.top && scaledY <= offset.top + offset.height;
                        return isInRange ? {
                            x: scaledX,
                            y: scaledY
                        } : null;
                    }
                    var _this$state10 = this.state, angleAxisMap = _this$state10.angleAxisMap, radiusAxisMap = _this$state10.radiusAxisMap;
                    if (angleAxisMap && radiusAxisMap) {
                        var angleAxis = (0,DataUtils/* getAnyElementOfObject */.Kt)(angleAxisMap);
                        return (0,PolarUtils/* inRangeOfSector */.z3)({
                            x: scaledX,
                            y: scaledY
                        }, angleAxis);
                    }
                    return null;
                }
            },
            {
                key: "parseEventsOfWrapper",
                value: function parseEventsOfWrapper() {
                    var children = this.props.children;
                    var tooltipEventType = this.getTooltipEventType();
                    var tooltipItem = (0,ReactUtils/* findChildByType */.sP)(children, Tooltip/* Tooltip */.u);
                    var tooltipEvents = {};
                    if (tooltipItem && tooltipEventType === "axis") {
                        if (tooltipItem.props.trigger === "click") {
                            tooltipEvents = {
                                onClick: this.handleClick
                            };
                        } else {
                            tooltipEvents = {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd
                            };
                        }
                    }
                    // @ts-expect-error adaptEventHandlers expects DOM Event but generateCategoricalChart works with React UIEvents
                    var outerEvents = (0,types/* adaptEventHandlers */.Ym)(this.props, this.handleOuterEvent);
                    return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, outerEvents), tooltipEvents);
                }
            },
            {
                key: "addListener",
                value: function addListener() {
                    eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
                }
            },
            {
                key: "removeListener",
                value: function removeListener() {
                    eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
                }
            },
            {
                key: "filterFormatItem",
                value: function filterFormatItem(item, displayName, childIndex) {
                    var formattedGraphicalItems = this.state.formattedGraphicalItems;
                    for(var i = 0, len = formattedGraphicalItems.length; i < len; i++){
                        var entry = formattedGraphicalItems[i];
                        if (entry.item === item || entry.props.key === item.key || displayName === (0,ReactUtils/* getDisplayName */.Gf)(entry.item.type) && childIndex === entry.childIndex) {
                            return entry;
                        }
                    }
                    return null;
                }
            },
            {
                key: "renderClipPath",
                value: function renderClipPath() {
                    var clipPathId = this.clipPathId;
                    var _this$state$offset = this.state.offset, left = _this$state$offset.left, top = _this$state$offset.top, height = _this$state$offset.height, width = _this$state$offset.width;
                    return /*#__PURE__*/ react_default().createElement("defs", null, /*#__PURE__*/ react_default().createElement("clipPath", {
                        id: clipPathId
                    }, /*#__PURE__*/ react_default().createElement("rect", {
                        x: left,
                        y: top,
                        height: height,
                        width: width
                    })));
                }
            },
            {
                key: "getXScales",
                value: function getXScales() {
                    var xAxisMap = this.state.xAxisMap;
                    return xAxisMap ? Object.entries(xAxisMap).reduce(function(res, _ref13) {
                        var _ref14 = generateCategoricalChart_slicedToArray(_ref13, 2), axisId = _ref14[0], axisProps = _ref14[1];
                        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, res), {}, generateCategoricalChart_defineProperty({}, axisId, axisProps.scale));
                    }, {}) : null;
                }
            },
            {
                key: "getYScales",
                value: function getYScales() {
                    var yAxisMap = this.state.yAxisMap;
                    return yAxisMap ? Object.entries(yAxisMap).reduce(function(res, _ref15) {
                        var _ref16 = generateCategoricalChart_slicedToArray(_ref15, 2), axisId = _ref16[0], axisProps = _ref16[1];
                        return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, res), {}, generateCategoricalChart_defineProperty({}, axisId, axisProps.scale));
                    }, {}) : null;
                }
            },
            {
                key: "getXScaleByAxisId",
                value: function getXScaleByAxisId(axisId) {
                    var _this$state$xAxisMap;
                    return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 || (_this$state$xAxisMap = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap === void 0 ? void 0 : _this$state$xAxisMap.scale;
                }
            },
            {
                key: "getYScaleByAxisId",
                value: function getYScaleByAxisId(axisId) {
                    var _this$state$yAxisMap;
                    return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 || (_this$state$yAxisMap = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap === void 0 ? void 0 : _this$state$yAxisMap.scale;
                }
            },
            {
                key: "getItemByXY",
                value: function getItemByXY(chartXY) {
                    var _this$state11 = this.state, formattedGraphicalItems = _this$state11.formattedGraphicalItems, activeItem = _this$state11.activeItem;
                    if (formattedGraphicalItems && formattedGraphicalItems.length) {
                        for(var i = 0, len = formattedGraphicalItems.length; i < len; i++){
                            var graphicalItem = formattedGraphicalItems[i];
                            var props = graphicalItem.props, item = graphicalItem.item;
                            var itemDisplayName = (0,ReactUtils/* getDisplayName */.Gf)(item.type);
                            if (itemDisplayName === "Bar") {
                                var activeBarItem = (props.data || []).find(function(entry) {
                                    return (0,Rectangle/* isInRectangle */.X)(chartXY, entry);
                                });
                                if (activeBarItem) {
                                    return {
                                        graphicalItem: graphicalItem,
                                        payload: activeBarItem
                                    };
                                }
                            } else if (itemDisplayName === "RadialBar") {
                                var _activeBarItem = (props.data || []).find(function(entry) {
                                    return (0,PolarUtils/* inRangeOfSector */.z3)(chartXY, entry);
                                });
                                if (_activeBarItem) {
                                    return {
                                        graphicalItem: graphicalItem,
                                        payload: _activeBarItem
                                    };
                                }
                            } else if ((0,ActiveShapeUtils/* isFunnel */.lT)(graphicalItem, activeItem) || (0,ActiveShapeUtils/* isPie */.V$)(graphicalItem, activeItem) || (0,ActiveShapeUtils/* isScatter */.w7)(graphicalItem, activeItem)) {
                                var activeIndex = (0,ActiveShapeUtils/* getActiveShapeIndexForTooltip */.a3)({
                                    graphicalItem: graphicalItem,
                                    activeTooltipItem: activeItem,
                                    itemData: item.props.data
                                });
                                var childIndex = item.props.activeIndex === undefined ? activeIndex : item.props.activeIndex;
                                return {
                                    graphicalItem: generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, graphicalItem), {}, {
                                        childIndex: childIndex
                                    }),
                                    payload: (0,ActiveShapeUtils/* isScatter */.w7)(graphicalItem, activeItem) ? item.props.data[activeIndex] : graphicalItem.props.data[activeIndex]
                                };
                            }
                        }
                    }
                    return null;
                }
            },
            {
                key: "render",
                value: function render() {
                    var _this2 = this;
                    if (!(0,ReactUtils/* validateWidthHeight */.TT)(this)) {
                        return null;
                    }
                    var _this$props6 = this.props, children = _this$props6.children, className = _this$props6.className, width = _this$props6.width, height = _this$props6.height, style = _this$props6.style, compact = _this$props6.compact, title = _this$props6.title, desc = _this$props6.desc, others = generateCategoricalChart_objectWithoutProperties(_this$props6, _excluded2);
                    var attrs = (0,ReactUtils/* filterProps */.L6)(others, false);
                    // The "compact" mode is mainly used as the panorama within Brush
                    if (compact) {
                        return /*#__PURE__*/ react_default().createElement(chartLayoutContext/* ChartLayoutContextProvider */.br, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, /*#__PURE__*/ react_default().createElement(Surface/* Surface */.T, generateCategoricalChart_extends({}, attrs, {
                            width: width,
                            height: height,
                            title: title,
                            desc: desc
                        }), this.renderClipPath(), (0,ReactUtils/* renderByOrder */.eu)(children, this.renderMap)));
                    }
                    if (this.props.accessibilityLayer) {
                        var _this$props$tabIndex, _this$props$role;
                        // Set tabIndex to 0 by default (can be overwritten)
                        attrs.tabIndex = (_this$props$tabIndex = this.props.tabIndex) !== null && _this$props$tabIndex !== void 0 ? _this$props$tabIndex : 0;
                        // Set role to img by default (can be overwritten)
                        attrs.role = (_this$props$role = this.props.role) !== null && _this$props$role !== void 0 ? _this$props$role : "application";
                        attrs.onKeyDown = function(e) {
                            _this2.accessibilityManager.keyboardEvent(e);
                        // 'onKeyDown' is not currently a supported prop that can be passed through
                        // if it's added, this should be added: this.props.onKeyDown(e);
                        };
                        attrs.onFocus = function() {
                            _this2.accessibilityManager.focus();
                        // 'onFocus' is not currently a supported prop that can be passed through
                        // if it's added, the focus event should be forwarded to the prop
                        };
                    }
                    var events = this.parseEventsOfWrapper();
                    return /*#__PURE__*/ react_default().createElement(chartLayoutContext/* ChartLayoutContextProvider */.br, {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId
                    }, /*#__PURE__*/ react_default().createElement("div", generateCategoricalChart_extends({
                        className: (0,clsx/* default */.Z)("recharts-wrapper", className),
                        style: generateCategoricalChart_objectSpread({
                            position: "relative",
                            cursor: "default",
                            width: width,
                            height: height
                        }, style)
                    }, events, {
                        ref: function ref(node) {
                            _this2.container = node;
                        }
                    }), /*#__PURE__*/ react_default().createElement(Surface/* Surface */.T, generateCategoricalChart_extends({}, attrs, {
                        width: width,
                        height: height,
                        title: title,
                        desc: desc,
                        style: FULL_WIDTH_AND_HEIGHT
                    }), this.renderClipPath(), (0,ReactUtils/* renderByOrder */.eu)(children, this.renderMap)), this.renderLegend(), this.renderTooltip()));
                }
            }
        ]);
        return CategoricalChartWrapper;
    }(react.Component), generateCategoricalChart_defineProperty(_CategoricalChartWrapper, "displayName", chartName), generateCategoricalChart_defineProperty(_CategoricalChartWrapper, "defaultProps", generateCategoricalChart_objectSpread({
        layout: "horizontal",
        stackOffset: "none",
        barCategoryGap: "10%",
        barGap: 4,
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        },
        reverseStackOrder: false,
        syncMethod: "index"
    }, defaultProps)), generateCategoricalChart_defineProperty(_CategoricalChartWrapper, "getDerivedStateFromProps", function(nextProps, prevState) {
        var dataKey = nextProps.dataKey, data = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
        var dataStartIndex = prevState.dataStartIndex, dataEndIndex = prevState.dataEndIndex;
        if (prevState.updateId === undefined) {
            var defaultState = createDefaultState(nextProps);
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, defaultState), {}, {
                updateId: 0
            }, updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                props: nextProps
            }, defaultState), {}, {
                updateId: 0
            }), prevState)), {}, {
                prevDataKey: dataKey,
                prevData: data,
                prevWidth: width,
                prevHeight: height,
                prevLayout: layout,
                prevStackOffset: stackOffset,
                prevMargin: margin,
                prevChildren: children
            });
        }
        if (dataKey !== prevState.prevDataKey || data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !(0,ShallowEqual/* shallowEqual */.w)(margin, prevState.prevMargin)) {
            var _defaultState = createDefaultState(nextProps);
            // Fixes https://github.com/recharts/recharts/issues/2143
            var keepFromPrevState = {
                // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
                // any flickering
                chartX: prevState.chartX,
                chartY: prevState.chartY,
                // The tooltip should stay active when it was active in the previous render. If this is not
                // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
                isTooltipActive: prevState.isTooltipActive
            };
            var updatesToState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
                updateId: prevState.updateId + 1
            });
            var newState = generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread({
                props: nextProps
            }, newState), prevState)), {}, {
                prevDataKey: dataKey,
                prevData: data,
                prevWidth: width,
                prevHeight: height,
                prevLayout: layout,
                prevStackOffset: stackOffset,
                prevMargin: margin,
                prevChildren: children
            });
        }
        if (!(0,ReactUtils/* isChildrenEqual */.rL)(children, prevState.prevChildren)) {
            var _brush$props$startInd, _brush$props, _brush$props$endIndex, _brush$props2;
            // specifically check for Brush - if it exists and the start and end indexes are different, re-render with the new ones
            var brush = (0,ReactUtils/* findChildByType */.sP)(children, Brush);
            var startIndex = brush ? (_brush$props$startInd = (_brush$props = brush.props) === null || _brush$props === void 0 ? void 0 : _brush$props.startIndex) !== null && _brush$props$startInd !== void 0 ? _brush$props$startInd : dataStartIndex : dataStartIndex;
            var endIndex = brush ? (_brush$props$endIndex = (_brush$props2 = brush.props) === null || _brush$props2 === void 0 ? void 0 : _brush$props2.endIndex) !== null && _brush$props$endIndex !== void 0 ? _brush$props$endIndex : dataEndIndex : dataEndIndex;
            var hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;
            // update configuration in children
            var hasGlobalData = !isNil_default()(data);
            var newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;
            return generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                updateId: newUpdateId
            }, updateStateOfAxisMapsOffsetAndStackGroups(generateCategoricalChart_objectSpread(generateCategoricalChart_objectSpread({
                props: nextProps
            }, prevState), {}, {
                updateId: newUpdateId,
                dataStartIndex: startIndex,
                dataEndIndex: endIndex
            }), prevState)), {}, {
                prevChildren: children,
                dataStartIndex: startIndex,
                dataEndIndex: endIndex
            });
        }
        return null;
    }), generateCategoricalChart_defineProperty(_CategoricalChartWrapper, "renderActiveDot", function(option, props) {
        var dot;
        if (/*#__PURE__*/ (0,react.isValidElement)(option)) {
            dot = /*#__PURE__*/ (0,react.cloneElement)(option, props);
        } else if (isFunction_default()(option)) {
            dot = option(props);
        } else {
            dot = /*#__PURE__*/ react_default().createElement(Dot/* Dot */.o, props);
        }
        return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
            className: "recharts-active-dot",
            key: props.key
        }, dot);
    }), _CategoricalChartWrapper;
};


/***/ }),

/***/ 93284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Cell)
/* harmony export */ });
/**
 * @fileOverview Cross
 */ var Cell = function Cell(_props) {
    return null;
};
Cell.displayName = "Cell";


/***/ }),

/***/ 29043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24934);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10635);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49193);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6222);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29480);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54491);
/* harmony import */ var _util_PolarUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55381);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _excluded = [
    "offset"
];
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









var getLabel = function getLabel(props) {
    var value = props.value, formatter = props.formatter;
    var label = lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(props.children) ? value : props.children;
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(formatter)) {
        return formatter(label);
    }
    return label;
};
var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
    var sign = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .mathSign */ .uY)(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
    var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
    var _ref = viewBox, cx = _ref.cx, cy = _ref.cy, innerRadius = _ref.innerRadius, outerRadius = _ref.outerRadius, startAngle = _ref.startAngle, endAngle = _ref.endAngle, clockWise = _ref.clockWise;
    var radius = (innerRadius + outerRadius) / 2;
    var deltaAngle = getDeltaAngle(startAngle, endAngle);
    var sign = deltaAngle >= 0 ? 1 : -1;
    var labelAngle, direction;
    if (position === "insideStart") {
        labelAngle = startAngle + sign * offset;
        direction = clockWise;
    } else if (position === "insideEnd") {
        labelAngle = endAngle - sign * offset;
        direction = !clockWise;
    } else if (position === "end") {
        labelAngle = endAngle + sign * offset;
        direction = clockWise;
    }
    direction = deltaAngle <= 0 ? direction : !direction;
    var startPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_5__/* .polarToCartesian */ .op)(cx, cy, radius, labelAngle);
    var endPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_5__/* .polarToCartesian */ .op)(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
    var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
    var id = lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(labelProps.id) ? (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .uniqueId */ .EL)("recharts-radial-line-") : labelProps.id;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", _extends({}, attrs, {
        dominantBaseline: "central",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("recharts-radial-bar-label", className)
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        id: id,
        d: path
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textPath", {
        xlinkHref: "#".concat(id)
    }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
    var viewBox = props.viewBox, offset = props.offset, position = props.position;
    var _ref2 = viewBox, cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
    var midAngle = (startAngle + endAngle) / 2;
    if (position === "outside") {
        var _polarToCartesian = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_5__/* .polarToCartesian */ .op)(cx, cy, outerRadius + offset, midAngle), _x = _polarToCartesian.x, _y = _polarToCartesian.y;
        return {
            x: _x,
            y: _y,
            textAnchor: _x >= cx ? "start" : "end",
            verticalAnchor: "middle"
        };
    }
    if (position === "center") {
        return {
            x: cx,
            y: cy,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
    }
    if (position === "centerTop") {
        return {
            x: cx,
            y: cy,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
    }
    if (position === "centerBottom") {
        return {
            x: cx,
            y: cy,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
    }
    var r = (innerRadius + outerRadius) / 2;
    var _polarToCartesian2 = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_5__/* .polarToCartesian */ .op)(cx, cy, r, midAngle), x = _polarToCartesian2.x, y = _polarToCartesian2.y;
    return {
        x: x,
        y: y,
        textAnchor: "middle",
        verticalAnchor: "middle"
    };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
    var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
    var _ref3 = viewBox, x = _ref3.x, y = _ref3.y, width = _ref3.width, height = _ref3.height;
    // Define vertical offsets and position inverts based on the value being positive or negative
    var verticalSign = height >= 0 ? 1 : -1;
    var verticalOffset = verticalSign * offset;
    var verticalEnd = verticalSign > 0 ? "end" : "start";
    var verticalStart = verticalSign > 0 ? "start" : "end";
    // Define horizontal offsets and position inverts based on the value being positive or negative
    var horizontalSign = width >= 0 ? 1 : -1;
    var horizontalOffset = horizontalSign * offset;
    var horizontalEnd = horizontalSign > 0 ? "end" : "start";
    var horizontalStart = horizontalSign > 0 ? "start" : "end";
    if (position === "top") {
        var attrs = {
            x: x + width / 2,
            y: y - verticalSign * offset,
            textAnchor: "middle",
            verticalAnchor: verticalEnd
        };
        return _objectSpread(_objectSpread({}, attrs), parentViewBox ? {
            height: Math.max(y - parentViewBox.y, 0),
            width: width
        } : {});
    }
    if (position === "bottom") {
        var _attrs = {
            x: x + width / 2,
            y: y + height + verticalOffset,
            textAnchor: "middle",
            verticalAnchor: verticalStart
        };
        return _objectSpread(_objectSpread({}, _attrs), parentViewBox ? {
            height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
            width: width
        } : {});
    }
    if (position === "left") {
        var _attrs2 = {
            x: x - horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalEnd,
            verticalAnchor: "middle"
        };
        return _objectSpread(_objectSpread({}, _attrs2), parentViewBox ? {
            width: Math.max(_attrs2.x - parentViewBox.x, 0),
            height: height
        } : {});
    }
    if (position === "right") {
        var _attrs3 = {
            x: x + width + horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalStart,
            verticalAnchor: "middle"
        };
        return _objectSpread(_objectSpread({}, _attrs3), parentViewBox ? {
            width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
            height: height
        } : {});
    }
    var sizeAttrs = parentViewBox ? {
        width: width,
        height: height
    } : {};
    if (position === "insideLeft") {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalStart,
            verticalAnchor: "middle"
        }, sizeAttrs);
    }
    if (position === "insideRight") {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalEnd,
            verticalAnchor: "middle"
        }, sizeAttrs);
    }
    if (position === "insideTop") {
        return _objectSpread({
            x: x + width / 2,
            y: y + verticalOffset,
            textAnchor: "middle",
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === "insideBottom") {
        return _objectSpread({
            x: x + width / 2,
            y: y + height - verticalOffset,
            textAnchor: "middle",
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if (position === "insideTopLeft") {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + verticalOffset,
            textAnchor: horizontalStart,
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === "insideTopRight") {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + verticalOffset,
            textAnchor: horizontalEnd,
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === "insideBottomLeft") {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + height - verticalOffset,
            textAnchor: horizontalStart,
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if (position === "insideBottomRight") {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + height - verticalOffset,
            textAnchor: horizontalEnd,
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(position) && ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(position.x) || (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ .hU)(position.x)) && ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(position.y) || (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isPercent */ .hU)(position.y))) {
        return _objectSpread({
            x: x + (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .getPercentValue */ .h1)(position.x, width),
            y: y + (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .getPercentValue */ .h1)(position.y, height),
            textAnchor: "end",
            verticalAnchor: "end"
        }, sizeAttrs);
    }
    return _objectSpread({
        x: x + width / 2,
        y: y + height / 2,
        textAnchor: "middle",
        verticalAnchor: "middle"
    }, sizeAttrs);
};
var isPolar = function isPolar(viewBox) {
    return "cx" in viewBox && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(viewBox.cx);
};
function Label(_ref4) {
    var _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 5 : _ref4$offset, restProps = _objectWithoutProperties(_ref4, _excluded);
    var props = _objectSpread({
        offset: offset
    }, restProps);
    var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, textBreakAll = props.textBreakAll;
    if (!viewBox || lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(value) && lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(children) && !/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) && !lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(content)) {
        return null;
    }
    if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content)) {
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(content, props);
    }
    var label;
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(content)) {
        label = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(content, props);
        if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(label)) {
            return label;
        }
    } else {
        label = getLabel(props);
    }
    var isPolarLabel = isPolar(viewBox);
    var attrs = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_7__/* .filterProps */ .L6)(props, true);
    if (isPolarLabel && (position === "insideStart" || position === "insideEnd" || position === "end")) {
        return renderRadialLabel(props, label, attrs);
    }
    var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, _extends({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("recharts-label", className)
    }, attrs, positionAttrs, {
        breakAll: textBreakAll
    }), label);
}
Label.displayName = "Label";
var parseViewBox = function parseViewBox(props) {
    var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x = props.x, y = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
    if (labelViewBox) {
        return labelViewBox;
    }
    if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(width) && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(height)) {
        if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(x) && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(y)) {
            return {
                x: x,
                y: y,
                width: width,
                height: height
            };
        }
        if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(top) && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(left)) {
            return {
                x: top,
                y: left,
                width: width,
                height: height
            };
        }
    }
    if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(x) && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(y)) {
        return {
            x: x,
            y: y,
            width: 0,
            height: 0
        };
    }
    if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(cx) && (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumber */ .hj)(cy)) {
        return {
            cx: cx,
            cy: cy,
            startAngle: startAngle || angle || 0,
            endAngle: endAngle || angle || 0,
            innerRadius: innerRadius || 0,
            outerRadius: outerRadius || radius || r || 0,
            clockWise: clockWise
        };
    }
    if (props.viewBox) {
        return props.viewBox;
    }
    return {};
};
var parseLabel = function parseLabel(label, viewBox) {
    if (!label) {
        return null;
    }
    if (label === true) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, {
            key: "label-implicit",
            viewBox: viewBox
        });
    }
    if ((0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .isNumOrStr */ .P2)(label)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, {
            key: "label-implicit",
            viewBox: viewBox,
            value: label
        });
    }
    if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(label)) {
        if (label.type === Label) {
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(label, {
                key: "label-implicit",
                viewBox: viewBox
            });
        }
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, {
            key: "label-implicit",
            content: label,
            viewBox: viewBox
        });
    }
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(label)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, {
            key: "label-implicit",
            content: label,
            viewBox: viewBox
        });
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(label)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, _extends({
            viewBox: viewBox
        }, label, {
            key: "label-implicit"
        }));
    }
    return null;
};
var renderCallByParent = function renderCallByParent(parentProps, viewBox) {
    var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
        return null;
    }
    var children = parentProps.children;
    var parentViewBox = parseViewBox(parentProps);
    var explicitChildren = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_7__/* .findAllByType */ .NN)(children, Label).map(function(child, index) {
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
            viewBox: viewBox || parentViewBox,
            // eslint-disable-next-line react/no-array-index-key
            key: "label-".concat(index)
        });
    });
    if (!checkPropsLabel) {
        return explicitChildren;
    }
    var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
    return [
        implicitLabel
    ].concat(_toConsumableArray(explicitChildren));
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;


/***/ }),

/***/ 64605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ LabelList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24934);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10635);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47394);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29043);
/* harmony import */ var _container_Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68874);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29480);
/* harmony import */ var _util_ChartUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86837);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _excluded = [
    "valueAccessor"
], _excluded2 = [
    "data",
    "dataKey",
    "clockWise",
    "id",
    "textBreakAll"
];
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









var defaultAccessor = function defaultAccessor(entry) {
    return Array.isArray(entry.value) ? lodash_last__WEBPACK_IMPORTED_MODULE_4___default()(entry.value) : entry.value;
};
function LabelList(_ref) {
    var _ref$valueAccessor = _ref.valueAccessor, valueAccessor = _ref$valueAccessor === void 0 ? defaultAccessor : _ref$valueAccessor, restProps = _objectWithoutProperties(_ref, _excluded);
    var data = restProps.data, dataKey = restProps.dataKey, clockWise = restProps.clockWise, id = restProps.id, textBreakAll = restProps.textBreakAll, others = _objectWithoutProperties(restProps, _excluded2);
    if (!data || !data.length) {
        return null;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Layer__WEBPACK_IMPORTED_MODULE_5__/* .Layer */ .m, {
        className: "recharts-label-list"
    }, data.map(function(entry, index) {
        var value = lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(dataKey) ? valueAccessor(entry, index) : (0,_util_ChartUtils__WEBPACK_IMPORTED_MODULE_6__/* .getValueByDataKey */ .F$)(entry && entry.payload, dataKey);
        var idProps = lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(id) ? {} : {
            id: "".concat(id, "-").concat(index)
        };
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._, _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .filterProps */ .L6)(entry, true), others, idProps, {
            parentViewBox: entry.parentViewBox,
            value: value,
            textBreakAll: textBreakAll,
            viewBox: _Label__WEBPACK_IMPORTED_MODULE_7__/* .Label */ ._.parseViewBox(lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(clockWise) ? entry : _objectSpread(_objectSpread({}, entry), {}, {
                clockWise: clockWise
            })),
            key: "label-".concat(index) // eslint-disable-line react/no-array-index-key
            ,
            index: index
        }));
    }));
}
LabelList.displayName = "LabelList";
function parseLabelList(label, data) {
    if (!label) {
        return null;
    }
    if (label === true) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelList, {
            key: "labelList-implicit",
            data: data
        });
    }
    if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(label) || lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(label)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelList, {
            key: "labelList-implicit",
            data: data,
            content: label
        });
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(label)) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LabelList, _extends({
            data: data
        }, label, {
            key: "labelList-implicit"
        }));
    }
    return null;
}
function renderCallByParent(parentProps, data) {
    var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
        return null;
    }
    var children = parentProps.children;
    var explicitChildren = (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_8__/* .findAllByType */ .NN)(children, LabelList).map(function(child, index) {
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
            data: data,
            // eslint-disable-next-line react/no-array-index-key
            key: "labelList-".concat(index)
        });
    });
    if (!checkPropsLabel) {
        return explicitChildren;
    }
    var implicitLabelList = parseLabelList(parentProps.label, data);
    return [
        implicitLabelList
    ].concat(_toConsumableArray(explicitChildren));
}
LabelList.renderCallByParent = renderCallByParent;


/***/ }),

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js
var isNil = __webpack_require__(24934);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(49193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/Global.js
var Global = __webpack_require__(88127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DOMUtils.js
var DOMUtils = __webpack_require__(64095);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReduceCSSCalc.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    "in": 96,
    Q: 96 / (2.54 * 40),
    px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = "NaN";
function convertToPx(value, unit) {
    return value * CONVERSION_RATES[unit];
}
var DecimalCSS = /*#__PURE__*/ function() {
    function DecimalCSS(num, unit) {
        _classCallCheck(this, DecimalCSS);
        this.num = num;
        this.unit = unit;
        this.num = num;
        this.unit = unit;
        if (Number.isNaN(num)) {
            this.unit = "";
        }
        if (unit !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
            this.num = NaN;
            this.unit = "";
        }
        if (FIXED_CSS_LENGTH_UNITS.includes(unit)) {
            this.num = convertToPx(num, unit);
            this.unit = "px";
        }
    }
    _createClass(DecimalCSS, [
        {
            key: "add",
            value: function add(other) {
                if (this.unit !== other.unit) {
                    return new DecimalCSS(NaN, "");
                }
                return new DecimalCSS(this.num + other.num, this.unit);
            }
        },
        {
            key: "subtract",
            value: function subtract(other) {
                if (this.unit !== other.unit) {
                    return new DecimalCSS(NaN, "");
                }
                return new DecimalCSS(this.num - other.num, this.unit);
            }
        },
        {
            key: "multiply",
            value: function multiply(other) {
                if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
                    return new DecimalCSS(NaN, "");
                }
                return new DecimalCSS(this.num * other.num, this.unit || other.unit);
            }
        },
        {
            key: "divide",
            value: function divide(other) {
                if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
                    return new DecimalCSS(NaN, "");
                }
                return new DecimalCSS(this.num / other.num, this.unit || other.unit);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.num).concat(this.unit);
            }
        },
        {
            key: "isNaN",
            value: function isNaN() {
                return Number.isNaN(this.num);
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(str) {
                var _NUM_SPLIT_REGEX$exec;
                var _ref = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [], _ref2 = _slicedToArray(_ref, 3), numStr = _ref2[1], unit = _ref2[2];
                return new DecimalCSS(parseFloat(numStr), unit !== null && unit !== void 0 ? unit : "");
            }
        }
    ]);
    return DecimalCSS;
}();
function calculateArithmetic(expr) {
    if (expr.includes(STR_NAN)) {
        return STR_NAN;
    }
    var newExpr = expr;
    while(newExpr.includes("*") || newExpr.includes("/")){
        var _MULTIPLY_OR_DIVIDE_R;
        var _ref3 = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [], _ref4 = _slicedToArray(_ref3, 4), leftOperand = _ref4[1], operator = _ref4[2], rightOperand = _ref4[3];
        var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
        var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
        var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
        if (result.isNaN()) {
            return STR_NAN;
        }
        newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
    }
    while(newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)){
        var _ADD_OR_SUBTRACT_REGE;
        var _ref5 = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [], _ref6 = _slicedToArray(_ref5, 4), _leftOperand = _ref6[1], _operator = _ref6[2], _rightOperand = _ref6[3];
        var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
        var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
        var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
        if (_result.isNaN()) {
            return STR_NAN;
        }
        newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
    }
    return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
    var newExpr = expr;
    while(newExpr.includes("(")){
        var _PARENTHESES_REGEX$ex = PARENTHESES_REGEX.exec(newExpr), _PARENTHESES_REGEX$ex2 = _slicedToArray(_PARENTHESES_REGEX$ex, 2), parentheticalExpression = _PARENTHESES_REGEX$ex2[1];
        newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
    }
    return newExpr;
}
function evaluateExpression(expression) {
    var newExpr = expression.replace(/\s+/g, "");
    newExpr = calculateParentheses(newExpr);
    newExpr = calculateArithmetic(newExpr);
    return newExpr;
}
function safeEvaluateExpression(expression) {
    try {
        return evaluateExpression(expression);
    } catch (e) {
        /* istanbul ignore next */ return STR_NAN;
    }
}
function reduceCSSCalc(expression) {
    var result = safeEvaluateExpression(expression.slice(5, -1));
    if (result === STR_NAN) {
        // notify the user
        return "";
    }
    return result;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Text.js
var _excluded = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill"
], _excluded2 = [
    "dx",
    "dy",
    "angle",
    "className",
    "breakAll"
];
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
function Text_slicedToArray(arr, i) {
    return Text_arrayWithHoles(arr) || Text_iterableToArrayLimit(arr, i) || Text_unsupportedIterableToArray(arr, i) || Text_nonIterableRest();
}
function Text_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Text_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return Text_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Text_arrayLikeToArray(o, minLen);
}
function Text_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function Text_iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function Text_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}








var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths(_ref) {
    var children = _ref.children, breakAll = _ref.breakAll, style = _ref.style;
    try {
        var words = [];
        if (!isNil_default()(children)) {
            if (breakAll) {
                words = children.toString().split("");
            } else {
                words = children.toString().split(BREAKING_SPACES);
            }
        }
        var wordsWithComputedWidth = words.map(function(word) {
            return {
                word: word,
                width: (0,DOMUtils/* getStringSize */.xE)(word, style).width
            };
        });
        var spaceWidth = breakAll ? 0 : (0,DOMUtils/* getStringSize */.xE)("\xa0", style).width;
        return {
            wordsWithComputedWidth: wordsWithComputedWidth,
            spaceWidth: spaceWidth
        };
    } catch (e) {
        return null;
    }
};
var calculateWordsByLines = function calculateWordsByLines(_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
    var maxLines = _ref2.maxLines, children = _ref2.children, style = _ref2.style, breakAll = _ref2.breakAll;
    var shouldLimitLines = (0,DataUtils/* isNumber */.hj)(maxLines);
    var text = children;
    var calculate = function calculate() {
        var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return words.reduce(function(result, _ref3) {
            var word = _ref3.word, width = _ref3.width;
            var currentLine = result[result.length - 1];
            if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
                // Word can be added to an existing line
                currentLine.words.push(word);
                currentLine.width += width + spaceWidth;
            } else {
                // Add first word to line or word is too long to scaleToFit on existing line
                var newLine = {
                    words: [
                        word
                    ],
                    width: width
                };
                result.push(newLine);
            }
            return result;
        }, []);
    };
    var originalResult = calculate(initialWordsWithComputedWith);
    var findLongestLine = function findLongestLine(words) {
        return words.reduce(function(a, b) {
            return a.width > b.width ? a : b;
        });
    };
    if (!shouldLimitLines) {
        return originalResult;
    }
    var suffix = "…";
    var checkOverflow = function checkOverflow(index) {
        var tempText = text.slice(0, index);
        var words = calculateWordWidths({
            breakAll: breakAll,
            style: style,
            children: tempText + suffix
        }).wordsWithComputedWidth;
        var result = calculate(words);
        var doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);
        return [
            doesOverflow,
            result
        ];
    };
    var start = 0;
    var end = text.length - 1;
    var iterations = 0;
    var trimmedResult;
    while(start <= end && iterations <= text.length - 1){
        var middle = Math.floor((start + end) / 2);
        var prev = middle - 1;
        var _checkOverflow = checkOverflow(prev), _checkOverflow2 = Text_slicedToArray(_checkOverflow, 2), doesPrevOverflow = _checkOverflow2[0], result = _checkOverflow2[1];
        var _checkOverflow3 = checkOverflow(middle), _checkOverflow4 = Text_slicedToArray(_checkOverflow3, 1), doesMiddleOverflow = _checkOverflow4[0];
        if (!doesPrevOverflow && !doesMiddleOverflow) {
            start = middle + 1;
        }
        if (doesPrevOverflow && doesMiddleOverflow) {
            end = middle - 1;
        }
        if (!doesPrevOverflow && doesMiddleOverflow) {
            trimmedResult = result;
            break;
        }
        iterations++;
    }
    // Fallback to originalResult (result without trimming) if we cannot find the
    // where to trim.  This should not happen :tm:
    return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate(children) {
    var words = !isNil_default()(children) ? children.toString().split(BREAKING_SPACES) : [];
    return [
        {
            words: words
        }
    ];
};
var getWordsByLines = function getWordsByLines(_ref4) {
    var width = _ref4.width, scaleToFit = _ref4.scaleToFit, children = _ref4.children, style = _ref4.style, breakAll = _ref4.breakAll, maxLines = _ref4.maxLines;
    // Only perform calculations if using features that require them (multiline, scaleToFit)
    if ((width || scaleToFit) && !Global/* Global */.x.isSsr) {
        var wordsWithComputedWidth, spaceWidth;
        var wordWidths = calculateWordWidths({
            breakAll: breakAll,
            children: children,
            style: style
        });
        if (wordWidths) {
            var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
            wordsWithComputedWidth = wcw;
            spaceWidth = sw;
        } else {
            return getWordsWithoutCalculate(children);
        }
        return calculateWordsByLines({
            breakAll: breakAll,
            children: children,
            maxLines: maxLines,
            style: style
        }, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
    }
    return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = "#808080";
var Text = function Text(_ref5) {
    var _ref5$x = _ref5.x, propsX = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, propsY = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$lineHeight = _ref5.lineHeight, lineHeight = _ref5$lineHeight === void 0 ? "1em" : _ref5$lineHeight, _ref5$capHeight = _ref5.capHeight, capHeight = _ref5$capHeight === void 0 ? "0.71em" : _ref5$capHeight, _ref5$scaleToFit = _ref5.scaleToFit, scaleToFit = _ref5$scaleToFit === void 0 ? false : _ref5$scaleToFit, _ref5$textAnchor = _ref5.textAnchor, textAnchor = _ref5$textAnchor === void 0 ? "start" : _ref5$textAnchor, _ref5$verticalAnchor = _ref5.verticalAnchor, verticalAnchor = _ref5$verticalAnchor === void 0 ? "end" : _ref5$verticalAnchor, _ref5$fill = _ref5.fill, fill = _ref5$fill === void 0 ? DEFAULT_FILL : _ref5$fill, props = _objectWithoutProperties(_ref5, _excluded);
    var wordsByLines = (0,react.useMemo)(function() {
        return getWordsByLines({
            breakAll: props.breakAll,
            children: props.children,
            maxLines: props.maxLines,
            scaleToFit: scaleToFit,
            style: props.style,
            width: props.width
        });
    }, [
        props.breakAll,
        props.children,
        props.maxLines,
        scaleToFit,
        props.style,
        props.width
    ]);
    var dx = props.dx, dy = props.dy, angle = props.angle, className = props.className, breakAll = props.breakAll, textProps = _objectWithoutProperties(props, _excluded2);
    if (!(0,DataUtils/* isNumOrStr */.P2)(propsX) || !(0,DataUtils/* isNumOrStr */.P2)(propsY)) {
        return null;
    }
    var x = propsX + ((0,DataUtils/* isNumber */.hj)(dx) ? dx : 0);
    var y = propsY + ((0,DataUtils/* isNumber */.hj)(dy) ? dy : 0);
    var startDy;
    switch(verticalAnchor){
        case "start":
            startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
            break;
        case "middle":
            startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
            break;
        default:
            startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
            break;
    }
    var transforms = [];
    if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        var width = props.width;
        transforms.push("scale(".concat(((0,DataUtils/* isNumber */.hj)(width) ? width / lineWidth : 1) / lineWidth, ")"));
    }
    if (angle) {
        transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
    }
    if (transforms.length) {
        textProps.transform = transforms.join(" ");
    }
    return /*#__PURE__*/ react_default().createElement("text", _extends({}, (0,ReactUtils/* filterProps */.L6)(textProps, true), {
        x: x,
        y: y,
        className: (0,clsx/* default */.Z)("recharts-text", className),
        textAnchor: textAnchor,
        fill: fill.includes("url") ? DEFAULT_FILL : fill
    }), wordsByLines.map(function(line, index) {
        var words = line.words.join(breakAll ? "" : " ");
        return /*#__PURE__*/ react_default().createElement("tspan", {
            x: x,
            dy: index === 0 ? startDy : lineHeight,
            key: words
        }, words);
    }));
};


/***/ }),

/***/ 68874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ Layer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49193);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29480);
var _excluded = [
    "children",
    "className"
];
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



var Layer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function(props, ref) {
    var children = props.children, className = props.className, others = _objectWithoutProperties(props, _excluded);
    var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("recharts-layer", className);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", _extends({
        className: layerClass
    }, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .L6)(others, true), {
        ref: ref
    }), children);
});


/***/ }),

/***/ 38306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  br: () => (/* binding */ ChartLayoutContextProvider),
  CW: () => (/* binding */ useArbitraryXAxis),
  Mw: () => (/* binding */ useChartHeight),
  zn: () => (/* binding */ useChartWidth),
  sp: () => (/* binding */ useClipPathId),
  qD: () => (/* binding */ useOffset),
  d2: () => (/* binding */ useViewBox),
  bH: () => (/* binding */ useXAxisOrThrow),
  Ud: () => (/* binding */ useYAxisOrThrow),
  Nf: () => (/* binding */ useYAxisWithFiniteDomainOrRandom)
});

// UNUSED EXPORTS: ChartHeightContext, ChartWidthContext, ClipPathIdContext, OffsetContext, ViewBoxContext, XAxisContext, YAxisContext, useArbitraryYAxis

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(30761);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/find.js
var find = __webpack_require__(85963);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/every.js
var every = __webpack_require__(28119);
var every_default = /*#__PURE__*/__webpack_require__.n(every);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js
var memoize = __webpack_require__(84162);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/calculateViewBox.js

/**
 * This is memoized because the viewBox is unlikely to change often
 * - but because it is computed from offset, any change to it would re-render all children.
 *
 * And because we have many readers of the viewBox, and update it only rarely,
 * then let's optimize with memoization.
 */ var calculateViewBox = memoize_default()(function(offset) {
    return {
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height
    };
}, function(offset) {
    return [
        "l",
        offset.left,
        "t",
        offset.top,
        "w",
        offset.width,
        "h",
        offset.height
    ].join("");
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/context/chartLayoutContext.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}






var XAxisContext = /*#__PURE__*/ (0,react.createContext)(undefined);
var YAxisContext = /*#__PURE__*/ (0,react.createContext)(undefined);
var ViewBoxContext = /*#__PURE__*/ (0,react.createContext)(undefined);
var OffsetContext = /*#__PURE__*/ (0,react.createContext)({});
var ClipPathIdContext = /*#__PURE__*/ (0,react.createContext)(undefined);
var ChartHeightContext = /*#__PURE__*/ (0,react.createContext)(0);
var ChartWidthContext = /*#__PURE__*/ (0,react.createContext)(0);
/**
 * Will add all the properties required to render all individual Recharts components into a React Context.
 *
 * If you want to read these properties, see the collection of hooks exported from this file.
 *
 * @param {object} props CategoricalChartState, plus children
 * @returns {ReactElement} React Context Provider
 */ var ChartLayoutContextProvider = function ChartLayoutContextProvider(props) {
    var _props$state = props.state, xAxisMap = _props$state.xAxisMap, yAxisMap = _props$state.yAxisMap, offset = _props$state.offset, clipPathId = props.clipPathId, children = props.children, width = props.width, height = props.height;
    /**
   * Perhaps we should compute this property when reading? Let's see what is more often used
   */ var viewBox = calculateViewBox(offset);
    /*
   * This pretends to be a single context but actually is split into multiple smaller ones.
   * Why?
   * Because one React Context only allows to set one value.
   * But we need to set multiple values.
   * If we do that with one context, then we force re-render on components that might not even be interested
   * in the part of the state that has changed.
   *
   * By splitting into smaller contexts, we allow each components to be optimized and only re-render when its dependencies change.
   *
   * To actually achieve the optimal re-render, it is necessary to use React.memo().
   * See the test file for details.
   */ return /*#__PURE__*/ react_default().createElement(XAxisContext.Provider, {
        value: xAxisMap
    }, /*#__PURE__*/ react_default().createElement(YAxisContext.Provider, {
        value: yAxisMap
    }, /*#__PURE__*/ react_default().createElement(OffsetContext.Provider, {
        value: offset
    }, /*#__PURE__*/ react_default().createElement(ViewBoxContext.Provider, {
        value: viewBox
    }, /*#__PURE__*/ react_default().createElement(ClipPathIdContext.Provider, {
        value: clipPathId
    }, /*#__PURE__*/ react_default().createElement(ChartHeightContext.Provider, {
        value: height
    }, /*#__PURE__*/ react_default().createElement(ChartWidthContext.Provider, {
        value: width
    }, children)))))));
};
var useClipPathId = function useClipPathId() {
    return (0,react.useContext)(ClipPathIdContext);
};
function getKeysForDebug(object) {
    var keys = Object.keys(object);
    if (keys.length === 0) {
        return "There are no available ids.";
    }
    return "Available ids are: ".concat(keys, ".");
}
/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param xAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <XAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */ var useXAxisOrThrow = function useXAxisOrThrow(xAxisId) {
    var xAxisMap = (0,react.useContext)(XAxisContext);
    !(xAxisMap != null) ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
    var xAxis = xAxisMap[xAxisId];
    !(xAxis != null) ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
    return xAxis;
};
/**
 * This will find an arbitrary first XAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific XAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns X axisOptions, or undefined - if there are no X axes
 */ var useArbitraryXAxis = function useArbitraryXAxis() {
    var xAxisMap = (0,react.useContext)(XAxisContext);
    return (0,DataUtils/* getAnyElementOfObject */.Kt)(xAxisMap);
};
/**
 * This will find an arbitrary first YAxis. If there's exactly one it always returns that one
 * - but if there are multiple then it can return any of those.
 *
 * If you want specific YAxis out of multiple then prefer using useXAxisOrThrow
 *
 * @returns Y axisOptions, or undefined - if there are no Y axes
 */ var useArbitraryYAxis = function useArbitraryYAxis() {
    var yAxisMap = useContext(YAxisContext);
    return getAnyElementOfObject(yAxisMap);
};
/**
 * This hooks will:
 * 1st attempt to find an YAxis that has all elements in its domain finite
 * If no such axis exists, it will return an arbitrary YAxis
 * if there are no Y axes then it returns undefined
 *
 * @returns Either Y axisOptions, or undefined if there are no Y axes
 */ var useYAxisWithFiniteDomainOrRandom = function useYAxisWithFiniteDomainOrRandom() {
    var yAxisMap = (0,react.useContext)(YAxisContext);
    var yAxisWithFiniteDomain = find_default()(yAxisMap, function(axis) {
        return every_default()(axis.domain, Number.isFinite);
    });
    return yAxisWithFiniteDomain || (0,DataUtils/* getAnyElementOfObject */.Kt)(yAxisMap);
};
/**
 * This either finds and returns Axis by the specified ID, or throws an exception if an axis with this ID does not exist.
 *
 * @param yAxisId identifier of the axis - it's either autogenerated ('0'), or passed via `id` prop as <YAxis id='foo' />
 * @returns axis configuration object
 * @throws Error if no axis with this ID exists
 */ var useYAxisOrThrow = function useYAxisOrThrow(yAxisId) {
    var yAxisMap = (0,react.useContext)(YAxisContext);
    !(yAxisMap != null) ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
    var yAxis = yAxisMap[yAxisId];
    !(yAxis != null) ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
    return yAxis;
};
var useViewBox = function useViewBox() {
    var viewBox = (0,react.useContext)(ViewBoxContext);
    return viewBox;
};
var useOffset = function useOffset() {
    return (0,react.useContext)(OffsetContext);
};
var useChartWidth = function useChartWidth() {
    return (0,react.useContext)(ChartWidthContext);
};
var useChartHeight = function useChartHeight() {
    return (0,react.useContext)(ChartHeightContext);
};


/***/ }),

/***/ 32860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ Curve)
});

// UNUSED EXPORTS: getPath

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/noop.js
/* harmony default export */ function noop() {}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basis.js
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // falls through
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basis(context) {
  return new Basis(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisClosed.js



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basisClosed(context) {
  return new BasisClosed(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisOpen.js


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // falls through
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function basisOpen(context) {
  return new BasisOpen(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bump.js


class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x, y);
        else this._context.moveTo(x, y);
        break;
      }
      case 1: this._point = 2; // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
        break;
      }
    }
    this._x0 = x, this._y0 = y;
  }
}

class BumpRadial {
  constructor(context) {
    this._context = context;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {}
  point(x, y) {
    x = +x, y = +y;
    if (this._point === 0) {
      this._point = 1;
    } else {
      const p0 = pointRadial(this._x0, this._y0);
      const p1 = pointRadial(this._x0, this._y0 = (this._y0 + y) / 2);
      const p2 = pointRadial(x, this._y0);
      const p3 = pointRadial(x, y);
      this._context.moveTo(...p0);
      this._context.bezierCurveTo(...p1, ...p2, ...p3);
    }
    this._x0 = x, this._y0 = y;
  }
}

function bumpX(context) {
  return new Bump(context, true);
}

function bumpY(context) {
  return new Bump(context, false);
}

function bumpRadial(context) {
  return new BumpRadial(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linearClosed.js


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ function linearClosed(context) {
  return new LinearClosed(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ function linear(context) {
  return new Linear(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/monotone.js
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function monotone_point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: monotone_point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; monotone_point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: monotone_point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ function natural(context) {
  return new Natural(context);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ function step(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/array.js
var array = __webpack_require__(24415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/constant.js
var constant = __webpack_require__(41474);
// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/path.js + 1 modules
var src_path = __webpack_require__(50136);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/point.js
function point_x(p) {
  return p[0];
}

function point_y(p) {
  return p[1];
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/line.js






/* harmony default export */ function line(x, y) {
  var defined = (0,constant/* default */.Z)(true),
      context = null,
      curve = linear,
      output = null,
      path = (0,src_path/* withPath */.d)(line);

  x = typeof x === "function" ? x : (x === undefined) ? point_x : (0,constant/* default */.Z)(x);
  y = typeof y === "function" ? y : (y === undefined) ? point_y : (0,constant/* default */.Z)(y);

  function line(data) {
    var i,
        n = (data = (0,array/* default */.Z)(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,constant/* default */.Z)(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/area.js







/* harmony default export */ function src_area(x0, y0, y1) {
  var x1 = null,
      defined = (0,constant/* default */.Z)(true),
      context = null,
      curve = linear,
      output = null,
      path = (0,src_path/* withPath */.d)(area);

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? point_x : (0,constant/* default */.Z)(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? (0,constant/* default */.Z)(0) : (0,constant/* default */.Z)(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? point_y : (0,constant/* default */.Z)(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = (0,array/* default */.Z)(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0,constant/* default */.Z)(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,constant/* default */.Z)(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(78349);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(40837);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(49193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/types.js
var types = __webpack_require__(33306);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Curve.js
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
 * @fileOverview Curve
 */ 







var CURVE_FACTORIES = {
    curveBasisClosed: basisClosed,
    curveBasisOpen: basisOpen,
    curveBasis: basis,
    curveBumpX: bumpX,
    curveBumpY: bumpY,
    curveLinearClosed: linearClosed,
    curveLinear: linear,
    curveMonotoneX: monotoneX,
    curveMonotoneY: monotoneY,
    curveNatural: natural,
    curveStep: step,
    curveStepAfter: stepAfter,
    curveStepBefore: stepBefore
};
var defined = function defined(p) {
    return p.x === +p.x && p.y === +p.y;
};
var getX = function getX(p) {
    return p.x;
};
var getY = function getY(p) {
    return p.y;
};
var getCurveFactory = function getCurveFactory(type, layout) {
    if (isFunction_default()(type)) {
        return type;
    }
    var name = "curve".concat(upperFirst_default()(type));
    if ((name === "curveMonotone" || name === "curveBump") && layout) {
        return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
    }
    return CURVE_FACTORIES[name] || linear;
};
/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */ var getPath = function getPath(_ref) {
    var _ref$type = _ref.type, type = _ref$type === void 0 ? "linear" : _ref$type, _ref$points = _ref.points, points = _ref$points === void 0 ? [] : _ref$points, baseLine = _ref.baseLine, layout = _ref.layout, _ref$connectNulls = _ref.connectNulls, connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;
    var curveFactory = getCurveFactory(type, layout);
    var formatPoints = connectNulls ? points.filter(function(entry) {
        return defined(entry);
    }) : points;
    var lineFunction;
    if (Array.isArray(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter(function(base) {
            return defined(base);
        }) : baseLine;
        var areaPoints = formatPoints.map(function(entry, index) {
            return _objectSpread(_objectSpread({}, entry), {}, {
                base: formatBaseLine[index]
            });
        });
        if (layout === "vertical") {
            lineFunction = src_area().y(getY).x1(getX).x0(function(d) {
                return d.base.x;
            });
        } else {
            lineFunction = src_area().x(getX).y1(getY).y0(function(d) {
                return d.base.y;
            });
        }
        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
    }
    if (layout === "vertical" && (0,DataUtils/* isNumber */.hj)(baseLine)) {
        lineFunction = src_area().y(getY).x1(getX).x0(baseLine);
    } else if ((0,DataUtils/* isNumber */.hj)(baseLine)) {
        lineFunction = src_area().x(getX).y1(getY).y0(baseLine);
    } else {
        lineFunction = line().x(getX).y(getY);
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(formatPoints);
};
var Curve = function Curve(props) {
    var className = props.className, points = props.points, path = props.path, pathRef = props.pathRef;
    if ((!points || !points.length) && !path) {
        return null;
    }
    var realPath = points && points.length ? getPath(props) : path;
    return /*#__PURE__*/ react_default().createElement("path", _extends({}, (0,ReactUtils/* filterProps */.L6)(props, false), (0,types/* adaptEventHandlers */.Ym)(props), {
        className: (0,clsx/* default */.Z)("recharts-curve", className),
        d: realPath,
        ref: pathRef
    }));
};


/***/ }),

/***/ 69219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Dot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49193);
/* harmony import */ var _util_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33306);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29480);
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
 * @fileOverview Dot
 */ 



var Dot = function Dot(props) {
    var cx = props.cx, cy = props.cy, r = props.r, className = props.className;
    var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("recharts-dot", className);
    if (cx === +cx && cy === +cy && r === +r) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .L6)(props, false), (0,_util_types__WEBPACK_IMPORTED_MODULE_3__/* .adaptEventHandlers */ .Ym)(props), {
            className: layerClass,
            cx: cx,
            cy: cy,
            r: r
        }));
    }
    return null;
};


/***/ }),

/***/ 12120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Rectangle),
/* harmony export */   X: () => (/* binding */ isInRectangle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49193);
/* harmony import */ var react_smooth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27173);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29480);
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
/**
 * @fileOverview Rectangle
 */ 



var getRectanglePath = function getRectanglePath(x, y, width, height, radius) {
    var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
    var ySign = height >= 0 ? 1 : -1;
    var xSign = width >= 0 ? 1 : -1;
    var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
    var path;
    if (maxRadius > 0 && radius instanceof Array) {
        var newRadius = [
            0,
            0,
            0,
            0
        ];
        for(var i = 0, len = 4; i < len; i++){
            newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
        }
        path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);
        if (newRadius[0] > 0) {
            path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
        }
        path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);
        if (newRadius[1] > 0) {
            path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
        }
        path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);
        if (newRadius[2] > 0) {
            path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
        }
        path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);
        if (newRadius[3] > 0) {
            path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
        }
        path += "Z";
    } else if (maxRadius > 0 && radius === +radius && radius > 0) {
        var _newRadius = Math.min(maxRadius, radius);
        path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
    } else {
        path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
    }
    return path;
};
var isInRectangle = function isInRectangle(point, rect) {
    if (!point || !rect) {
        return false;
    }
    var px = point.x, py = point.y;
    var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
    if (Math.abs(width) > 0 && Math.abs(height) > 0) {
        var minX = Math.min(x, x + width);
        var maxX = Math.max(x, x + width);
        var minY = Math.min(y, y + height);
        var maxY = Math.max(y, y + height);
        return px >= minX && px <= maxX && py >= minY && py <= maxY;
    }
    return false;
};
var defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    // The radius of border
    // The radius of four corners when radius is a number
    // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
var Rectangle = function Rectangle(rectangleProps) {
    var props = _objectSpread(_objectSpread({}, defaultProps), rectangleProps);
    var pathRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1), _useState2 = _slicedToArray(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        if (pathRef.current && pathRef.current.getTotalLength) {
            try {
                var pathTotalLength = pathRef.current.getTotalLength();
                if (pathTotalLength) {
                    setTotalLength(pathTotalLength);
                }
            } catch (err) {
            // calculate total length error
            }
        }
    }, []);
    var x = props.x, y = props.y, width = props.width, height = props.height, radius = props.radius, className = props.className;
    var animationEasing = props.animationEasing, animationDuration = props.animationDuration, animationBegin = props.animationBegin, isAnimationActive = props.isAnimationActive, isUpdateAnimationActive = props.isUpdateAnimationActive;
    if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
        return null;
    }
    var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("recharts-rectangle", className);
    if (!isUpdateAnimationActive) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_3__/* .filterProps */ .L6)(props, true), {
            className: layerClass,
            d: getRectanglePath(x, y, width, height, radius)
        }));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_smooth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        canBegin: totalLength > 0,
        from: {
            width: width,
            height: height,
            x: x,
            y: y
        },
        to: {
            width: width,
            height: height,
            x: x,
            y: y
        },
        duration: animationDuration,
        animationEasing: animationEasing,
        isActive: isUpdateAnimationActive
    }, function(_ref) {
        var currWidth = _ref.width, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_smooth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            canBegin: totalLength > 0,
            from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
            to: "".concat(totalLength, "px 0px"),
            attributeName: "strokeDasharray",
            begin: animationBegin,
            duration: animationDuration,
            isActive: isAnimationActive,
            easing: animationEasing
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_3__/* .filterProps */ .L6)(props, true), {
            className: layerClass,
            d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
            ref: pathRef
        })));
    });
};


/***/ }),

/***/ 87921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Sector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49193);
/* harmony import */ var _util_ReactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29480);
/* harmony import */ var _util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55381);
/* harmony import */ var _util_DataUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54491);
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
 * @fileOverview Sector
 */ 




var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
    var sign = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_1__/* .mathSign */ .uY)(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
    return sign * deltaAngle;
};
var getTangentCircle = function getTangentCircle(_ref) {
    var cx = _ref.cx, cy = _ref.cy, radius = _ref.radius, angle = _ref.angle, sign = _ref.sign, isExternal = _ref.isExternal, cornerRadius = _ref.cornerRadius, cornerIsExternal = _ref.cornerIsExternal;
    var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
    var theta = Math.asin(cornerRadius / centerRadius) / _util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .RADIAN */ .Wk;
    var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
    var center = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, centerRadius, centerAngle);
    // The coordinate of point which is tangent to the circle
    var circleTangency = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, radius, centerAngle);
    // The coordinate of point which is tangent to the radius line
    var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
    var lineTangency = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, centerRadius * Math.cos(theta * _util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .RADIAN */ .Wk), lineTangencyAngle);
    return {
        center: center,
        circleTangency: circleTangency,
        lineTangency: lineTangency,
        theta: theta
    };
};
var getSectorPath = function getSectorPath(_ref2) {
    var cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
    var angle = getDeltaAngle(startAngle, endAngle);
    // When the angle of sector equals to 360, star point and end point coincide
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, outerRadius, startAngle);
    var outerEndPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, outerRadius, tempEndAngle);
    var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
    if (innerRadius > 0) {
        var innerStartPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, innerRadius, startAngle);
        var innerEndPoint = (0,_util_PolarUtils__WEBPACK_IMPORTED_MODULE_2__/* .polarToCartesian */ .op)(cx, cy, innerRadius, tempEndAngle);
        path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
    } else {
        path += "L ".concat(cx, ",").concat(cy, " Z");
    }
    return path;
};
var getSectorWithCorner = function getSectorWithCorner(_ref3) {
    var cx = _ref3.cx, cy = _ref3.cy, innerRadius = _ref3.innerRadius, outerRadius = _ref3.outerRadius, cornerRadius = _ref3.cornerRadius, forceCornerRadius = _ref3.forceCornerRadius, cornerIsExternal = _ref3.cornerIsExternal, startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
    var sign = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_1__/* .mathSign */ .uY)(endAngle - startAngle);
    var _getTangentCircle = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: outerRadius,
        angle: startAngle,
        sign: sign,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal
    }), soct = _getTangentCircle.circleTangency, solt = _getTangentCircle.lineTangency, sot = _getTangentCircle.theta;
    var _getTangentCircle2 = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: outerRadius,
        angle: endAngle,
        sign: -sign,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal
    }), eoct = _getTangentCircle2.circleTangency, eolt = _getTangentCircle2.lineTangency, eot = _getTangentCircle2.theta;
    var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
    if (outerArcAngle < 0) {
        if (forceCornerRadius) {
            return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
        }
        return getSectorPath({
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle
        });
    }
    var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
    if (innerRadius > 0) {
        var _getTangentCircle3 = getTangentCircle({
            cx: cx,
            cy: cy,
            radius: innerRadius,
            angle: startAngle,
            sign: sign,
            isExternal: true,
            cornerRadius: cornerRadius,
            cornerIsExternal: cornerIsExternal
        }), sict = _getTangentCircle3.circleTangency, silt = _getTangentCircle3.lineTangency, sit = _getTangentCircle3.theta;
        var _getTangentCircle4 = getTangentCircle({
            cx: cx,
            cy: cy,
            radius: innerRadius,
            angle: endAngle,
            sign: -sign,
            isExternal: true,
            cornerRadius: cornerRadius,
            cornerIsExternal: cornerIsExternal
        }), eict = _getTangentCircle4.circleTangency, eilt = _getTangentCircle4.lineTangency, eit = _getTangentCircle4.theta;
        var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
        if (innerArcAngle < 0 && cornerRadius === 0) {
            return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
        }
        path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
    } else {
        path += "L".concat(cx, ",").concat(cy, "Z");
    }
    return path;
};
var defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false
};
var Sector = function Sector(sectorProps) {
    var props = _objectSpread(_objectSpread({}, defaultProps), sectorProps);
    var cx = props.cx, cy = props.cy, innerRadius = props.innerRadius, outerRadius = props.outerRadius, cornerRadius = props.cornerRadius, forceCornerRadius = props.forceCornerRadius, cornerIsExternal = props.cornerIsExternal, startAngle = props.startAngle, endAngle = props.endAngle, className = props.className;
    if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
    }
    var layerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("recharts-sector", className);
    var deltaRadius = outerRadius - innerRadius;
    var cr = (0,_util_DataUtils__WEBPACK_IMPORTED_MODULE_1__/* .getPercentValue */ .h1)(cornerRadius, deltaRadius, 0, true);
    var path;
    if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path = getSectorWithCorner({
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            cornerRadius: Math.min(cr, deltaRadius / 2),
            forceCornerRadius: forceCornerRadius,
            cornerIsExternal: cornerIsExternal,
            startAngle: startAngle,
            endAngle: endAngle
        });
    } else {
        path = getSectorPath({
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle
        });
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", _extends({}, (0,_util_ReactUtils__WEBPACK_IMPORTED_MODULE_4__/* .filterProps */ .L6)(props, true), {
        className: layerClass,
        d: path,
        role: "img"
    }));
};


/***/ }),

/***/ 66413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bn: () => (/* binding */ Shape),
  a3: () => (/* binding */ getActiveShapeIndexForTooltip),
  lT: () => (/* binding */ isFunnel),
  V$: () => (/* binding */ isPie),
  w7: () => (/* binding */ isScatter)
});

// UNUSED EXPORTS: compareFunnel, comparePie, compareScatter, getPropsFromShapeOption

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(40837);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(74284);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(89649);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(4071);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Rectangle.js
var Rectangle = __webpack_require__(12120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(49193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-smooth@4.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-smooth/es6/index.js + 19 modules
var es6 = __webpack_require__(27173);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Trapezoid.js
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
/**
 * @fileOverview Rectangle
 */ 



var getTrapezoidPath = function getTrapezoidPath(x, y, upperWidth, lowerWidth, height) {
    var widthGap = upperWidth - lowerWidth;
    var path;
    path = "M ".concat(x, ",").concat(y);
    path += "L ".concat(x + upperWidth, ",").concat(y);
    path += "L ".concat(x + upperWidth - widthGap / 2, ",").concat(y + height);
    path += "L ".concat(x + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y + height);
    path += "L ".concat(x, ",").concat(y, " Z");
    return path;
};
var defaultProps = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
var Trapezoid = function Trapezoid(props) {
    var trapezoidProps = _objectSpread(_objectSpread({}, defaultProps), props);
    var pathRef = (0,react.useRef)();
    var _useState = (0,react.useState)(-1), _useState2 = _slicedToArray(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
    (0,react.useEffect)(function() {
        if (pathRef.current && pathRef.current.getTotalLength) {
            try {
                var pathTotalLength = pathRef.current.getTotalLength();
                if (pathTotalLength) {
                    setTotalLength(pathTotalLength);
                }
            } catch (err) {
            // calculate total length error
            }
        }
    }, []);
    var x = trapezoidProps.x, y = trapezoidProps.y, upperWidth = trapezoidProps.upperWidth, lowerWidth = trapezoidProps.lowerWidth, height = trapezoidProps.height, className = trapezoidProps.className;
    var animationEasing = trapezoidProps.animationEasing, animationDuration = trapezoidProps.animationDuration, animationBegin = trapezoidProps.animationBegin, isUpdateAnimationActive = trapezoidProps.isUpdateAnimationActive;
    if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
        return null;
    }
    var layerClass = (0,clsx/* default */.Z)("recharts-trapezoid", className);
    if (!isUpdateAnimationActive) {
        return /*#__PURE__*/ react_default().createElement("g", null, /*#__PURE__*/ react_default().createElement("path", _extends({}, (0,ReactUtils/* filterProps */.L6)(trapezoidProps, true), {
            className: layerClass,
            d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
        })));
    }
    return /*#__PURE__*/ react_default().createElement(es6/* default */.ZP, {
        canBegin: totalLength > 0,
        from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: height,
            x: x,
            y: y
        },
        to: {
            upperWidth: upperWidth,
            lowerWidth: lowerWidth,
            height: height,
            x: x,
            y: y
        },
        duration: animationDuration,
        animationEasing: animationEasing,
        isActive: isUpdateAnimationActive
    }, function(_ref) {
        var currUpperWidth = _ref.upperWidth, currLowerWidth = _ref.lowerWidth, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
        return /*#__PURE__*/ react_default().createElement(es6/* default */.ZP, {
            canBegin: totalLength > 0,
            from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
            to: "".concat(totalLength, "px 0px"),
            attributeName: "strokeDasharray",
            begin: animationBegin,
            duration: animationDuration,
            easing: animationEasing
        }, /*#__PURE__*/ react_default().createElement("path", _extends({}, (0,ReactUtils/* filterProps */.L6)(trapezoidProps, true), {
            className: layerClass,
            d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
            ref: pathRef
        })));
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Sector.js
var Sector = __webpack_require__(87921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/container/Layer.js
var Layer = __webpack_require__(68874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/shape/Symbols.js + 15 modules
var Symbols = __webpack_require__(44191);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ActiveShapeUtils.js
var _excluded = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive"
];
function ActiveShapeUtils_typeof(o) {
    "@babel/helpers - typeof";
    return ActiveShapeUtils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, ActiveShapeUtils_typeof(o);
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
function ActiveShapeUtils_ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function ActiveShapeUtils_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ActiveShapeUtils_ownKeys(Object(t), !0).forEach(function(r) {
            ActiveShapeUtils_defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ActiveShapeUtils_ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function ActiveShapeUtils_defineProperty(obj, key, value) {
    key = ActiveShapeUtils_toPropertyKey(key);
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
function ActiveShapeUtils_toPropertyKey(t) {
    var i = ActiveShapeUtils_toPrimitive(t, "string");
    return "symbol" == ActiveShapeUtils_typeof(i) ? i : String(i);
}
function ActiveShapeUtils_toPrimitive(t, r) {
    if ("object" != ActiveShapeUtils_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != ActiveShapeUtils_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}










/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a react element
 *
 * <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
 * to the value of props.shapeType that is passed to the root.
 *
 */ function defaultPropTransformer(option, props) {
    return ActiveShapeUtils_objectSpread(ActiveShapeUtils_objectSpread({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
    return shapeType === "symbols";
}
function ShapeSelector(_ref) {
    var shapeType = _ref.shapeType, elementProps = _ref.elementProps;
    switch(shapeType){
        case "rectangle":
            return /*#__PURE__*/ react_default().createElement(Rectangle/* Rectangle */.A, elementProps);
        case "trapezoid":
            return /*#__PURE__*/ react_default().createElement(Trapezoid, elementProps);
        case "sector":
            return /*#__PURE__*/ react_default().createElement(Sector/* Sector */.L, elementProps);
        case "symbols":
            if (isSymbolsProps(shapeType, elementProps)) {
                return /*#__PURE__*/ react_default().createElement(Symbols/* Symbols */.v, elementProps);
            }
            break;
        default:
            return null;
    }
}
function getPropsFromShapeOption(option) {
    if (/*#__PURE__*/ (0,react.isValidElement)(option)) {
        return option.props;
    }
    return option;
}
function Shape(_ref2) {
    var option = _ref2.option, shapeType = _ref2.shapeType, _ref2$propTransformer = _ref2.propTransformer, propTransformer = _ref2$propTransformer === void 0 ? defaultPropTransformer : _ref2$propTransformer, _ref2$activeClassName = _ref2.activeClassName, activeClassName = _ref2$activeClassName === void 0 ? "recharts-active-shape" : _ref2$activeClassName, isActive = _ref2.isActive, props = _objectWithoutProperties(_ref2, _excluded);
    var shape;
    if (/*#__PURE__*/ (0,react.isValidElement)(option)) {
        shape = /*#__PURE__*/ (0,react.cloneElement)(option, ActiveShapeUtils_objectSpread(ActiveShapeUtils_objectSpread({}, props), getPropsFromShapeOption(option)));
    } else if (isFunction_default()(option)) {
        shape = option(props);
    } else if (isPlainObject_default()(option) && !isBoolean_default()(option)) {
        var nextProps = propTransformer(option, props);
        shape = /*#__PURE__*/ react_default().createElement(ShapeSelector, {
            shapeType: shapeType,
            elementProps: nextProps
        });
    } else {
        var elementProps = props;
        shape = /*#__PURE__*/ react_default().createElement(ShapeSelector, {
            shapeType: shapeType,
            elementProps: elementProps
        });
    }
    if (isActive) {
        return /*#__PURE__*/ react_default().createElement(Layer/* Layer */.m, {
            className: activeClassName
        }, shape);
    }
    return shape;
}
/**
 * This is an abstraction to handle identifying the active index from a tooltip mouse interaction
 */ function isFunnel(graphicalItem, _item) {
    return _item != null && "trapezoids" in graphicalItem.props;
}
function isPie(graphicalItem, _item) {
    return _item != null && "sectors" in graphicalItem.props;
}
function isScatter(graphicalItem, _item) {
    return _item != null && "points" in graphicalItem.props;
}
function compareFunnel(shapeData, activeTooltipItem) {
    var _activeTooltipItem$la, _activeTooltipItem$la2;
    var xMatches = shapeData.x === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la === void 0 ? void 0 : _activeTooltipItem$la.x) || shapeData.x === activeTooltipItem.x;
    var yMatches = shapeData.y === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la2 = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la2 === void 0 ? void 0 : _activeTooltipItem$la2.y) || shapeData.y === activeTooltipItem.y;
    return xMatches && yMatches;
}
function comparePie(shapeData, activeTooltipItem) {
    var startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
    var endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
    return startAngleMatches && endAngleMatches;
}
function compareScatter(shapeData, activeTooltipItem) {
    var xMatches = shapeData.x === activeTooltipItem.x;
    var yMatches = shapeData.y === activeTooltipItem.y;
    var zMatches = shapeData.z === activeTooltipItem.z;
    return xMatches && yMatches && zMatches;
}
function getComparisonFn(graphicalItem, activeItem) {
    var comparison;
    if (isFunnel(graphicalItem, activeItem)) {
        comparison = compareFunnel;
    } else if (isPie(graphicalItem, activeItem)) {
        comparison = comparePie;
    } else if (isScatter(graphicalItem, activeItem)) {
        comparison = compareScatter;
    }
    return comparison;
}
function getShapeDataKey(graphicalItem, activeItem) {
    var shapeKey;
    if (isFunnel(graphicalItem, activeItem)) {
        shapeKey = "trapezoids";
    } else if (isPie(graphicalItem, activeItem)) {
        shapeKey = "sectors";
    } else if (isScatter(graphicalItem, activeItem)) {
        shapeKey = "points";
    }
    return shapeKey;
}
function getActiveShapeTooltipPayload(graphicalItem, activeItem) {
    if (isFunnel(graphicalItem, activeItem)) {
        var _activeItem$tooltipPa;
        return (_activeItem$tooltipPa = activeItem.tooltipPayload) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa[0]) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa.payload) === null || _activeItem$tooltipPa === void 0 ? void 0 : _activeItem$tooltipPa.payload;
    }
    if (isPie(graphicalItem, activeItem)) {
        var _activeItem$tooltipPa2;
        return (_activeItem$tooltipPa2 = activeItem.tooltipPayload) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2[0]) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2.payload) === null || _activeItem$tooltipPa2 === void 0 ? void 0 : _activeItem$tooltipPa2.payload;
    }
    if (isScatter(graphicalItem, activeItem)) {
        return activeItem.payload;
    }
    return {};
}
/**
 *
 * @param {GetActiveShapeIndexForTooltip} arg an object of incoming attributes from Tooltip
 * @returns {number}
 *
 * To handle possible duplicates in the data set,
 * match both the data value of the active item to a data value on a graph item,
 * and match the mouse coordinates of the active item to the coordinates of in a particular components shape data.
 * This assumes equal lengths of shape objects to data items.
 */ function getActiveShapeIndexForTooltip(_ref3) {
    var activeTooltipItem = _ref3.activeTooltipItem, graphicalItem = _ref3.graphicalItem, itemData = _ref3.itemData;
    var shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
    var tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);
    var activeItemMatches = itemData.filter(function(datum, dataIndex) {
        var valuesMatch = isEqual_default()(tooltipPayload, datum);
        var mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(function(shapeData) {
            var comparison = getComparisonFn(graphicalItem, activeTooltipItem);
            return comparison(shapeData, activeTooltipItem);
        });
        // get the last index in case of multiple matches
        var indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(mouseCoordinateMatches[mouseCoordinateMatches.length - 1]);
        var coordinatesMatch = dataIndex === indexOfMouseCoordinates;
        return valuesMatch && coordinatesMatch;
    });
    // get the last index in case of multiple matches
    var activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);
    return activeIndex;
}


/***/ }),

/***/ 64239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ky: () => (/* binding */ createLabeledScales),
/* harmony export */   O1: () => (/* binding */ rectWithPoints),
/* harmony export */   _b: () => (/* binding */ rectWithCoords),
/* harmony export */   t9: () => (/* binding */ formatAxisMap),
/* harmony export */   xE: () => (/* binding */ getAngledRectangleWidth)
/* harmony export */ });
/* unused harmony exports ScaleHelper, normalizeAngle */
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90304);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_every__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28119);
/* harmony import */ var lodash_every__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_every__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86837);
/* harmony import */ var _ReactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29480);
/* harmony import */ var _DataUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54491);
/* harmony import */ var _cartesian_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13829);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
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






/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */ var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height, layout = props.layout, children = props.children;
    var ids = Object.keys(axisMap);
    var steps = {
        left: offset.left,
        leftMirror: offset.left,
        right: width - offset.right,
        rightMirror: width - offset.right,
        top: offset.top,
        topMirror: offset.top,
        bottom: height - offset.bottom,
        bottomMirror: height - offset.bottom
    };
    var hasBar = !!(0,_ReactUtils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .sP)(children, _cartesian_Bar__WEBPACK_IMPORTED_MODULE_3__/* .Bar */ .$);
    return ids.reduce(function(result, id) {
        var axis = axisMap[id];
        var orientation = axis.orientation, domain = axis.domain, _axis$padding = axis.padding, padding = _axis$padding === void 0 ? {} : _axis$padding, mirror = axis.mirror, reversed = axis.reversed;
        var offsetKey = "".concat(orientation).concat(mirror ? "Mirror" : "");
        var calculatedPadding, range, x, y, needSpace;
        if (axis.type === "number" && (axis.padding === "gap" || axis.padding === "no-gap")) {
            var diff = domain[1] - domain[0];
            var smallestDistanceBetweenValues = Infinity;
            var sortedValues = axis.categoricalDomain.sort();
            sortedValues.forEach(function(value, index) {
                if (index > 0) {
                    smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
                }
            });
            if (Number.isFinite(smallestDistanceBetweenValues)) {
                var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
                var rangeWidth = axis.layout === "vertical" ? offset.height : offset.width;
                if (axis.padding === "gap") {
                    calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
                }
                if (axis.padding === "no-gap") {
                    var gap = (0,_DataUtils__WEBPACK_IMPORTED_MODULE_4__/* .getPercentValue */ .h1)(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
                    var halfBand = smallestDistanceInPercent * rangeWidth / 2;
                    calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
                }
            }
        }
        if (axisType === "xAxis") {
            range = [
                offset.left + (padding.left || 0) + (calculatedPadding || 0),
                offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)
            ];
        } else if (axisType === "yAxis") {
            range = layout === "horizontal" ? [
                offset.top + offset.height - (padding.bottom || 0),
                offset.top + (padding.top || 0)
            ] : [
                offset.top + (padding.top || 0) + (calculatedPadding || 0),
                offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)
            ];
        } else {
            range = axis.range;
        }
        if (reversed) {
            range = [
                range[1],
                range[0]
            ];
        }
        var _parseScale = (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_5__/* .parseScale */ .Hq)(axis, chartName, hasBar), scale = _parseScale.scale, realScaleType = _parseScale.realScaleType;
        scale.domain(domain).range(range);
        (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_5__/* .checkDomainOfScale */ .zF)(scale);
        var ticks = (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_5__/* .getTicksOfScale */ .g$)(scale, _objectSpread(_objectSpread({}, axis), {}, {
            realScaleType: realScaleType
        }));
        if (axisType === "xAxis") {
            needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
            x = offset.left;
            y = steps[offsetKey] - needSpace * axis.height;
        } else if (axisType === "yAxis") {
            needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
            x = steps[offsetKey] - needSpace * axis.width;
            y = offset.top;
        }
        var finalAxis = _objectSpread(_objectSpread(_objectSpread({}, axis), ticks), {}, {
            realScaleType: realScaleType,
            x: x,
            y: y,
            scale: scale,
            width: axisType === "xAxis" ? offset.width : axis.width,
            height: axisType === "yAxis" ? offset.height : axis.height
        });
        finalAxis.bandSize = (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_5__/* .getBandSizeOfAxis */ .zT)(finalAxis, ticks);
        if (!axis.hide && axisType === "xAxis") {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
        } else if (!axis.hide) {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, id, finalAxis));
    }, {});
};
var rectWithPoints = function rectWithPoints(_ref, _ref2) {
    var x1 = _ref.x, y1 = _ref.y;
    var x2 = _ref2.x, y2 = _ref2.y;
    return {
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1)
    };
};
/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */ var rectWithCoords = function rectWithCoords(_ref3) {
    var x1 = _ref3.x1, y1 = _ref3.y1, x2 = _ref3.x2, y2 = _ref3.y2;
    return rectWithPoints({
        x: x1,
        y: y1
    }, {
        x: x2,
        y: y2
    });
};
var ScaleHelper = /*#__PURE__*/ function() {
    function ScaleHelper(scale) {
        _classCallCheck(this, ScaleHelper);
        this.scale = scale;
    }
    _createClass(ScaleHelper, [
        {
            key: "domain",
            get: function get() {
                return this.scale.domain;
            }
        },
        {
            key: "range",
            get: function get() {
                return this.scale.range;
            }
        },
        {
            key: "rangeMin",
            get: function get() {
                return this.range()[0];
            }
        },
        {
            key: "rangeMax",
            get: function get() {
                return this.range()[1];
            }
        },
        {
            key: "bandwidth",
            get: function get() {
                return this.scale.bandwidth;
            }
        },
        {
            key: "apply",
            value: function apply(value) {
                var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, bandAware = _ref4.bandAware, position = _ref4.position;
                if (value === undefined) {
                    return undefined;
                }
                if (position) {
                    switch(position){
                        case "start":
                            {
                                return this.scale(value);
                            }
                        case "middle":
                            {
                                var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(value) + offset;
                            }
                        case "end":
                            {
                                var _offset = this.bandwidth ? this.bandwidth() : 0;
                                return this.scale(value) + _offset;
                            }
                        default:
                            {
                                return this.scale(value);
                            }
                    }
                }
                if (bandAware) {
                    var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(value) + _offset2;
                }
                return this.scale(value);
            }
        },
        {
            key: "isInRange",
            value: function isInRange(value) {
                var range = this.range();
                var first = range[0];
                var last = range[range.length - 1];
                return first <= last ? value >= first && value <= last : value >= last && value <= first;
            }
        }
    ], [
        {
            key: "create",
            value: function create(obj) {
                return new ScaleHelper(obj);
            }
        }
    ]);
    return ScaleHelper;
}();
_defineProperty(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = function createLabeledScales(options) {
    var scales = Object.keys(options).reduce(function(res, key) {
        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, ScaleHelper.create(options[key])));
    }, {});
    return _objectSpread(_objectSpread({}, scales), {}, {
        apply: function apply(coord) {
            var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, bandAware = _ref5.bandAware, position = _ref5.position;
            return lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(coord, function(value, label) {
                return scales[label].apply(value, {
                    bandAware: bandAware,
                    position: position
                });
            });
        },
        isInRange: function isInRange(coord) {
            return lodash_every__WEBPACK_IMPORTED_MODULE_1___default()(coord, function(value, label) {
                return scales[label].isInRange(value);
            });
        }
    });
};
/** Normalizes the angle so that 0 <= angle < 180.
 * @param {number} angle Angle in degrees.
 * @return {number} the normalized angle with a value of at least 0 and never greater or equal to 180. */ function normalizeAngle(angle) {
    return (angle % 180 + 180) % 180;
}
/** Calculates the width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 * @param {Object} size Width and height of the text in a horizontal position.
 * @param {number} angle Angle in degrees in which the text is displayed.
 * @return {number} The width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 */ var getAngledRectangleWidth = function getAngledRectangleWidth(_ref6) {
    var width = _ref6.width, height = _ref6.height;
    var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Ensure angle is >= 0 && < 180
    var normalizedAngle = normalizeAngle(angle);
    var angleRadians = normalizedAngle * Math.PI / 180;
    /* Depending on the height and width of the rectangle, we may need to use different formulas to calculate the angled
   * width. This threshold defines when each formula should kick in. */ var angleThreshold = Math.atan(height / width);
    var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
    return Math.abs(angledWidth);
};


/***/ }),

/***/ 86837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  By: () => (/* binding */ appendOffsetOfLegend),
  VO: () => (/* binding */ calculateActiveTickIndex),
  zF: () => (/* binding */ checkDomainOfScale),
  DO: () => (/* binding */ combineEventHandlers),
  Bu: () => (/* binding */ findPositionOfBar),
  zT: () => (/* binding */ getBandSizeOfAxis),
  qz: () => (/* binding */ getBarPosition),
  pt: () => (/* binding */ getBarSizeList),
  Yj: () => (/* binding */ getBaseValueOfBar),
  Fy: () => (/* binding */ getCateCoordinateOfBar),
  Hv: () => (/* binding */ getCateCoordinateOfLine),
  Rf: () => (/* binding */ getCoordinatesOfGrid),
  gF: () => (/* binding */ getDomainOfDataByKey),
  s6: () => (/* binding */ getDomainOfItemsWithSameAxis),
  EB: () => (/* binding */ getDomainOfStackGroups),
  fk: () => (/* binding */ getMainColorOfGraphicItem),
  wh: () => (/* binding */ getStackGroupsByAxisId),
  O3: () => (/* binding */ getStackedDataOfItem),
  uY: () => (/* binding */ getTicksOfAxis),
  g$: () => (/* binding */ getTicksOfScale),
  Qo: () => (/* binding */ getTooltipItem),
  F$: () => (/* binding */ getValueByDataKey),
  NA: () => (/* binding */ isCategoricalAxis),
  ko: () => (/* binding */ parseDomainOfCategoryAxis),
  ZI: () => (/* binding */ parseErrorBarsOfAxis),
  Hq: () => (/* binding */ parseScale),
  LG: () => (/* binding */ parseSpecifiedDomain),
  Vv: () => (/* binding */ truncateByDomain)
});

// UNUSED EXPORTS: MAX_VALUE_REG, MIN_VALUE_REG, getDomainOfErrorBars, getLegendProps, getStackedData, offsetPositive, offsetSign

// NAMESPACE OBJECT: ../../node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-scale.js
var d3_scale_namespaceObject = {};
__webpack_require__.r(d3_scale_namespaceObject);
__webpack_require__.d(d3_scale_namespaceObject, {
  scaleBand: () => (band/* default */.Z),
  scaleDiverging: () => (diverging),
  scaleDivergingLog: () => (divergingLog),
  scaleDivergingPow: () => (divergingPow),
  scaleDivergingSqrt: () => (divergingSqrt),
  scaleDivergingSymlog: () => (divergingSymlog),
  scaleIdentity: () => (identity_identity),
  scaleImplicit: () => (ordinal/* implicit */.O),
  scaleLinear: () => (linear_linear),
  scaleLog: () => (log),
  scaleOrdinal: () => (ordinal/* default */.Z),
  scalePoint: () => (band/* point */.x),
  scalePow: () => (pow),
  scaleQuantile: () => (quantile_quantile),
  scaleQuantize: () => (quantize),
  scaleRadial: () => (radial),
  scaleSequential: () => (sequential),
  scaleSequentialLog: () => (sequentialLog),
  scaleSequentialPow: () => (sequentialPow),
  scaleSequentialQuantile: () => (sequentialQuantile),
  scaleSequentialSqrt: () => (sequentialSqrt),
  scaleSequentialSymlog: () => (sequentialSymlog),
  scaleSqrt: () => (sqrt),
  scaleSymlog: () => (symlog),
  scaleThreshold: () => (threshold),
  scaleTime: () => (time),
  scaleUtc: () => (utcTime),
  tickFormat: () => (tickFormat)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js + 1 modules
var band = __webpack_require__(11738);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js
const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ascending.js
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisector.js



function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function zero() {
  return 0;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/number.js
function number_number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js




const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = bisector(number_number).center;
/* harmony default export */ const bisect = (bisectRight);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js
/* harmony default export */ function src_define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

src_define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

src_define(Rgb, color_rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

src_define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function src_basis(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js
/* harmony default export */ const src_constant = (x => () => x);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : src_constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : src_constant(isNaN(a) ? b : a);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ const rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/array.js



/* harmony default export */ function array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/date.js
/* harmony default export */ function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js
/* harmony default export */ function src_number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/object.js


/* harmony default export */ function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function string_zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: src_number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : string_zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ function src_numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function numberArray_isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js










/* harmony default export */ function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? src_constant(b)
      : (t === "number" ? src_number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date
      : numberArray_isNumberArray(b) ? src_numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : src_number)(a, b);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/round.js
/* harmony default export */ function round(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js
function src_number_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = value,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, src_number_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js
var init = __webpack_require__(78903);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatSpecifier.js
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatDecimal.js
/* harmony default export */ function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/exponent.js


/* harmony default export */ function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionPrefix.js


/* harmony default export */ function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatGroup.js
/* harmony default export */ function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatNumerals.js
/* harmony default export */ function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatTrim.js
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatPrefixAuto.js


var prefixExponent;

/* harmony default export */ function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatRounded.js


/* harmony default export */ function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatTypes.js




/* harmony default export */ const formatTypes = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/identity.js
/* harmony default export */ function src_identity(x) {
  return x;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/locale.js









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function locale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? src_identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? src_identity : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/defaultLocale.js


var defaultLocale_locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  defaultLocale_locale = locale(definition);
  format = defaultLocale_locale.format;
  formatPrefix = defaultLocale_locale.formatPrefix;
  return defaultLocale_locale;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionRound.js


/* harmony default export */ function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionFixed.js


/* harmony default export */ function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/tickFormat.js



function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear_linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear_linear());
  };

  init/* initRange */.o.apply(scale, arguments);

  return linearish(scale);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/identity.js



function identity_identity(domain) {
  var unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, src_number_number), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity_identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, src_number_number) : [0, 1];

  return linearish(scale);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/log.js






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : x => Math.pow(base, x);
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), x => Math.log(x) / base);
}

function reflect(f) {
  return (x, k) => -f(-x, k);
}

function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = count => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;

    if (r) ([u, v] = [v, u]);

    let i = logs(u);
    let j = logs(v);
    let k;
    let t;
    const n = count == null ? 10 : +count;
    let z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1; k < base; ++k) {
          t = i < 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1; k >= 1; --k) {
          t = i > 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };

  scale.tickFormat = (count, specifier) => {
    if (count == null) count = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format(specifier);
    }
    if (count === Infinity) return specifier;
    const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return d => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = () => {
    return domain(nice(domain(), {
      floor: x => pows(Math.floor(logs(x))),
      ceil: x => pows(Math.ceil(logs(x)))
    }));
  };

  return scale;
}

function log() {
  const scale = loggish(transformer()).domain([1, 10]);
  scale.copy = () => copy(scale, log()).base(scale.base());
  init/* initRange */.o.apply(scale, arguments);
  return scale;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/symlog.js




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog() {
  var scale = symlogish(transformer());

  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };

  return init/* initRange */.o.apply(scale, arguments);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js + 1 modules
var ordinal = __webpack_require__(86306);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/pow.js




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(identity, identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity, identity)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function pow() {
  var scale = powish(transformer());

  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };

  init/* initRange */.o.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/radial.js





function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = continuous(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, src_number_number)).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  init/* initRange */.o.apply(scale, arguments);

  return linearish(scale);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/sort.js



function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f] = F;
  if ((f && f.length !== 2) || F.length > 1) {
    const index = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map(f => values.map(f));
      index.sort((i, j) => {
        for (const f of F) {
          const c = sort_ascendingDefined(f[i], f[j]);
          if (c) return c;
        }
      });
    } else {
      f = values.map(f);
      index.sort((i, j) => sort_ascendingDefined(f[i], f[j]));
    }
    return permute(values, index);
  }
  return values.sort(compareDefined(f));
}

function compareDefined(compare = ascending) {
  if (compare === ascending) return sort_ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a, b) => {
    const x = compare(a, b);
    if (x || x === 0) return x;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}

function sort_ascendingDefined(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/quickselect.js


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect_quickselect(array, k, left = 0, right = Infinity, compare) {
  k = Math.floor(k);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array.length - 1, right));

  if (!(left <= k && k <= right)) return array;

  compare = compare === undefined ? sort_ascendingDefined : compareDefined(compare);

  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect_quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }

  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/quantile.js









function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max(quickselect_quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = number_number) {
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function quantileIndex(values, p, valueof = number) {
  if (isNaN(p = +p)) return;
  numbers = Float64Array.from(values, (_, i) => number(valueof(values[i], i, values)));
  if (p <= 0) return minIndex(numbers);
  if (p >= 1) return maxIndex(numbers);
  var numbers,
      index = Uint32Array.from(values, (_, i) => i),
      j = numbers.length - 1,
      i = Math.floor(j * p);
  quickselect(index, i, 0, j, (i, j) => ascendingDefined(numbers[i], numbers[j]));
  i = greatest(index.subarray(0, i + 1), (i) => numbers[i]);
  return i >= 0 ? i : -1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantile.js



function quantile_quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[bisect(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile_quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return init/* initRange */.o.apply(scale, arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantize.js




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return init/* initRange */.o.apply(linearish(scale), arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/threshold.js



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x != null && x <= x ? range[bisect(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return init/* initRange */.o.apply(scale, arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/duration.js
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/interval.js
const t0 = new Date, t1 = new Date;

function timeInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = (date) => {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? (d) => field(d) % step === 0
              : (d) => interval.count(0, d) % step === 0);
    };
  }

  return interval;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/millisecond.js


const millisecond = timeInterval(() => {
  // noop
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date) => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};

const milliseconds = millisecond.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/second.js



const second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});

const seconds = second.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/minute.js



const timeMinute = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getMinutes();
});

const timeMinutes = timeMinute.range;

const utcMinute = timeInterval((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});

const utcMinutes = utcMinute.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/hour.js



const timeHour = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getHours();
});

const timeHours = timeHour.range;

const utcHour = timeInterval((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getUTCHours();
});

const utcHours = utcHour.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/day.js



const timeDay = timeInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

const timeDays = timeDay.range;

const utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});

const utcDays = utcDay.range;

const unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});

const unixDays = unixDay.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/week.js



function timeWeekday(i) {
  return timeInterval((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);

const timeSundays = timeSunday.range;
const timeMondays = timeMonday.range;
const timeTuesdays = timeTuesday.range;
const timeWednesdays = timeWednesday.range;
const timeThursdays = timeThursday.range;
const timeFridays = timeFriday.range;
const timeSaturdays = timeSaturday.range;

function utcWeekday(i) {
  return timeInterval((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}

const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);

const utcSundays = utcSunday.range;
const utcMondays = utcMonday.range;
const utcTuesdays = utcTuesday.range;
const utcWednesdays = utcWednesday.range;
const utcThursdays = utcThursday.range;
const utcFridays = utcFriday.range;
const utcSaturdays = utcSaturday.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/month.js


const timeMonth = timeInterval((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});

const timeMonths = timeMonth.range;

const utcMonth = timeInterval((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});

const utcMonths = utcMonth.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/year.js


const timeYear = timeInterval((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

const timeYears = timeYear.range;

const utcYear = timeInterval((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

const utcYears = utcYear.range;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/ticks.js











function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

const [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/locale.js


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/defaultLocale.js


var src_defaultLocale_locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale_defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale_defaultLocale(definition) {
  src_defaultLocale_locale = formatLocale(definition);
  timeFormat = src_defaultLocale_locale.format;
  timeParse = src_defaultLocale_locale.parse;
  utcFormat = src_defaultLocale_locale.utcFormat;
  utcParse = src_defaultLocale_locale.utcParse;
  return src_defaultLocale_locale;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/time.js






function time_date(t) {
  return new Date(t);
}

function time_number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, time_number)) : domain().map(time_date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return init/* initRange */.o.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/utcTime.js





function utcTime() {
  return init/* initRange */.o.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequential.js








function sequential_transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity,
      clamp = false,
      unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(value);

  scale.rangeRound = range(round);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function sequential_copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = linearish(sequential_transformer()(identity));

  scale.copy = function() {
    return sequential_copy(scale, sequential());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function sequentialLog() {
  var scale = loggish(sequential_transformer()).domain([1, 10]);

  scale.copy = function() {
    return sequential_copy(scale, sequentialLog()).base(scale.base());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = symlogish(sequential_transformer());

  scale.copy = function() {
    return sequential_copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function sequentialPow() {
  var scale = powish(sequential_transformer());

  scale.copy = function() {
    return sequential_copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequentialQuantile.js




function sequentialQuantile() {
  var domain = [],
      interpolator = identity;

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator((bisect(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => quantile(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/piecewise.js


function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = value;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/diverging.js









function diverging_transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = identity,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(value);

  scale.rangeRound = range(round);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = linearish(diverging_transformer()(identity));

  scale.copy = function() {
    return sequential_copy(scale, diverging());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function divergingLog() {
  var scale = loggish(diverging_transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return sequential_copy(scale, divergingLog()).base(scale.base());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = symlogish(diverging_transformer());

  scale.copy = function() {
    return sequential_copy(scale, divergingSymlog()).constant(scale.constant());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function divergingPow() {
  var scale = powish(diverging_transformer());

  scale.copy = function() {
    return sequential_copy(scale, divergingPow()).exponent(scale.exponent());
  };

  return init/* initInterpolator */.O.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js


































;// CONCATENATED MODULE: ../../node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-scale.js

// `victory-vendor/d3-scale` (ESM)
// See upstream license: https://github.com/d3/d3-scale/blob/main/LICENSE
//
// Our ESM package uses the underlying installed dependencies of `node_modules/d3-scale`


;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/none.js
/* harmony default export */ function none(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/expand.js


/* harmony default export */ function expand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none(series, order);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/silhouette.js


/* harmony default export */ function silhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  none(series, order);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/wiggle.js


/* harmony default export */ function wiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  none(series, order);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/array.js
var src_array = __webpack_require__(24415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/constant.js
var d3_shape_src_constant = __webpack_require__(41474);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/order/none.js
/* harmony default export */ function order_none(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/stack.js





function stackValue(d, key) {
  return d[key];
}

function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}

/* harmony default export */ function src_stack() {
  var keys = (0,d3_shape_src_constant/* default */.Z)([]),
      order = order_none,
      offset = none,
      value = stackValue;

  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries),
        i, n = sz.length, j = -1,
        oz;

    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }

    for (i = 0, oz = (0,src_array/* default */.Z)(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : (0,d3_shape_src_constant/* default */.Z)(Array.from(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0,d3_shape_src_constant/* default */.Z)(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? order_none : typeof _ === "function" ? _ : (0,d3_shape_src_constant/* default */.Z)(Array.from(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
  };

  return stack;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/max.js
var lodash_max = __webpack_require__(9299);
var max_default = /*#__PURE__*/__webpack_require__.n(lodash_max);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/min.js
var lodash_min = __webpack_require__(91948);
var min_default = /*#__PURE__*/__webpack_require__.n(lodash_min);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js
var isNil = __webpack_require__(24934);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(40837);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js
var isString = __webpack_require__(34674);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var get = __webpack_require__(57074);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(47694);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(52490);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(78349);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(4071);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(50847);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/decimal.js-light@2.5.1/node_modules/decimal.js-light/decimal.mjs
/*
 *  decimal.js-light v2.5.1
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js-light
 *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Expat Licence
 */


// ------------------------------------  EDITABLE DEFAULTS  ------------------------------------- //


// The limit on the value of `precision`, and on the value of the first argument to
// `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
var MAX_DIGITS = 1e9,                        // 0 to 1e9


  // The initial configuration properties of the Decimal constructor.
  defaults = {

    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed during run-time using `Decimal.config`.

    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,                         // 1 to MAX_DIGITS

    // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
    // `toFixed`, `toPrecision` and `toSignificantDigits`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,                           // 0 to 8

    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,                          // 0 to -MAX_E

    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos:  21,                         // 0 to MAX_E

    // The natural logarithm of 10.
    // 115 digits
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
  },


// ------------------------------------ END OF EDITABLE DEFAULTS -------------------------------- //


  Decimal,
  external = true,

  decimalError = '[DecimalError] ',
  invalidArgument = decimalError + 'Invalid argument: ',
  exponentOutOfRange = decimalError + 'Exponent out of range: ',

  mathfloor = Math.floor,
  mathpow = Math.pow,

  isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

  ONE,
  BASE = 1e7,
  LOG_BASE = 7,
  MAX_SAFE_INTEGER = 9007199254740991,
  MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE),    // 1286742750677284

  // Decimal.prototype object
  P = {};


// Decimal prototype methods


/*
 *  absoluteValue                       abs
 *  comparedTo                          cmp
 *  decimalPlaces                       dp
 *  dividedBy                           div
 *  dividedToIntegerBy                  idiv
 *  equals                              eq
 *  exponent
 *  greaterThan                         gt
 *  greaterThanOrEqualTo                gte
 *  isInteger                           isint
 *  isNegative                          isneg
 *  isPositive                          ispos
 *  isZero
 *  lessThan                            lt
 *  lessThanOrEqualTo                   lte
 *  logarithm                           log
 *  minus                               sub
 *  modulo                              mod
 *  naturalExponential                  exp
 *  naturalLogarithm                    ln
 *  negated                             neg
 *  plus                                add
 *  precision                           sd
 *  squareRoot                          sqrt
 *  times                               mul
 *  toDecimalPlaces                     todp
 *  toExponential
 *  toFixed
 *  toInteger                           toint
 *  toNumber
 *  toPower                             pow
 *  toPrecision
 *  toSignificantDigits                 tosd
 *  toString
 *  valueOf                             val
 */


/*
 * Return a new Decimal whose value is the absolute value of this Decimal.
 *
 */
P.absoluteValue = P.abs = function () {
  var x = new this.constructor(this);
  if (x.s) x.s = 1;
  return x;
};


/*
 * Return
 *   1    if the value of this Decimal is greater than the value of `y`,
 *  -1    if the value of this Decimal is less than the value of `y`,
 *   0    if they have the same value
 *
 */
P.comparedTo = P.cmp = function (y) {
  var i, j, xdL, ydL,
    x = this;

  y = new x.constructor(y);

  // Signs differ?
  if (x.s !== y.s) return x.s || -y.s;

  // Compare exponents.
  if (x.e !== y.e) return x.e > y.e ^ x.s < 0 ? 1 : -1;

  xdL = x.d.length;
  ydL = y.d.length;

  // Compare digit by digit.
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (x.d[i] !== y.d[i]) return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
  }

  // Compare lengths.
  return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
};


/*
 * Return the number of decimal places of the value of this Decimal.
 *
 */
P.decimalPlaces = P.dp = function () {
  var x = this,
    w = x.d.length - 1,
    dp = (w - x.e) * LOG_BASE;

  // Subtract the number of trailing zeros of the last word.
  w = x.d[w];
  if (w) for (; w % 10 == 0; w /= 10) dp--;

  return dp < 0 ? 0 : dp;
};


/*
 * Return a new Decimal whose value is the value of this Decimal divided by `y`, truncated to
 * `precision` significant digits.
 *
 */
P.dividedBy = P.div = function (y) {
  return divide(this, new this.constructor(y));
};


/*
 * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
 * by the value of `y`, truncated to `precision` significant digits.
 *
 */
P.dividedToIntegerBy = P.idiv = function (y) {
  var x = this,
    Ctor = x.constructor;
  return decimal_round(divide(x, new Ctor(y), 0, 1), Ctor.precision);
};


/*
 * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
 *
 */
P.equals = P.eq = function (y) {
  return !this.cmp(y);
};


/*
 * Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).
 *
 */
P.exponent = function () {
  return getBase10Exponent(this);
};


/*
 * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
 * false.
 *
 */
P.greaterThan = P.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Decimal is greater than or equal to the value of `y`,
 * otherwise return false.
 *
 */
P.greaterThanOrEqualTo = P.gte = function (y) {
  return this.cmp(y) >= 0;
};


/*
 * Return true if the value of this Decimal is an integer, otherwise return false.
 *
 */
P.isInteger = P.isint = function () {
  return this.e > this.d.length - 2;
};


/*
 * Return true if the value of this Decimal is negative, otherwise return false.
 *
 */
P.isNegative = P.isneg = function () {
  return this.s < 0;
};


/*
 * Return true if the value of this Decimal is positive, otherwise return false.
 *
 */
P.isPositive = P.ispos = function () {
  return this.s > 0;
};


/*
 * Return true if the value of this Decimal is 0, otherwise return false.
 *
 */
P.isZero = function () {
  return this.s === 0;
};


/*
 * Return true if the value of this Decimal is less than `y`, otherwise return false.
 *
 */
P.lessThan = P.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
 *
 */
P.lessThanOrEqualTo = P.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return the logarithm of the value of this Decimal to the specified base, truncated to
 * `precision` significant digits.
 *
 * If no base is specified, return log[10](x).
 *
 * log[base](x) = ln(x) / ln(base)
 *
 * The maximum error of the result is 1 ulp (unit in the last place).
 *
 * [base] {number|string|Decimal} The base of the logarithm.
 *
 */
P.logarithm = P.log = function (base) {
  var r,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision,
    wpr = pr + 5;

  // Default base is 10.
  if (base === void 0) {
    base = new Ctor(10);
  } else {
    base = new Ctor(base);

    // log[-b](x) = NaN
    // log[0](x)  = NaN
    // log[1](x)  = NaN
    if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + 'NaN');
  }

  // log[b](-x) = NaN
  // log[b](0) = -Infinity
  if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

  // log[b](1) = 0
  if (x.eq(ONE)) return new Ctor(0);

  external = false;
  r = divide(ln(x, wpr), ln(base, wpr), wpr);
  external = true;

  return decimal_round(r, pr);
};


/*
 * Return a new Decimal whose value is the value of this Decimal minus `y`, truncated to
 * `precision` significant digits.
 *
 */
P.minus = P.sub = function (y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
};


/*
 * Return a new Decimal whose value is the value of this Decimal modulo `y`, truncated to
 * `precision` significant digits.
 *
 */
P.modulo = P.mod = function (y) {
  var q,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision;

  y = new Ctor(y);

  // x % 0 = NaN
  if (!y.s) throw Error(decimalError + 'NaN');

  // Return x if x is 0.
  if (!x.s) return decimal_round(new Ctor(x), pr);

  // Prevent rounding of intermediate calculations.
  external = false;
  q = divide(x, y, 0, 1).times(y);
  external = true;

  return x.minus(q);
};


/*
 * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
 * i.e. the base e raised to the power the value of this Decimal, truncated to `precision`
 * significant digits.
 *
 */
P.naturalExponential = P.exp = function () {
  return exp(this);
};


/*
 * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
 * truncated to `precision` significant digits.
 *
 */
P.naturalLogarithm = P.ln = function () {
  return ln(this);
};


/*
 * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
 * -1.
 *
 */
P.negated = P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s || 0;
  return x;
};


/*
 * Return a new Decimal whose value is the value of this Decimal plus `y`, truncated to
 * `precision` significant digits.
 *
 */
P.plus = P.add = function (y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
};


/*
 * Return the number of significant digits of the value of this Decimal.
 *
 * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
 *
 */
P.precision = P.sd = function (z) {
  var e, sd, w,
    x = this;

  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

  e = getBase10Exponent(x) + 1;
  w = x.d.length - 1;
  sd = w * LOG_BASE + 1;
  w = x.d[w];

  // If non-zero...
  if (w) {

    // Subtract the number of trailing zeros of the last word.
    for (; w % 10 == 0; w /= 10) sd--;

    // Add the number of digits of the first word.
    for (w = x.d[0]; w >= 10; w /= 10) sd++;
  }

  return z && e > sd ? e : sd;
};


/*
 * Return a new Decimal whose value is the square root of this Decimal, truncated to `precision`
 * significant digits.
 *
 */
P.squareRoot = P.sqrt = function () {
  var e, n, pr, r, s, t, wpr,
    x = this,
    Ctor = x.constructor;

  // Negative or zero?
  if (x.s < 1) {
    if (!x.s) return new Ctor(0);

    // sqrt(-x) = NaN
    throw Error(decimalError + 'NaN');
  }

  e = getBase10Exponent(x);
  external = false;

  // Initial estimate.
  s = Math.sqrt(+x);

  // Math.sqrt underflow/overflow?
  // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(x.d);
    if ((n.length + e) % 2 == 0) n += '0';
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

    if (s == 1 / 0) {
      n = '5e' + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf('e') + 1) + e;
    }

    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }

  pr = Ctor.precision;
  s = wpr = pr + 3;

  // Newton-Raphson iteration.
  for (;;) {
    t = r;
    r = t.plus(divide(x, t, wpr + 2)).times(0.5);

    if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
      n = n.slice(wpr - 3, wpr + 1);

      // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
      // 4999, i.e. approaching a rounding boundary, continue the iteration.
      if (s == wpr && n == '4999') {

        // On the first iteration only, check to see if rounding up gives the exact result as the
        // nines may infinitely repeat.
        decimal_round(t, pr + 1, 0);

        if (t.times(t).eq(x)) {
          r = t;
          break;
        }
      } else if (n != '9999') {
        break;
      }

      wpr += 4;
    }
  }

  external = true;

  return decimal_round(r, pr);
};


/*
 * Return a new Decimal whose value is the value of this Decimal times `y`, truncated to
 * `precision` significant digits.
 *
 */
P.times = P.mul = function (y) {
  var carry, e, i, k, r, rL, t, xdL, ydL,
    x = this,
    Ctor = x.constructor,
    xd = x.d,
    yd = (y = new Ctor(y)).d;

  // Return 0 if either is 0.
  if (!x.s || !y.s) return new Ctor(0);

  y.s *= x.s;
  e = x.e + y.e;
  xdL = xd.length;
  ydL = yd.length;

  // Ensure xd points to the longer array.
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }

  // Initialise the result array with zeros.
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--;) r.push(0);

  // Multiply!
  for (i = ydL; --i >= 0;) {
    carry = 0;
    for (k = xdL + i; k > i;) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }

    r[k] = (r[k] + carry) % BASE | 0;
  }

  // Remove trailing zeros.
  for (; !r[--rL];) r.pop();

  if (carry) ++e;
  else r.shift();

  y.d = r;
  y.e = e;

  return external ? decimal_round(y, Ctor.precision) : y;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
 * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
 *
 * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toDecimalPlaces = P.todp = function (dp, rm) {
  var x = this,
    Ctor = x.constructor;

  x = new Ctor(x);
  if (dp === void 0) return x;

  checkInt32(dp, 0, MAX_DIGITS);

  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);

  return decimal_round(x, dp + getBase10Exponent(x) + 1, rm);
};


/*
 * Return a string representing the value of this Decimal in exponential notation rounded to
 * `dp` fixed decimal places using rounding mode `rounding`.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toExponential = function (dp, rm) {
  var str,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) {
    str = decimal_toString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = decimal_round(new Ctor(x), dp + 1, rm);
    str = decimal_toString(x, true, dp + 1);
  }

  return str;
};


/*
 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
 * omitted.
 *
 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 * (-0).toFixed(3) is '0.000'.
 * (-0.5).toFixed(0) is '-0'.
 *
 */
P.toFixed = function (dp, rm) {
  var str, y,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) return decimal_toString(x);

  checkInt32(dp, 0, MAX_DIGITS);

  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);

  y = decimal_round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
  str = decimal_toString(y.abs(), false, dp + getBase10Exponent(y) + 1);

  // To determine whether to add the minus sign look at the value before it was rounded,
  // i.e. look at `x` rather than `y`.
  return x.isneg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
 * rounding mode `rounding`.
 *
 */
P.toInteger = P.toint = function () {
  var x = this,
    Ctor = x.constructor;
  return decimal_round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
};


/*
 * Return the value of this Decimal converted to a number primitive.
 *
 */
P.toNumber = function () {
  return +this;
};


/*
 * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
 * truncated to `precision` significant digits.
 *
 * For non-integer or very large exponents pow(x, y) is calculated using
 *
 *   x^y = exp(y*ln(x))
 *
 * The maximum error is 1 ulp (unit in last place).
 *
 * y {number|string|Decimal} The power to which to raise this Decimal.
 *
 */
P.toPower = P.pow = function (y) {
  var e, k, pr, r, sign, yIsInt,
    x = this,
    Ctor = x.constructor,
    guard = 12,
    yn = +(y = new Ctor(y));

  // pow(x, 0) = 1
  if (!y.s) return new Ctor(ONE);

  x = new Ctor(x);

  // pow(0, y > 0) = 0
  // pow(0, y < 0) = Infinity
  if (!x.s) {
    if (y.s < 1) throw Error(decimalError + 'Infinity');
    return x;
  }

  // pow(1, y) = 1
  if (x.eq(ONE)) return x;

  pr = Ctor.precision;

  // pow(x, 1) = x
  if (y.eq(ONE)) return decimal_round(x, pr);

  e = y.e;
  k = y.d.length - 1;
  yIsInt = e >= k;
  sign = x.s;

  if (!yIsInt) {

    // pow(x < 0, y non-integer) = NaN
    if (sign < 0) throw Error(decimalError + 'NaN');

  // If y is a small integer use the 'exponentiation by squaring' algorithm.
  } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = new Ctor(ONE);

    // Max k of 9007199254740991 takes 53 loop iterations.
    // Maximum digits array length; leaves [28, 34] guard digits.
    e = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (k % 2) {
        r = r.times(x);
        truncate(r.d, e);
      }

      k = mathfloor(k / 2);
      if (k === 0) break;

      x = x.times(x);
      truncate(x.d, e);
    }

    external = true;

    return y.s < 0 ? new Ctor(ONE).div(r) : decimal_round(r, pr);
  }

  // Result is negative if x is negative and the last digit of integer y is odd.
  sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;

  x.s = 1;
  external = false;
  r = y.times(ln(x, pr + guard));
  external = true;
  r = exp(r);
  r.s = sign;

  return r;
};


/*
 * Return a string representing the value of this Decimal rounded to `sd` significant digits
 * using rounding mode `rounding`.
 *
 * Return exponential notation if `sd` is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toPrecision = function (sd, rm) {
  var e, str,
    x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    e = getBase10Exponent(x);
    str = decimal_toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = decimal_round(new Ctor(x), sd, rm);
    e = getBase10Exponent(x);
    str = decimal_toString(x, sd <= e || e <= Ctor.toExpNeg, sd);
  }

  return str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
 * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
 * omitted.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toSignificantDigits = P.tosd = function (sd, rm) {
  var x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }

  return decimal_round(new Ctor(x), sd, rm);
};


/*
 * Return a string representing the value of this Decimal.
 *
 * Return exponential notation if this Decimal has a positive exponent equal to or greater than
 * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
 *
 */
P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for('nodejs.util.inspect.custom')] = function () {
  var x = this,
    e = getBase10Exponent(x),
    Ctor = x.constructor;

  return decimal_toString(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
};


// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


/*
 *  add                 P.minus, P.plus
 *  checkInt32          P.todp, P.toExponential, P.toFixed, P.toPrecision, P.tosd
 *  digitsToString      P.log, P.sqrt, P.pow, toString, exp, ln
 *  divide              P.div, P.idiv, P.log, P.mod, P.sqrt, exp, ln
 *  exp                 P.exp, P.pow
 *  getBase10Exponent   P.exponent, P.sd, P.toint, P.sqrt, P.todp, P.toFixed, P.toPrecision,
 *                      P.toString, divide, round, toString, exp, ln
 *  getLn10             P.log, ln
 *  getZeroString       digitsToString, toString
 *  ln                  P.log, P.ln, P.pow, exp
 *  parseDecimal        Decimal
 *  round               P.abs, P.idiv, P.log, P.minus, P.mod, P.neg, P.plus, P.toint, P.sqrt,
 *                      P.times, P.todp, P.toExponential, P.toFixed, P.pow, P.toPrecision, P.tosd,
 *                      divide, getLn10, exp, ln
 *  subtract            P.minus, P.plus
 *  toString            P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf
 *  truncate            P.pow
 *
 *  Throws:             P.log, P.mod, P.sd, P.sqrt, P.pow,  checkInt32, divide, round,
 *                      getLn10, exp, ln, parseDecimal, Decimal, config
 */


function add(x, y) {
  var carry, d, e, i, k, len, xd, yd,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // If either is zero...
  if (!x.s || !y.s) {

    // Return x if y is zero.
    // Return y if y is non-zero.
    if (!y.s) y = new Ctor(x);
    return external ? decimal_round(y, pr) : y;
  }

  xd = x.d;
  yd = y.d;

  // x and y are finite, non-zero numbers with the same sign.

  k = x.e;
  e = y.e;
  xd = xd.slice();
  i = k - e;

  // If base 1e7 exponents differ...
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }

    // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;

    if (i > len) {
      i = len;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
    d.reverse();
    for (; i--;) d.push(0);
    d.reverse();
  }

  len = xd.length;
  i = yd.length;

  // If yd is longer than xd, swap xd and yd so xd points to the longer array.
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }

  // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
  for (carry = 0; i;) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }

  if (carry) {
    xd.unshift(carry);
    ++e;
  }

  // Remove trailing zeros.
  // No need to check for zero, as +x + +y != 0 && -x + -y != 0
  for (len = xd.length; xd[--len] == 0;) xd.pop();

  y.d = xd;
  y.e = e;

  return external ? decimal_round(y, pr) : y;
}


function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}


function digitsToString(d) {
  var i, k, ws,
    indexOfLastWord = d.length - 1,
    str = '',
    w = d[0];

  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }

    w = d[i];
    ws = w + '';
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return '0';
  }

  // Remove trailing zeros of last w.
  for (; w % 10 === 0;) w /= 10;

  return str + w;
}


var divide = (function () {

  // Assumes non-zero x and k, and hence non-zero result.
  function multiplyInteger(x, k) {
    var temp,
      carry = 0,
      i = x.length;

    for (x = x.slice(); i--;) {
      temp = x[i] * k + carry;
      x[i] = temp % BASE | 0;
      carry = temp / BASE | 0;
    }

    if (carry) x.unshift(carry);

    return x;
  }

  function compare(a, b, aL, bL) {
    var i, r;

    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }

    return r;
  }

  function subtract(a, b, aL) {
    var i = 0;

    // Subtract b from a.
    for (; aL--;) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * BASE + a[aL] - b[aL];
    }

    // Remove leading zeros.
    for (; !a[0] && a.length > 1;) a.shift();
  }

  return function (x, y, pr, dp) {
    var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz,
      Ctor = x.constructor,
      sign = x.s == y.s ? 1 : -1,
      xd = x.d,
      yd = y.d;

    // Either 0?
    if (!x.s) return new Ctor(x);
    if (!y.s) throw Error(decimalError + 'Division by zero');

    e = x.e - y.e;
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];

    // Result exponent may be one less than e.
    for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
    if (yd[i] > (xd[i] || 0)) --e;

    if (pr == null) {
      sd = pr = Ctor.precision;
    } else if (dp) {
      sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
    } else {
      sd = pr;
    }

    if (sd < 0) return new Ctor(0);

    // Convert precision in number of base 10 digits to base 1e7 digits.
    sd = sd / LOG_BASE + 2 | 0;
    i = 0;

    // divisor < 1e7
    if (yL == 1) {
      k = 0;
      yd = yd[0];
      sd++;

      // k is the carry.
      for (; (i < xL || k) && sd--; i++) {
        t = k * BASE + (xd[i] || 0);
        qd[i] = t / yd | 0;
        k = t % yd | 0;
      }

    // divisor >= 1e7
    } else {

      // Normalise xd and yd so highest order digit of yd is >= BASE/2
      k = BASE / (yd[0] + 1) | 0;

      if (k > 1) {
        yd = multiplyInteger(yd, k);
        xd = multiplyInteger(xd, k);
        yL = yd.length;
        xL = xd.length;
      }

      xi = yL;
      rem = xd.slice(0, yL);
      remL = rem.length;

      // Add zeros to make remainder as long as divisor.
      for (; remL < yL;) rem[remL++] = 0;

      yz = yd.slice();
      yz.unshift(0);
      yd0 = yd[0];

      if (yd[1] >= BASE / 2) ++yd0;

      do {
        k = 0;

        // Compare divisor and remainder.
        cmp = compare(yd, rem, yL, remL);

        // If divisor < remainder.
        if (cmp < 0) {

          // Calculate trial digit, k.
          rem0 = rem[0];
          if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);

          // k will be how many times the divisor goes into the current remainder.
          k = rem0 / yd0 | 0;

          //  Algorithm:
          //  1. product = divisor * trial digit (k)
          //  2. if product > remainder: product -= divisor, k--
          //  3. remainder -= product
          //  4. if product was < remainder at 2:
          //    5. compare new remainder and divisor
          //    6. If remainder > divisor: remainder -= divisor, k++

          if (k > 1) {
            if (k >= BASE) k = BASE - 1;

            // product = divisor * trial digit.
            prod = multiplyInteger(yd, k);
            prodL = prod.length;
            remL = rem.length;

            // Compare product and remainder.
            cmp = compare(prod, rem, prodL, remL);

            // product > remainder.
            if (cmp == 1) {
              k--;

              // Subtract divisor from product.
              subtract(prod, yL < prodL ? yz : yd, prodL);
            }
          } else {

            // cmp is -1.
            // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
            // to avoid it. If k is 1 there is a need to compare yd and rem again below.
            if (k == 0) cmp = k = 1;
            prod = yd.slice();
          }

          prodL = prod.length;
          if (prodL < remL) prod.unshift(0);

          // Subtract product from remainder.
          subtract(rem, prod, remL);

          // If product was < previous remainder.
          if (cmp == -1) {
            remL = rem.length;

            // Compare divisor and new remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < new remainder, subtract divisor from remainder.
            if (cmp < 1) {
              k++;

              // Subtract divisor from remainder.
              subtract(rem, yL < remL ? yz : yd, remL);
            }
          }

          remL = rem.length;
        } else if (cmp === 0) {
          k++;
          rem = [0];
        }    // if cmp === 1, k will be 0

        // Add the next digit, k, to the result array.
        qd[i++] = k;

        // Update the remainder.
        if (cmp && rem[0]) {
          rem[remL++] = xd[xi] || 0;
        } else {
          rem = [xd[xi]];
          remL = 1;
        }

      } while ((xi++ < xL || rem[0] !== void 0) && sd--);
    }

    // Leading zero?
    if (!qd[0]) qd.shift();

    q.e = e;

    return decimal_round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
  };
})();


/*
 * Return a new Decimal whose value is the natural exponential of `x` truncated to `sd`
 * significant digits.
 *
 * Taylor/Maclaurin series.
 *
 * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
 *
 * Argument reduction:
 *   Repeat x = x / 32, k += 5, until |x| < 0.1
 *   exp(x) = exp(x / 2^k)^(2^k)
 *
 * Previously, the argument was initially reduced by
 * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
 * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
 * found to be slower than just dividing repeatedly by 32 as above.
 *
 * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
 *
 *  exp(x) is non-terminating for any finite, non-zero x.
 *
 */
function exp(x, sd) {
  var denominator, guard, pow, sum, t, wpr,
    i = 0,
    k = 0,
    Ctor = x.constructor,
    pr = Ctor.precision;

  if (getBase10Exponent(x) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x));

  // exp(0) = 1
  if (!x.s) return new Ctor(ONE);

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  t = new Ctor(0.03125);

  while (x.abs().gte(0.1)) {
    x = x.times(t);    // x = x / 2^5
    k += 5;
  }

  // Estimate the precision increase necessary to ensure the first 4 rounding digits are correct.
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(ONE);
  Ctor.precision = wpr;

  for (;;) {
    pow = decimal_round(pow.times(x), wpr);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow, denominator, wpr));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      while (k--) sum = decimal_round(sum.times(sum), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, decimal_round(sum, pr)) : sum;
    }

    sum = t;
  }
}


// Calculate the base 10 exponent from the base 1e7 exponent.
function getBase10Exponent(x) {
  var e = x.e * LOG_BASE,
    w = x.d[0];

  // Add the number of digits of the first word of the digits array.
  for (; w >= 10; w /= 10) e++;
  return e;
}


function getLn10(Ctor, sd, pr) {

  if (sd > Ctor.LN10.sd()) {


    // Reset global state in case the exception is caught.
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(decimalError + 'LN10 precision limit exceeded');
  }

  return decimal_round(new Ctor(Ctor.LN10), sd);
}


function getZeroString(k) {
  var zs = '';
  for (; k--;) zs += '0';
  return zs;
}


/*
 * Return a new Decimal whose value is the natural logarithm of `x` truncated to `sd` significant
 * digits.
 *
 *  ln(n) is non-terminating (n != 1)
 *
 */
function ln(y, sd) {
  var c, c0, denominator, e, numerator, sum, t, wpr, x2,
    n = 1,
    guard = 10,
    x = y,
    xd = x.d,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // ln(-x) = NaN
  // ln(0) = -Infinity
  if (x.s < 1) throw Error(decimalError + (x.s ? 'NaN' : '-Infinity'));

  // ln(1) = 0
  if (x.eq(ONE)) return new Ctor(0);

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  if (x.eq(10)) {
    if (sd == null) external = true;
    return getLn10(Ctor, wpr);
  }

  wpr += guard;
  Ctor.precision = wpr;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  e = getBase10Exponent(x);

  if (Math.abs(e) < 1.5e15) {

    // Argument reduction.
    // The series converges faster the closer the argument is to 1, so using
    // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
    // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
    // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
    // later be divided by this number, then separate out the power of 10 using
    // ln(a*10^b) = ln(a) + b*ln(10).

    // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
    //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
    // max n is 6 (gives 0.7 - 1.3)
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }

    e = getBase10Exponent(x);

    if (c0 > 1) {
      x = new Ctor('0.' + c);
      e++;
    } else {
      x = new Ctor(c0 + '.' + c.slice(1));
    }
  } else {

    // The argument reduction method above may result in overflow if the argument y is a massive
    // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
    // function using ln(x*10^e) = ln(x) + e*ln(10).
    t = getLn10(Ctor, wpr + 2, pr).times(e + '');
    x = ln(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);

    Ctor.precision = pr;
    return sd == null ? (external = true, decimal_round(x, pr)) : x;
  }

  // x is reduced to a value near 1.

  // Taylor series.
  // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
  // where x = (y - 1)/(y + 1)    (|x| < 1)
  sum = numerator = x = divide(x.minus(ONE), x.plus(ONE), wpr);
  x2 = decimal_round(x.times(x), wpr);
  denominator = 3;

  for (;;) {
    numerator = decimal_round(numerator.times(x2), wpr);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);

      // Reverse the argument reduction.
      if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
      sum = divide(sum, new Ctor(n), wpr);

      Ctor.precision = pr;
      return sd == null ? (external = true, decimal_round(sum, pr)) : sum;
    }

    sum = t;
    denominator += 2;
  }
}


/*
 * Parse the value of a new Decimal `x` from string `str`.
 */
function parseDecimal(x, str) {
  var e, i, len;

  // Decimal point?
  if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

  // Exponential form?
  if ((i = str.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = str.length;
  }

  // Determine leading zeros.
  for (i = 0; str.charCodeAt(i) === 48;) ++i;

  // Determine trailing zeros.
  for (len = str.length; str.charCodeAt(len - 1) === 48;) --len;
  str = str.slice(i, len);

  if (str) {
    len -= i;
    e = e - i - 1;
    x.e = mathfloor(e / LOG_BASE);
    x.d = [];

    // Transform base

    // e is the base 10 exponent.
    // i is where to slice str to get the first word of the digits array.
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;

    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }

    for (; i--;) str += '0';
    x.d.push(+str);

    if (external && (x.e > MAX_E || x.e < -MAX_E)) throw Error(exponentOutOfRange + e);
  } else {

    // Zero.
    x.s = 0;
    x.e = 0;
    x.d = [0];
  }

  return x;
}


/*
 * Round `x` to `sd` significant digits, using rounding mode `rm` if present (truncate otherwise).
 */
 function decimal_round(x, sd, rm) {
  var i, j, k, n, rd, doRound, w, xdi,
    xd = x.d;

  // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
  // w: the word of xd which contains the rounding digit, a base 1e7 number.
  // xdi: the index of w within xd.
  // n: the number of digits of w.
  // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
  // they had leading zeros)
  // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

  // Get the length of the first word of the digits array xd.
  for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
  i = sd - n;

  // Is the rounding digit in the first word of xd?
  if (i < 0) {
    i += LOG_BASE;
    j = sd;
    w = xd[xdi = 0];
  } else {
    xdi = Math.ceil((i + 1) / LOG_BASE);
    k = xd.length;
    if (xdi >= k) return x;
    w = k = xd[xdi];

    // Get the number of digits of w.
    for (n = 1; k >= 10; k /= 10) n++;

    // Get the index of rd within w.
    i %= LOG_BASE;

    // Get the index of rd within w, adjusted for leading zeros.
    // The number of leading zeros of w is given by LOG_BASE - n.
    j = i - LOG_BASE + n;
  }

  if (rm !== void 0) {
    k = mathpow(10, n - j - 1);

    // Get the rounding digit at index j of w.
    rd = w / k % 10 | 0;

    // Are there any non-zero digits after the rounding digit?
    doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;

    // The expression `w % mathpow(10, n - j - 1)` returns all the digits of w to the right of the
    // digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression will give
    // 714.

    doRound = rm < 4
      ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
      : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 &&

        // Check whether the digit to the left of the rounding digit is odd.
        ((i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
          rm == (x.s < 0 ? 8 : 7));
  }

  if (sd < 1 || !xd[0]) {
    if (doRound) {
      k = getBase10Exponent(x);
      xd.length = 1;

      // Convert sd to decimal places.
      sd = sd - k - 1;

      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
      x.e = mathfloor(-sd / LOG_BASE) || 0;
    } else {
      xd.length = 1;

      // Zero.
      xd[0] = x.e = x.s = 0;
    }

    return x;
  }

  // Remove excess digits.
  if (i == 0) {
    xd.length = xdi;
    k = 1;
    xdi--;
  } else {
    xd.length = xdi + 1;
    k = mathpow(10, LOG_BASE - i);

    // E.g. 56700 becomes 56000 if 7 is the rounding digit.
    // j > 0 means i > number of leading zeros of w.
    xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
  }

  if (doRound) {
    for (;;) {

      // Is the digit to be rounded up in the first word of xd?
      if (xdi == 0) {
        if ((xd[0] += k) == BASE) {
          xd[0] = 1;
          ++x.e;
        }

        break;
      } else {
        xd[xdi] += k;
        if (xd[xdi] != BASE) break;
        xd[xdi--] = 0;
        k = 1;
      }
    }
  }

  // Remove trailing zeros.
  for (i = xd.length; xd[--i] === 0;) xd.pop();

  if (external && (x.e > MAX_E || x.e < -MAX_E)) {
    throw Error(exponentOutOfRange + getBase10Exponent(x));
  }

  return x;
}


function subtract(x, y) {
  var d, e, i, j, k, len, xd, xe, xLTy, yd,
    Ctor = x.constructor,
    pr = Ctor.precision;

  // Return y negated if x is zero.
  // Return x if y is zero and x is non-zero.
  if (!x.s || !y.s) {
    if (y.s) y.s = -y.s;
    else y = new Ctor(x);
    return external ? decimal_round(y, pr) : y;
  }

  xd = x.d;
  yd = y.d;

  // x and y are non-zero numbers with the same sign.

  e = y.e;
  xe = x.e;
  xd = xd.slice();
  k = xe - e;

  // If exponents differ...
  if (k) {
    xLTy = k < 0;

    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }

    // Numbers with massively different exponents would result in a very high number of zeros
    // needing to be prepended, but this can be avoided while still ensuring correct rounding by
    // limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

    if (k > i) {
      k = i;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents.
    d.reverse();
    for (i = k; i--;) d.push(0);
    d.reverse();

  // Base 1e7 exponents equal.
  } else {

    // Check digits to determine which is the bigger number.

    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;

    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }

    k = 0;
  }

  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }

  len = xd.length;

  // Append zeros to xd if shorter.
  // Don't add zeros to yd if shorter as subtraction only needs to start at yd length.
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

  // Subtract yd from xd.
  for (i = yd.length; i > k;) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }

    xd[i] -= yd[i];
  }

  // Remove trailing zeros.
  for (; xd[--len] === 0;) xd.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xd[0] === 0; xd.shift()) --e;

  // Zero?
  if (!xd[0]) return new Ctor(0);

  y.d = xd;
  y.e = e;

  //return external && xd.length >= pr / LOG_BASE ? round(y, pr) : y;
  return external ? decimal_round(y, pr) : y;
}


function decimal_toString(x, isExp, sd) {
  var k,
    e = getBase10Exponent(x),
    str = digitsToString(x.d),
    len = str.length;

  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + '.' + str.slice(1);
    }

    str = str + (e < 0 ? 'e' : 'e+') + e;
  } else if (e < 0) {
    str = '0.' + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += '.';
      str += getZeroString(k);
    }
  }

  return x.s < 0 ? '-' + str : str;
}


// Does not strip trailing zeros.
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}


// Decimal methods


/*
 *  clone
 *  config/set
 */


/*
 * Create and return a Decimal constructor with the same configuration properties as this Decimal
 * constructor.
 *
 */
function clone(obj) {
  var i, p, ps;

  /*
   * The Decimal constructor and exported function.
   * Return a new Decimal instance.
   *
   * value {number|string|Decimal} A numeric value.
   *
   */
  function Decimal(value) {
    var x = this;

    // Decimal called without new.
    if (!(x instanceof Decimal)) return new Decimal(value);

    // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
    // which points to Object.
    x.constructor = Decimal;

    // Duplicate.
    if (value instanceof Decimal) {
      x.s = value.s;
      x.e = value.e;
      x.d = (value = value.d) ? value.slice() : value;
      return;
    }

    if (typeof value === 'number') {

      // Reject Infinity/NaN.
      if (value * 0 !== 0) {
        throw Error(invalidArgument + value);
      }

      if (value > 0) {
        x.s = 1;
      } else if (value < 0) {
        value = -value;
        x.s = -1;
      } else {
        x.s = 0;
        x.e = 0;
        x.d = [0];
        return;
      }

      // Fast path for small integers.
      if (value === ~~value && value < 1e7) {
        x.e = 0;
        x.d = [value];
        return;
      }

      return parseDecimal(x, value.toString());
    } else if (typeof value !== 'string') {
      throw Error(invalidArgument + value);
    }

    // Minus sign?
    if (value.charCodeAt(0) === 45) {
      value = value.slice(1);
      x.s = -1;
    } else {
      x.s = 1;
    }

    if (isDecimal.test(value)) parseDecimal(x, value);
    else throw Error(invalidArgument + value);
  }

  Decimal.prototype = P;

  Decimal.ROUND_UP = 0;
  Decimal.ROUND_DOWN = 1;
  Decimal.ROUND_CEIL = 2;
  Decimal.ROUND_FLOOR = 3;
  Decimal.ROUND_HALF_UP = 4;
  Decimal.ROUND_HALF_DOWN = 5;
  Decimal.ROUND_HALF_EVEN = 6;
  Decimal.ROUND_HALF_CEIL = 7;
  Decimal.ROUND_HALF_FLOOR = 8;

  Decimal.clone = clone;
  Decimal.config = Decimal.set = config;

  if (obj === void 0) obj = {};
  if (obj) {
    ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
    for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
  }

  Decimal.config(obj);

  return Decimal;
}


/*
 * Configure global settings for a Decimal constructor.
 *
 * `obj` is an object with one or more of the following properties,
 *
 *   precision  {number}
 *   rounding   {number}
 *   toExpNeg   {number}
 *   toExpPos   {number}
 *
 * E.g. Decimal.config({ precision: 20, rounding: 4 })
 *
 */
function config(obj) {
  if (!obj || typeof obj !== 'object') {
    throw Error(decimalError + 'Object expected');
  }
  var i, p, v,
    ps = [
      'precision', 1, MAX_DIGITS,
      'rounding', 0, 8,
      'toExpNeg', -1 / 0, 0,
      'toExpPos', 0, 1 / 0
    ];

  for (i = 0; i < ps.length; i += 3) {
    if ((v = obj[p = ps[i]]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ': ' + v);
    }
  }

  if ((v = obj[p = 'LN10']) !== void 0) {
      if (v == Math.LN10) this[p] = new this(v);
      else throw Error(invalidArgument + p + ': ' + v);
  }

  return this;
}


// Create and configure initial Decimal constructor.
var Decimal = clone(defaults);

// Internal constant.
ONE = new Decimal(1);

/* harmony default export */ const decimal = (Decimal);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/util/utils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var utils_identity = function identity(i) {
  return i;
};

var PLACE_HOLDER = {
  '@@functional/placeholder': true
};

var isPlaceHolder = function isPlaceHolder(val) {
  return val === PLACE_HOLDER;
};

var curry0 = function curry0(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? undefined : arguments[0])) {
      return _curried;
    }

    return fn.apply(void 0, arguments);
  };
};

var curryN = function curryN(n, fn) {
  if (n === 1) {
    return fn;
  }

  return curry0(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.filter(function (arg) {
      return arg !== PLACE_HOLDER;
    }).length;

    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }

    return curryN(n - argsLength, curry0(function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      var newArgs = args.map(function (arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray(newArgs).concat(restArgs));
    }));
  });
};

var curry = function curry(fn) {
  return curryN(fn.length, fn);
};
var range = function range(begin, end) {
  var arr = [];

  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }

  return arr;
};
var utils_map = curry(function (fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }

  return Object.keys(arr).map(function (key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return utils_identity;
  }

  var fns = args.reverse(); // first function can receive multiply arguments

  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function () {
    return tailsFn.reduce(function (res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  } // can be string


  return arr.split('').reverse.join('');
};
var memoize = function memoize(fn) {
  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (lastArgs && args.every(function (val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/util/arithmetic.js
/**
 * @fileOverview 一些公用的运算方法
 * @author xile611
 * @date 2015-09-17
 */


/**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */

function getDigitCount(value) {
  var result;

  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new decimal(value).abs().log(10).toNumber()) + 1;
  }

  return result;
}
/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Decimal} start 起点
 * @param  {Decimal} end   终点，不包含该值
 * @param  {Decimal} step  步长
 * @return {Array}         若干数值
 */


function rangeStep(start, end, step) {
  var num = new decimal(start);
  var i = 0;
  var result = []; // magic number to prevent infinite loop

  while (num.lt(end) && i < 100000) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }

  return result;
}
/**
 * 对数值进行线性插值
 *
 * @param  {Number} a  定义域的极点
 * @param  {Number} b  定义域的极点
 * @param  {Number} t  [0, 1]内的某个值
 * @return {Number}    定义域内的某个值
 */


var interpolateNumber = curry(function (a, b, t) {
  var newA = +a;
  var newB = +b;
  return newA + t * (newB - newA);
});
/**
 * 线性插值的逆运算
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个范围内时，返回值属于[0, 1]
 */

var uninterpolateNumber = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return (x - a) / diff;
});
/**
 * 线性插值的逆运算，并且有截断的操作
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个区间内时，返回值属于[0, 1]，
 * 当x不在 a ~ b这个区间时，会截断到 a ~ b 这个区间
 */

var uninterpolateTruncation = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x - a) / diff));
});
/* harmony default export */ const arithmetic = ({
  rangeStep: rangeStep,
  getDigitCount: getDigitCount,
  interpolateNumber: interpolateNumber,
  uninterpolateNumber: uninterpolateNumber,
  uninterpolateTruncation: uninterpolateTruncation
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/getNiceTickValues.js
function getNiceTickValues_toConsumableArray(arr) { return getNiceTickValues_arrayWithoutHoles(arr) || getNiceTickValues_iterableToArray(arr) || getNiceTickValues_unsupportedIterableToArray(arr) || getNiceTickValues_nonIterableSpread(); }

function getNiceTickValues_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getNiceTickValues_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function getNiceTickValues_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getNiceTickValues_arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || getNiceTickValues_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function getNiceTickValues_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getNiceTickValues_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getNiceTickValues_arrayLikeToArray(o, minLen); }

function getNiceTickValues_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */



/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */

function getValidInterval(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var validMin = min,
      validMax = max; // exchange

  if (min > max) {
    validMin = max;
    validMax = min;
  }

  return [validMin, validMax];
}
/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */


function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new decimal(0);
  }

  var digitCount = arithmetic.getDigitCount(roughStep.toNumber()); // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step

  var digitCountValue = new decimal(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue); // When an integer and a float multiplied, the accuracy of result may be wrong

  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new decimal(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new decimal(Math.ceil(formatStep));
}
/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */


function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1; // calculate the middle value of ticks

  var middle = new decimal(value);

  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new decimal(10).pow(arithmetic.getDigitCount(value) - 1);
      middle = new decimal(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      // Return the maximum integer which is smaller than 'value' when 'value' is greater than 1
      middle = new decimal(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new decimal(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new decimal(Math.floor(value));
  }

  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(utils_map(function (n) {
    return middle.add(new decimal(n - middleIndex).mul(step)).toNumber();
  }), range);
  return fn(0, tickCount);
}
/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */


function calculateStep(min, max, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  // dirty hack (for recharts' test)
  if (!Number.isFinite((max - min) / (tickCount - 1))) {
    return {
      step: new decimal(0),
      tickMin: new decimal(0),
      tickMax: new decimal(0)
    };
  } // The step which is easy to understand between two ticks


  var step = getFormatStep(new decimal(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor); // A medial value of ticks

  var middle; // When 0 is inside the interval, 0 should be a tick

  if (min <= 0 && max >= 0) {
    middle = new decimal(0);
  } else {
    // calculate the middle value
    middle = new decimal(min).add(max).div(2); // minus modulo value

    middle = middle.sub(new decimal(middle).mod(step));
  }

  var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
  var upCount = Math.ceil(new decimal(max).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  }

  if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step: step,
    tickMin: middle.sub(new decimal(belowCount).mul(step)),
    tickMax: middle.add(new decimal(upCount).mul(step))
  };
}
/**
 * Calculate the ticks of an interval, the count of ticks will be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      min = _ref4[0],
      max = _ref4[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval = getValidInterval([min, max]),
      _getValidInterval2 = _slicedToArray(_getValidInterval, 2),
      cormin = _getValidInterval2[0],
      cormax = _getValidInterval2[1];

  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(getNiceTickValues_toConsumableArray(range(0, tickCount - 1).map(function () {
      return Infinity;
    }))) : [].concat(getNiceTickValues_toConsumableArray(range(0, tickCount - 1).map(function () {
      return -Infinity;
    })), [cormax]);

    return min > max ? reverse(_values) : _values;
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  } // Get the step between two ticks


  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals),
      step = _calculateStep.step,
      tickMin = _calculateStep.tickMin,
      tickMax = _calculateStep.tickMax;

  var values = arithmetic.rangeStep(tickMin, tickMax.add(new decimal(0.1).mul(step)), step);
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFn(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      min = _ref6[0],
      max = _ref6[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval3 = getValidInterval([min, max]),
      _getValidInterval4 = _slicedToArray(_getValidInterval3, 2),
      cormin = _getValidInterval4[0],
      cormax = _getValidInterval4[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }

  var step = getFormatStep(new decimal(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var fn = compose(utils_map(function (n) {
    return new decimal(cormin).add(new decimal(n).mul(step)).toNumber();
  }), range);
  var values = fn(0, count).filter(function (entry) {
    return entry >= cormin && entry <= cormax;
  });
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray(_ref7, 2),
      min = _ref8[0],
      max = _ref8[1];

  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // More than two ticks should be return
  var _getValidInterval5 = getValidInterval([min, max]),
      _getValidInterval6 = _slicedToArray(_getValidInterval5, 2),
      cormin = _getValidInterval6[0],
      cormax = _getValidInterval6[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return [cormin];
  }

  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new decimal(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(getNiceTickValues_toConsumableArray(arithmetic.rangeStep(new decimal(cormin), new decimal(cormax).sub(new decimal(0.99).mul(step)), step)), [cormax]);
  return min > max ? reverse(values) : values;
}

var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValues = memoize(getTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/index.js

// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/ErrorBar.js
var ErrorBar = __webpack_require__(17689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/DataUtils.js
var DataUtils = __webpack_require__(54491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ReactUtils.js
var ReactUtils = __webpack_require__(29480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/getLegendProps.js
var getLegendProps = __webpack_require__(51665);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/util/ChartUtils.js
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
function ChartUtils_toConsumableArray(arr) {
    return ChartUtils_arrayWithoutHoles(arr) || ChartUtils_iterableToArray(arr) || ChartUtils_unsupportedIterableToArray(arr) || ChartUtils_nonIterableSpread();
}
function ChartUtils_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ChartUtils_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return ChartUtils_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ChartUtils_arrayLikeToArray(o, minLen);
}
function ChartUtils_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function ChartUtils_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return ChartUtils_arrayLikeToArray(arr);
}
function ChartUtils_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

















// TODO: Cause of circular dependency. Needs refactor.
// import { RadiusAxisProps, AngleAxisProps } from '../polar/types';

// Exported for backwards compatibility

function getValueByDataKey(obj, dataKey, defaultValue) {
    if (isNil_default()(obj) || isNil_default()(dataKey)) {
        return defaultValue;
    }
    if ((0,DataUtils/* isNumOrStr */.P2)(dataKey)) {
        return get_default()(obj, dataKey, defaultValue);
    }
    if (isFunction_default()(dataKey)) {
        return dataKey(obj);
    }
    return defaultValue;
}
/**
 * Get domain of data by key.
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */ function getDomainOfDataByKey(data, key, type, filterNil) {
    var flattenData = flatMap_default()(data, function(entry) {
        return getValueByDataKey(entry, key);
    });
    if (type === "number") {
        // @ts-expect-error parseFloat type only accepts strings
        var domain = flattenData.filter(function(entry) {
            return (0,DataUtils/* isNumber */.hj)(entry) || parseFloat(entry);
        });
        return domain.length ? [
            min_default()(domain),
            max_default()(domain)
        ] : [
            Infinity,
            -Infinity
        ];
    }
    var validateData = filterNil ? flattenData.filter(function(entry) {
        return !isNil_default()(entry);
    }) : flattenData;
    // Supports x-axis of Date type
    return validateData.map(function(entry) {
        return (0,DataUtils/* isNumOrStr */.P2)(entry) || entry instanceof Date ? entry : "";
    });
}
var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate) {
    var _ticks$length;
    var ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var unsortedTicks = arguments.length > 2 ? arguments[2] : undefined;
    var axis = arguments.length > 3 ? arguments[3] : undefined;
    var index = -1;
    var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
    // if there are 1 or less ticks ticks then the active tick is at index 0
    if (len <= 1) {
        return 0;
    }
    if (axis && axis.axisType === "angleAxis" && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
        var range = axis.range;
        // ticks are distributed in a circle
        for(var i = 0; i < len; i++){
            var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
            var cur = unsortedTicks[i].coordinate;
            var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
            var sameDirectionCoord = void 0;
            if ((0,DataUtils/* mathSign */.uY)(cur - before) !== (0,DataUtils/* mathSign */.uY)(after - cur)) {
                var diffInterval = [];
                if ((0,DataUtils/* mathSign */.uY)(after - cur) === (0,DataUtils/* mathSign */.uY)(range[1] - range[0])) {
                    sameDirectionCoord = after;
                    var curInRange = cur + range[1] - range[0];
                    diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
                    diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
                } else {
                    sameDirectionCoord = before;
                    var afterInRange = after + range[1] - range[0];
                    diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
                    diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
                }
                var sameInterval = [
                    Math.min(cur, (sameDirectionCoord + cur) / 2),
                    Math.max(cur, (sameDirectionCoord + cur) / 2)
                ];
                if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
                    index = unsortedTicks[i].index;
                    break;
                }
            } else {
                var minValue = Math.min(before, after);
                var maxValue = Math.max(before, after);
                if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
                    index = unsortedTicks[i].index;
                    break;
                }
            }
        }
    } else {
        // ticks are distributed in a single direction
        for(var _i = 0; _i < len; _i++){
            if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
                index = ticks[_i].index;
                break;
            }
        }
    }
    return index;
};
/**
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */ var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
    var _ref = item, displayName = _ref.type.displayName; // TODO: check if displayName is valid.
    var _item$props = item.props, stroke = _item$props.stroke, fill = _item$props.fill;
    var result;
    switch(displayName){
        case "Line":
            result = stroke;
            break;
        case "Area":
        case "Radar":
            result = stroke && stroke !== "none" ? stroke : fill;
            break;
        default:
            result = fill;
            break;
    }
    return result;
};
/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */ var getBarSizeList = function getBarSizeList(_ref2) {
    var globalSize = _ref2.barSize, totalSize = _ref2.totalSize, _ref2$stackGroups = _ref2.stackGroups, stackGroups = _ref2$stackGroups === void 0 ? {} : _ref2$stackGroups;
    if (!stackGroups) {
        return {};
    }
    var result = {};
    var numericAxisIds = Object.keys(stackGroups);
    for(var i = 0, len = numericAxisIds.length; i < len; i++){
        var sgs = stackGroups[numericAxisIds[i]].stackGroups;
        var stackIds = Object.keys(sgs);
        for(var j = 0, sLen = stackIds.length; j < sLen; j++){
            var _sgs$stackIds$j = sgs[stackIds[j]], items = _sgs$stackIds$j.items, cateAxisId = _sgs$stackIds$j.cateAxisId;
            var barItems = items.filter(function(item) {
                return (0,ReactUtils/* getDisplayName */.Gf)(item.type).indexOf("Bar") >= 0;
            });
            if (barItems && barItems.length) {
                var selfSize = barItems[0].props.barSize;
                var cateId = barItems[0].props[cateAxisId];
                if (!result[cateId]) {
                    result[cateId] = [];
                }
                var barSize = isNil_default()(selfSize) ? globalSize : selfSize;
                result[cateId].push({
                    item: barItems[0],
                    stackList: barItems.slice(1),
                    barSize: isNil_default()(barSize) ? undefined : (0,DataUtils/* getPercentValue */.h1)(barSize, totalSize, 0)
                });
            }
        }
    }
    return result;
};
/**
 * Calculate the size of each bar and offset between start of band and the bar
 *
 * @param  {number} bandSize is the size of area where bars can render
 * @param  {number | string} barGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {number | string} barCategoryGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {Array<object>} sizeList Sizes of all groups
 * @param  {number} maxBarSize The maximum size of each bar
 * @return {Array<object>} The size and offset of each bar
 */ var getBarPosition = function getBarPosition(_ref3) {
    var barGap = _ref3.barGap, barCategoryGap = _ref3.barCategoryGap, bandSize = _ref3.bandSize, _ref3$sizeList = _ref3.sizeList, sizeList = _ref3$sizeList === void 0 ? [] : _ref3$sizeList, maxBarSize = _ref3.maxBarSize;
    var len = sizeList.length;
    if (len < 1) return null;
    var realBarGap = (0,DataUtils/* getPercentValue */.h1)(barGap, bandSize, 0, true);
    var result;
    var initialValue = [];
    // whether or not is barSize setted by user
    if (sizeList[0].barSize === +sizeList[0].barSize) {
        var useFull = false;
        var fullBarSize = bandSize / len;
        // @ts-expect-error the type check above does not check for type number explicitly
        var sum = sizeList.reduce(function(res, entry) {
            return res + entry.barSize || 0;
        }, 0);
        sum += (len - 1) * realBarGap;
        if (sum >= bandSize) {
            sum -= (len - 1) * realBarGap;
            realBarGap = 0;
        }
        if (sum >= bandSize && fullBarSize > 0) {
            useFull = true;
            fullBarSize *= 0.9;
            sum = len * fullBarSize;
        }
        var offset = (bandSize - sum) / 2 >> 0;
        var prev = {
            offset: offset - realBarGap,
            size: 0
        };
        result = sizeList.reduce(function(res, entry) {
            var newPosition = {
                item: entry.item,
                position: {
                    offset: prev.offset + prev.size + realBarGap,
                    // @ts-expect-error the type check above does not check for type number explicitly
                    size: useFull ? fullBarSize : entry.barSize
                }
            };
            var newRes = [].concat(ChartUtils_toConsumableArray(res), [
                newPosition
            ]);
            prev = newRes[newRes.length - 1].position;
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function(item) {
                    newRes.push({
                        item: item,
                        position: prev
                    });
                });
            }
            return newRes;
        }, initialValue);
    } else {
        var _offset = (0,DataUtils/* getPercentValue */.h1)(barCategoryGap, bandSize, 0, true);
        if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
            realBarGap = 0;
        }
        var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
        if (originalSize > 1) {
            originalSize >>= 0;
        }
        var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
        result = sizeList.reduce(function(res, entry, i) {
            var newRes = [].concat(ChartUtils_toConsumableArray(res), [
                {
                    item: entry.item,
                    position: {
                        offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
                        size: size
                    }
                }
            ]);
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function(item) {
                    newRes.push({
                        item: item,
                        position: newRes[newRes.length - 1].position
                    });
                });
            }
            return newRes;
        }, initialValue);
    }
    return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend(offset, _unused, props, legendBox) {
    var children = props.children, width = props.width, margin = props.margin;
    var legendWidth = width - (margin.left || 0) - (margin.right || 0);
    var legendProps = (0,getLegendProps/* getLegendProps */.z)({
        children: children,
        legendWidth: legendWidth
    });
    if (legendProps) {
        var _ref4 = legendBox || {}, boxWidth = _ref4.width, boxHeight = _ref4.height;
        var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
        if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && (0,DataUtils/* isNumber */.hj)(offset[align])) {
            return _objectSpread(_objectSpread({}, offset), {}, _defineProperty({}, align, offset[align] + (boxWidth || 0)));
        }
        if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && (0,DataUtils/* isNumber */.hj)(offset[verticalAlign])) {
            return _objectSpread(_objectSpread({}, offset), {}, _defineProperty({}, verticalAlign, offset[verticalAlign] + (boxHeight || 0)));
        }
    }
    return offset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis(layout, axisType, direction) {
    if (isNil_default()(axisType)) {
        return true;
    }
    if (layout === "horizontal") {
        return axisType === "yAxis";
    }
    if (layout === "vertical") {
        return axisType === "xAxis";
    }
    if (direction === "x") {
        return axisType === "xAxis";
    }
    if (direction === "y") {
        return axisType === "yAxis";
    }
    return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars(data, item, dataKey, layout, axisType) {
    var children = item.props.children;
    var errorBars = (0,ReactUtils/* findAllByType */.NN)(children, ErrorBar/* ErrorBar */.W).filter(function(errorBarChild) {
        return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
    });
    if (errorBars && errorBars.length) {
        var keys = errorBars.map(function(errorBarChild) {
            return errorBarChild.props.dataKey;
        });
        return data.reduce(function(result, entry) {
            var entryValue = getValueByDataKey(entry, dataKey);
            if (isNil_default()(entryValue)) return result;
            var mainValue = Array.isArray(entryValue) ? [
                min_default()(entryValue),
                max_default()(entryValue)
            ] : [
                entryValue,
                entryValue
            ];
            var errorDomain = keys.reduce(function(prevErrorArr, k) {
                var errorValue = getValueByDataKey(entry, k, 0);
                var lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
                var upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);
                return [
                    Math.min(lowerValue, prevErrorArr[0]),
                    Math.max(upperValue, prevErrorArr[1])
                ];
            }, [
                Infinity,
                -Infinity
            ]);
            return [
                Math.min(errorDomain[0], result[0]),
                Math.max(errorDomain[1], result[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis(data, items, dataKey, axisType, layout) {
    var domains = items.map(function(item) {
        return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
    }).filter(function(entry) {
        return !isNil_default()(entry);
    });
    if (domains && domains.length) {
        return domains.reduce(function(result, entry) {
            return [
                Math.min(result[0], entry[0]),
                Math.max(result[1], entry[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {LayoutType} layout The type of layout
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */ var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, layout, filterNil) {
    var domains = items.map(function(item) {
        var dataKey = item.props.dataKey;
        if (type === "number" && dataKey) {
            return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
        }
        return getDomainOfDataByKey(data, dataKey, type, filterNil);
    });
    if (type === "number") {
        // Calculate the domain of number axis
        return domains.reduce(// @ts-expect-error if (type === number) means that the domain is numerical type
        // - but this link is missing in the type definition
        function(result, entry) {
            return [
                Math.min(result[0], entry[0]),
                Math.max(result[1], entry[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    var tag = {};
    // Get the union set of category axis
    return domains.reduce(function(result, entry) {
        for(var i = 0, len = entry.length; i < len; i++){
            // @ts-expect-error Date cannot index an object
            if (!tag[entry[i]]) {
                // @ts-expect-error Date cannot index an object
                tag[entry[i]] = true;
                // @ts-expect-error Date cannot index an object
                result.push(entry[i]);
            }
        }
        return result;
    }, []);
};
var isCategoricalAxis = function isCategoricalAxis(layout, axisType) {
    return layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
};
/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks           The ticks in axis
 * @param {Number} minValue        The minimun value of axis
 * @param {Number} maxValue        The maximun value of axis
 * @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
 * @return {Array}                 Coordinates
 */ var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, minValue, maxValue, syncWithTicks) {
    if (syncWithTicks) {
        return ticks.map(function(entry) {
            return entry.coordinate;
        });
    }
    var hasMin, hasMax;
    var values = ticks.map(function(entry) {
        if (entry.coordinate === minValue) {
            hasMin = true;
        }
        if (entry.coordinate === maxValue) {
            hasMax = true;
        }
        return entry.coordinate;
    });
    if (!hasMin) {
        values.push(minValue);
    }
    if (!hasMax) {
        values.push(maxValue);
    }
    return values;
};
/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */ var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
    if (!axis) return null;
    var scale = axis.scale;
    var duplicateDomain = axis.duplicateDomain, type = axis.type, range = axis.range;
    var offsetForBand = axis.realScaleType === "scaleBand" ? scale.bandwidth() / 2 : 2;
    var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
    offset = axis.axisType === "angleAxis" && (range === null || range === void 0 ? void 0 : range.length) >= 2 ? (0,DataUtils/* mathSign */.uY)(range[0] - range[1]) * 2 * offset : offset;
    // The ticks set by user should only affect the ticks adjacent to axis line
    if (isGrid && (axis.ticks || axis.niceTicks)) {
        var result = (axis.ticks || axis.niceTicks).map(function(entry) {
            var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
            return {
                // If the scaleContent is not a number, the coordinate will be NaN.
                // That could be the case for example with a PointScale and a string as domain.
                coordinate: scale(scaleContent) + offset,
                value: entry,
                offset: offset
            };
        });
        return result.filter(function(row) {
            return !isNaN_default()(row.coordinate);
        });
    }
    // When axis is a categorial axis, but the type of axis is number or the scale of axis is not "auto"
    if (axis.isCategorical && axis.categoricalDomain) {
        return axis.categoricalDomain.map(function(entry, index) {
            return {
                coordinate: scale(entry) + offset,
                value: entry,
                index: index,
                offset: offset
            };
        });
    }
    if (scale.ticks && !isAll) {
        return scale.ticks(axis.tickCount).map(function(entry) {
            return {
                coordinate: scale(entry) + offset,
                value: entry,
                offset: offset
            };
        });
    }
    // When axis has duplicated text, serial numbers are used to generate scale
    return scale.domain().map(function(entry, index) {
        return {
            coordinate: scale(entry) + offset,
            value: duplicateDomain ? duplicateDomain[entry] : entry,
            index: index,
            offset: offset
        };
    });
};
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} childHandler Handler function specified in child component
 * @return {Function}                The combined handler
 */ var handlerWeakMap = new WeakMap();
var combineEventHandlers = function combineEventHandlers(defaultHandler, childHandler) {
    if (typeof childHandler !== "function") {
        return defaultHandler;
    }
    if (!handlerWeakMap.has(defaultHandler)) {
        handlerWeakMap.set(defaultHandler, new WeakMap());
    }
    var childWeakMap = handlerWeakMap.get(defaultHandler);
    if (childWeakMap.has(childHandler)) {
        return childWeakMap.get(childHandler);
    }
    var combineHandler = function combineHandler() {
        defaultHandler.apply(void 0, arguments);
        childHandler.apply(void 0, arguments);
    };
    childWeakMap.set(childHandler, combineHandler);
    return combineHandler;
};
/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @param  {Boolean}  hasBar        if it has a bar
 * @return {object}               The scale function and resolved name
 */ var parseScale = function parseScale(axis, chartType, hasBar) {
    var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
    if (scale === "auto") {
        if (layout === "radial" && axisType === "radiusAxis") {
            return {
                scale: band/* default */.Z(),
                realScaleType: "band"
            };
        }
        if (layout === "radial" && axisType === "angleAxis") {
            return {
                scale: linear_linear(),
                realScaleType: "linear"
            };
        }
        if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) {
            return {
                scale: band/* point */.x(),
                realScaleType: "point"
            };
        }
        if (type === "category") {
            return {
                scale: band/* default */.Z(),
                realScaleType: "band"
            };
        }
        return {
            scale: linear_linear(),
            realScaleType: "linear"
        };
    }
    if (isString_default()(scale)) {
        var name = "scale".concat(upperFirst_default()(scale));
        return {
            scale: (d3_scale_namespaceObject[name] || band/* point */.x)(),
            realScaleType: d3_scale_namespaceObject[name] ? name : "point"
        };
    }
    return isFunction_default()(scale) ? {
        scale: scale
    } : {
        scale: band/* point */.x(),
        realScaleType: "point"
    };
};
var EPS = 1e-4;
var checkDomainOfScale = function checkDomainOfScale(scale) {
    var domain = scale.domain();
    if (!domain || domain.length <= 2) {
        return;
    }
    var len = domain.length;
    var range = scale.range();
    var minValue = Math.min(range[0], range[1]) - EPS;
    var maxValue = Math.max(range[0], range[1]) + EPS;
    var first = scale(domain[0]);
    var last = scale(domain[len - 1]);
    if (first < minValue || first > maxValue || last < minValue || last > maxValue) {
        scale.domain([
            domain[0],
            domain[len - 1]
        ]);
    }
};
var findPositionOfBar = function findPositionOfBar(barPosition, child) {
    if (!barPosition) {
        return null;
    }
    for(var i = 0, len = barPosition.length; i < len; i++){
        if (barPosition[i].item === child) {
            return barPosition[i].position;
        }
    }
    return null;
};
/**
 * Both value and domain are tuples of two numbers
 * - but the type stays as array of numbers until we have better support in rest of the app
 * @param {Array} value input that will be truncated
 * @param {Array} domain boundaries
 * @returns {Array} tuple of two numbers
 */ var truncateByDomain = function truncateByDomain(value, domain) {
    if (!domain || domain.length !== 2 || !(0,DataUtils/* isNumber */.hj)(domain[0]) || !(0,DataUtils/* isNumber */.hj)(domain[1])) {
        return value;
    }
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    var result = [
        value[0],
        value[1]
    ];
    if (!(0,DataUtils/* isNumber */.hj)(value[0]) || value[0] < minValue) {
        result[0] = minValue;
    }
    if (!(0,DataUtils/* isNumber */.hj)(value[1]) || value[1] > maxValue) {
        result[1] = maxValue;
    }
    if (result[0] > maxValue) {
        result[0] = maxValue;
    }
    if (result[1] < minValue) {
        result[1] = minValue;
    }
    return result;
};
/**
 * Stacks all positive numbers above zero and all negative numbers below zero.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */ var offsetSign = function offsetSign(series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for(var j = 0, m = series[0].length; j < m; ++j){
        var positive = 0;
        var negative = 0;
        for(var i = 0; i < n; ++i){
            var value = isNaN_default()(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            /* eslint-disable prefer-destructuring, no-param-reassign */ if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            } else {
                series[i][j][0] = negative;
                series[i][j][1] = negative + value;
                negative = series[i][j][1];
            }
        /* eslint-enable prefer-destructuring, no-param-reassign */ }
    }
};
/**
 * Replaces all negative values with zero when stacking data.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */ var offsetPositive = function offsetPositive(series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for(var j = 0, m = series[0].length; j < m; ++j){
        var positive = 0;
        for(var i = 0; i < n; ++i){
            var value = isNaN_default()(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            /* eslint-disable prefer-destructuring, no-param-reassign */ if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            } else {
                series[i][j][0] = 0;
                series[i][j][1] = 0;
            }
        /* eslint-enable prefer-destructuring, no-param-reassign */ }
    }
};
/**
 * Function type to compute offset for stacked data.
 *
 * d3-shape has something fishy going on with its types.
 * In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
 * However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
 * The same I can see in the source code itself:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 * That one unfortunately has no types but we can tell it passes three-dimensional array.
 *
 * Which leads me to believe that definitelytyped is wrong on this one.
 * There's open discussion on this topic without much attention:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 */ var STACK_OFFSET_MAP = {
    sign: offsetSign,
    // @ts-expect-error definitelytyped types are incorrect
    expand: expand,
    // @ts-expect-error definitelytyped types are incorrect
    none: none,
    // @ts-expect-error definitelytyped types are incorrect
    silhouette: silhouette,
    // @ts-expect-error definitelytyped types are incorrect
    wiggle: wiggle,
    positive: offsetPositive
};
var getStackedData = function getStackedData(data, stackItems, offsetType) {
    var dataKeys = stackItems.map(function(item) {
        return item.props.dataKey;
    });
    var offsetAccessor = STACK_OFFSET_MAP[offsetType];
    var stack = src_stack()// @ts-expect-error stack.keys type wants an array of strings, but we provide array of DataKeys
    .keys(dataKeys).value(function(d, key) {
        return +getValueByDataKey(d, key, 0);
    }).order(order_none)// @ts-expect-error definitelytyped types are incorrect
    .offset(offsetAccessor);
    return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
    if (!data) {
        return null;
    }
    // reversing items to affect render order (for layering)
    var items = reverseStackOrder ? _items.reverse() : _items;
    var parentStackGroupsInitialValue = {};
    var stackGroups = items.reduce(function(result, item) {
        var _item$props2 = item.props, stackId = _item$props2.stackId, hide = _item$props2.hide;
        if (hide) {
            return result;
        }
        var axisId = item.props[numericAxisId];
        var parentGroup = result[axisId] || {
            hasStack: false,
            stackGroups: {}
        };
        if ((0,DataUtils/* isNumOrStr */.P2)(stackId)) {
            var childGroup = parentGroup.stackGroups[stackId] || {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: []
            };
            childGroup.items.push(item);
            parentGroup.hasStack = true;
            parentGroup.stackGroups[stackId] = childGroup;
        } else {
            parentGroup.stackGroups[(0,DataUtils/* uniqueId */.EL)("_stackId_")] = {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: [
                    item
                ]
            };
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, parentGroup));
    }, parentStackGroupsInitialValue);
    var axisStackGroupsInitialValue = {};
    return Object.keys(stackGroups).reduce(function(result, axisId) {
        var group = stackGroups[axisId];
        if (group.hasStack) {
            var stackGroupsInitialValue = {};
            group.stackGroups = Object.keys(group.stackGroups).reduce(function(res, stackId) {
                var g = group.stackGroups[stackId];
                return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, stackId, {
                    numericAxisId: numericAxisId,
                    cateAxisId: cateAxisId,
                    items: g.items,
                    stackedData: getStackedData(data, g.items, offsetType)
                }));
            }, stackGroupsInitialValue);
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, group));
    }, axisStackGroupsInitialValue);
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */ var getTicksOfScale = function getTicksOfScale(scale, opts) {
    var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
    var scaleType = realScaleType || opts.scale;
    if (scaleType !== "auto" && scaleType !== "linear") {
        return null;
    }
    if (tickCount && type === "number" && originalDomain && (originalDomain[0] === "auto" || originalDomain[1] === "auto")) {
        // Calculate the ticks by the number of grid when the axis is a number axis
        var domain = scale.domain();
        if (!domain.length) {
            return null;
        }
        var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
        scale.domain([
            min_default()(tickValues),
            max_default()(tickValues)
        ]);
        return {
            niceTicks: tickValues
        };
    }
    if (tickCount && type === "number") {
        var _domain = scale.domain();
        var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);
        return {
            niceTicks: _tickValues
        };
    }
    return null;
};
function getCateCoordinateOfLine(_ref5) {
    var axis = _ref5.axis, ticks = _ref5.ticks, bandSize = _ref5.bandSize, entry = _ref5.entry, index = _ref5.index, dataKey = _ref5.dataKey;
    if (axis.type === "category") {
        // find coordinate of category axis by the value of category
        // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
        if (!axis.allowDuplicatedCategory && axis.dataKey && !isNil_default()(entry[axis.dataKey])) {
            // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
            var matchedTick = (0,DataUtils/* findEntryInArray */.Ap)(ticks, "value", entry[axis.dataKey]);
            if (matchedTick) {
                return matchedTick.coordinate + bandSize / 2;
            }
        }
        return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
    }
    var value = getValueByDataKey(entry, !isNil_default()(dataKey) ? dataKey : axis.dataKey);
    return !isNil_default()(value) ? axis.scale(value) : null;
}
var getCateCoordinateOfBar = function getCateCoordinateOfBar(_ref6) {
    var axis = _ref6.axis, ticks = _ref6.ticks, offset = _ref6.offset, bandSize = _ref6.bandSize, entry = _ref6.entry, index = _ref6.index;
    if (axis.type === "category") {
        return ticks[index] ? ticks[index].coordinate + offset : null;
    }
    var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
    return !isNil_default()(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar(_ref7) {
    var numericAxis = _ref7.numericAxis;
    var domain = numericAxis.scale.domain();
    if (numericAxis.type === "number") {
        var minValue = Math.min(domain[0], domain[1]);
        var maxValue = Math.max(domain[0], domain[1]);
        if (minValue <= 0 && maxValue >= 0) {
            return 0;
        }
        if (maxValue < 0) {
            return maxValue;
        }
        return minValue;
    }
    return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
    var stackId = item.props.stackId;
    if ((0,DataUtils/* isNumOrStr */.P2)(stackId)) {
        var group = stackGroups[stackId];
        if (group) {
            var itemIndex = group.items.indexOf(item);
            return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
        }
    }
    return null;
};
var getDomainOfSingle = function getDomainOfSingle(data) {
    return data.reduce(function(result, entry) {
        return [
            min_default()(entry.concat([
                result[0]
            ]).filter(DataUtils/* isNumber */.hj)),
            max_default()(entry.concat([
                result[1]
            ]).filter(DataUtils/* isNumber */.hj))
        ];
    }, [
        Infinity,
        -Infinity
    ]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
    return Object.keys(stackGroups).reduce(function(result, stackId) {
        var group = stackGroups[stackId];
        var stackedData = group.stackedData;
        var domain = stackedData.reduce(function(res, entry) {
            var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
            return [
                Math.min(res[0], s[0]),
                Math.max(res[1], s[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
        return [
            Math.min(domain[0], result[0]),
            Math.max(domain[1], result[1])
        ];
    }, [
        Infinity,
        -Infinity
    ]).map(function(result) {
        return result === Infinity || result === -Infinity ? 0 : result;
    });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
    if (isFunction_default()(specifiedDomain)) {
        return specifiedDomain(dataDomain, allowDataOverflow);
    }
    if (!Array.isArray(specifiedDomain)) {
        return dataDomain;
    }
    var domain = [];
    /* eslint-disable prefer-destructuring */ if ((0,DataUtils/* isNumber */.hj)(specifiedDomain[0])) {
        domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
    } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
        var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
        domain[0] = dataDomain[0] - value;
    } else if (isFunction_default()(specifiedDomain[0])) {
        domain[0] = specifiedDomain[0](dataDomain[0]);
    } else {
        domain[0] = dataDomain[0];
    }
    if ((0,DataUtils/* isNumber */.hj)(specifiedDomain[1])) {
        domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
    } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
        var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
        domain[1] = dataDomain[1] + _value;
    } else if (isFunction_default()(specifiedDomain[1])) {
        domain[1] = specifiedDomain[1](dataDomain[1]);
    } else {
        domain[1] = dataDomain[1];
    }
    /* eslint-enable prefer-destructuring */ return domain;
};
/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @param  {Boolean} isBar if items in axis are bars
 * @return {Number} Size
 */ var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks, isBar) {
    // @ts-expect-error we need to rethink scale type
    if (axis && axis.scale && axis.scale.bandwidth) {
        // @ts-expect-error we need to rethink scale type
        var bandWidth = axis.scale.bandwidth();
        if (!isBar || bandWidth > 0) {
            return bandWidth;
        }
    }
    if (axis && ticks && ticks.length >= 2) {
        var orderedTicks = sortBy_default()(ticks, function(o) {
            return o.coordinate;
        });
        var bandSize = Infinity;
        for(var i = 1, len = orderedTicks.length; i < len; i++){
            var cur = orderedTicks[i];
            var prev = orderedTicks[i - 1];
            bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
        }
        return bandSize === Infinity ? 0 : bandSize;
    }
    return isBar ? undefined : 0;
};
/**
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis ReactElement
 * @returns {Array}        domains
 */ var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisChild) {
    if (!specifiedDomain || !specifiedDomain.length) {
        return calculatedDomain;
    }
    if (isEqual_default()(specifiedDomain, get_default()(axisChild, "type.defaultProps.domain"))) {
        return calculatedDomain;
    }
    return specifiedDomain;
};
var getTooltipItem = function getTooltipItem(graphicalItem, payload) {
    var _graphicalItem$props = graphicalItem.props, dataKey = _graphicalItem$props.dataKey, name = _graphicalItem$props.name, unit = _graphicalItem$props.unit, formatter = _graphicalItem$props.formatter, tooltipType = _graphicalItem$props.tooltipType, chartType = _graphicalItem$props.chartType, hide = _graphicalItem$props.hide;
    return _objectSpread(_objectSpread({}, (0,ReactUtils/* filterProps */.L6)(graphicalItem, false)), {}, {
        dataKey: dataKey,
        unit: unit,
        formatter: formatter,
        name: name || dataKey,
        color: getMainColorOfGraphicItem(graphicalItem),
        value: getValueByDataKey(payload, dataKey),
        type: tooltipType,
        payload: payload,
        chartType: chartType,
        hide: hide
    });
};


/***/ }),

/***/ 64095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   os: () => (/* binding */ getOffset),
/* harmony export */   xE: () => (/* binding */ getStringSize)
/* harmony export */ });
/* unused harmony export getStyleString */
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88127);
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

var stringCache = {
    widthCache: {},
    cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
};
var STYLE_LIST = (/* unused pure expression or super */ null && ([
    "minWidth",
    "maxWidth",
    "width",
    "minHeight",
    "maxHeight",
    "height",
    "top",
    "left",
    "fontSize",
    "lineHeight",
    "padding",
    "margin",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom"
]));
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function autoCompleteStyle(name, value) {
    if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
        return "".concat(value, "px");
    }
    return value;
}
function camelToMiddleLine(text) {
    var strs = text.split("");
    var formatStrs = strs.reduce(function(result, entry) {
        if (entry === entry.toUpperCase()) {
            return [].concat(_toConsumableArray(result), [
                "-",
                entry.toLowerCase()
            ]);
        }
        return [].concat(_toConsumableArray(result), [
            entry
        ]);
    }, []);
    return formatStrs.join("");
}
var getStyleString = function getStyleString(style) {
    return Object.keys(style).reduce(function(result, s) {
        return "".concat(result).concat(camelToMiddleLine(s), ":").concat(autoCompleteStyle(s, style[s]), ";");
    }, "");
};
function removeInvalidKeys(obj) {
    var copyObj = _objectSpread({}, obj);
    Object.keys(copyObj).forEach(function(key) {
        if (!copyObj[key]) {
            delete copyObj[key];
        }
    });
    return copyObj;
}
var getStringSize = function getStringSize(text) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (text === undefined || text === null || _Global__WEBPACK_IMPORTED_MODULE_0__/* .Global */ .x.isSsr) {
        return {
            width: 0,
            height: 0
        };
    }
    var copyStyle = removeInvalidKeys(style);
    var cacheKey = JSON.stringify({
        text: text,
        copyStyle: copyStyle
    });
    if (stringCache.widthCache[cacheKey]) {
        return stringCache.widthCache[cacheKey];
    }
    try {
        var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
        if (!measurementSpan) {
            measurementSpan = document.createElement("span");
            measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
            measurementSpan.setAttribute("aria-hidden", "true");
            document.body.appendChild(measurementSpan);
        }
        // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
        // https://en.wikipedia.org/wiki/Content_Security_Policy
        var measurementSpanStyle = _objectSpread(_objectSpread({}, SPAN_STYLE), copyStyle);
        Object.assign(measurementSpan.style, measurementSpanStyle);
        measurementSpan.textContent = "".concat(text);
        var rect = measurementSpan.getBoundingClientRect();
        var result = {
            width: rect.width,
            height: rect.height
        };
        stringCache.widthCache[cacheKey] = result;
        if (++stringCache.cacheCount > MAX_CACHE_NUM) {
            stringCache.cacheCount = 0;
            stringCache.widthCache = {};
        }
        return result;
    } catch (e) {
        return {
            width: 0,
            height: 0
        };
    }
};
var getOffset = function getOffset(rect) {
    return {
        top: rect.top + window.scrollY - document.documentElement.clientTop,
        left: rect.left + window.scrollX - document.documentElement.clientLeft
    };
};


/***/ }),

/***/ 55381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $4: () => (/* binding */ getMaxRadius),
/* harmony export */   $S: () => (/* binding */ getTickClassName),
/* harmony export */   Wk: () => (/* binding */ RADIAN),
/* harmony export */   op: () => (/* binding */ polarToCartesian),
/* harmony export */   t9: () => (/* binding */ formatAxisMap),
/* harmony export */   z3: () => (/* binding */ inRangeOfSector)
/* harmony export */ });
/* unused harmony exports degreeToRadian, radianToDegree, distanceBetweenPoints, getAngleOfPoint, formatAngleOfSector */
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24934);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40837);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DataUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54491);
/* harmony import */ var _ChartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86837);
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}





var RADIAN = Math.PI / 180;
var degreeToRadian = function degreeToRadian(angle) {
    return angle * Math.PI / 180;
};
var radianToDegree = function radianToDegree(angleInRadian) {
    return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
    return {
        x: cx + Math.cos(-RADIAN * angle) * radius,
        y: cy + Math.sin(-RADIAN * angle) * radius
    };
};
var getMaxRadius = function getMaxRadius(width, height) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {Object} axisType  The type of axes, radius-axis or angle-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */ var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height;
    var startAngle = props.startAngle, endAngle = props.endAngle;
    var cx = (0,_DataUtils__WEBPACK_IMPORTED_MODULE_3__/* .getPercentValue */ .h1)(props.cx, width, width / 2);
    var cy = (0,_DataUtils__WEBPACK_IMPORTED_MODULE_3__/* .getPercentValue */ .h1)(props.cy, height, height / 2);
    var maxRadius = getMaxRadius(width, height, offset);
    var innerRadius = (0,_DataUtils__WEBPACK_IMPORTED_MODULE_3__/* .getPercentValue */ .h1)(props.innerRadius, maxRadius, 0);
    var outerRadius = (0,_DataUtils__WEBPACK_IMPORTED_MODULE_3__/* .getPercentValue */ .h1)(props.outerRadius, maxRadius, maxRadius * 0.8);
    var ids = Object.keys(axisMap);
    return ids.reduce(function(result, id) {
        var axis = axisMap[id];
        var domain = axis.domain, reversed = axis.reversed;
        var range;
        if (lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(axis.range)) {
            if (axisType === "angleAxis") {
                range = [
                    startAngle,
                    endAngle
                ];
            } else if (axisType === "radiusAxis") {
                range = [
                    innerRadius,
                    outerRadius
                ];
            }
            if (reversed) {
                range = [
                    range[1],
                    range[0]
                ];
            }
        } else {
            range = axis.range;
            var _range = range;
            var _range2 = _slicedToArray(_range, 2);
            startAngle = _range2[0];
            endAngle = _range2[1];
        }
        var _parseScale = (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .parseScale */ .Hq)(axis, chartName), realScaleType = _parseScale.realScaleType, scale = _parseScale.scale;
        scale.domain(domain).range(range);
        (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .checkDomainOfScale */ .zF)(scale);
        var ticks = (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_4__/* .getTicksOfScale */ .g$)(scale, _objectSpread(_objectSpread({}, axis), {}, {
            realScaleType: realScaleType
        }));
        var finalAxis = _objectSpread(_objectSpread(_objectSpread({}, axis), ticks), {}, {
            range: range,
            radius: outerRadius,
            realScaleType: realScaleType,
            scale: scale,
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle
        });
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, id, finalAxis));
    }, {});
};
var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
    var x1 = point.x, y1 = point.y;
    var x2 = anotherPoint.x, y2 = anotherPoint.y;
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
    var x = _ref.x, y = _ref.y;
    var cx = _ref2.cx, cy = _ref2.cy;
    var radius = distanceBetweenPoints({
        x: x,
        y: y
    }, {
        x: cx,
        y: cy
    });
    if (radius <= 0) {
        return {
            radius: radius
        };
    }
    var cos = (x - cx) / radius;
    var angleInRadian = Math.acos(cos);
    if (y > cy) {
        angleInRadian = 2 * Math.PI - angleInRadian;
    }
    return {
        radius: radius,
        angle: radianToDegree(angleInRadian),
        angleInRadian: angleInRadian
    };
};
var formatAngleOfSector = function formatAngleOfSector(_ref3) {
    var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return {
        startAngle: startAngle - min * 360,
        endAngle: endAngle - min * 360
    };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
    var startAngle = _ref4.startAngle, endAngle = _ref4.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return angle + min * 360;
};
var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
    var x = _ref5.x, y = _ref5.y;
    var _getAngleOfPoint = getAngleOfPoint({
        x: x,
        y: y
    }, sector), radius = _getAngleOfPoint.radius, angle = _getAngleOfPoint.angle;
    var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
    if (radius < innerRadius || radius > outerRadius) {
        return false;
    }
    if (radius === 0) {
        return true;
    }
    var _formatAngleOfSector = formatAngleOfSector(sector), startAngle = _formatAngleOfSector.startAngle, endAngle = _formatAngleOfSector.endAngle;
    var formatAngle = angle;
    var inRange;
    if (startAngle <= endAngle) {
        while(formatAngle > endAngle){
            formatAngle -= 360;
        }
        while(formatAngle < startAngle){
            formatAngle += 360;
        }
        inRange = formatAngle >= startAngle && formatAngle <= endAngle;
    } else {
        while(formatAngle > startAngle){
            formatAngle -= 360;
        }
        while(formatAngle < endAngle){
            formatAngle += 360;
        }
        inRange = formatAngle >= endAngle && formatAngle <= startAngle;
    }
    if (inRange) {
        return _objectSpread(_objectSpread({}, sector), {}, {
            radius: radius,
            angle: reverseFormatAngleOfSetor(formatAngle, sector)
        });
    }
    return null;
};
var getTickClassName = function getTickClassName(tick) {
    return !/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(tick) && !lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(tick) && typeof tick !== "boolean" ? tick.className : "";
};


/***/ }),

/***/ 51665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ getLegendProps)
/* harmony export */ });
/* harmony import */ var _component_Legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77029);
/* harmony import */ var _ChartUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86837);
/* harmony import */ var _ReactUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29480);
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



var getLegendProps = function getLegendProps(_ref) {
    var children = _ref.children, formattedGraphicalItems = _ref.formattedGraphicalItems, legendWidth = _ref.legendWidth, legendContent = _ref.legendContent;
    var legendItem = (0,_ReactUtils__WEBPACK_IMPORTED_MODULE_0__/* .findChildByType */ .sP)(children, _component_Legend__WEBPACK_IMPORTED_MODULE_1__/* .Legend */ .D);
    if (!legendItem) {
        return null;
    }
    var legendData;
    if (legendItem.props && legendItem.props.payload) {
        legendData = legendItem.props && legendItem.props.payload;
    } else if (legendContent === "children") {
        legendData = (formattedGraphicalItems || []).reduce(function(result, _ref2) {
            var item = _ref2.item, props = _ref2.props;
            var data = props.sectors || props.data || [];
            return result.concat(data.map(function(entry) {
                return {
                    type: legendItem.props.iconType || item.props.legendType,
                    value: entry.name,
                    color: entry.fill,
                    payload: entry
                };
            }));
        }, []);
    } else {
        legendData = (formattedGraphicalItems || []).map(function(_ref3) {
            var item = _ref3.item;
            var _item$props = item.props, dataKey = _item$props.dataKey, name = _item$props.name, legendType = _item$props.legendType, hide = _item$props.hide;
            return {
                inactive: hide,
                dataKey: dataKey,
                type: legendItem.props.iconType || legendType || "square",
                color: (0,_ChartUtils__WEBPACK_IMPORTED_MODULE_2__/* .getMainColorOfGraphicItem */ .fk)(item),
                value: name || dataKey,
                // @ts-expect-error property strokeDasharray is required in Payload but optional in props
                payload: item.props
            };
        });
    }
    return _objectSpread(_objectSpread(_objectSpread({}, legendItem.props), _component_Legend__WEBPACK_IMPORTED_MODULE_1__/* .Legend */ .D.getWithHeight(legendItem, legendWidth)), {}, {
        payload: legendData,
        item: legendItem
    });
};


/***/ }),

/***/ 30761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ })

};
;