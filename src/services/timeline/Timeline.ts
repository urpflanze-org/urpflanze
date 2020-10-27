import Emitter from '@services/events/Emitter'
import { ISequenceMeta, ITimelineEvents } from '@services/types/timeline'
import { now } from 'src/Utilites'

/**
 * Is used for sequence time management.
 * It is necessary to set the duration and the number of frames per second (frame rate).
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
class Timeline extends Emitter<ITimelineEvents> {
	/**
	 * Animation status started
	 */
	public static readonly START = 'start'

	/**
	 * Animation status paused
	 */
	public static readonly PAUSE = 'pause'

	/**
	 * Animation status stop
	 */
	public static readonly STOP = 'stop'

	private readonly fps_samples_size: number = 30
	private fps_samples: Array<number> = []
	private fps_samples_index = 0
	private fps: number

	private current_frame: number
	private current_time: number

	private paused_time: number
	private start_time: number
	private tick_time: number
	private last_tick: number

	private b_sequence_started: boolean

	private sequence: ISequenceMeta

	constructor(durate = 60000, framerate = 60) {
		super()

		this.sequence = {
			durate,
			framerate,
			frames: Math.round((durate / 1000) * framerate),
		}

		this.tick_time = 1000 / this.sequence.framerate
		this.fps = this.sequence.framerate

		this.b_sequence_started = false

		this.current_frame = 0
		this.current_time = 0

		this.last_tick = 0
		this.start_time = 0
	}

	//#region sequence meta

	/**
	 * Return the sequence
	 *
	 * @returns {Sequence}
	 */
	public getSequence(): ISequenceMeta {
		return { ...this.sequence }
	}

	/**
	 * Set Sequence
	 *
	 * @param {number} durate
	 * @param {number} framerate
	 */
	public setSequence(durate: number, framerate: number) {
		this.sequence.durate = durate
		this.sequence.framerate = framerate

		this.tick_time = 1000 / this.sequence.framerate
		this.sequence.frames = Math.round((this.sequence.durate / 1000) * this.sequence.framerate)

		this.dispatch('timeline:update_sequence', this.getSequence())
	}

	/**
	 * Set durate of timeline
	 *
	 * @param {number} framerate
	 */
	public setDurate(durate: number) {
		this.setSequence(durate, this.sequence.framerate)
	}

	/**
	 * Get timeline duration
	 *
	 * @returns {number}
	 */
	public getDurate(): number {
		return this.sequence.durate
	}

	/**
	 * Return framerate
	 *
	 * @returns {number}
	 */
	public getFramerate(): number {
		return this.sequence.framerate
	}

	/**
	 * Set a framerate
	 *
	 * @param {number} framerate
	 */
	public setFramerate(framerate: number) {
		this.setSequence(this.sequence.durate, framerate)
	}

	/**
	 * Get number of frames based on duration and framerate
	 *
	 * @returns {number}
	 */
	public getFramesCount(): number {
		return this.sequence.frames
	}

	//#endregion meta

	//#region change status

	public bSequenceStarted(): boolean {
		return this.b_sequence_started
	}

	/**
	 * Start the sequence
	 *
	 */
	public start(): void {
		if (!this.b_sequence_started) {
			this.b_sequence_started = true
			this.start_time = this.paused_time

			this.dispatch('timeline:change_status', Timeline.START)
		}
	}

	/**
	 * Pause the sequence
	 *
	 */
	public pause(): void {
		if (this.b_sequence_started) {
			this.paused_time = now()
			this.b_sequence_started = false

			this.dispatch('timeline:change_status', Timeline.PAUSE)
		}
	}

	/**
	 * Stop the sequence and reset
	 *
	 */
	public stop(): void {
		if (this.b_sequence_started) {
			this.b_sequence_started = false
			this.current_time = 0
			this.current_frame = 0
			this.start_time = 0
			this.paused_time = 0

			this.dispatch('timeline:change_status', Timeline.STOP)
		}
	}

	/**
	 * Animation tick
	 *
	 * @param {number} timestamp current timestamp
	 * @returns {boolean}
	 */
	public tick(timestamp: number): boolean {
		if (this.b_sequence_started) {
			if (!this.start_time) {
				this.start_time = timestamp
				this.last_tick = -this.tick_time
			}

			const currentTime = timestamp - this.start_time
			const elapsed = currentTime - this.last_tick

			if (elapsed >= this.tick_time) {
				this.calculateFPS(1 / (elapsed / 1000))
				this.last_tick = currentTime

				this.current_time = (currentTime - (elapsed % this.tick_time)) % this.sequence.durate
				this.current_frame = this.getFrameAtTime(this.current_time)

				this.dispatch('timeline:progress', {
					current_frame: this.current_frame,
					current_time: this.current_time,
					fps: this.fps,
				})

				return true
			}
		}

		return false
	}

	/**
	 * Calculate fps
	 *
	 * @private
	 * @param {number} currentFPS
	 */
	private calculateFPS(currentFPS: number): void {
		const samples = this.fps_samples.length

		if (samples > 0) {
			let average = 0

			for (let i = 0; i < samples; i++) average += this.fps_samples[i]

			this.fps = Math.round(average / samples)
		}

		this.fps_samples[this.fps_samples_index] = Math.round(currentFPS)
		this.fps_samples_index = (this.fps_samples_index + 1) % this.fps_samples_size
	}

	//#endregion

	//#region Frame and Time

	/**
	 * Return current animation frame
	 *
	 * @returns {number}
	 */
	public getCurrentFrame(): number {
		return this.current_frame
	}

	/**
	 * get the time at specific frame number
	 *
	 * @param {number} frame
	 * @returns {number}
	 */
	public getFrameTime(frame: number): number {
		frame = frame < 0 ? this.sequence.frames - (Math.abs(frame) % this.sequence.frames) : frame % this.sequence.frames
		return (frame * this.tick_time) % this.sequence.durate
	}

	/**
	 * Return frame number at time
	 *
	 * @param {number} time
	 * @returns {number}
	 */
	public getFrameAtTime(time: number): number {
		return Math.round((time % this.sequence.durate) / this.tick_time)
	}

	/**
	 * set current frame
	 *
	 * @param {number} frame
	 */
	public setFrame(frame: number): void {
		this.current_frame = frame
		this.current_time = this.getFrameTime(frame)
	}

	/**
	 * Return tick time (based on framerate)
	 *
	 * @returns {number}
	 */
	public getTickTime(): number {
		return this.tick_time
	}

	/**
	 * Return the current time
	 *
	 * @returns {number}
	 */
	public getTime(): number {
		return this.current_time
	}

	/**
	 * Set animation at time
	 *
	 * @param {number} time
	 */
	public setTime(time: number) {
		time = (time + this.sequence.durate) % this.sequence.durate

		this.current_time = time
		this.current_frame = this.getFrameAtTime(time)
	}

	//#endregion
}

export default Timeline
