import { EShapePrimitiveAdaptMode } from "../../types/shape-base";
import ShapeBuffer from "../ShapeBuffer";
/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends ShapeBuffer {
    /**
     * Creates an instance of Line.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.bAdaptBuffer = EShapePrimitiveAdaptMode.None;
        settings.bCloseShape = false;
        super(settings);
    }
}
export default Line;
//# sourceMappingURL=Line.js.map