"use strict";
exports.id = 6836;
exports.ids = [6836];
exports.modules = {

/***/ 915139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HJ: () => (/* binding */ getFormattedDateTimeString),
/* harmony export */   Qr: () => (/* binding */ isValidDateString),
/* harmony export */   zM: () => (/* binding */ formatDateWithOrdinal)
/* harmony export */ });
/* unused harmony exports diffInDays, getMonthName, getOrdinalDate */
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

/***/ 654931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LW: () => (/* binding */ extractRecallInfo),
/* harmony export */   P8: () => (/* binding */ getFallbackValues),
/* harmony export */   QO: () => (/* binding */ getRecallItems),
/* harmony export */   VY: () => (/* binding */ parseRecallInfo),
/* harmony export */   Xm: () => (/* binding */ findRecallInfoById),
/* harmony export */   Yk: () => (/* binding */ checkForEmptyFallBackValue),
/* harmony export */   dP: () => (/* binding */ extractId),
/* harmony export */   fV: () => (/* binding */ recallToHeadline),
/* harmony export */   gk: () => (/* binding */ replaceRecallInfoWithUnderline),
/* harmony export */   jj: () => (/* binding */ headlineToRecall),
/* harmony export */   uD: () => (/* binding */ replaceHeadlineRecall)
/* harmony export */ });
/* unused harmony exports extractIds, extractFallbackValue */
/* harmony import */ var _i18n_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(864698);
/* harmony import */ var _pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300189);
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(915139);



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
    let newHeadline = (0,_pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__/* .structuredClone */ .p)(headline);
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
        if (findRecalls((0,_i18n_utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedValue */ .bT)(question.headline, language)) || question.subheader && findRecalls((0,_i18n_utils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedValue */ .bT)(question.subheader, language))) {
            return question;
        }
    }
    return null;
};
// Processes each question in a survey to ensure headlines are formatted correctly for recall and return the modified survey.
const replaceHeadlineRecall = (survey, language)=>{
    const modifiedSurvey = (0,_pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__/* .structuredClone */ .p)(survey);
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
                if ((0,_datetime__WEBPACK_IMPORTED_MODULE_2__/* .isValidDateString */ .Qr)(value)) {
                    value = (0,_datetime__WEBPACK_IMPORTED_MODULE_2__/* .formatDateWithOrdinal */ .zM)(new Date(value));
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

/***/ 423650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ displayCache)
/* harmony export */ });
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310256);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_0__);

const displayCache = {
    tag: {
        byId (id) {
            return `displays-${id}`;
        },
        bySurveyId (surveyId) {
            return `surveys-${surveyId}-displays`;
        },
        byContactId (contactId) {
            return `contacts-${contactId}-displays`;
        },
        byEnvironmentIdAndUserId (environmentId, userId) {
            return `environments-${environmentId}-users-${userId}-displays`;
        },
        byEnvironmentId (environmentId) {
            return `environments-${environmentId}-displays`;
        }
    },
    revalidate ({ id, surveyId, contactId, environmentId, userId }) {
        if (environmentId && userId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentIdAndUserId(environmentId, userId));
        }
        if (id) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byId(id));
        }
        if (surveyId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.bySurveyId(surveyId));
        }
        if (contactId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byContactId(contactId));
        }
        if (environmentId) {
            (0,next_cache__WEBPACK_IMPORTED_MODULE_0__.revalidateTag)(this.tag.byEnvironmentId(environmentId));
        }
    }
};


/***/ }),

/***/ 168677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K6: () => (/* binding */ getDisplayCountBySurveyId),
/* harmony export */   oB: () => (/* binding */ deleteDisplay)
/* harmony export */ });
/* unused harmony export selectDisplay */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207798);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48165);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(423650);









const selectDisplay = {
    id: true,
    createdAt: true,
    updatedAt: true,
    surveyId: true,
    contactId: true,
    status: true
};
const getDisplayCountBySurveyId = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (surveyId, filters)=>(0,_cache__WEBPACK_IMPORTED_MODULE_3__/* .cache */ .P)(async ()=>{
        (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
            surveyId,
            _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
        ]);
        try {
            const displayCount = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.display.count({
                where: {
                    surveyId: surveyId,
                    ...filters && filters.createdAt && {
                        createdAt: {
                            gte: filters.createdAt.min,
                            lte: filters.createdAt.max
                        }
                    }
                }
            });
            return displayCount;
        } catch (error) {
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getDisplayCountBySurveyId-${surveyId}-${JSON.stringify(filters)}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_7__/* .displayCache */ .x.tag.bySurveyId(surveyId)
        ]
    })());
const deleteDisplay = async (displayId)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__/* .validateInputs */ .C)([
        displayId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_5__/* .ZId */ .i4
    ]);
    try {
        const display = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.display.delete({
            where: {
                id: displayId
            },
            select: selectDisplay
        });
        _cache__WEBPACK_IMPORTED_MODULE_7__/* .displayCache */ .x.revalidate({
            id: display.id,
            contactId: display.contactId,
            surveyId: display.surveyId
        });
        return display;
    } catch (error) {
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_6__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 319671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bT: () => (/* binding */ getLocalizedValue)
/* harmony export */ });
/* unused harmony exports createI18nString, isI18nObject, isLabelValidForAllLanguages, extractLanguageCodes, getEnabledLanguages, extractLanguageIds, getLanguageCode, iso639Languages, iso639Identifiers, getLanguageLabel, addMultiLanguageLabels, appLanguages */

