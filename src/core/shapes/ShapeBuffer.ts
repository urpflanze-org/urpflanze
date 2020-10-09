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
		settings.adaptMode = settings.adaptMode || EShapePrimitiveAdaptMode.Scale

		super(settings)

		if (typeof settings.shape === 'undefined') {
			console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property')
			this.shape = ShapeBuffer.EMPTY_BUFFER
		} else this.shape = Float32Array.from(settings.shape)

		this.shape_buffer =
			this.getAdaptMode() !== EShapePrimitiveAdaptMode.None
				? ShapePrimitive.adaptBuffer(this.shape, this.getAdaptMode())
				: this.shape

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

		this.shape_buffer =
			this.getAdaptMode() != EShapePrimitiveAdaptMode.None
				? ShapePrimitive.adaptBuffer(this.shape, this.getAdaptMode())
				: this.shape
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
		this.bindSideLength(prop_arguments)

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

		if (subdivided)
			for (let i = 0; i < level; i++) subdivided = ShapeBuffer.subdivide(subdivided as Float32Array, this.bCloseShape)

		subdivided && this.setShape(subdivided)
	}

	/**
	 * Subdivide buffer
	 *
	 * @static
	 * @param {Float32Array} shape
	 * @param {boolean} [bClosed=true]
	 * @returns {(Float32Array | undefined)}
	 * @memberof ShapeBuffer
	 */
	public static subdivide(shape: Float32Array, bClosed = true): Float32Array | undefined {
		if (shape && shape.length) {
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
}

export default ShapeBuffer
