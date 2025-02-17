"use strict";
exports.id = 2021;
exports.ids = [2021];
exports.modules = {

/***/ 697926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ FormatIcu)
/* harmony export */ });
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
/* global Reflect, Promise */

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

//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};

var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}

// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: milliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = __assign(__assign(__assign({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = __assign(__assign(__assign({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            case 'rounding-mode-floor':
                result.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                result.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                result.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                result.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                result.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                result.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                result.roundingMode = 'halfExpand';
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = __assign(__assign({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = __assign(__assign({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = __assign(__assign({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "001": [
        "H",
        "h"
    ],
    "419": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AS": [
        "h",
        "H"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "AX": [
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BI": [
        "H",
        "h"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "BO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "BQ": [
        "H"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BT": [
        "h",
        "H"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BY": [
        "H",
        "h"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CL": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CP": [
        "H"
    ],
    "CR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CU": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "CW": [
        "H",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CZ": [
        "H"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "DK": [
        "H"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EC": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "FI": [
        "H"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FO": [
        "H",
        "h"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GH": [
        "h",
        "H"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GL": [
        "H",
        "h"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GT": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HN": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "HU": [
        "H",
        "h"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ID": [
        "H"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IN": [
        "h",
        "H"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "IS": [
        "H"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JP": [
        "H",
        "K",
        "h"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LS": [
        "h",
        "H"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MG": [
        "H",
        "h"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ML": [
        "H"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MT": [
        "H",
        "h"
    ],
    "MU": [
        "H",
        "h"
    ],
    "MV": [
        "H",
        "h"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MX": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NE": [
        "H"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NI": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "NO": [
        "H",
        "h"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "PL": [
        "H",
        "h"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "PW": [
        "h",
        "H"
    ],
    "PY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "RU": [
        "H"
    ],
    "RW": [
        "H",
        "h"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SE": [
        "H"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "SO": [
        "h",
        "H"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "SV": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TH": [
        "H",
        "h"
    ],
    "TJ": [
        "H",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TM": [
        "H",
        "h"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VN": [
        "H",
        "h"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "WS": [
        "h",
        "H"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZW": [
        "H",
        "h"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-HK": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-IL": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "en-MY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
};

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = timeData[regionTag || ''] ||
        timeData[languageTag || ''] ||
        timeData["".concat(languageTag, "-001")] ||
        timeData['001'];
    return hourCycles[0];
}

var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith && '_a'.startsWith('a', 1);
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = getBestPattern(skeleton, this.locale);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) ;
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    __extends(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));
var InvalidValueError = /** @class */ (function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));
var InvalidValueTypeError = /** @class */ (function (_super) {
    __extends(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));
var MissingValueError = /** @class */ (function (_super) {
    __extends(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));

var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTagElement(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return __assign(__assign(__assign({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign(__assign({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, __assign({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: strategies.variadic,
        }),
        getDateTimeFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: strategies.variadic,
        }),
        getPluralRules: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: strategies.variadic,
        }),
    };
}
var IntlMessageFormat$1 = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        var _this = this;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () {
            var _a;
            return ({
                locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) ||
                    Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
            });
        };
        this.getAst = function () { return _this.ast; };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            var _a = opts || {}; _a.formatters; var parseOpts = __rest(_a, ["formatters"]);
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, __assign(__assign({}, parseOpts), { locale: this.resolvedLocale }));
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function (locales) {
        if (typeof Intl.Locale === 'undefined') {
            return;
        }
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var IntlMessageFormat = IntlMessageFormat$1;

const createFormatIcu = () => {
    const locales = new Map();
    function isLocaleValid(locale) {
        try {
            return Boolean(Intl.NumberFormat.supportedLocalesOf(locale).length);
        }
        catch (_a) {
            return false;
        }
    }
    function getLanguage(language) {
        if (!locales.get(language)) {
            let localeCandidate = String(language).replace(/[^a-zA-Z]/g, '-');
            while (!isLocaleValid(localeCandidate)) {
                localeCandidate =
                    localeCandidate.split('-').slice(0, -1).join('-') || 'en';
            }
            locales.set(language, localeCandidate);
        }
        return locales.get(language);
    }
    const format = ({ translation, language, params, }) => {
        const ignoreTag = !Object.values(params || {}).find((p) => typeof p === 'function');
        const locale = getLanguage(language);
        return new IntlMessageFormat(translation, locale, undefined, {
            ignoreTag,
        }).format(params);
    };
    return Object.freeze({ getLanguage, format });
};

const FormatIcu = () => (tolgee, tools) => {
    tools.setFinalFormatter(createFormatIcu());
    return tolgee;
};


//# sourceMappingURL=tolgee-format-icu.esm.js.map


/***/ }),

/***/ 477270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RE: () => (/* binding */ createServerInstance)
/* harmony export */ });
/* unused harmony export TBase */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function unwrapSingleElementArray(value) {
    if (Array.isArray(value) && value.length === 1) {
        return value[0];
    }
    else {
        return value;
    }
}
const wrapTagHandlers = (params) => {
    if (!params) {
        return undefined;
    }
    const result = {};
    Object.entries(params || {}).forEach(([key, value]) => {
        if (typeof value === 'function') {
            result[key] = (chunk) => {
                return value(addReactKeys(chunk));
            };
        }
        else if (react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(value)) {
            const el = value;
            result[key] = (chunk) => {
                return el.props.children === undefined && (chunk === null || chunk === void 0 ? void 0 : chunk.length)
                    ? react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(el, {}, addReactKeys(chunk))
                    : react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(el);
            };
        }
        else {
            result[key] = value;
        }
    });
    return result;
};
const addReactKeys = (children) => {
    const val = unwrapSingleElementArray(children);
    if (Array.isArray(val)) {
        return val.map((item, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { key: i }, item)));
    }
    else {
        return val;
    }
};

const TBase = (props) => {
    const key = props.keyName || props.children;
    if (key === undefined) {
        // eslint-disable-next-line no-console
        console.error('T component: keyName not defined');
    }
    const defaultValue = props.defaultValue ||
        (props.keyName ? props.children : undefined);
    const translation = addReactKeys(props.t({
        key: key,
        params: wrapTagHandlers(props.params),
        defaultValue,
        noWrap: props.noWrap,
        ns: props.ns,
        language: props.language,
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, translation);
};

// @ts-ignore
const createServerInstance = ({ createTolgee, getLocale, }) => {
    const getTolgeeInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async (locale) => {
        const tolgee = await createTolgee(locale);
        await tolgee.run();
        return tolgee;
    });
    const getTolgee = async () => {
        const locale = await getLocale();
        const tolgee = await getTolgeeInstance(locale);
        return tolgee;
    };
    const getTranslate = async () => {
        const tolgee = await getTolgee();
        return tolgee.t;
    };
    async function T(props) {
        const t = await getTranslate();
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TBase, Object.assign({ t: t }, props));
    }
    return {
        getTolgee,
        getTranslate,
        T,
    };
};


//# sourceMappingURL=tolgee-react-server.esm.js.map


/***/ }),

/***/ 652793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
;// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
 //# sourceMappingURL=utils.js.map

;// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// ../../node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 891069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(290735).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 306837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H_: () => (/* binding */ Tolgee),
/* harmony export */   VD: () => (/* binding */ DevTools)
/* harmony export */ });
/* unused harmony exports BackendFetch, BrowserExtensionPlugin, DEVTOOLS_ID, DevBackend, FormatSimple, LanguageDetector, LanguageDetectorError, LanguageStorage, LanguageStorageError, ObserverPlugin, PREFERRED_LANGUAGES_LOCAL_STORAGE_KEY, RecordFetchError, TOLGEE_ATTRIBUTE_NAME, TOLGEE_RESTRICT_ATTRIBUTE, TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE, TolgeeCore, createFetchFunction, detectLanguage, detectLanguageFromHeaders, getFallback, getFallbackArray, getProjectIdFromApiKey, getTranslateProps, isSSR */
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var _a;
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function isPromise(value) {
  return Boolean(value && typeof value.then === "function");
}
function valueOrPromise(value, callback) {
  if (isPromise(value)) {
    return Promise.resolve(value).then(callback);
  } else {
    return callback(value);
  }
}
function handleRegularOrAsyncErr(onError, createError, callback) {
  function handle(e) {
    const error = createError(e);
    onError.emit(error);
    console.error(error);
    throw error;
  }
  try {
    const result = callback();
    if (isPromise(result)) {
      return result.catch(handle);
    }
    return result;
  } catch (e) {
    handle(e);
  }
}
function missingOptionError(option) {
  const options = (Array.isArray(option) ? option : [option]).map((val) => `'${val}'`);
  const lastPart = options.slice(-2).join(" or ");
  const firstPart = options.slice(0, -2);
  const stringifiedOptions = [...firstPart, lastPart].join(", ");
  return `Tolgee: You need to specify ${stringifiedOptions} option`;
}
function isObject(item) {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
function getFallback(value) {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return void 0;
}
function getFallbackArray(value) {
  return getFallback(value) || [];
}
function getFallbackFromStruct(language, fallbackLanguage) {
  if (isObject(fallbackLanguage)) {
    return getFallbackArray(fallbackLanguage === null || fallbackLanguage === void 0 ? void 0 : fallbackLanguage[language]);
  } else {
    return getFallbackArray(fallbackLanguage);
  }
}
function unique(arr) {
  return Array.from(new Set(arr));
}
function sanitizeUrl(url) {
  return url ? url.replace(/\/+$/, "") : url;
}
function getErrorMessage(error) {
  if (typeof error === "string") {
    return error;
  } else if (typeof (error === null || error === void 0 ? void 0 : error.message) === "string") {
    return error.message;
  }
}
const defaultFetchFunction = (input, options) => fetch(input, options);
function headersInitToRecord(headersInit) {
  return Object.fromEntries(new Headers(headersInit).entries());
}
const createFetchFunction = (fetchFn = defaultFetchFunction) => {
  return (input, init) => {
    let headers = headersInitToRecord(init === null || init === void 0 ? void 0 : init.headers);
    if (headers["x-api-key"]) {
      headers = Object.assign({ "x-tolgee-sdk-type": "JS", "x-tolgee-sdk-version": "prerelease" }, headers);
    }
    return fetchFn(input, Object.assign(Object.assign({}, init), { headers }));
  };
};
const EventEmitter = (type, isActive) => {
  let handlers = [];
  return {
    listen(handler) {
      const handlerWrapper = (e) => {
        handler(e);
      };
      handlers.push(handlerWrapper);
      return {
        unsubscribe() {
          handlers = handlers.filter((i) => handlerWrapper !== i);
        }
      };
    },
    emit(data) {
      if (isActive()) {
        handlers.forEach((handler) => handler({ type, value: data }));
      }
    }
  };
};
function EventEmitterCombined(isActive) {
  let handlers = [];
  let queue = [];
  function solveQueue() {
    if (queue.length === 0) {
      return;
    }
    const queueCopy = queue;
    queue = [];
    handlers.forEach((handler) => {
      handler(queueCopy);
    });
  }
  return Object.freeze({
    listen(handler) {
      const handlerWrapper = (events) => {
        handler(events);
      };
      handlers.push(handlerWrapper);
      return {
        unsubscribe() {
          handlers = handlers.filter((i) => handlerWrapper !== i);
        }
      };
    },
    emit(e, delayed) {
      if (isActive()) {
        if (isActive()) {
          queue.push(e);
          if (!delayed) {
            solveQueue();
          } else {
            setTimeout(solveQueue, 0);
          }
        }
      }
    }
  });
}
function Events() {
  let emitterActive = true;
  function isActive() {
    return emitterActive;
  }
  const self2 = Object.freeze({
    onPendingLanguageChange: EventEmitter("pendingLanguage", isActive),
    onLanguageChange: EventEmitter("language", isActive),
    onLoadingChange: EventEmitter("loading", isActive),
    onFetchingChange: EventEmitter("fetching", isActive),
    onInitialLoaded: EventEmitter("initialLoad", isActive),
    onRunningChange: EventEmitter("running", isActive),
    onCacheChange: EventEmitter("cache", isActive),
    onPermanentChange: EventEmitter("permanentChange", isActive),
    onError: EventEmitter("error", isActive),
    onUpdate: EventEmitterCombined(isActive),
    setEmitterActive(active) {
      emitterActive = active;
    },
    on: (event, handler) => {
      switch (event) {
        case "pendingLanguage":
          return self2.onPendingLanguageChange.listen(handler);
        case "language":
          return self2.onLanguageChange.listen(handler);
        case "loading":
          return self2.onLoadingChange.listen(handler);
        case "fetching":
          return self2.onFetchingChange.listen(handler);
        case "initialLoad":
          return self2.onInitialLoaded.listen(handler);
        case "running":
          return self2.onRunningChange.listen(handler);
        case "cache":
          return self2.onCacheChange.listen(handler);
        case "update":
          return self2.onUpdate.listen(handler);
        case "permanentChange":
          return self2.onPermanentChange.listen(handler);
        case "error":
          return self2.onError.listen(handler);
      }
    }
  });
  self2.onInitialLoaded.listen((e) => self2.onUpdate.emit(e, false));
  self2.onLanguageChange.listen((e) => self2.onUpdate.emit(e, false));
  self2.onCacheChange.listen((e) => self2.onUpdate.emit(e, true));
  return self2;
}
class RecordFetchError extends Error {
  constructor(descriptor, cause, isDev = false) {
    const { language, namespace } = descriptor;
    super(`Tolgee: Failed to fetch record for "${language}"${namespace && ` and "${namespace}"`}`);
    this.cause = cause;
    this.isDev = isDev;
    this.name = "RecordFetchError";
    this.language = language;
    this.namespace = namespace;
  }
}
class LanguageDetectorError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "LanguageDetectorError";
  }
}
class LanguageStorageError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "LanguageStorageError";
  }
}
const flattenTranslationsToMap = (data) => {
  const result = /* @__PURE__ */ new Map();
  Object.entries(data).forEach(([key, value]) => {
    if (value === void 0 || value === null) {
      return;
    }
    if (typeof value === "object") {
      flattenTranslationsToMap(value).forEach((flatValue, flatKey) => {
        result.set(key + "." + flatKey, flatValue);
      });
      return;
    }
    result.set(key, value);
  });
  return result;
};
const flattenTranslations = (data) => {
  return Object.fromEntries(flattenTranslationsToMap(data).entries());
};
const decodeCacheKey = (key) => {
  const [firstPart, ...rest] = key.split(":");
  const secondPart = rest.join(":");
  return { language: firstPart, namespace: secondPart || "" };
};
const encodeCacheKey = ({ language, namespace }) => {
  if (namespace) {
    return `${language}:${namespace}`;
  } else {
    return language;
  }
};
function Cache(events, backendGetRecord, backendGetDevRecord, withDefaultNs, isInitialLoading, fetchingObserver, loadingObserver) {
  const asyncRequests = /* @__PURE__ */ new Map();
  const cache = /* @__PURE__ */ new Map();
  let staticData = {};
  let version = 0;
  function addRecordInternal(descriptor, data, recordVersion) {
    const cacheKey = encodeCacheKey(descriptor);
    cache.set(cacheKey, {
      data: flattenTranslations(data),
      version: recordVersion
    });
    events.onCacheChange.emit(decodeCacheKey(cacheKey));
  }
  async function fetchProd(keyObject) {
    function handleError(e) {
      const error = new RecordFetchError(keyObject, e);
      events.onError.emit(error);
      console.error(error);
      throw error;
    }
    const dataFromBackend = backendGetRecord(keyObject);
    if (isPromise(dataFromBackend)) {
      const result = await dataFromBackend.catch(handleError);
      if (result !== void 0) {
        return result;
      }
    }
    const staticDataValue = staticData[encodeCacheKey(keyObject)];
    if (typeof staticDataValue === "function") {
      try {
        return await staticDataValue();
      } catch (e) {
        handleError(e);
      }
    } else {
      return staticDataValue;
    }
  }
  async function fetchData(keyObject, isDev) {
    let result = void 0;
    if (isDev) {
      try {
        result = await backendGetDevRecord(keyObject);
      } catch (e) {
        const error = new RecordFetchError(keyObject, e, true);
        events.onError.emit(error);
        console.warn(error);
      }
    }
    if (!result) {
      result = await fetchProd(keyObject);
    }
    return result;
  }
  const self2 = Object.freeze({
    addStaticData(data) {
      if (Array.isArray(data)) {
        for (const record of data) {
          const key = encodeCacheKey(record);
          const existing = cache.get(key);
          if (!existing || existing.version === 0) {
            addRecordInternal(record, flattenTranslations(record.data), 0);
          }
        }
      } else if (data) {
        staticData = Object.assign(Object.assign({}, staticData), data);
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value !== "function") {
            const descriptor = decodeCacheKey(key);
            const existing = cache.get(key);
            if (!existing || existing.version === 0) {
              addRecordInternal(descriptor, flattenTranslations(value), 0);
            }
          }
        });
      }
    },
    invalidate() {
      asyncRequests.clear();
      version += 1;
    },
    addRecord(descriptor, data) {
      addRecordInternal(descriptor, flattenTranslations(data), version);
    },
    exists(descriptor, strict = false) {
      const record = cache.get(encodeCacheKey(descriptor));
      if (record && strict) {
        return record.version === version;
      }
      return Boolean(record);
    },
    getRecord(descriptor) {
      const descriptorWithNs = withDefaultNs(descriptor);
      const cacheKey = encodeCacheKey(descriptorWithNs);
      const cacheRecord = cache.get(cacheKey);
      if (!cacheRecord) {
        return void 0;
      }
      return Object.assign(Object.assign({}, descriptorWithNs), { cacheKey, data: cacheRecord.data });
    },
    getAllRecords() {
      const entries = Array.from(cache.entries());
      return entries.map(([key]) => self2.getRecord(decodeCacheKey(key)));
    },
    getTranslation(descriptor, key) {
      var _a2;
      return (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
    },
    getTranslationNs(namespaces, languages, key) {
      var _a2;
      for (const namespace of namespaces) {
        for (const language of languages) {
          const value = (_a2 = cache.get(encodeCacheKey({ language, namespace }))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
          if (value !== void 0 && value !== null) {
            return [namespace];
          }
        }
      }
      return unique(namespaces);
    },
    getTranslationFallback(namespaces, languages, key) {
      var _a2;
      for (const namespace of namespaces) {
        for (const language of languages) {
          const value = (_a2 = cache.get(encodeCacheKey({ language, namespace }))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
          if (value !== void 0 && value !== null) {
            return value;
          }
        }
      }
      return void 0;
    },
    changeTranslation(descriptor, key, value) {
      var _a2;
      const record = (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data;
      if (record === null || record === void 0 ? void 0 : record[key]) {
        record[key] = value;
        events.onCacheChange.emit(Object.assign(Object.assign({}, descriptor), { key }));
      }
    },
    isFetching(ns) {
      if (isInitialLoading()) {
        return true;
      }
      if (ns === void 0) {
        return asyncRequests.size > 0;
      }
      const namespaces = getFallbackArray(ns);
      return Boolean(Array.from(asyncRequests.keys()).find((key) => namespaces.includes(decodeCacheKey(key).namespace)));
    },
    isLoading(language, ns) {
      const namespaces = getFallbackArray(ns);
      if (isInitialLoading()) {
        return true;
      }
      const pendingCacheKeys = Array.from(asyncRequests.keys());
      return Boolean(pendingCacheKeys.find((key) => {
        const descriptor = decodeCacheKey(key);
        return (!namespaces.length || namespaces.includes(descriptor.namespace)) && !self2.exists({
          namespace: descriptor.namespace,
          language
        });
      }));
    },
    async loadRecords(descriptors, options) {
      const withPromises = descriptors.map((descriptor) => {
        const keyObject = withDefaultNs(descriptor);
        const cacheKey = encodeCacheKey(keyObject);
        if (options === null || options === void 0 ? void 0 : options.useCache) {
          const exists = self2.exists(keyObject, true);
          if (exists) {
            return Object.assign(Object.assign({}, keyObject), { new: false, cacheKey, data: self2.getRecord(keyObject).data });
          }
        }
        const existingPromise = asyncRequests.get(cacheKey);
        if (existingPromise) {
          return Object.assign(Object.assign({}, keyObject), { new: false, promise: existingPromise, cacheKey });
        }
        const dataPromise = fetchData(keyObject, !(options === null || options === void 0 ? void 0 : options.noDev)) || Promise.resolve(void 0);
        asyncRequests.set(cacheKey, dataPromise);
        return Object.assign(Object.assign({}, keyObject), { new: true, promise: dataPromise, cacheKey });
      });
      fetchingObserver.notify();
      loadingObserver.notify();
      const promisesToWait = withPromises.map((val) => val.promise).filter(Boolean);
      const fetchedData = await Promise.all(promisesToWait);
      withPromises.forEach((value) => {
        var _a2;
        if (value.promise) {
          value.data = flattenTranslations((_a2 = fetchedData[0]) !== null && _a2 !== void 0 ? _a2 : {});
          fetchedData.shift();
        }
        const promiseChanged = asyncRequests.get(value.cacheKey) !== value.promise;
        if (value.new && !promiseChanged) {
          asyncRequests.delete(value.cacheKey);
          if (value.data) {
            self2.addRecord(value, value.data);
          } else if (!self2.getRecord(value)) {
            self2.addRecord(value, {});
          }
        }
      });
      fetchingObserver.notify();
      loadingObserver.notify();
      return withPromises.map((val) => {
        var _a2;
        return {
          language: val.language,
          namespace: val.namespace,
          data: (_a2 = val.data) !== null && _a2 !== void 0 ? _a2 : {},
          cacheKey: val.cacheKey
        };
      });
    }
  });
  return self2;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
const defaultObserverOptions = {
  tagAttributes: {
    textarea: ["placeholder"],
    input: ["value", "placeholder"],
    img: ["alt"],
    "*": ["aria-label", "title"]
  },
  restrictedElements: ["script", "style"],
  highlightKeys: ["Alt"],
  highlightColor: "rgb(255, 0, 0)",
  highlightWidth: 5,
  inputPrefix: "%-%tolgee:",
  inputSuffix: "%-%",
  passToParent: ["option", "optgroup"],
  fullKeyEncode: false
};
const DEFAULT_FORMAT_ERROR = "invalid";
const DEFAULT_API_URL = "https://app.tolgee.io";
const DEFAULT_MISSING_TRANSLATION = ({ key }) => key;
const defaultValues = {
  observerOptions: defaultObserverOptions,
  observerType: "invisible",
  onFormatError: DEFAULT_FORMAT_ERROR,
  apiUrl: DEFAULT_API_URL,
  autoLoadRequiredData: true,
  fetch: createFetchFunction(),
  onTranslationMissing: DEFAULT_MISSING_TRANSLATION
};
const combineOptions = (...states) => {
  let result = {};
  states.forEach((state) => {
    result = Object.assign(Object.assign(Object.assign({}, result), state), { observerOptions: Object.assign(Object.assign({}, result.observerOptions), state === null || state === void 0 ? void 0 : state.observerOptions) });
  });
  return result;
};
function initState(options, previousState) {
  const initialOptions = combineOptions(defaultValues, previousState === null || previousState === void 0 ? void 0 : previousState.initialOptions, options);
  initialOptions.apiUrl = sanitizeUrl(initialOptions.apiUrl);
  if (options === null || options === void 0 ? void 0 : options.fetch) {
    initialOptions.fetch = createFetchFunction(options.fetch);
  }
  return {
    initialOptions,
    activeNamespaces: (previousState === null || previousState === void 0 ? void 0 : previousState.activeNamespaces) || /* @__PURE__ */ new Map(),
    language: previousState === null || previousState === void 0 ? void 0 : previousState.language,
    pendingLanguage: previousState === null || previousState === void 0 ? void 0 : previousState.language,
    isInitialLoading: false,
    isRunning: false
  };
}
function Plugins(getLanguage, getInitialOptions, getAvailableLanguages, getFallbackNamespaces, getTranslationNs, getTranslation, changeTranslation, events) {
  const plugins = {
    ui: void 0
  };
  const instances = {
    formatters: [],
    finalFormatter: void 0,
    observer: void 0,
    devBackend: void 0,
    backends: [],
    ui: void 0,
    languageDetector: void 0,
    languageStorage: void 0
  };
  const onClick = async ({ keysAndDefaults, target }) => {
    var _a2;
    const withNs = keysAndDefaults.map(({ key, ns, defaultValue }) => {
      return {
        key,
        defaultValue,
        fallbackNamespaces: getFallbackNamespaces(ns),
        namespace: getTranslationNs({ key, ns })[0],
        translation: getTranslation({
          key,
          ns
        })
      };
    });
    (_a2 = instances.ui) === null || _a2 === void 0 ? void 0 : _a2.handleElementClick(withNs, target);
  };
  const findPositions = (key, ns) => {
    var _a2;
    return ((_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.findPositions(key, ns)) || [];
  };
  function translate(props) {
    const translation = getTranslation({
      key: props.key,
      ns: props.ns
    });
    return self2.formatTranslation(Object.assign(Object.assign({}, props), { translation, formatEnabled: true }));
  }
  function getCommonProps() {
    return { fetch: getInitialOptions().fetch };
  }
  function setObserver(observer) {
    instances.observer = observer === null || observer === void 0 ? void 0 : observer();
  }
  function hasObserver() {
    return Boolean(instances.observer);
  }
  function addFormatter(formatter2) {
    if (formatter2) {
      instances.formatters.push(formatter2);
    }
  }
  function setFinalFormatter(formatter2) {
    instances.finalFormatter = formatter2;
  }
  function setUi(ui) {
    plugins.ui = ui;
  }
  function hasUi() {
    return Boolean(plugins.ui);
  }
  function setLanguageStorage(storage) {
    instances.languageStorage = storage;
  }
  function setLanguageDetector(detector) {
    instances.languageDetector = detector;
  }
  function storageLoadLanguage() {
    return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to load language", e), () => {
      var _a2;
      return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(getCommonProps());
    });
  }
  function detectLanguage2() {
    if (!instances.languageDetector) {
      return void 0;
    }
    const availableLanguages = getAvailableLanguages();
    return handleRegularOrAsyncErr(events.onError, (e) => new LanguageDetectorError("Tolgee: Failed to detect language", e), () => {
      var _a2;
      return (_a2 = instances.languageDetector) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(Object.assign({ availableLanguages }, getCommonProps()));
    });
  }
  function addBackend(backend) {
    if (backend) {
      instances.backends.push(backend);
    }
  }
  function setDevBackend(backend) {
    instances.devBackend = backend;
  }
  function addPlugin(tolgeeInstance, plugin) {
    const pluginTools = Object.freeze({
      setFinalFormatter,
      addFormatter,
      setObserver,
      hasObserver,
      setUi,
      hasUi,
      setDevBackend,
      addBackend,
      setLanguageDetector,
      setLanguageStorage
    });
    plugin(tolgeeInstance, pluginTools);
  }
  const self2 = Object.freeze({
    addPlugin,
    findPositions,
    run() {
      var _a2, _b;
      const { apiKey, apiUrl, projectId, observerOptions, tagNewKeys, filterTag } = getInitialOptions();
      instances.ui = (_a2 = plugins.ui) === null || _a2 === void 0 ? void 0 : _a2.call(plugins, {
        apiKey,
        apiUrl,
        projectId,
        highlight: self2.highlight,
        changeTranslation,
        findPositions,
        onPermanentChange: (data) => events.onPermanentChange.emit(data),
        tagNewKeys,
        filterTag
      });
      (_b = instances.observer) === null || _b === void 0 ? void 0 : _b.run({
        mouseHighlight: true,
        options: observerOptions,
        translate,
        onClick
      });
    },
    stop() {
      var _a2;
      instances.ui = void 0;
      (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.stop();
    },
    getLanguageStorage() {
      return instances.languageStorage;
    },
    getInitialLanguage() {
      const availableLanguages = getAvailableLanguages();
      const languageOrPromise = storageLoadLanguage();
      return valueOrPromise(languageOrPromise, (language) => {
        if ((!availableLanguages || availableLanguages.includes(language)) && language) {
          return language;
        }
        return detectLanguage2();
      });
    },
    setStoredLanguage(language) {
      return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to store language", e), () => {
        var _a2;
        return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.setLanguage(language, getCommonProps());
      });
    },
    getDevBackend() {
      return instances.devBackend;
    },
    getBackendRecord: async ({ language, namespace }) => {
      for (const backend of instances.backends) {
        const data = await backend.getRecord(Object.assign({
          language,
          namespace
        }, getCommonProps()));
        if (data !== void 0) {
          return data;
        }
      }
      return void 0;
    },
    getBackendDevRecord: async ({ language, namespace }) => {
      var _a2;
      const { apiKey, apiUrl, projectId, filterTag } = getInitialOptions();
      if (!apiKey || !apiUrl || !self2.hasDevBackend()) {
        return void 0;
      }
      return (_a2 = instances.devBackend) === null || _a2 === void 0 ? void 0 : _a2.getRecord(Object.assign({
        apiKey,
        apiUrl,
        projectId,
        language,
        namespace,
        filterTag
      }, getCommonProps()));
    },
    getLanguageDetector() {
      return instances.languageDetector;
    },
    retranslate() {
      var _a2;
      (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.retranslate();
    },
    highlight: (key, ns) => {
      var _a2, _b;
      return ((_b = (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.highlight) === null || _b === void 0 ? void 0 : _b.call(_a2, key, ns)) || { unhighlight() {
      } };
    },
    unwrap(text) {
      var _a2;
      if (instances.observer) {
        return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.unwrap(text);
      }
      return { text, keys: [] };
    },
    wrap(params) {
      var _a2;
      if (instances.observer) {
        return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.wrap(params);
      }
      return params.translation;
    },
    hasDevBackend() {
      return Boolean(self2.getDevBackend());
    },
    formatTranslation(_a2) {
      var _b;
      var { formatEnabled } = _a2, props = __rest(_a2, ["formatEnabled"]);
      const { key, translation, defaultValue, noWrap, params, ns, orEmpty } = props;
      const formattableTranslation = translation !== null && translation !== void 0 ? translation : defaultValue;
      let translationMissingResult = "";
      if (translation === void 0 || translation === null) {
        translationMissingResult = getInitialOptions().onTranslationMissing(props);
      }
      let result = formattableTranslation !== null && formattableTranslation !== void 0 ? formattableTranslation : orEmpty ? "" : translationMissingResult;
      const language = getLanguage();
      const isFormatEnabled = formatEnabled || !((_b = instances.observer) === null || _b === void 0 ? void 0 : _b.outputNotFormattable);
      const wrap = (result2) => {
        if (instances.observer && !noWrap) {
          return instances.observer.wrap({
            key,
            translation: result2,
            defaultValue,
            params,
            ns
          });
        }
        return result2;
      };
      result = wrap(result);
      try {
        if (formattableTranslation && language && isFormatEnabled) {
          for (const formatter2 of instances.formatters) {
            result = formatter2.format({
              translation: result,
              language,
              params
            });
          }
        }
        if (instances.finalFormatter && formattableTranslation && language && isFormatEnabled) {
          result = instances.finalFormatter.format({
            translation: result,
            language,
            params
          });
        }
      } catch (e) {
        console.error(e);
        const errorMessage = getErrorMessage(e) || DEFAULT_FORMAT_ERROR;
        const onFormatError = getInitialOptions().onFormatError;
        const formatErrorType = typeof onFormatError;
        if (formatErrorType === "string") {
          result = onFormatError;
        } else if (formatErrorType === "function") {
          result = onFormatError(errorMessage, props);
        } else {
          result = DEFAULT_FORMAT_ERROR;
        }
        result = wrap(result);
      }
      return result;
    }
  });
  return self2;
}
const ValueObserver = (initialValue, valueGetter, handler) => {
  let previousValue = initialValue;
  return Object.freeze({
    init(value) {
      previousValue = value;
    },
    notify() {
      const value = valueGetter();
      if (previousValue !== value) {
        handler(value);
      }
      previousValue = value;
    }
  });
};
function State(onLanguageChange, onPendingLanguageChange, onRunningChange) {
  let state = initState();
  let devCredentials = void 0;
  const self2 = Object.freeze({
    init(options) {
      state = initState(options, state);
    },
    isRunning() {
      return state.isRunning;
    },
    setRunning(value) {
      if (state.isRunning !== value) {
        state.isRunning = value;
        onRunningChange.emit(value);
      }
    },
    isInitialLoading() {
      return state.isInitialLoading;
    },
    setInitialLoading(value) {
      state.isInitialLoading = value;
    },
    getLanguage() {
      return state.language || state.initialOptions.language;
    },
    setLanguage(language) {
      if (state.language !== language) {
        state.language = language;
        onLanguageChange.emit(language);
      }
    },
    getPendingLanguage() {
      return state.pendingLanguage || self2.getLanguage();
    },
    setPendingLanguage(language) {
      if (state.pendingLanguage !== language) {
        state.pendingLanguage = language;
        onPendingLanguageChange.emit(language);
      }
    },
    getInitialOptions() {
      return Object.assign(Object.assign({}, state.initialOptions), devCredentials);
    },
    addActiveNs(ns) {
      const namespaces = getFallbackArray(ns);
      namespaces.forEach((namespace) => {
        const value = state.activeNamespaces.get(namespace);
        if (value !== void 0) {
          state.activeNamespaces.set(namespace, value + 1);
        } else {
          state.activeNamespaces.set(namespace, 1);
        }
      });
    },
    removeActiveNs(ns) {
      const namespaces = getFallbackArray(ns);
      namespaces.forEach((namespace) => {
        const value = state.activeNamespaces.get(namespace);
        if (value !== void 0 && value > 1) {
          state.activeNamespaces.set(namespace, value - 1);
        } else {
          state.activeNamespaces.delete(namespace);
        }
      });
    },
    getRequiredNamespaces() {
      return unique([
        self2.getDefaultNs(),
        ...state.initialOptions.ns || [],
        ...getFallbackArray(state.initialOptions.fallbackNs),
        ...state.activeNamespaces.keys()
      ]);
    },
    getFallbackLangs(lang) {
      const language = lang || self2.getLanguage();
      if (!language) {
        return [];
      }
      return unique([
        language,
        ...getFallbackFromStruct(language, state.initialOptions.fallbackLanguage)
      ]);
    },
    getFallbackNs() {
      return getFallbackArray(state.initialOptions.fallbackNs);
    },
    getNs() {
      var _a2, _b;
      return ((_a2 = state.initialOptions.ns) === null || _a2 === void 0 ? void 0 : _a2.length) ? state.initialOptions.ns : [(_b = state.initialOptions.defaultNs) !== null && _b !== void 0 ? _b : ""];
    },
    getDefaultNs(ns) {
      var _a2, _b, _c;
      return ns === void 0 ? (_c = (_a2 = state.initialOptions.defaultNs) !== null && _a2 !== void 0 ? _a2 : (_b = state.initialOptions.ns) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : "" : ns;
    },
    getAvailableLanguages() {
      if (state.initialOptions.availableLanguages) {
        return state.initialOptions.availableLanguages;
      } else if (state.initialOptions.staticData) {
        const languagesFromStaticData = Object.keys(state.initialOptions.staticData).map((key) => decodeCacheKey(key).language);
        return Array.from(new Set(languagesFromStaticData));
      }
    },
    getAvailableNs() {
      return state.initialOptions.availableNs;
    },
    withDefaultNs(descriptor) {
      return {
        namespace: descriptor.namespace === void 0 ? self2.getDefaultNs() : descriptor.namespace,
        language: descriptor.language
      };
    },
    overrideCredentials(credentials) {
      if (credentials) {
        devCredentials = Object.assign(Object.assign({}, credentials), { apiUrl: sanitizeUrl(credentials.apiUrl) });
      } else {
        devCredentials = void 0;
      }
    }
  });
  return self2;
}
function parseCombinedOptions(_a2) {
  var { ns, noWrap, orEmpty, params, language } = _a2, rest = __rest(_a2, ["ns", "noWrap", "orEmpty", "params", "language"]);
  const options = {
    ns,
    noWrap,
    orEmpty,
    language
  };
  return Object.assign(Object.assign({}, options), { params: Object.assign({}, rest) });
}
const getTranslateProps = (keyOrProps, ...params) => {
  let result = {};
  let options;
  if (typeof keyOrProps === "object") {
    result = keyOrProps;
  } else {
    result.key = keyOrProps;
    if (typeof params[0] === "string") {
      result.defaultValue = params[0];
      options = params[1];
    } else if (typeof params[0] === "object") {
      options = params[0];
    }
  }
  if (options) {
    result = Object.assign(Object.assign({}, parseCombinedOptions(options)), result);
  }
  return result;
};
function Controller({ options }) {
  const events = Events();
  const fetchingObserver = ValueObserver(false, () => cache.isFetching(), events.onFetchingChange.emit);
  const loadingObserver = ValueObserver(false, () => self2.isLoading(), events.onLoadingChange.emit);
  const state = State(events.onLanguageChange, events.onPendingLanguageChange, events.onRunningChange);
  const pluginService = Plugins(state.getLanguage, state.getInitialOptions, state.getAvailableLanguages, getDefaultAndFallbackNs, getTranslationNs, getTranslation, changeTranslation, events);
  const cache = Cache(events, pluginService.getBackendRecord, pluginService.getBackendDevRecord, state.withDefaultNs, state.isInitialLoading, fetchingObserver, loadingObserver);
  if (options) {
    init(options);
  }
  let runPromise;
  events.onUpdate.listen(() => {
    if (state.isRunning()) {
      pluginService.retranslate();
    }
  });
  function getFallbackNs() {
    return state.getFallbackNs();
  }
  function getDefaultNs(ns) {
    return state.getDefaultNs(ns);
  }
  function getDefaultAndFallbackNs(ns) {
    return unique([...getFallbackArray(getDefaultNs(ns)), ...getFallbackNs()]);
  }
  function getRequiredNamespaces(ns) {
    return unique([
      ...getFallbackArray(ns !== null && ns !== void 0 ? ns : getDefaultNs()),
      ...state.getRequiredNamespaces()
    ]);
  }
  function changeTranslation(descriptor, key, value) {
    const keyObject = state.withDefaultNs(descriptor);
    const previousValue = cache.getTranslation(keyObject, key);
    cache.changeTranslation(keyObject, key, value);
    return {
      revert() {
        cache.changeTranslation(keyObject, key, previousValue);
      }
    };
  }
  function init(options2) {
    state.init(options2);
    cache.addStaticData(state.getInitialOptions().staticData);
  }
  function getRequiredDescriptors(lang, ns) {
    const languages = state.getFallbackLangs(lang);
    const namespaces = getRequiredNamespaces(ns);
    const result = [];
    languages.forEach((language) => {
      namespaces.forEach((namespace) => {
        result.push({ language, namespace });
      });
    });
    return result;
  }
  function getMissingDescriptors(lang, ns) {
    return getRequiredDescriptors(lang, ns).filter((descriptor) => !cache.exists(descriptor, true));
  }
  function getMatrixRecords(options2) {
    let languages = [];
    let namespaces = [];
    if (Array.isArray(options2.languages)) {
      languages = options2.languages;
    } else if (options2.languages === "all") {
      const availableLanguages = self2.getAvailableLanguages();
      if (!availableLanguages) {
        throw new Error(missingOptionError("availableLanguages"));
      }
      languages = availableLanguages;
    }
    if (Array.isArray(options2.namespaces)) {
      namespaces = options2.namespaces;
    } else if (options2.namespaces === "all") {
      const availableNs = self2.getAvailableNs();
      if (!availableNs) {
        throw new Error(missingOptionError("availableNs"));
      }
      namespaces = availableNs;
    }
    const records = [];
    languages.forEach((language) => {
      namespaces.forEach((namespace) => {
        records.push({ language, namespace });
      });
    });
    return records;
  }
  function getTranslationNs({ key, ns }) {
    const languages = state.getFallbackLangs();
    const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
    return cache.getTranslationNs(namespaces, languages, key);
  }
  function getTranslation({ key, ns, language }) {
    const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
    const languages = state.getFallbackLangs(language);
    return cache.getTranslationFallback(namespaces, languages, key);
  }
  function loadInitial() {
    const data = valueOrPromise(initializeLanguage(), () => {
      const missingDescriptors = getMissingDescriptors();
      if (missingDescriptors.length && state.getInitialOptions().autoLoadRequiredData) {
        return cache.loadRecords(missingDescriptors, { useCache: true });
      }
    });
    if (isPromise(data)) {
      state.setInitialLoading(true);
      fetchingObserver.notify();
      loadingObserver.notify();
      return Promise.resolve(data).then(() => {
        state.setInitialLoading(false);
        fetchingObserver.notify();
        loadingObserver.notify();
        events.onInitialLoaded.emit();
      });
    } else {
      events.onInitialLoaded.emit();
    }
  }
  function initializeLanguage() {
    const existingLanguage = state.getLanguage();
    if (existingLanguage) {
      return;
    }
    const languageOrPromise = pluginService.getInitialLanguage();
    return valueOrPromise(languageOrPromise, (lang) => {
      const language = lang || state.getInitialOptions().defaultLanguage;
      language && state.setLanguage(language);
    });
  }
  function checkCorrectConfiguration() {
    const languageComputable = pluginService.getLanguageDetector() || pluginService.getLanguageStorage();
    if (languageComputable) {
      const availableLanguages = state.getAvailableLanguages();
      if (!availableLanguages) {
        throw new Error(missingOptionError("availableLanguages"));
      }
    }
    if (!state.getLanguage() && !state.getInitialOptions().defaultLanguage) {
      throw new Error(missingOptionError(["defaultLanguage", "language"]));
    }
  }
  const self2 = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, events), state), pluginService), cache), {
    init,
    getTranslation,
    changeTranslation,
    getTranslationNs,
    getDefaultAndFallbackNs,
    findPositions: pluginService.findPositions,
    getRequiredDescriptors,
    async changeLanguage(language) {
      if (state.getPendingLanguage() === language && state.getLanguage() === language) {
        return;
      }
      state.setPendingLanguage(language);
      if (state.isRunning() && state.getInitialOptions().autoLoadRequiredData) {
        await cache.loadRecords(getRequiredDescriptors(language), {
          useCache: true
        });
      }
      if (language === state.getPendingLanguage()) {
        state.setLanguage(language);
        await pluginService.setStoredLanguage(language);
      }
    },
    async addActiveNs(ns, forget) {
      if (!forget) {
        state.addActiveNs(ns);
      }
      if (state.isRunning()) {
        await cache.loadRecords(getRequiredDescriptors(void 0, ns), {
          useCache: true
        });
      }
    },
    async loadRecord(descriptor, options2) {
      var _a2;
      return (_a2 = (await self2.loadRecords([descriptor], options2))[0]) === null || _a2 === void 0 ? void 0 : _a2.data;
    },
    isLoading(ns) {
      return cache.isLoading(state.getLanguage(), ns);
    },
    isLoaded(ns) {
      const language = state.getLanguage();
      if (!language) {
        return false;
      }
      const languages = state.getFallbackLangs(language);
      const namespaces = getRequiredNamespaces(ns);
      const result = [];
      languages.forEach((language2) => {
        namespaces.forEach((namespace) => {
          if (!cache.exists({ language: language2, namespace })) {
            result.push({ language: language2, namespace });
          }
        });
      });
      return result.length === 0;
    },
    t: (...args) => {
      const params = getTranslateProps(...args);
      const translation = getTranslation(params);
      return pluginService.formatTranslation(Object.assign(Object.assign({}, params), { translation }));
    },
    isDev() {
      return Boolean(state.getInitialOptions().apiKey && state.getInitialOptions().apiUrl);
    },
    async loadRequired(options2) {
      if (!(options2 === null || options2 === void 0 ? void 0 : options2.language)) {
        await initializeLanguage();
      }
      const requiredRecords = getRequiredDescriptors(options2 === null || options2 === void 0 ? void 0 : options2.language);
      return self2.loadRecords(requiredRecords, options2);
    },
    async loadMatrix(options2) {
      const records = getMatrixRecords(options2);
      return self2.loadRecords(records, options2);
    },
    run() {
      checkCorrectConfiguration();
      if (!state.isRunning()) {
        state.setRunning(true);
        pluginService.run();
        runPromise = loadInitial();
      }
      return Promise.resolve(runPromise);
    },
    stop() {
      if (state.isRunning()) {
        pluginService.stop();
        state.setRunning(false);
      }
    }
  }));
  return self2;
}
function createTolgee(options) {
  const controller = Controller({
    options
  });
  if (controller.isDev()) {
    controller.invalidate();
  }
  function withRestart(callback) {
    const wasRunning = controller.isRunning();
    wasRunning && controller.stop();
    callback();
    controller.isDev() && controller.invalidate();
    wasRunning && controller.run();
  }
  const self2 = Object.freeze({
    /**
     * Listen to tolgee events.
     */
    on: controller.on,
    /**
     * Turn off/on events emitting. Is on by default.
     */
    setEmitterActive: controller.setEmitterActive,
    /**
     * @return current language if set.
     */
    getLanguage: controller.getLanguage,
    /**
     * `pendingLanguage` represents language which is currently being loaded.
     * @return current `pendingLanguage` if set.
     */
    getPendingLanguage: controller.getPendingLanguage,
    /**
     * Change current language.
     * - if not running sets `pendingLanguage`, `language` to the new value
     * - if running sets `pendingLanguage` to the value, fetches necessary data and then changes `language`
     *
     * @return Promise which is resolved when `language` is changed.
     */
    changeLanguage: controller.changeLanguage,
    /**
     * Temporarily change translation in cache.
     * @return object with revert method.
     */
    changeTranslation: controller.changeTranslation,
    /**
     * Adds namespace(s) list of active namespaces. And if tolgee is running, loads required data.
     */
    addActiveNs: controller.addActiveNs,
    /**
     * Remove namespace(s) from active namespaces.
     *
     * Tolgee internally counts how many times was each active namespace added,
     * so this method will remove namespace only if the counter goes down to 0.
     */
    removeActiveNs: controller.removeActiveNs,
    /**
     * Load records which would be loaded by `run` function
     *
     * You can provide language if not previously set on tolgee instance
     */
    loadRequired: controller.loadRequired,
    /**
     * Load records in matrix (languages x namespaces)
     */
    loadMatrix: controller.loadMatrix,
    /**
     * Manually load multiple records from `Backend` (or `DevBackend` when in dev mode)
     *
     * It loads data together and adds them to cache in one operation, to prevent partly loaded state.
     */
    loadRecords: controller.loadRecords,
    /**
     * Manually load record from `Backend` (or `DevBackend` when in dev mode)
     */
    loadRecord: controller.loadRecord,
    /**
     * Prefill static data
     */
    addStaticData: controller.addStaticData,
    /**
     * Get record from cache.
     */
    getRecord: controller.getRecord,
    /**
     * Get all records from cache.
     */
    getAllRecords: controller.getAllRecords,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if there are data that need to be fetched.
     */
    isLoaded: controller.isLoaded,
    /**
     * Returns descriptors of records needed for instance to be `loaded`
     */
    getRequiredDescriptors: controller.getRequiredDescriptors,
    /**
     * @return `true` if tolgee is loading initial data (triggered by `run`).
     */
    isInitialLoading: controller.isInitialLoading,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if tolgee is loading some translations for the first time.
     */
    isLoading: controller.isLoading,
    /**
     * @param ns optional list of namespaces that you are interested in
     * @return `true` if tolgee is fetching some translations.
     */
    isFetching: controller.isFetching,
    /**
     * @return `true` if tolgee is running.
     */
    isRunning: controller.isRunning,
    /**
     * Changes internal state to running: true and loads initial files.
     * Runs runnable plugins mainly Observer if present.
     */
    run: controller.run,
    /**
     * Changes internal state to running: false and stops runnable plugins.
     */
    stop: controller.stop,
    /**
     * Returns translated and formatted key.
     * If Observer is present and tolgee is running, wraps result to be identifiable in the DOM.
     */
    t: controller.t,
    /**
     * Highlight keys that match selection.
     */
    highlight: controller.highlight,
    /**
     * Find positions of keys in the DOM.
     */
    findPositions: controller.findPositions,
    /**
     * @return current Tolgee options.
     */
    getInitialOptions: controller.getInitialOptions,
    /**
     * Tolgee is in dev mode if `DevTools` plugin is used and `apiKey` + `apiUrl` are specified.
     * @return `true` if tolgee is in dev mode.
     */
    isDev: controller.isDev,
    /**
     * Wraps translation if there is `Observer` plugin
     */
    wrap: controller.wrap,
    /**
     * Unwrap translation
     */
    unwrap: controller.unwrap,
    /**
     * Override creadentials passed on initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    overrideCredentials(credentials) {
      withRestart(() => controller.overrideCredentials(credentials));
    },
    /**
     * Add tolgee plugin after initialization.
     *
     * When called in running state, tolgee stops and runs again.
     */
    addPlugin(plugin) {
      if (plugin) {
        withRestart(() => controller.addPlugin(self2, plugin));
      }
    },
    /**
     * Updates options after instance creation. Extends existing options,
     * so it only changes the fields, that are listed.
     *
     * When called in running state, tolgee stops and runs again.
     */
    updateOptions(options2) {
      if (options2) {
        withRestart(() => controller.init(options2));
      }
    }
  });
  return self2;
}
const TolgeeCore = () => {
  const state = {
    plugins: [],
    options: {}
  };
  const tolgeeChain = Object.freeze({
    use(plugin) {
      state.plugins.push(plugin);
      return tolgeeChain;
    },
    updateDefaults(options) {
      state.options = combineOptions(state.options, options);
      return tolgeeChain;
    },
    init(options) {
      const tolgee = createTolgee(combineOptions(state.options, options));
      state.plugins.forEach(tolgee.addPlugin);
      return tolgee;
    }
  });
  return tolgeeChain;
};
const ERROR_PARAM_EMPTY = 0, ERROR_UNEXPECTED_CHAR = 1, ERROR_UNEXPECTED_END = 2;
class FormatError extends Error {
  constructor(code, index, text) {
    let error;
    let hint = "";
    if (code === ERROR_PARAM_EMPTY) {
      error = "Empty parameter";
    } else if (code === ERROR_UNEXPECTED_CHAR) {
      error = "Unexpected character";
      hint = "Did you forget to use FormatIcu to render ICU message syntax?";
    } else {
      error = "Unexpected end";
    }
    super(`Tolgee parser: ${error} at ${index} in "${text}"` + (hint ? "\n" + hint : ""));
    this.code = code;
    this.index = index;
  }
}
function isWhitespace(ch) {
  return /\s/.test(ch);
}
const STATE_TEXT = 0, STATE_ESCAPE_MAYBE = 1, STATE_ESCAPE = 2, STATE_PARAM = 3, STATE_PARAM_AFTER = 4;
const END_STATES = /* @__PURE__ */ new Set([
  STATE_ESCAPE,
  STATE_ESCAPE_MAYBE,
  STATE_TEXT
]);
const CHAR_ESCAPE = "'";
const ESCAPABLE = /* @__PURE__ */ new Set(["{", "}", CHAR_ESCAPE]);
const isAllowedInParam = (char) => {
  return /[0-9a-zA-Z_]/.test(char);
};
function formatParser(translation) {
  let state = STATE_TEXT;
  let text = "";
  let param = "";
  let ch = "";
  const texts = [];
  const params = [];
  let i = 0;
  function parsingError(code) {
    throw new FormatError(code, i, translation);
  }
  const addText = () => {
    texts.push(text);
    text = "";
  };
  const addParamChar = () => {
    if (!isAllowedInParam(ch)) {
      parsingError(ERROR_UNEXPECTED_CHAR);
    }
    param += ch;
  };
  const addParam = () => {
    if (param === "") {
      parsingError(ERROR_PARAM_EMPTY);
    }
    params.push(param);
    param = "";
  };
  for (i = 0; i < translation.length; i++) {
    ch = translation[i];
    switch (state) {
      case STATE_TEXT:
        if (ch === CHAR_ESCAPE) {
          text += ch;
          state = STATE_ESCAPE_MAYBE;
        } else if (ch === "{") {
          addText();
          state = STATE_PARAM;
        } else {
          text += ch;
          state = STATE_TEXT;
        }
        break;
      case STATE_ESCAPE_MAYBE:
        if (ESCAPABLE.has(ch)) {
          text = text.slice(0, -1) + ch;
          state = STATE_ESCAPE;
        } else {
          text += ch;
          state = STATE_TEXT;
        }
        break;
      case STATE_ESCAPE:
        if (ch === CHAR_ESCAPE) {
          state = STATE_TEXT;
        } else {
          text += ch;
          state = STATE_ESCAPE;
        }
        break;
      case STATE_PARAM:
        if (ch === "}") {
          addParam();
          state = STATE_TEXT;
        } else if (!isWhitespace(ch)) {
          addParamChar();
          state = STATE_PARAM;
        } else if (param !== "") {
          addParam();
          state = STATE_PARAM_AFTER;
        }
        break;
      case STATE_PARAM_AFTER:
        if (ch == "}") {
          state = STATE_TEXT;
        } else if (isWhitespace(ch)) {
          state = STATE_PARAM_AFTER;
        } else {
          parsingError(ERROR_UNEXPECTED_CHAR);
        }
    }
  }
  if (!END_STATES.has(state)) {
    parsingError(ERROR_UNEXPECTED_END);
  }
  addText();
  return [texts, params];
}
function formatter(translation, params) {
  const [texts, pars] = formatParser(translation);
  const result = [texts[0]];
  for (let i = 1; i < texts.length; i++) {
    const parameter = params === null || params === void 0 ? void 0 : params[pars[i - 1]];
    if (parameter === void 0) {
      throw new Error(`Missing parameter "${pars[i - 1]}" in "${translation}"`);
    }
    result.push(String(parameter));
    result.push(texts[i]);
  }
  return result.join("");
}
function createFormatSimple() {
  return {
    format: ({ translation, params }) => formatter(translation, params)
  };
}
const FormatSimple = () => (tolgee, tools) => {
  tools.setFinalFormatter(createFormatSimple());
  return tolgee;
};
const DEVTOOLS_ID = "__tolgee_dev_tools";
const PREFERRED_LANGUAGES_LOCAL_STORAGE_KEY = "__tolgee_preferredLanguages";
const TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE = "data-tolgee-key-only";
const TOLGEE_RESTRICT_ATTRIBUTE = "data-tolgee-restricted";
const TOLGEE_ATTRIBUTE_NAME = "_tolgee";
const TOLGEE_HIGHLIGHTER_CLASS = "_tolgee-highlighter";
function isSSR() {
  var _a2, _b;
  return typeof ((_b = (_a2 = globalThis.window) == null ? void 0 : _a2.document) == null ? void 0 : _b.createElement) === "undefined";
}
function throwIfSSR(origin) {
  if (isSSR()) {
    throw new Error(`${origin}: Can't run on the server`);
  }
}
function DomHelper(options) {
  function getParentElement(node) {
    if (node.parentElement) {
      return node.parentElement;
    }
    if (node.ownerElement) {
      return node.ownerElement || void 0;
    }
  }
  const self2 = Object.freeze({
    getSuitableParent(node) {
      const domParent = getParentElement(node);
      if (domParent === void 0) {
        console.error(node);
        throw new Error("No suitable parent found for node above.");
      }
      if (!options.passToParent) {
        return domParent;
      }
      if (Array.isArray(options.passToParent)) {
        const tagNameEquals = (elementTagName) => domParent.tagName.toLowerCase() === elementTagName.toLowerCase();
        if (options.passToParent.findIndex(tagNameEquals) === -1) {
          return domParent;
        }
      }
      if (typeof options.passToParent === "function") {
        if (!options.passToParent(domParent)) {
          return domParent;
        }
      }
      return self2.getSuitableParent(domParent);
    }
  });
  return self2;
}
function initElementMeta(element) {
  return {
    element,
    nodes: /* @__PURE__ */ new Map()
  };
}
function initNodeMeta(oldTextContent, keys) {
  return {
    oldTextContent,
    keys
  };
}
function getNodeText(node) {
  return node.textContent;
}
function setNodeText(node, text) {
  node.textContent = text;
}
function compareDescriptors(descriptor, criteria) {
  var _a2;
  const keyMatches = descriptor.key === void 0 || criteria.key === void 0 || criteria.key === descriptor.key;
  const nsMatches = descriptor.ns === void 0 || criteria.ns === void 0 || ((_a2 = descriptor.ns) == null ? void 0 : _a2.findIndex((ns) => {
    var _a3;
    return (_a3 = criteria.ns) == null ? void 0 : _a3.includes(ns);
  })) !== -1;
  return keyMatches && nsMatches;
}
function elementClickable(el) {
  while (el) {
    if (el.getAttribute("disabled") !== null) {
      return false;
    }
    el = el.parentElement;
  }
  return true;
}
const HIGHLIGHTER_BASE_STYLE = {
  position: "fixed",
  boxSizing: "content-box",
  zIndex: String(Number.MAX_SAFE_INTEGER),
  contain: "layout",
  display: "block",
  borderStyle: "solid",
  borderRadius: "4px"
};
function ElementHighlighter({ highlightColor, highlightWidth }) {
  function initHighlightFunction(element, elementMeta) {
    elementMeta.highlight = () => {
      if (!element.isConnected) {
        return;
      }
      const clickable = elementClickable(element);
      let highlightEl = elementMeta.highlightEl;
      if (!highlightEl) {
        highlightEl = document.createElement("div");
        highlightEl.classList.add(TOLGEE_HIGHLIGHTER_CLASS);
        Object.entries(HIGHLIGHTER_BASE_STYLE).forEach(([key, value]) => {
          highlightEl.style[key] = value;
        });
        highlightEl.style.borderColor = highlightColor;
        elementMeta.highlightEl = highlightEl;
        document.body.appendChild(highlightEl);
      }
      const shape = element.getBoundingClientRect();
      highlightEl.style.pointerEvents = clickable ? "none" : "auto";
      highlightEl.style.borderWidth = highlightWidth + "px";
      highlightEl.style.top = shape.top - highlightWidth + "px";
      highlightEl.style.left = shape.left - highlightWidth + "px";
      highlightEl.style.width = shape.width + "px";
      highlightEl.style.height = shape.height + "px";
    };
  }
  function initUnhighlightFunction(element, elementMeta) {
    elementMeta.unhighlight = () => {
      var _a2;
      (_a2 = elementMeta.highlightEl) == null ? void 0 : _a2.remove();
      elementMeta.highlightEl = void 0;
    };
  }
  return Object.freeze({
    initHighlighter(element, elementMeta) {
      initHighlightFunction(element, elementMeta);
      initUnhighlightFunction(element, elementMeta);
    }
  });
}
const eCapture = {
  capture: true
};
const ePassive = {
  capture: true,
  passive: true
};
const MODIFIER_MAP = /* @__PURE__ */ new Map([
  ["Control", "ctrlKey"],
  ["Alt", "altKey"],
  ["Meta", "metaKey"],
  ["Shift", "shiftKey"]
]);
function MouseEventHandler({
  highlightKeys,
  elementStore,
  onClick,
  options
}) {
  var _a2, _b;
  const keysDown = /* @__PURE__ */ new Set();
  let highlighted;
  let cursorPosition;
  let subscribedEvents = [];
  const documentOrShadowRoot = ((_a2 = options.targetElement) == null ? void 0 : _a2.getRootNode()) || document;
  const targetDocument = ((_b = options.targetElement) == null ? void 0 : _b.ownerDocument) || document;
  function highlight(el) {
    var _a3;
    if (highlighted !== el) {
      unhighlight();
      const meta = elementStore.get(el);
      if (meta) {
        meta.preventClean = true;
        (_a3 = meta.highlight) == null ? void 0 : _a3.call(meta);
        highlighted = el;
      }
    }
  }
  function unhighlight() {
    var _a3;
    const meta = elementStore.get(highlighted);
    if (meta) {
      meta.preventClean = false;
      (_a3 = meta.unhighlight) == null ? void 0 : _a3.call(meta);
      highlighted = void 0;
    }
  }
  function updateHighlight() {
    const position = cursorPosition;
    let newHighlighted;
    if (position && areKeysDown()) {
      const elements = documentOrShadowRoot.elementsFromPoint(position.x, position.y) || [];
      newHighlighted = getClosestTolgeeElement(elements);
    }
    highlight(newHighlighted);
  }
  function updateCursorPosition(position) {
    cursorPosition = position;
    updateHighlight();
  }
  function updateModifiers(e) {
    for (const [modifier, modifierProperty] of MODIFIER_MAP.entries()) {
      if (keysDown.has(modifier) && !e[modifierProperty]) {
        keysDown.delete(modifier);
      } else if (!keysDown.has(modifier) && e[modifierProperty]) {
        keysDown.add(modifier);
      }
    }
  }
  function blockEvents(e) {
    updateModifiers(e);
    if (areKeysDown() && !isInUiDialog(e.target)) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function onMouseMove(e) {
    updateModifiers(e);
    updateCursorPosition({ x: e.clientX, y: e.clientY });
  }
  function onKeyDown(e) {
    updateModifiers(e);
    updateHighlight();
  }
  function onKeyUp(e) {
    updateModifiers(e);
    updateHighlight();
  }
  function onScroll() {
    var _a3;
    const meta = elementStore.get(highlighted);
    (_a3 = meta == null ? void 0 : meta.highlight) == null ? void 0 : _a3.call(meta);
  }
  function handleClick(e) {
    blockEvents(e);
    updateModifiers(e);
    updateCursorPosition({ x: e.clientX, y: e.clientY });
    if (areKeysDown() && highlighted) {
      onClick(highlighted);
      unhighlight();
    }
  }
  function subscribe(type, listener, options2) {
    targetDocument.addEventListener(type, listener, options2);
    subscribedEvents.push([type, listener, options2]);
  }
  function initEventListeners() {
    subscribe("keydown", onKeyDown, eCapture);
    subscribe("keyup", onKeyUp, eCapture);
    subscribe("mousemove", onMouseMove, ePassive);
    subscribe("scroll", onScroll, ePassive);
    subscribe("click", handleClick, eCapture);
    subscribe("mouseenter", blockEvents, eCapture);
    subscribe("mouseover", blockEvents, eCapture);
    subscribe("mouseout", blockEvents, eCapture);
    subscribe("mouseleave", blockEvents, eCapture);
    subscribe("mousedown", blockEvents, eCapture);
    subscribe("mouseup", blockEvents, eCapture);
  }
  function removeEventListeners() {
    for (const params of subscribedEvents) {
      targetDocument.removeEventListener(...params);
    }
    subscribedEvents = [];
  }
  function isInUiDialog(element) {
    return Boolean(findAncestor(element, (el) => el.id === DEVTOOLS_ID));
  }
  function getClosestTolgeeElement(elements) {
    for (const element of elements) {
      const result = findAncestor(
        element,
        (el) => elementStore.get(el)
      );
      if (result !== void 0) {
        return result || void 0;
      }
    }
  }
  function findAncestor(element, func) {
    if (element.id === DEVTOOLS_ID) {
      return null;
    }
    if (func(element)) {
      return element;
    }
    if (element == null ? void 0 : element.parentElement) {
      return findAncestor(element.parentElement, func);
    }
    return void 0;
  }
  function areKeysDown() {
    for (const key of highlightKeys) {
      if (!keysDown.has(key)) {
        return false;
      }
    }
    return true;
  }
  return Object.freeze({
    stop() {
      removeEventListeners();
    },
    run() {
      initEventListeners();
    }
  });
}
function ElementRegistry(options, elementStore, onClick) {
  const elementHighlighter = ElementHighlighter({
    highlightColor: options.highlightColor,
    highlightWidth: options.highlightWidth
  });
  const eventHandler = MouseEventHandler({
    highlightKeys: options.highlightKeys,
    elementStore,
    onClick(el) {
      const meta = elementStore.get(el);
      onClick({
        target: el,
        keysAndDefaults: getKeysAndDefaults(meta)
      });
    },
    options
  });
  function isRestricted(element) {
    const restrictedElements = options.restrictedElements;
    return restrictedElements.indexOf(element.tagName.toLowerCase()) !== -1 || element.closest(`[${TOLGEE_RESTRICT_ATTRIBUTE}]`) !== null;
  }
  function cleanElementInactiveNodes(meta, removedNodes) {
    for (const [key] of meta.nodes) {
      if (removedNodes.has(key)) {
        meta.nodes.delete(key);
      }
    }
  }
  function cleanElement(element, meta) {
    var _a2;
    if (meta.highlightEl) {
      (_a2 = meta.unhighlight) == null ? void 0 : _a2.call(meta);
    }
    element.removeAttribute(TOLGEE_ATTRIBUTE_NAME);
    elementStore.remove(element);
  }
  function getKeyOptions(meta) {
    const nodes = Array.from(meta.nodes.values());
    return nodes.reduce(
      (acc, curr) => [
        ...acc,
        ...curr.keys.map((k) => ({
          key: k.key,
          defaultValue: k.defaultValue,
          ns: k.ns
        }))
      ],
      []
    );
  }
  function getKeysAndDefaults(meta) {
    return getKeyOptions(meta);
  }
  return Object.freeze({
    isRestricted,
    register(element, node, nodeMeta) {
      if (isRestricted(element)) {
        return;
      }
      const tolgeeElement = element;
      let elementMeta = elementStore.get(tolgeeElement);
      if (!elementMeta) {
        elementMeta = initElementMeta(tolgeeElement);
        elementStore.set(tolgeeElement, elementMeta);
        tolgeeElement.setAttribute(TOLGEE_ATTRIBUTE_NAME, "true");
      }
      elementMeta.nodes.set(node, nodeMeta);
      elementHighlighter.initHighlighter(tolgeeElement, elementMeta);
    },
    forEachElement: elementStore.forEachElement,
    cleanupLingeringKeyAttributes() {
      elementStore.forEachElement((element, meta) => {
        if (meta.preventClean) {
          return;
        }
        for (const [node] of meta.nodes) {
          if (node.nodeType === Node.ATTRIBUTE_NODE) {
            const attr = node;
            if (attr.name === TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE && attr.ownerElement === null) {
              meta.nodes.delete(attr);
            }
          }
        }
        if (meta.nodes.size === 0) {
          cleanElement(element, meta);
        }
      });
    },
    cleanupRemovedNodes(removedNodes) {
      elementStore.forEachElement((element, meta) => {
        if (meta.preventClean) {
          return;
        }
        if (!removedNodes.has(element)) {
          cleanElementInactiveNodes(meta, removedNodes);
        }
        if (removedNodes.has(element) || meta.nodes.size === 0) {
          cleanElement(element, meta);
        }
      });
    },
    findAll(key, ns) {
      const result = [];
      elementStore.forEachElement((_, meta) => {
        for (const nodeMeta of meta.nodes.values()) {
          const fits = nodeMeta.keys.find(
            (val) => compareDescriptors(
              { key, ns: getFallback(ns) },
              { key: val.key, ns: getFallback(val.ns) }
            )
          );
          if (fits) {
            result.push(meta);
            break;
          }
        }
      });
      return result;
    },
    run(mouseHighlight) {
      if (mouseHighlight) {
        eventHandler.run();
      }
    },
    stop() {
      eventHandler.stop();
      elementStore.forEachElement((_, meta) => {
        var _a2;
        if (meta.highlightEl) {
          (_a2 = meta.unhighlight) == null ? void 0 : _a2.call(meta);
        }
      });
    }
  });
}
function ElementStore() {
  const registredElements = /* @__PURE__ */ new Map();
  return Object.freeze({
    set(el, meta) {
      registredElements.set(el, meta);
    },
    get(el) {
      return el && registredElements.get(el);
    },
    remove(el) {
      return registredElements.delete(el);
    },
    forEachElement(callback) {
      registredElements.forEach((value, key) => callback(key, value));
    }
  });
}
function NodeHandler(options, wrapper) {
  const self2 = Object.freeze({
    handleAttributes(node, includeChild = true) {
      var _a2, _b;
      const result = [];
      const tagAttributes = Object.fromEntries(
        Object.entries(options.tagAttributes).map(([tag, attributes]) => [
          tag.toUpperCase(),
          attributes
        ])
      );
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        let attributes = (_a2 = tagAttributes[element.tagName.toUpperCase()]) != null ? _a2 : [];
        if ("*" in tagAttributes) {
          attributes = attributes.concat(tagAttributes["*"]);
        }
        result.push(
          ...attributes.filter((attrName) => element.hasAttribute(attrName)).map((attrName) => element.getAttributeNode(attrName)).filter(
            (attrNode) => wrapper.testAttribute(attrNode)
          )
        );
      }
      if (includeChild) {
        const walker = document.createTreeWalker(
          node,
          NodeFilter.SHOW_ELEMENT,
          (f) => {
            var _a3, _b2;
            return ((_a3 = tagAttributes[f.tagName.toUpperCase()]) == null ? void 0 : _a3.some(
              (t) => f.hasAttribute(t)
            )) || ((_b2 = tagAttributes["*"]) == null ? void 0 : _b2.some((t) => f.hasAttribute(t))) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        );
        while (walker.nextNode()) {
          const element = walker.currentNode;
          let attributes = (_b = tagAttributes[element.tagName.toUpperCase()]) != null ? _b : [];
          if ("*" in tagAttributes) {
            attributes = attributes.concat(tagAttributes["*"]);
          }
          result.push(
            ...attributes.filter((attrName) => element.hasAttribute(attrName)).map((attrName) => element.getAttributeNode(attrName)).filter(
              (attrNode) => wrapper.testAttribute(attrNode)
            )
          );
        }
      }
      return result;
    },
    handleChildList(node) {
      const result = [];
      result.push(...node.flatMap((n) => self2.handleAttributes(n, true)));
      result.push(...node.flatMap((n) => self2.handleText(n)));
      return result;
    },
    handleText(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return wrapper.testTextNode(node) ? [node] : [];
      }
      const nodes = [];
      const walker = document.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
        (f) => wrapper.testTextNode(f) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      );
      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }
      return nodes;
    }
  });
  return self2;
}
function GeneralObserver() {
  let isObserving = false;
  let instance;
  const elementStore = ElementStore();
  function createRunningInstance({
    mouseHighlight,
    options,
    wrapper,
    onClick
  }) {
    if (isSSR()) {
      return {
        stop() {
          isObserving = false;
        },
        wrapper
      };
    }
    const domHelper = DomHelper(options);
    const nodeHandler = NodeHandler(options, wrapper);
    const elementRegistry = ElementRegistry(options, elementStore, onClick);
    function handleNodes(nodes) {
      for (const textNode of nodes) {
        const parent = textNode.parentElement;
        if (parent && elementRegistry.isRestricted(parent)) {
          continue;
        }
        const oldTextContent = getNodeText(textNode);
        const result = oldTextContent ? wrapper.unwrap(oldTextContent) : null;
        if (result) {
          const { text, keys } = result;
          setNodeText(textNode, text);
          const nodeMeta = initNodeMeta(oldTextContent, keys);
          const parentElement = domHelper.getSuitableParent(textNode);
          elementRegistry.register(parentElement, textNode, nodeMeta);
        }
      }
    }
    function handleKeyAttributeAttr(attr) {
      const parentElement = domHelper.getSuitableParent(attr);
      elementRegistry.register(parentElement, attr, {
        oldTextContent: "",
        keys: [{ key: getNodeText(attr) }],
        keyAttributeOnly: true
      });
    }
    function handleKeyAttribute(node, includeChild) {
      if (node.nodeType === Node.ATTRIBUTE_NODE) {
        const attr = node;
        if (attr.name === TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE) {
          handleKeyAttributeAttr(attr);
          return;
        }
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        const attr = element.getAttributeNode(
          TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE
        );
        if (attr) {
          handleKeyAttributeAttr(attr);
        }
      }
      if (!includeChild) {
        return;
      }
      const walker = document.createTreeWalker(
        node,
        NodeFilter.SHOW_ELEMENT,
        (e) => e.hasAttribute(TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      );
      while (walker.nextNode()) {
        const attr = walker.currentNode.getAttributeNode(
          TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE
        );
        handleKeyAttributeAttr(attr);
      }
    }
    const observer = new MutationObserver((mutationsList) => {
      if (!isObserving) {
        return;
      }
      const removedNodes = mutationsList.filter((m) => m.type === "childList").flatMap((m) => Array.from(m.removedNodes));
      const removedNodesSet = new Set(removedNodes);
      for (const node of removedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          for (let i = 0; i < node.attributes.length; i++) {
            removedNodesSet.add(node.attributes[i]);
          }
        }
        const treeWalker = document.createTreeWalker(
          node,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        while (treeWalker.nextNode()) {
          const currentNode = treeWalker.currentNode;
          if (currentNode.nodeType === Node.ELEMENT_NODE) {
            const element = currentNode;
            for (let i = 0; i < element.attributes.length; i++) {
              removedNodesSet.add(element.attributes[i]);
            }
          }
          removedNodesSet.add(currentNode);
        }
      }
      if (removedNodesSet.size > 0) {
        elementRegistry.cleanupRemovedNodes(removedNodesSet);
      }
      if (mutationsList.some(
        (m) => m.type === "attributes" && m.attributeName === TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE
      )) {
        elementRegistry.cleanupLingeringKeyAttributes();
      }
      const result = /* @__PURE__ */ new Set();
      for (const mutation of mutationsList) {
        switch (mutation.type) {
          case "characterData":
            nodeHandler.handleText(mutation.target).forEach((t) => result.add(t));
            break;
          case "childList":
            handleKeyAttribute(mutation.target, true);
            if (mutation.addedNodes.length > 0) {
              nodeHandler.handleChildList(Array.from(mutation.addedNodes)).forEach((t) => result.add(t));
            }
            if (mutation.removedNodes.length > 0) {
              nodeHandler.handleChildList(Array.from(mutation.removedNodes)).forEach((t) => result.delete(t));
            }
            break;
          case "attributes":
            if (mutation.attributeName === TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE) {
              handleKeyAttribute(mutation.target, false);
            }
            nodeHandler.handleAttributes(mutation.target, false).forEach((t) => result.add(t));
            break;
        }
      }
      handleNodes([...result]);
    });
    const targetElement = options.targetElement || document;
    isObserving = true;
    elementRegistry.run(mouseHighlight);
    handleKeyAttribute(targetElement, true);
    handleNodes(nodeHandler.handleChildList([targetElement]));
    const monitorAttributeList = /* @__PURE__ */ new Set();
    monitorAttributeList.add(TOLGEE_WRAPPED_ONLY_DATA_ATTRIBUTE);
    Object.values(options.tagAttributes).forEach(
      (attrs) => attrs.forEach((attr) => monitorAttributeList.add(attr.toLowerCase()))
    );
    observer.observe(targetElement, {
      attributes: true,
      attributeFilter: [...monitorAttributeList],
      childList: true,
      subtree: true,
      characterData: true
    });
    return {
      stop() {
        isObserving = false;
        elementRegistry.stop();
        observer.disconnect();
      },
      elementRegistry,
      wrapper
    };
  }
  const self2 = Object.freeze({
    run(props) {
      instance = createRunningInstance(props);
    },
    stop() {
      instance == null ? void 0 : instance.stop();
    },
    forEachElement(callback) {
      var _a2, _b;
      (_b = (_a2 = instance == null ? void 0 : instance.elementRegistry) == null ? void 0 : _a2.forEachElement) == null ? void 0 : _b.call(_a2, callback);
    },
    highlight(key, ns) {
      var _a2;
      const elements = ((_a2 = instance == null ? void 0 : instance.elementRegistry) == null ? void 0 : _a2.findAll(key, ns)) || [];
      elements.forEach((el) => {
        var _a3;
        return (_a3 = el.highlight) == null ? void 0 : _a3.call(el);
      });
      return {
        unhighlight() {
          elements.forEach((el) => {
            var _a3;
            return (_a3 = el.unhighlight) == null ? void 0 : _a3.call(el);
          });
        }
      };
    },
    findPositions(key, ns) {
      var _a2;
      const elements = ((_a2 = instance == null ? void 0 : instance.elementRegistry) == null ? void 0 : _a2.findAll(key, ns)) || [];
      const result = [];
      elements.sort((a, b) => {
        if (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING) {
          return -1;
        } else {
          return 1;
        }
      });
      elements.forEach((meta) => {
        const shape = meta.element.getBoundingClientRect();
        meta.nodes.forEach((node) => {
          node.keys.forEach((val) => {
            if (compareDescriptors(
              { key, ns: getFallback(ns) },
              { key: val.key, ns: getFallback(val.ns) }
            ))
              result.push({
                position: {
                  x: shape.x,
                  y: shape.y,
                  width: shape.width,
                  height: shape.height
                },
                keyName: val.key,
                keyNamespace: val.ns || ""
              });
          });
        });
      });
      return result;
    },
    unwrap(text) {
      if (instance) {
        return instance.wrapper.unwrap(text);
      }
      return {
        text,
        keys: []
      };
    },
    wrap(props) {
      if (instance) {
        return instance.wrapper.wrap(props);
      }
      return props.translation || "";
    }
  });
  return self2;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var text_min = {};
(function(scope) {
  function B(r, e) {
    var f;
    return r instanceof Buffer ? f = r : f = Buffer.from(r.buffer, r.byteOffset, r.byteLength), f.toString(e);
  }
  var w = function(r) {
    return Buffer.from(r);
  };
  function h(r) {
    for (var e = 0, f = Math.min(256 * 256, r.length + 1), n = new Uint16Array(f), i = [], o = 0; ; ) {
      var t = e < r.length;
      if (!t || o >= f - 1) {
        var s = n.subarray(0, o), m = s;
        if (i.push(String.fromCharCode.apply(null, m)), !t)
          return i.join("");
        r = r.subarray(e), e = 0, o = 0;
      }
      var a = r[e++];
      if ((a & 128) === 0)
        n[o++] = a;
      else if ((a & 224) === 192) {
        var d = r[e++] & 63;
        n[o++] = (a & 31) << 6 | d;
      } else if ((a & 240) === 224) {
        var d = r[e++] & 63, l = r[e++] & 63;
        n[o++] = (a & 31) << 12 | d << 6 | l;
      } else if ((a & 248) === 240) {
        var d = r[e++] & 63, l = r[e++] & 63, R = r[e++] & 63, c = (a & 7) << 18 | d << 12 | l << 6 | R;
        c > 65535 && (c -= 65536, n[o++] = c >>> 10 & 1023 | 55296, c = 56320 | c & 1023), n[o++] = c;
      }
    }
  }
  function F(r) {
    for (var e = 0, f = r.length, n = 0, i = Math.max(32, f + (f >>> 1) + 7), o = new Uint8Array(i >>> 3 << 3); e < f; ) {
      var t = r.charCodeAt(e++);
      if (t >= 55296 && t <= 56319) {
        if (e < f) {
          var s = r.charCodeAt(e);
          (s & 64512) === 56320 && (++e, t = ((t & 1023) << 10) + (s & 1023) + 65536);
        }
        if (t >= 55296 && t <= 56319)
          continue;
      }
      if (n + 4 > o.length) {
        i += 8, i *= 1 + e / r.length * 2, i = i >>> 3 << 3;
        var m = new Uint8Array(i);
        m.set(o), o = m;
      }
      if ((t & 4294967168) === 0) {
        o[n++] = t;
        continue;
      } else if ((t & 4294965248) === 0)
        o[n++] = t >>> 6 & 31 | 192;
      else if ((t & 4294901760) === 0)
        o[n++] = t >>> 12 & 15 | 224, o[n++] = t >>> 6 & 63 | 128;
      else if ((t & 4292870144) === 0)
        o[n++] = t >>> 18 & 7 | 240, o[n++] = t >>> 12 & 63 | 128, o[n++] = t >>> 6 & 63 | 128;
      else
        continue;
      o[n++] = t & 63 | 128;
    }
    return o.slice ? o.slice(0, n) : o.subarray(0, n);
  }
  var u = "Failed to ", p = function(r, e, f) {
    if (r)
      throw new Error("".concat(u).concat(e, ": the '").concat(f, "' option is unsupported."));
  };
  var x = typeof Buffer == "function" && Buffer.from;
  var A = x ? w : F;
  function v() {
    this.encoding = "utf-8";
  }
  v.prototype.encode = function(r, e) {
    return p(e && e.stream, "encode", "stream"), A(r);
  };
  function U(r) {
    var e;
    try {
      var f = new Blob([r], { type: "text/plain;charset=UTF-8" });
      e = URL.createObjectURL(f);
      var n = new XMLHttpRequest();
      return n.open("GET", e, false), n.send(), n.responseText;
    } finally {
      e && URL.revokeObjectURL(e);
    }
  }
  var O = !x && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", S = ["utf-8", "utf8", "unicode-1-1-utf-8"], T = h;
  x ? T = B : O && (T = function(r) {
    try {
      return U(r);
    } catch (e) {
      return h(r);
    }
  });
  var y = "construct 'TextDecoder'", E = "".concat(u, " ").concat(y, ": the ");
  function g(r, e) {
    p(e && e.fatal, y, "fatal"), r = r || "utf-8";
    var f;
    if (x ? f = Buffer.isEncoding(r) : f = S.indexOf(r.toLowerCase()) !== -1, !f)
      throw new RangeError("".concat(E, " encoding label provided ('").concat(r, "') is invalid."));
    this.encoding = r, this.fatal = false, this.ignoreBOM = false;
  }
  g.prototype.decode = function(r, e) {
    p(e && e.stream, "decode", "stream");
    var f;
    return r instanceof Uint8Array ? f = r : r.buffer instanceof ArrayBuffer ? f = new Uint8Array(r.buffer) : f = new Uint8Array(r), T(f, this.encoding);
  };
  scope.TextEncoder = scope.TextEncoder || v;
  scope.TextDecoder = scope.TextDecoder || g;
})(typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
const FastTextEncoding = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: text_min
}, [text_min]);
(_a = console.assert) == null ? void 0 : _a.call(console, FastTextEncoding);
const INVISIBLE_CHARACTERS = ["‌", "‍"];
const INVISIBLE_REGEX = RegExp(
  `([${INVISIBLE_CHARACTERS.join("")}]{9})+`,
  "gu"
);
function toBytes(text) {
  return Array.from(new TextEncoder().encode(text));
}
function fromBytes(bytes) {
  return new TextDecoder().decode(new Uint8Array(bytes));
}
function padToWholeBytes(binary) {
  const needsToAdd = 8 - binary.length;
  return "0".repeat(needsToAdd) + binary;
}
function encodeMessage(text) {
  const bytes = toBytes(text).map(Number);
  const binary = bytes.map((byte) => padToWholeBytes(byte.toString(2)) + "0").join("");
  const result = Array.from(binary).map((b) => INVISIBLE_CHARACTERS[Number(b)]).join("");
  return result;
}
function decodeMessage(message) {
  const binary = Array.from(message).map((character) => {
    return INVISIBLE_CHARACTERS.indexOf(character);
  }).map(String).join("");
  const textBytes = binary.match(/(.{9})/g);
  const codes = Uint8Array.from(
    (textBytes == null ? void 0 : textBytes.map((byte) => parseInt(byte.slice(0, 8), 2))) || []
  );
  return fromBytes(codes);
}
function decodeFromText(text) {
  var _a2;
  const invisibleMessages = (_a2 = text.match(INVISIBLE_REGEX)) == null ? void 0 : _a2.filter((m) => m.length > 8);
  return (invisibleMessages == null ? void 0 : invisibleMessages.map(decodeMessage)) || [];
}
function removeSecrets(text) {
  return text.replace(INVISIBLE_REGEX, "");
}
function ValueMemory() {
  const values = [];
  return Object.freeze({
    valueToNumber(key) {
      let index = values.indexOf(key);
      if (index === -1) {
        index = values.length;
        values.push(key);
      }
      return index;
    },
    numberToValue(num) {
      return values[num];
    }
  });
}
const MESSAGE_END = "\n";
function InvisibleWrapper({ fullKeyEncode }) {
  const keyMemory = ValueMemory();
  function encodeValue(data) {
    const value = {
      k: data.key,
      n: data.ns || void 0,
      d: data.defaultValue
    };
    return JSON.stringify(value);
  }
  function decodeValue(value) {
    try {
      return JSON.parse(value || "{}");
    } catch (e) {
      console.error(e);
      return void 0;
    }
  }
  function retrieveMessages(text) {
    return text.split(MESSAGE_END).filter((m) => m.length).map((message) => {
      if (message[0] === "{") {
        return message;
      } else {
        const valueCode = Number(message);
        return keyMemory.numberToValue(valueCode);
      }
    });
  }
  function encodeWithSeparator(message) {
    return encodeMessage(message + MESSAGE_END);
  }
  return Object.freeze({
    unwrap(text) {
      const keysAndParams = [];
      const texts = decodeFromText(text);
      texts.forEach((encodedValue) => {
        const messages = retrieveMessages(encodedValue);
        messages.forEach((message) => {
          const decodedVal = decodeValue(message);
          if (decodedVal) {
            const { k: key, d: defaultValue, n: ns } = decodedVal;
            keysAndParams.push({
              key,
              defaultValue,
              ns
            });
          }
        });
      });
      const result = removeSecrets(text);
      return { text: result, keys: keysAndParams };
    },
    wrap({ key, defaultValue, translation, ns }) {
      let invisibleMark;
      if (fullKeyEncode) {
        const encodedValue = encodeValue({ key, ns });
        invisibleMark = encodeWithSeparator(encodedValue);
      } else {
        const encodedValue = encodeValue({ key, ns, defaultValue });
        const code = keyMemory.valueToNumber(encodedValue);
        invisibleMark = encodeWithSeparator(String(code));
      }
      const value = translation || "";
      return typeof value === "string" ? value + invisibleMark : value;
    },
    testTextNode(textNode) {
      var _a2, _b, _c;
      return (_c = ((_a2 = textNode.textContent) == null ? void 0 : _a2.includes(
        `${INVISIBLE_CHARACTERS[0]}${INVISIBLE_CHARACTERS[0]}`
      )) || ((_b = textNode.textContent) == null ? void 0 : _b.includes(
        `${INVISIBLE_CHARACTERS[1]}${INVISIBLE_CHARACTERS[0]}`
      ))) != null ? _c : false;
    },
    testAttribute(attribute) {
      return attribute.value.includes(
        `${INVISIBLE_CHARACTERS[0]}${INVISIBLE_CHARACTERS[0]}`
      ) || attribute.value.includes(
        `${INVISIBLE_CHARACTERS[1]}${INVISIBLE_CHARACTERS[0]}`
      );
    }
  });
}
const InvisibleObserver = () => () => {
  const observer = GeneralObserver();
  const self2 = Object.freeze(__spreadProps(__spreadValues({}, observer), {
    run(props) {
      const wrapper = InvisibleWrapper({
        fullKeyEncode: props.options.fullKeyEncode
      });
      observer.run(__spreadProps(__spreadValues({}, props), { wrapper }));
    },
    retranslate() {
    },
    outputNotFormattable: false
  }));
  return self2;
};
function isCharEscaped(position, fullString) {
  let escapeCharsCount = 0;
  while (position > -1 && fullString[position - 1] === "\\") {
    escapeCharsCount++;
    position--;
  }
  return escapeCharsCount % 2 == 1;
}
function TextWrapper({
  inputPrefix,
  inputSuffix,
  translate
}) {
  function getRawUnWrapRegex() {
    const escapedPrefix = escapeForRegExp(inputPrefix);
    const escapedSuffix = escapeForRegExp(inputSuffix);
    return `(\\\\?)(${escapedPrefix}(.*?)${escapedSuffix})`;
  }
  function parseUnwrapped(unwrappedString) {
    let escaped = false;
    let actual = "";
    let paramName = "";
    let readingState = "KEY";
    const result = {
      key: "",
      ns: void 0,
      params: {},
      defaultValue: void 0
    };
    const addNamespace = (ns) => {
      result.ns = ns;
    };
    for (const char of unwrappedString) {
      if (char === "\\" && !escaped) {
        escaped = true;
        continue;
      }
      if (escaped) {
        escaped = false;
        actual += char;
        continue;
      }
      if (readingState === "KEY" && char === ",") {
        readingState = "DEFAULT_VALUE";
        result.key = actual;
        actual = "";
        continue;
      }
      if (readingState === "KEY" && char === "|") {
        readingState = "NAMESPACE";
        result.key = actual;
        actual = "";
        continue;
      }
      if (readingState === "NAMESPACE" && char === ",") {
        readingState = "DEFAULT_VALUE";
        addNamespace(actual);
        actual = "";
        continue;
      }
      if (readingState === "KEY" && char === ":") {
        readingState = "PARAM_NAME";
        result.key = actual;
        actual = "";
        continue;
      }
      if (readingState === "DEFAULT_VALUE" && char === ":") {
        readingState = "PARAM_NAME";
        result.defaultValue = actual;
        actual = "";
        continue;
      }
      if (readingState === "PARAM_NAME" && char === ":") {
        readingState = "PARAM_VALUE";
        paramName = actual;
        actual = "";
        continue;
      }
      if (readingState === "PARAM_VALUE" && char === ",") {
        readingState = "PARAM_NAME";
        result.params[paramName] = actual;
        actual = "";
        continue;
      }
      actual += char;
    }
    if (readingState === "KEY") {
      result.key = actual;
    }
    if (readingState === "DEFAULT_VALUE") {
      result.defaultValue = actual;
    }
    if (readingState === "PARAM_VALUE") {
      result.params[paramName] = actual;
    }
    if (readingState === "NAMESPACE") {
      addNamespace(actual);
    }
    return result;
  }
  function getTranslatedWithMetadata(text) {
    const { key, params, defaultValue, ns } = parseUnwrapped(text);
    const translated = translate({
      key,
      params,
      defaultValue,
      ns,
      noWrap: true
    });
    return { translated, key, params, defaultValue, ns };
  }
  function escapeForRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function escapeParam(param) {
    if (typeof param === "string") {
      return param.replace(new RegExp("[,:|\\\\]", "gs"), "\\$&");
    }
    if (typeof param === "number" || typeof param === "bigint") {
      return param.toString();
    }
    console.warn(
      `Parameters of type "${typeof param}" are not supported in "text" wrapper mode.`
    );
    return param;
  }
  return Object.freeze({
    wrap({ key, params, defaultValue, ns }) {
      let paramString = Object.entries(params || {}).map(
        ([name, value]) => `${escapeParam(name)}:${escapeParam(value)}`
      ).join(",");
      paramString = paramString.length ? `:${paramString}` : "";
      const defaultString = defaultValue !== void 0 ? `,${escapeParam(defaultValue)}` : "";
      const nsArray = typeof ns === "string" ? [ns] : ns;
      const namespaces = (nsArray == null ? void 0 : nsArray.length) ? `|${nsArray.map((ns2) => escapeParam(ns2)).join("|")}` : "";
      return `${inputPrefix}${escapeParam(
        key
      )}${namespaces}${defaultString}${paramString}${inputSuffix}`;
    },
    unwrap(text) {
      const matchRegexp = new RegExp(getRawUnWrapRegex(), "gs");
      const keysAndParams = [];
      let matched = false;
      let match;
      let start = 0;
      let result = "";
      while ((match = matchRegexp.exec(text)) !== null) {
        let pre = match[1];
        const [fullMatch, _, wrapped, unwrapped] = match;
        const { index, input } = match;
        result += input.substr(start, index - start);
        start = index + fullMatch.length;
        if (pre === "\\") {
          if (!isCharEscaped(index, text)) {
            result += wrapped;
            continue;
          }
          pre = "";
        }
        const translated = getTranslatedWithMetadata(unwrapped);
        keysAndParams.push({
          key: translated.key,
          params: translated.params,
          defaultValue: translated.defaultValue,
          ns: translated.ns
        });
        matched = true;
        result += pre + translated.translated;
      }
      result += text.substring(start);
      if (matched) {
        return { text: result, keys: keysAndParams };
      }
      return { text, keys: [] };
    },
    testTextNode(textNode) {
      var _a2, _b, _c;
      return (_c = ((_a2 = textNode.textContent) == null ? void 0 : _a2.includes(inputPrefix)) && ((_b = textNode.textContent) == null ? void 0 : _b.includes(inputSuffix))) != null ? _c : false;
    },
    testAttribute(attribute) {
      return attribute.value.includes(inputPrefix) && attribute.value.includes(inputSuffix);
    }
  });
}
const TextObserver = () => () => {
  const observer = GeneralObserver();
  const self2 = Object.freeze(__spreadProps(__spreadValues({}, observer), {
    run(props) {
      const wrapper = TextWrapper({
        inputPrefix: props.options.inputPrefix,
        inputSuffix: props.options.inputSuffix,
        translate: props.translate
      });
      observer.run(__spreadProps(__spreadValues({}, props), { wrapper }));
    },
    retranslate() {
      observer.forEachElement((_, elMeta) => {
        for (const [node, nodeMeta] of elMeta.nodes.entries()) {
          if (nodeMeta.keyAttributeOnly) {
            return;
          }
          const result = observer.unwrap(nodeMeta.oldTextContent);
          if (result) {
            setNodeText(node, result.text);
          }
        }
      });
    },
    outputNotFormattable: true
  }));
  return self2;
};
const ObserverPlugin = () => (tolgee, tools) => {
  if (tolgee.getInitialOptions().observerType === "text") {
    tools.setObserver(TextObserver());
  } else {
    tools.setObserver(InvisibleObserver());
  }
  return tolgee;
};
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function readChar(char) {
  const idx = alphabet.indexOf(char);
  if (idx === -1) {
    throw new Error("Invalid character found: " + char);
  }
  return idx;
}
function arrayBufferToString(buffer) {
  const bufView = new Uint8Array(buffer);
  const length = bufView.length;
  let result = "";
  let addition = Math.pow(2, 16) - 1;
  for (let i = 0; i < length; i += addition) {
    if (i + addition > length) {
      addition = length - i;
    }
    result += String.fromCharCode.apply(
      null,
      // @ts-ignore
      bufView.subarray(i, i + addition)
    );
  }
  return result;
}
function base32Decode(input) {
  input = input.toUpperCase();
  const length = input.length;
  let bits = 0;
  let value = 0;
  let index = 0;
  const output = new Uint8Array(length * 5 / 8 | 0);
  for (let i = 0; i < length; i++) {
    value = value << 5 | readChar(input[i]);
    bits += 5;
    if (bits >= 8) {
      output[index++] = value >>> bits - 8 & 255;
      bits -= 8;
    }
  }
  return arrayBufferToString(output.buffer);
}
function getProjectIdFromApiKey(key) {
  if (!key) {
    return void 0;
  }
  try {
    const [prefix, rest] = key.split("_");
    if (prefix === "tgpak") {
      const [projectId] = base32Decode(rest).split("_");
      return Number(projectId);
    }
  } catch (e) {
    console.warn("Tolgee: Api key can't be parsed");
  }
  return void 0;
}
function getApiKeyType(key) {
  if (!key) {
    return void 0;
  }
  const [prefix] = key.split("_");
  if (prefix === "tgpak") {
    return "tgpak";
  } else if (prefix === "tgpat") {
    return "tgpat";
  }
  return "legacy";
}
function composeUrl(base, path) {
  base = base.replace(/\/+$/, "");
  path = path.replace(/^\/+/, "");
  return `${base}/${path}`;
}
function joinUrls(...parts) {
  let result = parts[0];
  parts.slice(1).forEach((part) => {
    result = composeUrl(result, part);
  });
  return result;
}
function createUrl(...parts) {
  const base = typeof window === "undefined" ? void 0 : window.location.origin;
  return new URL(joinUrls(...parts), base);
}
function createDevBackend() {
  return {
    getRecord({
      apiUrl,
      apiKey,
      language,
      namespace,
      projectId,
      filterTag,
      fetch: fetch2
    }) {
      var _a2;
      const pId = (_a2 = getProjectIdFromApiKey(apiKey)) != null ? _a2 : projectId;
      let url;
      if (pId !== void 0) {
        url = createUrl(apiUrl, `/v2/projects/${pId}/translations/${language}`);
      } else {
        url = createUrl(apiUrl, `/v2/projects/translations/${language}`);
      }
      if (namespace) {
        url.searchParams.append("ns", namespace);
      }
      filterTag == null ? void 0 : filterTag.forEach((tag) => {
        url.searchParams.append("filterTag", tag);
      });
      if (getApiKeyType(apiKey) === "tgpat" && projectId === void 0) {
        throw new Error("You need to specify 'projectId' when using PAT key");
      }
      return fetch2(url.toString(), {
        headers: {
          "X-API-Key": apiKey || "",
          "Content-Type": "application/json"
        },
        // @ts-ignore - tell next.js to not use cache
        next: { revalidate: 0 }
      }).then((r) => {
        if (r.ok) {
          return r.json().then((data) => data[language]);
        } else {
          throw new Error(r.statusText);
        }
      });
    }
  };
}
const DevBackend = () => (tolgee, tools) => {
  tools.setDevBackend(createDevBackend());
  return tolgee;
};
function listen(type, callback) {
  const handler = (e) => {
    var _a2, _b;
    if (type.includes((_a2 = e.data) == null ? void 0 : _a2.type)) {
      callback((_b = e.data) == null ? void 0 : _b.data);
    }
  };
  window.addEventListener("message", handler, false);
  return {
    unsubscribe() {
      window.removeEventListener("message", handler);
    }
  };
}
function sendAndRecieve({
  message,
  recievingMessage,
  data,
  attempts = 1,
  timeout = 300
}) {
  let cancelled = false;
  const makeAttempt = () => new Promise((resolve, reject) => {
    const listener = listen(recievingMessage, handler);
    window.postMessage({ type: message, data }, window.origin);
    const timer = setTimeout(expire, timeout);
    function handler(data2) {
      clearTimeout(timer);
      removeEventListener();
      resolve(data2);
    }
    function removeEventListener() {
      listener.unsubscribe();
    }
    function expire() {
      removeEventListener();
      reject();
    }
  });
  const getData = async () => {
    for (let i = 0; i < attempts; i++) {
      if (cancelled) {
        return new Promise(() => {
        });
      }
      try {
        const result = await makeAttempt();
        return result;
      } catch (e) {
        continue;
      }
    }
    if (!cancelled) {
      throw `Didn't recieve ${recievingMessage.join(" or ")} in time.`;
    }
    return new Promise(() => {
    });
  };
  return {
    cancel() {
      cancelled = true;
    },
    promise: getData()
  };
}
function Handshaker() {
  let cancelLast = void 0;
  async function update(data) {
    cancelLast == null ? void 0 : cancelLast();
    const { cancel, promise } = sendAndRecieve({
      message: "TOLGEE_READY",
      recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
      data,
      attempts: 4
    });
    cancelLast = cancel;
    return promise;
  }
  return {
    update
  };
}
const IN_CONTEXT_FILE = "tolgee-in-context-tools.umd.min.js";
const IN_CONTEXT_UMD_NAME = "@tolgee/in-context-tools";
const IN_CONTEXT_EXPORT_NAME = "InContextTools";
const CDN_URL = "https://cdn.jsdelivr.net/npm";
function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", (e) => reject(e.error));
    document.head.appendChild(script);
  });
}
let injectPromise = null;
function loadInContextLib(version) {
  if (!injectPromise) {
    injectPromise = injectScript(
      `${CDN_URL}/@tolgee/web@${version}/dist/${IN_CONTEXT_FILE}`
    ).then(() => {
      return window[IN_CONTEXT_UMD_NAME][IN_CONTEXT_EXPORT_NAME];
    });
  }
  return injectPromise;
}
const API_KEY_LOCAL_STORAGE = "__tolgee_apiKey";
const API_URL_LOCAL_STORAGE = "__tolgee_apiUrl";
function getCredentials() {
  const apiKey = sessionStorage.getItem(API_KEY_LOCAL_STORAGE) || void 0;
  const apiUrl = sessionStorage.getItem(API_URL_LOCAL_STORAGE) || void 0;
  if (!apiKey || !apiUrl) {
    return void 0;
  }
  return {
    apiKey,
    apiUrl
  };
}
function clearSessionStorage() {
  sessionStorage.removeItem(API_KEY_LOCAL_STORAGE);
  sessionStorage.removeItem(API_URL_LOCAL_STORAGE);
}
function onDocumentReady(callback) {
  if (document.readyState !== "loading") {
    Promise.resolve().then(() => {
      callback();
    });
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", callback);
  }
}
let BrowserExtensionPlugin = () => (tolgee) => tolgee;
const sessionStorageAvailable = () => {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    return typeof sessionStorage !== "undefined" && sessionStorage;
  } catch (err) {
    console.error("sessionStorage not available", err);
    return false;
  }
};
if (sessionStorageAvailable()) {
  BrowserExtensionPlugin = () => (tolgee) => {
    const handshaker = Handshaker();
    const getConfig = () => ({
      // prevent extension downloading ui library
      uiPresent: true,
      uiVersion: void 0,
      // tolgee mode
      mode: tolgee.isDev() ? "development" : "production",
      // pass credentials
      config: {
        apiUrl: tolgee.getInitialOptions().apiUrl || "",
        apiKey: tolgee.getInitialOptions().apiKey || ""
      }
    });
    const getTolgeePlugin = async () => {
      const InContextTools = await loadInContextLib(
        "prerelease"
      );
      return (tolgee2) => {
        const credentials2 = getCredentials();
        tolgee2.addPlugin(InContextTools({ credentials: credentials2 }));
        return tolgee2;
      };
    };
    tolgee.on("running", ({ value: isRunning }) => {
      if (isRunning) {
        onDocumentReady(() => {
          handshaker.update(getConfig()).catch(clearSessionStorage);
        });
      }
    });
    const credentials = getCredentials();
    if (credentials) {
      getTolgeePlugin().then((plugin) => {
        tolgee.addPlugin(plugin);
      }).catch((e) => {
        console.error("Tolgee: Failed to load in-context tools");
        console.error(e);
      });
    }
    return tolgee;
  };
}
const CURRENT_LANGUAGE_LOCAL_STORAGE_KEY = "__tolgee_currentLanguage";
function createLanguageStorage() {
  return {
    getLanguage() {
      throwIfSSR("LanguageStorage");
      const storedLanguage = localStorage.getItem(
        CURRENT_LANGUAGE_LOCAL_STORAGE_KEY
      );
      return storedLanguage || void 0;
    },
    setLanguage(language) {
      throwIfSSR("LanguageStorage");
      localStorage.setItem(CURRENT_LANGUAGE_LOCAL_STORAGE_KEY, language);
    }
  };
}
const LanguageStorage = () => (tolgee, tools) => {
  tools.setLanguageStorage(createLanguageStorage());
  return tolgee;
};
function detectLanguage(language, availableLanguages) {
  const exactMatch = availableLanguages.find((l) => l === language);
  if (exactMatch) {
    return exactMatch;
  }
  const getTwoLetters = (fullTag) => fullTag.replace(/^(.+?)(-.*)?$/, "$1");
  const preferredTwoLetter = getTwoLetters(language);
  const twoLetterMatch = availableLanguages.find(
    (l) => getTwoLetters(l) === preferredTwoLetter
  );
  if (twoLetterMatch) {
    return twoLetterMatch;
  }
  return void 0;
}
function createLanguageDetector() {
  return {
    getLanguage({ availableLanguages }) {
      throwIfSSR("LanguageDetector");
      const preferred = window.navigator.language;
      return detectLanguage(preferred, availableLanguages);
    }
  };
}
const LanguageDetector = () => (tolgee, tools) => {
  tools.setLanguageDetector(createLanguageDetector());
  return tolgee;
};
function getHeaderLanguages(headers) {
  const acceptLanguageHeader = headers.get("Accept-Language");
  if (!acceptLanguageHeader) {
    return [];
  }
  const locales = acceptLanguageHeader.split(",").map((locale) => {
    const [localePart] = locale.trim().split(";");
    return localePart;
  });
  return [...new Set(locales.filter((locale) => locale && locale !== "*"))];
}
const detectLanguageFromHeaders = (headers, availableLanguages) => {
  const languages = getHeaderLanguages(headers);
  return languages[0] && detectLanguage(languages[0], availableLanguages);
};
const fetchWithTimeout = (fetch2, url, ms, _b) => {
  var _c = _b, { signal } = _c, options = __objRest(_c, ["signal"]);
  const controller = new AbortController();
  return new Promise((_resolve, _reject) => {
    const promise = fetch2(url, __spreadValues({ signal: controller.signal }, options));
    let done = false;
    function resolve(data) {
      !done && _resolve(data);
      done = true;
    }
    function reject(data) {
      !done && _reject(data);
      done = true;
    }
    function rejectWithTimout() {
      const error = new Error(`TIMEOUT: ${url}`);
      controller.abort(error);
      reject(error);
    }
    if (signal) {
      signal.addEventListener("abort", rejectWithTimout);
    }
    if (ms !== void 0) {
      const timeout = setTimeout(rejectWithTimout, ms);
      promise.finally(() => clearTimeout(timeout));
    }
    promise.catch(reject).then(resolve);
  });
};
function trimSlashes(path) {
  if (path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}
const defaultGetPath = ({ namespace, language, prefix }) => {
  if (namespace) {
    return `${trimSlashes(prefix)}/${namespace}/${language}.json`;
  } else {
    return `${trimSlashes(prefix)}/${language}.json`;
  }
};
function defaultGetData(r) {
  return r.json();
}
const DEFAULT_OPTIONS = {
  prefix: "/i18n",
  getPath: defaultGetPath,
  getData: defaultGetData,
  headers: {
    Accept: "application/json"
  },
  timeout: void 0,
  fallbackOnFail: false
};
function createBackendFetch(options) {
  const _a2 = __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options), {
    headers: __spreadValues(__spreadValues({}, DEFAULT_OPTIONS.headers), options == null ? void 0 : options.headers)
  }), {
    prefix,
    getPath,
    getData,
    headers,
    timeout,
    fallbackOnFail
  } = _a2, fetchOptions = __objRest(_a2, [
    "prefix",
    "getPath",
    "getData",
    "headers",
    "timeout",
    "fallbackOnFail"
  ]);
  return {
    async getRecord({ namespace, language, fetch: fetch2 }) {
      const path = getPath({
        namespace,
        language,
        prefix
      });
      try {
        const r = await fetchWithTimeout(fetch2, path, timeout, __spreadValues({
          headers
        }, fetchOptions));
        if (!r.ok) {
          throw new Error(`${r.url} ${r.status}`);
        }
        return await getData(r);
      } catch (e) {
        if (fallbackOnFail) {
          return void 0;
        } else {
          throw e;
        }
      }
    }
  };
}
const BackendFetch = (options) => (tolgee, tools) => {
  tools.addBackend(createBackendFetch(options));
  return tolgee;
};
function Tolgee() {
  return TolgeeCore().use(BrowserExtensionPlugin());
}
const DevTools = () => (tolgee) => tolgee;

//# sourceMappingURL=tolgee-web.production.esm.js.map


/***/ })

};
;