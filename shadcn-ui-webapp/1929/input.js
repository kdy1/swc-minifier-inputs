"use strict";
exports.id = 1929;
exports.ids = [1929];
exports.modules = {

/***/ 4310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 85477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33556);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ }),

/***/ 56063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* unused harmony export setDefaultOptions */
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}


/***/ }),

/***/ 6520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ 59653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
    if (args.length < required) {
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
}


/***/ }),

/***/ 40064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}


/***/ }),

/***/ 17386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40064);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33469);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */ function addDays(dirtyDate, dirtyAmount) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
    var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 days, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
}


/***/ }),

/***/ 44962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40064);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33469);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */ function addMilliseconds(dirtyDate, dirtyAmount) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate).getTime();
    var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dirtyAmount);
    return new Date(timestamp + amount);
}


/***/ }),

/***/ 78849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33469);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(2, arguments);
    var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateLeft);
    var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}


/***/ }),

/***/ 19715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33469);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ function endOfMonth(dirtyDate) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
    var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}


/***/ }),

/***/ 9978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ format)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isDate/index.js
var isDate = __webpack_require__(93179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(33469);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(59653);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ function isValid(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    if (!(0,isDate/* default */.Z)(dirtyDate) && typeof dirtyDate !== "number") {
        return false;
    }
    var date = (0,toDate/* default */.Z)(dirtyDate);
    return !isNaN(Number(date));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMilliseconds/index.js
var addMilliseconds = __webpack_require__(44962);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(40064);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */ function subMilliseconds(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    return (0,addMilliseconds/* default */.Z)(dirtyDate, -amount);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js


function startOfUTCISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var weekStartsOn = 1;
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js



function getUTCISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js



function startOfUTCISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/defaultOptions/index.js
var _lib_defaultOptions = __webpack_require__(56063);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js




function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var weekStartsOn = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js





function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var firstWeekContainsDate = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js





function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var firstWeekContainsDate = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getUTCWeekYear(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, options);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while(output.length < targetLength){
        output = "0" + output;
    }
    return sign + output;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function y(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token.length);
    }
};
/* harmony default export */ const lightFormatters = (formatters);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters_formatters = {
    // Era
    G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function y(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            var signedYear = date.getUTCFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return lightFormatters.y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
        var signedWeekYear = getUTCWeekYear(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            var twoDigitYear = weekYear % 100;
            return addLeadingZeros(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = getUTCISOWeekYear(date);
        // Padding
        return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getUTCFullYear();
        return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case "M":
            case "MM":
                return lightFormatters.M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return addLeadingZeros(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
        var week = getUTCWeek(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
        var isoWeek = getUTCISOWeek(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getUTCDate(), {
                unit: "date"
            });
        }
        return lightFormatters.d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
        var dayOfYear = getUTCDayOfYear(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return addLeadingZeros(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return addLeadingZeros(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return addLeadingZeros(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
        if (token === "ho") {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return lightFormatters.h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getUTCHours(), {
                unit: "hour"
            });
        }
        return lightFormatters.H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getUTCMinutes(), {
                unit: "minute"
            });
        }
        return lightFormatters.m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getUTCSeconds(), {
                unit: "second"
            });
        }
        return lightFormatters.s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return lightFormatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return addLeadingZeros(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
/* harmony default export */ const format_formatters = (formatters_formatters);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
var getTimezoneOffsetInMilliseconds = __webpack_require__(6520);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = [
    "D",
    "DD"
];
var protectedWeekYearTokens = [
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === "YYYY") {
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "YY") {
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "D") {
        throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === "DD") {
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale = __webpack_require__(85477);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0,requiredArgs/* default */.Z)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale/* default */.Z;
    var firstWeekContainsDate = (0,toInteger/* default */.Z)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var weekStartsOn = (0,toInteger/* default */.Z)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale.localize) {
        throw new RangeError("locale must contain localize property");
    }
    if (!locale.formatLong) {
        throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = (0,toDate/* default */.Z)(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0,getTimezoneOffsetInMilliseconds/* default */.Z)(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = format_longFormatters[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return cleanEscapedString(substring);
        }
        var formatter = format_formatters[firstCharacter];
        if (formatter) {
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
                throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
            }
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
                throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
            }
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return substring;
    }).join("");
    return result;
}
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}


/***/ }),

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4310);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ function isDate(value) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
    return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}


/***/ }),

/***/ 33556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ en_US)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
/* harmony default export */ const _lib_formatDistance = (formatDistance);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
/* harmony default export */ const _lib_formatLong = (formatLong);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
/* harmony default export */ const _lib_formatRelative = (formatRelative);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
/* harmony default export */ const _lib_localize = (localize);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
/* harmony default export */ const _lib_match = (match);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: "en-US",
    formatDistance: _lib_formatDistance,
    formatLong: _lib_formatLong,
    formatRelative: _lib_formatRelative,
    localize: _lib_localize,
    match: _lib_match,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
/* harmony default export */ const en_US = (locale);


/***/ }),

/***/ 33469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4310);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59653);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ function toDate(argument) {
    (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(argument) === "object" && argStr === "[object Date]") {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
    } else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}


/***/ }),

/***/ 55637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
 //# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ 41770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _W: () => (/* binding */ DayPicker)
});

