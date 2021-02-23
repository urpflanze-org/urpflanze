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
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/Color.js":
/*!***********************!*\
  !*** ./dist/Color.js ***!
  \***********************/
/*! namespace exports */
/*! export hslToRgb [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseColor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseColorAndConvert [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rgbToHsl [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseColorAndConvert": () => /* binding */ parseColorAndConvert,
/* harmony export */   "parseColor": () => /* binding */ parseColor,
/* harmony export */   "hslToRgb": () => /* binding */ hslToRgb,
/* harmony export */   "rgbToHsl": () => /* binding */ rgbToHsl
/* harmony export */ });
/**
 * Convert color to IConvertedColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 *
 * @internal
 * @ignore
 * @param {(string | number)} color
 * @returns {(IConvertedColor | undefined)}
 */
function parseColorAndConvert(color) {
    var parsed = parseColor(color);
    if (parsed) {
        if (parsed.type === 'hsl') {
            var _a = hslToRgb(parsed.a, parsed.b, parsed.c), r = _a[0], g = _a[1], b = _a[2];
            return {
                r: r,
                g: g,
                b: b,
                h: parsed.a,
                s: parsed.b,
                l: parsed.c,
                alpha: parsed.alpha,
            };
        }
        else {
            var _b = rgbToHsl(parsed.a, parsed.b, parsed.c), h = _b[0], s = _b[1], l = _b[2];
            return {
                h: h,
                s: s,
                l: l,
                r: parsed.a,
                g: parsed.b,
                b: parsed.c,
                alpha: parsed.alpha,
            };
        }
    }
}
/**
 * Convert color to IColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 *
 * @internal
 * @ignore
 * @param {(string | number)} color
 * @returns {(IColor | undefined)}
 */
function parseColor(color) {
    if (typeof color === 'number') {
        if (color > 0xffffff) {
            return {
                type: 'rgb',
                a: (color >> 24) & 255,
                b: (color >> 16) & 255,
                c: (color >> 8) & 255,
                alpha: (color & 255) / 255,
            };
        }
        else {
            return { type: 'rgb', a: (color >> 16) & 255, b: (color >> 8) & 255, c: color & 255, alpha: 1 };
        }
    }
    color = color.replace(/\s/g, '');
    var match = /^#([0-9a-f]{3,8})$/i.exec(color);
    if (match) {
        var hex = match[1];
        if (hex.length === 3) {
            return {
                type: 'rgb',
                a: parseInt(hex[0] + hex[0], 16),
                b: parseInt(hex[1] + hex[1], 16),
                c: parseInt(hex[2] + hex[2], 16),
                alpha: 1,
            };
        }
        else {
            return {
                type: 'rgb',
                a: parseInt(hex[0] + hex[1], 16),
                b: parseInt(hex[2] + hex[3], 16),
                c: parseInt(hex[4] + hex[5], 16),
                alpha: hex.length > 6 ? parseInt(hex.substring(6), 16) / 255 : 1,
            };
        }
    }
    match = /^((hsl|rgb)a?)\((\d+),(\d+)%?,(\d+)%?,?(.+)?\)$/i.exec(color);
    if (match) {
        var _a = match, type = _a[2], a = _a[3], b = _a[4], c = _a[5], alpha = _a[6];
        return {
            type: type,
            a: +a,
            b: +b,
            c: +c,
            alpha: alpha ? +alpha : 1,
        };
    }
}
/**
 * Convert hsl color to rgb
 *
 * @internal
 * @ignore
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {[number, number, number]}
 */
function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    var r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        var hue2rgb = function (p, q, t) {
            t += t < 0 ? 1 : t > 1 ? -1 : 0;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [(0.5 + r * 255) << 0, (0.5 + g * 255) << 0, (0.5 + b * 255) << 0];
}
/**
 * Convert rbg to hsl
 *
 * @internal
 * @ignore
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {[number, number, number]} (0-360, 0-100, 0-100)
 */
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s;
    var l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
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
        h = h / 6;
    }
    return [(0.5 + h * 360) << 0, (0.5 + s * 100) << 0, (0.5 + l * 100) << 0];
}
//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "./dist/Utilites.js":
/*!**************************!*\
  !*** ./dist/Utilites.js ***!
  \**************************/
/*! namespace exports */
/*! export angle2FromRepetition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export angleFromRepetition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cancelablePromise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clamp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export distanceFromRepetition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lerp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export noise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export now [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseFunction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export relativeClamp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toDegrees [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRadians [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseFunction": () => /* binding */ parseFunction,
/* harmony export */   "cancelablePromise": () => /* binding */ cancelablePromise,
/* harmony export */   "now": () => /* binding */ now,
/* harmony export */   "toDegrees": () => /* binding */ toDegrees,
/* harmony export */   "toRadians": () => /* binding */ toRadians,
/* harmony export */   "toArray": () => /* binding */ toArray,
/* harmony export */   "lerp": () => /* binding */ lerp,
/* harmony export */   "clamp": () => /* binding */ clamp,
/* harmony export */   "relativeClamp": () => /* binding */ relativeClamp,
/* harmony export */   "noise": () => /* binding */ noise,
/* harmony export */   "angleFromRepetition": () => /* binding */ angleFromRepetition,
/* harmony export */   "angle2FromRepetition": () => /* binding */ angle2FromRepetition,
/* harmony export */   "distanceFromRepetition": () => /* binding */ distanceFromRepetition
/* harmony export */ });
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec2.js");
;

// import SceneChild from '@core/SceneChild'

// import Scene from '@core/Scene'
/**
 * @ignore
 */
var parseFunction = {
    suffix: '$fn:',
    parse: function (data) {
        return typeof data === 'function' && data.name !== 'SimpleAnimation' ? parseFunction.suffix + data.toString() : data;
    },
    unparse: function (data) {
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
    var resolved = false;
    var canceled = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
        promise
            .then(function (val) {
            resolved = true;
            canceled ? reject('canceled') : resolve(val);
        })
            .catch(function (error) {
            resolved = true;
            canceled ? reject('canceled') : reject(error);
        });
    });
    return {
        promise: wrappedPromise,
        resolved: function () { return resolved; },
        canceled: function () { return canceled; },
        cancel: function () {
            canceled = true;
        },
    };
}
// isDef: (object: any): boolean => typeof object !== 'undefined' && object !== null,
/**
 * Get current timestamp in milliseconds
 *
 * @ignore
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
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @category Utilities
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */
function lerp(a, b, i) {
    return (1 - i) * a + i * b;
}
/**
 * Return number between min and max
 *
 * @category Utilities
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, 1.2) // 1
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
/**
 * @internal
 * @ignore
 */
var noises = {
    random: new (simplex_noise__WEBPACK_IMPORTED_MODULE_0___default())(Math.random),
};
/**
 * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
 * Use 'random' as seed property for random seed.
 * Return value between -1 and 1
 *
 * @category Utilities
 *
 * @param {string} [seed='random']
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [z=0]
 * @returns {number}
 */
function noise(seed, x, y, z) {
    if (seed === void 0) { seed = 'random'; }
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (z === void 0) { z = 0; }
    if (typeof noises[seed] === 'undefined') {
        noises[seed] = new (simplex_noise__WEBPACK_IMPORTED_MODULE_0___default())(seed);
    }
    return noises[seed].noise3D(x, y, z);
}
/**
 * Return angle (atan) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI / 2 and Math.PI / 2
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {vec2} offsetFromCenter
 * @returns {number}
 */
function angleFromRepetition(repetition, offsetFromCenter) {
    if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
    if (repetition.type == _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        var centerMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        var x = repetition.col.index - 1 - centerMatrix[0];
        var y = repetition.row.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan(y / x);
    }
    return (repetition.angle - Math.PI) / 2;
}
/**
 * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI an Math.PI
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {vec2} offsetFromCenter
 * @returns {number}
 */
function angle2FromRepetition(repetition, offsetFromCenter) {
    if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
    if (repetition.type == _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        var centerMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        var x = repetition.col.index - 1 - centerMatrix[0];
        var y = repetition.col.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan2(y, x);
    }
    return repetition.angle - Math.PI;
}
/**
 * Return distance from offset (or center) for matrix repetition.
 * The return value is between 0 and 1
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {vec2} offsetFromCenter offset relative to distance prop
 * @returns {number}
 */
function distanceFromRepetition(repetition, offsetFromCenter) {
    if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
    if (repetition.type == _core_types_scene_child__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        var centerMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.5, 0.5);
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        var current = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(repetition.col.offset - 0.5 / repetition.col.count, repetition.row.offset - 0.5 / repetition.row.count);
        return gl_matrix__WEBPACK_IMPORTED_MODULE_2__.distance(current, centerMatrix);
    }
    return 1;
}
// /**
//  * Get value percentage of scene width.
//  *
//  * @param {number} percentage
//  * @param {SceneChild} sceneChild
//  * @returns {number}
//  */
// percW: (percentage: number, sceneChild: SceneChild | Scene): number => {
// 	if (sceneChild instanceof Scene) return (sceneChild.width * percentage) / 100
// 	return sceneChild && sceneChild.scene ? (sceneChild.scene.width * percentage) / 100 : percentage
// },
// /**
//  * Get value percentage of scene height.
//  *
//  * @param {number} percentage
//  * @param {SceneChild} sceneChild
//  * @returns {number}
//  */
// percH: (percentage: number, sceneChild: SceneChild | Scene): number => {
// 	if (sceneChild instanceof Scene) return (sceneChild.height * percentage) / 100
// 	return sceneChild && sceneChild.scene ? (sceneChild.scene.height * percentage) / 100 : percentage
// },
//# sourceMappingURL=Utilites.js.map

/***/ }),

/***/ "./dist/core/Group.js":
/*!****************************!*\
  !*** ./dist/core/Group.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./dist/core/Scene.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/bounding */ "./dist/core/math/bounding.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @example
 * ```javascript
 * // Group example
 *
 * const rect = new Urpflanze.Rect({
 * 	distance: 100 // <- if a property is set the group will not overwrite it
 * })
 * const group = new Urpflanze.Group({
 * 	repetitions: 3,
 * 	distance: 200
 * })
 *
 * group.add(rect)
 * group.add(new Urpflanze.Triangle())
 * ```
 * @class Group
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    /**
     * Creates an instance of Group
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof Group
     */
    function Group(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Group';
        _this = _super.call(this, settings) || this;
        _this.children = [];
        ['id', 'name', 'data', 'order', 'type'].forEach(function (prop) {
            if (prop in settings)
                delete settings[prop];
        });
        _this.props = settings;
        return _this;
    }
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    Group.prototype.isStatic = function () {
        var children = this.children;
        for (var i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    };
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    Group.prototype.isStaticIndexed = function () {
        var children = this.children;
        for (var i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    };
    /**
     * Add item to Group
     *
     * @param {Array<SceneChild>} items
     * @memberof Group
     */
    Group.prototype.add = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var _loop_1 = function (i, len) {
            var item = items[i];
            var rawItemProps = item.getProps();
            Object.keys(this_1.props).forEach(function (propKey) {
                if (typeof rawItemProps[propKey] === 'undefined')
                    item.setProp(propKey, _this.props[propKey]);
            });
            item.order =
                typeof item.order !== 'undefined'
                    ? item.order
                    : this_1.children.length > 0
                        ? Math.max.apply(this_1, this_1.children.map(function (e) { return e.order || 0; })) + 1
                        : 0;
            this_1.scene && _Scene__WEBPACK_IMPORTED_MODULE_0__.default.propagateToChilden(item, this_1.scene);
            this_1.children.push(item);
        };
        var this_1 = this;
        for (var i = 0, len = items.length; i < len; i++) {
            _loop_1(i, len);
        }
        this.sortChildren();
    };
    /**
     * Sort children
     *
     * @memberof Group
     */
    Group.prototype.sortChildren = function () {
        this.children.sort(function (a, b) { return a.order - b.order; });
        this.children = this.children.map(function (child, index) {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    };
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    Group.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Find scene child from id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    Group.prototype.find = function (idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        var children = this.getChildren();
        for (var i = 0, len = children.length; i < len; i++) {
            var result = children[i].find(idOrName);
            if (result !== null)
                return result;
        }
        return null;
    };
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    Group.prototype.get = function (index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    };
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    Group.prototype.remove = function (index) {
        if (index >= 0 && index < this.children.length) {
            var removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    };
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    Group.prototype.removeFromId = function (id) {
        for (var i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
            }
        }
    };
    /**
     * Generate children buffers
     *
     * @param {number} generateId
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ISceneChildPropArguments} [parentPropArguments]
     * @memberof Group
     */
    Group.prototype.generate = function (generateId, bDirectSceneChild, parentPropArguments) {
        if (bDirectSceneChild === void 0) { bDirectSceneChild = false; }
        this.children.forEach(function (item) { return item.generate(generateId, bDirectSceneChild, parentPropArguments); });
    };
    /**
     * Sum the children bounding
     *
     * @return {IShapeBounding}
     */
    Group.prototype.getBounding = function () {
        var boundings = [];
        var bounding = _math_bounding__WEBPACK_IMPORTED_MODULE_3__.default.empty();
        if (this.children.length > 0) {
            this.children.forEach(function (item) { return boundings.push(item.getBounding()); });
            for (var i = 0, len = this.children.length; i < len; i++) {
                bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x;
                bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y;
                bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width;
                bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height;
            }
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        return bounding;
    };
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    Group.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        this.children.forEach(function (item) { return item.clearBuffer(bClearIndexed, false); });
        if (this.scene && bPropagateToParents) {
            var parents = this.scene.getParentsOfSceneChild(this);
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
    };
    /**
     * Set a single or multiple props
     *
     * @abstract
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    Group.prototype.setProp = function (key, value) {
        var _this = this;
        if (typeof key === 'object')
            Object.keys(key).forEach(function (k) { return (_this.props[k] = key[k]); });
        else
            this.props[key] = value;
        this.children.forEach(function (item) { return item.setProp(key, value); });
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    Group.prototype.setPropUnsafe = function (key, value) {
        _super.prototype.setPropUnsafe.call(this, key, value);
        this.children.forEach(function (item) { return item.setPropUnsafe(key, value); });
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} propArguments
     * @returns {number}
     * @memberof Group
     */
    Group.prototype.getBufferLength = function (propArguments) {
        return this.children.map(function (sceneChild) { return sceneChild.getBufferLength(propArguments); }).reduce(function (p, c) { return p + c; }, 0);
    };
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    Group.prototype.getBuffer = function () {
        var buffers = this.children
            .map(function (item) { return item.getBuffer(); })
            .filter(function (b) { return b !== undefined; });
        var size = buffers.reduce(function (currLength, buffer) { return currLength + buffer.length; }, 0);
        if (size > 0) {
            var result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (var i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__.default.EMPTY_BUFFER;
    };
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof Group
     */
    Group.prototype.getIndexedBuffer = function () {
        var indexed = this.children.map(function (item) { return item.getIndexedBuffer(); }).filter(function (b) { return b !== undefined; });
        return [].concat.apply([], indexed);
    };
    /**
     * Call strem on children
     *
     * @param {(streamArguments: IStreamArguments) => void} callback
     * @memberof Group
     */
    Group.prototype.stream = function (callback) {
        this.children.forEach(function (item) { return item.stream(callback); });
    };
    return Group;
}(_SceneChild__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "./dist/core/Scene.js":
/*!****************************!*\
  !*** ./dist/core/Scene.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./dist/core/Group.js");
/* harmony import */ var _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/Shape */ "./dist/core/shapes/Shape.js");
;


/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
var Scene = /** @class */ (function () {
    /**
     * Creates an instance of Scene.
     * You can see the default values in the property definitions
     */
    function Scene(settings) {
        if (settings === void 0) { settings = {}; }
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.width = 400;
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.height = 400;
        /**
         * Default background color (black)
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         */
        this.color = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
         */
        this.currentTime = 0;
        if (typeof settings.width !== 'undefined')
            this.width = settings.width;
        if (typeof settings.height !== 'undefined')
            this.height = settings.height;
        if (typeof settings.background !== 'undefined')
            this.background = settings.background;
        if (typeof settings.color !== 'undefined')
            this.color = settings.color;
        this.children = [];
        this.center = [this.width / 2, this.height / 2];
    }
    /**
     * Return width percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    Scene.prototype.getWidth = function (percentage) {
        if (percentage === void 0) { percentage = 100; }
        return (this.width * percentage) / 100;
    };
    /**
     * Return height percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    Scene.prototype.getHeight = function (percentage) {
        if (percentage === void 0) { percentage = 100; }
        return (this.height * percentage) / 100;
    };
    /**
     * Resize the scene size
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    Scene.prototype.resize = function (width, height) {
        if (height === void 0) { height = width; }
        this.width = width;
        this.height = height;
        this.center = [this.width / 2, this.height / 2];
        this.children.forEach(function (sceneChild) { return sceneChild.clearBuffer(true, false); });
    };
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [atTime] time in ms
     * @memberof Scene
     */
    Scene.prototype.update = function (atTime) {
        this.currentTime = atTime;
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].generate(this.currentTime, true);
        }
    };
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {(streamArguments: IStreamArguments) => void} callback
     * @memberof Scene
     */
    Scene.prototype.stream = function (callback) {
        this.children.forEach(function (sceneChild) { return sceneChild.stream(callback); });
    };
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
    Scene.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Add SceneChild to Scene, pass `order` as last parameter for drawing priorities
     *
     * @param {Array<SceneChild>} items
     * @param {number} [order]
     * @memberof Scene
     */
    Scene.prototype.add = function () {
        var items = []; /**, order: number */
        for (var _i = 0 /**, order: number */; _i < arguments.length /**, order: number */; _i++ /**, order: number */) {
            items[_i] = arguments[_i]; /**, order: number */
        }
        var order = typeof items[items.length - 1] === 'number' ? items[items.length - 1] : undefined;
        var len = items.length - (typeof order === 'undefined' ? 0 : 1);
        for (var i = 0; i < len; i++) {
            var item = items[i];
            item.order =
                typeof order !== 'undefined'
                    ? order + i
                    : typeof item.order !== 'undefined'
                        ? item.order
                        : this.children.length > 0
                            ? Math.max.apply(this, this.children.map(function (e) { return e.order || 0; })) + 1
                            : 0;
            Scene.propagateToChilden(item, this);
            this.children.push(item);
            item.clearBuffer(true, false);
        }
        this.sortChildren();
    };
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    Scene.prototype.sortChildren = function () {
        this.children.sort(function (a, b) { return a.order - b.order; });
        this.children = this.children.map(function (child, index) {
            child.order = index;
            return child;
        });
    };
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    Scene.prototype.find = function (idOrName) {
        var children = this.getChildren();
        for (var i = 0, len = children.length; i < len; i++) {
            var result = children[i].find(idOrName);
            if (result !== null)
                return result;
        }
        return null;
    };
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    Scene.prototype.get = function (index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    };
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    Scene.prototype.remove = function (index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    };
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    Scene.prototype.removeChildren = function () {
        this.children = [];
    };
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} idOrName
     * @memberof Scene
     */
    Scene.prototype.removeFromId = function (idOrName) {
        for (var i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === idOrName || this.children[i].name === idOrName) {
                this.children.splice(i, 1);
                return;
            }
    };
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    Scene.prototype.isFirstLevelChild = function (sceneChild) {
        for (var i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === sceneChild.id)
                return true;
        var parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length === 1 && parents[0] instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.default;
    };
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    Scene.prototype.getParentsOfSceneChild = function (sceneChild) {
        var result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    };
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
    Scene.getParentsOfSceneChild = function (current, sceneChild, parents) {
        if (parents === void 0) { parents = []; }
        var result;
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__.default) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.default && current.shape) {
                var tmpParents = parents.slice();
                tmpParents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmpParents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.default) {
            var children = current.getChildren();
            parents.push(current);
            for (var i = 0, len = children.length; i < len; i++) {
                var child = children[i];
                if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents)))
                    return result;
            }
            parents.pop();
        }
        return null;
    };
    /**
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    Scene.walk = function (callback, current) {
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__.default) {
            if (callback(current) === false)
                return false;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.default && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.default) {
            var children = current.getChildren();
            for (var i = 0, len = children.length; i < len; i++) {
                var child = children[i];
                if (Scene.walk(callback, child) === false)
                    return false;
            }
        }
    };
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    Scene.propagateToChilden = function (sceneChild, scene) {
        sceneChild.scene = scene;
        if (sceneChild instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.default) {
            sceneChild.getChildren().forEach(function (item) {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.default && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    };
    return Scene;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);
//# sourceMappingURL=Scene.js.map

/***/ }),

/***/ "./dist/core/SceneChild.js":
/*!*********************************!*\
  !*** ./dist/core/SceneChild.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
var __id = 0;
/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
var SceneChild = /** @class */ (function () {
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     */
    function SceneChild(settings) {
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
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     */
    SceneChild.prototype.find = function (idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        return null;
    };
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     */
    SceneChild.prototype.getProps = function () {
        return this.props;
    };
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    SceneChild.prototype.getProp = function (key, propArguments, defaultValue) {
        var _a;
        return ((_a = this.props[key]) !== null && _a !== void 0 ? _a : defaultValue);
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     */
    SceneChild.prototype.setPropUnsafe = function (key, value) {
        var _this = this;
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach(function (k) {
                return (_this.props[k] = key[k]);
            });
    };
    return SceneChild;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneChild);
//# sourceMappingURL=SceneChild.js.map

/***/ }),

/***/ "./dist/core/math/Vec2.js":
/*!********************************!*\
  !*** ./dist/core/math/Vec2.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * Temporany matrix
 *
 * @internal
 * @ignore
 */
var MATRIX = new Array(4);
/**
 * Vec2 operation
 *
 * @category Core.Utilities
 */
var Vec2 = {
    /**
     * Create new vertex
     *
     * @param {Array<number> | number} [x=0]
     * @param {number} [y]
     * @returns {Array<number>}
     */
    create: function (x, y) {
        if (x === void 0) { x = 0; }
        var out = new Array(2);
        if (typeof x === 'number') {
            out[0] = x;
            out[1] = y !== null && y !== void 0 ? y : x;
        }
        else {
            out[0] = x[0];
            out[1] = x[1];
        }
        return out;
    },
    normalize: function (v) {
        var len = Vec2.length(v);
        return len !== 0 ? [v[0] / len, v[1] / len] : [0, 0];
    },
    /**
     * Distance between two points
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    distance: function (a, b) { return Math.hypot(b[0] - a[0], b[1] - a[1]); },
    /**
     * dot product
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    dot: function (a, b) { return a[0] * b[0] + a[1] * b[1]; },
    /**
     * length of point
     *
     * @param {Array<number>} vec
     * @returns {number}
     */
    length: function (vec) { return Math.hypot(vec[0], vec[1]); },
    /**
     * angle between two point
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    angle: function (a, b) {
        a = Vec2.normalize(a);
        b = Vec2.normalize(b);
        return Math.acos(Vec2.dot(a, b));
    },
    /**
     * skewX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewX: function (vec, m) {
        vec[0] += Math.tan(m) * vec[1];
    },
    /**
     * skewY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewY: function (vec, m) {
        vec[1] += Math.tan(m) * vec[0];
    },
    /**
     * squeezeX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeX: function (vec, m) {
        vec[1] += vec[1] * (vec[0] * -m);
    },
    /**
     * squeezeY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeY: function (vec, m) {
        vec[0] += vec[0] * (vec[1] * m);
    },
    /**
     * Rotate point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} MATRIX
     * @param {Array<number>} fromPoint
     * @internal
     */
    rotate: function (vec, MATRIX, fromPoint) {
        var p0 = vec[0] - fromPoint[0];
        var p1 = vec[1] - fromPoint[1];
        vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + fromPoint[0];
        vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + fromPoint[1];
    },
    /**
     * RotateX point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateX: function (vec, fromPoint, rad) {
        MATRIX[0] = 1;
        MATRIX[1] = 0;
        MATRIX[2] = 0;
        MATRIX[3] = Math.cos(rad);
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * RotateY point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateY: function (vec, fromPoint, rad) {
        MATRIX[0] = Math.cos(rad);
        MATRIX[1] = 0;
        MATRIX[2] = 0;
        MATRIX[3] = 1;
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * RotateZ point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateZ: function (vec, fromPoint, rad) {
        MATRIX[0] = Math.cos(rad);
        MATRIX[1] = -Math.sin(rad);
        MATRIX[2] = Math.sin(rad);
        MATRIX[3] = Math.cos(rad);
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * Translate vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    translate: function (vec, to) {
        vec[0] += to[0];
        vec[1] += to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    scale: function (vec, to) {
        vec[0] *= to[0];
        vec[1] *= to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    divide: function (vec, to) {
        vec[0] /= to[0];
        vec[1] /= to[1];
    },
    /**
     * Vec to string
     *
     * @param {Array<number>} vec
     * @return {string}
     */
    toString: function (vec) { return "x: " + vec[0] + ", y: " + vec[1]; },
    /**
     * Vertex [0, 0]
     */
    ZERO: Array.from([0, 0]),
    /**
     * Vertex [1, 1]
     */
    ONE: Array.from([1, 1]),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vec2);
//# sourceMappingURL=Vec2.js.map

/***/ }),

