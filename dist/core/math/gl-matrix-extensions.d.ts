import { mat4, quat, vec2, vec3 } from 'gl-matrix';
export declare function fromRadians(out: quat, x: number, y: number, z: number): quat;
export declare function skewX(vec: vec2 | vec3, m: number): void;
export declare const skewY: (vec: vec2 | vec3, m: number) => void;
export declare const squeezeX: (vec: vec2 | vec3, m: number) => void;
export declare const squeezeY: (vec: vec2 | vec3, m: number) => void;
export declare function perspectiveMatrix(out: mat4, fov: number, near: number, far: number): mat4;
//# sourceMappingURL=gl-matrix-extensions.d.ts.map