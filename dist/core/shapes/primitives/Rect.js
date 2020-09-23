import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
const RECT_BUFFER = Float32Array.from([-1, -1, 1, -1, 1, 1, -1, 1]);
class Rect extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = RECT_BUFFER;
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Rect;
//# sourceMappingURL=Rect.js.map