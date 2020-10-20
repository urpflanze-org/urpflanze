var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import ShapeLoop from "../ShapeLoop";
import { EShapePrimitiveAdaptMode } from "../../types/shape-base";
/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
var Lissajous = /** @class */ (function (_super) {
    __extends(Lissajous, _super);
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    function Lissajous(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Lissajous';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'wx',
            'wy',
            'wz',
            'sideLength',
        ]);
        settings.adaptMode = EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings, true) || this;
        _this.props.wx = settings.wx || 1;
        _this.props.wy = settings.wy || 2;
        _this.props.wz = settings.wz || 0;
        _this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: function (prop_arguments) {
                var wx = _this.getProp('wx', prop_arguments);
                var wy = _this.getProp('wy', prop_arguments);
                var ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                return (1 / Math.pow(_this.sideLength[0] * _this.sideLength[1], 0.25)) * ratio;
            },
            vertex: function (shape_loop_repetition, prop_arguments) {
                var wx = _this.getProp('wx', prop_arguments);
                var wy = _this.getProp('wy', prop_arguments);
                var wz = _this.getProp('wz', prop_arguments, 0);
                return wx == wy
                    ? [Math.cos(shape_loop_repetition.angle + wz), Math.sin(shape_loop_repetition.angle)]
                    : [Math.cos(wx * shape_loop_repetition.angle + wz), Math.sin(wy * shape_loop_repetition.angle)];
            },
        };
        _this.bStaticLoop = _this.isStaticLoop();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
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
    Lissajous.prototype.getProp = function (key, prop_arguments, default_value) {
        return _super.prototype.getProp.call(this, key, prop_arguments, default_value);
    };
    /**
     * Set single or multiple props
     *
     * @param {(keyof ILissajousProps | ILissajousProps)} key
     * @param {*} [value]
     * @memberof Lissajous
     */
    Lissajous.prototype.setProp = function (key, value) {
        _super.prototype.setProp.call(this, key, value);
    };
    return Lissajous;
}(ShapeLoop));
export default Lissajous;
//# sourceMappingURL=Lissajous.js.map