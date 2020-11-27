import ShapeBase from '@core/shapes/ShapeBase'

import {
	EShapePrimitiveAdaptMode,
	IShapeBounding,
	IShapePrimitiveProps,
	IShapePrimitiveSettings,
} from '@core/types/shape-base'
import { IRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import { vec2 } from 'gl-matrix'
import * as glme from '@core/math/gl-matrix-extensions'
import Bounding from '@core/math/bounding'
import { IDrawerStreamProps } from '@services/types/drawer'

/**
 * @category Core.Abstract
 */
abstract class ShapePrimitive<T extends IDrawerStreamProps = IDrawerStreamProps> extends ShapeBase {
	/**
	 * Item props
	 *
	 * @protected
	 * @type {IShapePrimitiveProps}
	 */
	protected props!: IShapePrimitiveProps

	/**
	 * Props retrived by drawer
	 *
	 * @public
	 * @type {T extends IDrawerStreamProps}
	 */
	public style: T

	/**
	 * Adapt buffer mode, see <a href="[base_url]/EShapePrimitiveAdaptMode">EShapePrimitiveAdaptMode</a> for more details
	 *
	 * @type {EShapePrimitiveAdaptMode}
	 */
	public adaptMode: EShapePrimitiveAdaptMode

	/**
	 * Define shape is closed, default true
	 *
	 * @type {boolean}
	 */
	public bClosed: boolean

	/**
	 * Empty buffer bounding
	 *
	 * @static
	 * @type {IShapeBounding}
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
	 * Contain the bounding of the last generated buffer
	 *
	 * @type {IShapeBounding}
	 */
	public currentGenerationPrimitiveBounding: IShapeBounding = { ...ShapePrimitive.EMPTY_BOUNDING }

	/**
	 * Creates an instance of ShapePrimitive.
	 *
	 * @param {IShapePrimitiveSettings} [settings={}]
	 */
	constructor(settings: IShapePrimitiveSettings<T> = {}) {
		super(settings)

		this.props.sideLength =
			typeof settings.sideLength === 'undefined'
				? [50, 50]
				: typeof settings.sideLength === 'function'
				? settings.sideLength
				: (glme.toVec2(settings.sideLength) as [number, number])

		this.style = settings.style || ({} as T)
		this.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None
		this.bClosed = settings.bClosed ?? true
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

	public getRepetitionSideLength(propArguments: ISceneChildPropArguments): vec2 {
		if (this.bStatic) {
			// if undefined, is set to default by constructor
			return this.props.sideLength as [number, number]
		}

		return glme.toVec2(
			this.getProp<IShapePrimitiveProps>('sideLength', propArguments, [50, 50])
		)
	}

	/**
	 * Return a bounding of generated buffer if is direct scene child
	 *
	 * @returns {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public getShapeBounding(): IShapeBounding {
		return this.currentGenerationPrimitiveBounding
	}

	/**
	 * Add this to indexedBuffer
	 *
	 * @protected
	 * @param {number} frameLength
	 * @param {IRepetition} repetition
	 * @returns {number} nextIndex
	 */
	protected addIndex(
		frameLength: number,
		repetition: IRepetition
		// singleRepetitionBounding: IShapeBounding
	): void {
		this.indexedBuffer.push({
			shape: this,
			frameLength,
			// singleRepetitionBounding,
			repetition: {
				type: repetition.type,
				recursion: 1,
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
	 * Return bClosed
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isClosed(): boolean {
		return this.bClosed
	}

	/**
	 * Set bClosed
	 *
	 * @param {boolean} bClosed
	 * @memberof ShapePrimitive
	 */
	public setClosed(bClosed: boolean): void {
		this.bClosed = bClosed
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
		const tmp_bounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, len = buffer.length; i < len; i += 2) {
			Bounding.add(tmp_bounding, buffer[i], buffer[i + 1])
		}

		Bounding.bind(bounding, tmp_bounding)

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

		const scale =
			rect.width >= 2 ||
			rect.height >= 2 ||
			(mode >= EShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
				? 2 / Math.max(rect.width, rect.height)
				: 1

		const translateX = mode >= EShapePrimitiveAdaptMode.Center ? rect.cx : 0
		const translateY = mode >= EShapePrimitiveAdaptMode.Center ? rect.cy : 0

		for (let i = 0, len = input.length; i < len; i += 2) {
			output[i] = (input[i] - translateX) * scale
			output[i + 1] = (input[i + 1] - translateY) * scale
		}

		return output
	}
}

export default ShapePrimitive
