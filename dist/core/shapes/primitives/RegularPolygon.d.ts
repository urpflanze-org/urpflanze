import { IRegularPolygonProps, IRegularPolygonSettings } from "../../types/shape-primitive";
import ShapeLoop from "../ShapeLoop";
import { ISceneChildPropArguments } from "../../types/scene-child";
/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
declare class RegularPolygon extends ShapeLoop {
    protected props: IRegularPolygonProps;
    constructor(settings?: IRegularPolygonSettings);
    /**
     * Get property value
     *
     * @param {keyof IRegularPolygonProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof IRegularPolygonProps
     */
    getProp(key: keyof IRegularPolygonProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRegularPolygonProps | RegularPolygonSettings)} key
     * @param {*} [value]
     * @memberof IRegularPolygonProps
     */
    setProp(key: keyof IRegularPolygonProps | IRegularPolygonSettings, value?: any): void;
}
export default RegularPolygon;
//# sourceMappingURL=RegularPolygon.d.ts.map