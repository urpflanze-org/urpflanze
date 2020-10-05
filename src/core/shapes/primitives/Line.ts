import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeBufferSettings } from '@core/types/shape-primitive'

import ShapeBuffer from '@core/shapes/ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends ShapeBuffer {
	/**
	 * Creates an instance of Line.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: IShapeBufferSettings = {}) {
		settings.type = 'Line'
		settings.shape = [-1, 0, 1, 0]
		settings.bAdaptBuffer = EShapePrimitiveAdaptMode.None

		settings.bCloseShape = false

		super(settings)
	}
}

export default Line
