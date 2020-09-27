import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

class Triangle extends ShapeBuffer {
	/**
	 * Creates an instance of Triangle.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: ShapeBufferSettings = {}) {
		settings.type = 'Triangle'
		settings.shape = Float32Array.from([-1, -1, 1, 0, -1, 1])
		settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export default Triangle
