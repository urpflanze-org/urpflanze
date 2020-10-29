import Scene from '@core/Scene'

import SceneChild from '@core/SceneChild'
import FrameBuffer from '@services/drawers/drawer-canvas/FrameBuffer'
import { IDrawerCanvasEvents, IDrawerCanvasOptions } from '@services/types/drawer'
import { now } from 'src/Utilites'
import { vec2 } from 'gl-matrix'
import Drawer from '../Drawer'

/**
 *
 * @category Services.Drawer
 * @extends {Emitter<DrawerCanvasEvents>}
 */
class DrawerCanvas extends Drawer<IDrawerCanvasOptions, IDrawerCanvasEvents> {
	private canvas: HTMLCanvasElement | OffscreenCanvas

	private context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null

	private bBuffering = false

	public buffer: FrameBuffer

	constructor(
		scene?: Scene,
		canvasOrContainer?: HTMLElement | HTMLCanvasElement | OffscreenCanvas,
		drawerOptions: IDrawerCanvasOptions = {},
		ratio: number | undefined = undefined,
		resolution = 0,
		duration?: number,
		framerate?: number,
		bBuffering = false
	) {
		super(scene, ratio, resolution, duration, framerate)

		this.bBuffering = bBuffering

		this.buffer = new FrameBuffer()

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

		this.drawerOptions = {
			scale: drawerOptions.scale ?? 1,
			translate: drawerOptions.translate ?? [0, 0],
			time: drawerOptions.time ?? 0,
			simmetricLines: drawerOptions.simmetricLines ?? 0,
			clear: drawerOptions.clear ?? true,
			fixedLineWidth: drawerOptions.fixedLineWidth ?? false,
			noBackground: drawerOptions.noBackground ?? false,
			ghosts: drawerOptions.ghosts || 0,
			ghost_skip_time: drawerOptions.ghost_skip_time ?? 30,
			ghost_skip_function: drawerOptions.ghost_skip_function,
			backgroundImage: drawerOptions.backgroundImage,
		}
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
		super.setScene(scene)

		if (this.canvas) {
			this.setCanvas(this.canvas) // and flush
		}
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

		if (this.scene) {
			this.resize(this.scene.width, this.scene.height) // and flush
		}
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
		super.resize(width, height, ratio, resolution)

		if (this.canvas) {
			this.canvas.width = this.scene.width
			this.canvas.height = this.scene.height

			if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
				this.canvas.style.width = this.scene.width + 'px'
				this.canvas.style.height = this.scene.height + 'px'
			}
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
	 * Set draw option
	 *
	 * @template K
	 * @param {(K | IDrawerOptions)} name
	 * @param {Required<IDrawerOptions>[K]} [value]
	 * @memberof CanvasDrawer
	 */
	public setOption<K extends keyof IDrawerCanvasOptions>(
		name: K | IDrawerCanvasOptions,
		value?: Required<IDrawerCanvasOptions>[K]
	): void {
		super.setOption(name, value)
		this.flushBuffer()
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

	// 			const drawerOptions = { ...this.drawerOptions }
	// 			const sequenceEndTime = this.timeline.getSequenceEndTime()

	// 			for (let i = 0; i < sequence.frames; i++) {
	// 				// requestAnimationFrame(() => {
	// 				const time = this.timeline.getFrameTime(i)
	// 				drawerOptions.clear = this.drawerOptions.clear || i === 0
	// 				drawerOptions.time = time
	// 				DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)

	// 				if (drawerOptions.ghosts) {
	// 					for (let gi = 1; gi <= drawerOptions.ghosts; gi++) {
	// 						const ghostTime =
	// 							time -
	// 							(drawerOptions.ghost_skip_function
	// 								? drawerOptions.ghost_skip_function(gi)
	// 								: gi * (drawerOptions.ghost_skip_time ?? 30))

	// 						drawerOptions.clear = false
	// 						drawerOptions.ghost_index = gi
	// 						drawerOptions.time =
	// 							ghostTime < 0
	// 								? ghostTime + sequenceEndTime
	// 								: ghostTime > sequenceEndTime
	// 								? ghostTime % sequenceEndTime
	// 								: ghostTime

	// 						DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)
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

		const timeline = this.timeline
		const drawAtTime = timeline.getTime()
		const drawerOptions: IDrawerCanvasOptions & { ghost_index: number | undefined } = {
			...this.drawerOptions,
			ghost_index: undefined,
			clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 0,
			time: drawAtTime,
		}

		const current_frame = timeline.getFrameAtTime(drawAtTime)

		this.dispatch('drawer-canvas:before_draw', {
			current_frame: current_frame,
			current_time: drawAtTime,
		})

		if (this.bBuffering && this.buffer.exist(current_frame)) {
			this.context?.putImageData(this.buffer.get(current_frame) as ImageData, 0, 0)
		} else {
			if (drawerOptions.ghosts) {
				Drawer.eachGhosts<IDrawerCanvasOptions>(drawerOptions, timeline, ghostDrawerOptions => {
					ghostDrawerOptions.clear = drawerOptions.clear && ghostDrawerOptions.ghost_index === 1
					draw_time += DrawerCanvas.draw(this.scene, this.context, ghostDrawerOptions, this.resolution)
				})

				drawerOptions.clear = false
			}

			draw_time += DrawerCanvas.draw(this.scene, this.context, drawerOptions, this.resolution)

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
			!this.drawerOptions.clear &&
				(typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) &&
				this.timeline.stop()
			this.draw_id = requestAnimationFrame(this.draw)
		} else if (
			!this.drawerOptions.clear &&
			(typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0)
		) {
			this.stopAnimation()
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
	 * @param {DrawerOptions} options
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public static draw(
		scene: Scene,
		context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null,
		options: IDrawerCanvasOptions & { ghost_index?: number },
		resolution?: number
	): number {
		const start_time = now()

		if (context) {
			context.globalCompositeOperation = 'source-over'

			const scale: number = options.scale ?? 1
			const translate: Array<number> = options.translate ?? [0, 0]
			const time: number = options.time ?? 0
			const simmetricLines: number = options.simmetricLines ?? 0
			const fixedLineWidth: boolean | undefined = options.fixedLineWidth
			const clear: boolean | undefined = options.clear
			const noBackground: boolean | undefined = options.noBackground
			const backgroundImage: CanvasImageSource | undefined = options.backgroundImage
			const bGhost: boolean =
				typeof options.ghosts !== 'undefined' &&
				options.ghosts > 0 &&
				typeof options.ghost_index !== 'undefined' &&
				options.ghost_index > 0
			const ghostMultiplier: number = bGhost
				? 1 - (options.ghost_index as number) / ((options.ghosts as number) + 0.5)
				: 0

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

			if (clear) {
				if (noBackground) {
					context.clearRect(0, 0, width, height)
				} else {
					context.fillStyle = scene.background
					context.fillRect(0, 0, width, height)

					backgroundImage && context.drawImage(backgroundImage, 0, 0, width, height)
				}
			}

			if (simmetricLines > 0) {
				DrawerCanvas.drawSimmetricLines(
					context,
					simmetricLines,
					width,
					height,
					final_scale,
					final_translate,
					scene.color
				)
			}

			{
				let logFillColorWarn = false
				let logStrokeColorWarn = false

				scene.current_time = time

				scene.getChildren().forEach((sceneChild: SceneChild) => {
					if (
						!sceneChild.data ||
						!(sceneChild.data.visible === false) ||
						!(bGhost && sceneChild.data.disableGhost === true)
					) {
						sceneChild.generate(time, true)

						sceneChild.stream(streamCallback => {
							const shapeData = streamCallback.shape.data
							context.globalCompositeOperation = shapeData && shapeData.composite ? shapeData.composite : 'source-over'
							context.beginPath()
							context.moveTo(
								(streamCallback.buffer[streamCallback.frame_buffer_index] - width / 2) * final_scale[0] +
									final_translate[0],
								(streamCallback.buffer[streamCallback.frame_buffer_index + 1] - height / 2) * final_scale[1] +
									final_translate[1]
							)

							for (let i = 2; i < streamCallback.frame_length; i += 2) {
								context.lineTo(
									(streamCallback.buffer[streamCallback.frame_buffer_index + i] - width / 2) * final_scale[0] +
										final_translate[0],
									(streamCallback.buffer[streamCallback.frame_buffer_index + i + 1] - height / 2) * final_scale[1] +
										final_translate[1]
								)
							}

							streamCallback.shape.isClosed() && context.closePath()

							if (shapeData && shapeData.highlighted) {
								context.lineWidth = (streamCallback.lineWidth || 1) * 3 * scale
								context.strokeStyle = scene.color
								context.stroke()

								return
							}

							if (streamCallback.fillColor) {
								if (bGhost) {
									const color = Drawer.ghostifyColor(streamCallback.fillColor, ghostMultiplier)
									if (color) {
										streamCallback.fillColor = color
									} else if (!logFillColorWarn) {
										console.warn(`[Urpflanze:DrawerCanvas] Unable ghost fill color '${streamCallback.fillColor}', 
									please enter a rgba or hsla color`)
										logFillColorWarn = true
									}
								}
								context.fillStyle = streamCallback.fillColor
								context.fill()
							}

							if (streamCallback.strokeColor) {
								if (bGhost) {
									const color = Drawer.ghostifyColor(streamCallback.strokeColor, ghostMultiplier)
									if (color) {
										streamCallback.strokeColor = color
									} else if (!logStrokeColorWarn) {
										console.warn(`[Urpflanze:DrawerCanvas] Unable ghost stroke color '${streamCallback.strokeColor}', 
									please enter a rgba or hsla color`)
										logStrokeColorWarn = true
									}
									streamCallback.lineWidth *= ghostMultiplier
								}

								context.lineWidth = fixedLineWidth ? streamCallback.lineWidth : streamCallback.lineWidth * scale
								context.strokeStyle = streamCallback.strokeColor
								context.stroke()
							}
						})
					}
				})
			}
		}

		const end_time = now()

		return end_time - start_time
	}

	static drawSimmetricLines(
		context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
		simmetricLines: number,
		width: number,
		height: number,
		scale: Array<number>,
		translate: Array<number>,
		color: string
	) {
		const offset = Math.PI / simmetricLines
		const size = Math.max(width, height) / 2
		const center = vec2.fromValues(size / 2, size / 2)

		for (let i = 0; i < simmetricLines; i++) {
			const a = vec2.fromValues(-size, -size)
			const b = vec2.fromValues(size * 2, size * 2)
			const rotate = i * offset + Math.PI / 4

			vec2.rotate(a, a, center, rotate)
			vec2.rotate(b, b, center, rotate)

			context.beginPath()
			context.strokeStyle = color
			context.lineWidth = 1

			context.moveTo((a[0] - size / 2) * scale[0] + translate[0], (a[1] - size / 2) * scale[1] + translate[1])
			context.lineTo((b[0] - size / 2) * scale[0] + translate[0], (b[1] - size / 2) * scale[1] + translate[1])
			context.stroke()
		}
	}
}

export default DrawerCanvas
