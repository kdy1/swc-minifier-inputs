"use strict";
exports.id = 5604;
exports.ids = [5604];
exports.modules = {

/***/ 415140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Link = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Link", [
    [
        "path",
        {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo"
        }
    ],
    [
        "path",
        {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67"
        }
    ]
]);
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 809391:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891616);
// packages/react/use-previous/src/usePrevious.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 828258:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* unused harmony export setDefaultOptions */
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}


/***/ }),

/***/ 901186:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452857);

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
    const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}


/***/ }),

/***/ 748607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462523);

function normalizeDates(context, ...dates) {
    const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__/* .constructFrom */ .w.bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}


/***/ }),

/***/ 325347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F6: () => (/* binding */ minutesInDay),
/* harmony export */   Nw: () => (/* binding */ minutesInMonth),
/* harmony export */   _P: () => (/* binding */ constructFromSymbol),
/* harmony export */   my: () => (/* binding */ millisecondsInWeek),
/* harmony export */   w4: () => (/* binding */ millisecondsInDay)
/* harmony export */ });
/* unused harmony exports daysInWeek, daysInYear, maxTime, minTime, millisecondsInMinute, millisecondsInHour, millisecondsInSecond, minutesInYear, minutesInHour, monthsInQuarter, monthsInYear, quartersInYear, secondsInHour, secondsInMinute, secondsInDay, secondsInWeek, secondsInYear, secondsInMonth, secondsInQuarter */
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ const daysInWeek = 7;
/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */ const daysInYear = 365.2425;
/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */ const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */ const minTime = -maxTime;
/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */ const millisecondsInWeek = 604800000;
/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */ const millisecondsInDay = 86400000;
/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */ const millisecondsInMinute = 60000;
/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */ const millisecondsInHour = 3600000;
/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */ const millisecondsInSecond = 1000;
/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */ const minutesInYear = 525600;
/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */ const minutesInMonth = 43200;
/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */ const minutesInDay = 1440;
/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */ const minutesInHour = 60;
/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */ const monthsInQuarter = 3;
/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */ const monthsInYear = 12;
/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */ const quartersInYear = 4;
/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */ const secondsInHour = 3600;
/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */ const secondsInMinute = 60;
/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */ const secondsInDay = secondsInHour * 24;
/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */ const secondsInWeek = secondsInDay * 7;
/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */ const secondsInYear = secondsInDay * daysInYear;
/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */ const secondsInMonth = secondsInYear / 12;
/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */ const secondsInQuarter = secondsInMonth * 3;
/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */ const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ 462523:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ constructFrom)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325347);

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */ function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .constructFromSymbol */ ._P in date) return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .constructFromSymbol */ ._P](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (constructFrom)));


/***/ }),

/***/ 48061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(748607);

/**
 * The {@link differenceInCalendarMonths} function options.
 */ /**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__/* .normalizeDates */ .x)(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (differenceInCalendarMonths)));


/***/ }),

/***/ 173098:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452857);

/**
 * The {@link endOfMonth} function options.
 */ /**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ function endOfMonth(date, options) {
    const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (endOfMonth)));


/***/ }),

