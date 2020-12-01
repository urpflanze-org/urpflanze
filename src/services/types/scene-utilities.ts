import { IProjectSceneChildData } from '@services/types/exporters-importers'

import SceneChild from '@core/SceneChild'
import {
	ILissajousSettings,
	IPolygonSettings,
	IRoseSettings,
	IShapeBufferSettings,
	IShapeLoopSettings,
	ISpiralSettings,
} from '@core/types/shape-primitives'
import { IShapeSettings } from '@core/types/shape-base'

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
		IRoseSettings) & {
		id?: number | string
		name?: string
		order?: number
		data?: IProjectSceneChildData
	},
	'shape'
> & {
	shape?: Float32Array | Array<number> | SceneChild
}
