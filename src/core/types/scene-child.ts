import ShapeBase from '@core/shapes/ShapeBase'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import Context from '@core/Context'
import { IBufferIndex } from '@core/types/shape-base'

/**
 * Repetition type enumerator.
 *
 * @category Core.Enums
 * @internal
 * @enum {number}
 */
export enum ERepetitionType {
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
	Matrix = 2,

	/**
	 * Defines the type of shape generation
	 * @order 3
	 */
	Loop = 3,
}

/**
 * Information about current shape repetition.
 * The meaning values ​​change according to the <mark>type</mark> of repetition
 *
 * @category Core.Interfaces
 * @type RepetitionLoop
 */
export interface IRepetition {
	/**
	 * Define the type of repetition
	 */
	type: ERepetitionType

	/**
	 * Current angle
	 */
	current_angle: number
	current_index: number
	current_offset: number
	count: number

	current_col: number
	current_col_offset: number
	count_col: number

	current_row: number
	current_row_offset: number
	count_row: number
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
	repetitions?: TSceneChildProp<number | Array<number>> // number of shape repetitions

	/**
	 * If the repeat is Ring, pass a numerical value
	 * referring to the distance from the center.
	 * If the repeat is Matrix, pass an array (2) which refers
	 * to the distance between columns and rows.
	 *
	 * @type {(TSceneChildProp<number | Array<number>>)}
	 * @memberof ISceneChildProps
	 */
	distance?: TSceneChildProp<number | Array<number>>

	/**
	 * For Ring repeats, define the starting angle of the repeat
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	displace?: TSceneChildProp<number>

	/**
	 * skewX transformation.
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	skewX?: TSceneChildProp<number>

	/**
	 * skewY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	skewY?: TSceneChildProp<number>

	/**
	 * squeezeX transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	squeezeX?: TSceneChildProp<number>

	/**
	 * squeezeY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	squeezeY?: TSceneChildProp<number>

	/**
	 * rotateX transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	rotateX?: TSceneChildProp<number>

	/**
	 * rotateY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	rotateY?: TSceneChildProp<number>

	/**
	 * rotateZ transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 */
	rotateZ?: TSceneChildProp<number>

	/**
	 * scale transformation
	 *
	 * @type {(TSceneChildProp<number | Array<number>>)}
	 * @memberof ISceneChildProps
	 */
	scale?: TSceneChildProp<number | Array<number>>

	/**
	 * tranlsate transformation
	 *
	 * @type {(TSceneChildProp<number | Array<number>>)}
	 * @memberof ISceneChildProps
	 */
	translate?: TSceneChildProp<number | Array<number>>
}

/**
 * Object
 *
 * @category Core.Interfaces
 * @interface ISceneChildSettings
 * @extends {ISceneChildProps}
 */
export interface ISceneChildSettings extends ISceneChildProps {
	id?: string | number
	name?: string
	order?: number
	type?: string
	data?: any
}

// /**
//  *
//  * @category Core.Interfaces
//  * @interface IContext
//  */
// export interface IContext {
// 	noise: (seed: string, x: number, y: number, z: number) => number

// 	angle: (repetition: IRepetition, offsetFromCenter: number | TArray) => number

// 	angle2: (repetition: IRepetition, offsetFromCenter: number | TArray) => number

// 	distance: (repetition: IRepetition, offsetFromCenter: number | TArray) => number

// 	percW: (percentage: number, shape: SceneChild) => number

// 	percH: (percentage: number, shape: SceneChild) => number
// }

/**
 * Object argument for sceneChild props
 *
 * @category Core.Interfaces
 * @interface ISceneChildPropArguments
 */
export interface ISceneChildPropArguments {
	repetition: IRepetition
	shape_loop?: IRepetition
	context: typeof Context
	time: number
	shape?: ShapeBase
	data?: any

	parent?: Partial<ISceneChildPropArguments>
}

export type TSceneChildProp<T> = T | { (prop_arguments: ISceneChildPropArguments): T }

export interface ISceneChildStreamArguments {
	shape: ShapePrimitive
	parent?: IBufferIndex

	data?: any

	lineWidth: number
	fillColor: string
	strokeColor: string

	buffer: Float32Array
	frame_buffer_index: number
	frame_length: number

	current_shape_index: number
	total_shapes: number

	repetition: IRepetition
}
