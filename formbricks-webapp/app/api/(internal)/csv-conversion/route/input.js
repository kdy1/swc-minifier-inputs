(() => {
var exports = {};
exports.id = 2380;
exports.ids = [2380];
exports.modules = {

/***/ 896330:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ 560483:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/scripts/default-index.js");

/***/ }),

/***/ 710846:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 744870:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");

/***/ }),

/***/ 903295:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ 529294:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ 663033:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ 912412:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 979428:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 455511:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 594735:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 781630:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 55591:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 321820:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 111723:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 927910:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 379551:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 328354:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 74075:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 344708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 710273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  patchFetch: () => (/* binding */ patchFetch),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  workAsyncStorage: () => (/* binding */ workAsyncStorage),
  workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)
});

// NAMESPACE OBJECT: ./app/api/(internal)/csv-conversion/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./modules/auth/lib/authOptions.ts + 8 modules
var authOptions = __webpack_require__(136015);
// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(927910);
// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(321820);
;// ../../node_modules/@json2csv/formatters/dist/mjs/default.js
function defaultFormatter(value) {
    if (value === null || value === undefined)
        return '';
    return `${value}`;
}
//# sourceMappingURL=default.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/number.js
function numberFormatter(opts = {}) {
    const { separator, decimals } = opts;
    if (separator) {
        if (decimals) {
            return (value) => value.toFixed(decimals).replace('.', separator);
        }
        return (value) => `${value}`.replace('.', separator);
    }
    if (decimals) {
        return (value) => value.toFixed(decimals);
    }
    return (value) => `${value}`;
}
//# sourceMappingURL=number.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/string.js
function string_stringFormatter(opts = {}) {
    const quote = typeof opts.quote === 'string' ? opts.quote : '"';
    const escapedQuote = typeof opts.escapedQuote === 'string'
        ? opts.escapedQuote
        : `${quote}${quote}`;
    if (!quote || quote === escapedQuote) {
        return (value) => value;
    }
    const quoteRegExp = new RegExp(quote, 'g');
    return (value) => {
        if (value.includes(quote)) {
            value = value.replace(quoteRegExp, escapedQuote);
        }
        return `${quote}${value}${quote}`;
    };
}
//# sourceMappingURL=string.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/stringExcel.js
const quote = '"';
const escapedQuote = '""""';
const quoteRegExp = new RegExp(quote, 'g');
function stringExcel(value) {
    return `"=""${value.replace(quoteRegExp, escapedQuote)}"""`;
}
//# sourceMappingURL=stringExcel.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/symbol.js

function symbolFormatter(opts = { stringFormatter: string_stringFormatter() }) {
    return (value) => opts.stringFormatter(value.toString().slice(7, -1));
}
//# sourceMappingURL=symbol.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/object.js

function object_objectFormatter(opts = { stringFormatter: string_stringFormatter() }) {
    return (value) => {
        if (value === null)
            return '';
        let stringifiedValue = JSON.stringify(value);
        if (stringifiedValue === undefined)
            return '';
        if (stringifiedValue[0] === '"')
            stringifiedValue = stringifiedValue.replace(/^"(.+)"$/, '$1');
        return opts.stringFormatter(stringifiedValue);
    };
}
//# sourceMappingURL=object.js.map
;// ../../node_modules/@json2csv/formatters/dist/mjs/index.js







