import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'
import { DrawOptions } from '@services/types/drawer-canvas'
import { IRenderSettings } from '@services/types/renedrer'

const DEFAULT_SETTINGS = {
	size: 1080,
	quality: 1,
	time: 0,
	noBackground: true,
}

class SVGExporter {
	parse(drawer: DrawerCanvas, settings: IRenderSettings): string {
		settings = { ...DEFAULT_SETTINGS, ...settings }

		const scene = drawer.getScene()
		const timeline = drawer.getTimeline()
		const decimals = Math.floor(settings.quality * 4)

		const all_parts: Array<Array<string>> = []

		const drawOptions: DrawOptions = { ...drawer.getOptions() }

		if (drawOptions.ghosts) {
			const time = timeline.getTime()
			const sequenceEndTime = timeline.getSequenceEndTime()

			for (let i = 1; i <= drawOptions.ghosts; i++) {
				const ghostTime =
					time -
					(drawOptions.ghost_skip_function
						? drawOptions.ghost_skip_function(i)
						: i * (drawOptions.ghost_skip_time || 30))

				drawOptions.clearCanvas = i == 1
				drawOptions.ghost_index = i
				drawOptions.time =
					ghostTime < 0
						? ghostTime + sequenceEndTime
						: ghostTime > sequenceEndTime
						? ghostTime % sequenceEndTime
						: ghostTime

				all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals))
			}

			drawOptions.clearCanvas = false
			drawOptions.ghost_index = undefined
			drawOptions.time = timeline.getTime()

			all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals))
		} else {
			if (!drawOptions.clearCanvas) {
				const sequence = timeline.getSequence()
				const needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time)
				for (let i = 0; i <= needFrame; i++) {
					timeline.setFrame(i)
					drawOptions.time = timeline.getTime()
					all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals))
				}
			} else {
				drawOptions.time = timeline.getTime()
				drawOptions.clearCanvas = drawOptions.clearCanvas || timeline.getCurrentFrame() <= 0
				all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals))
			}
		}

		const result: Array<string> = []

		result.push(
			`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${scene.width.toFixed(decimals)} ${scene.height.toFixed(
				decimals
			)}" width="${scene.width.toFixed(decimals)}" height="${scene.height.toFixed(decimals)}">`
		)
		if (!settings.noBackground)
			result.push(
				`\t<rect width="${scene.width.toFixed(decimals)}" height="${scene.height.toFixed(decimals)}" fill="${
					scene.background
				}" />`
			)
		result.push(all_parts.map(paths => `<g>${paths.join('\t\t')}</g>`).join('\t'))
		result.push(`</svg>`)

		return result.join('\n')
	}

	static draw(scene: Scene, options: DrawOptions, resolution: number, decimals: number): Array<string> {
		const scale: number = options.scale ?? 1
		const translate: Array<number> = options.translate ?? [0, 0]
		const time: number = options.time ?? 0
		const bGhost: boolean =
			typeof options.ghosts !== 'undefined' &&
			options.ghosts > 0 &&
			typeof options.ghost_index !== 'undefined' &&
			options.ghost_index > 0
		const ghostMultiplier: number = bGhost
			? 1 - (options.ghost_index as number) / ((options.ghosts as number) + 0.5)
			: 1

		const width: number = scene.width
		const height: number = scene.height
		const ratio_x = width > height ? 1 : height / width
		const ratio_y = width > height ? width / height : 1
		resolution = resolution || width

		const final_scale = [(width / (resolution / ratio_x)) * scale, (height / (resolution / ratio_y)) * scale]

		const final_translate = [
			width / 2 - (scale > 1 ? (translate[0] * width) / (1 / ((scale - 1) / 2)) : 0),
			height / 2 - (scale > 1 ? (translate[1] * height) / (1 / ((scale - 1) / 2)) : 0),
		]

		// scene.update(time)
		scene.current_time = time
		scene.getChildren().forEach((sceneChild: SceneChild) => {
			if (!(sceneChild?.data?.visible === false || (bGhost && sceneChild?.data?.disableGhost === true)))
				sceneChild.generate(time, true)
		})

		const Paths: Array<string> = []

		scene.draw(({ lineWidth, strokeColor, fillColor, shape, buffer, buffer_length, current_buffer_index }) => {
			if (shape?.data?.visible == false || (bGhost && shape?.data?.disableGhost == true)) return

			const temp: Array<string> = []

			for (let i = 0; i < buffer_length; i += 2) {
				const x = (buffer[current_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0]
				const y = (buffer[current_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1]
				temp.push(x.toFixed(decimals) + ' ' + y.toFixed(decimals))
			}

			if (fillColor) {
				if (bGhost) {
					const color = /\((.+),(.+),(.+),(.+)\)/g.exec(fillColor)
					if (color) {
						let [, a, b, c, o]: Array<string> = color as RegExpExecArray
						const alpha = o ? parseFloat(o) : 1
						const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier
						fillColor =
							fillColor.indexOf('rgb') >= 0
								? `rgba(${a},${b},${c},${ghostAlpha})`
								: `hsla(${a},${b},${c},${ghostAlpha})`
					}
				}
			}

			if (strokeColor && lineWidth) {
				if (bGhost) {
					const color = /\((.+),(.+),(.+),(.+)\)/g.exec(strokeColor)
					if (color) {
						let [, a, b, c, o]: Array<string> = color as RegExpExecArray
						const alpha = o ? parseFloat(o) : 1
						const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier
						strokeColor =
							strokeColor.indexOf('rgb') >= 0
								? `rgba(${a},${b},${c},${ghostAlpha})`
								: `hsla(${a},${b},${c},${ghostAlpha})`
					}
					lineWidth *= ghostMultiplier
				}
			}

			Paths.push(
				`<path fill="${fillColor || 'none'}" ${strokeColor ? `stroke="${strokeColor}"` : ''} ${
					lineWidth ? `stroke-width="${lineWidth}"` : ''
				} ` + `d="M${temp.join(' L')} ${shape && shape.isClosed() ? 'Z' : ''}" />`
			)
		})

		return Paths
	}
}

export default SVGExporter
