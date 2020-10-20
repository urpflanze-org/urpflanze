import { clamp } from "../../Utilites";
/**
 * Temporany matrix
 *
 * @internal
 */
var MATRIX = new Array(4);
/**
 * Create new vertex
 *
 * @param {TArray | number} [x=0]
 * @param {number} [y]
 * @returns {TArray}
 * @internal
 */
var create = function (x, y) {
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
};
/**
 * Distance between two points
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
var distance = function (a, b) { return Math.hypot(b[0] - a[0], b[1] - a[1]); };
/**
 * dot product
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
var dot = function (a, b) { return a[0] * b[0] + a[1] * b[1]; };
/**
 * length of point
 *
 * @param {TArray} vec
 * @returns {number}
 * @internal
 */
var length = function (vec) { return Math.hypot(vec[0], vec[1]); };
/**
 * angle between two point
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
var angle = function (a, b) {
    var m = length(a) * length(b);
    return Math.acos(clamp(-1, 1, m && dot(a, b) / m));
};
/**
 * skewX point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
var skewX = function (vec, m) {
    vec[0] += Math.tan(m) * vec[1];
};
/**
 * skewY point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
var skewY = function (vec, m) {
    vec[1] += Math.tan(m) * vec[0];
};
/**
 * squeezeX point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
var squeezeX = function (vec, m) {
    vec[1] += vec[1] * (vec[0] * -m);
};
/**
 * squeezeY point
 *
 * @param {TArray} vec
 * @param {number} m
 */
var squeezeY = function (vec, m) {
    vec[0] += vec[0] * (vec[1] * m);
};
/**
 * Rotate point
 *
 * @param {TArray} vec
 * @param {TArray} MATRIX
 * @param {TArray} pointToRotate
 * @internal
 */
var rotate = function (vec, MATRIX, pointToRotate) {
    var p0 = vec[0] - pointToRotate[0];
    var p1 = vec[1] - pointToRotate[1];
    vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + pointToRotate[0];
    vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + pointToRotate[1];
};
/**
 * RotateX point
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 * @internal
 */
var rotateX = function (vec, pointToRotate, rad) {
    MATRIX[0] = 1;
    MATRIX[1] = 0;
    MATRIX[2] = 0;
    MATRIX[3] = Math.cos(rad);
    rotate(vec, MATRIX, pointToRotate);
};
/**
 * RotateY point
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 * @internal
 */
var rotateY = function (vec, pointToRotate, rad) {
    MATRIX[0] = Math.cos(rad);
    MATRIX[1] = 0;
    MATRIX[2] = 0;
    MATRIX[3] = 1;
    rotate(vec, MATRIX, pointToRotate);
};
/**
 * RotateZ point
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 * @internal
 */
var rotateZ = function (vec, pointToRotate, rad) {
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
 * @internal
 */
var translate = function (vec, to) {
    vec[0] += to[0];
    vec[1] += to[1];
};
/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 * @internal
 */
var scale = function (vec, to) {
    vec[0] *= to[0];
    vec[1] *= to[1];
};
/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 * @internal
 */
var divide = function (vec, to) {
    vec[0] /= to[0];
    vec[1] /= to[1];
};
/**
 * Vec to string
 *
 * @param {TArray} vec
 * @return {string}
 * @internal
 */
var toString = function (vec) { return "x: " + vec[0] + ", y: " + vec[1]; };
/**
 * Vertex [0, 0]
 * @internal
 */
var ZERO = Array.from([0, 0]);
/**
 * Vertex [1, 1]
 * @internal
 */
var ONE = Array.from([1, 1]);
export default {
    create: create,
    distance: distance,
    dot: dot,
    length: length,
    angle: angle,
    squeezeX: squeezeX,
    squeezeY: squeezeY,
    skewX: skewX,
    skewY: skewY,
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
    translate: translate,
    scale: scale,
    divide: divide,
    toString: toString,
    ZERO: ZERO,
    ONE: ONE,
};
//# sourceMappingURL=Vec2.js.map