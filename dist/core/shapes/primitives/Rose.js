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
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
var Rose = /** @class */ (function (_super) {
    __extends(Rose, _super);
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    function Rose(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b, _c;
        var _this = this;
        settings.type = 'Rose';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd', 'sideLength']);
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.Scale;
        _this = _super.call(this, settings, true) || this;
        _this.props.n = (_b = settings.n) !== null && _b !== void 0 ? _b : 1;
        _this.props.d = (_c = settings.d) !== null && _c !== void 0 ? _c : 2;
        _this.loop = {
            start: 0,
            end: function (propArguments) {
                return Rose.getFinalAngleFromK(_this.getProp('n', propArguments), _this.getProp('d', propArguments));
            },
            inc: function (propArguments) {
                var n = _this.getProp('n', propArguments);
                var d = _this.getProp('d', propArguments);
                var sides = Math.pow(_this.sideLength[0] * _this.sideLength[1], 0.45);
                var k = d < n ? n / d : 1.5;
                return ShapeLoop.PI2 / (sides * k);
            },
            vertex: function (shapeLoopRepetition, propArguments) {
                var k = _this.getProp('n', propArguments) / _this.getProp('d', propArguments);
                var f = Math.cos(k * shapeLoopRepetition.angle);
                return [f * Math.cos(shapeLoopRepetition.angle), f * Math.sin(shapeLoopRepetition.angle)];
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
     * @param {keyof RoseProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof Rose
     */
    Rose.prototype.getProp = function (key, propArguments, defaultValue) {
        return _super.prototype.getProp.call(this, key, propArguments, defaultValue);
    };
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRoseProps | IRoseSettings)} key
     * @param {*} [value]
     * @memberof Rose
     */
    Rose.prototype.setProp = function (key, value) {
        _super.prototype.setProp.call(this, key, value);
    };
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    Rose.getFinalAngleFromK = function (n, d) {
        if (n == d)
            return ShapeLoop.PI2;
        var k = n / d;
        var p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    };
    return Rose;
}(ShapeLoop));
export default Rose;
//# sourceMappingURL=Rose.js.map