//# sourceMappingURL=index.js.map
;// ../../node_modules/@json2csv/plainjs/dist/mjs/utils.js
const rePropName = RegExp(
// Match anything that isn't a dot or bracket.
'[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
function castPath(value) {
    var _a, _b, _c;
    const result = [];
    let match;
    while ((match = rePropName.exec(value))) {
        result.push((_c = (_a = match[3]) !== null && _a !== void 0 ? _a : (_b = match[1]) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : match[0]);
    }
    return result;
}
function getProp(obj, path, defaultValue) {
    if (path in obj) {
        const value = obj[path];
        return value === undefined ? defaultValue : value;
    }
    const processedPath = Array.isArray(path) ? path : castPath(path, obj);
    let currentValue = obj;
    for (const key of processedPath) {
        currentValue = currentValue === null || currentValue === void 0 ? void 0 : currentValue[key];
        if (currentValue === undefined)
            return defaultValue;
    }
    return currentValue;
}
function flattenReducer(acc, arr) {
    try {
        // This is faster but susceptible to `RangeError: Maximum call stack size exceeded`
        Array.isArray(arr) ? acc.push(...arr) : acc.push(arr);
        return acc;
    }
    catch (err) {
        // Fallback to a slower but safer option
        return acc.concat(arr);
    }
}
function fastJoin(arr, separator) {
    let isFirst = true;
    return arr.reduce((acc, elem) => {
        if (elem === null || elem === undefined) {
            elem = '';
        }
        if (isFirst) {
            isFirst = false;
            return `${elem}`;
        }
        return `${acc}${separator}${elem}`;
    }, '');
}
//# sourceMappingURL=utils.js.map
;// ../../node_modules/@json2csv/plainjs/dist/mjs/BaseParser.js


var FormatterTypes;
(function (FormatterTypes) {
    FormatterTypes["header"] = "header";
    FormatterTypes["undefined"] = "undefined";
    FormatterTypes["boolean"] = "boolean";
    FormatterTypes["number"] = "number";
    FormatterTypes["bigint"] = "bigint";
    FormatterTypes["string"] = "string";
    FormatterTypes["symbol"] = "symbol";
    FormatterTypes["function"] = "function";
    FormatterTypes["object"] = "object";
})(FormatterTypes || (FormatterTypes = {}));
class JSON2CSVBase {
    constructor(opts) {
        this.opts = this.preprocessOpts(opts);
    }
    /**
     * Check passing opts and set defaults.
     *
     * @param {Json2CsvOptions} opts Options object containing fields,
     * delimiter, default value, header, etc.
     */
    preprocessOpts(opts) {
        const processedOpts = Object.assign({}, opts);
        if (processedOpts.fields) {
            processedOpts.fields = this.preprocessFieldsInfo(processedOpts.fields, processedOpts.defaultValue);
        }
        processedOpts.transforms = processedOpts.transforms || [];
        const stringFormatter = (processedOpts.formatters && processedOpts.formatters['string']) ||
            string_stringFormatter();
        const objectFormatter = object_objectFormatter({ stringFormatter });
        const defaultFormatters = {
            header: stringFormatter,
            undefined: defaultFormatter,
            boolean: defaultFormatter,
            number: numberFormatter(),
            bigint: defaultFormatter,
            string: stringFormatter,
            symbol: symbolFormatter({ stringFormatter }),
            function: objectFormatter,
            object: objectFormatter,
        };
        processedOpts.formatters = Object.assign(Object.assign({}, defaultFormatters), processedOpts.formatters);
        processedOpts.delimiter = processedOpts.delimiter || ',';
        processedOpts.eol = processedOpts.eol || '\n';
        processedOpts.header = processedOpts.header !== false;
        processedOpts.includeEmptyRows = processedOpts.includeEmptyRows || false;
        processedOpts.withBOM = processedOpts.withBOM || false;
        return processedOpts;
    }
    /**
     * Check and normalize the fields configuration.
     *
     * @param {(string|object)[]} fields Fields configuration provided by the user
     * or inferred from the data
     * @returns {object[]} preprocessed FieldsInfo array
     */
    preprocessFieldsInfo(fields, globalDefaultValue) {
        return fields.map((fieldInfo) => {
            if (typeof fieldInfo === 'string') {
                return {
                    label: fieldInfo,
                    value: (row) => getProp(row, fieldInfo, globalDefaultValue),
                };
            }
            if (typeof fieldInfo === 'object') {
                const defaultValue = 'default' in fieldInfo ? fieldInfo.default : globalDefaultValue;
                if (typeof fieldInfo.value === 'string') {
                    const fieldPath = fieldInfo.value;
                    return {
                        label: fieldInfo.label || fieldInfo.value,
                        value: (row) => getProp(row, fieldPath, defaultValue),
                    };
                }
                if (typeof fieldInfo.value === 'function') {
                    const label = fieldInfo.label || fieldInfo.value.name || '';
                    const field = { label, default: defaultValue };
                    const valueGetter = fieldInfo.value;
                    return {
                        label,
                        value(row) {
                            const value = valueGetter(row, field);
                            return value === undefined ? defaultValue : value;
                        },
                    };
                }
            }
            throw new Error('Invalid field info option. ' + JSON.stringify(fieldInfo));
        });
    }
    /**
     * Create the title row with all the provided fields as column headings
     *
     * @returns {String} titles as a string
     */
    getHeader() {
        return fastJoin(this.opts.fields.map((fieldInfo) => this.opts.formatters.header(fieldInfo.label)), this.opts.delimiter);
    }
    /**
     * Preprocess each object according to the given transforms (unwind, flatten, etc.).
     * @param {Object} row JSON object to be converted in a CSV row
     */
    preprocessRow(row) {
        return this.opts.transforms.reduce((rows, transform) => rows.map((row) => transform(row)).reduce(flattenReducer, []), [row]);
    }
    /**
     * Create the content of a specific CSV row
     *
     * @param {Object} row JSON object to be converted in a CSV row
     * @returns {String} CSV string (row)
     */
    processRow(row) {
        if (!row) {
            return undefined;
        }
        const processedRow = this.opts.fields.map((fieldInfo) => this.processCell(row, fieldInfo));
        if (!this.opts.includeEmptyRows &&
            processedRow.every((field) => field === '')) {
            return undefined;
        }
        return fastJoin(processedRow, this.opts.delimiter);
    }
    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {Object} row JSON object representing the  CSV row that the cell belongs to
     * @param {FieldInfo} fieldInfo Details of the field to process to be a CSV cell
     * @returns {String} CSV string (cell)
     */
    processCell(row, fieldInfo) {
        return this.processValue(fieldInfo.value(row));
    }
    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {T} value Value to be included in a CSV cell
     * @returns {String} Value stringified and processed
     */
    processValue(value) {
        const formatter = this.opts.formatters[typeof value];
        return formatter(value);
    }
}
//# sourceMappingURL=BaseParser.js.map
;// ../../node_modules/@json2csv/plainjs/dist/mjs/Parser.js


class JSON2CSVParser extends JSON2CSVBase {
    constructor(opts) {
        super(opts);
    }
    /**
     * Main function that converts json to csv.
     *
     * @param {Array|Object} data Array of JSON objects to be converted to CSV
     * @returns {String} The CSV formated data as a string
     */
    parse(data) {
        const preprocessedData = this.preprocessData(data);
        this.opts.fields =
            this.opts.fields ||
                this.preprocessFieldsInfo(preprocessedData.reduce((fields, item) => {
                    Object.keys(item).forEach((field) => {
                        if (!fields.includes(field)) {
                            fields.push(field);
                        }
                    });
                    return fields;
                }, []), this.opts.defaultValue);
        const header = this.opts.header ? this.getHeader() : '';
        const rows = this.processData(preprocessedData);
        const csv = (this.opts.withBOM ? '\ufeff' : '') +
            header +
            (header && rows ? this.opts.eol : '') +
            rows;
        return csv;
    }
    /**
     * Preprocess the data according to the give opts (unwind, flatten, etc.)
      and calculate the fields and field names if they are not provided.
     *
     * @param {Array|Object} data Array or object to be converted to CSV
     */
    preprocessData(data) {
        const processedData = Array.isArray(data) ? data : [data];
        if (!this.opts.fields) {
            if (data === undefined || data === null || processedData.length === 0) {
                throw new Error('Data should not be empty or the "fields" option should be included');
            }
            if (typeof processedData[0] !== 'object') {
                throw new Error('Data items should be objects or the "fields" option should be included');
            }
        }
        if (this.opts.transforms.length === 0)
            return processedData;
        return processedData
            .map((row) => this.preprocessRow(row))
            .reduce(flattenReducer, []);
    }
    /**
     * Create the content row by row below the header
     *
     * @param {Array} data Array of JSON objects to be converted to CSV
     * @returns {String} CSV string (body)
     */
    processData(data) {
        return fastJoin(data.map((row) => this.processRow(row)).filter((row) => row), // Filter empty rows
        this.opts.eol);
    }
}
//# sourceMappingURL=Parser.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/utils/utf-8.js
var charset;
(function (charset) {
    charset[charset["BACKSPACE"] = 8] = "BACKSPACE";
    charset[charset["FORM_FEED"] = 12] = "FORM_FEED";
    charset[charset["NEWLINE"] = 10] = "NEWLINE";
    charset[charset["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
    charset[charset["TAB"] = 9] = "TAB";
    charset[charset["SPACE"] = 32] = "SPACE";
    charset[charset["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    charset[charset["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
    charset[charset["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
    charset[charset["DOLLAR_SIGN"] = 36] = "DOLLAR_SIGN";
    charset[charset["PERCENT_SIGN"] = 37] = "PERCENT_SIGN";
    charset[charset["AMPERSAND"] = 38] = "AMPERSAND";
    charset[charset["APOSTROPHE"] = 39] = "APOSTROPHE";
    charset[charset["LEFT_PARENTHESIS"] = 40] = "LEFT_PARENTHESIS";
    charset[charset["RIGHT_PARENTHESIS"] = 41] = "RIGHT_PARENTHESIS";
    charset[charset["ASTERISK"] = 42] = "ASTERISK";
    charset[charset["PLUS_SIGN"] = 43] = "PLUS_SIGN";
    charset[charset["COMMA"] = 44] = "COMMA";
    charset[charset["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
    charset[charset["FULL_STOP"] = 46] = "FULL_STOP";
    charset[charset["SOLIDUS"] = 47] = "SOLIDUS";
    charset[charset["DIGIT_ZERO"] = 48] = "DIGIT_ZERO";
    charset[charset["DIGIT_ONE"] = 49] = "DIGIT_ONE";
    charset[charset["DIGIT_TWO"] = 50] = "DIGIT_TWO";
    charset[charset["DIGIT_THREE"] = 51] = "DIGIT_THREE";
    charset[charset["DIGIT_FOUR"] = 52] = "DIGIT_FOUR";
    charset[charset["DIGIT_FIVE"] = 53] = "DIGIT_FIVE";
    charset[charset["DIGIT_SIX"] = 54] = "DIGIT_SIX";
    charset[charset["DIGIT_SEVEN"] = 55] = "DIGIT_SEVEN";
    charset[charset["DIGIT_EIGHT"] = 56] = "DIGIT_EIGHT";
    charset[charset["DIGIT_NINE"] = 57] = "DIGIT_NINE";
    charset[charset["COLON"] = 58] = "COLON";
    charset[charset["SEMICOLON"] = 59] = "SEMICOLON";
    charset[charset["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
    charset[charset["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
    charset[charset["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
    charset[charset["QUESTION_MARK"] = 63] = "QUESTION_MARK";
    charset[charset["COMMERCIAL_AT"] = 64] = "COMMERCIAL_AT";
    charset[charset["LATIN_CAPITAL_LETTER_A"] = 65] = "LATIN_CAPITAL_LETTER_A";
    charset[charset["LATIN_CAPITAL_LETTER_B"] = 66] = "LATIN_CAPITAL_LETTER_B";
    charset[charset["LATIN_CAPITAL_LETTER_C"] = 67] = "LATIN_CAPITAL_LETTER_C";
    charset[charset["LATIN_CAPITAL_LETTER_D"] = 68] = "LATIN_CAPITAL_LETTER_D";
    charset[charset["LATIN_CAPITAL_LETTER_E"] = 69] = "LATIN_CAPITAL_LETTER_E";
    charset[charset["LATIN_CAPITAL_LETTER_F"] = 70] = "LATIN_CAPITAL_LETTER_F";
    charset[charset["LATIN_CAPITAL_LETTER_G"] = 71] = "LATIN_CAPITAL_LETTER_G";
    charset[charset["LATIN_CAPITAL_LETTER_H"] = 72] = "LATIN_CAPITAL_LETTER_H";
    charset[charset["LATIN_CAPITAL_LETTER_I"] = 73] = "LATIN_CAPITAL_LETTER_I";
    charset[charset["LATIN_CAPITAL_LETTER_J"] = 74] = "LATIN_CAPITAL_LETTER_J";
    charset[charset["LATIN_CAPITAL_LETTER_K"] = 75] = "LATIN_CAPITAL_LETTER_K";
    charset[charset["LATIN_CAPITAL_LETTER_L"] = 76] = "LATIN_CAPITAL_LETTER_L";
    charset[charset["LATIN_CAPITAL_LETTER_M"] = 77] = "LATIN_CAPITAL_LETTER_M";
    charset[charset["LATIN_CAPITAL_LETTER_N"] = 78] = "LATIN_CAPITAL_LETTER_N";
    charset[charset["LATIN_CAPITAL_LETTER_O"] = 79] = "LATIN_CAPITAL_LETTER_O";
    charset[charset["LATIN_CAPITAL_LETTER_P"] = 80] = "LATIN_CAPITAL_LETTER_P";
    charset[charset["LATIN_CAPITAL_LETTER_Q"] = 81] = "LATIN_CAPITAL_LETTER_Q";
    charset[charset["LATIN_CAPITAL_LETTER_R"] = 82] = "LATIN_CAPITAL_LETTER_R";
    charset[charset["LATIN_CAPITAL_LETTER_S"] = 83] = "LATIN_CAPITAL_LETTER_S";
    charset[charset["LATIN_CAPITAL_LETTER_T"] = 84] = "LATIN_CAPITAL_LETTER_T";
    charset[charset["LATIN_CAPITAL_LETTER_U"] = 85] = "LATIN_CAPITAL_LETTER_U";
    charset[charset["LATIN_CAPITAL_LETTER_V"] = 86] = "LATIN_CAPITAL_LETTER_V";
    charset[charset["LATIN_CAPITAL_LETTER_W"] = 87] = "LATIN_CAPITAL_LETTER_W";
    charset[charset["LATIN_CAPITAL_LETTER_X"] = 88] = "LATIN_CAPITAL_LETTER_X";
    charset[charset["LATIN_CAPITAL_LETTER_Y"] = 89] = "LATIN_CAPITAL_LETTER_Y";
    charset[charset["LATIN_CAPITAL_LETTER_Z"] = 90] = "LATIN_CAPITAL_LETTER_Z";
    charset[charset["LEFT_SQUARE_BRACKET"] = 91] = "LEFT_SQUARE_BRACKET";
    charset[charset["REVERSE_SOLIDUS"] = 92] = "REVERSE_SOLIDUS";
    charset[charset["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
    charset[charset["CIRCUMFLEX_ACCENT"] = 94] = "CIRCUMFLEX_ACCENT";
    charset[charset["LOW_LINE"] = 95] = "LOW_LINE";
    charset[charset["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
    charset[charset["LATIN_SMALL_LETTER_A"] = 97] = "LATIN_SMALL_LETTER_A";
    charset[charset["LATIN_SMALL_LETTER_B"] = 98] = "LATIN_SMALL_LETTER_B";
    charset[charset["LATIN_SMALL_LETTER_C"] = 99] = "LATIN_SMALL_LETTER_C";
    charset[charset["LATIN_SMALL_LETTER_D"] = 100] = "LATIN_SMALL_LETTER_D";
    charset[charset["LATIN_SMALL_LETTER_E"] = 101] = "LATIN_SMALL_LETTER_E";
    charset[charset["LATIN_SMALL_LETTER_F"] = 102] = "LATIN_SMALL_LETTER_F";
    charset[charset["LATIN_SMALL_LETTER_G"] = 103] = "LATIN_SMALL_LETTER_G";
    charset[charset["LATIN_SMALL_LETTER_H"] = 104] = "LATIN_SMALL_LETTER_H";
    charset[charset["LATIN_SMALL_LETTER_I"] = 105] = "LATIN_SMALL_LETTER_I";
    charset[charset["LATIN_SMALL_LETTER_J"] = 106] = "LATIN_SMALL_LETTER_J";
    charset[charset["LATIN_SMALL_LETTER_K"] = 107] = "LATIN_SMALL_LETTER_K";
    charset[charset["LATIN_SMALL_LETTER_L"] = 108] = "LATIN_SMALL_LETTER_L";
    charset[charset["LATIN_SMALL_LETTER_M"] = 109] = "LATIN_SMALL_LETTER_M";
    charset[charset["LATIN_SMALL_LETTER_N"] = 110] = "LATIN_SMALL_LETTER_N";
    charset[charset["LATIN_SMALL_LETTER_O"] = 111] = "LATIN_SMALL_LETTER_O";
    charset[charset["LATIN_SMALL_LETTER_P"] = 112] = "LATIN_SMALL_LETTER_P";
    charset[charset["LATIN_SMALL_LETTER_Q"] = 113] = "LATIN_SMALL_LETTER_Q";
    charset[charset["LATIN_SMALL_LETTER_R"] = 114] = "LATIN_SMALL_LETTER_R";
    charset[charset["LATIN_SMALL_LETTER_S"] = 115] = "LATIN_SMALL_LETTER_S";
    charset[charset["LATIN_SMALL_LETTER_T"] = 116] = "LATIN_SMALL_LETTER_T";
    charset[charset["LATIN_SMALL_LETTER_U"] = 117] = "LATIN_SMALL_LETTER_U";
    charset[charset["LATIN_SMALL_LETTER_V"] = 118] = "LATIN_SMALL_LETTER_V";
    charset[charset["LATIN_SMALL_LETTER_W"] = 119] = "LATIN_SMALL_LETTER_W";
    charset[charset["LATIN_SMALL_LETTER_X"] = 120] = "LATIN_SMALL_LETTER_X";
    charset[charset["LATIN_SMALL_LETTER_Y"] = 121] = "LATIN_SMALL_LETTER_Y";
    charset[charset["LATIN_SMALL_LETTER_Z"] = 122] = "LATIN_SMALL_LETTER_Z";
    charset[charset["LEFT_CURLY_BRACKET"] = 123] = "LEFT_CURLY_BRACKET";
    charset[charset["VERTICAL_LINE"] = 124] = "VERTICAL_LINE";
    charset[charset["RIGHT_CURLY_BRACKET"] = 125] = "RIGHT_CURLY_BRACKET";
    charset[charset["TILDE"] = 126] = "TILDE";
})(charset || (charset = {}));
const escapedSequences = {
    [charset.QUOTATION_MARK]: charset.QUOTATION_MARK,
    [charset.REVERSE_SOLIDUS]: charset.REVERSE_SOLIDUS,
    [charset.SOLIDUS]: charset.SOLIDUS,
    [charset.LATIN_SMALL_LETTER_B]: charset.BACKSPACE,
    [charset.LATIN_SMALL_LETTER_F]: charset.FORM_FEED,
    [charset.LATIN_SMALL_LETTER_N]: charset.NEWLINE,
    [charset.LATIN_SMALL_LETTER_R]: charset.CARRIAGE_RETURN,
    [charset.LATIN_SMALL_LETTER_T]: charset.TAB,
};
//# sourceMappingURL=utf-8.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/utils/bufferedString.js
class NonBufferedString {
    constructor() {
        this.decoder = new TextDecoder("utf-8");
        this.strings = [];
        this.byteLength = 0;
    }
    appendChar(char) {
        this.strings.push(String.fromCharCode(char));
        this.byteLength += 1;
    }
    appendBuf(buf, start = 0, end = buf.length) {
        this.strings.push(this.decoder.decode(buf.subarray(start, end)));
        this.byteLength += end - start;
    }
    reset() {
        this.strings = [];
        this.byteLength = 0;
    }
    toString() {
        return this.strings.join("");
    }
}
class BufferedString {
    constructor(bufferSize) {
        this.decoder = new TextDecoder("utf-8");
        this.bufferOffset = 0;
        this.string = "";
        this.byteLength = 0;
        this.buffer = new Uint8Array(bufferSize);
    }
    appendChar(char) {
        if (this.bufferOffset >= this.buffer.length)
            this.flushStringBuffer();
        this.buffer[this.bufferOffset++] = char;
        this.byteLength += 1;
    }
    appendBuf(buf, start = 0, end = buf.length) {
        const size = end - start;
        if (this.bufferOffset + size > this.buffer.length)
            this.flushStringBuffer();
        this.buffer.set(buf.subarray(start, end), this.bufferOffset);
        this.bufferOffset += size;
        this.byteLength += size;
    }
    flushStringBuffer() {
        this.string += this.decoder.decode(this.buffer.subarray(0, this.bufferOffset));
        this.bufferOffset = 0;
    }
    reset() {
        this.string = "";
        this.bufferOffset = 0;
        this.byteLength = 0;
    }
    toString() {
        this.flushStringBuffer();
        return this.string;
    }
}
//# sourceMappingURL=bufferedString.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/utils/types/tokenType.js
var TokenType;
(function (TokenType) {
    TokenType[TokenType["LEFT_BRACE"] = 0] = "LEFT_BRACE";
    TokenType[TokenType["RIGHT_BRACE"] = 1] = "RIGHT_BRACE";
    TokenType[TokenType["LEFT_BRACKET"] = 2] = "LEFT_BRACKET";
    TokenType[TokenType["RIGHT_BRACKET"] = 3] = "RIGHT_BRACKET";
    TokenType[TokenType["COLON"] = 4] = "COLON";
    TokenType[TokenType["COMMA"] = 5] = "COMMA";
    TokenType[TokenType["TRUE"] = 6] = "TRUE";
    TokenType[TokenType["FALSE"] = 7] = "FALSE";
    TokenType[TokenType["NULL"] = 8] = "NULL";
    TokenType[TokenType["STRING"] = 9] = "STRING";
    TokenType[TokenType["NUMBER"] = 10] = "NUMBER";
    TokenType[TokenType["SEPARATOR"] = 11] = "SEPARATOR";
})(TokenType || (TokenType = {}));
/* harmony default export */ const tokenType = (TokenType);
//# sourceMappingURL=tokenType.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/tokenizer.js



// Tokenizer States
var TokenizerStates;
(function (TokenizerStates) {
    TokenizerStates[TokenizerStates["START"] = 0] = "START";
    TokenizerStates[TokenizerStates["ENDED"] = 1] = "ENDED";
    TokenizerStates[TokenizerStates["ERROR"] = 2] = "ERROR";
    TokenizerStates[TokenizerStates["TRUE1"] = 3] = "TRUE1";
    TokenizerStates[TokenizerStates["TRUE2"] = 4] = "TRUE2";
    TokenizerStates[TokenizerStates["TRUE3"] = 5] = "TRUE3";
    TokenizerStates[TokenizerStates["FALSE1"] = 6] = "FALSE1";
    TokenizerStates[TokenizerStates["FALSE2"] = 7] = "FALSE2";
    TokenizerStates[TokenizerStates["FALSE3"] = 8] = "FALSE3";
    TokenizerStates[TokenizerStates["FALSE4"] = 9] = "FALSE4";
    TokenizerStates[TokenizerStates["NULL1"] = 10] = "NULL1";
    TokenizerStates[TokenizerStates["NULL2"] = 11] = "NULL2";
    TokenizerStates[TokenizerStates["NULL3"] = 12] = "NULL3";
    TokenizerStates[TokenizerStates["STRING_DEFAULT"] = 13] = "STRING_DEFAULT";
    TokenizerStates[TokenizerStates["STRING_AFTER_BACKSLASH"] = 14] = "STRING_AFTER_BACKSLASH";
    TokenizerStates[TokenizerStates["STRING_UNICODE_DIGIT_1"] = 15] = "STRING_UNICODE_DIGIT_1";
    TokenizerStates[TokenizerStates["STRING_UNICODE_DIGIT_2"] = 16] = "STRING_UNICODE_DIGIT_2";
    TokenizerStates[TokenizerStates["STRING_UNICODE_DIGIT_3"] = 17] = "STRING_UNICODE_DIGIT_3";
    TokenizerStates[TokenizerStates["STRING_UNICODE_DIGIT_4"] = 18] = "STRING_UNICODE_DIGIT_4";
    TokenizerStates[TokenizerStates["STRING_INCOMPLETE_CHAR"] = 19] = "STRING_INCOMPLETE_CHAR";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_INITIAL_MINUS"] = 20] = "NUMBER_AFTER_INITIAL_MINUS";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_INITIAL_ZERO"] = 21] = "NUMBER_AFTER_INITIAL_ZERO";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_INITIAL_NON_ZERO"] = 22] = "NUMBER_AFTER_INITIAL_NON_ZERO";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_FULL_STOP"] = 23] = "NUMBER_AFTER_FULL_STOP";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_DECIMAL"] = 24] = "NUMBER_AFTER_DECIMAL";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_E"] = 25] = "NUMBER_AFTER_E";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_E_AND_SIGN"] = 26] = "NUMBER_AFTER_E_AND_SIGN";
    TokenizerStates[TokenizerStates["NUMBER_AFTER_E_AND_DIGIT"] = 27] = "NUMBER_AFTER_E_AND_DIGIT";
    TokenizerStates[TokenizerStates["SEPARATOR"] = 28] = "SEPARATOR";
    TokenizerStates[TokenizerStates["BOM_OR_START"] = 29] = "BOM_OR_START";
    TokenizerStates[TokenizerStates["BOM"] = 30] = "BOM";
})(TokenizerStates || (TokenizerStates = {}));
function TokenizerStateToString(tokenizerState) {
    return [
        "START",
        "ENDED",
        "ERROR",
        "TRUE1",
        "TRUE2",
        "TRUE3",
        "FALSE1",
        "FALSE2",
        "FALSE3",
        "FALSE4",
        "NULL1",
        "NULL2",
        "NULL3",
        "STRING_DEFAULT",
        "STRING_AFTER_BACKSLASH",
        "STRING_UNICODE_DIGIT_1",
        "STRING_UNICODE_DIGIT_2",
        "STRING_UNICODE_DIGIT_3",
        "STRING_UNICODE_DIGIT_4",
        "STRING_INCOMPLETE_CHAR",
        "NUMBER_AFTER_INITIAL_MINUS",
        "NUMBER_AFTER_INITIAL_ZERO",
        "NUMBER_AFTER_INITIAL_NON_ZERO",
        "NUMBER_AFTER_FULL_STOP",
        "NUMBER_AFTER_DECIMAL",
        "NUMBER_AFTER_E",
        "NUMBER_AFTER_E_AND_SIGN",
        "NUMBER_AFTER_E_AND_DIGIT",
        "SEPARATOR",
        "BOM_OR_START",
        "BOM",
    ][tokenizerState];
}
const defaultOpts = {
    stringBufferSize: 0,
    numberBufferSize: 0,
    separator: undefined,
    emitPartialTokens: false,
};
class TokenizerError extends Error {
    constructor(message) {
        super(message);
        // Typescript is broken. This is a workaround
        Object.setPrototypeOf(this, TokenizerError.prototype);
    }
}
class tokenizer_Tokenizer {
    constructor(opts) {
        this.state = TokenizerStates.BOM_OR_START;
        this.bomIndex = 0;
        this.separatorIndex = 0;
        this.bytes_remaining = 0; // number of bytes remaining in multi byte utf8 char to read after split boundary
        this.bytes_in_sequence = 0; // bytes in multi byte utf8 char to read
        this.char_split_buffer = new Uint8Array(4); // for rebuilding chars split before boundary is reached
        this.encoder = new TextEncoder();
        this.offset = -1;
        opts = Object.assign(Object.assign({}, defaultOpts), opts);
        this.emitPartialTokens = opts.emitPartialTokens === true;
        this.bufferedString =
            opts.stringBufferSize && opts.stringBufferSize > 4
                ? new BufferedString(opts.stringBufferSize)
                : new NonBufferedString();
        this.bufferedNumber =
            opts.numberBufferSize && opts.numberBufferSize > 0
                ? new BufferedString(opts.numberBufferSize)
                : new NonBufferedString();
        this.separator = opts.separator;
        this.separatorBytes = opts.separator
            ? this.encoder.encode(opts.separator)
            : undefined;
    }
    get isEnded() {
        return this.state === TokenizerStates.ENDED;
    }
    write(input) {
        try {
            let buffer;
            if (input instanceof Uint8Array) {
                buffer = input;
            }
            else if (typeof input === "string") {
                buffer = this.encoder.encode(input);
            }
            else if (Array.isArray(input)) {
                buffer = Uint8Array.from(input);
            }
            else if (ArrayBuffer.isView(input)) {
                buffer = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
            }
            else {
                throw new TypeError("Unexpected type. The `write` function only accepts Arrays, TypedArrays and Strings.");
            }
            for (let i = 0; i < buffer.length; i += 1) {
                const n = buffer[i]; // get current byte from buffer
                switch (this.state) {
                    // @ts-ignore fall through case
                    case TokenizerStates.BOM_OR_START:
                        if (input instanceof Uint8Array && n === 0xef) {
                            this.bom = [0xef, 0xbb, 0xbf];
                            this.bomIndex += 1;
                            this.state = TokenizerStates.BOM;
                            continue;
                        }
                        if (input instanceof Uint16Array) {
                            if (n === 0xfe) {
                                this.bom = [0xfe, 0xff];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                            if (n === 0xff) {
                                this.bom = [0xff, 0xfe];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                        }
                        if (input instanceof Uint32Array) {
                            if (n === 0x00) {
                                this.bom = [0x00, 0x00, 0xfe, 0xff];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                            if (n === 0xff) {
                                this.bom = [0xff, 0xfe, 0x00, 0x00];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                        }
                    // Allow cascading
                    case TokenizerStates.START:
                        this.offset += 1;
                        if (this.separatorBytes && n === this.separatorBytes[0]) {
                            if (this.separatorBytes.length === 1) {
                                this.state = TokenizerStates.START;
                                this.onToken({
                                    token: tokenType.SEPARATOR,
                                    value: this.separator,
                                    offset: this.offset + this.separatorBytes.length - 1,
                                });
                                continue;
                            }
                            this.state = TokenizerStates.SEPARATOR;
                            continue;
                        }
                        if (n === charset.SPACE ||
                            n === charset.NEWLINE ||
                            n === charset.CARRIAGE_RETURN ||
                            n === charset.TAB) {
                            // whitespace
                            continue;
                        }
                        if (n === charset.LEFT_CURLY_BRACKET) {
                            this.onToken({
                                token: tokenType.LEFT_BRACE,
                                value: "{",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.RIGHT_CURLY_BRACKET) {
                            this.onToken({
                                token: tokenType.RIGHT_BRACE,
                                value: "}",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.LEFT_SQUARE_BRACKET) {
                            this.onToken({
                                token: tokenType.LEFT_BRACKET,
                                value: "[",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.RIGHT_SQUARE_BRACKET) {
                            this.onToken({
                                token: tokenType.RIGHT_BRACKET,
                                value: "]",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.COLON) {
                            this.onToken({
                                token: tokenType.COLON,
                                value: ":",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.COMMA) {
                            this.onToken({
                                token: tokenType.COMMA,
                                value: ",",
                                offset: this.offset,
                            });
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_T) {
                            this.state = TokenizerStates.TRUE1;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_F) {
                            this.state = TokenizerStates.FALSE1;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_N) {
                            this.state = TokenizerStates.NULL1;
                            continue;
                        }
                        if (n === charset.QUOTATION_MARK) {
                            this.bufferedString.reset();
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        if (n >= charset.DIGIT_ONE && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO;
                            continue;
                        }
                        if (n === charset.DIGIT_ZERO) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_ZERO;
                            continue;
                        }
                        if (n === charset.HYPHEN_MINUS) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_MINUS;
                            continue;
                        }
                        break;
                    // STRING
                    case TokenizerStates.STRING_DEFAULT:
                        if (n === charset.QUOTATION_MARK) {
                            const string = this.bufferedString.toString();
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType.STRING,
                                value: string,
                                offset: this.offset,
                            });
                            this.offset += this.bufferedString.byteLength + 1;
                            continue;
                        }
                        if (n === charset.REVERSE_SOLIDUS) {
                            this.state = TokenizerStates.STRING_AFTER_BACKSLASH;
                            continue;
                        }
                        if (n >= 128) {
                            // Parse multi byte (>=128) chars one at a time
                            if (n >= 194 && n <= 223) {
                                this.bytes_in_sequence = 2;
                            }
                            else if (n <= 239) {
                                this.bytes_in_sequence = 3;
                            }
                            else {
                                this.bytes_in_sequence = 4;
                            }
                            if (this.bytes_in_sequence <= buffer.length - i) {
                                // if bytes needed to complete char fall outside buffer length, we have a boundary split
                                this.bufferedString.appendBuf(buffer, i, i + this.bytes_in_sequence);
                                i += this.bytes_in_sequence - 1;
                                continue;
                            }
                            this.bytes_remaining = i + this.bytes_in_sequence - buffer.length;
                            this.char_split_buffer.set(buffer.subarray(i));
                            i = buffer.length - 1;
                            this.state = TokenizerStates.STRING_INCOMPLETE_CHAR;
                            continue;
                        }
                        if (n >= charset.SPACE) {
                            this.bufferedString.appendChar(n);
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_INCOMPLETE_CHAR:
                        // check for carry over of a multi byte char split between data chunks
                        // & fill temp buffer it with start of this data chunk up to the boundary limit set in the last iteration
                        this.char_split_buffer.set(buffer.subarray(i, i + this.bytes_remaining), this.bytes_in_sequence - this.bytes_remaining);
                        this.bufferedString.appendBuf(this.char_split_buffer, 0, this.bytes_in_sequence);
                        i = this.bytes_remaining - 1;
                        this.state = TokenizerStates.STRING_DEFAULT;
                        continue;
                    case TokenizerStates.STRING_AFTER_BACKSLASH:
                        const controlChar = escapedSequences[n];
                        if (controlChar) {
                            this.bufferedString.appendChar(controlChar);
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.unicode = "";
                            this.state = TokenizerStates.STRING_UNICODE_DIGIT_1;
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_UNICODE_DIGIT_1:
                    case TokenizerStates.STRING_UNICODE_DIGIT_2:
                    case TokenizerStates.STRING_UNICODE_DIGIT_3:
                        if ((n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) ||
                            (n >= charset.LATIN_CAPITAL_LETTER_A &&
                                n <= charset.LATIN_CAPITAL_LETTER_F) ||
                            (n >= charset.LATIN_SMALL_LETTER_A &&
                                n <= charset.LATIN_SMALL_LETTER_F)) {
                            this.unicode += String.fromCharCode(n);
                            this.state += 1;
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_UNICODE_DIGIT_4:
                        if ((n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) ||
                            (n >= charset.LATIN_CAPITAL_LETTER_A &&
                                n <= charset.LATIN_CAPITAL_LETTER_F) ||
                            (n >= charset.LATIN_SMALL_LETTER_A &&
                                n <= charset.LATIN_SMALL_LETTER_F)) {
                            const intVal = parseInt(this.unicode + String.fromCharCode(n), 16);
                            if (this.highSurrogate === undefined) {
                                if (intVal >= 0xd800 && intVal <= 0xdbff) {
                                    //<55296,56319> - highSurrogate
                                    this.highSurrogate = intVal;
                                }
                                else {
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(intVal)));
                                }
                            }
                            else {
                                if (intVal >= 0xdc00 && intVal <= 0xdfff) {
                                    //<56320,57343> - lowSurrogate
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(this.highSurrogate, intVal)));
                                }
                                else {
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(this.highSurrogate)));
                                }
                                this.highSurrogate = undefined;
                            }
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        break;
                    // Number
                    case TokenizerStates.NUMBER_AFTER_INITIAL_MINUS:
                        if (n === charset.DIGIT_ZERO) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_ZERO;
                            continue;
                        }
                        if (n >= charset.DIGIT_ONE && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
                        if (n === charset.FULL_STOP) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_FULL_STOP;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E ||
                            n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        if (n === charset.FULL_STOP) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_FULL_STOP;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E ||
                            n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.NUMBER_AFTER_FULL_STOP:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_DECIMAL;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_DECIMAL:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E ||
                            n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    // @ts-ignore fall through case
                    case TokenizerStates.NUMBER_AFTER_E:
                        if (n === charset.PLUS_SIGN || n === charset.HYPHEN_MINUS) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E_AND_SIGN;
                            continue;
                        }
                    // Allow cascading
                    case TokenizerStates.NUMBER_AFTER_E_AND_SIGN:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E_AND_DIGIT;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    // TRUE
                    case TokenizerStates.TRUE1:
                        if (n === charset.LATIN_SMALL_LETTER_R) {
                            this.state = TokenizerStates.TRUE2;
                            continue;
                        }
                        break;
                    case TokenizerStates.TRUE2:
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.state = TokenizerStates.TRUE3;
                            continue;
                        }
                        break;
                    case TokenizerStates.TRUE3:
                        if (n === charset.LATIN_SMALL_LETTER_E) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType.TRUE,
                                value: true,
                                offset: this.offset,
                            });
                            this.offset += 3;
                            continue;
                        }
                        break;
                    // FALSE
                    case TokenizerStates.FALSE1:
                        if (n === charset.LATIN_SMALL_LETTER_A) {
                            this.state = TokenizerStates.FALSE2;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE2:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.FALSE3;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE3:
                        if (n === charset.LATIN_SMALL_LETTER_S) {
                            this.state = TokenizerStates.FALSE4;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE4:
                        if (n === charset.LATIN_SMALL_LETTER_E) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType.FALSE,
                                value: false,
                                offset: this.offset,
                            });
                            this.offset += 4;
                            continue;
                        }
                        break;
                    // NULL
                    case TokenizerStates.NULL1:
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.state = TokenizerStates.NULL2;
                            continue;
                        }
                        break;
                    case TokenizerStates.NULL2:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.NULL3;
                            continue;
                        }
                        break;
                    case TokenizerStates.NULL3:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType.NULL,
                                value: null,
                                offset: this.offset,
                            });
                            this.offset += 3;
                            continue;
                        }
                        break;
                    case TokenizerStates.SEPARATOR:
                        this.separatorIndex += 1;
                        if (!this.separatorBytes ||
                            n !== this.separatorBytes[this.separatorIndex]) {
                            break;
                        }
                        if (this.separatorIndex === this.separatorBytes.length - 1) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType.SEPARATOR,
                                value: this.separator,
                                offset: this.offset + this.separatorIndex,
                            });
                            this.separatorIndex = 0;
                        }
                        continue;
                    // BOM support
                    case TokenizerStates.BOM:
                        if (n === this.bom[this.bomIndex]) {
                            if (this.bomIndex === this.bom.length - 1) {
                                this.state = TokenizerStates.START;
                                this.bom = undefined;
                                this.bomIndex = 0;
                                continue;
                            }
                            this.bomIndex += 1;
                            continue;
                        }
                        break;
                    case TokenizerStates.ENDED:
                        if (n === charset.SPACE ||
                            n === charset.NEWLINE ||
                            n === charset.CARRIAGE_RETURN ||
                            n === charset.TAB) {
                            // whitespace
                            continue;
                        }
                }
                throw new TokenizerError(`Unexpected "${String.fromCharCode(n)}" at position "${i}" in state ${TokenizerStateToString(this.state)}`);
            }
            if (this.emitPartialTokens) {
                switch (this.state) {
                    case TokenizerStates.TRUE1:
                    case TokenizerStates.TRUE2:
                    case TokenizerStates.TRUE3:
                        this.onToken({
                            token: tokenType.TRUE,
                            value: true,
                            offset: this.offset,
                            partial: true,
                        });
                        break;
                    case TokenizerStates.FALSE1:
                    case TokenizerStates.FALSE2:
                    case TokenizerStates.FALSE3:
                    case TokenizerStates.FALSE4:
                        this.onToken({
                            token: tokenType.FALSE,
                            value: false,
                            offset: this.offset,
                            partial: true,
                        });
                        break;
                    case TokenizerStates.NULL1:
                    case TokenizerStates.NULL2:
                    case TokenizerStates.NULL3:
                        this.onToken({
                            token: tokenType.NULL,
                            value: null,
                            offset: this.offset,
                            partial: true,
                        });
                        break;
                    case TokenizerStates.STRING_DEFAULT: {
                        const string = this.bufferedString.toString();
                        this.onToken({
                            token: tokenType.STRING,
                            value: string,
                            offset: this.offset,
                            partial: true,
                        });
                        break;
                    }
                    case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
                    case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
                    case TokenizerStates.NUMBER_AFTER_DECIMAL:
                    case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                        try {
                            this.onToken({
                                token: tokenType.NUMBER,
                                value: this.parseNumber(this.bufferedNumber.toString()),
                                offset: this.offset,
                                partial: true,
                            });
                        }
                        catch (err) {
                            // Number couldn't be parsed. Do nothing.
                        }
                }
            }
        }
        catch (err) {
            this.error(err);
        }
    }
    emitNumber() {
        this.onToken({
            token: tokenType.NUMBER,
            value: this.parseNumber(this.bufferedNumber.toString()),
            offset: this.offset,
        });
        this.offset += this.bufferedNumber.byteLength - 1;
    }
    parseNumber(numberStr) {
        return Number(numberStr);
    }
    error(err) {
        if (this.state !== TokenizerStates.ENDED) {
            this.state = TokenizerStates.ERROR;
        }
        this.onError(err);
    }
    end() {
        switch (this.state) {
            case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
            case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
            case TokenizerStates.NUMBER_AFTER_DECIMAL:
            case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                this.state = TokenizerStates.ENDED;
                this.emitNumber();
                this.onEnd();
                break;
            case TokenizerStates.BOM_OR_START:
            case TokenizerStates.START:
            case TokenizerStates.ERROR:
            case TokenizerStates.SEPARATOR:
                this.state = TokenizerStates.ENDED;
                this.onEnd();
                break;
            default:
                this.error(new TokenizerError(`Tokenizer ended in the middle of a token (state: ${TokenizerStateToString(this.state)}). Either not all the data was received or the data was invalid.`));
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToken(parsedToken) {
        // Override me
        throw new TokenizerError('Can\'t emit tokens before the "onToken" callback has been set up.');
    }
    onError(err) {
        // Override me
        throw err;
    }
    onEnd() {
        // Override me
    }
}
//# sourceMappingURL=tokenizer.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/utils/types/stackElement.js
var TokenParserMode;
(function (TokenParserMode) {
    TokenParserMode[TokenParserMode["OBJECT"] = 0] = "OBJECT";
    TokenParserMode[TokenParserMode["ARRAY"] = 1] = "ARRAY";
})(TokenParserMode || (TokenParserMode = {}));
//# sourceMappingURL=stackElement.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/tokenparser.js


// Parser States
var TokenParserState;
(function (TokenParserState) {
    TokenParserState[TokenParserState["VALUE"] = 0] = "VALUE";
    TokenParserState[TokenParserState["KEY"] = 1] = "KEY";
    TokenParserState[TokenParserState["COLON"] = 2] = "COLON";
    TokenParserState[TokenParserState["COMMA"] = 3] = "COMMA";
    TokenParserState[TokenParserState["ENDED"] = 4] = "ENDED";
    TokenParserState[TokenParserState["ERROR"] = 5] = "ERROR";
    TokenParserState[TokenParserState["SEPARATOR"] = 6] = "SEPARATOR";
})(TokenParserState || (TokenParserState = {}));
function TokenParserStateToString(state) {
    return ["VALUE", "KEY", "COLON", "COMMA", "ENDED", "ERROR", "SEPARATOR"][state];
}
const tokenparser_defaultOpts = {
    paths: undefined,
    keepStack: true,
    separator: undefined,
    emitPartialValues: false,
};
class TokenParserError extends Error {
    constructor(message) {
        super(message);
        // Typescript is broken. This is a workaround
        Object.setPrototypeOf(this, TokenParserError.prototype);
    }
}
class tokenparser_TokenParser {
    constructor(opts) {
        this.state = TokenParserState.VALUE;
        this.mode = undefined;
        this.key = undefined;
        this.value = undefined;
        this.stack = [];
        opts = Object.assign(Object.assign({}, tokenparser_defaultOpts), opts);
        if (opts.paths) {
            this.paths = opts.paths.map((path) => {
                if (path === undefined || path === "$*")
                    return undefined;
                if (!path.startsWith("$"))
                    throw new TokenParserError(`Invalid selector "${path}". Should start with "$".`);
                const pathParts = path.split(".").slice(1);
                if (pathParts.includes(""))
                    throw new TokenParserError(`Invalid selector "${path}". ".." syntax not supported.`);
                return pathParts;
            });
        }
        this.keepStack = opts.keepStack || false;
        this.separator = opts.separator;
        if (!opts.emitPartialValues) {
            this.emitPartial = () => { };
        }
    }
    shouldEmit() {
        if (!this.paths)
            return true;
        return this.paths.some((path) => {
            var _a;
            if (path === undefined)
                return true;
            if (path.length !== this.stack.length)
                return false;
            for (let i = 0; i < path.length - 1; i++) {
                const selector = path[i];
                const key = this.stack[i + 1].key;
                if (selector === "*")
                    continue;
                if (selector !== key)
                    return false;
            }
            const selector = path[path.length - 1];
            if (selector === "*")
                return true;
            return selector === ((_a = this.key) === null || _a === void 0 ? void 0 : _a.toString());
        });
    }
    push() {
        this.stack.push({
            key: this.key,
            value: this.value,
            mode: this.mode,
            emit: this.shouldEmit(),
        });
    }
    pop() {
        const value = this.value;
        let emit;
        ({
            key: this.key,
            value: this.value,
            mode: this.mode,
            emit,
        } = this.stack.pop());
        this.state =
            this.mode !== undefined ? TokenParserState.COMMA : TokenParserState.VALUE;
        this.emit(value, emit);
    }
    emit(value, emit) {
        if (!this.keepStack &&
            this.value &&
            this.stack.every((item) => !item.emit)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete this.value[this.key];
        }
        if (emit) {
            this.onValue({
                value: value,
                key: this.key,
                parent: this.value,
                stack: this.stack,
            });
        }
        if (this.stack.length === 0) {
            if (this.separator) {
                this.state = TokenParserState.SEPARATOR;
            }
            else if (this.separator === undefined) {
                this.end();
            }
            // else if separator === '', expect next JSON object.
        }
    }
    emitPartial(value) {
        if (!this.shouldEmit())
            return;
        if (this.state === TokenParserState.KEY) {
            this.onValue({
                value: undefined,
                key: value,
                parent: this.value,
                stack: this.stack,
                partial: true,
            });
            return;
        }
        this.onValue({
            value: value,
            key: this.key,
            parent: this.value,
            stack: this.stack,
            partial: true,
        });
    }
    get isEnded() {
        return this.state === TokenParserState.ENDED;
    }
    write({ token, value, partial, }) {
        try {
            if (partial) {
                this.emitPartial(value);
                return;
            }
            if (this.state === TokenParserState.VALUE) {
                if (token === tokenType.STRING ||
                    token === tokenType.NUMBER ||
                    token === tokenType.TRUE ||
                    token === tokenType.FALSE ||
                    token === tokenType.NULL) {
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value[this.key] = value;
                        this.state = TokenParserState.COMMA;
                    }
                    else if (this.mode === TokenParserMode.ARRAY) {
                        this.value.push(value);
                        this.state = TokenParserState.COMMA;
                    }
                    this.emit(value, this.shouldEmit());
                    return;
                }
                if (token === tokenType.LEFT_BRACE) {
                    this.push();
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value = this.value[this.key] = {};
                    }
                    else if (this.mode === TokenParserMode.ARRAY) {
                        const val = {};
                        this.value.push(val);
                        this.value = val;
                    }
                    else {
                        this.value = {};
                    }
                    this.mode = TokenParserMode.OBJECT;
                    this.state = TokenParserState.KEY;
                    this.key = undefined;
                    this.emitPartial();
                    return;
                }
                if (token === tokenType.LEFT_BRACKET) {
                    this.push();
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value = this.value[this.key] = [];
                    }
                    else if (this.mode === TokenParserMode.ARRAY) {
                        const val = [];
                        this.value.push(val);
                        this.value = val;
                    }
                    else {
                        this.value = [];
                    }
                    this.mode = TokenParserMode.ARRAY;
                    this.state = TokenParserState.VALUE;
                    this.key = 0;
                    this.emitPartial();
                    return;
                }
                if (this.mode === TokenParserMode.ARRAY &&
                    token === tokenType.RIGHT_BRACKET &&
                    this.value.length === 0) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.KEY) {
                if (token === tokenType.STRING) {
                    this.key = value;
                    this.state = TokenParserState.COLON;
                    this.emitPartial();
                    return;
                }
                if (token === tokenType.RIGHT_BRACE &&
                    Object.keys(this.value).length === 0) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.COLON) {
                if (token === tokenType.COLON) {
                    this.state = TokenParserState.VALUE;
                    return;
                }
            }
            if (this.state === TokenParserState.COMMA) {
                if (token === tokenType.COMMA) {
                    if (this.mode === TokenParserMode.ARRAY) {
                        this.state = TokenParserState.VALUE;
                        this.key += 1;
                        return;
                    }
                    /* istanbul ignore else */
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.state = TokenParserState.KEY;
                        return;
                    }
                }
                if ((token === tokenType.RIGHT_BRACE &&
                    this.mode === TokenParserMode.OBJECT) ||
                    (token === tokenType.RIGHT_BRACKET &&
                        this.mode === TokenParserMode.ARRAY)) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.SEPARATOR) {
                if (token === tokenType.SEPARATOR && value === this.separator) {
                    this.state = TokenParserState.VALUE;
                    return;
                }
            }
            throw new TokenParserError(`Unexpected ${tokenType[token]} (${JSON.stringify(value)}) in state ${TokenParserStateToString(this.state)}`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (err) {
            this.error(err);
        }
    }
    error(err) {
        if (this.state !== TokenParserState.ENDED) {
            this.state = TokenParserState.ERROR;
        }
        this.onError(err);
    }
    end() {
        if ((this.state !== TokenParserState.VALUE &&
            this.state !== TokenParserState.SEPARATOR) ||
            this.stack.length > 0) {
            this.error(new Error(`Parser ended in mid-parsing (state: ${TokenParserStateToString(this.state)}). Either not all the data was received or the data was invalid.`));
        }
        else {
            this.state = TokenParserState.ENDED;
            this.onEnd();
        }
    }
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    onValue(parsedElementInfo) {
        // Override me
        throw new TokenParserError('Can\'t emit data before the "onValue" callback has been set up.');
    }
    onError(err) {
        // Override me
        throw err;
    }
    onEnd() {
        // Override me
    }
}
//# sourceMappingURL=tokenparser.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/jsonparser.js


class JSONParser {
    constructor(opts = {}) {
        this.tokenizer = new Tokenizer(opts);
        this.tokenParser = new TokenParser(opts);
        this.tokenizer.onToken = this.tokenParser.write.bind(this.tokenParser);
        this.tokenizer.onEnd = () => {
            if (!this.tokenParser.isEnded)
                this.tokenParser.end();
        };
        this.tokenParser.onError = this.tokenizer.error.bind(this.tokenizer);
        this.tokenParser.onEnd = () => {
            if (!this.tokenizer.isEnded)
                this.tokenizer.end();
        };
    }
    get isEnded() {
        return this.tokenizer.isEnded && this.tokenParser.isEnded;
    }
    write(input) {
        this.tokenizer.write(input);
    }
    end() {
        this.tokenizer.end();
    }
    set onToken(cb) {
        this.tokenizer.onToken = (parsedToken) => {
            cb(parsedToken);
            this.tokenParser.write(parsedToken);
        };
    }
    set onValue(cb) {
        this.tokenParser.onValue = cb;
    }
    set onError(cb) {
        this.tokenizer.onError = cb;
    }
    set onEnd(cb) {
        this.tokenParser.onEnd = () => {
            if (!this.tokenizer.isEnded)
                this.tokenizer.end();
            cb.call(this.tokenParser);
        };
    }
}
//# sourceMappingURL=jsonparser.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/utils/types/parsedTokenInfo.js

//# sourceMappingURL=parsedTokenInfo.js.map
;// ../../node_modules/@streamparser/json/dist/mjs/index.js









//# sourceMappingURL=index.js.map
;// ../../node_modules/@json2csv/plainjs/dist/mjs/StreamParser.js


class JSON2CSVStreamParser extends JSON2CSVBase {
    constructor(opts, asyncOpts) {
        super(opts);
        this._hasWritten = false;
        if (this.opts.fields)
            this.preprocessFieldsInfo(this.opts.fields, this.opts.defaultValue);
        this.initTokenizer(this.opts, asyncOpts);
    }
    initTokenizer(opts, asyncOpts = {}) {
        if (asyncOpts.objectMode) {
            this.tokenizer = this.getObjectModeTokenizer();
            return;
        }
        if (opts.ndjson) {
            this.tokenizer = this.getNdJsonTokenizer(asyncOpts);
            return;
        }
        this.tokenizer = this.getBinaryModeTokenizer(asyncOpts);
        return;
    }
    getObjectModeTokenizer() {
        return {
            write: (data) => this.pushLine(data),
            end: () => {
                this.pushHeaderIfNotWritten();
                this.onEnd();
            },
        };
    }
    configureCallbacks(tokenizer, tokenParser) {
        tokenizer.onToken = tokenParser.write.bind(this.tokenParser);
        tokenizer.onError = (err) => this.onError(err);
        tokenizer.onEnd = () => {
            if (!this.tokenParser.isEnded)
                this.tokenParser.end();
        };
        tokenParser.onValue = ({ value }) => this.pushLine(value);
        tokenParser.onError = (err) => this.onError(err);
        tokenParser.onEnd = () => {
            this.pushHeaderIfNotWritten();
            this.onEnd();
        };
    }
    getNdJsonTokenizer(asyncOpts) {
        const tokenizer = new tokenizer_Tokenizer(Object.assign(Object.assign({}, asyncOpts), { separator: this.opts.eol }));
        this.tokenParser = new tokenparser_TokenParser({
            paths: ['$'],
            keepStack: false,
            separator: this.opts.eol,
        });
        this.configureCallbacks(tokenizer, this.tokenParser);
        return tokenizer;
    }
    getBinaryModeTokenizer(asyncOpts) {
        const tokenizer = new tokenizer_Tokenizer(asyncOpts);
        tokenizer.onToken = ({ token, value }) => {
            if (token === tokenType.LEFT_BRACKET) {
                this.tokenParser = new tokenparser_TokenParser({
                    paths: ['$.*'],
                    keepStack: false,
                });
            }
            else if (token === tokenType.LEFT_BRACE) {
                this.tokenParser = new tokenparser_TokenParser({ paths: ['$'], keepStack: false });
            }
            else {
                this.onError(new Error('Data items should be objects or the "fields" option should be included'));
                return;
            }
            this.configureCallbacks(tokenizer, this.tokenParser);
            this.tokenParser.write({ token, value });
        };
        tokenizer.onError = (err) => this.onError(err instanceof TokenizerError
            ? new Error('Data should be a valid JSON object or array')
            : err);
        tokenizer.onEnd = () => {
            this.pushHeaderIfNotWritten();
            this.onEnd();
        };
        return tokenizer;
    }
    // TODO this should be narrowed based on options
    write(data) {
        this.tokenizer.write(data);
    }
    end() {
        if (this.tokenizer && !this.tokenizer.isEnded)
            this.tokenizer.end();
    }
    pushHeaderIfNotWritten() {
        if (this._hasWritten)
            return;
        if (!this.opts.fields) {
            this.onError(new Error('Data should not be empty or the "fields" option should be included'));
            return;
        }
        this.pushHeader();
    }
    /**
     * Generate the csv header and pushes it downstream.
     */
    pushHeader() {
        if (this.opts.withBOM) {
            this.onData('\ufeff');
        }
        if (this.opts.header) {
            const header = this.getHeader();
            this.onHeader(header);
            this.onData(header);
            this._hasWritten = true;
        }
    }
    /**
     * Transforms an incoming json data to csv and pushes it downstream.
     *
     * @param {Object} data JSON object to be converted in a CSV row
     */
    pushLine(data) {
        const processedData = this.preprocessRow(data);
        if (!this._hasWritten) {
            if (!this.opts.fields) {
                if (typeof processedData[0] !== 'object') {
                    throw new Error('Data items should be objects or the "fields" option should be included');
                }
                this.opts.fields = this.preprocessFieldsInfo(Object.keys(processedData[0]), this.opts.defaultValue);
            }
            this.pushHeader();
        }
        processedData.forEach((row) => {
            const line = this.processRow(row);
            if (line === undefined)
                return;
            this.onLine(line);
            this.onData(this._hasWritten ? this.opts.eol + line : line);
            this._hasWritten = true;
        });
    }
    // No idea why eslint doesn't detect the usage of these
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /* c8 ignore start */
    onHeader(header) {
        /* To be set by the user */
    }
    onLine(line) {
        /* To be set by the user */
    }
    onData(data) {
        /* To be set by the user */
    }
    onError(err) {
        /* To be set by the user */
    }
    onEnd() {
        /* To be set by the user */
    }
}
//# sourceMappingURL=StreamParser.js.map
;// ../../node_modules/@json2csv/plainjs/dist/mjs/index.js



//# sourceMappingURL=index.js.map
;// ../../node_modules/@json2csv/node/dist/mjs/Transform.js



class JSON2CSVNodeTransform extends external_stream_.Transform {
    constructor(opts = {}, asyncOptions = {}, transformOpts = {}) {
        super(transformOpts);
        this.streamParser = new JSON2CSVStreamParser(Object.assign(Object.assign({}, opts), { eol: opts.eol || external_os_.EOL }), Object.assign(Object.assign({}, asyncOptions), { objectMode: transformOpts.objectMode || transformOpts.readableObjectMode }));
        this.streamParser.onHeader = (header) => this.emit('header', header);
        this.streamParser.onLine = (line) => this.emit('line', line);
        this.streamParser.onData = (data) => this.push(data);
        this.streamParser.onError = (err) => {
            throw err;
        };
        this.streamParser.onEnd = () => {
            if (!this.writableEnded)
                this.end();
        };
    }
    /**
     * Main function that send data to the parse to be processed.
     *
     * @param {Buffer} chunk Incoming data
     * @param {String} encoding Encoding of the incoming data. Defaults to 'utf8'
     * @param {Function} done Called when the proceesing of the supplied chunk is done
     */
    _transform(chunk, encoding, done) {
        try {
            this.streamParser.write(chunk);
            done();
        }
        catch (err) {
            done(err);
        }
    }
    _final(done) {
        try {
            this.streamParser.end();
            done();
        }
        catch (err) {
            done(err);
        }
    }
    promise() {
        return new Promise((resolve, reject) => {
            const csvBuffer = [];
            this.on('data', (chunk) => csvBuffer.push(chunk.toString()))
                .on('finish', () => resolve(csvBuffer.join('')))
                .on('error', (err) => reject(err));
        });
    }
}
//# sourceMappingURL=Transform.js.map
;// ../../node_modules/@json2csv/node/dist/mjs/AsyncParser.js


class JSON2CSVNodeAsyncParser {
    constructor(opts = {}, asyncOpts = {}, transformOpts = {}) {
        this.opts = opts;
        this.asyncOpts = asyncOpts;
        this.transformOpts = transformOpts;
    }
    /**
     * Main function that converts json to csv.
     *
     * @param {Stream|Array|Object} data Array of JSON objects to be converted to CSV
     * @returns {Stream} A stream producing the CSV formated data as a string
     */
    parse(data) {
        // if (Array.isArray(data)) {
        //   data = Readable.from(data.filter((item) => item !== null));
        // } else if (isIterable(data) || isAsyncIterable(data)) {
        //   data = Readable.from(data, { objectMode: false });
        if (typeof data === 'string' || ArrayBuffer.isView(data)) {
            data = external_stream_.Readable.from(data, { objectMode: false });
        }
        else if (Array.isArray(data)) {
            data = external_stream_.Readable.from(data.filter((item) => item !== null));
        }
        else if (typeof data === 'object' && !(data instanceof external_stream_.Readable)) {
            data = external_stream_.Readable.from([data]);
        }
        if (!(data instanceof external_stream_.Readable)) {
            throw new Error('Data should be a JSON object, JSON array, typed array, string or stream');
        }
        return data.pipe(new JSON2CSVNodeTransform(this.opts, this.asyncOpts, Object.assign({ objectMode: data.readableObjectMode }, this.transformOpts)));
    }
}
//# sourceMappingURL=AsyncParser.js.map
;// ../../node_modules/@json2csv/node/dist/mjs/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/next-auth/index.js
var next_auth = __webpack_require__(963302);
;// ./app/api/(internal)/csv-conversion/route.ts




const POST = async (request)=>{
    const session = await (0,next_auth.getServerSession)(authOptions/* authOptions */.N);
    if (!session) {
        return response/* responses */.n.unauthorizedResponse();
    }
    const data = await request.json();
    let csv = "";
    const { json, fields, fileName } = data;
    const fallbackFileName = fileName.replace(/[^A-Za-z0-9_.-]/g, "_");
    const encodedFileName = encodeURIComponent(fileName).replace(/['()]/g, (match)=>"%" + match.charCodeAt(0).toString(16)).replace(/\*/g, "%2A");
    const parser = new JSON2CSVNodeAsyncParser({
        fields
    });
    try {
        csv = await parser.parse(json).promise();
    } catch (err) {
        console.error(err);
        throw new Error("Failed to convert to CSV");
    }
    const headers = new Headers();
    headers.set("Content-Type", "text/csv;charset=utf-8;");
    headers.set("Content-Disposition", `attachment; filename="${fallbackFileName}"; filename*=UTF-8''${encodedFileName}`);
    return Response.json({
        fileResponse: csv
    }, {
        headers
    });
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2F(internal)%2Fcsv-conversion%2Froute&name=app%2Fapi%2F(internal)%2Fcsv-conversion%2Froute&pagePath=private-next-app-dir%2Fapi%2F(internal)%2Fcsv-conversion%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2F(internal)%2Fcsv-conversion%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/(internal)/csv-conversion/route",
        pathname: "/api/csv-conversion",
        filename: "route",
        bundlePath: "app/api/(internal)/csv-conversion/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/(internal)/csv-conversion/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;
function patchFetch() {
    return (0,patch_fetch.patchFetch)({
        workAsyncStorage,
        workUnitAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 587032:
/***/ (() => {



/***/ }),

/***/ 580408:
/***/ (() => {



/***/ }),

/***/ 328779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ responses)
/* harmony export */ });
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};
const goneResponse = (message, details, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "gone",
        message,
        details: details || {}
    }, {
        status: 410,
        headers
    });
};
const badRequestResponse = (message, details, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "bad_request",
        message,
        details: details || {}
    }, {
        status: 400,
        headers
    });
};
const methodNotAllowedResponse = (res, allowedMethods, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "method_not_allowed",
        message: `The HTTP ${res.req?.method} method is not supported by this route.`,
        details: {
            allowed_methods: allowedMethods
        }
    }, {
        status: 405,
        headers
    });
};
const notFoundResponse = (resourceType, resourceId, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "not_found",
        message: `${resourceType} not found`,
        details: {
            resource_id: resourceId,
            resource_type: resourceType
        }
    }, {
        status: 404,
        headers
    });
};
const notAuthenticatedResponse = (cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "not_authenticated",
        message: "Not authenticated",
        details: {
            "x-Api-Key": "Header not provided or API Key invalid"
        }
    }, {
        status: 401,
        headers
    });
};
const unauthorizedResponse = (cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "unauthorized",
        message: "You are not authorized to access this resource",
        details: {}
    }, {
        status: 401,
        headers
    });
};
const forbiddenResponse = (message, cors = false, details = {}, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "forbidden",
        message,
        details
    }, {
        status: 403,
        headers
    });
};
const successResponse = (data, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        data
    }, {
        status: 200,
        headers
    });
};
const internalServerErrorResponse = (message, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "internal_server_error",
        message,
        details: {}
    }, {
        status: 500,
        headers
    });
};
const tooManyRequestsResponse = (message, cors = false, cache = "private, no-store")=>{
    const headers = {
        ...cors && corsHeaders,
        "Cache-Control": cache
    };
    return Response.json({
        code: "internal_server_error",
        message,
        details: {}
    }, {
        status: 429,
        headers
    });
};
const responses = {
    goneResponse,
    badRequestResponse,
    internalServerErrorResponse,
    methodNotAllowedResponse,
    notAuthenticatedResponse,
    unauthorizedResponse,
    notFoundResponse,
    successResponse,
    tooManyRequestsResponse,
    forbiddenResponse
};


