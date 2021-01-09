import ShapeBase from '@core/shapes/ShapeBase'
import SceneChild from '@core/SceneChild'
import { IParentBufferIndex, IShapeBounding, IShapeSettings } from '@core/types/shape-base'
import Scene from '@core/Scene'
import { IRepetition, ISceneChildPropArguments, ISceneChildProps } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'

/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Core.Shapes
 */
class Shape<K extends ISceneChildProps = ISceneChildProps> extends ShapeBase<K> {
	/**
	 * child shape
	 *
	 * @type {(SceneChild)}
	 */
	public shape?: SceneChild

	/**
	 * Creates an instance of Shape.
	 *
	 * @param {ShapeSettings} [settings={}]
	 */
	constructor(settings: IShapeSettings = {}) {
		settings.type = settings.type || 'Shape'
		super(settings)

		if (settings.shape instanceof SceneChild) {
			this.shape = settings.shape
		} else {
			console.warn(
				"[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:",
				settings.shape
			)
		}

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return super.isStatic() && (this.shape ? this.shape.isStatic() : true)
	}

	/**
	 * Check if shape has static index
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true)
	}

	/**
	 * Find shape by id or name
	 *
	 * @param {number | string} idOrName
	 * @returns {(SceneChild | null)}
	 */
	public find(idOrName: number | string): SceneChild | null {
		if (this.id === idOrName || this.name === idOrName) return this

		if (this.shape) return this.shape.find(idOrName)

		return null
	}

	/**
	 * Return length of buffer
	 *
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {number}
	 */
	public getBufferLength(propArguments: ISceneChildPropArguments): number {
		if (this.bStatic && this.buffer && this.buffer.length > 0) return this.buffer.length

		const childBufferLength = this.shape ? this.shape.getBufferLength(propArguments) : 0

		return childBufferLength * this.getRepetitionCount()
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
		if (this.shape) {
			this.shape.generate(generateId, false, propArguments)
			return this.shape.getBuffer() || Shape.EMPTY_BUFFER
		}

		return Shape.EMPTY_BUFFER
	}

	/**
	 * Return bounding
	 *
	 * @param {boolean} bDirectSceneChild
	 * @returns {IShapeBounding}
	 */
	public getShapeBounding(): IShapeBounding {
		if (this.shape) {
			return this.shape.getBounding()
		}

		return this.bounding // empty bounding defined in ShapeBase
	}

	/**
	 * Add to indexed buffer
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
			const childIndexedBuffer = this.shape.getIndexedBuffer() || []
			const parent: IParentBufferIndex = {
				shape: this,
				frameLength,
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

			for (let i = 0, len = childIndexedBuffer.length; i < len; i++) {
				const currentIndexed = { ...childIndexedBuffer[i] }
				currentIndexed.parent = currentIndexed.parent ? Shape.setIndexedParent(currentIndexed.parent, parent) : parent
				this.indexedBuffer.push(currentIndexed)
			}
		}
	}

	/**
	 * Set parent of indexed
	 *
	 * @static
	 * @param {(IBufferIndex | IParentBufferIndex)} current
	 * @param {IParentBufferIndex} parent
	 * @returns {(IBufferIndex | IParentBufferIndex)}
	 */
	static setIndexedParent(
		current: IBufferIndex | IParentBufferIndex,
		parent: IParentBufferIndex
	): IBufferIndex | IParentBufferIndex {
		return {
			shape: current.shape,
			// singleRepetitionBounding: current.singleRepetitionBounding,
			repetition: {
				type: current.repetition.type,
				angle: current.repetition.angle,
				index: current.repetition.index,
				count: current.repetition.count,
				offset: current.repetition.offset,
				row: {
					index: current.repetition.row.index,
					count: current.repetition.row.count,
					offset: current.repetition.row.offset,
				},
				col: {
					index: current.repetition.col.index,
					count: current.repetition.col.count,
					offset: current.repetition.col.offset,
				},
			},
			frameLength: current.frameLength,
			parent: current.parent ? Shape.setIndexedParent(current.parent, parent) : parent,
		}
	}

	/**
	 * Set shape
	 *
	 * @param {(SceneChild | undefined)} [shape]
	 */
	public setShape(shape: SceneChild | undefined): void {
		if (typeof shape === 'undefined') {
			this.shape = undefined
			this.clearBuffer(true, true)
		} else {
			this.scene && Scene.propagateToChilden(shape, this.scene)

			this.shape = shape

			this.shape.clearBuffer(true, true)
		}
	}
}

export default Shape
