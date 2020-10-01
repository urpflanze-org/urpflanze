import { ShapeBaseStreamArguments } from '@core/types/ShapeBase';
import SceneSettingsInterface from '@core/interfaces/SceneInterface';
import SceneChild from '@core/SceneChild';
import { TArray } from './math/Vec2';
/**
 * Scene
 *
 * @class Scene
 */
declare class Scene {
    /**
     * Scene width
     *
     * @type {number}
     * @memberof Scene
     */
    width: number;
    /**
     * Scene height
     *
     * @type {number}
     * @memberof Scene
     */
    height: number;
    /**
     * The center of scene
     *
     * @type {TArray}
     * @memberof Scene
     */
    center: TArray;
    /**
     * Scene Background
     *
     * @type {string}
     * @memberof Scene
     */
    background: string;
    /**
     * Scene main color (defaul: stroke)
     *
     * @type {string}
     * @memberof Scene
     */
    mainColor: string;
    /**
     * Update start time
     *
     * @private
     * @type {number}
     * @memberof Scene
     */
    private start_time;
    /**
     * Current time
     *
     * @type {number}
     * @memberof Scene
     */
    current_time: number;
    /**
     * A list of children added to scene
     *
     * @private
     * @type {Array<SceneChild>}
     * @memberof Scene
     */
    private children;
    /**
     * Creates an instance of Scene.
     *
     * @param {SceneSettingsInterface} [settings={}]
     * @memberof Scene
     */
    constructor(settings?: SceneSettingsInterface);
    /**
     * Resize scene
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width: number, height?: number): void;
    /**
     * Update scene an children
     *
     * @param {number} [at_time] time in ms
     * @memberof Scene
     */
    update(at_time?: number): void;
    /**
     * Clear all scene items buffer
     *
     * @memberof Scene
     */
    clearAllBuffers(): void;
    /**
     * Stream children for draw (called after update)
     *
     * @param {(stream_arguments: ShapeBaseStreamArguments) => boolean | void} callback
     * @memberof Scene
     */
    stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    /**
     * Return a list of children
     *
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getChildren(): Array<SceneChild>;
    /**
     * Add shpe to scene
     *
     * @param {SceneChild} item
     * @param {number} [order]
     * @memberof Scene
     */
    add(item: SceneChild, order?: number): void;
    /**
     * Sort children
     *
     * @memberof Scene
     */
    sortChildren(): void;
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    isFirstLevelChild(sceneChild: SceneChild): boolean;
    /**
     * Find scene child from id
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(id_or_name: string | number): SceneChild | null;
    /**
     * Get shape from index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index: number): SceneChild | null;
    /**
     * Remove a shape
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index: number): void;
    /**
     * Remove all children
     *
     * @memberof Scene
     */
    clearChildren(): void;
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id: number | string): void;
    /**
     * Return a list of parents of sceneChild
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getParentsOfSceneChild(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Return a list of parents of sceneChild
     *
     * @static
     * @param {(Scene | SceneChild)} current
     * @param {SceneChild} sceneChild
     * @param {(Array<SceneChild | Scene>)} [parents=[]]
     * @returns {(Array<SceneChild | Scene> | null)}
     * @memberof Scene
     */
    static getParentsOfSceneChild(current: Scene | SceneChild, sceneChild: SceneChild, parents?: Array<SceneChild | Scene>): Array<SceneChild | Scene> | null;
    /**
     * Walk through scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    static walk(callback: (sceneChild: SceneChild) => boolean | void, current: Scene | SceneChild): boolean | void;
    /**
     * Propagate scene to child
     *
     * @static
     * @param {SceneChild} child
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(child: SceneChild, scene: Scene): void;
}
export default Scene;
//# sourceMappingURL=Scene.d.ts.map