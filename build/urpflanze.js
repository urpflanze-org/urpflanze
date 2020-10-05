(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Urpflanze"] = factory();
	else
		root["Urpflanze"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/base64-js/index.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/base64-js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/buffer/index.js":
/*!**********************************************!*\
  !*** (webpack)/node_modules/buffer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/ieee754/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/ieee754/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/isarray/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/isarray/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/setimmediate/setImmediate.js":
/*!***********************************************************!*\
  !*** (webpack)/node_modules/setimmediate/setImmediate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/timers-browserify/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./dist/Utilites.js":
/*!**************************!*\
  !*** ./dist/Utilites.js ***!
  \**************************/
/*! exports provided: parseFunction, cancelablePromise, now, toDegrees, toRadians, toArray, clamp, relativeClamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFunction", function() { return parseFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelablePromise", function() { return cancelablePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return toDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeClamp", function() { return relativeClamp; });
/**
 * @ignore
 */
const parseFunction = {
    suffix: '$fn:',
    parse: (data) => {
        return typeof data === 'function' && data.name !== 'SimpleAnimation' ? parseFunction.suffix + data.toString() : data;
    },
    unparse: (data) => {
        return typeof data === 'string' && data.indexOf(parseFunction.suffix) === 0
            ? eval(data.substr(parseFunction.suffix.length))
            : data;
    },
};
/**
 * Create Cancellable Promise
 *
 * @ignore
 * @template T
 * @param {Promise<T>} promise
 * @returns {ICancelablePromise<T>}
 */
function cancelablePromise(promise) {
    let resolved = false;
    let canceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise
            .then(val => {
            resolved = true;
            canceled ? reject('canceled') : resolve(val);
        })
            .catch(error => {
            resolved = true;
            canceled ? reject('canceled') : reject(error);
        });
    });
    return {
        promise: wrappedPromise,
        resolved: () => resolved,
        canceled: () => canceled,
        cancel: () => {
            canceled = true;
        },
    };
}
// isDef: (object: any): boolean => typeof object !== 'undefined' && object !== null,
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
function now() {
    return performance.now();
}
// aOr: (...args: Array<any>): any => {
// 	for (let i = 0; i < args.length; i++) if (Utilities.isDef(args[i])) return args[i]
// },
/**
 * Convert number from radians to degrees
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
function toDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * Urpflanze.toRadians(180) // 3.141592653589793
 * ```
 *
 * @category Utilities
 * @param {number} degrees
 * @returns {number}
 */
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
// perf: (name: string, callback: any, log: boolean = false): number => {
// 	const t1 = now()
// 	callback()
// 	const t2 = now()
// 	log && console.log('perf ' + name + ': ' + (t2 - t1))
// 	return t2 - t1
// }
/**
 * Force value to array
 *
 * @ignore
 * @param {(number | Array<number>)} t
 * @returns {Array<number>}
 */
function toArray(t) {
    return Array.isArray(t) ? t : [t, t];
}
/**
 * Return number between min and max
 *
 * @category Utilities
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, 1.2) // 1
 * ```
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
function clamp(min, max, value) {
    return value <= min ? min : value >= max ? max : value;
}
/**
 * Map number between refMin e refMax from min and max
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
function relativeClamp(refMin, refMax, value, toMin, toMax) {
    return clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin);
}
//# sourceMappingURL=Utilites.js.map

/***/ }),

/***/ "./dist/core/Context.js":
/*!******************************!*\
  !*** ./dist/core/Context.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_scene_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Vec2 */ "./dist/core/math/Vec2.js");



const noises = {
    random: new simplex_noise__WEBPACK_IMPORTED_MODULE_0___default.a(Math.random),
};
/**
 * Utilities function passed to <a href="[base_url]/ISceneChildPropArguments">ISceneChildPropArguments</a>
 *
 * @category Core.Utilities
 */
const Context = {
    /**
     * SimplexNoise <a href="https://www.npmjs.com/package/simplex-noise">url</a>
     *
     * @param {string} [seed='random']
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     * @returns {number}
     */
    noise: (seed = 'random', x = 0, y = 0, z = 0) => {
        if (!noises[seed]) {
            noises[seed] = new simplex_noise__WEBPACK_IMPORTED_MODULE_0___default.a(seed);
        }
        return noises[seed].noise3D(x, y, z);
    },
    /**
     * Return angle (atan) from offset (or center).
     * Offset is array between [-1, -1] and [1, 1]
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition, offsetFromCenter = [0, 0]) => {
        var _a;
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const matrixOffset = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create(offsetFromCenter);
            const center_matrix = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create((repetition.count_col - 1) / 2, (repetition.count_row - 1) / 2);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
            const x = repetition.current_col - 1 - center_matrix[0];
            const y = repetition.current_row - 1 - center_matrix[1];
            return x === 0 ? 0 : Math.atan(y / x);
        }
        return (_a = repetition.current_angle) !== null && _a !== void 0 ? _a : 0;
    },
    /**
     * Return angle (atan2, 4 quadrants) from offset (or center).
     * Offset is array between [-1, -1] and [1, 1]
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition, offsetFromCenter = [0, 0]) => {
        var _a;
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const matrixOffset = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create(offsetFromCenter);
            const center_matrix = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create((repetition.count_col - 1) / 2, (repetition.count_row - 1) / 2);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
            const x = repetition.current_col - 1 - center_matrix[0];
            const y = repetition.current_row - 1 - center_matrix[1];
            return x === 0 ? 0 : Math.atan2(y, x);
        }
        return (_a = repetition.current_angle) !== null && _a !== void 0 ? _a : 0;
    },
    /**
     * Return distance from offset (or center)
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const matrixOffset = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create(offsetFromCenter);
            const center_matrix = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create((repetition.count_col - 1) / 2, (repetition.count_row - 1) / 2);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
            const current = _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].create(repetition.current_col - 1, repetition.current_row - 1);
            return _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].distance(current, center_matrix);
        }
        return 1;
    },
    /**
     * Get value percentage of scene width
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percW: (percentage, sceneChild) => {
        return sceneChild && sceneChild.scene ? (sceneChild.scene.width * percentage) / 100 : percentage;
    },
    /**
     * Get value percentage of scene height
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percH: (percentage, sceneChild) => {
        return sceneChild && sceneChild.scene ? (sceneChild.scene.height * percentage) / 100 : percentage;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (Context);
//# sourceMappingURL=Context.js.map

/***/ }),

/***/ "./dist/core/Group.js":
/*!****************************!*\
  !*** ./dist/core/Group.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./dist/core/Scene.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/ShapeBase */ "./dist/core/shapes/ShapeBase.js");



/**
 * Group used for add multiple SceneChild with same props
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @class Group
 */
class Group extends _SceneChild__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Creates an instance of Group
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof Group
     */
    constructor(settings = {}) {
        settings.type = 'Group';
        super(settings);
        this.children = [];
        ['id', 'name', 'order', 'type'].forEach((prop) => {
            if (prop in settings)
                delete settings[prop];
        });
        this.props = settings;
    }
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStatic() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    }
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStaticIndexed() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    }
    add(item) {
        const rawItemProps = item.getProps();
        Object.keys(this.props).forEach((propKey) => {
            if (typeof rawItemProps[propKey] === 'undefined')
                item.setProp(propKey, this.props[propKey]);
        });
        item.order =
            typeof item.order !== 'undefined'
                ? item.order
                : this.children.length > 0
                    ? Math.max.apply(this, this.children.map(e => e.order || 0)) + 1
                    : 0;
        this.scene && _Scene__WEBPACK_IMPORTED_MODULE_0__["default"].propagateToChilden(item, this.scene);
        this.children.push(item);
        this.sortChildren();
    }
    /**
     * Sort children
     *
     * @memberof Group
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    }
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    getChildren() {
        return this.children;
    }
    /**
     * Find scene child from id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(id_or_name);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    remove(index) {
        if (index >= 0 && index < this.children.length) {
            const removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    }
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
            }
        }
    }
    /**
     * Generate children buffers
     *
     * @param {number} indexing_id
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof Group
     */
    generate(indexing_id, bDirectSceneChild = false, parent_prop_arguments) {
        this.children.forEach(item => item.generate(indexing_id, bDirectSceneChild, parent_prop_arguments));
    }
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.children.forEach(item => item.clearBuffer(bClearIndexed, false));
        if (this.scene && bPropagateToParents) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
        // if (bPropagateToParents && this.scene)
        // {
        //     const parents = this.scene.getParentsOfSceneChild(this)
        //     parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, true, false)
        // }
        // if (bPropagateToChildren)
        // {
        //     this.children.forEach(sceneChild => sceneChild.clearBuffer(bClearIndexed, false, true))
        // }
    }
    /**
     * Set a single or multiple props
     *
     * @abstract
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    setProp(key, value) {
        if (typeof key === 'object')
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        else
            this.props[key] = value;
        this.children.forEach(item => item.setProp(key, value));
    }
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(prop_arguments) {
        return this.children.map(sceneChild => sceneChild.getBufferLength(prop_arguments)).reduce((p, c) => p + c, 0);
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    getBuffer() {
        const buffers = this.children
            .map(item => item.getBuffer())
            .filter(b => b !== undefined);
        const size = buffers.reduce((curr_value, buffer) => curr_value + buffer.length, 0);
        if (size > 0) {
            const result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY_BUFFER;
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<ISceneChildStreamIndexing> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer() {
        const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined);
        return [].concat.apply(null, indexed);
    }
    /**
     * Call strem on children
     *
     * @param {TStreamCallback} callback
     * @memberof Group
     */
    stream(callback) {
        this.children.forEach(item => item.stream(callback));
    }
    /**
     * Index vertex buffer
     *
     * @private
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof Group
     */
    index(buffer, parent) {
        for (let i = 0, len = this.children.length; i < len; i++)
            this.children[i].index(buffer, parent);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Group);
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "./dist/core/Scene.js":
/*!****************************!*\
  !*** ./dist/core/Scene.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./dist/core/Group.js");
/* harmony import */ var _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/Vec2 */ "./dist/core/math/Vec2.js");




/**
 * Container for all SceneChild.
 * The main purpose is to manage the drwaing order and update the buffers of the sceneChild present in it
 *
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     * You can see the default values ​​in the property definitions
     *
     * @param {ISceneSettingsInterface} [settings={}]
     * @memberof Scene
     */
    constructor(settings = {}) {
        /**
         * Logical number, the render will take care
         * of defining the unit of measure
         *
         * @type {number}
         * @memberof Scene
         */
        this.width = 400;
        /**
         * Logical number, the render will take care
         * of defining the unit of measure
         *
         * @type {number}
         * @memberof Scene
         */
        this.height = 400;
        /**
         * Default background color (black)
         *
         * @type {string}
         * @memberof Scene
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         *
         * @type {string}
         * @memberof Scene
         */
        this.mainColor = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
         *
         * @type {number}
         * @memberof Scene
         */
        this.current_time = 0;
        if (typeof settings.width !== 'undefined')
            this.width = settings.width;
        if (typeof settings.height !== 'undefined')
            this.height = settings.height;
        if (typeof settings.background !== 'undefined')
            this.background = settings.background;
        if (typeof settings.mainColor !== 'undefined')
            this.mainColor = settings.mainColor;
        this.children = [];
        this.center = _math_Vec2__WEBPACK_IMPORTED_MODULE_3__["default"].create(this.width / 2, this.height / 2);
    }
    /**
     * Resize the scene dimension
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width, height = width) {
        this.width = width;
        this.height = height;
        this.center = _math_Vec2__WEBPACK_IMPORTED_MODULE_3__["default"].create(this.width / 2, this.height / 2);
        this.children.forEach(sceneChild => sceneChild.clearBuffer(true, false));
    }
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [at_time] time in ms
     * @memberof Scene
     */
    update(at_time) {
        this.current_time = at_time;
        this.children.forEach((child) => child.generate(this.current_time, true));
    }
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {TStreamCallback} callback
     * @memberof Scene
     */
    stream(callback) {
        this.children.forEach(sceneChild => sceneChild.stream(callback));
    }
    /*
     |--------------------------------------------------------------------------
     |  SceneChild
     |--------------------------------------------------------------------------
     */
    /**
     * Return a list of children
     *
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getChildren() {
        return this.children;
    }
    /**
     * Add SceneChild to Scene, pass `order` for drawing priorities
     *
     * @param {SceneChild} item
     * @param {number} [order]
     * @memberof Scene
     */
    add(item, order) {
        item.order =
            typeof order !== 'undefined'
                ? order
                : typeof item.order !== 'undefined'
                    ? item.order
                    : this.children.length > 0
                        ? Math.max.apply(this, this.children.map(e => e.order)) + 1
                        : 0;
        Scene.propagateToChilden(item, this);
        this.children.push(item);
        item.clearBuffer(true, false);
        this.sortChildren();
    }
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
    }
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(id_or_name) {
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(id_or_name);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    }
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    removeChildren() {
        this.children = [];
    }
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} id_or_name
     * @memberof Scene
     */
    removeFromId(id_or_name) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === id_or_name || this.children[i].name === id_or_name) {
                this.children.splice(i, 1);
                return;
            }
    }
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    isFirstLevelChild(sceneChild) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == sceneChild.id)
                return true;
        const parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length == 1 && parents[0] instanceof _Group__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getParentsOfSceneChild(sceneChild) {
        const result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    }
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @static
     * @param {(Scene | SceneChild)} current
     * @param {SceneChild} sceneChild
     * @param {(Array<SceneChild | Scene>)} [parents=[]]
     * @returns {(Array<SceneChild | Scene> | null)}
     * @memberof Scene
     */
    static getParentsOfSceneChild(current, sceneChild, parents = []) {
        let result;
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__["default"] && current.shape) {
                const tmp_parents = parents.slice();
                tmp_parents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmp_parents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            const children = current.getChildren();
            parents.push(current);
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents)))
                    return result;
            }
            parents.pop();
        }
        return null;
    }
    /**
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    static walk(callback, current) {
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            if (callback(current) === false)
                return false;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__["default"] && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            const children = current.getChildren();
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if (Scene.walk(callback, child) === false)
                    return false;
            }
        }
    }
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(sceneChild, scene) {
        sceneChild.scene = scene;
        if (sceneChild instanceof _Group__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            sceneChild.children.forEach((item) => {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__["default"] && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Scene);
//# sourceMappingURL=Scene.js.map

/***/ }),

/***/ "./dist/core/SceneChild.js":
/*!*********************************!*\
  !*** ./dist/core/SceneChild.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
let __id = 0;
/**
 * The element to be added into a scene.
 * Preserve settings (props), drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
class SceneChild {
    /**
     * Creates an instance of SceneChild.
     * Base values ​​will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     * @memberof SceneChild
     */
    constructor(settings) {
        var _a;
        this.id = (_a = settings.id) !== null && _a !== void 0 ? _a : ++__id;
        this.type = settings.type || 'SceneChild';
        this.name = settings.name || this.type + '_' + this.id;
        this.data = settings.data || {};
        this.props = {};
    }
    /**
     * Find this or form or children.
     * Overridden by classes that extend it
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof SceneChild
     */
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        return null;
    }
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     * @memberof SceneChild
     */
    getProps() {
        return this.props;
    }
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof SceneChild
     */
    getProp(key, prop_arguments, default_value) {
        var _a;
        return (_a = this.props[key]) !== null && _a !== void 0 ? _a : default_value;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key, value) {
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (SceneChild);
//# sourceMappingURL=SceneChild.js.map

/***/ }),

/***/ "./dist/core/math/Vec2.js":
/*!********************************!*\
  !*** ./dist/core/math/Vec2.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");

/**
 * Temporany matrix
 *
 * @internal
 */
const MATRIX = new Array(4);
const create_matrix = () => {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
/**
 * Create new vertex
 *
 * @param {TArray | number} [x=0]
 * @param {number} [y]
 * @returns {TArray}
 */
const create = (x = 0, y) => {
    const out = new Array(2);
    if (typeof x === 'number') {
        out[0] = x;
        out[1] = y !== null && y !== void 0 ? y : x;
    }
    else {
        out[0] = x[0];
        out[1] = x[1];
    }
    return out;
};
const distance = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const length = (vec) => Math.hypot(vec[0], vec[1]);
const angle = (a, b) => {
    const m = length(a) * length(b);
    return Math.acos(Object(_Utilites__WEBPACK_IMPORTED_MODULE_0__["clamp"])(-1, 1, m && dot(a, b) / m));
};
const skewX = (vec, m) => {
    vec[0] += Math.tan(m) * vec[1];
};
const skewY = (vec, m) => {
    vec[1] += Math.tan(m) * vec[0];
};
const squeezeX = (vec, m) => {
    vec[1] += vec[1] * (vec[0] * -m);
};
const squeezeY = (vec, m) => {
    vec[0] += vec[0] * (vec[1] * m);
};
const rotate = (vec, MATRIX, pointToRotate) => {
    const p0 = vec[0] - pointToRotate[0];
    const p1 = vec[1] - pointToRotate[1];
    vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + pointToRotate[0];
    vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + pointToRotate[1];
};
/**
 * RotateX vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateX = (vec, pointToRotate, rad) => {
    MATRIX[0] = 1;
    MATRIX[1] = 0;
    MATRIX[2] = 0;
    MATRIX[3] = Math.cos(rad);
    rotate(vec, MATRIX, pointToRotate);
};
/**
 * RotateY vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateY = (vec, pointToRotate, rad) => {
    MATRIX[0] = Math.cos(rad);
    MATRIX[1] = 0;
    MATRIX[2] = 0;
    MATRIX[3] = 1;
    rotate(vec, MATRIX, pointToRotate);
};
/**
 * RotateZ vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateZ = (vec, pointToRotate, rad) => {
    MATRIX[0] = Math.cos(rad);
    MATRIX[1] = -Math.sin(rad);
    MATRIX[2] = Math.sin(rad);
    MATRIX[3] = Math.cos(rad);
    rotate(vec, MATRIX, pointToRotate);
};
/**
 * Translate vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const translate = (vec, to) => {
    vec[0] += to[0];
    vec[1] += to[1];
};
/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const scale = (vec, to) => {
    vec[0] *= to[0];
    vec[1] *= to[1];
};
/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const divide = (vec, to) => {
    vec[0] /= to[0];
    vec[1] /= to[1];
};
const applyTransformation = (vec, rotateX, rotateY, rotateZ, translate, scale) => {
    const matrix = create_matrix();
    if (rotateX !== 0) {
        const s = Math.sin(rotateX);
        const c = Math.cos(rotateX);
        matrix[5] = c;
        matrix[6] = -s;
        matrix[9] = s;
        matrix[10] = c;
    }
    if (rotateY !== 0) {
        const s = Math.sin(rotateY);
        const c = Math.cos(rotateY);
        matrix[0] = c;
        matrix[2] = s;
        matrix[8] = -s;
        matrix[10] = matrix[10] + c;
    }
};
/**
 * Vec to string
 *
 * @param {TArray} vec
 * @return {string}
 */
const toString = (vec) => `x: ${vec[0]}, y: ${vec[1]}`;
/*
 * Vertex [0, 0]
 */
const ZERO = Array.from([0, 0]);
/*
 * Vertex [1, 1]
 */
const ONE = Array.from([1, 1]);
/* harmony default export */ __webpack_exports__["default"] = ({
    create,
    distance,
    dot,
    length,
    angle,
    squeezeX,
    squeezeY,
    skewX,
    skewY,
    rotateX,
    rotateY,
    rotateZ,
    translate,
    scale,
    divide,
    toString,
    ZERO,
    ONE,
});
//# sourceMappingURL=Vec2.js.map

/***/ }),

/***/ "./dist/core/shapes/Shape.js":
/*!***********************************!*\
  !*** ./dist/core/shapes/Shape.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Scene */ "./dist/core/Scene.js");



/**
 * @category Core.Shapes
 */
class Shape extends _ShapeBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     * @memberof Shape
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'Shape';
        super(settings);
        if (settings.shape instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this.shape = settings.shape;
        }
        else {
            console.warn('[Urpflanze:Shape] requires the shape property to be instance of SceneChild,\nYou passed:', settings.shape);
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStatic() {
        return super.isStatic() && (this.shape ? this.shape.isStatic() : true);
    }
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStaticIndexed() {
        return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true);
    }
    /**
     * Find shape by id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Shape
     */
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        if (this.shape)
            return this.shape.find(id_or_name);
        return null;
    }
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Shape
     */
    getBufferLength(prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        const child_buffer_length = this.shape ? this.shape.getBufferLength(prop_arguments) : 0;
        return child_buffer_length * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    generateBuffer(generate_id, prop_arguments) {
        if (this.shape) {
            this.shape.generate(generate_id, false, prop_arguments);
            return this.shape.getBuffer() || Shape.EMPTY_BUFFER;
        }
        return Shape.EMPTY_BUFFER;
    }
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true, true);
        }
        else {
            this.scene && _Scene__WEBPACK_IMPORTED_MODULE_2__["default"].propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true, true);
        }
    }
    /**
     *
     *
     * @protected
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    addIndex(buffer, frame_length, current_repetition, parent) {
        if (this.shape) {
            const current = {
                shape: this,
                buffer_length: frame_length,
                parent,
                repetition: current_repetition,
            };
            this.shape.index(buffer, current);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Shape);
//# sourceMappingURL=Shape.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeBase.js":
/*!***************************************!*\
  !*** ./dist/core/shapes/ShapeBase.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ "./dist/core/Context.js");
/* harmony import */ var _types_scene_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/scene-child */ "./dist/core/types/scene-child.js");




/**
 * Shape Base
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @extends {SceneChild}
 */
class ShapeBase extends _SceneChild__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Random function
     *
     * @private
     * @type {(seedrandom.prng | undefined)}
     * @memberof ShapeBase
     */
    // private rand_prng: seedrandom.prng | undefined
    /**
     * Creates an instance of ShapeBase.
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof ShapeBase
     */
    constructor(settings = {}) {
        super(settings);
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @protected
         * @type {number}
         * @memberof ShapeBase
         */
        this.generate_id = -1;
        this.props = {
            distance: settings.distance,
            repetitions: settings.repetitions,
            rotateX: settings.rotateX,
            rotateY: settings.rotateY,
            rotateZ: settings.rotateZ,
            skewX: settings.skewX,
            skewY: settings.skewY,
            squeezeX: settings.squeezeX,
            squeezeY: settings.squeezeY,
            displace: settings.displace,
            translate: settings.translate,
            scale: settings.scale,
            rotationOrigin: settings.rotationOrigin,
        };
        this.bUseParent = !!settings.bUseParent;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStatic() {
        const props = this.props;
        return (typeof props.distance !== 'function' &&
            typeof props.repetitions !== 'function' &&
            typeof props.rotateX !== 'function' &&
            typeof props.rotateY !== 'function' &&
            typeof props.rotateZ !== 'function' &&
            typeof props.displace !== 'function' &&
            typeof props.skewX !== 'function' &&
            typeof props.skewY !== 'function' &&
            typeof props.squeezeX !== 'function' &&
            typeof props.squeezeY !== 'function' &&
            typeof props.translate !== 'function' &&
            typeof props.scale !== 'function' &&
            typeof props.rotationOrigin !== 'function');
    }
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed() {
        return typeof this.props.repetitions !== 'function';
    }
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeBase
     */
    getProp(key, prop_arguments, default_value) {
        var _a;
        let attribute = this.props[key];
        if (typeof attribute == 'function') {
            prop_arguments = prop_arguments || ShapeBase.EMPTY_PROP_ARGUMENTS;
            if (typeof prop_arguments.shape === 'undefined')
                prop_arguments.shape = this;
            if (typeof prop_arguments.context === 'undefined')
                prop_arguments.context = _Context__WEBPACK_IMPORTED_MODULE_2__["default"];
            prop_arguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.current_time) || 0;
            attribute = attribute(prop_arguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? default_value : attribute;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeBase
     */
    setProp(key, value, bClearIndexed = false) {
        if (typeof key == 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        }
        this.clearBuffer(bClearIndexed);
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     * @memberof ShapeBase
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.buffer = undefined;
        if (bClearIndexed)
            this.indexed_buffer = undefined;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    }
    /**
     * Get random number
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    // public rand(): number
    // {
    //     if (!this.rand_prng)
    //     {
    //         this.rand_prng = seedrandom(this.props.randomSeed || this.id + '')
    //     }
    //     return this.rand_prng()
    // }
    /**
     * Generate shape buffer
     *
     * @param {number} generate_id generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof ShapeBase
     */
    generate(generate_id, bDirectSceneChild = false, parent_prop_arguments) {
        var _a, _b, _c;
        if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent))))
            return;
        this.generate_id = generate_id;
        const repetition = ShapeBase.getEmptyRepetition();
        // const bRandomRepetitions: boolean = typeof this.props.randomSeed !== 'undefined'
        const repetitions = this.getProp('repetitions', { parent: parent_prop_arguments, repetition, time: 1, context: _Context__WEBPACK_IMPORTED_MODULE_2__["default"] }, 1);
        // const repetition_type = bRandomRepetitions ? RepetitionType.Random : Array.isArray(repetitions) ? RepetitionType.Matrix : RepetitionType.Ring
        const repetition_type = Array.isArray(repetitions) ? _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Matrix : _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring;
        const repetition_count = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
        const repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        repetition.count = repetition_count;
        repetition.count_col = repetition_col_count;
        repetition.count_row = repetition_row_count;
        repetition.type = repetition_type;
        const prop_arguments = {
            repetition,
            context: _Context__WEBPACK_IMPORTED_MODULE_2__["default"],
            time: ((_c = this.scene) === null || _c === void 0 ? void 0 : _c.current_time) || 0,
            shape: this,
            data: this.data,
            parent: parent_prop_arguments,
        };
        this.single_repetition_buffer_length = new Uint16Array(repetition_count);
        let total_buffer_length = 0;
        // this.rand_prng = bRandomRepetitions ? seedrandom(this.props.randomSeed as string) : undefined
        const buffers = [];
        let current_index = 0;
        const center_matrix = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create((repetition_col_count - 1) / 2, (repetition_row_count - 1) / 2);
        for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
            for (let current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                repetition.current_index = current_index + 1;
                repetition.current_offset = repetition.current_index / repetition.count;
                repetition.current_angle =
                    repetition_type === _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0;
                repetition.current_col = current_col_repetition + 1;
                repetition.current_col_offset = repetition.current_col / repetition.count_col;
                repetition.current_row = current_row_repetition + 1;
                repetition.current_row_offset = repetition.current_row / repetition.count_row;
                const distance = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.getProp('distance', prop_arguments, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ZERO));
                const displace = this.getProp('displace', prop_arguments, 0);
                const scale = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.getProp('scale', prop_arguments, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ONE));
                const translate = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.getProp('translate', prop_arguments, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ZERO));
                const skewX = this.getProp('skewX', prop_arguments, 0);
                const skewY = this.getProp('skewY', prop_arguments, 0);
                const squeezeX = this.getProp('squeezeX', prop_arguments, 0);
                const squeezeY = this.getProp('squeezeY', prop_arguments, 0);
                const rotateX = this.getProp('rotateX', prop_arguments, 0);
                const rotateY = this.getProp('rotateY', prop_arguments, 0);
                const rotateZ = this.getProp('rotateZ', prop_arguments, 0);
                const rotationOrigin = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.getProp('rotationOrigin', prop_arguments, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ZERO));
                // const rotationOrigin = Vec2.ZERO
                const buffer = this.generateBuffer(generate_id, prop_arguments);
                const buffer_length = buffer.length;
                buffers[current_index] = new Float32Array(buffer_length);
                this.single_repetition_buffer_length[current_index] = buffer_length;
                total_buffer_length += buffer_length;
                let offset;
                switch (repetition_type) {
                    case _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring:
                        offset = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(distance[0], 0);
                        _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].rotateZ(offset, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ZERO, repetition.current_angle + displace);
                        break;
                    case _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Matrix:
                        offset = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(distance[0] * (current_col_repetition - center_matrix[0]), distance[1] * (current_row_repetition - center_matrix[1]));
                        break;
                    // case RepetitionType.Random:
                    //     offset = Vec2.create(
                    //         (distance[0] * 2) * this.rand() - distance[1],
                    //         (distance[1] * 2) * this.rand() - distance[0]
                    //     )
                    //     break
                }
                for (let buffer_index = 0; buffer_index < buffer_length; buffer_index += 2) {
                    const vertex = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(buffer[buffer_index], buffer[buffer_index + 1]);
                    this.applyVertexTransform(vertex);
                    squeezeX !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].squeezeX(vertex, squeezeX);
                    squeezeY !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].squeezeY(vertex, squeezeY);
                    rotateX !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].rotateX(vertex, rotationOrigin, rotateX);
                    rotateY !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].rotateY(vertex, rotationOrigin, rotateY);
                    rotateZ !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].rotateZ(vertex, rotationOrigin, rotateZ);
                    skewX !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].skewX(vertex, skewX);
                    skewY !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].skewY(vertex, skewY);
                    (scale[0] != 1 || scale[1] != 1) && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].scale(vertex, scale);
                    (translate[0] != 0 || translate[1] != 0) && _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].translate(vertex, translate);
                    if (repetition_type === _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring) {
                        _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].rotateZ(vertex, _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].ZERO, repetition.current_angle + displace);
                    }
                    _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].translate(vertex, offset);
                    if (bDirectSceneChild) {
                        vertex[0] += this.scene.center[0];
                        vertex[1] += this.scene.center[1];
                    }
                    buffers[current_index][buffer_index] = vertex[0];
                    buffers[current_index][buffer_index + 1] = vertex[1];
                }
            }
        }
        this.buffer = new Float32Array(total_buffer_length);
        for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        if (bDirectSceneChild && (!this.indexed_buffer || !this.bStaticIndexed))
            this.index((this.indexed_buffer = []));
    }
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapeBase
     */
    applyVertexTransform(vertex) { }
    /**
     * Get number of repetitions
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getRepetitionCount() {
        var _a;
        let repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0]) : repetitions;
    }
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    getBuffer() {
        return this.buffer;
    }
    /**
     * Return indexed buffer
     *
     * @returns {(Array<ISceneChildStreamIndexing> | undefined)}
     * @memberof ShapeBase
     */
    getIndexedBuffer() {
        return this.indexed_buffer;
    }
    /**
     * Return Array of single repetition buffer length
     *
     * @returns {Uint16Array}
     * @memberof ShapeBase
     */
    getSingleRepetitionBufferLength() {
        return this.single_repetition_buffer_length;
    }
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
    stream(callback) {
        if (this.scene && this.buffer && this.indexed_buffer) {
            for (let i = 0, j = 0, len = this.indexed_buffer.length; i < len; i++) {
                const current_indexing = this.indexed_buffer[i];
                const prop_arguments = {
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    context: _Context__WEBPACK_IMPORTED_MODULE_2__["default"],
                    time: 0,
                    parent: current_indexing.parent,
                    data: current_indexing.shape.data,
                };
                const fillColor = current_indexing.shape.getProp('fillColor', prop_arguments);
                const lineWidth = current_indexing.shape.getProp('lineWidth', prop_arguments, fillColor ? undefined : 1);
                const strokeColor = current_indexing.shape.getProp('strokeColor', prop_arguments, fillColor ? undefined : this.scene.mainColor);
                const streamArguments = {
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    buffer: this.buffer,
                    buffer_length: current_indexing.buffer_length,
                    current_buffer_index: j,
                    current_shape_index: i,
                    total_shapes: len,
                    lineWidth,
                    strokeColor,
                    fillColor,
                };
                callback(streamArguments);
                j += current_indexing.buffer_length;
            }
        }
    }
    /**
     * Index vertex buffer
     *
     * @public
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof Shape
     */
    index(buffer, parent) {
        var _a, _b;
        const shape_buffer = this.getBuffer();
        if (shape_buffer) {
            const repetitions = this.getProp('repetitions', {
                parent,
                time: 1,
                repetition: ShapeBase.getEmptyRepetition(),
                context: _Context__WEBPACK_IMPORTED_MODULE_2__["default"],
            }, 1);
            // const bRandomRepetitions: boolean = typeof this.props.randomSeed !== 'undefined'
            // this.rand_prng = bRandomRepetitions ? seedrandom(this.props.randomSeed as string) : undefined
            const repetition_type = Array.isArray(repetitions) ? _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Matrix : _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring;
            const repetition_count = Array.isArray(repetitions)
                ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
                : repetitions;
            const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
            const repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
            // const frame_buffer_length = shape_buffer.length / repetition_count
            let current_index = 0;
            for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
                for (let current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                    const repetition = {
                        current_index: current_index + 1,
                        current_offset: (current_index + 1) / repetition_count,
                        current_angle: repetition_type === _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0,
                        count: repetition_count,
                        count_col: repetition_col_count,
                        count_row: repetition_row_count,
                        current_col: current_col_repetition + 1,
                        current_col_offset: (current_col_repetition + 1) / repetition_col_count,
                        current_row: current_row_repetition + 1,
                        current_row_offset: (current_row_repetition + 1) / repetition_row_count,
                        type: repetition_type,
                    };
                    // random_offset: bRandomRepetitions ? Vec2.create(this.rand(), this.rand()) : Vec2.create(0, 0)
                    this.addIndex(buffer, this.single_repetition_buffer_length[current_index], repetition, parent);
                }
            }
        }
    }
}
/**
 * Empty buffer
 *
 * @static
 * @type {Float32Array}
 * @memberof ShapeBase
 */
