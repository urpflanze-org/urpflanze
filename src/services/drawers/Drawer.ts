import { Scene, SceneChild, ShapePrimitive, pmod } from '@urpflanze/core'

import Timeline from '@services/timeline/Timeline'

import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import Emitter from '@services/events/Emitter'
import { IDrawerOptions, IDrawerPropArguments, IDrawerStreamProps, TDrawerProp } from '@services/types/drawer'
import { TProjectDrawerProps, TProjectSceneChildProps } from '@services/types/exporters-importers'
import { parseColor } from 'src/Utilites'

/**
 * Abstract Drawer
 *
 * @category Services.Drawer
 * @abstract
 * @class Drawer
 * @extends {Emitter<IDrawerEvents>}
 * @template IADrawerOptions
 * @template IDrawerEvents
 */
abstract class Drawer<IADrawerOptions extends IDrawerOptions, IDrawerEvents> extends Emitter<IDrawerEvents> {
	protected scene?: Scene

	protected resolution!: number
	protected ratio: number

	protected animation_id: number | null
	protected draw_id: number | null
	protected redraw_id: number | null
	protected drawerOptions!: IADrawerOptions

	protected timeline: Timeline

	constructor(
		scene: Scene | undefined = undefined,
		ratio: number | undefined = undefined,
		duration?: number,
		framerate?: number
	) {
		super()

		this.timeline = new Timeline(duration, framerate)
		this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1)

		if (scene) {
			const size = Math.max(scene.width, scene.height)
			const width = this.ratio >= 1 ? size : size * this.ratio
			const height = this.ratio >= 1 ? size / this.ratio : size

			scene.resize(width, height)
			this.setScene(scene)
		}

		this.draw_id = null
		this.redraw_id = null
		this.animation_id = null

