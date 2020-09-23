import ColorManager from '@pups/core/build/Models/Color/ColorManager';
import Easings, { TEasing } from "./Easings";
const toArray = (t) => (Array.isArray(t) ? t : [t, t]);
const composeSimpleAnimation = (simpleAnimation) => {
    if (typeof simpleAnimation.from !== 'string' && typeof simpleAnimation.to !== 'string') {
        const from = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to)
            ? toArray(simpleAnimation.from)
            : simpleAnimation.from;
        const to = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to)
            ? toArray(simpleAnimation.to)
            : simpleAnimation.to;
        const vCallback = Array.isArray(simpleAnimation.from) || Array.isArray(simpleAnimation.to)
            ? (current_index, v) => {
                const a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to : from);
                const b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from : to);
                return simpleAnimation.type_value === 'int'
                    ? [Math.round(a[0] + v * (b[0] - a[0])), Math.round(a[1] + v * (b[1] - a[1]))]
                    : [a[0] + v * (b[0] - a[0]), a[1] + v * (b[1] - a[1])];
            }
            : (current_index, v) => {
                const a = (simpleAnimation.invertOdd && current_index % 2 == 1 ? to : from);
                const b = (simpleAnimation.invertOdd && current_index % 2 == 1 ? from : to);
                return simpleAnimation.type_value === 'int' ? Math.round(a + v * (b - a)) : a + v * (b - a);
            };
        return _composeSimpleAnimation(simpleAnimation, (props, v) => vCallback(props.repetition.current_index, v));
    }
    else {
        const start_color = new ColorManager(simpleAnimation.from);
        const end_color = new ColorManager(simpleAnimation.to);
        const vCallback = simpleAnimation.colorTransitionMode == 'hue' ? interpolateColorHSL : interpolateColorRGB;
        return _composeSimpleAnimation(simpleAnimation, (props, v) => {
            const from = simpleAnimation.invertOdd && props.repetition.current_index % 2 == 1 ? end_color : start_color;
            const to = simpleAnimation.invertOdd && props.repetition.current_index % 2 == 1 ? start_color : end_color;
            return vCallback(from, to, v);
        });
    }
};
const _composeSimpleAnimation = (animation, value) => {
    let { durate, type, mode, mode_function, delay } = animation;
    if (type === 'static') {
        if (delay && delay > 0)
            return props => value(props, props.time <= delay
                ? 0
                : props.time - delay >= durate
                    ? 1
                    : Easings[mode_function](props.time - delay, 0, 1, durate));
        else
            return props => value(props, props.time <= durate ? Easings[mode_function](props.time, 0, 1 - 0, durate) : 1);
    }
    else {
        if (type === 'loop') {
            if (mode == 'sinusoidal') {
                return props => {
                    const frequency = ((props.time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[mode_function](frequency) * 0.5);
                };
            }
            else {
                return props => {
                    const d2 = durate / 2;
                    const t = props.time % durate;
                    return value(props, t <= d2
                        ? Easings[mode_function](t, 0, 1, d2)
                        : Easings[mode_function](d2 - (t - d2), 0, 1, d2));
                };
            }
        }
        else {
            if (mode == 'sinusoidal') {
                return props => {
                    let time = props.time % (durate + delay);
                    time = time <= delay ? 0 : time - delay;
                    const frequency = ((time || 0) * 2 * Math.PI) / durate;
                    return value(props, 0.5 + Math[mode_function](frequency) * 0.5);
                };
            }
            else {
                if (delay && delay > 0)
                    return props => {
                        const time = props.time % (durate + delay);
                        return value(props, time <= delay
                            ? 0
                            : time - delay >= durate
                                ? 1
                                : Easings[mode_function](time - delay, 0, 1, durate));
                    };
                else
                    return props => {
                        const time = props.time % durate;
                        return value(props, time <= durate ? Easings[mode_function](time, 0, 1 - 0, durate) : 1);
                    };
            }
        }
    }
};
const interpolateColorRGB = (start, end, v) => {
    const aAlpha = start.getAlpha();
    const bAlpha = end.getAlpha();
    const s = start.getRgb();
    const e = end.getRgb();
    const r = s.r + v * (e.r - s.r);
    const g = s.g + v * (e.g - s.g);
    const b = s.b + v * (e.b - s.b);
    const alpha = aAlpha + v * (bAlpha - aAlpha);
    return `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha})`;
};
const interpolateColorHSL = (start, end, v) => {
    const aAlpha = start.getAlpha();
    const bAlpha = end.getAlpha();
    const s = start.getHsl();
    const e = end.getHsl();
    const _h = s.h + v * (e.h - s.h);
    const _s = s.s + v * (e.s - s.s);
    const _l = s.l + v * (e.l - s.l);
    const alpha = aAlpha + v * (bAlpha - aAlpha);
    return `hsla(${Math.floor(_h * 360)},${Math.floor(_s * 100)}%,${Math.floor(_l * 100)}%,${alpha <= 0 ? 0 : alpha >= 1 ? 1 : alpha})`;
};
export default composeSimpleAnimation;
//# sourceMappingURL=Simple.js.map