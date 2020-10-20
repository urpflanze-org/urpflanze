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
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
var RegularPolygon = /** @class */ (function (_super) {
    __extends(RegularPolygon, _super);
    function RegularPolygon(settings) {
        if (settings === void 0) { settings = {}; }
        var _a;
        var _this = this;
        settings.type = settings.type || 'RegularPolygon';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideNumber']);
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings, true) || this;
        _this.props.sideNumber = settings.sideNumber;
        _this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: function (prop_arguments) { return ShapeLoop.PI2 / _this.getProp('sideNumber', prop_arguments, 5); },
            vertex: function (shape_loop_repetition) {
                return [Math.cos(shape_loop_repetition.angle), Math.sin(shape_loop_repetition.angle)];
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
     * @param {keyof IRegularPolygonProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof IRegularPolygonProps
     */
    RegularPolygon.prototype.getProp = function (key, prop_arguments, default_value) {
        return _super.prototype.getProp.call(this, key, prop_arguments, default_value);
    };
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRegularPolygonProps | RegularPolygonSettings)} key
     * @param {*} [value]
     * @memberof IRegularPolygonProps
     */
    RegularPolygon.prototype.setProp = function (key, value) {
        _super.prototype.setProp.call(this, key, value);
    };
    return RegularPolygon;
}(ShapeLoop));
export default RegularPolygon;
//# sourceMappingURL=RegularPolygon.js.map