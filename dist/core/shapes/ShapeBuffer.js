import ShapePrimitive from '@core/shapes/ShapePrimitive';
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base';
class ShapeBuffer extends ShapePrimitive {
    constructor(settings = {}) {
        settings.type = settings.type || 'ShapeBuffer';
        settings.bAdaptBuffer = settings.bAdaptBuffer || EShapePrimitiveAdaptMode.Scale;
        super(settings);
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else
            this.shape = Float32Array.from(settings.shape);
        this.shape_buffer =
            this.isAdapted() != EShapePrimitiveAdaptMode.None
                ? ShapePrimitive.adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.shape_buffer =
            this.isAdapted() != EShapePrimitiveAdaptMode.None
                ? ShapePrimitive.adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
    }
    /**
     * Return length of buffer
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength() {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape_buffer.length * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    generateBuffer(generate_id, prop_arguments) {
        this.bindSideLength(prop_arguments);
        if (this.vertexCallback) {
            const buffer_length = this.shape_buffer.length;
            const points_length = buffer_length / 2;
            const buffer = Float32Array.from(this.shape_buffer);
            for (let i = 0, j = 0; i < buffer_length; i += 2, j++) {
                const vertex = [buffer[i], buffer[i + 1]];
                this.vertexCallback(vertex, prop_arguments, j, points_length);
                buffer[i] = vertex[0];
                buffer[i + 1] = vertex[1];
            }
            return buffer;
        }
        return this.shape_buffer;
    }
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape) {
        this.shape = shape;
        this.clearBuffer(true);
    }
    subdivide(level = 1) {
        let subdivided = this.shape;
        if (subdivided)
            for (let i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided, this.bCloseShape);
        subdivided && this.setShape(subdivided);
    }
    static subdivide(shape, bClosed = true) {
        if (shape && shape.length) {
            const shape_len = shape.length;
            const subdivided = new Float32Array(shape_len * 2 - (bClosed ? 0 : 2));
            for (let i = 0; i < shape_len; i += 2) {
                if (i === 0) {
                    subdivided[0] = shape[0];
                    subdivided[1] = shape[1];
                }
                else {
                    const px = shape[i - 2];
                    const py = shape[i - 1];
                    const x = shape[i];
                    const y = shape[i + 1];
                    const nx = (x + px) / 2;
                    const ny = (y + py) / 2;
                    subdivided[(i - 1) * 2] = nx;
                    subdivided[(i - 1) * 2 + 1] = ny;
                    subdivided[i * 2] = x;
                    subdivided[i * 2 + 1] = y;
                }
                if (bClosed) {
                    subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2;
                    subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2;
                }
            }
            return subdivided;
        }
    }
}
export default ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.js.map