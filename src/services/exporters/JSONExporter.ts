import Group from '@core/Group'
import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'
import Shape from '@core/shapes/Shape'
import ShapeBase from '@core/shapes/ShapeBase'
import ShapeBuffer from '@core/shapes/ShapeBuffer'
import ShapePrimitive from '@core/shapes/ShapePrimitive'

import { parseFunction } from 'src/Utilites'

import DrawerCanvas from '@services/drawers/drawer-canvas/DrawerCanvas'
import JSONImporter from '@services/importers/JSONImporter'
import Timeline from '@services/timeline/Timeline'
import { IProject, IProjectSceneChild } from '@services/types/exporters-importers'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import { ISceneChildProps } from '@core/types/scene-child'
import { IDrawerStreamProps } from '@services/types/drawer'

/**
 *
 * @category Services.Export/Import
 * @class JSONExporter
 */
class JSONExporter {
	static parse(drawer: DrawerCanvas, name = 'EmptyProject'): string {
		return JSONExporter.toString(JSONExporter.parseAsProject(drawer, name))
	}

	static toString(project: IProject): string {
		return JSON.stringify(project)
	}

	static parseAsProject(drawer: DrawerCanvas, name = 'EmptyProject'): IProject {
		const timeline: Timeline = drawer.getTimeline()

		const project = JSONImporter.createEmptyProject()

		project.name = name

		project.clear = drawer.getOption('clear', true) as boolean
		project.ghosts = drawer.getOption('ghosts', 0) as number
		project.ghostSkipTime = drawer.getOption('ghostSkipTime', undefined)
		project.ghostSkipFunction = parseFunction.parse(drawer.getOption('ghostSkipFunction', undefined))

		project.ratio = drawer.getRatio()

		const { duration, framerate } = timeline.getSequence()
		project.sequence = { duration, framerate }

		project.scene = {}

		const scene: Scene | undefined = drawer.getScene()
		if (scene) {
			project.width = scene.width
			project.height = scene.height
			// project.resolution = drawer.getResolution()
			project.color = scene.color
			project.background = scene.background

			const sceneChilds: Array<SceneChild> = scene.getChildren()

			for (let i = 0, len = sceneChilds.length; i < len; i++) {
				project.scene[sceneChilds[i].id] = JSONExporter.parseSceneChild(sceneChilds[i])
			}
		}
		return project
	}

	static parseSceneChild(sceneChild: SceneChild, parentId?: string | number, depth = 0): IProjectSceneChild {
		const projectSceneChild: IProjectSceneChild = {
			id: sceneChild.id + '',
			type: sceneChild.type,
			name: sceneChild.name,
			order: sceneChild.order as number,
			data: { ...sceneChild.data, props: undefined, style: undefined },
			// data: {},
			depth,
			bPrimitive: sceneChild instanceof ShapePrimitive,
			props: {},
			style: {},
			parentId,
		}

		const props = sceneChild.getProps()
		const propsKeys = Object.keys(props) as Array<keyof ISceneChildProps>
		for (let i = 0, len = propsKeys.length; i < len; i++) props[propsKeys[i]] = parseFunction.parse(props[propsKeys[i]])
		projectSceneChild.props = { ...props, ...sceneChild.data.props }

		if (sceneChild instanceof ShapeBuffer) {
			projectSceneChild.shape = sceneChild.shape
		}

		if (sceneChild instanceof ShapeBase) {
			projectSceneChild.bUseParent = sceneChild.bUseParent
			projectSceneChild.bUseRecursion = sceneChild.bUseRecursion
			projectSceneChild.vertexCallback = parseFunction.parse(
				sceneChild.data.vertexCallback || sceneChild.vertexCallback
			)
			console.log('export', projectSceneChild.vertexCallback, sceneChild.vertexCallback)
		}

		if (sceneChild instanceof ShapePrimitive) {
			const style = sceneChild.style
			const styleKeys = Object.keys(style) as Array<keyof IDrawerStreamProps>
			for (let i = 0, len = styleKeys.length; i < len; i++)
				style[styleKeys[i]] = parseFunction.parse(style[styleKeys[i]])

			projectSceneChild.style = { ...style, ...sceneChild.data.style }

			projectSceneChild.adaptMode = sceneChild.adaptMode
			projectSceneChild.bClosed = sceneChild.bClosed
		} else if (sceneChild instanceof Shape || sceneChild instanceof Group) {
			const children: Array<IProjectSceneChild> = []
			const shapeChildren = SceneUtilities.getChildren(sceneChild)

			for (let i = 0; i < shapeChildren.length; i++)
				children.push(JSONExporter.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1))

			projectSceneChild.children = children
		}

		return projectSceneChild
	}
}

export default JSONExporter
