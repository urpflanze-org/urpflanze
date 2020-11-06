var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import ColorManager from '@pups/core/build/Models/Color/ColorManager';
import Easings from "./Easings";
import { toArray } from "../../Utilites";
/**
 * @category Services.Animation
 */
var Simple = {
    loop: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'sinusoidal', modeFunction: 'cos' }, props), { type: 'loop', delay: undefined }));
    },
    uncontrolledLoop: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'easing', modeFunction: 'linear' }, props), { type: 'uncontrolled-loop' }));
    },
    static: function (props) {
        return Simple.compose(__assign(__assign({ mode: 'easing', modeFunction: 'linear' }, props), { type: 'static' }));
    },
    compose: function (simpleAnimation) {
        if (typeof simpleAnimation.from !== 'string' && typeof simpleAnimation.to !== 'string') {
            var bArray = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to);
            var from_1 = bArray ? toArray(simpleAnimation.from) : simpleAnimation.from;
            var to_1 = bArray ? toArray(simpleAnimation.to) : simpleAnimation.to;
            var vCallback_1 = bArray
                ? function (current_index, v) {
                    var a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to_1 : from_1);
                    var b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from_1 : to_1);
                    return simpleAnimation.typeValue === 'int'
                        ? [Math.round(a[0] + v * (b[0] - a[0])), Math.round(a[1] + v * (b[1] - a[1]))]
                        : [a[0] + v * (b[0] - a[0]), a[1] + v * (b[1] - a[1])];
                }
                : function (current_index, v) {
                    var a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to_1 : from_1);
                    var b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from_1 : to_1);
                    return simpleAnimation.typeValue === 'int' ? Math.round(a + v * (b - a)) : a + v * (b - a);
                };
            return createSimpleAnimationCallback(simpleAnimation, function (props, v) {
                return vCallback_1(props.repetition.index, v);
            });
        }
        else {
            var from_2 = new ColorManager(simpleAnimation.from);
            var to_2 = new ColorManager(simpleAnimation.to);
            var vCallback_2 = simpleAnimation.colorTransitionMode == 'hue' ? interpolateColorHSL : interpolateColorRGB;
            return createSimpleAnimationCallback(simpleAnimation, function (props, v) {
                var a = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? to_2 : from_2;
                var b = simpleAnimation.invertOdd && props.repetition.index % 2 == 1 ? from_2 : to_2;
                return vCallback_2(a, b, v);
            });
        }
    },
};
function createSimpleAnimationCallback(animation, value) {
    var _a = animation, durate = _a.durate, type = _a.type, mode = _a.mode, modeFunction = _a.modeFunction, delay = _a.delay;
    if (type === 'static') {
        if (delay && delay > 0)
            return function SimpleAnimation(props) {
                return value(props, props.time <= delay
                    ? 0
                    : props.time - delay >= durate
                        ? 1
                        : Easings[modeFunction](props.time - delay, 0, 1, durate));
            };
        else
            return function SimpleAnimation(props) {
                return value(props, props.time <= durate ? Easings[modeFunction](props.time, 0, 1 - 0, durate) : 1);
            };
    }
    else {
        if (type === 'loop') {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    var frequency = ((props.time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[modeFunction](frequency) * 0.5);
                };
            } /* easing */
            else {
                return function SimpleAnimation(props) {
                    var d2 = durate / 2;
                    var t = props.time % durate;
                    return value(props, t <= d2
                        ? Easings[modeFunction](t, 0, 1, d2)
                        : Easings[modeFunction](d2 - (t - d2), 0, 1, d2));
                };
            }
        } // uncontrolled-loop
        else {
            if (mode == 'sinusoidal') {
                return function SimpleAnimation(props) {
                    var time = props.time % (durate + delay);
                    time = time <= delay ? 0 : time - delay;
                    var frequency = ((time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[modeFunction](frequency) * 0.5);
                };
            }
            else {
                if (delay && delay > 0)
                    return function SimpleAnimation(props) {
                        var time = props.time % (durate + delay);
                        return value(props, time <= delay
                            ? 0
                            : time - delay >= durate
                                ? 1
                                : Easings[modeFunction](time - delay, 0, 1, durate));
                    };
                else
                    return function SimpleAnimation(props) {
                        var time = props.time % durate;
                        return value(props, time <= durate ? Easings[modeFunction](time, 0, 1 - 0, durate) : 1);
                    };
            }
        }
    }
}
function interpolateColorRGB(start, end, v) {
    var aAlpha = start.getAlpha();
    var bAlpha = end.getAlpha();
    var s = start.getRgb();
    var e = end.getRgb();
    var r = s.r + v * (e.r - s.r);
    var g = s.g + v * (e.g - s.g);
    var b = s.b + v * (e.b - s.b);
    var alpha = aAlpha + v * (bAlpha - aAlpha);
    return "rgba(" + Math.floor(r) + "," + Math.floor(g) + "," + Math.floor(b) + "," + (alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha) + ")";
}
function interpolateColorHSL(start, end, v) {
    var aAlpha = start.getAlpha();
    var bAlpha = end.getAlpha();
    var s = start.getHsl();
    var e = end.getHsl();
    var _h = s.h + v * (e.h - s.h);
    var _s = s.s + v * (e.s - s.s);
    var _l = s.l + v * (e.l - s.l);
    var alpha = aAlpha + v * (bAlpha - aAlpha);
    return "hsla(" + Math.floor(_h * 360) + "," + Math.floor(_s * 100) + "%," + Math.floor(_l * 100) + "%," + (alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha) + ")";
}
export default Simple;
//# sourceMappingURL=Simple.js.map