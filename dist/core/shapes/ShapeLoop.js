import ShapePrimitive from "./ShapePrimitive";
import ShapeBase from "./ShapeBase";
import { EShapePrimitiveAdaptMode, IShapePrimitiveProps } from "../types/shape-base";
/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop extends ShapePrimitive {
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     * @memberof ShapeLoop
     */
    constructor(settings = {}, bPreventGeneration = false) {
        settings.type = settings.type || 'ShapeLoop';
        super(settings);
        this.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat('bAdaptBuffer');
        this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            this.loop = {
                start: 0,
                end: ShapeLoop.PI2,
                inc: ShapeLoop.PI2 / 10,
                vertex: () => [0, 0],
            };
            this.bStaticLoop = this.isStaticLoop();
            this.bStatic = this.isStatic();
            this.bStaticIndexed = this.isStaticIndexed();
        }
    }
    /**
     * Check if loop_buffer is static
     *
     * @returns {boolean}
     * @memberof ShapeLoop
     */
    isStaticLoop() {
        // if (typeof this.vertexCallback === 'function') return false
        if (this.shapeLoopPropsDependencies.includes('vertexCallback') && typeof this.vertexCallback === 'function')
            return false;
        if (this.shapeLoopPropsDependencies.includes('prop_arguments'))
            return false;
        for (let i = 0, len = this.shapeLoopPropsDependencies.length; i < len; i++)
            if (typeof this.props[this.shapeLoopPropsDependencies[i]] === 'function')
                return false;
        return true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStatic() {
        return this.bStaticLoop && super.isStatic();
    }
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed() {
        // let start = this.props.loop?.start ?? this.loop.start
        // let end = this.props.loop?.end ?? this.loop.end
        // let inc = this.props.loop?.inc ?? this.loop.inc
        // return (
        // 	typeof start !== 'function' && typeof end !== 'function' && typeof inc !== 'function' && super.isStaticIndexed()
        // )
        return this.bStaticLoop && super.isStaticIndexed();
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
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.loop_buffer = undefined;
        }
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof IShapeLoopProps | IShapeLoopProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeLoop
     */
    setProp(key, value) {
        let bClearIndexed = false;
        key = typeof key === 'string' ? { [key]: value } : key;
        for (let i = this.shapeLoopPropsDependencies.length - 1; i >= 0; i--) {
            if (this.shapeLoopPropsDependencies[i] in key) {
                // this.props.loop = undefined
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
    /**
     * Get prop
     *
     * @param {keyof IShapeLoopProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeLoop
     */
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(prop_arguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        if (this.bStaticLoop && this.loop_buffer && this.loop_buffer.length > 0)
            return this.loop_buffer.length * this.getRepetitionCount();
        const { repetition } = this.getLoop(prop_arguments);
        return this.getRepetitionCount() * repetition * 2; // vec3
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
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(prop_arguments);
        else if (typeof this.loop_buffer === 'undefined')
            this.loop_buffer = this.generateLoopBuffer(prop_arguments);
        return this.loop_buffer;
    }
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    generateLoopBuffer(prop_arguments) {
        const { start, end, inc, repetition } = this.getLoop(prop_arguments);
        const getVertex = (this.props.loop && this.props.loop.vertex
            ? this.props.loop.vertex
            : this.loop.vertex);
        const shape_loop = {
            index: 0,
            offset: 0,
            angle: 0,
            count: repetition,
        };
        const vertex_length = shape_loop.count;
        const buffer_length = vertex_length * 2;
        const loop_buffer = new Float32Array(buffer_length);
        const bNoAdapt = this.adaptMode === EShapePrimitiveAdaptMode.None;
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
            const angle = start + inc * i;
            shape_loop.angle = angle >= end ? end : angle;
            shape_loop.index = i + 1;
            shape_loop.offset = shape_loop.index / shape_loop.count;
            const vertex = Float32Array.from(getVertex(shape_loop, prop_arguments));
            loop_buffer[j] = vertex[0];
            loop_buffer[j + 1] = vertex[1];
            if (bNoAdapt) {
                loop_buffer[j] *= this.sideLength[0];
                loop_buffer[j + 1] *= this.sideLength[1];
            }
            if (loop_buffer[j] >= maxX)
                maxX = loop_buffer[j];
            else if (loop_buffer[j] <= minX)
                minX = loop_buffer[j];
            if (loop_buffer[j + 1] >= maxY)
                maxY = loop_buffer[j + 1];
            else if (loop_buffer[j + 1] <= minY)
                minY = loop_buffer[j + 1];
        }
        this.single_bounding.x = minX;
        this.single_bounding.y = minY;
        this.single_bounding.width = maxX - minX;
        this.single_bounding.height = maxY - minY;
        this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
        this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
        if (!bNoAdapt) {
            /**
             * Adapt and apply side length
             */
            const buffer = ShapePrimitive.adaptBuffer(loop_buffer, this.adaptMode);
            minX = minY = Number.MAX_VALUE;
            maxX = maxY = Number.MIN_VALUE;
            for (let i = 0; i < buffer_length; i += 2) {
                buffer[i] = buffer[i] * this.sideLength[0];
                buffer[i + 1] = buffer[i + 1] * this.sideLength[1];
                if (buffer[i] >= maxX)
                    maxX = buffer[i];
                else if (buffer[i] <= minX)
                    minX = buffer[i];
                if (buffer[i + 1] >= maxY)
                    maxY = buffer[i + 1];
                else if (buffer[i + 1] <= minY)
                    minY = buffer[i + 1];
            }
            this.single_bounding.x = minX;
            this.single_bounding.y = minY;
            this.single_bounding.width = maxX - minX;
            this.single_bounding.height = maxY - minY;
            this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2;
            this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2;
            return buffer;
        }
        return loop_buffer;
    }
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    getLoop(prop_arguments = ShapeBase.EMPTY_PROP_ARGUMENTS) {
        var _a, _b, _c, _d, _e, _f, _g;
        prop_arguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.current_time) || 0;
        let start = (_c = (_b = this.props.loop) === null || _b === void 0 ? void 0 : _b.start) !== null && _c !== void 0 ? _c : this.loop.start;
        let end = (_e = (_d = this.props.loop) === null || _d === void 0 ? void 0 : _d.end) !== null && _e !== void 0 ? _e : this.loop.end;
        let inc = (_g = (_f = this.props.loop) === null || _f === void 0 ? void 0 : _f.inc) !== null && _g !== void 0 ? _g : this.loop.inc;
        start = (typeof start === 'function' ? start(prop_arguments) : start);
        end = (typeof end === 'function' ? end(prop_arguments) : end);
        inc = (typeof inc === 'function' ? inc(prop_arguments) : inc);
        const shape_loop_repetition = Math.ceil((end - start) / inc);
        return { start, end, inc, repetition: shape_loop_repetition < 0 ? 0 : shape_loop_repetition };
    }
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    setShape(loop) {
        this.setProp('loop', loop);
    }
}
ShapeLoop.PI2 = Math.PI * 2;
ShapeLoop.PId2 = Math.PI / 2;
export default ShapeLoop;
//# sourceMappingURL=ShapeLoop.js.map