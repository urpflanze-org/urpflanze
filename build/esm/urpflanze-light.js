/*!
 * @license UrpflanzeJS v"1.0.4"
 * urpflanze-light.js
 *
 * Github: https://github.com/urpflanze-org/urpflanze
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   "Group": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   "Line": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Line),
/* harmony export */   "Lissajous": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Lissajous),
/* harmony export */   "Modifier": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Modifier),
/* harmony export */   "Modifiers": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Modifiers),
/* harmony export */   "PHI": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.PHI),
/* harmony export */   "PI2": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.PI2),
/* harmony export */   "Polygon": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Polygon),
/* harmony export */   "Rect": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   "Rose": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Rose),
/* harmony export */   "Scene": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Scene),
/* harmony export */   "SceneChild": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.SceneChild),
/* harmony export */   "Shape": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   "ShapeBase": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapeBase),
/* harmony export */   "ShapeBuffer": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapeBuffer),
/* harmony export */   "ShapeFollow": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapeFollow),
/* harmony export */   "ShapeLoop": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapeLoop),
/* harmony export */   "ShapePrimitive": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapePrimitive),
/* harmony export */   "ShapeRecursive": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ShapeRecursive),
/* harmony export */   "Spiral": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Spiral),
/* harmony export */   "Star": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Star),
/* harmony export */   "SuperShape": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.SuperShape),
/* harmony export */   "Triangle": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Triangle),
/* harmony export */   "Vec2": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.Vec2),
/* harmony export */   "__esModule": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "angle2FromRepetition": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.angle2FromRepetition),
/* harmony export */   "angleFromRepetition": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.angleFromRepetition),
/* harmony export */   "clamp": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "distanceFromRepetition": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.distanceFromRepetition),
/* harmony export */   "distributePointsInBuffer": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.distributePointsInBuffer),
/* harmony export */   "interpolate": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.interpolate),
/* harmony export */   "lerp": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.lerp),
/* harmony export */   "log": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.log),
/* harmony export */   "mod": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.mod),
/* harmony export */   "noise": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.noise),
/* harmony export */   "now": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   "prepareBufferForInterpolation": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.prepareBufferForInterpolation),
/* harmony export */   "random": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.random),
/* harmony export */   "relativeClamp": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.relativeClamp),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.toRadians),
/* harmony export */   "Animation": () => (/* reexport module object */ _urpflanze_animation_dist_cjs__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "DrawerCanvas": () => (/* reexport safe */ _urpflanze_drawer_canvas_dist_cjs_browser_BrowserDrawerCanvas__WEBPACK_IMPORTED_MODULE_2__.BrowserDrawerCanvas)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _urpflanze_animation_dist_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _urpflanze_animation_dist_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_urpflanze_animation_dist_cjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _urpflanze_drawer_canvas_dist_cjs_browser_BrowserDrawerCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);



//# sourceMappingURL=modules-light.js.map

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Scene__WEBPACK_IMPORTED_MODULE_0__.Scene),
/* harmony export */   "__esModule": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Scene__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "SceneChild": () => (/* reexport safe */ _urpflanze_core_dist_cjs_SceneChild__WEBPACK_IMPORTED_MODULE_1__.SceneChild),
/* harmony export */   "Group": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Group__WEBPACK_IMPORTED_MODULE_2__.Group),
/* harmony export */   "ShapeBase": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_3__.ShapeBase),
/* harmony export */   "ShapePrimitive": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_4__.ShapePrimitive),
/* harmony export */   "ShapeLoop": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_5__.ShapeLoop),
/* harmony export */   "ShapeBuffer": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_6__.ShapeBuffer),
/* harmony export */   "Shape": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_Shape__WEBPACK_IMPORTED_MODULE_7__.Shape),
/* harmony export */   "ShapeRecursive": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_8__.ShapeRecursive),
/* harmony export */   "ShapeFollow": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_ShapeFollow__WEBPACK_IMPORTED_MODULE_9__.ShapeFollow),
/* harmony export */   "Line": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_10__.Line),
/* harmony export */   "Triangle": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_11__.Triangle),
/* harmony export */   "Rect": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_12__.Rect),
/* harmony export */   "Polygon": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_13__.Polygon),
/* harmony export */   "Circle": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_14__.Circle),
/* harmony export */   "Star": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Star__WEBPACK_IMPORTED_MODULE_15__.Star),
/* harmony export */   "Rose": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_16__.Rose),
/* harmony export */   "Spiral": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_17__.Spiral),
/* harmony export */   "Lissajous": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_18__.Lissajous),
/* harmony export */   "SuperShape": () => (/* reexport safe */ _urpflanze_core_dist_cjs_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_19__.SuperShape),
/* harmony export */   "Modifier": () => (/* reexport safe */ _urpflanze_core_dist_cjs_modifiers_Modifier__WEBPACK_IMPORTED_MODULE_20__.Modifier),
/* harmony export */   "Modifiers": () => (/* reexport safe */ _urpflanze_core_dist_cjs_modifiers__WEBPACK_IMPORTED_MODULE_21__.Modifiers),
/* harmony export */   "lerp": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.lerp),
/* harmony export */   "clamp": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.clamp),
/* harmony export */   "relativeClamp": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.relativeClamp),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.toRadians),
/* harmony export */   "now": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.now),
/* harmony export */   "noise": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.noise),
/* harmony export */   "random": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.random),
/* harmony export */   "angleFromRepetition": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.angleFromRepetition),
/* harmony export */   "angle2FromRepetition": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.angle2FromRepetition),
/* harmony export */   "distanceFromRepetition": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.distanceFromRepetition),
/* harmony export */   "interpolate": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.interpolate),
/* harmony export */   "prepareBufferForInterpolation": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.prepareBufferForInterpolation),
/* harmony export */   "distributePointsInBuffer": () => (/* reexport safe */ _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__.distributePointsInBuffer),
/* harmony export */   "Vec2": () => (/* reexport safe */ _urpflanze_core_dist_cjs_math_Vec2__WEBPACK_IMPORTED_MODULE_23__.default),
/* harmony export */   "PHI": () => (/* reexport safe */ _urpflanze_core_dist_cjs_math__WEBPACK_IMPORTED_MODULE_24__.PHI),
/* harmony export */   "PI2": () => (/* reexport safe */ _urpflanze_core_dist_cjs_math__WEBPACK_IMPORTED_MODULE_24__.PI2),
/* harmony export */   "log": () => (/* reexport safe */ _urpflanze_core_dist_cjs_math__WEBPACK_IMPORTED_MODULE_24__.log),
/* harmony export */   "mod": () => (/* reexport safe */ _urpflanze_core_dist_cjs_math__WEBPACK_IMPORTED_MODULE_24__.mod)
/* harmony export */ });
/* harmony import */ var _urpflanze_core_dist_cjs_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _urpflanze_core_dist_cjs_SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _urpflanze_core_dist_cjs_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_Shape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_ShapeFollow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Star__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48);
/* harmony import */ var _urpflanze_core_dist_cjs_shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(49);
/* harmony import */ var _urpflanze_core_dist_cjs_modifiers_Modifier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31);
/* harmony import */ var _urpflanze_core_dist_cjs_modifiers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50);
/* harmony import */ var _urpflanze_core_dist_cjs_Utilities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32);
/* harmony import */ var _urpflanze_core_dist_cjs_math_Vec2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(28);
/* harmony import */ var _urpflanze_core_dist_cjs_math__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(29);

























