"use strict";
exports.id = 5752;
exports.ids = [5752];
exports.modules = {

/***/ 864698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ addMultiLanguageLabels),
/* harmony export */   OJ: () => (/* binding */ extractLanguageCodes),
/* harmony export */   Ul: () => (/* binding */ getLanguageCode),
/* harmony export */   Xc: () => (/* binding */ appLanguages),
/* harmony export */   YV: () => (/* binding */ createI18nString),
/* harmony export */   aV: () => (/* binding */ isLabelValidForAllLanguages),
/* harmony export */   bT: () => (/* binding */ getLocalizedValue),
/* harmony export */   dH: () => (/* binding */ iso639Languages),
/* harmony export */   rJ: () => (/* binding */ getLanguageLabel),
/* harmony export */   rc: () => (/* binding */ getEnabledLanguages)
/* harmony export */ });
/* unused harmony exports isI18nObject, extractLanguageIds, iso639Identifiers */
/* harmony import */ var _pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300189);

// Helper function to create an i18nString from a regular string.
const createI18nString = (text, languages, targetLanguageCode)=>{
    if (typeof text === "object") {
        // It's already an i18n object, so clone it
        const i18nString = (0,_pollyfills_structuredClone__WEBPACK_IMPORTED_MODULE_0__/* .structuredClone */ .p)(text);
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

/***/ 300189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ structuredCloneExport)
/* harmony export */ });
/* harmony import */ var _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879977);

let structuredCloneExport;
if (typeof structuredClone === "undefined") {
    structuredCloneExport = _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;
} else {
    // @ts-expect-error
    structuredCloneExport = structuredClone;
}



/***/ }),

/***/ 700137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lu: () => (/* binding */ ZActionClassInput),
/* harmony export */   Zq: () => (/* binding */ ZActionClassNoCodeConfig),
/* harmony export */   vb: () => (/* binding */ ZActionClass)
/* harmony export */ });
/* unused harmony exports ZActionClassMatchType, ZActionClassPageUrlRule, ZActionClassType, ZActionClassInputCode */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);

const ZActionClassMatchType = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exactMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("contains"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("startsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("endsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notContains")
]);
const ZActionClassPageUrlRule = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exactMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("contains"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("startsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("endsWith"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notMatch"),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("notContains")
]);
const ZActionClassNoCodeConfigBase = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "click",
        "pageView",
        "exitIntent",
        "fiftyPercentScroll"
    ]),
    urlFilters: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        value: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1, {
            message: "Value must contain atleast 1 character"
        }),
        rule: ZActionClassPageUrlRule
    }))
});
const ZActionClassNoCodeConfigClick = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("click"),
    elementSelector: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        cssSelector: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().optional(),
        innerHtml: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().optional()
    }).superRefine((data, ctx)=>{
        if (!data.cssSelector && !data.innerHtml) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: `Either cssSelector or innerHtml must be provided`
            });
        }
    })
});
const ZActionClassNoCodeConfigPageView = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("pageView")
});
const ZActionClassNoCodeConfigExitIntent = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("exitIntent")
});
const ZActionClassNoCodeConfigfiftyPercentScroll = ZActionClassNoCodeConfigBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("fiftyPercentScroll")
});
const ZActionClassNoCodeConfig = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZActionClassNoCodeConfigClick,
    ZActionClassNoCodeConfigPageView,
    ZActionClassNoCodeConfigExitIntent,
    ZActionClassNoCodeConfigfiftyPercentScroll
]);
const ZActionClassType = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "code",
    "noCode",
    "automatic"
]);
const ZActionClass = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    type: ZActionClassType,
    key: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1).nullable(),
    noCodeConfig: ZActionClassNoCodeConfig.nullable(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date()
});
const ZActionClassInputBase = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string({
        message: "Name is required"
    }).trim().min(1, {
        message: "Name must be at least 1 character long"
    }),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    type: ZActionClassType
});
const ZActionClassInputCode = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("code"),
    key: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(1).nullable()
});
const ZActionClassInputNoCode = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("noCode"),
    noCodeConfig: ZActionClassNoCodeConfig.nullable()
});
const ZActionClassInputAutomatic = ZActionClassInputBase.extend({
    type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("automatic")
});
const ZActionClassInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZActionClassInputCode,
    ZActionClassInputNoCode,
    ZActionClassInputAutomatic
]);


/***/ }),

/***/ 52615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cf: () => (/* binding */ ZColor),
/* harmony export */   gK: () => (/* binding */ ZAllowedFileExtension),
/* harmony export */   hF: () => (/* binding */ getZSafeUrl),
/* harmony export */   i4: () => (/* binding */ ZId),
/* harmony export */   yO: () => (/* binding */ ZPlacement)
/* harmony export */ });
/* unused harmony exports ZBoolean, ZString, ZNumber, ZOptionalNumber, ZOptionalString, ZNullableString, ZUuid */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);

const ZBoolean = zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean();
const ZString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string();
const ZNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number();
const ZOptionalNumber = zod__WEBPACK_IMPORTED_MODULE_0__.z.number().optional();
const ZOptionalString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional();
const ZNullableString = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable();
const ZColor = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
const ZPlacement = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "bottomLeft",
    "bottomRight",
    "topLeft",
    "topRight",
    "center"
]);
const ZAllowedFileExtension = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "png",
    "jpeg",
    "jpg",
    "webp",
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "plain",
    "csv",
    "mp4",
    "mov",
    "avi",
    "mkv",
    "webm",
    "zip",
    "rar",
    "7z",
    "tar"
]);
const ZId = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2();
const ZUuid = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid();
const getZSafeUrl = (message)=>zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url({
        message
    }).superRefine((url, ctx)=>{
        if (url.includes(" ")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must not contain spaces"
            });
        }
        if (!url.startsWith("https://")) {
            ctx.addIssue({
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: "URL must start with https://"
            });
        }
    });


/***/ }),

/***/ 19059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LM: () => (/* binding */ ZLanguage),
  AK: () => (/* binding */ ZProject),
  Rz: () => (/* binding */ ZProjectConfigChannel),
  Y: () => (/* binding */ ZProjectConfigIndustry),
  Qh: () => (/* binding */ ZProjectStyling),
  RQ: () => (/* binding */ ZProjectUpdateInput)
});

// UNUSED EXPORTS: ZLanguageInput, ZLanguageUpdate, ZLogo, ZProjectConfig, ZProjectMode

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(52615);
;// ../../packages/types/environment.ts

const ZEnvironment = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    type: lib.z.enum([
        "development",
        "production"
    ]),
    projectId: lib.z.string(),
    appSetupCompleted: lib.z.boolean()
});
const ZEnvironmentId = lib.z.object({
    id: lib.z.string()
});
const ZEnvironmentUpdateInput = lib.z.object({
    type: lib.z.enum([
        "development",
        "production"
    ]),
    projectId: lib.z.string(),
    appSetupCompleted: lib.z.boolean()
});
const ZEnvironmentCreateInput = lib.z.object({
    type: lib.z.enum([
        "development",
        "production"
    ]).optional(),
    appSetupCompleted: lib.z.boolean().optional()
});

// EXTERNAL MODULE: ../../packages/types/styling.ts
var styling = __webpack_require__(755274);
;// ../../packages/types/project.ts




const ZProjectStyling = styling/* ZBaseStyling */.U6.extend({
    allowStyleOverwrite: lib.z.boolean()
});
const ZProjectConfigIndustry = lib.z.enum([
    "eCommerce",
    "saas",
    "other"
]).nullable();
const ZProjectConfigChannel = lib.z.enum([
    "link",
    "app",
    "website"
]).nullable();
const ZProjectMode = lib.z.enum([
    "surveys",
    "cx"
]);
const ZProjectConfig = lib.z.object({
    channel: ZProjectConfigChannel,
    industry: ZProjectConfigIndustry
});
const ZLanguage = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    code: lib.z.string(),
    alias: lib.z.string().nullable()
});
const ZLanguageInput = lib.z.object({
    code: lib.z.string(),
    alias: lib.z.string().nullable()
});
const ZLanguageUpdate = lib.z.object({
    alias: lib.z.string().nullable()
});
const ZLogo = lib.z.object({
    url: lib.z.string().optional(),
    bgColor: lib.z.string().optional()
});
const ZProject = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string().trim().min(1, {
        message: "Project name cannot be empty"
    }),
    organizationId: lib.z.string(),
    styling: ZProjectStyling,
    recontactDays: lib.z.number({
        message: "Recontact days is required"
    }).int().min(0, {
        message: "Must be a positive number"
    }).max(365, {
        message: "Must be less than 365"
    }),
    inAppSurveyBranding: lib.z.boolean(),
    linkSurveyBranding: lib.z.boolean(),
    config: ZProjectConfig,
    placement: common/* ZPlacement */.yO,
    clickOutsideClose: lib.z.boolean(),
    darkOverlay: lib.z.boolean(),
    environments: lib.z.array(ZEnvironment),
    languages: lib.z.array(ZLanguage),
    logo: ZLogo.nullish()
});
const ZProjectUpdateInput = lib.z.object({
    name: lib.z.string().trim().min(1, {
        message: "Project name cannot be empty"
    }).optional(),
    organizationId: lib.z.string().optional(),
    highlightBorderColor: common/* ZColor */.cf.nullish(),
    recontactDays: lib.z.number().int().optional(),
    inAppSurveyBranding: lib.z.boolean().optional(),
    linkSurveyBranding: lib.z.boolean().optional(),
    config: ZProjectConfig.optional(),
    placement: common/* ZPlacement */.yO.optional(),
    clickOutsideClose: lib.z.boolean().optional(),
    darkOverlay: lib.z.boolean().optional(),
    environments: lib.z.array(ZEnvironment).optional(),
    styling: ZProjectStyling.optional(),
    logo: ZLogo.optional(),
    teamIds: lib.z.array(lib.z.string()).optional()
});


/***/ }),

/***/ 528469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ji: () => (/* binding */ ZSegmentFilters),
/* harmony export */   K5: () => (/* binding */ ZSegment),
/* harmony export */   VG: () => (/* binding */ DEVICE_OPERATORS),
/* harmony export */   XF: () => (/* binding */ ATTRIBUTE_OPERATORS),
/* harmony export */   ng: () => (/* binding */ ARITHMETIC_OPERATORS),
/* harmony export */   wW: () => (/* binding */ PERSON_OPERATORS)
/* harmony export */ });
/* unused harmony exports BASE_OPERATORS, STRING_OPERATORS, ZBaseOperator, SEGMENT_OPERATORS, ALL_OPERATORS, ZAttributeOperator, ZPersonOperator, ZSegmentOperator, ZDeviceOperator, ZSegmentFilterValue, ZSegmentAttributeFilter, ZSegmentPersonFilter, ZSegmentSegmentFilter, ZSegmentDeviceFilter, ZSegmentFilter, ZSegmentConnector, ZBaseFilter, ZBaseFilters, ZSegmentCreateInput, ZSegmentUpdateInput */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);

