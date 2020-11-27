import ShapeLoop from '@core/shapes/ShapeLoop'
import { IRoseProps, IRoseSettings } from '@core/types/shape-primitives'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { vec2 } from 'gl-matrix'
import { PI2 } from '@core/math'

/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends ShapeLoop<IRoseProps> {
	/**
	 * Creates an instance of Rose.
	 *
	 * @param {IRoseSettings} [settings={}]
	 * @memberof Rose
	 */
	constructor(settings: IRoseSettings = {}) {
		settings.type = 'Rose'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd', 'sideLength'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

		super(settings, true)

		this.props.n = settings.n ?? 1
		this.props.d = settings.d ?? 2

		this.loop = {
			start: 0,
			end: (propArguments: ISceneChildPropArguments) =>
				Rose.getFinalAngleFromK(this.getProp('n', propArguments) as number, this.getProp('d', propArguments) as number),
			inc: (propArguments: ISceneChildPropArguments) => {
				const n = this.getProp('n', propArguments) as number
				const d = this.getProp('d', propArguments) as number
				const sideLength = this.getRepetitionSideLength(propArguments)
				const sides = Math.pow(sideLength[0] * sideLength[1], 0.45)
				const k = d < n ? n / d : 1.5

				return PI2 / (sides * k)
			},

			vertex: (shapeLoopRepetition: IShapeLoopRepetition, propArguments?: ISceneChildPropArguments): vec2 => {
				const k = (this.getProp('n', propArguments) as number) / (this.getProp('d', propArguments) as number)
				const f = Math.cos(k * shapeLoopRepetition.angle)

				return [f * Math.cos(shapeLoopRepetition.angle), f * Math.sin(shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
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
		if (n == d) return PI2

		const k = n / d
		const p = n * d

		if (!Number.isInteger(k) && k % 0.5 == 0) return 4 * Math.PI

		return Math.PI * d * (p % 2 == 0 ? 2 : 1)
	}
}

export default Rose
