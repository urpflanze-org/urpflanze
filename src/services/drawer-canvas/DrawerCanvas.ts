import Vec2 from '@core/math/Vec2'
import Scene from '@core/Scene'

import { now } from '@services/utilities/utilities'
import Timeline from '@services/timeline/Timeline'
import SceneChild from '@core/SceneChild'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import FrameBuffer from '@services/drawer-canvas/FrameBuffer'
import Emitter from '@services/events/Emitter'
import { DrawerCanvasEvents, DrawOptions } from '@services/types/drawer-canvas'

class DrawerCanvas extends Emitter<DrawerCanvasEvents> {
	private scene: Scene
	private canvas: HTMLCanvasElement | OffscreenCanvas

	private resolution: number
	private ratio: number

	private context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null
	private animation_id: number | null
	private draw_id: number | null
	private redraw_id: number | null
	private drawOptions: DrawOptions

	private timeline: Timeline

	private bBuffering: boolean = false

	public buffer: FrameBuffer

	constructor(
		scene?: Scene,
		canvasOrContainer?: HTMLElement | HTMLCanvasElement | OffscreenCanvas,
		drawOptions: DrawOptions = {},
		ratio: number | undefined = undefined,
		resolution = 0,
		bBuffering = false
	) {
		super()

		this.timeline = new Timeline()
		this.resolution = resolution || (scene && scene.width ? scene.width : 0)
		this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1)

		this.bBuffering = bBuffering
		this.buffer = new FrameBuffer()

		if (scene) {
			const width = this.ratio >= 1 ? scene.width : scene.width * this.ratio
			const height = this.ratio >= 1 ? scene.height / this.ratio : scene.height

			scene.resize(width, height)
			this.setScene(scene)
		}

		if (
			(typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) ||
			(typeof OffscreenCanvas !== 'undefined' && canvasOrContainer instanceof OffscreenCanvas)
		) {
			const canvas = canvasOrContainer
			this.setCanvas(canvas)
		} else if (canvasOrContainer) {
			const canvas = document.createElement('canvas')
			const container = canvasOrContainer as HTMLElement
			container.appendChild(canvas)
			this.setCanvas(canvas)
		}

		this.drawOptions = {
			scale: drawOptions.scale ?? 1,
			translate: drawOptions.translate ?? [0, 0],
			time: drawOptions.time ?? 0,
			simmetricLine: drawOptions.simmetricLine ?? 0,
			clearCanvas: drawOptions.clearCanvas ?? true,
			fixedLineWidth: drawOptions.fixedLineWidth ?? false,
			noBackground: drawOptions.noBackground ?? false,
			ghosts: drawOptions.ghosts || 0,
			ghost_skip_time: drawOptions.ghost_skip_time || 0,
			ghost_skip_function: drawOptions.ghost_skip_function,
			backgroundImage: drawOptions.backgroundImage,
		}

		this.draw_id = null
		this.redraw_id = null
		this.animation_id = null

