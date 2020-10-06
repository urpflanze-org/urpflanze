import ShapeBase from "./ShapeBase";
import Vec2, { TArray } from "../math/Vec2";
import { EShapePrimitiveAdaptMode, IShapeBounding, IShapePrimitiveProps, IShapePrimitiveSettings, } from "../types/shape-base";
/**
 * @category Core.Abstract
 */
class ShapePrimitive extends ShapeBase {
    constructor(settings = {}) {
        var _a, _b, _c;
        super(settings);
        this.props.sideLength = (_a = settings.sideLength) !== null && _a !== void 0 ? _a : [50, 50];
        this.sideLength = Vec2.create(typeof settings.sideLength === 'number' || Array.isArray(settings.sideLength) ? settings.sideLength : [50, 50]);
        this.props.fillColor = settings.fillColor;
        this.props.lineWidth = settings.lineWidth;
        this.props.strokeColor = settings.strokeColor;
        this.adaptMode = (_b = settings.adaptMode) !== null && _b !== void 0 ? _b : EShapePrimitiveAdaptMode.None;
        this.bCloseShape = (_c = settings.bCloseShape) !== null && _c !== void 0 ? _c : true;
        this.vertexCallback = settings.vertexCallback;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic() {
        return (typeof this.props.sideLength !==
            'function' /* && typeof this.vertexCallback !== 'function' <- set bStatic to false if vertexCallback as dynamic */ &&
            super.isStatic());
    }
    /**
     * Get prop
     *
     * @param {keyof IShapePrimitiveProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    bindSideLength(prop_arguments) {
        this.sideLength = Vec2.create(this.getProp('sideLength', prop_arguments, [50, 50]));
    }
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapePrimitive
     */
    applyVertexTransform(vertex) {
        vertex[0] *= this.sideLength[0];
        vertex[1] *= this.sideLength[1];
    }
    /**
     * Return bCloseShape
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed() {
        return this.bCloseShape;
    }
    /**
     * Set bCloseShape
     *
     * @param {boolean} bCloseShape
     * @memberof ShapePrimitive
     */
    setClosed(bCloseShape) {
        this.bCloseShape = bCloseShape;
    }
    /**
     * Return adaptMode
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    getAdaptMode() {
        return this.adaptMode;
    }
    /**
     * Set adaptMode
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    adapt(adaptMode) {
        this.adaptMode = adaptMode;
        this.clearBuffer(true);
    }
    /**
     *
     *
     * @protected
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    addIndex(buffer, frame_length, current_repetition, parent) {
        const current = {
            shape: this,
            buffer_length: frame_length,
            parent,
            repetition: current_repetition,
        };
        console.log('addiindex', this.name, frame_length);
        buffer.push(current);
    }
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer) {
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            const x = buffer[i];
            const y = buffer[i + 1];
            if (x > maxX)
                maxX = x;
            else if (x < minX)
                minX = x;
            if (y > maxY)
                maxY = y;
            else if (y < minY)
                minY = y;
        }
        return {
            x: minX,
            y: minY,
            cx: (minX + maxX) / 2,
            cy: (minY + maxY) / 2,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
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
    static adaptBuffer(input, mode) {
        if (mode == EShapePrimitiveAdaptMode.None)
            return input;
        const output = new Float32Array(input.length);
        const rect = ShapePrimitive.getBounding(input);
        let scale = rect.width > 2 ||
            rect.height > 2 ||
            (mode >= EShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        let translateX = mode >= EShapePrimitiveAdaptMode.Center ? rect.cx : 0;
        let translateY = mode >= EShapePrimitiveAdaptMode.Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
}
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.js.map