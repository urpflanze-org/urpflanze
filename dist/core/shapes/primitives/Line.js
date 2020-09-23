import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
const LINE_BUFFER = Float32Array.from([-1, 0, 1, 0]);
class Line extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = LINE_BUFFER;
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Line;
//# sourceMappingURL=Line.js.map