import Emitter from "../events/Emitter";
class Timeline extends Emitter {
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
        this.last_tick = 0;
        this.calculateTickAndSequence();
    }
    getSequence() {
        return Object.assign({}, this.sequence);
    }
    setSequence(start, end, framerate) {
        this.sequence.start = start;
        this.sequence.end = end;
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    getFramerate() {
        return this.sequence.framerate;
    }
    setFramerate(framerate) {
        this.sequence.framerate = framerate;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    calculateTickAndSequence() {
        this.tick_time = 1000 / this.sequence.framerate;
        this.sequence.frames = Math.floor(((this.sequence.end - this.sequence.start) / 1000) * this.sequence.framerate);
        this.sequence.durate = this.sequence.end - this.sequence.start;
    }
    getSequenceStartTime() {
        return this.sequence.start;
    }
    setSequenceStartTime(start_time) {
        this.sequence.start = start_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    getSequenceEndTime() {
        return this.sequence.end;
    }
    setSequenceEndTime(end_time) {
        this.sequence.end = end_time;
        this.calculateTickAndSequence();
        this.dispatch('timeline:update_sequence', this.getSequence());
    }
    getSequenceDuration() {
        return this.sequence.end - this.sequence.start;
    }
    getFramesCount() {
        return this.sequence.frames;
    }
    start() {
        if (!this.b_sequence_started) {
            this.b_sequence_started = true;
            this.last_tick = 0;
            this.dispatch('timeline:change_status', Timeline.START);
        }
    }
    pause() {
        if (this.b_sequence_started) {
            this.b_sequence_started = false;
            this.dispatch('timeline:change_status', Timeline.PAUSE);
        }
    }
    stop() {
        if (this.current_frame != 1 || this.b_sequence_started) {
            this.b_sequence_started = false;
            this.current_frame = -1;
            this.last_tick = 0;
            this.dispatch('timeline:progress', {
                current_frame: this.current_frame,
                current_time: 0,
                fps: this.fps,
            });
            this.dispatch('timeline:change_status', Timeline.STOP);
        }
    }
    tick(timestamp) {
        if (this.b_sequence_started) {
            const currentTime = timestamp;
            const elapsed = currentTime - this.last_tick;
            if (elapsed >= this.tick_time) {
                const delta = (currentTime - this.last_tick) / 1000;
                this.calculateFPS(1 / delta);
                this.last_tick = currentTime - (elapsed % this.tick_time);
                this.current_frame = (this.current_frame + 1) % this.sequence.frames;
                this.dispatch('timeline:progress', {
                    current_frame: this.current_frame,
                    current_time: this.getTime(),
                    fps: this.fps,
                });
                return true;
            }
        }
        return false;
    }
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
    bSequenceStarted() {
        return this.b_sequence_started;
    }
    getCurrentFrame() {
        return this.current_frame;
    }
    getFrameTime(frame) {
        frame = frame < 0 ? this.sequence.frames - (frame % this.sequence.frames) : frame % this.sequence.frames;
        return (this.sequence.start + frame * this.tick_time) % this.sequence.end;
    }
    getFrameAtTime(time) {
        return Math.round(((this.sequence.start + time) % this.sequence.end) / this.tick_time);
    }
    setFrame(frame) {
        this.current_frame = frame - 1;
    }
    getTickTime() {
        return this.tick_time;
    }
    getTime() {
        return ((this.sequence.start + (this.current_frame <= 0 ? 0 : this.current_frame) * this.tick_time) % this.sequence.end);
    }
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