/***/ "./dist/core/math/bounding.js":
/*!************************************!*\
  !*** ./dist/core/math/bounding.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * @internal
 * @ignore
 */
var Bounding = {
    empty: function () { return ({
        cx: 0,
        cy: 0,
        x: -1,
        y: -1,
        width: 2,
        height: 2,
    }); },
    clear: function (tmpBounding) {
        tmpBounding[0] = undefined;
        tmpBounding[1] = undefined;
        tmpBounding[2] = undefined;
        tmpBounding[3] = undefined;
    },
    add: function (tmpBounding, x, y) {
        if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0])
            tmpBounding[0] = x;
        if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2])
            tmpBounding[2] = x;
        if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1])
            tmpBounding[1] = y;
        if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3])
            tmpBounding[3] = y;
    },
    sum: function (dest, bounding) {
        if (typeof bounding[0] !== 'undefined' &&
            typeof bounding[1] !== 'undefined' &&
            typeof bounding[2] !== 'undefined' &&
            typeof bounding[3] !== 'undefined') {
            if (typeof dest[0] === 'undefined' ||
                typeof dest[1] === 'undefined' ||
                typeof dest[2] === 'undefined' ||
                typeof dest[3] === 'undefined') {
                dest[0] = bounding[0];
                dest[1] = bounding[1];
                dest[2] = bounding[2];
                dest[3] = bounding[3];
            }
            else {
                if (dest[0] < bounding[0])
                    dest[0] = bounding[0];
                if (dest[2] > bounding[2])
                    dest[2] = bounding[2];
                if (dest[1] < bounding[1])
                    dest[1] = bounding[1];
                if (dest[3] > bounding[3])
                    dest[3] = bounding[3];
            }
        }
        else {
            console.warn('[Urplfanze:Bounding] cannot sum bounding');
        }
    },
    bind: function (bounding, tmpBounding) {
        if (typeof tmpBounding[0] !== 'undefined' &&
            typeof tmpBounding[1] !== 'undefined' &&
            typeof tmpBounding[2] !== 'undefined' &&
            typeof tmpBounding[3] !== 'undefined') {
            bounding.x = tmpBounding[0];
            bounding.y = tmpBounding[1];
            bounding.width = tmpBounding[2] - tmpBounding[0];
            bounding.height = tmpBounding[3] - tmpBounding[1];
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        else {
            console.warn('[Urplfanze:Bounding] cannot bind bounding');
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bounding);
//# sourceMappingURL=bounding.js.map

/***/ }),

/***/ "./dist/core/math/gl-matrix-extensions.js":
/*!************************************************!*\
  !*** ./dist/core/math/gl-matrix-extensions.js ***!
  \************************************************/
/*! namespace exports */
/*! export VEC2_ONE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export VEC2_ZERO [provided] [no usage info] [missing usage info prevents renaming] */
/*! export VEC3_ONE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export VEC3_ZERO [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromSkew [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toVec2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toVec3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VEC3_ZERO": () => /* binding */ VEC3_ZERO,
/* harmony export */   "VEC3_ONE": () => /* binding */ VEC3_ONE,
/* harmony export */   "VEC2_ZERO": () => /* binding */ VEC2_ZERO,
/* harmony export */   "VEC2_ONE": () => /* binding */ VEC2_ONE,
/* harmony export */   "fromSkew": () => /* binding */ fromSkew,
/* harmony export */   "toVec2": () => /* binding */ toVec2,
/* harmony export */   "toVec3": () => /* binding */ toVec3
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/common.js");
;
var VEC3_ZERO = [0, 0, 0];
var VEC3_ONE = [1, 1, 1];
var VEC2_ZERO = [0, 0];
var VEC2_ONE = [1, 1];
gl_matrix__WEBPACK_IMPORTED_MODULE_0__.setMatrixArrayType(Array);
/**
 * Skew matrix
 *
 * @internal
 * @ignore
 */
function fromSkew(out, skew) {
    out[0] = 1;
    out[1] = Math.tan(skew[1]);
    out[2] = 0;
    out[3] = 0;
    out[4] = Math.tan(skew[0]);
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * number to vec 2
 *
 * @internal
 * @ignore
 */
function toVec2(x) {
    if (Array.isArray(x))
        return [x[0], x[1]];
    return [x, x];
}
/**
 * number to vec 3
 *
 * @internal
 * @ignore
 */
function toVec3(x, defaultZValue) {
    if (defaultZValue === void 0) { defaultZValue = 0; }
    if (Array.isArray(x)) {
        return [x[0], x[1], defaultZValue];
    }
    return [x, x, defaultZValue];
}
//# sourceMappingURL=gl-matrix-extensions.js.map

/***/ }),

/***/ "./dist/core/math/index.js":
/*!*********************************!*\
  !*** ./dist/core/math/index.js ***!
  \*********************************/
/*! namespace exports */
/*! export PHI [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PI2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export log [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pmod [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "PI2": () => /* binding */ PI2,
/* harmony export */   "PHI": () => /* binding */ PHI,
/* harmony export */   "pmod": () => /* binding */ pmod
/* harmony export */ });
/**
 * Return logarith value and base
 *
 * @category Core.Utilities
 *
 * @param n number
 * @param base number
 */
var log = function (n, base) { return Math.log(n) / Math.log(base); };
/**
 * @category Core.Utilities
 */
var PI2 = Math.PI * 2;
/**
 * @category Core.Utilities
 */
var PHI = (1 + Math.sqrt(5)) / 2;
/**
 * Return a positive module of positive or negative value
 *
 * @category Core.Utilities
 *
 * @param value number
 * @param base number
 */
var pmod = function (value, base) {
    var result = value % base;
    return result < 0 ? result + base : result;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/core/shapes/Shape.js":
/*!***********************************!*\
  !*** ./dist/core/shapes/Shape.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Scene */ "./dist/core/Scene.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Core.Shapes
 */
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     */
    function Shape(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = settings.type || 'Shape';
        _this = _super.call(this, settings) || this;
        if (settings.shape instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_1__.default) {
            _this.shape = settings.shape;
        }
        else {
            console.warn("[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:", settings.shape);
        }
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    Shape.prototype.isStatic = function () {
        return _super.prototype.isStatic.call(this) && (this.shape ? this.shape.isStatic() : true);
    };
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     */
    Shape.prototype.isStaticIndexed = function () {
        return _super.prototype.isStaticIndexed.call(this) && (this.shape ? this.shape.isStaticIndexed() : true);
    };
    /**
     * Find shape by id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     */
    Shape.prototype.find = function (idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        if (this.shape)
            return this.shape.find(idOrName);
        return null;
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} propArguments
     * @returns {number}
     */
    Shape.prototype.getBufferLength = function (propArguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        var childBufferLength = this.shape ? this.shape.getBufferLength(propArguments) : 0;
        return childBufferLength * this.getRepetitionCount();
    };
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     */
    Shape.prototype.generateBuffer = function (generateId, propArguments) {
        if (this.shape) {
            this.shape.generate(generateId, false, propArguments);
            return this.shape.getBuffer() || Shape.EMPTY_BUFFER;
        }
        return Shape.EMPTY_BUFFER;
    };
    /**
     * Return bounding
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     */
    Shape.prototype.getShapeBounding = function () {
        if (this.shape) {
            return this.shape.getBounding();
        }
        return this.bounding; // empty bounding defined in ShapeBase
    };
    /**
     * Add to indexed buffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    Shape.prototype.addIndex = function (frameLength, repetition, recursion
    // singleRepetitionBounding: IShapeBounding
    ) {
        if (this.shape) {
            var childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            var parent_1 = {
                shape: this,
                frameLength: frameLength,
                // singleRepetitionBounding,
                repetition: {
                    type: repetition.type,
                    angle: repetition.angle,
                    index: repetition.index,
                    count: repetition.count,
                    offset: repetition.offset,
                    row: {
                        index: repetition.row.index,
                        count: repetition.row.count,
                        offset: repetition.row.offset,
                    },
                    col: {
                        index: repetition.col.index,
                        count: repetition.col.count,
                        offset: repetition.col.offset,
                    },
                },
            };
            if (typeof recursion !== 'undefined') {
                parent_1.recursion = {
                    index: recursion.index,
                    offset: recursion.offset,
                    count: recursion.offset,
                    level: recursion.level,
                };
            }
            for (var i = 0, len = childIndexedBuffer.length; i < len; i++) {
                var currentIndexed = __assign({}, childIndexedBuffer[i]);
                currentIndexed.parent = currentIndexed.parent ? Shape.setIndexedParent(currentIndexed.parent, parent_1) : parent_1;
                this.indexedBuffer.push(currentIndexed);
            }
        }
    };
    /**
     * Set parent of indexed
     *
     * @static
     * @param {(IBufferIndex | IParentBufferIndex)} current
     * @param {IParentBufferIndex} parent
     * @returns {(IBufferIndex | IParentBufferIndex)}
     */
    Shape.setIndexedParent = function (current, parent) {
        var index = {
            shape: current.shape,
            // singleRepetitionBounding: current.singleRepetitionBounding,
            repetition: {
                type: current.repetition.type,
                angle: current.repetition.angle,
                index: current.repetition.index,
                count: current.repetition.count,
                offset: current.repetition.offset,
                row: {
                    index: current.repetition.row.index,
                    count: current.repetition.row.count,
                    offset: current.repetition.row.offset,
                },
                col: {
                    index: current.repetition.col.index,
                    count: current.repetition.col.count,
                    offset: current.repetition.col.offset,
                },
            },
            frameLength: current.frameLength,
        };
        if (typeof current.recursion !== 'undefined') {
            index.recursion = {
                index: current.recursion.index,
                offset: current.recursion.offset,
                count: current.recursion.offset,
                level: current.recursion.level,
            };
        }
        index.parent = current.parent ? Shape.setIndexedParent(current.parent, parent) : parent;
        return index;
    };
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     */
    Shape.prototype.setShape = function (shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true, true);
        }
        else {
            this.scene && _Scene__WEBPACK_IMPORTED_MODULE_2__.default.propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true, true);
        }
    };
    return Shape;
}(_ShapeBase__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);
//# sourceMappingURL=Shape.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeBase.js":
/*!***************************************!*\
  !*** ./dist/core/shapes/ShapeBase.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _types_scene_child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/gl-matrix-extensions */ "./dist/core/math/gl-matrix-extensions.js");
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math */ "./dist/core/math/index.js");
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math/bounding */ "./dist/core/math/bounding.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SceneChild */ "./dist/core/SceneChild.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var tmpMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
var transformMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
var perspectiveMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
var repetitionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
var ShapeBase = /** @class */ (function (_super) {
    __extends(ShapeBase, _super);
    /**
     * Creates an instance of ShapeBase
     *
     * @param {ISceneChildSettings} [settings={}]
     */
    function ShapeBase(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this, settings) || this;
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @internal
         * @ignore
         */
        _this.generateId = -1;
        /**
         * Flag used to determine if indexedBuffer has been generated
         *
         * @internal
         * @ignore
         */
        _this.bIndexed = false;
        /**
         * Array used for index a vertex buffer
         * only for first level scene children
         *
         * @internal
         * @ignore
         */
        _this.indexedBuffer = [];
        /**
         * The bounding inside the scene
         *
         * @type {IShapeBounding}
         */
        _this.bounding = {
            cx: 0,
            cy: 0,
            x: -1,
            y: -1,
            width: 2,
            height: 2,
        };
        _this.props = {
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
            transformOrigin: settings.transformOrigin,
            perspective: settings.perspective,
            perspectiveOrigin: settings.perspectiveOrigin,
        };
        _this.bUseParent = !!settings.bUseParent;
        _this.bUseRecursion = !!settings.bUseRecursion;
        _this.vertexCallback = settings.vertexCallback;
        return _this;
    }
    /**
     * Check if the shape should be generated every time
     *
     * @returns {boolean}
     */
    ShapeBase.prototype.isStatic = function () {
        var props = this.props;
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
            typeof props.transformOrigin !== 'function');
    };
    /**
     * Check if the indexedBuffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
     *
     * @returns {boolean}
     */
    ShapeBase.prototype.isStaticIndexed = function () {
        return typeof this.props.repetitions !== 'function';
    };
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    ShapeBase.prototype.getProp = function (key, propArguments, defaultValue) {
        var attribute = this.props[key];
        if (typeof attribute === 'function') {
            attribute = attribute(propArguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? defaultValue : attribute;
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    ShapeBase.prototype.setProp = function (key, value, bClearIndexed) {
        var _this = this;
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (typeof key == 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach(function (k) {
                return (_this.props[k] = key[k]);
            });
        }
        this.clearBuffer(bClearIndexed, true);
    };
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    ShapeBase.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        this.buffer = undefined;
        if (bClearIndexed) {
            this.bIndexed = false;
            this.indexedBuffer = [];
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            var parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    };
    /**
     * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
     *
     * @param {number} generateId generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parentPropArguments]
     */
    ShapeBase.prototype.generate = function (generateId, bDirectSceneChild, parentPropArguments) {
        var _a, _b;
        if (bDirectSceneChild === void 0) { bDirectSceneChild = false; }
        if (this.buffer && (this.bStatic || (generateId === this.generateId && !this.bUseParent && !this.bUseRecursion))) {
            return;
        }
        this.generateId = generateId;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexedBuffer = [];
        var propArguments = ShapeBase.getEmptyPropArguments(this, parentPropArguments);
        var repetition = propArguments.repetition;
        var repetitions = this.getProp('repetitions', propArguments, 1);
        var repetitionType = Array.isArray(repetitions) ? _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Matrix : _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring;
        var repetitionCount = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        var repetitionRowCount = Array.isArray(repetitions) ? repetitions[0] : repetitionCount;
        var repetitionColCount = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        var rowRepetition = repetition.row;
        rowRepetition.count = repetitionRowCount;
        var colRepetition = repetition.col;
        colRepetition.count = repetitionColCount;
        repetition.count = repetitionCount;
        repetition.col.count = repetitionColCount;
        repetition.row.count = repetitionRowCount;
        repetition.type = repetitionType;
        var totalBufferLength = 0;
        var buffers = [];
        var currentIndex = 0;
        var centerMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_8__.fromValues((repetitionColCount - 1) / 2, (repetitionRowCount - 1) / 2);
        var sceneCenter = this.scene ? [this.scene.center[0], this.scene.center[1], 0] : [0, 0, 0];
        var tmpTotalShapeBounding = [undefined, undefined, undefined, undefined];
        var tmpSingleRepetitionBounding = [undefined, undefined, undefined, undefined];
        for (var currentRowRepetition = 0; currentRowRepetition < repetitionRowCount; currentRowRepetition++) {
            for (var currentColRepetition = 0; currentColRepetition < repetitionColCount; currentColRepetition++, currentIndex++) {
                repetition.index = currentIndex + 1;
                repetition.offset = repetitionCount > 1 ? currentIndex / (repetitionCount - 1) : 1;
                repetition.angle = repetitionType === _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring ? (_math__WEBPACK_IMPORTED_MODULE_4__.PI2 / repetitionCount) * currentIndex : 0;
                colRepetition.index = currentColRepetition + 1;
                colRepetition.offset = repetitionColCount > 1 ? currentColRepetition / (repetitionColCount - 1) : 1;
                rowRepetition.index = currentRowRepetition + 1;
                rowRepetition.offset = repetitionRowCount > 1 ? currentRowRepetition / (repetitionRowCount - 1) : 1;
                // Generate primitives buffer recursively
                var buffer = this.generateBuffer(generateId, propArguments);
                var bufferLength = buffer.length;
                var bounding = this.getShapeBounding();
                buffers[currentIndex] = new Float32Array(bufferLength);
                totalBufferLength += bufferLength;
                {
                    var distance = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec2(this.getProp('distance', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC2_ZERO));
                    var displace = this.getProp('displace', propArguments, 0);
                    var scale = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec3(this.getProp('scale', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC2_ONE), 1);
                    var translate = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec3(this.getProp('translate', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC2_ZERO), 0);
                    var skewX = this.getProp('skewX', propArguments, 0);
                    var skewY = this.getProp('skewY', propArguments, 0);
                    var squeezeX = this.getProp('squeezeX', propArguments, 0);
                    var squeezeY = this.getProp('squeezeY', propArguments, 0);
                    var rotateX = this.getProp('rotateX', propArguments, 0);
                    var rotateY = this.getProp('rotateY', propArguments, 0);
                    var rotateZ = this.getProp('rotateZ', propArguments, 0);
                    var perspective = (0,_Utilites__WEBPACK_IMPORTED_MODULE_1__.clamp)(0, 1, this.getProp('perspective', propArguments, 0));
                    var perspectiveOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec3(this.getProp('perspectiveOrigin', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC2_ZERO), 0);
                    var transformOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec3(this.getProp('transformOrigin', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC2_ZERO), 0);
                    var offset = void 0;
                    switch (repetitionType) {
                        case _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_9__.fromValues(distance[0], 0, 0);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.rotateZ(offset, offset, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.VEC3_ZERO, repetition.angle + displace);
                            break;
                        case _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Matrix:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_9__.fromValues(distance[1] * (currentColRepetition - centerMatrix[0]), distance[0] * (currentRowRepetition - centerMatrix[1]), 0);
                            break;
                    }
                    var perspectiveSize = perspective > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1;
                    var perspectiveValue = perspective > 0 ? perspectiveSize + (1 - perspective) * (perspectiveSize * 10) : 0;
                    var bTransformOrigin = perspective !== 0 || transformOrigin[0] !== 0 || transformOrigin[1] !== 0;
                    var bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0;
                    if (bTransformOrigin) {
                        transformOrigin[0] *= bounding.width / 2;
                        transformOrigin[1] *= bounding.height / 2;
                        transformOrigin[2] = perspectiveValue;
                    }
                    /**
                     * Create Matrices
                     */
                    {
                        /**
                         * Create Transformation matrix
                         */
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.identity(transformMatrix);
                        bTransformOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, transformOrigin);
                        if (translate[0] !== 0 || translate[1] !== 0)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, translate);
                        if (skewX !== 0 || skewY !== 0) {
                            _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.fromSkew(tmpMatrix, [skewX, skewY]);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.multiply(transformMatrix, transformMatrix, tmpMatrix);
                        }
                        rotateX !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateX(transformMatrix, transformMatrix, rotateX);
                        rotateY !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateY(transformMatrix, transformMatrix, rotateY);
                        rotateZ !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateZ(transformMatrix, transformMatrix, rotateZ);
                        if (scale[0] !== 1 || scale[1] !== 1)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.scale(transformMatrix, transformMatrix, scale);
                        bTransformOrigin &&
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, gl_matrix__WEBPACK_IMPORTED_MODULE_9__.scale(transformOrigin, transformOrigin, -1));
                        /**
                         * Create Perspective matrix
                         */
                        if (perspectiveValue > 0) {
                            if (bPerspectiveOrigin) {
                                perspectiveOrigin[0] *= bounding.width / 2;
                                perspectiveOrigin[1] *= bounding.height / 2;
                                perspectiveOrigin[2] = 0;
                            }
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.perspective(perspectiveMatrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                        /**
                         * Create Repetition matrix
                         */
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.identity(repetitionMatrix);
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(repetitionMatrix, repetitionMatrix, offset);
                        if (bDirectSceneChild) {
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(repetitionMatrix, repetitionMatrix, sceneCenter);
                        }
                        if (repetitionType === _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateZ(repetitionMatrix, repetitionMatrix, repetition.angle + displace);
                    }
                    _math_bounding__WEBPACK_IMPORTED_MODULE_5__.default.clear(tmpSingleRepetitionBounding);
                    // Apply matrices on vertex
                    for (var bufferIndex = 0; bufferIndex < bufferLength; bufferIndex += 2) {
                        var vertex = [buffer[bufferIndex], buffer[bufferIndex + 1], perspectiveValue];
                        {
                            // Apply squeeze, can be insert into transformMatrix?
                            squeezeX !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_3__.default.squeezeX(vertex, squeezeX);
                            squeezeY !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_3__.default.squeezeY(vertex, squeezeY);
                            // Apply transforms
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, transformMatrix);
                            // Apply perspective
                            if (perspectiveValue > 0) {
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_9__.add(vertex, vertex, perspectiveOrigin);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, perspectiveMatrix);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_9__.scale(vertex, vertex, perspectiveValue);
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_9__.sub(vertex, vertex, perspectiveOrigin);
                            }
                            // custom vertex manipulation
                            if (this.vertexCallback) {
                                var index = bufferIndex / 2;
                                var count = bufferLength / 2;
                                var vertexRepetition = {
                                    index: index + 1,
                                    count: count,
                                    offset: count > 1 ? index / (count - 1) : 1,
                                };
                                this.vertexCallback(vertex, vertexRepetition, propArguments);
                            }
                            // final, apply repetition matrix
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, repetitionMatrix);
                        }
                        buffers[currentIndex][bufferIndex] = vertex[0];
                        buffers[currentIndex][bufferIndex + 1] = vertex[1];
                        // Bounding.add(tmpSingleRepetitionBounding, vertex[0], vertex[1])
                        _math_bounding__WEBPACK_IMPORTED_MODULE_5__.default.add(tmpTotalShapeBounding, vertex[0], vertex[1]);
                    }
                }
                // Bounding.sum(tmpTotalShapeBounding, tmpSingleRepetitionBounding)
                // After buffer creation, add a frame into indexedBuffer if not static or update bounding
                // const singleRepetitionBounding = { cx: 0, cy: 0, x: -1, y: -1, width: 2, height: 2 }
                // Bounding.bind(singleRepetitionBounding, tmpSingleRepetitionBounding)
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(bufferLength, repetition);
                }
            }
        }
        _math_bounding__WEBPACK_IMPORTED_MODULE_5__.default.bind(this.bounding, tmpTotalShapeBounding);
        this.buffer = new Float32Array(totalBufferLength);
        for (var i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        this.bIndexed = true;
    };
    /**
     * Return current shape (whit repetions) bounding
     *
     * @return {*}  {IShapeBounding}
     */
    ShapeBase.prototype.getBounding = function () {
        return this.bounding;
    };
    /**
     * Get number of repetitions
     *
     * @returns {number}
     */
    ShapeBase.prototype.getRepetitionCount = function () {
        var _a;
        var repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0]) : repetitions;
    };
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     */
    ShapeBase.prototype.getBuffer = function () {
        return this.buffer;
    };
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     */
    ShapeBase.prototype.getIndexedBuffer = function () {
        return this.indexedBuffer;
    };
    /**
     * Return number of encapsulation
     *
     * @param {IBufferIndex} index
     * @returns {number}
     */
    ShapeBase.getIndexParentLevel = function (index) {
        if (typeof index.parent === 'undefined')
            return 0;
        var currentParent = index.parent;
        var currentParentLevel = 1;
        while (typeof currentParent.parent !== 'undefined') {
            currentParentLevel++;
            currentParent = currentParent.parent;
        }
        return currentParentLevel;
    };
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     */
    ShapeBase.prototype.stream = function (callback) {
        if (this.buffer && this.indexedBuffer) {
            for (var i = 0, j = 0, len = this.indexedBuffer.length; i < len; i++) {
                var currentIndexing = this.indexedBuffer[i];
                callback({
                    buffer: this.buffer,
                    frameLength: currentIndexing.frameLength,
                    frameBufferIndex: j,
                    currentIndexing: currentIndexing,
                    currentShapeIndex: i,
                    totalShapes: len,
                });
                j += currentIndexing.frameLength;
            }
        }
    };
    /**
     * Return empty propArguments
     *
     * @static
     * @param {ShapeBase} shape
     * @return {*}  {ISceneChildPropArguments}
     */
    ShapeBase.getEmptyPropArguments = function (shape, parentPropArguments) {
        // prettier-ignore
        var repetition = {
            type: _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring, angle: 0, index: 1, offset: 1, count: 1,
            row: { index: 1, offset: 1, count: 1 },
            col: { index: 1, offset: 1, count: 1 },
        };
        return {
            repetition: repetition,
            shape: shape,
            parent: parentPropArguments,
        };
    };
    /**
     * Empty buffer
     *
     * @internal
     * @ignore
     */
    ShapeBase.EMPTY_BUFFER = new Float32Array(0);
    /**
     * Empty BaseRepetition
     *
     * @internal
     * @ignore
     */
    ShapeBase.getEmptySimpleRepetition = function () { return ({
        index: 1,
        offset: 1,
        count: 1,
    }); };
    /**
     * Empty Repetition
     *
     * @internal
     * @ignore
     */
    ShapeBase.getEmptyRepetition = function () { return (__assign(__assign({ type: _types_scene_child__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring, angle: 0 }, ShapeBase.getEmptySimpleRepetition()), { row: ShapeBase.getEmptySimpleRepetition(), col: ShapeBase.getEmptySimpleRepetition() })); };
    return ShapeBase;
}(_SceneChild__WEBPACK_IMPORTED_MODULE_6__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeBase);
//# sourceMappingURL=ShapeBase.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeBuffer.js":
/*!*****************************************!*\
  !*** ./dist/core/shapes/ShapeBuffer.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/bounding */ "./dist/core/math/bounding.js");
