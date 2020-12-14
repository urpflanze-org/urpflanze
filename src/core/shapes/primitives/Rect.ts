import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeBufferSettings } from '@core/types/shape-primitives'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect extends ShapeBuffer {
	/**
	 * Creates an instance of Rect.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Rect
	 */
	constructor(settings: IShapeBufferSettings = {}) {
		settings.type = 'Rect'
		settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1]
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export default Rect