// Helper function to create an i18nString from a regular string.
const createI18nString = (text, languages, targetLanguageCode)=>{
    if (typeof text === "object") {
        // It's already an i18n object, so clone it
        const i18nString = structuredClone(text);
        // Add new language keys with empty strings if they don't exist
        languages?.forEach((language)=>{
            if (!(language in i18nString)) {
                i18nString[language] = "";
            }
        });
        // Remove language keys that are not in the languages array
        Object.keys(i18nString).forEach((key)=>{
            if (key !== (targetLanguageCode ?? "default") && languages && !languages.includes(key)) {
                delete i18nString[key];
            }
        });
        return i18nString;
    } else {
        // It's a regular string, so create a new i18n object
        const i18nString = {
            [targetLanguageCode ?? "default"]: text
        };
        // Initialize all provided languages with empty strings
        languages?.forEach((language)=>{
            if (language !== (targetLanguageCode ?? "default")) {
                i18nString[language] = "";
            }
        });
        return i18nString;
    }
};
// Type guard to check if an object is an I18nString
const isI18nObject = (obj)=>{
    return typeof obj === "object" && obj !== null && Object.keys(obj).includes("default");
};
const isLabelValidForAllLanguages = (label, languages)=>{
    return languages.every((language)=>label[language] && label[language].trim() !== "");
};
const getLocalizedValue = (value, languageId)=>{
    if (!value) {
        return "";
    }
    if (isI18nObject(value)) {
        if (value[languageId]) {
            return value[languageId];
        }
        return "";
    }
    return "";
};
const extractLanguageCodes = (surveyLanguages)=>{
    if (!surveyLanguages) return [];
    return surveyLanguages.map((surveyLanguage)=>surveyLanguage.default ? "default" : surveyLanguage.language.code);
};
const getEnabledLanguages = (surveyLanguages)=>{
    return surveyLanguages.filter((surveyLanguage)=>surveyLanguage.enabled);
};
const extractLanguageIds = (languages)=>{
    return languages.map((language)=>language.code);
};
const getLanguageCode = (surveyLanguages, languageCode)=>{
    if (!surveyLanguages?.length || !languageCode) return "default";
    const language = surveyLanguages.find((surveyLanguage)=>surveyLanguage.language.code === languageCode);
    return language?.default ? "default" : language?.language.code || "default";
};
const iso639Languages = [
    {
        alpha2: "aa",
        label: {
            "en-US": "Afar",
            "de-DE": "Afar",
            "pt-BR": "Afar",
            "fr-FR": "Afar"
        }
    },
    {
        alpha2: "ab",
        label: {
            "en-US": "Abkhazian",
            "de-DE": "Abchasisch",
            "pt-BR": "Abcásio",
            "fr-FR": "Abkhaze"
        }
    },
    {
        alpha2: "ae",
        label: {
            "en-US": "Avestan",
            "de-DE": "Avestisch",
            "pt-BR": "Avestano",
            "fr-FR": "Avestique"
        }
    },
    {
        alpha2: "af",
        label: {
            "en-US": "Afrikaans",
            "de-DE": "Afrikaans",
            "pt-BR": "Afrikâner",
            "fr-FR": "Afrikaans"
        }
    },
    {
        alpha2: "ak",
        label: {
            "en-US": "Akan",
            "de-DE": "Akan",
            "pt-BR": "Akan",
            "fr-FR": "Akan"
        }
    },
    {
        alpha2: "am",
        label: {
            "en-US": "Amharic",
            "de-DE": "Amharisch",
            "pt-BR": "Amárico",
            "fr-FR": "Amharique"
        }
    },
    {
        alpha2: "an",
        label: {
            "en-US": "Aragonese",
            "de-DE": "Aragonesisch",
            "pt-BR": "Aragonês",
            "fr-FR": "Aragonês"
        }
    },
    {
        alpha2: "ar",
        label: {
            "en-US": "Arabic",
            "de-DE": "Arabisch",
            "pt-BR": "Árabe",
            "fr-FR": "Arabe"
        }
    },
    {
        alpha2: "as",
        label: {
            "en-US": "Assamese",
            "de-DE": "Assamesisch",
            "pt-BR": "Assamês",
            "fr-FR": "Assamais"
        }
    },
    {
        alpha2: "av",
        label: {
            "en-US": "Avaric",
            "de-DE": "Avarisch",
            "pt-BR": "Avaric",
            "fr-FR": "Avaric"
        }
    },
    {
        alpha2: "ay",
        label: {
            "en-US": "Aymara",
            "de-DE": "Aymara",
            "pt-BR": "Aymara",
            "fr-FR": "Aymara"
        }
    },
    {
        alpha2: "az",
        label: {
            "en-US": "Azerbaijani",
            "de-DE": "Aserbaidschanisch",
            "pt-BR": "Azerbaijano",
            "fr-FR": "Azerbaïdjanais"
        }
    },
    {
        alpha2: "ba",
        label: {
            "en-US": "Bashkir",
            "de-DE": "Baschkirisch",
            "pt-BR": "Basco",
            "fr-FR": "Bashkir"
        }
    },
    {
        alpha2: "be",
        label: {
            "en-US": "Belarusian",
            "de-DE": "Weißrussisch",
            "pt-BR": "Bielorrusso",
            "fr-FR": "Biélorusse"
        }
    },
    {
        alpha2: "bg",
        label: {
            "en-US": "Bulgarian",
            "de-DE": "Bulgarisch",
            "pt-BR": "Búlgaro",
            "fr-FR": "Bulgare"
        }
    },
    {
        alpha2: "bh",
        label: {
            "en-US": "Bihari languages",
            "de-DE": "Biharische Sprachen",
            "pt-BR": "Bihari",
            "fr-FR": "Bihari"
        }
    },
    {
        alpha2: "bi",
        label: {
            "en-US": "Bislama",
            "de-DE": "Bislama",
            "pt-BR": "Bislama",
            "fr-FR": "Bislama"
        }
    },
    {
        alpha2: "bm",
        label: {
            "en-US": "Bambara",
            "de-DE": "Bambara",
            "pt-BR": "Bambara",
            "fr-FR": "Bambara"
        }
    },
    {
        alpha2: "bn",
        label: {
            "en-US": "Bengali",
            "de-DE": "Bengali",
            "pt-BR": "Bengali",
            "fr-FR": "Bengali"
        }
    },
    {
        alpha2: "bo",
        label: {
            "en-US": "Tibetan",
            "de-DE": "Tibetisch",
            "pt-BR": "Tibetano",
            "fr-FR": "Tibétain"
        }
    },
    {
        alpha2: "br",
        label: {
            "en-US": "Breton",
            "de-DE": "Bretonisch",
            "pt-BR": "Breton",
            "fr-FR": "Breton"
        }
    },
    {
        alpha2: "bs",
        label: {
            "en-US": "Bosnian",
            "de-DE": "Bosnisch",
            "pt-BR": "Bósnio",
            "fr-FR": "Bosnien"
        }
    },
    {
        alpha2: "ca",
        label: {
            "en-US": "Catalan; Valencian",
            "de-DE": "Katalanisch; Valencisch",
            "pt-BR": "Catalão; Valenciano",
            "fr-FR": "Catalan; Valencian"
        }
    },
    {
        alpha2: "ce",
        label: {
            "en-US": "Chechen",
            "de-DE": "Tschetschenisch",
            "pt-BR": "Checheno",
            "fr-FR": "Tchechen"
        }
    },
    {
        alpha2: "ch",
        label: {
            "en-US": "Chamorro",
            "de-DE": "Chamorro",
            "pt-BR": "Chamorro",
            "fr-FR": "Chamorro"
        }
    },
    {
        alpha2: "co",
        label: {
            "en-US": "Corsican",
            "de-DE": "Korsisch",
            "pt-BR": "Corsican",
            "fr-FR": "Corsican"
        }
    },
    {
        alpha2: "cr",
        label: {
            "en-US": "Cree",
            "de-DE": "Cree",
            "pt-BR": "Cree",
            "fr-FR": "Cree"
        }
    },
    {
        alpha2: "cs",
        label: {
            "en-US": "Czech",
            "de-DE": "Tschechisch",
            "pt-BR": "Tcheco",
            "fr-FR": "Tcheque"
        }
    },
    {
        alpha2: "cu",
        label: {
            "en-US": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
            "de-DE": "Kirchenslawisch; Altbulgarisch; Kirchenslawisch; Altbulgarisch; Altkirchliches Slawisch",
            "pt-BR": "Slavônico eclesiástico; Antigo eslavônico; Sânscrito eclesiástico; Antigo búlgaro; Antigo sânscrito eclesiástico",
            "fr-FR": "Slavon épiscopal; Ancien slave; Sanscrit épiscopal; Ancien bulgare; Ancien sanscrit épiscopal"
        }
    },
    {
        alpha2: "cv",
        label: {
            "en-US": "Chuvash",
            "de-DE": "Tschuwaschisch",
            "pt-BR": "Tchuvasco",
            "fr-FR": "Tchuvasche"
        }
    },
    {
        alpha2: "cy",
        label: {
            "en-US": "Welsh",
            "de-DE": "Walisisch",
            "pt-BR": "Galês",
            "fr-FR": "Gallois"
        }
    },
    {
        alpha2: "da",
        label: {
            "en-US": "Danish",
            "de-DE": "Dänisch",
            "pt-BR": "Dinamarquês",
            "fr-FR": "Danois"
        }
    },
    {
        alpha2: "de",
        label: {
            "en-US": "German",
            "de-DE": "Deutsch",
            "pt-BR": "Alemão",
            "fr-FR": "Allemand"
        }
    },
    {
        alpha2: "dv",
        label: {
            "en-US": "Divehi; Dhivehi; Maldivian",
            "de-DE": "Divehi; Dhivehi; Maldivisch",
            "pt-BR": "Divehi; Dhivehi; Maldiviano",
            "fr-FR": "Divehi; Dhivehi; Maldivien"
        }
    },
    {
        alpha2: "dz",
        label: {
            "en-US": "Dzongkha",
            "de-DE": "Dzongkha",
            "pt-BR": "Dzongkha",
            "fr-FR": "Dzongkha"
        }
    },
    {
        alpha2: "ee",
        label: {
            "en-US": "Ewe",
            "de-DE": "Ewe",
            "pt-BR": "Ewe",
            "fr-FR": "Ewe"
        }
    },
    {
        alpha2: "el",
        label: {
            "en-US": "Greek, Modern (1453-)",
            "de-DE": "Griechisch, Modern (ab 1453)",
            "pt-BR": "Grego moderno (1453-)",
            "fr-FR": "Grec moderne (après 1453)"
        }
    },
    {
        alpha2: "en",
        label: {
            "en-US": "English",
            "de-DE": "Englisch",
            "pt-BR": "Inglês",
            "fr-FR": "Anglais"
        }
    },
    {
        alpha2: "eo",
        label: {
            "en-US": "Esperanto",
            "de-DE": "Esperanto",
            "pt-BR": "Esperanto",
            "fr-FR": "Esperanto"
        }
    },
    {
        alpha2: "es",
        label: {
            "en-US": "Spanish; Castilian",
            "de-DE": "Spanisch; Kastilisch",
            "pt-BR": "Espanhol; Castelao",
            "fr-FR": "Espagnol; Castillan"
        }
    },
    {
        alpha2: "et",
        label: {
            "en-US": "Estonian",
            "de-DE": "Estnisch",
            "pt-BR": "Estoniano",
            "fr-FR": "Estonien"
        }
    },
    {
        alpha2: "eu",
        label: {
            "en-US": "Basque",
            "de-DE": "Baskisch",
            "pt-BR": "Basco",
            "fr-FR": "Basque"
        }
    },
    {
        alpha2: "fa",
        label: {
            "en-US": "Persian",
            "de-DE": "Persisch",
            "pt-BR": "Persa",
            "fr-FR": "Persan"
        }
    },
    {
        alpha2: "ff",
        label: {
            "en-US": "Fulah",
            "de-DE": "Fulah",
            "pt-BR": "Fulah",
            "fr-FR": "Fulah"
        }
    },
    {
        alpha2: "fi",
        label: {
            "en-US": "Finnish",
            "de-DE": "Finnisch",
            "pt-BR": "Finlandês",
            "fr-FR": "Finlandais"
        }
    },
    {
        alpha2: "fj",
        label: {
            "en-US": "Fijian",
            "de-DE": "Fidschianisch",
            "pt-BR": "Fijiano",
            "fr-FR": "Fijien"
        }
    },
    {
        alpha2: "fo",
        label: {
            "en-US": "Faroese",
            "de-DE": "Färöisch",
            "pt-BR": "Feroês",
            "fr-FR": "Féroïen"
        }
    },
    {
        alpha2: "fr",
        label: {
            "en-US": "French",
            "de-DE": "Französisch",
            "pt-BR": "Francês",
            "fr-FR": "Français"
        }
    },
    {
        alpha2: "fy",
        label: {
            "en-US": "Western Frisian",
            "de-DE": "Westfriesisch",
            "pt-BR": "Frísio ocidental",
            "fr-FR": "Frison occidental"
        }
    },
    {
        alpha2: "ga",
        label: {
            "en-US": "Irish",
            "de-DE": "Irischer",
            "pt-BR": "Irlandês",
            "fr-FR": "Irlandais"
        }
    },
    {
        alpha2: "gd",
        label: {
            "en-US": "Gaelic; Scottish Gaelic",
            "de-DE": "Gälisch; Schottisch Gälisch",
            "pt-BR": "Gaelico escocês; Gaélico escocês",
            "fr-FR": "Gaélique écossais; Gaélique écossais"
        }
    },
    {
        alpha2: "gl",
        label: {
            "en-US": "Galician",
            "de-DE": "Galicisch",
            "pt-BR": "Galego",
            "fr-FR": "Galicien"
        }
    },
    {
        alpha2: "gn",
        label: {
            "en-US": "Guarani",
            "de-DE": "Guarani",
            "pt-BR": "Guarani",
            "fr-FR": "Guarani"
        }
    },
    {
        alpha2: "gu",
        label: {
            "en-US": "Gujarati",
            "de-DE": "Gujarati",
            "pt-BR": "Gujarati",
            "fr-FR": "Gujarati"
        }
    },
    {
        alpha2: "gv",
        label: {
            "en-US": "Manx",
            "de-DE": "Manx",
            "pt-BR": "Manx",
            "fr-FR": "Manx"
        }
    },
    {
        alpha2: "ha",
        label: {
            "en-US": "Hausa",
            "de-DE": "Hausa",
            "pt-BR": "Hausa",
            "fr-FR": "Hausa"
        }
    },
    {
        alpha2: "he",
        label: {
            "en-US": "Hebrew",
            "de-DE": "Hebräisch",
            "pt-BR": "Hebraico",
            "fr-FR": "Hébreu"
        }
    },
    {
        alpha2: "hi",
        label: {
            "en-US": "Hindi",
            "de-DE": "Hindi",
            "pt-BR": "Hindi",
            "fr-FR": "Hindi"
        }
    },
    {
        alpha2: "ho",
        label: {
            "en-US": "Hiri Motu",
            "de-DE": "Hiri Motu",
            "pt-BR": "Hiri Motu",
            "fr-FR": "Hiri Motu"
        }
    },
    {
        alpha2: "hr",
        label: {
            "en-US": "Croatian",
            "de-DE": "Kroatisch",
            "pt-BR": "Croata",
            "fr-FR": "Croate"
        }
    },
    {
        alpha2: "ht",
        label: {
            "en-US": "Haitian; Haitian Creole",
            "de-DE": "Haitian; Haitian Creole",
            "pt-BR": "Haitiano; Crioulo haitiano",
            "fr-FR": "Haïtien; Créole haïtien"
        }
    },
    {
        alpha2: "hu",
        label: {
            "en-US": "Hungarian",
            "de-DE": "Ungarisch",
            "pt-BR": "Húngaro",
            "fr-FR": "Hongrois"
        }
    },
    {
        alpha2: "hy",
        label: {
            "en-US": "Armenian",
            "de-DE": "Armenisch",
            "pt-BR": "Armênio",
            "fr-FR": "Arménien"
        }
    },
    {
        alpha2: "hz",
        label: {
            "en-US": "Herero",
            "de-DE": "Herero",
            "pt-BR": "Herero",
            "fr-FR": "Herero"
        }
    },
    {
        alpha2: "ia",
        label: {
            "en-US": "Interlingua (International Auxiliary Language Association)",
            "de-DE": "Interlingua (Internationaler Hilfssprachverband)",
            "pt-BR": "Interlingua (Associação Internacional de Línguas Auxiliares)",
            "fr-FR": "Interlingua (Association internationale des langues auxiliaires)"
        }
    },
    {
        alpha2: "id",
        label: {
            "en-US": "Indonesian",
            "de-DE": "Indonesisch",
            "pt-BR": "Indonésio",
            "fr-FR": "Indonésien"
        }
    },
    {
        alpha2: "ie",
        label: {
            "en-US": "Interlingue; Occidental",
            "de-DE": "Interlingue; Occidental",
            "pt-BR": "Interlingue; Ocidental",
            "fr-FR": "Interlingue; Ocidental"
        }
    },
    {
        alpha2: "ig",
        label: {
            "en-US": "Igbo",
            "de-DE": "Igbo",
            "pt-BR": "Igbo",
            "fr-FR": "Igbo"
        }
    },
    {
        alpha2: "ii",
        label: {
            "en-US": "Sichuan Yi; Nuosu",
            "de-DE": "Sichuan Yi; Nuosu",
            "pt-BR": "Sichuan Yi; Nuosu",
            "fr-FR": "Sichuan Yi; Nuosu"
        }
    },
    {
        alpha2: "ik",
        label: {
            "en-US": "Inupiaq",
            "de-DE": "Inupiaq",
            "pt-BR": "Inupiaq",
            "fr-FR": "Inupiaq"
        }
    },
    {
        alpha2: "io",
        label: {
            "en-US": "Ido",
            "de-DE": "Ido",
            "pt-BR": "Ido",
            "fr-FR": "Ido"
        }
    },
    {
        alpha2: "is",
        label: {
            "en-US": "Icelandic",
            "de-DE": "Isländisch",
            "pt-BR": "Islandês",
            "fr-FR": "Islandais"
        }
    },
    {
        alpha2: "it",
        label: {
            "en-US": "Italian",
            "de-DE": "Italienisch",
            "pt-BR": "Italiano",
            "fr-FR": "Italien"
        }
    },
    {
        alpha2: "iu",
        label: {
            "en-US": "Inuktitut",
            "de-DE": "Inuktitut",
            "pt-BR": "Inuktitut",
            "fr-FR": "Inuktitut"
        }
    },
    {
        alpha2: "ja",
        label: {
            "en-US": "Japanese",
            "de-DE": "Japanisch",
            "pt-BR": "Japonês",
            "fr-FR": "Japonais"
        }
    },
    {
        alpha2: "jv",
        label: {
            "en-US": "Javanese",
            "de-DE": "Javanisch",
            "pt-BR": "Javonês",
            "fr-FR": "Javanais"
        }
    },
    {
        alpha2: "ka",
        label: {
            "en-US": "Georgian",
            "de-DE": "Georgisch",
            "pt-BR": "Georgiano",
            "fr-FR": "Géorgien"
        }
    },
    {
        alpha2: "kg",
        label: {
            "en-US": "Kongo",
            "de-DE": "Kongo",
            "pt-BR": "Kongo",
            "fr-FR": "Kongo"
        }
    },
    {
        alpha2: "ki",
        label: {
            "en-US": "Kikuyu; Gikuyu",
            "de-DE": "Kikuyu; Gikuyu",
            "pt-BR": "Kikuyu; Gikuyu",
            "fr-FR": "Kikuyu; Gikuyu"
        }
    },
    {
        alpha2: "kj",
        label: {
            "en-US": "Kuanyama; Kwanyama",
            "de-DE": "Kuanyama; Kwanyama",
            "pt-BR": "Kuanyama; Kwanyama",
            "fr-FR": "Kuanyama; Kwanyama"
        }
    },
    {
        alpha2: "kk",
        label: {
            "en-US": "Kazakh",
            "de-DE": "Kasachisch",
            "pt-BR": "Cazaque",
            "fr-FR": "Kazakh"
        }
    },
    {
        alpha2: "kl",
        label: {
            "en-US": "Kalaallisut; Greenlandic",
            "de-DE": "Kalaallisut; Grönländisch",
            "pt-BR": "Kalaallisut; Groelândico",
            "fr-FR": "Kalaallisut; Groenlandais"
        }
    },
    {
        alpha2: "km",
        label: {
            "en-US": "Central Khmer",
            "de-DE": "Zentral-Khmer",
            "pt-BR": "Khmer central",
            "fr-FR": "Khmer central"
        }
    },
    {
        alpha2: "kn",
        label: {
            "en-US": "Kannada",
            "de-DE": "Kannada",
            "pt-BR": "Canarês",
            "fr-FR": "Kannada"
        }
    },
    {
        alpha2: "ko",
        label: {
            "en-US": "Korean",
            "de-DE": "Koreanisch",
            "pt-BR": "Coreano",
            "fr-FR": "Coréen"
        }
    },
    {
        alpha2: "kr",
        label: {
            "en-US": "Kanuri",
            "de-DE": "Kanuri",
            "pt-BR": "Kanuri",
            "fr-FR": "Kanuri"
        }
    },
    {
        alpha2: "ks",
        label: {
            "en-US": "Kashmiri",
            "de-DE": "Kashmiri",
            "pt-BR": "Kashmiri",
            "fr-FR": "Kashmiri"
        }
    },
    {
        alpha2: "ku",
        label: {
            "en-US": "Kurdish",
            "de-DE": "Kurdisch",
            "pt-BR": "Curdo",
            "fr-FR": "Kurde"
        }
    },
    {
        alpha2: "kv",
        label: {
            "en-US": "Komi",
            "de-DE": "Komi",
            "pt-BR": "Komi",
            "fr-FR": "Komi"
        }
    },
    {
        alpha2: "kw",
        label: {
            "en-US": "Cornish",
            "de-DE": "Kornisch",
            "pt-BR": "Cornualles",
            "fr-FR": "Cornouaillois"
        }
    },
    {
        alpha2: "ky",
        label: {
            "en-US": "Kirghiz; Kyrgyz",
            "de-DE": "Kirgisisch; Kirgisischer",
            "pt-BR": "Kirguiz; Quirguiz",
            "fr-FR": "Kirghiz; Kyrgyz"
        }
    },
    {
        alpha2: "la",
        label: {
            "en-US": "Latin",
            "de-DE": "Lateinisch",
            "pt-BR": "Latim",
            "fr-FR": "Latin"
        }
    },
    {
        alpha2: "lb",
        label: {
            "en-US": "Luxembourgish; Letzeburgesch",
            "de-DE": "Luxemburgisch; Letzeburgesch",
            "pt-BR": "Luxemburguês; Luxemburguês",
            "fr-FR": "Luxembourgeois; Letzeburgesch"
        }
    },
    {
        alpha2: "lg",
        label: {
            "en-US": "Ganda",
            "de-DE": "Ganda",
            "pt-BR": "Ganda",
            "fr-FR": "Ganda"
        }
    },
    {
        alpha2: "li",
        label: {
            "en-US": "Limburgan; Limburger; Limburgish",
            "de-DE": "Limburgisch; Limburger; Limburgish",
            "pt-BR": "Limburguês; Limburguês; Limburguês",
            "fr-FR": "Limbourgeois; Limbourgeois; Limbourgeois"
        }
    },
    {
        alpha2: "ln",
        label: {
            "en-US": "Lingala",
            "de-DE": "Lingala",
            "pt-BR": "Lingala",
            "fr-FR": "Lingala"
        }
    },
    {
        alpha2: "lo",
        label: {
            "en-US": "Lao",
            "de-DE": "Lao",
            "pt-BR": "Lao",
            "fr-FR": "Lao"
        }
    },
    {
        alpha2: "lt",
        label: {
            "en-US": "Lithuanian",
            "de-DE": "Litauisch",
            "pt-BR": "Lituano",
            "fr-FR": "Lituanien"
        }
    },
    {
        alpha2: "lu",
        label: {
            "en-US": "Luba-Katanga",
            "de-DE": "Luba-Katanga",
            "pt-BR": "Luba-Katanga",
            "fr-FR": "Luba-Katanga"
        }
    },
    {
        alpha2: "lv",
        label: {
            "en-US": "Latvian",
            "de-DE": "Lettisch",
            "pt-BR": "Letão",
            "fr-FR": "Letton"
        }
    },
    {
        alpha2: "mg",
        label: {
            "en-US": "Malagasy",
            "de-DE": "Malagasy",
            "pt-BR": "Malagasy",
            "fr-FR": "Malagasy"
        }
    },
    {
        alpha2: "mh",
        label: {
            "en-US": "Marshallese",
            "de-DE": "Marshallese",
            "pt-BR": "Marshallês",
            "fr-FR": "Marshallese"
        }
    },
    {
        alpha2: "mi",
        label: {
            "en-US": "Maori",
            "de-DE": "Maori",
            "pt-BR": "Maori",
            "fr-FR": "Maori"
        }
    },
    {
        alpha2: "mk",
        label: {
            "en-US": "Macedonian",
            "de-DE": "Mazedonisch",
            "pt-BR": "Macedônio",
            "fr-FR": "Macédonien"
        }
    },
    {
        alpha2: "ml",
        label: {
            "en-US": "Malayalam",
            "de-DE": "Malayalam",
            "pt-BR": "Malayalam",
            "fr-FR": "Malayalam"
        }
    },
    {
        alpha2: "mn",
        label: {
            "en-US": "Mongolian",
            "de-DE": "Mongolisch",
            "pt-BR": "Mongol",
            "fr-FR": "Mongol"
        }
    },
    {
        alpha2: "mr",
        label: {
            "en-US": "Marathi",
            "de-DE": "Marathi",
            "pt-BR": "Marati",
            "fr-FR": "Marathi"
        }
    },
    {
        alpha2: "ms",
        label: {
            "en-US": "Malay",
            "de-DE": "Malay",
            "pt-BR": "Malaio",
            "fr-FR": "Malais"
        }
    },
    {
        alpha2: "mt",
        label: {
            "en-US": "Maltese",
            "de-DE": "Maltesisch",
            "pt-BR": "Maltês",
            "fr-FR": "Maltès"
        }
    },
    {
        alpha2: "my",
        label: {
            "en-US": "Burmese",
            "de-DE": "Birmanisch",
            "pt-BR": "Birmanês",
            "fr-FR": "Birman"
        }
    },
    {
        alpha2: "na",
        label: {
            "en-US": "Nauru",
            "de-DE": "Nauru",
            "pt-BR": "Nauru",
            "fr-FR": "Nauru"
        }
    },
    {
        alpha2: "nb",
        label: {
            "en-US": "Bokmål, Norwegian; Norwegian Bokmål",
            "de-DE": "Bokmål, Norwegisch; Norwegische Bokmål",
            "pt-BR": "Bokmål, Norueguês; Bokmål Norueguês",
            "fr-FR": "Bokmål, Norvégien; Bokmål Norvégien"
        }
    },
    {
        alpha2: "nd",
        label: {
            "en-US": "Ndebele, North; North Ndebele",
            "de-DE": "Ndebele, Nord; Nord Ndebele",
            "pt-BR": "Ndebele, Norte; Norte Ndebele",
            "fr-FR": "Ndebele, Nord; Nord Ndebele"
        }
    },
    {
        alpha2: "ne",
        label: {
            "en-US": "Nepali",
            "de-DE": "Nepali",
            "pt-BR": "Nepali",
            "fr-FR": "Népalais"
        }
    },
    {
        alpha2: "ng",
        label: {
            "en-US": "Ndonga",
            "de-DE": "Ndonga",
            "pt-BR": "Ndonga",
            "fr-FR": "Ndonga"
        }
    },
    {
        alpha2: "nl",
        label: {
            "en-US": "Dutch; Flemish",
            "de-DE": "Holländisch; Flämisch",
            "pt-BR": "Holandês; Flamengo",
            "fr-FR": "Néerlandais; Flamand"
        }
    },
    {
        alpha2: "nn",
        label: {
            "en-US": "Norwegian Nynorsk; Nynorsk, Norwegian",
            "de-DE": "Norwegische Nynorsk; Nynorsk, Norwegisch",
            "pt-BR": "Norwegian Nynorsk; Nynorsk, Norueguês",
            "fr-FR": "Norvégien Nynorsk; Nynorsk, Norvégien"
        }
    },
    {
        alpha2: "no",
        label: {
            "en-US": "Norwegian",
            "de-DE": "Norwegisch",
            "pt-BR": "Norueguês",
            "fr-FR": "Norvégien"
        }
    },
    {
        alpha2: "nr",
        label: {
            "en-US": "Ndebele, South; South Ndebele",
            "de-DE": "Ndebele, Süd; Süd Ndebele",
            "pt-BR": "Ndebele, Sul; Sul Ndebele",
            "fr-FR": "Ndebele, Sud; Sud Ndebele"
        }
    },
    {
        alpha2: "nv",
        label: {
            "en-US": "Navajo; Navaho",
            "de-DE": "Navajo; Navaho",
            "pt-BR": "Navajo; Navaho",
            "fr-FR": "Navajo; Navaho"
        }
    },
    {
        alpha2: "ny",
        label: {
            "en-US": "Chichewa; Chewa; Nyanja",
            "de-DE": "Chichewa; Chewa; Nyanja",
            "pt-BR": "Chichewa; Chewa; Nyanja",
            "fr-FR": "Chichewa; Chewa; Nyanja"
        }
    },
    {
        alpha2: "oc",
        label: {
            "en-US": "Occitan (post 1500)",
            "de-DE": "Occitan (post 1500)",
            "pt-BR": "Occitano (pós 1500)",
            "fr-FR": "Occitan (post 1500)"
        }
    },
    {
        alpha2: "oj",
        label: {
            "en-US": "Ojibwa",
            "de-DE": "Ojibwa",
            "pt-BR": "Ojibwa",
            "fr-FR": "Ojibwa"
        }
    },
    {
        alpha2: "om",
        label: {
            "en-US": "Oromo",
            "de-DE": "Oromo",
            "pt-BR": "Oromo",
            "fr-FR": "Oromo"
        }
    },
    {
        alpha2: "or",
        label: {
            "en-US": "Oriya",
            "de-DE": "Oriya",
            "pt-BR": "Oriya",
            "fr-FR": "Oriya"
        }
    },
    {
        alpha2: "os",
        label: {
            "en-US": "Ossetian; Ossetic",
            "de-DE": "Ossetian; Ossetic",
            "pt-BR": "Ossetiano; Ossético",
            "fr-FR": "Ossète; Ossète"
        }
    },
    {
        alpha2: "pa",
        label: {
            "en-US": "Panjabi; Punjabi",
            "de-DE": "Panjabi; Punjabi",
            "pt-BR": "Panjabi; Punjabi",
            "fr-FR": "Panjabi; Punjabi"
        }
    },
    {
        alpha2: "pi",
        label: {
            "en-US": "Pali",
            "de-DE": "Pali",
            "pt-BR": "Pali",
            "fr-FR": "Pali"
        }
    },
    {
        alpha2: "pl",
        label: {
            "en-US": "Polish",
            "de-DE": "Polnisch",
            "pt-BR": "Polonês",
            "fr-FR": "Polonais"
        }
    },
    {
        alpha2: "ps",
        label: {
            "en-US": "Pushto; Pashto",
            "de-DE": "Pushto; Pashto",
            "pt-BR": "Pushto; Pashto",
            "fr-FR": "Poushto; Pashto"
        }
    },
    {
        alpha2: "pt",
        label: {
            "en-US": "Portuguese",
            "de-DE": "Portugiesisch",
            "pt-BR": "Português",
            "fr-FR": "Portugais"
        }
    },
    {
        alpha2: "qu",
        label: {
            "en-US": "Quechua",
            "de-DE": "Quechua",
            "pt-BR": "Quechua",
            "fr-FR": "Quechua"
        }
    },
    {
        alpha2: "rm",
        label: {
            "en-US": "Romansh",
            "de-DE": "Rämisch",
            "pt-BR": "Romeno",
            "fr-FR": "Romansh"
        }
    },
    {
        alpha2: "rn",
        label: {
            "en-US": "Rundi",
            "de-DE": "Rundi",
            "pt-BR": "Rundi",
            "fr-FR": "Rundi"
        }
    },
    {
        alpha2: "ro",
        label: {
            "en-US": "Romanian; Moldavian; Moldovan",
            "de-DE": "Rumänisch; Moldauisch; Moldauisch",
            "pt-BR": "Romeno; Moldavo; Moldavo",
            "fr-FR": "Roumain; Moldave; Moldave"
        }
    },
    {
        alpha2: "ru",
        label: {
            "en-US": "Russian",
            "de-DE": "Russisch",
            "pt-BR": "Russo",
            "fr-FR": "Russe"
        }
    },
    {
        alpha2: "rw",
        label: {
            "en-US": "Kinyarwanda",
            "de-DE": "Kinyarwanda",
            "pt-BR": "Kinyarwanda",
            "fr-FR": "Kinyarwanda"
        }
    },
    {
        alpha2: "sa",
        label: {
            "en-US": "Sanskrit",
            "de-DE": "Sanskrit",
            "pt-BR": "Sânscrito",
            "fr-FR": "Sanskrit"
        }
    },
    {
        alpha2: "sc",
        label: {
            "en-US": "Sardinian",
            "de-DE": "Sardisch",
            "pt-BR": "Sardo",
            "fr-FR": "Sardien"
        }
    },
    {
        alpha2: "sd",
        label: {
            "en-US": "Sindhi",
            "de-DE": "Sindhi",
            "pt-BR": "Sindhi",
            "fr-FR": "Sindhi"
        }
    },
    {
        alpha2: "se",
        label: {
            "en-US": "Northern Sami",
            "de-DE": "Nordischer Sami",
            "pt-BR": "Sami do Norte",
            "fr-FR": "Sami du Nord"
        }
    },
    {
        alpha2: "sg",
        label: {
            "en-US": "Sango",
            "de-DE": "Sango",
            "pt-BR": "Sango",
            "fr-FR": "Sango"
        }
    },
    {
        alpha2: "si",
        label: {
            "en-US": "Sinhala; Sinhalese",
            "de-DE": "Sinhala; Sinhalese",
            "pt-BR": "Sinhala; Sinhalese",
            "fr-FR": "Sinhala; Sinhalese"
        }
    },
    {
        alpha2: "sk",
        label: {
            "en-US": "Slovak",
            "de-DE": "Slowakisch",
            "pt-BR": "Eslovaco",
            "fr-FR": "Slovaque"
        }
    },
    {
        alpha2: "sl",
        label: {
            "en-US": "Slovenian",
            "de-DE": "Slowenisch",
            "pt-BR": "Esloveno",
            "fr-FR": "Slovène"
        }
    },
    {
        alpha2: "sm",
        label: {
            "en-US": "Samoan",
            "de-DE": "Samoan",
            "pt-BR": "Samoano",
            "fr-FR": "Samoan"
        }
    },
    {
        alpha2: "sn",
        label: {
            "en-US": "Shona",
            "de-DE": "Shona",
            "pt-BR": "Shona",
            "fr-FR": "Shona"
        }
    },
    {
        alpha2: "so",
        label: {
            "en-US": "Somali",
            "de-DE": "Somali",
            "pt-BR": "Somali",
            "fr-FR": "Somali"
        }
    },
    {
        alpha2: "sq",
        label: {
            "en-US": "Albanian",
            "de-DE": "Albanisch",
            "pt-BR": "Albânico",
            "fr-FR": "Albanais"
        }
    },
    {
        alpha2: "sr",
        label: {
            "en-US": "Serbian",
            "de-DE": "Serbisch",
            "pt-BR": "Sérvio",
            "fr-FR": "Serbe"
        }
    },
    {
        alpha2: "ss",
        label: {
            "en-US": "Swati",
            "de-DE": "Swati",
            "pt-BR": "Swati",
            "fr-FR": "Swati"
        }
    },
    {
        alpha2: "st",
        label: {
            "en-US": "Sotho, Southern",
            "de-DE": "Sotho, Süd",
            "pt-BR": "Sotho, Sul",
            "fr-FR": "Sotho, Sud"
        }
    },
    {
        alpha2: "su",
        label: {
            "en-US": "Sundanese",
            "de-DE": "Sundanesisch",
            "pt-BR": "Sundanês",
            "fr-FR": "Sundanais"
        }
    },
    {
        alpha2: "sv",
        label: {
            "en-US": "Swedish",
            "de-DE": "Schwedisch",
            "pt-BR": "Sueco",
            "fr-FR": "Suédois"
        }
    },
    {
        alpha2: "sw",
        label: {
            "en-US": "Swahili",
            "de-DE": "Swahili",
            "pt-BR": "Swahili",
            "fr-FR": "Swahili"
        }
    },
    {
        alpha2: "ta",
        label: {
            "en-US": "Tamil",
            "de-DE": "Tamil",
            "pt-BR": "Tâmil",
            "fr-FR": "Tamoul"
        }
    },
    {
        alpha2: "te",
        label: {
            "en-US": "Telugu",
            "de-DE": "Telugu",
            "pt-BR": "Telugu",
            "fr-FR": "Telugu"
        }
    },
    {
        alpha2: "tg",
        label: {
            "en-US": "Tajik",
            "de-DE": "Tadschikisch",
            "pt-BR": "Tajique",
            "fr-FR": "Tadjik"
        }
    },
    {
        alpha2: "th",
        label: {
            "en-US": "Thai",
            "de-DE": "Thai",
            "pt-BR": "Tailandês",
            "fr-FR": "Thaïlandais"
        }
    },
    {
        alpha2: "ti",
        label: {
            "en-US": "Tigrinya",
            "de-DE": "Tigrinya",
            "pt-BR": "Tigrinya",
            "fr-FR": "Tigrinya"
        }
    },
    {
        alpha2: "tk",
        label: {
            "en-US": "Turkmen",
            "de-DE": "Turkmenisch",
            "pt-BR": "Turcomano",
            "fr-FR": "Turkmène"
        }
    },
    {
        alpha2: "tl",
        label: {
            "en-US": "Tagalog",
            "de-DE": "Tagalog",
            "pt-BR": "Tagalo",
            "fr-FR": "Tagalog"
        }
    },
    {
        alpha2: "tn",
        label: {
            "en-US": "Tswana",
            "de-DE": "Tswana",
            "pt-BR": "Tswana",
            "fr-FR": "Tswana"
        }
    },
    {
        alpha2: "to",
        label: {
            "en-US": "Tonga (Tonga Islands)",
            "de-DE": "Tonga (Tonga-Inseln)",
            "pt-BR": "Tonga (Ilhas Tonga)",
            "fr-FR": "Tonga (Îles Tonga)"
        }
    },
    {
        alpha2: "tr",
        label: {
            "en-US": "Turkish",
            "de-DE": "Türkisch",
            "pt-BR": "Turco",
            "fr-FR": "Turc"
        }
    },
    {
        alpha2: "ts",
        label: {
            "en-US": "Tsonga",
            "de-DE": "Tsonga",
            "pt-BR": "Tsonga",
            "fr-FR": "Tsonga"
        }
    },
    {
        alpha2: "tt",
        label: {
            "en-US": "Tatar",
            "de-DE": "Tatarisch",
            "pt-BR": "Tatar",
            "fr-FR": "Tatar"
        }
    },
    {
        alpha2: "tw",
        label: {
            "en-US": "Twi",
            "de-DE": "Twi",
            "pt-BR": "Twi",
            "fr-FR": "Twi"
        }
    },
    {
        alpha2: "ty",
        label: {
            "en-US": "Tahitian",
            "de-DE": "Tahitisch",
            "pt-BR": "Tahitiano",
            "fr-FR": "Tahitien"
        }
    },
    {
        alpha2: "ug",
        label: {
            "en-US": "Uighur; Uyghur",
            "de-DE": "Uighur; Uyghur",
            "pt-BR": "Uigur; Uigur",
            "fr-FR": "Uigur; Uigur"
        }
    },
    {
        alpha2: "uk",
        label: {
            "en-US": "Ukrainian",
            "de-DE": "Ukrainisch",
            "pt-BR": "Ucraniano",
            "fr-FR": "Ukrainien"
        }
    },
    {
        alpha2: "ur",
        label: {
            "en-US": "Urdu",
            "de-DE": "Urdu",
            "pt-BR": "Urdu",
            "fr-FR": "Urdu"
        }
    },
    {
        alpha2: "uz",
        label: {
            "en-US": "Uzbek",
            "de-DE": "Usbekisch",
            "pt-BR": "Usbeque",
            "fr-FR": "Ouzbek"
        }
    },
    {
        alpha2: "ve",
        label: {
            "en-US": "Venda",
            "de-DE": "Venda",
            "pt-BR": "Venda",
            "fr-FR": "Venda"
        }
    },
    {
        alpha2: "vi",
        label: {
            "en-US": "Vietnamese",
            "de-DE": "Vietnamesisch",
            "pt-BR": "Vietnamita",
            "fr-FR": "Vietnamien"
        }
    },
    {
        alpha2: "vo",
        label: {
            "en-US": "Volapük",
            "de-DE": "Volapük",
            "pt-BR": "Volapük",
            "fr-FR": "Volapük"
        }
    },
    {
        alpha2: "wa",
        label: {
            "en-US": "Walloon",
            "de-DE": "Wallonisch",
            "pt-BR": "Valão",
            "fr-FR": "Valon"
        }
    },
    {
        alpha2: "wo",
        label: {
            "en-US": "Wolof",
            "de-DE": "Wolof",
            "pt-BR": "Wolof",
            "fr-FR": "Wolof"
        }
    },
    {
        alpha2: "xh",
        label: {
            "en-US": "Xhosa",
            "de-DE": "Xhosa",
            "pt-BR": "Xhosa",
            "fr-FR": "Xhosa"
        }
    },
    {
        alpha2: "yi",
        label: {
            "en-US": "Yiddish",
            "de-DE": "Jiddisch",
            "pt-BR": "Iídiche",
            "fr-FR": "Yiddish"
        }
    },
    {
        alpha2: "yo",
        label: {
            "en-US": "Yoruba",
            "de-DE": "Yoruba",
            "pt-BR": "Iorubá",
            "fr-FR": "Yoruba"
        }
    },
    {
        alpha2: "za",
        label: {
            "en-US": "Zhuang; Chuang",
            "de-DE": "Zhuang; Chuang",
            "pt-BR": "Zhuang; Chuang",
            "fr-FR": "Zhuang; Chuang"
        }
    },
    {
        alpha2: "zh-Hans",
        label: {
            "en-US": "Chinese (Simplified)",
            "de-DE": "Chinesisch (Vereinfacht)",
            "pt-BR": "Chinês (Simplificado)",
            "fr-FR": "Chinois (Simplifié)"
        }
    },
    {
        alpha2: "zh-Hant",
        label: {
            "en-US": "Chinese (Traditional)",
            "de-DE": "Chinesisch (Traditionell)",
            "pt-BR": "Chinês (Tradicional)",
            "fr-FR": "Chinois (Traditionnel)"
        }
    },
    {
        alpha2: "zu",
        label: {
            "en-US": "Zulu",
            "de-DE": "Zulu",
            "pt-BR": "Zulu",
            "fr-FR": "Zulu"
        }
    }
];
const iso639Identifiers = iso639Languages.map((language)=>language.alpha2);
const getLanguageLabel = (languageCode, locale)=>{
    const language = iso639Languages.find((lang)=>lang.alpha2 === languageCode);
    // Type assertion to tell TypeScript that we know the structure of label
    return language?.label[locale];
};
// Helper function to add language keys to a multi-language object (e.g. survey or question)
// Iterates over the object recursively and adds empty strings for new language keys
const addMultiLanguageLabels = (object, languageSymbols)=>{
    // Helper function to add language keys to a multi-language object
    function addLanguageKeys(obj) {
        languageSymbols.forEach((lang)=>{
            if (!obj.hasOwnProperty(lang)) {
                obj[lang] = ""; // Add empty string for new language keys
            }
        });
    }
    // Recursive function to process an object or array
    function processObject(obj) {
        if (Array.isArray(obj)) {
            obj.forEach((item)=>processObject(item));
        } else if (obj && typeof obj === "object") {
            for(const key in obj){
                if (obj.hasOwnProperty(key)) {
                    if (key === "default" && typeof obj[key] === "string") {
                        addLanguageKeys(obj);
                    } else {
                        processObject(obj[key]);
                    }
                }
            }
        }
    }
    // Start processing the question object
    processObject(object);
    return object;
};
const appLanguages = [
    {
        code: "en-US",
        label: {
            "en-US": "English (US)",
            "de-DE": "Englisch (US)",
            "pt-BR": "Inglês (EUA)",
            "fr-FR": "Anglais (États-Unis)"
        }
    },
    {
        code: "de-DE",
        label: {
            "en-US": "German",
            "de-DE": "Deutsch",
            "pt-BR": "Alemão",
            "fr-FR": "Allemand"
        }
    },
    {
        code: "pt-BR",
        label: {
            "en-US": "Portuguese (Brazil)",
            "de-DE": "Portugiesisch (Brasilien)",
            "pt-BR": "Português (Brasil)",
            "fr-FR": "Portugais (Brésil)"
        }
    },
    {
        code: "fr-FR",
        label: {
            "en-US": "French",
            "de-DE": "Französisch",
            "pt-BR": "Francês",
            "fr-FR": "Français"
        }
    }
];