/***/ }),

/***/ 136015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(922728);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(527610);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(794356);
// EXTERNAL MODULE: ../../packages/lib/user/cache.ts
var user_cache = __webpack_require__(323798);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(860988);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(733735);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(470641);
// EXTERNAL MODULE: ../../packages/types/user.ts
var user = __webpack_require__(354345);
;// ./modules/auth/lib/user.ts









const updateUser = async (id, data)=>{
    (0,validate/* validateInputs */.C)([
        id,
        common/* ZId */.i4
    ], [
        data,
        user/* ZUserUpdateInput */.rd.partial()
    ]);
    try {
        const updatedUser = await src/* prisma */.z.user.update({
            where: {
                id
            },
            data: data,
            select: {
                id: true,
                email: true,
                locale: true,
                emailVerified: true
            }
        });
        user_cache/* userCache */.g.revalidate({
            email: updatedUser.email,
            id: updatedUser.id
        });
        return updatedUser;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2016") {
            throw new errors/* ResourceNotFoundError */.CE("User", id);
        }
        throw error;
    }
};
const getUserByEmail = (0,react.cache)(async (email)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            email,
            user/* ZUserEmail */.sO
        ]);
        try {
            const user = await src/* prisma */.z.user.findFirst({
                where: {
                    email
                },
                select: {
                    id: true,
                    locale: true,
                    email: true,
                    emailVerified: true
                }
            });
            return user;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getUserByEmail-${email}`
    ], {
        tags: [
            user_cache/* userCache */.g.tag.byEmail(email)
        ]
    })());
const getUser = (0,react.cache)(async (id)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            id,
            common/* ZId */.i4
        ]);
        try {
            const user = await src/* prisma */.z.user.findUnique({
                where: {
                    id
                },
                select: {
                    id: true
                }
            });
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getUser-${id}`
    ], {
        tags: [
            user_cache/* userCache */.g.tag.byId(id)
        ]
    })());
