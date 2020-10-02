import { EShapePrimitiveAdaptMode } from '@core/types/shape-base';
import { IShapeLoop, IVertexCallback, TAnimation, TCallableValue, TDrawerValue } from '@services/types/animation';
import { TSceneChildProps } from './scene-utilities';
export interface IProjectSequence {
    start: number;
    end: number;
    durate: number;
    framerate: number;
}
export interface IProject {
    id: string;
    name: string;
    mainColor: string;
    background: string;
    width?: number;
    height?: number;
    resolution?: number;
    ratio: number;
    backgroundImage?: string;
    clearCanvas: boolean;
    ghosts: number;
    ghost_skip_time?: number;
    ghost_skip_function?: number | string | Function;
    sequence: IProjectSequence;
    scene: IProjectScene;
}
export interface IProjectScene {
    [key: string]: IProjectSceneChild;
}
export interface IProjectSceneChildData {
    highlighted: boolean;
    visible: boolean;
    disableGhost: boolean;
    imported?: boolean;
    fillColor?: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    strokeColor?: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
}
export declare type IProjectSceneChildDataProps = {
    [k in keyof Omit<TSceneChildProps, 'id' | 'name' | 'order' | 'data' | 'bAdaptBuffer' | 'bCloseShape' | 'shape' | 'loop' | 'vertexCallback'>]: TAnimation | TCallableValue<number | Array<number> | string> | TDrawerValue;
} & {
    loop?: IShapeLoop;
    vertexCallback?: IVertexCallback;
};
export interface IProjectSceneChild {
    type: string;
    id: string;
    name: string;
    order: number;
    data: IProjectSceneChildData;
    bAdaptBuffer?: EShapePrimitiveAdaptMode;
    bCloseShape?: boolean;
    bUseParent?: boolean;
    vertexCallback?: string;
    shape?: Float32Array;
    bPrimitive: boolean;
    depth: number;
    props: IProjectSceneChildDataProps;
    parent_id?: string | number;
    children?: Array<IProjectSceneChild>;
}
//# sourceMappingURL=project.d.ts.map