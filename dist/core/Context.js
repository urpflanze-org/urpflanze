import SimplexNoise from 'simplex-noise';
import { ERepetitionType, IRepetition } from "./types/scene-child";
import { vec2 } from 'gl-matrix';
/**
 * @internal
 * @ignore
 */
var noises = {
    random: new SimplexNoise(Math.random),
};
/**
 * Utilities function passed to <a href="[base_url]/ISceneChildPropArguments">ISceneChildPropArguments</a>
 *
 * @category Core.Utilities
 * @example
 * ```javascript
 * const circle = new Urpflanze.Circle({
 * 	distance: ({ context, repetition }) => context.noise('seed', repetition.index) * 200
 * })
 * ```
 */
var Context = {
    /**
     * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
     * Use 'random' as seed property for random seed.
     * Return value between -1 and 1
     *
     * @param {string} [seed='random']
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     * @returns {number}
     */
    noise: function (seed, x, y, z) {
        if (seed === void 0) { seed = 'random'; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
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
     * @param {vec2} offsetFromCenter
     * @returns {number}
     */
    angle: function (repetition, offsetFromCenter) {
        if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
        if (repetition.type == ERepetitionType.Matrix) {
            var centerMatrix = vec2.fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
            centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
            var x = repetition.col.index - 1 - centerMatrix[0];
            var y = repetition.row.index - 1 - centerMatrix[1];
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
    angle2: function (repetition, offsetFromCenter) {
        if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
        if (repetition.type == ERepetitionType.Matrix) {
            var centerMatrix = vec2.fromValues((repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2);
            centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
            centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
            var x = repetition.col.index - 1 - centerMatrix[0];
            var y = repetition.col.index - 1 - centerMatrix[1];
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
    distance: function (repetition, offsetFromCenter) {
        if (offsetFromCenter === void 0) { offsetFromCenter = [0, 0]; }
        if (repetition.type == ERepetitionType.Matrix) {
            var centerMatrix = vec2.fromValues(0.5, 0.5);
            centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
            centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
            var current = vec2.fromValues(repetition.col.offset - 0.5 / repetition.col.count, repetition.row.offset - 0.5 / repetition.row.count);
            return vec2.distance(current, centerMatrix);
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
    percW: function (percentage, sceneChild) {
        return sceneChild && sceneChild.scene ? (sceneChild.scene.width * percentage) / 100 : percentage;
    },
    /**
     * Get value percentage of scene height.
     *
     * @param {number} percentage
     * @param {SceneChild} sceneChild
     * @returns {number}
     */
    percH: function (percentage, sceneChild) {
        return sceneChild && sceneChild.scene ? (sceneChild.scene.height * percentage) / 100 : percentage;
    },
};
export default Context;
//# sourceMappingURL=Context.js.map