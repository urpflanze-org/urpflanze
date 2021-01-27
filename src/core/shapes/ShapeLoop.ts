import { IShapeLoopRepetition, ISceneChildPropArguments } from '@core/types/scene-child'
import {
	IShapeLoopGenerator,
	IShapeLoopProps,
	IShapeLoopSettings,
	TShapeLoopGeneratorFormula,
} from '@core/types/shape-primitives'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import Bounding from '@core/math/bounding'
import { PI2 } from '@core/math'

import ShapePrimitive from '@core/shapes/ShapePrimitive'

/**
 *
 *
 * @export
 * @internal
 * @ignore
 * @interface ILoopMeta
 */
export interface ILoopMeta {
	start: number
	end: number
	inc: number
	count: number
}

/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop<K extends IShapeLoopProps = IShapeLoopProps> extends ShapePrimitive<K> {
	public static readonly PId2: number = Math.PI / 2

	/**
	 * chek if loop generate a static shape
	 *
	 * @protected
	 * @type {boolean}
	 */
	protected bStaticLoop!: boolean

	/**
	 * Loop generator
	 *
	 * @protected
	 * @type {IShapeLoopGenerator}
	 */
	protected loop!: IShapeLoopGenerator

	/**
	 * Generate static loop buffer whem IShapeLoopGenerator props
	 * haven't dynamic properties
	 *
	 * @protected
	 * @type {Float32Array}
	 */
	protected currentOrSingleLoopBuffer?: Float32Array

	/**
	 * list of prop has impact on shape loop generation
	 *
	 * @protected
	 * @type {Array<'propArguments' | keyof IShapeLoopProps | string>}
	 */
	public loopDependencies: Array<'propArguments' | keyof IShapeLoopProps | string>

	/**
	 * Creates an instance of ShapeLoop.
	 *
	 * @param {IShapeLoopSettings} [settings={}]
	 * @param {boolean} [bPreventGeneration=false]
	 */
	constructor(settings: IShapeLoopSettings = {}, bPreventGeneration = false) {
		settings.type = settings.type || 'ShapeLoop'
		super(settings)

		this.loopDependencies = (settings.loopDependencies || []).concat('sideLength')

		this.props.loop = settings.loop

		if (!bPreventGeneration) {
			this.loop = {
				start: 0,
				end: PI2,
				inc: PI2 / 10,
				vertex: () => [0, 0],
			}

			this.bStaticLoop = this.isStaticLoop()
			this.bStatic = this.isStatic()
			this.bStaticIndexed = this.isStaticIndexed()
		}
	}

	/**
	 * Check if currentOrSingleLoopBuffer is static
	 *
	 * @returns {boolean}
	 */
	public isStaticLoop(): boolean {
		if (this.loopDependencies.includes('propArguments')) return false

		for (let i = 0, len = this.loopDependencies.length; i < len; i++)
			if (typeof this.props[this.loopDependencies[i] as keyof IShapeLoopProps] === 'function') return false

		return true
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return this.bStaticLoop && super.isStatic()
	}

	/**
	 * Check if shape has static indexed
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return this.bStaticLoop && super.isStaticIndexed()
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 */
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
		super.clearBuffer(bClearIndexed, bPropagateToParents)

		this.bStaticLoop = this.isStaticLoop()

		if (bClearIndexed) {
			this.currentOrSingleLoopBuffer = undefined
		}
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(K)} key
	 * @param {*} [value]
	 * @param {boolean} [bClearIndexed=false]
	 */
	public setProp<K>(key: K, value?: any): void {
		let bClearIndexed = false
		const keys = typeof key === 'string' ? { [key]: value } : key

		for (let i = this.loopDependencies.length - 1; i >= 0; i--) {
			if (this.loopDependencies[i] in keys) {
				// this.props.loop = undefined
				bClearIndexed = true
				break
			}
		}

		if ('loop' in keys) {
			keys.loop = { ...this.props.loop, ...keys.loop }
			bClearIndexed = true
		}

		super.setProp(keys, value, bClearIndexed)
	}

	/**
	 * Return length of buffer
	 *
	 * @param {ISceneChildPropArguments} [propArguments]
	 * @returns {number}
	 */
	public getBufferLength(propArguments: ISceneChildPropArguments): number {
		if (this.bStatic && typeof this.buffer !== 'undefined') return this.buffer.length

		if (this.bStaticLoop && typeof this.currentOrSingleLoopBuffer !== 'undefined')
			return this.currentOrSingleLoopBuffer.length * this.getRepetitionCount()

		const { count } = this.getLoop(propArguments)

		return this.getRepetitionCount() * count * 2
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
		if (!this.bStaticLoop) return this.generateLoopBuffer(propArguments)

		if (typeof this.props.sideLength === 'function' || typeof this.currentOrSingleLoopBuffer === 'undefined')
			this.currentOrSingleLoopBuffer = this.generateLoopBuffer(propArguments)

		return this.currentOrSingleLoopBuffer
	}

	/**
	 * Generate loop buffer
	 *
	 * @protected
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateLoopBuffer(propArguments: ISceneChildPropArguments): Float32Array {
		const { start, inc, end, count } = this.getLoop(propArguments)

		const sideLength = this.getRepetitionSideLength(propArguments)
		const getVertex = (this.props.loop && this.props.loop.vertex
			? this.props.loop.vertex
			: this.loop.vertex) as TShapeLoopGeneratorFormula

		const shapeLoop: IShapeLoopRepetition = {
			index: 0,
			offset: 0,
			angle: 0,
			count: count,
		}

		const vertexLength = shapeLoop.count
		const bufferLength = vertexLength * 2
		const currentOrSingleLoopBuffer = new Float32Array(bufferLength)

		const bNoAdapt = this.adaptMode === EShapePrimitiveAdaptMode.None

		const tmpBounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, j = 0; i < vertexLength; i++, j += 2) {
			const angle = start + inc * i
			const offset = shapeLoop.count > 1 ? i / (shapeLoop.count - 1) : 1
			// const angle = (end - start) * offset + start

			shapeLoop.angle = angle
			shapeLoop.index = i + 1
			shapeLoop.offset = offset

			const vertex = Float32Array.from(getVertex(shapeLoop, propArguments))

			currentOrSingleLoopBuffer[j] = vertex[0]
			currentOrSingleLoopBuffer[j + 1] = vertex[1]

			if (bNoAdapt) {
				currentOrSingleLoopBuffer[j] *= sideLength[0]
				currentOrSingleLoopBuffer[j + 1] *= sideLength[1]

				Bounding.add(tmpBounding, currentOrSingleLoopBuffer[j], currentOrSingleLoopBuffer[j + 1])
			}
		}

		if (bNoAdapt) {
			Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding)
		} else {
			/**
			 * Adapt and apply side length
			 */
			const buffer = ShapePrimitive.adaptBuffer(currentOrSingleLoopBuffer, this.adaptMode as EShapePrimitiveAdaptMode)

			Bounding.clear(tmpBounding)

			for (let i = 0; i < bufferLength; i += 2) {
				buffer[i] = buffer[i] * sideLength[0]
				buffer[i + 1] = buffer[i + 1] * sideLength[1]

				Bounding.add(tmpBounding, buffer[i], buffer[i + 1])
			}

			Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding)

			return buffer
		}

		return currentOrSingleLoopBuffer
	}

	/**
	 * Return information about a client loop gnerator
	 *
	 * @private
	 * @param {ISceneChildPropArguments} propArguments
	 * @returns {ShapeLoopInformation}
	 */
	private getLoop(propArguments: ISceneChildPropArguments): ILoopMeta {
		let start = this.props.loop?.start ?? this.loop.start
		let end = this.props.loop?.end ?? this.loop.end
		let inc = this.props.loop?.inc ?? this.loop.inc

		start = (typeof start === 'function' ? start(propArguments) : start) as number
		end = (typeof end === 'function' ? end(propArguments) : end) as number
		inc = (typeof inc === 'function' ? inc(propArguments) : inc) as number

		const count = Math.ceil((end - start) / inc)

		return { start, end, inc, count: count <= 0 ? 0 : count }
	}

	/**
	 * Set shape from loop generator
	 *
	 * @param {(IShapeLoopGenerator)} [shape]
	 */
	public setShape(loop: IShapeLoopGenerator): void {
		this.setProp('loop', loop)
	}
}

export default ShapeLoop
