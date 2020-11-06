/**
 * Easing functions
 *
 * @category Services.Animation
 */
declare const Easings: {
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    linear: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duratte duration
     * @returns {number}
     */
    quadraticIn: (time: number, start: number, end: number, duratte: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularInOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticIn: (time: number, start: number, end: number, durate: number, a: number, p: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticOut: (time: number, start: number, end: number, durate: number, a: number, p: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticBoth: (time: number, start: number, end: number, durate: number, a: number, p: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backIn: (time: number, start: number, end: number, durate: number, s: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backOut: (time: number, start: number, end: number, durate: number, s: number) => number;
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backBoth: (time: number, start: number, end: number, durate: number, s: number) => number;
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceIn: (time: number, start: number, end: number, durate: number) => number;
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceOut: (time: number, start: number, end: number, durate: number) => number;
    /**
     *
     *
     * @param {number} time
     * @param {number} start
     * @param {number} end
     * @param {number} durate
     * @returns
     */
    bounceBoth: (time: number, start: number, end: number, durate: number) => number;
};
export default Easings;
//# sourceMappingURL=Easings.d.ts.map