		this.draw = this.draw.bind(this)
		this.animate = this.animate.bind(this)
		this.startAnimation = this.startAnimation.bind(this)
	}

	/**
	 * Set scene
	 *
	 * @param {Scene} scene
	 */
	public setScene(scene: Scene): void {
		this.scene = scene

		// if (!this.resolution && this.scene.width) this.resolution = this.scene.width
	}

	/**
	 * Return scene
	 *
	 * @return {*}  {Scene}
	 */
	public getScene(): Scene | undefined {
		return this.scene
	}

	/**
	 * Return timeline
	 *
	 * @return {*}  {Timeline}
	 */
	public getTimeline(): Timeline {
		return this.timeline
	}

	/**
	 * Resize scene and canvas
	 *
	 * @param {number} width
	 * @param {number} height
	 * @param {number} [ratio]
	 */
	public resize(width: number, height: number, ratio?: number): void {
		ratio = ratio || this.ratio || width / height

		const size = Math.max(width, height)

		width = ratio >= 1 ? size : size * ratio
		height = ratio >= 1 ? size / ratio : size

		this.ratio = ratio

		if (this.scene) {
			this.scene.resize(width, height)

			Scene.walk((sceneChild: SceneChild) => {
				if (sceneChild.data) {
					if (sceneChild.data.props) {
						const props = sceneChild.data.props

						Object.keys(props).forEach(name => {
							SceneUtilities.setProp(
								sceneChild,
								name as keyof TProjectSceneChildProps,
								props[name],
								this.scene as Scene
							)
						})
					}

					if (sceneChild.data.drawer) {
						const drawer = sceneChild.data.drawer

						Object.keys(drawer).forEach(name => {
							SceneUtilities.setDrawerProp(
								sceneChild,
								name as keyof TProjectDrawerProps,
								drawer[name],
								this.scene as Scene
							)
						})
					}
				}
			}, this.scene)
		}
	}

	/**
	 * Resize by ratio
	 *
	 */
	public setRatio(ratio: number): void {
		if (this.scene) {
			this.resize(this.scene.width, this.scene.height, ratio)
		}
	}

	/**
	 * Return drawer ratio
	 */
	public getRatio(): number {
		return this.ratio
	}

	/**
	 * Set draw option
	 *
	 * @template K
	 * @param {(K | IADrawerOptions)} name
	 */
	public setOption<K extends keyof IADrawerOptions>(
		name: K | IADrawerOptions,
		value?: Required<IADrawerOptions>[K]
	): void {
		if (typeof name == 'object') {
			const keys = Object.keys(name) as Array<keyof IADrawerOptions>
			for (let i = 0, len = keys.length; i < len; i++) {
				this.drawerOptions[keys[i]] = name[keys[i]]
			}
		} else {
			this.drawerOptions[name as keyof IADrawerOptions] = value as Required<IADrawerOptions>[K]
		}
	}

	/**
	 * Return option valie or default
	 *
	 * @template K
	 * @param {K} name
	 * @param {IADrawerOptions[K]} defaultValue
	 */
	public getOption<K extends keyof IADrawerOptions>(name: K, defaultValue: IADrawerOptions[K]): IADrawerOptions[K] {
		return this.drawerOptions[name] ?? defaultValue
	}

	/**
	 * Return all options
	 */
	public getOptions(): IADrawerOptions {
		return this.drawerOptions
	}

	/**
	 * Internal tick animation
	 */
	private animate(timestamp: number): void {
		if (this.timeline.bSequenceStarted()) {
			this.animation_id = requestAnimationFrame(this.animate)

			if (this.timeline.tick(timestamp)) this.draw()
		}
	}

	/**
	 * Start animation drawing
	 */
	public startAnimation(): void {
		this.stopAnimation()

		this.timeline.start()
		this.animation_id = requestAnimationFrame(this.animate)
	}

	/**
	 * Stop animation drawing
	 */
	public stopAnimation(): void {
		this.timeline.stop()

		if (this.animation_id) cancelAnimationFrame(this.animation_id)
	}

	/**
	 * Pause animation drawing
	 */
	public pauseAnimation(): void {
		this.timeline.pause()

		if (this.animation_id) cancelAnimationFrame(this.animation_id)
	}

	/**
	 * Play animation drawing
	 */
	public playAnimation(): void {
		this.timeline.start()

		requestAnimationFrame(this.animate)
	}

	/**
	 * Draw current scene
	 *
	 * @returns {number}
	 */
	abstract draw(): number

	/**
	 * Redraw
	 *
	 * @returns {void}
	 * @memberof DrawerCanvas
	 */
	public redraw(): void {
		if (!this.timeline.bSequenceStarted()) {
			this.draw_id && cancelAnimationFrame(this.draw_id)

			if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) this.timeline.stop()

			this.draw_id = requestAnimationFrame(this.draw)
		} else if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) {
			this.stopAnimation()
			this.redraw_id && cancelAnimationFrame(this.redraw_id)
			this.redraw_id = requestAnimationFrame(this.startAnimation)
		}
	}

	/**
	 * Return a style value
	 *
	 * @static
	 * @template T
	 * @param {ShapePrimitive<T>} shape
	 * @param {keyof T} key
	 * @param {IDrawerPropArguments} propArguments
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	static getStreamDrawerProp<T extends IDrawerStreamProps>(
		shape: ShapePrimitive<any, T>,
		key: keyof T,
		propArguments: IDrawerPropArguments,
		defaultValue?: any
	): any {
		let attribute: TDrawerProp<any> = shape.drawer[key] as any

		if (typeof attribute === 'function') {
			attribute = attribute(propArguments)
		}

		return attribute ?? defaultValue
	}

	/**
	 * Each ghosts index and create drawerOptions to pass at the draw method
	 *
	 * @static
	 * @template T
	 * @param {T} drawerOptions
	 * @param {Timeline} timeline
	 * @param {((ghostDrawerOptions: T & { ghostIndex?: number }) => any)} ghostCallback
	 */
	static eachGhosts<T extends IDrawerOptions>(
		drawerOptions: T,
		timeline: Timeline,
		ghostCallback: (ghostDrawerOptions: T & { ghostIndex?: number }) => any
	): void {
		if (drawerOptions.ghosts) {
			const ghostDrawerOptions: T & { ghostIndex?: number } = {
				...drawerOptions,
			}
			const drawAtTime = timeline.getTime()
			const sequenceDuration = timeline.getDuration()

			const ghostRepetition = {
				offset: 0,
				index: 0,
				count: drawerOptions.ghosts,
			}
			for (let i = 1; i <= drawerOptions.ghosts; i++) {
				ghostRepetition.index = i
				ghostRepetition.offset = ghostRepetition.index / ghostRepetition.count

				const ghostTime =
					drawAtTime -
					(drawerOptions.ghostSkipFunction
						? drawerOptions.ghostSkipFunction(ghostRepetition, drawAtTime)
						: i * (drawerOptions.ghostSkipTime as number))

				ghostDrawerOptions.ghostIndex = i
				ghostDrawerOptions.time = pmod(ghostTime, sequenceDuration)
				ghostCallback(ghostDrawerOptions)
			}
		}
	}

	/**
	 * Create color based on ghostMultiplier
	 *
	 * @static
	 * @param {any} color
	 * @param {number} ghostMultiplier
	 * @return {*}  {(string | undefined)}
	 */
	static ghostifyColor(color: any, ghostMultiplier: number): string | undefined {
		if (typeof color === 'string' || typeof color === 'number') {
			const parsed = parseColor(color)
			if (parsed) {
				const ghostAlpha = parsed.alpha * ghostMultiplier
				return parsed.type === 'rgb'
					? `rgba(${parsed.a},${parsed.b},${parsed.c},${ghostAlpha})`
					: `hsla(${parsed.a},${parsed.b}%,${parsed.c}%,${ghostAlpha})`
			}
		}

		return color
	}
}

export default Drawer
