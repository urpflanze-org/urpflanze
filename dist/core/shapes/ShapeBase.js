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
import { glMatrix, mat4, vec2, vec3 } from 'gl-matrix';
import { ERepetitionType, IRepetition, IBaseRepetition, ISceneChildPropArguments, ISceneChildProps, ISceneChildStreamArguments, } from "../types/scene-child";
import SceneChild from "../SceneChild";
import Context from "../Context";
import * as glme from "../math/gl-matrix-extensions";
import { clamp } from "../../Utilites";
import Vec2 from "../math/Vec2";
import Bounding, { TTempBounding } from "../math/bounding";
glMatrix.setMatrixArrayType(Array);
var tmpMatrix = mat4.create();
var transformMatrix = mat4.create();
var perspectiveMatrix = mat4.create();
var repetitionMatrix = mat4.create();
/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
var ShapeBase = /** @class */ (function (_super) {
    __extends(ShapeBase, _super);
    /**
     * Creates an instance of ShapeBase
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof ShapeBase
     */
    function ShapeBase(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this, settings) || this;
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @internal
         * @ignore
         */
        _this.generateId = -1;
        /**
         * Flag used to determine if indexedBuffer has been generated
         *
         * @internal
         * @ignore
         */
        _this.bIndexed = false;
        /**
         * The bounding inside the scene
         *
         * @type {IShapeBounding}
         */
        _this.bounding = {
            cx: 0,
            cy: 0,
            x: -1,
            y: -1,
            width: 2,
            height: 2,
        };
        _this.props = {
            distance: settings.distance,
            repetitions: settings.repetitions,
            rotateX: settings.rotateX,
            rotateY: settings.rotateY,
            rotateZ: settings.rotateZ,
            skewX: settings.skewX,
            skewY: settings.skewY,
            squeezeX: settings.squeezeX,
            squeezeY: settings.squeezeY,
            displace: settings.displace,
            translate: settings.translate,
            scale: settings.scale,
            transformOrigin: settings.transformOrigin,
            perspective: settings.perspective,
            perspectiveOrigin: settings.perspectiveOrigin,
        };
        _this.bUseParent = !!settings.bUseParent;
        _this.vertexCallback = settings.vertexCallback;
        return _this;
    }
    /**
     * Check if the shape should be generated every time
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.isStatic = function () {
        var props = this.props;
        return (typeof props.distance !== 'function' &&
            typeof props.repetitions !== 'function' &&
            typeof props.rotateX !== 'function' &&
            typeof props.rotateY !== 'function' &&
            typeof props.rotateZ !== 'function' &&
            typeof props.displace !== 'function' &&
            typeof props.skewX !== 'function' &&
            typeof props.skewY !== 'function' &&
            typeof props.squeezeX !== 'function' &&
            typeof props.squeezeY !== 'function' &&
            typeof props.translate !== 'function' &&
            typeof props.scale !== 'function' &&
            typeof props.transformOrigin !== 'function');
    };
    /**
     * Check if the indexedBuffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
     *
     * @returns {boolean}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.isStaticIndexed = function () {
        return typeof this.props.repetitions !== 'function';
    };
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.getProp = function (key, propArguments, defaultValue) {
        var _a;
        var attribute = this.props[key];
        if (typeof attribute == 'function') {
            propArguments = propArguments || ShapeBase.EMPTY_PROP_ARGUMENTS;
            if (typeof propArguments.shape === 'undefined')
                propArguments.shape = this;
            propArguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.currentTime) || 0;
            attribute = attribute(propArguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? defaultValue : attribute;
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     * @memberof ShapeBase
     */
    ShapeBase.prototype.setProp = function (key, value, bClearIndexed) {
        var _this = this;
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (typeof key == 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach(function (k) {
                return (_this.props[k] = key[k]);
            });
        }
        this.clearBuffer(bClearIndexed);
    };
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     * @memberof ShapeBase
     */
    ShapeBase.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        this.buffer = undefined;
        if (bClearIndexed) {
            this.bIndexed = false;
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            var parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    };
    /**
     * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
     *
     * @param {number} generateId generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parentPropArguments]
     * @memberof ShapeBase
     */
    ShapeBase.prototype.generate = function (generateId, bDirectSceneChild, parentPropArguments) {
        var _a, _b, _c;
        if (bDirectSceneChild === void 0) { bDirectSceneChild = false; }
        if (!this.scene || (this.buffer && (this.bStatic || (generateId === this.generateId && !this.bUseParent)))) {
            return;
        }
        this.generateId = generateId;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexedBuffer = [];
        var repetition = ShapeBase.getEmptyRepetition();
        var repetitions = this.getProp('repetitions', { parent: parentPropArguments, repetition: repetition, time: 1, context: Context }, 1);
        var repetitionType = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring;
        var repetitionCount = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        var repetitionColCount = Array.isArray(repetitions) ? repetitions[0] : repetitionCount;
        var repetitionRowCount = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        var colRepetition = repetition.col;
        colRepetition.count = repetitionColCount;
        var rowRepetition = repetition.row;
        rowRepetition.count = repetitionRowCount;
        repetition.count = repetitionCount;
        repetition.col.count = repetitionColCount;
        repetition.row.count = repetitionRowCount;
        repetition.type = repetitionType;
        var propArguments = {
            repetition: repetition,
            context: Context,
            time: ((_c = this.scene) === null || _c === void 0 ? void 0 : _c.currentTime) || 0,
            shape: this,
            data: this.data,
            parent: parentPropArguments,
        };
        var totalBufferLength = 0;
        var buffers = [];
        var currentIndex = 0;
        var centerMatrix = vec2.fromValues((repetitionColCount - 1) / 2, (repetitionRowCount - 1) / 2);
        var sceneCenter = [this.scene.center[0], this.scene.center[1], 0];
        var tmpBounding = [undefined, undefined, undefined, undefined];
        for (var currentRowRepetition = 0; currentRowRepetition < repetitionRowCount; currentRowRepetition++) {
            for (var currentColRepetition = 0; currentColRepetition < repetitionColCount; currentColRepetition++, currentIndex++) {
                repetition.index = currentIndex + 1;
                repetition.offset = currentIndex / (repetitionCount - 1);
                repetition.angle =
                    repetitionType === ERepetitionType.Ring ? ((Math.PI * 2) / repetitionCount) * currentIndex : 0;
                colRepetition.index = currentColRepetition + 1;
                colRepetition.offset = currentColRepetition / (repetitionColCount - 1);
                rowRepetition.index = currentRowRepetition + 1;
                rowRepetition.offset = currentRowRepetition / (repetitionRowCount - 1);
                // Generate primitives buffer recursively
                var buffer = this.generateBuffer(generateId, propArguments);
                var bufferLength = buffer.length;
                var bounding = this.getBounding(true);
                buffers[currentIndex] = new Float32Array(bufferLength);
                totalBufferLength += bufferLength;
                {
                    var distance = glme.toVec2(this.getProp('distance', propArguments, glme.VEC2_ZERO));
                    var displace = this.getProp('displace', propArguments, 0);
                    var scale = glme.toVec3(this.getProp('scale', propArguments, glme.VEC2_ONE), 1);
                    var translate = glme.toVec3(this.getProp('translate', propArguments, glme.VEC2_ZERO), 0);
                    var skewX = this.getProp('skewX', propArguments, 0);
                    var skewY = this.getProp('skewY', propArguments, 0);
                    var squeezeX = this.getProp('squeezeX', propArguments, 0);
                    var squeezeY = this.getProp('squeezeY', propArguments, 0);
                    var rotateX = this.getProp('rotateX', propArguments, 0);
                    var rotateY = this.getProp('rotateY', propArguments, 0);
                    var rotateZ = this.getProp('rotateZ', propArguments, 0);
                    var perspectiveProp = clamp(0, 1, this.getProp('perspective', propArguments, 0));
                    var perspectiveOrigin = glme.toVec3(this.getProp('perspectiveOrigin', propArguments, glme.VEC2_ZERO), 0);
                    var transformOrigin = glme.toVec3(this.getProp('transformOrigin', propArguments, glme.VEC2_ZERO), 0);
                    var offset = void 0;
                    switch (repetitionType) {
                        case ERepetitionType.Ring:
                            offset = vec3.fromValues(distance[0], 0, 0);
                            vec3.rotateZ(offset, offset, glme.VEC3_ZERO, repetition.angle + displace);
                            break;
                        case ERepetitionType.Matrix:
                            offset = vec3.fromValues(distance[0] * (currentColRepetition - centerMatrix[0]), distance[1] * (currentRowRepetition - centerMatrix[1]), 0);
                            break;
                    }
                    var perspectiveSize = perspectiveProp > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1;
                    var perspective = perspectiveProp > 0 ? perspectiveSize + (1 - perspectiveProp) * (perspectiveSize * 10) : 0;
                    var bTransformOrigin = perspective !== 0 || transformOrigin[0] !== 0 || transformOrigin[1] !== 0;
                    var bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0;
                    if (bTransformOrigin) {
                        transformOrigin[0] *= bounding.width / 2;
                        transformOrigin[1] *= bounding.height / 2;
                        transformOrigin[2] = perspective;
                    }
                    /**
                     * Create Transformation matrix
                     */
                    {
                        mat4.identity(transformMatrix);
                        // transform origin
                        bTransformOrigin && mat4.translate(transformMatrix, transformMatrix, transformOrigin);
                        // scale
                        if (scale[0] !== 1 || scale[1] !== 1)
                            mat4.scale(transformMatrix, transformMatrix, scale);
                        // skew
                        if (skewX !== 0 || skewY !== 0) {
                            glme.fromSkew(tmpMatrix, [skewX, skewY]);
                            mat4.multiply(transformMatrix, transformMatrix, tmpMatrix);
                        }
                        // rotateX
                        rotateX !== 0 && mat4.rotateX(transformMatrix, transformMatrix, rotateX);
                        //rotateY
                        rotateY !== 0 && mat4.rotateY(transformMatrix, transformMatrix, rotateY);
                        //rotateZ
                        rotateZ !== 0 && mat4.rotateZ(transformMatrix, transformMatrix, rotateZ);
                        // reset origin
                        bTransformOrigin &&
                            mat4.translate(transformMatrix, transformMatrix, vec3.scale(transformOrigin, transformOrigin, -1));
                        // translation
                        if (translate[0] !== 0 || translate[1] !== 0)
                            mat4.translate(transformMatrix, transformMatrix, translate);
                        /**
                         * Create Repetition matrix
                         */
                        mat4.identity(repetitionMatrix);
                        mat4.translate(repetitionMatrix, repetitionMatrix, offset);
                        if (bDirectSceneChild) {
                            mat4.translate(repetitionMatrix, repetitionMatrix, sceneCenter);
                        }
                        if (repetitionType === ERepetitionType.Ring)
                            mat4.rotateZ(repetitionMatrix, repetitionMatrix, repetition.angle + displace);
                        /**
                         * Create Perspective matrix
                         */
                        if (perspective > 0) {
                            if (bPerspectiveOrigin) {
                                perspectiveOrigin[0] *= bounding.width / 2;
                                perspectiveOrigin[1] *= bounding.height / 2;
                                perspectiveOrigin[2] = 0;
                            }
                            mat4.perspective(perspectiveMatrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                    }
                    // Apply matrices on vertex
                    for (var bufferIndex = 0; bufferIndex < bufferLength; bufferIndex += 2) {
                        var vertex = [buffer[bufferIndex], buffer[bufferIndex + 1], perspective];
                        {
                            vec3.transformMat4(vertex, vertex, transformMatrix);
                            squeezeX !== 0 && Vec2.squeezeX(vertex, squeezeX);
                            squeezeY !== 0 && Vec2.squeezeY(vertex, squeezeY);
                            if (perspective > 0) {
                                bPerspectiveOrigin && vec3.add(vertex, vertex, perspectiveOrigin);
                                vec3.transformMat4(vertex, vertex, perspectiveMatrix);
                                vec3.scale(vertex, vertex, perspective);
                                bPerspectiveOrigin && vec3.sub(vertex, vertex, perspectiveOrigin);
                            }
                            if (this.vertexCallback) {
                                var index = bufferIndex / 2 + 1;
                                var count = bufferLength / 2;
                                var vertexRepetition = {
                                    index: index,
                                    count: count,
                                    offset: index / count,
                                };
                                this.vertexCallback(vertex, vertexRepetition, propArguments);
                            }
                            vec3.transformMat4(vertex, vertex, repetitionMatrix);
                        }
                        buffers[currentIndex][bufferIndex] = vertex[0];
                        buffers[currentIndex][bufferIndex + 1] = vertex[1];
                        Bounding.add(tmpBounding, vertex[0], vertex[1]);
                    }
                }
                // After buffer creation, add a frame into indexedBuffer if not static
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(bufferLength, repetition);
                }
            }
        }
        Bounding.bind(this.bounding, tmpBounding);
        this.buffer = new Float32Array(totalBufferLength);
        for (var i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        this.bIndexed = true;
    };
    /**
     * Get number of repetitions
     *
     * @returns {number}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.getRepetitionCount = function () {
        var _a;
        var repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0]) : repetitions;
    };
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.getBuffer = function () {
        return this.buffer;
    };
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.getIndexedBuffer = function () {
        return this.indexedBuffer;
    };
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
    ShapeBase.prototype.stream = function (callback) {
        if (this.scene && this.buffer && this.indexedBuffer) {
            for (var i = 0, j = 0, len = this.indexedBuffer.length; i < len; i++) {
                var currentIndexing = this.indexedBuffer[i];
                var propArguments = {
                    shape: currentIndexing.shape,
                    repetition: currentIndexing.repetition,
                    context: Context,
                    time: 0,
                    parent: currentIndexing.parent,
                    data: currentIndexing.shape.data,
                };
                var fillColor = currentIndexing.shape.getProp('fillColor', propArguments);
                var strokeColor = currentIndexing.shape.getProp('strokeColor', propArguments, typeof fillColor !== 'undefined' ? undefined : this.scene.color);
                var lineWidth = currentIndexing.shape.getProp('lineWidth', propArguments, typeof fillColor !== 'undefined' && typeof strokeColor === 'undefined' ? undefined : 1);
                var streamArguments = {
                    buffer: this.buffer,
                    frameLength: currentIndexing.frameLength,
                    frameBufferIndex: j,
                    shape: currentIndexing.shape,
                    repetition: currentIndexing.repetition,
                    currentShapeIndex: i,
                    totalShapes: len,
                    lineWidth: lineWidth,
                    strokeColor: strokeColor,
                    fillColor: fillColor,
                };
                callback(streamArguments);
                j += currentIndexing.frameLength;
            }
        }
    };
    /**
     * Empty buffer
     *
     * @internal
     * @ignore
     */
    ShapeBase.EMPTY_BUFFER = new Float32Array(0);
    /**
     * Empty BaseRepetition
     *
     * @internal
     * @ignore
     */
    ShapeBase.getEmptySimpleRepetition = function () { return ({
        index: 1,
        offset: 1,
        count: 1,
    }); };
    /**
     * Empty Repetition
     *
     * @internal
     * @ignore
     */
    ShapeBase.getEmptyRepetition = function () { return (__assign(__assign({ type: ERepetitionType.Ring, angle: 0 }, ShapeBase.getEmptySimpleRepetition()), { row: ShapeBase.getEmptySimpleRepetition(), col: ShapeBase.getEmptySimpleRepetition() })); };
    /**
     * Empty Prop Arguments
     *
     * @internal
     * @ignore
     */
    ShapeBase.EMPTY_PROP_ARGUMENTS = {
        time: 0,
        context: Context,
        repetition: ShapeBase.getEmptyRepetition(),
    };
    return ShapeBase;
}(SceneChild));
export default ShapeBase;
//# sourceMappingURL=ShapeBase.js.map