var Easings = {
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    linear: function (time, start, end, durate) { return (end * time) / durate + start; },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} duratte duration
     * @returns {number}
     */
    quadraticIn: function (time, start, end, duratte) {
        time /= duratte;
        return end * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticOut: function (time, start, end, durate) {
        time /= durate;
        return -end * time * (time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quadraticInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time + start;
        time--;
        return (-end / 2) * (time * (time - 2) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicIn: function (time, start, end, durate) {
        time /= durate;
        return end * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicOut: function (time, start, end, durate) {
        time /= durate;
        time--;
        return end * (time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    cubicInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticIn: function (time, start, end, durate) {
        time /= durate;
        return end * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticOut: function (time, start, end, durate) {
        time /= durate;
        time--;
        return -end * (time * time * time * time - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quarticInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time + start;
        time -= 2;
        return (-end / 2) * (time * time * time * time - 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticIn: function (time, start, end, durate) {
        time /= durate;
        return end * time * time * time * time * time + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticOut: function (time, start, end, durate) {
        time /= durate;
        time--;
        return end * (time * time * time * time * time + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    quinticInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time * time * time + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalIn: function (time, start, end, durate) {
        return -end * Math.cos((time / durate) * (Math.PI / 2)) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalOut: function (time, start, end, durate) {
        return end * Math.sin((time / durate) * (Math.PI / 2)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    sinusoidalInOut: function (time, start, end, durate) {
        return (-end / 2) * (Math.cos((Math.PI * time) / durate) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialIn: function (time, start, end, durate) {
        return end * Math.pow(2, 10 * (time / durate - 1)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialOut: function (time, start, end, durate) {
        return end * (-Math.pow(2, (-10 * time) / durate) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    exponentialInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
        time--;
        return (end / 2) * (-Math.pow(2, -10 * time) + 2) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularIn: function (time, start, end, durate) {
        time /= durate;
        return -end * (Math.sqrt(1 - time * time) - 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularOut: function (time, start, end, durate) {
        time /= durate;
        time--;
        return end * Math.sqrt(1 - time * time) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @returns {number}
     */
    circularInOut: function (time, start, end, durate) {
        time /= durate / 2;
        if (time < 1)
            return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start;
        time -= 2;
        return (end / 2) * (Math.sqrt(1 - time * time) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticIn: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate) == 1) {
            return start + end;
        }
        if (!p) {
            p = durate * 0.3;
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticOut: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate) == 1) {
            return start + end;
        }
        if (!p) {
            p = durate * 0.3;
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return a * Math.pow(2, -10 * time) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} a amplitude (optional)
     * @param {number} p period (optional)
     * @return {number}
     */
    elasticBoth: function (time, start, end, durate, a, p) {
        if (time == 0) {
            return start;
        }
        if ((time /= durate / 2) == 2) {
            return start + end;
        }
        if (!p) {
            p = durate * (0.3 * 1.5);
        }
        var s = 0;
        if (!a || a < Math.abs(end)) {
            a = end;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        if (time < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
        }
        return a * Math.pow(2, -10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) * 0.5 + end + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backIn: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * (time /= durate) * time * ((s + 1) * time - s) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backOut: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * ((time = time / durate - 1) * time * ((s + 1) * time + s) + 1) + start;
    },
    /**
     * @param {number} time current time
     * @param {number} start start value
     * @param {number} end end value
     * @param {number} durate duration
     * @param {number} s overshoot (optional)
     * @return {number}
     */
    backBoth: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((time /= durate / 2) < 1) {
            return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start;
        }
        return (end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceIn: function (time, start, end, durate) {
        return end - Easings.bounceOut(durate - time, 0, end, durate) + start;
    },
    /**
     * @param {number} t current time
     * @param {number} b start value
     * @param {number} c end value
     * @param {number} d duration
     * @return {number}
     */
    bounceOut: function (time, start, end, durate) {
        if ((time /= durate) < 1 / 2.75) {
            return end * (7.5625 * time * time) + start;
        }
        else if (time < 2 / 2.75) {
            return end * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + start;
        }
        else if (time < 2.5 / 2.75) {
            return end * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + start;
        }
        return end * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + start;
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
    bounceBoth: function (time, start, end, durate) {
        if (time < durate / 2) {
            return Easings.bounceIn(time * 2, 0, end, durate) * 0.5 + start;
        }
        return Easings.bounceOut(time * 2 - durate, 0, end, durate) * 0.5 + end * 0.5 + start;
    },
};
export default Easings;
//# sourceMappingURL=Easings.js.map