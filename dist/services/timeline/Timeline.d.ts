import Emitter from "../events/Emitter";
import { ISequenceMeta, ITimelineEvents } from "../types/timeline";
/**
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
declare class Timeline extends Emitter<ITimelineEvents> {
    static START: string;
    static PAUSE: string;
    static STOP: string;
    private fps_samples_size;
    private fps_samples;
    private fps_samples_index;
    private fps;
    private current_frame;
    private last_tick;
    private paused_time;
    private start_time;
    private tick_time;
    private accumulator;
    private b_sequence_started;
    private sequence;
    /**
     * Class used for time and rendering managment
     *
     * @memberof Timeline
     */
    constructor();
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     * @memberof Timeline
     */
    getSequence(): ISequenceMeta;
    /**
     * Set sequence
     *
     * @param {number} start
     * @param {number} end
     * @param {number} framerate
     * @memberof Timeline
     */
    setSequence(start: number, end: number, framerate: number): void;
    /**
     * Return framerate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramerate(): number;
    /**
     * Set a framerate of animation
     *
     * @param {number} framerate
     * @memberof Timeline
     */
    setFramerate(framerate: number): void;
    /**
     * Set the number of frames based on the sequence
     *
     * @private
     * @memberof Timeline
     */
    private calculateTickAndSequence;
    /**
     * Get animation start time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceStartTime(): number;
    /**
     * Set animation start time
     *
     * @param {number} start_time
     * @memberof Timeline
     */
    setSequenceStartTime(start_time: number): void;
    /**
     * Get a aniamtion end time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceEndTime(): number;
    /**
     * Set animation end time
     *
     * @param {number} end_time
     * @memberof Timeline
     */
    setSequenceEndTime(end_time: number): void;
    /**
     * Get animation durate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceDuration(): number;
    /**
     * Get number of frames of animation
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramesCount(): number;
    /**
     * Start the sequence
     *
     * @memberof Timeline
     */
    start(): void;
    /**
     * Pause the sequence
     *
     * @memberof Timeline
     */
    pause(): void;
    /**
     * Stop the sequence and reset
     *
     * @memberof Timeline
     */
    stop(): void;
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     * @memberof Timeline
     */
    tick(timestamp: number): boolean;
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     * @memberof Timeline
     */
    private calculateFPS;
    bSequenceStarted(): boolean;
    /**
     * Return current animation frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getCurrentFrame(): number;
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     * @memberof Timeline
     */
    getFrameTime(frame: number): number;
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     * @memberof Timeline
     */
    getFrameAtTime(time: number): number;
    /**
     * set current frame
     *
     * @param {number} frame
     * @memberof Timeline
     */
    setFrame(frame: number): void;
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTickTime(): number;
    /**
     * Return the current time based on current frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTime(): number;
    /**
     * Set animation at time
     *
     * @param {number} time
     * @memberof Timeline
     */
    setTime(time: number): void;
}
export default Timeline;
//# sourceMappingURL=Timeline.d.ts.map