import ShapeBase from "./ShapeBase";
import { TArray } from "../math/Vec2";
import { EShapePrimitiveAdaptMode, IShapeBounding, IShapePrimitiveProps, IShapePrimitiveSettings } from "../types/shape-base";
import { IRepetition, ISceneChildPropArguments, ISceneChildStreamIndexing } from "../types/scene-child";
import { TVertexCallback } from "../types/shape-primitive";
/**
 * @category Core.Abstract
 */
declare abstract class ShapePrimitive extends ShapeBase {
    /**
     * Item props
     *
     * @protected
     * @type {IShapePrimitiveProps}
     * @memberof ShapePrimitive
     */
    protected props: IShapePrimitiveProps;
    /**
     * Adapt buffer mode
     *
     * @type {EShapePrimitiveAdaptMode}
     * @memberof ShapePrimitive
     */
    bAdaptBuffer: EShapePrimitiveAdaptMode;
    /**
     * Define shape is closed
     *
     * @type {boolean}
     * @memberof ShapePrimitive
     */
    bCloseShape: boolean;
    /**
     * Scale buffer
     *
     * @public
     * @type {Array<number>}
     * @memberof ShapePrimitive
     */
    sideLength: TArray;
    /**
     * Transform any vertex
     *
     * @public
     * @memberof ShapeBase
     */
    vertexCallback?: TVertexCallback;
    constructor(settings?: IShapePrimitiveSettings);
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic(): boolean;
    /**
     * Get prop
     *
     * @param {keyof IShapePrimitiveProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    getProp(key: keyof IShapePrimitiveProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    protected bindSideLength(prop_arguments: ISceneChildPropArguments): void;
    /**
     *
     *
     * @protected
     * @param {TArray} vertex
     * @memberof ShapePrimitive
     */
    protected applyVertexTransform(vertex: TArray): void;
    /**
     * Return bCloseShape
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed(): boolean;
    /**
     * Set bCloseShape
     *
     * @param {boolean} bCloseShape
     * @memberof ShapePrimitive
     */
    setClosed(bCloseShape: boolean): void;
    /**
     * Return bAdaptBuffer
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    isAdapted(): EShapePrimitiveAdaptMode;
    /**
     * Set bAdaptBuffer
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    setAdapted(bAdapted: EShapePrimitiveAdaptMode): void;
    /**
     *
     *
     * @protected
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    protected addIndex(buffer: Array<ISceneChildStreamIndexing>, frame_length: number, current_repetition: IRepetition, parent?: ISceneChildStreamIndexing): void;
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer: Float32Array): IShapeBounding;
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
    static adaptBuffer(input: Float32Array, mode: EShapePrimitiveAdaptMode): Float32Array;
}
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.d.ts.map