import { IProjectSceneChildData } from '@services/types/project'

import SceneChild from '@core/SceneChild'
import {
	ILissajousSettings,
	IRegularPolygonSettings,
	IRoseSettings,
	IShapeBufferSettings,
	IShapeLoopSettings,
	ISpiralSettings,
} from '@core/types/shape-primitive'
import { IShapeSettings } from '@core/types/shape-base'

export type TSceneChildProps = Omit<
	(IShapeLoopSettings &
		IShapeBufferSettings &
		IShapeSettings &
		IRegularPolygonSettings &
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
