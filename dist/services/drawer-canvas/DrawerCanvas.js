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
import Scene from "../../core/Scene";
import Timeline from "../timeline/Timeline";
import SceneUtilities from "../scene-utilities/SceneUtilities";
import FrameBuffer from "./FrameBuffer";
import Emitter from "../events/Emitter";
import { now } from "../../Utilites";
import { vec2 } from 'gl-matrix';
/**
 *
 * @category Services
 * @class DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
var DrawerCanvas = /** @class */ (function (_super) {
    __extends(DrawerCanvas, _super);
    function DrawerCanvas(scene, canvasOrContainer, drawOptions, ratio, resolution, bBuffering) {
        if (drawOptions === void 0) { drawOptions = {}; }
        if (ratio === void 0) { ratio = undefined; }
        if (resolution === void 0) { resolution = 0; }
        if (bBuffering === void 0) { bBuffering = false; }
        var _a, _b, _c, _d, _e, _f, _g;
        var _this = _super.call(this) || this;
        _this.bBuffering = false;
        _this.timeline = new Timeline();
        _this.resolution = resolution || (scene && scene.width ? scene.width : 0);
        _this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        _this.bBuffering = bBuffering;
        _this.buffer = new FrameBuffer();
        if (scene) {
            var width = _this.ratio >= 1 ? scene.width : scene.width * _this.ratio;
            var height = _this.ratio >= 1 ? scene.height / _this.ratio : scene.height;
            scene.resize(width, height);
            _this.setScene(scene);
        }
        if ((typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) ||
            (typeof OffscreenCanvas !== 'undefined' && canvasOrContainer instanceof OffscreenCanvas)) {
            var canvas = canvasOrContainer;
            _this.setCanvas(canvas);
        }
        else if (canvasOrContainer) {
            var canvas = document.createElement('canvas');
            var container = canvasOrContainer;
            container.appendChild(canvas);
            _this.setCanvas(canvas);
        }
        _this.drawOptions = {
            scale: (_a = drawOptions.scale) !== null && _a !== void 0 ? _a : 1,
            translate: (_b = drawOptions.translate) !== null && _b !== void 0 ? _b : [0, 0],
            time: (_c = drawOptions.time) !== null && _c !== void 0 ? _c : 0,
            simmetricLine: (_d = drawOptions.simmetricLine) !== null && _d !== void 0 ? _d : 0,
            clearCanvas: (_e = drawOptions.clearCanvas) !== null && _e !== void 0 ? _e : true,
            fixedLineWidth: (_f = drawOptions.fixedLineWidth) !== null && _f !== void 0 ? _f : false,
            noBackground: (_g = drawOptions.noBackground) !== null && _g !== void 0 ? _g : false,
            ghosts: drawOptions.ghosts || 0,
            ghost_skip_time: drawOptions.ghost_skip_time || 0,
            ghost_skip_function: drawOptions.ghost_skip_function,
            backgroundImage: drawOptions.backgroundImage,
        };
        _this.draw_id = null;
        _this.redraw_id = null;
        _this.animation_id = null;
        _this.draw = _this.draw.bind(_this);
        _this.animate = _this.animate.bind(_this);
        _this.startAnimation = _this.startAnimation.bind(_this);
        return _this;
    }
    DrawerCanvas.prototype.setBuffering = function (bBuffering) {
        this.bBuffering = bBuffering;
        this.flushBuffer();
    };
    DrawerCanvas.prototype.getBBuffering = function () {
        return this.bBuffering;
    };
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setScene = function (scene) {
        this.scene = scene;
        if (!this.resolution && this.scene.width)
            this.resolution = this.scene.width;
        if (this.canvas) {
            this.setCanvas(this.canvas); // and flush
        }
    };
    DrawerCanvas.prototype.getScene = function () {
        return this.scene;
    };
    DrawerCanvas.prototype.getTimeline = function () {
        return this.timeline;
    };
    /**
     * Set the canvas or append to container
     *
     * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setCanvas = function (canvasOrContainer) {
        var canvas;
        if (typeof HTMLElement !== 'undefined' && canvasOrContainer instanceof HTMLElement) {
            if (typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) {
                canvas = canvasOrContainer;
            }
            else {
                canvas = (this.canvas || document.createElement('canvas'));
                while (canvasOrContainer.lastChild)
                    canvasOrContainer.removeChild(canvasOrContainer.lastChild);
                canvasOrContainer.appendChild(canvas);
            }
        }
        else {
            canvas = canvasOrContainer;
        }
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d', {
            alpha: true,
            desynchronized: false,
        });
        if (this.scene) {
            this.resize(this.scene.width, this.scene.height); // and flush
        }
    };
    /**
     * Return canvas element
     *
     * @returns {(HTMLCanvasElement | OffscreenCanvas)}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getCanvas = function () {
        return this.canvas;
    };
    /**
     * Return canvas context
     *
     * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getContext = function () {
        return this.context;
    };
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     * @param {number} [resolution]
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.resize = function (width, height, ratio, resolution) {
        var _this = this;
        // const dpi = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1
        var dpi = 1;
        ratio = ratio || this.ratio || width / height;
        var size = Math.max(width, height);
        width = ratio >= 1 ? size : size * ratio;
        height = ratio >= 1 ? size / ratio : size;
        this.ratio = ratio;
        if (this.scene)
            this.scene.resize(width, height);
        if (this.canvas) {
            this.canvas.width = width * dpi;
            this.canvas.height = height * dpi;
            if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
                this.canvas.style.width = width + 'px';
                this.canvas.style.height = height + 'px';
            }
        }
        if (resolution && resolution != this.resolution && this.scene) {
            this.resolution = resolution;
            Scene.walk(function (sceneChild) {
                var props = sceneChild.data.props;
                Object.keys(props).forEach(function (name) {
                    SceneUtilities.setProp(sceneChild, name, props[name], _this);
                });
            }, this.scene);
        }
        this.flushBuffer();
        this.dispatch('drawer-canvas:resize');
    };
    DrawerCanvas.prototype.flushBuffer = function () {
        if (this.bBuffering) {
            this.buffer.flush();
            this.dispatch('drawer-canvas:buffer_flush');
        }
    };
    DrawerCanvas.prototype.getRenderedFrames = function () {
        if (this.bBuffering) {
            return this.buffer.getRenderedFrames();
        }
        return [];
    };
    /**
     * Resize by ratio
     *
     * @param {number} ratio
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.setRatio = function (ratio) {
        this.resize(this.scene.width, this.scene.height, ratio);
    };
    /**
     * Return drawer ratio
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getRatio = function () {
        return this.ratio;
    };
    /**
     * Get resolution
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getResolution = function () {
        return this.resolution;
    };
    /**
     * Get resolution of drawer
     *
     * @param {number} resolution
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.setResolution = function (resolution) {
        this.resize(this.scene.width, this.scene.height, this.ratio, resolution);
    };
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getValueFromResolution = function (value) {
        return (value * this.resolution) / 200;
    };
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getValueFromResolutionScaled = function (value) {
        return (value * 200) / this.resolution;
    };
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | IDrawOptions)} name
     * @param {Required<IDrawOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setOption = function (name, value) {
        if (typeof name == 'object') {
            var keys = Object.keys(name);
            for (var i = 0, len = keys.length; i < len; i++) {
                // @ts-ignore
                this.drawOptions[keys[i]] = name[keys[i]];
            }
        }
        else {
            this.drawOptions[name] = value;
        }
        this.flushBuffer();
    };
    /**
     *
     *
     * @template K
     * @param {K} name
     * @param {IDrawOptions[K]} default_value
     * @returns {IDrawOptions[K]}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getOption = function (name, default_value) {
        var _a;
        return (_a = this.drawOptions[name]) !== null && _a !== void 0 ? _a : default_value;
    };
    /**
     *
     *
     * @returns {DrawOptions}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.getOptions = function () {
        return this.drawOptions;
    };
    /**
     * Internal tick animation
     *
     * @private
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.animate = function (timestamp) {
        if (this.timeline.bSequenceStarted()) {
            this.animation_id = requestAnimationFrame(this.animate);
            if (this.timeline.tick(timestamp))
                this.draw();
        }
    };
    /**
     * Start animation drawing
     *
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.startAnimation = function () {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    };
    /**
     * Stop animation drawing
     *
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.stopAnimation = function () {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Pause animation drawing
     *
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.pauseAnimation = function () {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Play animation drawing
     *
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.playAnimation = function () {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    };
    // public preload(): Promise<boolean> {
    // 	if (this.bBuffering && this.scene) {
    // 		return new Promise<boolean>((resolve, reject) => {
    // 			this.flushBuffer()
    // 			const sequence = this.timeline.getSequence()
    // 			let canvas: HTMLCanvasElement | OffscreenCanvas
    // 			if (typeof OffscreenCanvas !== 'undefined') canvas = new OffscreenCanvas(this.scene.width, this.scene.height)
    // 			else {
    // 				canvas = document.createElement('canvas')
    // 				canvas.width = this.scene.width
    // 				canvas.height = this.scene.height
    // 			}
    // 			const context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = canvas.getContext('2d', {
    // 				alpha: true,
    // 				desynchronized: false,
    // 			})
    // 			if (!context) reject('Create context error')
    // 			const drawOptions = { ...this.drawOptions }
    // 			const sequenceEndTime = this.timeline.getSequenceEndTime()
    // 			for (let i = 0; i < sequence.frames; i++) {
    // 				// requestAnimationFrame(() => {
    // 				const time = this.timeline.getFrameTime(i)
    // 				drawOptions.clearCanvas = this.drawOptions.clearCanvas || i === 0
    // 				drawOptions.time = time
    // 				DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)
    // 				if (drawOptions.ghosts) {
    // 					for (let gi = 1; gi <= drawOptions.ghosts; gi++) {
    // 						const ghostTime =
    // 							time -
    // 							(drawOptions.ghost_skip_function
    // 								? drawOptions.ghost_skip_function(gi)
    // 								: gi * (drawOptions.ghost_skip_time ?? 30))
    // 						drawOptions.clearCanvas = false
    // 						drawOptions.ghost_index = gi
    // 						drawOptions.time =
    // 							ghostTime < 0
    // 								? ghostTime + sequenceEndTime
    // 								: ghostTime > sequenceEndTime
    // 								? ghostTime % sequenceEndTime
    // 								: ghostTime
    // 						DrawerCanvas.draw(this.scene, context, drawOptions, this.resolution)
    // 					}
    // 				}
    // 				this.buffer.push(i, context as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D)
    // 				// })
    // 			}
    // 			resolve(true)
    // 		})
    // 	} else {
    // 		return Promise.reject()
    // 	}
    // }
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.draw = function () {
        var _a, _b;
        var draw_time = 0;
        var drawOptions = __assign({}, this.drawOptions);
        drawOptions.ghost_index = undefined;
        var clearCanvas = this.drawOptions.clearCanvas || this.timeline.getCurrentFrame() <= 0;
        drawOptions.clearCanvas = clearCanvas;
        drawOptions.time = this.timeline.getTime();
        var current_frame = this.timeline.getFrameAtTime(drawOptions.time);
        this.dispatch('drawer-canvas:before_draw', {
            current_frame: current_frame,
            current_time: drawOptions.time,
        });
        if (this.bBuffering && this.buffer.exist(current_frame)) {
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.putImageData(this.buffer.get(current_frame), 0, 0);
        }
        else {
            if (drawOptions.ghosts) {
                var ghostDrawOptions = __assign({}, drawOptions);
                var time = this.timeline.getTime();
                var sequenceEndTime = this.timeline.getSequenceEndTime();
                for (var i = 1; i <= ghostDrawOptions.ghosts; i++) {
                    var ghostTime = time -
                        (drawOptions.ghost_skip_function
                            ? drawOptions.ghost_skip_function(i)
                            : i * ((_b = drawOptions.ghost_skip_time) !== null && _b !== void 0 ? _b : 30));
                    ghostDrawOptions.clearCanvas = clearCanvas && i === 1;
                    ghostDrawOptions.ghost_index = i;
                    ghostDrawOptions.time =
                        ghostTime < 0
                            ? ghostTime + sequenceEndTime
                            : ghostTime > sequenceEndTime
                                ? ghostTime % sequenceEndTime
                                : ghostTime;
                    draw_time += DrawerCanvas.draw(this.scene, this.context, ghostDrawOptions, this.resolution);
                }
                drawOptions.clearCanvas = false;
            }
            draw_time += DrawerCanvas.draw(this.scene, this.context, drawOptions, this.resolution);
            if (this.bBuffering && this.context) {
                this.buffer.push(current_frame, this.context);
                if (this.buffer.count() >= this.timeline.getFramesCount()) {
                    this.dispatch('drawer-canvas:buffer_loaded');
                }
            }
        }
        return draw_time;
    };
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.prototype.redraw = function () {
        if (!this.timeline.bSequenceStarted()) {
            this.draw_id && cancelAnimationFrame(this.draw_id);
            !this.drawOptions.clearCanvas &&
                (typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0) &&
                this.timeline.stop();
            this.draw_id = requestAnimationFrame(this.draw);
        }
        else if (!this.drawOptions.clearCanvas &&
            (typeof this.drawOptions.ghosts == undefined || this.drawOptions.ghosts == 0)) {
            this.stopAnimation();
            // this.redraw_id && clearTimeout(this.redraw_id)
            // this.redraw_id = setTimeout(() => this.startAnimation(), 100)
            this.redraw_id && cancelAnimationFrame(this.redraw_id);
            this.redraw_id = requestAnimationFrame(this.startAnimation);
        }
    };
    /**
     * Static draw scene
     *
     * @static
     * @param {Scene} scene
     * @param {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)} context
     * @param {DrawOptions} options
     * @returns {number}
     * @memberof DrawerCanvas
     */
    DrawerCanvas.draw = function (scene, context, options, resolution) {
        var _a, _b, _c, _d;
        var start_time = now();
        if (context) {
            var scale_1 = (_a = options.scale) !== null && _a !== void 0 ? _a : 1;
            var translate = (_b = options.translate) !== null && _b !== void 0 ? _b : [0, 0];
            var time_1 = (_c = options.time) !== null && _c !== void 0 ? _c : 0;
            var simmetricLine = (_d = options.simmetricLine) !== null && _d !== void 0 ? _d : 0;
            var fixedLineWidth_1 = options.fixedLineWidth;
            var clearCanvas = options.clearCanvas;
            var noBackground = options.noBackground;
            var backgroundImage = options.backgroundImage;
            var bGhost_1 = typeof options.ghosts !== 'undefined' &&
                options.ghosts > 0 &&
                typeof options.ghost_index !== 'undefined' &&
                options.ghost_index > 0;
            var ghostMultiplier_1 = bGhost_1
                ? 1 - options.ghost_index / (options.ghosts + 0.5)
                : 1;
            var width_1 = scene.width;
            var height_1 = scene.height;
            var ratio_x = width_1 > height_1 ? 1 : height_1 / width_1;
            var ratio_y = width_1 > height_1 ? width_1 / height_1 : 1;
            resolution = resolution || width_1;
            var final_scale_1 = [(width_1 / (resolution / ratio_x)) * scale_1, (height_1 / (resolution / ratio_y)) * scale_1];
            var final_translate_1 = [
                width_1 / 2 - (scale_1 > 1 ? (translate[0] * width_1) / (1 / ((scale_1 - 1) / 2)) : 0),
                height_1 / 2 - (scale_1 > 1 ? (translate[1] * height_1) / (1 / ((scale_1 - 1) / 2)) : 0),
            ];
            scene.current_time = time_1;
            scene.getChildren().forEach(function (sceneChild) {
                if (!sceneChild.data ||
                    !(sceneChild.data.visible === false) ||
                    !(bGhost_1 && sceneChild.data.disableGhost === true))
                    sceneChild.generate(time_1, true);
            });
            if (clearCanvas) {
                if (noBackground) {
                    context.clearRect(0, 0, width_1, height_1);
                }
                else {
                    context.fillStyle = scene.background;
                    context.fillRect(0, 0, width_1, height_1);
                    backgroundImage && context.drawImage(backgroundImage, 0, 0, width_1, height_1);
                }
            }
            if (simmetricLine > 0) {
                var offset = Math.PI / simmetricLine;
                var size = Math.max(width_1, height_1) / 2;
                var center = vec2.fromValues(size / 2, size / 2);
                for (var i = 0; i < simmetricLine; i++) {
                    var a = vec2.fromValues(-size, -size);
                    var b = vec2.fromValues(size * 2, size * 2);
                    var rotate = i * offset + Math.PI / 4;
                    vec2.rotate(a, a, center, rotate);
                    vec2.rotate(b, b, center, rotate);
                    context.beginPath();
                    context.strokeStyle = scene.mainColor;
                    context.lineWidth = 1;
                    context.moveTo((a[0] - size / 2) * final_scale_1[0] + final_translate_1[0], (a[1] - size / 2) * final_scale_1[1] + final_translate_1[1]);
                    context.lineTo((b[0] - size / 2) * final_scale_1[0] + final_translate_1[0], (b[1] - size / 2) * final_scale_1[1] + final_translate_1[1]);
                    context.stroke();
                }
            }
            var logFillColorWarn_1 = false;
            var logStrokeColorWarn_1 = false;
            context.globalCompositeOperation = 'source-over';
            scene.stream(function (_a) {
                var lineWidth = _a.lineWidth, strokeColor = _a.strokeColor, fillColor = _a.fillColor, shape = _a.shape, buffer = _a.buffer, frame_length = _a.frame_length, frame_buffer_index = _a.frame_buffer_index;
                if (shape.data && (shape.data.visible === false || (bGhost_1 && shape.data.disableGhost === true)))
                    return;
                if (shape.data && shape.data.composite) {
                    context.globalCompositeOperation = shape.data.composite;
                }
                context.beginPath();
                context.moveTo((buffer[frame_buffer_index] - width_1 / 2) * final_scale_1[0] + final_translate_1[0], (buffer[frame_buffer_index + 1] - height_1 / 2) * final_scale_1[1] + final_translate_1[1]);
                for (var i = 2; i < frame_length; i += 2) {
                    context.lineTo((buffer[frame_buffer_index + i] - width_1 / 2) * final_scale_1[0] + final_translate_1[0], (buffer[frame_buffer_index + i + 1] - height_1 / 2) * final_scale_1[1] + final_translate_1[1]);
                }
                shape && shape.isClosed() && context.closePath();
                if (shape && shape.data && shape.data.highlighted) {
                    context.lineWidth = (lineWidth || 1) * 3 * scale_1;
                    context.strokeStyle = scene.mainColor;
                    context.stroke();
                    return;
                }
                if (fillColor) {
                    if (bGhost_1) {
                        var color = /\((.+),(.+),(.+),(.+)?\)/g.exec(fillColor);
                        if (color) {
                            var _b = color, a = _b[1], b = _b[2], c = _b[3], o = _b[4];
                            var alpha = o ? parseFloat(o) : 1;
                            var ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier_1;
                            fillColor =
                                fillColor.indexOf('rgb') >= 0
                                    ? "rgba(" + a + "," + b + "," + c + "," + ghostAlpha + ")"
                                    : "hsla(" + a + "," + b + "," + c + "," + ghostAlpha + ")";
                        }
                        else if (!logFillColorWarn_1) {
                            console.warn("[Urpflanze:DrawerCanvas] Unable ghost fill color '" + fillColor + "', \n\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                            logFillColorWarn_1 = true;
                        }
                    }
                    context.fillStyle = fillColor;
                    context.fill();
                }
                if (strokeColor && lineWidth) {
                    if (bGhost_1) {
                        var color = /\((.+),(.+),(.+),(.+)?\)/g.exec(strokeColor);
                        if (color) {
                            var _c = color, a = _c[1], b = _c[2], c = _c[3], o = _c[4];
                            var alpha = o ? parseFloat(o) : 1;
                            var ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier_1;
                            strokeColor =
                                strokeColor.indexOf('rgb') >= 0
                                    ? "rgba(" + a + "," + b + "," + c + "," + ghostAlpha + ")"
                                    : "hsla(" + a + "," + b + "," + c + "," + ghostAlpha + ")";
                        }
                        else if (!logStrokeColorWarn_1) {
                            console.warn("[Urpflanze:DrawerCanvas] Unable ghost stroke color '" + fillColor + "', \n\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                            logStrokeColorWarn_1 = true;
                        }
                        lineWidth *= ghostMultiplier_1;
                    }
                    context.lineWidth = fixedLineWidth_1 ? lineWidth : lineWidth * scale_1;
                    context.strokeStyle = strokeColor;
                    context.stroke();
                }
                if (shape.data && shape.data.composite) {
                    context.globalCompositeOperation = 'source-over';
                }
            });
        }
        var end_time = now();
        return end_time - start_time;
    };
    return DrawerCanvas;
}(Emitter));
export default DrawerCanvas;
//# sourceMappingURL=DrawerCanvas.js.map