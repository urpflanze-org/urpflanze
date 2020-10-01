import SceneChild from '@core/SceneChild';
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas';
import { IProject, IProjectSceneChild } from '@services/types/project';
declare class JSONImporter {
    static createEmptyProject: () => IProject;
    parse(project_json: string): DrawerCanvas | null;
    parseSceneChild(projectSceneChild: IProjectSceneChild, drawer: DrawerCanvas): SceneChild | null;
}
export default JSONImporter;
//# sourceMappingURL=JSONImporter.d.ts.map