const createUser = async (data)=>{
    (0,validate/* validateInputs */.C)([
        data,
        user/* ZUserUpdateInput */.rd
    ]);
    try {
        const user = await src/* prisma */.z.user.create({
            data: data,
            select: {
                name: true,
                notificationSettings: true,
                id: true,
                email: true,
                locale: true
            }
        });
        user_cache/* userCache */.g.revalidate({
            email: user.email,
            id: user.id,
            count: true
        });
        return user;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            throw new errors/* InvalidInputError */.oC("User with this email already exists");
        }
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(765737);
;// ./modules/auth/lib/utils.ts

const hashPassword = async (password)=>{
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await (0,bcryptjs.compare)(password, hashedPassword);
    return isValid;
};

// EXTERNAL MODULE: ../../node_modules/next-auth/providers/azure-ad.js
var azure_ad = __webpack_require__(790780);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/github.js
var github = __webpack_require__(377888);
// EXTERNAL MODULE: ../../node_modules/next-auth/providers/google.js
var google = __webpack_require__(222736);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
;// ./modules/ee/sso/lib/providers.ts




const getSSOProviders = ()=>[
        (0,github/* default */.A)({
            clientId: constants/* GITHUB_ID */.gK || "",
            clientSecret: constants/* GITHUB_SECRET */.hP || ""
        }),
        (0,google/* default */.A)({
            clientId: constants/* GOOGLE_CLIENT_ID */.E5 || "",
            clientSecret: constants/* GOOGLE_CLIENT_SECRET */.n$ || "",
            allowDangerousEmailAccountLinking: true
        }),
        (0,azure_ad/* default */.A)({
            clientId: constants/* AZUREAD_CLIENT_ID */.RP || "",
            clientSecret: constants/* AZUREAD_CLIENT_SECRET */.mn || "",
            tenantId: constants/* AZUREAD_TENANT_ID */.kO || ""
        }),
        {
            id: "openid",
            name: constants/* OIDC_DISPLAY_NAME */.jP || "OpenId",
            type: "oauth",
            clientId: constants/* OIDC_CLIENT_ID */.kK || "",
            clientSecret: constants/* OIDC_CLIENT_SECRET */.r4 || "",
            wellKnown: `${constants/* OIDC_ISSUER */.Mo}/.well-known/openid-configuration`,
            authorization: {
                params: {
                    scope: "openid email profile"
                }
            },
            idToken: true,
            client: {
                id_token_signed_response_alg: constants/* OIDC_SIGNING_ALGORITHM */.CT || "RS256"
            },
            checks: [
                "pkce",
                "state"
            ],
            profile: (profile)=>{
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture
                };
            }
        }
    ];

