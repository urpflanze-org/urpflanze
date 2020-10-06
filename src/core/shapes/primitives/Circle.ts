import ShapeLoop from '@core/shapes/ShapeLoop'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeLoopSettings } from '@core/types/shape-primitive'

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
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideLength'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

		super(settings)

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: () => (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * ShapeLoop.PId2,
			vertex: angle => [Math.cos(angle), Math.sin(angle)],
		}
	}
}

export default Circle
