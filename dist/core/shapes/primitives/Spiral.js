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
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
var Spiral = /** @class */ (function (_super) {
    __extends(Spiral, _super);
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    function Spiral(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b, _c, _d;
        var _this = this;
        settings.type = 'Spiral';
        settings.bCloseShape = false;
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.None;
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'twists',
            'twistsStart',
            'spiral',
            'sideLength',
        ]);
        _this = _super.call(this, settings, true) || this;
        _this.props.spiral = (_b = settings.spiral) !== null && _b !== void 0 ? _b : Spiral.types.ARCHIMEDE;
        _this.props.twists = (_c = settings.twists) !== null && _c !== void 0 ? _c : 2;
        _this.props.twistsStart = (_d = settings.twistsStart) !== null && _d !== void 0 ? _d : 0;
        _this.loop = {
            start: function (propArguments) { return ShapeLoop.PI2 * _this.getProp('twistsStart', propArguments); },
            end: function (propArguments) {
                return ShapeLoop.PI2 * (_this.getProp('twistsStart', propArguments) + _this.getProp('twists', propArguments));
            },
            inc: function (propArguments) {
                // const twists = this.getProp('twists', propArguments)
                // const rep = ShapeLoop.PI2 * twists
                // const radius = 2 * Math.sqrt(this.sideLength[0] * this.sideLength[1])
                // return rep / (radius)
                var twists = _this.getProp('twists', propArguments);
                var rep = ShapeLoop.PI2 * twists;
                var radius = 4 + Math.sqrt(_this.sideLength[0] * _this.sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: function (shapeLoopRepetition, propArguments) {
                var r = Spiral.getRFromTSpiralType(_this.getProp('spiral', propArguments), shapeLoopRepetition.angle);
                return [r * Math.cos(shapeLoopRepetition.angle), r * Math.sin(shapeLoopRepetition.angle)];
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
     * @param {keyof ISpiralProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {any} [defaultValue]
     * @returns {*}
     * @memberof Spiral
     */
    Spiral.prototype.getProp = function (key, propArguments, defaultValue) {
        return _super.prototype.getProp.call(this, key, propArguments, defaultValue);
    };
    /**
     * Set single or multiple props
     *
     * @param {(keyof ISpiralProps | ISpiralProps)} key
     * @param {*} [value]
     * @memberof Spiral
     */
    Spiral.prototype.setProp = function (key, value) {
        var _a;
        key = typeof key === 'string' ? (_a = {}, _a[key] = value, _a) : key;
        if (('twists' in key || 'twistsStart' in key) && this.props.loop) {
            this.props.loop.start = undefined;
            this.props.loop.end = undefined;
        }
        _super.prototype.setProp.call(this, key, value);
    };
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @param {number} angle
     * @returns {number}
     * @memberof Spiral
     */
    Spiral.getRFromTSpiralType = function (spiral, angle) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return angle / 10;
            case Spiral.types.HYPERBOLIC:
                return (1 / angle) * 3;
            case Spiral.types.FERMAT:
                return Math.pow(angle, 0.5) / 3;
            case Spiral.types.LITUUS:
                return Math.pow(angle, -0.5);
            case Spiral.types.LOGARITHMIC:
                return Math.pow(Math.E, (angle * 0.2)) / 10;
        }
        return 1;
    };
    /**
     * Spural types
     *
     * @static
     * @type {{ [name in TSpiralType]: TSpiralType }}
     * @memberof Spiral
     */
    Spiral.types = {
        ARCHIMEDE: 'ARCHIMEDE',
        HYPERBOLIC: 'HYPERBOLIC',
        FERMAT: 'FERMAT',
        LITUUS: 'LITUUS',
        LOGARITHMIC: 'LOGARITHMIC',
    };
    return Spiral;
}(ShapeLoop));
export default Spiral;
//# sourceMappingURL=Spiral.js.map