/* harmony import */ var _ShapePrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * @category Core.Shapes
 */
var ShapeBuffer = /** @class */ (function (_super) {
    __extends(ShapeBuffer, _super);
    /**
     * Creates an instance of ShapeBuffer.
     *
     * @param {IShapeBufferSettings} [settings={}]
     */
    function ShapeBuffer(settings) {
        if (settings === void 0) { settings = {}; }
        var _a;
        var _this = this;
        settings.type = settings.type || 'ShapeBuffer';
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_2__.EShapePrimitiveAdaptMode.Scale;
        _this = _super.call(this, settings) || this;
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            _this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else
            _this.shape = Float32Array.from(settings.shape);
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    ShapeBuffer.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        _super.prototype.clearBuffer.call(this, bClearIndexed, bPropagateToParents);
        this.shapeBuffer = undefined;
        // this.shapeBuffer = ShapeBuffer.buffer2Dto3D(this.shapeBuffer)
    };
    /**
     * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
     *
     * @protected
     */
    ShapeBuffer.prototype.bindBuffer = function (propArguments) {
        var sideLength = this.getRepetitionSideLength(propArguments);
        var shapeBuffer = this.adaptMode !== _types_shape_base__WEBPACK_IMPORTED_MODULE_2__.EShapePrimitiveAdaptMode.None
            ? _ShapePrimitive__WEBPACK_IMPORTED_MODULE_1__.default.adaptBuffer(this.shape, this.adaptMode)
            : Float32Array.from(this.shape);
        var tmpBounding = [undefined, undefined, undefined, undefined];
        for (var i = 0, len = shapeBuffer.length; i < len; i += 2) {
            shapeBuffer[i] *= sideLength[0];
            shapeBuffer[i + 1] *= sideLength[1];
            _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1]);
        }
        _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        this.shapeBuffer = shapeBuffer;
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} propArguments
     * @returns {number}
     */
    ShapeBuffer.prototype.getBufferLength = function (propArguments) {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape.length * this.getRepetitionCount();
    };
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     */
    ShapeBuffer.prototype.generateBuffer = function (generateId, propArguments) {
        if (typeof this.shapeBuffer === 'undefined' || typeof this.props.sideLength === 'function') {
            this.bindBuffer(propArguments);
        }
        return this.shapeBuffer;
    };
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     */
    ShapeBuffer.prototype.setShape = function (shape) {
        this.shape = shape;
        this.clearBuffer(true);
    };
    /**
     * Subdivide buffer n times
     *
     * @param {number} [level=1]
     */
    ShapeBuffer.prototype.subdivide = function (level) {
        if (level === void 0) { level = 1; }
        var subdivided = this.shape;
        if (subdivided && subdivided.length > 0) {
            for (var i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided, this.bClosed);
            this.setShape(subdivided);
        }
    };
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     */
    ShapeBuffer.subdivide = function (shape, bClosed) {
        if (bClosed === void 0) { bClosed = true; }
        var shapeLength = shape.length;
        var subdivided = new Float32Array(shapeLength * 2 - (bClosed ? 0 : 2));
        for (var i = 0; i < shapeLength; i += 2) {
            if (i === 0) {
                subdivided[0] = shape[0];
                subdivided[1] = shape[1];
            }
            else {
                var px = shape[i - 2];
                var py = shape[i - 1];
                var x = shape[i];
                var y = shape[i + 1];
                var nx = (x + px) / 2;
                var ny = (y + py) / 2;
                subdivided[(i - 1) * 2] = nx;
                subdivided[(i - 1) * 2 + 1] = ny;
                subdivided[i * 2] = x;
                subdivided[i * 2 + 1] = y;
            }
        }
        if (bClosed) {
            subdivided[(shapeLength - 1) * 2] = (shape[0] + shape[shapeLength - 2]) / 2;
            subdivided[(shapeLength - 1) * 2 + 1] = (shape[1] + shape[shapeLength - 1]) / 2;
        }
        return subdivided;
    };
    return ShapeBuffer;
}(_ShapePrimitive__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeBuffer);
//# sourceMappingURL=ShapeBuffer.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeLoop.js":
/*!***************************************!*\
  !*** ./dist/core/shapes/ShapeLoop.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/bounding */ "./dist/core/math/bounding.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./dist/core/math/index.js");
/* harmony import */ var _ShapePrimitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
var ShapeLoop = /** @class */ (function (_super) {
    __extends(ShapeLoop, _super);
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     */
    function ShapeLoop(settings, bPreventGeneration) {
        if (settings === void 0) { settings = {}; }
        if (bPreventGeneration === void 0) { bPreventGeneration = false; }
        var _this = this;
        settings.type = settings.type || 'ShapeLoop';
        _this = _super.call(this, settings) || this;
        _this.loopDependencies = (settings.loopDependencies || []).concat('sideLength');
        _this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            _this.loop = {
                start: 0,
                end: _math__WEBPACK_IMPORTED_MODULE_2__.PI2,
                inc: _math__WEBPACK_IMPORTED_MODULE_2__.PI2 / 10,
                vertex: function () { return [0, 0]; },
            };
            _this.bStaticLoop = _this.isStaticLoop();
            _this.bStatic = _this.isStatic();
            _this.bStaticIndexed = _this.isStaticIndexed();
        }
        return _this;
    }
    /**
     * Check if currentOrSingleLoopBuffer is static
     *
     * @returns {boolean}
     */
    ShapeLoop.prototype.isStaticLoop = function () {
        if (this.loopDependencies.includes('propArguments'))
            return false;
        for (var i = 0, len = this.loopDependencies.length; i < len; i++)
            if (typeof this.props[this.loopDependencies[i]] === 'function')
                return false;
        return true;
    };
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    ShapeLoop.prototype.isStatic = function () {
        return this.bStaticLoop && _super.prototype.isStatic.call(this);
    };
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     */
    ShapeLoop.prototype.isStaticIndexed = function () {
        return this.bStaticLoop && _super.prototype.isStaticIndexed.call(this);
    };
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    ShapeLoop.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.currentOrSingleLoopBuffer = undefined;
        }
        _super.prototype.clearBuffer.call(this, bClearIndexed, bPropagateToParents);
    };
    /**
     * Set single or multiple props
     *
     * @param {(K)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    ShapeLoop.prototype.setProp = function (key, value) {
        var _a;
        var bClearIndexed = false;
        var keys = typeof key === 'string' ? (_a = {}, _a[key] = value, _a) : key;
        for (var i = this.loopDependencies.length - 1; i >= 0; i--) {
            if (this.loopDependencies[i] in keys) {
                // this.props.loop = undefined
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in keys) {
            keys.loop = __assign(__assign({}, this.props.loop), keys.loop);
            bClearIndexed = true;
        }
        _super.prototype.setProp.call(this, keys, value, bClearIndexed);
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [propArguments]
     * @returns {number}
     */
    ShapeLoop.prototype.getBufferLength = function (propArguments) {
        if (this.bStatic && typeof this.buffer !== 'undefined')
            return this.buffer.length;
        if (this.bStaticLoop && typeof this.currentOrSingleLoopBuffer !== 'undefined')
            return this.currentOrSingleLoopBuffer.length * this.getRepetitionCount();
        var count = this.getLoop(propArguments || _ShapeBase__WEBPACK_IMPORTED_MODULE_4__.default.getEmptyPropArguments(this)).count;
        return this.getRepetitionCount() * count * 2;
    };
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     */
    ShapeLoop.prototype.generateBuffer = function (generateId, propArguments) {
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(propArguments);
        if (typeof this.props.sideLength === 'function' || typeof this.currentOrSingleLoopBuffer === 'undefined')
            this.currentOrSingleLoopBuffer = this.generateLoopBuffer(propArguments);
        return this.currentOrSingleLoopBuffer;
    };
    /**
     * Generate loop buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     */
    ShapeLoop.prototype.generateLoopBuffer = function (propArguments) {
        var _a = this.getLoop(propArguments), start = _a.start, inc = _a.inc, end = _a.end, count = _a.count;
        var sideLength = this.getRepetitionSideLength(propArguments);
        var getVertex = (this.props.loop && this.props.loop.vertex
            ? this.props.loop.vertex
            : this.loop.vertex);
        var shapeLoop = {
            index: 0,
            offset: 0,
            angle: 0,
            count: count,
        };
        var vertexLength = shapeLoop.count;
        var bufferLength = vertexLength * 2;
        var currentOrSingleLoopBuffer = new Float32Array(bufferLength);
        var bNoAdapt = this.adaptMode === _types_shape_base__WEBPACK_IMPORTED_MODULE_0__.EShapePrimitiveAdaptMode.None;
        var tmpBounding = [undefined, undefined, undefined, undefined];
        for (var i = 0, j = 0; i < vertexLength; i++, j += 2) {
            var angle = start + inc * i;
            var offset = shapeLoop.count > 1 ? i / (shapeLoop.count - 1) : 1;
            // const angle = (end - start) * offset + start
            shapeLoop.angle = angle;
            shapeLoop.index = i + 1;
            shapeLoop.offset = offset;
            var vertex = Float32Array.from(getVertex(shapeLoop, propArguments));
            currentOrSingleLoopBuffer[j] = vertex[0];
            currentOrSingleLoopBuffer[j + 1] = vertex[1];
            if (bNoAdapt) {
                currentOrSingleLoopBuffer[j] *= sideLength[0];
                currentOrSingleLoopBuffer[j + 1] *= sideLength[1];
                _math_bounding__WEBPACK_IMPORTED_MODULE_1__.default.add(tmpBounding, currentOrSingleLoopBuffer[j], currentOrSingleLoopBuffer[j + 1]);
            }
        }
        if (bNoAdapt) {
            _math_bounding__WEBPACK_IMPORTED_MODULE_1__.default.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        }
        else {
            /**
             * Adapt and apply side length
             */
            var buffer = _ShapePrimitive__WEBPACK_IMPORTED_MODULE_3__.default.adaptBuffer(currentOrSingleLoopBuffer, this.adaptMode);
            _math_bounding__WEBPACK_IMPORTED_MODULE_1__.default.clear(tmpBounding);
            for (var i = 0; i < bufferLength; i += 2) {
                buffer[i] = buffer[i] * sideLength[0];
                buffer[i + 1] = buffer[i + 1] * sideLength[1];
                _math_bounding__WEBPACK_IMPORTED_MODULE_1__.default.add(tmpBounding, buffer[i], buffer[i + 1]);
            }
            _math_bounding__WEBPACK_IMPORTED_MODULE_1__.default.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
            return buffer;
        }
        return currentOrSingleLoopBuffer;
    };
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {ISceneChildPropArguments} propArguments
     * @returns {ShapeLoopInformation}
     */
    ShapeLoop.prototype.getLoop = function (propArguments) {
        var _a, _b, _c, _d, _e, _f;
        var start = (_b = (_a = this.props.loop) === null || _a === void 0 ? void 0 : _a.start) !== null && _b !== void 0 ? _b : this.loop.start;
        var end = (_d = (_c = this.props.loop) === null || _c === void 0 ? void 0 : _c.end) !== null && _d !== void 0 ? _d : this.loop.end;
        var inc = (_f = (_e = this.props.loop) === null || _e === void 0 ? void 0 : _e.inc) !== null && _f !== void 0 ? _f : this.loop.inc;
        start = (typeof start === 'function' ? start(propArguments) : start);
        end = (typeof end === 'function' ? end(propArguments) : end);
        inc = (typeof inc === 'function' ? inc(propArguments) : inc);
        var count = Math.ceil((end - start) / inc);
        return { start: start, end: end, inc: inc, count: count <= 0 ? 0 : count };
    };
    /**
     * Subdivide loop n times
     *
     * @param {number} [level=1]
     */
    ShapeLoop.prototype.subdivide = function (level) {
        if (level === void 0) { level = 1; }
        var currentLoop = this.props.loop || this.loop;
        // TODO: subdivide function?
        if (typeof currentLoop.inc === 'number') {
            currentLoop.inc = (currentLoop.inc || 1) / Math.pow(2, level);
            this.setProp('loop', currentLoop);
        }
    };
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     */
    ShapeLoop.prototype.setShape = function (loop) {
        this.setProp('loop', loop);
    };
    ShapeLoop.PId2 = Math.PI / 2;
    return ShapeLoop;
}(_ShapePrimitive__WEBPACK_IMPORTED_MODULE_3__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeLoop);
//# sourceMappingURL=ShapeLoop.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapePrimitive.js":
/*!********************************************!*\
  !*** ./dist/core/shapes/ShapePrimitive.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/gl-matrix-extensions */ "./dist/core/math/gl-matrix-extensions.js");
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/bounding */ "./dist/core/math/bounding.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * @category Core.Abstract
 */
var ShapePrimitive = /** @class */ (function (_super) {
    __extends(ShapePrimitive, _super);
    /**
     * Creates an instance of ShapePrimitive.
     *
     * @param {IShapePrimitiveSettings} [settings={}]
     */
    function ShapePrimitive(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b;
        var _this = _super.call(this, settings) || this;
        /**
         * Contain the bounding of the last generated buffer
         *
         * @type {IShapeBounding}
         */
        _this.currentGenerationPrimitiveBounding = _math_bounding__WEBPACK_IMPORTED_MODULE_3__.default.empty();
        _this.props.sideLength =
            typeof settings.sideLength === 'undefined'
                ? undefined
                : typeof settings.sideLength === 'function'
                    ? settings.sideLength
                    : _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec2(settings.sideLength);
        _this.style = settings.style || {};
        _this.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.None;
        _this.bClosed = (_b = settings.bClosed) !== null && _b !== void 0 ? _b : true;
        return _this;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.isStatic = function () {
        return typeof this.props.sideLength !== 'function' && _super.prototype.isStatic.call(this);
    };
    ShapePrimitive.prototype.getRepetitionSideLength = function (propArguments) {
        if (this.bStatic) {
            // not set default value into constructor because it can be overridden by group
            if (typeof this.props.sideLength === 'undefined') {
                this.props.sideLength = [50, 50];
            }
            else if (typeof this.props.sideLength === 'number') {
                this.props.sideLength = [this.props.sideLength, this.props.sideLength];
            }
            return this.props.sideLength;
        }
        return _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__.toVec2(this.getProp('sideLength', propArguments, [50, 50]));
    };
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.getShapeBounding = function () {
        return this.currentGenerationPrimitiveBounding;
    };
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    ShapePrimitive.prototype.addIndex = function (frameLength, repetition, recursion
    // singleRepetitionBounding: IShapeBounding
    ) {
        var index = {
            shape: this,
            frameLength: frameLength,
            // singleRepetitionBounding,
            repetition: {
                type: repetition.type,
                angle: repetition.angle,
                index: repetition.index,
                count: repetition.count,
                offset: repetition.offset,
                row: {
                    index: repetition.row.index,
                    count: repetition.row.count,
                    offset: repetition.row.offset,
                },
                col: {
                    index: repetition.col.index,
                    count: repetition.col.count,
                    offset: repetition.col.offset,
                },
            },
        };
        if (typeof recursion !== 'undefined') {
            index.recursion = {
                index: recursion.index,
                offset: recursion.offset,
                count: recursion.offset,
                level: recursion.level,
            };
        }
        this.indexedBuffer.push(index);
    };
    /**
     * Return bClosed
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.isClosed = function () {
        return this.bClosed;
    };
    /**
     * Set bClosed
     *
     * @param {boolean} bClosed
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.setClosed = function (bClosed) {
        this.bClosed = bClosed;
    };
    /**
     * Return adaptMode
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    ShapePrimitive.prototype.getAdaptMode = function () {
        return this.adaptMode;
    };
    /**
     * Set adaptMode
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    ShapePrimitive.prototype.adapt = function (adaptMode) {
        this.adaptMode = adaptMode;
        this.clearBuffer(true);
    };
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.getBounding = function (buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = _math_bounding__WEBPACK_IMPORTED_MODULE_3__.default.empty();
        var tmp_bounding = [undefined, undefined, undefined, undefined];
        for (var i = 0, len = buffer.length; i < len; i += 2) {
            _math_bounding__WEBPACK_IMPORTED_MODULE_3__.default.add(tmp_bounding, buffer[i], buffer[i + 1]);
        }
        _math_bounding__WEBPACK_IMPORTED_MODULE_3__.default.bind(bounding, tmp_bounding);
        return bounding;
    };
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
    ShapePrimitive.adaptBuffer = function (input, mode, rect) {
        if (mode === _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.None)
            return Float32Array.from(input);
        var output = new Float32Array(input.length);
        if (!rect) {
            rect = ShapePrimitive.getBounding(input);
        }
        var scale = rect.width >= 2 ||
            rect.height >= 2 ||
            (mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        var translateX = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Center ? rect.cx : 0;
        var translateY = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Center ? rect.cy : 0;
        for (var i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    };
    return ShapePrimitive;
}(_ShapeBase__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapePrimitive);
//# sourceMappingURL=ShapePrimitive.js.map

/***/ }),

/***/ "./dist/core/shapes/ShapeRecursive.js":
/*!********************************************!*\
  !*** ./dist/core/shapes/ShapeRecursive.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math_bounding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/bounding */ "./dist/core/math/bounding.js");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape */ "./dist/core/shapes/Shape.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * @category Core.Shapes
 */
