/**
 * get timestamp
 *
 * @ignore
 */
const getTimestamp = performance && performance.now ? performance.now : Date.now

export interface ICancelablePromise<T> {
	promise: Promise<T>
	resolved: () => boolean
	canceled: () => boolean
	cancel: () => void
}

const Utilities = {
	parseFunction: {
		suffix: '$fn:',

		parse: (data: any): any => {
			return typeof data === 'function' && data.name !== 'SimpleAnimation'
				? Utilities.parseFunction.suffix + data.toString()
				: data
		},

		unparse: (data: any): any => {
			return typeof data === 'string' && data.indexOf(Utilities.parseFunction.suffix) === 0
				? eval(data.substr(Utilities.parseFunction.suffix.length))
				: data
		},
	},

	cancelablePromise: <T>(promise: Promise<T>): ICancelablePromise<T> => {
		let resolved = false
		let canceled = false

		const wrappedPromise = new Promise<T>((resolve, reject) => {
			promise
				.then(val => {
					resolved = true
					canceled ? reject('canceled') : resolve(val)
				})
				.catch(error => {
					resolved = true
					canceled ? reject('canceled') : reject(error)
				})
		})

		return {
			promise: wrappedPromise,
			resolved: () => resolved,
			canceled: () => canceled,
			cancel: () => {
				canceled = true
			},
		}
	},

	isDef: (object: any): boolean => typeof object !== 'undefined' && object !== null,

	now: (): number => getTimestamp(),

	// aOr: (...args: Array<any>): any => {
	// 	for (let i = 0; i < args.length; i++) if (Utilities.isDef(args[i])) return args[i]
	// },

	toDegrees: (radians: number): number => (radians * 180) / Math.PI,
	toRadians: (degrees: number): number => (degrees * Math.PI) / 180,

	// perf: (name: string, callback: any, log: boolean = false): number => {
	// 	const t1 = now()
	// 	callback()
	// 	const t2 = now()
	// 	log && console.log('perf ' + name + ': ' + (t2 - t1))
	// 	return t2 - t1
	// }

	toArray: (t: number | Array<number>): Array<number> => (Array.isArray(t) ? t : [t, t]),

	/**
	 * Return number between {min} and {max}
	 *
	 * @param {number} min
	 * @param {number} max
	 * @param {number} value
	 * @returns {number}
	 */
	clamp: (min: number, max: number, value: number): number => (value <= min ? min : value >= max ? max : value),

	/**
	 * Map number between {refMin} e {refMin} from {min} and  {max}
	 *
	 * @example
	 * ```javascript
	 * relativeClamp(0.5, 0, 1, 100, 200) // 150
	 * ```
	 *
	 * @param {number} value
	 * @param {number} refMin
	 * @param {number} refMax
	 * @param {number} toMin
	 * @param {number} toMax
	 * @returns {number}
	 */
	relativeClamp: (value: number, refMin: number, refMax: number, toMin: number, toMax: number) =>
		Utilities.clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin),
}

export default Utilities
