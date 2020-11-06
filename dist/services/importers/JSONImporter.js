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
import Scene from "../../core/Scene";
import DrawerCanvas from "../drawers/drawer-canvas/DrawerCanvas";
import { parseFunction } from "../../Utilites";
import SceneUtilities from "../scene-utilities/SceneUtilities";
import { v1 as uuidv1 } from 'uuid';
/**
 *
 * @category Services.Export/Import
 * @class JSONImporter
 */
var JSONImporter = /** @class */ (function () {
    function JSONImporter() {
    }
    JSONImporter.prototype.parse = function (project_json) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!project_json)
            return null;
        var parsed = project_json && project_json.length > 0 ? JSON.parse(project_json) : {};
        if (!('scene' in parsed))
            return null;
        var emptyProject = JSONImporter.createEmptyProject();
        var project = {
            id: (_a = parsed.id) !== null && _a !== void 0 ? _a : emptyProject.id,
            name: (_b = parsed.name) !== null && _b !== void 0 ? _b : emptyProject.name,
            width: (_c = parsed.width) !== null && _c !== void 0 ? _c : emptyProject.width,
            height: (_d = parsed.height) !== null && _d !== void 0 ? _d : emptyProject.height,
            resolution: (_e = parsed.resolution) !== null && _e !== void 0 ? _e : emptyProject.resolution,
            background: (_f = parsed.background) !== null && _f !== void 0 ? _f : emptyProject.background,
            color: (_g = parsed.color) !== null && _g !== void 0 ? _g : emptyProject.color,
            clear: (_h = parsed.clear) !== null && _h !== void 0 ? _h : emptyProject.clear,
            ghosts: (_j = parsed.ghosts) !== null && _j !== void 0 ? _j : emptyProject.ghosts,
            ghostSkipTime: (_k = parsed.ghostSkipTime) !== null && _k !== void 0 ? _k : emptyProject.ghostSkipTime,
            ghostSkipFunction: (_l = parsed.ghostSkipFunction) !== null && _l !== void 0 ? _l : emptyProject.ghostSkipFunction,
            ratio: (_m = parsed.ratio) !== null && _m !== void 0 ? _m : emptyProject.ratio,
            scene: parsed.scene || emptyProject.scene,
            sequence: __assign(__assign({}, emptyProject.sequence), parsed.sequence),
        };
        var drawOptions = {
            clear: project.clear,
            ghosts: project.ghosts,
            ghostSkipTime: parseFunction.unparse(project.ghostSkipTime),
        };
        var scene = new Scene({
            color: project.color,
            background: project.background,
            width: project.width,
            height: project.height,
        });
        var drawer = new DrawerCanvas(scene, undefined, drawOptions, project.ratio, project.resolution);
        var timeline = drawer.getTimeline();
        timeline.setSequence(project.sequence.durate, project.sequence.framerate);
        var sceneChilds = Object.values(project.scene || []);
        for (var i = 0, len = sceneChilds.length; i < len; i++) {
            var sceneChild = this.parseSceneChild(sceneChilds[i], drawer);
            sceneChild && scene.add(sceneChild);
        }
        return drawer;
    };
    JSONImporter.prototype.parseSceneChild = function (projectSceneChild, drawer) {
        var shape = typeof projectSceneChild.shape !== 'undefined'
            ? Float32Array.from(Object.values(projectSceneChild.shape))
            : undefined;
        var settings = {
            id: projectSceneChild.id,
            name: projectSceneChild.name,
            order: projectSceneChild.order,
            data: projectSceneChild.data,
            bUseParent: projectSceneChild.bUseParent,
            adaptMode: projectSceneChild.adaptMode,
            bClosed: projectSceneChild.bClosed,
            vertexCallback: parseFunction.unparse(projectSceneChild.vertexCallback),
            shape: shape,
        };
        var props = __assign({}, projectSceneChild.props);
        var sceneChild = SceneUtilities.create(projectSceneChild.type, settings);
        if (sceneChild) {
            var propKeys = Object.keys(props);
            propKeys.forEach(function (propKey) {
                SceneUtilities.setProp(sceneChild, propKey, parseFunction.unparse(props[propKey]), drawer);
            });
            if (projectSceneChild.children && projectSceneChild.children.length > 0) {
                for (var i = 0, len = projectSceneChild.children.length; i < len; i++) {
                    var child = this.parseSceneChild(projectSceneChild.children[i], drawer);
                    child && SceneUtilities.add(sceneChild, child);
                }
            }
            return sceneChild;
        }
        console.warn("[Urpflanze:JSONImporter] can't import", projectSceneChild);
        return null;
    };
    JSONImporter.createEmptyProject = function () {
        return {
            id: uuidv1(),
            name: '',
            width: 600,
            height: 600,
            resolution: 600,
            background: '#000',
            color: '#fff',
            clear: true,
            ghosts: 0,
            ghostSkipTime: 30,
            ratio: 1,
            scene: {},
            sequence: {
                durate: 6000,
                framerate: 60,
            },
        };
    };
    return JSONImporter;
}());
export default JSONImporter;
//# sourceMappingURL=JSONImporter.js.map