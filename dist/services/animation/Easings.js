const Easings = {
    linear: (time, start, end, durate) => (end * time) / durate + start,
    quadraticIn: (time, start, end, duratte) => {
        time /= duratte;
        return end * time * time + start;
    },
    quadraticOut: (time, start, end, durate) => {
        time /= durate;
        return -end * time * (time - 2) + start;
    },
    quadraticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time + start;
        time--;
        return (-end / 2) * (time * (time - 2) - 1) + start;
    },
    cubicIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time + start;
    },
    cubicOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * (time * time * time + 1) + start;
    },
    cubicInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time + 2) + start;
    },
    quarticIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time * time + start;
    },
    quarticOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return -end * (time * time * time * time - 1) + start;
    },
    quarticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time + start;
        time -= 2;
        return (-end / 2) * (time * time * time * time - 2) + start;
    },
    quinticIn: (time, start, end, durate) => {
        time /= durate;
        return end * time * time * time * time * time + start;
    },
    quinticOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * (time * time * time * time * time + 1) + start;
    },
    quinticInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * time * time * time * time * time + start;
        time -= 2;
        return (end / 2) * (time * time * time * time * time + 2) + start;
    },
    sinusoidalIn: (time, start, end, durate) => {
        return -end * Math.cos((time / durate) * (Math.PI / 2)) + end + start;
    },
    sinusoidalOut: (time, start, end, durate) => {
        return end * Math.sin((time / durate) * (Math.PI / 2)) + start;
    },
    sinusoidalInOut: (time, start, end, durate) => {
        return (-end / 2) * (Math.cos((Math.PI * time) / durate) - 1) + start;
    },
    exponentialIn: (time, start, end, durate) => {
        return end * Math.pow(2, 10 * (time / durate - 1)) + start;
    },
    exponentialOut: (time, start, end, durate) => {
        return end * (-Math.pow(2, (-10 * time) / durate) + 1) + start;
    },
    exponentialInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (end / 2) * Math.pow(2, 10 * (time - 1)) + start;
        time--;
        return (end / 2) * (-Math.pow(2, -10 * time) + 2) + start;
    },
    circularIn: (time, start, end, durate) => {
        time /= durate;
        return -end * (Math.sqrt(1 - time * time) - 1) + start;
    },
    circularOut: (time, start, end, durate) => {
        time /= durate;
        time--;
        return end * Math.sqrt(1 - time * time) + start;
    },
    circularInOut: (time, start, end, durate) => {
        time /= durate / 2;
        if (time < 1)
            return (-end / 2) * (Math.sqrt(1 - time * time) - 1) + start;
        time -= 2;
        return (end / 2) * (Math.sqrt(1 - time * time) + 1) + start;
    },
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
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return -(a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
    },
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
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        return a * Math.pow(2, -10 * time) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) + end + start;
    },
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
        if (!a || a < Math.abs(end)) {
            a = end;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(end / a);
        }
        if (time < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p)) + start;
        }
        return a * Math.pow(2, -10 * (time -= 1)) * Math.sin(((time * durate - s) * (2 * Math.PI)) / p) * 0.5 + end + start;
    },
    backIn: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * (time /= durate) * time * ((s + 1) * time - s) + start;
    },
    backOut: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return end * ((time = time / durate - 1) * time * ((s + 1) * time + s) + 1) + start;
    },
    backBoth: function (time, start, end, durate, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((time /= durate / 2) < 1) {
            return (end / 2) * (time * time * (((s *= 1.525) + 1) * time - s)) + start;
        }
        return (end / 2) * ((time -= 2) * time * (((s *= 1.525) + 1) * time + s) + 2) + start;
    },
    bounceIn: function (time, start, end, durate) {
        return end - Easings.bounceOut(durate - time, 0, end, durate) + start;
    },
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
    bounceBoth: function (time, start, end, durate) {
        if (time < durate / 2) {
            return Easings.bounceIn(time * 2, 0, end, durate) * 0.5 + start;
        }
        return Easings.bounceOut(time * 2 - durate, 0, end, durate) * 0.5 + end * 0.5 + start;
    },
};
export default Easings;
//# sourceMappingURL=Easings.js.map