var ShapeRecursive = /** @class */ (function (_super) {
    __extends(ShapeRecursive, _super);
    /**
     * Creates an instance of ShapeRecursive.
     *
     * @param {IShapeRecursiveSettings} [settings={}]
     */
    function ShapeRecursive(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = settings.type || 'ShapeRecursive';
        _this = _super.call(this, settings) || this;
        _this.props.recursions = settings.recursions || 1;
        _this.props.recursionScale = settings.recursionScale || 2;
        _this.props.recursionVertex = settings.recursionVertex || 0;
        // this.bInner = settings.bInner ?? false
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        _this.currentGenerationRecursiveBounding = _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.empty();
        return _this;
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    ShapeRecursive.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        if (bClearIndexed) {
            this.shapeRecursiveBuffer = undefined;
        }
        _super.prototype.clearBuffer.call(this, bClearIndexed, bPropagateToParents);
    };
    // /**
    //  * Set type of recursion
    //  *
    //  * @param {boolean} inner
    //  */
    // public setRecursionnInner(inner: boolean): void {
    // 	this.bInner = inner
    // 	this.clearBuffer(true)
    // }
    /**
     *
     * @returns {boolean}
     */
    ShapeRecursive.prototype.isStatic = function () {
        return (typeof this.props.recursions !== 'function' &&
            typeof this.props.recursionScale !== 'function' &&
            typeof this.props.recursionVertex !== 'function' &&
            _super.prototype.isStatic.call(this));
    };
    /**
     *
     * @returns {boolean}
     */
    ShapeRecursive.prototype.isStaticIndexed = function () {
        return typeof this.props.recursions !== 'function' && _super.prototype.isStaticIndexed.call(this);
    };
    /**
     * Return a buffer of children shape with recursion
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     */
    ShapeRecursive.prototype.generateBuffer = function (generateId, propArguments) {
        if (!this.isStatic() || typeof this.shapeRecursiveBuffer === 'undefined') {
            this.bindBuffer(generateId, propArguments);
        }
        return this.shapeRecursiveBuffer;
    };
    /**
     * Generate Recoursive shape buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     */
    ShapeRecursive.prototype.bindBuffer = function (generateId, propArguments) {
        if (typeof this.shape === 'undefined') {
            this.shapeRecursiveBuffer = _Shape__WEBPACK_IMPORTED_MODULE_1__.default.EMPTY_BUFFER;
            return;
        }
        var recursions = Math.floor(this.getProp('recursions', propArguments, 1));
        var recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
        var recursionScale = this.getProp('recursionScale', propArguments, 2);
        var currentRecursionRepetition = {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: recursions > 1 ? 0 : 1, count: 1 },
        };
        if (recursions <= 1) {
            var buffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition);
            this.currentGenerationRecursiveBounding = this.shape.getBounding();
            this.shapeRecursiveBuffer = buffer;
            return;
        }
        var shapeBuffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition);
        var storedRecursion = [currentRecursionRepetition];
        var paretRecursionIndex = 0, added = 1;
        var tmpBounding = [undefined, undefined, undefined, undefined];
        var singleShapeBufferLength = shapeBuffer.length;
        var realVertexCount = singleShapeBufferLength / 2;
        var singleShapeVertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
        var recursionOffsetMultiplier = recursionVertex === 0 ? 1 : realVertexCount / Math.min(recursionVertex, realVertexCount);
        var recusiveShapeBuffer = new Float32Array(ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength);
        for (var i = 0; i < singleShapeBufferLength; i += 2) {
            recusiveShapeBuffer[i] = shapeBuffer[i];
            recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1];
            _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1]);
        }
        for (var currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
            var level_offset = recursions > 1 ? currentRecursion / (recursions - 1) : 1;
            var currentRecursionVertexCount = ShapeRecursive.summmation(currentRecursion, singleShapeVertexCount);
            var recursionBufferStartIndex = currentRecursionVertexCount * singleShapeBufferLength;
            var parentRecursion = currentRecursion - 1;
            var parentRecursionBufferStartIndex = parentRecursion === 0
                ? 0
                : ShapeRecursive.summmation(parentRecursion, singleShapeVertexCount) * singleShapeBufferLength;
            for (var currentShapeRecursionRepetition = 0, totalRecursionRepetitions = Math.pow(singleShapeVertexCount, currentRecursion); currentShapeRecursionRepetition < totalRecursionRepetitions; currentShapeRecursionRepetition++, added++) {
                currentRecursionRepetition = {
                    index: currentShapeRecursionRepetition + 1,
                    offset: totalRecursionRepetitions > 1 ? currentShapeRecursionRepetition / (totalRecursionRepetitions - 1) : 1,
                    count: totalRecursionRepetitions,
                    level: { index: currentRecursion + 1, offset: level_offset, count: recursions },
                    parent: storedRecursion[paretRecursionIndex],
                };
                shapeBuffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition);
                storedRecursion.push(currentRecursionRepetition);
                var shapeVertexBufferIndex = recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength;
                // const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
                var centerVertexIndex = Math.floor(parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2 * recursionOffsetMultiplier);
                centerVertexIndex = centerVertexIndex % 2 === 0 ? centerVertexIndex : centerVertexIndex + 1;
                var centerX = recusiveShapeBuffer[centerVertexIndex];
                var centerY = recusiveShapeBuffer[centerVertexIndex + 1];
                for (var i = 0, len = singleShapeBufferLength; i < len; i += 2) {
                    // if (this.bInner) {
                    // 	const parentCurrentVertex =
                    // 		parentRecursionBufferStartIndex +
                    // 		Math.floor(currentShapeRecursionRepetition / singleShapeVertexCount) *
                    // 			singleShapeVertexCount *
                    // 			recursionOffsetMultiplier *
                    // 			2
                    // 	const parentX = recusiveShapeBuffer[parentCurrentVertex + i]
                    // 	const parentY = recusiveShapeBuffer[parentCurrentVertex + i + 1]
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
                    // const parentX = shapeBuffer[i] / recursionScale ** currentRecursion
                    // const parentY = shapeBuffer[i + 1] / recursionScale ** currentRecursion
                    // recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
                    // recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
                    // } else {
                    var parentXScaled = shapeBuffer[i] / Math.pow(recursionScale, currentRecursion);
                    var parentYScaled = shapeBuffer[i + 1] / Math.pow(recursionScale, currentRecursion);
                    recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled;
                    recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled;
                    // }
                    _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.add(tmpBounding, recusiveShapeBuffer[shapeVertexBufferIndex + i], recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]);
                }
                if (added % singleShapeVertexCount === 0) {
                    paretRecursionIndex += 1;
                }
            }
        }
        _math_bounding__WEBPACK_IMPORTED_MODULE_0__.default.bind(this.currentGenerationRecursiveBounding, tmpBounding);
        this.shapeRecursiveBuffer = recusiveShapeBuffer;
    };
    ShapeRecursive.prototype.generateShapeBuffer = function (propArguments, generateId, recursionRepetition) {
        propArguments.recursion = recursionRepetition;
        return _super.prototype.generateBuffer.call(this, generateId, propArguments);
    };
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    ShapeRecursive.prototype.addIndex = function (frameLength, repetition, recursion
    // singleRepetitionBounding: IShapeBounding
    ) {
        if (this.shape) {
            var propArguments = { repetition: repetition, shape: this };
            var recursions = Math.floor(this.getProp('recursions', propArguments, 1));
            var recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
            // const realFrameLength = ShapeRecursive.summmation(recursions, this.shape.getBufferLength() / 2)
            var bufferIndex = {
                shape: this,
                frameLength: frameLength,
                // singleRepetitionBounding,
                repetition: {
                    type: repetition.type,
                    angle: repetition.angle,
                    index: repetition.index,
                    count: repetition.count,
                    offset: repetition.offset,
                    row: {
                        index: repetition.row.index,
                        count: repetition.row.count,
                        offset: repetition.row.offset,
                    },
                    col: {
                        index: repetition.col.index,
                        count: repetition.col.count,
                        offset: repetition.col.offset,
                    },
                },
            };
            if (typeof recursion !== 'undefined') {
                bufferIndex.recursion = {
                    index: recursion.index,
                    offset: recursion.offset,
                    count: recursion.offset,
                    level: recursion.level,
                };
            }
            var childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            for (var childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                var currentIndexed = __assign({}, childIndexedBuffer[childIndexed]);
                var currentRecursionRepetition = {
                    index: 1,
                    offset: 1,
                    count: 1,
                    level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
                };
                var recursionBufferIndex = __assign(__assign({}, bufferIndex), { recursion: currentRecursionRepetition });
                currentIndexed.parent = currentIndexed.parent
                    ? _Shape__WEBPACK_IMPORTED_MODULE_1__.default.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                    : recursionBufferIndex;
                this.indexedBuffer.push(currentIndexed);
            }
            if (recursions > 1) {
                var realVertexCount = this.shape.getBufferLength(propArguments) / 2;
                var vertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
                var storedRecursion = this.indexedBuffer.map(function (indexed) { return [
                    indexed.parent.recursion,
                ]; });
                var paretRecursionIndex = 0, added = 1;
                for (var i = 1; i < recursions; i++) {
                    var level_offset = recursions > 1 ? i / (recursions - 1) : 1;
                    for (var j = 0, len = Math.pow(vertexCount, i); j < len; j++, added++) {
                        var recursionOffset = len > 1 ? j / (len - 1) : 1;
                        for (var childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                            var currentIndexed = __assign({}, childIndexedBuffer[childIndexed]);
                            var currentRecursionRepetition = {
                                index: j + 1,
                                offset: recursionOffset,
                                count: len,
                                level: { index: i + 1, offset: level_offset, count: recursions },
                                parent: storedRecursion[childIndexed][paretRecursionIndex],
                            };
                            var recursionBufferIndex = __assign(__assign({}, bufferIndex), { recursion: currentRecursionRepetition });
                            currentIndexed.parent = currentIndexed.parent
                                ? _Shape__WEBPACK_IMPORTED_MODULE_1__.default.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                                : recursionBufferIndex;
                            this.indexedBuffer.push(currentIndexed);
                            storedRecursion[childIndexed].push(currentRecursionRepetition);
                            if (added % vertexCount === 0) {
                                paretRecursionIndex += 1;
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * Retturn summation value
     *
     * @static
     * @param {number} recursion
     * @param {number} vertexCount
     * @returns {number}
     */
    ShapeRecursive.summmation = function (recursion, vertexCount) {
        if (recursion === 1)
            return 1;
        var result = 1;
        for (var i = 1; i < recursion; i++)
            result += Math.pow(vertexCount, i);
        return result;
    };
    /**
     * Empty recursion repetition
     *
     * @static
     * @return {*}  {IRecursionRepetition}
     */
    ShapeRecursive.getEmptyRecursion = function () {
        return {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: 1, count: 1 },
        };
    };
    return ShapeRecursive;
}(_Shape__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShapeRecursive);
//# sourceMappingURL=ShapeRecursive.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Circle.js":
/*!***********************************************!*\
  !*** ./dist/core/shapes/primitives/Circle.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * Creates an instance of Circle.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    function Circle(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Circle';
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_2__.EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings, true) || this;
        _this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: function (propArguments) {
                var sideLength = _this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.default.PId2;
            },
            vertex: function (shapeLoopRepetition) { return [Math.cos(shapeLoopRepetition.angle), Math.sin(shapeLoopRepetition.angle)]; },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    return Circle;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);
//# sourceMappingURL=Circle.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Line.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Line.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    /**
     * Creates an instance of Line.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    function Line(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__.EShapePrimitiveAdaptMode.None;
        settings.bClosed = false;
        _this = _super.call(this, settings) || this;
        return _this;
    }
    return Line;
}(_ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);
//# sourceMappingURL=Line.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Lissajous.js":
/*!**************************************************!*\
  !*** ./dist/core/shapes/primitives/Lissajous.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
var Lissajous = /** @class */ (function (_super) {
    __extends(Lissajous, _super);
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    function Lissajous(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Lissajous';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz']);
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_2__.EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings, true) || this;
        _this.props.wx = settings.wx || 1;
        _this.props.wy = settings.wy || 2;
        _this.props.wz = settings.wz || 0;
        _this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: function (propArguments) {
                var wx = _this.getProp('wx', propArguments);
                var wy = _this.getProp('wy', propArguments);
                var ratio = wx == wy ? _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.default.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                var sideLength = _this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio;
            },
            vertex: function (shapeLoopRepetition) {
                return _this.wx === _this.wy
                    ? [Math.cos(shapeLoopRepetition.angle + _this.wz), Math.sin(shapeLoopRepetition.angle)]
                    : [Math.cos(_this.wx * shapeLoopRepetition.angle + _this.wz), Math.sin(_this.wy * shapeLoopRepetition.angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    Lissajous.prototype.generateLoopBuffer = function (propArguments) {
        this.wx = this.getProp('wx', propArguments, 1);
        this.wy = this.getProp('wy', propArguments, 2);
        this.wz = this.getProp('wz', propArguments, 2);
        return _super.prototype.generateLoopBuffer.call(this, propArguments);
    };
    return Lissajous;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lissajous);
//# sourceMappingURL=Lissajous.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Polygon.js":
/*!************************************************!*\
  !*** ./dist/core/shapes/primitives/Polygon.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(settings) {
        if (settings === void 0) { settings = {}; }
        var _a;
        var _this = this;
        settings.type = settings.type || 'Polygon';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber']);
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings, true) || this;
        _this.props.sideNumber = settings.sideNumber;
        _this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_2__.PI2,
            inc: function (propArguments) {
                return _math__WEBPACK_IMPORTED_MODULE_2__.PI2 / _this.getProp('sideNumber', propArguments, 5);
            },
            vertex: function (shapeLoopRepetition) {
                return [Math.cos(shapeLoopRepetition.angle), Math.sin(shapeLoopRepetition.angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    return Polygon;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polygon);
//# sourceMappingURL=Polygon.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Rect.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Rect.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    function Rect(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Rect';
        settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1];
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__.EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings) || this;
        return _this;
    }
    return Rect;
}(_ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);
//# sourceMappingURL=Rect.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Rose.js":
/*!*********************************************!*\
  !*** ./dist/core/shapes/primitives/Rose.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
var Rose = /** @class */ (function (_super) {
    __extends(Rose, _super);
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    function Rose(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b, _c;
        var _this = this;
        settings.type = 'Rose';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd']);
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Scale;
        _this = _super.call(this, settings, true) || this;
        _this.props.n = (_b = settings.n) !== null && _b !== void 0 ? _b : 1;
        _this.props.d = (_c = settings.d) !== null && _c !== void 0 ? _c : 2;
        _this.loop = {
            start: 0,
            end: function (propArguments) {
                return Rose.getFinalAngleFromK(_this.getProp('n', propArguments), _this.getProp('d', propArguments));
            },
            inc: function (propArguments) {
                var n = _this.getProp('n', propArguments);
                var d = _this.getProp('d', propArguments);
                var sideLength = _this.getRepetitionSideLength(propArguments);
                var sides = Math.pow(sideLength[0] * sideLength[1], 0.45);
                var k = d < n ? n / d : 1.5;
                return _math__WEBPACK_IMPORTED_MODULE_2__.PI2 / (sides * k);
            },
            vertex: function (shapeLoopRepetition) {
                var f = Math.cos(_this.k * shapeLoopRepetition.angle);
                return [f * Math.cos(shapeLoopRepetition.angle), f * Math.sin(shapeLoopRepetition.angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    Rose.prototype.generateLoopBuffer = function (propArguments) {
        this.k = this.getProp('n', propArguments) / this.getProp('d', propArguments);
        return _super.prototype.generateLoopBuffer.call(this, propArguments);
    };
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    Rose.getFinalAngleFromK = function (n, d) {
        if (n == d)
            return _math__WEBPACK_IMPORTED_MODULE_2__.PI2;
        var k = n / d;
        var p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    };
    return Rose;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rose);
//# sourceMappingURL=Rose.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Spiral.js":
/*!***********************************************!*\
  !*** ./dist/core/shapes/primitives/Spiral.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
var Spiral = /** @class */ (function (_super) {
    __extends(Spiral, _super);
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    function Spiral(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b, _c, _d;
        var _this = this;
        settings.type = 'Spiral';
        settings.bClosed = false;
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.None;
        settings.loopDependencies = (settings.loopDependencies || []).concat(['twists', 'twistsStart', 'spiral']);
        _this = _super.call(this, settings, true) || this;
        _this.props.spiral = (_b = settings.spiral) !== null && _b !== void 0 ? _b : Spiral.types.ARCHIMEDE;
        _this.props.twists = (_c = settings.twists) !== null && _c !== void 0 ? _c : 2;
        _this.props.twistsStart = (_d = settings.twistsStart) !== null && _d !== void 0 ? _d : 0;
        _this.loop = {
            start: function (propArguments) { return _math__WEBPACK_IMPORTED_MODULE_2__.PI2 * _this.getProp('twistsStart', propArguments); },
            end: function (propArguments) {
                return _math__WEBPACK_IMPORTED_MODULE_2__.PI2 *
                    (_this.getProp('twistsStart', propArguments) + _this.getProp('twists', propArguments));
            },
            inc: function (propArguments) {
                var twists = _this.getProp('twists', propArguments);
                var rep = _math__WEBPACK_IMPORTED_MODULE_2__.PI2 * twists;
                var sideLength = _this.getRepetitionSideLength(propArguments);
                var radius = 4 + Math.sqrt(sideLength[0] * sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: function (shapeLoopRepetition) {
                var r = _this.r(shapeLoopRepetition.angle);
                return [r * Math.cos(shapeLoopRepetition.angle), r * Math.sin(shapeLoopRepetition.angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    Spiral.prototype.generateLoopBuffer = function (propArguments) {
        this.spiral = this.getProp('spiral', propArguments);
        this.r = Spiral.getRFromTSpiralType(this.spiral);
        return _super.prototype.generateLoopBuffer.call(this, propArguments);
    };
    // /**
    //  * Set single or multiple props
    //  *
    //  * @param {(keyof ISpiralProps | ISpiralProps)} key
    //  * @param {*} [value]
    //  * @memberof Spiral
    //  */
    // public setProp(key: keyof ISpiralProps | ISpiralProps, value?: any): void {
    // 	key = typeof key === 'string' ? { [key]: value } : key
    // 	if (('twists' in key || 'twistsStart' in key) && this.props.loop) {
    // 		this.props.loop.start = undefined
    // 		this.props.loop.end = undefined
    // 	}
    // 	super.setProp(key as keyof IShapeLoopProps, value)
    // }
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @returns {number}
     * @memberof Spiral
     */
    Spiral.getRFromTSpiralType = function (spiral) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return function (angle) { return angle / 10; };
            case Spiral.types.HYPERBOLIC:
                return function (angle) { return (1 / angle) * 3; };
            case Spiral.types.FERMAT:
                return function (angle) { return Math.pow(angle, 0.5) / 3; };
            case Spiral.types.LITUUS:
                return function (angle) { return Math.pow(angle, -0.5); };
            case Spiral.types.LOGARITHMIC:
                return function (angle) { return Math.pow(Math.E, (angle * 0.2)) / 10; };
        }
        return function (angle) { return angle; };
    };
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
    return Spiral;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spiral);
//# sourceMappingURL=Spiral.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/SuperShape.js":
/*!***************************************************!*\
  !*** ./dist/core/shapes/primitives/SuperShape.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math */ "./dist/core/math/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * ShperShape
 *
 * @category Core.Primitives
 * @class SuperShape
 * @extends {ShapeLoop}
 */
var SuperShape = /** @class */ (function (_super) {
    __extends(SuperShape, _super);
    /**
     * Creates an instance of SuperShape.
     *
     * @param {ISuperShapeSettings} [settings={}]
     * @memberof SuperShape
     */
    function SuperShape(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b, _c, _d, _e, _f, _g;
        var _this = this;
        settings.type = 'SuperShape';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['a', 'b', 'm', 'n1', 'n2', 'n3']);
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Scale;
        _this = _super.call(this, settings, true) || this;
        _this.props.a = (_b = settings.a) !== null && _b !== void 0 ? _b : 1;
        _this.props.b = (_c = settings.b) !== null && _c !== void 0 ? _c : 1;
        _this.props.m = (_d = settings.m) !== null && _d !== void 0 ? _d : 6;
        _this.props.n1 = (_e = settings.n1) !== null && _e !== void 0 ? _e : 1;
        _this.props.n2 = (_f = settings.n2) !== null && _f !== void 0 ? _f : 1;
        _this.props.n3 = (_g = settings.n3) !== null && _g !== void 0 ? _g : 1;
        _this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_2__.PI2,
            inc: function (propArguments) {
                var sideLength = _this.getRepetitionSideLength(propArguments);
                return Math.PI / Math.pow(sideLength[0] * sideLength[1], 0.5);
            },
            vertex: function (shapeLoopRepetition) {
                var angle = shapeLoopRepetition.angle;
                var m = (_this.m * angle) / 4;
                var a = Math.pow(Math.abs(Math.cos(m) / _this.a), _this.n2);
                var b = Math.pow(Math.abs(Math.sin(m) / _this.b), _this.n3);
                var raux = Math.pow((a + b), (1 / _this.n1));
                var r = raux === 0 ? 1 : 1 / raux;
                return [r * Math.cos(angle), r * Math.sin(angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    SuperShape.prototype.generateLoopBuffer = function (propArguments) {
        this.a = this.getProp('a', propArguments);
        this.b = this.getProp('b', propArguments);
        this.m = this.getProp('m', propArguments);
        this.n1 = this.getProp('n1', propArguments);
        this.n2 = this.getProp('n2', propArguments);
        this.n3 = this.getProp('n3', propArguments);
        return _super.prototype.generateLoopBuffer.call(this, propArguments);
    };
    return SuperShape;
}(_ShapeLoop__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuperShape);
//# sourceMappingURL=SuperShape.js.map

/***/ }),

/***/ "./dist/core/shapes/primitives/Triangle.js":
/*!*************************************************!*\
  !*** ./dist/core/shapes/primitives/Triangle.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    /**
     * Creates an instance of Triangleeee.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Triangle
     */
    function Triangle(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Triangle';
        settings.shape = [-1, -1, 1, 0, -1, 1];
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__.EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings) || this;
        return _this;
    }
    return Triangle;
}(_ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Triangle);
//# sourceMappingURL=Triangle.js.map

/***/ }),

/***/ "./dist/core/types/scene-child.js":
/*!****************************************!*\
  !*** ./dist/core/types/scene-child.js ***!
  \****************************************/
/*! namespace exports */
/*! export ERepetitionType [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERepetitionType": () => /* binding */ ERepetitionType
/* harmony export */ });
/**
 * Repetition type enumerator.
 *
 * @category Core.Enums
 * @internal
 */
var ERepetitionType;
(function (ERepetitionType) {
    /**
     * Defines the type of repetition of the shape,
     * in a circular way starting from the center of the scene
     * @order 1
     */
    ERepetitionType[ERepetitionType["Ring"] = 1] = "Ring";
    /**
     * Defines the type of repetition of the shape,
     * on a nxm grid starting from the center of the scene
     * @order 2
     */
    ERepetitionType[ERepetitionType["Matrix"] = 2] = "Matrix";
})(ERepetitionType || (ERepetitionType = {}));
//# sourceMappingURL=scene-child.js.map

/***/ }),

/***/ "./dist/core/types/shape-base.js":
/*!***************************************!*\
  !*** ./dist/core/types/shape-base.js ***!
  \***************************************/
/*! namespace exports */
/*! export EShapePrimitiveAdaptMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EShapePrimitiveAdaptMode": () => /* binding */ EShapePrimitiveAdaptMode
/* harmony export */ });
/**
 *
 *
 * @category Core.Enums
 */
var EShapePrimitiveAdaptMode;
(function (EShapePrimitiveAdaptMode) {
    /**
     * The buffer is not changed
     * @order 1
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["None"] = 0] = "None";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1]
     * @order 2
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Scale"] = 2] = "Scale";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
     * @order 3
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Center"] = 4] = "Center";
    /**
     * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
     * @order 4
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Fill"] = 8] = "Fill";
})(EShapePrimitiveAdaptMode || (EShapePrimitiveAdaptMode = {}));
//# sourceMappingURL=shape-base.js.map

/***/ }),

/***/ "./dist/index-light.js":
/*!*****************************!*\
  !*** ./dist/index-light.js ***!
  \*****************************/
/*! namespace exports */
/*! export Animation [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/services/animation/Simple.js .default */
/*! export Circle [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Circle.js .default */
/*! export DrawerCanvas [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/services/drawers/drawer-canvas/DrawerCanvas.js .default */
/*! export Easings [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/services/animation/Easings.js .default */
/*! export Group [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/Group.js .default */
/*! export Line [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Line.js .default */
/*! export Lissajous [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Lissajous.js .default */
/*! export PHI [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/math/index.js .PHI */
/*! export PI2 [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/math/index.js .PI2 */
/*! export Polygon [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Polygon.js .default */
/*! export Rect [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Rect.js .default */
/*! export Rose [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Rose.js .default */
/*! export Scene [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/Scene.js .default */
/*! export SceneChild [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/SceneChild.js .default */
/*! export Shape [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/Shape.js .default */
/*! export ShapeBuffer [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/ShapeBuffer.js .default */
/*! export ShapeLoop [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/ShapeLoop.js .default */
/*! export ShapePrimitive [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/ShapePrimitive.js .default */
/*! export ShapeRecursive [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/ShapeRecursive.js .default */
/*! export Spiral [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Spiral.js .default */
/*! export SuperShape [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/SuperShape.js .default */
/*! export Triangle [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/shapes/primitives/Triangle.js .default */
/*! export Vec2 [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/math/Vec2.js .default */
/*! export angle2FromRepetition [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .angle2FromRepetition */
/*! export angleFromRepetition [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .angleFromRepetition */
/*! export author [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/meta.js .author */
/*! export clamp [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .clamp */
/*! export distanceFromRepetition [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .distanceFromRepetition */
/*! export lerp [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .lerp */
/*! export license [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/meta.js .license */
/*! export log [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/core/math/index.js .log */
/*! export noise [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .noise */
/*! export now [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .now */
/*! export relativeClamp [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .relativeClamp */
/*! export toDegrees [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .toDegrees */
/*! export toRadians [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/Utilites.js .toRadians */
/*! export version [provided] [maybe used in urpflanze-light (runtime-defined)] [usage prevents renaming] -> ./dist/meta.js .version */
/*! other exports [not provided] [maybe used in urpflanze-light (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => /* reexport safe */ _meta__WEBPACK_IMPORTED_MODULE_0__.version,
/* harmony export */   "author": () => /* reexport safe */ _meta__WEBPACK_IMPORTED_MODULE_0__.author,
/* harmony export */   "license": () => /* reexport safe */ _meta__WEBPACK_IMPORTED_MODULE_0__.license,
/* harmony export */   "Scene": () => /* reexport safe */ _core_Scene__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "SceneChild": () => /* reexport safe */ _core_SceneChild__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "Group": () => /* reexport safe */ _core_Group__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "ShapePrimitive": () => /* reexport safe */ _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "ShapeLoop": () => /* reexport safe */ _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "ShapeBuffer": () => /* reexport safe */ _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "Shape": () => /* reexport safe */ _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "ShapeRecursive": () => /* reexport safe */ _core_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_9__.default,
/* harmony export */   "Line": () => /* reexport safe */ _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "Triangle": () => /* reexport safe */ _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "Rect": () => /* reexport safe */ _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "Polygon": () => /* reexport safe */ _core_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_13__.default,
/* harmony export */   "Circle": () => /* reexport safe */ _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_14__.default,
/* harmony export */   "Rose": () => /* reexport safe */ _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_15__.default,
/* harmony export */   "Spiral": () => /* reexport safe */ _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_16__.default,
/* harmony export */   "Lissajous": () => /* reexport safe */ _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_17__.default,
/* harmony export */   "SuperShape": () => /* reexport safe */ _core_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_18__.default,
/* harmony export */   "lerp": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.lerp,
/* harmony export */   "clamp": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.clamp,
/* harmony export */   "relativeClamp": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.relativeClamp,
/* harmony export */   "toDegrees": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.toDegrees,
/* harmony export */   "toRadians": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.toRadians,
/* harmony export */   "now": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.now,
/* harmony export */   "noise": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.noise,
/* harmony export */   "angleFromRepetition": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.angleFromRepetition,
/* harmony export */   "angle2FromRepetition": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.angle2FromRepetition,
/* harmony export */   "distanceFromRepetition": () => /* reexport safe */ _Utilites__WEBPACK_IMPORTED_MODULE_19__.distanceFromRepetition,
/* harmony export */   "Vec2": () => /* reexport safe */ _core_math_Vec2__WEBPACK_IMPORTED_MODULE_20__.default,
/* harmony export */   "PHI": () => /* reexport safe */ _core_math__WEBPACK_IMPORTED_MODULE_21__.PHI,
/* harmony export */   "PI2": () => /* reexport safe */ _core_math__WEBPACK_IMPORTED_MODULE_21__.PI2,
/* harmony export */   "log": () => /* reexport safe */ _core_math__WEBPACK_IMPORTED_MODULE_21__.log,
/* harmony export */   "DrawerCanvas": () => /* reexport safe */ _services_drawers_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_22__.default,
/* harmony export */   "Animation": () => /* reexport safe */ _services_animation_Simple__WEBPACK_IMPORTED_MODULE_23__.default,
/* harmony export */   "Easings": () => /* reexport safe */ _services_animation_Easings__WEBPACK_IMPORTED_MODULE_24__.default
/* harmony export */ });
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta */ "./dist/meta.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _core_SceneChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _core_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Group */ "./dist/core/Group.js");
/* harmony import */ var _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/shapes/ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/shapes/ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
/* harmony import */ var _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony import */ var _core_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shapes/ShapeRecursive */ "./dist/core/shapes/ShapeRecursive.js");
/* harmony import */ var _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/shapes/primitives/Line */ "./dist/core/shapes/primitives/Line.js");
/* harmony import */ var _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/shapes/primitives/Triangle */ "./dist/core/shapes/primitives/Triangle.js");
/* harmony import */ var _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/shapes/primitives/Rect */ "./dist/core/shapes/primitives/Rect.js");
/* harmony import */ var _core_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/shapes/primitives/Polygon */ "./dist/core/shapes/primitives/Polygon.js");
/* harmony import */ var _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/shapes/primitives/Circle */ "./dist/core/shapes/primitives/Circle.js");
/* harmony import */ var _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/shapes/primitives/Rose */ "./dist/core/shapes/primitives/Rose.js");
/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony import */ var _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/shapes/primitives/Lissajous */ "./dist/core/shapes/primitives/Lissajous.js");
/* harmony import */ var _core_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/shapes/primitives/SuperShape */ "./dist/core/shapes/primitives/SuperShape.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Utilites */ "./dist/Utilites.js");
/* harmony import */ var _core_math_Vec2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/math/Vec2 */ "./dist/core/math/Vec2.js");
/* harmony import */ var _core_math__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/math */ "./dist/core/math/index.js");
/* harmony import */ var _services_drawers_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/drawers/drawer-canvas/DrawerCanvas */ "./dist/services/drawers/drawer-canvas/DrawerCanvas.js");
/* harmony import */ var _services_animation_Simple__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/animation/Simple */ "./dist/services/animation/Simple.js");
/* harmony import */ var _services_animation_Easings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/animation/Easings */ "./dist/services/animation/Easings.js");
/**
 * Meta
 */

