import Emitter from '@services/events/Emitter';
class Timeline extends Emitter {
    /**
     * Class used for time and rendering managment
     *
     * @memberof Timeline
     */
    constructor() {
        super();
        this.sequence = {
            start: 0,
            end: 60000,
            durate: 60000,
            framerate: 60,
            frames: ((6000 - 0) / 1000) * 60,
        };
        this.fps = this.sequence.framerate;
        this.fps_samples_size = 30;
        this.fps_samples = [];
        this.fps_samples_index = 0;
        this.b_sequence_started = false;
        this.current_frame = -1;
        // this.paused_time = 0
        this.last_tick = 0;
        this.accumulator = 0;
        this.calculateTickAndSequence();
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     * @memberof Timeline
     */
    getSequence() {
        return Object.assign({}, this.sequence);
    }
    /**
     * Set sequence
     *
     * @param {number} start
     * @param {number} end
     * @param {number} framerate
     * @memberof Timeline
     */
    setSequence(start, end, framerate) {
        this.sequence.start = start;
        this.sequence.end = end;
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Return framerate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramerate() {
        return this.sequence.framerate;
    }
    /**
     * Set a framerate of animation
     *
     * @param {number} framerate
     * @memberof Timeline
     */
    setFramerate(framerate) {
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Set the number of frames based on the sequence
     *
     * @private
     * @memberof Timeline
     */
    calculateTickAndSequence() {
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.floor(((this.sequence.end - this.sequence.start) / 1000) * this.sequence.framerate);
        this.sequence.durate = this.sequence.end - this.sequence.start;
    }
    /**
     * Get animation start time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceStartTime() {
        return this.sequence.start;
    }
    /**
     * Set animation start time
     *
     * @param {number} start_time
     * @memberof Timeline
     */
    setSequenceStartTime(start_time) {
        this.sequence.start = start_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Get a aniamtion end time
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceEndTime() {
        return this.sequence.end;
    }
    /**
     * Set animation end time
     *
     * @param {number} end_time
     * @memberof Timeline
     */
    setSequenceEndTime(end_time) {
        this.sequence.end = end_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    /**
     * Get animation durate
     *
     * @returns {number}
     * @memberof Timeline
     */
    getSequenceDuration() {
        return this.sequence.end - this.sequence.start;
    }
    /**
     * Get number of frames of animation
     *
     * @returns {number}
     * @memberof Timeline
     */
    getFramesCount() {
        return this.sequence.frames;
    }
    //#endregion meta
    //#region change status
    /**
     * Start the sequence
     *
     * @memberof Timeline
     */
    start() {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            // this.last_tick = now() - this.paused_time
            this.last_tick = 0;
            this.accumulator = 0;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    }
    /**
     * Pause the sequence
     *
     * @memberof Timeline
     */
    pause() {
        if (this.b_sequence_started) {
            // this.paused_time = now()
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    }
    /**
     * Stop the sequence and reset
     *
     * @memberof Timeline
     */
    stop() {
        if (this.current_frame != 1 || this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_frame = -1;
            // this.paused_time = 0
            this.dispatch('timeline:progress', {
                current_frame: this.current_frame,
                current_time: 0,
                fps: this.fps,
            });
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    }
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     * @memberof Timeline
     */
    tick(timestamp) {
        if (this.b_sequence_started) {
            const currentTime = timestamp;
            const elapsed = currentTime - this.last_tick;
            this.accumulator += elapsed;
            // if (elapsed >= this.tick_time) {
            if (this.accumulator >= this.tick_time) {
                const delta = (currentTime - this.last_tick) / 1000;
                this.calculateFPS(1 / delta);
                // this.last_tick = currentTime - (elapsed % this.tick_time)
                this.last_tick = currentTime;
                this.current_frame = this.getFrameAtTime(this.last_tick);
                // this.current_frame = (this.current_frame + 1) % this.sequence.frames
                this.accumulator -= this.tick_time;
                this.dispatch('timeline:progress', {
                    current_frame: this.current_frame,
                    current_time: this.last_tick,
                    fps: this.fps,
                });
                return true;
            }
        }
        return false;
    }
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     * @memberof Timeline
     */
    calculateFPS(currentFPS) {
        const samples = this.fps_samples.length;
        if (samples > 0) {
            let average = 0;
            for (let i = 0; i < samples; i++)
                average += this.fps_samples[i];
            this.fps = Math.round(average / samples);
        }
        this.fps_samples[this.fps_samples_index] = Math.round(currentFPS);
        this.fps_samples_index = (this.fps_samples_index + 1) % this.fps_samples_size;
    }
    //#endregion
    //#region animation meta
    bSequenceStarted() {
        return this.b_sequence_started;
    }
    /**
     * Return current animation frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getCurrentFrame() {
        return this.current_frame;
    }
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     * @memberof Timeline
     */
    getFrameTime(frame) {
        frame = frame < 0 ? this.sequence.frames - (frame % this.sequence.frames) : frame % this.sequence.frames;
        return (this.sequence.start + frame * this.tick_time) % this.sequence.end;
    }
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     * @memberof Timeline
     */
    getFrameAtTime(time) {
        return Math.round(((this.sequence.start + time) % this.sequence.end) / this.tick_time);
    }
    /**
     * set current frame
     *
     * @param {number} frame
     * @memberof Timeline
     */
    setFrame(frame) {
        this.current_frame = frame - 1;
    }
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTickTime() {
        return this.tick_time;
    }
    /**
     * Return the current time based on current frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    getTime() {
        return ((this.sequence.start + (this.current_frame <= 0 ? 0 : this.current_frame) * this.tick_time) % this.sequence.end);
    }
    /**
     * Set animation at time
     *
     * @param {number} time
     * @memberof Timeline
     */
    setTime(time) {
        time = time <= this.sequence.start ? this.sequence.start : time >= this.sequence.end ? this.sequence.end : time;
        this.current_frame = Math.floor(time / this.tick_time) - 1;
        this.dispatch('timeline:progress', {
            current_frame: this.current_frame,
            current_time: time,
            fps: this.fps,
        });
    }
}
Timeline.START = 'start';
Timeline.PAUSE = 'pause';
Timeline.STOP = 'stop';
export default Timeline;
//# sourceMappingURL=Timeline.js.map