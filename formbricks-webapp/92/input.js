exports.id = 92;
exports.ids = [92,9415];
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

/***/ 844333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(891616));else { var l, r; }}(this,(function(e){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(l,i,function(t){return e[t]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";function l(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t);var i=r(0),a=r.n(i),n=function(e){for(var t=0,r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return Math.abs(t)},c=function(e,t){return Math.floor(e/Math.pow(10,t)%10)},h=function(e,t){return!(c(e,t)%2)},o=function(e,t,r){var l=e%t;return r&&c(e,r)%2===0?-l:l},s=function(e,t,r){return t[e%r]};var f=function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,f=l(e,["name","colors","title","square","size"]),m=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:3},(function(e,i){return{color:s(r+i,t,l),translateX:o(r*(i+1),8,1),translateY:o(r*(i+1),8,2),scale:1.2+o(r*(i+1),4)/10,rotate:o(r*(i+1),360,1)}}))}(t,r),d=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},f),a&&i.createElement("title",null,t),i.createElement("mask",{id:d,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(d,")")},i.createElement("rect",{width:80,height:80,fill:m[0].color}),i.createElement("path",{filter:"url(#filter_".concat(d,")"),d:"M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",fill:m[1].color,transform:"translate("+m[1].translateX+" "+m[1].translateY+") rotate("+m[1].rotate+" 40 40) scale("+m[2].scale+")"}),i.createElement("path",{filter:"url(#filter_".concat(d,")"),style:{mixBlendMode:"overlay"},d:"M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",fill:m[2].color,transform:"translate("+m[2].translateX+" "+m[2].translateY+") rotate("+m[2].rotate+" 40 40) scale("+m[2].scale+")"})),i.createElement("defs",null,i.createElement("filter",{id:"filter_".concat(d),filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.createElement("feGaussianBlur",{stdDeviation:7,result:"effect1_foregroundBlur"}))))},m={pixel:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:64},(function(e,i){return s(r%(i+1),t,l)}))}(t,r),m=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),a&&i.createElement("title",null,t),i.createElement("mask",{id:m,"mask-type":"alpha",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(m,")")},i.createElement("rect",{width:10,height:10,fill:f[0]}),i.createElement("rect",{x:20,width:10,height:10,fill:f[1]}),i.createElement("rect",{x:40,width:10,height:10,fill:f[2]}),i.createElement("rect",{x:60,width:10,height:10,fill:f[3]}),i.createElement("rect",{x:10,width:10,height:10,fill:f[4]}),i.createElement("rect",{x:30,width:10,height:10,fill:f[5]}),i.createElement("rect",{x:50,width:10,height:10,fill:f[6]}),i.createElement("rect",{x:70,width:10,height:10,fill:f[7]}),i.createElement("rect",{y:10,width:10,height:10,fill:f[8]}),i.createElement("rect",{y:20,width:10,height:10,fill:f[9]}),i.createElement("rect",{y:30,width:10,height:10,fill:f[10]}),i.createElement("rect",{y:40,width:10,height:10,fill:f[11]}),i.createElement("rect",{y:50,width:10,height:10,fill:f[12]}),i.createElement("rect",{y:60,width:10,height:10,fill:f[13]}),i.createElement("rect",{y:70,width:10,height:10,fill:f[14]}),i.createElement("rect",{x:20,y:10,width:10,height:10,fill:f[15]}),i.createElement("rect",{x:20,y:20,width:10,height:10,fill:f[16]}),i.createElement("rect",{x:20,y:30,width:10,height:10,fill:f[17]}),i.createElement("rect",{x:20,y:40,width:10,height:10,fill:f[18]}),i.createElement("rect",{x:20,y:50,width:10,height:10,fill:f[19]}),i.createElement("rect",{x:20,y:60,width:10,height:10,fill:f[20]}),i.createElement("rect",{x:20,y:70,width:10,height:10,fill:f[21]}),i.createElement("rect",{x:40,y:10,width:10,height:10,fill:f[22]}),i.createElement("rect",{x:40,y:20,width:10,height:10,fill:f[23]}),i.createElement("rect",{x:40,y:30,width:10,height:10,fill:f[24]}),i.createElement("rect",{x:40,y:40,width:10,height:10,fill:f[25]}),i.createElement("rect",{x:40,y:50,width:10,height:10,fill:f[26]}),i.createElement("rect",{x:40,y:60,width:10,height:10,fill:f[27]}),i.createElement("rect",{x:40,y:70,width:10,height:10,fill:f[28]}),i.createElement("rect",{x:60,y:10,width:10,height:10,fill:f[29]}),i.createElement("rect",{x:60,y:20,width:10,height:10,fill:f[30]}),i.createElement("rect",{x:60,y:30,width:10,height:10,fill:f[31]}),i.createElement("rect",{x:60,y:40,width:10,height:10,fill:f[32]}),i.createElement("rect",{x:60,y:50,width:10,height:10,fill:f[33]}),i.createElement("rect",{x:60,y:60,width:10,height:10,fill:f[34]}),i.createElement("rect",{x:60,y:70,width:10,height:10,fill:f[35]}),i.createElement("rect",{x:10,y:10,width:10,height:10,fill:f[36]}),i.createElement("rect",{x:10,y:20,width:10,height:10,fill:f[37]}),i.createElement("rect",{x:10,y:30,width:10,height:10,fill:f[38]}),i.createElement("rect",{x:10,y:40,width:10,height:10,fill:f[39]}),i.createElement("rect",{x:10,y:50,width:10,height:10,fill:f[40]}),i.createElement("rect",{x:10,y:60,width:10,height:10,fill:f[41]}),i.createElement("rect",{x:10,y:70,width:10,height:10,fill:f[42]}),i.createElement("rect",{x:30,y:10,width:10,height:10,fill:f[43]}),i.createElement("rect",{x:30,y:20,width:10,height:10,fill:f[44]}),i.createElement("rect",{x:30,y:30,width:10,height:10,fill:f[45]}),i.createElement("rect",{x:30,y:40,width:10,height:10,fill:f[46]}),i.createElement("rect",{x:30,y:50,width:10,height:10,fill:f[47]}),i.createElement("rect",{x:30,y:60,width:10,height:10,fill:f[48]}),i.createElement("rect",{x:30,y:70,width:10,height:10,fill:f[49]}),i.createElement("rect",{x:50,y:10,width:10,height:10,fill:f[50]}),i.createElement("rect",{x:50,y:20,width:10,height:10,fill:f[51]}),i.createElement("rect",{x:50,y:30,width:10,height:10,fill:f[52]}),i.createElement("rect",{x:50,y:40,width:10,height:10,fill:f[53]}),i.createElement("rect",{x:50,y:50,width:10,height:10,fill:f[54]}),i.createElement("rect",{x:50,y:60,width:10,height:10,fill:f[55]}),i.createElement("rect",{x:50,y:70,width:10,height:10,fill:f[56]}),i.createElement("rect",{x:70,y:10,width:10,height:10,fill:f[57]}),i.createElement("rect",{x:70,y:20,width:10,height:10,fill:f[58]}),i.createElement("rect",{x:70,y:30,width:10,height:10,fill:f[59]}),i.createElement("rect",{x:70,y:40,width:10,height:10,fill:f[60]}),i.createElement("rect",{x:70,y:50,width:10,height:10,fill:f[61]}),i.createElement("rect",{x:70,y:60,width:10,height:10,fill:f[62]}),i.createElement("rect",{x:70,y:70,width:10,height:10,fill:f[63]})))},bauhaus:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,f=e.size,m=l(e,["name","colors","title","square","size"]),d=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:4},(function(e,i){return{color:s(r+i,t,l),translateX:o(r*(i+1),40-(i+17),1),translateY:o(r*(i+1),40-(i+17),2),rotate:o(r*(i+1),360),isSquare:h(r,2)}}))}(t,r),u=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:f,height:f},m),a&&i.createElement("title",null,t),i.createElement("mask",{id:u,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(u,")")},i.createElement("rect",{width:80,height:80,fill:d[0].color}),i.createElement("rect",{x:10,y:30,width:80,height:d[1].isSquare?80:10,fill:d[1].color,transform:"translate("+d[1].translateX+" "+d[1].translateY+") rotate("+d[1].rotate+" 40 40)"}),i.createElement("circle",{cx:40,cy:40,fill:d[2].color,r:16,transform:"translate("+d[2].translateX+" "+d[2].translateY+")"}),i.createElement("line",{x1:0,y1:40,x2:80,y2:40,strokeWidth:2,stroke:d[3].color,transform:"translate("+d[3].translateX+" "+d[3].translateY+") rotate("+d[3].rotate+" 40 40)"})))},ring:function(e){var t=e.name,r=e.colors,i=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(t),l=e&&e.length,i=Array.from({length:5},(function(t,i){return s(r+i,e,l)})),a=[];return a[0]=i[0],a[1]=i[1],a[2]=i[1],a[3]=i[2],a[4]=i[2],a[5]=i[3],a[6]=i[3],a[7]=i[0],a[8]=i[4],a}(r,t),m=a.a.useId();return a.a.createElement("svg",Object.assign({viewBox:"0 0 90 90",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),i&&a.a.createElement("title",null,t),a.a.createElement("mask",{id:m,maskUnits:"userSpaceOnUse",x:0,y:0,width:90,height:90},a.a.createElement("rect",{width:90,height:90,rx:c?void 0:180,fill:"#FFFFFF"})),a.a.createElement("g",{mask:"url(#".concat(m,")")},a.a.createElement("path",{d:"M0 0h90v45H0z",fill:f[0]}),a.a.createElement("path",{d:"M0 45h90v45H0z",fill:f[1]}),a.a.createElement("path",{d:"M83 45a38 38 0 00-76 0h76z",fill:f[2]}),a.a.createElement("path",{d:"M83 45a38 38 0 01-76 0h76z",fill:f[3]}),a.a.createElement("path",{d:"M77 45a32 32 0 10-64 0h64z",fill:f[4]}),a.a.createElement("path",{d:"M77 45a32 32 0 11-64 0h64z",fill:f[5]}),a.a.createElement("path",{d:"M71 45a26 26 0 00-52 0h52z",fill:f[6]}),a.a.createElement("path",{d:"M71 45a26 26 0 01-52 0h52z",fill:f[7]}),a.a.createElement("circle",{cx:45,cy:45,r:23,fill:f[8]})))},beam:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,f=e.size,m=l(e,["name","colors","title","square","size"]),d=function(e,t){var r,l=n(e),i=t&&t.length,a=s(l,t,i),c=o(l,10,1),f=c<5?c+4:c,m=o(l,10,2),d=m<5?m+4:m;return{wrapperColor:a,faceColor:(r=a,"#"===r.slice(0,1)&&(r=r.slice(1)),(299*parseInt(r.substr(0,2),16)+587*parseInt(r.substr(2,2),16)+114*parseInt(r.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),backgroundColor:s(l+13,t,i),wrapperTranslateX:f,wrapperTranslateY:d,wrapperRotate:o(l,360),wrapperScale:1+o(l,3)/10,isMouthOpen:h(l,2),isCircle:h(l,1),eyeSpread:o(l,5),mouthSpread:o(l,3),faceRotate:o(l,10,3),faceTranslateX:f>6?f/2:o(l,8,1),faceTranslateY:d>6?d/2:o(l,7,2)}}(t,r),u=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:f,height:f},m),a&&i.createElement("title",null,t),i.createElement("mask",{id:u,maskUnits:"userSpaceOnUse",x:0,y:0,width:36,height:36},i.createElement("rect",{width:36,height:36,rx:c?void 0:72,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(u,")")},i.createElement("rect",{width:36,height:36,fill:d.backgroundColor}),i.createElement("rect",{x:"0",y:"0",width:36,height:36,transform:"translate("+d.wrapperTranslateX+" "+d.wrapperTranslateY+") rotate("+d.wrapperRotate+" 18 18) scale("+d.wrapperScale+")",fill:d.wrapperColor,rx:d.isCircle?36:6}),i.createElement("g",{transform:"translate("+d.faceTranslateX+" "+d.faceTranslateY+") rotate("+d.faceRotate+" 18 18)"},d.isMouthOpen?i.createElement("path",{d:"M15 "+(19+d.mouthSpread)+"c2 1 4 1 6 0",stroke:d.faceColor,fill:"none",strokeLinecap:"round"}):i.createElement("path",{d:"M13,"+(19+d.mouthSpread)+" a1,0.75 0 0,0 10,0",fill:d.faceColor}),i.createElement("rect",{x:14-d.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:d.faceColor}),i.createElement("rect",{x:20+d.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:d.faceColor}))))},sunset:function(e){var t=e.name,r=e.colors,a=e.title,c=e.square,h=e.size,o=l(e,["name","colors","title","square","size"]),f=function(e,t){var r=n(e),l=t&&t.length;return Array.from({length:4},(function(e,i){return s(r+i,t,l)}))}(t,r),m=t.replace(/\s/g,""),d=i.useId();return i.createElement("svg",Object.assign({viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:h,height:h},o),a&&i.createElement("title",null,t),i.createElement("mask",{id:d,maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},i.createElement("rect",{width:80,height:80,rx:c?void 0:160,fill:"#FFFFFF"})),i.createElement("g",{mask:"url(#".concat(d,")")},i.createElement("path",{fill:"url(#gradient_paint0_linear_"+m+")",d:"M0 0h80v40H0z"}),i.createElement("path",{fill:"url(#gradient_paint1_linear_"+m+")",d:"M0 40h80v40H0z"})),i.createElement("defs",null,i.createElement("linearGradient",{id:"gradient_paint0_linear_"+m,x1:40,y1:0,x2:40,y2:40,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:f[0]}),i.createElement("stop",{offset:1,stopColor:f[1]})),i.createElement("linearGradient",{id:"gradient_paint1_linear_"+m,x1:40,y1:40,x2:40,y2:80,gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:f[2]}),i.createElement("stop",{offset:1,stopColor:f[3]}))))},marble:f},d={geometric:"beam",abstract:"bauhaus"},u=function(e){var t=e.variant,r=void 0===t?"marble":t,i=e.colors,n=void 0===i?["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]:i,c=e.name,h=void 0===c?"Clara Barton":c,o=e.title,s=void 0!==o&&o,u=e.size,g=e.square,w=void 0!==g&&g,E=l(e,["variant","colors","name","title","size","square"]),p=m[d[r]||r]||f;return a.a.createElement(p,Object.assign({colors:n,name:h,title:s,size:u,square:w},E))};t.default=u}])}));

/***/ }),

/***/ 537925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Blend)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Blend = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Blend", [
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "7",
            key: "p2h5vp"
        }
    ],
    [
        "circle",
        {
            cx: "15",
            cy: "15",
            r: "7",
            key: "19ennj"
        }
    ]
]);
 //# sourceMappingURL=blend.js.map