ShapeBase.EMPTY_BUFFER = new Float32Array(0);
/**
 * Empty Repetition
 *
 * @static
 * @memberof ShapeLoop
 */
ShapeBase.getEmptyRepetition = () => ({
    current_index: 1,
    current_offset: 1,
    current_angle: 0,
    current_col: 1,
    current_row: 1,
    current_col_offset: 1,
    current_row_offset: 1,
    type: _types_scene_child__WEBPACK_IMPORTED_MODULE_3__["ERepetitionType"].Ring,
    // random_offset: [0, 0],
    count: 1,
    count_col: 1,
    count_row: 1,
});
/**
 * Empty Prop Arguments
 *
 * @static
 * @type {ISceneChildPropArguments}
 * @memberof ShapeBase
 */
ShapeBase.EMPTY_PROP_ARGUMENTS = {
    time: 0,
    context: _Context__WEBPACK_IMPORTED_MODULE_2__["default"],
    repetition: ShapeBase.getEmptyRepetition(),
};
/* harmony default export */ __webpack_exports__["default"] = (ShapeBase);
//# sourceMappingURL=ShapeBase.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeBuffer.js":
/*!*****************************************!*\
  !*** ./dist/core/shapes/ShapeBuffer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 * @category Core.Shapes
 */
class ShapeBuffer extends _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        settings.type = settings.type || 'ShapeBuffer';
        settings.bAdaptBuffer = settings.bAdaptBuffer || _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
        super(settings);
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else
            this.shape = Float32Array.from(settings.shape);
        this.shape_buffer =
            this.isAdapted() != _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None
                ? _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"].adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.shape_buffer =
            this.isAdapted() != _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None
                ? _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"].adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
    }
    /**
     * Return length of buffer
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength() {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape_buffer.length * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    generateBuffer(generate_id, prop_arguments) {
        this.bindSideLength(prop_arguments);
        if (this.vertexCallback) {
            const buffer_length = this.shape_buffer.length;
            const points_length = buffer_length / 2;
            const buffer = Float32Array.from(this.shape_buffer);
            for (let i = 0, j = 0; i < buffer_length; i += 2, j++) {
                const vertex = [buffer[i], buffer[i + 1]];
                this.vertexCallback(vertex, prop_arguments, j, points_length);
                buffer[i] = vertex[0];
                buffer[i + 1] = vertex[1];
            }
            return buffer;
        }
        return this.shape_buffer;
    }
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape) {
        this.shape = shape;
        this.clearBuffer(true);
    }
    subdivide(level = 1) {
        let subdivided = this.shape;
        if (subdivided)
            for (let i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided, this.bCloseShape);
        subdivided && this.setShape(subdivided);
    }
    static subdivide(shape, bClosed = true) {
        if (shape && shape.length) {
            const shape_len = shape.length;
            const subdivided = new Float32Array(shape_len * 2 - (bClosed ? 0 : 2));
            for (let i = 0; i < shape_len; i += 2) {
                if (i === 0) {
                    subdivided[0] = shape[0];
                    subdivided[1] = shape[1];
                }
                else {
                    const px = shape[i - 2];
                    const py = shape[i - 1];
                    const x = shape[i];
                    const y = shape[i + 1];
                    const nx = (x + px) / 2;
                    const ny = (y + py) / 2;
                    subdivided[(i - 1) * 2] = nx;
                    subdivided[(i - 1) * 2 + 1] = ny;
                    subdivided[i * 2] = x;
                    subdivided[i * 2 + 1] = y;
                }
                if (bClosed) {
                    subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2;
                    subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2;
                }
            }
            return subdivided;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (ShapeBuffer);
//# sourceMappingURL=ShapeBuffer.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeLoop.js":
/*!***************************************!*\
  !*** ./dist/core/shapes/ShapeLoop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context */ "./dist/core/Context.js");
/* harmony import */ var _types_scene_child__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");






/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop extends _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}, bPreventGeneration = false) {
        settings.type = settings.type || 'ShapeLoop';
        super(settings);
        this.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat('bAdaptBuffer');
        this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            this.loop = {
                start: 0,
                end: ShapeLoop.PI2,
                inc: ShapeLoop.PI2 / 30,
                vertex: () => _math_Vec2__WEBPACK_IMPORTED_MODULE_2__["default"].ZERO,
            };
            this.bStaticLoop = this.isStaticLoop();
            this.bStatic = this.isStatic();
            this.bStaticIndexed = this.isStaticIndexed();
        }
    }
    /**
     * Check if loop_buffer is static
     *
     * @returns {boolean}
     * @memberof ShapeLoop
     */
    isStaticLoop() {
        // if (typeof this.vertexCallback === 'function') return false
        if (this.shapeLoopPropsDependencies.indexOf('vertexCallback') >= 0 && typeof this.vertexCallback === 'function')
            return false;
        if (this.shapeLoopPropsDependencies.indexOf('prop_arguments') >= 0)
            return false;
        for (let i = 0, len = this.shapeLoopPropsDependencies.length; i < len; i++)
            if (typeof this.props[this.shapeLoopPropsDependencies[i]] === 'function')
                return false;
        return true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStatic() {
        return this.bStaticLoop && super.isStatic();
    }
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed() {
        // let start = this.props.loop?.start ?? this.loop.start
        // let end = this.props.loop?.end ?? this.loop.end
        // let inc = this.props.loop?.inc ?? this.loop.inc
        // return typeof start !== 'function' && typeof end !== 'function' &&
        //         typeof inc !== 'function' && super.isStaticIndexed()
        return this.bStaticLoop && super.isStaticIndexed();
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.loop_buffer = undefined;
        }
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof IShapeLoopProps | IShapeLoopProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeLoop
     */
    setProp(key, value) {
        let bClearIndexed = false;
        key = typeof key === 'string' ? { [key]: value } : key;
        for (let i = this.shapeLoopPropsDependencies.length - 1; i >= 0; i--) {
            if (this.shapeLoopPropsDependencies[i] in key) {
                // this.props.loop = undefined
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in key) {
            key.loop = Object.assign(Object.assign({}, this.props.loop), key.loop);
            bClearIndexed = true;
        }
        super.setProp(key, value, bClearIndexed);
    }
    /**
     * Get prop
     *
     * @param {keyof IShapeLoopProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeLoop
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        if (this.bStaticLoop && this.loop_buffer && this.loop_buffer.length > 0)
            return this.loop_buffer.length * this.getRepetitionCount();
        const { repetition } = this.getLoop(prop_arguments);
        return this.getRepetitionCount() * repetition * 2;
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    generateBuffer(generate_id, prop_arguments) {
        this.bindSideLength(prop_arguments);
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(prop_arguments);
        if (typeof this.loop_buffer === 'undefined')
            this.loop_buffer = this.generateLoopBuffer(prop_arguments);
        return this.loop_buffer;
    }
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    generateLoopBuffer(prop_arguments) {
        const { start, end, inc, repetition } = this.getLoop(prop_arguments);
        const getVertex = (this.props.loop && this.props.loop.vertex ? this.props.loop.vertex : this.loop.vertex);
        const shape_loop = {
            current_index: 1,
            current_offset: 0,
            current_angle: 0,
            current_col: 1,
            current_row: 1,
            current_col_offset: 0,
            current_row_offset: 0,
            type: _types_scene_child__WEBPACK_IMPORTED_MODULE_4__["ERepetitionType"].Loop,
            // random_offset: [0, 0],
            count: repetition,
            count_col: 1,
            count_row: 1,
        };
        const vertex_length = shape_loop.count;
        prop_arguments.shape_loop = shape_loop;
        const buffer = new Float32Array(vertex_length * 2);
        for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
            const angle = start + inc * i;
            shape_loop.current_angle = angle >= end ? end : angle;
            shape_loop.current_index = i + 1;
            shape_loop.current_offset = shape_loop.current_index / shape_loop.count;
            const vertex = Float32Array.from(getVertex(shape_loop.current_angle, prop_arguments));
            this.vertexCallback && this.vertexCallback(vertex, prop_arguments, i, vertex_length);
            buffer[j] = vertex[0];
            buffer[j + 1] = vertex[1];
        }
        return this.bAdaptBuffer != _types_shape_base__WEBPACK_IMPORTED_MODULE_5__["EShapePrimitiveAdaptMode"].None
            ? _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"].adaptBuffer(buffer, this.bAdaptBuffer)
            : buffer;
    }
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    getLoop(prop_arguments = _ShapeBase__WEBPACK_IMPORTED_MODULE_1__["default"].EMPTY_PROP_ARGUMENTS) {
        var _a, _b, _c, _d, _e, _f, _g;
        prop_arguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.current_time) || 0;
        let start = (_c = (_b = this.props.loop) === null || _b === void 0 ? void 0 : _b.start) !== null && _c !== void 0 ? _c : this.loop.start;
        let end = (_e = (_d = this.props.loop) === null || _d === void 0 ? void 0 : _d.end) !== null && _e !== void 0 ? _e : this.loop.end;
        let inc = (_g = (_f = this.props.loop) === null || _f === void 0 ? void 0 : _f.inc) !== null && _g !== void 0 ? _g : this.loop.inc;
        start = (typeof start === 'function' ? start(prop_arguments) : start);
        end = (typeof end === 'function' ? end(prop_arguments) : end);
        inc = (typeof inc === 'function' ? inc(prop_arguments) : inc);
        const shape_loop_repetition = Math.ceil((end - start) / inc);
        return { start, end, inc, repetition: shape_loop_repetition < 0 ? 0 : shape_loop_repetition };
    }
    /**
     * Set shape
     *
     * @param {(IShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    setShape(loop) {
        this.setProp('loop', loop);
    }
}
/**
 * PI2
 *
 * @static
 * @type {number}
 * @memberof ShapeLoop
 */
ShapeLoop.PI2 = Math.PI * 2;
/**
 * PI div 2
 *
 * @static
 * @type {number}
 * @memberof ShapeLoop
 */
ShapeLoop.PId2 = Math.PI / 2;
/**
 * Empty Prop Arguments
 *
 * @static
 * @type {ISceneChildPropArguments}
 * @memberof ShapeBase
 */
ShapeLoop.EMPTY_PROP_ARGUMENTS = {
    time: 1,
    context: _Context__WEBPACK_IMPORTED_MODULE_3__["default"],
    repetition: _ShapeBase__WEBPACK_IMPORTED_MODULE_1__["default"].getEmptyRepetition(),
    shape_loop: {
        type: _types_scene_child__WEBPACK_IMPORTED_MODULE_4__["ERepetitionType"].Loop,
        current_index: 0,
        current_offset: 0,
        current_angle: 0,
        current_row: 0,
        current_col: 0,
        current_col_offset: 0,
        current_row_offset: 0,
        count: 0,
        count_col: 0,
        count_row: 0,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (ShapeLoop);
//# sourceMappingURL=ShapeLoop.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapePrimitive.js":
/*!********************************************!*\
  !*** ./dist/core/shapes/ShapePrimitive.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");



/**
 * @category Core.Abstract
 */
class ShapePrimitive extends _ShapeBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        var _a, _b, _c;
        super(settings);
        this.props.sideLength = (_a = settings.sideLength) !== null && _a !== void 0 ? _a : [50, 50];
        this.sideLength = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(typeof settings.sideLength === 'number' || Array.isArray(settings.sideLength) ? settings.sideLength : [50, 50]);
        this.props.fillColor = settings.fillColor;
        this.props.lineWidth = settings.lineWidth;
        this.props.strokeColor = settings.strokeColor;
        this.bAdaptBuffer = (_b = settings.bAdaptBuffer) !== null && _b !== void 0 ? _b : _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].None;
        this.bCloseShape = (_c = settings.bCloseShape) !== null && _c !== void 0 ? _c : true;
        this.vertexCallback = settings.vertexCallback;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic() {
        return (typeof this.props.sideLength !==
            'function' /* && typeof this.vertexCallback !== 'function' <- set bStatic to false if vertexCallback as dynamic */ &&
            super.isStatic());
    }
    /**
     * Get prop
     *
     * @param {keyof IShapePrimitiveProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    getProp(key, prop_arguments, default_value) {
        super.getProp(key, prop_arguments, default_value);
    }
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    bindSideLength(prop_arguments) {
        this.sideLength = _math_Vec2__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.getProp('sideLength', prop_arguments, [50, 50]));
    }
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapePrimitive
     */
    applyVertexTransform(vertex) {
        vertex[0] *= this.sideLength[0];
        vertex[1] *= this.sideLength[1];
    }
    /**
     * Return bCloseShape
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed() {
        return this.bCloseShape;
    }
    /**
     * Set bCloseShape
     *
     * @param {boolean} bCloseShape
     * @memberof ShapePrimitive
     */
    setClosed(bCloseShape) {
        this.bCloseShape = bCloseShape;
    }
    /**
     * Return bAdaptBuffer
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    isAdapted() {
        return this.bAdaptBuffer;
    }
    /**
     * Set bAdaptBuffer
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    setAdapted(bAdapted) {
        this.bAdaptBuffer = bAdapted;
        this.clearBuffer(true);
    }
    /**
     *
     *
     * @protected
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    addIndex(buffer, frame_length, current_repetition, parent) {
        const current = {
            shape: this,
            buffer_length: frame_length,
            parent,
            repetition: current_repetition,
        };
        buffer.push(current);
    }
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer) {
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            const x = buffer[i];
            const y = buffer[i + 1];
            if (x > maxX)
                maxX = x;
            else if (x < minX)
                minX = x;
            if (y > maxY)
                maxY = y;
            else if (y < minY)
                minY = y;
        }
        return {
            x: minX,
            y: minY,
            cx: (minX + maxX) / 2,
            cy: (minY + maxY) / 2,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    /**
     * Return adapted buffer between [-1,-1] and [1,1]
     *
     * @public
     * @static
     * @param {Float32Array} input
     * @param {EShapePrimitiveAdaptMode} mode
     * @returns {Float32Array}
     * @memberof ShapePrimitive
     */
    static adaptBuffer(input, mode) {
        if (mode == _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].None)
            return input;
        const output = new Float32Array(input.length);
        const rect = ShapePrimitive.getBounding(input);
        let scale = rect.width > 2 ||
            rect.height > 2 ||
            (mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        let translateX = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].Center ? rect.cx : 0;
        let translateY = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (ShapePrimitive);
//# sourceMappingURL=ShapePrimitive.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Circle.js":
/*!***********************************************!*\
  !*** ./dist/core/shapes/primitives/Circle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Creates an instance of Circle.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    constructor(settings = {}) {
        var _a;
        settings.type = 'Circle';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideLength']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
        super(settings);
        this.loop = {
            start: 0,
            end: _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2,
            inc: () => (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PId2,
            vertex: angle => [Math.cos(angle), Math.sin(angle)],
        };
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Circle);
//# sourceMappingURL=Circle.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Line.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Line.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");


/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Creates an instance of Line.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.bAdaptBuffer = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
        settings.bCloseShape = false;
        super(settings);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Line);
//# sourceMappingURL=Line.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Lissajous.js":
/*!**************************************************!*\
  !*** ./dist/core/shapes/primitives/Lissajous.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings = {}) {
        var _a;
        settings.type = 'Lissajous';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'wx',
            'wy',
            'wz',
            'sideLength',
        ]);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
        super(settings, true);
        this.props.wx = settings.wx || 1;
        this.props.wy = settings.wy || 2;
        this.props.wz = settings.wz || 0;
        this.loop = {
            start: 0,
            end: _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2,
            inc: prop_arguments => {
                const wx = this.getProp('wx', prop_arguments);
                const wy = this.getProp('wy', prop_arguments);
                const ratio = wx == wy ? _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                return (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * ratio;
            },
            vertex: (angle, prop_arguments) => {
                const wx = this.getProp('wx', prop_arguments);
                const wy = this.getProp('wy', prop_arguments);
                const wz = this.getProp('wz', prop_arguments, 0);
                return wx == wy ? [Math.cos(angle + wz), Math.sin(angle)] : [Math.cos(wx * angle + wz), Math.sin(wy * angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof ILissajousProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Lissajous
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof ILissajousProps | ILissajousProps)} key
     * @param {*} [value]
     * @memberof Lissajous
     */
    setProp(key, value) {
        super.setProp(key, value);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Lissajous);
//# sourceMappingURL=Lissajous.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Rect.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Rect.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");


/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1];
        settings.bAdaptBuffer = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
        super(settings);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Rect);
//# sourceMappingURL=Rect.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/RegularPolygon.js":
/*!*******************************************************!*\
  !*** ./dist/core/shapes/primitives/RegularPolygon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
class RegularPolygon extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        var _a;
        settings.type = settings.type || 'RegularPolygon';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideNumber']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
        super(settings, true);
        this.props.sideNumber = settings.sideNumber;
        this.loop = {
            start: 0,
            end: _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2,
            inc: (prop_arguments) => _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 / this.getProp('sideNumber', prop_arguments, 5),
            vertex: angle => {
                return [Math.cos(angle), Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof IRegularPolygonProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof IRegularPolygonProps
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRegularPolygonProps | RegularPolygonSettings)} key
     * @param {*} [value]
     * @memberof IRegularPolygonProps
     */
    setProp(key, value) {
        super.setProp(key, value);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (RegularPolygon);
//# sourceMappingURL=RegularPolygon.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Rose.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Rose.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings = {}) {
        var _a, _b, _c;
        settings.type = 'Rose';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['n', 'd', 'sideLength']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
        super(settings, true);
        this.props.n = (_b = settings.n) !== null && _b !== void 0 ? _b : 1;
        this.props.d = (_c = settings.d) !== null && _c !== void 0 ? _c : 2;
        this.loop = {
            start: 0,
            end: (prop_arguments) => Rose.getFinalAngleFromK(this.getProp('n', prop_arguments), this.getProp('d', prop_arguments)),
            inc: (prop_arguments) => {
                const n = this.getProp('n', prop_arguments);
                const d = this.getProp('d', prop_arguments);
                const sides = Math.pow(this.sideLength[0] * this.sideLength[1], 0.45);
                const k = d < n ? n / d : 1.5;
                return _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 / (sides * k);
            },
            vertex: (angle, prop_arguments) => {
                const k = this.getProp('n', prop_arguments) / this.getProp('d', prop_arguments);
                const f = Math.cos(k * angle);
                return [f * Math.cos(angle), f * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof RoseProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Rose
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRoseProps | IRoseSettings)} key
     * @param {*} [value]
     * @memberof Rose
     */
    setProp(key, value) {
        super.setProp(key, value);
    }
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    static getFinalAngleFromK(n, d) {
        if (n == d)
            return _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2;
        const k = n / d;
        const p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Rose);
//# sourceMappingURL=Rose.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Spiral.js":
/*!***********************************************!*\
  !*** ./dist/core/shapes/primitives/Spiral.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");


/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings = {}) {
        var _a, _b, _c, _d;
        settings.type = 'Spiral';
        settings.bCloseShape = false;
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'twists',
            'twists_start',
            'spiral',
            'sideLength',
        ]);
        super(settings, true);
        this.props.spiral = (_b = settings.spiral) !== null && _b !== void 0 ? _b : Spiral.types.ARCHIMEDE;
        this.props.twists = (_c = settings.twists) !== null && _c !== void 0 ? _c : 2;
        this.props.twists_start = (_d = settings.twists_start) !== null && _d !== void 0 ? _d : 0;
        this.loop = {
            start: (prop_arguments) => _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 * this.getProp('twists_start', prop_arguments),
            end: (prop_arguments) => _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 * (this.getProp('twists_start', prop_arguments) + this.getProp('twists', prop_arguments)),
            inc: (prop_arguments) => {
                // const twists = this.getProp('twists', prop_arguments)
                // const rep = ShapeLoop.PI2 * twists
                // const radius = 2 * Math.sqrt(this.sideLength[0] * this.sideLength[1])
                // return rep / (radius)
                const twists = this.getProp('twists', prop_arguments);
                const rep = _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 * twists;
                const radius = 4 + Math.sqrt(this.sideLength[0] * this.sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: (angle, prop_arguments) => {
                const r = Spiral.getRFromTSpiralType(this.getProp('spiral', prop_arguments), angle);
                return [r * Math.cos(angle), r * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof ISpiralProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [defaul_value]
     * @returns {*}
     * @memberof Spiral
     */
    getProp(key, prop_arguments, defaul_value) {
        return super.getProp(key, prop_arguments, defaul_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof ISpiralProps | ISpiralProps)} key
     * @param {*} [value]
     * @memberof Spiral
     */
    setProp(key, value) {
        key = typeof key === 'string' ? { [key]: value } : key;
        if (('twists' in key || 'twists_start' in key) && this.props.loop) {
            this.props.loop.start = undefined;
            this.props.loop.end = undefined;
        }
        super.setProp(key, value);
    }
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @param {number} angle
     * @returns {number}
     * @memberof Spiral
     */
    static getRFromTSpiralType(spiral, angle) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return angle / 10;
            case Spiral.types.HYPERBOLIC:
                return (1 / angle) * 3;
            case Spiral.types.FERMAT:
                return Math.pow(angle, 0.5) / 3;
            case Spiral.types.LITUUS:
                return Math.pow(angle, -0.5);
            case Spiral.types.LOGARITHMIC:
                return Math.pow(Math.E, (angle * 0.2)) / 10;
        }
        return 1;
    }
}
/**
 * Spural types
 *
 * @static
 * @type {{ [name in TSpiralType]: TSpiralType }}
 * @memberof Spiral
 */
Spiral.types = {
    ARCHIMEDE: 'ARCHIMEDE',
    HYPERBOLIC: 'HYPERBOLIC',
    FERMAT: 'FERMAT',
    LITUUS: 'LITUUS',
    LOGARITHMIC: 'LOGARITHMIC',
};
/* harmony default export */ __webpack_exports__["default"] = (Spiral);
//# sourceMappingURL=Spiral.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Triangle.js":
/*!*************************************************!*\
  !*** ./dist/core/shapes/primitives/Triangle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");


/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Creates an instance of Triangleeee.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Triangle
     */
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = [-1, -1, 1, 0, -1, 1];
        settings.bAdaptBuffer = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
        super(settings);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Triangle);
//# sourceMappingURL=Triangle.js.map

/***/ }),

/***/ "./dist/core/types/scene-child.js":
/*!****************************************!*\
  !*** ./dist/core/types/scene-child.js ***!
  \****************************************/
/*! exports provided: ERepetitionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERepetitionType", function() { return ERepetitionType; });
/**
 * Repetition type enumerator.
 *
 * @category Core.Enums
 * @export
 * @enum {number}
 */
var ERepetitionType;
(function (ERepetitionType) {
    /**
     * Defines the type of repetition of the shape, in a circular way starting from the center of the scene
     */
    ERepetitionType[ERepetitionType["Ring"] = 1] = "Ring";
    /**
     * Defines the type of repetition of the shape, on a nxm grid starting from the center of the scene
     */
    ERepetitionType[ERepetitionType["Matrix"] = 2] = "Matrix";
    /**
     * Defines the type of shape generation
     */
    ERepetitionType[ERepetitionType["Loop"] = 3] = "Loop";
    // Random = 4
})(ERepetitionType || (ERepetitionType = {}));
//# sourceMappingURL=scene-child.js.map

