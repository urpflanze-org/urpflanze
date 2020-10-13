import ShapePrimitive from '@core/shapes/ShapePrimitive'
import { ISceneChildPropArguments } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeBufferSettings } from '@core/types/shape-primitive'

/**
 * @category Core.Shapes
 */
class ShapeBuffer extends ShapePrimitive {
	/**
	 * Custom vertex buffer or shape
	 *
	 * Float32Array between -1, 1
	 *
	 * @type {Float32Array}
	 * @memberof ShapeBuffer
	 */
	public shape: Float32Array

	/**
	 * Adapted buffer
	 *
	 * @private
	 * @type {Float32Array}
	 * @memberof ShapeBuffer
	 */
	private shape_buffer: Float32Array

	constructor(settings: IShapeBufferSettings = {}) {
		settings.type = settings.type || 'ShapeBuffer'
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.Scale

		super(settings)

		if (typeof settings.shape === 'undefined') {
			console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property')
			this.shape = ShapeBuffer.EMPTY_BUFFER
		} else this.shape = Float32Array.from(settings.shape)

		this.bindBuffer()

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
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

		this.bindBuffer()
		// this.shape_buffer = ShapeBuffer.buffer2Dto3D(this.shape_buffer)
	}

	private bindBuffer() {
		const shape_buffer =
			this.adaptMode !== EShapePrimitiveAdaptMode.None
				? ShapePrimitive.adaptBuffer(this.shape, this.adaptMode)
				: Float32Array.from(this.shape)

		let minX = Number.MAX_VALUE,
			minY = Number.MAX_VALUE,
			maxX = Number.MIN_VALUE,
			maxY = Number.MIN_VALUE

		for (let i = 0, len = shape_buffer.length; i < len; i += 2) {
			shape_buffer[i] *= this.sideLength[0]
			shape_buffer[i + 1] *= this.sideLength[1]

			if (shape_buffer[i] >= maxX) maxX = shape_buffer[i]
			else if (shape_buffer[i] <= minX) minX = shape_buffer[i]

			if (shape_buffer[i + 1] >= maxY) maxY = shape_buffer[i + 1]
			else if (shape_buffer[i + 1] <= minY) minY = shape_buffer[i + 1]
		}

		this.single_bounding.x = minX
		this.single_bounding.y = minY
		this.single_bounding.width = maxX - minX
		this.single_bounding.height = maxY - minY
		this.single_bounding.cx = this.single_bounding.x + this.single_bounding.width / 2
		this.single_bounding.cy = this.single_bounding.y + this.single_bounding.height / 2

		this.shape_buffer = shape_buffer
	}
	/**
	 * Return length of buffer
	 *
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	public getBufferLength(): number {
		if (this.buffer && this.buffer.length > 0) return this.buffer.length

		return this.shape_buffer.length * this.getRepetitionCount()
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
		if (this.bindSideLength(prop_arguments)) {
			this.bindBuffer()
		}

		return this.shape_buffer
	}

	/**
	 * Set shape
	 *
	 * @param {(Float32Array)} [shape]
	 * @memberof ShapeBase
	 */
	public setShape(shape: Float32Array): void {
		this.shape = shape

		this.clearBuffer(true)
	}

	/**
	 * Subdivide buffer n times
	 *
	 * @param {number} [level=1]
	 * @memberof ShapeBuffer
	 */
	public subdivide(level: number = 1) {
		let subdivided: Float32Array | undefined = this.shape

		if (subdivided && subdivided.length > 0) {
			for (let i = 0; i < level; i++) subdivided = ShapeBuffer.subdivide(subdivided, this.bCloseShape)

			this.setShape(subdivided)
		}
	}

	/**
	 * Subdivide buffer
	 *
	 * @static
	 * @param {Float32Array} shape
	 * @param {boolean} [bClosed=true]
	 * @returns {(Float32Array)}
	 * @memberof ShapeBuffer
	 */
	public static subdivide(shape: Float32Array, bClosed = true): Float32Array {
		const shape_len = shape.length
		const subdivided = new Float32Array(shape_len * 2 - (bClosed ? 0 : 2))

		for (let i = 0; i < shape_len; i += 2) {
			if (i === 0) {
				subdivided[0] = shape[0]
				subdivided[1] = shape[1]
			} else {
				const px = shape[i - 2]
				const py = shape[i - 1]

				const x = shape[i]
				const y = shape[i + 1]

				const nx = (x + px) / 2
				const ny = (y + py) / 2

				subdivided[(i - 1) * 2] = nx
				subdivided[(i - 1) * 2 + 1] = ny

				subdivided[i * 2] = x
				subdivided[i * 2 + 1] = y
			}
		}

		if (bClosed) {
			subdivided[(shape_len - 1) * 2] = (shape[0] + shape[shape_len - 2]) / 2
			subdivided[(shape_len - 1) * 2 + 1] = (shape[1] + shape[shape_len - 1]) / 2
		}

		return subdivided
	}
}

export default ShapeBuffer
