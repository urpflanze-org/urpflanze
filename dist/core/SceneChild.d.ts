import { TStreamCallback } from "./types/scene";
import { ISceneChildPropArguments, ISceneChildProps, ISceneChildSettings } from "./types/scene-child";
import { IBufferIndex, IShapeBounding } from "./types/shape-base";
import Scene from "./Scene";
/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
declare abstract class SceneChild {
    /**
     * Reference of the scene to which it is attached
     *
     * @type {Scene}
     */
    scene?: Scene;
    /**
     * The unique id
     *
     * @type {number | string}
     */
    id: number | string;
    /**
     * The human readable name
     *
     * @type {string}
     */
    name: string;
    /**
     * The human readable type label
     *
     * @type {string}
     */
    type: string;
    /**
     * The number that refers to the drawinf order
     *
     * @type {number}
     */
    order: number;
    /**
     * The basic properties
     *
     * @protected
     * @type {ISceneChildProps}
     */
    protected props: ISceneChildProps;
    /**
     * Custom client data
     *
     * @type {*}
     */
    data: any;
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     */
    constructor(settings: ISceneChildSettings);
    /**
     * With this method it is possible to check if the buffer will be generated at each update
     *
     * @abstract
     * @returns {boolean}
     */
    abstract isStatic(): boolean;
    /**
     * With this method you can check if the streaming buffer will be generated at each update
     *
     * @abstract
     * @returns {boolean}
     */
    abstract isStaticIndexed(): boolean;
    /**
     * Find this or form or children.
     * Overridden by classes that extend it
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     */
    find(idOrName: string | number): SceneChild | null;
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     */
    getProps(): ISceneChildProps;
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    getProp(key: keyof ISceneChildProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any;
    /**
     * Set a single or multiple props and clear buffer if shape vertex depends from prop
     *
     * @abstract
     * @template K
     * @param {(K | ISceneChildProps)} key
     * @param {ISceneChildProps[K]} [value]
     * @param {boolean} [bClearIndexed]
     */
    abstract setProp<K extends keyof ISceneChildProps>(key: K | ISceneChildProps, value?: ISceneChildProps[K], bClearIndexed?: boolean): void;
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     */
    setPropUnsafe(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void;
    /**
     * Generate shape.
     * Best explained in <a href="[base_url]/ShapeBase">ShapeBase</a>
     *
     * @abstract
     * @param {number} generateId
     * @param {boolean} bDirectSceneChild
     * @param {ISceneChildPropArguments} parentPropArguments
     */
    abstract generate(generateId: number, bDirectSceneChild: boolean, parentPropArguments?: ISceneChildPropArguments): void;
    /**
     * Get buffer bounding
     *
     * @abstract
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding }
     */
    abstract getBounding(bDirectSceneChild: boolean): IShapeBounding;
    /**
     * Stream shape
     * Best explained in ShapeBase
     *
     * @abstract
     * @param {TStreamCallback} callback
     */
    abstract stream(callback: TStreamCallback): void;
    /**
     * Return buffer of vertext if is generated
     *
     * @returns {(Float32Array | undefined)}
     */
    abstract getBuffer(): Float32Array | undefined;
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     */
    abstract getIndexedBuffer(): Array<IBufferIndex> | undefined;
    /**
     * Get length of buffer
     *
     * @abstract
     * @param {ISceneChildPropArguments} [propArguments]
     * @returns {number}
     */
    abstract getBufferLength(propArguments?: ISceneChildPropArguments): number;
    /**
     * Clear buffer
     *
     * @abstract
     * @param {boolean} [bClearIndexed]
     * @param {boolean} [bPropagateToParents]
     */
    abstract clearBuffer(bClearIndexed: boolean, bPropagateToParents: boolean): void;
}
export default SceneChild;
//# sourceMappingURL=SceneChild.d.ts.map