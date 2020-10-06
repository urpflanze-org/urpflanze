import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'

import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'

import { IProject, IProjectSceneChild, IProjectSceneChildDataProps } from '@services/types/project'
import { parseFunction } from 'src/Utilites'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import { v1 as uuidv1 } from 'uuid'

/**
 *
 * @category Services
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
			mainColor: '#fff',

			clearCanvas: true,
			ghosts: 0,
			ghost_skip_time: 30,
			ratio: 1,

			scene: {},

			sequence: {
				start: 0,
				end: 6000,
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
			mainColor: parsed.mainColor ?? emptyProject.mainColor,

			clearCanvas: parsed.clearCanvas ?? emptyProject.clearCanvas,
			ghosts: parsed.ghosts ?? emptyProject.ghosts,
			ghost_skip_time: parsed.ghost_skip_time ?? emptyProject.ghost_skip_time,
			ghost_skip_function: parsed.ghost_skip_function ?? emptyProject.ghost_skip_function,
			ratio: parsed.ratio ?? emptyProject.ratio,

			scene: parsed.scene || emptyProject.scene,

			sequence: { ...emptyProject.sequence, ...parsed.sequence },
		}

		project.sequence.durate = project.sequence.end - project.sequence.start

		const drawOptions = {
			clearCanvas: project.clearCanvas,
			ghosts: project.ghosts,
			ghost_skip_time: parseFunction.unparse(project.ghost_skip_time),
		}

		const scene = new Scene({
			mainColor: project.mainColor,
			background: project.background,
			width: project.width,
			height: project.height,
		})
		const drawer = new DrawerCanvas(scene, undefined, drawOptions, project.ratio, project.resolution)

		const timeline = drawer.getTimeline()
		timeline.setSequence(project.sequence.start, project.sequence.end, project.sequence.framerate)

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
			bCloseShape: projectSceneChild.bCloseShape,
			vertexCallback: parseFunction.unparse(projectSceneChild.vertexCallback),
			shape: shape,
		}

		const props: IProjectSceneChildDataProps = { ...projectSceneChild.props }

		const sceneChild = SceneUtilities.create(projectSceneChild.type, settings)

		if (sceneChild) {
			;(Object.keys(props) as Array<keyof IProjectSceneChildDataProps>).forEach(propKey => {
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

		console.warn(`JSONImporter: can't import`, [projectSceneChild])

		return null
	}
}

export default JSONImporter
