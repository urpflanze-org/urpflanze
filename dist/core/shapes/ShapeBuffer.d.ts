import ShapePrimitive from "./ShapePrimitive";
import { ShapeBufferSettings } from "../interfaces/shapes/Interfaces";
import { ShapeBasePropArguments } from "../types/ShapeBase";
declare class ShapeBuffer extends ShapePrimitive {
    shape: Float32Array;
    private shape_buffer;
    constructor(settings?: ShapeBufferSettings);
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    getBufferLength(): number;
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
    setShape(shape: Float32Array): void;
    subdivide(level?: number): void;
    static subdivide(shape: Float32Array): Float32Array | undefined;
}
export default ShapeBuffer;
