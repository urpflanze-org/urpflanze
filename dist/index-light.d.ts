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
import * as vec2 from "./core/math/Vec2";
export declare const Vec2: {
    create: (x?: number | number[] | Float32Array, y?: number | undefined) => vec2.TArray;
    distance: (a: vec2.TArray, b: vec2.TArray) => number;
    dot: (a: vec2.TArray, b: vec2.TArray) => number;
    length: (vec: vec2.TArray) => number;
    angle: (a: vec2.TArray, b: vec2.TArray) => number;
    squeezeX: (vec: vec2.TArray, m: number) => void;
    squeezeY: (vec: vec2.TArray, m: number) => void;
    skewX: (vec: vec2.TArray, m: number) => void;
    skewY: (vec: vec2.TArray, m: number) => void;
    rotateX: (vec: vec2.TArray, pointToRotate: vec2.TArray, rad: number) => void;
    rotateY: (vec: vec2.TArray, pointToRotate: vec2.TArray, rad: number) => void;
    rotateZ: (vec: vec2.TArray, pointToRotate: vec2.TArray, rad: number) => void;
    translate: (vec: vec2.TArray, to: vec2.TArray) => void;
    scale: (vec: vec2.TArray, to: vec2.TArray) => void;
    divide: (vec: vec2.TArray, to: vec2.TArray) => void;
    toString: (vec: vec2.TArray) => string;
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