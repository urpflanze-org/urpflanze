import ShapeBase from "./ShapeBase";
import { ShapePrimitiveProps, ShapePrimitiveSettings, ShapePrimitiveAdaptMode } from "../interfaces/shapes/Interfaces";
import { ShapeBaseStreamIndexing, ShapeBasePropArguments, ShapeBounding, Repetition, VertexCallbackGenerator } from "../types/ShapeBase";
import { TArray } from "../math/Vec2";
declare abstract class ShapePrimitive extends ShapeBase {
    protected props: ShapePrimitiveProps;
    bAdaptBuffer: ShapePrimitiveAdaptMode;
    bCloseShape: boolean;
    sideLength: TArray;
    vertexCallback?: VertexCallbackGenerator;
    constructor(settings?: ShapePrimitiveSettings);
    isStatic(): boolean;
    getProp(key: keyof ShapePrimitiveProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    protected bindSideLength(prop_arguments: ShapeBasePropArguments): void;
    protected applyVertexTransform(vertex: TArray): void;
    isClosed(): boolean;
    setClosed(bCloseShape: boolean): void;
    isAdapted(): ShapePrimitiveAdaptMode;
    setAdapted(bAdapted: ShapePrimitiveAdaptMode): void;
    protected addIndex(buffer: Array<ShapeBaseStreamIndexing>, frame_length: number, current_repetition: Repetition, parent?: ShapeBaseStreamIndexing): void;
    static getBounding(buffer: Float32Array): ShapeBounding;
    static adaptBuffer(input: Float32Array, mode: ShapePrimitiveAdaptMode): Float32Array;
}
export default ShapePrimitive;
