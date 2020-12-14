import {
	IBaseRepetition,
	IRecursionRepetition,
	IRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildSettings,
	TSceneChildProp,
} from '@core/types/scene-child'
import SceneChild from '@core/SceneChild'
import ShapeBase from '@core/shapes/ShapeBase'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import { IDrawerStreamProps } from '@services/types/drawer'

/**
 * Parent Index
 *
 * @internal
 */
export interface IParentBufferIndex {
	/**
	 * Reference to shape
	 */
	shape: ShapeBase
	/**
	 * Parent indexing
	 */
	parent?: IParentBufferIndex
	/**
	 * Frame length
	 */
	frameLength: number

	/**
	 * Current repetition reference of frame
	 */
	repetition: IRepetition

	/**
	 * Current recursion
	 */
	recursion?: IRecursionRepetition

	// singleRepetitionBounding: IShapeBounding
}
/**
 * Object for index the buffer
 *
 * @category Core.Interfaces
 */
export interface IBufferIndex extends Omit<IParentBufferIndex, 'shape' | 'recursion'> {
	/**
	 * Reference to shape
	 */
	shape: ShapePrimitive
}

/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export type TVertexCallback = (
	vertex: [number, number, number],
	vertexRepetition: IBaseRepetition,
	propArguments: ISceneChildPropArguments
) => void

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
	bUseParent?: boolean

	bUseRecursion?: boolean

	/**
	 * Callback to apply transform at any vertex
	 *
	 * @order -13
	 */
	vertexCallback?: TVertexCallback
}

// Shape

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
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveProps extends ISceneChildProps {
	/**
	 * scalar that multiplies the buffer or loop
	 * @order -20
	 */
	sideLength?: TSceneChildProp<number | Array<number>>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveSettings<T extends IDrawerStreamProps = IDrawerStreamProps>
	extends IShapePrimitiveProps,
		IShapeBaseSettings {
	/**
	 * Adapt buffer mode, see <a href="[base_url]/EShapePrimitiveAdaptMode">EShapePrimitiveAdaptMode</a> for more details
	 * @order -16
	 */
	adaptMode?: EShapePrimitiveAdaptMode

	/**
	 * Callback to apply transform at any vertex
	 * @order -15.5
	 */
	bClosed?: boolean

	/**
	 *
	 * @order -15
	 */
	style?: T
}

/**
 * Shape recursive animate props
 */
export interface IShapeRecursiveProps extends ISceneChildProps {
	recursions?: TSceneChildProp<number>
	recursionScale?: TSceneChildProp<number>
	recursionVertex?: TSceneChildProp<number>
}

/**
 * ShapeRecursive settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveSettings extends IShapeRecursiveProps, IShapeSettings {
	// /**
	//  * Decide position of recursions
	//  *
	//  *
	//  * @order -21
	//  */
	// bInner?: boolean
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
	x: number

	/**
	 * @order 2
	 */
	y: number

	/**
	 * @order 3
	 */
	cx: number
	/**
	 * @order 4
	 */
	cy: number

	/**
	 * @order 5
	 */
	width: number

	/**
	 * @order 5
	 */
	height: number
}
