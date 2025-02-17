exports.id = 1023;
exports.ids = [1023,9415];
exports.modules = {

/***/ 502930:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Internal assertion helpers.
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.anumber = anumber;
exports.abytes = abytes;
exports.ahash = ahash;
exports.aexists = aexists;
exports.aoutput = aoutput;
/** Asserts something is positive integer. */
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
//# sourceMappingURL=_assert.js.map

/***/ }),

/***/ 574763:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = void 0;
exports.fromBig = fromBig;
exports.split = split;
exports.add = add;
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
exports.shrSH = shrSH;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
exports.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
exports.rotrSH = rotrSH;
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
exports.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
exports.rotrBH = rotrBH;
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
exports.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
exports.rotr32H = rotr32H;
const rotr32L = (h, _l) => h;
exports.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
exports.rotlSH = rotlSH;
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
exports.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
exports.rotlBH = rotlBH;
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
exports.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
exports.add3L = add3L;
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
exports.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
exports.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
exports.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
exports.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
exports.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
exports["default"] = u64;
//# sourceMappingURL=_u64.js.map

/***/ }),

/***/ 314296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crypto = void 0;
/**
 * Internal webcrypto alias.
 * We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
 * Falls back to Node.js built-in crypto for Node.js <=v14.
 * See utils.ts for details.
 * @module
 */
// @ts-ignore
const nc = __webpack_require__(977598);
exports.crypto = nc && typeof nc === 'object' && 'webcrypto' in nc
    ? nc.webcrypto
    : nc && typeof nc === 'object' && 'randomBytes' in nc
        ? nc
        : undefined;
//# sourceMappingURL=cryptoNode.js.map

/***/ }),

/***/ 871634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
exports.keccakP = keccakP;
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */
const _assert_js_1 = __webpack_require__(502930);
const _u64_js_1 = __webpack_require__(574763);
const utils_js_1 = __webpack_require__(118200);
// Various per round constants calculations
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s));
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
/** Keccak sponge function. */
class Keccak extends utils_js_1.Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, _assert_js_1.anumber)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
    }
    keccak() {
        if (!utils_js_1.isLE)
            (0, utils_js_1.byteSwap32)(this.state32);
        keccakP(this.state32, this.rounds);
        if (!utils_js_1.isLE)
            (0, utils_js_1.byteSwap32)(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, _assert_js_1.aexists)(this);
        const { blockLen, state } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, _assert_js_1.aexists)(this, false);
        (0, _assert_js_1.abytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, _assert_js_1.anumber)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, _assert_js_1.aoutput)(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
exports.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
/** SHA3-224 hash function. */
exports.sha3_224 = gen(0x06, 144, 224 / 8);
/** SHA3-256 hash function. Different from keccak-256. */
exports.sha3_256 = gen(0x06, 136, 256 / 8);
/** SHA3-384 hash function. */
exports.sha3_384 = gen(0x06, 104, 384 / 8);
/** SHA3-512 hash function. */
exports.sha3_512 = gen(0x06, 72, 512 / 8);
/** keccak-224 hash function. */
exports.keccak_224 = gen(0x01, 144, 224 / 8);
/** keccak-256 hash function. Different from SHA3-256. */
exports.keccak_256 = gen(0x01, 136, 256 / 8);
/** keccak-384 hash function. */
exports.keccak_384 = gen(0x01, 104, 384 / 8);
/** keccak-512 hash function. */
exports.keccak_512 = gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
/** SHAKE128 XOF with 128-bit security. */
exports.shake128 = genShake(0x1f, 168, 128 / 8);
/** SHAKE256 XOF with 256-bit security. */
exports.shake256 = genShake(0x1f, 136, 256 / 8);
//# sourceMappingURL=sha3.js.map

/***/ }),

