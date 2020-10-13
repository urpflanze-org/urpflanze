import { ISceneChildStreamArguments } from '@core/types/scene-child'

/**
 * @category Core.Types
 */
export type TStreamCallback = (stream_arguments: ISceneChildStreamArguments) => void

/**
 * The object to pass as the argument of a new scene
 *
 * @category Core.Interfaces
 */
export interface ISceneSettings {
	/**
	 * Scene width
	 * @order 1
	 */
	width?: number

	/**
	 * Scene height
	 * @order 2
	 */
	height?: number

	/**
	 * Default background color
	 * @order 3
	 */
	background?: string

	/**
	 * Default stroke color of shapes
	 * @order 4
	 */
	mainColor?: string
}