//# sourceMappingURL=core.js.map

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
const SceneChild_1 = __webpack_require__(4);
const Group_1 = __webpack_require__(5);
const Shape_1 = __webpack_require__(34);
const Utilities_1 = __webpack_require__(32);
/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Scene
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     * You can see the default values in the property definitions
     */
    constructor(settings = {}) {
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
        this.anchor =
            settings.anchor && Array.isArray(settings.anchor)
                ? [
                    typeof settings.anchor[0] === 'number'
                        ? (0.5 + Utilities_1.clamp(-1, 1, settings.anchor[0]) * 0.5) * this.width
                        : settings.anchor[0] === 'left'
                            ? 0
                            : settings.anchor[0] === 'right'
                                ? this.width
                                : this.center[0],
                    typeof settings.anchor[1] === 'number'
                        ? (0.5 + Utilities_1.clamp(-1, 1, settings.anchor[1]) * 0.5) * this.height
                        : settings.anchor[1] === 'top'
                            ? 0
                            : settings.anchor[1] === 'bottom'
                                ? this.height
                                : this.center[1],
                ]
                : [this.center[0], this.center[1]];
    }
    /**
     * Return width percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    getWidth(percentage = 100) {
        return (this.width * percentage) / 100;
    }
    /**
     * Return height percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    getHeight(percentage = 100) {
        return (this.height * percentage) / 100;
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
        const anchor = [this.width / this.anchor[0], this.height / this.anchor[1]];
        this.anchor = [this.width / anchor[0], this.height / anchor[1]];
        this.children.forEach(sceneChild => sceneChild.clearBuffer(true, false));
    }
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [atTime] time in ms
     * @memberof Scene
     */
    update(atTime = 0) {
        this.currentTime = atTime;
        for (let i = 0, len = this.children.length; i < len; i++) {
            this.children[i].generate(this.currentTime, true);
        }
    }
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {(streamArguments: IStreamArguments) => void} callback
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
     * Add SceneChild to Scene, pass `order` as last parameter for drawing priorities
     *
     * @param {Array<SceneChild>} items
     * @param {number} [order]
     * @memberof Scene
     */
    add(...items /**, order: number */) {
        const order = typeof items[items.length - 1] === 'number' ? items[items.length - 1] : undefined;
        const len = items.length - (typeof order === 'undefined' ? 0 : 1);
        for (let i = 0; i < len; i++) {
            const item = items[i];
            item.order =
                typeof order !== 'undefined'
                    ? order + i
                    : typeof item.order !== 'undefined'
                        ? item.order
                        : this.children.length > 0
                            ? Math.max.apply(this, this.children.map(e => e.order || 0)) + 1
                            : 0;
            Scene.propagateToChilden(item, this);
            this.children.push(item);
            item.clearBuffer(true, false);
            item.generate(0, true);
        }
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
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(idOrName) {
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(idOrName);
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
     * @param {number | number} idOrName
     * @memberof Scene
     */
    removeFromId(idOrName) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === idOrName || this.children[i].name === idOrName) {
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
            if (this.children[i].id === sceneChild.id)
                return true;
        const parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length === 1 && parents[0] instanceof Group_1.Group;
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
        if (current instanceof SceneChild_1.SceneChild) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof Shape_1.Shape && current.shape) {
                const tmpParents = parents.slice();
                tmpParents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmpParents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof Group_1.Group) {
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
        if (current instanceof SceneChild_1.SceneChild) {
            if (callback(current) === false)
                return false;
            if (current instanceof Shape_1.Shape && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof Group_1.Group) {
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
        if (sceneChild instanceof Group_1.Group) {
            sceneChild.getChildren().forEach((item) => {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof Shape_1.Shape && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    }
}
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneChild = void 0;
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
 * @category Scene
 * @order 2
 * @class SceneChild
 */
class SceneChild {
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     */
    constructor(settings) {
        var _a;
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @internal
         * @ignore
         */
        this.generateId = -1;
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
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        return null;
    }
    /**
     * Return the sceneChild properties
     *
     * @returns {Props}
     */
    getProps() {
        return this.props;
    }
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof Props} key
     * @param {PropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    getProp(key, propArguments, defaultValue) {
        var _a;
        return ((_a = this.props[key]) !== null && _a !== void 0 ? _a : defaultValue);
    }
    /**
     * Check SceneChild has prop
     *
     * @param {keyof Props} key
     * @returns
     */
    hasProp(key) {
        return typeof this.props[key] !== 'undefined';
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>)} key
     * @param {*} [value]
     */
    setPropUnsafe(key, value) {
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
    }
}
exports.SceneChild = SceneChild;
//# sourceMappingURL=SceneChild.js.map

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Group = void 0;
const Scene_1 = __webpack_require__(3);
const SceneChild_1 = __webpack_require__(4);
const ShapeBase_1 = __webpack_require__(6);
const Adapt_1 = __webpack_require__(30);
/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Scene.Containers
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
class Group extends SceneChild_1.SceneChild {
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
     * Add item to Group
     *
     * @param {Array<SceneChild>} items
     * @memberof Group
     */
    add(...items) {
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];
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
            this.scene && Scene_1.Scene.propagateToChilden(item, this.scene);
            this.children.push(item);
        }
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
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(idOrName);
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
     * @param {number} generateId
     * @param {boolean} [bDirectSceneChild=false]
     * @param {IPropArguments} [parentPropArguments]
     * @memberof Group
     */
    generate(generateId, bDirectSceneChild = false, parentPropArguments) {
        this.generateId = generateId;
        this.children.forEach(item => item.generate(generateId, bDirectSceneChild, parentPropArguments));
    }
    /**
     * Sum the children bounding
     *
     * @return {IShapeBounding}
     */
    getBounding() {
        const boundings = [];
        const bounding = Adapt_1.Bounding.empty();
        if (this.children.length > 0) {
            this.children.forEach(item => boundings.push(item.getBounding()));
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
     * @param {IPropArguments} propArguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(propArguments) {
        return this.children.map(sceneChild => sceneChild.getBufferLength(propArguments)).reduce((p, c) => p + c, 0);
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
        const size = buffers.reduce((currLength, buffer) => currLength + buffer.length, 0);
        if (size > 0) {
            const result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return ShapeBase_1.ShapeBase.EMPTY_BUFFER;
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
     * @param {(streamArguments: IStreamArguments) => void} callback
     * @memberof Group
     */
    stream(callback) {
        this.children.forEach(item => item.stream(callback));
    }
}
exports.Group = Group;
//# sourceMappingURL=Group.js.map

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeBase = void 0;
const gl_matrix_1 = __webpack_require__(7);
const types_1 = __webpack_require__(18);
const glme = __webpack_require__(27);
const Vec2_1 = __webpack_require__(28);
const math_1 = __webpack_require__(29);
const Adapt_1 = __webpack_require__(30);
const Utilities_1 = __webpack_require__(32);
const SceneChild_1 = __webpack_require__(4);
const tmpMatrix = gl_matrix_1.mat4.create();
const transformMatrix = gl_matrix_1.mat4.create();
const perspectiveMatrix = gl_matrix_1.mat4.create();
const repetitionMatrix = gl_matrix_1.mat4.create();
/**
 * Main class for shape generation
 *
 * @category Scene
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
class ShapeBase extends SceneChild_1.SceneChild {
    /**
     * Creates an instance of ShapeBase
     *
     * @param {ISceneChildSettings} [settings={}]
     */
    constructor(settings = {}) {
        super(settings);
        /**
         * Flag used to determine if indexedBuffer has been generated
         *
         * @internal
         * @ignore
         */
        this.bIndexed = false;
        /**
         * Array used for index a vertex buffer
         * only for first level scene children
         *
         * @internal
         * @ignore
         */
        this.indexedBuffer = [];
        /**
         * The bounding inside the scene
         *
         * @type {IShapeBounding}
         */
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
        this.anchor =
            settings.anchor && Array.isArray(settings.anchor)
                ? [
                    typeof settings.anchor[0] === 'number'
                        ? Utilities_1.clamp(-1, 1, settings.anchor[0]) * -1
                        : settings.anchor[0] === 'left'
                            ? 1
                            : settings.anchor[0] === 'right'
                                ? -1
                                : 0,
                    typeof settings.anchor[1] === 'number'
                        ? Utilities_1.clamp(-1, 1, settings.anchor[1]) * -1
                        : settings.anchor[1] === 'top'
                            ? 1
                            : settings.anchor[1] === 'bottom'
                                ? -1
                                : 0,
                ]
                : [0, 0];
        this.boundingType =
            typeof settings.boundingType === 'string'
                ? settings.boundingType === 'relative'
                    ? types_1.EBoundingType.Relative
                    : types_1.EBoundingType.Fixed
                : settings.boundingType || types_1.EBoundingType.Fixed;
        this.vertexCallback = settings.vertexCallback;
    }
    /**
     * Check if the shape should be generated every time
     *
     * @returns {boolean}
     */
    isStatic() {
        const props = this.props;
        return (typeof props.repetitions !== 'function' &&
            typeof props.distance !== 'function' &&
            typeof props.displace !== 'function' &&
            typeof props.scale !== 'function' &&
            typeof props.translate !== 'function' &&
            typeof props.skewX !== 'function' &&
            typeof props.skewY !== 'function' &&
            typeof props.squeezeX !== 'function' &&
            typeof props.squeezeY !== 'function' &&
            typeof props.rotateX !== 'function' &&
            typeof props.rotateY !== 'function' &&
            typeof props.rotateZ !== 'function' &&
            typeof props.transformOrigin !== 'function' &&
            typeof props.perspective !== 'function' &&
            typeof props.perspectiveOrigin !== 'function');
    }
    /**
     * Check if the indexedBuffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return typeof this.props.repetitions !== 'function';
    }
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {PropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    getProp(key, propArguments, defaultValue) {
        let attribute = this.props[key];
        if (typeof attribute === 'function') {
            attribute = attribute(propArguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? defaultValue : attribute;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    setProp(key, value, bClearIndexed = false) {
        if (typeof key === 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        }
        this.clearBuffer(bClearIndexed, true);
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.buffer = undefined;
        if (bClearIndexed) {
            this.bIndexed = false;
            this.indexedBuffer = [];
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    }
    /**
     * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
     *
     * @param {number} generateId generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {PropArguments} [parentPropArguments]
     */
    generate(generateId = 0, bDirectSceneChild = false, parentPropArguments) {
        var _a, _b;
        if (this.buffer && this.bStatic) {
            return;
        }
        this.generateId = generateId;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexedBuffer = [];
        const propArguments = ShapeBase.getEmptyPropArguments(this, parentPropArguments);
        const repetition = propArguments.repetition;
        const repetitions = this.getProp('repetitions', propArguments, 1);
        const repetitionType = Array.isArray(repetitions) ? types_1.ERepetitionType.Matrix : types_1.ERepetitionType.Ring;
        const repetitionCount = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        const repetitionRowCount = Array.isArray(repetitions) ? repetitions[0] : repetitionCount;
        const repetitionColCount = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        const rowRepetition = repetition.row;
        rowRepetition.count = repetitionRowCount;
        const colRepetition = repetition.col;
        colRepetition.count = repetitionColCount;
        repetition.count = repetitionCount;
        repetition.col.count = repetitionColCount;
        repetition.row.count = repetitionRowCount;
        repetition.type = repetitionType;
        let totalBufferLength = 0;
        const buffers = [];
        let currentIndex = 0;
        const centerMatrix = gl_matrix_1.vec2.fromValues((repetitionColCount - 1) / 2, (repetitionRowCount - 1) / 2);
        const sceneAnchor = this.scene ? [this.scene.anchor[0], this.scene.anchor[1], 0] : [0, 0, 0];
        const tmpTotalShapeBounding = [undefined, undefined, undefined, undefined];
        const tmpSingleRepetitionBounding = [undefined, undefined, undefined, undefined];
        for (let currentRowRepetition = 0; currentRowRepetition < repetitionRowCount; currentRowRepetition++) {
            for (let currentColRepetition = 0; currentColRepetition < repetitionColCount; currentColRepetition++, currentIndex++) {
                repetition.index = currentIndex + 1;
                repetition.offset = repetitionCount > 1 ? currentIndex / (repetitionCount - 1) : 1;
                repetition.angle = repetitionType === types_1.ERepetitionType.Ring ? (math_1.PI2 / repetitionCount) * currentIndex : 0;
                colRepetition.index = currentColRepetition + 1;
                colRepetition.offset = repetitionColCount > 1 ? currentColRepetition / (repetitionColCount - 1) : 1;
                rowRepetition.index = currentRowRepetition + 1;
                rowRepetition.offset = repetitionRowCount > 1 ? currentRowRepetition / (repetitionRowCount - 1) : 1;
                // Generate primitives buffer recursively
                const buffer = this.generateBuffer(generateId, propArguments);
                const bufferLength = buffer.length;
                const bounding = this.getShapeBounding();
                buffers[currentIndex] = new Float32Array(bufferLength);
                totalBufferLength += bufferLength;
                {
                    const distance = glme.toVec2(this.getProp('distance', propArguments, glme.VEC2_ZERO));
                    const displace = this.getProp('displace', propArguments, 0);
                    const scale = glme.toVec3(this.getProp('scale', propArguments, glme.VEC2_ONE), 1);
                    const translate = glme.toVec3(this.getProp('translate', propArguments, glme.VEC2_ZERO), 0);
                    const skewX = this.getProp('skewX', propArguments, 0);
                    const skewY = this.getProp('skewY', propArguments, 0);
                    const squeezeX = this.getProp('squeezeX', propArguments, 0);
                    const squeezeY = this.getProp('squeezeY', propArguments, 0);
                    const rotateX = this.getProp('rotateX', propArguments, 0);
                    const rotateY = this.getProp('rotateY', propArguments, 0);
                    const rotateZ = this.getProp('rotateZ', propArguments, 0);
                    const perspective = Utilities_1.clamp(0, 1, this.getProp('perspective', propArguments, 0));
                    const perspectiveOrigin = glme.toVec3(this.getProp('perspectiveOrigin', propArguments, glme.VEC2_ZERO), 0);
                    const transformOrigin = glme.toVec3(this.getProp('transformOrigin', propArguments, glme.VEC2_ZERO), 0);
                    let offset;
                    switch (repetitionType) {
                        case types_1.ERepetitionType.Ring:
                            offset = gl_matrix_1.vec3.fromValues(distance[0], 0, 0);
                            gl_matrix_1.vec3.rotateZ(offset, offset, glme.VEC3_ZERO, repetition.angle + displace);
                            break;
                        case types_1.ERepetitionType.Matrix:
                            offset = gl_matrix_1.vec3.fromValues(distance[1] * (currentColRepetition - centerMatrix[0]), distance[0] * (currentRowRepetition - centerMatrix[1]), 0);
                            break;
                    }
                    const perspectiveSize = perspective > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1;
                    const perspectiveValue = perspective > 0 ? perspectiveSize + (1 - perspective) * (perspectiveSize * 10) : 0;
                    const bTransformOrigin = (this.boundingType === types_1.EBoundingType.Relative ? bounding.cx !== 0 || bounding.cy !== 0 : true) ||
                        perspective !== 0 ||
                        transformOrigin[0] !== 0 ||
                        transformOrigin[1] !== 0;
                    const bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0;
                    if (bTransformOrigin) {
                        if (this.boundingType === types_1.EBoundingType.Relative) {
                            transformOrigin[0] = transformOrigin[0] * (bounding.width / 2) + bounding.cx;
                            transformOrigin[1] = transformOrigin[1] * (bounding.height / 2) + bounding.cy;
                        }
                        else {
                            transformOrigin[0] *= bounding.width / 2;
                            transformOrigin[1] *= bounding.height / 2;
                        }
                        transformOrigin[2] = perspectiveValue;
                    }
                    /**
                     * Create Matrices
                     */
                    {
                        /**
                         * Create Transformation matrix
                         */
                        gl_matrix_1.mat4.identity(transformMatrix);
                        bTransformOrigin && gl_matrix_1.mat4.translate(transformMatrix, transformMatrix, transformOrigin);
                        if (translate[0] !== 0 || translate[1] !== 0)
                            gl_matrix_1.mat4.translate(transformMatrix, transformMatrix, translate);
                        if (skewX !== 0 || skewY !== 0) {
                            glme.fromSkew(tmpMatrix, [skewX, skewY]);
                            gl_matrix_1.mat4.multiply(transformMatrix, transformMatrix, tmpMatrix);
                        }
                        rotateX !== 0 && gl_matrix_1.mat4.rotateX(transformMatrix, transformMatrix, rotateX);
                        rotateY !== 0 && gl_matrix_1.mat4.rotateY(transformMatrix, transformMatrix, rotateY);
                        rotateZ !== 0 && gl_matrix_1.mat4.rotateZ(transformMatrix, transformMatrix, rotateZ);
                        if (scale[0] !== 1 || scale[1] !== 1)
                            gl_matrix_1.mat4.scale(transformMatrix, transformMatrix, scale);
                        bTransformOrigin &&
                            gl_matrix_1.mat4.translate(transformMatrix, transformMatrix, gl_matrix_1.vec3.scale(transformOrigin, transformOrigin, -1));
                        /**
                         * Create Perspective matrix
                         */
                        if (perspectiveValue > 0) {
                            if (bPerspectiveOrigin) {
                                if (this.boundingType === types_1.EBoundingType.Relative) {
                                    perspectiveOrigin[0] = perspectiveOrigin[0] * (bounding.width / 2) + bounding.cx;
                                    perspectiveOrigin[1] = perspectiveOrigin[1] * (bounding.height / 2) + bounding.cy;
                                }
                                else {
                                    perspectiveOrigin[0] *= bounding.width / 2;
                                    perspectiveOrigin[1] *= bounding.height / 2;
                                }
                                perspectiveOrigin[2] = 0;
                            }
                            gl_matrix_1.mat4.perspective(perspectiveMatrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                        /**
                         * Create Repetition matrix
                         */
                        gl_matrix_1.mat4.identity(repetitionMatrix);
                        gl_matrix_1.mat4.translate(repetitionMatrix, repetitionMatrix, offset);
                        if (bDirectSceneChild) {
                            gl_matrix_1.mat4.translate(repetitionMatrix, repetitionMatrix, sceneAnchor);
                        }
                        /**
                         * Apply anchor
                         */
                        const shapeAnchor = [this.anchor[0] * (bounding.width / 2), this.anchor[1] * (bounding.height / 2), 0];
                        gl_matrix_1.mat4.translate(repetitionMatrix, repetitionMatrix, shapeAnchor);
                        if (repetitionType === types_1.ERepetitionType.Ring)
                            gl_matrix_1.mat4.rotateZ(repetitionMatrix, repetitionMatrix, repetition.angle + displace);
                    }
                    Adapt_1.Bounding.clear(tmpSingleRepetitionBounding);
                    // Apply matrices on vertex
                    for (let bufferIndex = 0; bufferIndex < bufferLength; bufferIndex += 2) {
                        const vertex = [buffer[bufferIndex], buffer[bufferIndex + 1], perspectiveValue];
                        {
                            // Apply squeeze, can be insert into transformMatrix?
                            squeezeX !== 0 && Vec2_1.default.squeezeX(vertex, squeezeX);
                            squeezeY !== 0 && Vec2_1.default.squeezeY(vertex, squeezeY);
                            // Apply transforms
                            gl_matrix_1.vec3.transformMat4(vertex, vertex, transformMatrix);
                            // Apply perspective
                            if (perspectiveValue > 0) {
                                bPerspectiveOrigin && gl_matrix_1.vec3.add(vertex, vertex, perspectiveOrigin);
                                gl_matrix_1.vec3.transformMat4(vertex, vertex, perspectiveMatrix);
                                gl_matrix_1.vec3.scale(vertex, vertex, perspectiveValue);
                                bPerspectiveOrigin && gl_matrix_1.vec3.sub(vertex, vertex, perspectiveOrigin);
                            }
                            // apply repetition matrix
                            gl_matrix_1.vec3.transformMat4(vertex, vertex, repetitionMatrix);
                            // custom vertex manipulation
                            if (typeof this.vertexCallback !== 'undefined') {
                                const index = bufferIndex / 2;
                                const count = bufferLength / 2;
                                const vertexRepetition = {
                                    index: index + 1,
                                    count,
                                    offset: count > 1 ? index / (count - 1) : 1,
                                };
                                this.vertexCallback(vertex, vertexRepetition, propArguments);
                            }
                        }
                        buffers[currentIndex][bufferIndex] = vertex[0];
                        buffers[currentIndex][bufferIndex + 1] = vertex[1];
                        Adapt_1.Bounding.add(tmpSingleRepetitionBounding, vertex[0], vertex[1]);
                        Adapt_1.Bounding.add(tmpTotalShapeBounding, vertex[0], vertex[1]);
                    }
                }
                // Bounding.sum(tmpTotalShapeBounding, tmpSingleRepetitionBounding)
                // After buffer creation, add a frame into indexedBuffer if not static or update bounding
                const singleRepetitionBounding = { cx: 0, cy: 0, x: -1, y: -1, width: 2, height: 2 };
                Adapt_1.Bounding.bind(singleRepetitionBounding, tmpSingleRepetitionBounding);
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(bufferLength, repetition, singleRepetitionBounding);
                }
            }
        }
        Adapt_1.Bounding.bind(this.bounding, tmpTotalShapeBounding);
        this.buffer = new Float32Array(totalBufferLength);
        for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        this.bIndexed = true;
    }
    /**
     * Return current shape (whit repetions) bounding
     *
     * @return {*}  {IShapeBounding}
     */
    getBounding() {
        return this.bounding;
    }
    /**
     * Get number of repetitions
     *
     * @returns {number}
     */
    getRepetitionCount() {
        var _a;
        const repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0]) : repetitions;
    }
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     */
    getBuffer() {
        return this.buffer;
    }
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex<Props, PropArguments>> | undefined)}
     */
    getIndexedBuffer() {
        return this.indexedBuffer;
    }
    /**
     * Return number of encapsulation
     *
     * @param {IBufferIndex} index
     * @returns {number}
     */
    static getIndexParentLevel(index) {
        if (typeof index.parent === 'undefined')
            return 0;
        let currentParent = index.parent;
        let currentParentLevel = 1;
        while (typeof currentParent.parent !== 'undefined') {
            currentParentLevel++;
            currentParent = currentParent.parent;
        }
        return currentParentLevel;
    }
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     */
    stream(callback) {
        if (this.buffer && this.indexedBuffer) {
            for (let i = 0, j = 0, len = this.indexedBuffer.length; i < len; i++) {
                const currentIndexing = this.indexedBuffer[i];
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
    }
    /**
     * Return empty propArguments
     *
     * @static
     * @param {ShapeBase} shape
     * @return {*}  {PropArguments}
     */
    static getEmptyPropArguments(shape, parentPropArguments) {
        const repetition = {
            type: types_1.ERepetitionType.Ring,
            angle: 0,
            index: 1,
            offset: 1,
            count: 1,
            row: { index: 1, offset: 1, count: 1 },
            col: { index: 1, offset: 1, count: 1 },
        };
        return {
            repetition,
            shape,
            parent: parentPropArguments,
        };
    }
}
exports.ShapeBase = ShapeBase;
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
ShapeBase.getEmptyRepetition = () => ({
    type: types_1.ERepetitionType.Ring,
    angle: 0,
    ...ShapeBase.getEmptySimpleRepetition(),
    row: ShapeBase.getEmptySimpleRepetition(),
    col: ShapeBase.getEmptySimpleRepetition(),
});
//# sourceMappingURL=ShapeBase.js.map

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "glMatrix": () => (/* reexport module object */ _common_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "mat2": () => (/* reexport module object */ _mat2_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "mat2d": () => (/* reexport module object */ _mat2d_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "mat3": () => (/* reexport module object */ _mat3_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "mat4": () => (/* reexport module object */ _mat4_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "quat": () => (/* reexport module object */ _quat_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "quat2": () => (/* reexport module object */ _quat2_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "vec2": () => (/* reexport module object */ _vec2_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "vec3": () => (/* reexport module object */ _vec3_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "vec4": () => (/* reexport module object */ _vec4_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);












/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian),
/* harmony export */   "equals": () => (/* binding */ equals)
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
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "LDU": () => (/* binding */ LDU),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
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
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "fromMat4": () => (/* binding */ fromMat4),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromMat2d": () => (/* binding */ fromMat2d),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "normalFromMat4": () => (/* binding */ normalFromMat4),
/* harmony export */   "projection": () => (/* binding */ projection),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
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
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "setAxisAngle": () => (/* binding */ setAxisAngle),
/* harmony export */   "getAxisAngle": () => (/* binding */ getAxisAngle),
/* harmony export */   "getAngle": () => (/* binding */ getAngle),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "calculateW": () => (/* binding */ calculateW),
/* harmony export */   "exp": () => (/* binding */ exp),
/* harmony export */   "ln": () => (/* binding */ ln),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "slerp": () => (/* binding */ slerp),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "conjugate": () => (/* binding */ conjugate),
/* harmony export */   "fromMat3": () => (/* binding */ fromMat3),
/* harmony export */   "fromEuler": () => (/* binding */ fromEuler),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "rotationTo": () => (/* binding */ rotationTo),
/* harmony export */   "sqlerp": () => (/* binding */ sqlerp),
/* harmony export */   "setAxes": () => (/* binding */ setAxes)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);




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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
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


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
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
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
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

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.clone;
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

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.copy;
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

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.add;
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

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.dot;
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

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.length;
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

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
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

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.equals;
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
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
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
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_3__.create();
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
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
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
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
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
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
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
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "fromRotationTranslationValues": () => (/* binding */ fromRotationTranslationValues),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromMat4": () => (/* binding */ fromMat4),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "getReal": () => (/* binding */ getReal),
/* harmony export */   "getDual": () => (/* binding */ getDual),
/* harmony export */   "setReal": () => (/* binding */ setReal),
/* harmony export */   "setDual": () => (/* binding */ setDual),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "rotateByQuatAppend": () => (/* binding */ rotateByQuatAppend),
/* harmony export */   "rotateByQuatPrepend": () => (/* binding */ rotateByQuatPrepend),
/* harmony export */   "rotateAroundAxis": () => (/* binding */ rotateAroundAxis),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "conjugate": () => (/* binding */ conjugate),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



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
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
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
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
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
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
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
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
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
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__.create();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getRotation(outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getTranslation(t, a);
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

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
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

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
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
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateX(out, a, rad);
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
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateY(out, a, rad);
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
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateZ(out, a, rad);
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
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
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

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__.dot;
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

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__.length;
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

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
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
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat2": () => (/* binding */ transformMat2),
/* harmony export */   "transformMat2d": () => (/* binding */ transformMat2d),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

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
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=indexedBuffer.js.map

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=propArguments.js.map

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERepetitionType = void 0;
/**
 * Repetition type enumerator.
 *
 * @category Types & Interfaces.Repetitions
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
})(ERepetitionType = exports.ERepetitionType || (exports.ERepetitionType = {}));
//# sourceMappingURL=repetitions.js.map

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene-child.js.map

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=scene.js.map

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EBoundingType = void 0;
/**
 *
 * @category Enums
 * @export
 * @enum {number}
 */
var EBoundingType;
(function (EBoundingType) {
    /**
     * Relative to the real bounding of the shape
     * @order 2
     */
    EBoundingType[EBoundingType["Relative"] = 1] = "Relative";
    /**
     * Fixed to te width and height of the shape
     * @order 3
     */
    EBoundingType[EBoundingType["Fixed"] = 2] = "Fixed";
})(EBoundingType = exports.EBoundingType || (exports.EBoundingType = {}));
//# sourceMappingURL=shape-base.js.map

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//////
//# sourceMappingURL=shape-primitives.js.map

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Shape
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=shapes.js.map

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toVec3 = exports.toVec2 = exports.fromSkew = exports.VEC2_ONE = exports.VEC2_ZERO = exports.VEC3_ONE = exports.VEC3_ZERO = void 0;
const gl_matrix_1 = __webpack_require__(7);
exports.VEC3_ZERO = [0, 0, 0];
exports.VEC3_ONE = [1, 1, 1];
exports.VEC2_ZERO = [0, 0];
exports.VEC2_ONE = [1, 1];
gl_matrix_1.glMatrix.setMatrixArrayType(Array);
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
exports.fromSkew = fromSkew;
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
exports.toVec2 = toVec2;
/**
 * number to vec 3
 *
 * @internal
 * @ignore
 */
function toVec3(x, defaultZValue = 0) {
    if (Array.isArray(x)) {
        return [x[0], x[1], defaultZValue];
    }
    return [x, x, defaultZValue];
}
exports.toVec3 = toVec3;
//# sourceMappingURL=gl-matrix-extensions.js.map

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Temporany matrix
 *
 * @internal
 * @ignore
 */
const MATRIX = new Array(4);
/**
 * Vec2 operation
 *
 * @category Math
 */
const Vec2 = {
    /**
     * from new vertex
     *
     * @param {Array<number> | number} [x=0]
     * @param {number} [y]
     * @returns {Array<number>}
     */
    from: (x = 0, y) => {
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
    },
    normalize: (v) => {
        const len = Vec2.length(v);
        return len !== 0 ? [v[0] / len, v[1] / len] : [0, 0];
    },
    /**
     * Distance between two points
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    distance: (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]),
    /**
     * dot product
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    dot: (a, b) => a[0] * b[0] + a[1] * b[1],
    /**
     * length of point
     *
     * @param {Array<number>} vec
     * @returns {number}
     */
    length: (vec) => Math.hypot(vec[0], vec[1]),
    /**
     * angle between two point
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    angle: (a, b) => {
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
    skewX: (vec, m) => {
        vec[0] += Math.tan(m) * vec[1];
    },
    /**
     * skewY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewY: (vec, m) => {
        vec[1] += Math.tan(m) * vec[0];
    },
    /**
     * squeezeX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeX: (vec, m) => {
        vec[1] += vec[1] * (vec[0] * -m);
    },
    /**
     * squeezeY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeY: (vec, m) => {
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
    rotate: (vec, MATRIX, fromPoint) => {
        const p0 = vec[0] - fromPoint[0];
        const p1 = vec[1] - fromPoint[1];
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
    rotateX: (vec, fromPoint, rad) => {
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
    rotateY: (vec, fromPoint, rad) => {
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
    rotateZ: (vec, fromPoint, rad) => {
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
    translate: (vec, to) => {
        vec[0] += to[0];
        vec[1] += to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    scale: (vec, to) => {
        vec[0] *= to[0];
        vec[1] *= to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    divide: (vec, to) => {
        vec[0] /= to[0];
        vec[1] /= to[1];
    },
    /**
     * Vec to string
     *
     * @param {Array<number>} vec
     * @return {string}
     */
    toString: (vec) => `x: ${vec[0]}, y: ${vec[1]}`,
    /**
     * Vertex [0, 0]
     */
    ZERO: Array.from([0, 0]),
    /**
     * Vertex [1, 1]
     */
    ONE: Array.from([1, 1]),
};
exports.default = Vec2;
//# sourceMappingURL=Vec2.js.map

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mod = exports.PHI = exports.PI2 = exports.log = void 0;
/**
 * Return logarith value and base
 *
 * @category Utilities
 *
 * @param n number
 * @param base number
 */
const log = (n, base) => Math.log(n) / Math.log(base);
exports.log = log;
/**
 * @category Utilities
 */
exports.PI2 = Math.PI * 2;
/**
 * @category Utilities
 */
exports.PHI = (1 + Math.sqrt(5)) / 2;
/**
 * Return a positive module of positive or negative value
 *
 * @category Utilities
 *
 * @param value number
 * @param base number
 */
const mod = (value, base) => {
    const result = value % base;
    return result < 0 ? result + base : result;
};
exports.mod = mod;
//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Adapt = exports.Bounding = exports.EAdaptMode = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * @category Modifiers.Enums
 */
var EAdaptMode;
(function (EAdaptMode) {
    /**
     * The buffer is not changed
     * @order 1
     */
    EAdaptMode[EAdaptMode["None"] = 0] = "None";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1]
     * @order 2
     */
    EAdaptMode[EAdaptMode["Scale"] = 2] = "Scale";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
     * @order 3
     */
    EAdaptMode[EAdaptMode["Center"] = 4] = "Center";
    /**
     * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
     * @order 4
     */
    EAdaptMode[EAdaptMode["Fill"] = 8] = "Fill";
})(EAdaptMode = exports.EAdaptMode || (exports.EAdaptMode = {}));
/**
 * @internal
 * @ignore
 */
exports.Bounding = {
    empty: () => ({
        cx: 0,
        cy: 0,
        x: -1,
        y: -1,
        width: 2,
        height: 2,
    }),
    clear: (tmpBounding) => {
        tmpBounding[0] = undefined;
        tmpBounding[1] = undefined;
        tmpBounding[2] = undefined;
        tmpBounding[3] = undefined;
    },
    add: (tmpBounding, x, y) => {
        if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0])
            tmpBounding[0] = x;
        if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2])
            tmpBounding[2] = x;
        if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1])
            tmpBounding[1] = y;
        if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3])
            tmpBounding[3] = y;
    },
    sum: (dest, bounding) => {
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
    bind: (bounding, tmpBounding) => {
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
/**
 * Fit a buffer into a rectangle based on EAdaptMode
 *
 * @category Modifiers
 * @class Adapt
 * @extends {Modifier}
 */
class Adapt extends Modifier_1.Modifier {
    constructor(args) {
        super();
        this.mode = args.mode || EAdaptMode.Fill;
        this.rect = args.rect;
    }
    apply(buffer, bClosed) {
        return Adapt.adapt(buffer, this.mode, this.rect);
    }
    /**
     * Return adapted buffer between [-1,-1] and [1,1]
     *
     * @public
     * @static
     * @param {Float32Array} input
     * @param {EAdaptMode} mode
     * @returns {Float32Array}
     * @memberof ShapeBuffer
     */
    static adapt(input, mode, rect) {
        if (mode === EAdaptMode.None)
            return Float32Array.from(input);
        const output = new Float32Array(input.length);
        if (!rect) {
            rect = Adapt.getBounding(input);
        }
        const scale = rect.width >= 2 || rect.height >= 2 || (mode >= EAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        const translateX = mode >= EAdaptMode.Center ? rect.cx : 0;
        const translateY = mode >= EAdaptMode.Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array | Array<number>} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = exports.Bounding.empty();
        const tmp_bounding = [undefined, undefined, undefined, undefined];
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            exports.Bounding.add(tmp_bounding, buffer[i], buffer[i + 1]);
        }
        exports.Bounding.bind(bounding, tmp_bounding);
        return bounding;
    }
}
exports.Adapt = Adapt;
Adapt.MODES = EAdaptMode;
//# sourceMappingURL=Adapt.js.map

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modifier = void 0;
/**
 * Manipulate a buffer after generating
 *
 * @abstract
 * @category Modifiers
 * @class Modifier
 */
class Modifier {
}
exports.Modifier = Modifier;
//# sourceMappingURL=Modifier.js.map

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolate = exports.prepareBufferForInterpolation = exports.distributePointsInBuffer = exports.distanceFromRepetition = exports.angle2FromRepetition = exports.angleFromRepetition = exports.random = exports.noise = exports.relativeClamp = exports.clamp = exports.lerp = exports.toRadians = exports.toDegrees = exports.now = void 0;
const SimplexNoise = __webpack_require__(33);
const repetitions_1 = __webpack_require__(21);
const Vec2_1 = __webpack_require__(28);
const measurement = typeof performance !== 'undefined' ? performance : Date;
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
function now() {
    return measurement.now();
}
exports.now = now;
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
exports.toDegrees = toDegrees;
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
exports.toRadians = toRadians;
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
exports.lerp = lerp;
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
exports.clamp = clamp;
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
exports.relativeClamp = relativeClamp;
/**
 * @internal
 * @ignore
 */
const noises = {
    random: new SimplexNoise(Math.random),
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
 * @returns {number} between -1 and 1
 */
function noise(seed = 'random', x = 0, y = 0, z = 0) {
    if (typeof noises[seed] === 'undefined') {
        noises[seed] = new SimplexNoise(seed);
    }
    return noises[seed].noise3D(x, y, z);
}
exports.noise = noise;
/**
 * @internal
 * @ignore
 */
const randoms = {};
/**
 * Random number generator
 * @example
 * ```javascript
 * 	Urpflanze.random('seed') // 0.9367527104914188
 * ```
 *
 * @category Utilities
 * @param {string} seed
 * @param {number} min
 * @param {number} max
 * @param {number} decimals
 * @returns {number}
 */
function random(seed, min = 0, max = 1, decimals) {
    const key = seed + '';
    if (typeof randoms[key] === 'undefined') {
        const seed = xmur3(key);
        randoms[key] = sfc32(seed(), seed(), seed(), seed());
    }
    const value = min + randoms[key]() * (max - min);
    return typeof decimals !== 'undefined' ? Math.round(value * 10 ** decimals) / 10 ** decimals : value;
}
exports.random = random;
/**
 *
 * @internal
 * @param str
 * @returns
 */
function xmur3(str) {
    let i = 0, h = 1779033703 ^ str.length;
    for (; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
/**
 * @internal
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */
function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}
/**
 * Return angle (atan) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI / 2 and Math.PI / 2
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI / 2 and Math.PI / 2
 */
function angleFromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === repetitions_1.ERepetitionType.Matrix) {
        const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const x = repetition.col.index - 1 - centerMatrix[0];
        const y = repetition.row.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan(y / x);
    }
    return (repetition.angle - Math.PI) / 2;
}
exports.angleFromRepetition = angleFromRepetition;
/**
 * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI an Math.PI
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI an Math.PI
 */
function angle2FromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === repetitions_1.ERepetitionType.Matrix) {
        const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const x = repetition.col.index - 1 - centerMatrix[0];
        const y = repetition.row.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan2(y, x);
    }
    return repetition.angle - Math.PI;
}
exports.angle2FromRepetition = angle2FromRepetition;
/**
 * Return distance from offset (or center) for matrix repetition.
 * The return value is between 0 and 1
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter offset relative to distance prop
 * @returns {number} between 0 and 1
 */
function distanceFromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === repetitions_1.ERepetitionType.Matrix) {
        const centerMatrix = [0.5, 0.5];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const current = [repetition.col.offset, repetition.row.offset];
        return Vec2_1.default.distance(current, centerMatrix);
    }
    return 1;
}
exports.distanceFromRepetition = distanceFromRepetition;
/// Interpolation
/**
 * Evenly distributes a number of points in a buffer
 *
 * @category Utilities.Buffer interpolation
 * @export
 * @param {Float32Array} buffer current buffer
 * @param {number} pointsToAdd points to add
 * @return {*}  {Float32Array}
 */
function distributePointsInBuffer(buffer, pointsToAdd) {
    const bufferLen = buffer.length;
    const pointsLen = bufferLen / 2;
    const finalBufferLength = (pointsLen + pointsToAdd) * 2;
    const edges = pointsLen - 1;
    if (edges > 1) {
        const lastPoint = bufferLen - 2;
        const newPointsOnEdge = Math.floor(pointsToAdd / edges);
        const bufferWithPointsEveryEdge = bufferLen + newPointsOnEdge * lastPoint;
        let remainingPoints = (finalBufferLength - bufferWithPointsEveryEdge) / 2;
        const edgeRemainingIndex = Math.round(edges / remainingPoints);
        const result = new Float32Array(finalBufferLength);
        for (let i = 0, edgeIndex = 0, r = 0; i < lastPoint; i += 2, edgeIndex++, r += 2) {
            const ax = buffer[i];
            const ay = buffer[i + 1];
            const bx = buffer[i + 2];
            const by = buffer[i + 3];
            result[r] = ax;
            result[r + 1] = ay;
            const addReminingPoints = remainingPoints > 0 && (edgeIndex % edgeRemainingIndex === 0 || i === lastPoint - 2);
            const currentPointsOnEdge = newPointsOnEdge + (addReminingPoints ? 1 : 0);
            const newPointOffset = 1 / (currentPointsOnEdge + 1);
            for (let h = 0; h < currentPointsOnEdge; h++, r += 2) {
                const o = newPointOffset * (h + 1);
                result[r + 2] = (1 - o) * ax + o * bx;
                result[r + 3] = (1 - o) * ay + o * by;
            }
            if (addReminingPoints) {
                remainingPoints--;
            }
        }
        result[finalBufferLength - 2] = buffer[bufferLen - 2];
        result[finalBufferLength - 1] = buffer[bufferLen - 1];
        return result;
    }
    const result = new Float32Array(finalBufferLength);
    for (let i = 0; i < finalBufferLength; i += 2) {
        result[i] = buffer[i % bufferLen];
        result[i + 1] = buffer[(i + 1) % bufferLen];
    }
    return result;
}
exports.distributePointsInBuffer = distributePointsInBuffer;
/**
 * Leads two buffers to have the same number of points
 *
 * @category Utilities.Buffer interpolation
 * @param from
 * @param to
 * @returns
 */
function prepareBufferForInterpolation(from, to) {
    const fromBufferLength = from.length;
    const toBufferLength = to.length;
    if (fromBufferLength === toBufferLength) {
        return [from, to];
    }
    // const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength
    const difference = Math.abs(fromBufferLength - toBufferLength);
    // const minBufferLength = maxBufferLength - difference
    /////
    const b = fromBufferLength < toBufferLength ? to : from;
    const t = fromBufferLength < toBufferLength ? from : to;
    const a = distributePointsInBuffer(t, Math.floor(difference / 2));
    // a[maxBufferLength - 2] = t[minBufferLength - 2]
    // a[maxBufferLength - 1] = t[minBufferLength - 1]
    return fromBufferLength > toBufferLength ? [b, a] : [a, b];
}
exports.prepareBufferForInterpolation = prepareBufferForInterpolation;
/**
 * Interpolate two buffer
 *
 * @category Utilities.Buffer interpolation
 * @param from
 * @param to
 * @param offset
 * @returns
 */
function interpolate(from, to, initialOffset = 0.5) {
    const [a, b] = prepareBufferForInterpolation(from, to);
    const maxBufferLength = Math.max(a.length, b.length);
    const offset = typeof initialOffset === 'number' ? [initialOffset] : initialOffset;
    const maxPoints = maxBufferLength / 2;
    if (offset.length !== maxPoints) {
        const tl = offset.length;
        for (let i = 0; i < maxPoints; i++) {
            offset[i] = offset[i % tl];
        }
    }
    ////
    const result = new Float32Array(maxBufferLength);
    for (let i = 0, off = 0; i < maxBufferLength; i += 2, off++) {
        result[i] = (1 - offset[off]) * a[i] + offset[off] * b[i];
        result[i + 1] = (1 - offset[off]) * a[i + 1] + offset[off] * b[i + 1];
    }
    return result;
}
exports.interpolate = interpolate;
//# sourceMappingURL=Utilities.js.map

/***/ }),
/* 33 */
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
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shape = void 0;
const Scene_1 = __webpack_require__(3);
const SceneChild_1 = __webpack_require__(4);
const ShapeBase_1 = __webpack_require__(6);
/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Scene.Containers
 */
