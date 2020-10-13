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
import { vec2 } from 'gl-matrix'

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

	constructor(settings: IShapeLoopSettings = {}, bPreventGeneration: boolean = false) {
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

		return this.getRepetitionCount() * repetition * 2 // vec3
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
		const { start, end, inc, repetition } = this.getLoop(prop_arguments)

		const getVertex = (this.props.loop && this.props.loop.vertex
			? this.props.loop.vertex
			: this.loop.vertex) as TShapeLoopGeneratorFormula

		const shape_loop: IShapeLoopRepetition = {
			index: 0,
			offset: 0,
			angle: 0,
			count: repetition,
		}

		const vertex_length = shape_loop.count

		const buffer = new Float32Array(vertex_length * 2)

		let minX = Number.MAX_VALUE,
			minY = Number.MAX_VALUE,
			maxX = Number.MIN_VALUE,
			maxY = Number.MIN_VALUE

		for (let i = 0, j = 0; i < vertex_length; i++, j += 2) {
			const angle = start + inc * i

			shape_loop.angle = angle >= end ? end : angle
			shape_loop.index = i + 1
			shape_loop.offset = shape_loop.index / shape_loop.count

			const vertex = Float32Array.from(getVertex(shape_loop, prop_arguments))

			buffer[j] = vertex[0] * this.sideLength[0]
			buffer[j + 1] = vertex[1] * this.sideLength[1]

			if (buffer[j] >= maxX) maxX = buffer[j]
			else if (buffer[j] <= minX) minX = buffer[j]

			if (buffer[j + 1] >= maxY) maxY = buffer[j + 1]
			else if (buffer[j + 1] <= minY) minY = buffer[j + 1]
		}

		this.single_bounding = {
			x: minX,
			y: minY,
			cx: (minX + maxX) / 2,
			cy: (minY + maxY) / 2,
			width: maxX - minX,
			height: maxY - minY,
		}

		if (this.adaptMode !== EShapePrimitiveAdaptMode.None) {
			const final_buffer = ShapePrimitive.adaptBuffer(
				buffer,
				this.adaptMode as EShapePrimitiveAdaptMode,
				this.single_bounding
			)

			minX = Number.MAX_VALUE
			minY = Number.MAX_VALUE
			maxX = Number.MIN_VALUE
			maxY = Number.MIN_VALUE

			for (let i = 0; i < vertex_length; i += 2) {
				buffer[i] = final_buffer[i] * this.sideLength[0]
				buffer[i + 1] = final_buffer[i + 1] * this.sideLength[1]
				if (buffer[i] >= maxX) maxX = buffer[i]
				else if (buffer[i] <= minX) minX = buffer[i]
				if (buffer[i + 1] >= maxY) maxY = buffer[i + 1]
				else if (buffer[i + 1] <= minY) minY = buffer[i + 1]
			}

			this.single_bounding = {
				x: minX,
				y: minY,
				cx: (minX + maxX) / 2,
				cy: (minY + maxY) / 2,
				width: maxX - minX,
				height: maxY - minY,
			}
		}

		return buffer
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

		const shape_loop_repetition = Math.ceil((end - start) / inc)

		return { start, end, inc, repetition: shape_loop_repetition < 0 ? 0 : shape_loop_repetition }
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
