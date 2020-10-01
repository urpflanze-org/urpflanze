import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from '@core/types/ShapeBase';
import { ShapeBaseProps, ShapeBaseSettings } from '@core/interfaces/shapes/Interfaces';
import SceneChild from '@core/SceneChild';
/**
 * Group used for add multiple SceneChild with same props
 *
 * @class Group
 * @category Core
 * @extends {SceneChild}
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
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Group
     */
    constructor(settings?: ShapeBaseSettings);
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
     * @param {ShapeBasePropArguments} [parent_prop_arguments]
     * @memberof Group
     */
    generate(indexing_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ShapeBasePropArguments): void;
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
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    setProp(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any): void;
    /**
     * Return length of buffer
     *
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(prop_arguments?: ShapeBasePropArguments): number;
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
     * @returns {(Array<ShapeBaseStreamIndexing> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer(): Array<ShapeBaseStreamIndexing> | undefined;
    /**
     * Call strem on children
     *
     * @param {(stream_arguments: ShapeBaseStreamArguments) => void} callback
     * @memberof Group
     */
    stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    /**
     * Index vertex buffer
     *
     * @private
     * @param {Array<ShapeBaseStreamIndexing>} buffer
     * @param {ShapeBaseStreamIndexing} [parent]
     * @memberof Group
     */
    index(buffer: Array<ShapeBaseStreamIndexing>, parent?: ShapeBaseStreamIndexing): void;
    /**
     *
     *
     * @private
     * @static
     * @param {SceneChild} itemToPropagate
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} value
     * @memberof Group
     */
    private static propagateProp;
    /**
     * Remove duplicate props
     *
     * @private
     * @static
     * @param {Group} group
     * @param {SceneChild} dest
     * @returns {ShapeBaseProps}
     * @memberof Group
     */
    private static removeIntersected;
}
export default Group;
//# sourceMappingURL=Group.d.ts.map