// Set glMatrixArrayType

gl_matrix__WEBPACK_IMPORTED_MODULE_1__.setMatrixArrayType(Array);
/**
 * Core
 */



// Shapes














// Utilities



/**
 * Services
 */



//# sourceMappingURL=index-light.js.map

/***/ }),

/***/ "./dist/meta.js":
/*!**********************!*\
  !*** ./dist/meta.js ***!
  \**********************/
/*! namespace exports */
/*! export author [provided] [no usage info] [missing usage info prevents renaming] */
/*! export license [provided] [no usage info] [missing usage info prevents renaming] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => /* binding */ version,
/* harmony export */   "author": () => /* binding */ author,
/* harmony export */   "license": () => /* binding */ license
/* harmony export */ });
var version = '0.3.3';
var author = 'Gennaro Bosone <gennaro.bs@gmail.com>';
var license = 'GPL-3.0-or-later';

//# sourceMappingURL=meta.js.map

/***/ }),

/***/ "./dist/services/animation/Animation.js":
/*!**********************************************!*\
  !*** ./dist/services/animation/Animation.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simple */ "./dist/services/animation/Simple.js");
/* harmony import */ var _scene_utilities_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene-utilities/SceneUtilitiesExtended */ "./dist/services/scene-utilities/SceneUtilitiesExtended.js");
/* harmony import */ var _index_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index-light */ "./dist/index-light.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * @ignore
 * @internal
 * @category Services.Animation
 */
var Animation = {
    composeAnimation: function (scene, prop_name, animation) {
        switch (animation.type) {
            case 'simple': {
                var simpleAnimation = __assign({}, animation.value);
                simpleAnimation.from = _scene_utilities_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_1__.default.getTransformedValue(scene, prop_name, simpleAnimation.from);
                simpleAnimation.to = _scene_utilities_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_1__.default.getTransformedValue(scene, prop_name, simpleAnimation.to);
                return _Simple__WEBPACK_IMPORTED_MODULE_0__.default.compose(simpleAnimation);
            }
            case 'raw': {
                var rawValue = animation.value;
                return new Function('Urpflanze', 'scene', "\"use strict\"; return " + rawValue.raw)(_index_light__WEBPACK_IMPORTED_MODULE_2__, scene);
            }
            // case 'random': {
            //     const randomValue = SetProp.getRandomFunctionForProp(prop_name)
            //     return ({ shape }) => randomValue(shape.rand())
            // }
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);
//# sourceMappingURL=Animation.js.map

/***/ }),

/***/ "./dist/services/animation/Easings.js":
/*!********************************************!*\
  !*** ./dist/services/animation/Easings.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * Easing functions
 *
 * @category Services.Animation
 */
var Easings = {
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    linear: function (time, start, end, duration) { return (end * time) / duration + start; },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duratte duration
     * @returns {number}
     */
    quadraticIn: function (time, start, end, duratte) {
        time /= duratte;
        return end * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quadraticOut: function (time, start, end, duration) {
        time /= duration;
        return -end * time * (time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quadraticInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (end / 2) * time * time + start;
        time--;
        return (-end / 2) * (time * (time - 2) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicIn: function (time, start, end, duration) {
        time /= duration;
        return end * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicOut: function (time, start, end, duration) {
        time /= duration;
        time--;
        return end * (time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (end / 2) * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticIn: function (time, start, end, duration) {
        time /= duration;
        return end * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticOut: function (time, start, end, duration) {
        time /= duration;
        time--;
        return -end * (time * time * time * time - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time + start;
        time -= 2;
        return (-end / 2) * (time * time * time * time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticIn: function (time, start, end, duration) {
        time /= duration;
        return end * time * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticOut: function (time, start, end, duration) {
        time /= duration;
        time--;
        return end * (time * time * time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalIn: function (time, start, end, duration) {
        return -end * Math.cos((time / duration) * (Math.PI / 2)) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalOut: function (time, start, end, duration) {
        return end * Math.sin((time / duration) * (Math.PI / 2)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalInOut: function (time, start, end, duration) {
        return (-end / 2) * (Math.cos((Math.PI * time) / duration) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialIn: function (time, start, end, duration) {
        return end * Math.pow(2, 10 * (time / duration - 1)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialOut: function (time, start, end, duration) {
        return end * (-Math.pow(2, (-10 * time) / duration) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
        time--;
        return (end / 2) * (-Math.pow(2, -10 * time) + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularIn: function (time, start, end, duration) {
        time /= duration;
        return -end * (Math.sqrt(1 - time * time) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularOut: function (time, start, end, duration) {
        time /= duration;
        time--;
        return end * Math.sqrt(1 - time * time) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularInOut: function (time, start, end, duration) {
        time /= duration / 2;
        if (time < 1)
            return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start;
        time -= 2;
        return (end / 2) * (Math.sqrt(1 - time * time) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticIn: function (time, start, end, duration, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= duration) == 1) {
            return start + end;
        }
        if (!p) {
            p = duration * 0.3;
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticOut: function (time, start, end, duration, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= duration) == 1) {
            return start + end;
        }
        if (!p) {
            p = duration * 0.3;
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return a * Math.pow(2, -10 * time) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticInOut: function (time, start, end, duration, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= duration / 2) == 2) {
            return start + end;
        }
        if (!p) {
            p = duration * (0.3 * 1.5);
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        if (time < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) + start;
        }
        return (a * Math.pow(2, -10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p) * 0.5 + end + start);
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backIn: function (time, start, end, duration, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * (time /= duration) * time * ((s + 1) * time - s) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backOut: function (time, start, end, duration, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backInOut: function (time, start, end, duration, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((time /= duration / 2) < 1) {
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
    bounceIn: function (time, start, end, duration) {
        return end - Easings.bounceOut(duration - time, 0, end, duration) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceOut: function (time, start, end, duration) {
        if ((time /= duration) < 1 / 2.75) {
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
     * @param {number} duration
     * @returns
     */
    bounceInOut: function (time, start, end, duration) {
        if (time < duration / 2) {
            return Easings.bounceIn(time * 2, 0, end, duration) * 0.5 + start;
        }
        return Easings.bounceOut(time * 2 - duration, 0, end, duration) * 0.5 + end * 0.5 + start;
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Easings);
//# sourceMappingURL=Easings.js.map

/***/ }),

/***/ "./dist/services/animation/Simple.js":
/*!*******************************************!*\
  !*** ./dist/services/animation/Simple.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color */ "./dist/Color.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _Easings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Easings */ "./dist/services/animation/Easings.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * @category Services.Animation
 */
var Simple = {
    loop: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'sinusoidal', modeFunction: 'cos' }, props), { type: 'loop', delay: undefined }));
    },
    uncontrolledLoop: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'easing', modeFunction: 'linear' }, props), { type: 'uncontrolled-loop' }));
    },
    static: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'easing', modeFunction: 'linear' }, props), { type: 'static' }));
    },
    compose: function (simpleAnimation) {
        if (typeof simpleAnimation.from !== 'string' && typeof simpleAnimation.to !== 'string') {
            var bArray = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to);
            //@ts-ignore
            var from_1 = bArray ? (0,_Utilites__WEBPACK_IMPORTED_MODULE_1__.toArray)(simpleAnimation.from) : simpleAnimation.from;
            //@ts-ignore
            var to_1 = bArray ? (0,_Utilites__WEBPACK_IMPORTED_MODULE_1__.toArray)(simpleAnimation.to) : simpleAnimation.to;
            var vCallback_1 = bArray
                ? function (current_index, v) {
                    var a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to_1 : from_1);
                    var b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from_1 : to_1);
                    return simpleAnimation.typeValue === 'int'
                        ? [Math.round(a[0] + v * (b[0] - a[0])), Math.round(a[1] + v * (b[1] - a[1]))]
                        : [a[0] + v * (b[0] - a[0]), a[1] + v * (b[1] - a[1])];
                }
                : function (current_index, v) {
                    var a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to_1 : from_1);
                    var b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from_1 : to_1);
                    return simpleAnimation.typeValue === 'int' ? Math.round(a + v * (b - a)) : a + v * (b - a);
                };
            return createSimpleAnimationCallback(simpleAnimation, function (props, v) {
                return vCallback_1(props.repetition.index, v);
            });
        }
        else {
            var from_2 = (0,_Color__WEBPACK_IMPORTED_MODULE_0__.parseColorAndConvert)(simpleAnimation.from);
            var to_2 = (0,_Color__WEBPACK_IMPORTED_MODULE_0__.parseColorAndConvert)(simpleAnimation.to);
            var vCallback_2 = simpleAnimation.colorTransitionMode == 'hue' ? interpolateColorHSL : interpolateColorRGB;
            if (typeof from_2 !== 'undefined' && typeof to_2 !== 'undefined') {
                return createSimpleAnimationCallback(simpleAnimation, function (props, v) {
                    var a = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? to_2 : from_2;
                    var b = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? from_2 : to_2;
                    return vCallback_2(a, b, v);
                });
            }
            return function () { return 0; };
        }
    },
};
function createSimpleAnimationCallback(animation, value) {
    var _a = animation, duration = _a.duration, type = _a.type, mode = _a.mode, modeFunction = _a.modeFunction, delay = _a.delay;
    if (type === 'static') {
        if (delay && delay > 0)
            return function SimpleAnimation(props) {
                var _a, _b, _c;
                return value(props, (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) <= delay
                    ? 0
                    : (((_b = props.shape.scene) === null || _b === void 0 ? void 0 : _b.currentTime) || 0) - delay >= duration
                        ? 1
                        : _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction]((((_c = props.shape.scene) === null || _c === void 0 ? void 0 : _c.currentTime) || 0) - delay, 0, 1, duration));
            };
        else
            return function SimpleAnimation(props) {
                var _a, _b;
                return value(props, (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) <= duration
                    ? _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction](((_b = props.shape.scene) === null || _b === void 0 ? void 0 : _b.currentTime) || 0, 0, 1 - 0, duration)
                    : 1);
            };
    }
    else {
        if (type === 'loop') {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    var _a;
                    var frequency = ((((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0 || 0) * 2 * Math.PI) / duration;
                    return value(props, 0.5 + Math[modeFunction](frequency) * 0.5);
                };
            } /* easing */
            else {
                return function SimpleAnimation(props) {
                    var _a;
                    var d2 = duration / 2;
                    var t = (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) % duration;
                    return value(props, t <= d2
                        ? _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction](t, 0, 1, d2)
                        : _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction](d2 - (t - d2), 0, 1, d2));
                };
            }
        } // uncontrolled-loop
        else {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    var _a;
                    var time = (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) % (duration + delay);
                    time = time <= delay ? 0 : time - delay;
                    var frequency = ((time || 0) * 2 * Math.PI) / duration;
                    return value(props, 0.5 + Math[modeFunction](frequency) * 0.5);
                };
            }
            else {
                if (delay && delay > 0)
                    return function SimpleAnimation(props) {
                        var _a;
                        var time = (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) % (duration + delay);
                        return value(props, time <= delay
                            ? 0
                            : time - delay >= duration
                                ? 1
                                : _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction](time - delay, 0, 1, duration));
                    };
                else
                    return function SimpleAnimation(props) {
                        var _a;
                        var time = (((_a = props.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0) % duration;
                        return value(props, time <= duration ? _Easings__WEBPACK_IMPORTED_MODULE_2__.default[modeFunction](time, 0, 1 - 0, duration) : 1);
                    };
            }
        }
    }
}
function interpolateColorRGB(start, end, v) {
    var r = start.r + v * (end.r - start.r);
    var g = start.g + v * (end.g - start.g);
    var b = start.b + v * (end.b - start.b);
    var alpha = start.alpha + v * (end.alpha - start.alpha);
    return "rgba(" + Math.floor(r) + "," + Math.floor(g) + "," + Math.floor(b) + "," + alpha + ")";
}
function interpolateColorHSL(start, end, v) {
    var h = start.h + v * (end.h - start.h);
    var s = start.s + v * (end.s - start.s);
    var l = start.l + v * (end.l - start.l);
    var alpha = start.alpha + v * (end.alpha - start.alpha);
    return "hsla(" + h + "," + s + "%," + l + "%," + alpha + ")";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simple);
//# sourceMappingURL=Simple.js.map

/***/ }),

/***/ "./dist/services/drawers/Drawer.js":
/*!*****************************************!*\
  !*** ./dist/services/drawers/Drawer.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _timeline_Timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline/Timeline */ "./dist/services/timeline/Timeline.js");
/* harmony import */ var _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Color */ "./dist/Color.js");
/* harmony import */ var _core_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/math */ "./dist/core/math/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






/**
 * Abstract Drawer
 *
 * @category Services.Drawer
 * @abstract
 * @class Drawer
 * @extends {Emitter<IDrawerEvents>}
 * @template IADrawerOptions
 * @template IDrawerEvents
 */
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer(scene, ratio, duration, framerate) {
        if (scene === void 0) { scene = undefined; }
        if (ratio === void 0) { ratio = undefined; }
        var _this = _super.call(this) || this;
        _this.timeline = new _timeline_Timeline__WEBPACK_IMPORTED_MODULE_1__.default(duration, framerate);
        _this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        if (scene) {
            var size = Math.max(scene.width, scene.height);
            var width = _this.ratio >= 1 ? size : size * _this.ratio;
            var height = _this.ratio >= 1 ? size / _this.ratio : size;
            scene.resize(width, height);
            _this.setScene(scene);
        }
        _this.draw_id = null;
        _this.redraw_id = null;
        _this.animation_id = null;
        _this.draw = _this.draw.bind(_this);
        _this.animate = _this.animate.bind(_this);
        _this.startAnimation = _this.startAnimation.bind(_this);
        return _this;
    }
    /**
     * Set scene
     *
     * @param {Scene} scene
     */
    Drawer.prototype.setScene = function (scene) {
        this.scene = scene;
        // if (!this.resolution && this.scene.width) this.resolution = this.scene.width
    };
    /**
     * Return scene
     *
     * @return {*}  {Scene}
     */
    Drawer.prototype.getScene = function () {
        return this.scene;
    };
    /**
     * Return timeline
     *
     * @return {*}  {Timeline}
     */
    Drawer.prototype.getTimeline = function () {
        return this.timeline;
    };
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     */
    Drawer.prototype.resize = function (width, height, ratio) {
        var _this = this;
        ratio = ratio || this.ratio || width / height;
        var size = Math.max(width, height);
        width = ratio >= 1 ? size : size * ratio;
        height = ratio >= 1 ? size / ratio : size;
        this.ratio = ratio;
        if (this.scene) {
            this.scene.resize(width, height);
            _core_Scene__WEBPACK_IMPORTED_MODULE_0__.default.walk(function (sceneChild) {
                if (sceneChild.data) {
                    if (sceneChild.data.props) {
                        var props_1 = sceneChild.data.props;
                        Object.keys(props_1).forEach(function (name) {
                            _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_2__.default.setProp(sceneChild, name, props_1[name], _this.scene);
                        });
                    }
                    if (sceneChild.data.style) {
                        var style_1 = sceneChild.data.style;
                        Object.keys(style_1).forEach(function (name) {
                            _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_2__.default.setDrawerProp(sceneChild, name, style_1[name], _this.scene);
                        });
                    }
                }
            }, this.scene);
        }
    };
    /**
     * Resize by ratio
     *
     */
    Drawer.prototype.setRatio = function (ratio) {
        if (this.scene) {
            this.resize(this.scene.width, this.scene.height, ratio);
        }
    };
    /**
     * Return drawer ratio
     */
    Drawer.prototype.getRatio = function () {
        return this.ratio;
    };
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | IADrawerOptions)} name
     */
    Drawer.prototype.setOption = function (name, value) {
        if (typeof name == 'object') {
            var keys = Object.keys(name);
            for (var i = 0, len = keys.length; i < len; i++) {
                this.drawerOptions[keys[i]] = name[keys[i]];
            }
        }
        else {
            this.drawerOptions[name] = value;
        }
    };
    /**
     * Return option valie or default
     *
     * @template K
     * @param {K} name
     * @param {IADrawerOptions[K]} defaultValue
     */
    Drawer.prototype.getOption = function (name, defaultValue) {
        var _a;
        return (_a = this.drawerOptions[name]) !== null && _a !== void 0 ? _a : defaultValue;
    };
    /**
     * Return all options
     */
    Drawer.prototype.getOptions = function () {
        return this.drawerOptions;
    };
    /**
     * Internal tick animation
     */
    Drawer.prototype.animate = function (timestamp) {
        if (this.timeline.bSequenceStarted()) {
            this.animation_id = requestAnimationFrame(this.animate);
            if (this.timeline.tick(timestamp))
                this.draw();
        }
    };
    /**
     * Start animation drawing
     */
    Drawer.prototype.startAnimation = function () {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    };
    /**
     * Stop animation drawing
     */
    Drawer.prototype.stopAnimation = function () {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Pause animation drawing
     */
    Drawer.prototype.pauseAnimation = function () {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Play animation drawing
     */
    Drawer.prototype.playAnimation = function () {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    };
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    Drawer.prototype.redraw = function () {
        if (!this.timeline.bSequenceStarted()) {
            this.draw_id && cancelAnimationFrame(this.draw_id);
            if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0)
                this.timeline.stop();
            this.draw_id = requestAnimationFrame(this.draw);
        }
        else if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) {
            this.stopAnimation();
            this.redraw_id && cancelAnimationFrame(this.redraw_id);
            this.redraw_id = requestAnimationFrame(this.startAnimation);
        }
    };
    /**
     * Return a style value
     *
     * @static
     * @template T
     * @param {ShapePrimitive<T>} shape
     * @param {keyof T} key
     * @param {IDrawerPropArguments} propArguments
     * @param {*} [defaultValue]
     * @returns {*}
     */
    Drawer.getStreamDrawerProp = function (shape, key, propArguments, defaultValue) {
        var attribute = shape.style[key];
        if (typeof attribute === 'function') {
            attribute = attribute(propArguments);
        }
        return attribute !== null && attribute !== void 0 ? attribute : defaultValue;
    };
    /**
     * Each ghosts index and create drawerOptions to pass at the draw method
     *
     * @static
     * @template T
     * @param {T} drawerOptions
     * @param {Timeline} timeline
     * @param {((ghostDrawerOptions: T & { ghostIndex?: number }) => any)} ghostCallback
     */
    Drawer.eachGhosts = function (drawerOptions, timeline, ghostCallback) {
        if (drawerOptions.ghosts) {
            var ghostDrawerOptions = __assign({}, drawerOptions);
            var drawAtTime = timeline.getTime();
            var sequenceDuration = timeline.getDuration();
            var ghostRepetition = {
                offset: 0,
                index: 0,
                count: drawerOptions.ghosts,
            };
            for (var i = 1; i <= drawerOptions.ghosts; i++) {
                ghostRepetition.index = i;
                ghostRepetition.offset = ghostRepetition.index / ghostRepetition.count;
                var ghostTime = drawAtTime -
                    (drawerOptions.ghostSkipFunction
                        ? drawerOptions.ghostSkipFunction(ghostRepetition, drawAtTime)
                        : i * drawerOptions.ghostSkipTime);
                ghostDrawerOptions.ghostIndex = i;
                ghostDrawerOptions.time = (0,_core_math__WEBPACK_IMPORTED_MODULE_5__.pmod)(ghostTime, sequenceDuration);
                ghostCallback(ghostDrawerOptions);
            }
        }
    };
    /**
     * Create color based on ghostMultiplier
     *
     * @static
     * @param {any} color
     * @param {number} ghostMultiplier
     * @return {*}  {(string | undefined)}
     */
    Drawer.ghostifyColor = function (color, ghostMultiplier) {
        if (typeof color === 'string' || typeof color === 'number') {
            var parsed = (0,_Color__WEBPACK_IMPORTED_MODULE_4__.parseColor)(color);
            if (parsed) {
                var ghostAlpha = parsed.alpha * ghostMultiplier;
                return parsed.type === 'rgb'
                    ? "rgba(" + parsed.a + "," + parsed.b + "," + parsed.c + "," + ghostAlpha + ")"
                    : "hsla(" + parsed.a + "," + parsed.b + "%," + parsed.c + "%," + ghostAlpha + ")";
            }
        }
        return color;
    };
    return Drawer;
}(_events_Emitter__WEBPACK_IMPORTED_MODULE_3__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);
//# sourceMappingURL=Drawer.js.map

/***/ }),

