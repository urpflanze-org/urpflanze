import { IProjectSceneChildData } from '@services/types/project'
import {
	RegularPolygonSettings,
	LissajousSettings,
	SpiralSettings,
	RoseSettings,
} from '@core/interfaces/shapes/PrimitiveInterfaces'
import { ShapeBufferSettings, ShapeLoopSettings, ShapeSettings } from '@core/interfaces/shapes/Interfaces'
import SceneChild from '@core/SceneChild'

export type TSceneChildProps = Omit<
	(ShapeLoopSettings &
		ShapeBufferSettings &
		ShapeSettings &
		RegularPolygonSettings &
		LissajousSettings &
		SpiralSettings &
		RoseSettings) & {
		id?: number | string
		name?: string
		order?: number
		data?: IProjectSceneChildData
	},
	'shape'
> & {
	shape?: Float32Array | Array<number> | SceneChild
}
