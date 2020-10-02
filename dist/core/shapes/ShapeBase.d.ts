import SceneChild from '@core/SceneChild';
import { TArray } from '@core/math/Vec2';
import { IRepetition, ISceneChildPropArguments, ISceneChildProps, ISceneChildStreamIndexing } from '@core/types/scene-child';
import { TStreamCallback } from '@core/types/scene';
import { IShapeBaseSettings } from '@core/types/shape-base';
/**
 * Shape Base
 *
 * @abstract
 * @class ShapeBase
 * @extends {SceneChild}
 */
declare abstract class ShapeBase extends SceneChild {
    /**
     * Empty buffer
     *
     * @static
     * @type {Float32Array}
     * @memberof ShapeBase
     */
    static readonly EMPTY_BUFFER: Float32Array;
    /**
     * Empty Repetition
     *
     * @static
     * @memberof ShapeLoop
     */
    static getEmptyRepetition: () => IRepetition;
    /**
     * Empty Prop Arguments
     *
     * @static
     * @type {ISceneChildPropArguments}
     * @memberof ShapeBase
     */
    static readonly EMPTY_PROP_ARGUMENTS: ISceneChildPropArguments;
    /**
     * Shape generation id
     * used for prevent buffer calculation
     *
     * @protected
     * @type {number}
     * @memberof ShapeBase
     */
    protected generate_id: number;
    /**
     * Buffer of shape vertices
     *
     * @protected
     * @type {Float32Array}
     * @memberof ShapeBase
     */
    protected buffer?: Float32Array;
    /**
     * Determine if shape are static (one time generation, no props function, animation)
     *
     * @protected
     * @type {boolean}
     * @memberof ShapeBase
     */
    protected bStatic: boolean;
    /**
     * Determine if shape have static indexed buffer
     *
     * @protected
     * @type {boolean}
     * @memberof ShapeBase
     */
    protected bStaticIndexed: boolean;
    /**
     * use parent prop argument into prop function
     * if true, the shape are generated at each ripetition
     *
     * @public
     * @type {boolean}
     * @memberof ShapeBase
     */
    bUseParent: boolean;
    /**
     * Array used for index a vertex buffer
     * only for first level scene children
     *
     * @protected
     * @type {Array<ISceneChildStreamIndexing>}
     * @memberof ShapeBase
     */
    protected indexed_buffer?: Array<ISceneChildStreamIndexing>;
    /**
     * A ShapeLoop can be dynamic buffer lenght for eacch repetition.
     * This array contain a length of buffer for each repetition.
     *
     * @protected
     * @type {Uint16Array}
     * @memberof ShapeBase
     */
    protected single_repetition_buffer_length: Uint16Array;
    /**
     * Random function
     *
     * @private
     * @type {(seedrandom.prng | undefined)}
     * @memberof ShapeBase
     */
    /**
     * Creates an instance of ShapeBase.
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof ShapeBase
     */
    constructor(settings?: IShapeBaseSettings);
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStatic(): boolean;
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed(): boolean;
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeBase
     */
    getProp(key: keyof ISceneChildProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeBase
     */
    setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any, bClearIndexed?: boolean): void;
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     * @memberof ShapeBase
     */
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    /**
     * Get random number
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    /**
     * Generate shape buffer
     *
     * @param {number} generate_id generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof ShapeBase
     */
    generate(generate_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ISceneChildPropArguments): void;
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapeBase
     */
    protected applyVertexTransform(vertex: TArray): void;
    /**
     * Get number of repetitions
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getRepetitionCount(): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected abstract generateBuffer(generate_id: number, prop_arguments: ISceneChildPropArguments): Float32Array;
    /**
     * Set shape
     *
     * @memberof ShapeBase
     */
    abstract setShape(shape_or_loop: any): void;
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    getBuffer(): Float32Array | undefined;
    /**
     * Return indexed buffer
     *
     * @returns {(Array<ISceneChildStreamIndexing> | undefined)}
     * @memberof ShapeBase
     */
    getIndexedBuffer(): Array<ISceneChildStreamIndexing> | undefined;
    /**
     * Return Array of single repetition buffer length
     *
     * @returns {Uint16Array}
     * @memberof ShapeBase
     */
    getSingleRepetitionBufferLength(): Uint16Array;
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
    stream(callback: TStreamCallback): void;
    /**
     * Index vertex buffer
     *
     * @public
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof Shape
     */
    index(buffer: Array<ISceneChildStreamIndexing>, parent?: ISceneChildStreamIndexing): void;
    /**
     * Add index to buffer
     *
     * @protected
     * @abstract
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapeBase
     */
    protected abstract addIndex(buffer: Array<ISceneChildStreamIndexing>, frame_length: number, current_repetition: IRepetition, parent?: ISceneChildStreamIndexing): void;
}
export default ShapeBase;
//# sourceMappingURL=ShapeBase.d.ts.map