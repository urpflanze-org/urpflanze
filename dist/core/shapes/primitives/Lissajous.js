import ShapeLoop from '@core/shapes/ShapeLoop';
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base';
/**
 * Lissajous shape
 *
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop {
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings = {}) {
        var _a;
        settings.type = 'Lissajous';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'wx',
            'wy',
            'wz',
            'sideLength',
        ]);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.Scale;
        super(settings, true);
        this.props.wx = settings.wx || 1;
        this.props.wy = settings.wy || 2;
        this.props.wz = settings.wz || 0;
        this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: prop_arguments => {
                const wx = this.getProp('wx', prop_arguments);
                const wy = this.getProp('wy', prop_arguments);
                const ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                return (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * ratio;
            },
            vertex: (angle, prop_arguments) => {
                const wx = this.getProp('wx', prop_arguments);
                const wy = this.getProp('wy', prop_arguments);
                const wz = this.getProp('wz', prop_arguments, 0);
                return wx == wy ? [Math.cos(angle + wz), Math.sin(angle)] : [Math.cos(wx * angle + wz), Math.sin(wy * angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Get property value
     *
     * @param {keyof ILissajousProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Lissajous
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof ILissajousProps | ILissajousProps)} key
     * @param {*} [value]
     * @memberof Lissajous
     */
    setProp(key, value) {
        super.setProp(key, value);
    }
}
export default Lissajous;
//# sourceMappingURL=Lissajous.js.map