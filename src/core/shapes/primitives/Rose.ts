import ShapeLoop from '@core/shapes/ShapeLoop'
import { IRoseProps, IRoseSettings, IShapeLoopProps } from '@core/types/shape-primitive'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { vec2 } from 'gl-matrix'

/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends ShapeLoop {
	protected props: IRoseProps

	/**
	 * Creates an instance of Rose.
	 *
	 * @param {IRoseSettings} [settings={}]
	 * @memberof Rose
	 */
	constructor(settings: IRoseSettings = {}) {
		settings.type = 'Rose'
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['n', 'd', 'sideLength'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

		super(settings, true)

		this.props.n = settings.n ?? 1
		this.props.d = settings.d ?? 2

		this.loop = {
			start: 0,
			end: (prop_arguments: ISceneChildPropArguments) =>
				Rose.getFinalAngleFromK(this.getProp('n', prop_arguments), this.getProp('d', prop_arguments)),
			inc: (prop_arguments: ISceneChildPropArguments) => {
				const n = this.getProp('n', prop_arguments)
				const d = this.getProp('d', prop_arguments)

				const sides = Math.pow(this.sideLength[0] * this.sideLength[1], 0.45)
				const k = d < n ? n / d : 1.5

				return ShapeLoop.PI2 / (sides * k)
			},

			vertex: (shape_loop_repetition: IShapeLoopRepetition, prop_arguments?: ISceneChildPropArguments): vec2 => {
				const k = this.getProp('n', prop_arguments) / this.getProp('d', prop_arguments)
				const f = Math.cos(k * shape_loop_repetition.angle)

				return [f * Math.cos(shape_loop_repetition.angle), f * Math.sin(shape_loop_repetition.angle)]
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
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof Rose
	 */
	public getProp(key: keyof IRoseProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		return super.getProp(key as keyof IShapeLoopProps, prop_arguments, default_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof IRoseProps | IRoseSettings)} key
	 * @param {*} [value]
	 * @memberof Rose
	 */
	public setProp(key: keyof IRoseProps | IRoseSettings, value?: any): void {
		super.setProp(key as keyof IShapeLoopProps, value)
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