/***/ }),

/***/ 535874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pv: () => (/* binding */ deleteResponse),
  gA: () => (/* binding */ getIfResponseWithSurveyIdAndEmailExist),
  mi: () => (/* binding */ getResponse),
  h4: () => (/* binding */ getResponseCountBySurveyId),
  x0: () => (/* binding */ getResponseDownloadUrl),
  wx: () => (/* binding */ getResponseFilteringValues),
  J6: () => (/* binding */ getResponses)
});

// UNUSED EXPORTS: getResponseBySingleUseId, getResponsesByContactId, getResponsesByEnvironmentId, responseSelection, updateResponse

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/responses.ts + 1 modules
var responses = __webpack_require__(131116);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
// EXTERNAL MODULE: ../../packages/lib/cache.ts
var cache = __webpack_require__(48165);
// EXTERNAL MODULE: ../../packages/lib/constants.ts
var constants = __webpack_require__(711344);
// EXTERNAL MODULE: ../../packages/lib/display/service.ts
var service = __webpack_require__(168677);
// EXTERNAL MODULE: ../../packages/lib/responseNote/cache.ts
var responseNote_cache = __webpack_require__(667883);
// EXTERNAL MODULE: ../../packages/lib/responseNote/service.ts
var responseNote_service = __webpack_require__(250560);
// EXTERNAL MODULE: ../../packages/lib/storage/service.ts
var storage_service = __webpack_require__(117396);
// EXTERNAL MODULE: ../../packages/lib/survey/service.ts + 2 modules
var survey_service = __webpack_require__(939483);
// EXTERNAL MODULE: ../../node_modules/@json2csv/node/dist/mjs/index.js + 23 modules
var mjs = __webpack_require__(393408);
// EXTERNAL MODULE: ../../node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(501230);
;// ../../packages/lib/utils/fileConversion.ts