/***/ "./dist/services/drawers/drawer-canvas/DrawerCanvas.js":
/*!*************************************************************!*\
  !*** ./dist/services/drawers/drawer-canvas/DrawerCanvas.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Drawer */ "./dist/services/drawers/Drawer.js");
/* harmony import */ var _FrameBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameBuffer */ "./dist/services/drawers/drawer-canvas/FrameBuffer.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _core_math_Vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/math/Vec2 */ "./dist/core/math/Vec2.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/**
 *
 * @category Services.Drawer
 * @extends {Emitter<DrawerCanvasEvents>}
 */
var DrawerCanvas = /** @class */ (function (_super) {
    __extends(DrawerCanvas, _super);
    function DrawerCanvas(scene, canvasOrContainer, drawerOptions, ratio, duration, framerate, bBuffering) {
        if (ratio === void 0) { ratio = undefined; }
        if (bBuffering === void 0) { bBuffering = false; }
        var _a, _b, _c, _d, _e;
        var _this = _super.call(this, scene, ratio, duration, framerate) || this;
        _this.bBuffering = false;
        _this.drawerOptions = {};
        _this.drawerOptions.clear = (_a = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.clear) !== null && _a !== void 0 ? _a : true;
        _this.drawerOptions.time = (_b = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.time) !== null && _b !== void 0 ? _b : 0;
        _this.drawerOptions.simmetricLines = (_c = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.simmetricLines) !== null && _c !== void 0 ? _c : 0;
        _this.drawerOptions.noBackground = (_d = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.noBackground) !== null && _d !== void 0 ? _d : false;
        _this.drawerOptions.ghosts = (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghosts) || 0;
        _this.drawerOptions.ghostAlpha = (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostAlpha) === false ? false : true;
        _this.drawerOptions.ghostSkipTime = (_e = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostSkipTime) !== null && _e !== void 0 ? _e : 30;
        _this.drawerOptions.ghostSkipFunction = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostSkipFunction;
        _this.drawerOptions.backgroundImage = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.backgroundImage;
        _this.drawerOptions.backgroundImageFit = (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.backgroundImageFit) || 'cover';
        _this.bBuffering = bBuffering;
        _this.buffer = new _FrameBuffer__WEBPACK_IMPORTED_MODULE_1__.default();
        if ((typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) ||
            (typeof OffscreenCanvas !== 'undefined' && canvasOrContainer instanceof OffscreenCanvas)) {
            var canvas = canvasOrContainer;
            _this.setCanvas(canvas);
        }
        else if (canvasOrContainer) {
            var canvas = document.createElement('canvas');
            var container = canvasOrContainer;
            container.appendChild(canvas);
            _this.setCanvas(canvas);
        }
        return _this;
    }
    DrawerCanvas.prototype.setBuffering = function (bBuffering) {
        this.bBuffering = bBuffering;
        this.flushBuffer();
    };
    DrawerCanvas.prototype.getBBuffering = function () {
        return this.bBuffering;
    };
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setScene = function (scene) {
        _super.prototype.setScene.call(this, scene);
        if (this.canvas) {
            this.setCanvas(this.canvas); // and flush
        }
    };
    /**
     * Set the canvas or append to container
     *
     * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setCanvas = function (canvasOrContainer) {
        var canvas;
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
            desynchronized: this.bBuffering !== true,
        });
        if (this.scene) {
            this.resize(this.scene.width, this.scene.height); // and flush
        }
    };
    /**
     * Return canvas element
     *
     * @returns {(HTMLCanvasElement | OffscreenCanvas)}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getCanvas = function () {
        return this.canvas;
    };
    /**
     * Return canvas context
     *
     * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getContext = function () {
        return this.context;
    };
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.resize = function (width, height, ratio) {
        _super.prototype.resize.call(this, width, height, ratio);
        if (this.canvas && this.scene) {
            this.canvas.width = this.scene.width;
            this.canvas.height = this.scene.height;
            if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
                this.canvas.style.width = this.scene.width + 'px';
                this.canvas.style.height = this.scene.height + 'px';
            }
        }
        this.flushBuffer();
        this.dispatch('drawer-canvas:resize');
        this.redraw();
    };
    DrawerCanvas.prototype.flushBuffer = function () {
        if (this.bBuffering) {
            this.buffer.flush();
            this.dispatch('drawer-canvas:buffer_flush');
        }
    };
    DrawerCanvas.prototype.getStoredFrames = function () {
        if (this.bBuffering) {
            return this.buffer.getStoredFrames();
        }
        return [];
    };
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | IDrawerOptions)} name
     * @param {Required<IDrawerOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setOption = function (name, value) {
        _super.prototype.setOption.call(this, name, value);
        this.flushBuffer();
    };
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
    // 			const drawerOptions = { ...this.drawerOptions }
    // 			const sequenceEndTime = this.timeline.getSequenceEndTime()
    // 			for (let i = 0; i < sequence.frames; i++) {
    // 				// requestAnimationFrame(() => {
    // 				const time = this.timeline.getFrameTime(i)
    // 				drawerOptions.clear = this.drawerOptions.clear || i === 0
    // 				drawerOptions.time = time
    // 				DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)
    // 				if (drawerOptions.ghosts) {
    // 					for (let gi = 1; gi <= drawerOptions.ghosts; gi++) {
    // 						const ghostTime =
    // 							time -
    // 							(drawerOptions.ghostSkipFunction
    // 								? drawerOptions.ghostSkipFunction(gi)
    // 								: gi * (drawerOptions.ghostSkipTime ?? 30))
    // 						drawerOptions.clear = false
    // 						drawerOptions.ghostIndex = gi
    // 						drawerOptions.time =
    // 							ghostTime < 0
    // 								? ghostTime + sequenceEndTime
    // 								: ghostTime > sequenceEndTime
    // 								? ghostTime % sequenceEndTime
    // 								: ghostTime
    // 						DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)
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
    DrawerCanvas.prototype.draw = function () {
        var _this = this;
        var _a;
        if (typeof this.scene === 'undefined')
            return -1;
        var draw_time = 0;
        var timeline = this.timeline;
        var drawAtTime = timeline.getTime();
        var drawerOptions = __assign(__assign({}, this.drawerOptions), { ghostIndex: undefined, clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 1, time: drawAtTime });
        var currentFrame = timeline.getFrameAtTime(drawAtTime);
        this.dispatch('drawer-canvas:before_draw', {
            currentFrame: currentFrame,
            currentTime: drawAtTime,
        });
        if (this.bBuffering && this.buffer.exist(currentFrame)) {
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.putImageData(this.buffer.get(currentFrame), 0, 0);
        }
        else {
            if (drawerOptions.ghosts) {
                _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.eachGhosts(drawerOptions, timeline, function (ghostDrawerOptions) {
                    ghostDrawerOptions.clear = drawerOptions.clear && ghostDrawerOptions.ghostIndex === 1;
                    draw_time += _this.applyDraw(ghostDrawerOptions);
                });
                drawerOptions.clear = false;
            }
            draw_time += this.applyDraw(drawerOptions);
            if (this.bBuffering && this.context) {
                this.buffer.push(currentFrame, this.context);
                if (this.buffer.count() >= this.timeline.getFramesCount()) {
                    this.dispatch('drawer-canvas:buffer_loaded');
                }
            }
        }
        return draw_time;
    };
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.redraw = function () {
        if (!this.timeline.bSequenceStarted()) {
            this.draw_id && cancelAnimationFrame(this.draw_id);
            !this.drawerOptions.clear &&
                (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) &&
                this.timeline.stop();
            this.draw_id = requestAnimationFrame(this.draw);
        }
        else if (!this.drawerOptions.clear &&
            (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0)) {
            this.stopAnimation();
            this.redraw_id && cancelAnimationFrame(this.redraw_id);
            this.redraw_id = requestAnimationFrame(this.startAnimation);
        }
    };
    DrawerCanvas.prototype.applyDraw = function (options) {
        var _a, _b;
        var start_time = (0,_Utilites__WEBPACK_IMPORTED_MODULE_2__.now)();
        var scene = this.scene;
        var context = this.context;
        context.globalCompositeOperation = 'source-over';
        var time = (_a = options.time) !== null && _a !== void 0 ? _a : 0;
        var simmetricLines = (_b = options.simmetricLines) !== null && _b !== void 0 ? _b : 0;
        var clear = options.clear;
        var noBackground = options.noBackground;
        var backgroundImage = options.backgroundImage;
        var bGhost = typeof options.ghosts !== 'undefined' &&
            options.ghosts > 0 &&
            typeof options.ghostIndex !== 'undefined' &&
            options.ghostIndex > 0;
        var ghostMultiplier = bGhost ? 1 - options.ghostIndex / (options.ghosts + 0.5) : 0;
        var ghostAlpha = options.ghostAlpha === true;
        var width = scene.width;
        var height = scene.height;
        var ratio = width / height;
        if (clear) {
            if (noBackground) {
                context.clearRect(0, 0, width, height);
            }
            else {
                context.fillStyle = scene.background;
                context.fillRect(0, 0, width, height);
                if (backgroundImage) {
                    var sourceWidth = backgroundImage instanceof SVGImageElement ? backgroundImage.width.baseVal.value : backgroundImage.width;
                    var sourceHeight = backgroundImage instanceof SVGImageElement ? backgroundImage.height.baseVal.value : backgroundImage.height;
                    var sourceRatio = sourceWidth / sourceHeight;
                    var x = 0, y = 0, bgWidth = width, bgHeight = height;
                    if (sourceRatio !== ratio) {
                        if (options.backgroundImageFit === 'contain') {
                            bgWidth = ratio > sourceRatio ? (sourceWidth * height) / sourceHeight : width;
                            bgHeight = ratio > sourceRatio ? height : (sourceHeight * width) / sourceWidth;
                        }
                        else {
                            bgWidth = ratio < sourceRatio ? (sourceWidth * height) / sourceHeight : width;
                            bgHeight = ratio < sourceRatio ? height : (sourceHeight * width) / sourceWidth;
                        }
                        x = (width - bgWidth) / 2;
                        y = (height - bgHeight) / 2;
                    }
                    context.drawImage(backgroundImage, x, y, bgWidth, bgHeight);
                }
            }
            if (simmetricLines > 0) {
                DrawerCanvas.drawSimmetricLines(context, simmetricLines, width, height, scene.color);
            }
        }
        {
            var logFillColorWarn_1 = false;
            var logStrokeColorWarn_1 = false;
            scene.currentTime = time;
            scene.getChildren().forEach(function (sceneChild) {
                if (!sceneChild.data ||
                    (!(sceneChild.data.visible === false) && !(bGhost && sceneChild.data.disableGhost === true))) {
                    sceneChild.generate(time, true);
                    context.save();
                    sceneChild.stream(function (stream) {
                        var currentIndex = stream.currentIndexing;
                        var shape = currentIndex.shape;
                        var propArguments = {
                            canvasContext: context,
                            shape: shape,
                            // singleRepetitionBounding: currentIndex.singleRepetitionBounding,
                            repetition: {
                                type: currentIndex.repetition.type,
                                angle: currentIndex.repetition.angle,
                                index: currentIndex.repetition.index,
                                count: currentIndex.repetition.count,
                                offset: currentIndex.repetition.offset,
                                row: {
                                    index: currentIndex.repetition.row.index,
                                    count: currentIndex.repetition.row.count,
                                    offset: currentIndex.repetition.row.offset,
                                },
                                col: {
                                    index: currentIndex.repetition.col.index,
                                    count: currentIndex.repetition.col.count,
                                    offset: currentIndex.repetition.col.offset,
                                },
                            },
                            parent: currentIndex.parent,
                        };
                        var composite = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'composite', propArguments, 'source-over');
                        context.globalCompositeOperation = composite;
                        context.beginPath();
                        context.moveTo(stream.buffer[stream.frameBufferIndex], stream.buffer[stream.frameBufferIndex + 1]);
                        for (var i = 2; i < stream.frameLength; i += 2) {
                            context.lineTo(stream.buffer[stream.frameBufferIndex + i], stream.buffer[stream.frameBufferIndex + i + 1]);
                        }
                        currentIndex.shape.isClosed() && context.closePath();
                        var alpha = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'opacity', propArguments, 1);
                        context.globalAlpha = alpha;
                        var shadowColor = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'shadowColor', propArguments);
                        var shadowBlur = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'shadowBlur', propArguments);
                        var shadowOffsetX = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'shadowOffsetX', propArguments);
                        var shadowOffsetY = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'shadowOffsetY', propArguments);
                        context.shadowColor = shadowColor;
                        context.shadowBlur = shadowBlur;
                        shadowOffsetX && (context.shadowOffsetX = shadowOffsetX);
                        shadowOffsetY && (context.shadowOffsetY = shadowOffsetY);
                        var fill = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'fill', propArguments);
                        if (typeof fill !== 'undefined') {
                            if (bGhost && ghostAlpha) {
                                var color = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.ghostifyColor(fill, ghostMultiplier);
                                if (color) {
                                    fill = color;
                                }
                                else if (!logFillColorWarn_1) {
                                    console.warn("[Urpflanze:DrawerCanvas] Unable ghost fill color '" + fill + "',\n\t\t\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                                    logFillColorWarn_1 = true;
                                }
                            }
                            context.fillStyle = fill;
                            context.fill();
                        }
                        var stroke = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'stroke', propArguments, typeof fill === 'undefined' ? scene.color : undefined);
                        var lineWidth = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'lineWidth', propArguments, 1);
                        if (stroke) {
                            if (bGhost && ghostAlpha) {
                                var color = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.ghostifyColor(stroke, ghostMultiplier);
                                if (color) {
                                    stroke = color;
                                }
                                else if (!logStrokeColorWarn_1) {
                                    console.warn("[Urpflanze:DrawerCanvas] Unable ghost stroke color '" + stroke + "',\n\t\t\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                                    logStrokeColorWarn_1 = true;
                                }
                                lineWidth *= ghostMultiplier;
                            }
                            var lineJoin = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'lineJoin', propArguments);
                            var lineCap = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'lineCap', propArguments);
                            var lineDash = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'lineDash', propArguments);
                            var lineDashOffset = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'lineDashOffset', propArguments);
                            var miterLimit = _Drawer__WEBPACK_IMPORTED_MODULE_0__.default.getStreamDrawerProp(shape, 'miterLimit', propArguments);
                            context.setLineDash.call(context, lineDash || []);
                            context.lineJoin = lineJoin;
                            context.lineCap = lineCap;
                            context.lineDashOffset = lineDashOffset;
                            context.miterLimit = miterLimit;
                            context.lineWidth = lineWidth;
                            context.strokeStyle = stroke;
                            context.stroke();
                        }
                    });
                    context.restore();
                }
            });
        }
        var end_time = (0,_Utilites__WEBPACK_IMPORTED_MODULE_2__.now)();
        return end_time - start_time;
    };
    DrawerCanvas.drawSimmetricLines = function (context, simmetricLines, width, height, color) {
        var offset = Math.PI / simmetricLines;
        var size = Math.max(width, height);
        var center = [size / 2, size / 2];
        for (var i = 0; i < simmetricLines; i++) {
            var a = [-size, -size];
            var b = [size * 2, size * 2];
            var rotate = i * offset + Math.PI / 4;
            _core_math_Vec2__WEBPACK_IMPORTED_MODULE_3__.default.rotateZ(a, center, rotate);
            _core_math_Vec2__WEBPACK_IMPORTED_MODULE_3__.default.rotateZ(b, center, rotate);
            context.beginPath();
            context.strokeStyle = color;
            context.lineWidth = 1;
            context.moveTo(a[0], a[1]);
            context.lineTo(b[0], b[1]);
            context.stroke();
        }
    };
    return DrawerCanvas;
}(_Drawer__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerCanvas);
//# sourceMappingURL=DrawerCanvas.js.map

/***/ }),

/***/ "./dist/services/drawers/drawer-canvas/FrameBuffer.js":
/*!************************************************************!*\
  !*** ./dist/services/drawers/drawer-canvas/FrameBuffer.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 *
 * @category Services.Drawer
 * @class FrameBuffer
 */
var FrameBuffer = /** @class */ (function () {
    function FrameBuffer() {
        this.frames = {};
    }
    FrameBuffer.prototype.exist = function (frameNumber) {
        return typeof this.frames[frameNumber] !== 'undefined';
    };
    FrameBuffer.prototype.get = function (frameNumber) {
        return this.exist(frameNumber) ? this.frames[frameNumber] : null;
    };
    FrameBuffer.prototype.count = function () {
        return Object.keys(this.frames).length;
    };
    FrameBuffer.prototype.push = function (frameNumber, context) {
        this.frames[frameNumber] = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    };
    FrameBuffer.prototype.flush = function () {
        this.frames = {};
    };
    FrameBuffer.prototype.getStoredFrames = function () {
        return Object.keys(this.frames).map(function (e) { return +e; });
    };
    return FrameBuffer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrameBuffer);
//# sourceMappingURL=FrameBuffer.js.map

/***/ }),

/***/ "./dist/services/events/Emitter.js":
/*!*****************************************!*\
  !*** ./dist/services/events/Emitter.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/**
 * Class used for emit and dispatch events
 *
 * @category Services.Emitter
 * @abstract
 * @class Emitter
 * @template EventTypes
 */
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.callbacks = {};
    }
    /**
     * Attach callback at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => any} callback
     * @memberof Emitter
     */
    Emitter.prototype.attach = function (e, callback) {
        if (!(e in this.callbacks)) {
            this.callbacks[e] = [];
        }
        this.callbacks[e].push(callback);
    };
    /**
     * Remove callbach listener at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => void} callback
     * @memberof Emitter
     */
    Emitter.prototype.detach = function (e, callback) {
        if (e in this.callbacks) {
            var index = this.callbacks[e].indexOf(callback);
            if (index >= 0) {
                this.callbacks[e].splice(index, 1);
            }
        }
    };
    /**
     * Dispatch event
     *
     * @param {keyof EventTypes} e
     * @param {EventTypes[keyof EventTypes]} [params]
     * @memberof Emitter
     */
    Emitter.prototype.dispatch = function (e, params) {
        if (e in this.callbacks) {
            for (var i = 0, len = this.callbacks[e].length; i < len; i++)
                if (this.callbacks[e][i](params) === false)
                    break;
        }
    };
    return Emitter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emitter);
//# sourceMappingURL=Emitter.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/SceneChildUtilitiesData.js":
/*!******************************************************************!*\
  !*** ./dist/services/scene-utilities/SceneChildUtilitiesData.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony import */ var _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/types/shape-base */ "./dist/core/types/shape-base.js");
;

var OptionShapePrimitiveAdaptMode = [
    { key: 'None', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.None },
    { key: 'Scale', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Scale },
    { key: 'Center', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Center },
    { key: 'Fill', value: _core_types_shape_base__WEBPACK_IMPORTED_MODULE_1__.EShapePrimitiveAdaptMode.Fill },
];
var OptionSpiralType = [
    { key: 'ARCHIMEDE', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.ARCHIMEDE },
    { key: 'FERMAT', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.FERMAT },
    { key: 'HYPERBOLIC', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.HYPERBOLIC },
    { key: 'LITUUS', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.LITUUS },
    { key: 'LOGARITHMIC', value: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.LOGARITHMIC },
];
/**
 * @category Services.Scene Utilities
 */
