import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from '@core/types/ShapeBase'
import { ShapeBaseProps } from '@core/interfaces/shapes/Interfaces'
import Scene from '@core/Scene'
import SceneChildInterface from './interfaces/SceneChildInterface'

let __id = 0

/**
 * Item to added into scene
 *
 * @abstract
 * @class SceneChild
 */
abstract class SceneChild {
	/**
	 * Reference to scene
	 *
	 * @type {Scene}
	 * @memberof SceneChild
	 */
	public scene?: Scene

	/**
	 * Item id
	 *
	 * @type {number | string}
	 * @memberof SceneChild
	 */
	public id: number | string

	/**
	 * item name
	 *
	 * @type {string}
	 * @memberof SceneChild
	 */
	public name: string

	/**
	 * item type
	 *
	 * @type {string}
	 * @memberof SceneChild
	 */
	public type: string

	/**
	 * item order (like z-index)
	 *
	 * @type {number}
	 * @memberof SceneChild
	 */
	public order: number

	/**
	 * Item props
	 *
	 * @protected
	 * @type {ShapeBaseProps}
	 * @memberof SceneChild
	 */
	protected props: ShapeBaseProps

	/**
	 * Custom client data
	 *
	 * @type {*}
	 * @memberof ShapeBase
	 */
	public data: any

	/**
	 * Creates an instance of SceneChild.
	 *
	 * @param {SceneChildInterface} settings
	 * @memberof SceneChild
	 */
	constructor(settings: SceneChildInterface) {
		this.id = settings.id ?? ++__id

		this.type = settings.type || 'SceneChild'
		this.name = settings.name || this.type + '_' + this.id
		this.data = settings.data || {}

		this.props = {}
	}

	/**
	 * Check shape is static
	 *
	 * @abstract
	 * @returns {boolean}
	 * @memberof SceneChild
	 */
	public abstract isStatic(): boolean

	/**
	 * Checkk shape has static index
	 *
	 * @abstract
	 * @returns {boolean}
	 * @memberof SceneChild
	 */
	public abstract isStaticIndexed(): boolean

	/**
	 * Find this or shape children
	 *
	 * @param {string | number} id_or_name
	 * @returns {(SceneChild | null)}
	 * @memberof SceneChild
	 */
	find(id_or_name: string | number): SceneChild | null {
		if (this.id === id_or_name || this.name === id_or_name) return this

		return null
	}

	/**
	 * Item props
	 *
	 * @returns {ShapeBaseProps}
	 * @memberof SceneChild
	 */
	public getProps(): ShapeBaseProps {
		return this.props
	}

	/**
	 * Return a prop
	 *
	 * @param {keyof ShapeBaseProps} key
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof SceneChild
	 */
	public getProp(key: keyof ShapeBaseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any {
		return this.props[key] ?? default_value
	}

	/**
	 * Set a single or multiple props and clear buffer if shape vertex depends from prop
	 *
	 * @abstract
	 * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
	 * @param {*} [value]
	 * @param {boolean} [bClearIndexed]
	 * @memberof SceneChild
	 */
	abstract setProp(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any, bClearIndexed?: boolean): void

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
	 * @param {*} [value]
	 * @memberof ShapeBase
	 */
	public setPropUnsafe(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any): void {
		if (typeof key == 'string') this.props[key] = value
		else
			Object.keys(key).forEach(
				(k: string) =>
					(this.props[k as keyof ShapeBaseProps] = (key as ShapeBaseProps)[k as keyof ShapeBaseProps] as any)
			)
	}

	/**
	 * Generate shape
	 *
	 * @abstract
	 * @param {number} generate_id
	 * @param {boolean} [bDirectSceneChild]
	 * @param {ShapeBasePropArguments} [parent_prop_arguments]
	 * @memberof SceneChild
	 */
	abstract generate(
		generate_id: number,
		bDirectSceneChild?: boolean,
		parent_prop_arguments?: ShapeBasePropArguments
	): void

	/**
	 * Stream shape
	 *
	 * @abstract
	 * @param {(stream_arguments: ShapeBaseStreamArguments) =>  void} callback
	 * @memberof SceneChild
	 */
	abstract stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void

	/**
	 * Return buffer
	 *
	 * @returns {(Float32Array | undefined)}
	 * @memberof ShapeBase
	 */
	public abstract getBuffer(): Float32Array | undefined

	/**
	 * Return indexed buffer
	 *
	 * @returns {(Array<ShapeBaseStreamIndexing> | undefined)}
	 * @memberof ShapeBase
	 */
	public abstract getIndexedBuffer(): Array<ShapeBaseStreamIndexing> | undefined

	/**
	 * Get length of buffer
	 *
	 * @abstract
	 * @param {ShapeBasePropArguments} [prop_arguments]
	 * @returns {number}
	 * @memberof SceneChild
	 */
	abstract getBufferLength(prop_arguments?: ShapeBasePropArguments): number

	/**
	 * Clear buffer
	 *
	 * @abstract
	 * @param {boolean} [bClearIndexed]
	 * @param {boolean} [bPropagateToParents]
	 * @memberof SceneChild
	 */
	abstract clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void

	/**
	 * Index buffer
	 *
	 * @abstract
	 * @param {Array<ShapeBaseStreamIndexing>} buffer
	 * @param {ShapeBaseStreamIndexing} [parent]
	 * @memberof SceneChild
	 */
	abstract index(buffer: Array<ShapeBaseStreamIndexing>, parent?: ShapeBaseStreamIndexing): void
}

export default SceneChild