class Shape extends ShapeBase_1.ShapeBase {
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'Shape';
        super(settings);
        if (settings.shape instanceof SceneChild_1.SceneChild) {
            this.shape = settings.shape;
        }
        else {
            console.warn("[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:", settings.shape);
        }
        this.shapeUseParent = !!settings.shapeUseParent;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    isStatic() {
        // return super.isStatic() && !this.shapeUseParent
        return super.isStatic() && (this.shape ? this.shape.isStatic() : true);
    }
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true);
    }
    /**
     * Find shape by id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     */
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        if (this.shape)
            return this.shape.find(idOrName);
        return null;
    }
    /**
     * Return length of buffer
     *
     * @param {PropArguments} propArguments
     * @returns {number}
     */
    getBufferLength(propArguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        const childBufferLength = this.shape ? this.shape.getBufferLength(propArguments) : 0;
        return childBufferLength * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape) {
            if (this.shapeUseParent || this.shape.generateId !== generateId) {
                if (this.shapeUseParent) {
                    this.shape.clearBuffer(true, false);
                }
                this.shape.generate(generateId, false, propArguments);
            }
            return this.shape.getBuffer();
        }
        return Shape.EMPTY_BUFFER;
    }
    /**
     * Return bounding
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     */
    getShapeBounding() {
        if (this.shape) {
            return this.shape.getBounding();
        }
        return this.bounding; // empty bounding defined in ShapeBase
    }
    /**
     * Add to indexed buffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            const parentBufferIndex = {
                shape: this,
                frameLength,
                singleRepetitionBounding,
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
            for (let i = 0, len = childIndexedBuffer.length; i < len; i++) {
                const currentIndexed = { ...childIndexedBuffer[i] };
                const parent = currentIndexed.parent
                    ? Shape.setIndexedParent(currentIndexed.parent, parentBufferIndex)
                    : parentBufferIndex;
                this.indexedBuffer.push({ ...currentIndexed, parent });
            }
        }
    }
    /**
     * Set parent of indexed
     *
     * @static
     * @param {(IBufferIndex )} current
     * @param {IBufferIndex} parent
     * @returns {(IBufferIndex )}
     */
    static setIndexedParent(current, parent) {
        const index = {
            ...current,
        };
        index.parent = current.parent ? Shape.setIndexedParent(current.parent, parent) : parent;
        return index;
    }
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     */
    setShape(shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true, true);
        }
        else {
            this.scene && Scene_1.Scene.propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true, true);
        }
    }
}
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapePrimitive = void 0;
const glme = __webpack_require__(27);
const ShapeBase_1 = __webpack_require__(6);
const Modifier_1 = __webpack_require__(31);
const Adapt_1 = __webpack_require__(30);
/**
 * @category Scene
 */
class ShapePrimitive extends ShapeBase_1.ShapeBase {
    /**
     * Creates an instance of ShapePrimitive.
     *
     * @param {IShapePrimitiveSettings} [settings={}]
     */
    constructor(settings = {}) {
        var _a;
        super(settings);
        /**
         * Contain the bounding of the last generated buffer
         *
         * @type {IShapeBounding}
         */
        this.currentGenerationPrimitiveBounding = Adapt_1.Bounding.empty();
        this.props.sideLength =
            typeof settings.sideLength === 'undefined'
                ? undefined
                : typeof settings.sideLength === 'function'
                    ? settings.sideLength
                    : glme.toVec2(settings.sideLength);
        this.drawer = settings.drawer || {};
        this.modifiers = settings.modifiers;
        this.bClosed = (_a = settings.bClosed) !== null && _a !== void 0 ? _a : true;
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
     * Return sideLength for current repetition
     *
     * @param propArguments
     * @returns
     */
    getRepetitionSideLength(propArguments) {
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
        return glme.toVec2(this.getProp('sideLength', propArguments, [50, 50]));
    }
    /**
     * Apply modifiers on single repetition buffer
     *
     * @param buffer
     * @returns
     */
    applyModifiers(buffer, propArguments) {
        if (typeof this.modifiers === 'undefined')
            return buffer;
        let modified = buffer;
        const modifiers = Array.isArray(this.modifiers) ? this.modifiers : [this.modifiers];
        for (let i = 0, len = modifiers.length; i < len; i++) {
            const modifier = modifiers[i] instanceof Modifier_1.Modifier
                ? modifiers[i]
                : modifiers[i](propArguments);
            //@ts-ignore
            modified = modifier.apply(modified, this.bClosed, this);
        }
        return modified;
    }
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    getShapeBounding() {
        return this.currentGenerationPrimitiveBounding;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        const index = {
            shape: this,
            frameLength,
            singleRepetitionBounding,
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
        this.indexedBuffer.push(index);
    }
    /**
     * Return bClosed
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed() {
        return this.bClosed;
    }
    /**
     * Set bClosed
     *
     * @param {boolean} bClosed
     * @memberof ShapePrimitive
     */
    setClosed(bClosed) {
        this.bClosed = bClosed;
    }
}
exports.ShapePrimitive = ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.js.map

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeLoop = void 0;
const math_1 = __webpack_require__(29);
const Adapt_1 = __webpack_require__(30);
const ShapePrimitive_1 = __webpack_require__(35);
const ShapeBase_1 = __webpack_require__(6);
/**
 * Create a shape from loop
 *
 * @category Shapes.Primitives
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop extends ShapePrimitive_1.ShapePrimitive {
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     */
    constructor(settings = {}, bPreventGeneration = false) {
        settings.type = settings.type || 'ShapeLoop';
        super(settings);
        this.loopDependencies = (settings.loopDependencies || []).concat('sideLength');
        this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            this.loop = {
                start: 0,
                end: math_1.PI2,
                inc: math_1.PI2 / 10,
                vertex: () => [0, 0],
            };
            this.bStaticLoop = this.isStaticLoop();
            this.bStatic = this.isStatic();
            this.bStaticIndexed = this.isStaticIndexed();
        }
    }
    /**
     * Check if currentOrSingleLoopBuffer is static
     *
     * @returns {boolean}
     */
    isStaticLoop() {
        if (this.loopDependencies.includes('propArguments'))
            return false;
        for (let i = 0, len = this.loopDependencies.length; i < len; i++)
            if (typeof this.props[this.loopDependencies[i]] === 'function')
                return false;
        return true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    isStatic() {
        return this.bStaticLoop && super.isStatic();
    }
    /**
     * Check if shape has static indexed
     * The number of vertices is defined by number of loop iteration
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        // return this.bStaticLoop && super.isStaticIndexed()
        return (super.isStaticIndexed() &&
            (typeof this.props.loop !== 'undefined'
                ? typeof this.props.loop.start !== 'function' &&
                    typeof this.props.loop.end !== 'function' &&
                    typeof this.props.loop.inc !== 'function'
                : true));
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.currentOrSingleLoopBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     * Set single or multiple props
     *
     * @param {(Props)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    setProp(key, value) {
        let bClearIndexed = false;
        const keys = (typeof key === 'string' ? { [key]: value } : key);
        for (let i = this.loopDependencies.length - 1; i >= 0; i--) {
            if (this.loopDependencies[i] in keys) {
                // this.props.loop = undefined
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in keys) {
            keys.loop = { ...this.props.loop, ...keys.loop };
            bClearIndexed = true;
        }
        super.setProp(keys, value, bClearIndexed);
    }
    /**
     * Return length of buffer
     *
     * @param {PropArguments} [propArguments]
     * @returns {number}
     */
    getBufferLength(propArguments) {
        if (this.bStatic && typeof this.buffer !== 'undefined')
            return this.buffer.length;
        if (this.bStaticLoop && typeof this.currentOrSingleLoopBuffer !== 'undefined')
            return this.currentOrSingleLoopBuffer.length * this.getRepetitionCount();
        const { count } = this.getLoop(propArguments || ShapeBase_1.ShapeBase.getEmptyPropArguments(this));
        return this.getRepetitionCount() * count * 2;
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(propArguments);
        if (typeof this.props.sideLength === 'function' || typeof this.currentOrSingleLoopBuffer === 'undefined')
            this.currentOrSingleLoopBuffer = this.generateLoopBuffer(propArguments);
        return this.currentOrSingleLoopBuffer;
    }
    /**
     * Generate loop buffer
     *
     * @protected
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateLoopBuffer(propArguments) {
        const { start, inc, /*end,*/ count } = this.getLoop(propArguments);
        const sideLength = this.getRepetitionSideLength(propArguments);
        const getVertex = (this.props.loop && this.props.loop.vertex ? this.props.loop.vertex : this.loop.vertex);
        const shapeLoop = {
            index: 0,
            offset: 0,
            current: 0,
            count: count,
        };
        const vertexLength = shapeLoop.count;
        const bufferLength = vertexLength * 2;
        const currentOrSingleLoopBuffer = new Float32Array(bufferLength);
        for (let i = 0, j = 0; i < vertexLength; i++, j += 2) {
            const current = start + inc * i;
            const offset = shapeLoop.count > 1 ? i / (shapeLoop.count - 1) : 1;
            // const angle = (end - start) * offset + start
            shapeLoop.current = current;
            shapeLoop.index = i + 1;
            shapeLoop.offset = offset;
            const vertex = getVertex(shapeLoop, propArguments);
            currentOrSingleLoopBuffer[j] = vertex[0];
            currentOrSingleLoopBuffer[j + 1] = vertex[1];
            // currentOrSingleLoopBuffer[j] *= sideLength[0]
            // currentOrSingleLoopBuffer[j + 1] *= sideLength[1]
            // Bounding.add(tmpBounding, currentOrSingleLoopBuffer[j], currentOrSingleLoopBuffer[j + 1])
        }
        const tmpBounding = [undefined, undefined, undefined, undefined];
        const buffer = this.applyModifiers(currentOrSingleLoopBuffer, propArguments);
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            buffer[i] = buffer[i] * sideLength[0];
            buffer[i + 1] = buffer[i + 1] * sideLength[1];
            Adapt_1.Bounding.add(tmpBounding, buffer[i], buffer[i + 1]);
        }
        Adapt_1.Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        return buffer;
    }
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {PropArguments} propArguments
     * @returns {ShapeLoopInformation}
     */
    getLoop(propArguments) {
        var _a, _b, _c, _d, _e, _f;
        let start = (_b = (_a = this.props.loop) === null || _a === void 0 ? void 0 : _a.start) !== null && _b !== void 0 ? _b : this.loop.start;
        let end = (_d = (_c = this.props.loop) === null || _c === void 0 ? void 0 : _c.end) !== null && _d !== void 0 ? _d : this.loop.end;
        let inc = (_f = (_e = this.props.loop) === null || _e === void 0 ? void 0 : _e.inc) !== null && _f !== void 0 ? _f : this.loop.inc;
        start = (typeof start === 'function' ? start(propArguments) : start);
        end = (typeof end === 'function' ? end(propArguments) : end);
        inc = (typeof inc === 'function' ? inc(propArguments) : inc);
        const count = Math.ceil((end - start) / inc);
        return { start, end, inc, count: count <= 0 ? 0 : count };
    }
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     */
    setShape(loop) {
        this.setProp('loop', loop);
    }
    /**
     * Get static buffer
     *
     * @param sideLength
     * @returns
     */
    static getBuffer(props) {
        const shape = new this({ ...props, sideLength: props.sideLength || 1 });
        shape.generate();
        return shape.getBuffer() || new Float32Array();
    }
}
exports.ShapeLoop = ShapeLoop;
ShapeLoop.PId2 = Math.PI / 2;
//# sourceMappingURL=ShapeLoop.js.map

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeBuffer = void 0;
const Adapt_1 = __webpack_require__(30);
const ShapePrimitive_1 = __webpack_require__(35);
/**
 * Create a shape from static buffer
 *
 * @category Shapes.Primitives
 */
class ShapeBuffer extends ShapePrimitive_1.ShapePrimitive {
    /**
     * Creates an instance of ShapeBuffer.
     *
     * @param {IShapeBufferSettings} [settings={}]
     */
    constructor(settings = {}) {
        var _a, _b;
        settings.type = settings.type || 'ShapeBuffer';
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : Adapt_1.EAdaptMode.Scale;
        super(settings);
        this.adaptMode = (_b = settings.adaptMode) !== null && _b !== void 0 ? _b : Adapt_1.EAdaptMode.Fill;
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else {
            this.shape = typeof settings.shape !== 'function' ? Adapt_1.Adapt.adapt(settings.shape, this.adaptMode) : settings.shape;
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Check shape is static
     *
     * @returns boolean
     */
    isStatic() {
        return typeof this.shape !== 'function' && super.isStatic();
    }
    /**
     * Check shape is static indexed
     *
     * @returns boolean
     */
    isStaticIndexed() {
        return typeof this.shape !== 'function' && super.isStaticIndexed();
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.shapeBuffer = undefined;
    }
    /**
     * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
     *
     * @protected
     */
    bindBuffer(propArguments) {
        const sideLength = this.getRepetitionSideLength(propArguments);
        const shapeBuffer = this.applyModifiers(Float32Array.from(typeof this.shape === 'function' ? this.shape(propArguments) : this.shape), propArguments);
        const tmpBounding = [undefined, undefined, undefined, undefined];
        for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
            shapeBuffer[i] = shapeBuffer[i] * sideLength[0];
            shapeBuffer[i + 1] = shapeBuffer[i + 1] * sideLength[1];
            Adapt_1.Bounding.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1]);
        }
        Adapt_1.Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        this.shapeBuffer = shapeBuffer;
    }
    /**
     * Return length of buffer
     *
     * @param {IPropArguments} propArguments
     * @returns {number}
     */
    getBufferLength( /*propArguments?: IPropArguments*/) {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape.length * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (typeof this.shapeBuffer === 'undefined' ||
            typeof this.props.sideLength === 'function' ||
            typeof this.shape === 'function') {
            this.bindBuffer(propArguments);
        }
        return this.shapeBuffer;
    }
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     */
    setShape(shape) {
        this.shape = Adapt_1.Adapt.adapt(shape, this.adaptMode);
        this.clearBuffer(true);
    }
    /**
     * Return adaptMode
     *
     * @returns {EAdaptMode}
     * @memberof ShapeBase
     */
    getAdaptMode() {
        return this.adaptMode;
    }
    /**
     * Get static buffer
     *
     * @param sideLength
     * @returns
     */
    static getBuffer(props = {}) {
        const shape = new this({ ...props, sideLength: props.sideLength || 1 });
        shape.generate();
        return shape.getBuffer() || new Float32Array();
    }
}
exports.ShapeBuffer = ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.js.map

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeRecursive = void 0;
const Shape_1 = __webpack_require__(34);
/**
 * Repeat `shape` on each vertex recursively
 *
 * @category Scene.Containers
 */