// UNUSED EXPORTS: Button, Caption, CaptionDropdowns, CaptionLabel, CaptionNavigation, Day, DayContent, DayPickerContext, DayPickerProvider, Dropdown, FocusContext, FocusProvider, Footer, Head, HeadRow, IconDropdown, IconLeft, IconRight, InternalModifier, NavigationContext, NavigationProvider, RootProvider, Row, SelectMultipleContext, SelectMultipleProvider, SelectMultipleProviderInternal, SelectRangeContext, SelectRangeProvider, SelectRangeProviderInternal, SelectSingleContext, SelectSingleProvider, SelectSingleProviderInternal, WeekNumber, addToRange, isDateAfterType, isDateBeforeType, isDateInterval, isDateRange, isDayOfWeekType, isDayPickerDefault, isDayPickerMultiple, isDayPickerRange, isDayPickerSingle, isMatch, useActiveModifiers, useDayPicker, useDayRender, useFocusContext, useInput, useNavigation, useSelectMultiple, useSelectRange, useSelectSingle

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@14.3.0-canary.43_@babel+core@7.24.6_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(70615);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/index.js + 9 modules
var en_US = __webpack_require__(33556);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 16 modules
var esm_format = __webpack_require__(9978);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(33469);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(59653);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfMonth/index.js


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ function startOfMonth(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfMonth/index.js
var endOfMonth = __webpack_require__(19715);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfDay/index.js


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */ function startOfDay(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameYear/index.js


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */ function isSameYear(dirtyDateLeft, dirtyDateRight) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var dateLeft = (0,toDate/* default */.Z)(dirtyDateLeft);
    var dateRight = (0,toDate/* default */.Z)(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(40064);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDaysInMonth/index.js


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */ function getDaysInMonth(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = date.getFullYear();
    var monthIndex = date.getMonth();
    var lastDayOfMonth = new Date(0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setMonth/index.js




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */ function setMonth(dirtyDate, dirtyMonth) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var month = (0,toInteger/* default */.Z)(dirtyMonth);
    var year = date.getFullYear();
    var day = date.getDate();
    var dateWithDesiredMonth = new Date(0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(month, Math.min(day, daysInMonth));
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setYear/index.js



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */ function setYear(dirtyDate, dirtyYear) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = (0,toInteger/* default */.Z)(dirtyYear);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(date.getTime())) {
        return new Date(NaN);
    }
    date.setFullYear(year);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfYear/index.js


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */ function startOfYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var cleanDate = (0,toDate/* default */.Z)(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarMonths/index.js
var differenceInCalendarMonths = __webpack_require__(78849);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMonths/index.js



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */ function addMonths(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    var dayOfMonth = date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameMonth/index.js


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */ function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var dateLeft = (0,toDate/* default */.Z)(dirtyDateLeft);
    var dateRight = (0,toDate/* default */.Z)(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isBefore/index.js


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */ function isBefore(dirtyDate, dirtyDateToCompare) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var dateToCompare = (0,toDate/* default */.Z)(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/defaultOptions/index.js
var _lib_defaultOptions = __webpack_require__(56063);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfWeek/index.js




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ function startOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var weekStartsOn = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfISOWeek/index.js


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ function startOfISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    return startOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(17386);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameDay/index.js


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */ function isSameDay(dirtyDateLeft, dirtyDateRight) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */ function isAfter(dirtyDate, dirtyDateToCompare) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var dateToCompare = (0,toDate/* default */.Z)(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subDays/index.js



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */ function subDays(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    return (0,addDays/* default */.Z)(dirtyDate, -amount);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
var getTimezoneOffsetInMilliseconds = __webpack_require__(6520);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarDays/index.js



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */ function differenceInCalendarDays_differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - (0,getTimezoneOffsetInMilliseconds/* default */.Z)(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - (0,getTimezoneOffsetInMilliseconds/* default */.Z)(startOfDayRight);
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isDate/index.js
var isDate = __webpack_require__(93179);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addWeeks/index.js



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */ function addWeeks(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    var days = amount * 7;
    return (0,addDays/* default */.Z)(dirtyDate, days);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addYears/index.js



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */ function addYears(dirtyDate, dirtyAmount) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var amount = (0,toInteger/* default */.Z)(dirtyAmount);
    return addMonths(dirtyDate, amount * 12);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfWeek/index.js




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */ function endOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var weekStartsOn = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfISOWeek/index.js


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */ function endOfISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    return endOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.24.6/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(4310);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/max/index.js



/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */ function max(dirtyDatesArray) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var datesArray;
    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === "function") {
        datesArray = dirtyDatesArray;
    // If `dirtyDatesArray` is Array-like Object, convert to Array.
    } else if ((0,esm_typeof/* default */.Z)(dirtyDatesArray) === "object" && dirtyDatesArray !== null) {
        datesArray = Array.prototype.slice.call(dirtyDatesArray);
    } else {
        // `dirtyDatesArray` is non-iterable, return Invalid Date
        return new Date(NaN);
    }
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = (0,toDate/* default */.Z)(dirtyDate);
        if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
            result = currentDate;
        }
    });
    return result || new Date(NaN);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/min/index.js



/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */ function min(dirtyDatesArray) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var datesArray;
    // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === "function") {
        datesArray = dirtyDatesArray;
    // If `dirtyDatesArray` is Array-like Object, convert to Array.
    } else if ((0,esm_typeof/* default */.Z)(dirtyDatesArray) === "object" && dirtyDatesArray !== null) {
        datesArray = Array.prototype.slice.call(dirtyDatesArray);
    } else {
        // `dirtyDatesArray` is non-iterable, return Invalid Date
        return new Date(NaN);
    }
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = (0,toDate/* default */.Z)(dirtyDate);
        if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
            result = currentDate;
        }
    });
    return result || new Date(NaN);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getTime/index.js


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */ function getTime(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var timestamp = date.getTime();
    return timestamp;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getUnixTime/index.js


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */ function getUnixTime(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    return Math.floor(getTime(dirtyDate) / 1000);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISOWeekYear/index.js



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */ function getISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfISOWeekYear/index.js



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */ function startOfISOWeekYear(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */ function getISOWeek(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeekYear/index.js





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */ function getWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var year = date.getFullYear();
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var firstWeekContainsDate = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfWeekYear/index.js





/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */ function startOfWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0,requiredArgs/* default */.Z)(1, arguments);
    var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
    var firstWeekContainsDate = (0,toInteger/* default */.Z)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getWeekYear(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek(firstWeek, options);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeek/index.js




var getWeek_MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */ function getWeek(dirtyDate, options) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / getWeek_MILLISECONDS_IN_WEEK) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarWeeks/index.js



var differenceInCalendarWeeks_MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */ function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
    (0,requiredArgs/* default */.Z)(2, arguments);
    var startOfWeekLeft = startOfWeek(dirtyDateLeft, options);
    var startOfWeekRight = startOfWeek(dirtyDateRight, options);
    var timestampLeft = startOfWeekLeft.getTime() - (0,getTimezoneOffsetInMilliseconds/* default */.Z)(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - (0,getTimezoneOffsetInMilliseconds/* default */.Z)(startOfWeekRight);
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / differenceInCalendarWeeks_MILLISECONDS_IN_WEEK);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfMonth/index.js


/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */ function lastDayOfMonth(dirtyDate) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    var date = (0,toDate/* default */.Z)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeeksInMonth/index.js




/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */ function getWeeksInMonth(date, options) {
    (0,requiredArgs/* default */.Z)(1, arguments);
    return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-day-picker@8.7.1_date-fns@2.30.0_react@18.2.0/node_modules/react-day-picker/dist/index.esm.js





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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/** Returns true when the props are of type {@link DayPickerMultipleProps}. */
function isDayPickerMultiple(props) {
    return props.mode === 'multiple';
}

/** Returns true when the props are of type {@link DayPickerRangeProps}. */
function isDayPickerRange(props) {
    return props.mode === 'range';
}

/** Returns true when the props are of type {@link DayPickerSingleProps}. */
function isDayPickerSingle(props) {
    return props.mode === 'single';
}

/**
 * The name of the default CSS classes.
 */
var defaultClassNames = {
    root: 'rdp',
    multiple_months: 'rdp-multiple_months',
    with_weeknumber: 'rdp-with_weeknumber',
    vhidden: 'rdp-vhidden',
    button_reset: 'rdp-button_reset',
    button: 'rdp-button',
    caption: 'rdp-caption',
    caption_start: 'rdp-caption_start',
    caption_end: 'rdp-caption_end',
    caption_between: 'rdp-caption_between',
    caption_label: 'rdp-caption_label',
    caption_dropdowns: 'rdp-caption_dropdowns',
    dropdown: 'rdp-dropdown',
    dropdown_month: 'rdp-dropdown_month',
    dropdown_year: 'rdp-dropdown_year',
    dropdown_icon: 'rdp-dropdown_icon',
    months: 'rdp-months',
    month: 'rdp-month',
    table: 'rdp-table',
    tbody: 'rdp-tbody',
    tfoot: 'rdp-tfoot',
    head: 'rdp-head',
    head_row: 'rdp-head_row',
    head_cell: 'rdp-head_cell',
    nav: 'rdp-nav',
    nav_button: 'rdp-nav_button',
    nav_button_previous: 'rdp-nav_button_previous',
    nav_button_next: 'rdp-nav_button_next',
    nav_icon: 'rdp-nav_icon',
    row: 'rdp-row',
    weeknumber: 'rdp-weeknumber',
    cell: 'rdp-cell',
    day: 'rdp-day',
    day_today: 'rdp-day_today',
    day_outside: 'rdp-day_outside',
    day_selected: 'rdp-day_selected',
    day_disabled: 'rdp-day_disabled',
    day_hidden: 'rdp-day_hidden',
    day_range_start: 'rdp-day_range_start',
    day_range_end: 'rdp-day_range_end',
    day_range_middle: 'rdp-day_range_middle'
};

/**
 * The default formatter for the caption.
 */
function formatCaption(month, options) {
    return (0,esm_format/* default */.Z)(month, 'LLLL y', options);
}

/**
 * The default formatter for the Day button.
 */
function formatDay(day, options) {
    return (0,esm_format/* default */.Z)(day, 'd', options);
}

/**
 * The default formatter for the Month caption.
 */
function formatMonthCaption(month, options) {
    return (0,esm_format/* default */.Z)(month, 'LLLL', options);
}

/**
 * The default formatter for the week number.
 */
function formatWeekNumber(weekNumber) {
    return "".concat(weekNumber);
}

/**
 * The default formatter for the name of the weekday.
 */
function formatWeekdayName(weekday, options) {
    return (0,esm_format/* default */.Z)(weekday, 'cccccc', options);
}

/**
 * The default formatter for the Year caption.
 */
function formatYearCaption(year, options) {
    return (0,esm_format/* default */.Z)(year, 'yyyy', options);
}

var formatters = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatCaption: formatCaption,
    formatDay: formatDay,
    formatMonthCaption: formatMonthCaption,
    formatWeekNumber: formatWeekNumber,
    formatWeekdayName: formatWeekdayName,
    formatYearCaption: formatYearCaption
});

/**
 * The default ARIA label for the day button.
 */
var labelDay = function (day, activeModifiers, options) {
    return (0,esm_format/* default */.Z)(day, 'do MMMM (EEEE)', options);
};

/**
 * The default ARIA label for the WeekNumber element.
 */
var labelMonthDropdown = function () {
    return 'Month: ';
};

/**
 * The default ARIA label for next month button in navigation
 */
var labelNext = function () {
    return 'Go to next month';
};

/**
 * The default ARIA label for previous month button in navigation
 */
var labelPrevious = function () {
    return 'Go to previous month';
};

/**
 * The default ARIA label for the Weekday element.
 */
var labelWeekday = function (day, options) {
    return (0,esm_format/* default */.Z)(day, 'cccc', options);
};

/**
 * The default ARIA label for the WeekNumber element.
 */
var labelWeekNumber = function (n) {
    return "Week n. ".concat(n);
};

/**
 * The default ARIA label for the WeekNumber element.
 */
var labelYearDropdown = function () {
    return 'Year: ';
};

var labels = /*#__PURE__*/Object.freeze({
    __proto__: null,
    labelDay: labelDay,
    labelMonthDropdown: labelMonthDropdown,
    labelNext: labelNext,
    labelPrevious: labelPrevious,
    labelWeekNumber: labelWeekNumber,
    labelWeekday: labelWeekday,
    labelYearDropdown: labelYearDropdown
});

/**
 * Returns the default values to use in the DayPickerContext, in case they are
 * not passed down with the DayPicker initial props.
 */
function getDefaultContextValues() {
    var captionLayout = 'buttons';
    var classNames = defaultClassNames;
    var locale = en_US/* default */.Z;
    var modifiersClassNames = {};
    var modifiers = {};
    var numberOfMonths = 1;
    var styles = {};
    var today = new Date();
    return {
        captionLayout: captionLayout,
        classNames: classNames,
        formatters: formatters,
        labels: labels,
        locale: locale,
        modifiersClassNames: modifiersClassNames,
        modifiers: modifiers,
        numberOfMonths: numberOfMonths,
        styles: styles,
        today: today,
        mode: 'default'
    };
}

/** Return the `fromDate` and `toDate` prop values values parsing the DayPicker props. */
function parseFromToProps(props) {
    var fromYear = props.fromYear, toYear = props.toYear, fromMonth = props.fromMonth, toMonth = props.toMonth;
    var fromDate = props.fromDate, toDate = props.toDate;
    if (fromMonth) {
        fromDate = startOfMonth(fromMonth);
    }
    else if (fromYear) {
        fromDate = new Date(fromYear, 0, 1);
    }
    if (toMonth) {
        toDate = (0,endOfMonth/* default */.Z)(toMonth);
    }
    else if (toYear) {
        toDate = new Date(toYear, 11, 31);
    }
    return {
        fromDate: fromDate ? startOfDay(fromDate) : undefined,
        toDate: toDate ? startOfDay(toDate) : undefined
    };
}

/**
 * The DayPicker context shares the props passed to DayPicker within internal
 * and custom components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Access to this context from the {@link useDayPicker} hook.
 */
var DayPickerContext = (0,react.createContext)(undefined);
/**
 * The provider for the {@link DayPickerContext}, assigning the defaults from the
 * initial DayPicker props.
 */
function DayPickerProvider(props) {
    var _a;
    var initialProps = props.initialProps;
    var defaultContextValues = getDefaultContextValues();
    var _b = parseFromToProps(initialProps), fromDate = _b.fromDate, toDate = _b.toDate;
    var captionLayout = (_a = initialProps.captionLayout) !== null && _a !== void 0 ? _a : defaultContextValues.captionLayout;
    if (captionLayout !== 'buttons' && (!fromDate || !toDate)) {
        // When no from/to dates are set, the caption is always buttons
        captionLayout = 'buttons';
    }
    var onSelect;
    if (isDayPickerSingle(initialProps) ||
        isDayPickerMultiple(initialProps) ||
        isDayPickerRange(initialProps)) {
        onSelect = initialProps.onSelect;
    }
    var value = __assign(__assign(__assign({}, defaultContextValues), initialProps), { captionLayout: captionLayout, classNames: __assign(__assign({}, defaultContextValues.classNames), initialProps.classNames), components: __assign({}, initialProps.components), formatters: __assign(__assign({}, defaultContextValues.formatters), initialProps.formatters), fromDate: fromDate, labels: __assign(__assign({}, defaultContextValues.labels), initialProps.labels), mode: initialProps.mode || defaultContextValues.mode, modifiers: __assign(__assign({}, defaultContextValues.modifiers), initialProps.modifiers), modifiersClassNames: __assign(__assign({}, defaultContextValues.modifiersClassNames), initialProps.modifiersClassNames), onSelect: onSelect, styles: __assign(__assign({}, defaultContextValues.styles), initialProps.styles), toDate: toDate });
    return (react_default().createElement(DayPickerContext.Provider, { value: value }, props.children));
}
/**
 * Hook to access the {@link DayPickerContextValue}.
 *
 * Use the DayPicker context to access to the props passed to DayPicker inside
 * internal or custom components.
 */
function useDayPicker() {
    var context = (0,react.useContext)(DayPickerContext);
    if (!context) {
        throw new Error("useDayPicker must be used within a DayPickerProvider.");
    }
    return context;
}

/** Render the caption for the displayed month. This component is used when `captionLayout="buttons"`. */
function CaptionLabel(props) {
    var _a = useDayPicker(), locale = _a.locale, classNames = _a.classNames, styles = _a.styles, formatCaption = _a.formatters.formatCaption;
    return (react_default().createElement("div", { className: classNames.caption_label, style: styles.caption_label, "aria-live": "polite", role: "presentation", id: props.id }, formatCaption(props.displayMonth, { locale: locale })));
}

/**
 * Render the icon in the styled drop-down.
 */
function IconDropdown(props) {
    return (react_default().createElement("svg", __assign({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, props),
        react_default().createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })));
}

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
function Dropdown(props) {
    var _a, _b;
    var onChange = props.onChange, value = props.value, children = props.children, caption = props.caption, className = props.className, style = props.style;
    var dayPicker = useDayPicker();
    var IconDropdownComponent = (_b = (_a = dayPicker.components) === null || _a === void 0 ? void 0 : _a.IconDropdown) !== null && _b !== void 0 ? _b : IconDropdown;
    return (react_default().createElement("div", { className: className, style: style },
        react_default().createElement("span", { className: dayPicker.classNames.vhidden }, props['aria-label']),
        react_default().createElement("select", { name: props.name, "aria-label": props['aria-label'], className: dayPicker.classNames.dropdown, style: dayPicker.styles.dropdown, value: value, onChange: onChange }, children),
        react_default().createElement("div", { className: dayPicker.classNames.caption_label, style: dayPicker.styles.caption_label, "aria-hidden": "true" },
            caption,
            react_default().createElement(IconDropdownComponent, { className: dayPicker.classNames.dropdown_icon, style: dayPicker.styles.dropdown_icon }))));
}

/** Render the dropdown to navigate between months. */
function MonthsDropdown(props) {
    var _a;
    var _b = useDayPicker(), fromDate = _b.fromDate, toDate = _b.toDate, styles = _b.styles, locale = _b.locale, formatMonthCaption = _b.formatters.formatMonthCaption, classNames = _b.classNames, components = _b.components, labelMonthDropdown = _b.labels.labelMonthDropdown;
    // Dropdown should appear only when both from/toDate is set
    if (!fromDate)
        return react_default().createElement((react_default()).Fragment, null);
    if (!toDate)
        return react_default().createElement((react_default()).Fragment, null);
    var dropdownMonths = [];
    if (isSameYear(fromDate, toDate)) {
        // only display the months included in the range
        var date = startOfMonth(fromDate);
        for (var month = fromDate.getMonth(); month <= toDate.getMonth(); month++) {
            dropdownMonths.push(setMonth(date, month));
        }
    }
    else {
        // display all the 12 months
        var date = startOfMonth(new Date()); // Any date should be OK, as we just need the year
        for (var month = 0; month <= 11; month++) {
            dropdownMonths.push(setMonth(date, month));
        }
    }
    var handleChange = function (e) {
        var selectedMonth = Number(e.target.value);
        var newMonth = setMonth(startOfMonth(props.displayMonth), selectedMonth);
        props.onChange(newMonth);
    };
    var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
    return (react_default().createElement(DropdownComponent, { name: "months", "aria-label": labelMonthDropdown(), className: classNames.dropdown_month, style: styles.dropdown_month, onChange: handleChange, value: props.displayMonth.getMonth(), caption: formatMonthCaption(props.displayMonth, { locale: locale }) }, dropdownMonths.map(function (m) { return (react_default().createElement("option", { key: m.getMonth(), value: m.getMonth() }, formatMonthCaption(m, { locale: locale }))); })));
}

/**
 * Render a dropdown to change the year. Take in account the `nav.fromDate` and
 * `toDate` from context.
 */
function YearsDropdown(props) {
    var _a;
    var displayMonth = props.displayMonth;
    var _b = useDayPicker(), fromDate = _b.fromDate, toDate = _b.toDate, locale = _b.locale, styles = _b.styles, classNames = _b.classNames, components = _b.components, formatYearCaption = _b.formatters.formatYearCaption, labelYearDropdown = _b.labels.labelYearDropdown;
    var years = [];
    // Dropdown should appear only when both from/toDate is set
    if (!fromDate)
        return react_default().createElement((react_default()).Fragment, null);
    if (!toDate)
        return react_default().createElement((react_default()).Fragment, null);
    var fromYear = fromDate.getFullYear();
    var toYear = toDate.getFullYear();
    for (var year = fromYear; year <= toYear; year++) {
        years.push(setYear(startOfYear(new Date()), year));
    }
    var handleChange = function (e) {
        var newMonth = setYear(startOfMonth(displayMonth), Number(e.target.value));
        props.onChange(newMonth);
    };
    var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
    return (react_default().createElement(DropdownComponent, { name: "years", "aria-label": labelYearDropdown(), className: classNames.dropdown_year, style: styles.dropdown_year, onChange: handleChange, value: displayMonth.getFullYear(), caption: formatYearCaption(displayMonth, { locale: locale }) }, years.map(function (year) { return (react_default().createElement("option", { key: year.getFullYear(), value: year.getFullYear() }, formatYearCaption(year, { locale: locale }))); })));
}

/**
 * Helper hook for using controlled/uncontrolled values from a component props.
 *
 * When the value is not controlled, pass `undefined` as `controlledValue` and
 * use the returned setter to update it.
 *
 * When the value is controlled, pass the controlled value as second
 * argument, which will be always returned as `value`.
 */
function useControlledValue(defaultValue, controlledValue) {
    var _a = (0,react.useState)(defaultValue), uncontrolledValue = _a[0], setValue = _a[1];
    var value = controlledValue === undefined ? uncontrolledValue : controlledValue;
    return [value, setValue];
}

/** Return the initial month according to the given options. */
function getInitialMonth(context) {
    var month = context.month, defaultMonth = context.defaultMonth, today = context.today;
    var initialMonth = month || defaultMonth || today || new Date();
    var toDate = context.toDate, fromDate = context.fromDate, _a = context.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
    // Fix the initialMonth if is after the to-date
    if (toDate && (0,differenceInCalendarMonths/* default */.Z)(toDate, initialMonth) < 0) {
        var offset = -1 * (numberOfMonths - 1);
        initialMonth = addMonths(toDate, offset);
    }
    // Fix the initialMonth if is before the from-date
    if (fromDate && (0,differenceInCalendarMonths/* default */.Z)(initialMonth, fromDate) < 0) {
        initialMonth = fromDate;
    }
    return startOfMonth(initialMonth);
}

/** Controls the navigation state. */
function useNavigationState() {
    var context = useDayPicker();
    var initialMonth = getInitialMonth(context);
    var _a = useControlledValue(initialMonth, context.month), month = _a[0], setMonth = _a[1];
    var goToMonth = function (date) {
        var _a;
        if (context.disableNavigation)
            return;
        var month = startOfMonth(date);
        setMonth(month);
        (_a = context.onMonthChange) === null || _a === void 0 ? void 0 : _a.call(context, month);
    };
    return [month, goToMonth];
}

/**
 * Return the months to display in the component according to the number of
 * months and the from/to date.
 */
function getDisplayMonths(month, _a) {
    var reverseMonths = _a.reverseMonths, numberOfMonths = _a.numberOfMonths;
    var start = startOfMonth(month);
    var end = startOfMonth(addMonths(start, numberOfMonths));
    var monthsDiff = (0,differenceInCalendarMonths/* default */.Z)(end, start);
    var months = [];
    for (var i = 0; i < monthsDiff; i++) {
        var nextMonth = addMonths(start, i);
        months.push(nextMonth);
    }
    if (reverseMonths)
        months = months.reverse();
    return months;
}

/**
 * Returns the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - if after the `toDate` range, is undefined;
 * - if the navigation is paged, is the number of months displayed ahead.
 *
 */
function getNextMonth(startingMonth, options) {
    if (options.disableNavigation) {
        return undefined;
    }
    var toDate = options.toDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
    var offset = pagedNavigation ? numberOfMonths : 1;
    var month = startOfMonth(startingMonth);
    if (!toDate) {
        return addMonths(month, offset);
    }
    var monthsDiff = (0,differenceInCalendarMonths/* default */.Z)(toDate, startingMonth);
    if (monthsDiff < numberOfMonths) {
        return undefined;
    }
    // Jump forward as the number of months when paged navigation
    return addMonths(month, offset);
}

/**
 * Returns the next previous the user can navigate to, according to the given
 * options.
 *
 * Please note that the previous month is not always the previous calendar
 * month:
 *
 * - if before the `fromDate` date, is `undefined`;
 * - if the navigation is paged, is the number of months displayed before.
 *
 */
function getPreviousMonth(startingMonth, options) {
    if (options.disableNavigation) {
        return undefined;
    }
    var fromDate = options.fromDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
    var offset = pagedNavigation ? numberOfMonths : 1;
    var month = startOfMonth(startingMonth);
    if (!fromDate) {
        return addMonths(month, -offset);
    }
    var monthsDiff = (0,differenceInCalendarMonths/* default */.Z)(month, fromDate);
    if (monthsDiff <= 0) {
        return undefined;
    }
    // Jump back as the number of months when paged navigation
    return addMonths(month, -offset);
}

/**
 * The Navigation context shares details and methods to navigate the months in DayPicker.
 * Access this context from the {@link useNavigation} hook.
 */
var NavigationContext = (0,react.createContext)(undefined);
/** Provides the values for the {@link NavigationContext}. */
function NavigationProvider(props) {
    var dayPicker = useDayPicker();
    var _a = useNavigationState(), currentMonth = _a[0], goToMonth = _a[1];
    var displayMonths = getDisplayMonths(currentMonth, dayPicker);
    var nextMonth = getNextMonth(currentMonth, dayPicker);
    var previousMonth = getPreviousMonth(currentMonth, dayPicker);
    var isDateDisplayed = function (date) {
        return displayMonths.some(function (displayMonth) {
            return isSameMonth(date, displayMonth);
        });
    };
    var goToDate = function (date, refDate) {
        if (isDateDisplayed(date)) {
            return;
        }
        if (refDate && isBefore(date, refDate)) {
            goToMonth(addMonths(date, 1 + dayPicker.numberOfMonths * -1));
        }
        else {
            goToMonth(date);
        }
    };
    var value = {
        currentMonth: currentMonth,
        displayMonths: displayMonths,
        goToMonth: goToMonth,
        goToDate: goToDate,
        previousMonth: previousMonth,
        nextMonth: nextMonth,
        isDateDisplayed: isDateDisplayed
    };
    return (react_default().createElement(NavigationContext.Provider, { value: value }, props.children));
}
/**
 * Hook to access the {@link NavigationContextValue}. Use this hook to navigate
 * between months or years in DayPicker.
 *
 * This hook is meant to be used inside internal or custom components.
 */
function useNavigation() {
    var context = (0,react.useContext)(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}

/**
 * Render a caption with the dropdowns to navigate between months and years.
 */
function CaptionDropdowns(props) {
    var _a;
    var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
    var goToMonth = useNavigation().goToMonth;
    var handleMonthChange = function (newMonth) {
        goToMonth(newMonth);
    };
    var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
    var captionLabel = (react_default().createElement(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth }));
    return (react_default().createElement("div", { className: classNames.caption_dropdowns, style: styles.caption_dropdowns },
        react_default().createElement("div", { className: classNames.vhidden }, captionLabel),
        react_default().createElement(MonthsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth }),
        react_default().createElement(YearsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth })));
}

/**
 * Render the "previous month" button in the navigation.
 */
function IconLeft(props) {
    return (react_default().createElement("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props),
        react_default().createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })));
}

/**
 * Render the "next month" button in the navigation.
 */
function IconRight(props) {
    return (react_default().createElement("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props),
        react_default().createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })));
}

