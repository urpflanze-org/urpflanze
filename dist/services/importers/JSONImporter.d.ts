import SceneChild from "../../core/SceneChild";
import DrawerCanvas from "../drawers/drawer-canvas/DrawerCanvas";
import { IProject, IProjectSceneChild } from "../types/project";
/**
 *
 * @category Services
 * @class JSONImporter
 */
declare class JSONImporter {
    static createEmptyProject: () => IProject;
    parse(project_json: string): DrawerCanvas | null;
    parseSceneChild(projectSceneChild: IProjectSceneChild, drawer: DrawerCanvas): SceneChild | null;
}
export default JSONImporter;
//# sourceMappingURL=JSONImporter.d.ts.map