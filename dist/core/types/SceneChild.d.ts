import IContext from '@core/interfaces/Context';
import ShapeBase from '@core/shapes/ShapeBase';
/**
 * Repetition type enumerator.
 *
 *
 * @export
 * @enum {number}
 */
export declare enum ERepetitionType {
    /**
     * Defines the type of repetition of the shape, in a circular way starting from the center of the scene
     */
    Ring = 1,
    /**
     * Defines the type of repetition of the shape, on a nxm grid starting from the center of the scene
     */
    Matrix = 2,
    /**
     * Defines the type of shape generation
     */
    Loop = 3
}
/**
 * Information about current shape repetition
 *
 * @type RepetitionLoop
 */
export interface IRepetition {
    count_row: number;
    count_col: number;
    count: number;
    current_index: number;
    current_offset: number;
    type: ERepetitionType;
    current_col: number;
    current_col_offset: number;
    current_row: number;
    current_row_offset: number;
    current_angle: number;
}
/**
 * Props interface.
 * Remember: any size refere to dimension of a scene.
 */
export interface ISceneChildProps {
    /**
     * It defines the type of repetition.
     * If a number is passed the repetition will be Ring.
     * If an array (1) is passed the repetition will be nxn,
     * if an array (2) the repetition will be nxm
     *
     * @type {(TShapeBaseProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    repetitions?: TShapeBaseProp<number | Array<number>>;
    /**
     * If the repeat is Ring, pass a numerical value referring to the distance from the center.
     * If the repeat is Matrix, pass an array (2) which refers to the distance between columns and rows.
     *
     * @type {(TShapeBaseProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    distance?: TShapeBaseProp<number | Array<number>>;
    /**
     * For Ring repeats, define the starting angle of the repeat
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    displace?: TShapeBaseProp<number>;
    /**
     * skewX transformation.
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    skewX?: TShapeBaseProp<number>;
    /**
     * skewY transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    skewY?: TShapeBaseProp<number>;
    /**
     * squeezeX transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    squeezeX?: TShapeBaseProp<number>;
    /**
     * squeezeY transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    squeezeY?: TShapeBaseProp<number>;
    /**
     * rotateX transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    rotateX?: TShapeBaseProp<number>;
    /**
     * rotateY transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    rotateY?: TShapeBaseProp<number>;
    /**
     * rotateZ transformation
     *
     * @type {TShapeBaseProp<number>}
     * @memberof ISceneChildProps
     */
    rotateZ?: TShapeBaseProp<number>;
    /**
     * scale transformation
     *
     * @type {(TShapeBaseProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    scale?: TShapeBaseProp<number | Array<number>>;
    /**
     * tranlsate transformation
     *
     * @type {(TShapeBaseProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    translate?: TShapeBaseProp<number | Array<number>>;
    /**
     * Origin transformation, between [-1, -1] and [1, 1]
     *
     * @type {(TShapeBaseProp<number | Array<number>>)}
     * @memberof ISceneChildProps
     */
    rotationOrigin?: TShapeBaseProp<number | Array<number>>;
}
/**
 * Object
 *
 * @export
 * @interface ISceneChildSettings
 * @extends {ISceneChildProps}
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
 * @export
 * @interface ISceneChildPropArguments
 */
export interface ISceneChildPropArguments {
    repetition: IRepetition;
    shape_loop?: IRepetition;
    context: IContext;
    time: number;
    shape?: ShapeBase;
    data?: any;
    parent?: Partial<ISceneChildPropArguments>;
}
export declare type TShapeBaseProp<T> = T | {
    (prop_arguments: ISceneChildPropArguments): T;
};
/**
 * Object for index the buffer
 *
 * @type ShapeBaseStreamIndexing
 */
export declare type ISceneChildStreamIndexing = {
    shape: ShapeBase;
    parent?: ISceneChildStreamIndexing;
    buffer_length: number;
    repetition: IRepetition;
};
export declare type ISceneChildStreamArguments = {
    shape: ShapeBase;
    parent?: ISceneChildStreamIndexing;
    data?: any;
    lineWidth: number;
    fillColor: string;
    strokeColor: string;
    buffer: Float32Array;
    buffer_length: number;
    current_buffer_index: number;
    current_shape_index: number;
    total_shapes: number;
    repetition: IRepetition;
};
//# sourceMappingURL=SceneChild.d.ts.map