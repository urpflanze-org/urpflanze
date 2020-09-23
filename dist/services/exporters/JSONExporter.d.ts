import SceneChild from "../../core/SceneChild";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { IProject, IProjectSceneChild } from "../types/project";
declare class JSONExporter {
    parse(drawer: DrawerCanvas, name?: string): string;
    toString(project: IProject): string;
    parseAsProject(drawer: DrawerCanvas, name?: string): IProject;
    parseSceneChild(sceneChild: SceneChild, parent_id?: string | number, depth?: number): IProjectSceneChild;
}
export default JSONExporter;
