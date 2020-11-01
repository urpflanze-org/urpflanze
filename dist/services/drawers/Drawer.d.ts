import Scene from "../../core/Scene";
import Timeline from "../timeline/Timeline";
import Emitter from "../events/Emitter";
import { IDrawerOptions } from "../types/drawer";
/**
 * Abstract Drawer
 *
 * @category Services.Drawer
 * @abstract
 * @class Drawer
 * @extends {Emitter<IDrawerEvents>}
 * @template IADrawerOptions
 * @template IDrawerEvents
 */
declare abstract class Drawer<IADrawerOptions extends IDrawerOptions, IDrawerEvents> extends Emitter<IDrawerEvents> {
    protected scene: Scene;
    protected resolution: number;
    protected ratio: number;
    protected animation_id: number | null;
    protected draw_id: number | null;
    protected redraw_id: number | null;
    protected drawerOptions: IADrawerOptions;
    protected timeline: Timeline;
    constructor(scene?: Scene | undefined, ratio?: number | undefined, resolution?: number, duration?: number, framerate?: number);
    /**
     * Set scene
     *
     * @param {Scene} scene
     */
    setScene(scene: Scene): void;
    /**
     * Return scene
     *
     * @return {*}  {Scene}
     */
    getScene(): Scene;
    /**
     * Return timeline
     *
     * @return {*}  {Timeline}
     */
    getTimeline(): Timeline;
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     */
    resize(width: number, height: number, ratio?: number, resolution?: number): void;
    /**
     * Resize by ratio
     *
     */
    setRatio(ratio: number): void;
    /**
     * Return drawer ratio
     */
    getRatio(): number;
    /**
     * Get resolution
     */
    getResolution(): number;
    /**
     * Get resolution of drawer
     */
    setResolution(resolution: number): void;
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     */
    getValueFromResolution(value: number): number;
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     */
    getValueFromResolutionScaled(value: number): number;
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | IADrawerOptions)} name
     */
    setOption<K extends keyof IADrawerOptions>(name: K | IADrawerOptions, value?: Required<IADrawerOptions>[K]): void;
    /**
     * Return option valie or default
     *
     * @template K
     * @param {K} name
     * @param {IADrawerOptions[K]} defaultValue
     */
    getOption<K extends keyof IADrawerOptions>(name: K, defaultValue: IADrawerOptions[K]): IADrawerOptions[K];
    /**
     * Return all options
     */
    getOptions(): IADrawerOptions;
    /**
     * Internal tick animation
     */
    private animate;
    /**
     * Start animation drawing
     */
    startAnimation(): void;
    /**
     * Stop animation drawing
     */
    stopAnimation(): void;
    /**
     * Pause animation drawing
     */
    pauseAnimation(): void;
    /**
     * Play animation drawing
     */
    playAnimation(): void;
    /**
     * Draw current scene
     *
     * @returns {number}
     */
    abstract draw(): number;
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    redraw(): void;
    /**
     * Each ghosts index and create drawerOptions to pass at the draw method
     *
     * @static
     * @template T
     * @param {T} drawerOptions
     * @param {Timeline} timeline
     * @param {((ghostDrawerOptions: T & { ghost_index?: number }) => any)} ghostCallback
     */
    static eachGhosts<T extends IDrawerOptions>(drawerOptions: T, timeline: Timeline, ghostCallback: (ghostDrawerOptions: T & {
        ghost_index?: number;
    }) => any): void;
    /**
     * Create color based on ghostMultiplier
     *
     * @static
     * @param {string} color
     * @param {number} ghostMultiplier
     * @return {*}  {(string | undefined)}
     */
    static ghostifyColor(color: string, ghostMultiplier: number): string | undefined;
}
export default Drawer;
//# sourceMappingURL=Drawer.d.ts.map