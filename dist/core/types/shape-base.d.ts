import { IBaseRepetition, IRepetition, ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings, TSceneChildProp } from "./scene-child";
import SceneChild from "../SceneChild";
import ShapePrimitive from "../shapes/ShapePrimitive";
import Shape from "../shapes/Shape";
/**
 * Object for index the buffer
 *
 * @category Core.Interfaces
 */
export interface IBufferIndex {
    /**
     * Reference to shape
     */
    shape: ShapePrimitive;
    /**
     * Parent indexing
     */
    parent?: Omit<IBufferIndex, 'shape'> & {
        shape: Shape;
    };
    /**
     * Frame length
     */
    frame_length: number;
    /**
     * Current repetition reference oof frame
     */
    repetition: IRepetition;
}
/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export declare type TVertexCallback = (vertex: Array<number> | Float32Array, prop_arguments: ISceneChildPropArguments, vertex_repetition: IBaseRepetition) => void;
/**
 * ShapeBaseSettings
 *
 * @category Core.Types
 */
export interface IShapeBaseSettings extends ISceneChildSettings {
    bUseParent?: boolean;
    vertexCallback?: TVertexCallback;
}
/**
 * Shape settings
 *
 * @category Core.Interfaces
 */
export interface IShapeSettings extends IShapeBaseSettings {
    shape?: SceneChild;
}
/**
 *
 *
 * @category Core.Enums
 */
export declare enum EShapePrimitiveAdaptMode {
    /**
     * The buffer is not changed
     * @order 1
     */
    None = 0,
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1]
     * @order 2
     */
    Scale = 2,
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
     * @order 3
     */
    Center = 4,
    /**
     * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
     * @order 4
     */
    Fill = 8
}
/**
 *
 * @category Core.Interfaces
 */
export interface IShapePrimitiveProps extends ISceneChildProps {
    sideLength?: TSceneChildProp<number | Array<number>>;
    fillColor?: TSceneChildProp<number | string>;
    lineWidth?: TSceneChildProp<number>;
    strokeColor?: TSceneChildProp<number | string>;
}
/**
 *
 * @category Core.Interfaces
 */
export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
    adaptMode?: EShapePrimitiveAdaptMode;
    bCloseShape?: boolean;
}
/**
 *
 * @category Core.Interfaces
 */
export interface IShapeBounding {
    x: number;
    y: number;
    cx: number;
    cy: number;
    width: number;
    height: number;
}
//# sourceMappingURL=shape-base.d.ts.map