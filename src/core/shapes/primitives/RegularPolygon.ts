import { IRegularPolygonProps, IRegularPolygonSettings } from '@core/types/shape-primitives'
import ShapeLoop from '@core/shapes/ShapeLoop'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments } from '@core/types/scene-child'
import { PI2 } from '@core/math'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
class RegularPolygon extends ShapeLoop<IRegularPolygonProps> {
	constructor(settings: IRegularPolygonSettings = {}) {
		settings.type = settings.type || 'RegularPolygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: PI2,
			inc: (propArguments: ISceneChildPropArguments) =>
				PI2 / ((this.getProp('sideNumber', propArguments, 5) as number) + 1),
			vertex: shapeLoopRepetition => {
				return [Math.cos(shapeLoopRepetition.angle), Math.sin(shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}
}

export default RegularPolygon
