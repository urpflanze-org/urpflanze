import Scene from '@core/Scene'
import { clamp } from 'src/Utilites'
import DrawerCanvas from '@services/drawers/drawer-canvas/DrawerCanvas'
import { IGCODESettings } from '@services/types/exporters-importers'

class GCODEExporter {
	static defaults: Required<IGCODESettings> = {
		atTime: 0,
		round: 100,
		minX: 0,
		minY: 0,
		maxX: 297,
		maxY: 210,
		velocity: 1500,
		penUpCommand: 'M3 S30',
		penDownCommand: 'M3 S0',
	}

	static parse(drawer: DrawerCanvas, settings: IGCODESettings): string {
		const scene = drawer.getScene()

		if (scene) {
			const bindedSettings: Required<IGCODESettings> = {
				...GCODEExporter.defaults,
				...settings,
			}

			return GCODEExporter.generate(scene, bindedSettings).join('\n')
		}

		return ''
	}

	static useRelativePosition() {
		return 'G91'
	}

	static useAbsolutePosition() {
		return 'G90'
	}

	static home(penUpCommand: string): Array<string> {
		return [penUpCommand, 'G28 X0 Y0 Z0']
	}

	static round(value: number, round: number) {
		return Math.round(value * round) / round
	}

	static setCurrentMachinePosition(x: number, y: number, round: number) {
		return `G28.1 X${this.round(x, round)} Y${this.round(y, round)}`
	}

	static setCurrentWorkspacePosition(x: number, y: number, round: number) {
		return `G92 X${this.round(x, round)} Y${this.round(y, round)}`
	}

	static gotoTo(x: number, y: number, round: number, velocity?: number): string {
		return typeof velocity !== 'undefined'
			? `G1 X${this.round(x, round)} Y${this.round(y, round)} F${velocity}`
			: `G0 X${this.round(x, round)} Y${this.round(y, round)}`
	}
	static moveTo(penUpCommand: string, penDownCommand: string, x: number, y: number, round: number) {
		return [penUpCommand, this.gotoTo(x, y, round), penDownCommand]
	}

	static lineTo(x: number, y: number, velocity: number, round: number) {
		return this.gotoTo(x, y, round, velocity)
	}

	static concat(result: Array<string>, data: Array<string> | string) {
		if (typeof data === 'string') result.push(data)
		else data.forEach(line => result.push(line))
	}

