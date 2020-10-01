import { TArray } from '@core/math/Vec2';
import ShapeBase from '@core/shapes/ShapeBase';
import { Repetition } from '@core/types/ShapeBase';
/**
 * Test
 */
declare const Context: {
    /**
     * SimplexNoise <a href="https://www.npmjs.com/package/simplex-noise">url</a>
     *
     * @param {string} [seed='random']
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     * @returns {number}
     */
    noise: (seed?: string, x?: number, y?: number, z?: number) => number;
    /**
     * Return angle (atan) from offset(or center)
     *
     * @param {Repetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition: Repetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return angle (atan2, 4 quadrants) from offset(or center)
     *
     * @param {Repetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition: Repetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return distance from offset (or center)
     *
     * @param {Repetition} repetition
     * @param {number | TArray} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition: Repetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Get value percentage of scene width
     *
     * @param {number} percentage
     * @param {ShapeBase} shape
     * @returns {number}
     */
    percW: (percentage: number, shape: ShapeBase) => number;
    /**
     * Get value percentage of scene height
     *
     * @param {number} percentage
     * @param {ShapeBase} shape
     * @returns {number}
     */
    percH: (percentage: number, shape: ShapeBase) => number;
};
export default Context;
//# sourceMappingURL=Context.d.ts.map