/***/ 118200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.isLE = void 0;
exports.isBytes = isBytes;
exports.u8 = u8;
exports.u32 = u32;
exports.createView = createView;
exports.rotr = rotr;
exports.rotl = rotl;
exports.byteSwap = byteSwap;
exports.byteSwap32 = byteSwap32;
exports.bytesToHex = bytesToHex;
exports.hexToBytes = hexToBytes;
exports.asyncLoop = asyncLoop;
exports.utf8ToBytes = utf8ToBytes;
exports.toBytes = toBytes;
exports.concatBytes = concatBytes;
exports.checkOpts = checkOpts;
exports.wrapConstructor = wrapConstructor;
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
exports.randomBytes = randomBytes;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = __webpack_require__(314296);
const _assert_js_1 = __webpack_require__(502930);
// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
// Cast array to different type
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
// Cast array to view
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
    return (word << (32 - shift)) | (word >>> shift);
}
/** The rotate left (circular left shift) operation for uint32 */
function rotl(word, shift) {
    return (word << shift) | ((word >>> (32 - shift)) >>> 0);
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
exports.isLE = (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
// The byte swap operation for uint32
function byteSwap(word) {
    return (((word << 24) & 0xff000000) |
        ((word << 8) & 0xff0000) |
        ((word >>> 8) & 0xff00) |
        ((word >>> 24) & 0xff));
}
/** Conditionally byte swap if on a big-endian platform */
exports.byteSwapIfBE = exports.isLE
    ? (n) => n
    : (n) => byteSwap(n);
/** In place byte swap for Uint32Array */
function byteSwap32(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = byteSwap(arr[i]);
    }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    (0, _assert_js_1.abytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * There is no setImmediate in browser and setTimeout is slow.
 * Call of async fn will return Promise, which will be fullfiled only on
 * next scheduler queue processing step and this is exactly what we need.
 */
const nextTick = async () => { };
exports.nextTick = nextTick;
/** Returns control to thread each 'tick' ms to avoid blocking. */
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
/**
 * Convert JS string to byte array.
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    (0, _assert_js_1.abytes)(data);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        (0, _assert_js_1.abytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
/** For runtime check if class implements interface */
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
function checkOpts(defaults, opts) {
    if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
        throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
/** Wraps hash function, creating an interface on top of it */
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
        return crypto_1.crypto.randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 489415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __webpack_unused_export__;
const { createId, init, getConstants, isCuid } = __webpack_require__(147598);

module.exports.sX = createId;
__webpack_unused_export__ = init;
__webpack_unused_export__ = getConstants;
__webpack_unused_export__ = isCuid;


/***/ }),

/***/ 147598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global global, window, module */
const { sha3_512: sha3 } = __webpack_require__(871634);

const defaultLength = 24;
const bigLength = 32;

const createEntropy = (length = 4, random = Math.random) => {
  let entropy = "";

  while (entropy.length < length) {
    entropy = entropy + Math.floor(random() * 36).toString(36);
  }
  return entropy;
};

/*
 * Adapted from https://github.com/juanelas/bigint-conversion
 * MIT License Copyright (c) 2018 Juan Hernández Serrano
 */
function bufToBigInt(buf) {
  let bits = 8n;

  let value = 0n;
  for (const i of buf.values()) {
    const bi = BigInt(i);
    value = (value << bits) + bi;
  }
  return value;
}

const hash = (input = "") => {
  // Drop the first character because it will bias the histogram
  // to the left.
  return bufToBigInt(sha3(input)).toString(36).slice(1);
};

const alphabet = Array.from({ length: 26 }, (x, i) =>
  String.fromCharCode(i + 97)
);

const randomLetter = (random) =>
  alphabet[Math.floor(random() * alphabet.length)];

/*
This is a fingerprint of the host environment. It is used to help
prevent collisions when generating ids in a distributed system.
If no global object is available, you can pass in your own, or fall back
on a random string.
*/
const createFingerprint = ({
  globalObj = typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : {},
  random = Math.random,
} = {}) => {
  const globals = Object.keys(globalObj).toString();
  const sourceString = globals.length
    ? globals + createEntropy(bigLength, random)
    : createEntropy(bigLength, random);

  return hash(sourceString).substring(0, bigLength);
};

const createCounter = (count) => () => {
  return count++;
};

// ~22k hosts before 50% chance of initial counter collision
// with a remaining counter range of 9.0e+15 in JavaScript.
const initialCountMax = 476782367;

const init = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random = Math.random,
  counter = createCounter(Math.floor(random() * initialCountMax)),
  length = defaultLength,
  fingerprint = createFingerprint({ random }),
} = {}) => {
  return function cuid2() {
    const firstLetter = randomLetter(random);

    // If we're lucky, the `.toString(36)` calls may reduce hashing rounds
    // by shortening the input to the hash function a little.
    const time = Date.now().toString(36);
    const count = counter().toString(36);

    // The salt should be long enough to be globally unique across the full
    // length of the hash. For simplicity, we use the same length as the
    // intended id output.
    const salt = createEntropy(length, random);
    const hashInput = `${time + salt + count + fingerprint}`;

    return `${firstLetter + hash(hashInput).substring(1, length)}`;
  };
};

