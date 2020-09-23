import SceneChild from "../../core/SceneChild";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { IProject, IProjectSceneChild } from "../types/project";
export declare const createEmptyProject: () => IProject;
declare class JSONImporter {
    parse(project_json: string): DrawerCanvas | null;
    parseSceneChild(projectSceneChild: IProjectSceneChild, drawer: DrawerCanvas): SceneChild | null;
}
export default JSONImporter;
