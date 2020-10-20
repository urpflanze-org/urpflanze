import SceneChild from "../../core/SceneChild";
import Scene from "../../core/Scene";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { TSceneChildProps } from "../types/scene-utilities";
export declare type SceneChildInstance = new (props: any) => SceneChild;
/**
 *
 * @category Services.SceneUtilities
 * @class SceneUtilities
 */
declare class SceneUtilities {
    private registeredSceneChilds;
    constructor();
    /**
     * Return a list of name of registered sceneChild
     *
     * @returns {Array<string>}
     * @memberof SceneUtilities
     */
    getRegistered(): Array<string>;
    /**
     * Register scene child for fast creation
     *
     * @param {string} type
     * @param {SceneChildInstance} ref
     * @memberof SceneUtilities
     */
    register(type: string, ref: SceneChildInstance): void;
    /**
     * unregister scene child
     *
     * @param {string} type
     * @memberof SceneUtilities
     */
    unregister(type: string): void;
    /**
     * Logic creation of a SceneChild
     * Since scene is not passed, name are set if they are present in args or type
     *
     *
     * @param {(string | SceneChild)} item
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    create(item: string | SceneChild, props?: TSceneChildProps, scene?: Scene, drawer?: DrawerCanvas): SceneChild | null;
    /**
     * Return number of element from a type
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    getCountSceneChildOfType(scene: Scene, type: string): number;
    /**
     * Return a copy of sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @param {boolean} [strict]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    copy(sceneChild: SceneChild, scene?: Scene, drawer?: DrawerCanvas, strict?: boolean): SceneChild | null;
    /**
     * Add scene child to parent.
     * Create a group if parent is Shape and has one element (not Group) inside.
     *
     * @param {(SceneChild | Scene)} parent
     * @param {(string | SceneChild)} sceneChild
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    add(parent: SceneChild | Scene, sceneChild: string | SceneChild, props?: TSceneChildProps, scene?: Scene): SceneChild | null;
    /**
     * Remove scene child from
     *
     * @param {SceneChild} from
     * @param {SceneChild} [item]
     * @memberof SceneUtilities
     */
    remove(from: SceneChild, item?: SceneChild): void;
    /**
     * Get Root parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    getRootParent(sceneChild: SceneChild): SceneChild | null;
    /**
     * Get first level parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    getParent(sceneChild: SceneChild): SceneChild | null;
    /**
     * Get all parents
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getParents(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Return children of a shape.
     * Only Group has array of children, Shape has only one child.
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getChildren(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Return only primitive children
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    getChildrenPrimitives(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Return a list of neighbors
     *
     * @param {SceneChild} sceneChild
     * @returns {(Array<SceneChild>)}
     * @memberof SceneUtilities
     */
    getNeighbors(sceneChild: SceneChild): Array<SceneChild>;
    /**
     * Return a number of element type into a scene
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    getCountOfSceneChildType(scene: Scene, type: string): number;
    /**
     * Walk through sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {(child: SceneChild) => void} callback
     * @memberof SceneUtilities
     */
    walk(sceneChild: SceneChild, callback: (child: SceneChild) => void): void;
    /**
     * Check sceneChild is Group
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    isGroup(sceneChild: SceneChild): boolean;
    /**
     * Check sceneChild are Shape and has a child
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasShapeChild(sceneChild: SceneChild): boolean;
    /**
     * Check sceneChild is a ShapeBuffer an are binded
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasShapeBuffer(sceneChild: SceneChild): boolean;
    /**
     * Check scene child is a Primitive
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    isAPrimitive(sceneChild: SceneChild): boolean;
    /**
     * Check scene child is a ShapeLoop
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    hasLoop(sceneChild: SceneChild): boolean;
    /**
     * Set UISceneChild prop, convert animation on transformable props
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {*} value
     * @param {DrawerCanvas} drawer
     * @memberof SceneUtilities
     */
    setProp(sceneChild: SceneChild, name: string, value: any, drawer: DrawerCanvas): void;
}
declare const _default: SceneUtilities;
export default _default;
//# sourceMappingURL=SceneUtilities.d.ts.map