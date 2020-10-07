import ShapeBase from '@core/shapes/ShapeBase'

import Vec2, { TArray } from '@core/math/Vec2'
import {
	EShapePrimitiveAdaptMode,
	IShapeBounding,
	IShapePrimitiveProps,
	IShapePrimitiveSettings,
} from '@core/types/shape-base'
import { IRepetition, ISceneChildPropArguments, ISceneChildProps } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'

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
	 * Adapt buffer mode, see <a href="[base_url]/EShapePrimitiveAdaptMode">EShapePrimitiveAdaptMode</a> for more details
	 *
	 * @type {EShapePrimitiveAdaptMode}
	 * @memberof ShapePrimitive
	 */
	public adaptMode: EShapePrimitiveAdaptMode

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

	constructor(settings: IShapePrimitiveSettings = {}) {
		super(settings)

		this.sideLength = Vec2.create(
			typeof settings.sideLength === 'number' || Array.isArray(settings.sideLength) ? settings.sideLength : [50, 50]
		)

		this.props.sideLength = settings.sideLength

		this.props.fillColor = settings.fillColor
		this.props.lineWidth = settings.lineWidth
		this.props.strokeColor = settings.strokeColor

		this.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None
		this.bCloseShape = settings.bCloseShape ?? true
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isStatic(): boolean {
		return typeof this.props.sideLength !== 'function' && super.isStatic()
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
		return super.getProp(key as keyof ISceneChildProps, prop_arguments, default_value)
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
	 * Apply side length to buffer
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
	 * Add this to indexed_buffer
	 *
	 * @protected
	 * @param {number} frame_length
	 * @param {IRepetition} repetition
	 * @memberof ShapePrimitive
	 */
	protected addIndex(frame_length: number, repetition: IRepetition) {
		const indexed_buffer = this.indexed_buffer as Array<IBufferIndex>
		indexed_buffer.push({
			shape: this,
			frame_length,
			repetition: {
				type: repetition.type,
				angle: repetition.angle,
				index: repetition.index,
				count: repetition.count,
				offset: repetition.offset,
				row: {
					index: repetition.row.index,
					count: repetition.row.count,
					offset: repetition.row.offset,
				},
				col: {
					index: repetition.col.index,
					count: repetition.col.count,
					offset: repetition.col.offset,
				},
			},
		})
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
	 * Return adaptMode
	 *
	 * @returns {EShapePrimitiveAdaptMode}
	 * @memberof ShapeBase
	 */
	public getAdaptMode(): EShapePrimitiveAdaptMode {
		return this.adaptMode as EShapePrimitiveAdaptMode
	}

	/**
	 * Set adaptMode
	 *
	 * @param {EShapePrimitiveAdaptMode} bAdapted
	 * @memberof ShapeBase
	 */
	public adapt(adaptMode: EShapePrimitiveAdaptMode): void {
		this.adaptMode = adaptMode

		this.clearBuffer(true)
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
