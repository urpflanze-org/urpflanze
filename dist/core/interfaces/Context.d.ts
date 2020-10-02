import { TArray } from '@core/math/Vec2';
import SceneChild from '@core/SceneChild';
import { Repetition } from '@core/types/ShapeBase';
export default interface IContext {
    noise: (seed: string, x: number, y: number, z: number) => number;
    angle: (repetition: Repetition, offsetFromCenter: number | TArray) => number;
    angle2: (repetition: Repetition, offsetFromCenter: number | TArray) => number;
    distance: (repetition: Repetition, offsetFromCenter: number | TArray) => number;
    percW: (percentage: number, shape: SceneChild) => number;
    percH: (percentage: number, shape: SceneChild) => number;
}
//# sourceMappingURL=Context.d.ts.map