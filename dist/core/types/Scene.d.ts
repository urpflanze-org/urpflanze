import { ISceneChildStreamArguments } from "./scene-child";
/**
 * @category Core.Types
 */
export declare type TStreamCallback = (stream_arguments: ISceneChildStreamArguments) => void;
/**
 * The object to pass as the argument of a new scene
 *
 * @category Core.Interfaces
 */
export interface ISceneSettingsInterface {
    /**
     * Scene width
     * @order 1
     */
    width?: number;
    /**
     * Scene height
     * @order 2
     */
    height?: number;
    /**
     * Default background color
     * @order 3
     */
    background?: string;
    /**
     * Default stroke color of shapes
     * @order 4
     */
    mainColor?: string;
}
/**
 * The minimum object to pass as the argument of a new SceneSchild implementation
 *
 * @category Core.Interfaces
 */
export interface ISceneChildInterface {
    id?: number | string;
    name?: string;
    type?: string;
    order?: number;
    data?: any;
}
//# sourceMappingURL=scene.d.ts.map