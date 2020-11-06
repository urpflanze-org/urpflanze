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
 * @class Rect
 * @extends {ShapeBuffer}
 */
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    function Rect(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Rect';
        settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1];
        settings.adaptMode = EShapePrimitiveAdaptMode.None;
        _this = _super.call(this, settings) || this;
        return _this;
    }
    return Rect;
}(ShapeBuffer));
export default Rect;
//# sourceMappingURL=Rect.js.map