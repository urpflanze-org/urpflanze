import { TStreamCallback, ISceneSettingsInterface } from '@core/types/scene'

import Vec2, { TArray } from '@core/math/Vec2'

import SceneChild from '@core/SceneChild'
import Group from '@core/Group'
import Shape from '@core/shapes/Shape'

/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
class Scene {
	/**
	 * Logical number, the drawer will take care
	 * of defining the unit of measure
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public width: number = 400

	/**
	 * Logical number, the drawer will take care
	 * of defining the unit of measure
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public height: number = 400

	/**
	 * Refers to the central point of the scene
	 *
	 * @type {TArray}
	 * @memberof Scene
	 */
	public center: TArray

	/**
	 * Default background color (black)
	 *
	 * @type {string}
	 * @memberof Scene
	 */
	public background: string = 'hsla(0, 0%, 0%, 1)'

	/**
	 * Default ScenePrimitive stroke color (white)
	 *
	 * @type {string}
	 * @memberof Scene
	 */
	public mainColor: string = 'hsla(0, 0%, 100%, 1)'

	/**
	 * Current time
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public current_time: number = 0

	/**
	 * A list of children added to scene
	 *
	 * @private
	 * @type {Array<SceneChild>}
	 * @memberof Scene
	 */
	private children: Array<SceneChild>

	/**
	 * Creates an instance of Scene.
	 * You can see the default values ​​in the property definitions
	 *
	 * @param {ISceneSettingsInterface} [settings={}]
	 * @memberof Scene
	 */
	constructor(settings: ISceneSettingsInterface = {}) {
		if (typeof settings.width !== 'undefined') this.width = settings.width
		if (typeof settings.height !== 'undefined') this.height = settings.height

		if (typeof settings.background !== 'undefined') this.background = settings.background
		if (typeof settings.mainColor !== 'undefined') this.mainColor = settings.mainColor

		this.children = []

		this.center = Vec2.create(this.width / 2, this.height / 2)
	}

	/**
	 * Resize the scene dimension
	 *
	 * @param {number} width
	 * @param {number} [height=width]
	 * @memberof Scene
	 */
	public resize(width: number, height: number = width): void {
		this.width = width
		this.height = height
		this.center = Vec2.create(this.width / 2, this.height / 2)

		this.children.forEach(sceneChild => sceneChild.clearBuffer(true, false))
	}

	/**
	 * Update all children, generate a streamable buffer for drawing
	 *
	 * @param {number} [at_time] time in ms
	 * @memberof Scene
	 */
	public update(at_time: number): void {
		this.current_time = at_time
		this.children.forEach((child: SceneChild) => child.generate(this.current_time, true))
	}

	/**
	 * Traverse the child buffer and use it with callback
	 *
	 * @param {TStreamCallback} callback
	 * @memberof Scene
	 */
	public stream(callback: TStreamCallback): void {
		this.children.forEach(sceneChild => sceneChild.stream(callback))
	}

	/*
     |--------------------------------------------------------------------------
     |  SceneChild
     |--------------------------------------------------------------------------
     */

	/**
	 * Return a list of children
	 *
	 * @returns {Array<SceneChild>}
	 * @memberof Scene
	 */
	public getChildren(): Array<SceneChild> {
		return this.children
	}

	/**
	 * Add SceneChild to Scene, pass `order` for drawing priorities
	 *
	 * @param {SceneChild} item
	 * @param {number} [order]
	 * @memberof Scene
	 */
	public add(item: SceneChild, order?: number): void {
		item.order =
			typeof order !== 'undefined'
				? order
				: typeof item.order !== 'undefined'
				? item.order
				: this.children.length > 0
				? Math.max.apply(
						this,
						this.children.map(e => e.order)
				  ) + 1
				: 0

		Scene.propagateToChilden(item, this)

		this.children.push(item)
		item.clearBuffer(true, false)

		this.sortChildren()
	}

	/**
	 * Sort children by order
	 *
	 * @memberof Scene
	 */
	public sortChildren(): void {
		this.children.sort((a: SceneChild, b: SceneChild) => (a.order as number) - (b.order as number))
		this.children = this.children.map((child, index) => {
			child.order = index
			return child
		})
	}

	/**
	 * Find sceneChild from id or name in the whole scene
	 *
	 * @param {string | number} id_or_name
	 * @returns {(SceneChild | null)}
	 * @memberof Scene
	 */
	public find(id_or_name: string | number): SceneChild | null {
		const children: Array<SceneChild> = this.getChildren()

		for (let i = 0, len = children.length; i < len; i++) {
			const result: SceneChild | null = children[i].find(id_or_name)

			if (result !== null) return result
		}

		return null
	}