// The segment filter has operators, these are all the types of operators that can be used
const BASE_OPERATORS = [
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual",
    "equals",
    "notEquals"
];
const ARITHMETIC_OPERATORS = [
    "lessThan",
    "lessEqual",
    "greaterThan",
    "greaterEqual"
];
const STRING_OPERATORS = [
    "contains",
    "doesNotContain",
    "startsWith",
    "endsWith"
];
const ZBaseOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(BASE_OPERATORS);
// An attribute filter can have these operators
const ATTRIBUTE_OPERATORS = [
    ...BASE_OPERATORS,
    "isSet",
    "isNotSet",
    "contains",
    "doesNotContain",
    "startsWith",
    "endsWith"
];
// the person filter currently has the same operators as the attribute filter
// but we might want to add more operators in the future, so we keep it separated
const PERSON_OPERATORS = ATTRIBUTE_OPERATORS;
// operators for segment filters
const SEGMENT_OPERATORS = [
    "userIsIn",
    "userIsNotIn"
];
// operators for device filters
const DEVICE_OPERATORS = [
    "equals",
    "notEquals"
];
// all operators
const ALL_OPERATORS = [
    ...ATTRIBUTE_OPERATORS,
    ...SEGMENT_OPERATORS
];
const ZAttributeOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(ATTRIBUTE_OPERATORS);
const ZPersonOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(PERSON_OPERATORS);
const ZSegmentOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(SEGMENT_OPERATORS);
const ZDeviceOperator = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(DEVICE_OPERATORS);
const ZSegmentFilterValue = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    zod__WEBPACK_IMPORTED_MODULE_0__.z.number()
]);
// Each filter has a qualifier, which usually contains the operator for evaluating the filter.
// Attribute filter -> root will always have type "attribute"
const ZSegmentAttributeFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("attribute"),
        contactAttributeKey: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZAttributeOperator
    })
});
// Person filter -> root will always have type "person"
const ZSegmentPersonFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("person"),
        personIdentifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZPersonOperator
    })
});
// Segment filter -> root will always have type "segment"
const ZSegmentSegmentFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("segment"),
        segmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZSegmentOperator
    })
});
// Device filter -> root will always have type "device"
const ZSegmentDeviceFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    root: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("device"),
        deviceType: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    value: ZSegmentFilterValue,
    qualifier: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        operator: ZDeviceOperator
    })
});
// A segment filter is a union of all the different filter types
const ZSegmentFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
    ZSegmentAttributeFilter,
    ZSegmentPersonFilter,
    ZSegmentSegmentFilter,
    ZSegmentDeviceFilter
])// we need to refine the filter to make sure that the filter is valid
.refine((filter)=>{
    // if the operator is an arithmentic operator, the value must be a number
    if (ARITHMETIC_OPERATORS.includes(filter.qualifier.operator) && typeof filter.value !== "number") {
        return false;
    }
    // if the operator is a string operator, the value must be a string
    if (STRING_OPERATORS.includes(filter.qualifier.operator) && typeof filter.value !== "string") {
        return false;
    }
    return true;
}, {
    message: "Value must be a string for string operators and a number for arithmetic operators"
}).refine((filter)=>{
    const { value, qualifier } = filter;
    const { operator } = qualifier;
    // if the operator is "isSet" or "isNotSet", the value doesn't matter
    if (operator === "isSet" || operator === "isNotSet") {
        return true;
    }
    if (typeof value === "string") {
        return value.length > 0;
    }
    return true;
}, {
    message: "Invalid value for filters: please check your filter values"
});
const ZSegmentConnector = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "and",
    "or"
]).nullable();
const ZBaseFilter = zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
        connector: ZSegmentConnector,
        resource: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
            ZSegmentFilter,
            ZBaseFilters
        ])
    }));
const ZBaseFilters = zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>zod__WEBPACK_IMPORTED_MODULE_0__.z.array(ZBaseFilter));
// here again, we refine the filters to make sure that the filters are valid
const refineFilters = (filters)=>{
    let result = true;
    for(let i = 0; i < filters.length; i++){
        const group = filters[i];
        if (Array.isArray(group.resource)) {
            result = refineFilters(group.resource);
        } else if (i === 0 && group.connector !== null) {
            // if the connector for a "first" group is not null, it's invalid
            result = false;
            break;
        }
    }
    return result;
};
// The filters can be nested, so we need to use z.lazy to define the type
// more on recusrsive types -> https://zod.dev/?id=recursive-types
// TODO: Figure out why this is not working, and then remove the ts-ignore
const ZSegmentFilters = zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid2(),
    connector: ZSegmentConnector,
    resource: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
        ZSegmentFilter,
        zod__WEBPACK_IMPORTED_MODULE_0__.z.lazy(()=>ZSegmentFilters)
    ])
})).refine(refineFilters, {
    message: "Invalid filters applied"
});
const ZSegment = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    createdAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    updatedAt: zod__WEBPACK_IMPORTED_MODULE_0__.z.date(),
    surveys: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())
});
const ZSegmentCreateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    environmentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    surveyId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ZSegmentUpdateInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    title: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullable(),
    isPrivate: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().default(true),
    filters: ZSegmentFilters,
    surveys: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())
}).partial();


/***/ }),

/***/ 755274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U6: () => (/* binding */ ZBaseStyling)
/* harmony export */ });
/* unused harmony exports ZStylingColor, ZCardArrangementOptions, ZCardArrangement, ZSurveyStylingBackground */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52615);


const ZStylingColor = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    light: _common__WEBPACK_IMPORTED_MODULE_1__/* .ZColor */ .cf,
    dark: _common__WEBPACK_IMPORTED_MODULE_1__/* .ZColor */ .cf.nullish()
});
const ZCardArrangementOptions = zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
    "casual",
    "straight",
    "simple"
]);
const ZCardArrangement = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    linkSurveys: ZCardArrangementOptions,
    appSurveys: ZCardArrangementOptions
});
const ZSurveyStylingBackground = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    bg: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().nullish(),
    bgType: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([
        "animation",
        "color",
        "image",
        "upload"
    ]).nullish(),
    brightness: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish()
}).refine((surveyBackground)=>{
    if (surveyBackground.bgType === "upload") {
        return Boolean(surveyBackground.bg);
    }
    return true;
}, {
    message: "Invalid background"
});
const ZBaseStyling = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    brandColor: ZStylingColor.nullish(),
    questionColor: ZStylingColor.nullish(),
    inputColor: ZStylingColor.nullish(),
    inputBorderColor: ZStylingColor.nullish(),
    cardBackgroundColor: ZStylingColor.nullish(),
    cardBorderColor: ZStylingColor.nullish(),
    cardShadowColor: ZStylingColor.nullish(),
    highlightBorderColor: ZStylingColor.nullish(),
    isDarkModeEnabled: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish(),
    roundness: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish(),
    cardArrangement: ZCardArrangement.nullish(),
    background: ZSurveyStylingBackground.nullish(),
    hideProgressBar: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish(),
    isLogoHidden: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean().nullish()
});


/***/ }),

/***/ 102379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wn: () => (/* binding */ TSurveyQuestionTypeEnum),
  pf: () => (/* binding */ ZSurvey),
  gA: () => (/* binding */ ZSurveyEndScreenCard),
  ZE: () => (/* binding */ ZSurveyEndings),
  uv: () => (/* binding */ ZSurveyHiddenFields),
  pK: () => (/* binding */ ZSurveyLogicConditionsOperator),
  CA: () => (/* binding */ ZSurveyQuestions),
  GJ: () => (/* binding */ ZSurveyRedirectUrlCard),
  vP: () => (/* binding */ ZSurveyStatus),
  Ls: () => (/* binding */ ZSurveyStyling),
  zw: () => (/* binding */ ZSurveyWelcomeCard)
});

// UNUSED EXPORTS: ZActionCalculateNumber, ZActionCalculateText, ZActionNumberVariableCalculateOperator, ZActionObjective, ZActionTextVariableCalculateOperator, ZActionVariableValueType, ZDynamicLogicField, ZFilterOption, ZI18nString, ZRightOperand, ZRightOperandStatic, ZShuffleOption, ZSingleCondition, ZSortOption, ZSurveyAddressQuestion, ZSurveyBackgroundBgType, ZSurveyCTAQuestion, ZSurveyCalQuestion, ZSurveyClosedMessage, ZSurveyConsentQuestion, ZSurveyContactInfoQuestion, ZSurveyCreateInput, ZSurveyDateQuestion, ZSurveyDisplayOption, ZSurveyEnding, ZSurveyFileUploadQuestion, ZSurveyFilterCriteria, ZSurveyFilters, ZSurveyInlineTriggers, ZSurveyLanguage, ZSurveyLogic, ZSurveyLogicAction, ZSurveyMatrixQuestion, ZSurveyMultipleChoiceQuestion, ZSurveyNPSQuestion, ZSurveyOpenTextQuestion, ZSurveyOpenTextQuestionInputType, ZSurveyPictureChoice, ZSurveyPictureSelectionQuestion, ZSurveyProjectOverwrites, ZSurveyQuestion, ZSurveyQuestionBase, ZSurveyQuestionChoice, ZSurveyQuestionId, ZSurveyQuestionSummary, ZSurveyQuestionSummaryAddress, ZSurveyQuestionSummaryCal, ZSurveyQuestionSummaryConsent, ZSurveyQuestionSummaryContactInfo, ZSurveyQuestionSummaryCta, ZSurveyQuestionSummaryDate, ZSurveyQuestionSummaryFileUpload, ZSurveyQuestionSummaryHiddenFields, ZSurveyQuestionSummaryMatrix, ZSurveyQuestionSummaryMultipleChoice, ZSurveyQuestionSummaryNps, ZSurveyQuestionSummaryOpenText, ZSurveyQuestionSummaryPictureSelection, ZSurveyQuestionSummaryRanking, ZSurveyQuestionSummaryRating, ZSurveyQuestionType, ZSurveyQuestionsObject, ZSurveyRankingQuestion, ZSurveyRatingQuestion, ZSurveyRecallItem, ZSurveySingleUse, ZSurveySummary, ZSurveyType, ZSurveyUpdateInput, ZSurveyVariable, ZSurveyVariables

// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(99922);
;// ../../packages/database/types/survey-follow-up.ts

const ZSurveyFollowUpTrigger = lib.z.object({
    type: lib.z.enum([
        "response",
        "endings"
    ]),
    properties: lib.z.object({
        endingIds: lib.z.array(lib.z.string().cuid2())
    }).nullable()
}).superRefine((trigger, ctx)=>{
    if (trigger.type === "response") {
        if (trigger.properties) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Properties should be null for response type"
            });
        }
    }
    if (trigger.type === "endings") {
        if (!trigger.properties) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Properties must be defined for endings type"
            });
        }
    }
});
const ZSurveyFollowUpAction = lib.z.object({
    type: lib.z.literal("send-email"),
    properties: lib.z.object({
        to: lib.z.string(),
        from: lib.z.string().email(),
        replyTo: lib.z.array(lib.z.string().email()),
        subject: lib.z.string(),
        body: lib.z.string()
    })
});
const ZSurveyFollowUp = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    trigger: ZSurveyFollowUpTrigger,
    action: ZSurveyFollowUpAction,
    surveyId: lib.z.string().cuid2()
});

;// ../../packages/database/zod/insights.ts

const ZInsight = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    environmentId: lib.z.string().cuid2(),
    title: lib.z.string(),
    description: lib.z.string(),
    category: lib.z.enum([
        "featureRequest",
        "complaint",
        "praise",
        "other"
    ])
});

// EXTERNAL MODULE: ../../packages/types/action-classes.ts
var action_classes = __webpack_require__(700137);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(52615);
;// ../../packages/types/contact-attribute.ts


const ZContactAttribute = lib.z.object({
    id: common/* ZId */.i4,
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    attributeKeyId: common/* ZId */.i4,
    contactId: common/* ZId */.i4,
    value: lib.z.string()
});
const ZContactAttributeUpdateInput = lib.z.object({
    environmentId: lib.z.string().cuid2(),
    contactId: lib.z.string(),
    attributes: lib.z.record(lib.z.union([
        lib.z.string(),
        lib.z.number()
    ]))
});
const ZContactAttributes = lib.z.record(lib.z.string());

// EXTERNAL MODULE: ../../packages/types/project.ts + 1 modules
var project = __webpack_require__(19059);
// EXTERNAL MODULE: ../../packages/types/segment.ts
var segment = __webpack_require__(528469);
// EXTERNAL MODULE: ../../packages/types/styling.ts
var styling = __webpack_require__(755274);
// EXTERNAL MODULE: ../../packages/types/surveys/validation.ts
var validation = __webpack_require__(683637);
;// ../../packages/types/surveys/types.ts
/* eslint-disable no-new -- required for error */ 









