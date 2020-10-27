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
import SceneChild from "../SceneChild";
import Scene from "../Scene";
/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Core.Shapes
 */
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     * @memberof Shape
     */
    function Shape(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = settings.type || 'Shape';
        _this = _super.call(this, settings) || this;
        if (settings.shape instanceof SceneChild) {
            _this.shape = settings.shape;
        }
        else {
            console.warn("[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:", settings.shape);
        }
        _this.bStatic = _this.isStatic();
        _this.bStaticIndexed = _this.isStaticIndexed();
        return _this;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    Shape.prototype.isStatic = function () {
        return _super.prototype.isStatic.call(this) && (this.shape ? this.shape.isStatic() : true);
    };
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     * @memberof Shape
     */
    Shape.prototype.isStaticIndexed = function () {
        return _super.prototype.isStaticIndexed.call(this) && (this.shape ? this.shape.isStaticIndexed() : true);
    };
    /**
     * Find shape by id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Shape
     */
    Shape.prototype.find = function (id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        if (this.shape)
            return this.shape.find(id_or_name);
        return null;
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Shape
     */
    Shape.prototype.getBufferLength = function (prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        var child_buffer_length = this.shape ? this.shape.getBufferLength(prop_arguments) : 0;
        return child_buffer_length * this.getRepetitionCount();
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
    Shape.prototype.generateBuffer = function (generate_id, prop_arguments) {
        if (this.shape) {
            this.shape.generate(generate_id, false, prop_arguments);
            // this.bounding = this.shape.getBounding()
            return this.shape.getBuffer() || Shape.EMPTY_BUFFER;
        }
        return Shape.EMPTY_BUFFER;
    };
    Shape.prototype.addIndex = function (frame_length, repetition) {
        if (this.shape) {
            var indexed_buffer = this.indexed_buffer;
            var child_indexed_buffer = this.shape.getIndexedBuffer() || [];
            var parent_1 = {
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
            };
            var buildParent_1 = function (f, parent) {
                return {
                    shape: f.shape,
                    repetition: f.repetition,
                    frame_length: f.frame_length,
                    parent: f.parent ? buildParent_1(f.parent, parent) : parent,
                };
            };
            for (var i = 0, len = child_indexed_buffer.length; i < len; i++) {
                var current_indexed = __assign({}, child_indexed_buffer[i]);
                if (current_indexed.parent) {
                    current_indexed.parent = buildParent_1(current_indexed.parent, parent_1);
                }
                else {
                    current_indexed.parent = parent_1;
                }
                indexed_buffer.push(current_indexed);
            }
        }
    };
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     * @memberof ShapeBase
     */
    Shape.prototype.setShape = function (shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true, true);
        }
        else {
            this.scene && Scene.propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true, true);
        }
    };
    /**
     * Return bounding
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     * @memberof Shape
     */
    Shape.prototype.getBounding = function () {
        if (this.shape) {
            return this.shape.getBounding(false);
        }
        return this.bounding;
    };
    return Shape;
}(ShapeBase));
export default Shape;
//# sourceMappingURL=Shape.js.map