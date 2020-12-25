import ShapeLoop from '@core/shapes/ShapeLoop'
import { ISuperShapeProps, ISuperShapeSettings } from '@core/types/shape-primitives'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments, IShapeLoopRepetition } from '@core/types/scene-child'
import { vec2 } from 'gl-matrix'
import { PI2 } from '@core/math'

/**
 * ShperShape
 *
 * @category Core.Primitives
 * @class SuperShape
 * @extends {ShapeLoop}
 */
class SuperShape extends ShapeLoop<ISuperShapeProps> {
	private a!: number
	private b!: number
	private m!: number
	private n1!: number
	private n2!: number
	private n3!: number

	/**
	 * Creates an instance of SuperShape.
	 *
	 * @param {ISuperShapeSettings} [settings={}]
	 * @memberof SuperShape
	 */
	constructor(settings: ISuperShapeSettings = {}) {
		settings.type = 'SuperShape'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['a', 'b', 'm', 'n1', 'n2', 'n3'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

		super(settings, true)

		this.props.a = settings.a ?? 1
		this.props.b = settings.b ?? 1
		this.props.m = settings.m ?? 6
		this.props.n1 = settings.n1 ?? 1
		this.props.n2 = settings.n2 ?? 1
		this.props.n3 = settings.n3 ?? 1

		this.loop = {
			start: 0,
			end: PI2,
			inc: propArguments => {
				const sideLength = this.getRepetitionSideLength(propArguments)
				return Math.PI / Math.pow(sideLength[0] * sideLength[1], 0.5)
			},

			vertex: (shapeLoopRepetition: IShapeLoopRepetition): vec2 => {
				const angle = shapeLoopRepetition.angle
				const m = (this.m * angle) / 4
				const a = Math.abs(Math.cos(m) / this.a) ** this.n2
				const b = Math.abs(Math.sin(m) / this.b) ** this.n3

				const raux = (a + b) ** (1 / this.n1)
				const r = raux === 0 ? 1 : 1 / raux

				return [r * Math.cos(angle), r * Math.sin(angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: ISceneChildPropArguments): Float32Array {
		this.a = this.getProp('a', propArguments) as number
		this.b = this.getProp('b', propArguments) as number
		this.m = this.getProp('m', propArguments) as number
		this.n1 = this.getProp('n1', propArguments) as number
		this.n2 = this.getProp('n2', propArguments) as number
		this.n3 = this.getProp('n3', propArguments) as number

		return super.generateLoopBuffer(propArguments)
	}
}

export default SuperShape
