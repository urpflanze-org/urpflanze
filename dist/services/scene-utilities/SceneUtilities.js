var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { v1 as uuidv1 } from 'uuid';
import SceneChild from "../../core/SceneChild";
// Shapes
import Line from "../../core/shapes/primitives/Line";
import Triangle from "../../core/shapes/primitives/Triangle";
import Rect from "../../core/shapes/primitives/Rect";
import RegularPolygon from "../../core/shapes/primitives/RegularPolygon";
import Circle from "../../core/shapes/primitives/Circle";
import Rose from "../../core/shapes/primitives/Rose";
import Spiral from "../../core/shapes/primitives/Spiral";
import Lissajous from "../../core/shapes/primitives/Lissajous";
import Shape from "../../core/shapes/Shape";
import ShapePrimitive from "../../core/shapes/ShapePrimitive";
import ShapeLoop from "../../core/shapes/ShapeLoop";
import ShapeBuffer from "../../core/shapes/ShapeBuffer";
import Scene from "../../core/Scene";
import Group from "../../core/Group";
import ShapeBase from "../../core/shapes/ShapeBase";
import SceneChildPropsData, { TSceneChildPropsDataKeys } from "./SceneChildPropsData";
import ScenePropUtilities from "./ScenePropUtilities";
import Animation from "../animation/Animation";
/**
 *
 * @category Services.Scene Utilities
 * @class SceneUtilities
 */
