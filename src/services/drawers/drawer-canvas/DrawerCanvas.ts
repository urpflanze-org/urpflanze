import Scene from '@core/Scene'

import SceneChild from '@core/SceneChild'
import Drawer from '@services/drawers/Drawer'
import FrameBuffer from '@services/drawers/drawer-canvas/FrameBuffer'
import {
	IDrawerCanvasEvents,
	IDrawerCanvasOptions,
	IDrawerCanvasPropArguments,
	IDrawerCanvasStreamProps,
} from '@services/types/drawer'
import { now } from 'src/Utilites'
import Vec2 from '@core/math/Vec2'
import { IStreamArguments } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import Context from '@core/Context'

/**
 *
 * @category Services.Drawer
 * @extends {Emitter<DrawerCanvasEvents>}
 */
class DrawerCanvas<GDrawerCanvasOptions extends IDrawerCanvasOptions = IDrawerCanvasOptions> extends Drawer<
	IDrawerCanvasOptions,
	IDrawerCanvasEvents
> {
	protected canvas!: HTMLCanvasElement | OffscreenCanvas

	protected context!: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null

	protected drawerOptions!: GDrawerCanvasOptions
	protected bBuffering = false

	public buffer: FrameBuffer

	constructor(
		scene?: Scene,
		canvasOrContainer?: HTMLElement | HTMLCanvasElement | OffscreenCanvas,
		drawerOptions?: GDrawerCanvasOptions,
		ratio: number | undefined = undefined,
		duration?: number,
		framerate?: number,
		bBuffering = false
	) {
		super(scene, ratio, duration, framerate)

		this.drawerOptions = {} as GDrawerCanvasOptions

		this.drawerOptions.clear = drawerOptions?.clear ?? true
		this.drawerOptions.time = drawerOptions?.time ?? 0
		this.drawerOptions.simmetricLines = drawerOptions?.simmetricLines ?? 0
		this.drawerOptions.noBackground = drawerOptions?.noBackground ?? false
		this.drawerOptions.ghosts = drawerOptions?.ghosts || 0
		this.drawerOptions.ghostAlpha = drawerOptions?.ghostAlpha === false ? false : true
		this.drawerOptions.ghostSkipTime = drawerOptions?.ghostSkipTime ?? 30
		this.drawerOptions.ghostSkipFunction = drawerOptions?.ghostSkipFunction
		this.drawerOptions.backgroundImage = drawerOptions?.backgroundImage
		this.drawerOptions.backgroundImageFit = drawerOptions?.backgroundImageFit || 'cover'

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
			desynchronized: this.bBuffering !== true,
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
	 * @memberof DrawerCanvas
	 */
	public resize(width: number, height: number, ratio?: number): void {
		super.resize(width, height, ratio)

		if (this.canvas && this.scene) {
			this.canvas.width = this.scene.width
			this.canvas.height = this.scene.height

			if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
				this.canvas.style.width = this.scene.width + 'px'
				this.canvas.style.height = this.scene.height + 'px'
			}
		}

		this.flushBuffer()
		this.dispatch('drawer-canvas:resize')
		this.redraw()
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
	// 							(drawerOptions.ghostSkipFunction
	// 								? drawerOptions.ghostSkipFunction(gi)
	// 								: gi * (drawerOptions.ghostSkipTime ?? 30))

	// 						drawerOptions.clear = false
	// 						drawerOptions.ghostIndex = gi
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
		if (typeof this.scene === 'undefined') return -1

		let draw_time = 0

		const timeline = this.timeline
		const drawAtTime = timeline.getTime()

		const drawerOptions: IDrawerCanvasOptions & { ghostIndex: number | undefined } = {
			...this.drawerOptions,
			ghostIndex: undefined,
			clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 1,
			time: drawAtTime,
		}

		const currentFrame = timeline.getFrameAtTime(drawAtTime)

		this.dispatch('drawer-canvas:before_draw', {
			currentFrame: currentFrame,
			currentTime: drawAtTime,
		})

		if (this.bBuffering && this.buffer.exist(currentFrame)) {
			this.context?.putImageData(this.buffer.get(currentFrame) as ImageData, 0, 0)
		} else {
			if (drawerOptions.ghosts) {
				Drawer.eachGhosts<IDrawerCanvasOptions>(drawerOptions, timeline, ghostDrawerOptions => {
					ghostDrawerOptions.clear = drawerOptions.clear && ghostDrawerOptions.ghostIndex === 1
					draw_time += this.applyDraw(ghostDrawerOptions)
				})

				drawerOptions.clear = false
			}

			draw_time += this.applyDraw(drawerOptions)

			if (this.bBuffering && this.context) {
				this.buffer.push(currentFrame, this.context)

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

	public applyDraw(options: IDrawerCanvasOptions & { ghostIndex?: number }): number {
		const start_time = now()
		const scene = this.scene as Scene
		const context = this.context as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D

		context.globalCompositeOperation = 'source-over'

		const time: number = options.time ?? 0
		const simmetricLines: number = options.simmetricLines ?? 0
		const clear: boolean | undefined = options.clear
		const noBackground: boolean | undefined = options.noBackground
		const backgroundImage: CanvasImageSource | undefined = options.backgroundImage
		const bGhost: boolean =
			typeof options.ghosts !== 'undefined' &&
			options.ghosts > 0 &&
			typeof options.ghostIndex !== 'undefined' &&
			options.ghostIndex > 0
		const ghostMultiplier: number = bGhost ? 1 - (options.ghostIndex as number) / ((options.ghosts as number) + 0.5) : 0
		const ghostAlpha: boolean = options.ghostAlpha === true
		const width: number = scene.width
		const height: number = scene.height
		const ratio = width / height

		if (clear) {
			if (noBackground) {
				context.clearRect(0, 0, width, height)
			} else {
				context.fillStyle = scene.background
				context.fillRect(0, 0, width, height)

				if (backgroundImage) {
					const sourceWidth =
						backgroundImage instanceof SVGImageElement ? backgroundImage.width.baseVal.value : backgroundImage.width
					const sourceHeight =
						backgroundImage instanceof SVGImageElement ? backgroundImage.height.baseVal.value : backgroundImage.height
					const sourceRatio = sourceWidth / sourceHeight

					let x = 0,
						y = 0,
						bgWidth = width,
						bgHeight = height
					if (sourceRatio !== ratio) {
						if (options.backgroundImageFit === 'contain') {
							bgWidth = ratio > sourceRatio ? (sourceWidth * height) / sourceHeight : width
							bgHeight = ratio > sourceRatio ? height : (sourceHeight * width) / sourceWidth
						} else {
							bgWidth = ratio < sourceRatio ? (sourceWidth * height) / sourceHeight : width
							bgHeight = ratio < sourceRatio ? height : (sourceHeight * width) / sourceWidth
						}

						x = (width - bgWidth) / 2
						y = (height - bgHeight) / 2
					}

					context.drawImage(backgroundImage, x, y, bgWidth, bgHeight)
				}
			}

			if (simmetricLines > 0) {
				DrawerCanvas.drawSimmetricLines(context, simmetricLines, width, height, scene.color)
			}
		}

		{
			let logFillColorWarn = false
			let logStrokeColorWarn = false

			scene.currentTime = time
			scene.getChildren().forEach((sceneChild: SceneChild) => {
				if (
					!sceneChild.data ||
					(!(sceneChild.data.visible === false) && !(bGhost && sceneChild.data.disableGhost === true))
				) {
					sceneChild.generate(time, true)
					context.save()
					sceneChild.stream((stream: IStreamArguments) => {
						const currentIndex: IBufferIndex = stream.currentIndexing
						const shape: ShapePrimitive = currentIndex.shape
						const propArguments: IDrawerCanvasPropArguments = {
							canvasContext: context,
							shape,
							// singleRepetitionBounding: currentIndex.singleRepetitionBounding,
							repetition: {
								type: currentIndex.repetition.type,
								angle: currentIndex.repetition.angle,
								index: currentIndex.repetition.index,
								count: currentIndex.repetition.count,
								offset: currentIndex.repetition.offset,
								row: {
									index: currentIndex.repetition.row.index,
									count: currentIndex.repetition.row.count,
									offset: currentIndex.repetition.row.offset,
								},
								col: {
									index: currentIndex.repetition.col.index,
									count: currentIndex.repetition.col.count,
									offset: currentIndex.repetition.col.offset,
								},
							},
							parent: currentIndex.parent,
							time: scene.currentTime,
							context: Context,
						}

						const composite = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
							shape,
							'composite',
							propArguments,
							'source-over'
						)

						context.globalCompositeOperation = composite

						context.beginPath()
						context.moveTo(stream.buffer[stream.frameBufferIndex], stream.buffer[stream.frameBufferIndex + 1])

						for (let i = 2; i < stream.frameLength; i += 2) {
							context.lineTo(stream.buffer[stream.frameBufferIndex + i], stream.buffer[stream.frameBufferIndex + i + 1])
						}

						currentIndex.shape.isClosed() && context.closePath()

						const shadowColor = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
							shape,
							'shadowColor',
							propArguments
						)
						const shadowBlur = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(shape, 'shadowBlur', propArguments)
						const shadowOffsetX = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
							shape,
							'shadowOffsetX',
							propArguments
						)
						const shadowOffsetY = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
							shape,
							'shadowOffsetY',
							propArguments
						)

						context.shadowColor = shadowColor
						context.shadowBlur = shadowBlur
						shadowOffsetX && (context.shadowOffsetX = shadowOffsetX)
						shadowOffsetY && (context.shadowOffsetY = shadowOffsetY)

						let fill = Drawer.getStreamDrawerProp(shape, 'fill', propArguments)

						if (typeof fill !== 'undefined') {
							if (bGhost && ghostAlpha) {
								const color = Drawer.ghostifyColor(fill, ghostMultiplier)
								if (color) {
									fill = color
								} else if (!logFillColorWarn) {
									console.warn(`[Urpflanze:DrawerCanvas] Unable ghost fill color '${fill}',
									please enter a rgba or hsla color`)
									logFillColorWarn = true
								}
							}

							context.fillStyle = fill
							context.fill()
						}

						let stroke = Drawer.getStreamDrawerProp(
							shape,
							'stroke',
							propArguments,
							typeof fill === 'undefined' ? scene.color : undefined
						)
						let lineWidth = Drawer.getStreamDrawerProp(shape, 'lineWidth', propArguments, 1)

						if (stroke) {
							if (bGhost && ghostAlpha) {
								const color = Drawer.ghostifyColor(stroke, ghostMultiplier)
								if (color) {
									stroke = color
								} else if (!logStrokeColorWarn) {
									console.warn(`[Urpflanze:DrawerCanvas] Unable ghost stroke color '${stroke}',
									please enter a rgba or hsla color`)
									logStrokeColorWarn = true
								}
								lineWidth *= ghostMultiplier
							}

							const lineJoin = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(shape, 'lineJoin', propArguments)
							const lineCap = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(shape, 'lineCap', propArguments)
							const lineDash = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(shape, 'lineDash', propArguments)
							const lineDashOffset = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
								shape,
								'lineDashOffset',
								propArguments
							)
							const miterLimit = Drawer.getStreamDrawerProp<IDrawerCanvasStreamProps>(
								shape,
								'miterLimit',
								propArguments
							)

							context.setLineDash.call(context, lineDash || [])
							context.lineJoin = lineJoin
							context.lineCap = lineCap
							context.lineDashOffset = lineDashOffset
							context.miterLimit = miterLimit

							context.lineWidth = lineWidth
							context.strokeStyle = stroke
							context.stroke()
						}
					})
					context.restore()
				}
			})
		}

		const end_time = now()

		return end_time - start_time
	}

	static drawSimmetricLines(
		context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
		simmetricLines: number,
		width: number,
		height: number,
		color: string
	): void {
		const offset = Math.PI / simmetricLines
		const size = Math.max(width, height)
		const center = [size / 2, size / 2]

		for (let i = 0; i < simmetricLines; i++) {
			const a = [-size, -size]
			const b = [size * 2, size * 2]
			const rotate = i * offset + Math.PI / 4

			Vec2.rotateZ(a, center, rotate)
			Vec2.rotateZ(b, center, rotate)

			context.beginPath()
			context.strokeStyle = color
			context.lineWidth = 1

			context.moveTo(a[0], a[1])
			context.lineTo(b[0], b[1])

			context.stroke()
		}
	}
}

export default DrawerCanvas
