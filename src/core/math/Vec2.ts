import { clamp } from '@core/Utilites'

export type TArray = Array<number> | Float32Array

const MATRIX: TArray = new Array(4)

const create_matrix = () => {
	return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
}

/**
 * Create new vertex
 *
 * @param {TArray | number} [x=0]
 * @param {number} [y]
 * @returns {TArray}
 */
const create = (x: TArray | number = 0, y?: number): TArray => {
	const out = new Array(2)
	if (typeof x === 'number') {
		out[0] = x
		out[1] = y ?? x
	} else {
		out[0] = x[0]
		out[1] = x[1]
	}
	return out
}

const distance = (a: TArray, b: TArray): number => Math.hypot(b[0] - a[0], b[1] - a[1])

const dot = (a: TArray, b: TArray): number => a[0] * b[0] + a[1] * b[1]

const length = (vec: TArray): number => Math.hypot(vec[0], vec[1])

const angle = (a: TArray, b: TArray): number => {
	const m = length(a) * length(b)
	return Math.acos(clamp(-1, 1, m && dot(a, b) / m))
}

const skewX = (vec: TArray, m: number): void => {
	vec[0] += Math.tan(m) * vec[1]
}

const skewY = (vec: TArray, m: number): void => {
	vec[1] += Math.tan(m) * vec[0]
}

const squeezeX = (vec: TArray, m: number): void => {
	vec[1] += vec[1] * (vec[0] * -m)
}

const squeezeY = (vec: TArray, m: number): void => {
	vec[0] += vec[0] * (vec[1] * m)
}

const rotate = (vec: TArray, MATRIX: TArray, pointToRotate: TArray): void => {
	const p0 = vec[0] - pointToRotate[0]
	const p1 = vec[1] - pointToRotate[1]

	vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + pointToRotate[0]
	vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + pointToRotate[1]
}

/**
 * RotateX vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateX = (vec: TArray, pointToRotate: TArray, rad: number): void => {
	MATRIX[0] = 1
	MATRIX[1] = 0
	MATRIX[2] = 0
	MATRIX[3] = Math.cos(rad)

	rotate(vec, MATRIX, pointToRotate)
}

/**
 * RotateY vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateY = (vec: TArray, pointToRotate: TArray, rad: number): void => {
	MATRIX[0] = Math.cos(rad)
	MATRIX[1] = 0
	MATRIX[2] = 0
	MATRIX[3] = 1

	rotate(vec, MATRIX, pointToRotate)
}

/**
 * RotateZ vertex
 *
 * @param {TArray} vec
 * @param {TArray} pointToRotate
 * @param {number} rad
 */
const rotateZ = (vec: TArray, pointToRotate: TArray, rad: number): void => {
	MATRIX[0] = Math.cos(rad)
	MATRIX[1] = -Math.sin(rad)
	MATRIX[2] = Math.sin(rad)
	MATRIX[3] = Math.cos(rad)

	rotate(vec, MATRIX, pointToRotate)
}

/**
 * Translate vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const translate = (vec: TArray, to: TArray): void => {
	vec[0] += to[0]
	vec[1] += to[1]
}

/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const scale = (vec: TArray, to: TArray): void => {
	vec[0] *= to[0]
	vec[1] *= to[1]
}

/**
 * Scale vertex
 *
 * @param {TArray} vec
 * @param {TArray} to
 */
const divide = (vec: TArray, to: TArray): void => {
	vec[0] /= to[0]
	vec[1] /= to[1]
}

const applyTransformation = (
	vec: TArray,
	rotateX: number,
	rotateY: number,
	rotateZ: number,
	translate: TArray,
	scale: TArray
): void => {
	const matrix = create_matrix()

	if (rotateX !== 0) {
		const s = Math.sin(rotateX)
		const c = Math.cos(rotateX)

		matrix[5] = c
		matrix[6] = -s
		matrix[9] = s
		matrix[10] = c
	}
	if (rotateY !== 0) {
		const s = Math.sin(rotateY)
		const c = Math.cos(rotateY)

		matrix[0] = c
		matrix[2] = s
		matrix[8] = -s
		matrix[10] = matrix[10] + c
	}
}

/**
 * Vec to string
 *
 * @param {TArray} vec
 * @return {string}
 */
const toString = (vec: TArray): string => `x: ${vec[0]}, y: ${vec[1]}`

/*
 * Vertex [0, 0]
 */
const ZERO = Array.from([0, 0])

/*
 * Vertex [1, 1]
 */
const ONE = Array.from([1, 1])

export default {
	create,
	distance,
	dot,
	length,
	angle,
	squeezeX,
	squeezeY,
	skewX,
	skewY,
	rotateX,
	rotateY,
	rotateZ,
	translate,
	scale,
	divide,
	toString,
	ZERO,
	ONE,
}
