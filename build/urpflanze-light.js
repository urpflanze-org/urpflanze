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
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");



/**
 * @internal
 * @ignore
 */
const noises = {
    random: new simplex_noise__WEBPACK_IMPORTED_MODULE_0___default.a(Math.random),
};
/**
 * Utilities function passed to <a href="[base_url]/ISceneChildPropArguments">ISceneChildPropArguments</a>
 *
 * @category Core.Utilities
 * @example
 * ```javascript
 * const circle = new Urpflanze.Circle({
 * 	distance: ({ context, repetition }) => context.noise('seed', repetition.current_index) * 200
 * })
 * ```
 */
const Context = {
    /**
     * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
     * Return value between -1 and 1
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
     * Return angle (atan) from offset (or center) for matrix repetition.
     * Offset is array between [-1, -1] and [1, 1].
     * The return value is bettween -Math.PI / 2 and Math.PI / 2
     *
     * @param {IRepetition} repetition
     * @param {vec2} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const center_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec2"].fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            center_matrix[0] += center_matrix[0] * offsetFromCenter[0];
            center_matrix[1] += center_matrix[1] * offsetFromCenter[1];
            const x = repetition.col.index - 1 - center_matrix[0];
            const y = repetition.row.index - 1 - center_matrix[1];
            return x === 0 ? 0 : Math.atan(y / x);
        }
        return repetition.angle;
    },
    /**
     * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
     * Offset is array between [-1, -1] and [1, 1].
     * The return value is bettween -Math.PI an Math.PI
     *
     * @param {IRepetition} repetition
     * @param {vec2} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const center_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec2"].fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            center_matrix[0] += center_matrix[0] * offsetFromCenter[0];
            center_matrix[1] += center_matrix[1] * offsetFromCenter[1];
            const x = repetition.col.index - 1 - center_matrix[0];
            const y = repetition.col.index - 1 - center_matrix[1];
            return x === 0 ? 0 : Math.atan2(y, x);
        }
        return repetition.angle;
    },
    /**
     * Return distance from offset (or center) for matrix repetition.
     * The return value is between 0 and 1
     *
     * @param {IRepetition} repetition
     * @param {vec2} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix) {
            const center_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec2"].fromValues(0.5, 0.5);
            center_matrix[0] += center_matrix[0] * offsetFromCenter[0];
            center_matrix[1] += center_matrix[1] * offsetFromCenter[1];
            const current = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec2"].fromValues(repetition.col.offset - 0.5 / repetition.col.count, repetition.row.offset - 0.5 / repetition.row.count);
            return gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec2"].distance(current, center_matrix);
        }
        return 1;
    },
    /**
     * Get value percentage of scene width.
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percW: (percentage, sceneChild) => {
        return sceneChild && sceneChild.scene ? (sceneChild.scene.width * percentage) / 100 : percentage;
    },
    /**
     * Get value percentage of scene height.
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
/* harmony import */ var _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/ShapePrimitive */ "./dist/core/shapes/ShapePrimitive.js");




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
        ['id', 'name', 'data', 'order', 'type'].forEach((prop) => {
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
    /**
     * Add iitem to Group
     *
     * @param {SceneChild} item
     * @memberof Group
     */
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
    getBounding(bDirectSceneChild) {
        const boundings = [];
        const bounding = Object.assign({}, _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_3__["default"].EMPTY_BOUNDING);
        if (this.children.length > 0) {
            this.children.forEach(item => boundings.push(item.getBounding(bDirectSceneChild)));
            for (let i = 0, len = this.children.length; i < len; i++) {
                bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x;
                bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y;
                bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width;
                bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height;
            }
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        return bounding;
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
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key, value) {
        super.setPropUnsafe(key, value);
        this.children.forEach(item => item.setPropUnsafe(key, value));
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
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer() {
        const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined);
        return [].concat.apply([], indexed);
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



/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     * You can see the default values ​​in the property definitions
     */
    constructor(settings = {}) {
        /**
         * Logical number, the drawer will take care
         * of defining the unit of measure
         */
        this.width = 400;
        /**
         * Logical number, the drawer will take care
         * of defining the unit of measure
         */
        this.height = 400;
        /**
         * Default background color (black)
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         */
        this.mainColor = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
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
        this.center = [this.width / 2, this.height / 2];
    }
    /**
     * Resize the scene size
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width, height = width) {
        this.width = width;
        this.height = height;
        this.center = [this.width / 2, this.height / 2];
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
            sceneChild.getChildren().forEach((item) => {
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
 * Preserve props, drawing order, generate and return buffers.
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

/***/ "./dist/core/math/gl-matrix-extensions.js":
/*!************************************************!*\
  !*** ./dist/core/math/gl-matrix-extensions.js ***!
  \************************************************/
/*! exports provided: VEC3_ZERO, VEC3_ONE, VEC2_ZERO, VEC2_ONE, fromSkew, toVec2, toVec3, squeezeX, squeezeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEC3_ZERO", function() { return VEC3_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEC3_ONE", function() { return VEC3_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEC2_ZERO", function() { return VEC2_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VEC2_ONE", function() { return VEC2_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromSkew", function() { return fromSkew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toVec2", function() { return toVec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toVec3", function() { return toVec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squeezeX", function() { return squeezeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squeezeY", function() { return squeezeY; });
const VEC3_ZERO = [0, 0, 0];
const VEC3_ONE = [1, 1, 1];
const VEC2_ZERO = [0, 0];
const VEC2_ONE = [1, 1];
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
function toVec2(x) {
    if (Array.isArray(x))
        return [x[0], x[1]];
    return [x, x];
}
function toVec3(x, defaultZValue = 0) {
    if (Array.isArray(x))
        return [x[0], x[1], defaultZValue];
    return [x, x, defaultZValue];
}
const squeezeX = (vec, m) => {
    vec[1] += vec[1] * (vec[0] * -m);
};
const squeezeY = (vec, m) => {
    vec[0] += vec[0] * (vec[1] * m);
};
//# sourceMappingURL=gl-matrix-extensions.js.map

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
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
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
            // this.bounding = this.shape.getBounding()
            return this.shape.getBuffer() || Shape.EMPTY_BUFFER;
        }
        return Shape.EMPTY_BUFFER;
    }
    addIndex(frame_length, repetition) {
        if (this.shape) {
            const indexed_buffer = this.indexed_buffer;
            const child_indexed_buffer = this.shape.getIndexedBuffer() || [];
            const parent = {
                shape: this,
                frame_length,
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
            for (let i = 0, len = child_indexed_buffer.length; i < len; i++) {
                const current_indexed = child_indexed_buffer[i];
                current_indexed.parent = parent;
                indexed_buffer.push(current_indexed);
            }
        }
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
    getBounding(bDirectSceneChild) {
        if (this.shape) {
            return this.shape.getBounding(false);
        }
        return this.bounding;
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
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
/* harmony import */ var _types_scene_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/scene-child */ "./dist/core/types/scene-child.js");
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SceneChild */ "./dist/core/SceneChild.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context */ "./dist/core/Context.js");
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/gl-matrix-extensions */ "./dist/core/math/gl-matrix-extensions.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");






gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].setMatrixArrayType(Array);
const tmp_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
const transform_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
const perspective_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
const repetition_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
class ShapeBase extends _SceneChild__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * Creates an instance of ShapeBase
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
         * @internal
         * @ignore
         */
        this.generate_id = -1;
        /**
         * Flag used to determine if indexed_buffer has been generated
         *
         * @internal
         * @ignore
         */
        this.bIndexed = false;
        this.bounding = {
            cx: 0,
            cy: 0,
            x: -1,
            y: -1,
            width: 2,
            height: 2,
        };
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
            transformOrigin: settings.transformOrigin,
            perspective: settings.perspective,
            perspectiveOrigin: settings.perspectiveOrigin,
        };
        this.bUseParent = !!settings.bUseParent;
        this.vertexCallback = settings.vertexCallback;
    }
    /**
     * Check if the shape should be generated every time
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
            typeof props.transformOrigin !== 'function');
    }
    /**
     * Check if the indexed_buffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
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
        if (bClearIndexed) {
            this.bIndexed = false;
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    }
    /**
     * Update the vertex array if the shape is not static and update the indexed_buffer if it is also not static
     *
     * @param {number} generate_id generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof ShapeBase
     */
    generate(generate_id, bDirectSceneChild = false, parent_prop_arguments) {
        var _a, _b, _c;
        if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent)))) {
            return;
        }
        this.generate_id = generate_id;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexed_buffer = [];
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        const repetition = ShapeBase.getEmptyRepetition();
        const repetitions = this.getProp('repetitions', { parent: parent_prop_arguments, repetition, time: 1, context: _Context__WEBPACK_IMPORTED_MODULE_3__["default"] }, 1);
        const repetition_type = Array.isArray(repetitions) ? _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix : _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Ring;
        const repetition_count = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
        const repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        const col_repetition = repetition.col;
        col_repetition.count = repetition_col_count;
        const row_repetition = repetition.row;
        row_repetition.count = repetition_row_count;
        repetition.count = repetition_count;
        repetition.col.count = repetition_col_count;
        repetition.row.count = repetition_row_count;
        repetition.type = repetition_type;
        const prop_arguments = {
            repetition,
            context: _Context__WEBPACK_IMPORTED_MODULE_3__["default"],
            time: ((_c = this.scene) === null || _c === void 0 ? void 0 : _c.current_time) || 0,
            shape: this,
            data: this.data,
            parent: parent_prop_arguments,
        };
        let total_buffer_length = 0;
        const buffers = [];
        let current_index = 0;
        const center_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec2"].fromValues((repetition_col_count - 1) / 2, (repetition_row_count - 1) / 2);
        const sceneCenter = [this.scene.center[0], this.scene.center[1], 0];
        for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
            for (let current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                repetition.index = current_index + 1;
                repetition.offset = repetition.index / repetition.count;
                repetition.angle =
                    repetition_type === _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0;
                col_repetition.index = current_col_repetition + 1;
                col_repetition.offset = col_repetition.index / col_repetition.count;
                row_repetition.index = current_row_repetition + 1;
                row_repetition.offset = row_repetition.index / row_repetition.count;
                // Generate primitives buffer recursively
                const buffer = this.generateBuffer(generate_id, prop_arguments);
                const buffer_length = buffer.length;
                const bounding = this.getBounding(bDirectSceneChild);
                buffers[current_index] = new Float32Array(buffer_length);
                total_buffer_length += buffer_length;
                {
                    const distance = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["toVec2"](this.getProp('distance', prop_arguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC2_ONE"]));
                    const displace = this.getProp('displace', prop_arguments, 0);
                    const scale = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["toVec3"](this.getProp('scale', prop_arguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC2_ONE"]), 1);
                    const translate = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["toVec3"](this.getProp('translate', prop_arguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC2_ZERO"]), 0);
                    const skewX = this.getProp('skewX', prop_arguments, 0);
                    const skewY = this.getProp('skewY', prop_arguments, 0);
                    const squeezeX = this.getProp('squeezeX', prop_arguments, 0);
                    const squeezeY = this.getProp('squeezeY', prop_arguments, 0);
                    const rotateX = this.getProp('rotateX', prop_arguments, 0);
                    const rotateY = this.getProp('rotateY', prop_arguments, 0);
                    const rotateZ = this.getProp('rotateZ', prop_arguments, 0);
                    const perspectiveProp = Object(_Utilites__WEBPACK_IMPORTED_MODULE_5__["clamp"])(0, 1, this.getProp('perspective', prop_arguments, 0));
                    const perspectiveOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["toVec3"](this.getProp('perspectiveOrigin', prop_arguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC2_ZERO"]), 0);
                    const transformOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["toVec3"](this.getProp('transformOrigin', prop_arguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC2_ZERO"]), 0);
                    let offset;
                    switch (repetition_type) {
                        case _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Ring:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].fromValues(distance[0], 0, 0);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].rotateZ(offset, offset, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["VEC3_ZERO"], repetition.angle + displace);
                            break;
                        case _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Matrix:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].fromValues(distance[0] * (current_col_repetition - center_matrix[0]), distance[1] * (current_row_repetition - center_matrix[1]), 0);
                            break;
                    }
                    const perspectiveSize = perspectiveProp > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1;
                    const perspective = perspectiveProp > 0 ? perspectiveSize + (1 - perspectiveProp) * (perspectiveSize * 10) : 0;
                    const bTransformOrigin = perspective !== 0 || transformOrigin[0] !== 0 || transformOrigin[1] !== 0;
                    const bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0;
                    if (bTransformOrigin) {
                        transformOrigin[0] *= bounding.width / 2;
                        transformOrigin[1] *= bounding.height / 2;
                        transformOrigin[2] = perspective;
                    }
                    /**
                     * Create Transformation matrix
                     */
                    {
                        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(transform_matrix);
                        // transform origin
                        bTransformOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(transform_matrix, transform_matrix, transformOrigin);
                        // scale
                        if (scale[0] !== 1 || scale[1] !== 1)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].scale(transform_matrix, transform_matrix, scale);
                        // skew
                        if (skewX !== 0 || skewY !== 0) {
                            _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["fromSkew"](tmp_matrix, [skewX, skewY]);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].multiply(transform_matrix, transform_matrix, tmp_matrix);
                        }
                        // rotateX
                        rotateX !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateX(transform_matrix, transform_matrix, rotateX);
                        //rotateY
                        rotateY !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateY(transform_matrix, transform_matrix, rotateY);
                        //rotateZ
                        rotateZ !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateZ(transform_matrix, transform_matrix, rotateZ);
                        // reset origin
                        bTransformOrigin &&
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(transform_matrix, transform_matrix, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scale(transformOrigin, transformOrigin, -1));
                        // translation
                        if (translate[0] !== 0 || translate[1] !== 0)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(transform_matrix, transform_matrix, translate);
                        /**
                         * Create Repetition matrix
                         */
                        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(repetition_matrix);
                        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(repetition_matrix, repetition_matrix, offset);
                        if (bDirectSceneChild) {
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].translate(repetition_matrix, repetition_matrix, sceneCenter);
                        }
                        if (repetition_type === _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Ring)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].rotateZ(repetition_matrix, repetition_matrix, repetition.angle + displace);
                        /**
                         * Create Perspective matrix
                         */
                        if (perspective > 0) {
                            if (bPerspectiveOrigin) {
                                perspectiveOrigin[0] *= bounding.width / 2;
                                perspectiveOrigin[1] *= bounding.height / 2;
                                perspectiveOrigin[2] = 0;
                            }
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].perspective(perspective_matrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                    }
                    // Apply matrices on vertex
                    for (let buffer_index = 0; buffer_index < buffer_length; buffer_index += 2) {
                        const vertex = [buffer[buffer_index], buffer[buffer_index + 1], perspective];
                        {
                            squeezeX !== 0 && _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["squeezeX"](vertex, squeezeX);
                            squeezeY !== 0 && _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_4__["squeezeY"](vertex, squeezeY);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformMat4(vertex, vertex, transform_matrix);
                            if (perspective > 0) {
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(vertex, vertex, perspectiveOrigin);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformMat4(vertex, vertex, perspective_matrix);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scale(vertex, vertex, perspective);
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(vertex, vertex, perspectiveOrigin);
                            }
                            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformMat4(vertex, vertex, repetition_matrix);
                            if (this.vertexCallback) {
                                const index = buffer_index / 2 + 1;
                                const count = buffer_length / 2;
                                this.vertexCallback(vertex, prop_arguments, {
                                    index,
                                    count,
                                    offset: index / count,
                                });
                            }
                        }
                        buffers[current_index][buffer_index] = vertex[0];
                        buffers[current_index][buffer_index + 1] = vertex[1];
                        if (vertex[0] >= maxX)
                            maxX = vertex[0];
                        else if (vertex[0] <= minX)
                            minX = vertex[0];
                        if (vertex[1] >= maxY)
                            maxY = vertex[1];
                        else if (vertex[1] <= minY)
                            minY = vertex[1];
                    }
                }
                // After buffer creation, add a frame into indexed_buffer if not static
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(buffer_length, repetition);
                }
            }
        }
        this.bounding.x = minX;
        this.bounding.y = minY;
        this.bounding.width = maxX - minX;
        this.bounding.height = maxY - minY;
        this.bounding.cx = this.bounding.x - this.bounding.width / 2;
        this.bounding.cy = this.bounding.y - this.bounding.height / 2;
        this.buffer = new Float32Array(total_buffer_length);
        for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        this.bIndexed = true;
    }
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
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof ShapeBase
     */
    getIndexedBuffer() {
        return this.indexed_buffer;
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
                    context: _Context__WEBPACK_IMPORTED_MODULE_3__["default"],
                    time: 0,
                    parent: current_indexing.parent,
                    data: current_indexing.shape.data,
                };
                const fillColor = current_indexing.shape.getProp('fillColor', prop_arguments);
                const strokeColor = current_indexing.shape.getProp('strokeColor', prop_arguments, typeof fillColor !== 'undefined' ? undefined : this.scene.mainColor);
                const lineWidth = current_indexing.shape.getProp('lineWidth', prop_arguments, typeof fillColor !== 'undefined' && typeof strokeColor === 'undefined' ? undefined : 1);
                const streamArguments = {
                    buffer: this.buffer,
                    frame_length: current_indexing.frame_length,
                    frame_buffer_index: j,
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    current_shape_index: i,
                    total_shapes: len,
                    lineWidth: lineWidth,
                    strokeColor: strokeColor,
                    fillColor: fillColor,
                };
                callback(streamArguments);
                j += current_indexing.frame_length;
            }
        }
    }
}
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
ShapeBase.getEmptySimpleRepetition = () => ({
    index: 1,
    offset: 1,
    count: 1,
});
/**
 * Empty Repetition
 *
 * @internal
 * @ignore
 */
