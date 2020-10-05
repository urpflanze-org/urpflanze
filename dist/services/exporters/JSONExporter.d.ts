import SceneChild from "../../core/SceneChild";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { IProject, IProjectSceneChild } from "../types/project";
/**
 *
 * @category Services
 * @class JSONExporter
 */
declare class JSONExporter {
    parse(drawer: DrawerCanvas, name?: string): string;
    toString(project: IProject): string;
    parseAsProject(drawer: DrawerCanvas, name?: string): IProject;
    parseSceneChild(sceneChild: SceneChild, parent_id?: string | number, depth?: number): IProjectSceneChild;
}
export default JSONExporter;
//# sourceMappingURL=JSONExporter.d.ts.map