var SceneChildUtilitiesData = {
    repetitions: {
        animable: true,
        name: 'repetitions',
        label: 'Repetitions',
        type: 'range',
        min: 1,
        max: 200,
        step: 1,
        default: 1,
        default_animate: 20,
        canBArray: true,
        transformation: 'none',
        dataType: 'props',
        type_value: 'int',
    },
    distance: {
        animable: true,
        name: 'distance',
        label: 'Distance',
        type: 'range',
        min: -100,
        max: 100,
        step: 0.1,
        default: 0,
        canBArray: true,
        default_animate: 25,
        transformation: 'scene-size-percentage',
        dataType: 'props',
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
        dataType: 'props',
    },
    squeezeX: {
        animable: true,
        name: 'squeezeX',
        label: 'SqueezeX',
        type: 'range',
        min: -0.2,
        max: 0.2,
        step: 0.01,
        default: 0,
        default_animate: 0.1,
        transformation: 'scene-size-percentage-inverse',
        dataType: 'props',
    },
    squeezeY: {
        animable: true,
        name: 'squeezeY',
        label: 'SqueezeY',
        type: 'range',
        min: -0.2,
        max: 0.2,
        step: 0.01,
        default: 0,
        default_animate: 0.1,
        transformation: 'scene-size-percentage-inverse',
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
    },
    translate: {
        animable: true,
        name: 'translate',
        label: 'Translate',
        type: 'multiple-range',
        min: -100,
        max: 100,
        step: 0.1,
        default: 0,
        default_animate: 0,
        initialArray: true,
        transformation: 'scene-size-percentage',
        dataType: 'props',
    },
    scale: {
        animable: true,
        name: 'scale',
        label: 'Scale',
        type: 'multiple-range',
        min: -5,
        max: 5,
        step: 0.01,
        default: 1,
        default_animate: 3,
        transformation: 'none',
        dataType: 'props',
    },
    transformOrigin: {
        animable: true,
        name: 'transformOrigin',
        label: 'Transform Origin',
        type: 'multiple-range',
        min: -1,
        max: 1,
        step: 0.01,
        default: [0, 0],
        default_animate: [-1, 1],
        initialArray: true,
        transformation: 'none',
        dataType: 'props',
    },
    perspective: {
        animable: true,
        name: 'perspective',
        label: 'Perspective',
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
        default: 0,
        default_animate: 0.8,
        transformation: 'none',
        dataType: 'props',
    },
    perspectiveOrigin: {
        animable: true,
        name: 'perspectiveOrigin',
        label: 'Perspective Origin',
        type: 'multiple-range',
        min: -1,
        max: 1,
        step: 0.01,
        default: [0, 0],
        default_animate: [-1, 1],
        initialArray: true,
        transformation: 'none',
        dataType: 'props',
    },
    // primitive style
    fill: {
        animable: true,
        name: 'fill',
        label: 'Fill',
        type: 'color',
        default: '#000',
        default_animate: '#fff',
        transformation: 'none',
        dataType: 'drawer',
    },
    stroke: {
        animable: true,
        name: 'stroke',
        label: 'Stroke',
        type: 'color',
        default: '#fff',
        default_animate: '#000',
        transformation: 'none',
        dataType: 'drawer',
    },
    lineWidth: {
        animable: true,
        name: 'lineWidth',
        label: 'Stroke weight',
        type: 'slider',
        min: 0,
        max: 30,
        step: 0.01,
        default: 0.1,
        default_animate: 3,
        transformation: 'scene-size-percentage',
        dataType: 'drawer',
    },
    bClosed: {
        name: 'bClosed',
        label: 'Closed',
        type: 'checkbox',
        default: undefined,
        transformation: 'none',
        dataType: 'settings',
    },
    bUseParent: {
        name: 'bUseParent',
        label: 'Use parent repetition',
        type: 'checkbox',
        default: false,
        transformation: 'none',
        dataType: 'settings',
    },
    bUseRecursion: {
        name: 'bUseRecursion',
        label: 'Use recursion repetition',
        type: 'checkbox',
        default: false,
        transformation: 'none',
        dataType: 'settings',
    },
    vertexCallback: {
        name: 'vertexCallback',
        label: 'vertexCallback',
        type: 'function',
        default: undefined,
        transformation: 'none',
        dataType: 'settings',
    },
    adaptMode: {
        name: 'adaptMode',
        label: 'Adapt',
        type: 'radio',
        options: OptionShapePrimitiveAdaptMode,
        default: undefined,
        transformation: 'none',
        dataType: 'settings',
    },
    // recursion
    recursions: {
        animable: true,
        name: 'recursion',
        label: 'Recursion',
        type: 'range',
        min: 1,
        max: 8,
        step: 1,
        default: 1,
        default_animate: 2,
        transformation: 'none',
        dataType: 'props',
        type_value: 'int',
    },
    recursionScale: {
        animable: true,
        name: 'recursionScale',
        label: 'Recursion Scale',
        type: 'range',
        min: 0.1,
        max: 5,
        step: 0.01,
        default: 1,
        default_animate: 2,
        transformation: 'none',
        dataType: 'props',
    },
    recursionVertex: {
        animable: true,
        name: 'recursionVertex',
        label: 'Recursion Vertex',
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
        default: 10,
        default_animate: 20,
        transformation: 'none',
        dataType: 'props',
        type_value: 'int',
    },
    // primitive
    sideLength: {
        animable: true,
        name: 'sideLength',
        label: 'Side Length',
        type: 'multiple-range',
        min: 0.01,
        max: 100,
        step: 0.1,
        default: 10,
        default_animate: 20,
        transformation: 'scene-size-percentage',
        dataType: 'props',
    },
    // polygon
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
    },
    twistsStart: {
        animable: true,
        name: 'twists_start',
        label: 'Twists start',
        type: 'range',
        min: 0,
        max: 60,
        step: 0.1,
        default: 0,
        default_animate: 1,
        transformation: 'none',
        dataType: 'props',
    },
    spiral: {
        name: 'spiral',
        label: 'Spiral type',
        type: 'select',
        options: OptionSpiralType,
        default: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_0__.default.types.ARCHIMEDE,
        transformation: 'none',
        dataType: 'props',
    },
    // supershape
    a: {
        animable: true,
        name: 'a',
        label: 'A',
        type: 'range',
        min: -5,
        max: 5,
        step: 0.1,
        default: 1,
        default_animate: 0.1,
        transformation: 'none',
        dataType: 'props',
    },
    b: {
        animable: true,
        name: 'b',
        label: 'B',
        type: 'range',
        min: -5,
        max: 5,
        step: 0.1,
        default: 1,
        default_animate: 0.1,
        transformation: 'none',
        dataType: 'props',
    },
    m: {
        animable: true,
        name: 'm',
        label: 'm',
        type: 'range',
        min: 1,
        max: 20,
        step: 1,
        default: 1,
        default_animate: 6,
        transformation: 'none',
        dataType: 'props',
        type_value: 'int',
    },
    n1: {
        animable: true,
        name: 'n1',
        label: 'n1',
        type: 'range',
        min: -3,
        max: 3,
        step: 0.01,
        default: 1,
        default_animate: 0.1,
        transformation: 'none',
        dataType: 'props',
    },
    n2: {
        animable: true,
        name: 'n2',
        label: 'n2',
        type: 'range',
        min: -3,
        max: 3,
        step: 0.01,
        default: 1,
        default_animate: 0.1,
        transformation: 'none',
        dataType: 'props',
    },
    n3: {
        animable: true,
        name: 'n3',
        label: 'n3',
        type: 'range',
        min: -3,
        max: 3,
        step: 0.01,
        default: 1,
        default_animate: 0.1,
        transformation: 'none',
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
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
        dataType: 'props',
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneChildUtilitiesData);
//# sourceMappingURL=SceneChildUtilitiesData.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/SceneUtilities.js":
/*!*********************************************************!*\
  !*** ./dist/services/scene-utilities/SceneUtilities.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _core_SceneChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shapes/primitives/Line */ "./dist/core/shapes/primitives/Line.js");
/* harmony import */ var _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shapes/primitives/Triangle */ "./dist/core/shapes/primitives/Triangle.js");
/* harmony import */ var _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shapes/primitives/Rect */ "./dist/core/shapes/primitives/Rect.js");
/* harmony import */ var _core_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shapes/primitives/Polygon */ "./dist/core/shapes/primitives/Polygon.js");
/* harmony import */ var _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shapes/primitives/Circle */ "./dist/core/shapes/primitives/Circle.js");
/* harmony import */ var _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shapes/primitives/Rose */ "./dist/core/shapes/primitives/Rose.js");
/* harmony import */ var _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shapes/primitives/Spiral */ "./dist/core/shapes/primitives/Spiral.js");
/* harmony import */ var _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shapes/primitives/Lissajous */ "./dist/core/shapes/primitives/Lissajous.js");
/* harmony import */ var _core_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shapes/primitives/SuperShape */ "./dist/core/shapes/primitives/SuperShape.js");
/* harmony import */ var _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/shapes/Shape */ "./dist/core/shapes/Shape.js");
/* harmony import */ var _core_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/shapes/ShapeRecursive */ "./dist/core/shapes/ShapeRecursive.js");
/* harmony import */ var _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");
/* harmony import */ var _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/shapes/ShapeLoop */ "./dist/core/shapes/ShapeLoop.js");
/* harmony import */ var _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/shapes/ShapeBuffer */ "./dist/core/shapes/ShapeBuffer.js");
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _core_Group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/Group */ "./dist/core/Group.js");
/* harmony import */ var _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/shapes/ShapeBase */ "./dist/core/shapes/ShapeBase.js");
/* harmony import */ var _animation_Animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../animation/Animation */ "./dist/services/animation/Animation.js");
/* harmony import */ var _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SceneChildUtilitiesData */ "./dist/services/scene-utilities/SceneChildUtilitiesData.js");
/* harmony import */ var _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SceneUtilitiesExtended */ "./dist/services/scene-utilities/SceneUtilitiesExtended.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


// Shapes




















/**
 *
 * @category Services.Scene Utilities
 * @class SceneUtilities
 */
var SceneUtilities = /** @class */ (function () {
    function SceneUtilities() {
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {
            Line: _core_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_1__.default,
            Triangle: _core_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_2__.default,
            Rect: _core_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_3__.default,
            Polygon: _core_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_4__.default,
            Circle: _core_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_5__.default,
            Rose: _core_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_6__.default,
            Spiral: _core_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_7__.default,
            Lissajous: _core_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_8__.default,
            SuperShape: _core_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_9__.default,
            Group: _core_Group__WEBPACK_IMPORTED_MODULE_16__.default,
            Shape: _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default,
            ShapeRecursive: _core_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_11__.default,
            ShapeLoop: _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__.default,
            ShapeBuffer: _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__.default,
        };
    }
    //#region Register scene child
    /**
     * Return a list of name of registered sceneChild
     *
     * @returns {Array<string>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getRegistered = function () {
        return Object.keys(this.registeredSceneChilds);
    };
    /**
     * Register scene child for fast creation
     *
     * @param {string} type
     * @param {SceneChildInstance} ref
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.register = function (type, ref) {
        if (!(type in this.registeredSceneChilds)) {
            this.registeredSceneChilds[type] = ref;
        }
        else {
            console.warn("SceneUtilities: SceneChild \"" + type + "\" is already registered");
        }
    };
    /**
     * unregister scene child
     *
     * @param {string} type
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.unregister = function (type) {
        if (type in this.registeredSceneChilds) {
            delete this.registeredSceneChilds[type];
        }
        else {
            console.warn("SceneUtilities: SceneChild \"" + type + "\" is not registered");
        }
    };
    //#endregion
    //#region Scene manipulation
    /**
     * Logic creation of a SceneChild
     * Since scene is not passed, name are set if they are present in args or type
     *
     *
     * @param {(string | SceneChild)} item
     * @param {TSceneChildUtilitiesSettings} [setting]
     * @param {Scene} [scene]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.create = function (item, settings, scene) {
        var _this = this;
        var _a;
        scene = scene ? scene : typeof item !== 'string' ? item.scene : undefined;
        if (item instanceof _core_SceneChild__WEBPACK_IMPORTED_MODULE_0__.default) {
            this.getChildren(item).forEach(function (child) { return _this.create(child, undefined, scene); });
            return item;
        }
        if (item in this.registeredSceneChilds) {
            if (!settings)
                settings = {};
            settings.id = settings.id || (0,uuid__WEBPACK_IMPORTED_MODULE_21__.default)();
            if (!settings.name && scene)
                settings.name = item + '_' + (this.getCountSceneChildOfType(scene, item) + 1);
            if (!settings.data)
                settings.data = {};
            if (!('props' in settings.data))
                settings.data.props = {};
            if (!('style' in settings.data))
                settings.data.style = {};
            if (!('visible' in settings.data))
                settings.data.visible = true;
            // if (!('highlighted' in settings.data)) settings.data.highlighted = false
            // if (!('disableGhost' in settings.data)) settings.data.disableGhost = false
            // if (item === 'ShapeLoop') {
            // 	if (!('loop' in settings)) settings.loop = { start: 0, end: Math.PI * 2, inc: (Math.PI * 2) / 20 }
            // }
            var sceneChild = new this.registeredSceneChilds[item](settings);
            if (sceneChild && scene && this.isAPrimitive(sceneChild)) {
                this.set(sceneChild, 'sideLength', { type: 'transformable-prop', value: (_a = _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_19__.default.sideLength) === null || _a === void 0 ? void 0 : _a.default }, scene);
                // this.setProp(
                // 	sceneChild,
                // 	'sideLength',
                // 	{ type: 'transformable-prop', value: SceneChildUtilitiesData.sideLength?.default },
                // 	scene
                // )
            }
            this.getChildren(sceneChild).forEach(function (child) { return _this.create(child); });
            return sceneChild;
        }
        console.warn("SceneUtilities: Creation failed. SceneChild \"" + item + "\" is not registered");
        return null;
    };
    /**
     * Return number of element from a type
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getCountSceneChildOfType = function (scene, type) {
        var count = 0;
        _core_Scene__WEBPACK_IMPORTED_MODULE_15__.default.walk(function (sceneChild) {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    };
    /**
     * Return a copy of sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {Scene} [scene]
     * @param {boolean} [strict]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.copy = function (sceneChild, scene, strict) {
        var _this = this;
        if (strict === void 0) { strict = false; }
        // copy only props, without name, id
        var setting = sceneChild.getProps();
        if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__.default) {
            setting.bUseParent = sceneChild.bUseParent;
            setting.bUseRecursion = sceneChild.bUseRecursion;
        }
        if (sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__.default) {
            setting.shape = sceneChild.shape;
        }
        if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__.default) {
            setting.bClosed = sceneChild.bClosed;
            setting.adaptMode = sceneChild.adaptMode;
            setting.vertexCallback = sceneChild.vertexCallback;
        }
        if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__.default) {
            setting.loopDependencies = sceneChild.loopDependencies;
        }
        if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__.default) {
            setting.loopDependencies = sceneChild.loopDependencies;
        }
        if (strict) {
            setting.id = sceneChild.id;
            setting.name = sceneChild.name;
            setting.order = sceneChild.order;
            setting.data = JSON.parse(JSON.stringify(sceneChild.data || {}));
        }
        var copied = this.create(sceneChild.type, setting, scene);
        if (copied) {
            if (sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default) {
                sceneChild.getChildren().forEach(function (child) {
                    var copiedChild = _this.copy(child, scene);
                    copiedChild && copied.add(copiedChild);
                });
            }
            else if (sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default && copied instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default && sceneChild.shape) {
                var copiedShape = this.copy(sceneChild.shape, scene);
                copiedShape && (copied.shape = copiedShape);
            }
            else if (sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__.default && copied instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__.default && sceneChild.shape) {
                copied.setShape(new Float32Array(sceneChild.shape));
            }
            return copied;
        }
        console.warn("SceneUtilities: Copy failed.", sceneChild);
        return null;
    };
    /**
     * Add scene child to parent.
     * Create a group if parent is Shape and has one element (not Group) inside.
     *
     * @param {(SceneChild | Scene)} parent
     * @param {(string | SceneChild)} sceneChild
     * @param {TSceneChildUtilityProps} [props]
     * @param {Scene} [scene]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.add = function (parent, sceneChild, settings, scene) {
        var newSceneChild = null;
        if (parent instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default || parent instanceof _core_Scene__WEBPACK_IMPORTED_MODULE_15__.default) {
            newSceneChild = this.create(sceneChild, settings, scene);
            newSceneChild && parent.add(newSceneChild);
        }
        else if (parent instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default) {
            if (parent.shape == undefined) {
                newSceneChild = this.create(sceneChild, settings, scene);
                newSceneChild && parent.setShape(newSceneChild);
            }
            else if (parent.shape instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__.default) {
                newSceneChild = this.create(sceneChild, settings, scene);
                if (newSceneChild) {
                    var newGroup = this.create('Group', undefined, scene);
                    var sibling = parent.shape;
                    this.remove(parent, sibling);
                    parent.setShape(newGroup);
                    newGroup.add(sibling);
                    newGroup.add(newSceneChild);
                }
            }
            else if (parent.shape instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default) {
                this.add(parent.shape, sceneChild, undefined, scene);
            }
        }
        return newSceneChild;
    };
    /**
     * Remove scene child from
     *
     * @param {SceneChild} from
     * @param {SceneChild} [item]
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.remove = function (from, item) {
        if (!item) {
            // 'from' as item to remove
            if (from.scene) {
                var parent_1 = this.getParent(from);
                !parent_1 ? from.scene.removeFromId(from.id) : this.remove(parent_1, from);
            }
            else {
                console.warn("SceneUtilities: Remove failed. SceneChild is not added into scene", from);
            }
        }
        else {
            if (from instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default)
                from.removeFromId(item.id);
            else if (from instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default)
                from.setShape(undefined);
        }
    };
    //#endregion
    //#region Scene parent and children
    /**
     * Get Root parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getRootParent = function (sceneChild) {
        var parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[0] : null;
    };
    /**
     * Get first level parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getParent = function (sceneChild) {
        var parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[parents.length - 1] : null;
    };
    /**
     * Get all parents
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getParents = function (sceneChild) {
        return sceneChild && sceneChild.scene ? sceneChild.scene.getParentsOfSceneChild(sceneChild) : [];
    };
    /**
     * Return children of a shape.
     * Only Group has array of children, Shape has only one child.
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getChildren = function (sceneChild) {
        if (sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default)
            return sceneChild.getChildren();
        return sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default && sceneChild.shape ? [sceneChild.shape] : [];
    };
    /**
     * Return only primitive children
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getChildrenPrimitives = function (sceneChild) {
        var result = [];
        var children = this.getChildren(sceneChild);
        for (var i = 0, len = children.length; i < len; i++) {
            if (children[i] instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__.default)
                result.push(children[i]);
            else
                result = result.concat.apply(result, this.getChildrenPrimitives(children[i]));
        }
        return result;
    };
    /**
     * Return a list of neighbors
     *
     * @param {SceneChild} sceneChild
     * @returns {(Array<SceneChild>)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getNeighbors = function (sceneChild) {
        if (sceneChild.scene) {
            var parent_2 = this.getParent(sceneChild);
            return parent_2 == null ? sceneChild.scene.getChildren() : this.getChildren(parent_2);
        }
        return [];
    };
    /**
     * Return a number of element type into a scene
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getCountOfSceneChildType = function (scene, type) {
        var count = 0;
        _core_Scene__WEBPACK_IMPORTED_MODULE_15__.default.walk(function (sceneChild) {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    };
    // /**
    //  * Walk through sceneChild
    //  *
    //  * @param {SceneChild} sceneChild
    //  * @param {(child: SceneChild) => void} callback
    //  * @memberof SceneUtilities
    //  */
    // walk(sceneChild: SceneChild, callback: (child: SceneChild) => void) {
    // 	callback(sceneChild)
    // 	this.getChildren(sceneChild).forEach(child => callback(child))
    // }
    //#endregion
    //#region checker
    /**
     * Check sceneChild is Group
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.isGroup = function (sceneChild) {
        return sceneChild instanceof _core_Group__WEBPACK_IMPORTED_MODULE_16__.default;
    };
    /**
     * Check sceneChild are Shape and has a child
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasShapeChild = function (sceneChild) {
        return sceneChild instanceof _core_shapes_Shape__WEBPACK_IMPORTED_MODULE_10__.default ? sceneChild.shape !== undefined : false;
    };
    /**
     * Check sceneChild is a ShapeBuffer an are binded
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasShapeBuffer = function (sceneChild) {
        return sceneChild instanceof _core_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_14__.default;
    };
    /**
     * Check scene child is a Primitive
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.isAPrimitive = function (sceneChild) {
        return sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__.default;
    };
    /**
     * Check scene child is a ShapeLoop
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasLoop = function (sceneChild) {
        return sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__.default;
    };
    //#endregion
    SceneUtilities.prototype.set = function (sceneChild, name, value, scene) {
        switch (_SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_19__.default[name].dataType) {
            case 'props':
                return this.setProp(sceneChild, name, value, scene);
            case 'drawer':
                return this.setDrawerProp(sceneChild, name, value, scene);
            case 'settings':
                return this.setSetting(sceneChild, name, value, scene);
        }
    };
    /**
     * Set prop: convert animation or transformable props
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {TSceheChildUtilityPropValue} value
     * @param {Scene} scene
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.setProp = function (sceneChild, name, value, scene) {
        if (typeof sceneChild.data === 'undefined') {
            sceneChild.data = { props: {} };
        }
        else if (typeof sceneChild.data.props === 'undefined') {
            sceneChild.data.props = {};
        }
        sceneChild.clearBuffer(true, true);
        // Check LoopAnimation
        if (name === 'loop') {
            if (sceneChild instanceof _core_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_13__.default && _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueLoop(value)) {
                var shapeLoopAnimation = value;
                sceneChild.data.props.loop = value;
                sceneChild.setProp('loop', _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.composeLoop(shapeLoopAnimation));
                // Set loopDependencies
                var dynamic = shapeLoopAnimation.dynamyc;
                var realDynamic = sceneChild.loopDependencies.indexOf('propArguments') >= 0;
                if (dynamic !== realDynamic) {
                    var dependencies = __spreadArrays(sceneChild.loopDependencies);
                    if (dynamic)
                        !(dependencies.indexOf('propArguments') >= 0) && dependencies.push('propArguments');
                    else
                        dependencies.indexOf('propArguments') >= 0 && dependencies.splice(dependencies.indexOf('propArguments', 1));
                    sceneChild.loopDependencies = dependencies;
                }
            }
            return;
        }
        // Check Animation
        if (_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueAnimation(value)) {
            sceneChild.data.props[name] = value;
            sceneChild.setProp(name, _animation_Animation__WEBPACK_IMPORTED_MODULE_18__.default.composeAnimation(scene, name, value));
            return;
        }
        // Check Transormable prop
        if (_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bPropInSceneChildUtilitiesData(name) &&
            _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueTransformable(value)) {
            sceneChild.data.props[name] = value;
            sceneChild.setProp(name, _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.getTransformedValue(scene, name, value));
            return;
        }
        // Otherwise, set prop without transformation
        //Equivalent of: if (name in SceneChildPropsData && SceneChildPropsData[name].transformation !== 'none')
        sceneChild.setProp(name, value, true);
        delete sceneChild.data.props[name];
        // Not set to data because exporter override sceneChild.data.props on sceneChild.props (default)
        //sceneChild.data.props[name] = value
    };
    /**
     * Set prop, convert raw function, animation on transformable prop
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {TDrawerPropsExtendedKeys} name
     * @param {*} value
     * @param {Scene} scene
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.setDrawerProp = function (sceneChild, name, value, scene) {
        if (this.isAPrimitive(sceneChild)) {
            if (typeof sceneChild.data === 'undefined') {
                sceneChild.data = { style: {} };
            }
            else if (typeof sceneChild.data.style === 'undefined') {
                sceneChild.data.style = {};
            }
            if (_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueAnimation(value)) {
                sceneChild.data.style[name] = value;
                sceneChild.style[name] = _animation_Animation__WEBPACK_IMPORTED_MODULE_18__.default.composeAnimation(scene, name, value);
                return;
            }
            // Check Transormable prop
            if (_SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bPropInSceneChildUtilitiesData(name) &&
                _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueTransformable(value)) {
                sceneChild.data.style[name] = value;
                sceneChild.style[name] = _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.getTransformedValue(scene, name, value);
                return;
            }
            // Otherwise, set prop without transformation
            //Equivalent of: if (name in SceneChildPropsData && SceneChildPropsData[name].transformation !== 'none')
            // @ts-ignore
            sceneChild.style[name] = value;
            delete sceneChild.data.style[name];
        }
    };
    /**
     * TODO:
     * Set Args (props, drawer, other settings)
     * SceneChildPropData refactoring
     */
    SceneUtilities.prototype.setSetting = function (sceneChild, name, value, scene) {
        sceneChild.clearBuffer(true, true);
        if (name === 'vertexCallback') {
            if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__.default && _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.bValueVertexCallback(value)) {
                sceneChild.data.vertexCallback = value;
                sceneChild.vertexCallback = _SceneUtilitiesExtended__WEBPACK_IMPORTED_MODULE_20__.default.composeVertexCallback(value);
                // If shape is static vertexCallback has no effect
                // sceneChild.bUseParent = true
            }
            return;
        }
        switch (name) {
            case 'bUseParent':
                if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__.default)
                    sceneChild.bUseParent = value;
                break;
            case 'bUseRecursion':
                if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_17__.default)
                    sceneChild.bUseRecursion = value;
                break;
            case 'bClosed':
                if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__.default)
                    sceneChild.setClosed(value);
                break;
            case 'adaptMode':
                if (sceneChild instanceof _core_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_12__.default)
                    sceneChild.adapt(value);
                break;
            default:
                if (typeof sceneChild[name] !== 'undefined') {
                    //@ts-ignore
                    sceneChild[name] = value;
                }
                break;
        }
    };
    return SceneUtilities;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SceneUtilities());
