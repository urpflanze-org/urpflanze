import Scene from "../../core/Scene";
import Timeline from "../timeline/Timeline";
import FrameBuffer from "./FrameBuffer";
import Emitter from "../events/Emitter";
import { DrawerCanvasEvents, DrawOptions } from "../types/drawer-canvas";
/**
 *
 * @category Services
 * @class DrawerCanvas
 * @extends {Emitter<DrawerCanvasEvents>}
 */
declare class DrawerCanvas extends Emitter<DrawerCanvasEvents> {
    private scene;
    private canvas;
    private resolution;
    private ratio;
    private context;
    private animation_id;
    private draw_id;
    private redraw_id;
    private drawOptions;
    private timeline;
    private bBuffering;
    buffer: FrameBuffer;
    constructor(scene?: Scene, canvasOrContainer?: HTMLElement | HTMLCanvasElement | OffscreenCanvas, drawOptions?: DrawOptions, ratio?: number | undefined, resolution?: number, bBuffering?: boolean);
    setBuffering(bBuffering: boolean): void;
    getBBuffering(): boolean;
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    setScene(scene: Scene): void;
    getScene(): Scene;
    getTimeline(): Timeline;
    /**
     * Set the canvas or append to container
     *
     * @param {(HTMLElement | HTMLCanvasElement | OffscreenCanvas)} canvasOrContainer
     * @memberof CanvasDrawer
     */
    setCanvas(canvasOrContainer: HTMLElement | HTMLCanvasElement | OffscreenCanvas): void;
    /**
     * Return canvas element
     *
     * @returns {(HTMLCanvasElement | OffscreenCanvas)}
     * @memberof DrawerCanvas
     */
    getCanvas(): HTMLCanvasElement | OffscreenCanvas;
    /**
     * Return canvas context
     *
     * @returns {(CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null)}
     * @memberof DrawerCanvas
     */
    getContext(): CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     * @param {number} [resolution]
     * @memberof DrawerCanvas
     */
    resize(width: number, height: number, ratio?: number, resolution?: number): void;
    flushBuffer(): void;
    getRenderedFrames(): Array<number>;
    /**
     * Resize by ratio
     *
     * @param {number} ratio
     * @memberof DrawerCanvas
     */
    setRatio(ratio: number): void;
    /**
     * Return drawer ratio
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getRatio(): number;
    /**
     * Get resolution
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    getResolution(): number;
    /**
     * Get resolution of drawer
     *
     * @param {number} resolution
     * @memberof DrawerCanvas
     */
    setResolution(resolution: number): void;
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolution(value: number): number;
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     * @returns
     * @memberof DrawerCanvas
     */
    getValueFromResolutionScaled(value: number): number;
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | DrawOptions)} name
     * @param {Required<DrawOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    setOption<K extends keyof DrawOptions>(name: K | DrawOptions, value?: Required<DrawOptions>[K]): void;
    /**
     *
     *
     * @template K
     * @param {K} name
     * @param {DrawOptions[K]} default_value
     * @returns {DrawOptions[K]}
     * @memberof DrawerCanvas
     */
    getOption<K extends keyof DrawOptions>(name: K, default_value?: DrawOptions[K]): DrawOptions[K];
    /**
     *
     *
     * @returns {DrawOptions}
     * @memberof DrawerCanvas
     */
    getOptions(): DrawOptions;
    /**
     * Internal tick animation
     *
     * @private
     * @memberof CanvasDrawer
     */
    private animate;
    /**
     * Start animation drawing
     *
     * @memberof CanvasDrawer
     */
    startAnimation(): void;
    /**
     * Stop animation drawing
     *
     * @memberof CanvasDrawer
     */
    stopAnimation(): void;
    /**
     * Pause animation drawing
     *
     * @memberof CanvasDrawer
     */
    pauseAnimation(): void;
    /**
     * Play animation drawing
     *
     * @memberof CanvasDrawer
     */
    playAnimation(): void;
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    draw(): number;
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    redraw(): void;
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
    static draw(scene: Scene, context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null, options: DrawOptions, resolution?: number): number;
}
export default DrawerCanvas;
//# sourceMappingURL=DrawerCanvas.d.ts.map