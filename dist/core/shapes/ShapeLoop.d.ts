import { ShapeBasePropArguments, ShapeLoopGenerator, LoopMeta } from "../types/ShapeBase";
import { ShapeLoopProps, ShapeLoopSettings } from "../interfaces/shapes/Interfaces";
import ShapePrimitive from "./ShapePrimitive";
declare class ShapeLoop extends ShapePrimitive {
    static readonly PI2: number;
    static readonly PId2: number;
    static readonly EMPTY_PROP_ARGUMENTS: ShapeBasePropArguments;
    protected props: ShapeLoopProps;
    protected bStaticLoop: boolean;
    protected loop: ShapeLoopGenerator;
    protected loop_buffer?: Float32Array;
    shapeLoopPropsDependencies: Array<string>;
    constructor(settings?: ShapeLoopSettings, bPreventGeneration?: boolean);
    isStaticLoop(): boolean;
    isStatic(): boolean;
    isStaticIndexed(): boolean;
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    setProp(key: keyof ShapeLoopProps | ShapeLoopProps, value?: any): void;
    getProp(key: keyof ShapeLoopProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    getBufferLength(prop_arguments: ShapeBasePropArguments): number;
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
    private generateLoopBuffer;
    getLoop(prop_arguments?: ShapeBasePropArguments): LoopMeta;
    setShape(loop: ShapeLoopGenerator): void;
}
export default ShapeLoop;
