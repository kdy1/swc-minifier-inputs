(() => {
var exports = {};
exports.id = 8294;
exports.ids = [8294];
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

/***/ 594735:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 629021:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ 333873:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 927910:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 583997:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

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

/***/ 977598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 344708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 271667:
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

// NAMESPACE OBJECT: ./app/api/(internal)/insights/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  maxDuration: () => (maxDuration)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(831271);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(291232);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(318079);
// EXTERNAL MODULE: ./app/api/(internal)/insights/lib/insights.ts + 3 modules
var insights = __webpack_require__(949631);
// EXTERNAL MODULE: ./app/lib/api/response.ts
var response = __webpack_require__(328779);
// EXTERNAL MODULE: ./app/lib/api/validator.ts
var validator = __webpack_require__(105032);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/headers.js
var headers = __webpack_require__(680255);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(545198);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(836919);
// EXTERNAL MODULE: ./app/api/(internal)/insights/lib/utils.ts
var utils = __webpack_require__(418808);
;// ./app/api/(internal)/insights/route.ts
// This function can run for a maximum of 300 seconds







const maxDuration = 300; // This function can run for a maximum of 300 seconds
const ZGenerateInsightsInput = lib.z.object({
    surveyId: lib.z.string()
});
const POST = async (request)=>{
    try {
        const requestHeaders = await (0,headers.headers)();
        // Check authentication
        if (requestHeaders.get("x-api-key") !== constants/* CRON_SECRET */.Kd) {
            return response/* responses */.n.notAuthenticatedResponse();
        }
        const jsonInput = await request.json();
        const inputValidation = ZGenerateInsightsInput.safeParse(jsonInput);
        if (!inputValidation.success) {
            console.error(inputValidation.error);
            return response/* responses */.n.badRequestResponse("Fields are missing or incorrectly formatted", (0,validator/* transformErrorToDetails */.m)(inputValidation.error), true);
        }
        const { surveyId } = inputValidation.data;
        const data = await (0,utils/* generateInsightsEnabledForSurveyQuestions */.M6)(surveyId);
        if (!data.success) {
            return response/* responses */.n.successResponse({
                message: "No insights enabled questions found"
            });
        }
        await (0,insights/* generateInsightsForSurveyResponsesConcept */.YF)(data.survey);
        return response/* responses */.n.successResponse({
            message: "Insights generated successfully"
        });
    } catch (error) {
        throw error;
    }
};

;// ../../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?page=%2Fapi%2F(internal)%2Finsights%2Froute&name=app%2Fapi%2F(internal)%2Finsights%2Froute&pagePath=private-next-app-dir%2Fapi%2F(internal)%2Finsights%2Froute.ts&appDir=%2FUsers%2Fkdy1%2Fprojects%2Fformbricks%2Fapps%2Fweb%2Fapp&appPaths=%2Fapi%2F(internal)%2Finsights%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&nextConfigExperimentalUseEarlyImport=&preferredRegion=&middlewareConfig=e30%3D!




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/(internal)/insights/route",
        pathname: "/api/insights",
        filename: "route",
        bundlePath: "app/api/(internal)/insights/route"
    },
    resolvedPagePath: "/Users/kdy1/projects/formbricks/apps/web/app/api/(internal)/insights/route.ts",
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

/***/ 996016:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


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

/***/ 722515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HJ: () => (/* binding */ getFormattedDateTimeString),
/* harmony export */   Qr: () => (/* binding */ isValidDateString),
/* harmony export */   yr: () => (/* binding */ diffInDays),
/* harmony export */   zM: () => (/* binding */ formatDateWithOrdinal)
/* harmony export */ });
/* unused harmony exports getMonthName, getOrdinalDate */
const monthNames = [
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
];
// Helper function to calculate difference in days between two dates
const diffInDays = (date1, date2)=>{
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
// Helper function to get the month name
const getMonthName = (monthIndex)=>{
    return monthNames[monthIndex];
};
const formatDateWithOrdinal = (date)=>{
    const getOrdinalSuffix = (day)=>{
        const suffixes = [
            "th",
            "st",
            "nd",
            "rd"
        ];
        const relevantDigits = day < 30 ? day % 20 : day % 30;
        return suffixes[relevantDigits <= 3 ? relevantDigits : 0];
    };
    const dayOfWeekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const dayOfWeek = dayOfWeekNames[date.getDay()];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${dayOfWeek}, ${monthNames[monthIndex]} ${day}${getOrdinalSuffix(day)}, ${year}`;
};
// Helper function to format the date with an ordinal suffix
const getOrdinalDate = (date)=>{
    const j = date % 10, k = date % 100;
    if (j === 1 && k !== 11) {
        return date + "st";
    }
    if (j === 2 && k !== 12) {
        return date + "nd";
    }
    if (j === 3 && k !== 13) {
        return date + "rd";
    }
    return date + "th";
};
const isValidDateString = (value)=>{
    const regex = /^(?:\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})$/;
    if (!regex.test(value)) {
        return false;
    }
    const date = new Date(value);
    return date;
};
const getFormattedDateTimeString = (date)=>{
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };
    return new Intl.DateTimeFormat("en-CA", options).format(date).replace(",", "");
};


/***/ }),

/***/ 239949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VY: () => (/* binding */ parseRecallInfo),
  uD: () => (/* binding */ replaceHeadlineRecall)
});

// UNUSED EXPORTS: checkForEmptyFallBackValue, extractFallbackValue, extractId, extractIds, extractRecallInfo, findRecallInfoById, getFallbackValues, getRecallItems, headlineToRecall, recallToHeadline, replaceRecallInfoWithUnderline

// EXTERNAL MODULE: ../../node_modules/@ungap/structured-clone/esm/index.js + 3 modules
var esm = __webpack_require__(551469);
;// ../../packages/lib/pollyfills/structuredClone.ts

let structuredCloneExport;
if (typeof structuredClone === "undefined") {
    structuredCloneExport = esm/* default */.Ay;
} else {
    // @ts-expect-error
    structuredCloneExport = structuredClone;
}


// EXTERNAL MODULE: ../../packages/lib/utils/datetime.ts
var datetime = __webpack_require__(722515);
;// ../../packages/lib/utils/recall.ts



// Extracts the ID of recall question from a string containing the "recall" pattern.
const extractId = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
};
// If there are multiple recall infos in a string extracts all recall question IDs from that string and construct an array out of it.
const extractIds = (text)=>{
    const pattern = /#recall:([A-Za-z0-9_-]+)/g;
    const matches = Array.from(text.matchAll(pattern));
    return matches.map((match)=>match[1]).filter((id)=>id !== null);
};
// Extracts the fallback value from a string containing the "fallback" pattern.
const extractFallbackValue = (text)=>{
    const pattern = /fallback:(\S*)#/;
    const match = text.match(pattern);
    if (match && match[1]) {
        return match[1];
    } else {
        return "";
    }
};
// Extracts the complete recall information (ID and fallback) from a headline string.
const extractRecallInfo = (headline, id)=>{
    const idPattern = id ? id : "[A-Za-z0-9_-]+";
    const pattern = new RegExp(`#recall:(${idPattern})\\/fallback:(\\S*)#`);
    const match = headline.match(pattern);
    return match ? match[0] : null;
};
// Finds the recall information by a specific recall question ID within a text.
const findRecallInfoById = (text, id)=>{
    const pattern = new RegExp(`#recall:${id}\\/fallback:(\\S*)#`, "g");
    const match = text.match(pattern);
    return match ? match[0] : null;
};
const getRecallItemLabel = (recallItemId, survey, languageCode)=>{
    const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
    if (isHiddenField) return recallItemId;
    const surveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
    if (surveyQuestion) return surveyQuestion.headline[languageCode];
    const variable = survey.variables?.find((variable)=>variable.id === recallItemId);
    if (variable) return variable.name;
};
// Converts recall information in a headline to a corresponding recall question headline, with or without a slash.
const recallToHeadline = (headline, survey, withSlash, languageCode)=>{
    let newHeadline = structuredCloneExport(headline);
    const localizedHeadline = newHeadline[languageCode];
    if (!localizedHeadline?.includes("#recall:")) return headline;
    const replaceNestedRecalls = (text)=>{
        while(text.includes("#recall:")){
            const recallInfo = extractRecallInfo(text);
            if (!recallInfo) break;
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) break;
            let recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode) || recallItemId;
            while(recallItemLabel.includes("#recall:")){
                const nestedRecallInfo = extractRecallInfo(recallItemLabel);
                if (nestedRecallInfo) {
                    recallItemLabel = recallItemLabel.replace(nestedRecallInfo, "___");
                }
            }
            const replacement = withSlash ? `/${recallItemLabel}\\` : `@${recallItemLabel}`;
            text = text.replace(recallInfo, replacement);
        }
        return text;
    };
    newHeadline[languageCode] = replaceNestedRecalls(localizedHeadline);
    return newHeadline;
};
// Replaces recall information in a survey question's headline with an ___.
const replaceRecallInfoWithUnderline = (label)=>{
    let newLabel = label;
    while(newLabel.includes("#recall:")){
        const recallInfo = extractRecallInfo(newLabel);
        if (recallInfo) {
            newLabel = newLabel.replace(recallInfo, "___");
        }
    }
    return newLabel;
};
// Checks for survey questions with a "recall" pattern but no fallback value.
const checkForEmptyFallBackValue = (survey, language)=>{
    const findRecalls = (text)=>{
        const recalls = text.match(/#recall:[^ ]+/g);
        return recalls && recalls.some((recall)=>!extractFallbackValue(recall));
    };
    for (const question of survey.questions){
        if (findRecalls(getLocalizedValue(question.headline, language)) || question.subheader && findRecalls(getLocalizedValue(question.subheader, language))) {
            return question;
        }
    }
    return null;
};
// Processes each question in a survey to ensure headlines are formatted correctly for recall and return the modified survey.
const replaceHeadlineRecall = (survey, language)=>{
    const modifiedSurvey = structuredCloneExport(survey);
    modifiedSurvey.questions.forEach((question)=>{
        question.headline = recallToHeadline(question.headline, modifiedSurvey, false, language);
    });
    return modifiedSurvey;
};
// Retrieves an array of survey questions referenced in a text containing recall information.
const getRecallItems = (text, survey, languageCode)=>{
    if (!text.includes("#recall:")) return [];
    const ids = extractIds(text);
    let recallItems = [];
    ids.forEach((recallItemId)=>{
        const isHiddenField = survey.hiddenFields.fieldIds?.includes(recallItemId);
        const isSurveyQuestion = survey.questions.find((question)=>question.id === recallItemId);
        const isVariable = survey.variables.find((variable)=>variable.id === recallItemId);
        const recallItemLabel = getRecallItemLabel(recallItemId, survey, languageCode);
        const getRecallItemType = ()=>{
            if (isHiddenField) return "hiddenField";
            if (isSurveyQuestion) return "question";
            if (isVariable) return "variable";
        };
        if (recallItemLabel) {
            let recallItemLabelTemp = recallItemLabel;
            recallItemLabelTemp = replaceRecallInfoWithUnderline(recallItemLabelTemp);
            const recallItemType = getRecallItemType();
            if (recallItemType) {
                recallItems.push({
                    id: recallItemId,
                    label: recallItemLabelTemp,
                    type: recallItemType
                });
            }
        }
    });
    return recallItems;
};
// Constructs a fallbacks object from a text containing multiple recall and fallback patterns.
const getFallbackValues = (text)=>{
    if (!text.includes("#recall:")) return {};
    const pattern = /#recall:([A-Za-z0-9_-]+)\/fallback:([\S*]+)#/g;
    let match;
    const fallbacks = {};
    while((match = pattern.exec(text)) !== null){
        const id = match[1];
        const fallbackValue = match[2];
        fallbacks[id] = fallbackValue;
    }
    return fallbacks;
};
// Transforms headlines in a text to their corresponding recall information.
const headlineToRecall = (text, recallItems, fallbacks)=>{
    recallItems.forEach((recallItem)=>{
        const recallInfo = `#recall:${recallItem.id}/fallback:${fallbacks[recallItem.id]}#`;
        text = text.replace(`@${recallItem.label}`, recallInfo);
    });
    return text;
};
const parseRecallInfo = (text, responseData, variables, withSlash = false)=>{
    let modifiedText = text;
    const questionIds = responseData ? Object.keys(responseData) : [];
    const variableIds = Object.keys(variables || {});
    if (variables && variableIds.length > 0) {
        variableIds.forEach((variableId)=>{
            const recallPattern = `#recall:`;
            while(modifiedText.includes(recallPattern)){
                const recallInfo = extractRecallInfo(modifiedText, variableId);
                if (!recallInfo) break; // Exit the loop if no recall info is found
                const recallItemId = extractId(recallInfo);
                if (!recallItemId) continue; // Skip to the next iteration if no ID could be extracted
                const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
                let value = variables[variableId] || fallback;
                value = value.toString();
                if (withSlash) {
                    modifiedText = modifiedText.replace(recallInfo, "#/" + value + "\\#");
                } else {
                    modifiedText = modifiedText.replace(recallInfo, value);
                }
            }
        });
    }
    if (responseData && questionIds.length > 0) {
        while(modifiedText.includes("recall:")){
            const recallInfo = extractRecallInfo(modifiedText);
            if (!recallInfo) break; // Exit the loop if no recall info is found
            const recallItemId = extractId(recallInfo);
            if (!recallItemId) return modifiedText; // Return the text if no ID could be extracted
            const fallback = extractFallbackValue(recallInfo).replaceAll("nbsp", " ");
            let value;
            // Fetching value from responseData based on recallItemId
            if (responseData[recallItemId]) {
                value = responseData[recallItemId] ?? fallback;
            }
            // Additional value formatting if it exists
            if (value) {
                if ((0,datetime/* isValidDateString */.Qr)(value)) {
                    value = (0,datetime/* formatDateWithOrdinal */.zM)(new Date(value));
                } else if (Array.isArray(value)) {
                    value = value.filter((item)=>item).join(", "); // Filters out empty values and joins with a comma
                }
            }
            if (withSlash) {
                modifiedText = modifiedText.replace(recallInfo, "#/" + (value ?? fallback) + "\\#");
            } else {
                modifiedText = modifiedText.replace(recallInfo, value ?? fallback);
            }
        }
    }
    return modifiedText;
};


/***/ }),

