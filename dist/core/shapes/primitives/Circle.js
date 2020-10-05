import ShapeLoop from "../ShapeLoop";
import { EShapePrimitiveAdaptMode } from "../../types/shape-base";
/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle extends ShapeLoop {
    /**
     * Creates an instance of Circle.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    constructor(settings = {}) {
        var _a;
        settings.type = 'Circle';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideLength']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : EShapePrimitiveAdaptMode.Scale;
        super(settings);
        this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: () => (1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25)) * ShapeLoop.PId2,
            vertex: angle => [Math.cos(angle), Math.sin(angle)],
        };
    }
}
export default Circle;
//# sourceMappingURL=Circle.js.map