	static generate(scene: Scene, settings: Required<IGCODESettings>) {
		// Calculate workspace area
		const workspaceWidth = settings.maxX - settings.minX
		const workspaceHeight = settings.maxY - settings.minY

		const workspaceRatio = workspaceWidth / workspaceHeight

		// Calculate drawArea from scene

		const sceneRatio = scene.width / scene.height

		const drawArea = [
			sceneRatio > workspaceRatio ? (workspaceWidth * scene.height) / workspaceHeight : scene.width,
			sceneRatio > workspaceRatio ? scene.height : (workspaceHeight * scene.width) / workspaceWidth,
		]

		const drawAreaSceneOffset = [(scene.width - drawArea[0]) / 2, (scene.height - drawArea[1]) / 2]

		// Adapt drawArea to workspace

		const scale = workspaceRatio > 1 ? scene.width / workspaceWidth : scene.height / workspaceHeight

		drawArea[0] /= scale
		drawArea[1] /= scale
		drawAreaSceneOffset[0] /= scale
		drawAreaSceneOffset[1] /= scale

		console.log(
			{ drawArea, drawAreaSceneOffset, maxSceneInDrawArea: {
				minX: drawAreaSceneOffset[0],
				minY: drawAreaSceneOffset[1],
				maxX: scene.width / scale + drawAreaSceneOffset[0],
				maxY: scene.height / scale + drawAreaSceneOffset[1],
			},
			scale, 
			workspaceRatio,
			sceneRatio
 		})

		const machineCenterPosition = [(settings.maxX + settings.minX) / 2, (settings.maxY + settings.minY) / 2]

		const gcode: Array<string> = []
		this.concat(gcode, settings.penUpCommand)
		this.concat(gcode, this.useAbsolutePosition())
		this.concat(gcode, this.setCurrentMachinePosition(settings.minX, settings.minY, settings.round))
		this.concat(gcode, this.setCurrentWorkspacePosition(settings.minX, settings.minY, settings.round))

		scene.update(settings.atTime)

		const sceneChilds = scene.getChildren()
		for (let i = 0, len = sceneChilds.length; i < len; i++) {
			sceneChilds[i].generate(0, true)
			const childBuffer = sceneChilds[i].getBuffer() || []
			const childIndexedBuffer = sceneChilds[i].getIndexedBuffer() || []
			for (
				let currentBufferIndex = 0, vertexIndex = 0, len = childIndexedBuffer.length;
				currentBufferIndex < len;
				currentBufferIndex++
			) {
				const currentIndexing = childIndexedBuffer[i]
				const initialPointX = clamp(
					settings.minX,
					settings.maxX,
					settings.minX + childBuffer[vertexIndex] / scale + drawAreaSceneOffset[0]
				)

				const initialPointY = clamp(
					settings.minY,
					settings.maxY,
					settings.minY + childBuffer[vertexIndex + 1] / scale + drawAreaSceneOffset[1]
				)
				this.concat(
					gcode,
					this.moveTo(settings.penUpCommand, settings.penDownCommand, initialPointX, initialPointY, settings.round)
				)
				vertexIndex += 2
				for (let len = vertexIndex + currentIndexing.frameLength - 2; vertexIndex < len; vertexIndex += 2) {
					const currentX = clamp(
						settings.minX,
						settings.maxX,
						settings.minX + childBuffer[vertexIndex] / scale + drawAreaSceneOffset[0]
					)
					const currentY = clamp(
						settings.minY,
						settings.maxY,
						settings.minY + childBuffer[vertexIndex + 1] / scale + drawAreaSceneOffset[1]
					)
					this.concat(gcode, this.lineTo(currentX, currentY, settings.velocity, settings.round))
				}
				if (currentIndexing.shape.isClosed())
					this.concat(gcode, this.lineTo(initialPointX, initialPointY, settings.velocity, settings.round))
			}
		}
		this.concat(gcode, this.home(settings.penUpCommand))
		return gcode
	}

	// static getSceneBounding(scene: Scene) {
	// 	let maxX = Number.MIN_VALUE
	// 	let minX = Number.MAX_VALUE
	// 	let maxY = Number.MIN_VALUE
	// 	let minY = Number.MAX_VALUE

	// 	const sceneChilds = scene.getChildren()
	// 	for (let i = 0, len = sceneChilds.length; i < len; i++) {
	// 		sceneChilds[i].generate(0, true)
	// 		const childBuffer = sceneChilds[i].getBuffer() || []
	// 		const childIndexedBuffer = sceneChilds[i].getIndexedBuffer() || []
	// 		for (
	// 			let currentBufferIndex = 0, vertexIndex = 0, len = childIndexedBuffer.length;
	// 			currentBufferIndex < len;
	// 			currentBufferIndex++
	// 		) {
	// 			const currentIndexing = childIndexedBuffer[i]
	// 			if (minX > childBuffer[vertexIndex]) minX = childBuffer[vertexIndex]
	// 			if (maxX < childBuffer[vertexIndex]) maxX = childBuffer[vertexIndex]
	// 			if (minY > childBuffer[vertexIndex + 1]) minY = childBuffer[vertexIndex + 1]
	// 			if (maxY < childBuffer[vertexIndex + 1]) maxY = childBuffer[vertexIndex + 1]
	// 			vertexIndex += 2
	// 			for (let len = vertexIndex + currentIndexing.frameLength - 2; vertexIndex < len; vertexIndex += 2) {
	// 				if (minX > childBuffer[vertexIndex]) minX = childBuffer[vertexIndex]
	// 				if (maxX < childBuffer[vertexIndex]) maxX = childBuffer[vertexIndex]
	// 				if (minY > childBuffer[vertexIndex + 1]) minY = childBuffer[vertexIndex + 1]
	// 				if (maxY < childBuffer[vertexIndex + 1]) maxY = childBuffer[vertexIndex + 1]
	// 			}
	// 		}
	// 	}

	// 	return { minX, maxX, minY, maxY }
	// }
}

export default GCODEExporter
