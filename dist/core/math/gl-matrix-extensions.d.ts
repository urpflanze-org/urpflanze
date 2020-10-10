import { mat4, quat, vec2, vec3 } from 'gl-matrix';
export declare const VEC3_ZERO: vec3;
export declare const VEC2_ZERO: vec2;
export declare const VEC2_ONE: vec2;
export declare function toVec2(x: number | Array<number>): vec2;
export declare function toVec3(x: number | Array<number>, defaultZValue?: number): vec3;
export declare function fromRadians(out: quat, x: number, y: number, z: number): quat;
export declare function skewX(vec: vec2 | vec3, m: number): void;
export declare const skewY: (vec: vec2 | vec3, m: number) => void;
export declare const squeezeX: (vec: vec2 | vec3, m: number) => void;
export declare const squeezeY: (vec: vec2 | vec3, m: number) => void;
export declare function perspectiveMatrix(out: mat4, fov: number, near: number, far: number): mat4;
//# sourceMappingURL=gl-matrix-extensions.d.ts.map