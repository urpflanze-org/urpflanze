import { v1 as uuidv1 } from 'uuid'

import SceneChild from '@core/SceneChild'

// Shapes
import Line from '@core/shapes/primitives/Line'
import Triangle from '@core/shapes/primitives/Triangle'
import Rect from '@core/shapes/primitives/Rect'
import RegularPolygon from '@core/shapes/primitives/RegularPolygon'
import Circle from '@core/shapes/primitives/Circle'

import Rose from '@core/shapes/primitives/Rose'
import Spiral from '@core/shapes/primitives/Spiral'
import Lissajous from '@core/shapes/primitives/Lissajous'

import Shape from '@core/shapes/Shape'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import ShapeLoop from '@core/shapes/ShapeLoop'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

import Scene from '@core/Scene'
import Group from '@core/Group'
import ShapeBase from '@core/shapes/ShapeBase'

import SceneChildPropsData, { TSceneChildPropsDataKeys } from '@services/scene-utilities/SceneChildPropsData'
import ScenePropUtilities from '@services/scene-utilities/ScenePropUtilities'
import Animation from '@services/animation/Animation'
import { TSceneChildProps } from '@services/types/scene-utilities'
import { ISceneChildProps } from '@core/types/scene-child'
import { IShapeLoopAnimation } from '@services/types/animation'
import Drawer from '@services/drawers/Drawer'

type SceneChildInstance = new (props: any) => SceneChild

/**
 *
 * @category Services.Scene Utilities
 * @class SceneUtilities
 */
class SceneUtilities {
	private registeredSceneChilds: { [type: string]: SceneChildInstance } = {}

	constructor() {
		this.registeredSceneChilds = {}

		this.registeredSceneChilds = {
			Line,
			Triangle,
			Rect,
			RegularPolygon,
			Circle,
			Rose,
			Spiral,
			Lissajous,
			Group,
			Shape,
			ShapeLoop,
			ShapeBuffer,
		}
	}

	//#region Register scene child

	/**
	 * Return a list of name of registered sceneChild
	 *
	 * @returns {Array<string>}
	 * @memberof SceneUtilities
	 */
	public getRegistered(): Array<string> {
		return Object.keys(this.registeredSceneChilds)
	}

	/**
	 * Register scene child for fast creation
	 *
	 * @param {string} type
	 * @param {SceneChildInstance} ref
	 * @memberof SceneUtilities
	 */
	public register(type: string, ref: SceneChildInstance) {
		if (!(type in this.registeredSceneChilds)) {
			this.registeredSceneChilds[type] = ref
		} else {
			console.warn(`SceneUtilities: SceneChild "${type}" is already registered`)
		}
	}

	/**
	 * unregister scene child
	 *
	 * @param {string} type
	 * @memberof SceneUtilities
	 */
	public unregister(type: string) {
		if (type in this.registeredSceneChilds) {
			delete this.registeredSceneChilds[type]
		} else {
			console.warn(`SceneUtilities: SceneChild "${type}" is not registered`)
		}
	}

	//#endregion

	//#region Scene manipulation

	/**
	 * Logic creation of a SceneChild
	 * Since scene is not passed, name are set if they are present in args or type
	 *
	 *
	 * @param {(string | SceneChild)} item
	 * @param {TSceneChildProps} [props]
	 * @param {Scene} [scene]
	 * @param {DrawerCanvas} [drawer]
	 * @returns {(SceneChild | null)}
	 * @memberof SceneUtilities
	 */
	create(
		item: string | SceneChild,
		props?: TSceneChildProps,
		scene?: Scene,
		drawer?: Drawer<any, any>
	): SceneChild | null {
		scene = scene ? scene : typeof item !== 'string' ? item.scene : undefined

		if (item instanceof SceneChild) {
			this.getChildren(item).forEach(child => this.create(child, undefined, scene, drawer))
			return item
		}

		if (item in this.registeredSceneChilds) {
			if (!props) props = {}

			props.id = props.id || uuidv1()
			if (!props.name && scene) props.name = item + '_' + (this.getCountSceneChildOfType(scene, item) + 1)

			if (!props.data) props.data = {}
			if (!('props' in props.data)) props.data.props = {}
			if (!('visible' in props.data)) props.data.visible = true
			if (!('highlighted' in props.data)) props.data.highlighted = false
			if (!('disableGhost' in props.data)) props.data.disableGhost = false

			if (item === 'ShapeLoop') {
				if (!('loop' in props)) props.loop = { start: 0, end: Math.PI * 2, inc: (Math.PI * 2) / 20 }
			}

			const sceneChild: SceneChild = new this.registeredSceneChilds[item](props) as SceneChild

			if (sceneChild && drawer && this.isAPrimitive(sceneChild)) {
				const sideLength = SceneChildPropsData.sideLength?.default
				;(sceneChild as ShapePrimitive).setProp(
					'sideLength' as keyof ISceneChildProps,
					ScenePropUtilities.getTransformedValue(drawer, 'sideLength', sideLength)
				)
				sceneChild.data.props.sideLength = sideLength
			}

			this.getChildren(sceneChild).forEach(child => this.create(child))

			return sceneChild
		}

		console.warn(`SceneUtilities: Creation failed. SceneChild "${item}" is not registered`)

		return null
	}

