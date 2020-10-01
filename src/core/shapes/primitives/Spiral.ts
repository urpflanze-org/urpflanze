import { ShapeBasePropArguments, ShapeLoopGenerator } from '@core/types/ShapeBase'
import { SpiralType } from '@core/types/Spiral'
import { SpiralProps, SpiralSettings } from '@core/interfaces/shapes/PrimitiveInterfaces'

import Uttilities from 'src/Utilites'

import ShapeLoop from '../ShapeLoop'
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'

/**
 * Spiral shape
 *
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends ShapeLoop {
	protected props: SpiralProps

	/**
	 * Spural types
	 *
	 * @static
	 * @type {{ [name in SpiralType]: SpiralType }}
	 * @memberof Spiral
	 */
	public static readonly types: { [name in SpiralType]: SpiralType } = {
		ARCHIMEDE: 'ARCHIMEDE',
		HYPERBOLIC: 'HYPERBOLIC',
		FERMAT: 'FERMAT',
		LITUUS: 'LITUUS',
		LOGARITHMIC: 'LOGARITHMIC',
	}

	/**
	 * Creates an instance of Spiral.
	 *
	 * @param {SpiralSettings} [settings={}]
	 * @memberof Spiral
	 */
	constructor(settings: SpiralSettings = {}) {
		settings.type = 'Spiral'
		settings.bCloseShape = false
		settings.bAdaptBuffer = settings.bAdaptBuffer ?? ShapePrimitiveAdaptMode.None

		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
			'twists',
			'twists_start',
			'spiral',
			'sideLength',
		])

		super(settings, true)

		this.props.spiral = settings.spiral ?? Spiral.types.ARCHIMEDE
		this.props.twists = settings.twists ?? 2
		this.props.twists_start = settings.twists_start ?? 0

		this.loop = {
			start: (prop_arguments: ShapeBasePropArguments) => ShapeLoop.PI2 * this.getProp('twists_start', prop_arguments),
			end: (prop_arguments: ShapeBasePropArguments) =>
				ShapeLoop.PI2 * (this.getProp('twists_start', prop_arguments) + this.getProp('twists', prop_arguments)),
			inc: (prop_arguments: ShapeBasePropArguments) => {
				// const twists = this.getProp('twists', prop_arguments)
				// const rep = ShapeLoop.PI2 * twists
				// const radius = 2 * Math.sqrt(this.sideLength[0] * this.sideLength[1])

				// return rep / (radius)

				const twists = this.getProp('twists', prop_arguments)
				const rep = ShapeLoop.PI2 * twists
				const radius = 4 + Math.sqrt(this.sideLength[0] * this.sideLength[1])

				return rep / (radius * twists)
			},
			vertex: (angle: number, prop_arguments?: ShapeBasePropArguments): Array<number> => {
				const r = Spiral.getRFromSpiralType(this.getProp('spiral', prop_arguments), angle)
				return [r * Math.cos(angle), r * Math.sin(angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof SpiralProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [defaul_value]
	 * @returns {*}
	 * @memberof Spiral
	 */
	public getProp(key: keyof SpiralProps, prop_arguments?: ShapeBasePropArguments, defaul_value?: any): any {
		return super.getProp(key as keyof ShapeLoopProps, prop_arguments, defaul_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof SpiralProps | SpiralSettings)} key
	 * @param {*} [value]
	 * @memberof Spiral
	 */
	public setProp(key: keyof SpiralProps | SpiralSettings, value?: any): void {
		key = typeof key === 'string' ? { [key]: value } : key

		if (('twists' in key || 'twists_start' in key) && this.props.loop) {
			this.props.loop.start = undefined
			this.props.loop.end = undefined
		}

		super.setProp(key as keyof ShapeLoopProps, value)
	}

	/**
	 * Point position and scale factor for spiral types
	 *
	 * @static
	 * @param {SpiralType} spiral
	 * @param {number} angle
	 * @returns {number}
	 * @memberof Spiral
	 */
	static getRFromSpiralType(spiral: SpiralType, angle: number): number {
		switch (spiral) {
			case Spiral.types.ARCHIMEDE:
				return angle / 10
			case Spiral.types.HYPERBOLIC:
				return (1 / angle) * 3
			case Spiral.types.FERMAT:
				return angle ** 0.5 / 3
			case Spiral.types.LITUUS:
				return angle ** -0.5
			case Spiral.types.LOGARITHMIC:
				return Math.E ** (angle * 0.2) / 10
		}

		return 1
	}
}

export default Spiral
