import { ShapeBaseStreamArguments } from '@core/types/ShapeBase'
import SceneSettingsInterface from '@core/interfaces/SceneInterface'

import { now, aOr, isDef } from '@core/Utilites'

import SceneChild from '@core/SceneChild'

import Group from '@core/Group'
import Shape from './shapes/Shape'
import Vec2, { TArray } from './math/Vec2'
/**
 * Scene
 *
 * @class Scene
 */
class Scene {
	/**
	 * Scene width
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public width: number

	/**
	 * Scene height
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public height: number

	/**
	 * The center of scene
	 *
	 * @type {TArray}
	 * @memberof Scene
	 */
	public center: TArray

	/**
	 * Scene Background
	 *
	 * @type {string}
	 * @memberof Scene
	 */
	public background: string

	/**
	 * Scene main color (defaul: stroke)
	 *
	 * @type {string}
	 * @memberof Scene
	 */
	public mainColor: string

	/**
	 * Scene start time
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public start_time: number = 0

	/**
	 * Last update time
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public last_update_time: number = 0

	/**
	 * Current time
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public current_time: number = 0

	/**
	 * Delta time
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public delta_time: number = 0

	/**
	 * FPS
	 *
	 * @type {number}
	 * @memberof Scene
	 */
	public fps: number = 0

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
	 *
	 * @param {SceneSettingsInterface} [settings={}]
	 * @memberof Scene
	 */
	constructor(settings: SceneSettingsInterface = {}) {
		this.width = aOr(settings.width, 400)
		this.height = aOr(settings.height, 400)

		this.background = aOr(settings.background, '#fff')
		this.mainColor = aOr(settings.mainColor, '#000')

		this.children = []

		this.center = Vec2.create(this.width / 2, this.height / 2)
	}

	/**
	 * Resize scene
	 *
	 * @param {number} width
	 * @param {number} [height=width]
	 * @memberof Scene
	 */
	public resize(width: number, height: number = width): void {
		this.width = width
		this.height = height
		this.center = Vec2.create(this.width / 2, this.height / 2)

		this.children.forEach(sceneChild => sceneChild.clearBuffer())
	}

	/**
	 * Update scene an children
	 *
	 * @param {number} [at_time] time in ms
	 * @memberof Scene
	 */
	public update(at_time?: number): void {
		if (at_time == undefined) {
			if (!this.start_time) {
				this.start_time = now()
				// this.last_update_time = this.start_time
			}

			const current_time = now()

			// this.delta_time = current_time - this.last_update_time
			// this.fps = 1000 / this.delta_time

			// this.last_update_time = current_time
			this.current_time = current_time - this.start_time
		} else {
			this.current_time = at_time
		}

		this.children.forEach((child: SceneChild) => child.generate(this.current_time, true))
	}

	/**
	 * Clear all scene items buffer
	 *
	 * @memberof Scene
	 */
	public clearAllBuffers(): void {
		Scene.walk((child: SceneChild) => child.clearBuffer(true, false), this)
	}

	/**
	 * Draw children (called after update)
	 *
	 * @param {(stream_arguments: ShapeBaseStreamArguments) => boolean | void} callback
	 * @memberof Scene
	 */
	public draw(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void {
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
	 * Add shpe to scene
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
						this.children.map(e => e.order ?? 0)
				  ) + 1
				: 0

		Scene.propagateToChilden(item, this)

		this.children.push(item)
		item.clearBuffer()

		this.sortChildren()
	}

	/**
	 * Sort children
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
	 * Find scene child from id
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
	 * Get shape from index
	 *
	 * @param {number} index
	 * @returns {(SceneChild | null)}
	 * @memberof Scene
	 */
	public get(index: number): SceneChild | null {
		return index >= 0 && index < this.children.length ? this.children[index] : null
	}

	/**
	 * Remove a shape
	 *
	 * @param {number} index
	 * @memberof Scene
	 */
	public remove(index: number): void {
		index >= 0 && index < this.children.length && this.children.splice(index, 1)
	}

	/**
	 * Remove all children
	 *
	 * @memberof Scene
	 */
	public clearChildren(): void {
		this.children = []
	}

	/**
	 * Remove from id
	 *
	 * @param {number} id
	 * @memberof Scene
	 */
	public removeFromId(id: number | string): void {
		for (let i = 0, len = this.children.length; i < len; i++)
			if (this.children[i].id == id) {
				this.children.splice(i, 1)
				return
			}
	}

	/**
	 * Return a list of parents of sceneChild
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
	 * Return a list of parents of sceneChild
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
	 * Walk through scene
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
	 * Propagate scene to child
	 *
	 * @static
	 * @param {SceneChild} child
	 * @param {Scene} scene
	 * @memberof Scene
	 */
	static propagateToChilden(child: SceneChild, scene: Scene): void {
		child.scene = scene

		if (child instanceof Group) {
			child.children.forEach((item: SceneChild) => {
				Scene.propagateToChilden(item, scene)
			})
		} else if (child instanceof Shape && child.shape) {
			child.shape.scene = scene
			Scene.propagateToChilden(child.shape, scene)
		}
	}
}

export default Scene
