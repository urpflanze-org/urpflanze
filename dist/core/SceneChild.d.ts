import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from "./types/ShapeBase";
import { ShapeBaseProps } from "./interfaces/shapes/Interfaces";
import Scene from "./Scene";
declare abstract class SceneChild {
    scene?: Scene;
    id: number | string;
    name: string;
    type: string;
    order: number;
    protected props: ShapeBaseProps;
    data: any;
    constructor(settings: {
        id?: number | string;
        name?: string;
        type?: string;
        order?: number;
        data?: any;
    });
    abstract isStatic(): boolean;
    abstract isStaticIndexed(): boolean;
    find(id_or_name: string | number): SceneChild | null;
    getProps(): ShapeBaseProps;
    getProp(key: keyof ShapeBaseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    abstract setProp(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any, bClearIndexed?: boolean): void;
    setPropUnsafe(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any): void;
    abstract generate(generate_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ShapeBasePropArguments): void;
    abstract stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    abstract getBuffer(): Float32Array | undefined;
    abstract getIndexedBuffer(): Array<ShapeBaseStreamIndexing> | undefined;
    abstract getBufferLength(prop_arguments?: ShapeBasePropArguments): number;
    abstract clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    abstract index(buffer: Array<ShapeBaseStreamIndexing>, parent?: ShapeBaseStreamIndexing): void;
}
export default SceneChild;
