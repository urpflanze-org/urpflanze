export interface TimelineEvents {
    'timeline:update_sequence': SequenceMeta;
    'timeline:change_status': string;
    'timeline:progress': {
        current_frame: number;
        current_time: number;
        fps: number;
    };
}
export interface SequenceMeta {
    start: number;
    end: number;
    durate: number;
    frames: number;
    framerate: number;
}