const createId = init();

const isCuid = (id, { minLength = 2, maxLength = bigLength } = {}) => {
  const length = id.length;
  const regex = /^[0-9a-z]+$/;

  try {
    if (
      typeof id === "string" &&
      length >= minLength &&
      length <= maxLength &&
      regex.test(id)
    )
      return true;
  } finally {
  }

  return false;
};

module.exports.getConstants = () => ({ defaultLength, bigLength });
module.exports.init = init;
module.exports.createId = createId;
module.exports.bufToBigInt = bufToBigInt;
module.exports.createCounter = createCounter;
module.exports.createFingerprint = createFingerprint;
module.exports.isCuid = isCuid;


/***/ }),

/***/ 552285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowUpFromLine)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowUpFromLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowUpFromLine", [
    [
        "path",
        {
            d: "m18 9-6-6-6 6",
            key: "kcunyi"
        }
    ],
    [
        "path",
        {
            d: "M12 3v14",
            key: "7cf3v8"
        }
    ],
    [
        "path",
        {
            d: "M5 21h14",
            key: "11awu3"
        }
    ]
]);
 //# sourceMappingURL=arrow-up-from-line.js.map


/***/ }),

/***/ 611569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ useAutoAnimate)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
;// ../../node_modules/@formkit/auto-animate/index.mjs
/**
 * A set of all the parents currently being observe. This is the only non weak
 * registry.
 */
const parents = new Set();
/**
 * Element coordinates that is constantly kept up to date.
 */
const coords = new WeakMap();
/**
 * Siblings of elements that have been removed from the dom.
 */
const siblings = new WeakMap();
/**
 * Animations that are currently running.
 */
const animations = new WeakMap();
/**
 * A map of existing intersection observers used to track element movements.
 */
const intersections = new WeakMap();
/**
 * Intervals for automatically checking the position of elements occasionally.
 */
const intervals = new WeakMap();
/**
 * The configuration options for each group of elements.
 */
const options = new WeakMap();
/**
 * Debounce counters by id, used to debounce calls to update positions.
 */
const debounces = new WeakMap();
/**
 * All parents that are currently enabled are tracked here.
 */
const enabled = new WeakSet();
/**
 * The document used to calculate transitions.
 */
let root;
/**
 * The root’s XY scroll positions.
 */
let scrollX = 0;
let scrollY = 0;
/**
 * Used to sign an element as the target.
 */
const TGT = "__aa_tgt";
/**
 * Used to sign an element as being part of a removal.
 */
const DEL = "__aa_del";
/**
 * Used to sign an element as being "new". When an element is removed from the
 * dom, but may cycle back in we can sign it with new to ensure the next time
 * it is recognized we consider it new.
 */
const NEW = "__aa_new";
/**
 * Callback for handling all mutations.
 * @param mutations - A mutation list
 */
const handleMutations = (mutations) => {
    const elements = getElements(mutations);
    // If elements is "false" that means this mutation that should be ignored.
    if (elements) {
        elements.forEach((el) => animate(el));
    }
};
/**
 *
 * @param entries - Elements that have been resized.
 */
