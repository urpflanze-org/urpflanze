import { ShapeBasePropArguments, ShapeBaseStreamArguments, ShapeBaseStreamIndexing } from '@core/types/ShapeBase';
import { ShapeBaseProps } from '@core/interfaces/shapes/Interfaces';
import Scene from '@core/Scene';
import SceneChildInterface from './interfaces/SceneChildInterface';
/**
 * Item to added into scene
 *
 * @abstract
 * @class SceneChild
 */
declare abstract class SceneChild {
    /**
     * Reference to scene
     *
     * @type {Scene}
     * @memberof SceneChild
     */
    scene?: Scene;
    /**
     * Item id
     *
     * @type {number | string}
     * @memberof SceneChild
     */
    id: number | string;
    /**
     * item name
     *
     * @type {string}
     * @memberof SceneChild
     */
    name: string;
    /**
     * item type
     *
     * @type {string}
     * @memberof SceneChild
     */
    type: string;
    /**
     * item order (like z-index)
     *
     * @type {number}
     * @memberof SceneChild
     */
    order: number;
    /**
     * Item props
     *
     * @protected
     * @type {ShapeBaseProps}
     * @memberof SceneChild
     */
    protected props: ShapeBaseProps;
    /**
     * Custom client data
     *
     * @type {*}
     * @memberof ShapeBase
     */
    data: any;
    /**
     * Creates an instance of SceneChild.
     *
     * @param {SceneChildInterface} settings
     * @memberof SceneChild
     */
    constructor(settings: SceneChildInterface);
    /**
     * Check shape is static
     *
     * @abstract
     * @returns {boolean}
     * @memberof SceneChild
     */
    abstract isStatic(): boolean;
    /**
     * Checkk shape has static index
     *
     * @abstract
     * @returns {boolean}
     * @memberof SceneChild
     */
    abstract isStaticIndexed(): boolean;
    /**
     * Find this or shape children
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof SceneChild
     */
    find(id_or_name: string | number): SceneChild | null;
    /**
     * Item props
     *
     * @returns {ShapeBaseProps}
     * @memberof SceneChild
     */
    getProps(): ShapeBaseProps;
    /**
     * Return a prop
     *
     * @param {keyof ShapeBaseProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof SceneChild
     */
    getProp(key: keyof ShapeBaseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * Set a single or multiple props and clear buffer if shape vertex depends from prop
     *
     * @abstract
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed]
     * @memberof SceneChild
     */
    abstract setProp(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any, bClearIndexed?: boolean): void;
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key: keyof ShapeBaseProps | ShapeBaseProps, value?: any): void;
    /**
     * Generate shape
     *
     * @abstract
     * @param {number} generate_id
     * @param {boolean} [bDirectSceneChild]
     * @param {ShapeBasePropArguments} [parent_prop_arguments]
     * @memberof SceneChild
     */
    abstract generate(generate_id: number, bDirectSceneChild?: boolean, parent_prop_arguments?: ShapeBasePropArguments): void;
    /**
     * Stream shape
     *
     * @abstract
     * @param {(stream_arguments: ShapeBaseStreamArguments) =>  void} callback
     * @memberof SceneChild
     */
    abstract stream(callback: (stream_arguments: ShapeBaseStreamArguments) => void): void;
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    abstract getBuffer(): Float32Array | undefined;
    /**
     * Return indexed buffer
     *
     * @returns {(Array<ShapeBaseStreamIndexing> | undefined)}
     * @memberof ShapeBase
     */
    abstract getIndexedBuffer(): Array<ShapeBaseStreamIndexing> | undefined;
    /**
     * Get length of buffer
     *
     * @abstract
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @returns {number}
     * @memberof SceneChild
     */
    abstract getBufferLength(prop_arguments?: ShapeBasePropArguments): number;
    /**
     * Clear buffer
     *
     * @abstract
     * @param {boolean} [bClearIndexed]
     * @param {boolean} [bPropagateToParents]
     * @memberof SceneChild
     */
    abstract clearBuffer(bClearIndexed: boolean, bPropagateToParents: boolean): void;
    /**
     * Index buffer
     *
     * @abstract
     * @param {Array<ShapeBaseStreamIndexing>} buffer
     * @param {ShapeBaseStreamIndexing} [parent]
     * @memberof SceneChild
     */
    abstract index(buffer: Array<ShapeBaseStreamIndexing>, parent?: ShapeBaseStreamIndexing): void;
}
export default SceneChild;
//# sourceMappingURL=SceneChild.d.ts.map