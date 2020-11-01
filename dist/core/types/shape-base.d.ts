import { IBaseRepetition, IRepetition, ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings, TSceneChildProp } from "./scene-child";
import SceneChild from "../SceneChild";
import ShapeBase from "../shapes/ShapeBase";
/**
 * Object for index the buffer
 *
 * @category Core.Interfaces
 */
export interface IBufferIndex {
    /**
     * Reference to shape
     */
    shape: ShapeBase;
    /**
     * Parent indexing
     */
    parent?: IBufferIndex;
    /**
     * Frame length
     */
    frameLength: number;
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
export declare type TVertexCallback = (vertex: [number, number, number], vertexRepetition: IBaseRepetition, propArguments: ISceneChildPropArguments) => void;
/**
 * ShapeBaseSettings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBaseSettings extends ISceneChildSettings {
    /**
     * With this parameter the shape will be created at each repetition,
     * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
     * In the case of ShapePrimitive fillColor, strokeColor and lineWidth don't need to as they are generated during the buffer stream.
     * @order -14
     */
    bUseParent?: boolean;
    /**
     * Callback to apply transform at any vertex
     *
     * @order -13
     */
    vertexCallback?: TVertexCallback;
}
/**
 * Shape settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeSettings extends IShapeBaseSettings {
    /**
     * shape to apply repetitions and transformation
     * @order -20
     */
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
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveProps extends ISceneChildProps {
    /**
     * scalar that multiplies the buffer or loop
     * @order -20
     */
    sideLength?: TSceneChildProp<number | Array<number>>;
    /**
     * fill color of the shape, hsl or rgb is preferred
     * @order -19
     */
    fillColor?: TSceneChildProp<number | string>;
    /**
     * stroke color oh the shape, hsl or rgb is preferred
     * @order -18
     */
    strokeColor?: TSceneChildProp<number | string>;
    /**
     * stroke dimension
     * @order -17
     */
    lineWidth?: TSceneChildProp<number>;
}
/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
    /**
     * Adapt buffer mode, see <a href="[base_url]/EShapePrimitiveAdaptMode">EShapePrimitiveAdaptMode</a> for more details
     * @order -16
     */
    adaptMode?: EShapePrimitiveAdaptMode;
    /**
     * Callback to apply transform at any vertex
     * @order -15
     */
    bCloseShape?: boolean;
}
/**
 * Size of a buffer and its position relative to the scene.
 * cx|y is the center
 *
 * @category Core.Interfaces
 */
export interface IShapeBounding {
    /**
     * @order 1
     */
    x: number;
    /**
     * @order 2
     */
    y: number;
    /**
     * @order 3
     */
    cx: number;
    /**
     * @order 4
     */
    cy: number;
    /**
     * @order 5
     */
    width: number;
    /**
     * @order 5
     */
    height: number;
}
//# sourceMappingURL=shape-base.d.ts.map