const convertToCsv = async (fields, jsonData)=>{
    let csv = "";
    const parser = new mjs/* AsyncParser */.C({
        fields
    });
    try {
        csv = await parser.parse(jsonData).promise();
    } catch (err) {
        console.error({
            err
        });
        throw new Error("Failed to convert to CSV");
    }
    return csv;
};
const convertToXlsxBuffer = (fields, jsonData)=>{
    const wb = xlsx/* utils */.Wp.book_new();
    const ws = xlsx/* utils */.Wp.json_to_sheet(jsonData, {
        header: fields
    });
    xlsx/* utils */.Wp.book_append_sheet(wb, ws, "Sheet1");
    return xlsx/* write */.M9(wb, {
        type: "buffer",
        bookType: "xlsx"
    });
};

// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
// EXTERNAL MODULE: ../../packages/lib/response/cache.ts
var response_cache = __webpack_require__(813255);
// EXTERNAL MODULE: ../../packages/lib/response/utils.ts + 4 modules
var utils = __webpack_require__(362002);
;// ../../packages/lib/response/service.ts



















const RESPONSES_PER_PAGE = 10;
const responseSelection = {
    id: true,
    createdAt: true,
    updatedAt: true,
    surveyId: true,
    finished: true,
    endingId: true,
    data: true,
    meta: true,
    ttc: true,
    variables: true,
    contactAttributes: true,
    singleUseId: true,
    language: true,
    displayId: true,
    contact: {
        select: {
            id: true,
            attributes: {
                select: {
                    attributeKey: true,
                    value: true
                }
            }
        }
    },
    tags: {
        select: {
            tag: {
                select: {
                    id: true,
                    createdAt: true,
                    updatedAt: true,
                    name: true,
                    environmentId: true
                }
            }
        }
    },
    notes: {
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            text: true,
            user: {
                select: {
                    id: true,
                    name: true
                }
            },
            isResolved: true,
            isEdited: true
        }
    }
};
const getResponseContact = (responsePrisma)=>{
    if (!responsePrisma.contact) return null;
    return {
        id: responsePrisma.contact.id,
        userId: responsePrisma.contact.attributes.find((attribute)=>attribute.attributeKey.key === "userId")?.value
    };
};
const getResponsesByContactId = (0,react.cache)((contactId, page)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            contactId,
            common/* ZId */.i4
        ], [
            page,
            common/* ZOptionalNumber */.Wo
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findMany({
                where: {
                    contactId
                },
                select: responseSelection,
                take: page ? constants/* ITEMS_PER_PAGE */.re : undefined,
                skip: page ? constants/* ITEMS_PER_PAGE */.re * (page - 1) : undefined,
                orderBy: {
                    createdAt: "desc"
                }
            });
            if (!responsePrisma) {
                throw new errors/* ResourceNotFoundError */.CE("Response from ContactId", contactId);
            }
            let responses = [];
            await Promise.all(responsePrisma.map(async (response)=>{
                const responseNotes = await (0,responseNote_service/* getResponseNotes */.NM)(response.id);
                const responseContact = {
                    id: response.contact?.id,
                    userId: response.contact?.attributes.find((attribute)=>attribute.attributeKey.key === "userId")?.value
                };
                responses.push({
                    ...response,
                    contact: responseContact,
                    notes: responseNotes,
                    tags: response.tags.map((tagPrisma)=>tagPrisma.tag)
                });
            }));
            return responses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponsesByContactId-${contactId}-${page}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byContactId(contactId)
        ]
    })());
