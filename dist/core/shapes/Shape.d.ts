import ShapeBase from "./ShapeBase";
import { ShapeSettings } from "../interfaces/shapes/Interfaces";
import SceneChild from "../SceneChild";
import { ShapeBasePropArguments, ShapeBaseStreamIndexing, Repetition } from "../types/ShapeBase";
declare class Shape extends ShapeBase {
    shape?: SceneChild;
    constructor(settings?: ShapeSettings);
    isStatic(): boolean;
    isStaticIndexed(): boolean;
    find(id_or_name: number | string): SceneChild | null;
    getBufferLength(prop_arguments: ShapeBasePropArguments): number;
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
    setShape(shape: SceneChild | undefined): void;
    protected addIndex(buffer: Array<ShapeBaseStreamIndexing>, frame_length: number, current_repetition: Repetition, parent?: ShapeBaseStreamIndexing): void;
}
export default Shape;