class ShapeRecursive extends Shape_1.Shape {
    /**
     * Creates an instance of ShapeRecursive.
     *
     * @param {IShapeRecursiveSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'ShapeRecursive';
        super(settings);
        this.props.recursions = settings.recursions || 1;
        this.props.recursionScale = settings.recursionScale || 2;
        this.props.recursionVertex = settings.recursionVertex || 0;
        // this.bInner = settings.bInner ?? false
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        this.shapeUseRecursion = !!settings.shapeUseRecursion;
        // this.currentGenerationRecursiveBounding = Bounding.empty()
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        if (bClearIndexed) {
            this.shapeRecursiveBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     * Set type of recursion
     *
     * @param {boolean} inner
     */
    // public setRecursionnInner(inner: boolean): void {
    // 	this.bInner = inner
    // 	this.clearBuffer(true)
    // }
    /**
     *
     * @returns {boolean}
     */
    isStatic() {
        return (typeof this.props.recursions !== 'function' &&
            typeof this.props.recursionScale !== 'function' &&
            typeof this.props.recursionVertex !== 'function' &&
            super.isStatic());
    }
    /**
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return (typeof this.props.recursions !== 'function' &&
            typeof this.props.recursionVertex !== 'function' &&
            super.isStaticIndexed());
    }
    /**
     * Return a buffer of children shape with recursion
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape) {
            if (typeof this.shapeRecursiveBuffer === 'undefined' ||
                this.shapeUseParent ||
                this.shape.generateId !== generateId) {
                this.bindBuffer(generateId, propArguments);
            }
            return this.shapeRecursiveBuffer;
        }
        return Shape_1.Shape.EMPTY_BUFFER;
    }
    /**
     * Generate Recoursive shape buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     */
    bindBuffer(generateId, propArguments) {
        const recursions = Math.floor(this.getProp('recursions', propArguments, 1));
        const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
        const recursionScale = this.getProp('recursionScale', propArguments, 2);
        const childShape = this.shape;
        let currentRecursionRepetition = {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: recursions > 1 ? 0 : 1, count: 1 },
        };
        const recursionPropArguments = {
            ...propArguments,
            recursion: currentRecursionRepetition,
        };
        childShape.generate(generateId, false, recursionPropArguments);
        const firstGenerationChildBuffer = childShape.getBuffer();
        if (recursions <= 1) {
            // this.currentGenerationRecursiveBounding = this.shape.getBounding()
            this.shapeRecursiveBuffer = firstGenerationChildBuffer;
            return;
        }
        let shapeBuffer = firstGenerationChildBuffer;
        const storedRecursion = [currentRecursionRepetition];
        let paretRecursionIndex = 0, added = 1;
        // const tmpBounding = [undefined, undefined, undefined, undefined]
        const singleShapeBufferLength = shapeBuffer.length;
        const realVertexCount = singleShapeBufferLength / 2;
        const singleShapeVertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
        const recursionOffsetMultiplier = recursionVertex === 0 ? 1 : realVertexCount / Math.min(recursionVertex, realVertexCount);
        const recusiveShapeBuffer = new Float32Array(ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength);
        for (let i = 0; i < singleShapeBufferLength; i += 2) {
            recusiveShapeBuffer[i] = shapeBuffer[i];
            recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1];
            // Bounding.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1])
        }
        for (let currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
            const level_offset = recursions > 1 ? currentRecursion / (recursions - 1) : 1;
            const currentRecursionVertexCount = ShapeRecursive.summmation(currentRecursion, singleShapeVertexCount);
            const recursionBufferStartIndex = currentRecursionVertexCount * singleShapeBufferLength;
            const parentRecursion = currentRecursion - 1;
            const parentRecursionBufferStartIndex = parentRecursion === 0
                ? 0
                : ShapeRecursive.summmation(parentRecursion, singleShapeVertexCount) * singleShapeBufferLength;
            for (let currentShapeRecursionRepetition = 0, totalRecursionRepetitions = singleShapeVertexCount ** currentRecursion; currentShapeRecursionRepetition < totalRecursionRepetitions; currentShapeRecursionRepetition++, added++) {
                currentRecursionRepetition = {
                    index: currentShapeRecursionRepetition + 1,
                    offset: totalRecursionRepetitions > 1 ? currentShapeRecursionRepetition / (totalRecursionRepetitions - 1) : 1,
                    count: totalRecursionRepetitions,
                    level: { index: currentRecursion + 1, offset: level_offset, count: recursions },
                    parent: storedRecursion[paretRecursionIndex],
                };
                storedRecursion.push(currentRecursionRepetition);
                if (this.shapeUseRecursion) {
                    recursionPropArguments.recursion = currentRecursionRepetition;
                    childShape.generate(generateId, false, recursionPropArguments);
                    shapeBuffer = childShape.getBuffer();
                }
                const shapeVertexBufferIndex = recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength;
                // const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
                const centerVertexIndex = Math.floor(parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2 * recursionOffsetMultiplier);
                const centerX = recusiveShapeBuffer[centerVertexIndex];
                const centerY = recusiveShapeBuffer[centerVertexIndex + 1];
                const currentRecursionScale = recursionScale ** currentRecursion;
                for (let i = 0, len = singleShapeBufferLength; i < len; i += 2) {
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
                    const parentXScaled = shapeBuffer[i] / currentRecursionScale;
                    const parentYScaled = shapeBuffer[i + 1] / currentRecursionScale;
                    recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled;
                    recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled;
                    // }
                    // Bounding.add(
                    // 	tmpBounding,
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i],
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]
                    // )
                }
                if (added % singleShapeVertexCount === 0) {
                    paretRecursionIndex += 1;
                }
            }
        }
        // Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
        this.shapeRecursiveBuffer = recusiveShapeBuffer;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const propArguments = { repetition, shape: this };
            const recursions = Math.floor(this.getProp('recursions', propArguments, 1));
            const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
            // const realFrameLength = ShapeRecursive.summmation(recursions, this.shape.getBufferLength() / 2)
            const bufferIndex = {
                shape: this,
                frameLength: frameLength,
                singleRepetitionBounding,
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
                recursion: {
                    index: 1,
                    offset: 1,
                    count: 1,
                    level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
                },
            };
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                const currentRecursionRepetition = {
                    index: 1,
                    offset: 1,
                    count: 1,
                    level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
                };
                const recursionBufferIndex = {
                    ...bufferIndex,
                    recursion: currentRecursionRepetition,
                };
                const parent = (currentIndexed.parent
                    ? Shape_1.Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                    : recursionBufferIndex);
                this.indexedBuffer.push({
                    ...currentIndexed,
                    parent,
                });
            }
            if (recursions > 1) {
                const realVertexCount = this.shape.getBufferLength({ ...propArguments, parent: { ...bufferIndex } }) / 2;
                const vertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
                const storedRecursion = this.indexedBuffer.map(indexed => [indexed.parent.recursion]);
                let paretRecursionIndex = 0, added = 1;
                for (let i = 1; i < recursions; i++) {
                    const level_offset = recursions > 1 ? i / (recursions - 1) : 1;
                    for (let j = 0, len = vertexCount ** i; j < len; j++, added++) {
                        const recursionOffset = len > 1 ? j / (len - 1) : 1;
                        for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                            const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                            const currentRecursionRepetition = {
                                index: j + 1,
                                offset: recursionOffset,
                                count: len,
                                level: { index: i + 1, offset: level_offset, count: recursions },
                                parent: storedRecursion[childIndexed][paretRecursionIndex],
                            };
                            const recursionBufferIndex = { ...bufferIndex, recursion: currentRecursionRepetition };
                            const parent = currentIndexed.parent
                                ? Shape_1.Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                                : recursionBufferIndex;
                            this.indexedBuffer.push({ ...currentIndexed, parent });
                            storedRecursion[childIndexed].push(currentRecursionRepetition);
                            if (added % vertexCount === 0) {
                                paretRecursionIndex += 1;
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Retturn summation value
     *
     * @static
     * @param {number} recursion
     * @param {number} vertexCount
     * @returns {number}
     */
    static summmation(recursion, vertexCount) {
        if (recursion === 1)
            return 1;
        let result = 1;
        for (let i = 1; i < recursion; i++)
            result += vertexCount ** i;
        return result;
    }
    /**
     * Empty recursion repetition
     *
     * @static
     * @return {*}  {IRecursionRepetition}
     */
    static getEmptyRecursion() {
        return {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: 1, count: 1 },
        };
    }
}
exports.ShapeRecursive = ShapeRecursive;
//# sourceMappingURL=ShapeRecursive.js.map

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeFollow = void 0;
const Shape_1 = __webpack_require__(34);
/**
 * Repeat `shape` on each point of `follow`
 *
 * @category Scene.Containers
 */
class ShapeFollow extends Shape_1.Shape {
    /**
     * Creates an instance of ShapeFollow.
     *
     * @param {IShapeFollowSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'ShapeFollow';
        super(settings);
        this.follow = settings.follow || settings.shape;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        this.shapeUseFollow = !!settings.shapeUseFollow;
        // this.currentGenerationRecursiveBounding = Bounding.empty()
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        if (bClearIndexed) {
            this.shapeFollowBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     *
     * @returns {boolean}
     */
    isStatic() {
        return (this.follow ? this.follow.isStatic() : true) && super.isStatic();
    }
    /**
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return (this.follow ? this.follow.isStaticIndexed() : true) && super.isStaticIndexed();
    }
    /**
     * Return a buffer of children shape with recursion
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape && this.follow) {
            if (typeof this.shapeFollowBuffer === 'undefined' ||
                this.shapeUseParent ||
                this.shape.generateId !== generateId ||
                this.follow.generateId !== generateId) {
                this.bindBuffer(generateId, propArguments);
            }
            return this.shapeFollowBuffer;
        }
        return Shape_1.Shape.EMPTY_BUFFER;
    }
    /**
     * Generate Recoursive shape buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     */
    bindBuffer(generateId, propArguments) {
        const followShape = this.follow;
        followShape.generate(generateId, false, propArguments);
        const followBuffer = followShape.getBuffer();
        // const followIndexed = followShape.getIndexedBuffer() as Array<IBufferIndex>
        const followPropArguments = {
            ...propArguments,
            follow: {
                index: 1,
                offset: 1,
                count: 1,
            },
            // follow_repetition: followIndexed[0].repetition,
        };
        const childShape = this.shape;
        childShape.generate(generateId, false, followPropArguments);
        let shapeBuffer = childShape.getBuffer();
        // const tmpBounding = [undefined, undefined, undefined, undefined]
        const singleShapeBufferLength = shapeBuffer.length;
        const followShapeBuffer = new Float32Array(singleShapeBufferLength * (followBuffer.length / 2));
        const totalFollowVertexCount = followBuffer.length / 2;
        for (let currentShapeFollowRepetition = 0; currentShapeFollowRepetition < totalFollowVertexCount; currentShapeFollowRepetition++) {
            const currentFollowRepetition = {
                index: currentShapeFollowRepetition + 1,
                offset: totalFollowVertexCount > 1 ? currentShapeFollowRepetition / (totalFollowVertexCount - 1) : 1,
                count: totalFollowVertexCount,
            };
            if (this.shapeUseFollow) {
                followPropArguments.follow = currentFollowRepetition;
                // followPropArguments.follow_repetition = followIndexed[currentShapeFollowRepetition].repetition
                childShape.generate(generateId, false, followPropArguments);
                shapeBuffer = childShape.getBuffer();
            }
            const shapeVertexBufferIndex = currentShapeFollowRepetition * singleShapeBufferLength;
            // const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
            const centerVertexIndex = currentShapeFollowRepetition * 2;
            const centerX = followBuffer[centerVertexIndex];
            const centerY = followBuffer[centerVertexIndex + 1];
            for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
                followShapeBuffer[shapeVertexBufferIndex + i] = centerX + shapeBuffer[i];
                followShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + shapeBuffer[i + 1];
                // Bounding.add(
                // 	tmpBounding,
                // 	followShapeBuffer[shapeVertexBufferIndex + i],
                // 	followShapeBuffer[shapeVertexBufferIndex + i + 1]
                // )
            }
        }
        // Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
        this.shapeFollowBuffer = followShapeBuffer;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const propArguments = { repetition, shape: this };
            const bufferIndex = {
                shape: this,
                frameLength: frameLength,
                singleRepetitionBounding,
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
                follow: {
                    index: 1,
                    offset: 1,
                    count: 1,
                },
            };
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                const vertexCount = this.follow.getBuffer().length / 2; // this.follow.getBufferLength({ ...propArguments, parent: { ...bufferIndex } }) / 2
                for (let j = 0, len = vertexCount; j < len; j++) {
                    const followOffset = len > 1 ? j / (len - 1) : 1;
                    for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                        const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                        const currentFollowRepetition = {
                            index: j + 1,
                            offset: followOffset,
                            count: len,
                        };
                        const followBufferIndex = { ...bufferIndex, follow: currentFollowRepetition };
                        const parent = currentIndexed.parent
                            ? Shape_1.Shape.setIndexedParent(currentIndexed.parent, followBufferIndex)
                            : followBufferIndex;
                        this.indexedBuffer.push({ ...currentIndexed, parent });
                    }
                }
            }
        }
    }
    /**
     * Retturn summation value
     *
     * @static
     * @param {number} recursion
     * @param {number} vertexCount
     * @returns {number}
     */
    static summmation(recursion, vertexCount) {
        if (recursion === 1)
            return 1;
        let result = 1;
        for (let i = 1; i < recursion; i++)
            result += vertexCount ** i;
        return result;
    }
    /**
     * Empty recursion repetition
     *
     * @static
     * @return {*}  {IRecursionRepetition}
     */
    static getEmptyRecursion() {
        return {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: 1, count: 1 },
        };
    }
}
exports.ShapeFollow = ShapeFollow;
//# sourceMappingURL=ShapeFollow.js.map

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
const Adapt_1 = __webpack_require__(30);
const ShapeBuffer_1 = __webpack_require__(37);
/**
 *
 * @category Shapes.ShapeBuffer
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends ShapeBuffer_1.ShapeBuffer {
    /**
     * Two point, based on ShapeBuffer
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = Line.buffer;
        settings.adaptMode = Adapt_1.EAdaptMode.None;
        settings.bClosed = false;
        super(settings);
    }
    /**
     * @link https://gist.github.com/pborissow/5c92b77a804688385c77749d1187ba07
     */
    static toPolygon(buffer, thickness) {
        const solidified = [];
        //Convert thickness into an array as needed
        if (!Array.isArray(thickness)) {
            const _thickness = thickness;
            const points = buffer.length / 2;
            thickness = new Array(points);
            for (let i = 0; i < points; i++) {
                thickness[i] = _thickness;
            }
        }
        function getOffsets(ax, ay, bx, by, thickness) {
            const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy), scale = thickness / (2 * len);
            return [-scale * dy, scale * dx];
        }
        function getIntersection(a1, b1, a2, b2) {
            // directional constants
            const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]), k2 = (b2[1] - a2[1]) / (b2[0] - a2[0]);
            // if the directional constants are equal, the lines are parallel
            if (Math.abs(k1 - k2) < 0.00001) {
                return;
            }
            // y offset constants for both lines
            const m1 = a1[1] - k1 * a1[0];
            const m2 = a2[1] - k2 * a2[0];
            // compute x
            const x = (m1 - m2) / (k2 - k1);
            // use y = k * x + m to get y coordinate
            const y = k1 * x + m1;
            return [x, y];
        }
        let bFirst, bLast, prevA = [
            [0, 0],
            [0, 0],
        ], prevB = [
            [0, 0],
            [0, 0],
        ];
        for (let i = 0, len = buffer.length - 2; i < len; i += 2) {
            bFirst = i === 0;
            bLast = i === len - 2;
            const off = getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], thickness[i]);
            const p0a = [buffer[i] + off[0], buffer[i + 1] + off[1]];
            const p1a = [buffer[i + 2] + off[0], buffer[i + 3] + off[1]];
            const p0b = [buffer[i] - off[0], buffer[i + 1] - off[1]];
            const p1b = [buffer[i + 2] - off[0], buffer[i + 3] - off[1]];
            if (!bFirst) {
                const interA = getIntersection(prevA[0], prevA[1], p0a, p1a);
                if (interA) {
                    solidified.unshift(interA[1]);
                    solidified.unshift(interA[0]);
                }
                const interB = getIntersection(prevB[0], prevB[1], p0b, p1b);
                if (interB) {
                    solidified.push(interB[0]);
                    solidified.push(interB[1]);
                }
            }
            if (bFirst) {
                solidified.unshift(p0a[1]);
                solidified.unshift(p0a[0]);
                solidified.push(p0b[0]);
                solidified.push(p0b[1]);
            }
            if (bLast) {
                solidified.unshift(p1a[1]);
                solidified.unshift(p1a[0]);
                solidified.push(p1b[0]);
                solidified.push(p1b[1]);
            }
            if (!bLast) {
                prevA = [p0a, p1a];
                prevB = [p0b, p1b];
            }
        }
        return Float32Array.from(solidified);
    }
}
exports.Line = Line;
Line.buffer = [-1, 0, 1, 0];
//# sourceMappingURL=Line.js.map

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Triangle = void 0;
const Adapt_1 = __webpack_require__(30);
const ShapeBuffer_1 = __webpack_require__(37);
/**
 * Triangle ShapeBuffer
 *
 * @category Shapes.ShapeBuffer
 */