ShapeBase.getEmptyRepetition = () => (Object.assign(Object.assign({ type: _types_scene_child__WEBPACK_IMPORTED_MODULE_1__["ERepetitionType"].Ring, angle: 0 }, ShapeBase.getEmptySimpleRepetition()), { row: ShapeBase.getEmptySimpleRepetition(), col: ShapeBase.getEmptySimpleRepetition() }));
/**
 * Empty Prop Arguments
 *
 * @internal
 * @ignore
 */
ShapeBase.EMPTY_PROP_ARGUMENTS = {
    time: 0,
    context: _Context__WEBPACK_IMPORTED_MODULE_3__["default"],
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
        var _a;
        settings.type = settings.type || 'ShapeBuffer';
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
        super(settings);
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else
            this.shape = Float32Array.from(settings.shape);
        this.bindBuffer();
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
        this.bindBuffer();
        // this.shape_buffer = ShapeBuffer.buffer2Dto3D(this.shape_buffer)
    }
    bindBuffer() {
        const shape_buffer = this.adaptMode !== _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None
            ? _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"].adaptBuffer(this.shape, this.adaptMode)
            : Float32Array.from(this.shape);
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, len = shape_buffer.length; i < len; i += 2) {
            shape_buffer[i] *= this.sideLength[0];
            shape_buffer[i + 1] *= this.sideLength[1];
            if (shape_buffer[i] >= maxX)
                maxX = shape_buffer[i];
            else if (shape_buffer[i] <= minX)
                minX = shape_buffer[i];
            if (shape_buffer[i + 1] >= maxY)
                maxY = shape_buffer[i + 1];
            else if (shape_buffer[i + 1] <= minY)
                minY = shape_buffer[i + 1];
        }
        this.single_bounding.x = minX;
        this.single_bounding.y = minY;
        this.single_bounding.width = maxX - minX;
        this.single_bounding.height = maxY - minY;
        this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
        this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
        this.shape_buffer = shape_buffer;
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
        if (this.bindSideLength(prop_arguments)) {
            this.bindBuffer();
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
    /**
     * Subdivide buffer n times
     *
     * @param {number} [level=1]
     * @memberof ShapeBuffer
     */
    subdivide(level = 1) {
        let subdivided = this.shape;
        if (subdivided && subdivided.length > 0) {
            for (let i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided, this.bCloseShape);
            this.setShape(subdivided);
        }
    }
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     * @memberof ShapeBuffer
     */
    static subdivide(shape, bClosed = true) {
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
        }
        if (bClosed) {
            subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2;
            subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2;
        }
        return subdivided;
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
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");



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
                inc: ShapeLoop.PI2 / 10,
                vertex: () => [0, 0],
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
        if (this.shapeLoopPropsDependencies.includes('vertexCallback') && typeof this.vertexCallback === 'function')
            return false;
        if (this.shapeLoopPropsDependencies.includes('prop_arguments'))
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
        // return (
        // 	typeof start !== 'function' && typeof end !== 'function' && typeof inc !== 'function' && super.isStaticIndexed()
        // )
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
        return this.getRepetitionCount() * repetition * 2; // vec3
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
        else if (typeof this.loop_buffer === 'undefined')
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
        const getVertex = (this.props.loop && this.props.loop.vertex
            ? this.props.loop.vertex
            : this.loop.vertex);
        const shape_loop = {
            index: 0,
            offset: 0,
            angle: 0,
            count: repetition,
        };
        const vertex_length = shape_loop.count;
        const buffer_length = vertex_length * 2;
        const loop_buffer = new Float32Array(buffer_length);
        const bNoAdapt = this.adaptMode === _types_shape_base__WEBPACK_IMPORTED_MODULE_2__["EShapePrimitiveAdaptMode"].None;
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
            const angle = start + inc * i;
            shape_loop.angle = angle >= end ? end : angle;
            shape_loop.index = i + 1;
            shape_loop.offset = shape_loop.index / shape_loop.count;
            const vertex = Float32Array.from(getVertex(shape_loop, prop_arguments));
            loop_buffer[j] = vertex[0];
            loop_buffer[j + 1] = vertex[1];
            if (bNoAdapt) {
                loop_buffer[j] *= this.sideLength[0];
                loop_buffer[j + 1] *= this.sideLength[1];
            }
            if (loop_buffer[j] >= maxX)
                maxX = loop_buffer[j];
            else if (loop_buffer[j] <= minX)
                minX = loop_buffer[j];
            if (loop_buffer[j + 1] >= maxY)
                maxY = loop_buffer[j + 1];
            else if (loop_buffer[j + 1] <= minY)
                minY = loop_buffer[j + 1];
        }
        this.single_bounding.x = minX;
        this.single_bounding.y = minY;
        this.single_bounding.width = maxX - minX;
        this.single_bounding.height = maxY - minY;
        this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
        this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
        if (!bNoAdapt) {
            /**
             * Adapt and apply side length
             */
            const buffer = _ShapePrimitive__WEBPACK_IMPORTED_MODULE_0__["default"].adaptBuffer(loop_buffer, this.adaptMode);
            minX = minY = Number.MAX_VALUE;
            maxX = maxY = Number.MIN_VALUE;
            for (let i = 0; i < buffer_length; i += 2) {
                buffer[i] = buffer[i] * this.sideLength[0];
                buffer[i + 1] = buffer[i + 1] * this.sideLength[1];
                if (buffer[i] >= maxX)
                    maxX = buffer[i];
                else if (buffer[i] <= minX)
                    minX = buffer[i];
                if (buffer[i + 1] >= maxY)
                    maxY = buffer[i + 1];
                else if (buffer[i + 1] <= minY)
                    minY = buffer[i + 1];
            }
            this.single_bounding.x = minX;
            this.single_bounding.y = minY;
            this.single_bounding.width = maxX - minX;
            this.single_bounding.height = maxY - minY;
            this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
            this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
            return buffer;
        }
        return loop_buffer;
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
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    setShape(loop) {
        this.setProp('loop', loop);
    }
}
ShapeLoop.PI2 = Math.PI * 2;
ShapeLoop.PId2 = Math.PI / 2;
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
/* harmony import */ var _types_shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/shape-base */ "./dist/core/types/shape-base.js");
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/gl-matrix-extensions */ "./dist/core/math/gl-matrix-extensions.js");