/***/ }),

/***/ 427434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Blocks)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Blocks = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Blocks", [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "path",
        {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
            key: "1fpvtg"
        }
    ]
]);
 //# sourceMappingURL=blocks.js.map


/***/ }),

/***/ 401633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CirclePlus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CirclePlus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CirclePlus", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
]);
 //# sourceMappingURL=circle-plus.js.map


/***/ }),

/***/ 990082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleUser)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleUser = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleUser", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ],
    [
        "path",
        {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
            key: "154egf"
        }
    ]
]);
 //# sourceMappingURL=circle-user.js.map


/***/ }),

/***/ 638817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Cog)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Cog = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Cog", [
    [
        "path",
        {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }
    ],
    [
        "path",
        {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 22v-2",
            key: "1osdcq"
        }
    ],
    [
        "path",
        {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }
    ],
    [
        "path",
        {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }
    ],
    [
        "path",
        {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }
    ],
    [
        "path",
        {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }
    ],
    [
        "path",
        {
            d: "M14 12h8",
            key: "4f43i9"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }
    ],
    [
        "path",
        {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }
    ],
    [
        "path",
        {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }
    ],
    [
        "path",
        {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }
    ]
]);
 //# sourceMappingURL=cog.js.map


/***/ }),

/***/ 695164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CreditCard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CreditCard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CreditCard", [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
]);
 //# sourceMappingURL=credit-card.js.map