class Triangle extends ShapeBuffer_1.ShapeBuffer {
    /**
     * Creates an instance of Triangleeee.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Triangle
     */
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = Triangle.buffer;
        settings.adaptMode = Adapt_1.EAdaptMode.None;
        super(settings);
    }
}
exports.Triangle = Triangle;
Triangle.buffer = [1, 0, -1, 1, -1, -1];
//# sourceMappingURL=Triangle.js.map

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rect = void 0;
const Adapt_1 = __webpack_require__(30);
const ShapeBuffer_1 = __webpack_require__(37);
/**
 *
 * @category Shapes.ShapeBuffer
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect extends ShapeBuffer_1.ShapeBuffer {
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = Rect.buffer;
        settings.adaptMode = Adapt_1.EAdaptMode.None;
        super(settings);
    }
}
exports.Rect = Rect;
Rect.buffer = [1, 1, -1, 1, -1, -1, 1, -1];
//# sourceMappingURL=Rect.js.map

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Polygon = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * Polygon shape
 *
 * @category Shapes.ShapeLoop
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Polygon extends ShapeLoop_1.ShapeLoop {
    /**
     * Is based on ShapeLoop and you can pass `sideNumber` property to define
     * a number of sides.
     *
     * @param settings
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'Polygon';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber']);
        super(settings, true);
        this.props.sideNumber = settings.sideNumber;
        this.loop = {
            start: 0,
            end: math_1.PI2,
            inc: (propArguments) => {
                return math_1.PI2 / this.getProp('sideNumber', propArguments, 5);
            },
            vertex: shapeLoopRepetition => {
                return [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=Polygon.js.map

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circle = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 *
 * @category Shapes.ShapeLoop
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle extends ShapeLoop_1.ShapeLoop {
    /**
     * Based on ShapeLoop, the number of point (resolution) is based on sideLength.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    constructor(settings = {}) {
        settings.type = 'Circle';
        super(settings, true);
        this.loop = {
            start: 0,
            end: math_1.PI2,
            inc: propArguments => {
                const sideLength = this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ShapeLoop_1.ShapeLoop.PId2;
            },
            vertex: shapeLoopRepetition => [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)],
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Star = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * Polygon shape
 *
 * @category Shapes.ShapeLoop
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Star extends ShapeLoop_1.ShapeLoop {
    /**
     * Is based on ShapeLoop and you can pass `spikes` property to define
     * a number of spikes and `innerRadius`
     *
     * @param settings
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'Polygon';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['spikes', 'innerRadius']);
        super(settings, true);
        this.props.spikes = settings.spikes;
        this.props.innerRadius = settings.innerRadius;
        this.loop = {
            start: 0,
            end: math_1.PI2,
            inc: (propArguments) => {
                // dyamic binding in `generateLoopBuffer`
                return this.inc;
            },
            vertex: shapeLoopRepetition => {
                const angle = (Math.PI / this.spikes) * shapeLoopRepetition.index;
                const radius = shapeLoopRepetition.index % 2 === 0 ? 1 : this.innerRadius;
                return [Math.cos(angle) * radius, Math.sin(angle) * radius];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.spikes = this.getProp('spikes', propArguments, 5);
        this.innerRadius = this.getProp('innerRadius', propArguments, 0.5);
        this.inc = Math.PI / this.spikes;
        return super.generateLoopBuffer(propArguments);
    }
}
exports.Star = Star;
//# sourceMappingURL=Star.js.map

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rose = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * Rose shape
 *
 * @category Shapes.ShapeLoop
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends ShapeLoop_1.ShapeLoop {
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings = {}) {
        var _a, _b;
        settings.type = 'Rose';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd']);
        super(settings, true);
        this.props.n = (_a = settings.n) !== null && _a !== void 0 ? _a : 1;
        this.props.d = (_b = settings.d) !== null && _b !== void 0 ? _b : 2;
        this.loop = {
            start: 0,
            end: (propArguments) => Rose.getFinalAngleFromK(this.getProp('n', propArguments), this.getProp('d', propArguments)),
            inc: (propArguments) => {
                const n = this.getProp('n', propArguments);
                const d = this.getProp('d', propArguments);
                const sideLength = this.getRepetitionSideLength(propArguments);
                const sides = Math.pow(sideLength[0] * sideLength[1], 0.45);
                const k = d < n ? n / d : 1.5;
                return math_1.PI2 / (sides * k);
            },
            vertex: (shapeLoopRepetition) => {
                const f = Math.cos(this.k * shapeLoopRepetition.current);
                return [f * Math.cos(shapeLoopRepetition.current), f * Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.k = this.getProp('n', propArguments) / this.getProp('d', propArguments);
        return super.generateLoopBuffer(propArguments);
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
            return math_1.PI2;
        const k = n / d;
        const p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    }
}
exports.Rose = Rose;
//# sourceMappingURL=Rose.js.map

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spiral = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * Spiral shape
 *
 * @category Shapes.ShapeLoop
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends ShapeLoop_1.ShapeLoop {
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings = {}) {
        var _a, _b, _c;
        settings.type = 'Spiral';
        settings.bClosed = false;
        settings.loopDependencies = (settings.loopDependencies || []).concat(['twists', 'twistsStart', 'spiral']);
        super(settings, true);
        this.props.spiral = (_a = settings.spiral) !== null && _a !== void 0 ? _a : Spiral.types.ARCHIMEDE;
        this.props.twists = (_b = settings.twists) !== null && _b !== void 0 ? _b : 2;
        this.props.twistsStart = (_c = settings.twistsStart) !== null && _c !== void 0 ? _c : 0;
        this.loop = {
            start: (propArguments) => math_1.PI2 * this.getProp('twistsStart', propArguments),
            end: (propArguments) => math_1.PI2 *
                (this.getProp('twistsStart', propArguments) + this.getProp('twists', propArguments)),
            inc: (propArguments) => {
                const twists = this.getProp('twists', propArguments);
                const rep = math_1.PI2 * twists;
                const sideLength = this.getRepetitionSideLength(propArguments);
                const radius = 4 + Math.sqrt(sideLength[0] * sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: (shapeLoopRepetition) => {
                const r = this.r(shapeLoopRepetition.current);
                return [r * Math.cos(shapeLoopRepetition.current), r * Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.spiral = this.getProp('spiral', propArguments);
        this.r = Spiral.getRFromTSpiralType(this.spiral);
        return super.generateLoopBuffer(propArguments);
    }
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @returns {number}
     * @memberof Spiral
     */
    static getRFromTSpiralType(spiral) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return angle => angle / 10;
            case Spiral.types.HYPERBOLIC:
                return angle => (1 / angle) * 3;
            case Spiral.types.FERMAT:
                return angle => angle ** 0.5 / 3;
            case Spiral.types.LITUUS:
                return angle => angle ** -0.5;
            case Spiral.types.LOGARITHMIC:
                return angle => Math.E ** (angle * 0.2) / 10;
        }
        return angle => angle;
    }
}
exports.Spiral = Spiral;
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
//# sourceMappingURL=Spiral.js.map

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lissajous = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * Lissajous shape
 *
 * @category Shapes.ShapeLoop
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop_1.ShapeLoop {
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings = {}) {
        settings.type = 'Lissajous';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz']);
        super(settings, true);
        this.props.wx = settings.wx || 1;
        this.props.wy = settings.wy || 2;
        this.props.wz = settings.wz || 0;
        this.loop = {
            start: 0,
            end: math_1.PI2,
            inc: propArguments => {
                const wx = this.getProp('wx', propArguments);
                const wy = this.getProp('wy', propArguments);
                const ratio = wx == wy ? ShapeLoop_1.ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                const sideLength = this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio;
            },
            vertex: (shapeLoopRepetition) => {
                return this.wx === this.wy
                    ? [Math.cos(shapeLoopRepetition.current + this.wz), Math.sin(shapeLoopRepetition.current)]
                    : [Math.cos(this.wx * shapeLoopRepetition.current + this.wz), Math.sin(this.wy * shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.wx = this.getProp('wx', propArguments, 1);
        this.wy = this.getProp('wy', propArguments, 2);
        this.wz = this.getProp('wz', propArguments, 2);
        return super.generateLoopBuffer(propArguments);
    }
}
exports.Lissajous = Lissajous;
//# sourceMappingURL=Lissajous.js.map

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuperShape = void 0;
const math_1 = __webpack_require__(29);
const ShapeLoop_1 = __webpack_require__(36);
/**
 * ShperShape
 *
 * @category Shapes.ShapeLoop
 * @class SuperShape
 * @extends {ShapeLoop}
 */
class SuperShape extends ShapeLoop_1.ShapeLoop {
    /**
     * Creates an instance of SuperShape.
     *
     * @param {ISuperShapeSettings} [settings={}]
     * @memberof SuperShape
     */
    constructor(settings = {}) {
        var _a, _b, _c, _d, _e, _f;
        settings.type = 'SuperShape';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['a', 'b', 'm', 'n1', 'n2', 'n3']);
        super(settings, true);
        this.props.a = (_a = settings.a) !== null && _a !== void 0 ? _a : 1;
        this.props.b = (_b = settings.b) !== null && _b !== void 0 ? _b : 1;
        this.props.m = (_c = settings.m) !== null && _c !== void 0 ? _c : 6;
        this.props.n1 = (_d = settings.n1) !== null && _d !== void 0 ? _d : 1;
        this.props.n2 = (_e = settings.n2) !== null && _e !== void 0 ? _e : 1;
        this.props.n3 = (_f = settings.n3) !== null && _f !== void 0 ? _f : 1;
        this.loop = {
            start: 0,
            end: math_1.PI2,
            inc: propArguments => {
                const sideLength = this.getRepetitionSideLength(propArguments);
                return Math.PI / Math.pow(sideLength[0] * sideLength[1], 0.5);
            },
            vertex: (shapeLoopRepetition) => {
                const angle = shapeLoopRepetition.current;
                const m = (this.m * angle) / 4;
                const a = Math.abs(Math.cos(m) / this.a) ** this.n2;
                const b = Math.abs(Math.sin(m) / this.b) ** this.n3;
                const raux = (a + b) ** (1 / this.n1);
                const r = raux === 0 ? 1 : 1 / raux;
                return [r * Math.cos(angle), r * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.a = this.getProp('a', propArguments);
        this.b = this.getProp('b', propArguments);
        this.m = this.getProp('m', propArguments);
        this.n1 = this.getProp('n1', propArguments);
        this.n2 = this.getProp('n2', propArguments);
        this.n3 = this.getProp('n3', propArguments);
        return super.generateLoopBuffer(propArguments);
    }
}
exports.SuperShape = SuperShape;
//# sourceMappingURL=SuperShape.js.map

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modifiers = void 0;
const Adapt_1 = __webpack_require__(30);
const Mirror_1 = __webpack_require__(51);
const Smooth_1 = __webpack_require__(52);
const Solidify_1 = __webpack_require__(54);
const Subdivide_1 = __webpack_require__(55);
const Close_1 = __webpack_require__(53);
const Offset_1 = __webpack_require__(56);
const Modifiers = {
    Adapt: Adapt_1.Adapt,
    Mirror: Mirror_1.Mirror,
    Smooth: Smooth_1.Smooth,
    Solidify: Solidify_1.Solidify,
    Subdivide: Subdivide_1.Subdivide,
    Close: Close_1.Close,
    Offset: Offset_1.Offset,
};
exports.Modifiers = Modifiers;
//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mirror = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * Reflects the shape on the x and y axes
 *
 * @category Modifiers
 * @class Mirror
 * @extends {Modifier}
 */
class Mirror extends Modifier_1.Modifier {
    constructor(args = { x: true, y: true }) {
        super();
        this.x = args.x === true;
        this.y = args.y === true;
    }
    apply(buffer, bClosed) {
        const bufferLength = buffer.length;
        const mirror = new Float32Array(bufferLength * (this.x ? 2 : 1) * (this.y ? 2 : 1));
        const sideLengthX = 1;
        const sideLengthY = 1;
        if (this.x && this.y) {
            const bufferLengthX2 = bufferLength + bufferLength;
            const bufferLengthX3 = bufferLengthX2 + bufferLength;
            // |1|2|
            // |4|3|
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i] - sideLengthX;
                mirror[i + 1] = buffer[i + 1] - sideLengthY;
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX;
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] - sideLengthY;
                mirror[bufferLengthX2 + i] = buffer[i] * -1 + sideLengthX;
                mirror[bufferLengthX2 + i + 1] = buffer[i + 1] * -1 + sideLengthY;
                mirror[bufferLengthX3 + i] = buffer[bufferLength - 2 - i] - sideLengthX;
                mirror[bufferLengthX3 + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY;
            }
        }
        else if (this.x) {
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i] - sideLengthX;
                mirror[i + 1] = buffer[i + 1];
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX;
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1];
            }
        }
        else if (this.y) {
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i];
                mirror[i + 1] = buffer[i + 1] - sideLengthY;
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i];
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY;
            }
        }
        else {
            return buffer;
        }
        return mirror;
    }
}
exports.Mirror = Mirror;
//# sourceMappingURL=Mirror.js.map

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Smooth = void 0;
const Utilities_1 = __webpack_require__(32);
const Close_1 = __webpack_require__(53);
const Modifier_1 = __webpack_require__(31);
/**
 * Smooth the corners
 *
 * @category Modifiers
 * @class Smooth
 * @extends {Modifier}
 */
class Smooth extends Modifier_1.Modifier {
    constructor(args = {}) {
        super();
        this.level = args.level || 1;
        const tension = Array.isArray(args.tension) ? args.tension : [args.tension];
        this.tension = new Array(this.level).fill(0.5).map((v, i) => Utilities_1.clamp(0, 1, tension[i] || v));
        this.level = this.level < 1 ? 1 : this.level;
        this.closed = args.closed === true;
    }
    apply(buffer, bClosed) {
        if (bClosed && !Close_1.Close.isClosed(buffer)) {
            const bufferLen = buffer.length;
            const mofified = new Float32Array(bufferLen + 2);
            mofified.set(buffer, 0);
            mofified[bufferLen] = buffer[0];
            mofified[bufferLen + 1] = buffer[1];
            buffer = mofified;
        }
        let smoothed = buffer;
        for (let i = 0, len = this.level; i < len; i++)
            smoothed = Smooth.smooth(smoothed, this.tension[i], bClosed || this.closed);
        return smoothed;
    }
    /**
     * Chaikin smooth
     *
     * the tension factor defines a scale between corner cutting distance in segment half length,
     * i.e. between 0.05 and 0.45. The opposite corner will be cut by the inverse
     * (i.e. 1-cutting distance) to keep symmetry.
     * with a tension value of 0.5 this amounts to 0.25 = 1/4 and 0.75 = 3/4,
     * the original Chaikin values
     *
     * @link https://www.codeproject.com/Articles/1093960/D-Polyline-Vertex-Smoothing
     * @param buffer
     */
    static smooth(buffer, tension = 0.5, bClosed = false) {
        const bufferLength = buffer.length;
        const smoothed = new Float32Array((buffer.length - (bClosed ? 1 : 0)) * 2);
        if (!bClosed) {
            smoothed[0] = buffer[0];
            smoothed[1] = buffer[1];
        }
        const cutdist = 0.05 + tension * 0.4;
        const ncutdist = 1 - cutdist;
        let smoothedLength = bClosed ? 0 : 2;
        for (let i = 0, len = bufferLength - 2; i < len; i += 2, smoothedLength += 4) {
            // q
            smoothed[smoothedLength] = ncutdist * buffer[i] + cutdist * buffer[i + 2];
            smoothed[smoothedLength + 1] = ncutdist * buffer[i + 1] + cutdist * buffer[i + 3];
            // r
            smoothed[smoothedLength + 2] = cutdist * buffer[i] + ncutdist * buffer[i + 2];
            smoothed[smoothedLength + 3] = cutdist * buffer[i + 1] + ncutdist * buffer[i + 3];
        }
        if (!bClosed) {
            smoothed[smoothedLength] = buffer[bufferLength - 2];
            smoothed[smoothedLength + 1] = buffer[bufferLength - 1];
        }
        else {
            smoothed[smoothedLength] = smoothed[0];
            smoothed[smoothedLength + 1] = smoothed[1];
        }
        return smoothed;
    }
}
exports.Smooth = Smooth;
//# sourceMappingURL=Smooth.js.map

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Close = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * Adds a closing point if it doesn't exist
 *
 * @category Modifiers
 * @class Close
 * @extends {Modifier}
 */
class Close extends Modifier_1.Modifier {
    constructor() {
        super();
    }
    apply(buffer, bClosed, shape) {
        return Close.call(buffer);
    }
    static call(buffer) {
        const len = buffer.length;
        if (Close.isClosed(buffer))
            return buffer;
        const result = new Float32Array(len + 2);
        result.set(buffer, 0);
        result[len] = result[0];
        result[len + 1] = result[1];
        return result;
    }
    static isClosed(buffer) {
        const len = buffer.length;
        return buffer[0] === buffer[len - 2] && buffer[1] === buffer[len - 1];
    }
}
exports.Close = Close;
//# sourceMappingURL=Close.js.map

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Solidify = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * Try tracing the edges of a path
 *
 * @category Modifiers
 * @class Solidify
 * @extends {Modifier}
 */
class Solidify extends Modifier_1.Modifier {
    constructor(args = {}) {
        super();
        this.closed = args.closed === true;
        this.thickness = args.thickness || 0.2;
        this.error = args.error;
    }
    apply(buffer, bClosed) {
        return Solidify.solidify(buffer, this.thickness, this.closed, this.error);
    }
    /**
     * @link https://gist.github.com/kekscom/4194148
     */
    static solidify(buffer, thickness, bClosed = false, error) {
        const solidified = [];
        thickness = typeof thickness === 'number' ? [thickness] : thickness;
        const thicknessLength = thickness.length;
        let bFirst, bLast, prevA = [
            [0, 0],
            [0, 0],
        ], prevB = [
            [0, 0],
            [0, 0],
        ];
        for (let i = 0, t = 0, len = buffer.length - 2; i < len; i += 2, t++) {
            bFirst = i === 0;
            bLast = i === len - 2;
            const currentThicknessRep = {
                index: i + 1,
                offset: i / len,
                count: len,
            };
            const nextThicknessRep = {
                index: i + 2,
                offset: (i + 1) / len,
                count: len,
            };
            const currentThickness = typeof thickness === 'function' ? thickness(currentThicknessRep) : thickness[t % thicknessLength];
            const nextThickness = typeof thickness === 'function' ? thickness(nextThicknessRep) : thickness[(t + 1) % thicknessLength];
            const off = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], currentThickness);
            const off2 = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], nextThickness);
            const p0a = [buffer[i] + off[0], buffer[i + 1] + off[1]];
            const p1a = [buffer[i + 2] + off2[0], buffer[i + 3] + off2[1]];
            const p0b = [buffer[i] - off[0], buffer[i + 1] - off[1]];
            const p1b = [buffer[i + 2] - off2[0], buffer[i + 3] - off2[1]];
            if (!bFirst) {
                const interA = Solidify.getIntersection(prevA[0], prevA[1], p0a, p1a, error);
                if (interA) {
                    solidified.unshift(interA[1]);
                    solidified.unshift(interA[0]);
                }
                const interB = Solidify.getIntersection(prevB[0], prevB[1], p0b, p1b, error);
                if (interB) {
                    solidified.push(interB[0]);
                    solidified.push(interB[1]);
                }
            }
            if (bFirst) {
                solidified.unshift(p0a[1]);
                solidified.unshift(p0a[0]);
                solidified.push(p0b[0]);
                solidified.push(p0b[1]);
            }
            if (bLast) {
                solidified.unshift(p1a[1]);
                solidified.unshift(p1a[0]);
                solidified.push(p1b[0]);
                solidified.push(p1b[1]);
            }
            if (!bLast) {
                prevA = [p0a, p1a];
                prevB = [p0b, p1b];
            }
        }
        if (bClosed) {
            const centerIndex = buffer.length - 2;
            const lastIndex = solidified.length - 2;
            const x = 0.5 * solidified[0] + solidified[centerIndex] * 0.5;
            const y = 0.5 * solidified[1] + solidified[centerIndex + 1] * 0.5;
            const x2 = 0.5 * solidified[centerIndex + 2] + solidified[lastIndex] * 0.5;
            const y2 = 0.5 * solidified[centerIndex + 3] + solidified[lastIndex + 1] * 0.5;
            solidified[0] = x;
            solidified[1] = y;
            solidified[centerIndex] = x;
            solidified[centerIndex + 1] = y;
            solidified[centerIndex + 2] = x2;
            solidified[centerIndex + 3] = y2;
            solidified[lastIndex] = x2;
            solidified[lastIndex + 1] = y2;
        }
        return Float32Array.from(solidified);
    }
    static getOffsets(ax, ay, bx, by, thickness) {
        const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy), scale = thickness / (2 * len);
        return [-scale * dy, scale * dx];
    }
    static getIntersection(a1, b1, a2, b2, error = 0.00001) {
        // directional constants
        const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]), k2 = (b2[1] - a2[1]) / (b2[0] - a2[0]);
        // if the directional constants are equal, the lines are parallel
        // if (Math.abs(k1 - k2) < 0.00001) {
        if (Math.abs(k1 - k2) < error) {
            return;
        }
        // y offset constants for both lines
        const m1 = a1[1] - k1 * a1[0];
        const m2 = a2[1] - k2 * a2[0];
        // compute x
        const x = (m1 - m2) / (k2 - k1);
        // use y = k * x + m to get y coordinate
        const y = k1 * x + m1;
        return [x, y];
    }
}
exports.Solidify = Solidify;
//# sourceMappingURL=Solidify.js.map

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subdivide = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * Adds points on the edges of a shape
 *
 * @category Modifiers
 * @class Subdivide
 * @extends {Modifier}
 */
class Subdivide extends Modifier_1.Modifier {
    constructor(args = {}) {
        super();
        this.level = args.level || 1;
        this.level = this.level < 1 ? 1 : this.level;
    }
    apply(buffer, bClosed) {
        const level = this.level;
        let subdivided = buffer;
        if (subdivided && subdivided.length > 0) {
            for (let i = 0; i < level; i++)
                subdivided = Subdivide.subdivide(subdivided, bClosed);
        }
        return subdivided;
    }
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     */
    static subdivide(buffer, bClosed = false) {
        const bufferLength = buffer.length;
        const subdivided = new Float32Array(bufferLength * 2 - (bClosed ? 0 : 2));
        for (let i = 0; i < bufferLength; i += 2) {
            if (i === 0) {
                subdivided[0] = buffer[0];
                subdivided[1] = buffer[1];
            }
            else {
                const px = buffer[i - 2];
                const py = buffer[i - 1];
                const x = buffer[i];
                const y = buffer[i + 1];
                const nx = (x + px) / 2;
                const ny = (y + py) / 2;
                subdivided[(i - 1) * 2] = nx;
                subdivided[(i - 1) * 2 + 1] = ny;
                subdivided[i * 2] = x;
                subdivided[i * 2 + 1] = y;
            }
        }
        if (bClosed) {
            subdivided[(bufferLength - 1) * 2] = (buffer[0] + buffer[bufferLength - 2]) / 2;
            subdivided[(bufferLength - 1) * 2 + 1] = (buffer[1] + buffer[bufferLength - 1]) / 2;
        }
        return subdivided;
    }
}
exports.Subdivide = Subdivide;
//# sourceMappingURL=Subdivide.js.map

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Offset = void 0;
const Modifier_1 = __webpack_require__(31);
/**
 * Takes a part of the buffer
 *
 * @category Modifiers
 * @class Offset
 * @extends {Modifier}
 */
class Offset extends Modifier_1.Modifier {
    constructor(args = { from: 0, to: undefined }) {
        super();
        this.from = args.from;
        this.to = args.to;
    }
    apply(buffer, bClosed) {
        return buffer.subarray(this.from, this.to ? (this.to < 0 ? buffer.length + this.to : this.to) : undefined);
    }
}
exports.Offset = Offset;
//# sourceMappingURL=Offset.js.map

/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.interpolateColorHSL = exports.interpolateColorRGB = exports.cosp = exports.sinp = exports.clockOffset = exports.clock = void 0;
/**
 * Return time (from 0 to duration) in milliseconds
 *
 * @category Utilities
 * @export
 * @param {number} time Current time
 * @param {number} duration Clock duration
 * @param {(number | boolean)} [loop=true]
 * @param {('normal' | 'reverse' | 'alternate')} [direction='alternate']
 * @param {number} [delay=0]
 * @param {number} [afterDelay=0]
 * @return {*}  {number} Between 0 and duration
 */
