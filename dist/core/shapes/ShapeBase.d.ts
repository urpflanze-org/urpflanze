import { TStreamCallback } from "../types/scene";
import { IShapeBaseSettings, IShapeBounding, TVertexCallback } from "../types/shape-base";
import { IRepetition, IBaseRepetition, ISceneChildPropArguments, ISceneChildProps } from "../types/scene-child";
import { IBufferIndex } from "../types/shape-base";
import SceneChild from "../SceneChild";
/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
declare abstract class ShapeBase extends SceneChild {
    /**
     * Empty buffer
     *
     * @internal
     * @ignore
     */
    static readonly EMPTY_BUFFER: Float32Array;
    /**
     * Empty BaseRepetition
     *
     * @internal
     * @ignore
     */
    static getEmptySimpleRepetition: () => IBaseRepetition;
    /**
     * Empty Repetition
     *
     * @internal
     * @ignore
     */
    static getEmptyRepetition: () => IRepetition;
    /**
     * Empty Prop Arguments
     *
     * @internal
     * @ignore
     */
    static readonly EMPTY_PROP_ARGUMENTS: ISceneChildPropArguments;
    /**
     * Shape generation id
     * used for prevent buffer calculation
     *
     * @internal
     * @ignore
     */
    private generateId;
    /**
     * A final array of vertices to draw
     *
     * @internal
     * @ignore
     */
    protected buffer?: Float32Array;
    /**
     * Determine if shape are static and doon't need generate at eachtime
     *
     * @internal
     * @ignore
     */
    protected bStatic: boolean;
    /**
     * Determine if shape have static indexed buffer
     *
     * @internal
     * @ignore
     */
    protected bStaticIndexed: boolean;
    /**
     * Flag used to determine if indexedBuffer has been generated
     *
     * @internal
     * @ignore
     */
    protected bIndexed: boolean;
    /**
     * With this parameter the shape will be created at each repetition,
     * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
     * In the case of ShapePrimitive fillColor, strokeColor and lineWidth don't need to as they are generated during the buffer stream.
     *
     * @public
     * @type {boolean}
     * @memberof ShapeBase
     * @example
     * ```javascript
     * // Use parent repetition for generate different types of roses
     *
     * const rose = new Urpflanze.Rose({
     * 	repetitions: 3,
     * 	n: ({ parent }) => parent.repetition.index, // <- use parent
     * 	d: ({ repetition }) => repetition.index,
     * 	sideLength: 20,
     * 	distance: 30,
     * 	bUseParent: true // <- add this for use `parent` as propArgument of `n` property
     * })
     *
     * const shape = new Urpflanze.Shape({
     * 	shape: rose,
     * 	repetitions: 4,
     * 	distance: 100
     * })
     * ```
     */
    bUseParent: boolean;
    /**
     * Array used for index a vertex buffer
     * only for first level scene children
     *
     * @internal
     * @ignore
     */
    protected indexedBuffer?: Array<IBufferIndex>;
    /**
     * Callback to apply transform at any vertex
     *
     * @example
     * ```javascript
     * // vertexCallback example
     * // Generate lines with noise
     *
     * const line = new Urpflanze.Line({
     * 	repetitions: [1, 50],
     * 	distance: [0, 4],
     * 	sideLength: ({ context, shape }) => context.percW(40, shape), // <- make the shape non-static
     * 	vertexCallback: (vertex, { repetition, context, time }, vertex_repetition) => {
     * 		const noise = context.noise('seed', vertex_repetition.offset * 2, repetition.row.offset * 2, time / 1000)
     * 		vertex[0] += noise * 10
     * 		vertex[1] += noise * 10
     * 	},
     * })
     *
     * line.subdivide(5)
     * ```
     */
    vertexCallback?: TVertexCallback;
    /**
     * The bounding inside the scene
     *
     * @type {IShapeBounding}
     */
    bounding: IShapeBounding;
    /**
     * Creates an instance of ShapeBase
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof ShapeBase
     */
    constructor(settings?: IShapeBaseSettings);
    /**
     * Check if the shape should be generated every time
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStatic(): boolean;
    /**
     * Check if the indexedBuffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    isStaticIndexed(): boolean;
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof ShapeBase
     */
    getProp(key: keyof ISceneChildProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any;
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
     * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
     *
     * @param {number} generateId generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parentPropArguments]
     * @memberof ShapeBase
     */
    generate(generateId: number, bDirectSceneChild?: boolean, parentPropArguments?: ISceneChildPropArguments): void;
    /**
     * Return current shape (whit repetions) bounding
     *
     * @return {*}  {IShapeBounding}
     */
    getBounding(): IShapeBounding;
    /**
     * Return a single shape bounding
     *
     * @abstract
     * @return {*}  {IShapeBounding}
     */
    abstract getShapeBounding(): IShapeBounding;
    /**
     * Add into indexedBuffer
     *
     * @protected
     * @abstract
     * @param {number} frameLength
     * @param {IRepetition} currentRepetition
     * @memberof ShapeBase
     */
    protected abstract addIndex(frameLength: number, currentRepetition: IRepetition): void;
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
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected abstract generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array;
    /**
     *
     *
     * @abstract
     * @param {(any)} shapeOrLoopOrBuffer
     */
    abstract setShape(shapeOrLoopOrBuffer: any): void;
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
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof ShapeBase
     */
    getIndexedBuffer(): Array<IBufferIndex> | undefined;
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
    stream(callback: TStreamCallback): void;
}
export default ShapeBase;
//# sourceMappingURL=ShapeBase.d.ts.map