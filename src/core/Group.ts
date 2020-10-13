import { TStreamCallback } from '@core/types/scene'
import { ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings } from '@core/types/scene-child'
import { IBufferIndex, IShapeBounding } from '@core/types/shape-base'

import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'
import ShapeBase from '@core/shapes/ShapeBase'
import ShapePrimitive from './shapes/ShapePrimitive'

/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @example
 * ```javascript
 * // Group example
 *
 * const rect = new Urpflanze.Rect({
 * 	distance: 100 // <- if a property is set the group will not overwrite it
 * })
 * const group = new Urpflanze.Group({
 * 	repetitions: 3,
 * 	distance: 200
 * })
 *
 * group.add(rect)
 * group.add(new Urpflanze.Triangle())
 * ```
 * @class Group
 */
class Group extends SceneChild {
	/**
	 * a list of shapes or groups
	 *
	 * @internal
	 * @ignore
	 */
	private children: Array<SceneChild>

	/**
	 * Creates an instance of Group
	 *
	 * @param {ISceneChildSettings} [settings={}]
	 * @memberof Group
	 */
	constructor(settings: ISceneChildSettings = {}) {
		settings.type = 'Group'
		super(settings)

		this.children = []

		// remove sceneChild props
		;['id', 'name', 'data', 'order', 'type'].forEach((prop: string) => {
			if (prop in settings) delete settings[prop as keyof ISceneChildSettings]
		})

		this.props = settings
	}

	/**
	 * Check group has static children
	 *
	 * @returns {boolean}
	 * @memberof Group
	 */
	public isStatic(): boolean {
		const children = this.children
		for (let i = 0, len = children.length; i < len; i++) if (!children[i].isStatic()) return false

		return true
	}

	/**
	 * Check group has static children indexed
	 *
	 * @returns {boolean}
	 * @memberof Group
	 */
	public isStaticIndexed(): boolean {
		const children = this.children
		for (let i = 0, len = children.length; i < len; i++) if (!children[i].isStaticIndexed()) return false

		return true
	}

	/**
	 * Add iitem to Group
	 *
	 * @param {SceneChild} item
	 * @memberof Group
	 */
	public add(item: SceneChild): void {
		const rawItemProps = item.getProps()

		;(Object.keys(this.props) as Array<keyof ISceneChildProps>).forEach((propKey: keyof ISceneChildProps) => {
			if (typeof rawItemProps[propKey] === 'undefined') item.setProp(propKey, this.props[propKey])
		})

		item.order =
			typeof item.order !== 'undefined'
				? item.order
				: this.children.length > 0
				? Math.max.apply(
						this,
						this.children.map(e => e.order || 0)
				  ) + 1
				: 0

		this.scene && Scene.propagateToChilden(item, this.scene)

		this.children.push(item)

		this.sortChildren()
	}

	/**
	 * Sort children
	 *
	 * @memberof Group
	 */
	public sortChildren(): void {
		this.children.sort((a: SceneChild, b: SceneChild) => (a.order as number) - (b.order as number))

		this.children = this.children.map((child, index) => {
			child.order = index
			return child
		})

		this.clearBuffer(true)
	}

	/**
	 * Return shape children
	 *
	 * @returns {Array<SceneChild>}
	 * @memberof Group
	 */
	public getChildren(): Array<SceneChild> {
		return this.children
	}

	/**
	 * Find scene child from id or name
	 *
	 * @param {number | string} id_or_name
	 * @returns {(SceneChild | null)}
	 * @memberof Group
	 */
	public find(id_or_name: number | string): SceneChild | null {
		if (this.id === id_or_name || this.name === id_or_name) return this

		const children: Array<SceneChild> = this.getChildren()

		for (let i = 0, len = children.length; i < len; i++) {
			const result: SceneChild | null = children[i].find(id_or_name)

			if (result !== null) return result
		}

		return null
	}

	/**
	 * Get item from group
	 *
	 * @param {number} index
	 * @returns {(SceneChild | null)}
	 * @memberof Group
	 */
	public get(index: number): SceneChild | null {
		return index >= 0 && index < this.children.length ? this.children[index] : null
	}

	/**
	 * Remove item from group
	 *
	 * @param {number} index
	 * @returns {(false | Array<SceneChild>)}
	 * @memberof Group
	 */
	public remove(index: number): false | Array<SceneChild> {
		if (index >= 0 && index < this.children.length) {
			const removed: Array<SceneChild> = this.children.splice(index, 1)
			this.clearBuffer(true)
			return removed
		}

		return false
	}

	/**
	 * Remove from id
	 *
	 * @param {number} id
	 * @memberof Scene
	 */
	public removeFromId(id: number | string): void {
		for (let i = 0, len = this.children.length; i < len; i++) {
			if (this.children[i].id == id) {
				this.children.splice(i, 1)

				return this.clearBuffer(true)
			}
		}
	}