function clock(time, duration, loop = true, direction = 'alternate', delay = 0, afterDelay = 0) {
    const totalDuration = direction === 'normal'
        ? duration + delay
        : direction === 'reverse'
            ? duration + delay
            : duration * 2 + delay + afterDelay;
    if ((typeof loop === 'number' && time >= totalDuration * loop) || (loop === false && time >= totalDuration)) {
        return direction === 'normal' ? duration : 0;
    }
    time %= totalDuration;
    if ((time -= delay) <= 0) {
        return 0;
    }
    if (direction === 'alternate') {
        if (time <= duration) {
            // normal
            return time;
        }
        else {
            // reverse
            time -= duration;
            if ((time -= afterDelay) >= 0) {
                return duration - (time >= duration ? duration : time);
            }
            return duration;
        }
    }
    else {
        return time >= duration ? duration : time;
    }
}
exports.clock = clock;
/**
 * Return offset between 0 and 1 from current time based on duration and other parameters
 *
 * @category Utilities
 * @export
 * @param {number} time
 * @param {number} duration
 * @param {(number | boolean)} [loop=true]
 * @param {('normal' | 'reverse' | 'alternate')} [direction='alternate']
 * @param {number} [delay=0]
 * @param {number} [afterDelay=0]
 * @return {*}  {number}
 */
function clockOffset(time, duration, loop = true, direction = 'alternate', delay = 0, afterDelay = 0) {
    return clock(time, duration, loop, direction, delay, afterDelay) / duration;
}
exports.clockOffset = clockOffset;
const PI2 = Math.PI * 2;
/**
 * Return sin of period 'durate' in time 'time'
 *
 * @category Utilities
 * @export
 * @param {number} time
 * @param {number} durate
 * @param {number} phase
 * @param {boolean} [normalize=false]
 * @return {*}  {number}
 */
function sinp(time, durate, phase = 0, normalize = false) {
    const value = Math.sin((time * PI2) / durate + phase);
    return normalize ? 0.5 + value * 0.5 : value;
}
exports.sinp = sinp;
/**
 * Return cos of period 'durate' in time 'time'
 *
 * @category Utilities
 * @export
 * @param {number} time
 * @param {number} durate
 * @param {number} phase
 * @param {boolean} [normalize=false]
 * @return {*}  {number}
 */
function cosp(time, durate, phase = 0, normalize = false) {
    const value = Math.cos((time * PI2) / durate + phase);
    return normalize ? 0.5 + value * 0.5 : value;
}
exports.cosp = cosp;
/**
 *
 * @category Utilities
 * @export
 * @param {IConvertedColor} start
 * @param {IConvertedColor} end
 * @param {number} offset
 * @return {*}  {string}
 */
function interpolateColorRGB(start, end, offset) {
    const r = start.r + offset * (end.r - start.r);
    const g = start.g + offset * (end.g - start.g);
    const b = start.b + offset * (end.b - start.b);
    const alpha = start.alpha + offset * (end.alpha - start.alpha);
    return `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${alpha})`;
}
exports.interpolateColorRGB = interpolateColorRGB;
/**
 *
 * @category Utilities
 * @export
 * @param {IConvertedColor} start
 * @param {IConvertedColor} end
 * @param {number} offset
 * @return {*}  {string}
 */
function interpolateColorHSL(start, end, offset) {
    const h = start.h + offset * (end.h - start.h);
    const s = start.s + offset * (end.s - start.s);
    const l = start.l + offset * (end.l - start.l);
    const alpha = start.alpha + offset * (end.alpha - start.alpha);
    return `hsla(${h},${s}%,${l}%,${alpha})`;
}
exports.interpolateColorHSL = interpolateColorHSL;
//# sourceMappingURL=utilities.js.map

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createAnimation = void 0;
const createInterpolator_1 = __webpack_require__(61);
/**
 * Create TAnimation from object
 *
 * @category Animation
 * @param simpleAnimation
 * @returns
 */
function createAnimation(simpleAnimation) {
    const interpolate = createInterpolator_1.createInterpolationCallback(simpleAnimation);
    if (typeof interpolate === 'undefined')
        return undefined;
    const delay = simpleAnimation.delay || 0;
    const afterDelay = simpleAnimation.afterDelay || 0;
    const direction = simpleAnimation.direction || 'normal';
    const duration = simpleAnimation.duration || 1000;
    const totalDuration = direction === 'normal'
        ? duration + delay
        : direction === 'reverse'
            ? duration + delay
            : duration * 2 + delay + afterDelay;
    const loop = typeof simpleAnimation.loop === 'number' ? simpleAnimation.loop : !!simpleAnimation.loop;
    const bindedValues = {
        delay,
        afterDelay,
        direction,
        duration,
        totalDuration,
        loop,
    };
    const animationFunction = createInterpolator_1.createInterpolator(simpleAnimation.interpolator);
    const animation = {
        loop: 0,
        offset: 0,
        loopDuration: totalDuration,
        direction: direction === 'alternate' ? 'normal' : direction,
        started: false,
        ended: false,
        value: undefined,
    };
    animation.update = createUpdate(animation, bindedValues, animationFunction, interpolate);
    return animation;
}
exports.createAnimation = createAnimation;
/**
 *
 * @internal
 * @param animation
 * @param bindedValues
 * @param animationFunction
 * @param interpolate
 * @returns
 */
function createUpdate(animation, bindedValues, animationFunction, interpolate) {
    const { loop, totalDuration, delay, afterDelay, direction, duration } = bindedValues;
    return (time) => {
        // Check animation is ended
        if ((typeof loop === 'number' && time >= totalDuration * loop) ||
            (loop === false && time >= bindedValues.totalDuration)) {
            animation.started = false;
            animation.ended = true;
            animation.offset = animationFunction(direction === 'normal' ? duration : 0, duration);
            animation.value = interpolate(animation.offset);
            return;
        }
        animation.loop = Math.ceil(time / totalDuration);
        time %= totalDuration;
        if ((time -= delay) <= 0) {
            animation.started = false;
            animation.offset = animationFunction(0, duration);
            animation.value = interpolate(animation.offset);
            return;
        }
        animation.started = true;
        if (direction === 'alternate') {
            if (time <= duration) {
                animation.direction = 'normal';
                animation.offset = animationFunction(time, duration);
            }
            else {
                animation.direction = 'reverse';
                time -= duration;
                // wait afterDelay
                if ((time -= afterDelay) >= 0) {
                    animation.offset = 1 - animationFunction(time >= duration ? duration : time, duration);
                }
                else {
                    animation.offset = 1;
                }
            }
        }
        else {
            const animationValue = animationFunction(time >= duration ? duration : time, duration);
            animation.offset = direction === 'normal' ? animationValue : 1 - animationValue;
        }
        animation.value = interpolate(animation.offset);
    };
}
//# sourceMappingURL=createAnimation.js.map

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createInterpolator = exports.createInterpolationCallback = void 0;
const color_1 = __webpack_require__(62);
const bezier_easing_1 = __webpack_require__(67);
const Easings_1 = __webpack_require__(68);
const utilities_1 = __webpack_require__(59);
/**
 * Return a callback for value interpolation passing offset from 0 to 1
 *
 * @category Interpolation
 * @param simpleAnimation
 * @returns
 */
function createInterpolationCallback(simpleAnimation) {
    const from = Array.isArray(simpleAnimation.from) ? simpleAnimation.from : [simpleAnimation.from];
    const to = Array.isArray(simpleAnimation.to) ? simpleAnimation.to : [simpleAnimation.to];
    const round = simpleAnimation.round;
    const colorInterpolation = simpleAnimation.colorTransitionMode === 'hue' ? utilities_1.interpolateColorHSL : utilities_1.interpolateColorRGB;
    if (from.length !== to.length)
        return undefined;
    const callbacks = [];
    for (let i = 0, len = from.length; i < len; i++) {
        if (typeof from[i] !== typeof to[i]) {
            console.warn('[@urpflanze/animation]: `from` and `to` values mismatch');
            return undefined;
        }
        else {
            if (typeof from[i] !== 'string') {
                const a = from[i], b = to[i];
                callbacks.push(typeof round !== 'undefined'
                    ? (offset) => offset === 1 ? b : offset === 0 ? a : Math.round((a + offset * (b - a)) * round) / round
                    : (offset) => (offset === 1 ? b : offset === 0 ? a : a + offset * (b - a)));
            }
            else {
                const a = from[i];
                const b = to[i];
                const parsed_a = color_1.parseColorAndConvert(a);
                const parsed_b = color_1.parseColorAndConvert(b);
                if (typeof parsed_a !== 'undefined' && typeof parsed_b !== 'undefined') {
                    callbacks.push((offset) => offset === 1 ? b : offset === 0 ? a : colorInterpolation(parsed_a, parsed_b, offset));
                }
            }
        }
    }
    return (offset) => {
        const values = callbacks.map(c => c(offset));
        return values.length === 1 ? values[0] : values;
    };
}
exports.createInterpolationCallback = createInterpolationCallback;
/**
 * Return a callback for calculate offset (0 to 1) from elapsed time and animation duration
 *
 * @category Interpolation
 * @param type
 * @returns
 */
function createInterpolator(type) {
    var _a, _b;
    switch (typeof type) {
        case 'function':
            return (elapsed, duration) => type(elapsed / duration, elapsed);
        case 'string':
            switch (type) {
                case 'wave':
                    return (elapsed, duration) => 0.5 + Math.sin((elapsed * Math.PI * 2) / duration + Math.PI * 1.5) * 0.5;
                default: {
                    if (type in Easings_1.Easings) {
                        const easing = Easings_1.Easings[type];
                        return (elapsed, duration) => easing(elapsed, 0, 1, duration);
                    }
                    return (elapsed, duration) => Easings_1.Easings.linear(elapsed, 0, 1, duration);
                }
            }
        case 'object':
            switch (type.type) {
                case 'wave': {
                    const phase = Math.PI * 1.5 + (((_a = type.params) === null || _a === void 0 ? void 0 : _a.phase) || 0);
                    return (elapsed, duration) => {
                        return 0.5 + Math.sin((elapsed * Math.PI * 2) / duration + phase) * 0.5;
                    };
                }
                case 'elasticIn':
                case 'elasticOut':
                case 'elasticInOut': {
                    const easing = Easings_1.Easings[type.type];
                    const { amplitude, period } = type.params || {};
                    return (elapsed, duration) => easing(elapsed, 0, 1, duration, amplitude, period);
                }
                case 'backIn':
                case 'backOut':
                case 'backInOut': {
                    const easing = Easings_1.Easings[type.type];
                    const overshoot = ((_b = type.params) === null || _b === void 0 ? void 0 : _b.overshoot) || undefined;
                    return (elapsed, duration) => easing(elapsed, 0, 1, duration, overshoot);
                }
                case 'cubicBezier': {
                    const easing = bezier_easing_1.default(type.params[0], type.params[1], type.params[2], type.params[3]);
                    return (elapsed, duration) => easing(elapsed / duration);
                }
            }
    }
    return (elapsed, duration) => Easings_1.Easings.linear(elapsed, 0, 1, duration);
}
exports.createInterpolator = createInterpolator;
//# sourceMappingURL=createInterpolator.js.map

/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rgbToHsl = exports.hslToRgb = exports.rgbToHex = void 0;
/**
 * Convert rgb to hex
 *
 * @param r number between 0 - 255
 * @param g number between 0 - 255
 * @param b number between 0 - 255
 * @returns #ffffff
 */
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
exports.rgbToHex = rgbToHex;
/**
 * Convert hsl (0-360, 0-100, 0-100) color to rgb(0-255, 0-255, 0-255)
 *
 * @param {number} h number between 0 - 360
 * @param {number} s number between 0 - 100
 * @param {number} l number between 0 - 100
 * @returns {[number, number, number]} [0-255, 0-255, 0-255]
 */
function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        const hue2rgb = (p, q, t) => {
            t += t < 0 ? 1 : t > 1 ? -1 : 0;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [(0.5 + r * 255) << 0, (0.5 + g * 255) << 0, (0.5 + b * 255) << 0];
}
exports.hslToRgb = hslToRgb;
/**
 * Convert rbg (0-255, 0-255, 0-255) to hsl (0-360, 0-100, 0-100)
 *
 * @param {number} r number between 0 - 255
 * @param {number} g number between 0 - 255
 * @param {number} b number between 0 - 255
 * @returns {[number, number, number]} (0-360, 0-100, 0-100)
 */
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s;
    if (max === min) {
        h = s = 0;
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
        h = h / 6;
    }
    return [(0.5 + h * 360) << 0, (0.5 + s * 100) << 0, (0.5 + l * 100) << 0];
}
exports.rgbToHsl = rgbToHsl;
//# sourceMappingURL=conversions.js.map

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseColor = exports.parseColorAndConvert = void 0;
const htmlcolors_1 = __webpack_require__(66);
const conversions_1 = __webpack_require__(64);
/**
 * Convert color to IConvertedColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 * hsla format: hsla(360, 100%, 100%, 1)
 * rgba format: rgb(255, 255, 255, 1)
 *
 * @param {(string | number)} color
 * @returns {(IConvertedColor | undefined)}
 */