const getResponseBySingleUseId = (0,react.cache)(async (surveyId, singleUseId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            singleUseId,
            common/* ZString */.eI
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findUnique({
                where: {
                    surveyId_singleUseId: {
                        surveyId,
                        singleUseId
                    }
                },
                select: responseSelection
            });
            if (!responsePrisma) {
                return null;
            }
            const response = {
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
            };
            return response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseBySingleUseId-${surveyId}-${singleUseId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySingleUseId(surveyId, singleUseId)
        ]
    })());
const getResponse = (0,react.cache)(async (responseId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            responseId,
            common/* ZId */.i4
        ]);
        try {
            const responsePrisma = await src/* prisma */.z.response.findUnique({
                where: {
                    id: responseId
                },
                select: responseSelection
            });
            if (!responsePrisma) {
                return null;
            }
            const response = {
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
            };
            return response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponse-${responseId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byId(responseId),
            responseNote_cache/* responseNoteCache */.S.tag.byResponseId(responseId)
        ]
    })());
const getResponseFilteringValues = (0,react.cache)(async (surveyId)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ]);
        try {
            const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
            if (!survey) {
                throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
            }
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    surveyId
                },
                select: {
                    data: true,
                    meta: true,
                    contactAttributes: true
                }
            });
            const contactAttributes = (0,utils/* getResponseContactAttributes */.Ji)(responses);
            const meta = (0,utils/* getResponseMeta */.Ph)(responses);
            const hiddenFields = (0,utils/* getResponseHiddenFields */.n7)(survey, responses);
            return {
                contactAttributes,
                meta,
                hiddenFields
            };
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseFilteringValues-${surveyId}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getResponses = (0,react.cache)(async (surveyId, limit, offset, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        limit = limit ?? RESPONSES_PER_PAGE;
        const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
        if (!survey) return [];
        try {
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    surveyId,
                    ...(0,utils/* buildWhereClause */.hv)(survey, filterCriteria)
                },
                select: responseSelection,
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            const transformedResponses = await Promise.all(responses.map((responsePrisma)=>{
                return {
                    ...responsePrisma,
                    contact: getResponseContact(responsePrisma),
                    tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
                };
            }));
            return transformedResponses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponses-${surveyId}-${limit}-${offset}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getResponseDownloadUrl = async (surveyId, format, filterCriteria)=>{
    (0,validate/* validateInputs */.C)([
        surveyId,
        common/* ZId */.i4
    ], [
        format,
        common/* ZString */.eI
    ], [
        filterCriteria,
        responses/* ZResponseFilterCriteria */.jT.optional()
    ]);
    try {
        const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
        if (!survey) {
            throw new errors/* ResourceNotFoundError */.CE("Survey", surveyId);
        }
        const environmentId = survey.environmentId;
        const accessType = "private";
        const batchSize = 3000;
        const responseCount = await getResponseCountBySurveyId(surveyId, filterCriteria);
        const pages = Math.ceil(responseCount / batchSize);
        const responsesArray = await Promise.all(Array.from({
            length: pages
        }, (_, i)=>{
            return getResponses(surveyId, batchSize, i * batchSize, filterCriteria);
        }));
        const responses = responsesArray.flat();
        const { metaDataFields, questions, hiddenFields, variables, userAttributes } = (0,utils/* extractSurveyDetails */.Aq)(survey, responses);
        const headers = [
            "No.",
            "Response ID",
            "Timestamp",
            "Finished",
            "Survey ID",
            "Formbricks ID (internal)",
            "User ID",
            "Notes",
            "Tags",
            ...metaDataFields,
            ...questions,
            ...variables,
            ...hiddenFields,
            ...userAttributes
        ];
        if (survey.isVerifyEmailEnabled) {
            headers.push("Verified Email");
        }
        const jsonData = (0,utils/* getResponsesJson */.dH)(survey, responses, questions, userAttributes, hiddenFields);
        const fileName = (0,utils/* getResponsesFileName */.kf)(survey?.name || "", format);
        let fileBuffer;
        if (format === "xlsx") {
            fileBuffer = convertToXlsxBuffer(headers, jsonData);
        } else {
            const csvFile = await convertToCsv(headers, jsonData);
            fileBuffer = Buffer.from(csvFile);
        }
        await (0,storage_service/* putFile */.UN)(fileName, fileBuffer, accessType, environmentId);
        return `${constants/* WEBAPP_URL */.YW}/storage/${environmentId}/${accessType}/${fileName}`;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getResponsesByEnvironmentId = (0,react.cache)(async (environmentId, limit, offset)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            environmentId,
            common/* ZId */.i4
        ], [
            limit,
            common/* ZOptionalNumber */.Wo
        ], [
            offset,
            common/* ZOptionalNumber */.Wo
        ]);
        try {
            const responses = await src/* prisma */.z.response.findMany({
                where: {
                    survey: {
                        environmentId
                    }
                },
                select: responseSelection,
                orderBy: [
                    {
                        createdAt: "desc"
                    }
                ],
                take: limit ? limit : undefined,
                skip: offset ? offset : undefined
            });
            const transformedResponses = await Promise.all(responses.map(async (responsePrisma)=>{
                return {
                    ...responsePrisma,
                    contact: getResponseContact(responsePrisma),
                    tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
                };
            }));
            return transformedResponses;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponsesByEnvironmentId-${environmentId}-${limit}-${offset}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.byEnvironmentId(environmentId)
        ]
    })());
