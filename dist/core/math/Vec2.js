import { clamp } from "../../Utilites";
/**
 * Temporany matrix
 *
 * @internal
 */
const MATRIX = new Array(4);
/**
 * Create new vertex
 *
 * @param {TArray | number} [x=0]
 * @param {number} [y]
 * @returns {TArray}
 * @internal
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
/**
 * Distance between two points
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
const distance = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
/**
 * dot product
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
/**
 * length of point
 *
 * @param {TArray} vec
 * @returns {number}
 * @internal
 */
const length = (vec) => Math.hypot(vec[0], vec[1]);
/**
 * angle between two point
 *
 * @param {TArray} a
 * @param {TArray} b
 * @returns {number}
 * @internal
 */
const angle = (a, b) => {
    const m = length(a) * length(b);
    return Math.acos(clamp(-1, 1, m && dot(a, b) / m));
};
/**
 * skewX point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
const skewX = (vec, m) => {
    vec[0] += Math.tan(m) * vec[1];
};
/**
 * skewY point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
const skewY = (vec, m) => {
    vec[1] += Math.tan(m) * vec[0];
};
/**
 * squeezeX point
 *
 * @param {TArray} vec
 * @param {number} m
 * @internal
 */
const squeezeX = (vec, m) => {
    vec[1] += vec[1] * (vec[0] * -m);
};
/**
 * squeezeY point
 *
 * @param {TArray} vec
 * @param {number} m
 */
const squeezeY = (vec, m) => {
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
const rotate = (vec, MATRIX, pointToRotate) => {
    const p0 = vec[0] - pointToRotate[0];
    const p1 = vec[1] - pointToRotate[1];
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
const rotateX = (vec, pointToRotate, rad) => {
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
const rotateY = (vec, pointToRotate, rad) => {
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
 * @internal
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
 * @internal
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
 * @internal
 */
const divide = (vec, to) => {
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
const toString = (vec) => `x: ${vec[0]}, y: ${vec[1]}`;
/**
 * Vertex [0, 0]
 * @internal
 */
const ZERO = Array.from([0, 0]);
/**
 * Vertex [1, 1]
 * @internal
 */
const ONE = Array.from([1, 1]);
export default {
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
};
//# sourceMappingURL=Vec2.js.map