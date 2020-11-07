import { TStreamCallback } from "./types/scene";
import { ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings } from "./types/scene-child";
import { IBufferIndex, IShapeBounding } from "./types/shape-base";
import SceneChild from "./SceneChild";
/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @example
 * ```javascript
 * // Group example
 *
 * const rect = new Urpflanze.Rect({
 * 	distance: 100 // <- if a property is set the group will not overwrite it
 * })
 * const group = new Urpflanze.Group({
 * 	repetitions: 3,
 * 	distance: 200
 * })
 *
 * group.add(rect)
 * group.add(new Urpflanze.Triangle())
 * ```
 * @class Group
 */
declare class Group extends SceneChild {
    /**
     * a list of shapes or groups
     *
     * @internal
     * @ignore
     */
    private children;
    /**
     * Creates an instance of Group
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof Group
     */
    constructor(settings?: ISceneChildSettings);
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStatic(): boolean;
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStaticIndexed(): boolean;
    /**
     * Add item to Group
     *
     * @param {Array<SceneChild>} items
     * @memberof Group
     */
    add(...items: Array<SceneChild>): void;
    /**
     * Sort children
     *
     * @memberof Group
     */
    sortChildren(): void;
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    getChildren(): Array<SceneChild>;
    /**
     * Find scene child from id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(idOrName: number | string): SceneChild | null;
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    get(index: number): SceneChild | null;
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    remove(index: number): false | Array<SceneChild>;
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id: number | string): void;
    /**
     * Generate children buffers
     *
     * @param {number} generateId
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ISceneChildPropArguments} [parentPropArguments]
     * @memberof Group
     */
    generate(generateId: number, bDirectSceneChild?: boolean, parentPropArguments?: ISceneChildPropArguments): void;
    /**
     * Sum the children bounding
     *
     * @param {boolean} bDirectSceneChild
     * @return {IShapeBounding}
     */
    getBounding(bDirectSceneChild: boolean): IShapeBounding;
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    clearBuffer(bClearIndexed?: boolean, bPropagateToParents?: boolean): void;
    /**
     * Set a single or multiple props
     *
     * @abstract
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void;
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void;
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} propArguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(propArguments?: ISceneChildPropArguments): number;
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    getBuffer(): Float32Array | undefined;
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer(): Array<IBufferIndex> | undefined;
    /**
     * Call strem on children
     *
     * @param {TStreamCallback} callback
     * @memberof Group
     */
    stream(callback: TStreamCallback): void;
}
export default Group;
//# sourceMappingURL=Group.d.ts.map