/**
 * @category Core.Abstract
 */
class ShapePrimitive extends _ShapeBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(settings = {}) {
        var _a, _b;
        super(settings);
        this.single_bounding = Object.assign({}, ShapePrimitive.EMPTY_BOUNDING);
        const sideLength = typeof settings.sideLength === 'number'
            ? [settings.sideLength, settings.sideLength]
            : Array.isArray(settings.sideLength)
                ? settings.sideLength
                : [50, 50];
        this.sideLength = sideLength;
        this.props.sideLength = settings.sideLength;
        this.props.fillColor = settings.fillColor;
        this.props.lineWidth = settings.lineWidth;
        this.props.strokeColor = settings.strokeColor;
        this.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
        this.bCloseShape = (_b = settings.bCloseShape) !== null && _b !== void 0 ? _b : true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic() {
        return typeof this.props.sideLength !== 'function' && super.isStatic();
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
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    bindSideLength(prop_arguments) {
        const sideLength = Object(_math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_2__["toVec2"])(this.getProp('sideLength', prop_arguments, [50, 50]));
        if (this.sideLength[0] !== sideLength[0] && this.sideLength[1] !== sideLength[1]) {
            this.sideLength = sideLength;
            return true;
        }
        return false;
    }
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    getBounding(bDirectSceneChild) {
        return bDirectSceneChild ? this.single_bounding : this.bounding;
    }
    /**
     * Add this to indexed_buffer
     *
     * @protected
     * @param {number} frame_length
     * @param {IRepetition} repetition
     * @memberof ShapePrimitive
     */
    addIndex(frame_length, repetition) {
        const indexed_buffer = this.indexed_buffer;
        indexed_buffer.push({
            shape: this,
            frame_length,
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
        });
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
     * Return adaptMode
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    getAdaptMode() {
        return this.adaptMode;
    }
    /**
     * Set adaptMode
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    adapt(adaptMode) {
        this.adaptMode = adaptMode;
        this.clearBuffer(true);
    }
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = Object.assign({}, ShapePrimitive.EMPTY_BOUNDING);
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
        bounding.x = minX;
        bounding.y = minY;
        bounding.width = maxX - minX;
        bounding.height = maxY - minY;
        bounding.cx = bounding.x - bounding.width / 2;
        bounding.cy = bounding.y - bounding.height / 2;
        return bounding;
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
    static adaptBuffer(input, mode, rect) {
        if (mode === _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None)
            return Float32Array.from(input);
        const output = new Float32Array(input.length);
        if (!rect) {
            rect = ShapePrimitive.getBounding(input);
        }
        let scale = rect.width >= 2 ||
            rect.height >= 2 ||
            (mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        let translateX = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Center ? rect.cx : 0;
        let translateY = mode >= _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
}
/**
 * Empty buffer bounding
 *
 * @static
 * @type {IShapeBounding}
 * @memberof ShapePrimitive
 */
ShapePrimitive.EMPTY_BOUNDING = {
    cx: 0,
    cy: 0,
    x: -1,
    y: -1,
    width: 2,
    height: 2,
};
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
        settings.type = 'Circle';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideLength']);
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
        super(settings);
        this.loop = {
            start: 0,
            end: _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2,
            inc: () => (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PId2,
            vertex: shape_loop_repetition => [Math.cos(shape_loop_repetition.angle), Math.sin(shape_loop_repetition.angle)],
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
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
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
        settings.type = 'Lissajous';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'wx',
            'wy',
            'wz',
            'sideLength',
        ]);
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
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
            vertex: (shape_loop_repetition, prop_arguments) => {
                const wx = this.getProp('wx', prop_arguments);
                const wy = this.getProp('wy', prop_arguments);
                const wz = this.getProp('wz', prop_arguments, 0);
                return wx == wy
                    ? [Math.cos(shape_loop_repetition.angle + wz), Math.sin(shape_loop_repetition.angle)]
                    : [Math.cos(wx * shape_loop_repetition.angle + wz), Math.sin(wy * shape_loop_repetition.angle)];
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
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
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
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
        super(settings, true);
        this.props.sideNumber = settings.sideNumber;
        this.loop = {
            start: 0,
            end: _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2,
            inc: (prop_arguments) => _ShapeLoop__WEBPACK_IMPORTED_MODULE_0__["default"].PI2 / this.getProp('sideNumber', prop_arguments, 5),
            vertex: shape_loop_repetition => {
                return [Math.cos(shape_loop_repetition.angle), Math.sin(shape_loop_repetition.angle)];
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
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].Scale;
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
            vertex: (shape_loop_repetition, prop_arguments) => {
                const k = this.getProp('n', prop_arguments) / this.getProp('d', prop_arguments);
                const f = Math.cos(k * shape_loop_repetition.angle);
                return [f * Math.cos(shape_loop_repetition.angle), f * Math.sin(shape_loop_repetition.angle)];
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
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : _types_shape_base__WEBPACK_IMPORTED_MODULE_1__["EShapePrimitiveAdaptMode"].None;
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
            vertex: (shape_loop_repetition, prop_arguments) => {
                const r = Spiral.getRFromTSpiralType(this.getProp('spiral', prop_arguments), shape_loop_repetition.angle);
                return [r * Math.cos(shape_loop_repetition.angle), r * Math.sin(shape_loop_repetition.angle)];
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
        settings.adaptMode = _types_shape_base__WEBPACK_IMPORTED_MODULE_0__["EShapePrimitiveAdaptMode"].None;
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
/*! exports provided: EShapePrimitiveAdaptMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShapePrimitiveAdaptMode", function() { return EShapePrimitiveAdaptMode; });
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
/*! exports provided: Scene, SceneChild, Group, Line, Triangle, Rect, RegularPolygon, Circle, Rose, Spiral, Lissajous, Shape, ShapePrimitive, ShapeLoop, ShapeBuffer, clamp, relativeClamp, toDegrees, toRadians, Context, DrawerCanvas, Animation */
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

/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Utilites */ "./dist/Utilites.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_15__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relativeClamp", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_15__["relativeClamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_15__["toDegrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_15__["toRadians"]; });

/* harmony import */ var _core_Context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/Context */ "./dist/core/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _core_Context__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _services_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/drawer-canvas/DrawerCanvas */ "./dist/services/drawer-canvas/DrawerCanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerCanvas", function() { return _services_drawer_canvas_DrawerCanvas__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _services_animation_Simple__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/animation/Simple */ "./dist/services/animation/Simple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _services_animation_Simple__WEBPACK_IMPORTED_MODULE_18__["default"]; });

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
            return createSimpleAnimationCallback(simpleAnimation, (props, v) => vCallback(props.repetition.index, v));
        }
        else {
            const from = new _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0___default.a(simpleAnimation.from);
            const to = new _pups_core_build_Models_Color_ColorManager__WEBPACK_IMPORTED_MODULE_0___default.a(simpleAnimation.to);
            const vCallback = simpleAnimation.colorTransitionMode == 'hue' ? interpolateColorHSL : interpolateColorRGB;
            return createSimpleAnimationCallback(simpleAnimation, (props, v) => {
                const a = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? to : from;
                const b = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? from : to;
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
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Scene */ "./dist/core/Scene.js");
/* harmony import */ var _timeline_Timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline/Timeline */ "./dist/services/timeline/Timeline.js");
/* harmony import */ var _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene-utilities/SceneUtilities */ "./dist/services/scene-utilities/SceneUtilities.js");
/* harmony import */ var _FrameBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameBuffer */ "./dist/services/drawer-canvas/FrameBuffer.js");
/* harmony import */ var _events_Emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/Emitter */ "./dist/services/events/Emitter.js");
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilites */ "./dist/Utilites.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");