/***/ 65405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KJ: () => (/* binding */ ZEnvironment),
/* harmony export */   fz: () => (/* binding */ ZEnvironmentUpdateInput)
/* harmony export */ });
/* unused harmony exports ZEnvironmentId, ZEnvironmentCreateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(545198);

const ZEnvironment = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]),
    projectId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()
});
const ZEnvironmentId = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZEnvironmentUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]),
    projectId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean()
});
const ZEnvironmentCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "development",
        "production"
    ]).optional(),
    appSetupCompleted: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().optional()
});


/***/ }),

/***/ 551469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ esm)
});

// UNUSED EXPORTS: deserialize, serialize

;// ../../node_modules/@ungap/structured-clone/esm/types.js
const VOID       = -1;
const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;

;// ../../node_modules/@ungap/structured-clone/esm/deserialize.js


const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
      case 'ArrayBuffer':
        return as(new Uint8Array(value).buffer, value);
      case 'DataView': {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);

;// ../../node_modules/@ungap/structured-clone/esm/serialize.js


const EMPTY = '';

const {toString: serialize_toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = serialize_toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
    case 'DataView':
      return [ARRAY, asString];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) {
          let spread = value;
          if (type === 'DataView') {
            spread = new Uint8Array(value.buffer);
          }
          else if (type === 'ArrayBuffer') {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }

        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};

;// ../../node_modules/@ungap/structured-clone/esm/index.js



/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} any a serializable value.
 * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
 * a transfer option (ignored when polyfilled) and/or non standard fields that
 * fallback to the polyfill if present.
 * @returns {Record[]}
 */
/* harmony default export */ const esm = (typeof structuredClone === "function" ?
  /* c8 ignore start */
  (any, options) => (
    options && ('json' in options || 'lossy' in options) ?
      deserialize(serialize(any, options)) : structuredClone(any)
  ) :
  (any, options) => deserialize(serialize(any, options)));
  /* c8 ignore stop */




/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8079,3073,7863,5069,255,6626,5570,8728,9398,881,9358,3687,5863,7043,7258], () => (__webpack_exec__(271667)));
module.exports = __webpack_exports__;

})();