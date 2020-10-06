import { EShapePrimitiveAdaptMode } from "../../types/shape-base";
import ShapeBuffer from "../ShapeBuffer";
/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle extends ShapeBuffer {
    /**
     * Creates an instance of Triangleeee.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Triangle
     */
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = [-1, -1, 1, 0, -1, 1];
        settings.adaptMode = EShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Triangle;
//# sourceMappingURL=Triangle.js.map