/** Render a button HTML element applying the reset class name. */
var Button = (0,react.forwardRef)(function (props, ref) {
    var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
    var classNamesArr = [classNames.button_reset, classNames.button];
    if (props.className) {
        classNamesArr.push(props.className);
    }
    var className = classNamesArr.join(' ');
    var style = __assign(__assign({}, styles.button_reset), styles.button);
    if (props.style) {
        Object.assign(style, props.style);
    }
    return (react_default().createElement("button", __assign({}, props, { ref: ref, type: "button", className: className, style: style })));
});

/** A component rendering the navigation buttons or the drop-downs. */
function Navigation(props) {
    var _a, _b;
    var _c = useDayPicker(), dir = _c.dir, locale = _c.locale, classNames = _c.classNames, styles = _c.styles, _d = _c.labels, labelPrevious = _d.labelPrevious, labelNext = _d.labelNext, components = _c.components;
    if (!props.nextMonth && !props.previousMonth) {
        return react_default().createElement((react_default()).Fragment, null);
    }
    var previousLabel = labelPrevious(props.previousMonth, { locale: locale });
    var previousClassName = [
        classNames.nav_button,
        classNames.nav_button_previous
    ].join(' ');
    var nextLabel = labelNext(props.nextMonth, { locale: locale });
    var nextClassName = [
        classNames.nav_button,
        classNames.nav_button_next
    ].join(' ');
    var IconRightComponent = (_a = components === null || components === void 0 ? void 0 : components.IconRight) !== null && _a !== void 0 ? _a : IconRight;
    var IconLeftComponent = (_b = components === null || components === void 0 ? void 0 : components.IconLeft) !== null && _b !== void 0 ? _b : IconLeft;
    return (react_default().createElement("div", { className: classNames.nav, style: styles.nav },
        !props.hidePrevious && (react_default().createElement(Button, { name: "previous-month", "aria-label": previousLabel, className: previousClassName, style: styles.nav_button_previous, disabled: !props.previousMonth, onClick: props.onPreviousClick }, dir === 'rtl' ? (react_default().createElement(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon })) : (react_default().createElement(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon })))),
        !props.hideNext && (react_default().createElement(Button, { name: "next-month", "aria-label": nextLabel, className: nextClassName, style: styles.nav_button_next, disabled: !props.nextMonth, onClick: props.onNextClick }, dir === 'rtl' ? (react_default().createElement(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon })) : (react_default().createElement(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon }))))));
}