/***/ }),

/***/ "./dist/core/types/scene.js":
/*!**********************************!*\
  !*** ./dist/core/types/scene.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=scene.js.map

/***/ }),

/***/ "./dist/core/types/shape-base.js":
/*!***************************************!*\
  !*** ./dist/core/types/shape-base.js ***!
  \***************************************/
/*! exports provided: EShapePrimitiveAdaptMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShapePrimitiveAdaptMode", function() { return EShapePrimitiveAdaptMode; });
var EShapePrimitiveAdaptMode;
(function (EShapePrimitiveAdaptMode) {
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["None"] = 0] = "None";
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Scale"] = 2] = "Scale";
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Center"] = 4] = "Center";
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Fill"] = 8] = "Fill";
})(EShapePrimitiveAdaptMode || (EShapePrimitiveAdaptMode = {}));
//# sourceMappingURL=shape-base.js.map

/***/ }),

/***/ "./dist/core/types/shape-primitive.js":
/*!********************************************!*\
  !*** ./dist/core/types/shape-primitive.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=shape-primitive.js.map

/***/ }),

/***/ "./dist/index-light.js":
/*!*****************************!*\
  !*** ./dist/index-light.js ***!
  \*****************************/
/*! exports provided: Scene, SceneChild, Group, Line, Triangle, Rect, RegularPolygon, Circle, Rose, Spiral, Lissajous, Shape, ShapePrimitive, ShapeLoop, ShapeBuffer, Vec2, clamp, relativeClamp, toDegrees, toRadians, Context, DrawerCanvas, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Scene */ "./dist/core/Scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _core_Scene__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/SceneChild */ "./dist/core/SceneChild.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneChild", function() { return _core_SceneChild__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Group */ "./dist/core/Group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _core_Group__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/shapes/primitives/Line */ "./dist/core/shapes/primitives/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/shapes/primitives/Triangle */ "./dist/core/shapes/primitives/Triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/shapes/primitives/Rect */ "./dist/core/shapes/primitives/Rect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _core_shapes_primitives_RegularPolygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/shapes/primitives/RegularPolygon */ "./dist/core/shapes/primitives/RegularPolygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegularPolygon", function() { return _core_shapes_primitives_RegularPolygon__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/shapes/primitives/Circle */ "./dist/core/shapes/primitives/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/shapes/primitives/Rose */ "./dist/core/shapes/primitives/Rose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rose", function() { return _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spiral", function() { return _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/shapes/primitives/Lissajous */ "./dist/core/shapes/primitives/Lissajous.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lissajous", function() { return _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapePrimitive", function() { return _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/shapes/ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeLoop", function() { return _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/shapes/ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeBuffer", function() { return _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _core_math_Vec2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _core_math_Vec2__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Utilites */ "./dist/Utilites.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_16__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relativeClamp", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_16__["relativeClamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_16__["toDegrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_16__["toRadians"]; });

/* harmony import */ var _core_Context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/Context */ "./dist/core/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _core_Context__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _services_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/drawer-canvas/DrawerCanvas */ "./dist/services/drawer-canvas/DrawerCanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerCanvas", function() { return _services_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _services_animation_Simple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/animation/Simple */ "./dist/services/animation/Simple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _services_animation_Simple__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/**
 * Core
 */



// Shapes








// export * from '@core/shapes/primitives/Heart'




// Utilities



/**
 * Services
 */


//# sourceMappingURL=index-light.js.map

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! exports provided: ERepetitionType, EShapePrimitiveAdaptMode, Scene, SceneChild, Group, Line, Triangle, Rect, RegularPolygon, Circle, Rose, Spiral, Lissajous, Shape, ShapePrimitive, ShapeLoop, ShapeBuffer, Vec2, clamp, relativeClamp, toDegrees, toRadians, Context, DrawerCanvas, Animation, SceneUtilities, Renderer, JSONImporter, JSONExporter, SVGExporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_types_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/types/scene */ "./dist/core/types/scene.js");
/* empty/unused harmony star reexport *//* harmony import */ var _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERepetitionType", function() { return _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"]; });

/* harmony import */ var _core_types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EShapePrimitiveAdaptMode", function() { return _core_types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"]; });

