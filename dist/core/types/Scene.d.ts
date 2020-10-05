import { ISceneChildStreamArguments } from "./scene-child";
export declare type TStreamCallback = (stream_arguments: ISceneChildStreamArguments) => void;
/**
 * The object to pass as the argument of a new scene
 *
 * @category Core.Interfaces
 * @interface ISceneSettingsInterface
 */
export interface ISceneSettingsInterface {
    width?: number;
    height?: number;
    /**
     * Default becakground color
     */
    background?: string;
    /**
     * Default stroke color of shapes
     */
    mainColor?: string;
}
/**
 * The minimum object to pass as the argument of a new SceneSchild implementation
 *
 * @category Core.Interfaces
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