/**
 * Render a caption with a button-based navigation.
 */
function CaptionNavigation(props) {
    var numberOfMonths = useDayPicker().numberOfMonths;
    var _a = useNavigation(), previousMonth = _a.previousMonth, nextMonth = _a.nextMonth, goToMonth = _a.goToMonth, displayMonths = _a.displayMonths;
    var displayIndex = displayMonths.findIndex(function (month) {
        return isSameMonth(props.displayMonth, month);
    });
    var isFirst = displayIndex === 0;
    var isLast = displayIndex === displayMonths.length - 1;
    var hideNext = numberOfMonths > 1 && (isFirst || !isLast);
    var hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);
    var handlePreviousClick = function () {
        if (!previousMonth)
            return;
        goToMonth(previousMonth);
    };
    var handleNextClick = function () {
        if (!nextMonth)
            return;
        goToMonth(nextMonth);
    };
    return (react_default().createElement(Navigation, { displayMonth: props.displayMonth, hideNext: hideNext, hidePrevious: hidePrevious, nextMonth: nextMonth, previousMonth: previousMonth, onPreviousClick: handlePreviousClick, onNextClick: handleNextClick }));
}

/**
 * Render the caption of a month. The caption has a different layout when
 * setting the {@link DayPickerBase.captionLayout} prop.
 */
function Caption(props) {
    var _a;
    var _b = useDayPicker(), classNames = _b.classNames, disableNavigation = _b.disableNavigation, styles = _b.styles, captionLayout = _b.captionLayout, components = _b.components;
    var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
    var caption;
    if (disableNavigation) {
        caption = (react_default().createElement(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth }));
    }
    else if (captionLayout === 'dropdown') {
        caption = (react_default().createElement(CaptionDropdowns, { displayMonth: props.displayMonth, id: props.id }));
    }
    else if (captionLayout === 'dropdown-buttons') {
        caption = (react_default().createElement((react_default()).Fragment, null,
            react_default().createElement(CaptionDropdowns, { displayMonth: props.displayMonth, id: props.id }),
            react_default().createElement(CaptionNavigation, { displayMonth: props.displayMonth, id: props.id })));
    }
    else {
        caption = (react_default().createElement((react_default()).Fragment, null,
            react_default().createElement(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth }),
            react_default().createElement(CaptionNavigation, { displayMonth: props.displayMonth, id: props.id })));
    }
    return (react_default().createElement("div", { className: classNames.caption, style: styles.caption }, caption));
}

/** Render the Footer component (empty as default).*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Footer(props) {
    var _a = useDayPicker(), footer = _a.footer, styles = _a.styles, tfoot = _a.classNames.tfoot;
    if (!footer)
        return react_default().createElement((react_default()).Fragment, null);
    return (react_default().createElement("tfoot", { className: tfoot, style: styles.tfoot },
        react_default().createElement("tr", null,
            react_default().createElement("td", { colSpan: 8 }, footer))));
}

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
function getWeekdays(locale, 
/** The index of the first day of the week (0 - Sunday). */
weekStartsOn, 
/** Use ISOWeek instead of locale/ */
ISOWeek) {
    var start = ISOWeek
        ? startOfISOWeek(new Date())
        : startOfWeek(new Date(), { locale: locale, weekStartsOn: weekStartsOn });
    var days = [];
    for (var i = 0; i < 7; i++) {
        var day = (0,addDays/* default */.Z)(start, i);
        days.push(day);
    }
    return days;
}

/**
 * Render the HeadRow component - i.e. the table head row with the weekday names.
 */
function HeadRow() {
    var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles, showWeekNumber = _a.showWeekNumber, locale = _a.locale, weekStartsOn = _a.weekStartsOn, ISOWeek = _a.ISOWeek, formatWeekdayName = _a.formatters.formatWeekdayName, labelWeekday = _a.labels.labelWeekday;
    var weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
    return (react_default().createElement("tr", { style: styles.head_row, className: classNames.head_row },
        showWeekNumber && (react_default().createElement("td", { style: styles.head_cell, className: classNames.head_cell })),
        weekdays.map(function (weekday, i) { return (react_default().createElement("th", { key: i, scope: "col", className: classNames.head_cell, style: styles.head_cell, "aria-label": labelWeekday(weekday, { locale: locale }) }, formatWeekdayName(weekday, { locale: locale }))); })));
}

/** Render the table head. */
function Head() {
    var _a;
    var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
    var HeadRowComponent = (_a = components === null || components === void 0 ? void 0 : components.HeadRow) !== null && _a !== void 0 ? _a : HeadRow;
    return (react_default().createElement("thead", { style: styles.head, className: classNames.head },
        react_default().createElement(HeadRowComponent, null)));
}

/** Render the content of the day cell. */
function DayContent(props) {
    var _a = useDayPicker(), locale = _a.locale, formatDay = _a.formatters.formatDay;
    return react_default().createElement((react_default()).Fragment, null, formatDay(props.date, { locale: locale }));
}

/**
 * The SelectMultiple context shares details about the selected days when in
 * multiple selection mode.
 *
 * Access this context from the {@link useSelectMultiple} hook.
 */
var SelectMultipleContext = (0,react.createContext)(undefined);
/** Provides the values for the {@link SelectMultipleContext}. */
function SelectMultipleProvider(props) {
    if (!isDayPickerMultiple(props.initialProps)) {
        var emptyContextValue = {
            selected: undefined,
            modifiers: {
                disabled: []
            }
        };
        return (react_default().createElement(SelectMultipleContext.Provider, { value: emptyContextValue }, props.children));
    }
    return (react_default().createElement(SelectMultipleProviderInternal, { initialProps: props.initialProps, children: props.children }));
}
function SelectMultipleProviderInternal(_a) {
    var initialProps = _a.initialProps, children = _a.children;
    var selected = initialProps.selected, min = initialProps.min, max = initialProps.max;
    var onDayClick = function (day, activeModifiers, e) {
        var _a, _b;
        (_a = initialProps.onDayClick) === null || _a === void 0 ? void 0 : _a.call(initialProps, day, activeModifiers, e);
        var isMinSelected = Boolean(activeModifiers.selected && min && (selected === null || selected === void 0 ? void 0 : selected.length) === min);
        if (isMinSelected) {
            return;
        }
        var isMaxSelected = Boolean(!activeModifiers.selected && max && (selected === null || selected === void 0 ? void 0 : selected.length) === max);
        if (isMaxSelected) {
            return;
        }
        var selectedDays = selected ? __spreadArray([], selected, true) : [];
        if (activeModifiers.selected) {
            var index = selectedDays.findIndex(function (selectedDay) {
                return isSameDay(day, selectedDay);
            });
            selectedDays.splice(index, 1);
        }
        else {
            selectedDays.push(day);
        }
        (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, selectedDays, day, activeModifiers, e);
    };
    var modifiers = {
        disabled: []
    };
    if (selected) {
        modifiers.disabled.push(function (day) {
            var isMaxSelected = max && selected.length > max - 1;
            var isSelected = selected.some(function (selectedDay) {
                return isSameDay(selectedDay, day);
            });
            return Boolean(isMaxSelected && !isSelected);
        });
    }
    var contextValue = {
        selected: selected,
        onDayClick: onDayClick,
        modifiers: modifiers
    };
    return (react_default().createElement(SelectMultipleContext.Provider, { value: contextValue }, children));
}
/**
 * Hook to access the {@link SelectMultipleContextValue}.
 *
 * This hook is meant to be used inside internal or custom components.
 */
function useSelectMultiple() {
    var context = (0,react.useContext)(SelectMultipleContext);
    if (!context) {
        throw new Error('useSelectMultiple must be used within a SelectMultipleProvider');
    }
    return context;
}

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
function addToRange(day, range) {
    var _a = range || {}, from = _a.from, to = _a.to;
    if (!from) {
        return { from: day, to: undefined };
    }
    if (!to && isSameDay(from, day)) {
        return { from: from, to: day };
    }
    if (!to && isBefore(day, from)) {
        return { from: day, to: from };
    }
    if (!to) {
        return { from: from, to: day };
    }
    if (isSameDay(to, day) && isSameDay(from, day)) {
        return undefined;
    }
    if (isSameDay(to, day)) {
        return { from: to, to: undefined };
    }
    if (isSameDay(from, day)) {
        return undefined;
    }
    if (isAfter(from, day)) {
        return { from: day, to: to };
    }
    return { from: from, to: day };
}

/**
 * The SelectRange context shares details about the selected days when in
 * range selection mode.
 *
 * Access this context from the {@link useSelectRange} hook.
 */
var SelectRangeContext = (0,react.createContext)(undefined);
/** Provides the values for the {@link SelectRangeProvider}. */
function SelectRangeProvider(props) {
    if (!isDayPickerRange(props.initialProps)) {
        var emptyContextValue = {
            selected: undefined,
            modifiers: {
                range_start: [],
                range_end: [],
                range_middle: [],
                disabled: []
            }
        };
        return (react_default().createElement(SelectRangeContext.Provider, { value: emptyContextValue }, props.children));
    }
    return (react_default().createElement(SelectRangeProviderInternal, { initialProps: props.initialProps, children: props.children }));
}
function SelectRangeProviderInternal(_a) {
    var initialProps = _a.initialProps, children = _a.children;
    var selected = initialProps.selected;
    var _b = selected || {}, selectedFrom = _b.from, selectedTo = _b.to;
    var min = initialProps.min;
    var max = initialProps.max;
    var onDayClick = function (day, activeModifiers, e) {
        var _a, _b;
        (_a = initialProps.onDayClick) === null || _a === void 0 ? void 0 : _a.call(initialProps, day, activeModifiers, e);
        var newRange = addToRange(day, selected);
        (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, newRange, day, activeModifiers, e);
    };
    var modifiers = {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
    };
    if (selectedFrom) {
        modifiers.range_start = [selectedFrom];
        if (!selectedTo) {
            modifiers.range_end = [selectedFrom];
        }
        else {
            modifiers.range_end = [selectedTo];
            if (!isSameDay(selectedFrom, selectedTo)) {
                modifiers.range_middle = [
                    {
                        after: selectedFrom,
                        before: selectedTo
                    }
                ];
            }
        }
    }
    if (min) {
        if (selectedFrom && !selectedTo) {
            modifiers.disabled.push({
                after: subDays(selectedFrom, min - 1),
                before: (0,addDays/* default */.Z)(selectedFrom, min - 1)
            });
        }
        if (selectedFrom && selectedTo) {
            modifiers.disabled.push({
                after: selectedFrom,
                before: (0,addDays/* default */.Z)(selectedFrom, min - 1)
            });
        }
    }
    if (max) {
        if (selectedFrom && !selectedTo) {
            modifiers.disabled.push({
                before: (0,addDays/* default */.Z)(selectedFrom, -max + 1)
            });
            modifiers.disabled.push({
                after: (0,addDays/* default */.Z)(selectedFrom, max - 1)
            });
        }
        if (selectedFrom && selectedTo) {
            var selectedCount = differenceInCalendarDays_differenceInCalendarDays(selectedTo, selectedFrom) + 1;
            var offset = max - selectedCount;
            modifiers.disabled.push({
                before: subDays(selectedFrom, offset)
            });
            modifiers.disabled.push({
                after: (0,addDays/* default */.Z)(selectedTo, offset)
            });
        }
    }
    return (react_default().createElement(SelectRangeContext.Provider, { value: { selected: selected, onDayClick: onDayClick, modifiers: modifiers } }, children));
}
/**
 * Hook to access the {@link SelectRangeContextValue}.
 *
 * This hook is meant to be used inside internal or custom components.
 */
