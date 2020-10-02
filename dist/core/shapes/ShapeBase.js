import SceneChild from '@core/SceneChild';
import Vec2 from '@core/math/Vec2';
import Context from '@core/Context';
import { ERepetitionType, } from '@core/types/scene-child';
/**
 * Shape Base
 *
 * @abstract
 * @class ShapeBase
 * @extends {SceneChild}
 */
class ShapeBase extends SceneChild {
    /**
     * Random function
     *
     * @private
     * @type {(seedrandom.prng | undefined)}
     * @memberof ShapeBase
     */
    // private rand_prng: seedrandom.prng | undefined
    /**
     * Creates an instance of ShapeBase.
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof ShapeBase
     */
    constructor(settings = {}) {
        super(settings);
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @protected
         * @type {number}
         * @memberof ShapeBase
         */
        this.generate_id = -1;
        this.props = {
            distance: settings.distance,
            repetitions: settings.repetitions,
            rotateX: settings.rotateX,
            rotateY: settings.rotateY,
            rotateZ: settings.rotateZ,
            skewX: settings.skewX,
            skewY: settings.skewY,
            squeezeX: settings.squeezeX,
            squeezeY: settings.squeezeY,
            displace: settings.displace,
            translate: settings.translate,
            scale: settings.scale,
            rotationOrigin: settings.rotationOrigin,
        };
        this.bUseParent = !!settings.bUseParent;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStatic() {
        const props = this.props;
        return (typeof props.distance !== 'function' &&
            typeof props.repetitions !== 'function' &&
            typeof props.rotateX !== 'function' &&
            typeof props.rotateY !== 'function' &&
            typeof props.rotateZ !== 'function' &&
            typeof props.displace !== 'function' &&
            typeof props.skewX !== 'function' &&
            typeof props.skewY !== 'function' &&
            typeof props.squeezeX !== 'function' &&
            typeof props.squeezeY !== 'function' &&
            typeof props.translate !== 'function' &&
            typeof props.scale !== 'function' &&
            typeof props.rotationOrigin !== 'function');
    }
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed() {
        return typeof this.props.repetitions !== 'function';
    }
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeBase
     */
    getProp(key, prop_arguments, default_value) {
        var _a;
        let attribute = this.props[key];
        if (typeof attribute == 'function') {
            prop_arguments = prop_arguments || ShapeBase.EMPTY_PROP_ARGUMENTS;
            if (typeof prop_arguments.shape === 'undefined')
                prop_arguments.shape = this;
            if (typeof prop_arguments.context === 'undefined')
                prop_arguments.context = Context;
            prop_arguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.current_time) || 0;
            attribute = attribute(prop_arguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? default_value : attribute;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeBase
     */
    setProp(key, value, bClearIndexed = false) {
        if (typeof key == 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        }
        this.clearBuffer(bClearIndexed);
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     * @memberof ShapeBase
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.buffer = undefined;
        if (bClearIndexed)
            this.indexed_buffer = undefined;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    }
    /**
     * Get random number
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    // public rand(): number
    // {
    //     if (!this.rand_prng)
    //     {
    //         this.rand_prng = seedrandom(this.props.randomSeed || this.id + '')
    //     }
    //     return this.rand_prng()
    // }
    /**
     * Generate shape buffer
     *
     * @param {number} generate_id generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof ShapeBase
     */
    generate(generate_id, bDirectSceneChild = false, parent_prop_arguments) {
        var _a, _b, _c;
        if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent))))
            return;
        this.generate_id = generate_id;
        const repetition = ShapeBase.getEmptyRepetition();
        // const bRandomRepetitions: boolean = typeof this.props.randomSeed !== 'undefined'
        const repetitions = this.getProp('repetitions', { parent: parent_prop_arguments, repetition, time: 1, context: Context }, 1);
        // const repetition_type = bRandomRepetitions ? RepetitionType.Random : Array.isArray(repetitions) ? RepetitionType.Matrix : RepetitionType.Ring
        const repetition_type = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring;
        const repetition_count = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
        const repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        repetition.count = repetition_count;
        repetition.count_col = repetition_col_count;
        repetition.count_row = repetition_row_count;
        repetition.type = repetition_type;
        const prop_arguments = {
            repetition,
            context: Context,
            time: ((_c = this.scene) === null || _c === void 0 ? void 0 : _c.current_time) || 0,
            shape: this,
            data: this.data,
            parent: parent_prop_arguments,
        };
        this.single_repetition_buffer_length = new Uint16Array(repetition_count);
        let total_buffer_length = 0;
        // this.rand_prng = bRandomRepetitions ? seedrandom(this.props.randomSeed as string) : undefined
        const buffers = [];
        let current_index = 0;
        const center_matrix = Vec2.create((repetition_col_count - 1) / 2, (repetition_row_count - 1) / 2);
        for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
            for (let current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                repetition.current_index = current_index + 1;
                repetition.current_offset = repetition.current_index / repetition.count;
                repetition.current_angle =
                    repetition_type === ERepetitionType.Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0;
                repetition.current_col = current_col_repetition + 1;
                repetition.current_col_offset = repetition.current_col / repetition.count_col;
                repetition.current_row = current_row_repetition + 1;
                repetition.current_row_offset = repetition.current_row / repetition.count_row;
                const distance = Vec2.create(this.getProp('distance', prop_arguments, Vec2.ZERO));
                const displace = this.getProp('displace', prop_arguments, 0);
                const scale = Vec2.create(this.getProp('scale', prop_arguments, Vec2.ONE));
                const translate = Vec2.create(this.getProp('translate', prop_arguments, Vec2.ZERO));
                const skewX = this.getProp('skewX', prop_arguments, 0);
                const skewY = this.getProp('skewY', prop_arguments, 0);
                const squeezeX = this.getProp('squeezeX', prop_arguments, 0);
                const squeezeY = this.getProp('squeezeY', prop_arguments, 0);
                const rotateX = this.getProp('rotateX', prop_arguments, 0);
                const rotateY = this.getProp('rotateY', prop_arguments, 0);
                const rotateZ = this.getProp('rotateZ', prop_arguments, 0);
                const rotationOrigin = Vec2.create(this.getProp('rotationOrigin', prop_arguments, Vec2.ZERO));
                // const rotationOrigin = Vec2.ZERO
                const buffer = this.generateBuffer(generate_id, prop_arguments);
                const buffer_length = buffer.length;
                buffers[current_index] = new Float32Array(buffer_length);
                this.single_repetition_buffer_length[current_index] = buffer_length;
                total_buffer_length += buffer_length;
                let offset;
                switch (repetition_type) {
                    case ERepetitionType.Ring:
                        offset = Vec2.create(distance[0], 0);
                        Vec2.rotateZ(offset, Vec2.ZERO, repetition.current_angle + displace);
                        break;
                    case ERepetitionType.Matrix:
                        offset = Vec2.create(distance[0] * (current_col_repetition - center_matrix[0]), distance[1] * (current_row_repetition - center_matrix[1]));
                        break;
                    // case RepetitionType.Random:
                    //     offset = Vec2.create(
                    //         (distance[0] * 2) * this.rand() - distance[1],
                    //         (distance[1] * 2) * this.rand() - distance[0]
                    //     )
                    //     break
                }
                for (let buffer_index = 0; buffer_index < buffer_length; buffer_index += 2) {
                    const vertex = Vec2.create(buffer[buffer_index], buffer[buffer_index + 1]);
                    this.applyVertexTransform(vertex);
                    squeezeX !== 0 && Vec2.squeezeX(vertex, squeezeX);
                    squeezeY !== 0 && Vec2.squeezeY(vertex, squeezeY);
                    rotateX !== 0 && Vec2.rotateX(vertex, rotationOrigin, rotateX);
                    rotateY !== 0 && Vec2.rotateY(vertex, rotationOrigin, rotateY);
                    rotateZ !== 0 && Vec2.rotateZ(vertex, rotationOrigin, rotateZ);
                    skewX !== 0 && Vec2.skewX(vertex, skewX);
                    skewY !== 0 && Vec2.skewY(vertex, skewY);
                    (scale[0] != 1 || scale[1] != 1) && Vec2.scale(vertex, scale);
                    (translate[0] != 0 || translate[1] != 0) && Vec2.translate(vertex, translate);
                    if (repetition_type === ERepetitionType.Ring) {
                        Vec2.rotateZ(vertex, Vec2.ZERO, repetition.current_angle + displace);
                    }
                    Vec2.translate(vertex, offset);
                    if (bDirectSceneChild) {
                        vertex[0] += this.scene.center[0];
                        vertex[1] += this.scene.center[1];
                    }
                    buffers[current_index][buffer_index] = vertex[0];
                    buffers[current_index][buffer_index + 1] = vertex[1];
                }
            }
        }
        this.buffer = new Float32Array(total_buffer_length);
        for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        if (bDirectSceneChild && (!this.indexed_buffer || !this.bStaticIndexed))
            this.index((this.indexed_buffer = []));
    }
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapeBase
     */
    applyVertexTransform(vertex) { }
    /**
     * Get number of repetitions
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getRepetitionCount() {
        var _a;
        let repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0]) : repetitions;
    }
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    getBuffer() {
        return this.buffer;
    }
    /**
     * Return indexed buffer
     *
     * @returns {(Array<ISceneChildStreamIndexing> | undefined)}
     * @memberof ShapeBase
     */
    getIndexedBuffer() {
        return this.indexed_buffer;
    }
    /**
     * Return Array of single repetition buffer length
     *
     * @returns {Uint16Array}
     * @memberof ShapeBase
     */
    getSingleRepetitionBufferLength() {
        return this.single_repetition_buffer_length;
    }
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
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
    /**
     * Index vertex buffer
     *
     * @public
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof Shape
     */
    index(buffer, parent) {
        var _a, _b;
        const shape_buffer = this.getBuffer();
        if (shape_buffer) {
            const repetitions = this.getProp('repetitions', { parent, time: 1, repetition: ShapeBase.getEmptyRepetition(), context: Context }, 1);
            // const bRandomRepetitions: boolean = typeof this.props.randomSeed !== 'undefined'
            // this.rand_prng = bRandomRepetitions ? seedrandom(this.props.randomSeed as string) : undefined
            const repetition_type = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring;
            const repetition_count = Array.isArray(repetitions)
                ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
                : repetitions;
            const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
            const repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
            // const frame_buffer_length = shape_buffer.length / repetition_count
            let current_index = 0;
            for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
                for (let current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                    const repetition = {
                        current_index: current_index + 1,
                        current_offset: (current_index + 1) / repetition_count,
                        current_angle: repetition_type === ERepetitionType.Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0,
                        count: repetition_count,
                        count_col: repetition_col_count,
                        count_row: repetition_row_count,
                        current_col: current_col_repetition + 1,
                        current_col_offset: (current_col_repetition + 1) / repetition_col_count,
                        current_row: current_row_repetition + 1,
                        current_row_offset: (current_row_repetition + 1) / repetition_row_count,
                        type: repetition_type,
                    };
                    // random_offset: bRandomRepetitions ? Vec2.create(this.rand(), this.rand()) : Vec2.create(0, 0)
                    this.addIndex(buffer, this.single_repetition_buffer_length[current_index], repetition, parent);
                }
            }
        }
    }
}
/**
 * Empty buffer
 *
 * @static
 * @type {Float32Array}
 * @memberof ShapeBase
 */
ShapeBase.EMPTY_BUFFER = new Float32Array(0);
ShapeBase.EMPTY_REPETITION = {
    current_index: 1,
    current_offset: 0,
    current_angle: 0,
    current_col: 1,
    current_row: 1,
    current_col_offset: 0,
    current_row_offset: 0,
    type: ERepetitionType.Ring,
    // random_offset: [0, 0],
    count: 1,
    count_col: 1,
    count_row: 1,
};
/**
 * Empty Repetition
 *
 * @static
 * @memberof ShapeLoop
 */
ShapeBase.getEmptyRepetition = () => (Object.assign({}, ShapeBase.EMPTY_REPETITION));
/**
 * Empty Prop Arguments
 *
 * @static
 * @type {ISceneChildPropArguments}
 * @memberof ShapeBase
 */
ShapeBase.EMPTY_PROP_ARGUMENTS = {
    time: 1,
    context: Context,
    repetition: ShapeBase.getEmptyRepetition(),
};
export default ShapeBase;
//# sourceMappingURL=ShapeBase.js.map