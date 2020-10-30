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
var tmp_matrix = mat4.create();
var transform_matrix = mat4.create();
var perspective_matrix = mat4.create();
var repetition_matrix = mat4.create();
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
        _this.generate_id = -1;
        /**
         * Flag used to determine if indexed_buffer has been generated
         *
         * @internal
         * @ignore
         */
        _this.bIndexed = false;
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
     * Check if the indexed_buffer array needs to be recreated every time,
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
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof ShapeBase
     */
    ShapeBase.prototype.getProp = function (key, prop_arguments, default_value) {
        var _a;
        var attribute = this.props[key];
        if (typeof attribute == 'function') {
            prop_arguments = prop_arguments || ShapeBase.EMPTY_PROP_ARGUMENTS;
            if (typeof prop_arguments.shape === 'undefined')
                prop_arguments.shape = this;
            prop_arguments.time = ((_a = this.scene) === null || _a === void 0 ? void 0 : _a.current_time) || 0;
            attribute = attribute(prop_arguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? default_value : attribute;
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
     * Update the vertex array if the shape is not static and update the indexed_buffer if it is also not static
     *
     * @param {number} generate_id generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof ShapeBase
     */
    ShapeBase.prototype.generate = function (generate_id, bDirectSceneChild, parent_prop_arguments) {
        var _a, _b, _c;
        if (bDirectSceneChild === void 0) { bDirectSceneChild = false; }
        if (!this.scene || (this.buffer && (this.bStatic || (generate_id === this.generate_id && !this.bUseParent)))) {
            return;
        }
        this.generate_id = generate_id;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexed_buffer = [];
        var repetition = ShapeBase.getEmptyRepetition();
        var repetitions = this.getProp('repetitions', { parent: parent_prop_arguments, repetition: repetition, time: 1, context: Context }, 1);
        var repetition_type = Array.isArray(repetitions) ? ERepetitionType.Matrix : ERepetitionType.Ring;
        var repetition_count = Array.isArray(repetitions)
            ? repetitions[0] * ((_a = repetitions[1]) !== null && _a !== void 0 ? _a : repetitions[0])
            : repetitions;
        var repetition_col_count = Array.isArray(repetitions) ? repetitions[0] : repetition_count;
        var repetition_row_count = Array.isArray(repetitions) ? (_b = repetitions[1]) !== null && _b !== void 0 ? _b : repetitions[0] : 1;
        var col_repetition = repetition.col;
        col_repetition.count = repetition_col_count;
        var row_repetition = repetition.row;
        row_repetition.count = repetition_row_count;
        repetition.count = repetition_count;
        repetition.col.count = repetition_col_count;
        repetition.row.count = repetition_row_count;
        repetition.type = repetition_type;
        var prop_arguments = {
            repetition: repetition,
            context: Context,
            time: ((_c = this.scene) === null || _c === void 0 ? void 0 : _c.current_time) || 0,
            shape: this,
            data: this.data,
            parent: parent_prop_arguments,
        };
        var total_buffer_length = 0;
        var buffers = [];
        var current_index = 0;
        var center_matrix = vec2.fromValues((repetition_col_count - 1) / 2, (repetition_row_count - 1) / 2);
        var sceneCenter = [this.scene.center[0], this.scene.center[1], 0];
        var tmp_bounding = [undefined, undefined, undefined, undefined];
        for (var current_row_repetition = 0; current_row_repetition < repetition_row_count; current_row_repetition++) {
            for (var current_col_repetition = 0; current_col_repetition < repetition_col_count; current_col_repetition++, current_index++) {
                repetition.index = current_index + 1;
                repetition.offset = repetition.index / repetition.count;
                repetition.angle =
                    repetition_type === ERepetitionType.Ring ? ((Math.PI * 2) / repetition_count) * current_index : 0;
                col_repetition.index = current_col_repetition + 1;
                col_repetition.offset = col_repetition.index / col_repetition.count;
                row_repetition.index = current_row_repetition + 1;
                row_repetition.offset = row_repetition.index / row_repetition.count;
                // Generate primitives buffer recursively
                var buffer = this.generateBuffer(generate_id, prop_arguments);
                var buffer_length = buffer.length;
                var bounding = this.getBounding(true);
                buffers[current_index] = new Float32Array(buffer_length);
                total_buffer_length += buffer_length;
                {
                    var distance = glme.toVec2(this.getProp('distance', prop_arguments, glme.VEC2_ZERO));
                    var displace = this.getProp('displace', prop_arguments, 0);
                    var scale = glme.toVec3(this.getProp('scale', prop_arguments, glme.VEC2_ONE), 1);
                    var translate = glme.toVec3(this.getProp('translate', prop_arguments, glme.VEC2_ZERO), 0);
                    var skewX = this.getProp('skewX', prop_arguments, 0);
                    var skewY = this.getProp('skewY', prop_arguments, 0);
                    var squeezeX = this.getProp('squeezeX', prop_arguments, 0);
                    var squeezeY = this.getProp('squeezeY', prop_arguments, 0);
                    var rotateX = this.getProp('rotateX', prop_arguments, 0);
                    var rotateY = this.getProp('rotateY', prop_arguments, 0);
                    var rotateZ = this.getProp('rotateZ', prop_arguments, 0);
                    var perspectiveProp = clamp(0, 1, this.getProp('perspective', prop_arguments, 0));
                    var perspectiveOrigin = glme.toVec3(this.getProp('perspectiveOrigin', prop_arguments, glme.VEC2_ZERO), 0);
                    var transformOrigin = glme.toVec3(this.getProp('transformOrigin', prop_arguments, glme.VEC2_ZERO), 0);
                    var offset = void 0;
                    switch (repetition_type) {
                        case ERepetitionType.Ring:
                            offset = vec3.fromValues(distance[0], 0, 0);
                            vec3.rotateZ(offset, offset, glme.VEC3_ZERO, repetition.angle + displace);
                            break;
                        case ERepetitionType.Matrix:
                            offset = vec3.fromValues(distance[0] * (current_col_repetition - center_matrix[0]), distance[1] * (current_row_repetition - center_matrix[1]), 0);
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
                        mat4.identity(transform_matrix);
                        // transform origin
                        bTransformOrigin && mat4.translate(transform_matrix, transform_matrix, transformOrigin);
                        // scale
                        if (scale[0] !== 1 || scale[1] !== 1)
                            mat4.scale(transform_matrix, transform_matrix, scale);
                        // skew
                        if (skewX !== 0 || skewY !== 0) {
                            glme.fromSkew(tmp_matrix, [skewX, skewY]);
                            mat4.multiply(transform_matrix, transform_matrix, tmp_matrix);
                        }
                        // rotateX
                        rotateX !== 0 && mat4.rotateX(transform_matrix, transform_matrix, rotateX);
                        //rotateY
                        rotateY !== 0 && mat4.rotateY(transform_matrix, transform_matrix, rotateY);
                        //rotateZ
                        rotateZ !== 0 && mat4.rotateZ(transform_matrix, transform_matrix, rotateZ);
                        // reset origin
                        bTransformOrigin &&
                            mat4.translate(transform_matrix, transform_matrix, vec3.scale(transformOrigin, transformOrigin, -1));
                        // translation
                        if (translate[0] !== 0 || translate[1] !== 0)
                            mat4.translate(transform_matrix, transform_matrix, translate);
                        /**
                         * Create Repetition matrix
                         */
                        mat4.identity(repetition_matrix);
                        mat4.translate(repetition_matrix, repetition_matrix, offset);
                        if (bDirectSceneChild) {
                            mat4.translate(repetition_matrix, repetition_matrix, sceneCenter);
                        }
                        if (repetition_type === ERepetitionType.Ring)
                            mat4.rotateZ(repetition_matrix, repetition_matrix, repetition.angle + displace);
                        /**
                         * Create Perspective matrix
                         */
                        if (perspective > 0) {
                            if (bPerspectiveOrigin) {
                                perspectiveOrigin[0] *= bounding.width / 2;
                                perspectiveOrigin[1] *= bounding.height / 2;
                                perspectiveOrigin[2] = 0;
                            }
                            mat4.perspective(perspective_matrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                    }
                    // Apply matrices on vertex
                    for (var buffer_index = 0; buffer_index < buffer_length; buffer_index += 2) {
                        var vertex = [buffer[buffer_index], buffer[buffer_index + 1], perspective];
                        {
                            vec3.transformMat4(vertex, vertex, transform_matrix);
                            squeezeX !== 0 && Vec2.squeezeX(vertex, squeezeX);
                            squeezeY !== 0 && Vec2.squeezeY(vertex, squeezeY);
                            if (perspective > 0) {
                                bPerspectiveOrigin && vec3.add(vertex, vertex, perspectiveOrigin);
                                vec3.transformMat4(vertex, vertex, perspective_matrix);
                                vec3.scale(vertex, vertex, perspective);
                                bPerspectiveOrigin && vec3.sub(vertex, vertex, perspectiveOrigin);
                            }
                            if (this.vertexCallback) {
                                var index = buffer_index / 2 + 1;
                                var count = buffer_length / 2;
                                var vertexRepetition = {
                                    index: index,
                                    count: count,
                                    offset: index / count,
                                };
                                this.vertexCallback(vertex, vertexRepetition, prop_arguments);
                            }
                            vec3.transformMat4(vertex, vertex, repetition_matrix);
                        }
                        buffers[current_index][buffer_index] = vertex[0];
                        buffers[current_index][buffer_index + 1] = vertex[1];
                        Bounding.add(tmp_bounding, vertex[0], vertex[1]);
                    }
                }
                // After buffer creation, add a frame into indexed_buffer if not static
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(buffer_length, repetition);
                }
            }
        }
        Bounding.bind(this.bounding, tmp_bounding);
        this.buffer = new Float32Array(total_buffer_length);
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
        return this.indexed_buffer;
    };
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     * @memberof ShapeBase
     */
    ShapeBase.prototype.stream = function (callback) {
        if (this.scene && this.buffer && this.indexed_buffer) {
            for (var i = 0, j = 0, len = this.indexed_buffer.length; i < len; i++) {
                var current_indexing = this.indexed_buffer[i];
                var prop_arguments = {
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    context: Context,
                    time: 0,
                    parent: current_indexing.parent,
                    data: current_indexing.shape.data,
                };
                var fillColor = current_indexing.shape.getProp('fillColor', prop_arguments);
                var strokeColor = current_indexing.shape.getProp('strokeColor', prop_arguments, typeof fillColor !== 'undefined' ? undefined : this.scene.color);
                var lineWidth = current_indexing.shape.getProp('lineWidth', prop_arguments, typeof fillColor !== 'undefined' && typeof strokeColor === 'undefined' ? undefined : 1);
                var streamArguments = {
                    buffer: this.buffer,
                    frame_length: current_indexing.frame_length,
                    frame_buffer_index: j,
                    shape: current_indexing.shape,
                    repetition: current_indexing.repetition,
                    current_shape_index: i,
                    total_shapes: len,
                    lineWidth: lineWidth,
                    strokeColor: strokeColor,
                    fillColor: fillColor,
                };
                callback(streamArguments);
                j += current_indexing.frame_length;
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