import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
class Line extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        settings.bCloseShape = false;
        super(settings);
    }
}
export default Line;
//# sourceMappingURL=Line.js.map