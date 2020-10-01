import { ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces';
import ShapeBuffer from '@core/shapes/ShapeBuffer';
class Rect extends ShapeBuffer {
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1];
        settings.bAdaptBuffer = ShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Rect;
//# sourceMappingURL=Rect.js.map