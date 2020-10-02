import { EShapePrimitiveAdaptMode } from '@core/types/shape-base';
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
        settings.bAdaptBuffer = EShapePrimitiveAdaptMode.None;
        super(settings);
    }
}
export default Rect;
//# sourceMappingURL=Rect.js.map