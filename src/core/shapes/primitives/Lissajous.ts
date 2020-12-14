import { PI2 } from '@core/math'
import ShapeLoop from '@core/shapes/ShapeLoop'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ILissajousProps, ILissajousSettings } from '@core/types/shape-primitives'
import { vec2 } from 'gl-matrix'

/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends ShapeLoop<ILissajousProps> {
	private wx!: number
	private wy!: number
	private wz!: number

	/**
	 * Creates an instance of Lissajous.
	 *
	 * @param {ILissajousSettings} [settings={}]
	 * @memberof Lissajous
	 */
	constructor(settings: ILissajousSettings = {}) {
		settings.type = 'Lissajous'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz'])
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.wx = settings.wx || 1
		this.props.wy = settings.wy || 2
		this.props.wz = settings.wz || 0

		this.loop = {
			start: 0,
			end: PI2,
			inc: propArguments => {
				const wx = this.getProp('wx', propArguments) as number
				const wy = this.getProp('wy', propArguments) as number

				const ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01
				const sideLength = this.getRepetitionSideLength(propArguments)
				return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio
			},
			vertex: (shapeLoopRepetition: IShapeLoopRepetition): vec2 => {
				return this.wx === this.wy
					? [Math.cos(shapeLoopRepetition.angle + this.wz), Math.sin(shapeLoopRepetition.angle)]
					: [Math.cos(this.wx * shapeLoopRepetition.angle + this.wz), Math.sin(this.wy * shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: ISceneChildPropArguments): Float32Array {
		this.wx = this.getProp('wx', propArguments, 1)
		this.wy = this.getProp('wy', propArguments, 2)
		this.wz = this.getProp('wz', propArguments, 2)

		return super.generateLoopBuffer(propArguments)
	}
}

export default Lissajous
