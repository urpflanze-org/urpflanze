import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from "./types/ShapeBase";
import { ShapeBaseProps, ShapeBaseSettings } from "./interfaces/shapes/Interfaces";
import SceneChild from "./SceneChild";
declare class Group extends SceneChild {
    children: Array<SceneChild>;
    constructor(settings?: ShapeBaseSettings);
    isStatic(): boolean;
    isStaticIndexed(): boolean;
    add(item: SceneChild): void;
    sortChildren(): void;
    getChildren(): Array<SceneChild>;
    find(id_or_name: number | string): SceneChild | null;
    get(index: number): SceneChild | null;
    remove(index: number): false | Array<SceneChild>;
    removeFromId(id: number | string): void;
    generate(indexing_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ShapeBasePropArguments): void;
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    setProp(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any): void;
    getBufferLength(prop_arguments?: ShapeBasePropArguments): number;
    getBuffer(): Float32Array | undefined;
    getIndexedBuffer(): Array<ShapeBaseStreamIndexing> | undefined;
    stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    index(buffer: Array<ShapeBaseStreamIndexing>, parent?: ShapeBaseStreamIndexing): void;
    private static propagateProp;
    private static removeIntersected;
}
export default Group;