const handleResizes = (entries) => {
    entries.forEach((entry) => {
        if (entry.target === root)
            updateAllPos();
        if (coords.has(entry.target))
            updatePos(entry.target);
    });
};
/**
 * Observe this elements position.
 * @param el - The element to observe the position of.
 */
function observePosition(el) {
    const oldObserver = intersections.get(el);
    oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.disconnect();
    let rect = coords.get(el);
    let invocations = 0;
    const buffer = 5;
    if (!rect) {
        rect = getCoords(el);
        coords.set(el, rect);
    }
    const { offsetWidth, offsetHeight } = root;
    const rootMargins = [
        rect.top - buffer,
        offsetWidth - (rect.left + buffer + rect.width),
        offsetHeight - (rect.top + buffer + rect.height),
        rect.left - buffer,
    ];
    const rootMargin = rootMargins
        .map((px) => `${-1 * Math.floor(px)}px`)
        .join(" ");
    const observer = new IntersectionObserver(() => {
        ++invocations > 1 && updatePos(el);
    }, {
        root,
        threshold: 1,
        rootMargin,
    });
    observer.observe(el);
    intersections.set(el, observer);
}
/**
 * Update the exact position of a given element.
 * @param el - An element to update the position of.
 */
function updatePos(el) {
    clearTimeout(debounces.get(el));
    const optionsOrPlugin = getOptions(el);
    const delay = isPlugin(optionsOrPlugin) ? 500 : optionsOrPlugin.duration;
    debounces.set(el, setTimeout(async () => {
        const currentAnimation = animations.get(el);
        try {
            await (currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.finished);
            coords.set(el, getCoords(el));
            observePosition(el);
        }
        catch {
            // ignore errors as the `.finished` promise is rejected when animations were cancelled
        }
    }, delay));
}
/**
 * Updates all positions that are currently being tracked.
 */
function updateAllPos() {
    clearTimeout(debounces.get(root));
    debounces.set(root, setTimeout(() => {
        parents.forEach((parent) => forEach(parent, (el) => lowPriority(() => updatePos(el))));
    }, 100));
}
/**
 * Its possible for a quick scroll or other fast events to get past the
 * intersection observer, so occasionally we need want "cold-poll" for the
 * latests and greatest position. We try to do this in the most non-disruptive
 * fashion possible. First we only do this ever couple seconds, staggard by a
 * random offset.
 * @param el - Element
 */
function poll(el) {
    setTimeout(() => {
        intervals.set(el, setInterval(() => lowPriority(updatePos.bind(null, el)), 2000));
    }, Math.round(2000 * Math.random()));
}
/**
 * Perform some operation that is non critical at some point.
 * @param callback
 */
function lowPriority(callback) {
    if (typeof requestIdleCallback === "function") {
        requestIdleCallback(() => callback());
    }
    else {
        requestAnimationFrame(() => callback());
    }
}
/**
 * The mutation observer responsible for watching each root element.
 */
let mutations;
/**
 * A resize observer, responsible for recalculating elements on resize.
 */
let resize;
/**
 * Ensure the browser is supported.
 */
const supportedBrowser = typeof window !== "undefined" && "ResizeObserver" in window;
/**
 * If this is in a browser, initialize our Web APIs
 */
if (supportedBrowser) {
    root = document.documentElement;
    mutations = new MutationObserver(handleMutations);
    resize = new ResizeObserver(handleResizes);
    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        scrollX = window.scrollX;
    });
    resize.observe(root);
}
/**
 * Retrieves all the elements that may have been affected by the last mutation
 * including ones that have been removed and are no longer in the DOM.
 * @param mutations - A mutation list.
 * @returns
 */
