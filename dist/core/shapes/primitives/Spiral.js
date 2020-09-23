import { aOr, clamp } from "../../Utilites";
import ShapeLoop from "../ShapeLoop";
import { ShapeLoopProps, ShapePrimitiveAdaptMode } from "../../interfaces/shapes/Interfaces";
class Spiral extends ShapeLoop {
    constructor(settings = {}) {
        var _a;
        settings.type = 'Spiral';
        settings.bCloseShape = false;
        settings.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : ShapePrimitiveAdaptMode.None;
        settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat([
            'twists',
            'twists_start',
            'spiral',
            'sideLength',
        ]);
        super(settings, true);
        this.props.spiral = aOr(settings.spiral, Spiral.types.ARCHIMEDE);
        this.props.twists = aOr(settings.twists, 2);
        this.props.twists_start = aOr(settings.twists_start, 0);
        this.loop = {
            start: (prop_arguments) => ShapeLoop.PI2 * this.getProp('twists_start', prop_arguments),
            end: (prop_arguments) => ShapeLoop.PI2 * (this.getProp('twists_start', prop_arguments) + this.getProp('twists', prop_arguments)),
            inc: (prop_arguments) => {
                const twists = this.getProp('twists', prop_arguments);
                const rep = ShapeLoop.PI2 * twists;
                const radius = 4 + Math.sqrt(this.sideLength[0] * this.sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: (angle, prop_arguments) => {
                const r = Spiral.getRFromSpiralType(this.getProp('spiral', prop_arguments), angle);
                return [r * Math.cos(angle), r * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    getProp(key, prop_arguments, defaul_value) {
        return super.getProp(key, prop_arguments, defaul_value);
    }
    setProp(key, value) {
        key = typeof key === 'string' ? { [key]: value } : key;
        if (('twists' in key || 'twists_start' in key) && this.props.loop) {
            this.props.loop.start = undefined;
            this.props.loop.end = undefined;
        }
        super.setProp(key, value);
    }
    static getRFromSpiralType(spiral, angle) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return angle / 10;
            case Spiral.types.HYPERBOLIC:
                return (1 / angle) * 3;
            case Spiral.types.FERMAT:
                return Math.pow(angle, 0.5) / 3;
            case Spiral.types.LITUUS:
                return Math.pow(angle, -0.5);
            case Spiral.types.LOGARITHMIC:
                return Math.pow(Math.E, (angle * 0.2)) / 10;
        }
        return 1;
    }
}
Spiral.types = {
    ARCHIMEDE: 'ARCHIMEDE',
    HYPERBOLIC: 'HYPERBOLIC',
    FERMAT: 'FERMAT',
    LITUUS: 'LITUUS',
    LOGARITHMIC: 'LOGARITHMIC',
};
export default Spiral;
//# sourceMappingURL=Spiral.js.map