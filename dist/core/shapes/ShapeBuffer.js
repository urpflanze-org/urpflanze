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
import ShapePrimitive from "./ShapePrimitive";
import { EShapePrimitiveAdaptMode } from "../types/shape-base";
/**
 * @category Core.Shapes
 */
var ShapeBuffer = /** @class */ (function (_super) {
    __extends(ShapeBuffer, _super);
    /**
     * Creates an instance of ShapeBuffer.
     *
     * @param {IShapeBufferSettings} [settings={}]
     * @memberof ShapeBuffer
     */
    function ShapeBuffer(settings) {
        if (settings === void 0) { settings = {}; }
        var _a;
        var _this = this;
        settings.type = settings.type || 'ShapeBuffer';
        settings.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.Scale;
        _this = _super.call(this, settings) || this;
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            _this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else
            _this.shape = Float32Array.from(settings.shape);
        _this.bindBuffer();
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    ShapeBuffer.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        _super.prototype.clearBuffer.call(this, bClearIndexed, bPropagateToParents);
        this.bindBuffer();
        // this.shape_buffer = ShapeBuffer.buffer2Dto3D(this.shape_buffer)
    };
    /**
     * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
     *
     * @private
     * @memberof ShapeBuffer
     */
    ShapeBuffer.prototype.bindBuffer = function () {
        var shape_buffer = this.adaptMode !== EShapePrimitiveAdaptMode.None
            ? ShapePrimitive.adaptBuffer(this.shape, this.adaptMode)
            : Float32Array.from(this.shape);
        var minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (var i = 0, len = shape_buffer.length; i < len; i += 2) {
            shape_buffer[i] *= this.sideLength[0];
            shape_buffer[i + 1] *= this.sideLength[1];
            if (shape_buffer[i] >= maxX)
                maxX = shape_buffer[i];
            else if (shape_buffer[i] <= minX)
                minX = shape_buffer[i];
            if (shape_buffer[i + 1] >= maxY)
                maxY = shape_buffer[i + 1];
            else if (shape_buffer[i + 1] <= minY)
                minY = shape_buffer[i + 1];
        }
        this.single_bounding.x = minX;
        this.single_bounding.y = minY;
        this.single_bounding.width = maxX - minX;
        this.single_bounding.height = maxY - minY;
        this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
        this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
        this.shape_buffer = shape_buffer;
    };
    /**
     * Return length of buffer
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    ShapeBuffer.prototype.getBufferLength = function () {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape_buffer.length * this.getRepetitionCount();
    };
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    ShapeBuffer.prototype.generateBuffer = function (generate_id, prop_arguments) {
        if (this.bindSideLength(prop_arguments)) {
            this.bindBuffer();
        }
        return this.shape_buffer;
    };
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     * @memberof ShapeBase
     */
    ShapeBuffer.prototype.setShape = function (shape) {
        this.shape = shape;
        this.clearBuffer(true);
    };
    /**
     * Subdivide buffer n times
     *
     * @param {number} [level=1]
     * @memberof ShapeBuffer
     */
    ShapeBuffer.prototype.subdivide = function (level) {
        if (level === void 0) { level = 1; }
        var subdivided = this.shape;
        if (subdivided && subdivided.length > 0) {
            for (var i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided, this.bCloseShape);
            this.setShape(subdivided);
        }
    };
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     * @memberof ShapeBuffer
     */
    ShapeBuffer.subdivide = function (shape, bClosed) {
        if (bClosed === void 0) { bClosed = true; }
        var shape_len = shape.length;
        var subdivided = new Float32Array(shape_len * 2 - (bClosed ? 0 : 2));
        for (var i = 0; i < shape_len; i += 2) {
            if (i === 0) {
                subdivided[0] = shape[0];
                subdivided[1] = shape[1];
            }
            else {
                var px = shape[i - 2];
                var py = shape[i - 1];
                var x = shape[i];
                var y = shape[i + 1];
                var nx = (x + px) / 2;
                var ny = (y + py) / 2;
                subdivided[(i - 1) * 2] = nx;
                subdivided[(i - 1) * 2 + 1] = ny;
                subdivided[i * 2] = x;
                subdivided[i * 2 + 1] = y;
            }
        }
        if (bClosed) {
            subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2;
            subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2;
        }
        return subdivided;
    };
    return ShapeBuffer;
}(ShapePrimitive));
export default ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.js.map