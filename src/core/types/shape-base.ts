import {
	IBaseRepetition,
	IRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildSettings,
	TSceneChildProp,
} from '@core/types/scene-child'
import SceneChild from '@core/SceneChild'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import Shape from '@core/shapes/Shape'

/**
 * Object for index the buffer
 *
 * @category Core.Interfaces
 */
export interface IBufferIndex {
	/**
	 * Reference to shape
	 */
	shape: ShapePrimitive
	/**
	 * Parent indexing
	 */
	parent?: Omit<IBufferIndex, 'shape'> & { shape: Shape }
	/**
	 * Frame length
	 */
	frame_length: number

	/**
	 * Current repetition reference oof frame
	 */
	repetition: IRepetition
}

/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export type TVertexCallback = (
	vertex: Array<number> | Float32Array,
	prop_arguments: ISceneChildPropArguments,
	vertex_repetition: IBaseRepetition
) => void

/**
 * ShapeBaseSettings
 *
 * @category Core.Types
 */
export interface IShapeBaseSettings extends ISceneChildSettings {
	bUseParent?: boolean

	vertexCallback?: TVertexCallback
}

// Shape

/**
 * Shape settings
 *
 * @category Core.Interfaces
 */
export interface IShapeSettings extends IShapeBaseSettings {
	shape?: SceneChild
}

/**
 *
 *
 * @category Core.Enums
 */
export enum EShapePrimitiveAdaptMode {
	/**
	 * The buffer is not changed
	 * @order 1
	 */
	None,

	/**
	 * The buffer is scaled in a range between [-1, -1] and [1,1]
	 * @order 2
	 */
	Scale = 1 << 1,

	/**
	 * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
	 * @order 3
	 */
	Center = 1 << 2,

	/**
	 * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
	 * @order 4
	 */
	Fill = 1 << 3,
}

/**
 *
 * @category Core.Interfaces
 */
export interface IShapePrimitiveProps extends ISceneChildProps {
	sideLength?: TSceneChildProp<number | Array<number>>

	fillColor?: TSceneChildProp<number | string>
	lineWidth?: TSceneChildProp<number>
	strokeColor?: TSceneChildProp<number | string>
}

/**
 *
 * @category Core.Interfaces
 */
export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
	adaptMode?: EShapePrimitiveAdaptMode
	bCloseShape?: boolean
}

/**
 *
 * @category Core.Interfaces
 */
export interface IShapeBounding {
	x: number
	y: number
	cx: number
	cy: number
	width: number
	height: number
}