/***/ 15056:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ formatDistance)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/en-US.js + 5 modules
var en_US = __webpack_require__(119472);
// EXTERNAL MODULE: ../../node_modules/date-fns/_lib/defaultOptions.js
var _lib_defaultOptions = __webpack_require__(828258);
// EXTERNAL MODULE: ../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
var getTimezoneOffsetInMilliseconds = __webpack_require__(901186);
// EXTERNAL MODULE: ../../node_modules/date-fns/_lib/normalizeDates.js
var normalizeDates = __webpack_require__(748607);
// EXTERNAL MODULE: ../../node_modules/date-fns/toDate.js
var toDate = __webpack_require__(452857);
;// ../../node_modules/date-fns/compareAsc.js

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */ function compareAsc(dateLeft, dateRight) {
    const diff = +(0,toDate/* toDate */.a)(dateLeft) - +(0,toDate/* toDate */.a)(dateRight);
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_compareAsc = ((/* unused pure expression or super */ null && (compareAsc)));

// EXTERNAL MODULE: ../../node_modules/date-fns/constants.js
var constants = __webpack_require__(325347);
// EXTERNAL MODULE: ../../node_modules/date-fns/differenceInCalendarMonths.js
var differenceInCalendarMonths = __webpack_require__(48061);
;// ../../node_modules/date-fns/endOfDay.js

/**
 * The {@link endOfDay} function options.
 */ /**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */ function endOfDay(date, options) {
    const _date = (0,toDate/* toDate */.a)(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_endOfDay = ((/* unused pure expression or super */ null && (endOfDay)));

// EXTERNAL MODULE: ../../node_modules/date-fns/endOfMonth.js
var endOfMonth = __webpack_require__(173098);
;// ../../node_modules/date-fns/isLastDayOfMonth.js



/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */ function isLastDayOfMonth(date, options) {
    const _date = (0,toDate/* toDate */.a)(date, options?.in);
    return +endOfDay(_date, options) === +(0,endOfMonth/* endOfMonth */.p)(_date, options);
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_isLastDayOfMonth = ((/* unused pure expression or super */ null && (isLastDayOfMonth)));

;// ../../node_modules/date-fns/differenceInMonths.js




/**
 * The {@link differenceInMonths} function options.
 */ /**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */ function differenceInMonths(laterDate, earlierDate, options) {
    const [laterDate_, workingLaterDate, earlierDate_] = (0,normalizeDates/* normalizeDates */.x)(options?.in, laterDate, laterDate, earlierDate);
    const sign = compareAsc(workingLaterDate, earlierDate_);
    const difference = Math.abs((0,differenceInCalendarMonths/* differenceInCalendarMonths */.U)(workingLaterDate, earlierDate_));
    if (difference < 1) return 0;
    if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
    workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
    let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
    if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
        isLastMonthNotFull = false;
    }
    const result = sign * (difference - +isLastMonthNotFull);
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMonths = ((/* unused pure expression or super */ null && (differenceInMonths)));

;// ../../node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}

;// ../../node_modules/date-fns/differenceInMilliseconds.js

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */ function differenceInMilliseconds(laterDate, earlierDate) {
    return +(0,toDate/* toDate */.a)(laterDate) - +(0,toDate/* toDate */.a)(earlierDate);
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMilliseconds = ((/* unused pure expression or super */ null && (differenceInMilliseconds)));

;// ../../node_modules/date-fns/differenceInSeconds.js


/**
 * The {@link differenceInSeconds} function options.
 */ /**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */ function differenceInSeconds(laterDate, earlierDate, options) {
    const diff = differenceInMilliseconds(laterDate, earlierDate) / 1000;
    return getRoundingMethod(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInSeconds = ((/* unused pure expression or super */ null && (differenceInSeconds)));

;// ../../node_modules/date-fns/formatDistance.js








/**
 * The {@link formatDistance} function options.
 */ /**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */ function formatDistance(laterDate, earlierDate, options) {
    const defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.q)();
    const locale = options?.locale ?? defaultOptions.locale ?? en_US/* enUS */.c;
    const minutesInAlmostTwoDays = 2520;
    const comparison = compareAsc(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = (0,normalizeDates/* normalizeDates */.x)(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const seconds = differenceInSeconds(earlierDate_, laterDate_);
    const offsetInSeconds = ((0,getTimezoneOffsetInMilliseconds/* getTimezoneOffsetInMilliseconds */.G)(earlierDate_) - (0,getTimezoneOffsetInMilliseconds/* getTimezoneOffsetInMilliseconds */.G)(laterDate_)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) {
                return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            } else if (seconds < 10) {
                return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            } else if (seconds < 20) {
                return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            } else if (seconds < 40) {
                return locale.formatDistance("halfAMinute", 0, localizeOptions);
            } else if (seconds < 60) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", 1, localizeOptions);
            }
        } else {
            if (minutes === 0) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            } else {
                return locale.formatDistance("xMinutes", minutes, localizeOptions);
            }
        }
    // 2 mins up to 0.75 hrs
    } else if (minutes < 45) {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
    // 0.75 hrs up to 1.5 hrs
    } else if (minutes < 90) {
        return locale.formatDistance("aboutXHours", 1, localizeOptions);
    // 1.5 hrs up to 24 hrs
    } else if (minutes < constants/* minutesInDay */.F6) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) {
        return locale.formatDistance("xDays", 1, localizeOptions);
    // 1.75 days up to 30 days
    } else if (minutes < constants/* minutesInMonth */.Nw) {
        const days = Math.round(minutes / constants/* minutesInDay */.F6);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < constants/* minutesInMonth */.Nw * 2) {
        months = Math.round(minutes / constants/* minutesInMonth */.Nw);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = differenceInMonths(earlierDate_, laterDate_);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / constants/* minutesInMonth */.Nw);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance("aboutXYears", years, localizeOptions);
        // N years 3 months up to N years 9 months
        } else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance("overXYears", years, localizeOptions);
        // N years 9 months up to N year 12 months
        } else {
            return locale.formatDistance("almostXYears", years + 1, localizeOptions);
        }
    }
}
// Fallback for modularized imports:
/* harmony default export */ const date_fns_formatDistance = ((/* unused pure expression or super */ null && (formatDistance)));


