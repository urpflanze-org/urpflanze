import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
const TRIANGLE_BUFFER = Float32Array.from([-1, -1, 1, 0, -1, 1]);
class Triangle extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = TRIANGLE_BUFFER;
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Triangle;
//# sourceMappingURL=Triangle.js.map