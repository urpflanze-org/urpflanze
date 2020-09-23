import ShapeBase from "./ShapeBase";
import SceneChild from "../SceneChild";
import Scene from "../Scene";
class Shape extends ShapeBase {
    constructor(settings = {}) {
        settings.type = settings.type || 'Shape';
        super(settings);
        if (settings.shape instanceof SceneChild) {
            this.shape = settings.shape;
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    isStatic() {
        return super.isStatic() && (this.shape ? this.shape.isStatic() : true);
    }
    isStaticIndexed() {
        return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true);
    }
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        if (this.shape)
            return this.shape.find(id_or_name);
        return null;
    }
    getBufferLength(prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        const child_buffer_length = this.shape ? this.shape.getBufferLength(prop_arguments) : 0;
        return child_buffer_length * this.getRepetitionCount();
    }
    generateBuffer(generate_id, prop_arguments) {
        if (this.shape) {
            this.shape.generate(generate_id, false, prop_arguments);
            return this.shape.getBuffer() || Shape.EMPTY_BUFFER;
        }
        return Shape.EMPTY_BUFFER;
    }
    setShape(shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true);
        }
        else {
            this.scene && Scene.propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true);
        }
    }
    addIndex(buffer, frame_length, current_repetition, parent) {
        if (this.shape) {
            const current = {
                shape: this,
                buffer_length: frame_length,
                parent,
                repetition: current_repetition,
            };
            this.shape.index(buffer, current);
        }
    }
}
export default Shape;
//# sourceMappingURL=Shape.js.map