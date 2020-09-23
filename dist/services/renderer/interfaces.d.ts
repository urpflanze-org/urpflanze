export declare type TRenderImageType = 'image/png' | 'image/jpeg';
export declare type TRenderType = TRenderImageType | 'image/svg+xml';
export interface IRenderSettings {
    size: number;
    quality: number;
    type: TRenderType;
    time: number;
    noBackground: boolean;
}
export interface IRenderStart {
    estimated_time: number;
    total_frames: number;
    total_parts: number;
    forPart: number;
}
export interface IRenderFrame {
    frame: number;
    part: number;
    forPart: number;
    total_frames: number;
    total_parts: number;
    render_time: number;
}
export interface IRenderEvents {
    'renderer:start': IRenderStart;
    'renderer:render-frame': IRenderFrame;
}
