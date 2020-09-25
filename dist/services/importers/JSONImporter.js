import Scene from "../../core/Scene";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import parseFunction from "../utilities/parseFunction";
import SceneUtilities from "../scene-utilities/SceneUtilities";
import { v1 as uuidv1 } from 'uuid';
export const createEmptyProject = () => {
    return {
        id: uuidv1(),
        name: '',
        width: 600,
        height: 600,
        background: '#000',
        mainColor: '#fff',
        clearCanvas: true,
        ghosts: 0,
        ghost_skip_time: 30,
        ratio: 1,
        scene: {},
        sequence: {
            start: 0,
            end: 6000,
            durate: 6000,
            framerate: 60,
        },
    };
};
class JSONImporter {
    parse(project_json) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!project_json)
            return null;
        const parsed = project_json && project_json.length > 0 ? JSON.parse(project_json) : {};
        if (!('scene' in parsed))
            return null;
        const emptyProject = createEmptyProject();
        const project = {
            id: (_a = parsed.id) !== null && _a !== void 0 ? _a : emptyProject.id,
            name: (_b = parsed.name) !== null && _b !== void 0 ? _b : emptyProject.name,
            width: (_c = parsed.width) !== null && _c !== void 0 ? _c : emptyProject.width,
            height: (_d = parsed.height) !== null && _d !== void 0 ? _d : emptyProject.height,
            background: (_e = parsed.background) !== null && _e !== void 0 ? _e : emptyProject.background,
            mainColor: (_f = parsed.mainColor) !== null && _f !== void 0 ? _f : emptyProject.mainColor,
            clearCanvas: (_g = parsed.clearCanvas) !== null && _g !== void 0 ? _g : emptyProject.clearCanvas,
            ghosts: (_h = parsed.ghosts) !== null && _h !== void 0 ? _h : emptyProject.ghosts,
            ghost_skip_time: (_j = parsed.ghost_skip_time) !== null && _j !== void 0 ? _j : emptyProject.ghost_skip_time,
            ghost_skip_function: (_k = parsed.ghost_skip_function) !== null && _k !== void 0 ? _k : emptyProject.ghost_skip_function,
            ratio: (_l = parsed.ratio) !== null && _l !== void 0 ? _l : emptyProject.ratio,
            scene: parsed.scene || emptyProject.scene,
            sequence: Object.assign(Object.assign({}, emptyProject.sequence), parsed.sequence),
        };
        project.sequence.durate = project.sequence.end - project.sequence.start;
        const drawOptions = {
            clearCanvas: project.clearCanvas,
            ghosts: project.ghosts,
            ghost_skip_time: parseFunction.unparse(project.ghost_skip_time),
        };
        const scene = new Scene({
            mainColor: project.mainColor,
            background: project.background,
            width: project.width,
            height: project.height,
        });
        const drawer = new DrawerCanvas(scene, undefined, drawOptions, project.ratio);
        const timeline = drawer.getTimeline();
        timeline.setSequence(project.sequence.start, project.sequence.end, project.sequence.framerate);
        const sceneChilds = Object.values(project.scene || []);
        for (let i = 0, len = sceneChilds.length; i < len; i++) {
            const sceneChild = this.parseSceneChild(sceneChilds[i], drawer);
            sceneChild && scene.add(sceneChild);
        }
        return drawer;
    }
    parseSceneChild(projectSceneChild, drawer) {
        const shape = typeof projectSceneChild.shape !== 'undefined'
            ? Float32Array.from(Object.values(projectSceneChild.shape))
            : undefined;
        const props = Object.assign({}, projectSceneChild.props);
        const propsKeys = Object.keys(props);
        for (let i = 0, len = propsKeys.length; i < len; i++)
            props[propsKeys[i]] = parseFunction.unparse(props[propsKeys[i]]);
        const settings = {
            id: projectSceneChild.id,
            name: projectSceneChild.name,
            order: projectSceneChild.order,
            data: projectSceneChild.data,
            bUseParent: projectSceneChild.bUseParent,
            bAdaptBuffer: projectSceneChild.bAdaptBuffer,
            bCloseShape: projectSceneChild.bCloseShape,
            vertexCallback: parseFunction.unparse(projectSceneChild.vertexCallback),
            shape: shape,
        };
        const sceneChild = SceneUtilities.create(projectSceneChild.type, settings);
        if (sceneChild) {
            ;
            Object.keys(props).forEach(propKey => {
                SceneUtilities.setProp(sceneChild, propKey, props[propKey], drawer);
            });
            if (projectSceneChild.children && projectSceneChild.children.length > 0) {
                for (let i = 0, len = projectSceneChild.children.length; i < len; i++) {
                    const child = this.parseSceneChild(projectSceneChild.children[i], drawer);
                    child && SceneUtilities.add(sceneChild, child);
                }
            }
            return sceneChild;
        }
        console.warn(`JSONImporter: can't import`, [projectSceneChild]);
        return null;
    }
}
export default JSONImporter;
//# sourceMappingURL=JSONImporter.js.map