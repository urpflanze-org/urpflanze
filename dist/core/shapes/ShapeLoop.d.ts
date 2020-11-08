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
    count: number;
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
    protected currentOrSingleLoopBuffer?: Float32Array;
    /**
     * list of prop has impact on shape loop generation
     *
     * @protected
     * @type {Array<'propArguments' | keyof IShapeLoopProps | string>}
     * @memberof ShapeLoop
     */
    loopDependencies: Array<'propArguments' | keyof IShapeLoopProps | string>;
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     * @memberof ShapeLoop
     */
    constructor(settings?: IShapeLoopSettings, bPreventGeneration?: boolean);
    /**
     * Check if currentOrSingleLoopBuffer is static
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
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof ShapeLoop
     */
    getProp(key: keyof IShapeLoopProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any;
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [propArguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(propArguments: ISceneChildPropArguments): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array;
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    private generateLoopBuffer;
    /**
     * Return information about a client loop gnerator
     *
     * @private
     * @param {ISceneChildPropArguments} propArguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    private getLoop;
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