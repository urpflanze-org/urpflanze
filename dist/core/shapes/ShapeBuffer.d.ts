import ShapePrimitive from "./ShapePrimitive";
import { ISceneChildPropArguments } from "../types/scene-child";
import { IShapeBufferSettings } from "../types/shape-primitive";
/**
 * @category Core.Shapes
 */
declare class ShapeBuffer extends ShapePrimitive {
    /**
     * Custom vertex buffer or shape
     *
     * Float32Array between -1, 1
     *
     * @type {Float32Array}
     * @memberof ShapeBuffer
     */
    shape: Float32Array;
    /**
     * Adapted buffer
     *
     * @private
     * @type {Float32Array}
     * @memberof ShapeBuffer
     */
    private shapeBuffer;
    /**
     * Creates an instance of ShapeBuffer.
     *
     * @param {IShapeBufferSettings} [settings={}]
     * @memberof ShapeBuffer
     */
    constructor(settings?: IShapeBufferSettings);
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    /**
     * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
     *
     * @private
     * @memberof ShapeBuffer
     */
    private bindBuffer;
    /**
     * Return length of buffer
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    getBufferLength(): number;
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
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape: Float32Array): void;
    /**
     * Subdivide buffer n times
     *
     * @param {number} [level=1]
     * @memberof ShapeBuffer
     */
    subdivide(level?: number): void;
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     * @memberof ShapeBuffer
     */
    static subdivide(shape: Float32Array, bClosed?: boolean): Float32Array;
}
export default ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.d.ts.map