/* harmony import */ var _core_types_shape_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/types/shape-primitive */ "./dist/core/types/shape-primitive.js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-light */ "./dist/index-light.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Scene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneChild", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["SceneChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Triangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Rect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegularPolygon", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["RegularPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Circle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rose", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Rose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spiral", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Spiral"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lissajous", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Lissajous"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapePrimitive", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["ShapePrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeLoop", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["ShapeLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeBuffer", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["ShapeBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Vec2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relativeClamp", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["relativeClamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["toDegrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["toRadians"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerCanvas", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["DrawerCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _index_light__WEBPACK_IMPORTED_MODULE_4__["Animation"]; });

/* harmony import */ var _services_scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneUtilities", function() { return _services_scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _services_renderer_Renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/renderer/Renderer */ "./dist/services/renderer/Renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _services_renderer_Renderer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _services_importers_JSONImporter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/importers/JSONImporter */ "./dist/services/importers/JSONImporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONImporter", function() { return _services_importers_JSONImporter__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _services_exporters_JSONExporter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/exporters/JSONExporter */ "./dist/services/exporters/JSONExporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONExporter", function() { return _services_exporters_JSONExporter__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _services_exporters_SVGExporter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/exporters/SVGExporter */ "./dist/services/exporters/SVGExporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGExporter", function() { return _services_exporters_SVGExporter__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/**
 * Types & Intterface
 */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/services/animation/Animation.js":
/*!**********************************************!*\
  !*** ./dist/services/animation/Animation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scene_utilities_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene-utilities/ScenePropUtilities */ "./dist/services/scene-utilities/ScenePropUtilities.js");
/* harmony import */ var _Simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Simple */ "./dist/services/animation/Simple.js");


const Animation = {
    composeAnimation: (drawer, prop_name, animation) => {
        switch (animation.type) {
            case 'simple': {
                const simpleAnimation = Object.assign({}, animation.value);
                simpleAnimation.from = _scene_utilities_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTransformedValue(drawer, prop_name, simpleAnimation.from);
                simpleAnimation.to = _scene_utilities_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_0__["default"].getTransformedValue(drawer, prop_name, simpleAnimation.to);
                return _Simple__WEBPACK_IMPORTED_MODULE_1__["default"].compose(simpleAnimation);
            }
            case 'raw': {
                const rawValue = animation.value;
                return eval(rawValue.raw);
            }
            // case 'random': {
            //     const randomValue = SetProp.getRandomFunctionForProp(prop_name)
            //     return ({ shape }) => randomValue(shape.rand())
            // }
        }
    },
};
/* harmony default export */ __webpack_exports__["default"] = (Animation);
//# sourceMappingURL=Animation.js.map

/***/ }),

/***/ "./dist/services/animation/Easings.js":
/*!********************************************!*\
  !*** ./dist/services/animation/Easings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Easings = {
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    linear: (time, start, end, durate) => (end * time) / durate + start,
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duratte duration
     * @returns {number}
     */
    quadraticIn: (time, start, end, duratte) => {
        time /= duratte;
        return end * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticOut: (time, start, end, durate) => {
        time /= durate;
        return -end * time * (time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time + start;
        time--;
        return (-end / 2) * (time * (time - 2) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * (time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return -end * (time * time * time * time - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time + start;
        time -= 2;
        return (-end / 2) * (time * time * time * time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * (time * time * time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalIn: (time, start, end, durate) => {
        return -end * Math.cos((time / durate) * (Math.PI / 2)) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalOut: (time, start, end, durate) => {
        return end * Math.sin((time / durate) * (Math.PI / 2)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalInOut: (time, start, end, durate) => {
        return (-end / 2) * (Math.cos((Math.PI * time) / durate) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialIn: (time, start, end, durate) => {
        return end * Math.pow(2, 10 * (time / durate - 1)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialOut: (time, start, end, durate) => {
        return end * (-Math.pow(2, (-10 * time) / durate) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
        time--;
        return (end / 2) * (-Math.pow(2, -10 * time) + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularIn: (time, start, end, durate) => {
        time /= durate;
        return -end * (Math.sqrt(1 - time * time) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * Math.sqrt(1 - time * time) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start;
        time -= 2;
        return (end / 2) * (Math.sqrt(1 - time * time) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticIn: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate) == 1) {
            return start + end;
        }
        if (!p) {
            p = durate * 0.3;
        }
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticOut: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate) == 1) {
            return start + end;
        }
        if (!p) {
            p = durate * 0.3;
        }
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return a * Math.pow(2, -10 * time) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticBoth: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate / 2) == 2) {
            return start + end;
        }
        if (!p) {
            p = durate * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        if (time < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
        }
        return a * Math.pow(2, -10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) * 0.5 + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backIn: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * (time /= durate) * time * ((s + 1) * time - s) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backOut: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * ((time = time / durate - 1) * time * ((s + 1) * time + s) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backBoth: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((time /= durate / 2) < 1) {
            return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start;
        }
        return (end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceIn: function (time, start, end, durate) {
        return end - Easings.bounceOut(durate - time, 0, end, durate) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceOut: function (time, start, end, durate) {
        if ((time /= durate) < 1 / 2.75) {
            return end * (7.5625 * time * time) + start;
        }
        else if (time < 2 / 2.75) {
            return end * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + start;
        }
        else if (time < 2.5 / 2.75) {
            return end * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + start;
        }
        return end * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + start;
    },
    /**
     *
     *
     * @param {number} time
     * @param {number} start
     * @param {number} end
     * @param {number} durate
     * @returns
     */
    bounceBoth: function (time, start, end, durate) {
        if (time < durate / 2) {
            return Easings.bounceIn(time * 2, 0, end, durate) * 0.5 + start;
        }
        return Easings.bounceOut(time * 2 - durate, 0, end, durate) * 0.5 + end * 0.5 + start;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (Easings);
//# sourceMappingURL=Easings.js.map

/***/ }),

/***/ "./dist/services/animation/Simple.js":
/*!*******************************************!*\
  !*** ./dist/services/animation/Simple.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pups/core/build/Models/Color/ColorManager */ "./node_modules/@pups/core/build/Models/Color/ColorManager.js");
/* harmony import */ var _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Easings */ "./dist/services/animation/Easings.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");



const Simple = {
    loop: (props) => Simple.compose(Object.assign(Object.assign({ mode: 'sinusoidal', mode_function: 'cos' }, props), { type: 'loop', delay: undefined })),
    uncontrolledLoop: (props) => Simple.compose(Object.assign(Object.assign({ mode: 'easing', mode_function: 'linear' }, props), { type: 'uncontrolled-loop' })),
    static: (props) => Simple.compose(Object.assign(Object.assign({ mode: 'easing', mode_function: 'linear' }, props), { type: 'static' })),
    compose: (simpleAnimation) => {
        if (typeof simpleAnimation.from !== 'string' && typeof simpleAnimation.to !== 'string') {
            const bArray = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to);
            const from = bArray ? Object(_Utilites__WEBPACK_IMPORTED_MODULE_2__["toArray"])(simpleAnimation.from) : simpleAnimation.from;
            const to = bArray ? Object(_Utilites__WEBPACK_IMPORTED_MODULE_2__["toArray"])(simpleAnimation.to) : simpleAnimation.to;
            const vCallback = bArray
                ? (current_index, v) => {
                    const a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to : from);
                    const b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from : to);
                    return simpleAnimation.type_value === 'int'
                        ? [Math.round(a[0] + v * (b[0] - a[0])), Math.round(a[1] + v * (b[1] - a[1]))]
                        : [a[0] + v * (b[0] - a[0]), a[1] + v * (b[1] - a[1])];
                }
                : (current_index, v) => {
                    const a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to : from);
                    const b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from : to);
                    return simpleAnimation.type_value === 'int' ? Math.round(a + v * (b - a)) : a + v * (b - a);
                };
            return createSimpleAnimationCallback(simpleAnimation, (props, v) => vCallback(props.repetition.current_index, v));
        }
        else {
            const from = new _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0___default.a(simpleAnimation.from);
            const to = new _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0___default.a(simpleAnimation.to);
            const vCallback = simpleAnimation.colorTransitionMode == 'hue' ? interpolateColorHSL : interpolateColorRGB;
            return createSimpleAnimationCallback(simpleAnimation, (props, v) => {
                const a = simpleAnimation.invertOdd && props.repetition.current_index % 2 == 1 ? to : from;
                const b = simpleAnimation.invertOdd && props.repetition.current_index % 2 == 1 ? from : to;
                return vCallback(a, b, v);
            });
        }
    },
};
function createSimpleAnimationCallback(animation, value) {
    let { durate, type, mode, mode_function, delay } = animation;
    if (type === 'static') {
        if (delay && delay > 0)
            return function SimpleAnimation(props) {
                return value(props, props.time <= delay
                    ? 0
                    : props.time - delay >= durate
                        ? 1
                        : _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](props.time - delay, 0, 1, durate));
            };
        else
            return function SimpleAnimation(props) {
                return value(props, props.time <= durate ? _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](props.time, 0, 1 - 0, durate) : 1);
            };
    }
    else {
        if (type === 'loop') {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    const frequency = ((props.time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[mode_function](frequency) * 0.5);
                };
            } /* easing */
            else {
                return function SimpleAnimation(props) {
                    const d2 = durate / 2;
                    const t = props.time % durate;
                    return value(props, t <= d2
                        ? _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](t, 0, 1, d2)
                        : _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](d2 - (t - d2), 0, 1, d2));
                };
            }
        } // uncontrolled-loop
        else {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    let time = props.time % (durate + delay);
                    time = time <= delay ? 0 : time - delay;
                    const frequency = ((time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[mode_function](frequency) * 0.5);
                };
            }
            else {
                if (delay && delay > 0)
                    return function SimpleAnimation(props) {
                        const time = props.time % (durate + delay);
                        return value(props, time <= delay
                            ? 0
                            : time - delay >= durate
                                ? 1
                                : _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](time - delay, 0, 1, durate));
                    };
                else
                    return function SimpleAnimation(props) {
                        const time = props.time % durate;
                        return value(props, time <= durate ? _Easings__WEBPACK_IMPORTED_MODULE_1__["default"][mode_function](time, 0, 1 - 0, durate) : 1);
                    };
            }
        }
    }
}
function interpolateColorRGB(start, end, v) {
    const aAlpha = start.getAlpha();
    const bAlpha = end.getAlpha();
    const s = start.getRgb();
    const e = end.getRgb();
    const r = s.r + v * (e.r - s.r);
    const g = s.g + v * (e.g - s.g);
    const b = s.b + v * (e.b - s.b);
    const alpha = aAlpha + v * (bAlpha - aAlpha);
    return `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha})`;
}
function interpolateColorHSL(start, end, v) {
    const aAlpha = start.getAlpha();
    const bAlpha = end.getAlpha();
    const s = start.getHsl();
    const e = end.getHsl();
    const _h = s.h + v * (e.h - s.h);
    const _s = s.s + v * (e.s - s.s);
    const _l = s.l + v * (e.l - s.l);
    const alpha = aAlpha + v * (bAlpha - aAlpha);
    return `hsla(${Math.floor(_h * 360)},${Math.floor(_s * 100)}%,${Math.floor(_l * 100)}%,${alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha})`;
}
/* harmony default export */ __webpack_exports__["default"] = (Simple);
//# sourceMappingURL=Simple.js.map

/***/ }),

/***/ "./dist/services/drawer-canvas/DrawerCanvas.js":
/*!*****************************************************!*\
  !*** ./dist/services/drawer-canvas/DrawerCanvas.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_math_Vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _timeline_Timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeline/Timeline */ "./dist/services/timeline/Timeline.js");
/* harmony import */ var _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");
/* harmony import */ var _FrameBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FrameBuffer */ "./dist/services/drawer-canvas/FrameBuffer.js");
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");







/**
 *
 * @category Services
 * @class DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
class DrawerCanvas extends _events_Emitter__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor(scene, canvasOrContainer, drawOptions = {}, ratio = undefined, resolution = 0, bBuffering = false) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        this.bBuffering = false;
        this.timeline = new _timeline_Timeline__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.resolution = resolution || (scene && scene.width ? scene.width : 0);
        this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        this.bBuffering = bBuffering;
        this.buffer = new _FrameBuffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
        if (scene) {
            const width = this.ratio >= 1 ? scene.width : scene.width * this.ratio;
            const height = this.ratio >= 1 ? scene.height / this.ratio : scene.height;
            scene.resize(width, height);
            this.setScene(scene);
        }
        if ((typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) ||
            (typeof OffscreenCanvas !== 'undefined' && canvasOrContainer instanceof OffscreenCanvas)) {
            const canvas = canvasOrContainer;
            this.setCanvas(canvas);
        }
        else if (canvasOrContainer) {
            const canvas = document.createElement('canvas');
            const container = canvasOrContainer;
            container.appendChild(canvas);
            this.setCanvas(canvas);
        }
        this.drawOptions = {
            scale: (_a = drawOptions.scale) !== null && _a !== void 0 ? _a : 1,
            translate: (_b = drawOptions.translate) !== null && _b !== void 0 ? _b : [0, 0],
            time: (_c = drawOptions.time) !== null && _c !== void 0 ? _c : 0,
            simmetricLine: (_d = drawOptions.simmetricLine) !== null && _d !== void 0 ? _d : 0,
            clearCanvas: (_e = drawOptions.clearCanvas) !== null && _e !== void 0 ? _e : true,
            fixedLineWidth: (_f = drawOptions.fixedLineWidth) !== null && _f !== void 0 ? _f : false,
            noBackground: (_g = drawOptions.noBackground) !== null && _g !== void 0 ? _g : false,
            ghosts: drawOptions.ghosts || 0,
            ghost_skip_time: drawOptions.ghost_skip_time || 0,
            ghost_skip_function: drawOptions.ghost_skip_function,
            backgroundImage: drawOptions.backgroundImage,
        };
        this.draw_id = null;
        this.redraw_id = null;
        this.animation_id = null;
        this.draw = this.draw.bind(this);
        this.animate = this.animate.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }
    setBuffering(bBuffering) {
        this.bBuffering = bBuffering;
        this.flushBuffer();
    }
    getBBuffering() {
        return this.bBuffering;
    }
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    setScene(scene) {
        this.scene = scene;
        if (!this.resolution && this.scene.width)
            this.resolution = this.scene.width;
        if (this.canvas) {
            this.setCanvas(this.canvas); // and flush
        }
    }
    getScene() {
        return this.scene;
    }
    getTimeline() {
        return this.timeline;
    }
    /**
     * Set the canvas or append to container
     *
     * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
     * @memberof CanvasDrawer
     */
    setCanvas(canvasOrContainer) {
        let canvas;
        if (typeof HTMLElement !== 'undefined' && canvasOrContainer instanceof HTMLElement) {
            if (typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) {
                canvas = canvasOrContainer;
            }
            else {
                canvas = (this.canvas || document.createElement('canvas'));
                while (canvasOrContainer.lastChild)
                    canvasOrContainer.removeChild(canvasOrContainer.lastChild);
                canvasOrContainer.appendChild(canvas);
            }
        }
        else {
            canvas = canvasOrContainer;
        }
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d', {
            alpha: true,
            desynchronized: false,
        });
        if (this.scene) {
            this.resize(this.scene.width, this.scene.height); // and flush
        }
    }
    /**
     * Return canvas element
     *
     * @returns {(HTMLCanvasElement | OffscreenCanvas)}
     * @memberof DrawerCanvas
     */
    getCanvas() {
        return this.canvas;
    }
    /**
     * Return canvas context
     *
     * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
     * @memberof DrawerCanvas
     */
    getContext() {
        return this.context;
    }
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     * @param {number} [resolution]
     * @memberof DrawerCanvas
     */
    resize(width, height, ratio, resolution) {
        // const dpi = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1
        const dpi = 1;
        ratio = ratio || this.ratio || width / height;
        const size = Math.max(width, height);
        width = ratio >= 1 ? size : size * ratio;
        height = ratio >= 1 ? size / ratio : size;
        this.ratio = ratio;
        if (this.scene)
            this.scene.resize(width, height);
        if (this.canvas) {
            this.canvas.width = width * dpi;
            this.canvas.height = height * dpi;
            if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
                this.canvas.style.width = width + 'px';
                this.canvas.style.height = height + 'px';
            }
        }
        if (resolution && resolution != this.resolution && this.scene) {
            this.resolution = resolution;
            _core_Scene__WEBPACK_IMPORTED_MODULE_1__["default"].walk((sceneChild) => {
                const props = sceneChild.data.props;
                Object.keys(props).forEach(name => {
                    _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].setProp(sceneChild, name, props[name], this);
                });
            }, this.scene);
        }
        this.flushBuffer();
        this.dispatch('drawer-canvas:resize');
    }
    flushBuffer() {
        if (this.bBuffering) {
            this.buffer.flush();
            this.dispatch('drawer-canvas:buffer_flush');
        }
    }
    getRenderedFrames() {
        if (this.bBuffering) {
            return this.buffer.getRenderedFrames();
        }
        return [];
    }
    /**
     * Resize by ratio
     *
     * @param {number} ratio
     * @memberof DrawerCanvas
     */
    setRatio(ratio) {
        this.resize(this.scene.width, this.scene.height, ratio);
    }
    /**
     * Return drawer ratio
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getRatio() {
        return this.ratio;
    }
    /**
     * Get resolution
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getResolution() {
        return this.resolution;
    }
    /**
     * Get resolution of drawer
     *
     * @param {number} resolution
     * @memberof DrawerCanvas
     */
    setResolution(resolution) {
        this.resize(this.scene.width, this.scene.height, this.ratio, resolution);
    }
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolution(value) {
        return (value * this.resolution) / 200;
    }
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolutionScaled(value) {
        return (value * 200) / this.resolution;
    }
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | DrawOptions)} name
     * @param {Required<DrawOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    setOption(name, value) {
        if (typeof name == 'object') {
            const keys = Object.keys(name);
            for (let i = 0, len = keys.length; i < len; i++) {
                // @ts-ignore
                this.drawOptions[keys[i]] = name[keys[i]];
            }
        }
        else {
            this.drawOptions[name] = value;
        }
        this.flushBuffer();
    }
    /**
     *
     *
     * @template K
     * @param {K} name
     * @param {DrawOptions[K]} default_value
     * @returns {DrawOptions[K]}
     * @memberof DrawerCanvas
     */
    getOption(name, default_value) {
        var _a;
        return (_a = this.drawOptions[name]) !== null && _a !== void 0 ? _a : default_value;
    }
    /**
     *
     *
     * @returns {DrawOptions}
     * @memberof DrawerCanvas
     */
    getOptions() {
        return this.drawOptions;
    }
    /**
     * Internal tick animation
     *
     * @private
     * @memberof CanvasDrawer
     */
    animate(timestamp) {
        if (this.timeline.bSequenceStarted()) {
            this.animation_id = requestAnimationFrame(this.animate);
            if (this.timeline.tick(timestamp))
                this.draw();
        }
    }
    /**
     * Start animation drawing
     *
     * @memberof CanvasDrawer
     */
    startAnimation() {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    }
    /**
     * Stop animation drawing
     *
     * @memberof CanvasDrawer
     */
    stopAnimation() {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Pause animation drawing
     *
     * @memberof CanvasDrawer
     */
    pauseAnimation() {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Play animation drawing
     *
     * @memberof CanvasDrawer
     */
    playAnimation() {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    }
    // public preload(): Promise<boolean> {
    // 	if (this.bBuffering && this.scene) {
    // 		return new Promise<boolean>((resolve, reject) => {
    // 			this.flushBuffer()
    // 			const sequence = this.timeline.getSequence()
    // 			let canvas: HTMLCanvasElement | OffscreenCanvas
    // 			if (typeof OffscreenCanvas !== 'undefined') canvas = new OffscreenCanvas(this.scene.width, this.scene.height)
    // 			else {
    // 				canvas = document.createElement('canvas')
    // 				canvas.width = this.scene.width
    // 				canvas.height = this.scene.height
    // 			}
    // 			const context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = canvas.getContext('2d', {
    // 				alpha: true,
    // 				desynchronized: false,
    // 			})
    // 			if (!context) reject('Create context error')
    // 			const drawOptions = { ...this.drawOptions }
    // 			const sequenceEndTime = this.timeline.getSequenceEndTime()
    // 			for (let i = 0; i < sequence.frames; i++) {
    // 				// requestAnimationFrame(() => {
    // 				const time = this.timeline.getFrameTime(i)
    // 				drawOptions.clearCanvas = this.drawOptions.clearCanvas || i === 0
    // 				drawOptions.time = time
    // 				DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)
    // 				if (drawOptions.ghosts) {
    // 					for (let gi = 1; gi <= drawOptions.ghosts; gi++) {
    // 						const ghostTime =
    // 							time -
    // 							(drawOptions.ghost_skip_function
    // 								? drawOptions.ghost_skip_function(gi)
    // 								: gi * (drawOptions.ghost_skip_time ?? 30))
    // 						drawOptions.clearCanvas = false
    // 						drawOptions.ghost_index = gi
    // 						drawOptions.time =
    // 							ghostTime < 0
    // 								? ghostTime + sequenceEndTime
    // 								: ghostTime > sequenceEndTime
    // 								? ghostTime % sequenceEndTime
    // 								: ghostTime
    // 						DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)
    // 					}
    // 				}
    // 				this.buffer.push(i, context as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D)
    // 				// })
    // 			}
    // 			resolve(true)
    // 		})
    // 	} else {
    // 		return Promise.reject()
    // 	}
    // }
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    draw() {
        var _a, _b;
        let draw_time = 0;
        const drawOptions = Object.assign({}, this.drawOptions);
        drawOptions.ghost_index = undefined;
        drawOptions.clearCanvas = this.drawOptions.clearCanvas || this.timeline.getCurrentFrame() <= 0;
        drawOptions.time = this.timeline.getTime();
        const current_frame = this.timeline.getFrameAtTime(drawOptions.time);
        this.dispatch('drawer-canvas:before_draw', {
            current_frame: current_frame,
            current_time: drawOptions.time,
        });
        if (this.bBuffering && this.buffer.exist(current_frame)) {
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.putImageData(this.buffer.get(current_frame), 0, 0);
        }
        else {
            draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution);
            if (drawOptions.ghosts) {
                const time = this.timeline.getTime();
                const sequenceEndTime = this.timeline.getSequenceEndTime();
                for (let i = 1; i <= drawOptions.ghosts; i++) {
                    const ghostTime = time -
                        (drawOptions.ghost_skip_function
                            ? drawOptions.ghost_skip_function(i)
                            : i * ((_b = drawOptions.ghost_skip_time) !== null && _b !== void 0 ? _b : 30));
                    // drawOptions.clearCanvas = i == 1
                    drawOptions.clearCanvas = false;
                    drawOptions.ghost_index = i;
                    drawOptions.time =
                        ghostTime < 0
                            ? ghostTime + sequenceEndTime
                            : ghostTime > sequenceEndTime
                                ? ghostTime % sequenceEndTime
                                : ghostTime;
                    draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution);
                }
            }
            if (this.bBuffering && this.context) {
                this.buffer.push(current_frame, this.context);
                if (this.buffer.count() >= this.timeline.getFramesCount()) {
                    this.dispatch('drawer-canvas:buffer_loaded');
                }
            }
        }
        return draw_time;
    }
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    redraw() {
        if (!this.timeline.bSequenceStarted()) {
            this.draw_id && cancelAnimationFrame(this.draw_id);
            !this.drawOptions.clearCanvas &&
                (typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0) &&
                this.timeline.stop();
            this.draw_id = requestAnimationFrame(this.draw);
        }
        else if (!this.drawOptions.clearCanvas &&
            (typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0)) {
            this.stopAnimation();
            // this.redraw_id && clearTimeout(this.redraw_id)
            // this.redraw_id = setTimeout(() => this.startAnimation(), 100)
            this.redraw_id && cancelAnimationFrame(this.redraw_id);
            this.redraw_id = requestAnimationFrame(this.startAnimation);
        }
    }
    /**
     * Static draw scene
     *
     * @static
     * @param {Scene} scene
     * @param {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)} context
     * @param {DrawOptions} options
     * @returns {number}
     * @memberof DrawerCanvas
     */
    static draw(scene, context, options, resolution) {
        var _a, _b, _c, _d;
        const start_time = Object(_Utilites__WEBPACK_IMPORTED_MODULE_6__["now"])();
        if (context) {
            const scale = (_a = options.scale) !== null && _a !== void 0 ? _a : 1;
            const translate = (_b = options.translate) !== null && _b !== void 0 ? _b : [0, 0];
            const time = (_c = options.time) !== null && _c !== void 0 ? _c : 0;
            const simmetricLine = (_d = options.simmetricLine) !== null && _d !== void 0 ? _d : 0;
            const fixedLineWidth = options.fixedLineWidth;
            const clearCanvas = options.clearCanvas;
            const noBackground = options.noBackground;
            const backgroundImage = options.backgroundImage;
            const bGhost = typeof options.ghosts !== 'undefined' &&
                options.ghosts > 0 &&
                typeof options.ghost_index !== 'undefined' &&
                options.ghost_index > 0;
            const ghostMultiplier = bGhost
                ? 1 - options.ghost_index / (options.ghosts + 0.5)
                : 1;
            const width = scene.width;
            const height = scene.height;
            const ratio_x = width > height ? 1 : height / width;
            const ratio_y = width > height ? width / height : 1;
            resolution = resolution || width;
            const final_scale = [(width / (resolution / ratio_x)) * scale, (height / (resolution / ratio_y)) * scale];
            const final_translate = [
                width / 2 - (scale > 1 ? (translate[0] * width) / (1 / ((scale - 1) / 2)) : 0),
                height / 2 - (scale > 1 ? (translate[1] * height) / (1 / ((scale - 1) / 2)) : 0),
            ];
            scene.current_time = time;
            scene.getChildren().forEach((sceneChild) => {
                if (!sceneChild.data ||
                    !(sceneChild.data.visible === false) ||
                    !(bGhost && sceneChild.data.disableGhost === true))
                    sceneChild.generate(time, true);
            });
            if (clearCanvas) {
                if (noBackground) {
                    context.clearRect(0, 0, width, height);
                }
                else {
                    context.fillStyle = scene.background;
                    context.fillRect(0, 0, width, height);
                    backgroundImage && context.drawImage(backgroundImage, 0, 0, width, height);
                }
            }
            if (simmetricLine > 0) {
                const offset = Math.PI / simmetricLine;
                const size = Math.max(width, height) / 2;
                const center = [size / 2, size / 2];
                for (let i = 0; i < simmetricLine; i++) {
                    const a = Float32Array.from([-size, -size]);
                    const b = Float32Array.from([size * 2, size * 2]);
                    const rotate = i * offset + Math.PI / 4;
                    _core_math_Vec2__WEBPACK_IMPORTED_MODULE_0__["default"].rotateZ(a, center, rotate);
                    _core_math_Vec2__WEBPACK_IMPORTED_MODULE_0__["default"].rotateZ(b, center, rotate);
                    context.beginPath();
                    context.strokeStyle = scene.mainColor;
                    context.lineWidth = 1;
                    context.moveTo((a[0] - size / 2) * final_scale[0] + final_translate[0], (a[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.lineTo((b[0] - size / 2) * final_scale[0] + final_translate[0], (b[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.stroke();
                }
            }
            scene.stream(({ lineWidth, strokeColor, fillColor, shape, buffer, buffer_length, current_buffer_index }) => {
                if (shape.data && (shape.data.visible === false || (bGhost && shape.data.disableGhost === true)))
                    return;
                context.beginPath();
                context.moveTo((buffer[current_buffer_index] - width / 2) * final_scale[0] + final_translate[0], (buffer[current_buffer_index + 1] - height / 2) * final_scale[1] + final_translate[1]);
                for (let i = 2; i < buffer_length; i += 2) {
                    context.lineTo((buffer[current_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0], (buffer[current_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1]);
                }
                shape && shape.isClosed() && context.closePath();
                if (shape && shape.data && shape.data.highlighted) {
                    context.lineWidth = (lineWidth || 1) * 3 * scale;
                    context.strokeStyle = scene.mainColor;
                    context.stroke();
                    return;
                }
                if (fillColor) {
                    if (bGhost) {
                        const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(fillColor);
                        if (color) {
                            let [, a, b, c, o] = color;
                            const alpha = o ? parseFloat(o) : 1;
                            const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                            fillColor =
                                fillColor.indexOf('rgb') >= 0
                                    ? `rgba(${a},${b},${c},${ghostAlpha})`
                                    : `hsla(${a},${b},${c},${ghostAlpha})`;
                        }
                    }
                    context.fillStyle = fillColor;
                    context.fill();
                }
                if (strokeColor && lineWidth) {
                    if (bGhost) {
                        const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(strokeColor);
                        if (color) {
                            let [, a, b, c, o] = color;
                            const alpha = o ? parseFloat(o) : 1;
                            const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                            strokeColor =
                                strokeColor.indexOf('rgb') >= 0
                                    ? `rgba(${a},${b},${c},${ghostAlpha})`
                                    : `hsla(${a},${b},${c},${ghostAlpha})`;
                        }
                        lineWidth *= ghostMultiplier;
                    }
                    context.lineWidth = fixedLineWidth ? lineWidth : lineWidth * scale;
                    context.strokeStyle = strokeColor;
                    context.stroke();
                }
            });
        }
        const end_time = Object(_Utilites__WEBPACK_IMPORTED_MODULE_6__["now"])();
        return end_time - start_time;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (DrawerCanvas);
//# sourceMappingURL=DrawerCanvas.js.map

/***/ }),

/***/ "./dist/services/drawer-canvas/FrameBuffer.js":
/*!****************************************************!*\
  !*** ./dist/services/drawer-canvas/FrameBuffer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * @category Services.DrawerCavnas
 * @class FrameBuffer
 */
class FrameBuffer {
    constructor() {
        this.frames = {};
    }
    exist(frameNumber) {
        return frameNumber in this.frames;
    }
    get(frameNumber) {
        return this.exist(frameNumber) ? this.frames[frameNumber] : null;
    }
    count() {
        return Object.keys(this.frames).length;
    }
    push(frameNumber, context) {
        this.frames[frameNumber] = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    }
    flush() {
        this.frames = {};
    }
    getRenderedFrames() {
        return Object.keys(this.frames).map(e => +e);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (FrameBuffer);
//# sourceMappingURL=FrameBuffer.js.map

/***/ }),

/***/ "./dist/services/events/Emitter.js":
/*!*****************************************!*\
  !*** ./dist/services/events/Emitter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * @category Services
 * @abstract
 * @class Emitter
 * @template EventTypes
 */
class Emitter {
    constructor() {
        //@ts-ignore
        this.callbacks = {};
    }
    /**
     * Attach callback at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => any} callback
     * @memberof Emitter
     */
    attach(e, callback) {
        if (!(e in this.callbacks)) {
            this.callbacks[e] = [];
        }
        this.callbacks[e].push(callback);
    }
    /**
     * Remove callbach listener at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => void} callback
     * @memberof Emitter
     */
    detach(e, callback) {
        if (e in this.callbacks) {
            const index = this.callbacks[e].indexOf(callback);
            if (index >= 0) {
                this.callbacks[e].splice(index, 1);
            }
        }
    }
    /**
     * Dispatch event
     *
     * @param {keyof EventTypes} e
     * @param {EventTypes[keyof EventTypes]} [params]
     * @memberof Emitter
     */
    dispatch(e, params) {
        if (e in this.callbacks) {
            for (let i = 0, len = this.callbacks[e].length; i < len; i++)
                if (this.callbacks[e][i](params) === false)
                    break;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Emitter);
//# sourceMappingURL=Emitter.js.map

/***/ }),

/***/ "./dist/services/exporters/JSONExporter.js":
/*!*************************************************!*\
  !*** ./dist/services/exporters/JSONExporter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Group */ "./dist/core/Group.js");
/* harmony import */ var _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony import */ var _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shapes/ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shapes/ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
/* harmony import */ var _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _importers_JSONImporter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../importers/JSONImporter */ "./dist/services/importers/JSONImporter.js");
/* harmony import */ var _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");








/**
 *
 * @category Services
 * @class JSONExporter
 */
class JSONExporter {
    parse(drawer, name = 'EmptyProject') {
        return this.toString(this.parseAsProject(drawer, name));
    }
    toString(project) {
        return JSON.stringify(project);
    }
    parseAsProject(drawer, name = 'EmptyProject') {
        const scene = drawer.getScene();
        const timeline = drawer.getTimeline();
        const project = _importers_JSONImporter__WEBPACK_IMPORTED_MODULE_6__["default"].createEmptyProject();
        project.name = name;
        project.width = scene.width;
        project.height = scene.height;
        project.resolution = drawer.getResolution();
        project.mainColor = scene.mainColor;
        project.background = scene.background;
        project.clearCanvas = drawer.getOption('clearCanvas', true);
        project.ghosts = drawer.getOption('ghosts', 0);
        project.ghost_skip_time = _Utilites__WEBPACK_IMPORTED_MODULE_5__["parseFunction"].parse(drawer.getOption('ghost_skip_time', 30));
        project.ratio = drawer.getRatio();
        const { start, end, framerate } = timeline.getSequence();
        project.sequence = { start, end, framerate, durate: end - start };
        project.scene = {};
        const sceneChilds = scene.getChildren();
        for (let i = 0, len = sceneChilds.length; i < len; i++) {
            project.scene[sceneChilds[i].id] = this.parseSceneChild(sceneChilds[i]);
        }
        return project;
    }
    parseSceneChild(sceneChild, parent_id, depth = 0) {
        const projectSceneChild = {
            id: sceneChild.id + '',
            type: sceneChild.type,
            name: sceneChild.name,
            order: sceneChild.order,
            data: Object.assign(Object.assign({}, sceneChild.data), { props: undefined }),
            depth,
            bPrimitive: sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_4__["default"],
            props: {},
            parent_id,
        };
        const props = sceneChild.getProps();
        const propsKeys = Object.keys(props);
        for (let i = 0, len = propsKeys.length; i < len; i++)
            props[propsKeys[i]] = _Utilites__WEBPACK_IMPORTED_MODULE_5__["parseFunction"].parse(props[propsKeys[i]]);
        projectSceneChild.props = Object.assign(Object.assign({}, props), sceneChild.data.props);
        if (sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            projectSceneChild.shape = sceneChild.shape;
        }
        if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            projectSceneChild.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            projectSceneChild.bAdaptBuffer = sceneChild.bAdaptBuffer;
            projectSceneChild.bCloseShape = sceneChild.bCloseShape;
            projectSceneChild.vertexCallback = _Utilites__WEBPACK_IMPORTED_MODULE_5__["parseFunction"].parse(sceneChild.vertexCallback);
        }
        else if (sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_1__["default"] || sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            const children = [];
            const shapeChildren = _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_7__["default"].getChildren(sceneChild);
            for (let i = 0; i < shapeChildren.length; i++)
                children.push(this.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1));
            projectSceneChild.children = children;
        }
        return projectSceneChild;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (JSONExporter);
//# sourceMappingURL=JSONExporter.js.map

/***/ }),

/***/ "./dist/services/exporters/SVGExporter.js":
/*!************************************************!*\
  !*** ./dist/services/exporters/SVGExporter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DEFAULT_SETTINGS = {
    size: 1080,
    quality: 1,
    time: 0,
    noBackground: true,
};
/**
 *
 * @category Services
 * @class SVGExporter
 */
class SVGExporter {
    parse(drawer, settings) {
        settings = Object.assign(Object.assign({}, DEFAULT_SETTINGS), settings);
        const scene = drawer.getScene();
        const timeline = drawer.getTimeline();
        const decimals = Math.floor(settings.quality * 4);
        const all_parts = [];
        const drawOptions = Object.assign({}, drawer.getOptions());
        if (drawOptions.ghosts) {
            const time = timeline.getTime();
            const sequenceEndTime = timeline.getSequenceEndTime();
            for (let i = 1; i <= drawOptions.ghosts; i++) {
                const ghostTime = time -
                    (drawOptions.ghost_skip_function
                        ? drawOptions.ghost_skip_function(i)
                        : i * (drawOptions.ghost_skip_time || 30));
                drawOptions.clearCanvas = i == 1;
                drawOptions.ghost_index = i;
                drawOptions.time =
                    ghostTime < 0
                        ? ghostTime + sequenceEndTime
                        : ghostTime > sequenceEndTime
                            ? ghostTime % sequenceEndTime
                            : ghostTime;
                all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
            }
            drawOptions.clearCanvas = false;
            drawOptions.ghost_index = undefined;
            drawOptions.time = timeline.getTime();
            all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
        }
        else {
            if (!drawOptions.clearCanvas) {
                const sequence = timeline.getSequence();
                const needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time);
                for (let i = 0; i <= needFrame; i++) {
                    timeline.setFrame(i);
                    drawOptions.time = timeline.getTime();
                    all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
                }
            }
            else {
                drawOptions.time = timeline.getTime();
                drawOptions.clearCanvas = drawOptions.clearCanvas || timeline.getCurrentFrame() <= 0;
                all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
            }
        }
        const result = [];
        result.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${scene.width.toFixed(decimals)} ${scene.height.toFixed(decimals)}" width="${scene.width.toFixed(decimals)}" height="${scene.height.toFixed(decimals)}">`);
        if (!settings.noBackground)
            result.push(`\t<rect width="${scene.width.toFixed(decimals)}" height="${scene.height.toFixed(decimals)}" fill="${scene.background}" />`);
        result.push(all_parts.map(paths => `<g>${paths.join('\t\t')}</g>`).join('\t'));
        result.push(`</svg>`);
        return result.join('\n');
    }
    static draw(scene, options, resolution, decimals) {
        var _a, _b, _c;
        const scale = (_a = options.scale) !== null && _a !== void 0 ? _a : 1;
        const translate = (_b = options.translate) !== null && _b !== void 0 ? _b : [0, 0];
        const time = (_c = options.time) !== null && _c !== void 0 ? _c : 0;
        const bGhost = typeof options.ghosts !== 'undefined' &&
            options.ghosts > 0 &&
            typeof options.ghost_index !== 'undefined' &&
            options.ghost_index > 0;
        const ghostMultiplier = bGhost
            ? 1 - options.ghost_index / (options.ghosts + 0.5)
            : 1;
        const width = scene.width;
        const height = scene.height;
        const ratio_x = width > height ? 1 : height / width;
        const ratio_y = width > height ? width / height : 1;
        resolution = resolution || width;
        const final_scale = [(width / (resolution / ratio_x)) * scale, (height / (resolution / ratio_y)) * scale];
        const final_translate = [
            width / 2 - (scale > 1 ? (translate[0] * width) / (1 / ((scale - 1) / 2)) : 0),
            height / 2 - (scale > 1 ? (translate[1] * height) / (1 / ((scale - 1) / 2)) : 0),
        ];
        scene.current_time = time;
        scene.getChildren().forEach((sceneChild) => {
            var _a, _b;
            if (!(((_a = sceneChild === null || sceneChild === void 0 ? void 0 : sceneChild.data) === null || _a === void 0 ? void 0 : _a.visible) === false || (bGhost && ((_b = sceneChild === null || sceneChild === void 0 ? void 0 : sceneChild.data) === null || _b === void 0 ? void 0 : _b.disableGhost) === true)))
                sceneChild.generate(time, true);
        });
        const Paths = [];
        scene.stream(({ lineWidth, strokeColor, fillColor, shape, buffer, buffer_length, current_buffer_index }) => {
            var _a, _b;
            if (((_a = shape === null || shape === void 0 ? void 0 : shape.data) === null || _a === void 0 ? void 0 : _a.visible) == false || (bGhost && ((_b = shape === null || shape === void 0 ? void 0 : shape.data) === null || _b === void 0 ? void 0 : _b.disableGhost) == true))
                return;
            const temp = [];
            for (let i = 0; i < buffer_length; i += 2) {
                const x = (buffer[current_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0];
                const y = (buffer[current_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1];
                temp.push(x.toFixed(decimals) + ' ' + y.toFixed(decimals));
            }
            if (fillColor) {
                if (bGhost) {
                    const color = /\((.+),(.+),(.+),(.+)\)/g.exec(fillColor);
                    if (color) {
                        let [, a, b, c, o] = color;
                        const alpha = o ? parseFloat(o) : 1;
                        const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                        fillColor =
                            fillColor.indexOf('rgb') >= 0
                                ? `rgba(${a},${b},${c},${ghostAlpha})`
                                : `hsla(${a},${b},${c},${ghostAlpha})`;
                    }
                }
            }
            if (strokeColor && lineWidth) {
                if (bGhost) {
                    const color = /\((.+),(.+),(.+),(.+)\)/g.exec(strokeColor);
                    if (color) {
                        let [, a, b, c, o] = color;
                        const alpha = o ? parseFloat(o) : 1;
                        const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                        strokeColor =
                            strokeColor.indexOf('rgb') >= 0
                                ? `rgba(${a},${b},${c},${ghostAlpha})`
                                : `hsla(${a},${b},${c},${ghostAlpha})`;
                    }
                    lineWidth *= ghostMultiplier;
                }
            }
            Paths.push(`<path fill="${fillColor || 'none'}" ${strokeColor ? `stroke="${strokeColor}"` : ''} ${lineWidth ? `stroke-width="${lineWidth}"` : ''} ` + `d="M${temp.join(' L')} ${shape && shape.isClosed() ? 'Z' : ''}" />`);
        });
        return Paths;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (SVGExporter);
//# sourceMappingURL=SVGExporter.js.map

/***/ }),

/***/ "./dist/services/importers/JSONImporter.js":
/*!*************************************************!*\
  !*** ./dist/services/importers/JSONImporter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawer-canvas/DrawerCanvas */ "./dist/services/drawer-canvas/DrawerCanvas.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");





/**
 *
 * @category Services
 * @class JSONImporter
 */
class JSONImporter {
    parse(project_json) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!project_json)
            return null;
        const parsed = project_json && project_json.length > 0 ? JSON.parse(project_json) : {};
        if (!('scene' in parsed))
            return null;
        const emptyProject = JSONImporter.createEmptyProject();
        const project = {
            id: (_a = parsed.id) !== null && _a !== void 0 ? _a : emptyProject.id,
            name: (_b = parsed.name) !== null && _b !== void 0 ? _b : emptyProject.name,
            width: (_c = parsed.width) !== null && _c !== void 0 ? _c : emptyProject.width,
            height: (_d = parsed.height) !== null && _d !== void 0 ? _d : emptyProject.height,
            resolution: (_e = parsed.resolution) !== null && _e !== void 0 ? _e : emptyProject.resolution,
            background: (_f = parsed.background) !== null && _f !== void 0 ? _f : emptyProject.background,
            mainColor: (_g = parsed.mainColor) !== null && _g !== void 0 ? _g : emptyProject.mainColor,
            clearCanvas: (_h = parsed.clearCanvas) !== null && _h !== void 0 ? _h : emptyProject.clearCanvas,
            ghosts: (_j = parsed.ghosts) !== null && _j !== void 0 ? _j : emptyProject.ghosts,
            ghost_skip_time: (_k = parsed.ghost_skip_time) !== null && _k !== void 0 ? _k : emptyProject.ghost_skip_time,
            ghost_skip_function: (_l = parsed.ghost_skip_function) !== null && _l !== void 0 ? _l : emptyProject.ghost_skip_function,
            ratio: (_m = parsed.ratio) !== null && _m !== void 0 ? _m : emptyProject.ratio,
            scene: parsed.scene || emptyProject.scene,
            sequence: Object.assign(Object.assign({}, emptyProject.sequence), parsed.sequence),
        };
        project.sequence.durate = project.sequence.end - project.sequence.start;
        const drawOptions = {
            clearCanvas: project.clearCanvas,
            ghosts: project.ghosts,
            ghost_skip_time: _Utilites__WEBPACK_IMPORTED_MODULE_2__["parseFunction"].unparse(project.ghost_skip_time),
        };
        const scene = new _core_Scene__WEBPACK_IMPORTED_MODULE_0__["default"]({
            mainColor: project.mainColor,
            background: project.background,
            width: project.width,
            height: project.height,
        });
        const drawer = new _drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](scene, undefined, drawOptions, project.ratio, project.resolution);
        const timeline = drawer.getTimeline();
        timeline.setSequence(project.sequence.start, project.sequence.end, project.sequence.framerate);
        const sceneChilds = Object.values(project.scene || []);
        for (let i = 0, len = sceneChilds.length; i < len; i++) {
            const sceneChild = this.parseSceneChild(sceneChilds[i], drawer);
            sceneChild && scene.add(sceneChild);
        }
        return drawer;
    }
    parseSceneChild(projectSceneChild, drawer) {
        const shape = typeof projectSceneChild.shape !== 'undefined'
            ? Float32Array.from(Object.values(projectSceneChild.shape))
            : undefined;
        const settings = {
            id: projectSceneChild.id,
            name: projectSceneChild.name,
            order: projectSceneChild.order,
            data: projectSceneChild.data,
            bUseParent: projectSceneChild.bUseParent,
            bAdaptBuffer: projectSceneChild.bAdaptBuffer,
            bCloseShape: projectSceneChild.bCloseShape,
            vertexCallback: _Utilites__WEBPACK_IMPORTED_MODULE_2__["parseFunction"].unparse(projectSceneChild.vertexCallback),
            shape: shape,
        };
        const props = Object.assign({}, projectSceneChild.props);
        const sceneChild = _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].create(projectSceneChild.type, settings);
        if (sceneChild) {
            ;
            Object.keys(props).forEach(propKey => {
                _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].setProp(sceneChild, propKey, _Utilites__WEBPACK_IMPORTED_MODULE_2__["parseFunction"].unparse(props[propKey]), drawer);
            });
            if (projectSceneChild.children && projectSceneChild.children.length > 0) {
                for (let i = 0, len = projectSceneChild.children.length; i < len; i++) {
                    const child = this.parseSceneChild(projectSceneChild.children[i], drawer);
                    child && _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].add(sceneChild, child);
                }
            }
            return sceneChild;
        }
        console.warn(`JSONImporter: can't import`, [projectSceneChild]);
        return null;
    }
}
JSONImporter.createEmptyProject = () => {
    return {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v1"])(),
        name: '',
        width: 600,
        height: 600,
        resolution: 600,
        background: '#000',
        mainColor: '#fff',
        clearCanvas: true,
        ghosts: 0,
        ghost_skip_time: 30,
        ratio: 1,
        scene: {},
        sequence: {
            start: 0,
            end: 6000,
            durate: 6000,
            framerate: 60,
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (JSONImporter);
//# sourceMappingURL=JSONImporter.js.map

/***/ }),

/***/ "./dist/services/renderer/Capturer.js":
/*!********************************************!*\
  !*** ./dist/services/renderer/Capturer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * @category Services.Renderer
 * @class Capturer
 */
class Capturer {
    constructor(settings = {}) {
        this.type = settings.type || 'image/jpeg';
        this.encoder = this.type === 'image/png' ? 'png' : 'jpeg';
        this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png';
        this.quality = settings && settings.quality ? settings.quality : 1;
        this.started = false;
        this.promises = [];
        this.chunks = [];
    }
    setSettings(settings) {
        this.type = settings.type || 'image/jpeg';
        this.encoder = this.type === 'image/png' ? 'png' : 'jpeg';
        this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png';
        this.quality = settings && settings.quality ? settings.quality : 1;
    }
    start(total_frames) {
        this.chunks = new Array(total_frames);
        this.promises = new Array(total_frames);
        this.started = true;
    }
    stop() {
        this.chunks = [];
        this.promises = [];
        this.started = false;
    }
    capture(canvas, framenumber) {
        if (this.started) {
            const type = this.type;
            const quality = this.quality;
            const chunks = this.chunks;
            const promise = new Promise((resolve, reject) => {
                Capturer.render(canvas, type, quality)
                    .then(blob => {
                    chunks[framenumber] = blob;
                    resolve(framenumber);
                })
                    .catch(e => reject([framenumber, e]));
            });
            this.promises[framenumber] = promise;
            return promise;
        }
        return Promise.reject();
    }
    save() {
        if (this.started) {
            return new Promise((resolve, reject) => {
                Promise.all(this.promises).then(() => {
                    resolve(this.chunks);
                }, reason => {
                    reject(reason);
                });
            });
        }
        return Promise.reject('not started');
    }
    static getRenderTime(canvas, type, quality) {
        const startTime = performance.now();
        return Capturer.render(canvas, type, quality).then(() => performance.now() - startTime);
    }
    static getBlob(canvas, type, quality) {
        return new Promise((resolve, reject) => {
            if (canvas instanceof OffscreenCanvas)
                return canvas.convertToBlob({ type, quality }).then(resolve).catch(reject);
            else if (canvas instanceof HTMLCanvasElement)
                return canvas.toBlob(blob => (blob ? resolve(blob) : reject()), type, quality);
        });
    }
    static render(canvas, type, quality) {
        return new Promise((resolve, reject) => {
            const blobPromise = Capturer.getBlob(canvas, type, quality);
            blobPromise
                .then(blob => {
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                    fileReader.result && fileReader.result instanceof ArrayBuffer
                        ? resolve(new Uint8Array(fileReader.result))
                        : reject();
                }, { passive: true });
                fileReader.readAsArrayBuffer(blob);
            })
                .catch(e => reject(e));
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Capturer);
//# sourceMappingURL=Capturer.js.map

/***/ }),

/***/ "./dist/services/renderer/Renderer.js":
/*!********************************************!*\
  !*** ./dist/services/renderer/Renderer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");
/* harmony import */ var _Capturer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Capturer */ "./dist/services/renderer/Capturer.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 *
 * @category Services.Renderer
 * @class Renderer
 * @extends {Emitter<IRenderEvents>}
 */
