import { mat3, mat4, quat, vec2, vec3 } from 'gl-matrix';
export declare const VEC3_ZERO: vec3;
export declare const VEC3_ONE: vec3;
export declare const VEC2_ZERO: vec2;
export declare const VEC2_ONE: vec2;
export declare function fromSkew(out: mat4, skew: [number, number]): mat4;
export declare function toVec2(x: number | Array<number>): vec2;
export declare function toVec3(x: number | Array<number>, defaultZValue?: number): vec3;
export declare function fromRadians(out: quat, x: number, y: number, z: number): quat;
export declare const squeezeX: (vec: vec2 | vec3, m: number) => void;
export declare const squeezeY: (vec: vec2 | vec3, m: number) => void;
export declare function perspectiveMatrix(out: mat4, fov: number, near: number, far: number): mat4;
export declare function mat3rotateX(angle: number): mat3;
export declare function mat3rotateY(angle: number): mat3;
export declare function mat3rotateZ(angle: number): mat3;
export declare type mat3x2 = [number, number, number, number, number, number] | Float32Array;
export declare function mul3x2_3x3(out: mat3x2, a: mat3x2, b: mat3): mat3x2;
export declare function vec3transformMat3x2(out: vec3, a: vec3, b: mat3x2): vec3;
//# sourceMappingURL=gl-matrix-extensions.d.ts.map