import { mat4, vec2, vec3 } from 'gl-matrix';
export declare const VEC3_ZERO: vec3;
export declare const VEC3_ONE: vec3;
export declare const VEC2_ZERO: vec2;
export declare const VEC2_ONE: vec2;
/**
 * Skew matrix
 *
 * @internal
 */
export declare function fromSkew(out: mat4, skew: [number, number]): mat4;
/**
 * number to vec 2
 *
 * @internal
 */
export declare function toVec2(x: number | Array<number>): vec2;
/**
 * number to vec 3
 *
 * @internal
 */
export declare function toVec3(x: number | Array<number>, defaultZValue?: number): vec3;
//# sourceMappingURL=gl-matrix-extensions.d.ts.map