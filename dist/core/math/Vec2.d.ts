export declare type TArray = Array<number> | Float32Array;
declare const _default: {
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
export default _default;
//# sourceMappingURL=Vec2.d.ts.map