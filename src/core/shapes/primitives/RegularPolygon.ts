import { RegularPolygonProps, RegularPolygonSettings } from '@core/interfaces/shapes/PrimitiveInterfaces'

import ShapeLoop from '../ShapeLoop'
import { ShapeBasePropArguments } from '@core/types/ShapeBase'
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'

/**
 * Polygon shape
 *
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
class RegularPolygon extends ShapeLoop {
	protected props: RegularPolygonProps

	constructor(settings: RegularPolygonSettings = {}) {
		settings.type = settings.type || 'RegularPolygon'
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideNumber'])
		settings.bAdaptBuffer = settings.bAdaptBuffer ?? ShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: (prop_arguments: ShapeBasePropArguments) => ShapeLoop.PI2 / this.getProp('sideNumber', prop_arguments, 5),
			vertex: angle => {
				return [Math.cos(angle), Math.sin(angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof RegularPolygonProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof RegularPolygonProps
	 */
	public getProp(key: keyof RegularPolygonProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any {
		return super.getProp(key as keyof ShapeLoopProps, prop_arguments, default_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof RegularPolygonProps | RegularPolygonSettings)} key
	 * @param {*} [value]
	 * @memberof RegularPolygonProps
	 */
	public setProp(key: keyof RegularPolygonProps | RegularPolygonSettings, value?: any): void {
		super.setProp(key as keyof ShapeLoopProps, value)
	}
}

export default RegularPolygon
