import ShapeLoop from "../ShapeLoop";
class Heart extends ShapeLoop {
    constructor(settings = {}) {
        settings.type = 'Heart';
        super(settings, true);
        this.loop = {
            start: 0,
            end: ShapeLoop.PI2,
            inc: prop_arguments => {
                return 1 / Math.pow(this.sideLength[0] * this.sideLength[1], 0.25);
            },
            vertex: (angle, prop_arguments) => {
                return [
                    (5 * (0.75 * Math.sin(angle)) - 1.2 * Math.sin(3 * angle)) * 0.2,
                    (-4 * Math.cos(angle) + 1.2 * Math.cos(2 * angle) + 0.7 * Math.cos(3 * angle) + 0.2 * Math.cos(4 * angle)) *
                        0.2,
                ];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
}
export default Heart;
//# sourceMappingURL=Heart.js.map