var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Emitter from "../events/Emitter";
import { now } from "../../Utilites";
/**
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    /**
     * Class used for time and rendering managment
     *
     * @memberof Timeline
     */
    function Timeline() {
        var _this = _super.call(this) || this;
        _this.sequence = {
            start: 0,
            end: 60000,
            durate: 60000,
            framerate: 60,
            frames: ((6000 - 0) / 1000) * 60,
        };
        _this.fps = _this.sequence.framerate;
        _this.fps_samples_size = 30;
        _this.fps_samples = [];
        _this.fps_samples_index = 0;
        _this.b_sequence_started = false;
        _this.current_frame = -1;
        // this.paused_time = 0
        _this.start_time = 0;
        _this.last_tick = 0;
        _this.accumulator = 0;
        _this.calculateTickAndSequence();
        return _this;
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     * @memberof Timeline
     */
    Timeline.prototype.getSequence = function () {
        return __assign({}, this.sequence);
    };
    /**
     * Set sequence
     *
     * @param {number} start
     * @param {number} end
     * @param {number} framerate
     * @memberof Timeline
     */
    Timeline.prototype.setSequence = function (start, end, framerate) {
        this.sequence.start = start;
        this.sequence.end = end;
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Return framerate
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getFramerate = function () {
        return this.sequence.framerate;
    };
    /**
     * Set a framerate of animation
     *
     * @param {number} framerate
     * @memberof Timeline
     */
    Timeline.prototype.setFramerate = function (framerate) {
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Set the number of frames based on the sequence
     *
     * @private
     * @memberof Timeline
     */
    Timeline.prototype.calculateTickAndSequence = function () {
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.floor(((this.sequence.end - this.sequence.start) / 1000) * this.sequence.framerate);
        this.sequence.durate = this.sequence.end - this.sequence.start;
    };
    /**
     * Get animation start time
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getSequenceStartTime = function () {
        return this.sequence.start;
    };
    /**
     * Set animation start time
     *
     * @param {number} start_time
     * @memberof Timeline
     */
    Timeline.prototype.setSequenceStartTime = function (start_time) {
        this.sequence.start = start_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Get a aniamtion end time
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getSequenceEndTime = function () {
        return this.sequence.end;
    };
    /**
     * Set animation end time
     *
     * @param {number} end_time
     * @memberof Timeline
     */
    Timeline.prototype.setSequenceEndTime = function (end_time) {
        this.sequence.end = end_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Get animation durate
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getSequenceDuration = function () {
        return this.sequence.end - this.sequence.start;
    };
    /**
     * Get number of frames of animation
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getFramesCount = function () {
        return this.sequence.frames;
    };
    //#endregion meta
    //#region change status
    /**
     * Start the sequence
     *
     * @memberof Timeline
     */
    Timeline.prototype.start = function () {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            // this.last_tick = now() - this.paused_time
            this.start_time = this.paused_time;
            this.last_tick = 0;
            this.accumulator = 0;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    };
    /**
     * Pause the sequence
     *
     * @memberof Timeline
     */
    Timeline.prototype.pause = function () {
        if (this.b_sequence_started) {
            this.paused_time = now();
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    };
    /**
     * Stop the sequence and reset
     *
     * @memberof Timeline
     */
    Timeline.prototype.stop = function () {
        if (this.current_frame != 1 || this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_frame = -1;
            this.start_time = 0;
            this.paused_time = 0;
            this.dispatch('timeline:progress', {
                current_frame: this.current_frame,
                current_time: 0,
                fps: this.fps,
            });
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    };
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     * @memberof Timeline
     */
    Timeline.prototype.tick = function (timestamp) {
        if (this.b_sequence_started) {
            if (!this.start_time) {
                this.start_time = timestamp;
                this.accumulator = this.tick_time;
            }
            var currentTime = timestamp - this.start_time;
            var elapsed = currentTime - this.last_tick;
            this.accumulator += elapsed;
            // if (elapsed >= this.tick_time) {
            if (this.accumulator >= this.tick_time) {
                var delta = (currentTime - this.last_tick) / 1000;
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
    };
    /**
     * Calculate fps
     *
     * @private
     * @param {number} currentFPS
     * @memberof Timeline
     */
    Timeline.prototype.calculateFPS = function (currentFPS) {
        var samples = this.fps_samples.length;
        if (samples > 0) {
            var average = 0;
            for (var i = 0; i < samples; i++)
                average += this.fps_samples[i];
            this.fps = Math.round(average / samples);
        }
        this.fps_samples[this.fps_samples_index] = Math.round(currentFPS);
        this.fps_samples_index = (this.fps_samples_index + 1) % this.fps_samples_size;
    };
    //#endregion
    //#region animation meta
    Timeline.prototype.bSequenceStarted = function () {
        return this.b_sequence_started;
    };
    /**
     * Return current animation frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getCurrentFrame = function () {
        return this.current_frame;
    };
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getFrameTime = function (frame) {
        frame = frame < 0 ? this.sequence.frames - (frame % this.sequence.frames) : frame % this.sequence.frames;
        return (this.sequence.start + frame * this.tick_time) % this.sequence.end;
    };
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getFrameAtTime = function (time) {
        return Math.round(((this.sequence.start + time) % this.sequence.end) / this.tick_time);
    };
    /**
     * set current frame
     *
     * @param {number} frame
     * @memberof Timeline
     */
    Timeline.prototype.setFrame = function (frame) {
        this.current_frame = frame - 1;
    };
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getTickTime = function () {
        return this.tick_time;
    };
    /**
     * Return the current time based on current frame
     *
     * @returns {number}
     * @memberof Timeline
     */
    Timeline.prototype.getTime = function () {
        return ((this.sequence.start + (this.current_frame <= 0 ? 0 : this.current_frame) * this.tick_time) % this.sequence.end);
    };
    /**
     * Set animation at time
     *
     * @param {number} time
     * @memberof Timeline
     */
    Timeline.prototype.setTime = function (time) {
        time = time <= this.sequence.start ? this.sequence.start : time >= this.sequence.end ? this.sequence.end : time;
        this.current_frame = Math.floor(time / this.tick_time) - 1;
        this.dispatch('timeline:progress', {
            current_frame: this.current_frame,
            current_time: time,
            fps: this.fps,
        });
    };
    Timeline.START = 'start';
    Timeline.PAUSE = 'pause';
    Timeline.STOP = 'stop';
    return Timeline;
}(Emitter));
export default Timeline;
//# sourceMappingURL=Timeline.js.map