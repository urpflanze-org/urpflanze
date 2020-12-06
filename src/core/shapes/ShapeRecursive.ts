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

/**
 * @category Core.Shapes
 */
class ShapeRecursive extends Shape<IShapeRecursiveProps> {
	/**
	 * Contain the bounding of the last generated buffer
	 *
	 * @type {IShapeBounding}
	 * @internal
	 */
	protected currentGenerationRecursiveBounding: IShapeBounding

	// /**
	//  * Inner recursion
	//  *
	//  * @type {boolean}
	//  */
	// public bInner: boolean

	private shapeRecursiveBuffer: Float32Array | undefined

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
		this.props.recursionVertex = settings.recursionVertex || 0

		// this.bInner = settings.bInner ?? false

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()

		this.currentGenerationRecursiveBounding = { ...ShapePrimitive.EMPTY_BOUNDING }
	}

	// /**
	//  * Set type of recursion
	//  *
	//  * @param {boolean} inner
	//  */
	// public setRecursionnInner(inner: boolean): void {
	// 	this.bInner = inner
	// 	this.clearBuffer(true)
	// }

	/**
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return (
			typeof this.props.recursions !== 'function' &&
			typeof this.props.recursionScale !== 'function' &&
			typeof this.props.recursionVertex !== 'function' &&
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

	/**
	 * Return a buffer of children shape with recursion
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array {
		if (!this.isStatic() || typeof this.shapeRecursiveBuffer === 'undefined') {
			this.bindBuffer(generateId, propArguments)
		}

		return this.shapeRecursiveBuffer as Float32Array
	}

	/**
	 * Generate Recoursive shape buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 */
	protected bindBuffer(generateId: number, propArguments: ISceneChildPropArguments): void {
		if (typeof this.shape === 'undefined') {
			this.shapeRecursiveBuffer = Shape.EMPTY_BUFFER
			return
		}

		const recursions = Math.floor(this.getProp('recursions', propArguments, 1))
		const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0))
		const recursionScale = this.getProp('recursionScale', propArguments, 2)

		let currentRecursionRepetition: IRecursionRepetition = {
			index: 1,
			offset: 1,
			count: 1,
			level: { index: 1, offset: recursions > 1 ? 0 : 1, count: 1 },
		}

		if (recursions <= 1) {
			const buffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition)
			this.currentGenerationRecursiveBounding = this.shape.getBounding()
			this.shapeRecursiveBuffer = buffer
			return
		}

		let shapeBuffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition)
		const storedRecursion: Array<IRecursionRepetition> = [currentRecursionRepetition]
		let paretRecursionIndex = 0,
			added = 1

		const tmpBounding = [undefined, undefined, undefined, undefined]
		const singleShapeBufferLength = shapeBuffer.length
		const realVertexCount = singleShapeBufferLength / 2

		const singleShapeVertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount)
		const recursionOffsetMultiplier =
			recursionVertex === 0 ? 1 : realVertexCount / Math.min(recursionVertex, realVertexCount)

		const recusiveShapeBuffer = new Float32Array(
			ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength
		)

		for (let i = 0; i < singleShapeBufferLength; i += 2) {
			recusiveShapeBuffer[i] = shapeBuffer[i]
			recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1]
			Bounding.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1])
		}

		for (let currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
			const level_offset = recursions > 1 ? currentRecursion / (recursions - 1) : 1
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
				currentShapeRecursionRepetition++, added++
			) {
				currentRecursionRepetition = {
					index: currentShapeRecursionRepetition + 1,
					offset: totalRecursionRepetitions > 1 ? currentShapeRecursionRepetition / (totalRecursionRepetitions - 1) : 1,
					count: totalRecursionRepetitions,
					level: { index: currentRecursion + 1, offset: level_offset, count: recursions },
					parent: storedRecursion[paretRecursionIndex],
				}
				shapeBuffer = this.generateShapeBuffer(propArguments, generateId, currentRecursionRepetition)
				storedRecursion.push(currentRecursionRepetition)

				const shapeVertexBufferIndex =
					recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength

				// const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
				let centerVertexIndex = Math.floor(
					parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2 * recursionOffsetMultiplier
				)
				centerVertexIndex = centerVertexIndex % 2 === 0 ? centerVertexIndex : centerVertexIndex + 1

				const centerX = recusiveShapeBuffer[centerVertexIndex]
				const centerY = recusiveShapeBuffer[centerVertexIndex + 1]

				for (let i = 0, len = singleShapeBufferLength; i < len; i += 2) {
					// if (this.bInner) {
					// 	const parentCurrentVertex =
					// 		parentRecursionBufferStartIndex +
					// 		Math.floor(currentShapeRecursionRepetition / singleShapeVertexCount) *
					// 			singleShapeVertexCount *
					// 			recursionOffsetMultiplier *
					// 			2

					// 	const parentX = recusiveShapeBuffer[parentCurrentVertex + i]
					// 	const parentY = recusiveShapeBuffer[parentCurrentVertex + i + 1]

					// 	recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
					// 	recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY

					// const parentX = shapeBuffer[i] / recursionScale ** currentRecursion
					// const parentY = shapeBuffer[i + 1] / recursionScale ** currentRecursion
					// recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
					// recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
					// } else {
					const parentXScaled = shapeBuffer[i] / recursionScale ** currentRecursion
					const parentYScaled = shapeBuffer[i + 1] / recursionScale ** currentRecursion

					recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled
					recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled
					// }

					Bounding.add(
						tmpBounding,
						recusiveShapeBuffer[shapeVertexBufferIndex + i],
						recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]
					)
				}

				if (added % singleShapeVertexCount === 0) {
					paretRecursionIndex += 1
				}
			}
		}

		Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
		this.shapeRecursiveBuffer = recusiveShapeBuffer
	}

	private generateShapeBuffer(
		propArguments: ISceneChildPropArguments,
		generateId: number,
		recursionRepetition: IRecursionRepetition
	): Float32Array {
		propArguments.recursion = recursionRepetition
		return super.generateBuffer(generateId, propArguments)
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
			const propArguments = {
				repetition,
				context: Context,
				time: this.scene?.currentTime || 0,
				shape: this,
			}
			const recursions = Math.floor(this.getProp('recursions', propArguments, 1))
			const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0))

			// const realFrameLength = ShapeRecursive.summmation(recursions, this.shape.getBufferLength() / 2)

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
				let currentIndexed = { ...childIndexedBuffer[childIndexed] }
				let currentRecursionRepetition: IRecursionRepetition = {
					index: 1,
					offset: 1,
					count: 1,
					level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
				}

				let recursionBufferIndex: IParentBufferIndex = { ...bufferIndex, recursion: currentRecursionRepetition }

				currentIndexed.parent = currentIndexed.parent
					? Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
					: recursionBufferIndex
				this.indexedBuffer.push(currentIndexed)

				if (recursions > 1) {
					const realVertexCount = this.shape.getBufferLength() / 2
					const vertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount)

					const storedRecursion: Array<IRecursionRepetition> = [currentRecursionRepetition]

					let paretRecursionIndex = 0,
						added = 1

					for (let i = 1; i < recursions; i++) {
						const level_offset = recursions > 1 ? i / (recursions - 1) : 1
						for (let j = 0, len = vertexCount ** i; j < len; j++, added++) {
							const recursionOffset = len > 1 ? j / (len - 1) : 1

							currentIndexed = { ...childIndexedBuffer[childIndexed] }
							currentRecursionRepetition = {
								index: j + 1,
								offset: recursionOffset,
								count: len,
								level: { index: i + 1, offset: level_offset, count: recursions },
								parent: storedRecursion[paretRecursionIndex],
							}

							recursionBufferIndex = { ...bufferIndex, recursion: currentRecursionRepetition }
							currentIndexed.parent = currentIndexed.parent
								? Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
								: recursionBufferIndex

							this.indexedBuffer.push(currentIndexed)

							storedRecursion.push(currentRecursionRepetition)

							if (added % vertexCount === 0) {
								paretRecursionIndex += 1
							}
						}
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
