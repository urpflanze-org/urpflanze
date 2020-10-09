import { TStreamCallback } from '@core/types/scene'
import { IShapeBaseSettings, TVertexCallback } from '@core/types/shape-base'
import {
	ERepetitionType,
	IRepetition,
	IBaseRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildStreamArguments,
} from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'

import SceneChild from '@core/SceneChild'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import Context from '@core/Context'
import { mat4, quat, vec2, vec3 } from 'gl-matrix'
import { toArray } from 'src/Utilites'
import * as glme from '@core/math/gl-matrix-extensions'

const TEMP_PROJECTION_MATRIX: mat4 = mat4.create()
const TEMP_MATRIX: mat4 = mat4.create()
const TEMP_QUAT: quat = [0, 0, 0, 0]

/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
abstract class ShapeBase extends SceneChild {
	/**
	 * Empty buffer
	 *
	 * @internal
	 * @ignore
	 */
	public static readonly EMPTY_BUFFER: Float32Array = new Float32Array(0)

	/**
	 * Empty BaseRepetition
	 *
	 * @internal
	 * @ignore
	 */
	public static getEmptySimpleRepetition: () => IBaseRepetition = () => ({
		index: 1,
		offset: 1,
		count: 1,
	})
	/**
	 * Empty Repetition
	 *
	 * @internal
	 * @ignore
	 */
	public static getEmptyRepetition: () => IRepetition = () => ({
		type: ERepetitionType.Ring,
		angle: 0,
		...ShapeBase.getEmptySimpleRepetition(),
		row: ShapeBase.getEmptySimpleRepetition(),
		col: ShapeBase.getEmptySimpleRepetition(),
	})

	/**
	 * Empty Prop Arguments
	 *
	 * @internal
	 * @ignore
	 */
	public static readonly EMPTY_PROP_ARGUMENTS: ISceneChildPropArguments = {
		time: 0,
		context: Context,
		repetition: ShapeBase.getEmptyRepetition(),
	}

	/**
	 * Shape generation id
	 * used for prevent buffer calculation
	 *
	 * @internal
	 * @ignore
	 */
	private generate_id: number = -1

	/**
	 * A final array of vertices to draw
	 *
	 * @internal
	 * @ignore
	 */
	protected buffer?: Float32Array

	/**
	 * Determine if shape are static and doon't need generate at eachtime
	 *
	 * @internal
	 * @ignore
	 */
	protected bStatic: boolean

	/**
	 * Determine if shape have static indexed buffer
	 *
	 * @internal
	 * @ignore
	 */
	protected bStaticIndexed: boolean

	/**
	 * Flag used to determine if indexed_buffer has been generated
	 *
	 * @internal
	 * @ignore
	 */
	protected bIndexed: boolean = false

	/**
	 * With this parameter the shape will be created at each repetition,
	 * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
	 * fillColor, strokeColor and lineWidth don't need to as they are generated during the buffer stream.
	 *
	 * @public
	 * @type {boolean}
	 * @memberof ShapeBase
	 * @example
	 * ```javascript
	 * // Use parent repetition for generate different types of roses
	 *
	 * const rose = new Urpflanze.Rose({
	 * 	repetitions: 3,
	 * 	n: ({ parent }) => parent.repetition.current_index, // <- use parent
	 * 	d: ({ repetition }) => repetition.current_index,
	 * 	sideLength: 20,
	 * 	distance: 30,
	 * 	bUseParent: true // <- add this for use `parent` as prop_argument of `n` property
	 * })
	 *
	 * const shape = new Urpflanze.Shape({
	 * 	shape: rose,
	 * 	repetitions: 4,
	 * 	distance: 100
	 * })
	 * ```
	 */
	public bUseParent: boolean

	/**
	 * Array used for index a vertex buffer
	 * only for first level scene children
	 *
	 * @internal
	 * @ignore
	 */
	protected indexed_buffer?: Array<IBufferIndex>

