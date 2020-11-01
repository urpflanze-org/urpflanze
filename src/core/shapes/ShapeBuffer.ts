import Bounding, { TTempBounding } from '@core/math/bounding'
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
	private shapeBuffer: Float32Array

	/**
	 * Creates an instance of ShapeBuffer.
	 *
	 * @param {IShapeBufferSettings} [settings={}]
	 * @memberof ShapeBuffer
	 */
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
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
		super.clearBuffer(bClearIndexed, bPropagateToParents)

		this.bindBuffer()
		// this.shapeBuffer = ShapeBuffer.buffer2Dto3D(this.shapeBuffer)
	}

	/**
	 * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
	 *
	 * @private
	 * @memberof ShapeBuffer
	 */
	private bindBuffer() {
		const shapeBuffer =
			this.adaptMode !== EShapePrimitiveAdaptMode.None
				? ShapePrimitive.adaptBuffer(this.shape, this.adaptMode)
				: Float32Array.from(this.shape)

		const tmpBounding: TTempBounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
			shapeBuffer[i] *= this.sideLength[0]
			shapeBuffer[i + 1] *= this.sideLength[1]

			Bounding.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1])
		}

		Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding)

		this.shapeBuffer = shapeBuffer
	}

	/**
	 * Return length of buffer
	 *
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	public getBufferLength(): number {
		if (this.buffer && this.buffer.length > 0) return this.buffer.length

		return this.shapeBuffer.length * this.getRepetitionCount()
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 * @memberof ShapeBase
	 */
	protected generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array {
		if (this.bindSideLength(propArguments)) {
			this.bindBuffer()
		}

		return this.shapeBuffer
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
	public subdivide(level = 1) {
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
		const shapeLength = shape.length
		const subdivided = new Float32Array(shapeLength * 2 - (bClosed ? 0 : 2))

		for (let i = 0; i < shapeLength; i += 2) {
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
			subdivided[(shapeLength - 1) * 2] = (shape[0] + shape[shapeLength - 2]) / 2
			subdivided[(shapeLength - 1) * 2 + 1] = (shape[1] + shape[shapeLength - 1]) / 2
		}

		return subdivided
	}
}

export default ShapeBuffer
