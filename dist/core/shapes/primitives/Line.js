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
import { EShapePrimitiveAdaptMode } from "../../types/shape-base";
import ShapeBuffer from "../ShapeBuffer";
/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    /**
     * Creates an instance of Line.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    function Line(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.adaptMode = EShapePrimitiveAdaptMode.None;
        settings.bCloseShape = false;
        _this = _super.call(this, settings) || this;
        return _this;
    }
    return Line;
}(ShapeBuffer));
export default Line;
//# sourceMappingURL=Line.js.map