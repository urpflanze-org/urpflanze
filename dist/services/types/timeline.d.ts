/**
 * @category Services.Timeline
 */
export interface ITimelineEvents {
    'timeline:update_sequence': ISequenceMeta;
    'timeline:change_status': 'start' | 'stop' | 'pause';
    'timeline:progress': {
        current_frame: number;
        current_time: number;
        fps: number;
    };
}
/**
 * @category Services.Timeline
 */
export interface ISequenceMeta {
    durate: number;
    frames: number;
    framerate: number;
}
//# sourceMappingURL=timeline.d.ts.map