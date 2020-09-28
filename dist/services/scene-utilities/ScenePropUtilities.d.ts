import { ShapeBasePropArguments, ShapeLoopGenerator } from "../../core/types/ShapeBase";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { TSceneChildPropsDataKeys } from "./SceneChildPropsData";
import { IShapeLoop, TAnimation, TDrawerTransformation, TDrawerValue } from "../types/animation";
declare class ScenePropUtilities {
    static readonly RAW_ARGUMENTS: string;
    static readonly RAW_ARGUMENTS_WIT_PARENT: string;
    static bValueLoop(value: any): boolean;
    static bValueVertexCallback(value: any): boolean;
    static composeVertexCallback(value: any): ((vertex: Array<number> | Float32Array, prop_argumens: ShapeBasePropArguments, vertex_index: number, vertex_length: number) => Array<number> | Float32Array) | undefined;
    static composeLoop(loop: IShapeLoop): ShapeLoopGenerator;
    static bValueAnimation(value: TAnimation | any): boolean;
    static bValueDrawer(value: TDrawerValue | any): boolean;
    static bPropTransformable(name: string, value: any): boolean;
    static getValueDrawerTransformationType(name: string): TDrawerTransformation | null;
    static getTransformedValue(drawer: DrawerCanvas, name: string, value: any): string | number | Array<number>;
    static getTransformedValueInverse(drawer: DrawerCanvas, name: TSceneChildPropsDataKeys, value: any): number | Array<number>;
}
export default ScenePropUtilities;
