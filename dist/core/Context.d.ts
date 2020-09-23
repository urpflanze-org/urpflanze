import { TArray } from "./math/Vec2";
import ShapeBase from "./shapes/ShapeBase";
import { Repetition } from "./types/ShapeBase";
declare const _default: {
    noise: (seed?: string, x?: number, y?: number, z?: number) => number;
    angle: (repetition: Repetition, offsetFromCenter?: number | TArray) => number;
    distance: (repetition: Repetition, offsetFromCenter?: number | TArray, scaleDistance?: number | TArray) => number;
    percW: (percentage: number, shape: ShapeBase) => number;
    percH: (percentage: number, shape: ShapeBase) => number;
};
export default _default;
