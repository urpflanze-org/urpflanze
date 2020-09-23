export type TEasing =
	| 'linear'
	| 'quadraticIn'
	| 'quadraticOut'
	| 'quadraticInOut'
	| 'cubicIn'
	| 'cubicOut'
	| 'cubicInOut'
	| 'quarticIn'
	| 'quarticOut'
	| 'quarticInOut'
	| 'quinticIn'
	| 'quinticOut'
	| 'quinticInOut'
	| 'sinusoidalIn'
	| 'sinusoidalOut'
	| 'sinusoidalInOut'
	| 'exponentialIn'
	| 'exponentialOut'
	| 'exponentialInOut'
	| 'circularIn'
	| 'circularOut'
	| 'circularInOut'

const Easings = {
	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} durate duration
	 * @returns {number}
	 */
	linear: (time: number, start: number, end: number, durate: number): number => (end * time) / durate + start,

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duratte duration
	 * @returns {number}
	 */
	quadraticIn: (time: number, start: number, end: number, duratte: number): number => {
		time /= duratte
		return end * time * time + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} durate duration
	 * @returns {number}
	 */
	quadraticOut: (time: number, start: number, end: number, durate: number): number => {
		time /= durate
		return -end * time * (time - 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} durate duration
	 * @returns {number}
	 */
	quadraticInOut: (time: number, start: number, end: number, durate: number): number => {
		time /= durate / 2
		if (time < 1) return (end / 2) * time * time + start
		time--
		return (-end / 2) * (time * (time - 2) - 1) + start
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	cubicIn: (t: number, b: number, c: number, d: number): number => {
		t /= d
		return c * t * t * t + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	cubicOut: (t: number, b: number, c: number, d: number): number => {
		t /= d
		t--
		return c * (t * t * t + 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	cubicInOut: (t: number, b: number, c: number, d: number): number => {
		t /= d / 2
		if (t < 1) return (c / 2) * t * t * t + b
		t -= 2
		return (c / 2) * (t * t * t + 2) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quarticIn: (t: number, b: number, c: number, d: number): number => {
		t /= d
		return c * t * t * t * t + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quarticOut: (t: number, b: number, c: number, d: number): number => {
		t /= d
		t--
		return -c * (t * t * t * t - 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quarticInOut: (t: number, b: number, c: number, d: number): number => {
		t /= d / 2
		if (t < 1) return (c / 2) * t * t * t * t + b
		t -= 2
		return (-c / 2) * (t * t * t * t - 2) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quinticIn: (t: number, b: number, c: number, d: number): number => {
		t /= d
		return c * t * t * t * t * t + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quinticOut: (t: number, b: number, c: number, d: number): number => {
		t /= d
		t--
		return c * (t * t * t * t * t + 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	quinticInOut: (t: number, b: number, c: number, d: number): number => {
		t /= d / 2
		if (t < 1) return (c / 2) * t * t * t * t * t + b
		t -= 2
		return (c / 2) * (t * t * t * t * t + 2) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	sinusoidalIn: (t: number, b: number, c: number, d: number): number => {
		return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	sinusoidalOut: (t: number, b: number, c: number, d: number): number => {
		return c * Math.sin((t / d) * (Math.PI / 2)) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	sinusoidalInOut: (t: number, b: number, c: number, d: number): number => {
		return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	exponentialIn: (t: number, b: number, c: number, d: number): number => {
		return c * Math.pow(2, 10 * (t / d - 1)) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	exponentialOut: (t: number, b: number, c: number, d: number): number => {
		return c * (-Math.pow(2, (-10 * t) / d) + 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	exponentialInOut: (t: number, b: number, c: number, d: number): number => {
		t /= d / 2
		if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
		t--
		return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	circularIn: (t: number, b: number, c: number, d: number): number => {
		t /= d
		return -c * (Math.sqrt(1 - t * t) - 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	circularOut: (t: number, b: number, c: number, d: number): number => {
		t /= d
		t--
		return c * Math.sqrt(1 - t * t) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @returns {number}
	 */
	circularInOut: (t: number, b: number, c: number, d: number): number => {
		t /= d / 2
		if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
		t -= 2
		return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticIn: function (t: number, b: number, c: number, d: number, a: number, p: number) {
		if (t == 0) {
			return b
		}
		if ((t /= d) == 1) {
			return b + c
		}
		if (!p) {
			p = d * 0.3
		}

		if (!a || a < Math.abs(c)) {
			a = c
			var s = p / 4
		} else {
			var s = (p / (2 * Math.PI)) * Math.asin(c / a)
		}

		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticOut: function (t: number, b: number, c: number, d: number, a: number, p: number) {
		if (t == 0) {
			return b
		}
		if ((t /= d) == 1) {
			return b + c
		}
		if (!p) {
			p = d * 0.3
		}

		if (!a || a < Math.abs(c)) {
			a = c
			var s = p / 4
		} else {
			var s = (p / (2 * Math.PI)) * Math.asin(c / a)
		}

		return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticBoth: function (t: number, b: number, c: number, d: number, a: number, p: number) {
		if (t == 0) {
			return b
		}

		if ((t /= d / 2) == 2) {
			return b + c
		}

		if (!p) {
			p = d * (0.3 * 1.5)
		}

		if (!a || a < Math.abs(c)) {
			a = c
			var s = p / 4
		} else {
			var s = (p / (2 * Math.PI)) * Math.asin(c / a)
		}

		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backIn: function (t: number, b: number, c: number, d: number, s: number) {
		if (typeof s == 'undefined') {
			s = 1.70158
		}
		return c * (t /= d) * t * ((s + 1) * t - s) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backOut: function (t: number, b: number, c: number, d: number, s: number) {
		if (typeof s == 'undefined') {
			s = 1.70158
		}
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backBoth: function (t: number, b: number, c: number, d: number, s: number) {
		if (typeof s == 'undefined') {
			s = 1.70158
		}

		if ((t /= d / 2) < 1) {
			return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
		}
		return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @return {number}
	 */
	bounceIn: function (t: number, b: number, c: number, d: number) {
		return c - Easings.bounceOut(d - t, 0, c, d) + b
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @return {number}
	 */
	bounceOut: function (t: number, b: number, c: number, d: number) {
		if ((t /= d) < 1 / 2.75) {
			return c * (7.5625 * t * t) + b
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
		}
		return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
	},

	/**
	 *
	 *
	 * @param {number} time
	 * @param {number} start
	 * @param {number} end
	 * @param {number} durate
	 * @returns
	 */
	bounceBoth: function (time: number, start: number, end: number, durate: number) {
		if (time < durate / 2) {
			return Easings.bounceIn(time * 2, 0, end, durate) * 0.5 + start
		}
		return Easings.bounceOut(time * 2 - durate, 0, end, durate) * 0.5 + end * 0.5 + start
	},
}

export default Easings
