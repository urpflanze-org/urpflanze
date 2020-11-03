import Scene from '@core/Scene'

import Timeline from '@services/timeline/Timeline'
import SceneChild from '@core/SceneChild'
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import Emitter from '@services/events/Emitter'
import { IDrawerOptions } from '@services/types/drawer'

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
	protected scene: Scene

	protected resolution: number
	protected ratio: number

	protected animation_id: number | null
	protected draw_id: number | null
	protected redraw_id: number | null
	protected drawerOptions: IADrawerOptions

	protected timeline: Timeline

	constructor(
		scene: Scene | undefined = undefined,
		ratio: number | undefined = undefined,
		resolution = 0,
		duration?: number,
		framerate?: number
	) {
		super()

		this.timeline = new Timeline(duration, framerate)
		this.resolution = resolution || (scene && scene.width ? scene.width : 0)
		this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1)

		if (scene) {
			const width = this.ratio >= 1 ? scene.width : scene.width * this.ratio
			const height = this.ratio >= 1 ? scene.height / this.ratio : scene.height

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

		if (!this.resolution && this.scene.width) this.resolution = this.scene.width
	}

	/**
	 * Return scene
	 *
	 * @return {*}  {Scene}
	 */
	public getScene(): Scene {
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
	public resize(width: number, height: number, ratio?: number, resolution?: number) {
		ratio = ratio || this.ratio || width / height

		const size = Math.max(width, height)

		width = ratio >= 1 ? size : size * ratio
		height = ratio >= 1 ? size / ratio : size

		this.ratio = ratio

		if (this.scene) this.scene.resize(width, height)

		if (resolution && resolution !== this.resolution && this.scene) {
			this.resolution = resolution

			Scene.walk((sceneChild: SceneChild) => {
				const props = sceneChild.data.props

				Object.keys(props).forEach(name => {
					SceneUtilities.setProp(sceneChild, name, props[name], this)
				})
			}, this.scene)
		}
	}

	/**
	 * Resize by ratio
	 *
	 */
	public setRatio(ratio: number) {
		this.resize(this.scene.width, this.scene.height, ratio)
	}

	/**
	 * Return drawer ratio
	 */
	public getRatio(): number {
		return this.ratio
	}

	/**
	 * Get resolution
	 */
	public getResolution(): number {
		return this.resolution
	}

	/**
	 * Get resolution of drawer
	 */
	public setResolution(resolution: number) {
		this.resize(this.scene.width, this.scene.height, this.ratio, resolution)
	}

	/**
	 * Get scene value scaled based on resolution
	 *
	 * @param {number} value
	 */
	public getValueFromResolution(value: number) {
		return (value * this.resolution) / 200
	}

	/**
	 * Get scene value scaled based on resolution
	 *
	 * @param {number} value
	 */
	public getValueFromResolutionScaled(value: number) {
		return (value * 200) / this.resolution
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
			const sequenceDurate = timeline.getDurate()

			for (let i = 1; i <= drawerOptions.ghosts; i++) {
				const ghostTime =
					drawAtTime -
					(drawerOptions.ghostSkipFunction
						? drawerOptions.ghostSkipFunction(i)
						: i * (drawerOptions.ghostSkipTime as number))

				ghostDrawerOptions.ghostIndex = i
				ghostDrawerOptions.time = (ghostTime + sequenceDurate) % sequenceDurate

				ghostCallback(ghostDrawerOptions)
			}
		}
	}

	/**
	 * Create color based on ghostMultiplier
	 *
	 * @static
	 * @param {string} color
	 * @param {number} ghostMultiplier
	 * @return {*}  {(string | undefined)}
	 */
	static ghostifyColor(color: string, ghostMultiplier: number): string | undefined {
		const match = /\((.+),(.+),(.+),(.+)?\)/g.exec(color)

		if (match) {
			const [, a, b, c, o]: Array<string> = match as RegExpExecArray
			const alpha = o ? parseFloat(o) : 1
			const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier
			return color.indexOf('rgb') >= 0 ? `rgba(${a},${b},${c},${ghostAlpha})` : `hsla(${a},${b},${c},${ghostAlpha})`
		}
	}
}

export default Drawer