const updateResponse = async (responseId, responseInput)=>{
    validateInputs([
        responseId,
        ZId
    ], [
        responseInput,
        ZResponseUpdateInput
    ]);
    try {
        // const currentResponse = await getResponse(responseId);
        // use direct prisma call to avoid cache issues
        const currentResponse = await prisma.response.findUnique({
            where: {
                id: responseId
            },
            select: responseSelection
        });
        if (!currentResponse) {
            throw new ResourceNotFoundError("Response", responseId);
        }
        // merge data object
        const data = {
            ...currentResponse.data,
            ...responseInput.data
        };
        const ttc = responseInput.ttc ? responseInput.finished ? calculateTtcTotal(responseInput.ttc) : responseInput.ttc : {};
        const language = responseInput.language;
        const variables = {
            ...currentResponse.variables,
            ...responseInput.variables
        };
        const responsePrisma = await prisma.response.update({
            where: {
                id: responseId
            },
            data: {
                finished: responseInput.finished,
                endingId: responseInput.endingId,
                data,
                ttc,
                language,
                variables
            },
            select: responseSelection
        });
        const response = {
            ...responsePrisma,
            contact: getResponseContact(responsePrisma),
            tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
        };
        responseCache.revalidate({
            id: response.id,
            contactId: response.contact?.id,
            surveyId: response.surveyId
        });
        responseNoteCache.revalidate({
            responseId: response.id
        });
        return response;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const findAndDeleteUploadedFilesInResponse = async (response, survey)=>{
    const fileUploadQuestions = new Set(survey.questions.filter((question)=>question.type === types/* TSurveyQuestionTypeEnum */.wn.FileUpload).map((q)=>q.id));
    const fileUrls = Object.entries(response.data).filter(([questionId])=>fileUploadQuestions.has(questionId)).flatMap(([, questionResponse])=>questionResponse);
    const deletionPromises = fileUrls.map(async (fileUrl)=>{
        try {
            const { pathname } = new URL(fileUrl);
            const [, environmentId, accessType, fileName] = pathname.split("/").filter(Boolean);
            if (!environmentId || !accessType || !fileName) {
                throw new Error(`Invalid file path: ${pathname}`);
            }
            return (0,storage_service/* deleteFile */.Ww)(environmentId, accessType, fileName);
        } catch (error) {
            console.error(`Failed to delete file ${fileUrl}:`, error);
        }
    });
    await Promise.all(deletionPromises);
};
const deleteResponse = async (responseId)=>{
    (0,validate/* validateInputs */.C)([
        responseId,
        common/* ZId */.i4
    ]);
    try {
        const responsePrisma = await src/* prisma */.z.response.delete({
            where: {
                id: responseId
            },
            select: responseSelection
        });
        const responseNotes = await (0,responseNote_service/* getResponseNotes */.NM)(responsePrisma.id);
        const response = {
            ...responsePrisma,
            contact: getResponseContact(responsePrisma),
            notes: responseNotes,
            tags: responsePrisma.tags.map((tagPrisma)=>tagPrisma.tag)
        };
        if (response.displayId) {
            (0,service/* deleteDisplay */.oB)(response.displayId);
        }
        const survey = await (0,survey_service/* getSurvey */.Dp)(response.surveyId);
        if (survey) {
            await findAndDeleteUploadedFilesInResponse({
                ...responsePrisma,
                contact: getResponseContact(responsePrisma),
                tags: responsePrisma.tags.map((tag)=>tag.tag)
            }, survey);
        }
        response_cache/* responseCache */.Q.revalidate({
            environmentId: survey?.environmentId,
            id: response.id,
            contactId: response.contact?.id,
            surveyId: response.surveyId
        });
        responseNote_cache/* responseNoteCache */.S.revalidate({
            responseId: response.id
        });
        return response;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getResponseCountBySurveyId = (0,react.cache)(async (surveyId, filterCriteria)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            filterCriteria,
            responses/* ZResponseFilterCriteria */.jT.optional()
        ]);
        try {
            const survey = await (0,survey_service/* getSurvey */.Dp)(surveyId);
            if (!survey) return 0;
            const responseCount = await src/* prisma */.z.response.count({
                where: {
                    surveyId: surveyId,
                    ...(0,utils/* buildWhereClause */.hv)(survey, filterCriteria)
                }
            });
            return responseCount;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseCountBySurveyId-${surveyId}-${JSON.stringify(filterCriteria)}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());
const getIfResponseWithSurveyIdAndEmailExist = (0,react.cache)(async (surveyId, email)=>(0,cache/* cache */.P)(async ()=>{
        (0,validate/* validateInputs */.C)([
            surveyId,
            common/* ZId */.i4
        ], [
            email,
            common/* ZString */.eI
        ]);
        try {
            const response = await src/* prisma */.z.response.findFirst({
                where: {
                    surveyId,
                    data: {
                        path: [
                            "verifiedEmail"
                        ],
                        equals: email
                    }
                },
                select: {
                    id: true
                }
            });
            return !!response;
        } catch (error) {
            if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
                throw new errors/* DatabaseError */.a$(error.message);
            }
            throw error;
        }
    }, [
        `getIfResponseWithSurveyIdAndEmailExist-${surveyId}-${email}`
    ], {
        tags: [
            response_cache/* responseCache */.Q.tag.bySurveyId(surveyId)
        ]
    })());


/***/ }),

/***/ 362002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hv: () => (/* binding */ buildWhereClause),
  Aq: () => (/* binding */ extractSurveyDetails),
  Ji: () => (/* binding */ getResponseContactAttributes),
  n7: () => (/* binding */ getResponseHiddenFields),
  Ph: () => (/* binding */ getResponseMeta),
  kf: () => (/* binding */ getResponsesFileName),
  dH: () => (/* binding */ getResponsesJson)
});

// UNUSED EXPORTS: calculateTtcTotal, extracMetadataKeys

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../packages/lib/i18n/utils.ts
var utils = __webpack_require__(319671);
;// ../../packages/lib/responses.ts


// function to convert response value of type string | number | string[] or Record<string, string> to string | string[]
const convertResponseValue = (answer, question)=>{
    switch(question.type){
        case "ranking":
        case "fileUpload":
            if (typeof answer === "string") {
                return [
                    answer
                ];
            } else return answer;
        case "pictureSelection":
            if (typeof answer === "string") {
                const imageUrl = question.choices.find((choice)=>choice.id === answer)?.imageUrl;
                return imageUrl ? [
                    imageUrl
                ] : [];
            } else if (Array.isArray(answer)) {
                return answer.map((answerId)=>question.choices.find((choice)=>choice.id === answerId)?.imageUrl).filter((url)=>url !== undefined);
            } else return [];
        default:
            return processResponseData(answer);
    }
};
const getQuestionResponseMapping = (survey, response)=>{
    const questionResponseMapping = [];
    for (const question of survey.questions){
        const answer = response.data[question.id];
        questionResponseMapping.push({
            question: parseRecallInfo(getLocalizedValue(question.headline, "default"), response.data),
            response: convertResponseValue(answer, question),
            type: question.type
        });
    }
    return questionResponseMapping;
};
const processResponseData = (responseData)=>{
    switch(typeof responseData){
        case "string":
            return responseData;
        case "number":
            return responseData.toString();
        case "object":
            if (Array.isArray(responseData)) {
                responseData = responseData.filter((item)=>item !== null && item !== undefined && item !== "").join(", ");
                return responseData;
            } else {
                const formattedString = Object.entries(responseData).filter(([_, value])=>value !== "").map(([key, value])=>`${key}: ${value}`).join("\n");
                return formattedString;
            }
        default:
            return "";
    }
};

;// ../../packages/lib/time.ts