;// ./modules/auth/lib/brevo.ts




const createBrevoCustomer = async ({ id, email })=>{
    if (!constants/* BREVO_API_KEY */.oz) {
        return;
    }
    (0,validate/* validateInputs */.C)([
        id,
        common/* ZId */.i4
    ], [
        email,
        user/* ZUserEmail */.sO
    ]);
    try {
        const requestBody = {
            email,
            ext_id: id,
            updateEnabled: false
        };
        // Add `listIds` only if `BREVO_LIST_ID` is defined
        const listId = constants/* BREVO_LIST_ID */.aS ? parseInt(constants/* BREVO_LIST_ID */.aS, 10) : null;
        if (listId && !Number.isNaN(listId)) {
            requestBody.listIds = [
                listId
            ];
        }
        const res = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "api-key": constants/* BREVO_API_KEY */.oz
            },
            body: JSON.stringify(requestBody)
        });
        if (res.status !== 200) {
            console.error("Error sending user to Brevo:", await res.text());
        }
    } catch (error) {
        console.error("Error sending user to Brevo:", error);
    }
};

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
;// ../../packages/types/account.ts

const ZAccountInput = lib.z.object({
    userId: lib.z.string(),
    type: lib.z.string(),
    provider: lib.z.string(),
    providerAccountId: lib.z.string(),
    access_token: lib.z.string().nullish(),
    refresh_token: lib.z.string().nullish(),
    expires_at: lib.z.number().nullish(),
    scope: lib.z.string().nullish(),
    token_type: lib.z.string().nullish(),
    id_token: lib.z.string().nullish()
});
const ZAccount = lib.z.object({
    id: lib.z.string(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    userId: lib.z.string(),
    type: lib.z.string(),
    provider: lib.z.string(),
    providerAccountId: lib.z.string(),
    access_token: lib.z.string().nullable(),
    refresh_token: lib.z.string().nullable().optional(),
    expires_at: lib.z.number().nullable(),
    scope: lib.z.string().nullable(),
    token_type: lib.z.string().nullable(),
    id_token: lib.z.string().nullable()
});

;// ../../packages/lib/account/utils.ts

const filterAccountInputData = (account)=>{
    const supportedProps = Object.keys(ZAccountInput.shape);
    return supportedProps.reduce((acc, prop)=>{
        if (account.hasOwnProperty(prop)) {
            acc[prop] = account[prop];
        }
        return acc;
    }, {});
};

;// ../../packages/lib/account/service.ts






const createAccount = async (accountData)=>{
    (0,validate/* validateInputs */.C)([
        accountData,
        ZAccountInput
    ]);
    try {
        const supportedAccountData = filterAccountInputData(accountData);
        const account = await src/* prisma */.z.account.create({
            data: supportedAccountData
        });
        return account;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/membership/service.ts
var service = __webpack_require__(377968);
// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(353687);
// EXTERNAL MODULE: ../../packages/lib/utils/locale.ts
var locale = __webpack_require__(615572);
;// ./modules/ee/sso/lib/sso-handlers.ts









const handleSSOCallback = async ({ user, account })=>{
    if (!user.email || account.type !== "oauth") {
        return false;
    }
    if (account.provider) {
        const provider = account.provider.toLowerCase().replace("-", "");
        // check if accounts for this provider / account Id already exists
        const existingUserWithAccount = await src/* prisma */.z.user.findFirst({
            include: {
                accounts: {
                    where: {
                        provider: account.provider
                    }
                }
            },
            where: {
                identityProvider: provider,
                identityProviderAccountId: account.providerAccountId
            }
        });
        if (existingUserWithAccount) {
            // User with this provider found
            // check if email still the same
            if (existingUserWithAccount.email === user.email) {
                return true;
            }
            // user seemed to change his email within the provider
            // check if user with this email already exist
            // if not found just update user with new email address
            // if found throw an error (TODO find better solution)
            const otherUserWithEmail = await getUserByEmail(user.email);
            if (!otherUserWithEmail) {
                await updateUser(existingUserWithAccount.id, {
                    email: user.email
                });
                return true;
            }
            throw new Error("Looks like you updated your email somewhere else. A user with this new email exists already.");
        }
        // There is no existing account for this identity provider / account id
        // check if user account with this email already exists
        // if user already exists throw error and request password login
        const existingUserWithEmail = await getUserByEmail(user.email);
        if (existingUserWithEmail) {
            // Sign in the user with the existing account
            return true;
        }
        const userProfile = await createUser({
            name: user.name || user.email.split("@")[0].replace(/[^'\p{L}\p{M}\s\d-]+/gu, " ").trim(),
            email: user.email,
            emailVerified: new Date(Date.now()),
            identityProvider: provider,
            identityProviderAccountId: account.providerAccountId,
            locale: await (0,locale/* findMatchingLocale */.$)()
        });
        // send new user to brevo
        createBrevoCustomer({
            id: user.id,
            email: user.email
        });
        // Default organization assignment if env variable is set
        if (constants/* DEFAULT_ORGANIZATION_ID */.ac && constants/* DEFAULT_ORGANIZATION_ID */.ac.length > 0) {
            // check if organization exists
            let organization = await (0,organization_service/* getOrganization */.SA)(constants/* DEFAULT_ORGANIZATION_ID */.ac);
            let isNewOrganization = false;
            if (!organization) {
                // create organization with id from env
                organization = await (0,organization_service/* createOrganization */.EC)({
                    id: constants/* DEFAULT_ORGANIZATION_ID */.ac,
                    name: userProfile.name + "'s Organization"
                });
                isNewOrganization = true;
            }
            const role = isNewOrganization ? "owner" : constants/* DEFAULT_ORGANIZATION_ROLE */.tE || "manager";
            await (0,service/* createMembership */.$)(organization.id, userProfile.id, {
                role: role,
                accepted: true
            });
            await createAccount({
                ...account,
                userId: userProfile.id
            });
            const updatedNotificationSettings = {
                ...userProfile.notificationSettings,
                alert: {
                    ...userProfile.notificationSettings?.alert
                },
                unsubscribedOrganizationIds: Array.from(new Set([
                    ...userProfile.notificationSettings?.unsubscribedOrganizationIds || [],
                    organization.id
                ])),
                weeklySummary: {
                    ...userProfile.notificationSettings?.weeklySummary
                }
            };
            await updateUser(userProfile.id, {
                notificationSettings: updatedNotificationSettings
            });
            return true;
        }
        // Without default organization assignment
        return true;
    }
    return true;
};

// EXTERNAL MODULE: ../../node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(978357);
// EXTERNAL MODULE: ../../packages/lib/crypto.ts
var lib_crypto = __webpack_require__(549673);
// EXTERNAL MODULE: ../../packages/lib/jwt.ts
var jwt = __webpack_require__(360379);
;// ./modules/auth/lib/authOptions.ts










const authOptions = {
    providers: [
        (0,credentials/* default */.A)({
            id: "credentials",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Your email address"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your password"
                },
                totpCode: {
                    label: "Two-factor Code",
                    type: "input",
                    placeholder: "Code from authenticator app"
                },
                backupCode: {
                    label: "Backup Code",
                    type: "input",
                    placeholder: "Two-factor backup code"
                }
            },
            async authorize (credentials, _req) {
                if (!credentials) {
                    throw new Error("Invalid credentials");
                }
                let user;
                try {
                    user = await src/* prisma */.z.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    });
                } catch (e) {
                    console.error(e);
                    throw Error("Internal server error. Please try again later");
                }
                if (!user) {
                    throw new Error("Invalid credentials");
                }
                if (!user.password) {
                    throw new Error("User has no password stored");
                }
                const isValid = await verifyPassword(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid credentials");
                }
                if (user.twoFactorEnabled && credentials.backupCode) {
                    if (!constants/* ENCRYPTION_KEY */.o7) {
                        console.error("Missing encryption key; cannot proceed with backup code login.");
                        throw new Error("Internal Server Error");
                    }
                    if (!user.backupCodes) throw new Error("No backup codes found");
                    const backupCodes = JSON.parse((0,lib_crypto/* symmetricDecrypt */.zp)(user.backupCodes, constants/* ENCRYPTION_KEY */.o7));
                    // check if user-supplied code matches one
                    const index = backupCodes.indexOf(credentials.backupCode.replaceAll("-", ""));
                    if (index === -1) throw new Error("Invalid backup code");
                    // delete verified backup code and re-encrypt remaining
                    backupCodes[index] = null;
                    await src/* prisma */.z.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            backupCodes: (0,lib_crypto/* symmetricEncrypt */.vX)(JSON.stringify(backupCodes), constants/* ENCRYPTION_KEY */.o7)
                        }
                    });
                } else if (user.twoFactorEnabled) {
                    if (!credentials.totpCode) {
                        throw new Error("second factor required");
                    }
                    if (!user.twoFactorSecret) {
                        throw new Error("Internal Server Error");
                    }
                    if (!constants/* ENCRYPTION_KEY */.o7) {
                        throw new Error("Internal Server Error");
                    }
                    const secret = (0,lib_crypto/* symmetricDecrypt */.zp)(user.twoFactorSecret, constants/* ENCRYPTION_KEY */.o7);
                    if (secret.length !== 32) {
                        throw new Error("Invalid two factor secret");
                    }
                    const isValidToken = (await __webpack_require__.e(/* import() */ 4081).then(__webpack_require__.bind(__webpack_require__, 134081))).totpAuthenticatorCheck(credentials.totpCode, secret);
                    if (!isValidToken) {
                        throw new Error("Invalid two factor code");
                    }
                }
                return {
                    id: user.id,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    imageUrl: user.imageUrl
                };
            }
        }),
        (0,credentials/* default */.A)({
            id: "token",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Token",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                token: {
                    label: "Verification Token",
                    type: "string"
                }
            },
            async authorize (credentials, _req) {
                let user;
                try {
                    if (!credentials?.token) {
                        throw new Error("Token not found");
                    }
                    const { id } = await (0,jwt/* verifyToken */.nr)(credentials?.token);
                    user = await src/* prisma */.z.user.findUnique({
                        where: {
                            id: id
                        }
                    });
                } catch (e) {
                    throw new Error("Either a user does not match the provided token or the token is invalid");
                }
                if (!user) {
                    throw new Error("Either a user does not match the provided token or the token is invalid");
                }
                if (user.emailVerified) {
                    throw new Error("Email already verified");
                }
                user = await updateUser(user.id, {
                    emailVerified: new Date()
                });
                // send new user to brevo after email verification
                createBrevoCustomer({
                    id: user.id,
                    email: user.email
                });
                return user;
            }
        }),
        // Conditionally add enterprise SSO providers
        ...constants/* ENTERPRISE_LICENSE_KEY */.an ? getSSOProviders() : []
    ],
    callbacks: {
        async jwt ({ token }) {
            const existingUser = await getUserByEmail(token?.email);
            if (!existingUser) {
                return token;
            }
            return {
                ...token,
                profile: {
                    id: existingUser.id
                }
            };
        },
        async session ({ session, token }) {
            // @ts-expect-error
            session.user.id = token?.id;
            // @ts-expect-error
            session.user = token.profile;
            return session;
        },
        async signIn ({ user, account }) {
            if (account?.provider === "credentials" || account?.provider === "token") {
                // check if user's email is verified or not
                if (!user.emailVerified && !constants/* EMAIL_VERIFICATION_DISABLED */.Q$) {
                    throw new Error("Email Verification is Pending");
                }
                return true;
            }
            if (constants/* ENTERPRISE_LICENSE_KEY */.an) {
                return handleSSOCallback({
                    user,
                    account
                });
            }
            return true;
        }
    },
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout",
        error: "/auth/login"
    }
};


