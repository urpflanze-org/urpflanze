import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

const LINE_BUFFER = Float32Array.from([-1, 0, 1, 0])

class Line extends ShapeBuffer {
	/**
	 * Creates an instance of Line.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: ShapeBufferSettings = {}) {
		settings.type = 'Line'
		settings.shape = LINE_BUFFER
		settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export default Line
