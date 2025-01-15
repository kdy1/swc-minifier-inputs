exports.id = 12277;
exports.ids = [12277];
exports.modules = {

/***/ 38542:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "h", ({
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
}));
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== "function") {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`);
        }
    }
} //# sourceMappingURL=action-validate.js.map


/***/ }),

/***/ 30486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* eslint-disable import/no-extraneous-dependencies */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "j", ({
    enumerable: true,
    get: function() {
        return registerServerReference;
    }
}));
const _serveredge = __webpack_require__(75187);
function registerServerReference(id, action) {
    return (0, _serveredge.registerServerReference)(action, id, null);
}

//# sourceMappingURL=server-reference.js.map

/***/ }),

/***/ 31593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 React
 react-server-dom-webpack-client.edge.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 
var aa = __webpack_require__(94409), ba = {
    stream: !0
};
function ca(a, b) {
    if (a) {
        var c = a[b[0]];
        if (a = c[b[2]]) c = a.name;
        else {
            a = c["*"];
            if (!a) throw Error('Could not find the module "' + b[0] + '" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.');
            c = b[2];
        }
        return 4 === b.length ? [
            a.id,
            a.chunks,
            c,
            1
        ] : [
            a.id,
            a.chunks,
            c
        ];
    }
    return b;
}
var u = new Map;
function v(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(c) {
        b.status = "fulfilled";
        b.value = c;
    }, function(c) {
        b.status = "rejected";
        b.reason = c;
    });
    return b;
}
function da() {}
function ea(a) {
    for(var b = a[1], c = [], d = 0; d < b.length;){
        var f = b[d++];
        b[d++];
        var g = u.get(f);
        if (void 0 === g) {
            g = __webpack_require__.e(f);
            c.push(g);
            var m = u.set.bind(u, f, null);
            g.then(m, da);
            u.set(f, g);
        } else null !== g && c.push(g);
    }
    return 4 === a.length ? 0 === c.length ? v(a[0]) : Promise.all(c).then(function() {
        return v(a[0]);
    }) : 0 < c.length ? Promise.all(c) : null;
}
function fa(a, b, c) {
    if (null !== a) for(var d = 1; d < b.length; d += 2){
        var f = c, g = w.current;
        if (g) {
            var m = g.preinitScript, l = a.prefix + b[d];
            var k = a.crossOrigin;
            k = "string" === typeof k ? "use-credentials" === k ? k : "" : void 0;
            m.call(g, l, {
                crossOrigin: k,
                nonce: f
            });
        }
    }
}
var w = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDOMCurrentDispatcher, y = Symbol.for("react.element"), B = Symbol.for("react.lazy"), C = Symbol.iterator;
function ha(a) {
    if (null === a || "object" !== typeof a) return null;
    a = C && a[C] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var ia = Array.isArray, D = Object.getPrototypeOf;
function E(a, b) {
    var c = a.length;
    a.push(b);
    return c;
}
var ja = Object.prototype, F = new WeakMap;
function ka(a) {
    return Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
}
function H(a, b, c, d, f) {
    function g(q, e) {
        if (null === e) return null;
        if ("object" === typeof e) {
            switch(e.$$typeof){
                case y:
                    if (void 0 === c) throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
                    return "$T" + E(c, e).toString(16);
                case B:
                    q = e._payload;
                    var h = e._init;
                    null === k && (k = new FormData);
                    l++;
                    try {
                        var p = h(q), n = m++, t = JSON.stringify(p, g);
                        k.append(b + n, t);
                        return "$" + n.toString(16);
                    } catch (r) {
                        if ("object" === typeof r && null !== r && "function" === typeof r.then) {
                            l++;
                            var z = m++;
                            p = function() {
                                try {
                                    var A = JSON.stringify(e, g), G = k;
                                    G.append(b + z, A);
                                    l--;
                                    0 === l && d(G);
                                } catch (ma) {
                                    f(ma);
                                }
                            };
                            r.then(p, p);
                            return "$" + z.toString(16);
                        }
                        f(r);
                        return null;
                    } finally{
                        l--;
                    }
            }
            if ("function" === typeof e.then) {
                null === k && (k = new FormData);
                l++;
                var x = m++;
                e.then(function(r) {
                    try {
                        var A = JSON.stringify(r, g);
                        r = k;
                        r.append(b + x, A);
                        l--;
                        0 === l && d(r);
                    } catch (G) {
                        f(G);
                    }
                }, function(r) {
                    f(r);
                });
                return "$@" + x.toString(16);
            }
            if (ia(e)) return e;
            if (e instanceof FormData) {
                null === k && (k = new FormData);
                var na = k;
                p = m++;
                var oa = b + p + "_";
                e.forEach(function(r, A) {
                    na.append(oa + A, r);
                });
                return "$K" + p.toString(16);
            }
            if (e instanceof Map) return p = JSON.stringify(Array.from(e), g), null === k && (k = new FormData), n = m++, k.append(b + n, p), "$Q" + n.toString(16);
            if (e instanceof Set) return p = JSON.stringify(Array.from(e), g), null === k && (k = new FormData), n = m++, k.append(b + n, p), "$W" + n.toString(16);
            if (ha(e)) return Array.from(e);
            p = D(e);
            if (p !== ja && (null === p || null !== D(p))) {
                if (void 0 === c) throw Error("Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.");
                return "$T" + E(c, e).toString(16);
            }
            return e;
        }
        if ("string" === typeof e) {
            if ("Z" === e[e.length - 1] && this[q] instanceof Date) return "$D" + e;
            p = "$" === e[0] ? "$" + e : e;
            return p;
        }
        if ("boolean" === typeof e) return e;
        if ("number" === typeof e) return ka(e);
        if ("undefined" === typeof e) return "$undefined";
        if ("function" === typeof e) {
            p = F.get(e);
            if (void 0 !== p) return p = JSON.stringify(p, g), null === k && (k = new FormData), n = m++, k.set(b + n, p), "$F" + n.toString(16);
            if (void 0 === c) throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
            return "$T" + E(c, e).toString(16);
        }
        if ("symbol" === typeof e) {
            if (void 0 === c) throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
            return "$T" + E(c, e).toString(16);
        }
        if ("bigint" === typeof e) return "$n" + e.toString(10);
        throw Error("Type " + typeof e + " is not supported as an argument to a Server Function.");
    }
    var m = 1, l = 0, k = null;
    a = JSON.stringify(a, g);
    null === k ? d(a) : (k.set(b + "0", a), 0 === l && d(k));
}
var I = new WeakMap;
function la(a) {
    var b, c, d = new Promise(function(f, g) {
        b = f;
        c = g;
    });
    H(a, "", void 0, function(f) {
        if ("string" === typeof f) {
            var g = new FormData;
            g.append("0", f);
            f = g;
        }
        d.status = "fulfilled";
        d.value = f;
        b(f);
    }, function(f) {
        d.status = "rejected";
        d.reason = f;
        c(f);
    });
    return d;
}
function pa(a) {
    var b = F.get(this);
    if (!b) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
    var c = null;
    if (null !== b.bound) {
        c = I.get(b);
        c || (c = la(b), I.set(b, c));
        if ("rejected" === c.status) throw c.reason;
        if ("fulfilled" !== c.status) throw c;
        b = c.value;
        var d = new FormData;
        b.forEach(function(f, g) {
            d.append("$ACTION_" + a + ":" + g, f);
        });
        c = d;
        b = "$ACTION_REF_" + a;
    } else b = "$ACTION_ID_" + b.id;
    return {
        name: b,
        method: "POST",
        encType: "multipart/form-data",
        data: c
    };
}
function J(a, b) {
    var c = F.get(this);
    if (!c) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
    if (c.id !== a) return !1;
    var d = c.bound;
    if (null === d) return 0 === b;
    switch(d.status){
        case "fulfilled":
            return d.value.length === b;
        case "pending":
            throw d;
        case "rejected":
            throw d.reason;
        default:
            throw "string" !== typeof d.status && (d.status = "pending", d.then(function(f) {
                d.status = "fulfilled";
                d.value = f;
            }, function(f) {
                d.status = "rejected";
                d.reason = f;
            })), d;
    }
}
function K(a, b, c) {
    Object.defineProperties(a, {
        $$FORM_ACTION: {
            value: void 0 === c ? pa : function() {
                var d = F.get(this);
                if (!d) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
                var f = d.bound;
                null === f && (f = Promise.resolve([]));
                return c(d.id, f);
            }
        },
        $$IS_SIGNATURE_EQUAL: {
            value: J
        },
        bind: {
            value: L
        }
    });
    F.set(a, b);
}
var qa = Function.prototype.bind, ra = Array.prototype.slice;
function L() {
    var a = qa.apply(this, arguments), b = F.get(this);
    if (b) {
        var c = ra.call(arguments, 1), d = null;
        d = null !== b.bound ? Promise.resolve(b.bound).then(function(f) {
            return f.concat(c);
        }) : Promise.resolve(c);
        Object.defineProperties(a, {
            $$FORM_ACTION: {
                value: this.$$FORM_ACTION
            },
            $$IS_SIGNATURE_EQUAL: {
                value: J
            },
            bind: {
                value: L
            }
        });
        F.set(a, {
            id: b.id,
            bound: d
        });
    }
    return a;
}
function sa(a, b, c) {
    function d() {
        var f = Array.prototype.slice.call(arguments);
        return b(a, f);
    }
    K(d, {
        id: a,
        bound: null
    }, c);
    return d;
}
function M(a, b, c, d) {
    this.status = a;
    this.value = b;
    this.reason = c;
    this._response = d;
}
M.prototype = Object.create(Promise.prototype);
M.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            N(this);
            break;
        case "resolved_module":
            O(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
        case "cyclic":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function ta(a) {
    switch(a.status){
        case "resolved_model":
            N(a);
            break;
        case "resolved_module":
            O(a);
    }
    switch(a.status){
        case "fulfilled":
            return a.value;
        case "pending":
        case "blocked":
        case "cyclic":
            throw a;
        default:
            throw a.reason;
    }
}
function P(a, b) {
    for(var c = 0; c < a.length; c++)(0, a[c])(b);
}
function Q(a, b, c) {
    switch(a.status){
        case "fulfilled":
            P(b, a.value);
            break;
        case "pending":
        case "blocked":
        case "cyclic":
            a.value = b;
            a.reason = c;
            break;
        case "rejected":
            c && P(c, a.reason);
    }
}
function R(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var c = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== c && P(c, b);
    }
}
function S(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var c = a.value, d = a.reason;
        a.status = "resolved_module";
        a.value = b;
        null !== c && (O(a), Q(a, c, d));
    }
}
var T = null, U = null;
function N(a) {
    var b = T, c = U;
    T = a;
    U = null;
    var d = a.value;
    a.status = "cyclic";
    a.value = null;
    a.reason = null;
    try {
        var f = JSON.parse(d, a._response._fromJSON);
        if (null !== U && 0 < U.deps) U.value = f, a.status = "blocked", a.value = null, a.reason = null;
        else {
            var g = a.value;
            a.status = "fulfilled";
            a.value = f;
            null !== g && P(g, f);
        }
    } catch (m) {
        a.status = "rejected", a.reason = m;
    } finally{
        T = b, U = c;
    }
}
function O(a) {
    try {
        var b = a.value, c = globalThis.__next_require__(b[0]);
        if (4 === b.length && "function" === typeof c.then) if ("fulfilled" === c.status) c = c.value;
        else throw c.reason;
        var d = "*" === b[2] ? c : "" === b[2] ? c.__esModule ? c.default : c : c[b[2]];
        a.status = "fulfilled";
        a.value = d;
    } catch (f) {
        a.status = "rejected", a.reason = f;
    }
}
function V(a, b) {
    a._chunks.forEach(function(c) {
        "pending" === c.status && R(c, b);
    });
}
function W(a, b) {
    var c = a._chunks, d = c.get(b);
    d || (d = new M("pending", null, null, a), c.set(b, d));
    return d;
}
function ua(a, b, c, d) {
    if (U) {
        var f = U;
        d || f.deps++;
    } else f = U = {
        deps: d ? 0 : 1,
        value: null
    };
    return function(g) {
        b[c] = g;
        f.deps--;
        0 === f.deps && "blocked" === a.status && (g = a.value, a.status = "fulfilled", a.value = f.value, null !== g && P(g, f.value));
    };
}
function va(a) {
    return function(b) {
        return R(a, b);
    };
}
function wa(a, b) {
    function c() {
        var f = Array.prototype.slice.call(arguments), g = b.bound;
        return g ? "fulfilled" === g.status ? d(b.id, g.value.concat(f)) : Promise.resolve(g).then(function(m) {
            return d(b.id, m.concat(f));
        }) : d(b.id, f);
    }
    var d = a._callServer;
    K(c, b, a._encodeFormAction);
    return c;
}
function X(a, b) {
    a = W(a, b);
    switch(a.status){
        case "resolved_model":
            N(a);
    }
    switch(a.status){
        case "fulfilled":
            return a.value;
        default:
            throw a.reason;
    }
}
function xa(a, b, c, d) {
    if ("$" === d[0]) {
        if ("$" === d) return y;
        switch(d[1]){
            case "$":
                return d.slice(1);
            case "L":
                return b = parseInt(d.slice(2), 16), a = W(a, b), {
                    $$typeof: B,
                    _payload: a,
                    _init: ta
                };
            case "@":
                if (2 === d.length) return new Promise(function() {});
                b = parseInt(d.slice(2), 16);
                return W(a, b);
            case "S":
                return Symbol.for(d.slice(2));
            case "F":
                return b = parseInt(d.slice(2), 16), b = X(a, b), wa(a, b);
            case "T":
                b = parseInt(d.slice(2), 16);
                a = a._tempRefs;
                if (null == a) throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
                if (0 > b || b >= a.length) throw Error("The RSC response contained a reference that doesn't exist in the temporary reference set. Always pass the matching set that was used to create the reply when parsing its response.");
                return a[b];
            case "Q":
                return b = parseInt(d.slice(2), 16), a = X(a, b), new Map(a);
            case "W":
                return b = parseInt(d.slice(2), 16), a = X(a, b), new Set(a);
            case "I":
                return Infinity;
            case "-":
                return "$-0" === d ? -0 : -Infinity;
            case "N":
                return NaN;
            case "u":
                return;
            case "D":
                return new Date(Date.parse(d.slice(2)));
            case "n":
                return BigInt(d.slice(2));
            default:
                d = parseInt(d.slice(1), 16);
                a = W(a, d);
                switch(a.status){
                    case "resolved_model":
                        N(a);
                        break;
                    case "resolved_module":
                        O(a);
                }
                switch(a.status){
                    case "fulfilled":
                        return a.value;
                    case "pending":
                    case "blocked":
                    case "cyclic":
                        return d = T, a.then(ua(d, b, c, "cyclic" === a.status), va(d)), null;
                    default:
                        throw a.reason;
                }
        }
    }
    return d;
}
function ya() {
    throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.');
}
function za(a, b, c) {
    var d = a._chunks, f = d.get(b);
    c = JSON.parse(c, a._fromJSON);
    var g = ca(a._bundlerConfig, c);
    fa(a._moduleLoading, c[1], a._nonce);
    if (c = ea(g)) {
        if (f) {
            var m = f;
            m.status = "blocked";
        } else m = new M("blocked", null, null, a), d.set(b, m);
        c.then(function() {
            return S(m, g);
        }, function(l) {
            return R(m, l);
        });
    } else f ? S(f, g) : d.set(b, new M("resolved_module", g, null, a));
}
function Aa(a) {
    return function(b, c) {
        return "string" === typeof c ? xa(a, this, b, c) : "object" === typeof c && null !== c ? (b = c[0] === y ? {
            $$typeof: y,
            type: c[1],
            key: c[2],
            ref: null,
            props: c[3],
            _owner: null
        } : c, b) : c;
    };
}
function Y() {
    throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.");
}
function Z(a) {
    var b = a.ssrManifest.moduleMap, c = a.ssrManifest.moduleLoading, d = a.encodeFormAction, f = "string" === typeof a.nonce ? a.nonce : void 0;
    a = a && a.temporaryReferences ? a.temporaryReferences : void 0;
    var g = new Map;
    b = {
        _bundlerConfig: b,
        _moduleLoading: c,
        _callServer: void 0 !== Y ? Y : ya,
        _encodeFormAction: d,
        _nonce: f,
        _chunks: g,
        _stringDecoder: new TextDecoder,
        _fromJSON: null,
        _rowState: 0,
        _rowID: 0,
        _rowTag: 0,
        _rowLength: 0,
        _buffer: [],
        _tempRefs: a
    };
    b._fromJSON = Aa(b);
    return b;
}
function Ba(a, b) {
    function c(g) {
        var m = g.value;
        if (g.done) V(a, Error("Connection closed."));
        else {
            var l = 0, k = a._rowState, q = a._rowID, e = a._rowTag, h = a._rowLength;
            g = a._buffer;
            for(var p = m.length; l < p;){
                var n = -1;
                switch(k){
                    case 0:
                        n = m[l++];
                        58 === n ? k = 1 : q = q << 4 | (96 < n ? n - 87 : n - 48);
                        continue;
                    case 1:
                        k = m[l];
                        84 === k ? (e = k, k = 2, l++) : 64 < k && 91 > k ? (e = k, k = 3, l++) : (e = 0, k = 3);
                        continue;
                    case 2:
                        n = m[l++];
                        44 === n ? k = 4 : h = h << 4 | (96 < n ? n - 87 : n - 48);
                        continue;
                    case 3:
                        n = m.indexOf(10, l);
                        break;
                    case 4:
                        n = l + h, n > m.length && (n = -1);
                }
                var t = m.byteOffset + l;
                if (-1 < n) {
                    l = new Uint8Array(m.buffer, t, n - l);
                    h = a;
                    t = e;
                    var z = h._stringDecoder;
                    e = "";
                    for(var x = 0; x < g.length; x++)e += z.decode(g[x], ba);
                    e += z.decode(l);
                    switch(t){
                        case 73:
                            za(h, q, e);
                            break;
                        case 72:
                            q = e[0];
                            e = e.slice(1);
                            h = JSON.parse(e, h._fromJSON);
                            e = w.current;
                            switch(q){
                                case "D":
                                    e.prefetchDNS(h);
                                    break;
                                case "C":
                                    "string" === typeof h ? e.preconnect(h) : e.preconnect(h[0], h[1]);
                                    break;
                                case "L":
                                    q = h[0];
                                    l = h[1];
                                    3 === h.length ? e.preload(q, l, h[2]) : e.preload(q, l);
                                    break;
                                case "m":
                                    "string" === typeof h ? e.preloadModule(h) : e.preloadModule(h[0], h[1]);
                                    break;
                                case "S":
                                    "string" === typeof h ? e.preinitStyle(h) : e.preinitStyle(h[0], 0 === h[1] ? void 0 : h[1], 3 === h.length ? h[2] : void 0);
                                    break;
                                case "X":
                                    "string" === typeof h ? e.preinitScript(h) : e.preinitScript(h[0], h[1]);
                                    break;
                                case "M":
                                    "string" === typeof h ? e.preinitModuleScript(h) : e.preinitModuleScript(h[0], h[1]);
                            }
                            break;
                        case 69:
                            e = JSON.parse(e);
                            l = e.digest;
                            e = Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
                            e.stack = "Error: " + e.message;
                            e.digest = l;
                            l = h._chunks;
                            (t = l.get(q)) ? R(t, e) : l.set(q, new M("rejected", null, e, h));
                            break;
                        case 84:
                            h._chunks.set(q, new M("fulfilled", e, null, h));
                            break;
                        case 68:
                        case 87:
                            throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");
                        default:
                            l = h._chunks, (t = l.get(q)) ? (h = t, q = e, "pending" === h.status && (e = h.value, l = h.reason, h.status = "resolved_model", h.value = q, null !== e && (N(h), Q(h, e, l)))) : l.set(q, new M("resolved_model", e, null, h));
                    }
                    l = n;
                    3 === k && l++;
                    h = q = e = k = 0;
                    g.length = 0;
                } else {
                    m = new Uint8Array(m.buffer, t, m.byteLength - l);
                    g.push(m);
                    h -= m.byteLength;
                    break;
                }
            }
            a._rowState = k;
            a._rowID = q;
            a._rowTag = e;
            a._rowLength = h;
            return f.read().then(c).catch(d);
        }
    }
    function d(g) {
        V(a, g);
    }
    var f = b.getReader();
    f.read().then(c).catch(d);
}
exports.createFromFetch = function(a, b) {
    var c = Z(b);
    a.then(function(d) {
        Ba(c, d.body);
    }, function(d) {
        V(c, d);
    });
    return W(c, 0);
};
exports.createFromReadableStream = function(a, b) {
    b = Z(b);
    Ba(b, a);
    return W(b, 0);
};
exports.createServerReference = function(a) {
    return sa(a, Y);
};
exports.createTemporaryReferenceSet = function() {
    return [];
};
exports.encodeReply = function(a, b) {
    return new Promise(function(c, d) {
        H(a, "", b && b.temporaryReferences ? b.temporaryReferences : void 0, c, d);
    });
}; //# sourceMappingURL=react-server-dom-webpack-client.edge.production.min.js.map


/***/ }),

/***/ 89973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(31593);
} else {}


/***/ }),

/***/ 9386:
/***/ (() => {



/***/ }),

/***/ 82724:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "DetachedPromise", ({
    enumerable: true,
    get: function() {
        return DetachedPromise;
    }
}));
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
}

//# sourceMappingURL=detached-promise.js.map

/***/ }),

/***/ 96110:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        process.nextTick(cb);
    });
};
const scheduleImmediate = (cb)=>{
    if (false) {} else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}

//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ 45733:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    generateEncryptionKeyBase64: function() {
        return generateEncryptionKeyBase64;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestSingleton: function() {
        return getClientReferenceManifestSingleton;
    },
    getServerModuleMap: function() {
        return getServerModuleMap;
    },
    setReferenceManifestsSingleton: function() {
        return setReferenceManifestsSingleton;
    },
    stringToUint8Array: function() {
        return stringToUint8Array;
    }
});
// Keep the key in memory as it should never change during the lifetime of the server in
// both development and production.
let __next_encryption_key_generation_promise = null;
let __next_loaded_action_key;
let __next_internal_development_raw_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
async function generateEncryptionKeyBase64(dev) {
    // For development, we just keep one key in memory for all actions.
    // This makes things faster.
    if (dev) {
        if (typeof __next_internal_development_raw_action_key !== 'undefined') {
            return __next_internal_development_raw_action_key;
        }
    }
    // This avoids it being generated multiple times in parallel.
    if (!__next_encryption_key_generation_promise) {
        __next_encryption_key_generation_promise = new Promise(async (resolve, reject)=>{
            try {
                const key = await crypto.subtle.generateKey({
                    name: 'AES-GCM',
                    length: 256
                }, true, [
                    'encrypt',
                    'decrypt'
                ]);
                const exported = await crypto.subtle.exportKey('raw', key);
                const b64 = btoa(arrayBufferToString(exported));
                resolve([
                    key,
                    b64
                ]);
            } catch (error) {
                reject(error);
            }
        });
    }
    const [key, b64] = await __next_encryption_key_generation_promise;
    __next_loaded_action_key = key;
    if (dev) {
        __next_internal_development_raw_action_key = b64;
    }
    return b64;
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    // @ts-ignore
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifest,
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error('Missing manifest for Server Actions. This is a bug in Next.js');
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestSingleton() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error('Missing manifest for Server Actions. This is a bug in Next.js');
    }
    return serverActionsManifestSingleton.clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error('Missing manifest for Server Actions. This is a bug in Next.js');
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new Error('Missing encryption key for Server Actions');
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}

//# sourceMappingURL=encryption-utils.js.map

/***/ }),

/***/ 74684:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decryptActionBoundArgs: function() {
        return decryptActionBoundArgs;
    },
    encryptActionBoundArgs: function() {
        return encryptActionBoundArgs;
    }
});
__webpack_require__(9386);
const _serveredge = __webpack_require__(75187);
const _clientedge = __webpack_require__(89973);
const _nodewebstreamshelper = __webpack_require__(68354);
const _encryptionutils = __webpack_require__(45733);
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
async function decodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (typeof key === 'undefined') {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get the iv (16 bytes) and the payload from the arg.
    const originalPayload = atob(arg);
    const ivValue = originalPayload.slice(0, 16);
    const payload = originalPayload.slice(16);
    const decrypted = textDecoder.decode(await (0, _encryptionutils.decrypt)(key, (0, _encryptionutils.stringToUint8Array)(ivValue), (0, _encryptionutils.stringToUint8Array)(payload)));
    if (!decrypted.startsWith(actionId)) {
        throw new Error('Invalid Server Action payload: failed to decrypt.');
    }
    return decrypted.slice(actionId.length);
}
async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
async function encryptActionBoundArgs(actionId, args) {
    const clientReferenceManifestSingleton = (0, _encryptionutils.getClientReferenceManifestSingleton)();
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientReferenceManifestSingleton.clientModules));
    // Encrypt the serialized string with the action id as the salt.
    // Add a prefix to later ensure that the payload is correctly decrypted, similar
    // to a checksum.
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    return encrypted;
}
async function decryptActionBoundArgs(actionId, encrypted) {
    // Decrypt the serialized string with the action id as the salt.
    const decryped = await decodeActionBoundArg(actionId, await encrypted);
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decryped));
            controller.close();
        }
    }), {
        ssrManifest: {
            // TODO: We can't use the client reference manifest to resolve the modules
            // on the server side - instead they need to be recovered as the module
            // references (proxies) again.
            // For now, we'll just use an empty module map.
            moduleLoading: {},
            moduleMap: {}
        }
    });
    // This extra step ensures that the server references are recovered.
    const serverModuleMap = (0, _encryptionutils.getServerModuleMap)();
    const transformed = await (0, _serveredge.decodeReply)(await (0, _clientedge.encodeReply)(deserialized), serverModuleMap);
    return transformed;
}

//# sourceMappingURL=encryption.js.map

/***/ }),

/***/ 90404:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ENCODED_TAGS", ({
    enumerable: true,
    get: function() {
        return ENCODED_TAGS;
    }
}));
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    }
};

//# sourceMappingURL=encodedTags.js.map

/***/ }),

/***/ 68354:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    chainStreams: function() {
        return chainStreams;
    },
    continueDynamicDataResume: function() {
        return continueDynamicDataResume;
    },
    continueDynamicHTMLResume: function() {
        return continueDynamicHTMLResume;
    },
    continueDynamicPrerender: function() {
        return continueDynamicPrerender;
    },
    continueFizzStream: function() {
        return continueFizzStream;
    },
    continueStaticPrerender: function() {
        return continueStaticPrerender;
    },
    createBufferedTransformStream: function() {
        return createBufferedTransformStream;
    },
    createRootLayoutValidatorStream: function() {
        return createRootLayoutValidatorStream;
    },
    renderToInitialFizzStream: function() {
        return renderToInitialFizzStream;
    },
    streamFromString: function() {
        return streamFromString;
    },
    streamToString: function() {
        return streamToString;
    }
});
const _tracer = __webpack_require__(99623);
const _constants = __webpack_require__(60915);
const _detachedpromise = __webpack_require__(82724);
const _scheduler = __webpack_require__(96110);
const _encodedTags = __webpack_require__(90404);
const _uint8arrayhelpers = __webpack_require__(60739);
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // We could encode this invariant in the arguments but current uses of this function pass
    // use spread so it would be missed by
    if (streams.length === 0) {
        throw new Error('Invariant: chainStreams requires at least one stream');
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
async function streamToString(stream) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    // @ts-expect-error TypeScript gets this wrong (https://nodejs.org/api/webstreams.html#async-iteration)
    for await (const chunk of stream){
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream() {
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        // If we already have a pending flush, then return early.
        if (pending) return;
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                const chunk = new Uint8Array(bufferByteLength);
                let copiedBytes = 0;
                for(let i = 0; i < bufferedChunks.length; i++){
                    const bufferedChunk = bufferedChunks[i];
                    chunk.set(bufferedChunk, copiedBytes);
                    copiedBytes += bufferedChunk.byteLength;
                }
                // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
                // and our bufferByteLength to prepare for the next round of buffered chunks
                bufferedChunks.length = 0;
                bufferByteLength = 0;
                controller.enqueue(chunk);
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            // Flush the buffer to the controller.
            flush(controller);
        },
        flush () {
            if (!pending) return;
            return pending.promise;
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        transform: async (chunk, controller)=>{
            const html = await getServerInsertedHTML();
            if (html) {
                controller.enqueue(encoder.encode(html));
            }
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, _tracer.getTracer)().trace(_constants.AppRenderSpan.renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            // While react is flushing chunks, we don't apply insertions
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
                freezing = true;
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HEAD);
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        insertedHeadContent.set(chunk.slice(0, index));
                        insertedHeadContent.set(encodedInsertion, index);
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                (0, _scheduler.scheduleImmediate)(()=>{
                    freezing = false;
                });
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new _detachedpromise.DetachedPromise();
        pending = detached;
        (0, _scheduler.scheduleImmediate)(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
// Merge two streams into one. Ensure the final transform stream is closed
// when both are finished.
function createMergedTransformStream(stream) {
    let pull = null;
    let donePulling = false;
    async function startPulling(controller) {
        if (pull) {
            return;
        }
        const reader = stream.getReader();
        // NOTE: streaming flush
        // We are buffering here for the inlined data stream because the
        // "shell" stream might be chunkenized again by the underlying stream
        // implementation, e.g. with a specific high-water mark. To ensure it's
        // the safe timing to pipe the data stream, this extra tick is
        // necessary.
        // We don't start reading until we've left the current Task to ensure
        // that it's inserted after flushing the shell. Note that this implementation
        // might get stale if impl details of Fizz change in the future.
        await (0, _scheduler.atLeastOneTask)();
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (!pull) {
                pull = startPulling(controller);
            }
        },
        flush (controller) {
            if (donePulling) {
                return;
            }
            return pull || startPulling(controller);
        }
    });
}
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream(suffix) {
    let foundSuffix = false;
    const encodedSuffix = encoder.encode(suffix);
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, encodedSuffix);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === suffix.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > suffix.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + suffix.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(encodedSuffix);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY_AND_HTML) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY) || (0, _uint8arrayhelpers.isEquivalentUint8Arrays)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.BODY);
            chunk = (0, _uint8arrayhelpers.removeFromUint8Array)(chunk, _encodedTags.ENCODED_TAGS.CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, _uint8arrayhelpers.indexOfUint8Array)(chunk, _encodedTags.ENCODED_TAGS.OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<script>self.__next_root_layout_missing_tags=${JSON.stringify(missingTags)}</script>`));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, getServerInsertedHTML, serverInsertedHTMLToHead, validateRootLayout }) {
    const closeTag = '</body></html>';
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(closeTag, 1)[0] : null;
    // If we're generating static HTML and there's an `allReady` promise on the
    // stream, we need to wait for it to resolve before continuing.
    if (isStaticGeneration && 'allReady' in renderStream) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert generated tags to head
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createMergedTransformStream(inlinedDataStream) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(closeTag),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        getServerInsertedHTML && serverInsertedHTMLToHead ? createHeadInsertionTransformStream(getServerInsertedHTML) : null
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML }) {
    return prerenderStream// Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform())// Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML }) {
    const closeTag = '</body></html>';
    return prerenderStream// Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream())// Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML))// Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream))// Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream(closeTag));
}
async function continueDynamicHTMLResume(renderStream, { inlinedDataStream, getServerInsertedHTML }) {
    const closeTag = '</body></html>';
    return renderStream// Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream())// Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML))// Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream))// Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream(closeTag));
}
async function continueDynamicDataResume(renderStream, { inlinedDataStream }) {
    const closeTag = '</body></html>';
    return renderStream// Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream))// Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream(closeTag));
}

//# sourceMappingURL=node-web-streams-helper.js.map

/***/ }),

/***/ 60739:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    indexOfUint8Array: function() {
        return indexOfUint8Array;
    },
    isEquivalentUint8Arrays: function() {
        return isEquivalentUint8Arrays;
    },
    removeFromUint8Array: function() {
        return removeFromUint8Array;
    }
});
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
}

//# sourceMappingURL=uint8array-helpers.js.map

/***/ })

};
;