		this.draw = this.draw.bind(this)
		this.animate = this.animate.bind(this)
		this.startAnimation = this.startAnimation.bind(this)
	}

	public setBuffering(bBuffering: boolean): void {
		this.bBuffering = bBuffering
		this.flushBuffer()
	}

	public getBBuffering(): boolean {
		return this.bBuffering
	}

	/**
	 * Set scene
	 *
	 * @param {Scene} scene
	 * @memberof CanvasDrawer
	 */
	public setScene(scene: Scene): void {
		this.scene = scene

		if (!this.resolution && this.scene.width) this.resolution = this.scene.width

		if (this.canvas) {
			this.setCanvas(this.canvas) // and flush
		}
	}

	public getScene(): Scene {
		return this.scene
	}

	public getTimeline(): Timeline {
		return this.timeline
	}

	/**
	 * Set the canvas or append to container
	 *
	 * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
	 * @memberof CanvasDrawer
	 */
	public setCanvas(canvasOrContainer: HTMLElement | HTMLCanvasElement | OffscreenCanvas): void {
		let canvas: HTMLCanvasElement | OffscreenCanvas

		if (typeof HTMLElement !== 'undefined' && canvasOrContainer instanceof HTMLElement) {
			if (typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) {
				canvas = canvasOrContainer
			} else {
				canvas = (this.canvas || document.createElement('canvas')) as HTMLCanvasElement

				while (canvasOrContainer.lastChild) canvasOrContainer.removeChild(canvasOrContainer.lastChild)

				canvasOrContainer.appendChild(canvas)
			}
		} else {
			canvas = canvasOrContainer as OffscreenCanvas
		}

		this.canvas = canvas

		this.context = this.canvas.getContext('2d', {
			alpha: true,
			desynchronized: false,
		})

		this.resize(this.scene.width, this.scene.height) // and flush
	}

	/**
	 * Return canvas element
	 *
	 * @returns {(HTMLCanvasElement | OffscreenCanvas)}
	 * @memberof DrawerCanvas
	 */
	public getCanvas(): HTMLCanvasElement | OffscreenCanvas {
		return this.canvas
	}

	/**
	 * Return canvas context
	 *
	 * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
	 * @memberof DrawerCanvas
	 */
	public getContext(): CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null {
		return this.context
	}

	/**
	 * Resize scene and canvas
	 *
	 * @param {number} width
	 * @param {number} height
	 * @param {number} [ratio]
	 * @param {number} [resolution]
	 * @memberof DrawerCanvas
	 */
	public resize(width: number, height: number, ratio?: number, resolution?: number) {
		// const dpi = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1
		const dpi = 1
		ratio = ratio || this.ratio || width / height

		const size = Math.max(width, height)
		width = ratio >= 1 ? size : size * ratio
		height = ratio >= 1 ? size / ratio : size

		this.ratio = ratio

		if (this.scene) this.scene.resize(width, height)

		if (this.canvas) {
			this.canvas.width = width * dpi
			this.canvas.height = height * dpi

			if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
				this.canvas.style.width = width + 'px'
				this.canvas.style.height = height + 'px'
			}
		}

		if (resolution && resolution != this.resolution && this.scene) {
			this.resolution = resolution

			Scene.walk((sceneChild: SceneChild) => {
				const props = sceneChild.data.props

				Object.keys(props).forEach(name => {
					SceneUtilities.setProp(sceneChild, name, props[name], this)
				})
			}, this.scene)
		}

		this.flushBuffer()

		this.dispatch('drawer-canvas:resize')
	}

	public flushBuffer(): void {
		if (this.bBuffering) {
			this.buffer.flush()

			this.dispatch('drawer-canvas:buffer_flush')
		}
	}

	public getRenderedFrames(): Array<number> {
		if (this.bBuffering) {
			return this.buffer.getRenderedFrames()
		}

		return []
	}

	/**
	 * Resize by ratio
	 *
	 * @param {number} ratio
	 * @memberof DrawerCanvas
	 */
	public setRatio(ratio: number) {
		this.resize(this.scene.width, this.scene.height, ratio)
	}

	/**
	 * Return drawer ratio
	 *
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public getRatio(): number {
		return this.ratio
	}

	/**
	 * Get resolution
	 *
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public getResolution(): number {
		return this.resolution
	}

	/**
	 * Get resolution of drawer
	 *
	 * @param {number} resolution
	 * @memberof DrawerCanvas
	 */
	public setResolution(resolution: number) {
		this.resize(this.scene.width, this.scene.height, this.ratio, resolution)
	}

	/**
	 * Get scene value scaled based on resolution
	 *
	 * @param {number} value
	 * @returns
	 * @memberof DrawerCanvas
	 */
	public getValueFromResolution(value: number) {
		return (value * this.resolution) / 200
	}

	/**
	 * Get scene value scaled based on resolution
	 *
	 * @param {number} value
	 * @returns
	 * @memberof DrawerCanvas
	 */
	public getValueFromResolutionScaled(value: number) {
		return (value * 200) / this.resolution
	}

	/**
	 * Set draw option
	 *
	 * @template K
	 * @param {(K | { [e: string]: Required<DrawOptions>[K] })} name
	 * @param {Required<DrawOptions>[K]} [value]
	 * @memberof CanvasDrawer
	 */
	public setOption<K extends keyof DrawOptions>(
		name: K | { [e in keyof DrawOptions]: Required<DrawOptions>[K] },
		value?: Required<DrawOptions>[K]
	): void {
		if (typeof name == 'object') {
			const keys = Object.keys(name) as Array<keyof DrawOptions>
			for (let i = 0, len = keys.length; i < len; i++) {
				// @ts-ignore
				this.drawOptions[keys[i]] = name[keys[i]]
			}
		} else {
			this.drawOptions[name] = value as Required<DrawOptions>[K]
		}

		this.flushBuffer()
	}

	/**
	 *
	 *
	 * @template K
	 * @param {K} name
	 * @param {DrawOptions[K]} default_value
	 * @returns {DrawOptions[K]}
	 * @memberof DrawerCanvas
	 */
	public getOption<K extends keyof DrawOptions>(name: K, default_value?: DrawOptions[K]): DrawOptions[K] {
		return this.drawOptions[name] ?? default_value
	}

	/**
	 *
	 *
	 * @returns {DrawOptions}
	 * @memberof DrawerCanvas
	 */
	public getOptions(): DrawOptions {
		return this.drawOptions
	}

	/**
	 * Internal tick animation
	 *
	 * @private
	 * @memberof CanvasDrawer
	 */
	private animate(timestamp: number): void {
		if (this.timeline.bSequenceStarted()) {
			this.animation_id = requestAnimationFrame(this.animate)

			if (this.timeline.tick(timestamp)) this.draw()
		}
	}

	/**
	 * Start animation drawing
	 *
	 * @memberof CanvasDrawer
	 */
	public startAnimation(): void {
		this.stopAnimation()

		this.timeline.start()

		this.animation_id = requestAnimationFrame(this.animate)
	}

	/**
	 * Stop animation drawing
	 *
	 * @memberof CanvasDrawer
	 */
	public stopAnimation(): void {
		this.timeline.stop()

		if (this.animation_id) cancelAnimationFrame(this.animation_id)
	}

	/**
	 * Pause animation drawing
	 *
	 * @memberof CanvasDrawer
	 */
	public pauseAnimation(): void {
		this.timeline.pause()

		if (this.animation_id) cancelAnimationFrame(this.animation_id)
	}

	/**
	 * Play animation drawing
	 *
	 * @memberof CanvasDrawer
	 */
	public playAnimation(): void {
		this.timeline.start()

		requestAnimationFrame(this.animate)
	}

	// public preload(): Promise<boolean> {
	// 	if (this.bBuffering && this.scene) {
	// 		return new Promise<boolean>((resolve, reject) => {
	// 			this.flushBuffer()

	// 			const sequence = this.timeline.getSequence()
	// 			let canvas: HTMLCanvasElement | OffscreenCanvas

	// 			if (typeof OffscreenCanvas !== 'undefined') canvas = new OffscreenCanvas(this.scene.width, this.scene.height)
	// 			else {
	// 				canvas = document.createElement('canvas')
	// 				canvas.width = this.scene.width
	// 				canvas.height = this.scene.height
	// 			}
	// 			const context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = canvas.getContext('2d', {
	// 				alpha: true,
	// 				desynchronized: false,
	// 			})

	// 			if (!context) reject('Create context error')

	// 			const drawOptions = { ...this.drawOptions }
	// 			const sequenceEndTime = this.timeline.getSequenceEndTime()

	// 			for (let i = 0; i < sequence.frames; i++) {
	// 				// requestAnimationFrame(() => {
	// 				const time = this.timeline.getFrameTime(i)
	// 				drawOptions.clearCanvas = this.drawOptions.clearCanvas || i === 0
	// 				drawOptions.time = time
	// 				DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)

	// 				if (drawOptions.ghosts) {
	// 					for (let gi = 1; gi <= drawOptions.ghosts; gi++) {
	// 						const ghostTime =
	// 							time -
	// 							(drawOptions.ghost_skip_function
	// 								? drawOptions.ghost_skip_function(gi)
	// 								: gi * (drawOptions.ghost_skip_time ?? 30))

	// 						drawOptions.clearCanvas = false
	// 						drawOptions.ghost_index = gi
	// 						drawOptions.time =
	// 							ghostTime < 0
	// 								? ghostTime + sequenceEndTime
	// 								: ghostTime > sequenceEndTime
	// 								? ghostTime % sequenceEndTime
	// 								: ghostTime

	// 						DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)
	// 					}
	// 				}

	// 				this.buffer.push(i, context as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D)
	// 				// })
	// 			}

	// 			resolve(true)
	// 		})
	// 	} else {
	// 		return Promise.reject()
	// 	}
	// }

	/**
	 * Draw current scene
	 *
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public draw(): number {
		let draw_time = 0

		const drawOptions = { ...this.drawOptions }

		drawOptions.ghost_index = undefined
		drawOptions.clearCanvas = this.drawOptions.clearCanvas || this.timeline.getCurrentFrame() <= 0
		drawOptions.time = this.timeline.getTime()
		const current_frame = this.timeline.getFrameAtTime(drawOptions.time)

		this.dispatch('drawer-canvas:before_draw', {
			current_frame: current_frame,
			current_time: drawOptions.time,
		})

		if (this.bBuffering && this.buffer.exist(current_frame)) {
			this.context?.putImageData(this.buffer.get(current_frame) as ImageData, 0, 0)
		} else {
			draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution)

			if (drawOptions.ghosts) {
				const time = this.timeline.getTime()
				const sequenceEndTime = this.timeline.getSequenceEndTime()

				for (let i = 1; i <= drawOptions.ghosts; i++) {
					const ghostTime =
						time -
						(drawOptions.ghost_skip_function
							? drawOptions.ghost_skip_function(i)
							: i * (drawOptions.ghost_skip_time ?? 30))

					// drawOptions.clearCanvas = i == 1
					drawOptions.clearCanvas = false
					drawOptions.ghost_index = i
					drawOptions.time =
						ghostTime < 0
							? ghostTime + sequenceEndTime
							: ghostTime > sequenceEndTime
							? ghostTime % sequenceEndTime
							: ghostTime

					draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution)
				}
			}

			if (this.bBuffering && this.context) {
				this.buffer.push(current_frame, this.context)

				if (this.buffer.count() >= this.timeline.getFramesCount()) {
					this.dispatch('drawer-canvas:buffer_loaded')
				}
			}
		}

		return draw_time
	}

	/**
	 * Redraw
	 *
	 * @returns {void}
	 * @memberof DrawerCanvas
	 */
	public redraw(): void {
		if (!this.timeline.bSequenceStarted()) {
			this.draw_id && cancelAnimationFrame(this.draw_id)
			!this.drawOptions.clearCanvas &&
				(typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0) &&
				this.timeline.stop()
			this.draw_id = requestAnimationFrame(this.draw)
		} else if (
			!this.drawOptions.clearCanvas &&
			(typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0)
		) {
			this.stopAnimation()
			// this.redraw_id && clearTimeout(this.redraw_id)
			// this.redraw_id = setTimeout(() => this.startAnimation(), 100)
			this.redraw_id && cancelAnimationFrame(this.redraw_id)
			this.redraw_id = requestAnimationFrame(this.startAnimation)
		}
	}

	/**
	 * Static draw scene
	 *
	 * @static
	 * @param {Scene} scene
	 * @param {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)} context
	 * @param {DrawOptions} options
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public static draw(
		scene: Scene,
		context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null,
		options: DrawOptions,
		resolution?: number
	): number {
		const start_time = now()

		if (context) {
			const scale: number = options.scale ?? 1
			const translate: Array<number> = options.translate ?? [0, 0]
			const time: number = options.time ?? 0
			const simmetricLine: number = options.simmetricLine ?? 0
			const fixedLineWidth: boolean | undefined = options.fixedLineWidth
			const clearCanvas: boolean | undefined = options.clearCanvas
			const noBackground: boolean | undefined = options.noBackground
			const backgroundImage: CanvasImageSource | undefined = options.backgroundImage
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
				if (
					!sceneChild.data ||
					!(sceneChild.data.visible === false) ||
					!(bGhost && sceneChild.data.disableGhost === true)
				)
					sceneChild.generate(time, true)
			})

			if (clearCanvas) {
				if (noBackground) {
					context.clearRect(0, 0, width, height)
				} else {
					context.fillStyle = scene.background
					context.fillRect(0, 0, width, height)

					backgroundImage && context.drawImage(backgroundImage, 0, 0, width, height)
				}
			}

			if (simmetricLine > 0) {
				const offset = Math.PI / simmetricLine
				const size = Math.max(width, height) / 2
				const center = [size / 2, size / 2]

				for (let i = 0; i < simmetricLine; i++) {
					const a = Float32Array.from([-size, -size])
					const b = Float32Array.from([size * 2, size * 2])
					const rotate = i * offset + Math.PI / 4

					Vec2.rotateZ(a, center, rotate)
					Vec2.rotateZ(b, center, rotate)

					context.beginPath()
					context.strokeStyle = scene.mainColor
					context.lineWidth = 1

					context.moveTo(
						(a[0] - size / 2) * final_scale[0] + final_translate[0],
						(a[1] - size / 2) * final_scale[1] + final_translate[1]
					)
					context.lineTo(
						(b[0] - size / 2) * final_scale[0] + final_translate[0],
						(b[1] - size / 2) * final_scale[1] + final_translate[1]
					)
					context.stroke()
				}
			}

			scene.draw(({ lineWidth, strokeColor, fillColor, shape, buffer, buffer_length, current_buffer_index }) => {
				if (shape.data && (shape.data.visible === false || (bGhost && shape.data.disableGhost === true))) return

				context.beginPath()

				context.moveTo(
					(buffer[current_buffer_index] - width / 2) * final_scale[0] + final_translate[0],
					(buffer[current_buffer_index + 1] - height / 2) * final_scale[1] + final_translate[1]
				)

				for (let i = 2; i < buffer_length; i += 2) {
					context.lineTo(
						(buffer[current_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0],
						(buffer[current_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1]
					)
				}

				shape && shape.isClosed() && context.closePath()

				if (shape && shape.data && shape.data.highlighted) {
					context.lineWidth = (lineWidth || 1) * 3 * scale
					context.strokeStyle = scene.mainColor
					context.stroke()
					return
				}
				if (fillColor) {
					if (bGhost) {
						const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(fillColor)
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
					context.fillStyle = fillColor
					context.fill()
				}

				if (strokeColor && lineWidth) {
					if (bGhost) {
						const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(strokeColor)
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

					context.lineWidth = fixedLineWidth ? lineWidth : lineWidth * scale
					context.strokeStyle = strokeColor
					context.stroke()
				}
			})
		}

		const end_time = now()

		return end_time - start_time
	}
}

export default DrawerCanvas
