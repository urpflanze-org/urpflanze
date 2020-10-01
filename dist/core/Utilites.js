const Utilities = {
    isDef: (object) => typeof object !== 'undefined' && object !== null,
    now: performance && performance.now ? performance.now : Date.now,
    // aOr: (...args: Array<any>): any => {
    // 	for (let i = 0; i < args.length; i++) if (Utilities.isDef(args[i])) return args[i]
    // },
    toDegrees: (radians) => (radians * 180) / Math.PI,
    toRadians: (degrees) => (degrees * Math.PI) / 180,
    // perf: (name: string, callback: any, log: boolean = false): number => {
    // 	const t1 = now()
    // 	callback()
    // 	const t2 = now()
    // 	log && console.log('perf ' + name + ': ' + (t2 - t1))
    // 	return t2 - t1
    // }
    toArray: (t) => (Array.isArray(t) ? t : [t, t]),
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
    hasKey: (...args) => {
        const props = args.shift();
        const keys = typeof props == 'object' ? Object.keys(props) : [props];
        for (let i = 0, klen = keys.length; i < klen; i++)
            for (let j = 0, alen = args.length; j < alen; j++)
                if (keys[i] == args[j])
                    return true;
        return false;
    },
    /**
     * Return number between {min} and {max}
     *
     * @param {number} min
     * @param {number} max
     * @param {number} value
     * @returns {number}
     */
    clamp: (min, max, value) => (value <= min ? min : value >= max ? max : value),
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
    relativeClamp: (value, refMin, refMax, toMin, toMax) => Utilities.clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin),
};
export default Utilities;
//# sourceMappingURL=Utilites.js.map