import { IRegularPolygonProps, IRegularPolygonSettings } from '@core/types/shape-primitive'
import ShapeLoop from '@core/shapes/ShapeLoop'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments } from '@core/types/scene-child'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
class RegularPolygon extends ShapeLoop {
	protected props!: IRegularPolygonProps

	constructor(settings: IRegularPolygonSettings = {}) {
		settings.type = settings.type || 'RegularPolygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: (propArguments: ISceneChildPropArguments) =>
				ShapeLoop.PI2 / ((this.getProp<IRegularPolygonProps>('sideNumber', propArguments, 5) as number) + 1),
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
