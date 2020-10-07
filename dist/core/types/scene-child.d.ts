import ShapeBase from "../shapes/ShapeBase";
import ShapePrimitive from "../shapes/ShapePrimitive";
import Context from "../Context";
import { IBufferIndex } from "./shape-base";
/**
 * Repetition type enumerator.
 *
 * @category Core.Enums
 * @internal
 */
export declare enum ERepetitionType {
    /**
     * Defines the type of repetition of the shape,
     * in a circular way starting from the center of the scene
     * @order 1
     */
    Ring = 1,
    /**
     * Defines the type of repetition of the shape,
     * on a nxm grid starting from the center of the scene
     * @order 2
     */
    Matrix = 2
}
/**
 * Information about prop_arguments repetition
 *
 * @category Core.Interfaces
 */
export interface IRepetition extends IShapeLoopRepetition {
    /**
     * Define the type of repetition
     */
    type: ERepetitionType;
    row: IBaseRepetition;
    col: IBaseRepetition;
}
/**
 * Base repetition
 *
 * @category Core.Interfaces
 */
export interface IBaseRepetition {
    index: number;
    offset: number;
    count: number;
}
/**
 *
 *
 * @category Core.Interfaces
 */
export interface IShapeLoopRepetition extends IBaseRepetition {
    angle: number;
}
/**
 * Props interface.
 * Remember: any size refere to dimension of a scene.
 *
 * @category Core.Interfaces
 */
export interface ISceneChildProps {
    /**
     * It defines the type of repetition.
     * If a number is passed the repetition will be Ring.
     * If an array (1) is passed the repetition will be nxn,
     * if an array (2) the repetition will be nxm
     *
     * @type {(TSceneChildProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    repetitions?: TSceneChildProp<number | Array<number>>;
    /**
     * If the repeat is Ring, pass a numerical value
     * referring to the distance from the center.
     * If the repeat is Matrix, pass an array (2) which refers
     * to the distance between columns and rows.
     *
     * @type {(TSceneChildProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    distance?: TSceneChildProp<number | Array<number>>;
    /**
     * For Ring repeats, define the starting angle of the repeat
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    displace?: TSceneChildProp<number>;
    /**
     * skewX transformation.
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    skewX?: TSceneChildProp<number>;
    /**
     * skewY transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    skewY?: TSceneChildProp<number>;
    /**
     * squeezeX transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    squeezeX?: TSceneChildProp<number>;
    /**
     * squeezeY transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    squeezeY?: TSceneChildProp<number>;
    /**
     * rotateX transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    rotateX?: TSceneChildProp<number>;
    /**
     * rotateY transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    rotateY?: TSceneChildProp<number>;
    /**
     * rotateZ transformation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    rotateZ?: TSceneChildProp<number>;
    /**
     * Origin of rotation
     *
     * @type {TSceneChildProp<number>}
     * @memberof ISceneChildProps
     */
    rotationOrigin?: TSceneChildProp<number>;
    /**
     * scale transformation
     *
     * @type {(TSceneChildProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    scale?: TSceneChildProp<number | Array<number>>;
    /**
     * tranlsate transformation
     *
     * @type {(TSceneChildProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    translate?: TSceneChildProp<number | Array<number>>;
}
/**
 *
 * @category Core.Interfaces
 */
export interface ISceneChildSettings extends ISceneChildProps {
    id?: string | number;
    name?: string;
    order?: number;
    type?: string;
    data?: any;
}
/**
 * Object argument for sceneChild props
 *
 * @category Core.Interfaces
 */
export interface ISceneChildPropArguments {
    repetition: IRepetition;
    context: typeof Context;
    time: number;
    shape?: ShapeBase;
    data?: any;
    parent?: Partial<ISceneChildPropArguments>;
}
/**
 * Value or callable
 *
 * @category Core.Types
 */
export declare type TSceneChildProp<T> = T | {
    (prop_arguments: ISceneChildPropArguments): T;
};
/**
 *
 *
 * @category Core.Interfaces
 */
export interface ISceneChildStreamArguments {
    shape: ShapePrimitive;
    parent?: IBufferIndex;
    data?: any;
    lineWidth: number;
    fillColor: string;
    strokeColor: string;
    buffer: Float32Array;
    frame_buffer_index: number;
    frame_length: number;
    current_shape_index: number;
    total_shapes: number;
    repetition: IRepetition;
}
//# sourceMappingURL=scene-child.d.ts.map