const convertDateString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return intlFormat(date, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }, {
        locale: "en"
    });
};
const convertDateTimeString = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return intlFormat(date, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertDateTimeStringShort = (dateString)=>{
    if (!dateString) {
        return dateString;
    }
    const date = new Date(dateString);
    return intlFormat(date, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }, {
        locale: "en"
    });
};
const convertTimeString = (dateString)=>{
    const date = new Date(dateString);
    return intlFormat(date, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }, {
        locale: "en"
    });
};
const getLocaleForTimeSince = (locale)=>{
    switch(locale){
        case "de-DE":
            return de;
        case "en-US":
            return enUS;
        case "pt-BR":
            return ptBR;
        case "fr-FR":
            return fr;
    }
};
const timeSince = (dateString, locale)=>{
    const date = new Date(dateString);
    return formatDistance(date, new Date(), {
        addSuffix: true,
        locale: getLocaleForTimeSince(locale)
    });
};
const timeSinceDate = (date)=>{
    return formatDistance(date, new Date(), {
        addSuffix: true
    });
};
const formatDate = (date)=>{
    return intlFormat(date, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
const getTodaysDateFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    return formattedDate;
};
const getTodaysDateTimeFormatted = (seperator)=>{
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0].split("-").join(seperator);
    const formattedTime = date.toTimeString().split(" ")[0].split(":").join(seperator);
    return [
        formattedDate,
        formattedTime
    ].join(seperator);
};
const convertDatesInObject = (obj)=>{
    if (obj === null || typeof obj !== "object") {
        return obj; // Return if obj is not an object
    }
    if (Array.isArray(obj)) {
        // Handle arrays by mapping each element through the function
        return obj.map((item)=>convertDatesInObject(item));
    }
    const newObj = {};
    for(const key in obj){
        if ((key === "createdAt" || key === "updatedAt") && typeof obj[key] === "string" && !isNaN(Date.parse(obj[key]))) {
            newObj[key] = new Date(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = convertDatesInObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

;// ../../packages/lib/utils/datetime.ts
const monthNames = (/* unused pure expression or super */ null && ([
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
]));
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

;// ../../packages/lib/utils/strings.ts
const capitalizeFirstLetter = (string = "")=>{
    if (string === null) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};
// write a function that takes a string and truncates it to the specified length
const truncate = (str, length)=>{
    if (!str) return "";
    if (str.length > length) {
        return str.substring(0, length) + "...";
    }
    return str;
};
// write a function that takes a string and removes all characters that could cause issues with the url and truncates it to the specified length
const sanitizeString = (str, delimiter = "_", length = 255)=>{
    return str.replace(/[^0-9a-zA-Z\-._]+/g, delimiter).substring(0, length);
};
const isCapitalized = (str)=>str.charAt(0) === str.charAt(0).toUpperCase();
const startsWithVowel = (str)=>{
    return /^[aeiouAEIOU]/.test(str);
};
const truncateText = (text, limit)=>{
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

;// ../../packages/lib/response/utils.ts







const calculateTtcTotal = (ttc)=>{
    const result = {
        ...ttc
    };
    result._total = Object.values(result).reduce((acc, val)=>acc + val, 0);
    return result;
};
const buildWhereClause = (survey, filterCriteria)=>{
    const whereClause = [];
    // For finished
    if (filterCriteria?.finished !== undefined) {
        whereClause.push({
            finished: filterCriteria?.finished
        });
    }
    // For Date range
    if (filterCriteria?.createdAt) {
        const createdAt = {};
        if (filterCriteria?.createdAt?.max) {
            createdAt.lte = filterCriteria?.createdAt?.max;
        }
        if (filterCriteria?.createdAt?.min) {
            createdAt.gte = filterCriteria?.createdAt?.min;
        }
        whereClause.push({
            createdAt
        });
    }
    // For Tags
    if (filterCriteria?.tags) {
        const tags = [];
        if (filterCriteria?.tags?.applied) {
            const appliedTags = filterCriteria.tags.applied.map((name)=>({
                    tags: {
                        some: {
                            tag: {
                                name
                            }
                        }
                    }
                }));
            tags.push(appliedTags);
        }
        if (filterCriteria?.tags?.notApplied) {
            const notAppliedTags = {
                tags: {
                    every: {
                        tag: {
                            name: {
                                notIn: filterCriteria.tags.notApplied
                            }
                        }
                    }
                }
            };
            tags.push(notAppliedTags);
        }
        whereClause.push({
            AND: tags.flat()
        });
    }
    // For Person Attributes
    if (filterCriteria?.contactAttributes) {
        const contactAttributes = [];
        Object.entries(filterCriteria.contactAttributes).forEach(([key, val])=>{
            switch(val.op){
                case "equals":
                    contactAttributes.push({
                        contactAttributes: {
                            path: [
                                key
                            ],
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    contactAttributes.push({
                        contactAttributes: {
                            path: [
                                key
                            ],
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: contactAttributes
        });
    }
    // for meta
    if (filterCriteria?.meta) {
        const meta = [];
        Object.entries(filterCriteria.meta).forEach(([key, val])=>{
            let updatedKey = [];
            if ([
                "browser",
                "os",
                "device"
            ].includes(key)) {
                updatedKey = [
                    "userAgent",
                    key
                ];
            } else {
                updatedKey = [
                    key
                ];
            }
            switch(val.op){
                case "equals":
                    meta.push({
                        meta: {
                            path: updatedKey,
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    meta.push({
                        meta: {
                            path: updatedKey,
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: meta
        });
    }
    // For Language
    if (filterCriteria?.others) {
        const others = [];
        Object.entries(filterCriteria.others).forEach(([key, val])=>{
            switch(val.op){
                case "equals":
                    others.push({
                        [key.toLocaleLowerCase()]: val.value
                    });
                    break;
                case "notEquals":
                    others.push({
                        [key.toLocaleLowerCase()]: {
                            not: val.value
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: others
        });
    }
    // For Questions Data
    if (filterCriteria?.data) {
        const data = [];
        Object.entries(filterCriteria.data).forEach(([key, val])=>{
            const question = survey.questions.find((question)=>question.id === key);
            switch(val.op){
                case "submitted":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: client_.Prisma.DbNull
                        }
                    });
                    break;
                case "filledOut":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: []
                        }
                    });
                    break;
                case "skipped":
                    data.push({
                        OR: [
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: client_.Prisma.DbNull
                                }
                            },
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: ""
                                }
                            },
                            // For address question
                            {
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: []
                                }
                            }
                        ]
                    });
                    break;
                case "equals":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: val.value
                        }
                    });
                    break;
                case "notEquals":
                    data.push({
                        OR: [
                            {
                                // for value not equal to val.value
                                data: {
                                    path: [
                                        key
                                    ],
                                    not: val.value
                                }
                            },
                            {
                                // for not answered
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: client_.Prisma.DbNull
                                }
                            }
                        ]
                    });
                    break;
                case "lessThan":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            lt: val.value
                        }
                    });
                    break;
                case "lessEqual":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            lte: val.value
                        }
                    });
                    break;
                case "greaterThan":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            gt: val.value
                        }
                    });
                    break;
                case "greaterEqual":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            gte: val.value
                        }
                    });
                    break;
                case "includesAll":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            array_contains: val.value
                        }
                    });
                    break;
                case "includesOne":
                    // * If the question includes an 'other' choice and the user has selected it:
                    // *   - `predefinedLabels`: Collects labels from the question's choices that aren't selected by the user.
                    // *   - `subsets`: Generates all possible non-empty permutations of subsets of these predefined labels.
                    // *
                    // * Depending on the question type (multiple or single choice), the filter is constructed:
                    // *   - For "multipleChoiceMulti": Filters out any combinations of choices that match the subsets of predefined labels.
                    // *   - For "multipleChoiceSingle": Filters out any single predefined labels that match the user's selection.
                    const values = val.value.map((v)=>v.toString());
                    const otherChoice = question && (question.type === "multipleChoiceMulti" || question.type === "multipleChoiceSingle") ? question.choices.find((choice)=>choice.id === "other") : null;
                    if (question && (question.type === "multipleChoiceMulti" || question.type === "multipleChoiceSingle") && question.choices.map((choice)=>choice.id).includes("other") && otherChoice && values.includes(otherChoice.label.default)) {
                        const predefinedLabels = [];
                        question.choices.forEach((choice)=>{
                            Object.values(choice.label).forEach((label)=>{
                                if (!values.includes(label)) {
                                    predefinedLabels.push(label);
                                }
                            });
                        });
                        const subsets = generateAllPermutationsOfSubsets(predefinedLabels);
                        if (question.type === "multipleChoiceMulti") {
                            const subsetConditions = subsets.map((subset)=>({
                                    data: {
                                        path: [
                                            key
                                        ],
                                        equals: subset
                                    }
                                }));
                            data.push({
                                NOT: {
                                    OR: subsetConditions
                                }
                            });
                        } else {
                            data.push(// for MultipleChoiceSingle
                            {
                                AND: predefinedLabels.map((label)=>({
                                        NOT: {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                equals: label
                                            }
                                        }
                                    }))
                            });
                        }
                    } else {
                        data.push({
                            OR: val.value.map((value)=>({
                                    OR: [
                                        // for MultipleChoiceMulti
                                        {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                array_contains: [
                                                    value
                                                ]
                                            }
                                        },
                                        // for MultipleChoiceSingle
                                        {
                                            data: {
                                                path: [
                                                    key
                                                ],
                                                equals: value
                                            }
                                        }
                                    ]
                                }))
                        });
                    }
                    break;
                case "uploaded":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            not: "skipped"
                        }
                    });
                    break;
                case "notUploaded":
                    data.push({
                        OR: [
                            {
                                // for skipped
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: "skipped"
                                }
                            },
                            {
                                // for not answered
                                data: {
                                    path: [
                                        key
                                    ],
                                    equals: client_.Prisma.DbNull
                                }
                            }
                        ]
                    });
                    break;
                case "clicked":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "clicked"
                        }
                    });
                    break;
                case "accepted":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "accepted"
                        }
                    });
                    break;
                case "booked":
                    data.push({
                        data: {
                            path: [
                                key
                            ],
                            equals: "booked"
                        }
                    });
                    break;
                case "matrix":
                    const rowLabel = Object.keys(val.value)[0];
                    data.push({
                        data: {
                            path: [
                                key,
                                rowLabel
                            ],
                            equals: val.value[rowLabel]
                        }
                    });
                    break;
            }
        });
        whereClause.push({
            AND: data
        });
    }
    return {
        AND: whereClause
    };
};
const getResponsesFileName = (surveyName, extension)=>{
    const sanitizedSurveyName = sanitizeString(surveyName);
    const formattedDateString = getTodaysDateTimeFormatted("-");
    return `export-${sanitizedSurveyName.split(" ").join("-")}-${formattedDateString}.${extension}`.toLocaleLowerCase();
};
const extracMetadataKeys = (obj)=>{
    let keys = [];
    Object.entries(obj ?? {}).forEach(([key, value])=>{
        if (typeof value === "object" && value !== null) {
            Object.entries(value).forEach(([subKey])=>{
                keys.push(key + " - " + subKey);
            });
        } else {
            keys.push(key);
        }
    });
    return keys;
};
const extractSurveyDetails = (survey, responses)=>{
    const metaDataFields = responses.length > 0 ? extracMetadataKeys(responses[0].meta) : [];
    const questions = survey.questions.map((question, idx)=>{
        const headline = (0,utils/* getLocalizedValue */.bT)(question.headline, "default") ?? question.id;
        return `${idx + 1}. ${headline}`;
    });
    const hiddenFields = survey.hiddenFields?.fieldIds || [];
    const userAttributes = survey.type === "app" ? Array.from(new Set(responses.map((response)=>Object.keys(response.contactAttributes ?? {})).flat())) : [];
    const variables = survey.variables?.map((variable)=>variable.name) || [];
    return {
        metaDataFields,
        questions,
        hiddenFields,
        variables,
        userAttributes
    };
};
const getResponsesJson = (survey, responses, questions, userAttributes, hiddenFields)=>{
    const jsonData = [];
    responses.forEach((response, idx)=>{
        // basic response details
        jsonData.push({
            "No.": idx + 1,
            "Response ID": response.id,
            Timestamp: getFormattedDateTimeString(response.createdAt),
            Finished: response.finished ? "Yes" : "No",
            "Survey ID": response.surveyId,
            "Formbricks ID (internal)": response.contact?.id || "",
            "User ID": response.contact?.userId || "",
            Notes: response.notes.map((note)=>`${note.user.name}: ${note.text}`).join("\n"),
            Tags: response.tags.map((tag)=>tag.name).join(", ")
        });
        // meta details
        Object.entries(response.meta ?? {}).forEach(([key, value])=>{
            if (typeof value === "object" && value !== null) {
                Object.entries(value).forEach(([subKey, subValue])=>{
                    jsonData[idx][key + " - " + subKey] = subValue;
                });
            } else {
                jsonData[idx][key] = value;
            }
        });
        // survey response data
        questions.forEach((question, i)=>{
            const questionId = survey?.questions[i].id || "";
            const answer = response.data[questionId];
            jsonData[idx][question] = processResponseData(answer);
        });
        survey.variables?.forEach((variable)=>{
            const answer = response.variables[variable.id];
            jsonData[idx][variable.name] = answer;
        });
        // user attributes
        userAttributes.forEach((attribute)=>{
            jsonData[idx][attribute] = response.contactAttributes?.[attribute] || "";
        });
        // hidden fields
        hiddenFields.forEach((field)=>{
            const value = response.data[field];
            if (Array.isArray(value)) {
                jsonData[idx][field] = value.join("; ");
            } else {
                jsonData[idx][field] = processResponseData(value);
            }
        });
        if (survey.isVerifyEmailEnabled) {
            const verifiedEmail = response.data["verifiedEmail"];
            jsonData[idx]["Verified Email"] = processResponseData(verifiedEmail);
        }
    });
    return jsonData;
};
const getResponseContactAttributes = (responses)=>{
    try {
        let attributes = {};
        responses.forEach((response)=>{
            Object.keys(response.contactAttributes ?? {}).forEach((key)=>{
                if (response.contactAttributes && attributes[key]) {
                    attributes[key].push(response.contactAttributes[key].toString());
                } else if (response.contactAttributes) {
                    attributes[key] = [
                        response.contactAttributes[key].toString()
                    ];
                }
            });
        });
        Object.keys(attributes).forEach((key)=>{
            attributes[key] = Array.from(new Set(attributes[key]));
        });
        return attributes;
    } catch (error) {
        throw error;
    }
};
const getResponseMeta = (responses)=>{
    try {
        const meta = {};
        responses.forEach((response)=>{
            Object.entries(response.meta).forEach(([key, value])=>{
                // skip url
                if (key === "url") return;
                // Handling nested objects (like userAgent)
                if (typeof value === "object" && value !== null) {
                    Object.entries(value).forEach(([nestedKey, nestedValue])=>{
                        if (typeof nestedValue === "string" && nestedValue) {
                            if (!meta[nestedKey]) {
                                meta[nestedKey] = new Set();
                            }
                            meta[nestedKey].add(nestedValue);
                        }
                    });
                } else if (typeof value === "string" && value) {
                    if (!meta[key]) {
                        meta[key] = new Set();
                    }
                    meta[key].add(value);
                }
            });
        });
        // Convert Set to Array
        const result = Object.fromEntries(Object.entries(meta).map(([key, valueSet])=>[
                key,
                Array.from(valueSet)
            ]));
        return result;
    } catch (error) {
        throw error;
    }
};
const getResponseHiddenFields = (survey, responses)=>{
    try {
        const hiddenFields = {};
        const surveyHiddenFields = survey?.hiddenFields.fieldIds;
        const hasHiddenFields = surveyHiddenFields && surveyHiddenFields.length > 0;
        if (hasHiddenFields) {
            // adding hidden fields to meta
            survey?.hiddenFields.fieldIds?.forEach((fieldId)=>{
                hiddenFields[fieldId] = new Set();
            });
            responses.forEach((response)=>{
                // Handling data fields(Hidden fields)
                surveyHiddenFields?.forEach((fieldId)=>{
                    const hiddenFieldValue = response.data[fieldId];
                    if (hiddenFieldValue) {
                        if (typeof hiddenFieldValue === "string") {
                            hiddenFields[fieldId].add(hiddenFieldValue);
                        }
                    }
                });
            });
        }
        // Convert Set to Array
        const result = Object.fromEntries(Object.entries(hiddenFields).map(([key, valueSet])=>[
                key,
                Array.from(valueSet)
            ]));
        return result;
    } catch (error) {
        throw error;
    }
};
const generateAllPermutationsOfSubsets = (array)=>{
    const subsets = [];
    // Helper function to generate permutations of an array
    const generatePermutations = (arr)=>{
        const permutations = [];
        // Recursive function to generate permutations
        const permute = (current, remaining)=>{
            if (remaining.length === 0) {
                permutations.push(current.slice()); // Make a copy of the current permutation
                return;
            }
            for(let i = 0; i < remaining.length; i++){
                current.push(remaining[i]);
                permute(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
                current.pop();
            }
        };
        permute([], arr);
        return permutations;
    };
    // Recursive function to generate subsets
    const findSubsets = (currentIndex, currentSubset)=>{
        if (currentIndex === array.length) {
            if (currentSubset.length > 0) {
                // Skip empty subset if not needed
                const allPermutations = generatePermutations(currentSubset);
                subsets.push(...allPermutations); // Spread operator to add all permutations individually
            }
            return;
        }
        // Include the current element
        findSubsets(currentIndex + 1, currentSubset.concat(array[currentIndex]));
        // Exclude the current element
        findSubsets(currentIndex + 1, currentSubset);
    };
    findSubsets(0, []);
    return subsets;
};


/***/ }),

/***/ 250560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NM: () => (/* binding */ getResponseNotes),
/* harmony export */   db: () => (/* binding */ updateResponseNote),
/* harmony export */   o0: () => (/* binding */ createResponseNote),
/* harmony export */   yk: () => (/* binding */ resolveResponseNote)
/* harmony export */ });
/* unused harmony exports responseNoteSelect, getResponseNote */
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896330);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645625);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482859);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48165);
/* harmony import */ var _response_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(813255);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(472749);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667883);