	/**
	 * Return number of element from a type
	 *
	 * @param {Scene} scene
	 * @param {string} type
	 * @returns {number}
	 * @memberof SceneUtilities
	 */
	getCountSceneChildOfType(scene: Scene, type: string): number {
		let count = 0

		Scene.walk(sceneChild => {
			count += sceneChild.type == type ? 1 : 0
		}, scene)

		return count
	}

	/**
	 * Return a copy of sceneChild
	 *
	 * @param {SceneChild} sceneChild
	 * @param {Scene} [scene]
	 * @param {DrawerCanvas} [drawer]
	 * @param {boolean} [strict]
	 * @returns {(SceneChild | null)}
	 * @memberof SceneUtilities
	 */
	copy(sceneChild: SceneChild, scene?: Scene, drawer?: Drawer<any, any>, strict = false): SceneChild | null {
		// copy only props, without name, id
		const props: TSceneChildProps = sceneChild.getProps()

		if (sceneChild instanceof ShapeBase) {
			props.bUseParent = sceneChild.bUseParent
		}

		if (sceneChild instanceof ShapeBuffer) {
			props.shape = sceneChild.shape
		}

		if (sceneChild instanceof ShapePrimitive) {
			props.bCloseShape = sceneChild.bCloseShape
			props.adaptMode = sceneChild.adaptMode
			props.vertexCallback = sceneChild.vertexCallback
		}

		if (sceneChild instanceof ShapeLoop) {
			props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies
		}

		if (sceneChild instanceof ShapeLoop) {
			props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies
		}

		if (strict) {
			props.id = sceneChild.id
			props.name = sceneChild.name
			props.order = sceneChild.order
			props.data = JSON.parse(JSON.stringify(sceneChild.data || {}))
		}

		const copied: SceneChild | null = this.create(sceneChild.type, props, scene, drawer)

		if (copied) {
			if (sceneChild instanceof Group) {
				sceneChild.getChildren().forEach((child: SceneChild) => {
					const copiedChild: SceneChild | null = this.copy(child, scene, drawer)
					copiedChild && (copied as Group).add(copiedChild)
				})
			} else if (sceneChild instanceof Shape && copied instanceof Shape && sceneChild.shape) {
				const copiedShape: SceneChild | null = this.copy(sceneChild.shape, scene, drawer)
				copiedShape && (copied.shape = copiedShape)
			} else if (sceneChild instanceof ShapeBuffer && copied instanceof ShapeBuffer && sceneChild.shape) {
				copied.setShape(new Float32Array(sceneChild.shape))
			}

			return copied
		}

		console.warn(`SceneUtilities: Copy failed.`, sceneChild)

		return null
	}

	/**
	 * Add scene child to parent.
	 * Create a group if parent is Shape and has one element (not Group) inside.
	 *
	 * @param {(SceneChild | Scene)} parent
	 * @param {(string | SceneChild)} sceneChild
	 * @param {TSceneChildProps} [props]
	 * @param {Scene} [scene]
	 * @returns {(SceneChild | null)}
	 * @memberof SceneUtilities
	 */
	add(
		parent: SceneChild | Scene,
		sceneChild: string | SceneChild,
		props?: TSceneChildProps,
		scene?: Scene
	): SceneChild | null {
		let newSceneChild: SceneChild | null = null

		if (parent instanceof Group || parent instanceof Scene) {
			newSceneChild = this.create(sceneChild, props, scene)
			newSceneChild && parent.add(newSceneChild)
		} else if (parent instanceof Shape) {
			if (parent.shape == undefined) {
				newSceneChild = this.create(sceneChild, props, scene)
				newSceneChild && parent.setShape(newSceneChild)
			} else if (parent.shape instanceof ShapeBase) {
				newSceneChild = this.create(sceneChild, props, scene)

				if (newSceneChild) {
					const newGroup = this.create('Group', undefined, scene) as Group
					const sibling = parent.shape as Shape

					this.remove(parent, sibling)
					parent.setShape(newGroup)

					newGroup.add(sibling)
					newGroup.add(newSceneChild)
				}
			} else if (parent.shape instanceof Group) {
				this.add(parent.shape, sceneChild, undefined, scene)
			}
		}

		return newSceneChild
	}

