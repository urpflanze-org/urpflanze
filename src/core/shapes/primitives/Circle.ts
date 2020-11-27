import { PI2 } from '@core/math'
import ShapeLoop from '@core/shapes/ShapeLoop'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeLoopSettings } from '@core/types/shape-primitives'

/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle extends ShapeLoop {
	/**
	 * Creates an instance of Circle.
	 *
	 * @param {ShapeLoopSettings} [settings={}]
	 * @memberof Circle
	 */
	constructor(settings: IShapeLoopSettings = {}) {
		settings.type = 'Circle'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideLength'])
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.loop = {
			start: 0,
			end: PI2,
			inc: propArguments => {
				const sideLength = this.getRepetitionSideLength(propArguments)
				return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ShapeLoop.PId2
			},
			vertex: shapeLoopRepetition => [Math.cos(shapeLoopRepetition.angle), Math.sin(shapeLoopRepetition.angle)],
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}
}

export default Circle
