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
import FrameBuffer from "./FrameBuffer";
import { now } from "../../../Utilites";
import { vec2 } from 'gl-matrix';
import Drawer from "../Drawer";
/**
 *
 * @category Services
 * @class DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
var DrawerCanvas = /** @class */ (function (_super) {
    __extends(DrawerCanvas, _super);
    function DrawerCanvas(scene, canvasOrContainer, drawerOptions, ratio, resolution, bBuffering) {
        if (drawerOptions === void 0) { drawerOptions = {}; }
        if (ratio === void 0) { ratio = undefined; }
        if (resolution === void 0) { resolution = 0; }
        if (bBuffering === void 0) { bBuffering = false; }
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = _super.call(this, scene, ratio, resolution) || this;
        _this.bBuffering = false;
        _this.bBuffering = bBuffering;
        _this.buffer = new FrameBuffer();
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
        _this.drawerOptions = {
            scale: (_a = drawerOptions.scale) !== null && _a !== void 0 ? _a : 1,
            translate: (_b = drawerOptions.translate) !== null && _b !== void 0 ? _b : [0, 0],
            time: (_c = drawerOptions.time) !== null && _c !== void 0 ? _c : 0,
            simmetricLines: (_d = drawerOptions.simmetricLines) !== null && _d !== void 0 ? _d : 0,
            clear: (_e = drawerOptions.clear) !== null && _e !== void 0 ? _e : true,
            fixedLineWidth: (_f = drawerOptions.fixedLineWidth) !== null && _f !== void 0 ? _f : false,
            noBackground: (_g = drawerOptions.noBackground) !== null && _g !== void 0 ? _g : false,
            ghosts: drawerOptions.ghosts || 0,
            ghost_skip_time: (_h = drawerOptions.ghost_skip_time) !== null && _h !== void 0 ? _h : 30,
            ghost_skip_function: drawerOptions.ghost_skip_function,
            backgroundImage: drawerOptions.backgroundImage,
        };
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
        _super.prototype.setScene.call(this, scene);
        if (this.canvas) {
            this.setCanvas(this.canvas); // and flush
        }
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
        _super.prototype.resize.call(this, width, height, ratio, resolution);
        if (this.canvas) {
            this.canvas.width = this.scene.width;
            this.canvas.height = this.scene.height;
            if (typeof HTMLCanvasElement !== 'undefined' && this.canvas instanceof HTMLCanvasElement) {
                this.canvas.style.width = this.scene.width + 'px';
                this.canvas.style.height = this.scene.height + 'px';
            }
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
     * Set draw option
     *
     * @template K
     * @param {(K | IDrawerOptions)} name
     * @param {Required<IDrawerOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    DrawerCanvas.prototype.setOption = function (name, value) {
        _super.prototype.setOption.call(this, name, value);
        this.flushBuffer();
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
    // 			const drawerOptions = { ...this.drawerOptions }
    // 			const sequenceEndTime = this.timeline.getSequenceEndTime()
    // 			for (let i = 0; i < sequence.frames; i++) {
    // 				// requestAnimationFrame(() => {
    // 				const time = this.timeline.getFrameTime(i)
    // 				drawerOptions.clear = this.drawerOptions.clear || i === 0
    // 				drawerOptions.time = time
    // 				DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)
    // 				if (drawerOptions.ghosts) {
    // 					for (let gi = 1; gi <= drawerOptions.ghosts; gi++) {
    // 						const ghostTime =
    // 							time -
    // 							(drawerOptions.ghost_skip_function
    // 								? drawerOptions.ghost_skip_function(gi)
    // 								: gi * (drawerOptions.ghost_skip_time ?? 30))
    // 						drawerOptions.clear = false
    // 						drawerOptions.ghost_index = gi
    // 						drawerOptions.time =
    // 							ghostTime < 0
    // 								? ghostTime + sequenceEndTime
    // 								: ghostTime > sequenceEndTime
    // 								? ghostTime % sequenceEndTime
    // 								: ghostTime
    // 						DrawerCanvas.draw(this.scene, context, drawerOptions, this.resolution)
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
        var _this = this;
        var _a;
        var draw_time = 0;
        var timeline = this.timeline;
        var drawAtTime = timeline.getTime();
        var drawerOptions = __assign(__assign({}, this.drawerOptions), { ghost_index: undefined, clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 0, time: drawAtTime });
        var current_frame = timeline.getFrameAtTime(drawAtTime);
        this.dispatch('drawer-canvas:before_draw', {
            current_frame: current_frame,
            current_time: drawAtTime,
        });
        if (this.bBuffering && this.buffer.exist(current_frame)) {
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.putImageData(this.buffer.get(current_frame), 0, 0);
        }
        else {
            if (drawerOptions.ghosts) {
                Drawer.eachGhosts(drawerOptions, timeline, function (ghostDrawerOptions) {
                    draw_time += DrawerCanvas.draw(_this.scene, _this.context, ghostDrawerOptions, _this.resolution);
                });
            }
            draw_time += DrawerCanvas.draw(this.scene, this.context, drawerOptions, this.resolution);
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
     * Static draw scene
     *
     * @static
     * @param {Scene} scene
     * @param {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)} context
     * @param {DrawerOptions} options
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
            var simmetricLines = (_d = options.simmetricLines) !== null && _d !== void 0 ? _d : 0;
            var fixedLineWidth_1 = options.fixedLineWidth;
            var clear = options.clear;
            var noBackground = options.noBackground;
            var backgroundImage = options.backgroundImage;
            var bGhost_1 = typeof options.ghosts !== 'undefined' &&
                options.ghosts > 0 &&
                typeof options.ghost_index !== 'undefined' &&
                options.ghost_index > 0;
            var ghostMultiplier_1 = bGhost_1
                ? 1 - options.ghost_index / (options.ghosts + 0.5)
                : 0;
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
            if (clear) {
                if (noBackground) {
                    context.clearRect(0, 0, width_1, height_1);
                }
                else {
                    context.fillStyle = scene.background;
                    context.fillRect(0, 0, width_1, height_1);
                    backgroundImage && context.drawImage(backgroundImage, 0, 0, width_1, height_1);
                }
            }
            if (simmetricLines > 0) {
                DrawerCanvas.drawSimmetricLines(context, simmetricLines, width_1, height_1, final_scale_1, final_translate_1, scene.mainColor);
            }
            {
                var logFillColorWarn_1 = false;
                var logStrokeColorWarn_1 = false;
                scene.current_time = time_1;
                scene.getChildren().forEach(function (sceneChild) {
                    if (!sceneChild.data ||
                        !(sceneChild.data.visible === false) ||
                        !(bGhost_1 && sceneChild.data.disableGhost === true)) {
                        sceneChild.generate(time_1, true);
                        sceneChild.stream(function (streamCallback) {
                            var shapeData = streamCallback.shape.data;
                            context.globalCompositeOperation = shapeData && shapeData.composite ? shapeData.composite : 'source-over';
                            context.beginPath();
                            context.moveTo((streamCallback.buffer[streamCallback.frame_buffer_index] - width_1 / 2) * final_scale_1[0] +
                                final_translate_1[0], (streamCallback.buffer[streamCallback.frame_buffer_index + 1] - height_1 / 2) * final_scale_1[1] +
                                final_translate_1[1]);
                            for (var i = 2; i < streamCallback.frame_length; i += 2) {
                                context.lineTo((streamCallback.buffer[streamCallback.frame_buffer_index + i] - width_1 / 2) * final_scale_1[0] +
                                    final_translate_1[0], (streamCallback.buffer[streamCallback.frame_buffer_index + i + 1] - height_1 / 2) * final_scale_1[1] +
                                    final_translate_1[1]);
                            }
                            streamCallback.shape.isClosed() && context.closePath();
                            if (shapeData && shapeData.highlighted) {
                                context.lineWidth = (streamCallback.lineWidth || 1) * 3 * scale_1;
                                context.strokeStyle = scene.mainColor;
                                context.stroke();
                                return;
                            }
                            if (streamCallback.fillColor) {
                                if (bGhost_1) {
                                    var color = Drawer.ghostifyColor(streamCallback.fillColor, ghostMultiplier_1);
                                    if (color) {
                                        streamCallback.fillColor = color;
                                    }
                                    else if (!logFillColorWarn_1) {
                                        console.warn("[Urpflanze:DrawerCanvas] Unable ghost fill color '" + streamCallback.fillColor + "', \n\t\t\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                                        logFillColorWarn_1 = true;
                                    }
                                }
                                context.fillStyle = streamCallback.fillColor;
                                context.fill();
                            }
                            if (streamCallback.strokeColor) {
                                if (bGhost_1) {
                                    var color = Drawer.ghostifyColor(streamCallback.strokeColor, ghostMultiplier_1);
                                    if (color) {
                                        streamCallback.strokeColor = color;
                                    }
                                    else if (!logStrokeColorWarn_1) {
                                        console.warn("[Urpflanze:DrawerCanvas] Unable ghost stroke color '" + streamCallback.strokeColor + "', \n\t\t\t\t\t\t\t\t\tplease enter a rgba or hsla color");
                                        logStrokeColorWarn_1 = true;
                                    }
                                    streamCallback.lineWidth *= ghostMultiplier_1;
                                }
                                context.lineWidth = fixedLineWidth_1 ? streamCallback.lineWidth : streamCallback.lineWidth * scale_1;
                                context.strokeStyle = streamCallback.strokeColor;
                                context.stroke();
                            }
                        });
                    }
                });
            }
        }
        var end_time = now();
        return end_time - start_time;
    };
    DrawerCanvas.drawSimmetricLines = function (context, simmetricLines, width, height, scale, translate, color) {
        var offset = Math.PI / simmetricLines;
        var size = Math.max(width, height) / 2;
        var center = vec2.fromValues(size / 2, size / 2);
        for (var i = 0; i < simmetricLines; i++) {
            var a = vec2.fromValues(-size, -size);
            var b = vec2.fromValues(size * 2, size * 2);
            var rotate = i * offset + Math.PI / 4;
            vec2.rotate(a, a, center, rotate);
            vec2.rotate(b, b, center, rotate);
            context.beginPath();
            context.strokeStyle = color;
            context.lineWidth = 1;
            context.moveTo((a[0] - size / 2) * scale[0] + translate[0], (a[1] - size / 2) * scale[1] + translate[1]);
            context.lineTo((b[0] - size / 2) * scale[0] + translate[0], (b[1] - size / 2) * scale[1] + translate[1]);
            context.stroke();
        }
    };
    return DrawerCanvas;
}(Drawer));
export default DrawerCanvas;
//# sourceMappingURL=DrawerCanvas.js.map