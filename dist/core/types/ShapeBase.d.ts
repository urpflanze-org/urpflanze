import { ISceneChildPropArguments, ISceneChildSettings } from '@core/types/SceneChild';
import SceneChild from '@core/SceneChild';
export interface IShapeBaseSettings extends ISceneChildSettings {
    bUseParent?: boolean;
}
export interface IShapeSettings extends IShapeBaseSettings {
    shape?: SceneChild;
}
/**
 * Client loop configuration
 *
 * @type ShapeLoopGenerator
 */
export declare type ShapeLoopGenerator = {
    start?: ShapeBaseProp<number>;
    end?: ShapeBaseProp<number>;
    inc?: ShapeBaseProp<number>;
    vertex?: (current_angle: number, prop_arguments: ISceneChildPropArguments) => Array<number> | Float32Array;
};
export declare type LoopMeta = {
    start: number;
    end: number;
    inc: number;
    repetition: number;
};
export declare type VertexCallbackGenerator = (vertex: Array<number> | Float32Array, prop_argumens: ISceneChildPropArguments, vertex_index: number, vertex_length: number) => void;
/**
 * Shape prop type
 *
 * @type ShapeLoopGenerator
 */
export declare type ShapeBaseProp<T> = T | {
    (prop_arguments: ISceneChildPropArguments): T;
};
export interface ShapeBounding {
    x: number;
    y: number;
    cx: number;
    cy: number;
    width: number;
    height: number;
}
//# sourceMappingURL=ShapeBase.d.ts.map