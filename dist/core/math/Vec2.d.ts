/**
 * Vec2 operation
 *
 * @category Core.Utilities
 */
declare const Vec2: {
    /**
     * Create new vertex
     *
     * @param {Array<number> | number} [x=0]
     * @param {number} [y]
     * @returns {Array<number>}
     */
    create: (x?: Array<number> | number, y?: number | undefined) => Array<number>;
    /**
     * Distance between two points
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    distance: (a: Array<number>, b: Array<number>) => number;
    /**
     * dot product
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    dot: (a: Array<number>, b: Array<number>) => number;
    /**
     * length of point
     *
     * @param {Array<number>} vec
     * @returns {number}
     */
    length: (vec: Array<number>) => number;
    /**
     * angle between two point
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    angle: (a: Array<number>, b: Array<number>) => number;
    /**
     * skewX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewX: (vec: Array<number>, m: number) => void;
    /**
     * skewY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewY: (vec: Array<number>, m: number) => void;
    /**
     * squeezeX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeX: (vec: Array<number>, m: number) => void;
    /**
     * squeezeY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeY: (vec: Array<number>, m: number) => void;
    /**
     * Rotate point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} MATRIX
     * @param {Array<number>} pointToRotate
     * @internal
     */
    rotate: (vec: Array<number>, MATRIX: Array<number>, pointToRotate: Array<number>) => void;
    /**
     * RotateX point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} pointToRotate
     * @param {number} rad
     */
    rotateX: (vec: Array<number>, pointToRotate: Array<number>, rad: number) => void;
    /**
     * RotateY point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} pointToRotate
     * @param {number} rad
     */
    rotateY: (vec: Array<number>, pointToRotate: Array<number>, rad: number) => void;
    /**
     * RotateZ point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} pointToRotate
     * @param {number} rad
     */
    rotateZ: (vec: Array<number>, pointToRotate: Array<number>, rad: number) => void;
    /**
     * Translate vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    translate: (vec: Array<number>, to: Array<number>) => void;
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    scale: (vec: Array<number>, to: Array<number>) => void;
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    divide: (vec: Array<number>, to: Array<number>) => void;
    /**
     * Vec to string
     *
     * @param {Array<number>} vec
     * @return {string}
     */
    toString: (vec: Array<number>) => string;
    /**
     * Vertex [0, 0]
     */
    ZERO: [number, number];
    /**
     * Vertex [1, 1]
     */
    ONE: [number, number];
};
export default Vec2;
//# sourceMappingURL=Vec2.d.ts.map