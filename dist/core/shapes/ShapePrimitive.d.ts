import ShapeBase from "./ShapeBase";
import { EShapePrimitiveAdaptMode, IShapeBounding, IShapePrimitiveProps, IShapePrimitiveSettings } from "../types/shape-base";
import { IRepetition, ISceneChildPropArguments } from "../types/scene-child";
import { vec2 } from 'gl-matrix';
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
     * Adapt buffer mode, see <a href="[base_url]/EShapePrimitiveAdaptMode">EShapePrimitiveAdaptMode</a> for more details
     *
     * @type {EShapePrimitiveAdaptMode}
     * @memberof ShapePrimitive
     */
    adaptMode: EShapePrimitiveAdaptMode;
    /**
     * Define shape is closed
     *
     * @type {boolean}
     * @memberof ShapePrimitive
     */
    bCloseShape: boolean;
    static readonly EMPTY_BOUNDING: IShapeBounding;
    /**
     * Scale buffer
     *
     * @public
     * @type {Array<number>}
     * @memberof ShapePrimitive
     */
    sideLength: vec2;
    single_bounding: IShapeBounding;
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
    protected bindSideLength(prop_arguments: ISceneChildPropArguments): boolean;
    getBounding(): IShapeBounding;
    /**
     * Add this to indexed_buffer
     *
     * @protected
     * @param {number} frame_length
     * @param {IRepetition} repetition
     * @memberof ShapePrimitive
     */
    protected addIndex(frame_length: number, repetition: IRepetition): void;
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
     * Return adaptMode
     *
     * @returns {EShapePrimitiveAdaptMode}
     * @memberof ShapeBase
     */
    getAdaptMode(): EShapePrimitiveAdaptMode;
    /**
     * Set adaptMode
     *
     * @param {EShapePrimitiveAdaptMode} bAdapted
     * @memberof ShapeBase
     */
    adapt(adaptMode: EShapePrimitiveAdaptMode): void;
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
    static adaptBuffer(input: Float32Array, mode: EShapePrimitiveAdaptMode, rect?: IShapeBounding): Float32Array;
}
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.d.ts.map