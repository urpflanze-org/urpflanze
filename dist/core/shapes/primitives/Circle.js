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
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * Creates an instance of Circle.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    function Circle(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Circle';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideLength']);
        settings.adaptMode = EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings) || this;
        _this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: function () { return (1 / Math.pow(_this.sideLength[0] * _this.sideLength[1], 0.25)) * ShapeLoop.PId2; },
            vertex: function (shape_loop_repetition) { return [Math.cos(shape_loop_repetition.angle), Math.sin(shape_loop_repetition.angle)]; },
        };
        return _this;
    }
    return Circle;
}(ShapeLoop));
export default Circle;
//# sourceMappingURL=Circle.js.map