class Renderer extends _events_Emitter__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this.capturer = new _Capturer__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    renderImage(drawer, settings) {
        this.started = true;
        console.log('settings', settings);
        this.capturer.setSettings(settings);
        this.capturer.stop();
        this.capturer.start(1);
        const promise = new Promise((resolve, reject) => {
            const bClearCanvas = drawer.getOption('clearCanvas', true);
            const timeline = drawer.getTimeline();
            const sequence = timeline.getSequence();
            if (!bClearCanvas) {
                const needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time);
                for (let i = 0; i <= needFrame; i++) {
                    timeline.setFrame(i);
                    drawer.draw();
                }
            }
            else {
                drawer.draw();
            }
            this.capturer.capture(drawer.getCanvas(), 0);
            this.capturer
                .save()
                .then(chunks => {
                resolve(chunks[0]);
                this.started = false;
            })
                .catch(reject);
        });
        this.renderPromise = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["cancelablePromise"])(promise);
        return promise;
    }
    prepareRenderAnimation(drawer, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTimeDrawTime = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["now"])();
            drawer.setOption('time', 0);
            drawer.draw();
            const drawTime = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["now"])() - startTimeDrawTime;
            const sequence = drawer.getTimeline().getSequence();
            const time = yield _Capturer__WEBPACK_IMPORTED_MODULE_3__["default"].getRenderTime(drawer.getCanvas(), settings.type, settings.quality);
            const renderTime = time + drawTime;
            const totalTime = renderTime * sequence.frames;
            const maxDuration = 60;
            const parts = 1 + Math.floor(totalTime / 1000 / maxDuration);
            const frameForPart = Math.floor(sequence.frames / parts);
            return {
                estimated_time: totalTime,
                total_frames: sequence.frames,
                total_parts: parts,
                forPart: frameForPart,
            };
        });
    }
    stop() {
        this.started = false;
        this.renderPromise && this.renderPromise.cancel();
        this.capturer.stop();
    }
    renderAnimation(drawer, settings) {
        this.stop();
        this.started = true;
        const sequence = drawer.getTimeline().getSequence();
        const promise = new Promise((resolve, reject) => {
            this.prepareRenderAnimation(drawer, settings).then((startMeta) => __awaiter(this, void 0, void 0, function* () {
                this.dispatch('renderer:start', startMeta);
                /**
                 * start rendering
                 */
                const zipParts = [];
                for (let i = 0; i < startMeta.total_parts; i++) {
                    if (this.started) {
                        try {
                            const zipPart = yield this.renderAnimationPart(drawer, settings, i * startMeta.forPart, startMeta.forPart, i, sequence.frames, startMeta.total_parts);
                            if (zipPart)
                                zipParts.push(zipPart);
                            else
                                reject();
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                    else {
                        reject();
                    }
                }
                resolve(zipParts);
                this.started = false;
            }));
        });
        this.renderPromise = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["cancelablePromise"])(promise);
        return promise;
    }
    renderAnimationPart(drawer, settings, frame_from, frame_count, part, total_frames, total_parts) {
        return __awaiter(this, void 0, void 0, function* () {
            this.capturer.setSettings(settings);
            this.capturer.stop();
            this.capturer.start(frame_count);
            const timeline = drawer.getTimeline();
            const sequence = timeline.getSequence();
            const tick_time = timeline.getTickTime();
            let lastRenderTime = 0;
            for (let i = 0; i < frame_count; i++) {
                if (!this.started)
                    return undefined;
                const current_frame = i + frame_from;
                const measure_start = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["now"])();
                timeline.setTime((sequence.start + current_frame * tick_time) % sequence.end);
                drawer.draw();
                yield this.capturer.capture(drawer.getCanvas(), i);
                const measure_end = Object(_Utilites__WEBPACK_IMPORTED_MODULE_1__["now"])();
                lastRenderTime = measure_end - measure_start;
                this.dispatch('renderer:render-frame', {
                    frame: current_frame,
                    part: part,
                    forPart: frame_count,
                    total_frames: total_frames,
                    total_parts: total_parts,
                    render_time: lastRenderTime,
                });
            }
            const chunks = yield this.capturer.save();
            if (this.started) {
                const zip = new jszip__WEBPACK_IMPORTED_MODULE_0__();
                for (let i = 0, len = chunks.length; i < len; i++) {
                    const frame_number = (i + frame_from).toString();
                    let frameName = '';
                    for (let j = frame_number.length; j <= 4; j++)
                        frameName += '0';
                    frameName += frame_number;
                    zip.file(frameName + this.capturer.extension, chunks[i]);
                }
                const result = yield zip.generateAsync({ type: 'blob' });
                if (!this.started)
                    return undefined;
                this.capturer.stop();
                return result;
            }
            else {
                return undefined;
            }
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Renderer);
//# sourceMappingURL=Renderer.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/SceneChildPropsData.js":
/*!**************************************************************!*\
  !*** ./dist/services/scene-utilities/SceneChildPropsData.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony import */ var _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/types/shape-base */ "./dist/core/types/shape-base.js");


const OptionShapePrimitiveAdaptMode = [
    { key: 'None', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None },
    { key: 'Scale', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale },
    { key: 'Center', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Center },
    { key: 'Fill', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Fill },
];
const OptionSpiralType = [
    { key: 'ARCHIMEDE', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.ARCHIMEDE },
    { key: 'FERMAT', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.FERMAT },
    { key: 'HYPERBOLIC', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.HYPERBOLIC },
    { key: 'LITUUS', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.LITUUS },
    { key: 'LOGARITHMIC', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.LOGARITHMIC },
];
const SceneChildPropsData = {
    repetitions: {
        animable: true,
        name: 'repetitions',
        label: 'Repetitions',
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
        default: 1,
        default_animate: 20,
        canBArray: true,
        transformation: 'none',
        type_value: 'int',
    },
    distance: {
        animable: true,
        name: 'distance',
        label: 'Distance',
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
        default: 0,
        canBArray: true,
        default_animate: 50,
        transformation: 'resolution-based',
    },
    displace: {
        animable: true,
        name: 'displace',
        label: 'Displace',
        type: 'range',
        min: -360,
        max: 360,
        step: 1,
        default: 0,
        default_animate: 360,
        transformation: 'angle',
    },
    squeezeX: {
        animable: true,
        name: 'squeezeX',
        label: 'SqueezeX',
        type: 'range',
        min: -0.2,
        max: 0.2,
        step: 0.001,
        default: 0,
        default_animate: 0.01,
        transformation: 'resolution-scaled-based',
    },
    squeezeY: {
        animable: true,
        name: 'squeezeY',
        label: 'SqueezeY',
        type: 'range',
        min: -0.2,
        max: 0.2,
        step: 0.001,
        default: 0,
        default_animate: 0.01,
        transformation: 'resolution-scaled-based',
    },
    rotateX: {
        animable: true,
        name: 'rotateX',
        label: 'RotateX',
        type: 'range',
        min: -360,
        max: 360,
        step: 1,
        default: 0,
        default_animate: 360,
        transformation: 'angle',
    },
    rotateY: {
        animable: true,
        name: 'rotateY',
        label: 'RotateY',
        type: 'range',
        min: -360,
        max: 360,
        step: 1,
        default: 0,
        default_animate: 360,
        transformation: 'angle',
    },
    rotateZ: {
        animable: true,
        name: 'rotateZ',
        label: 'RotateZ',
        type: 'range',
        min: -360,
        max: 360,
        step: 1,
        default: 0,
        default_animate: 360,
        transformation: 'angle',
    },
    skewX: {
        animable: true,
        name: 'skewX',
        label: 'SkewX',
        type: 'range',
        min: -90,
        max: 90,
        step: 1,
        default: 0,
        default_animate: 1,
        transformation: 'angle',
    },
    skewY: {
        animable: true,
        name: 'skewY',
        label: 'SkewY',
        type: 'range',
        min: -90,
        max: 90,
        step: 1,
        default: 0,
        default_animate: 1,
        transformation: 'angle',
    },
    translate: {
        animable: true,
        name: 'translate',
        label: 'Translate',
        type: 'multiple-range',
        min: -200,
        max: 200,
        step: 1,
        default: [0, 0],
        default_animate: 0,
        transformation: 'resolution-based',
    },
    scale: {
        animable: true,
        name: 'scale',
        label: 'Scale',
        type: 'multiple-range',
        min: -5,
        max: 5,
        step: 0.01,
        default: [1, 1],
        default_animate: 3,
        transformation: 'none',
    },
    rotationOrigin: {
        animable: true,
        name: 'rotationOrigin',
        label: 'Rotation Origin',
        type: 'multiple-range',
        min: -1,
        max: 1,
        step: 0.01,
        default: [1, 1],
        default_animate: [-1, 1],
        transformation: 'none',
    },
    // primitive
    fillColor: {
        animable: true,
        name: 'fillColor',
        label: 'Fill',
        type: 'color',
        default: '#000',
        default_animate: '#fff',
        transformation: 'none',
    },
    strokeColor: {
        animable: true,
        name: 'strokeColor',
        label: 'Stroke',
        type: 'color',
        default: '#fff',
        default_animate: '#000',
        transformation: 'none',
    },
    lineWidth: {
        animable: true,
        name: 'lineWidth',
        label: 'Stroke weight',
        type: 'slider',
        min: 0,
        max: 30,
        step: 0.1,
        default: 1,
        default_animate: 3,
        transformation: 'none',
    },
    bCloseShape: { name: 'bCloseShape', label: 'Closed', type: 'checkbox', default: undefined, transformation: 'none' },
    bUseParent: {
        name: 'bbUseParent',
        label: 'Use parent repetition',
        type: 'checkbox',
        default: false,
        transformation: 'none',
    },
    bAdaptBuffer: {
        name: 'bAdaptBuffer',
        label: 'Adapt',
        type: 'radio',
        options: OptionShapePrimitiveAdaptMode,
        default: undefined,
        transformation: 'none',
    },
    sideLength: {
        animable: true,
        name: 'sideLength',
        label: 'Side Length',
        type: 'multiple-range',
        min: 0.1,
        max: 100,
        step: 0.1,
        default: [10, 10],
        default_animate: 20,
        transformation: 'resolution-based',
    },
    sideNumber: {
        animable: true,
        name: 'sideNumber',
        label: 'Side Number',
        type: 'range',
        min: 1,
        max: 20,
        step: 1,
        default: 5,
        default_animate: 2,
        transformation: 'none',
    },
    // rose
    n: {
        animable: true,
        name: 'n',
        label: 'n',
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
        default: 1,
        default_animate: 3,
        transformation: 'none',
    },
    d: {
        animable: true,
        name: 'd',
        label: 'd',
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
        default: 2,
        default_animate: 4,
        transformation: 'none',
    },
    // lissajous
    wx: {
        animable: true,
        name: 'wx',
        label: 'wx',
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
        default: 1,
        default_animate: 3,
        transformation: 'none',
    },
    wy: {
        animable: true,
        name: 'wy',
        label: 'wy',
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
        default: 2,
        default_animate: 4,
        transformation: 'none',
    },
    wz: {
        animable: true,
        name: 'wz',
        label: 'wz',
        type: 'range',
        min: -360,
        max: 360,
        step: 1,
        default: 0,
        default_animate: 360,
        transformation: 'angle',
    },
    // spiral
    twists: {
        animable: true,
        name: 'twists',
        label: 'Twists',
        type: 'range',
        min: 1,
        max: 60,
        step: 0.1,
        default: 1,
        default_animate: 3,
        transformation: 'none',
    },
    twists_start: {
        animable: true,
        name: 'twists_start',
        label: 'Twists start',
        type: 'range',
        min: 1,
        max: 60,
        step: 0.1,
        default: 0,
        default_animate: 1,
        transformation: 'none',
    },
    spiral: {
        name: 'spiral',
        label: 'Spiral type',
        type: 'select',
        options: OptionSpiralType,
        default: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__["default"].types.ARCHIMEDE,
        transformation: 'none',
    },
    // loop
    'loop.start': {
        name: 'loop.start',
        label: 'start',
        type: 'range',
        default: undefined,
        min: 0,
        max: 100,
        step: 0.01,
        transformation: 'none',
    },
    'loop.end': {
        name: 'loop.end',
        label: 'end',
        type: 'range',
        default: undefined,
        min: 0,
        max: 100,
        step: 0.01,
        transformation: 'none',
    },
    'loop.inc': {
        name: 'loop.inc',
        label: 'inc',
        type: 'range',
        default: undefined,
        min: 0.01,
        max: 100,
        step: 0.01,
        transformation: 'none',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (SceneChildPropsData);
//# sourceMappingURL=SceneChildPropsData.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/ScenePropUtilities.js":
/*!*************************************************************!*\
  !*** ./dist/services/scene-utilities/ScenePropUtilities.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneChildPropsData */ "./dist/services/scene-utilities/SceneChildPropsData.js");


/**
 *
 * @category Services.Scene Utilities
 * @class ScenePropUtilities
 */
class ScenePropUtilities {
    //#region ShapeLoop
    static bValueLoop(value) {
        return (typeof value === 'object' &&
            'start' in value &&
            'end' in value &&
            'inc' in value &&
            'vertex' in value &&
            value.vertex.raw &&
            value.vertex.raw.length > 0);
    }
    static bValueVertexCallback(value) {
        return value && value.raw && value.raw.length > 0;
    }
    static composeVertexCallback(value) {
        if (value && value.raw) {
            const vertexCallback = new Function('vertex', ScenePropUtilities.RAW_ARGUMENTS, 'vertex_index', 'vertex_lenght', `return ${value.raw}`);
            return vertexCallback;
        }
    }
    static composeLoop(loop) {
        const vertex = loop.vertex.raw
            ? new Function('index', ScenePropUtilities.RAW_ARGUMENTS, `return ${loop.vertex.raw}`)
            : undefined;
        //Todo: number -> resolve function
        return {
            start: loop.start,
            end: loop.end,
            inc: loop.inc,
            vertex,
        };
    }
    //#endregion
    // static getRandomFunctionForProp(name): (rand: number) => any {
    //     const prop: ISceneChildProp = UISceneChildUtilitiesStatic.sceneChildProps[name]
    //     switch (prop.type)
    //     {
    //         case 'multiple-range': case 'range': case 'slider':
    //             return (rand: number) => {
    //                 const min = prop.min as number / 2
    //                 const max = prop.max as number / 2
    //                 const value = min + ((max - min) * rand)
    //                 return prop.bAngle ? toRadians(value) : value
    //             }
    //         case 'color':
    //             return (rand: number) => `hsl(${Math.floor(360 * rand)}, ${Math.floor(25 + 75 * rand)}%, ${Math.floor(25 + 75 * rand)}%)`
    //         default:
    //             return (rand: number) => undefined
    //     }
    // }
    //#endregion
    //#region Props relative to drawer
    static bValueAnimation(value) {
        return (value &&
            typeof value === 'object' &&
            value.type &&
            (value.type === 'simple' || value.type === 'raw') /*|| value.type == 'random'*/);
    }
    static bValueDrawer(value) {
        return value && typeof value === 'object' && value.type && value.type === 'drawer-transformation';
    }
    static bPropTransformable(name, value) {
        const sceneChildProp = _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_1__["default"][name];
        return (sceneChildProp &&
            sceneChildProp.transformation !== 'none' &&
            typeof value !== 'undefined' &&
            typeof value !== 'function' &&
            !ScenePropUtilities.bValueAnimation(value));
    }
    static getValueDrawerTransformationType(name) {
        const sceneChildProp = _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_1__["default"][name];
        return sceneChildProp && sceneChildProp.transformation !== 'none' ? sceneChildProp.transformation : null;
    }
    static getTransformedValue(drawer, name, value) {
        const sceneChildProp = _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_1__["default"][name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            let transformedValueFunction;
            switch (sceneChildProp.transformation) {
                case 'angle':
                    transformedValueFunction = _Utilites__WEBPACK_IMPORTED_MODULE_0__["toRadians"];
                    break;
                case 'resolution-based':
                    transformedValueFunction = drawer.getValueFromResolution.bind(drawer);
                    break;
                case 'resolution-scaled-based':
                    transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer);
                    break;
            }
            return transformedValueFunction
                ? Array.isArray(value)
                    ? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
                    : transformedValueFunction(value)
                : value;
        }
        return value;
    }
    static getTransformedValueInverse(drawer, name, value) {
        const sceneChildProp = _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_1__["default"][name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            let transformedValueFunction;
            switch (sceneChildProp.transformation) {
                case 'angle':
                    transformedValueFunction = _Utilites__WEBPACK_IMPORTED_MODULE_0__["toDegrees"];
                    break;
                case 'resolution-based':
                    transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer);
                    break;
                case 'resolution-scaled-based':
                    transformedValueFunction = drawer.getValueFromResolution.bind(drawer);
                    break;
            }
            if (transformedValueFunction)
                return Array.isArray(value)
                    ? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
                    : transformedValueFunction(value);
        }
        return value;
    }
}
ScenePropUtilities.RAW_ARGUMENTS = '{ context, repetition, time, shape, shape_loop, data }';
ScenePropUtilities.RAW_ARGUMENTS_WITH_PARENT = '{ context, repetition, parent, time, shape, shape_loop, data }';
/* harmony default export */ __webpack_exports__["default"] = (ScenePropUtilities);
//# sourceMappingURL=ScenePropUtilities.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/SceneUtilities.js":
/*!*********************************************************!*\
  !*** ./dist/services/scene-utilities/SceneUtilities.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _core_SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shapes/primitives/Line */ "./dist/core/shapes/primitives/Line.js");
/* harmony import */ var _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shapes/primitives/Triangle */ "./dist/core/shapes/primitives/Triangle.js");
/* harmony import */ var _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shapes/primitives/Rect */ "./dist/core/shapes/primitives/Rect.js");
/* harmony import */ var _core_shapes_primitives_RegularPolygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shapes/primitives/RegularPolygon */ "./dist/core/shapes/primitives/RegularPolygon.js");
/* harmony import */ var _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shapes/primitives/Circle */ "./dist/core/shapes/primitives/Circle.js");
/* harmony import */ var _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shapes/primitives/Rose */ "./dist/core/shapes/primitives/Rose.js");
/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony import */ var _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shapes/primitives/Lissajous */ "./dist/core/shapes/primitives/Lissajous.js");
/* harmony import */ var _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony import */ var _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/shapes/ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/shapes/ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _core_Group__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/Group */ "./dist/core/Group.js");
/* harmony import */ var _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/shapes/ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SceneChildPropsData */ "./dist/services/scene-utilities/SceneChildPropsData.js");
/* harmony import */ var _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ScenePropUtilities */ "./dist/services/scene-utilities/ScenePropUtilities.js");
/* harmony import */ var _animation_Animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../animation/Animation */ "./dist/services/animation/Animation.js");


// Shapes


















/**
 *
 * @category Services.Scene Utilities
 * @class SceneUtilities
 */
class SceneUtilities {
    constructor() {
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {
            Line: _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_2__["default"],
            Triangle: _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_3__["default"],
            Rect: _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_4__["default"],
            RegularPolygon: _core_shapes_primitives_RegularPolygon__WEBPACK_IMPORTED_MODULE_5__["default"],
            Circle: _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_6__["default"],
            Rose: _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_7__["default"],
            Spiral: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_8__["default"],
            Lissajous: _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_9__["default"],
            Group: _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"],
            Shape: _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"],
            ShapeLoop: _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__["default"],
            ShapeBuffer: _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_13__["default"],
        };
    }
    //#region Register scene child
    /**
     * Return a list of name of registered sceneChild
     *
     * @returns {Array<string>}
     * @memberof SceneUtilities
     */
    getRegistered() {
        return Object.keys(this.registeredSceneChilds);
    }
    /**
     * Register scene child for fast creation
     *
     * @param {string} type
     * @param {SceneChildInstance} ref
     * @memberof SceneUtilities
     */
    register(type, ref) {
        if (!(type in this.registeredSceneChilds)) {
            this.registeredSceneChilds[type] = ref;
        }
        else {
            console.warn(`SceneUtilities: SceneChild "${type}" is already registered`);
        }
    }
    /**
     * unregister scene child
     *
     * @param {string} type
     * @memberof SceneUtilities
     */
    unregister(type) {
        if (type in this.registeredSceneChilds) {
            delete this.registeredSceneChilds[type];
        }
        else {
            console.warn(`SceneUtilities: SceneChild "${type}" is not registered`);
        }
    }
    //#endregion
    //#region Scene manipulation
    /**
     * Logic creation of a SceneChild
     * Since scene is not passed, name are set if they are present in args or type
     *
     *
     * @param {(string | SceneChild)} item
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    create(item, props, scene, drawer) {
        var _a;
        scene = scene ? scene : typeof item !== 'string' ? item.scene : undefined;
        if (item instanceof _core_SceneChild__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this.getChildren(item).forEach(child => this.create(child, undefined, scene, drawer));
            return item;
        }
        if (item in this.registeredSceneChilds) {
            if (!props)
                props = {};
            props.id = props.id || Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v1"])();
            if (!props.name && scene)
                props.name = item + '_' + (this.getCountSceneChildOfType(scene, item) + 1);
            if (!props.data)
                props.data = {};
            if (!('props' in props.data))
                props.data.props = {};
            if (!('visible' in props.data))
                props.data.visible = true;
            if (!('highlighted' in props.data))
                props.data.highlighted = false;
            if (!('disableGhost' in props.data))
                props.data.disableGhost = false;
            if (item === 'ShapeLoop') {
                if (!('loop' in props))
                    props.loop = { start: 0, end: Math.PI * 2, inc: (Math.PI * 2) / 20 };
            }
            const sceneChild = new this.registeredSceneChilds[item](props);
            if (sceneChild && drawer && this.isAPrimitive(sceneChild)) {
                const sideLength = (_a = _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_17__["default"].sideLength) === null || _a === void 0 ? void 0 : _a.default;
                sceneChild.setProp('sideLength', _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].getTransformedValue(drawer, 'sideLength', sideLength));
                sceneChild.data.props.sideLength = sideLength;
            }
            this.getChildren(sceneChild).forEach(child => this.create(child));
            return sceneChild;
        }
        console.warn(`SceneUtilities: Creation failed. SceneChild "${item}" is not registered`);
        return null;
    }
    /**
     * Return number of element from a type
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    getCountSceneChildOfType(scene, type) {
        let count = 0;
        _core_Scene__WEBPACK_IMPORTED_MODULE_14__["default"].walk(sceneChild => {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    }
    /**
     * Return a copy of sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @param {boolean} [strict]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    copy(sceneChild, scene, drawer, strict = false) {
        // copy only props, without name, id
        const props = sceneChild.getProps();
        if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_16__["default"]) {
            props.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_13__["default"]) {
            props.shape = sceneChild.shape;
        }
        if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            props.bCloseShape = sceneChild.bCloseShape;
            props.bAdaptBuffer = sceneChild.bAdaptBuffer;
            props.vertexCallback = sceneChild.vertexCallback;
        }
        if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__["default"]) {
            props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies;
        }
        if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__["default"]) {
            props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies;
        }
        if (strict) {
            props.id = sceneChild.id;
            props.name = sceneChild.name;
            props.order = sceneChild.order;
            props.data = JSON.parse(JSON.stringify(sceneChild.data || {}));
        }
        const copied = this.create(sceneChild.type, props, scene, drawer);
        if (copied) {
            if (sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"]) {
                sceneChild.getChildren().forEach((child) => {
                    const copiedChild = this.copy(child, scene, drawer);
                    copiedChild && copied.add(copiedChild);
                });
            }
            else if (sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"] && sceneChild.shape) {
                const copiedShape = sceneChild.shape instanceof Float32Array ? sceneChild.shape : this.copy(sceneChild.shape, scene, drawer);
                copiedShape && (copied.shape = copiedShape);
            }
            else if (sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_13__["default"] && sceneChild.shape) {
                ;
                copied.setShape(new Float32Array(sceneChild.shape));
            }
            return copied;
        }
        console.warn(`SceneUtilities: Copy failed.`, sceneChild);
        return null;
    }
    /**
     * Add scene child to parent.
     * Create a group if parent is Shape and has one element (not Group) inside.
     *
     * @param {(SceneChild | Scene)} parent
     * @param {(string | SceneChild)} sceneChild
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    add(parent, sceneChild, props, scene) {
        let newSceneChild = null;
        if (parent instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"] || parent instanceof _core_Scene__WEBPACK_IMPORTED_MODULE_14__["default"]) {
            newSceneChild = this.create(sceneChild, props, scene);
            newSceneChild && parent.add(newSceneChild);
        }
        else if (parent instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"]) {
            if (parent.shape == undefined) {
                newSceneChild = this.create(sceneChild, props, scene);
                newSceneChild && parent.setShape(newSceneChild);
            }
            else if (parent.shape instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_16__["default"]) {
                newSceneChild = this.create(sceneChild, props, scene);
                if (newSceneChild) {
                    const newGroup = this.create('Group', undefined, scene);
                    const sibling = parent.shape;
                    this.remove(parent, sibling);
                    parent.setShape(newGroup);
                    newGroup.add(sibling);
                    newGroup.add(newSceneChild);
                }
            }
            else if (parent.shape instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"]) {
                this.add(parent.shape, sceneChild, undefined, scene);
            }
        }
        return newSceneChild;
    }
    /**
     * Remove scene child from
     *
     * @param {SceneChild} from
     * @param {SceneChild} [item]
     * @memberof SceneUtilities
     */
    remove(from, item) {
        if (!item) {
            // 'from' as item to remove
            if (from.scene) {
                const parent = this.getParent(from);
                !parent ? from.scene.removeFromId(from.id) : this.remove(parent, from);
            }
            else {
                console.warn(`SceneUtilities: Remove failed. SceneChild is not added into scene`, from);
            }
        }
        else {
            if (from instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"])
                from.removeFromId(item.id);
            else if (from instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"])
                from.setShape(undefined);
        }
    }
    //#endregion
    //#region Scene parent and children
    /**
     * Get Root parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    getRootParent(sceneChild) {
        const parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[0] : null;
    }
    /**
     * Get first level parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    getParent(sceneChild) {
        const parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[parents.length - 1] : null;
    }
    /**
     * Get all parents
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getParents(sceneChild) {
        return sceneChild && sceneChild.scene ? sceneChild.scene.getParentsOfSceneChild(sceneChild) : [];
    }
    /**
     * Return children of a shape.
     * Only Group has array of children, Shape has only one child.
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getChildren(sceneChild) {
        if (sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"])
            return sceneChild.getChildren();
        return sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"] && sceneChild.shape ? [sceneChild.shape] : [];
    }
    /**
     * Return only primitive children
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getChildrenPrimitives(sceneChild) {
        let result = [];
        const children = this.getChildren(sceneChild);
        for (let i = 0, len = children.length; i < len; i++) {
            if (children[i] instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_11__["default"])
                result.push(children[i]);
            else
                result = result.concat(...this.getChildrenPrimitives(children[i]));
        }
        return result;
    }
    /**
     * Return a list of neighbors
     *
     * @param {SceneChild} sceneChild
     * @returns {(Array<SceneChild>)}
     * @memberof SceneUtilities
     */
    getNeighbors(sceneChild) {
        if (sceneChild.scene) {
            const parent = this.getParent(sceneChild);
            return parent == null ? sceneChild.scene.getChildren() : this.getChildren(parent);
        }
        return [];
    }
    /**
     * Return a number of element type into a scene
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    getCountOfSceneChildType(scene, type) {
        let count = 0;
        _core_Scene__WEBPACK_IMPORTED_MODULE_14__["default"].walk(sceneChild => {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    }
    /**
     * Walk through sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {(child: SceneChild) => void} callback
     * @memberof SceneUtilities
     */
    walk(sceneChild, callback) {
        callback(sceneChild);
        this.getChildren(sceneChild).forEach(child => callback(child));
    }
    //#endregion
    //#region checker
    /**
     * Check sceneChild is Group
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    isGroup(sceneChild) {
        return sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_15__["default"];
    }
    /**
     * Check sceneChild are Shape and has a child
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasShapeChild(sceneChild) {
        return sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__["default"] ? sceneChild.shape !== undefined : false;
    }
    /**
     * Check sceneChild is a ShapeBuffer an are binded
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasShapeBuffer(sceneChild) {
        return sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_13__["default"];
    }
    /**
     * Check scene child is a Primitive
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    isAPrimitive(sceneChild) {
        return sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
    /**
     * Check scene child is a ShapeLoop
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasLoop(sceneChild) {
        return sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__["default"];
    }
    //#endregion
    /**
     * Set UISceneChild prop, convert animation on transformable props
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {*} value
     * @param {DrawerCanvas} drawer
     * @memberof SceneUtilities
     */
    setProp(sceneChild, name, value, drawer) {
        if (_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bValueAnimation(value)) {
            sceneChild.data.props[name] = value;
            sceneChild.setProp(name, _animation_Animation__WEBPACK_IMPORTED_MODULE_19__["default"].composeAnimation(drawer, name, value));
            return;
        }
        if (name === 'loop') {
            if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_12__["default"] && _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bValueLoop(value)) {
                sceneChild.data.props.loop = value;
                sceneChild.setProp('loop', _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].composeLoop(value));
                const dynamic = value.dynamyc;
                const realDynamic = sceneChild.shapeLoopPropsDependencies.indexOf('prop_argumens') >= 0;
                if (dynamic !== realDynamic) {
                    const dependencies = [...sceneChild.shapeLoopPropsDependencies];
                    if (dynamic)
                        !(dependencies.indexOf('prop_argumens') >= 0) && dependencies.push('prop_arguments');
                    else
                        dependencies.indexOf('prop_argumens') >= 0 && dependencies.splice(dependencies.indexOf('prop_arguments', 1));
                    sceneChild.shapeLoopPropsDependencies = dependencies;
                }
                sceneChild.clearBuffer(true, true);
            }
            return;
        }
        if (name === 'vertexCallback') {
            if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_11__["default"] && _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bValueVertexCallback(value)) {
                sceneChild.data.props.vertexCallback = value;
                sceneChild.vertexCallback = _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].composeVertexCallback(value);
                sceneChild.bUseParent = true;
                sceneChild.clearBuffer(true, true);
            }
            return;
        }
        if (_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bPropTransformable(name, value)) {
            if (_ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bValueDrawer(value)) {
                sceneChild.data.props[name] = value;
                sceneChild.setProp(name, _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].getTransformedValue(drawer, name, value.value));
            }
            else {
                sceneChild.setProp(name, value);
            }
            return;
        }
        if (name in _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_17__["default"] && _SceneChildPropsData__WEBPACK_IMPORTED_MODULE_17__["default"][name].transformation !== 'none')
            sceneChild.data.props[name] = value;
        switch (name) {
            case 'bUseParent':
                if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_16__["default"])
                    sceneChild.bUseParent = value;
                break;
            case 'bCloseShape':
                ;
                sceneChild.setClosed(value);
                break;
            case 'bAdaptBuffer':
                ;
                sceneChild.setAdapted(value);
                break;
            default:
                // loop
                if (name.indexOf('.') > 0) {
                    const splitted = name.split('.');
                    sceneChild.setProp({ [splitted[0]]: { [splitted[1]]: value } });
                }
                else
                    sceneChild.setProp(name, value);
                break;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new SceneUtilities());
