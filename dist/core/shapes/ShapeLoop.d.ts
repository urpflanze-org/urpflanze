import { ShapeBasePropArguments, ShapeLoopGenerator, LoopMeta } from '@core/types/ShapeBase';
import { ShapeLoopProps, ShapeLoopSettings } from '@core/interfaces/shapes/Interfaces';
import ShapePrimitive from './ShapePrimitive';
/**
 * Shape Loop
 *
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
declare class ShapeLoop extends ShapePrimitive {
    /**
     * PI2
     *
     * @static
     * @type {number}
     * @memberof ShapeLoop
     */
    static readonly PI2: number;
    /**
     * PI div 2
     *
     * @static
     * @type {number}
     * @memberof ShapeLoop
     */
    static readonly PId2: number;
    /**
     * Empty Prop Arguments
     *
     * @static
     * @type {ShapeBasePropArguments}
     * @memberof ShapeBase
     */
    static readonly EMPTY_PROP_ARGUMENTS: ShapeBasePropArguments;
    /**
     * Shape loop props
     *
     * @protected
     * @type {ShapeLoopProps}
     * @memberof ShapeLoop
     */
    protected props: ShapeLoopProps;
    /**
     * chek if loop generate a static shape
     *
     * @protected
     * @type {boolean}
     * @memberof ShapeLoop
     */
    protected bStaticLoop: boolean;
    /**
     * Loop generator
     *
     * @protected
     * @type {ShapeLoopGenerator}
     * @memberof ShapeLoop
     */
    protected loop: ShapeLoopGenerator;
    /**
     * Generate static loop buffer whem ShapeLoopGenerator props
     * haven't dynamic properties
     *
     * @protected
     * @type {Float32Array}
     * @memberof ShapeLoop
     */
    protected loop_buffer?: Float32Array;
    /**
     * list of prop has impact on shape loop generation
     *
     * @protected
     * @type {Array<string>}
     * @memberof ShapeLoop
     */
    shapeLoopPropsDependencies: Array<string>;
    constructor(settings?: ShapeLoopSettings, bPreventGeneration?: boolean);
    /**
     * Check if loop_buffer is static
     *
     * @returns {boolean}
     * @memberof ShapeLoop
     */
    isStaticLoop(): boolean;
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
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
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    /**
     * Set single or multiple props
     *
     * @param {(keyof ShapeLoopProps | ShapeLoopProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeLoop
     */
    setProp(key: keyof ShapeLoopProps | ShapeLoopProps, value?: any): void;
    /**
     * Get prop
     *
     * @param {keyof ShapeLoopProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeLoop
     */
    getProp(key: keyof ShapeLoopProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * Return length of buffer
     *
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(prop_arguments: ShapeBasePropArguments): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    private generateLoopBuffer;
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    getLoop(prop_arguments?: ShapeBasePropArguments): LoopMeta;
    /**
     * Set shape
     *
     * @param {(ShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    setShape(loop: ShapeLoopGenerator): void;
}
export default ShapeLoop;
//# sourceMappingURL=ShapeLoop.d.ts.map