import ShapeBase from '@core/shapes/ShapeBase'
import SceneChild from '@core/SceneChild'
import { IShapeBounding, IShapeSettings } from '@core/types/shape-base'
import Scene from '@core/Scene'
import { IRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'

/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Core.Shapes
 */
class Shape extends ShapeBase {
	/**
	 * child shape
	 *
	 * @type {(SceneChild)}
	 * @memberof ShapeBase
	 */
	public shape?: SceneChild

	/**
	 * Creates an instance of Shape.
	 *
	 * @param {ShapeSettings} [settings={}]
	 * @memberof Shape
	 */
	constructor(settings: IShapeSettings = {}) {
		settings.type = settings.type || 'Shape'
		super(settings)

		if (settings.shape instanceof SceneChild) {
			this.shape = settings.shape
		} else {
			console.warn(
				'[Urpflanze:Shape] requires the shape property to be instance of SceneChild,\nYou passed:',
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
	 * @memberof Shape
	 */
	public isStatic(): boolean {
		return super.isStatic() && (this.shape ? this.shape.isStatic() : true)
	}

	/**
	 * Check if shape has static index
	 *
	 * @returns {boolean}
	 * @memberof Shape
	 */
	public isStaticIndexed(): boolean {
		return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true)
	}

	/**
	 * Find shape by id or name
	 *
	 * @param {number | string} id_or_name
	 * @returns {(SceneChild | null)}
	 * @memberof Shape
	 */
	public find(id_or_name: number | string): SceneChild | null {
		if (this.id === id_or_name || this.name === id_or_name) return this

		if (this.shape) return this.shape.find(id_or_name)

		return null
	}

	/**
	 * Return length of buffer
	 *
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {number}
	 * @memberof Shape
	 */
	public getBufferLength(prop_arguments: ISceneChildPropArguments): number {
		if (this.bStatic && this.buffer && this.buffer.length > 0) return this.buffer.length

		const child_buffer_length = this.shape ? this.shape.getBufferLength(prop_arguments) : 0

		return child_buffer_length * this.getRepetitionCount()
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
		if (this.shape) {
			this.shape.generate(generate_id, false, prop_arguments)

			// this.bounding = this.shape.getBounding()

			return this.shape.getBuffer() || Shape.EMPTY_BUFFER
		}

		return Shape.EMPTY_BUFFER
	}

	protected addIndex(frame_length: number, repetition: IRepetition) {
		if (this.shape) {
			const indexed_buffer = this.indexed_buffer as Array<IBufferIndex>
			const child_indexed_buffer = this.shape.getIndexedBuffer() || []
			const parent = {
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
			}

			for (let i = 0, len = child_indexed_buffer.length; i < len; i++) {
				const current_indexed = child_indexed_buffer[i]
				current_indexed.parent = parent

				indexed_buffer.push(current_indexed)
			}
		}
	}

	/**
	 * Set shape
	 *
	 * @param {(SceneChild | undefined)} [shape]
	 * @memberof ShapeBase
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

	public getBounding(bDirectSceneChild: boolean): IShapeBounding {
		if (this.shape) {
			return this.shape.getBounding(false)
		}
		return this.bounding
	}
}

export default Shape
