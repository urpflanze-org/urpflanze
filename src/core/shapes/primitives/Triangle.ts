import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

/**
 * Triangle ShapeBuffer
 */
class Triangle extends ShapeBuffer {
	/**
	 * Creates an instance of Triangleeee.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: ShapeBufferSettings = {}) {
		settings.type = 'Triangle'
		settings.shape = [-1, -1, 1, 0, -1, 1]
		settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export default Triangle
