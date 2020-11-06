import Emitter from "../events/Emitter";
import { ISequenceMeta, ITimelineEvents } from "../types/timeline";
/**
 * Is used for sequence time management.
 * It is necessary to set the duration and the number of frames per second (frame rate).
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
declare class Timeline extends Emitter<ITimelineEvents> {
    /**
     * Animation status started
     */
    static readonly START = "start";
    /**
     * Animation status paused
     */
    static readonly PAUSE = "pause";
    /**
     * Animation status stop
     */
    static readonly STOP = "stop";
    private readonly fps_samples_size;
    private fps_samples;
    private fps_samples_index;
    private fps;
    private current_frame;
    private current_time;
    private paused_time;
    private start_time;
    private tick_time;
    private last_tick;
    private b_sequence_started;
    private sequence;
    constructor(durate?: number, framerate?: number);
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     */
    getSequence(): ISequenceMeta;
    /**
     * Set Sequence
     *
     * @param {number} durate
     * @param {number} framerate
     */
    setSequence(durate: number, framerate: number): void;
    /**
     * Set durate of timeline
     *
     * @param {number} framerate
     */
    setDurate(durate: number): void;
    /**
     * Get timeline duration
     *
     * @returns {number}
     */
    getDurate(): number;
    /**
     * Return framerate
     *
     * @returns {number}
     */
    getFramerate(): number;
    /**
     * Set a framerate
     *
     * @param {number} framerate
     */
    setFramerate(framerate: number): void;
    /**
     * Get number of frames based on duration and framerate
     *
     * @returns {number}
     */
    getFramesCount(): number;
    bSequenceStarted(): boolean;
    /**
     * Start the sequence
     *
     */
    start(): void;
    /**
     * Pause the sequence
     *
     */
    pause(): void;
    /**
     * Stop the sequence and reset
     *
     */
    stop(): void;
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     */
    tick(timestamp: number): boolean;
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     */
    private calculateFPS;
    /**
     * Return current animation frame
     *
     * @returns {number}
     */
    getCurrentFrame(): number;
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     */
    getFrameTime(frame: number): number;
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     */
    getFrameAtTime(time: number): number;
    /**
     * set current frame
     *
     * @param {number} frame
     */
    setFrame(frame: number): void;
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     */
    getTickTime(): number;
    /**
     * Return the current time
     *
     * @returns {number}
     */
    getTime(): number;
    /**
     * Set animation at time
     *
     * @param {number} time
     */
    setTime(time: number): void;
}
export default Timeline;
//# sourceMappingURL=Timeline.d.ts.map