	/**
	 * Callback to apply transform at any vertex
	 *
	 * @example
	 * ```javascript
	 * // vertexCallback example
	 * // Generate lines with noise
	 *
	 * const line = new Urpflanze.Line({
	 * 	repetitions: [1, 50],
	 * 	distance: [0, 4],
	 * 	sideLength: ({ context, shape }) => context.percW(40, shape), // <- make the shape non-static
	 * 	vertexCallback: (vertex, { repetition, context, time }, vertex_repetition) => {
	 * 		const noise = context.noise('seed', vertex_repetition.offset * 2, repetition.row.offset * 2, time / 1000)
	 * 		vertex[0] += noise * 10
	 * 		vertex[1] += noise * 10
	 * 	},
	 * })
	 *
	 * line.subdivide(5)
	 * ```
	 */
	public vertexCallback?: TVertexCallback

	/**
	 * Creates an instance of ShapeBase
	 *
	 * @param {ISceneChildSettings} [settings={}]
	 * @memberof ShapeBase
	 */
	constructor(settings: IShapeBaseSettings = {}) {
		super(settings)

		this.props = {
			distance: settings.distance,
			repetitions: settings.repetitions,

			rotateX: settings.rotateX,
			rotateY: settings.rotateY,
			rotateZ: settings.rotateZ,
			skewX: settings.skewX,
			skewY: settings.skewY,
			squeezeX: settings.squeezeX,
			squeezeY: settings.squeezeY,
			displace: settings.displace,
			translate: settings.translate,
			scale: settings.scale,
			rotationOrigin: settings.rotationOrigin,
		}

		this.bUseParent = !!settings.bUseParent

		this.vertexCallback = settings.vertexCallback
	}

	/**
	 * Check if the shape should be generated every time
	 *
	 * @returns {boolean}
	 * @memberof ShapeBase
	 */
	public isStatic(): boolean {
		const props = this.props

		return (
			typeof props.distance !== 'function' &&
			typeof props.repetitions !== 'function' &&
			typeof props.rotateX !== 'function' &&
			typeof props.rotateY !== 'function' &&
			typeof props.rotateZ !== 'function' &&
			typeof props.displace !== 'function' &&
			typeof props.skewX !== 'function' &&
			typeof props.skewY !== 'function' &&
			typeof props.squeezeX !== 'function' &&
			typeof props.squeezeY !== 'function' &&
			typeof props.translate !== 'function' &&
			typeof props.scale !== 'function' &&
			typeof props.rotationOrigin !== 'function'
		)
	}

	/**
	 * Check if the indexed_buffer array needs to be recreated every time,
	 * this can happen when a shape generates an array of vertices different in length at each repetition
	 *
	 * @returns {boolean}
	 * @memberof ShapeBase
	 */
	public isStaticIndexed(): boolean {
		return typeof this.props.repetitions !== 'function'
	}

