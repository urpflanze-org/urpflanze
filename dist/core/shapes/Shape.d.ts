import ShapeBase from '@core/shapes/ShapeBase';
import { ShapeSettings } from '@core/interfaces/shapes/Interfaces';
import SceneChild from '@core/SceneChild';
import { ShapeBasePropArguments, ShapeBaseStreamIndexing, Repetition } from '@core/types/ShapeBase';
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
    constructor(settings?: ShapeSettings);
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
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {number}
     * @memberof Shape
     */
    getBufferLength(prop_arguments: ShapeBasePropArguments): number;
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generate_id
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    protected generateBuffer(generate_id: number, prop_arguments: ShapeBasePropArguments): Float32Array;
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
     * @param {Array<ShapeBaseStreamIndexing>} buffer
     * @param {number} frame_length
     * @param {Repetition} current_repetition
     * @param {ShapeBaseStreamIndexing} [parent]
     * @memberof ShapePrimitive
     */
    protected addIndex(buffer: Array<ShapeBaseStreamIndexing>, frame_length: number, current_repetition: Repetition, parent?: ShapeBaseStreamIndexing): void;
}
export default Shape;
//# sourceMappingURL=Shape.d.ts.map