/***/ }),

/***/ 831271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else if (false) {} else {
            module.exports = __webpack_require__(744870);
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 549673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C7: () => (/* binding */ generateLocalSignedUrl),
/* harmony export */   Zd: () => (/* binding */ getHash),
/* harmony export */   gg: () => (/* binding */ decryptAES128),
/* harmony export */   jQ: () => (/* binding */ validateLocalSignedUrl),
/* harmony export */   vX: () => (/* binding */ symmetricEncrypt),
/* harmony export */   zp: () => (/* binding */ symmetricDecrypt)
/* harmony export */ });
/* unused harmony export encryptAES128 */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455511);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836919);



const ALGORITHM = "aes256";
const INPUT_ENCODING = "utf8";
const OUTPUT_ENCODING = "hex";
const BUFFER_ENCODING = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7.length === 32 ? "latin1" : "hex";
const IV_LENGTH = 16; // AES blocksize
/**
 *
 * @param text Value to be encrypted
 * @param key Key used to encrypt value must be 32 bytes for AES256 encryption algorithm
 *
 * @returns Encrypted value using key
 */ const symmetricEncrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const iv = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(IV_LENGTH);
    // @ts-ignore -- the package needs to be built
    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createCipheriv(ALGORITHM, _key, iv);
    let ciphered = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
    ciphered += cipher.final(OUTPUT_ENCODING);
    const ciphertext = iv.toString(OUTPUT_ENCODING) + ":" + ciphered;
    return ciphertext;
};
/**
 *
 * @param text Value to decrypt
 * @param key Key used to decrypt value must be 32 bytes for AES256 encryption algorithm
 */ const symmetricDecrypt = (text, key)=>{
    const _key = Buffer.from(key, BUFFER_ENCODING);
    const components = text.split(":");
    const iv_from_ciphertext = Buffer.from(components.shift() || "", OUTPUT_ENCODING);
    // @ts-ignore -- the package needs to be built
    const decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default().createDecipheriv(ALGORITHM, _key, iv_from_ciphertext);
    let deciphered = decipher.update(components.join(":"), OUTPUT_ENCODING, INPUT_ENCODING);
    deciphered += decipher.final(INPUT_ENCODING);
    return deciphered;
};
const getHash = (key)=>(0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)("sha256").update(key).digest("hex");
// create an aes128 encryption function
const encryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = createCipheriv("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let encrypted = cipher.update(data, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
};
// create an aes128 decryption function
const decryptAES128 = (encryptionKey, data)=>{
    // @ts-ignore -- the package needs to be built
    const cipher = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createDecipheriv)("aes-128-ecb", Buffer.from(encryptionKey, "base64"), "");
    let decrypted = cipher.update(data, "hex", "utf-8");
    decrypted += cipher.final("utf-8");
    return decrypted;
};
const generateLocalSignedUrl = (fileName, environmentId, fileType)=>{
    const uuid = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes)(16).toString("hex");
    const timestamp = Date.now();
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const signature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", _constants__WEBPACK_IMPORTED_MODULE_1__/* .ENCRYPTION_KEY */ .o7).update(data).digest("hex");
    return {
        signature,
        uuid,
        timestamp
    };
};
const validateLocalSignedUrl = (uuid, fileName, environmentId, fileType, timestamp, signature, secret)=>{
    const data = `${uuid}:${fileName}:${environmentId}:${fileType}:${timestamp}`;
    const expectedSignature = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", secret).update(data).digest("hex");
    if (expectedSignature !== signature) {
        return false;
    }
    // valid for 5 minutes
    if (Date.now() - timestamp > 1000 * 60 * 5) {
        return false;
    }
    return true;
};


