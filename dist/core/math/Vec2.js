import { clamp } from "../../Utilites";
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
        var m = Vec2.length(a) * Vec2.length(b);
        return Math.acos(clamp(-1, 1, m && Vec2.dot(a, b) / m));
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
export default Vec2;
//# sourceMappingURL=Vec2.js.map