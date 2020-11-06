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
import { IShapeLoopGenerator } from '@core/types/shape-primitive'

glMatrix.setMatrixArrayType(Array)

const tmpMatrix = mat4.create()
const transformMatrix = mat4.create()
const perspectiveMatrix = mat4.create()
const repetitionMatrix = mat4.create()

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
	private generateId = -1

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
	 * Flag used to determine if indexedBuffer has been generated
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
	 * 	n: ({ parent }) => parent.repetition.index, // <- use parent
	 * 	d: ({ repetition }) => repetition.index,
	 * 	sideLength: 20,
	 * 	distance: 30,
	 * 	bUseParent: true // <- add this for use `parent` as propArgument of `n` property
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
	protected indexedBuffer?: Array<IBufferIndex>

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
	 * The bounding inside the scene
	 *
	 * @type {IShapeBounding}
	 */
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
	 * Check if the indexedBuffer array needs to be recreated every time,
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
	 * @param {ISceneChildPropArguments} [propArguments]
	 * @param {*} [defaultValue]
	 * @returns {*}
	 * @memberof ShapeBase
	 */
	public getProp(key: keyof ISceneChildProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any {
		let attribute: any = this.props[key] as any

		if (typeof attribute == 'function') {
			propArguments = propArguments || ShapeBase.EMPTY_PROP_ARGUMENTS

			if (typeof propArguments.shape === 'undefined') propArguments.shape = this
			propArguments.time = this.scene?.currentTime || 0

			attribute = attribute(propArguments)
		}

		return typeof attribute === 'undefined' || Number.isNaN(attribute) ? defaultValue : attribute
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
	 * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
	 *
	 * @param {number} generateId generation id
	 * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
	 * @param {ISceneChildPropArguments} [parentPropArguments]
	 * @memberof ShapeBase
	 */
	public generate(generateId: number, bDirectSceneChild = false, parentPropArguments?: ISceneChildPropArguments): void {
		if (!this.scene || (this.buffer && (this.bStatic || (generateId === this.generateId && !this.bUseParent)))) {
			return
		}

		this.generateId = generateId

		if (!this.bStaticIndexed || !this.bIndexed) this.indexedBuffer = []

		const repetition: IRepetition = ShapeBase.getEmptyRepetition()

		const repetitions: Array<number> | number = this.getProp(
			'repetitions',
			{ parent: parentPropArguments, repetition, time: 1, context: Context },
			1
		)

		const repetitionType = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring
		const repetitionCount = Array.isArray(repetitions)
			? repetitions[0] * (repetitions[1] ?? repetitions[0])
			: repetitions
		const repetitionColCount = Array.isArray(repetitions) ? repetitions[0] : repetitionCount
		const repetitionRowCount = Array.isArray(repetitions) ? repetitions[1] ?? repetitions[0] : 1

		const colRepetition = repetition.col
		colRepetition.count = repetitionColCount
		const rowRepetition = repetition.row
		rowRepetition.count = repetitionRowCount

		repetition.count = repetitionCount
		repetition.col.count = repetitionColCount
		repetition.row.count = repetitionRowCount
		repetition.type = repetitionType

		const propArguments: ISceneChildPropArguments = {
			repetition,
			context: Context,
			time: this.scene?.currentTime || 0,
			shape: this,
			data: this.data,
			parent: parentPropArguments,
		}

		let totalBufferLength = 0

		const buffers = []
		let currentIndex = 0
		const centerMatrix = vec2.fromValues((repetitionColCount - 1) / 2, (repetitionRowCount - 1) / 2)
		const sceneCenter: vec3 = [this.scene.center[0], this.scene.center[1], 0]

		const tmpBounding: TTempBounding = [undefined, undefined, undefined, undefined]

		for (let currentRowRepetition = 0; currentRowRepetition < repetitionRowCount; currentRowRepetition++) {
			for (
				let currentColRepetition = 0;
				currentColRepetition < repetitionColCount;
				currentColRepetition++, currentIndex++
			) {
				repetition.index = currentIndex + 1
				repetition.offset = repetitionCount > 1 ? currentIndex / (repetitionCount - 1) : 1

				repetition.angle =
					repetitionType === ERepetitionType.Ring ? ((Math.PI * 2) / repetitionCount) * currentIndex : 0
				colRepetition.index = currentColRepetition + 1
				colRepetition.offset = repetitionColCount > 1 ? currentColRepetition / (repetitionColCount - 1) : 1
				rowRepetition.index = currentRowRepetition + 1
				rowRepetition.offset = repetitionRowCount > 1 ? currentRowRepetition / (repetitionRowCount - 1) : 1

				// Generate primitives buffer recursively
				const buffer: Float32Array = this.generateBuffer(generateId, propArguments)
				const bufferLength = buffer.length

				const bounding = this.getBounding(true)

				buffers[currentIndex] = new Float32Array(bufferLength)
				totalBufferLength += bufferLength

				{
					const distance = glme.toVec2(this.getProp('distance', propArguments, glme.VEC2_ZERO))
					const displace = this.getProp('displace', propArguments, 0)
					const scale = glme.toVec3(this.getProp('scale', propArguments, glme.VEC2_ONE), 1)
					const translate = glme.toVec3(this.getProp('translate', propArguments, glme.VEC2_ZERO), 0)
					const skewX = this.getProp('skewX', propArguments, 0)
					const skewY = this.getProp('skewY', propArguments, 0)
					const squeezeX = this.getProp('squeezeX', propArguments, 0)
					const squeezeY = this.getProp('squeezeY', propArguments, 0)
					const rotateX = this.getProp('rotateX', propArguments, 0)
					const rotateY = this.getProp('rotateY', propArguments, 0)
					const rotateZ = this.getProp('rotateZ', propArguments, 0)
					const perspectiveProp = clamp(0, 1, this.getProp('perspective', propArguments, 0))
					const perspectiveOrigin = glme.toVec3(this.getProp('perspectiveOrigin', propArguments, glme.VEC2_ZERO), 0)
					const transformOrigin = glme.toVec3(this.getProp('transformOrigin', propArguments, glme.VEC2_ZERO), 0)

					let offset: vec3

					switch (repetitionType) {
						case ERepetitionType.Ring:
							offset = vec3.fromValues(distance[0], 0, 0)
							vec3.rotateZ(offset, offset, glme.VEC3_ZERO, repetition.angle + displace)
							break
						case ERepetitionType.Matrix:
							offset = vec3.fromValues(
								distance[0] * (currentColRepetition - centerMatrix[0]),
								distance[1] * (currentRowRepetition - centerMatrix[1]),
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
						mat4.identity(transformMatrix)

						// transform origin
						bTransformOrigin && mat4.translate(transformMatrix, transformMatrix, transformOrigin)
						// scale
						if (scale[0] !== 1 || scale[1] !== 1) mat4.scale(transformMatrix, transformMatrix, scale)
						// skew
						if (skewX !== 0 || skewY !== 0) {
							glme.fromSkew(tmpMatrix, [skewX, skewY])
							mat4.multiply(transformMatrix, transformMatrix, tmpMatrix)
						}
						// rotateX
						rotateX !== 0 && mat4.rotateX(transformMatrix, transformMatrix, rotateX)
						//rotateY
						rotateY !== 0 && mat4.rotateY(transformMatrix, transformMatrix, rotateY)
						//rotateZ
						rotateZ !== 0 && mat4.rotateZ(transformMatrix, transformMatrix, rotateZ)
						// reset origin
						bTransformOrigin &&
							mat4.translate(transformMatrix, transformMatrix, vec3.scale(transformOrigin, transformOrigin, -1))
						// translation
						if (translate[0] !== 0 || translate[1] !== 0) mat4.translate(transformMatrix, transformMatrix, translate)

						/**
						 * Create Repetition matrix
						 */
						mat4.identity(repetitionMatrix)
						mat4.translate(repetitionMatrix, repetitionMatrix, offset)
						if (bDirectSceneChild) {
							mat4.translate(repetitionMatrix, repetitionMatrix, sceneCenter)
						}
						if (repetitionType === ERepetitionType.Ring)
							mat4.rotateZ(repetitionMatrix, repetitionMatrix, repetition.angle + displace)

						/**
						 * Create Perspective matrix
						 */
						if (perspective > 0) {
							if (bPerspectiveOrigin) {
								perspectiveOrigin[0] *= bounding.width / 2
								perspectiveOrigin[1] *= bounding.height / 2
								perspectiveOrigin[2] = 0
							}
							mat4.perspective(perspectiveMatrix, -Math.PI / 2, 1, 0, Infinity)
						}
					}
					// Apply matrices on vertex
					for (let bufferIndex = 0; bufferIndex < bufferLength; bufferIndex += 2) {
						const vertex: vec3 = [buffer[bufferIndex], buffer[bufferIndex + 1], perspective]

						{
							vec3.transformMat4(vertex, vertex, transformMatrix)
							squeezeX !== 0 && Vec2.squeezeX(vertex, squeezeX)
							squeezeY !== 0 && Vec2.squeezeY(vertex, squeezeY)
							if (perspective > 0) {
								bPerspectiveOrigin && vec3.add(vertex, vertex, perspectiveOrigin)
								vec3.transformMat4(vertex, vertex, perspectiveMatrix)
								vec3.scale(vertex, vertex, perspective)
								bPerspectiveOrigin && vec3.sub(vertex, vertex, perspectiveOrigin)
							}

							if (this.vertexCallback) {
								const index = bufferIndex / 2
								const count = bufferLength / 2
								const vertexRepetition = {
									index: index + 1,
									count,
									offset: count > 1 ? index / (count - 1) : 1,
								}

								this.vertexCallback(vertex, vertexRepetition, propArguments)
							}

							vec3.transformMat4(vertex, vertex, repetitionMatrix)
						}

						buffers[currentIndex][bufferIndex] = vertex[0]
						buffers[currentIndex][bufferIndex + 1] = vertex[1]

						Bounding.add(tmpBounding, vertex[0], vertex[1])
					}
				}

				// After buffer creation, add a frame into indexedBuffer if not static
				if (!this.bStaticIndexed || !this.bIndexed) {
					this.addIndex(bufferLength, repetition)
				}
			}
		}

		Bounding.bind(this.bounding, tmpBounding)

		this.buffer = new Float32Array(totalBufferLength)
		for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
			this.buffer.set(buffers[i], offset)

		this.bIndexed = true
	}

	/**
	 * Add into indexedBuffer
	 *
	 * @protected
	 * @abstract
	 * @param {number} frameLength
	 * @param {IRepetition} currentRepetition
	 * @memberof ShapeBase
	 */
	protected abstract addIndex(frameLength: number, currentRepetition: IRepetition): void

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
	 * @param {number} generateId
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 * @memberof ShapeBase
	 */
	protected abstract generateBuffer(generateId: number, propArguments: ISceneChildPropArguments): Float32Array

	/**
	 *
	 *
	 * @abstract
	 * @param {(any)} shapeOrLoopOrBuffer
	 */
	public abstract setShape(shapeOrLoopOrBuffer: any): void

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
		return this.indexedBuffer
	}

	/**
	 * Stream buffer
	 *
	 * @param {(TStreamCallback} callback
	 * @memberof ShapeBase
	 */
	public stream(callback: TStreamCallback) {
		if (this.scene && this.buffer && this.indexedBuffer) {
			for (let i = 0, j = 0, len = this.indexedBuffer.length; i < len; i++) {
				const currentIndexing: IBufferIndex = this.indexedBuffer[i]

				const propArguments: ISceneChildPropArguments = {
					shape: currentIndexing.shape,
					repetition: currentIndexing.repetition,
					context: Context,
					time: 0,
					parent: currentIndexing.parent,
					data: currentIndexing.shape.data,
				}

				const fillColor = currentIndexing.shape.getProp('fillColor' as keyof ISceneChildProps, propArguments)

				const strokeColor = currentIndexing.shape.getProp(
					'strokeColor' as keyof ISceneChildProps,
					propArguments,
					typeof fillColor !== 'undefined' ? undefined : this.scene.color
				)

				const lineWidth = currentIndexing.shape.getProp(
					'lineWidth' as keyof ISceneChildProps,
					propArguments,
					typeof fillColor !== 'undefined' && typeof strokeColor === 'undefined' ? undefined : 1
				)

				const streamArguments: ISceneChildStreamArguments = {
					buffer: this.buffer,
					frameLength: currentIndexing.frameLength,
					frameBufferIndex: j,

					shape: currentIndexing.shape as ShapePrimitive,
					repetition: currentIndexing.repetition,
					currentShapeIndex: i,
					totalShapes: len,

					lineWidth: lineWidth,
					strokeColor: strokeColor,
					fillColor: fillColor,
				}

				callback(streamArguments)

				j += currentIndexing.frameLength
			}
		}
	}
}

export default ShapeBase
