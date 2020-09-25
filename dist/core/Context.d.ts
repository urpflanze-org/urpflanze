import { TArray } from "./math/Vec2";
import ShapeBase from "./shapes/ShapeBase";
import { Repetition } from "./types/ShapeBase";
declare function noise(seed?: string, x?: number, y?: number, z?: number): number;
declare function angle(repetition: Repetition, offsetFromCenter?: number | TArray): number;
declare function distance(repetition: Repetition, offsetFromCenter?: number | TArray, scaleDistance?: number | TArray): number;
declare function percW(percentage: number, shape: ShapeBase): number;
declare function percH(percentage: number, shape: ShapeBase): number;
declare const _default: {
    noise: typeof noise;
    angle: typeof angle;
    distance: typeof distance;
    percW: typeof percW;
    percH: typeof percH;
};
export default _default;
