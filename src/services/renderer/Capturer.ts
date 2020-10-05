import { TRenderImageType, TRenderType } from '@services/types/renedrer'

interface ICapturerSettings {
	type?: TRenderType
	quality?: number
}

/**
 *
 * @category Services.Renderer
 * @class Capturer
 */
class Capturer {
	encoder: 'jpeg' | 'png'
	type: TRenderType
	extension: '.jpg' | '.png'
	quality: number
	chunks: Array<Uint8Array>
	started: boolean
	promises: Array<Promise<number>>

	constructor(settings: ICapturerSettings = {}) {
		this.type = settings.type || 'image/jpeg'
		this.encoder = this.type === 'image/png' ? 'png' : 'jpeg'
		this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png'
		this.quality = settings && settings.quality ? settings.quality : 1

		this.started = false
		this.promises = []
		this.chunks = []
	}

	setSettings(settings: ICapturerSettings): void {
		this.type = settings.type || 'image/jpeg'
		this.encoder = this.type === 'image/png' ? 'png' : 'jpeg'
		this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png'
		this.quality = settings && settings.quality ? settings.quality : 1
	}

	start(total_frames: number): void {
		this.chunks = new Array(total_frames)
		this.promises = new Array(total_frames)
		this.started = true
	}

	stop(): void {
		this.chunks = []
		this.promises = []
		this.started = false
	}

	capture(canvas: HTMLCanvasElement | OffscreenCanvas, framenumber: number): Promise<number> {
		if (this.started) {
			const type = this.type
			const quality = this.quality
			const chunks = this.chunks

			const promise = new Promise<number>((resolve, reject) => {
				Capturer.render(canvas, type, quality)
					.then(blob => {
						chunks[framenumber] = blob
						resolve(framenumber)
					})
					.catch(e => reject([framenumber, e]))
			})

			this.promises[framenumber] = promise
			return promise
		}

		return Promise.reject()
	}

	save(): Promise<Array<Uint8Array>> {
		if (this.started) {
			return new Promise((resolve, reject) => {
				Promise.all(this.promises).then(
					() => {
						resolve(this.chunks)
					},
					reason => {
						reject(reason)
					}
				)
			})
		}

		return Promise.reject('not started')
	}

	static getRenderTime(
		canvas: HTMLCanvasElement | OffscreenCanvas,
		type: TRenderImageType,
		quality: number
	): Promise<number> {
		const startTime = performance.now()
		return Capturer.render(canvas, type, quality).then(() => performance.now() - startTime)
	}

	static getBlob(canvas: HTMLCanvasElement | OffscreenCanvas, type: TRenderType, quality: number): Promise<Blob> {
		return new Promise((resolve, reject) => {
			if (canvas instanceof OffscreenCanvas) return canvas.convertToBlob({ type, quality }).then(resolve).catch(reject)
			else if (canvas instanceof HTMLCanvasElement)
				return canvas.toBlob(blob => (blob ? resolve(blob) : reject()), type, quality)
		})
	}

	static render(canvas: HTMLCanvasElement | OffscreenCanvas, type: TRenderType, quality: number): Promise<Uint8Array> {
		return new Promise((resolve, reject) => {
			const blobPromise = Capturer.getBlob(canvas, type, quality)

			blobPromise
				.then(blob => {
					const fileReader = new FileReader()
					fileReader.addEventListener(
						'load',
						() => {
							fileReader.result && fileReader.result instanceof ArrayBuffer
								? resolve(new Uint8Array(fileReader.result as ArrayBuffer))
								: reject()
						},
						{ passive: true }
					)
					fileReader.readAsArrayBuffer(blob)
				})
				.catch(e => reject(e))
		})
	}
}

export default Capturer
