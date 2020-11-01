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
     * @memberof SceneChild
     */
    scene?: Scene;
    /**
     * The unique id
     *
     * @type {number | string}
     * @memberof SceneChild
     */
    id: number | string;
    /**
     * The human readable name
     *
     * @type {string}
     * @memberof SceneChild
     */
    name: string;
    /**
     * The human readable type label
     *
     * @type {string}
     * @memberof SceneChild
     */
    type: string;
    /**
     * The number that refers to the drawinf order
     *
     * @type {number}
     * @memberof SceneChild
     */
    order: number;
    /**
     * The basic properties
     *
     * @protected
     * @type {ISceneChildProps}
     * @memberof SceneChild
     */
    protected props: ISceneChildProps;
    /**
     * Custom client data
     *
     * @type {*}
     * @memberof ShapeBase
     */
    data: any;
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     * @memberof SceneChild
     */
    constructor(settings: ISceneChildSettings);
    /**
     * With this method it is possible to check if the buffer will be generated at each update
     *
     * @abstract
     * @returns {boolean}
     * @memberof SceneChild
     */
    abstract isStatic(): boolean;
    /**
     * With this method you can check if the streaming buffer will be generated at each update
     *
     * @abstract
     * @returns {boolean}
     * @memberof SceneChild
     */
    abstract isStaticIndexed(): boolean;
    /**
     * Find this or form or children.
     * Overridden by classes that extend it
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     * @memberof SceneChild
     */
    find(idOrName: string | number): SceneChild | null;
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     * @memberof SceneChild
     */
    getProps(): ISceneChildProps;
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof SceneChild
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
     * @memberof SceneChild
     */
    abstract setProp<K extends keyof ISceneChildProps>(key: K | ISceneChildProps, value?: ISceneChildProps[K], bClearIndexed?: boolean): void;
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
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
     * @memberof SceneChild
     */
    abstract generate(generateId: number, bDirectSceneChild: boolean, parentPropArguments?: ISceneChildPropArguments): void;
    /**
     * Get buffer bounding
     *
     * @abstract
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     * @memberof SceneChild
     */
    abstract getBounding(bDirectSceneChild: boolean): IShapeBounding;
    /**
     * Stream shape
     * Best explained in ShapeBase
     *
     * @abstract
     * @param {TStreamCallback} callback
     * @memberof SceneChild
     */
    abstract stream(callback: TStreamCallback): void;
    /**
     * Return buffer of vertext if is generated
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    abstract getBuffer(): Float32Array | undefined;
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof ShapeBase
     */
    abstract getIndexedBuffer(): Array<IBufferIndex> | undefined;
    /**
     * Get length of buffer
     *
     * @abstract
     * @param {ISceneChildPropArguments} [propArguments]
     * @returns {number}
     * @memberof SceneChild
     */
    abstract getBufferLength(propArguments?: ISceneChildPropArguments): number;
    /**
     * Clear buffer
     *
     * @abstract
     * @param {boolean} [bClearIndexed]
     * @param {boolean} [bPropagateToParents]
     * @memberof SceneChild
     */
    abstract clearBuffer(bClearIndexed: boolean, bPropagateToParents: boolean): void;
}
export default SceneChild;
//# sourceMappingURL=SceneChild.d.ts.map