function useSelectRange() {
    var context = (0,react.useContext)(SelectRangeContext);
    if (!context) {
        throw new Error('useSelectRange must be used within a SelectRangeProvider');
    }
    return context;
}

/** Normalize to array a matcher input. */
function matcherToArray(matcher) {
    if (Array.isArray(matcher)) {
        return __spreadArray([], matcher, true);
    }
    else if (matcher !== undefined) {
        return [matcher];
    }
    else {
        return [];
    }
}

/** Create CustomModifiers from dayModifiers */
function getCustomModifiers(dayModifiers) {
    var customModifiers = {};
    Object.entries(dayModifiers).forEach(function (_a) {
        var modifier = _a[0], matcher = _a[1];
        customModifiers[modifier] = matcherToArray(matcher);
    });
    return customModifiers;
}

/** The name of the modifiers that are used internally by DayPicker. */
var InternalModifier;
(function (InternalModifier) {
    InternalModifier["Outside"] = "outside";
    /** Name of the modifier applied to the disabled days, using the `disabled` prop. */
    InternalModifier["Disabled"] = "disabled";
    /** Name of the modifier applied to the selected days using the `selected` prop). */
    InternalModifier["Selected"] = "selected";
    /** Name of the modifier applied to the hidden days using the `hidden` prop). */
    InternalModifier["Hidden"] = "hidden";
    /** Name of the modifier applied to the day specified using the `today` prop). */
    InternalModifier["Today"] = "today";
    /** The modifier applied to the day starting a selected range, when in range selection mode.  */
    InternalModifier["RangeStart"] = "range_start";
    /** The modifier applied to the day ending a selected range, when in range selection mode.  */
    InternalModifier["RangeEnd"] = "range_end";
    /** The modifier applied to the days between the start and the end of a selected range, when in range selection mode.  */
    InternalModifier["RangeMiddle"] = "range_middle";
})(InternalModifier || (InternalModifier = {}));

var Selected = InternalModifier.Selected, Disabled = InternalModifier.Disabled, Hidden = InternalModifier.Hidden, Today = InternalModifier.Today, RangeEnd = InternalModifier.RangeEnd, RangeMiddle = InternalModifier.RangeMiddle, RangeStart = InternalModifier.RangeStart, Outside = InternalModifier.Outside;
/** Return the {@link InternalModifiers} from the DayPicker and select contexts. */
function getInternalModifiers(dayPicker, selectMultiple, selectRange) {
    var _a;
    var internalModifiers = (_a = {},
        _a[Selected] = matcherToArray(dayPicker.selected),
        _a[Disabled] = matcherToArray(dayPicker.disabled),
        _a[Hidden] = matcherToArray(dayPicker.hidden),
        _a[Today] = [dayPicker.today],
        _a[RangeEnd] = [],
        _a[RangeMiddle] = [],
        _a[RangeStart] = [],
        _a[Outside] = [],
        _a);
    if (dayPicker.fromDate) {
        internalModifiers[Disabled].push({ before: dayPicker.fromDate });
    }
    if (dayPicker.toDate) {
        internalModifiers[Disabled].push({ after: dayPicker.toDate });
    }
    if (isDayPickerMultiple(dayPicker)) {
        internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectMultiple.modifiers[Disabled]);
    }
    else if (isDayPickerRange(dayPicker)) {
        internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectRange.modifiers[Disabled]);
        internalModifiers[RangeStart] = selectRange.modifiers[RangeStart];
        internalModifiers[RangeMiddle] = selectRange.modifiers[RangeMiddle];
        internalModifiers[RangeEnd] = selectRange.modifiers[RangeEnd];
    }
    return internalModifiers;
}

/** The Modifiers context store the modifiers used in DayPicker. To access the value of this context, use {@link useModifiers}. */
var ModifiersContext = (0,react.createContext)(undefined);
/** Provide the value for the {@link ModifiersContext}. */
function ModifiersProvider(props) {
    var dayPicker = useDayPicker();
    var selectMultiple = useSelectMultiple();
    var selectRange = useSelectRange();
    var internalModifiers = getInternalModifiers(dayPicker, selectMultiple, selectRange);
    var customModifiers = getCustomModifiers(dayPicker.modifiers);
    var modifiers = __assign(__assign({}, internalModifiers), customModifiers);
    return (react_default().createElement(ModifiersContext.Provider, { value: modifiers }, props.children));
}
/**
 * Return the modifiers used by DayPicker.
 *
 * This hook is meant to be used inside internal or custom components.
 * Requires to be wrapped into {@link ModifiersProvider}.
 *
 */
function useModifiers() {
    var context = (0,react.useContext)(ModifiersContext);
    if (!context) {
        throw new Error('useModifiers must be used within a ModifiersProvider');
    }
    return context;
}

/** Returns true if `matcher` is of type {@link DateInterval}. */
function isDateInterval(matcher) {
    return Boolean(matcher &&
        typeof matcher === 'object' &&
        'before' in matcher &&
        'after' in matcher);
}
/** Returns true if `value` is a {@link DateRange} type. */
function isDateRange(value) {
    return Boolean(value && typeof value === 'object' && 'from' in value);
}
/** Returns true if `value` is of type {@link DateAfter}. */
function isDateAfterType(value) {
    return Boolean(value && typeof value === 'object' && 'after' in value);
}
/** Returns true if `value` is of type {@link DateBefore}. */
function isDateBeforeType(value) {
    return Boolean(value && typeof value === 'object' && 'before' in value);
}
/** Returns true if `value` is a {@link DayOfWeek} type. */
function isDayOfWeekType(value) {
    return Boolean(value && typeof value === 'object' && 'dayOfWeek' in value);
}

/** Return `true` whether `date` is inside `range`. */
function isDateInRange(date, range) {
    var _a;
    var from = range.from, to = range.to;
    if (!from) {
        return false;
    }
    if (!to && isSameDay(from, date)) {
        return true;
    }
    if (!to) {
        return false;
    }
    var isRangeInverted = differenceInCalendarDays_differenceInCalendarDays(to, from) < 0;
    if (isRangeInverted) {
        _a = [to, from], from = _a[0], to = _a[1];
    }
    var isInRange = differenceInCalendarDays_differenceInCalendarDays(date, from) >= 0 &&
        differenceInCalendarDays_differenceInCalendarDays(to, date) >= 0;
    return isInRange;
}

/** Returns true if `value` is a Date type. */
function isDateType(value) {
    return (0,isDate/* default */.Z)(value);
}
/** Returns true if `value` is an array of valid dates. */
function isArrayOfDates(value) {
    return Array.isArray(value) && value.every(isDate/* default */.Z);
}
/**
 * Returns whether a day matches against at least one of the given Matchers.
 *
 * ```
 * const day = new Date(2022, 5, 19);
 * const matcher1: DateRange = {
 *    from: new Date(2021, 12, 21),
 *    to: new Date(2021, 12, 30)
 * }
 * const matcher2: DateRange = {
 *    from: new Date(2022, 5, 1),
 *    to: new Date(2022, 5, 23)
 * }
 *
 * const isMatch(day, [matcher1, matcher2]); // true, since day is in the matcher1 range.
 * ```
 * */
function isMatch(day, matchers) {
    return matchers.some(function (matcher) {
        if (typeof matcher === 'boolean') {
            return matcher;
        }
        if (isDateType(matcher)) {
            return isSameDay(day, matcher);
        }
        if (isArrayOfDates(matcher)) {
            return matcher.includes(day);
        }
        if (isDateRange(matcher)) {
            return isDateInRange(day, matcher);
        }
        if (isDayOfWeekType(matcher)) {
            return matcher.dayOfWeek.includes(day.getDay());
        }
        if (isDateInterval(matcher)) {
            var diffBefore = differenceInCalendarDays_differenceInCalendarDays(matcher.before, day);
            var diffAfter = differenceInCalendarDays_differenceInCalendarDays(matcher.after, day);
            var isDayBefore = diffBefore > 0;
            var isDayAfter = diffAfter < 0;
            var isClosedInterval = isAfter(matcher.before, matcher.after);
            if (isClosedInterval) {
                return isDayAfter && isDayBefore;
            }
            else {
                return isDayBefore || isDayAfter;
            }
        }
        if (isDateAfterType(matcher)) {
            return differenceInCalendarDays_differenceInCalendarDays(day, matcher.after) > 0;
        }
        if (isDateBeforeType(matcher)) {
            return differenceInCalendarDays_differenceInCalendarDays(matcher.before, day) > 0;
        }
        if (typeof matcher === 'function') {
            return matcher(day);
        }
        return false;
    });
}

/** Return the active modifiers for the given day. */
function getActiveModifiers(day, 
/** The modifiers to match for the given date. */
modifiers, 
/** The month where the day is displayed, to add the "outside" modifiers.  */
displayMonth) {
    var matchedModifiers = Object.keys(modifiers).reduce(function (result, key) {
        var modifier = modifiers[key];
        if (isMatch(day, modifier)) {
            result.push(key);
        }
        return result;
    }, []);
    var activeModifiers = {};
    matchedModifiers.forEach(function (modifier) { return (activeModifiers[modifier] = true); });
    if (displayMonth && !isSameMonth(day, displayMonth)) {
        activeModifiers.outside = true;
    }
    return activeModifiers;
}

/**
 * Returns the day that should be the target of the focus when DayPicker is
 * rendered the first time.
 *
 * TODO: this function doesn't consider if the day is outside the month. We
 * implemented this check in `useDayRender` but it should probably go here. See
 * https://github.com/gpbl/react-day-picker/pull/1576
 */
function getInitialFocusTarget(displayMonths, modifiers) {
    var firstDayInMonth = startOfMonth(displayMonths[0]);
    var lastDayInMonth = (0,endOfMonth/* default */.Z)(displayMonths[displayMonths.length - 1]);
    // TODO: cleanup code
    var firstFocusableDay;
    var today;
    var date = firstDayInMonth;
    while (date <= lastDayInMonth) {
        var activeModifiers = getActiveModifiers(date, modifiers);
        var isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
        if (!isFocusable) {
            date = (0,addDays/* default */.Z)(date, 1);
            continue;
        }
        if (activeModifiers.selected) {
            return date;
        }
        if (activeModifiers.today && !today) {
            today = date;
        }
        if (!firstFocusableDay) {
            firstFocusableDay = date;
        }
        date = (0,addDays/* default */.Z)(date, 1);
    }
    if (today) {
        return today;
    }
    else {
        return firstFocusableDay;
    }
}

