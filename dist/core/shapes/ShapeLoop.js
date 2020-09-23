import { ShapeBasePropArguments, ShapeLoopGenerator, LoopMeta, Repetition, RepetitionType } from "../types/ShapeBase";
import { ShapeLoopProps, ShapeLoopSettings, ShapePrimitiveProps, ShapePrimitiveAdaptMode, } from "../interfaces/shapes/Interfaces";
import ShapePrimitive from "./ShapePrimitive";
import ShapeBase from "./ShapeBase";
import Vec2 from "../math/Vec2";
import Context from "../Context";
class ShapeLoop extends ShapePrimitive {
    constructor(settings = {}, bPreventGeneration = false) {
        settings.type = settings.type || 'ShapeLoop';
        super(settings);
        this.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat('bAdaptBuffer');
        this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            this.loop = {
                start: 0,
                end: ShapeLoop.PI2,
                inc: ShapeLoop.PI2 / 30,
                vertex: () => Vec2.ZERO,
            };
            this.bStaticLoop = this.isStaticLoop();
            this.bStatic = this.isStatic();
            this.bStaticIndexed = this.isStaticIndexed();
        }
    }
    isStaticLoop() {
        if (this.shapeLoopPropsDependencies.indexOf('vertexCallback') >= 0 && typeof this.vertexCallback === 'function')
            return false;
        if (this.shapeLoopPropsDependencies.indexOf('prop_arguments') >= 0)
            return false;
        for (let i = 0, len = this.shapeLoopPropsDependencies.length; i < len; i++)
            if (typeof this.props[this.shapeLoopPropsDependencies[i]] === 'function')
                return false;
        return true;
    }
    isStatic() {
        return this.bStaticLoop && super.isStatic();
    }
    isStaticIndexed() {
        return this.bStaticLoop && super.isStaticIndexed();
    }
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.loop_buffer = undefined;
        }
    }
    setProp(key, value) {
        let bClearIndexed = false;
        key = typeof key === 'string' ? { [key]: value } : key;
        for (let i = this.shapeLoopPropsDependencies.length - 1; i >= 0; i--) {
            if (this.shapeLoopPropsDependencies[i] in key) {
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in key) {
            key.loop = Object.assign(Object.assign({}, this.props.loop), key.loop);
            bClearIndexed = true;
        }
        super.setProp(key, value, bClearIndexed);
    }
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    getBufferLength(prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        if (this.bStaticLoop && this.loop_buffer && this.loop_buffer.length > 0)
            return this.loop_buffer.length * this.getRepetitionCount();
        const { repetition } = this.getLoop(prop_arguments);
        return this.getRepetitionCount() * repetition * 2;
    }
    generateBuffer(generate_id, prop_arguments) {
        this.bindSideLength(prop_arguments);
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(prop_arguments);
        if (typeof this.loop_buffer === 'undefined')
            this.loop_buffer = this.generateLoopBuffer(prop_arguments);
        return this.loop_buffer;
    }
    generateLoopBuffer(prop_arguments) {
        const { start, end, inc, repetition } = this.getLoop(prop_arguments);
        const getVertex = (this.props.loop && this.props.loop.vertex ? this.props.loop.vertex : this.loop.vertex);
        const shape_loop = {
            current_index: 1,
            current_offset: 0,
            current_angle: 0,
            current_col: 1,
            current_row: 1,
            current_col_offset: 0,
            current_row_offset: 0,
            type: RepetitionType.Loop,
            count: repetition,
            count_col: 1,
            count_row: 1,
        };
        const vertex_length = shape_loop.count;
        prop_arguments.shape_loop = shape_loop;
        const buffer = new Float32Array(vertex_length * 2);
        for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
            const angle = start + inc * i;
            shape_loop.current_angle = angle >= end ? end : angle;
            shape_loop.current_index = i + 1;
            shape_loop.current_offset = shape_loop.current_index / shape_loop.count;
            const vertex = Float32Array.from(getVertex.call(Context, shape_loop.current_angle, prop_arguments));
            this.vertexCallback && this.vertexCallback.call(Context, vertex, prop_arguments, i, vertex_length);
            buffer[j] = vertex[0];
            buffer[j + 1] = vertex[1];
        }
        return this.bAdaptBuffer != ShapePrimitiveAdaptMode.None
            ? ShapePrimitive.adaptBuffer(buffer, this.bAdaptBuffer)
            : buffer;
    }
    getLoop(prop_arguments = ShapeBase.EMPTY_PROP_ARGUMENTS) {
        var _a, _b, _c, _d, _e, _f;
        prop_arguments.time = this.scene ? this.scene.current_time : 1;
        let start = (_b = (_a = this.props.loop) === null || _a === void 0 ? void 0 : _a.start) !== null && _b !== void 0 ? _b : this.loop.start;
        let end = (_d = (_c = this.props.loop) === null || _c === void 0 ? void 0 : _c.end) !== null && _d !== void 0 ? _d : this.loop.end;
        let inc = (_f = (_e = this.props.loop) === null || _e === void 0 ? void 0 : _e.inc) !== null && _f !== void 0 ? _f : this.loop.inc;
        start = (typeof start === 'function' ? start(prop_arguments) : start);
        end = (typeof end === 'function' ? end(prop_arguments) : end);
        inc = (typeof inc === 'function' ? inc(prop_arguments) : inc);
        const shape_loop_repetition = Math.ceil((end - start) / inc);
        return { start, end, inc, repetition: shape_loop_repetition < 0 ? 0 : shape_loop_repetition };
    }
    setShape(loop) {
        this.setProp('loop', loop);
    }
}
ShapeLoop.PI2 = Math.PI * 2;
ShapeLoop.PId2 = Math.PI / 2;
ShapeLoop.EMPTY_PROP_ARGUMENTS = {
    time: 1,
    context: Context,
    repetition: ShapeBase.getEmptyRepetition(),
    shape_loop: {
        type: RepetitionType.Loop,
        current_index: 0,
        current_offset: 0,
        current_angle: 0,
        current_row: 0,
        current_col: 0,
        current_col_offset: 0,
        current_row_offset: 0,
        count: 0,
        count_col: 0,
        count_row: 0,
    },
};
export default ShapeLoop;
//# sourceMappingURL=ShapeLoop.js.map