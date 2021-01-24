/**
 * Easing functions
 *
 * @category Services.Animation
 */
const Easings = {
	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	linear: (time: number, start: number, end: number, duration: number): number => (end * time) / duration + start,

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
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quadraticOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		return -end * time * (time - 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quadraticInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (end / 2) * time * time + start
		time--
		return (-end / 2) * (time * (time - 2) - 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	cubicIn: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		return end * time * time * time + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	cubicOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		time--
		return end * (time * time * time + 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	cubicInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (end / 2) * time * time * time + start
		time -= 2
		return (end / 2) * (time * time * time + 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quarticIn: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		return end * time * time * time * time + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quarticOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		time--
		return -end * (time * time * time * time - 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quarticInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (end / 2) * time * time * time * time + start
		time -= 2
		return (-end / 2) * (time * time * time * time - 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quinticIn: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		return end * time * time * time * time * time + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quinticOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		time--
		return end * (time * time * time * time * time + 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	quinticInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (end / 2) * time * time * time * time * time + start
		time -= 2
		return (end / 2) * (time * time * time * time * time + 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	sinusoidalIn: (time: number, start: number, end: number, duration: number): number => {
		return -end * Math.cos((time / duration) * (Math.PI / 2)) + end + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	sinusoidalOut: (time: number, start: number, end: number, duration: number): number => {
		return end * Math.sin((time / duration) * (Math.PI / 2)) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	sinusoidalInOut: (time: number, start: number, end: number, duration: number): number => {
		return (-end / 2) * (Math.cos((Math.PI * time) / duration) - 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	exponentialIn: (time: number, start: number, end: number, duration: number): number => {
		return end * Math.pow(2, 10 * (time / duration - 1)) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	exponentialOut: (time: number, start: number, end: number, duration: number): number => {
		return end * (-Math.pow(2, (-10 * time) / duration) + 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	exponentialInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (end / 2) * Math.pow(2, 10 * (time - 1)) + start
		time--
		return (end / 2) * (-Math.pow(2, -10 * time) + 2) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	circularIn: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		return -end * (Math.sqrt(1 - time * time) - 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	circularOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration
		time--
		return end * Math.sqrt(1 - time * time) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @returns {number}
	 */
	circularInOut: (time: number, start: number, end: number, duration: number): number => {
		time /= duration / 2
		if (time < 1) return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start
		time -= 2
		return (end / 2) * (Math.sqrt(1 - time * time) + 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticIn: function (time: number, start: number, end: number, duration: number, a?: number, p?: number): number {
		if (time == 0) {
			return start
		}
		if ((time /= duration) == 1) {
			return start + end
		}
		if (!p) {
			p = duration * 0.3
		}

		let s = 0
		if (!a || a < Math.abs(end)) {
			a = end
			s = p / 4
		} else {
			s = (p / (2 * Math.PI)) * Math.asin(end / a)
		}

		return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticOut: function (time: number, start: number, end: number, duration: number, a?: number, p?: number): number {
		if (time == 0) {
			return start
		}
		if ((time /= duration) == 1) {
			return start + end
		}
		if (!p) {
			p = duration * 0.3
		}

		let s = 0
		if (!a || a < Math.abs(end)) {
			a = end
			s = p / 4
		} else {
			s = (p / (2 * Math.PI)) * Math.asin(end / a)
		}

		return a * Math.pow(2, -10 * time) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p) + end + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} a amplitude (optional)
	 * @param {number} p period (optional)
	 * @return {number}
	 */
	elasticInOut: function (time: number, start: number, end: number, duration: number, a?: number, p?: number): number {
		if (time == 0) {
			return start
		}

		if ((time /= duration / 2) == 2) {
			return start + end
		}

		if (!p) {
			p = duration * (0.3 * 1.5)
		}

		let s = 0
		if (!a || a < Math.abs(end)) {
			a = end
			s = p / 4
		} else {
			s = (p / (2 * Math.PI)) * Math.asin(end / a)
		}

		if (time < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p)) + start
		}
		return (
			a * Math.pow(2, -10 * (time -= 1)) * Math.sin(((time * duration - s) * (2 * Math.PI)) / p) * 0.5 + end + start
		)
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backIn: function (time: number, start: number, end: number, duration: number, s?: number): number {
		if (typeof s == 'undefined') {
			s = 1.70158
		}
		return end * (time /= duration) * time * ((s + 1) * time - s) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backOut: function (time: number, start: number, end: number, duration: number, s?: number): number {
		if (typeof s == 'undefined') {
			s = 1.70158
		}
		return end * ((time = time / duration - 1) * time * ((s + 1) * time + s) + 1) + start
	},

	/**
	 * @param {number} time current time
	 * @param {number} start start value
	 * @param {number} end end value
	 * @param {number} duration duration
	 * @param {number} s overshoot (optional)
	 * @return {number}
	 */
	backInOut: function (time: number, start: number, end: number, duration: number, s?: number): number {
		if (typeof s == 'undefined') {
			s = 1.70158
		}

		if ((time /= duration / 2) < 1) {
			return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start
		}
		return (end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) + start
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @return {number}
	 */
	bounceIn: function (time: number, start: number, end: number, duration: number): number {
		return end - Easings.bounceOut(duration - time, 0, end, duration) + start
	},

	/**
	 * @param {number} t current time
	 * @param {number} b start value
	 * @param {number} c end value
	 * @param {number} d duration
	 * @return {number}
	 */
	bounceOut: function (time: number, start: number, end: number, duration: number): number {
		if ((time /= duration) < 1 / 2.75) {
			return end * (7.5625 * time * time) + start
		} else if (time < 2 / 2.75) {
			return end * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + start
		} else if (time < 2.5 / 2.75) {
			return end * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + start
		}
		return end * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + start
	},

	/**
	 *
	 *
	 * @param {number} time
	 * @param {number} start
	 * @param {number} end
	 * @param {number} duration
	 * @returns
	 */
	bounceInOut: function (time: number, start: number, end: number, duration: number): number {
		if (time < duration / 2) {
			return Easings.bounceIn(time * 2, 0, end, duration) * 0.5 + start
		}
		return Easings.bounceOut(time * 2 - duration, 0, end, duration) * 0.5 + end * 0.5 + start
	},
}

export default Easings
