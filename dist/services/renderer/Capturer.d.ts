import { TRenderImageType, TRenderType } from "../types/renderer";
interface ICapturerSettings {
    type?: TRenderType;
    quality?: number;
}
/**
 *
 * @category Services.Renderer
 * @class Capturer
 */
declare class Capturer {
    encoder: 'jpeg' | 'png';
    type: TRenderType;
    extension: '.jpg' | '.png';
    quality: number;
    chunks: Array<Uint8Array>;
    started: boolean;
    promises: Array<Promise<number>>;
    constructor(settings?: ICapturerSettings);
    setSettings(settings: ICapturerSettings): void;
    start(total_frames: number): void;
    stop(): void;
    capture(canvas: HTMLCanvasElement | OffscreenCanvas, framenumber: number): Promise<number>;
    save(): Promise<Array<Uint8Array>>;
    static getRenderTime(canvas: HTMLCanvasElement | OffscreenCanvas, type: TRenderImageType, quality: number): Promise<number>;
    static getBlob(canvas: HTMLCanvasElement | OffscreenCanvas, type: TRenderType, quality: number): Promise<Blob>;
    static render(canvas: HTMLCanvasElement | OffscreenCanvas, type: TRenderType, quality: number): Promise<Uint8Array>;
}
export default Capturer;
//# sourceMappingURL=Capturer.d.ts.map