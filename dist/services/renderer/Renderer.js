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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var Renderer = /** @class */ (function (_super) {
    __extends(Renderer, _super);
    function Renderer() {
        var _this = _super.call(this) || this;
        _this.capturer = new Capturer();
        return _this;
    }
    Renderer.prototype.renderImage = function (drawer, settings) {
        var _this = this;
        this.started = true;
        this.capturer.setSettings(settings);
        this.capturer.stop();
        this.capturer.start(1);
        var promise = new Promise(function (resolve, reject) {
            var bClearCanvas = drawer.getOption('clearCanvas', true);
            var timeline = drawer.getTimeline();
            var sequence = timeline.getSequence();
            if (!bClearCanvas) {
                var needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time);
                for (var i = 0; i <= needFrame; i++) {
                    timeline.setFrame(i);
                    drawer.draw();
                }
            }
            else {
                drawer.draw();
            }
            _this.capturer.capture(drawer.getCanvas(), 0);
            _this.capturer
                .save()
                .then(function (chunks) {
                resolve(chunks[0]);
                _this.started = false;
            })
                .catch(reject);
        });
        this.renderPromise = cancelablePromise(promise);
        return promise;
    };
    Renderer.prototype.prepareRenderAnimation = function (drawer, settings) {
        return __awaiter(this, void 0, void 0, function () {
            var startTimeDrawTime, drawTime, sequence, time, renderTime, totalTime, maxDuration, parts, frameForPart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTimeDrawTime = now();
                        drawer.setOption('time', 0);
                        drawer.draw();
                        drawTime = now() - startTimeDrawTime;
                        sequence = drawer.getTimeline().getSequence();
                        return [4 /*yield*/, Capturer.getRenderTime(drawer.getCanvas(), settings.type, settings.quality)];
                    case 1:
                        time = _a.sent();
                        renderTime = time + drawTime;
                        totalTime = renderTime * sequence.frames;
                        maxDuration = 60;
                        parts = 1 + Math.floor(totalTime / 1000 / maxDuration);
                        frameForPart = Math.floor(sequence.frames / parts);
                        return [2 /*return*/, {
                                estimated_time: totalTime,
                                total_frames: sequence.frames,
                                total_parts: parts,
                                forPart: frameForPart,
                            }];
                }
            });
        });
    };
    Renderer.prototype.stop = function () {
        this.started = false;
        this.renderPromise && this.renderPromise.cancel();
        this.capturer.stop();
    };
    Renderer.prototype.renderAnimation = function (drawer, settings) {
        var _this = this;
        this.stop();
        this.started = true;
        var sequence = drawer.getTimeline().getSequence();
        var promise = new Promise(function (resolve, reject) {
            _this.prepareRenderAnimation(drawer, settings).then(function (startMeta) { return __awaiter(_this, void 0, void 0, function () {
                var zipParts, i, zipPart, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.dispatch('renderer:start', startMeta);
                            zipParts = [];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < startMeta.total_parts)) return [3 /*break*/, 8];
                            if (!this.started) return [3 /*break*/, 6];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.renderAnimationPart(drawer, settings, i * startMeta.forPart, startMeta.forPart, i, sequence.frames, startMeta.total_parts)];
                        case 3:
                            zipPart = _a.sent();
                            if (zipPart)
                                zipParts.push(zipPart);
                            else
                                reject();
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            reject(e_1);
                            return [3 /*break*/, 5];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            reject();
                            _a.label = 7;
                        case 7:
                            i++;
                            return [3 /*break*/, 1];
                        case 8:
                            resolve(zipParts);
                            this.started = false;
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        this.renderPromise = cancelablePromise(promise);
        return promise;
    };
    Renderer.prototype.renderAnimationPart = function (drawer, settings, frame_from, frame_count, part, total_frames, total_parts) {
        return __awaiter(this, void 0, void 0, function () {
            var timeline, sequence, tick_time, lastRenderTime, i, current_frame, measure_start, measure_end, chunks, zip, i, len, frame_number, frameName, j, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.capturer.setSettings(settings);
                        this.capturer.stop();
                        this.capturer.start(frame_count);
                        timeline = drawer.getTimeline();
                        sequence = timeline.getSequence();
                        tick_time = timeline.getTickTime();
                        lastRenderTime = 0;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < frame_count)) return [3 /*break*/, 4];
                        if (!this.started)
                            return [2 /*return*/, undefined];
                        current_frame = i + frame_from;
                        measure_start = now();
                        timeline.setTime((sequence.start + current_frame * tick_time) % sequence.end);
                        drawer.draw();
                        return [4 /*yield*/, this.capturer.capture(drawer.getCanvas(), i)];
                    case 2:
                        _a.sent();
                        measure_end = now();
                        lastRenderTime = measure_end - measure_start;
                        this.dispatch('renderer:render-frame', {
                            frame: current_frame,
                            part: part,
                            forPart: frame_count,
                            total_frames: total_frames,
                            total_parts: total_parts,
                            render_time: lastRenderTime,
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.capturer.save()];
                    case 5:
                        chunks = _a.sent();
                        if (!this.started) return [3 /*break*/, 7];
                        zip = new JSZip();
                        for (i = 0, len = chunks.length; i < len; i++) {
                            frame_number = (i + frame_from).toString();
                            frameName = '';
                            for (j = frame_number.length; j <= 4; j++)
                                frameName += '0';
                            frameName += frame_number;
                            zip.file(frameName + this.capturer.extension, chunks[i]);
                        }
                        return [4 /*yield*/, zip.generateAsync({ type: 'blob' })];
                    case 6:
                        result = _a.sent();
                        if (!this.started)
                            return [2 /*return*/, undefined];
                        this.capturer.stop();
                        return [2 /*return*/, result];
                    case 7: return [2 /*return*/, undefined];
                }
            });
        });
    };
    return Renderer;
}(Emitter));
export default Renderer;
//# sourceMappingURL=Renderer.js.map