import ShapeBase from '@core/shapes/ShapeBase';
import ShapePrimitive from '@core/shapes/ShapePrimitive';
import Shape from '@core/shapes/Shape';
import Context from '@core/Context';
declare enum RepetitionType {
    Ring = 1,
    Matrix = 2,
    Loop = 3
}
/**
 * Information about current shape repetition
 *
 * @type RepetitionLoop
 */
declare type Repetition = {
    count_row: number;
    count_col: number;
    count: number;
    current_index: number;
    current_offset: number;
    type: RepetitionType;
    current_col: number;
    current_col_offset: number;
    current_row: number;
    current_row_offset: number;
    current_angle: number;
};
/**
 * Object argument for dynamic props
 *
 * @type ShapeBasePropArguments
 */
declare type ShapeBasePropArguments = {
    repetition: Repetition;
    shape_loop?: Repetition;
    context: typeof Context;
    time: number;
    shape?: ShapeBase;
    data?: any;
    parent?: Partial<ShapeBasePropArguments>;
};
/**
 * Object argument for stream callback
 *
 * @type ShapeBaseStreamArguments
 */
declare type ShapeBaseStreamArguments = {
    shape: ShapePrimitive;
    parent?: ShapeBaseStreamIndexing;
    data?: any;
    lineWidth: number;
    fillColor: string;
    strokeColor: string;
    buffer: Float32Array;
    buffer_length: number;
    current_buffer_index: number;
    current_shape_index: number;
    total_shapes: number;
    repetition: Repetition;
};
/**
 * Object for index the buffer
 *
 * @type ShapeBaseStreamIndexing
 */
declare type ShapeBaseStreamIndexing = {
    shape: Shape | ShapePrimitive;
    parent?: ShapeBaseStreamIndexing;
    buffer_length: number;
    repetition: Repetition;
};
/**
 * Client loop configuration
 *
 * @type ShapeLoopGenerator
 */
declare type ShapeLoopGenerator = {
    start?: ShapeBaseProp<number>;
    end?: ShapeBaseProp<number>;
    inc?: ShapeBaseProp<number>;
    vertex?: (current_angle: number, prop_arguments: ShapeBasePropArguments) => Array<number> | Float32Array;
};
declare type LoopMeta = {
    start: number;
    end: number;
    inc: number;
    repetition: number;
};
declare type VertexCallbackGenerator = (vertex: Array<number> | Float32Array, prop_argumens: ShapeBasePropArguments, vertex_index: number, vertex_length: number) => void;
/**
 * Shape prop type
 *
 * @type ShapeLoopGenerator
 */
declare type ShapeBaseProp<T> = T | {
    (prop_arguments: ShapeBasePropArguments): T;
};
interface ShapeBounding {
    x: number;
    y: number;
    cx: number;
    cy: number;
    width: number;
    height: number;
}
export { RepetitionType, Repetition, ShapeLoopGenerator, LoopMeta, VertexCallbackGenerator, ShapeBaseProp, ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing, ShapeBounding, };
//# sourceMappingURL=ShapeBase.d.ts.map