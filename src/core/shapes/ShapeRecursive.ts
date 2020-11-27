import Bounding from '@core/math/bounding'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import { IRecursionRepetition, IRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import {
	IParentBufferIndex,
	IShapeBounding,
	IShapeRecursiveProps,
	IShapeRecursiveSettings,
} from '@core/types/shape-base'

import Shape from '@core/shapes/Shape'
import Context from '@core/Context'
import { PHI } from '@core/math'

/**
 * @category Core.Shapes
 */
class ShapeRecursive extends Shape<IShapeRecursiveProps> {
	/**
	 * Contain the bounding of the last generated buffer
	 *
	 * @type {IShapeBounding}
	 */
	public currentGenerationRecursiveBounding: IShapeBounding

	/**
	 * Inner recursion
	 *
	 * @type {boolean}
	 */
	public bInner: boolean

	/**
	 * Regenerate buffer every recursion
	 *
	 * @type {boolean}
	 */
	public bShapeUseRecursion: boolean

	/**
	 * Creates an instance of ShapeRecursive.
	 *
	 * @param {IShapeRecursiveSettings} [settings={}]
	 */
	constructor(settings: IShapeRecursiveSettings = {}) {
		settings.type = settings.type || 'ShapeRecursive'
		super(settings)

		this.props.recursions = settings.recursions || 1
		this.props.recursionScale = settings.recursionScale || 2

		this.bInner = settings.bInner ?? false
		this.bShapeUseRecursion = settings.bShapeUseRecursion ?? false

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()

		this.currentGenerationRecursiveBounding = { ...ShapePrimitive.EMPTY_BOUNDING }
	}

	/**
	 * Set type of recursion
	 *
	 * @param {boolean} inner
	 */
	public setRecursionnInner(inner: boolean): void {
		this.bInner = inner
		this.clearBuffer(true)
	}

	/**
	 * Set child use recursion
	 *
	 * @param {boolean} inner
	 */
	public setShapeUseRecursion(bShapeUseRecursion: boolean): void {
		this.bShapeUseRecursion = bShapeUseRecursion
		this.clearBuffer(true)
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return (
			this.bShapeUseRecursion === false &&
			typeof this.props.recursions !== 'function' &&
			typeof this.props.recursionScale !== 'function' &&
			super.isStatic()
		)
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return typeof this.props.recursions !== 'function' && super.isStaticIndexed()
	}

	private getRecursionBuffer(
		propArguments: ISceneChildPropArguments,
		generateId: number,
		recursionRepetition: IRecursionRepetition,
		recursionIndex: number,
		recursionCount: number,
		shapeRecursionIndex: number,
		shapeRecursionCount: number
	): Float32Array {
		if (this.shape && this.bShapeUseRecursion) {
			const currentRecursionRepetition = { ...recursionRepetition }
			const recursionOffset = recursionCount > 1 ? recursionIndex / (recursionCount - 1) : 1
			const shapeRecursionOffset = shapeRecursionCount > 1 ? shapeRecursionIndex / (shapeRecursionCount - 1) : 1
			propArguments.recursion = currentRecursionRepetition
			this.shape.generate(generateId * recursionIndex, false, propArguments)
		}

		return super.generateBuffer(generateId, propArguments)
	}

	static createRecursionRepetition(recursionCount: number, vertexCount?: number): IRecursionRepetition {
		const repetition: IRecursionRepetition = {
			index: 1,
			offset: 1,
			count: recursionCount,
			level: 1,
		}

		let repetitionPtr = repetition

		for (let i = 1; i < recursionCount; i++) {
			repetitionPtr.parent = {
				index: 1,
				offset: 1,
				count: recursionCount,
				level: i + 1,
			}

			repetitionPtr = repetitionPtr.parent
		}

		return repetition
	}

	/**
	 * Return a buffer of children shape with recursion
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array {
		if (typeof this.shape === 'undefined') {
			return Shape.EMPTY_BUFFER
		}

		const recursions = this.getProp('recursions', propArguments, 1)
		const recursionScale = this.getProp('recursionScale', propArguments, 2)
		const recursionRepetition = ShapeRecursive.createRecursionRepetition(recursions)

		if (recursions <= 1) {
			const buffer = this.getRecursionBuffer(propArguments, generateId, recursionRepetition, 1, 1, 1, 1)
			this.currentGenerationRecursiveBounding = this.shape.getBounding()
			return buffer
		}

		const shapeBuffer = this.getRecursionBuffer(propArguments, generateId, recursionRepetition, 1, 1, 1, 1)

		const tmpBounding = [undefined, undefined, undefined, undefined]
		const singleShapeBufferLength = shapeBuffer.length

		const singleShapeVertexCount = singleShapeBufferLength / 2
		const recusiveShapeBuffer = new Float32Array(
			ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength
		)

		for (let i = 0; i < singleShapeBufferLength; i += 2) {
			recusiveShapeBuffer[i] = shapeBuffer[i]
			recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1]
			Bounding.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1])
		}

		for (let currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
			const currentRecursionVertexCount = ShapeRecursive.summmation(currentRecursion, singleShapeVertexCount)
			const recursionBufferStartIndex = currentRecursionVertexCount * singleShapeBufferLength

			const parentRecursion = currentRecursion - 1
			const parentRecursionBufferStartIndex =
				parentRecursion === 0
					? 0
					: ShapeRecursive.summmation(parentRecursion, singleShapeVertexCount) * singleShapeBufferLength

			for (
				let currentShapeRecursionRepetition = 0, totalRecursionRepetitions = singleShapeVertexCount ** currentRecursion;
				currentShapeRecursionRepetition < totalRecursionRepetitions;
				currentShapeRecursionRepetition++
			) {
				const shapeVertexBufferIndex =
					recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength

				const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
				const centerX = recusiveShapeBuffer[centerVertexIndex]
				const centerY = recusiveShapeBuffer[centerVertexIndex + 1]

				for (let i = 0, len = singleShapeBufferLength; i < len; i += 2) {
					if (this.bInner) {
						const parentCurrentVertex =
							parentRecursionBufferStartIndex +
							Math.floor(currentShapeRecursionRepetition / singleShapeVertexCount) * singleShapeVertexCount * 2

						const parentX = recusiveShapeBuffer[parentCurrentVertex + i]
						const parentY = recusiveShapeBuffer[parentCurrentVertex + i + 1]
						recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
						recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
					} else {
						const parentXScaled = shapeBuffer[i] / recursionScale ** currentRecursion
						const parentYScaled = shapeBuffer[i + 1] / recursionScale ** currentRecursion

						recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled
						recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled
					}

					Bounding.add(
						tmpBounding,
						recusiveShapeBuffer[shapeVertexBufferIndex + i],
						recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]
					)
				}
			}
		}

		Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
		return recusiveShapeBuffer
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
		if (this.shape) {
			const recursions = this.getProp('recursions', {
				repetition,
				context: Context,
				time: this.scene?.currentTime || 0,
				shape: this,
			})

			// const realFrameLength = ShapeRecursive.summmation(recursions, this.shape.getBufferLength() / 2)
			const vertexCount = this.shape.getBufferLength() / 2

			const bufferIndex: IParentBufferIndex = {
				shape: this,
				frameLength: frameLength,
				// singleRepetitionBounding,
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
			}

			const childIndexedBuffer = this.shape.getIndexedBuffer() || []
			for (
				let childIndexed = 0, childIndexedLen = childIndexedBuffer.length;
				childIndexed < childIndexedLen;
				childIndexed++
			) {
				const currentIndexed = { ...childIndexedBuffer[childIndexed] }
				currentIndexed.parent = currentIndexed.parent
					? Shape.setIndexedParent(currentIndexed.parent, bufferIndex)
					: bufferIndex

				const recursion = { index: 1, offset: 1, count: 1, level: 1 }
				let recursionPtr: IRecursionRepetition = recursion

				if (recursions <= 1) {
					this.indexedBuffer.push({ ...currentIndexed, recursion: recursionPtr })
				} else {
					this.indexedBuffer.push({ ...currentIndexed, recursion: recursionPtr })

					for (let i = 1; i < recursions; i++) {
						for (let j = 0, len = vertexCount ** i; j < len; j++) {
							const recursionOffset = vertexCount > 1 ? len / (len - 1) : 1

							this.indexedBuffer.push({
								...currentIndexed,
								recursion: { index: j + 1, offset: recursionOffset, count: len, level: i + 1, parent: recursionPtr },
							})
						}
						recursionPtr.parent = {
							index: i + 1,
							offset: 1,
							count: 1,
							level: i + 1,
						}
						recursionPtr = recursionPtr.parent
					}
				}
			}
		}
	}

	/**
	 * Retturn summation value
	 *
	 * @static
	 * @param {number} recursion
	 * @param {number} vertexCount
	 * @returns {number}
	 */
	static summmation(recursion: number, vertexCount: number): number {
		if (recursion === 1) return 1

		let result = 1
		for (let i = 1; i < recursion; i++) result += vertexCount ** i

		return result
	}
}

export default ShapeRecursive
