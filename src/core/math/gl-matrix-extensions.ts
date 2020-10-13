import { glMatrix } from 'gl-matrix'
glMatrix.setMatrixArrayType(Array)

import { mat4, quat, vec2, vec3 } from 'gl-matrix'

export const VEC3_ZERO: vec3 = [0, 0, 0]
export const VEC3_ONE: vec3 = [1, 1, 1]
export const VEC2_ZERO: vec2 = [0, 0]
export const VEC2_ONE: vec2 = [1, 1]

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

export function toVec2(x: number | Array<number>): vec2 {
	if (Array.isArray(x)) return [x[0], x[1]]
	return [x, x]
}

export function toVec3(x: number | Array<number>, defaultZValue: number = 0): vec3 {
	if (Array.isArray(x)) return [x[0], x[1], defaultZValue]
	return [x, x, defaultZValue]
}

export function quatFromRadians(out: quat, x: number, y: number, z: number): quat {
	let halfToRad = 0.5
	x *= halfToRad
	y *= halfToRad
	z *= halfToRad
	let sx = Math.sin(x)
	let cx = Math.cos(x)
	let sy = Math.sin(y)
	let cy = Math.cos(y)
	let sz = Math.sin(z)
	let cz = Math.cos(z)
	out[0] = sx * cy * cz - cx * sy * sz
	out[1] = cx * sy * cz + sx * cy * sz
	out[2] = cx * cy * sz - sx * sy * cz
	out[3] = cx * cy * cz + sx * sy * sz
	return out
}

export const squeezeX = (vec: vec2 | vec3, m: number): void => {
	vec[1] += vec[1] * (vec[0] * -m)
}

export const squeezeY = (vec: vec2 | vec3, m: number): void => {
	vec[0] += vec[0] * (vec[1] * m)
}
