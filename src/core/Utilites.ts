import { TArray } from './math/Vec2'

const isDef = (object: any): boolean => typeof object !== 'undefined' && object !== null

const now = (): number => {
	return performance && performance.now ? performance.now() : Date.now()
}

const aOr = (...args: Array<any>): any => {
	for (let i = 0; i < args.length; i++) if (isDef(args[i])) return args[i]
}

const toDegrees = (radians: number) => (radians * 180) / Math.PI
const toRadians = (degrees: number) => (degrees * Math.PI) / 180

const perf = (name: string, callback: any, log: boolean = false): number => {
	const t1 = now()
	callback()
	const t2 = now()
	log && console.log('perf ' + name + ': ' + (t2 - t1))
	return t2 - t1
}

const toArray = (t: number | TArray) => (Array.isArray(t) ? t : [t, t])

/**
 * Return true if key exist in props
 * args[0] = props
 * args[1...n] = search key
 *
 * @protected
 * @static
 * @param {...any} args
 * @returns {boolean}
 */
const hasKey = (...args: any): boolean => {
	const props = args.shift()
	const keys = typeof props == 'object' ? Object.keys(props) : [props]

	for (let i = 0, klen = keys.length; i < klen; i++)
		for (let j = 0, alen = args.length; j < alen; j++) if (keys[i] == args[j]) return true

	return false
}

/**
 * Return number between {min} and {max}
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
const clamp = (min: number, max: number, value: number): number => (value <= min ? min : value >= max ? max : value)

/**
 * Map number between {refMin} e {refMin} from {min} and  {max}
 *
 * @example
 * ```javascript
 * relativeClamp2(0.5, 0, 1, 100, 200) // 150
 * ```
 *
 * @param {number} value
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
const relativeClamp = (value: number, refMin: number, refMax: number, toMin: number, toMax: number) =>
	clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin)

export { isDef, now, aOr, toDegrees, toRadians, toArray, hasKey, perf, clamp, relativeClamp }
