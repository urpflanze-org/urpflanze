declare class FrameBuffer {
    private frames;
    constructor();
    exist(frameNumber: number): boolean;
    get(frameNumber: number): ImageData | null;
    count(): number;
    push(frameNumber: number, context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    flush(): void;
    getRenderedFrames(): Array<number>;
}
export default FrameBuffer;
