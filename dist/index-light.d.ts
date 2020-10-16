/**
 * Core
 */
export { default as Scene } from "./core/Scene";
export { default as SceneChild } from "./core/SceneChild";
export { default as Group } from "./core/Group";
export { default as Line } from "./core/shapes/primitives/Line";
export { default as Triangle } from "./core/shapes/primitives/Triangle";
export { default as Rect } from "./core/shapes/primitives/Rect";
export { default as RegularPolygon } from "./core/shapes/primitives/RegularPolygon";
export { default as Circle } from "./core/shapes/primitives/Circle";
export { default as Rose } from "./core/shapes/primitives/Rose";
export { default as Spiral } from "./core/shapes/primitives/Spiral";
export { default as Lissajous } from "./core/shapes/primitives/Lissajous";
export { default as Shape } from "./core/shapes/Shape";
export { default as ShapePrimitive } from "./core/shapes/ShapePrimitive";
export { default as ShapeLoop } from "./core/shapes/ShapeLoop";
export { default as ShapeBuffer } from "./core/shapes/ShapeBuffer";
export { clamp, relativeClamp, toDegrees, toRadians } from "./Utilites";
export declare const Vec2: {
    create: (x?: number | Float32Array | number[], y?: number | undefined) => Float32Array | number[];
    distance: (a: Float32Array | number[], b: Float32Array | number[]) => number;
    dot: (a: Float32Array | number[], b: Float32Array | number[]) => number;
    length: (vec: Float32Array | number[]) => number;
    angle: (a: Float32Array | number[], b: Float32Array | number[]) => number;
    squeezeX: (vec: Float32Array | number[], m: number) => void;
    squeezeY: (vec: Float32Array | number[], m: number) => void;
    skewX: (vec: Float32Array | number[], m: number) => void;
    skewY: (vec: Float32Array | number[], m: number) => void;
    rotateX: (vec: Float32Array | number[], pointToRotate: Float32Array | number[], rad: number) => void;
    rotateY: (vec: Float32Array | number[], pointToRotate: Float32Array | number[], rad: number) => void;
    rotateZ: (vec: Float32Array | number[], pointToRotate: Float32Array | number[], rad: number) => void;
    translate: (vec: Float32Array | number[], to: Float32Array | number[]) => void;
    scale: (vec: Float32Array | number[], to: Float32Array | number[]) => void;
    divide: (vec: Float32Array | number[], to: Float32Array | number[]) => void;
    toString: (vec: Float32Array | number[]) => string;
    ZERO: number[];
    ONE: number[];
};
export { default as Context } from "./core/Context";
/**
 * Services
 */
export { default as DrawerCanvas } from "./services/drawer-canvas/DrawerCanvas";
export { default as Animation } from "./services/animation/Simple";
//# sourceMappingURL=index-light.d.ts.map