function parseColorAndConvert(color) {
    const parsed = parseColor(color);
    if (parsed) {
        if (parsed.type === 'hsl') {
            const [r, g, b] = conversions_1.hslToRgb(parsed.a, parsed.b, parsed.c);
            return {
                r,
                g,
                b,
                h: parsed.a,
                s: parsed.b,
                l: parsed.c,
                alpha: parsed.alpha,
            };
        }
        else {
            const [h, s, l] = conversions_1.rgbToHsl(parsed.a, parsed.b, parsed.c);
            return {
                h,
                s,
                l,
                r: parsed.a,
                g: parsed.b,
                b: parsed.c,
                alpha: parsed.alpha,
            };
        }
    }
}
exports.parseColorAndConvert = parseColorAndConvert;
/**
 * Convert color to IColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 * hsla format: hsla(360, 100%, 100%, 1)
 * rgba format: rgb(255, 255, 255, 1)
 *
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
    if (htmlcolors_1.default[color])
        color = htmlcolors_1.default[color];
    let match = /^#([0-9a-f]{3,8})$/i.exec(color);
    if (match) {
        const hex = match[1];
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
        const [, , type, a, b, c, alpha] = match;
        return {
            type: type,
            a: +a,
            b: +b,
            c: +c,
            alpha: alpha ? +alpha : 1,
        };
    }
}
exports.parseColor = parseColor;
//# sourceMappingURL=parsing.js.map

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const colors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgrey: '#d3d3d3',
    lightgreen: '#90ee90',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370d8',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#d87093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};
exports.default = colors;
//# sourceMappingURL=htmlcolors.js.map

/***/ }),
/* 67 */
/***/ ((module) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Easings = void 0;
/**
 * Easing functions
 *
 * @category Interpolation
 * @export
 */
exports.Easings = {
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    linear: (timeOrOffset, start, end, duration = 1) => (end * timeOrOffset) / duration + start,
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quadraticIn: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return end * timeOrOffset * timeOrOffset + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quadraticOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return -end * timeOrOffset * (timeOrOffset - 2) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quadraticInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (end / 2) * timeOrOffset * timeOrOffset + start;
        timeOrOffset--;
        return (-end / 2) * (timeOrOffset * (timeOrOffset - 2) - 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicIn: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return end * timeOrOffset * timeOrOffset * timeOrOffset + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        timeOrOffset--;
        return end * (timeOrOffset * timeOrOffset * timeOrOffset + 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    cubicInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (end / 2) * timeOrOffset * timeOrOffset * timeOrOffset + start;
        timeOrOffset -= 2;
        return (end / 2) * (timeOrOffset * timeOrOffset * timeOrOffset + 2) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticIn: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return end * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        timeOrOffset--;
        return -end * (timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset - 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quarticInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (end / 2) * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + start;
        timeOrOffset -= 2;
        return (-end / 2) * (timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset - 2) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticIn: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return end * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        timeOrOffset--;
        return end * (timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    quinticInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (end / 2) * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + start;
        timeOrOffset -= 2;
        return (end / 2) * (timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset * timeOrOffset + 2) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalIn: (timeOrOffset, start, end, duration = 1) => {
        return -end * Math.cos((timeOrOffset / duration) * (Math.PI / 2)) + end + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalOut: (timeOrOffset, start, end, duration = 1) => {
        return end * Math.sin((timeOrOffset / duration) * (Math.PI / 2)) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    sinusoidalInOut: (timeOrOffset, start, end, duration = 1) => {
        return (-end / 2) * (Math.cos((Math.PI * timeOrOffset) / duration) - 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialIn: (timeOrOffset, start, end, duration = 1) => {
        return end * Math.pow(2, 10 * (timeOrOffset / duration - 1)) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialOut: (timeOrOffset, start, end, duration = 1) => {
        return end * (-Math.pow(2, (-10 * timeOrOffset) / duration) + 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    exponentialInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (end / 2) * Math.pow(2, 10 * (timeOrOffset - 1)) + start;
        timeOrOffset--;
        return (end / 2) * (-Math.pow(2, -10 * timeOrOffset) + 2) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularIn: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        return -end * (Math.sqrt(1 - timeOrOffset * timeOrOffset) - 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration;
        timeOrOffset--;
        return end * Math.sqrt(1 - timeOrOffset * timeOrOffset) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @returns {number}
     */
    circularInOut: (timeOrOffset, start, end, duration = 1) => {
        timeOrOffset /= duration / 2;
        if (timeOrOffset < 1)
            return (-end / 2) * (Math.sqrt(1 - timeOrOffset * timeOrOffset) - 1) + start;
        timeOrOffset -= 2;
        return (end / 2) * (Math.sqrt(1 - timeOrOffset * timeOrOffset) + 1) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} amplitude (optional)
     * @param {number} period (optional)
     * @return {number}
     */
    elasticIn: (timeOrOffset, start, end, duration = 1, amplitude = 1, period = 0.5) => {
        if (timeOrOffset === 0) {
            return start;
        }
        if ((timeOrOffset /= duration) === 1) {
            return start + end;
        }
        period *= duration;
        let s = 0;
        if (amplitude < Math.abs(end)) {
            amplitude = end;
            s = period / 4;
        }
        else {
            s = (period / (2 * Math.PI)) * Math.asin(end / amplitude);
        }
        return (-(amplitude *
            Math.pow(2, 10 * (timeOrOffset -= 1)) *
            Math.sin(((timeOrOffset * duration - s) * (2 * Math.PI)) / period)) + start);
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} amplitude (optional)
     * @param {number} period (optional)
     * @return {number}
     */
    elasticOut: (timeOrOffset, start, end, duration = 1, amplitude = 1, period = 0.5) => {
        if (timeOrOffset === 0) {
            return start;
        }
        if ((timeOrOffset /= duration) === 1) {
            return start + end;
        }
        period *= duration;
        let s = 0;
        if (amplitude < Math.abs(end)) {
            amplitude = end;
            s = period / 4;
        }
        else {
            s = (period / (2 * Math.PI)) * Math.asin(end / amplitude);
        }
        return (amplitude * Math.pow(2, -10 * timeOrOffset) * Math.sin(((timeOrOffset * duration - s) * (2 * Math.PI)) / period) +
            end +
            start);
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} amplitude (optional)
     * @param {number} period (optional)
     * @return {number}
     */
    elasticInOut: (timeOrOffset, start, end, duration = 1, amplitude = 1, period = 0.5) => {
        if (timeOrOffset === 0) {
            return start;
        }
        if ((timeOrOffset /= duration / 2) === 2) {
            return start + end;
        }
        period *= duration;
        let s = 0;
        if (amplitude < Math.abs(end)) {
            amplitude = end;
            s = period / 4;
        }
        else {
            s = (period / (2 * Math.PI)) * Math.asin(end / amplitude);
        }
        if (timeOrOffset < 1) {
            return (-0.5 *
                (amplitude *
                    Math.pow(2, 10 * (timeOrOffset -= 1)) *
                    Math.sin(((timeOrOffset * duration - s) * (2 * Math.PI)) / period)) +
                start);
        }
        return (amplitude *
            Math.pow(2, -10 * (timeOrOffset -= 1)) *
            Math.sin(((timeOrOffset * duration - s) * (2 * Math.PI)) / period) *
            0.5 +
            end +
            start);
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} overshoot (optional)
     * @return {number}
     */
    backIn: (timeOrOffset, start, end, duration = 1, overshoot = 1.70158) => {
        return end * (timeOrOffset /= duration) * timeOrOffset * ((overshoot + 1) * timeOrOffset - overshoot) + start;
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backOut: (timeOrOffset, start, end, duration = 1, overshoot = 1.70158) => {
        return (end *
            ((timeOrOffset = timeOrOffset / duration - 1) * timeOrOffset * ((overshoot + 1) * timeOrOffset + overshoot) +
                1) +
            start);
    },
    /**
     * @param {number} timeOrOffset current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duration duration
     * @param {number} overshoot (optional)
     * @return {number}
     */
    backInOut: (timeOrOffset, start, end, duration = 1, overshoot = 1.70158) => {
        if ((timeOrOffset /= duration / 2) < 1) {
            return (end / 2) * (timeOrOffset * timeOrOffset * (((overshoot *= 1.525) + 1) * timeOrOffset - overshoot)) + start;
        }
        return ((end / 2) * ((timeOrOffset -= 2) * timeOrOffset * (((overshoot *= 1.525) + 1) * timeOrOffset + overshoot) + 2) +
            start);
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceIn: (timeOrOffset, start, end, duration = 1) => {
        return end - exports.Easings.bounceOut(duration - timeOrOffset, 0, end, duration) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceOut: (timeOrOffset, start, end, duration = 1) => {
        if ((timeOrOffset /= duration) < 1 / 2.75) {
            return end * (7.5625 * timeOrOffset * timeOrOffset) + start;
        }
        else if (timeOrOffset < 2 / 2.75) {
            return end * (7.5625 * (timeOrOffset -= 1.5 / 2.75) * timeOrOffset + 0.75) + start;
        }
        else if (timeOrOffset < 2.5 / 2.75) {
            return end * (7.5625 * (timeOrOffset -= 2.25 / 2.75) * timeOrOffset + 0.9375) + start;
        }
        return end * (7.5625 * (timeOrOffset -= 2.625 / 2.75) * timeOrOffset + 0.984375) + start;
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
    bounceInOut: (timeOrOffset, start, end, duration = 1) => {
        if (timeOrOffset < duration / 2) {
            return exports.Easings.bounceIn(timeOrOffset * 2, 0, end, duration) * 0.5 + start;
        }
        return exports.Easings.bounceOut(timeOrOffset * 2 - duration, 0, end, duration) * 0.5 + end * 0.5 + start;
    },
};
//# sourceMappingURL=Easings.js.map

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UncontrolledLoop = exports.Static = exports.Loop = exports.Compose = exports.Simple = exports.resolveSimpleAnimation = void 0;
const composeAnimations_1 = __webpack_require__(70);
const createAnimation_1 = __webpack_require__(60);
/**
 * Create animation from ISimpleAnimation.
 *
 * @category Animation
 * @export
 * @param {ISimpleAnimation} simpleAnimation
 * @return {*}  {(TAnimationCallback | undefined)}
 */
function resolveSimpleAnimation(simpleAnimation) {
    const animation = createAnimation_1.createAnimation(simpleAnimation);
    if (animation) {
        return (propArgumentsOrCurrentTime) => {
            var _a;
            const currentTime = typeof propArgumentsOrCurrentTime === 'number'
                ? propArgumentsOrCurrentTime
                : ((_a = propArgumentsOrCurrentTime.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0;
            animation.update(currentTime);
            return animation.value;
        };
    }
}
exports.resolveSimpleAnimation = resolveSimpleAnimation;
/**
 * resolveSimpleAnimations alias
 * @export
 * @category Animation
 */
exports.Simple = resolveSimpleAnimation;
/**
 * Compose multiple animation into one.
 *
 * @category Animation
 * @export
 * @param {Array<ISimpleAnimation>} animations
 * @return {*}  {(TAnimationCallback | undefined)}
 */
function Compose(animations) {
    const composed = composeAnimations_1.composeAnimations(animations);
    if (composed) {
        return (propArgumentsOrCurrentTime) => {
            var _a;
            const currentTime = typeof propArgumentsOrCurrentTime === 'number'
                ? propArgumentsOrCurrentTime
                : ((_a = propArgumentsOrCurrentTime.shape.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0;
            return composed(currentTime);
        };
    }
}
exports.Compose = Compose;
/**
 * Create Loop animation.
 *
 * @category Animation
 * @export
 * @param {(Omit<ISimpleAnimation, 'direction' | 'loop'>)} loopAnimation
 * @return {*}  {(TAnimationCallback | undefined)}
 */
function Loop(loopAnimation) {
    const simpleAnimation = loopAnimation;
    if (typeof simpleAnimation.interpolator === 'undefined') {
        simpleAnimation.interpolator = 'wave';
    }
    if (simpleAnimation.interpolator) {
        if (typeof simpleAnimation.interpolator === 'string') {
            if (simpleAnimation.interpolator !== 'wave') {
                simpleAnimation.direction = 'alternate';
            }
        }
        else if (typeof simpleAnimation.interpolator === 'object' && simpleAnimation.interpolator.type !== 'wave') {
            simpleAnimation.direction = 'alternate';
        }
    }
    simpleAnimation.loop = true;
    return resolveSimpleAnimation(simpleAnimation);
}
exports.Loop = Loop;
/**
 * Create an animation that repeats once
 *
 * @category Animation
 * @export
 * @param {(Omit<ISimpleAnimation, 'direction' | 'loop'>)} staticAnimation
 * @return {*}  {(TAnimationCallback | undefined)}
 */
function Static(staticAnimation) {
    const simpleAnimation = staticAnimation;
    simpleAnimation.direction = 'normal';
    simpleAnimation.loop = false;
    return resolveSimpleAnimation(simpleAnimation);
}
exports.Static = Static;
/**
 * Create an animation that repeats in a single direction
 *
 * @category Animation
 * @export
 * @param {(Omit<ISimpleAnimation, 'direction' | 'loop'>)} uncontrolledLoopAnimation
 * @return {*}
 */
function UncontrolledLoop(uncontrolledLoopAnimation) {
    const simpleAnimation = uncontrolledLoopAnimation;
    simpleAnimation.direction = 'normal';
    simpleAnimation.loop = true;
    return resolveSimpleAnimation(simpleAnimation);
}
exports.UncontrolledLoop = UncontrolledLoop;
//# sourceMappingURL=Animation.js.map

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeAnimations = void 0;
const color_1 = __webpack_require__(62);
const createAnimation_1 = __webpack_require__(60);
const utilities_1 = __webpack_require__(59);
/**
 *
 * @category Utilities
 * @export
 * @param {Array<ISimpleAnimation>} simpleAnimations
 * @return {*}  {(((currentTime: number) => string | number | Array<string | number> | undefined) | undefined)}
 */
function composeAnimations(simpleAnimations) {
    const animations = simpleAnimations.map(createAnimation_1.createAnimation).filter(a => typeof a !== 'undefined');
    const animationsLength = animations.length;
    if (animationsLength > 0) {
        return (currentTime) => {
            let value = undefined;
            for (let i = 0; i < animationsLength; i++) {
                const animation = animations[i];
                animation.update(currentTime);
                value = typeof value === 'undefined' ? animation.value : interpolate(value, animation.value);
            }
            return value;
        };
    }
}
exports.composeAnimations = composeAnimations;
function interpolate(a, b, offset = 0.5) {
    const from = Array.isArray(a) ? a : [a];
    const to = Array.isArray(b) ? b : [b];
    const results = [];
    for (let i = 0, len = from.length; i < len; i++) {
        if (typeof from[i] !== typeof to[i]) {
            console.error('[@urpflanze/animation]: cannot interpolate');
            return undefined;
        }
        else {
            if (typeof from[i] !== 'string') {
                const a = from[i], b = to[i];
                results.push(a + offset * (b - a));
            }
            else {
                const a = from[i];
                const b = to[i];
                const parsed_a = color_1.parseColorAndConvert(a);
                const parsed_b = color_1.parseColorAndConvert(b);
                if (typeof parsed_a !== 'undefined' && typeof parsed_b !== 'undefined') {
                    results.push(utilities_1.interpolateColorRGB(parsed_a, parsed_b, offset));
                }
            }
        }
    }
    return results.length === 1 ? results[0] : results;
}
//# sourceMappingURL=composeAnimations.js.map

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserDrawerCanvas = void 0;
const DrawerCanvas_1 = __webpack_require__(72);
const utils_1 = __webpack_require__(77);
/**
 *
 * @category DrawerCanvas
 * @class BrowserDrawerCanvas
 * @extends {DrawerCanvas}
 */
class BrowserDrawerCanvas extends DrawerCanvas_1.DrawerCanvas {
    constructor(scene, canvasOrContainer, drawerOptions, duration = 60000, framerate = 60) {
        super(scene, canvasOrContainer, drawerOptions, duration, framerate);
        this.dpi = 1;
        this.dpi = (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.dpi) || 1;
        this.draw_id = null;
        this.redraw_id = null;
        this.animation_id = null;
        this.draw = this.draw.bind(this);
        this.animate = this.animate.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
        this.resize(this.drawerOptions.width, this.drawerOptions.height);
    }
    resize(width, height, sceneFit, dpi = this.dpi) {
        this.drawerOptions.width = width * dpi;
        this.drawerOptions.height = height * dpi;
        if (this.canvas) {
            this.canvas.width = width * dpi;
            this.canvas.height = height * dpi;
            if (utils_1.bBrowser && this.canvas instanceof HTMLCanvasElement) {
                this.canvas.style.width = width + 'px';
                this.canvas.style.height = height + 'px';
            }
        }
        if (typeof sceneFit !== 'undefined') {
            this.drawerOptions.sceneFit = sceneFit;
        }
        this.dispatch('drawer-canvas:resize');
    }
    /**
     * Internal tick animation
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
     */
    startAnimation() {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    }
    /**
     * Stop animation drawing
     */
    stopAnimation() {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Pause animation drawing
     */
    pauseAnimation() {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Play animation drawing
     */
    playAnimation() {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    }
    redraw() {
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
    }
}
exports.BrowserDrawerCanvas = BrowserDrawerCanvas;
//# sourceMappingURL=BrowserDrawerCanvas.js.map

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawerCanvas = void 0;
const color_1 = __webpack_require__(62);
const Utilities_1 = __webpack_require__(32);
const math_1 = __webpack_require__(29);
const Vec2_1 = __webpack_require__(28);
const canvas_1 = __webpack_require__(73);
const Emitter_1 = __webpack_require__(75);
const Timeline_1 = __webpack_require__(76);
const utils_1 = __webpack_require__(77);
const bSupportOffscreen = utils_1.bBrowser &&
    typeof HTMLCanvasElement !== 'undefined' &&
    typeof HTMLCanvasElement.prototype.transferControlToOffscreen !== 'undefined';
/**
 *
 * @category DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
class DrawerCanvas extends Emitter_1.Emitter {
    constructor(scene, canvasOrContainer, drawerOptions, duration = 60000, framerate = 60) {
        var _a, _b, _c, _d, _e;
        super();
        this.drawerOptions = {
            width: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.width) || (scene === null || scene === void 0 ? void 0 : scene.width) || 400,
            height: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.height) || (scene === null || scene === void 0 ? void 0 : scene.height) || 400,
            clear: (_a = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.clear) !== null && _a !== void 0 ? _a : true,
            time: (_b = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.time) !== null && _b !== void 0 ? _b : 0,
            simmetricLines: (_c = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.simmetricLines) !== null && _c !== void 0 ? _c : 0,
            noBackground: (_d = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.noBackground) !== null && _d !== void 0 ? _d : false,
            ghosts: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghosts) || 0,
            ghostAlpha: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostAlpha) === false ? false : true,
            ghostSkipTime: (_e = drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostSkipTime) !== null && _e !== void 0 ? _e : 30,
            ghostSkipFunction: drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.ghostSkipFunction,
            sceneFit: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.sceneFit) || 'contain',
            backgroundImage: drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.backgroundImage,
            backgroundImageFit: (drawerOptions === null || drawerOptions === void 0 ? void 0 : drawerOptions.backgroundImageFit) || 'cover',
        };
        this.timeline = new Timeline_1.Timeline(duration, framerate);
        this.timeline.setTime(this.drawerOptions.time);
        this.draw_id = null;
        this.redraw_id = null;
        this.animation_id = null;
        if (scene) {
            this.setScene(scene);
        }
        if (!utils_1.bWorker || (utils_1.bWorker && bSupportOffscreen && canvasOrContainer instanceof OffscreenCanvas))
            this.setCanvas(canvasOrContainer);
    }
    /**
     * Return option value or default
     *
     * @param {K keyof IDrawerCanvasOptions} name
     * @param {IDrawerCanvasOptions[K]} defaultValue
     */
    getOption(name, defaultValue) {
        var _a;
        return (_a = this.drawerOptions[name]) !== null && _a !== void 0 ? _a : defaultValue;
    }
    /**
     * Create instance of canvas (HTMLCanvasElement in browser o Canvas in Node)
     */
    setCanvas(canvasOrContainer) {
        if (utils_1.bWorker) {
            if (bSupportOffscreen && canvasOrContainer instanceof OffscreenCanvas) {
                this.canvas = canvasOrContainer;
            }
            else {
                console.error('Cannot set cavas');
            }
        }
        else {
            if (utils_1.bBrowser) {
                const canvas = canvas_1.createCanvas(this.drawerOptions.width, this.drawerOptions.height);
                if (canvasOrContainer instanceof HTMLElement &&
                    !(canvasOrContainer instanceof HTMLCanvasElement ||
                        (bSupportOffscreen && canvasOrContainer instanceof OffscreenCanvas))) {
                    this.canvas = canvas;
                    while (canvasOrContainer.lastChild)
                        canvasOrContainer.removeChild(canvasOrContainer.lastChild);
                    canvasOrContainer.appendChild(canvas);
                }
                else {
                    this.canvas = typeof canvasOrContainer === 'undefined' ? canvas : canvasOrContainer;
                }
            }
            else {
                this.canvas = canvas_1.createCanvas(this.drawerOptions.width, this.drawerOptions.height);
            }
        }
        if (this.canvas) {
            this.canvas.width = this.drawerOptions.width;
            this.canvas.height = this.drawerOptions.height;
            this.context = this.canvas.getContext('2d', {
                alpha: true,
                // desynchronized: true,
            });
        }
    }
    /**
     * Return instance of canvas
     *
     * @returns canvas
     */
    getCanvas() {
        return this.canvas;
    }
    setScene(scene) {
        this.scene = scene;
    }
    draw() {
        if (this.context === null || typeof this.scene === 'undefined')
            return 0;
        const start_time = Utilities_1.now();
        const timeline = this.timeline;
        const drawAtTime = timeline.getTime();
        const drawerOptions = {
            ...this.drawerOptions,
            ghostIndex: undefined,
            clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 1,
            time: drawAtTime,
        };
        const currentFrame = timeline.getFrameAtTime(drawAtTime);
        this.dispatch('drawer-canvas:before_draw', {
            currentFrame: currentFrame,
            currentTime: drawAtTime,
        });
        if (drawerOptions.simmetricLines > 0) {
            if (drawerOptions.clear) {
                DrawerCanvas.clear(this.context, drawerOptions.width, drawerOptions.height, drawerOptions.noBackground ? false : this.scene.background, drawerOptions.backgroundImage, drawerOptions.backgroundImageFit);
            }
            DrawerCanvas.drawSimmetricLines(this.context, drawerOptions.simmetricLines, drawerOptions.width, drawerOptions.height, this.scene.color);
            drawerOptions.clear = false;
        }
        if (drawerOptions.ghosts) {
            const ghostDrawerOptions = {
                ...drawerOptions,
            };
            const drawAtTime = timeline.getTime();
            const sequenceDuration = timeline.getDuration();
            const ghostRepetition = {
                offset: 0,
                index: 0,
                count: drawerOptions.ghosts,
            };
            for (let i = 1; i <= drawerOptions.ghosts; i++) {
                ghostRepetition.index = i;
                ghostRepetition.offset = ghostRepetition.index / ghostRepetition.count;
                const ghostTime = drawAtTime -
                    (drawerOptions.ghostSkipFunction
                        ? drawerOptions.ghostSkipFunction(ghostRepetition, drawAtTime)
                        : i * drawerOptions.ghostSkipTime);
                ghostDrawerOptions.ghostIndex = i;
                ghostDrawerOptions.time = math_1.mod(ghostTime, sequenceDuration);
                ghostDrawerOptions.clear = drawerOptions.clear && ghostDrawerOptions.ghostIndex === 1;
                this.realDraw(ghostDrawerOptions);
            }
            drawerOptions.clear = false;
        }
        this.realDraw(drawerOptions);
        return Utilities_1.now() - start_time;
    }
    realDraw(options) {
        var _a;
        const width = this.drawerOptions.width;
        const height = this.drawerOptions.height;
        const context = this.context;
        const scene = this.scene;
        const time = (_a = options.time) !== null && _a !== void 0 ? _a : 0;
        const bGhost = typeof options.ghosts !== 'undefined' &&
            options.ghosts > 0 &&
            typeof options.ghostIndex !== 'undefined' &&
            options.ghostIndex > 0;
        const ghostMultiplier = bGhost ? 1 - options.ghostIndex / (options.ghosts + 0.5) : 0;
        const ghostAlpha = options.ghostAlpha === true;
        const sceneFit = utils_1.fit(scene.width, scene.height, width, height, this.drawerOptions.sceneFit);
        const translateX = sceneFit.x;
        const translateY = sceneFit.y;
        options.clear &&
            DrawerCanvas.clear(context, width, height, options.noBackground ? false : scene.background, options.backgroundImage, options.backgroundImageFit);
        let logFillColorWarn = false;
        let logStrokeColorWarn = false;
        scene.currentTime = time;
        const sceneChilds = scene.getChildren();
        for (let i = 0, len = sceneChilds.length; i < len; i++) {
            const sceneChild = sceneChilds[i];
            if (!sceneChild.data ||
                (!(sceneChild.data.visible === false) && !(bGhost && sceneChild.data.disableGhost === true))) {
                sceneChilds[i].generate(time, true);
                const childIndexedBuffer = sceneChilds[i].getIndexedBuffer() || [];
                const childBuffer = sceneChilds[i].getBuffer() || [];
                let childVertexIndex = 0;
                for (let currentBufferIndex = 0, len = childIndexedBuffer.length; currentBufferIndex < len; currentBufferIndex++) {
                    const currentIndexing = childIndexedBuffer[currentBufferIndex];
                    const shape = currentIndexing.shape;
                    const propArguments = {
                        canvasContext: context,
                        ...currentIndexing,
                    };
                    const composite = DrawerCanvas.getStreamDrawerProp(shape, 'composite', propArguments, 'source-over');
                    context.globalCompositeOperation = composite;
                    context.beginPath();
                    context.moveTo(childBuffer[childVertexIndex] * sceneFit.scale + translateX, childBuffer[childVertexIndex + 1] * sceneFit.scale + translateY);
                    childVertexIndex += 2;
                    for (let currentFrameLength = childVertexIndex + currentIndexing.frameLength - 2; childVertexIndex < currentFrameLength; childVertexIndex += 2)
                        context.lineTo(childBuffer[childVertexIndex] * sceneFit.scale + translateX, childBuffer[childVertexIndex + 1] * sceneFit.scale + translateY);
                    if (shape.isClosed())
                        context.closePath();
                    const alpha = DrawerCanvas.getStreamDrawerProp(shape, 'opacity', propArguments, 1);
                    context.globalAlpha = alpha;
                    const shadowColor = DrawerCanvas.getStreamDrawerProp(shape, 'shadowColor', propArguments);
                    const shadowBlur = DrawerCanvas.getStreamDrawerProp(shape, 'shadowBlur', propArguments);
                    const shadowOffsetX = DrawerCanvas.getStreamDrawerProp(shape, 'shadowOffsetX', propArguments);
                    const shadowOffsetY = DrawerCanvas.getStreamDrawerProp(shape, 'shadowOffsetY', propArguments);
                    context.shadowColor = shadowColor;
                    context.shadowBlur = shadowBlur;
                    shadowOffsetX && (context.shadowOffsetX = shadowOffsetX);
                    shadowOffsetY && (context.shadowOffsetY = shadowOffsetY);
                    let fill = DrawerCanvas.getStreamDrawerProp(shape, 'fill', propArguments);
                    if (typeof fill !== 'undefined') {
                        if (bGhost && ghostAlpha) {
                            const color = DrawerCanvas.ghostifyColor(fill, ghostMultiplier);
                            if (color) {
                                fill = color;
                            }
                            else if (!logFillColorWarn) {
                                console.warn(`[Urpflanze:DrawerCanvas] Unable ghost fill color '${fill}',
								please enter a rgba or hsla color`);
                                logFillColorWarn = true;
                            }
                        }
                        context.fillStyle = fill;
                        context.fill();
                    }
                    let stroke = DrawerCanvas.getStreamDrawerProp(shape, 'stroke', propArguments, typeof fill === 'undefined' ? scene.color : undefined);
                    let lineWidth = DrawerCanvas.getStreamDrawerProp(shape, 'lineWidth', propArguments, 1);
                    if (stroke) {
                        if (bGhost && ghostAlpha) {
                            const color = DrawerCanvas.ghostifyColor(stroke, ghostMultiplier);
                            if (color) {
                                stroke = color;
                            }
                            else if (!logStrokeColorWarn) {
                                console.warn(`[Urpflanze:DrawerCanvas] Unable ghost stroke color '${stroke}',
								please enter a rgba or hsla color`);
                                logStrokeColorWarn = true;
                            }
                            lineWidth *= ghostMultiplier;
                        }
                        const lineJoin = DrawerCanvas.getStreamDrawerProp(shape, 'lineJoin', propArguments);
                        const lineCap = DrawerCanvas.getStreamDrawerProp(shape, 'lineCap', propArguments);
                        const lineDash = DrawerCanvas.getStreamDrawerProp(shape, 'lineDash', propArguments);
                        const lineDashOffset = DrawerCanvas.getStreamDrawerProp(shape, 'lineDashOffset', propArguments);
                        const miterLimit = DrawerCanvas.getStreamDrawerProp(shape, 'miterLimit', propArguments);
                        context.setLineDash.call(context, lineDash || []);
                        context.lineJoin = lineJoin;
                        context.lineCap = lineCap;
                        context.lineDashOffset = lineDashOffset;
                        context.miterLimit = miterLimit;
                        context.lineWidth = lineWidth * sceneFit.scale;
                        context.strokeStyle = stroke;
                        context.stroke();
                    }
                }
                context.restore();
            }
        }
    }
    /**
     * Return a drawer value
     *
     * @static
     * @template T
     * @param {ShapePrimitive<T>} shape
     * @param {keyof T} key
     * @param {IDrawerPropArguments} propArguments
     * @param {*} [defaultValue]
     * @returns {*}
     */
    static getStreamDrawerProp(shape, key, propArguments, defaultValue) {
        let attribute = shape.drawer[key];
        if (typeof attribute === 'function') {
            attribute = attribute(propArguments);
        }
        return attribute !== null && attribute !== void 0 ? attribute : defaultValue;
    }
    /**
     * Create color based on ghostMultiplier
     *
     * @static
     * @param {any} color
     * @param {number} ghostMultiplier
     * @return {*}  {(string | undefined)}
     */
    static ghostifyColor(color, ghostMultiplier) {
        if (typeof color === 'string' || typeof color === 'number') {
            const parsed = color_1.parseColor(color);
            if (parsed) {
                const ghostAlpha = parsed.alpha * ghostMultiplier;
                return parsed.type === 'rgb'
                    ? `rgba(${parsed.a},${parsed.b},${parsed.c},${ghostAlpha})`
                    : `hsla(${parsed.a},${parsed.b}%,${parsed.c}%,${ghostAlpha})`;
            }
        }
        return color;
    }
    /**
     * Clear canvas, draw background or image (and fit)
     *
     * @param context
     * @param width
     * @param height
     * @param background
     * @param backgroundImage
     * @param backgroundImageFit
     */
    static clear(context, width, height, background, backgroundImage, backgroundImageFit) {
        if (typeof background === 'boolean' && background === false) {
            context.clearRect(0, 0, width, height);
        }
        else {
            context.globalCompositeOperation = 'source-over';
            context.fillStyle = background; // or true
            context.fillRect(0, 0, width, height);
            if (backgroundImage) {
                const sourceWidth = backgroundImage instanceof SVGImageElement ? backgroundImage.width.baseVal.value : backgroundImage.width;
                const sourceHeight = backgroundImage instanceof SVGImageElement ? backgroundImage.height.baseVal.value : backgroundImage.height;
                const fitRect = utils_1.fit(sourceWidth, sourceHeight, width, height, backgroundImageFit);
                context.drawImage(backgroundImage, fitRect.x, fitRect.y, fitRect.width, fitRect.height);
            }
        }
    }
    /**
     * Draw utility lines
     *
     * @param context
     * @param simmetricLines
     * @param width
     * @param height
     * @param color
     */
    static drawSimmetricLines(context, simmetricLines, width, height, color) {
        const offset = Math.PI / simmetricLines;
        const size = Math.max(width, height);
        const sizeMin = Math.min(width, height);
        const k = width < height ? 1 : 0;
        const centerX = [size / 2, size / 2];
        const centerY = [sizeMin / 2, sizeMin / 2];
        for (let i = 0; i < simmetricLines; i++) {
            const a = [-size, -size];
            const b = [size * 2, size * 2];
            const rotate = i * offset + Math.PI / 4;
            Vec2_1.default.rotateZ(a, i % 2 === k ? centerX : centerY, rotate);
            Vec2_1.default.rotateZ(b, i % 2 === k ? centerX : centerY, rotate);
            context.beginPath();
            context.strokeStyle = color;
            context.lineWidth = 1;
            context.moveTo(a[0], a[1]);
            context.lineTo(b[0], b[1]);
            context.stroke();
        }
    }
}
exports.DrawerCanvas = DrawerCanvas;
// const sourceRatio = sourceWidth / sourceHeight
// let x = 0,
// 	y = 0,
// 	bgWidth = width,
// 	bgHeight = height
// if (sourceRatio !== ratio) {
// 	if (options.backgroundImageFit === 'contain') {
// 		bgWidth = ratio > sourceRatio ? (sourceWidth * height) / sourceHeight : width
// 		bgHeight = ratio > sourceRatio ? height : (sourceHeight * width) / sourceWidth
// 	} else {
// 		bgWidth = ratio < sourceRatio ? (sourceWidth * height) / sourceHeight : width
// 		bgHeight = ratio < sourceRatio ? height : (sourceHeight * width) / sourceWidth
// 	}
// 	x = (width - bgWidth) / 2
// 	y = (height - bgHeight) / 2
//# sourceMappingURL=DrawerCanvas.js.map

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* globals document, ImageData */

const parseFont = __webpack_require__(74)

exports.parseFont = parseFont

exports.createCanvas = function (width, height) {
  return Object.assign(document.createElement('canvas'), { width: width, height: height })
}

exports.createImageData = function (array, width, height) {
  // Browser implementation of ImageData looks at the number of arguments passed
  switch (arguments.length) {
    case 0: return new ImageData()
    case 1: return new ImageData(array)
    case 2: return new ImageData(array, width)
    default: return new ImageData(array, width, height)
  }
}

exports.loadImage = function (src, options) {
  return new Promise(function (resolve, reject) {
    const image = Object.assign(document.createElement('img'), options)

    function cleanup () {
      image.onload = null
      image.onerror = null
    }

    image.onload = function () { cleanup(); resolve(image) }
    image.onerror = function () { cleanup(); reject(new Error('Failed to load the image "' + src + '"')) }

    image.src = src
  })
}


/***/ }),
/* 74 */
/***/ ((module) => {

"use strict";


/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00'
  , styles = 'italic|oblique'
  , variants = 'small-caps'
  , stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
  , units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
  , string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp('(' + weights + ') +', 'i')
const styleRe = new RegExp('(' + styles + ') +', 'i')
const variantRe = new RegExp('(' + variants + ') +', 'i')
const stretchRe = new RegExp('(' + stretches + ') +', 'i')
const sizeFamilyRe = new RegExp(
  '([\\d\\.]+)(' + units + ') *'
  + '((?:' + string + ')( *, *(?:' + string + '))*)')

/**
 * Cache font parsing.
 */

const cache = {}

const defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = function (str) {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  let weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  let substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = void 0;
/**
 * Class used for emit and dispatch events
 *
 * @category Emitter
 * @abstract
 * @class Emitter
 * @template EventTypes
 */
class Emitter {
    constructor() {
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
        if (e in this.callbacks && this.callbacks[e].length > 0) {
            for (let i = 0, len = this.callbacks[e].length; i < len; i++)
                if (this.callbacks[e][i](params) === false)
                    break;
        }
    }
}
exports.Emitter = Emitter;
//# sourceMappingURL=Emitter.js.map

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Timeline = void 0;
const Utilities_1 = __webpack_require__(32);
const math_1 = __webpack_require__(29);
const Emitter_1 = __webpack_require__(75);
/**
 * Is used for sequence time management.
 * It is necessary to set the duration and the number of frames per second (frame rate).
 *
 * @category Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
class Timeline extends Emitter_1.Emitter {
    constructor(duration = 60000, framerate = 30) {
        super();
        this.fps_samples_size = 30;
        this.fps_samples = [];
        this.fps_samples_index = 0;
        this.paused_time = 0;
        this.sequence = {
            duration,
            framerate,
            frames: Math.round((duration / 1000) * framerate),
        };
        this.tick_time = 1000 / this.sequence.framerate;
        this.fps = this.sequence.framerate;
        this.b_sequence_started = false;
        this.currentFrame = 0;
        this.currentTime = 0;
        this.last_tick = 0;
        this.start_time = 0;
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     */
    getSequence() {
        return { ...this.sequence };
    }
    /**
     * Set Sequence
     *
     * @param {number} duration in ms
     * @param {number} framerate
     * @param {number} atTime
     */
    setSequence(duration, framerate, atTime) {
        this.sequence.duration = duration;
        this.sequence.framerate = framerate;
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.round((this.sequence.duration / 1000) * this.sequence.framerate);
        if (typeof atTime !== 'undefined') {
            this.setTime(atTime);
        }
        else {
            this.dispatch('timeline:update_sequence', this.getSequence());
        }
    }
    /**
     * Set duration of timeline
     *
     * @param {number} framerate
     */
    setDuration(duration) {
        this.setSequence(duration, this.sequence.framerate);
    }
    /**
     * Get timeline duration
     *
     * @returns {number}
     */
    getDuration() {
        return this.sequence.duration;
    }
    /**
     * Return framerate
     *
     * @returns {number}
     */
    getFramerate() {
        return this.sequence.framerate;
    }
    /**
     * Set a framerate
     *
     * @param {number} framerate
     */
    setFramerate(framerate) {
        this.setSequence(this.sequence.duration, framerate);
    }
    /**
     * Get number of frames based on duration and framerate
     *
     * @returns {number}
     */
    getFramesCount() {
        return this.sequence.frames;
    }
    //#endregion meta
    //#region change status
    bSequenceStarted() {
        return this.b_sequence_started;
    }
    /**
     * Start the sequence
     *
     */
    start() {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            this.start_time = this.paused_time;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    }
    /**
     * Pause the sequence
     *
     */
    pause() {
        if (this.b_sequence_started) {
            this.paused_time = Utilities_1.now();
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    }
    /**
     * Stop the sequence and reset
     *
     */
    stop() {
        if (this.b_sequence_started) {
            this.b_sequence_started = false;
            this.currentTime = 0;
            this.currentFrame = 0;
            this.start_time = 0;
            this.paused_time = 0;
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    }
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     */
    tick(timestamp) {
        if (this.b_sequence_started) {
            if (!this.start_time) {
                this.start_time = timestamp;
                this.last_tick = -this.tick_time;
            }
            const currentTime = timestamp - this.start_time;
            const elapsed = currentTime - this.last_tick;
            if (elapsed >= this.tick_time) {
                this.calculateFPS(1 / (elapsed / 1000));
                this.last_tick = currentTime;
                this.currentTime = (currentTime - (elapsed % this.tick_time)) % this.sequence.duration;
                this.currentFrame = this.getFrameAtTime(this.currentTime);
                this.dispatch('timeline:progress', {
                    currentFrame: this.currentFrame,
                    currentTime: this.currentTime,
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
    //#region Frame and Time
    /**
     * Return current animation frame
     *
     * @returns {number}
     */
    getCurrentFrame() {
        return this.currentFrame;
    }
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     */
    getFrameTime(frame) {
        frame = math_1.mod(frame, this.sequence.frames);
        return (frame * this.tick_time) % this.sequence.duration;
    }
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     */
    getFrameAtTime(time) {
        return Math.round((time % this.sequence.duration) / this.tick_time);
    }
    /**
     * set current frame
     *
     * @param {number} frame
     */
    setFrame(frame) {
        this.currentFrame = math_1.mod(frame, this.sequence.frames);
        this.currentTime = this.getFrameTime(this.currentFrame);
        this.dispatch('timeline:progress', {
            currentFrame: this.currentFrame,
            currentTime: this.currentTime,
            fps: this.fps,
        });
    }
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     */
    getTickTime() {
        return this.tick_time;
    }
    /**
     * Return the current time
     *
     * @returns {number}
     */
    getTime() {
        return this.currentTime;
    }
    /**
     * Set animation at time
     *
     * @param {number} time
     */
    setTime(time) {
        time = math_1.mod(time, this.sequence.duration);
        this.currentTime = time;
        this.currentFrame = this.getFrameAtTime(time);
        this.dispatch('timeline:progress', {
            currentFrame: this.currentFrame,
            currentTime: this.currentTime,
            fps: this.fps,
        });
    }
}
exports.Timeline = Timeline;
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
//# sourceMappingURL=Timeline.js.map

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fit = exports.bWorker = exports.bBrowser = exports.bNode = void 0;
exports.bNode = typeof process !== 'undefined' &&
    typeof process.versions !== 'undefined' &&
    typeof process.versions.node !== 'undefined';
exports.bBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
exports.bWorker = typeof self === 'object' && ['ServiceWorkerGlobalScope', 'DedicatedWorkerGlobalScope'].includes(self.constructor.name);
/**
 * Utiltites
 *
 * @category Utilities
 * @export
 * @param {number} sourceWidth
 * @param {number} sourceHeight
 * @param {number} destWidth
 * @param {number} destHeight
 * @param {('cover' | 'contain' | 'none')} [fit='none']
 * @return {*}  {{ x: number; y: number; width: number; height: number; scale: number }}
 */
function fit(sourceWidth, sourceHeight, destWidth, destHeight, fit = 'none') {
    let x = 0, y = 0, scale = 1, finalWidth = sourceWidth, finalHeight = sourceHeight;
    const ratio = destWidth / destHeight;
    const sourceRatio = sourceWidth / sourceHeight;
    if (fit === 'contain') {
        finalWidth = ratio > sourceRatio ? (sourceWidth * destHeight) / sourceHeight : destWidth;
        finalHeight = ratio > sourceRatio ? destHeight : (sourceHeight * destWidth) / sourceWidth;
        scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight);
    }
    else if (fit === 'cover') {
        finalWidth = ratio < sourceRatio ? (sourceWidth * destHeight) / sourceHeight : destWidth;
        finalHeight = ratio < sourceRatio ? destHeight : (sourceHeight * destWidth) / sourceWidth;
        // scale = Math.min(sourceWidth, sourceHeight) / Math.min(finalWidth, finalHeight)
        scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight);
    }
    else {
        // finalWidth = sourceWidth
        // finalHeight = sourceHeight
    }
    x = (destWidth - finalWidth) / 2;
    y = (destHeight - finalHeight) / 2;
    return {
        x,
        y,
        width: finalWidth,
        height: finalHeight,
        scale,
    };
}
exports.fit = fit;
//# sourceMappingURL=utils.js.map

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Animation),
/* harmony export */   "Circle": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   "DrawerCanvas": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.DrawerCanvas),
/* harmony export */   "Group": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   "Line": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Line),
/* harmony export */   "Lissajous": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Lissajous),
/* harmony export */   "Modifier": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Modifier),
/* harmony export */   "Modifiers": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Modifiers),
/* harmony export */   "PHI": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.PHI),
/* harmony export */   "PI2": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.PI2),
/* harmony export */   "Polygon": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Polygon),
/* harmony export */   "Rect": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   "Rose": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Rose),
/* harmony export */   "Scene": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Scene),
/* harmony export */   "SceneChild": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.SceneChild),
/* harmony export */   "Shape": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   "ShapeBase": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapeBase),
/* harmony export */   "ShapeBuffer": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapeBuffer),
/* harmony export */   "ShapeFollow": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapeFollow),
/* harmony export */   "ShapeLoop": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapeLoop),
/* harmony export */   "ShapePrimitive": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapePrimitive),
/* harmony export */   "ShapeRecursive": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.ShapeRecursive),
/* harmony export */   "Spiral": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Spiral),
/* harmony export */   "Star": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Star),
/* harmony export */   "SuperShape": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.SuperShape),
/* harmony export */   "Triangle": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Triangle),
/* harmony export */   "Vec2": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.Vec2),
/* harmony export */   "__esModule": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "angle2FromRepetition": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.angle2FromRepetition),
/* harmony export */   "angleFromRepetition": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.angleFromRepetition),
/* harmony export */   "clamp": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "distanceFromRepetition": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.distanceFromRepetition),
/* harmony export */   "distributePointsInBuffer": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.distributePointsInBuffer),
/* harmony export */   "interpolate": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.interpolate),
/* harmony export */   "lerp": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.lerp),
/* harmony export */   "log": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.log),
/* harmony export */   "mod": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.mod),
/* harmony export */   "noise": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.noise),
/* harmony export */   "now": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   "prepareBufferForInterpolation": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.prepareBufferForInterpolation),
/* harmony export */   "random": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.random),
/* harmony export */   "relativeClamp": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.relativeClamp),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _modules_light__WEBPACK_IMPORTED_MODULE_0__.toRadians)
/* harmony export */ });
/* harmony import */ var _modules_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

