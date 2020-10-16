import ShapeBase from '@core/shapes/ShapeBase'

import {
	EShapePrimitiveAdaptMode,
	IShapeBounding,
	IShapePrimitiveProps,
	IShapePrimitiveSettings,
} from '@core/types/shape-base'
import { IRepetition, ISceneChildPropArguments, ISceneChildProps } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'
import { vec2 } from 'gl-matrix'
import { toVec2 } from '@core/math/gl-matrix-extensions'

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
	 * Empty buffer bounding
	 *
	 * @static
	 * @type {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	static readonly EMPTY_BOUNDING: IShapeBounding = {
		cx: 0,
		cy: 0,
		x: -1,
		y: -1,
		width: 2,
		height: 2,
	}

	/**
	 * Scale buffer
	 *
	 * @public
	 * @type {Array<number>}
	 * @memberof ShapePrimitive
	 */
	public sideLength: vec2

	/**
	 * Shape bounding
	 *
	 * @type {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public single_bounding: IShapeBounding = { ...ShapePrimitive.EMPTY_BOUNDING }

	/**
	 * Creates an instance of ShapePrimitive.
	 *
	 * @param {IShapePrimitiveSettings} [settings={}]
	 * @memberof ShapePrimitive
	 */
	constructor(settings: IShapePrimitiveSettings = {}) {
		super(settings)

		const sideLength: Array<number> =
			typeof settings.sideLength === 'number'
				? [settings.sideLength, settings.sideLength]
				: Array.isArray(settings.sideLength)
				? settings.sideLength
				: [50, 50]

		this.sideLength = sideLength as vec2
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
	public getProp(key: keyof IShapePrimitiveProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		return super.getProp(key as keyof ISceneChildProps, prop_arguments, default_value)
	}

	/**
	 * set side length when generate a buffer into shape loop or shape buffer
	 *
	 * @protected
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @memberof ShapePrimitive
	 */
	protected bindSideLength(prop_arguments: ISceneChildPropArguments): boolean {
		const sideLength = toVec2(this.getProp('sideLength', prop_arguments, [50, 50]))

		if (this.sideLength[0] !== sideLength[0] && this.sideLength[1] !== sideLength[1]) {
			this.sideLength = sideLength
			return true
		}

		return false
	}

	/**
	 * Return a bounding of generated buffer if is direct scene child
	 *
	 * @param {boolean} bDirectSceneChild
	 * @returns {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public getBounding(bDirectSceneChild: boolean): IShapeBounding {
		return bDirectSceneChild ? this.single_bounding : this.bounding
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
	public static getBounding(buffer: Float32Array, bounding?: IShapeBounding): IShapeBounding {
		if (typeof bounding === 'undefined') bounding = { ...ShapePrimitive.EMPTY_BOUNDING }

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

		bounding.x = minX
		bounding.y = minY
		bounding.width = maxX - minX
		bounding.height = maxY - minY
		bounding.cx = bounding.x - bounding.width / 2
		bounding.cy = bounding.y - bounding.height / 2

		return bounding
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
	public static adaptBuffer(input: Float32Array, mode: EShapePrimitiveAdaptMode, rect?: IShapeBounding): Float32Array {
		if (mode === EShapePrimitiveAdaptMode.None) return Float32Array.from(input)

		const output: Float32Array = new Float32Array(input.length)

		if (!rect) {
			rect = ShapePrimitive.getBounding(input)
		}

		let scale =
			rect.width >= 2 ||
			rect.height >= 2 ||
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