//# sourceMappingURL=SceneUtilities.js.map

/***/ }),

/***/ "./dist/services/scene-utilities/SceneUtilitiesExtended.js":
/*!*****************************************************************!*\
  !*** ./dist/services/scene-utilities/SceneUtilitiesExtended.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneChildUtilitiesData */ "./dist/services/scene-utilities/SceneChildUtilitiesData.js");
;

/**
 *
 * @category Services.Scene Utilities
 * @class SceneUtilitiesExtended
 */
var SceneUtilitiesExtended = /** @class */ (function () {
    function SceneUtilitiesExtended() {
    }
    //#region ShapeLoop
    SceneUtilitiesExtended.bValueLoop = function (value) {
        return (typeof value === 'object' &&
            'start' in value &&
            'end' in value &&
            'inc' in value &&
            'vertex' in value &&
            value.vertex.raw &&
            value.vertex.raw.length > 0);
    };
    SceneUtilitiesExtended.bValueVertexCallback = function (value) {
        return value && value.raw && value.raw.length > 0;
    };
    SceneUtilitiesExtended.composeVertexCallback = function (value) {
        if (value && value.raw) {
            var vertexCallback = new Function('vertex', 'vertexRepetition', SceneUtilitiesExtended.RAW_ARGUMENTS, "return " + value.raw);
            return vertexCallback;
        }
    };
    SceneUtilitiesExtended.composeLoop = function (loop) {
        var vertex = loop.vertex.raw
            ? new Function('shapeLoopRepetition', SceneUtilitiesExtended.RAW_ARGUMENTS, "return " + loop.vertex.raw)
            : undefined;
        //Todo: number -> resolve function
        return {
            start: loop.start,
            end: loop.end,
            inc: loop.inc,
            vertex: vertex,
        };
    };
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
    /**
     * Check value is TAnimation
     * @param value
     */
    SceneUtilitiesExtended.bValueAnimation = function (value) {
        return (value &&
            typeof value === 'object' &&
            value.type &&
            (value.type === 'simple' || value.type === 'raw') /*|| value.type == 'random'*/);
    };
    /**
     * Check value is TTransformableProp
     * @param value
     */
    SceneUtilitiesExtended.bValueTransformable = function (value) {
        return (value !== null &&
            typeof value === 'object' &&
            typeof value.type === 'string' &&
            value.type === 'transformable-prop');
    };
    /**
     * Check the prop need transformation when set
     * @param name
     */
    SceneUtilitiesExtended.bPropInSceneChildUtilitiesData = function (name) {
        return (typeof _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_1__.default[name] !== 'undefined' && _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_1__.default[name].transformation !== 'none');
    };
    /**
     * Transform value
     * @param scene
     * @param name
     * @param value
     */
    SceneUtilitiesExtended.getTransformedValue = function (scene, name, value) {
        var sceneChildProp = _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_1__.default[name];
        if (SceneUtilitiesExtended.bPropInSceneChildUtilitiesData(name) &&
            SceneUtilitiesExtended.bValueTransformable(value)) {
            value = value.value;
            var sceneX = name === 'distance' ? scene.height : scene.width;
            var sceneY = name === 'distance' ? scene.width : scene.height;
            switch (sceneChildProp.transformation) {
                case 'angle':
                    if (Array.isArray(value)) {
                        return [(0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toRadians)(value[0]), (0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toRadians)(value[1])];
                    }
                    return (0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toRadians)(value);
                case 'scene-size-percentage': {
                    if (typeof scene !== 'undefined') {
                        if (Array.isArray(value)) {
                            return [(value[0] * sceneX) / 100, (value[1] * sceneY) / 100];
                        }
                        return (value * (scene.center[0] + scene.center[1])) / 100;
                    }
                    break;
                }
                case 'scene-size-percentage-inverse': {
                    if (typeof scene !== 'undefined') {
                        if (Array.isArray(value)) {
                            return [(value[0] * 100) / sceneX, (value[1] * 100) / sceneY];
                        }
                        return (value * 100) / (scene.center[0] + scene.center[1]);
                    }
                    break;
                }
            }
        }
        return value;
    };
    /**
     * Transform value inverse
     * @param scene
     * @param name
     * @param value
     */
    SceneUtilitiesExtended.getTransformedValueInverse = function (scene, name, value) {
        var sceneChildProp = _SceneChildUtilitiesData__WEBPACK_IMPORTED_MODULE_1__.default[name];
        if (SceneUtilitiesExtended.bPropInSceneChildUtilitiesData(name) &&
            SceneUtilitiesExtended.bValueTransformable(value)) {
            value = value.value;
            var sceneX = name === 'distance' ? scene.height : scene.width;
            var sceneY = name === 'distance' ? scene.width : scene.height;
            switch (sceneChildProp.transformation) {
                case 'angle': {
                    if (Array.isArray(value)) {
                        return [(0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toDegrees)(value[0]), (0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toDegrees)(value[1])];
                    }
                    return (0,_Utilites__WEBPACK_IMPORTED_MODULE_0__.toDegrees)(value);
                }
                case 'scene-size-percentage': {
                    if (typeof scene !== 'undefined') {
                        if (Array.isArray(value)) {
                            return [(value[0] * 100) / sceneX, (value[1] * 100) / sceneY];
                        }
                        return (value * 100) / (scene.center[0] + scene.center[1]);
                    }
                    break;
                }
                case 'scene-size-percentage-inverse': {
                    if (typeof scene !== 'undefined') {
                        if (Array.isArray(value)) {
                            return [(value[0] * sceneX) / 100, (value[1] * sceneY) / 100];
                        }
                        return (value * (scene.center[0] + scene.center[1])) / 100;
                    }
                    break;
                }
            }
        }
        return value;
    };
    SceneUtilitiesExtended.RAW_ARGUMENTS = '{ repetition, recursion, shape }';
    SceneUtilitiesExtended.RAW_ARGUMENTS_WITH_PARENT = '{ repetition, recursion, shape, parent }';
    return SceneUtilitiesExtended;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneUtilitiesExtended);
//# sourceMappingURL=SceneUtilitiesExtended.js.map

/***/ }),

/***/ "./dist/services/timeline/Timeline.js":
/*!********************************************!*\
  !*** ./dist/services/timeline/Timeline.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _core_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/math */ "./dist/core/math/index.js");
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * Is used for sequence time management.
 * It is necessary to set the duration and the number of frames per second (frame rate).
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline(duration, framerate) {
        if (duration === void 0) { duration = 60000; }
        if (framerate === void 0) { framerate = 60; }
        var _this = _super.call(this) || this;
        _this.fps_samples_size = 30;
        _this.fps_samples = [];
        _this.fps_samples_index = 0;
        _this.paused_time = 0;
        _this.sequence = {
            duration: duration,
            framerate: framerate,
            frames: Math.round((duration / 1000) * framerate),
        };
        _this.tick_time = 1000 / _this.sequence.framerate;
        _this.fps = _this.sequence.framerate;
        _this.b_sequence_started = false;
        _this.current_frame = 0;
        _this.current_time = 0;
        _this.last_tick = 0;
        _this.start_time = 0;
        return _this;
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     */
    Timeline.prototype.getSequence = function () {
        return __assign({}, this.sequence);
    };
    /**
     * Set Sequence
     *
     * @param {number} duration
     * @param {number} framerate
     */
    Timeline.prototype.setSequence = function (duration, framerate) {
        this.sequence.duration = duration;
        this.sequence.framerate = framerate;
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.round((this.sequence.duration / 1000) * this.sequence.framerate);
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Set duration of timeline
     *
     * @param {number} framerate
     */
    Timeline.prototype.setDuration = function (duration) {
        this.setSequence(duration, this.sequence.framerate);
    };
    /**
     * Get timeline duration
     *
     * @returns {number}
     */
    Timeline.prototype.getDuration = function () {
        return this.sequence.duration;
    };
    /**
     * Return framerate
     *
     * @returns {number}
     */
    Timeline.prototype.getFramerate = function () {
        return this.sequence.framerate;
    };
    /**
     * Set a framerate
     *
     * @param {number} framerate
     */
    Timeline.prototype.setFramerate = function (framerate) {
        this.setSequence(this.sequence.duration, framerate);
    };
    /**
     * Get number of frames based on duration and framerate
     *
     * @returns {number}
     */
    Timeline.prototype.getFramesCount = function () {
        return this.sequence.frames;
    };
    //#endregion meta
    //#region change status
    Timeline.prototype.bSequenceStarted = function () {
        return this.b_sequence_started;
    };
    /**
     * Start the sequence
     *
     */
    Timeline.prototype.start = function () {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            this.start_time = this.paused_time;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    };
    /**
     * Pause the sequence
     *
     */
    Timeline.prototype.pause = function () {
        if (this.b_sequence_started) {
            this.paused_time = (0,_Utilites__WEBPACK_IMPORTED_MODULE_2__.now)();
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    };
    /**
     * Stop the sequence and reset
     *
     */
    Timeline.prototype.stop = function () {
        if (this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_time = 0;
            this.current_frame = 0;
            this.start_time = 0;
            this.paused_time = 0;
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    };
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     */
    Timeline.prototype.tick = function (timestamp) {
        if (this.b_sequence_started) {
            if (!this.start_time) {
                this.start_time = timestamp;
                this.last_tick = -this.tick_time;
            }
            var currentTime = timestamp - this.start_time;
            var elapsed = currentTime - this.last_tick;
            if (elapsed >= this.tick_time) {
                this.calculateFPS(1 / (elapsed / 1000));
                this.last_tick = currentTime;
                this.current_time = (currentTime - (elapsed % this.tick_time)) % this.sequence.duration;
                this.current_frame = this.getFrameAtTime(this.current_time);
                this.dispatch('timeline:progress', {
                    current_frame: this.current_frame,
                    current_time: this.current_time,
                    fps: this.fps,
                });
                return true;
            }
        }
        return false;
    };
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     */
    Timeline.prototype.calculateFPS = function (currentFPS) {
        var samples = this.fps_samples.length;
        if (samples > 0) {
            var average = 0;
            for (var i = 0; i < samples; i++)
                average += this.fps_samples[i];
            this.fps = Math.round(average / samples);
        }
        this.fps_samples[this.fps_samples_index] = Math.round(currentFPS);
        this.fps_samples_index = (this.fps_samples_index + 1) % this.fps_samples_size;
    };
    //#endregion
    //#region Frame and Time
    /**
     * Return current animation frame
     *
     * @returns {number}
     */
    Timeline.prototype.getCurrentFrame = function () {
        return this.current_frame;
    };
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     */
    Timeline.prototype.getFrameTime = function (frame) {
        frame = (0,_core_math__WEBPACK_IMPORTED_MODULE_0__.pmod)(frame, this.sequence.frames);
        return (frame * this.tick_time) % this.sequence.duration;
    };
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     */
    Timeline.prototype.getFrameAtTime = function (time) {
        return Math.round((time % this.sequence.duration) / this.tick_time);
    };
    /**
     * set current frame
     *
     * @param {number} frame
     */
    Timeline.prototype.setFrame = function (frame) {
        this.current_frame = (0,_core_math__WEBPACK_IMPORTED_MODULE_0__.pmod)(frame, this.sequence.frames);
        this.current_time = this.getFrameTime(this.current_frame);
        this.dispatch('timeline:progress', {
            current_frame: this.current_frame,
            current_time: this.current_time,
            fps: this.fps,
        });
    };
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     */
    Timeline.prototype.getTickTime = function () {
        return this.tick_time;
    };
    /**
     * Return the current time
     *
     * @returns {number}
     */
    Timeline.prototype.getTime = function () {
        return this.current_time;
    };
    /**
     * Set animation at time
     *
     * @param {number} time
     */
    Timeline.prototype.setTime = function (time) {
        time = (0,_core_math__WEBPACK_IMPORTED_MODULE_0__.pmod)(time, this.sequence.duration);
        this.current_time = time;
        this.current_frame = this.getFrameAtTime(time);
        this.dispatch('timeline:progress', {
            current_frame: this.current_frame,
            current_time: this.current_time,
            fps: this.fps,
        });
    };
    /**
     * Animation status started
     * @internal
     */
    Timeline.START = 'start';
    /**
     * Animation status paused
     * @internal
     */
    Timeline.PAUSE = 'pause';
    /**
     * Animation status stop
     * @internal
     */
    Timeline.STOP = 'stop';
    return Timeline;
}(_events_Emitter__WEBPACK_IMPORTED_MODULE_1__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);
//# sourceMappingURL=Timeline.js.map

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! namespace exports */
/*! export ARRAY_TYPE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export EPSILON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RANDOM [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setMatrixArrayType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRadian [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => /* binding */ EPSILON,
/* harmony export */   "ARRAY_TYPE": () => /* binding */ ARRAY_TYPE,
/* harmony export */   "RANDOM": () => /* binding */ RANDOM,
/* harmony export */   "setMatrixArrayType": () => /* binding */ setMatrixArrayType,
/* harmony export */   "toRadian": () => /* binding */ toRadian,
/* harmony export */   "equals": () => /* binding */ equals
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export adjoint [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clone [provided] [no usage info] [missing usage info prevents renaming] */
/*! export copy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! export determinant [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export exactEquals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export frob [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromQuat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromQuat2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslationScale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromRotationTranslationScaleOrigin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromScaling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromXRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromYRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromZRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export frustum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRotation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getScaling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTranslation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export identity [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invert [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lookAt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mul [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiplyScalar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiplyScalarAndAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ortho [provided] [no usage info] [missing usage info prevents renaming] */
/*! export perspective [provided] [no usage info] [missing usage info prevents renaming] */
/*! export perspectiveFromFieldOfView [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateZ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export str [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! export targetTo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export translate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transpose [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "transpose": () => /* binding */ transpose,
/* harmony export */   "invert": () => /* binding */ invert,
/* harmony export */   "adjoint": () => /* binding */ adjoint,
/* harmony export */   "determinant": () => /* binding */ determinant,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "fromTranslation": () => /* binding */ fromTranslation,
/* harmony export */   "fromScaling": () => /* binding */ fromScaling,
/* harmony export */   "fromRotation": () => /* binding */ fromRotation,
/* harmony export */   "fromXRotation": () => /* binding */ fromXRotation,
/* harmony export */   "fromYRotation": () => /* binding */ fromYRotation,
/* harmony export */   "fromZRotation": () => /* binding */ fromZRotation,
/* harmony export */   "fromRotationTranslation": () => /* binding */ fromRotationTranslation,
/* harmony export */   "fromQuat2": () => /* binding */ fromQuat2,
/* harmony export */   "getTranslation": () => /* binding */ getTranslation,
/* harmony export */   "getScaling": () => /* binding */ getScaling,
/* harmony export */   "getRotation": () => /* binding */ getRotation,
/* harmony export */   "fromRotationTranslationScale": () => /* binding */ fromRotationTranslationScale,
/* harmony export */   "fromRotationTranslationScaleOrigin": () => /* binding */ fromRotationTranslationScaleOrigin,
/* harmony export */   "fromQuat": () => /* binding */ fromQuat,
/* harmony export */   "frustum": () => /* binding */ frustum,
/* harmony export */   "perspective": () => /* binding */ perspective,
/* harmony export */   "perspectiveFromFieldOfView": () => /* binding */ perspectiveFromFieldOfView,
/* harmony export */   "ortho": () => /* binding */ ortho,
/* harmony export */   "lookAt": () => /* binding */ lookAt,
/* harmony export */   "targetTo": () => /* binding */ targetTo,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "frob": () => /* binding */ frob,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiplyScalar": () => /* binding */ multiplyScalar,
/* harmony export */   "multiplyScalarAndAdd": () => /* binding */ multiplyScalarAndAdd,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "sub": () => /* binding */ sub
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
;
/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export angle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ceil [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clone [provided] [no usage info] [missing usage info prevents renaming] */
/*! export copy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cross [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export distance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export div [provided] [no usage info] [missing usage info prevents renaming] */
/*! export divide [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export exactEquals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export floor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEach [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inverse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export len [provided] [no usage info] [missing usage info prevents renaming] */
/*! export length [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lerp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mul [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export negate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export random [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export round [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scaleAndAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sqrDist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sqrLen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squaredDistance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squaredLength [provided] [no usage info] [missing usage info prevents renaming] */
/*! export str [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat2d [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zero [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "ceil": () => /* binding */ ceil,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "scaleAndAdd": () => /* binding */ scaleAndAdd,
/* harmony export */   "distance": () => /* binding */ distance,
/* harmony export */   "squaredDistance": () => /* binding */ squaredDistance,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "squaredLength": () => /* binding */ squaredLength,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "inverse": () => /* binding */ inverse,
/* harmony export */   "normalize": () => /* binding */ normalize,
/* harmony export */   "dot": () => /* binding */ dot,
/* harmony export */   "cross": () => /* binding */ cross,
/* harmony export */   "lerp": () => /* binding */ lerp,
/* harmony export */   "random": () => /* binding */ random,
/* harmony export */   "transformMat2": () => /* binding */ transformMat2,
/* harmony export */   "transformMat2d": () => /* binding */ transformMat2d,
/* harmony export */   "transformMat3": () => /* binding */ transformMat3,
/* harmony export */   "transformMat4": () => /* binding */ transformMat4,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "angle": () => /* binding */ angle,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "len": () => /* binding */ len,
/* harmony export */   "sub": () => /* binding */ sub,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "div": () => /* binding */ div,
/* harmony export */   "dist": () => /* binding */ dist,
/* harmony export */   "sqrDist": () => /* binding */ sqrDist,
/* harmony export */   "sqrLen": () => /* binding */ sqrLen,
/* harmony export */   "forEach": () => /* binding */ forEach
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
;
/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export angle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export bezier [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ceil [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clone [provided] [no usage info] [missing usage info prevents renaming] */
/*! export copy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cross [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export distance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export div [provided] [no usage info] [missing usage info prevents renaming] */
/*! export divide [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export equals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export exactEquals [provided] [no usage info] [missing usage info prevents renaming] */
/*! export floor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export forEach [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fromValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hermite [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inverse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export len [provided] [no usage info] [missing usage info prevents renaming] */
/*! export length [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lerp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export max [provided] [no usage info] [missing usage info prevents renaming] */
/*! export min [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mul [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export negate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export random [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateZ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export round [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export scaleAndAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export set [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sqrDist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sqrLen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squaredDistance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squaredLength [provided] [no usage info] [missing usage info prevents renaming] */
/*! export str [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat3 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformMat4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transformQuat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zero [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "ceil": () => /* binding */ ceil,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "scaleAndAdd": () => /* binding */ scaleAndAdd,
/* harmony export */   "distance": () => /* binding */ distance,
/* harmony export */   "squaredDistance": () => /* binding */ squaredDistance,
/* harmony export */   "squaredLength": () => /* binding */ squaredLength,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "inverse": () => /* binding */ inverse,
/* harmony export */   "normalize": () => /* binding */ normalize,
/* harmony export */   "dot": () => /* binding */ dot,
/* harmony export */   "cross": () => /* binding */ cross,
/* harmony export */   "lerp": () => /* binding */ lerp,
/* harmony export */   "hermite": () => /* binding */ hermite,
/* harmony export */   "bezier": () => /* binding */ bezier,
/* harmony export */   "random": () => /* binding */ random,
/* harmony export */   "transformMat4": () => /* binding */ transformMat4,
/* harmony export */   "transformMat3": () => /* binding */ transformMat3,
/* harmony export */   "transformQuat": () => /* binding */ transformQuat,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "angle": () => /* binding */ angle,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "sub": () => /* binding */ sub,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "div": () => /* binding */ div,
/* harmony export */   "dist": () => /* binding */ dist,
/* harmony export */   "sqrDist": () => /* binding */ sqrDist,
/* harmony export */   "len": () => /* binding */ len,
/* harmony export */   "sqrLen": () => /* binding */ sqrLen,
/* harmony export */   "forEach": () => /* binding */ forEach
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
;
/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/simplex-noise/simplex-noise.js":
/*!*****************************************************!*\
  !*** ./node_modules/simplex-noise/simplex-noise.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 470:4-18 */
/***/ ((module, exports, __webpack_require__) => {

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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rng
/* harmony export */ });
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

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
;
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

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
;
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
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)();

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

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");
;

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./dist/index-light.js");
/******/ })()
;
});
//# sourceMappingURL=urpflanze-light.js.map