import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeBufferSettings } from '@core/types/shape-primitives'

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
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		settings.bClosed = false

		super(settings)
	}
}

export default Line