/***/ }),

/***/ 360379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ verifyTokenForLinkSurvey),
/* harmony export */   Oj: () => (/* binding */ verifyInviteToken),
/* harmony export */   ao: () => (/* binding */ getEmailFromEmailToken),
/* harmony export */   nr: () => (/* binding */ verifyToken)
/* harmony export */ });
/* unused harmony exports createToken, createTokenForLinkSurvey, createEmailToken, createInviteToken */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(900365);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527610);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549673);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(162437);




const createToken = (userId, userEmail, options = {})=>{
    const encryptedUserId = symmetricEncrypt(userId, env.ENCRYPTION_KEY);
    return jwt.sign({
        id: encryptedUserId
    }, env.NEXTAUTH_SECRET + userEmail, options);
};
const createTokenForLinkSurvey = (surveyId, userEmail)=>{
    const encryptedEmail = symmetricEncrypt(userEmail, env.ENCRYPTION_KEY);
    return jwt.sign({
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET + surveyId);
};
const createEmailToken = (email)=>{
    const encryptedEmail = symmetricEncrypt(email, env.ENCRYPTION_KEY);
    return jwt.sign({
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET);
};
const getEmailFromEmailToken = (token)=>{
    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXTAUTH_SECRET);
    try {
        // Try to decrypt first (for newer tokens)
        const decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(payload.email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
        return decryptedEmail;
    } catch  {
        // If decryption fails, return the original email (for older tokens)
        return payload.email;
    }
};
const createInviteToken = (inviteId, email, options = {})=>{
    const encryptedInviteId = symmetricEncrypt(inviteId, env.ENCRYPTION_KEY);
    const encryptedEmail = symmetricEncrypt(email, env.ENCRYPTION_KEY);
    return jwt.sign({
        inviteId: encryptedInviteId,
        email: encryptedEmail
    }, env.NEXTAUTH_SECRET, options);
};
const verifyTokenForLinkSurvey = (token, surveyId)=>{
    try {
        const { email } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.NEXTAUTH_SECRET + surveyId);
        try {
            // Try to decrypt first (for newer tokens)
            const decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
            return decryptedEmail;
        } catch  {
            // If decryption fails, return the original email (for older tokens)
            return email;
        }
    } catch (err) {
        return null;
    }
};
const verifyToken = async (token)=>{
    // First decode to get the ID
    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);
    const payload = decoded;
    if (!payload) {
        throw new Error("Token is invalid");
    }
    const { id } = payload;
    if (!id) {
        throw new Error("Token missing required field: id");
    }
    // Try to decrypt the ID (for newer tokens), if it fails use the ID as-is (for older tokens)
    let decryptedId;
    try {
        decryptedId = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(id, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
    } catch  {
        decryptedId = id;
    }
    // If no email provided, look up the user
    const foundUser = await _formbricks_database__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ .z.user.findUnique({
        where: {
            id: decryptedId
        }
    });
    if (!foundUser) {
        throw new Error("User not found");
    }
    const userEmail = foundUser.email;
    return {
        id: decryptedId,
        email: userEmail
    };
};
const verifyInviteToken = (token)=>{
    try {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);
        const payload = decoded;
        const { inviteId, email } = payload;
        let decryptedInviteId;
        let decryptedEmail;
        try {
            // Try to decrypt first (for newer tokens)
            decryptedInviteId = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(inviteId, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
            decryptedEmail = (0,_crypto__WEBPACK_IMPORTED_MODULE_3__/* .symmetricDecrypt */ .zp)(email, _env__WEBPACK_IMPORTED_MODULE_2__/* .env */ ._.ENCRYPTION_KEY);
        } catch  {
            // If decryption fails, use original values (for older tokens)
            decryptedInviteId = inviteId;
            decryptedEmail = email;
        }
        return {
            inviteId: decryptedInviteId,
            email: decryptedEmail
        };
    } catch (error) {
        console.error(`Error verifying invite token: ${error}`);
        throw new Error("Invalid or expired invite token");
    }
};


/***/ }),

