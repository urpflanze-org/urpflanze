import Scene from "../../core/Scene";
import Timeline from "../timeline/Timeline";
import FrameBuffer from "./FrameBuffer";
import Emitter from "../events/Emitter";
export interface DrawOptions {
    time?: number;
    scale?: number;
    translate?: Array<number>;
    simmetricLine?: number;
    clearCanvas?: boolean;
    noBackground?: boolean;
    ghosts?: number;
    ghost_skip_time?: number;
    ghost_skip_function?: (ghost_index: number) => number;
    ghost_index?: number;
    fixedLineWidth?: boolean;
    backgroundImage?: CanvasImageSource;
}
export interface DrawerCanvasEvents {
    'drawer-canvas:before_draw': {
        current_frame: number;
        current_time: number;
    };
    'drawer-canvas:buffer_loaded': void;
    'drawer-canvas:buffer_flush': void;
    'drawer-canvas:resize': void;
}
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
    setScene(scene: Scene): void;
    getScene(): Scene;
    getTimeline(): Timeline;
    setCanvas(canvasOrContainer: HTMLElement | HTMLCanvasElement | OffscreenCanvas): void;
    getCanvas(): HTMLCanvasElement | OffscreenCanvas;
    getContext(): CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    resize(width: number, height: number, ratio?: number, resolution?: number): void;
    flushBuffer(): void;
    getRenderedFrames(): Array<number>;
    setRatio(ratio: number): void;
    getRatio(): number;
    getResolution(): number;
    setResolution(resolution: number): void;
    getValueFromResolution(value: number): number;
    getValueFromResolutionScaled(value: number): number;
    setOption<K extends keyof DrawOptions>(name: K | {
        [e in keyof DrawOptions]: Required<DrawOptions>[K];
    }, value?: Required<DrawOptions>[K]): void;
    getOption<K extends keyof DrawOptions>(name: K, default_value?: DrawOptions[K]): DrawOptions[K];
    getOptions(): DrawOptions;
    private animate;
    startAnimation(): void;
    stopAnimation(): void;
    pauseAnimation(): void;
    playAnimation(): void;
    draw(): number;
    redraw(): void;
    static draw(scene: Scene, context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null, options: DrawOptions, resolution?: number): number;
}
export default DrawerCanvas;