var MAX_RETRY = 365;
/** Return the next date to be focused. */
function getNextFocus(focusedDay, options) {
    var moveBy = options.moveBy, direction = options.direction, context = options.context, modifiers = options.modifiers, _a = options.retry, retry = _a === void 0 ? { count: 0, lastFocused: focusedDay } : _a;
    var weekStartsOn = context.weekStartsOn, fromDate = context.fromDate, toDate = context.toDate, locale = context.locale;
    var moveFns = {
        day: addDays/* default */.Z,
        week: addWeeks,
        month: addMonths,
        year: addYears,
        startOfWeek: function (date) {
            return context.ISOWeek
                ? startOfISOWeek(date)
                : startOfWeek(date, { locale: locale, weekStartsOn: weekStartsOn });
        },
        endOfWeek: function (date) {
            return context.ISOWeek
                ? endOfISOWeek(date)
                : endOfWeek(date, { locale: locale, weekStartsOn: weekStartsOn });
        }
    };
    var newFocusedDay = moveFns[moveBy](focusedDay, direction === 'after' ? 1 : -1);
    if (direction === 'before' && fromDate) {
        newFocusedDay = max([fromDate, newFocusedDay]);
    }
    else if (direction === 'after' && toDate) {
        newFocusedDay = min([toDate, newFocusedDay]);
    }
    var isFocusable = true;
    if (modifiers) {
        var activeModifiers = getActiveModifiers(newFocusedDay, modifiers);
        isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
    }
    if (isFocusable) {
        return newFocusedDay;
    }
    else {
        if (retry.count > MAX_RETRY) {
            return retry.lastFocused;
        }
        return getNextFocus(newFocusedDay, {
            moveBy: moveBy,
            direction: direction,
            context: context,
            modifiers: modifiers,
            retry: __assign(__assign({}, retry), { count: retry.count + 1 })
        });
    }
}

/**
 * The Focus context shares details about the focused day for the keyboard
 *
 * Access this context from the {@link useFocusContext} hook.
 */
var FocusContext = (0,react.createContext)(undefined);
/** The provider for the {@link FocusContext}. */
function FocusProvider(props) {
    var navigation = useNavigation();
    var modifiers = useModifiers();
    var _a = (0,react.useState)(), focusedDay = _a[0], setFocusedDay = _a[1];
    var _b = (0,react.useState)(), lastFocused = _b[0], setLastFocused = _b[1];
    var initialFocusTarget = getInitialFocusTarget(navigation.displayMonths, modifiers);
    // TODO: cleanup and test obscure code below
    var focusTarget = (focusedDay !== null && focusedDay !== void 0 ? focusedDay : (lastFocused && navigation.isDateDisplayed(lastFocused)))
        ? lastFocused
        : initialFocusTarget;
    var blur = function () {
        setLastFocused(focusedDay);
        setFocusedDay(undefined);
    };
    var focus = function (date) {
        setFocusedDay(date);
    };
    var context = useDayPicker();
    var moveFocus = function (moveBy, direction) {
        if (!focusedDay)
            return;
        var nextFocused = getNextFocus(focusedDay, {
            moveBy: moveBy,
            direction: direction,
            context: context,
            modifiers: modifiers
        });
        if (isSameDay(focusedDay, nextFocused))
            return undefined;
        navigation.goToDate(nextFocused, focusedDay);
        focus(nextFocused);
    };
    var value = {
        focusedDay: focusedDay,
        focusTarget: focusTarget,
        blur: blur,
        focus: focus,
        focusDayAfter: function () { return moveFocus('day', 'after'); },
        focusDayBefore: function () { return moveFocus('day', 'before'); },
        focusWeekAfter: function () { return moveFocus('week', 'after'); },
        focusWeekBefore: function () { return moveFocus('week', 'before'); },
        focusMonthBefore: function () { return moveFocus('month', 'before'); },
        focusMonthAfter: function () { return moveFocus('month', 'after'); },
        focusYearBefore: function () { return moveFocus('year', 'before'); },
        focusYearAfter: function () { return moveFocus('year', 'after'); },
        focusStartOfWeek: function () { return moveFocus('startOfWeek', 'before'); },
        focusEndOfWeek: function () { return moveFocus('endOfWeek', 'after'); }
    };
    return (react_default().createElement(FocusContext.Provider, { value: value }, props.children));
}
/**
 * Hook to access the {@link FocusContextValue}. Use this hook to handle the
 * focus state of the elements.
 *
 * This hook is meant to be used inside internal or custom components.
 */
function useFocusContext() {
    var context = (0,react.useContext)(FocusContext);
    if (!context) {
        throw new Error('useFocusContext must be used within a FocusProvider');
    }
    return context;
}

/**
 * Return the active modifiers for the specified day.
 *
 * This hook is meant to be used inside internal or custom components.
 *
 * @param day
 * @param displayMonth
 */
function useActiveModifiers(day, 
/**
 * The month where the date is displayed. If not the same as `date`, the day
 * is an "outside day".
 */
displayMonth) {
    var modifiers = useModifiers();
    var activeModifiers = getActiveModifiers(day, modifiers, displayMonth);
    return activeModifiers;
}

/**
 * The SelectSingle context shares details about the selected days when in
 * single selection mode.
 *
 * Access this context from the {@link useSelectSingle} hook.
 */
var SelectSingleContext = (0,react.createContext)(undefined);
/** Provides the values for the {@link SelectSingleProvider}. */
function SelectSingleProvider(props) {
    if (!isDayPickerSingle(props.initialProps)) {
        var emptyContextValue = {
            selected: undefined
        };
        return (react_default().createElement(SelectSingleContext.Provider, { value: emptyContextValue }, props.children));
    }
    return (react_default().createElement(SelectSingleProviderInternal, { initialProps: props.initialProps, children: props.children }));
}
function SelectSingleProviderInternal(_a) {
    var initialProps = _a.initialProps, children = _a.children;
    var onDayClick = function (day, activeModifiers, e) {
        var _a, _b, _c;
        (_a = initialProps.onDayClick) === null || _a === void 0 ? void 0 : _a.call(initialProps, day, activeModifiers, e);
        if (activeModifiers.selected && !initialProps.required) {
            (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, undefined, day, activeModifiers, e);
            return;
        }
        (_c = initialProps.onSelect) === null || _c === void 0 ? void 0 : _c.call(initialProps, day, day, activeModifiers, e);
    };
    var contextValue = {
        selected: initialProps.selected,
        onDayClick: onDayClick
    };
    return (react_default().createElement(SelectSingleContext.Provider, { value: contextValue }, children));
}
/**
 * Hook to access the {@link SelectSingleContextValue}.
 *
 * This hook is meant to be used inside internal or custom components.
 */
function useSelectSingle() {
    var context = (0,react.useContext)(SelectSingleContext);
    if (!context) {
        throw new Error('useSelectSingle must be used within a SelectSingleProvider');
    }
    return context;
}

/**
 * This hook returns details about the content to render in the day cell.
 *
 *
 * When a day cell is rendered in the table, DayPicker can either:
 *
 * - render nothing: when the day is outside the month or has matched the
 *   "hidden" modifier.
 * - render a button when `onDayClick` or a selection mode is set.
 * - render a non-interactive element: when no selection mode is set, the day
 *   cell shouldn’t respond to any interaction. DayPicker should render a `div`
 *   or a `span`.
 *
 * ### Usage
 *
 * Use this hook to customize the behavior of the {@link Day} component. Create a
 * new `Day` component using this hook and pass it to the `components` prop.
 * The source of {@link Day} can be a good starting point.
 *
 */
