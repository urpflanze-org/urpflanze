import { IRepetition } from "./types/scene-child";
import SceneChild from "./SceneChild";
import { TArray } from "./math/Vec2";
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
declare const Context: {
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
    noise: (seed?: string, x?: number, y?: number, z?: number) => number;
    /**
     * Return angle (atan) from offset (or center) for matrix repetition.
     * Offset is array between [-1, -1] and [1, 1].
     * The return value is bettween -Math.PI / 2 and Math.PI / 2
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
     * Offset is array between [-1, -1] and [1, 1].
     * The return value is bettween -Math.PI an Math.PI
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return distance from offset (or center) for matrix repetition.
     * The return value is between 0 and 1
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Get value percentage of scene width.
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percW: (percentage: number, sceneChild: SceneChild) => number;
    /**
     * Get value percentage of scene height.
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percH: (percentage: number, sceneChild: SceneChild) => number;
};
export default Context;
//# sourceMappingURL=Context.d.ts.map