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
    create: (x?: number | number[] | Float32Array, y?: number | undefined) => number[] | Float32Array;
    distance: (a: number[] | Float32Array, b: number[] | Float32Array) => number;
    dot: (a: number[] | Float32Array, b: number[] | Float32Array) => number;
    length: (vec: number[] | Float32Array) => number;
    angle: (a: number[] | Float32Array, b: number[] | Float32Array) => number;
    squeezeX: (vec: number[] | Float32Array, m: number) => void;
    squeezeY: (vec: number[] | Float32Array, m: number) => void;
    skewX: (vec: number[] | Float32Array, m: number) => void;
    skewY: (vec: number[] | Float32Array, m: number) => void;
    rotateX: (vec: number[] | Float32Array, pointToRotate: number[] | Float32Array, rad: number) => void;
    rotateY: (vec: number[] | Float32Array, pointToRotate: number[] | Float32Array, rad: number) => void;
    rotateZ: (vec: number[] | Float32Array, pointToRotate: number[] | Float32Array, rad: number) => void;
    translate: (vec: number[] | Float32Array, to: number[] | Float32Array) => void;
    scale: (vec: number[] | Float32Array, to: number[] | Float32Array) => void;
    divide: (vec: number[] | Float32Array, to: number[] | Float32Array) => void;
    toString: (vec: number[] | Float32Array) => string;
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