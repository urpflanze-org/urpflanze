import { quat, vec2 } from 'gl-matrix'

export function fromRadians(out: quat, x: number, y: number, z: number) {
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

export function skewX(vec: vec2, m: number): void {
	vec[0] += Math.tan(m) * vec[1]
}

export const skewY = (vec: vec2, m: number): void => {
	vec[1] += Math.tan(m) * vec[0]
}

export const squeezeX = (vec: vec2, m: number): void => {
	vec[1] += vec[1] * (vec[0] * -m)
}

export const squeezeY = (vec: vec2, m: number): void => {
	vec[0] += vec[0] * (vec[1] * m)
}