//# sourceMappingURL=SceneUtilities.js.map

/***/ }),

/***/ "./dist/services/timeline/Timeline.js":
/*!********************************************!*\
  !*** ./dist/services/timeline/Timeline.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");

/**
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<TimelineEvents>}
 */
class Timeline extends _events_Emitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Class used for time and rendering managment
     *
     * @memberof Timeline
     */
    constructor() {
        super();
        this.sequence = {
            start: 0,
            end: 60000,
            durate: 60000,
            framerate: 60,
            frames: ((6000 - 0) / 1000) * 60,
        };
        this.fps = this.sequence.framerate;
        this.fps_samples_size = 30;
        this.fps_samples = [];
        this.fps_samples_index = 0;
        this.b_sequence_started = false;
        this.current_frame = -1;
        // this.paused_time = 0
        this.last_tick = 0;
        this.accumulator = 0;
        this.calculateTickAndSequence();
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     * @memberof Timeline
     */
    getSequence() {
        return Object.assign({}, this.sequence);
    }
    /**
     * Set sequence
     *
     * @param {number} start
     * @param {number} end
     * @param {number} framerate
     * @memberof Timeline
     */
    setSequence(start, end, framerate) {
        this.sequence.start = start;
        this.sequence.end = end;
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Return framerate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramerate() {
        return this.sequence.framerate;
    }
    /**
     * Set a framerate of animation
     *
     * @param {number} framerate
     * @memberof Timeline
     */
    setFramerate(framerate) {
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Set the number of frames based on the sequence
     *
     * @private
     * @memberof Timeline
     */
    calculateTickAndSequence() {
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.floor(((this.sequence.end - this.sequence.start) / 1000) * this.sequence.framerate);
        this.sequence.durate = this.sequence.end - this.sequence.start;
    }
    /**
     * Get animation start time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceStartTime() {
        return this.sequence.start;
    }
    /**
     * Set animation start time
     *
     * @param {number} start_time
     * @memberof Timeline
     */
    setSequenceStartTime(start_time) {
        this.sequence.start = start_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Get a aniamtion end time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceEndTime() {
        return this.sequence.end;
    }
    /**
     * Set animation end time
     *
     * @param {number} end_time
     * @memberof Timeline
     */
    setSequenceEndTime(end_time) {
        this.sequence.end = end_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Get animation durate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceDuration() {
        return this.sequence.end - this.sequence.start;
    }
    /**
     * Get number of frames of animation
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramesCount() {
        return this.sequence.frames;
    }
    //#endregion meta
    //#region change status
    /**
     * Start the sequence
     *
     * @memberof Timeline
     */
    start() {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            // this.last_tick = now() - this.paused_time
            this.last_tick = 0;
            this.accumulator = 0;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    }
    /**
     * Pause the sequence
     *
     * @memberof Timeline
     */
    pause() {
        if (this.b_sequence_started) {
            // this.paused_time = now()
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    }
    /**
     * Stop the sequence and reset
     *
     * @memberof Timeline
     */
    stop() {
        if (this.current_frame != 1 || this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_frame = -1;
            // this.paused_time = 0
            this.dispatch('timeline:progress', {
                current_frame: this.current_frame,
                current_time: 0,
                fps: this.fps,
            });
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    }
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     * @memberof Timeline
     */
    tick(timestamp) {
        if (this.b_sequence_started) {
            const currentTime = timestamp;
            const elapsed = currentTime - this.last_tick;
            this.accumulator += elapsed;
            // if (elapsed >= this.tick_time) {
            if (this.accumulator >= this.tick_time) {
                const delta = (currentTime - this.last_tick) / 1000;
                this.calculateFPS(1 / delta);
                // this.last_tick = currentTime - (elapsed % this.tick_time)
                this.last_tick = currentTime;
                this.current_frame = this.getFrameAtTime(this.last_tick);
                // this.current_frame = (this.current_frame + 1) % this.sequence.frames
                this.accumulator -= this.tick_time;
                this.dispatch('timeline:progress', {
                    current_frame: this.current_frame,
                    current_time: this.last_tick,
                    fps: this.fps,
                });
                return true;
            }
        }
        return false;
    }
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     * @memberof Timeline
     */
    calculateFPS(currentFPS) {
        const samples = this.fps_samples.length;
        if (samples > 0) {
            let average = 0;
            for (let i = 0; i < samples; i++)
                average += this.fps_samples[i];
            this.fps = Math.round(average / samples);
        }
        this.fps_samples[this.fps_samples_index] = Math.round(currentFPS);
        this.fps_samples_index = (this.fps_samples_index + 1) % this.fps_samples_size;
    }
    //#endregion
    //#region animation meta
    bSequenceStarted() {
        return this.b_sequence_started;
    }
    /**
     * Return current animation frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getCurrentFrame() {
        return this.current_frame;
    }
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     * @memberof Timeline
     */
    getFrameTime(frame) {
        frame = frame < 0 ? this.sequence.frames - (frame % this.sequence.frames) : frame % this.sequence.frames;
        return (this.sequence.start + frame * this.tick_time) % this.sequence.end;
    }
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     * @memberof Timeline
     */
    getFrameAtTime(time) {
        return Math.round(((this.sequence.start + time) % this.sequence.end) / this.tick_time);
    }
    /**
     * set current frame
     *
     * @param {number} frame
     * @memberof Timeline
     */
    setFrame(frame) {
        this.current_frame = frame - 1;
    }
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTickTime() {
        return this.tick_time;
    }
    /**
     * Return the current time based on current frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTime() {
        return ((this.sequence.start + (this.current_frame <= 0 ? 0 : this.current_frame) * this.tick_time) % this.sequence.end);
    }
    /**
     * Set animation at time
     *
     * @param {number} time
     * @memberof Timeline
     */
    setTime(time) {
        time = time <= this.sequence.start ? this.sequence.start : time >= this.sequence.end ? this.sequence.end : time;
        this.current_frame = Math.floor(time / this.tick_time) - 1;
        this.dispatch('timeline:progress', {
            current_frame: this.current_frame,
            current_time: time,
            fps: this.fps,
        });
    }
}
Timeline.START = 'start';
Timeline.PAUSE = 'pause';
Timeline.STOP = 'stop';
/* harmony default export */ __webpack_exports__["default"] = (Timeline);
//# sourceMappingURL=Timeline.js.map

/***/ }),

/***/ "./node_modules/@pups/core/build/Models/Color/ColorConversions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@pups/core/build/Models/Color/ColorConversions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ColorConversions {
    /**
     *
     * @static
     * @param {RGB} rgb
     * @returns {HEX}
     * @memberof ColorConversions
     */
    static rgbToHex(rgb) {
        return `#${ColorConversions.toHex(rgb.r)}${ColorConversions.toHex(rgb.g)}${ColorConversions.toHex(rgb.b)}`;
    }
    /**
     *
     * @private
     * @static
     * @param {number} value
     * @returns
     * @memberof ColorConversions
     */
    static toHex(value) {
        const hex = value.toString(16);
        return hex.length == 2 ? hex : '0' + hex;
    }
    /**
     *
     *
     * @static
     * @param {(Types.Color.HEX | Array<string>)} hex
     * @returns {Types.Color.RGB}
     * @memberof ColorConversions
     */
    static hexToRgb(hex) {
        hex = typeof hex === 'string' ? hex.match(/[a-zA-Z0-9]{2}/gi) : hex;
        return {
            r: ColorConversions.hexToDec(hex[0]),
            g: ColorConversions.hexToDec(hex[1]),
            b: ColorConversions.hexToDec(hex[2])
        };
    }
    /**
     * Converte un esadecimale in un decimale
     *
     * @static
     * @param {string} str
     * @returns {number}
     * @memberof ColorConversions
     */
    static hexToDec(str) {
        return parseInt(ColorConversions.fill2(str), 16);
    }
    /**
     * Dublica il carattere se è singolo
     *
     * @static
     * @param {string} str
     * @returns {string}
     * @memberof ColorConversions
     */
    static fill2(str) {
        return str.length == 1 ? str + str : str;
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.RGB} rgb
     * @returns {Types.Color.HSL}
     * @memberof ColorConversions
     */
    static rgbToHsl(rgb) {
        let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h, s, l };
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.HSL} hsl
     * @returns {Types.Color.RGB}
     * @memberof ColorConversions
     */
    static hslToRgb(hsl) {
        let h = hsl.h, s = hsl.s, l = hsl.l, r, g, b;
        if (s == 0) {
            r = g = b = l; // achromatic
        }
        else {
            const hue2rgb = ((p, q, t) => {
                t += t < 0 ? 1 : t > 1 ? -1 : 0;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            });
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.RGB} rgb
     * @returns {Types.Color.HSV}
     * @memberof ColorConversions
     */
    static rgbToHsv(rgb) {
        let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, v = max;
        const d = max - min;
        s = max == 0 ? 0 : d / max;
        if (max == min) {
            h = 0; // achromatic
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h, s, v };
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.HSV} hsv
     * @returns {Types.Color.RGB}
     * @memberof ColorConversions
     */
    static hsvToRgb(hsv) {
        let h = hsv.h, s = hsv.s, v = hsv.v, r, g, b;
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.RGB} rgb
     * @returns {Types.Color.CMYK}
     * @memberof ColorConversions
     */
    static rgbToCmyk(rgb) {
        let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
        let cmyk = { k: null, c: null, m: null, y: null };
        cmyk.k = +(1 - Math.max.call(null, r, g, b));
        cmyk.c = +((1 - r - cmyk.k) / (1 - cmyk.k));
        cmyk.m = +((1 - g - cmyk.k) / (1 - cmyk.k));
        cmyk.y = +((1 - b - cmyk.k) / (1 - cmyk.k));
        return cmyk;
    }
    /**
     *
     *
     * @static
     * @param {Types.Color.CMYK} cmyk
     * @returns {Types.Color.RGB}
     * @memberof ColorConversions
     */
    static cmykToRgb(cmyk) {
        return {
            r: 255 * (1 - cmyk.c) * (1 - cmyk.k),
            g: 255 * (1 - cmyk.m) * (1 - cmyk.k),
            b: 255 * (1 - cmyk.y) * (1 - cmyk.k)
        };
    }
}
exports.default = ColorConversions;
//# sourceMappingURL=ColorConversions.js.map

/***/ }),

/***/ "./node_modules/@pups/core/build/Models/Color/ColorExceptions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@pups/core/build/Models/Color/ColorExceptions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ColorNotValidException extends Error {
    constructor(color, types) {
        super(`Il colore '${color}' non è valido.\nI formati supportati sono: ${types.map(e => e.type).join(', ')}`);
    }
}
exports.ColorNotValidException = ColorNotValidException;
class ColorParsingException extends Error {
    constructor(color) {
        super(`Impossibile convertire il colore '${color}'`);
    }
}
exports.ColorParsingException = ColorParsingException;
//# sourceMappingURL=ColorExceptions.js.map

/***/ }),

/***/ "./node_modules/@pups/core/build/Models/Color/ColorManager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@pups/core/build/Models/Color/ColorManager.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Number_1 = __webpack_require__(/*! @pups/utility/build/Number */ "./node_modules/@pups/utility/build/Number.js");
const Array_1 = __webpack_require__(/*! @pups/utility/build/Array */ "./node_modules/@pups/utility/build/Array.js");
const ColorParser_1 = __webpack_require__(/*! ./ColorParser */ "./node_modules/@pups/core/build/Models/Color/ColorParser.js");
const ColorConversions_1 = __webpack_require__(/*! ./ColorConversions */ "./node_modules/@pups/core/build/Models/Color/ColorConversions.js");
/**
 *
 *
 * @class ColorManager
 */
class ColorManager {
    /**
     * Creates an instance of ColorManager.
     *
     * @param {Types.Color.All} color
     * @memberof ColorManager
     */
    constructor(color) {
        const parsed = ColorParser_1.default.parse(color);
        this.rgb = this.getRgbFromMath(parsed);
        this.hsl = ColorConversions_1.default.rgbToHsl(this.rgb);
        this.hsv = ColorConversions_1.default.rgbToHsv(this.rgb);
        this.hex = ColorConversions_1.default.rgbToHex(this.rgb);
        this.cmyk = ColorConversions_1.default.rgbToCmyk(this.rgb);
        this.setAlpha(['rgba', 'hsla', 'hsva'].indexOf(parsed.type) >= 0 ? parsed.value.length >= 3 ? parsed.value[3] : 1 : 1);
    }
    /**
     *
     *
     * @param {number} [alpha]
     * @memberof ColorManager
     */
    setAlpha(alpha) {
        this.alpha = alpha;
        this.alpha = this.alpha > 1 ? this.alpha / 255 : this.alpha;
    }
    /**
     *
     *
     * @returns {number}
     * @memberof ColorManager
     */
    getAlpha() {
        return this.alpha;
    }
    /**
     *
     *
     * @private
     * @param {Types.Color.Parsing.Match} match
     * @returns {Types.Color.RGB}
     * @memberof ColorManager
     */
    getRgbFromMath(match) {
        switch (match.type) {
            case 'rgb':
            case 'rgba':
                const rgb = Array_1.toFloat(match.value);
                return { r: rgb[0], g: rgb[1], b: rgb[2] };
            case 'hsl':
            case 'hsla':
                const hsl = Array_1.toFloat(match.value);
                return ColorConversions_1.default.hslToRgb({ h: hsl[0], s: hsl[1], l: hsl[2] });
            case 'hsv':
            case 'hsva':
                const hsv = Array_1.toFloat(match.value);
                return ColorConversions_1.default.hsvToRgb({ h: hsv[0], s: hsv[1], v: hsv[2] });
            case 'cmyk':
                const cmyk = Array_1.toFloat(match.value);
                return ColorConversions_1.default.cmykToRgb({ c: cmyk[0], m: cmyk[1], y: cmyk[2], k: cmyk[3] });
            case 'hex3':
            case 'hex4':
            case 'hex6':
            case 'hex8':
                return ColorConversions_1.default.hexToRgb(match.value);
        }
    }
    /**
     *
     *
     * @returns {Types.Color.RGB}
     * @memberof ColorManager
     */
    getRgb() {
        return Object.assign({}, this.rgb);
    }
    /**
     *
     *
     * @returns {Types.Color.HSL}
     * @memberof ColorManager
     */
    getHsl() {
        return Object.assign({}, this.hsl);
    }
    /**
     *
     *
     * @returns {Types.Color.HSV}
     * @memberof ColorManager
     */
    getHsv() {
        return Object.assign({}, this.hsv);
    }
    /**
     *
     *
     * @returns {Types.Color.CMYK}
     * @memberof ColorManager
     */
    getCmyk() {
        return Object.assign({}, this.cmyk);
    }
    /**
     *
     *
     * @private
     * @param {Types.Palette.Format} type
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {boolean} [alpha=false]
     * @param {boolean} [isHslOrHsv=false]
     * @returns
     * @memberof ColorManager
     */
    toString(type, x, y, z, alpha = false, isHslOrHsv = false) {
        const p = isHslOrHsv ? '%' : '';
        return `${type + (alpha ? 'a' : '')}(${Math.round(x)}, ${Math.round(y) + p}, ${Math.round(z) + p}${alpha ? ', ' + this.alpha : ''})`;
    }
    /**
     *
     *
     * @param {boolean} [alpha=false]
     * @returns {string}
     * @memberof ColorManager
     */
    toRGB(alpha = false) {
        return this.toString('rgb', this.rgb.r, this.rgb.g, this.rgb.b, alpha, false);
    }
    /**
     *
     *
     * @param {boolean} [alpha=false]
     * @returns {string}
     * @memberof ColorManager
     */
    toHSL(alpha = false) {
        return this.toString.call(this, 'hsl', Number_1.relativeClamp(this.hsl.h, 0, 1, 0, 360), this.hsl.s * 100, this.hsl.l * 100, alpha, true);
    }
    /**
     *
     *
     * @param {boolean} [alpha=false]
     * @returns {string}
     * @memberof ColorManager
     */
    toHSV(alpha = false) {
        return this.toString.call(this, 'hsv', Number_1.relativeClamp(this.hsv.h, 0, 1, 0, 360), this.hsv.s * 100, this.hsv.v * 100, alpha, true);
    }
    /**
     *
     *
     * @returns {string}
     * @memberof ColorManager
     */
    toCMYK() {
        return `cmyk(${Number_1.fix(this.cmyk.c * 100, 2)}%, ${Number_1.fix(this.cmyk.m * 100, 2)}%, ${Number_1.fix(this.cmyk.y * 100, 2)}%, ${Number_1.fix(this.cmyk.k * 100, 2)}%)`;
    }
    /**
     *
     *
     * @returns {string}
     * @memberof ColorManager
     */
    toHEX() {
        return this.hex;
    }
    /**
     *
     *
     * @returns {string}
     * @memberof ColorManager
     */
    toRGBA() {
        return this.toRGB(true);
    }
    /**
     *
     *
     * @returns {string}
     * @memberof ColorManager
     */
    toHSLA() {
        return this.toHSL(true);
    }
    /**
     *
     *
     * @returns {string}
     * @memberof ColorManager
     */
    toHSVA() {
        return this.toHSV(true);
    }
}
exports.default = ColorManager;
//# sourceMappingURL=ColorManager.js.map

/***/ }),

/***/ "./node_modules/@pups/core/build/Models/Color/ColorParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@pups/core/build/Models/Color/ColorParser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorExceptions_1 = __webpack_require__(/*! ./ColorExceptions */ "./node_modules/@pups/core/build/Models/Color/ColorExceptions.js");
const Array_1 = __webpack_require__(/*! @pups/utility/build/Array */ "./node_modules/@pups/utility/build/Array.js");
const Number_1 = __webpack_require__(/*! @pups/utility/build/Number */ "./node_modules/@pups/utility/build/Number.js");
/**
 * Classe statica.
 * Si utilizza il metodo 'parse' per convertire una string o un oggetto in un oggetto del tipo Types.Color.Parsing.Match
 *
 * @class ColorParser
 */
class ColorParser {
    /**
     *
     *
     * @static
     * @param {Types.Color.All} color
     * @returns {Types.Color.Parsing.Match}
     * @memberof ColorParser
     */
    static parse(color) {
        return typeof color === 'string' ? ColorParser.fromString(color) : ColorParser.fromObject(color);
    }
    /**
     *
     *
     * @private
     * @static
     * @param {string} color
     * @returns {Types.Color.Parsing.Match}
     * @memberof ColorParser
     */
    static fromString(color) {
        let match, result = null;
        for (let i = ColorParser.MATCHES.length - 1; i >= 0; i--)
            if ((match = ColorParser.MATCHES[i].regexp.exec(color)))
                result = { type: ColorParser.MATCHES[i].type, value: match.slice(1) };
        if (!result)
            throw new ColorExceptions_1.ColorNotValidException(color, ColorParser.MATCHES);
        if (result.type.indexOf('hex') != -1)
            return result;
        else
            result.value = Array_1.toFloat(result.value);
        const matchResolver = typeof ColorParser.MATCH_VALUES[result.type] === 'string' ? ColorParser.MATCH_VALUES[ColorParser.MATCH_VALUES[result.type]] : ColorParser.MATCH_VALUES[result.type];
        for (let i in matchResolver.possibilities) {
            if (ColorParser.isFromZeroTo(result.value, matchResolver.possibilities[i])) {
                if (matchResolver.possibilities[i] != matchResolver.want) {
                    result.value = ColorParser.scaleToFromZeroTo(result.value, matchResolver.possibilities[i], matchResolver.want);
                }
                return result;
            }
        }
        throw new ColorExceptions_1.ColorParsingException(color);
    }
    /**
     *
     *
     * @private
     * @static
     * @param {(Types.Color.RGB | Types.Color.HSV | Types.Color.HSL | Types.Color.CMYK)} color
     * @returns {Types.Color.Parsing.Match}
     * @memberof ColorParser
     */
    static fromObject(color) {
        if ('r' in color)
            return { type: 'rgba', value: [color.r, color.g, color.b, color.a] };
        if ('l' in color)
            return { type: 'hsla', value: [color.h, color.s, color.l, color.a] };
        if ('v' in color)
            return { type: 'hsva', value: [color.h, color.s, color.v, color.a] };
        if ('c' in color)
            return { type: 'cmyk', value: [color.c, color.m, color.y, color.k] };
        throw new ColorExceptions_1.ColorParsingException(JSON.stringify(color));
    }
    /**
     *
     *
     * @static
     * @param {(Array<string | number>)} values
     * @returns {boolean}
     * @memberof ColorParser
     */
    static isFromZeroToOne(values) {
        for (let i in values)
            if (values[i] > 1)
                return false;
        return true;
    }
    /**
     *
     *
     * @static
     * @param {(Array<string | number>)} values
     * @param {(Array<number> | number)} maxValues
     * @returns {boolean}
     * @memberof ColorParser
     */
    static isFromZeroTo(values, maxValues) {
        if (((Array.isArray(maxValues) && maxValues != ColorParser.ZERO_TO_ONE) || (!Array.isArray(maxValues) && maxValues == 1)) && ColorParser.isFromZeroToOne(values))
            return false;
        for (let i in values)
            if (values[i] > (Array.isArray(maxValues) ? maxValues[i] : maxValues))
                return false;
        return true;
    }
    /**
     *
     *
     * @static
     * @param {Array<number>} values
     * @param {(Array<number> | number)} maxValues
     * @returns {Array<number>}
     * @memberof ColorParser
     */
    static scaleToFromZeroToOne(values, maxValues) {
        if (ColorParser.isFromZeroToOne(values))
            return values;
        const result = [];
        for (let i in values)
            result.push(Number_1.clamp01(values[i] / (Array.isArray(maxValues) ? maxValues[i] : maxValues)));
        return result;
    }
    /**
     *
     *
     * @static
     * @param {Array<number>} values
     * @param {Array<number>} maxValues
     * @param {Array<number>} wantValues
     * @returns
     * @memberof ColorParser
     */
    static scaleToFromZeroTo(values, maxValues, wantValues) {
        const result = [];
        for (let i in values)
            result.push(Number_1.clamp(0, (Array.isArray(wantValues) ? wantValues[i] : wantValues), values[i] / (Array.isArray(maxValues) ? maxValues[i] : maxValues) * (Array.isArray(wantValues) ? wantValues[i] : wantValues)));
        return result;
    }
}
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.CSS_INTEGER = '[-\\+]?\\d+%?';
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.CSS_UNIT = '(?:' + ColorParser.CSS_NUMBER + ')|(?:' + ColorParser.CSS_INTEGER + ')';
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.PERMISSIVE_MATCH3 = '[\\s|\\(]+(' + ColorParser.CSS_UNIT + ')[,|\\s]+(' + ColorParser.CSS_UNIT + ')[,|\\s]+(' + ColorParser.CSS_UNIT + ')\\s*\\)?';
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.PERMISSIVE_MATCH4 = '[\\s|\\(]+(' + ColorParser.CSS_UNIT + ')[,|\\s]+(' + ColorParser.CSS_UNIT + ')[,|\\s]+(' + ColorParser.CSS_UNIT + ')[,|\\s]+(' + ColorParser.CSS_UNIT + ')\\s*\\)?';
/**
 *
 *
 * @private
 * @static
 * @type {Array<number>}
 * @memberof ColorParser
 */
ColorParser.ZERO_TO_ONE = [1, 1, 1, 1];
/**
 *
 *
 * @private
 * @static
 * @type {Array<number>}
 * @memberof ColorParser
 */
ColorParser.ZERO_TO_255 = [255, 255, 255, 1];
/**
 *
 *
 * @private
 * @static
 * @memberof ColorParser
 */
ColorParser.MATCH_VALUES = {
    'rgb': {
        possibilities: [ColorParser.ZERO_TO_ONE, ColorParser.ZERO_TO_255],
        want: ColorParser.ZERO_TO_255
    },
    'rgba': 'rgb',
    'cmyk': {
        possibilities: [[100, 100, 100, 100], ColorParser.ZERO_TO_ONE],
        want: ColorParser.ZERO_TO_ONE
    },
    'hsl': {
        possibilities: [[360, 100, 100, 1], ColorParser.ZERO_TO_ONE],
        want: ColorParser.ZERO_TO_ONE
    },
    'hsla': 'hsl', 'hsv': 'hsl', 'hsva': 'hsl'
};
/**
 *
 *
 * @private
 * @static
 * @type {Array<Types.Color.Parsing.Regex>}
 * @memberof ColorParser
 */
ColorParser.MATCHES = [
    //{ type: 'CSS_UNIT', regexp: new RegExp(CSS_UNIT) },
    { type: 'rgb', regexp: new RegExp('rgb' + ColorParser.PERMISSIVE_MATCH3) },
    { type: 'rgba', regexp: new RegExp('rgba' + ColorParser.PERMISSIVE_MATCH4) },
    { type: 'hsl', regexp: new RegExp('hsl' + ColorParser.PERMISSIVE_MATCH3) },
    { type: 'hsla', regexp: new RegExp('hsla' + ColorParser.PERMISSIVE_MATCH4) },
    { type: 'hsv', regexp: new RegExp('hsv' + ColorParser.PERMISSIVE_MATCH3) },
    { type: 'hsva', regexp: new RegExp('hsva' + ColorParser.PERMISSIVE_MATCH4) },
    { type: 'cmyk', regexp: new RegExp('cmyk' + ColorParser.PERMISSIVE_MATCH4) },
    { type: 'hex3', regexp: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/ },
    { type: 'hex6', regexp: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ },
    { type: 'hex4', regexp: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/ },
    { type: 'hex8', regexp: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ },
];
exports.default = ColorParser;
//# sourceMappingURL=ColorParser.js.map

/***/ }),

/***/ "./node_modules/@pups/utility/build/Array.js":
/*!***************************************************!*\
  !*** ./node_modules/@pups/utility/build/Array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Object_1 = __webpack_require__(/*! ./Object */ "./node_modules/@pups/utility/build/Object.js");
const Number_1 = __webpack_require__(/*! ./Number */ "./node_modules/@pups/utility/build/Number.js");
/**
 * Converte un array in un array di interi.
 *
 * @example
 * ```javascript
 *
 * const elements = [1, '2', '3.23', 4.2332, 'a']
 * const results = utility.array.intersect(elements)
 * console.log(results) // [1, 2, 3, 4, NaN]
 * ```
 *
 * @param {Array<any>} elements
 * @returns {Array<number>}
 */
exports.toInt = (elements) => elements.map(e => parseInt(e));
/**
 * Converte un array in un array di float.
 *
 * @example
 * ```javascript
 *
 * const elements = [1, '2', '3.23', 4.2332, 'a']
 * const results = utility.array.intersect(elements)
 * console.log(results) // [ 1, 2, 3.23, 4.2332, NaN ]
 * ```
 *
 * @param {Array<any>} elements
 * @returns {Array<number>}
 */
exports.toFloat = (elements) => elements.map(e => parseFloat(e));
/**
 * Controlla se il valore di una proprietà esiste all'interno di un array di oggetti.
 *
 * @example
 * ```javascript
 *
 * const elements = [{ 'id': 1 } { 'id': 2 }]
 * const result = utility.array.hasObjectProperty(elements, 'id', 2)
 * console.log(results) // true
 * ```
 *
 * @param {Array<object>} elements
 * @param {string} key
 * @param {(((value: any, item: any) => boolean) | any)} value
 * @returns {boolean}
 */