/***/ }),

/***/ 527348:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ intlFormat)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452857);

/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 * @deprecated
 *
 * [TODO] Remove in v4
 */ /**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */ /**
 * The locale options.
 */ /**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */ /**
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */ /**
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */ /**
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */ function intlFormat(date, formatOrLocale, localeOptions) {
    let formatOptions;
    if (isFormatOptions(formatOrLocale)) {
        formatOptions = formatOrLocale;
    } else {
        localeOptions = formatOrLocale;
    }
    return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format((0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(date));
}
function isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}
// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (intlFormat)));


/***/ }),

/***/ 961607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}


/***/ }),

/***/ 28301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}


/***/ }),

/***/ 816249:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}


/***/ }),

/***/ 511279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}


/***/ }),

/***/ 154445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  de: () => (/* binding */ de)
});

// UNUSED EXPORTS: default

;// ../../node_modules/date-fns/locale/de/_lib/formatDistance.js
const formatDistanceLocale = {
    lessThanXSeconds: {
        standalone: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden"
        },
        withPreposition: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden"
        }
    },
    xSeconds: {
        standalone: {
            one: "1 Sekunde",
            other: "{{count}} Sekunden"
        },
        withPreposition: {
            one: "1 Sekunde",
            other: "{{count}} Sekunden"
        }
    },
    halfAMinute: {
        standalone: "eine halbe Minute",
        withPreposition: "einer halben Minute"
    },
    lessThanXMinutes: {
        standalone: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten"
        },
        withPreposition: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten"
        }
    },
    xMinutes: {
        standalone: {
            one: "1 Minute",
            other: "{{count}} Minuten"
        },
        withPreposition: {
            one: "1 Minute",
            other: "{{count}} Minuten"
        }
    },
    aboutXHours: {
        standalone: {
            one: "etwa 1 Stunde",
            other: "etwa {{count}} Stunden"
        },
        withPreposition: {
            one: "etwa 1 Stunde",
            other: "etwa {{count}} Stunden"
        }
    },
    xHours: {
        standalone: {
            one: "1 Stunde",
            other: "{{count}} Stunden"
        },
        withPreposition: {
            one: "1 Stunde",
            other: "{{count}} Stunden"
        }
    },
    xDays: {
        standalone: {
            one: "1 Tag",
            other: "{{count}} Tage"
        },
        withPreposition: {
            one: "1 Tag",
            other: "{{count}} Tagen"
        }
    },
    aboutXWeeks: {
        standalone: {
            one: "etwa 1 Woche",
            other: "etwa {{count}} Wochen"
        },
        withPreposition: {
            one: "etwa 1 Woche",
            other: "etwa {{count}} Wochen"
        }
    },
    xWeeks: {
        standalone: {
            one: "1 Woche",
            other: "{{count}} Wochen"
        },
        withPreposition: {
            one: "1 Woche",
            other: "{{count}} Wochen"
        }
    },
    aboutXMonths: {
        standalone: {
            one: "etwa 1 Monat",
            other: "etwa {{count}} Monate"
        },
        withPreposition: {
            one: "etwa 1 Monat",
            other: "etwa {{count}} Monaten"
        }
    },
    xMonths: {
        standalone: {
            one: "1 Monat",
            other: "{{count}} Monate"
        },
        withPreposition: {
            one: "1 Monat",
            other: "{{count}} Monaten"
        }
    },
    aboutXYears: {
        standalone: {
            one: "etwa 1 Jahr",
            other: "etwa {{count}} Jahre"
        },
        withPreposition: {
            one: "etwa 1 Jahr",
            other: "etwa {{count}} Jahren"
        }
    },
    xYears: {
        standalone: {
            one: "1 Jahr",
            other: "{{count}} Jahre"
        },
        withPreposition: {
            one: "1 Jahr",
            other: "{{count}} Jahren"
        }
    },
    overXYears: {
        standalone: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahre"
        },
        withPreposition: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahren"
        }
    },
    almostXYears: {
        standalone: {
            one: "fast 1 Jahr",
            other: "fast {{count}} Jahre"
        },
        withPreposition: {
            one: "fast 1 Jahr",
            other: "fast {{count}} Jahren"
        }
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = options?.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return "vor " + result;
        }
    }
    return result;
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
var buildFormatLongFn = __webpack_require__(961607);
;// ../../node_modules/date-fns/locale/de/_lib/formatLong.js

// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
const dateFormats = {
    full: "EEEE, do MMMM y",
    long: "do MMMM y",
    medium: "do MMM y",
    short: "dd.MM.y"
};
const timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'um' {{time}}",
    long: "{{date}} 'um' {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
};
const formatLong = {
    date: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

;// ../../node_modules/date-fns/locale/de/_lib/formatRelative.js
const formatRelativeLocale = {
    lastWeek: "'letzten' eeee 'um' p",
    yesterday: "'gestern um' p",
    today: "'heute um' p",
    tomorrow: "'morgen um' p",
    nextWeek: "eeee 'um' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
var buildLocalizeFn = __webpack_require__(28301);
;// ../../node_modules/date-fns/locale/de/_lib/localize.js

const eraValues = {
    narrow: [
        "v.Chr.",
        "n.Chr."
    ],
    abbreviated: [
        "v.Chr.",
        "n.Chr."
    ],
    wide: [
        "vor Christus",
        "nach Christus"
    ]
};
const quarterValues = {
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
        "1. Quartal",
        "2. Quartal",
        "3. Quartal",
        "4. Quartal"
    ]
};
// Note: in German, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
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
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
    ],
    wide: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ]
};
// https://st.unicode.org/cldr-apps/v#/de/Gregorian/
const formattingMonthValues = {
    narrow: monthValues.narrow,
    abbreviated: [
        "Jan.",
        "Feb.",
        "März",
        "Apr.",
        "Mai",
        "Juni",
        "Juli",
        "Aug.",
        "Sep.",
        "Okt.",
        "Nov.",
        "Dez."
    ],
    wide: monthValues.wide
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "D",
        "M",
        "D",
        "F",
        "S"
    ],
    short: [
        "So",
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "So.",
        "Mo.",
        "Di.",
        "Mi.",
        "Do.",
        "Fr.",
        "Sa."
    ],
    wide: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
    ]
};
// https://www.unicode.org/cldr/charts/32/summary/de.html#1881
const dayPeriodValues = {
    narrow: {
        am: "vm.",
        pm: "nm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachm.",
        evening: "Abend",
        night: "Nacht"
    },
    abbreviated: {
        am: "vorm.",
        pm: "nachm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachmittag",
        evening: "Abend",
        night: "Nacht"
    },
    wide: {
        am: "vormittags",
        pm: "nachmittags",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachmittag",
        evening: "Abend",
        night: "Nacht"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "vm.",
        pm: "nm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachm.",
        evening: "abends",
        night: "nachts"
    },
    abbreviated: {
        am: "vorm.",
        pm: "nachm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachmittags",
        evening: "abends",
        night: "nachts"
    },
    wide: {
        am: "vormittags",
        pm: "nachmittags",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachmittags",
        evening: "abends",
        night: "nachts"
    }
};
const ordinalNumber = (dirtyNumber)=>{
    const number = Number(dirtyNumber);
    return number + ".";
};
const localize = {
    ordinalNumber,
    era: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: monthValues,
        formattingValues: formattingMonthValues,
        defaultWidth: "wide"
    }),
    day: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
