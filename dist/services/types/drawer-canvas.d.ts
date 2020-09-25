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
