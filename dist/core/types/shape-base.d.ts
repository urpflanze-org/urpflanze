import { ISceneChildProps, ISceneChildSettings, TSceneChildProp } from '@core/types/scene-child';
import SceneChild from '@core/SceneChild';
import { TVertexCallback } from '@core/types/shape-primitive';
export interface IShapeBaseSettings extends ISceneChildSettings {
    bUseParent?: boolean;
}
export interface IShapeSettings extends IShapeBaseSettings {
    shape?: SceneChild;
}
export interface IShapePrimitiveProps extends ISceneChildProps {
    sideLength?: TSceneChildProp<number | Array<number>>;
    fillColor?: TSceneChildProp<number | string>;
    lineWidth?: TSceneChildProp<number>;
    strokeColor?: TSceneChildProp<number | string>;
}
export declare enum EShapePrimitiveAdaptMode {
    None = 0,
    Scale = 2,
    Center = 4,
    Fill = 8
}
export interface IShapePrimitiveSettings extends IShapePrimitiveProps, IShapeBaseSettings {
    bAdaptBuffer?: EShapePrimitiveAdaptMode;
    bCloseShape?: boolean;
    vertexCallback?: TVertexCallback;
    fillColor?: TSceneChildProp<number | string>;
    lineWidth?: TSceneChildProp<number>;
    strokeColor?: TSceneChildProp<number | string>;
}
export interface IShapeBounding {
    x: number;
    y: number;
    cx: number;
    cy: number;
    width: number;
    height: number;
}
//# sourceMappingURL=shape-base.d.ts.map