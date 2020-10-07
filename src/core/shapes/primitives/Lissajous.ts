import ShapeLoop from '@core/shapes/ShapeLoop'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ILissajousProps, ILissajousSettings, IShapeLoopProps } from '@core/types/shape-primitive'

/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop {
	protected props: ILissajousProps

	/**
	 * Creates an instance of Lissajous.
	 *
	 * @param {ILissajousSettings} [settings={}]
	 * @memberof Lissajous
	 */
	constructor(settings: ILissajousSettings = {}) {
		settings.type = 'Lissajous'
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
			'wx',
			'wy',
			'wz',
			'sideLength',
		])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

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
			vertex: (
				shape_loop_repetition: IShapeLoopRepetition,
				prop_arguments?: ISceneChildPropArguments
			): Array<number> => {
				const wx = this.getProp('wx', prop_arguments)
				const wy = this.getProp('wy', prop_arguments)
				const wz = this.getProp('wz', prop_arguments, 0)

				return wx == wy
					? [Math.cos(shape_loop_repetition.angle + wz), Math.sin(shape_loop_repetition.angle)]
					: [Math.cos(wx * shape_loop_repetition.angle + wz), Math.sin(wy * shape_loop_repetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof ILissajousProps} key
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof Lissajous
	 */
	public getProp(key: keyof ILissajousProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		return super.getProp(key as keyof IShapeLoopProps, prop_arguments, default_value)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof ILissajousProps | ILissajousProps)} key
	 * @param {*} [value]
	 * @memberof Lissajous
	 */
	public setProp(key: keyof ILissajousProps | ILissajousProps, value?: any): void {
		super.setProp(key as keyof IShapeLoopProps, value)
	}
}

export default Lissajous
