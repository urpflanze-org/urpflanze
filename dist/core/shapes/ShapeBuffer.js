import ShapePrimitive from "./ShapePrimitive";
import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../interfaces/shapes/Interfaces";
import Context from "../Context";
class ShapeBuffer extends ShapePrimitive {
    constructor(settings = {}) {
        settings.type = settings.type || 'ShapeBuffer';
        settings.bAdaptBuffer = settings.bAdaptBuffer || ShapePrimitiveAdaptMode.Scale;
        super(settings);
        this.shape = settings.shape instanceof Float32Array ? settings.shape : ShapeBuffer.EMPTY_BUFFER;
        this.shape_buffer =
            this.isAdapted() != ShapePrimitiveAdaptMode.None
                ? ShapePrimitive.adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.shape_buffer =
            this.isAdapted() != ShapePrimitiveAdaptMode.None
                ? ShapePrimitive.adaptBuffer(this.shape, this.isAdapted())
                : this.shape;
    }
    getBufferLength() {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape_buffer.length * this.getRepetitionCount();
    }
    generateBuffer(generate_id, prop_arguments) {
        this.bindSideLength(prop_arguments);
        if (this.vertexCallback) {
            const buffer_length = this.shape_buffer.length;
            const points_length = buffer_length / 2;
            const buffer = Float32Array.from(this.shape_buffer);
            for (let i = 0, j = 0; i < buffer_length; i += 2, j++) {
                const vertex = [buffer[i], buffer[i + 1]];
                this.vertexCallback.call(Context, vertex, prop_arguments, j, points_length);
                buffer[i] = vertex[0];
                buffer[i + 1] = vertex[1];
            }
            return buffer;
        }
        return this.shape_buffer;
    }
    setShape(shape) {
        this.shape = shape;
        this.clearBuffer(true);
    }
    subdivide(level = 1) {
        let subdivided = this.shape;
        if (subdivided)
            for (let i = 0; i < level; i++)
                subdivided = ShapeBuffer.subdivide(subdivided);
        subdivided && this.setShape(subdivided);
    }
    static subdivide(shape) {
        if (shape && shape.length) {
            const shape_len = shape.length;
            const subdivided = new Float32Array(shape_len * 2);
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
                subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2;
                subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2;
            }
            return subdivided;
        }
    }
}
export default ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.js.map