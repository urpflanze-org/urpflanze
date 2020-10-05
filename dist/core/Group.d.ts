import { TStreamCallback } from "./types/scene";
import { ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings, ISceneChildStreamIndexing } from "./types/scene-child";
import SceneChild from "./SceneChild";
/**
 * Group used for add multiple SceneChild with same props
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @class Group
 */
declare class Group extends SceneChild {
    /**
     * a list of shapes or groups
     *
     * @type {Array<SceneChild>}
     * @memberof Group
     */
    children: Array<SceneChild>;
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
    add(item: SceneChild): void;
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
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(id_or_name: number | string): SceneChild | null;
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
     * @param {number} indexing_id
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof Group
     */
    generate(indexing_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ISceneChildPropArguments): void;
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
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(prop_arguments?: ISceneChildPropArguments): number;
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
     * @returns {(Array<ISceneChildStreamIndexing> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer(): Array<ISceneChildStreamIndexing> | undefined;
    /**
     * Call strem on children
     *
     * @param {TStreamCallback} callback
     * @memberof Group
     */
    stream(callback: TStreamCallback): void;
    /**
     * Index vertex buffer
     *
     * @private
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof Group
     */
    index(buffer: Array<ISceneChildStreamIndexing>, parent?: ISceneChildStreamIndexing): void;
}
export default Group;
//# sourceMappingURL=Group.d.ts.map