exports.hasObjectProperty = (elements, key, value) => exports.indexOfObjectProperty(elements, key, value) >= 0;
/**
 * Ritorna l'indice dell'oggetto che possiede la proprità cercata. Ritorna -1 se l'elemento non viene trovato
 *
 * @example
 * ```javascript
 *
 * // Esempio di una proprietà di primo livello
 * const elements = [
 *  { 'id': 1, 'token': 'xxx-yyy' }
 *  { 'id': 2, 'token': 'aaa-bbb' }
 * ]
 * const index = utility.array.indexOfObjectProperty(elements, 'token', 'aaa-bbb')
 * console.log(index) // 1
 * ```
 * @example
 * ```javascript
 *
 * // Esempio di una proprietà di primo secondo livello e funzione di validazione (3° parametro)
 * const elements = [
 *  { 'id': 1, 'data': { 'active': true, 'token': 'xxx-yyy' }}
 *  { 'id': 2, 'data': { 'active': true, 'token': 'aaa-bbb' }}
 * ]
 * const index = utility.array.indexOfObjectProperty(
 *  elements,
 *  'data.token',
 *  (value, item) => item.data.active && value === 'aaa-bbb'
 * )
 * console.log(index) // 1
 * ```
 *
 * @param {Array<object>} elements
 * @param {string} key
 * @param {(((value: any, item: any) => boolean) | any)} value
 * @returns {number}
 */
exports.indexOfObjectProperty = (elements, key, value) => {
    for (let i = elements.length - 1; i >= 0; i--)
        if (typeof value === 'function' ? value(Object_1.getProperty(elements[i], key, 'Nil'), elements[i]) : Object_1.getProperty(elements[i], key) === value)
            return i;
    return -1;
};
/**
 * Ritorna l'intersezione tra due array.
 *
 * @example
 * ```javascript
 *
 * const a = [1, 2, 3]
 * const b = [2, 3, 4]
 * console.log(utility.array.intersect(a, b)) // [ 2, 3 ]
 * ```
 *
 * @param {Array<any>} a
 * @param {Array<any>} b
 * @returns {Array<any>}
 */
exports.intersect = (a, b) => {
    var ai = 0, bi = 0;
    const result = new Array();
    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi])
            ai++;
        else if (a[ai] > b[bi])
            bi++;
        else {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }
    return result;
};
/**
 * Ritorna il prossimo elemento di un array.
 *
 * @example
 * ```javascript
 *
 * const a = [1, 2, 3]
 * console.log(utility.array.next(a, 2)) // 1
 * ```
 *
 * @param {Array<any>} a
 * @param {number} index
 * @returns {Aany}
 */
exports.nextElement = (a, index) => a[Number_1.nextNumber(index, a.length)];
/**
 * Ritorna l'elemento precedente di un array.
 *
 * @example
 * ```javascript
 *
 * const a = [1, 2, 3]
 * console.log(utility.array.next(a, 2)) // 2
 * ```
 *
 * @param {Array<any>} a
 * @param {number} index
 * @returns {Aany}
 */
exports.prevElement = (a, index) => a[Number_1.prevNumber(index, a.length)];
/**
 * Ritorna un elemento random di un array.
 *
 * @example
 * ```javascript
 *
 * const a = [1, 2, 3]
 * console.log(utility.array.next(a, 2)) // 2
 * ```
 *
 * @param {Array<any>} a
 * @param {number} index
 * @returns {Aany}
 */
exports.randomElement = (a) => a[Number_1.randomInt(0, a.length - 1)];
//# sourceMappingURL=Array.js.map

/***/ }),

/***/ "./node_modules/@pups/utility/build/Number.js":
/*!****************************************************!*\
  !*** ./node_modules/@pups/utility/build/Number.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let uid = 0;
/**
 * Ritorna un numerio incrementale
 *
 * @param {number} [from=0]
 * @returns {number}
 */
exports.newId = (from = 0) => ++uid + from;
/**
 * Ritorna stringa di almeno due cifre
 *
 * @param {number} n
 * @returns {string}
 */
exports.twoDigits = (n) => (n <= 9 ? '0' : '') + n;
/**
 * Ritorna un valore compreso tra 0 ed 1
 *
 * @param {number} value
 * @returns {number}
 */
exports.clamp01 = (value) => exports.clamp(0, 1, value);
/**
 * Ritorna un valore compreso tra {min} ed {max}
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
exports.clamp = (min, max, value) => value <= min ? min : (value >= max ? max : value);
/**
 * Ritorna un valore compreso tra {min} e {max} in rifermiento a {refMin} e {refMax}
 *
 * @example
 * ```javascript
 * relativeClamp2(0.5, 0, 1, 100, 200) // 150
 * ```
 *
 * @param {number} value
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
exports.relativeClamp = (value, refMin, refMax, toMin, toMax) => exports.clamp(toMin, toMax, (value - refMin) / (refMax - refMin) * (toMax - toMin) + toMin);
/**
 * Ritorna un numero approssimato alla cifra {decimal}
 *
 * @param {*} value
 * @param {number} [decimal=20]
 * @returns {number}
 */
exports.fix = (value, decimal = 20) => +parseFloat(value).toFixed(decimal);
/**
 * Ritorna il prossimo numero di una lista
 *
 * @example
 * ```javascript
 * console.log(2, 3) // 0
 * ```
 *
 * @param {number} index
 * @param {number} length
 * @param {number} [offset=1]
 * @returns
 */
exports.nextNumber = (index, length, offset = 1) => (index + offset) % length;
/**
 * Ritorna il valore precedente di una lista
 * @example
 * ```javascript
 *
 * console.log(0, 3) // 2
 * ```
 *
 * @param {number} index
 * @param {number} length
 * @param {number} [offset=1]
 * @returns
 */
exports.prevNumber = (index, length, offset = 1) => {
    index -= offset;
    return (index < 0 ? index + length : index) % length;
};
/**
 * Ritorna un numero random tra {min} e {max}
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
exports.randomFloat = (min, max) => Math.random() * (max - min) + min;
/**
 * Ritorna un numero intero tra {min} e {max} (inclusi)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
exports.randomInt = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min;
/**
 * Funzione lerp
 *
 * @param {number} value1
 * @param {number} value2
 * @param {number} amount
 * @returns {number}
 */
exports.lerp = (value1, value2, amount) => value1 + (value2 - value1) * exports.clamp01(amount);
/**
 * Round
 *
 * @param {number} val
 * @returns {number}
 */
exports.round = (val) => ~~(val + 0.5);
//# sourceMappingURL=Number.js.map

/***/ }),

/***/ "./node_modules/@pups/utility/build/Object.js":
/*!****************************************************!*\
  !*** ./node_modules/@pups/utility/build/Object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Controlla se il valore è definito
 *
 * @param {*} value
 * @returns {boolean}
 */
exports.isDef = (value) => {
    return typeof value !== 'undefined';
};
/**
 * Controlla se il valore non è definito
 *
 * @param {*} value
 * @returns {boolean}
 */
exports.isUndef = (value) => {
    return !exports.isDef(value);
};
/**
 * Controlla se {a} è uguale a {b}.
 * Verranno controllate anche le proprietà innestate.
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
exports.isEqual = (a, b) => {
    if (typeof a !== 'object' || a === null || b === null) {
        return a === b;
    }
    else {
        const keys = Object.keys(a);
        for (let i = 0, len = keys.length; i < len; i++)
            if (typeof b[keys[i]] === 'undefined' || !exports.isEqual(a[keys[i]], b[keys[i]]))
                return false;
    }
    return true;
};
/**
 * Mappa un oggetto
 *
 * @param {object} object
 * @param {(value: any, key: string, index: number) => any} callable
 * @returns {Object}
 */
exports.map = (object, callable) => {
    Object.keys(object).forEach((key, index) => {
        object[key] = callable(object[key], key, index);
    });
    return object;
};
/**
 * Scorre un oggetto
 *
 * @param {object} object
 * @param {(value: any, key: string, index: number) => any} callable
 */
exports.each = (object, callable) => {
    Object.keys(object).forEach((key, index) => {
        callable(object[key], key, index);
    });
};
/**
 * Controlla se una proprietà esiste nell'oggetto {object}
 *
 * @example
 * ```javascript
 *
 * const data = { key: 'mykey', items: [] }
 * console.log(object.hasProperty(data, 'items')) // true
 * ```
 *
 * @param {object} object
 * @param {string} property
 * @returns {boolean}
 */
exports.hasProperty = (object, property) => {
    return typeof this.getProperty(object, property, undefined) !== 'undefined';
};
/**
 * Ritorna la proprietà di un oggetto
 *
 * @example
 * ```javascript
 *
 * const data = { key: 'mykey', items: [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }] }
 * console.log(utility.object.getProperty(data, 'items.1.name')) // Bar
 * ```
 *
 * @param {object} object
 * @param {string} property
 * @param {*} [defaultValue=null]
 * @returns
 */
exports.getProperty = (object, property, defaultValue = null) => {
    const properties = property.split('.');
    const len = properties.length;
    for (let i = 0; i < len; i++) {
        const p = properties[i];
        const pi = parseInt(p);
        if (p == '*' && Array.isArray(object))
            return object.map(o => this.getProperty(o, properties.slice(i + 1).join('.'), defaultValue));
        if (!isNaN(pi) && Array.isArray(object))
            return this.getProperty(object[i], properties.slice(i + 1).join('.'), defaultValue);
        if (!object.hasOwnProperty(p))
            return defaultValue;
        object = object[p];
        if (typeof object === 'undefined')
            return defaultValue;
    }
    return object;
};
/**
 * Setta più proprietà in un oggetto
 *
 * @example
 * ```javascript
 *
 * const data = { }
 * utility.object.setProperties(data, ['a', 'b'], [1, [2, 3]])
 * console.log(data) // { a: 1, b: [ 2, 3 ] }
 * ```
 *
 * @param {object} object
 * @param {Array<string>} properties
 * @param {(Array<any> | Function | any)} values
 */
exports.setProperties = (object, properties, values) => {
    properties.forEach((property, index) => {
        let temp = object;
        const nestedProperties = property.split('.');
        const setPropery = nestedProperties.pop();
        nestedProperties.forEach(p => { temp = temp[p] || {}; });
        temp[setPropery] = Array.isArray(values) ? values[index] : typeof values === 'function' ? values(temp[setPropery]) : values;
    });
};
//# sourceMappingURL=Object.js.map

