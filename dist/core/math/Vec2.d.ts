/**
 * Array type
 *
 * @ignore
 */
export declare type TArray = Array<number> | Float32Array;
declare const _default: {
    create: (x?: number | number[] | Float32Array, y?: number | undefined) => TArray;
    distance: (a: TArray, b: TArray) => number;
    dot: (a: TArray, b: TArray) => number;
    length: (vec: TArray) => number;
    angle: (a: TArray, b: TArray) => number;
    squeezeX: (vec: TArray, m: number) => void;
    squeezeY: (vec: TArray, m: number) => void;
    skewX: (vec: TArray, m: number) => void;
    skewY: (vec: TArray, m: number) => void;
    rotateX: (vec: TArray, pointToRotate: TArray, rad: number) => void;
    rotateY: (vec: TArray, pointToRotate: TArray, rad: number) => void;
    rotateZ: (vec: TArray, pointToRotate: TArray, rad: number) => void;
    translate: (vec: TArray, to: TArray) => void;
    scale: (vec: TArray, to: TArray) => void;
    divide: (vec: TArray, to: TArray) => void;
    toString: (vec: TArray) => string;
    ZERO: number[];
    ONE: number[];
};
export default _default;
//# sourceMappingURL=Vec2.d.ts.map