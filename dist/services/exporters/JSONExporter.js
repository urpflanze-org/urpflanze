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
 * @category Services.Export/Import
 * @class JSONExporter
 */
var JSONExporter = /** @class */ (function () {
    function JSONExporter() {
    }
    JSONExporter.parse = function (drawer, name) {
        if (name === void 0) { name = 'EmptyProject'; }
        return JSONExporter.toString(JSONExporter.parseAsProject(drawer, name));
    };
    JSONExporter.toString = function (project) {
        return JSON.stringify(project);
    };
    JSONExporter.parseAsProject = function (drawer, name) {
        if (name === void 0) { name = 'EmptyProject'; }
        var scene = drawer.getScene();
        var timeline = drawer.getTimeline();
        var project = JSONImporter.createEmptyProject();
        project.name = name;
        project.width = scene.width;
        project.height = scene.height;
        project.resolution = drawer.getResolution();
        project.color = scene.color;
        project.background = scene.background;
        project.clear = drawer.getOption('clear', true);
        project.ghosts = drawer.getOption('ghosts', 0);
        project.ghostSkipTime = drawer.getOption('ghostSkipTime', undefined);
        project.ghostSkipFunction = parseFunction.parse(drawer.getOption('ghostSkipFunction', undefined));
        project.ratio = drawer.getRatio();
        var _a = timeline.getSequence(), durate = _a.durate, framerate = _a.framerate;
        project.sequence = { durate: durate, framerate: framerate };
        project.scene = {};
        var sceneChilds = scene.getChildren();
        for (var i = 0, len = sceneChilds.length; i < len; i++) {
            project.scene[sceneChilds[i].id] = JSONExporter.parseSceneChild(sceneChilds[i]);
        }
        return project;
    };
    JSONExporter.parseSceneChild = function (sceneChild, parentId, depth) {
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
            parentId: parentId,
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
                children.push(JSONExporter.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1));
            projectSceneChild.children = children;
        }
        return projectSceneChild;
    };
    return JSONExporter;
}());
export default JSONExporter;
//# sourceMappingURL=JSONExporter.js.map