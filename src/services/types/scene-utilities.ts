import { IProjectSceneChildData } from '@services/types/exporters-importers'

import SceneChild from '@core/SceneChild'
import {
	ILissajousSettings,
	IPolygonSettings,
	IRoseSettings,
	IShapeBufferSettings,
	IShapeLoopSettings,
	ISpiralSettings,
	ISuperShapeSettings,
} from '@core/types/shape-primitives'
import { IShapeSettings } from '@core/types/shape-base'

/**
 * @category Services.Scene Utilities
 */
export type TSceneUtilityPropTransformation =
	| 'none'
	| 'angle'
	| 'scene-size-percentage'
	| 'scene-size-percentage-inverse'

/**
 * @category Services.Scene Utilities
 */
export type TSceneUtilityPropValue = {
	type: 'transformable-prop'
	value: any
}

/**
 * @category Services.Scene Utilities
 */
export type TSceneChildProps = Omit<
	(IShapeLoopSettings &
		IShapeBufferSettings &
		IShapeSettings &
		IPolygonSettings &
		ILissajousSettings &
		ISpiralSettings &
		IRoseSettings &
		ISuperShapeSettings) & {
		id?: number | string
		name?: string
		order?: number
		data?: IProjectSceneChildData
	},
	'shape'
> & {
	shape?: Float32Array | Array<number> | SceneChild
}
