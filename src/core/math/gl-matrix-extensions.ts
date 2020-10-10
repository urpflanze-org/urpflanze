import { mat4, quat, vec2, vec3 } from 'gl-matrix'

export const VEC3_ZERO: vec3 = [0, 0, 0]
export const VEC2_ZERO: vec2 = [0, 0]
export const VEC2_ONE: vec2 = [1, 1]

export function toVec2(x: number | Array<number>): vec2 {
	if (Array.isArray(x)) return vec2.fromValues(x[0], x[1])
	return vec2.fromValues(x, x)
}
export function toVec3(x: number | Array<number>, defaultZValue: number = 0): vec3 {
	if (Array.isArray(x)) return vec3.fromValues(x[0], x[1], x[2] ?? defaultZValue)
	return vec3.fromValues(x, x, x)
}

export function fromRadians(out: quat, x: number, y: number, z: number): quat {
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

export function skewX(vec: vec2 | vec3, m: number): void {
	vec[0] += Math.tan(m) * vec[1]
}

export const skewY = (vec: vec2 | vec3, m: number): void => {
	vec[1] += Math.tan(m) * vec[0]
}

export const squeezeX = (vec: vec2 | vec3, m: number): void => {
	vec[1] += vec[1] * (vec[0] * -m)
}

export const squeezeY = (vec: vec2 | vec3, m: number): void => {
	vec[0] += vec[0] * (vec[1] * m)
}

export function perspectiveMatrix(out: mat4, fov: number, near: number, far: number): mat4 {
	var f = 1.0 / Math.tan(fov / 2)
	var rangeInv = 1 / (near - far)

	out[0] = f
	out[1] = out[2] = out[3] = out[4] = 0
	out[6] = out[7] = out[8] = out[9] = 0
	out[12] = out[13] = 0
	out[15] = 0

	out[5] = f

	out[10] = (near + far) * rangeInv
	out[11] = -1

	out[14] = near * far * rangeInv * 2

	return out
}
