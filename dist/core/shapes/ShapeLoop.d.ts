import ShapePrimitive from "./ShapePrimitive";
import { ISceneChildPropArguments } from "../types/scene-child";
import { IShapeLoopGenerator, IShapeLoopProps, IShapeLoopSettings } from "../types/shape-primitive";
/**
 *
 *
 * @export
 * @internal
 * @ignore
 * @interface ILoopMeta
 */
export interface ILoopMeta {
    start: number;
    end: number;
    inc: number;
    repetition: number;
}
/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
declare class ShapeLoop extends ShapePrimitive {
    static readonly PI2: number;
    static readonly PId2: number;
    /**
     * Shape loop props
     *
     * @protected
     * @type {IShapeLoopProps}
     * @memberof ShapeLoops
     */
    protected props: IShapeLoopProps;
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
     * @type {IShapeLoopGenerator}
     * @memberof ShapeLoop
     */
    protected loop: IShapeLoopGenerator;
    /**
     * Generate static loop buffer whem IShapeLoopGenerator props
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
    shapeLoopPropsDependencies: Array<'vertexCallback' | 'prop_arguments' | string>;
    constructor(settings?: IShapeLoopSettings, bPreventGeneration?: boolean);
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
     * @param {(keyof IShapeLoopProps | IShapeLoopProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeLoop
     */
    setProp(key: keyof IShapeLoopProps | IShapeLoopProps, value?: any): void;
    /**
     * Get prop
     *
     * @param {keyof IShapeLoopProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeLoop
     */
    getProp(key: keyof IShapeLoopProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(prop_arguments: ISceneChildPropArguments): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generate_id: number, prop_arguments: ISceneChildPropArguments): Float32Array;
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    private generateLoopBuffer;
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    getLoop(prop_arguments?: ISceneChildPropArguments): ILoopMeta;
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    setShape(loop: IShapeLoopGenerator): void;
}
export default ShapeLoop;
//# sourceMappingURL=ShapeLoop.d.ts.map