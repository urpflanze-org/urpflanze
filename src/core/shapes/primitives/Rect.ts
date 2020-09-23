import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

const RECT_BUFFER = Float32Array.from([-1, -1, 1, -1, 1, 1, -1, 1])

class Rect extends ShapeBuffer {
	/**
	 * Creates an instance of Rect.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Rect
	 */
	constructor(settings: ShapeBufferSettings = {}) {
		settings.type = 'Rect'
		settings.shape = RECT_BUFFER
		settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export default Rect