	/**
	 * Remove scene child from
	 *
	 * @param {SceneChild} from
	 * @param {SceneChild} [item]
	 * @memberof SceneUtilities
	 */
	remove(from: SceneChild, item?: SceneChild): void {
		if (!item) {
			// 'from' as item to remove
			if (from.scene) {
				const parent = this.getParent(from)
				!parent ? from.scene.removeFromId(from.id) : this.remove(parent, from)
			} else {
				console.warn(`SceneUtilities: Remove failed. SceneChild is not added into scene`, from)
			}
		} else {
			if (from instanceof Group) from.removeFromId(item.id)
			else if (from instanceof Shape) from.setShape(undefined)
		}
	}

	//#endregion

	//#region Scene parent and children

	/**
	 * Get Root parent
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {(SceneChild | null)}
	 * @memberof SceneUtilities
	 */
	getRootParent(sceneChild: SceneChild): SceneChild | null {
		const parents = this.getParents(sceneChild)
		return parents.length > 0 ? parents[0] : null
	}

	/**
	 * Get first level parent
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {(SceneChild | null)}
	 * @memberof SceneUtilities
	 */
	getParent(sceneChild: SceneChild): SceneChild | null {
		const parents = this.getParents(sceneChild)
		return parents.length > 0 ? parents[parents.length - 1] : null
	}

	/**
	 * Get all parents
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {Array<SceneChild>}
	 * @memberof SceneUtilities
	 */
	getParents(sceneChild: SceneChild): Array<SceneChild> {
		return sceneChild && sceneChild.scene ? sceneChild.scene.getParentsOfSceneChild(sceneChild) : []
	}

	/**
	 * Return children of a shape.
	 * Only Group has array of children, Shape has only one child.
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {Array<SceneChild>}
	 * @memberof SceneUtilities
	 */
	getChildren(sceneChild: SceneChild): Array<SceneChild> {
		if (sceneChild instanceof Group) return sceneChild.getChildren()

		return sceneChild instanceof Shape && sceneChild.shape ? [sceneChild.shape] : []
	}

	/**
	 * Return only primitive children
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {Array<SceneChild>}
	 * @memberof SceneUtilities
	 */
	getChildrenPrimitives(sceneChild: SceneChild): Array<SceneChild> {
		let result: Array<SceneChild> = []

		const children: Array<SceneChild> = this.getChildren(sceneChild)

		for (let i = 0, len = children.length; i < len; i++) {
			if (children[i] instanceof ShapePrimitive) result.push(children[i])
			else result = result.concat(...this.getChildrenPrimitives(children[i]))
		}

		return result
	}

	/**
	 * Return a list of neighbors
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {(Array<SceneChild>)}
	 * @memberof SceneUtilities
	 */
	getNeighbors(sceneChild: SceneChild): Array<SceneChild> {
		if (sceneChild.scene) {
			const parent = this.getParent(sceneChild)

			return parent == null ? sceneChild.scene.getChildren() : this.getChildren(parent)
		}

		return []
	}

	/**
	 * Return a number of element type into a scene
	 *
	 * @param {Scene} scene
	 * @param {string} type
	 * @returns {number}
	 * @memberof SceneUtilities
	 */
	getCountOfSceneChildType(scene: Scene, type: string): number {
		let count = 0
		Scene.walk(sceneChild => {
			count += sceneChild.type == type ? 1 : 0
		}, scene)
		return count
	}

	/**
	 * Walk through sceneChild
	 *
	 * @param {SceneChild} sceneChild
	 * @param {(child: SceneChild) => void} callback
	 * @memberof SceneUtilities
	 */
	walk(sceneChild: SceneChild, callback: (child: SceneChild) => void) {
		callback(sceneChild)

		this.getChildren(sceneChild).forEach(child => callback(child))
	}

	//#endregion

	//#region checker

	/**
	 * Check sceneChild is Group
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof SceneUtilities
	 */
	isGroup(sceneChild: SceneChild): boolean {
		return sceneChild instanceof Group
	}

