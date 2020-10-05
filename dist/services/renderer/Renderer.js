var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as JSZip from 'jszip';
import { cancelablePromise, now, ICancelablePromise } from "../../Utilites";
import Emitter from "../events/Emitter";
import Capturer from "./Capturer";
/**
 *
 * @category Services.Renderer
 * @class Renderer
 * @extends {Emitter<IRenderEvents>}
 */
class Renderer extends Emitter {
    constructor() {
        super();
        this.capturer = new Capturer();
    }
    renderImage(drawer, settings) {
        this.started = true;
        console.log('settings', settings);
        this.capturer.setSettings(settings);
        this.capturer.stop();
        this.capturer.start(1);
        const promise = new Promise((resolve, reject) => {
            const bClearCanvas = drawer.getOption('clearCanvas', true);
            const timeline = drawer.getTimeline();
            const sequence = timeline.getSequence();
            if (!bClearCanvas) {
                const needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time);
                for (let i = 0; i <= needFrame; i++) {
                    timeline.setFrame(i);
                    drawer.draw();
                }
            }
            else {
                drawer.draw();
            }
            this.capturer.capture(drawer.getCanvas(), 0);
            this.capturer
                .save()
                .then(chunks => {
                resolve(chunks[0]);
                this.started = false;
            })
                .catch(reject);
        });
        this.renderPromise = cancelablePromise(promise);
        return promise;
    }
    prepareRenderAnimation(drawer, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTimeDrawTime = now();
            drawer.setOption('time', 0);
            drawer.draw();
            const drawTime = now() - startTimeDrawTime;
            const sequence = drawer.getTimeline().getSequence();
            const time = yield Capturer.getRenderTime(drawer.getCanvas(), settings.type, settings.quality);
            const renderTime = time + drawTime;
            const totalTime = renderTime * sequence.frames;
            const maxDuration = 60;
            const parts = 1 + Math.floor(totalTime / 1000 / maxDuration);
            const frameForPart = Math.floor(sequence.frames / parts);
            return {
                estimated_time: totalTime,
                total_frames: sequence.frames,
                total_parts: parts,
                forPart: frameForPart,
            };
        });
    }
    stop() {
        this.started = false;
        this.renderPromise && this.renderPromise.cancel();
        this.capturer.stop();
    }
    renderAnimation(drawer, settings) {
        this.stop();
        this.started = true;
        const sequence = drawer.getTimeline().getSequence();
        const promise = new Promise((resolve, reject) => {
            this.prepareRenderAnimation(drawer, settings).then((startMeta) => __awaiter(this, void 0, void 0, function* () {
                this.dispatch('renderer:start', startMeta);
                /**
                 * start rendering
                 */
                const zipParts = [];
                for (let i = 0; i < startMeta.total_parts; i++) {
                    if (this.started) {
                        try {
                            const zipPart = yield this.renderAnimationPart(drawer, settings, i * startMeta.forPart, startMeta.forPart, i, sequence.frames, startMeta.total_parts);
                            if (zipPart)
                                zipParts.push(zipPart);
                            else
                                reject();
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                    else {
                        reject();
                    }
                }
                resolve(zipParts);
                this.started = false;
            }));
        });
        this.renderPromise = cancelablePromise(promise);
        return promise;
    }
    renderAnimationPart(drawer, settings, frame_from, frame_count, part, total_frames, total_parts) {
        return __awaiter(this, void 0, void 0, function* () {
            this.capturer.setSettings(settings);
            this.capturer.stop();
            this.capturer.start(frame_count);
            const timeline = drawer.getTimeline();
            const sequence = timeline.getSequence();
            const tick_time = timeline.getTickTime();
            let lastRenderTime = 0;
            for (let i = 0; i < frame_count; i++) {
                if (!this.started)
                    return undefined;
                const current_frame = i + frame_from;
                const measure_start = now();
                timeline.setTime((sequence.start + current_frame * tick_time) % sequence.end);
                drawer.draw();
                yield this.capturer.capture(drawer.getCanvas(), i);
                const measure_end = now();
                lastRenderTime = measure_end - measure_start;
                this.dispatch('renderer:render-frame', {
                    frame: current_frame,
                    part: part,
                    forPart: frame_count,
                    total_frames: total_frames,
                    total_parts: total_parts,
                    render_time: lastRenderTime,
                });
            }
            const chunks = yield this.capturer.save();
            if (this.started) {
                const zip = new JSZip();
                for (let i = 0, len = chunks.length; i < len; i++) {
                    const frame_number = (i + frame_from).toString();
                    let frameName = '';
                    for (let j = frame_number.length; j <= 4; j++)
                        frameName += '0';
                    frameName += frame_number;
                    zip.file(frameName + this.capturer.extension, chunks[i]);
                }
                const result = yield zip.generateAsync({ type: 'blob' });
                if (!this.started)
                    return undefined;
                this.capturer.stop();
                return result;
            }
            else {
                return undefined;
            }
        });
    }
}
export default Renderer;
//# sourceMappingURL=Renderer.js.map