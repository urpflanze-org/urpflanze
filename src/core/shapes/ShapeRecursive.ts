import Context from '@core/Context'
import Bounding from '@core/math/bounding'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import { IRepetition, ISceneChildPropArguments, TSceneChildProp } from '@core/types/scene-child'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { IShapeBufferProps, IShapeBufferSettings } from '@core/types/shape-primitive'
import ShapeBuffer from './ShapeBuffer'

interface IShapeRecursiveProps extends IShapeBufferProps {
	recursions: TSceneChildProp<number>
}

/**
 * @category Core.Shapes
 */
class ShapeRecursive extends ShapeBuffer {
	protected props!: IShapeRecursiveProps

	/**
	 * Creates an instance of ShapeBuffer.
	 *
	 * @param {IShapeBufferSettings} [settings={}]
	 */
	constructor(settings: IShapeBufferSettings & { recursions?: number } = {}) {
		settings.type = settings.type || 'ShapeRecursive'
		super(settings)

		this.props.recursions = settings.recursions || 1

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return typeof this.props.recursions !== 'function' && super.isStatic()
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return typeof this.props.repetitions !== 'function'
	}

	/**
	 * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
	 *
	 * @protected
	 */
	protected bindBuffer(propArguments: ISceneChildPropArguments) {
		const sideLength = this.getRepetitionSideLength(propArguments)
		const recursions = this.getProp<IShapeRecursiveProps>('recursions', propArguments)
		const shapeBuffer =
			this.adaptMode !== EShapePrimitiveAdaptMode.None
				? ShapePrimitive.adaptBuffer(this.shape, this.adaptMode)
				: Float32Array.from(this.shape)

		const tmpBounding = [undefined, undefined, undefined, undefined]
		const singleShapeBufferLength = shapeBuffer.length

		if (recursions <= 1) {
			for (let i = 0; i < singleShapeBufferLength; i += 2) {
				shapeBuffer[i] *= sideLength[0]
				shapeBuffer[i + 1] *= sideLength[1]
				Bounding.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1])
			}
			this.shapeBuffer = shapeBuffer
		} else {
			const singleShapeVertexCount = singleShapeBufferLength / 2
			const recusiveShapeBuffer = new Float32Array(
				ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength
			)
			for (let i = 0; i < singleShapeBufferLength; i += 2) {
				shapeBuffer[i] *= sideLength[0]
				shapeBuffer[i + 1] *= sideLength[1]
				recusiveShapeBuffer[i] = shapeBuffer[i]
				recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1]
				Bounding.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1])
			}

			for (let currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
				const currentRecursionVertexCount = ShapeRecursive.summmation(currentRecursion, singleShapeVertexCount)
				const recursionBufferStartIndex = currentRecursionVertexCount * singleShapeBufferLength
				const recursionBufferScale = 2

				const parentRecursion = currentRecursion - 1
				const parentRecursionBufferStartIndex =
					parentRecursion === 0
						? 0
						: ShapeRecursive.summmation(parentRecursion, singleShapeVertexCount) * singleShapeBufferLength

				for (
					let currentShapeRecursionRepetition = 0,
						totalRecursionRepetitions = singleShapeVertexCount ** currentRecursion;
					currentShapeRecursionRepetition < totalRecursionRepetitions;
					currentShapeRecursionRepetition++
				) {
					const shapeVertexBufferIndex =
						recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength

					// const parentCurrentVertex =
					// 	parentRecursionBufferStartIndex +
					// 	Math.floor(currentShapeRecursionRepetition / singleShapeVertexCount) * singleShapeVertexCount * 2

					const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
					const centerX = recusiveShapeBuffer[centerVertexIndex]
					const centerY = recusiveShapeBuffer[centerVertexIndex + 1]

					for (let i = 0, len = singleShapeBufferLength; i < len; i += 2) {
						// const parentX = recusiveShapeBuffer[parentCurrentVertex + i]
						// const parentY = recusiveShapeBuffer[parentCurrentVertex + i + 1]
						const parentXScaled = shapeBuffer[i] / (recursionBufferScale * currentRecursion)
						const parentYScaled = shapeBuffer[i + 1] / (recursionBufferScale * currentRecursion)

						/**
						 * Inner recursion
						 * recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionBufferScale + parentX
						 * recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionBufferScale + parentY
						 */
						recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled
						recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled

						Bounding.add(
							tmpBounding,
							recusiveShapeBuffer[shapeVertexBufferIndex + i],
							recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]
						)
					}
				}
			}
			this.shapeBuffer = recusiveShapeBuffer
		}

		Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding)
	}

	static summmation(recursion: number, vertexCount: number): number {
		if (recursion === 1) return 1

		let result = 1
		for (let i = 1; i < recursion; i++) result += vertexCount ** i

		return result
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array {
		if (
			typeof this.shapeBuffer === 'undefined' ||
			typeof this.props.sideLength === 'function' ||
			typeof this.props.recursions === 'function'
		) {
			this.bindBuffer(propArguments)
		}

		return this.shapeBuffer as Float32Array
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
		const realFrameLength = this.shape.length
		const vertexCount = realFrameLength / 2

		const bufferIndex = {
			shape: this,
			frameLength: realFrameLength,
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

		const recursions = this.getProp<IShapeRecursiveProps>('recursions', {
			repetition,
			context: Context,
			time: this.scene?.currentTime || 0,
			shape: this,
		})

		if (recursions <= 1) {
			this.indexedBuffer.push({ ...bufferIndex, repetition: { ...bufferIndex.repetition, recursion: 1 } })
		} else {
			this.indexedBuffer.push({ ...bufferIndex, repetition: { ...bufferIndex.repetition, recursion: 1 } })

			for (let i = 1; i < recursions; i++) {
				for (let j = 0, len = vertexCount ** i; j < len; j++) {
					this.indexedBuffer.push({
						...bufferIndex,
						repetition: { ...bufferIndex.repetition, recursion: i + 1 },
					})
				}
			}
		}
	}
}

export default ShapeRecursive
