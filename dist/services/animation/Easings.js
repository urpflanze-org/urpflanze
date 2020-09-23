const Easings = {
    linear: (t, b, c, d) => (c * t) / d + b,
    quadraticIn: (t, b, c, d) => {
        t /= d;
        return c * t * t + b;
    },
    quadraticOut: (t, b, c, d) => {
        t /= d;
        return -c * t * (t - 2) + b;
    },
    quadraticInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    cubicIn: (t, b, c, d) => {
        t /= d;
        return c * t * t * t + b;
    },
    cubicOut: (t, b, c, d) => {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    },
    cubicInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    },
    quarticIn: (t, b, c, d) => {
        t /= d;
        return c * t * t * t * t + b;
    },
    quarticOut: (t, b, c, d) => {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    },
    quarticInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t * t + b;
        t -= 2;
        return (-c / 2) * (t * t * t * t - 2) + b;
    },
    quinticIn: (t, b, c, d) => {
        t /= d;
        return c * t * t * t * t * t + b;
    },
    quinticOut: (t, b, c, d) => {
        t /= d;
        t--;
        return c * (t * t * t * t * t + 1) + b;
    },
    quinticInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t * t * t + 2) + b;
    },
    sinusoidalIn: (t, b, c, d) => {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    },
    sinusoidalOut: (t, b, c, d) => {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    },
    sinusoidalInOut: (t, b, c, d) => {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    },
    exponentialIn: (t, b, c, d) => {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    exponentialOut: (t, b, c, d) => {
        return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    },
    exponentialInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
    },
    circularIn: (t, b, c, d) => {
        t /= d;
        return -c * (Math.sqrt(1 - t * t) - 1) + b;
    },
    circularOut: (t, b, c, d) => {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t * t) + b;
    },
    circularInOut: (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
    },
    elasticIn: function (t, b, c, d, a, p) {
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    },
    elasticOut: function (t, b, c, d, a, p) {
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    },
    elasticBoth: function (t, b, c, d, a, p) {
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else {
            var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
    },
    backIn: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    backOut: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    backBoth: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    bounceIn: function (t, b, c, d) {
        return c - Easings.bounceOut(d - t, 0, c, d) + b;
    },
    bounceOut: function (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    },
    bounceBoth: function (t, b, c, d) {
        if (t < d / 2) {
            return Easings.bounceIn(t * 2, 0, c, d) * 0.5 + b;
        }
        return Easings.bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
};
export default Easings;
//# sourceMappingURL=Easings.js.map