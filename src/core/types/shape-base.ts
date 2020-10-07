import {
	IRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildSettings,
	TSceneChildProp,
} from '@core/types/scene-child'
import SceneChild from '@core/SceneChild'
import ShapeBase from '@core/shapes/ShapeBase'

/**
 * Object for index the buffer
 * @category Core.Interfaces
 */
export interface IBufferIndex {
	shape: ShapeBase
	parent?: IBufferIndex
	frame_length: number
	repetition: IRepetition
}

export type TVertexCallback = (
	vertex: Array<number> | Float32Array,
	prop_argumens: ISceneChildPropArguments,
	vertex_index: number,
	vertex_length: number
) => void

export interface IShapeBaseSettings extends ISceneChildSettings {
	bUseParent?: boolean

	vertexCallback?: TVertexCallback
}

// Shape
export interface IShapeSettings extends IShapeBaseSettings {
	shape?: SceneChild
}

// Primitive

export enum EShapePrimitiveAdaptMode {
	/**
	 * @order 1
	 */
	None,
	/**
	 * @order 2
	 */
	Scale = 1 << 1,
	/**
	 * @order 3
	 */
	Center = 1 << 2,
	/**
	 * @order 4
	 */
	Fill = 1 << 3,
}

export interface IShapePrimitiveProps extends ISceneChildProps {
	sideLength?: TSceneChildProp<number | Array<number>>

	fillColor?: TSceneChildProp<number | string>
	lineWidth?: TSceneChildProp<number>
	strokeColor?: TSceneChildProp<number | string>
}

export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
	adaptMode?: EShapePrimitiveAdaptMode
	bCloseShape?: boolean
}

export interface IShapeBounding {
	x: number
	y: number
	cx: number
	cy: number
	width: number
	height: number
}
