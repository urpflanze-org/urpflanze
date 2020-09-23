import ShapeLoop from "../ShapeLoop";
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
class RegularPolygon extends ShapeLoop {
    constructor(settings = {}) {
        var _a;
        settings.type = settings.type || 'RegularPolygon';
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideNumber']);
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : ShapePrimitiveAdaptMode.None;
        super(settings, true);
        this.props.sideNumber = settings.sideNumber;
        this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: (prop_arguments) => ShapeLoop.PI2 / this.getProp('sideNumber', prop_arguments, 5),
            vertex: angle => {
                return [Math.cos(angle), Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    setProp(key, value) {
        super.setProp(key, value);
    }
}
export default RegularPolygon;
//# sourceMappingURL=RegularPolygon.js.map