/***/ }),

/***/ 453779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GlobeLock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const GlobeLock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("GlobeLock", [
    [
        "path",
        {
            d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
            key: "qkt0x6"
        }
    ],
    [
        "path",
        {
            d: "M2 12h8.5",
            key: "ovaggd"
        }
    ],
    [
        "path",
        {
            d: "M20 6V4a2 2 0 1 0-4 0v2",
            key: "1of5e8"
        }
    ],
    [
        "rect",
        {
            width: "8",
            height: "5",
            x: "14",
            y: "6",
            rx: "1",
            key: "1fmf51"
        }
    ]
]);
 //# sourceMappingURL=globe-lock.js.map


/***/ }),

/***/ 65433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LogOut)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LogOut = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
 //# sourceMappingURL=log-out.js.map


/***/ }),

/***/ 117059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageCircleQuestion)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircleQuestion = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MessageCircleQuestion", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=message-circle-question.js.map


/***/ }),

/***/ 76446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
 //# sourceMappingURL=message-circle.js.map


/***/ }),

/***/ 593517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftClose)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PanelLeftClose = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("PanelLeftClose", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m16 15-3-3 3-3",
            key: "14y99z"
        }
    ]
]);
 //# sourceMappingURL=panel-left-close.js.map


/***/ }),

