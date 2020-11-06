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
 * Is used for sequence time management.
 * It is necessary to set the duration and the number of frames per second (frame rate).
 *
 * @category Services.Timeline
 * @class Timeline
 * @extends {Emitter<ITimelineEvents>}
 */
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline(durate, framerate) {
        if (durate === void 0) { durate = 60000; }
        if (framerate === void 0) { framerate = 60; }
        var _this = _super.call(this) || this;
        _this.fps_samples_size = 30;
        _this.fps_samples = [];
        _this.fps_samples_index = 0;
        _this.sequence = {
            durate: durate,
            framerate: framerate,
            frames: Math.round((durate / 1000) * framerate),
        };
        _this.tick_time = 1000 / _this.sequence.framerate;
        _this.fps = _this.sequence.framerate;
        _this.b_sequence_started = false;
        _this.current_frame = 0;
        _this.current_time = 0;
        _this.last_tick = 0;
        _this.start_time = 0;
        return _this;
    }
    //#region sequence meta
    /**
     * Return the sequence
     *
     * @returns {Sequence}
     */
    Timeline.prototype.getSequence = function () {
        return __assign({}, this.sequence);
    };
    /**
     * Set Sequence
     *
     * @param {number} durate
     * @param {number} framerate
     */
    Timeline.prototype.setSequence = function (durate, framerate) {
        this.sequence.durate = durate;
        this.sequence.framerate = framerate;
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.round((this.sequence.durate / 1000) * this.sequence.framerate);
        this.dispatch('timeline:update_sequence', this.getSequence());
    };
    /**
     * Set durate of timeline
     *
     * @param {number} framerate
     */
    Timeline.prototype.setDurate = function (durate) {
        this.setSequence(durate, this.sequence.framerate);
    };
    /**
     * Get timeline duration
     *
     * @returns {number}
     */
    Timeline.prototype.getDurate = function () {
        return this.sequence.durate;
    };
    /**
     * Return framerate
     *
     * @returns {number}
     */
    Timeline.prototype.getFramerate = function () {
        return this.sequence.framerate;
    };
    /**
     * Set a framerate
     *
     * @param {number} framerate
     */
    Timeline.prototype.setFramerate = function (framerate) {
        this.setSequence(this.sequence.durate, framerate);
    };
    /**
     * Get number of frames based on duration and framerate
     *
     * @returns {number}
     */
    Timeline.prototype.getFramesCount = function () {
        return this.sequence.frames;
    };
    //#endregion meta
    //#region change status
    Timeline.prototype.bSequenceStarted = function () {
        return this.b_sequence_started;
    };
    /**
     * Start the sequence
     *
     */
    Timeline.prototype.start = function () {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            this.start_time = this.paused_time;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    };
    /**
     * Pause the sequence
     *
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
     */
    Timeline.prototype.stop = function () {
        if (this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_time = 0;
            this.current_frame = 0;
            this.start_time = 0;
            this.paused_time = 0;
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    };
    /**
     * Animation tick
     *
     * @param {number} timestamp current timestamp
     * @returns {boolean}
     */
    Timeline.prototype.tick = function (timestamp) {
        if (this.b_sequence_started) {
            if (!this.start_time) {
                this.start_time = timestamp;
                this.last_tick = -this.tick_time;
            }
            var currentTime = timestamp - this.start_time;
            var elapsed = currentTime - this.last_tick;
            if (elapsed >= this.tick_time) {
                this.calculateFPS(1 / (elapsed / 1000));
                this.last_tick = currentTime;
                this.current_time = (currentTime - (elapsed % this.tick_time)) % this.sequence.durate;
                this.current_frame = this.getFrameAtTime(this.current_time);
                this.dispatch('timeline:progress', {
                    current_frame: this.current_frame,
                    current_time: this.current_time,
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
    //#region Frame and Time
    /**
     * Return current animation frame
     *
     * @returns {number}
     */
    Timeline.prototype.getCurrentFrame = function () {
        return this.current_frame;
    };
    /**
     * get the time at specific frame number
     *
     * @param {number} frame
     * @returns {number}
     */
    Timeline.prototype.getFrameTime = function (frame) {
        frame = frame < 0 ? this.sequence.frames - (Math.abs(frame) % this.sequence.frames) : frame % this.sequence.frames;
        return (frame * this.tick_time) % this.sequence.durate;
    };
    /**
     * Return frame number at time
     *
     * @param {number} time
     * @returns {number}
     */
    Timeline.prototype.getFrameAtTime = function (time) {
        return Math.round((time % this.sequence.durate) / this.tick_time);
    };
    /**
     * set current frame
     *
     * @param {number} frame
     */
    Timeline.prototype.setFrame = function (frame) {
        this.current_frame = frame;
        this.current_time = this.getFrameTime(frame);
    };
    /**
     * Return tick time (based on framerate)
     *
     * @returns {number}
     */
    Timeline.prototype.getTickTime = function () {
        return this.tick_time;
    };
    /**
     * Return the current time
     *
     * @returns {number}
     */
    Timeline.prototype.getTime = function () {
        return this.current_time;
    };
    /**
     * Set animation at time
     *
     * @param {number} time
     */
    Timeline.prototype.setTime = function (time) {
        time = (time + this.sequence.durate) % this.sequence.durate;
        this.current_time = time;
        this.current_frame = this.getFrameAtTime(time);
    };
    /**
     * Animation status started
     */
    Timeline.START = 'start';
    /**
     * Animation status paused
     */
    Timeline.PAUSE = 'pause';
    /**
     * Animation status stop
     */
    Timeline.STOP = 'stop';
    return Timeline;
}(Emitter));
export default Timeline;
//# sourceMappingURL=Timeline.js.map