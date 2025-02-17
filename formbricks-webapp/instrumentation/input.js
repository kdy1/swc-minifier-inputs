"use strict";
(() => {
var exports = {};
exports.id = 6183;
exports.ids = [6183];
exports.modules = {

/***/ 856801:
/***/ ((module) => {

module.exports = require("import-in-the-middle");

/***/ }),

/***/ 719063:
/***/ ((module) => {

module.exports = require("require-in-the-middle");

/***/ }),

/***/ 584297:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 579646:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 455511:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 636686:
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ 594735:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 629021:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 508086:
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ 321820:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 474998:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 719771:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 583997:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 379551:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 328354:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 173566:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 731421:
/***/ ((module) => {

module.exports = require("node:child_process");

/***/ }),

/***/ 353053:
/***/ ((module) => {

module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ 973024:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 937067:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 344708:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 286592:
/***/ ((module) => {

module.exports = require("node:inspector");

/***/ }),

/***/ 777030:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 70542:
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ 176760:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 380481:
/***/ ((module) => {

module.exports = require("node:readline");

/***/ }),

/***/ 157075:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 541692:
/***/ ((module) => {

module.exports = require("node:tls");

/***/ }),

/***/ 257975:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 775919:
/***/ ((module) => {

module.exports = require("node:worker_threads");

/***/ }),

/***/ 638522:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 502832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  register: () => (/* binding */ register)
});

// EXTERNAL MODULE: ../../node_modules/@vercel/otel/dist/node/index.js
var node = __webpack_require__(354430);
;// ../../node_modules/mustache/mustache.mjs
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

/* harmony default export */ const mustache_mustache = (mustache);

;// ../../node_modules/langfuse-core/lib/index.mjs

class SimpleEventEmitter {
    constructor(){
        this.events = {};
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return ()=>{
            this.events[event] = this.events[event].filter((x)=>x !== listener);
        };
    }
    emit(event, payload) {
        for (const listener of this.events[event] || []){
            listener(payload);
        }
        for (const listener of this.events["*"] || []){
            listener(event, payload);
        }
    }
}
const DEFAULT_PROMPT_CACHE_TTL_SECONDS = 60;
class LangfusePromptCacheItem {
    constructor(value, ttlSeconds){
        this.value = value;
        this._expiry = Date.now() + ttlSeconds * 1000;
    }
    get isExpired() {
        return Date.now() > this._expiry;
    }
}
class LangfusePromptCache {
    constructor(){
        this._cache = new Map();
        this._defaultTtlSeconds = DEFAULT_PROMPT_CACHE_TTL_SECONDS;
        this._refreshingKeys = new Map();
    }
    getIncludingExpired(key) {
        return this._cache.get(key) ?? null;
    }
    set(key, value, ttlSeconds) {
        const effectiveTtlSeconds = ttlSeconds ?? this._defaultTtlSeconds;
        this._cache.set(key, new LangfusePromptCacheItem(value, effectiveTtlSeconds));
    }
    addRefreshingPromise(key, promise) {
        this._refreshingKeys.set(key, promise);
        promise.then(()=>{
            this._refreshingKeys.delete(key);
        }).catch(()=>{
            this._refreshingKeys.delete(key);
        });
    }
    isRefreshing(key) {
        return this._refreshingKeys.has(key);
    }
    invalidate(promptName) {
        console.log("invalidating", promptName, this._cache.keys());
        for (const key of this._cache.keys()){
            if (key.startsWith(promptName)) {
                this._cache.delete(key);
            }
        }
    }
}
mustache_mustache.escape = function(text) {
    return text;
};
class BasePromptClient {
    constructor(prompt, isFallback = false, type){
        this.name = prompt.name;
        this.version = prompt.version;
        this.config = prompt.config;
        this.labels = prompt.labels;
        this.tags = prompt.tags;
        this.isFallback = isFallback;
        this.type = type;
        this.prompt = prompt.prompt;
    }
    _transformToLangchainVariables(content) {
        return content.replace(/\{\{(.*?)\}\}/g, "{$1}");
    }
    toJSON() {
        return JSON.stringify({
            name: this.name,
            prompt: this.prompt,
            version: this.version,
            isFallback: this.isFallback,
            tags: this.tags,
            labels: this.labels,
            type: this.type,
            config: this.config
        });
    }
}
class TextPromptClient extends BasePromptClient {
    constructor(prompt, isFallback = false){
        super(prompt, isFallback, "text");
        this.promptResponse = prompt;
        this.prompt = prompt.prompt;
    }
    compile(variables) {
        return mustache_mustache.render(this.promptResponse.prompt, variables ?? {});
    }
    getLangchainPrompt() {
        /**
     * Converts Langfuse prompt into string compatible with Langchain PromptTemplate.
     *
     * It specifically adapts the mustache-style double curly braces {{variable}} used in Langfuse
     * to the single curly brace {variable} format expected by Langchain.
     *
     * @returns {string} The string that can be plugged into Langchain's PromptTemplate.
     */ return this._transformToLangchainVariables(this.prompt);
    }
}
class ChatPromptClient extends BasePromptClient {
    constructor(prompt, isFallback = false){
        super(prompt, isFallback, "chat");
        this.promptResponse = prompt;
        this.prompt = prompt.prompt;
    }
    compile(variables) {
        return this.prompt.map((chatMessage)=>({
                ...chatMessage,
                content: mustache_mustache.render(chatMessage.content, variables ?? {})
            }));
    }
    getLangchainPrompt() {
        /**
     * Converts Langfuse prompt into string compatible with Langchain PromptTemplate.
     *
     * It specifically adapts the mustache-style double curly braces {{variable}} used in Langfuse
     * to the single curly brace {variable} format expected by Langchain.
     * Example usage:
     *
     * ```
     * import { ChatPromptTemplate } from "@langchain/core/prompts";
     *
     * const langchainChatPrompt = ChatPromptTemplate.fromMessages(
     *    langfuseChatPrompt.getLangchainPrompt().map((m) => [m.role, m.content])
     *  );
     *
     * const formattedPrompt = await langchainPrompt.format(values);
     *
     * ```
     * @returns {ChatMessage[]} Chat messages with variables that can be plugged into Langchain's ChatPromptTemplate.
     */ return this.prompt.map((chatMessage)=>({
                ...chatMessage,
                content: this._transformToLangchainVariables(chatMessage.content)
            }));
    }
}
function assert(truthyValue, message) {
    if (!truthyValue) {
        throw new Error(message);
    }
}
function removeTrailingSlash(url) {
    return url?.replace(/\/+$/, "");
}
async function retriable(fn, props = {}, log) {
    const { retryCount = 3, retryDelay = 5000, retryCheck = ()=>true } = props;
    let lastError = null;
    for(let i = 0; i < retryCount + 1; i++){
        if (i > 0) {
            // don't wait when it's the first try
            await new Promise((resolve)=>setTimeout(resolve, retryDelay));
            log(`Retrying ${i + 1} of ${retryCount + 1}`);
        }
        try {
            const res = await fn();
            return res;
        } catch (e) {
            lastError = e;
            if (!retryCheck(e)) {
                throw e;
            }
            log(`Retriable error: ${JSON.stringify(e)}`);
        }
    }
    throw lastError;
}
// https://stackoverflow.com/a/8809472
function generateUUID(globalThis1) {
    // Public Domain/MIT
    let d = new Date().getTime(); //Timestamp
    let d2 = globalThis1 && globalThis1.performance && globalThis1.performance.now && globalThis1.performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        let r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
}
function currentTimestamp() {
    return new Date().getTime();
}
function currentISOTime() {
    return new Date().toISOString();
}
function safeSetTimeout(fn, timeout) {
    // NOTE: we use this so rarely that it is totally fine to do `safeSetTimeout(fn, 0)``
    // rather than setImmediate.
    const t = setTimeout(fn, timeout);
    // We unref if available to prevent Node.js hanging on exit
    t?.unref && t?.unref();
    return t;
}
function getEnv(key) {
    if (typeof process !== "undefined" && process.env[key]) {
        return process.env[key];
    } else if (typeof globalThis !== "undefined") {
        return globalThis[key];
    }
    return;
}
function configLangfuseSDK(params, secretRequired = true) {
    const { publicKey, secretKey, ...coreOptions } = params ?? {};
    // check environment variables if values not provided
    const finalPublicKey = publicKey ?? getEnv("LANGFUSE_PUBLIC_KEY");
    const finalSecretKey = secretRequired ? secretKey ?? getEnv("LANGFUSE_SECRET_KEY") : undefined;
    const finalBaseUrl = coreOptions.baseUrl ?? getEnv("LANGFUSE_BASEURL");
    const finalCoreOptions = {
        ...coreOptions,
        baseUrl: finalBaseUrl
    };
    return {
        publicKey: finalPublicKey,
        ...secretRequired ? {
            secretKey: finalSecretKey
        } : undefined,
        ...finalCoreOptions
    };
}
const encodeQueryParams = (params)=>{
    const queryParams = new URLSearchParams();
    Object.entries(params ?? {}).forEach(([key, value])=>{
        if (value !== undefined && value !== null) {
            // check for date
            if (value instanceof Date) {
                queryParams.append(key, value.toISOString());
            } else {
                queryParams.append(key, value.toString());
            }
        }
    });
    return queryParams.toString();
};
var utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    assert: assert,
    configLangfuseSDK: configLangfuseSDK,
    currentISOTime: currentISOTime,
    currentTimestamp: currentTimestamp,
    encodeQueryParams: encodeQueryParams,
    generateUUID: generateUUID,
    getEnv: getEnv,
    removeTrailingSlash: removeTrailingSlash,
    retriable: retriable,
    safeSetTimeout: safeSetTimeout
});
const common_release_envs = [
    // Vercel
    "VERCEL_GIT_COMMIT_SHA",
    "NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA",
    // Netlify
    "COMMIT_REF",
    // Render
    "RENDER_GIT_COMMIT",
    // GitLab CI
    "CI_COMMIT_SHA",
    // CicleCI
    "CIRCLE_SHA1",
    // Cloudflare pages
    "CF_PAGES_COMMIT_SHA",
    // AWS Amplify
    "REACT_APP_GIT_SHA",
    // Heroku
    "SOURCE_VERSION",
    // Trigger.dev
    "TRIGGER_DEPLOYMENT_ID"
];
function getCommonReleaseEnvs() {
    for (const key of common_release_envs){
        const value = getEnv(key);
        if (value) {
            return value;
        }
    }
    return undefined;
}
var LangfusePersistedProperty;
(function(LangfusePersistedProperty) {
    LangfusePersistedProperty["Props"] = "props";
    LangfusePersistedProperty["Queue"] = "queue";
    LangfusePersistedProperty["OptedOut"] = "opted_out";
})(LangfusePersistedProperty || (LangfusePersistedProperty = {}));
let fs = null;
let cryptoModule = null;
// Use wrapper to prevent bundlers from trying to resolve the dynamic import
// Otherwise, the import will be incorrectly resolved as a static import even though it's dynamic
// Test for browser environment would fail because the import will be incorrectly resolved as a static import and fs and crypto will be unavailable
const dynamicImport = (module)=>{
    return import(/* webpackIgnore: true */ module);
};
if (typeof globalThis.Deno !== "undefined") {
    // Deno
    Promise.all([
        dynamicImport("node:fs"),
        dynamicImport("node:crypto")
    ]).then(([importedFs, importedCrypto])=>{
        fs = importedFs;
        cryptoModule = importedCrypto;
    }).catch(); // Errors are handled on runtime
} else if (typeof process !== "undefined" && process.versions?.node) {
    // Node
    Promise.all([
        dynamicImport("fs"),
        dynamicImport("crypto")
    ]).then(([importedFs, importedCrypto])=>{
        fs = importedFs;
        cryptoModule = importedCrypto;
    }).catch(); // Errors are handled on runtime
} else if (typeof crypto !== "undefined") {
    // Edge runtime (Cloudflare Workers, Vercel Cloud Function)
    cryptoModule = crypto;
}
/**
 * A class for wrapping media objects for upload to Langfuse.
 *
 * This class handles the preparation and formatting of media content for Langfuse,
 * supporting both base64 data URIs and raw content bytes.
 */ class LangfuseMedia {
    constructor(params){
        const { obj, base64DataUri, contentType, contentBytes, filePath } = params;
        this.obj = obj;
        this._mediaId = undefined;
        if (base64DataUri) {
            const [contentBytesParsed, contentTypeParsed] = this.parseBase64DataUri(base64DataUri);
            this._contentBytes = contentBytesParsed;
            this._contentType = contentTypeParsed;
            this._source = "base64_data_uri";
        } else if (contentBytes && contentType) {
            this._contentBytes = contentBytes;
            this._contentType = contentType;
            this._source = "bytes";
        } else if (filePath && contentType) {
            if (!fs) {
                throw new Error("File system support is not available in this environment");
            }
            if (!fs.existsSync(filePath)) {
                throw new Error(`File at path ${filePath} does not exist`);
            }
            this._contentBytes = this.readFile(filePath);
            this._contentType = this._contentBytes ? contentType : undefined;
            this._source = this._contentBytes ? "file" : undefined;
        } else {
            console.error("base64DataUri, or contentBytes and contentType, or filePath must be provided to LangfuseMedia");
        }
    }
    readFile(filePath) {
        try {
            if (!fs) {
                throw new Error("File system support is not available in this environment");
            }
            return fs.readFileSync(filePath);
        } catch (error) {
            console.error(`Error reading file at path ${filePath}`, error);
            return undefined;
        }
    }
    parseBase64DataUri(data) {
        try {
            if (!data || typeof data !== "string") {
                throw new Error("Data URI is not a string");
            }
            if (!data.startsWith("data:")) {
                throw new Error("Data URI does not start with 'data:'");
            }
            const [header, actualData] = data.slice(5).split(",", 2);
            if (!header || !actualData) {
                throw new Error("Invalid URI");
            }
            const headerParts = header.split(";");
            if (!headerParts.includes("base64")) {
                throw new Error("Data is not base64 encoded");
            }
            const contentType = headerParts[0];
            if (!contentType) {
                throw new Error("Content type is empty");
            }
            return [
                Buffer.from(actualData, "base64"),
                contentType
            ];
        } catch (error) {
            console.error("Error parsing base64 data URI", error);
            return [
                undefined,
                undefined
            ];
        }
    }
    get contentLength() {
        return this._contentBytes?.length;
    }
    get contentSha256Hash() {
        if (!this._contentBytes) {
            return undefined;
        }
        if (!cryptoModule) {
            console.error("Crypto support is not available in this environment");
            return undefined;
        }
        const sha256Hash = cryptoModule.createHash("sha256").update(this._contentBytes).digest("base64");
        return sha256Hash;
    }
    toJSON() {
        if (!this._contentType || !this._source || !this._mediaId) {
            return `<Upload handling failed for LangfuseMedia of type ${this._contentType}>`;
        }
        return `@@@langfuseMedia:type=${this._contentType}|id=${this._mediaId}|source=${this._source}@@@`;
    }
    /**
   * Parses a media reference string into a ParsedMediaReference.
   *
   * Example reference string:
   *     "@@@langfuseMedia:type=image/jpeg|id=some-uuid|source=base64DataUri@@@"
   *
   * @param referenceString - The reference string to parse.
   * @returns An object with the mediaId, source, and contentType.
   *
   * @throws Error if the reference string is invalid or missing required fields.
   */ static parseReferenceString(referenceString) {
        const prefix = "@@@langfuseMedia:";
        const suffix = "@@@";
        if (!referenceString.startsWith(prefix)) {
            throw new Error("Reference string does not start with '@@@langfuseMedia:type='");
        }
        if (!referenceString.endsWith(suffix)) {
            throw new Error("Reference string does not end with '@@@'");
        }
        const content = referenceString.slice(prefix.length, -suffix.length);
        const pairs = content.split("|");
        const parsedData = {};
        for (const pair of pairs){
            const [key, value] = pair.split("=", 2);
            parsedData[key] = value;
        }
        if (!("type" in parsedData && "id" in parsedData && "source" in parsedData)) {
            throw new Error("Missing required fields in reference string");
        }
        return {
            mediaId: parsedData["id"],
            source: parsedData["source"],
            contentType: parsedData["type"]
        };
    }
    /**
   * Replaces the media reference strings in an object with base64 data URIs for the media content.
   *
   * This method recursively traverses an object (up to a maximum depth of 10) looking for media reference strings
   * in the format "@@@langfuseMedia:...@@@". When found, it fetches the actual media content using the provided
   * Langfuse client and replaces the reference string with a base64 data URI.
   *
   * If fetching media content fails for a reference string, a warning is logged and the reference string is left unchanged.
   *
   * @param params - Configuration object
   * @param params.obj - The object to process. Can be a primitive value, array, or nested object
   * @param params.langfuseClient - Langfuse client instance used to fetch media content
   * @param params.resolveWith - The representation of the media content to replace the media reference string with. Currently only "base64DataUri" is supported.
   * @param params.maxDepth - Optional. Default is 10. The maximum depth to traverse the object.
   *
   * @returns A deep copy of the input object with all media references replaced with base64 data URIs where possible
   *
   * @example
   * ```typescript
   * const obj = {
   *   image: "@@@langfuseMedia:type=image/jpeg|id=123|source=bytes@@@",
   *   nested: {
   *     pdf: "@@@langfuseMedia:type=application/pdf|id=456|source=bytes@@@"
   *   }
   * };
   *
   * const result = await LangfuseMedia.resolveMediaReferences({
   *   obj,
   *   langfuseClient
   * });
   *
   * // Result:
   * // {
   * //   image: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
   * //   nested: {
   * //     pdf: "data:application/pdf;base64,JVBERi0xLjcK..."
   * //   }
   * // }
   * ```
   */ static async resolveMediaReferences(params) {
        const { obj, langfuseClient, maxDepth = 10 } = params;
        async function traverse(obj, depth) {
            if (depth > maxDepth) {
                return obj;
            }
            // Handle string with potential media references
            if (typeof obj === "string") {
                const regex = /@@@langfuseMedia:.+?@@@/g;
                const referenceStringMatches = obj.match(regex);
                if (!referenceStringMatches) {
                    return obj;
                }
                let result = obj;
                const referenceStringToMediaContentMap = new Map();
                await Promise.all(referenceStringMatches.map(async (referenceString)=>{
                    try {
                        const parsedMediaReference = LangfuseMedia.parseReferenceString(referenceString);
                        const mediaData = await langfuseClient.fetchMedia(parsedMediaReference.mediaId);
                        const mediaContent = await langfuseClient.fetch(mediaData.url, {
                            method: "GET",
                            headers: {}
                        });
                        if (mediaContent.status !== 200) {
                            throw new Error("Failed to fetch media content");
                        }
                        const base64MediaContent = Buffer.from(await mediaContent.arrayBuffer()).toString("base64");
                        const base64DataUri = `data:${mediaData.contentType};base64,${base64MediaContent}`;
                        referenceStringToMediaContentMap.set(referenceString, base64DataUri);
                    } catch (error) {
                        console.warn("Error fetching media content for reference string", referenceString, error);
                    // Do not replace the reference string if there's an error
                    }
                }));
                for (const [referenceString, base64MediaContent] of referenceStringToMediaContentMap.entries()){
                    result = result.replaceAll(referenceString, base64MediaContent);
                }
                return result;
            }
            // Handle arrays
            if (Array.isArray(obj)) {
                return Promise.all(obj.map(async (item)=>await traverse(item, depth + 1)));
            }
            // Handle objects
            if (typeof obj === "object" && obj !== null) {
                return Object.fromEntries(await Promise.all(Object.entries(obj).map(async ([key, value])=>[
                        key,
                        await traverse(value, depth + 1)
                    ])));
            }
            return obj;
        }
        return traverse(obj, 0);
    }
}
class LangfuseMemoryStorage {
    constructor(){
        this._memoryStorage = {};
    }
    getProperty(key) {
        return this._memoryStorage[key];
    }
    setProperty(key, value) {
        this._memoryStorage[key] = value !== null ? value : undefined;
    }
}
const MAX_EVENT_SIZE = 1000000;
class LangfuseFetchHttpError extends Error {
    constructor(response, body){
        super("HTTP error while fetching Langfuse: " + response.status + " and body: " + body);
        this.response = response;
        this.name = "LangfuseFetchHttpError";
    }
}
class LangfuseFetchNetworkError extends Error {
    constructor(error){
        super("Network error while fetching Langfuse", error instanceof Error ? {
            cause: error
        } : {});
        this.error = error;
        this.name = "LangfuseFetchNetworkError";
    }
}
function isLangfuseFetchHttpError(error) {
    return typeof error === "object" && error.name === "LangfuseFetchHttpError";
}
function isLangfuseFetchNetworkError(error) {
    return typeof error === "object" && error.name === "LangfuseFetchNetworkError";
}
function isLangfuseFetchError(err) {
    return isLangfuseFetchHttpError(err) || isLangfuseFetchNetworkError(err);
}
// Constants for URLs
const SUPPORT_URL = "https://langfuse.com/support";
const API_DOCS_URL = "https://api.reference.langfuse.com";
const RBAC_DOCS_URL = "https://langfuse.com/docs/rbac";
const INSTALLATION_DOCS_URL = "https://langfuse.com/docs/sdk/typescript/guide";
const RATE_LIMITS_URL = "https://langfuse.com/faq/all/api-limits";
const NPM_PACKAGE_URL = "https://www.npmjs.com/package/langfuse";
// Error messages
const updatePromptResponse = `Make sure to keep your SDK updated, refer to ${NPM_PACKAGE_URL} for details.`;
const defaultServerErrorPrompt = `This is an unusual occurrence and we are monitoring it closely. For help, please contact support: ${SUPPORT_URL}.`;
const defaultErrorResponse = `Unexpected error occurred. Please check your request and contact support: ${SUPPORT_URL}.`;
// Error response map
const errorResponseByCode = new Map([
    // Internal error category: 5xx errors, 404 error
    [
        500,
        `Internal server error occurred. For help, please contact support: ${SUPPORT_URL}`
    ],
    [
        501,
        `Not implemented. Please check your request and contact support for help: ${SUPPORT_URL}.`
    ],
    [
        502,
        `Bad gateway. ${defaultServerErrorPrompt}`
    ],
    [
        503,
        `Service unavailable. ${defaultServerErrorPrompt}`
    ],
    [
        504,
        `Gateway timeout. ${defaultServerErrorPrompt}`
    ],
    [
        404,
        `Internal error occurred. ${defaultServerErrorPrompt}`
    ],
    // Client error category: 4xx errors, excluding 404
    [
        400,
        `Bad request. Please check your request for any missing or incorrect parameters. Refer to our API docs: ${API_DOCS_URL} for details.`
    ],
    [
        401,
        `Unauthorized. Please check your public/private host settings. Refer to our installation and setup guide: ${INSTALLATION_DOCS_URL} for details on SDK configuration.`
    ],
    [
        403,
        `Forbidden. Please check your access control settings. Refer to our RBAC docs: ${RBAC_DOCS_URL} for details.`
    ],
    [
        429,
        `Rate limit exceeded. For more information on rate limits please see: ${RATE_LIMITS_URL}`
    ]
]);
// Returns a user-friendly error message based on the HTTP status code
function getErrorResponseByCode(code) {
    if (!code) {
        return `${defaultErrorResponse} ${updatePromptResponse}`;
    }
    const errorResponse = errorResponseByCode.get(code) || defaultErrorResponse;
    return `${code}: ${errorResponse} ${updatePromptResponse}`;
}
function logIngestionError(error) {
    if (isLangfuseFetchHttpError(error)) {
        const code = error.response.status;
        const errorResponse = getErrorResponseByCode(code);
        console.error("[Langfuse SDK]", errorResponse, `Error details: ${error}`);
    } else if (isLangfuseFetchNetworkError(error)) {
        console.error("[Langfuse SDK] Network error: ", error);
    } else {
        console.error("[Langfuse SDK] Unknown error:", error);
    }
}
class LangfuseCoreStateless {
    constructor(params){
        this.additionalHeaders = {};
        this.debugMode = false;
        this.pendingEventProcessingPromises = {};
        this.pendingIngestionPromises = {};
        this.localEventExportMap = new Map();
        // internal
        this._events = new SimpleEventEmitter();
        const { publicKey, secretKey, enabled, _projectId, _isLocalEventExportEnabled, ...options } = params;
        this.enabled = enabled === false ? false : true;
        this.publicKey = publicKey ?? "";
        this.secretKey = secretKey;
        this.baseUrl = removeTrailingSlash(options?.baseUrl || "https://cloud.langfuse.com");
        this.additionalHeaders = options?.additionalHeaders || {};
        this.flushAt = options?.flushAt ? Math.max(options?.flushAt, 1) : 15;
        this.flushInterval = options?.flushInterval ?? 10000;
        this.release = options?.release ?? getEnv("LANGFUSE_RELEASE") ?? getCommonReleaseEnvs() ?? undefined;
        this.mask = options?.mask;
        this._retryOptions = {
            retryCount: options?.fetchRetryCount ?? 3,
            retryDelay: options?.fetchRetryDelay ?? 3000,
            retryCheck: isLangfuseFetchError
        };
        this.requestTimeout = options?.requestTimeout ?? 10000; // 10 seconds
        this.sdkIntegration = options?.sdkIntegration ?? "DEFAULT";
        this.isLocalEventExportEnabled = _isLocalEventExportEnabled ?? false;
        if (this.isLocalEventExportEnabled && !_projectId) {
            this._events.emit("error", "Local event export is enabled, but no project ID was provided. Disabling local export.");
            this.isLocalEventExportEnabled = false;
            return;
        } else if (!this.isLocalEventExportEnabled && _projectId) {
            this._events.emit("error", "Local event export is disabled, but a project ID was provided. Disabling local export.");
            this.isLocalEventExportEnabled = false;
            return;
        } else {
            this.projectId = _projectId;
        }
    }
    getSdkIntegration() {
        return this.sdkIntegration;
    }
    getCommonEventProperties() {
        return {
            $lib: this.getLibraryId(),
            $lib_version: this.getLibraryVersion()
        };
    }
    on(event, cb) {
        return this._events.on(event, cb);
    }
    debug(enabled = true) {
        this.removeDebugCallback?.();
        this.debugMode = enabled;
        if (enabled) {
            this.removeDebugCallback = this.on("*", (event, payload)=>console.log("Langfuse Debug", event, JSON.stringify(payload)));
        }
    }
    /***
   *** Handlers for each object type
   ***/ traceStateless(body) {
        const { id: bodyId, timestamp: bodyTimestamp, release: bodyRelease, ...rest } = body;
        const id = bodyId ?? generateUUID();
        const release = bodyRelease ?? this.release;
        const parsedBody = {
            id,
            release,
            timestamp: bodyTimestamp ?? new Date(),
            ...rest
        };
        this.enqueue("trace-create", parsedBody);
        return id;
    }
    eventStateless(body) {
        const { id: bodyId, startTime: bodyStartTime, ...rest } = body;
        const id = bodyId ?? generateUUID();
        const parsedBody = {
            id,
            startTime: bodyStartTime ?? new Date(),
            ...rest
        };
        this.enqueue("event-create", parsedBody);
        return id;
    }
    spanStateless(body) {
        const { id: bodyId, startTime: bodyStartTime, ...rest } = body;
        const id = bodyId || generateUUID();
        const parsedBody = {
            id,
            startTime: bodyStartTime ?? new Date(),
            ...rest
        };
        this.enqueue("span-create", parsedBody);
        return id;
    }
    generationStateless(body) {
        const { id: bodyId, startTime: bodyStartTime, prompt, ...rest } = body;
        const promptDetails = prompt && !prompt.isFallback ? {
            promptName: prompt.name,
            promptVersion: prompt.version
        } : {};
        const id = bodyId || generateUUID();
        const parsedBody = {
            id,
            startTime: bodyStartTime ?? new Date(),
            ...promptDetails,
            ...rest
        };
        this.enqueue("generation-create", parsedBody);
        return id;
    }
    scoreStateless(body) {
        const { id: bodyId, ...rest } = body;
        const id = bodyId || generateUUID();
        const parsedBody = {
            id,
            ...rest
        };
        this.enqueue("score-create", parsedBody);
        return id;
    }
    updateSpanStateless(body) {
        this.enqueue("span-update", body);
        return body.id;
    }
    updateGenerationStateless(body) {
        const { prompt, ...rest } = body;
        const promptDetails = prompt && !prompt.isFallback ? {
            promptName: prompt.name,
            promptVersion: prompt.version
        } : {};
        const parsedBody = {
            ...promptDetails,
            ...rest
        };
        this.enqueue("generation-update", parsedBody);
        return body.id;
    }
    async _getDataset(name) {
        const encodedName = encodeURIComponent(name);
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/v2/datasets/${encodedName}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    async _getDatasetItems(query) {
        const params = new URLSearchParams();
        Object.entries(query ?? {}).forEach(([key, value])=>{
            if (value !== undefined && value !== null) {
                params.append(key, value.toString());
            }
        });
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/dataset-items?${params}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    async _fetchMedia(id) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/media/${id}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    async fetchTraces(query) {
        // destructure the response into data and meta to be explicit about the shape of the response and add type-warnings in case the API changes
        const { data, meta } = await this.fetchAndLogErrors(`${this.baseUrl}/api/public/traces?${encodeQueryParams(query)}`, this._getFetchOptions({
            method: "GET"
        }));
        return {
            data,
            meta
        };
    }
    async fetchTrace(traceId) {
        const res = await this.fetchAndLogErrors(`${this.baseUrl}/api/public/traces/${traceId}`, this._getFetchOptions({
            method: "GET"
        }));
        return {
            data: res
        };
    }
    async fetchObservations(query) {
        // destructure the response into data and meta to be explicit about the shape of the response and add type-warnings in case the API changes
        const { data, meta } = await this.fetchAndLogErrors(`${this.baseUrl}/api/public/observations?${encodeQueryParams(query)}`, this._getFetchOptions({
            method: "GET"
        }));
        return {
            data,
            meta
        };
    }
    async fetchObservation(observationId) {
        const res = await this.fetchAndLogErrors(`${this.baseUrl}/api/public/observations/${observationId}`, this._getFetchOptions({
            method: "GET"
        }));
        return {
            data: res
        };
    }
    async fetchSessions(query) {
        // destructure the response into data and meta to be explicit about the shape of the response and add type-warnings in case the API changes
        const { data, meta } = await this.fetchAndLogErrors(`${this.baseUrl}/api/public/sessions?${encodeQueryParams(query)}`, this._getFetchOptions({
            method: "GET"
        }));
        return {
            data,
            meta
        };
    }
    async getDatasetRun(params) {
        const encodedDatasetName = encodeURIComponent(params.datasetName);
        const encodedRunName = encodeURIComponent(params.runName);
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/datasets/${encodedDatasetName}/runs/${encodedRunName}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    async getDatasetRuns(datasetName, query) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/datasets/${encodeURIComponent(datasetName)}/runs?${encodeQueryParams(query)}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    async createDatasetRunItem(body) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/dataset-run-items`, this._getFetchOptions({
            method: "POST",
            body: JSON.stringify(body)
        }));
    }
    /**
   * Creates a dataset. Upserts the dataset if it already exists.
   *
   * @param dataset Can be either a string (name) or an object with name, description and metadata
   * @returns A promise that resolves to the response of the create operation.
   */ async createDataset(dataset) {
        const body = typeof dataset === "string" ? {
            name: dataset
        } : dataset;
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/datasets`, this._getFetchOptions({
            method: "POST",
            body: JSON.stringify(body)
        }));
    }
    /**
   * Creates a dataset item. Upserts the item if it already exists.
   * @param body The body of the dataset item to be created.
   * @returns A promise that resolves to the response of the create operation.
   */ async createDatasetItem(body) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/dataset-items`, this._getFetchOptions({
            method: "POST",
            body: JSON.stringify(body)
        }));
    }
    async getDatasetItem(id) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/dataset-items/${id}`, this._getFetchOptions({
            method: "GET"
        }));
    }
    _parsePayload(response) {
        try {
            return JSON.parse(response);
        } catch  {
            return response;
        }
    }
    async createPromptStateless(body) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/v2/prompts`, this._getFetchOptions({
            method: "POST",
            body: JSON.stringify(body)
        }));
    }
    async updatePromptStateless(body) {
        return this.fetchAndLogErrors(`${this.baseUrl}/api/public/v2/prompts/${encodeURIComponent(body.name)}/versions/${encodeURIComponent(body.version)}`, this._getFetchOptions({
            method: "PATCH",
            body: JSON.stringify(body)
        }));
    }
    async getPromptStateless(name, version, label, maxRetries, requestTimeout // this will override the default requestTimeout for fetching prompts. Together with maxRetries, it can be used to fetch prompts fast when the first fetch is slow.
    ) {
        const encodedName = encodeURIComponent(name);
        const params = new URLSearchParams();
        // Add parameters only if they are provided
        if (version && label) {
            throw new Error("Provide either version or label, not both.");
        }
        if (version) {
            params.append("version", version.toString());
        }
        if (label) {
            params.append("label", label);
        }
        const url = `${this.baseUrl}/api/public/v2/prompts/${encodedName}${params.size ? "?" + params : ""}`;
        const boundedMaxRetries = this._getBoundedMaxRetries({
            maxRetries,
            defaultMaxRetries: 2,
            maxRetriesUpperBound: 4
        });
        const retryOptions = {
            ...this._retryOptions,
            retryCount: boundedMaxRetries,
            retryDelay: 500
        };
        const retryLogger = (string)=>this._events.emit("retry", string + ", " + url + ", " + JSON.stringify(retryOptions));
        return retriable(async ()=>{
            const res = await this.fetch(url, this._getFetchOptions({
                method: "GET",
                fetchTimeout: requestTimeout
            })).catch((e)=>{
                if (e.name === "AbortError") {
                    throw new LangfuseFetchNetworkError("Fetch request timed out");
                }
                throw new LangfuseFetchNetworkError(e);
            });
            const data = await res.json();
            if (res.status >= 500) {
                throw new LangfuseFetchHttpError(res, JSON.stringify(data));
            }
            return {
                fetchResult: res.status === 200 ? "success" : "failure",
                data
            };
        }, retryOptions, retryLogger);
    }
    _getBoundedMaxRetries(params) {
        const defaultMaxRetries = Math.max(params.defaultMaxRetries ?? 2, 0);
        const maxRetriesUpperBound = Math.max(params.maxRetriesUpperBound ?? 4, 0);
        if (params.maxRetries === undefined) {
            return defaultMaxRetries;
        }
        return Math.min(Math.max(params.maxRetries, 0), maxRetriesUpperBound);
    }
    /***
   *** QUEUEING AND FLUSHING
   ***/ enqueue(type, body) {
        if (!this.enabled) {
            return;
        }
        const promise = this.processEnqueueEvent(type, body);
        const promiseId = generateUUID();
        this.pendingEventProcessingPromises[promiseId] = promise;
        promise.catch((e)=>{
            this._events.emit("error", e);
        }).finally(()=>{
            delete this.pendingEventProcessingPromises[promiseId];
        });
    }
    async processEnqueueEvent(type, body) {
        this.maskEventBodyInPlace(body);
        await this.processMediaInEvent(type, body);
        const finalEventBody = this.truncateEventBody(body, MAX_EVENT_SIZE);
        try {
            JSON.stringify(finalEventBody);
        } catch (e) {
            this._events.emit("error", `[Langfuse SDK] Event Body for ${type} is not JSON-serializable: ${e}`);
            return;
        }
        const queue = this.getPersistedProperty(LangfusePersistedProperty.Queue) || [];
        queue.push({
            id: generateUUID(),
            type,
            timestamp: currentISOTime(),
            body: finalEventBody,
            // TODO: fix typecast. EventBody is not correctly narrowed to the correct type dictated by the 'type' property. This should be part of a larger type cleanup.
            metadata: undefined
        });
        this.setPersistedProperty(LangfusePersistedProperty.Queue, queue);
        this._events.emit(type, finalEventBody);
        // Flush queued events if we meet the flushAt length
        if (queue.length >= this.flushAt) {
            this.flush();
        }
        if (this.flushInterval && !this._flushTimer) {
            this._flushTimer = safeSetTimeout(()=>this.flush(), this.flushInterval);
        }
    }
    maskEventBodyInPlace(body) {
        if (!this.mask) {
            return;
        }
        const maskableKeys = [
            "input",
            "output"
        ];
        for (const key of maskableKeys){
            if (key in body) {
                try {
                    body[key] = this.mask({
                        data: body[key]
                    });
                } catch (e) {
                    this._events.emit("error", `Error masking ${key}: ${e}`);
                    body[key] = "<fully masked due to failed mask function>";
                }
            }
        }
    }
    /**
   * Truncates the event body if its byte size exceeds the specified maximum byte size.
   * Emits a warning event if truncation occurs.
   * The fields that may be truncated are: "input", "output", and "metadata".
   * The fields are truncated in the order of their size, from largest to smallest until the total byte size is within the limit.
   */ truncateEventBody(body, maxByteSize) {
        const bodySize = this.getByteSize(body);
        if (bodySize <= maxByteSize) {
            return body;
        }
        this._events.emit("warning", `Event Body is too large (${bodySize} bytes) and will be truncated`);
        // Sort keys by size and truncate the largest keys first
        const keysToCheck = [
            "input",
            "output",
            "metadata"
        ];
        const keySizes = keysToCheck.map((key)=>({
                key,
                size: key in body ? this.getByteSize(body[key]) : 0
            })).sort((a, b)=>b.size - a.size);
        let result = {
            ...body
        };
        let currentSize = bodySize;
        for (const { key, size } of keySizes){
            if (currentSize > maxByteSize && Object.prototype.hasOwnProperty.call(result, key)) {
                result = {
                    ...result,
                    [key]: "<truncated due to size exceeding limit>"
                };
                this._events.emit("warning", `Truncated ${key} due to total size exceeding limit`);
                currentSize -= size;
            }
        }
        return result;
    }
    getByteSize(obj) {
        const serialized = JSON.stringify(obj);
        // Use TextEncoder if available, otherwise fallback to encodeURIComponent
        if (typeof TextEncoder !== "undefined") {
            return new TextEncoder().encode(serialized).length;
        } else {
            return encodeURIComponent(serialized).replace(/%[A-F\d]{2}/g, "U").length;
        }
    }
    async processMediaInEvent(type, body) {
        if (!body) {
            return;
        }
        const traceId = "traceId" in body ? body.traceId : type.includes("trace") ? body.id : undefined;
        if (!traceId) {
            this._events.emit("warning", "traceId is required for media upload");
            return;
        }
        const observationId = (type.includes("generation") || type.includes("span")) && body.id ? body.id : undefined;
        await Promise.all([
            "input",
            "output",
            "metadata"
        ].map(async (field)=>{
            if (body[field]) {
                body[field] = await this.findAndProcessMedia({
                    data: body[field],
                    traceId,
                    observationId,
                    field
                }).catch((e)=>{
                    this._events.emit("error", `Error processing multimodal event: ${e}`);
                }) ?? body[field];
            }
        }));
    }
    async findAndProcessMedia({ data, traceId, observationId, field }) {
        const seenObjects = new WeakMap();
        const maxLevels = 10;
        const processRecursively = async (data, level)=>{
            if (typeof data === "string" && data.startsWith("data:")) {
                const media = new LangfuseMedia({
                    base64DataUri: data
                });
                await this.processMediaItem({
                    media,
                    traceId,
                    observationId,
                    field
                });
                return media;
            }
            if (typeof data !== "object" || data === null) {
                return data;
            }
            // Use WeakMap to detect cycles
            if (seenObjects.has(data) || level > maxLevels) {
                return data;
            }
            seenObjects.set(data, true);
            if (data instanceof LangfuseMedia || Object.prototype.toString.call(data) === "[object LangfuseMedia]") {
                await this.processMediaItem({
                    media: data,
                    traceId,
                    observationId,
                    field
                });
                return data;
            }
            if (Array.isArray(data)) {
                return await Promise.all(data.map((item)=>processRecursively(item, level + 1)));
            }
            // Parse OpenAI input audio data which is passed as base64 string NOT in the data uri format
            if (typeof data === "object" && data !== null) {
                if ("input_audio" in data && typeof data["input_audio"] === "object" && "data" in data.input_audio) {
                    const media = new LangfuseMedia({
                        base64DataUri: `data:audio/${data.input_audio["format"] || "wav"};base64,${data.input_audio.data}`
                    });
                    await this.processMediaItem({
                        media,
                        traceId,
                        observationId,
                        field
                    });
                    return {
                        ...data,
                        input_audio: {
                            ...data.input_audio,
                            data: media
                        }
                    };
                }
                // OpenAI output audio data is passed as base64 string NOT in the data uri format
                if ("audio" in data && typeof data["audio"] === "object" && "data" in data.audio) {
                    const media = new LangfuseMedia({
                        base64DataUri: `data:audio/${data.audio["format"] || "wav"};base64,${data.audio.data}`
                    });
                    await this.processMediaItem({
                        media,
                        traceId,
                        observationId,
                        field
                    });
                    return {
                        ...data,
                        audio: {
                            ...data.audio,
                            data: media
                        }
                    };
                }
                // Recursively process nested objects
                return Object.fromEntries(await Promise.all(Object.entries(data).map(async ([key, value])=>[
                        key,
                        await processRecursively(value, level + 1)
                    ])));
            }
            return data;
        };
        return await processRecursively(data, 1);
    }
    async processMediaItem({ media, traceId, observationId, field }) {
        try {
            if (!media.contentLength || !media._contentType || !media.contentSha256Hash || !media._contentBytes) {
                return;
            }
            const getUploadUrlBody = {
                contentLength: media.contentLength,
                traceId,
                observationId,
                field,
                contentType: media._contentType,
                sha256Hash: media.contentSha256Hash
            };
            const fetchResponse = await this.fetch(`${this.baseUrl}/api/public/media`, this._getFetchOptions({
                method: "POST",
                body: JSON.stringify(getUploadUrlBody)
            }));
            const uploadUrlResponse = await fetchResponse.json();
            const { uploadUrl, mediaId } = uploadUrlResponse;
            media._mediaId = mediaId;
            if (uploadUrl) {
                this._events.emit("debug", `Uploading media ${mediaId}`);
                const startTime = Date.now();
                const uploadResponse = await this.fetch(uploadUrl, {
                    method: "PUT",
                    body: media._contentBytes,
                    headers: {
                        "Content-Type": media._contentType,
                        "x-amz-checksum-sha256": media.contentSha256Hash,
                        "x-ms-blob-type": "BlockBlob"
                    }
                });
                const patchMediaBody = {
                    uploadedAt: new Date().toISOString(),
                    uploadHttpStatus: uploadResponse.status,
                    uploadHttpError: await uploadResponse.text(),
                    uploadTimeMs: Date.now() - startTime
                };
                await this.fetch(`${this.baseUrl}/api/public/media/${mediaId}`, this._getFetchOptions({
                    method: "PATCH",
                    body: JSON.stringify(patchMediaBody)
                }));
                this._events.emit("debug", `Media upload status reported for ${mediaId}`);
            } else {
                this._events.emit("debug", `Media ${mediaId} already uploaded`);
            }
        } catch (err) {
            this._events.emit("error", `Error processing media item: ${err}`);
        }
    }
    /**
   * Asynchronously flushes all events that are not yet sent to the server.
   * This function always resolves, even if there were errors when flushing.
   * Errors are emitted as "error" events and the promise resolves.
   *
   * @returns {Promise<void>} A promise that resolves when the flushing is completed.
   */ async flushAsync() {
        await Promise.all(Object.values(this.pendingEventProcessingPromises)).catch((e)=>{
            logIngestionError(e);
        });
        return new Promise((resolve, _reject)=>{
            try {
                this.flush((err, data)=>{
                    if (err) {
                        logIngestionError(err);
                        resolve();
                    } else {
                        resolve(data);
                    }
                });
            // safeguard against unexpected synchronous errors
            } catch (e) {
                console.error("[Langfuse SDK] Error while flushing Langfuse", e);
            }
        });
    }
    // Flushes all events that are not yet sent to the server
    flush(callback) {
        if (this._flushTimer) {
            clearTimeout(this._flushTimer);
            this._flushTimer = null;
        }
        const queue = this.getPersistedProperty(LangfusePersistedProperty.Queue) || [];
        if (!queue.length) {
            return callback?.();
        }
        const items = queue.splice(0, this.flushAt);
        const MAX_MSG_SIZE = 1000000;
        const BATCH_SIZE_LIMIT = 2500000;
        const { processedItems, remainingItems } = this.processQueueItems(items, MAX_MSG_SIZE, BATCH_SIZE_LIMIT);
        this.setPersistedProperty(LangfusePersistedProperty.Queue, [
            ...remainingItems,
            ...queue
        ]);
        const promiseUUID = generateUUID();
        const done = (err)=>{
            if (err) {
                this._events.emit("error", err);
            }
            callback?.(err, items);
            this._events.emit("flush", items);
        };
        // If local event export is enabled, we don't send the events to the server, but instead store them in the localEventExportMap
        if (this.isLocalEventExportEnabled && this.projectId) {
            if (!this.localEventExportMap.has(this.projectId)) {
                this.localEventExportMap.set(this.projectId, [
                    ...items
                ]);
            } else {
                this.localEventExportMap.get(this.projectId)?.push(...items);
            }
            done();
            return;
        }
        const payload = JSON.stringify({
            batch: processedItems,
            metadata: {
                batch_size: processedItems.length,
                sdk_integration: this.sdkIntegration,
                sdk_version: this.getLibraryVersion(),
                sdk_variant: this.getLibraryId(),
                public_key: this.publicKey,
                sdk_name: "langfuse-js"
            }
        }); // implicit conversion also of dates to strings
        const url = `${this.baseUrl}/api/public/ingestion`;
        const fetchOptions = this._getFetchOptions({
            method: "POST",
            body: payload
        });
        const requestPromise = this.fetchWithRetry(url, fetchOptions).then(()=>done()).catch((err)=>{
            done(err);
        });
        this.pendingIngestionPromises[promiseUUID] = requestPromise;
        requestPromise.finally(()=>{
            delete this.pendingIngestionPromises[promiseUUID];
        });
    }
    processQueueItems(queue, MAX_MSG_SIZE, BATCH_SIZE_LIMIT) {
        let totalSize = 0;
        const processedItems = [];
        const remainingItems = [];
        for(let i = 0; i < queue.length; i++){
            try {
                const itemSize = new Blob([
                    JSON.stringify(queue[i])
                ]).size;
                // discard item if it exceeds the maximum size per event
                if (itemSize > MAX_MSG_SIZE) {
                    console.warn(`Item exceeds size limit (size: ${itemSize}), dropping item.`);
                    continue;
                }
                // if adding the next item would exceed the batch size limit, stop processing
                if (totalSize + itemSize >= BATCH_SIZE_LIMIT) {
                    console.debug(`hit batch size limit (size: ${totalSize + itemSize})`);
                    remainingItems.push(...queue.slice(i));
                    console.log(`Remaining items: ${remainingItems.length}`);
                    console.log(`processes items: ${processedItems.length}`);
                    break;
                }
                // only add the item if it passes both requirements
                totalSize += itemSize;
                processedItems.push(queue[i]);
            } catch (error) {
                console.error(`[Langfuse SDK] ${error}`);
                remainingItems.push(...queue.slice(i));
                break;
            }
        }
        return {
            processedItems,
            remainingItems
        };
    }
    _getFetchOptions(p) {
        const fetchOptions = {
            method: p.method,
            headers: {
                "Content-Type": "application/json",
                "X-Langfuse-Sdk-Name": "langfuse-js",
                "X-Langfuse-Sdk-Version": this.getLibraryVersion(),
                "X-Langfuse-Sdk-Variant": this.getLibraryId(),
                "X-Langfuse-Sdk-Integration": this.sdkIntegration,
                "X-Langfuse-Public-Key": this.publicKey,
                ...this.additionalHeaders,
                ...this.constructAuthorizationHeader(this.publicKey, this.secretKey)
            },
            body: p.body,
            ...p.fetchTimeout !== undefined ? {
                signal: AbortSignal.timeout(p.fetchTimeout)
            } : {}
        };
        return fetchOptions;
    }
    constructAuthorizationHeader(publicKey, secretKey) {
        if (secretKey === undefined) {
            return {
                Authorization: "Bearer " + publicKey
            };
        } else {
            const encodedCredentials = typeof btoa === "function" ? // btoa() is available, the code is running in a browser or edge environment
            btoa(publicKey + ":" + secretKey) : // btoa() is not available, the code is running in Node.js
            Buffer.from(publicKey + ":" + secretKey).toString("base64");
            return {
                Authorization: "Basic " + encodedCredentials
            };
        }
    }
    async fetchWithRetry(url, options, retryOptions) {
        AbortSignal.timeout ??= function timeout(ms) {
            const ctrl = new AbortController();
            setTimeout(()=>ctrl.abort(), ms);
            return ctrl.signal;
        };
        return await retriable(async ()=>{
            let res = null;
            try {
                res = await this.fetch(url, {
                    signal: AbortSignal.timeout(this.requestTimeout),
                    ...options
                });
            } catch (e) {
                // fetch will only throw on network errors or on timeouts
                throw new LangfuseFetchNetworkError(e);
            }
            if (res.status < 200 || res.status >= 400) {
                const body = await res.json();
                throw new LangfuseFetchHttpError(res, JSON.stringify(body));
            }
            const returnBody = await res.json();
            if (res.status === 207 && returnBody.errors.length > 0) {
                throw new LangfuseFetchHttpError(res, JSON.stringify(returnBody.errors));
            }
            return res;
        }, {
            ...this._retryOptions,
            ...retryOptions
        }, (string)=>this._events.emit("retry", string + ", " + url + ", " + JSON.stringify(options)));
    }
    async fetchAndLogErrors(url, options) {
        const res = await this.fetch(url, options);
        const data = await res.json();
        if (res.status < 200 || res.status >= 400) {
            logIngestionError(new LangfuseFetchHttpError(res, JSON.stringify(data)));
        }
        return data;
    }
    async shutdownAsync() {
        clearTimeout(this._flushTimer);
        try {
            await this.flushAsync();
            await Promise.all(Object.values(this.pendingIngestionPromises).map((x)=>x.catch(()=>{
                // ignore errors as we are shutting down and can't deal with them anyways.
                })));
            // flush again in case there are new events that were added while we were waiting for the pending promises to resolve
            await this.flushAsync();
        } catch (e) {
            console.error("[Langfuse SDK] Error while shutting down Langfuse", e);
        }
    }
    async _exportLocalEvents(projectId) {
        if (this.isLocalEventExportEnabled) {
            clearTimeout(this._flushTimer);
            await this.flushAsync();
            const events = this.localEventExportMap.get(projectId) ?? [];
            this.localEventExportMap.delete(projectId);
            return events;
        } else {
            this._events.emit("error", "Local event exports are disabled, but _exportLocalEvents() was called.");
            return [];
        }
    }
    shutdown() {
        console.warn("shutdown() is deprecated. It does not wait for all events to be processed. Please use shutdownAsync() instead.");
        void this.shutdownAsync();
    }
    async awaitAllQueuedAndPendingRequests() {
        clearTimeout(this._flushTimer);
        await this.flushAsync();
        await Promise.all(Object.values(this.pendingIngestionPromises));
    }
}
class LangfuseWebStateless extends LangfuseCoreStateless {
    constructor(params){
        const { flushAt, flushInterval, publicKey, enabled, ...rest } = params;
        let isObservabilityEnabled = enabled === false ? false : true;
        if (isObservabilityEnabled && !publicKey) {
            isObservabilityEnabled = false;
            console.warn("Langfuse public key not passed to constructor and not set as 'LANGFUSE_PUBLIC_KEY' environment variable. No observability data will be sent to Langfuse.");
        }
        super({
            ...rest,
            publicKey,
            flushAt: flushAt ?? 1,
            flushInterval: flushInterval ?? 0,
            enabled: isObservabilityEnabled
        });
    }
    async score(body) {
        this.scoreStateless(body);
        await this.awaitAllQueuedAndPendingRequests();
        return this;
    }
}
class LangfuseCore extends LangfuseCoreStateless {
    constructor(params){
        const { publicKey, secretKey, enabled, _isLocalEventExportEnabled } = params;
        let isObservabilityEnabled = enabled === false ? false : true;
        if (_isLocalEventExportEnabled) {
            isObservabilityEnabled = true;
        } else if (!isObservabilityEnabled) {
            console.warn("Langfuse is disabled. No observability data will be sent to Langfuse.");
        } else if (!secretKey) {
            isObservabilityEnabled = false;
            console.warn("Langfuse secret key was not passed to constructor or not set as 'LANGFUSE_SECRET_KEY' environment variable. No observability data will be sent to Langfuse.");
        } else if (!publicKey) {
            isObservabilityEnabled = false;
            console.warn("Langfuse public key was not passed to constructor or not set as 'LANGFUSE_PUBLIC_KEY' environment variable. No observability data will be sent to Langfuse.");
        }
        super({
            ...params,
            enabled: isObservabilityEnabled
        });
        this._promptCache = new LangfusePromptCache();
    }
    trace(body) {
        const id = this.traceStateless(body ?? {});
        const t = new LangfuseTraceClient(this, id);
        if (getEnv("DEFER") && body) {
            try {
                const deferRuntime = getEnv("__deferRuntime");
                if (deferRuntime) {
                    deferRuntime.langfuseTraces([
                        {
                            id: id,
                            name: body.name || "",
                            url: t.getTraceUrl()
                        }
                    ]);
                }
            } catch  {}
        }
        return t;
    }
    span(body) {
        const traceId = body.traceId || this.traceStateless({
            name: body.name
        });
        const id = this.spanStateless({
            ...body,
            traceId
        });
        return new LangfuseSpanClient(this, id, traceId);
    }
    generation(body) {
        const traceId = body.traceId || this.traceStateless({
            name: body.name
        });
        const id = this.generationStateless({
            ...body,
            traceId
        });
        return new LangfuseGenerationClient(this, id, traceId);
    }
    event(body) {
        const traceId = body.traceId || this.traceStateless({
            name: body.name
        });
        const id = this.eventStateless({
            ...body,
            traceId
        });
        return new LangfuseEventClient(this, id, traceId);
    }
    score(body) {
        this.scoreStateless(body);
        return this;
    }
    async getDataset(name, options) {
        const dataset = await this._getDataset(name);
        const items = [];
        let page = 1;
        while(true){
            const itemsResponse = await this._getDatasetItems({
                datasetName: name,
                limit: options?.fetchItemsPageSize ?? 50,
                page
            });
            items.push(...itemsResponse.data);
            if (itemsResponse.meta.totalPages <= page) {
                break;
            }
            page++;
        }
        const returnDataset = {
            ...dataset,
            description: dataset.description ?? undefined,
            metadata: dataset.metadata ?? undefined,
            items: items.map((item)=>({
                    ...item,
                    link: async (obj, runName, runArgs)=>{
                        await this.awaitAllQueuedAndPendingRequests();
                        const data = await this.createDatasetRunItem({
                            runName,
                            datasetItemId: item.id,
                            observationId: obj.observationId,
                            traceId: obj.traceId,
                            runDescription: runArgs?.description,
                            metadata: runArgs?.metadata
                        });
                        return data;
                    }
                }))
        };
        return returnDataset;
    }
    async createPrompt(body) {
        const labels = body.labels ?? [];
        const promptResponse = body.type === "chat" // necessary to get types right here
         ? await this.createPromptStateless({
            ...body,
            labels: body.isActive ? [
                ...new Set([
                    ...labels,
                    "production"
                ])
            ] : labels // backward compatibility for isActive
        }) : await this.createPromptStateless({
            ...body,
            type: body.type ?? "text",
            labels: body.isActive ? [
                ...new Set([
                    ...labels,
                    "production"
                ])
            ] : labels // backward compatibility for isActive
        });
        if (promptResponse.type === "chat") {
            return new ChatPromptClient(promptResponse);
        }
        return new TextPromptClient(promptResponse);
    }
    async updatePrompt(body) {
        const newPrompt = await this.updatePromptStateless(body);
        this._promptCache.invalidate(body.name);
        return newPrompt;
    }
    async getPrompt(name, version, options) {
        const cacheKey = this._getPromptCacheKey({
            name,
            version,
            label: options?.label
        });
        const cachedPrompt = this._promptCache.getIncludingExpired(cacheKey);
        if (!cachedPrompt || options?.cacheTtlSeconds === 0) {
            try {
                return await this._fetchPromptAndUpdateCache({
                    name,
                    version,
                    label: options?.label,
                    cacheTtlSeconds: options?.cacheTtlSeconds,
                    maxRetries: options?.maxRetries,
                    fetchTimeout: options?.fetchTimeoutMs
                });
            } catch (err) {
                if (options?.fallback) {
                    const sharedFallbackParams = {
                        name,
                        version: version ?? 0,
                        labels: options.label ? [
                            options.label
                        ] : [],
                        cacheTtlSeconds: options?.cacheTtlSeconds,
                        config: {},
                        tags: []
                    };
                    if (options.type === "chat") {
                        return new ChatPromptClient({
                            ...sharedFallbackParams,
                            type: "chat",
                            prompt: options.fallback
                        }, true);
                    } else {
                        return new TextPromptClient({
                            ...sharedFallbackParams,
                            type: "text",
                            prompt: options.fallback
                        }, true);
                    }
                }
                throw err;
            }
        }
        if (cachedPrompt.isExpired) {
            // If the cache is not currently being refreshed, start refreshing it and register the promise in the cache
            if (!this._promptCache.isRefreshing(cacheKey)) {
                const refreshPromptPromise = this._fetchPromptAndUpdateCache({
                    name,
                    version,
                    label: options?.label,
                    cacheTtlSeconds: options?.cacheTtlSeconds,
                    maxRetries: options?.maxRetries,
                    fetchTimeout: options?.fetchTimeoutMs
                }).catch(()=>{
                    console.warn(`Failed to refresh prompt cache '${cacheKey}', stale cache will be used until next refresh succeeds.`);
                });
                this._promptCache.addRefreshingPromise(cacheKey, refreshPromptPromise);
            }
            return cachedPrompt.value;
        }
        return cachedPrompt.value;
    }
    _getPromptCacheKey(params) {
        const { name, version, label } = params;
        const parts = [
            name
        ];
        if (version !== undefined) {
            parts.push("version:" + version.toString());
        } else if (label !== undefined) {
            parts.push("label:" + label);
        } else {
            parts.push("label:production");
        }
        return parts.join("-");
    }
    async _fetchPromptAndUpdateCache(params) {
        const cacheKey = this._getPromptCacheKey(params);
        try {
            const { name, version, cacheTtlSeconds, label, maxRetries, fetchTimeout } = params;
            const { data, fetchResult } = await this.getPromptStateless(name, version, label, maxRetries, fetchTimeout);
            if (fetchResult === "failure") {
                throw Error(data.message ?? "Internal error while fetching prompt");
            }
            let prompt;
            if (data.type === "chat") {
                prompt = new ChatPromptClient(data);
            } else {
                prompt = new TextPromptClient(data);
            }
            this._promptCache.set(cacheKey, prompt, cacheTtlSeconds);
            return prompt;
        } catch (error) {
            console.error(`[Langfuse SDK] Error while fetching prompt '${cacheKey}':`, error);
            throw error;
        }
    }
    async fetchMedia(id) {
        return await this._fetchMedia(id);
    }
    /**
   * Replaces the media reference strings in an object with base64 data URIs for the media content.
   *
   * This method recursively traverses an object (up to a maximum depth of 10) looking for media reference strings
   * in the format "@@@langfuseMedia:...@@@". When found, it fetches the actual media content using the provided
   * Langfuse client and replaces the reference string with a base64 data URI.
   *
   * If fetching media content fails for a reference string, a warning is logged and the reference string is left unchanged.
   *
   * @param params - Configuration object
   * @param params.obj - The object to process. Can be a primitive value, array, or nested object
   * @param params.langfuseClient - Langfuse client instance used to fetch media content
   * @param params.resolveWith - The representation of the media content to replace the media reference string with. Currently only "base64DataUri" is supported.
   * @param params.maxDepth - Optional. Default is 10. The maximum depth to traverse the object.
   *
   * @returns A deep copy of the input object with all media references replaced with base64 data URIs where possible
   *
   * @example
   * ```typescript
   * const obj = {
   *   image: "@@@langfuseMedia:type=image/jpeg|id=123|source=bytes@@@",
   *   nested: {
   *     pdf: "@@@langfuseMedia:type=application/pdf|id=456|source=bytes@@@"
   *   }
   * };
   *
   * const result = await LangfuseMedia.resolveMediaReferences({
   *   obj,
   *   langfuseClient
   * });
   *
   * // Result:
   * // {
   * //   image: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
   * //   nested: {
   * //     pdf: "data:application/pdf;base64,JVBERi0xLjcK..."
   * //   }
   * // }
   * ```
   */ async resolveMediaReferences(params) {
        const { obj, ...rest } = params;
        return LangfuseMedia.resolveMediaReferences({
            ...rest,
            langfuseClient: this,
            obj
        });
    }
    _updateSpan(body) {
        this.updateSpanStateless(body);
        return this;
    }
    _updateGeneration(body) {
        this.updateGenerationStateless(body);
        return this;
    }
}
class LangfuseObjectClient {
    constructor({ client, id, traceId, observationId }){
        this.client = client;
        this.id = id;
        this.traceId = traceId;
        this.observationId = observationId;
    }
    event(body) {
        return this.client.event({
            ...body,
            traceId: this.traceId,
            parentObservationId: this.observationId
        });
    }
    span(body) {
        return this.client.span({
            ...body,
            traceId: this.traceId,
            parentObservationId: this.observationId
        });
    }
    generation(body) {
        return this.client.generation({
            ...body,
            traceId: this.traceId,
            parentObservationId: this.observationId
        });
    }
    score(body) {
        this.client.score({
            ...body,
            traceId: this.traceId,
            observationId: this.observationId
        });
        return this;
    }
    getTraceUrl() {
        return `${this.client.baseUrl}/trace/${this.traceId}`;
    }
}
class LangfuseTraceClient extends LangfuseObjectClient {
    constructor(client, traceId){
        super({
            client,
            id: traceId,
            traceId,
            observationId: null
        });
    }
    update(body) {
        this.client.trace({
            ...body,
            id: this.id
        });
        return this;
    }
}
class LangfuseObservationClient extends LangfuseObjectClient {
    constructor(client, id, traceId){
        super({
            client,
            id,
            traceId,
            observationId: id
        });
    }
}
class LangfuseSpanClient extends LangfuseObservationClient {
    constructor(client, id, traceId){
        super(client, id, traceId);
    }
    update(body) {
        this.client._updateSpan({
            ...body,
            id: this.id,
            traceId: this.traceId
        });
        return this;
    }
    end(body) {
        this.client._updateSpan({
            ...body,
            id: this.id,
            traceId: this.traceId,
            endTime: new Date()
        });
        return this;
    }
}
class LangfuseGenerationClient extends LangfuseObservationClient {
    constructor(client, id, traceId){
        super(client, id, traceId);
    }
    update(body) {
        this.client._updateGeneration({
            ...body,
            id: this.id,
            traceId: this.traceId
        });
        return this;
    }
    end(body) {
        this.client._updateGeneration({
            ...body,
            id: this.id,
            traceId: this.traceId,
            endTime: new Date()
        });
        return this;
    }
}
class LangfuseEventClient extends LangfuseObservationClient {
    constructor(client, id, traceId){
        super(client, id, traceId);
    }
}
 //# sourceMappingURL=index.mjs.map

;// ../../node_modules/langfuse/lib/index.mjs


// Methods partially borrowed from quirksmode.org/js/cookies.html
const cookieStore = {
    getItem (key) {
        try {
            const nameEQ = key + "=";
            const ca = document.cookie.split(";");
            for(let i = 0; i < ca.length; i++){
                let c = ca[i];
                while(c.charAt(0) == " "){
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
            }
        } catch (err) {}
        return null;
    },
    setItem (key, value) {
        try {
            const cdomain = "", expires = "", secure = "";
            const new_cookie_val = key + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
            document.cookie = new_cookie_val;
        } catch (err) {
            return;
        }
    },
    removeItem (name) {
        try {
            cookieStore.setItem(name, "");
        } catch (err) {
            return;
        }
    },
    clear () {
        document.cookie = "";
    },
    getAllKeys () {
        const ca = document.cookie.split(";");
        const keys = [];
        for(let i = 0; i < ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) == " "){
                c = c.substring(1, c.length);
            }
            keys.push(c.split("=")[0]);
        }
        return keys;
    }
};
const createStorageLike = (store)=>{
    return {
        getItem (key) {
            return store.getItem(key);
        },
        setItem (key, value) {
            store.setItem(key, value);
        },
        removeItem (key) {
            store.removeItem(key);
        },
        clear () {
            store.clear();
        },
        getAllKeys () {
            const keys = [];
            for(const key in localStorage){
                keys.push(key);
            }
            return keys;
        }
    };
};
const checkStoreIsSupported = (storage, key = "__mplssupport__")=>{
    if (!window) {
        return false;
    }
    try {
        const val = "xyz";
        storage.setItem(key, val);
        if (storage.getItem(key) !== val) {
            return false;
        }
        storage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};
let localStore = undefined;
let sessionStore = undefined;
const createMemoryStorage = ()=>{
    const _cache = {};
    const store = {
        getItem (key) {
            return _cache[key];
        },
        setItem (key, value) {
            _cache[key] = value !== null ? value : undefined;
        },
        removeItem (key) {
            delete _cache[key];
        },
        clear () {
            for(const key in _cache){
                delete _cache[key];
            }
        },
        getAllKeys () {
            const keys = [];
            for(const key in _cache){
                keys.push(key);
            }
            return keys;
        }
    };
    return store;
};
const getStorage = (type, window1)=>{
    if (typeof window1 !== undefined && window1) {
        if (!localStorage) {
            const _localStore = createStorageLike(window1.localStorage);
            localStore = checkStoreIsSupported(_localStore) ? _localStore : undefined;
        }
        if (!sessionStore) {
            const _sessionStore = createStorageLike(window1.sessionStorage);
            sessionStore = checkStoreIsSupported(_sessionStore) ? _sessionStore : undefined;
        }
    }
    switch(type){
        case "cookie":
            return cookieStore || localStore || sessionStore || createMemoryStorage();
        case "localStorage":
            return localStore || sessionStore || createMemoryStorage();
        case "sessionStorage":
            return sessionStore || createMemoryStorage();
        case "memory":
            return createMemoryStorage();
        default:
            return createMemoryStorage();
    }
};
var version = "3.33.1";
class Langfuse extends LangfuseCore {
    constructor(params){
        const langfuseConfig = utils.configLangfuseSDK(params);
        super(langfuseConfig);
        if (false) {} else {
            this._storageKey = `lf_${langfuseConfig.publicKey}_langfuse`;
            this._storage = getStorage("memory", undefined);
        }
    }
    getPersistedProperty(key) {
        if (!this._storageCache) {
            this._storageCache = JSON.parse(this._storage.getItem(this._storageKey) || "{}") || {};
        }
        return this._storageCache[key];
    }
    setPersistedProperty(key, value) {
        if (!this._storageCache) {
            this._storageCache = JSON.parse(this._storage.getItem(this._storageKey) || "{}") || {};
        }
        if (value === null) {
            delete this._storageCache[key];
        } else {
            this._storageCache[key] = value;
        }
        this._storage.setItem(this._storageKey, JSON.stringify(this._storageCache));
    }
    fetch(url, options) {
        return fetch(url, options);
    }
    getLibraryId() {
        return "langfuse";
    }
    getLibraryVersion() {
        return version;
    }
    getCustomUserAgent() {
        return;
    }
}
class LangfuseWeb extends LangfuseWebStateless {
    constructor(params){
        const langfuseConfig = utils.configLangfuseSDK(params, false);
        super(langfuseConfig);
        if (false) {} else {
            this._storageKey = `lf_${langfuseConfig.publicKey}_langfuse`;
            this._storage = getStorage("memory", undefined);
        }
    }
    getPersistedProperty(key) {
        if (!this._storageCache) {
            this._storageCache = JSON.parse(this._storage.getItem(this._storageKey) || "{}") || {};
        }
        return this._storageCache[key];
    }
    setPersistedProperty(key, value) {
        if (!this._storageCache) {
            this._storageCache = JSON.parse(this._storage.getItem(this._storageKey) || "{}") || {};
        }
        if (value === null) {
            delete this._storageCache[key];
        } else {
            this._storageCache[key] = value;
        }
        this._storage.setItem(this._storageKey, JSON.stringify(this._storageCache));
    }
    fetch(url, options) {
        return fetch(url, options);
    }
    getLibraryId() {
        return "langfuse-frontend";
    }
    getLibraryVersion() {
        return version;
    }
    getCustomUserAgent() {
        return;
    }
}
/**
 * Represents a singleton instance of the Langfuse client.
 */ class LangfuseSingleton {
    /**
   * Returns the singleton instance of the Langfuse client.
   * @param params Optional parameters for initializing the Langfuse instance. Only used for the first call.
   * @returns The singleton instance of the Langfuse client.
   */ static getInstance(params) {
        if (!LangfuseSingleton.instance) {
            LangfuseSingleton.instance = new Langfuse(params);
        }
        return LangfuseSingleton.instance;
    }
}
LangfuseSingleton.instance = null; // Lazy initialization
const parseInputArgs = (args)=>{
    let params = {};
    params = {
        frequency_penalty: args.frequency_penalty,
        logit_bias: args.logit_bias,
        logprobs: args.logprobs,
        max_tokens: args.max_tokens,
        n: args.n,
        presence_penalty: args.presence_penalty,
        seed: args.seed,
        stop: args.stop,
        stream: args.stream,
        temperature: args.temperature,
        top_p: args.top_p,
        user: args.user,
        response_format: args.response_format,
        top_logprobs: args.top_logprobs
    };
    let input;
    if (args && typeof args === "object" && !Array.isArray(args) && "messages" in args) {
        input = {};
        input.messages = args.messages;
        if ("function_call" in args) {
            input.function_call = args.function_call;
        }
        if ("functions" in args) {
            input.functions = args.functions;
        }
        if ("tools" in args) {
            input.tools = args.tools;
        }
        if ("tool_choice" in args) {
            input.tool_choice = args.tool_choice;
        }
    } else {
        input = args.prompt;
    }
    return {
        model: args.model,
        input: input,
        modelParameters: params
    };
};
const parseCompletionOutput = (res)=>{
    if (!(res instanceof Object && "choices" in res && Array.isArray(res.choices))) {
        return "";
    }
    return "message" in res.choices[0] ? res.choices[0].message : res.choices[0].text ?? "";
};
const parseUsage = (res)=>{
    if (hasCompletionUsage(res)) {
        const { prompt_tokens, completion_tokens, total_tokens } = res.usage;
        return {
            input: prompt_tokens,
            output: completion_tokens,
            total: total_tokens
        };
    }
};
const parseUsageDetails = (completionUsage)=>{
    const { prompt_tokens, completion_tokens, total_tokens, completion_tokens_details, prompt_tokens_details } = completionUsage;
    return {
        input: prompt_tokens,
        output: completion_tokens,
        total: total_tokens,
        ...Object.fromEntries(Object.entries(prompt_tokens_details ?? {}).map(([key, value])=>[
                `input_${key}`,
                value
            ])),
        ...Object.fromEntries(Object.entries(completion_tokens_details ?? {}).map(([key, value])=>[
                `output_${key}`,
                value
            ]))
    };
};
const parseUsageDetailsFromResponse = (res)=>{
    if (hasCompletionUsage(res)) {
        return parseUsageDetails(res.usage);
    }
};
const parseChunk = (rawChunk)=>{
    let isToolCall = false;
    const _chunk = rawChunk;
    const chunkData = _chunk?.choices?.[0];
    try {
        if ("delta" in chunkData && "tool_calls" in chunkData.delta && Array.isArray(chunkData.delta.tool_calls)) {
            isToolCall = true;
            return {
                isToolCall,
                data: chunkData.delta.tool_calls[0]
            };
        }
        if ("delta" in chunkData) {
            return {
                isToolCall,
                data: chunkData.delta?.content || ""
            };
        }
        if ("text" in chunkData) {
            return {
                isToolCall,
                data: chunkData.text || ""
            };
        }
    } catch (e) {}
    return {
        isToolCall: false,
        data: ""
    };
};
// Type guard to check if an unknown object is a UsageResponse
function hasCompletionUsage(obj) {
    return obj instanceof Object && "usage" in obj && obj.usage instanceof Object && typeof obj.usage.prompt_tokens === "number" && typeof obj.usage.completion_tokens === "number" && typeof obj.usage.total_tokens === "number";
}
const getToolCallOutput = (toolCallChunks)=>{
    let name = "";
    let toolArguments = "";
    for (const toolCall of toolCallChunks){
        name = toolCall.function?.name || name;
        toolArguments += toolCall.function?.arguments || "";
    }
    return {
        tool_calls: [
            {
                function: {
                    name,
                    arguments: toolArguments
                }
            }
        ]
    };
};
const isAsyncIterable = (x)=>x != null && typeof x === "object" && typeof x[Symbol.asyncIterator] === "function";
const withTracing = (tracedMethod, config)=>{
    return (...args)=>wrapMethod(tracedMethod, config, ...args);
};
const wrapMethod = async (tracedMethod, config, ...args)=>{
    const { model, input, modelParameters } = parseInputArgs(args[0] ?? {});
    const finalModelParams = {
        ...modelParameters,
        response_format: undefined
    };
    const finalMetadata = {
        ...config?.metadata,
        response_format: "response_format" in modelParameters ? modelParameters.response_format : undefined
    };
    let observationData = {
        model,
        input,
        modelParameters: finalModelParams,
        name: config?.generationName,
        startTime: new Date(),
        promptName: config?.langfusePrompt?.name,
        promptVersion: config?.langfusePrompt?.version,
        metadata: finalMetadata
    };
    let langfuseParent;
    const hasUserProvidedParent = config && "parent" in config;
    if (hasUserProvidedParent) {
        langfuseParent = config.parent;
        // Remove the parent from the config to avoid circular references in the generation body
        const filteredConfig = {
            ...config,
            parent: undefined
        };
        observationData = {
            ...filteredConfig,
            ...observationData,
            promptName: config?.promptName ?? config?.langfusePrompt?.name,
            // Maintain backward compatibility for users who use promptName
            promptVersion: config?.promptVersion ?? config?.langfusePrompt?.version // Maintain backward compatibility for users who use promptVersion
        };
    } else {
        const langfuse = LangfuseSingleton.getInstance(config?.clientInitParams);
        langfuseParent = langfuse.trace({
            ...config,
            ...observationData,
            id: config?.traceId,
            name: config?.traceName,
            timestamp: observationData.startTime
        });
    }
    try {
        const res = await tracedMethod(...args);
        // Handle stream responses
        if (isAsyncIterable(res)) {
            async function* tracedOutputGenerator() {
                const response = res;
                const textChunks = [];
                const toolCallChunks = [];
                let completionStartTime = null;
                let usage = null;
                for await (const rawChunk of response){
                    completionStartTime = completionStartTime ?? new Date();
                    if (typeof rawChunk === "object" && rawChunk != null && "usage" in rawChunk) {
                        usage = rawChunk.usage;
                    }
                    const processedChunk = parseChunk(rawChunk);
                    if (!processedChunk.isToolCall) {
                        textChunks.push(processedChunk.data);
                    } else {
                        toolCallChunks.push(processedChunk.data);
                    }
                    yield rawChunk;
                }
                const output = toolCallChunks.length > 0 ? getToolCallOutput(toolCallChunks) : textChunks.join("");
                langfuseParent.generation({
                    ...observationData,
                    output,
                    endTime: new Date(),
                    completionStartTime,
                    usage: usage ? {
                        input: "prompt_tokens" in usage ? usage.prompt_tokens : undefined,
                        output: "completion_tokens" in usage ? usage.completion_tokens : undefined,
                        total: "total_tokens" in usage ? usage.total_tokens : undefined
                    } : undefined,
                    usageDetails: usage ? parseUsageDetails(usage) : undefined
                });
                if (!hasUserProvidedParent) {
                    langfuseParent.update({
                        output
                    });
                }
            }
            return tracedOutputGenerator();
        }
        const output = parseCompletionOutput(res);
        const usage = parseUsage(res);
        const usageDetails = parseUsageDetailsFromResponse(res);
        langfuseParent.generation({
            ...observationData,
            output,
            endTime: new Date(),
            usage,
            usageDetails
        });
        if (!hasUserProvidedParent) {
            langfuseParent.update({
                output
            });
        }
        return res;
    } catch (error) {
        langfuseParent.generation({
            ...observationData,
            endTime: new Date(),
            statusMessage: String(error),
            level: "ERROR",
            usage: {
                inputCost: 0,
                outputCost: 0,
                totalCost: 0
            },
            costDetails: {
                input: 0,
                output: 0,
                total: 0
            }
        });
        throw error;
    }
};
/**
 * Wraps an OpenAI SDK object with Langfuse tracing. Function calls are extended with a tracer that logs detailed information about the call, including the method name,
 * input parameters, and output.
 *
 * @param {T} sdk - The OpenAI SDK object to be wrapped.
 * @param {LangfuseConfig} [langfuseConfig] - Optional configuration object for the wrapper.
 * @param {string} [langfuseConfig.traceName] - The name to use for tracing. If not provided, a default name based on the SDK's constructor name and the method name will be used.
 * @param {string} [langfuseConfig.sessionId] - Optional session ID for tracing.
 * @param {string} [langfuseConfig.userId] - Optional user ID for tracing.
 * @param {string} [langfuseConfig.release] - Optional release version for tracing.
 * @param {string} [langfuseConfig.version] - Optional version for tracing.
 * @param {string} [langfuseConfig.metadata] - Optional metadata for tracing.
 * @param {string} [langfuseConfig.tags] - Optional tags for tracing.
 * @returns {T} - A proxy of the original SDK object with methods wrapped for tracing.
 *
 * @example
 * const client = new OpenAI();
 * const res = observeOpenAI(client, { traceName: "My.OpenAI.Chat.Trace" }).chat.completions.create({
 *      messages: [{ role: "system", content: "Say this is a test!" }],
        model: "gpt-3.5-turbo",
        user: "langfuse",
        max_tokens: 300
 * });
 * */ const observeOpenAI = (sdk, langfuseConfig)=>{
    return new Proxy(sdk, {
        get (wrappedSdk, propKey, proxy) {
            const originalProperty = wrappedSdk[propKey];
            const defaultGenerationName = `${sdk.constructor?.name}.${propKey.toString()}`;
            const generationName = langfuseConfig?.generationName ?? defaultGenerationName;
            const traceName = langfuseConfig && "traceName" in langfuseConfig ? langfuseConfig.traceName : generationName;
            const config = {
                ...langfuseConfig,
                generationName,
                traceName
            };
            // Add a flushAsync method to the OpenAI SDK that flushes the Langfuse client
            if (propKey === "flushAsync") {
                let langfuseClient;
                // Flush the correct client depending on whether a parent client is provided
                if (langfuseConfig && "parent" in langfuseConfig) {
                    langfuseClient = langfuseConfig.parent.client;
                } else {
                    langfuseClient = LangfuseSingleton.getInstance();
                }
                return langfuseClient.flushAsync.bind(langfuseClient);
            }
            // Add a shutdownAsync method to the OpenAI SDK that flushes the Langfuse client
            if (propKey === "shutdownAsync") {
                let langfuseClient;
                // Flush the correct client depending on whether a parent client is provided
                if (langfuseConfig && "parent" in langfuseConfig) {
                    langfuseClient = langfuseConfig.parent.client;
                } else {
                    langfuseClient = LangfuseSingleton.getInstance();
                }
                return langfuseClient.shutdownAsync.bind(langfuseClient);
            }
            // Trace methods of the OpenAI SDK
            if (typeof originalProperty === "function") {
                return withTracing(originalProperty.bind(wrappedSdk), config);
            }
            const isNestedOpenAIObject = originalProperty && !Array.isArray(originalProperty) && !(originalProperty instanceof Date) && typeof originalProperty === "object";
            // Recursively wrap nested objects to ensure all nested properties or methods are also traced
            if (isNestedOpenAIObject) {
                return observeOpenAI(originalProperty, config);
            }
            // Fallback to returning the original value
            return Reflect.get(wrappedSdk, propKey, proxy);
        }
    });
};
 //# sourceMappingURL=index.mjs.map

;// ../../node_modules/langfuse-vercel/lib/index.mjs


class LangfuseExporter {
  constructor(params = {}) {
    this.debug = params.debug ?? false;
    if (!LangfuseExporter.langfuse) {
      LangfuseExporter.langfuse = new Langfuse({
        ...params,
        persistence: "memory",
        sdkIntegration: "vercel-ai-sdk"
      });
      if (this.debug) {
        LangfuseExporter.langfuse.debug();
      }
    }
    this.langfuse = LangfuseExporter.langfuse; // store reference to singleton instance
  }
  export(allSpans, resultCallback) {
    this.logDebug("exporting spans", allSpans);
    try {
      const traceSpanMap = new Map();
      for (const span of allSpans) {
        if (!this.isAiSdkSpan(span)) {
          this.logDebug("Ignoring non-AI SDK span", span.name);
          continue;
        }
        const traceId = span.spanContext().traceId;
        traceSpanMap.set(traceId, (traceSpanMap.get(traceId) ?? []).concat(span));
      }
      for (const [traceId, spans] of traceSpanMap) {
        this.processTraceSpans(traceId, spans);
      }
      const successCode = 0; // Do not use enum directly to avoid adding a dependency on the enum
      resultCallback({
        code: successCode
      });
    } catch (err) {
      const failureCode = 1; // Do not use enum directly to avoid adding a dependency on the enum
      resultCallback({
        code: failureCode,
        error: err instanceof Error ? err : new Error("Unknown error")
      });
    }
  }
  processTraceSpans(traceId, spans) {
    const rootSpan = spans.find(span => this.isRootAiSdkSpan(span, spans));
    if (!rootSpan) {
      this.logDebug("No root span found with AI SDK spans, skipping trace");
      return;
    }
    const userProvidedTraceId = this.parseTraceId(spans);
    const finalTraceId = userProvidedTraceId ?? traceId;
    const langfusePrompt = this.parseLangfusePromptTraceAttribute(spans);
    const updateParent = this.parseLangfuseUpdateParentTraceAttribute(spans);
    const traceParams = {
      userId: this.parseUserIdTraceAttribute(spans),
      sessionId: this.parseSessionIdTraceAttribute(spans),
      tags: this.parseTagsTraceAttribute(spans).length > 0 ? this.parseTagsTraceAttribute(spans) : undefined,
      name: this.parseTraceName(spans) ?? rootSpan?.name,
      input: this.parseInput(rootSpan),
      output: this.parseOutput(rootSpan),
      metadata: this.filterTraceAttributes(this.parseMetadataTraceAttribute(spans))
    };
    const finalTraceParams = {
      id: finalTraceId,
      ...(updateParent ? traceParams : {})
    };
    this.langfuse.trace(finalTraceParams);
    for (const span of spans) {
      if (this.isGenerationSpan(span)) {
        this.processSpanAsLangfuseGeneration(finalTraceId, span, this.isRootAiSdkSpan(span, spans), langfusePrompt);
      } else {
        this.processSpanAsLangfuseSpan(finalTraceId, span, this.isRootAiSdkSpan(span, spans), userProvidedTraceId ? this.parseTraceName(spans) : undefined);
      }
    }
  }
  processSpanAsLangfuseSpan(traceId, span, isRootSpan, rootSpanName) {
    const spanContext = span.spanContext();
    const attributes = span.attributes;
    this.langfuse.span({
      traceId,
      parentObservationId: isRootSpan ? undefined : span.parentSpanId,
      id: spanContext.spanId,
      name: isRootSpan && rootSpanName ? rootSpanName : "ai.toolCall.name" in attributes ? "ai.toolCall " + attributes["ai.toolCall.name"]?.toString() : span.name,
      startTime: this.hrTimeToDate(span.startTime),
      endTime: this.hrTimeToDate(span.endTime),
      input: this.parseInput(span),
      output: this.parseOutput(span),
      metadata: this.filterTraceAttributes(this.parseSpanMetadata(span))
    });
  }
  processSpanAsLangfuseGeneration(traceId, span, isRootSpan, langfusePrompt) {
    const spanContext = span.spanContext();
    const attributes = span.attributes;
    this.langfuse.generation({
      traceId,
      parentObservationId: isRootSpan ? undefined : span.parentSpanId,
      id: spanContext.spanId,
      name: span.name,
      startTime: this.hrTimeToDate(span.startTime),
      endTime: this.hrTimeToDate(span.endTime),
      completionStartTime: "ai.response.msToFirstChunk" in attributes ? new Date(this.hrTimeToDate(span.startTime).getTime() + Number(attributes["ai.response.msToFirstChunk"])) : "ai.response.msToFirstChunk" in attributes ? new Date(this.hrTimeToDate(span.startTime).getTime() + Number(attributes["ai.response.msToFirstChunk"])) : "ai.stream.msToFirstChunk" in attributes //  Legacy support for ai SDK versions < 4.0.0
      ? new Date(this.hrTimeToDate(span.startTime).getTime() + Number(attributes["ai.stream.msToFirstChunk"])) : undefined,
      model: "ai.response.model" in attributes ? attributes["ai.response.model"]?.toString() : "gen_ai.request.model" in attributes ? attributes["gen_ai.request.model"]?.toString() : "ai.model.id" in attributes ? attributes["ai.model.id"]?.toString() : undefined,
      modelParameters: {
        toolChoice: "ai.prompt.toolChoice" in attributes ? attributes["ai.prompt.toolChoice"]?.toString() : undefined,
        maxTokens: "gen_ai.request.max_tokens" in attributes ? attributes["gen_ai.request.max_tokens"]?.toString() : undefined,
        finishReason: "gai.response.finishReason" in attributes ? attributes["ai.response.finishReason"]?.toString() : "gen_ai.finishReason" in attributes //  Legacy support for ai SDK versions < 4.0.0
        ? attributes["gen_ai.finishReason"]?.toString() : undefined,
        system: "gen_ai.system" in attributes ? attributes["gen_ai.system"]?.toString() : "ai.model.provider" in attributes ? attributes["ai.model.provider"]?.toString() : undefined,
        maxRetries: "ai.settings.maxRetries" in attributes ? attributes["ai.settings.maxRetries"]?.toString() : undefined,
        mode: "ai.settings.mode" in attributes ? attributes["ai.settings.mode"]?.toString() : undefined
      },
      usage: {
        input: "gen_ai.usage.prompt_tokens" in attributes // Backward compat, input_tokens used in latest ai SDK versions
        ? parseInt(attributes["gen_ai.usage.prompt_tokens"]?.toString() ?? "0") : "gen_ai.usage.input_tokens" in attributes ? parseInt(attributes["gen_ai.usage.input_tokens"]?.toString() ?? "0") : undefined,
        output: "gen_ai.usage.completion_tokens" in attributes // Backward compat, output_tokens used in latest ai SDK versions
        ? parseInt(attributes["gen_ai.usage.completion_tokens"]?.toString() ?? "0") : "gen_ai.usage.output_tokens" in attributes ? parseInt(attributes["gen_ai.usage.output_tokens"]?.toString() ?? "0") : undefined,
        total: "ai.usage.tokens" in attributes ? parseInt(attributes["ai.usage.tokens"]?.toString() ?? "0") : undefined
      },
      input: this.parseInput(span),
      output: this.parseOutput(span),
      metadata: this.filterTraceAttributes(this.parseSpanMetadata(span)),
      prompt: langfusePrompt
    });
  }
  parseSpanMetadata(span) {
    return Object.entries(span.attributes).reduce((acc, [key, value]) => {
      const metadataPrefix = "ai.telemetry.metadata.";
      if (key.startsWith(metadataPrefix) && value != null) {
        const strippedKey = key.slice(metadataPrefix.length);
        acc[strippedKey] = value;
      }
      const spanKeysToAdd = ["ai.settings.maxToolRoundtrips", "ai.prompt.format", "ai.toolCall.id", "ai.schema"];
      if (spanKeysToAdd.includes(key) && value != null) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
  isGenerationSpan(span) {
    const generationSpanNameParts = ["doGenerate", "doStream", "doEmbed"];
    return generationSpanNameParts.some(part => span.name.includes(part));
  }
  isAiSdkSpan(span) {
    return span.instrumentationLibrary.name === "ai";
  }
  /**
   * Checks if a given span is the root AI SDK span in a trace.
   * The root AI span is the span that has no parent span or its parent span is not part of the AI SDK.
   *
   * @param span - The span to check.
   * @param spans - The list of all spans in the trace.
   * @returns A boolean indicating whether the span is the root AI SDK span.
   */
  isRootAiSdkSpan(span, spans) {
    const spanIds = new Set(spans.map(span => span.spanContext().spanId));
    return !span.parentSpanId || !spanIds.has(span.parentSpanId);
  }
  logDebug(message, ...args) {
    if (!this.debug) {
      return;
    }
    console.log(`[${new Date().toISOString()}] [LangfuseExporter] ${message}`, ...args);
  }
  hrTimeToDate(hrtime) {
    const nanoSeconds = hrtime[0] * 1e9 + hrtime[1];
    const milliSeconds = nanoSeconds / 1e6;
    return new Date(milliSeconds);
  }
  async forceFlush() {
    this.logDebug("Force flushing Langfuse...");
    await this.langfuse.flushAsync();
  }
  async shutdown() {
    this.logDebug("Shutting down Langfuse...");
    await this.langfuse.shutdownAsync();
  }
  parseInput(span) {
    const attributes = span.attributes;
    const tools = "ai.prompt.tools" in attributes ? attributes["ai.prompt.tools"] : [];
    let chatMessages = [];
    if ("ai.prompt.messages" in attributes) {
      chatMessages = [attributes["ai.prompt.messages"]];
      try {
        chatMessages = JSON.parse(attributes["ai.prompt.messages"]);
      } catch (e) {
        console.error("Error parsing ai.prompt.messages", e);
      }
    }
    return "ai.prompt.messages" in attributes ? [...chatMessages, ...(Array.isArray(tools) ? tools : [])] : "ai.prompt" in attributes ? attributes["ai.prompt"] : "ai.toolCall.args" in attributes ? attributes["ai.toolCall.args"] : undefined;
  }
  parseOutput(span) {
    const attributes = span.attributes;
    return "ai.response.text" in attributes ? attributes["ai.response.text"] : "ai.result.text" in attributes // Legacy support for ai SDK versions < 4.0.0
    ? attributes["ai.result.text"] : "ai.toolCall.result" in attributes ? attributes["ai.toolCall.result"] : "ai.response.object" in attributes ? attributes["ai.response.object"] : "ai.result.object" in attributes // Legacy support for ai SDK versions < 4.0.0
    ? attributes["ai.result.object"] : "ai.response.toolCalls" in attributes ? attributes["ai.response.toolCalls"] : "ai.result.toolCalls" in attributes // Legacy support for ai SDK versions < 4.0.0
    ? attributes["ai.result.toolCalls"] : undefined;
  }
  parseTraceId(spans) {
    return spans.map(span => this.parseSpanMetadata(span)["langfuseTraceId"]).find(id => Boolean(id))?.toString();
  }
  parseTraceName(spans) {
    return spans.map(span => span.attributes["resource.name"]).find(name => Boolean(name))?.toString();
  }
  parseUserIdTraceAttribute(spans) {
    return spans.map(span => this.parseSpanMetadata(span)["userId"]).find(id => Boolean(id))?.toString();
  }
  parseSessionIdTraceAttribute(spans) {
    return spans.map(span => this.parseSpanMetadata(span)["sessionId"]).find(id => Boolean(id))?.toString();
  }
  parseLangfusePromptTraceAttribute(spans) {
    const jsonPrompt = spans.map(span => this.parseSpanMetadata(span)["langfusePrompt"]).find(prompt => Boolean(prompt));
    try {
      if (jsonPrompt) {
        const parsedPrompt = JSON.parse(jsonPrompt.toString());
        if (typeof parsedPrompt !== "object" || !(parsedPrompt["name"] && parsedPrompt["version"] && typeof parsedPrompt["isFallback"] === "boolean")) {
          throw Error("Invalid langfusePrompt");
        }
        return parsedPrompt;
      }
    } catch (e) {
      return undefined;
    }
  }
  parseLangfuseUpdateParentTraceAttribute(spans) {
    return Boolean(spans.map(span => this.parseSpanMetadata(span)["langfuseUpdateParent"]).find(val => val != null) ?? true // default to true if no attribute is set
    );
  }
  parseTagsTraceAttribute(spans) {
    return [...new Set(spans.map(span => this.parseSpanMetadata(span)["tags"]).filter(tags => Array.isArray(tags) && tags.every(tag => typeof tag === "string")).reduce((acc, tags) => acc.concat(tags), []))];
  }
  parseMetadataTraceAttribute(spans) {
    return spans.reduce((acc, span) => {
      const metadata = this.parseSpanMetadata(span);
      for (const [key, value] of Object.entries(metadata)) {
        if (value) {
          acc[key] = value;
        }
      }
      return acc;
    }, {});
  }
  filterTraceAttributes(obj) {
    const langfuseTraceAttributes = ["userId", "sessionId", "tags", "langfuseTraceId", "langfusePrompt", "langfuseUpdateParent"];
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!langfuseTraceAttributes.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
}
LangfuseExporter.langfuse = null; // Singleton instance


//# sourceMappingURL=index.mjs.map

;// ../../node_modules/@t3-oss/env-core/dist/index.js
/** The Standard Schema interface. */ function parseWithDictionary(dictionary, value) {
    const result = {};
    const issues = [];
    for(const key in dictionary){
        const schema = dictionary[key];
        const prop = value[key];
        const propResult = schema["~standard"].validate(prop);
        if (propResult instanceof Promise) {
            throw new Error(`Validation must be synchronous, but ${key} returned a Promise.`);
        }
        if (propResult.issues) {
            issues.push(...propResult.issues.map((issue)=>({
                    ...issue,
                    path: [
                        key,
                        ...issue.path ?? []
                    ]
                })));
            continue;
        }
        result[key] = propResult.value;
    }
    if (issues.length) {
        return {
            issues
        };
    }
    return {
        value: result
    };
}

function createEnv(opts) {
    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;
    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;
    if (emptyStringAsUndefined) {
        for (const [key, value] of Object.entries(runtimeEnv)){
            if (value === "") {
                delete runtimeEnv[key];
            }
        }
    }
    const skip = !!opts.skipValidation;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    if (skip) return runtimeEnv;
    const _client = typeof opts.client === "object" ? opts.client : {};
    const _server = typeof opts.server === "object" ? opts.server : {};
    const _shared = typeof opts.shared === "object" ? opts.shared : {};
    const isServer = opts.isServer ?? (typeof window === "undefined" || "Deno" in window);
    const finalSchema = isServer ? {
        ..._server,
        ..._shared,
        ..._client
    } : {
        ..._client,
        ..._shared
    };
    const parsed = parseWithDictionary(finalSchema, runtimeEnv);
    const onValidationError = opts.onValidationError ?? ((issues)=>{
        console.error("❌ Invalid environment variables:", issues);
        throw new Error("Invalid environment variables");
    });
    const onInvalidAccess = opts.onInvalidAccess ?? (()=>{
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    });
    if (parsed.issues) {
        return onValidationError(parsed.issues);
    }
    const isServerAccess = (prop)=>{
        if (!opts.clientPrefix) return true;
        return !prop.startsWith(opts.clientPrefix) && !(prop in _shared);
    };
    const isValidServerAccess = (prop)=>{
        return isServer || !isServerAccess(prop);
    };
    const ignoreProp = (prop)=>{
        return prop === "__esModule" || prop === "$$typeof";
    };
    const extendedObj = (opts.extends ?? []).reduce((acc, curr)=>{
        return Object.assign(acc, curr);
    }, {});
    const fullObj = Object.assign(parsed.value, extendedObj);
    const env = new Proxy(fullObj, {
        get (target, prop) {
            if (typeof prop !== "string") return undefined;
            if (ignoreProp(prop)) return undefined;
            if (!isValidServerAccess(prop)) return onInvalidAccess(prop);
            return Reflect.get(target, prop);
        }
    });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return env;
}



;// ../../node_modules/@t3-oss/env-nextjs/dist/index.js


const CLIENT_PREFIX = "NEXT_PUBLIC_";
function dist_createEnv(opts) {
    const client = typeof opts.client === "object" ? opts.client : {};
    const server = typeof opts.server === "object" ? opts.server : {};
    const shared = opts.shared;
    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {
        ...process.env,
        ...opts.experimental__runtimeEnv
    };
    return createEnv({
        ...opts,
        shared,
        client,
        server,
        clientPrefix: CLIENT_PREFIX,
        runtimeEnv
    });
}



;// ../../node_modules/zod/lib/index.mjs
var util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap, // contextual error map is first priority
            ctx.schemaErrorMap, // then schema-bound map if available
            overrideMap, // then global override map
            overrideMap === errorMap ? undefined : errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

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

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        var _a, _b;
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async,
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({ data, path: [], parent: ctx });
                return isValid(result)
                    ? {
                        value: result.value,
                    }
                    : {
                        issues: ctx.common.issues,
                    };
            }
            catch (err) {
                if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true,
                };
            }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
            ? {
                value: result.value,
            }
            : {
                issues: ctx.common.issues,
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data) => this["~validate"](data),
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
        return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
            return false;
        if (!decoded.typ || !decoded.alg)
            return false;
        if (alg && decoded.alg !== alg)
            return false;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "jwt",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cidr",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...errorUtil.errToObj(message),
        });
    }
    jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            }
            catch (_a) {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType,
        });
        return INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return util.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
function custom(check, params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function"
                    ? params(data)
                    : typeof params === "string"
                        ? { message: params }
                        : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});



;// ../../packages/lib/env.ts


const env = dist_createEnv({
    /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */ server: {
        AI_AZURE_EMBEDDINGS_API_KEY: z.string().optional(),
        AI_AZURE_LLM_API_KEY: z.string().optional(),
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: z.string().optional(),
        AI_AZURE_LLM_DEPLOYMENT_ID: z.string().optional(),
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: z.string().optional(),
        AI_AZURE_LLM_RESSOURCE_NAME: z.string().optional(),
        AIRTABLE_CLIENT_ID: z.string().optional(),
        AZUREAD_CLIENT_ID: z.string().optional(),
        AZUREAD_CLIENT_SECRET: z.string().optional(),
        AZUREAD_TENANT_ID: z.string().optional(),
        CRON_SECRET: z.string().min(10),
        BREVO_API_KEY: z.string().optional(),
        BREVO_LIST_ID: z.string().optional(),
        DATABASE_URL: z.string().url(),
        DEBUG: z.enum([
            "1",
            "0"
        ]).optional(),
        DEFAULT_ORGANIZATION_ID: z.string().optional(),
        DEFAULT_ORGANIZATION_ROLE: z.enum([
            "owner",
            "manager",
            "member",
            "billing"
        ]).optional(),
        E2E_TESTING: z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_AUTH_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        EMAIL_VERIFICATION_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        ENCRYPTION_KEY: z.string().length(64).or(z.string().length(32)),
        ENTERPRISE_LICENSE_KEY: z.string().optional(),
        FORMBRICKS_ENCRYPTION_KEY: z.string().length(24).or(z.string().length(0)).optional(),
        GITHUB_ID: z.string().optional(),
        GITHUB_SECRET: z.string().optional(),
        GOOGLE_CLIENT_ID: z.string().optional(),
        GOOGLE_CLIENT_SECRET: z.string().optional(),
        GOOGLE_SHEETS_CLIENT_ID: z.string().optional(),
        GOOGLE_SHEETS_CLIENT_SECRET: z.string().optional(),
        GOOGLE_SHEETS_REDIRECT_URL: z.string().optional(),
        HTTP_PROXY: z.string().url().optional(),
        HTTPS_PROXY: z.string().url().optional(),
        IMPRINT_URL: z.string().url().optional().or(z.string().refine((str)=>str === "")),
        IMPRINT_ADDRESS: z.string().optional(),
        INVITE_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        INTERCOM_SECRET_KEY: z.string().optional(),
        IS_FORMBRICKS_CLOUD: z.enum([
            "1",
            "0"
        ]).optional(),
        MAIL_FROM: z.string().email().optional(),
        NEXTAUTH_SECRET: z.string().min(1),
        NOTION_OAUTH_CLIENT_ID: z.string().optional(),
        NOTION_OAUTH_CLIENT_SECRET: z.string().optional(),
        OIDC_CLIENT_ID: z.string().optional(),
        OIDC_CLIENT_SECRET: z.string().optional(),
        OIDC_DISPLAY_NAME: z.string().optional(),
        OIDC_ISSUER: z.string().optional(),
        OIDC_SIGNING_ALGORITHM: z.string().optional(),
        OPENTELEMETRY_LISTENER_URL: z.string().optional(),
        REDIS_URL: z.string().optional(),
        REDIS_HTTP_URL: z.string().optional(),
        PASSWORD_RESET_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        PRIVACY_URL: z.string().url().optional().or(z.string().refine((str)=>str === "")),
        RATE_LIMITING_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        S3_ACCESS_KEY: z.string().optional(),
        S3_BUCKET_NAME: z.string().optional(),
        S3_REGION: z.string().optional(),
        S3_SECRET_KEY: z.string().optional(),
        S3_ENDPOINT_URL: z.string().optional(),
        S3_FORCE_PATH_STYLE: z.enum([
            "1",
            "0"
        ]).optional(),
        SHORT_URL_BASE: z.string().url().optional().or(z.string().length(0)),
        SIGNUP_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        SLACK_CLIENT_ID: z.string().optional(),
        SLACK_CLIENT_SECRET: z.string().optional(),
        SMTP_HOST: z.string().min(1).optional(),
        SMTP_PORT: z.string().min(1).optional(),
        SMTP_SECURE_ENABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_USER: z.string().min(1).optional(),
        SMTP_PASSWORD: z.string().min(1).optional(),
        SMTP_AUTHENTICATED: z.enum([
            "1",
            "0"
        ]).optional(),
        SMTP_REJECT_UNAUTHORIZED_TLS: z.enum([
            "1",
            "0"
        ]).optional(),
        STRIPE_SECRET_KEY: z.string().optional(),
        STRIPE_WEBHOOK_SECRET: z.string().optional(),
        TELEMETRY_DISABLED: z.enum([
            "1",
            "0"
        ]).optional(),
        TERMS_URL: z.string().url().optional().or(z.string().refine((str)=>str === "")),
        TURNSTILE_SECRET_KEY: z.string().optional(),
        UPLOADS_DIR: z.string().min(1).optional(),
        VERCEL_URL: z.string().optional(),
        WEBAPP_URL: z.string().url().optional(),
        UNSPLASH_ACCESS_KEY: z.string().optional(),
        LANGFUSE_SECRET_KEY: z.string().optional(),
        LANGFUSE_PUBLIC_KEY: z.string().optional(),
        LANGFUSE_BASEURL: z.string().optional()
    },
    /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */ client: {
        NEXT_PUBLIC_FORMBRICKS_API_HOST: z.string().url().optional().or(z.string().refine((str)=>str === "")),
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: z.string().optional(),
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_KEY: z.string().optional(),
        NEXT_PUBLIC_POSTHOG_API_HOST: z.string().optional(),
        NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
        NEXT_PUBLIC_INTERCOM_APP_ID: z.string().optional(),
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional()
    },
    /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */ runtimeEnv: {
        AI_AZURE_EMBEDDINGS_API_KEY: process.env.AI_AZURE_EMBEDDINGS_API_KEY,
        AI_AZURE_LLM_API_KEY: process.env.AI_AZURE_LLM_API_KEY,
        AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID: process.env.AI_AZURE_EMBEDDINGS_DEPLOYMENT_ID,
        AI_AZURE_LLM_DEPLOYMENT_ID: process.env.AI_AZURE_LLM_DEPLOYMENT_ID,
        AI_AZURE_EMBEDDINGS_RESSOURCE_NAME: process.env.AI_AZURE_EMBEDDINGS_RESSOURCE_NAME,
        AI_AZURE_LLM_RESSOURCE_NAME: process.env.AI_AZURE_LLM_RESSOURCE_NAME,
        LANGFUSE_SECRET_KEY: process.env.LANGFUSE_SECRET_KEY,
        LANGFUSE_PUBLIC_KEY: process.env.LANGFUSE_PUBLIC_KEY,
        LANGFUSE_BASEURL: process.env.LANGFUSE_BASEURL,
        AIRTABLE_CLIENT_ID: process.env.AIRTABLE_CLIENT_ID,
        AZUREAD_CLIENT_ID: process.env.AZUREAD_CLIENT_ID,
        AZUREAD_CLIENT_SECRET: process.env.AZUREAD_CLIENT_SECRET,
        AZUREAD_TENANT_ID: process.env.AZUREAD_TENANT_ID,
        BREVO_API_KEY: process.env.BREVO_API_KEY,
        BREVO_LIST_ID: process.env.BREVO_LIST_ID,
        CRON_SECRET: process.env.CRON_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        DEBUG: process.env.DEBUG,
        DEFAULT_ORGANIZATION_ID: process.env.DEFAULT_ORGANIZATION_ID,
        DEFAULT_ORGANIZATION_ROLE: process.env.DEFAULT_ORGANIZATION_ROLE,
        E2E_TESTING: process.env.E2E_TESTING,
        EMAIL_AUTH_DISABLED: process.env.EMAIL_AUTH_DISABLED,
        EMAIL_VERIFICATION_DISABLED: process.env.EMAIL_VERIFICATION_DISABLED,
        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
        ENTERPRISE_LICENSE_KEY: process.env.ENTERPRISE_LICENSE_KEY,
        FORMBRICKS_ENCRYPTION_KEY: process.env.FORMBRICKS_ENCRYPTION_KEY,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_SHEETS_CLIENT_ID: process.env.GOOGLE_SHEETS_CLIENT_ID,
        GOOGLE_SHEETS_CLIENT_SECRET: process.env.GOOGLE_SHEETS_CLIENT_SECRET,
        GOOGLE_SHEETS_REDIRECT_URL: process.env.GOOGLE_SHEETS_REDIRECT_URL,
        HTTP_PROXY: process.env.HTTP_PROXY,
        HTTPS_PROXY: process.env.HTTPS_PROXY,
        IMPRINT_URL: process.env.IMPRINT_URL,
        IMPRINT_ADDRESS: process.env.IMPRINT_ADDRESS,
        INVITE_DISABLED: process.env.INVITE_DISABLED,
        INTERCOM_SECRET_KEY: process.env.INTERCOM_SECRET_KEY,
        IS_FORMBRICKS_CLOUD: process.env.IS_FORMBRICKS_CLOUD,
        MAIL_FROM: process.env.MAIL_FROM,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_FORMBRICKS_API_HOST: "",
        NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID: "",
        NEXT_PUBLIC_FORMBRICKS_ONBOARDING_SURVEY_ID: "",
        NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
        NEXT_PUBLIC_POSTHOG_API_KEY: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        OPENTELEMETRY_LISTENER_URL: process.env.OPENTELEMETRY_LISTENER_URL,
        NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        NOTION_OAUTH_CLIENT_ID: process.env.NOTION_OAUTH_CLIENT_ID,
        NOTION_OAUTH_CLIENT_SECRET: process.env.NOTION_OAUTH_CLIENT_SECRET,
        OIDC_CLIENT_ID: process.env.OIDC_CLIENT_ID,
        OIDC_CLIENT_SECRET: process.env.OIDC_CLIENT_SECRET,
        OIDC_DISPLAY_NAME: process.env.OIDC_DISPLAY_NAME,
        OIDC_ISSUER: process.env.OIDC_ISSUER,
        OIDC_SIGNING_ALGORITHM: process.env.OIDC_SIGNING_ALGORITHM,
        REDIS_URL: process.env.REDIS_URL,
        REDIS_HTTP_URL: process.env.REDIS_HTTP_URL,
        PASSWORD_RESET_DISABLED: process.env.PASSWORD_RESET_DISABLED,
        PRIVACY_URL: process.env.PRIVACY_URL,
        RATE_LIMITING_DISABLED: process.env.RATE_LIMITING_DISABLED,
        S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
        S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
        S3_REGION: process.env.S3_REGION,
        S3_SECRET_KEY: process.env.S3_SECRET_KEY,
        S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL,
        S3_FORCE_PATH_STYLE: process.env.S3_FORCE_PATH_STYLE,
        SHORT_URL_BASE: process.env.SHORT_URL_BASE,
        SIGNUP_DISABLED: process.env.SIGNUP_DISABLED,
        SLACK_CLIENT_ID: process.env.SLACK_CLIENT_ID,
        SLACK_CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_SECURE_ENABLED: process.env.SMTP_SECURE_ENABLED,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_REJECT_UNAUTHORIZED_TLS: process.env.SMTP_REJECT_UNAUTHORIZED_TLS,
        SMTP_AUTHENTICATED: process.env.SMTP_AUTHENTICATED,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        TELEMETRY_DISABLED: process.env.TELEMETRY_DISABLED,
        TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
        TERMS_URL: process.env.TERMS_URL,
        UPLOADS_DIR: process.env.UPLOADS_DIR,
        VERCEL_URL: process.env.VERCEL_URL,
        WEBAPP_URL: process.env.WEBAPP_URL,
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
    }
});

;// ./instrumentation.ts



async function register() {
    if (env.LANGFUSE_SECRET_KEY && env.LANGFUSE_PUBLIC_KEY && env.LANGFUSE_BASEURL) {
        (0,node/* registerOTel */.Mq)({
            serviceName: "formbricks-cloud-dev",
            traceExporter: new LangfuseExporter({
                debug: false,
                secretKey: env.LANGFUSE_SECRET_KEY,
                publicKey: env.LANGFUSE_PUBLIC_KEY,
                baseUrl: env.LANGFUSE_BASEURL
            })
        });
    }
    if (true) {
        await __webpack_require__.e(/* import() */ 7513).then(__webpack_require__.bind(__webpack_require__, 617513));
    }
    if (false) {}
}


/***/ }),

/***/ 29758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NOOP_LOGGER: () => (/* reexport */ NOOP_LOGGER),
  NOOP_LOGGER_PROVIDER: () => (/* reexport */ NOOP_LOGGER_PROVIDER),
  NoopLogger: () => (/* reexport */ NoopLogger),
  NoopLoggerProvider: () => (/* reexport */ NoopLoggerProvider),
  ProxyLogger: () => (/* reexport */ ProxyLogger),
  ProxyLoggerProvider: () => (/* reexport */ ProxyLoggerProvider),
  SeverityNumber: () => (/* reexport */ SeverityNumber),
  logs: () => (/* binding */ logs)
});

;// ../../node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SeverityNumber;
(function (SeverityNumber) {
    SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
    SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
    SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
    SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
    SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
    SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
    SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
    SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
    SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
    SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
    SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
    SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
    SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
    SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
    SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
    SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
    SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
    SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
    SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
    SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
    SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
})(SeverityNumber || (SeverityNumber = {}));
//# sourceMappingURL=LogRecord.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var NoopLogger = /** @class */ (function () {
    function NoopLogger() {
    }
    NoopLogger.prototype.emit = function (_logRecord) { };
    return NoopLogger;
}());

var NOOP_LOGGER = new NoopLogger();
//# sourceMappingURL=NoopLogger.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NoopLoggerProvider = /** @class */ (function () {
    function NoopLoggerProvider() {
    }
    NoopLoggerProvider.prototype.getLogger = function (_name, _version, _options) {
        return new NoopLogger();
    };
    return NoopLoggerProvider;
}());

var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
//# sourceMappingURL=NoopLoggerProvider.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ProxyLogger = /** @class */ (function () {
    function ProxyLogger(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */
    ProxyLogger.prototype.emit = function (logRecord) {
        this._getLogger().emit(logRecord);
    };
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */
    ProxyLogger.prototype._getLogger = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return NOOP_LOGGER;
        }
        this._delegate = logger;
        return this._delegate;
    };
    return ProxyLogger;
}());

//# sourceMappingURL=ProxyLogger.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ProxyLoggerProvider = /** @class */ (function () {
    function ProxyLoggerProvider() {
    }
    ProxyLoggerProvider.prototype.getLogger = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyLogger(this, name, version, options));
    };
    ProxyLoggerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_LOGGER_PROVIDER;
    };
    /**
     * Set the delegate logger provider
     */
    ProxyLoggerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyLoggerProvider.prototype.getDelegateLogger = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider;
}());

//# sourceMappingURL=ProxyLoggerProvider.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins
var _globalThis = typeof globalThis === 'object' ? globalThis : global;
//# sourceMappingURL=globalThis.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = _globalThis;
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
function makeGetter(requiredVersion, instance, fallback) {
    return function (version) {
        return version === requiredVersion ? instance : fallback;
    };
}
/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
var API_BACKWARDS_COMPATIBILITY_VERSION = 1;
//# sourceMappingURL=global-utils.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/api/logs.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var LogsAPI = /** @class */ (function () {
    function LogsAPI() {
        this._proxyLoggerProvider = new ProxyLoggerProvider();
    }
    LogsAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function (provider) {
        if (_global[GLOBAL_LOGS_API_KEY]) {
            return this.getLoggerProvider();
        }
        _global[GLOBAL_LOGS_API_KEY] = makeGetter(API_BACKWARDS_COMPATIBILITY_VERSION, provider, NOOP_LOGGER_PROVIDER);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */
    LogsAPI.prototype.getLoggerProvider = function () {
        var _a, _b;
        return ((_b = (_a = _global[GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_global, API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider);
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */
    LogsAPI.prototype.getLogger = function (name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */
    LogsAPI.prototype.disable = function () {
        delete _global[GLOBAL_LOGS_API_KEY];
        this._proxyLoggerProvider = new ProxyLoggerProvider();
    };
    return LogsAPI;
}());

//# sourceMappingURL=logs.js.map
;// ../../node_modules/@opentelemetry/api-logs/build/esm/index.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var logs = LogsAPI.getInstance();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 638849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ ContextAPI)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/context/context.js
var context = __webpack_require__(215452);
;// ../../node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return context/* ROOT_CONTEXT */.l;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], __read(args), false));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js + 3 modules
var global_utils = __webpack_require__(923388);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/diag.js + 2 modules
var diag = __webpack_require__(566941);
;// ../../node_modules/@opentelemetry/api/build/esm/api/context.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var context_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var context_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,global_utils/* registerGlobal */.$G)(API_NAME, contextManager, diag/* DiagAPI */.K.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, context_spreadArray([context, fn, thisArg], context_read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,global_utils/* getGlobal */.mS)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,global_utils/* unregisterGlobal */.kv)(API_NAME, diag/* DiagAPI */.K.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 566941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ DiagAPI)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js + 3 modules
var global_utils = __webpack_require__(923388);
;// ../../node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,global_utils/* getGlobal */.mS)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
}
//# sourceMappingURL=ComponentLogger.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/diag/types.js
var types = __webpack_require__(607328);
;// ../../node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < types/* DiagLogLevel */.u.NONE) {
        maxLevel = types/* DiagLogLevel */.u.NONE;
    }
    else if (maxLevel > types/* DiagLogLevel */.u.ALL) {
        maxLevel = types/* DiagLogLevel */.u.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', types/* DiagLogLevel */.u.ERROR),
        warn: _filterFunc('warn', types/* DiagLogLevel */.u.WARN),
        info: _filterFunc('info', types/* DiagLogLevel */.u.INFO),
        debug: _filterFunc('debug', types/* DiagLogLevel */.u.DEBUG),
        verbose: _filterFunc('verbose', types/* DiagLogLevel */.u.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/api/diag.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var diag_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var diag_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,global_utils/* getGlobal */.mS)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, diag_spreadArray([], diag_read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function (logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) { optionsOrLogLevel = { logLevel: types/* DiagLogLevel */.u.INFO }; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel,
                };
            }
            var oldLogger = (0,global_utils/* getGlobal */.mS)('diag');
            var newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : types/* DiagLogLevel */.u.INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,global_utils/* registerGlobal */.$G)('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function () {
            (0,global_utils/* unregisterGlobal */.kv)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ 849395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ baggageEntryMetadataFromString),
  L: () => (/* binding */ createBaggage)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/diag.js + 2 modules
var diag = __webpack_require__(566941);
;// ../../node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var e_1, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                newBaggage._entries.delete(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/baggage/utils.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var utils_diag = diag/* DiagAPI */.K.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        utils_diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 459807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ context)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(638849);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_0__/* .ContextAPI */ ._.getInstance();
//# sourceMappingURL=context-api.js.map

/***/ }),

/***/ 215452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   n: () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 605925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ diag)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566941);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__/* .DiagAPI */ .K.instance();
//# sourceMappingURL=diag-api.js.map

/***/ }),

/***/ 607328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 186543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DiagConsoleLogger: () => (/* reexport */ DiagConsoleLogger),
  DiagLogLevel: () => (/* reexport */ types/* DiagLogLevel */.u),
  INVALID_SPANID: () => (/* reexport */ invalid_span_constants/* INVALID_SPANID */.w9),
  INVALID_SPAN_CONTEXT: () => (/* reexport */ invalid_span_constants/* INVALID_SPAN_CONTEXT */.dM),
  INVALID_TRACEID: () => (/* reexport */ invalid_span_constants/* INVALID_TRACEID */.RH),
  ProxyTracer: () => (/* reexport */ ProxyTracer/* ProxyTracer */.y),
  ProxyTracerProvider: () => (/* reexport */ ProxyTracerProvider/* ProxyTracerProvider */.n),
  ROOT_CONTEXT: () => (/* reexport */ context/* ROOT_CONTEXT */.l),
  SamplingDecision: () => (/* reexport */ SamplingResult/* SamplingDecision */.i),
  SpanKind: () => (/* reexport */ span_kind/* SpanKind */.v),
  SpanStatusCode: () => (/* reexport */ trace_status/* SpanStatusCode */.s),
  TraceFlags: () => (/* reexport */ trace_flags/* TraceFlags */.X),
  ValueType: () => (/* reexport */ ValueType),
  baggageEntryMetadataFromString: () => (/* reexport */ utils/* baggageEntryMetadataFromString */.B),
  context: () => (/* reexport */ context_api/* context */._),
  createContextKey: () => (/* reexport */ context/* createContextKey */.n),
  createNoopMeter: () => (/* reexport */ NoopMeter/* createNoopMeter */.Ac),
  createTraceState: () => (/* reexport */ createTraceState),
  "default": () => (/* binding */ esm),
  defaultTextMapGetter: () => (/* reexport */ TextMapPropagator/* defaultTextMapGetter */.q),
  defaultTextMapSetter: () => (/* reexport */ TextMapPropagator/* defaultTextMapSetter */.U),
  diag: () => (/* reexport */ diag_api/* diag */.s),
  isSpanContextValid: () => (/* reexport */ spancontext_utils/* isSpanContextValid */.YA),
  isValidSpanId: () => (/* reexport */ spancontext_utils/* isValidSpanId */.wN),
  isValidTraceId: () => (/* reexport */ spancontext_utils/* isValidTraceId */.hX),
  metrics: () => (/* reexport */ metrics_api/* metrics */.q),
  propagation: () => (/* reexport */ propagation_api/* propagation */.$),
  trace: () => (/* reexport */ trace_api/* trace */.u)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/baggage/utils.js + 2 modules
var utils = __webpack_require__(849395);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/context/context.js
var context = __webpack_require__(215452);
;// ../../node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

//# sourceMappingURL=consoleLogger.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/diag/types.js
var types = __webpack_require__(607328);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js
var NoopMeter = __webpack_require__(353116);
;// ../../node_modules/@opentelemetry/api/build/esm/metrics/Metric.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Type of value. It describes how the data is reported. */
var ValueType;
(function (ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));
//# sourceMappingURL=Metric.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js
var TextMapPropagator = __webpack_require__(503460);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var ProxyTracer = __webpack_require__(996332);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js + 1 modules
var ProxyTracerProvider = __webpack_require__(769937);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js
var SamplingResult = __webpack_require__(835929);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/span_kind.js
var span_kind = __webpack_require__(978106);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/status.js
var trace_status = __webpack_require__(836023);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
var trace_flags = __webpack_require__(263216);
;// ../../node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
//# sourceMappingURL=tracestate-validators.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
var TraceStateImpl = /** @class */ (function () {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function (key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function (key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function (key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function () {
        var _this = this;
        return this._keys()
            .reduce(function (agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function (rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce(function (agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if (validateKey(key) && validateValue(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function () {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}());

//# sourceMappingURL=tracestate-impl.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createTraceState(rawTraceState) {
    return new TraceStateImpl(rawTraceState);
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var spancontext_utils = __webpack_require__(748294);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js
var invalid_span_constants = __webpack_require__(454563);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/context-api.js
var context_api = __webpack_require__(459807);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/diag-api.js
var diag_api = __webpack_require__(605925);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/metrics-api.js + 2 modules
var metrics_api = __webpack_require__(103729);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/propagation-api.js + 3 modules
var propagation_api = __webpack_require__(566177);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace-api.js + 1 modules
var trace_api = __webpack_require__(247693);
;// ../../node_modules/@opentelemetry/api/build/esm/index.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Context APIs

// Diag APIs


// Metrics APIs


// Propagation APIs










// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.





// Named export.

// Default export.
/* harmony default export */ const esm = ({
    context: context_api/* context */._,
    diag: diag_api/* diag */.s,
    metrics: metrics_api/* metrics */.q,
    propagation: propagation_api/* propagation */.$,
    trace: trace_api/* trace */.u,
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 923388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mS: () => (/* binding */ getGlobal),
  $G: () => (/* binding */ registerGlobal),
  kv: () => (/* binding */ unregisterGlobal)
});

;// ../../node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins
var _globalThis = typeof globalThis === 'object' ? globalThis : global;
//# sourceMappingURL=globalThis.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/version.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.9.0';
//# sourceMappingURL=version.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/internal/semver.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(VERSION);
//# sourceMappingURL=semver.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !isCompatible(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ 103729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ metrics)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js
var NoopMeter = __webpack_require__(353116);
;// ../../node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
var NoopMeterProvider = /** @class */ (function () {
    function NoopMeterProvider() {
    }
    NoopMeterProvider.prototype.getMeter = function (_name, _version, _options) {
        return NoopMeter/* NOOP_METER */.Dq;
    };
    return NoopMeterProvider;
}());

var NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js + 3 modules
var global_utils = __webpack_require__(923388);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/diag.js + 2 modules
var diag = __webpack_require__(566941);
;// ../../node_modules/@opentelemetry/api/build/esm/api/metrics.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var API_NAME = 'metrics';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
var MetricsAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function MetricsAPI() {
    }
    /** Get the singleton instance of the Metrics API */
    MetricsAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */
    MetricsAPI.prototype.setGlobalMeterProvider = function (provider) {
        return (0,global_utils/* registerGlobal */.$G)(API_NAME, provider, diag/* DiagAPI */.K.instance());
    };
    /**
     * Returns the global meter provider.
     */
    MetricsAPI.prototype.getMeterProvider = function () {
        return (0,global_utils/* getGlobal */.mS)(API_NAME) || NOOP_METER_PROVIDER;
    };
    /**
     * Returns a meter from the global meter provider.
     */
    MetricsAPI.prototype.getMeter = function (name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    };
    /** Remove the global meter provider */
    MetricsAPI.prototype.disable = function () {
        (0,global_utils/* unregisterGlobal */.kv)(API_NAME, diag/* DiagAPI */.K.instance());
    };
    return MetricsAPI;
}());

//# sourceMappingURL=metrics.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/metrics-api.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for metrics API */
var metrics = MetricsAPI.getInstance();
//# sourceMappingURL=metrics-api.js.map

/***/ }),

/***/ 353116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ac: () => (/* binding */ createNoopMeter),
/* harmony export */   Dq: () => (/* binding */ NOOP_METER)
/* harmony export */ });
/* unused harmony exports NoopMeter, NoopMetric, NoopCounterMetric, NoopUpDownCounterMetric, NoopGaugeMetric, NoopHistogramMetric, NoopObservableMetric, NoopObservableCounterMetric, NoopObservableGaugeMetric, NoopObservableUpDownCounterMetric, NOOP_COUNTER_METRIC, NOOP_GAUGE_METRIC, NOOP_HISTOGRAM_METRIC, NOOP_UP_DOWN_COUNTER_METRIC, NOOP_OBSERVABLE_COUNTER_METRIC, NOOP_OBSERVABLE_GAUGE_METRIC, NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC */
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
var NoopMeter = /** @class */ (function () {
    function NoopMeter() {
    }
    /**
     * @see {@link Meter.createGauge}
     */
    NoopMeter.prototype.createGauge = function (_name, _options) {
        return NOOP_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createHistogram}
     */
    NoopMeter.prototype.createHistogram = function (_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    };
    /**
     * @see {@link Meter.createCounter}
     */
    NoopMeter.prototype.createCounter = function (_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createUpDownCounter}
     */
    NoopMeter.prototype.createUpDownCounter = function (_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableGauge}
     */
    NoopMeter.prototype.createObservableGauge = function (_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createObservableCounter}
     */
    NoopMeter.prototype.createObservableCounter = function (_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */
    NoopMeter.prototype.createObservableUpDownCounter = function (_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */
    NoopMeter.prototype.addBatchObservableCallback = function (_callback, _observables) { };
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */
    NoopMeter.prototype.removeBatchObservableCallback = function (_callback) { };
    return NoopMeter;
}());

var NoopMetric = /** @class */ (function () {
    function NoopMetric() {
    }
    return NoopMetric;
}());

var NoopCounterMetric = /** @class */ (function (_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function (_value, _attributes) { };
    return NoopCounterMetric;
}(NoopMetric));

var NoopUpDownCounterMetric = /** @class */ (function (_super) {
    __extends(NoopUpDownCounterMetric, _super);
    function NoopUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric.prototype.add = function (_value, _attributes) { };
    return NoopUpDownCounterMetric;
}(NoopMetric));

var NoopGaugeMetric = /** @class */ (function (_super) {
    __extends(NoopGaugeMetric, _super);
    function NoopGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopGaugeMetric.prototype.record = function (_value, _attributes) { };
    return NoopGaugeMetric;
}(NoopMetric));

var NoopHistogramMetric = /** @class */ (function (_super) {
    __extends(NoopHistogramMetric, _super);
    function NoopHistogramMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric.prototype.record = function (_value, _attributes) { };
    return NoopHistogramMetric;
}(NoopMetric));

var NoopObservableMetric = /** @class */ (function () {
    function NoopObservableMetric() {
    }
    NoopObservableMetric.prototype.addCallback = function (_callback) { };
    NoopObservableMetric.prototype.removeCallback = function (_callback) { };
    return NoopObservableMetric;
}());

var NoopObservableCounterMetric = /** @class */ (function (_super) {
    __extends(NoopObservableCounterMetric, _super);
    function NoopObservableCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric;
}(NoopObservableMetric));

var NoopObservableGaugeMetric = /** @class */ (function (_super) {
    __extends(NoopObservableGaugeMetric, _super);
    function NoopObservableGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric;
}(NoopObservableMetric));

var NoopObservableUpDownCounterMetric = /** @class */ (function (_super) {
    __extends(NoopObservableUpDownCounterMetric, _super);
    function NoopObservableUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric;
}(NoopObservableMetric));

var NOOP_METER = new NoopMeter();
// Synchronous instruments
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
// Asynchronous instruments
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
/**
 * Create a no-op Meter
 */
function createNoopMeter() {
    return NOOP_METER;
}
//# sourceMappingURL=NoopMeter.js.map

/***/ }),

/***/ 566177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ propagation)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js + 3 modules
var global_utils = __webpack_require__(923388);
;// ../../node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js
var TextMapPropagator = __webpack_require__(503460);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/context.js + 1 modules
var context = __webpack_require__(638849);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/context/context.js
var context_context = __webpack_require__(215452);
;// ../../node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,context_context/* createContextKey */.n)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Retrieve the current baggage from the active/current context
 *
 * @returns {Baggage} Extracted baggage from the context
 */
function getActiveBaggage() {
    return getBaggage(context/* ContextAPI */._.getInstance().active());
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/baggage/utils.js + 2 modules
var utils = __webpack_require__(849395);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/diag.js + 2 modules
var diag = __webpack_require__(566941);
;// ../../node_modules/@opentelemetry/api/build/esm/api/propagation.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = utils/* createBaggage */.L;
        this.getBaggage = getBaggage;
        this.getActiveBaggage = getActiveBaggage;
        this.setBaggage = setBaggage;
        this.deleteBaggage = deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,global_utils/* registerGlobal */.$G)(API_NAME, propagator, diag/* DiagAPI */.K.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = TextMapPropagator/* defaultTextMapSetter */.U; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = TextMapPropagator/* defaultTextMapGetter */.q; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,global_utils/* unregisterGlobal */.kv)(API_NAME, diag/* DiagAPI */.K.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,global_utils/* getGlobal */.mS)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/propagation-api.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for propagation API */
var propagation = PropagationAPI.getInstance();
//# sourceMappingURL=propagation-api.js.map

/***/ }),

/***/ 503460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultTextMapSetter),
/* harmony export */   q: () => (/* binding */ defaultTextMapGetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ 247693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ trace)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/internal/global-utils.js + 3 modules
var global_utils = __webpack_require__(923388);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js + 1 modules
var ProxyTracerProvider = __webpack_require__(769937);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var spancontext_utils = __webpack_require__(748294);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
var context_utils = __webpack_require__(417578);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/api/diag.js + 2 modules
var diag = __webpack_require__(566941);
;// ../../node_modules/@opentelemetry/api/build/esm/api/trace.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new ProxyTracerProvider/* ProxyTracerProvider */.n();
        this.wrapSpanContext = spancontext_utils/* wrapSpanContext */.IP;
        this.isSpanContextValid = spancontext_utils/* isSpanContextValid */.YA;
        this.deleteSpan = context_utils/* deleteSpan */.EW;
        this.getSpan = context_utils/* getSpan */.fU;
        this.getActiveSpan = context_utils/* getActiveSpan */.Bk;
        this.getSpanContext = context_utils/* getSpanContext */.w8;
        this.setSpan = context_utils/* setSpan */.Bx;
        this.setSpanContext = context_utils/* setSpanContext */.g_;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,global_utils/* registerGlobal */.$G)(API_NAME, this._proxyTracerProvider, diag/* DiagAPI */.K.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,global_utils/* getGlobal */.mS)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,global_utils/* unregisterGlobal */.kv)(API_NAME, diag/* DiagAPI */.K.instance());
        this._proxyTracerProvider = new ProxyTracerProvider/* ProxyTracerProvider */.n();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/trace-api.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for trace API */
var trace = TraceAPI.getInstance();
//# sourceMappingURL=trace-api.js.map

/***/ }),

/***/ 82827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454563);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__/* .INVALID_SPAN_CONTEXT */ .dM; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    NonRecordingSpan.prototype.addLink = function (_link) {
        return this;
    };
    NonRecordingSpan.prototype.addLinks = function (_links) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ 715946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(638849);
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417578);
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82827);
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(748294);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var contextApi = _api_context__WEBPACK_IMPORTED_MODULE_0__/* .ContextAPI */ ._.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        if (context === void 0) { context = contextApi.active(); }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__/* .NonRecordingSpan */ .d();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_2__/* .getSpanContext */ .w8)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSpanContextValid */ .YA)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__/* .NonRecordingSpan */ .d(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__/* .NonRecordingSpan */ .d();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_2__/* .setSpan */ .Bx)(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ 996332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715946);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__/* .NoopTracer */ .o();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ 769937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ ProxyTracerProvider)
});

// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var ProxyTracer = __webpack_require__(996332);
// EXTERNAL MODULE: ../../node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var NoopTracer = __webpack_require__(715946);
;// ../../node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new NoopTracer/* NoopTracer */.o();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map
;// ../../node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer/* ProxyTracer */.y(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ 835929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ 417578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ getActiveSpan),
/* harmony export */   Bx: () => (/* binding */ setSpan),
/* harmony export */   EW: () => (/* binding */ deleteSpan),
/* harmony export */   fU: () => (/* binding */ getSpan),
/* harmony export */   g_: () => (/* binding */ setSpanContext),
/* harmony export */   w8: () => (/* binding */ getSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215452);
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82827);
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(638849);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__/* .createContextKey */ .n)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Gets the span from the current context, if one exists.
 */
function getActiveSpan() {
    return getSpan(_api_context__WEBPACK_IMPORTED_MODULE_1__/* .ContextAPI */ ._.getInstance().active());
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__/* .NonRecordingSpan */ .d(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ 454563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RH: () => (/* binding */ INVALID_TRACEID),
/* harmony export */   dM: () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   w9: () => (/* binding */ INVALID_SPANID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263216);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__/* .TraceFlags */ .X.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ 978106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ 748294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IP: () => (/* binding */ wrapSpanContext),
/* harmony export */   YA: () => (/* binding */ isSpanContextValid),
/* harmony export */   hX: () => (/* binding */ isValidTraceId),
/* harmony export */   wN: () => (/* binding */ isValidSpanId)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454563);
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82827);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__/* .INVALID_TRACEID */ .RH;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__/* .INVALID_SPANID */ .w9;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__/* .NonRecordingSpan */ .d(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ 836023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ 263216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ 354430:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mq: () => (/* binding */ hy)
/* harmony export */ });
/* unused harmony exports FetchInstrumentation, OTLPHttpJsonTraceExporter, OTLPHttpProtoTraceExporter */
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379551);
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(508086);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333873);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186543);
/* harmony import */ var _opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29758);



const require = (0,module__WEBPACK_IMPORTED_MODULE_1__.createRequire)("file:///Users/kdy1/projects/formbricks/node_modules/@vercel/otel/dist/node/index.js");
const __filename = (0,url__WEBPACK_IMPORTED_MODULE_0__.fileURLToPath)("file:///Users/kdy1/projects/formbricks/node_modules/@vercel/otel/dist/node/index.js");
const __dirname = path__WEBPACK_IMPORTED_MODULE_2__.dirname(__filename);
var Ip=Object.create;var Is=Object.defineProperty;var Lp=Object.getOwnPropertyDescriptor;var Mp=Object.getOwnPropertyNames;var Cp=Object.getPrototypeOf,Np=Object.prototype.hasOwnProperty;var J=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var Zu=(r,e)=>()=>(r&&(e=r(r=0)),e);var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Gr=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Mp(e))!Np.call(r,i)&&i!==t&&Is(r,i,{get:()=>e[i],enumerable:!(n=Lp(e,i))||n.enumerable});return r},ht=(r,e,t)=>(Gr(r,e,"default"),t&&Gr(t,e,"default")),H=(r,e,t)=>(t=r!=null?Ip(Cp(r)):{},Gr(e||!r||!r.__esModule?Is(t,"default",{value:r,enumerable:!0}):t,r)),f=r=>Gr(Is({},"__esModule",{value:!0}),r);var d={};var h=Zu(()=>{ht(d,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__)});var ur=c(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.isTracingSuppressed=ye.unsuppressTracing=ye.suppressTracing=void 0;var wp=(h(),f(d)),Ls=(0,wp.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");function xp(r){return r.setValue(Ls,!0)}ye.suppressTracing=xp;function Dp(r){return r.deleteValue(Ls)}ye.unsuppressTracing=Dp;function Bp(r){return r.getValue(Ls)===!0}ye.isTracingSuppressed=Bp});var Ms=c(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.BAGGAGE_MAX_TOTAL_LENGTH=k.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS=k.BAGGAGE_MAX_NAME_VALUE_PAIRS=k.BAGGAGE_HEADER=k.BAGGAGE_ITEMS_SEPARATOR=k.BAGGAGE_PROPERTIES_SEPARATOR=k.BAGGAGE_KEY_PAIR_SEPARATOR=void 0;k.BAGGAGE_KEY_PAIR_SEPARATOR="=";k.BAGGAGE_PROPERTIES_SEPARATOR=";";k.BAGGAGE_ITEMS_SEPARATOR=",";k.BAGGAGE_HEADER="baggage";k.BAGGAGE_MAX_NAME_VALUE_PAIRS=180;k.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS=4096;k.BAGGAGE_MAX_TOTAL_LENGTH=8192});var Cs=c(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.parseKeyPairsIntoRecord=he.parsePairKeyValue=he.getKeyPairs=he.serializeKeyPairs=void 0;var Up=(h(),f(d)),je=Ms();function qp(r){return r.reduce((e,t)=>{let n=`${e}${e!==""?je.BAGGAGE_ITEMS_SEPARATOR:""}${t}`;return n.length>je.BAGGAGE_MAX_TOTAL_LENGTH?e:n},"")}he.serializeKeyPairs=qp;function Gp(r){return r.getAllEntries().map(([e,t])=>{let n=`${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;return t.metadata!==void 0&&(n+=je.BAGGAGE_PROPERTIES_SEPARATOR+t.metadata.toString()),n})}he.getKeyPairs=Gp;function Ju(r){let e=r.split(je.BAGGAGE_PROPERTIES_SEPARATOR);if(e.length<=0)return;let t=e.shift();if(!t)return;let n=t.indexOf(je.BAGGAGE_KEY_PAIR_SEPARATOR);if(n<=0)return;let i=decodeURIComponent(t.substring(0,n).trim()),s=decodeURIComponent(t.substring(n+1).trim()),o;return e.length>0&&(o=(0,Up.baggageEntryMetadataFromString)(e.join(je.BAGGAGE_PROPERTIES_SEPARATOR))),{key:i,value:s,metadata:o}}he.parsePairKeyValue=Ju;function Vp(r){return typeof r!="string"||r.length===0?{}:r.split(je.BAGGAGE_ITEMS_SEPARATOR).map(e=>Ju(e)).filter(e=>e!==void 0&&e.value.length>0).reduce((e,t)=>(e[t.key]=t.value,e),{})}he.parseKeyPairsIntoRecord=Vp});var ec=c(Vr=>{"use strict";Object.defineProperty(Vr,"__esModule",{value:!0});Vr.W3CBaggagePropagator=void 0;var Ns=(h(),f(d)),jp=ur(),Fe=Ms(),ws=Cs(),xs=class{inject(e,t,n){let i=Ns.propagation.getBaggage(e);if(!i||(0,jp.isTracingSuppressed)(e))return;let s=(0,ws.getKeyPairs)(i).filter(a=>a.length<=Fe.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0,Fe.BAGGAGE_MAX_NAME_VALUE_PAIRS),o=(0,ws.serializeKeyPairs)(s);o.length>0&&n.set(t,Fe.BAGGAGE_HEADER,o)}extract(e,t,n){let i=n.get(t,Fe.BAGGAGE_HEADER),s=Array.isArray(i)?i.join(Fe.BAGGAGE_ITEMS_SEPARATOR):i;if(!s)return e;let o={};return s.length===0||(s.split(Fe.BAGGAGE_ITEMS_SEPARATOR).forEach(u=>{let l=(0,ws.parsePairKeyValue)(u);if(l){let _={value:l.value};l.metadata&&(_.metadata=l.metadata),o[l.key]=_}}),Object.entries(o).length===0)?e:Ns.propagation.setBaggage(e,Ns.propagation.createBaggage(o))}fields(){return[Fe.BAGGAGE_HEADER]}};Vr.W3CBaggagePropagator=xs});var tc=c(jr=>{"use strict";Object.defineProperty(jr,"__esModule",{value:!0});jr.AnchoredClock=void 0;var Ds=class{constructor(e,t){this._monotonicClock=t,this._epochMillis=e.now(),this._performanceMillis=t.now()}now(){let e=this._monotonicClock.now()-this._performanceMillis;return this._epochMillis+e}};jr.AnchoredClock=Ds});var oc=c(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.isAttributeValue=ve.isAttributeKey=ve.sanitizeAttributes=void 0;var rc=(h(),f(d));function Fp(r){let e={};if(typeof r!="object"||r==null)return e;for(let[t,n]of Object.entries(r)){if(!nc(t)){rc.diag.warn(`Invalid attribute key: ${t}`);continue}if(!ic(n)){rc.diag.warn(`Invalid attribute value set for key: ${t}`);continue}Array.isArray(n)?e[t]=n.slice():e[t]=n}return e}ve.sanitizeAttributes=Fp;function nc(r){return typeof r=="string"&&r.length>0}ve.isAttributeKey=nc;function ic(r){return r==null?!0:Array.isArray(r)?Hp(r):sc(r)}ve.isAttributeValue=ic;function Hp(r){let e;for(let t of r)if(t!=null){if(!e){if(sc(t)){e=typeof t;continue}return!1}if(typeof t!==e)return!1}return!0}function sc(r){switch(typeof r){case"number":case"boolean":case"string":return!0}return!1}});var Bs=c(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.loggingErrorHandler=void 0;var kp=(h(),f(d));function Xp(){return r=>{kp.diag.error($p(r))}}Fr.loggingErrorHandler=Xp;function $p(r){return typeof r=="string"?r:JSON.stringify(Wp(r))}function Wp(r){let e={},t=r;for(;t!==null;)Object.getOwnPropertyNames(t).forEach(n=>{if(e[n])return;let i=t[n];i&&(e[n]=String(i))}),t=Object.getPrototypeOf(t);return e}});var Us=c(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.globalErrorHandler=pt.setGlobalErrorHandler=void 0;var Kp=Bs(),ac=(0,Kp.loggingErrorHandler)();function zp(r){ac=r}pt.setGlobalErrorHandler=zp;function Yp(r){try{ac(r)}catch{}}pt.globalErrorHandler=Yp});var qs=c(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.TracesSamplerValues=void 0;var Qp;(function(r){r.AlwaysOff="always_off",r.AlwaysOn="always_on",r.ParentBasedAlwaysOff="parentbased_always_off",r.ParentBasedAlwaysOn="parentbased_always_on",r.ParentBasedTraceIdRatio="parentbased_traceidratio",r.TraceIdRatio="traceidratio"})(Qp=cr.TracesSamplerValues||(cr.TracesSamplerValues={}))});var uc=c(Hr=>{"use strict";Object.defineProperty(Hr,"__esModule",{value:!0});Hr._globalThis=void 0;Hr._globalThis=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof global=="object"?global:{}});var kr=c(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.getEnvWithoutDefaults=y.parseEnvironment=y.DEFAULT_ENVIRONMENT=y.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT=y.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT=y.DEFAULT_ATTRIBUTE_COUNT_LIMIT=y.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT=void 0;var Ie=(h(),f(d)),Zp=qs(),Jp=uc(),ef=",",tf=["OTEL_SDK_DISABLED"];function rf(r){return tf.indexOf(r)>-1}var nf=["OTEL_BSP_EXPORT_TIMEOUT","OTEL_BSP_MAX_EXPORT_BATCH_SIZE","OTEL_BSP_MAX_QUEUE_SIZE","OTEL_BSP_SCHEDULE_DELAY","OTEL_BLRP_EXPORT_TIMEOUT","OTEL_BLRP_MAX_EXPORT_BATCH_SIZE","OTEL_BLRP_MAX_QUEUE_SIZE","OTEL_BLRP_SCHEDULE_DELAY","OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT","OTEL_ATTRIBUTE_COUNT_LIMIT","OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT","OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT","OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT","OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT","OTEL_SPAN_EVENT_COUNT_LIMIT","OTEL_SPAN_LINK_COUNT_LIMIT","OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT","OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT","OTEL_EXPORTER_OTLP_TIMEOUT","OTEL_EXPORTER_OTLP_TRACES_TIMEOUT","OTEL_EXPORTER_OTLP_METRICS_TIMEOUT","OTEL_EXPORTER_OTLP_LOGS_TIMEOUT","OTEL_EXPORTER_JAEGER_AGENT_PORT"];function sf(r){return nf.indexOf(r)>-1}var of=["OTEL_NO_PATCH_MODULES","OTEL_PROPAGATORS"];function af(r){return of.indexOf(r)>-1}y.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT=1/0;y.DEFAULT_ATTRIBUTE_COUNT_LIMIT=128;y.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT=128;y.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT=128;y.DEFAULT_ENVIRONMENT={OTEL_SDK_DISABLED:!1,CONTAINER_NAME:"",ECS_CONTAINER_METADATA_URI_V4:"",ECS_CONTAINER_METADATA_URI:"",HOSTNAME:"",KUBERNETES_SERVICE_HOST:"",NAMESPACE:"",OTEL_BSP_EXPORT_TIMEOUT:3e4,OTEL_BSP_MAX_EXPORT_BATCH_SIZE:512,OTEL_BSP_MAX_QUEUE_SIZE:2048,OTEL_BSP_SCHEDULE_DELAY:5e3,OTEL_BLRP_EXPORT_TIMEOUT:3e4,OTEL_BLRP_MAX_EXPORT_BATCH_SIZE:512,OTEL_BLRP_MAX_QUEUE_SIZE:2048,OTEL_BLRP_SCHEDULE_DELAY:5e3,OTEL_EXPORTER_JAEGER_AGENT_HOST:"",OTEL_EXPORTER_JAEGER_AGENT_PORT:6832,OTEL_EXPORTER_JAEGER_ENDPOINT:"",OTEL_EXPORTER_JAEGER_PASSWORD:"",OTEL_EXPORTER_JAEGER_USER:"",OTEL_EXPORTER_OTLP_ENDPOINT:"",OTEL_EXPORTER_OTLP_TRACES_ENDPOINT:"",OTEL_EXPORTER_OTLP_METRICS_ENDPOINT:"",OTEL_EXPORTER_OTLP_LOGS_ENDPOINT:"",OTEL_EXPORTER_OTLP_HEADERS:"",OTEL_EXPORTER_OTLP_TRACES_HEADERS:"",OTEL_EXPORTER_OTLP_METRICS_HEADERS:"",OTEL_EXPORTER_OTLP_LOGS_HEADERS:"",OTEL_EXPORTER_OTLP_TIMEOUT:1e4,OTEL_EXPORTER_OTLP_TRACES_TIMEOUT:1e4,OTEL_EXPORTER_OTLP_METRICS_TIMEOUT:1e4,OTEL_EXPORTER_OTLP_LOGS_TIMEOUT:1e4,OTEL_EXPORTER_ZIPKIN_ENDPOINT:"http://localhost:9411/api/v2/spans",OTEL_LOG_LEVEL:Ie.DiagLogLevel.INFO,OTEL_NO_PATCH_MODULES:[],OTEL_PROPAGATORS:["tracecontext","baggage"],OTEL_RESOURCE_ATTRIBUTES:"",OTEL_SERVICE_NAME:"",OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT:y.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,OTEL_ATTRIBUTE_COUNT_LIMIT:y.DEFAULT_ATTRIBUTE_COUNT_LIMIT,OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT:y.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT:y.DEFAULT_ATTRIBUTE_COUNT_LIMIT,OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT:y.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT:y.DEFAULT_ATTRIBUTE_COUNT_LIMIT,OTEL_SPAN_EVENT_COUNT_LIMIT:128,OTEL_SPAN_LINK_COUNT_LIMIT:128,OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT:y.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT:y.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,OTEL_TRACES_EXPORTER:"",OTEL_TRACES_SAMPLER:Zp.TracesSamplerValues.ParentBasedAlwaysOn,OTEL_TRACES_SAMPLER_ARG:"",OTEL_LOGS_EXPORTER:"",OTEL_EXPORTER_OTLP_INSECURE:"",OTEL_EXPORTER_OTLP_TRACES_INSECURE:"",OTEL_EXPORTER_OTLP_METRICS_INSECURE:"",OTEL_EXPORTER_OTLP_LOGS_INSECURE:"",OTEL_EXPORTER_OTLP_CERTIFICATE:"",OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE:"",OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE:"",OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE:"",OTEL_EXPORTER_OTLP_COMPRESSION:"",OTEL_EXPORTER_OTLP_TRACES_COMPRESSION:"",OTEL_EXPORTER_OTLP_METRICS_COMPRESSION:"",OTEL_EXPORTER_OTLP_LOGS_COMPRESSION:"",OTEL_EXPORTER_OTLP_CLIENT_KEY:"",OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY:"",OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY:"",OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY:"",OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE:"",OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE:"",OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE:"",OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE:"",OTEL_EXPORTER_OTLP_PROTOCOL:"http/protobuf",OTEL_EXPORTER_OTLP_TRACES_PROTOCOL:"http/protobuf",OTEL_EXPORTER_OTLP_METRICS_PROTOCOL:"http/protobuf",OTEL_EXPORTER_OTLP_LOGS_PROTOCOL:"http/protobuf",OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE:"cumulative"};function uf(r,e,t){if(typeof t[r]>"u")return;let n=String(t[r]);e[r]=n.toLowerCase()==="true"}function cf(r,e,t,n=-1/0,i=1/0){if(typeof t[r]<"u"){let s=Number(t[r]);isNaN(s)||(s<n?e[r]=n:s>i?e[r]=i:e[r]=s)}}function lf(r,e,t,n=ef){let i=t[r];typeof i=="string"&&(e[r]=i.split(n).map(s=>s.trim()))}var df={ALL:Ie.DiagLogLevel.ALL,VERBOSE:Ie.DiagLogLevel.VERBOSE,DEBUG:Ie.DiagLogLevel.DEBUG,INFO:Ie.DiagLogLevel.INFO,WARN:Ie.DiagLogLevel.WARN,ERROR:Ie.DiagLogLevel.ERROR,NONE:Ie.DiagLogLevel.NONE};function _f(r,e,t){let n=t[r];if(typeof n=="string"){let i=df[n.toUpperCase()];i!=null&&(e[r]=i)}}function Gs(r){let e={};for(let t in y.DEFAULT_ENVIRONMENT){let n=t;switch(n){case"OTEL_LOG_LEVEL":_f(n,e,r);break;default:if(rf(n))uf(n,e,r);else if(sf(n))cf(n,e,r);else if(af(n))lf(n,e,r);else{let i=r[n];typeof i<"u"&&i!==null&&(e[n]=String(i))}}}return e}y.parseEnvironment=Gs;function hf(){return typeof process<"u"&&process&&process.env?Gs(process.env):Gs(Jp._globalThis)}y.getEnvWithoutDefaults=hf});var lc=c(Xr=>{"use strict";Object.defineProperty(Xr,"__esModule",{value:!0});Xr.getEnv=void 0;var pf=J("os"),cc=kr();function ff(){let r=(0,cc.parseEnvironment)(process.env);return Object.assign({HOSTNAME:pf.hostname()},cc.DEFAULT_ENVIRONMENT,r)}Xr.getEnv=ff});var dc=c($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r._globalThis=void 0;$r._globalThis=typeof globalThis=="object"?globalThis:global});var hc=c(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.hexToBase64=void 0;function _c(r){return r>=48&&r<=57?r-48:r>=97&&r<=102?r-87:r-55}var Ef=Buffer.alloc(8),mf=Buffer.alloc(16);function gf(r){let e;r.length===16?e=Ef:r.length===32?e=mf:e=Buffer.alloc(r.length/2);let t=0;for(let n=0;n<r.length;n+=2){let i=_c(r.charCodeAt(n)),s=_c(r.charCodeAt(n+1));e.writeUInt8(i<<4|s,t++)}return e.toString("base64")}Wr.hexToBase64=gf});var Ec=c(zr=>{"use strict";Object.defineProperty(zr,"__esModule",{value:!0});zr.RandomIdGenerator=void 0;var Tf=8,fc=16,Vs=class{constructor(){this.generateTraceId=pc(fc),this.generateSpanId=pc(Tf)}};zr.RandomIdGenerator=Vs;var Kr=Buffer.allocUnsafe(fc);function pc(r){return function(){for(let t=0;t<r/4;t++)Kr.writeUInt32BE(Math.random()*2**32>>>0,t*4);for(let t=0;t<r&&!(Kr[t]>0);t++)t===r-1&&(Kr[r-1]=1);return Kr.toString("hex",0,r)}}});var mc=c(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});Yr.otperformance=void 0;var Sf=J("perf_hooks");Yr.otperformance=Sf.performance});var js=c(Qr=>{"use strict";Object.defineProperty(Qr,"__esModule",{value:!0});Qr.VERSION=void 0;Qr.VERSION="1.19.0"});var gc=c(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.MessageTypeValues=R.RpcGrpcStatusCodeValues=R.MessagingOperationValues=R.MessagingDestinationKindValues=R.HttpFlavorValues=R.NetHostConnectionSubtypeValues=R.NetHostConnectionTypeValues=R.NetTransportValues=R.FaasInvokedProviderValues=R.FaasDocumentOperationValues=R.FaasTriggerValues=R.DbCassandraConsistencyLevelValues=R.DbSystemValues=R.SemanticAttributes=void 0;R.SemanticAttributes={AWS_LAMBDA_INVOKED_ARN:"aws.lambda.invoked_arn",DB_SYSTEM:"db.system",DB_CONNECTION_STRING:"db.connection_string",DB_USER:"db.user",DB_JDBC_DRIVER_CLASSNAME:"db.jdbc.driver_classname",DB_NAME:"db.name",DB_STATEMENT:"db.statement",DB_OPERATION:"db.operation",DB_MSSQL_INSTANCE_NAME:"db.mssql.instance_name",DB_CASSANDRA_KEYSPACE:"db.cassandra.keyspace",DB_CASSANDRA_PAGE_SIZE:"db.cassandra.page_size",DB_CASSANDRA_CONSISTENCY_LEVEL:"db.cassandra.consistency_level",DB_CASSANDRA_TABLE:"db.cassandra.table",DB_CASSANDRA_IDEMPOTENCE:"db.cassandra.idempotence",DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT:"db.cassandra.speculative_execution_count",DB_CASSANDRA_COORDINATOR_ID:"db.cassandra.coordinator.id",DB_CASSANDRA_COORDINATOR_DC:"db.cassandra.coordinator.dc",DB_HBASE_NAMESPACE:"db.hbase.namespace",DB_REDIS_DATABASE_INDEX:"db.redis.database_index",DB_MONGODB_COLLECTION:"db.mongodb.collection",DB_SQL_TABLE:"db.sql.table",EXCEPTION_TYPE:"exception.type",EXCEPTION_MESSAGE:"exception.message",EXCEPTION_STACKTRACE:"exception.stacktrace",EXCEPTION_ESCAPED:"exception.escaped",FAAS_TRIGGER:"faas.trigger",FAAS_EXECUTION:"faas.execution",FAAS_DOCUMENT_COLLECTION:"faas.document.collection",FAAS_DOCUMENT_OPERATION:"faas.document.operation",FAAS_DOCUMENT_TIME:"faas.document.time",FAAS_DOCUMENT_NAME:"faas.document.name",FAAS_TIME:"faas.time",FAAS_CRON:"faas.cron",FAAS_COLDSTART:"faas.coldstart",FAAS_INVOKED_NAME:"faas.invoked_name",FAAS_INVOKED_PROVIDER:"faas.invoked_provider",FAAS_INVOKED_REGION:"faas.invoked_region",NET_TRANSPORT:"net.transport",NET_PEER_IP:"net.peer.ip",NET_PEER_PORT:"net.peer.port",NET_PEER_NAME:"net.peer.name",NET_HOST_IP:"net.host.ip",NET_HOST_PORT:"net.host.port",NET_HOST_NAME:"net.host.name",NET_HOST_CONNECTION_TYPE:"net.host.connection.type",NET_HOST_CONNECTION_SUBTYPE:"net.host.connection.subtype",NET_HOST_CARRIER_NAME:"net.host.carrier.name",NET_HOST_CARRIER_MCC:"net.host.carrier.mcc",NET_HOST_CARRIER_MNC:"net.host.carrier.mnc",NET_HOST_CARRIER_ICC:"net.host.carrier.icc",PEER_SERVICE:"peer.service",ENDUSER_ID:"enduser.id",ENDUSER_ROLE:"enduser.role",ENDUSER_SCOPE:"enduser.scope",THREAD_ID:"thread.id",THREAD_NAME:"thread.name",CODE_FUNCTION:"code.function",CODE_NAMESPACE:"code.namespace",CODE_FILEPATH:"code.filepath",CODE_LINENO:"code.lineno",HTTP_METHOD:"http.method",HTTP_URL:"http.url",HTTP_TARGET:"http.target",HTTP_HOST:"http.host",HTTP_SCHEME:"http.scheme",HTTP_STATUS_CODE:"http.status_code",HTTP_FLAVOR:"http.flavor",HTTP_USER_AGENT:"http.user_agent",HTTP_REQUEST_CONTENT_LENGTH:"http.request_content_length",HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED:"http.request_content_length_uncompressed",HTTP_RESPONSE_CONTENT_LENGTH:"http.response_content_length",HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED:"http.response_content_length_uncompressed",HTTP_SERVER_NAME:"http.server_name",HTTP_ROUTE:"http.route",HTTP_CLIENT_IP:"http.client_ip",AWS_DYNAMODB_TABLE_NAMES:"aws.dynamodb.table_names",AWS_DYNAMODB_CONSUMED_CAPACITY:"aws.dynamodb.consumed_capacity",AWS_DYNAMODB_ITEM_COLLECTION_METRICS:"aws.dynamodb.item_collection_metrics",AWS_DYNAMODB_PROVISIONED_READ_CAPACITY:"aws.dynamodb.provisioned_read_capacity",AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY:"aws.dynamodb.provisioned_write_capacity",AWS_DYNAMODB_CONSISTENT_READ:"aws.dynamodb.consistent_read",AWS_DYNAMODB_PROJECTION:"aws.dynamodb.projection",AWS_DYNAMODB_LIMIT:"aws.dynamodb.limit",AWS_DYNAMODB_ATTRIBUTES_TO_GET:"aws.dynamodb.attributes_to_get",AWS_DYNAMODB_INDEX_NAME:"aws.dynamodb.index_name",AWS_DYNAMODB_SELECT:"aws.dynamodb.select",AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES:"aws.dynamodb.global_secondary_indexes",AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES:"aws.dynamodb.local_secondary_indexes",AWS_DYNAMODB_EXCLUSIVE_START_TABLE:"aws.dynamodb.exclusive_start_table",AWS_DYNAMODB_TABLE_COUNT:"aws.dynamodb.table_count",AWS_DYNAMODB_SCAN_FORWARD:"aws.dynamodb.scan_forward",AWS_DYNAMODB_SEGMENT:"aws.dynamodb.segment",AWS_DYNAMODB_TOTAL_SEGMENTS:"aws.dynamodb.total_segments",AWS_DYNAMODB_COUNT:"aws.dynamodb.count",AWS_DYNAMODB_SCANNED_COUNT:"aws.dynamodb.scanned_count",AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS:"aws.dynamodb.attribute_definitions",AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES:"aws.dynamodb.global_secondary_index_updates",MESSAGING_SYSTEM:"messaging.system",MESSAGING_DESTINATION:"messaging.destination",MESSAGING_DESTINATION_KIND:"messaging.destination_kind",MESSAGING_TEMP_DESTINATION:"messaging.temp_destination",MESSAGING_PROTOCOL:"messaging.protocol",MESSAGING_PROTOCOL_VERSION:"messaging.protocol_version",MESSAGING_URL:"messaging.url",MESSAGING_MESSAGE_ID:"messaging.message_id",MESSAGING_CONVERSATION_ID:"messaging.conversation_id",MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES:"messaging.message_payload_size_bytes",MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES:"messaging.message_payload_compressed_size_bytes",MESSAGING_OPERATION:"messaging.operation",MESSAGING_CONSUMER_ID:"messaging.consumer_id",MESSAGING_RABBITMQ_ROUTING_KEY:"messaging.rabbitmq.routing_key",MESSAGING_KAFKA_MESSAGE_KEY:"messaging.kafka.message_key",MESSAGING_KAFKA_CONSUMER_GROUP:"messaging.kafka.consumer_group",MESSAGING_KAFKA_CLIENT_ID:"messaging.kafka.client_id",MESSAGING_KAFKA_PARTITION:"messaging.kafka.partition",MESSAGING_KAFKA_TOMBSTONE:"messaging.kafka.tombstone",RPC_SYSTEM:"rpc.system",RPC_SERVICE:"rpc.service",RPC_METHOD:"rpc.method",RPC_GRPC_STATUS_CODE:"rpc.grpc.status_code",RPC_JSONRPC_VERSION:"rpc.jsonrpc.version",RPC_JSONRPC_REQUEST_ID:"rpc.jsonrpc.request_id",RPC_JSONRPC_ERROR_CODE:"rpc.jsonrpc.error_code",RPC_JSONRPC_ERROR_MESSAGE:"rpc.jsonrpc.error_message",MESSAGE_TYPE:"message.type",MESSAGE_ID:"message.id",MESSAGE_COMPRESSED_SIZE:"message.compressed_size",MESSAGE_UNCOMPRESSED_SIZE:"message.uncompressed_size"};R.DbSystemValues={OTHER_SQL:"other_sql",MSSQL:"mssql",MYSQL:"mysql",ORACLE:"oracle",DB2:"db2",POSTGRESQL:"postgresql",REDSHIFT:"redshift",HIVE:"hive",CLOUDSCAPE:"cloudscape",HSQLDB:"hsqldb",PROGRESS:"progress",MAXDB:"maxdb",HANADB:"hanadb",INGRES:"ingres",FIRSTSQL:"firstsql",EDB:"edb",CACHE:"cache",ADABAS:"adabas",FIREBIRD:"firebird",DERBY:"derby",FILEMAKER:"filemaker",INFORMIX:"informix",INSTANTDB:"instantdb",INTERBASE:"interbase",MARIADB:"mariadb",NETEZZA:"netezza",PERVASIVE:"pervasive",POINTBASE:"pointbase",SQLITE:"sqlite",SYBASE:"sybase",TERADATA:"teradata",VERTICA:"vertica",H2:"h2",COLDFUSION:"coldfusion",CASSANDRA:"cassandra",HBASE:"hbase",MONGODB:"mongodb",REDIS:"redis",COUCHBASE:"couchbase",COUCHDB:"couchdb",COSMOSDB:"cosmosdb",DYNAMODB:"dynamodb",NEO4J:"neo4j",GEODE:"geode",ELASTICSEARCH:"elasticsearch",MEMCACHED:"memcached",COCKROACHDB:"cockroachdb"};R.DbCassandraConsistencyLevelValues={ALL:"all",EACH_QUORUM:"each_quorum",QUORUM:"quorum",LOCAL_QUORUM:"local_quorum",ONE:"one",TWO:"two",THREE:"three",LOCAL_ONE:"local_one",ANY:"any",SERIAL:"serial",LOCAL_SERIAL:"local_serial"};R.FaasTriggerValues={DATASOURCE:"datasource",HTTP:"http",PUBSUB:"pubsub",TIMER:"timer",OTHER:"other"};R.FaasDocumentOperationValues={INSERT:"insert",EDIT:"edit",DELETE:"delete"};R.FaasInvokedProviderValues={ALIBABA_CLOUD:"alibaba_cloud",AWS:"aws",AZURE:"azure",GCP:"gcp"};R.NetTransportValues={IP_TCP:"ip_tcp",IP_UDP:"ip_udp",IP:"ip",UNIX:"unix",PIPE:"pipe",INPROC:"inproc",OTHER:"other"};R.NetHostConnectionTypeValues={WIFI:"wifi",WIRED:"wired",CELL:"cell",UNAVAILABLE:"unavailable",UNKNOWN:"unknown"};R.NetHostConnectionSubtypeValues={GPRS:"gprs",EDGE:"edge",UMTS:"umts",CDMA:"cdma",EVDO_0:"evdo_0",EVDO_A:"evdo_a",CDMA2000_1XRTT:"cdma2000_1xrtt",HSDPA:"hsdpa",HSUPA:"hsupa",HSPA:"hspa",IDEN:"iden",EVDO_B:"evdo_b",LTE:"lte",EHRPD:"ehrpd",HSPAP:"hspap",GSM:"gsm",TD_SCDMA:"td_scdma",IWLAN:"iwlan",NR:"nr",NRNSA:"nrnsa",LTE_CA:"lte_ca"};R.HttpFlavorValues={HTTP_1_0:"1.0",HTTP_1_1:"1.1",HTTP_2_0:"2.0",SPDY:"SPDY",QUIC:"QUIC"};R.MessagingDestinationKindValues={QUEUE:"queue",TOPIC:"topic"};R.MessagingOperationValues={RECEIVE:"receive",PROCESS:"process"};R.RpcGrpcStatusCodeValues={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15,UNAUTHENTICATED:16};R.MessageTypeValues={SENT:"SENT",RECEIVED:"RECEIVED"}});var Tc=c(He=>{"use strict";var Af=He&&He.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Of=He&&He.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Af(e,r,t)};Object.defineProperty(He,"__esModule",{value:!0});Of(gc(),He)});var Sc=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.TelemetrySdkLanguageValues=X.OsTypeValues=X.HostArchValues=X.AwsEcsLaunchtypeValues=X.CloudPlatformValues=X.CloudProviderValues=X.SemanticResourceAttributes=void 0;X.SemanticResourceAttributes={CLOUD_PROVIDER:"cloud.provider",CLOUD_ACCOUNT_ID:"cloud.account.id",CLOUD_REGION:"cloud.region",CLOUD_AVAILABILITY_ZONE:"cloud.availability_zone",CLOUD_PLATFORM:"cloud.platform",AWS_ECS_CONTAINER_ARN:"aws.ecs.container.arn",AWS_ECS_CLUSTER_ARN:"aws.ecs.cluster.arn",AWS_ECS_LAUNCHTYPE:"aws.ecs.launchtype",AWS_ECS_TASK_ARN:"aws.ecs.task.arn",AWS_ECS_TASK_FAMILY:"aws.ecs.task.family",AWS_ECS_TASK_REVISION:"aws.ecs.task.revision",AWS_EKS_CLUSTER_ARN:"aws.eks.cluster.arn",AWS_LOG_GROUP_NAMES:"aws.log.group.names",AWS_LOG_GROUP_ARNS:"aws.log.group.arns",AWS_LOG_STREAM_NAMES:"aws.log.stream.names",AWS_LOG_STREAM_ARNS:"aws.log.stream.arns",CONTAINER_NAME:"container.name",CONTAINER_ID:"container.id",CONTAINER_RUNTIME:"container.runtime",CONTAINER_IMAGE_NAME:"container.image.name",CONTAINER_IMAGE_TAG:"container.image.tag",DEPLOYMENT_ENVIRONMENT:"deployment.environment",DEVICE_ID:"device.id",DEVICE_MODEL_IDENTIFIER:"device.model.identifier",DEVICE_MODEL_NAME:"device.model.name",FAAS_NAME:"faas.name",FAAS_ID:"faas.id",FAAS_VERSION:"faas.version",FAAS_INSTANCE:"faas.instance",FAAS_MAX_MEMORY:"faas.max_memory",HOST_ID:"host.id",HOST_NAME:"host.name",HOST_TYPE:"host.type",HOST_ARCH:"host.arch",HOST_IMAGE_NAME:"host.image.name",HOST_IMAGE_ID:"host.image.id",HOST_IMAGE_VERSION:"host.image.version",K8S_CLUSTER_NAME:"k8s.cluster.name",K8S_NODE_NAME:"k8s.node.name",K8S_NODE_UID:"k8s.node.uid",K8S_NAMESPACE_NAME:"k8s.namespace.name",K8S_POD_UID:"k8s.pod.uid",K8S_POD_NAME:"k8s.pod.name",K8S_CONTAINER_NAME:"k8s.container.name",K8S_REPLICASET_UID:"k8s.replicaset.uid",K8S_REPLICASET_NAME:"k8s.replicaset.name",K8S_DEPLOYMENT_UID:"k8s.deployment.uid",K8S_DEPLOYMENT_NAME:"k8s.deployment.name",K8S_STATEFULSET_UID:"k8s.statefulset.uid",K8S_STATEFULSET_NAME:"k8s.statefulset.name",K8S_DAEMONSET_UID:"k8s.daemonset.uid",K8S_DAEMONSET_NAME:"k8s.daemonset.name",K8S_JOB_UID:"k8s.job.uid",K8S_JOB_NAME:"k8s.job.name",K8S_CRONJOB_UID:"k8s.cronjob.uid",K8S_CRONJOB_NAME:"k8s.cronjob.name",OS_TYPE:"os.type",OS_DESCRIPTION:"os.description",OS_NAME:"os.name",OS_VERSION:"os.version",PROCESS_PID:"process.pid",PROCESS_EXECUTABLE_NAME:"process.executable.name",PROCESS_EXECUTABLE_PATH:"process.executable.path",PROCESS_COMMAND:"process.command",PROCESS_COMMAND_LINE:"process.command_line",PROCESS_COMMAND_ARGS:"process.command_args",PROCESS_OWNER:"process.owner",PROCESS_RUNTIME_NAME:"process.runtime.name",PROCESS_RUNTIME_VERSION:"process.runtime.version",PROCESS_RUNTIME_DESCRIPTION:"process.runtime.description",SERVICE_NAME:"service.name",SERVICE_NAMESPACE:"service.namespace",SERVICE_INSTANCE_ID:"service.instance.id",SERVICE_VERSION:"service.version",TELEMETRY_SDK_NAME:"telemetry.sdk.name",TELEMETRY_SDK_LANGUAGE:"telemetry.sdk.language",TELEMETRY_SDK_VERSION:"telemetry.sdk.version",TELEMETRY_AUTO_VERSION:"telemetry.auto.version",WEBENGINE_NAME:"webengine.name",WEBENGINE_VERSION:"webengine.version",WEBENGINE_DESCRIPTION:"webengine.description"};X.CloudProviderValues={ALIBABA_CLOUD:"alibaba_cloud",AWS:"aws",AZURE:"azure",GCP:"gcp"};X.CloudPlatformValues={ALIBABA_CLOUD_ECS:"alibaba_cloud_ecs",ALIBABA_CLOUD_FC:"alibaba_cloud_fc",AWS_EC2:"aws_ec2",AWS_ECS:"aws_ecs",AWS_EKS:"aws_eks",AWS_LAMBDA:"aws_lambda",AWS_ELASTIC_BEANSTALK:"aws_elastic_beanstalk",AZURE_VM:"azure_vm",AZURE_CONTAINER_INSTANCES:"azure_container_instances",AZURE_AKS:"azure_aks",AZURE_FUNCTIONS:"azure_functions",AZURE_APP_SERVICE:"azure_app_service",GCP_COMPUTE_ENGINE:"gcp_compute_engine",GCP_CLOUD_RUN:"gcp_cloud_run",GCP_KUBERNETES_ENGINE:"gcp_kubernetes_engine",GCP_CLOUD_FUNCTIONS:"gcp_cloud_functions",GCP_APP_ENGINE:"gcp_app_engine"};X.AwsEcsLaunchtypeValues={EC2:"ec2",FARGATE:"fargate"};X.HostArchValues={AMD64:"amd64",ARM32:"arm32",ARM64:"arm64",IA64:"ia64",PPC32:"ppc32",PPC64:"ppc64",X86:"x86"};X.OsTypeValues={WINDOWS:"windows",LINUX:"linux",DARWIN:"darwin",FREEBSD:"freebsd",NETBSD:"netbsd",OPENBSD:"openbsd",DRAGONFLYBSD:"dragonflybsd",HPUX:"hpux",AIX:"aix",SOLARIS:"solaris",Z_OS:"z_os"};X.TelemetrySdkLanguageValues={CPP:"cpp",DOTNET:"dotnet",ERLANG:"erlang",GO:"go",JAVA:"java",NODEJS:"nodejs",PHP:"php",PYTHON:"python",RUBY:"ruby",WEBJS:"webjs"}});var Ac=c(ke=>{"use strict";var Rf=ke&&ke.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),bf=ke&&ke.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Rf(e,r,t)};Object.defineProperty(ke,"__esModule",{value:!0});bf(Sc(),ke)});var ie=c(Le=>{"use strict";var Pf=Le&&Le.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Oc=Le&&Le.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Pf(e,r,t)};Object.defineProperty(Le,"__esModule",{value:!0});Oc(Tc(),Le);Oc(Ac(),Le)});var Rc=c(Zr=>{"use strict";Object.defineProperty(Zr,"__esModule",{value:!0});Zr.SDK_INFO=void 0;var yf=js(),lr=ie();Zr.SDK_INFO={[lr.SemanticResourceAttributes.TELEMETRY_SDK_NAME]:"opentelemetry",[lr.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]:"node",[lr.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]:lr.TelemetrySdkLanguageValues.NODEJS,[lr.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]:yf.VERSION}});var bc=c(Jr=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});Jr.unrefTimer=void 0;function vf(r){r.unref()}Jr.unrefTimer=vf});var Pc=c(ee=>{"use strict";var If=ee&&ee.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Xe=ee&&ee.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&If(e,r,t)};Object.defineProperty(ee,"__esModule",{value:!0});Xe(lc(),ee);Xe(dc(),ee);Xe(hc(),ee);Xe(Ec(),ee);Xe(mc(),ee);Xe(Rc(),ee);Xe(bc(),ee)});var Fs=c($e=>{"use strict";var Lf=$e&&$e.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Mf=$e&&$e.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Lf(e,r,t)};Object.defineProperty($e,"__esModule",{value:!0});Mf(Pc(),$e)});var Lc=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.addHrTimes=P.isTimeInput=P.isTimeInputHrTime=P.hrTimeToMicroseconds=P.hrTimeToMilliseconds=P.hrTimeToNanoseconds=P.hrTimeToTimeStamp=P.hrTimeDuration=P.timeInputToHrTime=P.hrTime=P.getTimeOrigin=P.millisToHrTime=void 0;var Hs=Fs(),yc=9,Cf=6,Nf=Math.pow(10,Cf),en=Math.pow(10,yc);function dr(r){let e=r/1e3,t=Math.trunc(e),n=Math.round(r%1e3*Nf);return[t,n]}P.millisToHrTime=dr;function ks(){let r=Hs.otperformance.timeOrigin;if(typeof r!="number"){let e=Hs.otperformance;r=e.timing&&e.timing.fetchStart}return r}P.getTimeOrigin=ks;function vc(r){let e=dr(ks()),t=dr(typeof r=="number"?r:Hs.otperformance.now());return Ic(e,t)}P.hrTime=vc;function wf(r){if(Xs(r))return r;if(typeof r=="number")return r<ks()?vc(r):dr(r);if(r instanceof Date)return dr(r.getTime());throw TypeError("Invalid input type")}P.timeInputToHrTime=wf;function xf(r,e){let t=e[0]-r[0],n=e[1]-r[1];return n<0&&(t-=1,n+=en),[t,n]}P.hrTimeDuration=xf;function Df(r){let e=yc,t=`${"0".repeat(e)}${r[1]}Z`,n=t.substr(t.length-e-1);return new Date(r[0]*1e3).toISOString().replace("000Z",n)}P.hrTimeToTimeStamp=Df;function Bf(r){return r[0]*en+r[1]}P.hrTimeToNanoseconds=Bf;function Uf(r){return r[0]*1e3+r[1]/1e6}P.hrTimeToMilliseconds=Uf;function qf(r){return r[0]*1e6+r[1]/1e3}P.hrTimeToMicroseconds=qf;function Xs(r){return Array.isArray(r)&&r.length===2&&typeof r[0]=="number"&&typeof r[1]=="number"}P.isTimeInputHrTime=Xs;function Gf(r){return Xs(r)||typeof r=="number"||r instanceof Date}P.isTimeInput=Gf;function Ic(r,e){let t=[r[0]+e[0],r[1]+e[1]];return t[1]>=en&&(t[1]-=en,t[0]+=1),t}P.addHrTimes=Ic});var Cc=c(Mc=>{"use strict";Object.defineProperty(Mc,"__esModule",{value:!0})});var Nc=c(_r=>{"use strict";Object.defineProperty(_r,"__esModule",{value:!0});_r.ExportResultCode=void 0;var Vf;(function(r){r[r.SUCCESS=0]="SUCCESS",r[r.FAILED=1]="FAILED"})(Vf=_r.ExportResultCode||(_r.ExportResultCode={}))});var xc=c(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});tn.CompositePropagator=void 0;var wc=(h(),f(d)),$s=class{constructor(e={}){var t;this._propagators=(t=e.propagators)!==null&&t!==void 0?t:[],this._fields=Array.from(new Set(this._propagators.map(n=>typeof n.fields=="function"?n.fields():[]).reduce((n,i)=>n.concat(i),[])))}inject(e,t,n){for(let i of this._propagators)try{i.inject(e,t,n)}catch(s){wc.diag.warn(`Failed to inject with ${i.constructor.name}. Err: ${s.message}`)}}extract(e,t,n){return this._propagators.reduce((i,s)=>{try{return s.extract(i,t,n)}catch(o){wc.diag.warn(`Failed to inject with ${s.constructor.name}. Err: ${o.message}`)}return i},e)}fields(){return this._fields.slice()}};tn.CompositePropagator=$s});var Dc=c(ft=>{"use strict";Object.defineProperty(ft,"__esModule",{value:!0});ft.validateValue=ft.validateKey=void 0;var Ws="[_0-9a-z-*/]",jf=`[a-z]${Ws}{0,255}`,Ff=`[a-z0-9]${Ws}{0,240}@[a-z]${Ws}{0,13}`,Hf=new RegExp(`^(?:${jf}|${Ff})$`),kf=/^[ -~]{0,255}[!-~]$/,Xf=/,|=/;function $f(r){return Hf.test(r)}ft.validateKey=$f;function Wf(r){return kf.test(r)&&!Xf.test(r)}ft.validateValue=Wf});var zs=c(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});rn.TraceState=void 0;var Bc=Dc(),Uc=32,Kf=512,qc=",",Gc="=",Ks=class r{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){let n=this._clone();return n._internalState.has(e)&&n._internalState.delete(e),n._internalState.set(e,t),n}unset(e){let t=this._clone();return t._internalState.delete(e),t}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+Gc+this.get(t)),e),[]).join(qc)}_parse(e){e.length>Kf||(this._internalState=e.split(qc).reverse().reduce((t,n)=>{let i=n.trim(),s=i.indexOf(Gc);if(s!==-1){let o=i.slice(0,s),a=i.slice(s+1,n.length);(0,Bc.validateKey)(o)&&(0,Bc.validateValue)(a)&&t.set(o,a)}return t},new Map),this._internalState.size>Uc&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,Uc))))}_keys(){return Array.from(this._internalState.keys()).reverse()}_clone(){let e=new r;return e._internalState=new Map(this._internalState),e}};rn.TraceState=Ks});var jc=c($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.W3CTraceContextPropagator=$.parseTraceParent=$.TRACE_STATE_HEADER=$.TRACE_PARENT_HEADER=void 0;var nn=(h(),f(d)),zf=ur(),Yf=zs();$.TRACE_PARENT_HEADER="traceparent";$.TRACE_STATE_HEADER="tracestate";var Qf="00",Zf="(?!ff)[\\da-f]{2}",Jf="(?![0]{32})[\\da-f]{32}",eE="(?![0]{16})[\\da-f]{16}",tE="[\\da-f]{2}",rE=new RegExp(`^\\s?(${Zf})-(${Jf})-(${eE})-(${tE})(-.*)?\\s?$`);function Vc(r){let e=rE.exec(r);return!e||e[1]==="00"&&e[5]?null:{traceId:e[2],spanId:e[3],traceFlags:parseInt(e[4],16)}}$.parseTraceParent=Vc;var Ys=class{inject(e,t,n){let i=nn.trace.getSpanContext(e);if(!i||(0,zf.isTracingSuppressed)(e)||!(0,nn.isSpanContextValid)(i))return;let s=`${Qf}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||nn.TraceFlags.NONE).toString(16)}`;n.set(t,$.TRACE_PARENT_HEADER,s),i.traceState&&n.set(t,$.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,t,n){let i=n.get(t,$.TRACE_PARENT_HEADER);if(!i)return e;let s=Array.isArray(i)?i[0]:i;if(typeof s!="string")return e;let o=Vc(s);if(!o)return e;o.isRemote=!0;let a=n.get(t,$.TRACE_STATE_HEADER);if(a){let u=Array.isArray(a)?a.join(","):a;o.traceState=new Yf.TraceState(typeof u=="string"?u:void 0)}return nn.trace.setSpanContext(e,o)}fields(){return[$.TRACE_PARENT_HEADER,$.TRACE_STATE_HEADER]}};$.W3CTraceContextPropagator=Ys});var Hc=c(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0})});var kc=c(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.getRPCMetadata=ue.deleteRPCMetadata=ue.setRPCMetadata=ue.RPCType=void 0;var nE=(h(),f(d)),Qs=(0,nE.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),iE;(function(r){r.HTTP="http"})(iE=ue.RPCType||(ue.RPCType={}));function sE(r,e){return r.setValue(Qs,e)}ue.setRPCMetadata=sE;function oE(r){return r.deleteValue(Qs)}ue.deleteRPCMetadata=oE;function aE(r){return r.getValue(Qs)}ue.getRPCMetadata=aE});var Js=c(sn=>{"use strict";Object.defineProperty(sn,"__esModule",{value:!0});sn.AlwaysOffSampler=void 0;var uE=(h(),f(d)),Zs=class{shouldSample(){return{decision:uE.SamplingDecision.NOT_RECORD}}toString(){return"AlwaysOffSampler"}};sn.AlwaysOffSampler=Zs});var to=c(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});on.AlwaysOnSampler=void 0;var cE=(h(),f(d)),eo=class{shouldSample(){return{decision:cE.SamplingDecision.RECORD_AND_SAMPLED}}toString(){return"AlwaysOnSampler"}};on.AlwaysOnSampler=eo});var $c=c(un=>{"use strict";Object.defineProperty(un,"__esModule",{value:!0});un.ParentBasedSampler=void 0;var an=(h(),f(d)),lE=Us(),Xc=Js(),ro=to(),no=class{constructor(e){var t,n,i,s;this._root=e.root,this._root||((0,lE.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),this._root=new ro.AlwaysOnSampler),this._remoteParentSampled=(t=e.remoteParentSampled)!==null&&t!==void 0?t:new ro.AlwaysOnSampler,this._remoteParentNotSampled=(n=e.remoteParentNotSampled)!==null&&n!==void 0?n:new Xc.AlwaysOffSampler,this._localParentSampled=(i=e.localParentSampled)!==null&&i!==void 0?i:new ro.AlwaysOnSampler,this._localParentNotSampled=(s=e.localParentNotSampled)!==null&&s!==void 0?s:new Xc.AlwaysOffSampler}shouldSample(e,t,n,i,s,o){let a=an.trace.getSpanContext(e);return!a||!(0,an.isSpanContextValid)(a)?this._root.shouldSample(e,t,n,i,s,o):a.isRemote?a.traceFlags&an.TraceFlags.SAMPLED?this._remoteParentSampled.shouldSample(e,t,n,i,s,o):this._remoteParentNotSampled.shouldSample(e,t,n,i,s,o):a.traceFlags&an.TraceFlags.SAMPLED?this._localParentSampled.shouldSample(e,t,n,i,s,o):this._localParentNotSampled.shouldSample(e,t,n,i,s,o)}toString(){return`ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`}};un.ParentBasedSampler=no});var Wc=c(cn=>{"use strict";Object.defineProperty(cn,"__esModule",{value:!0});cn.TraceIdRatioBasedSampler=void 0;var io=(h(),f(d)),so=class{constructor(e=0){this._ratio=e,this._ratio=this._normalize(e),this._upperBound=Math.floor(this._ratio*4294967295)}shouldSample(e,t){return{decision:(0,io.isValidTraceId)(t)&&this._accumulate(t)<this._upperBound?io.SamplingDecision.RECORD_AND_SAMPLED:io.SamplingDecision.NOT_RECORD}}toString(){return`TraceIdRatioBased{${this._ratio}}`}_normalize(e){return typeof e!="number"||isNaN(e)?0:e>=1?1:e<=0?0:e}_accumulate(e){let t=0;for(let n=0;n<e.length/8;n++){let i=n*8,s=parseInt(e.slice(i,i+8),16);t=(t^s)>>>0}return t}};cn.TraceIdRatioBasedSampler=so});var Zc=c(ln=>{"use strict";Object.defineProperty(ln,"__esModule",{value:!0});ln.isPlainObject=void 0;var dE="[object Object]",_E="[object Null]",hE="[object Undefined]",pE=Function.prototype,Kc=pE.toString,fE=Kc.call(Object),EE=mE(Object.getPrototypeOf,Object),zc=Object.prototype,Yc=zc.hasOwnProperty,We=Symbol?Symbol.toStringTag:void 0,Qc=zc.toString;function mE(r,e){return function(t){return r(e(t))}}function gE(r){if(!TE(r)||SE(r)!==dE)return!1;let e=EE(r);if(e===null)return!0;let t=Yc.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Kc.call(t)===fE}ln.isPlainObject=gE;function TE(r){return r!=null&&typeof r=="object"}function SE(r){return r==null?r===void 0?hE:_E:We&&We in Object(r)?AE(r):OE(r)}function AE(r){let e=Yc.call(r,We),t=r[We],n=!1;try{r[We]=void 0,n=!0}catch{}let i=Qc.call(r);return n&&(e?r[We]=t:delete r[We]),i}function OE(r){return Qc.call(r)}});var nl=c(hn=>{"use strict";Object.defineProperty(hn,"__esModule",{value:!0});hn.merge=void 0;var Jc=Zc(),RE=20;function bE(...r){let e=r.shift(),t=new WeakMap;for(;r.length>0;)e=tl(e,r.shift(),0,t);return e}hn.merge=bE;function oo(r){return _n(r)?r.slice():r}function tl(r,e,t=0,n){let i;if(!(t>RE)){if(t++,dn(r)||dn(e)||rl(e))i=oo(e);else if(_n(r)){if(i=r.slice(),_n(e))for(let s=0,o=e.length;s<o;s++)i.push(oo(e[s]));else if(hr(e)){let s=Object.keys(e);for(let o=0,a=s.length;o<a;o++){let u=s[o];i[u]=oo(e[u])}}}else if(hr(r))if(hr(e)){if(!PE(r,e))return e;i=Object.assign({},r);let s=Object.keys(e);for(let o=0,a=s.length;o<a;o++){let u=s[o],l=e[u];if(dn(l))typeof l>"u"?delete i[u]:i[u]=l;else{let _=i[u],E=l;if(el(r,u,n)||el(e,u,n))delete i[u];else{if(hr(_)&&hr(E)){let O=n.get(_)||[],D=n.get(E)||[];O.push({obj:r,key:u}),D.push({obj:e,key:u}),n.set(_,O),n.set(E,D)}i[u]=tl(i[u],l,t,n)}}}}else i=e;return i}}function el(r,e,t){let n=t.get(r[e])||[];for(let i=0,s=n.length;i<s;i++){let o=n[i];if(o.key===e&&o.obj===r)return!0}return!1}function _n(r){return Array.isArray(r)}function rl(r){return typeof r=="function"}function hr(r){return!dn(r)&&!_n(r)&&!rl(r)&&typeof r=="object"}function dn(r){return typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r instanceof Date||r instanceof RegExp||r===null}function PE(r,e){return!(!(0,Jc.isPlainObject)(r)||!(0,Jc.isPlainObject)(e))}});var il=c(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.callWithTimeout=Et.TimeoutError=void 0;var pn=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}};Et.TimeoutError=pn;function yE(r,e){let t,n=new Promise(function(s,o){t=setTimeout(function(){o(new pn("Operation timed out."))},e)});return Promise.race([r,n]).then(i=>(clearTimeout(t),i),i=>{throw clearTimeout(t),i})}Et.callWithTimeout=yE});var ol=c(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.isUrlIgnored=mt.urlMatches=void 0;function sl(r,e){return typeof e=="string"?r===e:!!r.match(e)}mt.urlMatches=sl;function vE(r,e){if(!e)return!1;for(let t of e)if(sl(r,t))return!0;return!1}mt.isUrlIgnored=vE});var al=c(fn=>{"use strict";Object.defineProperty(fn,"__esModule",{value:!0});fn.isWrapped=void 0;function IE(r){return typeof r=="function"&&typeof r.__original=="function"&&typeof r.__unwrap=="function"&&r.__wrapped===!0}fn.isWrapped=IE});var ul=c(En=>{"use strict";Object.defineProperty(En,"__esModule",{value:!0});En.Deferred=void 0;var ao=class{constructor(){this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}get promise(){return this._promise}resolve(e){this._resolve(e)}reject(e){this._reject(e)}};En.Deferred=ao});var cl=c(mn=>{"use strict";Object.defineProperty(mn,"__esModule",{value:!0});mn.BindOnceFuture=void 0;var LE=ul(),uo=class{constructor(e,t){this._callback=e,this._that=t,this._isCalled=!1,this._deferred=new LE.Deferred}get isCalled(){return this._isCalled}get promise(){return this._deferred.promise}call(...e){if(!this._isCalled){this._isCalled=!0;try{Promise.resolve(this._callback.call(this._that,...e)).then(t=>this._deferred.resolve(t),t=>this._deferred.reject(t))}catch(t){this._deferred.reject(t)}}return this._deferred.promise}};mn.BindOnceFuture=uo});var dl=c(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn._export=void 0;var ll=(h(),f(d)),ME=ur();function CE(r,e){return new Promise(t=>{ll.context.with((0,ME.suppressTracing)(ll.context.active()),()=>{r.export(e,n=>{t(n)})})})}gn._export=CE});var S=c(T=>{"use strict";var NE=T&&T.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),b=T&&T.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&NE(e,r,t)};Object.defineProperty(T,"__esModule",{value:!0});T.internal=T.baggageUtils=void 0;b(ec(),T);b(tc(),T);b(oc(),T);b(Us(),T);b(Bs(),T);b(Lc(),T);b(Cc(),T);b(Nc(),T);T.baggageUtils=Cs();b(Fs(),T);b(xc(),T);b(jc(),T);b(Hc(),T);b(kc(),T);b(Js(),T);b(to(),T);b($c(),T);b(Wc(),T);b(ur(),T);b(zs(),T);b(kr(),T);b(nl(),T);b(qs(),T);b(il(),T);b(ol(),T);b(al(),T);b(cl(),T);b(js(),T);var wE=dl();T.internal={_export:wE._export}});var _l=c(Tn=>{"use strict";Object.defineProperty(Tn,"__esModule",{value:!0});Tn.ExceptionEventName=void 0;Tn.ExceptionEventName="exception"});var lo=c(Sn=>{"use strict";Object.defineProperty(Sn,"__esModule",{value:!0});Sn.Span=void 0;var pe=(h(),f(d)),W=S(),Ke=ie(),xE=_l(),co=class{constructor(e,t,n,i,s,o,a=[],u,l,_){this.attributes={},this.links=[],this.events=[],this._droppedAttributesCount=0,this._droppedEventsCount=0,this._droppedLinksCount=0,this.status={code:pe.SpanStatusCode.UNSET},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=n,this._spanContext=i,this.parentSpanId=o,this.kind=s,this.links=a;let E=Date.now();this._performanceStartTime=W.otperformance.now(),this._performanceOffset=E-(this._performanceStartTime+(0,W.getTimeOrigin)()),this._startTimeProvided=u!=null,this.startTime=this._getTime(u??E),this.resource=e.resource,this.instrumentationLibrary=e.instrumentationLibrary,this._spanLimits=e.getSpanLimits(),_!=null&&this.setAttributes(_),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this,t),this._attributeValueLengthLimit=this._spanLimits.attributeValueLengthLimit||0}spanContext(){return this._spanContext}setAttribute(e,t){return t==null||this._isSpanEnded()?this:e.length===0?(pe.diag.warn(`Invalid attribute key: ${e}`),this):(0,W.isAttributeValue)(t)?Object.keys(this.attributes).length>=this._spanLimits.attributeCountLimit&&!Object.prototype.hasOwnProperty.call(this.attributes,e)?(this._droppedAttributesCount++,this):(this.attributes[e]=this._truncateToSize(t),this):(pe.diag.warn(`Invalid attribute value set for key: ${e}`),this)}setAttributes(e){for(let[t,n]of Object.entries(e))this.setAttribute(t,n);return this}addEvent(e,t,n){if(this._isSpanEnded())return this;if(this._spanLimits.eventCountLimit===0)return pe.diag.warn("No events allowed."),this._droppedEventsCount++,this;this.events.length>=this._spanLimits.eventCountLimit&&(pe.diag.warn("Dropping extra events."),this.events.shift(),this._droppedEventsCount++),(0,W.isTimeInput)(t)&&((0,W.isTimeInput)(n)||(n=t),t=void 0);let i=(0,W.sanitizeAttributes)(t);return this.events.push({name:e,attributes:i,time:this._getTime(n),droppedAttributesCount:0}),this}setStatus(e){return this._isSpanEnded()?this:(this.status=e,this)}updateName(e){return this._isSpanEnded()?this:(this.name=e,this)}end(e){if(this._isSpanEnded()){pe.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);return}this._ended=!0,this.endTime=this._getTime(e),this._duration=(0,W.hrTimeDuration)(this.startTime,this.endTime),this._duration[0]<0&&(pe.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.",this.startTime,this.endTime),this.endTime=this.startTime.slice(),this._duration=[0,0]),this._spanProcessor.onEnd(this)}_getTime(e){if(typeof e=="number"&&e<W.otperformance.now())return(0,W.hrTime)(e+this._performanceOffset);if(typeof e=="number")return(0,W.millisToHrTime)(e);if(e instanceof Date)return(0,W.millisToHrTime)(e.getTime());if((0,W.isTimeInputHrTime)(e))return e;if(this._startTimeProvided)return(0,W.millisToHrTime)(Date.now());let t=W.otperformance.now()-this._performanceStartTime;return(0,W.addHrTimes)(this.startTime,(0,W.millisToHrTime)(t))}isRecording(){return this._ended===!1}recordException(e,t){let n={};typeof e=="string"?n[Ke.SemanticAttributes.EXCEPTION_MESSAGE]=e:e&&(e.code?n[Ke.SemanticAttributes.EXCEPTION_TYPE]=e.code.toString():e.name&&(n[Ke.SemanticAttributes.EXCEPTION_TYPE]=e.name),e.message&&(n[Ke.SemanticAttributes.EXCEPTION_MESSAGE]=e.message),e.stack&&(n[Ke.SemanticAttributes.EXCEPTION_STACKTRACE]=e.stack)),n[Ke.SemanticAttributes.EXCEPTION_TYPE]||n[Ke.SemanticAttributes.EXCEPTION_MESSAGE]?this.addEvent(xE.ExceptionEventName,n,t):pe.diag.warn(`Failed to record an exception ${e}`)}get duration(){return this._duration}get ended(){return this._ended}get droppedAttributesCount(){return this._droppedAttributesCount}get droppedEventsCount(){return this._droppedEventsCount}get droppedLinksCount(){return this._droppedLinksCount}_isSpanEnded(){return this._ended&&pe.diag.warn(`Can not execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`),this._ended}_truncateToLimitUtil(e,t){return e.length<=t?e:e.substr(0,t)}_truncateToSize(e){let t=this._attributeValueLengthLimit;return t<=0?(pe.diag.warn(`Attribute value limit must be positive, got ${t}`),e):typeof e=="string"?this._truncateToLimitUtil(e,t):Array.isArray(e)?e.map(n=>typeof n=="string"?this._truncateToLimitUtil(n,t):n):e}};Sn.Span=co});var fr=c(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.SamplingDecision=void 0;var DE;(function(r){r[r.NOT_RECORD=0]="NOT_RECORD",r[r.RECORD=1]="RECORD",r[r.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"})(DE=pr.SamplingDecision||(pr.SamplingDecision={}))});var On=c(An=>{"use strict";Object.defineProperty(An,"__esModule",{value:!0});An.AlwaysOffSampler=void 0;var BE=fr(),_o=class{shouldSample(){return{decision:BE.SamplingDecision.NOT_RECORD}}toString(){return"AlwaysOffSampler"}};An.AlwaysOffSampler=_o});var bn=c(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.AlwaysOnSampler=void 0;var UE=fr(),ho=class{shouldSample(){return{decision:UE.SamplingDecision.RECORD_AND_SAMPLED}}toString(){return"AlwaysOnSampler"}};Rn.AlwaysOnSampler=ho});var Eo=c(yn=>{"use strict";Object.defineProperty(yn,"__esModule",{value:!0});yn.ParentBasedSampler=void 0;var Pn=(h(),f(d)),qE=S(),hl=On(),po=bn(),fo=class{constructor(e){var t,n,i,s;this._root=e.root,this._root||((0,qE.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),this._root=new po.AlwaysOnSampler),this._remoteParentSampled=(t=e.remoteParentSampled)!==null&&t!==void 0?t:new po.AlwaysOnSampler,this._remoteParentNotSampled=(n=e.remoteParentNotSampled)!==null&&n!==void 0?n:new hl.AlwaysOffSampler,this._localParentSampled=(i=e.localParentSampled)!==null&&i!==void 0?i:new po.AlwaysOnSampler,this._localParentNotSampled=(s=e.localParentNotSampled)!==null&&s!==void 0?s:new hl.AlwaysOffSampler}shouldSample(e,t,n,i,s,o){let a=Pn.trace.getSpanContext(e);return!a||!(0,Pn.isSpanContextValid)(a)?this._root.shouldSample(e,t,n,i,s,o):a.isRemote?a.traceFlags&Pn.TraceFlags.SAMPLED?this._remoteParentSampled.shouldSample(e,t,n,i,s,o):this._remoteParentNotSampled.shouldSample(e,t,n,i,s,o):a.traceFlags&Pn.TraceFlags.SAMPLED?this._localParentSampled.shouldSample(e,t,n,i,s,o):this._localParentNotSampled.shouldSample(e,t,n,i,s,o)}toString(){return`ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`}};yn.ParentBasedSampler=fo});var go=c(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.TraceIdRatioBasedSampler=void 0;var GE=(h(),f(d)),pl=fr(),mo=class{constructor(e=0){this._ratio=e,this._ratio=this._normalize(e),this._upperBound=Math.floor(this._ratio*4294967295)}shouldSample(e,t){return{decision:(0,GE.isValidTraceId)(t)&&this._accumulate(t)<this._upperBound?pl.SamplingDecision.RECORD_AND_SAMPLED:pl.SamplingDecision.NOT_RECORD}}toString(){return`TraceIdRatioBased{${this._ratio}}`}_normalize(e){return typeof e!="number"||isNaN(e)?0:e>=1?1:e<=0?0:e}_accumulate(e){let t=0;for(let n=0;n<e.length/8;n++){let i=n*8,s=parseInt(e.slice(i,i+8),16);t=(t^s)>>>0}return t}};vn.TraceIdRatioBasedSampler=mo});var Ao=c(Tt=>{"use strict";Object.defineProperty(Tt,"__esModule",{value:!0});Tt.buildSamplerFromEnv=Tt.loadDefaultConfig=void 0;var In=(h(),f(d)),j=S(),fl=On(),To=bn(),So=Eo(),El=go(),VE=(0,j.getEnv)(),jE=j.TracesSamplerValues.AlwaysOn,gt=1;function FE(){return{sampler:gl(VE),forceFlushTimeoutMillis:3e4,generalLimits:{attributeValueLengthLimit:(0,j.getEnv)().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,attributeCountLimit:(0,j.getEnv)().OTEL_ATTRIBUTE_COUNT_LIMIT},spanLimits:{attributeValueLengthLimit:(0,j.getEnv)().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,attributeCountLimit:(0,j.getEnv)().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,linkCountLimit:(0,j.getEnv)().OTEL_SPAN_LINK_COUNT_LIMIT,eventCountLimit:(0,j.getEnv)().OTEL_SPAN_EVENT_COUNT_LIMIT,attributePerEventCountLimit:(0,j.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,attributePerLinkCountLimit:(0,j.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT}}}Tt.loadDefaultConfig=FE;function gl(r=(0,j.getEnv)()){switch(r.OTEL_TRACES_SAMPLER){case j.TracesSamplerValues.AlwaysOn:return new To.AlwaysOnSampler;case j.TracesSamplerValues.AlwaysOff:return new fl.AlwaysOffSampler;case j.TracesSamplerValues.ParentBasedAlwaysOn:return new So.ParentBasedSampler({root:new To.AlwaysOnSampler});case j.TracesSamplerValues.ParentBasedAlwaysOff:return new So.ParentBasedSampler({root:new fl.AlwaysOffSampler});case j.TracesSamplerValues.TraceIdRatio:return new El.TraceIdRatioBasedSampler(ml(r));case j.TracesSamplerValues.ParentBasedTraceIdRatio:return new So.ParentBasedSampler({root:new El.TraceIdRatioBasedSampler(ml(r))});default:return In.diag.error(`OTEL_TRACES_SAMPLER value "${r.OTEL_TRACES_SAMPLER} invalid, defaulting to ${jE}".`),new To.AlwaysOnSampler}}Tt.buildSamplerFromEnv=gl;function ml(r){if(r.OTEL_TRACES_SAMPLER_ARG===void 0||r.OTEL_TRACES_SAMPLER_ARG==="")return In.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${gt}.`),gt;let e=Number(r.OTEL_TRACES_SAMPLER_ARG);return isNaN(e)?(In.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${gt}.`),gt):e<0||e>1?(In.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${gt}.`),gt):e}});var Ro=c(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.reconfigureLimits=St.mergeConfig=void 0;var Tl=Ao(),Oo=S();function HE(r){let e={sampler:(0,Tl.buildSamplerFromEnv)()},t=(0,Tl.loadDefaultConfig)(),n=Object.assign({},t,e,r);return n.generalLimits=Object.assign({},t.generalLimits,r.generalLimits||{}),n.spanLimits=Object.assign({},t.spanLimits,r.spanLimits||{}),n}St.mergeConfig=HE;function kE(r){var e,t,n,i,s,o,a,u,l,_,E,O;let D=Object.assign({},r.spanLimits),z=(0,Oo.getEnvWithoutDefaults)();return D.attributeCountLimit=(o=(s=(i=(t=(e=r.spanLimits)===null||e===void 0?void 0:e.attributeCountLimit)!==null&&t!==void 0?t:(n=r.generalLimits)===null||n===void 0?void 0:n.attributeCountLimit)!==null&&i!==void 0?i:z.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT)!==null&&s!==void 0?s:z.OTEL_ATTRIBUTE_COUNT_LIMIT)!==null&&o!==void 0?o:Oo.DEFAULT_ATTRIBUTE_COUNT_LIMIT,D.attributeValueLengthLimit=(O=(E=(_=(u=(a=r.spanLimits)===null||a===void 0?void 0:a.attributeValueLengthLimit)!==null&&u!==void 0?u:(l=r.generalLimits)===null||l===void 0?void 0:l.attributeValueLengthLimit)!==null&&_!==void 0?_:z.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT)!==null&&E!==void 0?E:z.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT)!==null&&O!==void 0?O:Oo.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,Object.assign({},r,{spanLimits:D})}St.reconfigureLimits=kE});var Sl=c(Ln=>{"use strict";Object.defineProperty(Ln,"__esModule",{value:!0});Ln.BatchSpanProcessorBase=void 0;var At=(h(),f(d)),ze=S(),bo=class{constructor(e,t){this._exporter=e,this._isExporting=!1,this._finishedSpans=[],this._droppedSpansCount=0;let n=(0,ze.getEnv)();this._maxExportBatchSize=typeof t?.maxExportBatchSize=="number"?t.maxExportBatchSize:n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE,this._maxQueueSize=typeof t?.maxQueueSize=="number"?t.maxQueueSize:n.OTEL_BSP_MAX_QUEUE_SIZE,this._scheduledDelayMillis=typeof t?.scheduledDelayMillis=="number"?t.scheduledDelayMillis:n.OTEL_BSP_SCHEDULE_DELAY,this._exportTimeoutMillis=typeof t?.exportTimeoutMillis=="number"?t.exportTimeoutMillis:n.OTEL_BSP_EXPORT_TIMEOUT,this._shutdownOnce=new ze.BindOnceFuture(this._shutdown,this),this._maxExportBatchSize>this._maxQueueSize&&(At.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"),this._maxExportBatchSize=this._maxQueueSize)}forceFlush(){return this._shutdownOnce.isCalled?this._shutdownOnce.promise:this._flushAll()}onStart(e,t){}onEnd(e){this._shutdownOnce.isCalled||e.spanContext().traceFlags&At.TraceFlags.SAMPLED&&this._addToBuffer(e)}shutdown(){return this._shutdownOnce.call()}_shutdown(){return Promise.resolve().then(()=>this.onShutdown()).then(()=>this._flushAll()).then(()=>this._exporter.shutdown())}_addToBuffer(e){if(this._finishedSpans.length>=this._maxQueueSize){this._droppedSpansCount===0&&At.diag.debug("maxQueueSize reached, dropping spans"),this._droppedSpansCount++;return}this._droppedSpansCount>0&&(At.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`),this._droppedSpansCount=0),this._finishedSpans.push(e),this._maybeStartTimer()}_flushAll(){return new Promise((e,t)=>{let n=[],i=Math.ceil(this._finishedSpans.length/this._maxExportBatchSize);for(let s=0,o=i;s<o;s++)n.push(this._flushOneBatch());Promise.all(n).then(()=>{e()}).catch(t)})}_flushOneBatch(){return this._clearTimer(),this._finishedSpans.length===0?Promise.resolve():new Promise((e,t)=>{let n=setTimeout(()=>{t(new Error("Timeout"))},this._exportTimeoutMillis);At.context.with((0,ze.suppressTracing)(At.context.active()),()=>{let i=this._finishedSpans.splice(0,this._maxExportBatchSize),s=()=>this._exporter.export(i,a=>{var u;clearTimeout(n),a.code===ze.ExportResultCode.SUCCESS?e():t((u=a.error)!==null&&u!==void 0?u:new Error("BatchSpanProcessor: span export failed"))}),o=i.map(a=>a.resource).filter(a=>a.asyncAttributesPending);o.length===0?s():Promise.all(o.map(a=>{var u;return(u=a.waitForAsyncAttributes)===null||u===void 0?void 0:u.call(a)})).then(s,a=>{(0,ze.globalErrorHandler)(a),t(a)})})})}_maybeStartTimer(){if(this._isExporting)return;let e=()=>{this._isExporting=!0,this._flushOneBatch().then(()=>{this._isExporting=!1,this._finishedSpans.length>0&&(this._clearTimer(),this._maybeStartTimer())}).catch(t=>{this._isExporting=!1,(0,ze.globalErrorHandler)(t)})};if(this._finishedSpans.length>=this._maxExportBatchSize)return e();this._timer===void 0&&(this._timer=setTimeout(()=>e(),this._scheduledDelayMillis),(0,ze.unrefTimer)(this._timer))}_clearTimer(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0)}};Ln.BatchSpanProcessorBase=bo});var Al=c(Mn=>{"use strict";Object.defineProperty(Mn,"__esModule",{value:!0});Mn.BatchSpanProcessor=void 0;var XE=Sl(),Po=class extends XE.BatchSpanProcessorBase{onShutdown(){}};Mn.BatchSpanProcessor=Po});var bl=c(Nn=>{"use strict";Object.defineProperty(Nn,"__esModule",{value:!0});Nn.RandomIdGenerator=void 0;var $E=8,Rl=16,yo=class{constructor(){this.generateTraceId=Ol(Rl),this.generateSpanId=Ol($E)}};Nn.RandomIdGenerator=yo;var Cn=Buffer.allocUnsafe(Rl);function Ol(r){return function(){for(let t=0;t<r/4;t++)Cn.writeUInt32BE(Math.random()*2**32>>>0,t*4);for(let t=0;t<r&&!(Cn[t]>0);t++)t===r-1&&(Cn[r-1]=1);return Cn.toString("hex",0,r)}}});var yl=c(Me=>{"use strict";var WE=Me&&Me.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Pl=Me&&Me.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&WE(e,r,t)};Object.defineProperty(Me,"__esModule",{value:!0});Pl(Al(),Me);Pl(bl(),Me)});var wn=c(Ye=>{"use strict";var KE=Ye&&Ye.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),zE=Ye&&Ye.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&KE(e,r,t)};Object.defineProperty(Ye,"__esModule",{value:!0});zE(yl(),Ye)});var vl=c(Dn=>{"use strict";Object.defineProperty(Dn,"__esModule",{value:!0});Dn.Tracer=void 0;var F=(h(),f(d)),xn=S(),YE=lo(),QE=Ro(),ZE=wn(),vo=class{constructor(e,t,n){this._tracerProvider=n;let i=(0,QE.mergeConfig)(t);this._sampler=i.sampler,this._generalLimits=i.generalLimits,this._spanLimits=i.spanLimits,this._idGenerator=t.idGenerator||new ZE.RandomIdGenerator,this.resource=n.resource,this.instrumentationLibrary=e}startSpan(e,t={},n=F.context.active()){var i,s,o;t.root&&(n=F.trace.deleteSpan(n));let a=F.trace.getSpan(n);if((0,xn.isTracingSuppressed)(n))return F.diag.debug("Instrumentation suppressed, returning Noop Span"),F.trace.wrapSpanContext(F.INVALID_SPAN_CONTEXT);let u=a?.spanContext(),l=this._idGenerator.generateSpanId(),_,E,O;!u||!F.trace.isSpanContextValid(u)?_=this._idGenerator.generateTraceId():(_=u.traceId,E=u.traceState,O=u.spanId);let D=(i=t.kind)!==null&&i!==void 0?i:F.SpanKind.INTERNAL,z=((s=t.links)!==null&&s!==void 0?s:[]).map(dt=>({context:dt.context,attributes:(0,xn.sanitizeAttributes)(dt.attributes)})),I=(0,xn.sanitizeAttributes)(t.attributes),U=this._sampler.shouldSample(n,_,e,D,I,z);E=(o=U.traceState)!==null&&o!==void 0?o:E;let L=U.decision===F.SamplingDecision.RECORD_AND_SAMPLED?F.TraceFlags.SAMPLED:F.TraceFlags.NONE,m={traceId:_,spanId:l,traceFlags:L,traceState:E};if(U.decision===F.SamplingDecision.NOT_RECORD)return F.diag.debug("Recording is off, propagating context in a non-recording span"),F.trace.wrapSpanContext(m);let be=(0,xn.sanitizeAttributes)(Object.assign(I,U.attributes));return new YE.Span(this,n,e,m,D,O,z,t.startTime,void 0,be)}startActiveSpan(e,t,n,i){let s,o,a;if(arguments.length<2)return;arguments.length===2?a=t:arguments.length===3?(s=t,a=n):(s=t,o=n,a=i);let u=o??F.context.active(),l=this.startSpan(e,s,u),_=F.trace.setSpan(u,l);return F.context.with(_,a,void 0,l)}getGeneralLimits(){return this._generalLimits}getSpanLimits(){return this._spanLimits}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}};Dn.Tracer=vo});var Il=c(Bn=>{"use strict";Object.defineProperty(Bn,"__esModule",{value:!0});Bn.defaultServiceName=void 0;function JE(){return`unknown_service:${process.argv0}`}Bn.defaultServiceName=JE});var Io=c(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.normalizeType=Ot.normalizeArch=void 0;var em=r=>{switch(r){case"arm":return"arm32";case"ppc":return"ppc32";case"x64":return"amd64";default:return r}};Ot.normalizeArch=em;var tm=r=>{switch(r){case"sunos":return"solaris";case"win32":return"windows";default:return r}};Ot.normalizeType=tm});var qn=c(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.execAsync=void 0;var rm=J("child_process"),nm=J("util");Un.execAsync=nm.promisify(rm.exec)});var Ll=c(Gn=>{"use strict";Object.defineProperty(Gn,"__esModule",{value:!0});Gn.getMachineId=void 0;var im=qn(),sm=(h(),f(d));async function om(){try{let e=(await(0,im.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find(n=>n.includes("IOPlatformUUID"));if(!e)return"";let t=e.split('" = "');if(t.length===2)return t[1].slice(0,-1)}catch(r){sm.diag.debug(`error reading machine id: ${r}`)}return""}Gn.getMachineId=om});var Ml=c(Vn=>{"use strict";Object.defineProperty(Vn,"__esModule",{value:!0});Vn.getMachineId=void 0;var am=J("fs"),um=(h(),f(d));async function cm(){let r=["/etc/machine-id","/var/lib/dbus/machine-id"];for(let e of r)try{return(await am.promises.readFile(e,{encoding:"utf8"})).trim()}catch(t){um.diag.debug(`error reading machine id: ${t}`)}return""}Vn.getMachineId=cm});var Nl=c(jn=>{"use strict";Object.defineProperty(jn,"__esModule",{value:!0});jn.getMachineId=void 0;var lm=J("fs"),dm=qn(),Cl=(h(),f(d));async function _m(){try{return(await lm.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(r){Cl.diag.debug(`error reading machine id: ${r}`)}try{return(await(0,dm.execAsync)("kenv -q smbios.system.uuid")).stdout.trim()}catch(r){Cl.diag.debug(`error reading machine id: ${r}`)}return""}jn.getMachineId=_m});var xl=c(Fn=>{"use strict";Object.defineProperty(Fn,"__esModule",{value:!0});Fn.getMachineId=void 0;var wl=J("process"),hm=qn(),pm=(h(),f(d));async function fm(){let r="QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid",e="%windir%\\System32\\REG.exe";wl.arch==="ia32"&&"PROCESSOR_ARCHITEW6432"in wl.env&&(e="%windir%\\sysnative\\cmd.exe /c "+e);try{let n=(await(0,hm.execAsync)(`${e} ${r}`)).stdout.split("REG_SZ");if(n.length===2)return n[1].trim()}catch(t){pm.diag.debug(`error reading machine id: ${t}`)}return""}Fn.getMachineId=fm});var Dl=c(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.getMachineId=void 0;var Em=(h(),f(d));async function mm(){return Em.diag.debug("could not read machine-id: unsupported platform"),""}Hn.getMachineId=mm});var Bl=c(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.getMachineId=void 0;var gm=J("process"),Rt;Te.getMachineId=Rt;switch(gm.platform){case"darwin":Te.getMachineId=Rt=Ll().getMachineId;break;case"linux":Te.getMachineId=Rt=Ml().getMachineId;break;case"freebsd":Te.getMachineId=Rt=Nl().getMachineId;break;case"win32":Te.getMachineId=Rt=xl().getMachineId;break;default:Te.getMachineId=Rt=Dl().getMachineId}});var Co=c(kn=>{"use strict";Object.defineProperty(kn,"__esModule",{value:!0});kn.hostDetectorSync=void 0;var Lo=ie(),Tm=Qe(),Ul=J("os"),Sm=Io(),Am=Bl(),Mo=class{detect(e){let t={[Lo.SemanticResourceAttributes.HOST_NAME]:(0,Ul.hostname)(),[Lo.SemanticResourceAttributes.HOST_ARCH]:(0,Sm.normalizeArch)((0,Ul.arch)())};return new Tm.Resource(t,this._getAsyncAttributes())}_getAsyncAttributes(){return(0,Am.getMachineId)().then(e=>{let t={};return e&&(t[Lo.SemanticResourceAttributes.HOST_ID]=e),t})}};kn.hostDetectorSync=new Mo});var ql=c(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.hostDetector=void 0;var Om=Co(),No=class{detect(e){return Promise.resolve(Om.hostDetectorSync.detect(e))}};Xn.hostDetector=new No});var xo=c($n=>{"use strict";Object.defineProperty($n,"__esModule",{value:!0});$n.osDetectorSync=void 0;var Gl=ie(),Rm=Qe(),Vl=J("os"),bm=Io(),wo=class{detect(e){let t={[Gl.SemanticResourceAttributes.OS_TYPE]:(0,bm.normalizeType)((0,Vl.platform)()),[Gl.SemanticResourceAttributes.OS_VERSION]:(0,Vl.release)()};return new Rm.Resource(t)}};$n.osDetectorSync=new wo});var jl=c(Wn=>{"use strict";Object.defineProperty(Wn,"__esModule",{value:!0});Wn.osDetector=void 0;var Pm=xo(),Do=class{detect(e){return Promise.resolve(Pm.osDetectorSync.detect(e))}};Wn.osDetector=new Do});var Uo=c(Kn=>{"use strict";Object.defineProperty(Kn,"__esModule",{value:!0});Kn.processDetectorSync=void 0;var ym=(h(),f(d)),Se=ie(),vm=Qe(),Im=J("os"),Bo=class{detect(e){let t={[Se.SemanticResourceAttributes.PROCESS_PID]:process.pid,[Se.SemanticResourceAttributes.PROCESS_EXECUTABLE_NAME]:process.title,[Se.SemanticResourceAttributes.PROCESS_EXECUTABLE_PATH]:process.execPath,[Se.SemanticResourceAttributes.PROCESS_COMMAND_ARGS]:[process.argv[0],...process.execArgv,...process.argv.slice(1)],[Se.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]:process.versions.node,[Se.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]:"nodejs",[Se.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]:"Node.js"};process.argv.length>1&&(t[Se.SemanticResourceAttributes.PROCESS_COMMAND]=process.argv[1]);try{let n=Im.userInfo();t[Se.SemanticResourceAttributes.PROCESS_OWNER]=n.username}catch(n){ym.diag.debug(`error obtaining process owner: ${n}`)}return new vm.Resource(t)}};Kn.processDetectorSync=new Bo});var Fl=c(zn=>{"use strict";Object.defineProperty(zn,"__esModule",{value:!0});zn.processDetector=void 0;var Lm=Uo(),qo=class{detect(e){return Promise.resolve(Lm.processDetectorSync.detect(e))}};zn.processDetector=new qo});var Hl=c(te=>{"use strict";var Mm=te&&te.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Ze=te&&te.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Mm(e,r,t)};Object.defineProperty(te,"__esModule",{value:!0});Ze(Il(),te);Ze(ql(),te);Ze(jl(),te);Ze(Co(),te);Ze(xo(),te);Ze(Fl(),te);Ze(Uo(),te)});var Go=c(Je=>{"use strict";var Cm=Je&&Je.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Nm=Je&&Je.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Cm(e,r,t)};Object.defineProperty(Je,"__esModule",{value:!0});Nm(Hl(),Je)});var Qe=c(Yn=>{"use strict";Object.defineProperty(Yn,"__esModule",{value:!0});Yn.Resource=void 0;var kl=(h(),f(d)),et=ie(),Vo=S(),wm=Go(),Er=class r{constructor(e,t){var n;this._attributes=e,this.asyncAttributesPending=t!=null,this._syncAttributes=(n=this._attributes)!==null&&n!==void 0?n:{},this._asyncAttributesPromise=t?.then(i=>(this._attributes=Object.assign({},this._attributes,i),this.asyncAttributesPending=!1,i),i=>(kl.diag.debug("a resource's async attributes promise rejected: ",i),this.asyncAttributesPending=!1,{}))}static empty(){return r.EMPTY}static default(){return new r({[et.SemanticResourceAttributes.SERVICE_NAME]:(0,wm.defaultServiceName)(),[et.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]:Vo.SDK_INFO[et.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE],[et.SemanticResourceAttributes.TELEMETRY_SDK_NAME]:Vo.SDK_INFO[et.SemanticResourceAttributes.TELEMETRY_SDK_NAME],[et.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]:Vo.SDK_INFO[et.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]})}get attributes(){var e;return this.asyncAttributesPending&&kl.diag.error("Accessing resource attributes before async attributes settled"),(e=this._attributes)!==null&&e!==void 0?e:{}}async waitForAsyncAttributes(){this.asyncAttributesPending&&await this._asyncAttributesPromise}merge(e){var t;if(!e)return this;let n=Object.assign(Object.assign({},this._syncAttributes),(t=e._syncAttributes)!==null&&t!==void 0?t:e.attributes);if(!this._asyncAttributesPromise&&!e._asyncAttributesPromise)return new r(n);let i=Promise.all([this._asyncAttributesPromise,e._asyncAttributesPromise]).then(([s,o])=>{var a;return Object.assign(Object.assign(Object.assign(Object.assign({},this._syncAttributes),s),(a=e._syncAttributes)!==null&&a!==void 0?a:e.attributes),o)});return new r(n,i)}};Yn.Resource=Er;Er.EMPTY=new Er({})});var $l=c(Xl=>{"use strict";Object.defineProperty(Xl,"__esModule",{value:!0})});var Kl=c(Wl=>{"use strict";Object.defineProperty(Wl,"__esModule",{value:!0})});var Yl=c(zl=>{"use strict";Object.defineProperty(zl,"__esModule",{value:!0})});var Ql=c(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.browserDetector=void 0;var xm=tt(),jo=class{detect(e){return Promise.resolve(xm.browserDetectorSync.detect(e))}};Qn.browserDetector=new jo});var Ho=c(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.envDetectorSync=void 0;var Dm=(h(),f(d)),Bm=S(),Um=ie(),qm=Qe(),Fo=class{constructor(){this._MAX_LENGTH=255,this._COMMA_SEPARATOR=",",this._LABEL_KEY_VALUE_SPLITTER="=",this._ERROR_MESSAGE_INVALID_CHARS="should be a ASCII string with a length greater than 0 and not exceed "+this._MAX_LENGTH+" characters.",this._ERROR_MESSAGE_INVALID_VALUE="should be a ASCII string with a length not exceed "+this._MAX_LENGTH+" characters."}detect(e){let t={},n=(0,Bm.getEnv)(),i=n.OTEL_RESOURCE_ATTRIBUTES,s=n.OTEL_SERVICE_NAME;if(i)try{let o=this._parseResourceAttributes(i);Object.assign(t,o)}catch(o){Dm.diag.debug(`EnvDetector failed: ${o.message}`)}return s&&(t[Um.SemanticResourceAttributes.SERVICE_NAME]=s),new qm.Resource(t)}_parseResourceAttributes(e){if(!e)return{};let t={},n=e.split(this._COMMA_SEPARATOR,-1);for(let i of n){let s=i.split(this._LABEL_KEY_VALUE_SPLITTER,-1);if(s.length!==2)continue;let[o,a]=s;if(o=o.trim(),a=a.trim().split(/^"|"$/).join(""),!this._isValidAndNotEmpty(o))throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);if(!this._isValid(a))throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);t[o]=decodeURIComponent(a)}return t}_isValid(e){return e.length<=this._MAX_LENGTH&&this._isBaggageOctetString(e)}_isBaggageOctetString(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n<33||n===44||n===59||n===92||n>126)return!1}return!0}_isValidAndNotEmpty(e){return e.length>0&&this._isValid(e)}};Zn.envDetectorSync=new Fo});var Zl=c(Jn=>{"use strict";Object.defineProperty(Jn,"__esModule",{value:!0});Jn.envDetector=void 0;var Gm=Ho(),ko=class{detect(e){return Promise.resolve(Gm.envDetectorSync.detect(e))}};Jn.envDetector=new ko});var Jl=c(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.browserDetectorSync=void 0;var ei=ie(),Xo=tt(),Vm=(h(),f(d)),$o=class{detect(e){if(!(typeof navigator<"u"))return Xo.Resource.empty();let n={[ei.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]:"browser",[ei.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]:"Web Browser",[ei.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]:navigator.userAgent};return this._getResourceAttributes(n,e)}_getResourceAttributes(e,t){return e[ei.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]===""?(Vm.diag.debug("BrowserDetector failed: Unable to find required browser resources. "),Xo.Resource.empty()):new Xo.Resource(Object.assign({},e))}};ti.browserDetectorSync=new $o});var ed=c(fe=>{"use strict";var jm=fe&&fe.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),ri=fe&&fe.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&jm(e,r,t)};Object.defineProperty(fe,"__esModule",{value:!0});ri(Ql(),fe);ri(Zl(),fe);ri(Jl(),fe);ri(Ho(),fe)});var td=c(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.isPromiseLike=void 0;var Fm=r=>r!==null&&typeof r=="object"&&typeof r.then=="function";ni.isPromiseLike=Fm});var nd=c(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0});Pt.detectResourcesSync=Pt.detectResources=void 0;var mr=Qe(),bt=(h(),f(d)),Hm=td(),km=async(r={})=>{let e=await Promise.all((r.detectors||[]).map(async t=>{try{let n=await t.detect(r);return bt.diag.debug(`${t.constructor.name} found resource.`,n),n}catch(n){return bt.diag.debug(`${t.constructor.name} failed: ${n.message}`),mr.Resource.empty()}}));return rd(e),e.reduce((t,n)=>t.merge(n),mr.Resource.empty())};Pt.detectResources=km;var Xm=(r={})=>{var e;let t=((e=r.detectors)!==null&&e!==void 0?e:[]).map(i=>{try{let s=i.detect(r),o;if((0,Hm.isPromiseLike)(s)){let a=async()=>(await s).attributes;o=new mr.Resource({},a())}else o=s;return o.waitForAsyncAttributes?o.waitForAsyncAttributes().then(()=>bt.diag.debug(`${i.constructor.name} found resource.`,o)):bt.diag.debug(`${i.constructor.name} found resource.`,o),o}catch(s){return bt.diag.error(`${i.constructor.name} failed: ${s.message}`),mr.Resource.empty()}}),n=t.reduce((i,s)=>i.merge(s),mr.Resource.empty());return n.waitForAsyncAttributes&&n.waitForAsyncAttributes().then(()=>{rd(t)}),n};Pt.detectResourcesSync=Xm;var rd=r=>{r.forEach(e=>{if(Object.keys(e.attributes).length>0){let t=JSON.stringify(e.attributes,null,4);bt.diag.verbose(t)}})}});var tt=c(re=>{"use strict";var $m=re&&re.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),rt=re&&re.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&$m(e,r,t)};Object.defineProperty(re,"__esModule",{value:!0});rt(Qe(),re);rt($l(),re);rt(Go(),re);rt(Kl(),re);rt(Yl(),re);rt(ed(),re);rt(nd(),re)});var id=c(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.MultiSpanProcessor=void 0;var Wm=S(),Wo=class{constructor(e){this._spanProcessors=e}forceFlush(){let e=[];for(let t of this._spanProcessors)e.push(t.forceFlush());return new Promise(t=>{Promise.all(e).then(()=>{t()}).catch(n=>{(0,Wm.globalErrorHandler)(n||new Error("MultiSpanProcessor: forceFlush failed")),t()})})}onStart(e,t){for(let n of this._spanProcessors)n.onStart(e,t)}onEnd(e){for(let t of this._spanProcessors)t.onEnd(e)}shutdown(){let e=[];for(let t of this._spanProcessors)e.push(t.shutdown());return new Promise((t,n)=>{Promise.all(e).then(()=>{t()},n)})}};ii.MultiSpanProcessor=Wo});var zo=c(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.NoopSpanProcessor=void 0;var Ko=class{onStart(e,t){}onEnd(e){}shutdown(){return Promise.resolve()}forceFlush(){return Promise.resolve()}};si.NoopSpanProcessor=Ko});var od=c(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});nt.BasicTracerProvider=nt.ForceFlushState=void 0;var yt=(h(),f(d)),It=S(),sd=tt(),Km=Yo(),zm=Ao(),Ym=id(),Qm=zo(),Zm=wn(),Jm=Ro(),vt;(function(r){r[r.resolved=0]="resolved",r[r.timeout=1]="timeout",r[r.error=2]="error",r[r.unresolved=3]="unresolved"})(vt=nt.ForceFlushState||(nt.ForceFlushState={}));var gr=class{constructor(e={}){var t;this._registeredSpanProcessors=[],this._tracers=new Map;let n=(0,It.merge)({},(0,zm.loadDefaultConfig)(),(0,Jm.reconfigureLimits)(e));this.resource=(t=n.resource)!==null&&t!==void 0?t:sd.Resource.empty(),this.resource=sd.Resource.default().merge(this.resource),this._config=Object.assign({},n,{resource:this.resource});let i=this._buildExporterFromEnv();if(i!==void 0){let s=new Zm.BatchSpanProcessor(i);this.activeSpanProcessor=s}else this.activeSpanProcessor=new Qm.NoopSpanProcessor}getTracer(e,t,n){let i=`${e}@${t||""}:${n?.schemaUrl||""}`;return this._tracers.has(i)||this._tracers.set(i,new Km.Tracer({name:e,version:t,schemaUrl:n?.schemaUrl},this._config,this)),this._tracers.get(i)}addSpanProcessor(e){this._registeredSpanProcessors.length===0&&this.activeSpanProcessor.shutdown().catch(t=>yt.diag.error("Error while trying to shutdown current span processor",t)),this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new Ym.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){yt.trace.setGlobalTracerProvider(this),e.propagator===void 0&&(e.propagator=this._buildPropagatorFromEnv()),e.contextManager&&yt.context.setGlobalContextManager(e.contextManager),e.propagator&&yt.propagation.setGlobalPropagator(e.propagator)}forceFlush(){let e=this._config.forceFlushTimeoutMillis,t=this._registeredSpanProcessors.map(n=>new Promise(i=>{let s,o=setTimeout(()=>{i(new Error(`Span processor did not completed within timeout period of ${e} ms`)),s=vt.timeout},e);n.forceFlush().then(()=>{clearTimeout(o),s!==vt.timeout&&(s=vt.resolved,i(s))}).catch(a=>{clearTimeout(o),s=vt.error,i(a)})}));return new Promise((n,i)=>{Promise.all(t).then(s=>{let o=s.filter(a=>a!==vt.resolved);o.length>0?i(o):n()}).catch(s=>i([s]))})}shutdown(){return this.activeSpanProcessor.shutdown()}_getPropagator(e){var t;return(t=this.constructor._registeredPropagators.get(e))===null||t===void 0?void 0:t()}_getSpanExporter(e){var t;return(t=this.constructor._registeredExporters.get(e))===null||t===void 0?void 0:t()}_buildPropagatorFromEnv(){let e=Array.from(new Set((0,It.getEnv)().OTEL_PROPAGATORS)),n=e.map(i=>{let s=this._getPropagator(i);return s||yt.diag.warn(`Propagator "${i}" requested through environment variable is unavailable.`),s}).reduce((i,s)=>(s&&i.push(s),i),[]);if(n.length!==0)return e.length===1?n[0]:new It.CompositePropagator({propagators:n})}_buildExporterFromEnv(){let e=(0,It.getEnv)().OTEL_TRACES_EXPORTER;if(e==="none"||e==="")return;let t=this._getSpanExporter(e);return t||yt.diag.error(`Exporter "${e}" requested through environment variable is unavailable.`),t}};nt.BasicTracerProvider=gr;gr._registeredPropagators=new Map([["tracecontext",()=>new It.W3CTraceContextPropagator],["baggage",()=>new It.W3CBaggagePropagator]]);gr._registeredExporters=new Map});var ad=c(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.ConsoleSpanExporter=void 0;var Qo=S(),Zo=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([]),this.forceFlush()}forceFlush(){return Promise.resolve()}_exportInfo(e){var t;return{traceId:e.spanContext().traceId,parentId:e.parentSpanId,traceState:(t=e.spanContext().traceState)===null||t===void 0?void 0:t.serialize(),name:e.name,id:e.spanContext().spanId,kind:e.kind,timestamp:(0,Qo.hrTimeToMicroseconds)(e.startTime),duration:(0,Qo.hrTimeToMicroseconds)(e.duration),attributes:e.attributes,status:e.status,events:e.events,links:e.links}}_sendSpans(e,t){for(let n of e)console.dir(this._exportInfo(n),{depth:3});if(t)return t({code:Qo.ExportResultCode.SUCCESS})}};oi.ConsoleSpanExporter=Zo});var cd=c(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.InMemorySpanExporter=void 0;var ud=S(),Jo=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){if(this._stopped)return t({code:ud.ExportResultCode.FAILED,error:new Error("Exporter has been stopped")});this._finishedSpans.push(...e),setTimeout(()=>t({code:ud.ExportResultCode.SUCCESS}),0)}shutdown(){return this._stopped=!0,this._finishedSpans=[],this.forceFlush()}forceFlush(){return Promise.resolve()}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}};ai.InMemorySpanExporter=Jo});var dd=c(ld=>{"use strict";Object.defineProperty(ld,"__esModule",{value:!0})});var _d=c(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});ui.SimpleSpanProcessor=void 0;var eg=(h(),f(d)),Lt=S(),ea=class{constructor(e){this._exporter=e,this._shutdownOnce=new Lt.BindOnceFuture(this._shutdown,this),this._unresolvedExports=new Set}async forceFlush(){await Promise.all(Array.from(this._unresolvedExports)),this._exporter.forceFlush&&await this._exporter.forceFlush()}onStart(e,t){}onEnd(e){var t,n;if(this._shutdownOnce.isCalled||!(e.spanContext().traceFlags&eg.TraceFlags.SAMPLED))return;let i=()=>Lt.internal._export(this._exporter,[e]).then(s=>{var o;s.code!==Lt.ExportResultCode.SUCCESS&&(0,Lt.globalErrorHandler)((o=s.error)!==null&&o!==void 0?o:new Error(`SimpleSpanProcessor: span export failed (status ${s})`))}).catch(s=>{(0,Lt.globalErrorHandler)(s)});if(e.resource.asyncAttributesPending){let s=(n=(t=e.resource).waitForAsyncAttributes)===null||n===void 0?void 0:n.call(t).then(()=>(s!=null&&this._unresolvedExports.delete(s),i()),o=>(0,Lt.globalErrorHandler)(o));s!=null&&this._unresolvedExports.add(s)}else i()}shutdown(){return this._shutdownOnce.call()}_shutdown(){return this._exporter.shutdown()}};ui.SimpleSpanProcessor=ea});var pd=c(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0})});var Ed=c(fd=>{"use strict";Object.defineProperty(fd,"__esModule",{value:!0})});var gd=c(md=>{"use strict";Object.defineProperty(md,"__esModule",{value:!0})});var Sd=c(Td=>{"use strict";Object.defineProperty(Td,"__esModule",{value:!0})});var Od=c(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0})});var Yo=c(v=>{"use strict";var tg=v&&v.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),B=v&&v.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&tg(e,r,t)};Object.defineProperty(v,"__esModule",{value:!0});B(vl(),v);B(od(),v);B(wn(),v);B(ad(),v);B(cd(),v);B(dd(),v);B(_d(),v);B(pd(),v);B(zo(),v);B(On(),v);B(bn(),v);B(Eo(),v);B(go(),v);B(fr(),v);B(lo(),v);B(Ed(),v);B(gd(),v);B(Sd(),v);B(Od(),v)});var it={};var ta=Zu(()=>{ht(it,_opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_4__)});var bd=c(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.disableInstrumentations=Ce.enableInstrumentations=Ce.parseInstrumentationOptions=void 0;function Rd(r=[]){let e=[];for(let t=0,n=r.length;t<n;t++){let i=r[t];if(Array.isArray(i)){let s=Rd(i);e=e.concat(s.instrumentations)}else typeof i=="function"?e.push(new i):i.instrumentationName&&e.push(i)}return{instrumentations:e}}Ce.parseInstrumentationOptions=Rd;function rg(r,e,t){for(let n=0,i=r.length;n<i;n++){let s=r[n];e&&s.setTracerProvider(e),t&&s.setMeterProvider(t),s.getConfig().enabled||s.enable()}}Ce.enableInstrumentations=rg;function ng(r){r.forEach(e=>e.disable())}Ce.disableInstrumentations=ng});var yd=c(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.registerInstrumentations=void 0;var Pd=(h(),f(d)),ra=bd();function ig(r){let{instrumentations:e}=(0,ra.parseInstrumentationOptions)(r.instrumentations),t=r.tracerProvider||Pd.trace.getTracerProvider(),n=r.meterProvider||Pd.metrics.getMeterProvider();return(0,ra.enableInstrumentations)(e,t,n),()=>{(0,ra.disableInstrumentations)(e)}}ci.registerInstrumentations=ig});var ia=c(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.LogRecord=void 0;var sg=(h(),f(d)),Tr=(h(),f(d)),li=S(),na=class{constructor(e,t,n){this.attributes={},this.totalAttributesCount=0,this._isReadonly=!1;let{timestamp:i,observedTimestamp:s,severityNumber:o,severityText:a,body:u,attributes:l={},context:_}=n,E=Date.now();if(this.hrTime=(0,li.timeInputToHrTime)(i??E),this.hrTimeObserved=(0,li.timeInputToHrTime)(s??E),_){let O=Tr.trace.getSpanContext(_);O&&Tr.isSpanContextValid(O)&&(this.spanContext=O)}this.severityNumber=o,this.severityText=a,this.body=u,this.resource=e.resource,this.instrumentationScope=t,this._logRecordLimits=e.logRecordLimits,this.setAttributes(l)}set severityText(e){this._isLogRecordReadonly()||(this._severityText=e)}get severityText(){return this._severityText}set severityNumber(e){this._isLogRecordReadonly()||(this._severityNumber=e)}get severityNumber(){return this._severityNumber}set body(e){this._isLogRecordReadonly()||(this._body=e)}get body(){return this._body}get droppedAttributesCount(){return this.totalAttributesCount-Object.keys(this.attributes).length}setAttribute(e,t){return this._isLogRecordReadonly()?this:t===null?this:e.length===0?(Tr.diag.warn(`Invalid attribute key: ${e}`),this):!(0,li.isAttributeValue)(t)&&!(typeof t=="object"&&!Array.isArray(t)&&Object.keys(t).length>0)?(Tr.diag.warn(`Invalid attribute value set for key: ${e}`),this):(this.totalAttributesCount+=1,Object.keys(this.attributes).length>=this._logRecordLimits.attributeCountLimit&&!Object.prototype.hasOwnProperty.call(this.attributes,e)?this:((0,li.isAttributeValue)(t)?this.attributes[e]=this._truncateToSize(t):this.attributes[e]=t,this))}setAttributes(e){for(let[t,n]of Object.entries(e))this.setAttribute(t,n);return this}setBody(e){return this.body=e,this}setSeverityNumber(e){return this.severityNumber=e,this}setSeverityText(e){return this.severityText=e,this}_makeReadonly(){this._isReadonly=!0}_truncateToSize(e){let t=this._logRecordLimits.attributeValueLengthLimit;return t<=0?(Tr.diag.warn(`Attribute value limit must be positive, got ${t}`),e):typeof e=="string"?this._truncateToLimitUtil(e,t):Array.isArray(e)?e.map(n=>typeof n=="string"?this._truncateToLimitUtil(n,t):n):e}_truncateToLimitUtil(e,t){return e.length<=t?e:e.substring(0,t)}_isLogRecordReadonly(){return this._isReadonly&&sg.diag.warn("Can not execute the operation on emitted log record"),this._isReadonly}};di.LogRecord=na});var vd=c(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.Logger=void 0;var og=(h(),f(d)),ag=ia(),sa=class{constructor(e,t){this.instrumentationScope=e,this._sharedState=t}emit(e){let t=e.context||og.context.active(),n=new ag.LogRecord(this._sharedState,this.instrumentationScope,Object.assign({context:t},e));this._sharedState.activeProcessor.onEmit(n,t),n._makeReadonly()}};_i.Logger=sa});var Id=c(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.reconfigureLimits=Mt.loadDefaultConfig=void 0;var Sr=S();function ug(){return{forceFlushTimeoutMillis:3e4,logRecordLimits:{attributeValueLengthLimit:(0,Sr.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,attributeCountLimit:(0,Sr.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT},includeTraceContext:!0}}Mt.loadDefaultConfig=ug;function cg(r){var e,t,n,i,s,o;let a=(0,Sr.getEnvWithoutDefaults)();return{attributeCountLimit:(n=(t=(e=r.attributeCountLimit)!==null&&e!==void 0?e:a.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT)!==null&&t!==void 0?t:a.OTEL_ATTRIBUTE_COUNT_LIMIT)!==null&&n!==void 0?n:Sr.DEFAULT_ATTRIBUTE_COUNT_LIMIT,attributeValueLengthLimit:(o=(s=(i=r.attributeValueLengthLimit)!==null&&i!==void 0?i:a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT)!==null&&s!==void 0?s:a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT)!==null&&o!==void 0?o:Sr.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT}}Mt.reconfigureLimits=cg});var Ld=c(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.MultiLogRecordProcessor=void 0;var lg=S(),oa=class{constructor(e,t){this.processors=e,this.forceFlushTimeoutMillis=t}async forceFlush(){let e=this.forceFlushTimeoutMillis;await Promise.all(this.processors.map(t=>(0,lg.callWithTimeout)(t.forceFlush(),e)))}onEmit(e,t){this.processors.forEach(n=>n.onEmit(e,t))}async shutdown(){await Promise.all(this.processors.map(e=>e.shutdown()))}};hi.MultiLogRecordProcessor=oa});var ua=c(pi=>{"use strict";Object.defineProperty(pi,"__esModule",{value:!0});pi.NoopLogRecordProcessor=void 0;var aa=class{forceFlush(){return Promise.resolve()}onEmit(e,t){}shutdown(){return Promise.resolve()}};pi.NoopLogRecordProcessor=aa});var Md=c(fi=>{"use strict";Object.defineProperty(fi,"__esModule",{value:!0});fi.LoggerProviderSharedState=void 0;var dg=ua(),ca=class{constructor(e,t,n){this.resource=e,this.forceFlushTimeoutMillis=t,this.logRecordLimits=n,this.loggers=new Map,this.registeredLogRecordProcessors=[],this.activeProcessor=new dg.NoopLogRecordProcessor}};fi.LoggerProviderSharedState=ca});var wd=c(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.LoggerProvider=st.DEFAULT_LOGGER_NAME=void 0;var Ar=(h(),f(d)),_g=(ta(),f(it)),hg=tt(),Cd=S(),pg=vd(),Nd=Id(),fg=Ld(),Eg=Md();st.DEFAULT_LOGGER_NAME="unknown";var la=class{constructor(e={}){let{resource:t=hg.Resource.default(),logRecordLimits:n,forceFlushTimeoutMillis:i}=(0,Cd.merge)({},(0,Nd.loadDefaultConfig)(),e);this._sharedState=new Eg.LoggerProviderSharedState(t,i,(0,Nd.reconfigureLimits)(n)),this._shutdownOnce=new Cd.BindOnceFuture(this._shutdown,this)}getLogger(e,t,n){if(this._shutdownOnce.isCalled)return Ar.diag.warn("A shutdown LoggerProvider cannot provide a Logger"),_g.NOOP_LOGGER;e||Ar.diag.warn("Logger requested without instrumentation scope name.");let i=e||st.DEFAULT_LOGGER_NAME,s=`${i}@${t||""}:${n?.schemaUrl||""}`;return this._sharedState.loggers.has(s)||this._sharedState.loggers.set(s,new pg.Logger({name:i,version:t,schemaUrl:n?.schemaUrl},this._sharedState)),this._sharedState.loggers.get(s)}addLogRecordProcessor(e){this._sharedState.registeredLogRecordProcessors.length===0&&this._sharedState.activeProcessor.shutdown().catch(t=>Ar.diag.error("Error while trying to shutdown current log record processor",t)),this._sharedState.registeredLogRecordProcessors.push(e),this._sharedState.activeProcessor=new fg.MultiLogRecordProcessor(this._sharedState.registeredLogRecordProcessors,this._sharedState.forceFlushTimeoutMillis)}forceFlush(){return this._shutdownOnce.isCalled?(Ar.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"),this._shutdownOnce.promise):this._sharedState.activeProcessor.forceFlush()}shutdown(){return this._shutdownOnce.isCalled?(Ar.diag.warn("shutdown may only be called once per LoggerProvider"),this._shutdownOnce.promise):this._shutdownOnce.call()}_shutdown(){return this._sharedState.activeProcessor.shutdown()}};st.LoggerProvider=la});var xd=c(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.ConsoleLogRecordExporter=void 0;var mg=S(),gg=S(),da=class{export(e,t){this._sendLogRecords(e,t)}shutdown(){return Promise.resolve()}_exportInfo(e){var t,n,i;return{timestamp:(0,mg.hrTimeToMicroseconds)(e.hrTime),traceId:(t=e.spanContext)===null||t===void 0?void 0:t.traceId,spanId:(n=e.spanContext)===null||n===void 0?void 0:n.spanId,traceFlags:(i=e.spanContext)===null||i===void 0?void 0:i.traceFlags,severityText:e.severityText,severityNumber:e.severityNumber,body:e.body,attributes:e.attributes}}_sendLogRecords(e,t){for(let n of e)console.dir(this._exportInfo(n),{depth:3});t?.({code:gg.ExportResultCode.SUCCESS})}};Ei.ConsoleLogRecordExporter=da});var Dd=c(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.SimpleLogRecordProcessor=void 0;var _a=S(),ha=class{constructor(e){this._exporter=e,this._shutdownOnce=new _a.BindOnceFuture(this._shutdown,this)}onEmit(e){this._shutdownOnce.isCalled||this._exporter.export([e],t=>{var n;if(t.code!==_a.ExportResultCode.SUCCESS){(0,_a.globalErrorHandler)((n=t.error)!==null&&n!==void 0?n:new Error(`SimpleLogRecordProcessor: log record export failed (status ${t})`));return}})}forceFlush(){return Promise.resolve()}shutdown(){return this._shutdownOnce.call()}_shutdown(){return this._exporter.shutdown()}};mi.SimpleLogRecordProcessor=ha});var Ud=c(gi=>{"use strict";Object.defineProperty(gi,"__esModule",{value:!0});gi.InMemoryLogRecordExporter=void 0;var Bd=S(),pa=class{constructor(){this._finishedLogRecords=[],this._stopped=!1}export(e,t){if(this._stopped)return t({code:Bd.ExportResultCode.FAILED,error:new Error("Exporter has been stopped")});this._finishedLogRecords.push(...e),t({code:Bd.ExportResultCode.SUCCESS})}shutdown(){return this._stopped=!0,this.reset(),Promise.resolve()}getFinishedLogRecords(){return this._finishedLogRecords}reset(){this._finishedLogRecords=[]}};gi.InMemoryLogRecordExporter=pa});var qd=c(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.BatchLogRecordProcessorBase=void 0;var Tg=(h(),f(d)),Ct=S(),fa=class{constructor(e,t){var n,i,s,o;this._exporter=e,this._finishedLogRecords=[];let a=(0,Ct.getEnv)();this._maxExportBatchSize=(n=t?.maxExportBatchSize)!==null&&n!==void 0?n:a.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE,this._maxQueueSize=(i=t?.maxQueueSize)!==null&&i!==void 0?i:a.OTEL_BLRP_MAX_QUEUE_SIZE,this._scheduledDelayMillis=(s=t?.scheduledDelayMillis)!==null&&s!==void 0?s:a.OTEL_BLRP_SCHEDULE_DELAY,this._exportTimeoutMillis=(o=t?.exportTimeoutMillis)!==null&&o!==void 0?o:a.OTEL_BLRP_EXPORT_TIMEOUT,this._shutdownOnce=new Ct.BindOnceFuture(this._shutdown,this),this._maxExportBatchSize>this._maxQueueSize&&(Tg.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"),this._maxExportBatchSize=this._maxQueueSize)}onEmit(e){this._shutdownOnce.isCalled||this._addToBuffer(e)}forceFlush(){return this._shutdownOnce.isCalled?this._shutdownOnce.promise:this._flushAll()}shutdown(){return this._shutdownOnce.call()}async _shutdown(){this.onShutdown(),await this._flushAll(),await this._exporter.shutdown()}_addToBuffer(e){this._finishedLogRecords.length>=this._maxQueueSize||(this._finishedLogRecords.push(e),this._maybeStartTimer())}_flushAll(){return new Promise((e,t)=>{let n=[],i=Math.ceil(this._finishedLogRecords.length/this._maxExportBatchSize);for(let s=0;s<i;s++)n.push(this._flushOneBatch());Promise.all(n).then(()=>{e()}).catch(t)})}_flushOneBatch(){return this._clearTimer(),this._finishedLogRecords.length===0?Promise.resolve():new Promise((e,t)=>{(0,Ct.callWithTimeout)(this._export(this._finishedLogRecords.splice(0,this._maxExportBatchSize)),this._exportTimeoutMillis).then(()=>e()).catch(t)})}_maybeStartTimer(){this._timer===void 0&&(this._timer=setTimeout(()=>{this._flushOneBatch().then(()=>{this._finishedLogRecords.length>0&&(this._clearTimer(),this._maybeStartTimer())}).catch(e=>{(0,Ct.globalErrorHandler)(e)})},this._scheduledDelayMillis),(0,Ct.unrefTimer)(this._timer))}_clearTimer(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0)}_export(e){return new Promise((t,n)=>{this._exporter.export(e,i=>{var s;if(i.code!==Ct.ExportResultCode.SUCCESS){n((s=i.error)!==null&&s!==void 0?s:new Error(`BatchLogRecordProcessorBase: log record export failed (status ${i})`));return}t(i)})})}};Ti.BatchLogRecordProcessorBase=fa});var Gd=c(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.BatchLogRecordProcessor=void 0;var Sg=qd(),Ea=class extends Sg.BatchLogRecordProcessorBase{onShutdown(){}};Si.BatchLogRecordProcessor=Ea});var Vd=c(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.BatchLogRecordProcessor=void 0;var Ag=Gd();Object.defineProperty(Ai,"BatchLogRecordProcessor",{enumerable:!0,get:function(){return Ag.BatchLogRecordProcessor}})});var jd=c(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.BatchLogRecordProcessor=void 0;var Og=Vd();Object.defineProperty(Oi,"BatchLogRecordProcessor",{enumerable:!0,get:function(){return Og.BatchLogRecordProcessor}})});var Fd=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.BatchLogRecordProcessor=K.InMemoryLogRecordExporter=K.SimpleLogRecordProcessor=K.ConsoleLogRecordExporter=K.NoopLogRecordProcessor=K.LogRecord=K.LoggerProvider=void 0;var Rg=wd();Object.defineProperty(K,"LoggerProvider",{enumerable:!0,get:function(){return Rg.LoggerProvider}});var bg=ia();Object.defineProperty(K,"LogRecord",{enumerable:!0,get:function(){return bg.LogRecord}});var Pg=ua();Object.defineProperty(K,"NoopLogRecordProcessor",{enumerable:!0,get:function(){return Pg.NoopLogRecordProcessor}});var yg=xd();Object.defineProperty(K,"ConsoleLogRecordExporter",{enumerable:!0,get:function(){return yg.ConsoleLogRecordExporter}});var vg=Dd();Object.defineProperty(K,"SimpleLogRecordProcessor",{enumerable:!0,get:function(){return vg.SimpleLogRecordProcessor}});var Ig=Ud();Object.defineProperty(K,"InMemoryLogRecordExporter",{enumerable:!0,get:function(){return Ig.InMemoryLogRecordExporter}});var Lg=jd();Object.defineProperty(K,"BatchLogRecordProcessor",{enumerable:!0,get:function(){return Lg.BatchLogRecordProcessor}})});var Ri=c(Or=>{"use strict";Object.defineProperty(Or,"__esModule",{value:!0});Or.AggregationTemporality=void 0;var Mg;(function(r){r[r.DELTA=0]="DELTA",r[r.CUMULATIVE=1]="CUMULATIVE"})(Mg=Or.AggregationTemporality||(Or.AggregationTemporality={}))});var Nt=c(Rr=>{"use strict";Object.defineProperty(Rr,"__esModule",{value:!0});Rr.DataPointType=void 0;var Cg;(function(r){r[r.HISTOGRAM=0]="HISTOGRAM",r[r.EXPONENTIAL_HISTOGRAM=1]="EXPONENTIAL_HISTOGRAM",r[r.GAUGE=2]="GAUGE",r[r.SUM=3]="SUM"})(Cg=Rr.DataPointType||(Rr.DataPointType={}))});var Ee=c(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.equalsCaseInsensitive=M.binarySearchLB=M.setEquals=M.FlatMap=M.isPromiseAllSettledRejectionResult=M.PromiseAllSettled=M.callWithTimeout=M.TimeoutError=M.instrumentationScopeId=M.hashAttributes=M.isNotNullish=void 0;function Ng(r){return r!=null}M.isNotNullish=Ng;function wg(r){let e=Object.keys(r);return e.length===0?"":(e=e.sort(),JSON.stringify(e.map(t=>[t,r[t]])))}M.hashAttributes=wg;function xg(r){var e,t;return`${r.name}:${(e=r.version)!==null&&e!==void 0?e:""}:${(t=r.schemaUrl)!==null&&t!==void 0?t:""}`}M.instrumentationScopeId=xg;var bi=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}};M.TimeoutError=bi;function Dg(r,e){let t,n=new Promise(function(s,o){t=setTimeout(function(){o(new bi("Operation timed out."))},e)});return Promise.race([r,n]).then(i=>(clearTimeout(t),i),i=>{throw clearTimeout(t),i})}M.callWithTimeout=Dg;async function Bg(r){return Promise.all(r.map(async e=>{try{return{status:"fulfilled",value:await e}}catch(t){return{status:"rejected",reason:t}}}))}M.PromiseAllSettled=Bg;function Ug(r){return r.status==="rejected"}M.isPromiseAllSettledRejectionResult=Ug;function qg(r,e){let t=[];return r.forEach(n=>{t.push(...e(n))}),t}M.FlatMap=qg;function Gg(r,e){if(r.size!==e.size)return!1;for(let t of r)if(!e.has(t))return!1;return!0}M.setEquals=Gg;function Vg(r,e){let t=0,n=r.length-1;for(;n-t>1;){let i=Math.trunc((n+t)/2);r[i]<=e?t=i:n=i-1}return r[n]<=e?n:r[t]<=e?t:-1}M.binarySearchLB=Vg;function jg(r,e){return r.toLowerCase()===e.toLowerCase()}M.equalsCaseInsensitive=jg});var wt=c(br=>{"use strict";Object.defineProperty(br,"__esModule",{value:!0});br.AggregatorKind=void 0;var Fg;(function(r){r[r.DROP=0]="DROP",r[r.SUM=1]="SUM",r[r.LAST_VALUE=2]="LAST_VALUE",r[r.HISTOGRAM=3]="HISTOGRAM",r[r.EXPONENTIAL_HISTOGRAM=4]="EXPONENTIAL_HISTOGRAM"})(Fg=br.AggregatorKind||(br.AggregatorKind={}))});var Hd=c(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.DropAggregator=void 0;var Hg=wt(),ma=class{constructor(){this.kind=Hg.AggregatorKind.DROP}createAccumulation(){}merge(e,t){}diff(e,t){}toMetricData(e,t,n,i){}};Pi.DropAggregator=ma});var Ae=c(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.isValidName=ne.isDescriptorCompatibleWith=ne.createInstrumentDescriptorWithView=ne.createInstrumentDescriptor=ne.InstrumentType=void 0;var kd=(h(),f(d)),kg=Ee(),Xg;(function(r){r.COUNTER="COUNTER",r.HISTOGRAM="HISTOGRAM",r.UP_DOWN_COUNTER="UP_DOWN_COUNTER",r.OBSERVABLE_COUNTER="OBSERVABLE_COUNTER",r.OBSERVABLE_GAUGE="OBSERVABLE_GAUGE",r.OBSERVABLE_UP_DOWN_COUNTER="OBSERVABLE_UP_DOWN_COUNTER"})(Xg=ne.InstrumentType||(ne.InstrumentType={}));function $g(r,e,t){var n,i,s,o;return Xd(r)||kd.diag.warn(`Invalid metric name: "${r}". The metric name should be a ASCII string with a length no greater than 255 characters.`),{name:r,type:e,description:(n=t?.description)!==null&&n!==void 0?n:"",unit:(i=t?.unit)!==null&&i!==void 0?i:"",valueType:(s=t?.valueType)!==null&&s!==void 0?s:kd.ValueType.DOUBLE,advice:(o=t?.advice)!==null&&o!==void 0?o:{}}}ne.createInstrumentDescriptor=$g;function Wg(r,e){var t,n;return{name:(t=r.name)!==null&&t!==void 0?t:e.name,description:(n=r.description)!==null&&n!==void 0?n:e.description,type:e.type,unit:e.unit,valueType:e.valueType,advice:e.advice}}ne.createInstrumentDescriptorWithView=Wg;function Kg(r,e){return(0,kg.equalsCaseInsensitive)(r.name,e.name)&&r.unit===e.unit&&r.type===e.type&&r.valueType===e.valueType}ne.isDescriptorCompatibleWith=Kg;var zg=/^[a-z][a-z0-9_.\-/]{0,254}$/i;function Xd(r){return r.match(zg)!=null}ne.isValidName=Xd});var $d=c(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.HistogramAggregator=Dt.HistogramAccumulation=void 0;var Yg=wt(),Qg=Nt(),ga=Ae(),Zg=Ee();function Jg(r){let e=r.map(()=>0);return e.push(0),{buckets:{boundaries:r,counts:e},sum:0,count:0,hasMinMax:!1,min:1/0,max:-1/0}}var xt=class{constructor(e,t,n=!0,i=Jg(t)){this.startTime=e,this._boundaries=t,this._recordMinMax=n,this._current=i}record(e){this._current.count+=1,this._current.sum+=e,this._recordMinMax&&(this._current.min=Math.min(e,this._current.min),this._current.max=Math.max(e,this._current.max),this._current.hasMinMax=!0);let t=(0,Zg.binarySearchLB)(this._boundaries,e);this._current.buckets.counts[t+1]+=1}setStartTime(e){this.startTime=e}toPointValue(){return this._current}};Dt.HistogramAccumulation=xt;var Ta=class{constructor(e,t){this._boundaries=e,this._recordMinMax=t,this.kind=Yg.AggregatorKind.HISTOGRAM}createAccumulation(e){return new xt(e,this._boundaries,this._recordMinMax)}merge(e,t){let n=e.toPointValue(),i=t.toPointValue(),s=n.buckets.counts,o=i.buckets.counts,a=new Array(s.length);for(let _=0;_<s.length;_++)a[_]=s[_]+o[_];let u=1/0,l=-1/0;return this._recordMinMax&&(n.hasMinMax&&i.hasMinMax?(u=Math.min(n.min,i.min),l=Math.max(n.max,i.max)):n.hasMinMax?(u=n.min,l=n.max):i.hasMinMax&&(u=i.min,l=i.max)),new xt(e.startTime,n.buckets.boundaries,this._recordMinMax,{buckets:{boundaries:n.buckets.boundaries,counts:a},count:n.count+i.count,sum:n.sum+i.sum,hasMinMax:this._recordMinMax&&(n.hasMinMax||i.hasMinMax),min:u,max:l})}diff(e,t){let n=e.toPointValue(),i=t.toPointValue(),s=n.buckets.counts,o=i.buckets.counts,a=new Array(s.length);for(let u=0;u<s.length;u++)a[u]=o[u]-s[u];return new xt(t.startTime,n.buckets.boundaries,this._recordMinMax,{buckets:{boundaries:n.buckets.boundaries,counts:a},count:i.count-n.count,sum:i.sum-n.sum,hasMinMax:!1,min:1/0,max:-1/0})}toMetricData(e,t,n,i){return{descriptor:e,aggregationTemporality:t,dataPointType:Qg.DataPointType.HISTOGRAM,dataPoints:n.map(([s,o])=>{let a=o.toPointValue(),u=e.type===ga.InstrumentType.UP_DOWN_COUNTER||e.type===ga.InstrumentType.OBSERVABLE_GAUGE||e.type===ga.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;return{attributes:s,startTime:o.startTime,endTime:i,value:{min:a.hasMinMax?a.min:void 0,max:a.hasMinMax?a.max:void 0,sum:u?void 0:a.sum,buckets:a.buckets,count:a.count}}})}}};Dt.HistogramAggregator=Ta});var Wd=c(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.Buckets=void 0;var Sa=class r{constructor(e=new Aa,t=0,n=0,i=0){this.backing=e,this.indexBase=t,this.indexStart=n,this.indexEnd=i}get offset(){return this.indexStart}get length(){return this.backing.length===0||this.indexEnd===this.indexStart&&this.at(0)===0?0:this.indexEnd-this.indexStart+1}counts(){return Array.from({length:this.length},(e,t)=>this.at(t))}at(e){let t=this.indexBase-this.indexStart;return e<t&&(e+=this.backing.length),e-=t,this.backing.countAt(e)}incrementBucket(e,t){this.backing.increment(e,t)}decrementBucket(e,t){this.backing.decrement(e,t)}trim(){for(let e=0;e<this.length;e++)if(this.at(e)!==0){this.indexStart+=e;break}else if(e===this.length-1){this.indexStart=this.indexEnd=this.indexBase=0;return}for(let e=this.length-1;e>=0;e--)if(this.at(e)!==0){this.indexEnd-=this.length-e-1;break}this._rotate()}downscale(e){this._rotate();let t=1+this.indexEnd-this.indexStart,n=1<<e,i=0,s=0;for(let o=this.indexStart;o<=this.indexEnd;){let a=o%n;a<0&&(a+=n);for(let u=a;u<n&&i<t;u++)this._relocateBucket(s,i),i++,o++;s++}this.indexStart>>=e,this.indexEnd>>=e,this.indexBase=this.indexStart}clone(){return new r(this.backing.clone(),this.indexBase,this.indexStart,this.indexEnd)}_rotate(){let e=this.indexBase-this.indexStart;e!==0&&(e>0?(this.backing.reverse(0,this.backing.length),this.backing.reverse(0,e),this.backing.reverse(e,this.backing.length)):(this.backing.reverse(0,this.backing.length),this.backing.reverse(0,this.backing.length+e)),this.indexBase=this.indexStart)}_relocateBucket(e,t){e!==t&&this.incrementBucket(e,this.backing.emptyBucket(t))}};yi.Buckets=Sa;var Aa=class r{constructor(e=[0]){this._counts=e}get length(){return this._counts.length}countAt(e){return this._counts[e]}growTo(e,t,n){let i=new Array(e).fill(0);i.splice(n,this._counts.length-t,...this._counts.slice(t)),i.splice(0,t,...this._counts.slice(0,t)),this._counts=i}reverse(e,t){let n=Math.floor((e+t)/2)-e;for(let i=0;i<n;i++){let s=this._counts[e+i];this._counts[e+i]=this._counts[t-i-1],this._counts[t-i-1]=s}}emptyBucket(e){let t=this._counts[e];return this._counts[e]=0,t}increment(e,t){this._counts[e]+=t}decrement(e,t){this._counts[e]>=t?this._counts[e]-=t:this._counts[e]=0}clone(){return new r([...this._counts])}}});var Ra=c(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.getSignificand=Y.getNormalBase2=Y.MIN_VALUE=Y.MAX_NORMAL_EXPONENT=Y.MIN_NORMAL_EXPONENT=Y.SIGNIFICAND_WIDTH=void 0;Y.SIGNIFICAND_WIDTH=52;var eT=2146435072,tT=1048575,Oa=1023;Y.MIN_NORMAL_EXPONENT=-Oa+1;Y.MAX_NORMAL_EXPONENT=Oa;Y.MIN_VALUE=Math.pow(2,-1022);function rT(r){let e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,r),((e.getUint32(0)&eT)>>20)-Oa}Y.getNormalBase2=rT;function nT(r){let e=new DataView(new ArrayBuffer(8));e.setFloat64(0,r);let t=e.getUint32(0),n=e.getUint32(4);return(t&tT)*Math.pow(2,32)+n}Y.getSignificand=nT});var vi=c(Bt=>{"use strict";Object.defineProperty(Bt,"__esModule",{value:!0});Bt.nextGreaterSquare=Bt.ldexp=void 0;function iT(r,e){return r===0||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY||Number.isNaN(r)?r:r*Math.pow(2,e)}Bt.ldexp=iT;function sT(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r}Bt.nextGreaterSquare=sT});var Li=c(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.MappingError=void 0;var ba=class extends Error{};Ii.MappingError=ba});var zd=c(Mi=>{"use strict";Object.defineProperty(Mi,"__esModule",{value:!0});Mi.ExponentMapping=void 0;var Ut=Ra(),oT=vi(),Kd=Li(),Pa=class{constructor(e){this._shift=-e}mapToIndex(e){if(e<Ut.MIN_VALUE)return this._minNormalLowerBoundaryIndex();let t=Ut.getNormalBase2(e),n=this._rightShift(Ut.getSignificand(e)-1,Ut.SIGNIFICAND_WIDTH);return t+n>>this._shift}lowerBoundary(e){let t=this._minNormalLowerBoundaryIndex();if(e<t)throw new Kd.MappingError(`underflow: ${e} is < minimum lower boundary: ${t}`);let n=this._maxNormalLowerBoundaryIndex();if(e>n)throw new Kd.MappingError(`overflow: ${e} is > maximum lower boundary: ${n}`);return oT.ldexp(1,e<<this._shift)}get scale(){return this._shift===0?0:-this._shift}_minNormalLowerBoundaryIndex(){let e=Ut.MIN_NORMAL_EXPONENT>>this._shift;return this._shift<2&&e--,e}_maxNormalLowerBoundaryIndex(){return Ut.MAX_NORMAL_EXPONENT>>this._shift}_rightShift(e,t){return Math.floor(e*Math.pow(2,-t))}};Mi.ExponentMapping=Pa});var Zd=c(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.LogarithmMapping=void 0;var qt=Ra(),Yd=vi(),Qd=Li(),ya=class{constructor(e){this._scale=e,this._scaleFactor=Yd.ldexp(Math.LOG2E,e),this._inverseFactor=Yd.ldexp(Math.LN2,-e)}mapToIndex(e){if(e<=qt.MIN_VALUE)return this._minNormalLowerBoundaryIndex()-1;if(qt.getSignificand(e)===0)return(qt.getNormalBase2(e)<<this._scale)-1;let t=Math.floor(Math.log(e)*this._scaleFactor),n=this._maxNormalLowerBoundaryIndex();return t>=n?n:t}lowerBoundary(e){let t=this._maxNormalLowerBoundaryIndex();if(e>=t){if(e===t)return 2*Math.exp((e-(1<<this._scale))/this._scaleFactor);throw new Qd.MappingError(`overflow: ${e} is > maximum lower boundary: ${t}`)}let n=this._minNormalLowerBoundaryIndex();if(e<=n){if(e===n)return qt.MIN_VALUE;if(e===n-1)return Math.exp((e+(1<<this._scale))/this._scaleFactor)/2;throw new Qd.MappingError(`overflow: ${e} is < minimum lower boundary: ${n}`)}return Math.exp(e*this._inverseFactor)}get scale(){return this._scale}_minNormalLowerBoundaryIndex(){return qt.MIN_NORMAL_EXPONENT<<this._scale}_maxNormalLowerBoundaryIndex(){return(qt.MAX_NORMAL_EXPONENT+1<<this._scale)-1}};Ci.LogarithmMapping=ya});var t_=c(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.getMapping=void 0;var aT=zd(),uT=Zd(),cT=Li(),Jd=-10,e_=20,lT=Array.from({length:31},(r,e)=>e>10?new uT.LogarithmMapping(e-10):new aT.ExponentMapping(e-10));function dT(r){if(r>e_||r<Jd)throw new cT.MappingError(`expected scale >= ${Jd} && <= ${e_}, got: ${r}`);return lT[r+10]}Ni.getMapping=dT});var i_=c(Vt=>{"use strict";Object.defineProperty(Vt,"__esModule",{value:!0});Vt.ExponentialHistogramAggregator=Vt.ExponentialHistogramAccumulation=void 0;var _T=wt(),hT=Nt(),pT=(h(),f(d)),va=Ae(),r_=Wd(),n_=t_(),fT=vi(),Gt=class r{constructor(e,t){this.low=e,this.high=t}static combine(e,t){return new r(Math.min(e.low,t.low),Math.max(e.high,t.high))}},ET=20,mT=160,Ia=2,wi=class r{constructor(e=e,t=mT,n=!0,i=0,s=0,o=0,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=new r_.Buckets,_=new r_.Buckets,E=(0,n_.getMapping)(ET)){this.startTime=e,this._maxSize=t,this._recordMinMax=n,this._sum=i,this._count=s,this._zeroCount=o,this._min=a,this._max=u,this._positive=l,this._negative=_,this._mapping=E,this._maxSize<Ia&&(pT.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Ia}`),this._maxSize=Ia)}record(e){this.updateByIncrement(e,1)}setStartTime(e){this.startTime=e}toPointValue(){return{hasMinMax:this._recordMinMax,min:this.min,max:this.max,sum:this.sum,positive:{offset:this.positive.offset,bucketCounts:this.positive.counts()},negative:{offset:this.negative.offset,bucketCounts:this.negative.counts()},count:this.count,scale:this.scale,zeroCount:this.zeroCount}}get sum(){return this._sum}get min(){return this._min}get max(){return this._max}get count(){return this._count}get zeroCount(){return this._zeroCount}get scale(){return this._count===this._zeroCount?0:this._mapping.scale}get positive(){return this._positive}get negative(){return this._negative}updateByIncrement(e,t){if(e>this._max&&(this._max=e),e<this._min&&(this._min=e),this._count+=t,e===0){this._zeroCount+=t;return}this._sum+=e*t,e>0?this._updateBuckets(this._positive,e,t):this._updateBuckets(this._negative,-e,t)}merge(e){this._count===0?(this._min=e.min,this._max=e.max):e.count!==0&&(e.min<this.min&&(this._min=e.min),e.max>this.max&&(this._max=e.max)),this.startTime=e.startTime,this._sum+=e.sum,this._count+=e.count,this._zeroCount+=e.zeroCount;let t=this._minScale(e);this._downscale(this.scale-t),this._mergeBuckets(this.positive,e,e.positive,t),this._mergeBuckets(this.negative,e,e.negative,t)}diff(e){this._min=1/0,this._max=-1/0,this._sum-=e.sum,this._count-=e.count,this._zeroCount-=e.zeroCount;let t=this._minScale(e);this._downscale(this.scale-t),this._diffBuckets(this.positive,e,e.positive,t),this._diffBuckets(this.negative,e,e.negative,t)}clone(){return new r(this.startTime,this._maxSize,this._recordMinMax,this._sum,this._count,this._zeroCount,this._min,this._max,this.positive.clone(),this.negative.clone(),this._mapping)}_updateBuckets(e,t,n){let i=this._mapping.mapToIndex(t),s=!1,o=0,a=0;if(e.length===0?(e.indexStart=i,e.indexEnd=e.indexStart,e.indexBase=e.indexStart):i<e.indexStart&&e.indexEnd-i>=this._maxSize?(s=!0,a=i,o=e.indexEnd):i>e.indexEnd&&i-e.indexStart>=this._maxSize&&(s=!0,a=e.indexStart,o=i),s){let u=this._changeScale(o,a);this._downscale(u),i=this._mapping.mapToIndex(t)}this._incrementIndexBy(e,i,n)}_incrementIndexBy(e,t,n){if(n===0)return;if(t<e.indexStart){let s=e.indexEnd-t;s>=e.backing.length&&this._grow(e,s+1),e.indexStart=t}else if(t>e.indexEnd){let s=t-e.indexStart;s>=e.backing.length&&this._grow(e,s+1),e.indexEnd=t}let i=t-e.indexBase;i<0&&(i+=e.backing.length),e.incrementBucket(i,n)}_grow(e,t){let n=e.backing.length,i=e.indexBase-e.indexStart,s=n-i,o=(0,fT.nextGreaterSquare)(t);o>this._maxSize&&(o=this._maxSize);let a=o-i;e.backing.growTo(o,s,a)}_changeScale(e,t){let n=0;for(;e-t>=this._maxSize;)e>>=1,t>>=1,n++;return n}_downscale(e){if(e===0)return;if(e<0)throw new Error(`impossible change of scale: ${this.scale}`);let t=this._mapping.scale-e;this._positive.downscale(e),this._negative.downscale(e),this._mapping=(0,n_.getMapping)(t)}_minScale(e){let t=Math.min(this.scale,e.scale),n=Gt.combine(this._highLowAtScale(this.positive,this.scale,t),this._highLowAtScale(e.positive,e.scale,t)),i=Gt.combine(this._highLowAtScale(this.negative,this.scale,t),this._highLowAtScale(e.negative,e.scale,t));return Math.min(t-this._changeScale(n.high,n.low),t-this._changeScale(i.high,i.low))}_highLowAtScale(e,t,n){if(e.length===0)return new Gt(0,-1);let i=t-n;return new Gt(e.indexStart>>i,e.indexEnd>>i)}_mergeBuckets(e,t,n,i){let s=n.offset,o=t.scale-i;for(let a=0;a<n.length;a++)this._incrementIndexBy(e,s+a>>o,n.at(a))}_diffBuckets(e,t,n,i){let s=n.offset,o=t.scale-i;for(let a=0;a<n.length;a++){let l=(s+a>>o)-e.indexBase;l<0&&(l+=e.backing.length),e.decrementBucket(l,n.at(a))}e.trim()}};Vt.ExponentialHistogramAccumulation=wi;var La=class{constructor(e,t){this._maxSize=e,this._recordMinMax=t,this.kind=_T.AggregatorKind.EXPONENTIAL_HISTOGRAM}createAccumulation(e){return new wi(e,this._maxSize,this._recordMinMax)}merge(e,t){let n=t.clone();return n.merge(e),n}diff(e,t){let n=t.clone();return n.diff(e),n}toMetricData(e,t,n,i){return{descriptor:e,aggregationTemporality:t,dataPointType:hT.DataPointType.EXPONENTIAL_HISTOGRAM,dataPoints:n.map(([s,o])=>{let a=o.toPointValue(),u=e.type===va.InstrumentType.UP_DOWN_COUNTER||e.type===va.InstrumentType.OBSERVABLE_GAUGE||e.type===va.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;return{attributes:s,startTime:o.startTime,endTime:i,value:{min:a.hasMinMax?a.min:void 0,max:a.hasMinMax?a.max:void 0,sum:u?void 0:a.sum,positive:{offset:a.positive.offset,bucketCounts:a.positive.bucketCounts},negative:{offset:a.negative.offset,bucketCounts:a.negative.bucketCounts},count:a.count,scale:a.scale,zeroCount:a.zeroCount}}})}}};Vt.ExponentialHistogramAggregator=La});var s_=c(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.LastValueAggregator=Ft.LastValueAccumulation=void 0;var gT=wt(),Pr=S(),TT=Nt(),jt=class{constructor(e,t=0,n=[0,0]){this.startTime=e,this._current=t,this.sampleTime=n}record(e){this._current=e,this.sampleTime=(0,Pr.millisToHrTime)(Date.now())}setStartTime(e){this.startTime=e}toPointValue(){return this._current}};Ft.LastValueAccumulation=jt;var Ma=class{constructor(){this.kind=gT.AggregatorKind.LAST_VALUE}createAccumulation(e){return new jt(e)}merge(e,t){let n=(0,Pr.hrTimeToMicroseconds)(t.sampleTime)>=(0,Pr.hrTimeToMicroseconds)(e.sampleTime)?t:e;return new jt(e.startTime,n.toPointValue(),n.sampleTime)}diff(e,t){let n=(0,Pr.hrTimeToMicroseconds)(t.sampleTime)>=(0,Pr.hrTimeToMicroseconds)(e.sampleTime)?t:e;return new jt(t.startTime,n.toPointValue(),n.sampleTime)}toMetricData(e,t,n,i){return{descriptor:e,aggregationTemporality:t,dataPointType:TT.DataPointType.GAUGE,dataPoints:n.map(([s,o])=>({attributes:s,startTime:o.startTime,endTime:i,value:o.toPointValue()}))}}};Ft.LastValueAggregator=Ma});var o_=c(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.SumAggregator=Ht.SumAccumulation=void 0;var ST=wt(),AT=Nt(),Ne=class{constructor(e,t,n=0,i=!1){this.startTime=e,this.monotonic=t,this._current=n,this.reset=i}record(e){this.monotonic&&e<0||(this._current+=e)}setStartTime(e){this.startTime=e}toPointValue(){return this._current}};Ht.SumAccumulation=Ne;var Ca=class{constructor(e){this.monotonic=e,this.kind=ST.AggregatorKind.SUM}createAccumulation(e){return new Ne(e,this.monotonic)}merge(e,t){let n=e.toPointValue(),i=t.toPointValue();return t.reset?new Ne(t.startTime,this.monotonic,i,t.reset):new Ne(e.startTime,this.monotonic,n+i)}diff(e,t){let n=e.toPointValue(),i=t.toPointValue();return this.monotonic&&n>i?new Ne(t.startTime,this.monotonic,i,!0):new Ne(t.startTime,this.monotonic,i-n)}toMetricData(e,t,n,i){return{descriptor:e,aggregationTemporality:t,dataPointType:AT.DataPointType.SUM,dataPoints:n.map(([s,o])=>({attributes:s,startTime:o.startTime,endTime:i,value:o.toPointValue()})),isMonotonic:this.monotonic}}};Ht.SumAggregator=Ca});var a_=c(ce=>{"use strict";var OT=ce&&ce.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),yr=ce&&ce.__exportStar||function(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&OT(e,r,t)};Object.defineProperty(ce,"__esModule",{value:!0});yr(Hd(),ce);yr($d(),ce);yr(i_(),ce);yr(s_(),ce);yr(o_(),ce)});var Ui=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.DefaultAggregation=G.ExponentialHistogramAggregation=G.ExplicitBucketHistogramAggregation=G.HistogramAggregation=G.LastValueAggregation=G.SumAggregation=G.DropAggregation=G.Aggregation=void 0;var RT=(h(),f(d)),ot=a_(),Oe=Ae(),me=class{static Drop(){return u_}static Sum(){return c_}static LastValue(){return l_}static Histogram(){return d_}static ExponentialHistogram(){return bT}static Default(){return PT}};G.Aggregation=me;var vr=class r extends me{createAggregator(e){return r.DEFAULT_INSTANCE}};G.DropAggregation=vr;vr.DEFAULT_INSTANCE=new ot.DropAggregator;var kt=class r extends me{createAggregator(e){switch(e.type){case Oe.InstrumentType.COUNTER:case Oe.InstrumentType.OBSERVABLE_COUNTER:case Oe.InstrumentType.HISTOGRAM:return r.MONOTONIC_INSTANCE;default:return r.NON_MONOTONIC_INSTANCE}}};G.SumAggregation=kt;kt.MONOTONIC_INSTANCE=new ot.SumAggregator(!0);kt.NON_MONOTONIC_INSTANCE=new ot.SumAggregator(!1);var Ir=class r extends me{createAggregator(e){return r.DEFAULT_INSTANCE}};G.LastValueAggregation=Ir;Ir.DEFAULT_INSTANCE=new ot.LastValueAggregator;var Lr=class r extends me{createAggregator(e){return r.DEFAULT_INSTANCE}};G.HistogramAggregation=Lr;Lr.DEFAULT_INSTANCE=new ot.HistogramAggregator([0,5,10,25,50,75,100,250,500,750,1e3,2500,5e3,7500,1e4],!0);var xi=class extends me{constructor(e,t=!0){if(super(),this._recordMinMax=t,e===void 0||e.length===0)throw new Error("HistogramAggregator should be created with boundaries.");e=e.concat(),e=e.sort((s,o)=>s-o);let n=e.lastIndexOf(-1/0),i=e.indexOf(1/0);i===-1&&(i=void 0),this._boundaries=e.slice(n+1,i)}createAggregator(e){return new ot.HistogramAggregator(this._boundaries,this._recordMinMax)}};G.ExplicitBucketHistogramAggregation=xi;var Di=class extends me{constructor(e=160,t=!0){super(),this._maxSize=e,this._recordMinMax=t}createAggregator(e){return new ot.ExponentialHistogramAggregator(this._maxSize,this._recordMinMax)}};G.ExponentialHistogramAggregation=Di;var Bi=class extends me{_resolve(e){switch(e.type){case Oe.InstrumentType.COUNTER:case Oe.InstrumentType.UP_DOWN_COUNTER:case Oe.InstrumentType.OBSERVABLE_COUNTER:case Oe.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:return c_;case Oe.InstrumentType.OBSERVABLE_GAUGE:return l_;case Oe.InstrumentType.HISTOGRAM:return e.advice.explicitBucketBoundaries?new xi(e.advice.explicitBucketBoundaries):d_}return RT.diag.warn(`Unable to recognize instrument type: ${e.type}`),u_}createAggregator(e){return this._resolve(e).createAggregator(e)}};G.DefaultAggregation=Bi;var u_=new vr,c_=new kt,l_=new Ir,d_=new Lr,bT=new Di,PT=new Bi});var Na=c(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR=Xt.DEFAULT_AGGREGATION_SELECTOR=void 0;var yT=Ui(),vT=Ri(),IT=r=>yT.Aggregation.Default();Xt.DEFAULT_AGGREGATION_SELECTOR=IT;var LT=r=>vT.AggregationTemporality.CUMULATIVE;Xt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR=LT});var xa=c(Gi=>{"use strict";Object.defineProperty(Gi,"__esModule",{value:!0});Gi.MetricReader=void 0;var __=(h(),f(d)),qi=Ee(),h_=Na(),wa=class{constructor(e){var t,n,i;this._shutdown=!1,this._aggregationSelector=(t=e?.aggregationSelector)!==null&&t!==void 0?t:h_.DEFAULT_AGGREGATION_SELECTOR,this._aggregationTemporalitySelector=(n=e?.aggregationTemporalitySelector)!==null&&n!==void 0?n:h_.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR,this._metricProducers=(i=e?.metricProducers)!==null&&i!==void 0?i:[]}setMetricProducer(e){if(this._sdkMetricProducer)throw new Error("MetricReader can not be bound to a MeterProvider again.");this._sdkMetricProducer=e,this.onInitialized()}selectAggregation(e){return this._aggregationSelector(e)}selectAggregationTemporality(e){return this._aggregationTemporalitySelector(e)}onInitialized(){}async collect(e){if(this._sdkMetricProducer===void 0)throw new Error("MetricReader is not bound to a MetricProducer");if(this._shutdown)throw new Error("MetricReader is shutdown");let[t,...n]=await Promise.all([this._sdkMetricProducer.collect({timeoutMillis:e?.timeoutMillis}),...this._metricProducers.map(a=>a.collect({timeoutMillis:e?.timeoutMillis}))]),i=t.errors.concat((0,qi.FlatMap)(n,a=>a.errors)),s=t.resourceMetrics.resource,o=t.resourceMetrics.scopeMetrics.concat((0,qi.FlatMap)(n,a=>a.resourceMetrics.scopeMetrics));return{resourceMetrics:{resource:s,scopeMetrics:o},errors:i}}async shutdown(e){if(this._shutdown){__.diag.error("Cannot call shutdown twice.");return}e?.timeoutMillis==null?await this.onShutdown():await(0,qi.callWithTimeout)(this.onShutdown(),e.timeoutMillis),this._shutdown=!0}async forceFlush(e){if(this._shutdown){__.diag.warn("Cannot forceFlush on already shutdown MetricReader.");return}if(e?.timeoutMillis==null){await this.onForceFlush();return}await(0,qi.callWithTimeout)(this.onForceFlush(),e.timeoutMillis)}};Gi.MetricReader=wa});var E_=c(ji=>{"use strict";Object.defineProperty(ji,"__esModule",{value:!0});ji.PeriodicExportingMetricReader=void 0;var p_=(h(),f(d)),Vi=S(),MT=xa(),f_=Ee(),CT=(h(),f(d)),Da=class extends MT.MetricReader{constructor(e){var t,n,i,s;if(super({aggregationSelector:(t=e.exporter.selectAggregation)===null||t===void 0?void 0:t.bind(e.exporter),aggregationTemporalitySelector:(n=e.exporter.selectAggregationTemporality)===null||n===void 0?void 0:n.bind(e.exporter),metricProducers:e.metricProducers}),e.exportIntervalMillis!==void 0&&e.exportIntervalMillis<=0)throw Error("exportIntervalMillis must be greater than 0");if(e.exportTimeoutMillis!==void 0&&e.exportTimeoutMillis<=0)throw Error("exportTimeoutMillis must be greater than 0");if(e.exportTimeoutMillis!==void 0&&e.exportIntervalMillis!==void 0&&e.exportIntervalMillis<e.exportTimeoutMillis)throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");this._exportInterval=(i=e.exportIntervalMillis)!==null&&i!==void 0?i:6e4,this._exportTimeout=(s=e.exportTimeoutMillis)!==null&&s!==void 0?s:3e4,this._exporter=e.exporter}async _runOnce(){try{await(0,f_.callWithTimeout)(this._doRun(),this._exportTimeout)}catch(e){if(e instanceof f_.TimeoutError){p_.diag.error("Export took longer than %s milliseconds and timed out.",this._exportTimeout);return}(0,Vi.globalErrorHandler)(e)}}async _doRun(){var e,t;let{resourceMetrics:n,errors:i}=await this.collect({timeoutMillis:this._exportTimeout});i.length>0&&p_.diag.error("PeriodicExportingMetricReader: metrics collection errors",...i);let s=async()=>{let o=await Vi.internal._export(this._exporter,n);if(o.code!==Vi.ExportResultCode.SUCCESS)throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${o.error})`)};n.resource.asyncAttributesPending?(t=(e=n.resource).waitForAsyncAttributes)===null||t===void 0||t.call(e).then(s,o=>CT.diag.debug("Error while resolving async portion of resource: ",o)):await s()}onInitialized(){this._interval=setInterval(()=>{this._runOnce()},this._exportInterval),(0,Vi.unrefTimer)(this._interval)}async onForceFlush(){await this._runOnce(),await this._exporter.forceFlush()}async onShutdown(){this._interval&&clearInterval(this._interval),await this._exporter.shutdown()}};ji.PeriodicExportingMetricReader=Da});var g_=c(Fi=>{"use strict";Object.defineProperty(Fi,"__esModule",{value:!0});Fi.InMemoryMetricExporter=void 0;var m_=S(),Ba=class{constructor(e){this._shutdown=!1,this._metrics=[],this._aggregationTemporality=e}export(e,t){if(this._shutdown){setTimeout(()=>t({code:m_.ExportResultCode.FAILED}),0);return}this._metrics.push(e),setTimeout(()=>t({code:m_.ExportResultCode.SUCCESS}),0)}getMetrics(){return this._metrics}forceFlush(){return Promise.resolve()}reset(){this._metrics=[]}selectAggregationTemporality(e){return this._aggregationTemporality}shutdown(){return this._shutdown=!0,Promise.resolve()}};Fi.InMemoryMetricExporter=Ba});var S_=c(Hi=>{"use strict";Object.defineProperty(Hi,"__esModule",{value:!0});Hi.ConsoleMetricExporter=void 0;var T_=S(),NT=Na(),Ua=class r{constructor(e){var t;this._shutdown=!1,this._temporalitySelector=(t=e?.temporalitySelector)!==null&&t!==void 0?t:NT.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR}export(e,t){if(this._shutdown){setImmediate(t,{code:T_.ExportResultCode.FAILED});return}return r._sendMetrics(e,t)}forceFlush(){return Promise.resolve()}selectAggregationTemporality(e){return this._temporalitySelector(e)}shutdown(){return this._shutdown=!0,Promise.resolve()}static _sendMetrics(e,t){for(let n of e.scopeMetrics)for(let i of n.metrics)console.dir({descriptor:i.descriptor,dataPointType:i.dataPointType,dataPoints:i.dataPoints});t({code:T_.ExportResultCode.SUCCESS})}};Hi.ConsoleMetricExporter=Ua});var A_=c(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.ViewRegistry=void 0;var qa=class{constructor(){this._registeredViews=[]}addView(e){this._registeredViews.push(e)}findViews(e,t){return this._registeredViews.filter(i=>this._matchInstrument(i.instrumentSelector,e)&&this._matchMeter(i.meterSelector,t))}_matchInstrument(e,t){return(e.getType()===void 0||t.type===e.getType())&&e.getNameFilter().match(t.name)&&e.getUnitFilter().match(t.unit)}_matchMeter(e,t){return e.getNameFilter().match(t.name)&&(t.version===void 0||e.getVersionFilter().match(t.version))&&(t.schemaUrl===void 0||e.getSchemaUrlFilter().match(t.schemaUrl))}};ki.ViewRegistry=qa});var Xi=c(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.isObservableInstrument=x.ObservableUpDownCounterInstrument=x.ObservableGaugeInstrument=x.ObservableCounterInstrument=x.ObservableInstrument=x.HistogramInstrument=x.CounterInstrument=x.UpDownCounterInstrument=x.SyncInstrument=void 0;var $t=(h(),f(d)),wT=S(),Wt=class{constructor(e,t){this._writableMetricStorage=e,this._descriptor=t}_record(e,t={},n=$t.context.active()){if(typeof e!="number"){$t.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);return}this._descriptor.valueType===$t.ValueType.INT&&!Number.isInteger(e)&&($t.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`),e=Math.trunc(e),!Number.isInteger(e))||this._writableMetricStorage.record(e,t,n,(0,wT.millisToHrTime)(Date.now()))}};x.SyncInstrument=Wt;var Ga=class extends Wt{add(e,t,n){this._record(e,t,n)}};x.UpDownCounterInstrument=Ga;var Va=class extends Wt{add(e,t,n){if(e<0){$t.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);return}this._record(e,t,n)}};x.CounterInstrument=Va;var ja=class extends Wt{record(e,t,n){if(e<0){$t.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);return}this._record(e,t,n)}};x.HistogramInstrument=ja;var at=class{constructor(e,t,n){this._observableRegistry=n,this._descriptor=e,this._metricStorages=t}addCallback(e){this._observableRegistry.addCallback(e,this)}removeCallback(e){this._observableRegistry.removeCallback(e,this)}};x.ObservableInstrument=at;var Fa=class extends at{};x.ObservableCounterInstrument=Fa;var Ha=class extends at{};x.ObservableGaugeInstrument=Ha;var ka=class extends at{};x.ObservableUpDownCounterInstrument=ka;function xT(r){return r instanceof at}x.isObservableInstrument=xT});var O_=c($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.Meter=void 0;var se=Ae(),Kt=Xi(),Xa=class{constructor(e){this._meterSharedState=e}createHistogram(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.HISTOGRAM,t),i=this._meterSharedState.registerMetricStorage(n);return new Kt.HistogramInstrument(i,n)}createCounter(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.COUNTER,t),i=this._meterSharedState.registerMetricStorage(n);return new Kt.CounterInstrument(i,n)}createUpDownCounter(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.UP_DOWN_COUNTER,t),i=this._meterSharedState.registerMetricStorage(n);return new Kt.UpDownCounterInstrument(i,n)}createObservableGauge(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.OBSERVABLE_GAUGE,t),i=this._meterSharedState.registerAsyncMetricStorage(n);return new Kt.ObservableGaugeInstrument(n,i,this._meterSharedState.observableRegistry)}createObservableCounter(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.OBSERVABLE_COUNTER,t),i=this._meterSharedState.registerAsyncMetricStorage(n);return new Kt.ObservableCounterInstrument(n,i,this._meterSharedState.observableRegistry)}createObservableUpDownCounter(e,t){let n=(0,se.createInstrumentDescriptor)(e,se.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER,t),i=this._meterSharedState.registerAsyncMetricStorage(n);return new Kt.ObservableUpDownCounterInstrument(n,i,this._meterSharedState.observableRegistry)}addBatchObservableCallback(e,t){this._meterSharedState.observableRegistry.addBatchCallback(e,t)}removeBatchObservableCallback(e,t){this._meterSharedState.observableRegistry.removeBatchCallback(e,t)}};$i.Meter=Xa});var Wa=c(Wi=>{"use strict";Object.defineProperty(Wi,"__esModule",{value:!0});Wi.MetricStorage=void 0;var DT=Ae(),$a=class{constructor(e){this._instrumentDescriptor=e}getInstrumentDescriptor(){return this._instrumentDescriptor}updateDescription(e){this._instrumentDescriptor=(0,DT.createInstrumentDescriptor)(this._instrumentDescriptor.name,this._instrumentDescriptor.type,{description:e,valueType:this._instrumentDescriptor.valueType,unit:this._instrumentDescriptor.unit,advice:this._instrumentDescriptor.advice})}};Wi.MetricStorage=$a});var Mr=c(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.AttributeHashMap=zt.HashMap=void 0;var BT=Ee(),Ki=class{constructor(e){this._hash=e,this._valueMap=new Map,this._keyMap=new Map}get(e,t){return t??(t=this._hash(e)),this._valueMap.get(t)}getOrDefault(e,t){let n=this._hash(e);if(this._valueMap.has(n))return this._valueMap.get(n);let i=t();return this._keyMap.has(n)||this._keyMap.set(n,e),this._valueMap.set(n,i),i}set(e,t,n){n??(n=this._hash(e)),this._keyMap.has(n)||this._keyMap.set(n,e),this._valueMap.set(n,t)}has(e,t){return t??(t=this._hash(e)),this._valueMap.has(t)}*keys(){let e=this._keyMap.entries(),t=e.next();for(;t.done!==!0;)yield[t.value[1],t.value[0]],t=e.next()}*entries(){let e=this._valueMap.entries(),t=e.next();for(;t.done!==!0;)yield[this._keyMap.get(t.value[0]),t.value[1],t.value[0]],t=e.next()}get size(){return this._valueMap.size}};zt.HashMap=Ki;var Ka=class extends Ki{constructor(){super(BT.hashAttributes)}};zt.AttributeHashMap=Ka});var Qa=c(zi=>{"use strict";Object.defineProperty(zi,"__esModule",{value:!0});zi.DeltaMetricProcessor=void 0;var za=Mr(),Ya=class{constructor(e){this._aggregator=e,this._activeCollectionStorage=new za.AttributeHashMap,this._cumulativeMemoStorage=new za.AttributeHashMap}record(e,t,n,i){let s=this._activeCollectionStorage.getOrDefault(t,()=>this._aggregator.createAccumulation(i));s?.record(e)}batchCumulate(e,t){Array.from(e.entries()).forEach(([n,i,s])=>{let o=this._aggregator.createAccumulation(t);o?.record(i);let a=o;if(this._cumulativeMemoStorage.has(n,s)){let u=this._cumulativeMemoStorage.get(n,s);a=this._aggregator.diff(u,o)}if(this._activeCollectionStorage.has(n,s)){let u=this._activeCollectionStorage.get(n,s);a=this._aggregator.merge(u,a)}this._cumulativeMemoStorage.set(n,o,s),this._activeCollectionStorage.set(n,a,s)})}collect(){let e=this._activeCollectionStorage;return this._activeCollectionStorage=new za.AttributeHashMap,e}};zi.DeltaMetricProcessor=Ya});var Ja=c(Yi=>{"use strict";Object.defineProperty(Yi,"__esModule",{value:!0});Yi.TemporalMetricProcessor=void 0;var UT=Ri(),qT=Mr(),Za=class r{constructor(e,t){this._aggregator=e,this._unreportedAccumulations=new Map,this._reportHistory=new Map,t.forEach(n=>{this._unreportedAccumulations.set(n,[])})}buildMetrics(e,t,n,i){this._stashAccumulations(n);let s=this._getMergedUnreportedAccumulations(e),o=s,a;if(this._reportHistory.has(e)){let l=this._reportHistory.get(e),_=l.collectionTime;a=l.aggregationTemporality,a===UT.AggregationTemporality.CUMULATIVE?o=r.merge(l.accumulations,s,this._aggregator):o=r.calibrateStartTime(l.accumulations,s,_)}else a=e.selectAggregationTemporality(t.type);this._reportHistory.set(e,{accumulations:o,collectionTime:i,aggregationTemporality:a});let u=GT(o);if(u.length!==0)return this._aggregator.toMetricData(t,a,u,i)}_stashAccumulations(e){let t=this._unreportedAccumulations.keys();for(let n of t){let i=this._unreportedAccumulations.get(n);i===void 0&&(i=[],this._unreportedAccumulations.set(n,i)),i.push(e)}}_getMergedUnreportedAccumulations(e){let t=new qT.AttributeHashMap,n=this._unreportedAccumulations.get(e);if(this._unreportedAccumulations.set(e,[]),n===void 0)return t;for(let i of n)t=r.merge(t,i,this._aggregator);return t}static merge(e,t,n){let i=e,s=t.entries(),o=s.next();for(;o.done!==!0;){let[a,u,l]=o.value;if(e.has(a,l)){let _=e.get(a,l),E=n.merge(_,u);i.set(a,E,l)}else i.set(a,u,l);o=s.next()}return i}static calibrateStartTime(e,t,n){for(let[i,s]of e.keys()){let o=t.get(i,s);o?.setStartTime(n)}return t}};Yi.TemporalMetricProcessor=Za;function GT(r){return Array.from(r.entries())}});var R_=c(Qi=>{"use strict";Object.defineProperty(Qi,"__esModule",{value:!0});Qi.AsyncMetricStorage=void 0;var VT=Wa(),jT=Qa(),FT=Ja(),HT=Mr(),eu=class extends VT.MetricStorage{constructor(e,t,n,i){super(e),this._attributesProcessor=n,this._deltaMetricStorage=new jT.DeltaMetricProcessor(t),this._temporalMetricStorage=new FT.TemporalMetricProcessor(t,i)}record(e,t){let n=new HT.AttributeHashMap;Array.from(e.entries()).forEach(([i,s])=>{n.set(this._attributesProcessor.process(i),s)}),this._deltaMetricStorage.batchCumulate(n,t)}collect(e,t){let n=this._deltaMetricStorage.collect();return this._temporalMetricStorage.buildMetrics(e,this._instrumentDescriptor,n,t)}};Qi.AsyncMetricStorage=eu});var I_=c(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.getConflictResolutionRecipe=Q.getDescriptionResolutionRecipe=Q.getTypeConflictResolutionRecipe=Q.getUnitConflictResolutionRecipe=Q.getValueTypeConflictResolutionRecipe=Q.getIncompatibilityDetails=void 0;function kT(r,e){let t="";return r.unit!==e.unit&&(t+=`	- Unit '${r.unit}' does not match '${e.unit}'
`),r.type!==e.type&&(t+=`	- Type '${r.type}' does not match '${e.type}'
`),r.valueType!==e.valueType&&(t+=`	- Value Type '${r.valueType}' does not match '${e.valueType}'
`),r.description!==e.description&&(t+=`	- Description '${r.description}' does not match '${e.description}'
`),t}Q.getIncompatibilityDetails=kT;function b_(r,e){return`	- use valueType '${r.valueType}' on instrument creation or use an instrument name other than '${e.name}'`}Q.getValueTypeConflictResolutionRecipe=b_;function P_(r,e){return`	- use unit '${r.unit}' on instrument creation or use an instrument name other than '${e.name}'`}Q.getUnitConflictResolutionRecipe=P_;function y_(r,e){let t={name:e.name,type:e.type,unit:e.unit},n=JSON.stringify(t);return`	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'`}Q.getTypeConflictResolutionRecipe=y_;function v_(r,e){let t={name:e.name,type:e.type,unit:e.unit},n=JSON.stringify(t);return`	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'
    	- OR - create a new view with the name ${r.name} and description '${r.description}' and InstrumentSelector ${n}
    	- OR - create a new view with the name ${e.name} and description '${r.description}' and InstrumentSelector ${n}`}Q.getDescriptionResolutionRecipe=v_;function XT(r,e){return r.valueType!==e.valueType?b_(r,e):r.unit!==e.unit?P_(r,e):r.type!==e.type?y_(r,e):r.description!==e.description?v_(r,e):""}Q.getConflictResolutionRecipe=XT});var M_=c(Ji=>{"use strict";Object.defineProperty(Ji,"__esModule",{value:!0});Ji.MetricStorageRegistry=void 0;var $T=Ae(),L_=(h(),f(d)),Zi=I_(),tu=class r{constructor(){this._sharedRegistry=new Map,this._perCollectorRegistry=new Map}static create(){return new r}getStorages(e){let t=[];for(let i of this._sharedRegistry.values())t=t.concat(i);let n=this._perCollectorRegistry.get(e);if(n!=null)for(let i of n.values())t=t.concat(i);return t}register(e){this._registerStorage(e,this._sharedRegistry)}registerForCollector(e,t){let n=this._perCollectorRegistry.get(e);n==null&&(n=new Map,this._perCollectorRegistry.set(e,n)),this._registerStorage(t,n)}findOrUpdateCompatibleStorage(e){let t=this._sharedRegistry.get(e.name);return t===void 0?null:this._findOrUpdateCompatibleStorage(e,t)}findOrUpdateCompatibleCollectorStorage(e,t){let n=this._perCollectorRegistry.get(e);if(n===void 0)return null;let i=n.get(t.name);return i===void 0?null:this._findOrUpdateCompatibleStorage(t,i)}_registerStorage(e,t){let n=e.getInstrumentDescriptor(),i=t.get(n.name);if(i===void 0){t.set(n.name,[e]);return}i.push(e)}_findOrUpdateCompatibleStorage(e,t){let n=null;for(let i of t){let s=i.getInstrumentDescriptor();(0,$T.isDescriptorCompatibleWith)(s,e)?(s.description!==e.description&&(e.description.length>s.description.length&&i.updateDescription(e.description),L_.diag.warn("A view or instrument with the name ",e.name,` has already been registered, but has a different description and is incompatible with another registered view.
`,`Details:
`,(0,Zi.getIncompatibilityDetails)(s,e),`The longer description will be used.
To resolve the conflict:`,(0,Zi.getConflictResolutionRecipe)(s,e))),n=i):L_.diag.warn("A view or instrument with the name ",e.name,` has already been registered and is incompatible with another registered view.
`,`Details:
`,(0,Zi.getIncompatibilityDetails)(s,e),`To resolve the conflict:
`,(0,Zi.getConflictResolutionRecipe)(s,e))}return n}};Ji.MetricStorageRegistry=tu});var C_=c(es=>{"use strict";Object.defineProperty(es,"__esModule",{value:!0});es.MultiMetricStorage=void 0;var ru=class{constructor(e){this._backingStorages=e}record(e,t,n,i){this._backingStorages.forEach(s=>{s.record(e,t,n,i)})}};es.MultiMetricStorage=ru});var w_=c(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.BatchObservableResultImpl=Qt.ObservableResultImpl=void 0;var Yt=(h(),f(d)),N_=Mr(),WT=Xi(),nu=class{constructor(e,t){this._instrumentName=e,this._valueType=t,this._buffer=new N_.AttributeHashMap}observe(e,t={}){if(typeof e!="number"){Yt.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);return}this._valueType===Yt.ValueType.INT&&!Number.isInteger(e)&&(Yt.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`),e=Math.trunc(e),!Number.isInteger(e))||this._buffer.set(t,e)}};Qt.ObservableResultImpl=nu;var iu=class{constructor(){this._buffer=new Map}observe(e,t,n={}){if(!(0,WT.isObservableInstrument)(e))return;let i=this._buffer.get(e);if(i==null&&(i=new N_.AttributeHashMap,this._buffer.set(e,i)),typeof t!="number"){Yt.diag.warn(`non-number value provided to metric ${e._descriptor.name}: ${t}`);return}e._descriptor.valueType===Yt.ValueType.INT&&!Number.isInteger(t)&&(Yt.diag.warn(`INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`),t=Math.trunc(t),!Number.isInteger(t))||i.set(n,t)}};Qt.BatchObservableResultImpl=iu});var B_=c(ts=>{"use strict";Object.defineProperty(ts,"__esModule",{value:!0});ts.ObservableRegistry=void 0;var KT=(h(),f(d)),x_=Xi(),D_=w_(),Cr=Ee(),su=class{constructor(){this._callbacks=[],this._batchCallbacks=[]}addCallback(e,t){this._findCallback(e,t)>=0||this._callbacks.push({callback:e,instrument:t})}removeCallback(e,t){let n=this._findCallback(e,t);n<0||this._callbacks.splice(n,1)}addBatchCallback(e,t){let n=new Set(t.filter(x_.isObservableInstrument));if(n.size===0){KT.diag.error("BatchObservableCallback is not associated with valid instruments",t);return}this._findBatchCallback(e,n)>=0||this._batchCallbacks.push({callback:e,instruments:n})}removeBatchCallback(e,t){let n=new Set(t.filter(x_.isObservableInstrument)),i=this._findBatchCallback(e,n);i<0||this._batchCallbacks.splice(i,1)}async observe(e,t){let n=this._observeCallbacks(e,t),i=this._observeBatchCallbacks(e,t);return(await(0,Cr.PromiseAllSettled)([...n,...i])).filter(Cr.isPromiseAllSettledRejectionResult).map(a=>a.reason)}_observeCallbacks(e,t){return this._callbacks.map(async({callback:n,instrument:i})=>{let s=new D_.ObservableResultImpl(i._descriptor.name,i._descriptor.valueType),o=Promise.resolve(n(s));t!=null&&(o=(0,Cr.callWithTimeout)(o,t)),await o,i._metricStorages.forEach(a=>{a.record(s._buffer,e)})})}_observeBatchCallbacks(e,t){return this._batchCallbacks.map(async({callback:n,instruments:i})=>{let s=new D_.BatchObservableResultImpl,o=Promise.resolve(n(s));t!=null&&(o=(0,Cr.callWithTimeout)(o,t)),await o,i.forEach(a=>{let u=s._buffer.get(a);u!=null&&a._metricStorages.forEach(l=>{l.record(u,e)})})})}_findCallback(e,t){return this._callbacks.findIndex(n=>n.callback===e&&n.instrument===t)}_findBatchCallback(e,t){return this._batchCallbacks.findIndex(n=>n.callback===e&&(0,Cr.setEquals)(n.instruments,t))}};ts.ObservableRegistry=su});var U_=c(rs=>{"use strict";Object.defineProperty(rs,"__esModule",{value:!0});rs.SyncMetricStorage=void 0;var zT=Wa(),YT=Qa(),QT=Ja(),ou=class extends zT.MetricStorage{constructor(e,t,n,i){super(e),this._attributesProcessor=n,this._deltaMetricStorage=new YT.DeltaMetricProcessor(t),this._temporalMetricStorage=new QT.TemporalMetricProcessor(t,i)}record(e,t,n,i){t=this._attributesProcessor.process(t,n),this._deltaMetricStorage.record(e,t,n,i)}collect(e,t){let n=this._deltaMetricStorage.collect();return this._temporalMetricStorage.buildMetrics(e,this._instrumentDescriptor,n,t)}};rs.SyncMetricStorage=ou});var uu=c(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.FilteringAttributesProcessor=we.NoopAttributesProcessor=we.AttributesProcessor=void 0;var Nr=class{static Noop(){return ZT}};we.AttributesProcessor=Nr;var ns=class extends Nr{process(e,t){return e}};we.NoopAttributesProcessor=ns;var au=class extends Nr{constructor(e){super(),this._allowedAttributeNames=e}process(e,t){let n={};return Object.keys(e).filter(i=>this._allowedAttributeNames.includes(i)).forEach(i=>n[i]=e[i]),n}};we.FilteringAttributesProcessor=au;var ZT=new ns});var q_=c(is=>{"use strict";Object.defineProperty(is,"__esModule",{value:!0});is.MeterSharedState=void 0;var JT=Ae(),eS=O_(),tS=Ee(),rS=R_(),nS=M_(),iS=C_(),sS=B_(),oS=U_(),aS=uu(),cu=class{constructor(e,t){this._meterProviderSharedState=e,this._instrumentationScope=t,this.metricStorageRegistry=new nS.MetricStorageRegistry,this.observableRegistry=new sS.ObservableRegistry,this.meter=new eS.Meter(this)}registerMetricStorage(e){let t=this._registerMetricStorage(e,oS.SyncMetricStorage);return t.length===1?t[0]:new iS.MultiMetricStorage(t)}registerAsyncMetricStorage(e){return this._registerMetricStorage(e,rS.AsyncMetricStorage)}async collect(e,t,n){let i=await this.observableRegistry.observe(t,n?.timeoutMillis),s=this.metricStorageRegistry.getStorages(e);if(s.length===0)return null;let o=s.map(a=>a.collect(e,t)).filter(tS.isNotNullish);return o.length===0?{errors:i}:{scopeMetrics:{scope:this._instrumentationScope,metrics:o},errors:i}}_registerMetricStorage(e,t){let i=this._meterProviderSharedState.viewRegistry.findViews(e,this._instrumentationScope).map(s=>{let o=(0,JT.createInstrumentDescriptorWithView)(s,e),a=this.metricStorageRegistry.findOrUpdateCompatibleStorage(o);if(a!=null)return a;let u=s.aggregation.createAggregator(o),l=new t(o,u,s.attributesProcessor,this._meterProviderSharedState.metricCollectors);return this.metricStorageRegistry.register(l),l});if(i.length===0){let o=this._meterProviderSharedState.selectAggregations(e.type).map(([a,u])=>{let l=this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(a,e);if(l!=null)return l;let _=u.createAggregator(e),E=new t(e,_,aS.AttributesProcessor.Noop(),[a]);return this.metricStorageRegistry.registerForCollector(a,E),E});i=i.concat(o)}return i}};is.MeterSharedState=cu});var G_=c(ss=>{"use strict";Object.defineProperty(ss,"__esModule",{value:!0});ss.MeterProviderSharedState=void 0;var uS=Ee(),cS=A_(),lS=q_(),lu=class{constructor(e){this.resource=e,this.viewRegistry=new cS.ViewRegistry,this.metricCollectors=[],this.meterSharedStates=new Map}getMeterSharedState(e){let t=(0,uS.instrumentationScopeId)(e),n=this.meterSharedStates.get(t);return n==null&&(n=new lS.MeterSharedState(this,e),this.meterSharedStates.set(t,n)),n}selectAggregations(e){let t=[];for(let n of this.metricCollectors)t.push([n,n.selectAggregation(e)]);return t}};ss.MeterProviderSharedState=lu});var V_=c(os=>{"use strict";Object.defineProperty(os,"__esModule",{value:!0});os.MetricCollector=void 0;var dS=S(),du=class{constructor(e,t){this._sharedState=e,this._metricReader=t}async collect(e){let t=(0,dS.millisToHrTime)(Date.now()),n=[],i=[],s=Array.from(this._sharedState.meterSharedStates.values()).map(async o=>{let a=await o.collect(this,t,e);a?.scopeMetrics!=null&&n.push(a.scopeMetrics),a?.errors!=null&&i.push(...a.errors)});return await Promise.all(s),{resourceMetrics:{resource:this._sharedState.resource,scopeMetrics:n},errors:i}}async forceFlush(e){await this._metricReader.forceFlush(e)}async shutdown(e){await this._metricReader.shutdown(e)}selectAggregationTemporality(e){return this._metricReader.selectAggregationTemporality(e)}selectAggregation(e){return this._metricReader.selectAggregation(e)}};os.MetricCollector=du});var F_=c(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.MeterProvider=void 0;var as=(h(),f(d)),j_=tt(),_S=G_(),hS=V_(),_u=class{constructor(e){var t;this._shutdown=!1;let n=j_.Resource.default().merge((t=e?.resource)!==null&&t!==void 0?t:j_.Resource.empty());if(this._sharedState=new _S.MeterProviderSharedState(n),e?.views!=null&&e.views.length>0)for(let i of e.views)this._sharedState.viewRegistry.addView(i)}getMeter(e,t="",n={}){return this._shutdown?(as.diag.warn("A shutdown MeterProvider cannot provide a Meter"),(0,as.createNoopMeter)()):this._sharedState.getMeterSharedState({name:e,version:t,schemaUrl:n.schemaUrl}).meter}addMetricReader(e){let t=new hS.MetricCollector(this._sharedState,e);e.setMetricProducer(t),this._sharedState.metricCollectors.push(t)}async shutdown(e){if(this._shutdown){as.diag.warn("shutdown may only be called once per MeterProvider");return}this._shutdown=!0,await Promise.all(this._sharedState.metricCollectors.map(t=>t.shutdown(e)))}async forceFlush(e){if(this._shutdown){as.diag.warn("invalid attempt to force flush after MeterProvider shutdown");return}await Promise.all(this._sharedState.metricCollectors.map(t=>t.forceFlush(e)))}};us.MeterProvider=_u});var cs=c(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.ExactPredicate=Zt.PatternPredicate=void 0;var pS=/[\^$\\.+?()[\]{}|]/g,hu=class r{constructor(e){e==="*"?(this._matchAll=!0,this._regexp=/.*/):(this._matchAll=!1,this._regexp=new RegExp(r.escapePattern(e)))}match(e){return this._matchAll?!0:this._regexp.test(e)}static escapePattern(e){return`^${e.replace(pS,"\\$&").replace("*",".*")}$`}static hasWildcard(e){return e.includes("*")}};Zt.PatternPredicate=hu;var pu=class{constructor(e){this._matchAll=e===void 0,this._pattern=e}match(e){return!!(this._matchAll||e===this._pattern)}};Zt.ExactPredicate=pu});var k_=c(ls=>{"use strict";Object.defineProperty(ls,"__esModule",{value:!0});ls.InstrumentSelector=void 0;var H_=cs(),fu=class{constructor(e){var t;this._nameFilter=new H_.PatternPredicate((t=e?.name)!==null&&t!==void 0?t:"*"),this._type=e?.type,this._unitFilter=new H_.ExactPredicate(e?.unit)}getType(){return this._type}getNameFilter(){return this._nameFilter}getUnitFilter(){return this._unitFilter}};ls.InstrumentSelector=fu});var X_=c(ds=>{"use strict";Object.defineProperty(ds,"__esModule",{value:!0});ds.MeterSelector=void 0;var Eu=cs(),mu=class{constructor(e){this._nameFilter=new Eu.ExactPredicate(e?.name),this._versionFilter=new Eu.ExactPredicate(e?.version),this._schemaUrlFilter=new Eu.ExactPredicate(e?.schemaUrl)}getNameFilter(){return this._nameFilter}getVersionFilter(){return this._versionFilter}getSchemaUrlFilter(){return this._schemaUrlFilter}};ds.MeterSelector=mu});var W_=c(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});_s.View=void 0;var fS=cs(),$_=uu(),ES=k_(),mS=X_(),gS=Ui();function TS(r){return r.instrumentName==null&&r.instrumentType==null&&r.instrumentUnit==null&&r.meterName==null&&r.meterVersion==null&&r.meterSchemaUrl==null}var gu=class{constructor(e){var t;if(TS(e))throw new Error("Cannot create view with no selector arguments supplied");if(e.name!=null&&(e?.instrumentName==null||fS.PatternPredicate.hasWildcard(e.instrumentName)))throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");e.attributeKeys!=null?this.attributesProcessor=new $_.FilteringAttributesProcessor(e.attributeKeys):this.attributesProcessor=$_.AttributesProcessor.Noop(),this.name=e.name,this.description=e.description,this.aggregation=(t=e.aggregation)!==null&&t!==void 0?t:gS.Aggregation.Default(),this.instrumentSelector=new ES.InstrumentSelector({name:e.instrumentName,type:e.instrumentType,unit:e.instrumentUnit}),this.meterSelector=new mS.MeterSelector({name:e.meterName,version:e.meterVersion,schemaUrl:e.meterSchemaUrl})}};_s.View=gu});var K_=c(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.TimeoutError=g.View=g.Aggregation=g.SumAggregation=g.LastValueAggregation=g.HistogramAggregation=g.DropAggregation=g.ExponentialHistogramAggregation=g.ExplicitBucketHistogramAggregation=g.DefaultAggregation=g.MeterProvider=g.InstrumentType=g.ConsoleMetricExporter=g.InMemoryMetricExporter=g.PeriodicExportingMetricReader=g.MetricReader=g.DataPointType=g.AggregationTemporality=void 0;var SS=Ri();Object.defineProperty(g,"AggregationTemporality",{enumerable:!0,get:function(){return SS.AggregationTemporality}});var AS=Nt();Object.defineProperty(g,"DataPointType",{enumerable:!0,get:function(){return AS.DataPointType}});var OS=xa();Object.defineProperty(g,"MetricReader",{enumerable:!0,get:function(){return OS.MetricReader}});var RS=E_();Object.defineProperty(g,"PeriodicExportingMetricReader",{enumerable:!0,get:function(){return RS.PeriodicExportingMetricReader}});var bS=g_();Object.defineProperty(g,"InMemoryMetricExporter",{enumerable:!0,get:function(){return bS.InMemoryMetricExporter}});var PS=S_();Object.defineProperty(g,"ConsoleMetricExporter",{enumerable:!0,get:function(){return PS.ConsoleMetricExporter}});var yS=Ae();Object.defineProperty(g,"InstrumentType",{enumerable:!0,get:function(){return yS.InstrumentType}});var vS=F_();Object.defineProperty(g,"MeterProvider",{enumerable:!0,get:function(){return vS.MeterProvider}});var xe=Ui();Object.defineProperty(g,"DefaultAggregation",{enumerable:!0,get:function(){return xe.DefaultAggregation}});Object.defineProperty(g,"ExplicitBucketHistogramAggregation",{enumerable:!0,get:function(){return xe.ExplicitBucketHistogramAggregation}});Object.defineProperty(g,"ExponentialHistogramAggregation",{enumerable:!0,get:function(){return xe.ExponentialHistogramAggregation}});Object.defineProperty(g,"DropAggregation",{enumerable:!0,get:function(){return xe.DropAggregation}});Object.defineProperty(g,"HistogramAggregation",{enumerable:!0,get:function(){return xe.HistogramAggregation}});Object.defineProperty(g,"LastValueAggregation",{enumerable:!0,get:function(){return xe.LastValueAggregation}});Object.defineProperty(g,"SumAggregation",{enumerable:!0,get:function(){return xe.SumAggregation}});Object.defineProperty(g,"Aggregation",{enumerable:!0,get:function(){return xe.Aggregation}});var IS=W_();Object.defineProperty(g,"View",{enumerable:!0,get:function(){return IS.View}});var LS=Ee();Object.defineProperty(g,"TimeoutError",{enumerable:!0,get:function(){return LS.TimeoutError}})});var z_=c(hs=>{"use strict";Object.defineProperty(hs,"__esModule",{value:!0});hs.AbstractAsyncHooksContextManager=void 0;var MS=J("events"),CS=["addListener","on","once","prependListener","prependOnceListener"],Tu=class{constructor(){this._kOtListeners=Symbol("OtListeners"),this._wrapped=!1}bind(e,t){return t instanceof MS.EventEmitter?this._bindEventEmitter(e,t):typeof t=="function"?this._bindFunction(e,t):t}_bindFunction(e,t){let n=this,i=function(...s){return n.with(e,()=>t.apply(this,s))};return Object.defineProperty(i,"length",{enumerable:!1,configurable:!0,writable:!1,value:t.length}),i}_bindEventEmitter(e,t){return this._getPatchMap(t)!==void 0||(this._createPatchMap(t),CS.forEach(i=>{t[i]!==void 0&&(t[i]=this._patchAddListener(t,t[i],e))}),typeof t.removeListener=="function"&&(t.removeListener=this._patchRemoveListener(t,t.removeListener)),typeof t.off=="function"&&(t.off=this._patchRemoveListener(t,t.off)),typeof t.removeAllListeners=="function"&&(t.removeAllListeners=this._patchRemoveAllListeners(t,t.removeAllListeners))),t}_patchRemoveListener(e,t){let n=this;return function(i,s){var o;let a=(o=n._getPatchMap(e))===null||o===void 0?void 0:o[i];if(a===void 0)return t.call(this,i,s);let u=a.get(s);return t.call(this,i,u||s)}}_patchRemoveAllListeners(e,t){let n=this;return function(i){let s=n._getPatchMap(e);return s!==void 0&&(arguments.length===0?n._createPatchMap(e):s[i]!==void 0&&delete s[i]),t.apply(this,arguments)}}_patchAddListener(e,t,n){let i=this;return function(s,o){if(i._wrapped)return t.call(this,s,o);let a=i._getPatchMap(e);a===void 0&&(a=i._createPatchMap(e));let u=a[s];u===void 0&&(u=new WeakMap,a[s]=u);let l=i.bind(n,o);u.set(o,l),i._wrapped=!0;try{return t.call(this,s,l)}finally{i._wrapped=!1}}}_createPatchMap(e){let t=Object.create(null);return e[this._kOtListeners]=t,t}_getPatchMap(e){return e[this._kOtListeners]}};hs.AbstractAsyncHooksContextManager=Tu});var Y_=c(ps=>{"use strict";Object.defineProperty(ps,"__esModule",{value:!0});ps.AsyncLocalStorageContextManager=void 0;var NS=(h(),f(d)),wS=J("async_hooks"),xS=z_(),Su=class extends xS.AbstractAsyncHooksContextManager{constructor(){super(),this._asyncLocalStorage=new wS.AsyncLocalStorage}active(){var e;return(e=this._asyncLocalStorage.getStore())!==null&&e!==void 0?e:NS.ROOT_CONTEXT}with(e,t,n,...i){let s=n==null?t:t.bind(n);return this._asyncLocalStorage.run(e,s,...i)}enable(){return this}disable(){return this._asyncLocalStorage.disable(),this}};ps.AsyncLocalStorageContextManager=Su});var bu=c(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});De.toAnyValue=De.toKeyValue=De.toAttributes=void 0;function VS(r){return Object.keys(r).map(e=>Ou(e,r[e]))}De.toAttributes=VS;function Ou(r,e){return{key:r,value:Ru(e)}}De.toKeyValue=Ou;function Ru(r){let e=typeof r;return e==="string"?{stringValue:r}:e==="number"?Number.isInteger(r)?{intValue:r}:{doubleValue:r}:e==="boolean"?{boolValue:r}:r instanceof Uint8Array?{bytesValue:r}:Array.isArray(r)?{arrayValue:{values:r.map(Ru)}}:e==="object"&&r!=null?{kvlistValue:{values:Object.entries(r).map(([t,n])=>Ou(t,n))}}:{}}De.toAnyValue=Ru});var rh=c(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.toOtlpSpanEvent=Be.toOtlpLink=Be.sdkSpanToOtlpSpan=void 0;var Pu=bu();function jS(r,e){var t;let n=r.spanContext(),i=r.status;return{traceId:e.encodeSpanContext(n.traceId),spanId:e.encodeSpanContext(n.spanId),parentSpanId:e.encodeOptionalSpanContext(r.parentSpanId),traceState:(t=n.traceState)===null||t===void 0?void 0:t.serialize(),name:r.name,kind:r.kind==null?0:r.kind+1,startTimeUnixNano:e.encodeHrTime(r.startTime),endTimeUnixNano:e.encodeHrTime(r.endTime),attributes:(0,Pu.toAttributes)(r.attributes),droppedAttributesCount:r.droppedAttributesCount,events:r.events.map(s=>th(s,e)),droppedEventsCount:r.droppedEventsCount,status:{code:i.code,message:i.message},links:r.links.map(s=>eh(s,e)),droppedLinksCount:r.droppedLinksCount}}Be.sdkSpanToOtlpSpan=jS;function eh(r,e){var t;return{attributes:r.attributes?(0,Pu.toAttributes)(r.attributes):[],spanId:e.encodeSpanContext(r.context.spanId),traceId:e.encodeSpanContext(r.context.traceId),traceState:(t=r.context.traceState)===null||t===void 0?void 0:t.serialize(),droppedAttributesCount:r.droppedAttributesCount||0}}Be.toOtlpLink=eh;function th(r,e){return{attributes:r.attributes?(0,Pu.toAttributes)(r.attributes):[],name:r.name,timeUnixNano:e.encodeHrTime(r.time),droppedAttributesCount:r.droppedAttributesCount||0}}Be.toOtlpSpanEvent=th});var ah=c(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.getOtlpEncoder=oe.encodeAsString=oe.encodeAsLongBits=oe.toLongBits=oe.hrTimeToNanos=void 0;var ms=S(),FS=BigInt(1e9);function yu(r){return BigInt(r[0])*FS+BigInt(r[1])}oe.hrTimeToNanos=yu;function ih(r){let e=Number(BigInt.asUintN(32,r)),t=Number(BigInt.asUintN(32,r>>BigInt(32)));return{low:e,high:t}}oe.toLongBits=ih;function vu(r){let e=yu(r);return ih(e)}oe.encodeAsLongBits=vu;function sh(r){return yu(r).toString()}oe.encodeAsString=sh;var HS=typeof BigInt<"u"?sh:ms.hrTimeToNanoseconds;function nh(r){return r}function oh(r){if(r!==void 0)return(0,ms.hexToBase64)(r)}var kS={encodeHrTime:vu,encodeSpanContext:ms.hexToBase64,encodeOptionalSpanContext:oh};function XS(r){var e,t;if(r===void 0)return kS;let n=(e=r.useLongBits)!==null&&e!==void 0?e:!0,i=(t=r.useHex)!==null&&t!==void 0?t:!1;return{encodeHrTime:n?vu:HS,encodeSpanContext:i?nh:ms.hexToBase64,encodeOptionalSpanContext:i?nh:oh}}oe.getOtlpEncoder=XS});var Iu=c(gs=>{"use strict";Object.defineProperty(gs,"__esModule",{value:!0});gs.createExportTraceServiceRequest=void 0;var $S=bu(),WS=rh(),KS=ah();function zS(r,e){let t=(0,KS.getOtlpEncoder)(e);return{resourceSpans:QS(r,t)}}gs.createExportTraceServiceRequest=zS;function YS(r){let e=new Map;for(let t of r){let n=e.get(t.resource);n||(n=new Map,e.set(t.resource,n));let i=`${t.instrumentationLibrary.name}@${t.instrumentationLibrary.version||""}:${t.instrumentationLibrary.schemaUrl||""}`,s=n.get(i);s||(s=[],n.set(i,s)),s.push(t)}return e}function QS(r,e){let t=YS(r),n=[],i=t.entries(),s=i.next();for(;!s.done;){let[o,a]=s.value,u=[],l=a.values(),_=l.next();for(;!_.done;){let O=_.value;if(O.length>0){let{name:D,version:z,schemaUrl:I}=O[0].instrumentationLibrary,U=O.map(L=>(0,WS.sdkSpanToOtlpSpan)(L,e));u.push({scope:{name:D,version:z},spans:U,schemaUrl:I})}_=l.next()}let E={resource:{attributes:(0,$S.toAttributes)(o.attributes),droppedAttributesCount:0},scopeSpans:u,schemaUrl:void 0};n.push(E),s=i.next()}return n}});var lh=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.parseRetryAfterToMills=C.isExportRetryable=C.invalidTimeout=C.configureExporterTimeout=C.appendRootPathToUrlIfNeeded=C.appendResourcePathToUrl=C.parseHeaders=C.DEFAULT_EXPORT_BACKOFF_MULTIPLIER=C.DEFAULT_EXPORT_MAX_BACKOFF=C.DEFAULT_EXPORT_INITIAL_BACKOFF=C.DEFAULT_EXPORT_MAX_ATTEMPTS=void 0;var Lu=(h(),f(d)),uh=S(),ch=1e4;C.DEFAULT_EXPORT_MAX_ATTEMPTS=5;C.DEFAULT_EXPORT_INITIAL_BACKOFF=1e3;C.DEFAULT_EXPORT_MAX_BACKOFF=5e3;C.DEFAULT_EXPORT_BACKOFF_MULTIPLIER=1.5;function ZS(r={}){let e={};return Object.entries(r).forEach(([t,n])=>{typeof n<"u"?e[t]=String(n):Lu.diag.warn(`Header "${t}" has wrong value and will be ignored`)}),e}C.parseHeaders=ZS;function JS(r,e){return r.endsWith("/")||(r=r+"/"),r+e}C.appendResourcePathToUrl=JS;function eA(r){try{let e=new URL(r);return e.pathname===""&&(e.pathname=e.pathname+"/"),e.toString()}catch{return Lu.diag.warn(`Could not parse export URL: '${r}'`),r}}C.appendRootPathToUrlIfNeeded=eA;function tA(r){return typeof r=="number"?r<=0?Mu(r,ch):r:rA()}C.configureExporterTimeout=tA;function rA(){var r;let e=Number((r=(0,uh.getEnv)().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT)!==null&&r!==void 0?r:(0,uh.getEnv)().OTEL_EXPORTER_OTLP_TIMEOUT);return e<=0?Mu(e,ch):e}function Mu(r,e){return Lu.diag.warn("Timeout must be greater than 0",r),e}C.invalidTimeout=Mu;function nA(r){return[429,502,503,504].includes(r)}C.isExportRetryable=nA;function iA(r){if(r==null)return-1;let e=Number.parseInt(r,10);if(Number.isInteger(e))return e>0?e*1e3:-1;let t=new Date(r).getTime()-Date.now();return t>=0?t:0}C.parseRetryAfterToMills=iA});var _h=c(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.OTLPExporterBase=void 0;var dh=(h(),f(d)),xr=S(),sA=lh(),Cu=class{constructor(e={}){this._sendingPromises=[],this.url=this.getDefaultUrl(e),typeof e.hostname=="string"&&(this.hostname=e.hostname),this.shutdown=this.shutdown.bind(this),this._shutdownOnce=new xr.BindOnceFuture(this._shutdown,this),this._concurrencyLimit=typeof e.concurrencyLimit=="number"?e.concurrencyLimit:30,this.timeoutMillis=(0,sA.configureExporterTimeout)(e.timeoutMillis),this.onInit(e)}export(e,t){if(this._shutdownOnce.isCalled){t({code:xr.ExportResultCode.FAILED,error:new Error("Exporter has been shutdown")});return}if(this._sendingPromises.length>=this._concurrencyLimit){t({code:xr.ExportResultCode.FAILED,error:new Error("Concurrent export limit reached")});return}this._export(e).then(()=>{t({code:xr.ExportResultCode.SUCCESS})}).catch(n=>{t({code:xr.ExportResultCode.FAILED,error:n})})}_export(e){return new Promise((t,n)=>{try{dh.diag.debug("items to be sent",e),this.send(e,t,n)}catch(i){n(i)}})}shutdown(){return this._shutdownOnce.call()}forceFlush(){return Promise.all(this._sendingPromises).then(()=>{})}_shutdown(){return dh.diag.debug("shutdown started"),this.onShutdown(),this.forceFlush()}};Ts.OTLPExporterBase=Cu});var Eh=c((vP,fh)=>{"use strict";fh.exports=uA;function uA(r,e){for(var t=new Array(arguments.length-1),n=0,i=2,s=!0;i<arguments.length;)t[n++]=arguments[i++];return new Promise(function(a,u){t[n]=function(_){if(s)if(s=!1,_)u(_);else{for(var E=new Array(arguments.length-1),O=0;O<E.length;)E[O++]=arguments[O];a.apply(null,E)}};try{r.apply(e||null,t)}catch(l){s&&(s=!1,u(l))}})}});var Sh=c(Th=>{"use strict";var As=Th;As.length=function(e){var t=e.length;if(!t)return 0;for(var n=0;--t%4>1&&e.charAt(t)==="=";)++n;return Math.ceil(e.length*3)/4-n};var rr=new Array(64),gh=new Array(123);for(le=0;le<64;)gh[rr[le]=le<26?le+65:le<52?le+71:le<62?le-4:le-59|43]=le++;var le;As.encode=function(e,t,n){for(var i=null,s=[],o=0,a=0,u;t<n;){var l=e[t++];switch(a){case 0:s[o++]=rr[l>>2],u=(l&3)<<4,a=1;break;case 1:s[o++]=rr[u|l>>4],u=(l&15)<<2,a=2;break;case 2:s[o++]=rr[u|l>>6],s[o++]=rr[l&63],a=0;break}o>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,s)),o=0)}return a&&(s[o++]=rr[u],s[o++]=61,a===1&&(s[o++]=61)),i?(o&&i.push(String.fromCharCode.apply(String,s.slice(0,o))),i.join("")):String.fromCharCode.apply(String,s.slice(0,o))};var mh="invalid encoding";As.decode=function(e,t,n){for(var i=n,s=0,o,a=0;a<e.length;){var u=e.charCodeAt(a++);if(u===61&&s>1)break;if((u=gh[u])===void 0)throw Error(mh);switch(s){case 0:o=u,s=1;break;case 1:t[n++]=o<<2|(u&48)>>4,o=u,s=2;break;case 2:t[n++]=(o&15)<<4|(u&60)>>2,o=u,s=3;break;case 3:t[n++]=(o&3)<<6|u,s=0;break}}if(s===1)throw Error(mh);return n-i};As.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}});var Oh=c((LP,Ah)=>{"use strict";Ah.exports=Os;function Os(){this._listeners={}}Os.prototype.on=function(e,t,n){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:n||this}),this};Os.prototype.off=function(e,t){if(e===void 0)this._listeners={};else if(t===void 0)this._listeners[e]=[];else for(var n=this._listeners[e],i=0;i<n.length;)n[i].fn===t?n.splice(i,1):++i;return this};Os.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var n=[],i=1;i<arguments.length;)n.push(arguments[i++]);for(i=0;i<t.length;)t[i].fn.apply(t[i++].ctx,n)}return this}});var Lh=c((MP,Ih)=>{"use strict";Ih.exports=Rh(Rh);function Rh(r){return typeof Float32Array<"u"?function(){var e=new Float32Array([-0]),t=new Uint8Array(e.buffer),n=t[3]===128;function i(u,l,_){e[0]=u,l[_]=t[0],l[_+1]=t[1],l[_+2]=t[2],l[_+3]=t[3]}function s(u,l,_){e[0]=u,l[_]=t[3],l[_+1]=t[2],l[_+2]=t[1],l[_+3]=t[0]}r.writeFloatLE=n?i:s,r.writeFloatBE=n?s:i;function o(u,l){return t[0]=u[l],t[1]=u[l+1],t[2]=u[l+2],t[3]=u[l+3],e[0]}function a(u,l){return t[3]=u[l],t[2]=u[l+1],t[1]=u[l+2],t[0]=u[l+3],e[0]}r.readFloatLE=n?o:a,r.readFloatBE=n?a:o}():function(){function e(n,i,s,o){var a=i<0?1:0;if(a&&(i=-i),i===0)n(1/i>0?0:2147483648,s,o);else if(isNaN(i))n(2143289344,s,o);else if(i>34028234663852886e22)n((a<<31|2139095040)>>>0,s,o);else if(i<11754943508222875e-54)n((a<<31|Math.round(i/1401298464324817e-60))>>>0,s,o);else{var u=Math.floor(Math.log(i)/Math.LN2),l=Math.round(i*Math.pow(2,-u)*8388608)&8388607;n((a<<31|u+127<<23|l)>>>0,s,o)}}r.writeFloatLE=e.bind(null,bh),r.writeFloatBE=e.bind(null,Ph);function t(n,i,s){var o=n(i,s),a=(o>>31)*2+1,u=o>>>23&255,l=o&8388607;return u===255?l?NaN:a*(1/0):u===0?a*1401298464324817e-60*l:a*Math.pow(2,u-150)*(l+8388608)}r.readFloatLE=t.bind(null,yh),r.readFloatBE=t.bind(null,vh)}(),typeof Float64Array<"u"?function(){var e=new Float64Array([-0]),t=new Uint8Array(e.buffer),n=t[7]===128;function i(u,l,_){e[0]=u,l[_]=t[0],l[_+1]=t[1],l[_+2]=t[2],l[_+3]=t[3],l[_+4]=t[4],l[_+5]=t[5],l[_+6]=t[6],l[_+7]=t[7]}function s(u,l,_){e[0]=u,l[_]=t[7],l[_+1]=t[6],l[_+2]=t[5],l[_+3]=t[4],l[_+4]=t[3],l[_+5]=t[2],l[_+6]=t[1],l[_+7]=t[0]}r.writeDoubleLE=n?i:s,r.writeDoubleBE=n?s:i;function o(u,l){return t[0]=u[l],t[1]=u[l+1],t[2]=u[l+2],t[3]=u[l+3],t[4]=u[l+4],t[5]=u[l+5],t[6]=u[l+6],t[7]=u[l+7],e[0]}function a(u,l){return t[7]=u[l],t[6]=u[l+1],t[5]=u[l+2],t[4]=u[l+3],t[3]=u[l+4],t[2]=u[l+5],t[1]=u[l+6],t[0]=u[l+7],e[0]}r.readDoubleLE=n?o:a,r.readDoubleBE=n?a:o}():function(){function e(n,i,s,o,a,u){var l=o<0?1:0;if(l&&(o=-o),o===0)n(0,a,u+i),n(1/o>0?0:2147483648,a,u+s);else if(isNaN(o))n(0,a,u+i),n(2146959360,a,u+s);else if(o>17976931348623157e292)n(0,a,u+i),n((l<<31|2146435072)>>>0,a,u+s);else{var _;if(o<22250738585072014e-324)_=o/5e-324,n(_>>>0,a,u+i),n((l<<31|_/4294967296)>>>0,a,u+s);else{var E=Math.floor(Math.log(o)/Math.LN2);E===1024&&(E=1023),_=o*Math.pow(2,-E),n(_*4503599627370496>>>0,a,u+i),n((l<<31|E+1023<<20|_*1048576&1048575)>>>0,a,u+s)}}}r.writeDoubleLE=e.bind(null,bh,0,4),r.writeDoubleBE=e.bind(null,Ph,4,0);function t(n,i,s,o,a){var u=n(o,a+i),l=n(o,a+s),_=(l>>31)*2+1,E=l>>>20&2047,O=4294967296*(l&1048575)+u;return E===2047?O?NaN:_*(1/0):E===0?_*5e-324*O:_*Math.pow(2,E-1075)*(O+4503599627370496)}r.readDoubleLE=t.bind(null,yh,0,4),r.readDoubleBE=t.bind(null,vh,4,0)}(),r}function bh(r,e,t){e[t]=r&255,e[t+1]=r>>>8&255,e[t+2]=r>>>16&255,e[t+3]=r>>>24}function Ph(r,e,t){e[t]=r>>>24,e[t+1]=r>>>16&255,e[t+2]=r>>>8&255,e[t+3]=r&255}function yh(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0}function vh(r,e){return(r[e]<<24|r[e+1]<<16|r[e+2]<<8|r[e+3])>>>0}});var Mh=c((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(r){}return null}});var Nh=c(Ch=>{"use strict";var wu=Ch;wu.length=function(e){for(var t=0,n=0,i=0;i<e.length;++i)n=e.charCodeAt(i),n<128?t+=1:n<2048?t+=2:(n&64512)===55296&&(e.charCodeAt(i+1)&64512)===56320?(++i,t+=4):t+=3;return t};wu.read=function(e,t,n){var i=n-t;if(i<1)return"";for(var s=null,o=[],a=0,u;t<n;)u=e[t++],u<128?o[a++]=u:u>191&&u<224?o[a++]=(u&31)<<6|e[t++]&63:u>239&&u<365?(u=((u&7)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,o[a++]=55296+(u>>10),o[a++]=56320+(u&1023)):o[a++]=(u&15)<<12|(e[t++]&63)<<6|e[t++]&63,a>8191&&((s||(s=[])).push(String.fromCharCode.apply(String,o)),a=0);return s?(a&&s.push(String.fromCharCode.apply(String,o.slice(0,a))),s.join("")):String.fromCharCode.apply(String,o.slice(0,a))};wu.write=function(e,t,n){for(var i=n,s,o,a=0;a<e.length;++a)s=e.charCodeAt(a),s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&((o=e.charCodeAt(a+1))&64512)===56320?(s=65536+((s&1023)<<10)+(o&1023),++a,t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128);return n-i}});var xh=c((NP,wh)=>{"use strict";wh.exports=cA;function cA(r,e,t){var n=t||8192,i=n>>>1,s=null,o=n;return function(u){if(u<1||u>i)return r(u);o+u>n&&(s=r(n),o=0);var l=e.call(s,o,o+=u);return o&7&&(o=(o|7)+1),l}}});var Bh=c((wP,Dh)=>{"use strict";Dh.exports=V;var Dr=qe();function V(r,e){this.lo=r>>>0,this.hi=e>>>0}var ut=V.zero=new V(0,0);ut.toNumber=function(){return 0};ut.zzEncode=ut.zzDecode=function(){return this};ut.length=function(){return 1};var lA=V.zeroHash="\0\0\0\0\0\0\0\0";V.fromNumber=function(e){if(e===0)return ut;var t=e<0;t&&(e=-e);var n=e>>>0,i=(e-n)/4294967296>>>0;return t&&(i=~i>>>0,n=~n>>>0,++n>4294967295&&(n=0,++i>4294967295&&(i=0))),new V(n,i)};V.from=function(e){if(typeof e=="number")return V.fromNumber(e);if(Dr.isString(e))if(Dr.Long)e=Dr.Long.fromString(e);else return V.fromNumber(parseInt(e,10));return e.low||e.high?new V(e.low>>>0,e.high>>>0):ut};V.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=~this.lo+1>>>0,n=~this.hi>>>0;return t||(n=n+1>>>0),-(t+n*4294967296)}return this.lo+this.hi*4294967296};V.prototype.toLong=function(e){return Dr.Long?new Dr.Long(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var Ue=String.prototype.charCodeAt;V.fromHash=function(e){return e===lA?ut:new V((Ue.call(e,0)|Ue.call(e,1)<<8|Ue.call(e,2)<<16|Ue.call(e,3)<<24)>>>0,(Ue.call(e,4)|Ue.call(e,5)<<8|Ue.call(e,6)<<16|Ue.call(e,7)<<24)>>>0)};V.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};V.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};V.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};V.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return n===0?t===0?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:n<128?9:10}});var qe=c(xu=>{"use strict";var p=xu;p.asPromise=Eh();p.base64=Sh();p.EventEmitter=Oh();p.float=Lh();p.inquire=Mh();p.utf8=Nh();p.pool=xh();p.LongBits=Bh();p.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node);p.global=p.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||xu;p.emptyArray=Object.freeze?Object.freeze([]):[];p.emptyObject=Object.freeze?Object.freeze({}):{};p.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};p.isString=function(e){return typeof e=="string"||e instanceof String};p.isObject=function(e){return e&&typeof e=="object"};p.isset=p.isSet=function(e,t){var n=e[t];return n!=null&&e.hasOwnProperty(t)?typeof n!="object"||(Array.isArray(n)?n.length:Object.keys(n).length)>0:!1};p.Buffer=function(){try{var r=p.inquire("buffer").Buffer;return r.prototype.utf8Write?r:null}catch{return null}}();p._Buffer_from=null;p._Buffer_allocUnsafe=null;p.newBuffer=function(e){return typeof e=="number"?p.Buffer?p._Buffer_allocUnsafe(e):new p.Array(e):p.Buffer?p._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)};p.Array=typeof Uint8Array<"u"?Uint8Array:Array;p.Long=p.global.dcodeIO&&p.global.dcodeIO.Long||p.global.Long||p.inquire("long");p.key2Re=/^true|false|0|1$/;p.key32Re=/^-?(?:0|[1-9][0-9]*)$/;p.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;p.longToHash=function(e){return e?p.LongBits.from(e).toHash():p.LongBits.zeroHash};p.longFromHash=function(e,t){var n=p.LongBits.fromHash(e);return p.Long?p.Long.fromBits(n.lo,n.hi,t):n.toNumber(!!t)};function Uh(r,e,t){for(var n=Object.keys(e),i=0;i<n.length;++i)(r[n[i]]===void 0||!t)&&(r[n[i]]=e[n[i]]);return r}p.merge=Uh;p.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function qh(r){function e(t,n){if(!(this instanceof e))return new e(t,n);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),n&&Uh(this,n)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return r},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}p.newError=qh;p.ProtocolError=qh("ProtocolError");p.oneOfGetter=function(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=1;return function(){for(var i=Object.keys(this),s=i.length-1;s>-1;--s)if(t[i[s]]===1&&this[i[s]]!==void 0&&this[i[s]]!==null)return i[s]}};p.oneOfSetter=function(e){return function(t){for(var n=0;n<e.length;++n)e[n]!==t&&delete this[e[n]]}};p.toJSONOptions={longs:String,enums:String,bytes:String,json:!0};p._configure=function(){var r=p.Buffer;if(!r){p._Buffer_from=p._Buffer_allocUnsafe=null;return}p._Buffer_from=r.from!==Uint8Array.from&&r.from||function(t,n){return new r(t,n)},p._Buffer_allocUnsafe=r.allocUnsafe||function(t){return new r(t)}}});var ju=c((DP,Fh)=>{"use strict";Fh.exports=A;var ae=qe(),Du,Rs=ae.LongBits,Gh=ae.base64,Vh=ae.utf8;function Br(r,e,t){this.fn=r,this.len=e,this.next=void 0,this.val=t}function Uu(){}function dA(r){this.head=r.head,this.tail=r.tail,this.len=r.len,this.next=r.states}function A(){this.len=0,this.head=new Br(Uu,0,0),this.tail=this.head,this.states=null}var jh=function(){return ae.Buffer?function(){return(A.create=function(){return new Du})()}:function(){return new A}};A.create=jh();A.alloc=function(e){return new ae.Array(e)};ae.Array!==Array&&(A.alloc=ae.pool(A.alloc,ae.Array.prototype.subarray));A.prototype._push=function(e,t,n){return this.tail=this.tail.next=new Br(e,t,n),this.len+=t,this};function qu(r,e,t){e[t]=r&255}function _A(r,e,t){for(;r>127;)e[t++]=r&127|128,r>>>=7;e[t]=r}function Gu(r,e){this.len=r,this.next=void 0,this.val=e}Gu.prototype=Object.create(Br.prototype);Gu.prototype.fn=_A;A.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new Gu((e=e>>>0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this};A.prototype.int32=function(e){return e<0?this._push(Vu,10,Rs.fromNumber(e)):this.uint32(e)};A.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function Vu(r,e,t){for(;r.hi;)e[t++]=r.lo&127|128,r.lo=(r.lo>>>7|r.hi<<25)>>>0,r.hi>>>=7;for(;r.lo>127;)e[t++]=r.lo&127|128,r.lo=r.lo>>>7;e[t++]=r.lo}A.prototype.uint64=function(e){var t=Rs.from(e);return this._push(Vu,t.length(),t)};A.prototype.int64=A.prototype.uint64;A.prototype.sint64=function(e){var t=Rs.from(e).zzEncode();return this._push(Vu,t.length(),t)};A.prototype.bool=function(e){return this._push(qu,1,e?1:0)};function Bu(r,e,t){e[t]=r&255,e[t+1]=r>>>8&255,e[t+2]=r>>>16&255,e[t+3]=r>>>24}A.prototype.fixed32=function(e){return this._push(Bu,4,e>>>0)};A.prototype.sfixed32=A.prototype.fixed32;A.prototype.fixed64=function(e){var t=Rs.from(e);return this._push(Bu,4,t.lo)._push(Bu,4,t.hi)};A.prototype.sfixed64=A.prototype.fixed64;A.prototype.float=function(e){return this._push(ae.float.writeFloatLE,4,e)};A.prototype.double=function(e){return this._push(ae.float.writeDoubleLE,8,e)};var hA=ae.Array.prototype.set?function(e,t,n){t.set(e,n)}:function(e,t,n){for(var i=0;i<e.length;++i)t[n+i]=e[i]};A.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(qu,1,0);if(ae.isString(e)){var n=A.alloc(t=Gh.length(e));Gh.decode(e,n,0),e=n}return this.uint32(t)._push(hA,t,e)};A.prototype.string=function(e){var t=Vh.length(e);return t?this.uint32(t)._push(Vh.write,t,e):this._push(qu,1,0)};A.prototype.fork=function(){return this.states=new dA(this),this.head=this.tail=new Br(Uu,0,0),this.len=0,this};A.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new Br(Uu,0,0),this.len=0),this};A.prototype.ldelim=function(){var e=this.head,t=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=e.next,this.tail=t,this.len+=n),this};A.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),n=0;e;)e.fn(e.val,t,n),n+=e.len,e=e.next;return t};A._configure=function(r){Du=r,A.create=jh(),Du._configure()}});var Xh=c((BP,kh)=>{"use strict";kh.exports=ge;var Hh=ju();(ge.prototype=Object.create(Hh.prototype)).constructor=ge;var Ge=qe();function ge(){Hh.call(this)}ge._configure=function(){ge.alloc=Ge._Buffer_allocUnsafe,ge.writeBytesBuffer=Ge.Buffer&&Ge.Buffer.prototype instanceof Uint8Array&&Ge.Buffer.prototype.set.name==="set"?function(e,t,n){t.set(e,n)}:function(e,t,n){if(e.copy)e.copy(t,n,0,e.length);else for(var i=0;i<e.length;)t[n++]=e[i++]}};ge.prototype.bytes=function(e){Ge.isString(e)&&(e=Ge._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(ge.writeBytesBuffer,t,e),this};function pA(r,e,t){r.length<40?Ge.utf8.write(r,e,t):e.utf8Write?e.utf8Write(r,t):e.write(r,t)}ge.prototype.string=function(e){var t=Ge.Buffer.byteLength(e);return this.uint32(t),t&&this._push(pA,t,e),this};ge._configure()});var ku=c((UP,Yh)=>{"use strict";Yh.exports=w;var de=qe(),Hu,Kh=de.LongBits,fA=de.utf8;function _e(r,e){return RangeError("index out of range: "+r.pos+" + "+(e||1)+" > "+r.len)}function w(r){this.buf=r,this.pos=0,this.len=r.length}var $h=typeof Uint8Array<"u"?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new w(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new w(e);throw Error("illegal buffer")},zh=function(){return de.Buffer?function(t){return(w.create=function(i){return de.Buffer.isBuffer(i)?new Hu(i):$h(i)})(t)}:$h};w.create=zh();w.prototype._slice=de.Array.prototype.subarray||de.Array.prototype.slice;w.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,_e(this,10);return e}}();w.prototype.int32=function(){return this.uint32()|0};w.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function Fu(){var r=new Kh(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(r.lo=(r.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return r;if(r.lo=(r.lo|(this.buf[this.pos]&127)<<28)>>>0,r.hi=(r.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return r;e=0}else{for(;e<3;++e){if(this.pos>=this.len)throw _e(this);if(r.lo=(r.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return r}return r.lo=(r.lo|(this.buf[this.pos++]&127)<<e*7)>>>0,r}if(this.len-this.pos>4){for(;e<5;++e)if(r.hi=(r.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return r}else for(;e<5;++e){if(this.pos>=this.len)throw _e(this);if(r.hi=(r.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return r}throw Error("invalid varint encoding")}w.prototype.bool=function(){return this.uint32()!==0};function bs(r,e){return(r[e-4]|r[e-3]<<8|r[e-2]<<16|r[e-1]<<24)>>>0}w.prototype.fixed32=function(){if(this.pos+4>this.len)throw _e(this,4);return bs(this.buf,this.pos+=4)};w.prototype.sfixed32=function(){if(this.pos+4>this.len)throw _e(this,4);return bs(this.buf,this.pos+=4)|0};function Wh(){if(this.pos+8>this.len)throw _e(this,8);return new Kh(bs(this.buf,this.pos+=4),bs(this.buf,this.pos+=4))}w.prototype.float=function(){if(this.pos+4>this.len)throw _e(this,4);var e=de.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};w.prototype.double=function(){if(this.pos+8>this.len)throw _e(this,4);var e=de.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};w.prototype.bytes=function(){var e=this.uint32(),t=this.pos,n=this.pos+e;if(n>this.len)throw _e(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(t,n);if(t===n){var i=de.Buffer;return i?i.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,t,n)};w.prototype.string=function(){var e=this.bytes();return fA.read(e,0,e.length)};w.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw _e(this,e);this.pos+=e}else do if(this.pos>=this.len)throw _e(this);while(this.buf[this.pos++]&128);return this};w.prototype.skipType=function(r){switch(r){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(r=this.uint32()&7)!==4;)this.skipType(r);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+r+" at offset "+this.pos)}return this};w._configure=function(r){Hu=r,w.create=zh(),Hu._configure();var e=de.Long?"toLong":"toNumber";de.merge(w.prototype,{int64:function(){return Fu.call(this)[e](!1)},uint64:function(){return Fu.call(this)[e](!0)},sint64:function(){return Fu.call(this).zzDecode()[e](!1)},fixed64:function(){return Wh.call(this)[e](!0)},sfixed64:function(){return Wh.call(this)[e](!1)}})}});var ep=c((qP,Jh)=>{"use strict";Jh.exports=ct;var Zh=ku();(ct.prototype=Object.create(Zh.prototype)).constructor=ct;var Qh=qe();function ct(r){Zh.call(this,r)}ct._configure=function(){Qh.Buffer&&(ct.prototype._slice=Qh.Buffer.prototype.slice)};ct.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))};ct._configure()});var rp=c((GP,tp)=>{"use strict";tp.exports=Ur;var Xu=qe();(Ur.prototype=Object.create(Xu.EventEmitter.prototype)).constructor=Ur;function Ur(r,e,t){if(typeof r!="function")throw TypeError("rpcImpl must be a function");Xu.EventEmitter.call(this),this.rpcImpl=r,this.requestDelimited=!!e,this.responseDelimited=!!t}Ur.prototype.rpcCall=function r(e,t,n,i,s){if(!i)throw TypeError("request must be specified");var o=this;if(!s)return Xu.asPromise(r,o,e,t,n,i);if(!o.rpcImpl){setTimeout(function(){s(Error("already ended"))},0);return}try{return o.rpcImpl(e,t[o.requestDelimited?"encodeDelimited":"encode"](i).finish(),function(u,l){if(u)return o.emit("error",u,e),s(u);if(l===null){o.end(!0);return}if(!(l instanceof n))try{l=n[o.responseDelimited?"decodeDelimited":"decode"](l)}catch(_){return o.emit("error",_,e),s(_)}return o.emit("data",l,e),s(null,l)})}catch(a){o.emit("error",a,e),setTimeout(function(){s(a)},0);return}};Ur.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var ip=c(np=>{"use strict";var EA=np;EA.Service=rp()});var op=c((jP,sp)=>{"use strict";sp.exports={}});var cp=c(up=>{"use strict";var Z=up;Z.build="minimal";Z.Writer=ju();Z.BufferWriter=Xh();Z.Reader=ku();Z.BufferReader=ep();Z.util=qe();Z.rpc=ip();Z.roots=op();Z.configure=ap;function ap(){Z.util._configure(),Z.Writer._configure(Z.BufferWriter),Z.Reader._configure(Z.BufferReader)}ap()});var dp=c((HP,lp)=>{"use strict";lp.exports=cp()});var N=H(Yo(),1);h();ta();var Ap=H(yd(),1),or=H(tt(),1),Op=H(Fd(),1),Rp=H(K_(),1),Yu=H(ie(),1),ar=H(kr(),1),bp=H(Y_(),1),Ve=H(S(),1);h();var DS=Symbol.for("@vercel/request-context");function Jt(){return globalThis[DS]?.get()}var Au=H(ie(),1);function fs(r){return Object.fromEntries(Object.entries(r).filter(([e,t])=>t!==void 0))}function Q_(r){return r?r.split("::").at(-1):void 0}function Z_(r=Jt(),e){if(!r)return;let t=e?US(e,r.headers):void 0;return fs({[Au.SemanticAttributes.HTTP_HOST]:r.headers.host,[Au.SemanticAttributes.HTTP_USER_AGENT]:r.headers["user-agent"],"http.referer":r.headers.referer,"vercel.request_id":Q_(r.headers["x-vercel-id"]),"vercel.matched_path":r.headers["x-matched-path"],"vercel.edge_region":r.headers["x-vercel-edge-region"],...t})}var BS={keys(r){return[]},get(r,e){return r[e.toLocaleLowerCase()]}};function US(r,e){if(typeof r=="function")return r(e,BS);let t={};for(let[n,i]of Object.entries(r)){let s=e[i.toLocaleLowerCase()];s!==void 0&&(t[n]=s)}return t}h();function wr(r){return(r&d.TraceFlags.SAMPLED)!==0}var Es=class{constructor(e,t){this.processors=e;this.attributesFromHeaders=t;this.rootSpanIds=new Map;this.waitSpanEnd=new Map}forceFlush(){return Promise.all(this.processors.map(e=>e.forceFlush().catch(t=>{d.diag.error("@vercel/otel: forceFlush failed:",t)}))).then(()=>{})}shutdown(){return Promise.all(this.processors.map(e=>e.shutdown().catch(()=>{}))).then(()=>{})}onStart(e,t){let{traceId:n,spanId:i,traceFlags:s}=e.spanContext(),o=!e.parentSpanId||!this.rootSpanIds.has(n);if(o?this.rootSpanIds.set(n,{rootSpanId:i,open:[]}):this.rootSpanIds.get(n)?.open.push(e),o&&wr(s)){let a=Jt(),u=Z_(a,this.attributesFromHeaders);u&&e.setAttributes(u),a&&a.waitUntil(async()=>{if(this.rootSpanIds.has(n)){let l=new Promise(E=>{this.waitSpanEnd.set(n,E)}),_;await Promise.race([l,new Promise(E=>{_=setTimeout(()=>{this.waitSpanEnd.delete(n),E(void 0)},50)})]),_&&clearTimeout(_)}return this.forceFlush()})}for(let a of this.processors)a.onStart(e,t)}onEnd(e){let{traceId:t,spanId:n,traceFlags:i}=e.spanContext(),s=wr(i),o=this.rootSpanIds.get(t),a=o?.rootSpanId===n;if(s){let u=GS(e);u&&Object.assign(e.attributes,u)}if(a){if(this.rootSpanIds.delete(t),o.open.length>0){for(let u of o.open)if(!u.ended&&u.spanContext().spanId!==n)try{u.end()}catch(l){d.diag.error("@vercel/otel: onEnd failed:",l)}}}else if(o)for(let u=0;u<o.open.length;u++)o.open[u]?.spanContext().spanId===n&&o.open.splice(u,1);for(let u of this.processors)u.onEnd(e);if(a){let u=this.waitSpanEnd.get(t);u&&(this.waitSpanEnd.delete(t),u())}}},qS={[d.SpanKind.INTERNAL]:"internal",[d.SpanKind.SERVER]:"server",[d.SpanKind.CLIENT]:"client",[d.SpanKind.PRODUCER]:"producer",[d.SpanKind.CONSUMER]:"consumer"};function GS(r){let{kind:e,attributes:t}=r,{"operation.name":n,"resource.name":i,"span.type":s,"next.span_type":o,"http.method":a,"http.route":u}=t;if(n)return;let l=i??(a&&typeof a=="string"&&u&&typeof u=="string"?`${a} ${u}`:u);if(r.kind===d.SpanKind.SERVER&&a&&u&&typeof a=="string"&&typeof u=="string")return{"operation.name":"web.request","resource.name":l};let _=r.instrumentationLibrary.name,E=o??s;if(E&&typeof E=="string"){let O=J_(_,E);return u?{"operation.name":O,"resource.name":l}:{"operation.name":O}}return{"operation.name":J_(_,e===d.SpanKind.INTERNAL?"":qS[e])}}function J_(r,e){if(!r)return e;let t=r.replace(/[ @./]/g,"_");return t.startsWith("_")&&(t=t.slice(1)),e?`${t}.${e}`:t}var ph=H(Iu(),1);var hh=H(_h(),1);h();var er=class extends hh.OTLPExporterBase{constructor(e={}){super(e),e.headers&&(this._headers=e.headers)}onShutdown(){d.diag.debug("@vercel/otel/otlp: onShutdown")}onInit(){d.diag.debug("@vercel/otel/otlp: onInit")}send(e,t,n){if(this._shutdownOnce.isCalled){d.diag.debug("@vercel/otel/otlp: Shutdown already started. Cannot send objects");return}let i=this.convert(e),s,o,a;try{({body:s,contentType:o,headers:a}=this.toMessage(i))}catch(l){d.diag.warn("@vercel/otel/otlp: no proto",l);return}let u=fetch(this.url,{method:"POST",body:s,headers:{...this._headers,...a,"Content-Type":o,"User-Agent":"OTel-OTLP-Exporter-JavaScript/0.46.0"},next:{internal:!0}}).then(l=>{d.diag.debug("@vercel/otel/otlp: onSuccess",l.status,l.statusText),t(),l.arrayBuffer().catch(()=>{})}).catch(l=>{d.diag.error("@vercel/otel/otlp: onError",l),n(l)}).finally(()=>{let l=this._sendingPromises.indexOf(u);this._sendingPromises.splice(l,1)});this._sendingPromises.push(u)}getDefaultUrl(e){throw new Error("Method not implemented.")}};var oA="v1/traces",aA=`http://localhost:4318/${oA}`;function Ss(r){return typeof r.url=="string"?r.url:aA}var tr=class{constructor(e={}){this.impl=new Nu(e)}export(e,t){this.impl.export(e,t)}shutdown(){return this.impl.shutdown()}forceFlush(){return this.impl.forceFlush()}},Nu=class extends er{convert(e){return(0,ph.createExportTraceServiceRequest)(e,{useHex:!0,useLongBits:!1})}toMessage(e){return{body:JSON.stringify(e),contentType:"application/json"}}getDefaultUrl(e){return Ss(e)}};var fp=H(Iu(),1);var _p=H(dp(),1);function hp(r){let e=new _p.Writer;return mA(r,e),e.finish()}function mA(r,e){if(r.resourceSpans!=null&&r.resourceSpans.length)for(let t=0;t<r.resourceSpans.length;++t)gA(r.resourceSpans[t],e.uint32(10).fork()).ldelim();return e}function gA(r,e){if(r.resource!=null&&TA(r.resource,e.uint32(10).fork()).ldelim(),r.scopeSpans!=null&&r.scopeSpans.length)for(let t=0;t<r.scopeSpans.length;++t)SA(r.scopeSpans[t],e.uint32(18).fork()).ldelim();return r.schemaUrl!=null&&e.uint32(26).string(r.schemaUrl),e}function TA(r,e){if(r.attributes!=null&&r.attributes.length)for(let t=0;t<r.attributes.length;++t)nr(r.attributes[t],e.uint32(10).fork()).ldelim();return r.droppedAttributesCount!=null&&e.uint32(16).uint32(r.droppedAttributesCount),e}function SA(r,e){if(r.scope!=null&&RA(r.scope,e.uint32(10).fork()).ldelim(),r.spans!=null&&r.spans.length)for(let t=0;t<r.spans.length;++t)bA(r.spans[t],e.uint32(18).fork()).ldelim();return r.schemaUrl!=null&&e.uint32(26).string(r.schemaUrl),e}function nr(r,e){return r.key!=null&&e.uint32(10).string(r.key),r.value!=null&&pp(r.value,e.uint32(18).fork()).ldelim(),e}function pp(r,e){return r.stringValue!=null&&e.uint32(10).string(r.stringValue),r.boolValue!=null&&e.uint32(16).bool(r.boolValue),r.intValue!=null&&e.uint32(24).int64(r.intValue),r.doubleValue!=null&&e.uint32(33).double(r.doubleValue),r.arrayValue!=null&&AA(r.arrayValue,e.uint32(42).fork()).ldelim(),r.kvlistValue!=null&&OA(r.kvlistValue,e.uint32(50).fork()).ldelim(),r.bytesValue!=null&&e.uint32(58).bytes(r.bytesValue),e}function AA(r,e){if(r.values!=null&&r.values.length)for(let t=0;t<r.values.length;++t)pp(r.values[t],e.uint32(10).fork()).ldelim();return e}function OA(r,e){if(r.values!=null&&r.values.length)for(let t=0;t<r.values.length;++t)nr(r.values[t],e.uint32(10).fork()).ldelim();return e}function RA(r,e){if(r.name!=null&&e.uint32(10).string(r.name),r.version!=null&&e.uint32(18).string(r.version),r.attributes!=null&&r.attributes.length)for(let t=0;t<r.attributes.length;++t)nr(r.attributes[t],e.uint32(26).fork()).ldelim();return r.droppedAttributesCount!=null&&e.uint32(32).uint32(r.droppedAttributesCount),e}function bA(r,e){if(r.traceId!=null&&e.uint32(10).bytes(r.traceId),r.spanId!=null&&e.uint32(18).bytes(r.spanId),r.traceState!=null&&e.uint32(26).string(r.traceState),r.parentSpanId!=null&&e.uint32(34).bytes(r.parentSpanId),r.name!=null&&e.uint32(42).string(r.name),r.kind!=null&&e.uint32(48).int32(r.kind),r.startTimeUnixNano!=null&&e.uint32(57).fixed64(r.startTimeUnixNano),r.endTimeUnixNano!=null&&e.uint32(65).fixed64(r.endTimeUnixNano),r.attributes!=null&&r.attributes.length)for(let t=0;t<r.attributes.length;++t)nr(r.attributes[t],e.uint32(74).fork()).ldelim();if(r.droppedAttributesCount!=null&&e.uint32(80).uint32(r.droppedAttributesCount),r.events!=null&&r.events.length)for(let t=0;t<r.events.length;++t)yA(r.events[t],e.uint32(90).fork()).ldelim();if(r.droppedEventsCount!=null&&e.uint32(96).uint32(r.droppedEventsCount),r.links!=null&&r.links.length)for(let t=0;t<r.links.length;++t)vA(r.links[t],e.uint32(106).fork()).ldelim();return r.droppedLinksCount!=null&&e.uint32(112).uint32(r.droppedLinksCount),r.status!=null&&PA(r.status,e.uint32(122).fork()).ldelim(),e}function PA(r,e){return r.message!=null&&e.uint32(18).string(r.message),r.code!=null&&e.uint32(24).int32(r.code),e}function yA(r,e){if(r.timeUnixNano!=null&&e.uint32(9).fixed64(r.timeUnixNano),r.name!=null&&e.uint32(18).string(r.name),r.attributes!=null&&r.attributes.length)for(let t=0;t<r.attributes.length;++t)nr(r.attributes[t],e.uint32(26).fork()).ldelim();return r.droppedAttributesCount!=null&&e.uint32(32).uint32(r.droppedAttributesCount),e}function vA(r,e){if(r.traceId!=null&&e.uint32(10).bytes(r.traceId),r.spanId!=null&&e.uint32(18).bytes(r.spanId),r.traceState!=null&&e.uint32(26).string(r.traceState),r.attributes!=null&&r.attributes.length)for(let t=0;t<r.attributes.length;++t)nr(r.attributes[t],e.uint32(34).fork()).ldelim();return r.droppedAttributesCount!=null&&e.uint32(40).uint32(r.droppedAttributesCount),e}var lt=class{constructor(e={}){this.impl=new $u(e)}export(e,t){this.impl.export(e,t)}shutdown(){return this.impl.shutdown()}forceFlush(){return this.impl.forceFlush()}},$u=class extends er{convert(e){return(0,fp.createExportTraceServiceRequest)(e,void 0)}toMessage(e){return{body:hp(e),contentType:"application/x-protobuf",headers:{accept:"application/x-protobuf"}}}getDefaultUrl(e){return Ss(e)}};h();var Re=H(ie(),1);function Ep(r,e){return r.replace(/\{(?<temp1>[^{}]+)\}/g,(t,n)=>{let i=e[n];return i!==void 0?String(i):t})}var ir=class{constructor(e={}){this.instrumentationName="@vercel/otel/fetch";this.instrumentationVersion="1.0.0";this.config=e}getConfig(){return this.config}setConfig(){}setTracerProvider(e){this.tracerProvider=e}setMeterProvider(){}enable(){this.disable();let{tracerProvider:e}=this;if(!e)return;let t=e.getTracer(this.instrumentationName,this.instrumentationVersion),n=this.config.ignoreUrls??[],i=(I,U)=>{if(U?.opentelemetry?.ignore!==void 0)return U.opentelemetry.ignore;if(n.length===0)return!1;let L=I.toString();return n.some(m=>typeof m=="string"?m==="*"?!0:L.startsWith(m):m.test(L))},s=process.env.VERCEL_URL||process.env.NEXT_PUBLIC_VERCEL_URL||null,o=process.env.VERCEL_BRANCH_URL||process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL||null,a=this.config.propagateContextUrls??[],u=this.config.dontPropagateContextUrls??[],l=this.config.resourceNameTemplate,{attributesFromRequestHeaders:_,attributesFromResponseHeaders:E}=this.config,O=(I,U)=>{if(U?.opentelemetry?.propagateContext)return U.opentelemetry.propagateContext;let L=I.toString();return u.length>0&&u.some(m=>typeof m=="string"?m==="*"?!0:L.startsWith(m):m.test(L))?!1:s&&I.protocol==="https:"&&(I.host===s||I.host===o||I.host===Jt()?.headers.host)||!s&&I.protocol==="http:"&&I.hostname==="localhost"?!0:a.some(m=>typeof m=="string"?m==="*"?!0:L.startsWith(m):m.test(L))};process.env.NEXT_OTEL_FETCH_DISABLED="1";let D=globalThis.fetch;this.originalFetch=D;let z=async(I,U)=>{let L=U;if(L?.next?.internal)return D(I,L);let m=new Request(I instanceof Request?I.clone():I,L),be=new URL(m.url);if(i(be,L))return D(I,L);let ys={[Re.SemanticAttributes.HTTP_METHOD]:m.method,[Re.SemanticAttributes.HTTP_URL]:m.url,[Re.SemanticAttributes.HTTP_HOST]:be.host,[Re.SemanticAttributes.HTTP_SCHEME]:be.protocol.replace(":",""),[Re.SemanticAttributes.NET_PEER_NAME]:be.hostname,[Re.SemanticAttributes.NET_PEER_PORT]:be.port},dt=l?Ep(l,ys):LA(m.url),yp=L?.opentelemetry?.spanName??`fetch ${m.method} ${m.url}`,Qu=d.context.active(),q=t.startSpan(yp,{kind:d.SpanKind.CLIENT,attributes:{...ys,"operation.name":`fetch.${m.method}`,"resource.name":dt,...L?.opentelemetry?.attributes}},Qu);if(!q.isRecording()||!wr(q.spanContext().traceFlags))return q.end(),D(I,L);if(O(be,L)){let _t=d.trace.setSpan(Qu,q);d.propagation.inject(_t,m.headers,IA)}_&&mp(q,_,m.headers);try{let _t=Date.now(),Pe=await D(I,{...L,headers:m.headers}),vp=Date.now()-_t;return q.setAttribute(Re.SemanticAttributes.HTTP_STATUS_CODE,Pe.status),q.setAttribute("http.response_time",vp),E&&mp(q,E,Pe.headers),Pe.status>=500&&Wu(q,`Status: ${Pe.status} (${Pe.statusText})`),Pe.body?MA(Pe).then(vs=>{q.isRecording()&&(q.setAttribute(Re.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,vs),q.end())},vs=>{q.isRecording()&&(Wu(q,vs),q.end())}):q.end(),Pe}catch(_t){throw Wu(q,_t),q.end(),_t}};globalThis.fetch=z}disable(){this.originalFetch&&(globalThis.fetch=this.originalFetch)}},IA={set(r,e,t){r.set(e,t)}};function LA(r){let e=r.indexOf("?");return e===-1?r:r.substring(0,e)}function MA(r){let e=0,n=r.clone().body?.getReader();if(!n)return Promise.resolve(0);let i=()=>n.read().then(({done:s,value:o})=>{if(!s)return e+=o.byteLength,i()});return i().then(()=>e)}function Wu(r,e){if(e instanceof Error)r.recordException(e),r.setStatus({code:d.SpanStatusCode.ERROR,message:e.message});else{let t=String(e);r.setStatus({code:d.SpanStatusCode.ERROR,message:t})}}function mp(r,e,t){for(let[n,i]of Object.entries(e)){let s=t.get(i);s!==null&&r.setAttribute(n,s)}}h();var gp=H(S(),1),CA="00",Ku="traceparent",zu="tracestate",qr=class{fields(){return[Ku,zu]}inject(e,t,n){let i=d.trace.getSpanContext(e);if(!i||(0,gp.isTracingSuppressed)(e)||!(0,d.isSpanContextValid)(i))return;let s=`${CA}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||0).toString(16)}`;n.set(t,Ku,s),i.traceState&&n.set(t,zu,i.traceState.serialize())}extract(e,t,n){let i=n.get(t,Ku);if(!i)return e;let s=Array.isArray(i)?i[0]:i;if(typeof s!="string")return e;let o=NA(s);if(!o)return e;o.isRemote=!0;let a=n.get(t,zu);if(a){let u=Array.isArray(a)?a.join(","):a;o.traceState=(0,d.createTraceState)(typeof u=="string"?u:void 0)}return d.trace.setSpanContext(e,o)}};function NA(r){let[e,t,n,i,s]=r.split("-");return!e||!t||!n||!i||e.length!==2||t.length!==32||n.length!==16||i.length!==2||e==="00"&&s?null:{traceId:t,spanId:n,traceFlags:parseInt(i,16)}}var Ps=class{constructor(e={}){this.configuration=e}start(){let e=wA(),t=(0,ar.getEnvWithoutDefaults)(),n=this.configuration,i="nodejs"||0,s=!!e.OTEL_SDK_DISABLED;if(t.OTEL_LOG_LEVEL&&d.diag.setLogger(new d.DiagConsoleLogger,{logLevel:t.OTEL_LOG_LEVEL}),s)return;let o=n.idGenerator??new N.RandomIdGenerator,a=n.contextManager??new bp.AsyncLocalStorageContextManager;a.enable(),this.contextManager=a;let u=e.OTEL_SERVICE_NAME||n.serviceName||"app",l=new or.Resource(fs({[Yu.SemanticResourceAttributes.SERVICE_NAME]:u,"node.ci":process.env.CI?!0:void 0,"node.env":"production",env:process.env.VERCEL_ENV||process.env.NEXT_PUBLIC_VERCEL_ENV,"vercel.region":process.env.VERCEL_REGION,"vercel.runtime":i,"vercel.sha":process.env.VERCEL_GIT_COMMIT_SHA||process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,"vercel.host":process.env.VERCEL_URL||process.env.NEXT_PUBLIC_VERCEL_URL||void 0,"vercel.branch_host":process.env.VERCEL_BRANCH_URL||process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL||void 0,"vercel.deployment_id":process.env.VERCEL_DEPLOYMENT_ID||void 0,[Yu.SemanticResourceAttributes.SERVICE_VERSION]:process.env.VERCEL_DEPLOYMENT_ID,...n.attributes})),_=n.resourceDetectors??[or.envDetectorSync];if(n.autoDetectResources??!0){let m={detectors:_};l=l.merge((0,or.detectResourcesSync)(m))}let O=DA(n.propagators,e),D=BA(n.traceSampler,e),z=UA(n.spanProcessors,n,e);z.length===0&&d.diag.warn("@vercel/otel: No span processors configured. No spans will be exported.");let I=n.spanLimits,U=new N.BasicTracerProvider({resource:l,idGenerator:o,sampler:D,spanLimits:I});if(U.addSpanProcessor(new Es(z,n.attributesFromHeaders)),U.register({contextManager:a,propagator:new Ve.CompositePropagator({propagators:O})}),this.tracerProvider=U,n.logRecordProcessor){let m=new Op.LoggerProvider({resource:l});this.loggerProvider=m,m.addLogRecordProcessor(n.logRecordProcessor),it.logs.setGlobalLoggerProvider(m)}if(n.metricReader||n.views){let m=new Rp.MeterProvider({resource:l,views:n.views??[]});n.metricReader&&m.addMetricReader(n.metricReader),d.metrics.setGlobalMeterProvider(m),this.meterProvider=m}let L=xA(n.instrumentations,n.instrumentationConfig);this.disableInstrumentations=(0,Ap.registerInstrumentations)({instrumentations:L}),d.diag.info("@vercel/otel: started",u,i)}async shutdown(){let e=[];this.tracerProvider&&e.push(this.tracerProvider.shutdown()),this.loggerProvider&&e.push(this.loggerProvider.shutdown()),this.meterProvider&&e.push(this.meterProvider.shutdown()),d.diag.info("@vercel/otel: shutting down",e.length,"nodejs"),await Promise.all(e),this.contextManager&&this.contextManager.disable();let{disableInstrumentations:t}=this;t&&t()}};function wA(){let r=(0,ar.parseEnvironment)(process.env);return{...ar.DEFAULT_ENVIRONMENT,...r}}function xA(r,e){return(r??["auto"]).map(t=>t==="auto"?(d.diag.debug("@vercel/otel: Configure instrumentations: fetch",e?.fetch),[new ir(e?.fetch)]):t==="fetch"?(d.diag.debug("@vercel/otel: Configure instrumentations: fetch",e?.fetch),new ir(e?.fetch)):t).flat()}function DA(r,e){let t=e.OTEL_PROPAGATORS&&e.OTEL_PROPAGATORS.length>0?e.OTEL_PROPAGATORS:void 0;return(r??t??["auto"]).map(n=>{if(n==="none")return[];if(n==="auto")return d.diag.debug("@vercel/otel: Configure propagators: tracecontext, baggage"),[new qr,new Ve.W3CBaggagePropagator];if(n==="tracecontext")return d.diag.debug("@vercel/otel: Configure propagator: tracecontext"),new qr;if(n==="baggage")return d.diag.debug("@vercel/otel: Configure propagator: baggage"),new Ve.W3CBaggagePropagator;if(typeof n=="string")throw new Error(`Unknown propagator: "${n}"`);return n}).flat()}var Tp="always_on",sr=1;function BA(r,e){if(r&&typeof r!="string")return r;let t=r&&r!=="auto"?r:e.OTEL_TRACES_SAMPLER||Tp;switch(d.diag.debug("@vercel/otel: Configure sampler: ",t),t){case"always_on":return new N.AlwaysOnSampler;case"always_off":return new N.AlwaysOffSampler;case"parentbased_always_on":return new N.ParentBasedSampler({root:new N.AlwaysOnSampler});case"parentbased_always_off":return new N.ParentBasedSampler({root:new N.AlwaysOffSampler});case"traceidratio":return new N.TraceIdRatioBasedSampler(Sp(e));case"parentbased_traceidratio":return new N.ParentBasedSampler({root:new N.TraceIdRatioBasedSampler(Sp(e))});default:return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER value "${String(e.OTEL_TRACES_SAMPLER)} invalid, defaulting to ${Tp}".`),new N.AlwaysOnSampler}}function Sp(r){if(r.OTEL_TRACES_SAMPLER_ARG===void 0||r.OTEL_TRACES_SAMPLER_ARG==="")return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${sr}.`),sr;d.diag.debug("@vercel/otel: Configure sampler probability: ",r.OTEL_TRACES_SAMPLER_ARG);let e=Number(r.OTEL_TRACES_SAMPLER_ARG);return isNaN(e)?(d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${sr}.`),sr):e<0||e>1?(d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${sr}.`),sr):e}function UA(r,e,t){return[...(r??["auto"]).map(n=>{if(n==="auto"){if(process.env.VERCEL_OTEL_ENDPOINTS){let i=process.env.VERCEL_OTEL_ENDPOINTS_PORT||"4318",s=process.env.VERCEL_OTEL_ENDPOINTS_PROTOCOL||"http/protobuf";d.diag.debug("@vercel/otel: Configure vercel otel collector on port: ",i,s);let o={url:`http://localhost:${i}/v1/traces`,headers:{}},a=s==="http/protobuf"?new lt(o):new tr(o);return new N.BatchSpanProcessor(a)}return!e.traceExporter||e.traceExporter==="auto"||t.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT||t.OTEL_EXPORTER_OTLP_ENDPOINT?new N.BatchSpanProcessor(qA(t)):void 0}return n}).filter(jA),...e.traceExporter&&e.traceExporter!=="auto"?[new N.BatchSpanProcessor(e.traceExporter)]:[]]}function qA(r){let e=process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL??process.env.OTEL_EXPORTER_OTLP_PROTOCOL??"http/protobuf",t=VA(r),n={...Ve.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_HEADERS),...Ve.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_TRACES_HEADERS)};switch(d.diag.debug("@vercel/otel: Configure trace exporter: ",e,t,`headers: ${Object.keys(n).join(",")||"<none>"}`),e){case"http/json":return new tr({url:t,headers:n});case"http/protobuf":return new lt({url:t,headers:n});default:return d.diag.warn(`@vercel/otel: Unsupported OTLP traces protocol: ${e}. Using http/protobuf.`),new lt}}var Pp="v1/traces",GA=`http://localhost:4318/${Pp}`;function VA(r){let e=r.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;if(e&&typeof e=="string")return e;let t=r.OTEL_EXPORTER_OTLP_ENDPOINT;return t&&typeof t=="string"?`${t}/${Pp}`:GA}function jA(r){return r!=null}function hy(r){let e;r?typeof r=="string"?e={serviceName:r}:e=r:e={},new Ps(e).start()}
//# sourceMappingURL=index.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(502832));
module.exports = __webpack_exports__;

})();