import Scene from "../../../core/Scene";
import FrameBuffer from "./FrameBuffer";
import { IDrawerCanvasEvents, IDrawerCanvasOptions } from "../../types/drawer";
import Drawer from "../Drawer";
/**
 *
 * @category Services.Drawer
 * @extends {Emitter<DrawerCanvasEvents>}
 */
declare class DrawerCanvas extends Drawer<IDrawerCanvasOptions, IDrawerCanvasEvents> {
    private canvas;
    private context;
    private bBuffering;
    buffer: FrameBuffer;
    constructor(scene?: Scene, canvasOrContainer?: HTMLElement | HTMLCanvasElement | OffscreenCanvas, drawerOptions?: IDrawerCanvasOptions, ratio?: number | undefined, resolution?: number, duration?: number, framerate?: number, bBuffering?: boolean);
    setBuffering(bBuffering: boolean): void;
    getBBuffering(): boolean;
    /**
     * Set scene
     *
     * @param {Scene} scene
     * @memberof CanvasDrawer
     */
    setScene(scene: Scene): void;
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
     * Set draw option
     *
     * @template K
     * @param {(K | IDrawerOptions)} name
     * @param {Required<IDrawerOptions>[K]} [value]
     * @memberof CanvasDrawer
     */
    setOption<K extends keyof IDrawerCanvasOptions>(name: K | IDrawerCanvasOptions, value?: Required<IDrawerCanvasOptions>[K]): void;
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
     * @param {DrawerOptions} options
     * @returns {number}
     * @memberof DrawerCanvas
     */
    static draw(scene: Scene, context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null, options: IDrawerCanvasOptions & {
        ghostIndex?: number;
    }, resolution?: number): number;
    static drawSimmetricLines(context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, simmetricLines: number, width: number, height: number, scale: Array<number>, translate: Array<number>, color: string): void;
}
export default DrawerCanvas;
//# sourceMappingURL=DrawerCanvas.d.ts.map