	/**
	 * Check sceneChild are Shape and has a child
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof SceneUtilities
	 */
	hasShapeChild(sceneChild: SceneChild): boolean {
		return sceneChild instanceof Shape ? sceneChild.shape !== undefined : false
	}

	/**
	 * Check sceneChild is a ShapeBuffer an are binded
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof SceneUtilities
	 */
	hasShapeBuffer(sceneChild: SceneChild): boolean {
		return sceneChild instanceof ShapeBuffer
	}

	/**
	 * Check scene child is a Primitive
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof SceneUtilities
	 */
	isAPrimitive(sceneChild: SceneChild): boolean {
		return sceneChild instanceof ShapePrimitive
	}

	/**
	 * Check scene child is a ShapeLoop
	 *
	 * @param {SceneChild} sceneChild
	 * @returns {boolean}
	 * @memberof SceneUtilities
	 */
	hasLoop(sceneChild: SceneChild): boolean {
		return sceneChild instanceof ShapeLoop
	}

	//#endregion

	/**
	 * Set UISceneChild prop, convert animation on transformable props
	 *
	 * @static
	 * @param {SceneChild} sceneChild
	 * @param {*} value
	 * @param {DrawerCanvas} drawer
	 * @memberof SceneUtilities
	 */
	setProp(sceneChild: SceneChild, name: string, value: any, drawer: Drawer<any, any>): void {
		if (ScenePropUtilities.bValueAnimation(value)) {
			sceneChild.data.props[name] = value
			sceneChild.setProp(name as keyof ISceneChildProps, Animation.composeAnimation(drawer, name, value))
			return
		}

		if (name === 'loop') {
			if (sceneChild instanceof ShapeLoop && ScenePropUtilities.bValueLoop(value)) {
				sceneChild.data.props.loop = value
				sceneChild.setProp('loop', ScenePropUtilities.composeLoop(value))
				const dynamic = (value as IShapeLoopAnimation).dynamyc
				const realDynamic = (sceneChild as ShapeLoop).shapeLoopPropsDependencies.indexOf('prop_argumens') >= 0

				if (dynamic !== realDynamic) {
					const dependencies = [...(sceneChild as ShapeLoop).shapeLoopPropsDependencies]
					if (dynamic) !(dependencies.indexOf('prop_argumens') >= 0) && dependencies.push('prop_arguments')
					else
						dependencies.indexOf('prop_argumens') >= 0 && dependencies.splice(dependencies.indexOf('prop_arguments', 1))
					;(sceneChild as ShapeLoop).shapeLoopPropsDependencies = dependencies
				}
				sceneChild.clearBuffer(true, true)
			}
			return
		}

		if (name === 'vertexCallback') {
			if (sceneChild instanceof ShapeBase && ScenePropUtilities.bValueVertexCallback(value)) {
				sceneChild.data.props.vertexCallback = value
				sceneChild.vertexCallback = ScenePropUtilities.composeVertexCallback(value)
				sceneChild.bUseParent = true
				sceneChild.clearBuffer(true, true)
			}
			return
		}

		if (ScenePropUtilities.bPropTransformable(name, value)) {
			if (ScenePropUtilities.bValueDrawer(value)) {
				sceneChild.data.props[name] = value
				;(sceneChild as ShapePrimitive).setProp(
					name as keyof ISceneChildProps,
					ScenePropUtilities.getTransformedValue(drawer, name, value.value)
				)
			} else {
				sceneChild.setProp(name as keyof ISceneChildProps, value)
			}
			return
		}

		if (name in SceneChildPropsData && SceneChildPropsData[name as TSceneChildPropsDataKeys].transformation !== 'none')
			sceneChild.data.props[name] = value

		switch (name) {
			case 'bUseParent':
				if (sceneChild instanceof ShapeBase) sceneChild.bUseParent = value
				break
			case 'bCloseShape':
				if (sceneChild instanceof ShapePrimitive) sceneChild.setClosed(value)
				break
			case 'bAdaptBuffer':
				if (sceneChild instanceof ShapePrimitive) sceneChild.adapt(value)
				break
			default:
				// loop
				if (name.indexOf('.') > 0) {
					const splitted = name.split('.')
					sceneChild.setProp({ [splitted[0]]: { [splitted[1]]: value } })
				} else sceneChild.setProp(name as keyof ISceneChildProps, value)
				break
		}
	}
}

export default new SceneUtilities()