var buildMatchFn = __webpack_require__(816249);
// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
var buildMatchPatternFn = __webpack_require__(511279);
;// ../../node_modules/date-fns/locale/de/_lib/match.js


const matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
};
const parseEraPatterns = {
    any: [
        /^v/i,
        /^n/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](\.)? Quartal/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
    wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
};
const parseMonthPatterns = {
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
        /^j[aä]/i,
        /^f/i,
        /^mär/i,
        /^ap/i,
        /^mai/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smdmf]/i,
    short: /^(so|mo|di|mi|do|fr|sa)/i,
    abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
    wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
};
const parseDayPatterns = {
    any: [
        /^so/i,
        /^mo/i,
        /^di/i,
        /^mi/i,
        /^do/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^v/i,
        pm: /^n/i,
        midnight: /^Mitte/i,
        noon: /^Mitta/i,
        morning: /morgens/i,
        afternoon: /nachmittags/i,
        evening: /abends/i,
        night: /nachts/i
    }
};
const match = {
    ordinalNumber: (0,buildMatchPatternFn/* buildMatchPatternFn */.K)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value)
    }),
    era: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

;// ../../node_modules/date-fns/locale/de.js





/**
 * @category Locales
 * @summary German locale.
 * @language German
 * @iso-639-2 deu
 * @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
 * @author Asia [@asia-t](https://github.com/asia-t)
 * @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
 * @author RomanErnst [@pex](https://github.com/pex)
 * @author Philipp Keck [@Philipp91](https://github.com/Philipp91)
 */ const de = {
    code: "de",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
// Fallback for modularized imports:
/* harmony default export */ const locale_de = ((/* unused pure expression or super */ null && (de)));


/***/ }),

/***/ 119472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ enUS)
});

// UNUSED EXPORTS: default

