import ShapeLoop from '@core/shapes/ShapeLoop'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ILissajousProps, ILissajousSettings } from '@core/types/shape-primitive'
import { vec2 } from 'gl-matrix'

/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop {
	protected props!: ILissajousProps

	/**
	 * Creates an instance of Lissajous.
	 *
	 * @param {ILissajousSettings} [settings={}]
	 * @memberof Lissajous
	 */
	constructor(settings: ILissajousSettings = {}) {
		settings.type = 'Lissajous'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz', 'sideLength'])
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.wx = settings.wx || 1
		this.props.wy = settings.wy || 2
		this.props.wz = settings.wz || 0

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: propArguments => {
				const wx = this.getProp<ILissajousProps>('wx', propArguments) as number
				const wy = this.getProp<ILissajousProps>('wy', propArguments) as number

				const ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01
				const sideLength = this.getRepetitionSideLength(propArguments)
				return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio
			},
			vertex: (shapeLoopRepetition: IShapeLoopRepetition, propArguments?: ISceneChildPropArguments): vec2 => {
				const wx = this.getProp<ILissajousProps>('wx', propArguments) as number
				const wy = this.getProp<ILissajousProps>('wy', propArguments) as number
				const wz = this.getProp<ILissajousProps>('wz', propArguments, 0) as number

				return wx == wy
					? [Math.cos(shapeLoopRepetition.angle + wz), Math.sin(shapeLoopRepetition.angle)]
					: [Math.cos(wx * shapeLoopRepetition.angle + wz), Math.sin(wy * shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}
}

export default Lissajous
