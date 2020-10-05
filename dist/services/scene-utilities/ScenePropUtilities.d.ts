import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { TSceneChildPropsDataKeys } from "./SceneChildPropsData";
import { IShapeLoop, TAnimation, TDrawerTransformation, TDrawerValue } from "../types/animation";
import { IShapeLoopGenerator, TVertexCallback } from "../../core/types/shape-primitive";
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
    static composeLoop(loop: IShapeLoop): IShapeLoopGenerator;
    static bValueAnimation(value: TAnimation | any): boolean;
    static bValueDrawer(value: TDrawerValue | any): boolean;
    static bPropTransformable(name: string, value: any): boolean;
    static getValueDrawerTransformationType(name: string): TDrawerTransformation | null;
    static getTransformedValue(drawer: DrawerCanvas, name: string, value: any): string | number | Array<number>;
    static getTransformedValueInverse(drawer: DrawerCanvas, name: TSceneChildPropsDataKeys, value: any): number | Array<number>;
}
export default ScenePropUtilities;
//# sourceMappingURL=ScenePropUtilities.d.ts.map