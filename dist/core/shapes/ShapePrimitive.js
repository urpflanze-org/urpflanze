import ShapeBase from "./ShapeBase";
import { ShapePrimitiveProps, ShapePrimitiveSettings, ShapeBaseProps, ShapePrimitiveAdaptMode, } from "../interfaces/shapes/Interfaces";
import { aOr } from "../Utilites";
import Vec2, { TArray } from "../math/Vec2";
class ShapePrimitive extends ShapeBase {
    constructor(settings = {}) {
        var _a, _b;
        super(settings);
        this.props.sideLength = aOr(settings.sideLength, [50, 50]);
        this.sideLength = Vec2.create(aOr(settings.sideLength, [50, 50]));
        this.props.fillColor = settings.fillColor;
        this.props.lineWidth = settings.lineWidth;
        this.props.strokeColor = settings.strokeColor;
        this.bAdaptBuffer = (_a = settings.bAdaptBuffer) !== null && _a !== void 0 ? _a : ShapePrimitiveAdaptMode.None;
        this.bCloseShape = (_b = settings.bCloseShape) !== null && _b !== void 0 ? _b : true;
        this.vertexCallback = settings.vertexCallback;
    }
    isStatic() {
        return (typeof this.props.sideLength !==
            'function' &&
            super.isStatic());
    }
    getProp(key, prop_arguments, default_value) {
        return super.getProp(key, prop_arguments, default_value);
    }
    bindSideLength(prop_arguments) {
        this.sideLength = Vec2.create(this.getProp('sideLength', prop_arguments, [50, 50]));
    }
    applyVertexTransform(vertex) {
        vertex[0] *= this.sideLength[0];
        vertex[1] *= this.sideLength[1];
    }
    isClosed() {
        return this.bCloseShape;
    }
    setClosed(bCloseShape) {
        this.bCloseShape = bCloseShape;
    }
    isAdapted() {
        return this.bAdaptBuffer;
    }
    setAdapted(bAdapted) {
        this.bAdaptBuffer = bAdapted;
        this.clearBuffer(true);
    }
    addIndex(buffer, frame_length, current_repetition, parent) {
        const current = {
            shape: this,
            buffer_length: frame_length,
            parent,
            repetition: current_repetition,
        };
        buffer.push(current);
    }
    static getBounding(buffer) {
        let minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            const x = buffer[i];
            const y = buffer[i + 1];
            if (x > maxX)
                maxX = x;
            else if (x < minX)
                minX = x;
            if (y > maxY)
                maxY = y;
            else if (y < minY)
                minY = y;
        }
        return {
            x: minX,
            y: minY,
            cx: (minX + maxX) / 2,
            cy: (minY + maxY) / 2,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    static adaptBuffer(input, mode) {
        if (mode == ShapePrimitiveAdaptMode.None)
            return input;
        const output = new Float32Array(input.length);
        const rect = ShapePrimitive.getBounding(input);
        let scale = rect.width > 2 || rect.height > 2 || (mode >= ShapePrimitiveAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        let translateX = mode >= ShapePrimitiveAdaptMode.Center ? rect.cx : 0;
        let translateY = mode >= ShapePrimitiveAdaptMode.Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
}
export default ShapePrimitive;
//# sourceMappingURL=ShapePrimitive.js.map