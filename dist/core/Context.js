import SimplexNoise from 'simplex-noise';
import Vec2, { TArray } from "./math/Vec2";
import { Repetition, RepetitionType } from "./types/ShapeBase";
const noises = {
    random: new SimplexNoise(Math.random),
};
function noise(seed = 'random', x = 0, y = 0, z = 0) {
    if (!noises[seed]) {
        noises[seed] = new SimplexNoise(seed);
    }
    return noises[seed].noise3D(x, y, z);
}
function angle(repetition, offsetFromCenter = [0, 0]) {
    var _a;
    if (repetition.type == RepetitionType.Matrix) {
        const matrixOffset = Vec2.create(offsetFromCenter);
        const center_matrix = Vec2.create((repetition.count_col - 1) / 2, (repetition.count_row - 1) / 2);
        center_matrix[0] += center_matrix[0] * matrixOffset[0];
        center_matrix[1] += center_matrix[1] * matrixOffset[1];
        return Math.atan((repetition.current_row - 1 - center_matrix[1]) /
            (repetition.current_col - 1 - center_matrix[0]));
    }
    return (_a = repetition.current_angle) !== null && _a !== void 0 ? _a : 0;
}
function distance(repetition, offsetFromCenter = [0, 0], scaleDistance = [1, 1]) {
    if (repetition.type == RepetitionType.Matrix) {
        const matrixOffset = Vec2.create(offsetFromCenter);
        const scale = Vec2.create(scaleDistance);
        const center_matrix = Vec2.create((repetition.count_col - 1) / 2, (repetition.count_row - 1) / 2);
        center_matrix[0] += center_matrix[0] * matrixOffset[0];
        center_matrix[1] += center_matrix[1] * matrixOffset[1];
        const current = Vec2.create(repetition.current_col - 1, repetition.current_row - 1);
        Vec2.divide(current, scale);
        return Vec2.distance(current, center_matrix);
    }
    return 1;
}
function percW(percentage, shape) {
    return shape && shape.scene ? (shape.scene.width * percentage) / 100 : percentage;
}
function percH(percentage, shape) {
    return shape && shape.scene ? (shape.scene.height * percentage) / 100 : percentage;
}
export default {
    noise,
    angle,
    distance,
    percW,
    percH,
};
//# sourceMappingURL=Context.js.map