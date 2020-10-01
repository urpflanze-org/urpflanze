import ShapePrimitive from '@core/shapes/ShapePrimitive';
import { ShapeBufferSettings } from '@core/interfaces/shapes/Interfaces';
import { ShapeBasePropArguments } from '@core/types/ShapeBase';
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
    private shape_buffer;
    constructor(settings?: ShapeBufferSettings);
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
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
     * @param {number} generate_id
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape: Float32Array): void;
    subdivide(level?: number): void;
    static subdivide(shape: Float32Array, bClosed?: boolean): Float32Array | undefined;
}
export default ShapeBuffer;
//# sourceMappingURL=ShapeBuffer.d.ts.map