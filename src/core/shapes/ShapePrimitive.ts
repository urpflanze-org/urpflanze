import ShapeBase from '@core/shapes/ShapeBase'
import {
	ShapePrimitiveProps,
	ShapePrimitiveSettings,
	ShapeBaseProps,
	ShapePrimitiveAdaptMode,
} from '@core/interfaces/shapes/Interfaces'
import { aOr } from '@core/Utilites'
import SceneChild from '@core/SceneChild'
import {
	ShapeBaseStreamIndexing,
	ShapeBasePropArguments,
	ShapeBounding,
	Repetition,
	VertexCallbackGenerator,
} from '@core/types/ShapeBase'
import Vec2, { TArray } from '@core/math/Vec2'

abstract class ShapePrimitive extends ShapeBase {
	/**
	 * Item props
	 *
	 * @protected
	 * @type {ShapePrimitiveProps}
	 * @memberof ShapePrimitive
	 */
	protected props: ShapePrimitiveProps

	/**
	 * Adapt buffer mode
	 *
	 * @type {ShapePrimitiveAdaptMode}
	 * @memberof ShapePrimitive
	 */
	public bAdaptBuffer: ShapePrimitiveAdaptMode

	/**
	 * Define shape is closed
	 *
	 * @type {boolean}
	 * @memberof ShapePrimitive
	 */
	public bCloseShape: boolean

	/**
	 * Scale buffer
	 *
	 * @public
	 * @type {Array<number>}
	 * @memberof ShapePrimitive
	 */
	public sideLength: TArray

	/**
	 * Transform any vertex
	 *
	 * @public
	 * @memberof ShapeBase
	 */
	public vertexCallback?: VertexCallbackGenerator

	constructor(settings: ShapePrimitiveSettings = {}) {
		super(settings)

		this.props.sideLength = aOr(settings.sideLength, [50, 50])

		this.sideLength = Vec2.create(aOr(settings.sideLength, [50, 50]))

		this.props.fillColor = settings.fillColor
		this.props.lineWidth = settings.lineWidth
		this.props.strokeColor = settings.strokeColor

		this.bAdaptBuffer = settings.bAdaptBuffer ?? ShapePrimitiveAdaptMode.None
		this.bCloseShape = settings.bCloseShape ?? true

		this.vertexCallback = settings.vertexCallback
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isStatic(): boolean {
		return (
			typeof this.props.sideLength !==
				'function' /* && typeof this.vertexCallback !== 'function' <- set bStatic to false if vertexCallback as dynamic */ &&
			super.isStatic()
		)
	}

	/**
	 * Get prop
	 *
	 * @param {keyof ShapePrimitiveProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof ShapePrimitive
	 */
	public getProp(key: keyof ShapePrimitiveProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any {
		return super.getProp(key as keyof ShapeBaseProps, prop_arguments, default_value)
	}

	/**
	 * set side length when generate a buffer into shape loop or shape buffer
	 *
	 * @protected
	 * @param {ShapeBasePropArguments} prop_arguments
	 * @memberof ShapePrimitive
	 */
	protected bindSideLength(prop_arguments: ShapeBasePropArguments): void {
		this.sideLength = Vec2.create(this.getProp('sideLength', prop_arguments, [50, 50]))
	}

	/**
	 *
	 *
	 * @protected
	 * @param {TArray} vertex
	 * @memberof ShapePrimitive
	 */
	protected applyVertexTransform(vertex: TArray): void {
		vertex[0] *= this.sideLength[0]
		vertex[1] *= this.sideLength[1]
	}

	/**
	 * Return bCloseShape
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isClosed(): boolean {
		return this.bCloseShape
	}

	/**
	 * Set bCloseShape
	 *
	 * @param {boolean} bCloseShape
	 * @memberof ShapePrimitive
	 */
	public setClosed(bCloseShape: boolean): void {
		this.bCloseShape = bCloseShape
	}

	/**
	 * Return bAdaptBuffer
	 *
	 * @returns {ShapePrimitiveAdaptMode}
	 * @memberof ShapeBase
	 */
	public isAdapted(): ShapePrimitiveAdaptMode {
		return this.bAdaptBuffer as ShapePrimitiveAdaptMode
	}

	/**
	 * Set bAdaptBuffer
	 *
	 * @param {ShapePrimitiveAdaptMode} bAdapted
	 * @memberof ShapeBase
	 */
	public setAdapted(bAdapted: ShapePrimitiveAdaptMode): void {
		this.bAdaptBuffer = bAdapted

		this.clearBuffer(true)
	}

	/**
	 *
	 *
	 * @protected
	 * @param {Array<ShapeBaseStreamIndexing>} buffer
	 * @param {number} frame_length
	 * @param {Repetition} current_repetition
	 * @param {ShapeBaseStreamIndexing} [parent]
	 * @memberof ShapePrimitive
	 */
	protected addIndex(
		buffer: Array<ShapeBaseStreamIndexing>,
		frame_length: number,
		current_repetition: Repetition,
		parent?: ShapeBaseStreamIndexing
	): void {
		const current: ShapeBaseStreamIndexing = {
			shape: this,
			buffer_length: frame_length,
			parent,
			repetition: current_repetition,
		}
		buffer.push(current)
	}

	/**
	 * Get buffer bounding
	 *
	 * @static
	 * @param {Float32Array} buffer
	 * @returns {ShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public static getBounding(buffer: Float32Array): ShapeBounding {
		let minX = Number.MAX_VALUE,
			minY = Number.MAX_VALUE,
			maxX = Number.MIN_VALUE,
			maxY = Number.MIN_VALUE

		for (let i = 0, len = buffer.length; i < len; i += 2) {
			const x = buffer[i]
			const y = buffer[i + 1]

			if (x > maxX) maxX = x
			else if (x < minX) minX = x

			if (y > maxY) maxY = y
			else if (y < minY) minY = y
		}

		return {
			x: minX,
			y: minY,
			cx: (minX + maxX) / 2,
			cy: (minY + maxY) / 2,
			width: maxX - minX,
			height: maxY - minY,
		}
	}

	/**
	 * Return adapted buffer between [-1,-1] and [1,1]
	 *
	 * @public
	 * @static
	 * @param {Float32Array} input
	 * @param {ShapePrimitiveAdaptMode} mode
	 * @returns {Float32Array}
	 * @memberof ShapePrimitive
	 */
	public static adaptBuffer(input: Float32Array, mode: ShapePrimitiveAdaptMode): Float32Array {
		if (mode == ShapePrimitiveAdaptMode.None) return input

		const output: Float32Array = new Float32Array(input.length)
		const rect: ShapeBounding = ShapePrimitive.getBounding(input)

		let scale =
			rect.width > 2 || rect.height > 2 || (mode >= ShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
				? 2 / Math.max(rect.width, rect.height)
				: 1

		let translateX = mode >= ShapePrimitiveAdaptMode.Center ? rect.cx : 0
		let translateY = mode >= ShapePrimitiveAdaptMode.Center ? rect.cy : 0

		for (let i = 0, len = input.length; i < len; i += 2) {
			output[i] = (input[i] - translateX) * scale
			output[i + 1] = (input[i + 1] - translateY) * scale
		}

		return output
	}
}

export default ShapePrimitive
