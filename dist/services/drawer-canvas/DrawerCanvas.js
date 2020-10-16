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
class DrawerCanvas extends Emitter {
    constructor(scene, canvasOrContainer, drawOptions = {}, ratio = undefined, resolution = 0, bBuffering = false) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        this.bBuffering = false;
        this.timeline = new Timeline();
        this.resolution = resolution || (scene && scene.width ? scene.width : 0);
        this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        this.bBuffering = bBuffering;
        this.buffer = new FrameBuffer();
        if (scene) {
            const width = this.ratio >= 1 ? scene.width : scene.width * this.ratio;
            const height = this.ratio >= 1 ? scene.height / this.ratio : scene.height;
            scene.resize(width, height);
            this.setScene(scene);
        }
        if ((typeof HTMLCanvasElement !== 'undefined' && canvasOrContainer instanceof HTMLCanvasElement) ||
            (typeof OffscreenCanvas !== 'undefined' && canvasOrContainer instanceof OffscreenCanvas)) {
            const canvas = canvasOrContainer;
            this.setCanvas(canvas);
        }
        else if (canvasOrContainer) {
            const canvas = document.createElement('canvas');
            const container = canvasOrContainer;
            container.appendChild(canvas);
            this.setCanvas(canvas);
        }
        this.drawOptions = {
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
        this.draw_id = null;
        this.redraw_id = null;
        this.animation_id = null;
        this.draw = this.draw.bind(this);
        this.animate = this.animate.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }
    setBuffering(bBuffering) {
        this.bBuffering = bBuffering;
        this.flushBuffer();
    }
    getBBuffering() {
        return this.bBuffering;
    }
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    setScene(scene) {
        this.scene = scene;
        if (!this.resolution && this.scene.width)
            this.resolution = this.scene.width;
        if (this.canvas) {
            this.setCanvas(this.canvas); // and flush
        }
    }
    getScene() {
        return this.scene;
    }
    getTimeline() {
        return this.timeline;
    }
    /**
     * Set the canvas or append to container
     *
     * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
     * @memberof CanvasDrawer
     */
    setCanvas(canvasOrContainer) {
        let canvas;
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
    }
    /**
     * Return canvas element
     *
     * @returns {(HTMLCanvasElement | OffscreenCanvas)}
     * @memberof DrawerCanvas
     */
    getCanvas() {
        return this.canvas;
    }
    /**
     * Return canvas context
     *
     * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
     * @memberof DrawerCanvas
     */
    getContext() {
        return this.context;
    }
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     * @param {number} [resolution]
     * @memberof DrawerCanvas
     */
    resize(width, height, ratio, resolution) {
        // const dpi = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1
        const dpi = 1;
        ratio = ratio || this.ratio || width / height;
        const size = Math.max(width, height);
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
            Scene.walk((sceneChild) => {
                const props = sceneChild.data.props;
                Object.keys(props).forEach(name => {
                    SceneUtilities.setProp(sceneChild, name, props[name], this);
                });
            }, this.scene);
        }
        this.flushBuffer();
        this.dispatch('drawer-canvas:resize');
    }
    flushBuffer() {
        if (this.bBuffering) {
            this.buffer.flush();
            this.dispatch('drawer-canvas:buffer_flush');
        }
    }
    getRenderedFrames() {
        if (this.bBuffering) {
            return this.buffer.getRenderedFrames();
        }
        return [];
    }
    /**
     * Resize by ratio
     *
     * @param {number} ratio
     * @memberof DrawerCanvas
     */
    setRatio(ratio) {
        this.resize(this.scene.width, this.scene.height, ratio);
    }
    /**
     * Return drawer ratio
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getRatio() {
        return this.ratio;
    }
    /**
     * Get resolution
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getResolution() {
        return this.resolution;
    }
    /**
     * Get resolution of drawer
     *
     * @param {number} resolution
     * @memberof DrawerCanvas
     */
    setResolution(resolution) {
        this.resize(this.scene.width, this.scene.height, this.ratio, resolution);
    }
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolution(value) {
        return (value * this.resolution) / 200;
    }
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolutionScaled(value) {
        return (value * 200) / this.resolution;
    }
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | DrawOptions)} name
     * @param {Required<DrawOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    setOption(name, value) {
        if (typeof name == 'object') {
            const keys = Object.keys(name);
            for (let i = 0, len = keys.length; i < len; i++) {
                // @ts-ignore
                this.drawOptions[keys[i]] = name[keys[i]];
            }
        }
        else {
            this.drawOptions[name] = value;
        }
        this.flushBuffer();
    }
    /**
     *
     *
     * @template K
     * @param {K} name
     * @param {DrawOptions[K]} default_value
     * @returns {DrawOptions[K]}
     * @memberof DrawerCanvas
     */
    getOption(name, default_value) {
        var _a;
        return (_a = this.drawOptions[name]) !== null && _a !== void 0 ? _a : default_value;
    }
    /**
     *
     *
     * @returns {DrawOptions}
     * @memberof DrawerCanvas
     */
    getOptions() {
        return this.drawOptions;
    }
    /**
     * Internal tick animation
     *
     * @private
     * @memberof CanvasDrawer
     */
    animate(timestamp) {
        if (this.timeline.bSequenceStarted()) {
            this.animation_id = requestAnimationFrame(this.animate);
            if (this.timeline.tick(timestamp))
                this.draw();
        }
    }
    /**
     * Start animation drawing
     *
     * @memberof CanvasDrawer
     */
    startAnimation() {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    }
    /**
     * Stop animation drawing
     *
     * @memberof CanvasDrawer
     */
    stopAnimation() {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Pause animation drawing
     *
     * @memberof CanvasDrawer
     */
    pauseAnimation() {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    }
    /**
     * Play animation drawing
     *
     * @memberof CanvasDrawer
     */
    playAnimation() {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    }
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
    draw() {
        var _a, _b;
        let draw_time = 0;
        const drawOptions = Object.assign({}, this.drawOptions);
        drawOptions.ghost_index = undefined;
        const clearCanvas = this.drawOptions.clearCanvas || this.timeline.getCurrentFrame() <= 0;
        drawOptions.clearCanvas = clearCanvas;
        drawOptions.time = this.timeline.getTime();
        const current_frame = this.timeline.getFrameAtTime(drawOptions.time);
        this.dispatch('drawer-canvas:before_draw', {
            current_frame: current_frame,
            current_time: drawOptions.time,
        });
        if (this.bBuffering && this.buffer.exist(current_frame)) {
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.putImageData(this.buffer.get(current_frame), 0, 0);
        }
        else {
            if (drawOptions.ghosts) {
                const ghostDrawOptions = Object.assign({}, drawOptions);
                const time = this.timeline.getTime();
                const sequenceEndTime = this.timeline.getSequenceEndTime();
                for (let i = 1; i <= ghostDrawOptions.ghosts; i++) {
                    const ghostTime = time -
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
    }
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    redraw() {
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
    }
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
    static draw(scene, context, options, resolution) {
        var _a, _b, _c, _d;
        const start_time = now();
        if (context) {
            const scale = (_a = options.scale) !== null && _a !== void 0 ? _a : 1;
            const translate = (_b = options.translate) !== null && _b !== void 0 ? _b : [0, 0];
            const time = (_c = options.time) !== null && _c !== void 0 ? _c : 0;
            const simmetricLine = (_d = options.simmetricLine) !== null && _d !== void 0 ? _d : 0;
            const fixedLineWidth = options.fixedLineWidth;
            const clearCanvas = options.clearCanvas;
            const noBackground = options.noBackground;
            const backgroundImage = options.backgroundImage;
            const bGhost = typeof options.ghosts !== 'undefined' &&
                options.ghosts > 0 &&
                typeof options.ghost_index !== 'undefined' &&
                options.ghost_index > 0;
            const ghostMultiplier = bGhost
                ? 1 - options.ghost_index / (options.ghosts + 0.5)
                : 1;
            const width = scene.width;
            const height = scene.height;
            const ratio_x = width > height ? 1 : height / width;
            const ratio_y = width > height ? width / height : 1;
            resolution = resolution || width;
            const final_scale = [(width / (resolution / ratio_x)) * scale, (height / (resolution / ratio_y)) * scale];
            const final_translate = [
                width / 2 - (scale > 1 ? (translate[0] * width) / (1 / ((scale - 1) / 2)) : 0),
                height / 2 - (scale > 1 ? (translate[1] * height) / (1 / ((scale - 1) / 2)) : 0),
            ];
            scene.current_time = time;
            scene.getChildren().forEach((sceneChild) => {
                if (!sceneChild.data ||
                    !(sceneChild.data.visible === false) ||
                    !(bGhost && sceneChild.data.disableGhost === true))
                    sceneChild.generate(time, true);
            });
            if (clearCanvas) {
                if (noBackground) {
                    context.clearRect(0, 0, width, height);
                }
                else {
                    context.fillStyle = scene.background;
                    context.fillRect(0, 0, width, height);
                    backgroundImage && context.drawImage(backgroundImage, 0, 0, width, height);
                }
            }
            if (simmetricLine > 0) {
                const offset = Math.PI / simmetricLine;
                const size = Math.max(width, height) / 2;
                const center = vec2.fromValues(size / 2, size / 2);
                for (let i = 0; i < simmetricLine; i++) {
                    const a = vec2.fromValues(-size, -size);
                    const b = vec2.fromValues(size * 2, size * 2);
                    const rotate = i * offset + Math.PI / 4;
                    vec2.rotate(a, a, center, rotate);
                    vec2.rotate(b, b, center, rotate);
                    context.beginPath();
                    context.strokeStyle = scene.mainColor;
                    context.lineWidth = 1;
                    context.moveTo((a[0] - size / 2) * final_scale[0] + final_translate[0], (a[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.lineTo((b[0] - size / 2) * final_scale[0] + final_translate[0], (b[1] - size / 2) * final_scale[1] + final_translate[1]);
                    context.stroke();
                }
            }
            let logFillColorWarn = false;
            let logStrokeColorWarn = false;
            scene.stream(({ lineWidth, strokeColor, fillColor, shape, buffer, frame_length, frame_buffer_index }) => {
                if (shape.data && (shape.data.visible === false || (bGhost && shape.data.disableGhost === true)))
                    return;
                context.beginPath();
                context.moveTo((buffer[frame_buffer_index] - width / 2) * final_scale[0] + final_translate[0], (buffer[frame_buffer_index + 1] - height / 2) * final_scale[1] + final_translate[1]);
                for (let i = 2; i < frame_length; i += 2) {
                    context.lineTo((buffer[frame_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0], (buffer[frame_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1]);
                }
                shape && shape.isClosed() && context.closePath();
                if (shape && shape.data && shape.data.highlighted) {
                    context.lineWidth = (lineWidth || 1) * 3 * scale;
                    context.strokeStyle = scene.mainColor;
                    context.stroke();
                    return;
                }
                if (fillColor) {
                    if (bGhost) {
                        const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(fillColor);
                        if (color) {
                            let [, a, b, c, o] = color;
                            const alpha = o ? parseFloat(o) : 1;
                            const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                            fillColor =
                                fillColor.indexOf('rgb') >= 0
                                    ? `rgba(${a},${b},${c},${ghostAlpha})`
                                    : `hsla(${a},${b},${c},${ghostAlpha})`;
                        }
                        else if (!logFillColorWarn) {
                            console.warn(`[Urpflanze:DrawerCanvas] Unable ghost fill color '${fillColor}', 
							please enter a rgba or hsla color`);
                            logFillColorWarn = true;
                        }
                    }
                    context.fillStyle = fillColor;
                    context.fill();
                }
                if (strokeColor && lineWidth) {
                    if (bGhost) {
                        const color = /\((.+),(.+),(.+),(.+)?\)/g.exec(strokeColor);
                        if (color) {
                            let [, a, b, c, o] = color;
                            const alpha = o ? parseFloat(o) : 1;
                            const ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                            strokeColor =
                                strokeColor.indexOf('rgb') >= 0
                                    ? `rgba(${a},${b},${c},${ghostAlpha})`
                                    : `hsla(${a},${b},${c},${ghostAlpha})`;
                        }
                        else if (!logStrokeColorWarn) {
                            console.warn(`[Urpflanze:DrawerCanvas] Unable ghost stroke color '${fillColor}', 
							please enter a rgba or hsla color`);
                            logStrokeColorWarn = true;
                        }
                        lineWidth *= ghostMultiplier;
                    }
                    context.lineWidth = fixedLineWidth ? lineWidth : lineWidth * scale;
                    context.strokeStyle = strokeColor;
                    context.stroke();
                }
            });
        }
        const end_time = now();
        return end_time - start_time;
    }
}
export default DrawerCanvas;
//# sourceMappingURL=DrawerCanvas.js.map