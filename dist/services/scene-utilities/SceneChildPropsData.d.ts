import { TDrawerTransformation } from '@services/types/animation';
import { TSceneChildProps } from '@services/types/scene-utilities';
export declare type TPropInputType = 'range' | 'multiple-range' | 'color' | 'select' | 'checkbox' | 'radio' | 'slider';
export interface ISceneChildPropData {
    label: string;
    name: string;
    type: TPropInputType;
    min?: number;
    max?: number;
    step?: number;
    options?: Array<{
        key: string;
        value: any;
    }>;
    default: any;
    default_animate?: any;
    canBArray?: boolean;
    transformation: TDrawerTransformation;
    animable?: boolean;
    type_value?: 'float' | 'int';
}
export declare type TSceneChildPropsDataKeys = Exclude<keyof TSceneChildProps | 'loop.start' | 'loop.end' | 'loop.inc', 'shapeLoopPropsDependencies' | 'vertexCallback' | 'loop' | 'name' | 'order' | 'type' | 'data' | 'shape' | 'id'>;
declare type TSceneChildUtilityProps = {
    [key in TSceneChildPropsDataKeys]: ISceneChildPropData;
};
declare const SceneChildPropsData: TSceneChildUtilityProps;
export default SceneChildPropsData;
//# sourceMappingURL=SceneChildPropsData.d.ts.map