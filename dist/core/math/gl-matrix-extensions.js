import { glMatrix } from 'gl-matrix';
glMatrix.setMatrixArrayType(Array);
import { vec2, vec3 } from 'gl-matrix';
export const VEC3_ZERO = [0, 0, 0];
export const VEC3_ONE = [1, 1, 1];
export const VEC2_ZERO = [0, 0];
export const VEC2_ONE = [1, 1];
export function fromSkew(out, skew) {
    out[0] = 1;
    out[1] = Math.tan(skew[1]);
    out[2] = 0;
    out[3] = 0;
    out[4] = Math.tan(skew[0]);
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
export function toVec2(x) {
    if (Array.isArray(x))
        return vec2.fromValues(x[0], x[1]);
    return vec2.fromValues(x, x);
}
export function toVec3(x, defaultZValue = 0) {
    var _a;
    if (Array.isArray(x))
        return vec3.fromValues(x[0], x[1], (_a = x[2]) !== null && _a !== void 0 ? _a : defaultZValue);
    return vec3.fromValues(x, x, x);
}
export function fromRadians(out, x, y, z) {
    let halfToRad = 0.5;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
}
export const squeezeX = (vec, m) => {
    vec[1] += vec[1] * (vec[0] * -m);
};
export const squeezeY = (vec, m) => {
    vec[0] += vec[0] * (vec[1] * m);
};
export function perspectiveMatrix(out, fov, near, far) {
    var f = 1.0 / Math.tan(fov / 2);
    var rangeInv = 1 / (near - far);
    out[0] = f;
    out[1] = out[2] = out[3] = out[4] = 0;
    out[6] = out[7] = out[8] = out[9] = 0;
    out[12] = out[13] = 0;
    out[15] = 0;
    out[5] = f;
    out[10] = (near + far) * rangeInv;
    out[11] = -1;
    out[14] = near * far * rangeInv * 2;
    return out;
}
export function mat3rotateX(angle) {
    return [1, 0, 0, 0, Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle)];
}
export function mat3rotateY(angle) {
    return [Math.cos(angle), 0, Math.sin(angle), 0, 1, 0, -Math.sin(angle), 0, Math.cos(angle)];
}
export function mat3rotateZ(angle) {
    return [Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1];
}
export function mul3x2_3x3(out, a, b) {
    out[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
    out[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
    out[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
    out[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];
    out[3] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
    out[3] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];
    return out;
}
export function vec3transformMat3x2(out, a, b) {
    out[0] = b[0] * a[0] + b[1] * a[1] + b[2] * a[2];
    out[1] = b[3] * a[0] + b[4] * a[1] + b[5] * a[2];
    return out;
}
//# sourceMappingURL=gl-matrix-extensions.js.map