/***/ 168185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const PanelLeftOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("PanelLeftOpen", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m14 9 3 3-3 3",
            key: "8010ee"
        }
    ]
]);
 //# sourceMappingURL=panel-left-open.js.map


/***/ }),

/***/ 133328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Rocket)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58303);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Rocket = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
 //# sourceMappingURL=rocket.js.map


/***/ }),

/***/ 580685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(652793);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Key = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Key", [
    [
        "path",
        {
            d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
            key: "g0fldk"
        }
    ],
    [
        "path",
        {
            d: "m21 2-9.6 9.6",
            key: "1j0ho8"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "15.5",
            r: "5.5",
            key: "yqb3hr"
        }
    ]
]);
 //# sourceMappingURL=key.js.map


/***/ }),

/***/ 910330:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* eslint-disable import/no-extraneous-dependencies */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "A", ({
    enumerable: true,
    get: function() {
        return _serveredge.registerServerReference;
    }
}));
const _serveredge = __webpack_require__(672771);

//# sourceMappingURL=server-reference.js.map

/***/ }),

/***/ 438658:
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
    arrayBufferToString: function() {
        return arrayBufferToString;
    },
    decrypt: function() {
        return decrypt;
    },
    encrypt: function() {
        return encrypt;
    },
    getActionEncryptionKey: function() {
        return getActionEncryptionKey;
    },
    getClientReferenceManifestForRsc: function() {
        return getClientReferenceManifestForRsc;
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
const _invarianterror = __webpack_require__(260233);
const _apppaths = __webpack_require__(789322);
const _workasyncstorageexternal = __webpack_require__(529294);
let __next_loaded_action_key;
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
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, _apppaths.normalizeAppPath)(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw new _invarianterror.InvariantError(`Missing Client Reference Manifest for ${workStore.route}.`);
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new _invarianterror.InvariantError('Missing manifest for Server Actions.');
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new _invarianterror.InvariantError('Missing encryption key for Server Actions');
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map


/***/ }),

