import SimplexNoise from 'simplex-noise';
import { ERepetitionType, IRepetition } from "./types/scene-child";
import Vec2, { TArray } from "./math/Vec2";
/**
 * @internal
 * @ignore
 */
const noises = {
    random: new SimplexNoise(Math.random),
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
            noises[seed] = new SimplexNoise(seed);
        }
        return noises[seed].noise3D(x, y, z);
    },
    /**
     * Return angle (atan) from offset (or center) for matrix repetition.
     * Offset is array between [-1, -1] and [1, 1].
     * The return value is bettween -Math.PI / 2 and Math.PI / 2
     *
     * @param {IRepetition} repetition
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == ERepetitionType.Matrix) {
            const matrixOffset = Vec2.create(offsetFromCenter);
            const center_matrix = Vec2.create((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
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
     * @param {number | TArray} offsetFromCenter
     * @returns {number}
     */
    angle2: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == ERepetitionType.Matrix) {
            const matrixOffset = Vec2.create(offsetFromCenter);
            const center_matrix = Vec2.create((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
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
     * @param {number | TArray} offsetFromCenter offset relative to distance prop
     * @returns {number}
     */
    distance: (repetition, offsetFromCenter = [0, 0]) => {
        if (repetition.type == ERepetitionType.Matrix) {
            const matrixOffset = Vec2.create(offsetFromCenter);
            const center_matrix = Vec2.create(0.5, 0.5);
            center_matrix[0] += center_matrix[0] * matrixOffset[0];
            center_matrix[1] += center_matrix[1] * matrixOffset[1];
            const current = Vec2.create(repetition.col.offset - 0.5 / repetition.col.count, repetition.row.offset - 0.5 / repetition.row.count);
            return Vec2.distance(current, center_matrix);
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
export default Context;
//# sourceMappingURL=Context.js.map