;// ../../node_modules/date-fns/locale/en-US/_lib/formatDistance.js
const formatDistanceLocale = {
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
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
var buildFormatLongFn = __webpack_require__(961607);
;// ../../node_modules/date-fns/locale/en-US/_lib/formatLong.js

const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

;// ../../node_modules/date-fns/locale/en-US/_lib/formatRelative.js
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
var buildLocalizeFn = __webpack_require__(28301);
;// ../../node_modules/date-fns/locale/en-US/_lib/localize.js

const eraValues = {
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
const quarterValues = {
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
const monthValues = {
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
const dayValues = {
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
const dayPeriodValues = {
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
const formattingDayPeriodValues = {
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
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
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
const localize = {
    ordinalNumber,
    era: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
var buildMatchFn = __webpack_require__(816249);
// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
var buildMatchPatternFn = __webpack_require__(511279);
;// ../../node_modules/date-fns/locale/en-US/_lib/match.js


const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
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
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
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
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
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
const match = {
    ordinalNumber: (0,buildMatchPatternFn/* buildMatchPatternFn */.K)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

;// ../../node_modules/date-fns/locale/en-US.js





/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */ const enUS = {
    code: "en-US",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
/* harmony default export */ const en_US = ((/* unused pure expression or super */ null && (enUS)));


/***/ }),

/***/ 144208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fr: () => (/* binding */ fr)
});

// UNUSED EXPORTS: default

;// ../../node_modules/date-fns/locale/fr/_lib/formatDistance.js
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "moins d’une seconde",
        other: "moins de {{count}} secondes"
    },
    xSeconds: {
        one: "1 seconde",
        other: "{{count}} secondes"
    },
    halfAMinute: "30 secondes",
    lessThanXMinutes: {
        one: "moins d’une minute",
        other: "moins de {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "environ 1 heure",
        other: "environ {{count}} heures"
    },
    xHours: {
        one: "1 heure",
        other: "{{count}} heures"
    },
    xDays: {
        one: "1 jour",
        other: "{{count}} jours"
    },
    aboutXWeeks: {
        one: "environ 1 semaine",
        other: "environ {{count}} semaines"
    },
    xWeeks: {
        one: "1 semaine",
        other: "{{count}} semaines"
    },
    aboutXMonths: {
        one: "environ 1 mois",
        other: "environ {{count}} mois"
    },
    xMonths: {
        one: "1 mois",
        other: "{{count}} mois"
    },
    aboutXYears: {
        one: "environ 1 an",
        other: "environ {{count}} ans"
    },
    xYears: {
        one: "1 an",
        other: "{{count}} ans"
    },
    overXYears: {
        one: "plus d’un an",
        other: "plus de {{count}} ans"
    },
    almostXYears: {
        one: "presqu’un an",
        other: "presque {{count}} ans"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const form = formatDistanceLocale[token];
    if (typeof form === "string") {
        result = form;
    } else if (count === 1) {
        result = form.one;
    } else {
        result = form.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "dans " + result;
        } else {
            return "il y a " + result;
        }
    }
    return result;
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
var buildFormatLongFn = __webpack_require__(961607);
;// ../../node_modules/date-fns/locale/fr/_lib/formatLong.js

const dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "dd/MM/y"
};
const timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

;// ../../node_modules/date-fns/locale/fr/_lib/formatRelative.js
const formatRelativeLocale = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
var buildLocalizeFn = __webpack_require__(28301);
;// ../../node_modules/date-fns/locale/fr/_lib/localize.js

const eraValues = {
    narrow: [
        "av. J.-C",
        "ap. J.-C"
    ],
    abbreviated: [
        "av. J.-C",
        "ap. J.-C"
    ],
    wide: [
        "avant Jésus-Christ",
        "après Jésus-Christ"
    ]
};
const quarterValues = {
    narrow: [
        "T1",
        "T2",
        "T3",
        "T4"
    ],
    abbreviated: [
        "1er trim.",
        "2ème trim.",
        "3ème trim.",
        "4ème trim."
    ],
    wide: [
        "1er trimestre",
        "2ème trimestre",
        "3ème trimestre",
        "4ème trimestre"
    ]
};
const monthValues = {
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
        "janv.",
        "févr.",
        "mars",
        "avr.",
        "mai",
        "juin",
        "juil.",
        "août",
        "sept.",
        "oct.",
        "nov.",
        "déc."
    ],
    wide: [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ]
};
const dayValues = {
    narrow: [
        "D",
        "L",
        "M",
        "M",
        "J",
        "V",
        "S"
    ],
    short: [
        "di",
        "lu",
        "ma",
        "me",
        "je",
        "ve",
        "sa"
    ],
    abbreviated: [
        "dim.",
        "lun.",
        "mar.",
        "mer.",
        "jeu.",
        "ven.",
        "sam."
    ],
    wide: [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "minuit",
        noon: "midi",
        morning: "mat.",
        afternoon: "ap.m.",
        evening: "soir",
        night: "mat."
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "minuit",
        noon: "midi",
        morning: "matin",
        afternoon: "après-midi",
        evening: "soir",
        night: "matin"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "minuit",
        noon: "midi",
        morning: "du matin",
        afternoon: "de l’après-midi",
        evening: "du soir",
        night: "du matin"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    const unit = options?.unit;
    if (number === 0) return "0";
    const feminineUnits = [
        "year",
        "week",
        "hour",
        "minute",
        "second"
    ];
    let suffix;
    if (number === 1) {
        suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
    } else {
        suffix = "ème";
    }
    return number + suffix;
};
const LONG_MONTHS_TOKENS = [
    "MMM",
    "MMMM"
];
const localize = {
    preprocessor: (date, parts)=>{
        // Replaces the `do` tokens with `d` when used with long month tokens and the day of the month is greater than one.
        // Use case "do MMMM" => 1er août, 29 août
        // see https://github.com/date-fns/date-fns/issues/1391
        if (date.getDate() === 1) return parts;
        const hasLongMonthToken = parts.some((part)=>part.isToken && LONG_MONTHS_TOKENS.includes(part.value));
        if (!hasLongMonthToken) return parts;
        return parts.map((part)=>part.isToken && part.value === "do" ? {
                isToken: true,
                value: "d"
            } : part);
    },
    ordinalNumber,
    era: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayPeriodValues,
        defaultWidth: "wide"
    })
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
var buildMatchFn = __webpack_require__(816249);
// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
var buildMatchPatternFn = __webpack_require__(511279);
;// ../../node_modules/date-fns/locale/fr/_lib/match.js


const matchOrdinalNumberPattern = /^(\d+)(ième|ère|ème|er|e)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
};
const parseEraPatterns = {
    any: [
        /^av/i,
        /^ap/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^T?[1234]/i,
    abbreviated: /^[1234](er|ème|e)? trim\.?/i,
    wide: /^[1234](er|ème|e)? trimestre/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
};
const parseMonthPatterns = {
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
        /^av/i,
        /^ma/i,
        /^juin/i,
        /^juil/i,
        /^ao/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};
const parseDayPatterns = {
    narrow: [
        /^d/i,
        /^l/i,
        /^m/i,
        /^m/i,
        /^j/i,
        /^v/i,
        /^s/i
    ],
    any: [
        /^di/i,
        /^lu/i,
        /^ma/i,
        /^me/i,
        /^je/i,
        /^ve/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^min/i,
        noon: /^mid/i,
        morning: /mat/i,
        afternoon: /ap/i,
        evening: /soir/i,
        night: /nuit/i
    }
};
const match = {
    ordinalNumber: (0,buildMatchPatternFn/* buildMatchPatternFn */.K)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value)
    }),
    era: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

;// ../../node_modules/date-fns/locale/fr.js





/**
 * @category Locales
 * @summary French locale.
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 */ const fr = {
    code: "fr",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
// Fallback for modularized imports:
/* harmony default export */ const locale_fr = ((/* unused pure expression or super */ null && (fr)));


/***/ }),

