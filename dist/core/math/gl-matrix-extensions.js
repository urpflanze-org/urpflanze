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
        return [x[0], x[1]];
    return [x, x];
}
export function toVec3(x, defaultZValue = 0) {
    if (Array.isArray(x))
        return [x[0], x[1], defaultZValue];
    return [x, x, defaultZValue];
}
//# sourceMappingURL=gl-matrix-extensions.js.map