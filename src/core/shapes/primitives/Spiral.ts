import ShapeLoop from '@core/shapes/ShapeLoop'
import { ISpiralProps, ISpiralSettings, TSpiralType } from '@core/types/shape-primitives'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { vec2 } from 'gl-matrix'
import { PI2 } from '@core/math'

/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends ShapeLoop<ISpiralProps> {
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
		settings.bClosed = false
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

		settings.loopDependencies = (settings.loopDependencies || []).concat([
			'twists',
			'twistsStart',
			'spiral',
			'sideLength',
		])

		super(settings, true)

		this.props.spiral = settings.spiral ?? Spiral.types.ARCHIMEDE
		this.props.twists = settings.twists ?? 2
		this.props.twistsStart = settings.twistsStart ?? 0

		this.loop = {
			start: (propArguments: ISceneChildPropArguments) => PI2 * (this.getProp('twistsStart', propArguments) as number),
			end: (propArguments: ISceneChildPropArguments) =>
				PI2 *
				((this.getProp('twistsStart', propArguments) as number) + (this.getProp('twists', propArguments) as number)),
			inc: (propArguments: ISceneChildPropArguments) => {
				const twists = this.getProp('twists', propArguments) as number
				const rep = PI2 * twists
				const sideLength = this.getRepetitionSideLength(propArguments)
				const radius = 4 + Math.sqrt(sideLength[0] * sideLength[1])

				return rep / (radius * twists)
			},
			vertex: (shapeLoopRepetition: IShapeLoopRepetition, propArguments?: ISceneChildPropArguments): vec2 => {
				const r = Spiral.getRFromTSpiralType(
					this.getProp('spiral', propArguments) as TSpiralType,
					shapeLoopRepetition.angle
				)
				return [r * Math.cos(shapeLoopRepetition.angle), r * Math.sin(shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	// /**
	//  * Set single or multiple props
	//  *
	//  * @param {(keyof ISpiralProps | ISpiralProps)} key
	//  * @param {*} [value]
	//  * @memberof Spiral
	//  */
	// public setProp(key: keyof ISpiralProps | ISpiralProps, value?: any): void {
	// 	key = typeof key === 'string' ? { [key]: value } : key

	// 	if (('twists' in key || 'twistsStart' in key) && this.props.loop) {
	// 		this.props.loop.start = undefined
	// 		this.props.loop.end = undefined
	// 	}

	// 	super.setProp(key as keyof IShapeLoopProps, value)
	// }

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
