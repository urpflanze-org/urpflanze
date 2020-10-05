import ShapePrimitive from './ShapePrimitive'
import ShapeBase from './ShapeBase'
import Vec2 from '@core/math/Vec2'
import Context from '@core/Context'
import { ERepetitionType, IRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import { IShapeLoopGenerator, IShapeLoopProps, IShapeLoopSettings } from '@core/types/shape-primitive'
import { EShapePrimitiveAdaptMode, IShapePrimitiveProps } from '@core/types/shape-base'

/**
 *
 *
 * @export
 * @internal
 * @ignore
 * @interface LoopMeta
 */
export interface LoopMeta {
	start: number
	end: number
	inc: number
	repetition: number
}

/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop extends ShapePrimitive {
	/**
	 * PI2
	 *
	 * @static
	 * @type {number}
	 * @memberof ShapeLoop
	 */
	public static readonly PI2: number = Math.PI * 2

	/**
	 * PI div 2
	 *
	 * @static
	 * @type {number}
	 * @memberof ShapeLoop
	 */
	public static readonly PId2: number = Math.PI / 2

	/**
	 * Empty Prop Arguments
	 *
	 * @static
	 * @type {ISceneChildPropArguments}
	 * @memberof ShapeBase
	 */
	public static readonly EMPTY_PROP_ARGUMENTS: ISceneChildPropArguments = {
		time: 1,
		context: Context,
		repetition: ShapeBase.getEmptyRepetition(),
		shape_loop: {
			type: ERepetitionType.Loop,
			current_index: 0,
			current_offset: 0,
			current_angle: 0,
			current_row: 0,
			current_col: 0,
			current_col_offset: 0,
			current_row_offset: 0,
			count: 0,
			count_col: 0,
			count_row: 0,
			// random_offset: [0, 0]
		},
	}

	/**
	 * Shape loop props
	 *
	 * @protected
	 * @type {IShapeLoopProps}
	 * @memberof ShapeLoops
	 */
	protected props: IShapeLoopProps

	/**
	 * chek if loop generate a static shape
	 *
	 * @protected
	 * @type {boolean}
	 * @memberof ShapeLoop
	 */
	protected bStaticLoop: boolean

	/**
	 * Loop generator
	 *
	 * @protected
	 * @type {IShapeLoopGenerator}
	 * @memberof ShapeLoop
	 */
	protected loop: IShapeLoopGenerator

	/**
	 * Generate static loop buffer whem IShapeLoopGenerator props
	 * haven't dynamic properties
	 *
	 * @protected
	 * @type {Float32Array}
	 * @memberof ShapeLoop
	 */
	protected loop_buffer?: Float32Array

	/**
	 * list of prop has impact on shape loop generation
	 *
	 * @protected
	 * @type {Array<string>}
	 * @memberof ShapeLoop
	 */
	public shapeLoopPropsDependencies: Array<string>

	constructor(settings: IShapeLoopSettings = {}, bPreventGeneration: boolean = false) {
		settings.type = settings.type || 'ShapeLoop'
		super(settings)

		this.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat('bAdaptBuffer')

		this.props.loop = settings.loop

		if (!bPreventGeneration) {
			this.loop = {
				start: 0,
				end: ShapeLoop.PI2,
				inc: ShapeLoop.PI2 / 30,
				vertex: () => Vec2.ZERO,
			}

			this.bStaticLoop = this.isStaticLoop()
			this.bStatic = this.isStatic()
			this.bStaticIndexed = this.isStaticIndexed()
		}
	}

	/**
	 * Check if loop_buffer is static
	 *
	 * @returns {boolean}
	 * @memberof ShapeLoop
	 */
	public isStaticLoop(): boolean {
		// if (typeof this.vertexCallback === 'function') return false
		if (this.shapeLoopPropsDependencies.indexOf('vertexCallback') >= 0 && typeof this.vertexCallback === 'function')
			return false

		if (this.shapeLoopPropsDependencies.indexOf('prop_arguments') >= 0) return false

		for (let i = 0, len = this.shapeLoopPropsDependencies.length; i < len; i++)
			if (typeof this.props[this.shapeLoopPropsDependencies[i] as keyof IShapeLoopProps] === 'function') return false

		return true
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 * @memberof Shape
	 */
	public isStatic(): boolean {
		return this.bStaticLoop && super.isStatic()
	}

	/**
	 * Check if shape has static indexed
	 *
	 * @returns {boolean}
	 * @memberof ShapeBase
	 */
	public isStaticIndexed(): boolean {
		// let start = this.props.loop?.start ?? this.loop.start
		// let end = this.props.loop?.end ?? this.loop.end
		// let inc = this.props.loop?.inc ?? this.loop.inc

		// return typeof start !== 'function' && typeof end !== 'function' &&
		//         typeof inc !== 'function' && super.isStaticIndexed()
		return this.bStaticLoop && super.isStaticIndexed()
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @memberof ShapeLoop
	 */
	public clearBuffer(bClearIndexed: boolean = false, bPropagateToParents: boolean = true) {
		super.clearBuffer(bClearIndexed, bPropagateToParents)

		this.bStaticLoop = this.isStaticLoop()

		if (bClearIndexed) {
			this.loop_buffer = undefined
		}
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof IShapeLoopProps | IShapeLoopProps)} key
	 * @param {*} [value]
	 * @param {boolean} [bClearIndexed=false]
	 * @memberof ShapeLoop
	 */
	public setProp(key: keyof IShapeLoopProps | IShapeLoopProps, value?: any): void {
		let bClearIndexed = false
		key = typeof key === 'string' ? { [key]: value } : key

		for (let i = this.shapeLoopPropsDependencies.length - 1; i >= 0; i--) {
			if (this.shapeLoopPropsDependencies[i] in key) {
				// this.props.loop = undefined
				bClearIndexed = true
				break
			}
		}

		if ('loop' in key) {
			key.loop = { ...this.props.loop, ...key.loop }
			bClearIndexed = true
		}

		super.setProp(key as IShapePrimitiveProps, value, bClearIndexed)
	}

	/**
	 * Get prop
	 *
	 * @param {keyof IShapeLoopProps} key
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof ShapeLoop
	 */
	public getProp(key: keyof IShapeLoopProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		return super.getProp(key as keyof IShapePrimitiveProps, prop_arguments, default_value)
	}

	/**
	 * Return length of buffer
	 *
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	public getBufferLength(prop_arguments: ISceneChildPropArguments): number {
		if (this.bStatic && this.buffer && this.buffer.length > 0) return this.buffer.length

		if (this.bStaticLoop && this.loop_buffer && this.loop_buffer.length > 0)
			return this.loop_buffer.length * this.getRepetitionCount()

		const { repetition } = this.getLoop(prop_arguments)

		return this.getRepetitionCount() * repetition * 2
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generate_id
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {Float32Array}
	 * @memberof ShapeBase
	 */
	protected generateBuffer(generate_id: number, prop_arguments: ISceneChildPropArguments): Float32Array {
		this.bindSideLength(prop_arguments)

		if (!this.bStaticLoop) return this.generateLoopBuffer(prop_arguments)

		if (typeof this.loop_buffer === 'undefined') this.loop_buffer = this.generateLoopBuffer(prop_arguments)

		return this.loop_buffer
	}

	/**
	 * Generate loop buffer
	 *
	 * @private
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {Float32Array}
	 * @memberof ShapeLoop
	 */
	private generateLoopBuffer(prop_arguments: ISceneChildPropArguments): Float32Array {
		const { start, end, inc, repetition } = this.getLoop(prop_arguments)

		const getVertex = (this.props.loop && this.props.loop.vertex ? this.props.loop.vertex : this.loop.vertex) as (
			current_angle: number,
			prop_arguments?: ISceneChildPropArguments
		) => Array<number> | Float32Array

		const shape_loop: IRepetition = {
			current_index: 1,
			current_offset: 0,
			current_angle: 0,
			current_col: 1,
			current_row: 1,
			current_col_offset: 0,
			current_row_offset: 0,
			type: ERepetitionType.Loop,
			// random_offset: [0, 0],
			count: repetition,
			count_col: 1,
			count_row: 1,
		}

		const vertex_length = shape_loop.count
		prop_arguments.shape_loop = shape_loop

		const buffer = new Float32Array(vertex_length * 2)

		for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
			const angle = start + inc * i

			shape_loop.current_angle = angle >= end ? end : angle
			shape_loop.current_index = i + 1
			shape_loop.current_offset = shape_loop.current_index / shape_loop.count

			const vertex = Float32Array.from(getVertex(shape_loop.current_angle, prop_arguments))

			this.vertexCallback && this.vertexCallback(vertex, prop_arguments, i, vertex_length)

			buffer[j] = vertex[0]
			buffer[j + 1] = vertex[1]
		}

		return this.bAdaptBuffer != EShapePrimitiveAdaptMode.None
			? ShapePrimitive.adaptBuffer(buffer, this.bAdaptBuffer as EShapePrimitiveAdaptMode)
			: buffer
	}

	/**
	 * Return information about a client loop gnerator
	 *
	 * @public
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {ShapeLoopInformation}
	 * @memberof ShapeBase
	 */
	public getLoop(prop_arguments: ISceneChildPropArguments = ShapeBase.EMPTY_PROP_ARGUMENTS): LoopMeta {
		prop_arguments.time = this.scene?.current_time || 0

		let start = this.props.loop?.start ?? this.loop.start
		let end = this.props.loop?.end ?? this.loop.end
		let inc = this.props.loop?.inc ?? this.loop.inc

		start = (typeof start === 'function' ? start(prop_arguments) : start) as number
		end = (typeof end === 'function' ? end(prop_arguments) : end) as number
		inc = (typeof inc === 'function' ? inc(prop_arguments) : inc) as number

		const shape_loop_repetition = Math.ceil((end - start) / inc)

		return { start, end, inc, repetition: shape_loop_repetition < 0 ? 0 : shape_loop_repetition }
	}

	/**
	 * Set shape
	 *
	 * @param {(IShapeLoopGenerator)} [shape]
	 * @memberof ShapeBase
	 */
	public setShape(loop: IShapeLoopGenerator): void {
		this.setProp('loop', loop)
	}
}

export default ShapeLoop
