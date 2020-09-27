import { ShapeBaseProps } from "../interfaces/shapes/Interfaces";
import SceneChild from "../SceneChild";
import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from "../types/ShapeBase";
import ShapePrimitive from "./ShapePrimitive";
declare class ShapeRecursion extends SceneChild {
    private bStatic;
    private generate_id;
    protected buffer?: Float32Array;
    protected indexed_buffer?: Array<ShapeBaseStreamIndexing>;
    shape: ShapePrimitive;
    recursions: number;
    constructor(settings: any);
    isStatic(): boolean;
    isStaticIndexed(): boolean;
    setProp(key: ShapeBaseProps | 'distance' | 'repetitions' | 'displace' | 'skewX' | 'skewY' | 'squeezeX' | 'squeezeY' | 'rotateX' | 'rotateY' | 'rotateZ' | 'scale' | 'translate' | 'rotationOrigin', value?: any, bClearIndexed?: boolean): void;
    generate(generate_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ShapeBasePropArguments): void;
    stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    getBuffer(): Float32Array | undefined;
    getIndexedBuffer(): ShapeBaseStreamIndexing[] | undefined;
    getBufferLength(prop_arguments?: ShapeBasePropArguments): number;
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    index(buffer: ShapeBaseStreamIndexing[], parent?: ShapeBaseStreamIndexing): void;
}
export default ShapeRecursion;
