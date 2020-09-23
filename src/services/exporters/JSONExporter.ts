import Group from '@core/Group'
import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'
import Shape from '@core/shapes/Shape'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

import ShapePrimitive from '@core/shapes/ShapePrimitive'

import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'
import { createEmptyProject } from '@services/importers/JSONImporter'
import Timeline from '@services/timeline/Timeline'
import { IProject, IProjectSceneChild } from '@services/types/project'
import parseFunction from '@services/utilities/parseFunction'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import ShapeBase from '@core/shapes/ShapeBase'
import { ShapeBaseProps } from '@core/interfaces/shapes/Interfaces'

class JSONExporter {
	parse(drawer: DrawerCanvas, name = 'EmptyProject'): string {
		return this.toString(this.parseAsProject(drawer, name))
	}

	toString(project: IProject): string {
		return JSON.stringify(project)
	}

	parseAsProject(drawer: DrawerCanvas, name = 'EmptyProject'): IProject {
		const scene: Scene = drawer.getScene()
		const timeline: Timeline = drawer.getTimeline()

		const project = createEmptyProject()

		project.name = name
		project.width = scene.width
		project.height = scene.height
		project.mainColor = scene.mainColor
		project.background = scene.background

		project.clearCanvas = drawer.getOption('clearCanvas', true) as boolean
		project.ghosts = drawer.getOption('ghosts', 0) as number
		project.ghost_skip_time = parseFunction.parse(drawer.getOption('ghost_skip_time', 30) as number | string)

		project.ratio = drawer.getRatio()

		const { start, end, framerate } = timeline.getSequence()
		project.sequence = { start, end, framerate, durate: end - start }

		project.scene = {}

		const sceneChilds: Array<SceneChild> = scene.getChildren()

		for (let i = 0, len = sceneChilds.length; i < len; i++) {
			project.scene[sceneChilds[i].id] = this.parseSceneChild(sceneChilds[i])
		}

		return project
	}

	parseSceneChild(sceneChild: SceneChild, parent_id?: string | number, depth: number = 0): IProjectSceneChild {
		const projectSceneChild: IProjectSceneChild = {
			id: sceneChild.id + '',
			type: sceneChild.type,
			name: sceneChild.name,
			order: sceneChild.order,
			data: { ...sceneChild.data, props: undefined },
			depth,
			bPrimitive: sceneChild instanceof ShapePrimitive,
			props: {},
			parent_id,
		}

		const props = sceneChild.getProps()
		const propsKeys = Object.keys(props) as Array<keyof ShapeBaseProps>
		for (let i = 0, len = propsKeys.length; i < len; i++) {
			props[propsKeys[i]] = parseFunction.parse(props[propsKeys[i]])
		}

		projectSceneChild.props = { ...props, ...sceneChild.data.props }

		if (sceneChild instanceof ShapeBuffer) {
			projectSceneChild.shape = sceneChild.shape
		}

		if (sceneChild instanceof ShapeBase) {
			projectSceneChild.bUseParent = sceneChild.bUseParent
		}

		if (sceneChild instanceof ShapePrimitive) {
			projectSceneChild.bAdaptBuffer = sceneChild.bAdaptBuffer
			projectSceneChild.bCloseShape = sceneChild.bCloseShape
			projectSceneChild.vertexCallback = parseFunction.parse(sceneChild.vertexCallback)
		} else if (sceneChild instanceof Shape || sceneChild instanceof Group) {
			const children: Array<IProjectSceneChild> = []
			const shapeChildren = SceneUtilities.getChildren(sceneChild)

			for (let i = 0; i < shapeChildren.length; i++)
				children.push(this.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1))

			projectSceneChild.children = children
		}

		return projectSceneChild
	}
}

export default JSONExporter
