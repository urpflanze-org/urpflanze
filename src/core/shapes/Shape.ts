import ShapeBase from '@core/shapes/ShapeBase'
import { ShapeSettings, ShapeBaseProps } from '@core/interfaces/shapes/Interfaces'
import SceneChild from '@core/SceneChild'
import Group from '@core/Group'
import { ShapeBasePropArguments, ShapeBaseStreamIndexing, Repetition } from '@core/types/ShapeBase'
import Scene from '@core/Scene'

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
	constructor(settings: ShapeSettings = {}) {
		settings.type = settings.type || 'Shape'
		super(settings)

		if (settings.shape instanceof SceneChild) {
			this.shape = settings.shape
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
	 * @param {ShapeBasePropArguments} prop_arguments
	 * @returns {number}
	 * @memberof Shape
	 */
	public getBufferLength(prop_arguments: ShapeBasePropArguments): number {
		if (this.bStatic && this.buffer && this.buffer.length > 0) return this.buffer.length

		const child_buffer_length = this.shape ? this.shape.getBufferLength(prop_arguments) : 0

		return child_buffer_length * this.getRepetitionCount()
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generate_id
	 * @param {ShapeBasePropArguments} prop_arguments
	 * @returns {Float32Array}
	 * @memberof ShapeBase
	 */
	protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array {
		if (this.shape) {
			this.shape.generate(generate_id, false, prop_arguments)

			return this.shape.getBuffer() || Shape.EMPTY_BUFFER
		}

		return Shape.EMPTY_BUFFER
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
			this.clearBuffer(true)
		} else {
			this.scene && Scene.propagateToChilden(shape, this.scene)

			this.shape = shape

			this.shape.clearBuffer(true)
		}
	}

	/**
	 *
	 *
	 * @protected
	 * @param {Array<ShapeBaseStreamIndexing>} buffer
	 * @param {number} frame_length
	 * @param {Repetition} current_repetition
	 * @param {ShapeBaseStreamIndexing} [parent]
	 * @memberof ShapePrimitive
	 */
	protected addIndex(
		buffer: Array<ShapeBaseStreamIndexing>,
		frame_length: number,
		current_repetition: Repetition,
		parent?: ShapeBaseStreamIndexing
	): void {
		if (this.shape) {
			const current: ShapeBaseStreamIndexing = {
				shape: this,
				buffer_length: frame_length,
				parent,
				repetition: current_repetition,
			}

			this.shape.index(buffer, current)
		}
	}
}

export default Shape