/***/ 823609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ membershipCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87863);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const membershipCache = {
    tag: {
        byOrganizationId (organizationId) {
            return `organizations-${organizationId}-memberships`;
        },
        byUserId (userId) {
            return `users-${userId}-memberships`;
        }
    },
    revalidate ({ organizationId, userId }) {
        if (organizationId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byOrganizationId(organizationId));
        }
        if (userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byUserId(userId));
        }
    }
};


/***/ }),

/***/ 377968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ createMembership),
/* harmony export */   Y: () => (/* binding */ getMembershipByUserIdOrganizationId)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(527610);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(733735);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(470641);
/* harmony import */ var _formbricks_types_memberships__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(715521);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794356);
/* harmony import */ var _membership_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(823609);
/* harmony import */ var _organization_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(530190);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(860988);











const getMembershipByUserIdOrganizationId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (userId, organizationId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            userId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ], [
            organizationId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
        ]);
        try {
            const membership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.membership.findUnique({
                where: {
                    userId_organizationId: {
                        userId,
                        organizationId
                    }
                }
            });
            if (!membership) return null;
            return membership;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                console.error(error);
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .UnknownError */ .Bk("Error while fetching membership");
        }
    }, [
        `getMembershipByUserIdOrganizationId-${userId}-${organizationId}`
    ], {
        tags: [
            _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.tag.byUserId(userId),
            _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.tag.byOrganizationId(organizationId)
        ]
    })());
const createMembership = async (organizationId, userId, data)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        organizationId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
    ], [
        userId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZString */ .eI
    ], [
        data,
        _formbricks_types_memberships__WEBPACK_IMPORTED_MODULE_8__/* .ZMembership */ .rl.partial()
    ]);
    try {
        const membership = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.membership.create({
            data: {
                userId,
                organizationId,
                accepted: data.accepted,
                role: data.role
            }
        });
        _organization_cache__WEBPACK_IMPORTED_MODULE_9__/* .organizationCache */ .S.revalidate({
            userId
        });
        _membership_cache__WEBPACK_IMPORTED_MODULE_7__/* .membershipCache */ .r.revalidate({
            userId,
            organizationId
        });
        return membership;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 615572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ findMatchingLocale)
/* harmony export */ });
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(680255);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(836919);


const findMatchingLocale = async ()=>{
    const headersList = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.headers)();
    const acceptLanguage = headersList.get("accept-language");
    const userLocales = acceptLanguage?.split(",");
    if (!userLocales) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .Xn;
    }
    // First, try to find an exact match without normalization
    for (const userLocale of userLocales){
        const exactMatch = _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC.find((locale)=>locale === userLocale);
        if (exactMatch) return exactMatch;
    }
    // If no exact match is found, try matching with normalization
    const normalizedAvailableLocales = _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC.map((locale)=>locale.toLowerCase().split("-")[0]);
    for (const userLocale of userLocales){
        const normalizedUserLocale = userLocale.toLowerCase().split("-")[0];
        const matchedIndex = normalizedAvailableLocales.findIndex((locale)=>locale.startsWith(normalizedUserLocale));
        if (matchedIndex !== -1) return _constants__WEBPACK_IMPORTED_MODULE_1__/* .AVAILABLE_LOCALES */ .SC[matchedIndex];
    }
    return _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .Xn;
};


/***/ }),

/***/ 715521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mp: () => (/* binding */ ZOrganizationRole),
/* harmony export */   rl: () => (/* binding */ ZMembership)
/* harmony export */ });
/* unused harmony exports ZMembershipRole, ZMember, ZMembershipUpdateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZMembershipRole = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "owner",
    "admin",
    "editor",
    "developer",
    "viewer"
]);
const ZOrganizationRole = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "owner",
    "manager",
    "member",
    "billing"
]);
const ZMembership = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    organizationId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    userId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    accepted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
    role: ZOrganizationRole
});
const ZMember = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(),
    userId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    accepted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
    role: ZOrganizationRole
});
const ZMembershipUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    role: ZOrganizationRole
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,255,9759,3687], () => (__webpack_exec__(710273)));
module.exports = __webpack_exports__;

})();