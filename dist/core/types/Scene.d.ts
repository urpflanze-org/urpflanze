import { ISceneChildStreamArguments } from '@core/types/scene-child';
export declare type TStreamCallback = (stream_arguments: ISceneChildStreamArguments) => void;
/**
 * The object to pass as the argument of a new scene
 *
 * @interface ISceneSettingsInterface
 */
export interface ISceneSettingsInterface {
    width?: number;
    height?: number;
    background?: string;
    mainColor?: string;
}
/**
 * The minimum object to pass as the argument of a new SceneSchild implementation
 *
 * @interface ISceneChildInterface
 */
export interface ISceneChildInterface {
    id?: number | string;
    name?: string;
    type?: string;
    order?: number;
    data?: any;
}
//# sourceMappingURL=scene.d.ts.map