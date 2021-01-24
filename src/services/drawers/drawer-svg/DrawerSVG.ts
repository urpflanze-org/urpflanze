import Scene from '@core/Scene'

import SceneChild from '@core/SceneChild'
import { IDrawerStreamProps, IDrawerSVGEvents, IDrawerSVGOptions } from '@services/types/drawer'
import { now } from 'src/Utilites'
import Drawer from '@services/drawers/Drawer'
import { ISceneChildPropArguments, IStreamArguments } from '@core/types/scene-child'
import { IBufferIndex } from '@core/types/shape-base'
import { ShapePrimitive, Context } from 'src'
import { parseColorAndConvert } from 'src/Color'

/**
 * Abstract drawer
 *
 * @category Services.Drawer
 * @class DrawerSVG
 * @extends {Drawer<IDrawerSVGOptions, IDrawerSVGEvents>}
 */
class DrawerSVG extends Drawer<IDrawerSVGOptions, IDrawerSVGEvents> {
	private container: HTMLElement
	// private svgElement: SVGElement

	constructor(
		scene: Scene | undefined,
		container: HTMLElement,
		drawerOptions: IDrawerSVGOptions = {},
		ratio: number | undefined = undefined,
		// resolution = 0,
		duration?: number,
		framerate?: number
	) {
		super(scene, ratio, duration, framerate)

		this.container = container

		this.drawerOptions = {
			time: drawerOptions.time ?? 0,
			decimals: drawerOptions.decimals || 2,
			noBackground: drawerOptions.noBackground ?? false,
			ghosts: drawerOptions.ghosts || 0,
			ghostAlpha: drawerOptions.ghostAlpha === false ? false : true,
			ghostSkipTime: drawerOptions.ghostSkipTime ?? 30,
			ghostSkipFunction: drawerOptions.ghostSkipFunction,
		}
	}

	/**
	 * Draw current scene
	 *
	 * @returns {number}
	 * @memberof DrawerCanvas
	 */
	public draw(): number {
		if (typeof this.scene === 'undefined') return -1

		let drawTime = 0

		const timeline = this.timeline
		const drawAtTime = timeline.getTime()
		const drawerOptions: IDrawerSVGOptions & { ghostIndex: number | undefined } = {
			...this.drawerOptions,
			ghostIndex: undefined,
			time: drawAtTime,
		}

		const currentFrame = timeline.getFrameAtTime(drawAtTime)

		this.dispatch('drawer-svg:before_draw', {
			currentFrame: currentFrame,
			currentTime: drawAtTime,
		})

		const paths: Array<SVGPathElement> = []

		if (drawerOptions.ghosts) {
			Drawer.eachGhosts(drawerOptions, timeline, ghostDrawerOptions => {
				drawTime += DrawerSVG.draw(this.scene as Scene, paths, ghostDrawerOptions)
			})
		}

		drawTime += DrawerSVG.draw(this.scene, paths, drawerOptions)

		this.appendSVGFromPaths(paths, drawerOptions)

		return drawTime
	}

	protected appendSVGFromPaths(paths: Array<SVGPathElement>, drawerOptions: IDrawerSVGOptions): void {
		if (this.scene && this.container) {
			while (this.container.lastChild) this.container.removeChild(this.container.lastChild)

			const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
			svg.setAttribute('width', this.scene.width + '')
			svg.setAttribute('height', this.scene.height + '')
			svg.setAttribute('viewBox', `0 0 ${this.scene.width} ${this.scene.height}`)

			const comm = document.createComment('Created with Urpflanze.js')

			svg.appendChild(comm)

			if (!drawerOptions.noBackground) {
				const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
				background.setAttribute('width', this.scene.width + '')
				background.setAttribute('height', this.scene.height + '')
				DrawerSVG.setColor(background, 'fill', this.scene.background)

				svg.appendChild(background)
			}

			paths.forEach(path => svg.appendChild(path))

			this.container.appendChild(svg)
		}
	}

	public static setColor(element: SVGElement, type: 'fill' | 'stroke', color: string) {
		if (color === 'none') {
			element.setAttribute(type, 'none')
		} else {
			const parsed = parseColorAndConvert(color)
			if (parsed) {
				element.setAttribute(type, `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`)
				if (parsed.alpha !== 1) {
					const style = element.getAttribute('style') || ''
					element.setAttribute('style', style + ` ${type}-opacity: ${parsed.alpha};`)
				}
			}
		}
	} 

	public static draw(
		scene: Scene,
		paths: Array<SVGPathElement>,
		options: IDrawerSVGOptions & { ghostIndex?: number }
	): number {
		const start_time = now()

		const time: number = options.time ?? 0
		const decimals: number = options.decimals as number
		const bGhost: boolean =
			typeof options.ghosts !== 'undefined' &&
			options.ghosts > 0 &&
			typeof options.ghostIndex !== 'undefined' &&
			options.ghostIndex > 0
		const ghostMultiplier: number = bGhost ? 1 - (options.ghostIndex as number) / ((options.ghosts as number) + 0.5) : 0
		const ghostAlpha: boolean = options.ghostAlpha === true

		let logFillColorWarn = false
		let logStrokeColorWarn = false

		scene.currentTime = time
		scene.getChildren().forEach((sceneChild: SceneChild) => {
			if (
				!sceneChild.data ||
				!(sceneChild.data.visible === false) ||
				!(bGhost && sceneChild.data.disableGhost === true)
			) {
				sceneChild.generate(time, true)

				sceneChild.stream((stream: IStreamArguments) => {
					const tempPath = []

					const currentIndex: IBufferIndex = stream.currentIndexing
					const shape: ShapePrimitive<any, IDrawerStreamProps> = currentIndex.shape
					const propArguments: ISceneChildPropArguments = {
						shape,
						// singleRepetitionBounding: currentIndex.singleRepetitionBounding,
						repetition: currentIndex.repetition,
						parent: currentIndex.parent,
						time: scene.currentTime,
						context: Context,
					}

					for (let i = 0; i < stream.frameLength; i += 2) {
						tempPath.push(
							stream.buffer[stream.frameBufferIndex + i].toFixed(decimals) +
								' ' +
								stream.buffer[stream.frameBufferIndex + i + 1].toFixed(decimals)
						)
					}

					let fill = Drawer.getStreamDrawerProp(shape, 'fill', propArguments)

					if (fill) {
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
					}

					const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
					path.setAttribute('d', `M${tempPath.join(' L')} ${shape.isClosed() ? 'Z' : ''}`)

					DrawerSVG.setColor(path, 'fill', fill || 'none')

					if (stroke) {
						DrawerSVG.setColor(path, 'stroke', stroke)
						path.setAttribute('stroke-width', (lineWidth || 1) + '')
					}
					paths.push(path)
				})
			}
		})

		const end_time = now()

		return end_time - start_time
	}
}

export default DrawerSVG
