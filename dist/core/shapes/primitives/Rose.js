import { aOr } from "../../Utilites";
import ShapeLoop from "../ShapeLoop";
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
class Rose extends ShapeLoop {
    constructor(settings = {}) {
        var _a;
        settings.type = 'Rose';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['n', 'd', 'sideLength']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : ShapePrimitiveAdaptMode.Scale;
        super(settings, true);
        this.props.n = aOr(settings.n, 1);
        this.props.d = aOr(settings.d, 2);
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
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    setProp(key, value) {
        super.setProp(key, value);
    }
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