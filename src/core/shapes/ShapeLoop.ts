import ShapePrimitive from './ShapePrimitive'
import ShapeBase from './ShapeBase'
import { IShapeLoopRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import {
	IShapeLoopGenerator,
	IShapeLoopProps,
	IShapeLoopSettings,
	TShapeLoopGeneratorFormula,
} from '@core/types/shape-primitive'
import { EShapePrimitiveAdaptMode, IShapePrimitiveProps } from '@core/types/shape-base'
import Bounding, { TTempBounding } from '@core/math/bounding'

/**
 *
 *
 * @export
 * @internal
 * @ignore
 * @interface ILoopMeta
 */
export interface ILoopMeta {
	start: number
	end: number
	inc: number
	count: number
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
	public static readonly PI2: number = Math.PI * 2

	public static readonly PId2: number = Math.PI / 2

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
	public shapeLoopPropsDependencies: Array<'vertexCallback' | 'prop_arguments' | string>

	/**
	 * Creates an instance of ShapeLoop.
	 *
	 * @param {IShapeLoopSettings} [settings={}]
	 * @param {boolean} [bPreventGeneration=false]
	 * @memberof ShapeLoop
	 */
	constructor(settings: IShapeLoopSettings = {}, bPreventGeneration = false) {
		settings.type = settings.type || 'ShapeLoop'
		super(settings)

		this.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat('bAdaptBuffer')

		this.props.loop = settings.loop

		if (!bPreventGeneration) {
			this.loop = {
				start: 0,
				end: ShapeLoop.PI2,
				inc: ShapeLoop.PI2 / 10,
				vertex: () => [0, 0],
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
		if (this.shapeLoopPropsDependencies.includes('vertexCallback') && typeof this.vertexCallback === 'function')
			return false

		if (this.shapeLoopPropsDependencies.includes('prop_arguments')) return false

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

		// return (
		// 	typeof start !== 'function' && typeof end !== 'function' && typeof inc !== 'function' && super.isStaticIndexed()
		// )

		return this.bStaticLoop && super.isStaticIndexed()
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @memberof ShapeLoop
	 */
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
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

		const { count } = this.getLoop(prop_arguments)

		return this.getRepetitionCount() * count * 2 // vec3
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
		else if (typeof this.loop_buffer === 'undefined') this.loop_buffer = this.generateLoopBuffer(prop_arguments)

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
		const { start, end, inc, count } = this.getLoop(prop_arguments)

		const getVertex = (this.props.loop && this.props.loop.vertex
			? this.props.loop.vertex
			: this.loop.vertex) as TShapeLoopGeneratorFormula

		const shape_loop: IShapeLoopRepetition = {
			index: 0,
			offset: 0,
			angle: 0,
			count: count,
		}

		const vertex_length = shape_loop.count
		const buffer_length = vertex_length * 2
		const loop_buffer = new Float32Array(buffer_length)

		const bNoAdapt = this.adaptMode === EShapePrimitiveAdaptMode.None

		const tmp_bounding: TTempBounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
			const angle = start + inc * i

			shape_loop.angle = angle >= end ? end : angle
			shape_loop.index = i + 1
			shape_loop.offset = shape_loop.index / shape_loop.count

			const vertex = Float32Array.from(getVertex(shape_loop, prop_arguments))

			loop_buffer[j] = vertex[0]
			loop_buffer[j + 1] = vertex[1]

			if (bNoAdapt) {
				loop_buffer[j] *= this.sideLength[0]
				loop_buffer[j + 1] *= this.sideLength[1]
			}

			Bounding.add(tmp_bounding, loop_buffer[j], loop_buffer[j + 1])
		}

		Bounding.bind(this.single_bounding, tmp_bounding)

		if (!bNoAdapt) {
			/**
			 * Adapt and apply side length
			 */
			const buffer = ShapePrimitive.adaptBuffer(loop_buffer, this.adaptMode as EShapePrimitiveAdaptMode)

			Bounding.clear(tmp_bounding)

			for (let i = 0; i < buffer_length; i += 2) {
				buffer[i] = buffer[i] * this.sideLength[0]
				buffer[i + 1] = buffer[i + 1] * this.sideLength[1]

				Bounding.add(tmp_bounding, buffer[i], buffer[i + 1])
			}

			Bounding.bind(this.single_bounding, tmp_bounding)

			return buffer
		}

		return loop_buffer
	}

	/**
	 * Return information about a client loop gnerator
	 *
	 * @public
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {ShapeLoopInformation}
	 * @memberof ShapeBase
	 */
	public getLoop(prop_arguments: ISceneChildPropArguments = ShapeBase.EMPTY_PROP_ARGUMENTS): ILoopMeta {
		prop_arguments.time = this.scene?.current_time || 0

		let start = this.props.loop?.start ?? this.loop.start
		let end = this.props.loop?.end ?? this.loop.end
		let inc = this.props.loop?.inc ?? this.loop.inc

		start = (typeof start === 'function' ? start(prop_arguments) : start) as number
		end = (typeof end === 'function' ? end(prop_arguments) : end) as number
		inc = (typeof inc === 'function' ? inc(prop_arguments) : inc) as number

		const count = Math.ceil((end - start) / inc)

		return { start, end, inc, count: count <= 0 ? 0 : count }
	}

	/**
	 * Set shape from loop generator
	 *
	 * @param {(IShapeLoopGenerator)} [shape]
	 * @memberof ShapeBase
	 */
	public setShape(loop: IShapeLoopGenerator): void {
		this.setProp('loop', loop)
	}
}

export default ShapeLoop
