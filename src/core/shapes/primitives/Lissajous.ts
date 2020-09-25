import { ShapeBasePropArguments } from '@core/types/ShapeBase'

import ShapeLoop from '@core/shapes/ShapeLoop'
import { LissajousProps, LissajousSettings } from '@core/interfaces/shapes/PrimitiveInterfaces'
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'

/**
 * Lissajous shape
 *
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop {
	protected props: LissajousProps

	/**
	 * Creates an instance of Lissajous.
	 *
	 * @param {LissajousSettings} [settings={}]
	 * @memberof Lissajous
	 */
	constructor(settings: LissajousSettings = {}) {
		settings.type = 'Lissajous'
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
			'wx',
			'wy',
			'wz',
			'sideLength',
		])
		settings.bAdaptBuffer = settings.bAdaptBuffer ?? ShapePrimitiveAdaptMode.Scale

		super(settings, true)

		this.props.wx = settings.wx || 1
		this.props.wy = settings.wy || 2
		this.props.wz = settings.wz || 0

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: prop_arguments => {
				const wx = this.getProp('wx', prop_arguments)
				const wy = this.getProp('wy', prop_arguments)

				const ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01

				return (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * ratio
			},
			vertex: (angle: number, prop_arguments?: ShapeBasePropArguments): Array<number> => {
				const wx = this.getProp('wx', prop_arguments)
				const wy = this.getProp('wy', prop_arguments)
				const wz = this.getProp('wz', prop_arguments, 0)

				return wx == wy ? [Math.cos(angle + wz), Math.sin(angle)] : [Math.cos(wx * angle + wz), Math.sin(wy * angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof LissajousProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof Lissajous
	 */
	public getProp(key: keyof LissajousProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any {
		return super.getProp(key as keyof ShapeLoopProps, prop_arguments, default_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof LissajousProps | LissajousSettings)} key
	 * @param {*} [value]
	 * @memberof Lissajous
	 */
	public setProp(key: keyof LissajousProps | LissajousSettings, value?: any): void {
		super.setProp(key as keyof ShapeLoopProps, value)
	}
}

export default Lissajous
