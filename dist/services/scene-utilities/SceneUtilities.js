import { v1 as uuidv1 } from 'uuid';
import SceneChild from "../../core/SceneChild";
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
class SceneUtilities {
    constructor() {
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {};
        this.registeredSceneChilds = {
            Line,
            Triangle,
            Rect,
            RegularPolygon,
            Circle,
            Rose,
            Spiral,
            Lissajous,
            Group,
            Shape,
            ShapeLoop,
            ShapeBuffer,
        };
    }
    getRegistered() {
        return Object.keys(this.registeredSceneChilds);
    }
    register(type, ref) {
        if (!(type in this.registeredSceneChilds)) {
            this.registeredSceneChilds[type] = ref;
        }
        else {
            console.warn(`SceneUtilities: SceneChild "${type}" is already registered`);
        }
    }
    unregister(type) {
        if (type in this.registeredSceneChilds) {
            delete this.registeredSceneChilds[type];
        }
        else {
            console.warn(`SceneUtilities: SceneChild "${type}" is not registered`);
        }
    }
    create(item, props, scene, drawer) {
        var _a;
        scene = scene ? scene : typeof item !== 'string' ? item.scene : undefined;
        if (item instanceof SceneChild) {
            this.getChildren(item).forEach(child => this.create(child, undefined, scene, drawer));
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
            const sceneChild = new this.registeredSceneChilds[item](props);
            if (sceneChild && drawer && this.isAPrimitive(sceneChild)) {
                const sideLength = (_a = SceneChildPropsData.sideLength) === null || _a === void 0 ? void 0 : _a.default;
                sceneChild.setProp('sideLength', ScenePropUtilities.getTransformedValue(drawer, 'sideLength', sideLength));
                sceneChild.data.props.sideLength = sideLength;
            }
            this.getChildren(sceneChild).forEach(child => this.create(child));
            return sceneChild;
        }
        console.warn(`SceneUtilities: Creation failed. SceneChild "${item}" is not registered`);
        return null;
    }
    getCountSceneChildOfType(scene, type) {
        let count = 0;
        Scene.walk(sceneChild => {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    }
    copy(sceneChild, scene, drawer, strict = false) {
        const props = sceneChild.getProps();
        if (sceneChild instanceof ShapeBase) {
            props.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof ShapeBuffer) {
            props.shape = sceneChild.shape;
        }
        if (sceneChild instanceof ShapePrimitive) {
            props.bCloseShape = sceneChild.bCloseShape;
            props.bAdaptBuffer = sceneChild.bAdaptBuffer;
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
        const copied = this.create(sceneChild.type, props, scene, drawer);
        if (copied) {
            if (sceneChild instanceof Group) {
                sceneChild.getChildren().forEach((child) => {
                    const copiedChild = this.copy(child, scene, drawer);
                    copiedChild && copied.add(copiedChild);
                });
            }
            else if (sceneChild instanceof Shape && sceneChild.shape) {
                const copiedShape = sceneChild.shape instanceof Float32Array ? sceneChild.shape : this.copy(sceneChild.shape, scene, drawer);
                copiedShape && (copied.shape = copiedShape);
            }
            else if (sceneChild instanceof ShapeBuffer && sceneChild.shape) {
                ;
                copied.setShape(new Float32Array(sceneChild.shape));
            }
            return copied;
        }
        console.warn(`SceneUtilities: Copy failed.`, sceneChild);
        return null;
    }
    add(parent, sceneChild, props, scene) {
        let newSceneChild = null;
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
                    const newGroup = this.create('Group', undefined, scene);
                    const sibling = parent.shape;
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
    }
    remove(from, item) {
        if (!item) {
            if (from.scene) {
                const parent = this.getParent(from);
                !parent ? from.scene.removeFromId(from.id) : this.remove(parent, from);
            }
            else {
                console.warn(`SceneUtilities: Remove failed. SceneChild is not added into scene`, from);
            }
        }
        else {
            if (from instanceof Group)
                from.removeFromId(item.id);
            else if (from instanceof Shape)
                from.setShape(undefined);
        }
    }
    getRootParent(sceneChild) {
        const parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[0] : null;
    }
    getParent(sceneChild) {
        const parents = this.getParents(sceneChild);
        return parents.length > 0 ? parents[parents.length - 1] : null;
    }
    getParents(sceneChild) {
        return sceneChild && sceneChild.scene ? sceneChild.scene.getParentsOfSceneChild(sceneChild) : [];
    }
    getChildren(sceneChild) {
        if (sceneChild instanceof Group)
            return sceneChild.getChildren();
        return sceneChild instanceof Shape && sceneChild.shape ? [sceneChild.shape] : [];
    }
    getChildrenPrimitives(sceneChild) {
        let result = [];
        const children = this.getChildren(sceneChild);
        for (let i = 0, len = children.length; i < len; i++) {
            if (children[i] instanceof ShapePrimitive)
                result.push(children[i]);
            else
                result = result.concat(...this.getChildrenPrimitives(children[i]));
        }
        return result;
    }
    getNeighbors(sceneChild) {
        if (sceneChild.scene) {
            const parent = this.getParent(sceneChild);
            return parent == null ? sceneChild.scene.getChildren() : this.getChildren(parent);
        }
        return [];
    }
    getCountOfSceneChildType(scene, type) {
        let count = 0;
        Scene.walk(sceneChild => {
            count += sceneChild.type == type ? 1 : 0;
        }, scene);
        return count;
    }
    walk(sceneChild, callback) {
        callback(sceneChild);
        this.getChildren(sceneChild).forEach(child => callback(child));
    }
    isGroup(sceneChild) {
        return sceneChild instanceof Group;
    }
    hasShapeChild(sceneChild) {
        return sceneChild instanceof Shape ? sceneChild.shape !== undefined : false;
    }
    hasShapeBuffer(sceneChild) {
        return sceneChild instanceof ShapeBuffer;
    }
    isAPrimitive(sceneChild) {
        return sceneChild instanceof ShapePrimitive;
    }
    hasLoop(sceneChild) {
        return sceneChild instanceof ShapeLoop;
    }
    setProp(sceneChild, name, value, drawer) {
        if (ScenePropUtilities.bValueAnimation(value)) {
            sceneChild.data.props[name] = value;
            sceneChild.setProp(name, Animation.composeAnimation(drawer, name, value));
            return;
        }
        if (name === 'loop') {
            if (ScenePropUtilities.bValueLoop(value)) {
                sceneChild.data.props[name] = value;
                sceneChild.setProp(name, ScenePropUtilities.composeLoop(value));
                const dynamic = value.dynamyc;
                const realDynamic = sceneChild.shapeLoopPropsDependencies.indexOf('prop_argumens') >= 0;
                if (dynamic !== realDynamic) {
                    const dependencies = [...sceneChild.shapeLoopPropsDependencies];
                    if (dynamic)
                        !(dependencies.indexOf('prop_argumens') >= 0) && dependencies.push('prop_arguments');
                    else
                        dependencies.indexOf('prop_argumens') >= 0 && dependencies.splice(dependencies.indexOf('prop_arguments', 1));
                    sceneChild.shapeLoopPropsDependencies = dependencies;
                }
                sceneChild.clearBuffer(true, true);
            }
            return;
        }
        if (name === 'vertexCallback') {
            if (sceneChild instanceof ShapePrimitive && ScenePropUtilities.bValueVertexCallback(value)) {
                sceneChild.data.props[name] = value;
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
                ;
                sceneChild.setClosed(value);
                break;
            case 'bAdaptBuffer':
                ;
                sceneChild.setAdapted(value);
                break;
            default:
                if (name.indexOf('.') > 0) {
                    const splitted = name.split('.');
                    sceneChild.setProp({ [splitted[0]]: { [splitted[1]]: value } });
                }
                else
                    sceneChild.setProp(name, value);
                break;
        }
    }
}
export default new SceneUtilities();
//# sourceMappingURL=SceneUtilities.js.map