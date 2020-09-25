import Group from "../../core/Group";
import Shape from "../../core/shapes/Shape";
import ShapeBuffer from "../../core/shapes/ShapeBuffer";
import ShapePrimitive from "../../core/shapes/ShapePrimitive";
import { createEmptyProject } from "../importers/JSONImporter";
import parseFunction from "../utilities/parseFunction";
import SceneUtilities from "../scene-utilities/SceneUtilities";
import ShapeBase from "../../core/shapes/ShapeBase";
class JSONExporter {
    parse(drawer, name = 'EmptyProject') {
        return this.toString(this.parseAsProject(drawer, name));
    }
    toString(project) {
        return JSON.stringify(project);
    }
    parseAsProject(drawer, name = 'EmptyProject') {
        const scene = drawer.getScene();
        const timeline = drawer.getTimeline();
        const project = createEmptyProject();
        project.name = name;
        project.width = scene.width;
        project.height = scene.height;
        project.mainColor = scene.mainColor;
        project.background = scene.background;
        project.clearCanvas = drawer.getOption('clearCanvas', true);
        project.ghosts = drawer.getOption('ghosts', 0);
        project.ghost_skip_time = parseFunction.parse(drawer.getOption('ghost_skip_time', 30));
        project.ratio = drawer.getRatio();
        const { start, end, framerate } = timeline.getSequence();
        project.sequence = { start, end, framerate, durate: end - start };
        project.scene = {};
        const sceneChilds = scene.getChildren();
        for (let i = 0, len = sceneChilds.length; i < len; i++) {
            project.scene[sceneChilds[i].id] = this.parseSceneChild(sceneChilds[i]);
        }
        return project;
    }
    parseSceneChild(sceneChild, parent_id, depth = 0) {
        const projectSceneChild = {
            id: sceneChild.id + '',
            type: sceneChild.type,
            name: sceneChild.name,
            order: sceneChild.order,
            data: Object.assign(Object.assign({}, sceneChild.data), { props: undefined }),
            depth,
            bPrimitive: sceneChild instanceof ShapePrimitive,
            props: {},
            parent_id,
        };
        const props = sceneChild.getProps();
        const propsKeys = Object.keys(props);
        for (let i = 0, len = propsKeys.length; i < len; i++)
            if (!(propsKeys[i] in sceneChild.data.props))
                props[propsKeys[i]] = parseFunction.parse(props[propsKeys[i]]);
        projectSceneChild.props = Object.assign(Object.assign({}, props), sceneChild.data.props);
        if (sceneChild instanceof ShapeBuffer) {
            projectSceneChild.shape = sceneChild.shape;
        }
        if (sceneChild instanceof ShapeBase) {
            projectSceneChild.bUseParent = sceneChild.bUseParent;
        }
        if (sceneChild instanceof ShapePrimitive) {
            projectSceneChild.bAdaptBuffer = sceneChild.bAdaptBuffer;
            projectSceneChild.bCloseShape = sceneChild.bCloseShape;
            projectSceneChild.vertexCallback = parseFunction.parse(sceneChild.vertexCallback);
        }
        else if (sceneChild instanceof Shape || sceneChild instanceof Group) {
            const children = [];
            const shapeChildren = SceneUtilities.getChildren(sceneChild);
            for (let i = 0; i < shapeChildren.length; i++)
                children.push(this.parseSceneChild(shapeChildren[i], sceneChild.id, depth + 1));
            projectSceneChild.children = children;
        }
        return projectSceneChild;
    }
}
export default JSONExporter;
//# sourceMappingURL=JSONExporter.js.map