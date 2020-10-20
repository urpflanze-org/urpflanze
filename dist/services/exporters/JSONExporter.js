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
import Group from "../../core/Group";
import Shape from "../../core/shapes/Shape";
import ShapeBase from "../../core/shapes/ShapeBase";
import ShapeBuffer from "../../core/shapes/ShapeBuffer";
import ShapePrimitive from "../../core/shapes/ShapePrimitive";
import { parseFunction } from "../../Utilites";
import JSONImporter from "../importers/JSONImporter";
import SceneUtilities from "../scene-utilities/SceneUtilities";
/**
 *
 * @category Services
 * @class JSONExporter
 */
var JSONExporter = /** @class */ (function () {
    function JSONExporter() {
    }
    JSONExporter.prototype.parse = function (drawer, name) {
        if (name === void 0) { name = 'EmptyProject'; }
        return this.toString(this.parseAsProject(drawer, name));
    };
    JSONExporter.prototype.toString = function (project) {
        return JSON.stringify(project);
    };
    JSONExporter.prototype.parseAsProject = function (drawer, name) {
        if (name === void 0) { name = 'EmptyProject'; }
        var scene = drawer.getScene();
        var timeline = drawer.getTimeline();
        var project = JSONImporter.createEmptyProject();
        project.name = name;
        project.width = scene.width;
        project.height = scene.height;
        project.resolution = drawer.getResolution();
        project.mainColor = scene.mainColor;
        project.background = scene.background;
        project.clearCanvas = drawer.getOption('clearCanvas', true);
        project.ghosts = drawer.getOption('ghosts', 0);
        project.ghost_skip_time = parseFunction.parse(drawer.getOption('ghost_skip_time', 30));
        project.ratio = drawer.getRatio();
        var _a = timeline.getSequence(), start = _a.start, end = _a.end, framerate = _a.framerate;
        project.sequence = { start: start, end: end, framerate: framerate, durate: end - start };
        project.scene = {};
        var sceneChilds = scene.getChildren();
        for (var i = 0, len = sceneChilds.length; i < len; i++) {
            project.scene[sceneChilds[i].id] = this.parseSceneChild(sceneChilds[i]);
        }
        return project;
    };
    JSONExporter.prototype.parseSceneChild = function (sceneChild, parent_id, depth) {
        if (depth === void 0) { depth = 0; }
        var projectSceneChild = {
            id: sceneChild.id + '',
            type: sceneChild.type,
            name: sceneChild.name,
            order: sceneChild.order,
            data: __assign(__assign({}, sceneChild.data), { props: undefined }),
            depth: depth,
            bPrimitive: sceneChild instanceof ShapePrimitive,
            props: {},
            parent_id: parent_id,
        };
        var props = sceneChild.getProps();
        var propsKeys = Object.keys(props);
        for (var i = 0, len = propsKeys.length; i < len; i++)
            props[propsKeys[i]] = parseFunction.parse(props[propsKeys[i]]);
        projectSceneChild.props = __assign(__assign({}, props), sceneChild.data.props);
        if (sceneChild instanceof ShapeBuffer) {
            projectSceneChild.shape = sceneChild.shape;
        }
        if (sceneChild instanceof ShapeBase) {
            projectSceneChild.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof ShapePrimitive) {
            projectSceneChild.adaptMode = sceneChild.adaptMode;
            projectSceneChild.bCloseShape = sceneChild.bCloseShape;
            projectSceneChild.vertexCallback = parseFunction.parse(sceneChild.vertexCallback);
        }
        else if (sceneChild instanceof Shape || sceneChild instanceof Group) {
            var children = [];
            var shapeChildren = SceneUtilities.getChildren(sceneChild);
            for (var i = 0; i < shapeChildren.length; i++)
                children.push(this.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1));
            projectSceneChild.children = children;
        }
        return projectSceneChild;
    };
    return JSONExporter;
}());
export default JSONExporter;
//# sourceMappingURL=JSONExporter.js.map