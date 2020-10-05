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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index-light.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=urpflanze-light.js.map