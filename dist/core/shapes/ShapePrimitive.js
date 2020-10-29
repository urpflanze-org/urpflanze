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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import ShapeBase from "./ShapeBase";
import { EShapePrimitiveAdaptMode, IShapeBounding, IShapePrimitiveProps, IShapePrimitiveSettings, } from "../types/shape-base";
import { toVec2 } from "../math/gl-matrix-extensions";
import Bounding, { TTempBounding } from "../math/bounding";
/**
 * @category Core.Abstract
 */
var ShapePrimitive = /** @class */ (function (_super) {
    __extends(ShapePrimitive, _super);
    /**
     * Creates an instance of ShapePrimitive.
     *
     * @param {IShapePrimitiveSettings} [settings={}]
     * @memberof ShapePrimitive
     */
    function ShapePrimitive(settings) {
        if (settings === void 0) { settings = {}; }
        var _a, _b;
        var _this = _super.call(this, settings) || this;
        /**
         * Shape bounding
         *
         * @type {IShapeBounding}
         * @memberof ShapePrimitive
         */
        _this.single_bounding = __assign({}, ShapePrimitive.EMPTY_BOUNDING);
        var sideLength = typeof settings.sideLength === 'number'
            ? [settings.sideLength, settings.sideLength]
            : Array.isArray(settings.sideLength)
                ? settings.sideLength
                : [50, 50];
        _this.sideLength = sideLength;
        _this.props.sideLength = settings.sideLength;
        _this.props.fillColor = settings.fillColor;
        _this.props.lineWidth = settings.lineWidth;
        _this.props.strokeColor = settings.strokeColor;
        _this.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.None;
        _this.bCloseShape = (_b = settings.bCloseShape) !== null && _b !== void 0 ? _b : true;
        return _this;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.isStatic = function () {
        return typeof this.props.sideLength !== 'function' && _super.prototype.isStatic.call(this);
    };
    /**
     * Get prop
     *
     * @param {keyof IShapePrimitiveProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.getProp = function (key, prop_arguments, default_value) {
        return _super.prototype.getProp.call(this, key, prop_arguments, default_value);
    };
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.bindSideLength = function (prop_arguments) {
        var sideLength = toVec2(this.getProp('sideLength', prop_arguments, [50, 50]));
        if (this.sideLength[0] !== sideLength[0] && this.sideLength[1] !== sideLength[1]) {
            this.sideLength = sideLength;
            return true;
        }
        return false;
    };
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.getBounding = function (bDirectSceneChild) {
        return bDirectSceneChild ? this.single_bounding : this.bounding;
        // return this.single_bounding
    };
    /**
     * Add this to indexed_buffer
     *
     * @protected
     * @param {number} frame_length
     * @param {IRepetition} repetition
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.addIndex = function (frame_length, repetition) {
        var indexed_buffer = this.indexed_buffer;
        indexed_buffer.push({
            shape: this,
            frame_length: frame_length,
            repetition: {
                type: repetition.type,
                angle: repetition.angle,
                index: repetition.index,
                count: repetition.count,
                offset: repetition.offset,
                row: {
                    index: repetition.row.index,
                    count: repetition.row.count,
                    offset: repetition.row.offset,
                },
                col: {
                    index: repetition.col.index,
                    count: repetition.col.count,
                    offset: repetition.col.offset,
                },
            },
        });
    };
    /**
     * Return bCloseShape
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.isClosed = function () {
        return this.bCloseShape;
    };
    /**
     * Set bCloseShape
     *
     * @param {boolean} bCloseShape
     * @memberof ShapePrimitive
     */
    ShapePrimitive.prototype.setClosed = function (bCloseShape) {
        this.bCloseShape = bCloseShape;
    };
    /**
     * Return adaptMode
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    ShapePrimitive.prototype.getAdaptMode = function () {
        return this.adaptMode;
    };
    /**
     * Set adaptMode
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    ShapePrimitive.prototype.adapt = function (adaptMode) {
        this.adaptMode = adaptMode;
        this.clearBuffer(true);
    };
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.getBounding = function (buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = __assign({}, ShapePrimitive.EMPTY_BOUNDING);
        var tmp_bounding = [undefined, undefined, undefined, undefined];
        for (var i = 0, len = buffer.length; i < len; i += 2) {
            Bounding.add(tmp_bounding, buffer[i], buffer[i + 1]);
        }
        Bounding.bind(bounding, tmp_bounding);
        return bounding;
    };
    /**
     * Return adapted buffer between [-1,-1] and [1,1]
     *
     * @public
     * @static
     * @param {Float32Array} input
     * @param {EShapePrimitiveAdaptMode} mode
     * @returns {Float32Array}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.adaptBuffer = function (input, mode, rect) {
        if (mode === EShapePrimitiveAdaptMode.None)
            return Float32Array.from(input);
        var output = new Float32Array(input.length);
        if (!rect) {
            rect = ShapePrimitive.getBounding(input);
        }
        var scale = rect.width >= 2 ||
            rect.height >= 2 ||
            (mode >= EShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        var translateX = mode >= EShapePrimitiveAdaptMode.Center ? rect.cx : 0;
        var translateY = mode >= EShapePrimitiveAdaptMode.Center ? rect.cy : 0;
        for (var i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    };
    /**
     * Empty buffer bounding
     *
     * @static
     * @type {IShapeBounding}
     * @memberof ShapePrimitive
     */
    ShapePrimitive.EMPTY_BOUNDING = {
        cx: 0,
        cy: 0,
        x: -1,
        y: -1,
        width: 2,
        height: 2,
    };
    return ShapePrimitive;
}(ShapeBase));
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.js.map