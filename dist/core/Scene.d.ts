import { TStreamCallback, ISceneSettings } from "./types/scene";
import SceneChild from "./SceneChild";
/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
declare class Scene {
    /**
     * Logical number, the drawer will take care
     * of defining the unit of measure
     */
    width: number;
    /**
     * Logical number, the drawer will take care
     * of defining the unit of measure
     */
    height: number;
    /**
     * Refers to the central point of the scene
     */
    center: [number, number];
    /**
     * Default background color (black)
     */
    background: string;
    /**
     * Default ScenePrimitive stroke color (white)
     */
    mainColor: string;
    /**
     * Current time
     */
    current_time: number;
    /**
     * A list of children added to scene
     *
     * @ignore
     */
    private children;
    /**
     * Creates an instance of Scene.
     * You can see the default values ​​in the property definitions
     */
    constructor(settings?: ISceneSettings);
    /**
     * Resize the scene size
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width: number, height?: number): void;
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [at_time] time in ms
     * @memberof Scene
     */
    update(at_time: number): void;
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {TStreamCallback} callback
     * @memberof Scene
     */
    stream(callback: TStreamCallback): void;
    /**
     * Return a list of children
     *
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getChildren(): Array<SceneChild>;
    /**
     * Add SceneChild to Scene, pass `order` for drawing priorities
     *
     * @param {SceneChild} item
     * @param {number} [order]
     * @memberof Scene
     */
    add(item: SceneChild, order?: number): void;
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    sortChildren(): void;
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(id_or_name: string | number): SceneChild | null;
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index: number): SceneChild | null;
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index: number): void;
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    removeChildren(): void;
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} id_or_name
     * @memberof Scene
     */
    removeFromId(id_or_name: number | string): void;
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    isFirstLevelChild(sceneChild: SceneChild): boolean;
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getParentsOfSceneChild(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
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
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    static walk(callback: (sceneChild: SceneChild) => boolean | void, current: Scene | SceneChild): boolean | void;
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(sceneChild: SceneChild, scene: Scene): void;
}
export default Scene;
//# sourceMappingURL=Scene.d.ts.map