function useDayEventHandlers(date, activeModifiers) {
    var dayPicker = useDayPicker();
    var single = useSelectSingle();
    var multiple = useSelectMultiple();
    var range = useSelectRange();
    var _a = useFocusContext(), focusDayAfter = _a.focusDayAfter, focusDayBefore = _a.focusDayBefore, focusWeekAfter = _a.focusWeekAfter, focusWeekBefore = _a.focusWeekBefore, blur = _a.blur, focus = _a.focus, focusMonthBefore = _a.focusMonthBefore, focusMonthAfter = _a.focusMonthAfter, focusYearBefore = _a.focusYearBefore, focusYearAfter = _a.focusYearAfter, focusStartOfWeek = _a.focusStartOfWeek, focusEndOfWeek = _a.focusEndOfWeek;
    var onClick = function (e) {
        var _a, _b, _c, _d;
        if (isDayPickerSingle(dayPicker)) {
            (_a = single.onDayClick) === null || _a === void 0 ? void 0 : _a.call(single, date, activeModifiers, e);
        }
        else if (isDayPickerMultiple(dayPicker)) {
            (_b = multiple.onDayClick) === null || _b === void 0 ? void 0 : _b.call(multiple, date, activeModifiers, e);
        }
        else if (isDayPickerRange(dayPicker)) {
            (_c = range.onDayClick) === null || _c === void 0 ? void 0 : _c.call(range, date, activeModifiers, e);
        }
        else {
            (_d = dayPicker.onDayClick) === null || _d === void 0 ? void 0 : _d.call(dayPicker, date, activeModifiers, e);
        }
    };
    var onFocus = function (e) {
        var _a;
        focus(date);
        (_a = dayPicker.onDayFocus) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onBlur = function (e) {
        var _a;
        blur();
        (_a = dayPicker.onDayBlur) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onMouseEnter = function (e) {
        var _a;
        (_a = dayPicker.onDayMouseEnter) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onMouseLeave = function (e) {
        var _a;
        (_a = dayPicker.onDayMouseLeave) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onPointerEnter = function (e) {
        var _a;
        (_a = dayPicker.onDayPointerEnter) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onPointerLeave = function (e) {
        var _a;
        (_a = dayPicker.onDayPointerLeave) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onTouchCancel = function (e) {
        var _a;
        (_a = dayPicker.onDayTouchCancel) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onTouchEnd = function (e) {
        var _a;
        (_a = dayPicker.onDayTouchEnd) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onTouchMove = function (e) {
        var _a;
        (_a = dayPicker.onDayTouchMove) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onTouchStart = function (e) {
        var _a;
        (_a = dayPicker.onDayTouchStart) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onKeyUp = function (e) {
        var _a;
        (_a = dayPicker.onDayKeyUp) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var onKeyDown = function (e) {
        var _a;
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                dayPicker.dir === 'rtl' ? focusDayAfter() : focusDayBefore();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                dayPicker.dir === 'rtl' ? focusDayBefore() : focusDayAfter();
                break;
            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                focusWeekAfter();
                break;
            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                focusWeekBefore();
                break;
            case 'PageUp':
                e.preventDefault();
                e.stopPropagation();
                e.shiftKey ? focusYearBefore() : focusMonthBefore();
                break;
            case 'PageDown':
                e.preventDefault();
                e.stopPropagation();
                e.shiftKey ? focusYearAfter() : focusMonthAfter();
                break;
            case 'Home':
                e.preventDefault();
                e.stopPropagation();
                focusStartOfWeek();
                break;
            case 'End':
                e.preventDefault();
                e.stopPropagation();
                focusEndOfWeek();
                break;
        }
        (_a = dayPicker.onDayKeyDown) === null || _a === void 0 ? void 0 : _a.call(dayPicker, date, activeModifiers, e);
    };
    var eventHandlers = {
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onPointerLeave: onPointerLeave,
        onTouchCancel: onTouchCancel,
        onTouchEnd: onTouchEnd,
        onTouchMove: onTouchMove,
        onTouchStart: onTouchStart
    };
    return eventHandlers;
}

/**
 * Return the current selected days when DayPicker is in selection mode. Days
 * selected by the custom selection mode are not returned.
 *
 * This hook is meant to be used inside internal or custom components.
 *
 */
function useSelectedDays() {
    var dayPicker = useDayPicker();
    var single = useSelectSingle();
    var multiple = useSelectMultiple();
    var range = useSelectRange();
    var selectedDays = isDayPickerSingle(dayPicker)
        ? single.selected
        : isDayPickerMultiple(dayPicker)
            ? multiple.selected
            : isDayPickerRange(dayPicker)
                ? range.selected
                : undefined;
    return selectedDays;
}

function isInternalModifier(modifier) {
    return Object.values(InternalModifier).includes(modifier);
}
/**
 * Return the class names for the Day element, according to the given active
 * modifiers.
 *
 * Custom class names are set via `modifiersClassNames` or `classNames`,
 * where the first have the precedence.
 */
function getDayClassNames(dayPicker, activeModifiers) {
    var classNames = [dayPicker.classNames.day];
    Object.keys(activeModifiers).forEach(function (modifier) {
        var customClassName = dayPicker.modifiersClassNames[modifier];
        if (customClassName) {
            classNames.push(customClassName);
        }
        else if (isInternalModifier(modifier)) {
            var internalClassName = dayPicker.classNames["day_".concat(modifier)];
            if (internalClassName) {
                classNames.push(internalClassName);
            }
        }
    });
    return classNames;
}

/** Return the style for the Day element, according to the given active modifiers. */
function getDayStyle(dayPicker, activeModifiers) {
    var style = __assign({}, dayPicker.styles.day);
    Object.keys(activeModifiers).forEach(function (modifier) {
        var _a;
        style = __assign(__assign({}, style), (_a = dayPicker.modifiersStyles) === null || _a === void 0 ? void 0 : _a[modifier]);
    });
    return style;
}

/**
 * Return props and data used to render the {@link Day} component.
 *
 * Use this hook when creating a component to replace the built-in `Day`
 * component.
 */
function useDayRender(
/** The date to render. */
day, 
/** The month where the date is displayed (if not the same as `date`, it means it is an "outside" day). */
displayMonth, 
/** A ref to the button element that will be target of focus when rendered (if required). */
buttonRef) {
    var _a;
    var _b, _c;
    var dayPicker = useDayPicker();
    var focusContext = useFocusContext();
    var activeModifiers = useActiveModifiers(day, displayMonth);
    var eventHandlers = useDayEventHandlers(day, activeModifiers);
    var selectedDays = useSelectedDays();
    var isButton = Boolean(dayPicker.onDayClick || dayPicker.mode !== 'default');
    // Focus the button if the day is focused according to the focus context
    (0,react.useEffect)(function () {
        var _a;
        if (activeModifiers.outside)
            return;
        if (!focusContext.focusedDay)
            return;
        if (!isButton)
            return;
        if (isSameDay(focusContext.focusedDay, day)) {
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [
        focusContext.focusedDay,
        day,
        buttonRef,
        isButton,
        activeModifiers.outside
    ]);
    var className = getDayClassNames(dayPicker, activeModifiers).join(' ');
    var style = getDayStyle(dayPicker, activeModifiers);
    var isHidden = Boolean((activeModifiers.outside && !dayPicker.showOutsideDays) ||
        activeModifiers.hidden);
    var DayContentComponent = (_c = (_b = dayPicker.components) === null || _b === void 0 ? void 0 : _b.DayContent) !== null && _c !== void 0 ? _c : DayContent;
    var children = (react_default().createElement(DayContentComponent, { date: day, displayMonth: displayMonth, activeModifiers: activeModifiers }));
    var divProps = {
        style: style,
        className: className,
        children: children,
        role: 'gridcell'
    };
    var isFocusTarget = focusContext.focusTarget &&
        isSameDay(focusContext.focusTarget, day) &&
        !activeModifiers.outside;
    var isFocused = focusContext.focusedDay && isSameDay(focusContext.focusedDay, day);
    var buttonProps = __assign(__assign(__assign({}, divProps), (_a = { disabled: activeModifiers.disabled, role: 'gridcell' }, _a['aria-selected'] = activeModifiers.selected, _a.tabIndex = isFocused || isFocusTarget ? 0 : -1, _a)), eventHandlers);
    var dayRender = {
        isButton: isButton,
        isHidden: isHidden,
        activeModifiers: activeModifiers,
        selectedDays: selectedDays,
        buttonProps: buttonProps,
        divProps: divProps
    };
    return dayRender;
}

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
function Day(props) {
    var buttonRef = (0,react.useRef)(null);
    var dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
    if (dayRender.isHidden) {
        return react_default().createElement("div", { role: "gridcell" });
    }
    if (!dayRender.isButton) {
        return react_default().createElement("div", __assign({}, dayRender.divProps));
    }
    return react_default().createElement(Button, __assign({ name: "day", ref: buttonRef }, dayRender.buttonProps));
}

/**
 * Render the week number element. If `onWeekNumberClick` is passed to DayPicker, it
 * renders a button, otherwise a span element.
 */
function WeekNumber(props) {
    var weekNumber = props.number, dates = props.dates;
    var _a = useDayPicker(), onWeekNumberClick = _a.onWeekNumberClick, styles = _a.styles, classNames = _a.classNames, locale = _a.locale, labelWeekNumber = _a.labels.labelWeekNumber, formatWeekNumber = _a.formatters.formatWeekNumber;
    var content = formatWeekNumber(Number(weekNumber), { locale: locale });
    if (!onWeekNumberClick) {
        return (react_default().createElement("span", { className: classNames.weeknumber, style: styles.weeknumber }, content));
    }
    var label = labelWeekNumber(Number(weekNumber), { locale: locale });
    var handleClick = function (e) {
        onWeekNumberClick(weekNumber, dates, e);
    };
    return (react_default().createElement(Button, { name: "week-number", "aria-label": label, className: classNames.weeknumber, style: styles.weeknumber, onClick: handleClick }, content));
}

/** Render a row in the calendar, with the days and the week number. */
function Row(props) {
    var _a, _b;
    var _c = useDayPicker(), styles = _c.styles, classNames = _c.classNames, showWeekNumber = _c.showWeekNumber, components = _c.components;
    var DayComponent = (_a = components === null || components === void 0 ? void 0 : components.Day) !== null && _a !== void 0 ? _a : Day;
    var WeeknumberComponent = (_b = components === null || components === void 0 ? void 0 : components.WeekNumber) !== null && _b !== void 0 ? _b : WeekNumber;
    var weekNumberCell;
    if (showWeekNumber) {
        weekNumberCell = (react_default().createElement("td", { className: classNames.cell, style: styles.cell },
            react_default().createElement(WeeknumberComponent, { number: props.weekNumber, dates: props.dates })));
    }
    return (react_default().createElement("tr", { className: classNames.row, style: styles.row },
        weekNumberCell,
        props.dates.map(function (date) { return (react_default().createElement("td", { className: classNames.cell, style: styles.cell, key: getUnixTime(date), role: "presentation" },
            react_default().createElement(DayComponent, { displayMonth: props.displayMonth, date: date }))); })));
}

/** Return the weeks between two dates.  */
function daysToMonthWeeks(fromDate, toDate, options) {
    var toWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek)
        ? endOfISOWeek(toDate)
        : endOfWeek(toDate, options);
    var fromWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek)
        ? startOfISOWeek(fromDate)
        : startOfWeek(fromDate, options);
    var nOfDays = differenceInCalendarDays_differenceInCalendarDays(toWeek, fromWeek);
    var days = [];
    for (var i = 0; i <= nOfDays; i++) {
        days.push((0,addDays/* default */.Z)(fromWeek, i));
    }
    var weeksInMonth = days.reduce(function (result, date) {
        var weekNumber = (options === null || options === void 0 ? void 0 : options.ISOWeek)
            ? getISOWeek(date)
            : getWeek(date, options);
        var existingWeek = result.find(function (value) { return value.weekNumber === weekNumber; });
        if (existingWeek) {
            existingWeek.dates.push(date);
            return result;
        }
        result.push({
            weekNumber: weekNumber,
            dates: [date]
        });
        return result;
    }, []);
    return weeksInMonth;
}

/**
 * Return the weeks belonging to the given month, adding the "outside days" to
 * the first and last week.
 */
function getMonthWeeks(month, options) {
    var weeksInMonth = daysToMonthWeeks(startOfMonth(month), (0,endOfMonth/* default */.Z)(month), options);
    if (options === null || options === void 0 ? void 0 : options.useFixedWeeks) {
        // Add extra weeks to the month, up to 6 weeks
        var nrOfMonthWeeks = getWeeksInMonth(month, options);
        if (nrOfMonthWeeks < 6) {
            var lastWeek = weeksInMonth[weeksInMonth.length - 1];
            var lastDate = lastWeek.dates[lastWeek.dates.length - 1];
            var toDate = addWeeks(lastDate, 6 - nrOfMonthWeeks);
            var extraWeeks = daysToMonthWeeks(addWeeks(lastDate, 1), toDate, options);
            weeksInMonth.push.apply(weeksInMonth, extraWeeks);
        }
    }
    return weeksInMonth;
}

/** Render the table with the calendar. */
function Table(props) {
    var _a, _b, _c;
    var _d = useDayPicker(), locale = _d.locale, classNames = _d.classNames, styles = _d.styles, hideHead = _d.hideHead, fixedWeeks = _d.fixedWeeks, components = _d.components, weekStartsOn = _d.weekStartsOn, firstWeekContainsDate = _d.firstWeekContainsDate, ISOWeek = _d.ISOWeek;
    var weeks = getMonthWeeks(props.displayMonth, {
        useFixedWeeks: Boolean(fixedWeeks),
        ISOWeek: ISOWeek,
        locale: locale,
        weekStartsOn: weekStartsOn,
        firstWeekContainsDate: firstWeekContainsDate
    });
    var HeadComponent = (_a = components === null || components === void 0 ? void 0 : components.Head) !== null && _a !== void 0 ? _a : Head;
    var RowComponent = (_b = components === null || components === void 0 ? void 0 : components.Row) !== null && _b !== void 0 ? _b : Row;
    var FooterComponent = (_c = components === null || components === void 0 ? void 0 : components.Footer) !== null && _c !== void 0 ? _c : Footer;
    return (react_default().createElement("table", { className: classNames.table, style: styles.table, role: "grid", "aria-labelledby": props['aria-labelledby'] },
        !hideHead && react_default().createElement(HeadComponent, null),
        react_default().createElement("tbody", { className: classNames.tbody, style: styles.tbody, role: "rowgroup" }, weeks.map(function (week) { return (react_default().createElement(RowComponent, { displayMonth: props.displayMonth, key: week.weekNumber, dates: week.dates, weekNumber: week.weekNumber })); })),
        react_default().createElement(FooterComponent, { displayMonth: props.displayMonth })));
}

/*
The MIT License (MIT)

Copyright (c) 2018-present, React Training LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function canUseDOM() {
    return !!(typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement);
}
/**
 * React currently throws a warning when using useLayoutEffect on the server. To
 * get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */
var useIsomorphicLayoutEffect = canUseDOM()
    ? react.useLayoutEffect
    : react.useEffect;
var serverHandoffComplete = false;
var id = 0;
function genId() {
    return "react-day-picker-".concat(++id);
}
function useId(providedId) {
    // TODO: Remove error flag when updating internal deps to React 18. None of
    // our tricks will play well with concurrent rendering anyway.
    var _a;
    // If this instance isn't part of the initial render, we don't have to do the
    // double render/patch-up dance. We can just generate the ID and return it.
    var initialId = providedId !== null && providedId !== void 0 ? providedId : (serverHandoffComplete ? genId() : null);
    var _b = react.useState(initialId), id = _b[0], setId = _b[1];
    useIsomorphicLayoutEffect(function () {
        if (id === null) {
            // Patch the ID after render. We do this in `useLayoutEffect` to avoid any
            // rendering flicker, though it'll make the first render slower (unlikely
            // to matter, but you're welcome to measure your app and let us know if
            // it's a problem).
            setId(genId());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    react.useEffect(function () {
        if (serverHandoffComplete === false) {
            // Flag all future uses of `useId` to skip the update dance. This is in
            // `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
            // accidentally bail out of the patch-up dance prematurely.
            serverHandoffComplete = true;
        }
    }, []);
    return (_a = providedId !== null && providedId !== void 0 ? providedId : id) !== null && _a !== void 0 ? _a : undefined;
}

/** Render a month. */
function Month(props) {
    var _a;
    var _b;
    var dayPicker = useDayPicker();
    var dir = dayPicker.dir, classNames = dayPicker.classNames, styles = dayPicker.styles, components = dayPicker.components;
    var displayMonths = useNavigation().displayMonths;
    var captionId = useId(dayPicker.id ? "".concat(dayPicker.id, "-").concat(props.displayIndex) : undefined);
    var className = [classNames.month];
    var style = styles.month;
    var isStart = props.displayIndex === 0;
    var isEnd = props.displayIndex === displayMonths.length - 1;
    var isCenter = !isStart && !isEnd;
    if (dir === 'rtl') {
        _a = [isStart, isEnd], isEnd = _a[0], isStart = _a[1];
    }
    if (isStart) {
        className.push(classNames.caption_start);
        style = __assign(__assign({}, style), styles.caption_start);
    }
    if (isEnd) {
        className.push(classNames.caption_end);
        style = __assign(__assign({}, style), styles.caption_end);
    }
    if (isCenter) {
        className.push(classNames.caption_between);
        style = __assign(__assign({}, style), styles.caption_between);
    }
    var CaptionComponent = (_b = components === null || components === void 0 ? void 0 : components.Caption) !== null && _b !== void 0 ? _b : Caption;
    return (react_default().createElement("div", { key: props.displayIndex, className: className.join(' '), style: style },
        react_default().createElement(CaptionComponent, { id: captionId, displayMonth: props.displayMonth }),
        react_default().createElement(Table, { "aria-labelledby": captionId, displayMonth: props.displayMonth })));
}

/** Render the container with the months according to the number of months to display. */
function Root(_a) {
    var initialProps = _a.initialProps;
    var dayPicker = useDayPicker();
    var focusContext = useFocusContext();
    var navigation = useNavigation();
    var _b = (0,react.useState)(false), hasInitialFocus = _b[0], setHasInitialFocus = _b[1];
    // Focus the focus target when initialFocus is passed in
    (0,react.useEffect)(function () {
        if (!dayPicker.initialFocus)
            return;
        if (!focusContext.focusTarget)
            return;
        if (hasInitialFocus)
            return;
        focusContext.focus(focusContext.focusTarget);
        setHasInitialFocus(true);
    }, [
        dayPicker.initialFocus,
        hasInitialFocus,
        focusContext.focus,
        focusContext.focusTarget,
        focusContext
    ]);
    // Apply classnames according to props
    var classNames = [dayPicker.classNames.root, dayPicker.className];
    if (dayPicker.numberOfMonths > 1) {
        classNames.push(dayPicker.classNames.multiple_months);
    }
    if (dayPicker.showWeekNumber) {
        classNames.push(dayPicker.classNames.with_weeknumber);
    }
    var style = __assign(__assign({}, dayPicker.styles.root), dayPicker.style);
    var dataAttributes = Object.keys(initialProps)
        .filter(function (key) { return key.startsWith('data-'); })
        .reduce(function (attrs, key) {
        var _a;
        return __assign(__assign({}, attrs), (_a = {}, _a[key] = initialProps[key], _a));
    }, {});
    return (react_default().createElement("div", __assign({ className: classNames.join(' '), style: style, dir: dayPicker.dir, id: dayPicker.id }, dataAttributes),
        react_default().createElement("div", { className: dayPicker.classNames.months, style: dayPicker.styles.months }, navigation.displayMonths.map(function (month, i) { return (react_default().createElement(Month, { key: i, displayIndex: i, displayMonth: month })); }))));
}

/** Provide the value for all the context providers. */
function RootProvider(props) {
    var children = props.children, initialProps = __rest(props, ["children"]);
    return (react_default().createElement(DayPickerProvider, { initialProps: initialProps },
        react_default().createElement(NavigationProvider, null,
            react_default().createElement(SelectSingleProvider, { initialProps: initialProps },
                react_default().createElement(SelectMultipleProvider, { initialProps: initialProps },
                    react_default().createElement(SelectRangeProvider, { initialProps: initialProps },
                        react_default().createElement(ModifiersProvider, null,
                            react_default().createElement(FocusProvider, null, children))))))));
}

/**
 * DayPicker render a date picker component to let users pick dates from a
 * calendar. See http://react-day-picker.js.org for updated documentation and
 * examples.
 *
 * ### Customization
 *
 * DayPicker offers different customization props. For example,
 *
 * - show multiple months using `numberOfMonths`
 * - display a dropdown to navigate the months via `captionLayout`
 * - display the week numbers with `showWeekNumbers`
 * - disable or hide days with `disabled` or `hidden`
 *
 * ### Controlling the months
 *
 * Change the initially displayed month using the `defaultMonth` prop. The
 * displayed months are controlled by DayPicker and stored in its internal
 * state. To control the months yourself, use `month` instead of `defaultMonth`
 * and use the `onMonthChange` event to set it.
 *
 * To limit the months the user can navigate to, use
 * `fromDate`/`fromMonth`/`fromYear` or `toDate`/`toMonth`/`toYear`.
 *
 * ### Selection modes
 *
 * DayPicker supports different selection mode that can be toggled using the
 * `mode` prop:
 *
 * - `mode="single"`: only one day can be selected. Use `required` to make the
 *   selection required. Use the `onSelect` event handler to get the selected
 *   days.
 * - `mode="multiple"`: users can select one or more days. Limit the amount of
 *   days that can be selected with the `min` or the `max` props.
 * - `mode="range"`: users can select a range of days. Limit the amount of days
 *   in the range with the `min` or the `max` props.
 * - `mode="default"` (default): the built-in selections are disabled. Implement
 *   your own selection mode with `onDayClick`.
 *
 * The selection modes should cover the most common use cases. In case you
 * need a more refined way of selecting days, use `mode="default"`. Use the
 * `selected` props and add the day event handlers to add/remove days from the
 * selection.
 *
 * ### Modifiers
 *
 * A _modifier_ represents different styles or states for the days displayed in
 * the calendar (like "selected" or "disabled"). Define custom modifiers using
 * the `modifiers` prop.
 *
 * ### Formatters and custom component
 *
 * You can customize how the content is displayed in the date picker by using
 * either the formatters or replacing the internal components.
 *
 * For the most common cases you want to use the `formatters` prop to change how
 * the content is formatted in the calendar. Use the `components` prop to
 * replace the internal components, like the navigation icons.
 *
 * ### Styling
 *
 * DayPicker comes with a default, basic style in `react-day-picker/style` – use
 * it as template for your own style.
 *
 * If you are using CSS modules, pass the imported styles object the
 * `classNames` props.
 *
 * You can also style the elements via inline styles using the `styles` prop.
 *
 * ### Form fields
 *
 * If you need to bind the date picker to a form field, you can use the
 * `useInput` hooks for a basic behavior. See the `useInput` source as an
 * example to bind the date picker with form fields.
 *
 * ### Localization
 *
 * To localize DayPicker, import the locale from `date-fns` package and use the
 * `locale` prop.
 *
 * For example, to use Spanish locale:
 *
 * ```
 * import { es } from 'date-fns/locale';
 * <DayPicker locale={es} />
 * ```
 */
function DayPicker(props) {
    return (react_default().createElement(RootProvider, __assign({}, props),
        react_default().createElement(Root, { initialProps: props })));
}

/** @private */
function isValidDate(day) {
    return !isNaN(day.getTime());
}

/** Return props and setters for binding an input field to DayPicker. */
function useInput(options) {
    if (options === void 0) { options = {}; }
    var _a = options.locale, locale = _a === void 0 ? enUS : _a, required = options.required, _b = options.format, format$1 = _b === void 0 ? 'PP' : _b, defaultSelected = options.defaultSelected, _c = options.today, today = _c === void 0 ? new Date() : _c;
    var _d = parseFromToProps(options), fromDate = _d.fromDate, toDate = _d.toDate;
    // Shortcut to the DateFns functions
    var parseValue = function (value) { return parse(value, format$1, today, { locale: locale }); };
    // Initialize states
    var _e = useState(defaultSelected !== null && defaultSelected !== void 0 ? defaultSelected : today), month = _e[0], setMonth = _e[1];
    var _f = useState(defaultSelected), selectedDay = _f[0], setSelectedDay = _f[1];
    var defaultInputValue = defaultSelected
        ? format(defaultSelected, format$1, { locale: locale })
        : '';
    var _g = useState(defaultInputValue), inputValue = _g[0], setInputValue = _g[1];
    var reset = function () {
        setSelectedDay(defaultSelected);
        setMonth(defaultSelected !== null && defaultSelected !== void 0 ? defaultSelected : today);
        setInputValue(defaultInputValue !== null && defaultInputValue !== void 0 ? defaultInputValue : '');
    };
    var setSelected = function (date) {
        setSelectedDay(date);
        setMonth(date !== null && date !== void 0 ? date : today);
        setInputValue(date ? format(date, format$1, { locale: locale }) : '');
    };
    var handleDayClick = function (day, _a) {
        var selected = _a.selected;
        if (!required && selected) {
            setSelectedDay(undefined);
            setInputValue('');
            return;
        }
        setSelectedDay(day);
        setInputValue(day ? format(day, format$1, { locale: locale }) : '');
    };
    var handleMonthChange = function (month) {
        setMonth(month);
    };
    // When changing the input field, save its value in state and check if the
    // string is a valid date. If it is a valid day, set it as selected and update
    // the calendar’s month.
    var handleChange = function (e) {
        setInputValue(e.target.value);
        var day = parseValue(e.target.value);
        var isBefore = fromDate && differenceInCalendarDays(fromDate, day) > 0;
        var isAfter = toDate && differenceInCalendarDays(day, toDate) > 0;
        if (!isValidDate(day) || isBefore || isAfter) {
            setSelectedDay(undefined);
            return;
        }
        setSelectedDay(day);
        setMonth(day);
    };
    // Special case for _required_ fields: on blur, if the value of the input is not
    // a valid date, reset the calendar and the input value.
    var handleBlur = function (e) {
        var day = parseValue(e.target.value);
        if (!isValidDate(day)) {
            reset();
        }
    };
    // When focusing, make sure DayPicker visualizes the month of the date in the
    // input field.
    var handleFocus = function (e) {
        if (!e.target.value) {
            reset();
            return;
        }
        var day = parseValue(e.target.value);
        if (isValidDate(day)) {
            setMonth(day);
        }
    };
    var dayPickerProps = {
        month: month,
        onDayClick: handleDayClick,
        onMonthChange: handleMonthChange,
        selected: selectedDay,
        locale: locale,
        fromDate: fromDate,
        toDate: toDate,
        today: today
    };
    var inputProps = {
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        value: inputValue,
        placeholder: format(new Date(), format$1, { locale: locale })
    };
    return { dayPickerProps: dayPickerProps, inputProps: inputProps, reset: reset, setSelected: setSelected };
}

/** Returns true when the props are of type {@link DayPickerDefaultProps}. */
function isDayPickerDefault(props) {
    return props.mode === undefined || props.mode === 'default';
}


//# sourceMappingURL=index.esm.js.map


/***/ })

};
;