var SceneUtilities = /** @class */ (function () {
    function SceneUtilities() {
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {
            Line: Line,
            Triangle: Triangle,
            Rect: Rect,
            RegularPolygon: RegularPolygon,
            Circle: Circle,
            Rose: Rose,
            Spiral: Spiral,
            Lissajous: Lissajous,
            Group: Group,
            Shape: Shape,
            ShapeLoop: ShapeLoop,
            ShapeBuffer: ShapeBuffer,
        };
    }
    //#region Register scene child
    /**
     * Return a list of name of registered sceneChild
     *
     * @returns {Array<string>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getRegistered = function () {
        return Object.keys(this.registeredSceneChilds);
    };
    /**
     * Register scene child for fast creation
     *
     * @param {string} type
     * @param {SceneChildInstance} ref
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.register = function (type, ref) {
        if (!(type in this.registeredSceneChilds)) {
            this.registeredSceneChilds[type] = ref;
        }
        else {
            console.warn("SceneUtilities: SceneChild \"" + type + "\" is already registered");
        }
    };
    /**
     * unregister scene child
     *
     * @param {string} type
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.unregister = function (type) {
        if (type in this.registeredSceneChilds) {
            delete this.registeredSceneChilds[type];
        }
        else {
            console.warn("SceneUtilities: SceneChild \"" + type + "\" is not registered");
        }
    };
    //#endregion
    //#region Scene manipulation
    /**
     * Logic creation of a SceneChild
     * Since scene is not passed, name are set if they are present in args or type
     *
     *
     * @param {(string | SceneChild)} item
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.create = function (item, props, scene, drawer) {
        var _this = this;
        var _a;
        scene = scene ? scene : typeof item !== 'string' ? item.scene : undefined;
        if (item instanceof SceneChild) {
            this.getChildren(item).forEach(function (child) { return _this.create(child, undefined, scene, drawer); });
            return item;
        }
        if (item in this.registeredSceneChilds) {
            if (!props)
                props = {};
            props.id = props.id || uuidv1();
            if (!props.name && scene)
                props.name = item + '_' + (this.getCountSceneChildOfType(scene, item) + 1);
            if (!props.data)
                props.data = {};
            if (!('props' in props.data))
                props.data.props = {};
            if (!('visible' in props.data))
                props.data.visible = true;
            if (!('highlighted' in props.data))
                props.data.highlighted = false;
            if (!('disableGhost' in props.data))
                props.data.disableGhost = false;
            if (item === 'ShapeLoop') {
                if (!('loop' in props))
                    props.loop = { start: 0, end: Math.PI * 2, inc: (Math.PI * 2) / 20 };
            }
            var sceneChild = new this.registeredSceneChilds[item](props);
            if (sceneChild && drawer && this.isAPrimitive(sceneChild)) {
                var sideLength = (_a = SceneChildPropsData.sideLength) === null || _a === void 0 ? void 0 : _a.default;
                sceneChild.setProp('sideLength', ScenePropUtilities.getTransformedValue(drawer, 'sideLength', sideLength));
                sceneChild.data.props.sideLength = sideLength;
            }
            this.getChildren(sceneChild).forEach(function (child) { return _this.create(child); });
            return sceneChild;
        }
        console.warn("SceneUtilities: Creation failed. SceneChild \"" + item + "\" is not registered");
        return null;
    };
    /**
     * Return number of element from a type
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getCountSceneChildOfType = function (scene, type) {
        var count = 0;
        Scene.walk(function (sceneChild) {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    };
    /**
     * Return a copy of sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {Scene} [scene]
     * @param {DrawerCanvas} [drawer]
     * @param {boolean} [strict]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.copy = function (sceneChild, scene, drawer, strict) {
        var _this = this;
        if (strict === void 0) { strict = false; }
        // copy only props, without name, id
        var props = sceneChild.getProps();
        if (sceneChild instanceof ShapeBase) {
            props.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof ShapeBuffer) {
            props.shape = sceneChild.shape;
        }
        if (sceneChild instanceof ShapePrimitive) {
            props.bCloseShape = sceneChild.bCloseShape;
            props.adaptMode = sceneChild.adaptMode;
            props.vertexCallback = sceneChild.vertexCallback;
        }
        if (sceneChild instanceof ShapeLoop) {
            props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies;
        }
        if (sceneChild instanceof ShapeLoop) {
            props.shapeLoopPropsDependencies = sceneChild.shapeLoopPropsDependencies;
        }
        if (strict) {
            props.id = sceneChild.id;
            props.name = sceneChild.name;
            props.order = sceneChild.order;
            props.data = JSON.parse(JSON.stringify(sceneChild.data || {}));
        }
        var copied = this.create(sceneChild.type, props, scene, drawer);
        if (copied) {
            if (sceneChild instanceof Group) {
                sceneChild.getChildren().forEach(function (child) {
                    var copiedChild = _this.copy(child, scene, drawer);
                    copiedChild && copied.add(copiedChild);
                });
            }
            else if (sceneChild instanceof Shape && copied instanceof Shape && sceneChild.shape) {
                var copiedShape = this.copy(sceneChild.shape, scene, drawer);
                copiedShape && (copied.shape = copiedShape);
            }
            else if (sceneChild instanceof ShapeBuffer && copied instanceof ShapeBuffer && sceneChild.shape) {
                copied.setShape(new Float32Array(sceneChild.shape));
            }
            return copied;
        }
        console.warn("SceneUtilities: Copy failed.", sceneChild);
        return null;
    };
    /**
     * Add scene child to parent.
     * Create a group if parent is Shape and has one element (not Group) inside.
     *
     * @param {(SceneChild | Scene)} parent
     * @param {(string | SceneChild)} sceneChild
     * @param {TSceneChildProps} [props]
     * @param {Scene} [scene]
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.add = function (parent, sceneChild, props, scene) {
        var newSceneChild = null;
        if (parent instanceof Group || parent instanceof Scene) {
            newSceneChild = this.create(sceneChild, props, scene);
            newSceneChild && parent.add(newSceneChild);
        }
        else if (parent instanceof Shape) {
            if (parent.shape == undefined) {
                newSceneChild = this.create(sceneChild, props, scene);
                newSceneChild && parent.setShape(newSceneChild);
            }
            else if (parent.shape instanceof ShapeBase) {
                newSceneChild = this.create(sceneChild, props, scene);
                if (newSceneChild) {
                    var newGroup = this.create('Group', undefined, scene);
                    var sibling = parent.shape;
                    this.remove(parent, sibling);
                    parent.setShape(newGroup);
                    newGroup.add(sibling);
                    newGroup.add(newSceneChild);
                }
            }
            else if (parent.shape instanceof Group) {
                this.add(parent.shape, sceneChild, undefined, scene);
            }
        }
        return newSceneChild;
    };
    /**
     * Remove scene child from
     *
     * @param {SceneChild} from
     * @param {SceneChild} [item]
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.remove = function (from, item) {
        if (!item) {
            // 'from' as item to remove
            if (from.scene) {
                var parent_1 = this.getParent(from);
                !parent_1 ? from.scene.removeFromId(from.id) : this.remove(parent_1, from);
            }
            else {
                console.warn("SceneUtilities: Remove failed. SceneChild is not added into scene", from);
            }
        }
        else {
            if (from instanceof Group)
                from.removeFromId(item.id);
            else if (from instanceof Shape)
                from.setShape(undefined);
        }
    };
    //#endregion
    //#region Scene parent and children
    /**
     * Get Root parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getRootParent = function (sceneChild) {
        var parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[0] : null;
    };
    /**
     * Get first level parent
     *
     * @param {SceneChild} sceneChild
     * @returns {(SceneChild | null)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getParent = function (sceneChild) {
        var parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[parents.length - 1] : null;
    };
    /**
     * Get all parents
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getParents = function (sceneChild) {
        return sceneChild && sceneChild.scene ? sceneChild.scene.getParentsOfSceneChild(sceneChild) : [];
    };
    /**
     * Return children of a shape.
     * Only Group has array of children, Shape has only one child.
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getChildren = function (sceneChild) {
        if (sceneChild instanceof Group)
            return sceneChild.getChildren();
        return sceneChild instanceof Shape && sceneChild.shape ? [sceneChild.shape] : [];
    };
    /**
     * Return only primitive children
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getChildrenPrimitives = function (sceneChild) {
        var result = [];
        var children = this.getChildren(sceneChild);
        for (var i = 0, len = children.length; i < len; i++) {
            if (children[i] instanceof ShapePrimitive)
                result.push(children[i]);
            else
                result = result.concat.apply(result, this.getChildrenPrimitives(children[i]));
        }
        return result;
    };
    /**
     * Return a list of neighbors
     *
     * @param {SceneChild} sceneChild
     * @returns {(Array<SceneChild>)}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getNeighbors = function (sceneChild) {
        if (sceneChild.scene) {
            var parent_2 = this.getParent(sceneChild);
            return parent_2 == null ? sceneChild.scene.getChildren() : this.getChildren(parent_2);
        }
        return [];
    };
    /**
     * Return a number of element type into a scene
     *
     * @param {Scene} scene
     * @param {string} type
     * @returns {number}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.getCountOfSceneChildType = function (scene, type) {
        var count = 0;
        Scene.walk(function (sceneChild) {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    };
    /**
     * Walk through sceneChild
     *
     * @param {SceneChild} sceneChild
     * @param {(child: SceneChild) => void} callback
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.walk = function (sceneChild, callback) {
        callback(sceneChild);
        this.getChildren(sceneChild).forEach(function (child) { return callback(child); });
    };
    //#endregion
    //#region checker
    /**
     * Check sceneChild is Group
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.isGroup = function (sceneChild) {
        return sceneChild instanceof Group;
    };
    /**
     * Check sceneChild are Shape and has a child
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasShapeChild = function (sceneChild) {
        return sceneChild instanceof Shape ? sceneChild.shape !== undefined : false;
    };
    /**
     * Check sceneChild is a ShapeBuffer an are binded
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasShapeBuffer = function (sceneChild) {
        return sceneChild instanceof ShapeBuffer;
    };
    /**
     * Check scene child is a Primitive
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.isAPrimitive = function (sceneChild) {
        return sceneChild instanceof ShapePrimitive;
    };
    /**
     * Check scene child is a ShapeLoop
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.hasLoop = function (sceneChild) {
        return sceneChild instanceof ShapeLoop;
    };
    //#endregion
    /**
     * Set UISceneChild prop, convert animation on transformable props
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {*} value
     * @param {DrawerCanvas} drawer
     * @memberof SceneUtilities
     */
    SceneUtilities.prototype.setProp = function (sceneChild, name, value, drawer) {
        var _a, _b;
        if (ScenePropUtilities.bValueAnimation(value)) {
            sceneChild.data.props[name] = value;
            sceneChild.setProp(name, Animation.composeAnimation(drawer, name, value));
            return;
        }
        if (name === 'loop') {
            if (sceneChild instanceof ShapeLoop && ScenePropUtilities.bValueLoop(value)) {
                sceneChild.data.props.loop = value;
                sceneChild.setProp('loop', ScenePropUtilities.composeLoop(value));
                var dynamic = value.dynamyc;
                var realDynamic = sceneChild.shapeLoopPropsDependencies.indexOf('prop_argumens') >= 0;
                if (dynamic !== realDynamic) {
                    var dependencies = __spreadArrays(sceneChild.shapeLoopPropsDependencies);
                    if (dynamic)
                        !(dependencies.indexOf('prop_argumens') >= 0) && dependencies.push('propArguments');
                    else
                        dependencies.indexOf('prop_argumens') >= 0 && dependencies.splice(dependencies.indexOf('propArguments', 1));
                    sceneChild.shapeLoopPropsDependencies = dependencies;
                }
                sceneChild.clearBuffer(true, true);
            }
            return;
        }
        if (name === 'vertexCallback') {
            if (sceneChild instanceof ShapeBase && ScenePropUtilities.bValueVertexCallback(value)) {
                sceneChild.data.props.vertexCallback = value;
                sceneChild.vertexCallback = ScenePropUtilities.composeVertexCallback(value);
                sceneChild.bUseParent = true;
                sceneChild.clearBuffer(true, true);
            }
            return;
        }
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            if (ScenePropUtilities.bValueDrawer(value)) {
                sceneChild.data.props[name] = value;
                sceneChild.setProp(name, ScenePropUtilities.getTransformedValue(drawer, name, value.value));
            }
            else {
                sceneChild.setProp(name, value);
            }
            return;
        }
        if (name in SceneChildPropsData && SceneChildPropsData[name].transformation !== 'none')
            sceneChild.data.props[name] = value;
        switch (name) {
            case 'bUseParent':
                if (sceneChild instanceof ShapeBase)
                    sceneChild.bUseParent = value;
                break;
            case 'bCloseShape':
                if (sceneChild instanceof ShapePrimitive)
                    sceneChild.setClosed(value);
                break;
            case 'bAdaptBuffer':
                if (sceneChild instanceof ShapePrimitive)
                    sceneChild.adapt(value);
                break;
            default:
                // loop
                if (name.indexOf('.') > 0) {
                    var splitted = name.split('.');
                    sceneChild.setProp((_a = {}, _a[splitted[0]] = (_b = {}, _b[splitted[1]] = value, _b), _a));
                }
                else
                    sceneChild.setProp(name, value);
                break;
        }
    };
    return SceneUtilities;
}());
export default new SceneUtilities();
//# sourceMappingURL=SceneUtilities.js.map