import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'

import DrawerCanvas from '@services/drawers/drawer-canvas/DrawerCanvas'

import { IProject, IProjectSceneChild, IProjectSceneChildProps } from '@services/types/project'
import { parseFunction } from 'src/Utilites'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import { v1 as uuidv1 } from 'uuid'

/**
 *
 * @category Services.Export/Import
 * @class JSONImporter
 */
class JSONImporter {
	static createEmptyProject = (): IProject => {
		return {
			id: uuidv1(),
			name: '',

			width: 600,
			height: 600,
			resolution: 600,
			background: '#000',
			color: '#fff',

			clear: true,
			ghosts: 0,
			ghostSkipTime: 30,
			ratio: 1,

			scene: {},

			sequence: {
				durate: 6000,
				framerate: 60,
			},
		}
	}

	parse(project_json: string): DrawerCanvas | null {
		if (!project_json) return null

		const parsed: Partial<IProject> = project_json && project_json.length > 0 ? JSON.parse(project_json) : {}

		if (!('scene' in parsed)) return null

		const emptyProject: IProject = JSONImporter.createEmptyProject()

		const project: IProject = {
			id: parsed.id ?? emptyProject.id,
			name: parsed.name ?? emptyProject.name,
			width: parsed.width ?? emptyProject.width,
			height: parsed.height ?? emptyProject.height,
			resolution: parsed.resolution ?? emptyProject.resolution,
			background: parsed.background ?? emptyProject.background,
			color: parsed.color ?? emptyProject.color,

			clear: parsed.clear ?? emptyProject.clear,
			ghosts: parsed.ghosts ?? emptyProject.ghosts,
			ghostSkipTime: parsed.ghostSkipTime ?? emptyProject.ghostSkipTime,
			ghostSkipFunction: parsed.ghostSkipFunction ?? emptyProject.ghostSkipFunction,
			ratio: parsed.ratio ?? emptyProject.ratio,

			scene: parsed.scene || emptyProject.scene,

			sequence: { ...emptyProject.sequence, ...parsed.sequence },
		}

		const drawOptions = {
			clear: project.clear,
			ghosts: project.ghosts,
			ghostSkipTime: parseFunction.unparse(project.ghostSkipTime),
		}

		const scene = new Scene({
			color: project.color,
			background: project.background,
			width: project.width,
			height: project.height,
		})
		const drawer = new DrawerCanvas(scene, undefined, drawOptions, project.ratio, project.resolution)

		const timeline = drawer.getTimeline()
		timeline.setSequence(project.sequence.durate, project.sequence.framerate)

		const sceneChilds: Array<IProjectSceneChild> = Object.values(project.scene || [])

		for (let i = 0, len = sceneChilds.length; i < len; i++) {
			const sceneChild = this.parseSceneChild(sceneChilds[i], drawer)
			sceneChild && scene.add(sceneChild)
		}

		return drawer
	}

	parseSceneChild(projectSceneChild: IProjectSceneChild, drawer: DrawerCanvas): SceneChild | null {
		const shape: Float32Array | undefined =
			typeof projectSceneChild.shape !== 'undefined'
				? Float32Array.from(Object.values(projectSceneChild.shape) as Array<number> | Float32Array)
				: undefined

		const settings = {
			id: projectSceneChild.id,
			name: projectSceneChild.name,
			order: projectSceneChild.order,
			data: projectSceneChild.data,
			bUseParent: projectSceneChild.bUseParent,
			adaptMode: projectSceneChild.adaptMode,
			bClosed: projectSceneChild.bClosed,
			vertexCallback: parseFunction.unparse(projectSceneChild.vertexCallback),
			shape: shape,
		}

		const props: IProjectSceneChildProps = { ...projectSceneChild.props }

		const sceneChild = SceneUtilities.create(projectSceneChild.type, settings)

		if (sceneChild) {
			const propKeys = Object.keys(props) as Array<keyof IProjectSceneChildProps>
			propKeys.forEach(propKey => {
				SceneUtilities.setProp(sceneChild, propKey as string, parseFunction.unparse(props[propKey]), drawer)
			})

			if (projectSceneChild.children && projectSceneChild.children.length > 0) {
				for (let i = 0, len = projectSceneChild.children.length; i < len; i++) {
					const child = this.parseSceneChild(projectSceneChild.children[i], drawer)
					child && SceneUtilities.add(sceneChild, child)
				}
			}

			return sceneChild
		}

		console.warn(`[Urpflanze:JSONImporter] can't import`, projectSceneChild)

		return null
	}
}

export default JSONImporter
