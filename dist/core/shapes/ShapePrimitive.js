import ShapeBase from "./ShapeBase";
import { EShapePrimitiveAdaptMode, IShapeBounding, IShapePrimitiveProps, IShapePrimitiveSettings, } from "../types/shape-base";
import { toVec2 } from "../math/gl-matrix-extensions";
/**
 * @category Core.Abstract
 */
class ShapePrimitive extends ShapeBase {
    constructor(settings = {}) {
        var _a, _b;
        super(settings);
        this.single_bounding = Object.assign({}, ShapePrimitive.EMPTY_BOUNDING);
        const sideLength = typeof settings.sideLength === 'number'
            ? [settings.sideLength, settings.sideLength]
            : Array.isArray(settings.sideLength)
                ? settings.sideLength
                : [50, 50];
        this.sideLength = sideLength;
        this.props.sideLength = settings.sideLength;
        this.props.fillColor = settings.fillColor;
        this.props.lineWidth = settings.lineWidth;
        this.props.strokeColor = settings.strokeColor;
        this.adaptMode = (_a = settings.adaptMode) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.None;
        this.bCloseShape = (_b = settings.bCloseShape) !== null && _b !== void 0 ? _b : true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic() {
        return typeof this.props.sideLength !== 'function' && super.isStatic();
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
        const sideLength = toVec2(this.getProp('sideLength', prop_arguments, [50, 50]));
        if (this.sideLength[0] !== sideLength[0] && this.sideLength[1] !== sideLength[1]) {
            this.sideLength = sideLength;
            return true;
        }
        return false;
    }
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    getBounding(bDirectSceneChild) {
        return bDirectSceneChild ? this.single_bounding : this.bounding;
    }
    /**
     * Add this to indexed_buffer
     *
     * @protected
     * @param {number} frame_length
     * @param {IRepetition} repetition
     * @memberof ShapePrimitive
     */
    addIndex(frame_length, repetition) {
        const indexed_buffer = this.indexed_buffer;
        indexed_buffer.push({
            shape: this,
            frame_length,
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
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = Object.assign({}, ShapePrimitive.EMPTY_BOUNDING);
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
        bounding.x = minX;
        bounding.y = minY;
        bounding.width = maxX - minX;
        bounding.height = maxY - minY;
        bounding.cx = bounding.x - bounding.width / 2;
        bounding.cy = bounding.y - bounding.height / 2;
        return bounding;
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
    static adaptBuffer(input, mode, rect) {
        if (mode === EShapePrimitiveAdaptMode.None)
            return Float32Array.from(input);
        const output = new Float32Array(input.length);
        if (!rect) {
            rect = ShapePrimitive.getBounding(input);
        }
        let scale = rect.width >= 2 ||
            rect.height >= 2 ||
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
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.js.map