function getElements(mutations) {
    const observedNodes = mutations.reduce((nodes, mutation) => {
        return [
            ...nodes,
            ...Array.from(mutation.addedNodes),
            ...Array.from(mutation.removedNodes),
        ];
    }, []);
    // Short circuit if _only_ comment nodes are observed
    const onlyCommentNodesObserved = observedNodes.every((node) => node.nodeName === "#comment");
    if (onlyCommentNodesObserved)
        return false;
    return mutations.reduce((elements, mutation) => {
        // Short circuit if we find a purposefully deleted node.
        if (elements === false)
            return false;
        if (mutation.target instanceof Element) {
            target(mutation.target);
            if (!elements.has(mutation.target)) {
                elements.add(mutation.target);
                for (let i = 0; i < mutation.target.children.length; i++) {
                    const child = mutation.target.children.item(i);
                    if (!child)
                        continue;
                    if (DEL in child) {
                        return false;
                    }
                    target(mutation.target, child);
                    elements.add(child);
                }
            }
            if (mutation.removedNodes.length) {
                for (let i = 0; i < mutation.removedNodes.length; i++) {
                    const child = mutation.removedNodes[i];
                    if (DEL in child) {
                        return false;
                    }
                    if (child instanceof Element) {
                        elements.add(child);
                        target(mutation.target, child);
                        siblings.set(child, [
                            mutation.previousSibling,
                            mutation.nextSibling,
                        ]);
                    }
                }
            }
        }
        return elements;
    }, new Set());
}
/**
 * Assign the target to an element.
 * @param el - The root element
 * @param child
 */
function target(el, child) {
    if (!child && !(TGT in el))
        Object.defineProperty(el, TGT, { value: el });
    else if (child && !(TGT in child))
        Object.defineProperty(child, TGT, { value: el });
}
/**
 * Determines what kind of change took place on the given element and then
 * performs the proper animation based on that.
 * @param el - The specific element to animate.
 */
function animate(el) {
    var _a;
    const isMounted = el.isConnected;
    const preExisting = coords.has(el);
    if (isMounted && siblings.has(el))
        siblings.delete(el);
    if (animations.has(el)) {
        (_a = animations.get(el)) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    if (NEW in el) {
        add(el);
    }
    else if (preExisting && isMounted) {
        remain(el);
    }
    else if (preExisting && !isMounted) {
        remove(el);
    }
    else {
        add(el);
    }
}
/**
 * Removes all non-digits from a string and casts to a number.
 * @param str - A string containing a pixel value.
 * @returns
 */
function raw(str) {
    return Number(str.replace(/[^0-9.\-]/g, ""));
}
/**
 * Get the scroll offset of elements
 * @param el - Element
 * @returns
 */
function getScrollOffset(el) {
    let p = el.parentElement;
    while (p) {
        if (p.scrollLeft || p.scrollTop) {
            return { x: p.scrollLeft, y: p.scrollTop };
        }
        p = p.parentElement;
    }
    return { x: 0, y: 0 };
}
/**
 * Get the coordinates of elements adjusted for scroll position.
 * @param el - Element
 * @returns
 */
function getCoords(el) {
    const rect = el.getBoundingClientRect();
    const { x, y } = getScrollOffset(el);
    return {
        top: rect.top + y,
        left: rect.left + x,
        width: rect.width,
        height: rect.height,
    };
}
/**
 * Returns the width/height that the element should be transitioned between.
 * This takes into account box-sizing.
 * @param el - Element being animated
 * @param oldCoords - Old set of Coordinates coordinates
 * @param newCoords - New set of Coordinates coordinates
 * @returns
 */
function getTransitionSizes(el, oldCoords, newCoords) {
    let widthFrom = oldCoords.width;
    let heightFrom = oldCoords.height;
    let widthTo = newCoords.width;
    let heightTo = newCoords.height;
    const styles = getComputedStyle(el);
    const sizing = styles.getPropertyValue("box-sizing");
    if (sizing === "content-box") {
        const paddingY = raw(styles.paddingTop) +
            raw(styles.paddingBottom) +
            raw(styles.borderTopWidth) +
            raw(styles.borderBottomWidth);
        const paddingX = raw(styles.paddingLeft) +
            raw(styles.paddingRight) +
            raw(styles.borderRightWidth) +
            raw(styles.borderLeftWidth);
        widthFrom -= paddingX;
        widthTo -= paddingX;
        heightFrom -= paddingY;
        heightTo -= paddingY;
    }
    return [widthFrom, widthTo, heightFrom, heightTo].map(Math.round);
}
/**
 * Retrieves animation options for the current element.
 * @param el - Element to retrieve options for.
 * @returns
 */
function getOptions(el) {
    return TGT in el && options.has(el[TGT])
        ? options.get(el[TGT])
        : { duration: 250, easing: "ease-in-out" };
}
/**
 * Returns the target of a given animation (generally the parent).
 * @param el - An element to check for a target
 * @returns
 */
function getTarget(el) {
    if (TGT in el)
        return el[TGT];
    return undefined;
}
/**
 * Checks if animations are enabled or disabled for a given element.
 * @param el - Any element
 * @returns
 */
function isEnabled(el) {
    const target = getTarget(el);
    return target ? enabled.has(target) : false;
}
/**
 * Iterate over the children of a given parent.
 * @param parent - A parent element
 * @param callback - A callback
 */
function forEach(parent, ...callbacks) {
    callbacks.forEach((callback) => callback(parent, options.has(parent)));
    for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children.item(i);
        if (child) {
            callbacks.forEach((callback) => callback(child, options.has(child)));
        }
    }
}
/**
 * Always return tuple to provide consistent interface
 */