/***/ }),

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, setImmediate) {var require;var require;/*!

JSZip v3.5.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(t){if(true)module.exports=t();else {}}(function(){return function s(a,o,h){function u(r,t){if(!o[r]){if(!a[r]){var e="function"==typeof require&&require;if(!t&&e)return require(r,!0);if(l)return l(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return u(e||t)},n,n.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,r){"use strict";var c=t("./utils"),d=t("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(t){for(var e,r,i,n,s,a,o,h=[],u=0,l=t.length,f=l,d="string"!==c.getTypeOf(t);u<t.length;)f=l-u,i=d?(e=t[u++],r=u<l?t[u++]:0,u<l?t[u++]:0):(e=t.charCodeAt(u++),r=u<l?t.charCodeAt(u++):0,u<l?t.charCodeAt(u++):0),n=e>>2,s=(3&e)<<4|r>>4,a=1<f?(15&r)<<2|i>>6:64,o=2<f?63&i:64,h.push(p.charAt(n)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(t){var e,r,i,n,s,a,o=0,h=0,u="data:";if(t.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(t.charAt(t.length-1)===p.charAt(64)&&f--,t.charAt(t.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=d.uint8array?new Uint8Array(0|f):new Array(0|f);o<t.length;)e=p.indexOf(t.charAt(o++))<<2|(n=p.indexOf(t.charAt(o++)))>>4,r=(15&n)<<4|(s=p.indexOf(t.charAt(o++)))>>2,i=(3&s)<<6|(a=p.indexOf(t.charAt(o++))),l[h++]=e,64!==s&&(l[h++]=r),64!==a&&(l[h++]=i);return l}},{"./support":30,"./utils":32}],2:[function(t,e,r){"use strict";var i=t("./external"),n=t("./stream/DataWorker"),s=t("./stream/DataLengthProbe"),a=t("./stream/Crc32Probe");s=t("./stream/DataLengthProbe");function o(t,e,r,i,n){this.compressedSize=t,this.uncompressedSize=e,this.crc32=r,this.compression=i,this.compressedContent=n}o.prototype={getContentWorker:function(){var t=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,r){return t.pipe(new a).pipe(new s("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new s("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,e,r){"use strict";var i=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(t){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,e,r){"use strict";var i=t("./utils");var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==i.getTypeOf(t)?function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}(0|e,t,t.length,0):function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e.charCodeAt(a))];return-1^t}(0|e,t,t.length,0):0}},{"./utils":32}],5:[function(t,e,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,e,r){"use strict";var i=null;i="undefined"!=typeof Promise?Promise:t("lie"),e.exports={Promise:i}},{lie:37}],7:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,n=t("pako"),s=t("./utils"),a=t("./stream/GenericWorker"),o=i?"uint8array":"array";function h(t,e){a.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,t.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},r.compressWorker=function(t){return new h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){"use strict";function A(t,e){var r,i="";for(r=0;r<e;r++)i+=String.fromCharCode(255&t),t>>>=8;return i}function i(t,e,r,i,n,s){var a,o,h=t.file,u=t.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),d=I.transformTo("string",O.utf8encode(h.name)),c=h.comment,p=I.transformTo("string",s(c)),m=I.transformTo("string",O.utf8encode(c)),_=d.length!==h.name.length,g=m.length!==c.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};e&&!r||(x.crc32=t.crc32,x.compressedSize=t.compressedSize,x.uncompressedSize=t.uncompressedSize);var S=0;e&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===n?(C=798,z|=function(t,e){var r=t;return t||(r=e?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(t){return 63&(t||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+d,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(i,4)+f+b+p}}var I=t("../utils"),n=t("../stream/GenericWorker"),O=t("../utf8"),B=t("../crc32"),R=t("../signature");function s(t,e,r,i){n.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,n),s.prototype.push=function(t){var e=t.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,n.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:r?(e+100*(r-i-1))/r:100}}))},s.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var r=i(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,r=i(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),e)this.push({data:function(t){return R.DATA_DESCRIPTOR+A(t.crc32,4)+A(t.compressedSize,4)+A(t.uncompressedSize,4)}(t),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var r=this.bytesWritten-t,i=function(t,e,r,i,n){var s=I.transformTo("string",n(i));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(t,2)+A(t,2)+A(e,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,t,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(t){var e=this._sources;if(!n.prototype.error.call(this,t))return!1;for(var r=0;r<e.length;r++)try{e[r].error(t)}catch(t){}return!0},s.prototype.lock=function(){n.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,e,r){"use strict";var u=t("../compressions"),i=t("./ZipFileWorker");r.generateWorker=function(t,a,e){var o=new i(a.streamFiles,e,a.platform,a.encodeFileName),h=0;try{t.forEach(function(t,e){h++;var r=function(t,e){var r=t||e,i=u[r];if(!i)throw new Error(r+" is not a valid compression method !");return i}(e.options.compression,a.compression),i=e.options.compressionOptions||a.compressionOptions||{},n=e.dir,s=e.date;e._compressWorker(r,i).withStreamInfo("file",{name:t,dir:n,date:s,comment:e.comment||"",unixPermissions:e.unixPermissions,dosPermissions:e.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(t){o.error(t)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,e,r){"use strict";function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files={},this.comment=null,this.root="",this.clone=function(){var t=new i;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}(i.prototype=t("./object")).loadAsync=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.version="3.5.0",i.loadAsync=function(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,e,r){"use strict";var i=t("./utils"),n=t("./external"),o=t("./utf8"),h=(i=t("./utils"),t("./zipEntries")),s=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function l(i){return new n.Promise(function(t,e){var r=i.decompressed.getContentWorker().pipe(new s);r.on("error",function(t){e(t)}).on("end",function(){r.streamInfo.crc32!==i.decompressed.crc32?e(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}e.exports=function(t,s){var a=this;return s=i.extend(s||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(t)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",t,!0,s.optimizedBinaryString,s.base64).then(function(t){var e=new h(s);return e.load(t),e}).then(function(t){var e=[n.Promise.resolve(t)],r=t.files;if(s.checkCRC32)for(var i=0;i<r.length;i++)e.push(l(r[i]));return n.Promise.all(e)}).then(function(t){for(var e=t.shift(),r=e.files,i=0;i<r.length;i++){var n=r[i];a.file(n.fileNameStr,n.decompressed,{binary:!0,optimizedBinaryString:!0,date:n.date,dir:n.dir,comment:n.fileCommentStr.length?n.fileCommentStr:null,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions,createFolders:s.createFolders})}return e.zipComment.length&&(a.comment=e.zipComment),a})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../stream/GenericWorker");function s(t,e){n.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}i.inherits(s,n),s.prototype._bindStream=function(t){var e=this;(this._stream=t).pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},s.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,e,r){"use strict";var n=t("readable-stream").Readable;function i(t,e,r){n.call(this,e),this._helper=t;var i=this;t.on("data",function(t,e){i.push(t)||i._helper.pause(),r&&r(e)}).on("error",function(t){i.emit("error",t)}).on("end",function(){i.push(null)})}t("../utils").inherits(i,n),i.prototype._read=function(){this._helper.resume()},e.exports=i},{"../utils":32,"readable-stream":16}],14:[function(t,e,r){"use strict";e.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(t,e){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(t,e);if("number"==typeof t)throw new Error('The "data" argument must not be a number');return new Buffer(t,e)},allocBuffer:function(t){if(Buffer.alloc)return Buffer.alloc(t);var e=new Buffer(t);return e.fill(0),e},isBuffer:function(t){return Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){"use strict";function s(t,e,r){var i,n=u.getTypeOf(e),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(t=g(t)),s.createFolders&&(i=_(t))&&b.call(this,i,!0);var a="string"===n&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(e instanceof d&&0===e.uncompressedSize||s.dir||!e||0===e.length)&&(s.base64=!1,s.binary=!0,e="",s.compression="STORE",n="string");var o=null;o=e instanceof d||e instanceof l?e:p.isNode&&p.isStream(e)?new m(t,e):u.prepareContent(t,e,s.binary,s.optimizedBinaryString,s.base64);var h=new c(t,o,s);this.files[t]=h}var n=t("./utf8"),u=t("./utils"),l=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),f=t("./defaults"),d=t("./compressedObject"),c=t("./zipObject"),o=t("./generate"),p=t("./nodejsUtils"),m=t("./nodejs/NodejsStreamInputAdapter"),_=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return 0<e?t.substring(0,e):""},g=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:f.createFolders,t=g(t),this.files[t]||s.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function h(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var i={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,r,i;for(e in this.files)this.files.hasOwnProperty(e)&&(i=this.files[e],(r=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(r,i))},filter:function(r){var i=[];return this.forEach(function(t,e){r(t,e)&&i.push(e)}),i},file:function(t,e,r){if(1!==arguments.length)return t=this.root+t,s.call(this,t,e,r),this;if(h(t)){var i=t;return this.filter(function(t,e){return!e.dir&&i.test(t)})}var n=this.files[this.root+t];return n&&!n.dir?n:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(t,e){return e.dir&&r.test(t)});var t=this.root+r,e=b.call(this,t),i=this.clone();return i.root=e.name,i},remove:function(r){r=this.root+r;var t=this.files[r];if(t||("/"!==r.slice(-1)&&(r+="/"),t=this.files[r]),t&&!t.dir)delete this.files[r];else for(var e=this.filter(function(t,e){return e.name.slice(0,r.length)===r}),i=0;i<e.length;i++)delete this.files[e[i].name];return this},generate:function(t){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,r={};try{if((r=u.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var i=r.comment||this.comment||"";e=o.generateWorker(this,r,i)}catch(t){(e=new l("error")).error(t)}return new a(e,r.type||"string",r.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=i},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,e,r){e.exports=t("stream")},{stream:void 0}],17:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===e&&this.data[s+1]===r&&this.data[s+2]===i&&this.data[s+3]===n)return s-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),r=t.charCodeAt(1),i=t.charCodeAt(2),n=t.charCodeAt(3),s=this.readData(4);return e===s[0]&&r===s[1]&&i===s[2]&&n===s[3]},n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],18:[function(t,e,r){"use strict";var i=t("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e);return this.index+=t,r},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readAndCheckSignature:function(t){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=n},{"../utils":32}],19:[function(t,e,r){"use strict";var i=t("./Uint8ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,e,r){"use strict";var i=t("./DataReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./DataReader":18}],21:[function(t,e,r){"use strict";var i=t("./ArrayReader");function n(t){i.call(this,t)}t("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(t,e,r){"use strict";var i=t("../utils"),n=t("../support"),s=t("./ArrayReader"),a=t("./StringReader"),o=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");e.exports=function(t){var e=i.getTypeOf(t);return i.checkSupport(e),"string"!==e||n.uint8array?"nodebuffer"===e?new o(t):n.uint8array?new h(i.transformTo("uint8array",t)):new s(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,e,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../utils");function s(t){i.call(this,"ConvertWorker to "+t),this.destType=t}n.inherits(s,i),s.prototype.processChunk=function(t){this.push({data:n.transformTo(this.destType,t.data),meta:t.meta})},e.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,e,r){"use strict";var i=t("./GenericWorker"),n=t("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(s,i),s.prototype.processChunk=function(t){this.streamInfo.crc32=n(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}i.inherits(s,n),s.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}n.prototype.processChunk.call(this,t)},e.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,e,r){"use strict";var i=t("../utils"),n=t("./GenericWorker");function s(t){n.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=i.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}i.inherits(s,n),s.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(t,e,r){"use strict";function i(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var t=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){"use strict";var h=t("../utils"),n=t("./ConvertWorker"),s=t("./GenericWorker"),u=t("../base64"),i=t("../support"),a=t("../external"),o=null;if(i.nodestream)try{o=t("../nodejs/NodejsStreamOutputAdapter")}catch(t){}function l(t,o){return new a.Promise(function(e,r){var i=[],n=t._internalType,s=t._outputType,a=t._mimeType;t.on("data",function(t,e){i.push(t),o&&o(e)}).on("error",function(t){i=[],r(t)}).on("end",function(){try{var t=function(t,e,r){switch(t){case"blob":return h.newBlob(h.transformTo("arraybuffer",e),r);case"base64":return u.encode(e);default:return h.transformTo(t,e)}}(s,function(t,e){var r,i=0,n=null,s=0;for(r=0;r<e.length;r++)s+=e[r].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(n=new Uint8Array(s),r=0;r<e.length;r++)n.set(e[r],i),i+=e[r].length;return n;case"nodebuffer":return Buffer.concat(e);default:throw new Error("concat : unsupported type '"+t+"'")}}(n,i),a);e(t)}catch(t){r(t)}i=[]}).resume()})}function f(t,e,r){var i=e;switch(e){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string"}try{this._internalType=i,this._outputType=e,this._mimeType=r,h.checkSupport(i),this._worker=t.pipe(new n(i)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}f.prototype={accumulate:function(t){return l(this,t)},on:function(t,e){var r=this;return"data"===t?this._worker.on(t,function(t){e.call(r,t.data,t.meta)}):this._worker.on(t,function(){h.delay(e,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,e,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=0===new Blob([i],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch(t){r.nodestream=!1}},{"readable-stream":16}],31:[function(t,e,s){"use strict";for(var o=t("./utils"),h=t("./support"),r=t("./nodejsUtils"),i=t("./stream/GenericWorker"),u=new Array(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;u[254]=u[254]=1;function a(){i.call(this,"utf-8 decode"),this.leftOver=null}function l(){i.call(this,"utf-8 encode")}s.utf8encode=function(t){return h.nodebuffer?r.newBufferFrom(t,"utf-8"):function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=h.uint8array?new Uint8Array(o):new Array(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e}(t)},s.utf8decode=function(t){return h.nodebuffer?o.transformTo("nodebuffer",t).toString("utf-8"):function(t){var e,r,i,n,s=t.length,a=new Array(2*s);for(e=r=0;e<s;)if((i=t[e++])<128)a[r++]=i;else if(4<(n=u[i]))a[r++]=65533,e+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&e<s;)i=i<<6|63&t[e++],n--;1<n?a[r++]=65533:i<65536?a[r++]=i:(i-=65536,a[r++]=55296|i>>10&1023,a[r++]=56320|1023&i)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(t=o.transformTo(h.uint8array?"uint8array":"array",t))},o.inherits(a,i),a.prototype.processChunk=function(t){var e=o.transformTo(h.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=e;(e=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),e.set(r,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var i=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}(e),n=e;i!==e.length&&(h.uint8array?(n=e.subarray(0,i),this.leftOver=e.subarray(i,e.length)):(n=e.slice(0,i),this.leftOver=e.slice(i,e.length))),this.push({data:s.utf8decode(n),meta:t.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,i),l.prototype.processChunk=function(t){this.push({data:s.utf8encode(t.data),meta:t.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,e,a){"use strict";var o=t("./support"),h=t("./base64"),r=t("./nodejsUtils"),i=t("set-immediate-shim"),u=t("./external");function n(t){return t}function l(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r);return e}a.newBlob=function(e,r){a.checkSupport("blob");try{return new Blob([e],{type:r})}catch(t){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return i.append(e),i.getBlob(r)}catch(t){throw new Error("Bug : can't construct the Blob.")}}};var s={stringifyByChunk:function(t,e,r){var i=[],n=0,s=t.length;if(s<=r)return String.fromCharCode.apply(null,t);for(;n<s;)"array"===e||"nodebuffer"===e?i.push(String.fromCharCode.apply(null,t.slice(n,Math.min(n+r,s)))):i.push(String.fromCharCode.apply(null,t.subarray(n,Math.min(n+r,s)))),n+=r;return i.join("")},stringifyByChar:function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(t){return!1}}()}};function f(t){var e=65536,r=a.getTypeOf(t),i=!0;if("uint8array"===r?i=s.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=s.applyCanBeUsed.nodebuffer),i)for(;1<e;)try{return s.stringifyByChunk(t,r,e)}catch(t){e=Math.floor(e/2)}return s.stringifyByChar(t)}function d(t,e){for(var r=0;r<t.length;r++)e[r]=t[r];return e}a.applyFromCharCode=f;var c={};c.string={string:n,array:function(t){return l(t,new Array(t.length))},arraybuffer:function(t){return c.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,r.allocBuffer(t.length))}},c.array={string:f,array:n,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(t)}},c.arraybuffer={string:function(t){return f(new Uint8Array(t))},array:function(t){return d(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:n,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return r.newBufferFrom(new Uint8Array(t))}},c.uint8array={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:n,nodebuffer:function(t){return r.newBufferFrom(t)}},c.nodebuffer={string:f,array:function(t){return d(t,new Array(t.length))},arraybuffer:function(t){return c.nodebuffer.uint8array(t).buffer},uint8array:function(t){return d(t,new Uint8Array(t.length))},nodebuffer:n},a.transformTo=function(t,e){if(e=e||"",!t)return e;a.checkSupport(t);var r=a.getTypeOf(e);return c[r][t](e)},a.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":o.nodebuffer&&r.isBuffer(t)?"nodebuffer":o.uint8array&&t instanceof Uint8Array?"uint8array":o.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(t){if(!o[t.toLowerCase()])throw new Error(t+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(t){var e,r,i="";for(r=0;r<(t||"").length;r++)i+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase();return i},a.delay=function(t,e,r){i(function(){t.apply(r||null,e||[])})},a.inherits=function(t,e){function r(){}r.prototype=e.prototype,t.prototype=new r},a.extend=function(){var t,e,r={};for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e]);return r},a.prepareContent=function(r,t,i,n,s){return u.Promise.resolve(t).then(function(i){return o.blob&&(i instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(i)))&&"undefined"!=typeof FileReader?new u.Promise(function(e,r){var t=new FileReader;t.onload=function(t){e(t.target.result)},t.onerror=function(t){r(t.target.error)},t.readAsArrayBuffer(i)}):i}).then(function(t){var e=a.getTypeOf(t);return e?("arraybuffer"===e?t=a.transformTo("uint8array",t):"string"===e&&(s?t=h.decode(t):i&&!0!==n&&(t=function(t){return l(t,o.uint8array?new Uint8Array(t.length):new Array(t.length))}(t))),t):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),n=t("./utils"),s=t("./signature"),a=t("./zipEntry"),o=(t("./utf8"),t("./support"));function h(t){this.files=[],this.loadOptions=t}h.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(e)+", expected "+n.pretty(t)+")")}},isSignature:function(t,e){var r=this.reader.index;this.reader.setIndex(t);var i=this.reader.readString(4)===e;return this.reader.setIndex(r),i},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",r=n.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,r,i=this.zip64EndOfCentralSize-44;0<i;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(t=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(t<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(t);var e=t;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var i=e-r;if(0<i)this.isSignature(e,s.CENTRAL_FILE_HEADER)||(this.reader.zero=i);else if(i<0)throw new Error("Corrupted zip: missing "+Math.abs(i)+" bytes.")},prepareReader:function(t){this.reader=i(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){"use strict";var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),u=t("./support");function l(t,e){this.options=t,this.loadOptions=e}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(t){var e,r;if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=function(t){for(var e in h)if(h.hasOwnProperty(e)&&h[e].magic===t)return h[e];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==t&&(this.dosPermissions=63&this.externalFileAttributes),3==t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=i(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,i,n=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<n;)e=t.readInt(2),r=t.readInt(2),i=t.readData(r),this.extraFields[e]={id:e,length:r,value:i};t.setIndex(n)},handleUTF8:function(){var t=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var r=s.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(null!==i)this.fileCommentStr=i;else{var n=s.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=i(t.value);return 1!==e.readInt(1)?null:a(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,e,r){"use strict";function i(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=e,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=t("./stream/StreamHelper"),n=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),h=t("./stream/GenericWorker");i.prototype={internalStream:function(t){var e=null,r="string";try{if(!t)throw new Error("No output type specified.");var i="string"===(r=t.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),e=this._decompressWorker();var n=!this._dataBinary;n&&!i&&(e=e.pipe(new a.Utf8EncodeWorker)),!n&&i&&(e=e.pipe(new a.Utf8DecodeWorker))}catch(t){(e=new h("error")).error(t)}return new s(e,r,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof o&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,t,e)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new n(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)i.prototype[u[f]]=l;e.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,l,e){(function(e){"use strict";var r,i,t=e.MutationObserver||e.WebKitMutationObserver;if(t){var n=0,s=new t(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=n=++n%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var o=new e.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var t,e;i=!0;for(var r=h.length;r;){for(e=h,h=[],t=-1;++t<r;)e[t]();r=h.length}i=!1}l.exports=function(t){1!==h.push(t)||i||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){"use strict";var n=t("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],i=["PENDING"];function o(t){if("function"!=typeof t)throw new TypeError("resolver must be a function");this.state=i,this.queue=[],this.outcome=void 0,t!==u&&c(this,t)}function h(t,e,r){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(e,r,i){n(function(){var t;try{t=r(i)}catch(t){return l.reject(e,t)}t===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,t)})}function d(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function c(e,t){var r=!1;function i(t){r||(r=!0,l.reject(e,t))}function n(t){r||(r=!0,l.resolve(e,t))}var s=p(function(){t(n,i)});"error"===s.status&&i(s.value)}function p(t,e){var r={};try{r.value=t(e),r.status="success"}catch(t){r.status="error",r.value=t}return r}(e.exports=o).prototype.finally=function(e){if("function"!=typeof e)return this;var r=this.constructor;return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})},o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){if("function"!=typeof t&&this.state===a||"function"!=typeof e&&this.state===s)return this;var r=new this.constructor(u);this.state!==i?f(r,this.state===a?t:e,this.outcome):this.queue.push(new h(r,t,e));return r},h.prototype.callFulfilled=function(t){l.resolve(this.promise,t)},h.prototype.otherCallFulfilled=function(t){f(this.promise,this.onFulfilled,t)},h.prototype.callRejected=function(t){l.reject(this.promise,t)},h.prototype.otherCallRejected=function(t){f(this.promise,this.onRejected,t)},l.resolve=function(t,e){var r=p(d,e);if("error"===r.status)return l.reject(t,r.value);var i=r.value;if(i)c(t,i);else{t.state=a,t.outcome=e;for(var n=-1,s=t.queue.length;++n<s;)t.queue[n].callFulfilled(e)}return t},l.reject=function(t,e){t.state=s,t.outcome=e;for(var r=-1,i=t.queue.length;++r<i;)t.queue[r].callRejected(e);return t},o.resolve=function(t){if(t instanceof this)return t;return l.resolve(new this(u),t)},o.reject=function(t){var e=new this(u);return l.reject(e,t)},o.all=function(t){var r=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var i=t.length,n=!1;if(!i)return this.resolve([]);var s=new Array(i),a=0,e=-1,o=new this(u);for(;++e<i;)h(t[e],e);return o;function h(t,e){r.resolve(t).then(function(t){s[e]=t,++a!==i||n||(n=!0,l.resolve(o,s))},function(t){n||(n=!0,l.reject(o,t))})}},o.race=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(new TypeError("must be an array"));var r=t.length,i=!1;if(!r)return this.resolve([]);var n=-1,s=new this(u);for(;++n<r;)a=t[n],e.resolve(a).then(function(t){i||(i=!0,l.resolve(s,t))},function(t){i||(i=!0,l.reject(s,t))});var a;return s}},{immediate:36}],38:[function(t,e,r){"use strict";var i={};(0,t("./lib/utils/common").assign)(i,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,e,r){"use strict";var a=t("./zlib/deflate"),o=t("./utils/common"),h=t("./utils/strings"),n=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,d=0,c=8;function p(t){if(!(this instanceof p))return new p(t);this.options=o.assign({level:f,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==l)throw new Error(n[r]);if(e.header&&a.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=a.deflateSetDictionary(this.strm,i))!==l)throw new Error(n[r]);this._dict_set=!0}}function i(t,e){var r=new p(e);if(r.push(t,!0),r.err)throw r.msg||n[r.err];return r.result}p.prototype.push=function(t,e){var r,i,n=this.strm,s=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===u.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new o.Buf8(s),n.next_out=0,n.avail_out=s),1!==(r=a.deflate(n,i))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==n.avail_out&&(0!==n.avail_in||4!==i&&2!==i)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0<n.avail_in||0===n.avail_out)&&1!==r);return 4===i?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==i||(this.onEnd(l),!(n.avail_out=0))},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=p,r.deflate=i,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,e,r){"use strict";var d=t("./zlib/inflate"),c=t("./utils/common"),p=t("./utils/strings"),m=t("./zlib/constants"),i=t("./zlib/messages"),n=t("./zlib/zstream"),s=t("./zlib/gzheader"),_=Object.prototype.toString;function a(t){if(!(this instanceof a))return new a(t);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&0<=e.windowBits&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(0<=e.windowBits&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),15<e.windowBits&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var r=d.inflateInit2(this.strm,e.windowBits);if(r!==m.Z_OK)throw new Error(i[r]);this.header=new s,d.inflateGetHeader(this.strm,this.header)}function o(t,e){var r=new a(e);if(r.push(t,!0),r.err)throw r.msg||i[r.err];return r.result}a.prototype.push=function(t,e){var r,i,n,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof t?h.input=p.binstring2buf(t):"[object ArrayBuffer]"===_.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new c.Buf8(u),h.next_out=0,h.avail_out=u),(r=d.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=d.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||i!==m.Z_FINISH&&i!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(n=p.utf8border(h.output,h.next_out),s=h.next_out-n,a=p.buf2string(h.output,n),h.next_out=s,h.avail_out=u-s,s&&c.arraySet(h.output,h.output,n,s,0),this.onData(a)):this.onData(c.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(i=m.Z_FINISH),i===m.Z_FINISH?(r=d.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):i!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(t){this.chunks.push(t)},a.prototype.onEnd=function(t){t===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){var e,r,i,n,s,a;for(e=i=0,r=t.length;e<r;e++)i+=t[e].length;for(a=new Uint8Array(i),e=n=0,r=t.length;e<r;e++)s=t[e],a.set(s,n),n+=s.length;return a}},s={arraySet:function(t,e,r,i,n){for(var s=0;s<i;s++)t[n+s]=e[r+s]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(i)},{}],42:[function(t,e,r){"use strict";var h=t("./common"),n=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var u=new h.Buf8(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;function l(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&n))return String.fromCharCode.apply(null,h.shrinkBuf(t,e));for(var r="",i=0;i<e;i++)r+=String.fromCharCode(t[i]);return r}u[254]=u[254]=1,r.string2buf=function(t){var e,r,i,n,s,a=t.length,o=0;for(n=0;n<a;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),o+=r<128?1:r<2048?2:r<65536?3:4;for(e=new h.Buf8(o),n=s=0;s<o;n++)55296==(64512&(r=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(i=t.charCodeAt(n+1)))&&(r=65536+(r-55296<<10)+(i-56320),n++),r<128?e[s++]=r:(r<2048?e[s++]=192|r>>>6:(r<65536?e[s++]=224|r>>>12:(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63),e[s++]=128|r>>>6&63),e[s++]=128|63&r);return e},r.buf2binstring=function(t){return l(t,t.length)},r.binstring2buf=function(t){for(var e=new h.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},r.buf2string=function(t,e){var r,i,n,s,a=e||t.length,o=new Array(2*a);for(r=i=0;r<a;)if((n=t[r++])<128)o[i++]=n;else if(4<(s=u[n]))o[i++]=65533,r+=s-1;else{for(n&=2===s?31:3===s?15:7;1<s&&r<a;)n=n<<6|63&t[r++],s--;1<s?o[i++]=65533:n<65536?o[i++]=n:(n-=65536,o[i++]=55296|n>>10&1023,o[i++]=56320|1023&n)}return l(o,i)},r.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;0<=r&&128==(192&t[r]);)r--;return r<0?e:0===r?e:r+u[t[r]]>e?r:e}},{"./common":41}],43:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,s=t>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(n=n+e[i++]|0)|0,--a;);n%=65521,s%=65521}return n|s<<16|0}},{}],44:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,e,r){"use strict";var o=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,i){var n=o,s=i+r;t^=-1;for(var a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t}},{}],46:[function(t,e,r){"use strict";var h,d=t("../utils/common"),u=t("./trees"),c=t("./adler32"),p=t("./crc32"),i=t("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,n=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(t,e){return t.msg=i[e],e}function T(t){return(t<<1)-(4<t?9:0)}function D(t){for(var e=t.length;0<=--e;)t[e]=0}function F(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(d.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){u._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,F(t.strm)}function U(t,e){t.pending_buf[t.pending++]=e}function P(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function L(t,e){var r,i,n=t.max_chain_length,s=t.strstart,a=t.prev_length,o=t.nice_match,h=t.strstart>t.w_size-z?t.strstart-(t.w_size-z):0,u=t.window,l=t.w_mask,f=t.prev,d=t.strstart+S,c=u[s+a-1],p=u[s+a];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(u[(r=e)+a]===p&&u[r+a-1]===c&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<d);if(i=S-(d-s),s=d-S,a<i){if(t.match_start=e,o<=(a=i))break;c=u[s+a-1],p=u[s+a]}}}while((e=f[e&l])>h&&0!=--n);return a<=t.lookahead?a:t.lookahead}function j(t){var e,r,i,n,s,a,o,h,u,l,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=f+(f-z)){for(d.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=r=t.hash_size;i=t.head[--e],t.head[e]=f<=i?i-f:0,--r;);for(e=r=f;i=t.prev[--e],t.prev[e]=f<=i?i-f:0,--r;);n+=f}if(0===t.strm.avail_in)break;if(a=t.strm,o=t.window,h=t.strstart+t.lookahead,u=n,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,d.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=c(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),t.lookahead+=r,t.lookahead+t.insert>=x)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[s+x-1])&t.hash_mask,t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<x)););}while(t.lookahead<z&&0!==t.strm.avail_in)}function Z(t,e){for(var r,i;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r)),t.match_length>=x)if(i=u._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function W(t,e){for(var r,i,n;;){if(t.lookahead<z){if(j(t),t.lookahead<z&&e===l)return A;if(0===t.lookahead)break}if(r=0,t.lookahead>=x&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-z&&(t.match_length=L(t,r),t.match_length<=5&&(1===t.strategy||t.match_length===x&&4096<t.strstart-t.match_start)&&(t.match_length=x-1)),t.prev_length>=x&&t.match_length<=t.prev_length){for(n=t.strstart+t.lookahead-x,i=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+x-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=u._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<x-1?t.strstart:x-1,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}function M(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*w),this.dyn_dtree=new d.Buf16(2*(2*a+1)),this.bl_tree=new d.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(k+1),this.heap=new d.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?C:E,t.adler=2===e.wrap?0:1,e.last_flush=l,u._tr_init(e),m):R(t,_)}function K(t){var e=G(t);return e===m&&function(t){t.window_size=2*t.w_size,D(t.head),t.max_lazy_match=h[t.level].max_lazy,t.good_match=h[t.level].good_length,t.nice_match=h[t.level].nice_length,t.max_chain_length=h[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=x-1,t.match_available=0,t.ins_h=0}(t.state),e}function Y(t,e,r,i,n,s){if(!t)return _;var a=1;if(e===g&&(e=6),i<0?(a=0,i=-i):15<i&&(a=2,i-=16),n<1||y<n||r!==v||i<8||15<i||e<0||9<e||s<0||b<s)return R(t,_);8===i&&(i=9);var o=new H;return(t.state=o).strm=t,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new d.Buf8(2*o.w_size),o.head=new d.Buf16(o.hash_size),o.prev=new d.Buf16(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new d.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=r,K(t)}h=[new M(0,0,0,0,function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(j(t),0===t.lookahead&&e===l)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start>=t.w_size-z&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(t,e){return Y(t,e,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,m):_},r.deflate=function(t,e){var r,i,n,s;if(!t||!t.state||5<e||e<0)return t?R(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||666===i.status&&e!==f)return R(t,0===t.avail_out?-5:_);if(i.strm=t,r=i.last_flush,i.last_flush=e,i.status===C)if(2===i.wrap)t.adler=0,U(i,31),U(i,139),U(i,8),i.gzhead?(U(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),U(i,255&i.gzhead.time),U(i,i.gzhead.time>>8&255),U(i,i.gzhead.time>>16&255),U(i,i.gzhead.time>>24&255),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(U(i,255&i.gzhead.extra.length),U(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=p(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(U(i,0),U(i,0),U(i,0),U(i,0),U(i,0),U(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),U(i,3),i.status=E);else{var a=v+(i.w_bits-8<<4)<<8;a|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(a|=32),a+=31-a%31,i.status=E,P(i,a),0!==i.strstart&&(P(i,t.adler>>>16),P(i,65535&t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending!==i.pending_buf_size));)U(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),F(t),n=i.pending,i.pending===i.pending_buf_size)){s=1;break}s=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,U(i,s)}while(0!==s);i.gzhead.hcrc&&i.pending>n&&(t.adler=p(t.adler,i.pending_buf,i.pending-n,n)),0===s&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(t),i.pending+2<=i.pending_buf_size&&(U(i,255&t.adler),U(i,t.adler>>8&255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(F(t),0===t.avail_out)return i.last_flush=-1,m}else if(0===t.avail_in&&T(e)<=T(r)&&e!==f)return R(t,-5);if(666===i.status&&0!==t.avail_in)return R(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==l&&666!==i.status){var o=2===i.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(j(t),0===t.lookahead)){if(e===l)return A;break}if(t.match_length=0,r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):3===i.strategy?function(t,e){for(var r,i,n,s,a=t.window;;){if(t.lookahead<=S){if(j(t),t.lookahead<=S&&e===l)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=x&&0<t.strstart&&(i=a[n=t.strstart-1])===a[++n]&&i===a[++n]&&i===a[++n]){s=t.strstart+S;do{}while(i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&i===a[++n]&&n<s);t.match_length=S-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=x?(r=u._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(N(t,!0),0===t.strm.avail_out?O:B):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?A:I}(i,e):h[i.level].func(i,e);if(o!==O&&o!==B||(i.status=666),o===A||o===O)return 0===t.avail_out&&(i.last_flush=-1),m;if(o===I&&(1===e?u._tr_align(i):5!==e&&(u._tr_stored_block(i,0,0,!1),3===e&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),F(t),0===t.avail_out))return i.last_flush=-1,m}return e!==f?m:i.wrap<=0?1:(2===i.wrap?(U(i,255&t.adler),U(i,t.adler>>8&255),U(i,t.adler>>16&255),U(i,t.adler>>24&255),U(i,255&t.total_in),U(i,t.total_in>>8&255),U(i,t.total_in>>16&255),U(i,t.total_in>>24&255)):(P(i,t.adler>>>16),P(i,65535&t.adler)),F(t),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?m:1)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==C&&69!==e&&73!==e&&91!==e&&103!==e&&e!==E&&666!==e?R(t,_):(t.state=null,e===E?R(t,-3):m):_},r.deflateSetDictionary=function(t,e){var r,i,n,s,a,o,h,u,l=e.length;if(!t||!t.state)return _;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new d.Buf8(r.w_size),d.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),a=t.avail_in,o=t.next_in,h=t.input,t.avail_in=l,t.next_in=0,t.input=e,j(r);r.lookahead>=x;){for(i=r.strstart,n=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+x-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++,--n;);r.strstart=i,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,t.next_in=o,t.input=h,t.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,e,r){"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C;r=t.state,i=t.next_in,z=t.input,n=i+(t.avail_in-5),s=t.next_out,C=t.output,a=s-(e-t.avail_out),o=s+(t.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,d=r.window,c=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;t:do{p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=m[c&g];e:for(;;){if(c>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(c&(1<<y)-1)];continue e}if(32&y){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}w=65535&v,(y&=15)&&(p<y&&(c+=z[i++]<<p,p+=8),w+=c&(1<<y)-1,c>>>=y,p-=y),p<15&&(c+=z[i++]<<p,p+=8,c+=z[i++]<<p,p+=8),v=_[c&b];r:for(;;){if(c>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(c&(1<<y)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(k=65535&v,p<(y&=15)&&(c+=z[i++]<<p,(p+=8)<y&&(c+=z[i++]<<p,p+=8)),h<(k+=c&(1<<y)-1)){t.msg="invalid distance too far back",r.mode=30;break t}if(c>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(S=d,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=d[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=d[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=d[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(i<n&&s<o);i-=w=p>>3,c&=(1<<(p-=w<<3))-1,t.next_in=i,t.next_out=s,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=s<o?o-s+257:257-(s-o),r.hold=c,r.bits=p}},{}],49:[function(t,e,r){"use strict";var I=t("../utils/common"),O=t("./adler32"),B=t("./crc32"),R=t("./inffast"),T=t("./inftrees"),D=1,F=2,N=0,U=-2,P=1,i=852,n=592;function L(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new I.Buf32(i),e.distcode=e.distdyn=new I.Buf32(n),e.sane=1,e.back=-1,N):U}function o(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,a(t)):U}function h(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||15<e)?U:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,o(t))):U}function u(t,e){var r,i;return t?(i=new s,(t.state=i).window=null,(r=h(t,e))!==N&&(t.state=null),r):U}var l,f,d=!0;function j(t){if(d){var e;for(l=new I.Buf32(512),f=new I.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(T(D,t.lens,0,288,l,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;T(F,t.lens,0,32,f,0,t.work,{bits:5}),d=!1}t.lencode=l,t.lenbits=9,t.distcode=f,t.distbits=5}function Z(t,e,r,i){var n,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),i>=s.wsize?(I.arraySet(s.window,e,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(i<(n=s.wsize-s.wnext)&&(n=i),I.arraySet(s.window,e,r-i,n,s.wnext),(i-=n)?(I.arraySet(s.window,e,r-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(t){return u(t,15)},r.inflateInit2=u,r.inflate=function(t,e){var r,i,n,s,a,o,h,u,l,f,d,c,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return U;12===(r=t.state).mode&&(r.mode=13),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,f=o,d=h,x=N;t:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){t.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){t.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){t.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,t.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(c=r.length)&&(c=o),c&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,i,s,c,k)),512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,r.length-=c),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break t;for(c=0;k=i[s+c++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&c<o;);if(512&r.flags&&(r.check=B(r.check,i,c,s)),o-=c,s+=c,k)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(65535&r.check)){t.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}t.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,2;t.adler=r.check=1,r.mode=12;case 12:if(5===e||6===e)break t;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==e)break;u>>>=2,l-=2;break t;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){t.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(c=r.length){if(o<c&&(c=o),h<c&&(c=h),0===c)break t;I.arraySet(n,i,s,c,a),o-=c,s+=c,h-=c,a+=c,r.length-=c;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){t.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){t.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],c=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}l-=_,k=0,c=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+c>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=30;break}for(;c--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){t.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){t.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(6<=o&&258<=h){t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,R(t,d),a=t.next_out,n=t.output,h=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){t.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){t.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break t;if(c=d-h,r.offset>c){if((c=r.offset-c)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=30;break}p=c>r.wnext?(c-=r.wnext,r.wsize-c):r.wnext-c,c>r.length&&(c=r.length),m=r.window}else m=n,p=a-r.offset,c=r.length;for(h<c&&(c=h),h-=c,r.length-=c;n[a++]=m[p++],--c;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break t;n[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break t;o--,u|=i[s++]<<l,l+=8}if(d-=h,t.total_out+=d,r.total+=d,d&&(t.adler=r.check=r.flags?B(r.check,n,d,a-d):O(r.check,n,d,a-d)),d=h,(r.flags?u:L(u))!==r.check){t.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break t;o--,u+=i[s++]<<l,l+=8}if(u!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return U}return t.next_out=a,t.avail_out=h,t.next_in=s,t.avail_in=o,r.hold=u,r.bits=l,(r.wsize||d!==t.avail_out&&r.mode<30&&(r.mode<27||4!==e))&&Z(t,t.output,t.next_out,d-t.avail_out)?(r.mode=31,-4):(f-=t.avail_in,d-=t.avail_out,t.total_in+=f,t.total_out+=d,r.total+=d,r.wrap&&d&&(t.adler=r.check=r.flags?B(r.check,n,d,t.next_out-d):O(r.check,n,d,t.next_out-d)),t.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===d||4===e)&&x===N&&(x=-5),x)},r.inflateEnd=function(t){if(!t||!t.state)return U;var e=t.state;return e.window&&(e.window=null),t.state=null,N},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?U:((r.head=e).done=!1,N):U},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,e,i,0)!==r.check?-3:Z(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,e,r){"use strict";var D=t("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,i,n,s,a,o){var h,u,l,f,d,c,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<i;v++)O[e[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===t||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<i;v++)0!==e[r+v]&&(a[B[e[r+v]]++]=v);if(c=0===t?(A=R=a,19):1===t?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,d=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===t&&852<C||2===t&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<c?(m=0,a[v]):a[v]>c?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;n[d+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=e[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),d+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===t&&852<C||2===t&&592<C)return 1;n[l=E&f]=k<<24|x<<16|d-s|0}}return 0!==E&&(n[d+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,e,r){"use strict";var n=t("../utils/common"),o=0,h=1;function i(t){for(var e=t.length;0<=--e;)t[e]=0}var s=0,a=29,u=256,l=u+1+a,f=30,d=19,_=2*l+1,g=15,c=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));i(z);var C=new Array(2*f);i(C);var E=new Array(512);i(E);var A=new Array(256);i(A);var I=new Array(a);i(I);var O,B,R,T=new Array(f);function D(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function N(t){return t<256?E[t]:E[256+(t>>>7)]}function U(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function P(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,U(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function L(t,e,r){P(t,r[2*e],r[2*e+1])}function j(t,e){for(var r=0;r|=1&t,t>>>=1,r<<=1,0<--e;);return r>>>1}function Z(t,e,r){var i,n,s=new Array(g+1),a=0;for(i=1;i<=g;i++)s[i]=a=a+r[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=j(s[o]++,o))}}function W(t){var e;for(e=0;e<l;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<d;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*m]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?U(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function H(t,e,r,i){var n=2*e,s=2*r;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[r]}function G(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&H(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!H(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function K(t,e,r){var i,n,s,a,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(s=A[n])+u+1,e),0!==(a=w[s])&&P(t,n-=I[s],a),L(t,s=N(--i),r),0!==(a=k[s])&&P(t,i-=T[s],a)),o<t.last_lit;);L(t,m,e)}function Y(t,e){var r,i,n,s=e.dyn_tree,a=e.stat_desc.static_tree,o=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(t.heap[++t.heap_len]=u=r,t.depth[r]=0):s[2*r+1]=0;for(;t.heap_len<2;)s[2*(n=t.heap[++t.heap_len]=u<2?++u:0)]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=a[2*n+1]);for(e.max_code=u,r=t.heap_len>>1;1<=r;r--)G(t,s,r);for(n=h;r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,s,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,s[2*n]=s[2*r]+s[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,s[2*r+1]=s[2*i+1]=n,t.heap[1]=n++,G(t,s,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,s,a,o,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(s=0;s<=g;s++)t.bl_count[s]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<_;r++)p<(s=h[2*h[2*(i=t.heap[r])+1]+1]+1)&&(s=p,m++),h[2*i+1]=s,u<i||(t.bl_count[s]++,a=0,c<=i&&(a=d[i-c]),o=h[2*i],t.opt_len+=o*(s+a),f&&(t.static_len+=o*(l[2*i+1]+a)));if(0!==m){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(i=t.bl_count[s];0!==i;)u<(n=t.heap[--r])||(h[2*n+1]!==s&&(t.opt_len+=(s-h[2*n+1])*h[2*n],h[2*n+1]=s),i--)}}(t,e),Z(s,u,t.bl_count)}function X(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=a,a=e[2*(i+1)+1],++o<h&&n===a||(o<u?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[2*b]++):o<=10?t.bl_tree[2*v]++:t.bl_tree[2*y]++,s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4))}function V(t,e,r){var i,n,s=-1,a=e[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),i=0;i<=r;i++)if(n=a,a=e[2*(i+1)+1],!(++o<h&&n===a)){if(o<u)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==s&&(L(t,n,t.bl_tree),o--),L(t,b,t.bl_tree),P(t,o-3,2)):o<=10?(L(t,v,t.bl_tree),P(t,o-3,3)):(L(t,y,t.bl_tree),P(t,o-11,7));s=n,u=(o=0)===a?(h=138,3):n===a?(h=6,3):(h=7,4)}}i(T);var q=!1;function J(t,e,r,i){P(t,(s<<1)+(i?1:0),3),function(t,e,r,i){M(t),i&&(U(t,r),U(t,~r)),n.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){q||(function(){var t,e,r,i,n,s=new Array(g+1);for(i=r=0;i<a-1;i++)for(I[i]=r,t=0;t<1<<w[i];t++)A[r++]=i;for(A[r-1]=i,i=n=0;i<16;i++)for(T[i]=n,t=0;t<1<<k[i];t++)E[n++]=i;for(n>>=7;i<f;i++)for(T[i]=n<<7,t=0;t<1<<k[i]-7;t++)E[256+n++]=i;for(e=0;e<=g;e++)s[e]=0;for(t=0;t<=143;)z[2*t+1]=8,t++,s[8]++;for(;t<=255;)z[2*t+1]=9,t++,s[9]++;for(;t<=279;)z[2*t+1]=7,t++,s[7]++;for(;t<=287;)z[2*t+1]=8,t++,s[8]++;for(Z(z,l+1,s),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=j(t,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,d,p)}(),q=!0),t.l_desc=new F(t.dyn_ltree,O),t.d_desc=new F(t.dyn_dtree,B),t.bl_desc=new F(t.bl_tree,R),t.bi_buf=0,t.bi_valid=0,W(t)},r._tr_stored_block=J,r._tr_flush_block=function(t,e,r,i){var n,s,a=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e<u;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),Y(t,t.l_desc),Y(t,t.d_desc),a=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),Y(t,t.bl_desc),e=d-1;3<=e&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=n&&(n=s)):n=s=r+5,r+4<=n&&-1!==e?J(t,e,r,i):4===t.strategy||s===n?(P(t,2+(i?1:0),3),K(t,z,C)):(P(t,4+(i?1:0),3),function(t,e,r,i){var n;for(P(t,e-257,5),P(t,r-1,5),P(t,i-4,4),n=0;n<i;n++)P(t,t.bl_tree[2*S[n]+1],3);V(t,t.dyn_ltree,e-1),V(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),K(t,t.dyn_ltree,t.dyn_dtree)),W(t),i&&M(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(A[r]+u+1)]++,t.dyn_dtree[2*N(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){P(t,2,3),L(t,m,z),function(t){16===t.bi_valid?(U(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":41}],53:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,e,r){"use strict";e.exports="function"==typeof setImmediate?setImmediate:function(){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/buffer/index.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/simplex-noise/simplex-noise.js":
/*!*****************************************************!*\
  !*** ./node_modules/simplex-noise/simplex-noise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return SimplexNoise;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // common js
  if (true) exports.SimplexNoise = SimplexNoise;
  // browser
  else {}
  // nodejs
  if (true) {
    module.exports = SimplexNoise;
  }

})();


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ })

/******/ });
});
//# sourceMappingURL=urpflanze.js.map