/**
 *
 * @category Services
 * @class DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
class DrawerCanvas extends _events_Emitter__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(scene, canvasOrContainer, drawOptions = {}, ratio = undefined, resolution = 0, bBuffering = false) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        this.bBuffering = false;
        this.timeline = new _timeline_Timeline__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.resolution = resolution || (scene && scene.width ? scene.width : 0);
        this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        this.bBuffering = bBuffering;
        this.buffer = new _FrameBuffer__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
            _core_Scene__WEBPACK_IMPORTED_MODULE_0__["default"].walk((sceneChild) => {
                const props = sceneChild.data.props;
                Object.keys(props).forEach(name => {
                    _scene_utilities_SceneUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].setProp(sceneChild, name, props[name], this);
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
        const clearCanvas = this.drawOptions.clearCanvas || this.timeline.getCurrentFrame() <= 0;
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
            if (drawOptions.ghosts) {
                const ghostDrawOptions = Object.assign({}, drawOptions);
                const time = this.timeline.getTime();
                const sequenceEndTime = this.timeline.getSequenceEndTime();
                for (let i = 1; i <= ghostDrawOptions.ghosts; i++) {
                    const ghostTime = time -
                        (drawOptions.ghost_skip_function
                            ? drawOptions.ghost_skip_function(i)
                            : i * ((_b = drawOptions.ghost_skip_time) !== null && _b !== void 0 ? _b : 30));
                    ghostDrawOptions.clearCanvas = clearCanvas && i === 1;
                    ghostDrawOptions.ghost_index = i;
                    ghostDrawOptions.time =
                        ghostTime < 0
                            ? ghostTime + sequenceEndTime
                            : ghostTime > sequenceEndTime
                                ? ghostTime % sequenceEndTime
                                : ghostTime;
                    draw_time += DrawerCanvas.draw(this.scene, this.context, ghostDrawOptions, this.resolution);
                }
                drawOptions.clearCanvas = false;
            }
            draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution);
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
        const start_time = Object(_Utilites__WEBPACK_IMPORTED_MODULE_5__["now"])();
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
                const center = gl_matrix__WEBPACK_IMPORTED_MODULE_6__["vec2"].fromValues(size / 2, size / 2);
                for (let i = 0; i < simmetricLine; i++) {
                    const a = gl_matrix__WEBPACK_IMPORTED_MODULE_6__["vec2"].fromValues(-size, -size);
                    const b = gl_matrix__WEBPACK_IMPORTED_MODULE_6__["vec2"].fromValues(size * 2, size * 2);
                    const rotate = i * offset + Math.PI / 4;
                    gl_matrix__WEBPACK_IMPORTED_MODULE_6__["vec2"].rotate(a, a, center, rotate);
                    gl_matrix__WEBPACK_IMPORTED_MODULE_6__["vec2"].rotate(b, b, center, rotate);
                    context.beginPath();
                    context.strokeStyle = scene.mainColor;
                    context.lineWidth = 1;
                    context.moveTo((a[0] - size / 2) * final_scale[0] + final_translate[0], (a[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.lineTo((b[0] - size / 2) * final_scale[0] + final_translate[0], (b[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.stroke();
                }
            }
            let logFillColorWarn = false;
            let logStrokeColorWarn = false;
            scene.stream(({ lineWidth, strokeColor, fillColor, shape, buffer, frame_length, frame_buffer_index }) => {
                if (shape.data && (shape.data.visible === false || (bGhost && shape.data.disableGhost === true)))
                    return;
                context.beginPath();
                context.moveTo((buffer[frame_buffer_index] - width / 2) * final_scale[0] + final_translate[0], (buffer[frame_buffer_index + 1] - height / 2) * final_scale[1] + final_translate[1]);
                for (let i = 2; i < frame_length; i += 2) {
                    context.lineTo((buffer[frame_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0], (buffer[frame_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1]);
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
                        else if (!logFillColorWarn) {
                            console.warn(`[Urpflanze:DrawerCanvas] Unable ghost fill color '${fillColor}', 
							please enter a rgba or hsla color`);
                            logFillColorWarn = true;
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
                        else if (!logStrokeColorWarn) {
                            console.warn(`[Urpflanze:DrawerCanvas] Unable ghost stroke color '${fillColor}', 
							please enter a rgba or hsla color`);
                            logStrokeColorWarn = true;
                        }
                        lineWidth *= ghostMultiplier;
                    }
                    context.lineWidth = fixedLineWidth ? lineWidth : lineWidth * scale;
                    context.strokeStyle = strokeColor;
                    context.stroke();
                }
            });
        }
        const end_time = Object(_Utilites__WEBPACK_IMPORTED_MODULE_5__["now"])();
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
// @ts-ignore
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
    // rotationOrigin: {
    // 	animable: true,
    // 	name: 'rotationOrigin',
    // 	label: 'Rotation Origin',
    // 	type: 'multiple-range',
    // 	min: -1,
    // 	max: 1,
    // 	step: 0.01,
    // 	default: [1, 1],
    // 	default_animate: [-1, 1],
    // 	transformation: 'none',
    // },
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
    adaptMode: {
        name: 'adaptMode',
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
            props.adaptMode = sceneChild.adaptMode;
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
            if (sceneChild instanceof _core_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_16__["default"] && _ScenePropUtilities__WEBPACK_IMPORTED_MODULE_18__["default"].bValueVertexCallback(value)) {
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
                sceneChild.adapt(value);
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

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
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

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
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
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
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
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
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
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
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
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
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
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
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
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
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
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
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

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
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

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
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
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
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
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
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

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
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

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, getAngle, multiply, rotateX, rotateY, rotateZ, calculateW, exp, ln, pow, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ln", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
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
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
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
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
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
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
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
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
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
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
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

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
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
      stride = 4;
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
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

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