/***/ 907374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ ptBR)
});

// UNUSED EXPORTS: default

;// ../../node_modules/date-fns/locale/pt-BR/_lib/formatDistance.js
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "menos de um segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
        one: "menos de um minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "cerca de 1 hora",
        other: "cerca de {{count}} horas"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} horas"
    },
    xDays: {
        one: "1 dia",
        other: "{{count}} dias"
    },
    aboutXWeeks: {
        one: "cerca de 1 semana",
        other: "cerca de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "cerca de 1 mês",
        other: "cerca de {{count}} meses"
    },
    xMonths: {
        one: "1 mês",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "cerca de 1 ano",
        other: "cerca de {{count}} anos"
    },
    xYears: {
        one: "1 ano",
        other: "{{count}} anos"
    },
    overXYears: {
        one: "mais de 1 ano",
        other: "mais de {{count}} anos"
    },
    almostXYears: {
        one: "quase 1 ano",
        other: "quase {{count}} anos"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "em " + result;
        } else {
            return "há " + result;
        }
    }
    return result;
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
var buildFormatLongFn = __webpack_require__(961607);
;// ../../node_modules/date-fns/locale/pt-BR/_lib/formatLong.js

const dateFormats = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
};
const timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0,buildFormatLongFn/* buildFormatLongFn */.k)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

