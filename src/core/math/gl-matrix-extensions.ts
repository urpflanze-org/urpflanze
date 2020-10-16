import { mat4, vec2, vec3 } from 'gl-matrix'

export const VEC3_ZERO: vec3 = [0, 0, 0]
export const VEC3_ONE: vec3 = [1, 1, 1]
export const VEC2_ZERO: vec2 = [0, 0]
export const VEC2_ONE: vec2 = [1, 1]

/**
 * Skew matrix
 *
 * @internal
 */
export function fromSkew(out: mat4, skew: [number, number]) {
	out[0] = 1
	out[1] = Math.tan(skew[1])
	out[2] = 0
	out[3] = 0
	out[4] = Math.tan(skew[0])
	out[5] = 1
	out[6] = 0
	out[7] = 0
	out[8] = 0
	out[9] = 0
	out[10] = 1
	out[11] = 0
	out[12] = 0
	out[13] = 0
	out[14] = 0
	out[15] = 1
	return out
}

/**
 * number to vec 2
 *
 * @internal
 */
export function toVec2(x: number | Array<number>): vec2 {
	if (Array.isArray(x)) return [x[0], x[1]]
	return [x, x]
}

/**
 * number to vec 3
 *
 * @internal
 */
export function toVec3(x: number | Array<number>, defaultZValue: number = 0): vec3 {
	if (Array.isArray(x)) return [x[0], x[1], defaultZValue]
	return [x, x, defaultZValue]
}