	/**
	 * Return a prop value
	 *
	 * @param {keyof ISceneChildProps} key
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof ShapeBase
	 */
	public getProp(key: keyof ISceneChildProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		let attribute: any = this.props[key] as any

		if (typeof attribute == 'function') {
			prop_arguments = prop_arguments || ShapeBase.EMPTY_PROP_ARGUMENTS

			if (typeof prop_arguments.shape === 'undefined') prop_arguments.shape = this
			prop_arguments.time = this.scene?.current_time || 0

			attribute = attribute(prop_arguments)
		}

		return typeof attribute === 'undefined' || Number.isNaN(attribute) ? default_value : attribute
	}

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 * @param {boolean} [bClearIndexed=false]
	 * @memberof ShapeBase
	 */
	public setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any, bClearIndexed: boolean = false): void {
		if (typeof key == 'string') {
			bClearIndexed = bClearIndexed || key == 'repetitions'
			this.props[key] = value
		} else {
			bClearIndexed = bClearIndexed || 'repetitions' in key
			Object.keys(key).forEach(
				(k: string) =>
					(this.props[k as keyof ISceneChildProps] = (key as ISceneChildProps)[k as keyof ISceneChildProps] as any)
			)
		}
		this.clearBuffer(bClearIndexed)
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @param {boolean} [bPropagateToChildren=false]
	 * @memberof ShapeBase
	 */
	public clearBuffer(bClearIndexed: boolean = false, bPropagateToParents: boolean = true) {
		this.buffer = undefined

		if (bClearIndexed) {
			this.bIndexed = false
		}

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()

		if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
			const parents = this.scene.getParentsOfSceneChild(this)
			parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */)
		}
	}

	/**
	 * Update the vertex array if the shape is not static and update the indexed_buffer if it is also not static
	 *
	 * @param {number} generate_id generation id
	 * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
	 * @param {ISceneChildPropArguments} [parent_prop_arguments]
	 * @memberof ShapeBase
	 */
	public generate(
		generate_id: number,
		bDirectSceneChild: boolean = false,
		parent_prop_arguments?: ISceneChildPropArguments
	): void {
		if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent)))) {
			return
		}

		if (!this.scene) return

		this.generate_id = generate_id

		if (!this.bStaticIndexed || !this.bIndexed) this.indexed_buffer = []

		const repetition: IRepetition = ShapeBase.getEmptyRepetition()

		const repetitions: Array<number> | number = this.getProp(
			'repetitions',
			{ parent: parent_prop_arguments, repetition, time: 1, context: Context },
			1
		)

		const repetition_type = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring
		const repetition_count = Array.isArray(repetitions)
			? repetitions[0] * (repetitions[1] ?? repetitions[0])
			: repetitions
		const repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count
		const repetition_row_count = Array.isArray(repetitions) ? repetitions[1] ?? repetitions[0] : 1

		const col_repetition = repetition.col
		col_repetition.count = repetition_col_count
		const row_repetition = repetition.row
		row_repetition.count = repetition_row_count

		repetition.count = repetition_count
		repetition.col.count = repetition_col_count
		repetition.row.count = repetition_row_count
		repetition.type = repetition_type

		const prop_arguments: ISceneChildPropArguments = {
			repetition,
			context: Context,
			time: this.scene?.current_time || 0,
			shape: this,
			data: this.data,
			parent: parent_prop_arguments,
		}

		let total_buffer_length = 0

		const buffers = []
		let current_index = 0
		const center_matrix = vec2.fromValues((repetition_col_count - 1) / 2, (repetition_row_count - 1) / 2)

		for (let current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
			for (
				let current_col_repetition = 0;
				current_col_repetition < repetition_col_count;
				current_col_repetition++, current_index++
			) {
				repetition.index = current_index + 1
				repetition.offset = repetition.index / repetition.count

				repetition.angle =
					repetition_type === ERepetitionType.Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0
				col_repetition.index = current_col_repetition + 1
				col_repetition.offset = col_repetition.index / col_repetition.count
				row_repetition.index = current_row_repetition + 1
				row_repetition.offset = row_repetition.index / row_repetition.count

				// Generate primitives buffer recursively
				const buffer: Float32Array = this.generateBuffer(generate_id, prop_arguments)
				const buffer_length = buffer.length

				buffers[current_index] = new Float32Array(buffer_length)
				total_buffer_length += buffer_length

				{
					let temp = toArray(this.getProp('distance', prop_arguments, [0, 0]))
					const distance = vec2.fromValues(temp[0], temp[1])
					const displace = this.getProp('displace', prop_arguments, 0)
					const scale = vec2.fromValues.apply(vec2, this.getProp('scale', prop_arguments, [1, 1]))
					const translate = vec2.fromValues.apply(vec2, this.getProp('translate', prop_arguments, [0, 0]))
					const skewX = this.getProp('skewX', prop_arguments, 0)
					const skewY = this.getProp('skewY', prop_arguments, 0)
					const squeezeX = this.getProp('squeezeX', prop_arguments, 0)
					const squeezeY = this.getProp('squeezeY', prop_arguments, 0)
					const rotateX = this.getProp('rotateX', prop_arguments, 0)
					const rotateY = this.getProp('rotateY', prop_arguments, 0)
					const rotateZ = this.getProp('rotateZ', prop_arguments, 0)
					const rotationOrigin = this.getProp('rotationOrigin', prop_arguments, [0, 0])

					let offset: vec2

					switch (repetition_type) {
						case ERepetitionType.Ring:
							offset = vec2.fromValues(distance[0], 0)
							vec2.rotate(offset, offset, [0, 0], repetition.angle + displace)
							break
						case ERepetitionType.Matrix:
							offset = vec2.fromValues(
								distance[0] * (current_col_repetition - center_matrix[0]),
								distance[1] * (current_row_repetition - center_matrix[1])
							)
							break
					}

					for (let buffer_index = 0; buffer_index < buffer_length; buffer_index += 3) {
						const vertex = vec3.fromValues(buffer[buffer_index], buffer[buffer_index + 1], buffer[buffer_index + 2])
						{
							// Apply transformation
							squeezeX !== 0 && glme.squeezeX(vertex, squeezeX)
							squeezeY !== 0 && glme.squeezeY(vertex, squeezeY)
							skewX !== 0 && glme.skewX(vertex, skewX)
							skewY !== 0 && glme.skewY(vertex, skewY)

							glme.fromRadians(TEMP_QUAT, rotateX, rotateY, rotateZ)
							mat4.fromRotationTranslationScaleOrigin(
								TEMP_MATRIX,
								TEMP_QUAT,
								[0, 0, 0],
								[scale[0], scale[1], 1],
								// [rotationOrigin[0], rotationOrigin[1], 2]
								[0, 0, 2]
							)
							vec3.transformMat4(vertex, vertex, TEMP_MATRIX)

							//http://learnwebgl.brown37.net/08_projections/projections_perspective.html
							// mat4.ortho(TEMP_PROJECTION_MATRIX, -10, 10, -10, 10, 0, 10)
							// mat4.perspective(TEMP_PROJECTION_MATRIX, 3, 1, 0.1, 0)
							// vec3.transformMat4(vertex, vertex, TEMP_PROJECTION_MATRIX)
							{
								//https://stackoverflow.com/questions/20162947/perspective-transform-with-perspective-origin-in-opengl-glkit
								// const perspectiveOrigin = vec3.fromValues(-0.9, -0.9, 0)
								const perspectiveOrigin = vec3.fromValues(0, 0, 0)
								const perspectiveMatrix = mat4.create()
								mat4.identity(perspectiveMatrix)
								mat4.translate(perspectiveMatrix, perspectiveMatrix, perspectiveOrigin)
								mat4.perspective(TEMP_PROJECTION_MATRIX, Math.PI / 4, 1, 0, 100)
								mat4.mul(TEMP_PROJECTION_MATRIX, TEMP_PROJECTION_MATRIX, perspectiveMatrix)

								mat4.translate(
									perspectiveMatrix,
									perspectiveMatrix,
									vec3.scale(perspectiveOrigin, perspectiveOrigin, -1)
								)
								vec3.transformMat4(vertex, vertex, TEMP_PROJECTION_MATRIX)
							}

							this.applyVertexTransform(vertex as vec2)
							;(translate[0] !== 0 || translate[1] !== 0) && vec3.add(vertex, vertex, [translate[0], translate[1], 0])
						}

						if (repetition_type === ERepetitionType.Ring)
							vec3.rotateZ(vertex, vertex, [0, 0, 0], repetition.angle + displace)

						vec3.add(vertex, vertex, [offset[0], offset[1], 0])

						if (this.vertexCallback) {
							const index = buffer_index / 3 + 1
							const count = buffer_length / 3
							this.vertexCallback(vertex, prop_arguments, {
								index,
								count,
								offset: index / count,
							})
						}

						if (bDirectSceneChild) {
							vertex[0] += this.scene.center[0]
							vertex[1] += this.scene.center[1]
						}

						buffers[current_index][buffer_index] = vertex[0]
						buffers[current_index][buffer_index + 1] = vertex[1]
					}
				}

				// After buffer creation, add a frame into indexed_buffer if not static
				if (!this.bStaticIndexed || !this.bIndexed) {
					this.addIndex(buffer_length, repetition)
				}
			}
		}

		this.buffer = new Float32Array(total_buffer_length)
		for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
			this.buffer.set(buffers[i], offset)

		this.bIndexed = true
	}

	/**
	 * Apply vertex transformation
	 *
	 * @protected
	 * @param {vec2} vertex
	 * @memberof ShapeBase
	 */
	protected applyVertexTransform(vertex: vec2): void {}

	/**
	 * Add into indexed_buffer
	 *
	 * @protected
	 * @abstract
	 * @param {number} frame_length
	 * @param {IRepetition} current_repetition
	 * @memberof ShapeBase
	 */
	protected abstract addIndex(frame_length: number, current_repetition: IRepetition): void

	/**
	 * Get number of repetitions
	 *
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	public getRepetitionCount(): number {
		let repetitions = this.getProp('repetitions', undefined, 1)

		return Array.isArray(repetitions) ? repetitions[0] * (repetitions[1] ?? repetitions[0]) : repetitions
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
	protected abstract generateBuffer(generate_id: number, prop_arguments: ISceneChildPropArguments): Float32Array

	/**
	 * Set shape
	 *
	 * @memberof ShapeBase
	 */
	public abstract setShape(shape_or_loop: any): void

	/**
	 * Return buffer
	 *
	 * @returns {(Float32Array | undefined)}
	 * @memberof ShapeBase
	 */
	public getBuffer(): Float32Array | undefined {
		return this.buffer
	}

	/**
	 * Return indexed buffer
	 *
	 * @returns {(Array<IBufferIndex> | undefined)}
	 * @memberof ShapeBase
	 */
	public getIndexedBuffer(): Array<IBufferIndex> | undefined {
		return this.indexed_buffer
	}

	/**
	 * Stream buffer
	 *
	 * @param {(TStreamCallback} callback
	 * @memberof ShapeBase
	 */
	public stream(callback: TStreamCallback) {
		if (this.scene && this.buffer && this.indexed_buffer) {
			for (let i = 0, j = 0, len = this.indexed_buffer.length; i < len; i++) {
				const current_indexing: IBufferIndex = this.indexed_buffer[i]

				const prop_arguments: ISceneChildPropArguments = {
					shape: current_indexing.shape,
					repetition: current_indexing.repetition,
					context: Context,
					time: 0,
					parent: current_indexing.parent,
					data: current_indexing.shape.data,
				}

				const fillColor = current_indexing.shape.getProp('fillColor' as keyof ISceneChildProps, prop_arguments)

				const strokeColor = current_indexing.shape.getProp(
					'strokeColor' as keyof ISceneChildProps,
					prop_arguments,
					typeof fillColor !== 'undefined' ? undefined : this.scene.mainColor
				)

				const lineWidth = current_indexing.shape.getProp(
					'lineWidth' as keyof ISceneChildProps,
					prop_arguments,
					typeof fillColor !== 'undefined' && typeof strokeColor === 'undefined' ? undefined : 1
				)

				const streamArguments: ISceneChildStreamArguments = {
					buffer: this.buffer,
					frame_length: current_indexing.frame_length,
					frame_buffer_index: j,

					shape: current_indexing.shape as ShapePrimitive,
					repetition: current_indexing.repetition,
					current_shape_index: i,
					total_shapes: len,

					lineWidth: lineWidth,
					strokeColor: strokeColor,
					fillColor: fillColor,
				}

				callback(streamArguments)

				j += current_indexing.frame_length
			}
		}
	}
}

export default ShapeBase