function getPluginTuple(pluginReturn) {
    if (Array.isArray(pluginReturn))
        return pluginReturn;
    return [pluginReturn];
}
/**
 * Determine if config is plugin
 */
function isPlugin(config) {
    return typeof config === "function";
}
/**
 * The element in question is remaining in the DOM.
 * @param el - Element to flip
 * @returns
 */
function remain(el) {
    const oldCoords = coords.get(el);
    const newCoords = getCoords(el);
    if (!isEnabled(el))
        return coords.set(el, newCoords);
    let animation;
    if (!oldCoords)
        return;
    const pluginOrOptions = getOptions(el);
    if (typeof pluginOrOptions !== "function") {
        const deltaX = oldCoords.left - newCoords.left;
        const deltaY = oldCoords.top - newCoords.top;
        const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords);
        const start = {
            transform: `translate(${deltaX}px, ${deltaY}px)`,
        };
        const end = {
            transform: `translate(0, 0)`,
        };
        if (widthFrom !== widthTo) {
            start.width = `${widthFrom}px`;
            end.width = `${widthTo}px`;
        }
        if (heightFrom !== heightTo) {
            start.height = `${heightFrom}px`;
            end.height = `${heightTo}px`;
        }
        animation = el.animate([start, end], {
            duration: pluginOrOptions.duration,
            easing: pluginOrOptions.easing,
        });
    }
    else {
        const [keyframes] = getPluginTuple(pluginOrOptions(el, "remain", oldCoords, newCoords));
        animation = new Animation(keyframes);
        animation.play();
    }
    animations.set(el, animation);
    coords.set(el, newCoords);
    animation.addEventListener("finish", updatePos.bind(null, el));
}
/**
 * Adds the element with a transition.
 * @param el - Animates the element being added.
 */