	/**
	 * Generate children buffers
	 *
	 * @param {number} indexing_id
	 * @param {boolean} [bDirectSceneChild=false]
	 * @param {ISceneChildPropArguments} [parent_prop_arguments]
	 * @memberof Group
	 */
	public generate(
		indexing_id: number,
		bDirectSceneChild: boolean = false,
		parent_prop_arguments?: ISceneChildPropArguments
	): void {
		this.children.forEach(item => item.generate(indexing_id, bDirectSceneChild, parent_prop_arguments))
	}

	public getBounding(): IShapeBounding {
		const boundings: Array<IShapeBounding> = []

		if (this.children.length > 0) {
			this.children.forEach(item => boundings.push(item.getBounding()))

			const bounding: IShapeBounding = { ...boundings[0] }

			for (let i = 1, len = this.children.length; i < len; i++) {
				bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x
				bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y
				bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width
				bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height
			}

			bounding.cx = bounding.x + bounding.width / 2
			bounding.cy = bounding.y + bounding.height / 2

			// console.log('bounding', bounding, boundings)
			return bounding
		}

		return { ...ShapePrimitive.EMPTY_BOUNDING }
	}

	/**
	 * Chear children buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @memberof Group
	 */
	public clearBuffer(bClearIndexed: boolean = false, bPropagateToParents: boolean = true) {
		this.children.forEach(item => item.clearBuffer(bClearIndexed, false))

		if (this.scene && bPropagateToParents) {
			const parents = this.scene.getParentsOfSceneChild(this)
			parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */)
		}
		// if (bPropagateToParents && this.scene)
		// {
		//     const parents = this.scene.getParentsOfSceneChild(this)
		//     parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, true, false)
		// }

		// if (bPropagateToChildren)
		// {
		//     this.children.forEach(sceneChild => sceneChild.clearBuffer(bClearIndexed, false, true))
		// }
	}

	/**
	 * Set a single or multiple props
	 *
	 * @abstract
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 * @memberof SceneChild
	 */
	public setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void {
		if (typeof key === 'object')
			Object.keys(key).forEach(
				(k: string) => (this.props[k as keyof ISceneChildProps] = key[k as keyof ISceneChildProps] as any)
			)
		else this.props[key] = value

		this.children.forEach(item => item.setProp(key, value))
	}

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 * @memberof ShapeBase
	 */
	public setPropUnsafe(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void {
		super.setPropUnsafe(key, value)

		this.children.forEach(item => item.setPropUnsafe(key, value))
	}

	/**
	 * Return length of buffer
	 *
	 * @param {ISceneChildPropArguments} prop_arguments
	 * @returns {number}
	 * @memberof Group
	 */
	public getBufferLength(prop_arguments?: ISceneChildPropArguments): number {
		return this.children.map(sceneChild => sceneChild.getBufferLength(prop_arguments)).reduce((p, c) => p + c, 0)
	}

	/**
	 * return a single buffer binded from children
	 *
	 * @returns {Float32Array}
	 * @memberof Group
	 */
	public getBuffer(): Float32Array | undefined {
		const buffers: Array<Float32Array> = this.children
			.map(item => item.getBuffer())
			.filter(b => b !== undefined) as Array<Float32Array>

		const size = buffers.reduce((curr_value: number, buffer: Float32Array) => curr_value + buffer.length, 0)

		if (size > 0) {
			const result = new Float32Array(size)
			result.set(buffers[0], 0)

			for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
				offset += buffers[i - 1].length
				result.set(buffers[i], offset)
			}

			return result
		}

		return ShapeBase.EMPTY_BUFFER
	}

	/**
	 * return a single buffer binded from children
	 *
	 * @returns {(Array<IBufferIndex> | undefined)}
	 * @memberof Group
	 */
	public getIndexedBuffer(): Array<IBufferIndex> | undefined {
		const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined) as Array<
			Array<IBufferIndex>
		>

		return ([] as Array<IBufferIndex>).concat.apply([], indexed)
	}

	/**
	 * Call strem on children
	 *
	 * @param {TStreamCallback} callback
	 * @memberof Group
	 */
	public stream(callback: TStreamCallback): void {
		this.children.forEach(item => item.stream(callback))
	}

	// /**
	//  * Remove duplicate props
	//  *
	//  * @private
	//  * @static
	//  * @param {Group} group
	//  * @param {SceneChild} dest
	//  * @returns {ISceneChildProps}
	//  * @memberof Group
	//  */
	// private static removeIntersected(group: Group, dest: SceneChild): ISceneChildProps {
	// 	const groupProps = group.getProps()
	// 	const destProps = dest.getProps()

	// 	const groupPropsKeys = Object.keys(groupProps) as Array<keyof ISceneChildProps>
	// 	const destPropsKeys = Object.keys(destProps) as Array<keyof ISceneChildProps>

	// 	const result: ISceneChildProps = {}

	// 	groupPropsKeys.forEach((key: keyof ISceneChildProps) => {
	// 		// destPropsKeys.indexOf(key) >= 0 && !isDef(destProps[key]) && (result[key] = groupProps[key] as any)
	// 		destPropsKeys.indexOf(key) >= 0 && (result[key] = groupProps[key] as any)
	// 	})

	// 	return result
	// }
}

export default Group
