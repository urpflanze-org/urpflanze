import { TStreamCallback } from '@core/types/scene'
import { ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings } from '@core/types/scene-child'
import { IBufferIndex, IShapeBounding } from '@core/types/shape-base'

import Scene from '@core/Scene'

/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
let __id = 0

/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
abstract class SceneChild {
	/**
	 * Reference of the scene to which it is attached
	 *
	 * @type {Scene}
	 */
	public scene?: Scene

	/**
	 * The unique id
	 *
	 * @type {number | string}
	 */
	public id: number | string

	/**
	 * The human readable name
	 *
	 * @type {string}
	 */
	public name: string

	/**
	 * The human readable type label
	 *
	 * @type {string}
	 */
	public type: string

	/**
	 * The number that refers to the drawinf order
	 *
	 * @type {number}
	 */
	public order: number

	/**
	 * The basic properties
	 *
	 * @protected
	 * @type {ISceneChildProps}
	 */
	protected props: ISceneChildProps

	/**
	 * Custom client data
	 *
	 * @type {*}
	 */
	public data: any

	/**
	 * Creates an instance of SceneChild.
	 * Base values will be assigned in case they are not passed
	 *
	 * @param {ISceneChildSettings} settings
	 */
	constructor(settings: ISceneChildSettings) {
		this.id = settings.id ?? ++__id

		this.type = settings.type || 'SceneChild'
		this.name = settings.name || this.type + '_' + this.id
		this.data = settings.data || {}

		this.props = {}
	}

	/**
	 * With this method it is possible to check if the buffer will be generated at each update
	 *
	 * @abstract
	 * @returns {boolean}
	 */
	public abstract isStatic(): boolean

	/**
	 * With this method you can check if the streaming buffer will be generated at each update
	 *
	 * @abstract
	 * @returns {boolean}
	 */
	public abstract isStaticIndexed(): boolean

	/**
	 * Find this or form or children.
	 * Overridden by classes that extend it
	 *
	 * @param {string | number} idOrName
	 * @returns {(SceneChild | null)}
	 */
	find(idOrName: string | number): SceneChild | null {
		if (this.id === idOrName || this.name === idOrName) return this

		return null
	}

	/**
	 * Return the sceneChild properties
	 *
	 * @returns {ISceneChildProps}
	 */
	public getProps(): ISceneChildProps {
		return this.props
	}

	/**
	 * Return a sceneChild prop or default value
	 *
	 * @param {keyof ISceneChildProps} key
	 * @param {ISceneChildPropArguments} [propArguments]
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	public getProp(key: keyof ISceneChildProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any {
		return (this.props[key] ?? defaultValue) as any
	}

	/**
	 * Set a single or multiple props and clear buffer if shape vertex depends from prop
	 *
	 * @abstract
	 * @template K
	 * @param {(K | ISceneChildProps)} key
	 * @param {ISceneChildProps[K]} [value]
	 * @param {boolean} [bClearIndexed]
	 */
	abstract setProp<K extends keyof ISceneChildProps>(
		key: K | ISceneChildProps,
		value?: ISceneChildProps[K],
		bClearIndexed?: boolean
	): void

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 */
	public setPropUnsafe(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void {
		if (typeof key == 'string') this.props[key] = value
		else
			Object.keys(key).forEach(
				(k: string) =>
					(this.props[k as keyof ISceneChildProps] = (key as ISceneChildProps)[k as keyof ISceneChildProps] as any)
			)
	}

	/**
	 * Generate shape.
	 * Best explained in <a href="[base_url]/ShapeBase">ShapeBase</a>
	 *
	 * @abstract
	 * @param {number} generateId
	 * @param {boolean} bDirectSceneChild
	 * @param {ISceneChildPropArguments} parentPropArguments
	 */
	abstract generate(
		generateId: number,
		bDirectSceneChild: boolean,
		parentPropArguments?: ISceneChildPropArguments
	): void

	/**
	 * Get buffer bounding
	 *
	 * @abstract
	 * @param {boolean} bDirectSceneChild
	 * @returns {IShapeBounding }
	 */
	abstract getBounding(bDirectSceneChild: boolean): IShapeBounding

	/**
	 * Stream shape
	 * Best explained in ShapeBase
	 *
	 * @abstract
	 * @param {TStreamCallback} callback
	 */
	abstract stream(callback: TStreamCallback): void

	/**
	 * Return buffer of vertext if is generated
	 *
	 * @returns {(Float32Array | undefined)}
	 */
	public abstract getBuffer(): Float32Array | undefined

	/**
	 * Return indexed buffer
	 *
	 * @returns {(Array<IBufferIndex> | undefined)}
	 */
	public abstract getIndexedBuffer(): Array<IBufferIndex> | undefined

	/**
	 * Get length of buffer
	 *
	 * @abstract
	 * @param {ISceneChildPropArguments} [propArguments]
	 * @returns {number}
	 */
	abstract getBufferLength(propArguments?: ISceneChildPropArguments): number

	/**
	 * Clear buffer
	 *
	 * @abstract
	 * @param {boolean} [bClearIndexed]
	 * @param {boolean} [bPropagateToParents]
	 */
	abstract clearBuffer(bClearIndexed: boolean, bPropagateToParents: boolean): void
}

export default SceneChild
