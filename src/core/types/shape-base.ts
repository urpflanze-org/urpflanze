import { ISceneChildProps, ISceneChildSettings, TSceneChildProp } from '@core/types/scene-child'
import SceneChild from '@core/SceneChild'
import { TVertexCallback } from '@core/types/shape-primitive'

export interface IShapeBaseSettings extends ISceneChildSettings {
	bUseParent?: boolean
}

export interface IShapeSettings extends IShapeBaseSettings {
	shape?: SceneChild
}

export interface IShapePrimitiveProps extends ISceneChildProps {
	sideLength?: TSceneChildProp<number | Array<number>>

	fillColor?: TSceneChildProp<number | string> // fill color
	lineWidth?: TSceneChildProp<number> // stroke width
	strokeColor?: TSceneChildProp<number | string> // stroke color
}

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

export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
	adaptMode?: EShapePrimitiveAdaptMode
	bCloseShape?: boolean

	vertexCallback?: TVertexCallback

	fillColor?: TSceneChildProp<number | string> // fill color
	lineWidth?: TSceneChildProp<number> // stroke width
	strokeColor?: TSceneChildProp<number | string> // stroke color
}

export interface IShapeBounding {
	x: number
	y: number
	cx: number
	cy: number
	width: number
	height: number
}
