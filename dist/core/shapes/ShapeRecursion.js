import SceneChild from "../SceneChild";
import { Repetition, RepetitionType, ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing, } from "../types/ShapeBase";
import Context from "../Context";
class ShapeRecursion extends SceneChild {
    constructor(settings) {
        super(settings);
        this.bStatic = true;
        this.generate_id = -1;
        this.shape = settings.shape;
        this.recursions = settings.recursions;
    }
    isStatic() {
        throw new Error('Method not implemented.');
    }
    isStaticIndexed() {
        throw new Error('Method not implemented.');
    }
    setProp(key, value, bClearIndexed) {
        throw new Error('Method not implemented.');
    }
    generate(generate_id, bDirectSceneChild, parent_prop_arguments) {
        if (!this.scene || (this.buffer && (this.bStatic || generate_id === this.generate_id)))
            return;
        this.generate_id = generate_id;
        const origins = this.shape.getBuffer();
        if (typeof origins === 'undefined')
            return;
        const origin_buffer_length = origins.length;
        const vertex_count = origin_buffer_length / 2;
        const recursions = this.recursions;
        const buffer_length = origin_buffer_length * Math.pow(vertex_count, recursions);
        this.buffer = new Float32Array(buffer_length);
        console.log('buffer_length', buffer_length, origin_buffer_length, recursions);
        for (let r = 1; r <= recursions; r++) {
            for (let i = 0, len = Math.pow(vertex_count, r); i < len; i++) {
                for (let j = 0; j < origin_buffer_length; j += 2) { }
            }
        }
        if (bDirectSceneChild && !this.indexed_buffer)
            this.index((this.indexed_buffer = []));
    }
    stream(callback) {
        if (this.scene && this.buffer && this.indexed_buffer) {
            for (let i = 0, j = 0, len = this.indexed_buffer.length; i < len; i++) {
                const current_indexing = this.indexed_buffer[i];
                const prop_arguments = {
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    context: Context,
                    time: 0,
                    parent: current_indexing.parent,
                    data: current_indexing.shape.data,
                };
                const fillColor = current_indexing.shape.getProp('fillColor', prop_arguments);
                const lineWidth = current_indexing.shape.getProp('lineWidth', prop_arguments, fillColor ? undefined : 1);
                const strokeColor = current_indexing.shape.getProp('strokeColor', prop_arguments, fillColor ? undefined : this.scene.mainColor);
                const streamArguments = {
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    buffer: this.buffer,
                    buffer_length: current_indexing.buffer_length,
                    current_buffer_index: j,
                    current_shape_index: i,
                    total_shapes: len,
                    lineWidth,
                    strokeColor,
                    fillColor,
                };
                callback(streamArguments);
                j += current_indexing.buffer_length;
            }
        }
    }
    getBuffer() {
        return this.buffer;
    }
    getIndexedBuffer() {
        return this.indexed_buffer;
    }
    getBufferLength(prop_arguments) {
        var _a;
        return ((_a = this.buffer) === null || _a === void 0 ? void 0 : _a.length) || 0;
    }
    clearBuffer(bClearIndexed, bPropagateToParents) {
        this.buffer = undefined;
        if (bClearIndexed)
            this.indexed_buffer = undefined;
    }
    index(buffer, parent) {
        const origins = this.shape.getBuffer();
        if (typeof origins === 'undefined')
            return;
        const origin_buffer_length = origins.length;
        const vertex_count = origin_buffer_length / 2;
        const recursions = this.recursions;
        const len = Math.pow(vertex_count, recursions) + vertex_count * (recursions - 1);
        console.log('len', len, vertex_count, recursions);
        for (let i = 0; i < len; i++) {
            const repetition = {
                current_index: i + 1,
                current_offset: (i + 1) / vertex_count,
                current_angle: 0,
                count: vertex_count,
                count_col: vertex_count,
                count_row: 1,
                current_col: i + 1,
                current_col_offset: (i + 1) / vertex_count,
                current_row: 1,
                current_row_offset: 1,
                type: RepetitionType.Ring,
            };
            buffer[i] = {
                shape: this.shape,
                parent,
                buffer_length: origin_buffer_length,
                repetition,
            };
        }
    }
}
export default ShapeRecursion;
//# sourceMappingURL=ShapeRecursion.js.map