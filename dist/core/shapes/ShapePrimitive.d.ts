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
     * Define shape is closed, default true
     *
     * @type {boolean}
     * @memberof ShapePrimitive
     */
    bClosed: boolean;
    /**
     * Empty buffer bounding
     *
     * @static
     * @type {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static readonly EMPTY_BOUNDING: IShapeBounding;
    /**
     * Scale buffer
     *
     * @public
     * @type {Array<number>}
     * @memberof ShapePrimitive
     */
    sideLength: vec2;
    /**
     * Contain the bounding of the last generated buffer
     *
     * @type {IShapeBounding}
     * @memberof ShapePrimitive
     */
    currentGenerationPrimitiveBounding: IShapeBounding;
    /**
     * Creates an instance of ShapePrimitive.
     *
     * @param {IShapePrimitiveSettings} [settings={}]
     * @memberof ShapePrimitive
     */
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
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof ShapePrimitive
     */
    getProp(key: keyof IShapePrimitiveProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any;
    /**
     * set side length when generate a buffer into shape loop or shape buffer
     *
     * @protected
     * @param {ISceneChildPropArguments} propArguments
     * @memberof ShapePrimitive
     */
    protected bindSideLength(propArguments: ISceneChildPropArguments): boolean;
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    getShapeBounding(): IShapeBounding;
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @memberof ShapePrimitive
     */
    protected addIndex(frameLength: number, repetition: IRepetition): void;
    /**
     * Return bClosed
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed(): boolean;
    /**
     * Set bClosed
     *
     * @param {boolean} bClosed
     * @memberof ShapePrimitive
     */
    setClosed(bClosed: boolean): void;
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
    static getBounding(buffer: Float32Array, bounding?: IShapeBounding): IShapeBounding;
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