;// ../../node_modules/date-fns/locale/pt-BR/_lib/formatRelative.js
const formatRelativeLocale = {
    lastWeek: (date)=>{
        const weekday = date.getDay();
        const last = weekday === 0 || weekday === 6 ? "último" : "última";
        return "'" + last + "' eeee 'às' p";
    },
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: "P"
};
const formatRelative = (token, date, _baseDate, _options)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
var buildLocalizeFn = __webpack_require__(28301);
;// ../../node_modules/date-fns/locale/pt-BR/_lib/localize.js

const eraValues = {
    narrow: [
        "AC",
        "DC"
    ],
    abbreviated: [
        "AC",
        "DC"
    ],
    wide: [
        "antes de cristo",
        "depois de cristo"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "T1",
        "T2",
        "T3",
        "T4"
    ],
    wide: [
        "1º trimestre",
        "2º trimestre",
        "3º trimestre",
        "4º trimestre"
    ]
};
const monthValues = {
    narrow: [
        "j",
        "f",
        "m",
        "a",
        "m",
        "j",
        "j",
        "a",
        "s",
        "o",
        "n",
        "d"
    ],
    abbreviated: [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez"
    ],
    wide: [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]
};
const dayValues = {
    narrow: [
        "D",
        "S",
        "T",
        "Q",
        "Q",
        "S",
        "S"
    ],
    short: [
        "dom",
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "sab"
    ],
    abbreviated: [
        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado"
    ],
    wide: [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    if (options?.unit === "week") {
        return number + "ª";
    }
    return number + "º";
};
const localize = {
    ordinalNumber,
    era: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0,buildLocalizeFn/* buildLocalizeFn */.o)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
var buildMatchFn = __webpack_require__(816249);
// EXTERNAL MODULE: ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
var buildMatchPatternFn = __webpack_require__(511279);
;// ../../node_modules/date-fns/locale/pt-BR/_lib/match.js


const matchOrdinalNumberPattern = /^(\d+)[ºªo]?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i
};
const parseEraPatterns = {
    any: [
        /^ac/i,
        /^dc/i
    ],
    wide: [
        /^antes de cristo/i,
        /^depois de cristo/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
const parseMonthPatterns = {
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
        /^fev/i,
        /^mar/i,
        /^abr/i,
        /^mai/i,
        /^jun/i,
        /^jul/i,
        /^ago/i,
        /^set/i,
        /^out/i,
        /^nov/i,
        /^dez/i
    ]
};
const matchDayPatterns = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
const parseDayPatterns = {
    short: [
        /^d/i,
        /^2/i,
        /^3/i,
        /^4/i,
        /^5/i,
        /^6/i,
        /^s[aá]/i
    ],
    narrow: [
        /^d/i,
        /^2/i,
        /^3/i,
        /^4/i,
        /^5/i,
        /^6/i,
        /^s[aá]/i
    ],
    any: [
        /^d/i,
        /^seg/i,
        /^t/i,
        /^qua/i,
        /^qui/i,
        /^sex/i,
        /^s[aá]b/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn|^meia[-\s]noite/i,
        noon: /^md|^meio[-\s]dia/i,
        morning: /manhã/i,
        afternoon: /tarde/i,
        evening: /tarde/i,
        night: /noite/i
    }
};
const match = {
    ordinalNumber: (0,buildMatchPatternFn/* buildMatchPatternFn */.K)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0,buildMatchFn/* buildMatchFn */.A)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

;// ../../node_modules/date-fns/locale/pt-BR.js





/**
 * @category Locales
 * @summary Portuguese locale (Brazil).
 * @language Portuguese
 * @iso-639-2 por
 * @author Lucas Duailibe [@duailibe](https://github.com/duailibe)
 * @author Yago Carballo [@yagocarballo](https://github.com/YagoCarballo)
 */ const ptBR = {
    code: "pt-BR",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
/* harmony default export */ const pt_BR = ((/* unused pure expression or super */ null && (ptBR)));


/***/ }),

/***/ 452857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462523);

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
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
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
 */ function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__/* .constructFrom */ .w)(context || argument, argument);
}
// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (toDate)));


/***/ })

};
;