/***/ 208706:
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
__webpack_require__(47598);
const _serveredge = __webpack_require__(672771);
const _clientedge = __webpack_require__(979625);
const _nodewebstreamshelper = __webpack_require__(886023);
const _encryptionutils = __webpack_require__(438658);
const _workunitasyncstorageexternal = __webpack_require__(663033);
const isEdgeRuntime = "nodejs" === 'edge';
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
/**
 * Encrypt the serialized string with the action id as the salt. Add a prefix to
 * later ensure that the payload is correctly decrypted, similar to a checksum.
 */ async function encodeActionBoundArg(actionId, arg) {
    const key = await (0, _encryptionutils.getActionEncryptionKey)();
    if (key === undefined) {
        throw new Error(`Missing encryption key for Server Action. This is a bug in Next.js`);
    }
    // Get 16 random bytes as iv.
    const randomBytes = new Uint8Array(16);
    _workunitasyncstorageexternal.workUnitAsyncStorage.exit(()=>crypto.getRandomValues(randomBytes));
    const ivValue = (0, _encryptionutils.arrayBufferToString)(randomBytes.buffer);
    const encrypted = await (0, _encryptionutils.encrypt)(key, randomBytes, textEncoder.encode(actionId + arg));
    return btoa(ivValue + (0, _encryptionutils.arrayBufferToString)(encrypted));
}
async function encryptActionBoundArgs(actionId, args) {
    const { clientModules } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Create an error before any asynchrounous calls, to capture the original
    // call stack in case we need it when the serialization errors.
    const error = new Error();
    Error.captureStackTrace(error, encryptActionBoundArgs);
    let didCatchError = false;
    // Using Flight to serialize the args into a string.
    const serialized = await (0, _nodewebstreamshelper.streamToString)((0, _serveredge.renderToReadableStream)(args, clientModules, {
        onError (err) {
            // We're only reporting one error at a time, starting with the first.
            if (didCatchError) {
                return;
            }
            didCatchError = true;
            // Use the original error message together with the previously created
            // stack, because err.stack is a useless Flight Server call stack.
            error.message = err instanceof Error ? err.message : String(err);
        }
    }));
    if (didCatchError) {
        if (false) {}
        throw error;
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore) {
        return encodeActionBoundArg(actionId, serialized);
    }
    const prerenderResumeDataCache = (0, _workunitasyncstorageexternal.getPrerenderResumeDataCache)(workUnitStore);
    const renderResumeDataCache = (0, _workunitasyncstorageexternal.getRenderResumeDataCache)(workUnitStore);
    const cacheKey = actionId + serialized;
    const cachedEncrypted = (prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.get(cacheKey)) ?? (renderResumeDataCache == null ? void 0 : renderResumeDataCache.encryptedBoundArgs.get(cacheKey));
    if (cachedEncrypted) {
        return cachedEncrypted;
    }
    const cacheSignal = workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : undefined;
    cacheSignal == null ? void 0 : cacheSignal.beginRead();
    const encrypted = await encodeActionBoundArg(actionId, serialized);
    cacheSignal == null ? void 0 : cacheSignal.endRead();
    prerenderResumeDataCache == null ? void 0 : prerenderResumeDataCache.encryptedBoundArgs.set(cacheKey, encrypted);
    return encrypted;
}
async function decryptActionBoundArgs(actionId, encrypted) {
    const { edgeRscModuleMapping, rscModuleMapping } = (0, _encryptionutils.getClientReferenceManifestForRsc)();
    // Decrypt the serialized string with the action id as the salt.
    const decrypted = await decodeActionBoundArg(actionId, await encrypted);
    // Using Flight to deserialize the args from the string.
    const deserialized = await (0, _clientedge.createFromReadableStream)(new ReadableStream({
        start (controller) {
            controller.enqueue(textEncoder.encode(decrypted));
            controller.close();
        }
    }), {
        serverConsumerManifest: {
            // moduleLoading must be null because we don't want to trigger preloads of ClientReferences
            // to be added to the current execution. Instead, we'll wait for any ClientReference
            // to be emitted which themselves will handle the preloading.
            moduleLoading: null,
            moduleMap: isEdgeRuntime ? edgeRscModuleMapping : rscModuleMapping,
            serverModuleMap: (0, _encryptionutils.getServerModuleMap)()
        }
    });
    return deserialized;
}

//# sourceMappingURL=encryption.js.map

/***/ })

};
;