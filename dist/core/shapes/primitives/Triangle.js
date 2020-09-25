import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
class Triangle extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = [-1, -1, 1, 0, -1, 1];
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Triangle;
//# sourceMappingURL=Triangle.js.map