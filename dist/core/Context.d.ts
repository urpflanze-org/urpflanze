import { IRepetition } from "./types/scene-child";
import SceneChild from "./SceneChild";
import { TArray } from "./math/Vec2";
/**
 * Utilities function passed to <a href="[base_url]/ISceneChildPropArguments">ISceneChildPropArguments</a>
 *
 * @category Core.Utilities
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
     * Return angle (atan) from offset (or center).
     * Offset is array between [-1, -1] and [1, 1]
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return angle (atan2, 4 quadrants) from offset (or center).
     * Offset is array between [-1, -1] and [1, 1]
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Return distance from offset (or center)
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition: IRepetition, offsetFromCenter?: number | TArray) => number;
    /**
     * Get value percentage of scene width
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percW: (percentage: number, sceneChild: SceneChild) => number;
    /**
     * Get value percentage of scene height
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percH: (percentage: number, sceneChild: SceneChild) => number;
};
export default Context;
//# sourceMappingURL=Context.d.ts.map