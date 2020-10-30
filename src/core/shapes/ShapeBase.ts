import { glMatrix, mat4, vec2, vec3 } from 'gl-matrix'

import { TStreamCallback } from '@core/types/scene'
import { IShapeBaseSettings, IShapeBounding, TVertexCallback } from '@core/types/shape-base'
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
import Context from '@core/Context'
import * as glme from '@core/math/gl-matrix-extensions'
import ShapePrimitive from './ShapePrimitive'
import { clamp } from 'src/Utilites'
import Vec2 from '@core/math/Vec2'
import Bounding, { TTempBounding } from '@core/math/bounding'

glMatrix.setMatrixArrayType(Array)

const tmp_matrix = mat4.create()
const transform_matrix = mat4.create()
const perspective_matrix = mat4.create()
const repetition_matrix = mat4.create()

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
	private generate_id = -1

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
	protected bIndexed = false

	/**
	 * With this parameter the shape will be created at each repetition,
	 * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
	 * In the case of ShapePrimitive fillColor, strokeColor and lineWidth don't need to as they are generated during the buffer stream.
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

	public bounding: IShapeBounding = {
		cx: 0,
		cy: 0,
		x: -1,
		y: -1,
		width: 2,
		height: 2,
	}

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
			transformOrigin: settings.transformOrigin,
			perspective: settings.perspective,
			perspectiveOrigin: settings.perspectiveOrigin,
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
			typeof props.transformOrigin !== 'function'
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
	public setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any, bClearIndexed = false): void {
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
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
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
		bDirectSceneChild = false,
		parent_prop_arguments?: ISceneChildPropArguments
	): void {
		if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent)))) {
			return
		}

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
		const sceneCenter: vec3 = [this.scene.center[0], this.scene.center[1], 0]

		const tmp_bounding: TTempBounding = [undefined, undefined, undefined, undefined]

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

				const bounding = this.getBounding(true)

				buffers[current_index] = new Float32Array(buffer_length)
				total_buffer_length += buffer_length

				{
					const distance = glme.toVec2(this.getProp('distance', prop_arguments, glme.VEC2_ZERO))
					const displace = this.getProp('displace', prop_arguments, 0)
					const scale = glme.toVec3(this.getProp('scale', prop_arguments, glme.VEC2_ONE), 1)
					const translate = glme.toVec3(this.getProp('translate', prop_arguments, glme.VEC2_ZERO), 0)
					const skewX = this.getProp('skewX', prop_arguments, 0)
					const skewY = this.getProp('skewY', prop_arguments, 0)
					const squeezeX = this.getProp('squeezeX', prop_arguments, 0)
					const squeezeY = this.getProp('squeezeY', prop_arguments, 0)
					const rotateX = this.getProp('rotateX', prop_arguments, 0)
					const rotateY = this.getProp('rotateY', prop_arguments, 0)
					const rotateZ = this.getProp('rotateZ', prop_arguments, 0)
					const perspectiveProp = clamp(0, 1, this.getProp('perspective', prop_arguments, 0))
					const perspectiveOrigin = glme.toVec3(this.getProp('perspectiveOrigin', prop_arguments, glme.VEC2_ZERO), 0)
					const transformOrigin = glme.toVec3(this.getProp('transformOrigin', prop_arguments, glme.VEC2_ZERO), 0)

					let offset: vec3

					switch (repetition_type) {
						case ERepetitionType.Ring:
							offset = vec3.fromValues(distance[0], 0, 0)
							vec3.rotateZ(offset, offset, glme.VEC3_ZERO, repetition.angle + displace)
							break
						case ERepetitionType.Matrix:
							offset = vec3.fromValues(
								distance[0] * (current_col_repetition - center_matrix[0]),
								distance[1] * (current_row_repetition - center_matrix[1]),
								0
							)
							break
					}

					const perspectiveSize = perspectiveProp > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1
					const perspective = perspectiveProp > 0 ? perspectiveSize + (1 - perspectiveProp) * (perspectiveSize * 10) : 0
					const bTransformOrigin = perspective !== 0 || transformOrigin[0] !== 0 || transformOrigin[1] !== 0
					const bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0

					if (bTransformOrigin) {
						transformOrigin[0] *= bounding.width / 2
						transformOrigin[1] *= bounding.height / 2
						transformOrigin[2] = perspective
					}

					/**
					 * Create Transformation matrix
					 */
					{
						mat4.identity(transform_matrix)

						// transform origin
						bTransformOrigin && mat4.translate(transform_matrix, transform_matrix, transformOrigin)
						// scale
						if (scale[0] !== 1 || scale[1] !== 1) mat4.scale(transform_matrix, transform_matrix, scale)
						// skew
						if (skewX !== 0 || skewY !== 0) {
							glme.fromSkew(tmp_matrix, [skewX, skewY])
							mat4.multiply(transform_matrix, transform_matrix, tmp_matrix)
						}
						// rotateX
						rotateX !== 0 && mat4.rotateX(transform_matrix, transform_matrix, rotateX)
						//rotateY
						rotateY !== 0 && mat4.rotateY(transform_matrix, transform_matrix, rotateY)
						//rotateZ
						rotateZ !== 0 && mat4.rotateZ(transform_matrix, transform_matrix, rotateZ)
						// reset origin
						bTransformOrigin &&
							mat4.translate(transform_matrix, transform_matrix, vec3.scale(transformOrigin, transformOrigin, -1))
						// translation
						if (translate[0] !== 0 || translate[1] !== 0) mat4.translate(transform_matrix, transform_matrix, translate)

						/**
						 * Create Repetition matrix
						 */
						mat4.identity(repetition_matrix)
						mat4.translate(repetition_matrix, repetition_matrix, offset)
						if (bDirectSceneChild) {
							mat4.translate(repetition_matrix, repetition_matrix, sceneCenter)
						}
						if (repetition_type === ERepetitionType.Ring)
							mat4.rotateZ(repetition_matrix, repetition_matrix, repetition.angle + displace)

						/**
						 * Create Perspective matrix
						 */
						if (perspective > 0) {
							if (bPerspectiveOrigin) {
								perspectiveOrigin[0] *= bounding.width / 2
								perspectiveOrigin[1] *= bounding.height / 2
								perspectiveOrigin[2] = 0
							}
							mat4.perspective(perspective_matrix, -Math.PI / 2, 1, 0, Infinity)
						}
					}
					// Apply matrices on vertex
					for (let buffer_index = 0; buffer_index < buffer_length; buffer_index += 2) {
						const vertex: vec3 = [buffer[buffer_index], buffer[buffer_index + 1], perspective]

						{
							vec3.transformMat4(vertex, vertex, transform_matrix)
							squeezeX !== 0 && Vec2.squeezeX(vertex, squeezeX)
							squeezeY !== 0 && Vec2.squeezeY(vertex, squeezeY)
							if (perspective > 0) {
								bPerspectiveOrigin && vec3.add(vertex, vertex, perspectiveOrigin)
								vec3.transformMat4(vertex, vertex, perspective_matrix)
								vec3.scale(vertex, vertex, perspective)
								bPerspectiveOrigin && vec3.sub(vertex, vertex, perspectiveOrigin)
							}

							if (this.vertexCallback) {
								const index = buffer_index / 2 + 1
								const count = buffer_length / 2
								const vertexRepetition = {
									index,
									count,
									offset: index / count,
								}

								this.vertexCallback(vertex, vertexRepetition, prop_arguments)
							}

							vec3.transformMat4(vertex, vertex, repetition_matrix)
						}

						buffers[current_index][buffer_index] = vertex[0]
						buffers[current_index][buffer_index + 1] = vertex[1]

						Bounding.add(tmp_bounding, vertex[0], vertex[1])
					}
				}

				// After buffer creation, add a frame into indexed_buffer if not static
				if (!this.bStaticIndexed || !this.bIndexed) {
					this.addIndex(buffer_length, repetition)
				}
			}
		}

		Bounding.bind(this.bounding, tmp_bounding)

		this.buffer = new Float32Array(total_buffer_length)
		for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
			this.buffer.set(buffers[i], offset)

		this.bIndexed = true
	}

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
		const repetitions = this.getProp('repetitions', undefined, 1)

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
					typeof fillColor !== 'undefined' ? undefined : this.scene.color
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