const ZI18nString = lib.z.record(lib.z.string()).refine((obj)=>"default" in obj, {
    message: "Object must have a 'default' key"
});
const ZSurveyEndingBase = lib.z.object({
    id: lib.z.string().cuid2()
});
const ZSurveyEndScreenCard = ZSurveyEndingBase.extend({
    type: lib.z.literal("endScreen"),
    headline: ZI18nString.optional(),
    subheader: ZI18nString.optional(),
    buttonLabel: ZI18nString.optional(),
    buttonLink: (0,common/* getZSafeUrl */.hF)("Invalid Button Url in Ending card").optional(),
    imageUrl: lib.z.string().optional(),
    videoUrl: lib.z.string().optional()
});
const validateUrlWithRecall = (url)=>{
    try {
        if (!url.startsWith("https://")) {
            return "URL must start with https://";
        }
        if (url.includes(" ") && !url.endsWith(" ")) {
            return "URL must not contain spaces";
        }
        new URL(url);
        return null;
    } catch  {
        const hostname = url.split("https://")[1];
        if (hostname.includes("#recall:")) {
            return "Recall information cannot be used in the hostname part of the URL";
        }
        return "Invalid Redirect URL";
    }
};
const ZSurveyRedirectUrlCard = ZSurveyEndingBase.extend({
    type: lib.z.literal("redirectToUrl"),
    url: lib.z.string().optional().superRefine((url, ctx)=>{
        if (!url) return;
        const error = validateUrlWithRecall(url);
        if (error) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: error
            });
        }
    }),
    label: lib.z.string().optional()
});
const ZSurveyEnding = lib.z.union([
    ZSurveyEndScreenCard,
    ZSurveyRedirectUrlCard
]);
const ZSurveyEndings = lib.z.array(ZSurveyEnding);
var TSurveyQuestionTypeEnum = /*#__PURE__*/ function(TSurveyQuestionTypeEnum) {
    TSurveyQuestionTypeEnum["FileUpload"] = "fileUpload";
    TSurveyQuestionTypeEnum["OpenText"] = "openText";
    TSurveyQuestionTypeEnum["MultipleChoiceSingle"] = "multipleChoiceSingle";
    TSurveyQuestionTypeEnum["MultipleChoiceMulti"] = "multipleChoiceMulti";
    TSurveyQuestionTypeEnum["NPS"] = "nps";
    TSurveyQuestionTypeEnum["CTA"] = "cta";
    TSurveyQuestionTypeEnum["Rating"] = "rating";
    TSurveyQuestionTypeEnum["Consent"] = "consent";
    TSurveyQuestionTypeEnum["PictureSelection"] = "pictureSelection";
    TSurveyQuestionTypeEnum["Cal"] = "cal";
    TSurveyQuestionTypeEnum["Date"] = "date";
    TSurveyQuestionTypeEnum["Matrix"] = "matrix";
    TSurveyQuestionTypeEnum["Address"] = "address";
    TSurveyQuestionTypeEnum["Ranking"] = "ranking";
    TSurveyQuestionTypeEnum["ContactInfo"] = "contactInfo";
    return TSurveyQuestionTypeEnum;
}({});
const ZSurveyQuestionId = lib.z.string().superRefine((id, ctx)=>{
    if (validation/* FORBIDDEN_IDS */.dn.includes(id)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: `Question id is not allowed`
        });
    }
    if (id.includes(" ")) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Question id not allowed, avoid using spaces."
        });
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Question id not allowed, use only alphanumeric characters, hyphens, or underscores."
        });
    }
});
const ZSurveyWelcomeCard = lib.z.object({
    enabled: lib.z.boolean(),
    headline: ZI18nString.optional(),
    html: ZI18nString.optional(),
    fileUrl: lib.z.string().optional(),
    buttonLabel: ZI18nString.optional(),
    timeToFinish: lib.z.boolean().default(true),
    showResponseCount: lib.z.boolean().default(false),
    videoUrl: lib.z.string().optional()
}).refine((schema)=>!(schema.enabled && !schema.headline), {
    message: "Welcome card must have a headline"
});
const ZSurveyHiddenFields = lib.z.object({
    enabled: lib.z.boolean(),
    fieldIds: lib.z.optional(lib.z.array(lib.z.string().superRefine((field, ctx)=>{
        if (validation/* FORBIDDEN_IDS */.dn.includes(field)) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Hidden field id is not allowed`
            });
        }
        if (field.includes(" ")) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Hidden field id not allowed, avoid using spaces."
            });
        }
        if (!/^[a-zA-Z0-9_-]+$/.test(field)) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Hidden field id not allowed, use only alphanumeric characters, hyphens, or underscores."
            });
        }
    })))
});
const ZSurveyVariable = lib.z.discriminatedUnion("type", [
    lib.z.object({
        id: lib.z.string().cuid2(),
        name: lib.z.string(),
        type: lib.z.literal("number"),
        value: lib.z.number().default(0)
    }),
    lib.z.object({
        id: lib.z.string().cuid2(),
        name: lib.z.string(),
        type: lib.z.literal("text"),
        value: lib.z.string().default("")
    })
]).superRefine((data, ctx)=>{
    // variable name can only contain lowercase letters, numbers, and underscores
    if (!/^[a-z0-9_]+$/.test(data.name)) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Variable name can only contain lowercase letters, numbers, and underscores",
            path: [
                "variables"
            ]
        });
    }
});
const ZSurveyVariables = lib.z.array(ZSurveyVariable);
const ZSurveyProjectOverwrites = lib.z.object({
    brandColor: common/* ZColor */.cf.nullish(),
    highlightBorderColor: common/* ZColor */.cf.nullish(),
    placement: common/* ZPlacement */.yO.nullish(),
    clickOutsideClose: lib.z.boolean().nullish(),
    darkOverlay: lib.z.boolean().nullish()
});
const ZSurveyBackgroundBgType = lib.z.enum([
    "animation",
    "color",
    "upload",
    "image"
]);
const ZSurveyStyling = styling/* ZBaseStyling */.U6.extend({
    overwriteThemeStyling: lib.z.boolean().nullish()
});
const ZSurveyClosedMessage = lib.z.object({
    enabled: lib.z.boolean().optional(),
    heading: lib.z.string().optional(),
    subheading: lib.z.string().optional()
}).nullable().optional();
const ZSurveySingleUse = lib.z.object({
    enabled: lib.z.boolean(),
    heading: lib.z.optional(lib.z.string()),
    subheading: lib.z.optional(lib.z.string()),
    isEncrypted: lib.z.boolean()
}).nullable();
const ZSurveyQuestionChoice = lib.z.object({
    id: lib.z.string(),
    label: ZI18nString
});
const ZSurveyPictureChoice = lib.z.object({
    id: lib.z.string(),
    imageUrl: lib.z.string()
});
// Logic types
const ZSurveyLogicConditionsOperator = lib.z.enum([
    "equals",
    "doesNotEqual",
    "contains",
    "doesNotContain",
    "startsWith",
    "doesNotStartWith",
    "endsWith",
    "doesNotEndWith",
    "isSubmitted",
    "isSkipped",
    "isGreaterThan",
    "isLessThan",
    "isGreaterThanOrEqual",
    "isLessThanOrEqual",
    "equalsOneOf",
    "includesAllOf",
    "includesOneOf",
    "doesNotIncludeOneOf",
    "doesNotIncludeAllOf",
    "isClicked",
    "isAccepted",
    "isBefore",
    "isAfter",
    "isBooked",
    "isPartiallySubmitted",
    "isCompletelySubmitted"
]);
const operatorsWithoutRightOperand = [
    ZSurveyLogicConditionsOperator.Enum.isSubmitted,
    ZSurveyLogicConditionsOperator.Enum.isSkipped,
    ZSurveyLogicConditionsOperator.Enum.isClicked,
    ZSurveyLogicConditionsOperator.Enum.isAccepted,
    ZSurveyLogicConditionsOperator.Enum.isBooked,
    ZSurveyLogicConditionsOperator.Enum.isPartiallySubmitted,
    ZSurveyLogicConditionsOperator.Enum.isCompletelySubmitted
];
const ZDynamicLogicField = lib.z.enum([
    "question",
    "variable",
    "hiddenField"
]);
const ZActionObjective = lib.z.enum([
    "calculate",
    "requireAnswer",
    "jumpToQuestion"
]);
const ZActionTextVariableCalculateOperator = lib.z.enum([
    "assign",
    "concat"
], {
    message: "Conditional Logic: Invalid operator for a text variable"
});
const ZActionNumberVariableCalculateOperator = lib.z.enum([
    "add",
    "subtract",
    "multiply",
    "divide",
    "assign"
], {
    message: "Conditional Logic: Invalid operator for a number variable"
});
const ZDynamicQuestion = lib.z.object({
    type: lib.z.literal("question"),
    value: lib.z.string().min(1, "Conditional Logic: Question id cannot be empty")
});
const ZDynamicVariable = lib.z.object({
    type: lib.z.literal("variable"),
    value: lib.z.string().cuid2({
        message: "Conditional Logic: Variable id must be a valid cuid"
    }).min(1, "Conditional Logic: Variable id cannot be empty")
});
const ZDynamicHiddenField = lib.z.object({
    type: lib.z.literal("hiddenField"),
    value: lib.z.string().min(1, "Conditional Logic: Hidden field id cannot be empty")
});
const ZDynamicLogicFieldValue = lib.z.union([
    ZDynamicQuestion,
    ZDynamicVariable,
    ZDynamicHiddenField
], {
    message: "Conditional Logic: Invalid dynamic field value"
});
// Conditions
const ZLeftOperand = ZDynamicLogicFieldValue;
const ZRightOperandStatic = lib.z.object({
    type: lib.z.literal("static"),
    value: lib.z.union([
        lib.z.string(),
        lib.z.number(),
        lib.z.array(lib.z.string())
    ])
});
const ZRightOperand = lib.z.union([
    ZRightOperandStatic,
    ZDynamicLogicFieldValue
]);
const ZSingleCondition = lib.z.object({
    id: common/* ZId */.i4,
    leftOperand: ZLeftOperand,
    operator: ZSurveyLogicConditionsOperator,
    rightOperand: ZRightOperand.optional()
}).and(lib.z.object({
    connector: lib.z.undefined()
})).superRefine((val, ctx)=>{
    if (!operatorsWithoutRightOperand.includes(val.operator)) {
        if (val.rightOperand === undefined) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: right operand is required for operator "${val.operator}"`,
                path: [
                    "rightOperand"
                ]
            });
        } else if (val.rightOperand.type === "static" && val.rightOperand.value === "") {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: right operand value cannot be empty for operator "${val.operator}"`
            });
        }
    } else if (val.rightOperand !== undefined) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: `Conditional Logic: right operand should not be present for operator "${val.operator}"`,
            path: [
                "rightOperand"
            ]
        });
    }
});
const ZConditionGroup = lib.z.lazy(()=>lib.z.object({
        id: common/* ZId */.i4,
        connector: lib.z.enum([
            "and",
            "or"
        ]),
        conditions: lib.z.array(lib.z.union([
            ZSingleCondition,
            ZConditionGroup
        ]))
    }));
// Actions
const ZActionVariableValueType = lib.z.union([
    lib.z.literal("static"),
    ZDynamicLogicField
]);
const ZActionBase = lib.z.object({
    id: common/* ZId */.i4,
    objective: ZActionObjective
});
const ZActionCalculateBase = ZActionBase.extend({
    objective: lib.z.literal("calculate"),
    variableId: lib.z.string()
});
const ZActionCalculateText = ZActionCalculateBase.extend({
    operator: ZActionTextVariableCalculateOperator,
    value: lib.z.union([
        lib.z.object({
            type: lib.z.literal("static"),
            value: lib.z.string({
                message: "Conditional Logic: Value must be a string for text variable"
            }).min(1, "Conditional Logic: Please enter a value in logic field")
        }),
        ZDynamicLogicFieldValue
    ])
});
const ZActionCalculateNumber = ZActionCalculateBase.extend({
    operator: ZActionNumberVariableCalculateOperator,
    value: lib.z.union([
        lib.z.object({
            type: lib.z.literal("static"),
            value: lib.z.number({
                message: "Conditional Logic: Value must be a number for number variable"
            })
        }),
        ZDynamicLogicFieldValue
    ])
}).superRefine((val, ctx)=>{
    if (val.operator === "divide" && val.value.type === "static" && val.value.value === 0) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Conditional Logic: Cannot divide by zero",
            path: [
                "value",
                "value"
            ]
        });
    }
});
const ZActionCalculate = lib.z.union([
    ZActionCalculateText,
    ZActionCalculateNumber
]);
const ZActionRequireAnswer = ZActionBase.extend({
    objective: lib.z.literal("requireAnswer"),
    target: lib.z.string().min(1, "Conditional Logic: Target question id cannot be empty")
});
const ZActionJumpToQuestion = ZActionBase.extend({
    objective: lib.z.literal("jumpToQuestion"),
    target: lib.z.string().min(1, "Conditional Logic: Target question id cannot be empty")
});
const ZSurveyLogicAction = lib.z.union([
    ZActionCalculate,
    ZActionRequireAnswer,
    ZActionJumpToQuestion
]);
const ZSurveyLogicActions = lib.z.array(ZSurveyLogicAction);
const ZSurveyLogic = lib.z.object({
    id: common/* ZId */.i4,
    conditions: ZConditionGroup,
    actions: ZSurveyLogicActions
});
const ZSurveyQuestionBase = lib.z.object({
    id: ZSurveyQuestionId,
    type: lib.z.string(),
    headline: ZI18nString,
    subheader: ZI18nString.optional(),
    imageUrl: lib.z.string().optional(),
    videoUrl: lib.z.string().optional(),
    required: lib.z.boolean(),
    buttonLabel: ZI18nString.optional(),
    backButtonLabel: ZI18nString.optional(),
    scale: lib.z.enum([
        "number",
        "smiley",
        "star"
    ]).optional(),
    range: lib.z.union([
        lib.z.literal(5),
        lib.z.literal(3),
        lib.z.literal(4),
        lib.z.literal(7),
        lib.z.literal(10)
    ]).optional(),
    logic: lib.z.array(ZSurveyLogic).optional(),
    logicFallback: ZSurveyQuestionId.optional(),
    isDraft: lib.z.boolean().optional()
});
const ZSurveyOpenTextQuestionInputType = lib.z.enum([
    "text",
    "email",
    "url",
    "number",
    "phone"
]);
const ZSurveyOpenTextQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("openText"),
    placeholder: ZI18nString.optional(),
    longAnswer: lib.z.boolean().optional(),
    inputType: ZSurveyOpenTextQuestionInputType.optional().default("text"),
    insightsEnabled: lib.z.boolean().default(false).optional(),
    charLimit: lib.z.object({
        enabled: lib.z.boolean().default(false).optional(),
        min: lib.z.number().optional(),
        max: lib.z.number().optional()
    }).default({
        enabled: false
    })
}).superRefine((data, ctx)=>{
    if (data.charLimit.enabled && data.charLimit.min === undefined && data.charLimit.max === undefined) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Enter the values for either minimum or maximum field"
        });
    }
    if (data.charLimit.min !== undefined && data.charLimit.min < 0 || data.charLimit.max !== undefined && data.charLimit.max < 0) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "The character limit values should be positive"
        });
    }
    if (data.charLimit.min !== undefined && data.charLimit.max !== undefined && data.charLimit.min > data.charLimit.max) {
        ctx.addIssue({
            code: lib.z.ZodIssueCode.custom,
            message: "Minimum value cannot be greater than the maximum value"
        });
    }
});
const ZSurveyConsentQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("consent"),
    html: ZI18nString.optional(),
    label: ZI18nString,
    placeholder: lib.z.string().optional()
});
const ZShuffleOption = lib.z.enum([
    "none",
    "all",
    "exceptLast"
]);
const ZSurveyMultipleChoiceQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.union([
        lib.z.literal("multipleChoiceSingle"),
        lib.z.literal("multipleChoiceMulti")
    ]),
    choices: lib.z.array(ZSurveyQuestionChoice).min(2, {
        message: "Multiple Choice Question must have at least two choices"
    }),
    shuffleOption: ZShuffleOption.optional(),
    otherOptionPlaceholder: ZI18nString.optional()
});
const ZSurveyNPSQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("nps"),
    lowerLabel: ZI18nString.optional(),
    upperLabel: ZI18nString.optional(),
    isColorCodingEnabled: lib.z.boolean().optional().default(false)
});
const ZSurveyCTAQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("cta"),
    html: ZI18nString.optional(),
    buttonUrl: lib.z.string().optional(),
    buttonExternal: lib.z.boolean(),
    dismissButtonLabel: ZI18nString.optional()
});
const ZSurveyRatingQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("rating"),
    scale: lib.z.enum([
        "number",
        "smiley",
        "star"
    ]),
    range: lib.z.union([
        lib.z.literal(5),
        lib.z.literal(3),
        lib.z.literal(4),
        lib.z.literal(7),
        lib.z.literal(10)
    ]),
    lowerLabel: ZI18nString.optional(),
    upperLabel: ZI18nString.optional(),
    isColorCodingEnabled: lib.z.boolean().optional().default(false)
});
const ZSurveyDateQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("date"),
    html: ZI18nString.optional(),
    format: lib.z.enum([
        "M-d-y",
        "d-M-y",
        "y-M-d"
    ])
});
const ZSurveyPictureSelectionQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("pictureSelection"),
    allowMulti: lib.z.boolean().optional().default(false),
    choices: lib.z.array(ZSurveyPictureChoice).min(2, {
        message: "Picture Selection question must have atleast 2 choices"
    })
});
const ZSurveyFileUploadQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("fileUpload"),
    allowMultipleFiles: lib.z.boolean(),
    maxSizeInMB: lib.z.number().optional(),
    allowedFileExtensions: lib.z.array(common/* ZAllowedFileExtension */.gK).optional()
});
const ZSurveyCalQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("cal"),
    calUserName: lib.z.string().min(1, {
        message: "Cal user name is required"
    }),
    calHost: lib.z.string().optional()
});
const ZSurveyMatrixQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("matrix"),
    rows: lib.z.array(ZI18nString),
    columns: lib.z.array(ZI18nString),
    shuffleOption: ZShuffleOption.optional().default("none")
});
const ZToggleInputConfig = lib.z.object({
    show: lib.z.boolean(),
    required: lib.z.boolean(),
    placeholder: ZI18nString
});
const ZSurveyAddressQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("address"),
    addressLine1: ZToggleInputConfig,
    addressLine2: ZToggleInputConfig,
    city: ZToggleInputConfig,
    state: ZToggleInputConfig,
    zip: ZToggleInputConfig,
    country: ZToggleInputConfig
});
const ZSurveyContactInfoQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("contactInfo"),
    firstName: ZToggleInputConfig,
    lastName: ZToggleInputConfig,
    email: ZToggleInputConfig,
    phone: ZToggleInputConfig,
    company: ZToggleInputConfig
});
const ZSurveyRankingQuestion = ZSurveyQuestionBase.extend({
    type: lib.z.literal("ranking"),
    choices: lib.z.array(ZSurveyQuestionChoice).min(2, {
        message: "Ranking Question must have at least two options"
    }).max(25, {
        message: "Ranking Question can have at most 25 options"
    }),
    otherOptionPlaceholder: ZI18nString.optional(),
    shuffleOption: ZShuffleOption.optional()
});
const ZSurveyQuestion = lib.z.union([
    ZSurveyOpenTextQuestion,
    ZSurveyConsentQuestion,
    ZSurveyMultipleChoiceQuestion,
    ZSurveyNPSQuestion,
    ZSurveyCTAQuestion,
    ZSurveyRatingQuestion,
    ZSurveyPictureSelectionQuestion,
    ZSurveyDateQuestion,
    ZSurveyFileUploadQuestion,
    ZSurveyCalQuestion,
    ZSurveyMatrixQuestion,
    ZSurveyAddressQuestion,
    ZSurveyRankingQuestion,
    ZSurveyContactInfoQuestion
]);
const ZSurveyQuestions = lib.z.array(ZSurveyQuestion);
const ZSurveyQuestionType = lib.z.enum([
    "address",
    "cta",
    "consent",
    "date",
    "fileUpload",
    "matrix",
    "multipleChoiceMulti",
    "multipleChoiceSingle",
    "nps",
    "openText",
    "pictureSelection",
    "rating",
    "cal",
    "ranking",
    "contactInfo"
]);
const ZSurveyLanguage = lib.z.object({
    language: project/* ZLanguage */.LM,
    default: lib.z.boolean(),
    enabled: lib.z.boolean()
});
const ZSurveyQuestionsObject = lib.z.object({
    questions: ZSurveyQuestions,
    hiddenFields: ZSurveyHiddenFields
});
const ZSurveyDisplayOption = lib.z.enum([
    "displayOnce",
    "displayMultiple",
    "respondMultiple",
    "displaySome"
]);
const ZSurveyType = lib.z.enum([
    "link",
    "app"
]);
const ZSurveyStatus = lib.z.enum([
    "draft",
    "scheduled",
    "inProgress",
    "paused",
    "completed"
]);
const ZSurveyInlineTriggers = lib.z.object({
    codeConfig: lib.z.object({
        identifier: lib.z.string()
    }).optional(),
    noCodeConfig: action_classes/* ZActionClassNoCodeConfig */.Zq.optional()
});
const ZSurvey = lib.z.object({
    id: lib.z.string().cuid2(),
    createdAt: lib.z.date(),
    updatedAt: lib.z.date(),
    name: lib.z.string(),
    type: ZSurveyType,
    environmentId: lib.z.string(),
    createdBy: lib.z.string().nullable(),
    status: ZSurveyStatus,
    displayOption: ZSurveyDisplayOption,
    autoClose: lib.z.number().nullable(),
    triggers: lib.z.array(lib.z.object({
        actionClass: action_classes/* ZActionClass */.vb
    })),
    recontactDays: lib.z.number().nullable(),
    displayLimit: lib.z.number().nullable(),
    welcomeCard: ZSurveyWelcomeCard,
    questions: ZSurveyQuestions.min(1, {
        message: "Survey must have at least one question"
    }).superRefine((questions, ctx)=>{
        const questionIds = questions.map((q)=>q.id);
        const uniqueQuestionIds = new Set(questionIds);
        if (uniqueQuestionIds.size !== questionIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Question IDs must be unique",
                path: [
                    questionIds.findIndex((id, index)=>questionIds.indexOf(id) !== index),
                    "id"
                ]
            });
        }
    }),
    endings: ZSurveyEndings.superRefine((endings, ctx)=>{
        const endingIds = endings.map((q)=>q.id);
        const uniqueEndingIds = new Set(endingIds);
        if (uniqueEndingIds.size !== endingIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Ending IDs must be unique",
                path: [
                    endingIds.findIndex((id, index)=>endingIds.indexOf(id) !== index),
                    "id"
                ]
            });
        }
    }),
    hiddenFields: ZSurveyHiddenFields,
    variables: ZSurveyVariables.superRefine((variables, ctx)=>{
        // variable ids must be unique
        const variableIds = variables.map((v)=>v.id);
        const uniqueVariableIds = new Set(variableIds);
        if (uniqueVariableIds.size !== variableIds.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Variable IDs must be unique",
                path: [
                    "variables"
                ]
            });
        }
        // variable names must be unique
        const variableNames = variables.map((v)=>v.name);
        const uniqueVariableNames = new Set(variableNames);
        if (uniqueVariableNames.size !== variableNames.length) {
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: "Variable names must be unique",
                path: [
                    "variables"
                ]
            });
        }
    }),
    followUps: lib.z.array(ZSurveyFollowUp.extend({
        deleted: lib.z.boolean().optional()
    })),
    delay: lib.z.number(),
    autoComplete: lib.z.number().min(1, {
        message: "Response limit must be greater than 0"
    }).nullable(),
    runOnDate: lib.z.date().nullable(),
    closeOnDate: lib.z.date().nullable(),
    projectOverwrites: ZSurveyProjectOverwrites.nullable(),
    styling: ZSurveyStyling.nullable(),
    showLanguageSwitch: lib.z.boolean().nullable(),
    surveyClosedMessage: ZSurveyClosedMessage.nullable(),
    segment: segment/* ZSegment */.K5.nullable(),
    singleUse: ZSurveySingleUse.nullable(),
    isVerifyEmailEnabled: lib.z.boolean(),
    isSingleResponsePerEmailEnabled: lib.z.boolean(),
    pin: lib.z.string().min(4, {
        message: "PIN must be a four digit number"
    }).nullish(),
    resultShareKey: lib.z.string().nullable(),
    displayPercentage: lib.z.number().min(0.01).max(100).nullable(),
    languages: lib.z.array(ZSurveyLanguage)
}).superRefine((survey, ctx)=>{
    const { questions, languages, welcomeCard, endings } = survey;
    let multiLangIssue;
    // welcome card validations
    if (welcomeCard.enabled) {
        if (welcomeCard.headline) {
            multiLangIssue = (0,validation/* validateCardFieldsForAllLanguages */.dw)("cardHeadline", welcomeCard.headline, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (welcomeCard.html && welcomeCard.html.default.trim() !== "") {
            multiLangIssue = (0,validation/* validateCardFieldsForAllLanguages */.dw)("welcomeCardHtml", welcomeCard.html, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (welcomeCard.buttonLabel && welcomeCard.buttonLabel.default.trim() !== "") {
            multiLangIssue = (0,validation/* validateCardFieldsForAllLanguages */.dw)("buttonLabel", welcomeCard.buttonLabel, languages, "welcome");
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
    }
    // Custom default validation for each question
    questions.forEach((question, questionIndex)=>{
        multiLangIssue = (0,validation/* validateQuestionLabels */.ic)("headline", question.headline, languages, questionIndex);
        if (multiLangIssue) {
            ctx.addIssue(multiLangIssue);
        }
        if (question.subheader && question.subheader.default.trim() !== "") {
            multiLangIssue = (0,validation/* validateQuestionLabels */.ic)("subheader", question.subheader, languages, questionIndex);
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        const defaultLanguageCode = "default";
        const initialFieldsToValidate = [
            "html",
            "buttonLabel",
            "upperLabel",
            "lowerLabel",
            "label",
            "placeholder"
        ];
        const fieldsToValidate = questionIndex === 0 ? initialFieldsToValidate : [
            ...initialFieldsToValidate,
            "backButtonLabel"
        ];
        for (const field of fieldsToValidate){
            // Skip label validation for consent questions as its called checkbox label
            if (field === "label" && question.type === "consent") {
                continue;
            }
            const questionFieldValue = question[field];
            if (typeof questionFieldValue?.[defaultLanguageCode] !== "undefined" && questionFieldValue[defaultLanguageCode].trim() !== "") {
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)(field, questionFieldValue, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
        }
        if (question.type === "openText") {
            if (question.placeholder && question.placeholder[defaultLanguageCode].trim() !== "" && languages.length > 1) {
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)("placeholder", question.placeholder, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
        }
        if (question.type === "multipleChoiceSingle" || question.type === "multipleChoiceMulti" || question.type === "ranking") {
            question.choices.forEach((choice, choiceIndex)=>{
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)(`Choice ${String(choiceIndex + 1)}`, choice.label, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            const duplicateChoicesLanguageCodes = (0,validation/* findLanguageCodesForDuplicateLabels */.Fs)(question.choices.map((choice)=>choice.label), languages);
            if (duplicateChoicesLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateChoicesLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate choice labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "choices"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
        }
        if (question.type === "consent") {
            multiLangIssue = (0,validation/* validateQuestionLabels */.ic)("consent.label", question.label, languages, questionIndex);
            if (multiLangIssue) {
                ctx.addIssue(multiLangIssue);
            }
        }
        if (question.type === "cta") {
            if (!question.required && question.dismissButtonLabel) {
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)("dismissButtonLabel", question.dismissButtonLabel, languages, questionIndex);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            }
            if (question.buttonExternal) {
                const parsedButtonUrl = lib.z.string().url().safeParse(question.buttonUrl);
                if (!parsedButtonUrl.success) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(questionIndex + 1)} has an invalid button URL`,
                        path: [
                            "questions",
                            questionIndex,
                            "buttonUrl"
                        ]
                    });
                }
            }
        }
        if (question.type === "matrix") {
            question.rows.forEach((row, rowIndex)=>{
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)(`Row ${String(rowIndex + 1)}`, row, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            question.columns.forEach((column, columnIndex)=>{
                multiLangIssue = (0,validation/* validateQuestionLabels */.ic)(`Column ${String(columnIndex + 1)}`, column, languages, questionIndex, true);
                if (multiLangIssue) {
                    ctx.addIssue(multiLangIssue);
                }
            });
            const duplicateRowsLanguageCodes = (0,validation/* findLanguageCodesForDuplicateLabels */.Fs)(question.rows, languages);
            const duplicateColumnLanguageCodes = (0,validation/* findLanguageCodesForDuplicateLabels */.Fs)(question.columns, languages);
            if (duplicateRowsLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateRowsLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate row labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "rows"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
            if (duplicateColumnLanguageCodes.length > 0) {
                const invalidLanguageCodes = duplicateColumnLanguageCodes.map((invalidLanguageCode)=>invalidLanguageCode === "default" ? languages.find((lang)=>lang.default)?.language.code ?? "default" : invalidLanguageCode);
                const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} has duplicate column labels ${isDefaultOnly ? "" : "for the following languages:"}`,
                    path: [
                        "questions",
                        questionIndex,
                        "columns"
                    ],
                    params: isDefaultOnly ? undefined : {
                        invalidLanguageCodes
                    }
                });
            }
        }
        if (question.type === "fileUpload") {
            // allowedFileExtensions must have atleast one element
            if (question.allowedFileExtensions && question.allowedFileExtensions.length === 0) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ${String(questionIndex + 1)} must have atleast one allowed file extension`,
                    path: [
                        "questions",
                        questionIndex,
                        "allowedFileExtensions"
                    ]
                });
            }
        }
        if (question.type === "cal") {
            if (question.calHost !== undefined) {
                const hostnameRegex = /^(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(?:\.(?!-)[a-zA-Z0-9-]{1,63}(?<!-)){1,}$/i;
                if (!hostnameRegex.test(question.calHost)) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(questionIndex + 1)} must have a valid host name`,
                        path: [
                            "questions",
                            questionIndex,
                            "calHost"
                        ]
                    });
                }
            }
        }
        if (question.type === "contactInfo") {
            const { company, email, firstName, lastName, phone } = question;
            const fields = [
                {
                    ...company,
                    label: "Company"
                },
                {
                    ...email,
                    label: "Email"
                },
                {
                    ...firstName,
                    label: "First Name"
                },
                {
                    ...lastName,
                    label: "Last Name"
                },
                {
                    ...phone,
                    label: "Phone"
                }
            ];
            if (fields.every((field)=>!field.show)) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: "At least one field must be shown in the Contact Info question",
                    path: [
                        "questions",
                        questionIndex
                    ]
                });
            }
            fields.forEach((field)=>{
                const multiLangIssueInPlaceholder = field.show && (0,validation/* validateQuestionLabels */.ic)(`Placeholder for field ${field.label}`, field.placeholder, languages, questionIndex, true);
                if (multiLangIssueInPlaceholder) {
                    ctx.addIssue(multiLangIssueInPlaceholder);
                }
            });
        }
        if (question.type === "address") {
            const { addressLine1, addressLine2, city, state, zip, country } = question;
            const fields = [
                {
                    ...addressLine1,
                    label: "Address Line 1"
                },
                {
                    ...addressLine2,
                    label: "Address Line 2"
                },
                {
                    ...city,
                    label: "City"
                },
                {
                    ...state,
                    label: "State"
                },
                {
                    ...zip,
                    label: "Zip"
                },
                {
                    ...country,
                    label: "Country"
                }
            ];
            if (fields.every((field)=>!field.show)) {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: "At least one field must be shown in the Address question",
                    path: [
                        "questions",
                        questionIndex
                    ]
                });
            }
            fields.forEach((field)=>{
                const multiLangIssueInPlaceholder = field.show && (0,validation/* validateQuestionLabels */.ic)(`Placeholder for field ${field.label}`, field.placeholder, languages, questionIndex, true);
                if (multiLangIssueInPlaceholder) {
                    ctx.addIssue(multiLangIssueInPlaceholder);
                }
            });
        }
        if (question.logic) {
            const logicIssues = validateLogic(survey, questionIndex, question.logic);
            logicIssues.forEach((issue)=>{
                ctx.addIssue(issue);
            });
        }
    });
    const questionsWithCyclicLogic = (0,validation/* findQuestionsWithCyclicLogic */.c2)(questions);
    if (questionsWithCyclicLogic.length > 0) {
        questionsWithCyclicLogic.forEach((questionId)=>{
            const questionIndex = questions.findIndex((q)=>q.id === questionId);
            ctx.addIssue({
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Cyclic logic detected 🔃 Please check the logic of question ${String(questionIndex + 1)}.`,
                path: [
                    "questions",
                    questionIndex,
                    "logic"
                ]
            });
        });
    }
    endings.forEach((ending, index)=>{
        // thank you card validations
        if (ending.type === "endScreen") {
            const multiLangIssueInHeadline = (0,validation/* validateCardFieldsForAllLanguages */.dw)("cardHeadline", ending.headline ?? {}, languages, "end", index);
            if (multiLangIssueInHeadline) {
                ctx.addIssue(multiLangIssueInHeadline);
            }
            if (ending.subheader) {
                const multiLangIssueInSubheader = (0,validation/* validateCardFieldsForAllLanguages */.dw)("subheader", ending.subheader, languages, "end", index);
                if (multiLangIssueInSubheader) {
                    ctx.addIssue(multiLangIssueInSubheader);
                }
            }
            if (ending.buttonLabel) {
                const multiLangIssueInButtonLabel = (0,validation/* validateCardFieldsForAllLanguages */.dw)("endingCardButtonLabel", ending.buttonLabel, languages, "end", index);
                if (multiLangIssueInButtonLabel) {
                    ctx.addIssue(multiLangIssueInButtonLabel);
                }
            }
        }
        if (ending.type === "redirectToUrl") {
            if (!ending.label || ending.label.trim() === "") {
                ctx.addIssue({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Redirect Url label cannot be empty for ending Card ${String(index + 1)}.`,
                    path: [
                        "endings",
                        index,
                        "label"
                    ]
                });
            }
        }
    });
    if (survey.followUps.length) {
        survey.followUps.filter((followUp)=>!followUp.deleted).forEach((followUp, index)=>{
            if (followUp.action.properties.to) {
                const validOptions = [
                    ...survey.questions.filter((q)=>{
                        if (q.type === "openText") {
                            if (q.inputType === "email") {
                                return true;
                            }
                        }
                        if (q.type === "contactInfo") {
                            return true;
                        }
                        return false;
                    }).map((q)=>q.id),
                    ...survey.hiddenFields.fieldIds ?? []
                ];
                if (validOptions.findIndex((option)=>option === followUp.action.properties.to) === -1) {
                    ctx.addIssue({
                        code: lib.z.ZodIssueCode.custom,
                        message: `The action in follow up ${String(index + 1)} has an invalid email field`,
                        path: [
                            "followUps"
                        ]
                    });
                }
                if (followUp.trigger.type === "endings") {
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- endingIds is always defined
                    if (!followUp.trigger.properties?.endingIds?.length) {
                        ctx.addIssue({
                            code: lib.z.ZodIssueCode.custom,
                            message: `The trigger in follow up ${String(index + 1)} has no ending selected`,
                            path: [
                                "followUps"
                            ]
                        });
                    }
                }
            }
        });
    }
});
const isInvalidOperatorsForQuestionType = (question, operator)=>{
    let isInvalidOperator = false;
    const questionType = question.type;
    if (question.required && operator === "isSkipped") return true;
    switch(questionType){
        case "openText":
            switch(question.inputType){
                case "email":
                case "phone":
                case "text":
                case "url":
                    if (![
                        "equals",
                        "doesNotEqual",
                        "contains",
                        "doesNotContain",
                        "startsWith",
                        "doesNotStartWith",
                        "endsWith",
                        "doesNotEndWith",
                        "isSubmitted",
                        "isSkipped"
                    ].includes(operator)) {
                        isInvalidOperator = true;
                    }
                    break;
                case "number":
                    if (![
                        "equals",
                        "doesNotEqual",
                        "isGreaterThan",
                        "isLessThan",
                        "isGreaterThanOrEqual",
                        "isLessThanOrEqual",
                        "isSubmitted",
                        "isSkipped"
                    ].includes(operator)) {
                        isInvalidOperator = true;
                    }
            }
            break;
        case "multipleChoiceSingle":
            if (![
                "equals",
                "doesNotEqual",
                "equalsOneOf",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "multipleChoiceMulti":
        case "pictureSelection":
            if (![
                "equals",
                "doesNotEqual",
                "includesAllOf",
                "includesOneOf",
                "doesNotIncludeAllOf",
                "doesNotIncludeOneOf",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "nps":
        case "rating":
            if (![
                "equals",
                "doesNotEqual",
                "isGreaterThan",
                "isLessThan",
                "isGreaterThanOrEqual",
                "isLessThanOrEqual",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "cta":
            if (![
                "isClicked",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "consent":
            if (![
                "isAccepted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "date":
            if (![
                "equals",
                "doesNotEqual",
                "isBefore",
                "isAfter",
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "fileUpload":
        case "address":
        case "ranking":
            if (![
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "cal":
            if (![
                "isBooked",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "matrix":
            if (![
                "isPartiallySubmitted",
                "isCompletelySubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "contactInfo":
            if (![
                "isSubmitted",
                "isSkipped"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        default:
            isInvalidOperator = true;
    }
    return isInvalidOperator;
};
const isInvalidOperatorsForVariableType = (variableType, operator)=>{
    let isInvalidOperator = false;
    switch(variableType){
        case "text":
            if (![
                "equals",
                "doesNotEqual",
                "contains",
                "doesNotContain",
                "startsWith",
                "doesNotStartWith",
                "endsWith",
                "doesNotEndWith"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
        case "number":
            if (![
                "equals",
                "doesNotEqual",
                "isGreaterThan",
                "isLessThan",
                "isGreaterThanOrEqual",
                "isLessThanOrEqual"
            ].includes(operator)) {
                isInvalidOperator = true;
            }
            break;
    }
    return isInvalidOperator;
};
const isInvalidOperatorsForHiddenFieldType = (operator)=>{
    let isInvalidOperator = false;
    if (![
        "equals",
        "doesNotEqual",
        "contains",
        "doesNotContain",
        "startsWith",
        "doesNotStartWith",
        "endsWith",
        "doesNotEndWith"
    ].includes(operator)) {
        isInvalidOperator = true;
    }
    return isInvalidOperator;
};
const validateConditions = (survey, questionIndex, logicIndex, conditions)=>{
    const issues = [];
    const validateSingleCondition = (condition)=>{
        const { leftOperand, operator, rightOperand } = condition;
        // Validate left operand
        if (leftOperand.type === "question") {
            const questionId = leftOperand.value;
            const questionIdx = survey.questions.findIndex((q)=>q.id === questionId);
            const question = questionIdx !== -1 ? survey.questions[questionIdx] : undefined;
            if (!question) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
                return;
            } else if (questionIndex < questionIdx) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Question ${String(questionIndex + 1)} cannot refer to a question ${String(questionIdx + 1)} that appears later in the survey`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
                return;
            }
            // Validate operator based on question type
            const isInvalidOperator = isInvalidOperatorsForQuestionType(question, operator);
            if (isInvalidOperator) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Invalid operator "${operator}" for question type "${question.type}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate right operand
            if ([
                "isSubmitted",
                "isSkipped",
                "isClicked",
                "isAccepted",
                "isBooked",
                "isPartiallySubmitted",
                "isCompletelySubmitted"
            ].includes(operator)) {
                if (rightOperand !== undefined) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should not be defined for operator "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
                return;
            }
            if (question.type === "openText") {
                // Validate right operand
                if (rightOperand?.type === "question") {
                    const quesId = rightOperand.value;
                    const ques = survey.questions.find((q)=>q.id === quesId);
                    if (!ques) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const validQuestionTypes = [
                            "openText"
                        ];
                        if (question.inputType === "number") {
                            validQuestionTypes.push(...[
                                "rating",
                                "nps"
                            ]);
                        }
                        if ([
                            "equals",
                            "doesNotEqual"
                        ].includes(condition.operator)) {
                            if (question.inputType !== "number") {
                                validQuestionTypes.push(...[
                                    "date",
                                    "multipleChoiceSingle",
                                    "multipleChoiceMulti"
                                ]);
                            }
                        }
                        if (!validQuestionTypes.includes(ques.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${ques.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                    if (!field) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    if (!rightOperand.value) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Static value is required in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            } else if (question.type === "multipleChoiceSingle") {
                if (rightOperand?.type !== "static") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be a static value for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (condition.operator === "equals" || condition.operator === "doesNotEqual") {
                    if (typeof rightOperand.value !== "string") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a string for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const choice = question.choices.find((c)=>c.id === rightOperand.value);
                        if (!choice) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choice with label "${rightOperand.value}" does not exist in question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (condition.operator === "equalsOneOf") {
                    if (!Array.isArray(rightOperand.value)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be an array for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        rightOperand.value.forEach((value)=>{
                            if (typeof value !== "string") {
                                issues.push({
                                    code: lib.z.ZodIssueCode.custom,
                                    message: `Conditional Logic: Right operand should be an array of strings for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                    path: [
                                        "questions",
                                        questionIndex,
                                        "logic",
                                        logicIndex,
                                        "conditions"
                                    ]
                                });
                            }
                        });
                        const choices = question.choices.map((c)=>c.id);
                        if (rightOperand.value.some((value)=>!choices.includes(value))) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choices selected in right operand does not exist in the choices of the question in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                }
            } else if (question.type === "multipleChoiceMulti" || question.type === "pictureSelection") {
                if (rightOperand?.type !== "static") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be amongst the choice values for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (condition.operator === "equals" || condition.operator === "doesNotEqual") {
                    if (typeof rightOperand.value !== "string") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a string for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const choice = question.choices.find((c)=>c.id === rightOperand.value);
                        if (!choice) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choice with label "${rightOperand.value}" does not exist in question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if ([
                    "includesAllOf",
                    "includesOneOf",
                    "doesNotIncludeAllOf",
                    "doesNotIncludeOneOf"
                ].includes(condition.operator)) {
                    if (!Array.isArray(rightOperand.value)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be an array for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        rightOperand.value.forEach((value)=>{
                            if (typeof value !== "string") {
                                issues.push({
                                    code: lib.z.ZodIssueCode.custom,
                                    message: `Conditional Logic: Right operand should be an array of strings for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                    path: [
                                        "questions",
                                        questionIndex,
                                        "logic",
                                        logicIndex,
                                        "conditions"
                                    ]
                                });
                            }
                        });
                        const choices = question.choices.map((c)=>c.id);
                        if (rightOperand.value.some((value)=>!choices.includes(value))) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Choices selected in right operand does not exist in the choices of the question in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                }
            } else if (question.type === "nps" || question.type === "rating") {
                if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== "number") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type should be number in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    if (typeof rightOperand.value !== "number") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Right operand should be a number for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (question.type === "nps") {
                        if (rightOperand.value < 0 || rightOperand.value > 10) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: NPS score should be between 0 and 10 for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    } else if (rightOperand.value < 1 || rightOperand.value > question.range) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Rating value should be between 1 and ${String(question.range)} for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Right operand should be a variable or a static value for "${operator}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            } else if (question.type === "date") {
                if (rightOperand?.type === "question") {
                    const quesId = rightOperand.value;
                    const ques = survey.questions.find((q)=>q.id === quesId);
                    if (!ques) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else {
                        const validQuestionTypes = [
                            "openText",
                            "date"
                        ];
                        if (!validQuestionTypes.includes(question.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const variableId = rightOperand.value;
                    const variable = survey.variables.find((v)=>v.id === variableId);
                    if (!variable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== "text") {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type should be text in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const doesFieldExists = survey.hiddenFields.fieldIds?.includes(fieldId);
                    if (!doesFieldExists) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "static") {
                    const date = rightOperand.value;
                    if (!date) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Please select a date value in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (isNaN(new Date(date).getTime())) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid date format for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            }
        } else if (leftOperand.type === "variable") {
            const variableId = leftOperand.value;
            const variable = survey.variables.find((v)=>v.id === variableId);
            if (!variable) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            } else {
                // Validate operator based on variable type
                const isInvalidOperator = isInvalidOperatorsForVariableType(variable.type, operator);
                if (isInvalidOperator) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid operator "${operator}" for variable ${variable.name} of type "${variable.type}" in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
                // Validate right operand
                if (rightOperand?.type === "question") {
                    const questionId = rightOperand.value;
                    const question = survey.questions.find((q)=>q.id === questionId);
                    if (!question) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type === "number") {
                        const validQuestionTypes = [
                            "rating",
                            "nps"
                        ];
                        if (!validQuestionTypes.includes(question.type) && question.type === "openText" && question.inputType !== "number") {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    } else {
                        const validQuestionTypes = [
                            "openText",
                            "multipleChoiceSingle"
                        ];
                        if ([
                            "equals",
                            "doesNotEqual"
                        ].includes(operator)) {
                            validQuestionTypes.push("multipleChoiceMulti", "date");
                        }
                        if (!validQuestionTypes.includes(question.type)) {
                            issues.push({
                                code: lib.z.ZodIssueCode.custom,
                                message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                                path: [
                                    "questions",
                                    questionIndex,
                                    "logic",
                                    logicIndex,
                                    "conditions"
                                ]
                            });
                        }
                    }
                } else if (rightOperand?.type === "variable") {
                    const id = rightOperand.value;
                    const foundVariable = survey.variables.find((v)=>v.id === id);
                    if (!foundVariable) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    } else if (variable.type !== foundVariable.type) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Variable type mismatch in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                } else if (rightOperand?.type === "hiddenField") {
                    const fieldId = rightOperand.value;
                    const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                    if (!field) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            }
        } else {
            const hiddenFieldId = leftOperand.value;
            const hiddenField = survey.hiddenFields.fieldIds?.find((fieldId)=>fieldId === hiddenFieldId);
            if (!hiddenField) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Hidden field ID ${hiddenFieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate operator based on hidden field type
            const isInvalidOperator = isInvalidOperatorsForHiddenFieldType(operator);
            if (isInvalidOperator) {
                issues.push({
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Invalid operator "${operator}" for hidden field in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex,
                        "conditions"
                    ]
                });
            }
            // Validate right operand
            if (rightOperand?.type === "question") {
                const questionId = rightOperand.value;
                const question = survey.questions.find((q)=>q.id === questionId);
                if (!question) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Question ID ${questionId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else {
                    const validQuestionTypes = [
                        "openText",
                        "multipleChoiceSingle"
                    ];
                    if ([
                        "equals",
                        "doesNotEqual"
                    ].includes(condition.operator)) {
                        validQuestionTypes.push("multipleChoiceMulti", "date");
                    }
                    if (!validQuestionTypes.includes(question.type)) {
                        issues.push({
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid question type "${question.type}" for right operand in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex,
                                "conditions"
                            ]
                        });
                    }
                }
            } else if (rightOperand?.type === "variable") {
                const variableId = rightOperand.value;
                const variable = survey.variables.find((v)=>v.id === variableId);
                if (!variable) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Variable ID ${variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                } else if (variable.type !== "text") {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Variable type should be text in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            } else if (rightOperand?.type === "hiddenField") {
                const fieldId = rightOperand.value;
                const field = survey.hiddenFields.fieldIds?.find((id)=>id === fieldId);
                if (!field) {
                    issues.push({
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Hidden field ID ${fieldId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex,
                            "conditions"
                        ]
                    });
                }
            }
        }
    };
    const validateConditionGroup = (group)=>{
        group.conditions.forEach((condition)=>{
            if ((0,validation/* isConditionGroup */.nr)(condition)) {
                validateConditionGroup(condition);
            } else {
                validateSingleCondition(condition);
            }
        });
    };
    validateConditionGroup(conditions);
    return issues;
};
const validateActions = (survey, questionIndex, logicIndex, actions)=>{
    const previousQuestions = survey.questions.filter((_, idx)=>idx <= questionIndex);
    const nextQuestions = survey.questions.filter((_, idx)=>idx >= questionIndex);
    const nextQuestionsIds = nextQuestions.map((q)=>q.id);
    const actionIssues = actions.map((action)=>{
        if (action.objective === "calculate") {
            const variable = survey.variables.find((v)=>v.id === action.variableId);
            if (!variable) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: `Conditional Logic: Variable ID ${action.variableId} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex
                    ]
                };
            }
            if (action.value.type === "variable") {
                const selectedVariable = survey.variables.find((v)=>v.id === action.value.value);
                if (!selectedVariable || selectedVariable.type !== variable.type) {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid variable type for variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
            if (variable.type === "text") {
                const textVariableParseData = ZActionCalculateText.safeParse(action);
                if (!textVariableParseData.success) {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: textVariableParseData.error.errors[0].message,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
                if (action.value.type === "question") {
                    const allowedQuestions = [
                        "openText",
                        "multipleChoiceSingle",
                        "rating",
                        "nps",
                        "date"
                    ];
                    const selectedQuestion = survey.questions.find((q)=>q.id === action.value.value);
                    if (!selectedQuestion || !allowedQuestions.includes(selectedQuestion.type)) {
                        return {
                            code: lib.z.ZodIssueCode.custom,
                            message: `Conditional Logic: Invalid question type for text variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                            path: [
                                "questions",
                                questionIndex,
                                "logic",
                                logicIndex
                            ]
                        };
                    }
                }
                return undefined;
            }
            const numberVariableParseData = ZActionCalculateNumber.safeParse(action);
            if (!numberVariableParseData.success) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: numberVariableParseData.error.errors[0].message,
                    path: [
                        "questions",
                        questionIndex,
                        "logic",
                        logicIndex
                    ]
                };
            }
            if (action.value.type === "question") {
                const allowedQuestions = [
                    "rating",
                    "nps"
                ];
                const selectedQuestion = previousQuestions.find((q)=>q.id === action.value.value);
                if (!selectedQuestion || !allowedQuestions.includes(selectedQuestion.type) && selectedQuestion.type === "openText" && selectedQuestion.inputType !== "number") {
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Conditional Logic: Invalid question type for number variable in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
        } else {
            const endingIds = survey.endings.map((ending)=>ending.id);
            const possibleQuestionIds = action.objective === "jumpToQuestion" ? [
                ...nextQuestionsIds,
                ...endingIds
            ] : nextQuestionsIds;
            if (!possibleQuestionIds.includes(action.target)) {
                return {
                    code: lib.z.ZodIssueCode.custom,
                    message: `Question ID ${action.target} does not exist in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                    path: [
                        "questions",
                        questionIndex,
                        "logic"
                    ]
                };
            }
            if (action.objective === "requireAnswer") {
                const optionalQuestionIds = nextQuestions.filter((question)=>!question.required).map((question)=>question.id);
                if (!optionalQuestionIds.includes(action.target)) {
                    const quesIdx = survey.questions.findIndex((q)=>q.id === action.target);
                    return {
                        code: lib.z.ZodIssueCode.custom,
                        message: `Question ${String(quesIdx + 1)} is already required in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
                        path: [
                            "questions",
                            questionIndex,
                            "logic",
                            logicIndex
                        ]
                    };
                }
            }
        }
        return undefined;
    });
    const jumpToQuestionActions = actions.filter((action)=>action.objective === "jumpToQuestion");
    if (jumpToQuestionActions.length > 1) {
        actionIssues.push({
            code: lib.z.ZodIssueCode.custom,
            message: `Conditional Logic: Multiple jump actions are not allowed in logic no: ${String(logicIndex + 1)} of question ${String(questionIndex + 1)}`,
            path: [
                "questions",
                questionIndex,
                "logic"
            ]
        });
    }
    const filteredActionIssues = actionIssues.filter((issue)=>issue !== undefined);
    return filteredActionIssues;
};
const validateLogicFallback = (survey, questionIdx)=>{
    const question = survey.questions[questionIdx];
    if (!question.logicFallback) return;
    if (!question.logic?.length && question.logicFallback) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback logic is defined without any logic in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    } else if (question.id === question.logicFallback) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback logic is defined with the same question in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    }
    const possibleFallbackIds = [];
    survey.questions.forEach((q, idx)=>{
        if (idx !== questionIdx) {
            possibleFallbackIds.push(q.id);
        }
    });
    survey.endings.forEach((e)=>{
        possibleFallbackIds.push(e.id);
    });
    if (!possibleFallbackIds.includes(question.logicFallback)) {
        return [
            {
                code: lib.z.ZodIssueCode.custom,
                message: `Conditional Logic: Fallback question ID ${question.logicFallback} does not exist in question ${String(questionIdx + 1)}`,
                path: [
                    "questions",
                    questionIdx
                ]
            }
        ];
    }
};
const validateLogic = (survey, questionIndex, logic)=>{
    const logicFallbackIssue = validateLogicFallback(survey, questionIndex);
    const logicIssues = logic.map((logicItem, logicIndex)=>{
        return [
            ...validateConditions(survey, questionIndex, logicIndex, logicItem.conditions),
            ...validateActions(survey, questionIndex, logicIndex, logicItem.actions)
        ];
    });
    return [
        ...logicIssues.flat(),
        ...logicFallbackIssue ? logicFallbackIssue : []
    ];
};
// ZSurvey is a refinement, so to extend it to ZSurveyUpdateInput, we need to transform the innerType and then apply the same refinements.
const ZSurveyUpdateInput = ZSurvey.innerType().omit({
    createdAt: true,
    updatedAt: true,
    followUps: true
}).extend({
    followUps: lib.z.array(ZSurveyFollowUp.omit({
        createdAt: true,
        updatedAt: true
    }).and(lib.z.object({
        createdAt: lib.z.coerce.date(),
        updatedAt: lib.z.coerce.date()
    }))).default([])
}).and(lib.z.object({
    createdAt: lib.z.coerce.date(),
    updatedAt: lib.z.coerce.date()
})).superRefine(ZSurvey._def.effect.type === "refinement" ? ZSurvey._def.effect.refinement : ()=>undefined);
// Helper function to make all properties of a Zod object schema optional
const makeSchemaOptional = (schema)=>{
    return schema.extend(Object.fromEntries(Object.entries(schema.shape).map(([key, value])=>[
            key,
            value.optional()
        ])));
};
const ZSurveyCreateInput = makeSchemaOptional(ZSurvey.innerType()).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    projectOverwrites: true,
    languages: true,
    followUps: true
}).extend({
    name: lib.z.string(),
    questions: ZSurvey.innerType().shape.questions,
    languages: lib.z.array(ZSurveyLanguage).default([]),
    welcomeCard: ZSurveyWelcomeCard.default({
        enabled: false
    }),
    endings: ZSurveyEndings.default([]),
    type: ZSurveyType.default("link"),
    followUps: lib.z.array(ZSurveyFollowUp.omit({
        createdAt: true,
        updatedAt: true
    })).default([])
}).superRefine(ZSurvey._def.effect.type === "refinement" ? ZSurvey._def.effect.refinement : ()=>null);
const ZSurveyQuestionSummaryOpenText = lib.z.object({
    type: lib.z.literal("openText"),
    question: ZSurveyOpenTextQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    })),
    insights: lib.z.array(ZInsight.extend({
        _count: lib.z.object({
            documentInsights: lib.z.number()
        })
    })),
    insightsEnabled: lib.z.boolean().optional()
});
const ZSurveyQuestionSummaryMultipleChoice = lib.z.object({
    type: lib.z.union([
        lib.z.literal("multipleChoiceMulti"),
        lib.z.literal("multipleChoiceSingle")
    ]),
    question: ZSurveyMultipleChoiceQuestion,
    responseCount: lib.z.number(),
    selectionCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        value: lib.z.string(),
        count: lib.z.number(),
        percentage: lib.z.number(),
        others: lib.z.array(lib.z.object({
            value: lib.z.string(),
            contact: lib.z.object({
                id: common/* ZId */.i4,
                userId: lib.z.string()
            }).nullable(),
            contactAttributes: ZContactAttributes.nullable()
        })).optional()
    }))
});
const ZSurveyQuestionSummaryPictureSelection = lib.z.object({
    type: lib.z.literal("pictureSelection"),
    question: ZSurveyPictureSelectionQuestion,
    responseCount: lib.z.number(),
    selectionCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        id: lib.z.string(),
        imageUrl: lib.z.string(),
        count: lib.z.number(),
        percentage: lib.z.number()
    }))
});
const ZSurveyQuestionSummaryRating = lib.z.object({
    type: lib.z.literal("rating"),
    question: ZSurveyRatingQuestion,
    responseCount: lib.z.number(),
    average: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        rating: lib.z.number(),
        count: lib.z.number(),
        percentage: lib.z.number()
    })),
    dismissed: lib.z.object({
        count: lib.z.number()
    })
});
const ZSurveyQuestionSummaryNps = lib.z.object({
    type: lib.z.literal("nps"),
    question: ZSurveyNPSQuestion,
    responseCount: lib.z.number(),
    total: lib.z.number(),
    score: lib.z.number(),
    promoters: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    passives: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    detractors: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    dismissed: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryCta = lib.z.object({
    type: lib.z.literal("cta"),
    question: ZSurveyCTAQuestion,
    impressionCount: lib.z.number(),
    clickCount: lib.z.number(),
    skipCount: lib.z.number(),
    responseCount: lib.z.number(),
    ctr: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryConsent = lib.z.object({
    type: lib.z.literal("consent"),
    question: ZSurveyConsentQuestion,
    responseCount: lib.z.number(),
    accepted: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    dismissed: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryDate = lib.z.object({
    type: lib.z.literal("date"),
    question: ZSurveyDateQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryFileUpload = lib.z.object({
    type: lib.z.literal("fileUpload"),
    question: ZSurveyFileUploadQuestion,
    responseCount: lib.z.number(),
    files: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryCal = lib.z.object({
    type: lib.z.literal("cal"),
    question: ZSurveyCalQuestion,
    responseCount: lib.z.number(),
    booked: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    }),
    skipped: lib.z.object({
        count: lib.z.number(),
        percentage: lib.z.number()
    })
});
const ZSurveyQuestionSummaryMatrix = lib.z.object({
    type: lib.z.literal("matrix"),
    question: ZSurveyMatrixQuestion,
    responseCount: lib.z.number(),
    data: lib.z.array(lib.z.object({
        rowLabel: lib.z.string(),
        columnPercentages: lib.z.array(lib.z.object({
            column: lib.z.string(),
            percentage: lib.z.number()
        })),
        totalResponsesForRow: lib.z.number()
    }))
});
const ZSurveyQuestionSummaryHiddenFields = lib.z.object({
    type: lib.z.literal("hiddenField"),
    id: lib.z.string(),
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        updatedAt: lib.z.date(),
        value: lib.z.string(),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryAddress = lib.z.object({
    type: lib.z.literal("address"),
    question: ZSurveyAddressQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryContactInfo = lib.z.object({
    type: lib.z.literal("contactInfo"),
    question: ZSurveyContactInfoQuestion,
    responseCount: lib.z.number(),
    samples: lib.z.array(lib.z.object({
        id: lib.z.string(),
        updatedAt: lib.z.date(),
        value: lib.z.array(lib.z.string()),
        contact: lib.z.object({
            id: common/* ZId */.i4,
            userId: lib.z.string()
        }).nullable(),
        contactAttributes: ZContactAttributes.nullable()
    }))
});
const ZSurveyQuestionSummaryRanking = lib.z.object({
    type: lib.z.literal("ranking"),
    question: ZSurveyRankingQuestion,
    responseCount: lib.z.number(),
    choices: lib.z.array(lib.z.object({
        value: lib.z.string(),
        count: lib.z.number(),
        avgRanking: lib.z.number(),
        others: lib.z.array(lib.z.object({
            value: lib.z.string(),
            contact: lib.z.object({
                id: common/* ZId */.i4,
                userId: lib.z.string()
            }).nullable(),
            contactAttributes: ZContactAttributes.nullable()
        })).optional()
    }))
});
const ZSurveyQuestionSummary = lib.z.union([
    ZSurveyQuestionSummaryOpenText,
    ZSurveyQuestionSummaryMultipleChoice,
    ZSurveyQuestionSummaryPictureSelection,
    ZSurveyQuestionSummaryRating,
    ZSurveyQuestionSummaryNps,
    ZSurveyQuestionSummaryCta,
    ZSurveyQuestionSummaryConsent,
    ZSurveyQuestionSummaryDate,
    ZSurveyQuestionSummaryFileUpload,
    ZSurveyQuestionSummaryCal,
    ZSurveyQuestionSummaryMatrix,
    ZSurveyQuestionSummaryAddress,
    ZSurveyQuestionSummaryRanking,
    ZSurveyQuestionSummaryContactInfo
]);
const ZSurveySummary = lib.z.object({
    meta: lib.z.object({
        displayCount: lib.z.number(),
        totalResponses: lib.z.number(),
        startsPercentage: lib.z.number(),
        completedResponses: lib.z.number(),
        completedPercentage: lib.z.number(),
        dropOffCount: lib.z.number(),
        dropOffPercentage: lib.z.number(),
        ttcAverage: lib.z.number()
    }),
    dropOff: lib.z.array(lib.z.object({
        questionId: lib.z.string().cuid2(),
        questionType: ZSurveyQuestionType,
        headline: lib.z.string(),
        ttc: lib.z.number(),
        impressions: lib.z.number(),
        dropOffCount: lib.z.number(),
        dropOffPercentage: lib.z.number()
    })),
    summary: lib.z.array(lib.z.union([
        ZSurveyQuestionSummary,
        ZSurveyQuestionSummaryHiddenFields
    ]))
});
const ZSurveyFilterCriteria = lib.z.object({
    name: lib.z.string().optional(),
    status: lib.z.array(ZSurveyStatus).optional(),
    type: lib.z.array(ZSurveyType).optional(),
    createdBy: lib.z.object({
        userId: lib.z.string(),
        value: lib.z.array(lib.z.enum([
            "you",
            "others"
        ]))
    }).optional(),
    sortBy: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ]).optional()
});
const ZSurveyFilters = lib.z.object({
    name: lib.z.string(),
    createdBy: lib.z.array(lib.z.enum([
        "you",
        "others"
    ])),
    status: lib.z.array(ZSurveyStatus),
    type: lib.z.array(ZSurveyType),
    sortBy: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ])
});
const ZFilterOption = lib.z.object({
    label: lib.z.string(),
    value: lib.z.string()
});
const ZSortOption = lib.z.object({
    label: lib.z.string(),
    value: lib.z.enum([
        "createdAt",
        "updatedAt",
        "name",
        "relevance"
    ])
});
const ZSurveyRecallItem = lib.z.object({
    id: lib.z.string(),
    label: lib.z.string(),
    type: lib.z.enum([
        "question",
        "hiddenField",
        "attributeClass",
        "variable"
    ])
});


/***/ }),

/***/ 683637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fs: () => (/* binding */ findLanguageCodesForDuplicateLabels),
/* harmony export */   GZ: () => (/* binding */ validateId),
/* harmony export */   c2: () => (/* binding */ findQuestionsWithCyclicLogic),
/* harmony export */   dn: () => (/* binding */ FORBIDDEN_IDS),
/* harmony export */   dw: () => (/* binding */ validateCardFieldsForAllLanguages),
/* harmony export */   ic: () => (/* binding */ validateQuestionLabels),
/* harmony export */   nr: () => (/* binding */ isConditionGroup)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99922);

const FORBIDDEN_IDS = [
    "userId",
    "source",
    "suid",
    "end",
    "start",
    "welcomeCard",
    "hidden",
    "verifiedEmail",
    "multiLanguage",
    "embed",
    "verify"
];
const FIELD_TO_LABEL_MAP = {
    headline: "question",
    subheader: "description",
    buttonLabel: "next button label",
    backButtonLabel: "back button label",
    placeholder: "placeholder",
    upperLabel: "upper label",
    lowerLabel: "lower label",
    "consent.label": "checkbox label",
    dismissButtonLabel: "dismiss button label",
    html: "description",
    cardHeadline: "note",
    welcomeCardHtml: "welcome message",
    endingCardButtonLabel: "button label"
};
const extractLanguageCodes = (surveyLanguages)=>{
    if (!surveyLanguages) return [];
    return surveyLanguages.map((surveyLanguage)=>surveyLanguage.default ? "default" : surveyLanguage.language.code);
};
const validateLabelForAllLanguages = (label, surveyLanguages)=>{
    const enabledLanguages = surveyLanguages.filter((lang)=>lang.enabled);
    const languageCodes = extractLanguageCodes(enabledLanguages);
    const languages = !languageCodes.length ? [
        "default"
    ] : languageCodes;
    const invalidLanguageCodes = languages.filter((language)=>!label[language] || label[language].trim() === "");
    return invalidLanguageCodes.map((invalidLanguageCode)=>{
        if (invalidLanguageCode === "default") {
            return surveyLanguages.find((lang)=>lang.default)?.language.code ?? "default";
        }
        return invalidLanguageCode;
    });
};
const validateQuestionLabels = (field, fieldLabel, languages, questionIndex, skipArticle = false)=>{
    // fieldLabel should contain all the keys present in languages
    // even if one of the keys is an empty string, its okay but it shouldn't be undefined
    for (const language of languages){
        if (!language.default && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- could be undefined
        fieldLabel[language.language.code] === undefined) {
            return {
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: `The ${field} in question ${String(questionIndex + 1)} is not present for the following languages: ${language.language.code}`,
                path: [
                    "questions",
                    questionIndex,
                    field
                ]
            };
        }
    }
    const invalidLanguageCodes = validateLabelForAllLanguages(fieldLabel, languages);
    const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
    const messagePrefix = skipArticle ? "" : "The ";
    const messageField = FIELD_TO_LABEL_MAP[field] ? FIELD_TO_LABEL_MAP[field] : field;
    const messageSuffix = isDefaultOnly ? " is missing" : " is missing for the following languages: ";
    const message = isDefaultOnly ? `${messagePrefix}${messageField} in question ${String(questionIndex + 1)}${messageSuffix}` : `${messagePrefix}${messageField} in question ${String(questionIndex + 1)}${messageSuffix} -fLang- ${invalidLanguageCodes.join()}`;
    if (invalidLanguageCodes.length) {
        return {
            code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
            message,
            path: [
                "questions",
                questionIndex,
                field
            ],
            params: isDefaultOnly ? undefined : {
                invalidLanguageCodes
            }
        };
    }
    return null;
};
const validateCardFieldsForAllLanguages = (field, fieldLabel, languages, cardType, endingCardIndex, skipArticle = false)=>{
    // fieldLabel should contain all the keys present in languages
    // even if one of the keys is an empty string, its okay but it shouldn't be undefined
    const cardTypeLabel = cardType === "welcome" ? "Welcome card" : `Ending card ${((endingCardIndex ?? -1) + 1).toString()}`; // Ensure 1-based indexing
    const path = cardType === "welcome" ? [
        "welcomeCard",
        field
    ] : [
        "endings",
        endingCardIndex ?? -1,
        field
    ];
    for (const language of languages){
        if (!language.default && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- could be undefined
        fieldLabel[language.language.code] === undefined) {
            return {
                code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
                message: `The ${field} in ${cardTypeLabel} is not present for the following languages: ${language.language.code}`,
                path
            };
        }
    }
    const invalidLanguageCodes = validateLabelForAllLanguages(fieldLabel, languages);
    const isDefaultOnly = invalidLanguageCodes.length === 1 && invalidLanguageCodes[0] === "default";
    const messagePrefix = skipArticle ? "" : "The ";
    const messageField = FIELD_TO_LABEL_MAP[field] ? FIELD_TO_LABEL_MAP[field] : field;
    const messageSuffix = isDefaultOnly ? " is missing" : " is missing for the following languages: ";
    const message = isDefaultOnly ? `${messagePrefix}${messageField} on the ${cardTypeLabel}${messageSuffix}` : `${messagePrefix}${messageField} on the ${cardTypeLabel}${messageSuffix} -fLang- ${invalidLanguageCodes.join(", ")}`;
    if (invalidLanguageCodes.length) {
        return {
            code: zod__WEBPACK_IMPORTED_MODULE_0__.z.ZodIssueCode.custom,
            message,
            path,
            params: isDefaultOnly ? undefined : {
                invalidLanguageCodes
            }
        };
    }
    return null;
};
const findLanguageCodesForDuplicateLabels = (labels, surveyLanguages)=>{
    const enabledLanguages = surveyLanguages.filter((lang)=>lang.enabled);
    const languageCodes = extractLanguageCodes(enabledLanguages);
    const languagesToCheck = languageCodes.length === 0 ? [
        "default"
    ] : languageCodes;
    const duplicateLabels = new Set();
    for (const language of languagesToCheck){
        const labelTexts = labels.map((label)=>label[language].trim()).filter(Boolean);
        const uniqueLabels = new Set(labelTexts);
        if (uniqueLabels.size !== labelTexts.length) {
            duplicateLabels.add(language);
        }
    }
    return Array.from(duplicateLabels);
};
const findQuestionsWithCyclicLogic = (questions)=>{
    const visited = {};
    const recStack = {};
    const cyclicQuestions = new Set();
    const checkForCyclicLogic = (questionId)=>{
        if (!visited[questionId]) {
            visited[questionId] = true;
            recStack[questionId] = true;
            const question = questions.find((ques)=>ques.id === questionId);
            if (question?.logic && question.logic.length > 0) {
                for (const logic of question.logic){
                    const jumpActions = findJumpToQuestionActions(logic.actions);
                    for (const jumpAction of jumpActions){
                        const destination = jumpAction.target;
                        if (!visited[destination] && checkForCyclicLogic(destination)) {
                            cyclicQuestions.add(questionId);
                            return true;
                        } else if (recStack[destination]) {
                            cyclicQuestions.add(questionId);
                            return true;
                        }
                    }
                }
            }
            // Check fallback logic
            if (question?.logicFallback) {
                const fallbackQuestionId = question.logicFallback;
                if (!visited[fallbackQuestionId] && checkForCyclicLogic(fallbackQuestionId)) {
                    cyclicQuestions.add(questionId);
                    return true;
                } else if (recStack[fallbackQuestionId]) {
                    cyclicQuestions.add(questionId);
                    return true;
                }
            }
            // Handle default behavior: move to the next question if no jump actions or fallback logic is defined
            const nextQuestionIndex = questions.findIndex((ques)=>ques.id === questionId) + 1;
            const nextQuestion = questions[nextQuestionIndex];
            if (nextQuestion && !visited[nextQuestion.id] && checkForCyclicLogic(nextQuestion.id)) {
                return true;
            }
        }
        recStack[questionId] = false;
        return false;
    };
    for (const question of questions){
        checkForCyclicLogic(question.id);
    }
    return Array.from(cyclicQuestions);
};
// Helper function to find all "jumpToQuestion" actions in the logic
const findJumpToQuestionActions = (actions)=>{
    return actions.filter((action)=>action.objective === "jumpToQuestion");
};
// function to validate hidden field or question id
const validateId = (type, field, existingQuestionIds, existingEndingCardIds, existingHiddenFieldIds)=>{
    if (field.trim() === "") {
        return `Please enter a ${type} Id.`;
    }
    const combinedIds = [
        ...existingQuestionIds,
        ...existingHiddenFieldIds,
        ...existingEndingCardIds
    ];
    if (combinedIds.findIndex((id)=>id.toLowerCase() === field.toLowerCase()) !== -1) {
        return `${type} ID already exists in questions or hidden fields.`;
    }
    if (FORBIDDEN_IDS.includes(field)) {
        return `${type} ID is not allowed.`;
    }
    if (field.includes(" ")) {
        return `${type} ID cannot contain spaces. Please remove spaces.`;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(field)) {
        return `${type} ID is not allowed. Please use only alphanumeric characters, hyphens, or underscores.`;
    }
    return null;
};
const isConditionGroup = (condition)=>{
    return "conditions" in condition;
};


/***/ })

};
;