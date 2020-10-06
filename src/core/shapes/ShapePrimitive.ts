import ShapeBase from '@core/shapes/ShapeBase'

import Vec2, { TArray } from '@core/math/Vec2'
import {
	EShapePrimitiveAdaptMode,
	IShapeBounding,
	IShapePrimitiveProps,
	IShapePrimitiveSettings,
} from '@core/types/shape-base'
import {
	IRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildStreamIndexing,
} from '@core/types/scene-child'
import { TVertexCallback } from '@core/types/shape-primitive'
import Context from '@core/Context'

/**
 * @category Core.Abstract
 */
abstract class ShapePrimitive extends ShapeBase {
	/**
	 * Item props
	 *
	 * @protected
	 * @type {IShapePrimitiveProps}
	 * @memberof ShapePrimitive
	 */
	protected props: IShapePrimitiveProps

	/**
	 * Adapt buffer mode
	 *
	 * @type {EShapePrimitiveAdaptMode}
	 * @memberof ShapePrimitive
	 */
	public bAdaptBuffer: EShapePrimitiveAdaptMode

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
	public vertexCallback?: TVertexCallback

	constructor(settings: IShapePrimitiveSettings = {}) {
		super(settings)

		this.props.sideLength = settings.sideLength ?? [50, 50]

		this.sideLength = Vec2.create(
			typeof settings.sideLength === 'number' || Array.isArray(settings.sideLength) ? settings.sideLength : [50, 50]
		)

		this.props.fillColor = settings.fillColor
		this.props.lineWidth = settings.lineWidth
		this.props.strokeColor = settings.strokeColor

		this.bAdaptBuffer = settings.bAdaptBuffer ?? EShapePrimitiveAdaptMode.None
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
	 * @param {keyof IShapePrimitiveProps} key
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof ShapePrimitive
	 */
	getProp(key: keyof IShapePrimitiveProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		const value = super.getProp(key as keyof ISceneChildProps, prop_arguments, default_value)

		// if (key === 'rotationOrigin') {
		// 	const clone = Vec2.create(value)
		// 	Vec2.scale(clone, this.sideLength)
		// 	return clone
		// }

		return value
	}

	/**
	 * set side length when generate a buffer into shape loop or shape buffer
	 *
	 * @protected
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @memberof ShapePrimitive
	 */
	protected bindSideLength(prop_arguments: ISceneChildPropArguments): void {
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
	 * @returns {EShapePrimitiveAdaptMode}
	 * @memberof ShapeBase
	 */
	public isAdapted(): EShapePrimitiveAdaptMode {
		return this.bAdaptBuffer as EShapePrimitiveAdaptMode
	}

	/**
	 * Set bAdaptBuffer
	 *
	 * @param {EShapePrimitiveAdaptMode} bAdapted
	 * @memberof ShapeBase
	 */
	public setAdapted(bAdapted: EShapePrimitiveAdaptMode): void {
		this.bAdaptBuffer = bAdapted

		this.clearBuffer(true)
	}

	/**
	 *
	 *
	 * @protected
	 * @param {Array<ISceneChildStreamIndexing>} buffer
	 * @param {number} frame_length
	 * @param {Repetition} current_repetition
	 * @param {ISceneChildStreamIndexing} [parent]
	 * @memberof ShapePrimitive
	 */
	protected addIndex(
		buffer: Array<ISceneChildStreamIndexing>,
		frame_length: number,
		current_repetition: IRepetition,
		parent?: ISceneChildStreamIndexing
	): void {
		const prop_arguments: ISceneChildPropArguments = {
			shape: this,
			repetition: current_repetition,
			context: Context,
			time: 0,
			parent: parent,
			data: this.data,
		}

		const fillColor = this.getProp('fillColor', prop_arguments)
		const lineWidth = this.getProp('lineWidth', prop_arguments)
		const strokeColor = this.getProp(
			'strokeColor',
			prop_arguments,
			fillColor && typeof lineWidth === 'undefined' ? undefined : this.scene?.mainColor
		)

		const current: ISceneChildStreamIndexing = {
			shape: this,
			buffer_length: frame_length,
			parent,
			repetition: current_repetition,
			lineWidth,
			strokeColor,
			fillColor,
		}

		buffer.push(current)
	}

	/**
	 * Get buffer bounding
	 *
	 * @static
	 * @param {Float32Array} buffer
	 * @returns {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public static getBounding(buffer: Float32Array): IShapeBounding {
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
	 * @param {EShapePrimitiveAdaptMode} mode
	 * @returns {Float32Array}
	 * @memberof ShapePrimitive
	 */
	public static adaptBuffer(input: Float32Array, mode: EShapePrimitiveAdaptMode): Float32Array {
		if (mode == EShapePrimitiveAdaptMode.None) return input

		const output: Float32Array = new Float32Array(input.length)
		const rect: IShapeBounding = ShapePrimitive.getBounding(input)

		let scale =
			rect.width > 2 ||
			rect.height > 2 ||
			(mode >= EShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
				? 2 / Math.max(rect.width, rect.height)
				: 1

		let translateX = mode >= EShapePrimitiveAdaptMode.Center ? rect.cx : 0
		let translateY = mode >= EShapePrimitiveAdaptMode.Center ? rect.cy : 0

		for (let i = 0, len = input.length; i < len; i += 2) {
			output[i] = (input[i] - translateX) * scale
			output[i + 1] = (input[i + 1] - translateY) * scale
		}

		return output
	}
}

export default ShapePrimitive
