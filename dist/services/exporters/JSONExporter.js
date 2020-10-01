import Group from '@core/Group';
import Shape from '@core/shapes/Shape';
import ShapeBase from '@core/shapes/ShapeBase';
import ShapeBuffer from '@core/shapes/ShapeBuffer';
import ShapePrimitive from '@core/shapes/ShapePrimitive';
import Utilities from 'src/Utilites';
import JSONImporter from '@services/importers/JSONImporter';
import SceneUtilities from '@services/scene-utilities/SceneUtilities';
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
        const project = JSONImporter.createEmptyProject();
        project.name = name;
        project.width = scene.width;
        project.height = scene.height;
        project.resolution = drawer.getResolution();
        project.mainColor = scene.mainColor;
        project.background = scene.background;
        project.clearCanvas = drawer.getOption('clearCanvas', true);
        project.ghosts = drawer.getOption('ghosts', 0);
        project.ghost_skip_time = Utilities.parseFunction.parse(drawer.getOption('ghost_skip_time', 30));
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
            props[propsKeys[i]] = Utilities.parseFunction.parse(props[propsKeys[i]]);
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
            projectSceneChild.vertexCallback = Utilities.parseFunction.parse(sceneChild.vertexCallback);
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