import { ShapeBasePropArguments, ShapeLoopGenerator } from '@core/types/ShapeBase'

import ShapeLoop from '../ShapeLoop'
import { RoseProps, RoseSettings } from '@core/interfaces/shapes/PrimitiveInterfaces'
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'

/**
 * Rose shape
 *
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends ShapeLoop {
	protected props: RoseProps

	/**
	 * Creates an instance of Rose.
	 *
	 * @param {RoseSettings} [settings={}]
	 * @memberof Rose
	 */
	constructor(settings: RoseSettings = {}) {
		settings.type = 'Rose'
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['n', 'd', 'sideLength'])
		settings.bAdaptBuffer = settings.bAdaptBuffer ?? ShapePrimitiveAdaptMode.Scale

		super(settings, true)

		this.props.n = settings.n ?? 1
		this.props.d = settings.d ?? 2

		this.loop = {
			start: 0,
			end: (prop_arguments: ShapeBasePropArguments) =>
				Rose.getFinalAngleFromK(this.getProp('n', prop_arguments), this.getProp('d', prop_arguments)),
			inc: (prop_arguments: ShapeBasePropArguments) => {
				const n = this.getProp('n', prop_arguments)
				const d = this.getProp('d', prop_arguments)

				const sides = Math.pow(this.sideLength[0] * this.sideLength[1], 0.45)
				const k = d < n ? n / d : 1.5

				return ShapeLoop.PI2 / (sides * k)
			},

			vertex: (angle: number, prop_arguments?: ShapeBasePropArguments): Array<number> => {
				const k = this.getProp('n', prop_arguments) / this.getProp('d', prop_arguments)
				const f = Math.cos(k * angle)

				return [f * Math.cos(angle), f * Math.sin(angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof RoseProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof Rose
	 */
	public getProp(key: keyof RoseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any {
		return super.getProp(key as keyof ShapeLoopProps, prop_arguments, default_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof RoseProps | RoseSettings)} key
	 * @param {*} [value]
	 * @memberof Rose
	 */
	public setProp(key: keyof RoseProps | RoseSettings, value?: any): void {
		super.setProp(key as keyof ShapeLoopProps, value)
	}

	/**
	 * Return end angle of rose
	 *
	 * @static
	 * @param {number} n
	 * @param {number} d
	 * @returns {number}
	 * @memberof Rose
	 */
	static getFinalAngleFromK(n: number, d: number): number {
		if (n == d) return ShapeLoop.PI2

		const k = n / d
		const p = n * d

		if (!Number.isInteger(k) && k % 0.5 == 0) return 4 * Math.PI

		return Math.PI * d * (p % 2 == 0 ? 2 : 1)
	}
}

export default Rose
