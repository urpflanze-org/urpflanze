import ShapeLoop from '../ShapeLoop';
import { ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces';
/**
 * Rose shape
 *
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends ShapeLoop {
    /**
     * Creates an instance of Rose.
     *
     * @param {RoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings = {}) {
        var _a, _b, _c;
        settings.type = 'Rose';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['n', 'd', 'sideLength']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : ShapePrimitiveAdaptMode.Scale;
        super(settings, true);
        this.props.n = (_b = settings.n) !== null && _b !== void 0 ? _b : 1;
        this.props.d = (_c = settings.d) !== null && _c !== void 0 ? _c : 2;
        this.loop = {
            start: 0,
            end: (prop_arguments) => Rose.getFinalAngleFromK(this.getProp('n', prop_arguments), this.getProp('d', prop_arguments)),
            inc: (prop_arguments) => {
                const n = this.getProp('n', prop_arguments);
                const d = this.getProp('d', prop_arguments);
                const sides = Math.pow(this.sideLength[0] * this.sideLength[1], 0.45);
                const k = d < n ? n / d : 1.5;
                return ShapeLoop.PI2 / (sides * k);
            },
            vertex: (angle, prop_arguments) => {
                const k = this.getProp('n', prop_arguments) / this.getProp('d', prop_arguments);
                const f = Math.cos(k * angle);
                return [f * Math.cos(angle), f * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof RoseProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Rose
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof RoseProps | RoseSettings)} key
     * @param {*} [value]
     * @memberof Rose
     */
    setProp(key, value) {
        super.setProp(key, value);
    }
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    static getFinalAngleFromK(n, d) {
        if (n == d)
            return ShapeLoop.PI2;
        const k = n / d;
        const p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    }
}
export default Rose;
//# sourceMappingURL=Rose.js.map