//# sourceMappingURL=index-light.js.map
})();

var __webpack_exports__Animation = __webpack_exports__.Animation;
var __webpack_exports__Circle = __webpack_exports__.Circle;
var __webpack_exports__DrawerCanvas = __webpack_exports__.DrawerCanvas;
var __webpack_exports__Group = __webpack_exports__.Group;
var __webpack_exports__Line = __webpack_exports__.Line;
var __webpack_exports__Lissajous = __webpack_exports__.Lissajous;
var __webpack_exports__Modifier = __webpack_exports__.Modifier;
var __webpack_exports__Modifiers = __webpack_exports__.Modifiers;
var __webpack_exports__PHI = __webpack_exports__.PHI;
var __webpack_exports__PI2 = __webpack_exports__.PI2;
var __webpack_exports__Polygon = __webpack_exports__.Polygon;
var __webpack_exports__Rect = __webpack_exports__.Rect;
var __webpack_exports__Rose = __webpack_exports__.Rose;
var __webpack_exports__Scene = __webpack_exports__.Scene;
var __webpack_exports__SceneChild = __webpack_exports__.SceneChild;
var __webpack_exports__Shape = __webpack_exports__.Shape;
var __webpack_exports__ShapeBase = __webpack_exports__.ShapeBase;
var __webpack_exports__ShapeBuffer = __webpack_exports__.ShapeBuffer;
var __webpack_exports__ShapeFollow = __webpack_exports__.ShapeFollow;
var __webpack_exports__ShapeLoop = __webpack_exports__.ShapeLoop;
var __webpack_exports__ShapePrimitive = __webpack_exports__.ShapePrimitive;
var __webpack_exports__ShapeRecursive = __webpack_exports__.ShapeRecursive;
var __webpack_exports__Spiral = __webpack_exports__.Spiral;
var __webpack_exports__Star = __webpack_exports__.Star;
var __webpack_exports__SuperShape = __webpack_exports__.SuperShape;
var __webpack_exports__Triangle = __webpack_exports__.Triangle;
var __webpack_exports__Vec2 = __webpack_exports__.Vec2;
var __webpack_exports___esModule = __webpack_exports__.__esModule;
var __webpack_exports__angle2FromRepetition = __webpack_exports__.angle2FromRepetition;
var __webpack_exports__angleFromRepetition = __webpack_exports__.angleFromRepetition;
var __webpack_exports__clamp = __webpack_exports__.clamp;
var __webpack_exports__distanceFromRepetition = __webpack_exports__.distanceFromRepetition;
var __webpack_exports__distributePointsInBuffer = __webpack_exports__.distributePointsInBuffer;
var __webpack_exports__interpolate = __webpack_exports__.interpolate;
var __webpack_exports__lerp = __webpack_exports__.lerp;
var __webpack_exports__log = __webpack_exports__.log;
var __webpack_exports__mod = __webpack_exports__.mod;
var __webpack_exports__noise = __webpack_exports__.noise;
var __webpack_exports__now = __webpack_exports__.now;
var __webpack_exports__prepareBufferForInterpolation = __webpack_exports__.prepareBufferForInterpolation;
var __webpack_exports__random = __webpack_exports__.random;
var __webpack_exports__relativeClamp = __webpack_exports__.relativeClamp;
var __webpack_exports__toDegrees = __webpack_exports__.toDegrees;
var __webpack_exports__toRadians = __webpack_exports__.toRadians;
export { __webpack_exports__Animation as Animation, __webpack_exports__Circle as Circle, __webpack_exports__DrawerCanvas as DrawerCanvas, __webpack_exports__Group as Group, __webpack_exports__Line as Line, __webpack_exports__Lissajous as Lissajous, __webpack_exports__Modifier as Modifier, __webpack_exports__Modifiers as Modifiers, __webpack_exports__PHI as PHI, __webpack_exports__PI2 as PI2, __webpack_exports__Polygon as Polygon, __webpack_exports__Rect as Rect, __webpack_exports__Rose as Rose, __webpack_exports__Scene as Scene, __webpack_exports__SceneChild as SceneChild, __webpack_exports__Shape as Shape, __webpack_exports__ShapeBase as ShapeBase, __webpack_exports__ShapeBuffer as ShapeBuffer, __webpack_exports__ShapeFollow as ShapeFollow, __webpack_exports__ShapeLoop as ShapeLoop, __webpack_exports__ShapePrimitive as ShapePrimitive, __webpack_exports__ShapeRecursive as ShapeRecursive, __webpack_exports__Spiral as Spiral, __webpack_exports__Star as Star, __webpack_exports__SuperShape as SuperShape, __webpack_exports__Triangle as Triangle, __webpack_exports__Vec2 as Vec2, __webpack_exports___esModule as __esModule, __webpack_exports__angle2FromRepetition as angle2FromRepetition, __webpack_exports__angleFromRepetition as angleFromRepetition, __webpack_exports__clamp as clamp, __webpack_exports__distanceFromRepetition as distanceFromRepetition, __webpack_exports__distributePointsInBuffer as distributePointsInBuffer, __webpack_exports__interpolate as interpolate, __webpack_exports__lerp as lerp, __webpack_exports__log as log, __webpack_exports__mod as mod, __webpack_exports__noise as noise, __webpack_exports__now as now, __webpack_exports__prepareBufferForInterpolation as prepareBufferForInterpolation, __webpack_exports__random as random, __webpack_exports__relativeClamp as relativeClamp, __webpack_exports__toDegrees as toDegrees, __webpack_exports__toRadians as toRadians };

//# sourceMappingURL=urpflanze-light.js.map