import ShapeLoop from '../ShapeLoop';
import { ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces';
/**
 * Spiral shape
 *
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends ShapeLoop {
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings = {}) {
        var _a, _b, _c, _d;
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
        this.props.spiral = (_b = settings.spiral) !== null && _b !== void 0 ? _b : Spiral.types.ARCHIMEDE;
        this.props.twists = (_c = settings.twists) !== null && _c !== void 0 ? _c : 2;
        this.props.twists_start = (_d = settings.twists_start) !== null && _d !== void 0 ? _d : 0;
        this.loop = {
            start: (prop_arguments) => ShapeLoop.PI2 * this.getProp('twists_start', prop_arguments),
            end: (prop_arguments) => ShapeLoop.PI2 * (this.getProp('twists_start', prop_arguments) + this.getProp('twists', prop_arguments)),
            inc: (prop_arguments) => {
                // const twists = this.getProp('twists', prop_arguments)
                // const rep = ShapeLoop.PI2 * twists
                // const radius = 2 * Math.sqrt(this.sideLength[0] * this.sideLength[1])
                // return rep / (radius)
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
    /**
     * Get property value
     *
     * @param {keyof SpiralProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [defaul_value]
     * @returns {*}
     * @memberof Spiral
     */
    getProp(key, prop_arguments, defaul_value) {
        return super.getProp(key, prop_arguments, defaul_value);
    }
    /**
     * Set single or multiple props
     *
     * @param {(keyof SpiralProps | SpiralSettings)} key
     * @param {*} [value]
     * @memberof Spiral
     */
    setProp(key, value) {
        key = typeof key === 'string' ? { [key]: value } : key;
        if (('twists' in key || 'twists_start' in key) && this.props.loop) {
            this.props.loop.start = undefined;
            this.props.loop.end = undefined;
        }
        super.setProp(key, value);
    }
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {SpiralType} spiral
     * @param {number} angle
     * @returns {number}
     * @memberof Spiral
     */
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
/**
 * Spural types
 *
 * @static
 * @type {{ [name in SpiralType]: SpiralType }}
 * @memberof Spiral
 */
Spiral.types = {
    ARCHIMEDE: 'ARCHIMEDE',
    HYPERBOLIC: 'HYPERBOLIC',
    FERMAT: 'FERMAT',
    LITUUS: 'LITUUS',
    LOGARITHMIC: 'LOGARITHMIC',
};
export default Spiral;
//# sourceMappingURL=Spiral.js.map