const isDef = (object) => typeof object !== 'undefined' && object !== null;
const now = () => {
    return performance && performance.now ? performance.now() : Date.now();
};
const aOr = (...args) => {
    for (let i = 0; i < args.length; i++)
        if (isDef(args[i]))
            return args[i];
};
const toDegrees = (radians) => (radians * 180) / Math.PI;
const toRadians = (degrees) => (degrees * Math.PI) / 180;
const perf = (name, callback, log = false) => {
    const t1 = now();
    callback();
    const t2 = now();
    log && console.log('perf ' + name + ': ' + (t2 - t1));
    return t2 - t1;
};
const toArray = (t) => (Array.isArray(t) ? t : [t, t]);
const hasKey = (...args) => {
    const props = args.shift();
    const keys = typeof props == 'object' ? Object.keys(props) : [props];
    for (let i = 0, klen = keys.length; i < klen; i++)
        for (let j = 0, alen = args.length; j < alen; j++)
            if (keys[i] == args[j])
                return true;
    return false;
};
const clamp = (min, max, value) => (value <= min ? min : value >= max ? max : value);
const relativeClamp = (value, refMin, refMax, toMin, toMax) => clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin);
export { isDef, now, aOr, toDegrees, toRadians, toArray, hasKey, perf, clamp, relativeClamp };
//# sourceMappingURL=Utilites.js.map