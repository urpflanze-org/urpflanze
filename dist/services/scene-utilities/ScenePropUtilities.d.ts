import DrawerCanvas from "../drawers/drawer-canvas/DrawerCanvas";
import { TSceneChildPropsDataKeys } from "./SceneChildPropsData";
import { IShapeLoopAnimation, TAnimation } from "../types/animation";
import { IShapeLoopGenerator } from "../../core/types/shape-primitive";
import { TVertexCallback } from "../../core/types/shape-base";
import { TDrawerTransformation, TDrawerValue } from "../types/drawer-canvas";
import Drawer from "../drawers/Drawer";
/**
 *
 * @category Services.Scene Utilities
 * @class ScenePropUtilities
 */
declare class ScenePropUtilities {
    static readonly RAW_ARGUMENTS: string;
    static readonly RAW_ARGUMENTS_WITH_PARENT: string;
    static bValueLoop(value: any): boolean;
    static bValueVertexCallback(value: any): boolean;
    static composeVertexCallback(value: any): TVertexCallback | undefined;
    static composeLoop(loop: IShapeLoopAnimation): IShapeLoopGenerator;
    static bValueAnimation(value: TAnimation | any): boolean;
    static bValueDrawer(value: TDrawerValue | any): boolean;
    static bPropTransformable(name: string, value: any): boolean;
    static getValueDrawerTransformationType(name: string): TDrawerTransformation | null;
    static getTransformedValue(drawer: Drawer<any, any>, name: string, value: any): string | number | Array<number>;
    static getTransformedValueInverse(drawer: DrawerCanvas, name: TSceneChildPropsDataKeys, value: any): number | Array<number>;
}
export default ScenePropUtilities;
//# sourceMappingURL=ScenePropUtilities.d.ts.map