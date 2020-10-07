import ShapeLoop from '../ShapeLoop'
import { IShapeLoopProps, ISpiralProps, ISpiralSettings, TSpiralType } from '@core/types/shape-primitive'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'

/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends ShapeLoop {
	protected props: ISpiralProps

	/**
	 * Spural types
	 *
	 * @static
	 * @type {{ [name in TSpiralType]: TSpiralType }}
	 * @memberof Spiral
	 */
	public static readonly types: { [name in TSpiralType]: TSpiralType } = {
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
	constructor(settings: ISpiralSettings = {}) {
		settings.type = 'Spiral'
		settings.bCloseShape = false
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

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
			start: (prop_arguments: ISceneChildPropArguments) => ShapeLoop.PI2 * this.getProp('twists_start', prop_arguments),
			end: (prop_arguments: ISceneChildPropArguments) =>
				ShapeLoop.PI2 * (this.getProp('twists_start', prop_arguments) + this.getProp('twists', prop_arguments)),
			inc: (prop_arguments: ISceneChildPropArguments) => {
				// const twists = this.getProp('twists', prop_arguments)
				// const rep = ShapeLoop.PI2 * twists
				// const radius = 2 * Math.sqrt(this.sideLength[0] * this.sideLength[1])

				// return rep / (radius)

				const twists = this.getProp('twists', prop_arguments)
				const rep = ShapeLoop.PI2 * twists
				const radius = 4 + Math.sqrt(this.sideLength[0] * this.sideLength[1])

				return rep / (radius * twists)
			},
			vertex: (
				shape_loop_repetition: IShapeLoopRepetition,
				prop_arguments?: ISceneChildPropArguments
			): Array<number> => {
				const r = Spiral.getRFromTSpiralType(this.getProp('spiral', prop_arguments), shape_loop_repetition.angle)
				return [r * Math.cos(shape_loop_repetition.angle), r * Math.sin(shape_loop_repetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof ISpiralProps} key
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [defaul_value]
	 * @returns {*}
	 * @memberof Spiral
	 */
	public getProp(key: keyof ISpiralProps, prop_arguments?: ISceneChildPropArguments, defaul_value?: any): any {
		return super.getProp(key as keyof IShapeLoopProps, prop_arguments, defaul_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof ISpiralProps | ISpiralProps)} key
	 * @param {*} [value]
	 * @memberof Spiral
	 */
	public setProp(key: keyof ISpiralProps | ISpiralProps, value?: any): void {
		key = typeof key === 'string' ? { [key]: value } : key

		if (('twists' in key || 'twists_start' in key) && this.props.loop) {
			this.props.loop.start = undefined
			this.props.loop.end = undefined
		}

		super.setProp(key as keyof IShapeLoopProps, value)
	}

	/**
	 * Point position and scale factor for spiral types
	 *
	 * @static
	 * @param {TSpiralType} spiral
	 * @param {number} angle
	 * @returns {number}
	 * @memberof Spiral
	 */
	static getRFromTSpiralType(spiral: TSpiralType, angle: number): number {
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