const responseNoteSelect = {
    id: true,
    createdAt: true,
    updatedAt: true,
    text: true,
    isEdited: true,
    isResolved: true,
    user: {
        select: {
            id: true,
            name: true
        }
    },
    response: {
        select: {
            id: true,
            surveyId: true
        }
    }
};
const createResponseNote = async (responseId, userId, text)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        responseId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ], [
        userId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
    ], [
        text,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ]);
    try {
        const responseNote = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.responseNote.create({
            data: {
                responseId: responseId,
                userId: userId,
                text: text
            },
            select: responseNoteSelect
        });
        _response_cache__WEBPACK_IMPORTED_MODULE_5__/* .responseCache */ .Q.revalidate({
            id: responseNote.response.id,
            surveyId: responseNote.response.surveyId
        });
        _cache__WEBPACK_IMPORTED_MODULE_6__/* .responseNoteCache */ .S.revalidate({
            id: responseNote.id,
            responseId: responseNote.response.id
        });
        return responseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const getResponseNote = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (responseNoteId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_8__/* .cache */ .P)(async ()=>{
        try {
            const responseNote = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.responseNote.findUnique({
                where: {
                    id: responseNoteId
                },
                select: {
                    ...responseNoteSelect,
                    responseId: true
                }
            });
            return responseNote;
        } catch (error) {
            console.error(error);
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseNote-${responseNoteId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .responseNoteCache */ .S.tag.byId(responseNoteId)
        ]
    })());
const getResponseNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.cache)(async (responseId)=>(0,_cache__WEBPACK_IMPORTED_MODULE_8__/* .cache */ .P)(async ()=>{
        try {
            (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
                responseId,
                _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZId */ .i4
            ]);
            const responseNotes = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.responseNote.findMany({
                where: {
                    responseId
                },
                select: responseNoteSelect
            });
            if (!responseNotes) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("Response Notes by ResponseId", responseId);
            }
            return responseNotes;
        } catch (error) {
            console.error(error);
            if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
                throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
            }
            throw error;
        }
    }, [
        `getResponseNotes-${responseId}`
    ], {
        tags: [
            _cache__WEBPACK_IMPORTED_MODULE_6__/* .responseNoteCache */ .S.tag.byResponseId(responseId)
        ]
    })());
const updateResponseNote = async (responseNoteId, text)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        responseNoteId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ], [
        text,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ]);
    try {
        const updatedResponseNote = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.responseNote.update({
            where: {
                id: responseNoteId
            },
            data: {
                text: text,
                updatedAt: new Date(),
                isEdited: true
            },
            select: responseNoteSelect
        });
        _response_cache__WEBPACK_IMPORTED_MODULE_5__/* .responseCache */ .Q.revalidate({
            id: updatedResponseNote.response.id,
            surveyId: updatedResponseNote.response.surveyId
        });
        _cache__WEBPACK_IMPORTED_MODULE_6__/* .responseNoteCache */ .S.revalidate({
            id: updatedResponseNote.id,
            responseId: updatedResponseNote.response.id
        });
        return updatedResponseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};
const resolveResponseNote = async (responseNoteId)=>{
    (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__/* .validateInputs */ .C)([
        responseNoteId,
        _formbricks_types_common__WEBPACK_IMPORTED_MODULE_4__/* .ZString */ .eI
    ]);
    try {
        const responseNote = await _formbricks_database__WEBPACK_IMPORTED_MODULE_2__/* .prisma */ .z.responseNote.update({
            where: {
                id: responseNoteId
            },
            data: {
                updatedAt: new Date(),
                isResolved: true
            },
            select: responseNoteSelect
        });
        _response_cache__WEBPACK_IMPORTED_MODULE_5__/* .responseCache */ .Q.revalidate({
            id: responseNote.response.id,
            surveyId: responseNote.response.surveyId
        });
        _cache__WEBPACK_IMPORTED_MODULE_6__/* .responseNoteCache */ .S.revalidate({
            id: responseNote.id,
            responseId: responseNote.response.id
        });
        return responseNote;
    } catch (error) {
        console.error(error);
        if (error instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Prisma.PrismaClientKnownRequestError) {
            throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .DatabaseError */ .a$(error.message);
        }
        throw error;
    }
};


/***/ }),

/***/ 131116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jT: () => (/* binding */ ZResponseFilterCriteria)
});

// UNUSED EXPORTS: ZResponse, ZResponseContact, ZResponseContactAttributes, ZResponseData, ZResponseDataValue, ZResponseFilterCondition, ZResponseHiddenFieldValue, ZResponseHiddenFieldsFilter, ZResponseInput, ZResponseMeta, ZResponseNote, ZResponseNoteUser, ZResponseTableData, ZResponseTtc, ZResponseUpdate, ZResponseUpdateInput, ZResponseVariables, ZResponseWithSurvey, ZSurveyContactAttributes, ZSurveyMetaFieldFilter

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/surveys/types.ts + 3 modules
var types = __webpack_require__(797175);
;// ../../packages/types/tags.ts

const ZTag = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    environmentId: lib.z.string()
});
const ZTagsCount = lib.z.array(lib.z.object({
    tagId: lib.z.string().cuid2(),
    count: lib.z.number()
}));
const ZTagsOnResponses = lib.z.object({
    responseId: lib.z.string(),
    tagId: lib.z.string()
});

;// ../../packages/types/responses.ts




const ZResponseDataValue = lib.z.union([
    lib.z.string(),
    lib.z.number(),
    lib.z.array(lib.z.string()),
    lib.z.record(lib.z.string())
]);
const ZResponseFilterCondition = lib.z.enum([
    "accepted",
    "clicked",
    "submitted",
    "skipped",
    "equals",
    "notEquals",
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual",
    "includesAll",
    "includesOne",
    "uploaded",
    "notUploaded",
    "booked",
    "isCompletelySubmitted",
    "isPartiallySubmitted"
]);
const ZResponseData = lib.z.record(ZResponseDataValue);
const ZResponseVariables = lib.z.record(lib.z.union([
    lib.z.string(),
    lib.z.number()
]));
const ZResponseTtc = lib.z.record(lib.z.number());
const ZResponseContactAttributes = lib.z.record(lib.z.string()).nullable();
const ZSurveyContactAttributes = lib.z.record(lib.z.array(lib.z.string()));
const ZSurveyMetaFieldFilter = lib.z.record(lib.z.array(lib.z.string()));
const ZResponseHiddenFieldsFilter = lib.z.record(lib.z.array(lib.z.string()));
const ZResponseFilterCriteriaDataLessThan = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.lessThan),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataLessEqual = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.lessEqual),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataGreaterEqual = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.greaterEqual),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataGreaterThan = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.greaterThan),
    value: lib.z.number()
});
const ZResponseFilterCriteriaDataIncludesOne = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.includesOne),
    value: lib.z.union([
        lib.z.array(lib.z.string()),
        lib.z.array(lib.z.number())
    ])
});
const ZResponseFilterCriteriaDataIncludesAll = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.includesAll),
    value: lib.z.array(lib.z.string())
});
const ZResponseFilterCriteriaDataEquals = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.equals),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])
});
const ZResponseFilterCriteriaDataNotEquals = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.notEquals),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])
});
const ZResponseFilterCriteriaDataAccepted = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.accepted)
});
const ZResponseFilterCriteriaDataClicked = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.clicked)
});
const ZResponseFilterCriteriaDataSubmitted = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.submitted)
});
const ZResponseFilterCriteriaDataSkipped = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.skipped)
});
const ZResponseFilterCriteriaDataUploaded = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.uploaded)
});
const ZResponseFilterCriteriaDataNotUploaded = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.notUploaded)
});
const ZResponseFilterCriteriaDataBooked = lib.z.object({
    op: lib.z.literal(ZResponseFilterCondition.Values.booked)
});
const ZResponseFilterCriteriaMatrix = lib.z.object({
    op: lib.z.literal("matrix"),
    value: lib.z.record(lib.z.string(), lib.z.string())
});
const ZResponseFilterCriteriaFilledOut = lib.z.object({
    op: lib.z.literal("filledOut")
});
const ZResponseFilterCriteria = lib.z.object({
    finished: lib.z.boolean().optional(),
    createdAt: lib.z.object({
        min: lib.z.date().optional(),
        max: lib.z.date().optional()
    }).optional(),
    contactAttributes: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional(),
    data: lib.z.record(lib.z.union([
        ZResponseFilterCriteriaDataLessThan,
        ZResponseFilterCriteriaDataLessEqual,
        ZResponseFilterCriteriaDataGreaterEqual,
        ZResponseFilterCriteriaDataGreaterThan,
        ZResponseFilterCriteriaDataIncludesOne,
        ZResponseFilterCriteriaDataIncludesAll,
        ZResponseFilterCriteriaDataEquals,
        ZResponseFilterCriteriaDataNotEquals,
        ZResponseFilterCriteriaDataAccepted,
        ZResponseFilterCriteriaDataClicked,
        ZResponseFilterCriteriaDataSubmitted,
        ZResponseFilterCriteriaDataSkipped,
        ZResponseFilterCriteriaDataUploaded,
        ZResponseFilterCriteriaDataNotUploaded,
        ZResponseFilterCriteriaDataBooked,
        ZResponseFilterCriteriaMatrix,
        ZResponseFilterCriteriaFilledOut
    ])).optional(),
    tags: lib.z.object({
        applied: lib.z.array(lib.z.string()).optional(),
        notApplied: lib.z.array(lib.z.string()).optional()
    }).optional(),
    others: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional(),
    meta: lib.z.record(lib.z.object({
        op: lib.z.enum([
            "equals",
            "notEquals"
        ]),
        value: lib.z.union([
            lib.z.string(),
            lib.z.number()
        ])
    })).optional()
});
const ZResponseContact = lib.z.object({
    id: common/* ZId */.i4,
    userId: lib.z.string()
});
const ZResponseNoteUser = lib.z.object({
    id: lib.z.string().cuid2(),
    name: lib.z.string().nullable()
});
const ZResponseNote = lib.z.object({
    updatedAt: lib.z.date(),
    createdAt: lib.z.date(),
    id: lib.z.string(),
    text: lib.z.string(),
    user: ZResponseNoteUser,
    isResolved: lib.z.boolean(),
    isEdited: lib.z.boolean()
});
const ZResponseMeta = lib.z.object({
    source: lib.z.string().optional(),
    url: lib.z.string().optional(),
    userAgent: lib.z.object({
        browser: lib.z.string().optional(),
        os: lib.z.string().optional(),
        device: lib.z.string().optional()
    }).optional(),
    country: lib.z.string().optional(),
    action: lib.z.string().optional()
});
const ZResponse = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    surveyId: lib.z.string().cuid2(),
    displayId: lib.z.string().nullish(),
    contact: ZResponseContact.nullable(),
    contactAttributes: ZResponseContactAttributes,
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    data: ZResponseData,
    variables: ZResponseVariables,
    ttc: ZResponseTtc.optional(),
    notes: lib.z.array(ZResponseNote),
    tags: lib.z.array(ZTag),
    meta: ZResponseMeta,
    singleUseId: lib.z.string().nullable(),
    language: lib.z.string().nullable()
});
const ZResponseInput = lib.z.object({
    createdAt: lib.z.coerce.date().optional(),
    updatedAt: lib.z.coerce.date().optional(),
    environmentId: lib.z.string().cuid2(),
    surveyId: lib.z.string().cuid2(),
    userId: lib.z.string().nullish(),
    displayId: lib.z.string().nullish(),
    singleUseId: lib.z.string().nullable().optional(),
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    language: lib.z.string().optional(),
    data: ZResponseData,
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    meta: lib.z.object({
        source: lib.z.string().optional(),
        url: lib.z.string().optional(),
        userAgent: lib.z.object({
            browser: lib.z.string().optional(),
            device: lib.z.string().optional(),
            os: lib.z.string().optional()
        }).optional(),
        country: lib.z.string().optional(),
        action: lib.z.string().optional()
    }).optional()
});
const ZResponseUpdateInput = lib.z.object({
    finished: lib.z.boolean(),
    endingId: lib.z.string().nullish(),
    data: ZResponseData,
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    language: lib.z.string().optional()
});
const ZResponseWithSurvey = ZResponse.extend({
    survey: types/* ZSurvey */.pf
});
const ZResponseHiddenFieldValue = lib.z.record(lib.z.union([
    lib.z.string(),
    lib.z.number(),
    lib.z.array(lib.z.string())
]));
const ZResponseUpdate = lib.z.object({
    finished: lib.z.boolean(),
    data: ZResponseData,
    language: lib.z.string().optional(),
    variables: ZResponseVariables.optional(),
    ttc: ZResponseTtc.optional(),
    meta: lib.z.object({
        url: lib.z.string().optional(),
        source: lib.z.string().optional(),
        action: lib.z.string().optional()
    }).optional(),
    hiddenFields: ZResponseHiddenFieldValue.optional(),
    displayId: lib.z.string().nullish(),
    endingId: lib.z.string().nullish()
});
const ZResponseTableData = lib.z.object({
    responseId: lib.z.string(),
    createdAt: lib.z.date(),
    status: lib.z.string(),
    verifiedEmail: lib.z.string(),
    tags: lib.z.array(ZTag),
    notes: lib.z.array(ZResponseNote),
    language: lib.z.string().nullable(),
    responseData: ZResponseData,
    variables: lib.z.record(lib.z.union([
        lib.z.string(),
        lib.z.number()
    ])),
    person: ZResponseContact.nullable(),
    contactAttributes: ZResponseContactAttributes
});


/***/ })

};
;