function add(el) {
    if (NEW in el)
        delete el[NEW];
    const newCoords = getCoords(el);
    coords.set(el, newCoords);
    const pluginOrOptions = getOptions(el);
    if (!isEnabled(el))
        return;
    let animation;
    if (typeof pluginOrOptions !== "function") {
        animation = el.animate([
            { transform: "scale(.98)", opacity: 0 },
            { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
            { transform: "scale(1)", opacity: 1 },
        ], {
            duration: pluginOrOptions.duration * 1.5,
            easing: "ease-in",
        });
    }
    else {
        const [keyframes] = getPluginTuple(pluginOrOptions(el, "add", newCoords));
        animation = new Animation(keyframes);
        animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", updatePos.bind(null, el));
}
/**
 * Clean up after removing an element from the dom.
 * @param el - Element being removed
 * @param styles - Optional styles that should be removed from the element.
 */
function cleanUp(el, styles) {
    var _a;
    el.remove();
    coords.delete(el);
    siblings.delete(el);
    animations.delete(el);
    (_a = intersections.get(el)) === null || _a === void 0 ? void 0 : _a.disconnect();
    setTimeout(() => {
        if (DEL in el)
            delete el[DEL];
        Object.defineProperty(el, NEW, { value: true, configurable: true });
        if (styles && el instanceof HTMLElement) {
            for (const style in styles) {
                el.style[style] = "";
            }
        }
    }, 0);
}
/**
 * Animates the removal of an element.
 * @param el - Element to remove
 */
function remove(el) {
    var _a;
    if (!siblings.has(el) || !coords.has(el))
        return;
    const [prev, next] = siblings.get(el);
    Object.defineProperty(el, DEL, { value: true, configurable: true });
    const finalX = window.scrollX;
    const finalY = window.scrollY;
    if (next && next.parentNode && next.parentNode instanceof Element) {
        next.parentNode.insertBefore(el, next);
    }
    else if (prev && prev.parentNode) {
        prev.parentNode.appendChild(el);
    }
    else {
        (_a = getTarget(el)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
    }
    if (!isEnabled(el))
        return cleanUp(el);
    const [top, left, width, height] = deletePosition(el);
    const optionsOrPlugin = getOptions(el);
    const oldCoords = coords.get(el);
    if (finalX !== scrollX || finalY !== scrollY) {
        adjustScroll(el, finalX, finalY, optionsOrPlugin);
    }
    let animation;
    let styleReset = {
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
        margin: "0",
        pointerEvents: "none",
        transformOrigin: "center",
        zIndex: "100",
    };
    if (!isPlugin(optionsOrPlugin)) {
        Object.assign(el.style, styleReset);
        animation = el.animate([
            {
                transform: "scale(1)",
                opacity: 1,
            },
            {
                transform: "scale(.98)",
                opacity: 0,
            },
        ], { duration: optionsOrPlugin.duration, easing: "ease-out" });
    }
    else {
        const [keyframes, options] = getPluginTuple(optionsOrPlugin(el, "remove", oldCoords));
        if ((options === null || options === void 0 ? void 0 : options.styleReset) !== false) {
            styleReset = (options === null || options === void 0 ? void 0 : options.styleReset) || styleReset;
            Object.assign(el.style, styleReset);
        }
        animation = new Animation(keyframes);
        animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", cleanUp.bind(null, el, styleReset));
}
/**
 * If the element being removed is at the very bottom of the page, and the
 * the page was scrolled into a space being "made available" by the element
 * that was removed, the page scroll will have jumped up some amount. We need
 * to offset the jump by the amount that the page was "automatically" scrolled
 * up. We can do this by comparing the scroll position before and after the
 * element was removed, and then offsetting by that amount.
 *
 * @param el - The element being deleted
 * @param finalX - The final X scroll position
 * @param finalY - The final Y scroll position
 * @param optionsOrPlugin - The options or plugin
 * @returns
 */
function adjustScroll(el, finalX, finalY, optionsOrPlugin) {
    const scrollDeltaX = scrollX - finalX;
    const scrollDeltaY = scrollY - finalY;
    const scrollBefore = document.documentElement.style.scrollBehavior;
    const scrollBehavior = getComputedStyle(root).scrollBehavior;
    if (scrollBehavior === "smooth") {
        document.documentElement.style.scrollBehavior = "auto";
    }
    window.scrollTo(window.scrollX + scrollDeltaX, window.scrollY + scrollDeltaY);
    if (!el.parentElement)
        return;
    const parent = el.parentElement;
    let lastHeight = parent.clientHeight;
    let lastWidth = parent.clientWidth;
    const startScroll = performance.now();
    // Here we use a manual scroll animation to keep the element using the same
    // easing and timing as the parent’s scroll animation.
    function smoothScroll() {
        requestAnimationFrame(() => {
            if (!isPlugin(optionsOrPlugin)) {
                const deltaY = lastHeight - parent.clientHeight;
                const deltaX = lastWidth - parent.clientWidth;
                if (startScroll + optionsOrPlugin.duration > performance.now()) {
                    window.scrollTo({
                        left: window.scrollX - deltaX,
                        top: window.scrollY - deltaY,
                    });
                    lastHeight = parent.clientHeight;
                    lastWidth = parent.clientWidth;
                    smoothScroll();
                }
                else {
                    document.documentElement.style.scrollBehavior = scrollBefore;
                }
            }
        });
    }
    smoothScroll();
}
/**
 * Determines the position of the element being removed.
 * @param el - The element being deleted
 * @returns
 */
function deletePosition(el) {
    const oldCoords = coords.get(el);
    const [width, , height] = getTransitionSizes(el, oldCoords, getCoords(el));
    let offsetParent = el.parentElement;
    while (offsetParent &&
        (getComputedStyle(offsetParent).position === "static" ||
            offsetParent instanceof HTMLBodyElement)) {
        offsetParent = offsetParent.parentElement;
    }
    if (!offsetParent)
        offsetParent = document.body;
    const parentStyles = getComputedStyle(offsetParent);
    const parentCoords = coords.get(offsetParent) || getCoords(offsetParent);
    const top = Math.round(oldCoords.top - parentCoords.top) -
        raw(parentStyles.borderTopWidth);
    const left = Math.round(oldCoords.left - parentCoords.left) -
        raw(parentStyles.borderLeftWidth);
    return [top, left, width, height];
}
/**
 * A function that automatically adds animation effects to itself and its
 * immediate children. Specifically it adds effects for adding, moving, and
 * removing DOM elements.
 * @param el - A parent element to add animations to.
 * @param options - An optional object of options.
 */
function autoAnimate(el, config = {}) {
    if (mutations && resize) {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isDisabledDueToReduceMotion = mediaQuery.matches &&
            !isPlugin(config) &&
            !config.disrespectUserMotionPreference;
        if (!isDisabledDueToReduceMotion) {
            enabled.add(el);
            if (getComputedStyle(el).position === "static") {
                Object.assign(el.style, { position: "relative" });
            }
            forEach(el, updatePos, poll, (element) => resize === null || resize === void 0 ? void 0 : resize.observe(element));
            if (isPlugin(config)) {
                options.set(el, config);
            }
            else {
                options.set(el, { duration: 250, easing: "ease-in-out", ...config });
            }
            mutations.observe(el, { childList: true });
            parents.add(el);
        }
    }
    return Object.freeze({
        parent: el,
        enable: () => {
            enabled.add(el);
        },
        disable: () => {
            enabled.delete(el);
        },
        isEnabled: () => enabled.has(el),
    });
}
/**
 * The vue directive.
 */
const vAutoAnimate = {
    mounted: (el, binding) => {
        autoAnimate(el, binding.value || {});
    },
    // ignore ssr see #96:
    getSSRProps: () => ({}),
};



;// ../../node_modules/@formkit/auto-animate/react/index.mjs



/**
 * AutoAnimate hook for adding dead-simple transitions and animations to react.
 * @param options - Auto animate options or a plugin
 * @returns
 */
function useAutoAnimate(options) {
    const [controller, setController] = (0,react.useState)();
    const memoizedOptions = (0,react.useMemo)(() => options, []);
    const element = (0,react.useCallback)((node) => {
        if (node instanceof HTMLElement) {
            setController(autoAnimate(node, memoizedOptions));
        }
        else {
            setController(undefined);
        }
    }, [memoizedOptions]);
    const setEnabled = (0,react.useCallback)((enabled) => {
        if (controller) {
            enabled ? controller.enable() : controller.disable();
        }
    }, [controller]);
    return [element, setEnabled];
}




/***/ })

};
;