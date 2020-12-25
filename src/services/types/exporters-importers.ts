import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeLoopAnimation, IVertexCallbackAnimation, TAnimation, TCallableValue } from '@services/types/animation'
import { ISceneChildDrawerData } from '@services/types/drawer'
import { TSceneChildProps, TSceneUtilityPropValue } from '@services/types/scene-utilities'

/**
 * @category Services.Export/Import
 */
export interface IProjectSequence {
	durate: number
	framerate: number
}

/**
 * @category Services.Export/Import
 */
export interface IProject {
	id: string
	name: string
	background: string
	color: string

	width?: number
	height?: number
	resolution?: number

	// DrawOptions
	ratio: number
	backgroundImage?: string
	clear: boolean
	ghosts: number
	ghostSkipTime?: number
	ghostSkipFunction?: number | string | CallableFunction

	// Timeline
	sequence: IProjectSequence

	// Scene
	scene: {
		[key: string]: IProjectSceneChild
	}
}

/**
 * @category Services.Export/Import
 */
export interface IProjectSceneChildData extends ISceneChildDrawerData {
	imported?: boolean
	fill?: { r: number; g: number; b: number; a: number }
	stroke?: { r: number; g: number; b: number; a: number }
	lineWidth?: number
}

/**
 * @category Services.Export/Import
 */
export type IProjectSceneChildProps = {
	[k in keyof Omit<
		TSceneChildProps,
		'id' | 'name' | 'order' | 'data' | 'shape' | 'loop' | 'vertexCallback' // 'adaptMode' | 'bClosed'
	>]: TAnimation | TCallableValue<number | Array<number> | string> | TSceneUtilityPropValue
} & {
	loop?: IShapeLoopAnimation
	vertexCallback?: IVertexCallbackAnimation
}

/**
 * @category Services.Export/Import
 */
export interface IProjectSceneChild {
	type: string
	id: string
	name: string
	order: number
	data: IProjectSceneChildData
	adaptMode?: EShapePrimitiveAdaptMode
	bClosed?: boolean
	bUseParent?: boolean
	vertexCallback?: string
	shape?: Float32Array

	bPrimitive: boolean
	depth: number

	props: IProjectSceneChildProps
	parentId?: string | number
	children?: Array<IProjectSceneChild>
}

/**
 * @category Services.Export/Import
 */
export interface ISVGParsedPath {
	buffer: Float32Array
	closed: boolean
	fill?: string
	stroke?: string
	lineWidth?: number
}

/**
 * @category Services.Export/Import
 */
export interface ISVGParsed {
	viewBox: [number, number, number, number]
	buffers: Array<ISVGParsedPath>
}
