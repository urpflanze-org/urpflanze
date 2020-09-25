import { ShapeBufferSettings, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
import ShapeBuffer from "../ShapeBuffer";
class Rect extends ShapeBuffer {
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1];
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Rect;
//# sourceMappingURL=Rect.js.map