	/**
	 * Get shape by index
	 *
	 * @param {number} index
	 * @returns {(SceneChild | null)}
	 * @memberof Scene
	 */
	public get(index: number): SceneChild | null {
		return index >= 0 && index < this.children.length ? this.children[index] : null
	}

	/**
	 * Remove a shape by index
	 *
	 * @param {number} index
	 * @memberof Scene
	 */
	public remove(index: number): void {
		index >= 0 && index < this.children.length && this.children.splice(index, 1)
	}

	/**
	 * Removes all children
	 *
	 * @memberof Scene
	 */
	public removeChildren(): void {
		this.children = []
	}

	/**
	 * Remove sceneChild by id or name
	 *
	 * @param {number | number} id_or_name
	 * @memberof Scene
	 */
	public removeFromId(id_or_name: number | string): void {
		for (let i = 0, len = this.children.length; i < len; i++)
			if (this.children[i].id === id_or_name || this.children[i].name === id_or_name) {
				this.children.splice(i, 1)
				return
			}
	}

	/**
	 * Return true if sceneChild is direct children
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof Scene
	 */
	public isFirstLevelChild(sceneChild: SceneChild): boolean {
		for (let i = 0, len = this.children.length; i < len; i++) if (this.children[i].id == sceneChild.id) return true

		const parents = this.getParentsOfSceneChild(sceneChild)

		return parents.length == 1 && parents[0] instanceof Group
	}

	/**
	 * Returns the list of sceneChild hierarchy starting from the scene
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {Array<SceneChild>}
	 * @memberof Scene
	 */
	public getParentsOfSceneChild(sceneChild: SceneChild): Array<SceneChild> {
		const result = Scene.getParentsOfSceneChild(this, sceneChild)

		if (result) {
			result.splice(0, 1)
			return result as Array<SceneChild>
		}

		return []
	}

	/**
	 * Returns the list of sceneChild hierarchy starting from the scene
	 *
	 * @static
	 * @param {(Scene | SceneChild)} current
	 * @param {SceneChild} sceneChild
	 * @param {(Array<SceneChild | Scene>)} [parents=[]]
	 * @returns {(Array<SceneChild | Scene> | null)}
	 * @memberof Scene
	 */
	static getParentsOfSceneChild(
		current: Scene | SceneChild,
		sceneChild: SceneChild,
		parents: Array<SceneChild | Scene> = []
	): Array<SceneChild | Scene> | null {
		let result

		if (current instanceof SceneChild) {
			if (current.id == sceneChild.id) return parents

			if (current instanceof Shape && current.shape) {
				const tmp_parents = parents.slice()
				tmp_parents.push(current)
				if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmp_parents))) return result
			}
		}

		if (current instanceof Scene || current instanceof Group) {
			const children = current.getChildren()

			parents.push(current)

			for (let i = 0, len = children.length; i < len; i++) {
				const child: SceneChild = children[i]

				if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents))) return result
			}

			parents.pop()
		}

		return null
	}

	/**
	 * Walk through the scene
	 *
	 * @static
	 * @param {SceneChild} callbackk
	 * @param {(Scene | SceneChild)} current
	 * @memberof Scene
	 */
	static walk(callback: (sceneChild: SceneChild) => boolean | void, current: Scene | SceneChild): boolean | void {
		if (current instanceof SceneChild) {
			if (callback(current) === false) return false

			if (current instanceof Shape && current.shape) if (Scene.walk(callback, current.shape) === false) return false
		}

		if (current instanceof Scene || current instanceof Group) {
			const children = current.getChildren()

			for (let i = 0, len = children.length; i < len; i++) {
				const child: SceneChild = children[i]

				if (Scene.walk(callback, child) === false) return false
			}
		}
	}

	/**
	 * Propagate scene to sceneChild (and children)
	 *
	 * @static
	 * @param {SceneChild} sceneChild
	 * @param {Scene} scene
	 * @memberof Scene
	 */
	static propagateToChilden(sceneChild: SceneChild, scene: Scene): void {
		sceneChild.scene = scene

		if (sceneChild instanceof Group) {
			sceneChild.getChildren().forEach((item: SceneChild) => {
				Scene.propagateToChilden(item, scene)
			})
		} else if (sceneChild instanceof Shape && sceneChild.shape) {
			sceneChild.shape.scene = scene
			Scene.propagateToChilden(sceneChild.shape, scene)
		}
	}
}

export default Scene
