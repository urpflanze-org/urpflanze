import * as JSZip from 'jszip'

import { now } from '@urpflanze/core'

import Emitter from '@services/events/Emitter'

import { IRenderEvents, IRenderSettings, IRenderStart, TRenderImageType } from '@services/types/renderer'

import Capturer from '@services/renderer/Capturer'
import DrawerCanvas from '@services/drawers/drawer-canvas/DrawerCanvas'
import { cancelablePromise, ICancelablePromise } from 'src/Utilites'

/**
 *
 * @category Services.Renderer
 * @class Renderer
 * @extends {Emitter<IRenderEvents>}
 */
class Renderer extends Emitter<IRenderEvents> {
	private capturer: Capturer

	private renderPromise!: ICancelablePromise<Uint8Array> | ICancelablePromise<Array<Blob>>

	private started = false

	constructor() {
		super()

		this.capturer = new Capturer()
	}

	public renderImage(drawer: DrawerCanvas, settings: IRenderSettings): Promise<Uint8Array> {
		this.stop()

		this.started = true
		this.capturer.setSettings(settings)
		this.capturer.start(1)

		const promise = new Promise<Uint8Array>((resolve, reject) => {
			const bClear = drawer.getOption('clear', true)
			const timeline = drawer.getTimeline()
			const sequence = timeline.getSequence()

			if (!bClear) {
				const needFrame = settings.time >= sequence.duration ? sequence.frames : timeline.getFrameAtTime(settings.time)
				for (let i = 0; i <= needFrame; i++) {
					timeline.setFrame(i)
					drawer.draw()
				}
			} else {
				drawer.draw()
			}

			this.capturer.capture(drawer.getCanvas(), 0)

			this.capturer
				.save()
				.then(chunks => {
					resolve(chunks[0])
					this.started = false
				})
				.catch(reject)
		})

		this.renderPromise = cancelablePromise(promise)

		return promise
	}

	private async prepareRenderAnimation(drawer: DrawerCanvas, settings: IRenderSettings): Promise<IRenderStart> {
		const startTimeDrawTime = now()
		drawer.setOption('time', 0)
		drawer.draw()
		const drawTime = now() - startTimeDrawTime

		const sequence = drawer.getTimeline().getSequence()
		const time = await Capturer.getRenderTime(drawer.getCanvas(), settings.type as TRenderImageType, settings.quality)
		const renderTime = time + drawTime
		const totalTime = renderTime * sequence.frames

		const maxDuration = 300
		const parts = 1 + Math.floor(totalTime / 1000 / maxDuration)
		const frameForPart = Math.floor(sequence.frames / parts)

		return {
			estimated_time: totalTime,
			total_frames: sequence.frames,
			total_parts: parts,
			forPart: frameForPart,
		}
	}

	public stop(): void {
		this.started = false
		this.renderPromise && this.renderPromise.cancel()
		this.capturer.stop()
	}

	public renderAnimation(drawer: DrawerCanvas, settings: IRenderSettings): Promise<Array<Blob>> {
		this.stop()

		this.started = true

		const sequence = drawer.getTimeline().getSequence()

		const promise = new Promise<Array<Blob>>((resolve, reject) => {
			this.prepareRenderAnimation(drawer, settings).then(async (startMeta: IRenderStart) => {
				this.dispatch('renderer:start', startMeta)

				/**
				 * start rendering
				 */
				const zipParts: Array<Blob> = []

				for (let i = 0; i < startMeta.total_parts; i++) {
					if (this.started) {
						try {
							const zipPart = await this.renderAnimationPart(
								drawer,
								settings,
								i * startMeta.forPart,
								startMeta.forPart,
								i,
								sequence.frames,
								startMeta.total_parts
							)
							if (zipPart) zipParts.push(zipPart)
							else reject()
						} catch (e) {
							reject(e)
						}
					} else {
						reject()
					}
				}

				resolve(zipParts)
				this.started = false
			})
		})

		this.renderPromise = cancelablePromise(promise)

		return promise
	}

	private async renderAnimationPart(
		drawer: DrawerCanvas,
		settings: IRenderSettings,
		frame_from: number,
		frame_count: number,
		part: number,
		total_frames: number,
		total_parts: number
	): Promise<Blob | undefined> {
		this.capturer.setSettings(settings)
		this.capturer.stop()
		this.capturer.start(frame_count)

		const timeline = drawer.getTimeline()

		let lastRenderTime = 0

		for (let i = 0; i < frame_count; i++) {
			if (!this.started) return undefined

			const current_frame = i + frame_from
			if (current_frame <= total_frames) {
				const measure_start = now()
				timeline.setFrame(current_frame)
				drawer.draw()
				await this.capturer.capture(drawer.getCanvas(), i)
				const measure_end = now()
				lastRenderTime = measure_end - measure_start

				this.dispatch('renderer:render-frame', {
					frame: current_frame,
					part: part,
					forPart: frame_count,
					total_frames: total_frames,
					total_parts: total_parts,
					render_time: lastRenderTime,
				})
			}
		}

		const chunks: Array<Uint8Array> = await this.capturer.save()

		if (this.started) {
			const zip = new JSZip()

			for (let i = 0, len = chunks.length; i < len; i++) {
				const frame_number = (i + frame_from).toString()

				let frameName = ''
				for (let j = frame_number.length; j <= 4; j++) frameName += '0'

				frameName += frame_number

				zip.file(frameName + this.capturer.extension, chunks[i])
			}

			const result: Blob = await zip.generateAsync({ type: 'blob' })
			if (!this.started) return undefined

			this.capturer.stop()
			return result
		} else {
			return undefined
		}
	}
}

export default Renderer
