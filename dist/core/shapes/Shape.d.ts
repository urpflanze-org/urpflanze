import ShapeBase from '@core/shapes/ShapeBase';
import SceneChild from '@core/SceneChild';
import { IShapeSettings } from '@core/types/shape-base';
import { IRepetition, ISceneChildPropArguments, ISceneChildStreamIndexing } from '@core/types/scene-child';
declare class Shape extends ShapeBase {
    /**
     * child shape
     *
     * @type {(SceneChild)}
     * @memberof ShapeBase
     */
    shape?: SceneChild;
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     * @memberof Shape
     */
    constructor(settings?: IShapeSettings);
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStatic(): boolean;
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     * @memberof Shape
     */
    isStaticIndexed(): boolean;
    /**
     * Find shape by id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Shape
     */
    find(id_or_name: number | string): SceneChild | null;
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Shape
     */
    getBufferLength(prop_arguments: ISceneChildPropArguments): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generate_id: number, prop_arguments: ISceneChildPropArguments): Float32Array;
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     * @memberof ShapeBase
     */
    setShape(shape: SceneChild | undefined): void;
    /**
     *
     *
     * @protected
     * @param {Array<ISceneChildStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ISceneChildStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    protected addIndex(buffer: Array<ISceneChildStreamIndexing>, frame_length: number, current_repetition: IRepetition, parent?: ISceneChildStreamIndexing): void;
}
export default Shape;
//# sourceMappingURL=Shape.d.ts.map