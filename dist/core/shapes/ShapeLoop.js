var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import ShapePrimitive from "./ShapePrimitive";
import ShapeBase from "./ShapeBase";
import { EShapePrimitiveAdaptMode, IShapePrimitiveProps } from "../types/shape-base";
import Bounding, { TTempBounding } from "../math/bounding";
/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
var ShapeLoop = /** @class */ (function (_super) {
    __extends(ShapeLoop, _super);
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     * @memberof ShapeLoop
     */
    function ShapeLoop(settings, bPreventGeneration) {
        if (settings === void 0) { settings = {}; }
        if (bPreventGeneration === void 0) { bPreventGeneration = false; }
        var _this = this;
        settings.type = settings.type || 'ShapeLoop';
        _this = _super.call(this, settings) || this;
        _this.loopDependencies = settings.loopDependencies || [];
        _this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            _this.loop = {
                start: 0,
                end: ShapeLoop.PI2,
                inc: ShapeLoop.PI2 / 10,
                vertex: function () { return [0, 0]; },
            };
            _this.bStaticLoop = _this.isStaticLoop();
            _this.bStatic = _this.isStatic();
            _this.bStaticIndexed = _this.isStaticIndexed();
        }
        return _this;
    }
    /**
     * Check if currentOrSingleLoopBuffer is static
     *
     * @returns {boolean}
     * @memberof ShapeLoop
     */
    ShapeLoop.prototype.isStaticLoop = function () {
        if (this.loopDependencies.includes('propArguments'))
            return false;
        for (var i = 0, len = this.loopDependencies.length; i < len; i++)
            if (typeof this.props[this.loopDependencies[i]] === 'function')
                return false;
        return true;
    };
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof Shape
     */
    ShapeLoop.prototype.isStatic = function () {
        return this.bStaticLoop && _super.prototype.isStatic.call(this);
    };
    /**
     * Check if shape has static indexed
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    ShapeLoop.prototype.isStaticIndexed = function () {
        return this.bStaticLoop && _super.prototype.isStaticIndexed.call(this);
    };
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof ShapeLoop
     */
    ShapeLoop.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        _super.prototype.clearBuffer.call(this, bClearIndexed, bPropagateToParents);
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.currentOrSingleLoopBuffer = undefined;
        }
    };
    /**
     * Set single or multiple props
     *
     * @param {(keyof IShapeLoopProps | IShapeLoopProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeLoop
     */
    ShapeLoop.prototype.setProp = function (key, value) {
        var _a;
        var bClearIndexed = false;
        key = typeof key === 'string' ? (_a = {}, _a[key] = value, _a) : key;
        for (var i = this.loopDependencies.length - 1; i >= 0; i--) {
            if (this.loopDependencies[i] in key) {
                // this.props.loop = undefined
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in key) {
            key.loop = __assign(__assign({}, this.props.loop), key.loop);
            bClearIndexed = true;
        }
        _super.prototype.setProp.call(this, key, value, bClearIndexed);
    };
    /**
     * Get prop
     *
     * @param {keyof IShapeLoopProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof ShapeLoop
     */
    ShapeLoop.prototype.getProp = function (key, propArguments, defaultValue) {
        return _super.prototype.getProp.call(this, key, propArguments, defaultValue);
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} [propArguments]
     * @returns {number}
     * @memberof ShapeBase
     */
    ShapeLoop.prototype.getBufferLength = function (propArguments) {
        if (this.bStatic && typeof this.buffer !== 'undefined')
            return this.buffer.length;
        if (this.bStaticLoop && typeof this.currentOrSingleLoopBuffer !== 'undefined')
            return this.currentOrSingleLoopBuffer.length * this.getRepetitionCount();
        var count = this.getLoop(propArguments).count;
        return this.getRepetitionCount() * count * 2;
    };
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     * @memberof ShapeBase
     */
    ShapeLoop.prototype.generateBuffer = function (generateId, propArguments) {
        this.bindSideLength(propArguments);
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(propArguments);
        else if (typeof this.currentOrSingleLoopBuffer === 'undefined')
            this.currentOrSingleLoopBuffer = this.generateLoopBuffer(propArguments);
        return this.currentOrSingleLoopBuffer;
    };
    /**
     * Generate loop buffer
     *
     * @private
     * @param {ISceneChildPropArguments} propArguments
     * @returns {Float32Array}
     * @memberof ShapeLoop
     */
    ShapeLoop.prototype.generateLoopBuffer = function (propArguments) {
        var _a = this.getLoop(propArguments), start = _a.start, end = _a.end, inc = _a.inc, count = _a.count;
        var getVertex = (this.props.loop && this.props.loop.vertex
            ? this.props.loop.vertex
            : this.loop.vertex);
        var shapeLoop = {
            index: 0,
            offset: 0,
            angle: 0,
            count: count,
        };
        var vertexLength = shapeLoop.count;
        var bufferLength = vertexLength * 2;
        var currentOrSingleLoopBuffer = new Float32Array(bufferLength);
        var bNoAdapt = this.adaptMode === EShapePrimitiveAdaptMode.None;
        var tmpBounding = [undefined, undefined, undefined, undefined];
        for (var i = 0, j = 0; i < vertexLength; i++, j += 2) {
            var offset = shapeLoop.count > 1 ? i / (shapeLoop.count - 1) : 1;
            // const angle = start + inc * i
            var angle = (end - start) * offset + start;
            shapeLoop.angle = angle;
            shapeLoop.index = i + 1;
            shapeLoop.offset = offset;
            var vertex = Float32Array.from(getVertex(shapeLoop, propArguments));
            currentOrSingleLoopBuffer[j] = vertex[0];
            currentOrSingleLoopBuffer[j + 1] = vertex[1];
            if (bNoAdapt) {
                currentOrSingleLoopBuffer[j] *= this.sideLength[0];
                currentOrSingleLoopBuffer[j + 1] *= this.sideLength[1];
                Bounding.add(tmpBounding, currentOrSingleLoopBuffer[j], currentOrSingleLoopBuffer[j + 1]);
            }
        }
        if (bNoAdapt) {
            Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
            console.log(this.currentGenerationPrimitiveBounding);
        }
        else {
            /**
             * Adapt and apply side length
             */
            var buffer = ShapePrimitive.adaptBuffer(currentOrSingleLoopBuffer, this.adaptMode);
            Bounding.clear(tmpBounding);
            for (var i = 0; i < bufferLength; i += 2) {
                buffer[i] = buffer[i] * this.sideLength[0];
                buffer[i + 1] = buffer[i + 1] * this.sideLength[1];
                Bounding.add(tmpBounding, buffer[i], buffer[i + 1]);
            }
            Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
            return buffer;
        }
        return currentOrSingleLoopBuffer;
    };
    /**
     * Return information about a client loop gnerator
     *
     * @private
     * @param {ISceneChildPropArguments} propArguments
     * @returns {ShapeLoopInformation}
     * @memberof ShapeBase
     */
    ShapeLoop.prototype.getLoop = function (propArguments) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (propArguments === void 0) { propArguments = ShapeBase.EMPTY_PROP_ARGUMENTS; }
        propArguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0;
        var start = (_c = (_b = this.props.loop) === null || _b === void 0 ? void 0 : _b.start) !== null && _c !== void 0 ? _c : this.loop.start;
        var end = (_e = (_d = this.props.loop) === null || _d === void 0 ? void 0 : _d.end) !== null && _e !== void 0 ? _e : this.loop.end;
        var inc = (_g = (_f = this.props.loop) === null || _f === void 0 ? void 0 : _f.inc) !== null && _g !== void 0 ? _g : this.loop.inc;
        start = (typeof start === 'function' ? start(propArguments) : start);
        end = (typeof end === 'function' ? end(propArguments) : end);
        inc = (typeof inc === 'function' ? inc(propArguments) : inc);
        var count = Math.ceil((end - start) / inc);
        return { start: start, end: end, inc: inc, count: count <= 0 ? 0 : count };
    };
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     * @memberof ShapeBase
     */
    ShapeLoop.prototype.setShape = function (loop) {
        this.setProp('loop', loop);
    };
    ShapeLoop.PI2 = Math.PI * 2;
    ShapeLoop.PId2 = Math.PI / 2;
    return ShapeLoop;
}(ShapePrimitive));
export default ShapeLoop;
//# sourceMappingURL=ShapeLoop.js.map