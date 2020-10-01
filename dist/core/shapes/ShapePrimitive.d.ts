import ShapeBase from '@core/shapes/ShapeBase';
import { ShapePrimitiveProps, ShapePrimitiveSettings, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces';
import { ShapeBaseStreamIndexing, ShapeBasePropArguments, ShapeBounding, Repetition, VertexCallbackGenerator } from '@core/types/ShapeBase';
import { TArray } from '@core/math/Vec2';
declare abstract class ShapePrimitive extends ShapeBase {
    /**
     * Item props
     *
     * @protected
     * @type {ShapePrimitiveProps}
     * @memberof ShapePrimitive
     */
    protected props: ShapePrimitiveProps;
    /**
     * Adapt buffer mode
     *
     * @type {ShapePrimitiveAdaptMode}
     * @memberof ShapePrimitive
     */
    bAdaptBuffer: ShapePrimitiveAdaptMode;
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
    vertexCallback?: VertexCallbackGenerator;
    constructor(settings?: ShapePrimitiveSettings);
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
     * @param {keyof ShapePrimitiveProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    getProp(key: keyof ShapePrimitiveProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ShapeBasePropArguments} prop_arguments
     * @memberof ShapePrimitive
     */
    protected bindSideLength(prop_arguments: ShapeBasePropArguments): void;
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
     * @returns {ShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    isAdapted(): ShapePrimitiveAdaptMode;
    /**
     * Set bAdaptBuffer
     *
     * @param {ShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    setAdapted(bAdapted: ShapePrimitiveAdaptMode): void;
    /**
     *
     *
     * @protected
     * @param {Array<ShapeBaseStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ShapeBaseStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    protected addIndex(buffer: Array<ShapeBaseStreamIndexing>, frame_length: number, current_repetition: Repetition, parent?: ShapeBaseStreamIndexing): void;
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array} buffer
     * @returns {ShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer: Float32Array): ShapeBounding;
    /**
     * Return adapted buffer between [-1,-1] and [1,1]
     *
     * @public
     * @static
     * @param {Float32Array} input
     * @param {ShapePrimitiveAdaptMode} mode
     * @returns {Float32Array}
     * @memberof ShapePrimitive
     */
    static adaptBuffer(input: Float32Array, mode: ShapePrimitiveAdaptMode): Float32Array;
}
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.d.ts.map